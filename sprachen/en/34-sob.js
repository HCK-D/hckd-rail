/* English – SOB (Südostbahn) */
uebDict({
  'Schweizerische Südostbahn': 'Southeastern Railway of Switzerland',
  'Klassiker von SBB, BLS, TPF und SOB, die heute nicht mehr im Alltag fahren. Viele sind bei SBB Historic, der BLS-Stiftung, GFM Historique, in Vereinen oder in Museen erhalten.': 'Classics from SBB, BLS, TPF and SOB that no longer run in everyday service. Many are preserved by SBB Historic, the BLS Foundation, GFM Historique, by associations or in museums.',
  'Fahrzeugfamilie': 'Vehicle family', 'Wagenarten': 'Car types', 'Herkunft': 'Origin', 'Frühere Nummern': 'Former numbers', 'Frühere Bezeichnungen': 'Former designations',
  'Umbau': 'Rebuilt', 'Antrieb': 'Drive', 'Wiederbeschaffungswert': 'Replacement value', 'Einsatz': 'Use', 'Ausmusterung': 'Withdrawn', 'Baujahre': 'Years built',
  'Achsfolge': 'Wheel arrangement', 'SOB': 'SOB', 'SOB Infrastruktur': 'SOB Infrastructure', 'SOB (historisch)': 'SOB (historic)',
  'BT, ab 2001 SOB (historisch)': 'BT, from 2001 SOB (historic)', 'SOB und BT (historisch)': 'SOB and BT (historic)', 'BT (historisch)': 'BT (historic)',
  'BT, später SOB (historisch)': 'BT, later SOB (historic)', 'BT und SOB': 'BT and SOB', 'BT und SOB (historisch)': 'BT and SOB (historic)',
  'Wädenswil–Einsiedeln-Bahn und SOB (historisch)': 'Wädenswil–Einsiedeln Railway and SOB (historic)',
  'kein eigener Antrieb': 'no drive of its own', 'Elektrolokomotive Bo’Bo’': 'electric locomotive Bo’Bo’', 'Diesellokomotive': 'diesel locomotive'
});

uebZug('sob-traverso', {
  typ: 'Eight-car Stadler FLIRT 3 for the Voralpen-Express, Treno Gottardo and Aare Linth',
  text: ['The copper-coloured Traverso is the best-known train of the Südostbahn. The eight-car low-floor train runs on the long SOB lines such as the Voralpen-Express St. Gallen–Lucerne and the Treno Gottardo over the Gotthard summit line.', 'A unit numbered 101/201 is one single eight-car train, not two trains.'],
  kennzahlen: [['30', 'trains in four series'], ['160 km/h', 'top speed'], ['380', 'seats incl. folding seats'], ['2019', 'first in service']],
  daten: { 'Bauart': 'electric low-floor multiple unit, 8 cars', 'Länge': '150.2 m', 'Gewicht': '265 t empty', 'Sitzplätze': '68 in 1st, 291 in 2nd class, 21 folding seats', 'Anzahl': '30 trains' },
  specNote: 'Four series: 6 trains (2019), 11 (2020), 7 (2021) and 6 (from 2024). With the last train the fleet was complete in May 2025.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler Bussnang built 30 eight-car Traverso for SOB. They came in four series: 6 trains in 2019 (101–106), 11 in 2020 (107–117), 7 in 2021 (118–124) and 6 from 2024 (125–130).', 'The Traverso belongs to the FLIRT 3 platform, like the four-car FLIRT 3 of SOB. In May 2025 the whole new fleet of 43 trains had been delivered.'] },
      { titel: 'Service and technology', p: ['From 2019 the first Traverso replaced the locomotive-hauled Revvivo trains of the Voralpen-Express St. Gallen–Rapperswil–Arth-Goldau–Lucerne. Since December 2020 they have run as Treno Gottardo from Basel and Zurich over the Gotthard summit line to Locarno, since December 2021 as Aare Linth Bern–Zurich–Chur and since December 2024 as Alpenrhein-Express St. Gallen–Chur.', 'A train is 150.2 m long, weighs 265 t, has 5200 kW and runs at up to 160 km/h. The fleet is mainly maintained in Herisau.'] },
      { titel: 'Facilities and accessibility', liste: ['Low-floor entrances with sliding steps', 'Wheelchair-accessible toilet', 'Air conditioning', 'Audio and visual passenger information', 'Power sockets', 'Bike spaces', '380 places: 68 in 1st, 291 in 2nd class and 21 folding seats'],
        p: ['Thanks to the low floor and sliding steps, you can board without a step at most platforms.'] }
    ],
  bilder: ['Traverso as IR 46 Locarno–Zurich near Wassen (2025)', 'Traverso 105 in Kreuzlingen (2019)', 'Traverso 121 in Göschenen (2023)']
});
uebZug('sob-flirt3', {
  typ: 'Four-car Stadler FLIRT 3 in silver',
  text: ['The silver FLIRT 3 is the little brother of the Traverso. It runs on its own on S-Bahn and regional lines or strengthens a Traverso.', 'All 13 trains are named after mountains, from «Bachtel» to «Vilan».'],
  kennzahlen: [['13', 'trains (001–013)'], ['160 km/h', 'top speed'], ['205', 'seats incl. folding seats'], ['2019', 'first in service']],
  daten: { 'Bauart': 'electric low-floor multiple unit, 4 cars', 'Länge': '77.10 m', 'Gewicht': '135 t empty', 'Sitzplätze': '22 in 1st, 175 in 2nd class, 8 folding seats', 'Anzahl': '13 trains' },
  specNote: 'Entered service: 5 trains in 2019, 5 in 2021 and 3 in 2025.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler delivered 13 four-car FLIRT 3 numbered 001–013 to SOB: 5 trains in 2019, 5 in 2021 and 3 in 2025. With the 13th train the whole new fleet had been delivered in May 2025.'] },
      { titel: 'Service and technology', p: ['The FLIRT 3 run in SOB S-Bahn and regional services and strengthen the Traverso on suitable diagrams. Which line a train runs changes with the timetable and the diagram.', 'A train is 77.10 m long, weighs 135 t, has 2600 kW and runs at up to 160 km/h. The trains are maintained in Herisau and Samstagern.'] },
      { titel: 'Facilities and accessibility', liste: ['Low-floor entrances with sliding steps', 'Wheelchair-accessible toilet', 'Air conditioning', 'Audio and visual passenger information', 'Power sockets', 'Bike spaces', '205 places: 22 in 1st, 175 in 2nd class and 8 folding seats'] },
      { titel: 'The names', tabelle: { kopf: ['Number', 'Name', 'Number', 'Name'], zeilen: [
        ['001', 'Bachtel', '008', 'Vrenelisgärtli'], ['002', 'Calanda', '009', 'Sissacherflue'], ['003', 'Bristen', '010', 'Tödi'], ['004', 'Gurten', '011', 'Hirzli'],
        ['005', 'Pilatus', '012', 'Kuegrat'], ['006', 'Gitschen', '013', 'Vilan'], ['007', 'Pizzo di Claro', '', '']] } }
    ],
  bilder: ['FLIRT 3 001 «Bachtel» in Biberbrugg (2020)', 'FLIRT 3 002 «Calanda» (2021)']
});
uebZug('sob-flirt-1', {
  typ: 'Four-car Stadler FLIRT of the first generation',
  text: ['With the eleven FLIRT of 2007, the age of modern low-floor trains began at SOB. They replaced older push-pull trains.', 'Each train bears the name of a mountain in the region, for example «Mythen» or «Churfirsten».'],
  kennzahlen: [['11', 'trains (041–051)'], ['160 km/h', 'top speed'], ['214', 'seats incl. folding seats'], ['2007', 'first in service']],
  daten: { 'Bauart': 'electric low-floor multiple unit, 4 cars', 'Länge': '74.08 m', 'Gewicht': '120 t empty', 'Sitzplätze': '24 in 1st, 152 in 2nd class, 38 folding seats', 'Anzahl': '11 trains' },
  specNote: 'SOB gives the technical data for series 1 and 2 together.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler delivered the eleven trains of the first series in 2007. Together with the twelve trains of series 2 from 2013, SOB has 23 first-generation FLIRT. Both groups are called RABe 526, like the newer FLIRT 3, but differ in year of construction and design.', 'In the 2020s the trains are being overhauled; among other things SOB is renewing the passenger information.'] },
      { titel: 'Service and technology', p: ['The FLIRT run in SOB regional and S-Bahn services in eastern and central Switzerland. The exact line changes with the timetable, engineering work and diagrams.', 'A train is 74.08 m long, weighs 120 t, has 2600 kW and runs at up to 160 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Low-floor entrances', 'Wheelchair-accessible toilet', 'Air conditioning', 'Passenger information', 'Bike spaces', 'Power sockets in 1st class only', '214 places: 24 in 1st, 152 in 2nd class and 38 folding seats'] },
      { titel: 'The names', tabelle: { kopf: ['Number', 'Name', 'Number', 'Name'], zeilen: [
        ['041', 'Mythen', '047', 'Rossberg'], ['042', 'Chrüzberg', '048', 'Kronberg'], ['043', 'Churfirsten', '049', 'Hochstuckli'], ['044', 'Morgartenberg', '050', 'Alvier'],
        ['045', 'Federispitz', '051', 'Zimmerberg'], ['046', 'Ringelspitz', '', '']] } }
    ],
  bilder: ['RABe 526 050 «Alvier» in Buchs SG (2023)', 'RABe 526 049 «Hochstuckli» as S4 (2021)', 'RABe 526 041 «Mythen» in Wattwil (2010)']
});
uebZug('sob-flirt-2', {
  typ: 'Four-car Stadler FLIRT, second series of 2013',
  text: ['With twelve more FLIRT, the modern SOB regional fleet grew to 23 trains in 2013. Technically they match the first series.', 'They too are named after mountains, from «Schnabelsberg» to «Alpstein».'],
  kennzahlen: [['12', 'trains (052–063)'], ['160 km/h', 'top speed'], ['214', 'seats incl. folding seats'], ['2013', 'first in service']],
  daten: { 'Bauart': 'electric low-floor multiple unit, 4 cars', 'Länge': '74.08 m', 'Gewicht': '120 t empty', 'Sitzplätze': '24 in 1st, 152 in 2nd class, 38 folding seats', 'Anzahl': '12 trains' },
  specNote: 'SOB gives the technical data for series 1 and 2 together.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler delivered the twelve trains of the second series in 2013. They are based on the same four-car concept as series 1 of 2007; SOB describes both series together.'] },
      { titel: 'Service and technology', p: ['The FLIRT run in SOB regional and S-Bahn services in eastern and central Switzerland. The exact line changes with the timetable, engineering work and diagrams.', 'A train is 74.08 m long, weighs 120 t, has 2600 kW and runs at up to 160 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Low-floor entrances', 'Wheelchair-accessible toilet', 'Air conditioning', 'Passenger information', 'Bike spaces', 'Power sockets in 1st class only', '214 places: 24 in 1st, 152 in 2nd class and 38 folding seats'] },
      { titel: 'The names', tabelle: { kopf: ['Number', 'Name', 'Number', 'Name'], zeilen: [
        ['052', 'Schnabelsberg', '058', 'Speer'], ['053', 'Etzel', '059', 'St. Anton'], ['054', 'Hoher Kasten', '060', 'Hundwiler Höhi'], ['055', 'Mürtschenstock', '061', 'Rigi Kulm'],
        ['056', 'Pizol', '062', 'Chapfenberg'], ['057', 'Gonzen', '063', 'Alpstein']] } }
    ],
  bilder: ['RABe 526 056 «Pizol» in Uznach (2023)', 'RABe 526 063 «Alpstein» in Unterterzen (2014)']
});
uebZug('sob-tm-234', {
  typ: 'Work and intervention vehicle of SOB Infrastructure',
  text: ['The four Robel are self-propelled work vehicles. They bring material to work sites, help with work on track, overhead line and signals, and clear snow in winter.', 'All four are named after SOB bridges and viaducts, for example «Sitterviadukt».'],
  kennzahlen: [['4', 'vehicles (501–504)'], ['100 km/h', 'top speed'], ['720 kW', 'power'], ['2015', 'first in service']],
  daten: { 'Bauart': 'self-propelled work and intervention vehicle', 'Länge': '15.140 m (series 1), 15.138 m (series 2)', 'Gewicht': '38.1 t (series 1), 39.1 t (series 2)' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SOB has four vehicles by Robel: series 1 with numbers 501–503 came in 2015, series 2 with 504 in 2019.'],
        tabelle: { kopf: ['Number', 'Name', 'Series', 'Year'], zeilen: [['501', 'Sitterviadukt', '1', '2015'], ['502', 'Kapftobelbrücke II', '1', '2015'], ['503', 'Thurviadukt I', '1', '2015'], ['504', 'Kirchtobelviadukt II', '2', '2019']] } },
      { titel: 'Service and technology', p: ['The Robel mainly work on the SOB network. SOB also uses them for other railways, for example for SBB signalling work at Zurich Airport and for overhead-line work on the Uetliberg. In winter they clear snow with plough and brush.', 'A vehicle has up to 720 kW and runs at up to 100 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Load area for material', 'Equipment depending on the job, for example a crane', 'Snow plough and brush in winter'],
        p: ['The Robel are service vehicles. They do not carry passengers.'] }
    ],
  bilder: ['Robel 501 «Sitterviadukt» in Schachen (2016)']
});
uebZug('sob-dienstwagen', {
  name: 'Service wagons',
  typ: 'Wagons for maintaining the SOB network',
  text: ['SOB owns 26 service wagons for maintaining its network. They carry rails, components and material to work sites.', 'They are not freight wagons for customers: SOB does not run its own freight business.'],
  kennzahlen: [['26', 'service wagons (2024)'], ['CHF 3.2 m', 'replacement value'], ['maintenance', 'use'], ['SOB', 'infrastructure']],
  daten: { 'Bauart': 'service wagons of various types', 'Anzahl': '26 (network condition report 2024)', 'Wiederbeschaffungswert': 'CHF 3.2 million (2024)', 'Einsatz': 'maintenance and work sites' },
  specNote: 'SOB does not publish a list of the individual wagons with type and number. That is why no wagon numbers are given here.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SOB’s 2024 network condition report counts 26 service wagons with a replacement value of 3.2 million francs. In addition there are the four Robel as powered vehicles.', 'The report does not list which wagon types and numbers they are.'] },
      { titel: 'Service and technology', p: ['The wagons are used to maintain the railway installations and supply work sites, for example to carry rails, components and material. They usually run together with the Robel.'] },
      { titel: 'Facilities and accessibility', p: ['Depending on the wagon there are load areas or other superstructures for material. They are pure work wagons without a passenger compartment.'] }
    ]
});
uebZug('sob-rbde-561', {
  typ: 'Two-car new push-pull train (NPZ) of the old SOB (historic)',
  text: ['The four NPZ Süd ran for SOB for 30 years, last as the «March-Shuttle» S27 between Siebnen-Wangen and Ziegelbrücke. SOB withdrew them from service in October 2025.', 'Each train covered about three million kilometres.'],
  kennzahlen: [['4', 'trains (081–084)'], ['140 km/h', 'top speed'], ['120', 'seats'], ['1995–2025', 'in service']],
  daten: { 'Bauart': 'push-pull train of RBDe power car and ABt driving trailer', 'Fahrzeugnummern': 'RBDe 561 081–084 with ABt 181–184; reserve RBDe 561 174', 'Länge': 'about 50 m', 'Gewicht': 'about 116 t (power car 70 t)', 'Sitzplätze': '24 in 1st, 96 in 2nd class', 'Anzahl': '4 trains', 'Ausmusterung': 'October 2025' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The old Südostbahn ordered four NPZ of SBB design in 1993; they entered service in 1995. A train consists of an RBDe power car and an ABt driving trailer. Later the power cars were renumbered from RBDe 566 to RBDe 561.', 'In 2014 SOB bought RBDe 561 174 from SBB as a reserve. It went to the Verein MThB-NPZ in autumn 2024. RBDe 561 082 with ABt 182 was taken over by a preservation society at the end of 2025.'] },
      { titel: 'Service and technology', p: ['At first the NPZ Süd ran on regional lines such as Wädenswil–Einsiedeln, Rapperswil–Samstagern and Biberbrugg–Arth-Goldau, later also in the Voralpen-Express. Then they took over the S27 Siebnen-Wangen–Ziegelbrücke until SOB withdrew them in October 2025.', 'A train is about 50 m long, weighs about 116 t, has 1650 kW and runs at up to 140 km/h. The power car alone weighs 70 t.'] },
      { titel: 'Facilities and accessibility', liste: ['120 seats: 24 in 1st and 96 in 2nd class', 'Pneumatic doors', 'No air conditioning', 'No low-floor entrances'],
        p: ['Because the trains have steps and the Disability Discrimination Act requires step-free boarding, a conversion would have been too expensive. That was a main reason for the end.'] }
    ],
  bilder: ['RBDe 561 083 with the Voralpen-Express in Rapperswil (2013)', 'NPZ Süd in Ziegelbrücke (2022)', 'Interior of RBDe 561 082 (2013)']
});
uebZug('sob-abt-npz-sued', {
  typ: 'Driving trailer of the NPZ Süd (historic)',
  text: ['The driving trailers ABt 181–184 formed the NPZ Süd together with the RBDe 561 power cars. From the cab in the driving trailer the train is driven without running the power car round.', 'They ran from 1995 until October 2025.'],
  kennzahlen: [['4', 'driving trailers (181–184)'], ['140 km/h', 'in the NPZ train'], ['1995', 'built'], ['2025', 'end of service']],
  daten: { 'Bauart': 'driving trailer with cab and passenger compartment', 'Höchstgeschwindigkeit': '140 km/h in the NPZ train', 'Ausmusterung': 'October 2025' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SOB received the four driving trailers in 1995 together with the four power cars of the NPZ Süd. Earlier they carried the numbers 901–904.', 'ABt 182 was taken over at the end of 2025 by a preservation society together with RBDe 561 082.'] },
      { titel: 'Service and technology', p: ['The driving trailer forms one end of the push-pull train. Via a control line the driver operates the power car at the other end of the train from here. The trailer has no drive of its own.', 'The trailers ran on the same lines as the NPZ Süd, last on the S27 Siebnen-Wangen–Ziegelbrücke.'] },
      { titel: 'Facilities and accessibility', liste: ['Seats in 1st and 2nd class', 'Cab at one end of the car', 'Pneumatic doors', 'No low-floor entrances, no air conditioning'] }
    ],
  bilder: ['NPZ Süd of power car and ABt driving trailer in Ziegelbrücke (2022)']
});
uebZug('sob-rbde-566', {
  typ: 'Private-railway NPZ of the Bodensee-Toggenburg Railway (historic)',
  text: ['The six NPZ Ost came from the Bodensee-Toggenburg Railway (BT). With the merger of BT and the old SOB in 2001 they became part of the new Südostbahn.', 'They ran in regional service in eastern Switzerland until 2019/2020.'],
  kennzahlen: [['6', 'power cars (071–076)'], ['1981–1983', 'built'], ['2001', 'to the new SOB'], ['2019/20', 'end of service']],
  daten: { 'Bauart': 'push-pull train of power car, intermediate car and driving trailer', 'Anzahl': '6 power cars' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['In the early 1980s BT bought six private-railway NPZ with the power cars RBDe 4/4 71–76, plus intermediate cars B and driving trailers ABt 171–176. They were built by FFA, SIG and BBC.', 'At first the trains wore the green and cream colours of BT, later red and grey. With the 2001 merger they came to SOB as RBDe 566 071–076.'] },
      { titel: 'Service and technology', p: ['The trains ran regional services on the former BT network between Romanshorn, St. Gallen, Herisau, Wattwil and Nesslau. Later, cars of these trains also ran in the Voralpen-Express.', 'With the new FLIRT they became surplus; scheduled service ended in 2019/2020. Some vehicles went to preservation projects or served as spare-part donors.'] },
      { titel: 'Facilities and accessibility', liste: ['Train length adjustable with intermediate cars', 'Seats in 1st and 2nd class', 'Luggage compartment in the power car (letter D)', 'High-floor entrances with steps'] }
    ],
  bilder: ['RBDe 566 072 with BT logo in Herisau (2003)', 'RBDe 566 072, B 374 and ABt 172 in Herisau (2003)']
});
uebZug('sob-abt-npz-ost', {
  typ: 'Driving trailer of the BT push-pull trains (historic)',
  text: ['The driving trailers ABt 171–176 belonged to the six NPZ Ost of the Bodensee-Toggenburg Railway. They formed one end of the push-pull train.', 'Their service ended with the NPZ Ost in 2019/2020.'],
  kennzahlen: [['6', 'driving trailers (171–176)'], ['1982', 'built'], ['none', 'drive of its own'], ['2019/20', 'end of service']],
  daten: { 'Bauart': 'driving trailer with cab and passenger compartment' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['BT bought the six driving trailers in 1982 together with its NPZ. In 2001 they came to SOB with the merger. Some cars later went to others as spare-part donors or for preservation.'] },
      { titel: 'Service and technology', p: ['Via the control line the driver operates the power car at the other end of the train from the driving trailer. This way the train can change direction without running round.', 'The cars ran in regional service on the former BT network in eastern Switzerland.'] },
      { titel: 'Facilities and accessibility', liste: ['Seats in 1st and 2nd class', 'Cab at one end of the car', 'High-floor entrances with steps'] }
    ],
  bilder: ['ABt 172 with SOB logo and B 374 in Herisau (2003)']
});
uebZug('sob-revvivo', {
  name: 'Revvivo', beiname: 'coaches',
  typ: 'Refurbished coaches of the Voralpen-Express (historic)',
  text: ['Revvivo was the name of the refurbished coaches of the old Voralpen-Express. A locomotive hauled them between St. Gallen and Lucerne over the SOB line.', 'From 2019 the Traverso replaced these locomotive-hauled trains.'],
  kennzahlen: [['3', 'car types: A, B, BR'], ['1997–2000', 'rebuilt'], ['none', 'drive of its own'], ['2019/20', 'replaced']],
  daten: { 'Bauart': 'refurbished coaches', 'Wagenarten': 'A (1st class), B (2nd class), BR (bistro)', 'Fahrzeugnummern': 'among others A 520–522, B 800–805 and 808–809, BR 771' },
  specNote: 'The numbers A 711–718, B 721–734 and BR 741–747 given in the dossier could not be confirmed. The numbers here follow Wikipedia.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Revvivo was not a new car but a rebuilding programme: from 1997 to 2000 SOB refurbished older cars of various origins. They included 1st class cars (A), 2nd class cars (B) and bistro cars (BR).', 'After the end in the Voralpen-Express, cars went among others to the Train des mouettes in France and to MÁV Nosztalgia in Hungary.'] },
      { titel: 'Service and technology', p: ['The cars ran in the Voralpen-Express St. Gallen–Rapperswil–Arth-Goldau–Lucerne. They were hauled by Re 446 and Re 456, later also between two NPZ power cars.', 'With the Traverso these trains ended in 2019 and 2020.'] },
      { titel: 'Facilities and accessibility', liste: ['Refurbished interiors', 'Partly air-conditioned', 'Bistro car BR', 'High-floor entrances with steps'] }
    ],
  bilder: ['Voralpen-Express with Revvivo coaches between Biberbrugg and Altmatt (2014)', 'Revvivo coaches between two NPZ power cars in Biberbrugg (2013)']
});
uebZug('sob-ew-iv', {
  typ: 'Air-conditioned standard coaches IV of the Voralpen-Express (historic)',
  text: ['In the early 1990s the Voralpen-Express got a new look, including SOB’s own air-conditioned standard coaches IV (EW IV).', 'In 2000 SOB sold the four coaches to SBB.'],
  kennzahlen: [['4', 'coaches'], ['1991', 'delivered'], ['none', 'drive of its own'], ['2000', 'to SBB']],
  daten: { 'Bauart': 'standard coach IV, seating coach', 'Anzahl': '4 coaches', 'Verbleib': 'sold to SBB in 2000' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SOB owned one 1st class coach (A 120) and three 2nd class coaches (B 250–252). They were delivered in 1991 and sold to SBB in 2000.', 'Not every EW IV in the Voralpen-Express belonged to SOB; only these four coaches count as SOB stock.'] },
      { titel: 'Service and technology', p: ['The coaches ran in the Voralpen-Express between Lucerne and Lake Constance, hauled by a locomotive. Later came the Revvivo coaches and finally the Traverso.'] },
      { titel: 'Facilities and accessibility', liste: ['Air conditioning', 'Coaches of 1st and 2nd class', 'High-floor entrances with steps'] }
    ]
});
uebZug('sob-ew-i-ii', {
  beiname: 'SOB and BT',
  typ: 'Older standard coaches in SOB and BT service (historic)',
  text: ['Before modern multiple units came, SOB and BT ran for a long time with standard coaches I and II. These coaches were common all over Switzerland.', 'Today SOB no longer runs regular services with these coaches.'],
  kennzahlen: [['EW I + II', 'coach families'], ['none', 'drive of its own'], ['1435 mm', 'standard gauge'], ['SOB + BT', 'railways']],
  daten: { 'Bauart': 'coaches of the EW I and EW II families', 'Einsatz': 'locomotive-hauled passenger trains' },
  specNote: 'The individual coaches and numbers are not fully documented. EW I and EW II are two different designs; the figures differ from coach to coach.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['EW I and EW II are two families of Swiss standard coaches. SOB and BT owned such coaches, some rebuilt or with special roles, for example as driving trailers.', 'A complete list of the SOB and BT coaches has not been published.'] },
      { titel: 'Service and technology', p: ['The coaches ran in regional and through services and in the early Voralpen-Express, hauled by locomotives or power cars. Often different coach types ran in the same train.'] },
      { titel: 'Facilities and accessibility', liste: ['Coaches of 1st and 2nd class, depending on the type', 'High-floor entrances with steps'], p: ['Facilities and dimensions differ depending on type and rebuild.'] }
    ],
  bilder: ['SOB coach B 50 85 20-35 753-6 in Rapperswil (2014)']
});
uebZug('sob-bde-576', {
  typ: 'High-performance motor coaches of SOB and BT (historic)',
  text: ['From 1959 the powerful BDe 4/4 hauled the push-pull and through trains of SOB and BT over the steep pre-alpine lines. Besides the passenger compartment they had a luggage compartment.', 'From 2007 the FLIRT gradually replaced them.'],
  kennzahlen: [['1959', 'first motor coach'], ['SOB 80–87', 'old SOB numbers'], ['BT 50–53', 'BT numbers'], ['from 2007', 'replaced']],
  daten: { 'Bauart': 'electric motor coach with 2nd class and luggage compartment', 'Fahrzeugnummern': 'SOB 80–87, BT 50–53; later BDe 576 048–059', 'Baujahre': '1959–1979, several series' },
  specNote: 'The series differ in front end and technology. There is therefore no common power figure.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The first motor coach was SOB ABe 4/4 71 of 1959; in 1979 it was rebuilt as BDe 4/4 80. SOB added BDe 4/4 81–87 and BT added BDe 4/4 50–53. Later they were numbered BDe 576 048–059.', 'Some motor coaches were preserved or went to other owners. SOB kept BDe 576 058 as a technical reserve in Samstagern.'] },
      { titel: 'Service and technology', p: ['The BDe 4/4 were built for heavy trains on the steep lines of the «Direkte Linie». They ran in regional service, in the predecessor of the Voralpen-Express and as extra power on steep sections.', 'From 2007 the FLIRT and later the Traverso replaced them in everyday service.'] },
      { titel: 'Facilities and accessibility', liste: ['2nd class passenger compartment', 'Luggage compartment', 'High-floor entrances with steps'] }
    ],
  bilder: ['BDe 576 049 in Biberbrugg (2007)', 'BT BDe 4/4 53 near Sattel (1983)', 'BT BDe 576 052 «Krummenau» in Nesslau (1998)', 'ABe 4/4 71 as delivered in 1959, later BDe 4/4 80']
});
uebZug('sob-abe-4-4', {
  typ: 'Electric motor coaches of the old SOB from 1939/40 (historic)',
  text: ['With electrification the old SOB bought eight electric motor coaches in 1939 and 1940: BCFZe 4/4 1–4 and CFZe 4/4 11–14. After rebuilds many of them were called ABe 4/4.', 'Motor coach 5 is still preserved today.'],
  kennzahlen: [['8', 'motor coaches'], ['1939/40', 'delivered'], ['80 km/h', 'top speed'], ['735 kW', 'hourly rating']],
  daten: { 'Bauart': 'electric motor coach Bo’Bo’', 'Frühere Bezeichnung': 'BCFZe 4/4 1–4 and CFZe 4/4 11–14', 'Hersteller': 'SLM with SIG or SWS; MFO, BBC, SAAS', 'Länge': '19.6 m', 'Gewicht': '44 t, 47 t after modernisation', 'Leistung': '735 kW (hourly rating)', 'Sitzplätze': '9 (later 6) in 1st, 44 in 2nd class' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['For electrification, SLM, SIG or SWS and MFO, BBC and SAAS delivered eight motor coaches in two versions in 1939 and 1940: BCFZe 4/4 1–4 and CFZe 4/4 11–14. The letters come from the old class, luggage and mail system.', 'On 26 July 1946 numbers 3 and 12 collided near Bennau. Number 12 was then rebuilt as BCe 4/4 5; as motor coach 5 it has been preserved by the Verein Historischer Triebwagen 5 since 2008. Numbers 11 and 13 went to the Sensetalbahn. Numbers 1, 2, 4 and 6 (ex 14) were modernised from 1978 to 1982 and then ran as ABe 4/4 14, 13, 11 and 12. ABe 4/4 11 has served as a tunnel cinema since 2001.'] },
      { titel: 'Service and technology', p: ['The motor coaches ran passenger and mixed trains on the electrified lines of the old SOB.', 'They are 19.6 m long, have 735 kW and run at up to 80 km/h. Originally they weighed 44 t, after modernisation 47 t.'] },
      { titel: 'Facilities and accessibility', liste: ['Originally 9 seats in 1st and 44 in 2nd class, after modernisation 6 in 1st class', 'Originally with luggage and mail compartment', 'High-floor entrances with steps'] }
    ],
  bilder: ['ABe 4/4 5 with a passenger train in Biberbrugg (1988)', 'ABe 4/4 12 in Biberbrugg (1992)', 'Former ABe 4/4 11 as a tunnel cinema in Gänsbrunnen (2017)']
});
uebZug('sob-de-4-4', {
  beiname: '21 and 22',
  typ: 'Luggage motor coaches with an SBB past (historic)',
  text: ['The old SOB used two electric luggage motor coaches, De 4/4 21 and 22. They came from SBB, where they were RFe 4/4.', 'Number 21 went to Classic Rail in 1994, number 22 was scrapped in 1997.'],
  kennzahlen: [['2', 'motor coaches'], ['1940', 'originally built'], ['90 km/h', 'top speed'], ['ex SBB', 'RFe 4/4']],
  daten: { 'Bauart': 'electric luggage motor coach', 'Herkunft': 'SBB RFe 4/4 603 and 602', 'Fahrzeugnummern': 'De 4/4 21 and 22', 'In Betrieb seit': '1940 (at SBB)' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The motor coaches were built in 1940 as SBB RFe 4/4. SOB took over two of them: former 603 as De 4/4 21 and 602 as De 4/4 22.', 'Number 21 went to Classic Rail in 1994, number 22 was scrapped in 1997.'] },
      { titel: 'Service and technology', p: ['The De 4/4 carried luggage and hauled further cars in SOB service. They had four driven axles and ran at up to 90 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Large luggage compartment', 'No passenger compartment'], p: ['As luggage motor coaches they did not carry passengers.'] }
    ],
  bilder: ['De 4/4 22 in Einsiedeln (1985)', 'De 4/4 22 in red livery in Samstagern (1983)']
});
uebZug('bt-be-4-4', {
  typ: 'Electric locomotive of the Bodensee-Toggenburg Railway (historic)',
  text: ['From 1931 the six Be 4/4 of the Bodensee-Toggenburg Railway hauled passenger and freight trains, also on the «Direkte Linie» via Wattwil and Rapperswil.', 'Be 4/4 11 is preserved as a historic locomotive.'],
  kennzahlen: [['6', 'locomotives (11–16)'], ['80 km/h', 'top speed'], ['66 t', 'weight'], ['1931', 'first in service']],
  daten: { 'Hersteller': 'SLM (mechanical part), SAAS (electrical part)', 'Länge': '12.00 m', 'Leistung': 'about 1200 kW (hourly rating)' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['BT bought six locomotives in 1931 and 1932. SLM built the mechanical part, SAAS the electrical equipment.', 'Some locomotives still saw the merger into the new SOB in 2001. Former Be 416 011 was sold in 2015.'] },
      { titel: 'Service and technology', p: ['The Be 4/4 long hauled passenger trains on the «Direkte Linie» as well as freight trains. With the new motor coaches and the Re 456 they lost their main duties and remained for reserve and special trips.', 'The locomotive is 12.00 m long, weighs 66 t and runs at up to 80 km/h. Designed for gradients, it was later too slow for fast trains.'] },
      { titel: 'Facilities and accessibility', liste: ['Four axles with individual axle drive', 'Two cabs', 'No passenger compartment'] }
    ],
  bilder: ['Be 4/4 11 with the exhibition train «75 Years of BT» in St. Gallen St. Fiden (1985)', 'Historic Be 4/4 11 and Te 216 035 in Herisau (2012)']
});
uebZug('bt-be-3-4', {
  typ: 'Historic motor coach BT 43 of the Bodensee-Toggenburg Railway',
  text: ['«Tino» is motor coach 43 of the Bodensee-Toggenburg Railway. It was rebuilt several times and therefore had several designations.', 'In 2001 SOB passed it on to Eurovapor.'],
  kennzahlen: [['1', 'motor coach (BT 43)'], ['1938', 'built'], ['1982', 'rebuilt'], ['2001', 'to Eurovapor']],
  daten: { 'Bauart': 'electric motor coach', 'Verbleib': 'to Eurovapor in 2001' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The motor coach was built in 1938 as BCFe 2/4. Rebuilds changed the number of driven axles; it became first BCFe 3/4 and later Be 3/4. In 1982 it was rebuilt.', 'In 2001 SOB passed «Tino» on to Eurovapor.'] },
      { titel: 'Service and technology', p: ['The motor coach ran regional trains on the BT network and later historic trips, for example as the «Amor-Express» near Wattwil. It is one of the few four-axle standard-gauge motor coaches with only three driven axles.'] },
      { titel: 'Facilities and accessibility', liste: ['Passenger compartment', 'High-floor entrances with steps'], p: ['Further technical figures are not reliably documented without a data sheet of the rebuild.'] }
    ],
  bilder: ['BT 43 as «Amor-Express» near Wattwil (2010)', 'BT 43 in St. Gallen (2013)']
});
uebZug('sob-re-446', {
  typ: 'Electric locomotive of the Voralpen-Express (historic)',
  text: ['The four Re 446 were originally SBB prototypes, Re 4/4 IV 10101–10104. At SOB they became the well-known locomotives of the Voralpen-Express.', 'In 2019 SOB sold all four to Eisenbahndienstleister GmbH (EDG).'],
  kennzahlen: [['4', 'locomotives'], ['160 km/h', 'top speed'], ['4960 kW', 'power'], ['1982', 'built']],
  daten: { 'Fahrzeugnummern': '445–448, from 2001 Re 446 015–018', 'Länge': '15.8 m', 'Leistung': 'about 4960 kW', 'In Betrieb seit': '1982 (at SBB)', 'Verbleib': 'sold to EDG in 2019' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['In 1982 SLM and BBC built four Re 4/4 IV prototypes for SBB. From 1994 to 1996 they came to the old SOB, in exchange for its four Re 4/4 III.', 'At SOB they first carried numbers 445–448, after the 2001 merger Re 446 015–018. With the Traverso they became surplus and went to EDG in 2019.'] },
      { titel: 'Service and technology', p: ['The Re 446 hauled the Voralpen-Express between Lucerne and St. Gallen, with various coaches and driving trailers.', 'The locomotive is 15.8 m long, weighs 80 t, has about 4960 kW and runs at up to 160 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Two cabs', 'No passenger compartment'], p: ['As a locomotive the Re 446 had no passenger compartment; accessibility depended on the coaches it hauled.'] }
    ],
  bilder: ['Re 446 017 and 015 with the Voralpen-Express near Küssnacht (2015)', 'Re 446 017 with the Voralpen-Express in St. Gallen (2017)', 'Re 446 with the Voralpen-Express at the Ricken tunnel (2016)']
});
uebZug('sob-re-456', {
  typ: 'Electric locomotive of BT and SOB (historic)',
  text: ['The six Re 456 came to the Bodensee-Toggenburg Railway in 1987 as modern locomotives. Later at SOB they shaped the image of the Voralpen-Express.', 'In 2021 SOB sold its last six Re 456.'],
  kennzahlen: [['6', 'own locomotives'], ['130 km/h', 'top speed'], ['3200 kW', 'continuous power'], ['1987', 'first in service']],
  daten: { 'Bauart': 'electric locomotive Bo’Bo’ with converter technology', 'Länge': '16.6 m', 'Gewicht': 'about 68 t', 'Leistung': '3200 kW (continuous)', 'Verbleib': 'sold in 2021' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SLM and BBC built the six locomotives in 1987 for BT as Re 4/4 91–96. In 2001 all six came to the new SOB as Re 456 091–096. From 2002 to 2011 SOB also hired Re 456 142 and 143; these did not belong to it.', 'In 2021 SOB sold its six own locomotives: 091 and 092 to SZU, 094 and 095 to preservers of historic vehicles, 093 and 096 to an investor.'],
        tabelle: { kopf: ['Number', 'Name', 'Fate 2021'], zeilen: [['091', 'Voralpen-Express', 'SZU'], ['092', 'Siemens', 'SZU'], ['093', 'Sersa', 'investor'], ['094', 'Vögele Shoes', 'historic'], ['095', '100 Jahre Romanshorn-Uznach', 'historic'], ['096', 'Voralpen-Express', 'investor']] } },
      { titel: 'Service and technology', p: ['The Re 456 hauled passenger trains and the Voralpen-Express, first with various coaches, later with the Revvivo coaches. High tractive effort and modern converter technology helped on the steep BT and SOB lines.', 'The locomotive is 16.6 m long, weighs about 68 t, has 3200 kW continuous power and runs at up to 130 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Two cabs', 'No passenger compartment'], p: ['As a locomotive the Re 456 had no passenger compartment; accessibility depended on the coaches it hauled.'] }
    ],
  bilder: ['Two Re 456 with the Voralpen-Express on the Weissenbach viaduct near Degersheim (2014)', 'Re 456 096 with the Voralpen-Express in Herisau (2019)', 'Re 456 in the «100 Years of the Rickenbahn» livery between Immensee and Arth-Goldau (2010)', 'Re 456 with the Voralpen-Express between Blumenau and Schmerikon (2007)']
});
uebZug('sob-re-4-4-iii', {
  typ: 'Electric locomotive for the steep ramps of the old SOB (historic)',
  text: ['The old SOB needed a lot of tractive effort for its steep lines. In 1966 Re 4/4 III 41 was built for it; later three more came from SBB.', 'From 1994 to 1996 SOB exchanged the four locomotives for the four SBB Re 4/4 IV.'],
  kennzahlen: [['4', 'locomotives (41–44)'], ['125 km/h', 'top speed'], ['about 80 t', 'weight'], ['1994–96', 'to SBB']],
  daten: { 'Fahrzeugnummern': '41–44 (42–44 ex SBB 11351–11353)', 'Gewicht': 'about 80 t', 'In Betrieb seit': '1966 (no. 41)', 'Verbleib': 'exchanged to SBB 1994–1996' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Re 4/4 III 41 was built specially for SOB in 1966 and differs slightly from the SBB series. Numbers 42–44 were built in 1970 as SBB 11351–11353 and came second-hand to SOB from 1983 to 1985.', 'From 1994 to 1996 SOB exchanged the four locomotives for the four SBB Re 4/4 IV prototypes, the later Re 446. Back at SBB the locomotives belonged to the Re 430 class.'] },
      { titel: 'Service and technology', p: ['The locomotives hauled passenger and freight trains on the steep sections of the old SOB. Compared with the Re 4/4 II, the Re 4/4 III is geared for tractive effort and therefore slower: it runs at up to 125 km/h and weighs about 80 t.'] },
      { titel: 'Facilities and accessibility', liste: ['Two cabs', 'No passenger compartment'], p: ['As a locomotive the Re 4/4 III had no passenger compartment; accessibility depended on the coaches it hauled.'] }
    ]
});
uebZug('sob-ae-476', {
  typ: 'Electric locomotive of German origin (historic)',
  text: ['In the 1990s the old SOB bought five second-hand electric locomotives of the German class 142, formerly E 42 of the Reichsbahn. At SOB they were called Ae 476.', 'All but one were passed on as early as 1996.'],
  kennzahlen: [['5', 'locomotives (465–469)'], ['1965–1976', 'built'], ['1996', 'four sold'], ['2008', 'last one sold']],
  daten: { 'Fahrzeugnummern': '465–469; 468 later 476 012', 'In Betrieb seit': 'built 1965–1976', 'Verbleib': 'to LAG in 1996, 468 to WAB in 2008' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The locomotives were built from 1965 to 1976 for the Deutsche Reichsbahn and were later called DB 142. The old SOB took over five of them and ran them as Ae 476 465–469.', 'In 1996 all except 468 went to LAG. Number 468 stayed and ran as Ae 476 012 after the merger; in 2008 it went to WAB.'] },
      { titel: 'Service and technology', p: ['The Ae 476 gave SOB extra tractive effort. They were built for the German and Swiss power system of 15 kV and 16.7 Hz and were adapted for service in Switzerland.', 'Because the locomotives come from different years and rebuilds, there is no uniform data table.'] },
      { titel: 'Facilities and accessibility', liste: ['Two cabs', 'No passenger compartment'], p: ['As a locomotive the Ae 476 had no passenger compartment; accessibility depended on the coaches it hauled.'] }
    ],
  bilder: ['Ae 476 468 in Biberbrugg (1999)']
});
uebZug('sob-e-3-3', {
  typ: 'Steam locomotives of the Wädenswil–Einsiedeln Railway and the old SOB (historic)',
  text: ['The E 3/3 were the steam locomotives of the Wädenswil–Einsiedeln Railway and the old SOB. They stand for the time before electrification.', 'The last ones were withdrawn by 1954.'],
  kennzahlen: [['11', 'locomotives'], ['1878', 'first locomotive'], ['C', 'three coupled axles'], ['1940–1954', 'withdrawn']],
  daten: { 'Bauart': 'steam tank locomotive', 'Hersteller': 'Maschinenfabrik Esslingen (1–4), SLM (5–11)' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Maschinenfabrik Esslingen built locomotives 1–4 from 1878 to 1887 for the Wädenswil–Einsiedeln Railway. Numbers 5–11 were delivered by SLM in 1891.', 'Locomotives 1–4 and 5–11 differ in details.'] },
      { titel: 'Service and technology', p: ['As short tank locomotives they hauled passenger and freight trains on the early network and did shunting. They carried water and coal on the locomotive itself.', 'Electrification made them surplus; they were withdrawn between 1940 and 1954.'] },
      { titel: 'Facilities and accessibility', liste: ['Three coupled axles', 'Water and coal on the locomotive', 'No passenger compartment'] }
    ],
  bilder: ['E 3/3 no. 1 «Wädensweil» of the Wädenswil–Einsiedeln Railway (1878–1890)']
});
uebZug('sob-ed-4-5', {
  beiname: '21 and 22',
  typ: 'Steam locomotives of the old SOB from 1910 (historic)',
  text: ['In 1910 the old SOB bought two more powerful steam locomotives from SLM, Ed 4/5 21 and 22.', 'They supplemented the smaller E 3/3.'],
  kennzahlen: [['2', 'locomotives (21, 22)'], ['1910', 'built'], ['4 of 5', 'axles driven'], ['SLM', 'manufacturer']],
  daten: { 'Bauart': 'steam locomotive', 'Fahrzeugnummern': '21 and 22' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SLM built the two locomotives for SOB in 1910. They carried the numbers 21 and 22.'] },
      { titel: 'Service and technology', p: ['With more traffic the small E 3/3 were no longer enough for all trains. The Ed 4/5 hauled heavier passenger and freight trains on the lines of the old SOB. The designation 4/5 means four driven axles out of five.', 'With electrification they lost their role.'] },
      { titel: 'Facilities and accessibility', liste: ['Five axles, four of them driven', 'No passenger compartment'], p: ['Exact dimensions, weights and withdrawal years are not reliably documented without a data sheet of the individual locomotive.'] }
    ],
  bilder: ['Ed 4/5 no. 21 of SOB']
});
uebZug('sob-am-846', {
  typ: 'Diesel locomotive for engineering and shunting work (historic)',
  text: ['For large track renewals the old SOB bought a powerful second-hand diesel locomotive in 1990. It first ran as Am 846 461, later as 033.', 'Around 2010 it was withdrawn and in 2012 sold to JÜST.'],
  kennzahlen: [['1', 'locomotive'], ['1963', 'built'], ['1990', 'to SOB'], ['2012', 'sold']],
  daten: { 'Fahrzeugnummern': 'Am 846 461, later 033', 'In Betrieb seit': 'built 1963, at SOB from 1990', 'Verbleib': 'withdrawn 2010, to JÜST in 2012' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Krupp and AEG built the locomotive in 1963. SOB bought it in 1990, had it refurbished and used it as Am 846 461; after the merger it was called Am 846 033.', 'Around 2010 it was withdrawn and in 2012 sold to JÜST. The sources give slightly different years.'] },
      { titel: 'Service and technology', p: ['The Am 846 hauled engineering trains, helped with track renewals and did shunting. As a diesel locomotive it needed no overhead line, which matters during works with the line switched off. It was much stronger than small shunting tractors.'] },
      { titel: 'Facilities and accessibility', liste: ['Diesel drive, independent of the overhead line', 'No passenger compartment'] }
    ],
  bilder: ['Am 846 033 in Samstagern (2005)', 'Am 846 461 in Samstagern (1996)']
});
uebZug('sob-eea-936', {
  beiname: '031 and 032',
  typ: 'Three-axle electric shunting locomotives (historic)',
  text: ['The two three-axle Henschel shunting locomotives came to BT in 1995 and with the merger to SOB. They shunted cars in stations and workshops.', 'Number 032 was withdrawn in 2012, number 031 in 2015.'],
  kennzahlen: [['2', 'locomotives'], ['1966', 'built'], ['3', 'axles'], ['2012/2015', 'withdrawn']],
  daten: { 'Bauart': 'electric shunting locomotive', 'Frühere Bezeichnung': 'Eea 3/3 31 and 32', 'Fahrzeugnummern': 'Eea 936 031 and 032', 'In Betrieb seit': 'built 1966, at BT from 1995', 'Ausmusterung': '032 in 2012, 031 in 2015' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Henschel and AEG built the two locomotives in 1966. BT took them over in 1995 as Eea 3/3 31 and 32; after the merger they were called Eea 936 031 and 032.', 'Number 032 was withdrawn in 2012, number 031 in 2015.'] },
      { titel: 'Service and technology', p: ['The locomotives shunted cars in stations, workshops and service facilities. With three axles and electric drive they were suited to shunting where an overhead line is available.'] },
      { titel: 'Facilities and accessibility', liste: ['Three axles', 'Electric drive from the overhead line', 'No passenger compartment'] }
    ],
  bilder: ['Eea 936 031 (2008)']
});
uebZug('sob-te-216', {
  beiname: 'shunting tractors',
  typ: 'Electric shunting tractors of BT and SOB',
  text: ['Small electric shunting tractors moved cars around in stations, workshops and sidings at BT and SOB.', 'The stock included Te 212 080 and Te 216 035–039.'],
  kennzahlen: [['6', 'tractors'], ['1941–1966', 'built'], ['2', 'axles'], ['250 kW', 'Te 212 080']],
  daten: { 'Bauart': 'electric shunting tractor, two axles', 'Fahrzeugnummern': 'Te 212 080 (ex BT Te 35), Te 216 035–039', 'In Betrieb seit': 'built 1941–1966' },
  specNote: 'Whether individual tractors still run today is not documented in SOB’s current records.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The tractors Te 216 035–039 were built between 1941 and 1966. Te 212 080 entered service in 1966 as BT Te 35.', 'According to Wikipedia, Te 212 080 is still in stock; in 2019 it stood in Herisau. Whether the others are still preserved, operational or sold is not reliably documented.'] },
      { titel: 'Service and technology', p: ['The tractors shunted smaller groups of cars in stations, workshops and service facilities, for example in Herisau. They are not built for line running.', 'Te 212 080 has a maximum of 250 kW. Power, weight and speed of the Te 216 differ from it.'] },
      { titel: 'Facilities and accessibility', liste: ['Two axles', 'Electric drive from the overhead line', 'No passenger compartment'] }
    ],
  bilder: ['Te 212 080 in Herisau (2019)', 'Te 216 035 next to Be 4/4 11 in Herisau (2012)']
});
uebZug('sob-tm-236', {
  typ: 'Diesel shunting and engineering tractors (historic)',
  text: ['Under the names Tm III and later Tm 236, SOB and BT had various small diesel tractors. It was not a uniform series: they came from several manufacturers.', 'Today the four Robel do most of the maintenance work.'],
  kennzahlen: [['1958–1992', 'built'], ['diesel', 'drive'], ['2', 'axles (mostly)'], ['from 2013', 'sold']],
  daten: { 'Bauart': 'diesel tractor, mostly two axles', 'Hersteller': 'depending on the vehicle RACO, Jung, Stadler, SLM and others', 'Fahrzeugnummern': 'among others Tm 236 001–002, 004–011 and 432', 'In Betrieb seit': 'built 1958–1992', 'Einsatz': 'shunting, engineering work, snow clearing' },
  specNote: 'Because several manufacturers and types belong to the group, there is no common figure for power or weight.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The tractors came from various purchases and takeovers, built between 1958 and 1992. They included BT tractors 1 and 2, the later Tm 236 004–007 and a Jung tractor of the Deutsche Bundesbahn that carried number 34 and later Tm 236 008 at SOB.', 'Many were sold: 011 in 2013, 006 in 2014, 002 in 2015 to the Sursee-Triengen-Bahn, 004 and 005 in 2016.'] },
      { titel: 'Service and technology', p: ['The tractors shunted, pulled and pushed service wagons in engineering work and cleared snow with extra equipment. They were especially useful on sidings and with the overhead line switched off.'] },
      { titel: 'Facilities and accessibility', liste: ['Diesel drive, independent of the overhead line', 'Partly with snow plough blade', 'No passenger compartment'] }
    ],
  bilder: ['Tm 236 002 with snow plough blade in Herisau (2012)', 'Tm 236 005 in Herisau (2009)', 'BT Tm 4, later Tm 236 004, in Herisau (2002)', 'Tm 236 001 in Herisau (2012)']
});
uebZug('sob-xtmas', {
  typ: 'Multi-purpose service vehicles by Windhoff (historic)',
  text: ['In 2010 SOB acquired two multi-purpose vehicles from Windhoff for infrastructure work.', 'As early as 2014 it sold both vehicles to KUMA.'],
  kennzahlen: [['2', 'vehicles (005, 006)'], ['2010', 'acquired'], ['2014', 'sold'], ['Windhoff', 'manufacturer']],
  daten: { 'Bauart': 'multi-purpose service vehicle (MPV)', 'Fahrzeugnummern': '005 and 006', 'Verbleib': 'sold to KUMA in 2014' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['In 2010 SOB bought two multi-purpose vehicles from Windhoff numbered 005 and 006. In 2014 both went to KUMA. They no longer appear in SOB’s current inventory.'] },
      { titel: 'Service and technology', p: ['A multi-purpose vehicle (MPV) is self-propelled and carries different superstructures depending on the job, for work on track and overhead line. Today the four Robel do such tasks at SOB.'] },
      { titel: 'Facilities and accessibility', liste: ['Own drive', 'Superstructures depending on the job', 'No passenger compartment'] }
    ]
});

/* maps «Where does it run?» */
uebEinsatz({
  'sob-traverso': 'As Voralpen-Express St. Gallen–Rapperswil–Arth-Goldau–Lucerne, as Treno Gottardo from Basel and Zurich over the Gotthard summit line to Locarno, as Aare Linth Bern–Zurich–Chur and as Alpenrhein-Express St. Gallen–Chur.',
  'sob-flirt3': 'On the SOB S-Bahn and regional lines, for example S4 Uznach–Wattwil–St. Gallen–Sargans, S6 Rapperswil–Glarus–Schwanden, S13 Wädenswil–Einsiedeln and S40 Einsiedeln–Rapperswil. Which train runs where changes with the timetable and diagrams.',
  'sob-flirt-1': 'On the SOB S-Bahn and regional lines, for example S4 Uznach–Wattwil–St. Gallen–Sargans, S6 Rapperswil–Glarus–Schwanden, S13 Wädenswil–Einsiedeln and S40 Einsiedeln–Rapperswil. Which train runs where changes with the timetable and diagrams.',
  'sob-flirt-2': 'On the SOB S-Bahn and regional lines, for example S4 Uznach–Wattwil–St. Gallen–Sargans, S6 Rapperswil–Glarus–Schwanden, S13 Wädenswil–Einsiedeln and S40 Einsiedeln–Rapperswil. Which train runs where changes with the timetable and diagrams.',
  'sob-tm-234': 'Mainly on the SOB network. Also away for other railways, for example at Zurich Airport and on the Uetliberg.',
  'sob-dienstwagen': 'For work sites and maintenance on the SOB network.',
  'sob-rbde-561': 'Formerly on Wädenswil–Einsiedeln, Rapperswil–Samstagern and Biberbrugg–Arth-Goldau, later in the Voralpen-Express. Last, until October 2025, on the S27 Siebnen-Wangen–Ziegelbrücke.',
  'sob-abt-npz-sued': 'With the NPZ Süd on the lines of the old SOB, last until October 2025 on the S27 Siebnen-Wangen–Ziegelbrücke.',
  'sob-rbde-566': 'Formerly in regional service on the BT network between Romanshorn, St. Gallen, Herisau, Wattwil and Nesslau.',
  'sob-abt-npz-ost': 'Formerly with the NPZ Ost in regional service on the BT network in eastern Switzerland.',
  'sob-revvivo': 'Formerly in the Voralpen-Express St. Gallen–Rapperswil–Arth-Goldau–Lucerne.',
  'sob-ew-iv': 'Formerly in the Voralpen-Express between Lucerne, St. Gallen and Romanshorn.',
  'sob-ew-i-ii': 'Formerly in locomotive-hauled trains on the SOB and BT lines.',
  'sob-bde-576': 'Formerly in SOB and BT regional and through services, also on the «Direkte Linie» Romanshorn–St. Gallen–Rapperswil–Arth-Goldau.',
  'sob-abe-4-4': 'Formerly on the electrified lines of the old SOB between Rapperswil, Arth-Goldau, Wädenswil and Einsiedeln.',
  'sob-de-4-4': 'Formerly in luggage service on the lines of the old SOB.',
  'bt-be-4-4': 'Formerly hauling passenger and freight trains on the BT network and on the «Direkte Linie» via Wattwil to Rapperswil.',
  'bt-be-3-4': 'Formerly in regional service on the BT network, later on historic trips, for example near Wattwil.',
  'sob-re-446': 'Formerly hauling the Voralpen-Express between Lucerne and St. Gallen.',
  'sob-re-456': 'Formerly hauling BT passenger trains and the Voralpen-Express between Lucerne, St. Gallen and Romanshorn.',
  'sob-re-4-4-iii': 'Formerly hauling passenger and freight trains on the steep lines of the old SOB.',
  'sob-ae-476': 'Formerly as extra tractive power on the lines of the old SOB.',
  'sob-e-3-3': 'Formerly on the Wädenswil–Einsiedeln Railway and the network of the old SOB.',
  'sob-ed-4-5': 'Formerly hauling heavier trains on the lines of the old SOB.',
  'sob-am-846': 'Formerly hauling engineering trains and shunting on the SOB network, for example in Samstagern.',
  'sob-eea-936': 'Formerly shunting in stations and workshops of BT and SOB.',
  'sob-te-216': 'Shunting in stations and workshops, for example in Herisau.',
  'sob-tm-236': 'Formerly in shunting and engineering service on the SOB network, often in Herisau.',
  'sob-xtmas': 'From 2010 to 2014 for infrastructure work on the SOB network.'
});
