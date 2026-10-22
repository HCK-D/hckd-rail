/* Italiano – transN: veicoli storici e speciali */
uebDict({
  'transN, früher CMN und TRN': 'transN, in passato CMN e TRN', 'transN, früher RVT und TRN': 'transN, in passato RVT e TRN',
  'RVT, später TRN und transN': 'RVT, poi TRN e transN', 'RVT, später TRN': 'RVT, poi TRN', 'TN, später TRN und transN': 'TN, poi TRN e transN',
  'NCB und TN': 'NCB e TN', 'TN': 'TN', 'TRN': 'TRN', 'Régional des Brenets (RdB)': 'Régional des Brenets (RdB)'
});

uebZug('trn-tm-2-2-11', {
  typ: 'Trattore da cantiere diesel a due assi per lo scartamento metrico',
  text: ['Il Tm 2/2 11 è un piccolo trattore diesel del 1983 proveniente dal parco delle ex CMN. Serve per costruzione e manutenzione sullo scartamento metrico.', 'La tabella dei veicoli di transN del 2024 lo indica per la linea La Chaux-de-Fonds–Les Ponts-de-Martel.'],
  kennzahlen: [['1983', 'costruzione'], ['175 kW', 'potenza del motore'], ['70 km/h', 'velocità massima'], ['19 t', 'peso']],
  daten: { 'Bauart': 'trattore diesel a due assi', 'Hersteller': 'RACO (tipo 240 DT 4H)' },
  specNote: '70 km/h è la velocità massima del veicolo, non la velocità ammessa durante i lavori. Non è confermato separatamente che il trattore sia ancora in servizio a ottobre 2026.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['RACO costruì il trattore nel 1983, tipo 240 DT 4H, per le Chemins de fer des Montagnes Neuchâteloises (CMN). Passò a transN tramite le TRN. Una foto del 1986 lo mostra a Les Ponts-de-Martel.', 'Appartiene alla generazione precedente ai trattori Stadler a quattro assi; nel 2023 si è aggiunto il Tm 4/4 012, molto più grande.'] },
      { titel: 'Impiego e tecnica', p: ['Le prescrizioni d’esercizio a scartamento metrico di transN (valide dal 15 dicembre 2024) lo indicano per la linea La Chaux-de-Fonds–Les Ponts-de-Martel.', 'Entrambi gli assi sono motori. Il motore diesel eroga 175 kW; il trattore pesa 19 t e viaggia fino a 70 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due assi motori', 'Peso frenato di 17 t', 'Nessun compartimento passeggeri'] }
    ],
  bilder: ['Tm 2/2 11 delle CMN a Les Ponts-de-Martel (1986)']
});
uebZug('trn-tm-237-312', {
  typ: 'Trattore da cantiere diesel a due assi per lo scartamento normale',
  text: ['Il Tm 237 312 è un piccolo trattore diesel del 1983 proveniente dal parco del RVT in Val-de-Travers. In passato si chiamava Tm 2/2 12.', 'Non va confuso con il nuovo Tm 4/4 012 a scartamento metrico.'],
  kennzahlen: [['1983', 'costruzione'], ['175 kW', 'potenza del motore'], ['19 t', 'peso'], ['10 m', 'lunghezza']],
  daten: { 'Bauart': 'trattore diesel a due assi', 'Hersteller': 'RACO (tipo 240 DT 4H)', 'Fahrzeugnummern': 'Tm 237 312, in passato Tm 2/2 12', 'Länge': '10 m (secondo la tabella dei treni)' },
  specNote: 'Lunghezza e peso provengono dalla tabella dei treni delle prescrizioni d’esercizio a scartamento normale di transN di aprile 2025. Non è noto se venga ancora impiegato dopo agosto 2025.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['RACO costruì il trattore nel 1983, tipo 240 DT 4H, per il Régional du Val-de-Travers (RVT), dove si chiamava Tm 2/2 12. Passò a transN tramite le TRN e oggi porta il numero Tm 237 312.', 'Dal 2023 transN ha con il Tm 4/4 235 077 un successore a quattro assi molto più grande.'] },
      { titel: 'Impiego e tecnica', p: ['Il trattore è stato usato per manutenzione e manovre in Val-de-Travers. Una foto lo mostra nel 2016 a Fleurier, un’altra ad agosto 2025 presso il deposito di Fleurier. Le prescrizioni d’esercizio a scartamento normale di aprile 2025 lo indicano ancora.', 'Il motore diesel eroga 175 kW. Secondo la tabella dei treni il trattore è lungo 10 m e pesa 19 t.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due assi', 'Peso frenato di 17 t, percentuale di frenatura 89 %', 'Nessun compartimento passeggeri'] }
    ],
  bilder: ['Tm 237 312 a Fleurier (2016)']
});
uebZug('trn-zweiwege', {
  name: 'Veicoli strada-rotaia', beiname: 'dumper 102 ed escavatore',
  typ: 'Veicoli strada-rotaia per i lavori sullo scartamento metrico',
  text: ['Sulle linee a scartamento metrico transN impiega due veicoli strada-rotaia: un dumper con il numero 102 e un escavatore. Entrambi circolano su strada e su rotaia.', 'Secondo le prescrizioni d’esercizio, entrambi sono entrati in servizio nel 2021.'],
  kennzahlen: [['2', 'veicoli'], ['2021', 'in servizio'], ['20 km/h', 'dumper su rotaia'], ['16 km/h', 'escavatore su rotaia']],
  daten: { 'Bauart': 'dumper strada-rotaia ed escavatore strada-rotaia', 'Fahrzeugnummern': 'dumper 102; l’escavatore non ha numero nella tabella', 'Gewicht': 'dumper 14,5 t, escavatore 12 t (a vuoto)', 'Höchstgeschwindigkeit': 'dumper 20 km/h, escavatore 16 km/h (su rotaia)' },
  specNote: 'Le prescrizioni d’esercizio non indicano costruttore né tipo. 14,5 t e 12 t sono tare; non se ne può ricavare un carico utile.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La tabella dei veicoli delle prescrizioni d’esercizio a scartamento metrico (valide dal 15 dicembre 2024) indica un «Dumper rail-route» con il numero 102 e una «Pelle rétro rail-route», cioè un escavatore strada-rotaia. Entrambi sono entrati in servizio nel 2021.', 'Costruttore e modello dei due veicoli non vi sono indicati.'],
        tabelle: { kopf: ['Veicolo', 'Tara', 'Su rotaia', 'Posti'], zeilen: [['Dumper 102', '14,5 t', '20 km/h', '2'], ['Escavatore', '12 t', '16 km/h', '1']] } },
      { titel: 'Impiego e tecnica', p: ['Entrambi i veicoli sono indicati per le linee a scartamento metrico La Chaux-de-Fonds–Les Ponts-de-Martel e Le Locle–Les Brenets. Il dumper trasporta materiale, l’escavatore lavora sul binario e accanto.', 'Su rotaia valgono prescrizioni d’esercizio particolari. Il dumper ha 10 t di peso frenato e 12 kN di forza di ritenuta, l’escavatore 9 t e 10 kN.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Ruote per strada e rotaia', 'Dumper con 2 posti, escavatore con 1 posto', 'Nessun compartimento passeggeri'] }
    ]
});
uebZug('trn-ast-21', {
  typ: 'Carrozza pilota panoramica e salone per corse speciali',
  text: ['L’ASt 21 è una carrozza pilota panoramica e salone a scartamento metrico. È nata dall’automotrice BDe 4/4 1 delle CMN del 1950 ed è entrata in servizio nel 1999.', 'Non ha trazione propria e circola insieme a un’automotrice BDe 4/4.'],
  kennzahlen: [['1999', 'trasformazione'], ['46', 'posti a sedere'], ['80 km/h', 'velocità massima'], ['18 t', 'tara']],
  daten: { 'Bauart': 'carrozza pilota con salone, senza trazione propria', 'Fahrzeugnummern': 'ASt 21, in passato BDe 4/4 1', 'Gewicht': '18 t a vuoto', 'In Betrieb seit': '1999 (trasformazione; veicolo d’origine del 1950)' },
  specNote: 'Alcune descrizioni più vecchie indicano il 1998 come anno di trasformazione; qui vale il 1999 secondo le prescrizioni d’esercizio di transN. Non è confermato separatamente che la carrozza sia in servizio nel 2026.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La carrozza è nata dall’automotrice BDe 4/4 1 delle CMN del 1950. Nella trasformazione sono state conservate parti della vecchia automotrice; secondo le prescrizioni d’esercizio di transN l’ASt 21 è entrata in servizio nel 1999.', 'La tabella dei veicoli di transN la indica ancora nel 2024.'] },
      { titel: 'Impiego e tecnica', p: ['La carrozza è pensata per offerte di viaggio speciali, non per il normale traffico pendolare. Come carrozza pilota non ha trazione propria; circola con un’automotrice BDe 4/4.', 'Pesa 18 t a vuoto, ha 20 t di peso frenato e viaggia fino a 80 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['46 posti a sedere', 'Grandi finestrini panoramici', 'Arredamento da salone invece di sedili per pendolari'] }
    ],
  bilder: ['Carrozza pilota panoramica ASt 21']
});
uebZug('trn-be-4-4-1', {
  typ: 'Locomotiva elettrica merci del RVT del 1951 (storica)',
  text: ['La Be 4/4 1 è una locomotiva unica del RVT in Val-de-Travers. Trainava soprattutto treni merci e treni scolastici.', 'Dal 1° marzo 2019 appartiene all’associazione RVT-Historique.'],
  kennzahlen: [['1951', 'costruzione'], ['703 kW', 'potenza oraria'], ['75 km/h', 'velocità massima'], ['45 t', 'peso in servizio']],
  daten: { 'Bauart': 'locomotiva elettrica con quattro motori di trazione', 'Länge': '11,15 m respingenti compresi', 'Leistung': '703 kW orari, 611 kW continui (alla ruota)', 'Erhalten': 'RVT-Historique (dal 2019)' },
  specNote: 'Dati tecnici secondo la scheda di RVT-Historique. La locomotiva non fa parte dell’attuale flotta merci di transN.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Gli Ateliers de Vevey costruirono la locomotiva nel 1951, con equipaggiamento elettrico Sécheron, per il Régional du Val-de-Travers (RVT). È rimasta un esemplare unico e porta il soprannome «Bobo».', 'Il suo numero europeo del veicolo è 91 85 4417 301-9.'] },
      { titel: 'Impiego e tecnica', p: ['Il RVT la impiegava soprattutto in testa a treni merci e scolastici sulla linea a scartamento normale della Val-de-Travers. Quando il servizio regolare diminuì, RVT-Historique la prese dapprima in affitto. Il 1° marzo 2019 transN la consegnò ufficialmente all’associazione.', 'Quattro motori di trazione erogano alla ruota 703 kW in regime orario e 611 kW in regime continuo. La locomotiva è lunga 11,15 m, pesa 45 t e viaggia fino a 75 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Quattro motori di trazione', 'Per corrente alternata 15 kV 16,7 Hz', 'Oggi nel parco di RVT-Historique'] }
    ],
  bilder: ['Be 4/4 1 del RVT a Fleurier (1984)']
});
uebZug('trn-abde-2-4-102', {
  typ: 'Automotrice elettrica del RVT del 1944 (storica)',
  text: ['L’ABDe 2/4 102 fu costruita per l’elettrificazione del RVT in Val-de-Travers. Ha circolato in servizio regolare fino a dicembre 2004.', 'Oggi appartiene a RVT-Historique con il nome «L’Étincelante» e ha un bar per le corse di gruppo.'],
  kennzahlen: [['1944', 'costruzione'], ['412 kW', 'potenza'], ['70 km/h', 'velocità massima'], ['59', 'posti a sedere']],
  daten: { 'Bauart': 'automotrice elettrica con compartimento bagagli', 'Fahrzeugnummern': 'BCFe 2/4 102, poi ABFe 2/4 e ABDe 2/4 (EVN 94 85 7537 312-1)', 'Sitzplätze': '59, di cui 8 in 1a classe', 'In Betrieb seit': 'gennaio 1945' },
  specNote: 'Costruita nel 1944, in servizio da gennaio 1945. Dati tecnici secondo RVT-Historique. Una foto con licenza libera esiste solo dell’automotrice gemella 101, perciò qui non ne viene mostrata nessuna.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SWS e BBC costruirono l’automotrice nel 1944 per l’elettrificazione del RVT; entrò in servizio a gennaio 1945. Si chiamava dapprima BCFe 2/4 102, poi ABFe 2/4 e infine ABDe 2/4. Il suo numero europeo del veicolo riprende il numero successivo 312.', 'La sua gemella era l’automotrice 101.'] },
      { titel: 'Impiego e tecnica', p: ['L’ultimo servizio regolare è datato dicembre 2004. RVT-Historique la rinnovò nel 2006, installò un bar nel compartimento bagagli e le restituì i colori originali. Oggi circola per corse turistiche e di gruppo.', 'È lunga 21 m, pesa 40 t, ha 412 kW e viaggia fino a 70 km/h. Le ruote hanno un diametro di 940 mm.'] },
      { titel: 'Dotazione e accessibilità', liste: ['59 posti a sedere, di cui 8 in 1a classe', 'Bar nell’ex compartimento bagagli (dal 2006)', 'Impianto audio e tavolini amovibili'] }
    ]
});
uebZug('trn-rbde-106', {
  beiname: '106 e ABt 204',
  typ: 'Treno navetta a scartamento normale del RVT del 1985 (storico)',
  text: ['L’automotrice RBDe 106 e la carrozza pilota ABt 204 formano un treno navetta del RVT. Presso TRN e transN l’automotrice portava il numero 316.', 'A giugno 2024 RVT-Historique ha rilevato entrambi i veicoli; dal 1° maggio 2025 circolano di nuovo nei colori del RVT.'],
  kennzahlen: [['1985', 'automotrice in servizio'], ['2', 'veicoli'], ['87', 'posti a sedere nel treno'], ['2025', 'di nuovo nei colori RVT']],
  daten: { 'Bauart': 'automotrice elettrica con carrozza pilota (treno navetta)', 'Fahrzeugnummern': 'RBDe 106 (poi 316), ABt 204', 'Sitzplätze': '87 nel treno: 24 in 1a, 63 in 2a classe', 'Anzahl': '2 veicoli', 'Erhalten': 'RVT-Historique (da giugno 2024)', 'In Betrieb seit': '1985 (automotrice)' },
  specNote: 'Gli 87 posti a sedere valgono per l’intero treno di automotrice e carrozza pilota. Le fonti verificate non indicano lunghezza, peso e potenza dell’automotrice né l’anno di costruzione della carrozza pilota. Le foto del 2006 mostrano il treno nella livrea TPF di allora.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['L’automotrice arrivò al RVT nel 1985 come RBDe 106. Fa parte dei treni navetta che molte ferrovie private svizzere acquistarono in quel periodo. Presso TRN e transN portava il numero 316.', 'La carrozza pilota ABt 204 ha prima e seconda classe. Grazie a lei il treno può cambiare direzione senza che l’automotrice debba girare.'] },
      { titel: 'Impiego e tecnica', p: ['Dal 2004 al 2013 l’automotrice 316 e la carrozza pilota 204 furono noleggiate alle TPF e vi circolarono in livrea TPF, insieme a carrozze intermedie TPF. In seguito transN non impiegò più il treno per diversi anni nel traffico viaggiatori commerciale.', 'A giugno 2024 RVT-Historique ha rilevato entrambi i veicoli. La verniciatura esterna è stata rifatta tra settembre 2024 e marzo 2025; la prima corsa nei colori RVT ripristinati si è svolta il 1° maggio 2025.'] },
      { titel: 'Dotazione e accessibilità', liste: ['87 posti a sedere nel treno: 24 in 1a e 63 in 2a classe', 'Bar e tavolini ai posti (dopo il restauro)', 'Carrozza pilota per invertire la marcia senza manovre'] }
    ],
  bilder: ['RBDe 316 e ABt 204 in livrea TPF a Friburgo (2006)', 'ABt 204 e RBDe 316 con carrozze intermedie TPF a Friburgo (2006)']
});
uebZug('trn-abm-2-5-9', {
  typ: 'Automotrice diesel-elettrica del 1914 (storica)',
  text: ['L’ABm 2/5 9 è una delle prime automotrici diesel d’Europa. Fu costruita nel 1914 per le ferrovie statali sassoni e circolò sul RVT dal 1924 al 1965.', 'Oggi fa parte della collezione del Museo Svizzero dei Trasporti.'],
  kennzahlen: [['1914', 'costruzione'], ['1924–1965', 'al RVT'], ['diesel', 'con trasmissione elettrica'], ['Museo dei Trasporti', 'collezione']],
  daten: { 'Bauart': 'automotrice diesel-elettrica', 'Betreiber': 'Ferrovie statali sassoni, poi RVT (1924–1965)', 'Antrieb': 'motore diesel con generatore, motore di trazione elettrico', 'Fahrzeugnummern': 'BCm 2/5, poi ABm 2/5 9', 'Erhalten': 'Museo Svizzero dei Trasporti' },
  specNote: 'L’anno 1914 segue la classificazione storica del Museo Svizzero dei Trasporti. Dove si trovi oggi l’automotrice non è confermato; un articolo del 2018 tratta del suo trasferimento in un deposito esterno.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La Waggonfabrik Rastatt costruì la vettura con equipaggiamento elettrico BBC e un motore diesel Sulzer. Nacque da un incarico di sviluppo comune delle ferrovie statali sassoni e prussiane.', 'Dopo la Prima guerra mondiale due automotrici di questo tipo arrivarono in Svizzera. Si è conservata la futura ABm 2/5 9 del RVT.'] },
      { titel: 'Impiego e tecnica', p: ['Secondo il Museo dei Trasporti il RVT la impiegò dal 1924 al 1965. Automotrici di questo tipo sostituivano la costosa trazione a vapore sulle linee poco frequentate.', 'Un motore diesel aziona un generatore che alimenta il motore di trazione elettrico. Un carrello è motore, l’altro è portante.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Compartimenti di 1a e 2a classe (tipo AB)', 'Dal 1982 nell’esposizione permanente del Museo dei Trasporti', 'In archivio: descrizione Sulzer del 1915'] }
    ],
  bilder: ['ABm 2/5 9 al Museo dei Trasporti, lato carrello motore (2009)', 'ABm 2/5 9 al Museo dei Trasporti, lato carrello portante (2009)']
});
uebZug('trn-be-2-4', {
  typ: 'Tram interurbano delle TN del 1902 (storico)',
  text: ['Le Be 2/4 da 41 a 47 erano i grandi tram interurbani dei Tramways de Neuchâtel (TN) sulla linea per Boudry e Cortaillod.', 'I numeri 44 e 45 sono conservati al Museo del tram di Neuchâtel (ANAT).'],
  kennzahlen: [['1902', 'in servizio'], ['7', 'motrici (41–47)'], ['50 km/h', 'velocità massima'], ['1981', 'ritiro']],
  daten: { 'Bauart': 'motrice tranviaria a quattro assi con due motori', 'Sitzplätze': '30, più 43 posti in piedi', 'Erhalten': '44 e 45 al Museo del tram di Neuchâtel (ANAT)' },
  specNote: 'Valori tecnici secondo il Museo del tram di Neuchâtel. Vecchie descrizioni di foto indicano 74 kW invece di 72 kW. Non è confermato che le vetture siano oggi in grado di circolare.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La fabbrica di vagoni di Schlieren (SWS) costruì le sette motrici, con equipaggiamento elettrico MFO. Entrarono in servizio nel 1902.', 'La 44 è tornata a Neuchâtel nel 2013 dalla collezione dell’AMTUIR vicino a Parigi; la 45 è rimasta conservata presso l’ANAT.'] },
      { titel: 'Impiego e tecnica', p: ['Le vetture circolavano sulla linea interurbana Neuchâtel–Boudry e sull’ex diramazione per Cortaillod, anche in comando multiplo con rimorchi. Nel 1981 furono ritirate ufficialmente con il passaggio al nuovo materiale Littorail.', 'Due motori erogano insieme 72 kW. Una vettura è lunga 12,5 m, pesa 15,3 t e viaggia fino a 50 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['30 posti a sedere e 43 in piedi', 'Rimorchi a quattro assi abbinati B4 111–114', 'Oggi veicoli museali dell’ANAT'] }
    ],
  bilder: ['Be 2/4 45 nel deposito dell’ANAT a Boudry (2011)', 'Be 2/4 44 sulla linea 5 in direzione di Auvernier (1979)']
});
uebZug('trn-be-2-2', {
  beiname: '73 e 76',
  typ: 'Tram urbani a due assi delle TN del 1922 (storici)',
  text: ['Le motrici tranviarie a due assi da 71 a 79 circolavano sulla rete urbana delle TN. Due sono conservate: la 73 al Museo del tram di Neuchâtel e la 76 alla ferrovia museo Blonay–Chamby.', 'La 73 circola con rimorchi storici come treno «Le Britchon».'],
  kennzahlen: [['1922', 'costruzione (73 e 76)'], ['102 kW', 'potenza (73)'], ['35 km/h', 'velocità massima'], ['2', 'vetture conservate']],
  daten: { 'Bauart': 'motrice tranviaria a due assi', 'Hersteller': '73: officine delle TN con BBC e MFO; 76: SIG, MFO, BBC (secondo Blonay–Chamby)', 'Stromsystem': '600 V corrente continua (76 a Blonay–Chamby: 1000 V)', 'Fahrzeugnummern': '71–78, poi 79; conservate 73 e 76', 'Länge': '9,2 m (73)', 'Leistung': '102 kW (73), 104 kW (76)', 'Sitzplätze': '20, più 35 posti in piedi (73)', 'Erhalten': '73 al Museo del tram di Neuchâtel, 76 a Blonay–Chamby' },
  specNote: 'La serie fu costruita dal 1921 al 1928; per la 73 e la 76 i musei indicano il 1922. Valori della 73 secondo il Museo del tram di Neuchâtel, valori della 76 secondo Blonay–Chamby, che la designa Ce 2/2 76.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La serie da 71 a 78 fu costruita tra il 1921 e il 1928; più tardi si aggiunse la 79. Secondo il museo, le TN costruirono la 73 nelle proprie officine, con equipaggiamento elettrico BBC e MFO. Per la 76 Blonay–Chamby indica SIG, MFO e BBC.'] },
      { titel: 'Impiego e tecnica', p: ['Fino alla conversione della linea 3 per Corcelles al filobus nel luglio 1976, entrambe le vetture circolavano in servizio regolare. La 76 arrivò alla ferrovia museo Blonay–Chamby il 18 agosto 1976; lì attende una revisione.', 'Dal 1994 la 73 circola come motrice storica sulla linea per Boudry. È lunga 9,2 m, pesa 10,9 t e ha due motori da 51 kW ciascuno.'] },
      { titel: 'Dotazione e accessibilità', liste: ['73: 20 posti a sedere e 35 in piedi', '76: in origine per 600 V, a Blonay–Chamby per 1000 V corrente continua', 'Treno «Le Britchon»: motrice 73 con i rimorchi B2i 1 e B2 143'] }
    ],
  bilder: ['Tram 76 con il rimorchio 143 sulla linea 3 (1976)']
});
uebZug('trn-be-4-4-583', {
  typ: 'Motrice tranviaria a quattro assi delle TN del 1947 (storica)',
  text: ['Le Be 4/4 da 81 a 83 erano una piccola serie di tram a quattro assi delle TN. È conservata la 83, poi chiamata 583.', 'Fa parte della collezione del Museo del tram di Neuchâtel.'],
  kennzahlen: [['1947', 'costruzione'], ['144 kW', 'potenza'], ['60 km/h', 'velocità massima'], ['3', 'vetture (81–83)']],
  daten: { 'Bauart': 'motrice tranviaria bidirezionale a quattro assi', 'Fahrzeugnummern': '81–83, poi 581–583', 'Sitzplätze': '26, più 39 posti in piedi', 'Erhalten': '583 al Museo del tram di Neuchâtel (ANAT)' },
  specNote: 'Valori secondo il Museo del tram di Neuchâtel; una descrizione di foto indica 148 kW invece di 144 kW.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SIG costruì le tre vetture nel 1947, con equipaggiamento elettrico Sécheron (SAAS). Più tardi ricevettero i numeri da 581 a 583.', 'La 583 è rimasta conservata presso l’ANAT. La 582 è andata a Wiehe in Germania, la 581 fu demolita nel 1986.'] },
      { titel: 'Impiego e tecnica', p: ['Le vetture bidirezionali avevano porte su entrambi i lati. Dopo la fine della linea urbana 3 nel 1976 furono adattate alla linea interurbana per Boudry. Il servizio regolare delle ultime due vetture terminò nel 1988, con l’arrivo di altre motrici Littorail.', 'Quattro motori erogano insieme 144 kW. Una vettura è lunga 12,2 m, pesa 13,2 t e viaggia fino a 60 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['26 posti a sedere e 39 in piedi', 'Porte su entrambi i lati, cabina di guida a entrambe le estremità', 'Oggi nella collezione del Museo del tram di Neuchâtel'] }
    ],
  bilder: ['Be 4/4 583 (ex 83) nel deposito dell’ANAT a Boudry (2011)']
});
uebZug('trn-be-4-4-littorail', {
  typ: 'Motrici Littorail del 1981 (storiche)',
  text: ['Con le Be 4/4 da 501 a 506 la linea Neuchâtel–Boudry divenne nel 1981 la moderna linea Littorail. Dal 2019 automotrici Stadler usate provenienti da Trogen le hanno sostituite.', 'La 504 «Cortaillod» è conservata al Museo del tram di Neuchâtel.'],
  kennzahlen: [['1981', 'in servizio'], ['6', 'motrici (501–506)'], ['75 km/h', 'velocità massima'], ['276 kW', 'potenza']],
  daten: { 'Bauart': 'motrice a quattro assi per il servizio con carrozze pilota', 'Sitzplätze': '42, più 65 posti in piedi', 'Erhalten': '504 «Cortaillod» al Museo del tram di Neuchâtel (ANAT)' },
  specNote: 'Valori secondo il Museo del tram di Neuchâtel. La foto mostra un treno Littorail di questo tipo; il numero della vettura visibile non è confermato.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SWS a Schlieren costruì nel 1981 le quattro motrici da 501 a 504 con equipaggiamento elettrico BBC. Nel 1988 seguirono la 505 e la 506. Alla flotta appartenevano anche le carrozze pilota da 551 a 554.', 'Il 26 ottobre 2019 l’ANAT ha deciso di conservare la 504 «Cortaillod».'] },
      { titel: 'Impiego e tecnica', p: ['Le vetture Littorail portarono sulla Neuchâtel–Boudry un esercizio ferroviario regionale più rapido e protetto da segnali, al posto del vecchio tram interurbano. Dal 2019 automotrici Stadler Be 4/8 usate provenienti da Trogen ne hanno ripreso il compito.', 'Due motori erogano insieme 276 kW. Una vettura è lunga 18,4 m, pesa 25,5 t e viaggia fino a 75 km/h. La linea di contatto è alimentata a 600 V corrente continua.'] },
      { titel: 'Dotazione e accessibilità', liste: ['42 posti a sedere e 65 in piedi', 'Servizio insieme alle carrozze pilota 551–554', 'La 504 portava il nome «Cortaillod»'] }
    ],
  bilder: ['Treno Littorail alla stazione di Colombier (2010)']
});
uebZug('trn-xe-2-2-601', {
  typ: 'Innaffiatrice elettrica delle TN del 1911 (storica)',
  text: ['La Xe 2/2 601 fu costruita nel 1911 come innaffiatrice: bagnava con acqua le strade polverose lungo le linee del tram.', 'In seguito servì per il diserbo e il servizio invernale. Oggi appartiene al Museo del tram di Neuchâtel.'],
  kennzahlen: [['1911', 'costruzione'], ['66 kW', 'potenza'], ['30 km/h', 'velocità massima'], ['10,5 t', 'peso']],
  daten: { 'Bauart': 'motrice di servizio elettrica a due assi (innaffiatrice)', 'Fahrzeugnummern': 'Xe 2/2 301, dal 1980 601', 'Erhalten': 'Museo del tram di Neuchâtel (ANAT)' },
  specNote: 'Valori secondo il Museo del tram di Neuchâtel. Non ne deriva alcuna autorizzazione d’esercizio attuale.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SWS costruì la vettura nel 1911, con equipaggiamento elettrico MFO. Portò dapprima il numero 301 e nel 1980 fu rinumerata 601.'] },
      { titel: 'Impiego e tecnica', p: ['In origine bagnava con acqua le strade non asfaltate per ridurre la polvere. Una volta asfaltate le strade, servì per il diserbo e, d’inverno, per lo sgombero della neve.', 'Due motori erogano insieme 66 kW. È lunga 6,76 m, pesa 10,5 t, ha un passo di 2,2 m e viaggia fino a 30 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Serbatoio d’acqua per innaffiare', 'Secondo il museo, in linea di principio ancora adatta al servizio spazzaneve', 'Nessun compartimento passeggeri'] }
    ]
});
uebZug('trn-tn-wagen', {
  name: 'Carri storici',
  typ: 'Rimorchi tranviari e carri di servizio conservati di Neuchâtel',
  text: ['Oltre alle motrici sono conservati cinque carri dei tram di Neuchâtel. Quattro sono curati dal Museo del tram di Neuchâtel (ANAT), uno si trova alla ferrovia museo Blonay–Chamby.', 'Il più antico è il carro merci X2 631 del 1892.'],
  kennzahlen: [['5', 'carri'], ['1892', 'carro più antico'], ['4', 'al Museo del tram'], ['1', 'a Blonay–Chamby']],
  daten: { 'Bauart': 'rimorchi tranviari e carro merci', 'Erhalten': 'Museo del tram di Neuchâtel (ANAT); C4 121 a Blonay–Chamby' },
  specNote: 'Valori secondo il Museo del tram di Neuchâtel e Blonay–Chamby. Alcune descrizioni di foto indicano pesi e numeri di posti diversi.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Quattro carri sono curati dal Museo del tram di Neuchâtel (ANAT). La C4 121 fa parte della collezione di Blonay–Chamby dal 1967 e vi attende una revisione.'],
        tabelle: { kopf: ['Carro', 'Costruzione', 'Costruttore', 'Posti o carico utile'], zeilen: [
          ['B2i 1', '1894–1895 (serie)', 'SIG', '12 posti a sedere e 12 in piedi'], ['B4 112', '1902 (tipo)', 'SWS', '30 posti a sedere e 47 in piedi'],
          ['B2 143', 'trasformata 1914–1928 da motrici del 1897/98', '–', '18 posti a sedere e 39 in piedi'], ['C4 121', '1892', 'da Basilea (secondo il museo)', '15 posti a sedere e 53 in piedi'],
          ['X2 631 (in passato 231)', '1892', 'NCB', '7,5 t di carico utile']] } },
      { titel: 'Impiego e tecnica', p: ['La piccola B2i 1 proviene dal tram a cavalli Neuchâtel–Saint-Blaise. Dal 1897 circolò dietro tram elettrici, da ultimo fino al 1964 per La Coudre. Secondo il museo era in origine il numero 5, poi il 101.', 'Le B4 da 111 a 114 a quattro assi circolavano con i tram interurbani da 41 a 47 per Boudry e Cortaillod fino al 1981. Le B2 da 141 a 149 nacquero dalla trasformazione di vecchie motrici e circolarono fino al 1976 per Saint-Blaise, Corcelles e Valangin.', 'L’X2 631 del 1892 trasportava in origine verdura e latte; dall’elettrificazione della NCB nel 1902 servì come carro di servizio. È considerato l’ultimo testimone conservato dell’epoca della NCB.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Dal 1994 la B2i 1 e la B2 143 formano con la motrice 73 il treno «Le Britchon»', 'B4 112: fino a 60 km/h, lunga 12,5 m', 'X2 631: superficie di carico di 9 m²', 'C4 121: freno a mano e freno automatico ad aria compressa'] }
    ],
  bilder: ['Rimorchio B2 143 dietro il tram 76 sulla linea 3 (1976)']
});
uebZug('trn-g-3-3-1', {
  typ: 'Locomotiva a vapore del Régional des Brenets del 1890 (storica)',
  text: ['La piccola locomotiva-tender «Le Doubs» circolò dal 1890 sulla linea a scartamento metrico Le Locle–Les Brenets. Risale all’anno di apertura della ferrovia.', 'Dal 1973 si trova con due carrozze storiche alla ferrovia museo Blonay–Chamby, dove attende una revisione.'],
  kennzahlen: [['1890', 'costruzione'], ['16 t', 'peso in servizio'], ['25 km/h', 'velocità massima'], ['1973', 'a Blonay–Chamby']],
  daten: { 'Bauart': 'locomotiva-tender a vapore con tre assi accoppiati', 'Hersteller': 'SLM Winterthur (numero di fabbrica 618)', 'Erhalten': 'Ferrovia museo Blonay–Chamby (in prestito, dal 1973)' },
  specNote: 'Valori secondo Blonay–Chamby. La locomotiva gemella G 3/3 2 non ha una scheda propria; i suoi valori non sono quindi indicati.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La SLM di Winterthur costruì la locomotiva nel 1890 con il numero di fabbrica 618. Con altre due piccole locomotive a vapore svolgeva il traffico tra Le Locle e Les Brenets.', 'Una di esse, la G 3/3 2 «Le Père Frédéric», è esposta come monumento a Les Brenets. Il suo nome ricorda l’industriale Frédéric Perret, che finanziò l’acquisto.'] },
      { titel: 'Impiego e tecnica', p: ['Dopo l’elettrificazione del 1950 la locomotiva fu ceduta per la conservazione insieme a due carrozze storiche. Dopo un deposito a Vallorbe, il gruppo arrivò in prestito nel 1973 alla ferrovia museo Blonay–Chamby.', 'La caldaia lavora a 12 bar. I cilindri hanno un diametro di 240 mm e una corsa di 350 mm, le ruote 750 mm. La locomotiva porta 1,8 m³ d’acqua e 0,5 t di carbone.'] },
      { titel: 'Dotazione e accessibilità', p: ['Il gruppo conservato del Régional des Brenets comprende due carrozze del 1890. Hanno un freno a mano e un freno automatico a vuoto.'],
        tabelle: { kopf: ['Veicolo', 'Costruzione', 'Costruttore', 'Oggi'], zeilen: [
          ['Locomotiva a vapore G 3/3 1 «Le Doubs»', '1890', 'SLM (618)', 'Blonay–Chamby'], ['Carrozza BC 2 (in passato AB 2), 6 posti di 2a e 28 posti di 3a classe', '1890', 'SIG Neuhausen', 'Blonay–Chamby'],
          ['Carrozza con compartimento bagagli CF 21 (in passato BD 21), 16 posti di 3a classe', '1890', 'SIG Neuhausen', 'Blonay–Chamby'], ['Locomotiva a vapore G 3/3 2 «Le Père Frédéric»', '1890', 'SLM', 'monumento a Les Brenets']] } }
    ],
  bilder: ['G 3/3 1 «Le Doubs» alla ferrovia museo Blonay–Chamby', 'G 3/3 1 «Le Doubs» a Blonay–Chamby (primavera 2010)']
});
uebZug('trn-kkl-41', {
  typ: 'Carro pianale a scartamento metrico con cisterna appoggiata (storico)',
  text: ['Il Kkl 41 è un carro pianale a scartamento metrico delle TRN. Nel 2014 si trovava nella stazione di Les Brenets con una cisterna appoggiata sul pianale.', 'Secondo la descrizione della foto, nel 2017 è passato al museo francese MTVS.'],
  kennzahlen: [['41', 'numero'], ['scartamento metrico', 'scartamento'], ['2014', 'foto a Les Brenets'], ['2017', 'al MTVS']],
  daten: { 'Bauart': 'carro pianale con cisterna appoggiata', 'Verbleib': '2017 al Musée des tramways à vapeur et des chemins de fer secondaires français (MTVS), secondo la descrizione della foto' },
  specNote: 'Anno di costruzione, peso, carico utile e capacità della cisterna non sono accertati. La cessione al MTVS proviene dalla descrizione della foto e non è confermata da alcun registro museale.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Una foto del 1° giugno 2014 mostra il carro a Les Brenets; è designato TRN Kkl 41. Costruttore e anno di costruzione non sono noti.'] },
      { titel: 'Impiego e tecnica', p: ['Sul pianale era appoggiata una cisterna. A cosa servisse non è documentato. Il carro non è quindi un carro cisterna a sé, ma un carro pianale con un serbatoio appoggiato.', 'Secondo la descrizione della foto, la ferrovia lo cedette nel 2017 al museo francese MTVS.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Pianale di carico piatto', 'Cisterna appoggiata (2014)', 'Nessun compartimento passeggeri'] }
    ],
  bilder: ['Kkl 41 con cisterna appoggiata a Les Brenets (2014)']
});

/* carte «Dove circola?» */
uebEinsatz({
  'trn-tm-2-2-11': 'In servizio di cantiere sulla linea a scartamento metrico La Chaux-de-Fonds–Les Ponts-de-Martel. Lo scartamento metrico è tratteggiato e semplificato.',
  'trn-tm-237-312': 'In servizio di manutenzione e manovra in Val-de-Travers; fotografato da ultimo presso il deposito di Fleurier.',
  'trn-zweiwege': 'In servizio di cantiere sulle linee a scartamento metrico La Chaux-de-Fonds–Les Ponts-de-Martel e Le Locle–Les Brenets. Lo scartamento metrico è tratteggiato e semplificato.',
  'trn-ast-21': 'Per corse speciali sulle linee a scartamento metrico di transN nelle Montagne neocastellane. Lo scartamento metrico è tratteggiato e semplificato.',
  'trn-be-4-4-1': 'In passato in testa a treni merci e scolastici sulla linea del RVT in Val-de-Travers. Oggi la locomotiva appartiene a RVT-Historique.',
  'trn-abde-2-4-102': 'In passato in servizio regolare sulla linea del RVT in Val-de-Travers, oggi in corse speciali e di gruppo di RVT-Historique.',
  'trn-rbde-106': 'In passato sulla linea del RVT in Val-de-Travers; noleggiato alle TPF dal 2004 al 2013, per esempio a Friburgo. Oggi in corse di RVT-Historique.',
  'trn-abm-2-5-9': 'Dal 1924 al 1965 sul RVT in Val-de-Travers. Oggi fa parte della collezione del Museo Svizzero dei Trasporti a Lucerna.',
  'trn-be-2-4': 'In passato sulla linea interurbana Neuchâtel–Boudry e per Cortaillod. Oggi al Museo del tram di Neuchâtel a Boudry. Lo scartamento metrico è tratteggiato e semplificato.',
  'trn-be-2-2': 'In passato sul tram urbano di Neuchâtel, per esempio sulla linea 3 per Corcelles. Oggi la 73 circola come tram storico per Boudry, la 76 si trova a Blonay–Chamby. Lo scartamento metrico è tratteggiato e semplificato.',
  'trn-be-4-4-583': 'Dapprima sulla linea urbana 3 per Corcelles, dal 1976 sulla linea interurbana per Boudry. Oggi al Museo del tram di Neuchâtel. Lo scartamento metrico è tratteggiato e semplificato.',
  'trn-be-4-4-littorail': 'Dal 1981 al 2019 sulla linea Littorail Neuchâtel–Boudry. La 504 si trova oggi al Museo del tram di Neuchâtel. Lo scartamento metrico è tratteggiato e semplificato.',
  'trn-xe-2-2-601': 'In passato in servizio sulla rete tranviaria di Neuchâtel. Oggi al Museo del tram di Neuchâtel a Boudry. Lo scartamento metrico è tratteggiato e semplificato.',
  'trn-tn-wagen': 'In passato sulla rete tranviaria di Neuchâtel e per Boudry. Quattro carri sono al Museo del tram di Neuchâtel, la C4 121 a Blonay–Chamby. Lo scartamento metrico è tratteggiato e semplificato.',
  'trn-g-3-3-1': 'Dal 1890 al 1950 sulla linea Le Locle–Les Brenets. Oggi alla ferrovia museo Blonay–Chamby. Lo scartamento metrico è tratteggiato e semplificato.',
  'trn-kkl-41': 'Fotografato nel 2014 nella stazione di Les Brenets, sulla linea a scartamento metrico Le Locle–Les Brenets. Lo scartamento metrico è tratteggiato e semplificato.'
});
