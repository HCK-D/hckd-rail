/* English – SBB Infrastructure: locomotives and tractors */
uebZug('aem-940', {
  typ: 'Bi-mode locomotive',
  text: ['The Aem 940 is a four-axle bi-mode locomotive from Alstom for SBB Infrastructure. It runs electrically under the overhead line and, on non-electrified tracks, with two diesel generator sets.', 'This makes it suitable for engineering trains and heavy shunting.'],
  kennzahlen: [['47', 'locomotives ordered'], ['120 km/h', 'top speed'], ['2000 kW', 'electric power'], ['2018', 'start of trials']],
  daten: { 'Länge': '18.75 m over buffers', 'Gewicht': '84 t; 90 t with ballast', 'Antrieb': 'electric, with two diesel generator sets', 'Leistung': '2000 kW electric, 900 kW on diesel', 'Mehrfachtraktion': 'up to 4 locomotives', 'Anzahl': '47 ordered', 'In Betrieb seit': '2018 (trials), series from 2019' },
  specNote: 'Technical values according to Alstom’s 2016 presentation. Electric and diesel power apply to different operating modes.',
  abschnitte: [
    { titel: 'Procurement and service', p: ['SBB ordered 47 locomotives for SBB Infrastructure. The first five were tested from 2018; series deliveries were planned to start in autumn 2019.', 'SBB names the Limmattal and Lausanne Triage marshalling yards and engineering trains for maintenance and expansion throughout Switzerland as fields of use.'] },
    { titel: 'Bi-mode drive and control', p: ['Under the overhead line the locomotive uses its electric drive. Without a contact wire, two smaller diesel engines generate power for the electric traction motors.', 'SBB describes the use of ETCS Level 2 and a special remote-control mode at the Limmattal hump, where the driver stays in the cab.'] }
  ]
});

uebZug('am-843', {
  typ: 'Diesel-hydraulic locomotive for shunting and line service',
  text: ['The Am 843 is a four-axle diesel-hydraulic locomotive from Vossloh. It was procured for heavy shunting and runs on the main line.', 'SBB Cargo, SBB Infrastructure and passenger services have used the class for various tasks.'],
  kennzahlen: [['59', 'originally ordered for SBB Cargo'], ['1500 kW', 'diesel engine power'], ['100 km/h', 'line speed'], ['2004', 'introduced at SBB Cargo']],
  daten: { 'Antrieb': 'diesel-hydraulic', 'Gewicht': '80 t in working order', 'Rangiergang': 'up to 40 km/h', 'Streckengang': 'up to 100 km/h', 'Anzahl': '59 ordered for SBB Cargo', 'In Betrieb seit': '2004 (SBB Cargo)' },
  specNote: 'The two gearbox ratios are designed for high tractive effort at low shunting speed and for runs of up to 100 km/h on the line.',
  abschnitte: [
    { titel: 'Procurement and service', p: ['SBB Cargo ordered 59 Am 843 from Vossloh in Kiel and presented the first locomotives in 2004. This figure refers to that Cargo order, not to the whole SBB class or a current fleet.', 'Cargo uses the Am 843 mainly for shunting and local deliveries. At SBB Infrastructure its duties include shunting and engineering trains.'] },
    { titel: 'Technology and development', p: ['The SBB Cargo locomotives were fitted with diesel particulate filters.', 'In October 2025 SBB Cargo announced the procurement of new hybrid shunting locomotives as future replacements for the Am 843. A current fleet figure for the whole class is not given separately on the SBB pages used.'] }
  ],
  bilder: ['SBB Infrastructure Am 843 001 with a construction train', 'Two SBB Infrastructure Am 843 with a timber train, 012 leading', 'Am 843 011 in Arth-Goldau', 'Am 843 with the fire-fighting and rescue train in Giornico', 'Am 843 in Basel']
});

uebZug('tm-234', {
  typ: 'Engineering tractor',
  text: ['The Tm 234 «Ameise» is a two-axle diesel tractor for building and maintaining railway infrastructure. Depending on the version, it has a loading deck with crane or a work platform.', 'This page covers the older «Ameise», not the later Windhoff Tm 234-4.'],
  kennzahlen: [['125', 'ordered in three series'], ['550 kW', 'diesel engine power'], ['80 km/h', 'line speed'], ['124', 'SBB fleet in 2019']],
  daten: { 'Hersteller': 'Stadler Winterthur and partners', 'Bauart': 'two-axle diesel tractor', 'Gewicht': '30 t in working order, max. 37 t', 'Antrieb': 'hydrostatic, MTU diesel engine', 'Anfahrzugkraft': 'approx. 81 kN', 'Zuladung': '7 t; basket version 0.5 t', 'Arbeitsmodus': 'up to 20 km/h, crane operation up to 4 km/h', 'Anzahl': '125 ordered (1997, 2000, 2005)', 'In Betrieb seit': '1999 (first series ordered in 1997)', 'Einsatz': 'track, overhead line and signal maintenance' },
  specNote: 'The manufacturer’s data sheet and a preliminary study by DLR and SBB describe the various versions.',
  abschnitte: [
    { titel: 'Series and service', p: ['SBB ordered 50 vehicles each in 1997 and 2000 and a further 25 in 2005. Delivery and commissioning of the first series began in 1999. Stadler reported delivery of the last 25 in 2007.', 'The tractors are used for track, overhead line and signal maintenance, carry material and can move or shunt engineering trains.'] },
    { titel: 'Fleet and distinction', p: ['In 2019 SBB Infrastructure gave a fleet of 124 older Tm 234 «Ameise». This is a historical figure, not a statement about the fleet in October 2026.', 'The newer engineering tractor, also called Tm 234-4, comes from Windhoff and belongs to a different procurement.'] }
  ],
  bilder: ['Tm 234 109 «Ameise»', 'Tm 234 004 in Neuhausen SH', 'Tm 234 139 in Winterthur', 'Tm 234 «Ameise» with loading crane', 'Tm 234 090']
});

uebZug('am-841', {
  typ: 'Diesel-electric locomotive for engineering trains and light line service',
  text: ['The Am 841 is a four-axle diesel-electric locomotive from GEC Alsthom.', 'It was procured for heavy engineering trains, shunting and light freight trains on the line.'],
  kennzahlen: [['40', 'originally procured'], ['920 kW', 'diesel engine power'], ['80 km/h', 'top speed'], ['1996–1997', 'years built (SBB series)']],
  daten: { 'Antrieb': 'diesel-electric', 'Gewicht': '73 t in working order', 'Anzahl': '40 procured (30 + 10)', 'In Betrieb seit': '1996–1997 (years built)' },
  specNote: 'The running-dynamics values follow the 2026 SBB train type catalogue; historical sources give slightly different masses depending on equipment.',
  abschnitte: [
    { titel: 'Procurement and service', p: ['SBB first ordered 30 locomotives and then added ten more to the order.', 'The class filled a gap between small shunting tractors and heavy diesel locomotives and was mainly intended for engineering trains and local deliveries.'] },
    { titel: 'Modernisation and future', p: ['A development programme is converting five Am 841 into Aeam 841 with pantograph, battery and diesel engine. The documents give the period 2024 to 2026.', 'At the same time SBB Infrastructure is running a fleet project to replace the older Am 841 and Am 842.'] }
  ],
  bilder: ['Am 841', 'Am 841 014', 'Three Am 841 in Frauenfeld', 'Am 841 017', 'Am 841 002 in Küsnacht ZH']
});

uebZug('am-842', {
  typ: 'Diesel-hydraulic locomotive for heavy shunting and light line service',
  text: ['At SBB the designation Am 842 was used for several different four-axle diesel locomotives.', 'This page covers the MaK G 1204 BB type, listed as active in the 2026 SBB train type catalogue.'],
  kennzahlen: [['2', 'taken over from Sersa in 1993'], ['1120 kW', 'diesel engine power'], ['80 km/h', 'top speed'], ['12.5 m', 'length over buffers']],
  daten: { 'Antrieb': 'diesel-hydraulic', 'Gewicht': '80 t in working order at SBB', 'Anzahl': '2 (Am 842 000 and 001)', 'In Betrieb seit': '1993 at SBB' },
  specNote: 'The values of 80 t and 255 kN are the parameters stored for the active train type in the SBB train type catalogue.',
  abschnitte: [
    { titel: 'Takeover and service', p: ['Two MaK G 1204 BB came from Sersa to SBB in 1993 and were numbered Am 842 000 and 001.', 'These powerful shunting locomotives are suited to heavy shunting and shorter runs on the line.'] },
    { titel: 'Distinguishing the class', p: ['Later, three Vossloh G 1000 BB of SBB Cargo also carried the numbers Am 842 011 to 013. Their technical data differ from the MaK type, so information on the Am 842 always belongs to the respective number group.'] }
  ]
});

uebZug('tmf-232', {
  typ: 'Modernised engineering tractor with radio remote control',
  text: ['The Tmf 232 was created by modernising Tm IV engineering tractors. In 2013 SBB Infrastructure ordered the conversion of 15 vehicles.', 'The «f» in the designation stands for radio remote control (Funkfernsteuerung).'],
  kennzahlen: [['15', 'vehicles in the conversion order'], ['2013', 'modernisation order'], ['280 kW', 'diesel power'], ['60 km/h', 'top speed under own power']],
  daten: { 'Umbau': 'ORTICS, at the SBB industrial works in Biel', 'Antrieb': 'diesel-hydraulic, Caterpillar engine', 'Länge': '7.67 m over buffers', 'Gewicht': 'around 30 t', 'Höchstgeschwindigkeit': '60 km/h under own power, 90 km/h when hauled', 'Steuerung': 'radio remote control and multiple-unit control', 'Umbauauftrag': '2013 (first use after conversion not documented)', 'Einsatz': 'engineering and shunting work' },
  specNote: '2013 is the documented year of the modernisation order, not the original year of construction of the donor Tm IV.',
  abschnitte: [
    { titel: 'Modernisation', p: ['In 2013 ORTICS was commissioned by SBB Infrastructure to modernise 15 Tm IV. Frame, bodywork, wheelsets and transmission were largely retained; the engine, control and safety systems were renewed and a radio remote control installed.'] },
    { titel: 'Service', p: ['The Tmf 232 moves engineering trains, shunts vehicles and supports work on construction sites. It has a shunting gear up to 30 km/h for high tractive effort and a gear up to 60 km/h for line runs.', 'The higher hauled speed of 90 km/h applies without its own drive within a train.'] }
  ]
});

uebZug('tm-234-4', {
  typ: 'Windhoff engineering tractor',
  text: ['The Tm 234-4 is a two-axle engineering tractor with loading platform and crane. DART stands for diesel work and shunting tractor.', 'SBB Infrastructure procured it for maintenance, material transport, shunting and work on track, signalling and cable installations.'],
  kennzahlen: [['35', 'vehicles in the SBB project'], ['651 kW', 'total installed power'], ['100 km/h', 'top speed'], ['14.24 m', 'length over buffers']],
  daten: { 'Länge': '14.24 m over buffers', 'Gewicht': 'approx. 37.3 t in working order', 'Leistung': '651 kW installed (522 kW main engine + 129 kW working engine)', 'Motor': 'Caterpillar C18 and C4.4', 'Antrieb': 'hydrodynamic and hydrostatic', 'Anfahrzugkraft': 'approx. 100–105 kN', 'Ladeplattform': 'up to 3200 kg', 'Ladekran': 'Palfinger PR220 HPLS, reach up to 11 m', 'Anzahl': '35 planned', 'In Betrieb seit': '2019 (pre-series)' },
  specNote: 'The installed power includes the main and working engines; the SBB train type lists a lower maximum power for running dynamics.',
  abschnitte: [
    { titel: 'Procurement and replacement', p: ['SBB awarded the contract in 2015. From 2019, five pre-series vehicles were tested first; a total of 35 tractors were planned to replace 51 older Tm 232.'] },
    { titel: 'Working and running', p: ['The main engine drives the fast hydrodynamic transmission, while the additional working engine powers the hydraulic auxiliaries.', 'The combination of crane, loading deck and 100 km/h approval allows material and engineering train duties without a separate work vehicle.'] }
  ],
  bilder: ['Windhoff engineering tractor with loading crane', 'Windhoff engineering tractor, other side', 'Tm 234 413 with loading crane in Weinfelden', 'Tm 234 413 in Weinfelden, crane side', 'Tm 234 435 in Kreuzlingen']
});
