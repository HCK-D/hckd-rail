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
// Bahnhöfe, die nicht in der Liste oben stehen: Name -> Schweizer Koordinaten (LV95)
const BAHNHOF_EXTRA = { 'Rorschach': [2754815, 1260640] };
const GOTTHARD =['Basel SBB', 'Olten', 'Arth-Goldau', 'Erstfeld', 'Bellinzona', 'Chiasso'];
const LOETSCHBERG = ['Basel SBB', 'Olten', 'Bern', 'Spiez', 'Visp', 'Brig'];
const EINSATZ = {
  // Giruno und ICN nach den Einsatzkarten auf sbb.ch («Unsere Züge», Stand Oktober 2026)
  'rabe-501': { strecken: [['Basel SBB', 'Olten', 'Luzern', 'Arth-Goldau', 'Erstfeld', 'Bellinzona', 'Lugano', 'Chiasso'], ['Zürich HB', 'Zug', 'Arth-Goldau'], ['Zug', 'Luzern'], ['Olten', 'Aarau', 'Zürich HB'], ['Basel SBB', 'Zürich HB'], ['Zürich HB', 'Sargans', 'Chur'], ['Basel SBB', 'Basel Bad Bf']],
    international: 'giruno',
    text: 'In der Schweiz vor allem auf Zürich–Zug–Luzern und Zürich–Chur, dazu von Basel und Zürich durch den Gotthard nach Lugano und Chiasso. International auf der Nord-Süd-Achse zwischen Deutschland, der Schweiz und Italien.' },
  'rabde-500': { strecken: [['Basel SBB', 'Delémont', 'Biel/Bienne', 'Neuchâtel', 'Yverdon-les-Bains', 'Lausanne', 'Genève', 'Genève-Aéroport'], ['Rorschach', 'St. Gallen', 'Winterthur', 'Zürich HB', 'Aarau', 'Olten', 'Solothurn', 'Biel/Bienne'], ['Bern', 'Olten'], ['Zürich HB', 'Zug', 'Arth-Goldau', 'Erstfeld', 'Bellinzona', 'Lugano', 'Chiasso']],
    text: 'Vor allem auf der Jurasüdfusslinie: Basel–Biel–Lausanne und Rorschach–St. Gallen–Zürich–Biel–Genève, dazu Bern–Olten. Zudem fährt er zwischen Zürich und Chiasso.' },
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

/* =====================================================================
   INTERNATIONAL: Karte «International» (Umschalter über der Karte)
   STAEDTE    Name -> [Länge, Breite]; mit false am Schluss nur Wegpunkt ohne Punkt und Namen
   strecken   Listen von Städten; die Linien verbinden die Halte direkt (Übersicht wie bei der SBB)
   ===================================================================== */
const STAEDTE = {
  'Hamburg': [9.935, 53.552], 'Bremen': [8.813, 53.083], 'Hannover': [9.741, 52.377], 'Frankfurt': [8.686, 50.099],
  'Mannheim': [8.469, 49.479], 'Karlsruhe': [8.402, 48.994], 'Freiburg': [7.841, 47.998], 'Basel': [7.589, 47.547],
  'Zürich': [8.540, 47.378], 'Luzern': [8.310, 47.050], 'Arth-Goldau': [8.548, 47.049, false], 'Lugano': [8.947, 46.005],
  'Milano': [9.204, 45.486], 'Verona': [10.983, 45.429], 'Venezia': [12.321, 45.441], 'Bologna': [11.343, 44.506],
  'Firenze': [11.248, 43.776], 'Genova': [8.921, 44.418], 'Livorno': [10.334, 43.553]
};
const INTERNATIONAL = {
  // nach der Einsatzkarte Europa auf sbb.ch, Stand Oktober 2026
  giruno: { strecken: [['Hamburg', 'Hannover', 'Frankfurt', 'Mannheim', 'Karlsruhe', 'Freiburg', 'Basel'], ['Bremen', 'Hannover'],
    ['Basel', 'Zürich', 'Arth-Goldau'], ['Basel', 'Luzern', 'Arth-Goldau'], ['Arth-Goldau', 'Lugano', 'Milano'],
    ['Milano', 'Verona', 'Venezia'], ['Milano', 'Bologna', 'Firenze'], ['Milano', 'Genova', 'Livorno']],
    text: 'International von Hamburg und Bremen über Hannover, Frankfurt und Basel durch die Schweiz bis Mailand und weiter nach Venedig, Florenz und Livorno.' }
};

// infrastructure wagons: no fixed routes, they go wherever a construction site is
for (const id of ['fans-u', 'xans-37', 'xans-74', 'xas-53', 'xas-62', 'xas-62-fb', 'xas-73', 'xns-39', 'xns-60', 'silad-1-3', 'silad-4', 'silad-reserve', 'kirow-mannschaftswagen'])
  EINSATZ[id] = { netz: true, text: 'Mit Bauzügen auf Baustellen im ganzen SBB-Normalspurnetz, je nach Bauprogramm.' };
