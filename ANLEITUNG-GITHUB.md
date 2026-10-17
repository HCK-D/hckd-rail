# HCKD RAIL auf GitHub Pages stellen

Etwa 20 Minuten. Am Ende ist die Seite unter `https://DEINNAME.github.io/hckd-rail/` online, kostenlos.

## 1. Vorbereiten (einmal)

1. **Impressum und Datenschutz:** In `index.html` nach `platzhalter` suchen und `[Vorname Nachname]`,
   `[Strasse Nr.]` und `[PLZ Ort]` ersetzen. Danach `<span class="platzhalter">` und `</span>` um den Text entfernen.
   Eine Adresse ist in der Schweiz nur bei kommerziellen Seiten Pflicht. Für den Datenschutz muss aber erkennbar sein,
   wer verantwortlich ist: mindestens Name und Ort.
2. **Web3Forms-Schlüssel** (damit «Fehler melden» ein Mail schickt): auf https://web3forms.com deine Mailadresse eingeben,
   den Access Key aus dem Mail in `js\melden.js` eintragen: `web3formsKey: 'a1b2c3d4-...'`.
   Der Schlüssel darf öffentlich sein; deine Mailadresse steht nirgends im Code.
3. **Adresse der Website:** In `werkzeuge\website-adresse.txt` die letzte Zeile anpassen, z. B.
   `https://deinname.github.io/hckd-rail/` (dein GitHub-Benutzername, klein geschrieben, und der Name des Repositorys).
   Daraus entstehen `sitemap.xml`, die Vorschaubilder für WhatsApp & Co. und die Canonical-Links.

## 2. Website bauen

Im Projektordner in PowerShell:

    powershell -ExecutionPolicy Bypass -File werkzeuge\website-bauen.ps1

Das erzeugt den Ordner **`docs`**:

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite |
| `re-460.html`, `cargo.html`, … | eine Datei pro Fahrzeug und Kategorie, mit eigenem Titel und Vorschaubild |
| `impressum.html`, `datenschutz.html`, `vergleich.html` | die Textseiten und der Vergleich |
| `css/`, `js/`, `bilder/`, `schrift/` | alles, was die Seite braucht; die Schrift kommt vom eigenen Server, nicht von Google |
| `sitemap.xml`, `robots.txt`, `404.html`, `favicon.svg`, `.nojekyll` | für Suchmaschinen, Fehlerseite, Browser-Symbol, GitHub |

Die Meldungen am Schluss zeigen, was noch fehlt (Schlüssel, Adresse, Platzhalter).
**Nach jeder Änderung** (neuer Zug, neue Fotos, neuer Text) diesen Schritt wiederholen.

Vorher ansehen:

    powershell -ExecutionPolicy Bypass -File werkzeuge\vorschau.ps1 -File docs\index.html -Port 8770 -Roh

Dann http://localhost:8770 öffnen, auch z. B. http://localhost:8770/re-460.html.

## 3. Auf GitHub hochladen

Am einfachsten mit **GitHub Desktop** (https://desktop.github.com). Der Upload im Browser nimmt höchstens
100 Dateien auf einmal, `docs` hat rund 150.

1. Auf github.com ein Konto anlegen (falls noch keins da ist).
2. GitHub Desktop öffnen, anmelden, **File → Add local repository** → den Ordner `hckd-rail` auf dem Desktop wählen.
   GitHub Desktop fragt, ob ein Repository erstellt werden soll: **create a repository**, Name `hckd-rail`.
3. Unten links eine Beschreibung eingeben, z. B. «Erste Version», dann **Commit to main**.
4. Oben **Publish repository**. Das Häkchen «Keep this code private» entfernen
   (GitHub Pages ist mit einem Gratiskonto nur für öffentliche Repositorys verfügbar).
5. Auf github.com im Repository: **Settings → Pages**. Bei «Build and deployment»:
   Source **Deploy from a branch**, Branch **main**, Ordner **/docs**, **Save**.
6. Nach 1–2 Minuten steht oben die Adresse. Die Seite ist online.

Die Datei `.gitignore` sorgt dafür, dass `archiv/` und die Einstellungen in `.claude/` nicht hochgeladen werden.
Hochgeladen werden die Quelldateien (`index.html`, `css`, `js`, `bilder`, `werkzeuge`) und der fertige Ordner `docs`.
Alles im Repository ist öffentlich lesbar; trag also nichts Privates in die Dateien ein.

### Später aktualisieren

1. Änderung machen, Schritt 2 (Website bauen) ausführen.
2. In GitHub Desktop: Beschreibung eingeben, **Commit to main**, dann **Push origin**.
3. Nach 1–2 Minuten ist die neue Version online.

## 4. Besucherzähler einrichten (freiwillig, nur du siehst die Zahlen)

1. Auf https://www.goatcounter.com ein Gratiskonto anlegen. Als «Code» einen Namen wählen, z. B. `hckd-rail`.
   Deine Statistik liegt dann unter `https://hckd-rail.goatcounter.com`; nur du kannst sie nach dem Anmelden sehen.
   In den Einstellungen von GoatCounter darf «public view» nicht eingeschaltet sein (ist es am Anfang nicht).
2. In `js\statistik.js` den Code eintragen: `goatcounter: 'hckd-rail'`.
3. Website bauen und hochladen (Schritt 2 und «Später aktualisieren»).
4. Eigene Besuche nicht mitzählen: deine Website einmal mit `#toggle-goatcounter` am Ende öffnen,
   z. B. `https://deinname.github.io/hckd-rail/#toggle-goatcounter`, und bestätigen. Das gilt pro Browser und Gerät.

GoatCounter setzt keine Cookies. In der Datenschutzerklärung ist der Zähler schon beschrieben.
Lässt du den Code leer, wird nichts gezählt; dann den Abschnitt «Besucherzählung» in `index.html` löschen.

## 5. Bei Google anmelden (freiwillig)

Damit die Fahrzeugseiten schneller in der Google-Suche erscheinen: https://search.google.com/search-console
→ Property mit der Adresse der Website hinzufügen → bestätigen (Methode «HTML-Datei»: die Datei von Google in den
Ordner `docs` legen, bauen, hochladen) → unter «Sitemaps» `sitemap.xml` eintragen.

`robots.txt` wirkt nur, wenn die Seite direkt auf einer Domain liegt (eigene Domain oder Repository `deinname.github.io`).
Bei `deinname.github.io/hckd-rail/` reicht die Sitemap in der Search Console.

## Eigene Domain (freiwillig)

Wer z. B. `hckd-rail.ch` kauft: in **Settings → Pages → Custom domain** eintragen und beim Domain-Anbieter die
DNS-Einträge setzen, die GitHub anzeigt. Danach `werkzeuge\website-adresse.txt` auf die neue Adresse ändern und neu bauen.
