/* Italiano – veicoli di servizio */
uebDict({
  'Lösch- und Rettungszug': 'Treno di spegnimento e salvataggio',
  'Normalspur, 1435 mm': 'scartamento normale, 1435 mm',
  'Tanklöschwagen + Gerätefahrzeug + Rettungsfahrzeug': 'carro cisterna antincendio + veicolo attrezzi + veicolo di salvataggio',
  'Eisenbahndrehkran': 'gru ferroviaria girevole',
  'nein': 'no',
  'aktiv': 'attivo'
});

uebZug('lrz-18', {
  beiname: 'Treno di spegnimento e salvataggio',
  typ: 'Treno di spegnimento e salvataggio della generazione 2018',
  text: ['La generazione TSS 18 comprende sei moderni treni di spegnimento e salvataggio semoventi. Le FFS li hanno ordinati in due lotti di tre composizioni; tutti erano consegnati entro la fine del 2018.', 'A seconda della sede la composizione comprende carro cisterna antincendio, veicolo attrezzi e uno o due veicoli di salvataggio.'],
  kennzahlen: [['6', 'composizioni'], ['2018', 'consegna completa'], ['6 × 390 kW', 'trazione della versione a quattro elementi'], ['100 km/h', 'velocità massima']],
  daten: { 'Hersteller': 'Windhoff / Dräger (impianto di spegnimento Vogt)', 'Ausführungen': 'a 3 o 4 elementi', 'Länge': '83,22 m (quattro elementi)', 'Gewicht': 'circa 326 t (quattro elementi)', 'Leistung': '6 × 390 kW (quattro elementi)', 'Pumpenleistung': 'fino a 6000 l/min a 10 bar', 'Rettungskapazität': 'fino a 60 persone per veicolo di salvataggio', 'Schleppleistung': 'fino a 1600 t in galleria', 'Autonomer Betrieb': 'circa 4–5 ore', 'Anzahl': '6 composizioni (2 lotti da 3)' },
  specNote: 'Lunghezza, massa e potenza valgono per il TSS 18 a quattro elementi; i treni a tre elementi sono di conseguenza più corti e leggeri.',
  abschnitte: [
    { titel: 'Acquisto in due lotti', p: ['Dopo il primo ordine di tre treni per Ginevra, Melide e Briga, nel 2016 le FFS hanno esercitato un’opzione per altre tre composizioni destinate a Zurigo, Winterthur e Berna.', 'La generazione comprende così sei treni; la consegna si è conclusa alla fine del 2018.'] },
    { titel: 'Salvataggio in galleria e lotta antincendio', p: ['Un’alimentazione d’aria respirabile indipendente rifornisce le cabine di guida e i locali di salvataggio. Ogni veicolo di salvataggio accoglie nel suo locale protetto fino a circa 60 persone; in galleria il treno può trainare fino a 1600 tonnellate.', 'L’allestimento antincendio offre 45 000 litri d’acqua e pompe fino a 6000 litri al minuto.'] }
  ],
  bilder: ['TSS 18 «Bern» presso Einigen', 'TSS 18 a Ginevra', 'Veicolo di salvataggio del TSS 18 a Ginevra', 'TSS 18 a Ginevra, vista laterale', 'Veicolo attrezzi di soccorso Xtmas 99 85 9177 015 all’Innotrans 2018']
});

uebZug('lrz-14', {
  beiname: 'Treno di spegnimento e salvataggio',
  typ: 'Treno di spegnimento e salvataggio a quattro elementi per lunghe gallerie',
  text: ['Il TSS 14 è un’evoluzione più potente a quattro elementi per lunghe gallerie ferroviarie. Dispone di un secondo veicolo di salvataggio.', 'Due composizioni sono state acquistate nell’ambito del potenziamento del concetto d’intervento per l’asse del San Gottardo.'],
  kennzahlen: [['2', 'composizioni'], ['2014–2016', 'costruzione e messa in servizio'], ['6 × 390 kW', 'potenza di trazione installata'], ['100 km/h', 'velocità massima']],
  daten: { 'Formation': 'carro cisterna antincendio + veicolo attrezzi + 2 veicoli di salvataggio', 'Rettungsfahrzeuge': 'ciascuno 22,06 m / 78 t', 'Gewicht': 'circa 326 t', 'Atemluft': 'circa 1,98 mio. l', 'Anhängelast': '940 t al 27 ‰', 'Anzahl': '2 composizioni', 'Einsatz': 'asse del San Gottardo e rete delle gallerie' },
  specNote: 'La designazione TSS 14 indica la generazione. La messa in servizio è avvenuta a tappe fino all’apertura della galleria di base del San Gottardo.',
  abschnitte: [
    { titel: 'Acquisto', p: ['Le due composizioni sono state acquistate dal 2012 e rese operative prima della messa in servizio della galleria di base del San Gottardo.'] },
    { titel: 'Due unità di salvataggio', p: ['Ogni veicolo di salvataggio offre posto a circa 60 persone, oppure a 40 persone e sei barelle. I locali pressurizzati, le chiuse e gli attacchi medici permettono evacuazioni da tratti di galleria invasi dal fumo.'] },
    { titel: 'Profilo di prestazioni', p: ['Grazie al secondo veicolo di salvataggio, la composizione a quattro elementi offre più capacità di salvataggio e più aria respirabile delle generazioni precedenti. Più veicoli motorizzati assicurano elevato sforzo di trazione e ridondanza.'] }
  ],
  bilder: ['Nuovo TSS 14 al centro di manutenzione e intervento di Erstfeld', 'TSS 14 «Uri» nella stazione di Erstfeld', 'TSS 14 «Uri» dei pompieri aziendali di Erstfeld', 'TSS 14 a Erstfeld']
});

uebZug('lrz-08', {
  beiname: 'Treno di spegnimento e salvataggio',
  typ: 'Treno di spegnimento e salvataggio della generazione 2008',
  text: ['Le FFS hanno acquistato otto treni di spegnimento e salvataggio della generazione TSS 08, composti da carro cisterna antincendio, veicolo attrezzi e veicolo di salvataggio.', 'Sono stati concepiti per interventi rapidi sulla rete all’aperto e in galleria.'],
  kennzahlen: [['8', 'composizioni'], ['2008–2010', 'consegna'], ['4 × 390 kW', 'potenza di trazione installata'], ['100 km/h', 'velocità massima']],
  daten: { 'Gewicht': 'circa 248 t', 'Atemluft': 'circa 1,44 mio. l', 'Rettungsplätze': 'circa 60, oppure 40 + 9 barelle', 'Anhängelast': '730 t al 27 ‰', 'Anzahl': '8 composizioni', 'In Betrieb seit': '2008–2010 (consegna)' },
  abschnitte: [
    { titel: 'Acquisto', p: ['La generazione è stata ordinata nel 2006 e consegnata dal 2008 al 2010. Otto composizioni hanno completato la rete d’intervento delle FFS.'] },
    { titel: 'Funzione', p: ['Carro cisterna, veicolo attrezzi e veicolo di salvataggio lavorano come un’unità. Due powerpack da 390 kW nel veicolo attrezzi e due nel veicolo di salvataggio azionano il treno.', 'Il locale di salvataggio pressurizzato funziona indipendentemente dall’aria esterna e permette di evacuare persone da zone invase dal fumo.'] }
  ],
  bilder: ['TSS 08 (TES 08 Olten) a Renens', 'Veicolo di salvataggio XTmas 99 85 9174 004 «Lausanne» a Berna', 'XTmas 99 85 9174 008 «Olten» a Losanna', 'TSS 08 a Winterthur']
});

uebZug('lrz-04', {
  beiname: 'Treno di spegnimento e salvataggio',
  typ: 'Treno di spegnimento e salvataggio della generazione 2004',
  text: ['Il TSS 04 è stato la prima generazione recente del treno di spegnimento e salvataggio FFS e ha avviato il passaggio dal treno trainato da locomotiva al treno semovente.', 'L’unica composizione riunisce agenti estinguenti, locale di salvataggio e trazione propria per gli interventi sulle linee e in galleria.'],
  kennzahlen: [['1', 'composizione di questa generazione'], ['2004', 'messa in servizio'], ['4 × 315 kW', 'potenza di trazione installata'], ['100 km/h', 'velocità massima']],
  daten: { 'Gewicht': 'circa 210 t', 'Atemluft': 'circa 1,44 mio. l', 'Anzahl': '1 composizione', 'Einsatz': 'spegnere, salvare, recuperare' },
  specNote: 'Numero e anno si riferiscono alla generazione autonoma TSS 04. Le generazioni successive sono contate separatamente.',
  abschnitte: [
    { titel: 'Struttura', p: ['I veicoli trasportano acqua, schiuma, materiale di salvataggio e di recupero. Veicolo attrezzi e veicolo di salvataggio hanno ciascuno due powerpack; il treno non ha quindi bisogno di una locomotiva ausiliaria.', 'Il veicolo di salvataggio dispone di un locale interno protetto, alimentato ad aria respirabile, per evacuazioni da gallerie invase dal fumo.'] },
    { titel: 'Impiego', p: ['Il treno interviene in caso di eventi sulla rete ferroviaria, in particolare nelle gallerie lunghe e sui tratti difficilmente accessibili.'] }
  ],
  bilder: ['TSS 04 a Briga, 2016', 'TSS 04 a Hohtenn', 'TSS 04 nella stazione di Hohtenn']
});

uebZug('xrotm', {
  name: 'Frese da neve',
  typ: 'Veicoli speciali per lo sgombero della neve',
  text: ['FFS Infrastruttura utilizza diversi tipi di frese da neve semoventi.', 'Il regolamento d’esercizio distingue quattro serie, che svolgono compiti diversi secondo la quantità di neve, la linea e il luogo d’impiego.'],
  kennzahlen: [['4', 'serie nel regolamento'], ['17', 'veicoli secondo i campi di numerazione'], ['60–80 km/h', 'Vmax dei tipi grandi'], ['95–115', 'numeri d’esercizio']],
  daten: { 'Xrotm 4/4': 'n. 95–96, 2 veicoli, 80 km/h', 'Xrotm 2/3': 'n. 97, 1 veicolo, 60 km/h', 'XTm': 'n. 102–109, 8 veicoli, 45 km/h (100 km/h al traino)', 'Xrotm ex Tm 232': 'n. 110–115, 6 veicoli, 80 km/h (90 km/h al traino)', 'Anzahl': '17 secondo i campi di numerazione', 'Einsatz': 'sgombero di neve e accumuli' },
  specNote: 'Il numero risulta dai campi di numerazione pubblicati nel regolamento d’esercizio FFS e non è un effettivo confermato separatamente.',
  abschnitte: [
    { titel: 'Impiego', p: ['Le grandi Xrotm 95, 96 e 97 sono impiegate in caso di forti nevicate, tra l’altro sulla linea panoramica del San Gottardo.', 'Le più piccole Xrotm 110–115 sono adatte alle stazioni e alle linee meno trafficate.'] },
    { titel: 'Esercizio', p: ['Le frese da neve sono veicoli speciali con organi di sgombero rotanti. A seconda della serie variano trazione propria, capacità di sgombero, velocità in linea e velocità di traino ammessa.'] }
  ],
  bilder: ['Fresa da neve Xrotm a Erstfeld', 'Fresa da neve Xrotm n. 95 a Erstfeld', 'Xrotm 95 nella stazione di Erstfeld', 'Numero di veicolo della Xrotm 95', 'Xrotm 4/4 95 a Erstfeld']
});

uebZug('diagnose', {
  name: 'Veicolo diagnostico',
  typ: 'Veicolo diagnostico semovente Mermec Xtmass',
  text: ['Il veicolo diagnostico semovente Xtmass ROGER 1000 controlla lo stato dell’infrastruttura ferroviaria ad alta velocità.', 'Sistemi di misura rilevano binario, linea di contatto e altri impianti senza interrompere inutilmente l’esercizio regolare.'],
  kennzahlen: [['160 km/h', 'velocità massima'], ['672 kW', 'potenza massima'], ['64 t', 'massa a vuoto'], ['23,9 m', 'lunghezza del veicolo']],
  daten: { 'Fahrzeugart': 'veicolo diagnostico semovente', 'Gewicht': '64 t a vuoto, al massimo 66 t', 'Einsatz': 'misura del binario e della linea di contatto' },
  abschnitte: [
    { titel: 'Compiti di misura', p: ['ROGER 1000 riunisce diversi sistemi di misura e diagnosi in un unico veicolo. L’alta velocità permette controlli sulle linee principali con scarso impatto sull’orario.'] },
    { titel: 'Impiego oltre la Svizzera', p: ['Mermec documenta una campagna di misura del veicolo FFS su una linea ad alta velocità tedesca. Ciò dimostra l’idoneità per corse di misura su reti ad alte prestazioni.'] }
  ],
  bilder: ['Automotrice di misura XTmass 99 85 9160 001 di MerMec a Losanna', 'ROGER 1000 (XTmass 99 85 9160 001) a Losanna, 2009']
});

uebZug('kirow-krc-1100', {
  typ: 'Pesante gru ferroviaria girevole per intervento e costruzione',
  text: ['La gru FFS della classe Kirow 1100 appartiene alla nuova generazione di grandi gru.', 'Insieme alla Multi Tasker 1200 ha sostituito le due vecchie KRC 800.'],
  kennzahlen: [['1', 'gru FFS di questa classe'], ['2019', 'conclusione del programma di sostituzione'], ['125 t', 'portata massima'], ['16°', 'rotazione con binario vicino libero']],
  daten: { 'Bauart': 'gru ferroviaria girevole', 'Schwenkwinkel': 'fino a 16° con binario vicino libero', 'Eigenmasse': '112 t in assetto di trasporto (scheda tecnica del costruttore)', 'Transport': 'con carro di protezione, contrappeso appoggiato sopra', 'Netz': 'rete FFS a scartamento normale', 'Vorgänger': 'una delle due KRC 800', 'In Betrieb seit': '2019 (programma di sostituzione 2016–2019)', 'Einsatz': 'recupero, ponti provvisori, lavori pesanti' },
  specNote: '125 t è la portata massima e non la massa della gru. Le 112 t in assetto di trasporto provengono dalla scheda tecnica Kirow della KRC 1100, non da un documento FFS.',
  abschnitte: [
    { titel: 'Acquisto', p: ['Nel dicembre 2017 le FFS hanno scelto la KRC 1100. Kirow descrive la sostituzione delle due KRC 800 con due nuove grandi gru tra il 2016 e il 2019; una di esse appartiene alla classe 1100.'] },
    { titel: 'Lavori accanto a binari in esercizio', p: ['Secondo il costruttore il contrappeso smussato permette una rotazione fino a 16 gradi lasciando libera la sagoma del binario vicino. In posizione di trasporto il contrappeso poggia su un carro di protezione.'] },
    { titel: 'Indicazione delle prestazioni', p: ['La portata massima vale solo in condizioni definite. Il carico ammesso diminuisce con lo sbraccio e dipende dagli stabilizzatori e dalla posizione del binario.'] }
  ]
});

uebZug('kirow-800', {
  typ: 'Gru ferroviarie storiche degli anni 1990',
  text: ['Nel 1996 le FFS hanno ricevuto due gru Kirow della classe KRC 800.', 'Servivano ai lavori pesanti di recupero e costruzione e sono state sostituite tra il 2016 e il 2019 da nuove grandi gru.'],
  kennzahlen: [['2', 'gru consegnate'], ['1996', 'consegna'], ['203 t', 'massa del convoglio gru'], ['80 km/h', 'velocità massima']],
  daten: { 'Formation': 'gru con carro di protezione e carro squadra', 'Gewicht': 'circa 203 t (intero convoglio)', 'Länge': 'circa 48 m (intero convoglio)', 'Nachfolger': 'KRC 1100 e Multi Tasker 1200' },
  abschnitte: [
    { titel: 'Impiego', p: ['Le due gru erano usate per sollevamenti pesanti nei cantieri e dopo eventi. La loro portata dipende da sbraccio, stabilizzatori e posizione del binario.', 'Per i trasferimenti venivano condotte come convoglio di treno merci con carro di protezione e carro squadra.'] },
    { titel: 'Sostituzione', p: ['Kirow documenta la sostituzione delle due gru consegnate nel 1996 con una Multi Tasker 1200 e una gru della classe 1100 tra il 2016 e il 2019.'] }
  ]
});

uebZug('kirow-250', {
  typ: 'Gru ferroviaria girevole per sollevamenti medi',
  text: ['La Kirow KRC 250 è una gru ferroviaria girevole per lavori di costruzione e manutenzione.', 'Almeno una gru FFS di questo tipo è attestata al più tardi nel 2005; un numero totale esatto e un anno d’acquisto non sono documentati pubblicamente in modo affidabile.'],
  kennzahlen: [['169 t', 'massa del convoglio gru'], ['47 m', 'lunghezza del convoglio'], ['80 km/h', 'velocità massima'], ['2005', 'al più tardi nell’effettivo FFS']],
  daten: { 'Formation': 'gru con carro di protezione o di contrappeso e carro squadra', 'Gewicht': 'circa 169 t (intero convoglio)', 'Länge': 'circa 47 m (intero convoglio)', 'Antrieb': 'azionamento idraulico della gru, senza trazione propria', 'Tragfähigkeit': 'secondo lo sbraccio', 'Anzahl': 'almeno 1, numero totale non attestato', 'Im SBB-Bestand': 'al più tardi nel 2005 (prova fotografica)' },
  specNote: 'Numero e anno sono indicati di proposito solo come minimo: una KRC 250 FFS è documentata in foto nel 2005. Massa della gru e portata sono valori diversi.',
  abschnitte: [
    { titel: 'Compito', p: ['La KRC 250 solleva campate di binario, componenti di scambi e altri carichi pesanti. Carri di protezione e di contrappeso fanno parte del convoglio d’esercizio; il carro squadra offre locali di lavoro e di sosta.'] },
    { titel: 'Fonti', p: ['Il catalogo dei tipi di marcia FFS attesta tipo costruttivo, composizione e dati di marcia. Non vi figurano né un effettivo attuale né un anno d’acquisto.', 'Una foto attesta almeno una KRC 250 FFS nel 2005. Dalle fonti pubbliche non si può attualmente dire di più con certezza.'] }
  ]
});

uebZug('kirow-krc-100', {
  typ: 'Gru ferroviaria girevole compatta per costruzione e intervento',
  text: ['La Kirow KRC 100 è una gru ferroviaria girevole compatta delle FFS. Dodici veicoli sono stati consegnati nel 2006 e nel 2007.', 'Il piccolo raggio posteriore e il contrappeso fisso permettono di lavorare influenzando poco i binari vicini.'],
  kennzahlen: [['12', 'gru consegnate'], ['2006–2007', 'consegna'], ['70 t', 'massa in servizio della gru'], ['120 km/h', 'ammessa al traino']],
  daten: { 'Länge': '11,0 m respingenti compresi', 'Gewicht': '70 t in servizio', 'Tragfähigkeit': 'secondo lo sbraccio, portata massima non documentata', 'Höchstgeschwindigkeit': '120 km/h al traino', 'Gegengewicht': 'fisso', 'In Betrieb seit': '2006–2007 (dic. 2006 – ott. 2007)', 'Einsatz': 'costruzione di binari, posa di pali, intervento' },
  specNote: 'La portata delle gru ferroviarie dipende fortemente da sbraccio, stabilizzatori e posizione del binario.',
  abschnitte: [
    { titel: 'Acquisto', p: ['Kirow ha consegnato dodici KRC 100 tra dicembre 2006 e ottobre 2007. La serie è stata acquistata per interventi decentralizzati di costruzione e soccorso.'] },
    { titel: 'Impiego', p: ['La parte superiore girevole permette di lavorare lateralmente e lungo il binario, per esempio per posare pali o elementi di protezione in acciaio.', 'Per gli spostamenti la gru è impiegata come treno di lavoro con carri di protezione e di accompagnamento; non ha bisogno di una trazione propria.'] }
  ]
});

uebZug('bendini', {
  typ: 'Carro gru compatto della classe 30 tm',
  text: ['Il Bendini è un carro gru compatto per sollevamenti medi e leggeri nella manutenzione dell’infrastruttura ferroviaria.', 'Il catalogo dei tipi di marcia FFS lo elenca come carro gru XTms attivo e senza trazione.'],
  kennzahlen: [['30 tm', 'classe di gru'], ['100 km/h', 'velocità di trasporto'], ['38 t', 'massa del veicolo'], ['8,1 m', 'lunghezza del veicolo']],
  daten: { 'Basistyp': 'macchina da cantiere', 'Fahrzeugart': 'carro merci', 'Anzahl': 'diversi, numero totale non confermato', 'Fahrzeugnummern': 'esempi da XTm 91551 a 91596', 'In Betrieb seit': 'anni 1980 (telai del 1984, 1985 e 1989 attestati)', 'Einsatz': 'manutenzione e montaggio' },
  specNote: 'L’indicazione 30 tm designa la classe di gru usata nel catalogo FFS; non equivale alla massa del veicolo di 38 t. Numero e anno sono indicati di proposito solo come minimo o periodo.',
  abschnitte: [
    { titel: 'Ruolo nella flotta di gru', p: ['Con soli 8,1 metri di lunghezza il Bendini è nettamente più compatto dei pesanti convogli Kirow.', 'È adatto a lavori locali di montaggio e sollevamento per cui non serve una grande gru pesante.'] },
    { titel: 'Sostituzione prevista', p: ['Nella pianificazione degli acquisti di FFS Infrastruttura un progetto di gru per carichi medi figura espressamente come sostituto del Bendini e di altre gru più vecchie.', 'Il catalogo dei tipi di marcia 2026 indica tuttavia il Bendini ancora come attivo.'] }
  ]
});

uebZug('fahrleitung', {
  name: 'Veicoli per la linea di contatto',
  typ: 'Veicoli di servizio per la costruzione e la manutenzione della linea di contatto',
  text: ['I veicoli per la linea di contatto portano personale, attrezzi e materiale direttamente alla linea aerea.', 'FFS Infrastruttura usa a tale scopo diverse serie e versioni; esempi citati pubblicamente sono Hubi, Krani e Combi 4A.'],
  kennzahlen: [['diversi', 'serie e versioni'], ['Hubi', 'esempio di veicolo'], ['Krani', 'esempio di veicolo'], ['Combi 4A', 'esempio di veicolo']],
  daten: { 'Fahrzeuggruppe': 'veicoli di servizio linea di contatto', 'Arbeitsmittel': 'piattaforma di lavoro elevabile', 'Weitere Ausrüstung': 'gru e piattaforma per materiale', 'Antrieb': 'secondo la serie', 'Höchstgeschwindigkeit': 'secondo la serie', 'Arbeitsort': 'linea di contatto e strutture portanti', 'Anzahl': 'non pubblicato come numero totale', 'Einsatz': 'montaggio, controllo e riparazione' },
  specNote: 'Il veicolo per la linea di contatto non è una singola serie. Valori tecnici e anni di costruzione vanno attribuiti a un tipo concreto o a un numero di veicolo.',
  abschnitte: [
    { titel: 'Compiti', p: ['I veicoli supportano ispezione, eliminazione dei guasti e rinnovo della linea di contatto. Le piattaforme di lavoro danno accesso al filo di contatto; le gru sollevano pali, mensole e materiale.'] },
    { titel: 'Delimitazione', p: ['Questa pagina descrive il gruppo di veicoli. Per un ritratto tecnico individuale servono la designazione esatta della serie e il numero del veicolo, perché potenza, massa, lunghezza e anno di costruzione variano molto.'] }
  ],
  bilder: ['Carro di montaggio del Combi XTmass 99 85 9236 051 presso Bad Ragaz', 'Treno di costruzione della linea di contatto Combi tra Bad Ragaz e Sargans, 2019', 'Carro gru «Krani 3» con piattaforma elevabile per la costruzione della linea di contatto']
});
