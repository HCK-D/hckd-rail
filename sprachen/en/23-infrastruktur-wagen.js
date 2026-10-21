/* English – SBB Infrastructure: wagons */
uebDict({
  'aktiv (Fahrtypenkatalog 2026)': 'active (2026 train type catalogue)',
  'Güterwagen': 'freight wagon',
  '4, auf 2 Drehgestellen': '4, on 2 bogies',
  'Schwerkraft': 'by gravity',
  'Ballastieren': 'ballasting',
  'Schottertransport': 'ballast transport',
  'Bestandsangabe 2022, kein eigener Fahrtyp 2026': '2022 data, no separate train type in 2026',
  'Bestandstyp, kein eigener Fahrtyp 2026': 'existing type, no separate train type in 2026',
  'Generator an Bord': 'on-board generator',
  'im Arbeitsverband': 'within a work consist',
  'gedeckter Bauzugwagen': 'covered engineering train wagon',
  'seitliche Türen': 'side doors',
  'Schottertransport, Ballastieren': 'ballast transport, ballasting',
  'Werkzeug und Werkstatt, Unterstützung der Mannschaft': 'tools and workshop, crew support',
  'Güterzug, Basistyp Baumaschine': 'freight train, base type construction machine',
  'Güterwagen, Basistyp Baumaschine': 'freight wagon, base type construction machine',
  'SBB Infrastruktur': 'SBB Infrastructure'
});

uebZug('fans-u', {
  typ: 'Four-axle ballast wagon with side discharge',
  text: ['The Fans-u is a four-axle special wagon for ballast, spoil and other track materials.', 'Its two hoppers can be emptied to the side; the hydraulic working equipment is powered externally.'],
  kennzahlen: [['100 km/h', 'top speed'], ['12.74 m', 'length'], ['29.0 t', 'empty weight'], ['80 t', 'max. gross weight']],
  daten: { 'Gewicht': '29.0 t empty, 80 t loaded', 'Nutzlast': 'up to approx. 51.0 t (calculated)', 'Behältervolumen': 'approx. 40 m³', 'Entladung': 'to the side, hydraulic', 'Arbeitsenergie': 'external supply', 'Einsatz': 'ballast and spoil' },
  specNote: 'The payload is derived from the current SBB gross and empty weights; older training documents give different values.',
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The SBB documents used do not name the manufacturer or the number of wagons. The 2026 train type catalogue lists the wagon as active train type 5106.'] }, { titel: 'Service and technology', p: ['The wagon removes spoil and old material and supplies construction sites with bulk material. Side discharge allows targeted unloading next to the track.'] }, { titel: 'Facilities and accessibility', liste: ['Two hoppers of about 40 m³ in total, emptied hydraulically to the side', 'Power for the hydraulics supplied from outside', 'No traction of its own, up to 100 km/h in a train'], p: ['The Fans-u is a work wagon without a passenger compartment.'] }, { titel: 'Operation and safety', p: ['During unloading the wagon must be secured against tipping and the work area kept clear. Hydraulics, power supply and locks must be checked before every work run according to local rules.'] }]
});

uebZug('xans-37', {
  typ: 'Four-axle ballast wagon with gravity discharge',
  text: ['The Xans 37 is a four-axle ballast wagon for transport and metered ballasting.', 'Unloading is by gravity through outlet gates close to the ground.'],
  kennzahlen: [['100 km/h', 'top speed'], ['14.0 m', 'length'], ['23.9 t', 'empty weight'], ['88 t', 'max. gross weight']],
  daten: { 'Gewicht': '23.9 t empty, 88 t loaded', 'Nutzlast': 'up to approx. 64.1 t (calculated)', 'Volumen': 'approx. 45 m³', 'Entladung': 'by gravity, metered ballasting' },
  specNote: 'The train type catalogue gives 87.5 t for running dynamics and rounds the permitted gross weight to 88 t.',
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The SBB documents used do not name the manufacturer or the number of wagons. The 2026 train type catalogue lists the wagon as active train type 5107.'] }, { titel: 'Service and technology', p: ['The Xans 37 carries new ballast and spreads it on site through its outlets. This makes it suitable for new construction, renewal and topping up ballast.'] }, { titel: 'Facilities and accessibility', liste: ['About 45 m³ volume', 'Low-level gates for metered ballasting by gravity', 'No traction of its own, up to 100 km/h in a train'], p: ['The Xans 37 is a work wagon without a passenger compartment.'] }, { titel: 'Loading and shunting', p: ['Before train or shunting movements, all gates must be fully closed and locked. The training document requires running either empty or fully loaded and warns against partial loads.'] }]
});

uebZug('xans-74', {
  typ: 'Four-axle wagon for ballast and protective-layer material',
  text: ['The Xans 74 is a four-axle bulk wagon for ballast and formation protection layer (PSS) material.', 'Depending on equipment, a conveyor belt helps to place the material offset to the side.'],
  kennzahlen: [['100 km/h', 'top speed'], ['15.0 m', 'length'], ['26.0 t', 'empty weight'], ['80 t', 'max. gross weight']],
  daten: { 'Gewicht': '26.0 t empty, 80 t loaded', 'Nutzlast': 'up to approx. 54.0 t (calculated)', 'Volumen': 'approx. 40 m³', 'Entladung': 'by gravity', 'Förderband': 'side placement up to approx. 4.5 m from the track centre', 'Abdeckung': 'possible in two parts', 'Einsatz': 'ballast and PSS' },
  specNote: 'The training presentation gives other masses for older versions; the values of the 2026 SBB train type catalogue apply here.',
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The SBB documents used do not name the manufacturer or the number of wagons. The 2026 train type catalogue lists the wagon as active train type 5109.'] }, { titel: 'Service and technology', p: ['Besides normal ballast the wagon can carry moisture-sensitive PSS material. Covers help to keep the required moisture content during transport.'] }, { titel: 'Facilities and accessibility', liste: ['About 40 m³ volume, unloading by gravity', 'Depending on equipment, a conveyor belt for placing material up to about 4.5 m from the track axis', 'Two-part cover possible', 'No traction of its own, up to 100 km/h in a train'], p: ['The Xans 74 is a work wagon without a passenger compartment.'] }, { titel: 'Conveyor belt operation', p: ['Belt operation needs an external power supply or a generator unit. Before switching on, the swing area, the adjacent track and dust must be checked.'] }],
  bilder: ['Xans 74 of SBB Infrastructure, 2021', 'Central hopper of the Xans 74 above the conveyor belt', 'Swing-out conveyor belt under the Xans 74']
});

uebZug('xas-53', {
  typ: 'Container wagon with side running rails',
  text: ['The Xas 53 carries interchangeable containers for ballast, screening waste and PSS material.', 'Side running rails allow the containers to be moved together with track machines.'],
  kennzahlen: [['100 km/h', 'top speed'], ['19.9 m', 'length'], ['31.0 t', 'empty weight'], ['7', 'containers per wagon']],
  daten: { 'Fahrzeugart': 'container wagon', 'Gewicht': '31.0 t empty, 78 t loaded', 'Nutzlast': 'no official figure (78 t − 31 t gives approx. 47 t)', 'Behälter': '7 containers of approx. 4 m³ each', 'Ausrüstung': 'side running rails, covers possible', 'Einsatz': 'screening and engineering trains' },
  specNote: 'The train type catalogue gives 77.6 t for running dynamics. Fleet planning includes replacing the Xans/Xas 52/53 family.',
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The SBB documents used do not name the manufacturer or the number of wagons. The 2026 train type catalogue lists the wagon as active train type 5113.'] }, { titel: 'Service and technology', p: ['The containers can be moved, filled and emptied at a suitable point within a work chain. This speeds up the continuous removal of material during ballast cleaning and track renewal.'] }, { titel: 'Facilities and accessibility', liste: ['Seven skips of about 4 m³ each', 'Side running rails for moving the skips', 'Tarpaulins possible for moisture-sensitive material', 'No traction of its own, up to 100 km/h in a train'], p: ['The Xas 53 is a work wagon without a passenger compartment.'] }, { titel: 'Securing the load', p: ['Keep hands and feet away from the running rails. For moisture-sensitive PSS the containers can be covered; before every run, containers and covers must be properly secured.'] }],
  bilder: ['Xas 80 85 98 53 420-0 of SBB Infrastructure in Effretikon']
});

uebZug('xas-62', {
  typ: 'Four-axle tipping wagon for old ballast, without conveyor',
  text: ['The Xas 62 takes old ballast, spoil, gravel and sand.', 'The body is tipped electro-hydraulically so that the material falls out by gravity.'],
  kennzahlen: [['100 km/h', 'top speed'], ['15.04 m', 'length'], ['30.0 t', 'empty weight'], ['80 t', 'max. gross weight']],
  daten: { 'Ausführung': 'without conveyor belt', 'Gewicht': '30.0 t empty, 80 t loaded', 'Nutzlast': 'up to approx. 50.0 t (calculated)', 'Volumen': 'approx. 51 m³', 'Entladung': 'tipping body, electro-hydraulic', 'Einsatz': 'old ballast and spoil' },
  specNote: 'The current train type clearly distinguishes this version from the Xas 62 with conveyor belt.',
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The SBB documents used do not name the manufacturer or the number of wagons. The 2026 train type catalogue lists the wagon as active train type 5111.'] }, { titel: 'Service and technology', p: ['The Xas 62 is mainly used to dispose of material from track renewal and substructure repair. Tipping speeds up unloading at suitable tipping sites.'] }, { titel: 'Facilities and accessibility', liste: ['Electro-hydraulic tipping body of about 51 m³', 'Version without conveyor belt', 'No traction of its own, up to 100 km/h in a train'], p: ['The Xas 62 is a work wagon without a passenger compartment.'] }, { titel: 'Working', p: ['While tipping, stability, the overhead line, the adjacent track and side clearance must be watched. Climbing onto or staying on the wagon during movements is forbidden.'] }]
});

uebZug('xas-62-fb', {
  beiname: 'with conveyor belt',
  typ: 'Tipping wagon for old ballast with additional conveyor belt',
  text: ['The conveyor version of the Xas 62 combines the tipping body with a belt for controlled removal of material.', 'It is listed as a separate active train type.'],
  kennzahlen: [['100 km/h', 'top speed'], ['15.04 m', 'length'], ['30.5 t', 'empty weight'], ['80 t', 'max. gross weight']],
  daten: { 'Ausführung': 'with conveyor belt (FB)', 'Gewicht': '30.5 t empty, 80 t loaded', 'Nutzlast': 'up to approx. 49.5 t (calculated)', 'Entladung': 'tipping body and belt', 'Arbeitsantrieb': 'electro-hydraulic', 'Einsatz': 'removal of material' },
  specNote: '«FB» stands for the version with conveyor belt (Förderband); compared with the wagon without belt, the empty weight increases by about 0.5 t.',
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The SBB documents used do not name the manufacturer or the number of wagons. The 2026 train type catalogue lists the conveyor-belt version as its own active train type 5075.'] }, { titel: 'Service and technology', p: ['The conveyor belt extends simple tipping. Material can be passed on to following units in a more controlled way or placed to the side at a defined point.'] }, { titel: 'Facilities and accessibility', liste: ['Tipping body and conveyor belt', 'Electro-hydraulic work drive', 'No traction of its own, up to 100 km/h in a train'], p: ['The Xas 62 with conveyor belt is a work wagon without a passenger compartment.'] }, { titel: 'Safety zone', p: ['Belt, tipping body and hydraulic equipment may only be operated in the approved work area. Crushing points, fall hazards and the proximity of the overhead line need special attention.'] }]
});

uebZug('xas-73', {
  typ: 'Ballast wagon for first and second tamping',
  text: ['The Xas 73 is a four-axle Talbot ballast wagon with gravity discharge.', 'It is used especially during the first and second tamping passes to spread ballast precisely.'],
  kennzahlen: [['100 km/h', 'top speed'], ['15.04 m', 'length'], ['22.5 t', 'empty weight'], ['200', 'wagons planned for life extension']],
  daten: { 'Bauart': 'Talbot ballast wagon', 'Gewicht': '22.5 t empty, 80 t loaded', 'Nutzlast': 'up to approx. 57.5 t (calculated)', 'Volumen': 'approx. 31 m³', 'Behälter': '4 half compartments', 'Bedienung': '4 handwheels' },
  specNote: 'According to the 2025 fleet presentation, SBB plans to extend the life of 200 four-axle Xas 73 Talbot wagons.',
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The wagon is a Talbot-type ballast wagon. The SBB documents used do not give the number of wagons. The 2026 train type catalogue lists it as active train type 5110.'] }, { titel: 'Service and technology', p: ['Four handwheels control the individual outlets. This allows ballast to be spread section by section, matching its position in the track.'] }, { titel: 'Facilities and accessibility', liste: ['Four half-chambers totalling about 31 m³', 'Four handwheels for the individual outlets', 'No traction of its own, up to 100 km/h in a train'], p: ['The Xas 73 is a work wagon without a passenger compartment.'] }, { titel: 'Fleet outlook', p: ['The type remains active in the 2026 train type catalogue. A refit is planned for the large existing fleet so that the wagons remain available for further construction periods.'] }]
});

uebZug('xns-39', {
  bilder: ['Xns 39 (Fccnpps) 21 85 6439 038-1 in a construction train', 'Several Xns 39 in a construction train at night'],
  typ: 'Two-axle ballast wagon with manual operation',
  text: ['The Xns 39 is a compact two-axle ballast wagon.', 'Its outlet gates are operated by hand with levers and allow ballasting directly in the track.'],
  kennzahlen: [['100 km/h', 'top speed'], ['10.0 m', 'length'], ['13.1 t', 'empty weight'], ['45 t', 'max. gross weight']],
  daten: { 'Gewicht': '13.1 t empty, 45 t loaded', 'Nutzlast': 'up to approx. 31.9 t (calculated)', 'Volumen': 'approx. 22 m³', 'Bedienung': 'manual gates, operated by levers', 'Einsatz': 'ballasting' },
  specNote: 'The French slide once reads «Xas 39»; the table of contents and the SBB train type catalogue confirm the designation Xns 39.',
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The SBB documents used do not name the manufacturer or the number of wagons. The 2026 train type catalogue lists the wagon as active train type 5108.'] }, { titel: 'Service and technology', p: ['With two axles and a length of ten metres, the Xns 39 suits smaller quantities of ballast and short work sections. The simple mechanical design needs no additional power source.'] }, { titel: 'Facilities and accessibility', liste: ['About 22 m³ volume', 'Outlet gates operated by hand via levers', 'No additional power source needed', 'No traction of its own, up to 100 km/h in a train'], p: ['The Xns 39 is a work wagon without a passenger compartment.'] }, { titel: 'Safe transport', p: ['Before every run the manually operated gates must be closed and secured. During unloading nobody may be in the discharge or danger area.'] }]
});

uebZug('xns-60', {
  typ: 'Two-axle tipping wagon for ballast and screening waste',
  text: ['The Xns 60 is a two-axle tipping wagon for ballast, screening waste and similar bulk material.', 'Unloading is by tipping and gravity.'],
  kennzahlen: [['100 km/h', 'top speed'], ['10.94 m', 'length'], ['17.0 t', 'empty weight'], ['42 t', 'max. gross weight']],
  daten: { 'Fahrzeugart': 'freight wagon with tipping container', 'Gewicht': '17.0 t empty, 42 t loaded', 'Nutzlast': 'up to approx. 25.0 t (calculated)', 'Volumen': 'approx. 17.5 m³', 'Entladung': 'tipping, by gravity', 'Einsatz': 'ballast and screening waste' },
  specNote: 'The presentation gives a payload of 17 t; the current SBB masses give up to about 25 t by calculation.',
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The SBB documents used do not name the manufacturer or the number of wagons. The 2026 train type catalogue lists the wagon as active train type 5112.'] }, { titel: 'Service and technology', p: ['The compact wagon can be loaded with excavators and suits smaller quantities of material. Simple gravity discharge reduces the need for additional conveying equipment.'] }, { titel: 'Facilities and accessibility', liste: ['Tipping container of about 17.5 m³', 'Unloading by tipping and gravity', 'No traction of its own, up to 100 km/h in a train'], p: ['The Xns 60 is a work wagon without a passenger compartment.'] }, { titel: 'Tipping', p: ['Before tipping, the ground, side clearance and position of the load must be checked. While the wagon is moving, nobody may stay on the body.'] }]
});

uebZug('xs-72', {
  typ: 'Older two-axle ballast wagon with handwheels',
  text: ['The Xs 72 is a two-axle ballast wagon with outlet gates operated by handwheels.', 'It appears in the 2022 SBB training document, but no longer as a separate active type in the 2026 train type catalogue.'],
  kennzahlen: [['10.24 m', 'length'], ['13.0 t', 'empty weight'], ['25.0 t', 'payload according to the slide'], ['15 m³', 'volume']],
  daten: { 'Gewicht': '13.0 t empty, approx. 38 t loaded (calculated)', 'Nutzlast': '25.0 t according to the slide', 'Bedienung': 'handwheels' },
  specNote: 'As there is no separate train type in 2026, the technical values deliberately come from the 2022 training slide.',
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The SBB documents used do not name the manufacturer or the number of wagons. The wagon appears in the SBB training document of 2022, but no longer as its own train type in the 2026 catalogue.'] }, { titel: 'Service and technology', p: ['The outlet gates are opened and closed with handwheels. This allows ballast to be spread without an external power source.'] }, { titel: 'Facilities and accessibility', liste: ['15 m³ volume', 'Outlet flaps with handwheels', 'No traction of its own'], p: ['The Xs 72 is a work wagon without a passenger compartment.'] }, { titel: 'Classification', p: ['Its absence from the current catalogue does not necessarily mean that no single wagon exists any more. However, the type is no longer listed as an active train type for path ordering.'] }]
});

uebZug('silad-1-3', {
  typ: 'Rail loading unit with material wagon',
  text: ['SILAD 1–3 are active SBB rail loading units for transporting and handling long rails.', 'The official train type covers the loading unit and material wagon; further transport wagons are added in the work train.'],
  kennzahlen: [['90 km/h', 'top speed'], ['44.0 m', 'train type length'], ['80 t', 'empty and running-dynamics weight'], ['120 m', 'max. rail length']],
  daten: { 'Formation': 'loading unit and material wagon, multi-part', 'Transportwagen': 'including Xas 60', 'Länge': '44.0 m (train type)', 'Gewicht': '80 t (train type)', 'Schienenlänge': 'up to 120 m', 'Kapazität': 'up to 30 rails according to the slide' },
  specNote: 'The 44 m and 80 t refer to the train type defined in the catalogue, not to the complete long rail transport train.',
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The SILAD 1–3 rail loading units come from Robel. The 2026 train type catalogue lists them as active train type 5031 of loading unit and material wagon; in the work train, transport wagons such as the Xas 60 are added.'] }, { titel: 'Service and technology', p: ['The training document describes a transport unit of six wagons and rails up to 120 metres. The SILAD loading unit helps to load and unload safely on site.'] }, { titel: 'Facilities and accessibility', liste: ['Loading unit for rails up to 120 m', 'Capacity up to 30 rails', 'No traction of its own, up to 90 km/h in a train'], p: ['SILAD is a work unit without a passenger compartment.'] }, { titel: 'Fleet development', p: ['SBB keeps SILAD 1–3 in active service. Fleet planning also includes a large programme for 90 SILAD transport units and four loaders.'] }]
});

uebZug('silad-4', {
  typ: 'Rail loading unit for construction and renewal work',
  text: ['SILAD 4 is a separately listed SBB rail loading unit.', 'It works with the associated transport wagons to load and unload long rails.'],
  kennzahlen: [['100 km/h', 'top speed'], ['29.0 m', 'length'], ['58 t', 'empty weight'], ['active', 'status 2026']],
  daten: { 'Beschreibung': 'rail loading unit', 'Gewicht': '58 t (gross and running-dynamics weight)', 'Einsatz': 'loading and unloading rails' },
  specNote: 'The train type catalogue only publishes the path-relevant key values for SILAD 4; working data are covered in separate operating documents.',
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The SBB documents used do not name a manufacturer. The 2026 train type catalogue lists SILAD 4 as its own active train type 5071.'] }, { titel: 'Service and technology', p: ['SILAD 4 is not a self-propelled traction unit. For transfers and site movements, the unit is placed in a hauled consist.'] }, { titel: 'Facilities and accessibility', liste: ['Loading unit for loading and unloading long rails', '29.0 m long, 58 t', 'No traction of its own, up to 100 km/h in a train'], p: ['SILAD 4 is a work unit without a passenger compartment.'] }, { titel: 'Rail logistics', p: ['SILAD systems reduce heavy manual lifting and ensure an orderly flow of material between storage yard, transport train and installation site.'] }]
});

uebZug('silad-reserve', {
  name: 'SILAD reserve unit',
  typ: 'Compact reserve rail loading unit',
  text: ['The SILAD reserve unit is available as a replacement or addition for rail loading work.', 'It is much shorter and lighter than SILAD 4 and is listed as a separate active train type.'],
  kennzahlen: [['90 km/h', 'top speed'], ['14.0 m', 'length'], ['18 t', 'empty weight'], ['active', 'status 2026']],
  daten: { 'Beschreibung': 'reserve loading unit', 'Gewicht': '18 t (gross and running-dynamics weight)', 'Einsatz': 'reserve and addition' },
  specNote: '«Reserve» describes the operational role; the train type catalogue still lists the unit as a separate active type.',
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The SBB documents used do not name a manufacturer. The 2026 train type catalogue lists the reserve unit as its own active train type 5072.'] }, { titel: 'Service and technology', p: ['The reserve unit can step in during maintenance, faults or peak demand, increasing the availability of rail logistics.'] }, { titel: 'Facilities and accessibility', liste: ['Compact loading unit: 14.0 m long, 18 t', 'No traction of its own, up to 90 km/h in a train'], p: ['The reserve unit is a work unit without a passenger compartment.'] }, { titel: 'Operation', p: ['Like the other SILAD units it has no drive of its own. Transfers, shunting and work movements take place in the approved train consist.'] }]
});

uebZug('ste-kurz', {
  name: 'Short STE',
  typ: 'Rail transport unit with two cranes for rails of 12 to 36 m',
  text: ['According to the training document, the short rail transport unit (STE) is based on a four-axle Xans 51 flat wagon.', 'Two small cranes unload short rails directly on site.'],
  kennzahlen: [['12–36 m', 'rail length'], ['29.5 t', 'empty weight'], ['50 t', 'payload according to the slide'], ['2 × 1.5 t', 'cranes']],
  daten: { 'Bauart': 'flat wagon', 'Gewicht': '29.5 t empty', 'Nutzlast': '50 t according to the slide', 'Krane': '2, each 1500 kg capacity', 'Schienenlänge': '12 to 36 m', 'Einsatz': 'unloading rails' },
  specNote: 'The name Xans 51 does not appear as a separate entry in the 2026 train type catalogue, so the values are marked as the 2022 training status.',
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['According to the 2022 SBB training document, the unit is based on a four-axle Xans 51 flat wagon. The document does not name the manufacturer or the number; it is not its own train type in the 2026 catalogue.'] }, { titel: 'Service and technology', p: ['The unit covers rail lengths that can be carried without a 120-metre long-rail train. The two cranes share the load during unloading.'] }, { titel: 'Facilities and accessibility', liste: ['Two cranes with 1500 kg capacity each', 'Generator on board', 'For rails from 12 to 36 m', 'No traction of its own'], p: ['The STE is a work wagon without a passenger compartment.'] }, { titel: 'Workplace safety', p: ['During shunting nobody may stand upright on the wagon. Crane area, lifting gear, overhead line and adjacent track must be secured before every lift.'] }]
});

uebZug('ste-lang', {
  name: 'Long STE',
  typ: 'Multi-part rail transport unit for rails up to 120 m',
  text: ['The long STE uses crane-equipped Xans 51 wagons to carry and unload long rails.', 'According to the presentation, one operating unit consists of six wagons and is 120 metres long.'],
  kennzahlen: [['120 m', 'max. rail length'], ['6', 'wagons per unit'], ['29.5 t', 'empty weight per crane wagon'], ['2 × 1.5 t', 'cranes per crane wagon']],
  daten: { 'Bauart': 'set of flat wagons', 'Formation': '6 wagons', 'Achsen': '4 per wagon', 'Gewicht': '29.5 t empty per crane wagon', 'Nutzlast': '50 t per crane wagon according to the slide', 'Krane': '2 per crane wagon, 1500 kg each', 'Schienenlänge': 'up to 120 m', 'Einsatz': 'unloading long rails' },
  specNote: 'The SILAD train types are active separately in 2026; the designation STE long / Xans 51 is not listed as a train type of its own.',
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['According to the SBB presentation, the long STE consists of six Xans 51 wagons. The document does not name the manufacturer or the number of units; it is not its own train type in the 2026 catalogue.'] }, { titel: 'Service and technology', p: ['Several wagons carry the long, flexible rails together. The cranes support the controlled transfer from the transport set into the track.'] }, { titel: 'Facilities and accessibility', liste: ['Two cranes with 1500 kg capacity each per crane wagon', 'Generator on board', 'For rails up to 120 m', 'No traction of its own'], p: ['The STE is a work formation without a passenger compartment.'] }, { titel: 'Operating limits', p: ['The six wagons are treated as a matched set. During movements, people on the wagons, curving, overhangs and the position of the rails must be closely monitored.'] }]
});

uebZug('xs-45', {
  typ: 'Two-axle tool, workshop and crew wagon',
  text: ['The Xs 45 is a covered engineering train wagon for tools, spare parts and workshop equipment.', 'It also serves as a sheltered work and support space for construction crews.'],
  kennzahlen: [['2', 'axles'], ['15.0 m', 'length'], ['16.5 t', 'empty weight'], ['22 t', 'payload according to the slide']],
  daten: { 'Gewicht': '16.5 t empty, approx. 38.5 t loaded (calculated)', 'Nutzlast': '22 t according to the slide' },
  specNote: 'The 2026 train type catalogue does not list the Xs 45 separately; the values come from the 2022 SBB training document.',
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The SBB documents used do not name the manufacturer or the number of wagons. The wagon appears in the 2022 SBB training document, but not as its own train type in the 2026 catalogue.'] }, { titel: 'Service and technology', p: ['Tools and small machines are carried protected from the weather and made available directly at the work site. The wagon complements traction units and material wagons in the engineering train.'] }, { titel: 'Facilities and accessibility', liste: ['Covered wagon with side doors', 'Space for tools, spare parts and workshop equipment', 'Sheltered work room for the construction crew', 'No traction of its own'], p: ['The Xs 45 is not a passenger coach. People may only ride along under the operating rules.'] }, { titel: 'Running position', p: ['Before every movement, side doors, loose equipment and workplaces must be secured. People may only stay in the wagon under the approved operating conditions.'] }]
});

uebZug('xs-48', {
  typ: 'Workshop and crew wagon with lifting platforms',
  text: ['The Xs 48 combines a covered tool and workshop wagon with lifting work platforms.', 'It supports work on overhead line installations in particular.'],
  kennzahlen: [['2', 'axles'], ['15.0 m', 'length'], ['16.5 t', 'empty weight'], ['23 t', 'payload according to the slide']],
  daten: { 'Bauart': 'covered work wagon', 'Gewicht': '16.5 t empty, approx. 39.5 t loaded (calculated)', 'Nutzlast': '23 t according to the slide', 'Ausrüstung': 'lifting work platforms', 'Sicherheitsregel': 'switch off the overhead line before raising the platforms', 'Einsatz': 'tools and workshop, overhead line work' },
  specNote: 'The training slide explicitly requires the overhead line to be switched off before the work platforms are raised.',
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The SBB documents used do not name the manufacturer or the number of wagons. The wagon appears in the 2022 SBB training document, but not as its own train type in the 2026 catalogue.'] }, { titel: 'Service and technology', p: ['The platforms allow work above the wagon floor. The wagon thus provides material, workshop and a raised workplace in one unit.'] }, { titel: 'Facilities and accessibility', liste: ['Covered tool and workshop wagon', 'Lifting work platforms for overhead-line work', 'No traction of its own'], p: ['The Xs 48 is not a passenger coach. Before the platforms are raised, the overhead line must be switched off and earthed.'] }, { titel: 'Electrical safety', p: ['Before lifting, the overhead line must be switched off, earthed and secured against reconnection. For running, the platforms are retracted and doors and load locked.'] }],
  bilder: ['Overhead line work wagon Xs 40 85 95 48 453-1 near Bad Ragaz']
});

uebZug('xs-mannschaftswagen', {
  beiname: 'Crew wagon',
  typ: 'Two-axle workshop and support wagon',
  text: ['The wagon, simply called Xs in the training document, carries tools and workshop equipment.', 'As an engineering train support wagon it gives the crew a sheltered work area.'],
  kennzahlen: [['2', 'axles'], ['14.0 m', 'length'], ['16.5 t', 'empty weight'], ['24 t', 'payload according to the slide']],
  daten: { 'Gewicht': '16.5 t empty, approx. 40.5 t loaded (calculated)', 'Nutzlast': '24 t according to the slide', 'Status': 'generic designation, no clear train type in 2026' },
  specNote: '«Xs» is a broad type designation. Without a vehicle number, the wagon cannot be assigned to a single current train type.',
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['«Xs» is a collective designation. The SBB documents used do not name the manufacturer or the number of wagons; the 2026 catalogue has no clear train type of its own.'] }, { titel: 'Service and technology', p: ['The wagon mainly serves the logistics and work of the engineering train crew. It is not a regular passenger coach and may only be used according to its operating approval.'] }, { titel: 'Facilities and accessibility', liste: ['Covered wagon with side doors', 'Tools and workshop equipment', 'Sheltered work area for the crew', 'No traction of its own'], p: ['The wagon is not a passenger coach and may only be used according to its operating approval.'] }, { titel: 'Securing', p: ['Tools, spare parts and loose items must be secured before every train movement. Side doors stay closed and locked while running.'] }]
});

uebZug('kirow-mannschaftswagen', {
  name: 'Kirow crew wagon',
  typ: 'Support wagon of the Kirow 250, 800 and 1200 crane sets',
  text: ['The 2026 train type catalogue lists Kirow 250, 800 and 1200 crane sets, each with a crew wagon.', 'The support wagon backs up the staff, tools and operational logistics of the railway crane. SBB’s two KRC 800 were replaced in 2016–2019, so a catalogue entry does not prove a current fleet.'],
  kennzahlen: [['3', 'crane types with crew wagon'], ['1', 'crew wagon per set'], ['80 km/h', 'set speed'], ['3', 'train types in the 2026 catalogue']],
  daten: { 'Fahrzeugrolle': 'support wagon in the crane set', 'Höchstgeschwindigkeit': '80 km/h (whole set)', 'Einzelfahrdaten': 'not published separately', 'Fahrtypen': '5089–5091 (complete crane sets)', 'Status': 'train types active in the 2026 catalogue; KRC 800 replaced at SBB in 2016–2019' },
  specNote: 'In the train type catalogue SBB only publishes the totals of the inseparable crane sets, not separate dimensions for the crew wagon.',
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['The crew car always belongs to a Kirow 250, 800 or 1200 crane formation; the catalogue lists the complete formations as train types 5089–5091. Individual data and the manufacturer of the escort car are not published separately. The two SBB KRC 800 were replaced in 2016–2019.'] }, { titel: 'Service and technology', p: ['The crew wagon provides the crane team with material, equipment and a rest area. Its equipment is matched to the respective crane set.'] }, { titel: 'Facilities and accessibility', liste: ['Material and tools for the crane team', 'Rest room for the staff', 'No traction of its own, up to 80 km/h in the formation'], p: ['The car is an escort car for the crane staff, not a passenger coach.'] }, { titel: 'Assignment to the crane sets', tabelle: { kopf: ['Crane', 'Formation', 'Set length / weight'], zeilen: [
      ['Kirow 250', '1 protection wagon and 1 crew wagon', '47 m / 169 t'],
      ['Kirow 800', '1 protection wagon and 1 crew wagon', '48 m / 203 t'],
      ['Kirow 1200', 'protection, counterweight and crew wagons', '63 m / 279 t']] } }, { titel: 'Fixed set', p: ['For path ordering and transfers the complete unit is considered. Changes to formation, load or brakes are only allowed according to the approved operating documents.'] }]
});

uebZug('pwfz', {
  beiname: 'Staff and workshop vehicle',
  typ: 'Planned staff and workshop vehicle',
  text: ['The PWFZ staff and workshop vehicle is a planned SBB Infrastructure fleet project.', 'It is intended to replace older Xs workshop and crew wagons with a uniform modern series.'],
  kennzahlen: [['30', 'vehicles planned'], ['2', 'first project vehicles'], ['28', 'further series vehicles'], ['June 2025', 'planning status']],
  daten: { 'Langname': 'Personal Werkstatt Fahrzeug (staff and workshop vehicle)', 'Bestand': 'no series fleet yet', 'Anzahl': '30 planned (2 + 14 + 14)', 'Einsatz': 'staff and workshop', 'Vorgänger': 'Xs engineering train wagons', 'Technische Daten': 'not yet published', 'Status': 'planned procurement' },
  specNote: 'Publicly available SBB documents give the number and phasing, but no binding dimensions or performance data yet.',
  abschnitte: [{ titel: 'Manufacturer and fleet build-up', p: ['SBB Infrastructure plans 30 vehicles in three stages: 2, 14 and 14. A manufacturer and technical data have not yet been published (as of 4 June 2025).'] }, { titel: 'Service and technology', p: ['A uniform PWFZ series is to combine workshop, material transport and staff support in a modern wagon concept.'] }, { titel: 'Facilities and accessibility', p: ['The PWFZ is to combine workshop, material transport and support for staff in one vehicle. More detailed information on the equipment has not yet been published.'] }, { titel: 'Distinction', p: ['The PWFZ is not yet a series train type listed in the 2026 catalogue. This entry describes the project status, not an already approved vehicle series.'] }]
});
