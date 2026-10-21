/* English – transN (Transports Publics Neuchâtelois) */
uebDict({
  'Transports Publics Neuchâtelois': 'Transports Publics Neuchâtelois',
  'Breite': 'Width', 'Bezeichnung bei transN': 'Designation at transN', 'transN': 'transN', 'transN, früher TRN': 'transN, formerly TRN',
  'transN, früher Trogenerbahn und Appenzeller Bahnen': 'transN, formerly Trogenerbahn and Appenzeller Bahnen', 'transN, früher RdB und CMN': 'transN, formerly RdB and CMN',
  '600 V Gleichstrom': '600 V DC', '1500 V Gleichstrom': '1500 V DC', '15 kV 16,7 Hz': '15 kV 16.7 Hz'
});

uebZug('trn-rabe-523', {
  typ: 'Four-car Stadler FLIRT for Neuchâtel and the Jura arc',
  text: ['The four RABe 523 FLIRT are transN’s newest standard-gauge trains. They run on the lines Neuchâtel–Buttes and Neuchâtel–La Chaux-de-Fonds–Le Locle.', 'Together with the three older RABe 527, transN has seven FLIRT.'],
  kennzahlen: [['4', 'trains (074–077)'], ['160 km/h', 'top speed'], ['149', 'seats'], ['2017', 'first in service']],
  daten: { 'Bauart': 'electric low-floor multiple unit, 4 cars', 'Länge': '74 m', 'Breite': '2.88 m', 'Gewicht': '127 t empty', 'Sitzplätze': '24 in 1st, 125 in 2nd class', 'Anzahl': '4 trains' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler delivered four four-car FLIRT of the RABe 523 class, numbered 523 074–077, to transN; transN gives the year 2017. Together with the three RABe 527, transN has seven FLIRT in passenger service.'] },
      { titel: 'Service and technology', p: ['The trains run on transN lines R21 Neuchâtel–Buttes and R23 Neuchâtel–La Chaux-de-Fonds–Le Locle. They are maintained among other places at the Fleurier depot.', 'A train is 74 m long and 2.88 m wide, weighs 127 t, has 2600 kW and runs at up to 160 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['149 seats: 24 in 1st and 125 in 2nd class', 'Low-floor entrances, as on all FLIRT'],
        p: ['transN does not publish further details on its fleet page, for example on wheelchair spaces or the toilet.'] }
    ],
  bilder: ['RABe 523 074 as RegioExpress to Le Locle in La Chaux-de-Fonds (2018)', 'RABe 523 between Le Crêt-du-Locle and Le Locle (2018)', 'RABe 523 076 (2019)']
});
uebZug('trn-rabe-527', {
  typ: 'Four-car Stadler FLIRT of the first transN series',
  text: ['The three RABe 527 are transN’s older FLIRT series. They came in 2007 to 2009 to the Transports Régionaux Neuchâtelois (TRN), which are now part of transN.', 'They run together with the newer RABe 523.'],
  kennzahlen: [['3', 'trains (331–333)'], ['160 km/h', 'top speed'], ['184', 'seats'], ['2007', 'first in service']],
  daten: { 'Bauart': 'electric low-floor multiple unit, 4 cars', 'Länge': '74 m', 'Breite': '2.88 m', 'Gewicht': '120 t empty', 'Sitzplätze': '24 in 1st, 160 in 2nd class', 'Anzahl': '3 trains' },
  specNote: 'transN gives the years 2007–2009. Not to be confused with the RABe 527 of TPF or SBB.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler delivered the three trains from 2007 to 2009, at that time for the TRN. Since the 2012 merger they have belonged to transN. Photos show the numbers 527 331–333.'] },
      { titel: 'Service and technology', p: ['Like the RABe 523, the trains run on lines R21 Neuchâtel–Buttes and R23 Neuchâtel–La Chaux-de-Fonds–Le Locle.', 'A train is 74 m long and 2.88 m wide, weighs 120 t, has 2600 kW and runs at up to 160 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['184 seats: 24 in 1st and 160 in 2nd class', 'Low-floor entrances'],
        p: ['transN does not publish further details on the facilities on its fleet page.'] }
    ],
  bilder: ['RABe 527 331 in Le Locle (2016)', 'RABe 527 331 in La Chaux-de-Fonds (2024)', 'RABe 527 331 in La Chaux-de-Fonds (2016)']
});
uebZug('trn-be-4-8', {
  typ: 'Three-section Stadler articulated railcar of the Littorail line (ex Trogenerbahn)',
  text: ['On the Littorail line from Neuchâtel to Boudry, five three-section articulated railcars by Stadler run. They come from the Trogenerbahn near St. Gallen.', 'transN calls them «GTW 4/8»; historically they are called Be 4/8.'],
  kennzahlen: [['5', 'trains (031–035)'], ['80 km/h', 'top speed'], ['259', 'places in total'], ['2019', 'at transN']],
  daten: { 'Bauart': 'three-section articulated railcar with low-floor sections', 'Länge': '36.3 m', 'Breite': '2.40 m', 'Gewicht': '47.3 t empty', 'Sitzplätze': '259 places in total', 'Anzahl': '5 trains', 'In Betrieb seit': '2004 (at transN since 2019)' },
  specNote: 'The technical figures are today’s transN data; old Trogenerbahn data sheets partly differ. The 259 places include seats and standing room.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler built the five trains for the St. Gallen–Trogen railway: 31 and 32 in 2004, 33 to 35 in 2008. Later they ran for the Appenzeller Bahnen.', 'transN bought the five trains in 2018 for about 8 million francs. The first, 032, arrived in Neuchâtel on 9 April 2019.'] },
      { titel: 'Service and technology', p: ['The trains run on the Littorail line R15 from Neuchâtel Place Pury to Boudry. There they replaced the Be 4/4 501–506 railcars of 1981 and 1988.', 'A train is 36.3 m long, weighs 47.3 t, has 432 kW and runs at up to 80 km/h. The overhead line carries 600 V DC.'] },
      { titel: 'Facilities and accessibility', liste: ['Three-section articulated railcar with low-floor sections', '259 places in total, seats and standing room together'],
        p: ['transN gives no information on wheelchair spaces or other facilities on its fleet page.'] }
    ],
  bilder: ['Be 4/8 033 arriving in Boudry (2021)', 'Be 4/8 034 at Boudry Littorail (2025)', 'Be 4/8 035, ex Trogenerbahn (2021)', 'Be 4/8 035 at Neuchâtel Place Pury (2025)']
});
uebZug('trn-abe-4-8', {
  typ: 'Two-section Stadler multiple unit for La Chaux-de-Fonds–Les Ponts-de-Martel',
  text: ['Since 2024 two new Stadler multiple units have run between La Chaux-de-Fonds and Les Ponts-de-Martel. They carry the numbers 9 and 10.', 'They replaced the old high-floor railcars and bring low-floor boarding.'],
  kennzahlen: [['2', 'trains (9, 10)'], ['80 km/h', 'top speed'], ['237', 'places in total'], ['2024', 'first in service']],
  daten: { 'Bauart': 'two-section electric multiple unit', 'Fahrzeugnummern': '9 and 10', 'Länge': '39 m', 'Breite': '2.65 m', 'Gewicht': '67.1 t empty', 'Sitzplätze': '237 places in total', 'Anzahl': '2 trains' },
  specNote: 'An early project sheet gave 39.30 m and 55 t. Today’s transN figures apply here.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler built the two trains 9 and 10; they entered service in 2024. They replaced the railcars BDe 4/4 6 and 7 of 1991 and 8 of 1996, which had high entrances.'] },
      { titel: 'Service and technology', p: ['The trains run on the R22 La Chaux-de-Fonds–Les Ponts-de-Martel. The overhead line carries 1500 V DC.', 'A train is 39 m long and 2.65 m wide, weighs 67.1 t, has 1600 kW and runs at up to 80 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Low-floor boarding', '237 places in total, seats and standing room together', 'Two car bodies'],
        p: ['With low-floor boarding the line is much more accessible than with the old high-floor railcars.'] }
    ],
  bilder: ['ABe 4/8 9 (2024)', 'ABe 4/8 10 in La Chaux-de-Fonds (2024)']
});
uebZug('trn-bde-4-4', {
  beiname: '3 and 5',
  typ: 'Railcars of 1950 for Le Locle–Les Brenets',
  text: ['The two railcars of 1950 run on the short line from Le Locle to Les Brenets. They were modernised in the 1980s.', 'According to a decision at the end of 2023, the railway will continue until at least 2031.'],
  kennzahlen: [['2', 'railcars (3, 5)'], ['60 km/h', 'top speed'], ['146', 'places in total'], ['1950', 'built']],
  daten: { 'Bauart': 'electric railcar with luggage compartment', 'Fahrzeugnummern': '3 and 5', 'Länge': '16.6 m', 'Breite': '2.68 m', 'Gewicht': '24 t empty', 'Sitzplätze': '146 places in total' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Reggiane in Italy built the railcars in 1950, with equipment from TIBB and SAAS. Ramseier & Jenzer in Biel modernised number 3 in 1985/86 and number 5 in 1986/87. transN runs these two railcars today.'] },
      { titel: 'Service and technology', p: ['The railcars run on the R24, the line of just over 4 km from Le Locle to Les Brenets. In 2020 the canton and municipalities planned to replace the railway with a bus from 2025; at the end of 2023 it was decided that the trains will run until at least 2031.', 'A railcar is 16.6 m long, weighs 24 t, has 480 kW and runs at up to 60 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['146 places in total, seats and standing room together', 'Luggage compartment (letter D)', 'High entrances with steps'] }
    ],
  bilder: ['BDe 4/4 5 leaving the Petits-Monts tunnel near Le Locle (2020)', 'BDe 4/4 5 in Les Brenets (2018)', 'CMN BDe 4/4 5 in Les Brenets (1998)']
});
uebZug('trn-tm-44-normal', {
  beiname: 'standard gauge',
  typ: 'Diesel-electric Stadler engineering tractor',
  text: ['transN has two modern Stadler Tm 4/4 engineering tractors, one for standard gauge and one for metre gauge. This one works on the standard-gauge network.', 'It has a crane and a load area for material.'],
  kennzahlen: [['1', 'vehicle'], ['80 km/h', 'top speed (type)'], ['480 kW', 'engine power (type)'], ['diesel', 'drive']],
  daten: { 'Bauart': 'diesel-electric engineering tractor with crane', 'Motor': 'Mercedes-Benz OM 473 (type)', 'Länge': '18.0 m (type)', 'Gewicht': '52 t (type)', 'Leistung': '480 kW (type)', 'Höchstgeschwindigkeit': '80 km/h (type)' },
  specNote: 'Values marked «type» describe the vehicle family according to Schweizer Eisenbahn-Revue 3/2023. The sources checked do not give the number or exact year of entry into service of the standard-gauge tractor.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['According to the 2025 annual report, transN has two Stadler Tm 4/4, one each for standard and metre gauge. The number of the standard-gauge tractor is not given in the sources checked.'] },
      { titel: 'Service and technology', p: ['The tractor is used for construction, maintenance and material transport on the transN standard-gauge network, for example on the Travers–Buttes line.', 'The type is diesel-electric: a Mercedes-Benz OM 473 engine of 480 kW supplies power to four traction motors. The tractor is 18.0 m long, weighs 52 t and runs at up to 80 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Palfinger crane with up to 17 m reach (type)', 'Loading platform for 12 t (type)', 'Radio remote control (type)', 'No passenger compartment'] }
    ]
});
uebZug('trn-tm-44-meter', {
  beiname: '012 metre gauge',
  typ: 'Diesel-electric Stadler engineering tractor for the metre gauge',
  text: ['The metre-gauge Tm 4/4 012 entered service with transN in 2023. It works in engineering service on the metre-gauge lines.', 'It is the sister of the standard-gauge tractor of the same type.'],
  kennzahlen: [['1', 'vehicle (012)'], ['80 km/h', 'top speed (type)'], ['480 kW', 'engine power (type)'], ['2023', 'first in service']],
  daten: { 'Bauart': 'diesel-electric engineering tractor with crane', 'Motor': 'Mercedes-Benz OM 473 (type)', 'Länge': '18.0 m (type)', 'Gewicht': '52 t (type)', 'Leistung': '480 kW (type)', 'Höchstgeschwindigkeit': '80 km/h (type)' },
  specNote: 'Values marked «type» describe the vehicle family according to Schweizer Eisenbahn-Revue 3/2023.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler supplied the tractor; transN put it into service in 2023. It carries the number 90 85 8570 012-7, Tm 4/4 012 for short.'] },
      { titel: 'Service and technology', p: ['It works in engineering service on the transN metre-gauge network, among others on the R22 La Chaux-de-Fonds–Les Ponts-de-Martel. It moves rails, building material and ballast wagons.', 'The type is diesel-electric: a Mercedes-Benz OM 473 engine of 480 kW supplies power to the traction motors. The tractor is 18.0 m long, weighs 52 t and runs at up to 80 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Palfinger crane with up to about 17 m reach (type)', 'Loading platform for 12 t (type)', 'No passenger compartment'] }
    ]
});

/* maps «Where does it run?» */
uebEinsatz({
  'trn-rabe-523': 'On transN lines R21 Neuchâtel–Val-de-Travers–Buttes and R23 Neuchâtel–La Chaux-de-Fonds–Le Locle.',
  'trn-rabe-527': 'On transN lines R21 Neuchâtel–Val-de-Travers–Buttes and R23 Neuchâtel–La Chaux-de-Fonds–Le Locle.',
  'trn-be-4-8': 'On the Littorail line R15 from Neuchâtel Place Pury to Boudry. The metre gauge is shown dashed and simplified.',
  'trn-abe-4-8': 'On the R22 La Chaux-de-Fonds–Les Ponts-de-Martel. The metre gauge is shown dashed and simplified.',
  'trn-bde-4-4': 'On the R24 Le Locle–Les Brenets, a metre-gauge line of just over 4 km. It is shown dashed.',
  'trn-tm-44-normal': 'For construction and maintenance on the transN standard-gauge network, for example on the Travers–Buttes line.',
  'trn-tm-44-meter': 'In engineering service on the transN metre-gauge lines, among others La Chaux-de-Fonds–Les Ponts-de-Martel. The metre gauge is shown dashed and simplified.'
});
