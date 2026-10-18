/* English – historic vehicles */
uebDict({
  'Krokodil': 'Crocodile',
  'elektrisch, Stangenantrieb': 'electric, rod drive'
});

uebZug('ee-33', {
  typ: 'Classic SBB electric shunting locomotive (historic)',
  text: ['For decades the Ee 3/3 was SBB’s classic electric shunting locomotive.', 'Several series were built between 1928 and 1966; despite technical development they kept the basic concept of three coupled axles.'],
  kennzahlen: [['136', 'locomotives built'], ['500 kW', 'newer version'], ['50 km/h', 'newer version'], ['1928–1966', 'years built']],
  daten: { 'Hersteller': 'SLM with BBC, MFO or SAAS', 'Länge': '9.51 m (newer series)', 'Gewicht': '45 t empty (newer series)', 'Leistung': '500 kW (newer series)', 'Höchstgeschwindigkeit': 'depending on series, finally 50 km/h', 'Einsatz': 'light and medium shunting', 'Status': 'last SBB locomotive withdrawn in 2020' },
  specNote: 'Power, mass and length apply to the newer version described in the 2026 train type catalogue; older series differ.',
  abschnitte: [
    { titel: 'Series and service', p: ['SBB had a total of 136 Ee 3/3 built. The locomotives shunted coaches and wagons in stations and depots.', 'SBB’s last active machine was withdrawn in 2020.'] },
    { titel: 'Distinction', p: ['The dual-frequency and four-system variants are called Ee 3/3 II and Ee 3/3 IV and technically form separate sub-classes.'] }
  ],
  bilder: ['Ee 3/3 16408', 'Ee 3/3 16408 from the side', 'Ee 3/3 16451', 'Ee 3/3 16404 in Gossau SG', 'Ee 3/3 16383, built in 1942']
});

uebZug('h-ce68ii', {
  beiname: 'Crocodile',
  typ: 'Electric freight locomotive (historic)',
  text: ['The «Crocodile» is Switzerland’s most famous locomotive. This rod-driven freight locomotive mainly ran on the Gotthard.'],
  daten: { 'Hersteller': 'SLM (mechanical) and MFO (electrical)', 'Einsatz': 'freight trains on the Gotthard' },
  bilder: ['Crocodile Ce 6/8 II 14253 near Rodi', 'Ce 6/8 II 14253 in Göschenen', 'Ce 6/8 II 14253 with a train', 'Ce 6/8 II 14282 in green livery', 'Ce 6/8 II 14253 in Erstfeld']
});

uebZug('h-ce68iii', {
  beiname: 'Crocodile',
  typ: 'The younger generation of the Gotthard Crocodile (historic)',
  text: ['The Ce 6/8 III is the further developed version of the famous Swiss «Crocodile» locomotive.', 'Its articulated bonnets and rod drive made it an unmistakable vehicle of heavy freight traffic.'],
  kennzahlen: [['18', 'locomotives'], ['1926', 'first entry into service'], ['75 km/h', 'after rebuilding'], ['131 t', 'service weight']],
  daten: { 'Hersteller': 'SLM, MFO', 'Antrieb': 'inclined rods', 'Gewicht': '131 t service weight', 'Leistung': '1810 kW one-hour rating', 'Höchstgeschwindigkeit': '65 km/h, later 75 km/h', 'Nummern': '14301–14318, from 1956 Be 6/8 III 13301–13318', 'In Betrieb seit': '1926 (built 1926–1927)', 'Ausmusterung': 'scheduled service until 1977', 'Einsatz': 'heavy freight trains' },
  abschnitte: [
    { titel: 'History and service', p: ['The series was intended for heavy freight trains on the Gotthard, on the approach lines and in the lowlands.', 'In 1956 the permitted maximum speed was raised to 75 km/h and the class was redesignated Be 6/8 III. Scheduled service ended in 1977.'] },
    { titel: 'Preservation', p: ['Ce 6/8 III 14305 is preserved as a historic vehicle. It represents SBB’s world-famous Crocodile design.'] }
  ],
  bilder: ['Ce 6/8 III 14305', 'Ce 6/8 III on an SBB Historic run', 'Ce 6/8 III 14305 from the side', 'Ce 6/8 III 14305 visiting Malmö (2015)', 'Builder’s plate of Ce 6/8 III 14305']
});

uebZug('h-ae66', {
  beiname: 'Canton locomotive',
  typ: 'Canton locomotive and Gotthard icon (historic)',
  text: ['For decades the Ae 6/6 was SBB’s powerhouse on the Gotthard.', 'The first 25 machines carried cantonal coats of arms and chrome trim; later locomotives received the arms of Swiss towns and municipalities.'],
  kennzahlen: [['120', 'locomotives'], ['125 km/h', 'top speed'], ['1952', 'first entry into service'], ['4300 kW', 'one-hour rating']],
  daten: { 'Gewicht': '120 t (prototypes 124 t)', 'Leistung': 'approx. 4300 kW one-hour rating at the wheel', 'In Betrieb seit': '1952 (series 1955–1966)', 'Einsatz': 'Gotthard, heavy passenger and freight trains' },
  abschnitte: [
    { titel: 'History and service', p: ['At first the Ae 6/6 shaped express and freight traffic on the Gotthard. As more modern locomotives arrived, its work shifted increasingly to freight and the Swiss Plateau.'] },
    { titel: 'Preservation', p: ['Several Ae 6/6 have been preserved. Ae 6/6 11421 «Graubünden» belongs to the SBB Historic collection and keeps the era of the canton locomotives alive.'] }
  ],
  bilder: ['Ae 6/6 11413 «Schaffhausen»', 'Ae 6/6 at the Swiss Museum of Transport in Lucerne', 'Ae 6/6 in red livery in Renens', 'Ae 6/6 from the front', 'Ae 6/6 in green with chrome stripes']
});

uebZug('h-ae47', {
  typ: 'Electric locomotive with Buchli drive (historic)',
  text: ['For decades the Ae 4/7 was one of SBB’s most important main-line locomotives, recognisable by its one-sided Buchli drive.'],
  daten: { 'Antrieb': 'electric, Buchli drive' },
  bilder: ['Ae 4/7 11026 in Brugg', 'Ae 4/7 10997 in Mendrisio', 'Ae 4/7 11026 in Bauma', 'Ae 4/7 with a freight train', 'Ae 4/7 near Salgesch']
});

uebZug('h-ae36i', {
  typ: 'Buchli locomotive for the electrified Swiss Plateau (historic)',
  text: ['The Ae 3/6 I was one of SBB’s most important early electric locomotives.', 'Its distinctive Buchli individual axle drive and long service life made the class a symbol of the electrification of the Swiss Plateau.'],
  kennzahlen: [['114', 'locomotives'], ['110 km/h', 'later top speed'], ['1921', 'first entry into service'], ['73 years', 'in service until 1994']],
  daten: { 'Antrieb': 'Buchli individual axle drive', 'Gewicht': '92–96 t service weight', 'Leistung': '1470–1635 kW one-hour rating', 'In Betrieb seit': '1921 (built 1920–1929)', 'Ausmusterung': 'until 1994', 'Einsatz': 'passenger, express and freight trains' },
  abschnitte: [
    { titel: 'History and service', p: ['The large class was procured in several batches and used for passenger, express and freight trains. Improvements during construction led to differences in power and speed within the fleet.'] },
    { titel: 'Significance and preservation', p: ['Serving from 1921 to 1994, the Ae 3/6 I is one of SBB’s longest-lived locomotive classes. Several locomotives were preserved by museums and associations, including 10700 in the SBB Historic circle.'] }
  ],
  bilder: ['Ae 3/6 I 10700', 'Ae 3/6 I with Buchli drive', 'Ae 3/6 I 10650 in Brugg (2012)', 'Ae 3/6 I 10712 in Biel/Bienne (1988)', 'Ae 3/6 I 10638']
});

uebZug('h-ae814', {
  beiname: 'Landi-Lok',
  typ: 'Three unique double locomotives for the Gotthard (historic)',
  text: ['The designation Ae 8/14 covers three individually developed double locomotives.', 'They were meant to haul heavy Gotthard trains without banking or pilot locomotives and were considered exceptionally powerful when built.'],
  kennzahlen: [['3', 'prototypes'], ['1931', 'first entry into service'], ['up to 110 km/h', 'top speed'], ['8162 kW', 'maximum one-hour rating']],
  daten: { 'Hersteller': 'SLM, BBC or MFO', 'Achsfolge': 'differs by locomotive', 'Länge': 'around 34 m', 'Gewicht': '235.7–246 t service weight', 'Leistung': '5514–8162 kW one-hour rating', 'In Betrieb seit': '1931 (built 1931, 1932, 1938/40)', 'Einsatz': 'heavy Gotthard trains' },
  abschnitte: [
    { titel: 'Three different one-offs', p: ['Nos. 11801, 11851 and 11852 differed in drive, power and construction.', 'No. 11852 was built for the 1939 National Exhibition and became known as the «Landi-Lok». With over 8 MW it was long the most powerful locomotive in the world.'] },
    { titel: 'Preservation', p: ['Ae 8/14 11852 is preserved by SBB Historic in Erstfeld. It is currently not operational but can be viewed as a key historic exhibit.'] }
  ],
  bilder: ['Ae 8/14 11801 in Biasca', 'Ae 8/14 11852 «Landi-Lok» at the Swiss Museum of Transport', 'Brand-new Ae 8/14 11851 on the Kerstelenbach bridge, 1932', 'Ae 8/14 11801 on a special run', 'Ae 8/14 11801 in Bellinzona']
});

uebZug('h-be46', {
  typ: 'Early electric Gotthard locomotive (historic)',
  text: ['The Be 4/6 belonged to the first generation of electric Gotthard locomotives.', 'Its distinctive shape earned it the nickname «Rehbock» (roebuck), and it initially hauled heavy express trains on the mountain line.'],
  kennzahlen: [['40', 'locomotives'], ['75 km/h', 'top speed'], ['1920', 'first entry into service'], ['107–110 t', 'service weight']],
  daten: { 'Achsfolge': '6 axles, comprising 4 powered and 2 carrying axles; rod drive', 'Gewicht': '107–110 t service weight', 'Leistung': 'up to 1500 kW one-hour rating', 'In Betrieb seit': '1920 (built 1920–1923)', 'Ausmusterung': 'until 1976', 'Einsatz': 'express and freight trains' },
  abschnitte: [
    { titel: 'History and service', p: ['SBB ordered the class for electric operation on the Gotthard. As train weights grew, the machines were displaced by more powerful types and later used on the Swiss Plateau and in secondary duties.'] },
    { titel: 'Preservation', p: ['Be 4/6 12320 is part of the historic fleet. It recalls the pioneering era of electric traction on the Gotthard line.'] }
  ],
  bilder: ['Be 4/6 12320 next to RAe TEE II 1053', 'SBB Historic Be 4/6 between Rämismühle-Zell and Rikon', 'Be 4/6 12320', 'Be 4/6 near Rämismühle', 'Be 4/6 12339']
});

uebZug('h-re44i', {
  typ: 'Light post-war express locomotive (historic)',
  text: ['The Re 4/4 I was SBB’s first bogie locomotive.', 'Designed for fast, light trains, it shaped high-quality services on the Swiss Plateau together with the lightweight steel coaches.'],
  kennzahlen: [['50', 'locomotives'], ['125 km/h', 'top speed'], ['1946', 'first entry into service'], ['57 t', 'service weight']],
  daten: { 'Länge': '14.7 / 14.9 m (by series)', 'Gewicht': '57 t service weight', 'Leistung': '1850 / 1900 kW one-hour rating', 'Nummern': '10001–10050 (formerly 401–450)', 'In Betrieb seit': '1946 (built 1946–1951)', 'Einsatz': 'express and push-pull trains, later regional trains' },
  abschnitte: [
    { titel: 'History and service', p: ['The locomotives were built in two series. Low weight, smooth running and a top speed of 125 km/h made them ideal for express and commuter trains.', 'Later they moved to regional and reinforcement duties.'] },
    { titel: 'Preservation', p: ['Scheduled withdrawal took place from 1996 to 1998. Re 4/4 I 10001 is preserved as a historic locomotive by SBB Historic.'] }
  ],
  bilder: ['Re 4/4 I 10029 in Stein am Rhein (1991)', 'Re 4/4 I 10019', 'Re 4/4 I (as Re 410 009) near Zurich, 2015', 'Re 4/4 I 10019 in Basel Badischer Bahnhof', 'Re 4/4 I 10032 in České Velenice']
});

uebZug('h-tee', {
  typ: 'Four-system multiple unit for top international services (historic)',
  text: ['The RAe TEE II linked Switzerland with Germany, France, Italy and the Netherlands without changing locomotives.', 'Its four-system technology made it one of the most technically demanding European multiple units of its time.'],
  kennzahlen: [['5', 'train sets'], ['140 km/h', 'in service · technically 160 km/h'], ['1961', 'first entry into service'], ['4', 'power systems']],
  daten: { 'Zugbildung': 'six cars (preserved condition; the first four sets originally had five cars)', 'Stromsystem': '15 kV and 25 kV AC, 1.5 kV and 3 kV DC', 'Gewicht': 'approx. 309 t service weight', 'Leistung': 'approx. 2310 kW', 'Höchstgeschwindigkeit': '140 km/h in service, 160 km/h technical', 'In Betrieb seit': '1961 (fifth set 1967)', 'Einsatz': 'Trans-Europ-Express, later EuroCity' },
  abschnitte: [
    { titel: 'History and service', p: ['Four units were delivered in 1961 with five cars and later lengthened by an intermediate car; the fifth set followed in 1967. The elegant trains ran as the TEE Gottardo, Cisalpin, Edelweiss and Roland, among others.', 'From 1988 they ran in grey as RABe EC in EuroCity service.'] },
    { titel: 'Preservation', p: ['Set RAe TEE II 1053 was preserved. SBB Historic restored it to its red and cream TEE condition; since 2003 it has run on historic special trips.'] }
  ],
  bilder: ['RAe TEE II at the platform', 'RAe TEE II at Zurich HB, 1963', 'Front of the RAe TEE II', 'RAe TEE II on the move', 'RAe TEE II at Zurich HB, 1963']
});

uebZug('h-roterpfeil', {
  beiname: 'Red Arrow',
  typ: 'Light electric railcar for excursions and fast runs (historic)',
  text: ['The seven electric Red Arrows were delivered between 1935 and 1938 as CLe 2/4 and later reclassified several times.', 'Their red streamlined shape made them one of the best-known symbols of the modern SBB of the 1930s.'],
  kennzahlen: [['7', 'electric base vehicles'], ['125 km/h', 'top speed'], ['1935', 'first entry into service'], ['70', 'seats']],
  daten: { 'Gewicht': 'approx. 38 t service weight', 'Leistung': '404 kW one-hour rating, 315 kW continuous rating', 'Nummern': '201–207, later 601–607', 'Einsatz': 'excursions and group trips, fast special services' },
  abschnitte: [
    { titel: 'Designations and conversions', p: ['Cars 201 and 202 were delivered in 1935, 203–206 in 1936 and 207 in 1938. Later they carried, among others, the designation RCe 2/4. Cars 201 and 206 were lengthened in 1952 and 1953 and converted for 1st class (RAe 2/4); others last carried the designation RBe 2/4.', 'Fleet figures therefore differ depending on designation and period.'] },
    { titel: 'Service and significance', p: ['The Red Arrows were used for excursions, group travel and fast special services. Their low weight and aerodynamic shape embodied the technical optimism of the inter-war years.'] }
  ],
  bilder: ['Red Arrow RCe 2/4 203']
});

uebZug('h-a35', {
  typ: 'Express steam locomotive of the 701–809 series (historic)',
  text: ['At SBB the designation A 3/5 was used for several designs.', 'This page covers the well-known JS/SBB series 701–809, which includes the preserved A 3/5 705.'],
  kennzahlen: [['109', 'locomotives in the series'], ['100 km/h', 'top speed'], ['1902', 'first entry into service'], ['920 kW', 'indicated power']],
  daten: { 'Länge': '18.60 m with tender', 'Gewicht': '106–107 t service weight with tender', 'Leistung': '920 kW (indicated)', 'Anfahrzugkraft': 'approx. 75 kN', 'In Betrieb seit': '1902 (built 1902–1909)', 'Einsatz': 'express trains' },
  abschnitte: [
    { titel: 'History and service', p: ['The locomotives were still ordered by the Jura-Simplon Railway and taken over by SBB. 68 machines received superheating.', 'They hauled high-quality express trains until more powerful and later electric locomotives replaced them.'] },
    { titel: 'Preservation', p: ['A 3/5 705 has been preserved in working order. It is looked after by the Dampfgruppe Zürich and represents express steam from SBB’s early years.'] }
  ],
  bilder: ['A 3/5 705 next to Ae 3/6 I 10694 in Arnex-sur-Orbe, 1967']
});

uebZug('h-c56', {
  typ: 'Steam locomotive for heavy Gotthard trains (historic)',
  text: ['The C 5/6 was one of SBB’s largest and most powerful steam locomotives. It was also SBB’s last new standard-gauge steam locomotive procurement.', 'The nickname «Elefant» (elephant) refers to its mighty appearance and high tractive effort.'],
  kennzahlen: [['28', 'series locomotives'], ['65 km/h', 'top speed'], ['1913', 'first entry into service'], ['128 t', 'with tender']],
  daten: { 'Länge': '19.195 m with tender', 'Gewicht': '128 t with tender', 'Leistung': 'approx. 1190 kW (indicated)', 'In Betrieb seit': '1913 (built 1913–1917)', 'Ausmusterung': 'until 1968', 'Einsatz': 'heavy freight trains' },
  abschnitte: [
    { titel: 'History and service', p: ['The C 5/6 was developed for heavy traffic on the Gotthard. After electrification it moved to the Swiss Plateau, the Bellinzona–Luino line and shunting duties.', 'In 1968 No. 2969 hauled SBB’s last official steam train.'] },
    { titel: 'Preservation', p: ['Several examples have been preserved. C 5/6 2978, the last locomotive of the class, belongs to SBB’s historic fleet.'] }
  ],
  bilder: ['C 5/6 2958 at the Locorama', 'C 5/6 2965 from 1916', 'C 5/6 2965, built by SLM', 'C 5/6 «Elefant» in detail', 'Plates of C 5/6 2965 «Erstfeld»']
});

uebZug('h-eb35', {
  typ: 'Versatile tank locomotive (historic)',
  text: ['The Eb 3/5 was a strong tank locomotive for passenger, freight and shunting duties.', 'Its stocky shape earned it the popular nickname «Habersack».'],
  kennzahlen: [['34', 'locomotives'], ['75 km/h', 'top speed'], ['1911', 'first entry into service'], ['74–74.9 t', 'service weight']],
  daten: { 'Bauart': '1′C1′ tank locomotive', 'Länge': '12.74 m over buffers (Eb 3/5 5819)', 'Gewicht': '57.6–58.8 t empty, 74–74.9 t service weight', 'Kesseldruck': 'around 12 bar', 'Vorräte': '7.7 m³ water, 2.5 t coal', 'In Betrieb seit': '1911 (built 1911–1916)', 'Einsatz': 'regional trains, branch lines, station duties' },
  abschnitte: [
    { titel: 'History and service', p: ['The symmetrical wheel arrangement gave good running in both directions without the locomotive having to be turned.', 'This made the Eb 3/5 particularly suitable for branch lines, regional trains and varied station duties.'] },
    { titel: 'Preservation', p: ['Individual locomotives of the class have been preserved by museums and heritage railways. They show the last generation of SBB’s universal steam tank locomotives.'] }
  ],
  bilder: ['Eb 3/5 in Bremgarten West', 'Eb 3/5 5810 (2018)', 'Eb 3/5 5885', 'Eb 3/5 «Habersack»', 'Eb 3/5 vehicle portrait']
});

uebZug('h-mirage', {
  typ: 'Gold Coast Express of the Zurich suburbs (historic)',
  text: ['On the three-car RABDe 12/12, all twelve axles were powered.', 'Its enormous acceleration suited the dense suburban traffic on the right bank of Lake Zurich and earned it the nickname «Mirage».'],
  kennzahlen: [['20', 'train sets'], ['125 km/h', 'top speed'], ['1967', 'first entry into service'], ['2444 kW', 'one-hour rating']],
  daten: { 'Zugbildung': 'three cars', 'Achsfolge': 'all 12 axles powered', 'Gewicht': 'approx. 170 t empty', 'Leistung': '2444 kW one-hour rating', 'In Betrieb seit': '1967 (built 1965–1967)', 'Ausmusterung': 'until 2008, scrapped by 2010', 'Einsatz': 'suburban services on the right bank of Lake Zurich' },
  abschnitte: [
    { titel: 'History and service', p: ['The trains were procured for half-hourly suburban services on the right-bank Lake Zurich line and became known as the «Goldküstenexpress» (Gold Coast Express). Later they also ran on other regional and S-Bahn lines.'] },
    { titel: 'Modernisation and end', p: ['After conversion the vehicles were designated RABDe 510. Regular service ended in 2008; the last units were scrapped by 2010. No complete train has been preserved.'] }
  ],
  bilder: ['RABDe 12/12 «Mirage» in red', 'RABDe 12/12 «Mirage» in 1983', '«Mirage» in the later NPZ livery', '«Mirage» as RABDe 510', 'Two «Mirage» on the Gold Coast of Lake Zurich']
});

uebZug('h-rbe540', {
  typ: 'Modernised high-performance railcar for push-pull trains (historic)',
  text: ['The RBe 540 was created by modernising the RBe 4/4.', 'These powerful railcars first hauled express trains and later mainly regional and S-Bahn push-pull trains.'],
  kennzahlen: [['82', 'RBe 4/4 built'], ['125 km/h', 'top speed'], ['1959', 'first prototypes'], ['1988 kW', 'one-hour rating']],
  daten: { 'Gewicht': '68 t, 72 t after R4 conversion', 'Leistung': '1988 kW one-hour rating', 'Sitzplätze': '64, 60 after R4 conversion', 'Nummern': 'originally 1401–1482, as RBe 540 006–079', 'In Betrieb seit': '1959 (built 1959–1966)', 'Modernisierung': '1993–1998 (R4 programme)', 'Ausmusterung': 'last scheduled duties in 2014', 'Einsatz': 'express trains, later regional and S-Bahn push-pull trains' },
  abschnitte: [
    { titel: 'History and service', p: ['The RBe 4/4 were powerful enough to haul an express train while also offering a passenger compartment.', 'In the R4 conversion programme they received new cabs, doors and interiors as well as the designation RBe 540.'] },
    { titel: 'Withdrawal and preservation', p: ['The last scheduled duties ended in 2014. Individual vehicles have been preserved, including RBe 540 074 used on the Oensingen-Balsthal-Bahn.'] }
  ],
  bilder: ['RBe 540 007', 'RBe 540 060 in Chur', 'RBe 4/4 in green livery near Tägerwilen', 'RBe 540 next to a Re 4/4 II in Winterthur', 'RBe 540 020 at Zurich HB']
});
