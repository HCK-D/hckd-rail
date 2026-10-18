/* RailBase – Einsatzgebiete für die Karte «Wo fährt er?». Hier ergänzen. */
'use strict';

/* =====================================================================
   EINSATZ pro Fahrzeug (id wie in fahrzeuge.js)
   strecken  Listen von Bahnhöfen; die Karte folgt den echten Gleisen von
             Bahnhof zu Bahnhof. Mögliche Namen: siehe Liste unten.
   gebiete   [Bahnhof, Radius in km, Beschriftung] -> Kreis um ein Gebiet
   orte      [Name, Ost, Nord] mit Schweizer Koordinaten (LV95), für Orte
             ohne Bahnhof in der Liste, z. B. Rangierbahnhöfe
   netz      true = im ganzen Normalspurnetz unterwegs
   text      kurze Beschreibung unter der Karte
   Bahnhöfe: Zürich HB, Bern, Basel SBB, Genève, Lausanne, Luzern, St. Gallen,
   Lugano, Chur, Brig, Biel/Bienne, Olten, Winterthur, Bellinzona, Sion,
   Fribourg/Freiburg, Neuchâtel, Schaffhausen, Arth-Goldau, Thun, Spiez, Visp,
   Locarno, Montreux, Aarau, Zug, Delémont, Landquart, Martigny,
   Yverdon-les-Bains, Solothurn, Romanshorn, Buchs SG, Frauenfeld, Rapperswil SG,
   Göschenen, Airolo, Kandersteg, La Chaux-de-Fonds, Porrentruy, Erstfeld,
   Wil SG, Sargans, Ziegelbrücke, Glarus, Kreuzlingen, Basel Bad Bf,
   Genève-Aéroport, Zürich Flughafen, Lenzburg, Baden, Langenthal, Burgdorf,
   Payerne, Nyon, Vevey, Aigle, Monthey, St-Maurice, Mendrisio, Chiasso
   ===================================================================== */
const GOTTHARD = ['Basel SBB', 'Olten', 'Arth-Goldau', 'Erstfeld', 'Bellinzona', 'Chiasso'];
const LOETSCHBERG = ['Basel SBB', 'Olten', 'Bern', 'Spiez', 'Visp', 'Brig'];
const EINSATZ = {
  'rabe-501': { strecken: [['Zürich HB', 'Zug', 'Arth-Goldau', 'Erstfeld', 'Bellinzona', 'Lugano', 'Chiasso'], ['Basel SBB', 'Basel Bad Bf']],
    text: 'Auf der Gotthardachse von Zürich ins Tessin und weiter nach Mailand, seit dem Fahrplan 2026 auch ab Basel Richtung Hamburg.' },
  'rabde-500': { strecken: [['Basel SBB', 'Delémont', 'Biel/Bienne', 'Neuchâtel', 'Yverdon-les-Bains', 'Lausanne'], ['Romanshorn', 'St. Gallen', 'Winterthur', 'Zürich HB', 'Olten', 'Solothurn', 'Biel/Bienne'], ['Yverdon-les-Bains', 'Lausanne', 'Genève']],
    text: 'Vor allem auf der Jurasüdfusslinie: Basel–Biel–Lausanne und St. Gallen–Zürich–Biel–Genève. Weitere Einsätze führen ins Tessin.' },
  'rabe-502': { strecken: [['St. Gallen', 'Winterthur', 'Zürich HB', 'Olten', 'Bern', 'Fribourg/Freiburg', 'Lausanne', 'Genève'], ['Basel SBB', 'Zürich HB'], ['Zürich HB', 'Sargans', 'Chur'], ['Luzern', 'Zug', 'Zürich HB']],
    text: 'Wichtigster Korridor ist St. Gallen–Zürich–Bern–Lausanne–Genève, dazu Basel–Zürich, Zürich–Chur und Luzern–Zürich.' },
  'rabe-511': { strecken: [['Baden', 'Aarau', 'Olten', 'Luzern'], ['Zürich HB', 'Sargans', 'Chur']], gebiete: [['Zürich HB', 24, 'S-Bahn Zürich']],
    text: 'Regio-Dosto vor allem bei der S-Bahn Zürich und als RE Wettingen–Olten–Luzern; IR-Dosto im Mittelland, in der Nordschweiz und auf der Achse nach Chur.' },
  'rabe-514': { gebiete: [['Zürich HB', 24, 'S-Bahn Zürich']],
    text: 'Auf dem ganzen Netz der Zürcher S-Bahn.' },
  'rabe-523': { gebiete: [['Aarau', 14, 'Aargau'], ['Solothurn', 12, 'Solothurn'], ['Luzern', 14, 'Luzern'], ['Basel SBB', 12, 'Basel'], ['Neuchâtel', 12, 'Neuenburg'], ['Fribourg/Freiburg', 14, 'Freiburg'], ['Lausanne', 18, 'Waadt']],
    text: 'Als S-Bahn in den Kantonen Aargau, Solothurn, Luzern, Basel, Neuenburg, Freiburg und Waadt.' },
  'rbde-560': { gebiete: [['Aarau', 14, 'Aargau'], ['Luzern', 14, 'Luzern'], ['Neuchâtel', 12, 'Neuenburg'], ['Lausanne', 18, 'Waadt']], strecken: [['Monthey', 'St-Maurice', 'Martigny', 'Sion', 'Visp', 'Brig']],
    text: 'Bei der SBB auf S-Bahn-Linien in den Kantonen Aargau, Luzern, Neuenburg und Waadt. Im Wallis fährt RegionAlps mit eigenen Domino zwischen St-Gingolph und Brig.' },
  're-460': { netz: true, text: 'Im ganzen Normalspurnetz vor InterCity- und InterRegio-Zügen, oft mit IC2000-Doppelstockwagen.' },
  're-420': { netz: true, text: 'Früher vor Schnellzügen und auf den Zufahrten zu Gotthard und Simplon, heute vor allem bei SBB Cargo im ganzen Netz.' },
  're-620': { strecken: [['Basel SBB', 'Olten', 'Arth-Goldau', 'Erstfeld', 'Göschenen', 'Airolo', 'Bellinzona', 'Chiasso'], ['Bern', 'Spiez', 'Kandersteg', 'Brig'], ['Lausanne', 'Martigny', 'Sion', 'Visp', 'Brig']],
    text: 'Gebaut für schwere Züge über die Gotthard- und die Simplonstrecken, eingezeichnet hier mit den Bergstrecken.' },
  're-484': { strecken: [GOTTHARD, LOETSCHBERG], text: 'Im Transit Nord–Süd durch die Schweiz bis nach Italien.' },
  're-474': { strecken: [GOTTHARD, LOETSCHBERG], text: 'Im grenzüberschreitenden Güterverkehr nach Italien.' },
  're-193': { netz: true, text: 'Vor allem im Schweizer Binnengüterverkehr von SBB Cargo; Zulassungen bestehen auch für grenzüberschreitende Einsätze.' },
  're-482': { strecken: [['Basel Bad Bf', 'Basel SBB', 'Olten', 'Zürich HB'], ['Schaffhausen', 'Zürich HB']], text: 'Im Güterverkehr in der Schweiz und Richtung Deutschland, teils bis Österreich.' },
  'aem-940': { netz: true, orte: [['Rangierbahnhof Limmattal', 2670800, 1252000], ['Lausanne Triage', 2531500, 1153200]],
    text: 'In den Rangierbahnhöfen Limmattal und Lausanne Triage sowie mit Bauzügen in der ganzen Schweiz.' },
  'lrz-18': { orte: [['Genève'], ['Melide', 2717900, 1089300], ['Brig'], ['Zürich HB'], ['Winterthur'], ['Bern']],
    text: 'Standorte der beiden Serien: Genf, Melide und Brig, dazu Zürich, Winterthur und Bern. Von dort rücken die Züge zu Ereignissen im Netz aus.' },
  'kirow-krc-1100': { netz: true, text: 'Freizügig im ganzen SBB-Normalspurnetz, vor allem für den Einbau von Hilfsbrücken.' },
  'am-843': { netz: true, text: 'Im Rangier- und Zustelldienst sowie für Bauzüge in der ganzen Schweiz.' },
  'tm-234': { netz: true, text: 'Auf Baustellen im ganzen Netz für Gleis-, Fahrleitungs- und Signalunterhalt.' }
};
// infrastructure wagons: no fixed routes, they go wherever a construction site is
for (const id of ['fans-u', 'xans-37', 'xans-74', 'xas-53', 'xas-62', 'xas-62-fb', 'xas-73', 'xns-39', 'xns-60', 'silad-1-3', 'silad-4', 'silad-reserve', 'kirow-mannschaftswagen'])
  EINSATZ[id] = { netz: true, text: 'Mit Bauzügen auf Baustellen im ganzen SBB-Normalspurnetz, je nach Bauprogramm.' };
