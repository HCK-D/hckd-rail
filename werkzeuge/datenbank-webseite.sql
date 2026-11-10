-- RailBase.ch: Konto auf der Webseite (gleiches Supabase-Projekt wie RailBase Legends, ilxtsqfbsejrjgfxkxdf)
-- Einmal im Supabase SQL Editor einfügen und «Run» drücken. Nochmals ausführen schadet nicht.
--
-- Ein Konto für beide Seiten: Wer sich auf railbase.ch oder railbase-legends.ch registriert,
-- meldet sich auf der anderen Seite mit derselben E-Mail und demselben Passwort (oder Google) an.
-- Jede Seite speichert ihre eigenen Sachen in ihrer eigenen Tabelle:
--   public.spieler   = Spielstand von RailBase Legends (werkzeuge/datenbank.sql im Spiel)
--   public.webseite  = Sammlung, Sichtungen, Quiz-Bestwerte usw. von railbase.ch (diese Datei)
--   public.profil    = Vorname, Nachname (freiwillig), Profilbild und Bestätigung «mindestens 16» (diese Datei)
--   public.foto_eingang + Speicher «fotos-eingang» = eingesandte Fotos, auch ohne Konto (diese Datei, ganz unten)
-- Wird ein Konto gelöscht, verschwinden beide Einträge automatisch (on delete cascade).

create table if not exists public.webseite (
  id uuid primary key references auth.users (id) on delete cascade,
  stand jsonb not null default '{}'::jsonb check (pg_column_size(stand) < 300000),
  geaendert timestamptz not null default now()
);

alter table public.webseite enable row level security;

-- Jeder sieht und ändert nur seinen eigenen Eintrag
drop policy if exists "webseite_lesen" on public.webseite;
drop policy if exists "webseite_anlegen" on public.webseite;
drop policy if exists "webseite_aendern" on public.webseite;
drop policy if exists "webseite_loeschen" on public.webseite;
create policy "webseite_lesen" on public.webseite for select to authenticated using (id = auth.uid());
create policy "webseite_anlegen" on public.webseite for insert to authenticated with check (id = auth.uid());
create policy "webseite_aendern" on public.webseite for update to authenticated using (id = auth.uid()) with check (id = auth.uid());
create policy "webseite_loeschen" on public.webseite for delete to authenticated using (id = auth.uid());

-- «Automatically expose new tables» ist aus: darum jedes Recht einzeln freigeben
revoke all on public.webseite from anon, authenticated;
grant select, insert, update, delete on public.webseite to authenticated;

-- ---------- Profil: Vorname, Nachname, Bestätigung «mindestens 16» (gilt für das ganze Konto) ----------
-- Ein Konto gibt es erst ab 16 Jahren (Regel von RailBase). Seit 10.11.2026 nur noch als Häkchen:
-- gespeichert wird ab16 (ja) und wann es bestätigt wurde (ab16_am), kein Geburtsdatum mehr.
-- Die Spalte geburtsdatum bleibt nur für ältere Website-Versionen bestehen und ist immer leer.
create table if not exists public.profil (
  id uuid primary key references auth.users (id) on delete cascade,
  vorname text not null check (char_length(btrim(vorname)) between 1 and 50),
  nachname text not null default '' check (char_length(btrim(nachname)) <= 50),
  geburtsdatum date,
  erstellt timestamptz not null default now(),
  geaendert timestamptz not null default now()
);
alter table public.profil alter column geburtsdatum drop not null;
alter table public.profil add column if not exists ab16 boolean not null default false;
alter table public.profil add column if not exists ab16_am timestamptz;

-- Nachname ist freiwillig (leer erlaubt); für Tabellen, die schon mit Pflicht-Nachname angelegt wurden
alter table public.profil drop constraint if exists profil_nachname_check;
alter table public.profil add constraint profil_nachname_check check (char_length(btrim(nachname)) <= 50);
alter table public.profil alter column nachname set default '';

-- Profilbild wie in RailBase Legends: ein Kürzel (z. B. 'dampflok') oder 'eigen' mit eigenem Foto,
-- klein und quadratisch als Bild-Text (data:image/…, höchstens 160 × 160 Pixel)
alter table public.profil add column if not exists bild text not null default '' check (bild ~ '^[a-z0-9-]{0,20}$');
alter table public.profil add column if not exists bild_foto text not null default '' check (
  bild_foto = '' or (char_length(bild_foto) < 16000 and bild_foto ~ '^data:image/(webp|jpeg|png);base64,[A-Za-z0-9+/=]+$')
);

-- Mindestalter 16 bei jedem Speichern prüfen: Ohne Bestätigung (ab16) gibt es kein Profil.
-- Schickt eine ältere Website-Version noch ein Geburtsdatum, wird nur das Alter geprüft und das Datum NICHT gespeichert.
create or replace function public.profil_pruefen()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if new.geburtsdatum is not null then
    if new.geburtsdatum > (current_date - interval '16 years')::date or new.geburtsdatum < date '1900-01-01' then
      raise exception 'Mindestalter 16 Jahre' using errcode = 'P0001', hint = 'mindestalter';
    end if;
    new.ab16 := true;
    new.geburtsdatum := null;
  end if;
  if tg_op = 'UPDATE' and old.ab16 then
    new.ab16 := true; -- einmal bestätigt bleibt bestätigt
  end if;
  if not coalesce(new.ab16, false) then
    raise exception 'Mindestalter 16 Jahre' using errcode = 'P0001', hint = 'mindestalter';
  end if;
  if tg_op = 'INSERT' then
    new.ab16_am := now();
  else
    new.ab16_am := coalesce(old.ab16_am, new.ab16_am, now());
  end if;
  new.vorname := btrim(new.vorname);
  new.nachname := btrim(new.nachname);
  new.geaendert := now();
  if tg_op = 'UPDATE' then
    new.erstellt := old.erstellt;
  end if;
  return new;
end;
$$;
revoke all on function public.profil_pruefen() from public, anon, authenticated;

drop trigger if exists profil_pruefen on public.profil;
create trigger profil_pruefen before insert or update on public.profil
  for each row execute function public.profil_pruefen();

-- Bestehende Konten: Das Alter wurde früher mit dem Geburtsdatum geprüft. Als bestätigt übernehmen
-- (Datum der Bestätigung = Erstellung des Profils) und alle gespeicherten Geburtsdaten löschen.
update public.profil
  set ab16 = true, ab16_am = coalesce(ab16_am, erstellt), geburtsdatum = null
  where geburtsdatum is not null or (ab16 = false and ab16_am is null);

alter table public.profil enable row level security;

drop policy if exists "profil_lesen" on public.profil;
drop policy if exists "profil_anlegen" on public.profil;
drop policy if exists "profil_aendern" on public.profil;
create policy "profil_lesen" on public.profil for select to authenticated using (id = auth.uid());
create policy "profil_anlegen" on public.profil for insert to authenticated with check (id = auth.uid());
create policy "profil_aendern" on public.profil for update to authenticated using (id = auth.uid()) with check (id = auth.uid());

revoke all on public.profil from anon, authenticated;
grant select, insert, update on public.profil to authenticated;

-- ---------- Admin: wer auf der Seite «Mein Konto» den Knopf «Admin» sieht ----------
-- Die Liste ist von aussen nicht lesbar; die Website fragt nur ist_admin() (ja oder nein).
-- Admin eintragen (einmal im SQL Editor, mit der eigenen E-Mail; die Adresse steht absichtlich nicht hier):
--   insert into public.admins (id) select id from auth.users where lower(email) = lower('DEINE-EMAIL') on conflict do nothing;
create table if not exists public.admins (
  id uuid primary key references auth.users (id) on delete cascade
);
alter table public.admins enable row level security;
revoke all on public.admins from anon, authenticated;

create or replace function public.ist_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.admins where id = auth.uid());
$$;
revoke all on function public.ist_admin() from public, anon;
grant execute on function public.ist_admin() to authenticated;

-- ---------- Konto selbst löschen (Website: Konto → «Konto löschen»; gleiche Funktion wie im Spiel) ----------
-- Löscht das eigene Konto in auth.users. Alles andere hängt daran und geht mit (on delete cascade):
-- Website-Daten (webseite), Profil (profil) und im Spiel Spielstand, Freunde, Tausch-Anfragen und Geschenke.
create or replace function public.konto_loeschen()
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then
    raise exception 'Du bist nicht angemeldet.';
  end if;
  delete from auth.users where id = auth.uid();
end
$$;

revoke all on function public.konto_loeschen() from public, anon;
grant execute on function public.konto_loeschen() to authenticated;

-- ---------- Fotos einsenden (Website: «Foto einsenden», js/fotos.js; seit 10.11.2026) ----------
-- Jeder darf Fotos hochladen, auch ohne Konto. Niemand ausser dem Admin kann sie ansehen, ändern oder löschen.
-- Ablage: privater Ordner «fotos-eingang» (Storage), je Einsendung ein Unterordner <id>/1.jpg … 5.jpg.
-- Die Angaben zur Einsendung (Name, E-Mail, Erlaubnis mit Wortlaut) stehen in public.foto_eingang.
-- Schutz vor Missbrauch (Gratis-Plan hat 1 GB Speicher): höchstens 25 MB pro Foto, nur JPG/PNG/WebP,
-- insgesamt höchstens 400 Fotos und 800 MB, und höchstens 40 Fotos pro Stunde. Ist das erreicht,
-- klappt das Hochladen erst wieder, wenn der Admin Fotos gelöscht hat bzw. die Stunde um ist.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('fotos-eingang', 'fotos-eingang', false, 26214400, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do update
  set public = false, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

create or replace function public.fotos_platz_frei()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select (select count(*) from storage.objects where bucket_id = 'fotos-eingang') < 400
     and (select coalesce(sum((metadata ->> 'size')::bigint), 0) from storage.objects where bucket_id = 'fotos-eingang') < 800 * 1024 * 1024
     and (select count(*) from storage.objects where bucket_id = 'fotos-eingang' and created_at > now() - interval '1 hour') < 40;
$$;
revoke all on function public.fotos_platz_frei() from public;
grant execute on function public.fotos_platz_frei() to anon, authenticated;

create table if not exists public.foto_eingang (
  id uuid primary key,
  erstellt timestamptz not null default now(),
  fahrzeug_id text not null check (fahrzeug_id ~ '^[a-z0-9-]{1,60}$'),
  fahrzeug text not null check (char_length(fahrzeug) between 1 and 200),
  fotograf text not null check (char_length(btrim(fotograf)) between 2 and 100),
  email text not null check (char_length(email) <= 200 and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
  ort_datum text not null default '' check (char_length(ort_datum) <= 1000),
  dateien text[] not null check (cardinality(dateien) between 1 and 5),
  erlaubnis jsonb not null check (pg_column_size(erlaubnis) < 8000),
  legends boolean not null default false,
  social boolean not null default false,
  sprache text not null default '' check (char_length(sprache) <= 20),
  fotos_geloescht timestamptz
);

-- Eine Einsendung darf nur auf eigene, gerade hochgeladene Fotos zeigen (Ordner = id, höchstens 1 Stunde alt)
create or replace function public.fotos_dateien_ok(p_id uuid, p_dateien text[])
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select cardinality(p_dateien) between 1 and 5
     and (select bool_and(d ~ ('^' || p_id::text || '/[1-5]\.(jpg|png|webp)$')) from unnest(p_dateien) d)
     and (select count(*) from storage.objects o
           where o.bucket_id = 'fotos-eingang' and o.name = any (p_dateien)
             and o.created_at > now() - interval '1 hour') = cardinality(p_dateien);
$$;
revoke all on function public.fotos_dateien_ok(uuid, text[]) from public;
grant execute on function public.fotos_dateien_ok(uuid, text[]) to anon, authenticated;

alter table public.foto_eingang enable row level security;
drop policy if exists "foto_eingang_anlegen" on public.foto_eingang;
drop policy if exists "foto_eingang_admin_lesen" on public.foto_eingang;
drop policy if exists "foto_eingang_admin_aendern" on public.foto_eingang;
drop policy if exists "foto_eingang_admin_loeschen" on public.foto_eingang;
create policy "foto_eingang_anlegen" on public.foto_eingang for insert to anon, authenticated
  with check (fotos_geloescht is null and public.fotos_dateien_ok(id, dateien));
create policy "foto_eingang_admin_lesen" on public.foto_eingang for select to authenticated using (public.ist_admin());
create policy "foto_eingang_admin_aendern" on public.foto_eingang for update to authenticated using (public.ist_admin()) with check (public.ist_admin());
create policy "foto_eingang_admin_loeschen" on public.foto_eingang for delete to authenticated using (public.ist_admin());
revoke all on public.foto_eingang from anon, authenticated;
grant insert on public.foto_eingang to anon, authenticated;
grant select, update, delete on public.foto_eingang to authenticated;

-- Fotos im Ordner: hochladen darf jeder (nur neue Dateien, nur mit passendem Namen), sehen und löschen nur der Admin
drop policy if exists "fotos_eingang_hochladen" on storage.objects;
drop policy if exists "fotos_eingang_admin_lesen" on storage.objects;
drop policy if exists "fotos_eingang_admin_loeschen" on storage.objects;
create policy "fotos_eingang_hochladen" on storage.objects for insert to anon, authenticated
  with check (
    bucket_id = 'fotos-eingang'
    and name ~ '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/[1-5]\.(jpg|png|webp)$'
    and public.fotos_platz_frei()
  );
create policy "fotos_eingang_admin_lesen" on storage.objects for select to authenticated
  using (bucket_id = 'fotos-eingang' and public.ist_admin());
create policy "fotos_eingang_admin_loeschen" on storage.objects for delete to authenticated
  using (bucket_id = 'fotos-eingang' and public.ist_admin());
