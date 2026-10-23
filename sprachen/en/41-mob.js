/* English – Montreux Berner Oberland-Bahn (MOB) */
uebDict({
  'Montreux Berner Oberland-Bahn': 'Montreux Oberland Bernois Railway', 'MOB': 'MOB', '900 V Gleichstrom': '900 V DC',
  '900 V Gleichstrom und Diesel': '900 V DC and diesel', '850 V Gleichstrom (historisch)': '850 V DC (historic)'
});

/* ---------- passenger traffic ---------- */
uebZug('mob-alpina', {
  name: 'Be 4/4 and ABe 4/4',
  typ: 'Modern Stadler railcars, mostly running as pairs',
  text: ['The ALPINA are the modern railcars of the MOB. In 2016 Stadler delivered four Be 4/4 and four ABe 4/4, which mostly run as pairs and can haul further coaches.', 'They belong to the same vehicle family as railcars of the CJ, the TPC and transN.'],
  kennzahlen: [['8', 'railcars (4 pairs)'], ['1020 kW', 'power per railcar'], ['100 km/h', 'top speed'], ['2016', 'in service']],
  daten: { 'Bauart': 'electric low-floor railcars with 4 axles', 'Länge': '20.46 m per railcar', 'Leistung': '1020 kW continuous at the wheel per railcar', 'Sitzplätze': '18 in 1st, 63 in 2nd class (per pair, according to Wikipedia)', 'Anzahl': '8 railcars' },
  specNote: 'Length and power according to a vehicle portrait (Passiontrain), seats according to Wikipedia. A pair is two railcars; the eight vehicles are not eight trains. MOB documents give 900 V historically and 960 V in newer papers.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler developed the railcars jointly for several metre-gauge railways in western Switzerland. In 2016 the MOB received Be 4/4 9201–9204 (2nd class) and ABe 4/4 9301–9304 (1st and 2nd class). Some bear names, such as 9301 «Montbovon», 9302 «Château-d’Œx» and 9303 «Lenk».'] },
      { titel: 'Service and technology', p: ['The ALPINA run on the main line Montreux–Zweisimmen in regional trains and also haul panoramic coaches, up to nine coaches. They can be multiple-controlled with other MOB vehicles.', 'They were originally intended for the GoldenPass Express; there, however, Ge 4/4 locomotives haul the coaches. The railcars are light, which makes transmitting traction to the rails harder in slippery conditions.'] },
      { titel: 'Facilities and accessibility', liste: ['Low-floor entrance (480 mm) with folding steps for winter', '1st and 2nd class in the ABe, 2nd class in the Be', 'Passenger information and multi-purpose area', 'The facilities of the whole train depend on the coaches attached'] }
    ],
  bilder: ['ABe 4/4 9303 in Zweisimmen (2023)', 'Inside ABe 4/4 9303 (2023)', 'Coat of arms of Château-d’Œx on ALPINA 9302 (2022)']
});
uebZug('mob-be44-5000', {
  typ: 'Regional push-pull trains, mainly in the Simmental',
  text: ['The four Be 4/4 of the 5000 series form short push-pull trains with driving trailers. They run mainly between Zweisimmen and Lenk and to Gstaad.', 'They are at the end of their service life; second-hand CJ railcars are to replace them.'],
  kennzahlen: [['4', 'railcars'], ['1976', 'first two'], ['1979', 'two more'], ['2026', 'successors planned']],
  daten: { 'Bauart': 'electric railcar with driving trailers', 'Fahrzeugnummern': 'Be 4/4 5001–5004; driving trailers ABt 341–344 and Bt 241–244', 'Anzahl': '4 push-pull trains' },
  specNote: 'According to Wikipedia (MOB fleet list) and the MOB annual report 2025. The number of CJ railcars bought is not yet a number of approved MOB vehicles.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SIG and SAAS delivered two railcars each in 1976 and 1979. At first they had one driving cab. From 2004 to 2009 they were rebuilt without a cab and received low-floor driving trailers: ABt 341–344 and Bt 241–244. Older driving trailers were ABt 5301–5304.'] },
      { titel: 'Service and technology', p: ['The sets run in the order ABt – Be – Bt mainly between Zweisimmen and Lenk im Simmental and to Gstaad.', 'According to the annual report 2025 they are at the end of their service life. In November 2025 the MOB bought second-hand four-axle railcars of the Chemins de fer du Jura (CJ); four of them (652–655) were transferred in December 2025. They are being adapted in voltage, couplers and passenger information; first entry into service was planned for late 2026.'] },
      { titel: 'Facilities and accessibility', liste: ['Low-floor driving trailers ABt and Bt', '1st and 2nd class in the ABt', 'Luggage and multi-purpose area', 'The facilities apply to the whole push-pull train'] }
    ],
  bilder: ['Bt 242, Be 4/4 5002 and ABt 342 in Schönried (2022)', 'Driving trailer ABt 343 in St. Stephan (2023)', 'Inside Be 4/4 5003 (2023)']
});
uebZug('mob-ge44-8000', {
  typ: 'Electric locomotive for the GoldenPass Express',
  text: ['The Ge 4/4 of the 8000 series today haul the GoldenPass Express on the metre gauge between Montreux and Zweisimmen. In Zweisimmen the locomotive stays on its network; the coaches change gauge.', 'Number 8003 was sold to the RhB in 2019.'],
  kennzahlen: [['4', 'locomotives built'], ['3', 'with the MOB'], ['2000 kW', 'power'], ['1995', 'in service']],
  daten: { 'Bauart': 'electric locomotive with 4 axles', 'Fahrzeugnummern': '8001–8004 (8003 with the RhB since 2019)', 'Höchstgeschwindigkeit': '120 km/h (technical)', 'Anzahl': '3 (of 4)' },
  specNote: 'According to Wikipedia; the article gives 1994 as year built, the fleet list 1995. The locomotives are closely related to the RhB Ge 4/4 III but are equipped for DC. The RhB rebuilt the former 8003 into Ge 4/4 III 653.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SLM and ABB built the four locomotives in 1994/95. They resemble the Ge 4/4 III of the RhB and the Ge 4/4 of the BAM. Number 8003 went to the RhB in 2019 and runs there as 653 «St. Moritz».'] },
      { titel: 'Service and technology', p: ['The locomotives haul passenger trains and, since December 2022, the GoldenPass Express between Montreux and Zweisimmen. From 2017 to 2019 they received automatic Schwab couplers; since 2020 they can be multiple-controlled with suitable coaches and railcars.', 'In 2024 the MOB ordered four new locomotives of the 8500 series to replace them.'] },
      { titel: 'Facilities and accessibility', liste: ['Two driving cabs, no passenger space', 'Automatic Schwab coupler', 'Controlled from the driving trailer of the GoldenPass Express'] }
    ],
  bilder: ['Ge 4/4 8002 in Zweisimmen (2023)', 'Ge 4/4 8001 in Montreux (2024)', 'Ge 4/4 8004 in Zweisimmen (1995)']
});
uebZug('mob-gde44', {
  typ: 'Electric locomotive with luggage compartment for the panoramic trains',
  text: ['The GDe 4/4 of 1983 are locomotives with their own luggage compartment. They haul the panoramic trains up the steep ramps above Montreux.', 'On 3 November 1983 number 6003 reached 110 km/h between Zweisimmen and Lenk – a record for metre gauge in Europe.'],
  kennzahlen: [['6', 'locomotives (4 + 2 ex GFM)'], ['100 km/h', 'top speed'], ['50 t', 'weight'], ['1983', 'built']],
  daten: { 'Bauart': 'electric locomotive with luggage compartment', 'Länge': 'about 16.4 m', 'Anzahl': '6 built; 6001 and 6004 scrapped in December 2024' },
  specNote: 'According to Wikipedia and the dossier. For power and payload the public sources give different reference states, so they are not given. Wikipedia dates the purchase of the two GFM locomotives to 2007 or 2008.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SLM and BBC built six locomotives in 1983: four for the MOB and two for the GFM in Fribourg. The MOB took over the two GFM locomotives in 2007/08 as 6005 and 6006.', 'The requirement was to haul a 110 t train at 40 km/h up a 70 per mille gradient.'] },
      { titel: 'Service and technology', p: ['The GDe 4/4 hauled the Panoramic Express and through trains, partly with driving trailers, and were also used for freight and service trains. One locomotive seasonally hauls the Chocolate Train.', 'Each axle has its own motor; the locomotive brakes electrically and feeds power back. Numbers 6001 and 6004 were scrapped in December 2024.'] },
      { titel: 'Facilities and accessibility', liste: ['Luggage compartment in the locomotive body', 'Two driving cabs', 'Chopper control and regenerative brake'] }
    ],
  bilder: ['GDe 4/4 6005 in Montreux (2014)', 'GDe 4/4 6003 in Schönried (2022)', 'GDe 4/4 near Rougemont (1984)']
});
uebZug('mob-ge44-8500', {
  typ: 'New electric locomotives for the GoldenPass Express (ordered)',
  text: ['In October 2024 the MOB ordered four new electric locomotives from Stadler for the GoldenPass Express. They are to replace the Ge 4/4 of the 8000 series.', 'Two hybrid locomotives for works service belong to the same order.'],
  kennzahlen: [['4', 'locomotives ordered'], ['3 MW', 'power'], ['100 km/h', 'top speed'], ['2024', 'ordered']],
  daten: { 'Bauart': 'electric locomotive with 4 axles', 'Fahrzeugnummern': '8501–8504 (according to Wikipedia)', 'Länge': 'about 17 m', 'Anzahl': '4 ordered' },
  specNote: 'According to the Stadler press release of 14 October 2024 and the MOB annual report 2025. Delivery dates and running numbers are still planning.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['On 15 October 2024 Stadler and the MOB signed the contract for four electric locomotives and two hybrid works locomotives. The MOB financial documents list the electric locomotives as the 8500 series.'] },
      { titel: 'Service and technology', p: ['The new locomotives are to haul and push the GoldenPass Express and replace older locomotives. The order does not yet mean a completed delivery or approval.'] },
      { titel: 'Facilities and accessibility', liste: ['Four driven axles', 'About 17 m long', 'No passenger space'] }
    ]
});
uebZug('mob-gpx', {
  beiname: 'gauge-changing coaches',
  typ: 'Coaches with adjustable gauge for Montreux–Interlaken',
  text: ['Since December 2022 the GoldenPass Express has run from Montreux to Interlaken without changing trains. In Zweisimmen its coaches change from metre gauge to standard gauge.', 'On the MOB a Ge 4/4 hauls it, on the BLS a standard-gauge locomotive.'],
  kennzahlen: [['23', 'coaches'], ['1000/1435', 'mm gauge'], ['2022', 'in service'], ['Prestige', 'class']],
  daten: { 'Bauart': 'passenger coaches with gauge-changing bogies', 'Hersteller': 'Stadler (coaches), Alstom (bogie system)', 'Betreiber': 'MOB, with the BLS', 'Spurweite': 'metre and standard gauge (gauge-changing)', 'Länge': '18.8–19.4 m per coach', 'Gewicht': '25.3–26.5 t per coach', 'Anzahl': '23 coaches' },
  specNote: 'According to the report by Stephan Frei (Eisenbahn Amateur 10/2022) and the MOB. The seats are a 2022 figure and may differ today.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler built the 23 coaches; the bogies with variable gauge come from the system developed with Alstom. The design of the train ends is by Pininfarina, the interior by Innova Design. The coaches belong to the MOB.'],
        tabelle: { kopf: ['Coach', 'Numbers', 'Function', 'Seats (2022)'], zeilen: [
          ['Ast', '181–184', 'driving trailer, Prestige and 1st class', '9 + 20'], ['ABst', '381–384', 'driving trailer, Prestige and 2nd class', '9 + 25'],
          ['As', '191–194', '1st class with catering', '28'], ['Bs', '281–284', '2nd class', '54'], ['Bs NF', '271–274', 'low-floor coach 2nd class', '39'],
          ['Bsi', '291–293', 'interface coach to the standard-gauge locomotive', '54']] } },
      { titel: 'Service and technology', p: ['In Zweisimmen the train runs through the gauge-changing facility: the wheels are moved to the other gauge and the coach floor is adjusted to the platform height. A BLS locomotive then takes over for the onward journey via Spiez to Interlaken.', 'The interface coach Bsi connects the coaches with the standard-gauge locomotive, whose coupler and control are different.'] },
      { titel: 'Facilities and accessibility', liste: ['Prestige class with rotating, adjustable seats', 'Air conditioning, USB and 230 V sockets at the seat', 'Low-floor coach; according to the MOB 2 wheelchair spaces per train', 'No drive of its own'] }
    ],
  bilder: ['GoldenPass Express with Ge 4/4 8004 (2024)', 'Driving trailer Ast 183 in Zweisimmen (2023)', 'Low-floor coach Bs NF 272 (2024)']
});
uebZug('mob-panoramic', {
  name: 'Panoramic coaches',
  typ: 'Panoramic coaches and driving trailers with large windows',
  text: ['The MOB became known for its panoramic coaches from 1976. Large windows reaching into the roof open the view of Lake Geneva, the Pays-d’Enhaut and the Saanenland.', 'In some driving trailers the passengers sit at the front and the driver above them – so you travel in the front row.'],
  kennzahlen: [['1976', 'first panoramic coaches'], ['1993', 'Crystal driving trailers'], ['1st and 2nd', 'class'], ['Chernex', 'own workshop']],
  daten: { 'Bauart': 'panoramic coaches and driving trailers', 'Hersteller': 'R+J, MOB Chernex workshop, Breda', 'Fahrzeugnummern': 'among others As 110–119, Ast 116–117, Ast 151–152, Bs 220–238' },
  specNote: 'According to Wikipedia (MOB fleet list) and x-rail. Individual coaches were renumbered several times or sold.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The first panoramic coaches were built from 1976 by R+J and in the MOB Chernex workshop. In 1993 Breda delivered the Crystal driving trailers Ast 151 and 152.', 'In 2023 the MOB sold some older coaches (As 110, Bs 220 and 222–225) to Arterail in France; Bs 227 was scrapped in 2015.'] },
      { titel: 'Service and technology', p: ['The coaches run in the GoldenPass Panoramic between Montreux and Zweisimmen, usually behind a GDe 4/4 or an ALPINA. Offers such as the Chocolate Train also use these coaches.', 'In the driving trailers Ast 116 and 117 (Superpanoramic) and Ast 151 and 152 (Crystal) the passengers sit in front of the raised driving cab.'] },
      { titel: 'Facilities and accessibility', liste: ['Large windows reaching into the roof', 'Viewing seats in front of the driving cab in the driving trailers', 'Low-floor coaches Bs 231–238', 'No drive of its own'] }
    ],
  bilder: ['Driving trailer Ast 151 in Montreux (2014)', 'Panoramic coach As 118 in Gstaad (2016)', 'Panoramic coach Bs 236 (2014)']
});
uebZug('mob-belle-epoque', {
  name: 'Belle Époque coaches',
  typ: 'Coaches in the style of around 1900 for excursion trains',
  text: ['The Belle Époque coaches look like coaches from around 1900. They were built in 2004 and 2005 in the MOB workshop on older vehicles.', 'The real old saloon cars are Ars 101 and As 102.'],
  kennzahlen: [['4', 'rebuilt coaches'], ['2004', 'rebuilt'], ['1st and 2nd', 'class'], ['Bar', 'in Brs 201']],
  daten: { 'Bauart': 'passenger coaches in historic style', 'Hersteller': 'MOB Chernex workshop (rebuild)', 'Fahrzeugnummern': 'As 103, As 107, Brs 201, Bs 202; saloon cars Ars 101 and As 102' },
  specNote: 'According to the MOB and x-rail. According to the MOB the Belle Époque coaches are not accessible for wheelchairs or rollators.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['In 2004 and 2005 the MOB Chernex workshop built four coaches on older underframes with new bodies and interiors in historic style: As 103 and As 107 (1st class), Brs 201 with a bar and Bs 202 (2nd class).', 'Separate from these are the older saloon cars Ars 101 and As 102 with their own history.'] },
      { titel: 'Service and technology', p: ['The coaches run in the GoldenPass Belle Époque between Montreux and Zweisimmen and in bookable offers. Menu and catering apply to the booked offer.'] },
      { titel: 'Facilities and accessibility', liste: ['Wood and brass in the style of around 1900', 'Bar in Brs 201', 'Not accessible for wheelchairs or rollators', 'No drive of its own'] }
    ],
  bilder: ['Belle Époque coach Brs 201 (2012)', 'Belle Époque coach Bs 202 (2012)']
});

/* ---------- infrastructure ---------- */
uebZug('mob-gem22', {
  typ: 'Stadler dual-mode works locomotive',
  text: ['The three Gem 2/2 run on power from the overhead line or on diesel. They haul works and material trains on the MOB.', 'A fourth, HGem 2/2 2501, has a cogwheel and works for the MVR on the line to Les Pléiades.'],
  kennzahlen: [['3', 'locomotives with the MOB'], ['600 kW', 'electric'], ['400 kW', 'diesel'], ['2016', 'delivered']],
  daten: { 'Bauart': 'dual-mode locomotive (electric and diesel), 2 axles', 'Fahrzeugnummern': '2502–2504; HGem 2/2 2501 with the MVR', 'Leistung': '600 kW electric, 400 kW on diesel', 'Anzahl': '3 (plus 2501)' },
  specNote: 'Power according to the MOB annual report 2016. The trailing load depends strongly on the gradient and is therefore not given as a single figure.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler delivered the locomotives in 2016 as part of a joint order of several railways. Three are for the MOB, 2501 with a cogwheel for the MVR line to Les Pléiades.'] },
      { titel: 'Service and technology', p: ['The locomotives haul works trains and material transports and help with maintenance. On diesel they also run when the overhead line is switched off. They can be remote-controlled and used coupled.'] },
      { titel: 'Facilities and accessibility', liste: ['Pantograph and diesel engine', 'Remote control', 'No cogwheel (except 2501)'] }
    ],
  bilder: ['Gem 2/2 2504 in Montbovon (2022)', 'Gem 2/2 2503 in Saanen (2022)']
});
uebZug('mob-gm44', {
  beiname: '2003 and 2004',
  typ: 'Diesel locomotive for heavy works trains',
  text: ['The two Gm 4/4 are diesel locomotives from France. They haul heavy works trains and occasionally ran in passenger service too.', 'Despite the similar number they have nothing to do with the old luggage locomotives 2001 and 2002.'],
  kennzahlen: [['2', 'locomotives'], ['1976', '2003 built'], ['1982', '2004 built'], ['80 km/h', 'top speed']],
  daten: { 'Bauart': 'diesel locomotive with 4 axles' },
  specNote: 'According to Wikipedia (MOB fleet list) and the dossier. The sources checked do not give power or weight.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Moyse built 2003 in 1976, CFD built 2004 in 1982, both in France.'] },
      { titel: 'Service and technology', p: ['The locomotives haul heavy construction and works trains, also when the overhead line is switched off. The MOB is planning new infrastructure tractors; the annual report 2025 gives mid-2028 as the target.'] },
      { titel: 'Facilities and accessibility', liste: ['Diesel drive, independent of the overhead line', 'Two bogies', 'Designed for works trains'] }
    ]
});
uebZug('mob-gem44', {
  typ: 'New dual-mode works locomotives (ordered)',
  text: ['Together with the new GoldenPass locomotives the MOB ordered two hybrid works locomotives in 2024. They are to haul works and service trains also without overhead line.', 'They are about 17 m long and have four driven axles.'],
  kennzahlen: [['2', 'locomotives ordered'], ['17 m', 'length'], ['100 km/h', 'top speed'], ['2024', 'ordered']],
  daten: { 'Bauart': 'dual-mode locomotive with 4 axles', 'Fahrzeugnummern': '8601–8602 (according to Wikipedia)', 'Länge': 'about 17 m', 'Anzahl': '2 ordered' },
  specNote: 'According to Stadler (October 2024) and Wikipedia. Power per mode, diesel engine and battery have not yet been published; the 3 MW of the electric locomotives do not apply to these locomotives.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['In October 2024 Stadler and the MOB agreed on two hybrid four-axle works locomotives, related to the four new electric locomotives of the 8500 series.'] },
      { titel: 'Service and technology', p: ['The locomotives are to haul works and service trains on the whole MOB, also on sections without power. A delivery date has not yet been published.'] },
      { titel: 'Facilities and accessibility', liste: ['Operation on overhead line power', 'Second energy source for sections without overhead line', 'Four driven axles'] }
    ]
});

/* ---------- service and special vehicles ---------- */
uebZug('mob-schnee', {
  name: 'Snowploughs and crane wagon', beiname: 'Zaugg and Nencki',
  typ: 'Vehicles for winter service and maintenance works',
  text: ['For the winter the MOB received two new Zaugg snowploughs in 2016, plus a crane wagon with Nencki equipment.', 'A snowplough pushes the snow aside; it is moved by a locomotive or a railcar.'],
  kennzahlen: [['2', 'snowploughs (2016)'], ['1', 'crane wagon'], ['Zaugg', 'plough maker'], ['2016', 'acquired']],
  daten: { 'Bauart': 'snowploughs and crane wagon', 'Hersteller': 'Zaugg (ploughs), Nencki (crane)', 'Anzahl': '2 snowploughs, 1 crane wagon' },
  specNote: 'According to the MOB annual report 2016. Numbers, weights and load charts have not been published; a maximum crane load is therefore not given.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['According to the annual report 2016, two adhesion snowploughs from Zaugg and a crane wagon with Nencki equipment came to the MOB.'] },
      { titel: 'Service and technology', p: ['In winter the snowploughs keep the line between Montreux, Zweisimmen and Lenk open. The crane wagon lifts material for construction and maintenance. By about mid-2028 platforms with crane and work stage for track and overhead line work are also to come.'] },
      { titel: 'Facilities and accessibility', liste: ['Plough blade for clearing to the side', 'Crane with outriggers', 'Working width and crane load depend on the unit'] }
    ],
  bilder: ['MOB high-speed plough in front of a railcar near Oeschseite (2017)']
});

/* ---------- historic vehicles ---------- */
uebZug('mob-bcfe44', {
  typ: 'First-generation electric railcar from 1905 (historic)',
  text: ['BCFe 4/4 11 is one of the first electric railcars of the MOB. It dates from 1905 and today runs with the Blonay–Chamby museum railway.', 'It had compartments of 2nd and 3rd class and a luggage room.'],
  kennzahlen: [['1905', 'built'], ['192 kW', 'power'], ['50 km/h', 'top speed'], ['29 t', 'weight']],
  daten: { 'Bauart': 'electric passenger and luggage railcar', 'Betreiber': 'MOB, today Blonay–Chamby museum railway', 'Fahrzeugnummern': '11 (series 7–20)', 'Sitzplätze': '12 in 2nd, 16 in 3rd class (historic)', 'Erhalten': 'Blonay–Chamby, operational' },
  specNote: 'According to the sheet of the Blonay–Chamby museum railway. For the handover to the museum the sources give 1999 and 2000.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SIG and Alioth built the railcar in 1905 for the young MOB. It belongs to the BCFe 4/4 7–20 series with which the MOB built up its electric operation.'] },
      { titel: 'Service and technology', p: ['The car carried passengers and luggage on the mountain line from Montreux. Around 2000 it came to the Blonay–Chamby museum railway and was restored for the MOB centenary in 2001. Today it runs there in museum trains.'] },
      { titel: 'Facilities and accessibility', liste: ['Compartments of 2nd and 3rd class (historic)', 'Luggage room of 6 m² for 2 t', 'Four motors of 48 kW each'] }
    ],
  bilder: ['BCFe 4/4 11 in Chamby (2018)', 'BCFe 4/4 11 (2013)']
});
uebZug('mob-fze66', {
  beiname: '2001 and 2002',
  typ: 'Luggage and mail locomotive from 1932 (historic)',
  text: ['Until 1968 the FZe 6/6 were the most powerful vehicles of the MOB. They were built in 1932 for a luxury train that was soon withdrawn because of the economic crisis.', 'Number 2002 runs today with the Blonay–Chamby museum railway.'],
  kennzahlen: [['2', 'locomotives'], ['738 kW', 'power'], ['55 km/h', 'top speed'], ['1932', 'built']],
  daten: { 'Bauart': 'electric luggage and mail locomotive on 3 bogies', 'Betreiber': 'MOB, today Blonay–Chamby museum railway', 'Fahrzeugnummern': '2001, 2002 (DZe 6/6 from 1962)', 'Erhalten': '2002 (Blonay–Chamby, since 2008)' },
  specNote: 'According to the sheet of the Blonay–Chamby museum railway and Wikipedia. FZe and DZe are two designations of the same vehicles, not two different locomotives.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SIG and BBC built the two vehicles in 1932 for the Golden Mountain Pullman Express of 1931. The luxury train failed in the Great Depression; after that the locomotives ran with ordinary passenger and freight trains.'] },
      { titel: 'Service and technology', p: ['They often hauled heavy freight trains, for example with building materials. In 1962 they were renamed DZe 6/6, and in 1977/79 adapted for transporter-wagon trains.', 'Number 2001 was stored in 1988 and scrapped in 2007. Number 2002 was withdrawn in 2002, came to the Blonay–Chamby museum railway on 19 July 2008 and is operational there.'] },
      { titel: 'Facilities and accessibility', liste: ['Luggage and mail room of 10.2 m² for 4 t', 'Six motors of 123 kW each', 'Articulated body on three bogies'] }
    ],
  bilder: ['FZe 6/6 2002 in Chamby-Musée (2026)']
});
uebZug('mob-bde44-3000', {
  typ: 'Lightweight railcars from 1944 and 1946 (historic)',
  text: ['The six BDe 4/4 of the 3000 series shaped MOB operations after the Second World War. They also hauled older coaches and driving trailers.', 'Most have been scrapped; number 3002 still exists.'],
  kennzahlen: [['6', 'railcars'], ['1944', 'first four'], ['1946', 'two more'], ['3002', 'still exists']],
  daten: { 'Bauart': 'electric passenger and luggage railcar' },
  specNote: 'According to Wikipedia (MOB fleet list) and the dossier. Scrapped: 3003 (1996), 3004 (2010), 3001 (2019), 3005 and 3006 (2024). Present operability of 3002 is not confirmed.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SIG and BBC delivered 3001–3004 in 1944 and 3005 and 3006 in 1946.'] },
      { titel: 'Service and technology', p: ['The lightweight railcars ran passenger and luggage trains on the whole MOB, often with older coaches and driving trailers. From 1968 the ABDe 8/8 took over part of their duties; later they served in service duty and as reserve.', 'For 3002 the annual report 2012 records a partial overhaul and changes to the driving cab.'] },
      { titel: 'Facilities and accessibility', liste: ['Compartments for passengers and luggage', 'Two driving cabs', 'Preserved: 3002'] }
    ],
  bilder: ['BDe 4/4 3002 in Zweisimmen (2014)', 'BDe 4/4 with a freight train (1984)']
});
uebZug('mob-abde88', {
  typ: 'Twin railcar from 1968 (historic)',
  text: ['For a long time the four ABDe 8/8 of 1968 were the backbone of the MOB. Each unit consists of two permanently coupled halves with eight driven axles in total.', 'They have been out of service since 2017; two stand stored in Lenk.'],
  kennzahlen: [['4', 'twin railcars'], ['70 km/h', 'top speed'], ['86', 'seats'], ['1968', 'in service']],
  daten: { 'Bauart': 'electric twin railcar', 'Sitzplätze': '18 in 1st, 68 in 2nd class', 'Erhalten': '4001 and 4004 stored in Lenk' },
  specNote: 'According to Wikipedia. Wikipedia gives 840 V DC, older network documents 900 V. Stored does not mean preserved by a museum.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SIG, BBC and SAAS built the four units in 1968. Each bears a coat of arms: 4001 the Swiss arms, 4002 Vaud, 4003 Bern and 4004 Fribourg.'] },
      { titel: 'Service and technology', p: ['From 1968 they ran most of the traffic Montreux–Zweisimmen and replaced the BDe 4/4 of the 3000 series. On a 73 per mille gradient they hauled up to five coaches weighing 80 t.', 'After the arrival of the GDe 4/4 from 1983 they took on smaller duties. They were officially retired on 2 and 3 September 2017. Number 4003 was scrapped in 2018, 4002 in 2021; 4001 and 4004 have stood in Lenk since 2020.'] },
      { titel: 'Facilities and accessibility', liste: ['18 seats in 1st and 68 in 2nd class', 'Luggage compartment', 'Two halves as a fixed unit'] }
    ],
  bilder: ['ABDe 8/8 4003 in Zweisimmen (2014)', 'ABDe 8/8 4001 stored in Lenk (2023)']
});
uebZug('mob-hist-wagen', {
  name: 'Historic passenger coaches', beiname: 'BC4 22 and B4 61',
  typ: 'Early MOB passenger coaches at Blonay–Chamby (historic)',
  text: ['Two early MOB passenger coaches are preserved at the Blonay–Chamby museum railway: BC4 22 of 1902 and B4 61 of 1906.', 'They show how people travelled in the first years of the MOB.'],
  kennzahlen: [['1902', 'BC4 22'], ['1906', 'B4 61'], ['48', 'seats in BC4 22'], ['SIG', 'manufacturer']],
  daten: { 'Bauart': 'historic bogie passenger coaches', 'Betreiber': 'MOB, today Blonay–Chamby museum railway', 'Sitzplätze': '48 of 3rd class (BC4 22), 30 of 2nd class (B4 61)', 'Erhalten': 'Blonay–Chamby museum railway' },
  specNote: 'According to the sheets of the Blonay–Chamby museum railway. Despite its mixed-class designation BC4 22 today has a 3rd-class-only interior; according to its sheet B4 61 was under overhaul.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SIG in Neuhausen built BC4 22 in 1902 and B4 61 in 1906.'] },
      { titel: 'Service and technology', p: ['The coaches ran on the MOB in the first decades, behind early railcars such as BCFe 4/4 11. Today they belong to the collection of the Blonay–Chamby museum railway.', '3rd class is a historic feature, not a present-day offer.'] },
      { titel: 'Facilities and accessibility', liste: ['BC4 22: 48 seats of 3rd class', 'B4 61: 30 seats of 2nd class', 'No drive of its own'] }
    ],
  bilder: ['BC4 22 at Blonay–Chamby (2023)', 'B4 61 in Blonay (2018)', 'Inside B4 61 (2019)']
});
uebZug('mob-hist-gueterwagen', {
  name: 'Historic freight wagons', beiname: 'K, L, M and O',
  typ: 'Early MOB freight wagons at Blonay–Chamby (historic)',
  text: ['The MOB used to carry general cargo, livestock, timber and building materials. Four early freight wagons from 1901 to 1905 are preserved at the Blonay–Chamby museum railway.', 'L 153 was even a snowplough for a while.'],
  kennzahlen: [['4', 'wagons'], ['1901', 'oldest (K 101)'], ['10–12 t', 'load capacity'], ['1905', 'youngest (O 810)']],
  daten: { 'Bauart': 'historic freight wagons', 'Betreiber': 'MOB, today Blonay–Chamby museum railway', 'Gewicht': '5.0–7.8 t empty', 'Nutzlast': '10 or 12 t', 'Erhalten': 'Blonay–Chamby museum railway' },
  specNote: 'According to the sheets of the Blonay–Chamby museum railway. The load capacity is the permitted load, not the total weight. Today the MOB no longer has any significant freight traffic of its own.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The four preserved wagons date from the first years of MOB operation.'],
        tabelle: { kopf: ['Wagon', 'Built', 'Manufacturer', 'Empty', 'Load capacity'], zeilen: [
          ['K 101', '1901', 'SIG', '7.7 t', '10 t'], ['L 153', '1903', 'SIG Neuhausen', '6.7 t', '10 t'], ['M 706', '1904', 'Busch Bautzen', '5.0 t', '10 t'], ['O 810', '1905', 'Busch Bautzen', '7.8 t', '12 t']] } },
      { titel: 'Service and technology', p: ['The wagons have hand and automatic vacuum brakes. L 153 was rebuilt into snowplough X 153 in 1971 and later called Xa 9. After its transfer to Blonay–Chamby in 2006 it was restored as L 153 and has run again since 2009.', 'Later the MOB also carried standard-gauge freight wagons on transporter bogies, mainly between Zweisimmen and Lenk.'] },
      { titel: 'Facilities and accessibility', liste: ['Covered and open wagons', 'Hand and vacuum brake', 'No drive of its own'] }
    ],
  bilder: ['Freight wagon M 706 at Blonay–Chamby (2021)', 'High-sided wagon O 801 at Blonay–Chamby (2012)']
});

/* maps «Where does it run?» */
uebEinsatz({
  'mob-alpina': 'On the main line Montreux–Zweisimmen and on to Lenk, in regional trains and with panoramic coaches. The metre gauge is dashed and simplified.',
  'mob-be44-5000': 'Mainly between Zweisimmen and Lenk im Simmental and to Gstaad. The metre gauge is dashed and simplified.',
  'mob-ge44-8000': 'At the head of the GoldenPass Express between Montreux and Zweisimmen. The metre gauge is dashed and simplified.',
  'mob-gde44': 'At the head of the panoramic trains on the whole MOB, seasonally also of the Chocolate Train. The metre gauge is dashed and simplified.',
  'mob-ge44-8500': 'Planned at the head of the GoldenPass Express between Montreux and Zweisimmen. The metre gauge is dashed and simplified.',
  'mob-gpx': 'Montreux–Zweisimmen on metre gauge (dashed), then after the gauge change on standard gauge via Spiez to Interlaken Ost.',
  'mob-panoramic': 'In the GoldenPass Panoramic between Montreux and Zweisimmen. The metre gauge is dashed and simplified.',
  'mob-belle-epoque': 'In the GoldenPass Belle Époque between Montreux and Zweisimmen. The metre gauge is dashed and simplified.',
  'mob-gem22': 'With works and material trains on the whole MOB. The metre gauge is dashed and simplified.',
  'mob-gm44': 'At the head of heavy works trains on the whole MOB. The metre gauge is dashed and simplified.',
  'mob-gem44': 'Planned for works and service trains on the whole MOB. The metre gauge is dashed and simplified.',
  'mob-schnee': 'In winter between Montreux, Zweisimmen and Lenk. The metre gauge is dashed and simplified.',
  'mob-bcfe44': 'Formerly on the mountain line from Montreux; today with the Blonay–Chamby museum railway. The metre gauge is dashed and simplified.',
  'mob-fze66': 'Formerly at the head of heavy trains on the whole MOB; 2002 runs today at Blonay–Chamby. The metre gauge is dashed and simplified.',
  'mob-bde44-3000': 'Formerly on the whole MOB. The metre gauge is dashed and simplified.',
  'mob-abde88': 'Formerly mainly between Montreux and Zweisimmen; two units stand stored in Lenk. The metre gauge is dashed and simplified.',
  'mob-hist-wagen': 'Formerly on the MOB; today with the Blonay–Chamby museum railway. The metre gauge is dashed and simplified.',
  'mob-hist-gueterwagen': 'Formerly in MOB freight traffic; today with the Blonay–Chamby museum railway. The metre gauge is dashed and simplified.'
});
