/* Italiano – Montreux Oberland Bernese (MOB) */
uebDict({
  'Montreux Berner Oberland-Bahn': 'Ferrovia Montreux Oberland Bernese', 'MOB': 'MOB', '900 V Gleichstrom': '900 V corrente continua',
  '900 V Gleichstrom und Diesel': '900 V corrente continua e diesel', '850 V Gleichstrom (historisch)': '850 V corrente continua (storico)'
});

/* ---------- traffico viaggiatori ---------- */
uebZug('mob-alpina', {
  name: 'Be 4/4 e ABe 4/4',
  typ: 'Moderne automotrici Stadler, per lo più in coppia',
  text: ['Le ALPINA sono le moderne automotrici della MOB. Nel 2016 Stadler ha consegnato quattro Be 4/4 e quattro ABe 4/4, che circolano per lo più in coppia e possono trainare altre carrozze.', 'Appartengono alla stessa famiglia di veicoli delle automotrici delle CJ, delle TPC e di transN.'],
  kennzahlen: [['8', 'automotrici (4 coppie)'], ['1020 kW', 'potenza per automotrice'], ['100 km/h', 'velocità massima'], ['2016', 'in servizio']],
  daten: { 'Bauart': 'automotrici elettriche a pianale ribassato con 4 assi', 'Länge': '20,46 m per automotrice', 'Leistung': '1020 kW continui alla ruota per automotrice', 'Sitzplätze': '18 in 1a, 63 in 2a classe (per coppia, secondo Wikipedia)', 'Anzahl': '8 automotrici' },
  specNote: 'Lunghezza e potenza secondo un ritratto del veicolo (Passiontrain), posti secondo Wikipedia. Una coppia sono due automotrici; gli otto veicoli non sono otto treni. I documenti della MOB indicano storicamente 900 V, quelli più recenti 960 V.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha sviluppato le automotrici insieme per diverse ferrovie a scartamento metrico della Svizzera occidentale. Nel 2016 la MOB ha ricevuto le Be 4/4 9201–9204 (2a classe) e le ABe 4/4 9301–9304 (1a e 2a classe). Alcune portano un nome, come 9301 «Montbovon», 9302 «Château-d’Œx» e 9303 «Lenk».'] },
      { titel: 'Impiego e tecnica', p: ['Le ALPINA circolano sulla linea principale Montreux–Zweisimmen in treni regionali e trainano anche carrozze panoramiche, fino a nove carrozze. Possono essere comandate in multiplo con altri veicoli della MOB.', 'In origine erano previste per il GoldenPass Express; lì però sono le locomotive Ge 4/4 a trainare le carrozze. Le automotrici sono leggere, il che rende più difficile trasmettere la trazione ai binari quando sono scivolosi.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Accesso a pianale ribassato (480 mm) con predellini ribaltabili per l’inverno', '1a e 2a classe nell’ABe, 2a classe nella Be', 'Informazione ai viaggiatori e area multifunzionale', 'La dotazione dell’intero treno dipende dalle carrozze agganciate'] }
    ],
  bilder: ['ABe 4/4 9303 a Zweisimmen (2023)', 'Nell’ABe 4/4 9303 (2023)', 'Stemma di Château-d’Œx sull’ALPINA 9302 (2022)']
});
uebZug('mob-be44-5000', {
  typ: 'Treni navetta regionali, soprattutto nel Simmental',
  text: ['Le quattro Be 4/4 della serie 5000 formano brevi treni navetta con carrozze pilota. Circolano soprattutto tra Zweisimmen e Lenk e fino a Gstaad.', 'Sono a fine vita; automotrici usate delle CJ dovrebbero sostituirle.'],
  kennzahlen: [['4', 'automotrici'], ['1976', 'prime due'], ['1979', 'altre due'], ['2026', 'successori previsti']],
  daten: { 'Bauart': 'automotrice elettrica con carrozze pilota', 'Fahrzeugnummern': 'Be 4/4 5001–5004; carrozze pilota ABt 341–344 e Bt 241–244', 'Anzahl': '4 treni navetta' },
  specNote: 'Secondo Wikipedia (elenco dei veicoli della MOB) e il rapporto di gestione 2025 della MOB. Il numero di automotrici CJ acquistate non è ancora un numero di veicoli MOB omologati.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SIG e SAAS hanno consegnato due automotrici nel 1976 e due nel 1979. All’inizio avevano una cabina di guida. Dal 2004 al 2009 sono state trasformate senza cabina e hanno ricevuto carrozze pilota a pianale ribassato: ABt 341–344 e Bt 241–244. Le vecchie carrozze pilota erano le ABt 5301–5304.'] },
      { titel: 'Impiego e tecnica', p: ['Le navette circolano nella composizione ABt – Be – Bt, soprattutto tra Zweisimmen e Lenk im Simmental e fino a Gstaad.', 'Secondo il rapporto di gestione 2025 sono a fine vita. Nel novembre 2025 la MOB ha acquistato automotrici usate a quattro assi delle Chemins de fer du Jura (CJ); quattro di esse (652–655) sono state trasferite nel dicembre 2025. Vengono adattate per tensione, accoppiatori e informazione ai viaggiatori; la prima entrata in servizio era prevista per fine 2026.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Carrozze pilota ABt e Bt a pianale ribassato', '1a e 2a classe nell’ABt', 'Area bagagli e multifunzionale', 'La dotazione vale per l’intero treno navetta'] }
    ],
  bilder: ['Bt 242, Be 4/4 5002 e ABt 342 a Schönried (2022)', 'Carrozza pilota ABt 343 a St. Stephan (2023)', 'Nella Be 4/4 5003 (2023)']
});
uebZug('mob-ge44-8000', {
  typ: 'Locomotiva elettrica per il GoldenPass Express',
  text: ['Le Ge 4/4 della serie 8000 trainano oggi il GoldenPass Express sullo scartamento metrico tra Montreux e Zweisimmen. A Zweisimmen la locomotiva resta sulla sua rete; sono le carrozze a cambiare scartamento.', 'La 8003 è stata venduta alla Ferrovia retica nel 2019.'],
  kennzahlen: [['4', 'locomotive costruite'], ['3', 'alla MOB'], ['2000 kW', 'potenza'], ['1995', 'in servizio']],
  daten: { 'Bauart': 'locomotiva elettrica a 4 assi', 'Fahrzeugnummern': '8001–8004 (8003 alla RhB dal 2019)', 'Höchstgeschwindigkeit': '120 km/h (tecnica)', 'Anzahl': '3 (su 4)' },
  specNote: 'Secondo Wikipedia; l’articolo indica come anno di costruzione il 1994, l’elenco dei veicoli il 1995. Le locomotive sono strettamente imparentate con le Ge 4/4 III della RhB, ma attrezzate per la corrente continua. La RhB ha trasformato l’ex 8003 nella Ge 4/4 III 653.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM e ABB hanno costruito le quattro locomotive nel 1994/95. Somigliano alle Ge 4/4 III della RhB e alla Ge 4/4 della BAM. La 8003 è passata alla RhB nel 2019 e vi circola come 653 «St. Moritz».'] },
      { titel: 'Impiego e tecnica', p: ['Le locomotive trainano treni viaggiatori e, dal dicembre 2022, il GoldenPass Express tra Montreux e Zweisimmen. Dal 2017 al 2019 hanno ricevuto accoppiatori automatici Schwab; dal 2020 possono essere comandate in multiplo con carrozze e automotrici adatte.', 'Nel 2024 la MOB ha ordinato quattro nuove locomotive della serie 8500 per sostituirle.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida, nessuno spazio per viaggiatori', 'Accoppiatore automatico Schwab', 'Comando dalla carrozza pilota del GoldenPass Express'] }
    ],
  bilder: ['Ge 4/4 8002 a Zweisimmen (2023)', 'Ge 4/4 8001 a Montreux (2024)', 'Ge 4/4 8004 a Zweisimmen (1995)']
});
uebZug('mob-gde44', {
  typ: 'Locomotiva elettrica con bagagliaio per i treni panoramici',
  text: ['Le GDe 4/4 del 1983 sono locomotive con un proprio bagagliaio. Trainano i treni panoramici sulle ripide rampe sopra Montreux.', 'Il 3 novembre 1983 la 6003 raggiunse 110 km/h tra Zweisimmen e Lenk – un record per lo scartamento metrico in Europa.'],
  kennzahlen: [['6', 'locomotive (4 + 2 ex GFM)'], ['100 km/h', 'velocità massima'], ['50 t', 'peso'], ['1983', 'costruzione']],
  daten: { 'Bauart': 'locomotiva elettrica con bagagliaio', 'Länge': 'circa 16,4 m', 'Anzahl': '6 costruite; 6001 e 6004 demolite nel dicembre 2024' },
  specNote: 'Secondo Wikipedia e il dossier. Per potenza e portata le fonti pubbliche indicano stati di riferimento diversi; non sono quindi indicate. Wikipedia data l’acquisto delle due locomotive GFM al 2007 o 2008.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM e BBC costruirono sei locomotive nel 1983: quattro per la MOB e due per le GFM di Friburgo. La MOB rilevò le due locomotive GFM nel 2007/08 come 6005 e 6006.', 'Il capitolato chiedeva di trainare un treno di 110 t a 40 km/h su una pendenza del 70 per mille.'] },
      { titel: 'Impiego e tecnica', p: ['Le GDe 4/4 trainavano il Panoramic Express e treni diretti, in parte con carrozze pilota, e servivano anche per treni merci e di servizio. Una locomotiva traina stagionalmente il Treno del cioccolato.', 'Ogni asse ha un proprio motore; la locomotiva frena elettricamente recuperando energia. Le 6001 e 6004 sono state demolite nel dicembre 2024.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Bagagliaio nella cassa', 'Due cabine di guida', 'Comando a chopper e freno a recupero'] }
    ],
  bilder: ['GDe 4/4 6005 a Montreux (2014)', 'GDe 4/4 6003 a Schönried (2022)', 'GDe 4/4 presso Rougemont (1984)']
});
uebZug('mob-ge44-8500', {
  typ: 'Nuove locomotive elettriche per il GoldenPass Express (ordinate)',
  text: ['Nell’ottobre 2024 la MOB ha ordinato a Stadler quattro nuove locomotive elettriche per il GoldenPass Express. Dovrebbero sostituire le Ge 4/4 della serie 8000.', 'Lo stesso ordine comprende due locomotive ibride per il servizio lavori.'],
  kennzahlen: [['4', 'locomotive ordinate'], ['3 MW', 'potenza'], ['100 km/h', 'velocità massima'], ['2024', 'ordinate']],
  daten: { 'Bauart': 'locomotiva elettrica a 4 assi', 'Fahrzeugnummern': '8501–8504 (secondo Wikipedia)', 'Länge': 'circa 17 m', 'Anzahl': '4 ordinate' },
  specNote: 'Secondo il comunicato Stadler del 14 ottobre 2024 e il rapporto di gestione 2025 della MOB. Date di consegna e numeri di servizio sono ancora una pianificazione.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Il 15 ottobre 2024 Stadler e la MOB hanno firmato il contratto per quattro locomotive elettriche e due locomotive ibride di servizio. I documenti finanziari della MOB indicano le locomotive elettriche come serie 8500.'] },
      { titel: 'Impiego e tecnica', p: ['Le nuove locomotive dovrebbero trainare e spingere il GoldenPass Express e sostituire locomotive più vecchie. L’ordine non significa ancora una consegna o un’omologazione conclusa.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Quattro assi motori', 'Lunghe circa 17 m', 'Nessuno spazio per viaggiatori'] }
    ]
});
uebZug('mob-gpx', {
  beiname: 'carrozze a scartamento variabile',
  typ: 'Carrozze a scartamento regolabile per Montreux–Interlaken',
  text: ['Dal dicembre 2022 il GoldenPass Express collega Montreux a Interlaken senza cambi. A Zweisimmen le sue carrozze passano dallo scartamento metrico a quello normale.', 'Sulla MOB lo traina una Ge 4/4, sulla BLS una locomotiva a scartamento normale.'],
  kennzahlen: [['23', 'carrozze'], ['1000/1435', 'mm di scartamento'], ['2022', 'in servizio'], ['Prestige', 'classe']],
  daten: { 'Bauart': 'carrozze viaggiatori con carrelli a scartamento variabile', 'Hersteller': 'Stadler (carrozze), Alstom (sistema dei carrelli)', 'Betreiber': 'MOB, con la BLS', 'Spurweite': 'scartamento metrico e normale (variabile)', 'Länge': '18,8–19,4 m per carrozza', 'Gewicht': '25,3–26,5 t per carrozza', 'Anzahl': '23 carrozze' },
  specNote: 'Secondo l’articolo di Stephan Frei (Eisenbahn Amateur 10/2022) e la MOB. I posti corrispondono allo stato del 2022 e oggi possono essere diversi.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha costruito le 23 carrozze; i carrelli a scartamento variabile provengono dal sistema sviluppato con Alstom. Il design delle testate è di Pininfarina, gli interni di Innova Design. Le carrozze appartengono alla MOB.'],
        tabelle: { kopf: ['Carrozza', 'Numeri', 'Funzione', 'Posti (2022)'], zeilen: [
          ['Ast', '181–184', 'carrozza pilota, Prestige e 1a classe', '9 + 20'], ['ABst', '381–384', 'carrozza pilota, Prestige e 2a classe', '9 + 25'],
          ['As', '191–194', '1a classe con ristorazione', '28'], ['Bs', '281–284', '2a classe', '54'], ['Bs NF', '271–274', 'carrozza a pianale ribassato 2a classe', '39'],
          ['Bsi', '291–293', 'carrozza d’interfaccia verso la locomotiva a scartamento normale', '54']] } },
      { titel: 'Impiego e tecnica', p: ['A Zweisimmen il treno attraversa l’impianto di cambio dello scartamento: le ruote vengono spostate sull’altro scartamento e il pavimento adattato all’altezza del marciapiede. Poi una locomotiva della BLS prosegue via Spiez fino a Interlaken.', 'La carrozza d’interfaccia Bsi collega le carrozze alla locomotiva a scartamento normale, che ha accoppiatore e comando diversi.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Classe Prestige con sedili girevoli e regolabili', 'Climatizzazione, prese USB e 230 V al posto', 'Carrozza a pianale ribassato; secondo la MOB 2 posti per sedie a rotelle per treno', 'Nessuna trazione propria'] }
    ],
  bilder: ['GoldenPass Express con la Ge 4/4 8004 (2024)', 'Carrozza pilota Ast 183 a Zweisimmen (2023)', 'Carrozza a pianale ribassato Bs NF 272 (2024)']
});
uebZug('mob-panoramic', {
  name: 'Carrozze panoramiche',
  typ: 'Carrozze panoramiche e pilota con grandi finestrini',
  text: ['La MOB è diventata famosa dal 1976 per le sue carrozze panoramiche. Grandi finestrini fino al tetto aprono la vista sul lago Lemano, sul Pays-d’Enhaut e sul Saanenland.', 'In alcune carrozze pilota i viaggiatori siedono davanti e il macchinista sopra di loro – così si viaggia in prima fila.'],
  kennzahlen: [['1976', 'prime carrozze panoramiche'], ['1993', 'carrozze pilota Crystal'], ['1a e 2a', 'classe'], ['Chernex', 'officina propria']],
  daten: { 'Bauart': 'carrozze panoramiche e pilota', 'Hersteller': 'R+J, officina MOB di Chernex, Breda', 'Fahrzeugnummern': 'tra l’altro As 110–119, Ast 116–117, Ast 151–152, Bs 220–238' },
  specNote: 'Secondo Wikipedia (elenco dei veicoli della MOB) e x-rail. Alcune carrozze sono state rinumerate più volte o vendute.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le prime carrozze panoramiche furono costruite dal 1976 da R+J e nell’officina MOB di Chernex. Nel 1993 Breda consegnò le carrozze pilota Crystal Ast 151 e 152.', 'Nel 2023 la MOB ha venduto alcune carrozze più vecchie (As 110, Bs 220 e 222–225) ad Arterail in Francia; la Bs 227 è stata demolita nel 2015.'] },
      { titel: 'Impiego e tecnica', p: ['Le carrozze circolano nel GoldenPass Panoramic tra Montreux e Zweisimmen, per lo più dietro una GDe 4/4 o un’ALPINA. Anche offerte come il Treno del cioccolato usano queste carrozze.', 'Nelle carrozze pilota Ast 116 e 117 (Superpanoramic) e Ast 151 e 152 (Crystal) i viaggiatori siedono davanti alla cabina di guida rialzata.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Grandi finestrini fino al tetto', 'Posti panoramici davanti alla cabina nelle carrozze pilota', 'Carrozze a pianale ribassato Bs 231–238', 'Nessuna trazione propria'] }
    ],
  bilder: ['Carrozza pilota Ast 151 a Montreux (2014)', 'Carrozza panoramica As 118 a Gstaad (2016)', 'Carrozza panoramica Bs 236 (2014)']
});
uebZug('mob-belle-epoque', {
  name: 'Carrozze Belle Époque',
  typ: 'Carrozze in stile 1900 per treni di gita',
  text: ['Le carrozze Belle Époque sembrano carrozze del 1900. Sono state costruite nel 2004 e 2005 nell’officina della MOB su veicoli più vecchi.', 'Le vere vecchie carrozze salone sono la Ars 101 e la As 102.'],
  kennzahlen: [['4', 'carrozze trasformate'], ['2004', 'trasformazione'], ['1a e 2a', 'classe'], ['Bar', 'nella Brs 201']],
  daten: { 'Bauart': 'carrozze viaggiatori in stile storico', 'Hersteller': 'officina MOB di Chernex (trasformazione)', 'Fahrzeugnummern': 'As 103, As 107, Brs 201, Bs 202; carrozze salone Ars 101 e As 102' },
  specNote: 'Secondo la MOB e x-rail. Secondo la MOB le carrozze Belle Époque non sono accessibili in sedia a rotelle né con un deambulatore.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Nel 2004 e 2005 l’officina MOB di Chernex costruì quattro carrozze su telai più vecchi, con nuove casse e interni in stile storico: le As 103 e As 107 (1a classe), la Brs 201 con bar e la Bs 202 (2a classe).', 'Da distinguere sono le vecchie carrozze salone Ars 101 e As 102 con una propria storia.'] },
      { titel: 'Impiego e tecnica', p: ['Le carrozze circolano nel GoldenPass Belle Époque tra Montreux e Zweisimmen e in offerte prenotabili. Menu e servizio valgono per l’offerta prenotata.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Legno e ottone in stile 1900', 'Bar nella Brs 201', 'Non accessibili in sedia a rotelle né con un deambulatore', 'Nessuna trazione propria'] }
    ],
  bilder: ['Carrozza Belle Époque Brs 201 (2012)', 'Carrozza Belle Époque Bs 202 (2012)']
});

/* ---------- infrastruttura ---------- */
uebZug('mob-gem22', {
  typ: 'Locomotiva di servizio bimodale Stadler',
  text: ['Le tre Gem 2/2 viaggiano con la corrente della linea di contatto o a diesel. Trainano treni cantiere e di materiale sulla MOB.', 'Una quarta, la HGem 2/2 2501, ha una ruota dentata e lavora alla MVR sulla linea per Les Pléiades.'],
  kennzahlen: [['3', 'locomotive alla MOB'], ['600 kW', 'elettrica'], ['400 kW', 'diesel'], ['2016', 'consegnate']],
  daten: { 'Bauart': 'locomotiva bimodale (elettrica e diesel), 2 assi', 'Fahrzeugnummern': '2502–2504; HGem 2/2 2501 alla MVR', 'Leistung': '600 kW in elettrico, 400 kW a diesel', 'Anzahl': '3 (più la 2501)' },
  specNote: 'Potenza secondo il rapporto di gestione 2016 della MOB. Il carico rimorchiabile dipende molto dalla pendenza e non è quindi indicato con un solo valore.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha consegnato le locomotive nel 2016 nell’ambito di un ordine comune di più ferrovie. Tre sono per la MOB, la 2501 con cremagliera per la linea MVR di Les Pléiades.'] },
      { titel: 'Impiego e tecnica', p: ['Le locomotive trainano treni cantiere e trasporti di materiale e aiutano nella manutenzione. A diesel circolano anche quando la linea di contatto è disinserita. Possono essere radiocomandate e impiegate accoppiate.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Pantografo e motore diesel', 'Radiocomando', 'Nessuna ruota dentata (tranne la 2501)'] }
    ],
  bilder: ['Gem 2/2 2504 a Montbovon (2022)', 'Gem 2/2 2503 a Saanen (2022)']
});
uebZug('mob-gm44', {
  beiname: '2003 e 2004',
  typ: 'Locomotiva diesel per treni cantiere pesanti',
  text: ['Le due Gm 4/4 sono locomotive diesel provenienti dalla Francia. Trainano treni cantiere pesanti e hanno talvolta circolato anche nel servizio viaggiatori.', 'Nonostante il numero simile non hanno nulla a che fare con le vecchie locomotive bagagliaio 2001 e 2002.'],
  kennzahlen: [['2', 'locomotive'], ['1976', '2003 costruita'], ['1982', '2004 costruita'], ['80 km/h', 'velocità massima']],
  daten: { 'Bauart': 'locomotiva diesel a 4 assi' },
  specNote: 'Secondo Wikipedia (elenco dei veicoli della MOB) e il dossier. Le fonti verificate non indicano potenza né peso.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Moyse costruì la 2003 nel 1976, CFD la 2004 nel 1982, entrambe in Francia.'] },
      { titel: 'Impiego e tecnica', p: ['Le locomotive trainano treni di costruzione e cantiere pesanti, anche quando la linea di contatto è disinserita. La MOB prevede nuovi trattori per l’infrastruttura; il rapporto di gestione 2025 indica come obiettivo la metà del 2028.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Trazione diesel, indipendente dalla linea di contatto', 'Due carrelli', 'Pensata per treni cantiere'] }
    ]
});
uebZug('mob-gem44', {
  typ: 'Nuove locomotive di servizio bimodali (ordinate)',
  text: ['Insieme alle nuove locomotive del GoldenPass, la MOB ha ordinato nel 2024 due locomotive ibride per il servizio lavori. Dovrebbero trainare treni cantiere e di servizio anche senza linea di contatto.', 'Sono lunghe circa 17 m e hanno quattro assi motori.'],
  kennzahlen: [['2', 'locomotive ordinate'], ['17 m', 'lunghezza'], ['100 km/h', 'velocità massima'], ['2024', 'ordinate']],
  daten: { 'Bauart': 'locomotiva bimodale a 4 assi', 'Fahrzeugnummern': '8601–8602 (secondo Wikipedia)', 'Länge': 'circa 17 m', 'Anzahl': '2 ordinate' },
  specNote: 'Secondo Stadler (ottobre 2024) e Wikipedia. Potenza per modalità, motore diesel e batteria non sono ancora pubblicati; i 3 MW delle locomotive elettriche non valgono per queste locomotive.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Nell’ottobre 2024 Stadler e la MOB hanno concordato due locomotive di servizio ibride a quattro assi, imparentate con le quattro nuove locomotive elettriche della serie 8500.'] },
      { titel: 'Impiego e tecnica', p: ['Le locomotive dovrebbero trainare treni cantiere e di servizio su tutta la MOB, anche su tratti senza corrente. Una data di consegna non è ancora pubblicata.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Esercizio con la corrente della linea di contatto', 'Seconda fonte di energia per tratti senza linea di contatto', 'Quattro assi motori'] }
    ]
});

/* ---------- veicoli di servizio e speciali ---------- */
uebZug('mob-schnee', {
  name: 'Spazzaneve e carro gru', beiname: 'Zaugg e Nencki',
  typ: 'Veicoli per il servizio invernale e la manutenzione',
  text: ['Per l’inverno la MOB ha ricevuto nel 2016 due nuovi spazzaneve Zaugg e un carro gru attrezzato da Nencki.', 'Uno spazzaneve spinge la neve di lato; viene mosso da una locomotiva o da un’automotrice.'],
  kennzahlen: [['2', 'spazzaneve (2016)'], ['1', 'carro gru'], ['Zaugg', 'costruttore spazzaneve'], ['2016', 'acquisto']],
  daten: { 'Bauart': 'spazzaneve e carro gru', 'Hersteller': 'Zaugg (spazzaneve), Nencki (gru)', 'Anzahl': '2 spazzaneve, 1 carro gru' },
  specNote: 'Secondo il rapporto di gestione 2016 della MOB. Numeri, pesi e diagrammi di carico non sono pubblicati; un carico massimo della gru non è quindi indicato.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Secondo il rapporto di gestione 2016 sono arrivati alla MOB due spazzaneve ad aderenza di Zaugg e un carro gru attrezzato da Nencki.'] },
      { titel: 'Impiego e tecnica', p: ['D’inverno gli spazzaneve tengono aperta la linea tra Montreux, Zweisimmen e Lenk. Il carro gru solleva materiale per costruzione e manutenzione. Entro la metà del 2028 circa dovrebbero arrivare anche piattaforme con gru e cestello per lavori al binario e alla linea di contatto.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Lama per sgomberare di lato', 'Gru con stabilizzatori', 'Larghezza di lavoro e carico della gru secondo il mezzo'] }
    ],
  bilder: ['Spazzaneve rapido della MOB davanti a un’automotrice presso Oeschseite (2017)']
});

/* ---------- veicoli storici ---------- */
uebZug('mob-bcfe44', {
  typ: 'Automotrice elettrica della prima generazione del 1905 (storica)',
  text: ['La BCFe 4/4 11 è una delle prime automotrici elettriche della MOB. Risale al 1905 e circola oggi alla ferrovia museo Blonay–Chamby.', 'Aveva compartimenti di 2a e 3a classe e un bagagliaio.'],
  kennzahlen: [['1905', 'costruzione'], ['192 kW', 'potenza'], ['50 km/h', 'velocità massima'], ['29 t', 'peso']],
  daten: { 'Bauart': 'automotrice elettrica viaggiatori e bagagli', 'Betreiber': 'MOB, oggi ferrovia museo Blonay–Chamby', 'Fahrzeugnummern': '11 (serie 7–20)', 'Sitzplätze': '12 in 2a, 16 in 3a classe (storico)', 'Erhalten': 'Blonay–Chamby, in esercizio' },
  specNote: 'Secondo la scheda della ferrovia museo Blonay–Chamby. Per la consegna al museo le fonti indicano il 1999 e il 2000.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SIG e Alioth costruirono l’automotrice nel 1905 per la giovane MOB. Appartiene alla serie BCFe 4/4 7–20, con cui la MOB sviluppò il suo esercizio elettrico.'] },
      { titel: 'Impiego e tecnica', p: ['La vettura trasportava viaggiatori e bagagli sulla linea di montagna da Montreux. Verso il 2000 arrivò alla ferrovia museo Blonay–Chamby e fu restaurata per il centenario della MOB nel 2001. Oggi vi circola in treni museali.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Compartimenti di 2a e 3a classe (storici)', 'Bagagliaio di 6 m² per 2 t', 'Quattro motori da 48 kW ciascuno'] }
    ],
  bilder: ['BCFe 4/4 11 a Chamby (2018)', 'BCFe 4/4 11 (2013)']
});
uebZug('mob-fze66', {
  beiname: '2001 e 2002',
  typ: 'Locomotiva bagagliaio e postale del 1932 (storica)',
  text: ['Fino al 1968 le FZe 6/6 furono i veicoli più potenti della MOB. Furono costruite nel 1932 per un treno di lusso presto soppresso a causa della crisi economica.', 'La 2002 circola oggi alla ferrovia museo Blonay–Chamby.'],
  kennzahlen: [['2', 'locomotive'], ['738 kW', 'potenza'], ['55 km/h', 'velocità massima'], ['1932', 'costruzione']],
  daten: { 'Bauart': 'locomotiva elettrica bagagliaio e postale su 3 carrelli', 'Betreiber': 'MOB, oggi ferrovia museo Blonay–Chamby', 'Fahrzeugnummern': '2001, 2002 (dal 1962 DZe 6/6)', 'Erhalten': '2002 (Blonay–Chamby, dal 2008)' },
  specNote: 'Secondo la scheda della ferrovia museo Blonay–Chamby e Wikipedia. FZe e DZe sono due designazioni degli stessi veicoli, non due locomotive diverse.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SIG e BBC costruirono i due veicoli nel 1932 per il Golden Mountain Pullman Express del 1931. Il treno di lusso fallì a causa della crisi economica mondiale; in seguito le locomotive circolarono con normali treni viaggiatori e merci.'] },
      { titel: 'Impiego e tecnica', p: ['Trainavano spesso pesanti treni merci, per esempio di materiali da costruzione. Nel 1962 furono rinominate DZe 6/6, nel 1977/79 adattate ai treni con carrelli trasportatori.', 'La 2001 fu accantonata nel 1988 e demolita nel 2007. La 2002 fu ritirata nel 2002, arrivò alla ferrovia museo Blonay–Chamby il 19 luglio 2008 ed è lì in esercizio.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Vano bagagli e posta di 10,2 m² per 4 t', 'Sei motori da 123 kW ciascuno', 'Cassa articolata su tre carrelli'] }
    ],
  bilder: ['FZe 6/6 2002 a Chamby-Musée (2026)']
});
uebZug('mob-bde44-3000', {
  typ: 'Automotrici leggere del 1944 e 1946 (storiche)',
  text: ['Le sei BDe 4/4 della serie 3000 hanno caratterizzato l’esercizio della MOB dopo la Seconda guerra mondiale. Trainavano anche carrozze più vecchie e carrozze pilota.', 'La maggior parte è stata demolita; la 3002 esiste ancora.'],
  kennzahlen: [['6', 'automotrici'], ['1944', 'prime quattro'], ['1946', 'altre due'], ['3002', 'esiste ancora']],
  daten: { 'Bauart': 'automotrice elettrica viaggiatori e bagagli' },
  specNote: 'Secondo Wikipedia (elenco dei veicoli della MOB) e il dossier. Demolizioni: 3003 (1996), 3004 (2010), 3001 (2019), 3005 e 3006 (2024). Un’attuale idoneità all’esercizio della 3002 non è confermata.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SIG e BBC consegnarono le 3001–3004 nel 1944 e le 3005 e 3006 nel 1946.'] },
      { titel: 'Impiego e tecnica', p: ['Le automotrici leggere effettuavano treni viaggiatori e bagagli su tutta la MOB, spesso con carrozze più vecchie e carrozze pilota. Dal 1968 le ABDe 8/8 rilevarono parte dei loro compiti; più tardi servirono nel servizio interno e come riserva.', 'Per la 3002 il rapporto di gestione 2012 documenta una revisione parziale e adattamenti alla cabina di guida.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Compartimenti per viaggiatori e bagagli', 'Due cabine di guida', 'Conservata: 3002'] }
    ],
  bilder: ['BDe 4/4 3002 a Zweisimmen (2014)', 'BDe 4/4 con un treno merci (1984)']
});
uebZug('mob-abde88', {
  typ: 'Automotrice doppia del 1968 (storica)',
  text: ['Le quattro ABDe 8/8 del 1968 sono state a lungo la spina dorsale della MOB. Ogni unità è formata da due metà unite stabilmente, con in totale otto assi motori.', 'Sono fuori servizio dal 2017; due sono accantonate a Lenk.'],
  kennzahlen: [['4', 'automotrici doppie'], ['70 km/h', 'velocità massima'], ['86', 'posti a sedere'], ['1968', 'in servizio']],
  daten: { 'Bauart': 'automotrice doppia elettrica', 'Sitzplätze': '18 in 1a, 68 in 2a classe', 'Erhalten': '4001 e 4004 accantonate a Lenk' },
  specNote: 'Secondo Wikipedia. Wikipedia indica 840 V corrente continua, documenti di rete più vecchi 900 V. Accantonata non significa conservata da un museo.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SIG, BBC e SAAS costruirono le quattro unità nel 1968. Ciascuna porta uno stemma: 4001 quello svizzero, 4002 Vaud, 4003 Berna e 4004 Friburgo.'] },
      { titel: 'Impiego e tecnica', p: ['Dal 1968 effettuarono la maggior parte del traffico Montreux–Zweisimmen e sostituirono le BDe 4/4 della serie 3000. Su una pendenza del 73 per mille trainavano fino a cinque carrozze per 80 t.', 'Dopo l’arrivo delle GDe 4/4 dal 1983 assunsero compiti minori. Furono ufficialmente congedate il 2 e 3 settembre 2017. La 4003 fu demolita nel 2018, la 4002 nel 2021; le 4001 e 4004 sono a Lenk dal 2020.'] },
      { titel: 'Dotazione e accessibilità', liste: ['18 posti in 1a e 68 in 2a classe', 'Bagagliaio', 'Due metà come unità fissa'] }
    ],
  bilder: ['ABDe 8/8 4003 a Zweisimmen (2014)', 'ABDe 8/8 4001 accantonata a Lenk (2023)']
});
uebZug('mob-hist-wagen', {
  name: 'Carrozze viaggiatori storiche', beiname: 'BC4 22 e B4 61',
  typ: 'Prime carrozze viaggiatori della MOB a Blonay–Chamby (storiche)',
  text: ['Alla ferrovia museo Blonay–Chamby sono conservate due prime carrozze viaggiatori della MOB: la BC4 22 del 1902 e la B4 61 del 1906.', 'Mostrano come si viaggiava nei primi anni della MOB.'],
  kennzahlen: [['1902', 'BC4 22'], ['1906', 'B4 61'], ['48', 'posti nella BC4 22'], ['SIG', 'costruttore']],
  daten: { 'Bauart': 'carrozze viaggiatori storiche a carrelli', 'Betreiber': 'MOB, oggi ferrovia museo Blonay–Chamby', 'Sitzplätze': '48 di 3a classe (BC4 22), 30 di 2a classe (B4 61)', 'Erhalten': 'ferrovia museo Blonay–Chamby' },
  specNote: 'Secondo le schede della ferrovia museo Blonay–Chamby. Nonostante la designazione di classe mista, la BC4 22 ha oggi un allestimento solo di 3a classe; secondo la scheda la B4 61 era in revisione.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La SIG di Neuhausen costruì la BC4 22 nel 1902 e la B4 61 nel 1906.'] },
      { titel: 'Impiego e tecnica', p: ['Le carrozze circolarono sulla MOB nei primi decenni, dietro le prime automotrici come la BCFe 4/4 11. Oggi fanno parte della collezione della ferrovia museo Blonay–Chamby.', 'La 3a classe è una caratteristica storica, non un’offerta attuale.'] },
      { titel: 'Dotazione e accessibilità', liste: ['BC4 22: 48 posti di 3a classe', 'B4 61: 30 posti di 2a classe', 'Nessuna trazione propria'] }
    ],
  bilder: ['BC4 22 a Blonay–Chamby (2023)', 'B4 61 a Blonay (2018)', 'Nella B4 61 (2019)']
});
uebZug('mob-hist-gueterwagen', {
  name: 'Carri merci storici', beiname: 'K, L, M e O',
  typ: 'Primi carri merci della MOB a Blonay–Chamby (storici)',
  text: ['La MOB trasportava un tempo merci varie, bestiame, legname e materiali da costruzione. Quattro primi carri merci dal 1901 al 1905 sono conservati alla ferrovia museo Blonay–Chamby.', 'L’L 153 è stato persino uno spazzaneve per un certo periodo.'],
  kennzahlen: [['4', 'carri'], ['1901', 'il più vecchio (K 101)'], ['10–12 t', 'portata'], ['1905', 'il più recente (O 810)']],
  daten: { 'Bauart': 'carri merci storici', 'Betreiber': 'MOB, oggi ferrovia museo Blonay–Chamby', 'Gewicht': '5,0–7,8 t a vuoto', 'Nutzlast': '10 o 12 t', 'Erhalten': 'ferrovia museo Blonay–Chamby' },
  specNote: 'Secondo le schede della ferrovia museo Blonay–Chamby. La portata è il carico ammesso, non il peso totale. Oggi la MOB non ha più un traffico merci proprio di rilievo.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['I quattro carri conservati risalgono ai primi anni d’esercizio della MOB.'],
        tabelle: { kopf: ['Carro', 'Costruzione', 'Costruttore', 'A vuoto', 'Portata'], zeilen: [
          ['K 101', '1901', 'SIG', '7,7 t', '10 t'], ['L 153', '1903', 'SIG Neuhausen', '6,7 t', '10 t'], ['M 706', '1904', 'Busch Bautzen', '5,0 t', '10 t'], ['O 810', '1905', 'Busch Bautzen', '7,8 t', '12 t']] } },
      { titel: 'Impiego e tecnica', p: ['I carri hanno freni a mano e a vuoto automatici. L’L 153 fu trasformato nel 1971 nello spazzaneve X 153, poi chiamato Xa 9. Dopo la cessione a Blonay–Chamby nel 2006 fu ripristinato come L 153 e circola di nuovo dal 2009.', 'Più tardi la MOB trasportò anche carri merci a scartamento normale su carrelli trasportatori, soprattutto tra Zweisimmen e Lenk.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Carri coperti e aperti', 'Freno a mano e freno a vuoto', 'Nessuna trazione propria'] }
    ],
  bilder: ['Carro merci M 706 a Blonay–Chamby (2021)', 'Carro a sponde alte O 801 a Blonay–Chamby (2012)']
});

/* carte «Dove circola?» */
uebEinsatz({
  'mob-alpina': 'Sulla linea principale Montreux–Zweisimmen e fino a Lenk, in treni regionali e con carrozze panoramiche. Lo scartamento metrico è tratteggiato e semplificato.',
  'mob-be44-5000': 'Soprattutto tra Zweisimmen e Lenk im Simmental e fino a Gstaad. Lo scartamento metrico è tratteggiato e semplificato.',
  'mob-ge44-8000': 'In testa al GoldenPass Express tra Montreux e Zweisimmen. Lo scartamento metrico è tratteggiato e semplificato.',
  'mob-gde44': 'In testa ai treni panoramici su tutta la MOB, stagionalmente anche al Treno del cioccolato. Lo scartamento metrico è tratteggiato e semplificato.',
  'mob-ge44-8500': 'Prevista in testa al GoldenPass Express tra Montreux e Zweisimmen. Lo scartamento metrico è tratteggiato e semplificato.',
  'mob-gpx': 'Montreux–Zweisimmen a scartamento metrico (tratteggiato), poi dopo il cambio di scartamento a scartamento normale via Spiez fino a Interlaken Ost.',
  'mob-panoramic': 'Nel GoldenPass Panoramic tra Montreux e Zweisimmen. Lo scartamento metrico è tratteggiato e semplificato.',
  'mob-belle-epoque': 'Nel GoldenPass Belle Époque tra Montreux e Zweisimmen. Lo scartamento metrico è tratteggiato e semplificato.',
  'mob-gem22': 'Con treni cantiere e di materiale su tutta la MOB. Lo scartamento metrico è tratteggiato e semplificato.',
  'mob-gm44': 'In testa a pesanti treni cantiere su tutta la MOB. Lo scartamento metrico è tratteggiato e semplificato.',
  'mob-gem44': 'Previste per treni cantiere e di servizio su tutta la MOB. Lo scartamento metrico è tratteggiato e semplificato.',
  'mob-schnee': 'D’inverno tra Montreux, Zweisimmen e Lenk. Lo scartamento metrico è tratteggiato e semplificato.',
  'mob-bcfe44': 'Un tempo sulla linea di montagna da Montreux; oggi alla ferrovia museo Blonay–Chamby. Lo scartamento metrico è tratteggiato e semplificato.',
  'mob-fze66': 'Un tempo in testa a treni pesanti su tutta la MOB; la 2002 circola oggi a Blonay–Chamby. Lo scartamento metrico è tratteggiato e semplificato.',
  'mob-bde44-3000': 'Un tempo su tutta la MOB. Lo scartamento metrico è tratteggiato e semplificato.',
  'mob-abde88': 'Un tempo soprattutto tra Montreux e Zweisimmen; due unità sono accantonate a Lenk. Lo scartamento metrico è tratteggiato e semplificato.',
  'mob-hist-wagen': 'Un tempo sulla MOB; oggi alla ferrovia museo Blonay–Chamby. Lo scartamento metrico è tratteggiato e semplificato.',
  'mob-hist-gueterwagen': 'Un tempo nel traffico merci della MOB; oggi alla ferrovia museo Blonay–Chamby. Lo scartamento metrico è tratteggiato e semplificato.'
});
