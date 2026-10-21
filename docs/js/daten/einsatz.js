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
   linien    Listen von Bahnhöfen für Meterspur-Linien (nicht im Normalspurnetz):
             gestrichelte gerade Linie von Bahnhof zu Bahnhof
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
const BAHNHOF_EXTRA = { 'Rorschach': [2754815, 1260640], 'Interlaken Ost': [2632944, 1171143], 'Brunnen': [2688715, 1205543] };
const GOTTHARD =['Basel SBB', 'Olten', 'Arth-Goldau', 'Erstfeld', 'Bellinzona', 'Chiasso'];
const LOETSCHBERG = ['Basel SBB', 'Olten', 'Bern', 'Spiez', 'Visp', 'Brig'];
const EINSATZ = {
  // Giruno und ICN nach den Einsatzkarten auf sbb.ch («Unsere Züge», Stand Oktober 2026)
  'rabe-501': { strecken: [['Basel SBB', 'Olten', 'Luzern', 'Arth-Goldau', 'Erstfeld', 'Bellinzona', 'Lugano', 'Chiasso'], ['Zürich HB', 'Zug', 'Arth-Goldau'], ['Zug', 'Luzern'], ['Olten', 'Aarau', 'Zürich HB'], ['Basel SBB', 'Zürich HB'], ['Zürich HB', 'Sargans', 'Chur'], ['Basel SBB', 'Basel Bad Bf']],
    international: 'giruno',
    text: 'In der Schweiz vor allem auf Zürich–Zug–Luzern und Zürich–Chur, dazu von Basel und Zürich durch den Gotthard nach Lugano und Chiasso. International auf der Nord-Süd-Achse zwischen Deutschland, der Schweiz und Italien.' },
  'rabde-500': { strecken: [['Basel SBB', 'Delémont', 'Biel/Bienne', 'Neuchâtel', 'Yverdon-les-Bains', 'Lausanne', 'Genève', 'Genève-Aéroport'], ['Rorschach', 'St. Gallen', 'Winterthur', 'Zürich HB', 'Aarau', 'Olten', 'Solothurn', 'Biel/Bienne'], ['Bern', 'Olten'], ['Zürich HB', 'Zug', 'Arth-Goldau', 'Erstfeld', 'Bellinzona', 'Lugano', 'Chiasso']],
    text: 'Vor allem auf der Jurasüdfusslinie: Basel–Biel–Lausanne und Rorschach–St. Gallen–Zürich–Biel–Genève, dazu Bern–Olten. Zudem fährt er zwischen Zürich und Chiasso.' },
  // die folgenden Personenzüge ebenfalls nach den Einsatzkarten auf sbb.ch («Unsere Züge», Stand Oktober 2026)
  'rabe-502': { strecken: [['St. Gallen', 'Winterthur', 'Zürich HB', 'Aarau', 'Olten', 'Bern', 'Fribourg/Freiburg', 'Lausanne', 'Genève', 'Genève-Aéroport'], ['Rorschach', 'St. Gallen'], ['Rorschach', 'Buchs SG', 'Sargans', 'Chur'],
      ['Basel SBB', 'Zürich HB'], ['Zürich HB', 'Sargans', 'Chur'], ['Zürich HB', 'Zug', 'Luzern'], ['Bern', 'Olten', 'Luzern'], ['Basel SBB', 'Olten', 'Bern', 'Spiez', 'Interlaken Ost'], ['Spiez', 'Brig'],
      ['Basel SBB', 'Olten', 'Luzern', 'Arth-Goldau', 'Erstfeld', 'Bellinzona', 'Lugano', 'Chiasso'], ['Zug', 'Arth-Goldau'], ['Bellinzona', 'Locarno']],
    text: 'Hauptlinie ist St. Gallen–Zürich–Bern–Lausanne–Genève. Dazu Basel–Zürich, St. Gallen–Chur, Zürich–Chur, Luzern–Zürich, Luzern–Bern, Basel–Bern–Interlaken/Brig und Basel–Lugano.' },
  'rabe-511': { gebiete: [['Zürich HB', 20, 'S-Bahn Zürich']],
    strecken: [['Basel SBB', 'Olten', 'Aarau', 'Zürich HB'], ['Basel SBB', 'Zürich HB'], ['Olten', 'Solothurn', 'Biel/Bienne', 'Yverdon-les-Bains', 'Lausanne', 'Genève', 'Genève-Aéroport'], ['Bern', 'Olten'],
      ['Fribourg/Freiburg', 'Lausanne'], ['Lausanne', 'Martigny', 'Sion'], ['Zürich HB', 'Winterthur', 'St. Gallen', 'Rorschach'], ['Winterthur', 'Frauenfeld', 'Romanshorn'], ['Winterthur', 'Wil SG'],
      ['Zürich HB', 'Schaffhausen'], ['Zürich HB', 'Zug', 'Luzern'], ['Zürich HB', 'Sargans', 'Chur']],
    text: 'Als Regio-Dosto vor allem bei der S-Bahn Zürich und im Raum Lausanne, als IR-Dosto in der Region Zürich/Mittelland, in der West- und Nordschweiz und zwischen Zürich und Chur.' },
  'rabe-512': { strecken: [['Basel SBB', 'Olten', 'Aarau', 'Zürich HB'], ['Basel SBB', 'Zürich HB'], ['Olten', 'Solothurn', 'Biel/Bienne', 'Yverdon-les-Bains', 'Lausanne', 'Genève', 'Genève-Aéroport'], ['Bern', 'Olten'],
      ['Lausanne', 'Martigny', 'Sion'], ['Zürich HB', 'Winterthur', 'St. Gallen', 'Rorschach'], ['Winterthur', 'Frauenfeld', 'Romanshorn'], ['Zürich HB', 'Schaffhausen'], ['Zürich HB', 'Zug', 'Luzern'], ['Zürich HB', 'Sargans', 'Chur']],
    text: 'In der Region Zürich/Mittelland, in der West- und Nordschweiz und zwischen Zürich und Chur.' },
  'rabe-514': { gebiete: [['Zürich HB', 20, 'S-Bahn Zürich']],
    strecken: [['Zürich HB', 'Aarau', 'Olten'], ['Zürich HB', 'Baden'], ['Zürich HB', 'Schaffhausen'], ['Zürich HB', 'Winterthur'], ['Zürich HB', 'Zug'], ['Zürich HB', 'Rapperswil SG', 'Ziegelbrücke']],
    text: 'Auf dem ganzen Netz der Zürcher S-Bahn.' },
  're-450': { gebiete: [['Zürich HB', 20, 'S-Bahn Zürich']],
    strecken: [['Zürich HB', 'Baden'], ['Zürich HB', 'Schaffhausen'], ['Zürich HB', 'Winterthur'], ['Zürich HB', 'Zug'], ['Zürich HB', 'Ziegelbrücke', 'Glarus']],
    text: 'Bei der S-Bahn Zürich, unter anderem bis Schaffhausen, Zug und Glarus.' },
  'rabe-520': { strecken: [['Lenzburg', 'Luzern'], ['Luzern', 'Arth-Goldau', 'Brunnen']],
    text: 'Im Seetal zwischen Lenzburg und Luzern sowie in der Region Luzern bis Arth-Goldau und Brunnen.' },
  'rabe-503': { strecken: [['Basel SBB', 'Olten', 'Bern', 'Thun', 'Spiez', 'Brig'], ['Genève-Aéroport', 'Genève', 'Lausanne', 'Montreux', 'Sion', 'Visp', 'Brig'], ['Bern', 'Olten', 'Zürich HB'], ['Zürich HB', 'Winterthur', 'St. Gallen', 'Rorschach']],
    international: 'astoro',
    text: 'Vor allem auf Zürich–Rorschach, Basel–Brig und Genève–Brig. International auf der Nord-Süd-Achse nach Deutschland und Italien.' },
  'ic2000': { strecken: [['Romanshorn', 'Frauenfeld', 'Winterthur', 'Zürich HB', 'Aarau', 'Olten', 'Bern', 'Thun', 'Spiez', 'Interlaken Ost'], ['Spiez', 'Brig'], ['Kreuzlingen', 'Frauenfeld'], ['Basel SBB', 'Olten'], ['Basel SBB', 'Zürich HB'],
      ['Genève-Aéroport', 'Genève', 'Lausanne', 'Fribourg/Freiburg', 'Bern', 'Olten', 'Luzern'], ['Lausanne', 'Montreux', 'Sion', 'Visp', 'Brig'], ['Zürich HB', 'Sargans', 'Chur'], ['Zürich HB', 'Zug', 'Luzern']],
    text: 'Vor allem auf Romanshorn–Zürich–Bern–Brig/Interlaken, Basel–Bern–Brig/Interlaken, Genève–Brig, Genève–Bern–Luzern, Zürich–Konstanz und Zürich–Chur.' },
  'ew-iv': { strecken: [['Genève-Aéroport', 'Genève', 'Lausanne', 'Yverdon-les-Bains', 'Neuchâtel'], ['Lausanne', 'Fribourg/Freiburg', 'Bern', 'Olten', 'Baden', 'Zürich HB'], ['Lausanne', 'Montreux', 'Sion', 'Visp', 'Brig'],
      ['Bern', 'Thun', 'Spiez', 'Interlaken Ost'], ['Spiez', 'Brig'], ['Bern', 'Luzern'], ['Basel SBB', 'Olten', 'Luzern', 'Arth-Goldau', 'Erstfeld', 'Bellinzona', 'Lugano'], ['Basel SBB', 'Zürich HB'],
      ['Zürich HB', 'Schaffhausen'], ['Zürich HB', 'Winterthur', 'Frauenfeld', 'Kreuzlingen'], ['Frauenfeld', 'Romanshorn'], ['Zürich HB', 'Zug', 'Arth-Goldau'], ['Zürich HB', 'Sargans', 'Chur'], ['Sargans', 'Buchs SG']],
    international: 'eurocity',
    text: 'Mit Re 460 vor allem auf Genève–Brig, Basel–Lugano, Zürich–Konstanz, Zürich–Baden–Olten–Bern und Zürich–Schaffhausen. International fahren vor allem die EuroCity-Wagen der SBB.' },
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
  'Firenze': [11.248, 43.776], 'Genova': [8.921, 44.418], 'Livorno': [10.334, 43.553],
  'Bern': [7.439, 46.949], 'Genève': [6.142, 46.210], 'Lausanne': [6.629, 46.517], 'Brig': [7.988, 46.319],
  'St. Gallen': [9.369, 47.423, false], 'Lindau': [9.680, 47.550, false], 'München': [11.558, 48.140],
  'Amsterdam': [4.900, 52.379], 'Utrecht': [5.110, 52.089], 'Düsseldorf': [6.794, 51.220], 'Köln': [6.959, 50.943],
  'Mainz': [8.258, 50.001], 'Berlin': [13.369, 52.525], 'Leipzig': [12.383, 51.345], 'Singen': [8.840, 47.759],
  'Buchs SG': [9.472, 47.169, false], 'Innsbruck': [11.401, 47.263], 'Salzburg': [13.046, 47.813, false],
  'Wien': [16.376, 48.185], 'Graz': [15.417, 47.072], 'Ostrava': [18.270, 49.840, false], 'Kraków': [19.945, 50.068, false],
  'Jarosław': [22.680, 50.010]
};
const INTERNATIONAL = {
  // nach der Einsatzkarte Europa auf sbb.ch, Stand Oktober 2026
  giruno: { strecken: [['Hamburg', 'Hannover', 'Frankfurt', 'Mannheim', 'Karlsruhe', 'Freiburg', 'Basel'], ['Bremen', 'Hannover'],
    ['Basel', 'Zürich', 'Arth-Goldau'], ['Basel', 'Luzern', 'Arth-Goldau'], ['Arth-Goldau', 'Lugano', 'Milano'],
    ['Milano', 'Verona', 'Venezia'], ['Milano', 'Bologna', 'Firenze'], ['Milano', 'Genova', 'Livorno']],
    text: 'International von Hamburg und Bremen über Hannover, Frankfurt und Basel durch die Schweiz bis Mailand und weiter nach Venedig, Florenz und Livorno.' },
  astoro: { strecken: [['Basel', 'Bern', 'Brig', 'Milano'], ['Genève', 'Lausanne', 'Brig'], ['Zürich', 'Bern'], ['Zürich', 'St. Gallen', 'Lindau', 'München']],
    text: 'International von Genf, Basel und Bern über Brig und den Simplon nach Mailand sowie von Zürich nach München.' },
  eurocity: { strecken: [['Amsterdam', 'Utrecht', 'Düsseldorf', 'Köln', 'Mainz', 'Mannheim', 'Karlsruhe', 'Freiburg', 'Basel'], ['Hamburg', 'Hannover', 'Frankfurt', 'Mannheim'], ['Bremen', 'Hannover'],
    ['Berlin', 'Leipzig', 'Frankfurt'], ['Basel', 'Zürich'], ['Basel', 'Bern', 'Lausanne', 'Genève'], ['Zürich', 'Singen'], ['Zürich', 'Buchs SG', 'Innsbruck', 'Salzburg', 'Wien', 'Ostrava', 'Kraków', 'Jarosław'], ['Salzburg', 'Graz']],
    text: 'Nach der SBB-Karte für Einheitswagen IV und EuroCity: Die EuroCity-Wagen der SBB fahren in Richtung Amsterdam, Hamburg, Berlin und Wien, dazu bis Graz und Jarosław in Polen. Die klassischen EW IV fahren überwiegend in der Schweiz.' }
};

// infrastructure wagons: no fixed routes, they go wherever a construction site is
for (const id of ['fans-u', 'xans-37', 'xans-74', 'xas-53', 'xas-62', 'xas-62-fb', 'xas-73', 'xns-39', 'xns-60', 'silad-1-3', 'silad-4', 'silad-reserve', 'kirow-mannschaftswagen',
  'xs-72', 'ste-kurz', 'ste-lang', 'xs-45', 'xs-48', 'xs-mannschaftswagen'])
  EINSATZ[id] = { netz: true, text: 'Mit Bauzügen auf Baustellen im ganzen SBB-Normalspurnetz, je nach Bauprogramm.' };

/* =====================================================================
   Weitere Fahrzeuge (Oktober 2026): Orte und Strecken nur so weit, wie sie in den
   Fahrzeugtexten von RailBase belegt sind. Ohne feste Strecke: ganzes Netz.
   ===================================================================== */
const GOTTHARD_BERG = ['Arth-Goldau', 'Erstfeld', 'Göschenen', 'Airolo', 'Bellinzona', 'Chiasso'];
const MITTELLAND = ['Genève', 'Lausanne', 'Fribourg/Freiburg', 'Bern', 'Olten', 'Zürich HB', 'Winterthur', 'St. Gallen'];
Object.assign(BAHNHOF_EXTRA, { 'Meilen': [2691184, 1236087] });
Object.assign(EINSATZ, {
  // Personenverkehr und Cargo
  'rabe-521': { gebiete: [['Basel SBB', 14, 'S-Bahn Basel']], strecken: [['Basel SBB', 'Basel Bad Bf']], orte: [['Seehas Konstanz–Engen', 2730596, 1280110]],
    text: 'Auf der trinationalen S-Bahn Basel und grenzüberschreitend nach Deutschland, dazu im Seehas-Verkehr ab Konstanz.' },
  'rabe-522': { gebiete: [['Genève', 14, 'Léman Express'], ['Basel SBB', 12, 'Raum Basel']],
    text: 'Im Léman-Express-Netz rund um Genf und auf grenznahen Regionalverbindungen im Raum Basel.' },
  'rabe-524': { strecken: [['Bellinzona', 'Lugano', 'Chiasso'], ['Bellinzona', 'Locarno']],
    text: 'Im TILO-Netz im Tessin und grenzüberschreitend in die Lombardei.' },
  're-421': { strecken: [['Basel SBB', 'Basel Bad Bf']],
    text: 'Vor allem für Güterzüge von der Schweiz nach Deutschland.' },
  // Rangierfahrzeuge
  'ee-922': { netz: true, text: 'Im Rangierdienst des Personenverkehrs in grösseren Bahnhöfen; dank zwei Stromsystemen auch in Grenzbahnhöfen.' },
  'eem-923': { netz: true, text: 'Bei SBB Cargo im Rangier- und Zustelldienst; ohne Fahrleitung fährt sie mit dem Hilfsdiesel.' },
  'bm-44': { netz: true, text: 'Früher im schweren Rangierdienst in grossen Bahnhöfen, unabhängig von der Fahrleitung.' },
  'tm-232': { netz: true, text: 'Im leichten Rangier- und Baudienst im ganzen SBB-Netz.' },
  'ee-33': { netz: true, text: 'Über Jahrzehnte im Rangierdienst in Bahnhöfen und Depots im ganzen SBB-Netz.' },
  // Infrastruktur: Lokomotiven und Traktoren
  'am-841': { netz: true, text: 'Im Bau-, Rangier- und Zustelldienst im ganzen SBB-Netz, je nach Baustelle.' },
  'am-842': { netz: true, text: 'Im Bau-, Rangier- und Zustelldienst im ganzen SBB-Netz, je nach Baustelle.' },
  'tmf-232': { netz: true, text: 'Im Bau-, Rangier- und Zustelldienst im ganzen SBB-Netz, je nach Baustelle.' },
  'tm-234-4': { netz: true, text: 'Im Bau-, Rangier- und Zustelldienst im ganzen SBB-Netz, je nach Baustelle.' },
  'pwfz': { netz: true, text: 'Geplant für Baustellen im ganzen SBB-Normalspurnetz.' },
  // Dienst- und Spezialfahrzeuge
  'lrz-14': { strecken: [['Arth-Goldau', 'Erstfeld', 'Bellinzona'], GOTTHARD_BERG],
    text: 'Für die Gotthardachse mit dem Gotthard-Basistunnel und das Tunnelnetz beschafft.' },
  'lrz-08': { netz: true, text: 'Für schnelle Einsätze auf dem offenen Netz und in Tunneln im ganzen SBB-Netz.' },
  'lrz-04': { netz: true, text: 'Für Ereignisse auf dem Bahnnetz, besonders in längeren Tunneln und an schwer zugänglichen Strecken.' },
  'xrotm': { netz: true, strecken: [GOTTHARD_BERG],
    text: 'Bei starkem Schneefall auf Strecken und in Bahnhöfen, unter anderem auf der Gotthard-Panoramastrecke.' },
  'diagnose': { netz: true, text: 'Für Messfahrten auf den Hauptstrecken im ganzen SBB-Netz.' },
  'kirow-800': { netz: true, text: 'Für Unterhalt, Montage und Ereignisse im ganzen SBB-Normalspurnetz.' },
  'kirow-250': { netz: true, text: 'Für Unterhalt, Montage und Ereignisse im ganzen SBB-Normalspurnetz.' },
  'kirow-krc-100': { netz: true, text: 'Für Unterhalt, Montage und Ereignisse im ganzen SBB-Normalspurnetz.' },
  'bendini': { netz: true, text: 'Für Unterhalt, Montage und Ereignisse im ganzen SBB-Normalspurnetz.' },
  'fahrleitung': { netz: true, text: 'Für Unterhalt, Montage und Ereignisse im ganzen SBB-Normalspurnetz.' },
  // Historische Fahrzeuge: wo sie früher fuhren
  'h-ce68ii': { strecken: [GOTTHARD_BERG], text: 'Früher vor allem vor Güterzügen am Gotthard.' },
  'h-ce68iii': { strecken: [GOTTHARD_BERG], text: 'Früher vor schweren Güterzügen am Gotthard, auf den Zufahrtslinien und im Flachland.' },
  'h-ae66': { strecken: [['Zürich HB', 'Zug', ...GOTTHARD_BERG]], text: 'Früher das Kraftpaket am Gotthard, später vor allem im Güterverkehr und im Mittelland.' },
  'h-ae47': { netz: true, text: 'Früher als eine der wichtigsten Streckenloks der SBB im ganzen Netz unterwegs.' },
  'h-ae36i': { strecken: [MITTELLAND, ['Basel SBB', 'Olten']], text: 'Früher vor Personen-, Schnell- und Güterzügen, vor allem im Mittelland.' },
  'h-ae814': { strecken: [GOTTHARD_BERG], orte: [['Erstfeld']], text: 'Früher vor schweren Gotthardzügen. Die Ae 8/14 11852 steht heute bei SBB Historic in Erstfeld.' },
  'h-be46': { strecken: [GOTTHARD_BERG], text: 'Früher vor Schnellzügen auf der Gotthard-Bergstrecke, später im Mittelland.' },
  'h-re44i': { strecken: [MITTELLAND, ['Basel SBB', 'Olten']], text: 'Früher vor schnellen, leichten Zügen im Mittelland, später im Regionalverkehr.' },
  'h-tee': { strecken: [['Zürich HB', 'Zug', ...GOTTHARD_BERG]],
    text: 'Als TEE «Gottardo» durch den Gotthard; der Zug verband die Schweiz mit Deutschland, Frankreich, Italien und den Niederlanden.' },
  'h-roterpfeil': { netz: true, text: 'Früher auf Ausflugs- und Gesellschaftsfahrten im ganzen Netz unterwegs.' },
  'h-a35': { orte: [['Dampfgruppe Zürich', 2683100, 1247900]], text: 'Früher vor Schnellzügen; heute betreut die Dampfgruppe Zürich die erhaltene A 3/5 705.' },
  'h-c56': { strecken: [GOTTHARD_BERG], text: 'Früher vor schweren Güterzügen am Gotthard, später im Mittelland, auf Bellinzona–Luino und im Rangierdienst.' },
  'h-eb35': { netz: true, text: 'Früher vor Regionalzügen, auf Nebenbahnen und im Stationsdienst.' },
  'h-mirage': { strecken: [['Zürich HB', 'Meilen', 'Rapperswil SG']], text: 'Früher im Vorortsverkehr am rechten Zürichseeufer, bekannt als «Goldküstenexpress».' },
  'h-rbe540': { netz: true, orte: [['Oensingen-Balsthal-Bahn', 2619225, 1240567]],
    text: 'Früher vor Schnellzügen, später vor Regional- und S-Bahn-Pendelzügen. Die RBe 540 074 fährt heute bei der Oensingen-Balsthal-Bahn.' }
});

/* =====================================================================
   BLS und TPF (Oktober 2026): Linien nach den Flottenseiten von BLS und TPF
   und dem Liniennetz des RER Fribourg. Meterspur mit «linien» (gestrichelt).
   ===================================================================== */
Object.assign(BAHNHOF_EXTRA, {
  'Zweisimmen': [2595109, 1155802], 'Frutigen': [2616307, 1159760], 'Langnau i.E.': [2626312, 1198741], 'Konolfingen': [2613929, 1192192],
  'Kerzers': [2581295, 1202697], 'Ins': [2574211, 1205476], 'Lyss': [2589950, 1213932], 'Büren an der Aare': [2594888, 1220800],
  'Belp': [2604573, 1193087], 'Murten/Morat': [2575373, 1197190], 'Willisau': [2642349, 1219232], 'Wolhusen': [2648711, 1211805],
  'Schwarzenburg': [2592668, 1185333], 'Laupen BE': [2585018, 1194484], 'Goppenstein': [2624339, 1135197], 'Hasle-Rüegsau': [2616476, 1207269],
  'Ostermundigen': [2603263, 1200637], 'Bulle': [2570462, 1163181], 'Romont FR': [2559703, 1171502], 'Broc-Chocolaterie': [2574770, 1161626],
  'Palézieux': [2553919, 1154785], 'Châtel-St-Denis': [2558350, 1153090], 'Montbovon': [2569554, 1148311], 'Gruyères': [2571994, 1159103]
});
Object.assign(STAEDTE, { 'Rotterdam': [4.469, 51.925], 'Antwerpen': [4.421, 51.217], 'Duisburg': [6.775, 51.430], 'Domodossola': [8.292, 46.115], 'Novara': [8.625, 45.451] });
INTERNATIONAL.blscargo = { strecken: [['Rotterdam', 'Duisburg', 'Köln', 'Mainz', 'Mannheim', 'Karlsruhe', 'Freiburg', 'Basel'], ['Antwerpen', 'Köln'],
  ['Basel', 'Bern', 'Brig', 'Domodossola', 'Novara', 'Milano'], ['Basel', 'Luzern', 'Lugano', 'Milano']],
  text: 'Im Transitverkehr von den Nordseehäfen Rotterdam und Antwerpen über Deutschland und die Schweiz bis Norditalien, durch den Lötschberg-Simplon und den Gotthard.' };
const BLS_CARGO_CH = [['Basel Bad Bf', 'Basel SBB', 'Olten', 'Bern', 'Thun', 'Spiez', 'Brig'], ['Olten', 'Luzern', 'Arth-Goldau', 'Erstfeld', 'Bellinzona', 'Chiasso']];
Object.assign(EINSATZ, {
  'bls-rabe-528': { gebiete: [['Bern', 14, 'S-Bahn Bern']],
    strecken: [['Bern', 'Thun', 'Spiez', 'Zweisimmen'], ['Spiez', 'Frutigen', 'Kandersteg', 'Goppenstein', 'Brig'], ['Bern', 'Kerzers', 'Neuchâtel', 'La Chaux-de-Fonds'],
      ['Laupen BE', 'Bern', 'Konolfingen', 'Langnau i.E.', 'Wolhusen', 'Luzern'], ['Bern', 'Schwarzenburg']],
    text: 'Bei der S-Bahn Bern und Luzern, als RegioExpress Bern–Spiez–Zweisimmen und über die Lötschberg-Bergstrecke nach Brig und Domodossola sowie als InterRegio Bern–Neuchâtel–La Chaux-de-Fonds.' },
  'bls-rabe-515': { gebiete: [['Bern', 14, 'S-Bahn Bern']],
    strecken: [['Fribourg/Freiburg', 'Bern', 'Thun'], ['Biel/Bienne', 'Bern', 'Belp'], ['Bern', 'Burgdorf', 'Olten']],
    text: 'Bei der S-Bahn Bern (S1 Fribourg–Bern–Thun, S3/S31 Biel–Bern–Belp) und als InterRegio Bern–Burgdorf–Olten und Bern–Biel.' },
  'bls-rabe-535': { strecken: [['Solothurn', 'Burgdorf', 'Konolfingen', 'Thun'], ['Thun', 'Belp', 'Bern', 'Burgdorf', 'Solothurn'], ['Zweisimmen', 'Spiez', 'Interlaken Ost'], ['Spiez', 'Frutigen']],
    text: 'Im Berner Oberland (Zweisimmen–Spiez, Spiez–Interlaken Ost, Spiez–Frutigen) und bei der S-Bahn Bern zwischen Thun, Bern, Burgdorf und Solothurn.' },
  'bls-rabe-525': { strecken: [['Bern', 'Konolfingen', 'Langnau i.E.'], ['Hasle-Rüegsau', 'Konolfingen', 'Thun'], ['Solothurn', 'Burgdorf', 'Ostermundigen'], ['Bern', 'Kerzers', 'Neuchâtel'],
      ['Kerzers', 'Lyss', 'Büren an der Aare'], ['Kerzers', 'Murten/Morat', 'Payerne'], ['Luzern', 'Wolhusen', 'Willisau'], ['Brig', 'Visp']],
    text: 'Bei den S-Bahnen Bern und Luzern, unter anderem Bern–Neuchâtel, Bern–Langnau, Lyss–Büren an der Aare und Luzern–Willisau, dazu als RegioExpress Domodossola–Brig–Visp.' },
  'bls-re-465': { strecken: [['Interlaken Ost', 'Spiez', 'Zweisimmen'], ['Kandersteg', 'Goppenstein'], ['Basel SBB', 'Olten', 'Bern', 'Thun', 'Spiez', 'Brig']],
    text: 'Vor dem GoldenPass Express zwischen Interlaken Ost und Zweisimmen, vor den Autozügen am Lötschberg und am Simplon sowie vor Güterzügen auf der Lötschberg-Simplon-Achse.' },
  'bls-re-475': { strecken: BLS_CARGO_CH, international: 'blscargo',
    text: 'Im Güterverkehr durch die Schweiz auf der Lötschberg-Simplon- und der Gotthard-Achse, international bis in die Niederlande, nach Belgien und Italien.' },
  'bls-re-485': { strecken: BLS_CARGO_CH, text: 'Im Güterverkehr in der Schweiz und nach Deutschland, auf der Lötschberg-Simplon- und der Gotthard-Achse.' },
  'bls-re-486': { strecken: BLS_CARGO_CH, text: 'Im Transitgüterverkehr durch die Alpen, auch mit der Rollenden Landstrasse; Zulassung für die Schweiz, Deutschland, Italien und Österreich.' },
  'bls-br-185': { strecken: BLS_CARGO_CH, text: 'Im Güterverkehr von BLS Cargo in der Schweiz, in Deutschland und Österreich.' },
  'bls-br-186': { strecken: BLS_CARGO_CH, international: 'blscargo', text: 'Im Transitgüterverkehr von BLS Cargo, auch auf der Achse Rotterdam–Italien mit dem Melzo-Shuttle.' },
  'bls-br-187': { strecken: BLS_CARGO_CH, text: 'Im Güterverkehr von BLS Cargo in der Schweiz, in Deutschland und Österreich.' },
  'bls-br-193': { strecken: BLS_CARGO_CH, international: 'blscargo', text: 'Im Transitgüterverkehr von BLS Cargo, bis in die Niederlande und nach Italien.' },
  'tpf-rabe-527': { strecken: [['Bern', 'Fribourg/Freiburg', 'Romont FR', 'Bulle', 'Broc-Chocolaterie'], ['Fribourg/Freiburg', 'Murten/Morat', 'Ins', 'Neuchâtel']],
    text: 'Als RegioExpress Bern–Fribourg–Romont–Bulle–Broc und beim RER Fribourg zwischen Fribourg, Murten und Neuchâtel.' },
  'tpf-rbde-560': { strecken: [['Bern', 'Fribourg/Freiburg', 'Romont FR', 'Bulle', 'Broc-Chocolaterie'], ['Fribourg/Freiburg', 'Murten/Morat', 'Ins', 'Neuchâtel']],
    text: 'Beim RER Fribourg: RegioExpress Bern–Fribourg–Bulle–Broc und S20/S21 Fribourg–Murten–Ins–Neuchâtel.' },
  'tpf-abe-4-12': { linien: [['Palézieux', 'Châtel-St-Denis', 'Bulle', 'Montbovon'], ['Bulle', 'Gruyères']], orte: [['Bulle']],
    text: 'Auf dem Meterspurnetz der TPF: S50 Palézieux–Châtel-St-Denis–Bulle–Montbovon und S51 bis Gruyères. Die Meterspur ist gestrichelt und vereinfacht eingezeichnet.' },
  'tpf-be-4-4-120': { linien: [['Palézieux', 'Châtel-St-Denis', 'Bulle', 'Montbovon'], ['Bulle', 'Gruyères']], orte: [['Bulle']],
    text: 'Auf dem Meterspurnetz der TPF zwischen Palézieux, Bulle, Gruyères und Montbovon. Die Meterspur ist gestrichelt und vereinfacht eingezeichnet.' },
  'tpf-funiculaire': { orte: [['Fribourg/Freiburg']], text: 'In der Stadt Fribourg zwischen der Unterstadt (Neuveville) und St-Pierre.' }
});
/* =====================================================================
   SOB (Oktober 2026): Linien nach der Flottenseite der SOB und Wikipedia
   (Schweizerische Südostbahn). Eigenes Netz der SOB: Romanshorn–St. Gallen–
   Wattwil–Nesslau, Rapperswil–Pfäffikon SZ–Arth-Goldau, Wädenswil–Einsiedeln.
   ===================================================================== */
Object.assign(BAHNHOF_EXTRA, {
  'Wattwil': [2724621, 1240041], 'Herisau': [2738777, 1250441], 'Pfäffikon SZ': [2701487, 1228872], 'Biberbrugg': [2697374, 1223620],
  'Einsiedeln': [2699076, 1220557], 'Wädenswil': [2693645, 1231669], 'Samstagern': [2694527, 1227485], 'Uznach': [2716786, 1231520],
  'Nesslau-Neu St. Johann': [2733202, 1232148], 'Siebnen-Wangen': [2710816, 1226778], 'Altstätten SG': [2759937, 1249203], 'Thalwil': [2685175, 1238955],
  'Rothenthurm': [2693820, 1217938], 'Walenstadt': [2742225, 1220463], 'Heerbrugg': [2765164, 1253368], 'Schwanden GL': [2724642, 1206389],
  'St. Margrethen': [2765862, 1258150]
});
const SOB_NETZ = [['Romanshorn', 'St. Gallen', 'Herisau', 'Wattwil', 'Nesslau-Neu St. Johann'], ['Rapperswil SG', 'Pfäffikon SZ', 'Biberbrugg', 'Rothenthurm', 'Arth-Goldau'], ['Wädenswil', 'Samstagern', 'Biberbrugg', 'Einsiedeln']];
const SOB_ALT = [['Rapperswil SG', 'Pfäffikon SZ', 'Biberbrugg', 'Rothenthurm', 'Arth-Goldau'], ['Wädenswil', 'Samstagern', 'Biberbrugg', 'Einsiedeln']];
const BT_NETZ = [['Romanshorn', 'St. Gallen', 'Herisau', 'Wattwil', 'Nesslau-Neu St. Johann']];
const VAE = ['St. Gallen', 'Herisau', 'Wattwil', 'Uznach', 'Rapperswil SG', 'Pfäffikon SZ', 'Biberbrugg', 'Rothenthurm', 'Arth-Goldau', 'Luzern'];
const SOB_SBAHN = [['Rapperswil SG', 'Uznach', 'Wattwil', 'Herisau', 'St. Gallen', 'Rorschach', 'St. Margrethen', 'Altstätten SG', 'Buchs SG', 'Sargans'],
  ['Rapperswil SG', 'Ziegelbrücke', 'Glarus', 'Schwanden GL'], ['Sargans', 'Walenstadt', 'Ziegelbrücke', 'Uznach'], ['Wädenswil', 'Samstagern', 'Biberbrugg', 'Einsiedeln'],
  ['Einsiedeln', 'Biberbrugg', 'Pfäffikon SZ', 'Rapperswil SG'], ['Biberbrugg', 'Rothenthurm', 'Arth-Goldau']];
const SOB_SBAHN_TEXT = 'Auf den S-Bahn- und Regionallinien der SOB, zum Beispiel S4 Uznach–Wattwil–St. Gallen–Sargans, S6 Rapperswil–Glarus–Schwanden, S13 Wädenswil–Einsiedeln und S40 Einsiedeln–Rapperswil. Die Zuteilung der Züge wechselt mit Fahrplan und Umläufen.';
Object.assign(EINSATZ, {
  'sob-traverso': { strecken: [VAE, ['Basel SBB', 'Olten', 'Luzern', 'Arth-Goldau', 'Erstfeld', 'Göschenen', 'Airolo', 'Bellinzona', 'Locarno'], ['Zürich HB', 'Zug', 'Arth-Goldau'],
      ['Bern', 'Burgdorf', 'Langenthal', 'Olten', 'Zürich HB', 'Thalwil', 'Wädenswil', 'Pfäffikon SZ', 'Siebnen-Wangen', 'Ziegelbrücke', 'Walenstadt', 'Sargans', 'Landquart', 'Chur'],
      ['St. Gallen', 'Rorschach', 'St. Margrethen', 'Heerbrugg', 'Altstätten SG', 'Buchs SG', 'Sargans', 'Chur']],
    text: 'Als Voralpen-Express St. Gallen–Rapperswil–Arth-Goldau–Luzern, als Treno Gottardo von Basel und Zürich über die Gotthard-Bergstrecke nach Locarno, als Aare Linth Bern–Zürich–Chur und als Alpenrhein-Express St. Gallen–Chur.' },
  'sob-flirt3': { strecken: SOB_SBAHN, text: SOB_SBAHN_TEXT },
  'sob-flirt-1': { strecken: SOB_SBAHN, text: SOB_SBAHN_TEXT },
  'sob-flirt-2': { strecken: SOB_SBAHN, text: SOB_SBAHN_TEXT },
  'sob-tm-234': { strecken: SOB_NETZ, orte: [['Zürich Flughafen'], ['Uetliberg', 2679252, 1245110]],
    text: 'Vor allem auf dem Netz der SOB. Für andere Bahnen auch auswärts, etwa am Flughafen Zürich und am Uetliberg.' },
  'sob-dienstwagen': { strecken: SOB_NETZ, text: 'Für Baustellen und Unterhalt auf dem Netz der SOB.' },
  'sob-rbde-561': { strecken: [['Wädenswil', 'Samstagern', 'Biberbrugg', 'Einsiedeln'], ['Rapperswil SG', 'Pfäffikon SZ', 'Biberbrugg', 'Rothenthurm', 'Arth-Goldau'], ['Pfäffikon SZ', 'Siebnen-Wangen', 'Ziegelbrücke']],
    text: 'Früher auf Wädenswil–Einsiedeln, Rapperswil–Samstagern und Biberbrugg–Arth-Goldau, später im Voralpen-Express. Zuletzt bis Oktober 2025 auf der S27 Siebnen-Wangen–Ziegelbrücke.' },
  'sob-abt-npz-sued': { strecken: [['Wädenswil', 'Samstagern', 'Biberbrugg', 'Einsiedeln'], ['Rapperswil SG', 'Pfäffikon SZ', 'Biberbrugg', 'Rothenthurm', 'Arth-Goldau'], ['Pfäffikon SZ', 'Siebnen-Wangen', 'Ziegelbrücke']],
    text: 'Mit den NPZ Süd auf den Strecken der alten SOB, zuletzt bis Oktober 2025 auf der S27 Siebnen-Wangen–Ziegelbrücke.' },
  'sob-rbde-566': { strecken: BT_NETZ, text: 'Früher im Regionalverkehr auf dem BT-Netz zwischen Romanshorn, St. Gallen, Herisau, Wattwil und Nesslau.' },
  'sob-abt-npz-ost': { strecken: BT_NETZ, text: 'Früher mit den NPZ Ost im Regionalverkehr auf dem BT-Netz in der Ostschweiz.' },
  'sob-revvivo': { strecken: [VAE], text: 'Früher im Voralpen-Express St. Gallen–Rapperswil–Arth-Goldau–Luzern.' },
  'sob-ew-iv': { strecken: [VAE, ['St. Gallen', 'Romanshorn']], text: 'Früher im Voralpen-Express zwischen Luzern, St. Gallen und Romanshorn.' },
  'sob-ew-i-ii': { strecken: [...SOB_ALT, ...BT_NETZ], text: 'Früher in lokbespannten Zügen auf den Strecken von SOB und BT.' },
  'sob-bde-576': { strecken: [...SOB_ALT, ...BT_NETZ, ['Wattwil', 'Uznach', 'Rapperswil SG']], text: 'Früher im Regional- und Direktverkehr von SOB und BT, auch auf der «Direkten Linie» Romanshorn–St. Gallen–Rapperswil–Arth-Goldau.' },
  'sob-abe-4-4': { strecken: SOB_ALT, text: 'Früher auf den elektrifizierten Strecken der alten SOB zwischen Rapperswil, Arth-Goldau, Wädenswil und Einsiedeln.' },
  'sob-de-4-4': { strecken: SOB_ALT, text: 'Früher im Gepäckverkehr auf den Strecken der alten SOB.' },
  'bt-be-4-4': { strecken: [...BT_NETZ, ['Wattwil', 'Uznach', 'Rapperswil SG']], text: 'Früher vor Personen- und Güterzügen auf dem BT-Netz und auf der «Direkten Linie» über Wattwil nach Rapperswil.' },
  'bt-be-3-4': { strecken: BT_NETZ, text: 'Früher im Regionalverkehr auf dem BT-Netz, später auf historischen Fahrten, etwa bei Wattwil.' },
  'sob-re-446': { strecken: [VAE], text: 'Früher vor dem Voralpen-Express zwischen Luzern und St. Gallen.' },
  'sob-re-456': { strecken: [VAE, ['St. Gallen', 'Romanshorn']], text: 'Früher vor Personenzügen der BT und vor dem Voralpen-Express zwischen Luzern, St. Gallen und Romanshorn.' },
  'sob-re-4-4-iii': { strecken: SOB_ALT, text: 'Früher vor Personen- und Güterzügen auf den steilen Strecken der alten SOB.' },
  'sob-ae-476': { strecken: SOB_ALT, text: 'Früher als zusätzliche Zugkraft auf den Strecken der alten SOB.' },
  'sob-e-3-3': { strecken: SOB_ALT, text: 'Früher auf der Wädenswil–Einsiedeln-Bahn und dem Netz der alten SOB.' },
  'sob-ed-4-5': { strecken: SOB_ALT, text: 'Früher vor schwereren Zügen auf den Linien der alten SOB.' },
  'sob-am-846': { strecken: SOB_ALT, orte: [['Samstagern']], text: 'Früher vor Bauzügen und im Rangierdienst auf dem Netz der SOB, zum Beispiel in Samstagern.' },
  'sob-eea-936': { orte: [['Herisau'], ['Samstagern']], text: 'Früher im Rangierdienst in Bahnhöfen und Werkstätten der BT und der SOB.' },
  'sob-te-216': { orte: [['Herisau']], text: 'Im Rangierdienst in Bahnhöfen und Werkstätten, zum Beispiel in Herisau.' },
  'sob-tm-236': { strecken: SOB_NETZ, orte: [['Herisau']], text: 'Früher im Rangier- und Baudienst auf dem Netz der SOB, oft in Herisau.' },
  'sob-xtmas': { strecken: SOB_NETZ, text: 'Von 2010 bis 2014 für Arbeiten an der Infrastruktur auf dem Netz der SOB.' }
});