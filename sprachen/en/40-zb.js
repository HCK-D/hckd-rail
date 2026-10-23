/* English – Zentralbahn (zb) */
uebDict({
  'Zentralbahn': 'Zentralbahn', 'zb Zentralbahn': 'zb Zentralbahn', '1200 V Gleichstrom': '1200 V DC', 'Dieselelektrisch': 'diesel-electric'
});

/* ---------- passenger traffic ---------- */
uebZug('zb-adler', {
  typ: 'Seven-car Stadler rack-and-adhesion train for Lucerne–Interlaken',
  text: ['The ADLER is the long express train of the Zentralbahn. The four seven-car Stadler trains have run since 2012, mainly as the Luzern–Interlaken Express over the Brünig.', 'In the valleys it runs on its wheels alone; on the steep ramps a cogwheel helps. More ADLER trains are on order.'],
  kennzahlen: [['4', 'trains (150 001–004)'], ['313', 'seats'], ['120 km/h', 'top speed'], ['2012', 'in service']],
  daten: { 'Bauart': 'electric rack-and-adhesion multiple unit, 7 cars', 'Fahrzeugnummern': '150 001–004; ordered 151 011–012 and five more', 'Länge': '126 m over couplers', 'Gewicht': 'about 200 t', 'Leistung': '2800 kW (adhesion), 3200 kW (rack)', 'Anfahrzugkraft': '240 kN (adhesion)', 'Höchstgeschwindigkeit': '120 km/h (adhesion), 40 km/h on the rack', 'Sitzplätze': '313, of which 63 in 1st class', 'Anzahl': '4 trains, 7 more on order' },
  specNote: 'Seats according to the current Zentralbahn page; the original Stadler data sheet and Wikipedia give other layouts (307 and 317 seats). Power according to Stadler. For the starting tractive effort on the rack the sources differ widely (200 and 440 kN), so it is not given.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler delivered the four ADLER in 2012 and 2013. The name stands for «alpiner dynamischer leiser edler Reisezug» (alpine dynamic quiet noble train). Two three-car power sections enclose a bistro car. Named so far are 150 001 «Bern» and 150 003 «Luzern».', 'The Zentralbahn has ordered more ADLER: first two trains (according to Wikipedia in December 2019, numbers 151 011–012, with a multi-purpose car instead of the bistro), then five more in September 2025. They are due from late 2027; three of them will get a premium compartment.'] },
      { titel: 'Service and technology', p: ['The ADLER mainly run as the Luzern–Interlaken Express over the Brünig. On the rack sections between Giswil and Meiringen cogwheels engage the rack (Riggenbach system); there the train climbs at up to 40 km/h, in the valleys it runs at up to 120 km/h.', 'The train is 126 m long and weighs about 200 t. It can be coupled with a FINK, making a longer train with more seats.'] },
      { titel: 'Facilities and accessibility', liste: ['313 seats, of which 63 in 1st class (Zentralbahn figure)', 'Bistro car in the middle of the train', 'Low-floor entrances (about 420 mm) at four of seven doors per side, wheelchair-accessible toilet', 'Air conditioning, large panoramic windows, passenger information and sockets', 'Bicycle and ski racks'] }
    ],
  bilder: ['ADLER at Lake Lungern (2014)', 'ABeh 150 002 (2014)', '1st class in the ADLER (2017)']
});
uebZug('zb-fink', {
  typ: 'Three-car Stadler rack-and-adhesion train for the S-Bahn and the Brünig',
  text: ['The FINK is the short brother of the ADLER. The eleven three-car Stadler trains have run since 2012 on the Lucerne S-Bahn, over the Brünig and to Engelberg.', 'Like the ADLER it has a cogwheel for the steep sections. It runs alone or strengthens an ADLER.'],
  kennzahlen: [['11', 'trains (6 + 5)'], ['139', 'fixed seats'], ['120 km/h', 'top speed'], ['2012', 'in service']],
  daten: { 'Bauart': 'electric rack-and-adhesion multiple unit, 3 cars', 'Länge': '54 m over couplers', 'Gewicht': 'about 90 t', 'Leistung': '1400 kW (adhesion), 1600 kW (rack)', 'Anfahrzugkraft': '120 kN (adhesion)', 'Höchstgeschwindigkeit': '120 km/h (adhesion), 40 km/h on the rack', 'Sitzplätze': '139, of which 18 in 1st class, plus 8 folding seats', 'Anzahl': '11 trains' },
  specNote: 'Values according to Stadler and the Zentralbahn; Wikipedia gives 93 t. For the FINK too, the figures for tractive effort on the rack differ (100 and 220 kN). The new FINK from 2026 have their own entry.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler delivered six FINK in 2012 (160 001–006) and five more in 2016 (161 011–015). The name stands for «flinke innovative Niederflurkomposition» (nimble innovative low-floor train). On the second series the rack bogies were improved to wear less.', 'Some trains bear names, such as 160 004 «Oberried» and 161 015 «Interlaken».'] },
      { titel: 'Service and technology', p: ['The FINK run on the Lucerne S-Bahn (S4, S5), in regional traffic Meiringen–Interlaken Ost, as reinforcement of the ADLER and on the branch to Engelberg. Lines and duties change with the timetable.', 'The train is 54 m long. On the rack sections of the Brünig and before Engelberg it climbs at up to 40 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['139 fixed seats, of which 18 in 1st class, plus 8 folding seats', 'Low-floor areas with wide doors and accessible areas', 'Air conditioning, panoramic windows and passenger information', 'No bistro'] }
    ],
  bilder: ['ABeh 161 013 as an IR to Engelberg in Lucerne (2019)', 'ABeh 160 004 in Stans (2025)', 'FINK on the Brünig (2012)']
});
uebZug('zb-fink-neu', {
  beiname: 'new FINK',
  typ: 'New generation of the FINK, planned in service from December 2026',
  text: ['Ten new FINK will strengthen the Zentralbahn fleet from late 2026. The first vehicle arrived in the night to 13 August 2026 and has been tested in Meiringen since then.', 'From the timetable change on 13 December 2026 they are to run on the RE44 Lucerne–Engelberg.'],
  kennzahlen: [['10', 'trains ordered'], ['128', 'seats'], ['2026', 'first vehicle'], ['RE44', 'Lucerne–Engelberg']],
  daten: { 'Bauart': 'electric rack-and-adhesion multiple unit, 3 cars', 'Fahrzeugnummern': '162 021–030 (according to Wikipedia)', 'Sitzplätze': '17 in 1st, 111 in 2nd class', 'Anzahl': '10 ordered (7 + 3)', 'In Betrieb seit': '2026 planned' },
  specNote: 'According to the Zentralbahn announcement of August 2026. The new FINK have 128 seats, the earlier ones 139; the figures do not apply to each other. Technical data of the new version have not yet been published.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The Zentralbahn first ordered seven new FINK from Stadler and three more in September 2025. In the night from 12 to 13 August 2026 the first train arrived in Interlaken and was moved to Meiringen.'] },
      { titel: 'Service and technology', p: ['After testing and approval the trains are to run on the RE44 Lucerne–Engelberg from 13 December 2026. Later they will also strengthen Interregio and S-Bahn services and run coupled on the Regio Meiringen–Interlaken Ost.', 'Like the earlier FINK they have a cogwheel. A train that has arrived is not yet a train in the timetable: until approval it only runs for tests.'] },
      { titel: 'Facilities and accessibility', liste: ['128 seats: 17 in 1st and 111 in 2nd class', 'New interior and new design', 'Further equipment depending on the approval status'] }
    ]
});
uebZug('zb-spatz', {
  typ: 'Three-car panoramic multiple unit without cogwheel for the S-Bahn',
  text: ['The SPATZ is the oldest modern train of the Zentralbahn. Stadler delivered the ten trains in 2004 and 2005; they run mainly on the Lucerne S-Bahn.', 'It has no cogwheel and therefore only runs on the flatter lines, for example to Giswil or between Meiringen and Interlaken.'],
  kennzahlen: [['10', 'trains (130 001–010)'], ['134', 'seats'], ['100 km/h', 'top speed'], ['2004', 'delivered']],
  daten: { 'Bauart': 'electric low-floor multiple unit, 3 cars (without cogwheel)', 'Länge': '51.93 m over couplers', 'Gewicht': '68.5 t empty', 'Leistung': '1150 kW at the wheel (short-term), 660 kW continuous', 'Sitzplätze': '19 in 1st, 115 in 2nd class, plus 14 folding seats' },
  specNote: 'Values according to the Stadler data sheet (as delivered); continuous power according to Wikipedia. Later refurbishments may have changed the interior and seating.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler built the ten SPATZ in 2004 and 2005. The name stands for «Schmalspur-Panorama-Triebzug» (narrow-gauge panoramic train). The front ends come from the GTW of the Seetal line. Several trains bear names, such as 130 001 «Haslital» and 130 002 «Pilatus».', 'Since 2017 all SPATZ have automatic couplers with which they can also run coupled to a FINK. Doors, floors, toilets and passenger information were later renewed in Stansstad.'] },
      { titel: 'Service and technology', p: ['The SPATZ run on the Lucerne S-Bahn, for example on the S4 and S5 towards Giswil and Stans, and between Meiringen and Interlaken Ost. They cannot run over the Brünig or up to Engelberg on their own because they lack the cogwheel.', 'The drive sits in the bogies under the middle section. The train is almost 52 m long and runs at up to 100 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['134 seats: 19 in 1st and 115 in 2nd class, plus 14 folding seats', 'Low-floor entrances (about 400 mm) and wheelchair area', 'Closed wheelchair-accessible toilet', 'Air conditioning and large panoramic windows in the middle section'] }
    ],
  bilder: ['SPATZ ABe 130 002 in Sarnen (2017)', 'SPATZ by Lake Brienz (2014)', 'Inside the SPATZ (2006)']
});
uebZug('zb-hge44ii', {
  typ: 'Electric rack-and-adhesion locomotive for the Brünig and Engelberg',
  text: ['Until 2012 the eight HGe 4/4 II hauled all express trains over the Brünig. Today they mainly run the Luzern–Engelberg Express and extra trains.', 'They have wheels for the valley lines and cogwheels for the steep ramps.'],
  kennzahlen: [['8', 'locomotives (101 961–968)'], ['1932 kW', 'one-hour rating'], ['100 km/h', 'top speed'], ['1989', 'first locomotives']],
  daten: { 'Bauart': 'electric rack-and-adhesion locomotive', 'Hersteller': 'SLM (mechanical), BBC/ABB (electrical)', 'Betreiber': 'zb Zentralbahn (until 2004 SBB Brünig line)', 'Länge': '14.80 m over buffers', 'Leistung': '1932 kW (one-hour rating)', 'Anfahrzugkraft': '230 kN (adhesion), 280 kN (rack)', 'Höchstgeschwindigkeit': '100 km/h (adhesion), 40 km/h on the rack' },
  specNote: 'Values according to Wikipedia. The sources checked do not clearly say how many of the eight locomotives are still in service today.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SLM and BBC (later ABB) built the locomotives; the SBB Brünig line put them into service in 1989 and 1990. They bear place names from «Horw» to «Ringgenberg». The same locomotives run on the Matterhorn Gotthard Bahn.'] },
      { titel: 'Service and technology', p: ['Until 2012 the HGe 4/4 II hauled all express trains between Lucerne and Interlaken. Today two specially equipped push-pull sets run the Luzern–Engelberg Express; further sets run seasonal trains, the S41 and as reserve. New trains are to take over part of this.', 'On the rack (Riggenbach system) the locomotive climbs at 40 km/h and hauls up to 170 t on a 120 per mille gradient.'] },
      { titel: 'Facilities and accessibility', liste: ['Two driving cabs, no passenger space', 'Rack and adhesion drive', 'Runs with panoramic coaches and articulated driving trailers in push-pull trains'] }
    ],
  bilder: ['HGe 101 966 with the Luzern–Engelberg Express in Engelberg (2014)', 'HGe 101 with an Interregio near Niederried (2009)', 'HGe 101 968 in Interlaken Ost (2009)']
});
uebZug('zb-bdeh140', {
  typ: 'Rack railcar of the Luzern–Stans–Engelberg railway (reserve and historic)',
  text: ['From 1964 to 2010 the eight LSE BDeh 4/4 hauled the trains up the steep ramp to Engelberg. Today 140 006 serves as reserve and 140 005 runs as a historic vehicle.', 'They had two gear stages: one for the steep rack and one for 75 km/h in the valley.'],
  kennzahlen: [['8', 'railcars (1–8)'], ['736 kW', 'one-hour rating'], ['75 km/h', 'top speed'], ['1964', 'first railcars']],
  daten: { 'Bauart': 'electric rack-and-adhesion railcar', 'Betreiber': 'LSE, from 2005 zb Zentralbahn', 'Fahrzeugnummern': '1–5 (1964), 6–7 (1970), 8 (1980); today 140 005 and 140 006', 'Gewicht': '47.9 t empty', 'Leistung': '736 kW (one-hour rating)', 'Höchstgeschwindigkeit': '75 km/h (adhesion), 20 km/h on the rack', 'Sitzplätze': '40 to 42 in 2nd class', 'Anzahl': '8 built' },
  specNote: 'Values according to the sheet of the Verein Engelbergbahn for 005 and Wikipedia; Wikipedia gives 40, the association sheet 42 seats. Wikipedia lists 007 as sold; according to the Zentralbahn it is in the Swiss Museum of Transport and serves as a driving simulator.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The LSE bought the railcars in three batches: 1–5 in 1964, 6–7 in 1970 and 8 in 1980. SWP built the body, SLM the rack running gear and BBC the electrical equipment.', 'Numbers 2 and 8 were scrapped in 2012, 1 and 3 in 2014.'] },
      { titel: 'Service and technology', p: ['Until the new Grafenort–Engelberg tunnel opened in December 2010 they handled all traffic to Engelberg over the old, very steep rack ramp. After that they ran extra trains and stood in on the S-Bahn.', 'Today 140 006 runs on the S41 and in seasonal extra trains according to the Zentralbahn. 140 005 is preserved in LSE colours for special trips, 140 007 is in the Swiss Museum of Transport in Lucerne.'] },
      { titel: 'Facilities and accessibility', liste: ['Passenger and luggage compartment', 'Two gear stages for rack and valley line', 'High-floor entrance, not step-free', '005 runs with driving trailer ABt 923'] }
    ],
  bilder: ['BDeh 140 006 (2007)', 'LSE BDeh 4/4 4 in Engelberg (1998)', 'BDeh 4/4 8 arriving in Stansstad (2006)']
});
uebZug('zb-mib', {
  beiname: '013 and 008',
  typ: 'DC railcars of the Meiringen–Innertkirchen railway',
  text: ['On the line Meiringen–Innertkirchen, just under 5 km long, own railcars run on 1200 V DC. The articulated railcar 125 013 runs in everyday service, 125 008 is the reserve.', 'Since 2021 the line has belonged to the Zentralbahn.'],
  kennzahlen: [['2', 'railcars'], ['1200 V', 'DC'], ['5 km', 'line'], ['2021', 'to the Zentralbahn']],
  daten: { 'Bauart': 'electric railcars (articulated railcar and single car)', 'Betreiber': 'zb Zentralbahn (until 2020 MIB)', 'Fahrzeugnummern': '125 013 (ex MIB Be 2/6 13), 125 008 (ex MIB Be 4/4 8)' },
  specNote: 'According to the Zentralbahn rolling stock page and Wikipedia. Seats and masses are not given there and are not taken over from other GTW.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Be 4/4 8 was built by Stadler in 1996 and is a one-off; today it is called Be 125 008 and stands ready as reserve.', 'The articulated railcar Be 2/6 was built in 1997 for the MVR on the Vaud Riviera and came to the MIB in 2018. Today it is called Be 125 013.'] },
      { titel: 'Service and technology', p: ['The line runs from Meiringen past the Aare gorge and through the 1502 m Kirchet tunnel to Innertkirchen. Trains run about every 30 minutes during the day.', 'Because the line uses 1200 V DC, the other Zentralbahn trains (15 kV AC) cannot run here. The Zentralbahn has studied a conversion to AC for through trains from Interlaken.'] },
      { titel: 'Facilities and accessibility', liste: ['No cogwheel needed (pure adhesion line)', 'Low-floor middle section on articulated railcar 125 013', 'One-off 125 008 as reserve'] }
    ],
  bilder: ['Be 125 013 near Aareschlucht West (2021)', 'Be 4/4 8, today Be 125 008, in Meiringen (2013)']
});
uebZug('zb-wagen', {
  name: 'Panoramic coaches and driving trailers', beiname: 'express trains',
  typ: 'Locomotive-hauled coaches for Lucerne–Engelberg and seasonal trains',
  text: ['The HGe 4/4 II work with push-pull sets of panoramic coaches, refurbished 2nd-class coaches and an articulated driving trailer. Best known is the Luzern–Engelberg Express with the Globi coach.', 'The coaches have no drive of their own; from the driving trailer the driver controls the locomotive at the other end of the train.'],
  kennzahlen: [['3', 'articulated driving trailers'], ['2', 'express sets'], ['1st', 'class in the panoramic coach'], ['Globi', 'coach in the middle']],
  daten: { 'Bauart': 'panoramic coaches, passenger coaches and articulated driving trailers', 'Anzahl': '3 articulated driving trailers' },
  specNote: 'According to the Zentralbahn rolling stock page. Numbers and seats of the individual coaches are not fully given there.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The Luzern–Engelberg Express consists of an HGe 4/4 II, a 1st-class panoramic coach formerly used on GoldenPass services, three refurbished 2nd-class coaches and an articulated driving trailer. A Globi coach in the middle gives the train its name, Globi Express.', 'The Zentralbahn has three articulated driving trailers with a driving cab and a low-floor section.'] },
      { titel: 'Service and technology', p: ['Two such sets run the Luzern–Engelberg Express. Three, at times four further sets run seasonal trains, the S41 and as reserve. The new FINK are to take over part of these trains from late 2026.'] },
      { titel: 'Facilities and accessibility', liste: ['Low-floor area in the articulated driving trailer', 'Air conditioning, large windows, air suspension and disc brakes in the articulated driving trailer', '1st-class panoramic coach', 'The older coaches are not step-free'] }
    ],
  bilder: ['Articulated driving trailer ABt in Hergiswil (2009)', 'View from a locomotive-hauled train between Meiringen and Brünig (2010)']
});

/* ---------- infrastructure ---------- */
uebZug('zb-hgm104', {
  typ: 'Stadler diesel rack locomotive for works trains and winter service',
  text: ['The HGm are small diesel locomotives with a cogwheel. They haul works trains, help when the overhead line is switched off and work in snow clearing in winter – also on the rack sections of the Brünig and before Engelberg.', 'Stadler delivered one locomotive each in 2005, 2010 and 2022.'],
  kennzahlen: [['3', 'locomotives (104 001–003)'], ['450 kW', 'power'], ['60 km/h', 'top speed'], ['2005', 'first locomotive']],
  daten: { 'Bauart': 'diesel-electric rack-and-adhesion locomotive' },
  specNote: 'Values for 104 001 and 002 according to Wikipedia (Stadler HGm 2/2); no data have been published for 104 003 delivered in 2022. The values of the Gm 105 are not transferred.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler delivered 104 001 in 2005 and 104 002 in 2010; one of them had originally been ordered by the SBB for the Brünig line. In 2022 a further diesel rack locomotive arrived, 104 003.', 'The same locomotives also run on the Matterhorn Gotthard Bahn and on rack railways in Spain and Austria.'] },
      { titel: 'Service and technology', p: ['The locomotives haul construction and material trains and work when the overhead line is switched off. In winter they help clear snow. Where a pure adhesion locomotive cannot manage the ramp, the cogwheel is needed.'] },
      { titel: 'Facilities and accessibility', liste: ['Diesel-electric drive, independent of the overhead line', 'Cogwheel for the rack sections', 'Driving cab designed for works duty'] }
    ],
  bilder: ['HGm 104 001 in Meiringen (2015)', 'HGm 104 002 (2011)']
});
uebZug('zb-gm105', {
  typ: 'Diesel shunting locomotive without cogwheel for works trains',
  text: ['Gm 105 001 is a two-axle diesel locomotive without a cogwheel. Stadler delivered it in 2011 for works trains on the flat lines of the Zentralbahn, the BOB and the MIB.', 'In winter it also pushes a snow blower.'],
  kennzahlen: [['1', 'locomotive'], ['450 kW', 'power at the wheel'], ['80 km/h', 'top speed'], ['2011', 'delivered']],
  daten: { 'Bauart': 'diesel-electric locomotive without cogwheel, 2 axles', 'Motor': 'MTU 12V183TB32, about 550 kW', 'Länge': '8.09 m over buffers', 'Leistung': '450 kW at the wheel' },
  specNote: 'Values according to the Stadler data sheet (L4232ZBGm22_0812d). The load example of 400 t on 6 per mille at 30 km/h is a design point, not a general train load.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler delivered the locomotive in 2011. It is closely related to the HGm rack locomotives but has no cogwheel.'] },
      { titel: 'Service and technology', p: ['It hauls works trains on the adhesion lines of the Zentralbahn, the Berner Oberland-Bahn and the MIB and pushes snow blowers in winter. The electric brake delivers 360 kW.'] },
      { titel: 'Facilities and accessibility', liste: ['Two diagonally arranged control stands and seats for four people', 'Radio remote control and camera at the coupler end', '400 V auxiliary supply with 25 kVA'] }
    ],
  bilder: ['Gm 105 001 (2014)', 'Gm 105 001 in Stansstad (2014)']
});

/* ---------- historic vehicles ---------- */
uebZug('zb-deh46', {
  typ: 'Luggage railcar of the electrified Brünig line from 1941 (historic)',
  text: ['With the 16 Fhe 4/6 luggage railcars, electric operation began on the Brünig in 1941. They had wheels for the valley and a rack bogie for the ramps.', 'Many were later rebuilt into pure adhesion locomotives De 110. Numbers 909, 912 and 914 are preserved.'],
  kennzahlen: [['16', 'railcars (901–916)'], ['894 kW', 'power'], ['75 km/h', 'top speed'], ['1941', 'in service']],
  daten: { 'Bauart': 'electric rack-and-adhesion luggage railcar', 'Hersteller': 'SLM; electrical BBC, MFO and SAAS', 'Betreiber': 'SBB Brünig line, from 2005 zb Zentralbahn', 'Fahrzeugnummern': 'Fhe 4/6 901–916, later Deh 4/6 and Deh 120 006–012; rebuilt as De 110 000–005, LSE De 121 and 122', 'Länge': '14.6 m', 'Höchstgeschwindigkeit': '75 km/h (adhesion)', 'Erhalten': '909 (zb Historic), 912 and 914 (SBB Historic); currently not operational' },
  specNote: 'Length, weight and power according to the association sheet of 909; history according to Wikipedia (SBB Fhe 4/6). The 75 km/h do not apply on the rack.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['During the Second World War the SBB electrified the Brünig line at 15 kV. SLM built the 16 railcars in 1941 and 1942, the electrical equipment came from BBC, MFO and SAAS. A middle rack bogie was added to the adhesion drive.', 'Fhe later became Deh 4/6. Number 915 was scrapped in 1990 after an accident.'] },
      { titel: 'Service and technology', p: ['The railcars hauled passenger and luggage trains over the Brünig. From 1954 the HGe 4/4 I helped on the mountain, from 1990 the HGe 4/4 II took over the Lucerne–Interlaken trains.', 'From 1987 six railcars were rebuilt into pure adhesion locomotives (De 110 000–005); the others were called Deh 120 006–012. In 1991 the LSE took over 905 and 907 and rebuilt them as De 121 and 122.'] },
      { titel: 'Facilities and accessibility', liste: ['Luggage compartment for about 3 t', 'Middle rack bogie', 'Preserved: 909, 912 and 914, currently not operational'] }
    ],
  bilder: ['Deh 4/6 914 with historic coaches in Giswil (2013)', 'Fhe 4/6 915 in original condition', 'Rebuilt De 110 021 in Interlaken Ost (2013)']
});
uebZug('zb-hge44i', {
  typ: 'Rack locomotive of the Brünig line from 1954 (historic)',
  text: ['From 1954 the two HGe 4/4 I 1991 and 1992 were the strong rack locomotives on the Brünig. Because of their tractive power the staff called them «Muni» (bull).', 'Number 1991 was scrapped, 1992 is preserved.'],
  kennzahlen: [['2', 'locomotives (1991, 1992)'], ['1954', 'in service'], ['50 km/h', 'top speed'], ['1992', 'preserved']],
  daten: { 'Bauart': 'electric rack-and-adhesion locomotive', 'Betreiber': 'SBB Brünig line' },
  specNote: 'According to Wikipedia and the Zentralbahn. Whether 1992 is operational today is stated inconsistently: the fleet page calls it operational, the nostalgia page does not.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SLM, BBC and MFO built the two locomotives in 1954 for the SBB Brünig line.'] },
      { titel: 'Service and technology', p: ['The locomotives worked mainly on the mountain section between Giswil and Meiringen. At 50 km/h they were too slow for the valley lines. The powerful drive often failed, so the locomotives spent long periods in the workshop.', 'Number 1991 was withdrawn in 1994 after a motor failure and later scrapped. Number 1992 was preserved and made operational again in 2014 by the Brünig-Nostalgie-Bahn.'] },
      { titel: 'Facilities and accessibility', liste: ['Two driving cabs', 'Rack and adhesion drive', 'Preserved: 1992'] }
    ],
  bilder: ['HGe 4/4 I 1992 (before 1968)', 'HGe 4/4 I on the Brünig']
});
uebZug('zb-lse-diesel', {
  typ: 'Diesel locomotive and shunting tractors of the LSE (historic)',
  text: ['Gm 4/4 111 «Jumbo» was a diesel-hydraulic locomotive from Finland that worked on the LSE from 1974. Small RACO shunting tractors completed the fleet.', 'Where these vehicles are today is not documented for all of them.'],
  kennzahlen: [['368 kW', 'power of Jumbo'], ['36 t', 'weight of Jumbo'], ['1955', 'built (Jumbo)'], ['1974', 'to the LSE']],
  daten: { 'Bauart': 'diesel-hydraulic locomotive and diesel tractors', 'Hersteller': 'Jung (Jumbo), RACO (tractors)', 'Länge': '11.23 m (Jumbo)', 'Gewicht': '36 t (Jumbo)', 'Leistung': '368 kW (Jumbo)', 'Höchstgeschwindigkeit': '40 km/h (Jumbo)' },
  specNote: 'Historic values according to the archive of the Verein Engelbergbahn. The present whereabouts of the group are not stated.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Jung built the Jumbo in 1955 for an industrial company in Finland; the LSE used it from 1974. The tractors came from RACO: Tm 102 of 1961 (formerly StEB 51), Tm 103 of 1967 and a Tm 101 built as a standard-gauge SBB tractor and converted for the LSE.'] },
      { titel: 'Service and technology', p: ['The Jumbo hauled works and service trains, the tractors shunted in Stansstad and in the stations. The Jumbo is a pure diesel locomotive, even if a heading in the archive suggests otherwise.'] },
      { titel: 'Facilities and accessibility', liste: ['Jumbo: diesel-hydraulic, 11.23 m, 36 t, 368 kW, 40 km/h', 'Tm 102: 5.07 m, 10 t, 81 kW, 45 km/h', 'Tm 103: 5.90 m, 16 t, 110 kW, 50 km/h'] }
    ]
});
uebZug('zb-traktoren', {
  name: 'Te I and Tm', beiname: 'small tractors',
  typ: 'Small shunting tractors of the Brünig line and the LSE (historic)',
  text: ['The historic vehicles include small tractors: the electric Te I 198 of the Brünig line from 1941 and the diesel tractors Tm 100 and Tm II OKK 5.', 'They shunted wagons in stations and workshops.'],
  kennzahlen: [['1941', 'Te I 198'], ['1931', 'Tm 100'], ['13 t', 'weight of Te I'], ['33 kW', 'power of Tm 100']],
  daten: { 'Bauart': 'electric shunting tractor and diesel tractors', 'Hersteller': 'SLM and MFO (Te I), RACO (Tm)', 'Betreiber': 'SBB Brünig line, LSE', 'Fahrzeugnummern': 'Te I 198; Tm 100 (formerly 491, 591, LSE 59 and 101); Tm II OKK 5', 'Erhalten': 'Te I 198, Tm 100 (stored), Tm II OKK 5' },
  specNote: 'According to the sheets of the Verein Engelbergbahn. Sister locomotive Te I 199 was scrapped in 2018 according to the archive. Present readiness for service has not been newly confirmed.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SLM and MFO built the electric shunting tractors Te I 198 and 199 for the Brünig line in 1941. Tm 100 was built by RACO in 1931 and has had a diesel engine since a rebuild in 1968. RACO built Tm II OKK 5 in 1953; it comes from a military fleet.'] },
      { titel: 'Service and technology', p: ['The Te I shunted under the overhead line, the Tm also on tracks without power. Tm 100 carried the numbers 491, 591, LSE 59 and 101 in turn; a later Tm 101 is a different vehicle.'] },
      { titel: 'Facilities and accessibility', liste: ['Te I 198: about 5.8 m, 13 t', 'Tm 100: about 4.4 m, 6 t, 33 kW, 28 km/h', 'Tm II OKK 5: support vehicle of the museum operation'] }
    ],
  bilder: ['Te I 199, sister vehicle of the preserved 198']
});
uebZug('zb-g34', {
  typ: 'Steam locomotive of the Brünig line from 1913 (historic)',
  text: ['G 3/4 208 is a steam locomotive of the Brünig line without a cogwheel. SLM built it in 1913 for the valley lines.', 'Today it belongs to the Brünig-Dampfbahn (BDB) and runs in historic trains.'],
  kennzahlen: [['1913', 'built'], ['SLM', 'manufacturer'], ['3', 'driving axles'], ['BDB', 'owner']],
  daten: { 'Bauart': 'steam locomotive without cogwheel', 'Betreiber': 'SBB Brünig line; today Brünig-Dampfbahn', 'Erhalten': 'Brünig-Dampfbahn (BDB)' },
  specNote: 'According to the Brünig-Dampfbahn and the Zentralbahn. The G 3/4 has no cogwheel, so it does not climb the Brünig ramps under its own power.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SLM built the locomotive in 1913 for the SBB Brünig line. It has three coupled axles and one carrying axle.'] },
      { titel: 'Service and technology', p: ['The G 3/4 hauled trains on the flat sections, for example between Lucerne and Giswil or between Meiringen and Interlaken. Today it belongs to the Brünig-Dampfbahn, formerly the Ballenberg Dampfbahn, and runs in historic trains when approved.'] },
      { titel: 'Facilities and accessibility', liste: ['No cogwheel, only for valley lines', 'Owned by the Brünig-Dampfbahn, not the Zentralbahn', 'Runs with historic coaches'] }
    ],
  bilder: ['G 3/4 208 in Brienz (2007)', 'G 3/4 208 of the Brünig line']
});
uebZug('zb-hg33', {
  beiname: '1067 and 1068',
  typ: 'Rack steam locomotive of the Brünig line (historic)',
  text: ['From 1905 the HG 3/3 hauled the trains over the Brünig – with wheels in the valley and a cogwheel on the mountain. Among those preserved are 1067 and 1068 of the Brünig-Dampfbahn.', 'Number 1068 was rebuilt after a depot fire and has been running again since 2022.'],
  kennzahlen: [['18', 'locomotives (1051–1068)'], ['1905', 'first locomotives'], ['40 km/h', 'top speed (valley)'], ['13 km/h', 'on the rack']],
  daten: { 'Bauart': 'rack-and-adhesion steam locomotive', 'Betreiber': 'SBB Brünig line; today Brünig-Dampfbahn', 'Höchstgeschwindigkeit': '40 km/h (adhesion), 13 km/h on the rack', 'Erhalten': '1067 and 1068 (Brünig-Dampfbahn), 1063 (Swiss Museum of Transport, Lucerne)' },
  specNote: 'According to Wikipedia (SBB HG 3/3) and the Brünig-Dampfbahn. Numbers 1051–1067 were built in 1905–1910, number 1068 in 1926 as a replica.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['From 1905 SLM built locomotives 1051–1067; 1068 followed in 1926 as a replica. Four cylinders drive the wheels and the cogwheel separately.', 'They replaced the weaker HG 2/2. With electrification in 1941 they became redundant; the last ones (1065, 1067, 1068) were withdrawn in 1965.'] },
      { titel: 'Service and technology', p: ['Number 1067 has run with the Ballenberg Dampfbahn, today Brünig-Dampfbahn, since 1972. Number 1068 first stood as a monument in Meiringen, came to the steam railway in 2000 and was badly damaged in a depot fire in 2013. After the rebuild it has been running again since 2022; in 2026 it turned 100.', 'Number 1063 has been in the Swiss Museum of Transport in Lucerne since 1957, cut open as an exhibit.'] },
      { titel: 'Facilities and accessibility', liste: ['Four-cylinder drive for wheels and cogwheel', 'Can run downhill boiler first', 'Trips according to the programme and approval of the Brünig-Dampfbahn'] }
    ],
  bilder: ['HG 3/3 1067 (2013)', 'HG 3/3 1068 in Meiringen (1991)', 'Cut-open HG 3/3 1063 in the Swiss Museum of Transport, Lucerne (2007)']
});
uebZug('zb-mib-akku', {
  beiname: 'battery railcars',
  typ: 'Battery railcars of the Meiringen–Innertkirchen railway (historic)',
  text: ['Before electrification in 1977, battery railcars ran on the Meiringen–Innertkirchen line. They took their energy from batteries instead of an overhead line.', 'Car 5 is preserved, number 4 is in the Swiss Museum of Transport in Lucerne.'],
  kennzahlen: [['1926', 'works railway opened'], ['1946', 'passenger service'], ['1939', 'no. 4 built'], ['1977', 'overhead line']],
  daten: { 'Bauart': 'battery railcar', 'Betreiber': 'Kraftwerke Oberhasli (KWO), MIB', 'Stromsystem': 'battery', 'Fahrzeugnummern': 'CFa 2/2 4 and 5; no. 5 today also BDa 125 005', 'Erhalten': '5 (historic MIB vehicle), 4 (Swiss Museum of Transport, Lucerne)' },
  specNote: 'According to the Zentralbahn and the catalogue of the Swiss Museum of Transport. The sources give no common confirmed year built for the two battery railcars; only number 4 is dated 1939.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The Kraftwerke Oberhasli built the line in the 1920s as a works railway for power-station construction; from 1946 it was also allowed to carry passengers. It was worked first by steam, then by battery railcars.'] },
      { titel: 'Service and technology', p: ['The battery railcars carried material and later also passengers between Meiringen and Innertkirchen. In 1977 the line was electrified at 1200 V DC; after that railcars with pantographs ran.', 'Car 5 is listed today as a historic MIB vehicle (BDa 125 005).'] },
      { titel: 'Facilities and accessibility', liste: ['Battery drive without overhead line', 'Passenger compartment', 'Preserved: no. 5 and no. 4 (museum)'] }
    ],
  bilder: ['Battery railcar CFa 2/2 5 in Innertkirchen (2021)', 'Battery railcar 5 (around 1976)']
});
uebZug('zb-hist-wagen', {
  name: 'Historic coaches', beiname: 'Brünig and LSE',
  typ: 'Historic passenger and restaurant cars (historic)',
  text: ['Many old coaches of the Brünig line are preserved for special trips: wooden coaches from the 1920s, lightweight steel coaches such as the Landi coach of 1939, and restaurant cars.', 'They belong partly to SBB Historic, partly to associations, and are not part of the regular Zentralbahn coach fleet.'],
  kennzahlen: [['1925', 'oldest coach (A 260)'], ['1939', 'Landi coach A 101'], ['80 km/h', 'top speed'], ['WR 426', 'restaurant car']],
  daten: { 'Bauart': 'historic passenger and restaurant cars', 'Hersteller': 'SIG and others', 'Betreiber': 'SBB Historic, zb Historic and associations', 'Höchstgeschwindigkeit': 'mostly 80 km/h' },
  specNote: 'According to the sheets of the Verein Engelbergbahn. A museum sheet confirms neither the present location nor a valid overhaul.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Before the class reform, C stood for 3rd class; today’s letters therefore do not always show how a coach used to be fitted out.'],
        tabelle: { kopf: ['Coach', 'Built', 'Length', 'Seats', 'Note'], zeilen: [
          ['A 260', '1925 (SIG)', '13.61 m', '36', '1st class, refurbishment planned'], ['B 761, B 762', '1927, 1928 (SIG)', '14.48 m', '60', 'wooden seats, formerly C 4805 and C 4808'],
          ['BC 451, BC 452', '1927 (SIG)', '14.48 m', '56', 'later service cars X 9985 and X 9988'], ['A 101', '1939', '16.47 m', '28', 'Landi coach for the national exhibition'],
          ['AB 473', '1946', '16.47 m', '64', 'SBB Historic, lightweight steel coach'], ['A 111, A 181', '1947, 1949', '16.74 m', '34', '1st class'],
          ['B 865', '1954', '16.74 m', '64', '2nd class'], ['WR 426', '1945, rebuilt 1997', '16.74 m', '28', 'restaurant car'], ['WR 825', '1931/32', '–', '–', 'later track-gang kitchen, damaged']] } },
      { titel: 'Service and technology', p: ['The coaches run in historic trains, often behind the Deh 4/6 or steam locomotives of the Brünig-Dampfbahn. Whether a coach has a rack brake depends on the individual coach and decides where it may run.'] },
      { titel: 'Facilities and accessibility', liste: ['Wooden seats in the old B coaches', 'Kitchen and dining room in WR 426', 'High-floor, not step-free', 'No drive of its own'] }
    ],
  bilder: ['Deh 4/6 914 with coaches B 865, WR 426 and AB 473 in Meiringen (2013)', 'Restaurant car WR 426 (2013)']
});
uebZug('zb-lse-gueterwagen', {
  name: 'Freight and service wagons', beiname: 'LSE and Brünig',
  typ: 'Historic freight, ski and service wagons (historic)',
  text: ['The railways on the Brünig and to Engelberg used to carry freight too. Preserved are, among others, covered LSE freight wagons that later served as ski and bicycle wagons.', 'There are also service wagons such as a tool wagon and a crane wagon.'],
  kennzahlen: [['4', 'Hb-v 261–264'], ['1969', 'built (Hb-v)'], ['16 t', 'payload'], ['8.5 t', 'tare weight']],
  daten: { 'Bauart': 'freight, ski and service wagons', 'Betreiber': 'LSE, Brünig line', 'Fahrzeugnummern': 'Hb-v 261–264; Haik-v 271, 272; Ua 9857; X 9742; crane wagon', 'Gewicht': '8.5 t empty (Hb-v)' },
  specNote: 'According to the archive of the Verein Engelbergbahn. It is a documented register of types, not a complete wagon list; it does not prove any present-day freight traffic of the Zentralbahn.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SWS built the four covered freight wagons Hb-v 261–264 for the Brünig line in 1969; the LSE took them over. The sliding-wall wagons Haik-v 271 and 272 were made from postal vans. There is also an older transporter wagon Ua 9857.'] },
      { titel: 'Service and technology', p: ['Hb-v 261 and 262 were fitted out as ski and bicycle wagons, the others served as stores. Tool wagon X 9742 now looks after historic vehicles. For the old crane wagon the archive gives two numbers (X 9762 and X 9962).', 'C 827 of 1933 later served as a material and cable wagon and was scrapped.'] },
      { titel: 'Facilities and accessibility', liste: ['Covered wagons with sliding doors', 'Ski and bicycle wagons (261, 262)', 'Tool and crane wagons for service', 'No drive of its own'] }
    ]
});

/* maps «Where does it run?» */
uebEinsatz({
  'zb-adler': 'Mainly as the Luzern–Interlaken Express over the Brünig. The metre gauge is dashed and simplified.',
  'zb-fink': 'On the Lucerne S-Bahn, between Meiringen and Interlaken Ost, as reinforcement of the ADLER and on the branch to Engelberg. The metre gauge is dashed and simplified.',
  'zb-fink-neu': 'Planned from December 2026 on the RE44 Lucerne–Engelberg; later also on other lines. The metre gauge is dashed and simplified.',
  'zb-spatz': 'On the Lucerne S-Bahn, for example towards Giswil and Stans, and between Meiringen and Interlaken Ost. Without a cogwheel not over the Brünig. The metre gauge is dashed and simplified.',
  'zb-hge44ii': 'Today mainly in the Luzern–Engelberg Express and extra trains; until 2012 at the head of all express trains over the Brünig. The metre gauge is dashed and simplified.',
  'zb-bdeh140': 'Formerly on the whole line Lucerne–Engelberg; 140 007 is in the Swiss Museum of Transport in Lucerne. The metre gauge is dashed and simplified.',
  'zb-mib': 'On the Meiringen–Innertkirchen line, just under 5 km long, with 1200 V DC. The metre gauge is dashed and simplified.',
  'zb-wagen': 'In the Luzern–Engelberg Express and in seasonal trains behind an HGe 4/4 II. The metre gauge is dashed and simplified.',
  'zb-hgm104': 'With works trains and in winter service on the whole network, also on the rack sections. The metre gauge is dashed and simplified.',
  'zb-gm105': 'With works trains on the lines without rack, also on the MIB. The metre gauge is dashed and simplified.',
  'zb-deh46': 'From 1941 on the whole Brünig line; today preserved as historic vehicles. The metre gauge is dashed and simplified.',
  'zb-hge44i': 'Mainly on the mountain section between Giswil and Meiringen. The metre gauge is dashed and simplified.',
  'zb-lse-diesel': 'Formerly on the LSE, for example in Stansstad and at the stations towards Engelberg. The metre gauge is dashed and simplified.',
  'zb-traktoren': 'Formerly shunting in stations and workshops of the Brünig line and the LSE.',
  'zb-g34': 'Formerly on the flat sections of the Brünig line; today with the Brünig-Dampfbahn. The metre gauge is dashed and simplified.',
  'zb-hg33': 'Formerly over the Brünig; today with the Brünig-Dampfbahn, 1063 in the Swiss Museum of Transport in Lucerne. The metre gauge is dashed and simplified.',
  'zb-mib-akku': 'Formerly between Meiringen and Innertkirchen; number 4 is in the Swiss Museum of Transport in Lucerne. The metre gauge is dashed and simplified.',
  'zb-hist-wagen': 'In historic trains on the Brünig line. The metre gauge is dashed and simplified.',
  'zb-lse-gueterwagen': 'Formerly in freight and service traffic on the Brünig and to Engelberg. The metre gauge is dashed and simplified.'
});
