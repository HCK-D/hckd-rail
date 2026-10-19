/* Italiano – BLS e TPF */
uebDict({
  'SBB': 'FFS', 'Bahn wählen': 'Scegli la compagnia', '{n} Fahrzeug': '{n} veicolo',
  'Schweizerische Bundesbahnen': 'Ferrovie federali svizzere',
  'BLS AG': 'BLS SA',
  'Transports publics fribourgeois': 'Transports publics fribourgeois',
  'Klassiker von SBB, BLS und TPF, die heute nicht mehr im Alltag fahren. Viele sind bei SBB Historic, der BLS-Stiftung, GFM Historique oder in Museen erhalten.': 'Classici di FFS, BLS e TPF che oggi non circolano più nel servizio quotidiano. Molti sono conservati da FFS Historic, dalla Fondazione BLS, da GFM Historique o nei musei.',
  'Zulassung': 'Omologazione', 'Frühere Bezeichnung': 'Designazione precedente', 'Beispiel': 'Esempio', 'Typen': 'Tipi', 'Standort': 'Ubicazione',
  'Erhalten': 'Conservato', 'Verbleib': 'Destino', 'Lokomotive': 'Locomotiva', 'Kabinen': 'Vetture', 'Höhenunterschied': 'Dislivello', 'Kran': 'Gru',
  'Normalspur, 1435 mm': 'scartamento normale, 1435 mm', 'Meterspur, 1000 mm': 'scartamento metrico, 1000 mm'
});

uebZug('bls-rabe-528', {
  typ: 'Elettrotreno Stadler per RegioExpress e S-Bahn',
  text: ['Il MIKA a sei casse è il treno più recente della BLS. Esiste in versione RegioExpress, più comoda per i tragitti lunghi, e in versione S-Bahn con più posti in piedi.', 'Dal 2021 i MIKA hanno sostituito treni più vecchi come le composizioni navetta EW III e gli NPZ.'],
  kennzahlen: [['67', 'treni (39 RE, 28 S-Bahn)'], ['160 km/h', 'velocità massima'], ['104,9 m', 'lunghezza'], ['2021', 'prima messa in servizio']],
  daten: { 'Bauart': 'elettrotreno, 6 casse', 'Fahrzeugnummern': 'RE 101–139, S-Bahn 201–228', 'Gewicht': '182 t (RE), 183 t (S-Bahn)', 'Sitzplätze': '244 (RE), 223 (S-Bahn)', 'Anzahl': '67 treni' },
  specNote: 'Posti a sedere senza strapontini: RE 46 in 1a e 198 in 2a classe, S-Bahn 35 e 188. I treni 125–137 appartengono a BLS Fernverkehr SA.',
  abschnitte: [
    { titel: 'Due versioni', tabelle: { kopf: ['Caratteristica', 'RegioExpress', 'S-Bahn'], zeilen: [
      ['Numeri', '101–139', '201–228'], ['Quantità', '39', '28'], ['Messa in servizio', '2021–2026', '2022–2025'],
      ['Posti 1a / 2a classe', '46 / 198', '35 / 188'], ['Posti in piedi', '149', '241'], ['Posti bici', '12', '6']] } },
    { titel: 'Impiego', p: ['Secondo la BLS, i MIKA circolano sulle linee S-Bahn attorno a Berna e Lucerna, sul RegioExpress Berna–Spiez–Zweisimmen e fino a Briga e Domodossola, e sull’InterRegio Berna–Neuchâtel–La Chaux-de-Fonds.'] }
  ],
  bilder: ['RABe 528 102 come RegioExpress a Berna', 'RABe 528 201 in versione S-Bahn', 'RABe 528 119 a Domodossola', 'RABe 528 104 nell’Entlebuch']
});
uebZug('bls-rabe-515', {
  typ: 'Elettrotreno a due piani Stadler (KISS)',
  text: ['Il MUTZ è il treno a due piani della BLS e fa parte della famiglia KISS di Stadler. Circola soprattutto sulle linee molto frequentate della S-Bahn di Berna.', 'Esiste una versione a quattro casse e una più lunga a sei casse.'],
  kennzahlen: [['39', 'treni (34 a quattro casse, 5 a sei casse)'], ['160 km/h', 'velocità massima'], ['335 / 546', 'posti a sedere 4 / 6 casse'], ['2012', 'prima messa in servizio']],
  daten: { 'Bauart': 'elettrotreno a due piani', 'Fahrzeugnummern': '001–034 (4 casse), 035–039 (6 casse)', 'Länge': '102,6 m (4 casse), 151,88 m (6 casse)', 'Gewicht': '216 t (4 casse), 301 t (6 casse)', 'Leistung': '4000 kW (6 casse: 6000 kW di punta)', 'Sitzplätze': '335 (4 casse), 546 (6 casse)', 'Anzahl': '39 treni' },
  abschnitte: [
    { titel: 'Quattro e sei casse', tabelle: { kopf: ['Caratteristica', 'quattro casse', 'sei casse'], zeilen: [
      ['Numeri', '001–034', '035–039'], ['Messa in servizio', '2012–2017, 032–033 nel 2019/2020', '2020'], ['Lunghezza', '102,6 m', '151,88 m'],
      ['Posti 1a / 2a classe', '61 / 274', '122 / 424'], ['Potenza', '4000 kW', '6000 kW di punta, 4000 kW continua']] } },
    { titel: 'Impiego', p: ['Secondo la BLS, i MUTZ circolano sulle linee S-Bahn Friburgo–Berna–Thun e Bienne–Berna–Belp, e come InterRegio Berna–Burgdorf–Olten e Berna–Bienne.'] }
  ],
  bilder: ['RABe 515 003 a quattro casse a Berna', 'RABe 515 039 a sei casse', 'RABe 515 027 presso Allmendingen']
});
uebZug('bls-rabe-535', {
  typ: 'Elettrotreno a pianale ribassato a quattro casse',
  text: ['Il Lötschberger è un treno a pianale ribassato a quattro casse della BLS. Prende il nome dalla linea di valico del Lötschberg e dall’Oberland bernese, dove circola.', 'Fino a quattro treni possono viaggiare insieme.'],
  kennzahlen: [['25', 'treni'], ['160 km/h', 'velocità massima'], ['142', 'posti a sedere'], ['2008', 'prima messa in servizio']],
  daten: { 'Bauart': 'elettrotreno a pianale ribassato, 4 casse', 'Anzahl': '25 treni' },
  abschnitte: [{ titel: 'Impiego', p: ['Secondo la BLS, il Lötschberger circola tra Zweisimmen e Spiez, Spiez e Interlaken Ost, Spiez e Frutigen, e sulle linee S-Bahn tra Thun, Berna, Burgdorf e Soletta.'] }],
  bilder: ['RABe 535 112 «Lötschberger»', 'Lötschberger nella stazione di Kandersteg', 'RABe 535 122 a Iselle di Trasquera']
});
uebZug('bls-rabe-525', {
  typ: 'Elettrotreno regionale a pianale ribassato',
  text: ['NINA sta per Niederflur-Nahverkehrszug, treno regionale a pianale ribassato. La BLS lo impiega in versioni a tre e quattro casse nel traffico regionale e S-Bahn.', 'Fino a quattro treni possono essere accoppiati.'],
  kennzahlen: [['36', 'treni (23 a tre casse, 13 a quattro casse)'], ['140 km/h', 'velocità massima'], ['1000 kW', 'potenza'], ['1998', 'prima messa in servizio']],
  daten: { 'Bauart': 'elettrotreno a pianale ribassato, 3 o 4 casse', 'Länge': '47,7 m (3 casse), 61,9 m (4 casse)', 'Gewicht': '79 t (3 casse), 96 t (4 casse)', 'Sitzplätze': '134 (3 casse), 179 (4 casse)', 'Anzahl': '36 treni' },
  specNote: 'Messi in servizio dal 1998 al 2005. I numeri 015–027 hanno quattro casse, 001–014, 028–030 e 032–037 tre casse.',
  abschnitte: [{ titel: 'Impiego', p: ['Secondo la BLS, i NINA a quattro casse circolano su Berna–Kerzers–Neuchâtel, Lyss–Büren an der Aare, Soletta–Burgdorf–Berna e Domodossola–Briga–Visp.'] }],
  bilder: ['NINA RABe 525 024 a Thun', 'RABe 525 015 a quattro casse a Berna']
});
uebZug('bls-re-465', {
  typ: 'Locomotiva elettrica universale della famiglia Lok 2000',
  text: ['La Re 465 è la sorella BLS della Re 460 delle FFS. Traina treni viaggiatori, treni navetta per auto e treni merci.', 'Tra il 2019 e il 2022 tutte le 18 locomotive sono state ammodernate e verniciate di verde. Da fine 2023 sostituiscono le Re 425 marroni sui treni navetta per auto.'],
  kennzahlen: [['18', 'locomotive'], ['6400 kW', 'potenza'], ['160 km/h', 'velocità massima omologata'], ['1994', 'prima messa in servizio']],
  daten: { 'Bauart': 'locomotiva elettrica Bo’Bo’', 'Höchstgeschwindigkeit': '160 km/h (omologata)' },
  abschnitte: [{ titel: 'Ammodernamento e impiego', p: ['La BLS ordinò prima otto locomotive (001–008), poi altre dieci (009–018) per il corridoio di trasporto combinato. Grazie al refit del 2019–2022, costato circa 20 milioni di franchi, possono circolare fino al 2040 circa.', 'Oggi trainano il GoldenPass Express tra Interlaken Ost e Zweisimmen, i treni navetta per auto del Lötschberg e del Sempione e, spesso insieme a TRAXX e Vectron, treni merci.'] }],
  bilder: ['Re 465 014 a Zweisimmen', 'Re 465 001 e 007 in doppia trazione']
});
uebZug('bls-re-475', {
  typ: 'Locomotiva elettrica policorrente Siemens per BLS Cargo',
  text: ['La Re 475 è la locomotiva Vectron di BLS Cargo. È omologata in diversi paesi e traina treni merci attraverso le Alpi fino in Germania, Italia e Paesi Bassi.', 'BLS Cargo ha ampliato la flotta in più serie.'],
  kennzahlen: [['50', 'locomotive in tre serie'], ['2016', 'prima messa in servizio'], ['6', 'paesi (serie recenti)'], ['Siemens', 'costruttore']],
  daten: { 'Bauart': 'locomotiva elettrica policorrente Bo’Bo’', 'Zulassung': 'CH, D, A, I, NL; dal n. 416 anche B', 'Anzahl': '50 (in tre serie)' },
  abschnitte: [{ titel: 'Tre serie', tabelle: { kopf: ['Numeri', 'Quantità', 'Consegna', 'Omologazione'], zeilen: [
    ['401–415', '15', '2016–2018', 'CH, D, A, I, NL'], ['416–440', '25', '2020, 2024–2025', 'CH, D, A, I, NL, B'], ['441–450', '10', 'dal 2026', 'CH, D, A, I, NL, B']] } }],
  bilder: ['Re 475 401 di BLS Cargo']
});
uebZug('bls-re-485', {
  typ: 'Locomotiva elettrica per treni merci Bombardier',
  text: ['Le Re 485 sono locomotive TRAXX di BLS Cargo per il traffico merci in Svizzera e verso la Germania.', 'Sono state ordinate nel 2002 e consegnate entro metà 2003.'],
  kennzahlen: [['20', 'locomotive'], ['140 km/h', 'velocità massima'], ['CH, D', 'omologazione'], ['2002', 'prima messa in servizio']],
  daten: { 'Bauart': 'locomotiva elettrica Bo’Bo’', 'Zulassung': 'Svizzera, Germania' },
  specNote: 'I 140 km/h derivano dal tipo TRAXX F140.',
  bilder: ['Re 485 005 di BLS Cargo', 'Re 485 016 con un treno merci', 'Re 485 008 presso Allmendingen']
});
uebZug('bls-re-486', {
  typ: 'Locomotiva elettrica policorrente Bombardier',
  text: ['Le Re 486 sono TRAXX policorrente di BLS Cargo. Possono circolare in Svizzera, Germania, Italia e Austria.', 'Sono quindi adatte al transito attraverso le Alpi, per esempio con l’autostrada viaggiante.'],
  kennzahlen: [['10', 'locomotive'], ['140 km/h', 'velocità massima'], ['4', 'paesi'], ['2008', 'prima messa in servizio']],
  daten: { 'Bauart': 'locomotiva elettrica policorrente Bo’Bo’', 'Zulassung': 'Svizzera, Germania, Italia, Austria' },
  specNote: 'I 140 km/h derivano dal tipo TRAXX F140.',
  bilder: ['Re 486 503 con l’autostrada viaggiante a Friburgo in Brisgovia', 'Re 486 504 di BLS Cargo']
});
uebZug('bls-re-425', {
  typ: 'Locomotiva elettrica della BLS, nota come «le marroni»',
  text: ['Per decenni le Re 4/4 marroni della BLS, oggi Re 425, hanno trainato treni diretti tra Berna e Briga e treni merci da Basilea a Domodossola. Anche il trasporto auto del Lötschberg è stato a lungo compito loro.', 'Da fine 2023 le Re 465 hanno ripreso il trasporto auto. BLS Cargo impiega ancora Re 4/4; la Re 4/4 165 «Moutier» appartiene oggi alla Fondazione BLS.'],
  kennzahlen: [['35', 'costruite 1964–1983'], ['4980 kW', 'potenza'], ['140 km/h', 'velocità massima'], ['1964', 'prima messa in servizio']],
  daten: { 'Bauart': 'locomotiva elettrica Bo’Bo’', 'Betreiber': 'BLS, oggi soprattutto BLS Cargo', 'Länge': '15,1 m (dal n. 174: 15,47 m)', 'Anzahl': '35 costruite' },
  abschnitte: [{ titel: 'La Re 4/4 165 «Moutier»', p: ['La 165 fu consegnata alla BLS come Ae 4/4 II 265 e porta lo stemma del comune di Moutier. Dal 2017 fa parte dei veicoli storici della Fondazione BLS e si trova, fuori servizio, nel deposito di Burgdorf.'] }],
  bilder: ['Re 425 192 a Spiez']
});
uebZug('bls-am-843', {
  typ: 'Locomotiva diesel-idraulica di BLS Infrastruttura',
  text: ['Anche BLS Infrastruttura impiega locomotive diesel della serie Am 843, per esempio la Am 843 503. Trainano treni cantiere e manovrano dove non c’è linea di contatto.', 'Tecnicamente la locomotiva corrisponde alla Am 843 delle FFS.'],
  kennzahlen: [['843 503', 'esempio fotografato'], ['diesel', 'trazione'], ['treni cantiere', 'impiego'], ['BLS', 'infrastruttura']],
  daten: { 'Bauart': 'locomotiva diesel', 'Antrieb': 'diesel-idraulica', 'Betreiber': 'BLS Infrastruttura', 'Einsatz': 'treni cantiere, manovra' },
  specNote: 'Il numero di Am 843 della BLS non è documentato pubblicamente. I dati tecnici della serie si trovano alla Am 843 delle FFS.',
  bilder: ['Am 843 503 di BLS Infrastruttura']
});
uebZug('bls-rangier', {
  name: 'Veicoli di manovra',
  typ: 'Locomotive e trattori di manovra della BLS',
  text: ['Per le manovre nelle stazioni e nelle officine la BLS impiega diversi piccoli veicoli. Alcuni provengono da ferrovie oggi confluite nella BLS, come la ferrovia Emmental–Burgdorf–Thun.', 'Questa pagina mostra i tipi documentati da foto con la scritta BLS.'],
  kennzahlen: [['5', 'tipi documentati da foto'], ['Ee 936', 'locomotiva di manovra più grande'], ['Kandersteg', 'tra l’altro fotografati'], ['BLS', 'gestore']],
  daten: { 'Bauart': 'locomotive e trattori di manovra', 'Einsatz': 'manovra nelle stazioni e officine' },
  abschnitte: [{ titel: 'Documentati da foto', tabelle: { kopf: ['Tipo', 'Esempio', 'Trazione', 'Foto'], zeilen: [
    ['Ee 936', '936 132', 'elettrica', 'Kandersteg 2016'], ['Eea 935', '935 402', 'elettrica e a batteria', 'Kandersteg 2016'],
    ['Tem 225', '225 041', 'elettrica e diesel', 'Burgdorf 2018'], ['Tm 235', '235 091', 'diesel', 'Spiez 2012'], ['Tea 245', '245 021', 'elettrica e a batteria', 'senza luogo']] } },
    { p: ['Quanti veicoli di ciascun tipo possieda oggi la BLS non è documentato pubblicamente. RailBase elenca quindi qui solo esempi con foto.'] }],
  bilder: ['Ee 936 132 a Kandersteg (2016)', 'Eea 935 402 a Kandersteg (2016)', 'Tem 225 041 a Burgdorf (2018)', 'Tm 235 091 a Spiez (2012)', 'Tea 245 021']
});
uebZug('bls-lrz', {
  typ: 'Treni di spegnimento e soccorso della BLS',
  text: ['La BLS ha anche propri treni di spegnimento e soccorso. Sono stazionati tra l’altro al centro d’intervento di Frutigen, al portale nord della galleria di base del Lötschberg.', 'Questi treni portano agenti estinguenti, soccorritori e protezione delle vie respiratorie nelle lunghe gallerie.'],
  kennzahlen: [['Frutigen', 'centro d’intervento'], ['Lötschberg', 'galleria di base'], ['gallerie', 'impiego principale'], ['BLS', 'gestore']],
  daten: { 'Bauart': 'treno di spegnimento e soccorso', 'Standort': 'tra l’altro centro d’intervento di Frutigen', 'Einsatz': 'soccorso in galleria, lotta antincendio' },
  specNote: 'I dati tecnici e il numero di treni della BLS non sono documentati pubblicamente.',
  bilder: ['Treno di spegnimento e soccorso davanti al centro d’intervento di Frutigen']
});
uebZug('bls-ae-4-4', {
  typ: 'Locomotiva a quattro assi ad alta potenza della BLS (storica)',
  text: ['Le Ae 4/4 della BLS furono le prime locomotive moderne a carrelli con quattro assi e 1000 CV per asse. Sono considerate le antenate di tutte le moderne locomotive a quattro assi ad alta potenza.', 'La Ae 415 251 è in esercizio e può essere noleggiata presso la BLS.'],
  kennzahlen: [['1944', 'prima consegna'], ['2945 kW', 'potenza'], ['125 km/h', 'velocità massima'], ['80 t', 'peso']],
  daten: { 'Bauart': 'locomotiva elettrica Bo’Bo’', 'Hersteller': 'SLM e BBC', 'Betreiber': 'BLS, oggi BLS Historic', 'Erhalten': 'Ae 415 251, in esercizio' },
  abschnitte: [{ titel: 'Ammodernata', liste: ['Nuovi graduatori e interruttori ad aria compressa', 'Freno elettrico due volte più potente; per questo è stato rimosso un pantografo', 'Molle in gomma al posto delle molle a balestra', 'Un cavo che carica di più gli assi anteriori e migliora l’aderenza'] }],
  bilder: ['Ae 4/4 251 a Interlaken West (2004)']
});
uebZug('bls-ae-6-8', {
  typ: 'Pesante locomotiva di montagna del Lötschberg (storica)',
  text: ['Le Ae 6/8 del Lötschberg furono costruite dal 1926 al 1943 e all’epoca erano le locomotive più potenti del mondo.', 'La Ae 6/8 205 fu esposta all’Esposizione nazionale del 1939 a Zurigo e appartiene oggi alla Fondazione BLS.'],
  kennzahlen: [['8', 'costruite 1926–1943'], ['4415 kW', 'potenza'], ['100 km/h', 'velocità massima'], ['120 t', 'peso']],
  daten: { 'Bauart': 'locomotiva elettrica (1’Co)(Co1’)', 'Hersteller': 'parte elettrica SAAS; parte meccanica Breda (201–204), SLM (205–208)', 'Betreiber': 'BLS, oggi Fondazione BLS', 'Erhalten': 'Ae 6/8 205' },
  abschnitte: [{ titel: 'Due serie', p: ['I numeri 201–204 furono costruiti dal 1926 al 1931 ancora come Be 6/8, i 205–208 dal 1939 al 1943 direttamente come Ae 6/8 per 100 km/h. Nel 1939 anche le prime quattro ricevettero nuove trasmissioni per i treni diretti in pianura.'] }],
  bilder: ['Ae 6/8 205 presso Ausserberg, 100 anni del Lötschberg']
});
uebZug('bls-ae-8-8', {
  typ: 'Locomotiva doppia per i pesanti treni del Lötschberg (storica)',
  text: ['La Ae 8/8 è composta in pratica da due Ae 4/4 accoppiate in modo permanente. La BLS la acquistò dal 1956, perché sempre più treni pesanti avevano bisogno di una locomotiva di rinforzo sulla linea del Lötschberg.', 'Il suo soprannome è «Muni», il toro.'],
  kennzahlen: [['6475 kW', 'potenza'], ['160 t', 'peso'], ['125 km/h', 'velocità massima'], ['1959', 'prima messa in servizio']],
  daten: { 'Bauart': 'locomotiva doppia Bo’Bo’+Bo’Bo’', 'Betreiber': 'BLS, oggi Fondazione BLS', 'Erhalten': 'Ae 8/8 273 e 275' },
  abschnitte: [{ titel: 'Oggi', p: ['Le Ae 8/8 entrarono in servizio tra il 1959 e il 1966. Uno degli ultimi compiti della 273 fu trainare i treni di smarino della galleria di base del Lötschberg.', 'La Fondazione BLS raccoglie fondi per rimettere in esercizio la 273. Il futuro della 275 è incerto a causa del suo stato.'] }],
  bilder: ['Ae 8/8 274']
});
uebZug('bls-be-5-7', {
  typ: 'Prima locomotiva elettrica del Lötschberg (storica)',
  text: ['Nel 1913 la Be 5/7 fu la prima locomotiva di serie per il Lötschberg elettrificato. Era concepita come locomotiva universale per treni diretti e merci.', 'Dopo l’arrivo delle Ae 4/4 trainò soprattutto treni merci.'],
  kennzahlen: [['13', 'costruite'], ['1913', 'prima messa in servizio'], ['1840 kW', 'potenza oraria'], ['75 km/h', 'velocità massima']],
  daten: { 'Bauart': 'locomotiva elettrica 1’E1’', 'Hersteller': 'SLM, MFO e BBC', 'Leistung': '1840 kW (potenza oraria)', 'Höchstgeschwindigkeit': '75 km/h, locomotive successive 80 km/h', 'Erhalten': 'una locomotiva al Museo svizzero dei trasporti' },
  abschnitte: [{ titel: 'Al Museo dei trasporti', p: ['Dal 1959 la locomotiva 161 (originariamente 155) si trova al Museo svizzero dei trasporti di Lucerna. Lì porta il numero 151.'] }],
  bilder: ['Be 5/7 con il numero 151']
});
uebZug('bls-ce-6-6', {
  typ: 'Locomotiva elettrica sperimentale e merci del 1910 (storica)',
  text: ['La Ce 6/6 121 era una locomotiva elettrica unica, costruita nel 1910 come F 2×3/3, poi chiamata Fc 2×3/3 e infine Ce 6/6.', 'Circolò fino al 1968, soprattutto con treni merci su linee più pianeggianti come Thun–Interlaken.'],
  kennzahlen: [['1', 'esemplare'], ['1910', 'costruita'], ['1968', 'demolita'], ['1,7 mio di km', 'percorsi']],
  daten: { 'Bauart': 'locomotiva elettrica con due carrelli motori a tre assi', 'Hersteller': 'MFO e SLM', 'Leistung': '2 × 1000 CV (potenza oraria)', 'Höchstgeschwindigkeit': '70 km/h, poi 60 km/h', 'Verbleib': 'demolita nel 1968, un carrello al Museo dei trasporti' },
  abschnitte: [{ titel: 'A lungo in servizio', p: ['Dal 1928 la locomotiva trainò treni merci per la ferrovia Berna–Neuchâtel. Fu demolita il 10 luglio 1968 dopo 57 anni. Un carrello è esposto al Museo dei trasporti di Lucerna.'] }],
  bilder: ['Fc 2×3/3 121, la futura Ce 6/6 121']
});
uebZug('bls-ce-4-6', {
  typ: 'Locomotiva elettrica leggera per linee secondarie (storica)',
  text: ['La Ce 4/6 deve il soprannome «Dekretsmühle» al governo bernese, che nel 1918 ordinò per decreto l’elettrificazione delle linee secondarie a causa della penuria di carbone dopo la Prima guerra mondiale.', 'La Ce 4/6 307 dell’ex ferrovia Erlenbach–Zweisimmen si trova oggi nel deposito di Burgdorf.'],
  kennzahlen: [['17', 'locomotive 301–317'], ['1920', 'anno di costruzione della 307'], ['993 kW', 'potenza'], ['65 km/h', 'velocità massima']],
  daten: { 'Bauart': 'locomotiva elettrica a bielle', 'Betreiber': 'gruppo BLS, oggi Fondazione BLS', 'Erhalten': 'Ce 4/6 307, non in esercizio' },
  abschnitte: [{ titel: 'Costruzione leggera', p: ['Poiché le locomotive dovevano circolare soprattutto su linee secondarie, il loro carico per asse non poteva superare 12 tonnellate. Le 308–317 furono trasformate in Ce 4/4 nel 1954–1956.', 'La 307 è un veicolo storico della BLS dal 1999 e appartiene alla Fondazione BLS dal 2023.'] }],
  bilder: ['Ce 4/6 307 «Dekretsmühle»']
});
uebZug('bls-ce-4-4', {
  typ: 'Locomotiva elettrica trasformata da una Ce 4/6 (storica)',
  text: ['Le Ce 4/4 nacquero nel 1954–1956 dalle Ce 4/6 308–317 eliminando gli avancorpi e gli assi portanti. Così aumentarono il peso aderente e lo sforzo di trazione, anche se la locomotiva divenne più leggera.', 'La Ce 4/4 312 è oggi un pezzo da museo nel deposito di Burgdorf.'],
  kennzahlen: [['1920', 'costruita'], ['1957', 'trasformazione della 312'], ['993 kW', 'potenza'], ['65 km/h', 'velocità massima']],
  daten: { 'Bauart': 'locomotiva elettrica', 'Betreiber': 'gruppo BLS, oggi Fondazione BLS', 'Fahrzeugnummern': '312 (già GBS)', 'Erhalten': 'Ce 4/4 312, non in esercizio' },
  abschnitte: [{ p: ['Con la cassa riverniciata, la 312 è un veicolo storico della BLS dal 2013 e appartiene alla Fondazione BLS dal 2023. Può essere visitata durante le visite guidate.'] }]
});
uebZug('bls-bcfe-4-6', {
  beiname: 'Freccia blu',
  typ: 'Automotrice doppia leggera del 1938 (storica)',
  text: ['La «Freccia blu» del 1938 è, insieme alla Freccia rossa delle FFS, uno dei classici delle ferrovie svizzere. I grandi finestrini offrono una vista quasi panoramica.', 'La BCFe 4/6 736 è in esercizio e può essere noleggiata per gite.'],
  kennzahlen: [['1938', 'costruita'], ['136', 'posti'], ['110 km/h', 'velocità massima'], ['41,5 m', 'lunghezza']],
  daten: { 'Bauart': 'automotrice doppia elettrica', 'Hersteller': 'Sécheron (parte elettrica), SIG (parte meccanica)', 'Betreiber': 'gruppo BLS, oggi BLS Historic', 'Fahrzeugnummern': '736 (già BCFZe 4/6 della BN)' },
  abschnitte: [{ titel: 'Storia', p: ['Nel 1935 la BLS introdusse automotrici leggere a cassa singola. Dopo il successo della prova ordinò tre automotrici doppie BCFZe 4/6, consegnate nell’estate 1938. La 731 fu esposta all’Esposizione nazionale del 1939.', 'Per decenni i tre treni assicurarono il traffico viaggiatori del gruppo BLS, fino alla vendita nel 1983. È conservata la 736 della ferrovia Berna–Neuchâtel.'] }],
  bilder: ['BCFe 4/6 736 «Freccia blu»']
});
uebZug('bls-be-4-4-761', {
  typ: 'Automotrice ad alta potenza del 1953 (storica)',
  text: ['La «Wellensittich» (pappagallino) del 1953, oggi Be 545 761, è considerata l’antenata delle automotrici ad alta potenza. Con 2000 CV poteva persino trainare treni internazionali Berna–Parigi tra Berna e Neuchâtel.', 'Dal 2001 porta di nuovo la livrea originale verde chiaro e verde scuro e circola per corse speciali.'],
  kennzahlen: [['1953', 'costruita'], ['1470 kW', 'potenza'], ['125 km/h', 'velocità massima'], ['56', 'posti a sedere']],
  daten: { 'Bauart': 'automotrice elettrica', 'Frühere Bezeichnung': 'Ce 4/4, poi Be 4/4 761', 'Betreiber': 'BN, oggi BLS Historic', 'Fahrzeugnummern': '761–763 (conservata: 761)' },
  abschnitte: [{ p: ['La 761 e la 762 arrivarono alla ferrovia Berna–Neuchâtel nel 1953, la 763 alla GBS nel 1956. La 761 fa parte dei veicoli storici della BLS dal 2003 e nel 2010 è stata completamente rinnovata all’interno.'] }],
  bilder: ['Be 4/4 761 «Wellensittich» a Frutigen']
});
uebZug('bls-ce-2-4', {
  typ: 'Automotrice leggera del 1935 (storica)',
  text: ['Nel 1935 il gruppo BLS introdusse automotrici leggere a cassa singola, tra cui le Ce 2/4 727 e 787. Dopo il successo della prova seguirono nel 1938 le automotrici doppie «Freccia blu».', 'I dati conservati su queste automotrici sono scarsi.'],
  kennzahlen: [['1935', 'costruite'], ['727, 787', 'numeri'], ['1', 'cassa'], ['BLS', 'gruppo']],
  daten: { 'Bauart': 'automotrice elettrica leggera', 'Betreiber': 'gruppo BLS' },
  bilder: ['Ce 2/4 787']
});
uebZug('bls-abde-4-8', {
  typ: 'Automotrice doppia elettrica per il traffico regionale (storica)',
  text: ['Dal 1945 le automotrici doppie ABDe 4/8 circolarono nel traffico regionale del gruppo BLS, per esempio nel Simmental, tra Spiez e Interlaken e nella Gürbetal. Molte viaggiavano come treni navetta con carrozza pilota.', 'È conservato un solo treno: l’ex 742, oggi presso il gruppo del museo ferroviario Kerzers-Kallnach.'],
  kennzahlen: [['13', 'treni 1945–1964'], ['125 km/h', 'velocità massima'], ['1177 kW', 'potenza dei treni successivi'], ['2003', 'ultimi ritirati']],
  daten: { 'Bauart': 'automotrice doppia elettrica', 'Hersteller': 'SIG e SAAS, poi anche BBC', 'Länge': 'circa 46,8–47,8 m', 'Leistung': '706 kW (741–743), 1177 kW (successive)', 'Höchstgeschwindigkeit': '110 km/h, poi 125 km/h', 'Erhalten': 'ex 742 a Kerzers-Kallnach' },
  bilder: ['ABDe 4/8 741']
});
uebZug('bls-rbde-565', {
  typ: 'Treno navetta regionale delle ferrovie private (storico)',
  text: ['Le RBDe 565 erano i treni navetta regionali della BLS. Circolavano con carrozze intermedie e carrozze pilota nel traffico regionale e S-Bahn.', 'Dal 2022 al 2025 sono state sostituite dai nuovi MIKA.'],
  kennzahlen: [['22', 'automotrici'], ['125 km/h', 'velocità massima'], ['1650 kW', 'potenza continua'], ['1982', 'prima messa in servizio']],
  daten: { 'Bauart': 'automotrice elettrica per treni navetta', 'Hersteller': 'SIG, SWS, SWP, BBC e ABB', 'Leistung': '1650 kW (potenza continua)' },
  bilder: ['RBDe 565 726 a Laupen (2019)']
});
uebZug('bls-rbde-566', {
  typ: 'Treno navetta regionale dell’ex parco RM (storico)',
  text: ['Le RBDe 566 II furono costruite nel 1984–1985 per il gruppo EBT e arrivarono alla BLS con la fusione del 2006. Circolavano tra Spiez e Frutigen, Briga e Goppenstein, sulla S-Bahn di Berna e tra Thun e Soletta.', 'L’ultima corsa regolare si è svolta il 6 dicembre 2024.'],
  kennzahlen: [['13', 'automotrici'], ['1984', 'prima messa in servizio'], ['2024', 'ultima corsa'], ['230–242', 'numeri']],
  daten: { 'Bauart': 'automotrice elettrica per treni navetta', 'Betreiber': 'gruppo EBT e RM, dal 2006 BLS', 'Verbleib': '566 241 con carrozze presso l’associazione Pendelzug Mirage' },
  bilder: ['RBDe 566 238 con AB e ABt (2020)']
});
uebZug('bls-rabe-526', {
  typ: 'Automotrice articolata Stadler dell’ex parco RM (già BLS)',
  text: ['I GTW rossi del Regionalverkehr Mittelland arrivarono alla BLS con la fusione. Nel 2013 la BLS li vendette alle FFS, che li impiegarono nel Giura da Bienne; nel 2018 passarono a Thurbo.', 'Non circolano più alla BLS.'],
  kennzahlen: [['13', 'treni'], ['2013', 'alle FFS'], ['2018', 'a Thurbo'], ['Stadler', 'costruttore']],
  daten: { 'Bauart': 'automotrice articolata elettrica', 'Betreiber': 'RM, poi BLS, FFS, Thurbo' },
  bilder: ['GTW RABe 526 265 della BLS']
});
uebZug('bls-ew-iii', {
  name: 'EW III', beiname: 'Treno navetta',
  typ: 'Treno navetta con carrozze unificate III (storico)',
  text: ['I treni navetta EW III della BLS circolarono dal 1973 a fine 2021, per ultimo soprattutto come RegioExpress tra Berna e Neuchâtel. Hanno lasciato il posto ai nuovi MIKA.', 'FFS Historic ha ripreso una composizione EW III e la conserva.'],
  kennzahlen: [['1973', 'prima messa in servizio'], ['2021', 'ritirati'], ['165 m', 'lunghezza del treno'], ['140 km/h', 'velocità massima']],
  daten: { 'Bauart': 'treno navetta con locomotiva e 6 carrozze', 'Lokomotive': 'Re 465 (treno Kambly: Re 420)', 'Sitzplätze': '63 in 1a, 280 in 2a classe' },
  bilder: ['Treno navetta EW III della BLS a Malters']
});
uebZug('bls-re-420', {
  typ: 'Re 4/4 II al servizio della BLS (storica)',
  text: ['Per un periodo la BLS possedette proprie Re 420 della collaudata famiglia Re 4/4 II. Le ultime tre trainavano le carrozze della GoldenPass Line tra Interlaken Ost e Zweisimmen.', 'Oggi la BLS non possiede più locomotive di questo tipo.'],
  kennzahlen: [['4700 kW', 'potenza'], ['140 km/h', 'velocità massima'], ['80 t', 'peso'], ['14,8 m', 'lunghezza']],
  daten: { 'Bauart': 'locomotiva elettrica Bo’Bo’', 'Betreiber': 'BLS (in passato)' },
  bilder: ['Re 420.5 con treno navetta sul ponte del Bietschtal']
});

// ---------- TPF ----------
uebZug('tpf-rabe-527', {
  typ: 'Elettrotreno regionale Stadler',
  text: ['Gli otto FLIRT della serie 190 sono i treni a scartamento normale più moderni delle TPF. Circolano come RegioExpress e S-Bahn nel cantone di Friburgo e oltre.', 'Tecnicamente fanno parte della grande famiglia FLIRT di Stadler.'],
  kennzahlen: [['8', 'treni (191–198)'], ['160 km/h', 'velocità massima'], ['418', 'posti in totale'], ['2011', 'prima messa in servizio']],
  daten: { 'Bauart': 'elettrotreno, 4 casse', 'Gewicht': '122 t a vuoto', 'Sitzplätze': '24 in 1a, 143 in 2a classe', 'Anzahl': '8 treni' },
  specNote: 'Messi in servizio dal 2011 al 2014. Inoltre 42 strapontini e 209 posti in piedi, in totale 418 posti.',
  bilder: ['RABe 527 198 sul viadotto di Grandfey', 'FLIRT delle TPF a Bulle', 'RABe 527 come RegioExpress a Berna', 'RABe 527 196 a Neuchâtel']
});
uebZug('tpf-rbde-560', {
  typ: 'Treno navetta regionale ammodernato (Domino 3)',
  text: ['Dal 2009 al 2011 le TPF hanno trasformato i loro treni navetta NPZ in Domino a tre casse. Ogni treno ha ricevuto una nuova carrozza intermedia a pianale ribassato di Bombardier.', 'Due treni, il 235 e il 245, portano il design «Chocolat Express».'],
  kennzahlen: [['14', 'treni'], ['140 km/h', 'velocità massima'], ['1650 kW', 'potenza'], ['184', 'posti a sedere']],
  daten: { 'Bauart': 'treno navetta con automotrice, carrozza intermedia a pianale ribassato e carrozza pilota', 'Hersteller': 'SWG, SIG, ABB; carrozza intermedia Bombardier', 'Fahrzeugnummern': '235–247 e 269', 'Gewicht': '146 t a vuoto', 'Sitzplätze': '24 in 1a, 160 in 2a classe', 'Anzahl': '14 treni' },
  specNote: 'Automotrici costruite dal 1984 al 1996, ammodernate in Domino dal 2009 al 2011.',
  abschnitte: [
    { titel: 'Dotazione', liste: ['Informazione ai viaggiatori acustica e visiva', 'Climatizzazione', 'WC accessibile in sedia a rotelle', 'Zona multifunzionale', 'Carrozza intermedia a pianale ribassato'] },
    { titel: 'Chocolat Express', p: ['I treni 235 e 245 portano il design «Chocolat Express». Non si tratta di un tipo di veicolo a sé, ma di una livrea speciale su normali Domino.'] }
  ],
  bilder: ['Domino con design «Chocolat Express» sul viadotto di Grandfey']
});
uebZug('tpf-abe-4-12', {
  beiname: 'Serie 100',
  typ: 'Elettrotreno a pianale ribassato per la rete a scartamento metrico',
  text: ['I dieci treni Stadler a tre casse circolano sulla rete a scartamento metrico delle TPF in Gruyère e in Veveyse. Un treno è composto da una ABe 2/4, una carrozza intermedia B e una Be 2/4.', 'Fino a quattro treni possono viaggiare insieme.'],
  kennzahlen: [['10', 'treni (101–110)'], ['100 km/h', 'velocità massima'], ['350', 'posti in totale'], ['2015', 'prima messa in servizio']],
  daten: { 'Bauart': 'elettrotreno a pianale ribassato, 3 casse', 'Gewicht': '88 t a vuoto', 'Sitzplätze': '15 in 1a, 133 in 2a classe', 'Anzahl': '10 treni' },
  specNote: 'Messi in servizio nel 2015–2016. Inoltre 14 strapontini e 188 posti in piedi, in totale 350 posti.',
  bilder: ['ABe 4/12 davanti alla Dent du Chamois', 'ABe 4/12 presso Albeuve', 'ABe 2/4 101 a Montbovon', 'ABe 2/4 103']
});
uebZug('tpf-be-4-4-120', {
  typ: 'Treno navetta a scartamento metrico con carrozza intermedia e carrozza pilota',
  text: ['I treni navetta della serie 120 sono composti da un’automotrice Be 4/4, se necessario da una carrozza intermedia B e da una carrozza pilota (A)Bt. Circolano sulla rete a scartamento metrico delle TPF.', 'Le automotrici si chiamavano prima BDe 4/4 perché avevano un bagagliaio.'],
  kennzahlen: [['4', 'automotrici (121–124)'], ['90 km/h', 'velocità massima'], ['640 kW', 'potenza'], ['1992', 'prima messa in servizio']],
  daten: { 'Bauart': 'treno navetta: automotrice, carrozza intermedia, carrozza pilota', 'Hersteller': 'Vevey/BBC; carrozze intermedie SIG', 'Länge': '52,32 m (treno di 3 veicoli)', 'Sitzplätze': '134 in 2a classe; 9 in 1a classe solo nelle 221–223' },
  abschnitte: [{ titel: 'I veicoli', tabelle: { kopf: ['Veicolo', 'Numeri', 'Quantità', 'Anni di costruzione', 'Costruttore'], zeilen: [
    ['Automotrice Be 4/4', '121–124', '4', '1992–1995', 'Vevey/BBC'], ['Carrozza intermedia B', '207, 209, 215', '3', '1973', 'SIG'], ['Carrozza pilota (A)Bt', '221–226', '6', '1992–1995', 'Vevey/BBC']] } },
    { p: ['I treni sono modulari: carrozze intermedie e carrozze pilota vengono aggiunte secondo la domanda.'] }],
  bilder: ['Be 4/4 123', 'Automotrice 124, allora ancora BDe 4/4 (2010)', 'Carrozza pilota 221 a Bulle', 'Carrozza pilota 225']
});
uebZug('tpf-funiculaire', {
  typ: 'Funicolare Neuveville–St-Pierre con zavorra ad acqua',
  text: ['Dal 1899 la funicolare di Friburgo collega la città bassa, la Neuveville, con St-Pierre. Supera 58 metri di dislivello su 121 metri.', 'La sua particolarità è il funzionamento: le acque reflue della città di Friburgo fungono da contrappeso. Secondo le TPF è un caso unico in Europa.'],
  kennzahlen: [['1899', 'apertura'], ['121 m', 'lunghezza della linea'], ['550 ‰', 'pendenza massima'], ['2 min', 'tempo di percorrenza']],
  daten: { 'Bauart': 'funicolare con zavorra ad acqua', 'Kabinen': '2 da 20 posti ciascuna', 'Länge': '121 m di linea, vettura 5,4 m', 'Gewicht': '1600 kg per vettura', 'Kapazität': '240 persone all’ora' },
  abschnitte: [{ titel: 'Esercizio', p: ['La funicolare circola su un binario unico con un incrocio, circa 70 corse di andata e ritorno al giorno. La stazione a valle Neuveville si trova a 552 m, quella a monte St-Pierre a 608 m. L’ultima grande revisione risale al 2020.'] }],
  bilder: ['Funicolare Neuveville–St-Pierre a Friburgo (2024)']
});
uebZug('tpf-tm-87', {
  typ: 'Trattore di servizio diesel-idraulico con gru di carico',
  text: ['Il Tm 87 è un trattore di servizio del tipo Tm 234 per la rete a scartamento normale delle TPF. Serve alla manutenzione dell’infrastruttura, traina treni pesanti e sgombera la neve.', 'Ha una gru di carico e può essere telecomandato.'],
  kennzahlen: [['550 kW', 'potenza'], ['80 km/h', 'velocità massima'], ['30 t', 'peso'], ['2000', 'prima messa in servizio']],
  daten: { 'Bauart': 'trattore diesel-idraulico con gru di carico', 'Gewicht': '30 t a vuoto', 'Kran': 'Palfinger, 1200 kg a 7,2 m' }
});
uebZug('tpf-tmf-17', {
  typ: 'Trattore diesel per la rete a scartamento metrico',
  text: ['Il Tmf 2/2 17 di Schöma è un trattore diesel a due assi per la rete a scartamento metrico delle TPF. Lavora nel servizio cantieri, traina treni pesanti e sgombera la neve.', 'Può anche essere telecomandato.'],
  kennzahlen: [['330 kW', 'potenza'], ['65 km/h', 'velocità massima'], ['28 t', 'peso'], ['2011', 'prima messa in servizio']],
  daten: { 'Bauart': 'trattore diesel a due assi', 'Gewicht': '28 t a vuoto', 'Motor': 'Deutz, 6 cilindri', 'Anhängelast': '200 t in piano, 90 t al 50 ‰' }
});
uebZug('tpf-gem-18', {
  typ: 'Locomotiva bimodale per la rete a scartamento metrico',
  text: ['La Gem 2/2 18 di Stadler viaggia elettricamente sotto la linea di contatto e a diesel altrove. Le TPF la impiegano nel servizio cantieri, per treni pesanti e per lo sgombero neve.', 'La cabina ospita otto persone.'],
  kennzahlen: [['700 kW', 'elettrica'], ['400 kW', 'diesel'], ['80 km/h', 'velocità massima'], ['2016', 'prima messa in servizio']],
  daten: { 'Bauart': 'locomotiva bimodale (elettrica e diesel)', 'Gewicht': '28 t a vuoto', 'Leistung': '700 kW elettrica, 400 kW diesel', 'Anhängelast': '300 t in piano, 120 t al 50 ‰' },
  bilder: ['Gem 2/2 18']
});
uebZug('tpf-x-925', {
  name: 'X 925', beiname: 'Carro gru',
  typ: 'Carro gru per scartamento metrico e normale',
  text: ['Il carro gru X 925 porta una gru Palfinger radiocomandata. Il telaio risale al 1972, la trasformazione in carro gru è entrata in servizio nel 2016.', 'La piattaforma della gru può essere trasferita sul carro portante a scartamento normale Sgjs X113. Così la gru può lavorare anche sulla rete a scartamento normale delle TPF.'],
  kennzahlen: [['1500 kg', 'a 14 m di sbraccio'], ['65 km/h', 'velocità massima'], ['52 t', 'peso totale'], ['2016', 'prima messa in servizio']],
  daten: { 'Bauart': 'carro gru a quattro assi 2’2’', 'Spurweite': 'scartamento metrico, 1000 mm; gru anche sul carro portante a scartamento normale Sgjs X113', 'Gewicht': '37,825 t a vuoto, 52 t carico', 'Kran': 'Palfinger PKR290, 1500 kg a 14 m' }
});
uebZug('tpf-retrozug', {
  name: 'Treno rétro',
  typ: 'Treno storico a scartamento metrico delle TPF per corse speciali',
  text: ['Il treno rétro delle TPF è composto dall’automotrice Be 4/4 116 e da tre carrozze del 1930–1932. Le TPF lo impiegano per i treni della fondue e altre corse speciali.', 'L’automotrice del 1922 è stata completamente ricostruita come in origine dalle TPF nel 1999.'],
  kennzahlen: [['1922', 'automotrice costruita'], ['482 kW', 'potenza'], ['65 km/h', 'velocità massima'], ['186', 'posti']],
  daten: { 'Bauart': 'automotrice con tre carrozze', 'Hersteller': 'SWS (automotrice), SIG (carrozze)', 'Länge': '61,58 m (treno completo)', 'Höchstgeschwindigkeit': '65 km/h (30 km/h in servizio)', 'Sitzplätze': '176 in 2a classe, più 10 strapontini' },
  abschnitte: [{ titel: 'I veicoli', tabelle: { kopf: ['Veicolo', 'Anno di costruzione', 'Costruttore'], zeilen: [
    ['Automotrice Be 4/4 116', '1922 (ricostruita nel 1999)', 'SWS'], ['Carrozza B 243', '1930', 'SIG'], ['Carrozza Brs 245', '1931', 'SIG'], ['Carrozza Br 247', '1932', 'SIG']] } }],
  bilder: ['Treno rétro delle TPF', 'Be 4/4 116 a Bulle (2011)', 'Interno del treno rétro']
});
uebZug('gfm-be-111', {
  typ: 'Automotrice elettrica del 1903 (storica)',
  text: ['L’automotrice 111 del 1903 risale agli inizi delle ferrovie elettriche in Gruyère. Oggi fa parte della collezione di GFM Historique.', 'Dal 2006 al 2011 è stata prestata alla ferrovia museo Blonay–Chamby.'],
  kennzahlen: [['1903', 'costruita'], ['111', 'numero'], ['scartamento metrico', 'scartamento'], ['GFM Historique', 'oggi']],
  daten: { 'Bauart': 'automotrice elettrica', 'Betreiber': 'CEG/GFM, oggi GFM Historique' },
  specNote: 'GFM Historique la chiama «Be 4/4 111», Wikipedia «BCe 4/4 111».',
  bilder: ['Automotrice 111 alla ferrovia museo Blonay–Chamby']
});
uebZug('gfm-be-115', {
  typ: 'Automotrice nostalgica del 1905 (storica)',
  text: ['La Be 4/4 115 del 1905 ha circolato a lungo come automotrice nostalgica sulla rete a scartamento metrico delle GFM, poi delle TPF.', 'È stata demolita nell’ottobre 2016.'],
  kennzahlen: [['1905', 'costruita'], ['2016', 'demolita'], ['115', 'numero'], ['scartamento metrico', 'scartamento']],
  daten: { 'Bauart': 'automotrice elettrica', 'Betreiber': 'GFM, poi TPF', 'Verbleib': 'demolita nell’ottobre 2016' },
  bilder: ['Be 4/4 115 a Bulle (1995)', 'Be 4/4 115 con Bt 254 a Broc-Fabrique (2011)']
});
uebZug('gfm-be-131', {
  typ: 'Automotrici elettriche del 1943 (storiche)',
  text: ['Le tre automotrici dalla 131 alla 133 furono costruite nel 1943 per la rete a scartamento metrico delle GFM.', 'La 132 è stata demolita nel 1989 e la 133 nel 2003. La 131 è conservata e fa parte della collezione di GFM Historique come Ce 4/4 131.'],
  kennzahlen: [['3', 'automotrici'], ['1943', 'costruite'], ['131', 'conservata'], ['scartamento metrico', 'scartamento']],
  daten: { 'Bauart': 'automotrice elettrica', 'Verbleib': '131 conservata, 132 demolita nel 1989, 133 demolita nel 2003' }
});
uebZug('gfm-bde-141', {
  typ: 'Automotrici per treni di ghiaia del 1972 (storiche)',
  text: ['Le due potenti automotrici del 1972 furono costruite inizialmente per i treni di ghiaia. Dal 1981 ricevettero un compartimento con posti a sedere e circolarono anche con le carrozze pilota 251–256.', 'La 141 è passata a GFM Historique nel 2017, la 142 è stata demolita nell’aprile 2017.'],
  kennzahlen: [['2', 'automotrici'], ['1972', 'costruite'], ['70 km/h', 'velocità massima'], ['36,5 t', 'peso']],
  daten: { 'Bauart': 'automotrice elettrica con bagagliaio', 'Hersteller': 'SWP (parte meccanica), SAAS (parte elettrica)', 'Betreiber': 'GFM, poi TPF', 'Sitzplätze': '40 (dal 1981)', 'Verbleib': '141 presso GFM Historique, 142 demolita nel 2017' },
  bilder: ['BDe 4/4 141 con carrozza pilota', 'BDe 4/4 142 a Bulle (2014)', 'BDe 4/4 142 a Bulle']
});
uebZug('gfm-be-151', {
  typ: 'Automotrici per treni navetta del 1977 (storiche)',
  text: ['Le automotrici 151 e 152 del 1977 avevano una sola cabina di guida. Circolavano quindi sempre con una delle carrozze pilota 251–256.', 'Entrambe sono state demolite nell’aprile 2017.'],
  kennzahlen: [['2', 'automotrici'], ['1977', 'costruite'], ['1', 'cabina di guida'], ['2017', 'demolite']],
  daten: { 'Bauart': 'automotrice elettrica con una cabina di guida', 'Betreiber': 'GFM, poi TPF', 'Einsatz': 'treno navetta con carrozze pilota 251–256', 'Verbleib': 'demolite nell’aprile 2017' },
  bilder: ['Be 4/4 151 con la carrozza pilota Bt 256', 'Be 4/4 152 a Montbovon (1995)']
});
uebZug('gfm-gde-101', {
  typ: 'Locomotiva elettrica a scartamento metrico delle GFM (oggi alla MOB)',
  text: ['La GDe 4/4 101 «Ville de Bulle» era l’unica grande locomotiva elettrica a scartamento metrico delle GFM.', 'È stata venduta alla Montreux–Oberland Bernese e vi circola come GDe 4/4 6005.'],
  kennzahlen: [['1983', 'costruita'], ['SLM / BBC', 'costruttore'], ['6005', 'numero attuale alla MOB'], ['scartamento metrico', 'scartamento']],
  daten: { 'Bauart': 'locomotiva elettrica', 'Hersteller': 'SLM e BBC', 'Betreiber': 'GFM, oggi MOB', 'Fahrzeugnummern': '101, alla MOB 6005', 'Verbleib': 'venduta alla MOB' },
  specNote: 'L’anno della vendita è indicato in modo diverso nelle fonti (2007 o 2017).',
  bilder: ['L’ex GDe 4/4 101 come MOB 6005 presso Saanenmöser (2014)']
});
uebZug('gfm-te-22', {
  typ: 'Trattori di manovra elettrici del 1913 (storici)',
  text: ['I due piccoli trattori di manovra del 1913 manovravano sulla rete a scartamento metrico delle GFM: il Te 2/2 11 a Bulle, il Te 2/2 12 a Montbovon.', 'Il 12 è stato ritirato nel 2012.'],
  kennzahlen: [['2', 'trattori'], ['1913', 'costruiti'], ['Bulle', 'Te 2/2 11'], ['Montbovon', 'Te 2/2 12']],
  daten: { 'Bauart': 'trattore di manovra elettrico', 'Hersteller': 'parte elettrica MFO (11), Alioth (12)', 'Betreiber': 'GFM, poi TPF' },
  specNote: 'Per il 12 Wikipedia indica la demolizione nel 2012; su Commons ci sono anche foto del 2026.',
  bilder: ['Te 2/2 12 a Montbovon', 'Te 2/2 12 di lato']
});
uebZug('gfm-te-44', {
  typ: 'Trattori di manovra trasformati da automotrici (storici)',
  text: ['I Te 4/4 13 e 14 furono costruiti nel 1901 come automotrici e trasformati in trattori di manovra nel 1927 e nel 1933.', 'Il 13 manovrava a Broc-Fabrique, il 14 trainava treni cantiere. Il 13 è stato ritirato nel 2017.'],
  kennzahlen: [['2', 'trattori'], ['1901', 'costruiti'], ['1927 / 1933', 'trasformati'], ['scartamento metrico', 'scartamento']],
  daten: { 'Bauart': 'trattore di manovra elettrico', 'Hersteller': 'parte elettrica Alioth', 'Betreiber': 'GFM, poi TPF', 'Einsatz': 'manovra a Broc-Fabrique, treni cantiere' },
  bilder: ['Te 4/4 13', 'Te 4/4 14']
});
uebZug('gfm-tm-15', {
  typ: 'Trattore diesel per treni cantiere e manovra (storico)',
  text: ['Il piccolo trattore diesel Tm 2/2 15 fu costruito da Schöma nel 1971 e trasformato nel 1981. Trainava treni cantiere e manovrava a Bulle.'],
  kennzahlen: [['1971', 'costruito'], ['1981', 'trasformato'], ['Schöma', 'costruttore'], ['Bulle', 'luogo d’impiego']],
  daten: { 'Bauart': 'trattore diesel a due assi', 'Betreiber': 'GFM, poi TPF', 'Einsatz': 'treni cantiere, manovra a Bulle' },
  bilder: ['Tm 2/2 15 a Bulle (2005)']
});
uebZug('gfm-abde-24', {
  typ: 'Automotrice della ferrovia Friburgo–Morat–Anet (storica)',
  text: ['Le ABDe 2/4 arrivarono nel 1931 alla ferrovia Friburgo–Morat–Anet, ancora per la corrente continua. Nel 1946 furono convertite alla corrente alternata.', 'La ABDe 2/4 155 è stata demolita nel 2025; le sue cabine di guida sono andate a ÖV Historique.'],
  kennzahlen: [['1931', 'consegnata'], ['1946', 'convertita alla corrente alternata'], ['155', 'l’ultima conservata'], ['scartamento normale', 'scartamento']],
  daten: { 'Bauart': 'automotrice elettrica', 'Betreiber': 'FMA, poi GFM', 'Stromsystem': 'prima corrente continua, dal 1946 15 kV 16,7 Hz', 'Verbleib': '155 demolita nel 2025, cabine presso ÖV Historique' },
  bilder: ['ABDe 2/4 155']
});
uebZug('gfm-abde-44', {
  typ: 'Automotrici a scartamento normale delle GFM (storiche)',
  text: ['Le ABDe 4/4 dalla 161 alla 167 di SIG e BBC furono costruite dal 1946 al 1948 e modernizzarono le linee a scartamento normale delle GFM. La maggior parte fu trasformata nel 1965.', 'Diverse automotrici sono state nel frattempo demolite.'],
  kennzahlen: [['1946', 'prime costruite'], ['1965', 'trasformate'], ['SIG / BBC', 'costruttore'], ['48', 'posti (16 + 32)']],
  daten: { 'Bauart': 'automotrice elettrica', 'Hersteller': 'SIG e BBC', 'Fahrzeugnummern': '161–167 (166 come ABe 4/4)', 'Sitzplätze': '16 in 1a, 32 in 2a classe', 'Verbleib': '162, 163 e 167 demolite' },
  bilder: ['ABDe 4/4 162 a Ins', 'ABDe 4/4 167 a Bulle']
});
uebZug('gfm-rbde-567', {
  typ: 'Vecchi treni navetta regionali delle GFM e delle TPF',
  text: ['Le automotrici dalla 171 alla 173 del 1983 e dalla 181 alla 182 del 1991 fanno parte della famiglia NPZ delle ferrovie private. La 173 è arrivata dalla RVT nel 1992.', 'Non figurano più nella panoramica attuale della flotta TPF; la 171 è stata ancora fotografata nel 2024.'],
  kennzahlen: [['5', 'automotrici'], ['1983', 'prime costruite'], ['1991', 'seconda serie'], ['scartamento normale', 'scartamento']],
  daten: { 'Bauart': 'automotrice elettrica per treni navetta', 'Hersteller': 'SIG, SWS, BBC (171–173); SWP, SIG, ABB (181–182)', 'Betreiber': 'GFM, poi TPF' },
  bilder: ['Automotrice 182 a Ins (2000)', 'Automotrice 171 (2005)']
});
uebZug('gfm-ee-91', {
  typ: 'Locomotiva di manovra elettrica a scartamento normale (storica)',
  text: ['La piccola locomotiva di manovra Ee 2/2 91 fu costruita nel 1960 da SIG e BBC. Manovrava sulla rete a scartamento normale delle GFM, per esempio a Bulle, e in seguito portò il numero 217 091.'],
  kennzahlen: [['1960', 'costruita'], ['SIG / BBC', 'costruttore'], ['217 091', 'numero successivo'], ['scartamento normale', 'scartamento']],
  daten: { 'Bauart': 'locomotiva di manovra elettrica', 'Hersteller': 'SIG e BBC', 'Betreiber': 'GFM, poi TPF', 'Fahrzeugnummern': '91 (poi 217 091)' },
  bilder: ['Ee 2/2 91 (217 091) a Bulle (2005)']
});
uebZug('gfm-wagen', {
  name: 'Carri storici',
  typ: 'Carrozze e carri conservati delle GFM',
  text: ['Oltre ai veicoli motori sono conservati anche carri delle GFM. GFM Historique custodisce la carrozza B 235 del 1903 e la carrozza pilota CFt4 273.', 'I carri coperti K 671 e K 672 si trovano alla ferrovia museo Blonay–Chamby.'],
  kennzahlen: [['B 235', 'carrozza del 1903'], ['CFt4 273', 'carrozza pilota'], ['K 671, K 672', 'carri merci'], ['scartamento metrico', 'scartamento']],
  daten: { 'Bauart': 'carrozze, carrozze pilota e carri merci', 'Betreiber': 'CEG/GFM, oggi associazioni museali', 'Erhalten': 'GFM Historique; Blonay–Chamby' },
  bilder: ['Carro coperto K 671 a Vevey (2016)', 'Carro K 671 presso la fabbrica di cioccolato di Broc']
});
