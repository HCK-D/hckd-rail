/* Italiano – transN (Transports Publics Neuchâtelois) */
uebDict({
  'Transports Publics Neuchâtelois': 'Transports Publics Neuchâtelois',
  'Breite': 'Larghezza', 'Bezeichnung bei transN': 'Designazione presso transN', 'transN': 'transN', 'transN, früher TRN': 'transN, già TRN',
  'transN, früher Trogenerbahn und Appenzeller Bahnen': 'transN, già Trogenerbahn e Appenzeller Bahnen', 'transN, früher RdB und CMN': 'transN, già RdB e CMN',
  '600 V Gleichstrom': '600 V continua', '1500 V Gleichstrom': '1500 V continua', '15 kV 16,7 Hz': '15 kV 16,7 Hz'
});

uebZug('trn-rabe-523', {
  typ: 'Stadler FLIRT a quattro casse per Neuchâtel e l’arco giurassiano',
  text: ['I quattro FLIRT RABe 523 sono i treni a scartamento normale più recenti di transN. Circolano sulle linee Neuchâtel–Buttes e Neuchâtel–La Chaux-de-Fonds–Le Locle.', 'Con i tre RABe 527 più vecchi, transN possiede sette FLIRT.'],
  kennzahlen: [['4', 'treni (074–077)'], ['160 km/h', 'velocità massima'], ['149', 'posti a sedere'], ['2017', 'entrata in servizio']],
  daten: { 'Bauart': 'elettrotreno a pianale ribassato, 4 casse', 'Länge': '74 m', 'Breite': '2,88 m', 'Gewicht': '127 t a vuoto', 'Sitzplätze': '24 in 1a, 125 in 2a classe', 'Anzahl': '4 treni' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha consegnato a transN quattro FLIRT a quattro casse della serie RABe 523, numerati 523 074–077; transN indica l’anno 2017. Con i tre RABe 527, transN conta sette FLIRT nel traffico viaggiatori.'] },
      { titel: 'Impiego e tecnica', p: ['I treni circolano sulle linee transN R21 Neuchâtel–Buttes e R23 Neuchâtel–La Chaux-de-Fonds–Le Locle. Sono mantenuti tra l’altro al deposito di Fleurier.', 'Un treno è lungo 74 m e largo 2,88 m, pesa 127 t, ha 2600 kW e viaggia fino a 160 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['149 posti a sedere: 24 in 1a e 125 in 2a classe', 'Accessi a pianale ribassato, come su tutti i FLIRT'],
        p: ['transN non pubblica altri dettagli sulla sua pagina della flotta, per esempio sui posti per sedie a rotelle o sul WC.'] }
    ],
  bilder: ['RABe 523 074 come RegioExpress per Le Locle a La Chaux-de-Fonds (2018)', 'RABe 523 tra Le Crêt-du-Locle e Le Locle (2018)', 'RABe 523 076 (2019)']
});
uebZug('trn-rabe-527', {
  typ: 'Stadler FLIRT a quattro casse della prima serie transN',
  text: ['I tre RABe 527 sono la serie FLIRT più vecchia di transN. Arrivarono dal 2007 al 2009 ai Transports Régionaux Neuchâtelois (TRN), che oggi fanno parte di transN.', 'Circolano insieme ai più recenti RABe 523.'],
  kennzahlen: [['3', 'treni (331–333)'], ['160 km/h', 'velocità massima'], ['184', 'posti a sedere'], ['2007', 'entrata in servizio']],
  daten: { 'Bauart': 'elettrotreno a pianale ribassato, 4 casse', 'Länge': '74 m', 'Breite': '2,88 m', 'Gewicht': '120 t a vuoto', 'Sitzplätze': '24 in 1a, 160 in 2a classe', 'Anzahl': '3 treni' },
  specNote: 'transN indica gli anni 2007–2009. Da non confondere con i RABe 527 delle TPF o delle FFS.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler consegnò i tre treni dal 2007 al 2009, allora per le TRN. Dalla fusione del 2012 appartengono a transN. Le foto documentano i numeri 527 331–333.'] },
      { titel: 'Impiego e tecnica', p: ['Come i RABe 523, i treni circolano sulle linee R21 Neuchâtel–Buttes e R23 Neuchâtel–La Chaux-de-Fonds–Le Locle.', 'Un treno è lungo 74 m e largo 2,88 m, pesa 120 t, ha 2600 kW e viaggia fino a 160 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['184 posti a sedere: 24 in 1a e 160 in 2a classe', 'Accessi a pianale ribassato'],
        p: ['transN non pubblica altri dettagli sulla dotazione sulla sua pagina della flotta.'] }
    ],
  bilder: ['RABe 527 331 a Le Locle (2016)', 'RABe 527 331 a La Chaux-de-Fonds (2024)', 'RABe 527 331 a La Chaux-de-Fonds (2016)']
});
uebZug('trn-be-4-8', {
  typ: 'Automotrice articolata Stadler a tre casse della linea Littorail (ex Trogenerbahn)',
  text: ['Sulla linea Littorail da Neuchâtel a Boudry circolano cinque automotrici articolate Stadler a tre casse. Provengono dalla Trogenerbahn presso San Gallo.', 'transN le chiama «GTW 4/8»; storicamente si chiamano Be 4/8.'],
  kennzahlen: [['5', 'treni (031–035)'], ['80 km/h', 'velocità massima'], ['259', 'posti in totale'], ['2019', 'presso transN']],
  daten: { 'Bauart': 'automotrice articolata a tre casse con parti a pianale ribassato', 'Länge': '36,3 m', 'Breite': '2,40 m', 'Gewicht': '47,3 t a vuoto', 'Sitzplätze': '259 posti in totale', 'Anzahl': '5 treni', 'In Betrieb seit': '2004 (presso transN dal 2019)' },
  specNote: 'I valori tecnici sono i dati attuali di transN; le vecchie schede della Trogenerbahn differiscono in parte. I 259 posti comprendono posti a sedere e in piedi.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler costruì i cinque treni per la ferrovia San Gallo–Trogen: 31 e 32 nel 2004, da 33 a 35 nel 2008. In seguito circolarono presso le Appenzeller Bahnen.', 'transN acquistò i cinque treni nel 2018 per circa 8 milioni di franchi. Il primo, il 032, arrivò a Neuchâtel il 9 aprile 2019.'] },
      { titel: 'Impiego e tecnica', p: ['I treni circolano sulla linea Littorail R15 da Neuchâtel Place Pury a Boudry. Qui hanno sostituito le automotrici Be 4/4 501–506 del 1981 e del 1988.', 'Un treno è lungo 36,3 m, pesa 47,3 t, ha 432 kW e viaggia fino a 80 km/h. La linea di contatto è alimentata a 600 V continua.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Automotrice articolata a tre casse con parti a pianale ribassato', '259 posti in totale, a sedere e in piedi'],
        p: ['transN non dà indicazioni sui posti per sedie a rotelle o su altre dotazioni sulla sua pagina della flotta.'] }
    ],
  bilder: ['Be 4/8 033 in arrivo a Boudry (2021)', 'Be 4/8 034 a Boudry Littorail (2025)', 'Be 4/8 035, ex Trogenerbahn (2021)', 'Be 4/8 035 a Neuchâtel Place Pury (2025)']
});
uebZug('trn-abe-4-8', {
  typ: 'Elettrotreno Stadler a due casse per La Chaux-de-Fonds–Les Ponts-de-Martel',
  text: ['Dal 2024 due nuovi elettrotreni Stadler circolano tra La Chaux-de-Fonds e Les Ponts-de-Martel. Portano i numeri 9 e 10.', 'Hanno sostituito le vecchie automotrici a pianale alto e offrono un accesso a pianale ribassato.'],
  kennzahlen: [['2', 'treni (9, 10)'], ['80 km/h', 'velocità massima'], ['237', 'posti in totale'], ['2024', 'entrata in servizio']],
  daten: { 'Bauart': 'elettrotreno a due casse', 'Fahrzeugnummern': '9 e 10', 'Länge': '39 m', 'Breite': '2,65 m', 'Gewicht': '67,1 t a vuoto', 'Sitzplätze': '237 posti in totale', 'Anzahl': '2 treni' },
  specNote: 'Una prima scheda di progetto indicava 39,30 m e 55 t. Qui valgono i dati attuali di transN.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha costruito i due treni 9 e 10; sono entrati in servizio nel 2024. Hanno sostituito le automotrici BDe 4/4 6 e 7 del 1991 e 8 del 1996, che avevano accessi alti.'] },
      { titel: 'Impiego e tecnica', p: ['I treni circolano sulla R22 La Chaux-de-Fonds–Les Ponts-de-Martel. La linea di contatto è alimentata a 1500 V continua.', 'Un treno è lungo 39 m e largo 2,65 m, pesa 67,1 t, ha 1600 kW e viaggia fino a 80 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Accesso a pianale ribassato', '237 posti in totale, a sedere e in piedi', 'Due casse'],
        p: ['Grazie all’accesso a pianale ribassato, la linea è molto più accessibile che con le vecchie automotrici a pianale alto.'] }
    ],
  bilder: ['ABe 4/8 9 (2024)', 'ABe 4/8 10 a La Chaux-de-Fonds (2024)']
});
uebZug('trn-bde-4-4', {
  beiname: '3 e 5',
  typ: 'Automotrici del 1950 per Le Locle–Les Brenets',
  text: ['Le due automotrici del 1950 circolano sulla breve linea da Le Locle a Les Brenets. Furono modernizzate negli anni 1980.', 'Secondo una decisione di fine 2023, la ferrovia continuerà almeno fino al 2031.'],
  kennzahlen: [['2', 'automotrici (3, 5)'], ['60 km/h', 'velocità massima'], ['146', 'posti in totale'], ['1950', 'costruzione']],
  daten: { 'Bauart': 'automotrice elettrica con compartimento bagagli', 'Fahrzeugnummern': '3 e 5', 'Länge': '16,6 m', 'Breite': '2,68 m', 'Gewicht': '24 t a vuoto', 'Sitzplätze': '146 posti in totale' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Reggiane, in Italia, costruì le automotrici nel 1950, con equipaggiamento di TIBB e SAAS. Ramseier & Jenzer a Bienne modernizzò la 3 nel 1985/86 e la 5 nel 1986/87. transN impiega oggi queste due automotrici.'] },
      { titel: 'Impiego e tecnica', p: ['Le automotrici circolano sulla R24, la linea di poco più di 4 km tra Le Locle e Les Brenets. Nel 2020 cantone e comuni prevedevano di sostituire la ferrovia con un bus dal 2025; a fine 2023 è stato deciso che i treni circoleranno almeno fino al 2031.', 'Un’automotrice è lunga 16,6 m, pesa 24 t, ha 480 kW e viaggia fino a 60 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['146 posti in totale, a sedere e in piedi', 'Compartimento bagagli (lettera D)', 'Accessi alti con gradini'] }
    ],
  bilder: ['BDe 4/4 5 esce dalla galleria dei Petits-Monts presso Le Locle (2020)', 'BDe 4/4 5 a Les Brenets (2018)', 'BDe 4/4 5 delle CMN a Les Brenets (1998)']
});
uebZug('trn-tm-44-normal', {
  beiname: 'scartamento normale',
  typ: 'Trattore da cantiere diesel-elettrico Stadler',
  text: ['transN possiede due moderni trattori da cantiere Tm 4/4 di Stadler, uno per lo scartamento normale e uno per quello metrico. Questo lavora sulla rete a scartamento normale.', 'Ha una gru e una superficie di carico per il materiale.'],
  kennzahlen: [['1', 'veicolo'], ['80 km/h', 'velocità massima (tipo)'], ['480 kW', 'potenza del motore (tipo)'], ['diesel', 'trazione']],
  daten: { 'Bauart': 'trattore da cantiere diesel-elettrico con gru', 'Motor': 'Mercedes-Benz OM 473 (tipo)', 'Länge': '18,0 m (tipo)', 'Gewicht': '52 t (tipo)', 'Leistung': '480 kW (tipo)', 'Höchstgeschwindigkeit': '80 km/h (tipo)' },
  specNote: 'I valori con «tipo» descrivono la famiglia di veicoli secondo la Schweizer Eisenbahn-Revue 3/2023. Le fonti verificate non indicano né il numero né l’anno esatto di entrata in servizio del trattore a scartamento normale.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Secondo il rapporto di gestione 2025, transN possiede due Tm 4/4 di Stadler, uno per lo scartamento normale e uno per quello metrico. Il numero del trattore a scartamento normale non è indicato nelle fonti verificate.'] },
      { titel: 'Impiego e tecnica', p: ['Il trattore serve per costruzione, manutenzione e trasporto di materiale sulla rete a scartamento normale di transN, per esempio sulla linea Travers–Buttes.', 'Il tipo è diesel-elettrico: un motore Mercedes-Benz OM 473 da 480 kW alimenta quattro motori di trazione. Il trattore è lungo 18,0 m, pesa 52 t e viaggia fino a 80 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Gru Palfinger con sbraccio fino a 17 m (tipo)', 'Piattaforma di carico da 12 t (tipo)', 'Radiocomando (tipo)', 'Nessun compartimento passeggeri'] }
    ]
});
uebZug('trn-tm-44-meter', {
  beiname: '012 scartamento metrico',
  typ: 'Trattore da cantiere diesel-elettrico Stadler per lo scartamento metrico',
  text: ['Il Tm 4/4 012 a scartamento metrico è entrato in servizio presso transN nel 2023. Lavora per i cantieri sulle linee a scartamento metrico.', 'È il fratello del trattore a scartamento normale dello stesso tipo.'],
  kennzahlen: [['1', 'veicolo (012)'], ['80 km/h', 'velocità massima (tipo)'], ['480 kW', 'potenza del motore (tipo)'], ['2023', 'entrata in servizio']],
  daten: { 'Bauart': 'trattore da cantiere diesel-elettrico con gru', 'Motor': 'Mercedes-Benz OM 473 (tipo)', 'Länge': '18,0 m (tipo)', 'Gewicht': '52 t (tipo)', 'Leistung': '480 kW (tipo)', 'Höchstgeschwindigkeit': '80 km/h (tipo)' },
  specNote: 'I valori con «tipo» descrivono la famiglia di veicoli secondo la Schweizer Eisenbahn-Revue 3/2023.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha fornito il trattore; transN lo ha messo in servizio nel 2023. Porta il numero 90 85 8570 012-7, in breve Tm 4/4 012.'] },
      { titel: 'Impiego e tecnica', p: ['Lavora per i cantieri sulla rete a scartamento metrico di transN, tra l’altro sulla R22 La Chaux-de-Fonds–Les Ponts-de-Martel. Sposta rotaie, materiale da costruzione e carri per pietrisco.', 'Il tipo è diesel-elettrico: un motore Mercedes-Benz OM 473 da 480 kW alimenta i motori di trazione. Il trattore è lungo 18,0 m, pesa 52 t e viaggia fino a 80 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Gru Palfinger con sbraccio di circa 17 m (tipo)', 'Piattaforma di carico da 12 t (tipo)', 'Nessun compartimento passeggeri'] }
    ]
});

/* carte «Dove circola?» */
uebEinsatz({
  'trn-rabe-523': 'Sulle linee transN R21 Neuchâtel–Val-de-Travers–Buttes e R23 Neuchâtel–La Chaux-de-Fonds–Le Locle.',
  'trn-rabe-527': 'Sulle linee transN R21 Neuchâtel–Val-de-Travers–Buttes e R23 Neuchâtel–La Chaux-de-Fonds–Le Locle.',
  'trn-be-4-8': 'Sulla linea Littorail R15 da Neuchâtel Place Pury a Boudry. Lo scartamento metrico è tratteggiato e semplificato.',
  'trn-abe-4-8': 'Sulla R22 La Chaux-de-Fonds–Les Ponts-de-Martel. Lo scartamento metrico è tratteggiato e semplificato.',
  'trn-bde-4-4': 'Sulla R24 Le Locle–Les Brenets, una linea a scartamento metrico di poco più di 4 km. È tratteggiata.',
  'trn-tm-44-normal': 'Per costruzione e manutenzione sulla rete a scartamento normale di transN, per esempio sulla linea Travers–Buttes.',
  'trn-tm-44-meter': 'Per i cantieri sulle linee a scartamento metrico di transN, tra l’altro La Chaux-de-Fonds–Les Ponts-de-Martel. Lo scartamento metrico è tratteggiato e semplificato.'
});
