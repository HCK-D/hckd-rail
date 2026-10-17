# Übersetzungen

Deutsch ist der Grundtext (index.html, js/…). Hier stehen die Übersetzungen:

- `fr/` Französisch, `it/` Italienisch, `en/` Englisch
- Jede Datei ist ein Teil; `werkzeuge\sprachen-bauen.ps1` setzt sie zu `js/sprachen/fr.js` usw. zusammen.
  Das passiert auch automatisch beim Bauen der Website (`werkzeuge\website-bauen.ps1`).

## Aufbau

- `uebDict({ 'Deutscher Text': 'Übersetzung', … })` für Menüs, Knöpfe, feste Texte und Datennamen.
  Schlüssel = der deutsche Text genau so, wie er auf der Seite steht.
- `uebZug('re-460', { typ, beiname, text, kennzahlen, daten, specNote, abschnitte, bilder })`
  für ein Fahrzeug. `daten` mit den deutschen Schlüsseln (z. B. `'Länge': '18,5 m'`),
  `bilder` = Bildtitel in derselben Reihenfolge wie in js/daten/fahrzeuge.js.
- `uebQuiz('einfach', [ { f, a, info }, … ])` gleiche Reihenfolge wie js/daten/quiz.js;
  die erste Antwort ist die richtige.
- `uebEinsatz({ 're-460': 'Text unter der Karte', … })`

Fehlt eine Übersetzung, zeigt die Website den deutschen Text. Neue Fahrzeuge
erscheinen also sofort, auf Deutsch, bis ihre Übersetzung hier ergänzt ist.
