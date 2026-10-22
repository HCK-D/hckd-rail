/* English – transN: historic and special vehicles */
uebDict({
  'transN, früher CMN und TRN': 'transN, formerly CMN and TRN', 'transN, früher RVT und TRN': 'transN, formerly RVT and TRN',
  'RVT, später TRN und transN': 'RVT, later TRN and transN', 'RVT, später TRN': 'RVT, later TRN', 'TN, später TRN und transN': 'TN, later TRN and transN',
  'NCB und TN': 'NCB and TN', 'TN': 'TN', 'TRN': 'TRN', 'Régional des Brenets (RdB)': 'Régional des Brenets (RdB)'
});

uebZug('trn-tm-2-2-11', {
  typ: 'Two-axle diesel engineering tractor for the metre gauge',
  text: ['The Tm 2/2 11 is a small diesel tractor of 1983 from the fleet of the former CMN. It is used for construction and maintenance on the metre gauge.', 'The transN vehicle table of 2024 lists it for the La Chaux-de-Fonds–Les Ponts-de-Martel line.'],
  kennzahlen: [['1983', 'built'], ['175 kW', 'engine power'], ['70 km/h', 'top speed'], ['19 t', 'weight']],
  daten: { 'Bauart': 'two-axle diesel tractor', 'Hersteller': 'RACO (type 240 DT 4H)' },
  specNote: '70 km/h is the vehicle’s top speed, not the speed allowed during engineering work. Whether the tractor is still serviceable in October 2026 has not been confirmed separately.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['RACO built the tractor in 1983 as type 240 DT 4H for the Chemins de fer des Montagnes Neuchâteloises (CMN). It came to transN via the TRN. A photo of 1986 shows it in Les Ponts-de-Martel.', 'It belongs to the generation before the four-axle Stadler tractors; in 2023 the much larger Tm 4/4 012 was added.'] },
      { titel: 'Service and technology', p: ['The transN metre-gauge operating regulations (valid from 15 December 2024) list it for the La Chaux-de-Fonds–Les Ponts-de-Martel line.', 'Both axles are powered. The diesel engine delivers 175 kW; the tractor weighs 19 t and runs at up to 70 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Two powered axles', '17 t braked weight', 'No passenger compartment'] }
    ],
  bilder: ['CMN Tm 2/2 11 in Les Ponts-de-Martel (1986)']
});
uebZug('trn-tm-237-312', {
  typ: 'Two-axle diesel engineering tractor for the standard gauge',
  text: ['The Tm 237 312 is a small diesel tractor of 1983 from the fleet of the RVT in the Val-de-Travers. It used to be called Tm 2/2 12.', 'It is not to be confused with the new metre-gauge Tm 4/4 012.'],
  kennzahlen: [['1983', 'built'], ['175 kW', 'engine power'], ['19 t', 'weight'], ['10 m', 'length']],
  daten: { 'Bauart': 'two-axle diesel tractor', 'Hersteller': 'RACO (type 240 DT 4H)', 'Fahrzeugnummern': 'Tm 237 312, formerly Tm 2/2 12', 'Länge': '10 m (according to the train table)' },
  specNote: 'Length and weight come from the train table of the transN standard-gauge operating regulations of April 2025. Whether the tractor is still used after August 2025 is open.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['RACO built the tractor in 1983 as type 240 DT 4H for the Régional du Val-de-Travers (RVT), where it was called Tm 2/2 12. It came to transN via the TRN and now carries the number Tm 237 312.', 'Since 2023 transN has had a much larger four-axle successor, the Tm 4/4 235 077.'] },
      { titel: 'Service and technology', p: ['The tractor was used for maintenance and shunting in the Val-de-Travers. One photo shows it in Fleurier in 2016, another at the Fleurier depot in August 2025. The standard-gauge operating regulations of April 2025 still list it.', 'The diesel engine delivers 175 kW. According to the train table the tractor is 10 m long and weighs 19 t.'] },
      { titel: 'Facilities and accessibility', liste: ['Two axles', '17 t braked weight, braking ratio 89 %', 'No passenger compartment'] }
    ],
  bilder: ['Tm 237 312 in Fleurier (2016)']
});
uebZug('trn-zweiwege', {
  name: 'Road-rail vehicles', beiname: 'dumper 102 and excavator',
  typ: 'Road-rail vehicles for track work on the metre gauge',
  text: ['On its metre-gauge lines transN uses two road-rail vehicles: a dumper numbered 102 and an excavator. Both run on the road and on the rails.', 'According to the operating regulations both entered service in 2021.'],
  kennzahlen: [['2', 'vehicles'], ['2021', 'in service'], ['20 km/h', 'dumper on rails'], ['16 km/h', 'excavator on rails']],
  daten: { 'Bauart': 'road-rail dumper and road-rail excavator', 'Fahrzeugnummern': 'dumper 102; the excavator has no number in the table', 'Gewicht': 'dumper 14.5 t, excavator 12 t (empty)', 'Höchstgeschwindigkeit': 'dumper 20 km/h, excavator 16 km/h (on rails)' },
  specNote: 'The operating regulations do not name manufacturer or type. 14.5 t and 12 t are empty weights; no payload can be derived from them.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The vehicle table of the metre-gauge operating regulations (valid from 15 December 2024) lists a «Dumper rail-route» numbered 102 and a «Pelle rétro rail-route», i.e. a road-rail excavator. Both entered service in 2021.', 'Manufacturer and model of the two vehicles are not named there.'],
        tabelle: { kopf: ['Vehicle', 'Empty weight', 'On rails', 'Places'], zeilen: [['Dumper 102', '14.5 t', '20 km/h', '2'], ['Excavator', '12 t', '16 km/h', '1']] } },
      { titel: 'Service and technology', p: ['Both vehicles are listed for the metre-gauge lines La Chaux-de-Fonds–Les Ponts-de-Martel and Le Locle–Les Brenets. The dumper carries material, the excavator works on and beside the track.', 'Special operating rules apply on the rails. The dumper has 10 t braked weight and 12 kN holding force, the excavator 9 t and 10 kN.'] },
      { titel: 'Facilities and accessibility', liste: ['Wheels for road and rail', 'Dumper with 2 places, excavator with 1 place', 'No passenger compartment'] }
    ]
});
uebZug('trn-ast-21', {
  typ: 'Panoramic saloon driving trailer for special trips',
  text: ['The ASt 21 is a metre-gauge panoramic and saloon driving trailer. It was created from the CMN railcar BDe 4/4 1 of 1950 and entered service in 1999.', 'It has no drive of its own and runs together with a BDe 4/4 railcar.'],
  kennzahlen: [['1999', 'rebuilt'], ['46', 'seats'], ['80 km/h', 'top speed'], ['18 t', 'empty weight']],
  daten: { 'Bauart': 'driving trailer with saloon, without own drive', 'Fahrzeugnummern': 'ASt 21, formerly BDe 4/4 1', 'Gewicht': '18 t empty', 'In Betrieb seit': '1999 (rebuild; original vehicle of 1950)' },
  specNote: 'Some older accounts give 1998 as the year of rebuilding; 1999 according to the transN operating regulations applies here. Whether the vehicle is serviceable in 2026 has not been confirmed separately.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The vehicle was created from the CMN railcar BDe 4/4 1 of 1950. Parts of the old railcar were kept in the rebuild; according to the transN operating regulations the ASt 21 entered service in 1999.', 'The transN vehicle table still lists it in 2024.'] },
      { titel: 'Service and technology', p: ['The vehicle is intended for special trips, not for ordinary commuter traffic. As a driving trailer it has no drive of its own; it runs with a BDe 4/4 railcar.', 'It weighs 18 t empty, has 20 t braked weight and runs at up to 80 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['46 seats', 'Large panoramic windows', 'Saloon interior instead of commuter seating'] }
    ],
  bilder: ['Panoramic driving trailer ASt 21']
});
uebZug('trn-be-4-4-1', {
  typ: 'RVT electric freight locomotive of 1951 (historic)',
  text: ['The Be 4/4 1 is a one-off locomotive of the RVT in the Val-de-Travers. It mainly hauled freight trains and school trains.', 'Since 1 March 2019 it has belonged to the RVT-Historique association.'],
  kennzahlen: [['1951', 'built'], ['703 kW', 'one-hour rating'], ['75 km/h', 'top speed'], ['45 t', 'service weight']],
  daten: { 'Bauart': 'electric locomotive with four traction motors', 'Länge': '11.15 m over buffers', 'Leistung': '703 kW one-hour rating, 611 kW continuous (at the wheel)', 'Erhalten': 'RVT-Historique (since 2019)' },
  specNote: 'Technical data according to the RVT-Historique data sheet. The locomotive is not part of today’s transN freight fleet.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The Ateliers de Vevey built the locomotive in 1951 with electrical equipment from Sécheron for the Régional du Val-de-Travers (RVT). It remained a one-off and carries the nickname «Bobo».', 'Its European vehicle number is 91 85 4417 301-9.'] },
      { titel: 'Service and technology', p: ['The RVT used it mainly on freight trains and school trains on the standard-gauge line in the Val-de-Travers. When regular use declined, RVT-Historique first rented the locomotive. On 1 March 2019 transN officially handed it over to the association.', 'Four traction motors deliver 703 kW one-hour and 611 kW continuous rating at the wheel. The locomotive is 11.15 m long, weighs 45 t and runs at up to 75 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Four traction motors', 'For 15 kV 16.7 Hz AC', 'Today part of the RVT-Historique fleet'] }
    ],
  bilder: ['RVT Be 4/4 1 in Fleurier (1984)']
});
uebZug('trn-abde-2-4-102', {
  typ: 'RVT electric railcar of 1944 (historic)',
  text: ['The ABDe 2/4 102 was built for the electrification of the RVT in the Val-de-Travers. It ran in regular service until December 2004.', 'Today it belongs to RVT-Historique as «L’Étincelante» and has a bar for group trips.'],
  kennzahlen: [['1944', 'built'], ['412 kW', 'power'], ['70 km/h', 'top speed'], ['59', 'seats']],
  daten: { 'Bauart': 'electric railcar with luggage compartment', 'Fahrzeugnummern': 'BCFe 2/4 102, later ABFe 2/4 and ABDe 2/4 (EVN 94 85 7537 312-1)', 'Sitzplätze': '59, 8 of them in 1st class', 'In Betrieb seit': 'January 1945' },
  specNote: 'Built in 1944, in service since January 1945. Technical data according to RVT-Historique. A freely licensed photo exists only of the sister car 101, so none is shown here.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SWS and BBC built the railcar in 1944 for the electrification of the RVT; it entered service in January 1945. It was first called BCFe 2/4 102, then ABFe 2/4 and finally ABDe 2/4. Its European vehicle number shows the later number 312.', 'Its sister car was railcar 101.'] },
      { titel: 'Service and technology', p: ['Its last regular service is given as December 2004. RVT-Historique renovated the car in 2006, built a bar into the luggage compartment and gave it back its original colours. Today it runs for tourist trips and groups.', 'It is 21 m long, weighs 40 t, has 412 kW and runs at up to 70 km/h. The wheels have a diameter of 940 mm.'] },
      { titel: 'Facilities and accessibility', liste: ['59 seats, 8 of them in 1st class', 'Bar in the former luggage compartment (since 2006)', 'Sound system and removable tables'] }
    ]
});
uebZug('trn-rbde-106', {
  beiname: '106 and ABt 204',
  typ: 'RVT standard-gauge push-pull train of 1985 (historic)',
  text: ['Railcar RBDe 106 and driving trailer ABt 204 form an RVT push-pull train. At TRN and transN the railcar carried the number 316.', 'In June 2024 RVT-Historique took over both vehicles; since 1 May 2025 they have run again in RVT colours.'],
  kennzahlen: [['1985', 'railcar in service'], ['2', 'vehicles'], ['87', 'seats in the train'], ['2025', 'back in RVT colours']],
  daten: { 'Bauart': 'electric railcar with driving trailer (push-pull train)', 'Fahrzeugnummern': 'RBDe 106 (later 316), ABt 204', 'Sitzplätze': '87 in the train: 24 in 1st, 63 in 2nd class', 'Anzahl': '2 vehicles', 'Erhalten': 'RVT-Historique (since June 2024)', 'In Betrieb seit': '1985 (railcar)' },
  specNote: 'The 87 seats apply to the whole train of railcar and driving trailer. The sources checked give neither length, weight and power of the railcar nor the year of construction of the driving trailer. The 2006 photos show the train in the TPF livery of the time.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The railcar came to the RVT in 1985 as RBDe 106. It is one of the push-pull trains that many Swiss private railways bought at that time. At TRN and transN it carried the number 316.', 'The driving trailer ABt 204 has first and second class. With it the train can change direction without the railcar running round.'] },
      { titel: 'Service and technology', p: ['From 2004 to 2013 railcar 316 and driving trailer 204 were rented to TPF and ran there in TPF livery, together with TPF intermediate cars. After that transN no longer used the train in commercial passenger service for several years.', 'In June 2024 RVT-Historique took over both vehicles. The exterior paint was renewed between September 2024 and March 2025; the first run in the restored RVT colours took place on 1 May 2025.'] },
      { titel: 'Facilities and accessibility', liste: ['87 seats in the train: 24 in 1st and 63 in 2nd class', 'Bar and tables at the seats (after restoration)', 'Driving trailer for reversing without running round'] }
    ],
  bilder: ['RBDe 316 and ABt 204 in TPF livery in Fribourg (2006)', 'ABt 204 and RBDe 316 with TPF intermediate cars in Fribourg (2006)']
});
uebZug('trn-abm-2-5-9', {
  typ: 'Diesel-electric railcar of 1914 (historic)',
  text: ['The ABm 2/5 9 is one of the first diesel railcars in Europe. It was built in 1914 for the Saxon State Railways and ran on the RVT from 1924 to 1965.', 'Today it belongs to the collection of the Swiss Museum of Transport.'],
  kennzahlen: [['1914', 'built'], ['1924–1965', 'on the RVT'], ['diesel', 'with electric transmission'], ['Museum of Transport', 'collection']],
  daten: { 'Bauart': 'diesel-electric railcar', 'Betreiber': 'Saxon State Railways, then RVT (1924–1965)', 'Antrieb': 'diesel engine with generator, electric traction motor', 'Fahrzeugnummern': 'BCm 2/5, later ABm 2/5 9', 'Erhalten': 'Swiss Museum of Transport' },
  specNote: 'The year 1914 follows the historical classification of the Swiss Museum of Transport. Where the railcar stands today is not confirmed; a 2018 report covers its move to an external store.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The Waggonfabrik Rastatt built the car with electrical equipment from BBC and a Sulzer diesel engine. It resulted from a joint development order of the Saxon and Prussian state railways.', 'After the First World War two such railcars came to Switzerland. The later RVT ABm 2/5 9 survived.'] },
      { titel: 'Service and technology', p: ['According to the Museum of Transport the RVT used it from 1924 to 1965. Such railcars replaced costly steam operation on lightly used lines.', 'A diesel engine drives a generator that feeds the electric traction motor. One bogie is powered, the other is a carrying bogie.'] },
      { titel: 'Facilities and accessibility', liste: ['1st and 2nd class compartments (type AB)', 'From 1982 in the permanent exhibition of the Museum of Transport', 'In the archive: Sulzer description of 1915'] }
    ],
  bilder: ['ABm 2/5 9 in the Museum of Transport, end with the powered bogie (2009)', 'ABm 2/5 9 in the Museum of Transport, end with the carrying bogie (2009)']
});
uebZug('trn-be-2-4', {
  typ: 'TN interurban tram of 1902 (historic)',
  text: ['The Be 2/4 41 to 47 were the large interurban trams of the Tramways de Neuchâtel (TN) on the line to Boudry and Cortaillod.', 'Numbers 44 and 45 are preserved at the Neuchâtel tram museum (ANAT).'],
  kennzahlen: [['1902', 'in service'], ['7', 'railcars (41–47)'], ['50 km/h', 'top speed'], ['1981', 'withdrawn']],
  daten: { 'Bauart': 'four-axle tram with two motors', 'Länge': '12.5 m', 'Gewicht': '15.3 t', 'Sitzplätze': '30, plus 43 standing places', 'Erhalten': '44 and 45 at the Neuchâtel tram museum (ANAT)' },
  specNote: 'Technical values according to the Neuchâtel tram museum. Older photo descriptions give 74 kW instead of 72 kW. Whether the cars are serviceable today is not confirmed.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The Schlieren wagon works (SWS) built the seven railcars, with electrical equipment from MFO. They entered service in 1902.', 'Number 44 returned to Neuchâtel in 2013 from the AMTUIR collection near Paris; number 45 remained preserved at the ANAT.'] },
      { titel: 'Service and technology', p: ['The cars ran on the interurban line Neuchâtel–Boudry and the former branch to Cortaillod, also in multiple with trailers. In 1981 they were officially withdrawn when the new Littorail stock arrived.', 'Two motors deliver 72 kW together. A car is 12.5 m long, weighs 15.3 t and runs at up to 50 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['30 seats and 43 standing places', 'Matching four-axle trailers B4 111–114', 'Today museum vehicles of the ANAT'] }
    ],
  bilder: ['Be 2/4 45 in the ANAT depot in Boudry (2011)', 'Be 2/4 44 on line 5 towards Auvernier (1979)']
});
uebZug('trn-be-2-2', {
  beiname: '73 and 76',
  typ: 'TN two-axle city trams of 1922 (historic)',
  text: ['The two-axle tram cars 71 to 79 ran on the TN city network. Two are preserved: 73 at the Neuchâtel tram museum and 76 at the Blonay–Chamby museum railway.', 'Number 73 runs with historic trailers as the «Le Britchon» train.'],
  kennzahlen: [['1922', 'built (73 and 76)'], ['102 kW', 'power (73)'], ['35 km/h', 'top speed'], ['2', 'cars preserved']],
  daten: { 'Bauart': 'two-axle tram', 'Hersteller': '73: TN workshops with BBC and MFO; 76: SIG, MFO, BBC (according to Blonay–Chamby)', 'Stromsystem': '600 V DC (76 at Blonay–Chamby: 1000 V)', 'Fahrzeugnummern': '71–78, later 79; preserved 73 and 76', 'Länge': '9.2 m (73)', 'Gewicht': '10.9 t', 'Leistung': '102 kW (73), 104 kW (76)', 'Sitzplätze': '20, plus 35 standing places (73)', 'Erhalten': '73 at the Neuchâtel tram museum, 76 at Blonay–Chamby' },
  specNote: 'The series was built from 1921 to 1928; for 73 and 76 the museums give 1922. Values of 73 according to the Neuchâtel tram museum, values of 76 according to Blonay–Chamby, which lists it as Ce 2/2 76.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['The series 71 to 78 was built between 1921 and 1928; later 79 was added. According to the museum, TN built number 73 in its own workshops, with electrical equipment from BBC and MFO. For number 76 Blonay–Chamby names SIG, MFO and BBC.'] },
      { titel: 'Service and technology', p: ['Until line 3 to Corcelles was converted to trolleybus in July 1976, both cars ran in regular tram service. Number 76 came to the Blonay–Chamby museum railway on 18 August 1976; there it is waiting for an overhaul.', 'Since 1994 number 73 has run as a historic railcar on the line to Boudry. It is 9.2 m long, weighs 10.9 t and has two motors of 51 kW each.'] },
      { titel: 'Facilities and accessibility', liste: ['73: 20 seats and 35 standing places', '76: originally for 600 V, at Blonay–Chamby for 1000 V DC', '«Le Britchon» train: railcar 73 with trailers B2i 1 and B2 143'] }
    ],
  bilder: ['Tram 76 with trailer 143 on line 3 (1976)']
});
uebZug('trn-be-4-4-583', {
  typ: 'TN four-axle tram of 1947 (historic)',
  text: ['The Be 4/4 81 to 83 were a small series of four-axle TN trams. Number 83, later called 583, is preserved.', 'It belongs to the collection of the Neuchâtel tram museum.'],
  kennzahlen: [['1947', 'built'], ['144 kW', 'power'], ['60 km/h', 'top speed'], ['3', 'cars (81–83)']],
  daten: { 'Bauart': 'four-axle bidirectional tram', 'Fahrzeugnummern': '81–83, later 581–583', 'Länge': '12.2 m', 'Gewicht': '13.2 t', 'Sitzplätze': '26, plus 39 standing places', 'Erhalten': '583 at the Neuchâtel tram museum (ANAT)' },
  specNote: 'Values according to the Neuchâtel tram museum; a photo description gives 148 kW instead of 144 kW.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SIG built the three cars in 1947, with electrical equipment from Sécheron (SAAS). Later they were renumbered 581 to 583.', 'Number 583 remained preserved at the ANAT. Number 582 went to Wiehe in Germany, 581 was scrapped in 1986.'] },
      { titel: 'Service and technology', p: ['The bidirectional cars had doors on both sides. After city line 3 closed in 1976 they were adapted for the interurban line to Boudry. Regular service of the last two cars ended in 1988, when more Littorail railcars arrived.', 'Four motors deliver 144 kW together. A car is 12.2 m long, weighs 13.2 t and runs at up to 60 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['26 seats and 39 standing places', 'Doors on both sides, driving cab at both ends', 'Today in the collection of the Neuchâtel tram museum'] }
    ],
  bilder: ['Be 4/4 583 (ex 83) in the ANAT depot in Boudry (2011)']
});
uebZug('trn-be-4-4-littorail', {
  typ: 'Littorail railcars of 1981 (historic)',
  text: ['With the Be 4/4 501 to 506 the Neuchâtel–Boudry line became the modern Littorail line in 1981. From 2019 second-hand Stadler railcars from Trogen replaced them.', 'Number 504 «Cortaillod» is preserved at the Neuchâtel tram museum.'],
  kennzahlen: [['1981', 'in service'], ['6', 'railcars (501–506)'], ['75 km/h', 'top speed'], ['276 kW', 'power']],
  daten: { 'Bauart': 'four-axle railcar for operation with driving trailers', 'Länge': '18.4 m', 'Gewicht': '25.5 t', 'Sitzplätze': '42, plus 65 standing places', 'Erhalten': '504 «Cortaillod» at the Neuchâtel tram museum (ANAT)' },
  specNote: 'Values according to the Neuchâtel tram museum. The photo shows a Littorail train of this type; which car number can be seen is not confirmed.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SWS in Schlieren built the four railcars 501 to 504 in 1981 with electrical equipment from BBC. In 1988 numbers 505 and 506 followed. The fleet also included the driving trailers 551 to 554.', 'On 26 October 2019 the ANAT decided to preserve number 504 «Cortaillod».'] },
      { titel: 'Service and technology', p: ['The Littorail cars brought faster, signalled regional rail operation to Neuchâtel–Boudry instead of the old interurban tram. From 2019 second-hand Stadler Be 4/8 railcars from Trogen took over their job.', 'Two motors deliver 276 kW together. A car is 18.4 m long, weighs 25.5 t and runs at up to 75 km/h. The overhead line carries 600 V DC.'] },
      { titel: 'Facilities and accessibility', liste: ['42 seats and 65 standing places', 'Operation together with driving trailers 551–554', 'Number 504 carried the name «Cortaillod»'] }
    ],
  bilder: ['Littorail train at Colombier station (2010)']
});
uebZug('trn-xe-2-2-601', {
  typ: 'TN electric water-sprinkler car of 1911 (historic)',
  text: ['The Xe 2/2 601 was built in 1911 as a sprinkler car: it sprayed the dusty roads along the tram lines with water.', 'Later it was used for weed control and winter service. Today it belongs to the Neuchâtel tram museum.'],
  kennzahlen: [['1911', 'built'], ['66 kW', 'power'], ['30 km/h', 'top speed'], ['10.5 t', 'weight']],
  daten: { 'Bauart': 'two-axle electric service railcar (sprinkler car)', 'Fahrzeugnummern': 'Xe 2/2 301, from 1980 601', 'Länge': '6.76 m', 'Gewicht': '10.5 t', 'Erhalten': 'Neuchâtel tram museum (ANAT)' },
  specNote: 'Values according to the Neuchâtel tram museum. No current operating approval follows from this.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SWS built the car in 1911, with electrical equipment from MFO. It first carried the number 301 and was renumbered 601 in 1980.'] },
      { titel: 'Service and technology', p: ['Originally it sprayed unpaved roads with water to keep down the dust. Once the roads were asphalted, it was used for weed control and in winter for snow clearing.', 'Two motors deliver 66 kW together. It is 6.76 m long, weighs 10.5 t, has a 2.2 m wheelbase and runs at up to 30 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Water tank for sprinkling', 'According to the tram museum still basically suitable for snowplough work', 'No passenger compartment'] }
    ]
});
uebZug('trn-tn-wagen', {
  name: 'Historic wagons',
  typ: 'Preserved tram trailers and service wagons from Neuchâtel',
  text: ['Besides the railcars, five wagons of the Neuchâtel trams are preserved. Four are looked after by the Neuchâtel tram museum (ANAT), one is at the Blonay–Chamby museum railway.', 'The oldest is the freight wagon X2 631 of 1892.'],
  kennzahlen: [['5', 'wagons'], ['1892', 'oldest wagon'], ['4', 'at the tram museum'], ['1', 'at Blonay–Chamby']],
  daten: { 'Bauart': 'tram trailers and freight wagon', 'Erhalten': 'Neuchâtel tram museum (ANAT); C4 121 at Blonay–Chamby' },
  specNote: 'Values according to the Neuchâtel tram museum and Blonay–Chamby. Photo descriptions partly give different weights and numbers of places.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['Four wagons are looked after by the Neuchâtel tram museum (ANAT). The C4 121 has belonged to the Blonay–Chamby collection since 1967 and is waiting there for an overhaul.'],
        tabelle: { kopf: ['Wagon', 'Built', 'Manufacturer', 'Places or payload'], zeilen: [
          ['B2i 1', '1894–1895 (series)', 'SIG', '12 seats and 12 standing places'], ['B4 112', '1902 (type)', 'SWS', '30 seats and 47 standing places'],
          ['B2 143', 'rebuilt 1914–1928 from railcars of 1897/98', '–', '18 seats and 39 standing places'], ['C4 121', '1892', 'from Basel (according to the museum)', '15 seats and 53 standing places'],
          ['X2 631 (formerly 231)', '1892', 'NCB', '7.5 t payload']] } },
      { titel: 'Service and technology', p: ['The small B2i 1 comes from the horse tram Neuchâtel–Saint-Blaise. From 1897 it ran behind electric trams, last until 1964 to La Coudre. According to the museum it was originally number 5, later 101.', 'The four-axle B4 111 to 114 ran with the interurban trams 41 to 47 to Boudry and Cortaillod until 1981. The B2 141 to 149 were rebuilt from older railcars and ran until 1976 to Saint-Blaise, Corcelles and Valangin.', 'The X2 631 of 1892 originally carried vegetables and milk; after the NCB was electrified in 1902 it became a service wagon. It is regarded as the last surviving witness of the NCB era.'] },
      { titel: 'Facilities and accessibility', liste: ['Since 1994 B2i 1 and B2 143 have formed the «Le Britchon» train with railcar 73', 'B4 112: up to 60 km/h, 12.5 m long', 'X2 631: 9 m² loading area', 'C4 121: hand brake and automatic air brake'] }
    ],
  bilder: ['Trailer B2 143 behind tram 76 on line 3 (1976)']
});
uebZug('trn-g-3-3-1', {
  typ: 'Régional des Brenets steam locomotive of 1890 (historic)',
  text: ['The small tank locomotive «Le Doubs» ran from 1890 on the metre-gauge line Le Locle–Les Brenets. It dates from the opening year of the railway.', 'Since 1973 it has been at the Blonay–Chamby museum railway with two historic coaches, where it is waiting for an overhaul.'],
  kennzahlen: [['1890', 'built'], ['16 t', 'service weight'], ['25 km/h', 'top speed'], ['1973', 'at Blonay–Chamby']],
  daten: { 'Bauart': 'steam tank locomotive with three coupled axles', 'Hersteller': 'SLM Winterthur (works number 618)', 'Gewicht': '16.0 t', 'Erhalten': 'Blonay–Chamby museum railway (on loan, since 1973)' },
  specNote: 'Values according to Blonay–Chamby. The sister locomotive G 3/3 2 has no data sheet of its own; its values are therefore not given.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SLM in Winterthur built the locomotive in 1890 with works number 618. With two more small steam locomotives it handled the traffic between Le Locle and Les Brenets.', 'One of them, G 3/3 2 «Le Père Frédéric», stands as a monument in Les Brenets. Its name recalls the industrialist Frédéric Perret, who financed the purchase.'] },
      { titel: 'Service and technology', p: ['After electrification in 1950 the locomotive was handed over for preservation together with two historic coaches. After storage in Vallorbe the group came to the Blonay–Chamby museum railway on loan in 1973.', 'The boiler works at 12 bar. The cylinders have a diameter of 240 mm and a stroke of 350 mm, the wheels 750 mm. The locomotive carries 1.8 m³ of water and 0.5 t of coal.'] },
      { titel: 'Facilities and accessibility', p: ['The preserved Régional des Brenets group includes two coaches of 1890. They have a hand brake and an automatic vacuum brake.'],
        tabelle: { kopf: ['Vehicle', 'Built', 'Manufacturer', 'Today'], zeilen: [
          ['Steam locomotive G 3/3 1 «Le Doubs»', '1890', 'SLM (618)', 'Blonay–Chamby'], ['Coach BC 2 (formerly AB 2), 6 places 2nd and 28 places 3rd class', '1890', 'SIG Neuhausen', 'Blonay–Chamby'],
          ['Coach with luggage compartment CF 21 (formerly BD 21), 16 places 3rd class', '1890', 'SIG Neuhausen', 'Blonay–Chamby'], ['Steam locomotive G 3/3 2 «Le Père Frédéric»', '1890', 'SLM', 'monument in Les Brenets']] } }
    ],
  bilder: ['G 3/3 1 «Le Doubs» at the Blonay–Chamby museum railway', 'G 3/3 1 «Le Doubs» at Blonay–Chamby (spring 2010)']
});
uebZug('trn-kkl-41', {
  typ: 'Metre-gauge flat wagon with a tank on top (historic)',
  text: ['The Kkl 41 is a TRN metre-gauge flat wagon. In 2014 it stood in Les Brenets station with a tank placed on it.', 'According to the photo description it went to the French museum MTVS in 2017.'],
  kennzahlen: [['41', 'number'], ['metre gauge', 'gauge'], ['2014', 'photo in Les Brenets'], ['2017', 'to the MTVS']],
  daten: { 'Bauart': 'flat wagon with a tank on top', 'Verbleib': '2017 to the Musée des tramways à vapeur et des chemins de fer secondaires français (MTVS), according to the photo description' },
  specNote: 'Year of construction, weight, payload and tank capacity are not established. The handover to the MTVS comes from the photo description and is not confirmed by any museum register.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['A photo of 1 June 2014 shows the wagon in Les Brenets; it is labelled TRN Kkl 41. Manufacturer and year of construction are not known.'] },
      { titel: 'Service and technology', p: ['A tank stood on the loading area. What it was used for is not documented. The wagon is therefore not a tank wagon of its own type but a flat wagon with a container on top.', 'According to the photo description the railway handed it over to the French museum MTVS in 2017.'] },
      { titel: 'Facilities and accessibility', liste: ['Flat loading area', 'Tank placed on top (2014)', 'No passenger compartment'] }
    ],
  bilder: ['Kkl 41 with a tank on top in Les Brenets (2014)']
});

/* maps «Where does it run?» */
uebEinsatz({
  'trn-tm-2-2-11': 'In engineering service on the metre-gauge line La Chaux-de-Fonds–Les Ponts-de-Martel. The metre gauge is shown dashed and simplified.',
  'trn-tm-237-312': 'In maintenance and shunting service in the Val-de-Travers; last photographed at the Fleurier depot.',
  'trn-zweiwege': 'In engineering service on the metre-gauge lines La Chaux-de-Fonds–Les Ponts-de-Martel and Le Locle–Les Brenets. The metre gauge is shown dashed and simplified.',
  'trn-ast-21': 'For special trips on the transN metre-gauge lines in the Neuchâtel mountains. The metre gauge is shown dashed and simplified.',
  'trn-be-4-4-1': 'Formerly on freight and school trains on the RVT line in the Val-de-Travers. Today the locomotive belongs to RVT-Historique.',
  'trn-abde-2-4-102': 'Formerly in regular service on the RVT line in the Val-de-Travers, today on special and group trips of RVT-Historique.',
  'trn-rbde-106': 'Formerly on the RVT line in the Val-de-Travers; rented to TPF from 2004 to 2013, for example in Fribourg. Today on trips of RVT-Historique.',
  'trn-abm-2-5-9': 'From 1924 to 1965 on the RVT in the Val-de-Travers. Today it belongs to the collection of the Swiss Museum of Transport in Lucerne.',
  'trn-be-2-4': 'Formerly on the interurban line Neuchâtel–Boudry and to Cortaillod. Today at the Neuchâtel tram museum in Boudry. The metre gauge is shown dashed and simplified.',
  'trn-be-2-2': 'Formerly on the Neuchâtel city tram, for example on line 3 to Corcelles. Today 73 runs as a historic tram to Boudry, 76 is at Blonay–Chamby. The metre gauge is shown dashed and simplified.',
  'trn-be-4-4-583': 'First on city line 3 to Corcelles, from 1976 on the interurban line to Boudry. Today at the Neuchâtel tram museum. The metre gauge is shown dashed and simplified.',
  'trn-be-4-4-littorail': 'From 1981 to 2019 on the Littorail line Neuchâtel–Boudry. Number 504 is now at the Neuchâtel tram museum. The metre gauge is shown dashed and simplified.',
  'trn-xe-2-2-601': 'Formerly in service on the Neuchâtel tram network. Today at the Neuchâtel tram museum in Boudry. The metre gauge is shown dashed and simplified.',
  'trn-tn-wagen': 'Formerly on the Neuchâtel tram network and to Boudry. Four wagons are at the Neuchâtel tram museum, the C4 121 at Blonay–Chamby. The metre gauge is shown dashed and simplified.',
  'trn-g-3-3-1': 'From 1890 to 1950 on the Le Locle–Les Brenets line. Today at the Blonay–Chamby museum railway. The metre gauge is shown dashed and simplified.',
  'trn-kkl-41': 'Photographed in 2014 in Les Brenets station on the metre-gauge line Le Locle–Les Brenets. The metre gauge is shown dashed and simplified.'
});
