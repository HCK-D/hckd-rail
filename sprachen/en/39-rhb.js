/* English – Rhätische Bahn (RhB) */
uebDict({
  'Rhätische Bahn': 'Rhaetian Railway', 'RhB': 'RhB', 'Stadler': 'Stadler',
  '11 kV 16,7 Hz': '11 kV 16.7 Hz', '1000 V Gleichstrom': '1000 V DC', '11 kV 16,7 Hz · 1000 V Gleichstrom': '11 kV 16.7 Hz · 1000 V DC',
  'Kein eigener Antrieb': 'No drive of its own', 'Diesel': 'diesel'
});

/* ---------- passenger traffic ---------- */
uebZug('rhb-capricorn', {
  typ: 'Four-car Stadler regional multiple unit for the core network',
  text: ['The Capricorn is the newest regional train of the RhB. Stadler has been building the four-car trains since 2019; they have carried passengers since 2020.', 'Several trains can couple and split automatically. So they start together and then serve different destinations.'],
  kennzahlen: [['56', 'trains in service (3111–3166)'], ['164', 'seats'], ['120 km/h', 'top speed'], ['2020', 'in passenger service']],
  daten: { 'Bauart': 'electric low-floor multiple unit, 4 cars', 'Fahrzeugnummern': '3111–3166, extension up to 3172', 'Länge': '76.4 m over couplers', 'Breite': '2.67 m', 'Gewicht': '119 t empty, 146 t loaded', 'Leistung': '1000 kW continuous, 1600 kW maximum (at the wheel)', 'Sitzplätze': '35 in 1st, 129 in 2nd class, plus 18 folding seats', 'Anzahl': '56 trains, 6 more from late 2026' },
  specNote: 'Technical data according to Stadler (data sheet TMRHB0922e) and the RhB. The RhB gives 1000 kW as continuous power, Stadler 1600 kW as maximum power. An older advertising page gives 114 t without a clear reference; 119 t empty according to the RhB project page applies here.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler builds the Capricorn for the RhB. The first vehicles were built in 2019; train 3111 first ran in the timetable on 17 June 2020. The basic series comprises 56 trains numbered 3111–3166.', 'The RhB mentions six more trains to be delivered in the second half of 2026; the registers list numbers up to 3172 for them. Each car also has its own number, for example Be 4/4 31011 in train 3111.'] },
      { titel: 'Service and technology', p: ['According to the RhB the Capricorn run on Landquart–Davos–Filisur, Landquart–Scuol, Landquart–St. Moritz and Chur–Disentis/Mustér. Two to four trains can run as one and split at Klosters Platz.', 'The power car has four driven axles and pulls three more cars. The train is 76.4 m long, weighs 119 t empty and runs at up to 120 km/h. Starting tractive effort is 142 kN, electric braking power up to 2200 kW.'] },
      { titel: 'Facilities and accessibility', liste: ['164 seats: 35 in 1st and 129 in 2nd class, plus 18 folding seats', 'Three wide low-floor entrances, 2 wheelchair spaces and a wheelchair-accessible toilet', 'Up to 12 bicycle spaces in multi-purpose compartments', 'Air conditioning, two sockets per compartment and the front camera image on the passenger screens', 'Baby changing tables in both toilets'] }
    ],
  bilder: ['Capricorn 3112 near Bever (2021)', 'Capricorn between Davos Wolfgang and Davos Laret (2020)', 'Coupled Capricorn 3122 and 3119 in Davos Dorf (2024)']
});
uebZug('rhb-allegra', {
  typ: 'Three-car dual-voltage multiple unit for the core network and the Bernina line',
  text: ['The Allegra runs on AC on the core network and on DC on the Bernina line. So it links both networks without changing locomotives.', 'The 15 Stadler trains can haul extra coaches, such as the panoramic coaches of the Bernina Express.'],
  kennzahlen: [['15', 'trains (3501–3515)'], ['2600 kW', 'power (AC)'], ['100 km/h', 'top speed'], ['2010', 'in the timetable']],
  daten: { 'Bauart': 'electric dual-voltage multiple unit, 3 cars', 'Länge': '49.5 m', 'Breite': '2.65 m', 'Gewicht': '106 t empty', 'Leistung': '2600 kW (AC), 2400 kW (DC), at the wheel', 'Sitzplätze': '24 in 1st, 76 in 2nd class, plus 14 folding seats', 'Anzahl': '15 trains' },
  specNote: 'Values according to the Stadler data sheet SRhBZS1009d. Later overviews give higher values (2800 kW, 280 kN); without a newer data sheet the original figures remain here.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler delivered 15 trains. The first handover took place in Landquart on 14 October 2009; timetable service began in 2010. The purchase cost about 150 million francs.', 'Each train bears the name of a person from Graubünden.'],
        tabelle: { kopf: ['Train', 'Name', 'Train', 'Name'], zeilen: [
          ['3501', 'Willem Jan Holsboer', '3509', 'Placidus Spescha'], ['3502', 'Friedrich Hennings', '3510', 'Alberto Giacometti'], ['3503', 'Carlo Janka', '3511', 'Otto Barblan'],
          ['3504', 'Dario Cologna', '3512', 'Jörg Jenatsch'], ['3505', 'Giovanni Segantini', '3513', 'Simeon Bavier'], ['3506', 'Anna von Planta', '3514', 'Steivan Brunies'],
          ['3507', 'Benedetg Fontana', '3515', 'Alois Carigiet'], ['3508', 'Richard Coray', '', '']] } },
      { titel: 'Service and technology', p: ['Two powered end cars frame a trailer car; 8 of the 12 axles are driven. Four independent traction chains with water-cooled IGBT converters make the train robust.', 'On the Bernina line the Allegra hauls extra coaches up gradients of up to 70 per mille. On 20 December 2010 train 3502 reached 145 km/h in the Vereina tunnel, a record for metre gauge.'] },
      { titel: 'Facilities and accessibility', liste: ['100 seats: 24 in 1st and 76 in 2nd class, plus 14 folding seats', '2 wheelchair spaces, closed wheelchair-accessible toilet and sliding step', 'Low-floor entrance in the middle section (480 mm); the rest of the floor is high', 'Air conditioning and passenger information on screens', 'Forward view from 1st class behind the driving cab'] }
    ],
  bilder: ['Allegra with a regional train between Bernina Lagalb and Ospizio Bernina (2011)', 'Allegra 3504 in Chur (2022)', 'Allegra near Alp Grüm (2024)']
});
uebZug('rhb-allegra-stz', {
  typ: 'Four-car core-network multiple unit for the Chur S-Bahn',
  text: ['The five four-car Allegra 3101–3105 are derived from the dual-voltage Allegra. They run only on AC and have a single powered car.', 'The RhB uses them mainly for commuter traffic around Chur.'],
  kennzahlen: [['5', 'trains (3101–3105)'], ['180', 'seats'], ['100 km/h', 'top speed'], ['2013', 'in the timetable']],
  daten: { 'Bauart': 'electric low-floor multiple unit, 4 cars', 'Länge': '74.75 m over couplers', 'Breite': '2.65 m', 'Gewicht': '113 t empty', 'Leistung': '1400 kW maximum at the wheel', 'Höchstgeschwindigkeit': '100 km/h (technically 120 km/h)', 'Sitzplätze': '24 in 1st, 156 in 2nd class, plus 22 folding seats', 'Anzahl': '5 trains' },
  specNote: 'Values according to the Stadler data sheet SRhBSN0910d. The RhB advertising page gives 140 t without a clear reference and 1160 kW continuous power.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler built the five trains as a derivative of the dual-voltage Allegra. According to the manufacturer they have run in the timetable since 2013; some cars were built earlier.', 'The trains are named 3101 «Meta von Salis», 3102 «Richard La Nicca», 3103 «Hortensia von Gugelberg», 3104 «Achilles Schucan» and 3105 «Angelika Kauffmann». Despite the same designation ABe 4/16 they are not Capricorn.'] },
      { titel: 'Service and technology', p: ['A power car pulls two low-floor intermediate cars and a driving trailer. Two redundant traction chains with water-cooled IGBT converters deliver up to 1400 kW.', 'The RhB uses the trains for commuter traffic in the Chur area, for example on the S-Bahn Chur–Thusis. Photos also show them in the Engadine.'] },
      { titel: 'Facilities and accessibility', liste: ['180 seats: 24 in 1st and 156 in 2nd class, plus 22 folding seats', 'Low-floor entrance 480 mm, doors 1.2 m wide', 'Wheelchair area, multi-purpose room and closed wheelchair-accessible toilet', 'Air conditioning and passenger information on screens'] }
    ],
  bilder: ['Allegra 3104 as S-Bahn Chur–Thusis near Felsberg (2015)', 'Allegra 3101 in Samedan (2021)', '1st class in Allegra 3103 (2016)']
});
uebZug('rhb-alvra', {
  beiname: 'articulated trains 5701–5706',
  typ: 'Locomotive-hauled articulated trains for the Albula line',
  text: ['The six Alvra trains consist of permanently coupled articulated cars. They have no drive of their own; a locomotive pulls them.', 'Since 2016 they have run on the Albula line between Chur and St. Moritz. «Alvra» is the Romansh word for Albula.'],
  kennzahlen: [['6', 'trains (5701–5706)'], ['280', 'seats'], ['4', 'wheelchair spaces'], ['2016', 'in service']],
  daten: { 'Bauart': 'articulated train of 6 cars, plus a driving trailer', 'Antrieb': 'no drive of its own (locomotive)', 'Fahrzeugnummern': '5701–5706; driving trailers At 57801–57806', 'Sitzplätze': '63 in 1st, 217 in 2nd class, plus 13 folding seats', 'Anzahl': '6 trains' },
  specNote: 'Seat figures according to the RhB project page; they apply to the train described and change with extra cars.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The Alvra trains 5701–5706 consist of the articulated cars A 570, AB 572, B 573, B 574, Bi 576 and B 577. They are completed by the driving trailers At 57801–57806, with which the train reverses without the locomotive running round.', 'Extra cars are separate vehicles. Since 2024 the bicycle cars BD 56401–56406, converted from older driving trailers, have run with them.'] },
      { titel: 'Service and technology', p: ['The trains have run on the Albula line Chur–St. Moritz since 2016 and are hauled by an RhB main-line locomotive.', 'In an articulated train short cars are permanently joined. Some cars have a low-floor section for step-free boarding.'] },
      { titel: 'Facilities and accessibility', liste: ['280 seats: 63 in 1st and 217 in 2nd class, plus 13 folding seats', 'Low-floor entrances with sliding step, 4 wheelchair spaces and accessible toilets', 'Air conditioning and passenger information', 'Family compartment with play corner, leisure compartment for sports equipment and photo compartment with large windows'],
        tabelle: { kopf: ['Car', 'Function'], zeilen: [
          ['A 570', 'end car 1st class with toilets'], ['AB 572', 'car 1st and 2nd class'], ['B 573, B 574', '2nd class with space for bicycles or prams'],
          ['Bi 576', 'end car 2nd class, low floor, wheelchair area, accessible toilet and photo compartment'], ['B 577', '2nd class with family and leisure compartment and play corner'],
          ['At 578', 'driving trailer 1st class, low floor, wheelchair area and accessible toilet']] } }
    ],
  bilder: ['Alvra train between Filisur and Alvaneu (2023)', 'Inside an Alvra articulated train (2017)', 'Play corner in the leisure compartment (2024)', 'Driving trailer At 578 of an Alvra train (2018)']
});
uebZug('rhb-ge44ii', {
  typ: 'Electric main-line locomotive for passenger and freight trains',
  text: ['For decades the Ge 4/4 II shaped traffic on the RhB core network. SLM and BBC built the 23 locomotives in 1973 and 1984/85.', 'They haul passenger and freight trains. Individual locomotives have been withdrawn since 2019.'],
  kennzahlen: [['23', 'locomotives built (611–633)'], ['1700 kW', 'one-hour rating'], ['90 km/h', 'top speed'], ['1973', 'first series']],
  daten: { 'Bauart': 'electric locomotive', 'Länge': '12.96 m over buffers', 'Leistung': '1700 kW (one-hour rating)', 'Anzahl': '23 built' },
  specNote: 'The RhB advertising page gives 1700 kW as continuous power, Wikipedia as one-hour rating. Of the 23 locomotives several have already been scrapped (628, 619, 616, 613).',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SLM built the mechanical parts, BBC the electrical equipment. The first series 611–620 came in 1973, the second series 621–633 in 1984/85.', 'The locomotives bear names of Graubünden municipalities, for example 611 «Landquart» or 633 «Zuoz». Since April 2024 number 611 has again run in its original green.'] },
      { titel: 'Service and technology', p: ['The Ge 4/4 II haul regional and fast trains as well as freight trains on the RhB AC network, including the Arosa line. With the driving trailers BDt 1751 and 1752 they also run in push-pull service.', 'Four traction motors deliver 1700 kW. The locomotive is 12.96 m long, weighs 50 t and runs at up to 90 km/h. Since 2016 the locomotives have received the ZSI 127 train protection system and a dual brake. From 2019 numbers 628, 619, 616 and 613 were scrapped.'] },
      { titel: 'Facilities and accessibility', liste: ['Two driving cabs', 'Electric rheostatic brake', 'Push-pull service with driving trailers BDt 1751 and 1752', 'Since 2016: ZSI 127 train protection and dual brake'] }
    ],
  bilder: ['Ge 4/4 II 617 in Filisur (2022)', 'Ge 4/4 II 611 «Landquart» in green livery in Disentis/Mustér (2024)', 'Ge 4/4 II 622 (2024)']
});
uebZug('rhb-ge44iii', {
  typ: 'Electric main-line locomotive for the Albula and Vereina',
  text: ['The Ge 4/4 III are the most powerful main-line locomotives of the RhB. The twelve locomotives 641–652 came from 1993 to 1999; number 653 is a former MOB locomotive.', 'Almost all carry colourful advertising. They haul fast trains over the Albula and the car trains through the Vereina tunnel.'],
  kennzahlen: [['13', 'locomotives (641–653)'], ['2400 kW', 'continuous power'], ['100 km/h', 'top speed'], ['1993', 'first locomotive']],
  daten: { 'Bauart': 'electric locomotive with three-phase drive', 'Hersteller': 'SLM, ABB; 650–652 Adtranz', 'Fahrzeugnummern': '641–652, plus 653 (ex MOB 8003)', 'Länge': '16.00 m over buffers', 'Leistung': '2400 kW continuous' },
  specNote: 'Values according to the RhB advertising page and Wikipedia. Number 653 was built as MOB 8003; construction, purchase, rebuilding and entry into RhB service are separate events.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['From 1989 the RhB developed the locomotive with SLM and ABB to cope with the extra traffic after the Vereina tunnel opened. Number 641 ran from 7 December 1993, 642–652 followed by 1999 in three orders; 650–652 were supplied by Adtranz.', 'In 2019 the RhB bought the MOB locomotive 8003. It served as a template for the modernisation and runs as 653 «St. Moritz».'] },
      { titel: 'Service and technology', p: ['The locomotives haul fast trains over the Albula, the Glacier Express and the car trains through the Vereina tunnel. Three-phase traction motors with GTO converters deliver 2400 kW continuously.', 'The locomotive is 16.00 m long, weighs 62 t and runs at up to 100 km/h. Modernisation has been under way since 2016; number 644 was the first, with a dual brake, new bogies and parts for the ZSI 127 train protection system.'] },
      { titel: 'Facilities and accessibility', liste: ['Two driving cabs', 'Three-phase drive with four traction motors', 'Modernisation since 2016: dual brake, new bogies, ZSI 127', 'Advertising is the livery of individual locomotives, not a separate type'] }
    ],
  bilder: ['Ge 4/4 III 641 «Maienfeld» (2023)', 'Ge 4/4 III 644 advertising the world-record run (2023)', 'Ge 4/4 III 647 «Grüsch» in St. Moritz (2018)']
});
uebZug('rhb-panorama', {
  name: 'Panoramic and open observation cars',
  typ: 'Panoramic coaches of the Bernina Express and open observation cars',
  text: ['For the Bernina Express the RhB has its own panoramic coaches with large windows reaching into the roof. There are also open observation cars for the summer.', 'The coaches have no drive of their own; an Allegra or a locomotive pulls them.'],
  kennzahlen: [['2000', 'first panoramic coaches'], ['2006/07', 'coaches from Stadler'], ['1st and 2nd', 'class'], ['open', 'observation cars in summer']],
  daten: { 'Bauart': 'panoramic coaches and open observation cars', 'Fahrzeugnummern': 'Ap 1291–1293, 1301–1306; Bp 2502–2507, 2521–2526; Bps 2511–2515; open cars B 2091 ff. and 2111' },
  specNote: 'Numbers according to the Haribu coach register (as of September 2026). Seat numbers depend on the version and are not given without a current coach plan.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The first panoramic coaches were built in 2000. In 2006/07 Stadler delivered more 1st and 2nd class coaches. The service cars Bps 2511–2515 were partly created from older coaches.'],
        tabelle: { kopf: ['Group', 'Numbers', 'Built'], zeilen: [
          ['Panoramic coach 1st class', 'Ap 1291–1293', '2000'], ['Panoramic coach 1st class', 'Ap 1301–1306', '2006/07 (Stadler)'], ['Panoramic coach 2nd class', 'Bp 2502–2507', '2000'],
          ['Service car 2nd class', 'Bps 2511–2515', '2511 from coach 2501, others 2006/07'], ['Panoramic coach 2nd class', 'Bp 2521–2526', '2006/07 (Stadler)']] } },
      { titel: 'Service and technology', p: ['The Bernina Express runs from Chur over the Albula and the Bernina Pass to Tirano. The name refers to the train, not to a vehicle class; on the Bernina line an Allegra often pulls the coaches.', 'The open observation cars of groups 2091 ff. and 2111 were converted from older coaches. They run in summer, for example on the Bernina line and in the Rhine gorge.'] },
      { titel: 'Facilities and accessibility', liste: ['Large panoramic windows reaching into the roof', 'Service cars with their own layout', 'Open observation cars without windows for the summer', 'No drive of their own'] }
    ],
  bilder: ['Bernina Express with panoramic coaches (2018)', 'Panoramic coach at Alp Grüm', 'Open observation car in Pontresina']
});
uebZug('rhb-glacier', {
  name: 'Glacier Express coaches',
  typ: 'RhB panoramic and service cars for the Glacier Express',
  text: ['The Glacier Express runs from St. Moritz and Davos to Zermatt. The RhB provides its own panoramic and service cars, the MGB others.', 'Since 2018 there has been the Excellence Class coach Aps 1321.'],
  kennzahlen: [['6', 'panoramic coaches Ap 1310–1315'], ['7', 'panoramic coaches Bp 2531–2537'], ['3', 'service cars WRp 3830–3832'], ['2018', 'Excellence Class']],
  daten: { 'Bauart': 'panoramic coaches and service cars', 'Betreiber': 'RhB (Glacier Express together with the MGB)' },
  specNote: 'Numbers according to the Haribu registers. The MGB coaches are separate vehicles and not counted here.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The RhB share comprises the panoramic coaches Ap 1310–1315 and Bp 2531–2537 and the service cars WRp 3830–3832.', 'The Excellence Class coach Aps 1321 was created from Bp 2538 of 2009 and rebuilt in 2018. So it is the same coach, not an additional one.'] },
      { titel: 'Service and technology', p: ['The coaches run in the Glacier Express on the RhB and MGB networks. Because the MGB has rack sections, the coaches are equipped for them; according to a photo description the service car WRp 3832 has no braking cogwheel.', 'A Glacier Express made of two train sets is split at Disentis/Mustér because a lower train weight applies on the MGB rack sections.'] },
      { titel: 'Facilities and accessibility', liste: ['Panoramic windows reaching into the roof', 'Service cars WRp for catering on board', 'Excellence Class in Aps 1321', 'No drive of their own'] }
    ],
  bilder: ['Glacier Express in the Rhine gorge before Ilanz (2009)', 'Glacier Express service car WRp 3832 in Disentis/Mustér (2022)']
});
uebZug('rhb-ew', {
  name: 'Standard coaches',
  typ: 'RhB coaches for regional and fast trains',
  text: ['The standard coaches EW I to EW IV are the classic RhB passenger coaches. They were built from the 1960s in several generations.', 'Each generation has coaches of different length, class and state of rebuilding.'],
  kennzahlen: [['4', 'generations (EW I–IV)'], ['1968', 'EW I (AB 1541–1546)'], ['1975', 'EW II (AB 1561–1565)'], ['1983', 'EW III']],
  daten: { 'Bauart': 'passenger coaches with bogies', 'Fahrzeugnummern': 'Examples: AB 1541–1546 (EW I), AB 1561–1565 (EW II), A 1271–1272 and B 2461–2468 (EW III), A 1273–1275 and B 2491–2497 (EW IV)' },
  specNote: 'The registers mainly give numbers, years built, bogies and brakes. Seats and facilities depend on the individual coach and are therefore not given.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The families EW I to EW IV are development groups. Examples from the register:'],
        tabelle: { kopf: ['Generation', 'Examples', 'Built', 'Bogie'], zeilen: [
          ['EW I', 'AB 1541–1546', '1968', 'SWP 68'], ['EW II', 'A 1265–1270, AB 1561–1565', '1975 (AB 1561–1565)', 'SWP 74'],
          ['EW III', 'A 1271–1272, B 2461–2468', '1983', '–'], ['EW IV', 'A 1273–1275, A 1282–1283, B 2391–2393, B 2491–2497', '–', 'SIG 90']] } },
      { titel: 'Service and technology', p: ['The standard coaches run in locomotive-hauled regional and fast trains on the whole network, and on the Bernina line also behind the Allegra. The AB 1541–1546 have a vacuum-controlled air brake: a vacuum signal controls the brake, the braking force is produced by compressed air.', 'Some EW III temporarily carried five-digit numbers of the 531 and 541 series and later got their old numbers back. Some EW IV carry the «Arosa Bärenland» livery.'] },
      { titel: 'Facilities and accessibility', liste: ['Coaches of 1st class (A), 2nd class (B) and both classes (AB)', 'Facilities differ by generation and rebuild', 'Some EW I were rebuilt in 2002', 'No drive of their own'] }
    ],
  bilder: ['Train 1621 with Allegra 3515 and passenger coaches on the Bernina line (2017)']
});
uebZug('rhb-steuerwagen', {
  name: 'Driving trailers', beiname: 'BDt, Bt and At',
  typ: 'Driving trailers for locomotive push-pull trains',
  text: ['With a driving trailer a locomotive-hauled train can reverse without the locomotive running round. The driver then controls the locomotive from the trailer’s cab.', 'The RhB has several families: the NEVA driving trailers BDt, the Bt 52801–52808 from Stadler, the driving trailers of the Alvra trains and those of the car trains.'],
  kennzahlen: [['8', 'Bt 52801–52808 (Stadler 2018)'], ['6', 'At 57801–57806 (Alvra)'], ['2', 'BDt 1751–1752 (NEVA)'], ['4', 'BDt of the car trains']],
  daten: { 'Bauart': 'driving trailer without own drive', 'Fahrzeugnummern': 'BDt 1751–1752, Bt 52801–52808, At 57801–57806, BDt 1721–1723 and 1731' },
  specNote: 'According to the Haribu driving-trailer register (as of 11 September 2026). The driving trailers of the Allegra and Capricorn units belong to those trains.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The NEVA driving trailers BDt 1753–1758 were converted in 2024 into the bicycle cars BD 56401–56406.'],
        tabelle: { kopf: ['Family', 'Numbers', 'Note'], zeilen: [
          ['NEVA', 'BDt 1751–1752', 'for Ge 4/4 II and multiple units'], ['Universal', 'Bt 52801–52808', 'Stadler 2018'], ['Alvra', 'At 57801–57806', 'for the articulated trains 5701–5706'],
          ['Vereina car trains', 'BDt 1721–1723, 1731', 'for car loading'], ['Be 4/4 push-pull train', 'ABDt 1716', 'stored']] } },
      { titel: 'Service and technology', p: ['The driving trailer has a cab but no traction motor. The power comes from the locomotive at the other end of the train.', 'According to the register the BDt 1751 and 1752 are suitable for the Ge 4/4 II and multiple units. Such an approval applies only to the combination named.'] },
      { titel: 'Facilities and accessibility', liste: ['Driving cab at one end', 'BDt: 2nd class with luggage compartment', 'At of the Alvra trains: 1st class, low floor, wheelchair area and accessible toilet', 'No drive of their own'] }
    ],
  bilder: ['Stadler driving trailer Bt 528', 'NEVA driving trailer BDt 1755 in Chur (2015)']
});
uebZug('rhb-gastro', {
  name: 'Dining and saloon cars', beiname: 'WR and Pullman',
  typ: 'RhB dining, bar, Pullman and saloon cars',
  text: ['The RhB has historic dining cars, bar cars and the Pullman cars of the «Alpine Classic Pullman Express». They run in charter trains and on special trips.', 'Some dining cars date from 1929 to 1931.'],
  kennzahlen: [['1929', 'oldest dining cars'], ['4', 'Pullman cars As 1141–1144'], ['3', 'dining cars WR 3810–3812'], ['2', 'bar cars WR-S 3820–3821']],
  daten: { 'Bauart': 'dining, bar and saloon cars' },
  specNote: 'According to the Haribu dining-car register (as of 13 December 2025). Facilities apply to the individual car; whether a car is available for charter today is not stated.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['According to the register the As 1154 is on loan to the Deutsches Museum.'],
        tabelle: { kopf: ['Car', 'Built', 'Note'], zeilen: [
          ['WR 3810–3812', '1929/30', 'historic dining cars'], ['WR 3813', '1931', 'converted from A 1211'], ['WR 3815', '1984', 'dining car'],
          ['WR-S 3820', '1928', 'piano bar, rebuilt 2010 (formerly WR-S 3814)'], ['WR-S 3821', '1929', '«Stiva Retica», rebuilt 1993'],
          ['As 1141–1144', '1931', 'Pullman cars'], ['As 1161', '1929', 'saloon car']] } },
      { titel: 'Service and technology', p: ['The Pullman cars As 1141–1144 run in the «Alpine Classic Pullman Express», for example in 2024 with the historic Ge 4/4 I 605. The dining cars run in special and charter trains.', 'The Glacier Express service cars WRp 3830–3832 are younger vehicles and not historic dining cars.'] },
      { titel: 'Facilities and accessibility', liste: ['Kitchen and dining room in the WR', 'Piano bar in WR-S 3820, «Stiva Retica» bar in WR-S 3821', '1st class saloon compartments in the Pullman cars', 'No drive of their own'] }
    ],
  bilder: ['Pullman car As 1141 in Pontresina (2011)', 'Dining car WR 3810 (2009)', 'Inside dining car WR 3810 (2014)']
});
uebZug('rhb-vereina', {
  name: 'Car trains',
  typ: 'Car shuttle through the Vereina tunnel',
  text: ['Since 1999 the RhB has carried cars through the Vereina tunnel between Klosters Selfranga and Sagliains in the Lower Engadine.', 'The car trains consist of special transport wagons onto which cars drive themselves, and of driving trailers.'],
  kennzahlen: [['1999', 'opening'], ['19 km', 'tunnel length'], ['4', 'driving trailers BDt'], ['2', 'loading stations']],
  daten: { 'Bauart': 'car transport wagons and driving trailers', 'Fahrzeugnummern': 'Skl-tv 8421–8499 (older), Slp-tvw 71201 ff. and 71301 ff., Slp-tv 71401 ff.; BDt 1721–1723, 1731' },
  specNote: 'According to the Haribu registers. The newer wagon series also contain entries without a year built; they are not counted here as fully delivered.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['For the car shuttle through the Vereina tunnel, opened in 1999, the RhB bought special wagons. The older loading and transport wagons are called Skl-tv (groups 8421 to 8499), newer loading units Slp-tvw 71201 ff. and 71301 ff. as well as Slp-tv 71401 ff.', 'The driving trailers BDt 1721–1723 and 1731 belong to the car trains.'] },
      { titel: 'Service and technology', p: ['The car trains shuttle between Klosters Selfranga and Sagliains. At the loading stations the cars drive up ramps onto the wagons and off again at the other end.', 'A locomotive, usually a Ge 4/4 III, pulls or pushes the train; at the other end there is a driving trailer.'] },
      { titel: 'Facilities and accessibility', liste: ['Flat wagons onto which the cars drive', 'Ramps at the loading stations Klosters Selfranga and Sagliains', 'Driving trailer with cab', 'Travellers stay in their cars during the journey'] }
    ],
  bilder: ['Inside a transport wagon of the Vereina car train', 'Car train in Sagliains (2014)']
});
uebZug('rhb-gepaeckwagen', {
  name: 'Luggage, bicycle and heating cars',
  typ: 'Cars for luggage, bicycles and train heating',
  text: ['The RhB has its own cars for luggage, bicycles and heating the trains. Most were converted from older passenger coaches.', 'A heating car supplies energy to the train but does not move on its own.'],
  kennzahlen: [['6', 'bicycle cars BD 56401–56406 (2024)'], ['8', 'bicycle cars WS'], ['3', 'heating cars DS'], ['2024', 'newest conversion']],
  daten: { 'Bauart': 'luggage, bicycle and heating cars' },
  specNote: 'According to the Haribu registers. The year of conversion is not the year the original coach was built.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The BD 2471–2474 are converted EW II, the BD 2475 is a converted EW IV, the BD 2481 was created from DZ 4233. The six BD 56401–56406 were converted in 2024 from the NEVA driving trailers BDt 1753–1758 and run as bicycle cars in the Alvra trains.', 'The bicycle cars WS 3911–3914, 3921–3922 and 3931–3932 are also converted passenger coaches.'] },
      { titel: 'Service and technology', p: ['A BD has 2nd class seats and a luggage compartment. The WS are fitted out for bicycles.', 'The heating cars DS 4220, 4222 and 4226 supply energy for heating the trains. They have no traction drive of their own.'] },
      { titel: 'Facilities and accessibility', liste: ['Luggage compartment (BD)', 'Spaces for bicycles (WS)', 'Energy for train heating (DS)', 'No drive of their own'] }
    ],
  bilder: ['Inside bicycle car WS 3913 (2014)']
});

/* ---------- freight ---------- */
uebZug('rhb-haik', {
  beiname: 'sliding-wall wagons',
  typ: 'Four-axle sliding-wall wagons for general cargo',
  text: ['The Haik wagons have large sliding side walls. This makes them quick to load and unload.', 'Some groups are insulated, heated or refrigerated, for example for food and drinks.'],
  kennzahlen: [['26 t', 'payload (5101–5135)'], ['30 t', 'payload (from 5136)'], ['14.7 m', 'length'], ['1970', 'first wagons']],
  daten: { 'Bauart': 'four-axle sliding-wall wagon', 'Fahrzeugnummern': '5101–5135 (Haik-v, Haik-vy), 5136–5140 and 5171–5172; insulated wagons 5161 ff.', 'Länge': '14.70 m over buffers', 'Gewicht': '13.2–17.3 t empty', 'Nutzlast': '26 or 30 t' },
  specNote: 'Values according to the RhB freight-wagon page. Only certain wagons have insulation, floor heating or a cooling unit; the individual wagon is decisive.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The RhB describes two main groups plus insulated and temperature-controlled wagons.'],
        tabelle: { kopf: ['Group', 'In service', 'Empty weight', 'Payload', 'Length'], zeilen: [
          ['5101–5135 (Haik-v, Haik-vy)', '1970/80', '13.2–15.5 t', '26 t', '14.70 m'], ['5136–5140, 5171–5172', '1992', '16.1–17.3 t', '30 t', '14.67 m'],
          ['5161 ff. (insulated, temperature-controlled)', '–', '–', '–', '–']] } },
      { titel: 'Service and technology', p: ['The wagons bring general cargo, drinks and food into the valleys of Graubünden. Many carry a customer’s advertising; this does not mean a particular cooling technology.', 'Some former Haik wagons were converted into container flat wagons.'] },
      { titel: 'Facilities and accessibility', liste: ['Large sliding side walls', 'Insulated wagons with floor heating or cooling unit (5161 ff.)', 'Four axles in two bogies'] }
    ],
  bilder: ['Sliding-wall wagon Haik-v 5134 in Zernez (2015)', 'Haiqq-tyz 5172 in Ilanz (2013)']
});
uebZug('rhb-uac', {
  beiname: 'cement wagons',
  typ: 'Four-axle powder wagons for cement',
  text: ['The Uac 7991–8000 carry cement and other powdery goods in closed tanks. They are unloaded with compressed air.', 'They entered service in 1991.'],
  kennzahlen: [['10', 'wagons (7991–8000)'], ['34 t', 'payload'], ['34 m³', 'tank'], ['1991', 'in service']],
  daten: { 'Bauart': 'four-axle powder wagon', 'Länge': '12.54 m over buffers', 'Gewicht': '16.8 t empty' },
  specNote: '34 t and 34 m³ are two different quantities; how much a load weighs depends on its density.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The ten Uac 7991–8000 entered service in 1991. An older two-axle generation is still represented in the register by the Uce 8017 of 1959, which went on loan to the Swiss Museum of Transport in 2023.'] },
      { titel: 'Service and technology', p: ['The cement travels in closed tanks and is unloaded with compressed air, i.e. blown out of the tank.', 'The wagon is 12.54 m long, weighs 16.8 t empty and carries up to 34 t.'] },
      { titel: 'Facilities and accessibility', liste: ['Closed tanks for powdery goods', 'Unloading with compressed air', 'Four axles'] }
    ]
});
uebZug('rhb-za', {
  beiname: 'tank wagons',
  typ: 'Four-axle tank wagons for mineral oil',
  text: ['The Za tank wagons bring heating oil and fuel to Graubünden. The RhB has several groups with 42 or 52 m³ tanks.', 'On some older wagons the tank was renewed.'],
  kennzahlen: [['52 m³', 'largest tank'], ['42 m³', 'smaller tank'], ['1973', 'oldest basic series'], ['2005', 'youngest group']],
  daten: { 'Bauart': 'four-axle tank wagon', 'Fahrzeugnummern': '8105–8113, 8121–8130, 8131–8140, 8141–8150 (original groups)', 'Volumen': '42 or 52 m³' },
  specNote: 'Series comparison according to the RhB freight-wagon page, not a list of the wagons in use today. Tank volume, filling level and product density are different quantities.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The more recent register lists only parts of these series.'],
        tabelle: { kopf: ['Group', 'Built / in service', 'Tank', 'Length'], zeilen: [
          ['8105–8113', '2002/03', '42 m³', '13.88 m'], ['8121–8130', '1998', '52 m³', '12.54 m'],
          ['8131–8140', '1973, partly new tank 1996/97', '42 m³', '11.04 m'], ['8141–8150', '2004/05', '52 m³', '12.54 m']] } },
      { titel: 'Service and technology', p: ['The wagons supply Graubünden with mineral oil. Some have a vapour return line that brings the vapours back during filling.', 'A new tank on an older underframe does not make a new wagon; the year of the underframe and of the tank are separate data.'] },
      { titel: 'Facilities and accessibility', liste: ['Tank of 42 or 52 m³', 'Vapour return line on some wagons', 'Four axles'] }
    ],
  bilder: ['RhB tank wagon in Samedan (2006)']
});
uebZug('rhb-fac', {
  beiname: 'bulk wagons',
  typ: 'Four-axle bulk wagons with gravity unloading',
  text: ['The Fac wagons carry gravel, chippings and other bulk goods in hoppers. They are unloaded downwards; the amount can be dosed.', 'The former Fau tipping wagons now serve as spent-ballast wagons in track work.'],
  kennzahlen: [['21–22 m³', 'hopper'], ['34 t', 'payload (up to)'], ['1968', 'oldest group'], ['1993', 'youngest group']],
  daten: { 'Bauart': 'four-axle bulk wagon', 'Nutzlast': '33 or 34 t depending on group' },
  specNote: 'Values according to the RhB freight-wagon page and the Haribu F register.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The register contains the older groups 8701–8712 of 1968/71 and the younger 8726 ff. of 1988/93.', 'The former Fau 8761–8770 with tipping function are now listed in the service-wagon register as Xa-u for spent ballast.'] },
      { titel: 'Service and technology', p: ['The hoppers hold 21 to 22 m³. Flaps open at the bottom, and the load flows out by gravity in measured amounts.', 'Depending on the group the wagons carry 33 or 34 t.'] },
      { titel: 'Facilities and accessibility', liste: ['Hopper of 21–22 m³', 'Dosed gravity unloading', 'Four axles'] }
    ],
  bilder: ['Former Fau tipping wagon 8769 in Thusis (2015)']
});
uebZug('rhb-flachwagen', {
  name: 'Flat and stanchion wagons',
  typ: 'Flat wagons for machines, timber, steel and containers',
  text: ['The RhB flat and stanchion wagons carry construction machines, steel, building materials, timber and containers. Stanchions support the load at the sides.', 'The newest are the versatile Re-t 65401–65410 of 2010.'],
  kennzahlen: [['46 t', 'payload Re-t'], ['16.5 m', 'length'], ['10', 'Re-t 65401–65410'], ['2010', 'Re-t in service']],
  daten: { 'Bauart': 'four-axle flat and stanchion wagons' },
  specNote: 'Examples according to the RhB flat-wagon page, not a full count. For the Sgp the RhB pages give 19.5 and 20 t empty weight; they also differ on the side-wall height of the Re-t.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The Re-t 65401–65410 entered service in 2010, the Sgp 7601–7610 in 2008.'],
        tabelle: { kopf: ['Group', 'Length over buffers', 'Payload'], zeilen: [
          ['R 8202–8218', '16.54 m', '33 t'], ['R 8241–8250', '16.14 m', '35 t'], ['R 8261–8270', '16.14 m', '35 t'], ['R 8371–8375', '16.54 m', '42 t'],
          ['R 8381–8385', '16.54 m', '43 t'], ['Re-t 65401–65410', '16.54 m', '46 t'], ['Sgp 7601–7610', '16.54 m', '44 t']] } },
      { titel: 'Service and technology', p: ['The Re-t weigh 18 t empty and offer 15.5 m loading length. They have a larch-wood floor, swivelling and plug-in side walls, stanchions and container spigots.', 'The Sp-w are fitted out for round timber, with fixed side stanchions and straps. The Sgp carry timber or containers.'] },
      { titel: 'Facilities and accessibility', liste: ['Stanchions and straps for load securing', 'Container spigots (Re-t, Sgp)', 'Larch-wood floor (Re-t)', 'Four axles'] }
    ]
});
uebZug('rhb-acts', {
  name: 'ACTS wagons', beiname: 'Sl and Rp',
  typ: 'Carrier wagons for roll-off containers (ACTS)',
  text: ['ACTS is a system with which lorries can roll containers directly off the rail wagon. This way the load gets from the train onto the road without a crane.', 'For this the RhB has the Sl 7751–7771 and the Rp 65301–65305.'],
  kennzahlen: [['21', 'Sl 7751–7771'], ['44 t', 'payload Sl'], ['46.5 t', 'payload Rp'], ['2000', 'Sl in service']],
  daten: { 'Bauart': 'four-axle carrier wagons for roll-off containers', 'Länge': 'Sl 16.04 m, Rp 16.54 m', 'Gewicht': 'Sl 16 t, Rp 17.5 t (empty)', 'Nutzlast': 'Sl 44 t, Rp 46.5 t' },
  specNote: 'Values according to the RhB page on roll-off containers. The current register lists the Rp 65301–65304; the original series goes up to 65305.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The Sl 7751–7771 entered service in 2000/01, the Rp 65301–65305 in 2008. Older flat wagons such as 8202–8218 and 8371–8375 also carry ACTS containers.'] },
      { titel: 'Service and technology', p: ['A lorry with a hook-lift pulls the container off the wagon via a swivelling frame. Roll-off rails, stops and locks hold the containers during the journey.', 'Which containers a wagon may carry depends on the individual wagon.'] },
      { titel: 'Facilities and accessibility', liste: ['Roll-off rails, stops and locks', 'Swivelling frames for rolling off', 'Four axles'] }
    ],
  bilder: ['ACTS carrier wagon Sl 7769 in Ilanz (2013)', 'ACTS carrier wagon Sl 7753 (2024)']
});
uebZug('rhb-container', {
  name: 'Container carrier wagons', beiname: 'Sb and Lb',
  typ: 'Carrier wagons for containers and swap bodies',
  text: ['For containers and swap bodies the RhB has four-axle wagons with a lowered centre and short two-axle carrier wagons. The low loading floor makes better use of the tight metre-gauge loading gauge.', 'Many wagons were converted from older freight wagons.'],
  kennzahlen: [['15.9 m', 'length Sb'], ['36 t', 'payload (up to)'], ['615 mm', 'loading height Lb-v'], ['24 t', 'payload Lb-v']],
  daten: { 'Bauart': 'container carrier wagons', 'Fahrzeugnummern': 'Sb-v 7716–7730, Sb 65655–65689, Lb-v (rebuilt 1997–2000); further conversions Sb-x 65601–65603, Sb-v 65691–65694' },
  specNote: 'Values according to the RhB page on swap bodies. Some of the 65665 ff. were rebuilt as Rlp 65701–65710; the older series is therefore not today’s fleet.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The RhB compares three groups of low carrier wagons and the short Lb-v.'],
        tabelle: { kopf: ['Group', 'Length', 'Payload', 'Note'], zeilen: [
          ['Sb-v 7716–7730, Sb 65655–65689', '15.91 m', '30 or 36 t', 'lowered centre'],
          ['Lb-v', '9.14 m', '24 t', 'two axles, underframe built 1963, rebuilt 1997–2000']] } },
      { titel: 'Service and technology', p: ['In the lowered centre the containers sit lower and so fit under the limited metre-gauge loading gauge.', 'The two-axle Lb-v weigh 5.7 t empty, are 9.14 m long and carry 24 t. Their loading floor is only 615 mm above the rail.'] },
      { titel: 'Facilities and accessibility', liste: ['Container spigots', 'Lowered loading floor', 'Lb-v with two, Sb with four axles'] }
    ],
  bilder: ['Container carrier wagon Sb-v 7729 in Ilanz (2013)', 'Two-axle carrier wagon Lb 7858 with container (2026)', 'Container carrier wagon Sb 65675 in Ilanz (2013)']
});
uebZug('rhb-spezialtransport', {
  name: 'Special transport wagons', beiname: 'Uaa-z and Xak',
  typ: 'Wagons for heavy and tall loads',
  text: ['For heavy or tall loads such as large machines the RhB has special wagons. The Uaa-z 8251 can be assembled from loading bridges and bogies.', 'The platform wagon Xak 93502 has a movable ramp.'],
  kennzahlen: [['97 t', 'largest Uaa-z configuration'], ['417 mm', 'loading height Uaa-z'], ['27 t', 'payload Xak'], ['3.0 m', 'loading width Uaa-z']],
  daten: { 'Bauart': 'heavy-load wagons and platform wagon', 'Fahrzeugnummern': 'Uaa-z 8251; Xak 93502 (formerly 91501, from Uaik 8301)' },
  specNote: 'Empty weight and capacity of the Uaa-z depend on the configuration and must not be mixed. According to the register the 97 t configuration is not in service.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The Uaa-z 8251 dates from the 1950s; the sources give 1956 and 1958. With a private heavy-transport bridge and four three-axle bogies it carries up to 97 t.', 'The platform wagon was first called Uaik 8301, later 91501 and today Xak 93502.'] },
      { titel: 'Service and technology', p: ['The RhB loading bridge of the Uaa-z weighs 10.5 t with cross beams, offers 3.0 m loading width and lies only 417 mm above the rail. In the usual version the wagon is 15.5 m long and carries 42 t.', 'The platform wagon has four axles, weighs 14.4 t empty, is 12.66 m long and carries 27 t. Machines drive on from the front or the side via a movable ramp.'] },
      { titel: 'Facilities and accessibility', liste: ['Combinable loading bridges and bogies (Uaa-z)', 'Very low loading floor', 'Movable ramp (Xak)'] }
    ]
});

/* ---------- shunting ---------- */
uebZug('rhb-geaf22', {
  typ: 'Shunting locomotive with overhead line and battery',
  text: ['The seven Stadler Geaf 2/2 shunt electrically under the overhead line and with the battery on tracks without overhead line. The battery recharges under the overhead line.', 'They entered service in 2020.'],
  kennzahlen: [['7', 'locomotives (20601–20607)'], ['700 kW', 'power (overhead line)'], ['93 kWh', 'battery'], ['2020', 'in service']],
  daten: { 'Bauart': 'two-axle shunting locomotive with overhead line and battery', 'Stromsystem': '11 kV 16.7 Hz and battery', 'Länge': '8.41 m over central buffers (9.61 m with shunting coupler)', 'Leistung': '700 kW under the overhead line, 200 kW on battery', 'Höchstgeschwindigkeit': '80 km/h (overhead line), 40 km/h (battery)' },
  specNote: 'Values according to the Stadler data sheet LRHB0720d, weight according to Wikipedia. 93 kWh is the energy stored in the battery, 200 kW the power; a fixed range cannot be calculated from this.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The RhB ordered the seven locomotives from Stadler in September 2018; they entered service in 2020. They are based among other places in Landquart, Chur, Ilanz, Thusis, Davos Platz and Zernez.'] },
      { titel: 'Service and technology', p: ['Under the overhead line the locomotive delivers up to 700 kW and runs at up to 80 km/h. With the lithium-ion battery (93 kWh) it is 200 kW and 40 km/h, enough for shunting on tracks without overhead line.', 'The locomotive is short and fits well into tight station tracks. It can brake wagons with vacuum and with air brakes.'] },
      { titel: 'Facilities and accessibility', liste: ['Central driving cab, operation seated or standing', 'Radio remote control', 'Train heating line 320 V', 'ZSI 127 train protection'] }
    ],
  bilder: ['Geaf 2/2 20601 in Chur (2020)', 'Geaf 2/2 20603 (2025)']
});
uebZug('rhb-ge33', {
  beiname: '214 and 215',
  typ: 'Three-axle electric shunting locomotive',
  text: ['The two Ge 3/3 of 1984 are electric shunting locomotives with three driven axles. They work in Samedan and Chur.', 'They have no ZSI 127 train protection.'],
  kennzahlen: [['2', 'locomotives (214, 215)'], ['1984', 'built'], ['3', 'driven axles'], ['11 kV', 'overhead line']],
  daten: { 'Bauart': 'three-axle electric shunting locomotive' },
  specNote: 'According to the Haribu traction register (as of September 2026). The sources checked do not give power or weight.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The two locomotives 214 and 215 were built in 1984 as a separate three-axle type for shunting.'] },
      { titel: 'Service and technology', p: ['According to the register 214 works in Samedan and 215 in Chur. Neither has ZSI 127 train protection, which restricts runs on the line.'] },
      { titel: 'Facilities and accessibility', liste: ['Three driven axles', 'Pantograph for 11 kV', 'No ZSI 127 train protection'] }
    ],
  bilder: ['Ge 3/3 215 in Chur (2015)', 'Ge 3/3 214 (2022)']
});
uebZug('rhb-gmf44-242', {
  beiname: '242 and 243',
  typ: 'Diesel shunting locomotive of 1991',
  text: ['The two Gmf 4/4 of 1991 are diesel locomotives for shunting on the core network.', 'They are a separate type and not to be confused with the younger Schalke Gmf 4/4 II.'],
  kennzahlen: [['2', 'locomotives (242, 243)'], ['1991', 'built'], ['4', 'driven axles'], ['diesel', 'drive']],
  daten: { 'Bauart': 'four-axle diesel locomotive' },
  specNote: 'According to the Haribu traction register; the sources checked do not give technical values.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The locomotives 242 and 243 were built in 1991 as a separate type. Despite the similar designation they have nothing in common with the Gmf 4/4 II built in 2013.'] },
      { titel: 'Service and technology', p: ['According to the register they are used for shunting on the core network. Photos show them in Klosters Platz, Landquart and Davos.'] },
      { titel: 'Facilities and accessibility', liste: ['Diesel drive, independent of the overhead line', 'Remote control (letter f)', 'Four driven axles'] }
    ],
  bilder: ['Gmf 4/4 242 in Klosters Platz (2019)', 'Gmf 4/4 243 in Davos (2024)']
});
uebZug('rhb-taf22', {
  typ: 'Small road-rail shunting units for workshops',
  text: ['The six Taf 2/2 are small road-rail vehicles. They move vehicles in workshops and depots.', 'They work among other places in Poschiavo and Landquart.'],
  kennzahlen: [['6', 'units'], ['2010–2023', 'years built'], ['2', 'axles'], ['Landquart', 'main workshop']],
  daten: { 'Bauart': 'road-rail shunting unit' },
  specNote: 'According to the Haribu traction register; manufacturer and technical values are not given there.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The six units were built between 2010 and 2023.'] },
      { titel: 'Service and technology', p: ['According to the register they work among other places in Poschiavo, at the underfloor wheel lathe in Landquart and in the Landquart depot. They move vehicles in the workshop and do not run in passenger service.'] },
      { titel: 'Facilities and accessibility', liste: ['Wheels for rail and road', 'Battery drive (letter a)', 'Remote control (letter f)'] }
    ]
});

/* ---------- infrastructure ---------- */
uebZug('rhb-gmf44ii', {
  typ: 'Schalke diesel-electric locomotive for works trains and snow clearing',
  text: ['The four Schalke Gmf 4/4 II haul heavy works trains, rescue broken-down trains and push the snow blowers in winter. They also run when the overhead line is switched off.', 'They carry the yellow livery of the RhB infrastructure.'],
  kennzahlen: [['4', 'locomotives'], ['1800 kW', 'power'], ['100 km/h', 'top speed'], ['2013', 'built']],
  daten: { 'Bauart': 'diesel-electric locomotive', 'Fahrzeugnummern': '23401–23404 (until 2015: 28701–28704)', 'Länge': '16.69 m' },
  specNote: 'Values according to Schalke and Wikipedia. The starting tractive effort applies at an adhesion coefficient of 0.33.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The RhB ordered the locomotives in 2009; Schalke built them in 2013 and they entered service in 2014. Until 2015 they carried the numbers 28701–28704.', 'They are named 23401 «Surselva», 23402 «Engadin», 23403 «Albula» and 23404 «Bernina».'] },
      { titel: 'Service and technology', p: ['The locomotives haul heavy works trains, help in breakdowns and work with the snow blowers on the whole network in winter. Up to three locomotives can be controlled together.', 'They are built for curves of 40 m radius and temperatures from −35 to +40 °C. Four different braking systems make them suitable for mixed trains.'] },
      { titel: 'Facilities and accessibility', liste: ['Diesel-electric drive, independent of the overhead line', 'Four braking systems', 'Multiple-unit control of up to three locomotives', 'Yellow infrastructure livery'] }
    ],
  bilder: ['Gmf 4/4 II 23403', 'Gmf 4/4 II 23402 with snow blower 95403']
});
uebZug('rhb-gem44', {
  beiname: '801 and 802',
  typ: 'Electro-diesel locomotive for the Bernina line',
  text: ['The two Gem 4/4 run electrically under the DC overhead line of the Bernina line and on diesel where there is no suitable overhead line.', 'They are named 801 «Steinbock» (ibex) and 802 «Murmeltier» (marmot).'],
  kennzahlen: [['2', 'locomotives'], ['1968', 'to the RhB'], ['2 × 709 kW', 'diesel after rebuild'], ['65 km/h', 'top speed']],
  daten: { 'Bauart': 'electro-diesel locomotive (electric and diesel)', 'Leistung': '680 kW electric; diesel 2 × 709 kW (after rebuild)' },
  specNote: 'Values according to Wikipedia. Built in 1966, delivered to the RhB in 1968. Electric and diesel power are separate operating modes and must not be added.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SLM, SWS, BBC and MFO built the two locomotives; they came to the RhB in 1968. After a fire, number 801 was renewed in Landquart from 2000, and 802 followed in 2002/03.', 'In the rebuild they received longer cabs, new Cummins diesel engines of 709 kW each, new control equipment and air conditioning in the cab.'] },
      { titel: 'Service and technology', p: ['The locomotives are based in Pontresina and Poschiavo. They haul works trains and work with snow blowers in winter; earlier they also hauled passenger trains on the Bernina line.', 'Electrically they deliver 680 kW. With their diesel engines they also run on the core network, whose AC supply they cannot use.'] },
      { titel: 'Facilities and accessibility', liste: ['Pantograph for 1000 V DC', 'Two diesel engines', 'Air-conditioned cabs (after the rebuild)'] }
    ],
  bilder: ['Gem 4/4 hauling a regional train to Tirano (2009)', 'Side of Gem 4/4 801 with the ibex (2014)', 'Side of Gem 4/4 802 with the marmot (2014)']
});
uebZug('rhb-tm', {
  name: 'Tm 2/2 and Tmf 2/2', beiname: 'tractors',
  typ: 'Diesel tractors for shunting and works trains',
  text: ['For shunting and small works trains the RhB has several families of two-axle diesel tractors from RACO, Windhoff and SCHÖMA.', 'To replace some of them, the RhB ordered eight new service vehicles from Windhoff in November 2025.'],
  kennzahlen: [['10', 'Tm 111–120 (SCHÖMA)'], ['6', 'Tmf 85–90 (RACO)'], ['4', 'Tm 81–84 (RACO)'], ['4', 'Tm 95–98 (Windhoff)']],
  daten: { 'Bauart': 'two-axle diesel tractors' },
  specNote: 'Numbers according to the Pospichal locomotive statistics. The ordered successors do not prove that the old tractors have already been withdrawn; the RhB named them as existing fleet in November 2025.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Older RACO tractors carried the numbers 56–67 and later partly 15–26.'],
        tabelle: { kopf: ['Numbers', 'Manufacturer', 'Years built'], zeilen: [
          ['Tm 81–84', 'RACO', '1985'], ['Tmf 85–90', 'RACO', '1991–1994'], ['Tm 91–93', 'various', '–'], ['Tm 95–98', 'Windhoff', '1998/99'], ['Tm 111–120', 'SCHÖMA', '2002–2006']] } },
      { titel: 'Service and technology', p: ['The tractors shunt in stations and haul small construction and maintenance trains. The Tmf also have remote control.', 'To replace the Tm 81–84 and 95–98 the RhB ordered eight Windhoff vehicles in November 2025; they are to enter service in 2029.'] },
      { titel: 'Facilities and accessibility', liste: ['Diesel drive', 'Two axles', 'Remote control on the Tmf'] }
    ],
  bilder: ['SCHÖMA Tm 2/2 115 in Ilanz (2014)', 'Tm 2/2 84 in Langwies (2015)', 'Tmf 2/2 87 in Thusis (2013)']
});
uebZug('rhb-tieflade', {
  beiname: '23411–23415 low-loaders',
  typ: 'New low-loading vehicles for construction-site logistics',
  text: ['Since November 2025 the RhB has been receiving five self-propelled low-loading vehicles Xmf 4/4 23411–23415. There are also eleven low-loading wagons Xa 93511–93521.', 'With low loading floors and container solutions, logistics on construction sites is to become more efficient.'],
  kennzahlen: [['5', 'low-loading vehicles'], ['11', 'low-loading wagons'], ['2025', 'first vehicles'], ['2026', 'low-loading wagons']],
  daten: { 'Bauart': 'self-propelled low-loading vehicles and low-loading wagons' },
  specNote: 'According to the RhB network condition report 2025 and the registers. Manufacturer and technical data are not established in the sources checked; not every number has been accepted yet.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['According to the network condition report 2025, five low-loading vehicles arrive from November 2025 and eleven low-loading wagons from the first quarter of 2026. The register lists them as Xmf 4/4 23411–23415 and Xa 93511–93521.'] },
      { titel: 'Service and technology', p: ['The vehicles bring material to construction sites. The low loading floors and system containers make loading and unloading easier.', 'This purchase is separate from the eight Windhoff vehicles due in 2029.'] },
      { titel: 'Facilities and accessibility', liste: ['Low loading floor', 'Own drive (Xmf)', 'Remote control (letter f)'] }
    ]
});
uebZug('rhb-windhoff', {
  beiname: 'Windhoff (ordered)',
  typ: 'Ordered service vehicles with crane, entry into service planned for 2029',
  text: ['In November 2025 the RhB ordered eight identical service vehicles from Windhoff for 57 million francs. They are to enter service in 2029.', 'The vehicles have a crane and can be fitted with a winch, grab, work basket, snow cutter or suction excavator.'],
  kennzahlen: [['8', 'vehicles ordered'], ['500 kW', 'continuous power at the wheel'], ['80 km/h', 'top speed'], ['2029', 'planned entry into service']],
  daten: { 'Bauart': 'diesel-electric multi-purpose vehicle with crane', 'Gewicht': 'about 58 t', 'Motor': 'main diesel 520 kW, auxiliary diesel 170 kW', 'Leistung': '500 kW continuous at the wheel', 'Anzahl': '8 ordered', 'In Betrieb seit': '2029 planned' },
  specNote: 'Project values according to the RhB press release of 18 November 2025 and Windhoff. The vehicles have not been delivered yet. A traction battery is only being studied as a possible retrofit.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The RhB announced the order on 18 November 2025. Windhoff confirms it as the «MPV VentuS» project. The eight vehicles are to replace older diesel tractors.'] },
      { titel: 'Service and technology', p: ['A main diesel engine of 520 kW and an auxiliary diesel of 170 kW each drive a generator. 500 kW are continuously available at the wheel; top speed is 80 km/h.', 'The crane reaches about 16.9 m, and its arm can also bend downwards.'] },
      { titel: 'Facilities and accessibility', liste: ['Air-conditioned, insulated cab for seven people', 'Crane, winch, grab or work basket', 'Possible: snow cutter or suction excavator'] }
    ]
});
uebZug('rhb-dienstwagen', {
  name: 'Service wagons', beiname: 'X wagons',
  typ: 'Wagons for track work, measuring and material',
  text: ['The RhB service-wagon fleet includes ballast, gravel and flat wagons, measuring and crane wagons, aerial work platforms and breakdown wagons. Many were converted from older passenger or freight wagons.', 'According to the network condition report 2025 the infrastructure has 60 traction units and 136 hauled vehicles.'],
  kennzahlen: [['136', 'hauled infrastructure vehicles'], ['60', 'infrastructure traction units'], ['X', 'class for service wagons'], ['2025', 'network report']],
  daten: { 'Bauart': 'service wagons of various types', 'Fahrzeugnummern': 'Examples: Xac 8733–8742, Xa-u 8761–8770, Xa-tu 93701–93704, Xac-t 93801–93805, Xak 96501, Xak 9394, Xk 94001' },
  specNote: 'Type examples according to the Haribu X register (as of August 2026), not a complete list. Load capacities and measuring systems are not given without an equipment sheet.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The class X denotes use in service, not a new underframe. Examples from the register:'],
        tabelle: { kopf: ['Task', 'Examples'], zeilen: [
          ['Ballast', 'Xac 8733–8742, Xa-u 8761–8770, 9441–9446, 9461–9463, Xa-tu 93701–93704'], ['Gravel', 'Xac-t 93801–93805'],
          ['Flat wagons', 'Xae-w 9401–9404, Xae-t 93105–93111'], ['Rail transport', 'Xa-t 93101–93104, rail unloading wagon Xa-t 93501'],
          ['Track measuring', 'Xak 96501 (from B 2307)'], ['Bridge inspection', 'Xak 9394 (from Uahk-v 8123)'], ['Crane work', 'Xak 9387, 9388'],
          ['Aerial work platforms', 'Xk 94001, Xak 94002–94003'], ['Water and firefighting', 'Xak 9379–9380, Xah-y 9385–9386'], ['Breakdown wagons', 'Xak-v 9101, 9102']] } },
      { titel: 'Service and technology', p: ['For example the former Fau tipping wagons 8761–8770 became spent-ballast wagons Xa-u. In winter some ballast wagons get side walls and carry away snow.', 'Coupling wagons such as the Vereina wagons 9390–9393 connect vehicles with different couplers. They have no drive themselves.'] },
      { titel: 'Facilities and accessibility', liste: ['Tipping or gravity unloading on ballast wagons', 'Measuring equipment, cranes or work platforms depending on the wagon', 'No drive of their own'] }
    ],
  bilder: ['Gravel wagon Xac-t 93801 in Chur (2012)', 'Ballast wagon Xa-tu 93701 in Poschiavo (2010)', 'Service wagon Xk 9362 in Landquart (2015)']
});

/* ---------- service and special vehicles ---------- */
uebZug('rhb-loeref', {
  beiname: 'firefighting and rescue vehicles',
  typ: 'Firefighting and rescue trains for the Vereina tunnel',
  text: ['For the Vereina tunnel the RhB has four firefighting and rescue vehicles from Müller Technologie. Two are firefighting vehicles, two rescue vehicles.', 'They were handed over on 2 September 2022. The fire brigades of Klosters-Serneus and Zernez operate them.'],
  kennzahlen: [['4', 'vehicles (27401–27404)'], ['25,000 l', 'firefighting water'], ['100', 'people per rescue trip'], ['2022', 'handed over']],
  daten: { 'Bauart': 'self-propelled firefighting and rescue vehicles', 'Betreiber': 'RhB, operated by the Klosters-Serneus and Zernez fire brigades', 'Länge': '18.80 m', 'Motor': 'diesel, 280 kW' },
  specNote: 'Values according to the RhB press release and the Müller data sheet. The vehicles run on rails only; the fire-brigade road-rail vehicles are different vehicles.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Müller Technologie in Frauenfeld built the four vehicles; they were handed over on 2 September 2022 at the north portal in Klosters Selfranga. Each side of the tunnel has one firefighting and one rescue vehicle.', 'The RhB also has fire-brigade road-rail vehicles Xm 2/2 27801–27806 of 2016/17 and older ones of 2007.'] },
      { titel: 'Service and technology', p: ['Each vehicle has two driving cabs, one powered and one trailing bogie and a diesel engine of 280 kW. Colour and thermal-imaging cameras help in smoke. According to the manufacturer they are ready in less than five minutes.', 'The firefighting vehicle has a temperature-monitored tank with 25,000 l of water. The rescue vehicle has a room with breathing-air supply for up to 100 people; fuel and oxygen last for two trips.'] },
      { titel: 'Facilities and accessibility', liste: ['Firefighting vehicle: 12 seats for firefighters with breathing apparatus, 4 more in the cabs', 'Rescue room with breathing-air supply', 'Colour and thermal-imaging cameras', 'Own drive, independent of a locomotive'] }
    ]
});
uebZug('rhb-fahrleitung', {
  name: 'Overhead-line and crane vehicles', beiname: 'Xm and Xmf',
  typ: 'Vehicles for overhead-line work and crane work',
  text: ['For work on the overhead line and for crane work the RhB has several families of self-propelled service vehicles. The largest are the Xmf 6/6 24401 and 24402.', 'Since 2024 two road-rail aerial work platforms have been added.'],
  kennzahlen: [['2', 'Xmf 6/6 (2007, 2016)'], ['2', 'Xmf 4/4 (built 1994)'], ['2', 'work platforms (2024)'], ['1994', 'Xmf 2/2 9921']],
  daten: { 'Bauart': 'self-propelled overhead-line and crane vehicles', 'Fahrzeugnummern': 'Xm 2/2 9916, 9917; Xmf 2/2 9921; Xmf 6/6 24401, 24402; Xmf 4/4 24403, 24404 (formerly 9918, 9919); Xm 2/2 24801, 24802' },
  specNote: 'According to the Haribu traction register. Manufacturer, working height and crane load are not given without a data sheet.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The vehicles date from different years.'],
        tabelle: { kopf: ['Vehicle', 'Numbers', 'Built'], zeilen: [
          ['Xm 2/2', '9916, 9917', 'various'], ['Xmf 2/2', '9921', '1994'], ['Xmf 6/6', '24401, 24402', '2007, 2016'],
          ['Xmf 4/4', '24403, 24404 (formerly 9918, 9919)', '1994, later rebuilt'], ['Xm 2/2 work platforms', '24801, 24802', '2024']] } },
      { titel: 'Service and technology', p: ['The vehicles build and maintain the overhead line and lift heavy parts. The Xmf 6/6 and the Xmf 4/4 are different types despite the same task.', 'The Xm 2/2 24801 and 24802 are aerial work platforms that run on rail and road.'] },
      { titel: 'Facilities and accessibility', liste: ['Crane or work platform depending on the vehicle', 'Own diesel drive (letter m)', 'Remote control on the Xmf'] }
    ],
  bilder: ['Xmf 2/2 9921 in Samedan (2015)', 'Xmf 2/2 9921 with crane']
});
uebZug('rhb-schneeschleuder', {
  name: 'Snow blowers and snowploughs', beiname: 'Xrot mt and Xk',
  typ: 'Equipment for snow clearing',
  text: ['In winter snow blowers and snowploughs clear the lines. The newest snow blowers are the Xrot mt 95401–95404 from Zaugg.', 'A locomotive pushes the snow blower, for example a Gmf 4/4 II.'],
  kennzahlen: [['4', 'Xrot mt 95401–95404'], ['2011/12', 'built'], ['1981', 'Xrot mt 9217'], ['7', 'snowploughs Xk 9141–9147']],
  daten: { 'Bauart': 'snow blowers and snowploughs' },
  specNote: 'The sources checked do not give clearing width, clearing capacity or engine of the individual RhB machines. Data of other railways from the Zaugg brochure have not been used.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Zaugg delivered the Bernina machines 95403 and 95404 in 2011 and the core-network machines 95401 and 95402 in 2012. The Xrot mt 9217 dates from 1981.', 'Today’s Xrot m 9214 has a body of 2001 on an underframe of 1913 (from Gb 5606). It is not the former Bernina steam snow blower with the same number.'] },
      { titel: 'Service and technology', p: ['A snow blower picks up the snow with a rotating clearing unit and throws it aside. A snowplough pushes the snow away with a shaped blade.', 'The snow blower and the pushing locomotive form a works train, for example with a Gmf 4/4 II; on the Bernina line a railcar also pushes a snowplough.'] },
      { titel: 'Facilities and accessibility', liste: ['Rotating clearing unit (Xrot)', 'Plough blade (Xk)', 'In winter: ballast wagons with side walls for carrying snow'] }
    ],
  bilder: ['Snow blower Xrot mt 95403 with Gmf 4/4 II 23402', 'Snow blower Xrot mt 9217 in Landquart (2012)', 'Snowplough Xk 9143 with ABe 4/4 II 46 at work']
});

/* ---------- historic vehicles ---------- */
uebZug('rhb-ge66i', {
  beiname: 'Crocodile',
  typ: 'Electric freight locomotive of 1921–1929 (historic)',
  text: ['For decades the 15 RhB «Crocodiles» hauled heavy trains over the Albula. Typical are the two movable power bogies with rod drive.', 'Numbers 414 and 415 now haul historic RhB trains; several more are in museums.'],
  kennzahlen: [['15', 'locomotives (401–415)'], ['1921', 'first locomotive'], ['55 km/h', 'top speed'], ['66 t', 'service weight']],
  daten: { 'Bauart': 'electric locomotive with rod drive', 'Hersteller': 'SLM (mechanical), BBC (electrical)', 'Länge': '13.30 m over buffers', 'Leistung': 'about 940 kW (RhB brochure)', 'Erhalten': '414 and 415 (RhB); 402 Swiss Museum of Transport, 406 Battenberg, 407 Bergün, 411 Deutsches Museum' },
  specNote: 'Power according to the RhB brochure «Historic vehicles» (rounded, without exact reference); Wikipedia gives 794 to 840 kW. Length and weight according to Wikipedia.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SLM and BBC built the 15 locomotives between 1921 and 1929. Three coupled axles each sit in two movable power bogies; motors, gears, jackshafts and rods transmit the power.', 'Preserved are 414 and 415 at the RhB, 402 in the Swiss Museum of Transport in Lucerne, 407 at the Albula Railway Museum in Bergün, 411 in the Deutsches Museum in Munich and 406 at Viessmann in Battenberg.'] },
      { titel: 'Service and technology', p: ['The Crocodiles mainly hauled freight and passenger trains on the Albula line. Numbers 414 and 415 are now working museum locomotives based in Landquart and Samedan; according to the register 414 is under repair.', 'The two RhB locomotives were rebuilt to different extents and no longer show the original state in every part.'] },
      { titel: 'Facilities and accessibility', liste: ['Central driving cab, bonnets at both ends', 'Rod drive with jackshafts', 'Exhibition with driving simulator (407 in Bergün)'] }
    ],
  bilder: ['Crocodile Ge 6/6 I 415 in Bergün', 'Ge 6/6 I 414 with a historic train in Filisur (2022)', 'Ge 6/6 I 412 with train 4532 arriving in Filisur (1987)', 'Ge 6/6 I 407 at the Albula Railway Museum in Bergün (2014)']
});
uebZug('rhb-ge66ii', {
  typ: 'Heavy electric locomotive with articulated body (historic)',
  text: ['The seven Ge 6/6 II were the heavy main-line locomotives on the RhB core network. Their body is in two articulated halves running on three bogies.', 'They have been out of service since 2020; number 702 is in the Swiss Museum of Transport in Lucerne.'],
  kennzahlen: [['7', 'locomotives (701–707)'], ['1958', 'first locomotives'], ['1764 kW', 'one-hour rating'], ['80 km/h', 'top speed']],
  daten: { 'Bauart': 'electric locomotive with articulated body', 'Länge': '14.50 m over buffers', 'Leistung': '1764 kW (one-hour rating)', 'Erhalten': '702 «Curia» in the Swiss Museum of Transport, Lucerne; 707 «Scuol» stored in Samedan' },
  specNote: 'Values according to Wikipedia; elsewhere the article gives 1776 kW.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SLM, BBC and MFO built 701 and 702 in 1958, followed by 703–707 in 1965. The locomotives bear place names, for example 701 «Raetia», 702 «Curia» and 707 «Scuol».'] },
      { titel: 'Service and technology', p: ['The locomotives hauled heavy freight and passenger trains on the core network, especially over the Albula. From 2020 they were withdrawn; 701, 703, 704 and 706 have been scrapped.', 'Number 702 went to the Swiss Museum of Transport in Lucerne on 30 March 2023; the GRÜN & CHROM foundation wants to restore its original state. Number 707 is stored in Samedan without an operating permit.'] },
      { titel: 'Facilities and accessibility', liste: ['Two articulated body halves', 'Three two-axle bogies', 'Two driving cabs'] }
    ],
  bilder: ['Ge 6/6 II 701 near Bonaduz (2016)', 'Ge 6/6 II 704 «Davos» near Trin', 'Ge 6/6 II 707 «Scuol» in Samedan']
});
uebZug('rhb-ge44i', {
  typ: 'Electric main-line locomotive of 1947 and 1953 (historic)',
  text: ['The ten Ge 4/4 I were the first RhB locomotives with bogies. Four came in 1947, six in 1953.', 'Number 605 «Silvretta» now runs as a historic locomotive, among others in front of the Alpine Classic Pullman Express.'],
  kennzahlen: [['10', 'locomotives (601–610)'], ['1947', 'first locomotives'], ['1184 kW', 'power'], ['80 km/h', 'top speed']],
  daten: { 'Bauart': 'electric locomotive', 'Länge': '12.10 m over buffers', 'Höchstgeschwindigkeit': '80 km/h (originally 75 km/h)', 'Erhalten': '605 «Silvretta» (historic, operational); 602 and 603 stored' },
  specNote: 'Values according to Wikipedia and the RhB brochure «Historic vehicles». The cabs were rebuilt in 1986–1991; old photos show a different shape.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SLM built the locomotives with electrical equipment from BBC and MFO: 601–604 in 1947, 605–610 in 1953. The names recall Graubünden mountains and valleys, for example 601 «Albula» or 605 «Silvretta».'] },
      { titel: 'Service and technology', p: ['With two bogies and individual axle drive they replaced the older rod-drive locomotives. From 1986 to 1991 they received larger cabs as well as multiple-unit and remote control; in 1997 single-arm pantographs were added for the Arosa line.', 'They were withdrawn from November 2010. Number 605 received ZSI 127 train protection in 2025; the GRÜN & CHROM foundation plans to overhaul it in red livery and to paint 602 green again.'] },
      { titel: 'Facilities and accessibility', liste: ['Two driving cabs (rebuilt 1986–1991)', 'Multiple-unit and remote control', 'Electric regenerative brake'] }
    ],
  bilder: ['Ge 4/4 I 605 «Silvretta» in Chur (2022)', 'Ge 4/4 I 603 and 602 in Spinas', 'Ge 4/4 I between Bever and Spinas']
});
uebZug('rhb-ge24', {
  typ: 'Early electric locomotive of 1913 (historic)',
  text: ['The seven SLM and BBC Ge 2/4 opened electric operation on the Bever–Scuol line in 1913. Later several were rebuilt as shunting locomotives.', 'Number 222 now runs as a historic locomotive; 205 and 207 are preserved in original condition.'],
  kennzahlen: [['7', 'locomotives (201–207)'], ['1913', 'in service'], ['45 km/h', 'top speed (original)'], ['222', 'preserved in working order']],
  daten: { 'Bauart': 'electric locomotive with rod drive', 'Fahrzeugnummern': '201–207; rebuilds 211–213, 221–222', 'Länge': 'about 8.7 m', 'Gewicht': '37 t (original)', 'Leistung': '210 kW (original), 428 kW (221 and 222 after rebuild)', 'Höchstgeschwindigkeit': '45 km/h (original), 55 km/h (after rebuild)', 'Erhalten': '222 operational (Landquart); 205 Albula Railway Museum; 207 Swiss Museum of Transport; 212' },
  specNote: 'Values according to Wikipedia; the RhB brochure gives about 450 kW and 45 km/h for 222. Number 222 has no ZSI 127 train protection.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SLM and BBC built the locomotives in 1912/13. Through rebuilds several received new numbers; but no additional locomotives were created.'],
        tabelle: { kopf: ['Original', 'Later'], zeilen: [
          ['201', 'Ge 2/4 213'], ['202', 'Gea 2/4 211, later Gem 2/4 211'], ['203', 'Ge 2/4 221'], ['204', 'Ge 2/4 222'], ['206', 'Ge 2/4 212'], ['205, 207', 'preserved in original condition']] } },
      { titel: 'Service and technology', p: ['In 1943 three locomotives were rebuilt as shunters; in 1945/46 numbers 221 and 222 received new motors and a rheostatic brake. After that they delivered 428 kW and ran at 55 km/h.', 'Number 222 is now a working museum locomotive in Landquart. Since 2023 number 205 has belonged to the Albula Railway Museum foundation, and 207 is in the Swiss Museum of Transport in Lucerne.'] },
      { titel: 'Facilities and accessibility', liste: ['Two driven axles and two carrying axles', 'Rheostatic brake (221 and 222 after rebuild)', 'No ZSI 127 train protection (222)'] }
    ],
  bilder: ['Ge 2/4 222', 'Ge 2/4 201 in original condition (1912)']
});
uebZug('rhb-ge46', {
  typ: 'First RhB electric locomotives of 1912–1918 (historic)',
  text: ['The designation Ge 4/6 covers several trial locomotives with electrical equipment from BBC, MFO and AEG. Number 351 was the first RhB electric locomotive.', 'Number 353 is preserved as a historic locomotive, 391 is in the German Museum of Technology in Berlin.'],
  kennzahlen: [['8', 'locomotives'], ['1913', 'in service'], ['588 kW', 'power (353, brochure)'], ['55 km/h', 'top speed (353)']],
  daten: { 'Bauart': 'electric locomotive with rod drive', 'Hersteller': 'SLM; electrical BBC (301–302), MFO (351–355), AEG (391)', 'Leistung': '419–559 kW (one-hour rating, depending on version)', 'Erhalten': '353 (RhB), 391 (German Museum of Technology, Berlin)' },
  specNote: 'The versions differ in power and weight; no single data set applies to all. The RhB brochure gives about 588 kW and 55 km/h for 353.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SLM supplied the mechanical part; the electrical equipment came from three companies.'],
        tabelle: { kopf: ['Numbers', 'Electrics', 'In service'], zeilen: [['301', 'BBC', '1913'], ['302', 'BBC', '1918'], ['351–352', 'MFO', '1912/13'], ['353–355', 'MFO', '1914'], ['391', 'AEG', '1913']] } },
      { titel: 'Service and technology', p: ['The locomotives first ran on the Engadine line electrified in 1913 and later on the whole core network. Number 351 is regarded as the first RhB electric locomotive.', 'Number 353 still hauls museum trains today. Number 391 can be seen in the German Museum of Technology in Berlin.'] },
      { titel: 'Facilities and accessibility', liste: ['Rod drive', 'Four driven axles and two carrying axles', 'Different electrical equipment per locomotive'] }
    ],
  bilder: ['Ge 4/6 353 in Ilanz', 'Ge 4/6 391 in the German Museum of Technology, Berlin (2017)', 'Ge 4/6 355 (1915)']
});
uebZug('rhb-bernina-loks', {
  name: 'Bernina locomotives',
  typ: 'Small locomotives and luggage railcar of the Bernina Railway (historic)',
  text: ['Some special traction units come from the Bernina Railway: the small Ge 2/2 161 and 162, the one-offs Ge 4/4 181 and 182 and the luggage railcar De 2/2 151.', 'Number 182 now belongs to Club 1889, the former 181 to the Blonay–Chamby museum railway.'],
  kennzahlen: [['1909', 'De 2/2 151 in service'], ['1911', 'Ge 2/2 161–162'], ['1916', 'Ge 4/4 81 built'], ['708 kW', 'Ge 4/4 81 (museum)']],
  daten: { 'Bauart': 'electric locomotives and luggage railcar', 'Betreiber': 'Bernina Railway, from 1943 RhB', 'Erhalten': '161 historic, 162 stored; 81 Blonay–Chamby; 182 Club 1889; 151 Pontresina' },
  specNote: 'For 182 the sources give 1927 or 1928 (construction or delivery). At Blonay–Chamby number 81 runs on 900 V.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The Bernina Railway joined the RhB in 1943. These one-offs came with it:'],
        tabelle: { kopf: ['Vehicle', 'Built', 'Note'], zeilen: [
          ['De 2/2 151 (ex Fe 2/2 51)', '1909', 'luggage railcar, number 151 from 1965'], ['Ge 2/2 161, 162', '1911', 'small shunting locomotives'],
          ['Ge 4/4 181 (ex Bernina Ge 6/6 81)', '1916, rebuilt 1929', 'at Blonay–Chamby since 1970'], ['Ge 4/4 182 (ex Bernina 82)', '1927/28', 'SLM and Sécheron; Club 1889']] } },
      { titel: 'Service and technology', p: ['Number 81 was built in 1916 as a Ge 6/6 and rebuilt as a Ge 4/4 in 1929; in 1961 it received the RhB number 181. Blonay–Chamby gives 46 t, 708 kW and 45 km/h as well as hand, vacuum, rheostatic and magnetic track brakes.', 'The De 2/2 151 was rebuilt several times and received a sheet-metal body and a single-arm pantograph in 1980. It is now a museum vehicle in Pontresina.'] },
      { titel: 'Facilities and accessibility', liste: ['For the 1000 V DC of the Bernina line', 'Magnetic track brake (81)', 'Luggage space in De 2/2 151'] }
    ],
  bilder: ['Ge 4/4 182 in Pontresina (2025)', 'Ge 4/4 81 at the Blonay–Chamby museum railway (2018)', 'Ge 2/2 162 and De 2/2 151 in Poschiavo (2014)']
});
uebZug('rhb-g34', {
  typ: 'Founding-era steam locomotive of 1889–1908 (historic)',
  text: ['Operation of the Landquart–Davos railway, from which the RhB emerged, began with the G 3/4 in 1889. Number 1 «Rhätia» hauled the opening train.', 'Preserved are among others number 1 «Rhätia» and number 11 «Heidi».'],
  kennzahlen: [['16', 'locomotives'], ['1889', 'first locomotives'], ['30.2 t', 'service weight (no. 1)'], ['45 km/h', 'top speed']],
  daten: { 'Bauart': 'steam tank locomotive', 'Betreiber': 'Landquart–Davos railway, from 1895 RhB', 'Länge': '7.95 m over buffers (no. 1)', 'Gewicht': '23.5 t empty, 30.2 t in service (no. 1)', 'Leistung': '184 kW at 20 km/h (no. 1)', 'Erhalten': '1 «Rhätia» (RhB), 11 «Heidi» (Club 1889), 14 (outside the RhB)' },
  specNote: 'Technical data of no. 1 according to historic RhB. Not all 16 locomotives are identical; they were built between 1889 and 1908.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SLM built the first series 1–5 in 1889; further deliveries followed until 1908. Number 11 of 1902 is now called «Heidi».'] },
      { titel: 'Service and technology', p: ['The locomotive has three coupled axles and a leading carrying axle. The cylinders have a 340 mm bore and 500 mm stroke, the boiler works at 12 bar; the locomotive carries its own water (2600 l) and coal (950 kg).', '«Rhätia» returned after many years outside Graubünden and was overhauled after 2014. «Heidi» belongs to Club 1889; the register mentions a rebuild in 2016.'] },
      { titel: 'Facilities and accessibility', liste: ['Driving wheels 1050 mm, carrying wheels 700 mm', 'Water and coal carried on the locomotive (tank locomotive)', 'Saturated-steam two-cylinder engine'] }
    ],
  bilder: ['G 3/4 1 «Rhätia» in Bonaduz (2009)', 'G 3/4 1 and Ge 2/4 222 in Chur']
});
uebZug('rhb-mallet', {
  name: 'Mallet locomotives',
  typ: 'Articulated steam locomotives for heavy mountain service (historic)',
  text: ['The Mallet locomotives have two groups of driving wheels under one boiler. This lets them take many driven axles through tight curves.', 'The RhB had three types numbered 21 to 32.'],
  kennzahlen: [['12', 'locomotives (21–32)'], ['1891', 'first Mallets (Maffei)'], ['1896', '«Maloja» and «Chiavenna»'], ['1902', 'SLM series']],
  daten: { 'Bauart': 'Mallet tank locomotives', 'Betreiber': 'Landquart–Davos railway and RhB' },
  specNote: 'According to the Pospichal locomotive statistics. The rebuilds of 21 and 22 did not create additional locomotives.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The notation with two fractions describes the two groups of driving wheels.'],
        tabelle: { kopf: ['Type', 'Numbers', 'Origin'], zeilen: [
          ['G 2/2+2/2', '21–22 (ex LD 6–7)', 'Maffei 1891, later rebuilt as G 2/3+2/2'], ['G 2/2+2/3', '23–24', 'SLM 1896, «Maloja» and «Chiavenna»'], ['G 2/3+2/2', '25–32', 'SLM from 1902']] } },
      { titel: 'Service and technology', p: ['The more powerful articulated locomotives took over heavy mountain trains from the small G 3/4. After electrification the RhB sold many steam locomotives, some abroad.', 'Number 23 «Maloja» went to the Oberhasli power stations in 1926 and was scrapped in 1940.'] },
      { titel: 'Facilities and accessibility', liste: ['Two groups of driving wheels, the front one movable', 'Water and coal carried on the locomotive', 'Mallet design for tight curves'] }
    ],
  bilder: ['Mallet locomotive 23 «Maloja»']
});
uebZug('rhb-g45', {
  typ: 'Heavy steam locomotive with tender from 1904 (historic)',
  text: ['The G 4/5 were the most powerful RhB steam locomotives. SLM built the 29 locomotives from 1904; they have four coupled axles, a carrying axle and a tender.', 'Number 107 «Albula» and number 108 of 1906 are now among the historic RhB locomotives.'],
  kennzahlen: [['29', 'locomotives (101–129)'], ['1904', 'first locomotives'], ['2', 'historic locomotives (107, 108)'], ['2', 'locomotives in Thailand']],
  daten: { 'Bauart': 'steam locomotive with tender', 'Erhalten': '107 and 108 (RhB); 118 Chiang Mai, 123 Bangkok' },
  specNote: 'The deliveries differ; a common data set for all 29 locomotives is therefore not given.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SLM built the series from 1904. The two historic locomotives 107 and 108 date from 1906; number 107 bears the name «Albula».'] },
      { titel: 'Service and technology', p: ['The G 4/5 hauled heavy trains on the Albula until the line was electrified. After that the RhB sold many locomotives; number 104 went to the Ferrocarril de La Robla in Spain in 1950.', 'Two former RhB locomotives are now in Thailand: 118 in Chiang Mai and 123 in Bangkok.'] },
      { titel: 'Facilities and accessibility', liste: ['Tender for water and coal', 'Four coupled axles and one carrying axle', 'Now hauls RhB steam specials'] }
    ],
  bilder: ['G 4/5 107 «Albula» with Ge 6/6 II 702', 'G 4/5 104 in an SLM works photo (1904)']
});
uebZug('rhb-bernina-tw', {
  name: 'Bernina railcars', beiname: 'BCe 4/4 and ABe 4/4 I',
  typ: 'First railcars of the Bernina Railway from 1908 (historic)',
  text: ['The Bernina Railway started operation with electric railcars on two bogies. Later they were rebuilt and designated ABe 4/4 I 30–38.', 'Numbers 30 and 34 are preserved by the RhB as historic railcars, number 35 at the Blonay–Chamby museum railway.'],
  kennzahlen: [['1908', 'first railcars'], ['450 kW', 'power (35, museum)'], ['55 km/h', 'top speed (35)'], ['3', 'preserved (30, 34, 35)']],
  daten: { 'Bauart': 'electric railcars', 'Betreiber': 'Bernina Railway, from 1943 RhB', 'Fahrzeugnummern': 'BCe 4/4 1–14, BCFe 4/4 21–23, later ABe 4/4 I 30–38', 'Erhalten': '30 and 34 (RhB), 35 (Blonay–Chamby)' },
  specNote: 'The years built of 30 and 34 differ between the registers. The values of 35 apply to its museum condition at Blonay–Chamby (900 V).',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['In 1908/09 the Bernina Railway bought the passenger railcars BCe 4/4 1–14 and in 1911 the BCFe 4/4 21–23 with luggage compartment. Rebuilds and new numbers turned them into the ABe 4/4 I 30–38.'] },
      { titel: 'Service and technology', p: ['Blonay–Chamby gives a service weight of 30 t for number 35, four motors with a total of 450 kW and 55 km/h. It has hand, air, vacuum, rheostatic and magnetic track brakes.', 'Historically number 35 offered twelve 2nd and 31 3rd class places.'] },
      { titel: 'Facilities and accessibility', liste: ['2nd and 3rd class compartments (historic)', 'Magnetic track brake', 'For the DC overhead line of the Bernina Railway'] }
    ]
});
uebZug('rhb-abe44ii', {
  typ: 'Bernina railcar of 1964–1972 (historic)',
  text: ['From 1964 the nine ABe 4/4 II replaced a large part of the old Bernina railcars. They also hauled extra coaches over the steep Bernina line.', 'Number 46 is preserved as a historic railcar; 48 and 49 were converted into service vehicles.'],
  kennzahlen: [['9', 'railcars (41–49)'], ['680 kW', 'continuous power'], ['65 km/h', 'top speed'], ['1964', 'first railcars']],
  daten: { 'Bauart': 'electric railcar', 'Hersteller': 'SWS (mechanical), MFO, SAAS, BBC (electrical)', 'Länge': '16.54 m (41–46), 16.89 m (47–49)', 'Leistung': '680 kW continuous', 'Sitzplätze': '12 in 1st, 24 in 2nd class', 'Erhalten': '46 (historic); 47 still listed' },
  specNote: 'Values according to Wikipedia. Franz Skvor, who was involved in the purchase, gives 677 kW as the planning value of the time.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SWS built the mechanical part, MFO, SAAS and BBC supplied the electrical equipment. Numbers 41–46 came in 1964/65, 47–49 in 1972.', 'Number 48 became service railcar Xe 23201 in 2012, number 49 became Xe 23202 in 2014 and breakdown car Xe 27201 in Poschiavo in 2015.'] },
      { titel: 'Service and technology', p: ['The railcars ran passenger trains on the Bernina line and hauled extra coaches up gradients of up to 70 per mille. They had rheostatic, regenerative and magnetic track brakes, multiple-unit control and could be remote-controlled from a snow blower.', 'From 2010 numbers 41–45 were scrapped. In 2021 number 46 got back its historic livery with a golden stripe.'] },
      { titel: 'Facilities and accessibility', liste: ['12 places in 1st and 24 in 2nd class', 'Magnetic track brake', 'Remote control from a snow blower'] }
    ],
  bilder: ['ABe 4/4 II 46 with snowplough Xk 9143', 'ABe 4/4 II 42 with a short train on the Bernina line (around 1980)']
});
uebZug('rhb-abe44iii', {
  typ: 'Bernina railcar of 1988 and 1990 (historic)',
  text: ['Until 2023 the six ABe 4/4 III were the most powerful railcars on the Bernina line. They often ran in pairs at the head of the Bernina Express.', 'Their regular service ended in late 2023; number 53 «Tirano» is now in the Albula Railway Museum in Bergün.'],
  kennzahlen: [['6', 'railcars (51–56)'], ['1016 kW', 'continuous power'], ['65 km/h', 'top speed'], ['2023', 'end of regular service']],
  daten: { 'Bauart': 'electric railcar', 'Länge': '16.89 m over buffers', 'Leistung': '1016 kW continuous', 'Sitzplätze': '12 in 1st, 16 in 2nd class', 'Erhalten': '53 in the Albula Railway Museum; 54 and 56 still listed' },
  specNote: 'Values according to Wikipedia; the RhB brochure gives about 1000 kW and 175 kN. The dossier names SLM and ABB as manufacturers, Wikipedia SWA and ABB.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The six railcars came in two series: 51–53 in 1988, 54–56 in 1990. They bear names such as 51 «Poschiavo», 53 «Tirano» and 54 «Hakone».'] },
      { titel: 'Service and technology', p: ['The railcars hauled regional trains and the Bernina Express, often in pairs. They left regular service in late 2023 because they did not meet the rules for passengers with reduced mobility and lacked ZSI 127 train protection; the Allegra took over.', 'Numbers 51, 52 and 55 have been scrapped. Number 53 has been in the Albula Railway Museum since July 2024.'] },
      { titel: 'Facilities and accessibility', liste: ['12 places in 1st and 16 in 2nd class', 'Running in pairs in multiple', 'No ZSI 127 train protection'] }
    ],
  bilder: ['ABe 4/4 III 56 and 51 at Lago Bianco', 'ABe 4/4 III on the Brusio spiral viaduct']
});
uebZug('rhb-abe501', {
  beiname: 'Flying Rhaetian',
  typ: 'Lightweight steel railcar of 1939/40 (historic)',
  text: ['The four ABe 4/4 501–504 were lightweight steel railcars for the AC network. They were nicknamed «Fliegender Rätier» (Flying Rhaetian).', 'Number 501 is preserved as a historic railcar.'],
  kennzahlen: [['4', 'railcars'], ['1939', 'built'], ['490 kW', 'power (brochure)'], ['70 km/h', 'top speed (brochure)']],
  daten: { 'Bauart': 'electric lightweight steel railcar', 'Hersteller': 'SWS (mechanical), BBC and MFO (electrical)', 'Länge': 'about 18 m', 'Leistung': 'about 490 kW', 'Erhalten': '501 (historic)' },
  specNote: 'Power, speed and length according to the RhB brochure «Historic vehicles» (rounded).',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SWS built the four railcars in 1939/40 with electrical equipment from BBC and MFO. Their self-supporting lightweight steel body was new at the time.'] },
      { titel: 'Service and technology', p: ['They offered their own fast railcar service on the AC network. A photo of 1995 still shows 502 and 503 together with a Ge 4/4 I in Pontresina.', 'Number 501 later received a strengthened body, a modified cab and new interior fittings. So it no longer shows the condition of 1939.'] },
      { titel: 'Facilities and accessibility', liste: ['1st and 2nd class compartments (AB)', 'Self-supporting lightweight steel body', 'Renewed interior (501)'] }
    ],
  bilder: ['ABe 4/4 501 in the Landquart depot (2008)', 'Ge 4/4 I 603 with ABe 4/4 503 and 502 in Pontresina (1995)']
});
uebZug('rhb-be44-511', {
  beiname: '511–516 push-pull trains',
  typ: 'Regional push-pull trains of 1971 and 1979 (historic)',
  text: ['With intermediate cars and driving trailers the Be 4/4 511–516 formed push-pull trains for regional and suburban traffic. Four came in 1971, two in 1979.', 'They have been withdrawn since 2021.'],
  kennzahlen: [['6', 'railcars'], ['784 kW', 'power'], ['90 km/h', 'top speed'], ['1971', 'first trains']],
  daten: { 'Bauart': 'electric railcar with intermediate cars and driving trailers', 'Hersteller': 'FFA (body), SIG (bogies), SAAS (electrical)', 'Fahrzeugnummern': '511–516; driving trailers ABDt 1711–1716', 'Gewicht': '44.6 t', 'Erhalten': '514 museum in Bergün (according to the register)' },
  specNote: 'Values according to Wikipedia. Wikipedia mentions only the cab of 514 for the Albula Railway Museum; the register lists 514 as a museum vehicle in Bergün.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['FFA built the bodies, SIG the bogies and SAAS the electrical equipment. The first four railcars came in 1971, two more in 1979. The railcar and the whole push-pull train are different vehicles.'] },
      { titel: 'Service and technology', p: ['The push-pull trains ran in regional and suburban traffic, for example around Chur, to Thusis and Davos. Four traction motors deliver a total of 784 kW; top speed is 90 km/h.', 'They have been withdrawn since 2021; the first train went for scrapping on 29 January 2021. According to the register 515 is stored.'] },
      { titel: 'Facilities and accessibility', liste: ['Driving trailers ABDt with 1st and 2nd class and luggage compartment', 'Push-pull operation without running round', 'Four traction motors of 196 kW each'] }
    ],
  bilder: ['Push-pull train with Be 4/4 511', 'Be 4/4 push-pull train in Tiefencastel (1984)', '2nd class in driving trailer ABDt 1713 (2016)']
});
uebZug('rhb-misox', {
  name: 'Misox railcars',
  typ: 'Railcars of the Bellinzona–Mesocco railway (historic)',
  text: ['The railway from Bellinzona to Mesocco in the Misox valley joined the RhB in 1942. It brought its own DC railcars.', 'The BDe 4/4 491 of 1958 is now a museum vehicle in Bergün.'],
  kennzahlen: [['1907', 'Bellinzona–Mesocco opened'], ['5', 'railcars 451–455'], ['1958', 'BDe 4/4 491'], ['1942', 'to the RhB']],
  daten: { 'Bauart': 'electric railcars', 'Betreiber': 'Bellinzona–Mesocco railway (BM), from 1942 RhB', 'Erhalten': '491 (Bergün)' },
  specNote: 'According to the Pospichal locomotive statistics. An RhB series 491–492 is not documented in the registers.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The Misox railway had three kinds of railcars:'],
        tabelle: { kopf: ['Vehicle', 'Origin', 'Built'], zeilen: [
          ['BCe/ABDe 4/4 451–455', 'BM 1–5, Ringhoffer and MFO', '1907 and 1909'], ['Ke/Fe 4/4 471', 'BM Ke 4/4 501, Ringhoffer and MFO', '1907'], ['BDe 4/4 491', 'SWS and BBC', '1958']] } },
      { titel: 'Service and technology', p: ['Numbers 451–455 handled passenger and luggage traffic, 471 freight and luggage. The 491 came in 1958 as a younger railcar.', 'Photos of 1966 show 452 and 491 in Mesocco.'] },
      { titel: 'Facilities and accessibility', liste: ['Passenger compartments and luggage space (ABDe)', 'For the DC overhead line of the Misox railway', '471 as freight and luggage railcar'] }
    ],
  bilder: ['ABDe 4/4 452 in Mesocco (1966)', 'BDe 4/4 491 in Mesocco (1966)']
});
uebZug('rhb-arosa', {
  name: 'Arosa railcars',
  typ: 'Railcars of the Chur–Arosa railway (historic)',
  text: ['From 1914 the Chur–Arosa railway ran with its own DC railcars. After the takeover in 1942 they were numbered RhB 481–486.', 'From 1957 the RhB reused these numbers for modern ABDe 4/4. Until 1997 the Arosa line ran on DC.'],
  kennzahlen: [['1914', 'Chur–Arosa opened'], ['6', 'ChA railcars 1–6'], ['1957', 'new ABDe 4/4 481–486'], ['1997', 'switch to AC']],
  daten: { 'Bauart': 'electric railcars', 'Hersteller': 'SWS, BBC (ABDe 4/4 of 1957/58)', 'Betreiber': 'Chur–Arosa railway (ChA), from 1942 RhB', 'Stromsystem': '2400 V DC (until 1997)', 'Fahrzeugnummern': 'ChA 1–6 → RhB 481–486 (old 486 → 487); new ABDe 4/4 481–486; ABe 4/4 487–488', 'Erhalten': '484 and 486 at La Mure (out of service)' },
  specNote: 'The numbers 481–486 were used twice. Years built of 1914 and 1957 must therefore not be assigned to the same vehicle.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['There were two generations with the same numbers:'],
        tabelle: { kopf: ['Generation', 'Numbers', 'Built'], zeilen: [
          ['ChA railcars', 'ChA 1–6 → RhB 481–486, old 486 → 487', '1914, later 5 and 6'], ['ABDe 4/4', '481–486 (new)', '1957/58, SWS and BBC'], ['ABe 4/4', '487, 488 (new)', 'later; then to the CJ']] } },
      { titel: 'Service and technology', p: ['In 1997 the Arosa line was converted from 2400 V DC to 11 kV AC. This ended the use of the DC railcars.', 'According to the register the former 484 and 486 are at La Mure in France, out of service.'] },
      { titel: 'Facilities and accessibility', liste: ['Passenger compartments and luggage space (ABDe)', 'For 2400 V DC', 'Two bogies'] }
    ],
  bilder: ['ABDe 4/4 482 of the Arosa line (1980s)', 'Type drawing of the railcar BCF4 of the Chur–Arosa railway']
});
uebZug('rhb-dampfschneeschleuder', {
  name: 'Historic snow blowers',
  typ: 'Steam and electric snow blowers (historic)',
  text: ['From 1910 to 1913 the Bernina Railway and the RhB already had steam snow blowers. The Xrot d 9213 was still in action at Lago Bianco in 2010.', 'Other historic snow blowers are at the Furka Steam Railway and at Blonay–Chamby.'],
  kennzahlen: [['1913', 'core-network snow blowers 9211, 9212'], ['1912', 'Bernina snow blower 1052'], ['64 t', 'service weight 1052'], ['1958', 'Beilhack snow blower 9216']],
  daten: { 'Bauart': 'steam and electric snow blowers', 'Hersteller': 'SLM (steam snow blowers), Beilhack (9216)', 'Betreiber': 'RhB and Bernina Railway', 'Erhalten': '9212 (DFB, as R 12), 9213 (RhB), 1052 / old 9214 (Blonay–Chamby), 9216 (DFB)' },
  specNote: 'For 9213 the sources give 1910 or 1911. The Blonay–Chamby data sheet names «1051» in its header, but the history points to 1052.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The number 9214 was used twice: first for a Bernina steam snow blower, later for a new machine of 2001.'],
        tabelle: { kopf: ['Machine', 'Built', 'Today'], zeilen: [
          ['Xrot d 9211, 9212 (core network)', '1913, SLM', '9211 scrapped, 9212 at the DFB'], ['Xrot d 9213 (ex Bernina R 1051)', '1910/11', 'RhB'],
          ['Xrot d 9214 (ex Bernina R 1052)', '1912, SLM 2299', 'Blonay–Chamby'], ['Xrot e 9215 «coffee grinder»', 'rebuilt 1941 from freight wagon K 208 of 1908', 'scrapped 1983'],
          ['Xrot m 9216', '1958, Beilhack', 'at the DFB since 2015'], ['Xrot et 9218, 9219', '–', '–']] } },
      { titel: 'Service and technology', p: ['The core-network snow blowers had no full traction drive and were pushed. The Bernina machines have their own running gear; but when clearing, the blower wheel needs the steam, so a locomotive usually pushes as well.', 'Number 9215 was first a freight wagon, then a kitchen car and from 1941 an electric snow blower. The Beilhack snow blower 9216 now clears Realp station for the DFB.'] },
      { titel: 'Facilities and accessibility', liste: ['Steam-driven blower wheel (Xrot d)', '1052: 14 bar boiler pressure, 7 m³ of water and 4 t of coal', 'Xrot et 9218: remote-controlled the pushing railcar in 1968'] }
    ],
  bilder: ['Steam snow blower Xrot d 9213 at Lago Bianco (2010)', 'Former RhB snow blower R 12 at the DFB between Realp and Tiefenbach', 'Beilhack snow blower 9216 at the DFB (2020)']
});
uebZug('rhb-hist-wagen', {
  name: 'Historic passenger coaches',
  typ: 'Preserved passenger, mail and saloon coaches',
  text: ['The RhB preserves a number of historic coaches for special trains: founding-era passenger coaches, saloon and mail coaches.', 'Other former RhB coaches run at the Blonay–Chamby museum railway.'],
  kennzahlen: [['6', 'coaches WN 9801–9806'], ['1903', 'AB 121 (Blonay–Chamby)'], ['1939', 'centre-entrance coaches'], ['1889', 'founding era of the LD']],
  daten: { 'Bauart': 'historic passenger, mail and saloon coaches', 'Betreiber': 'Landquart–Davos railway and RhB', 'Erhalten': 'RhB; AB 121 and As 2 at Blonay–Chamby' },
  specNote: 'The registers give different years built for several coaches; these are therefore not given.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The WN numbers are administrative numbers in addition to the restored old lettering.'],
        tabelle: { kopf: ['Coach', 'Function'], zeilen: [
          ['LD C 32 / WN 9801', 'founding-era passenger coach, «Il Samedrin»'], ['B 2138 / WN 9802', 'saloon coach «Filisurer Stübli»'], ['Z° 26 / WN 9803', 'mail van'],
          ['BC 110 / WN 9804', 'Misox passenger coach «Ul Mesolcines»'], ['F 4 / WN 9805', 'luggage and bar car'], ['C 66 / WN 9806', 'passenger coach'],
          ['A 1251, B 2302', 'centre-entrance coaches of 1939'], ['B 2245–2247, D 4205', 'bogie coaches and luggage van']] } },
      { titel: 'Service and technology', p: ['The coaches run in historic RhB trains, often behind historic locomotives. In restored coaches upholstery, colours and layout may differ from the earlier state.', 'At Blonay–Chamby there is the AB 121, a SIG coach of 1903 with twelve 1st and twelve 2nd class places. The As 2 of 1903 was a saloon car, from 1948 observation car 2191 and since 1999 a saloon bar car.'] },
      { titel: 'Facilities and accessibility', liste: ['AB 121: side corridor, toilet and electric lighting', 'Hand and vacuum brakes on the old coaches', 'Bar in the F 4 and in the As 2'] }
    ],
  bilder: ['Historic coach BC 110 «Ul Mesolcines» in Samedan (2015)', 'Historic coaches B 2060 and A 1102 (2024)', 'AB 121 at the Blonay–Chamby museum railway (2016)']
});
uebZug('rhb-hist-gueterwagen', {
  name: 'Historic freight wagons',
  typ: 'Preserved RhB freight wagons',
  text: ['Some historic freight wagons show how the RhB used to carry goods: covered wagons, open high- and low-sided wagons, timber wagons and a water wagon.', 'Today they also carry a WN number.'],
  kennzahlen: [['7', 'preserved wagons and wagon pairs'], ['9851', 'first WN number'], ['N', 'timber wagon pair'], ['K', 'covered wagons']],
  daten: { 'Bauart': 'historic freight wagons' },
  specNote: 'According to the Haribu WN register (as of March 2026). The original freight-wagon families were much larger; wagons not preserved are missing here.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['These wagons are preserved:'],
        tabelle: { kopf: ['Wagon', 'WN number', 'Type'], zeilen: [
          ['N 1520 / N 1513', 'WN 9851', 'timber wagon pair'], ['K1 5615', 'WN 9852', 'covered freight wagon'], ['M 7070', 'WN 9853', 'open low-sided wagon, formerly P 10059'],
          ['K 5563', 'WN 9854', 'covered freight wagon'], ['L3 6603', 'WN 9855', 'open high-sided wagon'], ['K 5342', 'WN 9856', 'covered freight wagon, formerly Xk 9069'], ['Uh 8101', 'WN 9862', 'water and tank wagon']] } },
      { titel: 'Service and technology', p: ['The WN number is an administrative number; the restored old lettering stays on the wagon. The historic number register knows many more groups, for example K, L, M, R, S and U.', 'Public documents are not enough for a complete list of all freight wagons since 1889.'] },
      { titel: 'Facilities and accessibility', liste: ['Covered wagons (K)', 'Open wagons (L and M)', 'Timber wagon pair (N)', 'Water wagon (Uh)'] }
    ]
});
uebZug('rhb-ehem-diesel', {
  name: 'Former diesel traction',
  typ: 'Former RhB diesel locomotives and a diesel railcar (historic)',
  text: ['The Gm 3/3 231–233 of 1975/76 shunted for decades at the RhB. Today they are at the Furka Steam Railway.', 'The Gm 4/4 241 went to the Brohltalbahn in Germany in 2023.'],
  kennzahlen: [['3', 'Gm 3/3 231–233'], ['1975', 'Gm 3/3 built'], ['2023', '241 to the Brohltalbahn'], ['1947', 'BFm 150 from the FO']],
  daten: { 'Bauart': 'diesel locomotives and diesel railcar', 'Fahrzeugnummern': 'Gm 3/3 231–233; Gm 4/4 241; BFm 2/2 150 (ex FO 22)', 'Erhalten': 'Gm 3/3 at the DFB; 241 at the Brohltalbahn (D4)' },
  specNote: 'For the Gm 4/4 241 the registers give 1958 or 1959 as year built. For the BFm 150, 1947 is the year of takeover, not the year built.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The Gm 3/3 231–233 were built in 1975/76. The Gm 4/4 241 dates from the late 1950s. The diesel railcar BFm 2/2 150 came from the Furka-Oberalp railway in 1947, where it had been number 22.'] },
      { titel: 'Service and technology', p: ['The Gm 3/3 shunted in stations such as Landquart and Chur. Today they are at the Furka Steam Railway, in varying condition.', 'Since 2023 the Gm 4/4 241 has been in the Brohltalbahn fleet as D4.'] },
      { titel: 'Facilities and accessibility', liste: ['Diesel drive', 'Three (Gm 3/3) or four (Gm 4/4) driven axles', 'Luggage space in the BFm (letter F)'] }
    ],
  bilder: ['Gm 3/3 233 in Landquart', 'Gm 4/4 241 in Untervaz (2019)']
});
uebZug('rhb-draisinen', {
  name: 'Draisines', beiname: 'Dh 1/2 and Dm 1/2',
  typ: 'RhB hand and motor draisine (historic)',
  text: ['Two small former RhB draisines are at the Blonay–Chamby museum railway: a hand draisine from around 1900 and a Swedish motor draisine from the 1930s.', 'Both came to the museum railway on 22 March 1968.'],
  kennzahlen: [['2', 'draisines'], ['1900', 'hand draisine (around)'], ['1930s', 'motor draisine'], ['1968', 'to Blonay–Chamby']],
  daten: { 'Bauart': 'hand and motor draisine', 'Betreiber': 'RhB, today Blonay–Chamby museum railway', 'Antrieb': 'muscle power (Dh), two-stroke petrol engine (Dm)', 'Erhalten': 'Blonay–Chamby museum railway (since 1968)' },
  specNote: 'The museum does not give power or speed.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The hand draisine Dh 1/2 dates from around 1900, the motor draisine Dm 1/2 from Sweden from the 1930s. Both came to Blonay–Chamby on 22 March 1968.'] },
      { titel: 'Service and technology', p: ['The hand draisine is moved by muscle power via levers and gears. The museum assumes it mainly ran downhill and on flat sections.', 'The motor draisine has a two-stroke petrol engine as well as hand and foot brakes; it was overhauled in 1995.'] },
      { titel: 'Facilities and accessibility', liste: ['Lever drive (Dh)', 'Two-stroke petrol engine (Dm)', 'Hand and foot brake (Dm)'] }
    ],
  bilder: ['Motor draisine Dm 1/2 at Blonay–Chamby (2011)']
});

/* maps «Where does it run?» */
uebEinsatz({
  'rhb-capricorn': 'According to the RhB on Landquart–Davos–Filisur, Landquart–Scuol, Landquart–St. Moritz and Chur–Disentis/Mustér. The metre gauge is shown dashed and simplified.',
  'rhb-allegra': 'On the core network and on the Bernina line to Tirano, for example in the Bernina Express from Chur over the Albula. The metre gauge is shown dashed and simplified.',
  'rhb-allegra-stz': 'Mainly in commuter traffic around Chur, for example on the S-Bahn Chur–Thusis. The metre gauge is shown dashed and simplified.',
  'rhb-alvra': 'On the Albula line between Chur and St. Moritz. The metre gauge is shown dashed and simplified.',
  'rhb-ge44ii': 'On the whole RhB AC network, including the Arosa line. The metre gauge is shown dashed and simplified.',
  'rhb-ge44iii': 'Hauling fast trains over the Albula, the Glacier Express and the car trains through the Vereina tunnel. The metre gauge is shown dashed and simplified.',
  'rhb-panorama': 'In the Bernina Express from Chur over the Albula and the Bernina Pass to Tirano; open observation cars also in the Rhine gorge. The metre gauge is shown dashed and simplified.',
  'rhb-glacier': 'In the Glacier Express from St. Moritz and Davos via Chur and Disentis/Mustér, then on the MGB network to Zermatt. The metre gauge is shown dashed and simplified.',
  'rhb-ew': 'In locomotive-hauled trains on the whole RhB network. The metre gauge is shown dashed and simplified.',
  'rhb-steuerwagen': 'In locomotive push-pull trains on the core network and in the car trains. The metre gauge is shown dashed and simplified.',
  'rhb-gastro': 'In special and charter trains, for example in the Alpine Classic Pullman Express. The metre gauge is shown dashed and simplified.',
  'rhb-vereina': 'Between the loading stations Klosters Selfranga and Sagliains through the Vereina tunnel. The metre gauge is shown dashed and simplified.',
  'rhb-gepaeckwagen': 'In core-network trains; the bicycle cars BD 56401–56406 run in the Alvra trains on the Albula. The metre gauge is shown dashed and simplified.',
  'rhb-haik': 'In freight traffic into the valleys of Graubünden. The metre gauge is shown dashed and simplified.',
  'rhb-uac': 'In freight traffic on the RhB network. The metre gauge is shown dashed and simplified.',
  'rhb-za': 'Supplying Graubünden with mineral oil, on the whole network. The metre gauge is shown dashed and simplified.',
  'rhb-fac': 'For gravel and other bulk goods on the RhB network. The metre gauge is shown dashed and simplified.',
  'rhb-flachwagen': 'In freight traffic with machines, timber, steel and containers on the whole network. The metre gauge is shown dashed and simplified.',
  'rhb-acts': 'In container traffic on the whole RhB network. The metre gauge is shown dashed and simplified.',
  'rhb-container': 'In container traffic on the whole RhB network. The metre gauge is shown dashed and simplified.',
  'rhb-spezialtransport': 'For heavy and tall loads on the RhB network. The metre gauge is shown dashed and simplified.',
  'rhb-geaf22': 'In shunting service, among other places in Landquart, Chur, Ilanz, Thusis, Davos Platz and Zernez.',
  'rhb-ge33': 'In shunting service in Samedan and Chur.',
  'rhb-gmf44-242': 'In shunting service on the core network, for example in Klosters Platz, Landquart and Davos. The metre gauge is shown dashed and simplified.',
  'rhb-taf22': 'In workshops and depots, among other places in Landquart and Poschiavo.',
  'rhb-gmf44ii': 'Hauling works trains and, in winter, with snow blowers on the whole RhB network. The metre gauge is shown dashed and simplified.',
  'rhb-gem44': 'On the Bernina line, based in Pontresina and Poschiavo; on diesel also on the core network. The metre gauge is shown dashed and simplified.',
  'rhb-tm': 'In shunting service and hauling small works trains on the whole network. The metre gauge is shown dashed and simplified.',
  'rhb-tieflade': 'In construction-site logistics on the RhB network. The metre gauge is shown dashed and simplified.',
  'rhb-windhoff': 'Planned from 2029 for construction and maintenance on the whole RhB network. The metre gauge is shown dashed and simplified.',
  'rhb-dienstwagen': 'For track work, measuring and material on the whole network. The metre gauge is shown dashed and simplified.',
  'rhb-loeref': 'For emergencies in the Vereina tunnel, based on both sides of the tunnel. The metre gauge is shown dashed and simplified.',
  'rhb-fahrleitung': 'For overhead-line work on the whole network. The metre gauge is shown dashed and simplified.',
  'rhb-schneeschleuder': 'In winter on the core network and on the Bernina line. The metre gauge is shown dashed and simplified.',
  'rhb-ge66i': 'Formerly mainly on the Albula line. Preserved in Landquart and Samedan as well as in the Swiss Museum of Transport in Lucerne and in Bergün. The metre gauge is shown dashed and simplified.',
  'rhb-ge66ii': 'Formerly hauling heavy trains on the core network; number 702 is in the Swiss Museum of Transport in Lucerne. The metre gauge is shown dashed and simplified.',
  'rhb-ge44i': 'Formerly on the whole AC network; number 605 now hauls historic trains. The metre gauge is shown dashed and simplified.',
  'rhb-ge24': 'First on the Engadine line Bever–Scuol; preserved in Landquart, in the Swiss Museum of Transport in Lucerne and at the Albula Railway Museum. The metre gauge is shown dashed and simplified.',
  'rhb-ge46': 'First on the Engadine line, later on the core network; number 353 hauls museum trains. The metre gauge is shown dashed and simplified.',
  'rhb-bernina-loks': 'On the Bernina line; number 81 now runs at the Blonay–Chamby museum railway. The metre gauge is shown dashed and simplified.',
  'rhb-g34': 'From 1889 on the Landquart–Davos railway; today hauling steam specials. The metre gauge is shown dashed and simplified.',
  'rhb-mallet': 'Formerly in heavy mountain service on the Landquart–Davos railway and the Albula. The metre gauge is shown dashed and simplified.',
  'rhb-g45': 'Formerly hauling heavy trains on the Albula; today hauling steam specials. The metre gauge is shown dashed and simplified.',
  'rhb-bernina-tw': 'On the Bernina line; number 35 is at the Blonay–Chamby museum railway. The metre gauge is shown dashed and simplified.',
  'rhb-abe44ii': 'On the Bernina line between St. Moritz and Tirano. The metre gauge is shown dashed and simplified.',
  'rhb-abe44iii': 'Until 2023 on the Bernina line; number 53 is in the Albula Railway Museum in Bergün. The metre gauge is shown dashed and simplified.',
  'rhb-abe501': 'Formerly on the AC network, for example in the Engadine. The metre gauge is shown dashed and simplified.',
  'rhb-be44-511': 'Formerly in regional and suburban traffic, for example around Chur, to Thusis and Davos. The metre gauge is shown dashed and simplified.',
  'rhb-misox': 'Formerly on the Bellinzona–Mesocco railway; number 491 is in Bergün. The metre gauge is shown dashed and simplified.',
  'rhb-arosa': 'Formerly on the Arosa line Chur–Arosa, on DC until 1997. The metre gauge is shown dashed and simplified.',
  'rhb-dampfschneeschleuder': 'Formerly on the Bernina line and the core network; preserved at the RhB, the DFB in Realp and Blonay–Chamby. The metre gauge is shown dashed and simplified.',
  'rhb-hist-wagen': 'In historic RhB trains; some coaches at Blonay–Chamby. The metre gauge is shown dashed and simplified.',
  'rhb-hist-gueterwagen': 'Formerly in RhB freight traffic; today in historic trains. The metre gauge is shown dashed and simplified.',
  'rhb-ehem-diesel': 'Formerly in shunting service, for example in Landquart and Chur; the Gm 3/3 are now at the DFB in Realp.',
  'rhb-draisinen': 'Now at the Blonay–Chamby museum railway.'
});
