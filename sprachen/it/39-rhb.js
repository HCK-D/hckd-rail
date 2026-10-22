/* Italiano – Ferrovia retica (RhB) */
uebDict({
  'Rhätische Bahn': 'Ferrovia retica', 'RhB': 'RhB', 'Stadler': 'Stadler',
  '11 kV 16,7 Hz': '11 kV 16,7 Hz', '1000 V Gleichstrom': '1000 V corrente continua', '11 kV 16,7 Hz · 1000 V Gleichstrom': '11 kV 16,7 Hz · 1000 V corrente continua',
  'Kein eigener Antrieb': 'Nessuna trazione propria', 'Diesel': 'diesel'
});

/* ---------- traffico viaggiatori ---------- */
uebZug('rhb-capricorn', {
  typ: 'Elettrotreno regionale Stadler a quattro casse per la rete principale',
  text: ['Il Capricorn è il treno regionale più recente della RhB. Stadler costruisce questi treni a quattro casse dal 2019; trasportano viaggiatori dal 2020.', 'Più treni si possono accoppiare e separare automaticamente. Partono insieme e poi servono destinazioni diverse.'],
  kennzahlen: [['56', 'treni in servizio (3111–3166)'], ['164', 'posti a sedere'], ['120 km/h', 'velocità massima'], ['2020', 'in servizio viaggiatori']],
  daten: { 'Bauart': 'elettrotreno a pianale ribassato, 4 casse', 'Fahrzeugnummern': '3111–3166, ampliamento fino a 3172', 'Länge': '76,4 m tra gli accoppiatori', 'Gewicht': '119 t a vuoto, 146 t a pieno carico', 'Leistung': '1000 kW continui, 1600 kW massimi (alla ruota)', 'Sitzplätze': '35 in 1a, 129 in 2a classe, più 18 strapuntini', 'Anzahl': '56 treni, altri 6 da fine 2026' },
  specNote: 'Dati tecnici secondo Stadler (scheda TMRHB0922e) e la RhB. La RhB indica 1000 kW di potenza continua, Stadler 1600 kW di potenza massima. Una vecchia pagina pubblicitaria indica 114 t senza riferimento chiaro; qui valgono 119 t a vuoto secondo la pagina del progetto RhB.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler costruisce i Capricorn per la RhB. I primi veicoli sono stati costruiti nel 2019; il treno 3111 ha circolato in orario per la prima volta il 17 giugno 2020. La serie di base comprende 56 treni numerati 3111–3166.', 'La RhB annuncia sei altri treni consegnati nel secondo semestre 2026; i registri indicano numeri fino a 3172. Ogni carrozza ha anche un proprio numero, per esempio Be 4/4 31011 nel treno 3111.'] },
      { titel: 'Impiego e tecnica', p: ['Secondo la RhB, i Capricorn circolano su Landquart–Davos–Filisur, Landquart–Scuol, Landquart–St. Moritz e Coira–Disentis/Mustér. Da due a quattro treni possono viaggiare insieme e separarsi a Klosters Platz.', 'La motrice ha quattro assi motori e traina altre tre carrozze. Il treno è lungo 76,4 m, pesa 119 t a vuoto e viaggia fino a 120 km/h. Lo sforzo di trazione all’avviamento è di 142 kN, la potenza di frenatura elettrica fino a 2200 kW.'] },
      { titel: 'Dotazione e accessibilità', liste: ['164 posti a sedere: 35 in 1a e 129 in 2a classe, più 18 strapuntini', 'Tre ampi accessi a pianale ribassato, 2 posti per sedie a rotelle e una toilette accessibile', 'Fino a 12 posti per bici in compartimenti multifunzionali', 'Climatizzazione, due prese per compartimento e immagine della telecamera frontale sugli schermi', 'Fasciatoi in entrambe le toilette'] }
    ],
  bilder: ['Capricorn 3112 presso Bever (2021)', 'Capricorn tra Davos Wolfgang e Davos Laret (2020)', 'Capricorn 3122 e 3119 accoppiati a Davos Dorf (2024)']
});
uebZug('rhb-allegra', {
  typ: 'Elettrotreno bitensione a tre casse per la rete principale e la linea del Bernina',
  text: ['L’Allegra circola in corrente alternata sulla rete principale e in corrente continua sulla linea del Bernina. Collega così le due reti senza cambio di locomotiva.', 'I 15 treni Stadler possono trainare carrozze aggiuntive, come le carrozze panoramiche del Bernina Express.'],
  kennzahlen: [['15', 'treni (3501–3515)'], ['2600 kW', 'potenza (alternata)'], ['100 km/h', 'velocità massima'], ['2010', 'in orario']],
  daten: { 'Bauart': 'elettrotreno bitensione, 3 casse', 'Gewicht': '106 t a vuoto', 'Leistung': '2600 kW (alternata), 2400 kW (continua), alla ruota', 'Sitzplätze': '24 in 1a, 76 in 2a classe, più 14 strapuntini', 'Anzahl': '15 treni' },
  specNote: 'Valori secondo la scheda Stadler SRhBZS1009d. Panoramiche successive indicano valori più alti (2800 kW, 280 kN); senza una scheda più recente qui restano i dati originali.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha consegnato 15 treni. La prima consegna è avvenuta a Landquart il 14 ottobre 2009; il servizio in orario è iniziato nel 2010. L’acquisto è costato circa 150 milioni di franchi.', 'Ogni treno porta il nome di una personalità grigionese.'],
        tabelle: { kopf: ['Treno', 'Nome', 'Treno', 'Nome'], zeilen: [
          ['3501', 'Willem Jan Holsboer', '3509', 'Placidus Spescha'], ['3502', 'Friedrich Hennings', '3510', 'Alberto Giacometti'], ['3503', 'Carlo Janka', '3511', 'Otto Barblan'],
          ['3504', 'Dario Cologna', '3512', 'Jörg Jenatsch'], ['3505', 'Giovanni Segantini', '3513', 'Simeon Bavier'], ['3506', 'Anna von Planta', '3514', 'Steivan Brunies'],
          ['3507', 'Benedetg Fontana', '3515', 'Alois Carigiet'], ['3508', 'Richard Coray', '', '']] } },
      { titel: 'Impiego e tecnica', p: ['Due carrozze di testa motorizzate racchiudono una carrozza rimorchiata; 8 dei 12 assi sono motori. Quattro catene di trazione indipendenti con convertitori IGBT raffreddati ad acqua rendono il treno robusto.', 'Sulla linea del Bernina, l’Allegra traina carrozze aggiuntive su pendenze fino al 70 per mille. Il 20 dicembre 2010 il treno 3502 ha raggiunto 145 km/h nella galleria della Vereina, un record per lo scartamento metrico.'] },
      { titel: 'Dotazione e accessibilità', liste: ['100 posti a sedere: 24 in 1a e 76 in 2a classe, più 14 strapuntini', '2 posti per sedie a rotelle, toilette chiusa accessibile e predellino scorrevole', 'Accesso a pianale ribassato nella parte centrale (480 mm); il resto del pavimento è rialzato', 'Climatizzazione e informazione ai viaggiatori su schermi', 'Vista in avanti dalla 1a classe dietro la cabina'] }
    ],
  bilder: ['Allegra con un treno regionale tra Bernina Lagalb e Ospizio Bernina (2011)', 'Allegra 3504 a Coira (2022)', 'Allegra presso Alp Grüm (2024)']
});
uebZug('rhb-allegra-stz', {
  typ: 'Elettrotreno a quattro casse della rete principale per la S-Bahn di Coira',
  text: ['I cinque Allegra 3101–3105 a quattro casse derivano dall’Allegra bitensione. Circolano solo in corrente alternata e hanno una sola carrozza motorizzata.', 'La RhB li impiega soprattutto nel traffico pendolare attorno a Coira.'],
  kennzahlen: [['5', 'treni (3101–3105)'], ['180', 'posti a sedere'], ['100 km/h', 'velocità massima'], ['2013', 'in orario']],
  daten: { 'Bauart': 'elettrotreno a pianale ribassato, 4 casse', 'Länge': '74,75 m tra gli accoppiatori', 'Gewicht': '113 t a vuoto', 'Leistung': '1400 kW massimi alla ruota', 'Höchstgeschwindigkeit': '100 km/h (tecnicamente 120 km/h)', 'Sitzplätze': '24 in 1a, 156 in 2a classe, più 22 strapuntini', 'Anzahl': '5 treni' },
  specNote: 'Valori secondo la scheda Stadler SRhBSN0910d. La pagina pubblicitaria della RhB indica 140 t senza riferimento chiaro e 1160 kW di potenza continua.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha costruito i cinque treni derivandoli dall’Allegra bitensione. Secondo il costruttore circolano in orario dal 2013; alcune carrozze sono state costruite prima.', 'I treni si chiamano 3101 «Meta von Salis», 3102 «Richard La Nicca», 3103 «Hortensia von Gugelberg», 3104 «Achilles Schucan» e 3105 «Angelika Kauffmann». Nonostante la stessa designazione ABe 4/16 non sono Capricorn.'] },
      { titel: 'Impiego e tecnica', p: ['Una motrice traina due carrozze intermedie a pianale ribassato e una carrozza pilota. Due catene di trazione ridondanti con convertitori IGBT raffreddati ad acqua erogano fino a 1400 kW.', 'La RhB li impiega nel traffico pendolare dell’agglomerato di Coira, per esempio sulla S-Bahn Coira–Thusis. Alcune foto li mostrano anche in Engadina.'] },
      { titel: 'Dotazione e accessibilità', liste: ['180 posti a sedere: 24 in 1a e 156 in 2a classe, più 22 strapuntini', 'Accesso a pianale ribassato di 480 mm, porte larghe 1,2 m', 'Zona per sedie a rotelle, spazio multifunzionale e toilette chiusa accessibile', 'Climatizzazione e informazione ai viaggiatori su schermi'] }
    ],
  bilder: ['Allegra 3104 come S-Bahn Coira–Thusis presso Felsberg (2015)', 'Allegra 3101 a Samedan (2021)', '1a classe dell’Allegra 3103 (2016)']
});
uebZug('rhb-alvra', {
  beiname: 'treni articolati 5701–5706',
  typ: 'Treni articolati trainati per la linea dell’Albula',
  text: ['I sei treni Alvra sono composti da carrozze articolate accoppiate in modo fisso. Non hanno trazione propria; li traina una locomotiva.', 'Dal 2016 circolano sulla linea dell’Albula tra Coira e St. Moritz. «Alvra» è il nome romancio dell’Albula.'],
  kennzahlen: [['6', 'treni (5701–5706)'], ['280', 'posti a sedere'], ['4', 'posti per sedie a rotelle'], ['2016', 'in servizio']],
  daten: { 'Bauart': 'treno articolato di 6 carrozze, più una carrozza pilota', 'Antrieb': 'nessuna trazione propria (locomotiva)', 'Fahrzeugnummern': '5701–5706; carrozze pilota At 57801–57806', 'Sitzplätze': '63 in 1a, 217 in 2a classe, più 13 strapuntini', 'Anzahl': '6 treni' },
  specNote: 'Posti secondo la pagina del progetto RhB; valgono per il treno descritto e cambiano con carrozze aggiuntive.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['I treni Alvra 5701–5706 sono composti dalle carrozze articolate A 570, AB 572, B 573, B 574, Bi 576 e B 577. Si aggiungono le carrozze pilota At 57801–57806, con cui il treno inverte la marcia senza che la locomotiva debba manovrare.', 'Le carrozze aggiuntive sono veicoli distinti. Dal 2024 circolano con loro le carrozze per bici BD 56401–56406, trasformate da vecchie carrozze pilota.'] },
      { titel: 'Impiego e tecnica', p: ['I treni circolano dal 2016 sulla linea dell’Albula Coira–St. Moritz e sono trainati da una locomotiva di linea della RhB.', 'In un treno articolato, carrozze corte sono unite in modo fisso. Alcune carrozze hanno una parte a pianale ribassato per l’accesso senza gradini.'] },
      { titel: 'Dotazione e accessibilità', liste: ['280 posti a sedere: 63 in 1a e 217 in 2a classe, più 13 strapuntini', 'Accessi a pianale ribassato con predellino scorrevole, 4 posti per sedie a rotelle e toilette accessibili', 'Climatizzazione e informazione ai viaggiatori', 'Compartimento famiglie con angolo giochi, compartimento tempo libero per attrezzature sportive e compartimento foto con grandi finestrini'],
        tabelle: { kopf: ['Carrozza', 'Funzione'], zeilen: [
          ['A 570', 'carrozza di testa 1a classe con toilette'], ['AB 572', 'carrozza 1a e 2a classe'], ['B 573, B 574', '2a classe con spazio per bici o passeggini'],
          ['Bi 576', 'carrozza di testa 2a classe, pianale ribassato, zona sedie a rotelle, toilette accessibile e compartimento foto'], ['B 577', '2a classe con compartimento famiglie e tempo libero e angolo giochi'],
          ['At 578', 'carrozza pilota 1a classe, pianale ribassato, zona sedie a rotelle e toilette accessibile']] } }
    ],
  bilder: ['Treno Alvra tra Filisur e Alvaneu (2023)', 'Interno di un treno articolato Alvra (2017)', 'Angolo giochi del compartimento tempo libero (2024)', 'Carrozza pilota At 578 di un treno Alvra (2018)']
});
uebZug('rhb-ge44ii', {
  typ: 'Locomotiva elettrica di linea per treni viaggiatori e merci',
  text: ['Per decenni le Ge 4/4 II hanno caratterizzato il traffico sulla rete principale della RhB. SLM e BBC costruirono le 23 locomotive nel 1973 e nel 1984/85.', 'Trainano treni viaggiatori e merci. Dal 2019 alcune sono state ritirate.'],
  kennzahlen: [['23', 'locomotive costruite (611–633)'], ['1700 kW', 'potenza oraria'], ['90 km/h', 'velocità massima'], ['1973', 'prima serie']],
  daten: { 'Bauart': 'locomotiva elettrica', 'Länge': '12,96 m respingenti compresi', 'Leistung': '1700 kW (potenza oraria)', 'Anzahl': '23 costruite' },
  specNote: 'La pagina pubblicitaria della RhB indica 1700 kW come potenza continua, Wikipedia come potenza oraria. Delle 23 locomotive, diverse sono già state demolite (628, 619, 616, 613).',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM costruì le parti meccaniche, BBC l’equipaggiamento elettrico. La prima serie 611–620 arrivò nel 1973, la seconda serie 621–633 nel 1984/85.', 'Le locomotive portano nomi di comuni grigionesi, per esempio 611 «Landquart» o 633 «Zuoz». Da aprile 2024 la 611 circola di nuovo nel verde originale.'] },
      { titel: 'Impiego e tecnica', p: ['Le Ge 4/4 II trainano treni regionali e veloci e treni merci sulla rete in corrente alternata della RhB, anche sulla linea di Arosa. Con le carrozze pilota BDt 1751 e 1752 circolano anche come treni navetta.', 'Quattro motori di trazione erogano 1700 kW. La locomotiva è lunga 12,96 m, pesa 50 t e viaggia fino a 90 km/h. Dal 2016 ricevono il sistema di sicurezza ZSI 127 e un freno doppio. Dal 2019 sono state demolite le 628, 619, 616 e 613.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Freno elettrico reostatico', 'Servizio navetta con le carrozze pilota BDt 1751 e 1752', 'Dal 2016: sistema ZSI 127 e freno doppio'] }
    ],
  bilder: ['Ge 4/4 II 617 a Filisur (2022)', 'Ge 4/4 II 611 «Landquart» in livrea verde a Disentis/Mustér (2024)', 'Ge 4/4 II 622 (2024)']
});
uebZug('rhb-ge44iii', {
  typ: 'Locomotiva elettrica di linea per l’Albula e la Vereina',
  text: ['Le Ge 4/4 III sono le locomotive di linea più potenti della RhB. Le dodici locomotive 641–652 arrivarono dal 1993 al 1999; la 653 è un’ex locomotiva della MOB.', 'Quasi tutte portano una pubblicità colorata. Trainano i treni veloci sull’Albula e i treni auto nella galleria della Vereina.'],
  kennzahlen: [['13', 'locomotive (641–653)'], ['2400 kW', 'potenza continua'], ['100 km/h', 'velocità massima'], ['1993', 'prima locomotiva']],
  daten: { 'Bauart': 'locomotiva elettrica a motori trifase', 'Fahrzeugnummern': '641–652, più 653 (ex MOB 8003)', 'Länge': '16,00 m respingenti compresi', 'Leistung': '2400 kW continui' },
  specNote: 'Valori secondo la pagina pubblicitaria della RhB e Wikipedia. La 653 è stata costruita come MOB 8003; costruzione, acquisto, trasformazione e messa in servizio alla RhB sono eventi distinti.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Dal 1989 la RhB sviluppò la locomotiva con SLM e ABB per assorbire il traffico aggiuntivo dopo l’apertura della galleria della Vereina. La 641 circolò dal 7 dicembre 1993, le 642–652 seguirono fino al 1999 in tre ordinazioni; le 650–652 furono fornite da Adtranz.', 'Nel 2019 la RhB acquistò la locomotiva 8003 della MOB. Servì da modello per l’ammodernamento e circola come 653 «St. Moritz».'] },
      { titel: 'Impiego e tecnica', p: ['Le locomotive trainano i treni veloci sull’Albula, il Glacier Express e i treni auto nella galleria della Vereina. Motori trifase con convertitori GTO erogano 2400 kW in continuo.', 'La locomotiva è lunga 16,00 m, pesa 62 t e viaggia fino a 100 km/h. Dal 2016 sono in corso di ammodernamento; la 644 è stata la prima, con freno doppio, nuovi carrelli e componenti per il sistema ZSI 127.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Trazione trifase con quattro motori', 'Ammodernamento dal 2016: freno doppio, nuovi carrelli, ZSI 127', 'La pubblicità è la decorazione di singole locomotive, non un tipo a sé'] }
    ],
  bilder: ['Ge 4/4 III 641 «Maienfeld» (2023)', 'Ge 4/4 III 644 con la pubblicità del record mondiale (2023)', 'Ge 4/4 III 647 «Grüsch» a St. Moritz (2018)']
});
uebZug('rhb-panorama', {
  name: 'Carrozze panoramiche e scoperte',
  typ: 'Carrozze panoramiche del Bernina Express e carrozze scoperte',
  text: ['Per il Bernina Express la RhB ha carrozze panoramiche proprie con grandi finestrini fino al tetto. A queste si aggiungono carrozze scoperte per l’estate.', 'Le carrozze non hanno trazione propria; le traina un Allegra o una locomotiva.'],
  kennzahlen: [['2000', 'prime carrozze panoramiche'], ['2006/07', 'carrozze Stadler'], ['1a e 2a', 'classe'], ['scoperte', 'carrozze estive']],
  daten: { 'Bauart': 'carrozze panoramiche e carrozze scoperte', 'Fahrzeugnummern': 'Ap 1291–1293, 1301–1306; Bp 2502–2507, 2521–2526; Bps 2511–2515; carrozze scoperte B 2091 segg. e 2111' },
  specNote: 'Numeri secondo il registro delle carrozze di Haribu (stato settembre 2026). Il numero di posti dipende dalla versione e non è indicato senza un piano attuale della carrozza.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le prime carrozze panoramiche sono state costruite nel 2000. Nel 2006/07 Stadler ha consegnato altre carrozze di 1a e 2a classe. Le carrozze di servizio Bps 2511–2515 derivano in parte da carrozze più vecchie.'],
        tabelle: { kopf: ['Gruppo', 'Numeri', 'Costruzione'], zeilen: [
          ['Carrozza panoramica 1a classe', 'Ap 1291–1293', '2000'], ['Carrozza panoramica 1a classe', 'Ap 1301–1306', '2006/07 (Stadler)'], ['Carrozza panoramica 2a classe', 'Bp 2502–2507', '2000'],
          ['Carrozza di servizio 2a classe', 'Bps 2511–2515', '2511 dalla carrozza 2501, le altre 2006/07'], ['Carrozza panoramica 2a classe', 'Bp 2521–2526', '2006/07 (Stadler)']] } },
      { titel: 'Impiego e tecnica', p: ['Il Bernina Express collega Coira con Tirano attraverso l’Albula e il passo del Bernina. Il nome indica il treno e non una serie di veicoli; sulla linea del Bernina le carrozze sono spesso trainate da un Allegra.', 'Le carrozze scoperte dei gruppi 2091 segg. e 2111 derivano dalla trasformazione di carrozze più vecchie. Circolano d’estate, per esempio sulla linea del Bernina e nella gola del Reno.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Grandi finestrini panoramici fino al tetto', 'Carrozze di servizio con disposizione propria', 'Carrozze scoperte senza finestrini per l’estate', 'Nessuna trazione propria'] }
    ],
  bilder: ['Bernina Express con carrozze panoramiche (2018)', 'Carrozza panoramica ad Alp Grüm', 'Carrozza scoperta a Pontresina']
});
uebZug('rhb-glacier', {
  name: 'Carrozze del Glacier Express',
  typ: 'Carrozze panoramiche e di servizio della RhB per il Glacier Express',
  text: ['Il Glacier Express collega St. Moritz e Davos con Zermatt. La RhB fornisce proprie carrozze panoramiche e di servizio, la MGB altre.', 'Dal 2018 esiste la carrozza Excellence Class Aps 1321.'],
  kennzahlen: [['6', 'carrozze panoramiche Ap 1310–1315'], ['7', 'carrozze panoramiche Bp 2531–2537'], ['3', 'carrozze di servizio WRp 3830–3832'], ['2018', 'Excellence Class']],
  daten: { 'Bauart': 'carrozze panoramiche e carrozze di servizio', 'Betreiber': 'RhB (Glacier Express insieme alla MGB)' },
  specNote: 'Numeri secondo i registri di Haribu. Le carrozze della MGB sono veicoli distinti e non sono contate qui.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La quota della RhB comprende le carrozze panoramiche Ap 1310–1315 e Bp 2531–2537 e le carrozze di servizio WRp 3830–3832.', 'La carrozza Excellence Class Aps 1321 deriva dalla Bp 2538 del 2009 ed è stata trasformata nel 2018. È quindi la stessa carrozza, non una in più.'] },
      { titel: 'Impiego e tecnica', p: ['Le carrozze circolano nel Glacier Express sulle reti della RhB e della MGB. Poiché la MGB ha tratte a cremagliera, le carrozze sono equipaggiate di conseguenza; secondo la descrizione di una foto, la carrozza di servizio WRp 3832 non ha ruota dentata di frenatura.', 'Un Glacier Express composto da due convogli viene separato a Disentis/Mustér, perché sulle tratte a cremagliera della MGB vale un peso del treno minore.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Finestrini panoramici fino al tetto', 'Carrozze di servizio WRp per la ristorazione a bordo', 'Excellence Class nell’Aps 1321', 'Nessuna trazione propria'] }
    ],
  bilder: ['Glacier Express nella gola del Reno prima di Ilanz (2009)', 'Carrozza di servizio WRp 3832 del Glacier Express a Disentis/Mustér (2022)']
});
uebZug('rhb-ew', {
  name: 'Carrozze unificate',
  typ: 'Carrozze viaggiatori della RhB per treni regionali e veloci',
  text: ['Le carrozze unificate EW I–EW IV sono le classiche carrozze viaggiatori della RhB. Sono state costruite dagli anni 1960 in più generazioni.', 'Ogni generazione comprende carrozze di lunghezza, classe e stato di trasformazione diversi.'],
  kennzahlen: [['4', 'generazioni (EW I–IV)'], ['1968', 'EW I (AB 1541–1546)'], ['1975', 'EW II (AB 1561–1565)'], ['1983', 'EW III']],
  daten: { 'Bauart': 'carrozze viaggiatori a carrelli', 'Fahrzeugnummern': 'Esempi: AB 1541–1546 (EW I), AB 1561–1565 (EW II), A 1271–1272 e B 2461–2468 (EW III), A 1273–1275 e B 2491–2497 (EW IV)' },
  specNote: 'I registri indicano soprattutto numeri, anni di costruzione, carrelli e freni. Posti e dotazione dipendono dalla singola carrozza e non sono quindi indicati.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le famiglie EW I–EW IV sono gruppi di sviluppo. Esempi dal registro:'],
        tabelle: { kopf: ['Generazione', 'Esempi', 'Costruzione', 'Carrello'], zeilen: [
          ['EW I', 'AB 1541–1546', '1968', 'SWP 68'], ['EW II', 'A 1265–1270, AB 1561–1565', '1975 (AB 1561–1565)', 'SWP 74'],
          ['EW III', 'A 1271–1272, B 2461–2468', '1983', '–'], ['EW IV', 'A 1273–1275, A 1282–1283, B 2391–2393, B 2491–2497', '–', 'SIG 90']] } },
      { titel: 'Impiego e tecnica', p: ['Le carrozze unificate circolano in treni regionali e veloci trainati su tutta la rete, sulla linea del Bernina anche dietro l’Allegra. Le AB 1541–1546 hanno un freno ad aria compressa comandato dal vuoto: un segnale di vuoto comanda il freno, la forza frenante è prodotta dall’aria compressa.', 'Alcune EW III hanno portato temporaneamente numeri a cinque cifre delle serie 531 e 541 prima di riprendere i vecchi numeri. Alcune EW IV portano la decorazione «Arosa Bärenland».'] },
      { titel: 'Dotazione e accessibilità', liste: ['Carrozze di 1a classe (A), di 2a classe (B) e miste (AB)', 'Dotazione diversa secondo generazione e trasformazione', 'Alcune EW I sono state trasformate nel 2002', 'Nessuna trazione propria'] }
    ],
  bilder: ['Treno 1621 con l’Allegra 3515 e carrozze viaggiatori sulla linea del Bernina (2017)']
});
uebZug('rhb-steuerwagen', {
  name: 'Carrozze pilota', beiname: 'BDt, Bt e At',
  typ: 'Carrozze pilota per treni navetta con locomotiva',
  text: ['Con una carrozza pilota un treno trainato può invertire la marcia senza che la locomotiva debba manovrare. Il macchinista comanda la locomotiva dalla cabina della carrozza pilota.', 'La RhB ha diverse famiglie: le carrozze pilota NEVA BDt, le Bt 52801–52808 di Stadler, quelle dei treni Alvra e quelle dei treni auto.'],
  kennzahlen: [['8', 'Bt 52801–52808 (Stadler 2018)'], ['6', 'At 57801–57806 (Alvra)'], ['2', 'BDt 1751–1752 (NEVA)'], ['4', 'BDt dei treni auto']],
  daten: { 'Bauart': 'carrozza pilota senza trazione propria', 'Fahrzeugnummern': 'BDt 1751–1752, Bt 52801–52808, At 57801–57806, BDt 1721–1723 e 1731' },
  specNote: 'Secondo il registro delle carrozze pilota di Haribu (stato 11 settembre 2026). Le carrozze pilota degli elettrotreni Allegra e Capricorn fanno parte di quei treni.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le carrozze pilota NEVA BDt 1753–1758 sono state trasformate nel 2024 nelle carrozze per bici BD 56401–56406.'],
        tabelle: { kopf: ['Famiglia', 'Numeri', 'Nota'], zeilen: [
          ['NEVA', 'BDt 1751–1752', 'per Ge 4/4 II ed elettrotreni'], ['Universale', 'Bt 52801–52808', 'Stadler 2018'], ['Alvra', 'At 57801–57806', 'per i treni articolati 5701–5706'],
          ['Treni auto Vereina', 'BDt 1721–1723, 1731', 'per il trasporto auto'], ['Treno navetta Be 4/4', 'ABDt 1716', 'accantonata']] } },
      { titel: 'Impiego e tecnica', p: ['La carrozza pilota ha una cabina ma nessun motore di trazione. La potenza viene dalla locomotiva all’altra estremità del treno.', 'Secondo il registro, le BDt 1751 e 1752 sono adatte alle Ge 4/4 II e agli elettrotreni. Una tale abilitazione vale solo per la combinazione indicata.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Cabina di guida a un’estremità', 'BDt: 2a classe con compartimento bagagli', 'At dei treni Alvra: 1a classe, pianale ribassato, zona sedie a rotelle e toilette accessibile', 'Nessuna trazione propria'] }
    ],
  bilder: ['Carrozza pilota Bt 528 di Stadler', 'Carrozza pilota NEVA BDt 1755 a Coira (2015)']
});
uebZug('rhb-gastro', {
  name: 'Carrozze ristorante e salone', beiname: 'WR e Pullman',
  typ: 'Carrozze ristorante, bar, Pullman e salone della RhB',
  text: ['La RhB possiede carrozze ristorante storiche, carrozze bar e le carrozze Pullman dell’«Alpine Classic Pullman Express». Circolano in treni charter e in corse speciali.', 'Alcune carrozze ristorante risalgono al 1929–1931.'],
  kennzahlen: [['1929', 'carrozze ristorante più antiche'], ['4', 'carrozze Pullman As 1141–1144'], ['3', 'carrozze ristorante WR 3810–3812'], ['2', 'carrozze bar WR-S 3820–3821']],
  daten: { 'Bauart': 'carrozze ristorante, bar e salone' },
  specNote: 'Secondo il registro delle carrozze ristorante di Haribu (stato 13 dicembre 2025). La dotazione vale per la singola carrozza; la disponibilità attuale per charter non è indicata.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Secondo il registro, l’As 1154 è in prestito al Deutsches Museum.'],
        tabelle: { kopf: ['Carrozza', 'Costruzione', 'Nota'], zeilen: [
          ['WR 3810–3812', '1929/30', 'carrozze ristorante storiche'], ['WR 3813', '1931', 'trasformata dall’A 1211'], ['WR 3815', '1984', 'carrozza ristorante'],
          ['WR-S 3820', '1928', 'piano bar, trasformata nel 2010 (prima WR-S 3814)'], ['WR-S 3821', '1929', '«Stiva Retica», trasformata nel 1993'],
          ['As 1141–1144', '1931', 'carrozze Pullman'], ['As 1161', '1929', 'carrozza salone']] } },
      { titel: 'Impiego e tecnica', p: ['Le carrozze Pullman As 1141–1144 circolano nell’«Alpine Classic Pullman Express», per esempio nel 2024 con la storica Ge 4/4 I 605. Le carrozze ristorante viaggiano in treni speciali e charter.', 'Le carrozze di servizio WRp 3830–3832 del Glacier Express sono veicoli più recenti e non carrozze ristorante storiche.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Cucina e sala da pranzo nelle WR', 'Piano bar nella WR-S 3820, bar «Stiva Retica» nella WR-S 3821', 'Compartimenti salone di 1a classe nelle carrozze Pullman', 'Nessuna trazione propria'] }
    ],
  bilder: ['Carrozza Pullman As 1141 a Pontresina (2011)', 'Carrozza ristorante WR 3810 (2009)', 'Nella carrozza ristorante WR 3810 (2014)']
});
uebZug('rhb-vereina', {
  name: 'Treni auto',
  typ: 'Trasporto auto attraverso la galleria della Vereina',
  text: ['Dal 1999 la RhB trasporta automobili attraverso la galleria della Vereina tra Klosters Selfranga e Sagliains in Bassa Engadina.', 'I treni auto sono composti da speciali carri di trasporto su cui le auto salgono da sole e da carrozze pilota.'],
  kennzahlen: [['1999', 'apertura'], ['19 km', 'lunghezza della galleria'], ['4', 'carrozze pilota BDt'], ['2', 'stazioni di carico']],
  daten: { 'Bauart': 'carri per il trasporto auto e carrozze pilota', 'Fahrzeugnummern': 'Skl-tv 8421–8499 (più vecchi), Slp-tvw 71201 segg. e 71301 segg., Slp-tv 71401 segg.; BDt 1721–1723, 1731' },
  specNote: 'Secondo i registri di Haribu. Le serie più recenti contengono anche voci senza anno di costruzione; qui non sono contate come completamente consegnate.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Per il trasporto auto nella galleria della Vereina, aperta nel 1999, la RhB ha acquistato carri speciali. I vecchi carri di carico e trasporto si chiamano Skl-tv (gruppi 8421–8499), gli elementi più recenti Slp-tvw 71201 segg. e 71301 segg. e Slp-tv 71401 segg.', 'Le carrozze pilota BDt 1721–1723 e 1731 fanno parte dei treni auto.'] },
      { titel: 'Impiego e tecnica', p: ['I treni auto fanno la spola tra Klosters Selfranga e Sagliains. Nelle stazioni di carico le auto salgono sui carri tramite rampe e scendono all’altra estremità.', 'Una locomotiva, di solito una Ge 4/4 III, traina o spinge il treno; all’altra estremità c’è una carrozza pilota.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Carri piatti su cui salgono le auto', 'Rampe nelle stazioni di carico di Klosters Selfranga e Sagliains', 'Carrozza pilota con cabina', 'I viaggiatori restano nelle loro auto durante il viaggio'] }
    ],
  bilder: ['Interno di un carro di trasporto del treno auto della Vereina', 'Treno auto a Sagliains (2014)']
});
uebZug('rhb-gepaeckwagen', {
  name: 'Bagagliai, carrozze per bici e di riscaldamento',
  typ: 'Carrozze per bagagli, bici e riscaldamento dei treni',
  text: ['La RhB ha carrozze proprie per i bagagli, le bici e il riscaldamento dei treni. La maggior parte deriva dalla trasformazione di vecchie carrozze viaggiatori.', 'Una carrozza di riscaldamento fornisce energia al treno, ma non si muove da sola.'],
  kennzahlen: [['6', 'carrozze per bici BD 56401–56406 (2024)'], ['8', 'carrozze per bici WS'], ['3', 'carrozze di riscaldamento DS'], ['2024', 'trasformazione più recente']],
  daten: { 'Bauart': 'bagagliai, carrozze per bici e di riscaldamento' },
  specNote: 'Secondo i registri di Haribu. L’anno di trasformazione non è l’anno di costruzione della carrozza originale.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le BD 2471–2474 sono EW II trasformate, la BD 2475 una EW IV trasformata, la BD 2481 deriva dal DZ 4233. Le sei BD 56401–56406 sono state trasformate nel 2024 dalle carrozze pilota NEVA BDt 1753–1758 e circolano come carrozze per bici nei treni Alvra.', 'Anche le carrozze per bici WS 3911–3914, 3921–3922 e 3931–3932 sono vecchie carrozze viaggiatori trasformate.'] },
      { titel: 'Impiego e tecnica', p: ['Una BD ha posti di 2a classe e un compartimento bagagli. Le WS sono attrezzate per le bici.', 'Le carrozze di riscaldamento DS 4220, 4222 e 4226 forniscono energia per riscaldare i treni. Non hanno trazione propria.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Compartimento bagagli (BD)', 'Posti per bici (WS)', 'Energia per il riscaldamento del treno (DS)', 'Nessuna trazione propria'] }
    ],
  bilder: ['Nella carrozza per bici WS 3913 (2014)']
});

/* ---------- merci ---------- */
uebZug('rhb-haik', {
  beiname: 'carri a pareti scorrevoli',
  typ: 'Carri a quattro assi a pareti scorrevoli per merci varie',
  text: ['I carri Haik hanno grandi pareti laterali scorrevoli. Si caricano e scaricano così rapidamente.', 'Alcuni gruppi sono isolati, riscaldati o refrigerati, per esempio per alimenti e bevande.'],
  kennzahlen: [['26 t', 'portata (5101–5135)'], ['30 t', 'portata (dal 5136)'], ['14,7 m', 'lunghezza'], ['1970', 'primi carri']],
  daten: { 'Bauart': 'carro a quattro assi a pareti scorrevoli', 'Fahrzeugnummern': '5101–5135 (Haik-v, Haik-vy), 5136–5140 e 5171–5172; carri isolati 5161 segg.', 'Länge': '14,70 m respingenti compresi', 'Gewicht': '13,2–17,3 t a vuoto', 'Nutzlast': '26 o 30 t' },
  specNote: 'Valori secondo la pagina dei carri merci della RhB. Solo alcuni carri hanno isolamento, riscaldamento a pavimento o gruppo frigorifero; fa fede il singolo carro.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La RhB descrive due gruppi principali e inoltre carri isolati e termoregolati.'],
        tabelle: { kopf: ['Gruppo', 'In servizio', 'Tara', 'Portata', 'Lunghezza'], zeilen: [
          ['5101–5135 (Haik-v, Haik-vy)', '1970/80', '13,2–15,5 t', '26 t', '14,70 m'], ['5136–5140, 5171–5172', '1992', '16,1–17,3 t', '30 t', '14,67 m'],
          ['5161 segg. (isolati, termoregolati)', '–', '–', '–', '–']] } },
      { titel: 'Impiego e tecnica', p: ['I carri portano merci varie, bevande e alimenti nelle valli grigionesi. Molti portano la pubblicità di un cliente; ciò non implica una particolare tecnica di refrigerazione.', 'Alcuni vecchi carri Haik sono stati trasformati in carri portacontainer.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Grandi pareti laterali scorrevoli', 'Carri isolati con riscaldamento a pavimento o gruppo frigorifero (5161 segg.)', 'Quattro assi su due carrelli'] }
    ],
  bilder: ['Carro a pareti scorrevoli Haik-v 5134 a Zernez (2015)', 'Haiqq-tyz 5172 a Ilanz (2013)']
});
uebZug('rhb-uac', {
  beiname: 'carri per cemento',
  typ: 'Carri a quattro assi per merci polverulente (cemento)',
  text: ['Gli Uac 7991–8000 trasportano cemento e altre merci polverulente in serbatoi chiusi. Si scaricano ad aria compressa.', 'Sono entrati in servizio nel 1991.'],
  kennzahlen: [['10', 'carri (7991–8000)'], ['34 t', 'portata'], ['34 m³', 'serbatoio'], ['1991', 'in servizio']],
  daten: { 'Bauart': 'carro a quattro assi per merci polverulente', 'Länge': '12,54 m respingenti compresi', 'Gewicht': '16,8 t a vuoto' },
  specNote: '34 t e 34 m³ sono due grandezze diverse; il peso di un carico dipende dalla sua densità.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['I dieci Uac 7991–8000 sono entrati in servizio nel 1991. Una generazione più vecchia a due assi figura ancora nel registro con l’Uce 8017 del 1959, dato in prestito al Museo Svizzero dei Trasporti nel 2023.'] },
      { titel: 'Impiego e tecnica', p: ['Il cemento viaggia in serbatoi chiusi e viene scaricato ad aria compressa, cioè soffiato fuori dal serbatoio.', 'Il carro è lungo 12,54 m, pesa 16,8 t a vuoto e porta fino a 34 t.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Serbatoi chiusi per merci polverulente', 'Scarico ad aria compressa', 'Quattro assi'] }
    ]
});
uebZug('rhb-za', {
  beiname: 'carri cisterna',
  typ: 'Carri cisterna a quattro assi per oli minerali',
  text: ['I carri cisterna Za portano olio combustibile e carburanti nei Grigioni. La RhB ne ha diversi gruppi con cisterna da 42 o 52 m³.', 'Su alcuni carri più vecchi la cisterna è stata sostituita.'],
  kennzahlen: [['52 m³', 'cisterna più grande'], ['42 m³', 'cisterna più piccola'], ['1973', 'serie di base più vecchia'], ['2005', 'gruppo più recente']],
  daten: { 'Bauart': 'carro cisterna a quattro assi', 'Fahrzeugnummern': '8105–8113, 8121–8130, 8131–8140, 8141–8150 (gruppi originali)', 'Volumen': '42 o 52 m³' },
  specNote: 'Confronto delle serie secondo la pagina dei carri merci della RhB, non un elenco dei carri oggi in servizio. Volume della cisterna, grado di riempimento e densità del prodotto sono grandezze diverse.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Il registro più recente indica solo una parte di queste serie.'],
        tabelle: { kopf: ['Gruppo', 'Costruzione / entrata in servizio', 'Cisterna', 'Lunghezza'], zeilen: [
          ['8105–8113', '2002/03', '42 m³', '13,88 m'], ['8121–8130', '1998', '52 m³', '12,54 m'],
          ['8131–8140', '1973, in parte nuova cisterna 1996/97', '42 m³', '11,04 m'], ['8141–8150', '2004/05', '52 m³', '12,54 m']] } },
      { titel: 'Impiego e tecnica', p: ['I carri riforniscono i Grigioni di oli minerali. Alcuni hanno una condotta di ritorno dei vapori che li recupera durante il riempimento.', 'Una nuova cisterna su un vecchio telaio non fa un carro nuovo; l’anno del telaio e quello della cisterna sono dati distinti.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Cisterna da 42 o 52 m³', 'Condotta di ritorno dei vapori su alcuni carri', 'Quattro assi'] }
    ],
  bilder: ['Carro cisterna della RhB a Samedan (2006)']
});
uebZug('rhb-fac', {
  beiname: 'carri per materiale sfuso',
  typ: 'Carri a quattro assi per materiale sfuso con scarico a gravità',
  text: ['I carri Fac trasportano ghiaia, pietrisco e altri materiali sfusi in tramogge. Si scaricano dal basso; la quantità si può dosare.', 'I vecchi carri ribaltabili Fau servono oggi per il pietrisco usato nei lavori al binario.'],
  kennzahlen: [['21–22 m³', 'tramoggia'], ['34 t', 'portata (fino a)'], ['1968', 'gruppo più vecchio'], ['1993', 'gruppo più recente']],
  daten: { 'Bauart': 'carro a quattro assi per materiale sfuso', 'Nutzlast': '33 o 34 t secondo il gruppo' },
  specNote: 'Valori secondo la pagina dei carri merci della RhB e il registro F di Haribu.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Il registro contiene i gruppi più vecchi 8701–8712 del 1968/71 e quelli più recenti 8726 segg. del 1988/93.', 'I vecchi Fau 8761–8770 con funzione ribaltabile figurano oggi nel registro dei carri di servizio come Xa-u per il pietrisco usato.'] },
      { titel: 'Impiego e tecnica', p: ['Le tramogge contengono da 21 a 22 m³. In basso si aprono delle botole e il carico scende per gravità in modo dosato.', 'Secondo il gruppo, i carri portano 33 o 34 t.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Tramoggia da 21–22 m³', 'Scarico a gravità dosabile', 'Quattro assi'] }
    ],
  bilder: ['Ex carro ribaltabile Fau 8769 a Thusis (2015)']
});
uebZug('rhb-flachwagen', {
  name: 'Carri pianale e a stanti',
  typ: 'Carri pianale per macchine, legname, acciaio e container',
  text: ['I carri pianale e a stanti della RhB trasportano macchine edili, acciaio, materiali da costruzione, legname e container. Gli stanti sostengono il carico lateralmente.', 'I più recenti sono i versatili Re-t 65401–65410 del 2010.'],
  kennzahlen: [['46 t', 'portata Re-t'], ['16,5 m', 'lunghezza'], ['10', 'Re-t 65401–65410'], ['2010', 'Re-t in servizio']],
  daten: { 'Bauart': 'carri pianale e a stanti a quattro assi' },
  specNote: 'Esempi secondo la pagina dei carri pianale della RhB, non un inventario completo. Per i Sgp le pagine della RhB indicano 19,5 e 20 t di tara; divergono anche sull’altezza delle sponde dei Re-t.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['I Re-t 65401–65410 sono entrati in servizio nel 2010, i Sgp 7601–7610 nel 2008.'],
        tabelle: { kopf: ['Gruppo', 'Lunghezza respingenti compresi', 'Portata'], zeilen: [
          ['R 8202–8218', '16,54 m', '33 t'], ['R 8241–8250', '16,14 m', '35 t'], ['R 8261–8270', '16,14 m', '35 t'], ['R 8371–8375', '16,54 m', '42 t'],
          ['R 8381–8385', '16,54 m', '43 t'], ['Re-t 65401–65410', '16,54 m', '46 t'], ['Sgp 7601–7610', '16,54 m', '44 t']] } },
      { titel: 'Impiego e tecnica', p: ['I Re-t pesano 18 t a vuoto e offrono 15,5 m di lunghezza di carico. Hanno un pavimento in larice, sponde girevoli e innestabili, stanti e perni per container.', 'I Sp-w sono attrezzati per il legname tondo, con stanti laterali fissi e cinghie. I Sgp portano legname o container.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Stanti e cinghie per il fissaggio del carico', 'Perni per container (Re-t, Sgp)', 'Pavimento in larice (Re-t)', 'Quattro assi'] }
    ]
});
uebZug('rhb-acts', {
  name: 'Carri ACTS', beiname: 'Sl e Rp',
  typ: 'Carri portanti per container a rulli (ACTS)',
  text: ['ACTS è un sistema con cui i camion possono far scorrere i container direttamente dal carro ferroviario. Il carico passa così dal treno alla strada senza gru.', 'Per questo la RhB ha gli Sl 7751–7771 e gli Rp 65301–65305.'],
  kennzahlen: [['21', 'Sl 7751–7771'], ['44 t', 'portata Sl'], ['46,5 t', 'portata Rp'], ['2000', 'Sl in servizio']],
  daten: { 'Bauart': 'carri portanti a quattro assi per container a rulli', 'Gewicht': 'Sl 16 t, Rp 17,5 t (a vuoto)' },
  specNote: 'Valori secondo la pagina della RhB sui container a rulli. Il registro attuale indica gli Rp 65301–65304; la serie originale arriva al 65305.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Gli Sl 7751–7771 sono entrati in servizio nel 2000/01, gli Rp 65301–65305 nel 2008. Anche carri pianale più vecchi come gli 8202–8218 e 8371–8375 portano container ACTS.'] },
      { titel: 'Impiego e tecnica', p: ['Un camion con gancio tira il container dal carro tramite un telaio girevole. Rotaie di scorrimento, arresti e chiusure tengono i container durante il viaggio.', 'Quali container un carro possa portare dipende dal singolo carro.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Rotaie di scorrimento, arresti e chiusure', 'Telai girevoli per lo scarico', 'Quattro assi'] }
    ],
  bilder: ['Carro portante ACTS Sl 7769 a Ilanz (2013)', 'Carro portante ACTS Sl 7753 (2024)']
});
uebZug('rhb-container', {
  name: 'Carri portacontainer', beiname: 'Sb e Lb',
  typ: 'Carri portanti per container e casse mobili',
  text: ['Per container e casse mobili la RhB ha carri a quattro assi con parte centrale ribassata e corti carri portanti a due assi. Il pianale basso sfrutta meglio la sagoma stretta dello scartamento metrico.', 'Molti carri derivano dalla trasformazione di vecchi carri merci.'],
  kennzahlen: [['15,9 m', 'lunghezza Sb'], ['36 t', 'portata (fino a)'], ['615 mm', 'altezza di carico Lb-v'], ['24 t', 'portata Lb-v']],
  daten: { 'Bauart': 'carri portacontainer', 'Fahrzeugnummern': 'Sb-v 7716–7730, Sb 65655–65689, Lb-v (trasformati 1997–2000); altre trasformazioni Sb-x 65601–65603, Sb-v 65691–65694' },
  specNote: 'Valori secondo la pagina della RhB sulle casse mobili. Una parte dei 65665 segg. è stata trasformata in Rlp 65701–65710; la vecchia serie non è quindi il parco attuale.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La RhB confronta tre gruppi di carri ribassati e i corti Lb-v.'],
        tabelle: { kopf: ['Gruppo', 'Lunghezza', 'Portata', 'Nota'], zeilen: [
          ['Sb-v 7716–7730, Sb 65655–65689', '15,91 m', '30 o 36 t', 'parte centrale ribassata'],
          ['Lb-v', '9,14 m', '24 t', 'due assi, telaio del 1963, trasformati 1997–2000']] } },
      { titel: 'Impiego e tecnica', p: ['Nella parte centrale ribassata i container stanno più in basso e passano così sotto la sagoma limitata dello scartamento metrico.', 'Gli Lb-v a due assi pesano 5,7 t a vuoto, sono lunghi 9,14 m e portano 24 t. Il loro pianale è solo 615 mm sopra la rotaia.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Perni per container', 'Pianale ribassato', 'Lb-v a due, Sb a quattro assi'] }
    ],
  bilder: ['Carro portacontainer Sb-v 7729 a Ilanz (2013)', 'Carro portante Lb 7858 a due assi con container (2026)', 'Carro portacontainer Sb 65675 a Ilanz (2013)']
});
uebZug('rhb-spezialtransport', {
  name: 'Carri per trasporti speciali', beiname: 'Uaa-z e Xak',
  typ: 'Carri per carichi pesanti e alti',
  text: ['Per carichi pesanti o alti, come grandi macchine, la RhB ha carri speciali. L’Uaa-z 8251 si compone di ponti di carico e carrelli combinabili.', 'Il carro a piattaforma Xak 93502 ha una rampa mobile.'],
  kennzahlen: [['97 t', 'configurazione massima Uaa-z'], ['417 mm', 'altezza di carico Uaa-z'], ['27 t', 'portata Xak'], ['3,0 m', 'larghezza di carico Uaa-z']],
  daten: { 'Bauart': 'carri per carichi pesanti e carro a piattaforma', 'Fahrzeugnummern': 'Uaa-z 8251; Xak 93502 (prima 91501, dall’Uaik 8301)' },
  specNote: 'Tara e portata dell’Uaa-z dipendono dalla configurazione e non vanno mescolate. Secondo il registro, la configurazione da 97 t non è in servizio.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['L’Uaa-z 8251 risale agli anni 1950; le fonti indicano il 1956 e il 1958. Con un ponte privato per trasporti pesanti e quattro carrelli a tre assi porta fino a 97 t.', 'Il carro a piattaforma si chiamava prima Uaik 8301, poi 91501 e oggi Xak 93502.'] },
      { titel: 'Impiego e tecnica', p: ['Il ponte di carico RhB dell’Uaa-z pesa 10,5 t con le traverse, offre 3,0 m di larghezza e si trova solo 417 mm sopra la rotaia. Nella versione usuale il carro è lungo 15,5 m e porta 42 t.', 'Il carro a piattaforma ha quattro assi, pesa 14,4 t a vuoto, è lungo 12,66 m e porta 27 t. Le macchine salgono dal davanti o di lato tramite una rampa mobile.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Ponti di carico e carrelli combinabili (Uaa-z)', 'Pianale molto basso', 'Rampa mobile (Xak)'] }
    ]
});

/* ---------- manovra ---------- */
uebZug('rhb-geaf22', {
  typ: 'Locomotiva da manovra con linea di contatto e batteria',
  text: ['Le sette Geaf 2/2 di Stadler manovrano elettricamente sotto la linea di contatto e con la batteria sui binari senza linea. La batteria si ricarica sotto la linea di contatto.', 'Sono entrate in servizio nel 2020.'],
  kennzahlen: [['7', 'locomotive (20601–20607)'], ['700 kW', 'potenza (linea di contatto)'], ['93 kWh', 'batteria'], ['2020', 'in servizio']],
  daten: { 'Bauart': 'locomotiva da manovra a due assi con linea di contatto e batteria', 'Stromsystem': '11 kV 16,7 Hz e batteria', 'Länge': '8,41 m tra i respingenti centrali (9,61 m con accoppiatore da manovra)', 'Leistung': '700 kW sotto la linea di contatto, 200 kW a batteria', 'Höchstgeschwindigkeit': '80 km/h (linea di contatto), 40 km/h (batteria)' },
  specNote: 'Valori secondo la scheda Stadler LRHB0720d, peso secondo Wikipedia. 93 kWh è l’energia accumulata nella batteria, 200 kW la potenza; un’autonomia fissa non si può calcolare.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La RhB ha ordinato le sette locomotive a Stadler nel settembre 2018; sono entrate in servizio nel 2020. Sono stazionate tra l’altro a Landquart, Coira, Ilanz, Thusis, Davos Platz e Zernez.'] },
      { titel: 'Impiego e tecnica', p: ['Sotto la linea di contatto la locomotiva eroga fino a 700 kW e viaggia fino a 80 km/h. Con la batteria agli ioni di litio (93 kWh) dispone di 200 kW e 40 km/h, abbastanza per manovrare su binari senza linea di contatto.', 'La locomotiva è corta e si adatta bene ai binari stretti delle stazioni. Può frenare carri con freno a vuoto e con freno ad aria.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Cabina centrale, guida seduti o in piedi', 'Radiocomando', 'Condotta di riscaldamento del treno 320 V', 'Sistema di sicurezza ZSI 127'] }
    ],
  bilder: ['Geaf 2/2 20601 a Coira (2020)', 'Geaf 2/2 20603 (2025)']
});
uebZug('rhb-ge33', {
  beiname: '214 e 215',
  typ: 'Locomotiva da manovra elettrica a tre assi',
  text: ['Le due Ge 3/3 del 1984 sono locomotive da manovra elettriche con tre assi motori. Lavorano a Samedan e a Coira.', 'Non hanno il sistema di sicurezza ZSI 127.'],
  kennzahlen: [['2', 'locomotive (214, 215)'], ['1984', 'costruzione'], ['3', 'assi motori'], ['11 kV', 'linea di contatto']],
  daten: { 'Bauart': 'locomotiva da manovra elettrica a tre assi' },
  specNote: 'Secondo il registro dei veicoli motori di Haribu (stato settembre 2026). Le fonti verificate non indicano potenza né peso.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le due locomotive 214 e 215 sono state costruite nel 1984 come tipo proprio a tre assi per la manovra.'] },
      { titel: 'Impiego e tecnica', p: ['Secondo il registro, la 214 lavora a Samedan, la 215 a Coira. Nessuna delle due ha il sistema ZSI 127, il che limita le corse in linea.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Tre assi motori', 'Pantografo per 11 kV', 'Nessun sistema ZSI 127'] }
    ],
  bilder: ['Ge 3/3 215 a Coira (2015)', 'Ge 3/3 214 (2022)']
});
uebZug('rhb-gmf44-242', {
  beiname: '242 e 243',
  typ: 'Locomotiva diesel da manovra del 1991',
  text: ['Le due Gmf 4/4 del 1991 sono locomotive diesel per la manovra sulla rete principale.', 'Sono un tipo proprio da non confondere con le più recenti Gmf 4/4 II di Schalke.'],
  kennzahlen: [['2', 'locomotive (242, 243)'], ['1991', 'costruzione'], ['4', 'assi motori'], ['diesel', 'trazione']],
  daten: { 'Bauart': 'locomotiva diesel a quattro assi' },
  specNote: 'Secondo il registro dei veicoli motori di Haribu; le fonti verificate non indicano valori tecnici.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le locomotive 242 e 243 sono state costruite nel 1991 come tipo proprio. Nonostante la designazione simile non hanno nulla in comune con le Gmf 4/4 II costruite nel 2013.'] },
      { titel: 'Impiego e tecnica', p: ['Secondo il registro svolgono la manovra sulla rete principale. Alcune foto le mostrano a Klosters Platz, Landquart e Davos.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Trazione diesel, indipendente dalla linea di contatto', 'Telecomando (lettera f)', 'Quattro assi motori'] }
    ],
  bilder: ['Gmf 4/4 242 a Klosters Platz (2019)', 'Gmf 4/4 243 a Davos (2024)']
});
uebZug('rhb-taf22', {
  typ: 'Piccoli veicoli strada-rotaia da manovra per officine',
  text: ['I sei Taf 2/2 sono piccoli veicoli strada-rotaia. Spostano veicoli nelle officine e nei depositi.', 'Lavorano tra l’altro a Poschiavo e a Landquart.'],
  kennzahlen: [['6', 'veicoli'], ['2010–2023', 'anni di costruzione'], ['2', 'assi'], ['Landquart', 'officina principale']],
  daten: { 'Bauart': 'veicolo strada-rotaia da manovra' },
  specNote: 'Secondo il registro dei veicoli motori di Haribu; costruttore e valori tecnici non vi sono indicati.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['I sei veicoli sono stati costruiti tra il 2010 e il 2023.'] },
      { titel: 'Impiego e tecnica', p: ['Secondo il registro lavorano tra l’altro a Poschiavo, al tornio in fossa di Landquart e nel deposito di Landquart. Spostano veicoli in officina e non circolano nel servizio viaggiatori.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Ruote per rotaia e strada', 'Trazione a batteria (lettera a)', 'Telecomando (lettera f)'] }
    ]
});

/* ---------- infrastruttura ---------- */
uebZug('rhb-gmf44ii', {
  typ: 'Locomotiva diesel-elettrica Schalke per treni cantiere e sgombero neve',
  text: ['Le quattro Gmf 4/4 II di Schalke trainano pesanti treni cantiere, rimorchiano treni in panne e spingono le frese da neve in inverno. Circolano anche quando la linea di contatto è disinserita.', 'Portano la livrea gialla dell’infrastruttura RhB.'],
  kennzahlen: [['4', 'locomotive'], ['1800 kW', 'potenza'], ['100 km/h', 'velocità massima'], ['2013', 'costruzione']],
  daten: { 'Bauart': 'locomotiva diesel-elettrica', 'Fahrzeugnummern': '23401–23404 (fino al 2015: 28701–28704)', 'Länge': '16,69 m' },
  specNote: 'Valori secondo Schalke e Wikipedia. Lo sforzo all’avviamento vale per un coefficiente di aderenza di 0,33.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La RhB ha ordinato le locomotive nel 2009; Schalke le ha costruite nel 2013 e sono entrate in servizio nel 2014. Fino al 2015 portavano i numeri 28701–28704.', 'Si chiamano 23401 «Surselva», 23402 «Engadin», 23403 «Albula» e 23404 «Bernina».'] },
      { titel: 'Impiego e tecnica', p: ['Le locomotive trainano pesanti treni cantiere, aiutano in caso di guasto e in inverno lavorano con le frese da neve su tutta la rete. Fino a tre locomotive si possono comandare insieme.', 'Sono costruite per curve di 40 m di raggio e temperature da −35 a +40 °C. Quattro diversi sistemi di frenatura le rendono adatte ai treni misti.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Trazione diesel-elettrica, indipendente dalla linea di contatto', 'Quattro sistemi di frenatura', 'Comando multiplo fino a tre locomotive', 'Livrea gialla dell’infrastruttura'] }
    ],
  bilder: ['Gmf 4/4 II 23403', 'Gmf 4/4 II 23402 con la fresa da neve 95403']
});
uebZug('rhb-gem44', {
  beiname: '801 e 802',
  typ: 'Locomotiva bimodale per la linea del Bernina',
  text: ['Le due Gem 4/4 circolano elettricamente sotto la linea di contatto in corrente continua della linea del Bernina e in diesel dove non c’è una linea adatta.', 'Si chiamano 801 «Steinbock» (stambecco) e 802 «Murmeltier» (marmotta).'],
  kennzahlen: [['2', 'locomotive'], ['1968', 'alla RhB'], ['2 × 709 kW', 'diesel dopo la trasformazione'], ['65 km/h', 'velocità massima']],
  daten: { 'Bauart': 'locomotiva bimodale (elettrica e diesel)', 'Leistung': '680 kW in elettrico; diesel 2 × 709 kW (dopo la trasformazione)' },
  specNote: 'Valori secondo Wikipedia. Costruite nel 1966, consegnate alla RhB nel 1968. Potenza elettrica e diesel sono modalità distinte e non si sommano.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM, SWS, BBC e MFO costruirono le due locomotive; arrivarono alla RhB nel 1968. Dopo un incendio, la 801 è stata rinnovata a Landquart dal 2000, la 802 è seguita nel 2002/03.', 'Con la trasformazione hanno ricevuto cabine più lunghe, nuovi motori diesel Cummins da 709 kW ciascuno, un nuovo comando e la climatizzazione in cabina.'] },
      { titel: 'Impiego e tecnica', p: ['Le locomotive sono stazionate a Pontresina e a Poschiavo. Trainano treni cantiere e in inverno lavorano con le frese da neve; in passato trainavano anche treni viaggiatori sulla linea del Bernina.', 'In elettrico erogano 680 kW. Con i motori diesel circolano anche sulla rete principale, di cui non possono usare la corrente alternata.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Pantografo per 1000 V corrente continua', 'Due motori diesel', 'Cabine climatizzate (dopo la trasformazione)'] }
    ],
  bilder: ['Gem 4/4 in testa a un treno regionale per Tirano (2009)', 'Fiancata della Gem 4/4 801 con lo stambecco (2014)', 'Fiancata della Gem 4/4 802 con la marmotta (2014)']
});
uebZug('rhb-tm', {
  name: 'Tm 2/2 e Tmf 2/2', beiname: 'trattori',
  typ: 'Trattori diesel per la manovra e i treni cantiere',
  text: ['Per la manovra e i piccoli treni cantiere la RhB ha diverse famiglie di trattori diesel a due assi di RACO, Windhoff e SCHÖMA.', 'Per sostituirne una parte, nel novembre 2025 la RhB ha ordinato otto nuovi veicoli di servizio a Windhoff.'],
  kennzahlen: [['10', 'Tm 111–120 (SCHÖMA)'], ['6', 'Tmf 85–90 (RACO)'], ['4', 'Tm 81–84 (RACO)'], ['4', 'Tm 95–98 (Windhoff)']],
  daten: { 'Bauart': 'trattori diesel a due assi' },
  specNote: 'Numeri secondo la statistica delle locomotive Pospichal. I successori ordinati non provano che i vecchi trattori siano già ritirati; la RhB li citava nel novembre 2025 come parco esistente.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['I vecchi trattori RACO portavano i numeri 56–67 e poi in parte 15–26.'],
        tabelle: { kopf: ['Numeri', 'Costruttore', 'Costruzione'], zeilen: [
          ['Tm 81–84', 'RACO', '1985'], ['Tmf 85–90', 'RACO', '1991–1994'], ['Tm 91–93', 'diversi', '–'], ['Tm 95–98', 'Windhoff', '1998/99'], ['Tm 111–120', 'SCHÖMA', '2002–2006']] } },
      { titel: 'Impiego e tecnica', p: ['I trattori manovrano nelle stazioni e trainano piccoli treni di costruzione e manutenzione. I Tmf hanno inoltre un telecomando.', 'Per sostituire i Tm 81–84 e 95–98 la RhB ha ordinato otto veicoli Windhoff nel novembre 2025; devono entrare in servizio nel 2029.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Trazione diesel', 'Due assi', 'Telecomando sui Tmf'] }
    ],
  bilder: ['Tm 2/2 115 di SCHÖMA a Ilanz (2014)', 'Tm 2/2 84 a Langwies (2015)', 'Tmf 2/2 87 a Thusis (2013)']
});
uebZug('rhb-tieflade', {
  beiname: '23411–23415 ribassati',
  typ: 'Nuovi veicoli ribassati per la logistica dei cantieri',
  text: ['Dal novembre 2025 la RhB riceve cinque veicoli ribassati semoventi Xmf 4/4 23411–23415. Si aggiungono undici carri ribassati Xa 93511–93521.', 'Con pianali bassi e soluzioni container la logistica dei cantieri deve diventare più efficiente.'],
  kennzahlen: [['5', 'veicoli ribassati'], ['11', 'carri ribassati'], ['2025', 'primi veicoli'], ['2026', 'carri ribassati']],
  daten: { 'Bauart': 'veicoli ribassati semoventi e carri ribassati' },
  specNote: 'Secondo il rapporto sullo stato della rete 2025 della RhB e i registri. Costruttore e dati tecnici non sono accertati nelle fonti verificate; non ogni numero è già collaudato.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Secondo il rapporto sullo stato della rete 2025, cinque veicoli ribassati arrivano dal novembre 2025 e undici carri ribassati dal primo trimestre 2026. Il registro li indica come Xmf 4/4 23411–23415 e Xa 93511–93521.'] },
      { titel: 'Impiego e tecnica', p: ['I veicoli portano materiale nei cantieri. I pianali bassi e i container di sistema facilitano carico e scarico.', 'Questo acquisto è distinto dagli otto veicoli Windhoff attesi per il 2029.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Pianale di carico basso', 'Trazione propria (Xmf)', 'Telecomando (lettera f)'] }
    ]
});
uebZug('rhb-windhoff', {
  beiname: 'Windhoff (ordinati)',
  typ: 'Veicoli di servizio con gru ordinati, entrata in servizio prevista nel 2029',
  text: ['Nel novembre 2025 la RhB ha ordinato a Windhoff otto veicoli di servizio identici per 57 milioni di franchi. Devono entrare in servizio nel 2029.', 'I veicoli hanno una gru e si possono equipaggiare con verricello, benna, cestello, fresa da neve o escavatore a risucchio.'],
  kennzahlen: [['8', 'veicoli ordinati'], ['500 kW', 'potenza continua alla ruota'], ['80 km/h', 'velocità massima'], ['2029', 'entrata in servizio prevista']],
  daten: { 'Bauart': 'veicolo polivalente diesel-elettrico con gru', 'Gewicht': 'circa 58 t', 'Motor': 'diesel principale 520 kW, diesel ausiliario 170 kW', 'Leistung': '500 kW continui alla ruota', 'Anzahl': '8 ordinati', 'In Betrieb seit': '2029 previsto' },
  specNote: 'Valori di progetto secondo il comunicato della RhB del 18 novembre 2025 e Windhoff. I veicoli non sono ancora consegnati. Una batteria di trazione è solo studiata come possibile equipaggiamento successivo.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La RhB ha annunciato l’ordinazione il 18 novembre 2025. Windhoff la conferma come progetto «MPV VentuS». Gli otto veicoli devono sostituire vecchi trattori diesel.'] },
      { titel: 'Impiego e tecnica', p: ['Un motore diesel principale da 520 kW e un diesel ausiliario da 170 kW azionano ciascuno un generatore. Alla ruota sono disponibili in continuo 500 kW; la velocità massima è di 80 km/h.', 'La gru ha uno sbraccio di circa 16,9 m e il suo braccio si può piegare anche verso il basso.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Cabina climatizzata e insonorizzata per sette persone', 'Gru, verricello, benna o cestello', 'Possibile: fresa da neve o escavatore a risucchio'] }
    ]
});
uebZug('rhb-dienstwagen', {
  name: 'Carri di servizio', beiname: 'carri X',
  typ: 'Carri per la costruzione dei binari, le misurazioni e il materiale',
  text: ['Il parco dei carri di servizio della RhB comprende carri per pietrisco, ghiaia e pianale, carri di misura e con gru, piattaforme elevabili e carri di soccorso. Molti derivano da vecchie carrozze o carri merci.', 'Secondo il rapporto sullo stato della rete 2025, l’infrastruttura conta 60 veicoli motori e 136 veicoli rimorchiati.'],
  kennzahlen: [['136', 'veicoli rimorchiati dell’infrastruttura'], ['60', 'veicoli motori dell’infrastruttura'], ['X', 'categoria dei carri di servizio'], ['2025', 'rapporto sulla rete']],
  daten: { 'Bauart': 'carri di servizio di vario tipo', 'Fahrzeugnummern': 'Esempi: Xac 8733–8742, Xa-u 8761–8770, Xa-tu 93701–93704, Xac-t 93801–93805, Xak 96501, Xak 9394, Xk 94001' },
  specNote: 'Esempi di tipi secondo il registro X di Haribu (stato agosto 2026), non un elenco completo. Portate e sistemi di misura non sono indicati senza scheda dell’attrezzatura.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La categoria X indica l’uso in servizio, non un nuovo telaio. Esempi dal registro:'],
        tabelle: { kopf: ['Compito', 'Esempi'], zeilen: [
          ['Pietrisco', 'Xac 8733–8742, Xa-u 8761–8770, 9441–9446, 9461–9463, Xa-tu 93701–93704'], ['Ghiaia', 'Xac-t 93801–93805'],
          ['Carri pianale', 'Xae-w 9401–9404, Xae-t 93105–93111'], ['Trasporto rotaie', 'Xa-t 93101–93104, carro scarica-rotaie Xa-t 93501'],
          ['Misura del binario', 'Xak 96501 (dalla B 2307)'], ['Ispezione ponti', 'Xak 9394 (dall’Uahk-v 8123)'], ['Lavori con gru', 'Xak 9387, 9388'],
          ['Piattaforme elevabili', 'Xk 94001, Xak 94002–94003'], ['Acqua e spegnimento', 'Xak 9379–9380, Xah-y 9385–9386'], ['Carri di soccorso', 'Xak-v 9101, 9102']] } },
      { titel: 'Impiego e tecnica', p: ['Così i vecchi carri ribaltabili Fau 8761–8770 sono diventati carri per pietrisco usato Xa-u. In inverno alcuni carri per pietrisco ricevono pareti laterali e portano via la neve.', 'Carri di accoppiamento come i carri Vereina 9390–9393 collegano veicoli con accoppiatori diversi. Non hanno trazione propria.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Scarico ribaltabile o a gravità nei carri per pietrisco', 'Impianti di misura, gru o piattaforme secondo il carro', 'Nessuna trazione propria'] }
    ],
  bilder: ['Carro per ghiaia Xac-t 93801 a Coira (2012)', 'Carro per pietrisco Xa-tu 93701 a Poschiavo (2010)', 'Carro di servizio Xk 9362 a Landquart (2015)']
});

/* ---------- veicoli di servizio e speciali ---------- */
uebZug('rhb-loeref', {
  beiname: 'veicoli di spegnimento e salvataggio',
  typ: 'Treni di spegnimento e salvataggio per la galleria della Vereina',
  text: ['Per la galleria della Vereina la RhB dispone di quattro veicoli di spegnimento e salvataggio di Müller Technologie. Due sono veicoli di spegnimento, due di salvataggio.', 'Sono stati consegnati il 2 settembre 2022. Li servono i pompieri di Klosters-Serneus e Zernez.'],
  kennzahlen: [['4', 'veicoli (27401–27404)'], ['25 000 l', 'acqua di spegnimento'], ['100', 'persone per corsa di salvataggio'], ['2022', 'consegna']],
  daten: { 'Bauart': 'veicoli semoventi di spegnimento e salvataggio', 'Betreiber': 'RhB, serviti dai pompieri di Klosters-Serneus e Zernez', 'Länge': '18,80 m', 'Motor': 'diesel, 280 kW' },
  specNote: 'Valori secondo il comunicato della RhB e la scheda Müller. I veicoli circolano solo su rotaia; i veicoli strada-rotaia dei pompieri sono altri veicoli.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Müller Technologie di Frauenfeld ha costruito i quattro veicoli; sono stati consegnati il 2 settembre 2022 al portale nord a Klosters Selfranga. Ogni lato della galleria ha un veicolo di spegnimento e uno di salvataggio.', 'La RhB ha anche veicoli strada-rotaia dei pompieri Xm 2/2 27801–27806 del 2016/17 e altri più vecchi del 2007.'] },
      { titel: 'Impiego e tecnica', p: ['Ogni veicolo ha due cabine, un carrello motore e uno portante e un motore diesel da 280 kW. Telecamere a colori e termiche aiutano nel fumo. Secondo il costruttore sono pronti in meno di cinque minuti.', 'Il veicolo di spegnimento ha una cisterna con controllo della temperatura da 25 000 l d’acqua. Il veicolo di salvataggio ha un locale con alimentazione d’aria respirabile per fino a 100 persone; carburante e ossigeno bastano per due corse.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Veicolo di spegnimento: 12 posti per pompieri con autorespiratore, altri 4 nelle cabine', 'Locale di salvataggio con aria respirabile', 'Telecamere a colori e termiche', 'Trazione propria, indipendente da una locomotiva'] }
    ]
});
uebZug('rhb-fahrleitung', {
  name: 'Veicoli per linea di contatto e gru', beiname: 'Xm e Xmf',
  typ: 'Veicoli per lavori alla linea di contatto e con gru',
  text: ['Per i lavori alla linea di contatto e con gru la RhB ha diverse famiglie di veicoli di servizio semoventi. I più grandi sono gli Xmf 6/6 24401 e 24402.', 'Dal 2024 si aggiungono due piattaforme elevabili strada-rotaia.'],
  kennzahlen: [['2', 'Xmf 6/6 (2007, 2016)'], ['2', 'Xmf 4/4 (costruiti nel 1994)'], ['2', 'piattaforme (2024)'], ['1994', 'Xmf 2/2 9921']],
  daten: { 'Bauart': 'veicoli semoventi per linea di contatto e gru', 'Fahrzeugnummern': 'Xm 2/2 9916, 9917; Xmf 2/2 9921; Xmf 6/6 24401, 24402; Xmf 4/4 24403, 24404 (prima 9918, 9919); Xm 2/2 24801, 24802' },
  specNote: 'Secondo il registro dei veicoli motori di Haribu. Costruttore, altezza di lavoro e carico della gru non sono indicati senza scheda tecnica.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['I veicoli risalgono ad anni diversi.'],
        tabelle: { kopf: ['Veicolo', 'Numeri', 'Costruzione'], zeilen: [
          ['Xm 2/2', '9916, 9917', 'diversi'], ['Xmf 2/2', '9921', '1994'], ['Xmf 6/6', '24401, 24402', '2007, 2016'],
          ['Xmf 4/4', '24403, 24404 (prima 9918, 9919)', '1994, poi trasformati'], ['Xm 2/2 piattaforme', '24801, 24802', '2024']] } },
      { titel: 'Impiego e tecnica', p: ['I veicoli costruiscono e mantengono la linea di contatto e sollevano pezzi pesanti. Gli Xmf 6/6 e gli Xmf 4/4 sono tipi diversi nonostante lo stesso compito.', 'Gli Xm 2/2 24801 e 24802 sono piattaforme elevabili che circolano su rotaia e su strada.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Gru o piattaforma secondo il veicolo', 'Trazione diesel propria (lettera m)', 'Telecomando sugli Xmf'] }
    ],
  bilder: ['Xmf 2/2 9921 a Samedan (2015)', 'Xmf 2/2 9921 con gru']
});
uebZug('rhb-schneeschleuder', {
  name: 'Frese e spazzaneve', beiname: 'Xrot mt e Xk',
  typ: 'Mezzi per lo sgombero della neve',
  text: ['In inverno frese da neve e spazzaneve liberano le linee. Le frese più recenti sono le Xrot mt 95401–95404 di Zaugg.', 'Una locomotiva spinge la fresa, per esempio una Gmf 4/4 II.'],
  kennzahlen: [['4', 'Xrot mt 95401–95404'], ['2011/12', 'costruzione'], ['1981', 'Xrot mt 9217'], ['7', 'spazzaneve Xk 9141–9147']],
  daten: { 'Bauart': 'frese da neve e spazzaneve' },
  specNote: 'Le fonti verificate non indicano larghezza, capacità di sgombero né motore delle singole macchine RhB. I dati di altre ferrovie dalla brochure Zaugg non sono stati ripresi.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Zaugg ha consegnato nel 2011 le macchine del Bernina 95403 e 95404 e nel 2012 quelle della rete principale 95401 e 95402. La Xrot mt 9217 risale al 1981.', 'L’attuale Xrot m 9214 ha una sovrastruttura del 2001 su un telaio del 1913 (dal Gb 5606). Non è la vecchia fresa a vapore del Bernina con lo stesso numero.'] },
      { titel: 'Impiego e tecnica', p: ['Una fresa da neve raccoglie la neve con un organo rotante e la getta di lato. Uno spazzaneve spinge via la neve con una lama sagomata.', 'Fresa e locomotiva di spinta formano un treno di lavoro, per esempio con una Gmf 4/4 II; sulla linea del Bernina anche un’automotrice spinge uno spazzaneve.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Organo di sgombero rotante (Xrot)', 'Lama spazzaneve (Xk)', 'In inverno: carri per pietrisco con pareti laterali per portare via la neve'] }
    ],
  bilder: ['Fresa da neve Xrot mt 95403 con la Gmf 4/4 II 23402', 'Fresa da neve Xrot mt 9217 a Landquart (2012)', 'Spazzaneve Xk 9143 con l’ABe 4/4 II 46 in azione']
});

/* ---------- veicoli storici ---------- */
uebZug('rhb-ge66i', {
  beiname: 'Coccodrillo',
  typ: 'Locomotiva elettrica merci del 1921–1929 (storica)',
  text: ['Per decenni i 15 «Coccodrilli» della RhB hanno trainato treni pesanti sull’Albula. Tipici sono i due carrelli motori mobili con trasmissione a bielle.', 'Le 414 e 415 trainano oggi treni storici della RhB; diverse altre sono nei musei.'],
  kennzahlen: [['15', 'locomotive (401–415)'], ['1921', 'prima locomotiva'], ['55 km/h', 'velocità massima'], ['66 t', 'peso in servizio']],
  daten: { 'Bauart': 'locomotiva elettrica a bielle', 'Hersteller': 'SLM (meccanica), BBC (elettrica)', 'Länge': '13,30 m respingenti compresi', 'Leistung': 'circa 940 kW (opuscolo RhB)', 'Erhalten': '414 e 415 (RhB); 402 Museo Svizzero dei Trasporti, 406 Battenberg, 407 Bergün, 411 Deutsches Museum' },
  specNote: 'Potenza secondo l’opuscolo RhB «Veicoli storici» (arrotondata, senza riferimento preciso); Wikipedia indica da 794 a 840 kW. Lunghezza e peso secondo Wikipedia.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM e BBC costruirono le 15 locomotive tra il 1921 e il 1929. Tre assi accoppiati si trovano in ciascuno dei due carrelli motori mobili; motori, ingranaggi, contralberi e bielle trasmettono la forza.', 'Sono conservate le 414 e 415 alla RhB, la 402 al Museo Svizzero dei Trasporti di Lucerna, la 407 al museo ferroviario dell’Albula a Bergün, la 411 al Deutsches Museum di Monaco e la 406 presso Viessmann a Battenberg.'] },
      { titel: 'Impiego e tecnica', p: ['I Coccodrilli trainavano soprattutto treni merci e viaggiatori sulla linea dell’Albula. Le 414 e 415 sono oggi locomotive museali in esercizio con base a Landquart e Samedan; secondo il registro la 414 è in riparazione.', 'Le due locomotive della RhB sono state trasformate in misura diversa e non mostrano più ovunque lo stato originale.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Cabina centrale, avancorpi alle due estremità', 'Trasmissione a bielle e contralberi', 'Esposizione con simulatore di guida (407 a Bergün)'] }
    ],
  bilder: ['Coccodrillo Ge 6/6 I 415 a Bergün', 'Ge 6/6 I 414 con un treno storico a Filisur (2022)', 'Ge 6/6 I 412 con il treno 4532 in arrivo a Filisur (1987)', 'Ge 6/6 I 407 al museo ferroviario dell’Albula a Bergün (2014)']
});
uebZug('rhb-ge66ii', {
  typ: 'Locomotiva elettrica pesante a cassa articolata (storica)',
  text: ['Le sette Ge 6/6 II erano le pesanti locomotive di linea della rete principale della RhB. La loro cassa è in due parti articolate su tre carrelli.', 'Sono fuori servizio dal 2020; la 702 si trova al Museo Svizzero dei Trasporti di Lucerna.'],
  kennzahlen: [['7', 'locomotive (701–707)'], ['1958', 'prime locomotive'], ['1764 kW', 'potenza oraria'], ['80 km/h', 'velocità massima']],
  daten: { 'Bauart': 'locomotiva elettrica a cassa articolata', 'Länge': '14,50 m respingenti compresi', 'Leistung': '1764 kW (potenza oraria)', 'Erhalten': '702 «Curia» al Museo Svizzero dei Trasporti di Lucerna; 707 «Scuol» accantonata a Samedan' },
  specNote: 'Valori secondo Wikipedia; altrove l’articolo indica 1776 kW.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM, BBC e MFO costruirono le 701 e 702 nel 1958, seguite dalle 703–707 nel 1965. Le locomotive portano nomi di località, per esempio 701 «Raetia», 702 «Curia» e 707 «Scuol».'] },
      { titel: 'Impiego e tecnica', p: ['Le locomotive trainavano pesanti treni merci e viaggiatori sulla rete principale, soprattutto sull’Albula. Dal 2020 sono state ritirate; le 701, 703, 704 e 706 sono state demolite.', 'La 702 è arrivata al Museo Svizzero dei Trasporti di Lucerna il 30 marzo 2023; la fondazione GRÜN & CHROM vuole riportarla allo stato originale. La 707 è accantonata a Samedan senza autorizzazione d’esercizio.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due semicasse articolate', 'Tre carrelli a due assi', 'Due cabine di guida'] }
    ],
  bilder: ['Ge 6/6 II 701 presso Bonaduz (2016)', 'Ge 6/6 II 704 «Davos» presso Trin', 'Ge 6/6 II 707 «Scuol» a Samedan']
});
uebZug('rhb-ge44i', {
  typ: 'Locomotiva elettrica di linea del 1947 e 1953 (storica)',
  text: ['Le dieci Ge 4/4 I furono le prime locomotive a carrelli della RhB. Quattro arrivarono nel 1947, sei nel 1953.', 'La 605 «Silvretta» circola oggi come locomotiva storica, tra l’altro in testa all’Alpine Classic Pullman Express.'],
  kennzahlen: [['10', 'locomotive (601–610)'], ['1947', 'prime locomotive'], ['1184 kW', 'potenza'], ['80 km/h', 'velocità massima']],
  daten: { 'Bauart': 'locomotiva elettrica', 'Länge': '12,10 m respingenti compresi', 'Höchstgeschwindigkeit': '80 km/h (in origine 75 km/h)', 'Erhalten': '605 «Silvretta» (storica, in esercizio); 602 e 603 accantonate' },
  specNote: 'Valori secondo Wikipedia e l’opuscolo RhB «Veicoli storici». Le cabine sono state trasformate nel 1986–1991; le vecchie foto mostrano un’altra forma.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM costruì le locomotive con equipaggiamento elettrico BBC e MFO: le 601–604 nel 1947, le 605–610 nel 1953. I nomi ricordano montagne e valli grigionesi, per esempio 601 «Albula» o 605 «Silvretta».'] },
      { titel: 'Impiego e tecnica', p: ['Con due carrelli e motori singoli per asse sostituirono le vecchie locomotive a bielle. Dal 1986 al 1991 ricevettero cabine più grandi e il comando multiplo e a distanza; nel 1997 arrivarono pantografi monobraccio per la linea di Arosa.', 'Dal novembre 2010 sono state ritirate. La 605 ha ricevuto nel 2025 il sistema ZSI 127; la fondazione GRÜN & CHROM prevede la sua revisione in livrea rossa e vuole riverniciare la 602 in verde.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due cabine (trasformate nel 1986–1991)', 'Comando multiplo e a distanza', 'Freno elettrico a recupero'] }
    ],
  bilder: ['Ge 4/4 I 605 «Silvretta» a Coira (2022)', 'Ge 4/4 I 603 e 602 a Spinas', 'Ge 4/4 I tra Bever e Spinas']
});
uebZug('rhb-ge24', {
  typ: 'Prima locomotiva elettrica del 1913 (storica)',
  text: ['Le sette Ge 2/4 di SLM e BBC inaugurarono nel 1913 la trazione elettrica sulla linea Bever–Scuol. Più tardi diverse furono trasformate in locomotive da manovra.', 'La 222 circola oggi come locomotiva storica; le 205 e 207 sono conservate nello stato originale.'],
  kennzahlen: [['7', 'locomotive (201–207)'], ['1913', 'in servizio'], ['45 km/h', 'velocità massima (originale)'], ['222', 'conservata in esercizio']],
  daten: { 'Bauart': 'locomotiva elettrica a bielle', 'Fahrzeugnummern': '201–207; trasformazioni 211–213, 221–222', 'Länge': 'circa 8,7 m', 'Gewicht': '37 t (originale)', 'Leistung': '210 kW (originale), 428 kW (221 e 222 dopo la trasformazione)', 'Höchstgeschwindigkeit': '45 km/h (originale), 55 km/h (dopo la trasformazione)', 'Erhalten': '222 in esercizio (Landquart); 205 museo ferroviario dell’Albula; 207 Museo Svizzero dei Trasporti; 212' },
  specNote: 'Valori secondo Wikipedia; l’opuscolo RhB indica per la 222 circa 450 kW e 45 km/h. La 222 non ha il sistema ZSI 127.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM e BBC costruirono le locomotive nel 1912/13. Le trasformazioni hanno dato nuovi numeri a diverse locomotive, senza crearne di nuove.'],
        tabelle: { kopf: ['In origine', 'Più tardi'], zeilen: [
          ['201', 'Ge 2/4 213'], ['202', 'Gea 2/4 211, poi Gem 2/4 211'], ['203', 'Ge 2/4 221'], ['204', 'Ge 2/4 222'], ['206', 'Ge 2/4 212'], ['205, 207', 'conservate nello stato originale']] } },
      { titel: 'Impiego e tecnica', p: ['Nel 1943 tre locomotive furono trasformate in locomotive da manovra; nel 1945/46 le 221 e 222 ricevettero nuovi motori e un freno reostatico. Da allora erogavano 428 kW e viaggiavano a 55 km/h.', 'La 222 è oggi una locomotiva museale in esercizio a Landquart. La 205 appartiene dal 2023 alla fondazione del museo ferroviario dell’Albula, la 207 si trova al Museo Svizzero dei Trasporti di Lucerna.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due assi motori e due assi portanti', 'Freno reostatico (221 e 222 dopo la trasformazione)', 'Nessun sistema ZSI 127 (222)'] }
    ],
  bilder: ['Ge 2/4 222', 'Ge 2/4 201 nello stato originale (1912)']
});
uebZug('rhb-ge46', {
  typ: 'Prime locomotive elettriche della RhB del 1912–1918 (storiche)',
  text: ['La designazione Ge 4/6 comprende diverse locomotive sperimentali con equipaggiamento elettrico BBC, MFO e AEG. La 351 fu la prima locomotiva elettrica della RhB.', 'La 353 è conservata come locomotiva storica, la 391 si trova al Deutsches Technikmuseum di Berlino.'],
  kennzahlen: [['8', 'locomotive'], ['1913', 'in servizio'], ['588 kW', 'potenza (353, opuscolo)'], ['55 km/h', 'velocità massima (353)']],
  daten: { 'Bauart': 'locomotiva elettrica a bielle', 'Hersteller': 'SLM; parte elettrica BBC (301–302), MFO (351–355), AEG (391)', 'Leistung': '419–559 kW (potenza oraria, secondo la versione)', 'Erhalten': '353 (RhB), 391 (Deutsches Technikmuseum Berlino)' },
  specNote: 'Le versioni differiscono per potenza e peso; nessuna scheda unica vale per tutte. L’opuscolo RhB indica per la 353 circa 588 kW e 55 km/h.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM fornì la parte meccanica; l’equipaggiamento elettrico veniva da tre ditte.'],
        tabelle: { kopf: ['Numeri', 'Parte elettrica', 'In servizio'], zeilen: [['301', 'BBC', '1913'], ['302', 'BBC', '1918'], ['351–352', 'MFO', '1912/13'], ['353–355', 'MFO', '1914'], ['391', 'AEG', '1913']] } },
      { titel: 'Impiego e tecnica', p: ['Le locomotive circolarono dapprima sulla linea dell’Engadina elettrificata nel 1913, poi su tutta la rete principale. La 351 è considerata la prima locomotiva elettrica della RhB.', 'La 353 traina ancora oggi treni museali. La 391 si può vedere al Deutsches Technikmuseum di Berlino.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Trasmissione a bielle', 'Quattro assi motori e due assi portanti', 'Equipaggiamento elettrico diverso secondo la locomotiva'] }
    ],
  bilder: ['Ge 4/6 353 a Ilanz', 'Ge 4/6 391 al Deutsches Technikmuseum di Berlino (2017)', 'Ge 4/6 355 (1915)']
});
uebZug('rhb-bernina-loks', {
  name: 'Locomotive del Bernina',
  typ: 'Piccole locomotive e automotrice bagagliaio della ferrovia del Bernina (storiche)',
  text: ['Alcuni veicoli motori particolari provengono dalla ferrovia del Bernina: le piccole Ge 2/2 161 e 162, i pezzi unici Ge 4/4 181 e 182 e l’automotrice bagagliaio De 2/2 151.', 'La 182 appartiene oggi al Club 1889, l’ex 181 alla ferrovia museo Blonay–Chamby.'],
  kennzahlen: [['1909', 'De 2/2 151 in servizio'], ['1911', 'Ge 2/2 161–162'], ['1916', 'Ge 4/4 81 costruita'], ['708 kW', 'Ge 4/4 81 (museo)']],
  daten: { 'Bauart': 'locomotive elettriche e automotrice bagagliaio', 'Betreiber': 'Ferrovia del Bernina, dal 1943 RhB', 'Erhalten': '161 storica, 162 accantonata; 81 Blonay–Chamby; 182 Club 1889; 151 Pontresina' },
  specNote: 'Per la 182 le fonti indicano il 1927 o il 1928 (costruzione o consegna). A Blonay–Chamby la 81 circola a 900 V.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La ferrovia del Bernina entrò nella RhB nel 1943. Con essa arrivarono questi pezzi unici:'],
        tabelle: { kopf: ['Veicolo', 'Costruzione', 'Nota'], zeilen: [
          ['De 2/2 151 (ex Fe 2/2 51)', '1909', 'automotrice bagagliaio, numero 151 dal 1965'], ['Ge 2/2 161, 162', '1911', 'piccole locomotive da manovra'],
          ['Ge 4/4 181 (ex Bernina Ge 6/6 81)', '1916, trasformata nel 1929', 'a Blonay–Chamby dal 1970'], ['Ge 4/4 182 (ex Bernina 82)', '1927/28', 'SLM e Sécheron; Club 1889']] } },
      { titel: 'Impiego e tecnica', p: ['La 81 fu costruita nel 1916 come Ge 6/6 e trasformata in Ge 4/4 nel 1929; nel 1961 ricevette il numero RhB 181. Blonay–Chamby indica 46 t, 708 kW e 45 km/h nonché freni a mano, a vuoto, reostatico ed elettromagnetico su rotaia.', 'La De 2/2 151 è stata trasformata più volte e nel 1980 ha ricevuto una cassa in lamiera e un pantografo monobraccio. È oggi un veicolo museale a Pontresina.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Per i 1000 V a corrente continua della linea del Bernina', 'Freno elettromagnetico su rotaia (81)', 'Vano bagagli nella De 2/2 151'] }
    ],
  bilder: ['Ge 4/4 182 a Pontresina (2025)', 'Ge 4/4 81 alla ferrovia museo Blonay–Chamby (2018)', 'Ge 2/2 162 e De 2/2 151 a Poschiavo (2014)']
});
uebZug('rhb-g34', {
  typ: 'Locomotiva a vapore delle origini del 1889–1908 (storica)',
  text: ['L’esercizio della ferrovia Landquart–Davos, da cui nacque la RhB, iniziò nel 1889 con le G 3/4. La 1 «Rhätia» trainò il treno inaugurale.', 'Sono conservate tra l’altro la 1 «Rhätia» e la 11 «Heidi».'],
  kennzahlen: [['16', 'locomotive'], ['1889', 'prime locomotive'], ['30,2 t', 'peso in servizio (n. 1)'], ['45 km/h', 'velocità massima']],
  daten: { 'Bauart': 'locomotiva-tender a vapore', 'Betreiber': 'Ferrovia Landquart–Davos, dal 1895 RhB', 'Länge': '7,95 m respingenti compresi (n. 1)', 'Gewicht': '23,5 t a vuoto, 30,2 t in servizio (n. 1)', 'Leistung': '184 kW a 20 km/h (n. 1)', 'Erhalten': '1 «Rhätia» (RhB), 11 «Heidi» (Club 1889), 14 (fuori dalla RhB)' },
  specNote: 'Dati tecnici della n. 1 secondo historic RhB. Le 16 locomotive non sono tutte uguali; sono state costruite tra il 1889 e il 1908.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM costruì la prima serie 1–5 nel 1889; altre forniture seguirono fino al 1908. La 11 del 1902 si chiama oggi «Heidi».'] },
      { titel: 'Impiego e tecnica', p: ['La locomotiva ha tre assi accoppiati e un asse portante anteriore. I cilindri hanno 340 mm di diametro e 500 mm di corsa, la caldaia lavora a 12 bar; la locomotiva porta con sé acqua (2600 l) e carbone (950 kg).', 'La «Rhätia» è tornata dopo molti anni fuori dai Grigioni ed è stata revisionata dopo il 2014. La «Heidi» appartiene al Club 1889; il registro indica una trasformazione nel 2016.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Ruote motrici di 1050 mm, ruote portanti di 700 mm', 'Scorte d’acqua e carbone sulla locomotiva (locomotiva-tender)', 'Motore a due cilindri a vapore saturo'] }
    ],
  bilder: ['G 3/4 1 «Rhätia» a Bonaduz (2009)', 'G 3/4 1 e Ge 2/4 222 a Coira']
});
uebZug('rhb-mallet', {
  name: 'Locomotive Mallet',
  typ: 'Locomotive a vapore articolate per il pesante servizio di montagna (storiche)',
  text: ['Le locomotive Mallet hanno due gruppi motori sotto un’unica caldaia. Così percorrono curve strette con molti assi motori.', 'La RhB ne aveva tre tipi numerati da 21 a 32.'],
  kennzahlen: [['12', 'locomotive (21–32)'], ['1891', 'prime Mallet (Maffei)'], ['1896', '«Maloja» e «Chiavenna»'], ['1902', 'serie SLM']],
  daten: { 'Bauart': 'locomotive-tender Mallet', 'Betreiber': 'Ferrovia Landquart–Davos e RhB' },
  specNote: 'Secondo la statistica delle locomotive Pospichal. Le trasformazioni delle 21 e 22 non hanno creato locomotive in più.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La notazione con due frazioni descrive i due gruppi motori.'],
        tabelle: { kopf: ['Tipo', 'Numeri', 'Origine'], zeilen: [
          ['G 2/2+2/2', '21–22 (ex LD 6–7)', 'Maffei 1891, poi trasformate in G 2/3+2/2'], ['G 2/2+2/3', '23–24', 'SLM 1896, «Maloja» e «Chiavenna»'], ['G 2/3+2/2', '25–32', 'SLM dal 1902']] } },
      { titel: 'Impiego e tecnica', p: ['Le locomotive articolate più potenti ripresero i treni pesanti di montagna dalle piccole G 3/4. Dopo l’elettrificazione la RhB vendette molte locomotive a vapore, anche all’estero.', 'La 23 «Maloja» passò nel 1926 alle Forze motrici dell’Oberhasli e fu demolita nel 1940.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due gruppi motori, quello anteriore mobile', 'Scorte d’acqua e carbone sulla locomotiva', 'Costruzione Mallet per curve strette'] }
    ],
  bilder: ['Locomotiva Mallet 23 «Maloja»']
});
uebZug('rhb-g45', {
  typ: 'Locomotiva a vapore pesante con tender dal 1904 (storica)',
  text: ['Le G 4/5 erano le locomotive a vapore più potenti della RhB. SLM costruì le 29 locomotive dal 1904; hanno quattro assi accoppiati, un asse portante e un tender.', 'La 107 «Albula» e la 108 del 1906 fanno oggi parte delle locomotive storiche della RhB.'],
  kennzahlen: [['29', 'locomotive (101–129)'], ['1904', 'prime locomotive'], ['2', 'locomotive storiche (107, 108)'], ['2', 'locomotive in Thailandia']],
  daten: { 'Bauart': 'locomotiva a vapore con tender', 'Erhalten': '107 e 108 (RhB); 118 Chiang Mai, 123 Bangkok' },
  specNote: 'Le forniture differiscono; una scheda comune per tutte le 29 locomotive non è quindi indicata.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM costruì la serie dal 1904. Le due locomotive storiche 107 e 108 risalgono al 1906; la 107 porta il nome «Albula».'] },
      { titel: 'Impiego e tecnica', p: ['Le G 4/5 trainavano treni pesanti sull’Albula fino all’elettrificazione della linea. Poi la RhB vendette molte locomotive; la 104 passò nel 1950 al Ferrocarril de La Robla in Spagna.', 'Due ex locomotive della RhB si trovano oggi in Thailandia: la 118 a Chiang Mai e la 123 a Bangkok.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Tender per acqua e carbone', 'Quattro assi accoppiati e un asse portante', 'Traina oggi treni speciali a vapore della RhB'] }
    ],
  bilder: ['G 4/5 107 «Albula» con la Ge 6/6 II 702', 'G 4/5 104 in una foto di fabbrica SLM (1904)']
});
uebZug('rhb-bernina-tw', {
  name: 'Automotrici del Bernina', beiname: 'BCe 4/4 e ABe 4/4 I',
  typ: 'Prime automotrici della ferrovia del Bernina dal 1908 (storiche)',
  text: ['La ferrovia del Bernina iniziò l’esercizio con automotrici elettriche a due carrelli. Più tardi furono trasformate e designate ABe 4/4 I 30–38.', 'Le 30 e 34 sono conservate dalla RhB come automotrici storiche, la 35 alla ferrovia museo Blonay–Chamby.'],
  kennzahlen: [['1908', 'prime automotrici'], ['450 kW', 'potenza (35, museo)'], ['55 km/h', 'velocità massima (35)'], ['3', 'conservate (30, 34, 35)']],
  daten: { 'Bauart': 'automotrici elettriche', 'Betreiber': 'Ferrovia del Bernina, dal 1943 RhB', 'Fahrzeugnummern': 'BCe 4/4 1–14, BCFe 4/4 21–23, poi ABe 4/4 I 30–38', 'Erhalten': '30 e 34 (RhB), 35 (Blonay–Chamby)' },
  specNote: 'Gli anni di costruzione delle 30 e 34 differiscono tra i registri. I valori della 35 valgono per il suo stato museale a Blonay–Chamby (900 V).',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Nel 1908/09 la ferrovia del Bernina acquistò le automotrici viaggiatori BCe 4/4 1–14 e nel 1911 le BCFe 4/4 21–23 con compartimento bagagli. Trasformazioni e nuovi numeri ne fecero le ABe 4/4 I 30–38.'] },
      { titel: 'Impiego e tecnica', p: ['Blonay–Chamby indica per la 35 un peso in servizio di 30 t, quattro motori per complessivi 450 kW e 55 km/h. Ha freni a mano, ad aria, a vuoto, reostatico ed elettromagnetico su rotaia.', 'Storicamente la 35 offriva dodici posti di 2a e 31 di 3a classe.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Compartimenti di 2a e 3a classe (storici)', 'Freno elettromagnetico su rotaia', 'Per la linea di contatto a corrente continua della ferrovia del Bernina'] }
    ]
});
uebZug('rhb-abe44ii', {
  typ: 'Automotrice del Bernina del 1964–1972 (storica)',
  text: ['Dal 1964 le nove ABe 4/4 II sostituirono gran parte delle vecchie automotrici del Bernina. Trainavano anche carrozze aggiuntive sulla ripida linea del Bernina.', 'La 46 è conservata come automotrice storica; le 48 e 49 sono state trasformate in veicoli di servizio.'],
  kennzahlen: [['9', 'automotrici (41–49)'], ['680 kW', 'potenza continua'], ['65 km/h', 'velocità massima'], ['1964', 'prime automotrici']],
  daten: { 'Bauart': 'automotrice elettrica', 'Hersteller': 'SWS (meccanica), MFO, SAAS, BBC (elettrica)', 'Länge': '16,54 m (41–46), 16,89 m (47–49)', 'Leistung': '680 kW continui', 'Sitzplätze': '12 in 1a, 24 in 2a classe', 'Erhalten': '46 (storica); 47 ancora elencata' },
  specNote: 'Valori secondo Wikipedia. Franz Skvor, che partecipò all’acquisto, indica 677 kW come valore di progetto dell’epoca.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SWS costruì la parte meccanica, MFO, SAAS e BBC fornirono l’equipaggiamento elettrico. Le 41–46 arrivarono nel 1964/65, le 47–49 nel 1972.', 'La 48 è diventata nel 2012 l’automotrice di servizio Xe 23201, la 49 nel 2014 la Xe 23202 e nel 2015 il veicolo di soccorso Xe 27201 a Poschiavo.'] },
      { titel: 'Impiego e tecnica', p: ['Le automotrici svolgevano il servizio viaggiatori sulla linea del Bernina e trainavano carrozze aggiuntive su pendenze fino al 70 per mille. Avevano freni reostatico, a recupero ed elettromagnetico su rotaia, comando multiplo, e potevano essere telecomandate da una fresa da neve.', 'Dal 2010 le 41–45 sono state demolite. Nel 2021 la 46 ha ritrovato la sua livrea storica con la striscia dorata.'] },
      { titel: 'Dotazione e accessibilità', liste: ['12 posti in 1a e 24 in 2a classe', 'Freno elettromagnetico su rotaia', 'Telecomando da una fresa da neve'] }
    ],
  bilder: ['ABe 4/4 II 46 con lo spazzaneve Xk 9143', 'ABe 4/4 II 42 con un treno corto sulla linea del Bernina (verso il 1980)']
});
uebZug('rhb-abe44iii', {
  typ: 'Automotrice del Bernina del 1988 e 1990 (storica)',
  text: ['Fino al 2023 le sei ABe 4/4 III erano le automotrici più potenti della linea del Bernina. Spesso circolavano in coppia in testa al Bernina Express.', 'Il loro servizio regolare è terminato alla fine del 2023; la 53 «Tirano» si trova oggi al museo ferroviario dell’Albula a Bergün.'],
  kennzahlen: [['6', 'automotrici (51–56)'], ['1016 kW', 'potenza continua'], ['65 km/h', 'velocità massima'], ['2023', 'fine del servizio regolare']],
  daten: { 'Bauart': 'automotrice elettrica', 'Länge': '16,89 m respingenti compresi', 'Leistung': '1016 kW continui', 'Sitzplätze': '12 in 1a, 16 in 2a classe', 'Erhalten': '53 al museo ferroviario dell’Albula; 54 e 56 ancora elencate' },
  specNote: 'Valori secondo Wikipedia; l’opuscolo RhB indica circa 1000 kW e 175 kN. Il dossier indica SLM e ABB come costruttori, Wikipedia SWA e ABB.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le sei automotrici arrivarono in due serie: 51–53 nel 1988, 54–56 nel 1990. Portano nomi come 51 «Poschiavo», 53 «Tirano» e 54 «Hakone».'] },
      { titel: 'Impiego e tecnica', p: ['Le automotrici trainavano treni regionali e il Bernina Express, spesso in coppia. Hanno lasciato il servizio regolare alla fine del 2023, perché non soddisfacevano i requisiti per i viaggiatori a mobilità ridotta e non avevano il sistema ZSI 127; gli Allegra le hanno sostituite.', 'Le 51, 52 e 55 sono state demolite. La 53 si trova al museo ferroviario dell’Albula da luglio 2024.'] },
      { titel: 'Dotazione e accessibilità', liste: ['12 posti in 1a e 16 in 2a classe', 'Circolazione in coppia in comando multiplo', 'Nessun sistema ZSI 127'] }
    ],
  bilder: ['ABe 4/4 III 56 e 51 al Lago Bianco', 'ABe 4/4 III sul viadotto elicoidale di Brusio']
});
uebZug('rhb-abe501', {
  beiname: 'Retico volante',
  typ: 'Automotrice leggera in acciaio del 1939/40 (storica)',
  text: ['Le quattro ABe 4/4 501–504 erano automotrici leggere in acciaio per la rete a corrente alternata. Erano soprannominate «Fliegender Rätier» (il Retico volante).', 'La 501 è conservata come automotrice storica.'],
  kennzahlen: [['4', 'automotrici'], ['1939', 'costruzione'], ['490 kW', 'potenza (opuscolo)'], ['70 km/h', 'velocità massima (opuscolo)']],
  daten: { 'Bauart': 'automotrice elettrica leggera in acciaio', 'Hersteller': 'SWS (meccanica), BBC e MFO (elettrica)', 'Länge': 'circa 18 m', 'Leistung': 'circa 490 kW', 'Erhalten': '501 (storica)' },
  specNote: 'Potenza, velocità e lunghezza secondo l’opuscolo RhB «Veicoli storici» (arrotondate).',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SWS costruì le quattro automotrici nel 1939/40 con equipaggiamento elettrico BBC e MFO. La loro cassa autoportante leggera in acciaio era allora una novità.'] },
      { titel: 'Impiego e tecnica', p: ['Offrivano un proprio servizio veloce di automotrici sulla rete a corrente alternata. Una foto del 1995 mostra ancora le 502 e 503 con una Ge 4/4 I a Pontresina.', 'La 501 ricevette più tardi una cassa rinforzata, una cabina modificata e un nuovo arredamento interno. Non mostra quindi più lo stato del 1939.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Compartimenti di 1a e 2a classe (AB)', 'Cassa autoportante leggera in acciaio', 'Arredamento interno rinnovato (501)'] }
    ],
  bilder: ['ABe 4/4 501 nel deposito di Landquart (2008)', 'Ge 4/4 I 603 con le ABe 4/4 503 e 502 a Pontresina (1995)']
});
uebZug('rhb-be44-511', {
  beiname: '511–516 treni navetta',
  typ: 'Treni navetta regionali del 1971 e 1979 (storici)',
  text: ['Con carrozze intermedie e carrozze pilota, le Be 4/4 511–516 formavano treni navetta per il traffico regionale e suburbano. Quattro arrivarono nel 1971, due nel 1979.', 'Dal 2021 vengono ritirate.'],
  kennzahlen: [['6', 'automotrici'], ['784 kW', 'potenza'], ['90 km/h', 'velocità massima'], ['1971', 'primi treni']],
  daten: { 'Bauart': 'automotrice elettrica con carrozze intermedie e carrozze pilota', 'Hersteller': 'FFA (cassa), SIG (carrelli), SAAS (elettrica)', 'Fahrzeugnummern': '511–516; carrozze pilota ABDt 1711–1716', 'Gewicht': '44,6 t', 'Erhalten': '514 museale a Bergün (secondo il registro)' },
  specNote: 'Valori secondo Wikipedia. Wikipedia indica solo la cabina della 514 per il museo ferroviario dell’Albula; il registro elenca la 514 come veicolo museale a Bergün.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['FFA costruì le casse, SIG i carrelli e SAAS l’equipaggiamento elettrico. Le prime quattro automotrici arrivarono nel 1971, altre due nel 1979. L’automotrice e l’intero treno navetta sono veicoli diversi.'] },
      { titel: 'Impiego e tecnica', p: ['I treni navetta circolavano nel traffico regionale e suburbano, per esempio attorno a Coira, verso Thusis e Davos. Quattro motori di trazione erogano insieme 784 kW; la velocità massima è di 90 km/h.', 'Dal 2021 vengono ritirati; il primo treno è andato alla demolizione il 29 gennaio 2021. Secondo il registro la 515 è accantonata.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Carrozze pilota ABDt con 1a e 2a classe e compartimento bagagli', 'Servizio navetta senza manovre', 'Quattro motori di trazione da 196 kW ciascuno'] }
    ],
  bilder: ['Treno navetta con la Be 4/4 511', 'Treno navetta Be 4/4 a Tiefencastel (1984)', '2a classe nella carrozza pilota ABDt 1713 (2016)']
});
uebZug('rhb-misox', {
  name: 'Automotrici della Mesolcina',
  typ: 'Automotrici della ferrovia Bellinzona–Mesocco (storiche)',
  text: ['La ferrovia da Bellinzona a Mesocco, in Mesolcina, entrò nella RhB nel 1942. Portò con sé proprie automotrici a corrente continua.', 'La BDe 4/4 491 del 1958 è oggi un veicolo museale a Bergün.'],
  kennzahlen: [['1907', 'apertura Bellinzona–Mesocco'], ['5', 'automotrici 451–455'], ['1958', 'BDe 4/4 491'], ['1942', 'alla RhB']],
  daten: { 'Bauart': 'automotrici elettriche', 'Betreiber': 'Ferrovia Bellinzona–Mesocco (BM), dal 1942 RhB', 'Erhalten': '491 (Bergün)' },
  specNote: 'Secondo la statistica delle locomotive Pospichal. Una serie RhB 491–492 non è documentata nei registri.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La ferrovia della Mesolcina aveva tre tipi di automotrici:'],
        tabelle: { kopf: ['Veicolo', 'Origine', 'Costruzione'], zeilen: [
          ['BCe/ABDe 4/4 451–455', 'BM 1–5, Ringhoffer e MFO', '1907 e 1909'], ['Ke/Fe 4/4 471', 'BM Ke 4/4 501, Ringhoffer e MFO', '1907'], ['BDe 4/4 491', 'SWS e BBC', '1958']] } },
      { titel: 'Impiego e tecnica', p: ['Le 451–455 svolgevano il traffico viaggiatori e bagagli, la 471 merci e bagagli. La 491 arrivò nel 1958 come automotrice più recente.', 'Foto del 1966 mostrano la 452 e la 491 a Mesocco.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Compartimenti viaggiatori e vano bagagli (ABDe)', 'Per la linea di contatto a corrente continua della ferrovia della Mesolcina', 'La 471 come automotrice per merci e bagagli'] }
    ],
  bilder: ['ABDe 4/4 452 a Mesocco (1966)', 'BDe 4/4 491 a Mesocco (1966)']
});
uebZug('rhb-arosa', {
  name: 'Automotrici di Arosa',
  typ: 'Automotrici della ferrovia Coira–Arosa (storiche)',
  text: ['Dal 1914 la ferrovia Coira–Arosa circolò con proprie automotrici a corrente continua. Dopo la ripresa del 1942 ricevettero i numeri RhB 481–486.', 'Dal 1957 la RhB riassegnò questi numeri a moderne ABDe 4/4. Fino al 1997 la linea di Arosa funzionò in corrente continua.'],
  kennzahlen: [['1914', 'apertura Coira–Arosa'], ['6', 'automotrici ChA 1–6'], ['1957', 'nuove ABDe 4/4 481–486'], ['1997', 'passaggio alla corrente alternata']],
  daten: { 'Bauart': 'automotrici elettriche', 'Hersteller': 'SWS, BBC (ABDe 4/4 del 1957/58)', 'Betreiber': 'Ferrovia Coira–Arosa (ChA), dal 1942 RhB', 'Stromsystem': '2400 V corrente continua (fino al 1997)', 'Fahrzeugnummern': 'ChA 1–6 → RhB 481–486 (vecchia 486 → 487); nuove ABDe 4/4 481–486; ABe 4/4 487–488', 'Erhalten': '484 e 486 a La Mure (fuori servizio)' },
  specNote: 'I numeri 481–486 sono stati assegnati due volte. Gli anni di costruzione 1914 e 1957 non vanno quindi attribuiti allo stesso veicolo.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Ci sono state due generazioni con gli stessi numeri:'],
        tabelle: { kopf: ['Generazione', 'Numeri', 'Costruzione'], zeilen: [
          ['Automotrici ChA', 'ChA 1–6 → RhB 481–486, vecchia 486 → 487', '1914, poi 5 e 6'], ['ABDe 4/4', '481–486 (nuove)', '1957/58, SWS e BBC'], ['ABe 4/4', '487, 488 (nuove)', 'più tardi; poi alle CJ']] } },
      { titel: 'Impiego e tecnica', p: ['Nel 1997 la linea di Arosa è passata da 2400 V corrente continua a 11 kV corrente alternata. Ciò ha posto fine all’impiego delle automotrici a corrente continua.', 'Secondo il registro le ex 484 e 486 si trovano a La Mure in Francia, fuori servizio.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Compartimenti viaggiatori e vano bagagli (ABDe)', 'Per 2400 V corrente continua', 'Due carrelli'] }
    ],
  bilder: ['ABDe 4/4 482 della linea di Arosa (anni 1980)', 'Disegno tipo dell’automotrice BCF4 della ferrovia Coira–Arosa']
});
uebZug('rhb-dampfschneeschleuder', {
  name: 'Frese da neve storiche',
  typ: 'Frese da neve a vapore ed elettriche (storiche)',
  text: ['Già dal 1910 al 1913 la ferrovia del Bernina e la RhB avevano frese da neve a vapore. La Xrot d 9213 era ancora in azione al Lago Bianco nel 2010.', 'Altre frese storiche si trovano alla ferrovia a vapore della Furka e a Blonay–Chamby.'],
  kennzahlen: [['1913', 'frese della rete principale 9211, 9212'], ['1912', 'fresa del Bernina 1052'], ['64 t', 'peso in servizio 1052'], ['1958', 'fresa Beilhack 9216']],
  daten: { 'Bauart': 'frese da neve a vapore ed elettriche', 'Hersteller': 'SLM (frese a vapore), Beilhack (9216)', 'Betreiber': 'RhB e ferrovia del Bernina', 'Erhalten': '9212 (DFB, come R 12), 9213 (RhB), 1052 / vecchia 9214 (Blonay–Chamby), 9216 (DFB)' },
  specNote: 'Per la 9213 le fonti indicano il 1910 o il 1911. La scheda di Blonay–Chamby indica «1051» nell’intestazione, ma la storia rimanda alla 1052.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Il numero 9214 è stato assegnato due volte: prima a una fresa a vapore del Bernina, poi a una nuova macchina del 2001.'],
        tabelle: { kopf: ['Macchina', 'Costruzione', 'Oggi'], zeilen: [
          ['Xrot d 9211, 9212 (rete principale)', '1913, SLM', '9211 demolita, 9212 alla DFB'], ['Xrot d 9213 (ex Bernina R 1051)', '1910/11', 'RhB'],
          ['Xrot d 9214 (ex Bernina R 1052)', '1912, SLM 2299', 'Blonay–Chamby'], ['Xrot e 9215 «macinino da caffè»', 'trasformata nel 1941 dal carro K 208 del 1908', 'demolita nel 1983'],
          ['Xrot m 9216', '1958, Beilhack', 'alla DFB dal 2015'], ['Xrot et 9218, 9219', '–', '–']] } },
      { titel: 'Impiego e tecnica', p: ['Le frese della rete principale non avevano una trazione completa e venivano spinte. Le macchine del Bernina hanno propri rodiggi motori; ma durante lo sgombero la ruota della fresa ha bisogno del vapore, perciò di solito spinge anche una locomotiva.', 'La 9215 fu dapprima carro merci, poi carro cucina e dal 1941 fresa da neve elettrica. La fresa Beilhack 9216 sgombera oggi la stazione di Realp per la DFB.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Ruota della fresa azionata a vapore (Xrot d)', '1052: pressione in caldaia 14 bar, 7 m³ d’acqua e 4 t di carbone', 'Xrot et 9218: nel 1968 telecomandava l’automotrice di spinta'] }
    ],
  bilder: ['Fresa a vapore Xrot d 9213 al Lago Bianco (2010)', 'Ex fresa RhB R 12 alla DFB tra Realp e Tiefenbach', 'Fresa Beilhack 9216 alla DFB (2020)']
});
uebZug('rhb-hist-wagen', {
  name: 'Carrozze viaggiatori storiche',
  typ: 'Carrozze viaggiatori, postali e di società conservate',
  text: ['La RhB conserva una serie di carrozze storiche per treni speciali: carrozze viaggiatori delle origini, carrozze di società e postali.', 'Altre ex carrozze della RhB circolano alla ferrovia museo Blonay–Chamby.'],
  kennzahlen: [['6', 'carrozze WN 9801–9806'], ['1903', 'AB 121 (Blonay–Chamby)'], ['1939', 'carrozze ad accesso centrale'], ['1889', 'origini della LD']],
  daten: { 'Bauart': 'carrozze viaggiatori, postali e di società storiche', 'Betreiber': 'Ferrovia Landquart–Davos e RhB', 'Erhalten': 'RhB; AB 121 e As 2 a Blonay–Chamby' },
  specNote: 'I registri indicano anni di costruzione diversi per diverse carrozze; non sono quindi indicati.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['I numeri WN sono numeri amministrativi che si aggiungono alla vecchia iscrizione restaurata.'],
        tabelle: { kopf: ['Carrozza', 'Funzione'], zeilen: [
          ['LD C 32 / WN 9801', 'carrozza viaggiatori delle origini, «Il Samedrin»'], ['B 2138 / WN 9802', 'carrozza di società «Filisurer Stübli»'], ['Z° 26 / WN 9803', 'carrozza postale'],
          ['BC 110 / WN 9804', 'carrozza viaggiatori della Mesolcina «Ul Mesolcines»'], ['F 4 / WN 9805', 'bagagliaio e carrozza bar'], ['C 66 / WN 9806', 'carrozza viaggiatori'],
          ['A 1251, B 2302', 'carrozze ad accesso centrale del 1939'], ['B 2245–2247, D 4205', 'carrozze a carrelli e bagagliaio']] } },
      { titel: 'Impiego e tecnica', p: ['Le carrozze circolano in treni storici della RhB, spesso dietro locomotive storiche. Nelle carrozze restaurate sedili, colori e disposizione possono differire dallo stato di un tempo.', 'A Blonay–Chamby si trova l’AB 121, una carrozza SIG del 1903 con dodici posti di 1a e dodici di 2a classe. L’As 2 del 1903 era una carrozza salone, dal 1948 la carrozza panoramica 2191, e dal 1999 una carrozza salone-bar.'] },
      { titel: 'Dotazione e accessibilità', liste: ['AB 121: corridoio laterale, toilette e illuminazione elettrica', 'Freni a mano e a vuoto sulle vecchie carrozze', 'Bar nell’F 4 e nell’As 2'] }
    ],
  bilder: ['Carrozza storica BC 110 «Ul Mesolcines» a Samedan (2015)', 'Carrozze storiche B 2060 e A 1102 (2024)', 'AB 121 alla ferrovia museo Blonay–Chamby (2016)']
});
uebZug('rhb-hist-gueterwagen', {
  name: 'Carri merci storici',
  typ: 'Carri merci conservati della RhB',
  text: ['Alcuni carri merci storici mostrano come la RhB trasportava un tempo le merci: carri coperti, carri aperti a sponde alte e basse, carri per tronchi e un carro per l’acqua.', 'Oggi portano anche un numero WN.'],
  kennzahlen: [['7', 'carri e coppie conservati'], ['9851', 'primo numero WN'], ['N', 'coppia di carri per tronchi'], ['K', 'carri coperti']],
  daten: { 'Bauart': 'carri merci storici' },
  specNote: 'Secondo il registro WN di Haribu (stato marzo 2026). Le famiglie originali erano molto più grandi; i carri non conservati mancano qui.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Questi carri sono conservati:'],
        tabelle: { kopf: ['Carro', 'Numero WN', 'Tipo'], zeilen: [
          ['N 1520 / N 1513', 'WN 9851', 'coppia di carri per tronchi'], ['K1 5615', 'WN 9852', 'carro coperto'], ['M 7070', 'WN 9853', 'carro aperto a sponde basse, prima P 10059'],
          ['K 5563', 'WN 9854', 'carro coperto'], ['L3 6603', 'WN 9855', 'carro aperto a sponde alte'], ['K 5342', 'WN 9856', 'carro coperto, prima Xk 9069'], ['Uh 8101', 'WN 9862', 'carro per acqua e cisterna']] } },
      { titel: 'Impiego e tecnica', p: ['Il numero WN è un numero amministrativo; la vecchia iscrizione restaurata resta sul carro. Il registro storico dei numeri conosce molti altri gruppi, per esempio K, L, M, R, S e U.', 'I documenti pubblici non bastano per un elenco completo di tutti i carri merci dal 1889.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Carri coperti (K)', 'Carri aperti (L e M)', 'Coppia di carri per tronchi (N)', 'Carro per l’acqua (Uh)'] }
    ]
});
uebZug('rhb-ehem-diesel', {
  name: 'Ex veicoli diesel',
  typ: 'Ex locomotive diesel e un’automotrice diesel della RhB (storiche)',
  text: ['Le Gm 3/3 231–233 del 1975/76 hanno manovrato per decenni alla RhB. Oggi si trovano alla ferrovia a vapore della Furka.', 'La Gm 4/4 241 è passata nel 2023 alla Brohltalbahn in Germania.'],
  kennzahlen: [['3', 'Gm 3/3 231–233'], ['1975', 'Gm 3/3 costruite'], ['2023', '241 alla Brohltalbahn'], ['1947', 'BFm 150 dalla FO']],
  daten: { 'Bauart': 'locomotive diesel e automotrice diesel', 'Fahrzeugnummern': 'Gm 3/3 231–233; Gm 4/4 241; BFm 2/2 150 (ex FO 22)', 'Erhalten': 'Gm 3/3 alla DFB; 241 alla Brohltalbahn (D4)' },
  specNote: 'Per la Gm 4/4 241 i registri indicano il 1958 o il 1959 come anno di costruzione. Per la BFm 150, il 1947 è l’anno di ripresa, non di costruzione.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le Gm 3/3 231–233 sono state costruite nel 1975/76. La Gm 4/4 241 risale alla fine degli anni 1950. L’automotrice diesel BFm 2/2 150 arrivò nel 1947 dalla ferrovia Furka-Oberalp, dove portava il numero 22.'] },
      { titel: 'Impiego e tecnica', p: ['Le Gm 3/3 manovravano in stazioni come Landquart e Coira. Oggi si trovano alla ferrovia a vapore della Furka, in stati diversi.', 'Dal 2023 la Gm 4/4 241 fa parte del parco della Brohltalbahn come D4.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Trazione diesel', 'Tre (Gm 3/3) o quattro (Gm 4/4) assi motori', 'Vano bagagli nella BFm (lettera F)'] }
    ],
  bilder: ['Gm 3/3 233 a Landquart', 'Gm 4/4 241 a Untervaz (2019)']
});
uebZug('rhb-draisinen', {
  name: 'Draisine', beiname: 'Dh 1/2 e Dm 1/2',
  typ: 'Draisina a mano e draisina a motore della RhB (storiche)',
  text: ['Due piccole ex draisine della RhB si trovano alla ferrovia museo Blonay–Chamby: una draisina a mano di circa il 1900 e una draisina a motore svedese degli anni 1930.', 'Entrambe sono arrivate alla ferrovia museo il 22 marzo 1968.'],
  kennzahlen: [['2', 'draisine'], ['1900', 'draisina a mano (circa)'], ['anni 1930', 'draisina a motore'], ['1968', 'a Blonay–Chamby']],
  daten: { 'Bauart': 'draisina a mano e draisina a motore', 'Betreiber': 'RhB, oggi ferrovia museo Blonay–Chamby', 'Antrieb': 'forza muscolare (Dh), motore a benzina a due tempi (Dm)', 'Erhalten': 'Ferrovia museo Blonay–Chamby (dal 1968)' },
  specNote: 'Il museo non indica potenza né velocità.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La draisina a mano Dh 1/2 risale a circa il 1900, la draisina a motore Dm 1/2 viene dalla Svezia e risale agli anni 1930. Entrambe sono arrivate a Blonay–Chamby il 22 marzo 1968.'] },
      { titel: 'Impiego e tecnica', p: ['La draisina a mano si muove con la forza muscolare tramite leve e ingranaggi. Il museo suppone che circolasse soprattutto in discesa e sui tratti pianeggianti.', 'La draisina a motore ha un motore a benzina a due tempi e un freno a mano e a pedale; è stata revisionata nel 1995.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Azionamento a leva (Dh)', 'Motore a benzina a due tempi (Dm)', 'Freno a mano e a pedale (Dm)'] }
    ],
  bilder: ['Draisina a motore Dm 1/2 a Blonay–Chamby (2011)']
});

/* carte «Dove circola?» */
uebEinsatz({
  'rhb-capricorn': 'Secondo la RhB su Landquart–Davos–Filisur, Landquart–Scuol, Landquart–St. Moritz e Coira–Disentis/Mustér. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-allegra': 'Sulla rete principale e sulla linea del Bernina fino a Tirano, per esempio nel Bernina Express da Coira attraverso l’Albula. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-allegra-stz': 'Soprattutto nel traffico pendolare attorno a Coira, per esempio sulla S-Bahn Coira–Thusis. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-alvra': 'Sulla linea dell’Albula tra Coira e St. Moritz. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-ge44ii': 'Su tutta la rete a corrente alternata della RhB, anche sulla linea di Arosa. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-ge44iii': 'In testa ai treni veloci sull’Albula, al Glacier Express e ai treni auto nella galleria della Vereina. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-panorama': 'Nel Bernina Express da Coira a Tirano attraverso l’Albula e il passo del Bernina; carrozze scoperte anche nella gola del Reno. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-glacier': 'Nel Glacier Express da St. Moritz e Davos via Coira e Disentis/Mustér, poi sulla rete della MGB fino a Zermatt. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-ew': 'In treni trainati su tutta la rete della RhB. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-steuerwagen': 'In treni navetta con locomotiva sulla rete principale e nei treni auto. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-gastro': 'In treni speciali e charter, per esempio nell’Alpine Classic Pullman Express. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-vereina': 'Tra le stazioni di carico di Klosters Selfranga e Sagliains attraverso la galleria della Vereina. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-gepaeckwagen': 'Nei treni della rete principale; le carrozze per bici BD 56401–56406 circolano nei treni Alvra sull’Albula. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-haik': 'Nel traffico merci verso le valli grigionesi. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-uac': 'Nel traffico merci sulla rete della RhB. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-za': 'Per il rifornimento dei Grigioni di oli minerali, su tutta la rete. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-fac': 'Per ghiaia e altri materiali sfusi sulla rete della RhB. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-flachwagen': 'Nel traffico merci di macchine, legname, acciaio e container su tutta la rete. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-acts': 'Nel traffico container su tutta la rete della RhB. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-container': 'Nel traffico container su tutta la rete della RhB. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-spezialtransport': 'Per carichi pesanti e alti sulla rete della RhB. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-geaf22': 'In servizio di manovra, tra l’altro a Landquart, Coira, Ilanz, Thusis, Davos Platz e Zernez.',
  'rhb-ge33': 'In servizio di manovra a Samedan e a Coira.',
  'rhb-gmf44-242': 'In servizio di manovra sulla rete principale, per esempio a Klosters Platz, Landquart e Davos. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-taf22': 'In officine e depositi, tra l’altro a Landquart e Poschiavo.',
  'rhb-gmf44ii': 'In testa a treni cantiere e, in inverno, con frese da neve su tutta la rete della RhB. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-gem44': 'Sulla linea del Bernina, stazionate a Pontresina e Poschiavo; in diesel anche sulla rete principale. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-tm': 'In servizio di manovra e in testa a piccoli treni cantiere su tutta la rete. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-tieflade': 'Nella logistica dei cantieri sulla rete della RhB. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-windhoff': 'Previsti dal 2029 per costruzione e manutenzione su tutta la rete della RhB. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-dienstwagen': 'Per lavori al binario, misurazioni e materiale su tutta la rete. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-loeref': 'Per interventi nella galleria della Vereina, stazionati su entrambi i lati della galleria. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-fahrleitung': 'Per lavori alla linea di contatto su tutta la rete. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-schneeschleuder': 'In inverno sulla rete principale e sulla linea del Bernina. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-ge66i': 'In passato soprattutto sulla linea dell’Albula. Conservate a Landquart e Samedan nonché al Museo Svizzero dei Trasporti di Lucerna e a Bergün. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-ge66ii': 'In passato in testa a treni pesanti sulla rete principale; la 702 si trova al Museo Svizzero dei Trasporti di Lucerna. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-ge44i': 'In passato su tutta la rete a corrente alternata; la 605 traina oggi treni storici. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-ge24': 'Dapprima sulla linea dell’Engadina Bever–Scuol; conservate a Landquart, al Museo Svizzero dei Trasporti di Lucerna e al museo ferroviario dell’Albula. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-ge46': 'Dapprima sulla linea dell’Engadina, poi sulla rete principale; la 353 traina treni museali. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-bernina-loks': 'Sulla linea del Bernina; la 81 circola oggi alla ferrovia museo Blonay–Chamby. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-g34': 'Dal 1889 sulla ferrovia Landquart–Davos; oggi in testa a treni speciali a vapore. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-mallet': 'In passato nel pesante servizio di montagna sulla ferrovia Landquart–Davos e sull’Albula. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-g45': 'In passato in testa a treni pesanti sull’Albula; oggi in testa a treni speciali a vapore. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-bernina-tw': 'Sulla linea del Bernina; la 35 si trova alla ferrovia museo Blonay–Chamby. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-abe44ii': 'Sulla linea del Bernina tra St. Moritz e Tirano. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-abe44iii': 'Fino al 2023 sulla linea del Bernina; la 53 si trova al museo ferroviario dell’Albula a Bergün. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-abe501': 'In passato sulla rete a corrente alternata, per esempio in Engadina. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-be44-511': 'In passato nel traffico regionale e suburbano, per esempio attorno a Coira, verso Thusis e Davos. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-misox': 'In passato sulla ferrovia Bellinzona–Mesocco; la 491 si trova a Bergün. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-arosa': 'In passato sulla linea di Arosa Coira–Arosa, in corrente continua fino al 1997. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-dampfschneeschleuder': 'In passato sulla linea del Bernina e sulla rete principale; conservate alla RhB, alla DFB a Realp e a Blonay–Chamby. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-hist-wagen': 'Nei treni storici della RhB; alcune carrozze a Blonay–Chamby. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-hist-gueterwagen': 'In passato nel traffico merci della RhB; oggi in treni storici. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-ehem-diesel': 'In passato in servizio di manovra, per esempio a Landquart e Coira; le Gm 3/3 si trovano oggi alla DFB a Realp.',
  'rhb-draisinen': 'Oggi alla ferrovia museo Blonay–Chamby.'
});
