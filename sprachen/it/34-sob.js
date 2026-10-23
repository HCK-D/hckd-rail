/* Italiano – SOB (Südostbahn) */
uebDict({
  'Schweizerische Südostbahn': 'Ferrovia del Sud-Est svizzera',
  'Klassiker von SBB, BLS, RhB, SOB, zb, TPF, MOB und transN, die heute nicht mehr im Alltag fahren. Viele sind bei SBB Historic, der BLS-Stiftung, GFM Historique, RVT-Historique, historic RhB, in Vereinen oder in Museen erhalten.': 'Classici di FFS, BLS, Ferrovia retica, SOB, zb, TPF, MOB e transN che oggi non circolano più nel servizio quotidiano. Molti sono conservati da FFS Historic, dalla Fondazione BLS, da GFM Historique, da RVT-Historique, da historic RhB, da associazioni o nei musei.',
  'Fahrzeugfamilie': 'Famiglia di veicoli', 'Wagenarten': 'Tipi di carrozze', 'Herkunft': 'Origine', 'Frühere Nummern': 'Numeri precedenti', 'Frühere Bezeichnungen': 'Designazioni precedenti',
  'Umbau': 'Trasformazione', 'Antrieb': 'Trazione', 'Wiederbeschaffungswert': 'Valore di sostituzione', 'Einsatz': 'Impiego', 'Ausmusterung': 'Ritiro', 'Baujahre': 'Anni di costruzione',
  'Achsfolge': 'Rodiggio', 'SOB': 'SOB', 'SOB Infrastruktur': 'SOB Infrastruttura', 'SOB (historisch)': 'SOB (storico)',
  'BT, ab 2001 SOB (historisch)': 'BT, dal 2001 SOB (storico)', 'SOB und BT (historisch)': 'SOB e BT (storico)', 'BT (historisch)': 'BT (storico)',
  'BT, später SOB (historisch)': 'BT, poi SOB (storico)', 'BT und SOB': 'BT e SOB', 'BT und SOB (historisch)': 'BT e SOB (storico)',
  'Wädenswil–Einsiedeln-Bahn und SOB (historisch)': 'Ferrovia Wädenswil–Einsiedeln e SOB (storico)',
  'kein eigener Antrieb': 'senza trazione propria', 'Elektrolokomotive Bo’Bo’': 'locomotiva elettrica Bo’Bo’', 'Diesellokomotive': 'locomotiva diesel'
});

uebZug('sob-traverso', {
  typ: 'Stadler FLIRT 3 a otto casse per Voralpen-Express, Treno Gottardo e Aare Linth',
  text: ['Il Traverso color rame è il treno più noto della Südostbahn. Il convoglio a pianale ribassato a otto casse circola sulle lunghe linee della SOB, come il Voralpen-Express San Gallo–Lucerna e il Treno Gottardo sulla linea di valico del Gottardo.', 'Un’unità numerata 101/201 è un solo treno a otto casse, non due treni.'],
  kennzahlen: [['30', 'treni in quattro serie'], ['160 km/h', 'velocità massima'], ['380', 'posti a sedere, strapuntini inclusi'], ['2019', 'entrata in servizio']],
  daten: { 'Bauart': 'elettrotreno a pianale ribassato, 8 casse', 'Länge': '150,2 m', 'Gewicht': '265 t a vuoto', 'Sitzplätze': '68 in 1a, 291 in 2a classe, 21 strapuntini', 'Anzahl': '30 treni' },
  specNote: 'Quattro serie: 6 treni (2019), 11 (2020), 7 (2021) e 6 (dal 2024). Con l’ultimo treno la flotta era completa a maggio 2025.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler Bussnang ha costruito per la SOB 30 Traverso a otto casse. Sono arrivati in quattro serie: 6 treni nel 2019 (101–106), 11 nel 2020 (107–117), 7 nel 2021 (118–124) e 6 dal 2024 (125–130).', 'Il Traverso appartiene alla piattaforma FLIRT 3, come i FLIRT 3 a quattro casse della SOB. A maggio 2025 l’intera nuova flotta di 43 treni era consegnata.'] },
      { titel: 'Impiego e tecnica', p: ['Dal 2019 i primi Traverso hanno sostituito i treni Revvivo trainati del Voralpen-Express San Gallo–Rapperswil–Arth-Goldau–Lucerna. Da dicembre 2020 circolano come Treno Gottardo da Basilea e Zurigo sulla linea di valico del Gottardo fino a Locarno, da dicembre 2021 come Aare Linth Berna–Zurigo–Coira e da dicembre 2024 come Alpenrhein-Express San Gallo–Coira.', 'Un treno è lungo 150,2 m, pesa 265 t, ha 5200 kW e viaggia fino a 160 km/h. La flotta è mantenuta soprattutto a Herisau.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Accessi a pianale ribassato con pedane scorrevoli', 'WC accessibile in sedia a rotelle', 'Climatizzazione', 'Informazione ai passeggeri acustica e visiva', 'Prese di corrente', 'Posti per biciclette', '380 posti: 68 in 1a, 291 in 2a classe e 21 strapuntini'],
        p: ['Grazie al pianale ribassato e alle pedane scorrevoli si sale senza gradino sulla maggior parte dei marciapiedi.'] }
    ],
  bilder: ['Traverso 105 a Kreuzlingen (2019)', 'Traverso 121 a Göschenen (2023)', 'Traverso come IR 46 Locarno–Zurigo presso Wassen (2025)']
});
uebZug('sob-flirt3', {
  typ: 'Stadler FLIRT 3 a quattro casse, color argento',
  text: ['Il FLIRT 3 argentato è il fratello minore del Traverso. Circola da solo su linee S-Bahn e regionali o rinforza un Traverso.', 'Tutti i 13 treni portano nomi di montagne, dal «Bachtel» al «Vilan».'],
  kennzahlen: [['13', 'treni (001–013)'], ['160 km/h', 'velocità massima'], ['205', 'posti a sedere, strapuntini inclusi'], ['2019', 'entrata in servizio']],
  daten: { 'Bauart': 'elettrotreno a pianale ribassato, 4 casse', 'Länge': '77,10 m', 'Gewicht': '135 t a vuoto', 'Sitzplätze': '22 in 1a, 175 in 2a classe, 8 strapuntini', 'Anzahl': '13 treni' },
  specNote: 'Messa in servizio: 5 treni nel 2019, 5 nel 2021 e 3 nel 2025.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha consegnato alla SOB 13 FLIRT 3 a quattro casse numerati 001–013: 5 treni nel 2019, 5 nel 2021 e 3 nel 2025. Con il 13° treno l’intera nuova flotta era consegnata a maggio 2025.'] },
      { titel: 'Impiego e tecnica', p: ['I FLIRT 3 circolano nel traffico S-Bahn e regionale della SOB e rinforzano i Traverso sui turni adatti. La linea di un treno cambia con l’orario e il turno.', 'Un treno è lungo 77,10 m, pesa 135 t, ha 2600 kW e viaggia fino a 160 km/h. I treni sono mantenuti a Herisau e Samstagern.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Accessi a pianale ribassato con pedane scorrevoli', 'WC accessibile in sedia a rotelle', 'Climatizzazione', 'Informazione ai passeggeri acustica e visiva', 'Prese di corrente', 'Posti per biciclette', '205 posti: 22 in 1a, 175 in 2a classe e 8 strapuntini'] },
      { titel: 'I nomi', tabelle: { kopf: ['Numero', 'Nome', 'Numero', 'Nome'], zeilen: [
        ['001', 'Bachtel', '008', 'Vrenelisgärtli'], ['002', 'Calanda', '009', 'Sissacherflue'], ['003', 'Bristen', '010', 'Tödi'], ['004', 'Gurten', '011', 'Hirzli'],
        ['005', 'Pilatus', '012', 'Kuegrat'], ['006', 'Gitschen', '013', 'Vilan'], ['007', 'Pizzo di Claro', '', '']] } }
    ],
  bilder: ['FLIRT 3 001 «Bachtel» a Biberbrugg (2020)', 'FLIRT 3 002 «Calanda» (2021)']
});
uebZug('sob-flirt-1', {
  typ: 'Stadler FLIRT a quattro casse della prima generazione',
  text: ['Con gli undici FLIRT del 2007 è iniziata alla SOB l’epoca dei treni moderni a pianale ribassato. Hanno sostituito vecchi treni navetta.', 'Ogni treno porta il nome di una montagna della regione, per esempio «Mythen» o «Churfirsten».'],
  kennzahlen: [['11', 'treni (041–051)'], ['160 km/h', 'velocità massima'], ['214', 'posti a sedere, strapuntini inclusi'], ['2007', 'entrata in servizio']],
  daten: { 'Bauart': 'elettrotreno a pianale ribassato, 4 casse', 'Länge': '74,08 m', 'Gewicht': '120 t a vuoto', 'Sitzplätze': '24 in 1a, 152 in 2a classe, 38 strapuntini', 'Anzahl': '11 treni' },
  specNote: 'La SOB indica i dati tecnici delle serie 1 e 2 insieme.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha consegnato gli undici treni della prima serie nel 2007. Con i dodici treni della serie 2 del 2013 la SOB possiede 23 FLIRT di prima generazione. Entrambi i gruppi si chiamano RABe 526, come i più recenti FLIRT 3, ma differiscono per anno di costruzione ed esecuzione.', 'Negli anni 2020 i treni vengono revisionati; la SOB rinnova tra l’altro l’informazione ai passeggeri.'] },
      { titel: 'Impiego e tecnica', p: ['I FLIRT circolano nel traffico regionale e S-Bahn della SOB nella Svizzera orientale e centrale. La linea esatta cambia con l’orario, i lavori e i turni.', 'Un treno è lungo 74,08 m, pesa 120 t, ha 2600 kW e viaggia fino a 160 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Accessi a pianale ribassato', 'WC accessibile in sedia a rotelle', 'Climatizzazione', 'Informazione ai passeggeri', 'Posti per biciclette', 'Prese di corrente solo in 1a classe', '214 posti: 24 in 1a, 152 in 2a classe e 38 strapuntini'] },
      { titel: 'I nomi', tabelle: { kopf: ['Numero', 'Nome', 'Numero', 'Nome'], zeilen: [
        ['041', 'Mythen', '047', 'Rossberg'], ['042', 'Chrüzberg', '048', 'Kronberg'], ['043', 'Churfirsten', '049', 'Hochstuckli'], ['044', 'Morgartenberg', '050', 'Alvier'],
        ['045', 'Federispitz', '051', 'Zimmerberg'], ['046', 'Ringelspitz', '', '']] } }
    ],
  bilder: ['RABe 526 050 «Alvier» a Buchs SG (2023)', 'RABe 526 049 «Hochstuckli» come S4 (2021)', 'RABe 526 041 «Mythen» a Wattwil (2010)']
});
uebZug('sob-flirt-2', {
  typ: 'Stadler FLIRT a quattro casse, seconda serie del 2013',
  text: ['Con dodici FLIRT in più la moderna flotta regionale della SOB è salita a 23 treni nel 2013. Tecnicamente corrispondono alla prima serie.', 'Anch’essi portano nomi di montagne, dallo «Schnabelsberg» all’«Alpstein».'],
  kennzahlen: [['12', 'treni (052–063)'], ['160 km/h', 'velocità massima'], ['214', 'posti a sedere, strapuntini inclusi'], ['2013', 'entrata in servizio']],
  daten: { 'Bauart': 'elettrotreno a pianale ribassato, 4 casse', 'Länge': '74,08 m', 'Gewicht': '120 t a vuoto', 'Sitzplätze': '24 in 1a, 152 in 2a classe, 38 strapuntini', 'Anzahl': '12 treni' },
  specNote: 'La SOB indica i dati tecnici delle serie 1 e 2 insieme.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha consegnato i dodici treni della seconda serie nel 2013. Si basano sullo stesso concetto a quattro casse della serie 1 del 2007; la SOB descrive le due serie insieme.'] },
      { titel: 'Impiego e tecnica', p: ['I FLIRT circolano nel traffico regionale e S-Bahn della SOB nella Svizzera orientale e centrale. La linea esatta cambia con l’orario, i lavori e i turni.', 'Un treno è lungo 74,08 m, pesa 120 t, ha 2600 kW e viaggia fino a 160 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Accessi a pianale ribassato', 'WC accessibile in sedia a rotelle', 'Climatizzazione', 'Informazione ai passeggeri', 'Posti per biciclette', 'Prese di corrente solo in 1a classe', '214 posti: 24 in 1a, 152 in 2a classe e 38 strapuntini'] },
      { titel: 'I nomi', tabelle: { kopf: ['Numero', 'Nome', 'Numero', 'Nome'], zeilen: [
        ['052', 'Schnabelsberg', '058', 'Speer'], ['053', 'Etzel', '059', 'St. Anton'], ['054', 'Hoher Kasten', '060', 'Hundwiler Höhi'], ['055', 'Mürtschenstock', '061', 'Rigi Kulm'],
        ['056', 'Pizol', '062', 'Chapfenberg'], ['057', 'Gonzen', '063', 'Alpstein']] } }
    ],
  bilder: ['RABe 526 056 «Pizol» a Uznach (2023)', 'RABe 526 063 «Alpstein» a Unterterzen (2014)']
});
uebZug('sob-tm-234', {
  typ: 'Veicolo di lavoro e d’intervento di SOB Infrastruttura',
  text: ['I quattro Robel sono veicoli di lavoro semoventi. Portano materiale ai cantieri, aiutano nei lavori su binario, linea di contatto e segnali e d’inverno sgomberano la neve.', 'Tutti e quattro portano il nome di ponti e viadotti della SOB, per esempio «Sitterviadukt».'],
  kennzahlen: [['4', 'veicoli (501–504)'], ['100 km/h', 'velocità massima'], ['720 kW', 'potenza'], ['2015', 'entrata in servizio']],
  daten: { 'Bauart': 'veicolo di lavoro e d’intervento semovente', 'Länge': '15,140 m (serie 1), 15,138 m (serie 2)', 'Gewicht': '38,1 t (serie 1), 39,1 t (serie 2)' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La SOB possiede quattro veicoli Robel: la serie 1 con i numeri 501–503 è arrivata nel 2015, la serie 2 con il 504 nel 2019.'],
        tabelle: { kopf: ['Numero', 'Nome', 'Serie', 'Anno'], zeilen: [['501', 'Sitterviadukt', '1', '2015'], ['502', 'Kapftobelbrücke II', '1', '2015'], ['503', 'Thurviadukt I', '1', '2015'], ['504', 'Kirchtobelviadukt II', '2', '2019']] } },
      { titel: 'Impiego e tecnica', p: ['I Robel lavorano soprattutto sulla rete SOB. La SOB li impiega anche per altre ferrovie, per esempio per lavori di segnalamento delle FFS all’aeroporto di Zurigo e per lavori alla linea di contatto dell’Uetliberg. D’inverno sgomberano la neve con spazzaneve e spazzola.', 'Un veicolo ha fino a 720 kW e viaggia fino a 100 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Superficie di carico per il materiale', 'Equipaggiamento secondo l’incarico, per esempio una gru', 'D’inverno con spazzaneve e spazzola'],
        p: ['I Robel sono veicoli di servizio. Non trasportano passeggeri.'] }
    ],
  bilder: ['Robel 501 «Sitterviadukt» a Schachen (2016)']
});
uebZug('sob-dienstwagen', {
  name: 'Carri di servizio',
  typ: 'Carri per la manutenzione della rete SOB',
  text: ['La SOB possiede 26 carri di servizio per la manutenzione della sua rete. Con essi si portano rotaie, componenti e materiale ai cantieri.', 'Non sono carri merci per clienti: la SOB non gestisce un proprio traffico merci.'],
  kennzahlen: [['26', 'carri di servizio (2024)'], ['3,2 mio CHF', 'valore di sostituzione'], ['manutenzione', 'impiego'], ['SOB', 'infrastruttura']],
  daten: { 'Bauart': 'carri di servizio di vari tipi', 'Anzahl': '26 (rapporto sullo stato della rete 2024)', 'Wiederbeschaffungswert': '3,2 milioni di franchi (2024)', 'Einsatz': 'manutenzione e cantieri' },
  specNote: 'La SOB non pubblica un elenco dei singoli carri con tipo e numero. Per questo qui non sono indicati numeri.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Il rapporto 2024 della SOB sullo stato della rete conta 26 carri di servizio con un valore di sostituzione di 3,2 milioni di franchi. A questi si aggiungono i quattro Robel come veicoli motori.', 'Il rapporto non specifica quali tipi di carri e numeri ne fanno parte.'] },
      { titel: 'Impiego e tecnica', p: ['I carri servono alla manutenzione degli impianti e al rifornimento dei cantieri, per esempio per trasportare rotaie, componenti e materiale. Di solito circolano insieme ai Robel.'] },
      { titel: 'Dotazione e accessibilità', p: ['A seconda del carro ci sono superfici di carico o altre sovrastrutture per il materiale. Sono carri di lavoro senza compartimento passeggeri.'] }
    ]
});
uebZug('sob-rbde-561', {
  typ: 'Nuovo treno navetta (NPZ) a due casse della vecchia SOB (storico)',
  text: ['I quattro NPZ Süd hanno circolato 30 anni per la SOB, da ultimo come «March-Shuttle» S27 tra Siebnen-Wangen e Ziegelbrücke. La SOB li ha ritirati dal servizio a ottobre 2025.', 'Ogni treno ha percorso circa tre milioni di chilometri.'],
  kennzahlen: [['4', 'treni (081–084)'], ['140 km/h', 'velocità massima'], ['120', 'posti a sedere'], ['1995–2025', 'in servizio']],
  daten: { 'Bauart': 'treno navetta con automotrice RBDe e carrozza pilota ABt', 'Fahrzeugnummern': 'RBDe 561 081–084 con ABt 181–184; riserva RBDe 561 174', 'Länge': 'circa 50 m', 'Gewicht': 'circa 116 t (automotrice 70 t)', 'Sitzplätze': '24 in 1a, 96 in 2a classe', 'Anzahl': '4 treni', 'Ausmusterung': 'ottobre 2025' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La vecchia Südostbahn ordinò nel 1993 quattro NPZ di tipo FFS; entrarono in servizio nel 1995. Un treno è formato da un’automotrice RBDe e da una carrozza pilota ABt. In seguito le automotrici furono rinumerate da RBDe 566 a RBDe 561.', 'Nel 2014 la SOB acquistò dalle FFS la RBDe 561 174 come riserva. Nell’autunno 2024 è passata all’associazione MThB-NPZ. La RBDe 561 082 con l’ABt 182 è stata rilevata a fine 2025 da un’associazione di conservazione.'] },
      { titel: 'Impiego e tecnica', p: ['All’inizio gli NPZ Süd circolavano su linee regionali come Wädenswil–Einsiedeln, Rapperswil–Samstagern e Biberbrugg–Arth-Goldau, poi anche nel Voralpen-Express. In seguito hanno coperto la S27 Siebnen-Wangen–Ziegelbrücke fino al ritiro a ottobre 2025.', 'Un treno è lungo circa 50 m, pesa circa 116 t, ha 1650 kW e viaggia fino a 140 km/h. L’automotrice da sola pesa 70 t.'] },
      { titel: 'Dotazione e accessibilità', liste: ['120 posti: 24 in 1a e 96 in 2a classe', 'Porte pneumatiche', 'Nessuna climatizzazione', 'Nessun accesso a pianale ribassato'],
        p: ['Poiché i treni hanno gradini e la legge sui disabili richiede l’accesso senza gradini, una trasformazione sarebbe stata troppo cara. È stato un motivo importante della fine.'] }
    ],
  bilder: ['RBDe 561 083 con il Voralpen-Express a Rapperswil (2013)', 'NPZ Süd a Ziegelbrücke (2022)', 'Interno della RBDe 561 082 (2013)']
});
uebZug('sob-abt-npz-sued', {
  typ: 'Carrozza pilota degli NPZ Süd (storico)',
  text: ['Le carrozze pilota ABt 181–184 formavano gli NPZ Süd con le automotrici RBDe 561. Dalla cabina della carrozza pilota si guida il treno senza spostare l’automotrice.', 'Hanno circolato dal 1995 a ottobre 2025.'],
  kennzahlen: [['4', 'carrozze pilota (181–184)'], ['140 km/h', 'nel treno NPZ'], ['1995', 'costruzione'], ['2025', 'fine del servizio']],
  daten: { 'Bauart': 'carrozza pilota con cabina e compartimento passeggeri', 'Höchstgeschwindigkeit': '140 km/h nel treno NPZ', 'Ausmusterung': 'ottobre 2025' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La SOB ricevette le quattro carrozze pilota nel 1995 insieme alle quattro automotrici degli NPZ Süd. Prima portavano i numeri 901–904.', 'L’ABt 182 è stata rilevata a fine 2025 da un’associazione di conservazione insieme alla RBDe 561 082.'] },
      { titel: 'Impiego e tecnica', p: ['La carrozza pilota forma un’estremità del treno navetta. Tramite una linea di comando il macchinista comanda da qui l’automotrice all’altra estremità del treno. La carrozza non ha trazione propria.', 'Le carrozze circolavano sulle stesse linee degli NPZ Süd, da ultimo sulla S27 Siebnen-Wangen–Ziegelbrücke.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Posti in 1a e 2a classe', 'Cabina di guida a un’estremità', 'Porte pneumatiche', 'Nessun accesso a pianale ribassato, nessuna climatizzazione'] }
    ],
  bilder: ['NPZ Süd con automotrice e carrozza pilota ABt a Ziegelbrücke (2022)']
});
uebZug('sob-rbde-566', {
  typ: 'NPZ per ferrovie private della Bodensee-Toggenburg (storico)',
  text: ['I sei NPZ Ost provenivano dalla ferrovia Bodensee-Toggenburg (BT). Con la fusione tra BT e vecchia SOB nel 2001 sono passati alla nuova Südostbahn.', 'Hanno circolato nel traffico regionale della Svizzera orientale fino al 2019/2020.'],
  kennzahlen: [['6', 'automotrici (071–076)'], ['1981–1983', 'costruzione'], ['2001', 'alla nuova SOB'], ['2019/20', 'fine del servizio']],
  daten: { 'Bauart': 'treno navetta con automotrice, carrozza intermedia e carrozza pilota', 'Anzahl': '6 automotrici' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['All’inizio degli anni 1980 la BT acquistò sei NPZ per ferrovie private con le automotrici RBDe 4/4 71–76, carrozze intermedie B e carrozze pilota ABt 171–176. Furono costruiti da FFA, SIG e BBC.', 'All’inizio i treni portavano i colori verde e crema della BT, poi rosso e grigio. Con la fusione del 2001 passarono alla SOB come RBDe 566 071–076.'] },
      { titel: 'Impiego e tecnica', p: ['I treni effettuavano il traffico regionale sulla vecchia rete BT tra Romanshorn, San Gallo, Herisau, Wattwil e Nesslau. Più tardi carrozze di questi treni circolarono anche nel Voralpen-Express.', 'Con i nuovi FLIRT sono diventati superflui; il servizio regolare è terminato nel 2019/2020. Alcuni veicoli sono andati a progetti di conservazione o sono serviti come donatori di pezzi.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Lunghezza del treno adattabile con carrozze intermedie', 'Posti in 1a e 2a classe', 'Compartimento bagagli nell’automotrice (lettera D)', 'Accessi rialzati con gradini'] }
    ],
  bilder: ['RBDe 566 072 con logo BT a Herisau (2003)', 'RBDe 566 072, B 374 e ABt 172 a Herisau (2003)']
});
uebZug('sob-abt-npz-ost', {
  typ: 'Carrozza pilota dei treni navetta BT (storico)',
  text: ['Le carrozze pilota ABt 171–176 appartenevano ai sei NPZ Ost della ferrovia Bodensee-Toggenburg. Formavano un’estremità del treno navetta.', 'Il loro servizio è terminato con gli NPZ Ost nel 2019/2020.'],
  kennzahlen: [['6', 'carrozze pilota (171–176)'], ['1982', 'costruzione'], ['senza', 'trazione propria'], ['2019/20', 'fine del servizio']],
  daten: { 'Bauart': 'carrozza pilota con cabina e compartimento passeggeri' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La BT acquistò le sei carrozze pilota nel 1982 insieme ai suoi NPZ. Nel 2001 passarono alla SOB con la fusione. Alcune carrozze sono poi andate ad altri come donatori di pezzi o per la conservazione.'] },
      { titel: 'Impiego e tecnica', p: ['Tramite la linea di comando il macchinista comanda dalla carrozza pilota l’automotrice all’altra estremità del treno. Così il treno può cambiare direzione senza manovre.', 'Le carrozze circolavano nel traffico regionale sulla vecchia rete BT nella Svizzera orientale.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Posti in 1a e 2a classe', 'Cabina di guida a un’estremità', 'Accessi rialzati con gradini'] }
    ],
  bilder: ['ABt 172 con logo SOB e B 374 a Herisau (2003)']
});
uebZug('sob-revvivo', {
  name: 'Revvivo', beiname: 'carrozze',
  typ: 'Carrozze modernizzate del Voralpen-Express (storico)',
  text: ['Revvivo era il nome delle carrozze rinnovate del vecchio Voralpen-Express. Una locomotiva le trainava tra San Gallo e Lucerna sulla linea della SOB.', 'Dal 2019 il Traverso ha sostituito questi treni trainati.'],
  kennzahlen: [['3', 'tipi: A, B, BR'], ['1997–2000', 'trasformazione'], ['senza', 'trazione propria'], ['2019/20', 'sostituite']],
  daten: { 'Bauart': 'carrozze viaggiatori modernizzate', 'Wagenarten': 'A (1a classe), B (2a classe), BR (bistrò)', 'Fahrzeugnummern': 'tra l’altro A 520–522, B 800–805 e 808–809, BR 771' },
  specNote: 'I numeri A 711–718, B 721–734 e BR 741–747 indicati nel dossier non hanno potuto essere confermati. I numeri qui seguono Wikipedia.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Revvivo non era una nuova carrozza ma un programma di trasformazione: dal 1997 al 2000 la SOB rinnovò carrozze più vecchie di varia provenienza. C’erano carrozze di 1a classe (A), di 2a classe (B) e carrozze bistrò (BR).', 'Dopo la fine nel Voralpen-Express, alcune carrozze sono andate tra l’altro al Train des mouettes in Francia e a MÁV Nosztalgia in Ungheria.'] },
      { titel: 'Impiego e tecnica', p: ['Le carrozze circolavano nel Voralpen-Express San Gallo–Rapperswil–Arth-Goldau–Lucerna. Erano trainate da Re 446 e Re 456, più tardi anche tra due automotrici NPZ.', 'Con il Traverso questi treni sono terminati nel 2019 e 2020.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Interni rinnovati', 'In parte climatizzate', 'Carrozza bistrò BR', 'Accessi rialzati con gradini'] }
    ],
  bilder: ['Voralpen-Express con carrozze Revvivo tra Biberbrugg e Altmatt (2014)', 'Carrozze Revvivo tra due automotrici NPZ a Biberbrugg (2013)']
});
uebZug('sob-ew-iv', {
  typ: 'Carrozze unificate IV climatizzate del Voralpen-Express (storico)',
  text: ['All’inizio degli anni 1990 il Voralpen-Express ricevette una nuova immagine, anche con carrozze unificate IV (EW IV) climatizzate di proprietà della SOB.', 'Nel 2000 la SOB vendette le quattro carrozze alle FFS.'],
  kennzahlen: [['4', 'carrozze'], ['1991', 'consegna'], ['senza', 'trazione propria'], ['2000', 'alle FFS']],
  daten: { 'Bauart': 'carrozza unificata IV, carrozza viaggiatori', 'Anzahl': '4 carrozze', 'Verbleib': 'vendute alle FFS nel 2000' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La SOB possedeva una carrozza di 1a classe (A 120) e tre di 2a classe (B 250–252). Furono consegnate nel 1991 e vendute alle FFS nel 2000.', 'Non tutte le EW IV del Voralpen-Express appartenevano alla SOB; solo queste quattro carrozze contano come materiale SOB.'] },
      { titel: 'Impiego e tecnica', p: ['Le carrozze circolavano nel Voralpen-Express tra Lucerna e il lago di Costanza, trainate da una locomotiva. Più tardi vennero le carrozze Revvivo e infine il Traverso.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Climatizzazione', 'Carrozze di 1a e 2a classe', 'Accessi rialzati con gradini'] }
    ]
});
uebZug('sob-ew-i-ii', {
  beiname: 'SOB e BT',
  typ: 'Vecchie carrozze unificate in servizio presso SOB e BT (storico)',
  text: ['Prima dell’arrivo dei moderni elettrotreni, SOB e BT hanno circolato a lungo con carrozze unificate I e II. Queste carrozze erano diffuse in tutta la Svizzera.', 'Oggi la SOB non effettua più servizi regolari con queste carrozze.'],
  kennzahlen: [['EW I + II', 'famiglie di carrozze'], ['senza', 'trazione propria'], ['1435 mm', 'scartamento normale'], ['SOB + BT', 'ferrovie']],
  daten: { 'Bauart': 'carrozze delle famiglie EW I ed EW II', 'Einsatz': 'treni viaggiatori trainati' },
  specNote: 'Le singole carrozze e i numeri non sono documentati completamente. EW I ed EW II sono due tipi diversi; i valori variano da carrozza a carrozza.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['EW I ed EW II sono due famiglie di carrozze unificate svizzere. SOB e BT ne possedevano, in parte trasformate o con compiti particolari, per esempio come carrozze pilota.', 'Un elenco completo delle carrozze SOB e BT non è stato pubblicato.'] },
      { titel: 'Impiego e tecnica', p: ['Le carrozze circolavano nel traffico regionale e diretto e agli inizi del Voralpen-Express, trainate da locomotive o automotrici. Spesso nello stesso treno viaggiavano tipi diversi di carrozze.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Carrozze di 1a e 2a classe secondo il tipo', 'Accessi rialzati con gradini'], p: ['Dotazione e dimensioni variano secondo il tipo e la trasformazione.'] }
    ],
  bilder: ['Carrozza SOB B 50 85 20-35 753-6 a Rapperswil (2014)']
});
uebZug('sob-bde-576', {
  typ: 'Automotrici ad alte prestazioni di SOB e BT (storico)',
  text: ['Dal 1959 le potenti BDe 4/4 hanno trainato i treni navetta e diretti di SOB e BT sulle ripide linee prealpine. Oltre al compartimento passeggeri avevano un compartimento bagagli.', 'Dal 2007 i FLIRT le hanno sostituite gradualmente.'],
  kennzahlen: [['1959', 'prima automotrice'], ['SOB 80–87', 'numeri vecchia SOB'], ['BT 50–53', 'numeri BT'], ['dal 2007', 'sostituite']],
  daten: { 'Bauart': 'automotrice elettrica con 2a classe e compartimento bagagli', 'Fahrzeugnummern': 'SOB 80–87, BT 50–53; poi BDe 576 048–059', 'Baujahre': '1959–1979, diverse serie' },
  specNote: 'Le serie differiscono per frontale e tecnica. Non esiste quindi un valore di potenza comune.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La prima automotrice fu l’ABe 4/4 71 della SOB del 1959; nel 1979 fu trasformata in BDe 4/4 80. La SOB aggiunse le BDe 4/4 81–87 e la BT le BDe 4/4 50–53. In seguito ricevettero i numeri BDe 576 048–059.', 'Alcune automotrici sono state conservate o sono passate ad altri proprietari. La SOB ha tenuto la BDe 576 058 come riserva tecnica a Samstagern.'] },
      { titel: 'Impiego e tecnica', p: ['Le BDe 4/4 erano costruite per treni pesanti sulle ripide linee della «Direkte Linie». Circolavano nel traffico regionale, nel predecessore del Voralpen-Express e come rinforzo sulle tratte ripide.', 'Dal 2007 i FLIRT e poi i Traverso le hanno sostituite nel servizio quotidiano.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Compartimento passeggeri di 2a classe', 'Compartimento bagagli', 'Accessi rialzati con gradini'] }
    ],
  bilder: ['BDe 576 049 a Biberbrugg (2007)', 'BDe 4/4 53 della BT presso Sattel (1983)', 'BDe 576 052 «Krummenau» della BT a Nesslau (1998)', 'ABe 4/4 71 allo stato di consegna nel 1959, poi BDe 4/4 80']
});
uebZug('sob-abe-4-4', {
  typ: 'Automotrici elettriche della vecchia SOB del 1939/40 (storico)',
  text: ['Con l’elettrificazione la vecchia SOB acquistò nel 1939 e 1940 otto automotrici elettriche: le BCFZe 4/4 1–4 e le CFZe 4/4 11–14. Dopo le trasformazioni molte si chiamarono ABe 4/4.', 'L’automotrice 5 è conservata ancora oggi.'],
  kennzahlen: [['8', 'automotrici'], ['1939/40', 'consegna'], ['80 km/h', 'velocità massima'], ['735 kW', 'potenza oraria']],
  daten: { 'Bauart': 'automotrice elettrica Bo’Bo’', 'Frühere Bezeichnung': 'BCFZe 4/4 1–4 e CFZe 4/4 11–14', 'Hersteller': 'SLM con SIG o SWS; MFO, BBC, SAAS', 'Länge': '19,6 m', 'Gewicht': '44 t, 47 t dopo la modernizzazione', 'Leistung': '735 kW (potenza oraria)', 'Sitzplätze': '9 (poi 6) in 1a, 44 in 2a classe' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Per l’elettrificazione SLM, SIG o SWS e MFO, BBC e SAAS consegnarono nel 1939 e 1940 otto automotrici in due versioni: BCFZe 4/4 1–4 e CFZe 4/4 11–14. Le lettere derivano dal vecchio sistema di classi, bagagli e posta.', 'Il 26 luglio 1946 la 3 e la 12 si scontrarono presso Bennau. La 12 fu poi trasformata in BCe 4/4 5; come automotrice 5 è conservata dal 2008 dall’associazione Historischer Triebwagen 5. La 11 e la 13 passarono alla Sensetalbahn. Le 1, 2, 4 e 6 (ex 14) furono modernizzate dal 1978 al 1982 e circolarono poi come ABe 4/4 14, 13, 11 e 12. L’ABe 4/4 11 serve dal 2001 come cinema in galleria.'] },
      { titel: 'Impiego e tecnica', p: ['Le automotrici effettuavano treni viaggiatori e misti sulle linee elettrificate della vecchia SOB.', 'Sono lunghe 19,6 m, hanno 735 kW e viaggiano fino a 80 km/h. All’origine pesavano 44 t, dopo la modernizzazione 47 t.'] },
      { titel: 'Dotazione e accessibilità', liste: ['All’origine 9 posti in 1a e 44 in 2a classe, dopo la modernizzazione 6 in 1a classe', 'All’origine con compartimento bagagli e posta', 'Accessi rialzati con gradini'] }
    ],
  bilder: ['ABe 4/4 5 con un treno viaggiatori a Biberbrugg (1988)', 'ABe 4/4 12 a Biberbrugg (1992)', 'Ex ABe 4/4 11 come cinema in galleria a Gänsbrunnen (2017)']
});
uebZug('sob-de-4-4', {
  beiname: '21 e 22',
  typ: 'Automotrici bagagliaio con un passato FFS (storico)',
  text: ['La vecchia SOB impiegò due automotrici bagagliaio elettriche, le De 4/4 21 e 22. Provenivano dalle FFS, dove erano RFe 4/4.', 'La 21 passò a Classic Rail nel 1994, la 22 fu demolita nel 1997.'],
  kennzahlen: [['2', 'automotrici'], ['1940', 'costruzione originale'], ['90 km/h', 'velocità massima'], ['ex FFS', 'RFe 4/4']],
  daten: { 'Bauart': 'automotrice bagagliaio elettrica', 'Herkunft': 'FFS RFe 4/4 603 e 602', 'Fahrzeugnummern': 'De 4/4 21 e 22', 'In Betrieb seit': '1940 (alle FFS)' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le automotrici furono costruite nel 1940 come RFe 4/4 delle FFS. La SOB ne rilevò due: l’ex 603 come De 4/4 21 e la 602 come De 4/4 22.', 'La 21 passò a Classic Rail nel 1994, la 22 fu demolita nel 1997.'] },
      { titel: 'Impiego e tecnica', p: ['Le De 4/4 trasportavano bagagli e trainavano altre carrozze nel servizio della SOB. Avevano quattro assi motori e viaggiavano fino a 90 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Grande compartimento bagagli', 'Nessun compartimento passeggeri'], p: ['Come automotrici bagagliaio non trasportavano passeggeri.'] }
    ],
  bilder: ['De 4/4 22 a Einsiedeln (1985)', 'De 4/4 22 in livrea rossa a Samstagern (1983)']
});
uebZug('bt-be-4-4', {
  typ: 'Locomotiva elettrica della ferrovia Bodensee-Toggenburg (storico)',
  text: ['Dal 1931 le sei Be 4/4 della ferrovia Bodensee-Toggenburg trainarono treni viaggiatori e merci, anche sulla «Direkte Linie» via Wattwil e Rapperswil.', 'La Be 4/4 11 è conservata come locomotiva storica.'],
  kennzahlen: [['6', 'locomotive (11–16)'], ['80 km/h', 'velocità massima'], ['66 t', 'peso'], ['1931', 'entrata in servizio']],
  daten: { 'Hersteller': 'SLM (parte meccanica), SAAS (parte elettrica)', 'Länge': '12,00 m', 'Leistung': 'circa 1200 kW (potenza oraria)' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La BT acquistò sei locomotive nel 1931 e 1932. SLM costruì la parte meccanica, SAAS l’equipaggiamento elettrico.', 'Alcune locomotive conobbero ancora la fusione nella nuova SOB del 2001. L’ex Be 416 011 è stata venduta nel 2015.'] },
      { titel: 'Impiego e tecnica', p: ['Le Be 4/4 trainarono a lungo treni viaggiatori sulla «Direkte Linie» e treni merci. Con le nuove automotrici e le Re 456 persero i compiti principali e rimasero per riserva e corse speciali.', 'La locomotiva è lunga 12,00 m, pesa 66 t e viaggia fino a 80 km/h. Concepita per le pendenze, in seguito era troppo lenta per i treni veloci.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Quattro assi con trazione individuale', 'Due cabine di guida', 'Nessun compartimento passeggeri'] }
    ],
  bilder: ['Be 4/4 11 con il treno espositivo «75 anni BT» a San Gallo St. Fiden (1985)', 'Be 4/4 11 storica e Te 216 035 a Herisau (2012)']
});
uebZug('bt-be-3-4', {
  typ: 'Automotrice storica BT 43 della ferrovia Bodensee-Toggenburg',
  text: ['Il «Tino» è l’automotrice 43 della ferrovia Bodensee-Toggenburg. Fu trasformata più volte e per questo ebbe diverse designazioni.', 'Nel 2001 la SOB la cedette a Eurovapor.'],
  kennzahlen: [['1', 'automotrice (BT 43)'], ['1938', 'costruzione'], ['1982', 'trasformazione'], ['2001', 'a Eurovapor']],
  daten: { 'Bauart': 'automotrice elettrica', 'Verbleib': 'a Eurovapor nel 2001' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['L’automotrice fu costruita nel 1938 come BCFe 2/4. Le trasformazioni cambiarono il numero di assi motori; divenne prima BCFe 3/4 e poi Be 3/4. Nel 1982 fu trasformata.', 'Nel 2001 la SOB cedette il «Tino» a Eurovapor.'] },
      { titel: 'Impiego e tecnica', p: ['L’automotrice effettuava treni regionali sulla rete BT e più tardi corse storiche, per esempio come «Amor-Express» presso Wattwil. È una delle poche automotrici a scartamento normale a quattro assi con solo tre assi motori.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Compartimento passeggeri', 'Accessi rialzati con gradini'], p: ['Altri valori tecnici non sono documentati con certezza senza una scheda della trasformazione.'] }
    ],
  bilder: ['BT 43 come «Amor-Express» presso Wattwil (2010)', 'BT 43 a San Gallo (2013)']
});
uebZug('sob-re-446', {
  typ: 'Locomotiva elettrica del Voralpen-Express (storico)',
  text: ['Le quattro Re 446 erano in origine prototipi delle FFS, le Re 4/4 IV 10101–10104. Alla SOB divennero le note locomotive del Voralpen-Express.', 'Nel 2019 la SOB le vendette tutte e quattro alla Eisenbahndienstleister GmbH (EDG).'],
  kennzahlen: [['4', 'locomotive'], ['160 km/h', 'velocità massima'], ['4960 kW', 'potenza'], ['1982', 'costruzione']],
  daten: { 'Fahrzeugnummern': '445–448, dal 2001 Re 446 015–018', 'Länge': '15,8 m', 'Leistung': 'circa 4960 kW', 'In Betrieb seit': '1982 (alle FFS)', 'Verbleib': 'vendute a EDG nel 2019' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Nel 1982 SLM e BBC costruirono quattro prototipi Re 4/4 IV per le FFS. Dal 1994 al 1996 passarono alla vecchia SOB, in cambio delle sue quattro Re 4/4 III.', 'Alla SOB portarono dapprima i numeri 445–448, dopo la fusione del 2001 Re 446 015–018. Con i Traverso divennero superflue e nel 2019 passarono a EDG.'] },
      { titel: 'Impiego e tecnica', p: ['Le Re 446 trainavano il Voralpen-Express tra Lucerna e San Gallo, con diverse carrozze e carrozze pilota.', 'La locomotiva è lunga 15,8 m, pesa 80 t, ha circa 4960 kW e viaggia fino a 160 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Nessun compartimento passeggeri'], p: ['Come locomotiva la Re 446 non aveva compartimento passeggeri; l’accessibilità dipendeva dalle carrozze trainate.'] }
    ],
  bilder: ['Re 446 017 e 015 con il Voralpen-Express presso Küssnacht (2015)', 'Re 446 017 con il Voralpen-Express a San Gallo (2017)', 'Re 446 con il Voralpen-Express alla galleria del Ricken (2016)']
});
uebZug('sob-re-456', {
  typ: 'Locomotiva elettrica di BT e SOB (storico)',
  text: ['Le sei Re 456 arrivarono nel 1987 alla ferrovia Bodensee-Toggenburg come locomotive moderne. Più tardi, alla SOB, hanno segnato l’immagine del Voralpen-Express.', 'Nel 2021 la SOB ha venduto le sue ultime sei Re 456.'],
  kennzahlen: [['6', 'locomotive proprie'], ['130 km/h', 'velocità massima'], ['3200 kW', 'potenza continua'], ['1987', 'entrata in servizio']],
  daten: { 'Bauart': 'locomotiva elettrica Bo’Bo’ con convertitori', 'Länge': '16,6 m', 'Gewicht': 'circa 68 t', 'Leistung': '3200 kW (potenza continua)', 'Verbleib': 'vendute nel 2021' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM e BBC costruirono le sei locomotive nel 1987 per la BT come Re 4/4 91–96. Nel 2001 tutte e sei passarono alla nuova SOB come Re 456 091–096. Dal 2002 al 2011 la SOB noleggiò in più le Re 456 142 e 143, che non le appartenevano.', 'Nel 2021 la SOB vendette le sue sei locomotive: 091 e 092 alla SZU, 094 e 095 a conservatori di veicoli storici, 093 e 096 a un investitore.'],
        tabelle: { kopf: ['Numero', 'Nome', 'Destinazione 2021'], zeilen: [['091', 'Voralpen-Express', 'SZU'], ['092', 'Siemens', 'SZU'], ['093', 'Sersa', 'investitore'], ['094', 'Vögele Shoes', 'storico'], ['095', '100 Jahre Romanshorn-Uznach', 'storico'], ['096', 'Voralpen-Express', 'investitore']] } },
      { titel: 'Impiego e tecnica', p: ['Le Re 456 trainavano treni viaggiatori e il Voralpen-Express, prima con diverse carrozze, poi con le carrozze Revvivo. Il grande sforzo di trazione e la moderna tecnica a convertitori aiutavano sulle ripide linee di BT e SOB.', 'La locomotiva è lunga 16,6 m, pesa circa 68 t, ha 3200 kW di potenza continua e viaggia fino a 130 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Nessun compartimento passeggeri'], p: ['Come locomotiva la Re 456 non aveva compartimento passeggeri; l’accessibilità dipendeva dalle carrozze trainate.'] }
    ],
  bilder: ['Due Re 456 con il Voralpen-Express sul viadotto del Weissenbach presso Degersheim (2014)', 'Re 456 096 con il Voralpen-Express a Herisau (2019)', 'Re 456 con la livrea «100 anni Rickenbahn» tra Immensee e Arth-Goldau (2010)', 'Re 456 con il Voralpen-Express tra Blumenau e Schmerikon (2007)']
});
uebZug('sob-re-4-4-iii', {
  typ: 'Locomotiva elettrica per le ripide rampe della vecchia SOB (storico)',
  text: ['La vecchia SOB aveva bisogno di molto sforzo di trazione per le sue linee ripide. Nel 1966 fu costruita per lei la Re 4/4 III 41; più tardi ne arrivarono altre tre dalle FFS.', 'Dal 1994 al 1996 la SOB scambiò le quattro locomotive con le quattro Re 4/4 IV delle FFS.'],
  kennzahlen: [['4', 'locomotive (41–44)'], ['125 km/h', 'velocità massima'], ['circa 80 t', 'peso'], ['1994–96', 'alle FFS']],
  daten: { 'Fahrzeugnummern': '41–44 (42–44 ex FFS 11351–11353)', 'Gewicht': 'circa 80 t', 'In Betrieb seit': '1966 (n. 41)', 'Verbleib': 'scambiate con le FFS 1994–1996' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La Re 4/4 III 41 fu costruita appositamente per la SOB nel 1966 e differisce un po’ dalla serie FFS. Le 42–44 furono costruite nel 1970 come FFS 11351–11353 e arrivarono usate alla SOB dal 1983 al 1985.', 'Dal 1994 al 1996 la SOB scambiò le quattro locomotive con i quattro prototipi Re 4/4 IV delle FFS, le future Re 446. Tornate alle FFS, le locomotive entrarono nella serie Re 430.'] },
      { titel: 'Impiego e tecnica', p: ['Le locomotive trainavano treni viaggiatori e merci sulle tratte ripide della vecchia SOB. Rispetto alla Re 4/4 II, la Re 4/4 III è concepita per lo sforzo di trazione e quindi più lenta: viaggia fino a 125 km/h e pesa circa 80 t.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Nessun compartimento passeggeri'], p: ['Come locomotiva la Re 4/4 III non aveva compartimento passeggeri; l’accessibilità dipendeva dalle carrozze trainate.'] }
    ]
});
uebZug('sob-ae-476', {
  typ: 'Locomotiva elettrica di origine tedesca (storico)',
  text: ['Negli anni 1990 la vecchia SOB acquistò cinque locomotive elettriche usate della serie tedesca 142, ex E 42 della Reichsbahn. Alla SOB si chiamavano Ae 476.', 'Tutte tranne una furono cedute già nel 1996.'],
  kennzahlen: [['5', 'locomotive (465–469)'], ['1965–1976', 'costruzione'], ['1996', 'quattro vendute'], ['2008', 'ultima venduta']],
  daten: { 'Fahrzeugnummern': '465–469; la 468 poi 476 012', 'In Betrieb seit': 'costruite 1965–1976', 'Verbleib': '1996 alla LAG, la 468 nel 2008 alla WAB' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le locomotive furono costruite dal 1965 al 1976 per la Deutsche Reichsbahn e in seguito si chiamarono DB 142. La vecchia SOB ne rilevò cinque e le impiegò come Ae 476 465–469.', 'Nel 1996 tutte tranne la 468 passarono alla LAG. La 468 rimase e dopo la fusione circolò come Ae 476 012; nel 2008 passò alla WAB.'] },
      { titel: 'Impiego e tecnica', p: ['Le Ae 476 diedero alla SOB sforzo di trazione supplementare. Erano costruite per il sistema elettrico tedesco e svizzero a 15 kV e 16,7 Hz e furono adattate all’esercizio in Svizzera.', 'Poiché le locomotive provengono da anni e trasformazioni diverse, non esiste una tabella di dati uniforme.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Nessun compartimento passeggeri'], p: ['Come locomotiva l’Ae 476 non aveva compartimento passeggeri; l’accessibilità dipendeva dalle carrozze trainate.'] }
    ],
  bilder: ['Ae 476 468 a Biberbrugg (1999)']
});
uebZug('sob-e-3-3', {
  typ: 'Locomotive a vapore della ferrovia Wädenswil–Einsiedeln e della vecchia SOB (storico)',
  text: ['Le E 3/3 erano le locomotive a vapore della ferrovia Wädenswil–Einsiedeln e della vecchia SOB. Rappresentano l’epoca prima dell’elettrificazione.', 'Le ultime furono ritirate entro il 1954.'],
  kennzahlen: [['11', 'locomotive'], ['1878', 'prima locomotiva'], ['C', 'tre assi accoppiati'], ['1940–1954', 'ritiro']],
  daten: { 'Bauart': 'locomotiva-tender a vapore', 'Hersteller': 'Maschinenfabrik Esslingen (1–4), SLM (5–11)' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La Maschinenfabrik Esslingen costruì le locomotive 1–4 dal 1878 al 1887 per la ferrovia Wädenswil–Einsiedeln. I numeri 5–11 furono consegnati dalla SLM nel 1891.', 'Le macchine 1–4 e 5–11 differiscono nei dettagli.'] },
      { titel: 'Impiego e tecnica', p: ['Come corte locomotive-tender trainavano treni viaggiatori e merci sulla prima rete e facevano manovre. Portavano acqua e carbone sulla locomotiva stessa.', 'L’elettrificazione le rese superflue; furono ritirate tra il 1940 e il 1954.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Tre assi accoppiati', 'Scorte d’acqua e carbone sulla locomotiva', 'Nessun compartimento passeggeri'] }
    ],
  bilder: ['E 3/3 n. 1 «Wädensweil» della ferrovia Wädenswil–Einsiedeln (1878–1890)']
});
uebZug('sob-ed-4-5', {
  beiname: '21 e 22',
  typ: 'Locomotive a vapore della vecchia SOB del 1910 (storico)',
  text: ['Nel 1910 la vecchia SOB acquistò dalla SLM due locomotive a vapore più potenti, le Ed 4/5 21 e 22.', 'Completavano le piccole E 3/3.'],
  kennzahlen: [['2', 'locomotive (21, 22)'], ['1910', 'costruzione'], ['4 su 5', 'assi motori'], ['SLM', 'costruttore']],
  daten: { 'Bauart': 'locomotiva a vapore', 'Fahrzeugnummern': '21 e 22' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La SLM costruì le due locomotive per la SOB nel 1910. Portavano i numeri 21 e 22.'] },
      { titel: 'Impiego e tecnica', p: ['Con più traffico le piccole E 3/3 non bastavano più per tutti i treni. Le Ed 4/5 trainavano treni viaggiatori e merci più pesanti sulle linee della vecchia SOB. La designazione 4/5 significa quattro assi motori su cinque.', 'Con l’elettrificazione persero il loro compito.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Cinque assi, di cui quattro motori', 'Nessun compartimento passeggeri'], p: ['Dimensioni, pesi e anni di ritiro esatti non sono documentati con certezza senza una scheda della singola macchina.'] }
    ],
  bilder: ['Ed 4/5 n. 21 della SOB']
});
uebZug('sob-am-846', {
  typ: 'Locomotiva diesel per lavori e manovre (storico)',
  text: ['Per grandi rinnovi del binario la vecchia SOB acquistò nel 1990 una potente locomotiva diesel usata. Circolò dapprima come Am 846 461, poi come 033.', 'Verso il 2010 fu ritirata e nel 2012 venduta a JÜST.'],
  kennzahlen: [['1', 'locomotiva'], ['1963', 'costruzione'], ['1990', 'alla SOB'], ['2012', 'venduta']],
  daten: { 'Fahrzeugnummern': 'Am 846 461, poi 033', 'In Betrieb seit': 'costruita nel 1963, alla SOB dal 1990', 'Verbleib': 'ritirata nel 2010, a JÜST nel 2012' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Krupp e AEG costruirono la locomotiva nel 1963. La SOB la acquistò nel 1990, la fece rimettere in sesto e la impiegò come Am 846 461; dopo la fusione si chiamò Am 846 033.', 'Verso il 2010 fu ritirata e nel 2012 venduta a JÜST. Le fonti indicano anni leggermente diversi.'] },
      { titel: 'Impiego e tecnica', p: ['L’Am 846 trainava treni cantiere, aiutava nei rinnovi del binario e faceva manovre. Come locomotiva diesel non aveva bisogno della linea di contatto, cosa importante durante lavori con la linea disinserita. Era molto più potente dei piccoli trattori da manovra.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Trazione diesel, indipendente dalla linea di contatto', 'Nessun compartimento passeggeri'] }
    ],
  bilder: ['Am 846 033 a Samstagern (2005)', 'Am 846 461 a Samstagern (1996)']
});
uebZug('sob-eea-936', {
  beiname: '031 e 032',
  typ: 'Locomotive da manovra elettriche a tre assi (storico)',
  text: ['Le due locomotive da manovra Henschel a tre assi arrivarono alla BT nel 1995 e con la fusione alla SOB. Manovravano carri in stazioni e officine.', 'La 032 fu ritirata nel 2012, la 031 nel 2015.'],
  kennzahlen: [['2', 'locomotive'], ['1966', 'costruzione'], ['3', 'assi'], ['2012/2015', 'ritiro']],
  daten: { 'Bauart': 'locomotiva da manovra elettrica', 'Frühere Bezeichnung': 'Eea 3/3 31 e 32', 'Fahrzeugnummern': 'Eea 936 031 e 032', 'In Betrieb seit': 'costruite nel 1966, alla BT dal 1995', 'Ausmusterung': '032 nel 2012, 031 nel 2015' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Henschel e AEG costruirono le due locomotive nel 1966. La BT le rilevò nel 1995 come Eea 3/3 31 e 32; dopo la fusione si chiamarono Eea 936 031 e 032.', 'La 032 fu ritirata nel 2012, la 031 nel 2015.'] },
      { titel: 'Impiego e tecnica', p: ['Le locomotive manovravano carri in stazioni, officine e impianti di servizio. Con tre assi e trazione elettrica erano adatte alle manovre dove c’è una linea di contatto.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Tre assi', 'Trazione elettrica dalla linea di contatto', 'Nessun compartimento passeggeri'] }
    ],
  bilder: ['Eea 936 031 (2008)']
});
uebZug('sob-te-216', {
  beiname: 'trattori da manovra',
  typ: 'Trattori da manovra elettrici di BT e SOB',
  text: ['Piccoli trattori da manovra elettrici spostavano carri in stazioni, officine e binari di ricovero di BT e SOB.', 'Il parco comprendeva il Te 212 080 e i Te 216 035–039.'],
  kennzahlen: [['6', 'trattori'], ['1941–1966', 'costruzione'], ['2', 'assi'], ['250 kW', 'Te 212 080']],
  daten: { 'Bauart': 'trattore da manovra elettrico a due assi', 'Fahrzeugnummern': 'Te 212 080 (ex BT Te 35), Te 216 035–039', 'In Betrieb seit': 'costruiti 1941–1966' },
  specNote: 'Se singoli trattori circolino ancora oggi non risulta dai documenti attuali della SOB.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['I trattori Te 216 035–039 furono costruiti tra il 1941 e il 1966. Il Te 212 080 entrò in servizio nel 1966 come Te 35 della BT.', 'Secondo Wikipedia il Te 212 080 fa ancora parte del parco; nel 2019 si trovava a Herisau. Se gli altri siano ancora conservati, in esercizio o venduti non è documentato con certezza.'] },
      { titel: 'Impiego e tecnica', p: ['I trattori manovravano piccoli gruppi di carri in stazioni, officine e impianti di servizio, per esempio a Herisau. Non sono costruiti per la circolazione in linea.', 'Il Te 212 080 ha al massimo 250 kW. Potenza, peso e velocità dei Te 216 sono diversi.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due assi', 'Trazione elettrica dalla linea di contatto', 'Nessun compartimento passeggeri'] }
    ],
  bilder: ['Te 212 080 a Herisau (2019)', 'Te 216 035 accanto alla Be 4/4 11 a Herisau (2012)']
});
uebZug('sob-tm-236', {
  typ: 'Trattori diesel da manovra e per lavori (storico)',
  text: ['Con i nomi Tm III e poi Tm 236, SOB e BT avevano vari piccoli trattori diesel. Non era una serie uniforme: provenivano da diversi costruttori.', 'Oggi i quattro Robel svolgono la maggior parte dei lavori di manutenzione.'],
  kennzahlen: [['1958–1992', 'costruzione'], ['diesel', 'trazione'], ['2', 'assi (per lo più)'], ['dal 2013', 'venduti']],
  daten: { 'Bauart': 'trattore diesel, per lo più a due assi', 'Hersteller': 'a seconda del veicolo RACO, Jung, Stadler, SLM e altri', 'Fahrzeugnummern': 'tra l’altro Tm 236 001–002, 004–011 e 432', 'In Betrieb seit': 'costruiti 1958–1992', 'Einsatz': 'manovre, lavori, sgombero neve' },
  specNote: 'Poiché ne fanno parte diversi costruttori e tipi, non esiste un valore comune di potenza o peso.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['I trattori provenivano da vari acquisti e rilevamenti, costruiti tra il 1958 e il 1992. Ne facevano parte i trattori BT 1 e 2, i futuri Tm 236 004–007 e un trattore Jung della Deutsche Bundesbahn che alla SOB portava il numero 34 e poi Tm 236 008.', 'Molti sono stati venduti: il 011 nel 2013, il 006 nel 2014, il 002 nel 2015 alla Sursee-Triengen-Bahn, il 004 e il 005 nel 2016.'] },
      { titel: 'Impiego e tecnica', p: ['I trattori manovravano, trainavano e spingevano carri di servizio nei lavori e sgomberavano la neve con attrezzature aggiuntive. Erano particolarmente utili su binari di raccordo e di ricovero e con la linea di contatto disinserita.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Trazione diesel, indipendente dalla linea di contatto', 'In parte con lama sgombraneve', 'Nessun compartimento passeggeri'] }
    ],
  bilder: ['Tm 236 002 con lama sgombraneve a Herisau (2012)', 'Tm 236 005 a Herisau (2009)', 'Tm 4 della BT, poi Tm 236 004, a Herisau (2002)', 'Tm 236 001 a Herisau (2012)']
});
uebZug('sob-xtmas', {
  typ: 'Veicoli di servizio polivalenti Windhoff (storico)',
  text: ['Nel 2010 la SOB acquistò due veicoli polivalenti Windhoff per lavori all’infrastruttura.', 'Già nel 2014 vendette entrambi i veicoli a KUMA.'],
  kennzahlen: [['2', 'veicoli (005, 006)'], ['2010', 'acquisto'], ['2014', 'vendita'], ['Windhoff', 'costruttore']],
  daten: { 'Bauart': 'veicolo di servizio polivalente (MPV)', 'Fahrzeugnummern': '005 e 006', 'Verbleib': 'venduti a KUMA nel 2014' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Nel 2010 la SOB acquistò due veicoli polivalenti Windhoff numerati 005 e 006. Nel 2014 entrambi passarono a KUMA. Non figurano più nell’inventario attuale della SOB.'] },
      { titel: 'Impiego e tecnica', p: ['Un veicolo polivalente (MPV) è semovente e porta, secondo l’incarico, diverse sovrastrutture per lavori su binario e linea di contatto. Oggi alla SOB questi compiti li svolgono i quattro Robel.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Trazione propria', 'Sovrastrutture secondo l’incarico', 'Nessun compartimento passeggeri'] }
    ]
});

/* carte «Dove circola?» */
uebEinsatz({
  'sob-traverso': 'Come Voralpen-Express San Gallo–Rapperswil–Arth-Goldau–Lucerna, come Treno Gottardo da Basilea e Zurigo sulla linea di valico del Gottardo fino a Locarno, come Aare Linth Berna–Zurigo–Coira e come Alpenrhein-Express San Gallo–Coira.',
  'sob-flirt3': 'Sulle linee S-Bahn e regionali della SOB, per esempio S4 Uznach–Wattwil–San Gallo–Sargans, S6 Rapperswil–Glarona–Schwanden, S13 Wädenswil–Einsiedeln e S40 Einsiedeln–Rapperswil. L’assegnazione dei treni cambia con l’orario e i turni.',
  'sob-flirt-1': 'Sulle linee S-Bahn e regionali della SOB, per esempio S4 Uznach–Wattwil–San Gallo–Sargans, S6 Rapperswil–Glarona–Schwanden, S13 Wädenswil–Einsiedeln e S40 Einsiedeln–Rapperswil. L’assegnazione dei treni cambia con l’orario e i turni.',
  'sob-flirt-2': 'Sulle linee S-Bahn e regionali della SOB, per esempio S4 Uznach–Wattwil–San Gallo–Sargans, S6 Rapperswil–Glarona–Schwanden, S13 Wädenswil–Einsiedeln e S40 Einsiedeln–Rapperswil. L’assegnazione dei treni cambia con l’orario e i turni.',
  'sob-tm-234': 'Soprattutto sulla rete SOB. Anche fuori per altre ferrovie, per esempio all’aeroporto di Zurigo e sull’Uetliberg.',
  'sob-dienstwagen': 'Per cantieri e manutenzione sulla rete SOB.',
  'sob-rbde-561': 'Un tempo su Wädenswil–Einsiedeln, Rapperswil–Samstagern e Biberbrugg–Arth-Goldau, poi nel Voralpen-Express. Da ultimo, fino a ottobre 2025, sulla S27 Siebnen-Wangen–Ziegelbrücke.',
  'sob-abt-npz-sued': 'Con gli NPZ Süd sulle linee della vecchia SOB, da ultimo fino a ottobre 2025 sulla S27 Siebnen-Wangen–Ziegelbrücke.',
  'sob-rbde-566': 'Un tempo nel traffico regionale sulla rete BT tra Romanshorn, San Gallo, Herisau, Wattwil e Nesslau.',
  'sob-abt-npz-ost': 'Un tempo con gli NPZ Ost nel traffico regionale sulla rete BT nella Svizzera orientale.',
  'sob-revvivo': 'Un tempo nel Voralpen-Express San Gallo–Rapperswil–Arth-Goldau–Lucerna.',
  'sob-ew-iv': 'Un tempo nel Voralpen-Express tra Lucerna, San Gallo e Romanshorn.',
  'sob-ew-i-ii': 'Un tempo in treni trainati sulle linee di SOB e BT.',
  'sob-bde-576': 'Un tempo nel traffico regionale e diretto di SOB e BT, anche sulla «Direkte Linie» Romanshorn–San Gallo–Rapperswil–Arth-Goldau.',
  'sob-abe-4-4': 'Un tempo sulle linee elettrificate della vecchia SOB tra Rapperswil, Arth-Goldau, Wädenswil ed Einsiedeln.',
  'sob-de-4-4': 'Un tempo nel trasporto bagagli sulle linee della vecchia SOB.',
  'bt-be-4-4': 'Un tempo in testa a treni viaggiatori e merci sulla rete BT e sulla «Direkte Linie» via Wattwil fino a Rapperswil.',
  'bt-be-3-4': 'Un tempo nel traffico regionale sulla rete BT, poi in corse storiche, per esempio presso Wattwil.',
  'sob-re-446': 'Un tempo in testa al Voralpen-Express tra Lucerna e San Gallo.',
  'sob-re-456': 'Un tempo in testa a treni viaggiatori della BT e al Voralpen-Express tra Lucerna, San Gallo e Romanshorn.',
  'sob-re-4-4-iii': 'Un tempo in testa a treni viaggiatori e merci sulle linee ripide della vecchia SOB.',
  'sob-ae-476': 'Un tempo come trazione supplementare sulle linee della vecchia SOB.',
  'sob-e-3-3': 'Un tempo sulla ferrovia Wädenswil–Einsiedeln e sulla rete della vecchia SOB.',
  'sob-ed-4-5': 'Un tempo in testa a treni più pesanti sulle linee della vecchia SOB.',
  'sob-am-846': 'Un tempo in testa a treni cantiere e in manovra sulla rete SOB, per esempio a Samstagern.',
  'sob-eea-936': 'Un tempo in manovra nelle stazioni e officine di BT e SOB.',
  'sob-te-216': 'In manovra in stazioni e officine, per esempio a Herisau.',
  'sob-tm-236': 'Un tempo in manovra e nei lavori sulla rete SOB, spesso a Herisau.',
  'sob-xtmas': 'Dal 2010 al 2014 per lavori all’infrastruttura sulla rete SOB.'
});
