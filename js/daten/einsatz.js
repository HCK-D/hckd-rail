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
/* =====================================================================
   BLS und TPF: historische Fahrzeuge, Infrastruktur, Rangier und Dienst
   (Oktober 2026), nach den Angaben auf den Fahrzeugseiten.
   ===================================================================== */
const BLS_LOETSCHBERG = ['Bern', 'Thun', 'Spiez', 'Frutigen', 'Kandersteg', 'Goppenstein', 'Brig'];
const BLS_NETZ = [['Thun', 'Spiez', 'Frutigen', 'Kandersteg', 'Goppenstein', 'Brig'], ['Spiez', 'Zweisimmen'], ['Spiez', 'Interlaken Ost'], ['Bern', 'Kerzers', 'Neuchâtel'],
  ['Bern', 'Schwarzenburg'], ['Bern', 'Belp', 'Thun'], ['Burgdorf', 'Hasle-Rüegsau', 'Konolfingen', 'Thun'], ['Solothurn', 'Burgdorf']];
const BLS_NETZ_TEXT = 'Für Baustellen und Unterhalt auf dem Netz der BLS, zum Beispiel am Lötschberg, im Simmental, im Gürbetal und auf Bern–Neuchâtel.';
const TPF_NORMAL = [['Romont FR', 'Bulle', 'Broc-Chocolaterie'], ['Fribourg/Freiburg', 'Murten/Morat', 'Ins']];
const TPF_METER = [['Palézieux', 'Châtel-St-Denis', 'Bulle', 'Montbovon'], ['Bulle', 'Gruyères']];
const TPF_METER_TEXT = 'Auf dem Meterspurnetz der TPF zwischen Palézieux, Bulle, Gruyères und Montbovon. Die Meterspur ist gestrichelt und vereinfacht eingezeichnet.';
Object.assign(EINSATZ, {
  'bls-re-425': { strecken: [['Basel SBB', 'Olten', ...BLS_LOETSCHBERG]], text: 'Früher vor Schnellzügen Bern–Brig, vor Güterzügen Basel–Domodossola und beim Autoverlad Kandersteg–Goppenstein.' },
  'bls-am-843': { strecken: BLS_NETZ, orte: [['Frutigen']], text: 'Auf dem Netz der BLS, für Bauzüge, Rangieren und im Interventionsdienst.' },
  'bls-fccnpps': { strecken: BLS_NETZ, text: BLS_NETZ_TEXT },
  'bls-faccnpps': { strecken: BLS_NETZ, text: BLS_NETZ_TEXT },
  'bls-xas': { strecken: BLS_NETZ, text: BLS_NETZ_TEXT },
  'bls-fans-u': { strecken: BLS_NETZ, text: BLS_NETZ_TEXT },
  'bls-schleiffahrzeug': { strecken: BLS_NETZ, orte: [['Spiez']], text: 'Auf dem Netz der BLS; der erste Ernsteinsatz war in Spiez geplant.' },
  'bls-rangier': { strecken: BLS_NETZ, text: 'In Bahnhöfen und Werkstätten auf dem Netz der BLS.' },
  'bls-lrz': { strecken: [['Frutigen', 'Visp'], ['Thun', 'Spiez', 'Frutigen', 'Kandersteg', 'Goppenstein', 'Brig']], orte: [['Frutigen']],
    text: 'Vom Interventionszentrum Frutigen aus, unter anderem für den Lötschberg-Basistunnel und die Bergstrecke.' },
  'bls-hilfswagen': { strecken: BLS_NETZ, text: 'Für Bergungen und technische Hilfe auf dem Netz der BLS.' },
  'bls-ae-4-4': { strecken: [BLS_LOETSCHBERG], text: 'Früher vor Personen- und Güterzügen über die Lötschberg-Bergstrecke.' },
  'bls-ae-6-8': { strecken: [BLS_LOETSCHBERG], text: 'Früher vor schweren Zügen über den Lötschberg, ab 1939 auch vor Schnellzügen im Flachland.' },
  'bls-ae-8-8': { strecken: [BLS_LOETSCHBERG], text: 'Früher vor schweren Zügen am Lötschberg, zuletzt auch mit Aushubzügen aus dem Lötschberg-Basistunnel.' },
  'bls-be-5-7': { strecken: [BLS_LOETSCHBERG], text: 'Früher als erste Elektrolok der Lötschbergbahn vor Schnell- und Güterzügen.' },
  'bls-ce-6-6': { strecken: [['Thun', 'Spiez', 'Interlaken Ost'], ['Bern', 'Kerzers', 'Neuchâtel']], text: 'Früher vor Güterzügen, etwa zwischen Thun und Interlaken, ab 1928 auf der Bern–Neuenburg-Bahn.' },
  'bls-ce-4-6': { strecken: [['Spiez', 'Zweisimmen']], text: 'Früher auf Nebenlinien der BLS-Gruppe, etwa Spiez–Erlenbach–Zweisimmen.' },
  'bls-ce-4-4': { strecken: [['Bern', 'Belp', 'Thun'], ['Bern', 'Schwarzenburg']], text: 'Früher auf den Linien der GBS: Bern–Belp–Thun und Bern–Schwarzenburg.' },
  'bls-bcfe-4-6': { strecken: [['Bern', 'Kerzers', 'Neuchâtel'], ['Thun', 'Spiez', 'Frutigen', 'Kandersteg', 'Goppenstein', 'Brig']], text: 'Früher im Personenverkehr der BLS-Gruppe, etwa auf der Bern–Neuenburg-Bahn, zu der die 736 gehörte.' },
  'bls-be-4-4-761': { strecken: [['Bern', 'Kerzers', 'Neuchâtel']], text: 'Früher auf der Bern–Neuenburg-Bahn, auch vor internationalen Zügen Bern–Paris; heute auf Sonderfahrten.' },
  'bls-ce-2-4': { orte: [['Bern']], text: 'Früher bei der BLS-Gruppe; genaue Einsatzstrecken sind nicht belegt.' },
  'bls-abde-4-8': { strecken: [['Spiez', 'Zweisimmen'], ['Spiez', 'Interlaken Ost'], ['Bern', 'Belp', 'Thun']], orte: [['Kerzers']],
    text: 'Früher im Regionalverkehr, etwa im Simmental, zwischen Spiez und Interlaken und im Gürbetal. Der erhaltene Zug steht bei Kerzers-Kallnach.' },
  'bls-rbde-565': { gebiete: [['Bern', 14, 'S-Bahn Bern']], strecken: [['Thun', 'Spiez', 'Zweisimmen'], ['Bern', 'Kerzers', 'Neuchâtel'], ['Bern', 'Belp', 'Thun']],
    text: 'Früher im Regional- und S-Bahn-Verkehr der BLS, unter anderem bei der S-Bahn Bern.' },
  'bls-rbde-566': { gebiete: [['Bern', 14, 'S-Bahn Bern']], strecken: [['Spiez', 'Frutigen'], ['Brig', 'Goppenstein'], ['Thun', 'Konolfingen', 'Burgdorf', 'Solothurn']],
    text: 'Früher unter anderem Spiez–Frutigen, Brig–Goppenstein, bei der S-Bahn Bern und zwischen Thun und Solothurn.' },
  'bls-rabe-526': { orte: [['Biel/Bienne']], text: 'Bei der BLS im Regionalverkehr; ab 2013 bei der SBB im Jura ab Biel, ab 2018 bei Thurbo.' },
  'bls-ew-iii': { strecken: [['Bern', 'Kerzers', 'Neuchâtel']], text: 'Zuletzt vor allem als RegioExpress Bern–Neuchâtel.' },
  'bls-re-420': { strecken: [['Interlaken Ost', 'Spiez', 'Zweisimmen']], text: 'Zuletzt vor den Wagen der GoldenPass Line zwischen Interlaken Ost und Zweisimmen.' },
  'tpf-tm-87': { strecken: TPF_NORMAL, text: 'Auf dem Normalspurnetz der TPF, etwa Romont–Bulle–Broc und Fribourg–Murten–Ins.' },
  'tpf-tmf-17': { linien: TPF_METER, orte: [['Bulle']], text: TPF_METER_TEXT },
  'tpf-gem-18': { linien: TPF_METER, orte: [['Bulle']], text: TPF_METER_TEXT },
  'tpf-x-925': { linien: TPF_METER, strecken: TPF_NORMAL, text: 'Auf dem Meterspurnetz der TPF; mit dem Tragwagen Sgjs X113 arbeitet der Kran auch auf dem Normalspurnetz. Die Meterspur ist gestrichelt eingezeichnet.' },
  'tpf-retrozug': { linien: TPF_METER, text: 'Auf Sonderfahrten auf dem Meterspurnetz der TPF. Die Meterspur ist gestrichelt und vereinfacht eingezeichnet.' },
  'gfm-be-111': { linien: TPF_METER, text: 'Früher auf dem Meterspurnetz der CEG und der GFM in der Gruyère. Die Meterspur ist gestrichelt und vereinfacht eingezeichnet.' },
  'gfm-be-115': { linien: TPF_METER, text: 'Früher auf dem Meterspurnetz der GFM und der TPF. Die Meterspur ist gestrichelt und vereinfacht eingezeichnet.' },
  'gfm-be-131': { linien: TPF_METER, text: 'Früher auf dem Meterspurnetz der GFM. Die Meterspur ist gestrichelt und vereinfacht eingezeichnet.' },
  'gfm-bde-141': { linien: TPF_METER, text: 'Früher auf dem Meterspurnetz der GFM, zuerst vor Kieszügen. Die Meterspur ist gestrichelt und vereinfacht eingezeichnet.' },
  'gfm-be-151': { linien: TPF_METER, text: 'Früher als Pendelzug auf dem Meterspurnetz der GFM und der TPF. Die Meterspur ist gestrichelt und vereinfacht eingezeichnet.' },
  'gfm-gde-101': { linien: [...TPF_METER, ['Montreux', 'Montbovon', 'Zweisimmen']], text: 'Früher auf dem Meterspurnetz der GFM; heute bei der MOB zwischen Montreux und Zweisimmen. Die Meterspur ist gestrichelt und vereinfacht eingezeichnet.' },
  'gfm-te-22': { orte: [['Bulle'], ['Montbovon']], text: 'Früher im Rangierdienst auf dem Meterspurnetz der GFM: der 11 in Bulle, der 12 in Montbovon.' },
  'gfm-te-44': { orte: [['Broc-Fabrique', 2574770, 1161626]], linien: TPF_METER, text: 'Früher im Rangierdienst in Broc-Fabrique und vor Bauzügen auf dem Meterspurnetz der GFM.' },
  'gfm-tm-15': { orte: [['Bulle']], linien: TPF_METER, text: 'Früher vor Bauzügen auf dem Meterspurnetz der GFM und im Rangierdienst in Bulle.' },
  'gfm-abde-24': { strecken: [['Fribourg/Freiburg', 'Murten/Morat', 'Ins']], text: 'Früher auf der Normalspurstrecke Freiburg–Murten–Ins.' },
  'gfm-abde-44': { strecken: TPF_NORMAL, text: 'Früher auf den Normalspurstrecken der GFM.' },
  'gfm-rbde-567': { strecken: TPF_NORMAL, text: 'Früher als Pendelzüge auf dem Normalspurnetz von GFM und TPF.' },
  'gfm-ee-91': { orte: [['Bulle']], strecken: TPF_NORMAL, text: 'Früher im Rangierdienst auf dem Normalspurnetz der GFM, etwa in Bulle.' },
  'gfm-wagen': { linien: TPF_METER, text: 'Früher auf dem Meterspurnetz der CEG und der GFM. Die Meterspur ist gestrichelt und vereinfacht eingezeichnet.' }
});
/* =====================================================================
   transN (Oktober 2026): Linien nach den Flottenseiten von transN.
   Meterspur mit «linien» (gestrichelt).
   ===================================================================== */
Object.assign(BAHNHOF_EXTRA, {
  'Buttes': [2532518, 1193407], 'Travers': [2541978, 1199319], 'Fleurier': [2534681, 1195208], 'Le Locle': [2547390, 1212104],
  'Les Ponts-de-Martel': [2546505, 1205576], 'Les Brenets': [2544455, 1213170], 'Boudry Littorail': [2554363, 1199997],
  'Neuchâtel Place Pury': [2561234, 1204476], 'Auvernier': [2557322, 1203328]
});
const TRN_FLIRT = [['Neuchâtel', 'Auvernier', 'Travers', 'Fleurier', 'Buttes'], ['Neuchâtel', 'La Chaux-de-Fonds', 'Le Locle']];
const TRN_FLIRT_TEXT = 'Auf den transN-Linien R21 Neuchâtel–Val-de-Travers–Buttes und R23 Neuchâtel–La Chaux-de-Fonds–Le Locle.';
Object.assign(EINSATZ, {
  'trn-rabe-523': { strecken: TRN_FLIRT, text: TRN_FLIRT_TEXT },
  'trn-rabe-527': { strecken: TRN_FLIRT, text: TRN_FLIRT_TEXT },
  'trn-be-4-8': { linien: [['Neuchâtel Place Pury', 'Auvernier', 'Boudry Littorail']], orte: [['Neuchâtel']],
    text: 'Auf der Littorail-Linie R15 von Neuchâtel Place Pury nach Boudry. Die Meterspur ist gestrichelt und vereinfacht eingezeichnet.' },
  'trn-abe-4-8': { linien: [['La Chaux-de-Fonds', 'Les Ponts-de-Martel']], text: 'Auf der R22 La Chaux-de-Fonds–Les Ponts-de-Martel. Die Meterspur ist gestrichelt und vereinfacht eingezeichnet.' },
  'trn-bde-4-4': { linien: [['Le Locle', 'Les Brenets']], text: 'Auf der R24 Le Locle–Les Brenets, einer gut 4 km langen Meterspurstrecke. Sie ist gestrichelt eingezeichnet.' },
  'trn-tm-44-normal': { strecken: [['Travers', 'Fleurier', 'Buttes']], text: 'Für Bau und Unterhalt auf dem Normalspurnetz von transN, etwa auf der Strecke Travers–Buttes.' },
  'trn-tm-44-meter': { linien: [['Neuchâtel Place Pury', 'Auvernier', 'Boudry Littorail'], ['La Chaux-de-Fonds', 'Les Ponts-de-Martel'], ['Le Locle', 'Les Brenets']],
    text: 'Im Baudienst auf den Meterspurlinien von transN, unter anderem La Chaux-de-Fonds–Les Ponts-de-Martel. Die Meterspur ist gestrichelt und vereinfacht eingezeichnet.' }
});
/* Re 430 und Ama 832 (Oktober 2026) */
Object.assign(EINSATZ, {
  'ama-832': { netz: true, orte: [['St. Margrethen']], text: 'Im Rangierdienst von SBB Cargo in der Schweiz, zum Beispiel in St. Margrethen.' },
  'h-re430': { netz: true, strecken: [['Zürich HB', 'Zug', ...GOTTHARD_BERG]], text: 'Früher vor Schnell- und Güterzügen am Gotthard, später vor allem im Güterverkehr von SBB Cargo im ganzen Netz.' }
});/* =====================================================================
   transN: historische und Spezialfahrzeuge (Oktober 2026).
   Museen mit Koordinaten (LV95, geo.admin.ch): Blonay–Chamby in Chaulin.
   ===================================================================== */
Object.assign(BAHNHOF_EXTRA, { 'Corcelles NE': [2557088, 1203959] });
const TRN_RVT = [['Travers', 'Fleurier', 'Buttes']];
const TRN_LITTORAIL = ['Neuchâtel Place Pury', 'Auvernier', 'Boudry Littorail'];
const TRN_CMN = [['La Chaux-de-Fonds', 'Les Ponts-de-Martel'], ['Le Locle', 'Les Brenets']];
const BLONAY_CHAMBY = ['Blonay–Chamby', 2559237, 1144746];
const TRN_MS = ' Die Meterspur ist gestrichelt und vereinfacht eingezeichnet.';
Object.assign(EINSATZ, {
  'trn-tm-2-2-11': { linien: [['La Chaux-de-Fonds', 'Les Ponts-de-Martel']], text: 'Im Baudienst auf der Meterspurstrecke La Chaux-de-Fonds–Les Ponts-de-Martel.' + TRN_MS },
  'trn-tm-237-312': { strecken: TRN_RVT, orte: [['Fleurier']], text: 'Im Unterhalts- und Rangierdienst im Val-de-Travers; zuletzt beim Depot Fleurier fotografiert.' },
  'trn-zweiwege': { linien: TRN_CMN, text: 'Im Baudienst auf den Meterspurstrecken La Chaux-de-Fonds–Les Ponts-de-Martel und Le Locle–Les Brenets.' + TRN_MS },
  'trn-ast-21': { linien: TRN_CMN, text: 'Für Sonderfahrten auf den Meterspurstrecken von transN in den Neuenburger Bergen.' + TRN_MS },
  'trn-be-4-4-1': { strecken: TRN_RVT, text: 'Früher vor Güter- und Schülerzügen auf der RVT-Strecke im Val-de-Travers. Heute gehört die Lok RVT-Historique.' },
  'trn-abde-2-4-102': { strecken: TRN_RVT, text: 'Früher im Regelbetrieb auf der RVT-Strecke im Val-de-Travers, heute auf Sonder- und Gruppenfahrten von RVT-Historique.' },
  'trn-rbde-106': { strecken: TRN_RVT, orte: [['Fribourg/Freiburg']], text: 'Früher auf der RVT-Strecke im Val-de-Travers; 2004 bis 2013 an die TPF vermietet, zum Beispiel in Freiburg. Heute auf Fahrten von RVT-Historique.' },
  'trn-abm-2-5-9': { strecken: TRN_RVT, orte: [['Luzern']], text: 'Von 1924 bis 1965 auf dem RVT im Val-de-Travers. Heute gehört er zur Sammlung des Verkehrshauses der Schweiz in Luzern.' },
  'trn-be-2-4': { linien: [TRN_LITTORAIL], text: 'Früher auf der Überlandstrecke Neuchâtel–Boudry und nach Cortaillod. Heute beim Tram-Museum Neuchâtel in Boudry.' + TRN_MS },
  'trn-be-2-2': { linien: [['Neuchâtel Place Pury', 'Corcelles NE'], TRN_LITTORAIL], orte: [BLONAY_CHAMBY], text: 'Früher im Stadttram von Neuchâtel, etwa auf der Linie 3 nach Corcelles. Die 73 fährt heute historisch nach Boudry, die 76 steht bei Blonay–Chamby.' + TRN_MS },
  'trn-be-4-4-583': { linien: [['Neuchâtel Place Pury', 'Corcelles NE'], TRN_LITTORAIL], text: 'Zuerst auf der Stadtlinie 3 nach Corcelles, ab 1976 auf der Überlandstrecke nach Boudry. Heute beim Tram-Museum Neuchâtel.' + TRN_MS },
  'trn-be-4-4-littorail': { linien: [TRN_LITTORAIL], text: 'Von 1981 bis 2019 auf der Littorail-Linie Neuchâtel–Boudry. Die 504 ist heute beim Tram-Museum Neuchâtel.' + TRN_MS },
  'trn-xe-2-2-601': { linien: [TRN_LITTORAIL], text: 'Früher im Dienst auf dem Tramnetz von Neuchâtel. Heute beim Tram-Museum Neuchâtel in Boudry.' + TRN_MS },
  'trn-tn-wagen': { linien: [['Neuchâtel Place Pury', 'Corcelles NE'], TRN_LITTORAIL], orte: [BLONAY_CHAMBY], text: 'Früher auf dem Tramnetz von Neuchâtel und nach Boudry. Vier Wagen sind beim Tram-Museum Neuchâtel, der C4 121 bei Blonay–Chamby.' + TRN_MS },
  'trn-g-3-3-1': { linien: [['Le Locle', 'Les Brenets']], orte: [BLONAY_CHAMBY], text: 'Von 1890 bis 1950 auf der Strecke Le Locle–Les Brenets. Heute bei der Museumsbahn Blonay–Chamby.' + TRN_MS },
  'trn-kkl-41': { linien: [['Le Locle', 'Les Brenets']], text: 'Fotografiert 2014 im Bahnhof Les Brenets an der Meterspurstrecke Le Locle–Les Brenets.' + TRN_MS }
});
/* =====================================================================
   Rhätische Bahn (Oktober 2026): Meterspur mit «linien» (gestrichelt).
   Zusätzliche Bahnhöfe (LV95, geo.admin.ch, auf etwa 1 km genau).
   ===================================================================== */
Object.assign(BAHNHOF_EXTRA, {
  'Thusis': [2753194, 1174068], 'Tiefencastel': [2763726, 1169897], 'Bergün/Bravuogn': [2776803, 1166750], 'Preda': [2779183, 1162427],
  'Bever': [2787886, 1158562], 'Poschiavo': [2801750, 1133654], 'Ospizio Bernina': [2798656, 1143340], 'Alp Grüm': [2799460, 1139158],
  'Brusio': [2806891, 1126819], 'Campocologno': [2808466, 1123824], 'Reichenau-Tamins': [2750427, 1187915], 'Arosa': [2770870, 1183194],
  'Sagliains': [2802982, 1182560], 'Klosters Selfranga': [2786463, 1192331], 'Mesocco': [2738026, 1139728], 'Castione-Arbedo': [2723791, 1120674],
  'Grono': [2731772, 1123312], 'Realp': [2681564, 1161330], 'Untervaz-Trimmis': [2761469, 1198622], 'Davos Wolfgang': [2784409, 1189288]
});
const RHB_STAMM = ['Landquart', 'Untervaz-Trimmis', 'Chur'];
const RHB_ALBULA = ['Chur', 'Reichenau-Tamins', 'Thusis', 'Tiefencastel', 'Filisur', 'Bergün/Bravuogn', 'Preda', 'Bever', 'Samedan', 'St. Moritz'];
const RHB_PRAETTIGAU = ['Landquart', 'Klosters Platz', 'Davos Wolfgang', 'Davos Platz', 'Filisur'];
const RHB_ENGADIN = ['Bever', 'Zernez', 'Sagliains', 'Scuol-Tarasp'];
const RHB_VEREINA = ['Klosters Platz', 'Klosters Selfranga', 'Sagliains'];
const RHB_BERNINA = ['St. Moritz', 'Pontresina', 'Ospizio Bernina', 'Alp Grüm', 'Poschiavo', 'Brusio', 'Campocologno', 'Tirano'];
const RHB_SURSELVA = ['Reichenau-Tamins', 'Ilanz', 'Disentis/Mustér'];
const RHB_AROSA = ['Chur', 'Arosa'];
const RHB_MISOX = ['Bellinzona', 'Castione-Arbedo', 'Grono', 'Mesocco'];
const RHB_AC = [RHB_STAMM, RHB_ALBULA, RHB_PRAETTIGAU, RHB_ENGADIN, RHB_VEREINA, RHB_SURSELVA, RHB_AROSA];
const RHB_ALLE = [...RHB_AC, RHB_BERNINA];
const RHB_BERGUEN = ['Bergün/Bravuogn'];
const RHB_MS = ' Die Meterspur ist gestrichelt und vereinfacht eingezeichnet.';
Object.assign(EINSATZ, {
  'rhb-capricorn': { linien: [RHB_STAMM, RHB_PRAETTIGAU, RHB_VEREINA, RHB_ENGADIN, ['Bever', 'Samedan', 'St. Moritz'], ['Chur', 'Reichenau-Tamins'], RHB_SURSELVA], text: 'Laut RhB auf Landquart–Davos–Filisur, Landquart–Scuol, Landquart–St. Moritz und Chur–Disentis/Mustér.' + RHB_MS },
  'rhb-allegra': { linien: [RHB_ALBULA, RHB_BERNINA, RHB_STAMM, RHB_AROSA], text: 'Auf dem Stammnetz und auf der Berninalinie bis Tirano, etwa im Bernina Express von Chur über die Albula.' + RHB_MS },
  'rhb-allegra-stz': { linien: [RHB_STAMM, ['Chur', 'Reichenau-Tamins', 'Thusis']], text: 'Vor allem im Pendlerverkehr rund um Chur, etwa auf der S-Bahn Chur–Thusis.' + RHB_MS },
  'rhb-alvra': { linien: [RHB_ALBULA], text: 'Auf der Albulalinie zwischen Chur und St. Moritz.' + RHB_MS },
  'rhb-ge44ii': { linien: RHB_AC, text: 'Auf dem ganzen Wechselstromnetz der RhB, auch auf der Arosalinie.' + RHB_MS },
  'rhb-ge44iii': { linien: [RHB_ALBULA, RHB_STAMM, RHB_VEREINA, RHB_SURSELVA, RHB_PRAETTIGAU], text: 'Vor Schnellzügen über die Albula, vor dem Glacier Express und vor den Autozügen durch den Vereinatunnel.' + RHB_MS },
  'rhb-panorama': { linien: [RHB_ALBULA, RHB_BERNINA, RHB_SURSELVA], text: 'Im Bernina Express von Chur über die Albula und den Berninapass nach Tirano; offene Aussichtswagen auch in der Rheinschlucht.' + RHB_MS },
  'rhb-glacier': { linien: [RHB_ALBULA, RHB_PRAETTIGAU, RHB_SURSELVA], orte: [['Realp']], text: 'Im Glacier Express von St. Moritz und Davos über Chur und Disentis/Mustér weiter auf dem Netz der MGB nach Zermatt.' + RHB_MS },
  'rhb-ew': { linien: RHB_ALLE, text: 'In lokbespannten Zügen auf dem ganzen Netz der RhB.' + RHB_MS },
  'rhb-steuerwagen': { linien: [...RHB_AC], text: 'In Pendelzügen mit Lok auf dem Stammnetz und in den Autozügen.' + RHB_MS },
  'rhb-gastro': { linien: [RHB_ALBULA, RHB_BERNINA, RHB_SURSELVA], text: 'In Sonder- und Charterzügen, etwa im Alpine Classic Pullman Express.' + RHB_MS },
  'rhb-vereina': { linien: [RHB_VEREINA], orte: [['Klosters Selfranga'], ['Sagliains']], text: 'Zwischen den Verladestationen Klosters Selfranga und Sagliains durch den Vereinatunnel.' + RHB_MS },
  'rhb-gepaeckwagen': { linien: RHB_AC, text: 'In Zügen des Stammnetzes; die Velowagen BD 56401–56406 fahren in den Alvra-Zügen auf der Albula.' + RHB_MS },
  'rhb-haik': { linien: RHB_ALLE, text: 'Im Güterverkehr in die Täler Graubündens.' + RHB_MS },
  'rhb-uac': { linien: RHB_AC, text: 'Im Güterverkehr auf dem Netz der RhB.' + RHB_MS },
  'rhb-za': { linien: RHB_ALLE, text: 'Bei der Versorgung Graubündens mit Mineralöl, auf dem ganzen Netz.' + RHB_MS },
  'rhb-fac': { linien: RHB_AC, text: 'Für Kies und andere Schüttgüter auf dem Netz der RhB.' + RHB_MS },
  'rhb-flachwagen': { linien: RHB_ALLE, text: 'Im Güterverkehr mit Maschinen, Holz, Stahl und Containern auf dem ganzen Netz.' + RHB_MS },
  'rhb-acts': { linien: RHB_ALLE, text: 'Im Containerverkehr auf dem ganzen Netz der RhB.' + RHB_MS },
  'rhb-container': { linien: RHB_ALLE, text: 'Im Containerverkehr auf dem ganzen Netz der RhB.' + RHB_MS },
  'rhb-spezialtransport': { linien: RHB_AC, text: 'Für schwere und hohe Ladungen auf dem Netz der RhB.' + RHB_MS },
  'rhb-geaf22': { orte: [['Landquart'], ['Chur'], ['Ilanz'], ['Thusis'], ['Davos Platz'], ['Zernez']], text: 'Im Rangierdienst, unter anderem in Landquart, Chur, Ilanz, Thusis, Davos Platz und Zernez.' },
  'rhb-ge33': { orte: [['Samedan'], ['Chur']], text: 'Im Rangierdienst in Samedan und Chur.' },
  'rhb-gmf44-242': { orte: [['Klosters Platz'], ['Landquart'], ['Davos Platz']], linien: [RHB_STAMM, RHB_PRAETTIGAU], text: 'Im Rangierdienst auf dem Stammnetz, etwa in Klosters Platz, Landquart und Davos.' + RHB_MS },
  'rhb-taf22': { orte: [['Landquart'], ['Poschiavo']], text: 'In Werkstätten und Depots, unter anderem in Landquart und Poschiavo.' },
  'rhb-gmf44ii': { linien: RHB_ALLE, text: 'Vor Bauzügen und im Winter mit Schneeschleudern im ganzen Netz der RhB.' + RHB_MS },
  'rhb-gem44': { linien: [RHB_BERNINA], orte: [['Pontresina'], ['Poschiavo']], text: 'Auf der Berninalinie, stationiert in Pontresina und Poschiavo; mit Diesel auch auf dem Stammnetz.' + RHB_MS },
  'rhb-tm': { linien: RHB_ALLE, text: 'Im Rangierdienst und vor kleinen Bauzügen auf dem ganzen Netz.' + RHB_MS },
  'rhb-tieflade': { linien: RHB_ALLE, text: 'In der Baustellenlogistik auf dem Netz der RhB.' + RHB_MS },
  'rhb-windhoff': { linien: RHB_ALLE, text: 'Ab 2029 geplant für Bau und Unterhalt auf dem ganzen Netz der RhB.' + RHB_MS },
  'rhb-dienstwagen': { linien: RHB_ALLE, text: 'Für Bahnbau, Messungen und Material auf dem ganzen Netz.' + RHB_MS },
  'rhb-loeref': { linien: [RHB_VEREINA], orte: [['Klosters Selfranga'], ['Sagliains']], text: 'Für Einsätze im Vereinatunnel, stationiert an beiden Tunnelseiten.' + RHB_MS },
  'rhb-fahrleitung': { linien: RHB_ALLE, text: 'Für Arbeiten an der Fahrleitung auf dem ganzen Netz.' + RHB_MS },
  'rhb-schneeschleuder': { linien: RHB_ALLE, text: 'Im Winter auf dem Stammnetz und auf der Berninalinie.' + RHB_MS },
  'rhb-ge66i': { linien: [RHB_ALBULA, RHB_STAMM], orte: [['Luzern'], RHB_BERGUEN], text: 'Früher vor allem auf der Albulalinie. Erhalten in Landquart und Samedan sowie im Verkehrshaus Luzern und in Bergün.' + RHB_MS },
  'rhb-ge66ii': { linien: [RHB_ALBULA, RHB_STAMM, RHB_PRAETTIGAU, RHB_SURSELVA], orte: [['Luzern']], text: 'Früher vor schweren Zügen auf dem Stammnetz; die 702 steht im Verkehrshaus Luzern.' + RHB_MS },
  'rhb-ge44i': { linien: RHB_AC, text: 'Früher auf dem ganzen Wechselstromnetz; die 605 fährt heute vor historischen Zügen.' + RHB_MS },
  'rhb-ge24': { linien: [RHB_ENGADIN, RHB_STAMM], orte: [['Luzern'], RHB_BERGUEN], text: 'Zuerst auf der Engadinerlinie Bever–Scuol; erhalten in Landquart, im Verkehrshaus Luzern und beim Bahnmuseum Albula.' + RHB_MS },
  'rhb-ge46': { linien: [RHB_ENGADIN, RHB_ALBULA], text: 'Zuerst auf der Engadinerlinie, später auf dem Stammnetz; die 353 fährt vor Museumszügen.' + RHB_MS },
  'rhb-bernina-loks': { linien: [RHB_BERNINA], orte: [['Blonay–Chamby', 2559237, 1144746]], text: 'Auf der Berninalinie; die 81 fährt heute bei der Museumsbahn Blonay–Chamby.' + RHB_MS },
  'rhb-g34': { linien: [RHB_PRAETTIGAU, RHB_STAMM], text: 'Ab 1889 auf der Landquart–Davos-Bahn; heute vor Dampf-Sonderzügen.' + RHB_MS },
  'rhb-mallet': { linien: [RHB_PRAETTIGAU, RHB_ALBULA], text: 'Früher im schweren Bergdienst auf der Landquart–Davos-Bahn und der Albula.' + RHB_MS },
  'rhb-g45': { linien: [RHB_ALBULA], text: 'Früher vor schweren Zügen auf der Albula; heute vor Dampf-Sonderzügen.' + RHB_MS },
  'rhb-bernina-tw': { linien: [RHB_BERNINA], orte: [['Blonay–Chamby', 2559237, 1144746]], text: 'Auf der Berninalinie; die 35 steht bei der Museumsbahn Blonay–Chamby.' + RHB_MS },
  'rhb-abe44ii': { linien: [RHB_BERNINA], text: 'Auf der Berninalinie zwischen St. Moritz und Tirano.' + RHB_MS },
  'rhb-abe44iii': { linien: [RHB_BERNINA], orte: [RHB_BERGUEN], text: 'Bis 2023 auf der Berninalinie; die 53 steht im Bahnmuseum Albula in Bergün.' + RHB_MS },
  'rhb-abe501': { linien: [RHB_STAMM, RHB_ALBULA, RHB_ENGADIN], text: 'Früher auf dem Wechselstromnetz, etwa im Engadin.' + RHB_MS },
  'rhb-be44-511': { linien: [RHB_STAMM, ['Chur', 'Reichenau-Tamins', 'Thusis'], RHB_PRAETTIGAU], text: 'Früher im Regional- und Vorortsverkehr, etwa rund um Chur, nach Thusis und Davos.' + RHB_MS },
  'rhb-misox': { linien: [RHB_MISOX], orte: [RHB_BERGUEN], text: 'Früher auf der Bahn Bellinzona–Mesocco; der 491 steht in Bergün.' + RHB_MS },
  'rhb-arosa': { linien: [RHB_AROSA], text: 'Früher auf der Arosalinie Chur–Arosa, bis 1997 mit Gleichstrom.' + RHB_MS },
  'rhb-dampfschneeschleuder': { linien: [RHB_BERNINA, RHB_ALBULA], orte: [['Realp'], ['Blonay–Chamby', 2559237, 1144746]], text: 'Früher auf der Berninalinie und dem Stammnetz; erhalten bei der RhB, der DFB in Realp und bei Blonay–Chamby.' + RHB_MS },
  'rhb-hist-wagen': { linien: [RHB_ALBULA, RHB_PRAETTIGAU, RHB_BERNINA], orte: [['Blonay–Chamby', 2559237, 1144746]], text: 'In historischen Zügen der RhB; einzelne Wagen bei Blonay–Chamby.' + RHB_MS },
  'rhb-hist-gueterwagen': { linien: [RHB_ALBULA, RHB_PRAETTIGAU], text: 'Früher im Güterverkehr der RhB; heute in historischen Zügen.' + RHB_MS },
  'rhb-ehem-diesel': { orte: [['Landquart'], ['Chur'], ['Realp']], text: 'Früher im Rangierdienst, etwa in Landquart und Chur; die Gm 3/3 stehen heute bei der DFB in Realp.' },
  'rhb-draisinen': { orte: [['Blonay–Chamby', 2559237, 1144746]], text: 'Heute bei der Museumsbahn Blonay–Chamby.' }
});
