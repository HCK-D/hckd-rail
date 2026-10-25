/* RailBase – «Neu und aktualisiert»: Änderungen für wiederkehrende Besucher. Neue Einträge OBEN anfügen. */
'use strict';

/* =====================================================================
   NEU
   datum  Tag der Änderung (JJJJ-MM-TT)
   art    'fahrzeug' (neue Fahrzeuge), 'foto' (neue Fahrzeugfotos),
          'daten' (Daten ergänzt oder korrigiert) oder 'funktion' (neue Seiten
          und Funktionen). Die Startseite zeigt je den neuesten Eintrag von
          'fahrzeug', 'foto' und 'daten'.
   text   kurzer Satz auf Deutsch; Übersetzung in sprachen/xx/ (uebDict)
   ids    Fahrzeuge, die verlinkt werden (optional)
   link   Seite oder Bereich, z. B. 'abfahrten' (optional)
   ===================================================================== */
const NEU = [
  { datum: '2026-10-25', art: 'funktion', text: 'Steckbrief als PDF-Datei: Er wird jetzt direkt heruntergeladen, ohne Druckfenster.' },
  { datum: '2026-10-25', art: 'funktion', text: 'Übersichtlichere Startseite: zuerst die Kategorien, dann die Neuigkeiten und der Zug der Woche.' },
  { datum: '2026-10-25', art: 'daten', text: 'Korrekturen bei RABe 524, Am 843, Eem 923 und Ee 922. Rangierfahrzeuge zeigen nur noch eine Einsatzkarte, wenn der Ort sicher belegt ist.', ids: ['rabe-524', 'am-843', 'eem-923', 'ee-922'] },
  { datum: '2026-10-25', art: 'funktion', text: 'Neues Kontaktformular: Schreib uns direkt über die Website.', link: 'kontakt' },
  { datum: '2026-10-25', art: 'fahrzeug', text: 'Zentralbahn und MOB: 37 Fahrzeuge mit Fotos, Daten und Einsatzkarten.', ids: ['zb-adler', 'zb-fink', 'zb-spatz', 'zb-hge44ii', 'mob-gpx', 'mob-alpina', 'mob-ge44-8000', 'mob-panoramic'] },
  { datum: '2026-10-18', art: 'funktion', text: 'Neue Seite «Danke»: ein Dankeschön an die Bahnfotografen, die Fotos für RailBase gemacht haben.', link: 'danke' },
  { datum: '2026-10-18', art: 'funktion', text: 'Neue Adresse: railbase.ch. Am besten gleich als Lesezeichen speichern.' },
  { datum: '2026-10-18', art: 'funktion', text: 'Aus HCKD RAIL wird RailBase: neuer Name und neues Logo. Sammlung und Sichtungen bleiben, wie sie sind.' },
  { datum: '2026-10-18', art: 'funktion', text: 'Das neue Logo ist jetzt auch das App-Symbol und das Symbol im Browser-Tab.' },
  { datum: '2026-10-18', art: 'funktion', text: 'Eigene Adresse hckd-rail.ch und Spenden per Banküberweisung. Danke für jede Unterstützung!' },
  { datum: '2026-10-18', art: 'daten', text: 'Korrekturen nach einer Inhaltsprüfung, unter anderem bei RABe 521, Ae 6/6, Be 4/6, Ce 6/8 III, Rotem Pfeil und LRZ 14.', ids: ['rabe-521', 'h-ae66', 'h-be46', 'h-ce68iii', 'h-roterpfeil', 'lrz-14', 'h-c56', 'h-tee', 'xas-53', 'tmf-232', 'kirow-mannschaftswagen', 'h-eb35'] },
  { datum: '2026-10-18', art: 'funktion', text: 'Entdecker-Abzeichen und die Seite «Meine Sammlung» mit allen gesehenen Fahrzeugen.', link: 'sammlung' },
  { datum: '2026-10-18', art: 'funktion', text: 'Sichtungen mit Datum, Ort und Fahrzeugnummer eintragen und die Sammlung als Datei sichern.', link: 'sammlung' },
  { datum: '2026-10-18', art: 'funktion', text: 'Steckbrief jedes Fahrzeugs als PDF und ein Vergleich der FLIRT-Baureihen 521 bis 524.', link: 'erkennen' },
  { datum: '2026-10-18', art: 'daten', text: 'Höchstgeschwindigkeit im Betrieb und gebaute Höchstgeschwindigkeit stehen jetzt direkt zusammen.', ids: ['re-460', 'rabe-503', 'h-tee'] },
  { datum: '2026-10-18', art: 'funktion', text: 'Die Website lässt sich als App aufs Handy installieren.' },
  { datum: '2026-10-18', art: 'funktion', text: 'Abfahrtstafel mit Knopf «In meiner Nähe»; Start-Bahnhof ist neu Bern.', link: 'abfahrten' },
  { datum: '2026-10-18', art: 'funktion', text: 'Die ganze Website auf Französisch, Italienisch und Englisch; dazu das Bahn-ABC auf der Startseite.', link: 'bahn-abc' },
  { datum: '2026-10-17', art: 'fahrzeug', text: '20 Bauzug- und Dienstwagen von SBB Infrastruktur neu im Katalog.', ids: ['fans-u', 'xans-37', 'xans-74', 'xas-53', 'xas-62', 'xas-62-fb', 'xas-73', 'xns-39', 'xns-60', 'xs-72', 'silad-1-3', 'silad-4', 'silad-reserve', 'ste-kurz', 'ste-lang', 'xs-45', 'xs-48', 'xs-mannschaftswagen', 'kirow-mannschaftswagen', 'pwfz'] },
  { datum: '2026-10-17', art: 'foto', text: 'Neue Fotos der Lösch- und Rettungszüge, Fahrleitungsfahrzeuge und weiterer Baureihen.', ids: ['lrz-18', 'lrz-14', 'lrz-08', 'lrz-04', 'fahrleitung', 'diagnose', 'rabe-524', 'ew-iv', 'am-841'] },
  { datum: '2026-10-17', art: 'daten', text: 'Technische Daten und Texte vieler Fahrzeuge ergänzt und geprüft.', ids: ['kirow-krc-1100', 'kirow-250', 'bendini', 'rabe-521', 'rabe-522', 'rabe-523', 'rabe-524', 'h-ae814', 'h-tee', 'ic2000', 'tm-234'] }
];
