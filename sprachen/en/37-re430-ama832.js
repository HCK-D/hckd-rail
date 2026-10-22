/* English – Re 430 and Ama 832 */
uebDict({ 'Dieselgenerator': 'Diesel generator', 'Eigentümer': 'Owner', 'Bestellt': 'Ordered', 'Plattform': 'Platform', 'SBB Cargo AG': 'SBB Cargo AG', 'LokRoll 2 AG': 'LokRoll 2 AG' });

uebZug('ama-832', {
  typ: 'Hybrid shunting locomotive with diesel generator and battery',
  text: ['The Ama 832 is a three-axle hybrid shunting locomotive by Alstom from the Prima H3 family. Depending on the job, it runs half to three quarters of the time on battery power.', 'SBB Cargo has leased twelve locomotives for ten years; they belong to LokRoll 2 AG.'],
  kennzahlen: [['12', 'locomotives leased'], ['100 km/h', 'top speed'], ['350 kW', 'diesel generator'], ['2018', 'ordered']],
  daten: { 'Antrieb': 'hybrid: diesel generator and battery', 'Dieselgenerator': '350 kW, emission stage IIIB', 'Länge': '12.8 m', 'Leistung': '790 kW (train type catalogue)', 'Anzahl': '12 leased' },
  specNote: 'The designation and the power of 790 kW follow the SBB train type catalogue 2026; the diesel generator alone has 350 kW. The locomotives do not belong to SBB.',
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['LokRoll 2 AG, founded by the Reichmuth Infrastruktur Schweiz fund, ordered twelve Prima H3 from Alstom in October 2018 for about 40 million euros. They are leased to SBB Cargo for ten years. They were built by Alstom in Germany; deliveries were planned from October 2020.', 'From 2017 SBB Cargo had already leased three Prima H3 from Alstom, for closed areas in the port of Basel-Kleinhüningen and in Aargau.'] },
      { titel: 'Service and technology', p: ['SBB Cargo uses the locomotives for shunting, assembling and moving freight wagons, for example in St. Margrethen. Depending on the job they run 50 to 75 per cent of the time on battery power, which allows emission-free operation in towns or inside halls.', 'The diesel generator has 350 kW. The locomotive is 12.8 m long, weighs 67 t, has 240 kN starting tractive effort and runs at up to 100 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Cab in the middle', 'Battery for emission-free running', 'ETCS for the Swiss network', 'No pantograph, no passenger compartment'] }
    ],
  bilder: ['New Ama 832 of the shunting team in St. Margrethen (2021)', 'Factory-new Ama 832 in St. Margrethen (2021)']
});
uebZug('h-re430', {
  typ: 'Electric locomotive for Gotthard express and freight trains (historic)',
  text: ['The Re 4/4 III, later Re 430, is the tractive-effort version of the Re 4/4 II. A different gear ratio gives it more tractive effort on gradients; in return it runs at no more than 125 instead of 140 km/h.', 'SBB’s last locomotives were withdrawn in April 2023.'],
  kennzahlen: [['20', 'SBB locomotives (11351–11370)'], ['125 km/h', 'top speed'], ['4700 kW', 'hourly rating'], ['1970', 'first in service']],
  daten: { 'Länge': '15.41 m over buffers', 'Gewicht': '80 t, 84 t with air conditioning', 'Leistung': '4700 kW hourly, 3700 kW continuous', 'Höchstgeschwindigkeit': '125 km/h (initially 120 km/h)', 'Nummern': '11351–11370, later Re 430 351–370; plus 11350 ex SOB 41', 'Ausmusterung': 'by 8 April 2023' },
  abschnitte: [
      { titel: 'Manufacturer and fleet build-up', p: ['SLM, BBC, MFO and SAAS built the locomotives. SBB received 20 in 1970 and 1971, numbered 11351–11370. Numbers 11351–11353 went to SOB from 1983 to 1985 and came back from 1994 to 1996; in the same exchange SOB 41 came to SBB as 11350.', 'Related locomotives ran on private railways: EBT 111–113, VHB 141 and SMB 181, later as Re 436 and Re 430 with RM and Widmer Rail Services.'] },
      { titel: 'Service and technology', p: ['The Re 4/4 III was built for express and freight trains on the Gotthard. Later it mainly ran in freight service, mostly with SBB Cargo. Number 11365 was withdrawn after a collision in Basel in 2013; the last two, 430 356 and 11370, were withdrawn on 8 April 2023.', 'The locomotive is 15.41 m long, has 4700 kW hourly and 3700 kW continuous power, 280 kN starting tractive effort and runs at up to 125 km/h.'] },
      { titel: 'Facilities and accessibility', liste: ['Two cabs', 'Multiple-unit control, for example with the Re 6/6 as «Re 10/10»', 'No passenger compartment'],
        p: ['With passenger trains, accessibility depended on the coaches.'] }
    ],
  bilder: ['Re 430 364 (11364) in Solothurn (2019)', 'Re 4/4 III 11360 and Re 421 in Frauenfeld (2012)', 'Re 4/4 III 11350, ex SOB 41, in Rotkreuz (2012)', 'Re 4/4 III 11364 with double-deck coaches in Veytaux (2011)']
});
uebEinsatz({
  'ama-832': 'In SBB Cargo shunting service in Switzerland, for example in St. Margrethen.',
  'h-re430': 'Formerly hauling express and freight trains on the Gotthard, later mainly in SBB Cargo freight service all over the network.'
});
