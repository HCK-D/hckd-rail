/* Italiano – Zentralbahn (zb) */
uebDict({
  'Zentralbahn': 'Zentralbahn', 'zb Zentralbahn': 'zb Zentralbahn', '1200 V Gleichstrom': '1200 V corrente continua', 'Dieselelektrisch': 'diesel-elettrica'
});

/* ---------- traffico viaggiatori ---------- */
uebZug('zb-adler', {
  typ: 'Elettrotreno Stadler a cremagliera di sette casse per Lucerna–Interlaken',
  text: ['L’ADLER è il lungo elettrotreno espresso della Zentralbahn. I quattro treni Stadler di sette casse circolano dal 2012, soprattutto come Luzern–Interlaken Express attraverso il Brünig.', 'In valle viaggia solo sulle ruote, sulle rampe ripide lo aiuta una ruota dentata. Altri ADLER sono stati ordinati.'],
  kennzahlen: [['4', 'treni (150 001–004)'], ['313', 'posti a sedere'], ['120 km/h', 'velocità massima'], ['2012', 'in servizio']],
  daten: { 'Bauart': 'elettrotreno a cremagliera e aderenza, 7 casse', 'Fahrzeugnummern': '150 001–004; ordinati 151 011–012 e altri cinque', 'Länge': '126 m tra gli accoppiatori', 'Gewicht': 'circa 200 t', 'Leistung': '2800 kW (aderenza), 3200 kW (cremagliera)', 'Anfahrzugkraft': '240 kN (aderenza)', 'Höchstgeschwindigkeit': '120 km/h (aderenza), 40 km/h su cremagliera', 'Sitzplätze': '313, di cui 63 in 1a classe', 'Anzahl': '4 treni, altri 7 ordinati' },
  specNote: 'Posti secondo l’attuale pagina della Zentralbahn; la scheda Stadler originale e Wikipedia indicano altre suddivisioni (307 e 317 posti). Potenza secondo Stadler. Per lo sforzo di trazione all’avviamento su cremagliera le fonti divergono molto (200 e 440 kN); non è quindi indicato.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha consegnato i quattro ADLER nel 2012 e 2013. Il nome sta per «alpiner dynamischer leiser edler Reisezug» (treno alpino dinamico, silenzioso e nobile). Due elementi motori di tre casse racchiudono una carrozza bistrò. Sono battezzati 150 001 «Bern» e 150 003 «Luzern».', 'La Zentralbahn ha ordinato altri ADLER: prima due treni (secondo Wikipedia nel dicembre 2019, numeri 151 011–012, con una carrozza multifunzionale invece del bistrò), poi altri cinque nel settembre 2025. Dovrebbero arrivare da fine 2027; tre di essi avranno uno scompartimento premium.'] },
      { titel: 'Impiego e tecnica', p: ['Gli ADLER circolano soprattutto come Luzern–Interlaken Express attraverso il Brünig. Sui tratti a cremagliera tra Giswil e Meiringen le ruote dentate ingranano nella cremagliera (sistema Riggenbach); lì il treno sale fino a 40 km/h, in valle viaggia fino a 120 km/h.', 'Il treno è lungo 126 m e pesa circa 200 t. Può essere accoppiato con un FINK; ne risulta un treno più lungo con più posti.'] },
      { titel: 'Dotazione e accessibilità', liste: ['313 posti, di cui 63 in 1a classe (dato della Zentralbahn)', 'Carrozza bistrò al centro del treno', 'Accessi a pianale ribassato (circa 420 mm) a quattro porte su sette per lato, WC accessibile in sedia a rotelle', 'Climatizzazione, grandi finestrini panoramici, informazione ai viaggiatori e prese', 'Portabiciclette e portasci'] }
    ],
  bilder: ['ADLER sul lago di Lungern (2014)', 'ABeh 150 002 (2014)', '1a classe nell’ADLER (2017)']
});
uebZug('zb-fink', {
  typ: 'Elettrotreno Stadler a cremagliera di tre casse per la S-Bahn e il Brünig',
  text: ['Il FINK è il fratello corto dell’ADLER. Gli undici treni Stadler di tre casse circolano dal 2012 sulla S-Bahn di Lucerna, sul Brünig e verso Engelberg.', 'Come l’ADLER ha una ruota dentata per i tratti ripidi. Circola da solo o rinforza un ADLER.'],
  kennzahlen: [['11', 'treni (6 + 5)'], ['139', 'posti fissi'], ['120 km/h', 'velocità massima'], ['2012', 'in servizio']],
  daten: { 'Bauart': 'elettrotreno a cremagliera e aderenza, 3 casse', 'Länge': '54 m tra gli accoppiatori', 'Gewicht': 'circa 90 t', 'Leistung': '1400 kW (aderenza), 1600 kW (cremagliera)', 'Anfahrzugkraft': '120 kN (aderenza)', 'Höchstgeschwindigkeit': '120 km/h (aderenza), 40 km/h su cremagliera', 'Sitzplätze': '139, di cui 18 in 1a classe, più 8 strapuntini', 'Anzahl': '11 treni' },
  specNote: 'Valori secondo Stadler e la Zentralbahn; Wikipedia indica 93 t. Anche per il FINK i dati sulla trazione su cremagliera divergono (100 e 220 kN). I nuovi FINK dal 2026 hanno una scheda propria.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha consegnato sei FINK nel 2012 (160 001–006) e altri cinque nel 2016 (161 011–015). Il nome sta per «flinke innovative Niederflurkomposition» (composizione agile e innovativa a pianale ribassato). Sulla seconda serie i carrelli a cremagliera sono stati migliorati per usurarsi meno.', 'Alcuni treni portano un nome, come 160 004 «Oberried» e 161 015 «Interlaken».'] },
      { titel: 'Impiego e tecnica', p: ['I FINK circolano sulla S-Bahn di Lucerna (S4, S5), nel traffico regionale Meiringen–Interlaken Ost, come rinforzo degli ADLER e sulla diramazione per Engelberg. Linee e turni cambiano con l’orario.', 'Il treno è lungo 54 m. Sui tratti a cremagliera del Brünig e prima di Engelberg sale fino a 40 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['139 posti fissi, di cui 18 in 1a classe, più 8 strapuntini', 'Zone a pianale ribassato con porte larghe e aree accessibili', 'Climatizzazione, finestrini panoramici e informazione ai viaggiatori', 'Nessun bistrò'] }
    ],
  bilder: ['ABeh 161 013 come IR per Engelberg a Lucerna (2019)', 'ABeh 160 004 a Stans (2025)', 'FINK sul Brünig (2012)']
});
uebZug('zb-fink-neu', {
  beiname: 'nuovo FINK',
  typ: 'Nuova generazione del FINK, entrata in servizio prevista da dicembre 2026',
  text: ['Dieci nuovi FINK rafforzeranno la flotta della Zentralbahn da fine 2026. Il primo veicolo è arrivato nella notte sul 13 agosto 2026 e da allora è in prova a Meiringen.', 'Dal cambio d’orario del 13 dicembre 2026 dovrebbero circolare sul RE44 Lucerna–Engelberg.'],
  kennzahlen: [['10', 'treni ordinati'], ['128', 'posti a sedere'], ['2026', 'primo veicolo'], ['RE44', 'Lucerna–Engelberg']],
  daten: { 'Bauart': 'elettrotreno a cremagliera e aderenza, 3 casse', 'Fahrzeugnummern': '162 021–030 (secondo Wikipedia)', 'Sitzplätze': '17 in 1a, 111 in 2a classe', 'Anzahl': '10 ordinati (7 + 3)', 'In Betrieb seit': '2026 previsto' },
  specNote: 'Secondo il comunicato della Zentralbahn dell’agosto 2026. I nuovi FINK hanno 128 posti, i precedenti 139; i valori non valgono gli uni per gli altri. I dati tecnici della nuova versione non sono ancora pubblicati.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La Zentralbahn ha ordinato a Stadler prima sette nuovi FINK e nel settembre 2025 altri tre. Nella notte tra il 12 e il 13 agosto 2026 il primo treno è arrivato a Interlaken ed è stato trasferito a Meiringen.'] },
      { titel: 'Impiego e tecnica', p: ['Dopo prove e omologazione, i treni dovrebbero circolare dal 13 dicembre 2026 sul RE44 Lucerna–Engelberg. In seguito rinforzeranno anche Interregio e S-Bahn e circoleranno accoppiati sul Regio Meiringen–Interlaken Ost.', 'Come i FINK precedenti hanno una ruota dentata. Un treno arrivato non è ancora un treno in orario: fino all’omologazione circola solo per prove.'] },
      { titel: 'Dotazione e accessibilità', liste: ['128 posti: 17 in 1a e 111 in 2a classe', 'Nuovo arredamento interno e nuovo design', 'Altre dotazioni secondo lo stato dell’omologazione'] }
    ]
});
uebZug('zb-spatz', {
  typ: 'Elettrotreno panoramico di tre casse senza cremagliera per la S-Bahn',
  text: ['Lo SPATZ è il più vecchio elettrotreno moderno della Zentralbahn. Stadler ha consegnato i dieci treni nel 2004 e 2005; circolano soprattutto sulla S-Bahn di Lucerna.', 'Non ha ruota dentata e quindi circola solo sulle linee più pianeggianti, per esempio fino a Giswil o tra Meiringen e Interlaken.'],
  kennzahlen: [['10', 'treni (130 001–010)'], ['134', 'posti a sedere'], ['100 km/h', 'velocità massima'], ['2004', 'consegnati']],
  daten: { 'Bauart': 'elettrotreno a pianale ribassato, 3 casse (senza cremagliera)', 'Länge': '51,93 m tra gli accoppiatori', 'Gewicht': '68,5 t a vuoto', 'Leistung': '1150 kW alla ruota (breve durata), 660 kW continui', 'Sitzplätze': '19 in 1a, 115 in 2a classe, più 14 strapuntini' },
  specNote: 'Valori secondo la scheda Stadler (stato di consegna); potenza continua secondo Wikipedia. Rinnovi successivi possono aver modificato interni e posti.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha costruito i dieci SPATZ nel 2004 e 2005. Il nome sta per «Schmalspur-Panorama-Triebzug» (elettrotreno panoramico a scartamento ridotto). Le testate provengono dai GTW della linea del Seetal. Diversi treni portano un nome, come 130 001 «Haslital» e 130 002 «Pilatus».', 'Dal 2017 tutti gli SPATZ hanno accoppiatori automatici con cui possono circolare anche accoppiati a un FINK. Porte, pavimenti, toilette e informazione ai viaggiatori sono stati rinnovati più tardi a Stansstad.'] },
      { titel: 'Impiego e tecnica', p: ['Gli SPATZ circolano sulla S-Bahn di Lucerna, per esempio sulla S4 e S5 verso Giswil e Stans, e tra Meiringen e Interlaken Ost. Da soli non possono superare il Brünig né salire a Engelberg, perché manca loro la ruota dentata.', 'La trazione si trova nei carrelli sotto la parte centrale. Il treno è lungo quasi 52 m e viaggia fino a 100 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['134 posti: 19 in 1a e 115 in 2a classe, più 14 strapuntini', 'Accessi a pianale ribassato (circa 400 mm) e zona per sedie a rotelle', 'WC chiuso accessibile in sedia a rotelle', 'Climatizzazione e grandi finestrini panoramici nella parte centrale'] }
    ],
  bilder: ['SPATZ ABe 130 002 a Sarnen (2017)', 'SPATZ sul lago di Brienz (2014)', 'Nello SPATZ (2006)']
});
uebZug('zb-hge44ii', {
  typ: 'Locomotiva elettrica a cremagliera e aderenza per il Brünig ed Engelberg',
  text: ['Fino al 2012 le otto HGe 4/4 II trainavano tutti i treni espressi attraverso il Brünig. Oggi trainano soprattutto il Luzern–Engelberg Express e treni supplementari.', 'Hanno ruote per le linee di valle e ruote dentate per le rampe ripide.'],
  kennzahlen: [['8', 'locomotive (101 961–968)'], ['1932 kW', 'potenza oraria'], ['100 km/h', 'velocità massima'], ['1989', 'prime locomotive']],
  daten: { 'Bauart': 'locomotiva elettrica a cremagliera e aderenza', 'Hersteller': 'SLM (meccanica), BBC/ABB (elettrica)', 'Betreiber': 'zb Zentralbahn (fino al 2004 linea del Brünig delle FFS)', 'Länge': '14,80 m respingenti compresi', 'Leistung': '1932 kW (potenza oraria)', 'Anfahrzugkraft': '230 kN (aderenza), 280 kN (cremagliera)', 'Höchstgeschwindigkeit': '100 km/h (aderenza), 40 km/h su cremagliera' },
  specNote: 'Valori secondo Wikipedia. Le fonti verificate non indicano chiaramente quante delle otto locomotive siano ancora in servizio oggi.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM e BBC (poi ABB) hanno costruito le locomotive; la linea del Brünig delle FFS le ha messe in servizio nel 1989 e 1990. Portano nomi di località, da «Horw» a «Ringgenberg». Locomotive identiche circolano sulla Matterhorn Gotthard Bahn.'] },
      { titel: 'Impiego e tecnica', p: ['Fino al 2012 le HGe 4/4 II trainavano tutti i treni espressi tra Lucerna e Interlaken. Oggi due treni navetta appositamente attrezzati effettuano il Luzern–Engelberg Express; altre navette circolano in treni stagionali, sulla S41 e come riserva. Nuovi elettrotreni dovrebbero rilevarne una parte.', 'Su cremagliera (sistema Riggenbach) la locomotiva sale a 40 km/h e traina fino a 170 t su una pendenza del 120 per mille.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida, nessuno spazio per viaggiatori', 'Trazione a cremagliera e aderenza', 'Circola con carrozze panoramiche e carrozze pilota articolate in treni navetta'] }
    ],
  bilder: ['HGe 101 966 con il Luzern–Engelberg Express a Engelberg (2014)', 'HGe 101 con un Interregio presso Niederried (2009)', 'HGe 101 968 a Interlaken Ost (2009)']
});
uebZug('zb-bdeh140', {
  typ: 'Automotrice a cremagliera della ferrovia Lucerna–Stans–Engelberg (riserva e storica)',
  text: ['Dal 1964 al 2010 le otto BDeh 4/4 della LSE hanno trainato i treni sulla ripida rampa verso Engelberg. Oggi la 140 006 serve da riserva, la 140 005 circola come veicolo storico.', 'Avevano due rapporti di trasmissione: uno per la ripida cremagliera e uno per 75 km/h in valle.'],
  kennzahlen: [['8', 'automotrici (1–8)'], ['736 kW', 'potenza oraria'], ['75 km/h', 'velocità massima'], ['1964', 'prime automotrici']],
  daten: { 'Bauart': 'automotrice elettrica a cremagliera e aderenza', 'Betreiber': 'LSE, dal 2005 zb Zentralbahn', 'Fahrzeugnummern': '1–5 (1964), 6–7 (1970), 8 (1980); oggi 140 005 e 140 006', 'Gewicht': '47,9 t a vuoto', 'Leistung': '736 kW (potenza oraria)', 'Höchstgeschwindigkeit': '75 km/h (aderenza), 20 km/h su cremagliera', 'Sitzplätze': 'da 40 a 42 in 2a classe', 'Anzahl': '8 costruite' },
  specNote: 'Valori secondo la scheda del Verein Engelbergbahn per la 005 e secondo Wikipedia; Wikipedia indica 40, la scheda dell’associazione 42 posti. Wikipedia indica la 007 come venduta; secondo la Zentralbahn si trova al Museo Svizzero dei Trasporti e serve da simulatore di guida.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La LSE ha acquistato le automotrici in tre lotti: 1–5 nel 1964, 6–7 nel 1970 e la 8 nel 1980. SWP ha costruito la cassa, SLM il rodiggio a cremagliera e BBC l’equipaggiamento elettrico.', 'Le 2 e 8 sono state demolite nel 2012, le 1 e 3 nel 2014.'] },
      { titel: 'Impiego e tecnica', p: ['Fino all’apertura della nuova galleria Grafenort–Engelberg nel dicembre 2010 hanno svolto tutto il traffico verso Engelberg sulla vecchia, ripidissima rampa a cremagliera. In seguito hanno effettuato treni supplementari e sostituzioni sulla S-Bahn.', 'Oggi la 140 006 circola secondo la Zentralbahn sulla S41 e in treni stagionali. La 140 005 è conservata nei colori della LSE per corse speciali, la 140 007 si trova al Museo Svizzero dei Trasporti di Lucerna.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Compartimento viaggiatori e bagagli', 'Due rapporti di trasmissione per cremagliera e valle', 'Accesso a pianale alto, non senza gradini', 'La 005 circola con la carrozza pilota ABt 923'] }
    ],
  bilder: ['BDeh 140 006 (2007)', 'BDeh 4/4 4 della LSE a Engelberg (1998)', 'BDeh 4/4 8 in arrivo a Stansstad (2006)']
});
uebZug('zb-mib', {
  beiname: '013 e 008',
  typ: 'Automotrici a corrente continua della ferrovia Meiringen–Innertkirchen',
  text: ['Sulla linea Meiringen–Innertkirchen, lunga poco meno di 5 km, circolano automotrici proprie a 1200 V corrente continua. L’automotrice articolata 125 013 svolge il servizio quotidiano, la 125 008 è di riserva.', 'Dal 2021 la linea appartiene alla Zentralbahn.'],
  kennzahlen: [['2', 'automotrici'], ['1200 V', 'corrente continua'], ['5 km', 'linea'], ['2021', 'alla Zentralbahn']],
  daten: { 'Bauart': 'automotrici elettriche (automotrice articolata e veicolo singolo)', 'Betreiber': 'zb Zentralbahn (fino al 2020 MIB)', 'Fahrzeugnummern': '125 013 (ex MIB Be 2/6 13), 125 008 (ex MIB Be 4/4 8)' },
  specNote: 'Secondo la pagina del materiale rotabile della Zentralbahn e Wikipedia. Posti e masse non vi sono indicati e non vengono ripresi da altri GTW.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La Be 4/4 8 è stata costruita da Stadler nel 1996 ed è un esemplare unico; oggi si chiama Be 125 008 ed è pronta come riserva.', 'L’automotrice articolata Be 2/6 è stata costruita nel 1997 per la MVR sulla Riviera vodese ed è arrivata alla MIB nel 2018. Oggi si chiama Be 125 013.'] },
      { titel: 'Impiego e tecnica', p: ['La linea parte da Meiringen, passa accanto alla gola dell’Aare e attraversa la galleria del Kirchet (1502 m) fino a Innertkirchen. Di giorno i treni circolano circa ogni 30 minuti.', 'Poiché la linea è alimentata a 1200 V corrente continua, gli altri treni della Zentralbahn (15 kV corrente alternata) non possono circolarvi. La Zentralbahn ha studiato una conversione alla corrente alternata per treni diretti da Interlaken.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Nessuna cremagliera necessaria (linea ad aderenza)', 'Parte centrale a pianale ribassato sull’automotrice articolata 125 013', 'Esemplare unico 125 008 come riserva'] }
    ],
  bilder: ['Be 125 013 presso Aareschlucht West (2021)', 'Be 4/4 8, oggi Be 125 008, a Meiringen (2013)']
});
uebZug('zb-wagen', {
  name: 'Carrozze panoramiche e pilota', beiname: 'treni espressi',
  typ: 'Carrozze trainate per Lucerna–Engelberg e treni stagionali',
  text: ['Con le HGe 4/4 II circolano treni navetta di carrozze panoramiche, carrozze di 2a classe rinnovate e una carrozza pilota articolata. Il più noto è il Luzern–Engelberg Express con la carrozza Globi.', 'Le carrozze non hanno trazione propria; dalla carrozza pilota il macchinista comanda la locomotiva all’altra estremità del treno.'],
  kennzahlen: [['3', 'carrozze pilota articolate'], ['2', 'navette espresso'], ['1a', 'classe nella carrozza panoramica'], ['Globi', 'carrozza al centro']],
  daten: { 'Bauart': 'carrozze panoramiche, carrozze viaggiatori e carrozze pilota articolate', 'Anzahl': '3 carrozze pilota articolate' },
  specNote: 'Secondo la pagina del materiale rotabile della Zentralbahn. Numeri e posti delle singole carrozze non vi sono indicati per intero.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Il Luzern–Engelberg Express è composto da una HGe 4/4 II, una carrozza panoramica di 1a classe impiegata in passato nel servizio GoldenPass, tre carrozze di 2a classe rinnovate e una carrozza pilota articolata. Una carrozza Globi al centro dà al treno il nome di Globi-Express.', 'La Zentralbahn ha tre carrozze pilota articolate con cabina di guida e parte a pianale ribassato.'] },
      { titel: 'Impiego e tecnica', p: ['Due navette di questo tipo effettuano il Luzern–Engelberg Express. Tre, a volte quattro altre navette circolano in treni stagionali, sulla S41 e come riserva. I nuovi FINK dovrebbero rilevare una parte di questi treni da fine 2026.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Zona a pianale ribassato nella carrozza pilota articolata', 'Climatizzazione, grandi finestrini, sospensione pneumatica e freni a disco nella carrozza pilota articolata', 'Carrozza panoramica di 1a classe', 'Le carrozze più vecchie non sono senza gradini'] }
    ],
  bilder: ['Carrozza pilota articolata ABt a Hergiswil (2009)', 'Vista da un treno trainato tra Meiringen e il Brünig (2010)']
});

/* ---------- infrastruttura ---------- */
uebZug('zb-hgm104', {
  typ: 'Locomotiva diesel a cremagliera Stadler per treni cantiere e servizio invernale',
  text: ['Le HGm sono piccole locomotive diesel con ruota dentata. Trainano treni cantiere, aiutano quando la linea di contatto è disinserita e d’inverno lavorano allo sgombero della neve – anche sulle cremagliere del Brünig e prima di Engelberg.', 'Stadler ne ha consegnata una nel 2005, una nel 2010 e una nel 2022.'],
  kennzahlen: [['3', 'locomotive (104 001–003)'], ['450 kW', 'potenza'], ['60 km/h', 'velocità massima'], ['2005', 'prima locomotiva']],
  daten: { 'Bauart': 'locomotiva diesel-elettrica a cremagliera e aderenza' },
  specNote: 'Valori per le 104 001 e 002 secondo Wikipedia (Stadler HGm 2/2); per la 104 003 consegnata nel 2022 non sono pubblicati dati. I valori della Gm 105 non vengono ripresi.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha consegnato la 104 001 nel 2005 e la 104 002 nel 2010; una delle due era stata ordinata in origine dalle FFS per la linea del Brünig. Nel 2022 è arrivata un’altra locomotiva diesel a cremagliera, la 104 003.', 'Locomotive identiche circolano anche sulla Matterhorn Gotthard Bahn e su ferrovie a cremagliera in Spagna e Austria.'] },
      { titel: 'Impiego e tecnica', p: ['Le locomotive trainano treni di costruzione e di materiale e lavorano quando la linea di contatto è disinserita. D’inverno aiutano a sgomberare la neve. Dove una locomotiva ad aderenza non supera la rampa, serve la ruota dentata.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Trazione diesel-elettrica, indipendente dalla linea di contatto', 'Ruota dentata per i tratti a cremagliera', 'Cabina pensata per il servizio di lavoro'] }
    ],
  bilder: ['HGm 104 001 a Meiringen (2015)', 'HGm 104 002 (2011)']
});
uebZug('zb-gm105', {
  typ: 'Locomotiva diesel da manovra senza cremagliera per treni cantiere',
  text: ['La Gm 105 001 è una locomotiva diesel a due assi senza ruota dentata. Stadler l’ha consegnata nel 2011 per i treni cantiere sulle linee pianeggianti della Zentralbahn, della BOB e della MIB.', 'D’inverno spinge anche una fresa da neve.'],
  kennzahlen: [['1', 'locomotiva'], ['450 kW', 'potenza alla ruota'], ['80 km/h', 'velocità massima'], ['2011', 'consegnata']],
  daten: { 'Bauart': 'locomotiva diesel-elettrica senza cremagliera, 2 assi', 'Motor': 'MTU 12V183TB32, circa 550 kW', 'Länge': '8,09 m respingenti compresi', 'Leistung': '450 kW alla ruota' },
  specNote: 'Valori secondo la scheda Stadler (L4232ZBGm22_0812d). L’esempio di carico di 400 t sul 6 per mille a 30 km/h è un punto di calcolo, non un carico generale.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha consegnato la locomotiva nel 2011. È strettamente imparentata con le locomotive a cremagliera HGm, ma non ha ruota dentata.'] },
      { titel: 'Impiego e tecnica', p: ['Traina treni cantiere sulle linee ad aderenza della Zentralbahn, della Berner Oberland-Bahn e della MIB e d’inverno spinge frese da neve. Il freno elettrico eroga 360 kW.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due posti di comando in diagonale e sedili per quattro persone', 'Radiocomando e telecamera sul lato dell’accoppiatore', 'Rete ausiliaria 400 V da 25 kVA'] }
    ],
  bilder: ['Gm 105 001 (2014)', 'Gm 105 001 a Stansstad (2014)']
});

/* ---------- veicoli storici ---------- */
uebZug('zb-deh46', {
  typ: 'Automotrice bagagliaio della linea del Brünig elettrificata nel 1941 (storica)',
  text: ['Con le 16 automotrici bagagliaio Fhe 4/6 iniziò nel 1941 l’esercizio elettrico sul Brünig. Avevano ruote per la valle e un carrello a cremagliera per le rampe.', 'Molte furono poi trasformate in locomotive ad aderenza De 110. Sono conservate le 909, 912 e 914.'],
  kennzahlen: [['16', 'automotrici (901–916)'], ['894 kW', 'potenza'], ['75 km/h', 'velocità massima'], ['1941', 'in servizio']],
  daten: { 'Bauart': 'automotrice bagagliaio elettrica a cremagliera e aderenza', 'Hersteller': 'SLM; parte elettrica BBC, MFO e SAAS', 'Betreiber': 'linea del Brünig delle FFS, dal 2005 zb Zentralbahn', 'Fahrzeugnummern': 'Fhe 4/6 901–916, poi Deh 4/6 e Deh 120 006–012; trasformate in De 110 000–005, De 121 e 122 della LSE', 'Höchstgeschwindigkeit': '75 km/h (aderenza)', 'Erhalten': '909 (zb Historic), 912 e 914 (FFS Historic); attualmente non in esercizio' },
  specNote: 'Lunghezza, peso e potenza secondo la scheda della 909; storia secondo Wikipedia (SBB Fhe 4/6). I 75 km/h non valgono su cremagliera.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Durante la Seconda guerra mondiale le FFS elettrificarono la linea del Brünig a 15 kV. SLM costruì le 16 automotrici nel 1941 e 1942, l’equipaggiamento elettrico veniva da BBC, MFO e SAAS. Alla trazione ad aderenza si aggiunse un carrello centrale a cremagliera.', 'Le Fhe divennero poi Deh 4/6. La 915 fu demolita nel 1990 dopo un incidente.'] },
      { titel: 'Impiego e tecnica', p: ['Le automotrici trainavano treni viaggiatori e bagagli attraverso il Brünig. Dal 1954 le HGe 4/4 I le aiutarono in montagna, dal 1990 le HGe 4/4 II rilevarono i treni Lucerna–Interlaken.', 'Dal 1987 sei automotrici furono trasformate in locomotive ad aderenza (De 110 000–005); le altre si chiamarono Deh 120 006–012. Nel 1991 la LSE rilevò le 905 e 907 e le trasformò nelle De 121 e 122.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Bagagliaio per circa 3 t', 'Carrello centrale a cremagliera', 'Conservate: 909, 912 e 914, attualmente non in esercizio'] }
    ],
  bilder: ['Deh 4/6 914 con carrozze storiche a Giswil (2013)', 'Fhe 4/6 915 nello stato originale', 'De 110 021 trasformata a Interlaken Ost (2013)']
});
uebZug('zb-hge44i', {
  typ: 'Locomotiva a cremagliera della linea del Brünig del 1954 (storica)',
  text: ['Dal 1954 le due HGe 4/4 I 1991 e 1992 furono le potenti locomotive a cremagliera del Brünig. Per la loro forza di trazione il personale le chiamava «Muni» (toro).', 'La 1991 è stata demolita, la 1992 è conservata.'],
  kennzahlen: [['2', 'locomotive (1991, 1992)'], ['1954', 'in servizio'], ['50 km/h', 'velocità massima'], ['1992', 'conservata']],
  daten: { 'Bauart': 'locomotiva elettrica a cremagliera e aderenza', 'Betreiber': 'linea del Brünig delle FFS' },
  specNote: 'Secondo Wikipedia e la Zentralbahn. Se la 1992 sia oggi in esercizio è indicato in modo contraddittorio: la pagina della flotta la dice in esercizio, la pagina nostalgia no.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM, BBC e MFO costruirono le due locomotive nel 1954 per la linea del Brünig delle FFS.'] },
      { titel: 'Impiego e tecnica', p: ['Le locomotive lavoravano soprattutto sul tratto di montagna tra Giswil e Meiringen. Con 50 km/h erano troppo lente per le linee di valle. La potente trazione si guastava spesso, per cui le locomotive restavano a lungo in officina.', 'La 1991 fu ritirata nel 1994 dopo un guasto al motore e poi demolita. La 1992 è stata conservata e rimessa in esercizio nel 2014 dalla Brünig-Nostalgie-Bahn.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Trazione a cremagliera e aderenza', 'Conservata: 1992'] }
    ],
  bilder: ['HGe 4/4 I 1992 (prima del 1968)', 'HGe 4/4 I sul Brünig']
});
uebZug('zb-lse-diesel', {
  typ: 'Locomotiva diesel e trattori da manovra della LSE (storici)',
  text: ['La Gm 4/4 111 «Jumbo» era una locomotiva diesel-idraulica proveniente dalla Finlandia, in servizio alla LSE dal 1974. Piccoli trattori da manovra RACO completavano il parco.', 'Dove si trovino oggi questi veicoli non è documentato per tutti.'],
  kennzahlen: [['368 kW', 'potenza del Jumbo'], ['36 t', 'peso del Jumbo'], ['1955', 'costruzione (Jumbo)'], ['1974', 'alla LSE']],
  daten: { 'Bauart': 'locomotiva diesel-idraulica e trattori diesel', 'Hersteller': 'Jung (Jumbo), RACO (trattori)', 'Länge': '11,23 m (Jumbo)', 'Gewicht': '36 t (Jumbo)', 'Leistung': '368 kW (Jumbo)', 'Höchstgeschwindigkeit': '40 km/h (Jumbo)' },
  specNote: 'Valori storici secondo l’archivio del Verein Engelbergbahn. L’attuale ubicazione del gruppo non viene affermata.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Jung costruì il Jumbo nel 1955 per un’azienda industriale in Finlandia; la LSE lo impiegò dal 1974. I trattori venivano da RACO: il Tm 102 del 1961 (ex StEB 51), il Tm 103 del 1967 e un Tm 101 costruito come trattore FFS a scartamento normale e trasformato per la LSE.'] },
      { titel: 'Impiego e tecnica', p: ['Il Jumbo trainava treni cantiere e di servizio, i trattori manovravano a Stansstad e nelle stazioni. Il Jumbo è una locomotiva puramente diesel, anche se un titolo dell’archivio lascia supporre altro.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Jumbo: diesel-idraulica, 11,23 m, 36 t, 368 kW, 40 km/h', 'Tm 102: 5,07 m, 10 t, 81 kW, 45 km/h', 'Tm 103: 5,90 m, 16 t, 110 kW, 50 km/h'] }
    ]
});
uebZug('zb-traktoren', {
  name: 'Te I e Tm', beiname: 'piccoli trattori',
  typ: 'Piccoli trattori da manovra della linea del Brünig e della LSE (storici)',
  text: ['Tra i veicoli storici ci sono piccoli trattori: il Te I 198 elettrico della linea del Brünig del 1941 e i trattori diesel Tm 100 e Tm II OKK 5.', 'Manovravano carri nelle stazioni e nelle officine.'],
  kennzahlen: [['1941', 'Te I 198'], ['1931', 'Tm 100'], ['13 t', 'peso del Te I'], ['33 kW', 'potenza del Tm 100']],
  daten: { 'Bauart': 'trattore da manovra elettrico e trattori diesel', 'Hersteller': 'SLM e MFO (Te I), RACO (Tm)', 'Betreiber': 'linea del Brünig delle FFS, LSE', 'Fahrzeugnummern': 'Te I 198; Tm 100 (prima 491, 591, LSE 59 e 101); Tm II OKK 5', 'Erhalten': 'Te I 198, Tm 100 (accantonato), Tm II OKK 5' },
  specNote: 'Secondo le schede del Verein Engelbergbahn. Secondo l’archivio il gemello Te I 199 è stato demolito nel 2018. L’attuale disponibilità al servizio non è stata riconfermata.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM e MFO costruirono nel 1941 i trattori da manovra elettrici Te I 198 e 199 per la linea del Brünig. Il Tm 100 fu costruito nel 1931 da RACO e ha un motore diesel da una trasformazione del 1968. RACO costruì il Tm II OKK 5 nel 1953; proviene da un parco militare.'] },
      { titel: 'Impiego e tecnica', p: ['Il Te I manovrava sotto la linea di contatto, i Tm anche su binari senza corrente. Il Tm 100 ha portato in successione i numeri 491, 591, LSE 59 e 101; un Tm 101 più recente è un altro veicolo.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Te I 198: circa 5,8 m, 13 t', 'Tm 100: circa 4,4 m, 6 t, 33 kW, 28 km/h', 'Tm II OKK 5: veicolo di supporto del servizio museale'] }
    ],
  bilder: ['Te I 199, gemello del 198 conservato']
});
uebZug('zb-g34', {
  typ: 'Locomotiva a vapore della linea del Brünig del 1913 (storica)',
  text: ['La G 3/4 208 è una locomotiva a vapore della linea del Brünig senza ruota dentata. SLM la costruì nel 1913 per le linee di valle.', 'Oggi appartiene alla Brünig-Dampfbahn (BDB) e circola in treni storici.'],
  kennzahlen: [['1913', 'costruzione'], ['SLM', 'costruttore'], ['3', 'assi motori'], ['BDB', 'proprietaria']],
  daten: { 'Bauart': 'locomotiva a vapore senza cremagliera', 'Betreiber': 'linea del Brünig delle FFS; oggi Brünig-Dampfbahn', 'Erhalten': 'Brünig-Dampfbahn (BDB)' },
  specNote: 'Secondo la Brünig-Dampfbahn e la Zentralbahn. La G 3/4 non ha ruota dentata; non sale quindi con le proprie forze sulle rampe del Brünig.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM costruì la locomotiva nel 1913 per la linea del Brünig delle FFS. Ha tre assi accoppiati e un asse portante.'] },
      { titel: 'Impiego e tecnica', p: ['La G 3/4 trainava treni sui tratti pianeggianti, per esempio tra Lucerna e Giswil o tra Meiringen e Interlaken. Oggi appartiene alla Brünig-Dampfbahn, in passato Ballenberg Dampfbahn, e circola in treni storici dopo autorizzazione.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Nessuna ruota dentata, solo per linee di valle', 'Proprietà della Brünig-Dampfbahn, non della Zentralbahn', 'Circola con carrozze storiche'] }
    ],
  bilder: ['G 3/4 208 a Brienz (2007)', 'G 3/4 208 della linea del Brünig']
});
uebZug('zb-hg33', {
  beiname: '1067 e 1068',
  typ: 'Locomotiva a vapore a cremagliera della linea del Brünig (storica)',
  text: ['Dal 1905 le HG 3/3 trainavano i treni attraverso il Brünig – con ruote in valle e ruota dentata in montagna. Tra quelle conservate ci sono le 1067 e 1068 della Brünig-Dampfbahn.', 'La 1068 è stata ricostruita dopo un incendio del deposito e circola di nuovo dal 2022.'],
  kennzahlen: [['18', 'locomotive (1051–1068)'], ['1905', 'prime locomotive'], ['40 km/h', 'velocità massima (valle)'], ['13 km/h', 'su cremagliera']],
  daten: { 'Bauart': 'locomotiva a vapore a cremagliera e aderenza', 'Betreiber': 'linea del Brünig delle FFS; oggi Brünig-Dampfbahn', 'Höchstgeschwindigkeit': '40 km/h (aderenza), 13 km/h su cremagliera', 'Erhalten': '1067 e 1068 (Brünig-Dampfbahn), 1063 (Museo Svizzero dei Trasporti, Lucerna)' },
  specNote: 'Secondo Wikipedia (SBB HG 3/3) e la Brünig-Dampfbahn. Le 1051–1067 furono costruite nel 1905–1910, la 1068 nel 1926 come replica.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Dal 1905 SLM costruì le locomotive 1051–1067; la 1068 seguì nel 1926 come replica. Quattro cilindri azionano separatamente le ruote e la ruota dentata.', 'Sostituirono le più deboli HG 2/2. Con l’elettrificazione del 1941 divennero superflue; le ultime (1065, 1067, 1068) furono ritirate nel 1965.'] },
      { titel: 'Impiego e tecnica', p: ['La 1067 circola dal 1972 con la Ballenberg Dampfbahn, oggi Brünig-Dampfbahn. La 1068 fu prima un monumento a Meiringen, arrivò alla ferrovia a vapore nel 2000 e fu gravemente danneggiata da un incendio del deposito nel 2013. Dopo la ricostruzione circola di nuovo dal 2022; nel 2026 ha compiuto 100 anni.', 'La 1063 si trova dal 1957 al Museo Svizzero dei Trasporti di Lucerna, sezionata come oggetto espositivo.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Trazione a quattro cilindri per ruote e ruota dentata', 'Può scendere con la caldaia in avanti', 'Corse secondo il programma e l’autorizzazione della Brünig-Dampfbahn'] }
    ],
  bilder: ['HG 3/3 1067 (2013)', 'HG 3/3 1068 a Meiringen (1991)', 'HG 3/3 1063 sezionata al Museo Svizzero dei Trasporti di Lucerna (2007)']
});
uebZug('zb-mib-akku', {
  beiname: 'automotrici ad accumulatori',
  typ: 'Automotrici ad accumulatori della ferrovia Meiringen–Innertkirchen (storiche)',
  text: ['Prima dell’elettrificazione del 1977, sulla linea Meiringen–Innertkirchen circolavano automotrici ad accumulatori. Ricavavano l’energia da batterie invece che da una linea di contatto.', 'La vettura 5 è conservata, la numero 4 si trova al Museo Svizzero dei Trasporti di Lucerna.'],
  kennzahlen: [['1926', 'ferrovia industriale aperta'], ['1946', 'servizio viaggiatori'], ['1939', 'n. 4 costruita'], ['1977', 'linea di contatto']],
  daten: { 'Bauart': 'automotrice ad accumulatori', 'Betreiber': 'Kraftwerke Oberhasli (KWO), MIB', 'Stromsystem': 'accumulatori (batteria)', 'Fahrzeugnummern': 'CFa 2/2 4 e 5; la 5 oggi anche BDa 125 005', 'Erhalten': '5 (veicolo storico della MIB), 4 (Museo Svizzero dei Trasporti, Lucerna)' },
  specNote: 'Secondo la Zentralbahn e il catalogo del Museo Svizzero dei Trasporti. Le fonti non indicano un anno di costruzione comune e sicuro per le due automotrici; solo la numero 4 è datata 1939.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le Kraftwerke Oberhasli costruirono la linea negli anni 1920 come ferrovia industriale per la costruzione delle centrali; dal 1946 poté trasportare anche viaggiatori. Si viaggiava prima a vapore, poi con automotrici ad accumulatori.'] },
      { titel: 'Impiego e tecnica', p: ['Le automotrici ad accumulatori trasportavano materiale e poi anche viaggiatori tra Meiringen e Innertkirchen. Nel 1977 la linea fu elettrificata a 1200 V corrente continua; in seguito circolarono automotrici con pantografo.', 'La vettura 5 è oggi registrata come veicolo storico della MIB (BDa 125 005).'] },
      { titel: 'Dotazione e accessibilità', liste: ['Trazione a batteria senza linea di contatto', 'Compartimento viaggiatori', 'Conservate: n. 5 e n. 4 (museo)'] }
    ],
  bilder: ['Automotrice ad accumulatori CFa 2/2 5 a Innertkirchen (2021)', 'Automotrice ad accumulatori 5 (verso il 1976)']
});
uebZug('zb-hist-wagen', {
  name: 'Carrozze storiche', beiname: 'Brünig e LSE',
  typ: 'Carrozze viaggiatori e ristorante storiche (storiche)',
  text: ['Per le corse speciali sono conservate numerose vecchie carrozze della linea del Brünig: carrozze in legno degli anni 1920, carrozze in acciaio leggero come la carrozza Landi del 1939 e carrozze ristorante.', 'Appartengono in parte a FFS Historic, in parte ad associazioni, e non fanno parte del normale parco carrozze della Zentralbahn.'],
  kennzahlen: [['1925', 'carrozza più vecchia (A 260)'], ['1939', 'carrozza Landi A 101'], ['80 km/h', 'velocità massima'], ['WR 426', 'carrozza ristorante']],
  daten: { 'Bauart': 'carrozze viaggiatori e ristorante storiche', 'Hersteller': 'SIG e altri', 'Betreiber': 'FFS Historic, zb Historic e associazioni', 'Höchstgeschwindigkeit': 'per lo più 80 km/h' },
  specNote: 'Secondo le schede del Verein Engelbergbahn. Una scheda museale non conferma né l’ubicazione attuale né una revisione valida.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Prima della riforma delle classi, C indicava la 3a classe; le lettere attuali non dicono quindi sempre come fosse allestita una carrozza in passato.'],
        tabelle: { kopf: ['Carrozza', 'Costruzione', 'Lunghezza', 'Posti', 'Particolarità'], zeilen: [
          ['A 260', '1925 (SIG)', '13,61 m', '36', '1a classe, restauro previsto'], ['B 761, B 762', '1927, 1928 (SIG)', '14,48 m', '60', 'sedili in legno, prima C 4805 e C 4808'],
          ['BC 451, BC 452', '1927 (SIG)', '14,48 m', '56', 'poi carrozze di servizio X 9985 e X 9988'], ['A 101', '1939', '16,47 m', '28', 'carrozza Landi per l’Esposizione nazionale'],
          ['AB 473', '1946', '16,47 m', '64', 'FFS Historic, carrozza in acciaio leggero'], ['A 111, A 181', '1947, 1949', '16,74 m', '34', '1a classe'],
          ['B 865', '1954', '16,74 m', '64', '2a classe'], ['WR 426', '1945, trasformata nel 1997', '16,74 m', '28', 'carrozza ristorante'], ['WR 825', '1931/32', '–', '–', 'poi cucina per squadre, danneggiata']] } },
      { titel: 'Impiego e tecnica', p: ['Le carrozze circolano in treni storici, spesso dietro la Deh 4/6 o locomotive a vapore della Brünig-Dampfbahn. La presenza di un freno a cremagliera dipende dalla singola carrozza e decide dove può circolare.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Sedili in legno nelle vecchie carrozze B', 'Cucina e sala da pranzo nella WR 426', 'Pianale alto, non senza gradini', 'Nessuna trazione propria'] }
    ],
  bilder: ['Deh 4/6 914 con le carrozze B 865, WR 426 e AB 473 a Meiringen (2013)', 'Carrozza ristorante WR 426 (2013)']
});
uebZug('zb-lse-gueterwagen', {
  name: 'Carri merci e di servizio', beiname: 'LSE e Brünig',
  typ: 'Carri merci, per sci e di servizio storici (storici)',
  text: ['Le ferrovie del Brünig e di Engelberg trasportavano un tempo anche merci. Sono conservati tra l’altro carri coperti della LSE che servirono poi come carri per sci e biciclette.', 'A questi si aggiungono carri di servizio come un carro attrezzi e un carro gru.'],
  kennzahlen: [['4', 'Hb-v 261–264'], ['1969', 'costruzione (Hb-v)'], ['16 t', 'portata'], ['8,5 t', 'tara']],
  daten: { 'Bauart': 'carri merci, per sci e di servizio', 'Betreiber': 'LSE, linea del Brünig', 'Fahrzeugnummern': 'Hb-v 261–264; Haik-v 271, 272; Ua 9857; X 9742; carro gru', 'Gewicht': '8,5 t a vuoto (Hb-v)' },
  specNote: 'Secondo l’archivio del Verein Engelbergbahn. Si tratta di un registro documentato di tipi, non di un elenco completo dei carri; non prova alcun traffico merci attuale della Zentralbahn.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SWS costruì nel 1969 i quattro carri coperti Hb-v 261–264 per la linea del Brünig; la LSE li rilevò. I carri a pareti scorrevoli Haik-v 271 e 272 derivano da bagagliai postali. A questi si aggiunge un vecchio carrello trasportatore Ua 9857.'] },
      { titel: 'Impiego e tecnica', p: ['Gli Hb-v 261 e 262 furono allestiti come carri per sci e biciclette, gli altri servivano da magazzino. Il carro attrezzi X 9742 si occupa oggi dei veicoli storici. Per il vecchio carro gru l’archivio indica due numeri (X 9762 e X 9962).', 'La C 827 del 1933 servì poi come carro per materiale e cavi e fu demolita.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Carri coperti con porte scorrevoli', 'Carri per sci e biciclette (261, 262)', 'Carro attrezzi e carro gru per il servizio', 'Nessuna trazione propria'] }
    ]
});

/* carte «Dove circola?» */
uebEinsatz({
  'zb-adler': 'Soprattutto come Luzern–Interlaken Express attraverso il Brünig. Lo scartamento metrico è tratteggiato e semplificato.',
  'zb-fink': 'Sulla S-Bahn di Lucerna, tra Meiringen e Interlaken Ost, come rinforzo degli ADLER e sulla diramazione per Engelberg. Lo scartamento metrico è tratteggiato e semplificato.',
  'zb-fink-neu': 'Previsto da dicembre 2026 sul RE44 Lucerna–Engelberg; più tardi anche su altre linee. Lo scartamento metrico è tratteggiato e semplificato.',
  'zb-spatz': 'Sulla S-Bahn di Lucerna, per esempio verso Giswil e Stans, e tra Meiringen e Interlaken Ost. Senza ruota dentata non attraverso il Brünig. Lo scartamento metrico è tratteggiato e semplificato.',
  'zb-hge44ii': 'Oggi soprattutto nel Luzern–Engelberg Express e in treni supplementari; fino al 2012 in testa a tutti i treni espressi attraverso il Brünig. Lo scartamento metrico è tratteggiato e semplificato.',
  'zb-bdeh140': 'Un tempo su tutta la linea Lucerna–Engelberg; la 140 007 si trova al Museo Svizzero dei Trasporti di Lucerna. Lo scartamento metrico è tratteggiato e semplificato.',
  'zb-mib': 'Sulla linea Meiringen–Innertkirchen, lunga poco meno di 5 km, a 1200 V corrente continua. Lo scartamento metrico è tratteggiato e semplificato.',
  'zb-wagen': 'Nel Luzern–Engelberg Express e nei treni stagionali dietro una HGe 4/4 II. Lo scartamento metrico è tratteggiato e semplificato.',
  'zb-hgm104': 'Con treni cantiere e nel servizio invernale su tutta la rete, anche sulle cremagliere. Lo scartamento metrico è tratteggiato e semplificato.',
  'zb-gm105': 'Con treni cantiere sulle linee senza cremagliera, anche alla MIB. Lo scartamento metrico è tratteggiato e semplificato.',
  'zb-deh46': 'Dal 1941 su tutta la linea del Brünig; oggi conservate come veicoli storici. Lo scartamento metrico è tratteggiato e semplificato.',
  'zb-hge44i': 'Soprattutto sul tratto di montagna tra Giswil e Meiringen. Lo scartamento metrico è tratteggiato e semplificato.',
  'zb-lse-diesel': 'Un tempo alla LSE, per esempio a Stansstad e nelle stazioni verso Engelberg. Lo scartamento metrico è tratteggiato e semplificato.',
  'zb-traktoren': 'Un tempo in manovra nelle stazioni e officine della linea del Brünig e della LSE.',
  'zb-g34': 'Un tempo sui tratti pianeggianti della linea del Brünig; oggi alla Brünig-Dampfbahn. Lo scartamento metrico è tratteggiato e semplificato.',
  'zb-hg33': 'Un tempo attraverso il Brünig; oggi alla Brünig-Dampfbahn, la 1063 al Museo Svizzero dei Trasporti di Lucerna. Lo scartamento metrico è tratteggiato e semplificato.',
  'zb-mib-akku': 'Un tempo tra Meiringen e Innertkirchen; la numero 4 si trova al Museo Svizzero dei Trasporti di Lucerna. Lo scartamento metrico è tratteggiato e semplificato.',
  'zb-hist-wagen': 'In treni storici sulla linea del Brünig. Lo scartamento metrico è tratteggiato e semplificato.',
  'zb-lse-gueterwagen': 'Un tempo nel traffico merci e di servizio sul Brünig e verso Engelberg. Lo scartamento metrico è tratteggiato e semplificato.'
});
