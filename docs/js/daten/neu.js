/* HCKD RAIL – «Neu und aktualisiert»: Änderungen für wiederkehrende Besucher. Neue Einträge OBEN anfügen. */
'use strict';

/* =====================================================================
   NEU
   datum  Tag der Änderung (JJJJ-MM-TT)
   art    'neu' (neue Fahrzeuge oder Funktionen) oder 'update' (ergänzte Daten, Fotos)
   text   kurzer Satz auf Deutsch; Übersetzung in sprachen/xx/05-neu.js
   ids    Fahrzeuge, die verlinkt werden (optional)
   link   Bereich der Startseite, z. B. 'abfahrten' (optional)
   ===================================================================== */
const NEU = [
  { datum: '2026-10-18', art: 'update', text: 'Korrekturen nach einer Inhaltsprüfung, unter anderem bei RABe 521, Ae 6/6, Be 4/6, Ce 6/8 III, Rotem Pfeil und LRZ 14.', ids: ['rabe-521', 'h-ae66', 'h-be46', 'h-ce68iii', 'h-roterpfeil', 'lrz-14', 'h-c56', 'h-tee', 'xas-53', 'tmf-232', 'kirow-mannschaftswagen', 'h-eb35'] },
  { datum: '2026-10-18', art: 'neu', text: 'Entdecker-Abzeichen und die Seite «Meine Sammlung» mit allen gesehenen Fahrzeugen.', link: 'sammlung' },
  { datum: '2026-10-18', art: 'neu', text: 'Sichtungen mit Datum, Ort und Fahrzeugnummer eintragen und die Sammlung als Datei sichern.', link: 'sammlung' },
  { datum: '2026-10-18', art: 'neu', text: 'Steckbrief jedes Fahrzeugs als PDF und ein Vergleich der FLIRT-Baureihen 521 bis 524.', link: 'erkennen' },
  { datum: '2026-10-18', art: 'update', text: 'Höchstgeschwindigkeit im Betrieb und gebaute Höchstgeschwindigkeit stehen jetzt direkt zusammen.', ids: ['re-460', 'rabe-503', 'h-tee'] },
  { datum: '2026-10-18', art: 'neu', text: 'Die Website lässt sich als App aufs Handy installieren.' },
  { datum: '2026-10-18', art: 'neu', text: 'Abfahrtstafel mit Knopf «In meiner Nähe»; Start-Bahnhof ist neu Bern.', link: 'abfahrten' },
  { datum: '2026-10-18', art: 'neu', text: 'Die ganze Website auf Französisch, Italienisch und Englisch; dazu das Bahn-ABC auf der Startseite.', link: 'bahn-abc' },
  { datum: '2026-10-17', art: 'neu', text: '20 Bauzug- und Dienstwagen von SBB Infrastruktur neu im Katalog.', ids: ['fans-u', 'xans-37', 'xans-74', 'xas-53', 'xas-62', 'xas-62-fb', 'xas-73', 'xns-39', 'xns-60', 'xs-72', 'silad-1-3', 'silad-4', 'silad-reserve', 'ste-kurz', 'ste-lang', 'xs-45', 'xs-48', 'xs-mannschaftswagen', 'kirow-mannschaftswagen', 'pwfz'] },
  { datum: '2026-10-17', art: 'update', text: 'Neue Fotos der Lösch- und Rettungszüge, Fahrleitungsfahrzeuge und weiterer Baureihen.', ids: ['lrz-18', 'lrz-14', 'lrz-08', 'lrz-04', 'fahrleitung', 'diagnose', 'rabe-524', 'ew-iv', 'am-841'] },
  { datum: '2026-10-17', art: 'update', text: 'Technische Daten und Texte vieler Fahrzeuge ergänzt und geprüft.', ids: ['kirow-krc-1100', 'kirow-250', 'bendini', 'rabe-521', 'rabe-522', 'rabe-523', 'rabe-524', 'h-ae814', 'h-tee', 'ic2000', 'tm-234'] }
];
