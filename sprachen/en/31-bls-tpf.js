/* English – BLS and TPF */
uebDict({
  'Bahn wählen': 'Choose operator', '{n} Fahrzeug': '{n} vehicle',
  'Schweizerische Bundesbahnen': 'Swiss Federal Railways',
  'BLS AG': 'BLS AG',
  'Transports publics fribourgeois': 'Transports publics fribourgeois',
  'Klassiker von SBB, BLS und TPF, die heute nicht mehr im Alltag fahren. Viele sind bei SBB Historic, der BLS-Stiftung, GFM Historique oder in Museen erhalten.': 'Classics from SBB, BLS and TPF that no longer run in everyday service. Many are preserved by SBB Historic, the BLS Foundation, GFM Historique or in museums.',
  'Zulassung': 'Approval', 'Frühere Bezeichnung': 'Former designation', 'Beispiel': 'Example', 'Typen': 'Types', 'Standort': 'Location',
  'Erhalten': 'Preserved', 'Verbleib': 'Fate', 'Lokomotive': 'Locomotive', 'Kabinen': 'Cars', 'Höhenunterschied': 'Height difference', 'Kran': 'Crane',
  'Normalspur, 1435 mm': 'standard gauge, 1435 mm', 'Meterspur, 1000 mm': 'metre gauge, 1000 mm'
});

uebZug('bls-rabe-528', {
  typ: 'Electric multiple unit by Stadler for RegioExpress and S-Bahn',
  text: ['The six-car MIKA is the newest BLS train. It comes as a RegioExpress version, more comfortable for longer trips, and as an S-Bahn version with more standing room.', 'From 2021 the MIKA replaced older trains such as the EW III push-pull sets and the NPZ.'],
  kennzahlen: [['67', 'trains (39 RE, 28 S-Bahn)'], ['160 km/h', 'top speed'], ['104.9 m', 'length'], ['2021', 'first in service']],
  daten: { 'Bauart': 'electric multiple unit, 6 cars', 'Fahrzeugnummern': 'RE 101–139, S-Bahn 201–228', 'Gewicht': '182 t (RE), 183 t (S-Bahn)', 'Sitzplätze': '244 (RE), 223 (S-Bahn)', 'Anzahl': '67 trains' },
  specNote: 'Seats without folding seats: RE 46 in 1st and 198 in 2nd class, S-Bahn 35 and 188. Trains 125–137 belong to BLS Fernverkehr AG.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler delivered 67 MIKA to BLS: 39 RegioExpress trains (101–139, in service 2021–2026) and 28 S-Bahn trains (201–228, 2022–2025). Trains 125–137 belong to BLS Fernverkehr AG, all others to BLS AG.', 'The MIKA replaced older trains such as the EW III push-pull sets and the NPZ.'] },
      { titel: 'Service and technology', p: ['The MIKA run on the Bern and Lucerne S-Bahn (among others S2, S4, S6 and S7), as RegioExpress Bern–Spiez–Zweisimmen and over the Lötschberg summit line to Brig and Domodossola, and as InterRegio 66 Bern–Neuchâtel–La Chaux-de-Fonds.', 'The six-car train is 104.9 m long, has 3500 kW and runs at up to 160 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Air conditioning', 'Power sockets at every seat and in the multi-purpose area', 'Windows with better mobile reception', 'Self-service bistro zone with snack and coffee machines (RE)', '12 bike spaces (RE) or 6 (S-Bahn), with sockets for e-bikes', 'Low-floor entrance with gap bridging at all doors', '3 wheelchair spaces: 1 in 1st class, 2 in 2nd class with toilet access', '2 toilets, 1 of them accessible, with baby-changing table', 'Video surveillance and SOS buttons'],
        p: ['Thanks to low-floor entrances with gap bridging, boarding is step-free at every door.'] },
      { titel: 'Two versions', tabelle: { kopf: ['Feature', 'RegioExpress', 'S-Bahn'], zeilen: [
      ['Numbers', '101–139', '201–228'], ['Number built', '39', '28'], ['Entry into service', '2021–2026', '2022–2025'],
      ['Seats 1st / 2nd class', '46 / 198', '35 / 188'], ['Standing places', '149', '241'], ['Bike spaces', '12', '6']] } }
    ],
  bilder: ['RABe 528 102 as RegioExpress in Bern', 'RABe 528 201 in S-Bahn version', 'RABe 528 119 in Domodossola', 'RABe 528 104 in the Entlebuch']
});
uebZug('bls-rabe-515', {
  typ: 'Double-deck multiple unit by Stadler (KISS)',
  text: ['The MUTZ is the BLS double-deck train and part of Stadler’s KISS family. It mainly runs on the busy lines of the Bern S-Bahn.', 'There is a four-car version and a longer six-car version.'],
  kennzahlen: [['39', 'trains (34 four-car, 5 six-car)'], ['160 km/h', 'top speed'], ['335 / 546', 'seats 4 / 6 cars'], ['2012', 'first in service']],
  daten: { 'Bauart': 'electric double-deck multiple unit', 'Fahrzeugnummern': '001–034 (4 cars), 035–039 (6 cars)', 'Länge': '102.6 m (4 cars), 151.88 m (6 cars)', 'Gewicht': '216 t (4 cars), 301 t (6 cars)', 'Leistung': '4000 kW (6 cars: 6000 kW peak)', 'Sitzplätze': '335 (4 cars), 546 (6 cars)', 'Anzahl': '39 trains' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The MUTZ belongs to Stadler’s KISS family. BLS has 34 four-car trains (001–034, in service 2012–2017, 032 and 033 in 2019/2020) and 5 six-car trains (035–039, 2020).', 'The six-car trains and 032–034 belong to BLS Fernverkehr AG, the others to BLS AG.'] },
      { titel: 'Service and technology', p: ['The MUTZ run on the Bern S-Bahn (S1 Fribourg–Bern–Thun, S11 Thun–Bern, S3/S31 Biel–Münchenbuchsee–Bern–Belp) and as InterRegio 17 Bern–Burgdorf–Olten and InterRegio 65 Bern–Biel.', 'Both versions have 4000 kW and run at up to 160 km/h. Wide doors speed up boarding and alighting.'] },
      { titel: 'Facilities and accessibility', liste: ['Air conditioning, floor and wall heating', 'Visual and audio passenger information', 'Power sockets in 1st class (six-car: also in 2nd class)', '6 bike spaces (four-car) or 16 (six-car)', 'Low-floor entrances with sliding steps at all doors', '3 wheelchair spaces (four-car) or 4 (six-car), in both classes', '2 toilets, 1 accessible and 1 with baby-changing table', 'Video surveillance'],
        p: ['All doors have low-floor entrances with sliding steps; there are wheelchair spaces in both classes.'] },
      { titel: 'Four and six cars', tabelle: { kopf: ['Feature', 'four-car', 'six-car'], zeilen: [
      ['Numbers', '001–034', '035–039'], ['Entry into service', '2012–2017, 032–033 in 2019/2020', '2020'], ['Length', '102.6 m', '151.88 m'],
      ['Seats 1st / 2nd class', '61 / 274', '122 / 424'], ['Power', '4000 kW', '6000 kW peak, 4000 kW continuous']] } }
    ],
  bilder: ['Four-car RABe 515 003 in Bern', 'Six-car RABe 515 039', 'RABe 515 027 near Allmendingen']
});
uebZug('bls-rabe-535', {
  typ: 'Four-car low-floor multiple unit',
  text: ['The Lötschberger is a four-car low-floor train of BLS. It is named after the Lötschberg summit line and the Bernese Oberland, where it runs.', 'Up to four trains can run together.'],
  kennzahlen: [['25', 'trains'], ['160 km/h', 'top speed'], ['142', 'seats'], ['2008', 'first in service']],
  daten: { 'Bauart': 'electric low-floor multiple unit, 4 cars', 'Anzahl': '25 trains' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Bombardier delivered 25 four-car Lötschberger to BLS: 101–113 in 2008–2010 and 114–125 in 2012.', 'Since January 2024 BLS has been modernising the fleet at the Bönigen workshop, until mid-2027. Among other things, double sockets replace single ones, LED lights replace neon tubes, and CO₂ sensors control fresh air as needed.'] },
      { titel: 'Service and technology', p: ['The Lötschberger runs in the Bernese Oberland (RE Zweisimmen–Spiez, Spiez–Interlaken Ost and Spiez–Frutigen) and on the Bern S-Bahn between Thun, Belp, Bern, Burgdorf, Konolfingen and Solothurn.', 'The train is 62.7 m long, weighs 105 t and runs at up to 160 km/h. Up to four trains can be coupled.'] },
      { titel: 'Facilities and accessibility', liste: ['Air conditioning and heating', 'Power sockets in 1st and 2nd class', 'Visual and audio passenger information', '6 bike spaces (101–113) or 12 (114–125)', 'Low-floor entrance at all doors, one entrance per side with a sliding step', '2 wheelchair spaces in 2nd class', '1 accessible toilet', 'Video surveillance'],
        p: ['All doors are low-floor. According to BLS there is no baby-changing table.'] }
    ],
  bilder: ['RABe 535 112 «Lötschberger»', 'Lötschberger at Kandersteg station', 'RABe 535 122 at Iselle di Trasquera']
});
uebZug('bls-rabe-525', {
  typ: 'Low-floor regional multiple unit',
  text: ['NINA stands for Niederflur-Nahverkehrszug, low-floor regional train. BLS uses it as three- and four-car trains in regional and S-Bahn service.', 'Up to four trains can be coupled.'],
  kennzahlen: [['36', 'trains (23 three-car, 13 four-car)'], ['140 km/h', 'top speed'], ['1000 kW', 'power'], ['1998', 'first in service']],
  daten: { 'Bauart': 'electric low-floor multiple unit, 3 or 4 cars', 'Länge': '47.7 m (3 cars), 61.9 m (4 cars)', 'Gewicht': '79 t (3 cars), 96 t (4 cars)', 'Sitzplätze': '134 (3 cars), 179 (4 cars)', 'Anzahl': '36 trains' },
  specNote: 'Entered service 1998–2005. Numbers 015–027 have four cars, 001–014, 028–030 and 032–037 three cars.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The NINA come from Vevey Technologies and Bombardier and entered service from 1998 to 2005. BLS has 36 trains: 23 three-car (001–014, 028–030, 032–037) and 13 four-car (015–027).', 'From June 2015 all 36 trains received a refit at the Bönigen workshop for around 31 million francs, to run about six years longer. In 2016 some received windows that let mobile signals through and new passenger information.'] },
      { titel: 'Service and technology', p: ['The NINA run on the Bern and Lucerne S-Bahn, among others S5 Bern–Kerzers–Neuchâtel, S22 Bern–Konolfingen–Langnau, S35 Kerzers–Lyss, S36 Lyss–Büren an der Aare, S46 Solothurn–Burgdorf–Ostermundigen and S77 Lucerne–Wolhusen–Willisau, and as the RE Domodossola–Brig–Visp.', 'A train has 1000 kW and runs at up to 140 km/h. Up to four trains can be coupled.'] },
      { titel: 'Facilities and accessibility', liste: ['Air conditioning and heating', 'Power sockets in 1st class', 'Visual and audio passenger information', '3 bike spaces (three-car) or 6 (four-car)', 'Low-floor entrance at all doors, one entrance per side with a sliding step', '1 wheelchair space in 2nd class', '1 accessible toilet', 'Video surveillance'],
        p: ['All doors are low-floor. According to BLS there is no baby-changing table.'] }
    ],
  bilder: ['NINA RABe 525 024 in Thun', 'Four-car RABe 525 015 in Bern']
});
uebZug('bls-re-465', {
  typ: 'Universal electric locomotive of the Lok 2000 family',
  text: ['The Re 465 is the BLS sister of the SBB Re 460. It hauls passenger trains, car-shuttle trains and freight trains.', 'Between 2019 and 2022 all 18 locomotives were modernised and painted green. Since late 2023 they have replaced the brown Re 425 on the car shuttles.'],
  kennzahlen: [['18', 'locomotives'], ['6400 kW', 'power'], ['160 km/h', 'approved top speed'], ['1994', 'first in service']],
  daten: { 'Bauart': 'electric locomotive Bo’Bo’', 'Höchstgeschwindigkeit': '160 km/h (approved)' },
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The Re 465 belongs to the Lok 2000 family by SLM and ABB. BLS first ordered eight locomotives (001–008), later ten more (009–018) for the piggyback corridor; they entered service from 1994 to 1997.', 'From 2019 to 2022 all 18 locomotives were modernised at the Bönigen workshop for about 20 million francs and painted green. This lets them run until about 2040.'] }, { titel: 'Service and technology', p: ['The Re 465 pull or push the GoldenPass Express between Interlaken Ost and Zweisimmen. Since 19 December 2023 they have run the Lötschberg car shuttle, from 2026 also on the Simplon, replacing the brown Re 425.', 'In freight service they often run in multiple with TRAXX and Vectron. The locomotive has 6400 kW and is approved for 160 km/h.'] }, { titel: 'Facilities and accessibility', liste: ['Two cabs', 'Multiple-unit control, in freight service often with TRAXX and Vectron', 'Pulls or pushes trains, for example the GoldenPass Express'], p: ['As a locomotive the Re 465 has no passenger compartment. On the GoldenPass Express and the car shuttles, accessibility depends on the coaches.'] }],
  bilder: ['Re 465 014 in Zweisimmen', 'Re 465 001 and 007 in double traction']
});
uebZug('bls-re-475', {
  typ: 'Multi-system electric locomotive by Siemens for BLS Cargo',
  text: ['The Re 475 is the Vectron locomotive of BLS Cargo. It is approved in several countries and hauls freight across the Alps to Germany, Italy and the Netherlands.', 'BLS Cargo has expanded the fleet in several batches.'],
  kennzahlen: [['50', 'locomotives in three batches'], ['2016', 'first in service'], ['6', 'countries (later batches)'], ['Siemens', 'builder']],
  daten: { 'Bauart': 'multi-system electric locomotive Bo’Bo’', 'Zulassung': 'CH, D, A, I, NL; from no. 416 also B', 'Anzahl': '50 (in three batches)' },
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The Re 475 is the Vectron locomotive by Siemens Mobility for BLS Cargo. The fleet grows in three batches to 50 locomotives: 401–415 (2016–2018), 416–440 (2020 and 2024–2025) and 441–450 (from 2026).'] }, { titel: 'Service and technology', p: ['BLS Cargo uses the Re 475 mainly on the Lötschberg-Simplon and Gotthard axes and runs as far as the Netherlands, Belgium, Germany, Austria and Italy.', 'The multi-system locomotive is approved in up to six countries; from number 416 also in Belgium.'] }, { titel: 'Facilities and accessibility', liste: ['Two cabs', 'Multi-system locomotive for AC and DC', 'Approval for Switzerland, Germany, Austria, Italy and the Netherlands, from number 416 also for Belgium'], p: ['The Re 475 is a freight locomotive and has no passenger compartment.'] }, { titel: 'Three batches', tabelle: { kopf: ['Numbers', 'Number', 'Delivery', 'Approval'], zeilen: [
    ['401–415', '15', '2016–2018', 'CH, D, A, I, NL'], ['416–440', '25', '2020, 2024–2025', 'CH, D, A, I, NL, B'], ['441–450', '10', 'from 2026', 'CH, D, A, I, NL, B']] } }],
  bilder: ['Re 475 401 of BLS Cargo']
});
uebZug('bls-re-485', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['In 2002 BLS Cargo ordered 20 TRAXX of type F140 AC from Bombardier; they were delivered by mid-2003 and carry the numbers 485 001–020.', '485 004 was destroyed in an accident at Auggen (Germany) in 2020. How many Re 485 are operational today is not publicly confirmed.'] }, { titel: 'Service and technology', p: ['The Re 485 haul freight trains in Switzerland and to Germany, on the Lötschberg-Simplon and Gotthard axes.', 'Technically they match the German class 185 and the SBB Cargo Re 482, with a Swiss equipment package. They run at up to 140 km/h.'] }, { titel: 'Facilities and accessibility', liste: ['Two cabs', 'Approval for Switzerland and Germany', 'Swiss equipment package based on the German class 185'], p: ['The Re 485 is a freight locomotive and has no passenger compartment.'] }],
  typ: 'Freight electric locomotive by Bombardier',
  text: ['The Re 485 are TRAXX locomotives of BLS Cargo for freight in Switzerland and to Germany.', 'They were ordered in 2002 and delivered by mid-2003.'],
  kennzahlen: [['20', 'locomotives procured'], ['140 km/h', 'top speed'], ['CH, D', 'approval'], ['2002', 'first in service']],
  daten: { 'Bauart': 'electric locomotive Bo’Bo’', 'Zulassung': 'Switzerland, Germany', 'Anzahl': '20 procured; 485 004 withdrawn after an accident in 2020' },
  specNote: 'The 140 km/h follows from the type TRAXX F140.',
  bilder: ['Re 485 005 of BLS Cargo', 'Re 485 016 with a freight train', 'Re 485 008 near Allmendingen']
});
uebZug('bls-re-486', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['From autumn 2008 Bombardier delivered ten multi-system TRAXX of type F140 MS to BLS Cargo, numbered 486 501–510; the last followed in 2009.'] }, { titel: 'Service and technology', p: ['The Re 486 may run in Switzerland, Germany, Italy and Austria. This makes them suitable for transit across the Alps, for example with the rolling highway.', 'As a multi-system locomotive it runs on AC and DC; the top speed is 140 km/h.'] }, { titel: 'Facilities and accessibility', liste: ['Two cabs', 'Multi-system locomotive for AC and DC', 'Approval for Switzerland, Germany, Italy and Austria'], p: ['The Re 486 is a freight locomotive and has no passenger compartment.'] }],
  typ: 'Multi-system electric locomotive by Bombardier',
  text: ['The Re 486 are multi-system TRAXX locomotives of BLS Cargo. They can run in Switzerland, Germany, Italy and Austria.', 'This makes them suitable for transit across the Alps, for example with the rolling highway.'],
  kennzahlen: [['10', 'locomotives'], ['140 km/h', 'top speed'], ['4', 'countries'], ['2008', 'first in service']],
  daten: { 'Bauart': 'multi-system electric locomotive Bo’Bo’', 'Zulassung': 'Switzerland, Germany, Italy, Austria' },
  specNote: 'The 140 km/h follows from the type TRAXX F140.',
  bilder: ['Re 486 503 with the rolling highway in Freiburg im Breisgau', 'Re 486 504 of BLS Cargo']
});
uebZug('bls-re-425', {
  typ: 'BLS electric locomotive, known as «the brown ones»',
  text: ['For decades the brown BLS Re 4/4, today Re 425, hauled fast trains between Bern and Brig and freight trains from Basel to Domodossola. The Lötschberg car shuttle was also their job for a long time.', 'BLS Cargo ended the freight service of the Re 425 in 2021. From late 2023 the Re 465 gradually took over the car shuttles; the last scheduled run of an Re 425 took place on 27 July 2026 between Kandersteg and Goppenstein. Re 425 165 «Moutier» is preserved by the BLS Foundation.'],
  kennzahlen: [['35', 'built 1964–1983'], ['4980 kW', 'power'], ['140 km/h', 'top speed'], ['1964', 'first in service']],
  daten: { 'Bauart': 'electric locomotive Bo’Bo’', 'Betreiber': 'BLS and BLS Cargo (historic); some locomotives now in museum or special service', 'Länge': '15.1 m (from no. 174: 15.47 m)', 'Anzahl': '35 built' },
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['35 locomotives were built; the first entered service in 1964. Today they carry the numbers Re 425 161–195. From number 174 the locomotives are slightly longer at 15.47 m than the older ones at 15.1 m.'] }, { titel: 'Service and technology', p: ['The locomotives hauled express trains Bern–Brig, freight trains Basel–Domodossola and the Lötschberg car shuttle. At BLS Cargo, freight service ended in 2021. From the end of 2023 the Re 465 took over the car shuttle; the last scheduled run was on 27 July 2026 between Kandersteg and Goppenstein.', 'The locomotive has 4980 kW and runs at up to 140 km/h.'] }, { titel: 'Facilities and accessibility', liste: ['Two cabs', 'No passenger compartment'], p: ['With passenger trains and the car shuttle, accessibility depended on the coaches.'] }, { titel: 'Re 4/4 165 «Moutier»', p: ['No. 165 was delivered to BLS as Ae 4/4 II 265 and carries the coat of arms of the municipality of Moutier. Since 2017 it has been one of the historic vehicles of the BLS Foundation and stands, out of service, in the Burgdorf depot.'] }],
  bilder: ['Re 425 192 in Spiez']
});
uebZug('bls-am-843', {
  typ: 'Diesel-hydraulic locomotive of BLS Infrastructure',
  text: ['BLS Infrastructure also uses diesel locomotives of the Am 843 class, for example Am 843 503. They haul construction trains and shunt where there is no catenary.', 'Technically the locomotive matches the SBB Am 843.'],
  kennzahlen: [['843 503', 'photographed example'], ['diesel', 'traction'], ['construction trains', 'use'], ['BLS', 'infrastructure']],
  daten: { 'Bauart': 'diesel locomotive', 'Antrieb': 'diesel-hydraulic', 'Betreiber': 'BLS Infrastructure', 'Einsatz': 'construction trains, shunting, intervention' },
  specNote: 'BLS gives length, weight and year for the Am 843 of its intervention service. How many Am 843 BLS owns in total is not publicly documented.',
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The Am 843 is a Vossloh locomotive and technically matches the SBB Am 843. For the locomotive in the intervention service BLS gives the year 2008. How many Am 843 BLS owns is not publicly documented.'] }, { titel: 'Service and technology', p: ['BLS lists an Am 843 among the vehicles of its intervention service, together with the fire-fighting and rescue train LRZ 04 and the breakdown wagon. The intervention service is the company fire brigade of BLS.'] }, { titel: 'Facilities and accessibility', liste: ['Diesel-hydraulic drive, independent of the overhead line', '15.2 m long, 80 t', 'No passenger compartment'] }],
  bilder: ['Am 843 503 of BLS Infrastructure']
});
uebZug('bls-rangier', {
  name: 'Shunting vehicles',
  typ: 'Shunting locomotives and tractors of BLS',
  text: ['BLS uses various small vehicles for shunting in stations and workshops. Some come from railways that are now part of BLS, such as the Emmental–Burgdorf–Thun railway.', 'This page shows the types documented on photos with BLS lettering.'],
  kennzahlen: [['5', 'types documented on photos'], ['Ee 936', 'largest shunter'], ['Kandersteg', 'among other places photographed'], ['BLS', 'operator']],
  daten: { 'Bauart': 'shunting locomotives and tractors', 'Einsatz': 'shunting in stations and workshops' },
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['BLS uses shunting locomotives and tractors of the types Ee 936, Eea 935, Tem 225, Tm 235 and Tea 245. Some come from railways that now belong to BLS, such as the Emmental–Burgdorf–Thun Railway. How many vehicles of each type BLS owns today is not publicly documented.'] }, { titel: 'Service and technology', p: ['The vehicles shunt wagons and trains in stations and workshops. Depending on the type they run electrically from the overhead line, with a diesel engine or with a battery.'] }, { titel: 'Facilities and accessibility', liste: ['Small locomotives and tractors for short shunting moves', 'No passenger compartment'] }, { titel: 'Documented on photos', tabelle: { kopf: ['Type', 'Example', 'Traction', 'Photo'], zeilen: [
    ['Ee 936', '936 132', 'electric', 'Kandersteg 2016'], ['Eea 935', '935 402', 'electric and battery', 'Kandersteg 2016'],
    ['Tem 225', '225 041', 'electric and diesel', 'Burgdorf 2018'], ['Tm 235', '235 091', 'diesel', 'Spiez 2012'], ['Tea 245', '245 021', 'electric and battery', 'no location']] } }],
  bilder: ['Ee 936 132 in Kandersteg (2016)', 'Eea 935 402 in Kandersteg (2016)', 'Tem 225 041 in Burgdorf (2018)', 'Tm 235 091 in Spiez (2012)', 'Tea 245 021']
});
uebZug('bls-lrz', {
  typ: 'Fire-fighting and rescue trains of BLS',
  text: ['BLS also has its own fire-fighting and rescue trains. They are stationed at the Frutigen intervention centre, at the north portal of the Lötschberg base tunnel.', 'The trains bring extinguishing agents, rescuers and breathing protection into long tunnels.'],
  kennzahlen: [['Frutigen', 'intervention centre'], ['Lötschberg', 'base tunnel'], ['tunnels', 'main use'], ['BLS', 'operator']],
  daten: { 'Bauart': 'fire-fighting and rescue train', 'Standort': 'among others the Frutigen intervention centre', 'Einsatz': 'tunnel rescue, fire-fighting' },
  specNote: 'The data apply to LRZ 04, which BLS lists for its intervention service. How many trains there are in total is not publicly documented.',
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['For its intervention service BLS names the LRZ 04 from 2004. How many trains there are in total is not publicly documented.'] }, { titel: 'Service and technology', p: ['The trains are stationed among other places at the intervention centre in Frutigen, at the north portal of the Lötschberg base tunnel. They bring extinguishing agents, rescue crews and breathing protection into long tunnels. The LRZ 04 is 80 m long and weighs 285 t.'] }, { titel: 'Facilities and accessibility', liste: ['Equipment vehicle', 'Fire-fighting tank vehicle', 'Two rescue vehicles'] }],
  bilder: ['Fire-fighting and rescue train in front of the Frutigen intervention centre']
});
uebZug('bls-ae-4-4', {
  typ: 'Four-axle high-power locomotive of BLS (historic)',
  text: ['The BLS Ae 4/4 were the first modern bogie locomotives with four axles and 1000 hp per axle. They are seen as forerunners of all modern four-axle high-power locomotives.', 'Ae 415 251 is operational and can be hired from BLS.'],
  kennzahlen: [['1944', 'first delivery'], ['2945 kW', 'power'], ['125 km/h', 'top speed'], ['80 t', 'weight']],
  daten: { 'Bauart': 'electric locomotive Bo’Bo’', 'Hersteller': 'SLM and BBC', 'Betreiber': 'BLS, today BLS Historic', 'Erhalten': 'Ae 415 251, operational' },
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['SLM and BBC built the BLS Ae 4/4; the first entered service in 1944. They were later called Ae 415. Ae 415 251 is preserved in working order and can be hired from BLS.'] }, { titel: 'Service and technology', p: ['The Ae 4/4 were the first modern four-axle bogie locomotives with 1000 hp per axle and are considered the forerunners of all modern four-axle high-performance locomotives. They have 2945 kW and run at up to 125 km/h.'] }, { titel: 'Facilities and accessibility', liste: ['Two cabs', 'No passenger compartment'] }, { titel: 'Modernised', liste: ['New tap changers and air-blast circuit breakers', 'Electric brake twice as strong; one pantograph was removed for it', 'Rubber springs instead of leaf springs', 'A cable that loads the front axles more and improves adhesion'] }],
  bilder: ['Ae 4/4 251 in Interlaken West (2004)']
});
uebZug('bls-ae-6-8', {
  typ: 'Heavy Lötschberg mountain locomotive (historic)',
  text: ['The Lötschberg Ae 6/8 were built from 1926 to 1943 and at the time were the most powerful locomotives in the world.', 'Ae 6/8 205 was shown at the 1939 National Exhibition in Zurich and now belongs to the BLS Foundation.'],
  kennzahlen: [['8', 'built 1926–1943'], ['4415 kW', 'power'], ['100 km/h', 'top speed'], ['120 t', 'weight']],
  daten: { 'Bauart': 'electric locomotive (1’Co)(Co1’)', 'Hersteller': 'electrics SAAS; mechanics Breda (201–204), SLM (205–208)', 'Betreiber': 'BLS, today BLS Foundation', 'Erhalten': 'Ae 6/8 205' },
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['SAAS supplied the electrical equipment, Breda (201–204) and SLM (205–208) the mechanical part. The eight locomotives were built from 1926 to 1943. Ae 6/8 205 was shown at the 1939 National Exhibition in Zurich and now belongs to the BLS Foundation.'] }, { titel: 'Service and technology', p: ['The Ae 6/8 hauled heavy trains on the Lötschberg railway and were the most powerful locomotive in the world when built. They have 4415 kW and run at up to 100 km/h.'] }, { titel: 'Facilities and accessibility', liste: ['Six driven axles, wheel arrangement (1’Co)(Co1’)', 'No passenger compartment'] }, { titel: 'Two batches', p: ['Numbers 201–204 were built 1926–1931 still as Be 6/8, 205–208 in 1939–1943 directly as Ae 6/8 for 100 km/h. In 1939 the first four also received new gearing for fast trains on the plains.'] }],
  bilder: ['Ae 6/8 205 near Ausserberg, 100 years of the Lötschberg']
});
uebZug('bls-ae-8-8', {
  typ: 'Double locomotive for heavy Lötschberg trains (historic)',
  text: ['The Ae 8/8 basically consists of two permanently coupled Ae 4/4. BLS bought it from 1956 because more and more heavy trains needed a banking locomotive on the Lötschberg line.', 'Its nickname is «Muni», the bull.'],
  kennzahlen: [['6475 kW', 'power'], ['160 t', 'weight'], ['125 km/h', 'top speed'], ['1959', 'first in service']],
  daten: { 'Bauart': 'double locomotive Bo’Bo’+Bo’Bo’', 'Betreiber': 'BLS, today BLS Foundation', 'Erhalten': 'Ae 8/8 273 and 275' },
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['BLS procured the double locomotives from 1956; they entered service between 1959 and 1966. Numbers 273 and 275 are preserved by the BLS Foundation.'] }, { titel: 'Service and technology', p: ['Because more and more heavy trains on the Lötschberg line needed a pilot engine, the Ae 8/8 basically consists of two permanently coupled Ae 4/4. It is 30.2 m long, weighs 160 t, has 6475 kW and runs at up to 125 km/h.'] }, { titel: 'Facilities and accessibility', liste: ['Double locomotive of two permanently coupled halves (Bo’Bo’+Bo’Bo’)', 'No passenger compartment'] }, { titel: 'Today', p: ['The Ae 8/8 entered service between 1959 and 1966. One of the last jobs of no. 273 was hauling spoil trains from the Lötschberg base tunnel.', 'The BLS Foundation is raising money to make 273 operational again. The future of 275 is uncertain because of its condition.'] }],
  bilder: ['Ae 8/8 274']
});
uebZug('bls-be-5-7', {
  typ: 'First Lötschberg electric locomotive (historic)',
  text: ['In 1913 the Be 5/7 was the first series locomotive for the electric Lötschberg line. It was designed as a universal locomotive for fast and freight trains.', 'After the Ae 4/4 arrived it mainly hauled freight trains.'],
  kennzahlen: [['13', 'built'], ['1913', 'first in service'], ['1840 kW', 'one-hour rating'], ['75 km/h', 'top speed']],
  daten: { 'Bauart': 'electric locomotive 1’E1’', 'Hersteller': 'SLM, MFO and BBC', 'Leistung': '1840 kW (one-hour rating)', 'Höchstgeschwindigkeit': '75 km/h, later locomotives 80 km/h', 'Erhalten': 'one locomotive at the Swiss Museum of Transport' },
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['SLM, MFO and BBC built the locomotives numbered 151–163; the first entered service in 1913. Later locomotives ran at 80 instead of 75 km/h.'] }, { titel: 'Service and technology', p: ['The Be 5/7 was the first series locomotive of the electric Lötschberg railway and was intended as a universal locomotive for express and freight trains. After the Ae 4/4 arrived, it mainly hauled freight trains. It has 1840 kW.'] }, { titel: 'Facilities and accessibility', liste: ['Five driven axles, wheel arrangement 1’E1’', 'No passenger compartment'] }, { titel: 'At the Museum of Transport', p: ['Since 1959 locomotive 161 (originally 155) has been at the Swiss Museum of Transport in Lucerne. It carries the number 151 there.'] }],
  bilder: ['Be 5/7 with the number 151']
});
uebZug('bls-ce-6-6', {
  typ: 'Electric test and freight locomotive from 1910 (historic)',
  text: ['Ce 6/6 121 was a one-off electric locomotive, built in 1910 as F 2×3/3, later called Fc 2×3/3 and finally Ce 6/6.', 'It ran until 1968, mostly with freight trains on flatter lines such as Thun–Interlaken.'],
  kennzahlen: [['1', 'built'], ['1910', 'built'], ['1968', 'scrapped'], ['1.7 million km', 'covered']],
  daten: { 'Bauart': 'electric locomotive with two three-axle power bogies', 'Hersteller': 'MFO and SLM', 'Leistung': '2 × 1000 hp (one-hour rating)', 'Höchstgeschwindigkeit': '70 km/h, later 60 km/h', 'Verbleib': 'scrapped 1968, one bogie at the Museum of Transport' },
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['MFO and SLM built the single locomotive 121 in 1910. It was first called F 2×3/3, then Fc 2×3/3 and finally Ce 6/6.'] }, { titel: 'Service and technology', p: ['The locomotive mainly hauled freight trains on flatter lines such as Thun–Interlaken, from 1928 on the Bern–Neuchâtel railway. Two power units had 1000 hp each; top speed was later reduced from 70 to 60 km/h.'] }, { titel: 'Facilities and accessibility', liste: ['Two three-axle power units', 'No passenger compartment'] }, { titel: 'Long in service', p: ['From 1928 the locomotive hauled freight trains for the Bern–Neuchâtel railway. It was scrapped on 10 July 1968 after 57 years. One bogie is on display at the Museum of Transport in Lucerne.'] }],
  bilder: ['Fc 2×3/3 121, the later Ce 6/6 121']
});
uebZug('bls-ce-4-6', {
  typ: 'Light electric locomotive for branch lines (historic)',
  text: ['The Ce 4/6 owes its nickname «Dekretsmühle» to the Bern government, which in 1918 decreed the electrification of branch lines because of the coal shortage after the First World War.', 'Ce 4/6 307 of the former Erlenbach–Zweisimmen railway now stands in the Burgdorf depot.'],
  kennzahlen: [['17', 'locomotives 301–317'], ['1920', 'year built of 307'], ['993 kW', 'power'], ['65 km/h', 'top speed']],
  daten: { 'Bauart': 'electric rod-drive locomotive', 'Betreiber': 'BLS group, today BLS Foundation', 'Erhalten': 'Ce 4/6 307, not operational' },
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['From 1920 the BLS group received locomotives 301–317. Numbers 308–317 were rebuilt as Ce 4/4 in 1954–1956. Ce 4/6 307 of the former Erlenbach–Zweisimmen railway has belonged to the BLS Foundation since 2023.'] }, { titel: 'Service and technology', p: ['The locomotives mainly ran on branch lines electrified after the Bern government decree of 1918. They have 993 kW and run at up to 65 km/h.'] }, { titel: 'Facilities and accessibility', liste: ['Rod drive', 'Maximum axle load of 12 t for branch lines', 'No passenger compartment'] }, { titel: 'Light construction', p: ['Because the locomotives were mainly meant for branch lines, their axle load could not exceed 12 tonnes. Nos. 308–317 were rebuilt into Ce 4/4 in 1954–1956.', 'No. 307 has been a BLS historic vehicle since 1999 and has belonged to the BLS Foundation since 2023.'] }],
  bilder: ['Ce 4/6 307 «Dekretsmühle»']
});
uebZug('bls-ce-4-4', {
  typ: 'Electric locomotive rebuilt from a Ce 4/6 (historic)',
  text: ['The Ce 4/4 were created in 1954–1956 from Ce 4/6 308–317 by removing the end hoods and carrying axles. This increased adhesive weight and tractive effort, although the locomotive became lighter.', 'Ce 4/4 312 is now a museum piece in the Burgdorf depot.'],
  kennzahlen: [['1920', 'built'], ['1957', 'rebuild of 312'], ['993 kW', 'power'], ['65 km/h', 'top speed']],
  daten: { 'Bauart': 'electric locomotive', 'Betreiber': 'BLS group, today BLS Foundation', 'Fahrzeugnummern': '312 (formerly GBS)', 'Erhalten': 'Ce 4/4 312, not operational' },
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The Ce 4/4 were created in 1954–1956 from the Ce 4/6 308–317 built from 1920. Number 312, formerly with the GBS, has been a historic vehicle with a freshly painted body since 2013 and has belonged to the BLS Foundation since 2023. It can be visited on guided tours at the Burgdorf depot.'] }, { titel: 'Service and technology', p: ['In the rebuild, the bonnets and carrying axles were removed. This increased adhesive weight and tractive effort, although the locomotive became lighter. It has 993 kW and runs at up to 65 km/h.'] }, { titel: 'Facilities and accessibility', liste: ['Four driven axles', '12.34 m long, 64 t', 'No passenger compartment'] }]
});
uebZug('bls-bcfe-4-6', {
  beiname: 'Blue Arrow',
  typ: 'Lightweight twin railcar from 1938 (historic)',
  text: ['The «Blue Arrow» of 1938 is, together with the SBB Red Arrow, one of the classics of Swiss railways. Its large windows give an almost panoramic view.', 'BCFe 4/6 736 is operational and can be hired for excursions.'],
  kennzahlen: [['1938', 'built'], ['136', 'seats'], ['110 km/h', 'top speed'], ['41.5 m', 'length']],
  daten: { 'Bauart': 'electric twin railcar', 'Hersteller': 'Sécheron (electrics), SIG (mechanics)', 'Betreiber': 'BLS group, today BLS Historic', 'Fahrzeugnummern': '736 (formerly BN BCFZe 4/6)' },
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['In 1935 BLS introduced single-car lightweight railcars. After the successful trial it ordered three BCFZe 4/6 twin railcars, delivered in summer 1938. No. 731 was shown at the 1939 National Exhibition.', 'For decades the three trains carried passengers in the BLS group, until they were sold in 1983. No. 736 of the Bern–Neuchâtel railway is preserved.'] }, { titel: 'Service and technology', p: ['For decades the double railcars carried the passenger traffic of the BLS group. A train is 41.5 m long, has 710 kW and runs at up to 110 km/h. The electrical part comes from Sécheron, the mechanical part from SIG.'] }, { titel: 'Facilities and accessibility', liste: ['136 seats', 'Large windows with an almost all-round view', 'In working order, can be hired for excursions'] }],
  bilder: ['BCFe 4/6 736 «Blue Arrow»']
});
uebZug('bls-be-4-4-761', {
  typ: 'High-power railcar from 1953 (historic)',
  text: ['The «Wellensittich» (budgie) of 1953, today Be 545 761, is regarded as the ancestor of high-power railcars. With 2000 hp it could even haul international Bern–Paris trains between Bern and Neuchâtel.', 'Since 2001 it has again worn its original light and dark green livery and runs on special trips.'],
  kennzahlen: [['1953', 'built'], ['1470 kW', 'power'], ['125 km/h', 'top speed'], ['56', 'seats']],
  daten: { 'Bauart': 'electric railcar', 'Frühere Bezeichnung': 'Ce 4/4, then Be 4/4 761', 'Betreiber': 'BN, today BLS Historic', 'Fahrzeugnummern': '761–763 (preserved: 761)' },
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['Numbers 761 and 762 came to the Bern–Neuchâtel railway in 1953, 763 to the GBS in 1956. Number 761 is now called Be 545 761 and has been one of BLS’s historic vehicles since 2003.'] }, { titel: 'Service and technology', p: ['With 2000 hp (1470 kW) the railcar could even haul international Bern–Paris trains between Bern and Neuchâtel. It runs at up to 125 km/h.'] }, { titel: 'Facilities and accessibility', liste: ['56 seats', 'Interior fully renovated in 2010', 'Back in its original light and dark green livery since 2001'] }],
  bilder: ['Be 4/4 761 «Wellensittich» in Frutigen']
});
uebZug('bls-ce-2-4', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['In 1935 the BLS group introduced single-car lightweight railcars, including Ce 2/4 727 and 787. Surviving data on these railcars are scarce; the sources used do not name the manufacturers.'] }, { titel: 'Service and technology', p: ['The railcars were a trial with light electric vehicles. Because it succeeded, the «Blue Arrow» double railcars followed in 1938.'] }, { titel: 'Facilities and accessibility', p: ['No reliable information on the facilities has been published. The letter C stands for seats of the former 3rd class.'] }],
  typ: 'Lightweight railcar from 1935 (historic)',
  text: ['In 1935 the BLS group introduced single-car lightweight railcars, among them Ce 2/4 727 and 787. After the successful trial the «Blue Arrow» twin railcars followed in 1938.', 'Little data on these railcars has survived.'],
  kennzahlen: [['1935', 'built'], ['727, 787', 'numbers'], ['1', 'car'], ['BLS', 'group']],
  daten: { 'Bauart': 'electric lightweight railcar', 'Betreiber': 'BLS group' },
  bilder: ['Ce 2/4 787']
});
uebZug('bls-abde-4-8', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['SIG and SAAS, later also BBC, built the double railcars 741–755 for BLS, SEZ, GBS and BN. The first ran in 1945. Only former 742 is preserved, with the railway museum group Kerzers-Kallnach.'] }, { titel: 'Service and technology', p: ['The trains ran regional services of the BLS group, for example in the Simmental, between Spiez and Interlaken and in the Gürbetal, often as push-pull trains with a driving trailer. The first (741–743) had 706 kW, later ones 1177 kW; top speed rose from 110 to 125 km/h.'] }, { titel: 'Facilities and accessibility', liste: ['Double railcar, about 47 m long', 'Luggage compartment (letter D)', 'High-floor entrances with steps'] }],
  typ: 'Electric twin railcar for regional service (historic)',
  text: ['From 1945 the ABDe 4/8 twin railcars ran in regional service in the BLS group, for example in the Simmental, between Spiez and Interlaken and in the Gürbetal. Many ran as push-pull trains with a driving trailer.', 'Only one train is preserved: the former 742, now with the railway museum group Kerzers-Kallnach.'],
  kennzahlen: [['13', 'trains 1945–1964'], ['125 km/h', 'top speed'], ['1177 kW', 'power of later trains'], ['2003', 'last withdrawn']],
  daten: { 'Bauart': 'electric twin railcar', 'Hersteller': 'SIG and SAAS, later also BBC', 'Länge': 'about 46.8–47.8 m', 'Leistung': '706 kW (741–743), 1177 kW (later)', 'Höchstgeschwindigkeit': '110 km/h, later 125 km/h', 'Erhalten': 'ex 742 in Kerzers-Kallnach' },
  bilder: ['ABDe 4/8 741']
});
uebZug('bls-rbde-565', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['SIG, SWS, SWP, BBC and ABB built 22 power cars numbered 721–742; the first entered service in 1982.'] }, { titel: 'Service and technology', p: ['The power cars ran with intermediate and driving trailers in BLS regional and S-Bahn services. They have 1650 kW continuous power and run at up to 125 km/h. From 2022 to 2025 they were replaced by the MIKA.'] }, { titel: 'Facilities and accessibility', liste: ['Push-pull train with intermediate and driving trailers', 'Luggage compartment in the power car (letter D)', 'High-floor entrances in the power car'] }],
  typ: 'Regional push-pull train of the private railways (historic)',
  text: ['The RBDe 565 were the regional push-pull trains of BLS. They ran with intermediate cars and driving trailers in regional and S-Bahn service.', 'From 2022 to 2025 they were replaced by the new MIKA.'],
  kennzahlen: [['22', 'power cars'], ['125 km/h', 'top speed'], ['1650 kW', 'continuous power'], ['1982', 'first in service']],
  daten: { 'Bauart': 'electric power car for push-pull trains', 'Hersteller': 'SIG, SWS, SWP, BBC and ABB', 'Leistung': '1650 kW (continuous power)' },
  bilder: ['RBDe 565 726 in Laupen (2019)']
});
uebZug('bls-rbde-566', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The 13 power cars 230–242 were built in 1984–1985 for the EBT group and came to BLS with the 2006 merger. Number 566 241 is preserved with coaches by the Verein Pendelzug Mirage.'] }, { titel: 'Service and technology', p: ['The trains ran among others Spiez–Frutigen, Brig–Goppenstein, on the Bern S-Bahn and between Thun and Solothurn. The last scheduled run was on 6 December 2024.'] }, { titel: 'Facilities and accessibility', liste: ['Power car for push-pull trains with intermediate and driving trailers', 'Luggage compartment (letter D)', 'High-floor entrances in the power car'] }],
  typ: 'Regional push-pull train of the former RM fleet (historic)',
  text: ['The RBDe 566 II were built in 1984–1985 for the EBT group and came to BLS with the 2006 merger. They ran between Spiez and Frutigen, Brig and Goppenstein, on the Bern S-Bahn and between Thun and Solothurn.', 'The last scheduled run was on 6 December 2024.'],
  kennzahlen: [['13', 'power cars'], ['1984', 'first in service'], ['2024', 'last run'], ['230–242', 'numbers']],
  daten: { 'Bauart': 'electric power car for push-pull trains', 'Betreiber': 'EBT group and RM, from 2006 BLS', 'Verbleib': '566 241 with cars at the Pendelzug Mirage association' },
  bilder: ['RBDe 566 238 with AB and ABt (2020)']
});
uebZug('bls-rabe-526', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['Stadler built the 13 GTW articulated railcars for Regionalverkehr Mittelland (RM). With the merger they came to BLS.'] }, { titel: 'Service and technology', p: ['In 2013 BLS sold the trains to SBB, which used them in the Jura from Biel; in 2018 they went to Thurbo. Today they no longer run for BLS.'] }, { titel: 'Facilities and accessibility', liste: ['Electric articulated railcar of the Stadler GTW family', 'Partly low-floor'] }],
  typ: 'Stadler articulated railcar of the former RM fleet (formerly BLS)',
  text: ['The red GTW of Regionalverkehr Mittelland came to BLS with the merger. In 2013 BLS sold them to SBB, which used them in the Jura from Biel; in 2018 they went to Thurbo.', 'They no longer run at BLS.'],
  kennzahlen: [['13', 'trains'], ['2013', 'to SBB'], ['2018', 'to Thurbo'], ['Stadler', 'builder']],
  daten: { 'Bauart': 'electric articulated railcar', 'Betreiber': 'RM, then BLS, SBB, Thurbo' },
  bilder: ['BLS GTW RABe 526 265']
});
uebZug('bls-ew-iii', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['BLS used the push-pull trains with standard coaches III from 1973 until the end of 2021. A train consisted of a locomotive and six coaches: AD/ABS, A, B, B, B and driving trailer Bt. SBB Historic has taken over one train and preserves it.'] }, { titel: 'Service and technology', p: ['Last, the trains mainly ran as RegioExpress Bern–Neuchâtel, hauled by an Re 465, the Kambly train by an Re 420. A train is 165 m long, weighs 263 t and runs at up to 140 km/h. The MIKA replaced them.'] }, { titel: 'Facilities and accessibility', liste: ['63 seats in 1st and 280 in 2nd class', 'Driving trailer Bt for push-pull operation', 'High-floor entrances with steps'] }],
  name: 'EW III', beiname: 'Push-pull train',
  typ: 'Push-pull train with standard coaches III (historic)',
  text: ['The BLS EW III push-pull trains ran from 1973 until late 2021, last mainly as RegioExpress between Bern and Neuchâtel. They made way for the new MIKA.', 'SBB Historic took over one EW III set and preserves it.'],
  kennzahlen: [['1973', 'first in service'], ['2021', 'withdrawn'], ['165 m', 'train length'], ['140 km/h', 'top speed']],
  daten: { 'Bauart': 'push-pull train with locomotive and 6 coaches', 'Lokomotive': 'Re 465 (Kambly train: Re 420)', 'Sitzplätze': '63 in 1st, 280 in 2nd class' },
  bilder: ['BLS EW III push-pull train in Malters']
});
uebZug('bls-re-420', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['For a time BLS had its own Re 420 of the Re 4/4 II family. Today it no longer owns any locomotives of this type.'] }, { titel: 'Service and technology', p: ['The last three hauled the GoldenPass Line coaches between Interlaken Ost and Zweisimmen. The locomotive is 14.8 m long, weighs 80 t, has 4700 kW and runs at up to 140 km/h.'] }, { titel: 'Facilities and accessibility', liste: ['Two cabs', 'No passenger compartment'], p: ['Accessibility depended on the coaches it hauled.'] }],
  typ: 'Re 4/4 II in BLS service (historic)',
  text: ['For a while BLS owned its own Re 420 of the proven Re 4/4 II family. The last three hauled the GoldenPass Line coaches between Interlaken Ost and Zweisimmen.', 'Today BLS no longer owns locomotives of this type.'],
  kennzahlen: [['4700 kW', 'power'], ['140 km/h', 'top speed'], ['80 t', 'weight'], ['14.8 m', 'length']],
  daten: { 'Bauart': 'electric locomotive Bo’Bo’', 'Betreiber': 'BLS (formerly)' },
  bilder: ['Re 420.5 with push-pull train on the Bietschtal bridge']
});

// ---------- TPF ----------
uebZug('tpf-rabe-527', {
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler Bussnang delivered eight FLIRT of the 190 series to TPF, numbered 191–198. They entered service from 2011 to 2014.'] },
      { titel: 'Service and technology', p: ['The FLIRT run on the RER Fribourg: as RegioExpress RE2/RE3 Bern–Fribourg–Romont–Bulle–Broc and on the S20/S21 Fribourg–Murten–Ins–Neuchâtel.', 'The four-car train is 74.08 m long, has 2600 kW and runs at up to 160 km/h. Up to four trains can be coupled.'] },
      { titel: 'Facilities and accessibility', liste: ['Fully air-conditioned', 'Audio and visual passenger information', 'Multi-purpose compartment', 'More than 90 percent low-floor', 'Closed-circuit toilet suitable for people with reduced mobility'],
        p: ['The train is more than 90 percent low-floor. TPF does not state the number of wheelchair spaces.'] }
    ],
  typ: 'Electric regional multiple unit by Stadler',
  text: ['The eight FLIRT of the 190 series are the most modern standard-gauge trains of TPF. They run as RegioExpress and S-Bahn in the canton of Fribourg and beyond.', 'Technically they belong to Stadler’s large FLIRT family.'],
  kennzahlen: [['8', 'trains (191–198)'], ['160 km/h', 'top speed'], ['418', 'places in total'], ['2011', 'first in service']],
  daten: { 'Bauart': 'electric multiple unit, 4 cars', 'Gewicht': '122 t empty', 'Sitzplätze': '24 in 1st, 143 in 2nd class', 'Anzahl': '8 trains' },
  specNote: 'Entered service 2011–2014. Plus 42 folding seats and 209 standing places, 418 places in total.',
  bilder: ['RABe 527 196 in Neuchâtel', 'RABe 527 198 on the Grandfey viaduct', 'TPF FLIRT in Bulle', 'RABe 527 as RegioExpress in Bern']
});
uebZug('tpf-rbde-560', {
  typ: 'Modernised regional push-pull train (Domino 3)',
  text: ['From 2009 to 2011 TPF rebuilt its NPZ push-pull trains into three-car Domino. Each train received a new low-floor intermediate car from Bombardier.', 'Two trains, 235 and 245, carry the «Chocolat Express» design.'],
  kennzahlen: [['14', 'trains'], ['140 km/h', 'top speed'], ['1650 kW', 'power'], ['184', 'seats']],
  daten: { 'Bauart': 'push-pull train with power car, low-floor intermediate car and driving trailer', 'Hersteller': 'SWG, SIG, ABB; intermediate car Bombardier', 'Fahrzeugnummern': '235–247 and 269', 'Gewicht': '146 t empty', 'Sitzplätze': '24 in 1st, 160 in 2nd class', 'Anzahl': '14 trains' },
  specNote: 'Power cars built 1984–1996, modernised into Domino 2009–2011.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The 14 TPF Domino (235–247 and 269) were created from NPZ push-pull trains built by SWG, SIG and ABB between 1984 and 1996. From 2009 to 2011 TPF rebuilt them as Domino; each train received a new low-floor intermediate car from Bombardier.', 'TPF has ordered 13 four-car FLIRT Evo from Stadler. The first is due to enter service in December 2028; they will gradually replace the Domino in the following years.'] },
      { titel: 'Service and technology', p: ['Like the FLIRT, the Domino run on the RER Fribourg, as RegioExpress Bern–Fribourg–Bulle–Broc and on the S20/S21 Fribourg–Murten–Ins–Neuchâtel.', 'A train is 75 m long, has 1650 kW and runs at up to 140 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Air conditioning throughout the train', 'Audio and visual passenger information', 'Multi-purpose compartment', 'Low-floor intermediate car', 'Bioreactor toilet suitable for people with reduced mobility'],
        p: ['Step-free boarding is possible in the low-floor intermediate car; the power car and driving trailer have steps.'] },
      { titel: 'Chocolat Express', p: ['Trains 235 and 245 carry the «Chocolat Express» design. It is not a separate type of vehicle but a special livery on normal Domino.'] }
    ],
  bilder: ['Domino in «Chocolat Express» design on the Grandfey viaduct']
});
uebZug('tpf-abe-4-12', {
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Stadler Bussnang delivered ten three-car trains to TPF, numbered 101–110. They entered service in 2015 and 2016. A train consists of an ABe 2/4, an intermediate car B and a Be 2/4.'] },
      { titel: 'Service and technology', p: ['The trains run on the TPF metre-gauge network: S50 Palézieux–Châtel-St-Denis–Bulle–Montbovon and S51 to Gruyères.', 'A train is 55.21 m long, has 1400 kW and runs at up to 100 km/h. It can be formed modularly from two to four sections, and up to four trains can run together.'] },
      { titel: 'Facilities and accessibility', liste: ['Fully air-conditioned', 'Audio and visual passenger information', 'Closed-circuit toilet suitable for people with reduced mobility', '350 places: 15 in 1st and 133 in 2nd class, 14 folding seats, 188 standing places'],
        p: ['On its vehicle page, TPF gives no details about low-floor entrances or wheelchair spaces.'] }
    ],
  beiname: 'Series 100',
  typ: 'Low-floor multiple unit for the metre-gauge network',
  text: ['The ten three-car Stadler trains run on the TPF metre-gauge network in Gruyère and Veveyse. A train consists of an ABe 2/4, an intermediate car B and a Be 2/4.', 'Up to four trains can run together.'],
  kennzahlen: [['10', 'trains (101–110)'], ['100 km/h', 'top speed'], ['350', 'places in total'], ['2015', 'first in service']],
  daten: { 'Bauart': 'electric low-floor multiple unit, 3 cars', 'Gewicht': '88 t empty', 'Sitzplätze': '15 in 1st, 133 in 2nd class', 'Anzahl': '10 trains' },
  specNote: 'Entered service 2015–2016. Plus 14 folding seats and 188 standing places, 350 places in total.',
  bilder: ['ABe 4/12 in front of the Dent du Chamois', 'ABe 4/12 near Albeuve', 'ABe 2/4 101 in Montbovon', 'ABe 2/4 103']
});
uebZug('tpf-be-4-4-120', {
  beiname: 'Series 120',
  typ: 'Metre-gauge push-pull train with intermediate car and driving trailer',
  text: ['The push-pull trains of the 120 series consist of a Be 4/4 power car, an intermediate car B if needed, and an (A)Bt driving trailer. They run on the TPF metre-gauge network.', 'The power cars used to be called BDe 4/4 because they had a luggage compartment.'],
  kennzahlen: [['4', 'power cars (121–124)'], ['90 km/h', 'top speed'], ['640 kW', 'power'], ['1992', 'first in service']],
  daten: { 'Bauart': 'push-pull train: power car, intermediate car, driving trailer', 'Hersteller': 'Vevey/BBC; intermediate cars SIG', 'Länge': '52.32 m (3-car train)', 'Sitzplätze': '134 in 2nd class; 9 in 1st class only in 221–223' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The 120 series comprises 13 vehicles: 4 Be 4/4 power cars (121–124) and 6 (A)Bt driving trailers (221–226) by Vevey/BBC, built from 1992 to 1995, plus 3 intermediate cars B (207, 209, 215) by SIG from 1973.', 'The power cars used to be called BDe 4/4 because they had a luggage compartment.'] },
      { titel: 'Service and technology', p: ['The push-pull trains run on the TPF metre-gauge network between Palézieux, Bulle, Gruyères and Montbovon. They are modular: intermediate cars and driving trailers are added as needed.', 'A three-vehicle train is 52.32 m long, has 640 kW and runs at up to 90 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Audio and visual passenger information', '253 places: 134 in 2nd class, 8 folding seats, 102 standing places', '1st class with 9 seats only in driving trailers 221–223'],
        p: ['On its vehicle page, TPF gives no details about air conditioning, low-floor entrances or wheelchair spaces.'] },
      { titel: 'The vehicles', tabelle: { kopf: ['Vehicle', 'Numbers', 'Number', 'Years built', 'Builder'], zeilen: [
    ['Power car Be 4/4', '121–124', '4', '1992–1995', 'Vevey/BBC'], ['Intermediate car B', '207, 209, 215', '3', '1973', 'SIG'], ['Driving trailer (A)Bt', '221–226', '6', '1992–1995', 'Vevey/BBC']] } }
    ],
  bilder: ['Be 4/4 123', 'Power car 124, then still BDe 4/4 (2010)', 'Driving trailer 221 in Bulle', 'Driving trailer 225']
});
uebZug('tpf-funiculaire', {
  typ: 'Neuveville–St-Pierre funicular with water ballast',
  text: ['Since 1899 the Fribourg funicular has linked the lower town, the Neuveville, with St-Pierre. It climbs 58 metres over 121 metres.', 'What makes it special is how it works: waste water from the city of Fribourg serves as counterweight. According to TPF this is unique in Europe.'],
  kennzahlen: [['1899', 'opened'], ['121 m', 'line length'], ['550 ‰', 'maximum gradient'], ['2 min', 'journey time']],
  daten: { 'Bauart': 'funicular with water ballast', 'Kabinen': '2 with 20 places each', 'Länge': '121 m line, car 5.4 m', 'Gewicht': '1600 kg per car', 'Höchstgeschwindigkeit': '4.3 km/h (1.2 m/s)', 'Kapazität': '240 people per hour' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The funicular was built by Von Roll and has run since 1899. It was rebuilt in 1998, and the last major overhaul was in 2020. It is a listed historic monument.', 'It has two cars with 20 places each.'] },
      { titel: 'Service and technology', p: ['In Fribourg, the funicular links the lower town, the Neuveville (552 m), with St-Pierre (608 m). In regular service it makes about 70 round trips a day on the single track with a passing loop, from 7 am to 7 pm, in summer until 8 pm.', 'Waste water from the city of Fribourg serves as counterweight. The line is 121 m long, has a gauge of 1200 mm and gradients up to 550 ‰; the trip takes 2 minutes at 1.2 m/s.', 'The funicular is closed for a major overhaul from 27 August to 4 December 2026. Service is scheduled to resume on 5 December 2026; until then bus line 4 replaces it.'] },
      { titel: 'Facilities and accessibility', liste: ['2 cars with 20 places each', '240 people per hour'],
        p: ['On its vehicle page, TPF gives no details about access with a wheelchair, pram or bike.'] }
    ],
  bilder: ['Neuveville–St-Pierre funicular in Fribourg (2024)']
});
uebZug('tpf-tm-87', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['Stadler Bussnang and ADtranz built the tractor; it entered service in 2000. TPF runs it as number 87 on its standard-gauge network.'] }, { titel: 'Service and technology', p: ['The Tm 87 is used for infrastructure maintenance, hauls heavy trains and clears snow. An MTU 12V 183 TD13 engine drives it diesel-hydraulically; it has 550 kW and runs at up to 80 km/h.'] }, { titel: 'Facilities and accessibility', liste: ['Palfinger loading crane, 1200 kg at 7.2 m reach', 'Remote control', 'No passenger compartment'] }],
  typ: 'Diesel-hydraulic service tractor with loading crane',
  text: ['Tm 87 is a service tractor of the Tm 234 type for the TPF standard-gauge network. It is used for infrastructure maintenance, hauls heavy trains and clears snow.', 'It has a loading crane and can be operated by remote control.'],
  kennzahlen: [['550 kW', 'power'], ['80 km/h', 'top speed'], ['30 t', 'weight'], ['2000', 'first in service']],
  daten: { 'Bauart': 'diesel-hydraulic tractor with loading crane', 'Länge': '11.364 m', 'Gewicht': '30 t empty', 'Kran': 'Palfinger, 1200 kg at 7.2 m' }
});
uebZug('tpf-tmf-17', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['Schöma built the two-axle tractor 17; it entered service in 2011.'] }, { titel: 'Service and technology', p: ['It works in engineering service on the TPF metre-gauge network, hauls heavy trains and clears snow. A six-cylinder Deutz engine gives 330 kW; the tractor runs at up to 65 km/h and hauls 200 t on the level or 90 t on 50 ‰.'] }, { titel: 'Facilities and accessibility', liste: ['Remote control', 'Two axles, 8.50 m long', 'No passenger compartment'] }],
  typ: 'Diesel tractor for the metre-gauge network',
  text: ['Tmf 2/2 17 by Schöma is a two-axle diesel tractor for the TPF metre-gauge network. It works on construction duty, hauls heavy trains and clears snow.', 'It can also be operated by remote control.'],
  kennzahlen: [['330 kW', 'power'], ['65 km/h', 'top speed'], ['28 t', 'weight'], ['2011', 'first in service']],
  daten: { 'Bauart': 'two-axle diesel tractor', 'Länge': '8.50 m', 'Gewicht': '28 t empty', 'Motor': 'Deutz, 6 cylinders', 'Anhängelast': '200 t on the level, 90 t at 50 ‰' }
});
uebZug('tpf-gem-18', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['Stadler Bussnang built locomotive 18; it entered service in 2016.'] }, { titel: 'Service and technology', p: ['Under the overhead line it runs electrically with 700 kW, otherwise with a Mercedes-Benz OM 502 LA diesel engine of 400 kW. TPF uses it for engineering work, heavy trains and snow clearing. It runs at up to 80 km/h and hauls 300 t on the level or 120 t on 50 ‰.'] }, { titel: 'Facilities and accessibility', liste: ['Cab with room for eight people', 'Bi-mode drive: electric and diesel', 'No passenger compartment for travellers'] }],
  typ: 'Bi-mode locomotive for the metre-gauge network',
  text: ['Stadler’s Gem 2/2 18 runs electrically under the catenary and on diesel elsewhere. TPF uses it on construction duty, for heavy trains and for snow clearing.', 'The cab has room for eight people.'],
  kennzahlen: [['700 kW', 'electric'], ['400 kW', 'diesel'], ['80 km/h', 'top speed'], ['2016', 'first in service']],
  daten: { 'Bauart': 'bi-mode locomotive (electric and diesel)', 'Länge': '8.37 m', 'Gewicht': '28 t empty', 'Leistung': '700 kW electric, 400 kW diesel', 'Anhängelast': '300 t on the level, 120 t at 50 ‰' },
  bilder: ['Gem 2/2 18']
});
uebZug('tpf-x-925', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['Schindler Waggon Pratteln, MOB-TPF and Nencki were involved in the crane wagon. The underframe dates from 1972; the rebuild as a crane wagon entered service in 2016.'] }, { titel: 'Service and technology', p: ['The crane wagon works on the TPF metre-gauge network. The crane platform can be moved onto the standard-gauge carrier wagon Sgjs X113, so the crane also works on the standard-gauge network. The wagon runs at up to 65 km/h.'] }, { titel: 'Facilities and accessibility', liste: ['Radio-controlled Palfinger PKR290 crane, 1500 kg at 14 m', 'Four axles in two bogies', 'No passenger compartment'] }],
  name: 'X 925', beiname: 'Crane wagon',
  typ: 'Crane wagon for metre and standard gauge',
  text: ['Crane wagon X 925 carries a radio-controlled Palfinger crane. The underframe dates from 1972; the conversion into a crane wagon entered service in 2016.', 'The crane platform can be transferred to the standard-gauge carrier wagon Sgjs X113. This lets the crane also work on the TPF standard-gauge network.'],
  kennzahlen: [['1500 kg', 'at 14 m reach'], ['65 km/h', 'top speed'], ['52 t', 'total weight'], ['2016', 'first in service']],
  daten: { 'Bauart': 'four-axle crane wagon 2’2’', 'Spurweite': 'metre gauge, 1000 mm; crane also on standard-gauge carrier wagon Sgjs X113', 'Länge': '13.776 m', 'Gewicht': '37.825 t empty, 52 t loaded', 'Kran': 'Palfinger PKR290, 1500 kg at 14 m' }
});
uebZug('tpf-retrozug', {
  name: 'Retro train',
  typ: 'Historic TPF metre-gauge train for special trips',
  text: ['The TPF retro train consists of power car Be 4/4 116 and three coaches from 1930 to 1932. TPF uses it for fondue trains and other special trips.', 'The power car of 1922 was fully rebuilt to its original form by TPF in 1999.'],
  kennzahlen: [['1922', 'power car built'], ['482 kW', 'power'], ['65 km/h', 'top speed'], ['186', 'places']],
  daten: { 'Bauart': 'power car with three coaches', 'Hersteller': 'SWS (power car), SIG (coaches)', 'Länge': '61.58 m (whole train)', 'Höchstgeschwindigkeit': '65 km/h (30 km/h in scheduled service)', 'Sitzplätze': '176 in 2nd class, plus 10 folding seats' },
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The Be 4/4 116 motor coach was built by SWS in 1922 and completely rebuilt true to the original by TPF in 1999. The three coaches B 243, Brs 245 and Br 247 were built by SIG from 1930 to 1932.'] }, { titel: 'Service and technology', p: ['TPF uses the train for fondue trains and other special trips on its metre-gauge network. The motor coach has 482 kW; the whole train is 61.58 m long and runs at up to 65 km/h, 30 km/h in scheduled service.'] }, { titel: 'Facilities and accessibility', liste: ['176 seats in 2nd class and 10 folding seats', 'Two coaches with a restaurant section (letter R)', 'High-floor entrances with steps'] }, { titel: 'The vehicles', tabelle: { kopf: ['Vehicle', 'Year built', 'Builder'], zeilen: [
    ['Power car Be 4/4 116', '1922 (rebuilt 1999)', 'SWS'], ['Coach B 243', '1930', 'SIG'], ['Coach Brs 245', '1931', 'SIG'], ['Coach Br 247', '1932', 'SIG']] } }],
  bilder: ['TPF retro train', 'Be 4/4 116 in Bulle (2011)', 'Inside the retro train']
});
uebZug('gfm-be-111', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['Motor coach 111 dates from 1903; the sources used do not name a manufacturer. Today it belongs to the GFM Historique collection. From 2006 to 2011 it was on loan to the Blonay–Chamby museum railway.'] }, { titel: 'Service and technology', p: ['It ran in the early days of electric railways in the Gruyère on the metre-gauge network of the CEG and later the GFM.'] }, { titel: 'Facilities and accessibility', p: ['No reliable details on the facilities have been published. Like all vehicles of that time, it has high entrances with steps.'] }],
  typ: 'Electric railcar from 1903 (historic)',
  text: ['Railcar 111 of 1903 dates from the early days of electric railways in Gruyère. It is now part of the GFM Historique collection.', 'From 2006 to 2011 it was on loan to the Blonay–Chamby museum railway.'],
  kennzahlen: [['1903', 'built'], ['111', 'number'], ['metre gauge', 'gauge'], ['GFM Historique', 'today']],
  daten: { 'Bauart': 'electric railcar', 'Betreiber': 'CEG/GFM, today GFM Historique' },
  specNote: 'GFM Historique calls it «Be 4/4 111», Wikipedia «BCe 4/4 111».',
  bilder: ['Railcar 111 at the Blonay–Chamby museum railway']
});
uebZug('gfm-be-115', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['Motor coach 115 dates from 1905; the sources used do not name a manufacturer. It was scrapped in October 2016.'] }, { titel: 'Service and technology', p: ['For a long time it ran as a nostalgia motor coach on the metre-gauge network of the GFM and later TPF.'] }, { titel: 'Facilities and accessibility', p: ['No reliable details on the facilities have been published. Like all vehicles of that time, it had high entrances with steps.'] }],
  typ: 'Nostalgic railcar from 1905 (historic)',
  text: ['Be 4/4 115 of 1905 ran for a long time as a nostalgic railcar on the metre-gauge network of GFM and later TPF.', 'It was scrapped in October 2016.'],
  kennzahlen: [['1905', 'built'], ['2016', 'scrapped'], ['115', 'number'], ['metre gauge', 'gauge']],
  daten: { 'Bauart': 'electric railcar', 'Betreiber': 'GFM, later TPF', 'Verbleib': 'scrapped October 2016' },
  bilder: ['Be 4/4 115 in Bulle (1995)', 'Be 4/4 115 with Bt 254 in Broc-Fabrique (2011)']
});
uebZug('gfm-be-131', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The three motor coaches 131–133 were built for the GFM in 1943. Number 132 was scrapped in 1989, 133 in 2003; 131 is preserved as Ce 4/4 131 by GFM Historique.'] }, { titel: 'Service and technology', p: ['The motor coaches ran on the GFM metre-gauge network.'] }, { titel: 'Facilities and accessibility', p: ['No reliable details on the facilities have been published. Like all vehicles of that time, they have high entrances with steps.'] }],
  typ: 'Electric railcars from 1943 (historic)',
  text: ['The three railcars 131 to 133 were built in 1943 for the GFM metre-gauge network.', 'No. 132 was scrapped in 1989 and 133 in 2003. No. 131 is preserved and is part of the GFM Historique collection as Ce 4/4 131.'],
  kennzahlen: [['3', 'railcars'], ['1943', 'built'], ['131', 'preserved'], ['metre gauge', 'gauge']],
  daten: { 'Bauart': 'electric railcar', 'Verbleib': '131 preserved, 132 scrapped 1989, 133 scrapped 2003' }
});
uebZug('gfm-bde-141', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['SWP built the mechanical part, SAAS the electrical equipment; the two motor coaches 141 and 142 came in 1972. Number 141 went to GFM Historique in 2017, 142 was scrapped in April 2017.'] }, { titel: 'Service and technology', p: ['At first the motor coaches hauled gravel trains. From 1981 they had a compartment with seats and also ran with driving trailers 251–256. They weigh 36.5 t and run at up to 70 km/h.'] }, { titel: 'Facilities and accessibility', liste: ['40 seats from 1981', 'Luggage compartment (letter D)', 'High-floor entrances with steps'] }],
  typ: 'Gravel-train railcars from 1972 (historic)',
  text: ['The two powerful railcars of 1972 were first built for gravel trains. From 1981 they got a seating compartment and also ran with driving trailers 251–256.', 'No. 141 went to GFM Historique in 2017; 142 was scrapped in April 2017.'],
  kennzahlen: [['2', 'railcars'], ['1972', 'built'], ['70 km/h', 'top speed'], ['36.5 t', 'weight']],
  daten: { 'Bauart': 'electric railcar with luggage compartment', 'Hersteller': 'SWP (mechanics), SAAS (electrics)', 'Betreiber': 'GFM, later TPF', 'Gewicht': '36.5 t', 'Sitzplätze': '40 (from 1981)', 'Verbleib': '141 at GFM Historique, 142 scrapped 2017' },
  bilder: ['BDe 4/4 141 with driving trailer', 'BDe 4/4 142 in Bulle (2014)', 'BDe 4/4 142 in Bulle']
});
uebZug('gfm-be-151', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['Motor coaches 151 and 152 came in 1977. Both were scrapped in April 2017.'] }, { titel: 'Service and technology', p: ['They had only one cab and therefore always ran as push-pull trains with one of the driving trailers 251–256 on the GFM and TPF metre-gauge network.'] }, { titel: 'Facilities and accessibility', liste: ['One cab', 'Always running with a driving trailer', 'High-floor entrances with steps'] }],
  typ: 'Push-pull railcars from 1977 (historic)',
  text: ['Railcars 151 and 152 of 1977 had only one driving cab. They therefore always ran with one of the driving trailers 251–256.', 'Both were scrapped in April 2017.'],
  kennzahlen: [['2', 'railcars'], ['1977', 'built'], ['1', 'driving cab'], ['2017', 'scrapped']],
  daten: { 'Bauart': 'electric railcar with one driving cab', 'Betreiber': 'GFM, later TPF', 'Einsatz': 'push-pull train with driving trailers 251–256', 'Verbleib': 'scrapped April 2017' },
  bilder: ['Be 4/4 151 with driving trailer Bt 256', 'Be 4/4 152 in Montbovon (1995)']
});
uebZug('gfm-gde-101', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['SLM and BBC built locomotive 101 «Ville de Bulle»; it entered service in 1983. It was later sold to the Montreux–Bernese Oberland Railway; the year is given differently (2007 or 2017).'] }, { titel: 'Service and technology', p: ['It was the only large electric locomotive of the GFM on the metre gauge. At the MOB it now runs as GDe 4/4 6005.'] }, { titel: 'Facilities and accessibility', liste: ['Two cabs', 'Luggage compartment (letter D)', 'No passenger compartment'] }],
  typ: 'GFM metre-gauge electric locomotive (now at MOB)',
  text: ['GDe 4/4 101 «Ville de Bulle» was the only large metre-gauge electric locomotive of GFM.', 'It was sold to the Montreux–Oberland Bernois railway and runs there as GDe 4/4 6005.'],
  kennzahlen: [['1983', 'built'], ['SLM / BBC', 'builder'], ['6005', 'current number at MOB'], ['metre gauge', 'gauge']],
  daten: { 'Bauart': 'electric locomotive', 'Hersteller': 'SLM and BBC', 'Betreiber': 'GFM, today MOB', 'Fahrzeugnummern': '101, at MOB 6005', 'Verbleib': 'sold to MOB' },
  specNote: 'Sources give different years for the sale (2007 or 2017).',
  bilder: ['The former GDe 4/4 101 as MOB 6005 near Saanenmöser (2014)']
});
uebZug('gfm-te-22', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The two tractors 11 and 12 date from 1913; the electrical equipment came from MFO (11) and Alioth (12). Number 12 was withdrawn in 2012.'] }, { titel: 'Service and technology', p: ['They shunted on the GFM metre-gauge network: Te 2/2 11 in Bulle, Te 2/2 12 in Montbovon.'] }, { titel: 'Facilities and accessibility', liste: ['Two axles', 'Electric drive from the overhead line', 'No passenger compartment'] }],
  typ: 'Electric shunting tractors from 1913 (historic)',
  text: ['The two small shunting tractors of 1913 shunted on the GFM metre-gauge network: Te 2/2 11 in Bulle, Te 2/2 12 in Montbovon.', 'No. 12 was withdrawn in 2012.'],
  kennzahlen: [['2', 'tractors'], ['1913', 'built'], ['Bulle', 'Te 2/2 11'], ['Montbovon', 'Te 2/2 12']],
  daten: { 'Bauart': 'electric shunting tractor', 'Hersteller': 'electrics MFO (11), Alioth (12)', 'Betreiber': 'GFM, later TPF' },
  specNote: 'For no. 12 Wikipedia gives scrapping in 2012; Commons also has photos from 2026.',
  bilder: ['Te 2/2 12 in Montbovon', 'Te 2/2 12 from the side']
});
uebZug('gfm-te-44', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['Numbers 13 and 14 were built in 1901 as motor coaches with electrical equipment from Alioth and rebuilt as shunting tractors in 1927 and 1933. Number 13 was withdrawn in 2017.'] }, { titel: 'Service and technology', p: ['Number 13 shunted in Broc-Fabrique, 14 hauled engineering trains.'] }, { titel: 'Facilities and accessibility', liste: ['Four driven axles', 'Electric drive from the overhead line', 'No passenger compartment'] }],
  typ: 'Shunting tractors rebuilt from railcars (historic)',
  text: ['Te 4/4 13 and 14 were built in 1901 as railcars and rebuilt into shunting tractors in 1927 and 1933.', 'No. 13 shunted in Broc-Fabrique, 14 hauled construction trains. No. 13 was withdrawn in 2017.'],
  kennzahlen: [['2', 'tractors'], ['1901', 'built'], ['1927 / 1933', 'rebuilt'], ['metre gauge', 'gauge']],
  daten: { 'Bauart': 'electric shunting tractor', 'Hersteller': 'electrics Alioth', 'Betreiber': 'GFM, later TPF', 'Einsatz': 'shunting in Broc-Fabrique, construction trains' },
  bilder: ['Te 4/4 13', 'Te 4/4 14']
});
uebZug('gfm-tm-15', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['Schöma and Deutz built the tractor in 1971; it was rebuilt in 1981.'] }, { titel: 'Service and technology', p: ['It hauled engineering trains and shunted in Bulle.'] }, { titel: 'Facilities and accessibility', liste: ['Diesel drive, independent of the overhead line', 'Two axles', 'No passenger compartment'] }],
  typ: 'Diesel tractor for construction trains and shunting (historic)',
  text: ['The small diesel tractor Tm 2/2 15 was built by Schöma in 1971 and rebuilt in 1981. It hauled construction trains and shunted in Bulle.'],
  kennzahlen: [['1971', 'built'], ['1981', 'rebuilt'], ['Schöma', 'builder'], ['Bulle', 'place of use']],
  daten: { 'Bauart': 'two-axle diesel tractor', 'Betreiber': 'GFM, later TPF', 'Einsatz': 'construction trains, shunting in Bulle' },
  bilder: ['Tm 2/2 15 in Bulle (2005)']
});
uebZug('gfm-abde-24', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The motor coaches came to the Fribourg–Morat–Anet railway (FMA) in 1931 and later belonged to the GFM. ABDe 2/4 155 was scrapped in 2025; its cabs went to ÖV Historique.'] }, { titel: 'Service and technology', p: ['They ran on the standard-gauge line Fribourg–Murten–Ins, at first with direct current. In 1946 they were converted to alternating current at 15 kV and 16.7 Hz.'] }, { titel: 'Facilities and accessibility', liste: ['Seats in 1st and 2nd class (letters A and B)', 'Luggage compartment (letter D)', 'High-floor entrances with steps'] }],
  typ: 'Railcar of the Fribourg–Morat–Anet railway (historic)',
  text: ['The ABDe 2/4 came to the Fribourg–Morat–Anet railway in 1931, still for direct current. In 1946 they were converted to alternating current.', 'ABDe 2/4 155 was scrapped in 2025; its driving cabs went to ÖV Historique.'],
  kennzahlen: [['1931', 'delivered'], ['1946', 'converted to AC'], ['155', 'last preserved'], ['standard gauge', 'gauge']],
  daten: { 'Bauart': 'electric railcar', 'Betreiber': 'FMA, later GFM', 'Stromsystem': 'first direct current, from 1946 15 kV 16.7 Hz', 'Verbleib': '155 scrapped 2025, driving cabs at ÖV Historique' },
  bilder: ['ABDe 2/4 155']
});
uebZug('gfm-abde-44', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['SIG and BBC built motor coaches 161–167 from 1946 to 1948; number 166 was an ABe 4/4. Most were rebuilt in 1965. Numbers 162, 163 and 167 have been scrapped.'] }, { titel: 'Service and technology', p: ['The motor coaches modernised services on the GFM standard-gauge lines.'] }, { titel: 'Facilities and accessibility', liste: ['16 seats in 1st and 32 in 2nd class', 'Luggage compartment (letter D), except on 166', 'High-floor entrances with steps'] }],
  typ: 'GFM standard-gauge railcars (historic)',
  text: ['ABDe 4/4 161 to 167 by SIG and BBC were built in 1946 to 1948 and modernised the GFM standard-gauge lines. Most were rebuilt in 1965.', 'Several railcars have since been scrapped.'],
  kennzahlen: [['1946', 'first built'], ['1965', 'rebuilt'], ['SIG / BBC', 'builder'], ['48', 'seats (16 + 32)']],
  daten: { 'Bauart': 'electric railcar', 'Hersteller': 'SIG and BBC', 'Fahrzeugnummern': '161–167 (166 as ABe 4/4)', 'Sitzplätze': '16 in 1st, 32 in 2nd class', 'Verbleib': '162, 163 and 167 scrapped' },
  bilder: ['ABDe 4/4 162 in Ins', 'ABDe 4/4 167 in Bulle']
});
uebZug('gfm-rbde-567', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['Power cars 171–173 by SIG, SWS and BBC date from 1983, 181–182 by SWP, SIG and ABB from 1991. Number 173 came from the RVT in 1992. They no longer appear in the current TPF fleet overview; 171 was still photographed in 2024.'] }, { titel: 'Service and technology', p: ['The power cars belong to the private-railway NPZ family and ran as push-pull trains on the GFM and TPF standard-gauge network.'] }, { titel: 'Facilities and accessibility', liste: ['Power car for push-pull trains with driving trailer', 'Luggage compartment (letter D)', 'High-floor entrances in the power car'] }],
  typ: 'Older regional push-pull trains of GFM and TPF',
  text: ['Power cars 171 to 173 of 1983 and 181 to 182 of 1991 belong to the NPZ family of the private railways. No. 173 came from the RVT in 1992.', 'They are no longer in the current TPF fleet overview; 171 was still photographed in 2024.'],
  kennzahlen: [['5', 'power cars'], ['1983', 'first built'], ['1991', 'second batch'], ['standard gauge', 'gauge']],
  daten: { 'Bauart': 'electric power car for push-pull trains', 'Hersteller': 'SIG, SWS, BBC (171–173); SWP, SIG, ABB (181–182)', 'Betreiber': 'GFM, later TPF' },
  bilder: ['Power car 182 in Ins (2000)', 'Power car 171 (2005)']
});
uebZug('gfm-ee-91', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['SIG and BBC built the small shunting locomotive in 1960. It later carried the number 217 091.'] }, { titel: 'Service and technology', p: ['It shunted on the GFM standard-gauge network, for example in Bulle.'] }, { titel: 'Facilities and accessibility', liste: ['Two driven axles', 'Electric drive from the overhead line', 'No passenger compartment'] }],
  typ: 'Electric standard-gauge shunting locomotive (historic)',
  text: ['The small shunting locomotive Ee 2/2 91 was built in 1960 by SIG and BBC. It shunted on the GFM standard-gauge network, for example in Bulle, and later carried the number 217 091.'],
  kennzahlen: [['1960', 'built'], ['SIG / BBC', 'builder'], ['217 091', 'later number'], ['standard gauge', 'gauge']],
  daten: { 'Bauart': 'electric shunting locomotive', 'Hersteller': 'SIG and BBC', 'Betreiber': 'GFM, later TPF', 'Fahrzeugnummern': '91 (later 217 091)' },
  bilder: ['Ee 2/2 91 (217 091) in Bulle (2005)']
});
uebZug('gfm-wagen', {
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['Preserved are passenger coach B 235 of 1903 and driving trailer CFt4 273 at GFM Historique, as well as the covered freight wagons K 671 and K 672 at the Blonay–Chamby museum railway. The sources used do not name the manufacturers.'] }, { titel: 'Service and technology', p: ['The wagons ran on the metre-gauge network of the CEG and the GFM. Today they are in the care of museum associations.'] }, { titel: 'Facilities and accessibility', liste: ['Passenger coach B 235 of 1903', 'Driving trailer CFt4 273 with luggage compartment (letter F)', 'Covered freight wagons K 671 and K 672'] }],
  name: 'Historic wagons',
  typ: 'Preserved GFM coaches and wagons',
  text: ['Besides the powered vehicles, GFM wagons are also preserved. GFM Historique keeps coach B 235 of 1903 and driving trailer CFt4 273.', 'The covered wagons K 671 and K 672 are at the Blonay–Chamby museum railway.'],
  kennzahlen: [['B 235', 'coach from 1903'], ['CFt4 273', 'driving trailer'], ['K 671, K 672', 'freight wagons'], ['metre gauge', 'gauge']],
  daten: { 'Bauart': 'coaches, driving trailers and freight wagons', 'Betreiber': 'CEG/GFM, today museum associations', 'Erhalten': 'GFM Historique; Blonay–Chamby' },
  bilder: ['Covered wagon K 671 in Vevey (2016)', 'Wagon K 671 at the Broc chocolate factory']
});
