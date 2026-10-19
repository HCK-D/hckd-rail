/* English – service vehicles */
uebDict({
  'Lösch- und Rettungszug': 'Fire-fighting and rescue train',
  'Normalspur, 1435 mm': 'standard gauge, 1435 mm',
  'Tanklöschwagen + Gerätefahrzeug + Rettungsfahrzeug': 'fire-fighting tank wagon + equipment vehicle + rescue vehicle',
  'Eisenbahndrehkran': 'slewing railway crane',
  'nein': 'no',
  'aktiv': 'active'
});

uebZug('lrz-18', {
  beiname: 'Fire-fighting and rescue train',
  typ: 'Fire-fighting and rescue train of the 2018 generation',
  text: ['The LRZ 18 generation comprises six modern, self-propelled fire-fighting and rescue trains. SBB ordered them in two lots of three sets each; all had been delivered by the end of 2018.', 'Depending on the base, the formation consists of a fire-fighting tank wagon, an equipment vehicle and one or two rescue vehicles.'],
  kennzahlen: [['6', 'train sets'], ['2018', 'delivery completed'], ['6 × 390 kW', 'drive of the four-car version'], ['100 km/h', 'top speed']],
  daten: { 'Hersteller': 'Windhoff / Dräger (Vogt extinguishing system)', 'Ausführungen': '3 or 4 cars', 'Länge': '83.22 m (four cars)', 'Gewicht': 'around 326 t (four cars)', 'Leistung': '6 × 390 kW (four cars)', 'Pumpenleistung': 'up to 6000 l/min at 10 bar', 'Rettungskapazität': 'up to 60 people per rescue vehicle', 'Schleppleistung': 'up to 1600 t in the tunnel', 'Autonomer Betrieb': 'approx. 4–5 hours', 'Anzahl': '6 sets (2 lots of 3)' },
  specNote: 'Length, mass and power apply to the four-car LRZ 18; three-car trains are correspondingly shorter and lighter.',
  abschnitte: [
    { titel: 'Procurement in two lots', p: ['After the first order of three trains for Geneva, Melide and Brig, SBB exercised an option in 2016 for three more sets for Zurich, Winterthur and Bern.', 'The generation thus comprises six trains; delivery was completed at the end of 2018.'] },
    { titel: 'Tunnel rescue and fire-fighting', p: ['An independent breathing-air supply serves the driver’s cabs and rescue compartments. Each rescue vehicle holds up to about 60 people in its protected compartment; the train can tow up to 1600 tonnes in a tunnel.', 'The fire-fighting equipment provides 45,000 litres of water and pumps of up to 6000 litres per minute.'] }
  ],
  bilder: ['LRZ 18 «Bern» near Einigen', 'LRZ 18 in Geneva', 'Rescue vehicle of the LRZ 18 in Geneva', 'LRZ 18 in Geneva, side view', 'Auxiliary equipment vehicle Xtmas 99 85 9177 015 at Innotrans 2018']
});

uebZug('lrz-14', {
  beiname: 'Fire-fighting and rescue train',
  typ: 'Four-car fire-fighting and rescue train for long tunnels',
  text: ['The LRZ 14 is a more powerful four-car development for long railway tunnels. It has a second rescue vehicle.', 'Two sets were procured as part of the expansion of the intervention concept for the Gotthard axis.'],
  kennzahlen: [['2', 'train sets'], ['2014–2016', 'construction and commissioning'], ['6 × 390 kW', 'installed drive power'], ['100 km/h', 'top speed']],
  daten: { 'Formation': 'fire-fighting tank wagon + equipment vehicle + 2 rescue vehicles', 'Rettungsfahrzeuge': '22.06 m / 78 t each', 'Gewicht': 'around 326 t', 'Atemluft': 'around 1.98 million l', 'Anhängelast': '940 t on 27 ‰', 'Anzahl': '2 sets', 'Einsatz': 'Gotthard axis and tunnel network' },
  specNote: 'The designation LRZ 14 names the generation. Commissioning was staggered up to the opening of the Gotthard Base Tunnel.',
  abschnitte: [
    { titel: 'Procurement', p: ['The two sets were procured from 2012 and made ready for service before the Gotthard Base Tunnel opened.'] },
    { titel: 'Two rescue units', p: ['Each rescue vehicle has room for about 60 people, or 40 people and six stretchers. Pressurised compartments, airlocks and medical connections allow evacuations from smoke-filled tunnel sections.'] },
    { titel: 'Performance profile', p: ['With its second rescue vehicle, the four-car formation offers more rescue capacity and more breathing air than earlier generations. Several powered vehicles provide high tractive effort and redundancy.'] }
  ],
  bilder: ['New LRZ 14 at the Erstfeld maintenance and intervention centre', 'LRZ 14 «Uri» at Erstfeld station', 'LRZ 14 «Uri» of the Erstfeld company fire brigade', 'LRZ 14 in Erstfeld']
});

uebZug('lrz-08', {
  beiname: 'Fire-fighting and rescue train',
  typ: 'Fire-fighting and rescue train of the 2008 generation',
  text: ['SBB procured eight fire-fighting and rescue trains of the LRZ 08 generation, each made up of a fire-fighting tank wagon, an equipment vehicle and a rescue vehicle.', 'They were designed for rapid interventions on the open network and in tunnels.'],
  kennzahlen: [['8', 'train sets'], ['2008–2010', 'delivery'], ['4 × 390 kW', 'installed drive power'], ['100 km/h', 'top speed']],
  daten: { 'Gewicht': 'around 248 t', 'Atemluft': 'around 1.44 million l', 'Rettungsplätze': 'approx. 60, or 40 + 9 stretchers', 'Anhängelast': '730 t on 27 ‰', 'Anzahl': '8 sets', 'In Betrieb seit': '2008–2010 (delivery)' },
  abschnitte: [
    { titel: 'Procurement', p: ['The generation was ordered in 2006 and delivered from 2008 to 2010. Eight sets extended the SBB intervention network.'] },
    { titel: 'Function', p: ['Tank wagon, equipment vehicle and rescue vehicle work as one unit. Two 390 kW power packs each in the equipment and rescue vehicles drive the train.', 'The pressurised rescue compartment works independently of the outside air and allows people to be evacuated from smoke-filled areas.'] }
  ],
  bilder: ['LRZ 08 (TES 08 Olten) in Renens', 'Rescue vehicle XTmas 99 85 9174 004 «Lausanne» in Bern', 'XTmas 99 85 9174 008 «Olten» in Lausanne', 'LRZ 08 in Winterthur']
});

uebZug('lrz-04', {
  beiname: 'Fire-fighting and rescue train',
  typ: 'Fire-fighting and rescue train of the 2004 generation',
  text: ['The LRZ 04 was the first newer generation of the SBB fire-fighting and rescue train and marked the change from locomotive-hauled to self-propelled trains.', 'The single set combines extinguishing agents, a rescue compartment and its own drive for missions on the line and in tunnels.'],
  kennzahlen: [['1', 'set of this generation'], ['2004', 'entry into service'], ['4 × 315 kW', 'installed drive power'], ['100 km/h', 'top speed']],
  daten: { 'Gewicht': 'around 210 t', 'Atemluft': 'around 1.44 million l', 'Anzahl': '1 set', 'Einsatz': 'fire-fighting, rescue, recovery' },
  specNote: 'The number and year refer to the separate LRZ 04 generation. Later generations are counted separately.',
  abschnitte: [
    { titel: 'Design', p: ['The vehicles carry water, foam, rescue and recovery equipment. The equipment and rescue vehicles each have two power packs, so the train needs no separate auxiliary locomotive.', 'The rescue car has a protected interior supplied with breathing air for evacuations from smoke-filled tunnels.'] },
    { titel: 'Service', p: ['The train responds to incidents on the rail network, especially in longer tunnels and on sections that are hard to reach.'] }
  ],
  bilder: ['LRZ 04 in Brig, 2016', 'LRZ 04 in Hohtenn', 'LRZ 04 at Hohtenn station']
});

uebZug('xrotm', {
  name: 'Rotary snow ploughs',
  typ: 'Special vehicles for snow clearing',
  text: ['SBB Infrastructure uses several types of self-propelled rotary snow ploughs.', 'The operating regulations distinguish four series that take on different tasks depending on the amount of snow, the line and the location.'],
  kennzahlen: [['4', 'series in the regulations'], ['17', 'vehicles by number ranges'], ['60–80 km/h', 'top speed of the large types'], ['95–115', 'operating numbers']],
  daten: { 'Xrotm 4/4': 'No. 95–96, 2 vehicles, 80 km/h', 'Xrotm 2/3': 'No. 97, 1 vehicle, 60 km/h', 'XTm': 'No. 102–109, 8 vehicles, 45 km/h (100 km/h hauled)', 'Xrotm ex Tm 232': 'No. 110–115, 6 vehicles, 80 km/h (90 km/h hauled)', 'Anzahl': '17 by number ranges', 'Einsatz': 'clearing snow and drifts' },
  specNote: 'The number is derived from the number ranges published in the SBB operating regulations and is not a separately confirmed fleet figure.',
  abschnitte: [
    { titel: 'Use', p: ['The large Xrotm 95, 96 and 97 are used during heavy snowfall, including on the Gotthard panorama line.', 'The smaller Xrotm 110–115 are suited to stations and less busy lines.'] },
    { titel: 'Operation', p: ['Rotary snow ploughs are special vehicles with rotating clearing units. Depending on the series, their own drive, clearing capacity, line speed and permitted hauled speed differ.'] }
  ],
  bilder: ['Xrotm rotary snow plough in Erstfeld', 'Xrotm rotary snow plough No. 95 in Erstfeld', 'Xrotm 95 at Erstfeld station', 'Vehicle number of Xrotm 95', 'Xrotm 4/4 95 in Erstfeld']
});

uebZug('diagnose', {
  name: 'Diagnostic vehicle',
  typ: 'Mermec Xtmass self-propelled diagnostic vehicle',
  text: ['The self-propelled diagnostic vehicle Xtmass ROGER 1000 checks the condition of the railway infrastructure at high speed.', 'Measuring systems record track, overhead line and other installations without unnecessarily interrupting regular services.'],
  kennzahlen: [['160 km/h', 'top speed'], ['672 kW', 'maximum power'], ['64 t', 'empty weight'], ['23.9 m', 'vehicle length']],
  daten: { 'Fahrzeugart': 'self-propelled diagnostic vehicle', 'Gewicht': '64 t empty, max. 66 t', 'Einsatz': 'track and overhead line measurement' },
  abschnitte: [
    { titel: 'Measuring tasks', p: ['ROGER 1000 combines several measuring and diagnostic systems in one vehicle. Its high speed allows checks on main lines with little impact on the timetable.'] },
    { titel: 'Use beyond Switzerland', p: ['Mermec documents a measuring run of the SBB vehicle on a German high-speed line. This shows its suitability for test runs on high-performance networks.'] }
  ],
  bilder: ['MerMec measuring railcar XTmass 99 85 9160 001 in Lausanne', 'ROGER 1000 (XTmass 99 85 9160 001) in Lausanne, 2009']
});

uebZug('kirow-krc-1100', {
  typ: 'Heavy slewing railway crane for recovery and construction',
  text: ['The SBB crane of the Kirow 1100 class belongs to the new generation of large cranes.', 'Together with the Multi Tasker 1200 it replaced the two older KRC 800.'],
  kennzahlen: [['1', 'SBB crane of this class'], ['2019', 'replacement programme completed'], ['125 t', 'maximum lifting capacity'], ['16°', 'slewing with the adjacent track open']],
  daten: { 'Bauart': 'slewing railway crane', 'Schwenkwinkel': 'up to 16° with the adjacent track open', 'Eigenmasse': '112 t transport weight (manufacturer’s data sheet)', 'Transport': 'with protection wagon, counterweight placed on it', 'Netz': 'SBB standard-gauge network', 'Vorgänger': 'one of the two KRC 800', 'In Betrieb seit': '2019 (replacement programme 2016–2019)', 'Einsatz': 'recovery, temporary bridges, heavy construction' },
  specNote: '125 t is the maximum lifting capacity, not the crane’s mass. The 112 t transport weight comes from Kirow’s KRC 1100 technical data sheet, not from an SBB document.',
  abschnitte: [
    { titel: 'Procurement', p: ['SBB chose the KRC 1100 in December 2017. Kirow describes the replacement of the two KRC 800 by two new large cranes between 2016 and 2019; one of them belongs to the 1100 class.'] },
    { titel: 'Working next to live tracks', p: ['According to the manufacturer, the bevelled counterweight allows slewing up to 16 degrees while keeping the clearance gauge of the adjacent track free. In transport position the counterweight rests on a protection wagon.'] },
    { titel: 'About the capacity figure', p: ['The maximum lifting capacity only applies under defined conditions. The permitted load decreases with the outreach and depends on outriggers and track geometry.'] }
  ]
});

uebZug('kirow-800', {
  typ: 'Historic railway cranes of the 1990s',
  text: ['In 1996 SBB received two Kirow cranes of the KRC 800 class.', 'They were used for heavy recovery and construction work and were replaced by new large cranes between 2016 and 2019.'],
  kennzahlen: [['2', 'cranes delivered'], ['1996', 'delivery'], ['203 t', 'mass of the crane set'], ['80 km/h', 'top speed']],
  daten: { 'Formation': 'crane with protection and crew wagons', 'Gewicht': 'around 203 t (whole set)', 'Länge': 'around 48 m (whole set)', 'Nachfolger': 'KRC 1100 and Multi Tasker 1200' },
  abschnitte: [
    { titel: 'Use', p: ['The two cranes were used for heavy lifting on construction projects and after incidents. Their lifting capacity depended on outreach, outriggers and track geometry.', 'For transfers they ran as a freight train consist with protection and crew wagons.'] },
    { titel: 'Replacement', p: ['Kirow documents the replacement of the two cranes delivered in 1996 by a Multi Tasker 1200 and a crane of the 1100 class between 2016 and 2019.'] }
  ]
});

uebZug('kirow-250', {
  typ: 'Slewing railway crane for medium lifting work',
  text: ['The Kirow KRC 250 is a slewing railway crane for construction and maintenance work.', 'At least one SBB crane of this type is documented by 2005 at the latest; an exact total number and year of procurement are not reliably documented in public sources.'],
  kennzahlen: [['169 t', 'mass of the crane set'], ['47 m', 'length of the set'], ['80 km/h', 'top speed'], ['2005', 'in the SBB fleet by then at the latest']],
  daten: { 'Formation': 'crane with protection or counterweight wagon and crew wagon', 'Gewicht': 'around 169 t (whole set)', 'Länge': 'around 47 m (whole set)', 'Antrieb': 'hydraulic crane drive, no traction drive', 'Tragfähigkeit': 'depends on outreach', 'Anzahl': 'at least 1, total not documented', 'Im SBB-Bestand': 'by 2005 at the latest (photo evidence)' },
  specNote: 'Number and year are deliberately given only as a minimum: an SBB KRC 250 is documented in a photo in 2005. Crane mass and lifting capacity are different values.',
  abschnitte: [
    { titel: 'Role', p: ['The KRC 250 lifts track panels, switch components and other heavy loads. Protection and counterweight wagons are part of the operating set; the crew wagon provides work and rest rooms.'] },
    { titel: 'Available data', p: ['The SBB train type catalogue documents design, formation and running data. It does not show a current fleet figure or year of procurement.', 'A photo shows at least one SBB KRC 250 in 2005. Public sources currently allow nothing more to be said with certainty.'] }
  ]
});

uebZug('kirow-krc-100', {
  typ: 'Compact slewing railway crane for construction and recovery',
  text: ['The Kirow KRC 100 is a compact SBB slewing railway crane. Twelve vehicles were delivered in 2006 and 2007.', 'Its small tail radius and fixed counterweight allow work with little effect on adjacent tracks.'],
  kennzahlen: [['12', 'cranes delivered'], ['2006–2007', 'delivery'], ['70 t', 'crane service weight'], ['120 km/h', 'permitted when hauled']],
  daten: { 'Länge': '11.0 m over buffers', 'Gewicht': '70 t in service', 'Tragfähigkeit': 'depends on outreach, maximum load not documented', 'Höchstgeschwindigkeit': '120 km/h hauled', 'Gegengewicht': 'fixed', 'In Betrieb seit': '2006–2007 (Dec. 2006 to Oct. 2007)', 'Einsatz': 'track construction, mast erection, recovery' },
  specNote: 'The lifting capacity of railway cranes depends heavily on outreach, outriggers and track geometry.',
  abschnitte: [
    { titel: 'Procurement', p: ['Kirow delivered twelve KRC 100 between December 2006 and October 2007. The series was procured for decentralised construction and recovery work.'] },
    { titel: 'Use', p: ['The slewing superstructure allows work to the side of and along the track, for example erecting masts or steel protection elements.', 'For transfers the crane runs as a work train with protection and support wagons; it needs no drive of its own.'] }
  ]
});

uebZug('bendini', {
  typ: 'Compact crane wagon of the 30 tm class',
  text: ['The Bendini is a compact crane wagon for medium and lighter lifting tasks in railway infrastructure maintenance.', 'The SBB train type catalogue lists it as an active, unpowered XTms crane wagon.'],
  kennzahlen: [['30 tm', 'crane class'], ['100 km/h', 'transport speed'], ['38 t', 'vehicle mass'], ['8.1 m', 'vehicle length']],
  daten: { 'Basistyp': 'construction machine', 'Fahrzeugart': 'freight wagon', 'Anzahl': 'several, total not confirmed', 'Fahrzeugnummern': 'examples from XTm 91551 to 91596', 'In Betrieb seit': '1980s (underframes from 1984, 1985 and 1989 documented)', 'Einsatz': 'maintenance and installation' },
  specNote: 'The 30 tm figure is the crane class used in the SBB catalogue; it is not the same as the 38 t vehicle mass. Number and year are deliberately given only as a minimum or period.',
  abschnitte: [
    { titel: 'Role in the crane fleet', p: ['At only 8.1 metres long, the Bendini is much more compact than the heavy Kirow sets.', 'It suits local installation and lifting work where no large heavy crane is needed.'] },
    { titel: 'Planned replacement', p: ['In SBB Infrastructure’s procurement planning, a project for medium-load cranes explicitly appears as a replacement for the Bendini and other older cranes.', 'The 2026 train type catalogue nevertheless still lists the Bendini as active.'] }
  ]
});

uebZug('fahrleitung', {
  name: 'Overhead line vehicles',
  typ: 'Service vehicles for building and maintaining the overhead line',
  text: ['Overhead line vehicles bring staff, tools and material directly to the overhead line.', 'SBB Infrastructure uses several series and versions for this; publicly named examples are Hubi, Krani and Combi 4A.'],
  kennzahlen: [['several', 'series and versions'], ['Hubi', 'vehicle example'], ['Krani', 'vehicle example'], ['Combi 4A', 'vehicle example']],
  daten: { 'Fahrzeuggruppe': 'overhead line service vehicles', 'Arbeitsmittel': 'lifting work platform', 'Weitere Ausrüstung': 'crane and material platform', 'Antrieb': 'depends on series', 'Höchstgeschwindigkeit': 'depends on series', 'Arbeitsort': 'overhead line and supports', 'Anzahl': 'no total published', 'Einsatz': 'installation, inspection and repair' },
  specNote: '«Overhead line vehicle» is not a single class. Technical values and years of construction must be assigned to a specific type or vehicle number.',
  abschnitte: [
    { titel: 'Tasks', p: ['The vehicles support inspection, fault repair and renewal of the overhead line. Work platforms give access to the contact wire; cranes lift masts, cantilevers and material.'] },
    { titel: 'Scope', p: ['This page describes the vehicle group. A technical portrait of a single vehicle needs the exact series designation and vehicle number, because power, mass, length and year of construction vary widely.'] }
  ],
  bilder: ['Crane wagon «Krani 3» with lifting platform for overhead line work', 'Installation car of the Combi XTmass 99 85 9236 051 near Bad Ragaz', 'Combi overhead line construction train between Bad Ragaz and Sargans, 2019']
});
