# RailBase – Train Database

Veröffentlicht (Vorschau): https://claude.ai/artifact/BGt4rYNXFSPp5q43FqkYYx
Ins Internet stellen mit GitHub Pages: siehe **ANLEITUNG-GITHUB.md**.

## Ordner

| Pfad | Inhalt |
|---|---|
| `index.html` | Gerüst der Seite: Kopfzeile, Bereiche, Impressum, Datenschutz, Vergleich, Dialoge |
| `css/basis.css` | Farben, Schrift, Kopf- und Fusszeile |
| `css/startseite.css` | Startbereich, Kategorien, Spurweite, Live-Fahrdaten |
| `css/fahrzeuge.css` | Kategorie- und Fahrzeugseiten, Galerie |
| `css/dialoge.css` | Spenden, Fehler melden |
| `css/karte.css` | Karte Bahnnetz Schweiz |
| `css/extras.css` | Sortierung, Vergleich, Zeitstrahl, Impressum und Datenschutz |
| `css/schrift.css` | selbst gehostete Schrift (nur in der GitHub-Version, siehe `schrift/`) |
| `css/responsive.css` | Anpassungen für grössere Bildschirme (wird zuletzt geladen) |
| `js/daten/fahrzeuge.js` | **Alle Fahrzeuge. Neue Züge hier eintragen.** |
| `js/daten/netz.js` | Bahnnetz-Daten für die Karte (BAV, Stand 6.7.2021) |
| `js/katalog.js` | Startseite, Suche, Slideshow, Kategorie- und Fahrzeugseiten, Sortierung, Navigation |
| `js/extras.js` | Fahrzeugvergleich, Sammelalbum «Gesehen», Teilen und Zeitstrahl |
| `js/daten/quiz.js` | **Quizfragen** (80, in drei Levels). Die erste Antwort ist jeweils die richtige |
| `js/quiz.js`, `css/quiz.css` | Quiz ganz unten auf der Startseite |
| `js/daten/einsatz.js` | **Einsatzstrecken und -gebiete** für die Karte «Wo fährt er?» (Anleitung oben in der Datei) |
| `js/einsatz.js` | Karte «Wo fährt er?» auf den Fahrzeugseiten |
| `js/abc.js`, `js/darstellung.js` | Bahn-ABC mit Entschlüssler, Hell/Dunkel-Schalter |
| `js/abfahrten.js` | Live-Abfahrtstafel (transport.opendata.ch, nur auf der fertigen Website) |
| `js/fotos.js` | Formular «Foto einsenden» (Link zu Fotos, geht über Web3Forms an deine Mail) |
| `js/statistik.js` | Besucherzähler GoatCounter (Code hier eintragen, siehe ANLEITUNG-GITHUB.md) |
| `js/strecke.js` | Führerstandsfahrt Normalspur und Meterspur |
| `js/uhr.js`, `js/karte.js`, `js/spenden.js`, `js/melden.js` | die jeweiligen Bereiche |
| `bilder/` | Fotos (max. 1280 px), `bilder/klein/` Vorschaubilder (480 px), `bilder/slides/` Slideshow |
| `schrift/` | Schrift Source Sans 3 mit Lizenz (SIL Open Font License) |
| `werkzeuge/vorschau.ps1` | lokale Vorschau |
| `werkzeuge/website-bauen.ps1` | baut den Ordner `docs` für GitHub Pages |
| `werkzeuge/website-adresse.txt` | Adresse der fertigen Website (für Sitemap und Vorschaubilder) |
| `werkzeuge/bilder-komprimieren.ps1` | neue Fotos verkleinern, erzeugt gross und klein |
| `docs/` | fertige Website, wird gebaut, nicht von Hand ändern |
| `archiv/` | alte Version als eine einzige Datei (wird nicht hochgeladen) |

Die Reihenfolge der `<script>`-Zeilen in `index.html` ist wichtig: zuerst Hilfen und Daten, zuletzt `start.js`.

## Wie die Seiten entstehen

Im Projekt gibt es eine HTML-Datei. Ein Link wie `#re-460` lädt keine neue Seite; `katalog.js` liest den Teil nach dem `#`,
sucht das Fahrzeug in `fahrzeuge.js` und füllt damit die Vorlage (Titel, Fotos, Datentabelle, Abschnitte, Quellen).

Für GitHub erzeugt `website-bauen.ps1` zusätzlich eine Datei pro Seite (`re-460.html`, `cargo.html`, `impressum.html`, …).
Jede hat eigenen Titel, Beschreibung und Vorschaubild und zeigt beim Öffnen direkt die richtige Ansicht
(`window.HCKD_START`). So findet Google jede Seite einzeln, und Links in WhatsApp zeigen das passende Foto.

## Neues Fahrzeug oder neue Fotos

1. Fotos verkleinern, z. B. für einen Ordner mit Re-450-Fotos auf dem Desktop:

       powershell -ExecutionPolicy Bypass -File werkzeuge\bilder-komprimieren.ps1 -Quelle "C:\Users\Hckdi\Desktop\Re450" -Name re450

   Steht unten im Bild ein Name, der weg soll: `-UntenAbschneiden 0.07` anhängen (schneidet 7 % ab).
2. Eintrag in `js/daten/fahrzeuge.js` ergänzen, Bilder als `{ src: 'bilder/re450-1.jpg', titel: '…' }`.
3. Website neu bauen und hochladen (ANLEITUNG-GITHUB.md, Schritt 2 und «Später aktualisieren»).

## Vorschau auf dem eigenen Computer

Im Projektordner in PowerShell:

    powershell -ExecutionPolicy Bypass -File werkzeuge\vorschau.ps1

Dann im Browser http://localhost:8765 öffnen.

«Fehler melden» schickt auf der eigenen Website ein Mail (Web3Forms-Schlüssel in `js/melden.js`),
auf claude.ai wird die Meldung im Speicher der Seite abgelegt.
