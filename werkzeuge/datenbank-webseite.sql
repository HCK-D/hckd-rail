-- RailBase.ch: Konto auf der Webseite (gleiches Supabase-Projekt wie RailBase Legends, ilxtsqfbsejrjgfxkxdf)
-- Einmal im Supabase SQL Editor einfügen und «Run» drücken. Nochmals ausführen schadet nicht.
--
-- Ein Konto für beide Seiten: Wer sich auf railbase.ch oder railbase-legends.ch registriert,
-- meldet sich auf der anderen Seite mit derselben E-Mail und demselben Passwort (oder Google) an.
-- Jede Seite speichert ihre eigenen Sachen in ihrer eigenen Tabelle:
--   public.spieler   = Spielstand von RailBase Legends (werkzeuge/datenbank.sql im Spiel)
--   public.webseite  = Sammlung, Sichtungen, Quiz-Bestwerte usw. von railbase.ch (diese Datei)
--   public.profil    = Vorname, Nachname (freiwillig) und Geburtsdatum des Kontos, Mindestalter 16 (diese Datei)
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

-- ---------- Profil: Vorname, Name, Geburtsdatum (gilt für das ganze Konto) ----------
-- Ein Konto gibt es erst ab 16 Jahren. Das prüft die Website, und hier nochmals die Datenbank.
create table if not exists public.profil (
  id uuid primary key references auth.users (id) on delete cascade,
  vorname text not null check (char_length(btrim(vorname)) between 1 and 50),
  nachname text not null default '' check (char_length(btrim(nachname)) <= 50),
  geburtsdatum date not null,
  erstellt timestamptz not null default now(),
  geaendert timestamptz not null default now()
);

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

-- Mindestalter 16 bei jedem Speichern prüfen (in einer Prüfregel ginge das heutige Datum nicht)
create or replace function public.profil_pruefen()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if new.geburtsdatum > (current_date - interval '16 years')::date then
    raise exception 'Mindestalter 16 Jahre' using errcode = 'P0001', hint = 'mindestalter';
  end if;
  if new.geburtsdatum < date '1900-01-01' then
    raise exception 'Geburtsdatum ungültig' using errcode = 'P0001';
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
