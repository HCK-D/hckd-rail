/* English – SBB Passenger vehicles */
uebDict({ 'ja': 'yes', 'nein': 'no' });

uebZug('rabe-501', {
  typ: 'Electric high-speed train',
  text: ['The Giruno is an eleven-car multi-system train built by Stadler for domestic and international long-distance services.', 'It links Switzerland with Italy and Germany and is designed for a top speed of 250 km/h.'],
  kennzahlen: [['41', 'trains in the SBB fleet'], ['405', 'seats'], ['250 km/h', 'top speed'], ['2019', 'first in service with SBB']],
  daten: { 'Betreiber': 'SBB Passenger', 'Zugbildung': '11 cars', 'Länge': '202.0 m over couplers', 'Gewicht': '381 t empty', 'Leistung': '6000 kW max. at the wheel', 'Sitzplätze': '405 (117 in 1st class, 288 in 2nd class)', 'Restaurant': '17 additional seats', 'Anzahl': '41 trains' },
  specNote: 'Technology and seat layout according to Stadler, empty weight according to SBB Infrastructure.',
  abschnitte: [
    { titel: 'Manufacturer and fleet build-up', p: ['In 2014 SBB first ordered 29 trains from Stadler. The first series entered service from 2019 to 2021. Follow-up orders increased the fleet to 41 trains.', 'SBB announced delivery of the last vehicle ordered for December 2025; its current fleet overview lists all 41 trains.'] },
    { titel: 'Service and technology', p: ['Its routes include Zurich–Milan through the Gotthard Base Tunnel. In the 2026 timetable, Giruno trains also run between Basel and Hamburg. The manufacturer lists approvals for Switzerland, Germany, Italy and Austria.', 'Four traction converters feed four motor bogies; two trains can run in multiple.'] },
    { titel: 'Facilities and accessibility', liste: ['Wi-Fi', 'Power sockets', 'Family zone', 'Quiet zone', 'Business zone', 'Bicycle spaces', 'Wheelchair-accessible toilets in both classes', 'On-board restaurant'],
      p: ['The doors are designed for platform heights of 55 and 76 cm. At suitable platforms, wheelchair users can board unaided and reach the restaurant.'] }
  ],
  bilder: ['RABe 501 «Giruno» passing through', 'Stadler Giruno in a station', 'Giruno in Basel', 'Two Giruno trains side by side', 'Giruno with restaurant car in the shed']
});

uebZug('rabde-500', {
  typ: 'InterCity tilting train',
  text: ['The ICN is a seven-car electric tilting train for Swiss long-distance services. Its tilting system allows higher speeds through curves on suitable winding lines.', 'It is mainly used on the Jura foot line.'],
  kennzahlen: [['44', 'trains in the SBB fleet'], ['471', 'seats according to SBB'], ['200 km/h', 'top speed'], ['1999', 'first in service according to SBB']],
  daten: { 'Betreiber': 'SBB Passenger', 'Zugbildung': '7 cars', 'Gewicht': '368 t empty', 'Neigetechnik': 'active body tilting', 'Anzahl': '44 trains (1st series 24, 2nd series 20)', 'Hersteller': 'Series 1: Adtranz and FIAT-SIG; series 2: Bombardier/Alstom' },
  specNote: 'Technical values according to SBB Infrastructure. The SBB vehicle page rounds the length to 190 m and gives 471 seats and 1999 as the first year in service.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SBB owns 44 ICN. The first series, numbers 000 to 023, was built by Adtranz and FIAT-SIG, the second, numbers 024 to 043, by the Bombardier/Alstom consortium; its delivery began in 2003.', 'Alstom supplied the bogies and the tilting system from Neuhausen, among other parts. The first ICN ran in 1999.'] },
      { titel: 'Service and technology', p: ['Its main routes are Basel–Biel–Lausanne and Romanshorn–St. Gallen–Zurich–Biel–Geneva on the Jura foot line. Other services run to Ticino.', 'Thanks to active body tilting, the seven-car train takes curves faster on winding lines. It reaches 200 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Restaurant', 'Family zone', 'Quiet zone and business zone in 1st class', 'Power sockets, also at the side tables', 'Windows with better mobile reception', 'Bike spaces', 'Pram spaces and baby-changing table', 'Wheelchair spaces and accessible toilet', 'Priority seats'],
        p: ['Boarding is not low-floor. Wheelchair spaces and an accessible toilet are available.'] },
      { titel: 'Modernisation', p: ['Since 2021 SBB has been refurbishing the ICN trains at its Yverdon works. The first fully modernised train was presented on 24 October 2024. Besides seats, lighting, tables and passenger information, technical components are also overhauled.', 'The current SBB vehicle page gives 2034 as the completion year; the aim is around 20 more years of service.'] }
    ],
  bilder: ['ICN in summer in front of the mountains', 'ICN in the winter sun', 'RABDe 500 021 in Rotkreuz', 'ICN on its way', 'ICN on the Aare bridge in Solothurn']
});

uebZug('rabe-502', {
  typ: 'Twindexx Swiss Express, double-deck long-distance train',
  text: ['The Twindexx Swiss Express is the SBB double-deck multiple unit for long-distance services. SBB calls it the FV-Dosto.', 'Three versions offer different capacities and can be coupled together as demand requires: the IC200 as RABDe 502, and the IR200 and IR100 as RABe 502.'],
  kennzahlen: [['62', 'trains in the SBB fleet'], ['200 km/h', 'top speed'], ['2018', 'first in service with SBB'], ['3', 'versions']],
  daten: { 'Hersteller': 'Bombardier Transportation, now Alstom', 'Antrieb': 'permanent-magnet synchronous motors', 'Gewicht': '237.1–467.4 t empty, depending on version', 'Anzahl': '62 trains (23 InterCity, 39 InterRegio)', 'In Betrieb seit': '2018, whole fleet delivered in 2022' },
  specNote: 'Empty weights according to SBB: IR100 237.1 t, IR200 463.2 t, IC200 467.4 t.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The builder is Bombardier Transportation, now part of Alstom. The original order for 59 trains was raised to 62 by an agreement in 2014: 23 InterCity and 39 InterRegio trains.', 'The first FV-Dosto ran in 2018, and the fleet was fully delivered in 2022. There are three versions: IC200 (RABDe 502) and IR200 and IR100 (RABe 502).'] },
      { titel: 'Service and technology', p: ['An important corridor is St. Gallen–Zurich–Bern–Lausanne–Geneva. Other services run on Basel–Zurich, Zurich–Chur and Lucerne–Zurich, among others.', 'The trains reach 200 km/h and are driven by permanent-magnet synchronous motors. At peak times, formations up to 400 m long offer up to 1300 seats.'] },
      { titel: 'Facilities and accessibility', liste: ['Restaurant, family car, quiet zone and business zone (IC version only)', 'Power sockets', 'Windows with better mobile reception', 'Electronic reservation display', 'Bike, pram and luggage spaces', 'Low-floor entrances', 'Wheelchair spaces and accessible toilet', 'Priority seats and baby-changing table'],
        p: ['Thanks to low-floor entrances, wheelchair users can board step-free at suitable platforms.'] },
      { titel: 'Technical data of the three versions', tabelle: { kopf: ['Feature', 'IC200', 'IR200', 'IR100'], zeilen: [
      ['Class', 'RABDe 502', 'RABe 502', 'RABe 502'],
      ['Cars per train', '8', '8', '4'],
      ['Length', '200.6 m', '200.6 m', '101.0 m'],
      ['Seats', '606', '682', '330'],
      ['Maximum power', '7500 kW', '7500 kW', '3750 kW'],
      ['Empty weight', '467.4 t', '463.2 t', '237.1 t'],
      ['Starting tractive effort', '482.24 kN', '482.24 kN', '241.12 kN'],
      ['Restaurant', 'yes', 'no', 'no']] },
      hinweis: 'Seats and facilities according to SBB, technical values according to SBB Infrastructure. Weights refer to empty vehicles.' },
      { titel: 'Further development', p: ['SBB has decided to modify the bogies of the entire fleet. The roll compensation is removed and the suspension adjusted.', 'According to an announcement from December 2025, series conversion is due to start after the operating approval at the end of 2026 and last until the early 2030s.'] }
    ],
  bilder: ['FV-Dosto on a long-distance service against the mountains', 'RABDe 502 006 «Olten» at Zurich HB', 'RABe 502 402 «Biel/Bienne» in front of the mountains', 'RABe 502 214 near Tecknau', 'RABe 502 404 by the lake']
});

uebZug('rabe-511', {
  typ: 'Double-deck multiple unit, Regio-Dosto and IR-Dosto',
  text: ['Stadler’s RABe 511 class (KISS type) comprises two double-deck versions: 69 six-car Regio-Dosto and 24 four-car IR-Dosto trains.', 'SBB lists the two versions separately because their length, capacity and use differ.'],
  kennzahlen: [['93', 'trains of both versions'], ['160 km/h', 'top speed'], ['2012', 'first in service'], ['Stadler', 'manufacturer']],
  daten: { 'Betreiber': 'SBB Passenger', 'Bauart': 'double-deck multiple unit', 'Zugbildung': '6 cars (Regio-Dosto), 4 cars (IR-Dosto)', 'Länge': '150.0 m (Regio-Dosto), 100.0 m (IR-Dosto)', 'Leistung': '6000 kW (both versions)', 'Gewicht': '210–292 t, depending on version', 'Anzahl': '93 trains (69 Regio-Dosto, 24 IR-Dosto)', 'Einsatz': 'Zurich S-Bahn, RegioExpress, InterRegio' },
  specNote: 'Weight according to SBB: 210 t for the four-car IR-Dosto, 292 t for the six-car Regio-Dosto.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler delivered these KISS double-deck trains from 2012. SBB runs 69 six-car Regio-Dosto and 24 four-car IR-Dosto.', 'The 24 IR-Dosto were created from 2020 to 2024 by upgrading Regio-Dosto for long-distance service. SBB is renewing the other Regio-Dosto until 2035; afterwards they will all wear the blue ZVV livery.'] },
      { titel: 'Service and technology', p: ['Regio-Dosto mainly run on Zurich S-Bahn lines and as the RE Wettingen–Olten–Lucerne.', 'IR-Dosto run interregional services in German- and French-speaking Switzerland, among others around Zurich, in the Mittelland, in north-western Switzerland and towards Chur. Both versions run at up to 160 km/h; the IR-Dosto can be coupled with the newer RABe 512.'] },
      { titel: 'Facilities and accessibility', liste: ['Low-floor entrances', 'Wheelchair spaces and accessible toilet', 'Bike and pram spaces', 'Mobile signal booster', 'Power sockets in 1st class (IR-Dosto: at almost every seat, also in 2nd class)', '2+1 seating in 1st class (IR-Dosto)'],
        p: ['The wide low entrances allow step-free boarding at suitable platforms.'] },
      { titel: 'The versions compared', tabelle: { kopf: ['Feature', 'Regio-Dosto', 'IR-Dosto'], zeilen: [
      ['Vehicles', '69', '24'],
      ['Cars per train', '6', '4'],
      ['Length', '150.0 m', '100.0 m'],
      ['Seats', '535 (120 / 415)', '317'],
      ['Speed', '160 km/h', '160 km/h'],
      ['Power', '6000 kW', '6000 kW'],
      ['Weight', '292 t', '210 t'],
      ['Low-floor entrance', 'yes', 'yes'],
      ['Services', 'S-Bahn / RE', 'IR / RE']] },
      hinweis: 'The split 120 / 415 refers to the 1st and 2nd class seats in the Regio-Dosto. For the IR version SBB gives 317 seats in total.' }
    ],
  bilder: ['Regio-Dosto as Zurich S-Bahn line S15 in Jona', 'RABe 511 112 at Genève-Cornavin', 'RABe 511 026 in Geneva', 'RABe 511 in Sevelen', 'RABe 511 018 at Zurich HB']
});

uebZug('rabe-514', {
  typ: 'Double-deck multiple unit of the Zurich S-Bahn',
  text: ['The RABe 514 is the second-generation double-deck multiple unit (DTZ) of the Zurich S-Bahn. Siemens supplied 61 four-car trains.', 'Low-level entrances with gap bridges make boarding easier.'],
  kennzahlen: [['61', 'trains'], ['360', 'seats per train'], ['140 km/h', 'top speed'], ['2006', 'first in service with SBB']],
  daten: { 'Betreiber': 'SBB Passenger', 'Bauart': 'double-deck multiple unit', 'Zugbildung': '4 cars', 'Gewicht': '223 t empty', 'Anzahl': '61 trains', 'Einsatz': 'Zurich S-Bahn' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Siemens delivered the 61 double-deck multiple units (DTZ) from 2006 to 2009. They are the second generation of double-deck trains of the Zurich S-Bahn.'] },
      { titel: 'Service and technology', p: ['The DTZ can run on the whole Zurich S-Bahn network. A train is 100 m long, offers 360 seats and runs at up to 140 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Continuous low entrances with gap bridging', 'Multi-purpose area with bike and pram spaces', 'Priority seats', 'Wheelchair spaces', 'Accessible toilet'],
        p: ['Thanks to the low entrances with gap bridging, wheelchair users can board without a step at suitable platforms.'] },
      { titel: 'Modernisation', p: ['SBB has been refurbishing the fleet since 2025, probably until around 2030. This includes a new livery, better mobile reception through adapted window glass, and work on lighting, interiors and technical components.', 'The refurbishment is intended to extend the service life to 32 years.'] }
    ],
  bilder: ['RABe 514 «DTZ» on its way', 'Stairs to the middle level of a refurbished DTZ', 'RABe 514 054 as S8 at Zurich Enge', 'RABe 514 015 in the new 2023 ZVV livery', 'DTZ as S15 on the causeway at Rapperswil']
});

uebZug('rabe-523', {
  typ: 'Stadler electric regional multiple unit',
  text: ['The four-car RABe 523 was the first FLIRT for SBB. It was developed for the Zug Stadtbahn and entered passenger service in 2004.', 'The class belongs to the larger FLIRT family, which runs in several versions.'],
  kennzahlen: [['2004', 'first in service'], ['98*', 'vehicles according to number ranges'], ['2656 kW', 'power'], ['73.5–74.1 m', 'length']],
  daten: { 'Bauart': 'electric multiple unit', 'Grundtyp': '4 cars', 'Einstieg': 'low-floor', 'Höchstgeschwindigkeit': '160 km/h (FLIRT family according to SBB)', 'Erste Region': 'Zug Stadtbahn', 'Einsatz': 'regional services, S-Bahn', 'Anzahl': '98* (according to number ranges)' },
  specNote: '* The figure of 98 comes from the published number ranges 001–073, 101–114 and 501–511; there is no separately confirmed current SBB fleet figure. SBB gives 160 km/h for the whole regional FLIRT family.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['All FLIRT come from Stadler; the first ran at SBB in 2004. In regional service, SBB uses a total of 209 FLIRT of various classes.'] },
      { titel: 'Service and technology', p: ['According to SBB, FLIRT run as S-Bahn trains in the cantons of Aargau, Solothurn, Lucerne, Basel, Neuchâtel, Fribourg and Vaud, among others.', 'Depending on the version, the trains are 75 to 105 m long and offer 156 to 236 seats. They run at up to 160 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Low-floor entrance', 'Wheelchair spaces and accessible toilet', 'Priority seats', 'Baby-changing table (only in some trains)', 'Power sockets in 1st class', 'Bike, pram and luggage spaces'],
        p: ['These details apply to the SBB FLIRT family; specifics differ by version.'] },
      { titel: 'Series compared', tabelle: { kopf: ['Numbers', 'Number', 'Built', 'Length', 'Weight', 'First service'], zeilen: [
        ['001–012', '12', '2004–2005', '74.1 m', '120 t', 'Zug Stadtbahn'],
        ['013–031', '19', '2009–2010', '74.1 m', '120 t', 'RER Vaud'],
        ['032–043', '12', '2009–2010', '74.1 m', '120 t', 'Central Switzerland, rebuilt from RABe 522'],
        ['044–056', '13', '2012–2013', '74.1 m', '120 t', 'RegiOlten'],
        ['057–066', '10', '2015–2016', '74.1 m', '127 t', 'RegiOlten'],
        ['067–073', '7', '2017', '74.1 m', '127 t', 'RegiOlten'],
        ['074–077', '4', '2017', '74.1 m', '127 t', 'transN, not in the SBB count'],
        ['101–114', '14', '2020–2021', '73.5 m', '160 t', 'RER Vaud (FLIRT 3)'],
        ['501–511', '11', '2022–2024', '73.5 m (SBB: about 75 m)', '160 t', '«Mouette», long-distance, 181 seats']] },
        hinweis: 'Lengths and weights according to passiontrain.ch, rounded; the weights are given there as total mass. Areas of service apply to the time of entry into service and may change.' },
      { titel: 'Understanding the numbers', p: ['The published figure of 209 covers all FLIRT trains used by SBB in regional service, including other classes and versions.', 'For the RABe 523 alone, the published number ranges 001–073, 101–114 and 501–511 add up to 98 vehicles. This is derived from the numbers and is not an official current SBB fleet figure.'] }
    ],
  bilder: ['RABe 523 001 in Muttenz', 'RABe 523 019', 'RABe 523 024 in Montreux', 'RABe 523 018 in Yverdon-les-Bains', 'RABe 523 038']
});

uebZug('rbde-560', {
  typ: 'Regional push-pull train',
  text: ['The Domino is an electric push-pull train for regional and S-Bahn services. It combines modernised NPZ power cars and driving trailers with a new INOVA low-floor intermediate car.', 'The designation RBDe 560 refers to the powered end car, not to the whole train.'],
  kennzahlen: [['86', 'SBB trains'], ['140 km/h', 'top speed'], ['75 m', 'length'], ['172', 'seats'], ['2009', 'first in service with SBB']],
  daten: { 'Fahrzeugart': 'electric push-pull train', 'Leistung': '1700 kW on the RBDe 560', 'Gewicht': 'approx. 146 t empty', 'Niederflur': 'in the intermediate car', 'Anzahl': '86 trains', 'In Betrieb seit': '2009 (first in service with SBB)', 'Hersteller': 'Schindler Waggon, SWA, SIG, ABB and Bombardier (depending on the car)', 'Status': 'in service' },
  specNote: 'Fleet, capacity and service data according to SBB. Technical values according to SBB Infrastructure. The empty weight is the total of the three cars.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SBB owns 86 Domino. The power cars and driving trailers come from the NPZ family by Schindler Waggon, SWA, SIG and ABB; Bombardier supplied the new low-floor INOVA intermediate cars.', 'There is therefore no single year of construction for the whole train. The first Domino ran at SBB in 2009.'] },
      { titel: 'Service and technology', p: ['SBB mainly uses the Domino on S-Bahn lines in the cantons of Aargau, Lucerne, Neuchâtel and Vaud. The exact line allocation can change with the timetable.', 'A three-car train is 75 m long, offers 172 seats and runs at up to 140 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Step-free entrance in the intermediate car', 'Wheelchair spaces and accessible toilet', 'Priority seats', 'Power sockets in 1st class', 'Bike, pram and luggage spaces', 'Improved mobile reception'],
        p: ['Only the INOVA intermediate car is low-floor; the power car and driving trailer have steps.'] },
      { titel: 'Train components', tabelle: { kopf: ['Vehicle', 'Role', 'Length', 'Empty weight', 'Drive'], zeilen: [
      ['RBDe 560', 'powered end car', '25.0 m', '72.0 t', '1700 kW / 182 kN'],
      ['B INOVA', 'low-floor intermediate car', '24.4 m', '36.0 t', 'no own drive'],
      ['ABt', 'driving trailer with 1st and 2nd class', '25.0 m', '38.0 t', 'no own drive']] } },
      { titel: 'Other operators', tabelle: { kopf: ['Operator', 'Fleet', 'Length', 'Seats', 'Notes'], zeilen: [
      ['TPF', '14', '75 m', '184 (24 1st + 160 2nd cl.)', '1650 kW; 140 km/h; RBDe 235–247 and 269'],
      ['RegionAlps', '16', '74.5 m', '188 (12 1st + 176 2nd cl.)', '100 standing places; 140 km/h; St-Gingolph–Brig']] },
      hinweis: 'Fleet and capacity figures according to TPF and RegionAlps. Values of other operators cannot simply be applied to SBB trains; power and capacity in particular differ.' },
      { titel: 'Replacement', p: ['SBB is procuring 198 FLIRT Evo trains to gradually replace the Domino and first-generation FLIRT trains. Service with SBB starts in 2028; regional introduction is planned until 2033.', 'RegionAlps has announced 27 FLIRT Evo, which are to replace its Domino and NINA trains by 2031.'] }
    ],
  bilder: ['Domino between vineyards and a lakeside village', 'Domino in autumn light', 'Two Domino trains in multiple above the lake', 'Domino among the vineyard terraces', 'Domino on the lakeshore', 'Domino in multiple in the vineyards']
});

uebZug('re-460', {
  typ: 'Electric universal locomotive',
  text: ['The Re 460, often called «Lok 2000», is a four-axle high-performance universal locomotive used by SBB for fast passenger services.', 'It is the backbone of long-distance travel in Switzerland, hauling the double-deck IC2000 trains and InterCity sets with standard coaches, among others.'],
  kennzahlen: [['119', 'SBB locomotives'], ['200 km/h', 'in service · built for 230 km/h'], ['18.5 m', 'length'], ['6100 kW', 'continuous power'], ['1992', 'first in service with SBB']],
  daten: { 'Fahrzeugart': 'electric universal locomotive', 'Höchstgeschwindigkeit': '200 km/h in service, built for 230 km/h', 'Leistung': '6100 kW continuous', 'Gewicht': '84 t in working order', 'In Betrieb seit': '1992 (first in service with SBB)', 'Anzahl': '119 locomotives', 'Status': 'in service (modernised in the Refit programme)' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SLM and ABB developed the Re 460 in the early 1990s for the «Rail 2000» project. From 1992 to 1996, 119 locomotives were delivered to SBB; their striking design is by Pininfarina.', 'Between 2017 and 2022 all 119 locomotives went through a refit at the Yverdon-les-Bains works with new converters, a renewed compressed-air system, wiring and driver’s seats. This lets them run into the 2040s.'] },
      { titel: 'Service and technology', liste: ['Three-phase traction, with new converters from the refit', 'Steel body with fronts made of glass-fibre reinforced plastic', 'Pressure-tight cab for high-speed tunnel runs', 'Multiple-unit control for push-pull trains with a driving trailer', 'Regenerative brake that feeds power back into the grid'],
        p: ['The Re 460 mainly pulls and pushes InterCity and InterRegio trains on the whole Swiss standard-gauge network, usually with IC2000 double-deck coaches or standard coaches IV. It runs at up to 200 km/h.'] },
      { titel: 'Facilities and accessibility', p: ['What passengers find on board depends on the coaches. The IC2000 double-deck coaches have low-floor entrances, wheelchair spaces and an accessible toilet; the standard coaches IV are not low-floor. Details are on the IC2000 and EW IV pages.'] },
      { titel: 'Vehicle components', tabelle: { kopf: ['Vehicle', 'Role', 'Length', 'Weight in working order', 'Drive'], zeilen: [
      ['Re 460', 'electric universal locomotive', '18.5 m', '84.0 t', '6100 kW / 300 kN']] } },
      { titel: 'Other operators and related types', tabelle: { kopf: ['Operator / type', 'Fleet', 'Power', 'Top speed', 'Special features'], zeilen: [
        ['BLS (Re 465)', '18', '6400 kW', '160 km/h (approved)', 'Sister locomotive for passenger, car-shuttle and freight trains'],
        ['VR (Sr2)', '46', '6000 kW', '210 km/h', 'Broad-gauge version (1524 mm) for Finland'],
        ['NSB (El 18)', '22', '5400 kW', '200 km/h', 'Version for Norway']] } },
      { titel: 'Future and outlook', p: ['Thanks to the Refit programme the locomotives are technically fit for around 20 more years of service. They are expected to remain the backbone of SBB locomotive-hauled long-distance services into the 2040s.'] }
    ],
  bilder: ['Re 460 with standard coaches in spring', 'Re 460 with IC2000 double-deck coaches above the lake', 'Re 460 with IC2000 between field and forest', 'Re 460 with IC2000 in summer', 'Re 460 with standard coaches in the early morning', 'Re 460 «Swisstainable» with IC2000', 'Re 460 «Swisstainable» with night-train coaches']
});

uebZug('rabe-503', {
  typ: 'Multi-system tilting train for international services',
  text: ['The Astoro is a seven-car electric multi-system tilting train from Alstom’s Pendolino family (ETR 610).', 'SBB uses it on EuroCity services between Germany, Switzerland and Italy.'],
  kennzahlen: [['19', 'trains in the SBB fleet'], ['200 km/h', 'in Switzerland · built for 250 km/h'], ['2009', 'first in service with SBB'], ['187.4 m', 'length']],
  daten: { 'Hersteller': 'Alstom (Pendolino family, ETR 610)', 'Zugbildung': '7 cars', 'Stromsystem': '15 kV and 25 kV AC, 3 kV DC', 'Gewicht': '418 t empty (FOS), 466 t loaded', 'Höchstgeschwindigkeit': '250 km/h (vehicle), 200 km/h in the Swiss train type', 'Neigetechnik': 'active', 'Einsatz': 'EuroCity Germany–Switzerland–Italy' },
  specNote: 'SBB gives 250 km/h as the top speed of the vehicle; the train type catalogue lists 200 km/h for the Swiss train type.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The Astoro belongs to Alstom’s Pendolino family (ETR 610). The SBB fleet has 19 trains: seven from the first order and twelve delivered later. The first ran in 2009.'] },
      { titel: 'Service and technology', p: ['The Astoro runs on the north–south axis between Germany, Austria, Switzerland and Italy, mainly Geneva–Brig–Milan, Basel–Bern–Brig–Milan and Zurich–Munich.', 'Thanks to tilting, it shortens journey times over the Simplon and towards Munich. The train is 187 m long, offers 402 seats and reaches 250 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Restaurant', 'Family zone', 'Wi-Fi', 'Power sockets for Swiss and international plugs', 'Mobile signal booster', 'Electronic reservation display', 'Bike and luggage spaces', 'Wheelchair spaces and accessible toilet', 'Priority seats and baby-changing table'],
        p: ['Boarding is not low-floor. Wheelchair spaces and an accessible toilet are available.'] },
      { titel: 'Refurbishment', p: ['Since 2024 SBB has been refurbishing the whole fleet at its Bellinzona works. Interiors, passenger information and technical components are being overhauled; the programme is expected to last until the end of 2027.'] }
    ],
  bilder: ['RABe 503 «Astoro» in Brig', 'RABe 503 «Astoro» at the platform', 'ETR 610 013 near St-Saphorin on Lake Geneva', 'ETR 610 «Astoro» on its way', 'ETR 610 006 as EC 50 in Domodossola']
});

uebZug('re-450', {
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SLM and ABB built the 115 Re 450 for the double-deck push-pull trains (DPZ) of the Zurich S-Bahn. The double-deck coaches came from SLM and Schindler Waggon; the first DPZ ran in 1989, a year before the S-Bahn started in May 1990.', 'A total of 115 push-pull trains were built by 1998. 113 run at SBB today; two were taken over by the Sihltal Zürich Uetliberg Bahn (SZU) in 2008. The trains were renewed from 2011 to 2018.'] },
      { titel: 'Service and technology', p: ['The DPZ are the backbone of the Zurich S-Bahn and can run on almost the whole ZVV network. A train is 98.8 m long, offers 345 seats and runs at up to 130 km/h.', 'A push-pull train consists of the Re 450, double-deck coaches and a driving trailer, so the locomotive does not have to run round at the terminus.'] },
      { titel: 'Facilities and accessibility', liste: ['Air conditioning', 'Customer information system', 'Power sockets in 1st class', 'Mobile signal booster', 'Multi-purpose area with bike spaces', 'Pram spaces', 'Level boarding in the low-floor double-deck coach (NDW)', 'Wheelchair spaces and accessible toilet', 'Priority seats'],
        p: ['Wheelchair users can board step-free in the low-floor NDW coach, which is part of the push-pull trains.'] }
    ],
  typ: 'Locomotive of the double-deck push-pull trains',
  text: ['The Re 450 hauls and pushes the double-deck push-pull trains (DPZ) of the Zurich S-Bahn.', 'The push-pull trains consist of the locomotive, double-deck coaches and a driving trailer.'],
  daten: { 'Einsatz': 'Zurich S-Bahn', 'Anzahl': '115 built, 113 of them at SBB and 2 at SZU' },
  bilder: ['Re 450 021 with the S24 at Zurich HB', 'Re 450 059 at Zurich HB', 'Re 450 033 in Turgi, 1993', 'Re 450 022 in Niederweningen, 1991', 'Re 450 with the S5 on the causeway at Rapperswil']
});

uebZug('rabe-512', {
  typ: 'Six-car InterRegio double-deck multiple unit (Stadler KISS)',
  text: ['The RABe 512 is a six-car double-deck multiple unit from the Stadler KISS family.', 'It combines the proven platform of the RABe 511 with an interior designed for InterRegio services.'],
  kennzahlen: [['60', 'trains ordered'], ['466', 'seats'], ['160 km/h', 'top speed'], ['2023', 'first in service']],
  daten: { 'Zugbildung': '6 cars', 'Länge': '151.88 m', 'Gewicht': '299 t empty, 382 t loaded', 'Anzahl': '60 ordered', 'In Betrieb seit': 'July 2023' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['In 2021 SBB ordered 60 new IR-Dosto from Stadler. The first commercial service began in July 2023; full delivery is due by the end of 2026.'] },
      { titel: 'Service and technology', p: ['The trains run InterRegio and RegioExpress services around Zurich, in the Mittelland and in western Switzerland.', 'A train is 150 m long, offers 466 seats and runs at up to 160 km/h. Double traction with the upgraded IR-Dosto RABe 511 is possible.'] },
      { titel: 'Facilities and accessibility', liste: ['Level low-floor entrances', 'Wheelchair spaces and accessible toilet', 'Priority seats', 'Power sockets', 'Windows with better mobile reception', 'Modern passenger information', '2+1 seating in 1st class', 'Eight bike spaces in two places, with e-bike charging', 'Pram and luggage spaces, baby-changing table'],
        p: ['Thanks to level entrances, boarding is barrier-free at suitable platforms. A family zone and a business zone are being added.'] }
    ],
  bilder: ['IR-Dosto RABe 512 at Zurich HB', 'RABe 512 IR-Dosto on its way', 'RABe 512 IR-Dosto', 'Upper deck, 2nd class, in the RABe 512', 'Front of the RABe 512']
});

uebZug('rabe-520', {
  typ: 'Narrow Stadler GTW for the Seetal line',
  text: ['The RABe 520 is an electric articulated railcar developed specially for the narrow loading gauge of the Seetal line.', 'Its central power module and car body only about 2.65 metres wide set it clearly apart from other SBB regional trains.'],
  kennzahlen: [['17', 'trains originally procured'], ['115 km/h', 'top speed'], ['2002/03', 'years built'], ['53.5 m', 'length']],
  daten: { 'Breite': 'approx. 2.65 m (Seetal gauge)', 'Gewicht': '78 t empty (FOS), 105 t loaded', 'Anzahl': '17 procured', 'Einsatz': 'Seetal line Lucerne–Lenzburg' },
  specNote: 'Two units later went to Thurbo; the figure of 17 refers to the original order and not necessarily to today’s SBB fleet.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler delivered these GTW articulated railcars from 2002; 17 vehicles numbered 520 000–016 were procured. SBB lists 15 trains in its overview today.', 'The vehicles were modernised from 2018 to 2021.'] },
      { titel: 'Service and technology', p: ['The main area of use is the Seetal line Lucerne–Lenzburg; at peak times two trains run coupled.', 'The three-section train with a powered middle module is 53.5 m long, offers 124 seats and runs at up to 115 km/h. Its narrow body increases the distance to the road running alongside.'] },
      { titel: 'Facilities and accessibility', liste: ['Five doors per side for the low Seetal platforms (35 cm above rail)', 'One door for standard platforms (55 cm)', 'One wheelchair space per train', 'Priority seats', 'Bike, pram and luggage spaces', 'Windows with better mobile reception'],
        p: ['Wheelchair users can board on their own at all stations of the Seetal line.'] }
    ],
  bilder: ['RABe 520 «GTW» in Beinwil am See', 'RABe 520 in the Seetal near Seengen', 'RABe 520 of the Seetal line in Lenzburg, 2003', 'RABe 520 at the level crossing in Beinwil am See', 'RABe 520 as S28 near Hunzenschwil']
});

uebZug('rabe-521', {
  typ: 'Single-system FLIRT approved for Switzerland and Germany',
  text: ['The RABe 521 is a four-car FLIRT for cross-border regional services between north-western Switzerland and Germany.', 'It is an important part of the Basel regional S-Bahn and also runs on the Seehas service.'],
  kennzahlen: [['39', 'trains'], ['160 km/h', 'top speed'], ['2005', 'first in passenger service'], ['74.08 m', 'length']],
  daten: { 'Zugbildung': '4 cars', 'Gewicht': '120 t empty, 152 t loaded', 'Leistung': '2656 kW (FOS train type value)', 'Nummern': '521 001–030 and 201–209', 'Einsatz': 'Basel S-Bahn, Seehas, Switzerland–Germany' },
  specNote: 'The SBB train type catalogue also groups technically similar four-car FLIRT variants under this type; the power is therefore given as the type value.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler originally developed the FLIRT platform for SBB. The RABe 521 class comprises 30 vehicles numbered 521 001–030 and nine more 521 201–209, 39 trains in total. Deliveries began in mid-2005, and the first entered passenger service that year. The nine vehicles 521 201–209 for the Seehas followed.'] },
      { titel: 'Service and technology', p: ['The RABe 521 mainly run on the tri-national Basel S-Bahn and on cross-border services to Germany.', 'Automatic couplers allow multiple working with compatible FLIRT. SBB FLIRT run at up to 160 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Low-floor entrance', 'Wheelchair spaces and accessible toilet', 'Priority seats', 'Power sockets in 1st class', 'Multi-purpose areas for bikes and prams', 'Luggage racks'],
        p: ['Low-floor entrances and multi-purpose areas speed up passenger exchange. These details apply to the SBB FLIRT family.'] }
    ],
  bilder: ['RABe 521 «FLIRT»', 'RABe 521 as S3 to Olten in Porrentruy', 'FLIRT on the Gäubahn bridge in Olten', 'FLIRT on the Aare bridge near Olten', 'Interior of the RABe 521 «Express-Hase»']
});

uebZug('rabe-522', {
  typ: 'Dual-system FLIRT for France',
  text: ['The RABe 522 is a four-car dual-system FLIRT for services between Switzerland and France.', 'The vehicles are adapted to the French 25 kV network and mainly run in the Geneva and Basel areas.'],
  kennzahlen: [['32', 'trains of the 201–232 series'], ['160 km/h', 'top speed'], ['2011', 'current series in service since'], ['75.0 m', 'length']],
  daten: { 'Zugbildung': '4 cars', 'Stromsystem': '15 kV 16.7 Hz and 25 kV 50 Hz AC', 'Gewicht': '135 t empty, 167 t loaded', 'Einsatz': 'Léman Express, Basel regional services' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The class comes from Stadler and comprises 32 vehicles numbered 522 201–232; the first RABe 522 ran in 2011.', 'A first series of twelve vehicles carried the numbers 522 001–012. Because these trains initially did not get French approval, they were later rebuilt as RABe 523.'] },
      { titel: 'Service and technology', p: ['The RABe 522 run on the Léman Express network and on regional cross-border services around Basel and in the Jura, among others.', 'Like other FLIRT, they have distributed electric traction and automatic couplers for multiple working.'] },
      { titel: 'Facilities and accessibility', liste: ['Wide low-floor entrances', 'Wheelchair spaces and accessible toilet', 'Priority seats', 'Power sockets in 1st class', 'Multi-purpose areas for bikes and prams'],
        p: ['These details apply to the SBB FLIRT family; specifics differ by version.'] }
    ],
  bilder: ['RABe 522 209 in Delle', 'RABe 522 in Noiraigue', 'RABe 522 221 in Léman Express livery in Annemasse', 'RABe 522 231 in Geneva', 'RABe 522 213 at Genève-Cornavin']
});

uebZug('rabe-524', {
  typ: 'Multi-system FLIRT for TILO',
  text: ['The RABe 524 are four- and six-car FLIRT multiple units for cross-border regional services between Ticino and Lombardy.', 'They can run under both the Swiss AC system and the Italian DC system.'],
  kennzahlen: [['53', 'trains with TILO'], ['160 km/h', 'top speed'], ['2007', 'first in service'], ['4 / 6', 'cars per train']],
  daten: { 'Zugbildung': '4 or 6 cars', 'Stromsystem': '15 kV 16.7 Hz AC and 3 kV DC', 'Länge': '74.1 m (4-car), 106.3 m (6-car), 104.9 m (FLIRT TSI)', 'Gewicht': '133 t (4-car), 174 t (6-car), 179 t (FLIRT TSI)', 'Anzahl': '53 (23 four-car, 17 six-car, 13 FLIRT TSI)', 'In Betrieb seit': '2007 (built 2006–2021)', 'Einsatz': 'TILO, Ticino–Lombardy' },
  specNote: 'Length and empty weight of each variant according to the SBB train type catalogue. FLIRT TSI refers to the newer TSI-compliant six-car version (RABe 524.3).',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler built the 53 vehicles in service today between 2006 and 2021: 23 four-car, 17 six-car and 13 FLIRT TSI (RABe 524.3). The first ran in 2007.', 'The newer FLIRT TSI were procured to expand cross-border services.'] },
      { titel: 'Service and technology', p: ['The class shapes the TILO network in Ticino and Lombardy, as far as Milan. Depending on the line, four- or six-car trains run.', 'Multi-system equipment allows direct services across the border without changing vehicles.'] },
      { titel: 'Facilities and accessibility', liste: ['Low-floor entrance', 'Wheelchair spaces and accessible toilet', 'Priority seats', 'Power sockets in 1st class', 'Bike, pram and luggage spaces'],
        p: ['These details apply to the SBB FLIRT family; specifics differ by version.'] },
      { titel: 'Variants', tabelle: { kopf: ['Variant', 'Number', 'Length', 'Empty weight'], zeilen: [
      ['RABe 524, four-car', '23', '74.1 m', '133 t'],
      ['RABe 524, six-car', '17', '106.3 m', '174 t'],
      ['RABe 524.3, FLIRT TSI', '13', '104.9 m', '179 t']] } }
    ],
  bilder: ['RABe 524 008 at Milano Centrale', 'RABe 524 303 in the new TILO livery at Milano Centrale', 'RABe 524 in Capolago-Riva San Vitale', 'RABe 524 at Milano Cadorna', 'RABe 524 012 as S20 in Locarno', 'RABe 524 014 with advertising for «Rete Tre» in Maccagno']
});

uebZug('ic2000', {
  beiname: 'Double-deck coaches',
  typ: 'Double-deck long-distance push-pull train',
  text: ['The IC2000 is a family of double-deck passenger coaches and driving trailers.', 'Together with the Re 460, the coaches form high-capacity push-pull trains for InterCity and InterRegio services; after their full refurbishment they are also called IC2020.'],
  kennzahlen: [['341', 'coaches'], ['200 km/h', 'top speed'], ['1997', 'first in service'], ['26.8 m', 'length per coach']],
  daten: { 'Fahrzeugart': 'double-deck passenger coach', 'Hersteller': 'Schindler consortium (Schindler Waggon, FIAT-SIG, ABB/Adtranz)', 'Länge': '26.8 m per coach', 'Gewicht': '47 t empty (FOS type), 60 t loaded', 'Sitzplätze': 'up to 86 per coach (1st class), up to 126 per coach (2nd class)', 'Wagenübergang': 'on the upper deck', 'Antrieb': 'none, hauled by Re 460', 'Anzahl': '341 coaches' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The 341 double-deck coaches were delivered in several series from 1997. The bodies were built by Schindler Waggon, the bogies by FIAT-SIG and the electrical equipment by ABB/Adtranz.', 'The family includes 1st and 2nd class coaches as well as service, dining and driving trailer coaches. From late 2019 to summer 2025 SBB modernised all coaches.'] },
      { titel: 'Service and technology', p: ['The formations run as InterCity and InterRegio on important east–west and north–south axes, usually with an Re 460. A train offers more than 900 seats and runs at up to 200 km/h.', 'A coach is 26.8 m long and offers up to 86 seats in 1st or 126 in 2nd class.'] },
      { titel: 'Facilities and accessibility', liste: ['Full air conditioning', 'Power sockets in 1st and 2nd class', '2+1 seating in 1st class', 'Windows with better mobile reception', 'Family compartments, quiet zone and business zone (InterCity only)', 'Restaurant or bistro (InterCity)', 'Bike, pram and luggage spaces', 'Low-floor entrance', 'Wheelchair spaces and accessible toilet', 'Priority seats'],
        p: ['Thanks to the low-floor entrances, wheelchair users can board step-free at suitable platforms.'] }
    ],
  bilder: ['IC2000 push-pull train in the countryside', 'Re 460 with IC2000 double-deck coaches', 'Re 460 at the head of IC2000 double-deck coaches', 'Gangway between a single-deck coach and an IC2000 double-deck coach', 'IC2000 driving trailer in Romanshorn']
});

uebZug('ew-iv', {
  beiname: 'Standard Coach IV',
  typ: 'Air-conditioned long-distance coach',
  text: ['The Standard Coach IV (Einheitswagen IV, EW IV) is the last generation of Swiss standard coaches.', 'These locomotive-hauled coaches were developed for InterCity services and today run in push-pull trains and together with matching EuroCity coaches.'],
  kennzahlen: [['496', 'originally for SBB'], ['200 km/h', 'top speed'], ['1981', 'first in service'], ['26.4 m', 'length per coach']],
  daten: { 'Fahrzeugart': 'passenger coach', 'Betreiber': 'SBB Passenger', 'Länge': '26.4 m per coach', 'Gewicht': '45 t empty (FOS type), 50 t loaded', 'Steuerwagen': 'IC Bt EW IV, 48 t empty', 'Antrieb': 'none, hauled by a separate locomotive', 'Anzahl': '540 built, 496 of them for SBB' },
  specNote: 'The figure of 496 is a historical value, not today’s fleet: sales, conversions and withdrawals have reduced the fleet.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The standard coaches IV were built by SIG, SWS, SWP and SWA. The first 40 air-conditioned 1st class coaches arrived in 1981; 540 were built in total, 496 of them for SBB. EuroCity coaches followed in 1989, driving trailers in 1997.', 'Between 2019 and 2025 SBB overhauled more than 250 EW IV and EuroCity coaches, with corrosion protection, new paint and windows that let mobile signals through. The driving trailers are being modernised until the end of 2027.'] },
      { titel: 'Service and technology', p: ['The coaches run in EC, IC and IR formations, usually with an Re 460 and a driving trailer. Typical routes run from Geneva to Brig, from Basel to Lugano and from Zurich via Olten to Bern. The classic standard coaches IV run mainly in Switzerland today; internationally it is mostly the SBB EuroCity coaches that run, also in day and night trains.', 'A coach is 26.4 m long and approved for 200 km/h; it offers 60 seats in 1st or up to 86 in 2nd class.'] },
      { titel: 'Facilities and accessibility', liste: ['Power sockets', 'Family zone', 'Quiet zone in 1st class (InterCity)', 'Dining car (EuroCity)', 'Bike spaces and dedicated bike coaches', 'Wheelchair spaces and accessible toilet', 'Priority seats'],
        p: ['The coaches are not low-floor. Wheelchair spaces and an accessible toilet are available.'] }
    ],
  bilder: ['EW IV driving trailer in Bellinzona', 'InterRegio with EW IV at Zurich HB', 'Gotthard Weekender with EW IV in Brugg', '1st class interior of an EW IV', 'EW IV 2nd class coach in Montreux']
});
