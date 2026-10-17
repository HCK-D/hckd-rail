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
    { titel: 'Costruttori e serie', p: ['La prima serie, numeri 000–023, è stata costruita da Adtranz e FIAT-SIG. La seconda serie, numeri 024–043, è stata realizzata dal consorzio Bombardier/Alstom; la consegna è iniziata nel 2003.', 'Alstom ha fornito da Neuhausen, tra l’altro, i carrelli e il sistema di assetto variabile.'] },
    { titel: 'Impiego e dotazione', liste: ['Ristorante', 'Zona famiglie', 'Zona silenzio', 'Zona business', 'Spazi per biciclette e bagagli', 'Posti per sedie a rotelle', 'WC accessibile in sedia a rotelle'],
      p: ['Tra gli assi principali figurano Basilea–Bienne–Losanna e Romanshorn–San Gallo–Zurigo–Bienne–Ginevra. Altri servizi portano in Ticino.', 'Sono disponibili posti per sedie a rotelle e un WC accessibile; l’accesso però non è a pianale ribassato.'] },
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
    { titel: 'Costruttore e acquisto', p: ['Il costruttore era Bombardier Transportation, oggi parte di Alstom. L’acquisto iniziale di 59 treni è stato portato a 62 veicoli con un accordo del 2014: 23 treni InterCity e 39 InterRegio.', 'La flotta è stata completamente consegnata nel 2022. La trazione utilizza motori sincroni a magneti permanenti.'] },
    { titel: 'Impiego e dotazione', liste: ['Accessi a pianale ribassato', 'Prese elettriche', 'Posti per sedie a rotelle', 'WC accessibile in sedia a rotelle', 'Ristorante (versione IC)', 'Carrozza famiglie (versione IC)'],
      p: ['Un corridoio importante è San Gallo–Zurigo–Berna–Losanna–Ginevra. Altri servizi circolano tra l’altro tra Basilea e Zurigo, Zurigo e Coira e Lucerna e Zurigo.'] },
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
      hinweis: 'La ripartizione 120 / 415 indica i posti di 1a e 2a classe del Regio-Dosto. Per la versione IR le FFS indicano 317 posti in totale.' },
    { titel: 'Impiego', p: ['I Regio-Dosto circolano soprattutto sulle linee della S-Bahn di Zurigo e come RE Wettingen–Olten–Lucerna.', 'Gli IR-Dosto circolano nel traffico interregionale della Svizzera tedesca e romanda, tra l’altro nella regione di Zurigo, sull’Altopiano, nella Svizzera settentrionale e sull’asse verso Coira. La versione IR può essere accoppiata al più recente RABe 512.'] },
    { titel: 'Dotazione e rinnovo', liste: ['Ampi accessi ribassati', 'Posti per sedie a rotelle', 'WC accessibile in sedia a rotelle', 'Spazi per passeggini e biciclette'],
      p: ['Gli IR-Dosto sono stati migliorati nel 2020–2024 per la lunga percorrenza, tra l’altro con prese elettriche e sedili 2+1 in 1a classe.', 'Le FFS rinnovano gradualmente i Regio-Dosto; il primo treno rinnovato circola da settembre 2026.'] }
  ],
  bilder: ['Regio-Dosto come S15 della S-Bahn di Zurigo a Jona', 'RABe 511 112 a Ginevra-Cornavin', 'RABe 511 026 a Ginevra', 'RABe 511 a Sevelen', 'RABe 511 018 a Zurigo HB']
});

uebZug('rabe-514', {
  typ: 'Elettrotreno a due piani della S-Bahn di Zurigo',
  text: ['Il RABe 514 è l’elettrotreno a due piani (DTZ) di seconda generazione della S-Bahn di Zurigo. Siemens ha fornito 61 treni a quattro casse.', 'Accessi ribassati con ponte di raccordo facilitano la salita.'],
  kennzahlen: [['61', 'treni'], ['360', 'posti a sedere per treno'], ['140 km/h', 'velocità massima'], ['2006', 'primo impiego alle FFS']],
  daten: { 'Betreiber': 'FFS Viaggiatori', 'Bauart': 'elettrotreno a due piani', 'Zugbildung': '4 carrozze', 'Gewicht': '223 t a vuoto', 'Anzahl': '61 treni', 'Einsatz': 'S-Bahn di Zurigo' },
  abschnitte: [
    { titel: 'Impiego e spazi per i viaggiatori', liste: ['Accesso ribassato continuo', 'Zone multifunzionali per biciclette e passeggini', 'Posti prioritari', 'Posti per sedie a rotelle', 'WC accessibile in sedia a rotelle'],
      p: ['I DTZ possono essere impiegati su tutta la rete della S-Bahn di Zurigo.'] },
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
    { titel: 'Impiego regionale e dotazione', liste: ['Accesso a pianale ribassato', 'Posti per sedie a rotelle', 'Toilette accessibili in sedia a rotelle', 'Spazi per biciclette e passeggini'],
      p: ['Secondo le FFS i FLIRT circolano come S-Bahn tra l’altro nei cantoni Argovia, Soletta, Lucerna, Basilea, Neuchâtel, Friburgo e Vaud. La dotazione riguarda tutta la famiglia; i dettagli variano secondo la versione.'] },
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
    { titel: 'Componenti del treno', tabelle: { kopf: ['Veicolo', 'Funzione', 'Lunghezza', 'Peso a vuoto', 'Trazione'], zeilen: [
      ['RBDe 560', 'motrice di testa', '25,0 m', '72,0 t', '1700 kW / 182 kN'],
      ['B INOVA', 'carrozza intermedia a pianale ribassato', '24,4 m', '36,0 t', 'senza trazione propria'],
      ['ABt', 'carrozza pilota di 1a e 2a classe', '25,0 m', '38,0 t', 'senza trazione propria']] } },
    { titel: 'Concetto e anni di costruzione', p: ['Per il Domino non esiste un unico anno di costruzione. I veicoli di base provengono dalla famiglia NPZ; per le composizioni TPF si citano gli anni dal 1984 al 1996. Il grande rinnovo dei treni TPF è avvenuto tra il 2009 e il 2011.', 'Alle FFS il primo Domino è entrato in servizio nel 2009. Bombardier ha fornito le nuove carrozze intermedie INOVA; gli altri costruttori variano secondo la motrice o la carrozza pilota.'] },
    { titel: 'Dotazione', liste: ['Migliore ricezione mobile', 'Posti prioritari', 'Posti per sedie a rotelle', 'Toilette accessibile in sedia a rotelle', 'Prese elettriche in 1a classe', 'Posti per biciclette e passeggini', 'Spazi per i bagagli', 'Zona multifunzionale nella carrozza intermedia'],
      p: ['Accessibilità: l’accesso senza gradini si trova nella carrozza intermedia INOVA. Motrice e carrozza pilota non sono a pianale ribassato per tutta la lunghezza.'] },
    { titel: 'Impiego alle FFS', p: ['Le FFS impiegano il Domino soprattutto su singole linee S-Bahn nei cantoni Argovia, Lucerna, Neuchâtel e Vaud. L’assegnazione precisa delle linee può cambiare con l’orario e la disposizione dei veicoli.'] },
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
  kennzahlen: [['119', 'locomotive FFS'], ['230 km/h', 'velocità massima'], ['18,5 m', 'lunghezza'], ['6100 kW', 'potenza continuativa'], ['1992', 'primo impiego alle FFS']],
  daten: { 'Fahrzeugart': 'locomotiva elettrica universale', 'Höchstgeschwindigkeit': '230 km/h (in esercizio max. 200 km/h)', 'Leistung': '6100 kW continuativi', 'Gewicht': '84 t in servizio', 'In Betrieb seit': '1992 (primo impiego alle FFS)', 'Anzahl': '119 locomotive', 'Status': 'in servizio (ammodernata con il Refit)' },
  abschnitte: [
    { titel: 'Componenti del veicolo', tabelle: { kopf: ['Veicolo', 'Funzione', 'Lunghezza', 'Peso in servizio', 'Trazione'], zeilen: [
      ['Re 460', 'locomotiva elettrica universale', '18,5 m', '84,0 t', '6100 kW / 300 kN']] } },
    { titel: 'Concetto e anni di costruzione', p: ['La Re 460 è stata sviluppata all’inizio degli anni 1990 nell’ambito del progetto «Ferrovia 2000» per modernizzare il traffico veloce sulle linee principali svizzere. Dal 1992 al 1996 sono stati consegnati alle FFS 119 esemplari.', 'Il design caratteristico è firmato dallo studio italiano Pininfarina.'] },
    { titel: 'Ammodernamento (programma Refit)', p: ['Tra il 2017 e il 2022 tutte le 119 locomotive hanno seguito un ampio programma Refit nell’officina FFS di Yverdon-les-Bains. Tra l’altro sono stati montati nuovi convertitori che riducono il consumo di energia e rinnovati l’impianto ad aria compressa, il cablaggio e i sedili di guida.'] },
    { titel: 'Dotazione e caratteristiche', liste: ['Trazione trifase, convertitori GTO ammodernati in IGBT', 'Cassa aerodinamica in acciaio con frontali in vetroresina', 'Cabina stagna alla pressione per le gallerie, ad es. Mattstetten–Rothrist e galleria di base del Lötschberg', 'Comando multiplo per treni navetta con carrozza pilota (Bt, IC2000)', 'Freno a recupero che risparmia energia'] },
    { titel: 'Impiego alle FFS', p: ['La Re 460 traina e spinge soprattutto treni InterCity (IC) e InterRegio (IR) su tutta la rete svizzera a scartamento normale. Circola spesso con carrozze a due piani IC2000 o carrozze unificate IV (EW IV).'] },
    { titel: 'Altri gestori e tipi affini', tabelle: { kopf: ['Gestore / tipo', 'Effettivo', 'Potenza', 'Velocità massima', 'Particolarità'], zeilen: [
      ['BLS (Re 465)', '18', '7000 kW', '230 km/h', 'variante più potente della Loc 2000 per merci e viaggiatori'],
      ['VR (Sr2)', '46', '6000 kW', '210 km/h', 'variante a scartamento largo (1524 mm) per la Finlandia'],
      ['NSB (El 18)', '22', '5880 kW', '200 km/h', 'variante per la Norvegia, adatta alle condizioni nordiche']] } },
    { titel: 'Futuro e prospettive', p: ['Grazie al programma Refit le locomotive sono tecnicamente pronte per altri 20 anni circa di servizio. Resteranno presumibilmente fino agli anni 2040 la spina dorsale della lunga percorrenza FFS con locomotiva.'] }
  ],
  bilder: ['Re 460 con carrozze unificate in primavera', 'Re 460 con carrozze a due piani IC2000 sopra il lago', 'Re 460 con IC2000 tra campi e bosco', 'Re 460 con IC2000 d’estate', 'Re 460 con carrozze unificate al mattino presto', 'Re 460 «Swisstainable» con IC2000', 'Re 460 «Swisstainable» con carrozze del treno notturno']
});

uebZug('rabe-503', {
  typ: 'Treno multisistema ad assetto variabile per il traffico internazionale',
  text: ['L’Astoro è un treno elettrico multisistema ad assetto variabile a sette casse della famiglia Pendolino di Alstom (ETR 610).', 'Le FFS lo impiegano nel traffico EuroCity tra Germania, Svizzera e Italia.'],
  kennzahlen: [['19', 'treni nella flotta FFS'], ['250 km/h', 'velocità massima di progetto'], ['2009', 'primo impiego alle FFS'], ['187,4 m', 'lunghezza']],
  daten: { 'Hersteller': 'Alstom (famiglia Pendolino, ETR 610)', 'Zugbildung': '7 carrozze', 'Stromsystem': '15 kV e 25 kV CA, 3 kV CC', 'Gewicht': '418 t a vuoto (FOS), 466 t a pieno carico', 'Höchstgeschwindigkeit': '250 km/h (veicolo), 200 km/h nel tipo di marcia svizzero', 'Neigetechnik': 'attivo', 'Einsatz': 'EuroCity Germania–Svizzera–Italia' },
  specNote: 'Le FFS indicano 250 km/h come velocità massima del veicolo; nel catalogo dei tipi di marcia è registrato 200 km/h per il tipo svizzero.',
  abschnitte: [
    { titel: 'Acquisto e impiego', p: ['La flotta FFS comprende 19 Astoro: sette del primo acquisto e dodici consegnati in seguito.', 'Circolano sull’asse internazionale nord-sud, tra l’altro via San Gottardo verso Milano, e su collegamenti verso la Germania.'] },
    { titel: 'Rinnovo', p: ['Dal 2024 le FFS rinnovano l’intera flotta nell’officina di Bellinzona. Interni, informazione alla clientela e componenti tecnici vengono revisionati; il programma dovrebbe durare fino alla fine del 2027.'] }
  ],
  bilder: ['RABe 503 «Astoro» a Briga', 'RABe 503 «Astoro» al marciapiede', 'ETR 610 013 presso St-Saphorin sul Lemano', 'ETR 610 «Astoro» in viaggio', 'ETR 610 006 come EC 50 a Domodossola']
});

uebZug('re-450', {
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
    { titel: 'Acquisto', p: ['Nel 2021 le FFS hanno ordinato in totale 60 nuovi IR-Dosto. Il primo servizio commerciale è iniziato nel luglio 2023; la consegna completa dovrebbe concludersi entro la fine del 2026.'] },
    { titel: 'Impiego e comfort', p: ['I treni sono previsti per prestazioni InterRegio e RegioExpress nella regione di Zurigo, sull’Altopiano e nella Svizzera romanda.', 'Accessi a pianale ribassato, posti per sedie a rotelle, zone multiuso, prese elettriche e un’informazione moderna migliorano accessibilità e comfort. È possibile la doppia trazione con RABe 511 ammodernati.'] }
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
    { titel: 'Acquisto e particolarità', p: ['Le FFS hanno acquistato 17 veicoli numerati 520 000–016. La costruzione stretta aumenta la distanza di sicurezza dalla strada che corre parallela.', 'Una parte delle porte era in origine prevista per i marciapiedi bassi del Seetal; con l’ammodernamento del 2018–2021 è stato aggiunto un accesso per i marciapiedi standard da 55 cm.'] },
    { titel: 'Impiego', p: ['L’area principale d’impiego è la linea del Seetal Lucerna–Lenzburg. I veicoli hanno circolato temporaneamente anche su altre linee da Lucerna e Lenzburg.'] }
  ],
  bilder: ['RABe 520 «GTW» a Beinwil am See', 'RABe 520 nel Seetal presso Seengen', 'RABe 520 della linea del Seetal a Lenzburg, 2003', 'RABe 520 al passaggio a livello di Beinwil am See', 'RABe 520 come S28 presso Hunzenschwil']
});

uebZug('rabe-521', {
  typ: 'FLIRT bicorrente per Germania e Svizzera',
  text: ['Il RABe 521 è un FLIRT a quattro casse per i collegamenti regionali transfrontalieri tra la Svizzera nord-occidentale e la Germania.', 'Costituisce una parte importante della S-Bahn trinazionale di Basilea e circola anche sul Seehas.'],
  kennzahlen: [['39', 'treni'], ['160 km/h', 'velocità massima'], ['2004', 'primo impiego'], ['74,08 m', 'lunghezza']],
  daten: { 'Zugbildung': '4 carrozze', 'Gewicht': '120 t a vuoto, 152 t a pieno carico', 'Leistung': '2656 kW (valore del tipo di marcia FOS)', 'Nummern': '521 001–030 e 201–209', 'Einsatz': 'S-Bahn di Basilea, Seehas, Svizzera–Germania' },
  specNote: 'Il catalogo dei tipi di marcia delle FFS raggruppa sotto questo tipo anche varianti FLIRT a quattro casse tecnicamente simili; la potenza è quindi indicata come valore del tipo.',
  abschnitte: [
    { titel: 'Acquisto e flotta', p: ['La serie comprende 30 veicoli numerati 521 001–030 e altre nove unità 521 201–209, in totale 39 treni. I primi veicoli sono entrati in servizio nel 2004.', 'Stadler ha sviluppato la piattaforma FLIRT in origine per le FFS.'] },
    { titel: 'Impiego', p: ['I RABe 521 circolano principalmente sulle linee della S-Bahn trinazionale di Basilea e su prestazioni transfrontaliere verso la Germania.', 'Gli accoppiatori automatici permettono la trazione multipla con FLIRT compatibili; accessi a pianale ribassato e zone multiuso facilitano il rapido cambio dei viaggiatori.'] }
  ],
  bilder: ['RABe 521 «FLIRT»', 'RABe 521 come S3 per Olten a Porrentruy', 'FLIRT sul ponte della Gäubahn a Olten', 'FLIRT sul ponte sull’Aar presso Olten', 'Interno del RABe 521 «Express-Hase»']
});

uebZug('rabe-522', {
  typ: 'FLIRT bicorrente per la Francia',
  text: ['Il RABe 522 è un FLIRT bicorrente a quattro casse per i collegamenti tra Svizzera e Francia.', 'I veicoli sono adattati alla rete francese a 25 kV e circolano soprattutto nelle regioni di Ginevra e di Basilea.'],
  kennzahlen: [['32', 'treni della serie 201–232'], ['160 km/h', 'velocità massima'], ['2011', 'impiego della serie attuale dal'], ['75,0 m', 'lunghezza']],
  daten: { 'Zugbildung': '4 carrozze', 'Stromsystem': '15 kV 16,7 Hz e 25 kV 50 Hz CA', 'Gewicht': '135 t a vuoto, 167 t a pieno carico', 'Einsatz': 'Léman Express, traffico regionale di Basilea' },
  abschnitte: [
    { titel: 'Storia della serie', p: ['Una prima serie di dodici veicoli portava i numeri 522 001–012. Poiché questi treni inizialmente non ottennero l’omologazione francese, furono poi trasformati in RABe 523.', 'La serie attuale comprende 32 veicoli più recenti numerati 522 201–232.'] },
    { titel: 'Impiego e dotazione', p: ['I RABe 522 circolano tra l’altro sulla rete Léman Express e su collegamenti regionali di confine nella regione di Basilea.', 'Come altri FLIRT hanno una trazione elettrica distribuita, ampi accessi a pianale ribassato, zone multiuso e accoppiatori automatici per la trazione multipla.'] }
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
    { titel: 'Varianti', tabelle: { kopf: ['Variante', 'Numero', 'Lunghezza', 'Peso a vuoto'], zeilen: [
      ['RABe 524, quattro casse', '23', '74,1 m', '133 t'],
      ['RABe 524, sei casse', '17', '106,3 m', '174 t'],
      ['RABe 524.3, FLIRT TSI', '13', '104,9 m', '179 t']] } },
    { titel: 'Acquisto e impiego', p: ['I veicoli oggi in servizio sono stati costruiti tra il 2006 e il 2021; i primi treni sono entrati in servizio nel 2007. La tecnica multisistema permette collegamenti diretti oltre confine senza cambio di locomotiva o di veicolo.', 'La serie caratterizza la rete TILO in Ticino e in Lombardia. A seconda della linea vengono impiegati treni a quattro o sei casse; i più recenti FLIRT TSI sono stati acquistati soprattutto per ampliare l’offerta transfrontaliera.'] }
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
    { titel: 'Acquisto e costruzione', p: ['Le 341 carrozze sono state consegnate dal 1997 in più serie. Le casse sono state costruite da Schindler Waggon, i carrelli da FIAT-SIG e l’equipaggiamento elettrico da ABB/Adtranz.', 'La famiglia comprende carrozze di 1a e 2a classe, carrozze servizio, carrozze ristorante e carrozze pilota.'] },
    { titel: 'Ammodernamento e impiego', p: ['Le FFS hanno ammodernato l’intera flotta con il programma IC2020. Sono stati rinnovati tra l’altro interni, illuminazione, informazione alla clientela, prese elettriche e permeabilità al segnale mobile.', 'Le composizioni circolano su importanti assi est-ovest e nord-sud e possono essere formate in lunghezze diverse secondo la domanda.'] }
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
    { titel: 'Acquisto e ammodernamento', p: ['Nel 1981 furono consegnate dapprima 40 carrozze climatizzate di 1a classe; dal 1983 seguirono carrozze di 2a classe e carrozze ristorante. In totale furono costruite 540 EW IV, di cui 496 per le FFS.', 'Tra il 2019 e il 2025 le FFS hanno rimesso in efficienza oltre 250 carrozze EW IV ed EuroCity; secondo le FFS l’ammodernamento delle carrozze pilota prosegue fino alla fine del 2027.'] },
    { titel: 'Impiego', p: ['Le carrozze circolano in composizioni EC, IC e IR, per lo più con una Re 460. Assi tipici vanno tra l’altro da Ginevra a Briga, da Basilea a Lugano e da Zurigo a Berna via Olten.'] }
  ],
  bilder: ['Carrozza pilota EW IV a Bellinzona', 'InterRegio con EW IV a Zurigo HB', 'Gotthard-Weekender con EW IV a Brugg', 'Interno di 1a classe di una EW IV', 'Carrozza EW IV di 2a classe a Montreux']
});
