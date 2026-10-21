/* Italiano – FFS Infrastruttura: carri */
uebDict({
  'aktiv (Fahrtypenkatalog 2026)': 'attivo (catalogo dei tipi di marcia 2026)',
  'Güterwagen': 'carro merci',
  '4, auf 2 Drehgestellen': '4, su 2 carrelli',
  'Schwerkraft': 'per gravità',
  'Ballastieren': 'massicciata',
  'Schottertransport': 'trasporto di pietrisco',
  'Bestandsangabe 2022, kein eigener Fahrtyp 2026': 'dato del 2022, nessun tipo di marcia proprio nel 2026',
  'Bestandstyp, kein eigener Fahrtyp 2026': 'tipo esistente, nessun tipo di marcia proprio nel 2026',
  'Generator an Bord': 'generatore a bordo',
  'im Arbeitsverband': 'in un convoglio di lavoro',
  'gedeckter Bauzugwagen': 'carro coperto per treni cantiere',
  'seitliche Türen': 'porte laterali',
  'Schottertransport, Ballastieren': 'trasporto di pietrisco, massicciata',
  'Werkzeug und Werkstatt, Unterstützung der Mannschaft': 'attrezzi e officina, supporto della squadra',
  'Güterzug, Basistyp Baumaschine': 'treno merci, tipo di base macchina da cantiere',
  'Güterwagen, Basistyp Baumaschine': 'carro merci, tipo di base macchina da cantiere',
  'SBB Infrastruktur': 'FFS Infrastruttura'
});

uebZug('fans-u', {
  typ: 'Carro per pietrisco a quattro assi con scarico laterale',
  text: ['Il Fans-u è un carro speciale a quattro assi per pietrisco, materiale di scavo e altri materiali per binari.', 'Le sue due vasche possono essere svuotate lateralmente; l’equipaggiamento idraulico di lavoro è alimentato dall’esterno.'],
  kennzahlen: [['100 km/h', 'velocità massima'], ['12,74 m', 'lunghezza'], ['29,0 t', 'peso a vuoto'], ['80 t', 'peso totale max.']],
  daten: { 'Gewicht': '29,0 t a vuoto, 80 t a pieno carico', 'Nutzlast': 'fino a circa 51,0 t (calcolato)', 'Behältervolumen': 'circa 40 m³', 'Entladung': 'laterale, idraulico', 'Arbeitsenergie': 'alimentazione esterna', 'Einsatz': 'pietrisco e materiale di scavo' },
  specNote: 'Il carico utile risulta dal peso totale e dal peso a vuoto attuali delle FFS; vecchi documenti di formazione indicano valori diversi.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['I documenti FFS utilizzati non indicano né il costruttore né il numero di carri. Il catalogo dei tipi di marcia 2026 elenca il carro come tipo attivo 5106.'] }, { titel: 'Impiego e tecnica', p: ['Il carro asporta materiale di scavo e materiale usato e rifornisce i cantieri di materiale sfuso. Lo scarico laterale permette un trasbordo mirato accanto al binario.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due cassoni di circa 40 m³ in totale, scaricati lateralmente in modo idraulico', 'Energia per l’idraulica fornita dall’esterno', 'Nessuna trazione propria, fino a 100 km/h in un treno'], p: ['Il Fans-u è un carro da lavoro senza compartimento passeggeri.'] }, { titel: 'Esercizio e sicurezza', p: ['Durante lo scarico il carro deve essere assicurato contro il ribaltamento e la zona di lavoro mantenuta libera. Idraulica, alimentazione e bloccaggi vanno controllati prima di ogni corsa di lavoro secondo le prescrizioni locali.'] }]
});

uebZug('xans-37', {
  typ: 'Carro per pietrisco a quattro assi con scarico per gravità',
  text: ['Lo Xans 37 è un carro per pietrisco a quattro assi per il trasporto e la posa dosata della massicciata.', 'Lo scarico avviene per gravità attraverso saracinesche vicine al suolo.'],
  kennzahlen: [['100 km/h', 'velocità massima'], ['14,0 m', 'lunghezza'], ['23,9 t', 'peso a vuoto'], ['88 t', 'peso totale max.']],
  daten: { 'Gewicht': '23,9 t a vuoto, 88 t a pieno carico', 'Nutzlast': 'fino a circa 64,1 t (calcolato)', 'Volumen': 'circa 45 m³', 'Entladung': 'per gravità, posa dosata' },
  specNote: 'Il catalogo dei tipi di marcia indica 87,5 t per la dinamica di marcia e arrotonda il peso totale ammesso a 88 t.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['I documenti FFS utilizzati non indicano né il costruttore né il numero di carri. Il catalogo dei tipi di marcia 2026 elenca il carro come tipo attivo 5107.'] }, { titel: 'Impiego e tecnica', p: ['Lo Xans 37 trasporta pietrisco nuovo e lo distribuisce in cantiere attraverso le sue bocche di scarico. È quindi adatto a nuove costruzioni, rinnovi e ricariche di massicciata.'] }, { titel: 'Dotazione e accessibilità', liste: ['Volume di circa 45 m³', 'Saracinesche basse per una massicciatura dosata per gravità', 'Nessuna trazione propria, fino a 100 km/h in un treno'], p: ['Lo Xans 37 è un carro da lavoro senza compartimento passeggeri.'] }, { titel: 'Carico e manovra', p: ['Prima di corse in treno o in manovra tutte le saracinesche devono essere completamente chiuse e bloccate. Il documento di formazione richiede corse a vuoto o a pieno carico e mette in guardia dai carichi parziali.'] }]
});

uebZug('xans-74', {
  typ: 'Carro per pietrisco a quattro assi per massicciata e materiale PSS',
  text: ['Lo Xans 74 è un carro per materiale sfuso a quattro assi per pietrisco e materiale dello strato di protezione (PSS).', 'A seconda dell’equipaggiamento un nastro trasportatore aiuta a depositare il materiale lateralmente.'],
  kennzahlen: [['100 km/h', 'velocità massima'], ['15,0 m', 'lunghezza'], ['26,0 t', 'peso a vuoto'], ['80 t', 'peso totale max.']],
  daten: { 'Gewicht': '26,0 t a vuoto, 80 t a pieno carico', 'Nutzlast': 'fino a circa 54,0 t (calcolato)', 'Volumen': 'circa 40 m³', 'Entladung': 'per gravità', 'Förderband': 'deposito laterale fino a circa 4,5 m dall’asse del binario', 'Abdeckung': 'possibile in due parti', 'Einsatz': 'pietrisco e PSS' },
  specNote: 'La presentazione di formazione indica masse diverse per versioni più vecchie; qui valgono i valori del catalogo dei tipi di marcia 2026 delle FFS.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['I documenti FFS utilizzati non indicano né il costruttore né il numero di carri. Il catalogo dei tipi di marcia 2026 elenca il carro come tipo attivo 5109.'] }, { titel: 'Impiego e tecnica', p: ['Oltre al pietrisco normale il carro può trasportare materiale PSS sensibile all’umidità. I teloni aiutano a mantenere il tenore d’umidità richiesto durante il trasporto.'] }, { titel: 'Dotazione e accessibilità', liste: ['Volume di circa 40 m³, scarico per gravità', 'A seconda dell’equipaggiamento, nastro trasportatore per il deposito laterale fino a circa 4,5 m dall’asse del binario', 'Copertura in due parti possibile', 'Nessuna trazione propria, fino a 100 km/h in un treno'], p: ['Lo Xans 74 è un carro da lavoro senza compartimento passeggeri.'] }, { titel: 'Funzionamento del nastro', p: ['Per il nastro serve un’alimentazione esterna o un gruppo generatore. Prima dell’accensione occorre controllare la zona di rotazione, il binario vicino e la formazione di polvere.'] }],
  bilder: ['Xans 74 di FFS Infrastruttura, 2021', 'Tramoggia centrale dello Xans 74 sopra il nastro trasportatore', 'Nastro trasportatore orientabile sotto lo Xans 74']
});

uebZug('xas-53', {
  typ: 'Carro porta-cassoni con guide di scorrimento laterali',
  text: ['Lo Xas 53 trasporta cassoni intercambiabili per pietrisco, residui di vagliatura e materiale PSS.', 'Guide di scorrimento laterali permettono di spostare i cassoni insieme alle macchine per binari.'],
  kennzahlen: [['100 km/h', 'velocità massima'], ['19,9 m', 'lunghezza'], ['31,0 t', 'peso a vuoto'], ['7', 'cassoni per carro']],
  daten: { 'Fahrzeugart': 'carro porta-cassoni', 'Gewicht': '31,0 t a vuoto, 78 t a pieno carico', 'Nutzlast': 'nessun valore ufficiale (78 t − 31 t danno circa 47 t)', 'Behälter': '7 cassoni da circa 4 m³ ciascuno', 'Ausrüstung': 'guide di scorrimento laterali, teloni possibili', 'Einsatz': 'treni di vagliatura e cantiere' },
  specNote: 'Il catalogo dei tipi di marcia indica 77,6 t per la dinamica di marcia. La pianificazione della flotta prevede la sostituzione della famiglia Xans/Xas 52/53.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['I documenti FFS utilizzati non indicano né il costruttore né il numero di carri. Il catalogo dei tipi di marcia 2026 elenca il carro come tipo attivo 5113.'] }, { titel: 'Impiego e tecnica', p: ['I cassoni possono essere spostati, riempiti e svuotati nel punto adatto all’interno di una catena di lavoro. Questo accelera l’asportazione continua del materiale durante la pulizia della massicciata e il rinnovo dei binari.'] }, { titel: 'Dotazione e accessibilità', liste: ['Sette cassoni da circa 4 m³ ciascuno', 'Rotaie laterali per spostare i cassoni', 'Teloni possibili per materiale sensibile all’umidità', 'Nessuna trazione propria, fino a 100 km/h in un treno'], p: ['Lo Xas 53 è un carro da lavoro senza compartimento passeggeri.'] }, { titel: 'Fissaggio del carico', p: ['Mani e piedi vanno tenuti lontani dalle guide di scorrimento. Per il PSS sensibile all’umidità i cassoni possono essere coperti; prima di ogni corsa cassoni e teloni devono essere fissati correttamente.'] }],
  bilder: ['Xas 80 85 98 53 420-0 di FFS Infrastruttura a Effretikon']
});

uebZug('xas-62', {
  typ: 'Carro ribaltabile a quattro assi per pietrisco usato, senza nastro',
  text: ['Lo Xas 62 accoglie pietrisco usato, materiale di scavo, ghiaia e sabbia.', 'La cassa viene ribaltata elettroidraulicamente, così il materiale scende per gravità.'],
  kennzahlen: [['100 km/h', 'velocità massima'], ['15,04 m', 'lunghezza'], ['30,0 t', 'peso a vuoto'], ['80 t', 'peso totale max.']],
  daten: { 'Ausführung': 'senza nastro trasportatore', 'Gewicht': '30,0 t a vuoto, 80 t a pieno carico', 'Nutzlast': 'fino a circa 50,0 t (calcolato)', 'Volumen': 'circa 51 m³', 'Entladung': 'cassa ribaltabile, elettroidraulica', 'Einsatz': 'pietrisco usato e materiale di scavo' },
  specNote: 'Il tipo di marcia attuale distingue chiaramente questa versione dallo Xas 62 con nastro trasportatore.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['I documenti FFS utilizzati non indicano né il costruttore né il numero di carri. Il catalogo dei tipi di marcia 2026 elenca il carro come tipo attivo 5111.'] }, { titel: 'Impiego e tecnica', p: ['Lo Xas 62 serve soprattutto a smaltire il materiale proveniente dal rinnovo dei binari e dal risanamento della sottostruttura. Il ribaltamento accelera lo scarico nei luoghi di deposito adatti.'] }, { titel: 'Dotazione e accessibilità', liste: ['Cassa ribaltabile elettroidraulica di circa 51 m³', 'Versione senza nastro trasportatore', 'Nessuna trazione propria, fino a 100 km/h in un treno'], p: ['Lo Xas 62 è un carro da lavoro senza compartimento passeggeri.'] }, { titel: 'Lavoro', p: ['Durante il ribaltamento vanno sorvegliati stabilità, linea di contatto, binario vicino e spazio laterale. È vietato salire o restare sul carro durante i movimenti.'] }]
});

uebZug('xas-62-fb', {
  beiname: 'con nastro trasportatore',
  typ: 'Carro ribaltabile per pietrisco usato con nastro trasportatore supplementare',
  text: ['La versione con nastro dello Xas 62 unisce la cassa ribaltabile a un nastro per un’asportazione controllata del materiale.', 'È registrata come tipo di marcia attivo a sé stante.'],
  kennzahlen: [['100 km/h', 'velocità massima'], ['15,04 m', 'lunghezza'], ['30,5 t', 'peso a vuoto'], ['80 t', 'peso totale max.']],
  daten: { 'Ausführung': 'con nastro trasportatore (FB)', 'Gewicht': '30,5 t a vuoto, 80 t a pieno carico', 'Nutzlast': 'fino a circa 49,5 t (calcolato)', 'Entladung': 'cassa ribaltabile e nastro', 'Arbeitsantrieb': 'elettroidraulico', 'Einsatz': 'asportazione del materiale' },
  specNote: '«FB» indica qui la versione con nastro trasportatore; rispetto al carro senza nastro il peso a vuoto aumenta di circa 0,5 t.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['I documenti FFS utilizzati non indicano né il costruttore né il numero di carri. Il catalogo dei tipi di marcia 2026 elenca la versione con nastro trasportatore come tipo attivo proprio 5075.'] }, { titel: 'Impiego e tecnica', p: ['Il nastro trasportatore completa il semplice scarico per ribaltamento. Il materiale può essere passato in modo più controllato alle unità successive o depositato lateralmente in un punto definito.'] }, { titel: 'Dotazione e accessibilità', liste: ['Cassa ribaltabile e nastro trasportatore', 'Azionamento di lavoro elettroidraulico', 'Nessuna trazione propria, fino a 100 km/h in un treno'], p: ['Lo Xas 62 con nastro trasportatore è un carro da lavoro senza compartimento passeggeri.'] }, { titel: 'Zona di sicurezza', p: ['Nastro, cassa ribaltabile e idraulica possono funzionare solo nella zona di lavoro autorizzata. Punti di schiacciamento, rischio di caduta e vicinanza alla linea di contatto richiedono particolare attenzione.'] }]
});

uebZug('xas-73', {
  typ: 'Carro per pietrisco per la prima e la seconda rincalzatura',
  text: ['Lo Xas 73 è un carro per pietrisco Talbot a quattro assi con scarico per gravità.', 'Viene impiegato soprattutto durante la prima e la seconda rincalzatura per distribuire il pietrisco in modo mirato.'],
  kennzahlen: [['100 km/h', 'velocità massima'], ['15,04 m', 'lunghezza'], ['22,5 t', 'peso a vuoto'], ['200', 'carri previsti per il prolungamento della vita']],
  daten: { 'Bauart': 'carro per pietrisco Talbot', 'Gewicht': '22,5 t a vuoto, 80 t a pieno carico', 'Nutzlast': 'fino a circa 57,5 t (calcolato)', 'Volumen': 'circa 31 m³', 'Behälter': '4 semicamere', 'Bedienung': '4 volantini' },
  specNote: 'Secondo la presentazione della flotta 2025 le FFS prevedono di prolungare la vita di 200 carri Talbot Xas 73 a quattro assi.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Il carro è un carro per pietrisco di tipo Talbot. I documenti FFS utilizzati non indicano il numero di carri. Il catalogo dei tipi di marcia 2026 lo elenca come tipo attivo 5110.'] }, { titel: 'Impiego e tecnica', p: ['Quattro volantini comandano le singole bocche di scarico. Così il pietrisco può essere distribuito a tratti e secondo la posizione nel binario.'] }, { titel: 'Dotazione e accessibilità', liste: ['Quattro semicamere di circa 31 m³ in totale', 'Quattro volantini per le singole uscite', 'Nessuna trazione propria, fino a 100 km/h in un treno'], p: ['Lo Xas 73 è un carro da lavoro senza compartimento passeggeri.'] }, { titel: 'Prospettive della flotta', p: ['Il tipo resta attivo nel catalogo dei tipi di marcia 2026. Per la grande flotta esistente è previsto un refit, affinché i carri restino disponibili per altri periodi di lavori.'] }]
});

uebZug('xns-39', {
  bilder: ['Xns 39 (Fccnpps) 21 85 6439 038-1 in un treno cantiere', 'Diversi Xns 39 in un treno cantiere, di notte'],
  typ: 'Carro per pietrisco a due assi con comando manuale',
  text: ['Lo Xns 39 è un carro per pietrisco compatto a due assi.', 'Le saracinesche di scarico sono azionate a mano con leve e permettono di posare la massicciata direttamente nel binario.'],
  kennzahlen: [['100 km/h', 'velocità massima'], ['10,0 m', 'lunghezza'], ['13,1 t', 'peso a vuoto'], ['45 t', 'peso totale max.']],
  daten: { 'Gewicht': '13,1 t a vuoto, 45 t a pieno carico', 'Nutzlast': 'fino a circa 31,9 t (calcolato)', 'Volumen': 'circa 22 m³', 'Bedienung': 'saracinesche manuali, con leve', 'Einsatz': 'posa della massicciata' },
  specNote: 'La presentazione in francese scrive una volta «Xas 39»; indice e catalogo dei tipi di marcia delle FFS confermano la sigla Xns 39.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['I documenti FFS utilizzati non indicano né il costruttore né il numero di carri. Il catalogo dei tipi di marcia 2026 elenca il carro come tipo attivo 5108.'] }, { titel: 'Impiego e tecnica', p: ['Con due assi e dieci metri di lunghezza lo Xns 39 è adatto a piccole quantità di pietrisco e a brevi tratti di cantiere. La semplice costruzione meccanica non richiede fonti di energia supplementari.'] }, { titel: 'Dotazione e accessibilità', liste: ['Volume di circa 22 m³', 'Saracinesche azionate a mano tramite leve', 'Nessuna fonte di energia aggiuntiva necessaria', 'Nessuna trazione propria, fino a 100 km/h in un treno'], p: ['Lo Xns 39 è un carro da lavoro senza compartimento passeggeri.'] }, { titel: 'Trasporto sicuro', p: ['Prima di ogni corsa le saracinesche manuali vanno chiuse e assicurate. Durante lo scarico nessuno deve trovarsi nella zona di scarico o di pericolo.'] }]
});

uebZug('xns-60', {
  typ: 'Carro ribaltabile a due assi per pietrisco e residui di vagliatura',
  text: ['Lo Xns 60 è un carro ribaltabile a due assi per pietrisco, residui di vagliatura e materiale sfuso simile.', 'Lo scarico avviene per ribaltamento e per gravità.'],
  kennzahlen: [['100 km/h', 'velocità massima'], ['10,94 m', 'lunghezza'], ['17,0 t', 'peso a vuoto'], ['42 t', 'peso totale max.']],
  daten: { 'Fahrzeugart': 'carro merci con cassone ribaltabile', 'Gewicht': '17,0 t a vuoto, 42 t a pieno carico', 'Nutzlast': 'fino a circa 25,0 t (calcolato)', 'Volumen': 'circa 17,5 m³', 'Entladung': 'ribaltamento, per gravità', 'Einsatz': 'pietrisco e residui di vagliatura' },
  specNote: 'La presentazione indica 17 t di carico utile; dalle masse attuali delle FFS risultano per calcolo fino a circa 25 t.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['I documenti FFS utilizzati non indicano né il costruttore né il numero di carri. Il catalogo dei tipi di marcia 2026 elenca il carro come tipo attivo 5112.'] }, { titel: 'Impiego e tecnica', p: ['Il carro compatto può essere caricato con escavatori ed è adatto a piccole quantità di materiale. Lo scarico per gravità riduce il bisogno di altri sistemi di trasporto.'] }, { titel: 'Dotazione e accessibilità', liste: ['Cassone ribaltabile di circa 17,5 m³', 'Scarico per ribaltamento e gravità', 'Nessuna trazione propria, fino a 100 km/h in un treno'], p: ['Lo Xns 60 è un carro da lavoro senza compartimento passeggeri.'] }, { titel: 'Ribaltamento', p: ['Prima del ribaltamento vanno controllati il terreno, lo spazio laterale e la posizione del carico. Mentre il carro si muove nessuno deve trovarsi sulla sovrastruttura.'] }]
});

uebZug('xs-72', {
  typ: 'Vecchio carro per pietrisco a due assi con volantini',
  text: ['Lo Xs 72 è un carro per pietrisco a due assi con saracinesche di scarico azionate da volantini.', 'Figura nel documento di formazione FFS del 2022, ma non più come tipo attivo a sé nel catalogo dei tipi di marcia 2026.'],
  kennzahlen: [['10,24 m', 'lunghezza'], ['13,0 t', 'peso a vuoto'], ['25,0 t', 'carico utile secondo la presentazione'], ['15 m³', 'volume']],
  daten: { 'Gewicht': '13,0 t a vuoto, circa 38 t a pieno carico (calcolato)', 'Nutzlast': '25,0 t secondo la presentazione', 'Bedienung': 'volantini' },
  specNote: 'In mancanza di un tipo di marcia proprio nel 2026 i dati tecnici provengono di proposito dalla presentazione di formazione del 2022.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['I documenti FFS utilizzati non indicano né il costruttore né il numero di carri. Il carro compare nel documento di formazione FFS del 2022, ma non più come tipo proprio nel catalogo 2026.'] }, { titel: 'Impiego e tecnica', p: ['Le saracinesche si aprono e chiudono con volantini. Così il pietrisco può essere distribuito senza fonte di energia esterna.'] }, { titel: 'Dotazione e accessibilità', liste: ['Volume di 15 m³', 'Sportelli con volantini', 'Nessuna trazione propria'], p: ['Lo Xs 72 è un carro da lavoro senza compartimento passeggeri.'] }, { titel: 'Collocazione', p: ['L’assenza dal catalogo attuale non significa necessariamente che non esista più alcun carro. Il tipo però non è più registrato come tipo di marcia attivo per l’ordinazione delle tracce.'] }]
});

uebZug('silad-1-3', {
  typ: 'Unità di carico rotaie con carro materiale',
  text: ['Le SILAD 1–3 sono unità di carico rotaie attive delle FFS per il trasporto e il trasbordo di rotaie lunghe.', 'Il tipo di marcia ufficiale comprende unità di carico e carro materiale; nel treno di lavoro si aggiungono altri carri di trasporto.'],
  kennzahlen: [['90 km/h', 'velocità massima'], ['44,0 m', 'lunghezza del tipo di marcia'], ['80 t', 'peso a vuoto e di dinamica di marcia'], ['120 m', 'lunghezza max. delle rotaie']],
  daten: { 'Formation': 'unità di carico e carro materiale, in più parti', 'Transportwagen': 'tra cui Xas 60', 'Länge': '44,0 m (tipo di marcia)', 'Gewicht': '80 t (tipo di marcia)', 'Schienenlänge': 'fino a 120 m', 'Kapazität': 'fino a 30 rotaie secondo la presentazione' },
  specNote: 'I 44 m e le 80 t si riferiscono al tipo di marcia definito nel catalogo e non all’intero lungo treno per il trasporto di rotaie.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Le unità di carico rotaie SILAD 1–3 sono di Robel. Il catalogo dei tipi di marcia 2026 le elenca come tipo attivo 5031 composto da unità di carico e carro materiale; nel treno di lavoro si aggiungono carri di trasporto come lo Xas 60.'] }, { titel: 'Impiego e tecnica', p: ['Il documento di formazione descrive un’unità di trasporto di sei carri per rotaie fino a 120 metri. L’unità di carico SILAD aiuta a caricare e scaricare le rotaie in sicurezza in cantiere.'] }, { titel: 'Dotazione e accessibilità', liste: ['Unità di carico per rotaie fino a 120 m', 'Capacità fino a 30 rotaie', 'Nessuna trazione propria, fino a 90 km/h in un treno'], p: ['SILAD è un’unità di lavoro senza compartimento passeggeri.'] }, { titel: 'Sviluppo della flotta', p: ['Le FFS mantengono attive le SILAD 1–3. La pianificazione della flotta prevede inoltre un ampio programma di 90 unità di trasporto SILAD e quattro caricatori.'] }]
});

uebZug('silad-4', {
  typ: 'Unità di carico rotaie per lavori di costruzione e rinnovo',
  text: ['La SILAD 4 è un’unità di carico rotaie delle FFS registrata separatamente.', 'Lavora con i relativi carri di trasporto per caricare e scaricare rotaie lunghe.'],
  kennzahlen: [['100 km/h', 'velocità massima'], ['29,0 m', 'lunghezza'], ['58 t', 'peso a vuoto'], ['attivo', 'stato 2026']],
  daten: { 'Beschreibung': 'unità di carico rotaie', 'Gewicht': '58 t (peso totale e di dinamica di marcia)', 'Einsatz': 'carico e scarico di rotaie' },
  specNote: 'Il catalogo dei tipi di marcia pubblica per la SILAD 4 solo i valori rilevanti per la traccia; i dati di lavoro sono regolati in documenti d’esercizio separati.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['I documenti FFS utilizzati non indicano un costruttore. Il catalogo dei tipi di marcia 2026 elenca SILAD 4 come tipo attivo proprio 5071.'] }, { titel: 'Impiego e tecnica', p: ['La SILAD 4 non è un veicolo motore autonomo. Per trasferimenti e movimenti in cantiere l’unità viene inserita in un convoglio trainato.'] }, { titel: 'Dotazione e accessibilità', liste: ['Unità per caricare e scaricare rotaie lunghe', '29,0 m di lunghezza, 58 t', 'Nessuna trazione propria, fino a 100 km/h in un treno'], p: ['SILAD 4 è un’unità di lavoro senza compartimento passeggeri.'] }, { titel: 'Logistica delle rotaie', p: ['I sistemi SILAD riducono i sollevamenti manuali faticosi e assicurano un flusso ordinato di materiale tra deposito, treno di trasporto e luogo di posa.'] }]
});

uebZug('silad-reserve', {
  name: 'SILAD di riserva',
  typ: 'Unità compatta di carico rotaie di riserva',
  text: ['L’unità di riserva SILAD è disponibile come sostituzione o complemento per i carichi di rotaie.', 'È nettamente più corta e leggera della SILAD 4 ed è registrata come tipo di marcia attivo a sé stante.'],
  kennzahlen: [['90 km/h', 'velocità massima'], ['14,0 m', 'lunghezza'], ['18 t', 'peso a vuoto'], ['attivo', 'stato 2026']],
  daten: { 'Beschreibung': 'unità di carico di riserva', 'Gewicht': '18 t (peso totale e di dinamica di marcia)', 'Einsatz': 'riserva e complemento' },
  specNote: '«Riserva» indica il ruolo d’esercizio; il catalogo dei tipi di marcia registra comunque l’unità come tipo attivo a sé.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['I documenti FFS utilizzati non indicano un costruttore. Il catalogo dei tipi di marcia 2026 elenca l’unità di riserva come tipo attivo proprio 5072.'] }, { titel: 'Impiego e tecnica', p: ['L’unità di riserva interviene in caso di manutenzione, guasto o forte domanda e aumenta così la disponibilità della logistica delle rotaie.'] }, { titel: 'Dotazione e accessibilità', liste: ['Unità di carico compatta: 14,0 m di lunghezza, 18 t', 'Nessuna trazione propria, fino a 90 km/h in un treno'], p: ['L’unità di riserva è un’unità di lavoro senza compartimento passeggeri.'] }, { titel: 'Esercizio', p: ['Come le altre unità SILAD non ha una trazione propria. Trasferimenti, manovre e movimenti di lavoro avvengono nel convoglio autorizzato a tale scopo.'] }]
});

uebZug('ste-kurz', {
  name: 'STE corta',
  typ: 'Unità di trasporto rotaie con due gru per rotaie da 12 a 36 m',
  text: ['Secondo il documento di formazione l’unità corta di trasporto rotaie (STE) si basa su un carro pianale Xans 51 a quattro assi.', 'Due piccole gru scaricano le rotaie corte direttamente in cantiere.'],
  kennzahlen: [['12–36 m', 'lunghezza delle rotaie'], ['29,5 t', 'peso a vuoto'], ['50 t', 'carico utile secondo la presentazione'], ['2 × 1,5 t', 'gru']],
  daten: { 'Bauart': 'carro pianale', 'Gewicht': '29,5 t a vuoto', 'Nutzlast': '50 t secondo la presentazione', 'Krane': '2, portata 1500 kg ciascuna', 'Schienenlänge': 'da 12 a 36 m', 'Einsatz': 'scarico di rotaie' },
  specNote: 'Il nome Xans 51 non compare come voce propria nel catalogo dei tipi di marcia 2026; i valori sono quindi indicati come stato di formazione 2022.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Secondo il documento di formazione FFS del 2022, l’unità si basa su un carro pianale Xans 51 a quattro assi. Il documento non indica costruttore né numero; non è un tipo proprio nel catalogo 2026.'] }, { titel: 'Impiego e tecnica', p: ['L’unità copre le lunghezze di rotaia trasportabili senza un treno per rotaie lunghe da 120 metri. Le due gru si ripartiscono il carico durante lo scarico.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due gru da 1500 kg ciascuna', 'Generatore a bordo', 'Per rotaie da 12 a 36 m', 'Nessuna trazione propria'], p: ['La STE è un carro da lavoro senza compartimento passeggeri.'] }, { titel: 'Sicurezza sul lavoro', p: ['Durante le manovre nessuno deve stare in piedi sul carro. Zona della gru, accessori di sollevamento, linea di contatto e binario vicino vanno messi in sicurezza prima di ogni sollevamento.'] }]
});

uebZug('ste-lang', {
  name: 'STE lunga',
  typ: 'Unità di trasporto rotaie in più parti per rotaie fino a 120 m',
  text: ['La STE lunga usa carri Xans 51 dotati di gru per trasportare e scaricare rotaie lunghe.', 'Secondo la presentazione un’unità d’esercizio è composta da sei carri e raggiunge 120 metri di lunghezza.'],
  kennzahlen: [['120 m', 'lunghezza max. delle rotaie'], ['6', 'carri per unità'], ['29,5 t', 'peso a vuoto per carro gru'], ['2 × 1,5 t', 'gru per carro gru']],
  daten: { 'Bauart': 'convoglio di carri pianali', 'Formation': '6 carri', 'Achsen': '4 per carro', 'Gewicht': '29,5 t a vuoto per carro gru', 'Nutzlast': '50 t per carro gru secondo la presentazione', 'Krane': '2 per carro gru, 1500 kg ciascuna', 'Schienenlänge': 'fino a 120 m', 'Einsatz': 'scarico di rotaie lunghe' },
  specNote: 'I tipi di marcia SILAD sono attivi separatamente nel 2026; la sigla STE lunga / Xans 51 non è registrata come tipo di marcia proprio.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Secondo la presentazione FFS, la STE lunga è composta da sei carri Xans 51. Il documento non indica costruttore né numero di unità; non è un tipo proprio nel catalogo 2026.'] }, { titel: 'Impiego e tecnica', p: ['Più carri portano insieme le rotaie lunghe e flessibili. Le gru aiutano nel passaggio controllato dal convoglio di trasporto al binario.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due gru da 1500 kg per ogni carro gru', 'Generatore a bordo', 'Per rotaie fino a 120 m', 'Nessuna trazione propria'], p: ['La STE è una composizione di lavoro senza compartimento passeggeri.'] }, { titel: 'Limiti d’esercizio', p: ['I sei carri sono trattati come un convoglio coordinato. Durante i movimenti vanno sorvegliati con particolare attenzione la presenza sui carri, l’iscrizione in curva, gli sbalzi e la posizione delle rotaie.'] }]
});

uebZug('xs-45', {
  typ: 'Carro a due assi per attrezzi, officina e squadra',
  text: ['Lo Xs 45 è un carro coperto per treni cantiere destinato ad attrezzi, pezzi di ricambio e attrezzatura d’officina.', 'Serve allo stesso tempo come spazio di lavoro e di supporto riparato per le squadre di cantiere.'],
  kennzahlen: [['2', 'assi'], ['15,0 m', 'lunghezza'], ['16,5 t', 'peso a vuoto'], ['22 t', 'carico utile secondo la presentazione']],
  daten: { 'Gewicht': '16,5 t a vuoto, circa 38,5 t a pieno carico (calcolato)', 'Nutzlast': '22 t secondo la presentazione' },
  specNote: 'Il catalogo dei tipi di marcia 2026 non elenca separatamente lo Xs 45; i valori provengono dal documento di formazione FFS del 2022.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['I documenti FFS utilizzati non indicano né il costruttore né il numero di carri. Il carro compare nel documento di formazione FFS del 2022, ma non come tipo proprio nel catalogo 2026.'] }, { titel: 'Impiego e tecnica', p: ['Attrezzi e piccole macchine vengono trasportati al riparo dalle intemperie e messi a disposizione direttamente sul luogo d’intervento. Il carro completa veicoli motore e carri materiale nel treno cantiere.'] }, { titel: 'Dotazione e accessibilità', liste: ['Carro coperto con porte laterali', 'Spazio per attrezzi, pezzi di ricambio e attrezzatura d’officina', 'Locale di lavoro riparato per la squadra di cantiere', 'Nessuna trazione propria'], p: ['Lo Xs 45 non è una carrozza viaggiatori. Le persone possono viaggiarvi solo secondo le prescrizioni d’esercizio.'] }, { titel: 'Posizione di marcia', p: ['Prima di ogni movimento porte laterali, attrezzatura mobile e posti di lavoro devono essere assicurati. Le persone possono restare nel carro solo alle condizioni d’esercizio autorizzate.'] }]
});

uebZug('xs-48', {
  typ: 'Carro officina e squadra con piattaforme elevabili',
  text: ['Lo Xs 48 combina un carro coperto per attrezzi e officina con piattaforme di lavoro elevabili.', 'Supporta in particolare i lavori sugli impianti della linea di contatto.'],
  kennzahlen: [['2', 'assi'], ['15,0 m', 'lunghezza'], ['16,5 t', 'peso a vuoto'], ['23 t', 'carico utile secondo la presentazione']],
  daten: { 'Bauart': 'carro da lavoro coperto', 'Gewicht': '16,5 t a vuoto, circa 39,5 t a pieno carico (calcolato)', 'Nutzlast': '23 t secondo la presentazione', 'Ausrüstung': 'piattaforme di lavoro elevabili', 'Sicherheitsregel': 'disinserire la linea di contatto prima di sollevare le piattaforme', 'Einsatz': 'attrezzi e officina, lavori sulla linea di contatto' },
  specNote: 'La presentazione di formazione richiede espressamente di disinserire la linea di contatto prima di sollevare le piattaforme.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['I documenti FFS utilizzati non indicano né il costruttore né il numero di carri. Il carro compare nel documento di formazione FFS del 2022, ma non come tipo proprio nel catalogo 2026.'] }, { titel: 'Impiego e tecnica', p: ['Le piattaforme permettono di lavorare sopra il pavimento del carro. Così il carro riunisce materiale, officina e posto di lavoro in altezza in un’unica unità.'] }, { titel: 'Dotazione e accessibilità', liste: ['Carro coperto per attrezzi e officina', 'Piattaforme elevabili per lavori alla linea di contatto', 'Nessuna trazione propria'], p: ['Lo Xs 48 non è una carrozza viaggiatori. Prima di sollevare le piattaforme la linea di contatto deve essere disinserita e messa a terra.'] }, { titel: 'Sicurezza elettrica', p: ['Prima del sollevamento la linea di contatto deve essere disinserita, messa a terra e assicurata contro la reinserzione. Per la marcia le piattaforme sono rientrate e porte e carico bloccati.'] }],
  bilder: ['Carro da lavoro per la linea di contatto Xs 40 85 95 48 453-1 presso Bad Ragaz']
});

uebZug('xs-mannschaftswagen', {
  beiname: 'Carro squadra',
  typ: 'Carro officina e di supporto a due assi',
  text: ['Questo carro, chiamato semplicemente Xs nel documento di formazione, trasporta attrezzi e attrezzatura d’officina.', 'Come carro di supporto del treno cantiere offre alla squadra uno spazio di lavoro riparato.'],
  kennzahlen: [['2', 'assi'], ['14,0 m', 'lunghezza'], ['16,5 t', 'peso a vuoto'], ['24 t', 'carico utile secondo la presentazione']],
  daten: { 'Gewicht': '16,5 t a vuoto, circa 40,5 t a pieno carico (calcolato)', 'Nutzlast': '24 t secondo la presentazione', 'Status': 'designazione generica, nessun tipo di marcia univoco nel 2026' },
  specNote: '«Xs» è una designazione di costruzione ampia. Senza numero di veicolo il carro non può essere assegnato a un tipo di marcia attuale univoco.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['«Xs» è una designazione collettiva. I documenti FFS utilizzati non indicano né il costruttore né il numero di carri; il catalogo 2026 non ha un tipo proprio chiaramente definito.'] }, { titel: 'Impiego e tecnica', p: ['Il carro serve soprattutto alla logistica e al lavoro della squadra del treno cantiere. Non è una normale carrozza viaggiatori e può essere usato solo secondo la sua autorizzazione d’esercizio.'] }, { titel: 'Dotazione e accessibilità', liste: ['Carro coperto con porte laterali', 'Attrezzi e attrezzatura d’officina', 'Zona di lavoro riparata per la squadra', 'Nessuna trazione propria'], p: ['Il carro non è una carrozza viaggiatori e può essere usato solo secondo la sua omologazione d’esercizio.'] }, { titel: 'Fissaggio', p: ['Attrezzi, pezzi di ricambio e oggetti mobili vanno fissati prima di ogni movimento del treno. Le porte laterali restano chiuse e bloccate durante la marcia.'] }]
});

uebZug('kirow-mannschaftswagen', {
  name: 'Carro squadra Kirow',
  typ: 'Carro di accompagnamento dei convogli gru Kirow 250, 800 e 1200',
  text: ['Il catalogo dei tipi di marcia 2026 elenca convogli gru Kirow 250, 800 e 1200, ciascuno con un carro squadra.', 'Il carro di accompagnamento supporta personale, attrezzi e logistica d’intervento della gru ferroviaria. Le due KRC 800 delle FFS sono state sostituite nel 2016–2019; una voce nel catalogo non attesta quindi un effettivo attuale.'],
  kennzahlen: [['3', 'tipi di gru con carro squadra'], ['1', 'carro squadra per convoglio'], ['80 km/h', 'velocità del convoglio'], ['3', 'tipi di marcia nel catalogo 2026']],
  daten: { 'Fahrzeugrolle': 'carro di accompagnamento nel convoglio gru', 'Höchstgeschwindigkeit': '80 km/h (intero convoglio)', 'Einzelfahrdaten': 'non pubblicati separatamente', 'Fahrtypen': '5089–5091 (convogli gru completi)', 'Status': 'tipi di marcia attivi nel catalogo 2026; KRC 800 sostituite alle FFS nel 2016–2019' },
  specNote: 'Nel catalogo dei tipi di marcia le FFS pubblicano solo i valori complessivi dei convogli gru inseparabili, non le dimensioni del solo carro squadra.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['La carrozza squadra appartiene sempre a una composizione gru Kirow 250, 800 o 1200; il catalogo elenca le composizioni complete come tipi 5089–5091. Dati singoli e costruttore della carrozza di accompagnamento non sono pubblicati separatamente. Le due KRC 800 delle FFS sono state sostituite nel 2016–2019.'] }, { titel: 'Impiego e tecnica', p: ['Il carro squadra mette a disposizione della squadra della gru materiale, mezzi di lavoro e un locale di sosta. La sua dotazione è adattata al rispettivo convoglio gru.'] }, { titel: 'Dotazione e accessibilità', liste: ['Materiale e attrezzi per la squadra della gru', 'Locale di soggiorno per il personale', 'Nessuna trazione propria, fino a 80 km/h nella composizione'], p: ['La carrozza accompagna il personale della gru; non è una carrozza viaggiatori.'] }, { titel: 'Assegnazione ai convogli gru', tabelle: { kopf: ['Gru', 'Formazione', 'Convoglio lunghezza / peso'], zeilen: [
      ['Kirow 250', '1 carro di protezione e 1 carro squadra', '47 m / 169 t'],
      ['Kirow 800', '1 carro di protezione e 1 carro squadra', '48 m / 203 t'],
      ['Kirow 1200', 'carro di protezione, di contrappeso e carro squadra', '63 m / 279 t']] } }, { titel: 'Convoglio fisso', p: ['Per l’ordinazione delle tracce e i trasferimenti si considera l’unità completa. Modifiche a formazione, carico o freno sono ammesse solo secondo i documenti d’esercizio approvati.'] }]
});

uebZug('pwfz', {
  beiname: 'Veicolo per personale e officina',
  typ: 'Veicolo per personale e officina previsto',
  text: ['Il veicolo per personale e officina PWFZ è un progetto di flotta previsto da FFS Infrastruttura.', 'Deve sostituire vecchi carri officina e carri squadra Xs con una serie moderna e uniforme.'],
  kennzahlen: [['30', 'veicoli previsti'], ['2', 'primi veicoli del progetto'], ['28', 'altri veicoli di serie'], ['giugno 2025', 'stato della pianificazione']],
  daten: { 'Langname': 'Personal Werkstatt Fahrzeug (veicolo per personale e officina)', 'Bestand': 'ancora nessuna flotta di serie', 'Anzahl': '30 previsti (2 + 14 + 14)', 'Einsatz': 'personale e officina', 'Vorgänger': 'carri Xs per treni cantiere', 'Technische Daten': 'non ancora pubblicati', 'Status': 'acquisto previsto' },
  specNote: 'I documenti FFS accessibili al pubblico indicano numero e scaglionamento, ma non ancora dimensioni o prestazioni vincolanti.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['FFS Infrastruttura prevede 30 veicoli in tre tappe: 2, 14 e 14. Costruttore e dati tecnici non sono ancora pubblicati (stato al 4 giugno 2025).'] }, { titel: 'Impiego e tecnica', p: ['Una serie PWFZ uniforme deve riunire officina, trasporto di materiale e supporto al personale in un concetto di carro moderno.'] }, { titel: 'Dotazione e accessibilità', p: ['Il PWFZ deve riunire officina, trasporto di materiale e supporto al personale in un solo veicolo. Indicazioni più precise sulla dotazione non sono ancora pubblicate.'] }, { titel: 'Delimitazione', p: ['Il PWFZ non è ancora un tipo di marcia di serie registrato nel catalogo 2026. Questa voce descrive lo stato del progetto e non una serie di veicoli già omologata.'] }]
});
