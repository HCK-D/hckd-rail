/* Italiano – veicoli FFS Viaggiatori */
uebDict({ 'ja': 'sì', 'nein': 'no', 'SBB': 'FFS' });

uebZug('rabe-501', {
  typ: 'Treno elettrico ad alta velocità',
  text: ['Il Giruno è un elettrotreno multisistema a undici casse costruito da Stadler per il traffico a lunga percorrenza nazionale e internazionale.', 'Collega la Svizzera con l’Italia e la Germania ed è progettato per una velocità massima di 250 km/h.'],
  kennzahlen: [['41', 'treni nella flotta FFS'], ['405', 'posti a sedere'], ['250 km/h', 'velocità massima'], ['2019', 'primo impiego alle FFS']],
  daten: { 'Betreiber': 'FFS Viaggiatori', 'Zugbildung': '11 carrozze', 'Länge': '202,0 m fuori respingenti', 'Gewicht': '381 t a vuoto', 'Leistung': '6000 kW max. alla ruota', 'Sitzplätze': '405 (117 in 1a classe, 288 in 2a classe)', 'Restaurant': '17 posti in più', 'Anzahl': '41 treni' },
  specNote: 'Tecnica e ripartizione dei posti secondo Stadler, peso a vuoto secondo FFS Infrastruttura.',
  abschnitte: [
    { titel: 'Costruttore e composizione della flotta', p: ['Nel 2014 le FFS hanno ordinato dapprima 29 treni a Stadler. La prima serie è entrata in servizio tra il 2019 e il 2021. Con ordini successivi la flotta è salita a 41 treni.', 'Le FFS hanno annunciato la consegna dell’ultimo veicolo ordinato per dicembre 2025; la loro panoramica attuale della flotta elenca tutti i 41 treni.'] },
    { titel: 'Impiego e tecnica', p: ['Tra gli assi d’impiego figura Zurigo–Milano attraverso la galleria di base del San Gottardo. Nell’orario 2026 i Giruno circolano anche tra Basilea e Amburgo. Il costruttore indica omologazioni per Svizzera, Germania, Italia e Austria.', 'Quattro convertitori di trazione alimentano quattro carrelli motori; due treni possono circolare in doppia trazione.'] },
    { titel: 'Dotazione e accessibilità', liste: ['Wi-Fi', 'Prese elettriche', 'Zona famiglie', 'Zona silenzio', 'Zona business', 'Posti per biciclette', 'Toilette accessibili in sedia a rotelle in entrambe le classi', 'Ristorante a bordo'],
      p: ['Gli accessi sono progettati per marciapiedi alti 55 e 76 cm. Ai marciapiedi adatti le persone in sedia a rotelle possono salire da sole e raggiungere il ristorante.'] }
  ],
  bilder: ['RABe 501 «Giruno» in transito', 'Giruno di Stadler in stazione', 'Giruno a Basilea', 'Due Giruno affiancati', 'Giruno con carrozza ristorante nel capannone']
});

uebZug('rabde-500', {
  typ: 'Treno ad assetto variabile InterCity',
  text: ['L’ICN è un treno elettrico ad assetto variabile a sette casse per il traffico a lunga percorrenza svizzero. L’assetto variabile permette velocità più elevate in curva sulle linee tortuose adatte.', 'Circola soprattutto sulla linea del piede del Giura.'],
  kennzahlen: [['44', 'treni nella flotta FFS'], ['471', 'posti a sedere secondo le FFS'], ['200 km/h', 'velocità massima'], ['1999', 'primo impiego secondo le FFS']],
  daten: { 'Betreiber': 'FFS Viaggiatori', 'Zugbildung': '7 carrozze', 'Gewicht': '368 t a vuoto', 'Neigetechnik': 'inclinazione attiva della cassa', 'Anzahl': '44 treni (1a serie 24, 2a serie 20)', 'Hersteller': 'Serie 1: Adtranz e FIAT-SIG; serie 2: Bombardier/Alstom' },
  specNote: 'Valori tecnici secondo FFS Infrastruttura. La pagina delle FFS arrotonda la lunghezza a 190 m e indica 471 posti a sedere e il 1999 come primo impiego.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le FFS possiedono 44 ICN. La prima serie, numeri 000–023, è stata costruita da Adtranz e FIAT-SIG, la seconda, numeri 024–043, dal consorzio Bombardier/Alstom; la sua consegna è iniziata nel 2003.', 'Alstom ha fornito da Neuhausen tra l’altro i carrelli e la tecnica di pendolamento. Il primo ICN ha circolato nel 1999.'] },
      { titel: 'Impiego e tecnica', p: ['Gli assi principali sono Basilea–Bienne–Losanna e Romanshorn–San Gallo–Zurigo–Bienne–Ginevra sulla linea ai piedi del Giura. Altri servizi raggiungono il Ticino.', 'Grazie all’inclinazione attiva delle casse, il treno a sette carrozze percorre più velocemente le curve delle linee tortuose. Raggiunge i 200 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Ristorante', 'Zona famiglia', 'Zona silenzio e zona business in 1a classe', 'Prese elettriche, anche ai tavolini laterali', 'Finestrini con migliore ricezione mobile', 'Posti per biciclette', 'Posti per passeggini e fasciatoio', 'Posti per sedie a rotelle e WC accessibile', 'Posti prioritari'],
        p: ['L’accesso non è a pianale ribassato. Sono disponibili posti per sedie a rotelle e un WC accessibile.'] },
      { titel: 'Ammodernamento', p: ['Dal 2021 le FFS rinnovano gli ICN nell’officina di Yverdon. Il primo treno completamente ammodernato è stato presentato il 24 ottobre 2024. Oltre a sedili, illuminazione, tavolini e informazione alla clientela vengono revisionati anche componenti tecnici.', 'L’attuale pagina delle FFS indica il 2034 come anno di conclusione; l’obiettivo è di circa 20 anni di servizio in più.'] }
    ],
  bilder: ['ICN d’estate davanti alle montagne', 'ICN al sole invernale', 'RABDe 500 021 a Rotkreuz', 'ICN in viaggio', 'ICN sul ponte sull’Aar a Soletta']
});

uebZug('rabe-502', {
  typ: 'Twindexx Swiss Express, treno a due piani a lunga percorrenza',
  text: ['Il Twindexx Swiss Express è l’elettrotreno a due piani delle FFS per la lunga percorrenza. Le FFS lo chiamano FV-Dosto.', 'Tre versioni offrono capacità diverse e possono essere accoppiate secondo la domanda: l’IC200 (RABDe 502) e gli IR200 e IR100 (RABe 502).'],
  kennzahlen: [['62', 'treni nella flotta FFS'], ['200 km/h', 'velocità massima'], ['2018', 'primo impiego alle FFS'], ['3', 'versioni']],
  daten: { 'Hersteller': 'Bombardier Transportation, oggi Alstom', 'Antrieb': 'motori sincroni a magneti permanenti', 'Gewicht': '237,1–467,4 t a vuoto secondo la versione', 'Anzahl': '62 treni (23 InterCity, 39 InterRegio)', 'In Betrieb seit': '2018, flotta completamente consegnata nel 2022' },
  specNote: 'Pesi a vuoto secondo le FFS: IR100 237,1 t, IR200 463,2 t, IC200 467,4 t.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Il costruttore è Bombardier Transportation, oggi parte di Alstom. L’ordinazione iniziale di 59 treni è stata portata a 62 con un accordo del 2014: 23 treni InterCity e 39 InterRegio.', 'Il primo FV-Dosto ha circolato nel 2018 e nel 2022 la flotta era completamente consegnata. Esistono tre versioni: IC200 (RABDe 502) e IR200 e IR100 (RABe 502).'] },
      { titel: 'Impiego e tecnica', p: ['Un corridoio importante è San Gallo–Zurigo–Berna–Losanna–Ginevra. Altri servizi percorrono tra l’altro Basilea–Zurigo, Zurigo–Coira e Lucerna–Zurigo.', 'I treni raggiungono i 200 km/h e sono azionati da motori sincroni a magneti permanenti. Nelle ore di punta circolano composizioni fino a 400 m con fino a 1300 posti a sedere.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Ristorante, carrozza famiglia, zona silenzio e zona business (solo versione IC)', 'Prese elettriche', 'Finestrini con migliore ricezione mobile', 'Indicazione elettronica delle prenotazioni', 'Posti per biciclette, passeggini e bagagli', 'Accesso a pianale ribassato', 'Posti per sedie a rotelle e WC accessibile', 'Posti prioritari e fasciatoio'],
        p: ['Grazie agli accessi a pianale ribassato, le persone in sedia a rotelle salgono senza gradini ai marciapiedi adatti.'] },
      { titel: 'Dati tecnici delle tre versioni', tabelle: { kopf: ['Caratteristica', 'IC200', 'IR200', 'IR100'], zeilen: [
      ['Serie', 'RABDe 502', 'RABe 502', 'RABe 502'],
      ['Carrozze per treno', '8', '8', '4'],
      ['Lunghezza', '200,6 m', '200,6 m', '101,0 m'],
      ['Posti a sedere', '606', '682', '330'],
      ['Potenza massima', '7500 kW', '7500 kW', '3750 kW'],
      ['Peso a vuoto', '467,4 t', '463,2 t', '237,1 t'],
      ['Sforzo di trazione all’avviamento', '482,24 kN', '482,24 kN', '241,12 kN'],
      ['Ristorante', 'sì', 'no', 'no']] },
      hinweis: 'Posti e dotazione secondo le FFS, valori tecnici secondo FFS Infrastruttura. I pesi si riferiscono ai veicoli vuoti.' },
      { titel: 'Sviluppi', p: ['Le FFS hanno deciso di trasformare i carrelli dell’intera flotta. La compensazione del rollio viene eliminata e le sospensioni adattate.', 'Secondo un comunicato del dicembre 2025 la trasformazione in serie inizierà dopo l’autorizzazione d’esercizio alla fine del 2026 e durerà fino all’inizio degli anni 2030.'] }
    ],
  bilder: ['FV-Dosto a lunga percorrenza davanti alle montagne', 'RABDe 502 006 «Olten» a Zurigo HB', 'RABe 502 402 «Biel/Bienne» davanti alle montagne', 'RABe 502 214 presso Tecknau', 'RABe 502 404 sul lago']
});

uebZug('rabe-511', {
  typ: 'Elettrotreno a due piani, Regio-Dosto e IR-Dosto',
  text: ['La serie RABe 511 di Stadler (tipo KISS) comprende due versioni a due piani: 69 Regio-Dosto a sei casse e 24 IR-Dosto a quattro casse.', 'Le FFS distinguono le due versioni perché lunghezza, capacità e impiego sono diversi.'],
  kennzahlen: [['93', 'treni delle due versioni'], ['160 km/h', 'velocità massima'], ['2012', 'primo impiego'], ['Stadler', 'costruttore']],
  daten: { 'Betreiber': 'FFS Viaggiatori', 'Bauart': 'elettrotreno a due piani', 'Zugbildung': '6 carrozze (Regio-Dosto), 4 carrozze (IR-Dosto)', 'Leistung': '6000 kW (entrambe le versioni)', 'Gewicht': '210–292 t secondo la versione', 'Anzahl': '93 treni (69 Regio-Dosto, 24 IR-Dosto)', 'Einsatz': 'S-Bahn di Zurigo, RegioExpress, InterRegio' },
  specNote: 'Peso secondo le FFS: 210 t per l’IR-Dosto a quattro casse, 292 t per il Regio-Dosto a sei casse.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha fornito questi treni a due piani di tipo KISS dal 2012. Le FFS gestiscono 69 Regio-Dosto a sei carrozze e 24 IR-Dosto a quattro carrozze.', 'I 24 IR-Dosto sono nati dal 2020 al 2024 dalla trasformazione di Regio-Dosto per il traffico a lunga distanza. Le FFS rinnovano gli altri Regio-Dosto entro il 2035; in seguito porteranno tutti la livrea blu dello ZVV.'] },
      { titel: 'Impiego e tecnica', p: ['I Regio-Dosto circolano soprattutto sulle linee della S-Bahn di Zurigo e come RE Wettingen–Olten–Lucerna.', 'Gli IR-Dosto svolgono servizi interregionali nella Svizzera tedesca e romanda, tra l’altro nella regione di Zurigo, sull’Altopiano, nella Svizzera nordoccidentale e verso Coira. Entrambe le versioni viaggiano fino a 160 km/h; gli IR-Dosto possono essere accoppiati con il più recente RABe 512.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Accessi a pianale ribassato', 'Posti per sedie a rotelle e WC accessibile', 'Posti per biciclette e passeggini', 'Amplificatore del segnale mobile', 'Prese in 1a classe (IR-Dosto: quasi a ogni posto, anche in 2a classe)', 'Sedili 2+1 in 1a classe (IR-Dosto)'],
        p: ['I larghi accessi ribassati permettono di salire senza gradini ai marciapiedi adatti.'] },
      { titel: 'Le versioni a confronto', tabelle: { kopf: ['Caratteristica', 'Regio-Dosto', 'IR-Dosto'], zeilen: [
      ['Veicoli', '69', '24'],
      ['Carrozze per treno', '6', '4'],
      ['Lunghezza', '150,0 m', '100,0 m'],
      ['Posti a sedere', '535 (120 / 415)', '317'],
      ['Velocità', '160 km/h', '160 km/h'],
      ['Potenza', '6000 kW', '6000 kW'],
      ['Peso', '292 t', '210 t'],
      ['Accesso a pianale ribassato', 'sì', 'sì'],
      ['Traffico', 'S-Bahn / RE', 'IR / RE']] },
      hinweis: 'La ripartizione 120 / 415 indica i posti di 1a e 2a classe del Regio-Dosto. Per la versione IR le FFS indicano 317 posti in totale.' }
    ],
  bilder: ['Regio-Dosto come S15 della S-Bahn di Zurigo a Jona', 'RABe 511 112 a Ginevra-Cornavin', 'RABe 511 026 a Ginevra', 'RABe 511 a Sevelen', 'RABe 511 018 a Zurigo HB']
});

uebZug('rabe-514', {
  typ: 'Elettrotreno a due piani della S-Bahn di Zurigo',
  text: ['Il RABe 514 è l’elettrotreno a due piani (DTZ) di seconda generazione della S-Bahn di Zurigo. Siemens ha fornito 61 treni a quattro casse.', 'Accessi ribassati con ponte di raccordo facilitano la salita.'],
  kennzahlen: [['61', 'treni'], ['360', 'posti a sedere per treno'], ['140 km/h', 'velocità massima'], ['2006', 'primo impiego alle FFS']],
  daten: { 'Betreiber': 'FFS Viaggiatori', 'Bauart': 'elettrotreno a due piani', 'Zugbildung': '4 carrozze', 'Gewicht': '223 t a vuoto', 'Anzahl': '61 treni', 'Einsatz': 'S-Bahn di Zurigo' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Siemens ha fornito i 61 elettrotreni a due piani (DTZ) dal 2006 al 2009. Sono la seconda generazione di treni a due piani della S-Bahn di Zurigo.'] },
      { titel: 'Impiego e tecnica', p: ['I DTZ possono circolare su tutta la rete della S-Bahn di Zurigo. Un treno è lungo 100 m, offre 360 posti a sedere e viaggia fino a 140 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Accesso ribassato continuo con colmatore di gap', 'Compartimento multifunzionale con posti per biciclette e passeggini', 'Posti prioritari', 'Posti per sedie a rotelle', 'WC accessibile'],
        p: ['Grazie agli accessi ribassati con colmatore di gap, le persone in sedia a rotelle salgono senza gradini ai marciapiedi adatti.'] },
      { titel: 'Ammodernamento', p: ['Le FFS rinnovano la flotta dal 2025, presumibilmente fino al 2030 circa. Sono previsti una nuova livrea, una migliore ricezione mobile grazie a vetri adattati e lavori su illuminazione, interni e componenti tecnici.', 'Il rinnovo deve prolungare la durata d’utilizzo a 32 anni.'] }
    ],
  bilder: ['RABe 514 «DTZ» in viaggio', 'Scala verso il piano intermedio del DTZ rinnovato', 'RABe 514 054 come S8 a Zurigo Enge', 'RABe 514 015 nella nuova livrea ZVV 2023', 'DTZ come S15 sulla diga di Rapperswil']
});

uebZug('rabe-523', {
  typ: 'Elettrotreno regionale di Stadler',
  text: ['Il RABe 523 a quattro casse è stato il primo FLIRT delle FFS. È stato sviluppato per la Stadtbahn di Zugo ed è entrato in servizio commerciale nel 2004.', 'La serie appartiene alla grande famiglia FLIRT, che circola in diverse versioni.'],
  kennzahlen: [['2004', 'primo impiego'], ['98*', 'veicoli secondo le serie di numeri'], ['2656 kW', 'potenza'], ['74,08 m', 'lunghezza']],
  daten: { 'Bauart': 'elettrotreno', 'Grundtyp': '4 carrozze', 'Einstieg': 'a pianale ribassato', 'Höchstgeschwindigkeit': '160 km/h (famiglia FLIRT secondo le FFS)', 'Erste Region': 'Stadtbahn di Zugo', 'Einsatz': 'traffico regionale, S-Bahn', 'Anzahl': '98* (secondo le serie di numeri)' },
  specNote: '* Il numero 98 risulta dalle serie di numeri pubblicate 001–073, 101–114 e 501–511; non esiste un dato attuale sull’effettivo confermato separatamente dalle FFS. I 160 km/h sono indicati dalle FFS per l’intera famiglia FLIRT regionale.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Tutti i FLIRT sono di Stadler; il primo ha circolato alle FFS nel 2004. Nel traffico regionale le FFS impiegano complessivamente 209 FLIRT di diverse serie.'] },
      { titel: 'Impiego e tecnica', p: ['Secondo le FFS, i FLIRT circolano come S-Bahn tra l’altro nei cantoni Argovia, Soletta, Lucerna, Basilea, Neuchâtel, Friburgo e Vaud.', 'A seconda della versione, i treni sono lunghi da 75 a 105 m e offrono da 156 a 236 posti a sedere. Viaggiano fino a 160 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Accesso a pianale ribassato', 'Posti per sedie a rotelle e WC accessibile', 'Posti prioritari', 'Fasciatoio (solo in una parte dei treni)', 'Prese in 1a classe', 'Posti per biciclette, passeggini e bagagli'],
        p: ['Queste indicazioni valgono per la famiglia FLIRT delle FFS; i dettagli variano secondo la versione.'] },
      { titel: 'Interpretare correttamente il numero', p: ['Il numero pubblicato di 209 comprende tutti i FLIRT delle FFS impiegati nel traffico regionale, incluse altre serie e versioni.', 'Per il solo RABe 523, le serie di numeri pubblicate 001–073, 101–114 e 501–511 danno insieme 98 veicoli. Si tratta di una deduzione dai numeri e non di un dato ufficiale sull’effettivo delle FFS.'] }
    ],
  bilder: ['RABe 523 001 a Muttenz', 'RABe 523 019', 'RABe 523 024 a Montreux', 'RABe 523 018 a Yverdon-les-Bains', 'RABe 523 038']
});

uebZug('rbde-560', {
  typ: 'Treno navetta regionale',
  text: ['Il Domino è un treno navetta elettrico per il traffico regionale e S-Bahn. Unisce motrici e carrozze pilota NPZ ammodernate a una nuova carrozza intermedia a pianale ribassato INOVA.', 'La sigla RBDe 560 indica la motrice di testa e non l’intero treno.'],
  kennzahlen: [['86', 'treni FFS'], ['140 km/h', 'velocità massima'], ['75 m', 'lunghezza'], ['172', 'posti a sedere'], ['2009', 'primo impiego alle FFS']],
  daten: { 'Fahrzeugart': 'treno navetta elettrico', 'Leistung': '1700 kW sulla RBDe 560', 'Gewicht': 'circa 146 t a vuoto', 'Niederflur': 'nella carrozza intermedia', 'Anzahl': '86 treni', 'In Betrieb seit': '2009 (primo impiego alle FFS)', 'Hersteller': 'Schindler Waggon, SWA, SIG, ABB e Bombardier (secondo la carrozza)', 'Status': 'in servizio' },
  specNote: 'Dati su flotta, capacità e impiego secondo le FFS. Valori tecnici secondo FFS Infrastruttura. Il peso a vuoto è la somma delle tre carrozze.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le FFS possiedono 86 Domino. Le automotrici e le carrozze pilota provengono dalla famiglia NPZ di Schindler Waggon, SWA, SIG e ABB; Bombardier ha fornito le nuove carrozze intermedie a pianale ribassato di tipo INOVA.', 'Non esiste quindi un unico anno di costruzione per tutto il treno. Il primo Domino ha circolato alle FFS nel 2009.'] },
      { titel: 'Impiego e tecnica', p: ['Le FFS impiegano il Domino soprattutto su linee S-Bahn nei cantoni Argovia, Lucerna, Neuchâtel e Vaud. L’assegnazione esatta alle linee può cambiare con l’orario.', 'Un treno a tre carrozze è lungo 75 m, offre 172 posti a sedere e viaggia fino a 140 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Accesso senza gradini nella carrozza intermedia', 'Posti per sedie a rotelle e WC accessibile', 'Posti prioritari', 'Prese in 1a classe', 'Posti per biciclette, passeggini e bagagli', 'Migliore ricezione mobile'],
        p: ['Solo la carrozza intermedia INOVA è a pianale ribassato; automotrice e carrozza pilota hanno gradini.'] },
      { titel: 'Componenti del treno', tabelle: { kopf: ['Veicolo', 'Funzione', 'Lunghezza', 'Peso a vuoto', 'Trazione'], zeilen: [
      ['RBDe 560', 'motrice di testa', '25,0 m', '72,0 t', '1700 kW / 182 kN'],
      ['B INOVA', 'carrozza intermedia a pianale ribassato', '24,4 m', '36,0 t', 'senza trazione propria'],
      ['ABt', 'carrozza pilota di 1a e 2a classe', '25,0 m', '38,0 t', 'senza trazione propria']] } },
      { titel: 'Altri gestori', tabelle: { kopf: ['Gestore', 'Effettivo', 'Lunghezza', 'Posti a sedere', 'Particolarità'], zeilen: [
      ['TPF', '14', '75 m', '184 (24 in 1a + 160 in 2a cl.)', '1650 kW; 140 km/h; RBDe 235–247 e 269'],
      ['RegionAlps', '16', '74,5 m', '188 (12 in 1a + 176 in 2a cl.)', '100 posti in piedi; 140 km/h; St-Gingolph–Briga']] },
      hinweis: 'Effettivi e capacità secondo TPF e RegionAlps. I valori di altri gestori non possono essere trasferiti senza verifica ai treni FFS; in particolare potenza e capacità sono diverse.' },
      { titel: 'Sostituzione', p: ['Le FFS acquistano 198 FLIRT Evo per sostituire gradualmente i Domino e i FLIRT di prima generazione. L’impiego alle FFS inizia nel 2028; l’introduzione regionale è prevista fino al 2033.', 'RegionAlps ha annunciato 27 FLIRT Evo, che sostituiranno Domino e NINA entro il 2031.'] }
    ],
  bilder: ['Domino tra vigneti e paese sul lago', 'Domino nella luce autunnale', 'Due Domino in doppia trazione sopra il lago', 'Domino tra i terrazzamenti vitati', 'Domino sulla riva del lago', 'Domino in doppia trazione tra i vigneti']
});

uebZug('re-460', {
  typ: 'Locomotiva elettrica universale',
  text: ['La Re 460, spesso chiamata «Loc 2000», è una locomotiva universale a quattro assi ad alte prestazioni delle FFS per il traffico viaggiatori veloce.', 'È la spina dorsale della lunga percorrenza in Svizzera e traina tra l’altro i treni a due piani IC2000 e composizioni InterCity con carrozze unificate.'],
  kennzahlen: [['119', 'locomotive FFS'], ['200 km/h', 'in esercizio · costruita per 230 km/h'], ['18,5 m', 'lunghezza'], ['6100 kW', 'potenza continuativa'], ['1992', 'primo impiego alle FFS']],
  daten: { 'Fahrzeugart': 'locomotiva elettrica universale', 'Höchstgeschwindigkeit': '200 km/h in esercizio, costruita per 230 km/h', 'Leistung': '6100 kW continuativi', 'Gewicht': '84 t in servizio', 'In Betrieb seit': '1992 (primo impiego alle FFS)', 'Anzahl': '119 locomotive', 'Status': 'in servizio (ammodernata con il Refit)' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM e ABB hanno sviluppato la Re 460 all’inizio degli anni 1990 per il progetto «Ferrovia 2000». Dal 1992 al 1996 sono state consegnate alle FFS 119 locomotive; il loro design caratteristico è di Pininfarina.', 'Tra il 2017 e il 2022 tutte le 119 locomotive hanno ricevuto un refit nell’officina di Yverdon-les-Bains: nuovi convertitori, impianto ad aria compressa, cablaggio e sedili di guida rinnovati. Così possono circolare fino agli anni 2040.'] },
      { titel: 'Impiego e tecnica', liste: ['Tecnica di trazione trifase, con nuovi convertitori dal refit', 'Cassa in acciaio con frontali in plastica rinforzata con fibra di vetro', 'Cabina di guida a tenuta di pressione per le gallerie ad alta velocità', 'Comando multiplo per i treni navetta con carrozza pilota', 'Freno a recupero che restituisce corrente alla rete'],
        p: ['La Re 460 traina e spinge soprattutto treni InterCity e InterRegio su tutta la rete svizzera a scartamento normale, per lo più con carrozze a due piani IC2000 o carrozze unificate IV. Viaggia fino a 200 km/h.'] },
      { titel: 'Dotazione e accessibilità', p: ['Ciò che i viaggiatori trovano a bordo dipende dalle carrozze. Le carrozze a due piani IC2000 hanno accessi a pianale ribassato, posti per sedie a rotelle e un WC accessibile; le carrozze unificate IV non sono a pianale ribassato. I dettagli sono sulle pagine IC2000 ed EW IV.'] },
      { titel: 'Componenti del veicolo', tabelle: { kopf: ['Veicolo', 'Funzione', 'Lunghezza', 'Peso in servizio', 'Trazione'], zeilen: [
      ['Re 460', 'locomotiva elettrica universale', '18,5 m', '84,0 t', '6100 kW / 300 kN']] } },
      { titel: 'Altri gestori e tipi affini', tabelle: { kopf: ['Gestore / tipo', 'Effettivo', 'Potenza', 'Velocità massima', 'Particolarità'], zeilen: [
        ['BLS (Re 465)', '18', '6400 kW', '160 km/h (omologata)', 'Locomotiva sorella per treni viaggiatori, navetta per auto e merci'],
        ['VR (Sr2)', '46', '6000 kW', '210 km/h', 'Variante a scartamento largo (1524 mm) per la Finlandia'],
        ['NSB (El 18)', '22', '5400 kW', '200 km/h', 'Variante per la Norvegia']] } },
      { titel: 'Futuro e prospettive', p: ['Grazie al programma Refit le locomotive sono tecnicamente pronte per altri 20 anni circa di servizio. Resteranno presumibilmente fino agli anni 2040 la spina dorsale della lunga percorrenza FFS con locomotiva.'] }
    ],
  bilder: ['Re 460 con carrozze unificate in primavera', 'Re 460 con carrozze a due piani IC2000 sopra il lago', 'Re 460 con IC2000 tra campi e bosco', 'Re 460 con IC2000 d’estate', 'Re 460 con carrozze unificate al mattino presto', 'Re 460 «Swisstainable» con IC2000', 'Re 460 «Swisstainable» con carrozze del treno notturno']
});

uebZug('rabe-503', {
  typ: 'Treno multisistema ad assetto variabile per il traffico internazionale',
  text: ['L’Astoro è un treno elettrico multisistema ad assetto variabile a sette casse della famiglia Pendolino di Alstom (ETR 610).', 'Le FFS lo impiegano nel traffico EuroCity tra Germania, Svizzera e Italia.'],
  kennzahlen: [['19', 'treni nella flotta FFS'], ['200 km/h', 'in Svizzera · costruito per 250 km/h'], ['2009', 'primo impiego alle FFS'], ['187,4 m', 'lunghezza']],
  daten: { 'Hersteller': 'Alstom (famiglia Pendolino, ETR 610)', 'Zugbildung': '7 carrozze', 'Stromsystem': '15 kV e 25 kV CA, 3 kV CC', 'Gewicht': '418 t a vuoto (FOS), 466 t a pieno carico', 'Höchstgeschwindigkeit': '250 km/h (veicolo), 200 km/h nel tipo di marcia svizzero', 'Neigetechnik': 'attivo', 'Einsatz': 'EuroCity Germania–Svizzera–Italia' },
  specNote: 'Le FFS indicano 250 km/h come velocità massima del veicolo; nel catalogo dei tipi di marcia è registrato 200 km/h per il tipo svizzero.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['L’Astoro appartiene alla famiglia Pendolino di Alstom (ETR 610). La flotta FFS conta 19 treni: sette della prima acquisizione e dodici consegnati più tardi. Il primo ha circolato nel 2009.'] },
      { titel: 'Impiego e tecnica', p: ['L’Astoro circola sull’asse nord-sud tra Germania, Austria, Svizzera e Italia, soprattutto Ginevra–Briga–Milano, Basilea–Berna–Briga–Milano e Zurigo–Monaco.', 'Grazie alla tecnica di pendolamento accorcia i tempi di percorrenza sul Sempione e verso Monaco. Il treno è lungo 187 m, offre 402 posti a sedere e raggiunge i 250 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Ristorante', 'Zona famiglia', 'Wi-Fi', 'Prese per spine svizzere e internazionali', 'Amplificatore del segnale mobile', 'Indicazione elettronica delle prenotazioni', 'Posti per biciclette e bagagli', 'Posti per sedie a rotelle e WC accessibile', 'Posti prioritari e fasciatoio'],
        p: ['L’accesso non è a pianale ribassato. Sono disponibili posti per sedie a rotelle e un WC accessibile.'] },
      { titel: 'Rinnovo', p: ['Dal 2024 le FFS rinnovano l’intera flotta nell’officina di Bellinzona. Interni, informazione alla clientela e componenti tecnici vengono revisionati; il programma dovrebbe durare fino alla fine del 2027.'] }
    ],
  bilder: ['RABe 503 «Astoro» a Briga', 'RABe 503 «Astoro» al marciapiede', 'ETR 610 013 presso St-Saphorin sul Lemano', 'ETR 610 «Astoro» in viaggio', 'ETR 610 006 come EC 50 a Domodossola']
});

uebZug('re-450', {
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM e ABB hanno costruito le 115 Re 450 per i treni navetta a due piani (DPZ) della S-Bahn di Zurigo. Le carrozze a due piani sono state fornite da SLM e Schindler Waggon; il primo DPZ ha circolato nel 1989, un anno prima dell’avvio della S-Bahn nel maggio 1990.', 'Fino al 1998 sono stati costruiti 113 treni navetta. Sono stati rinnovati dal 2011 al 2018.'] },
      { titel: 'Impiego e tecnica', p: ['I DPZ sono la spina dorsale della S-Bahn di Zurigo e possono circolare su quasi tutta la rete dello ZVV. Un treno è lungo 98,8 m, offre 345 posti a sedere e viaggia fino a 130 km/h.', 'Un treno navetta comprende la Re 450, carrozze a due piani e una carrozza pilota, così al capolinea la locomotiva non deve essere spostata.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Climatizzazione', 'Sistema d’informazione alla clientela', 'Prese in 1a classe', 'Amplificatore del segnale mobile', 'Compartimento multifunzionale con posti per biciclette', 'Posti per passeggini', 'Accesso a livello nella carrozza a pianale ribassato (NDW)', 'Posti per sedie a rotelle e WC accessibile', 'Posti prioritari'],
        p: ['Le persone in sedia a rotelle salgono senza gradini nella carrozza a pianale ribassato NDW, inserita nei treni navetta.'] }
    ],
  typ: 'Locomotiva dei treni navetta a due piani',
  text: ['La Re 450 traina e spinge i treni navetta a due piani (DPZ) della S-Bahn di Zurigo.', 'I treni navetta sono composti dalla locomotiva, da carrozze a due piani e da una carrozza pilota.'],
  daten: { 'Einsatz': 'S-Bahn di Zurigo' },
  bilder: ['Re 450 021 con la S24 a Zurigo HB', 'Re 450 059 a Zurigo HB', 'Re 450 033 a Turgi, 1993', 'Re 450 022 a Niederweningen, 1991', 'Re 450 con la S5 sulla diga di Rapperswil']
});

uebZug('rabe-512', {
  typ: 'Elettrotreno InterRegio a due piani a sei casse (Stadler KISS)',
  text: ['Il RABe 512 è un elettrotreno a due piani a sei casse della famiglia Stadler KISS.', 'Unisce la collaudata piattaforma del RABe 511 a un allestimento interno pensato per il traffico InterRegio.'],
  kennzahlen: [['60', 'treni ordinati'], ['466', 'posti a sedere'], ['160 km/h', 'velocità massima'], ['2023', 'primo impiego']],
  daten: { 'Zugbildung': '6 carrozze', 'Gewicht': '299 t a vuoto, 382 t a pieno carico', 'Anzahl': '60 ordinati', 'In Betrieb seit': 'luglio 2023' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Nel 2021 le FFS hanno ordinato a Stadler 60 nuovi IR-Dosto. Il primo servizio commerciale è iniziato nel luglio 2023; la consegna completa dovrebbe concludersi entro la fine del 2026.'] },
      { titel: 'Impiego e tecnica', p: ['I treni svolgono servizi InterRegio e RegioExpress nella regione di Zurigo, sull’Altopiano e nella Svizzera romanda.', 'Un treno è lungo 150 m, offre 466 posti a sedere e viaggia fino a 160 km/h. È possibile la doppia trazione con gli IR-Dosto RABe 511 rinnovati.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Accessi a pianale ribassato a livello', 'Posti per sedie a rotelle e WC accessibile', 'Posti prioritari', 'Prese elettriche', 'Finestrini con migliore ricezione mobile', 'Informazione ai viaggiatori moderna', 'Sedili 2+1 in 1a classe', 'Otto posti per biciclette in due punti, con ricarica per e-bike', 'Posti per passeggini e bagagli, fasciatoio'],
        p: ['Grazie agli accessi a livello, la salita è senza barriere ai marciapiedi adatti. Una zona famiglia e una zona business sono in fase di realizzazione.'] }
    ],
  bilder: ['IR-Dosto RABe 512 a Zurigo HB', 'RABe 512 IR-Dosto in viaggio', 'RABe 512 IR-Dosto', 'Piano superiore di 2a classe del RABe 512', 'Frontale del RABe 512']
});

uebZug('rabe-520', {
  typ: 'GTW Stadler stretto per la linea del Seetal',
  text: ['Il RABe 520 è un’automotrice articolata elettrica sviluppata appositamente per la sagoma stretta della linea del Seetal.', 'Il modulo di trazione centrale e la cassa larga solo circa 2,65 metri lo distinguono nettamente dagli altri treni regionali delle FFS.'],
  kennzahlen: [['17', 'treni acquistati in origine'], ['115 km/h', 'velocità massima'], ['2002/03', 'anni di costruzione'], ['53,5 m', 'lunghezza']],
  daten: { 'Breite': 'circa 2,65 m (sagoma del Seetal)', 'Gewicht': '78 t a vuoto (FOS), 105 t a pieno carico', 'Anzahl': '17 acquistati', 'Einsatz': 'linea del Seetal Lucerna–Lenzburg' },
  specNote: 'Due unità sono poi passate a Thurbo; il numero 17 indica l’acquisto originale e non necessariamente l’effettivo FFS attuale.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha fornito queste automotrici articolate GTW dal 2002; sono stati acquistati 17 veicoli con i numeri 520 000–016. Oggi le FFS ne indicano 15 nella loro panoramica.', 'Dal 2018 al 2021 i veicoli sono stati modernizzati.'] },
      { titel: 'Impiego e tecnica', p: ['La zona d’impiego principale è la linea del Seetal Lucerna–Lenzburg; nelle ore di punta circolano due treni accoppiati.', 'Il treno a tre elementi con modulo centrale motorizzato è lungo 53,5 m, offre 124 posti a sedere e viaggia fino a 115 km/h. La cassa stretta aumenta la distanza dalla strada parallela.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Cinque porte per lato per i marciapiedi bassi del Seetal (35 cm sopra il binario)', 'Una porta per marciapiedi standard (55 cm)', 'Un posto per sedia a rotelle per treno', 'Posti prioritari', 'Posti per biciclette, passeggini e bagagli', 'Finestrini con migliore ricezione mobile'],
        p: ['Le persone in sedia a rotelle possono salire autonomamente in tutte le stazioni della linea del Seetal.'] }
    ],
  bilder: ['RABe 520 «GTW» a Beinwil am See', 'RABe 520 nel Seetal presso Seengen', 'RABe 520 della linea del Seetal a Lenzburg, 2003', 'RABe 520 al passaggio a livello di Beinwil am See', 'RABe 520 come S28 presso Hunzenschwil']
});

uebZug('rabe-521', {
  typ: 'FLIRT monotensione omologato in Svizzera e in Germania',
  text: ['Il RABe 521 è un FLIRT a quattro casse per i collegamenti regionali transfrontalieri tra la Svizzera nord-occidentale e la Germania.', 'Costituisce una parte importante della S-Bahn trinazionale di Basilea e circola anche sul Seehas.'],
  kennzahlen: [['39', 'treni'], ['160 km/h', 'velocità massima'], ['2004', 'primo impiego'], ['74,08 m', 'lunghezza']],
  daten: { 'Zugbildung': '4 carrozze', 'Gewicht': '120 t a vuoto, 152 t a pieno carico', 'Leistung': '2656 kW (valore del tipo di marcia FOS)', 'Nummern': '521 001–030 e 201–209', 'Einsatz': 'S-Bahn di Basilea, Seehas, Svizzera–Germania' },
  specNote: 'Il catalogo dei tipi di marcia delle FFS raggruppa sotto questo tipo anche varianti FLIRT a quattro casse tecnicamente simili; la potenza è quindi indicata come valore del tipo.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha sviluppato la piattaforma FLIRT originariamente per le FFS. La serie RABe 521 comprende 30 veicoli con i numeri 521 001–030 e altri nove 521 201–209, in tutto 39 treni. I primi hanno circolato nel 2004.'] },
      { titel: 'Impiego e tecnica', p: ['I RABe 521 circolano soprattutto sulla S-Bahn trinazionale di Basilea e su collegamenti transfrontalieri verso la Germania.', 'Gli agganci automatici permettono la trazione multipla con FLIRT compatibili. I FLIRT delle FFS viaggiano fino a 160 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Accesso a pianale ribassato', 'Posti per sedie a rotelle e WC accessibile', 'Posti prioritari', 'Prese in 1a classe', 'Zone multifunzionali per biciclette e passeggini', 'Portabagagli'],
        p: ['Gli accessi ribassati e le zone multifunzionali accelerano il cambio dei viaggiatori. Queste indicazioni valgono per la famiglia FLIRT delle FFS.'] }
    ],
  bilder: ['RABe 521 «FLIRT»', 'RABe 521 come S3 per Olten a Porrentruy', 'FLIRT sul ponte della Gäubahn a Olten', 'FLIRT sul ponte sull’Aar presso Olten', 'Interno del RABe 521 «Express-Hase»']
});

uebZug('rabe-522', {
  typ: 'FLIRT bicorrente per la Francia',
  text: ['Il RABe 522 è un FLIRT bicorrente a quattro casse per i collegamenti tra Svizzera e Francia.', 'I veicoli sono adattati alla rete francese a 25 kV e circolano soprattutto nelle regioni di Ginevra e di Basilea.'],
  kennzahlen: [['32', 'treni della serie 201–232'], ['160 km/h', 'velocità massima'], ['2011', 'impiego della serie attuale dal'], ['75,0 m', 'lunghezza']],
  daten: { 'Zugbildung': '4 carrozze', 'Stromsystem': '15 kV 16,7 Hz e 25 kV 50 Hz CA', 'Gewicht': '135 t a vuoto, 167 t a pieno carico', 'Einsatz': 'Léman Express, traffico regionale di Basilea' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La serie è di Stadler e comprende 32 veicoli con i numeri 522 201–232; il primo RABe 522 ha circolato nel 2011.', 'Una prima serie di dodici veicoli portava i numeri 522 001–012. Poiché questi treni non avevano inizialmente ottenuto l’omologazione francese, sono stati poi trasformati in RABe 523.'] },
      { titel: 'Impiego e tecnica', p: ['I RABe 522 circolano tra l’altro sulla rete Léman Express e su collegamenti regionali di confine nella regione di Basilea e nel Giura.', 'Come gli altri FLIRT hanno una trazione elettrica distribuita e agganci automatici per la trazione multipla.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Ampi accessi a pianale ribassato', 'Posti per sedie a rotelle e WC accessibile', 'Posti prioritari', 'Prese in 1a classe', 'Zone multifunzionali per biciclette e passeggini'],
        p: ['Queste indicazioni valgono per la famiglia FLIRT delle FFS; i dettagli variano secondo la versione.'] }
    ],
  bilder: ['RABe 522 209 a Delle', 'RABe 522 a Noiraigue', 'RABe 522 221 nella livrea Léman Express ad Annemasse', 'RABe 522 231 a Ginevra', 'RABe 522 213 a Ginevra-Cornavin']
});

uebZug('rabe-524', {
  typ: 'FLIRT multisistema per TILO',
  text: ['I RABe 524 sono elettrotreni FLIRT a quattro e sei casse per il traffico regionale transfrontaliero tra il Ticino e la Lombardia.', 'Possono circolare sia con la corrente alternata svizzera sia con la corrente continua italiana.'],
  kennzahlen: [['53', 'treni presso TILO'], ['160 km/h', 'velocità massima'], ['2007', 'primo impiego'], ['4 / 6', 'carrozze per treno']],
  daten: { 'Zugbildung': '4 o 6 carrozze', 'Stromsystem': '15 kV 16,7 Hz CA e 3 kV CC', 'Länge': '74,1 m (4 casse), 106,3 m (6 casse), 104,9 m (FLIRT TSI)', 'Gewicht': '133 t (4 casse), 174 t (6 casse), 179 t (FLIRT TSI)', 'Anzahl': '53 (23 a quattro casse, 17 a sei casse, 13 FLIRT TSI)', 'In Betrieb seit': '2007 (costruiti tra il 2006 e il 2021)', 'Einsatz': 'TILO, Ticino–Lombardia' },
  specNote: 'Lunghezza e peso a vuoto di ogni variante secondo il catalogo dei tipi di marcia delle FFS. FLIRT TSI indica la versione più recente a sei casse conforme alle STI (RABe 524.3).',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha costruito i 53 veicoli oggi in servizio tra il 2006 e il 2021: 23 a quattro casse, 17 a sei casse e 13 FLIRT TSI (RABe 524.3). I primi hanno circolato nel 2007.', 'I più recenti FLIRT TSI sono stati acquistati per ampliare l’offerta transfrontaliera.'] },
      { titel: 'Impiego e tecnica', p: ['La serie caratterizza la rete TILO in Ticino e in Lombardia, fino a Milano. A seconda della linea circolano treni a quattro o sei casse.', 'La tecnica policorrente permette collegamenti diretti oltre confine senza cambiare veicolo.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Accesso a pianale ribassato', 'Posti per sedie a rotelle e WC accessibile', 'Posti prioritari', 'Prese in 1a classe', 'Posti per biciclette, passeggini e bagagli'],
        p: ['Queste indicazioni valgono per la famiglia FLIRT delle FFS; i dettagli variano secondo la versione.'] },
      { titel: 'Varianti', tabelle: { kopf: ['Variante', 'Numero', 'Lunghezza', 'Peso a vuoto'], zeilen: [
      ['RABe 524, quattro casse', '23', '74,1 m', '133 t'],
      ['RABe 524, sei casse', '17', '106,3 m', '174 t'],
      ['RABe 524.3, FLIRT TSI', '13', '104,9 m', '179 t']] } }
    ],
  bilder: ['RABe 524 008 a Milano Centrale', 'RABe 524 303 nella nuova livrea TILO a Milano Centrale', 'RABe 524 a Capolago-Riva San Vitale', 'RABe 524 a Milano Cadorna', 'RABe 524 012 come S20 a Locarno', 'RABe 524 014 con pubblicità di «Rete Tre» a Maccagno']
});

uebZug('ic2000', {
  beiname: 'Carrozze a due piani',
  typ: 'Treno navetta a due piani a lunga percorrenza',
  text: ['L’IC2000 è una famiglia di carrozze viaggiatori e carrozze pilota a due piani.', 'Con la Re 460 le carrozze formano treni navetta efficienti per il traffico InterCity e InterRegio; dopo il rinnovo completo si chiamano anche IC2020.'],
  kennzahlen: [['341', 'carrozze'], ['200 km/h', 'velocità massima'], ['1997', 'primo impiego'], ['26,8 m', 'lunghezza per carrozza']],
  daten: { 'Fahrzeugart': 'carrozza viaggiatori a due piani', 'Hersteller': 'consorzio Schindler (Schindler Waggon, FIAT-SIG, ABB/Adtranz)', 'Länge': '26,8 m per carrozza', 'Gewicht': '47 t a vuoto (tipo FOS), 60 t a pieno carico', 'Sitzplätze': 'fino a 86 per carrozza (1a classe), fino a 126 per carrozza (2a classe)', 'Wagenübergang': 'al piano superiore', 'Antrieb': 'nessuna, con Re 460', 'Anzahl': '341 carrozze' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le 341 carrozze a due piani sono state consegnate dal 1997 in più serie. Le casse sono state costruite da Schindler Waggon, i carrelli da FIAT-SIG e l’equipaggiamento elettrico da ABB/Adtranz.', 'La famiglia comprende carrozze di 1a e 2a classe nonché carrozze di servizio, ristorante e pilota. Da fine 2019 all’estate 2025 le FFS hanno modernizzato tutte le carrozze.'] },
      { titel: 'Impiego e tecnica', p: ['Le composizioni circolano come InterCity e InterRegio su importanti assi est-ovest e nord-sud, per lo più con una Re 460. Un treno offre oltre 900 posti a sedere e viaggia fino a 200 km/h.', 'Una carrozza è lunga 26,8 m e offre fino a 86 posti in 1a o 126 in 2a classe.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Climatizzazione completa', 'Prese in 1a e 2a classe', 'Sedili 2+1 in 1a classe', 'Finestrini con migliore ricezione mobile', 'Compartimenti famiglia, zona silenzio e zona business (solo InterCity)', 'Ristorante o bistrò (InterCity)', 'Posti per biciclette, passeggini e bagagli', 'Accesso a pianale ribassato', 'Posti per sedie a rotelle e WC accessibile', 'Posti prioritari'],
        p: ['Grazie agli accessi a pianale ribassato, le persone in sedia a rotelle salgono senza gradini ai marciapiedi adatti.'] }
    ],
  bilder: ['Treno navetta IC2000 nel paesaggio', 'Re 460 con carrozze a due piani IC2000', 'Re 460 in testa a carrozze a due piani IC2000', 'Passaggio tra una carrozza a un piano e una carrozza IC2000', 'Carrozza pilota IC2000 a Romanshorn']
});

uebZug('ew-iv', {
  beiname: 'Carrozza unificata IV',
  typ: 'Carrozza climatizzata a lunga percorrenza',
  text: ['La carrozza unificata IV, in breve EW IV, è l’ultima generazione di carrozze unificate svizzere.', 'Queste carrozze trainate sono state sviluppate per il traffico InterCity e oggi circolano in treni navetta e insieme a carrozze EuroCity adatte.'],
  kennzahlen: [['496', 'in origine per le FFS'], ['200 km/h', 'velocità massima'], ['1981', 'primo impiego'], ['26,4 m', 'lunghezza per carrozza']],
  daten: { 'Fahrzeugart': 'carrozza viaggiatori', 'Betreiber': 'FFS Viaggiatori', 'Länge': '26,4 m per carrozza', 'Gewicht': '45 t a vuoto (tipo FOS), 50 t a pieno carico', 'Steuerwagen': 'IC Bt EW IV, 48 t a vuoto', 'Antrieb': 'nessuna, con locomotiva separata', 'Anzahl': '540 costruite, di cui 496 per le FFS' },
  specNote: 'Il numero 496 è un valore storico e non l’effettivo attuale: vendite, trasformazioni e demolizioni hanno ridotto la flotta.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le carrozze unificate IV sono state costruite da SIG, SWS, SWP e SWA. Le prime 40 carrozze climatizzate di 1a classe sono arrivate nel 1981; in tutto ne sono state costruite 540, di cui 496 per le FFS. Le carrozze EuroCity sono seguite nel 1989, le carrozze pilota nel 1997.', 'Tra il 2019 e il 2025 le FFS hanno ripristinato oltre 250 carrozze EW IV ed EuroCity, con protezione anticorrosione, nuova verniciatura e finestrini permeabili al segnale mobile. Le carrozze pilota vengono modernizzate fino a fine 2027.'] },
      { titel: 'Impiego e tecnica', p: ['Le carrozze circolano in composizioni EC, IC e IR, per lo più con una Re 460 e una carrozza pilota. Assi tipici vanno da Ginevra a Briga, da Basilea a Lugano e da Zurigo via Olten a Berna. Alcune carrozze EC circolano anche in treni internazionali diurni e notturni.', 'Una carrozza è lunga 26,4 m ed è omologata per 200 km/h; offre 60 posti in 1a o fino a 86 in 2a classe.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Prese elettriche', 'Zona famiglia', 'Zona silenzio in 1a classe (InterCity)', 'Carrozza ristorante (EuroCity)', 'Posti per biciclette e carrozze dedicate alle biciclette', 'Posti per sedie a rotelle e WC accessibile', 'Posti prioritari'],
        p: ['Le carrozze non sono a pianale ribassato. Sono disponibili posti per sedie a rotelle e un WC accessibile.'] }
    ],
  bilder: ['Carrozza pilota EW IV a Bellinzona', 'InterRegio con EW IV a Zurigo HB', 'Gotthard-Weekender con EW IV a Brugg', 'Interno di 1a classe di una EW IV', 'Carrozza EW IV di 2a classe a Montreux']
});
