/* RailBase - Uebersetzung 'it'. Automatisch zusammengesetzt aus sprachen\it\ (werkzeuge\sprachen-bauen.ps1). Hier nicht bearbeiten. */
'use strict';

/* ---- 01-oberflaeche.js ---- */
/* Italiano – menu, pulsanti, pagina iniziale, finestre di dialogo */
uebDict({
  // ---------- intestazione e pagina iniziale ----------
  'RailBase – Startseite': 'RailBase – Pagina iniziale',
  'Schweizer Zeit': 'Ora svizzera',
  'Darstellung: automatisch': 'Aspetto: automatico',
  'Spenden': 'Donare',
  'Bahntechnik · Schweiz': 'Tecnica ferroviaria · Svizzera',
  'Schweizer Bahnfahrzeuge entdecken.': 'Scoprire i veicoli ferroviari svizzeri.',
  'Technik, Geschichte und Einsatzgebiete.<br>Entdecke die Fahrzeuge hinter dem Bahnalltag.': 'Tecnica, storia e ambiti d’impiego.<br>Scopri i veicoli dietro la ferrovia di ogni giorno.',
  'Fahrzeug suchen': 'Cerca un veicolo',
  'Suchen': 'Cerca',
  'Bereiche': 'Settori',
  'Bilder aus der Schweizer Bahnwelt': 'Immagini dal mondo ferroviario svizzero',
  'Diashow': 'Presentazione',
  'Bild wählen': 'Scegli un’immagine',
  'Vorheriges Bild': 'Immagine precedente',
  'Nächstes Bild': 'Immagine successiva',
  'Diashow anhalten': 'Metti in pausa la presentazione',
  'Diashow abspielen': 'Avvia la presentazione',
  'Bild {n}: {t}': 'Immagine {n}: {t}',
  'Zum Fahrzeug': 'Vai al veicolo',
  'Foto:': 'Foto:',
  'Kategorien': 'Categorie',
  'Fahrzeuge nach Bereich': 'Veicoli per settore',
  'Sammelalbum': 'Album della collezione',
  'Tippe auf einer Fahrzeugseite auf «Hab ich gesehen». Die Liste bleibt in deinem Browser.': 'Sulla pagina di un veicolo tocca «L’ho visto». L’elenco resta nel tuo browser.',
  'Zeitstrahl': 'Linea del tempo',
  'Seit wann sie fahren': 'Da quando circolano',
  'Alle Fahrzeuge mit bekanntem Jahr der ersten Inbetriebnahme, vom ältesten zum neusten. Wische oder scrolle zur Seite.': 'Tutti i veicoli con anno noto della prima messa in servizio, dal più vecchio al più recente. Scorri lateralmente.',
  'Fahrzeuge nach Jahr der Inbetriebnahme': 'Veicoli per anno di messa in servizio',
  'Spurweite': 'Scartamento',
  'Normalspur oder Meterspur': 'Scartamento normale o metrico',
  'Zwei Führerstandsfahrten. Auf Normalspur geht es mit 200 km/h durch einen Tunnel und durch zwei Bahnhöfe mit vielen Weichen, auf Meterspur über eine Weichenverbindung nach Lindmatt.': 'Due viaggi in cabina di guida. A scartamento normale si attraversano a 200 km/h una galleria e due stazioni con molti scambi; a scartamento metrico si passa per una comunicazione fino a Lindmatt.',
  'Spurweite wählen': 'Scegli lo scartamento',
  'Normalspur': 'Scartamento normale',
  'Meterspur': 'Scartamento metrico',
  'Spurweite = Abstand der Schieneninnenkanten, gemessen 14 mm unter Schienenoberkante.': 'Scartamento = distanza tra i bordi interni delle rotaie, misurata 14 mm sotto il piano del ferro.',
  'Fahrdaten in Echtzeit': 'Dati di marcia in tempo reale',
  'Live-Fahrdaten': 'Dati di marcia in diretta',
  'Gefahren': 'Percorsi',
  'Tempo': 'Velocità',
  'Fahrzeit': 'Tempo di viaggio',
  'Bei <b id="lc-kmh">0 km/h</b> legt der Zug zurück:': 'A <b id="lc-kmh">0 km/h</b> il treno percorre:',
  'pro Sekunde': 'al secondo',
  'in 10 Sekunden': 'in 10 secondi',
  'pro Minute': 'al minuto',
  'pro Stunde': 'all’ora',
  'Rechnung: km/h ÷ 3,6 = Meter pro Sekunde': 'Calcolo: km/h ÷ 3,6 = metri al secondo',
  'Rechnung: {kmh} km/h ÷ 3,6 = {ms} m pro Sekunde': 'Calcolo: {kmh} km/h ÷ 3,6 = {ms} m al secondo',
  'Der Zug steht: 0 m pro Sekunde.': 'Il treno è fermo: 0 m al secondo.',
  'Führerstandsfahrt auf Normalspur, 1435 mm': 'Viaggio in cabina a scartamento normale, 1435 mm',
  'Führerstandsfahrt auf Normalspur, 1435 mm: Tunnel, Durchfahrt Erlenried, Halt in Sonnwil': 'Viaggio in cabina a scartamento normale, 1435 mm: galleria, transito a Erlenried, fermata a Sonnwil',
  'Führerstandsfahrt auf Meterspur, 1000 mm: Weichenverbindung und Bahnhof Lindmatt': 'Viaggio in cabina a scartamento metrico, 1000 mm: comunicazione e stazione di Lindmatt',
  'Geschwindigkeit': 'Velocità',
  'Animation pausieren': 'Metti in pausa l’animazione',
  'Animation abspielen': 'Avvia l’animazione',
  'Nächster Punkt: <b>{p}</b> in {m}': 'Prossimo punto: <b>{p}</b> tra {m}',
  'Gleich ist die Runde komplett: noch {m}': 'Il giro è quasi completo: ancora {m}',
  '<b>Meterspur, 1000 mm.</b> Halt am Signal, die Weiche wird umgestellt, dann über die Weichenverbindung und durch den Bahnhof Lindmatt. Typisch für Bahnen wie RhB, MGB oder zb.': '<b>Scartamento metrico, 1000 mm.</b> Fermata al segnale, lo scambio viene manovrato, poi attraverso la comunicazione e la stazione di Lindmatt. Tipico di ferrovie come RhB, MGB o zb.',
  '<b>Normalspur, 1435 mm.</b> Mit 200 km/h durch den Tunnel, Durchfahrt in Erlenried, dann Halt in Sonnwil auf Gleis 1. Unterwegs liegen {n} Weichen, dazu Abstellgleise mit Prellbock und eine Passerelle.': '<b>Scartamento normale, 1435 mm.</b> A 200 km/h nella galleria, transito a Erlenried, poi fermata a Sonnwil sul binario 1. Lungo il percorso ci sono {n} scambi, binari di ricovero con paraurti e una passerella.',
  'Halt am Signal': 'Fermata al segnale',
  'Weichenverbindung auf Gleis 2': 'Comunicazione verso il binario 2',
  'Bahnhof Lindmatt': 'Stazione di Lindmatt',
  'Zurück auf Gleis 1': 'Ritorno sul binario 1',
  'Weiche wird umgestellt': 'Lo scambio viene manovrato',
  'Fahrt frei': 'Via libera',
  'Über die Weichenverbindung auf Gleis 2': 'Attraverso la comunicazione verso il binario 2',
  'Durchfahrt Bahnhof Lindmatt': 'Transito nella stazione di Lindmatt',
  'Tunnel, 320 m': 'Galleria, 320 m',
  'Erlenried, Durchfahrt': 'Erlenried, transito',
  'Weichen Sonnwil': 'Scambi di Sonnwil',
  'Halt Sonnwil, Gleis 1': 'Fermata Sonnwil, binario 1',
  'Ausfahrt aufs Streckengleis': 'Uscita sul binario di linea',
  'Halt in Sonnwil, Gleis 1': 'Fermata a Sonnwil, binario 1',
  'Ausfahrsignal zeigt Fahrt': 'Il segnale di partenza è a via libera',
  'Gleich im Tunnel': 'Tra poco in galleria',
  'Im Tunnel mit 200 km/h': 'In galleria a 200 km/h',
  'Durchfahrt Erlenried': 'Transito a Erlenried',
  'Einfahrt Sonnwil über die Weichen auf Gleis 1': 'Entrata a Sonnwil attraverso gli scambi sul binario 1',
  'Bremsen für den Halt in Sonnwil': 'Frenata per la fermata a Sonnwil',
  'Ausfahrt über die Weichen aufs Streckengleis': 'Uscita attraverso gli scambi sul binario di linea',
  'Beschleunigen auf 200 km/h': 'Accelerazione fino a 200 km/h',
  'Bauteile beschriftet · Fahrt pausiert': 'Componenti con didascalia · viaggio in pausa',

  // ---------- partenze ----------
  'Abfahrten': 'Partenze',
  'Was fährt gerade ab?': 'Che cosa parte adesso?',
  'Die nächsten Abfahrten eines Schweizer Bahnhofs mit Gleis und Verspätung, live aus dem offiziellen Fahrplan.': 'Le prossime partenze di una stazione svizzera con binario e ritardo, in diretta dall’orario ufficiale.',
  'Bahnhof': 'Stazione',
  'Bahnhof, z. B. Fribourg/Freiburg': 'Stazione, p. es. Fribourg/Freiburg',
  'Anzeigen': 'Mostra',
  'Abfahrt': 'Partenza',
  'Zeit': 'Ora',
  'Linie': 'Linea',
  'Nach': 'Per',
  'Gleis': 'Binario',
  'Verspätung': 'Ritardo',
  'Tippe auf ein Ziel, um alle Halte zu sehen. Daten: transport.opendata.ch (Fahrplan der Schweizer Bahnen), alle 60 Sekunden neu geladen.': 'Tocca una destinazione per vedere tutte le fermate. Dati: transport.opendata.ch (orario delle ferrovie svizzere), aggiornati ogni 60 secondi.',
  'Lade Abfahrten …': 'Caricamento delle partenze …',
  'Diesen Bahnhof gibt es nicht. Versuche einen anderen Namen, z. B. «Bern».': 'Questa stazione non esiste. Prova un altro nome, p. es. «Bern».',
  'Halte von {linie} nach {ziel} anzeigen': 'Mostra le fermate del {linie} per {ziel}',
  'Stand': 'Stato',
  'Im Moment keine Abfahrten.': 'Al momento nessuna partenza.',
  'Die Abfahrten können gerade nicht geladen werden. Auf der fertigen Website funktioniert die Tafel; in der Vorschau sind Verbindungen nach aussen gesperrt.': 'Al momento non è possibile caricare le partenze. Sul sito pubblicato il tabellone funziona; nell’anteprima le connessioni verso l’esterno sono bloccate.',
  'Gl.': 'Bin.',

  // ---------- ABC della ferrovia ----------
  'Bahn-ABC': 'ABC della ferrovia',
  'Was bedeuten die Bezeichnungen?': 'Che cosa significano le designazioni?',
  'Was bedeutet «RABDe 500» oder «Re 4/4 II»? Schweizer Bahnfahrzeuge tragen Bezeichnungen, die wie ein Code funktionieren. Hier lernst du, sie zu lesen.': 'Che cosa significano «RABDe 500» o «Re 4/4 II»? I veicoli ferroviari svizzeri portano designazioni che funzionano come un codice. Qui impari a leggerle.',
  'Ganzes Bahn-ABC anzeigen': 'Mostra tutto l’ABC della ferrovia',
  'Weniger anzeigen': 'Mostra meno',

  // ---------- carta della rete ----------
  'Bahnnetz Schweiz': 'Rete ferroviaria svizzera',
  'Alle Bahnstrecken der Schweiz': 'Tutte le linee ferroviarie della Svizzera',
  'SBB, Privatbahnen, Meterspur und Bergbahnen auf einer Karte. Tippe auf eine Strecke für Betreiber, Spurweite, Gleise und Stromsystem.': 'FFS, ferrovie private, scartamento metrico e ferrovie di montagna su un’unica carta. Tocca una linea per vedere gestore, scartamento, binari e sistema di corrente.',
  'Kategorien ein- und ausblenden': 'Mostra o nascondi le categorie',
  'Karte der Schweiz mit allen Bahnstrecken': 'Carta della Svizzera con tutte le linee ferroviarie',
  'Ctrl + Mausrad oder + / − zum Zoomen': 'Ctrl + rotellina o + / − per lo zoom',
  'Hineinzoomen': 'Ingrandisci',
  'Herauszoomen': 'Riduci',
  'Ganze Schweiz zeigen': 'Mostra tutta la Svizzera',
  'SBB Netzkarte (Trafimage)': 'Carta della rete FFS (Trafimage)',
  'Live-Karte der SBB mit Luftbild, Pünktlichkeit, Bahnhofplänen, Frequenzen und Buslinien.': 'Carta in diretta delle FFS con foto aerea, puntualità, piante delle stazioni, frequentazione e linee di autobus.',
  'Öffnen': 'Apri',
  'Rund {km} Bahnstrecke ohne Tram, {n} Abschnitte. Daten: Bundesamt für Verkehr (BAV), Schienennetz, Stand 6. Juli 2021. Landesgrenze: swisstopo.': 'Circa {km} di linee ferroviarie senza tram, {n} tratte. Dati: Ufficio federale dei trasporti (UFT), rete ferroviaria, stato al 6 luglio 2021. Confine nazionale: swisstopo.',
  'Streckenabschnitt': 'Tratta',
  'Betreiber': 'Gestore',
  'Gleise': 'Binari',
  'Doppelspur': 'Doppio binario',
  '{n} Gleise': '{n} binari',
  'Einspur': 'Binario unico',
  'Strom': 'Corrente',
  'Abschnitt': 'Tratta',
  'Normalspur, weitere Bahnen': 'Scartamento normale, altre ferrovie',
  'Andere Spurweiten': 'Altri scartamenti',
  'Tram und Metro': 'Tram e metropolitana',
  'Normalspur, 1435 mm': 'Scartamento normale, 1435 mm',
  'Meterspur, 1000 mm': 'Scartamento metrico, 1000 mm',
  'Dreischienengleis 1000/1435 mm': 'Binario a tre rotaie 1000/1435 mm',
  'Wechselstrom 16,7 Hz': 'Corrente alternata 16,7 Hz',
  'Gleichstrom': 'Corrente continua',
  'Wechselstrom 50 Hz': 'Corrente alternata 50 Hz',
  'Drehstrom': 'Corrente trifase',
  'nicht elektrifiziert': 'non elettrificata',
  'Wechselstrom 16,7 und 50 Hz': 'Corrente alternata 16,7 e 50 Hz',
  'Wechselstrom 16,7 Hz und Gleichstrom': 'Corrente alternata 16,7 Hz e corrente continua',
  'Rhätische Bahn (RhB)': 'Ferrovia retica (RhB)',
  'Schweizerische Südostbahn (SOB)': 'Ferrovia del Sud-Est svizzera (SOB)',
  'Freiburgische Verkehrsbetriebe (TPF)': 'Trasporti pubblici friburghesi (TPF)',
  'Regionalverkehr Bern-Solothurn': 'Trasporti regionali Berna-Soletta',
  'Appenzeller Bahnen': 'Ferrovie appenzellesi',
  'Dampfbahn Furka-Bergstrecke': 'Ferrovia a vapore della linea di valico della Furka',

  // ---------- quiz ----------
  'Quiz': 'Quiz',
  'Wie gut kennst du die Schweizer Bahn?': 'Quanto conosci la ferrovia svizzera?',
  'Drei Levels mit je rund 25 Fragen. Ob du richtig liegst, siehst du erst am Schluss, mit Prozentzahl und allen Antworten.': 'Tre livelli con circa 25 domande ciascuno. Se hai risposto giusto lo vedi solo alla fine, con percentuale e tutte le risposte.',
  'Einfach': 'Facile',
  'Normal': 'Normale',
  'Schwierig': 'Difficile',
  'Bekannte Züge erkennen und Grundwissen zur Bahn.': 'Riconoscere treni noti e nozioni di base sulla ferrovia.',
  'Fahrzeuge, Zahlen und Strecken für Bahnfans.': 'Veicoli, numeri e linee per gli appassionati.',
  'Technik, Geschichte und Details für Profis.': 'Tecnica, storia e dettagli per esperti.',
  '{n} Fragen': '{n} domande',
  'Bestes Ergebnis {p} %': 'Miglior risultato {p} %',
  'Starten': 'Inizia',
  'Frage {i} von {n}': 'Domanda {i} di {n}',
  'Abbrechen': 'Interrompi',
  'Foto zur Frage': 'Foto della domanda',
  'Zurück': 'Indietro',
  'Weiter': 'Avanti',
  'Auswerten': 'Vedi il risultato',
  'Verkleinern': 'Riduci',
  'Vergrössern': 'Ingrandisci',
  'Auswertung': 'Risultato',
  '{r} von {n} richtig': '{r} su {n} giuste',
  'Neues bestes Ergebnis in diesem Level.': 'Nuovo miglior risultato in questo livello.',
  'Nochmals spielen': 'Gioca di nuovo',
  'Anderes Level': 'Altro livello',
  'Ergebnis teilen': 'Condividi il risultato',
  'Richtig': 'Giusto',
  'Falsch': 'Sbagliato',
  'Deine Antwort:': 'La tua risposta:',
  'Richtig wäre:': 'La risposta giusta:',
  'Mehr zu {name}': 'Di più su {name}',
  'Perfekt! Alles richtig.': 'Perfetto! Tutto giusto.',
  'Sehr stark, du kennst dich aus.': 'Bravissimo, te ne intendi.',
  'Gut gemacht!': 'Ben fatto!',
  'Nicht schlecht, da geht noch mehr.': 'Non male, puoi fare ancora meglio.',
  'Noch etwas üben, dann klappt es.': 'Ancora un po’ di esercizio e ce la farai.',
  'Ich habe im RailBase Bahn-Quiz (Level {lv}) {r} von {n} Fragen richtig, das sind {p} %. Schaffst du mehr?': 'Nel quiz ferroviario RailBase (livello {lv}) ho risposto giusto a {r} domande su {n}, cioè il {p} %. Riesci a fare di più?',
  'RailBase Bahn-Quiz': 'Quiz ferroviario RailBase',

  // ---------- categorie ed elenco ----------
  'SBB Personenverkehr': 'FFS Viaggiatori',
  'SBB Cargo': 'FFS Cargo',
  'SBB Infrastruktur': 'FFS Infrastruttura',
  'Rangierfahrzeuge': 'Veicoli di manovra',
  'Dienst- und Spezialfahrzeuge': 'Veicoli di servizio e speciali',
  'Historische Fahrzeuge': 'Veicoli storici',
  'Fernverkehr, Regionalverkehr und S-Bahn: Hochgeschwindigkeits- und Doppelstockzüge, Triebzüge und Lokomotiven.': 'Lunga percorrenza, traffico regionale e S-Bahn: treni ad alta velocità e a due piani, elettrotreni e locomotive.',
  'Lokomotiven für den Güterverkehr im Inland und über die Alpen, inklusive Mehrsystemloks für den Verkehr ins Ausland.': 'Locomotive per il traffico merci in Svizzera e attraverso le Alpi, comprese locomotive multisistema per il traffico verso l’estero.',
  'Fahrzeuge für Bau, Unterhalt und Logistik am Netz: Bauzuglokomotiven und Baudienstfahrzeuge.': 'Veicoli per costruzione, manutenzione e logistica della rete: locomotive per treni cantiere e veicoli del servizio lavori.',
  'Lokomotiven und Traktoren für das Rangieren in Bahnhöfen, Abstellanlagen und Anschlussgleisen.': 'Locomotive e trattori per le manovre in stazioni, impianti di ricovero e binari di raccordo.',
  'Lösch- und Rettungszüge, Schneeräumung, Messfahrzeuge, Krane und Fahrleitungsfahrzeuge.': 'Treni di spegnimento e salvataggio, sgombero neve, veicoli di misura, gru e veicoli per la linea di contatto.',
  'Klassiker der SBB, die heute nicht mehr im Alltag fahren. Viele sind bei SBB Historic oder in Museen erhalten.': 'Classici delle FFS che oggi non circolano più nel servizio quotidiano. Molti sono conservati da FFS Historic o nei musei.',
  'Lokomotiven und Traktoren': 'Locomotive e trattori',
  'Schotter- und Kippwagen': 'Carri per pietrisco e ribaltabili',
  'Schienentransport': 'Trasporto di rotaie',
  'Werkstatt- und Mannschaftswagen': 'Carri officina e carri squadra',
  'Personenverkehr': 'Viaggiatori',
  'Cargo': 'Cargo',
  'Infrastruktur': 'Infrastruttura',
  'Spezialfahrzeuge': 'Veicoli speciali',
  'Historisch': 'Storici',
  'Karte': 'Carta',
  'Zufälliges Fahrzeug': 'Veicolo a caso',
  'Normalspur / Meterspur': 'Scartamento normale / metrico',
  'Impressum': 'Note legali',
  'Datenschutz': 'Protezione dei dati',
  'Vergleich': 'Confronto',
  'Illustration': 'Illustrazione',
  'Kategorie': 'Categoria',
  'Fahrzeuge': 'Veicoli',
  '+{n} weitere': '+{n} altri',
  '{n} Fahrzeuge': '{n} veicoli',
  'Loknummer': 'Numero della locomotiva',
  'Kein Fahrzeug gefunden. Versuche eine Baureihe wie «Re 420».': 'Nessun veicolo trovato. Prova una serie come «Re 420».',
  'seit': 'dal',
  'Gesehen': 'Visto',
  'Kein Fahrzeug passt zu «{q}».': 'Nessun veicolo corrisponde a «{q}».',
  'Wagen ohne eigenen Antrieb': 'Carrozze e carri senza trazione propria',
  'In dieser Kategorie filtern': 'Filtra in questa categoria',
  'Sortieren': 'Ordina',
  'Reihenfolge im Katalog': 'Ordine del catalogo',
  'Name A–Z': 'Nome A–Z',
  'Inbetriebnahme': 'Messa in servizio',
  'Fehler melden': 'Segnala un errore',
  'Start': 'Inizio',

  // ---------- pagina del veicolo ----------
  'Vorläufige Daten · Katalog folgt': 'Dati provvisori · scheda in arrivo',
  'Hab ich gesehen': 'L’ho visto',
  'Zum Vergleich': 'Confronta',
  'Im Vergleich': 'Nel confronto',
  'Vergleich ist voll (3)': 'Confronto pieno (3)',
  'Teilen': 'Condividi',
  'Bilder': 'Immagini',
  'Bildergalerie': 'Galleria di immagini',
  'Technische Daten': 'Dati tecnici',
  'Foto einsenden': 'Invia una foto',
  'Wo fährt er?': 'Dove circola?',
  'Karte der Schweiz mit den Einsatzstrecken': 'Carta della Svizzera con le linee d’impiego',
  'Rot: Strecken und Gebiete laut den Angaben auf dieser Seite. Die Strecken folgen dem Bahnnetz; einzelne Züge können auch anders fahren. Kartendaten: BAV, swisstopo.': 'In rosso: linee e zone secondo le indicazioni di questa pagina. Le linee seguono la rete ferroviaria; singoli treni possono circolare anche altrove. Dati cartografici: UFT, swisstopo.',
  'Weitere Fahrzeuge': 'Altri veicoli',
  'Seitenansicht (Illustration)': 'Vista laterale (illustrazione)',
  'Foto Front': 'Foto frontale',
  'Frontansicht': 'Vista frontale',
  'Foto im Einsatz': 'Foto in servizio',
  'Im Einsatz': 'In servizio',
  'Foto Detail': 'Foto di dettaglio',
  'Detail / Innenraum': 'Dettaglio / interno',
  '{t} folgt': '{t} in arrivo',
  'folgt': 'in arrivo',
  'Noch kein Foto von {name}. Hast du eines?': 'Ancora nessuna foto di {name}. Ne hai una?',
  'Bild {i} von {n}': 'Immagine {i} di {n}',
  '{t}, gross anzeigen': '{t}, mostra in grande',
  'Bild gross': 'Immagine in grande',
  'Quellen': 'Fonti',
  'Vorheriges': 'Precedente',
  'Nächstes': 'Successivo',
  'Zurück zu': 'Torna a',
  'Text kopiert': 'Testo copiato',
  'Link kopiert': 'Link copiato',
  'Kopieren nicht möglich': 'Copia non possibile',
  'Fahrzeug des Tages': 'Veicolo del giorno',
  '{n} von {total} gesehen': '{n} su {total} visti',
  '{n} gesehen': '{n} visti',

  // ---------- confronto ----------
  'Fahrzeuge vergleichen': 'Confronta veicoli',
  'Bis zu drei Fahrzeuge nebeneinander. Füge sie hier oder auf der Fahrzeugseite mit «Zum Vergleich» hinzu. Die Auswahl bleibt in deinem Browser gespeichert.': 'Fino a tre veicoli uno accanto all’altro. Aggiungili qui o sulla pagina del veicolo con «Confronta». La selezione resta salvata nel tuo browser.',
  'Fahrzeug hinzufügen': 'Aggiungi un veicolo',
  'Fahrzeug wählen …': 'Scegli un veicolo …',
  '{name} aus dem Vergleich entfernen': 'Togli {name} dal confronto',
  'Noch nichts ausgewählt. Wähle oben ein Fahrzeug oder tippe auf einer Fahrzeugseite auf «Zum Vergleich».': 'Ancora nulla di selezionato. Scegli un veicolo qui sopra o tocca «Confronta» sulla pagina di un veicolo.',
  'Entfernen': 'Togli',
  'Grün markiert: der höchste Wert in der Zeile. Angaben mit * sind ungefähr.': 'In verde: il valore più alto della riga. I valori con * sono approssimativi.',
  'Vergleich leeren': 'Svuota il confronto',
  'Vergleichen': 'Confronta',
  'Länge im Massstab': 'Lunghezza in scala',
  'Länge folgt': 'Lunghezza in arrivo',
  'Ein Strich = 10 m.': 'Un trattino = 10 m.',
  'Ein Strich = 10 m, ungefähre Werte.': 'Un trattino = 10 m, valori approssimativi.',
  'Typ': 'Tipo',

  // ---------- piè di pagina ----------
  'Die Train Database für die Schweizer Bahn: Fahrzeuge sortiert nach Bereich, mit Daten und Bildern.': 'La Train Database della ferrovia svizzera: i veicoli ordinati per settore, con dati e immagini.',
  '© 2026 HCKD · Stand der Daten: Oktober 2026 ·': '© 2026 HCKD · Stato dei dati: ottobre 2026 ·',
  'Fotos einsenden': 'Invia foto',

  // ---------- finestre di dialogo ----------
  'Schliessen': 'Chiudi',
  'Fehler melden oder Anfrage': 'Segnala un errore o fai una domanda',
  'Was stimmt nicht, oder was möchtest du wissen?': 'Che cosa non va, o che cosa vuoi sapere?',
  'Betrifft:': 'Riguarda:',
  'Art': 'Tipo',
  'Falsche Angabe': 'Indicazione sbagliata',
  'Fehlende Angabe': 'Indicazione mancante',
  'Bild falsch oder fehlt': 'Immagine sbagliata o mancante',
  'Tippfehler': 'Errore di battitura',
  'Fahrzeug fehlt': 'Veicolo mancante',
  'Frage oder Anfrage': 'Domanda o richiesta',
  'Anderes': 'Altro',
  'Beschreibung': 'Descrizione',
  'z. B. Die Höchstgeschwindigkeit ist 160 km/h, nicht 140 km/h.': 'p. es. La velocità massima è 160 km/h, non 140 km/h.',
  'Kontakt für Rückfragen': 'Contatto per domande',
  'freiwillig': 'facoltativo',
  'Name oder E-Mail': 'Nome o e-mail',
  'Nicht ausfüllen': 'Non compilare',
  'Meldung senden': 'Invia la segnalazione',
  'RailBase allgemein': 'RailBase in generale',
  'Bitte beschreibe kurz, was nicht stimmt.': 'Descrivi brevemente che cosa non va.',
  'Bitte höchstens einen Link angeben.': 'Indica al massimo un link.',
  'Du hast in kurzer Zeit schon mehrere Meldungen geschickt. Bitte warte ein paar Minuten. Danke!': 'Hai già inviato diverse segnalazioni in poco tempo. Aspetta qualche minuto, per favore. Grazie!',
  'Wird gesendet …': 'Invio in corso …',
  'Gesendet': 'Inviato',
  'Danke! Deine Meldung ist angekommen und wird geprüft.': 'Grazie! La tua segnalazione è arrivata e verrà verificata.',
  'Senden hat nicht geklappt. Bitte versuche es in einem Moment nochmals. Dein Text bleibt erhalten.': 'L’invio non è riuscito. Riprova tra un momento. Il tuo testo resta salvato.',
  'Hast du ein Foto von diesem Zug?': 'Hai una foto di questo treno?',
  'Lade deine Fotos zuerst bei einem Dienst wie SwissTransfer, WeTransfer, Google Drive oder Dropbox hoch und füge hier den Link ein. Wir prüfen die Fotos und stellen sie mit deinem Namen auf die Seite.': 'Carica prima le tue foto su un servizio come SwissTransfer, WeTransfer, Google Drive o Dropbox e incolla qui il link. Verifichiamo le foto e le pubblichiamo con il tuo nome.',
  'Link zu den Fotos': 'Link alle foto',
  'Name für die Bildunterschrift': 'Nome per la didascalia',
  'E-Mail für Rückfragen': 'E-mail per domande',
  'Wo und wann aufgenommen?': 'Dove e quando è stata scattata?',
  'Ich habe die Fotos selbst gemacht und erlaube RailBase, sie mit meinem Namen auf der Website zu zeigen.': 'Ho scattato io queste foto e permetto a RailBase di mostrarle sul sito con il mio nome.',
  'Fotos senden': 'Invia le foto',
  'beliebiges Fahrzeug (bitte unten angeben)': 'qualsiasi veicolo (indicalo qui sotto)',
  'Bitte füge den Link zu deinen Fotos ein (beginnt mit https://).': 'Incolla il link alle tue foto (inizia con https://).',
  'Bitte gib den Namen an, der unter dem Foto stehen soll.': 'Indica il nome che deve comparire sotto la foto.',
  'Bitte gib eine E-Mail-Adresse für Rückfragen an.': 'Indica un indirizzo e-mail per eventuali domande.',
  'Bitte bestätige, dass du die Fotos selbst gemacht hast und sie gezeigt werden dürfen.': 'Conferma di aver scattato tu le foto e che possono essere mostrate.',
  'Bitte im Textfeld höchstens einen Link angeben.': 'Indica al massimo un link nel campo di testo.',
  'Du hast in kurzer Zeit schon mehrere Nachrichten geschickt. Bitte warte ein paar Minuten. Danke!': 'Hai già inviato diversi messaggi in poco tempo. Aspetta qualche minuto, per favore. Grazie!',
  'Danke! Wir schauen uns deine Fotos an und melden uns bei Fragen.': 'Grazie! Guardiamo le tue foto e ti contattiamo in caso di domande.',
  'Senden hat nicht geklappt. Bitte versuche es in einem Moment nochmals.': 'L’invio non è riuscito. Riprova tra un momento.',
  'Unterstützen': 'Sostieni',
  'RailBase unterstützen': 'Sostieni RailBase',
  'Die Datenbank ist kostenlos und ohne Werbung. Eine kleine Spende hilft beim Ausbau: mehr Fahrzeuge, mehr Bilder, mehr Strecken.': 'La banca dati è gratuita e senza pubblicità. Una piccola donazione aiuta ad ampliarla: più veicoli, più immagini, più linee.',
  'Betrag in CHF': 'Importo in CHF',
  'Empfänger': 'Beneficiario',
  'Mitteilung': 'Comunicazione',
  'wird ergänzt': 'sarà completato',
  'Kopieren': 'Copia',
  'Kopiert': 'Copiato',
  'Bitte gib die Mitteilung bei der Zahlung an. Vielen Dank!': 'Indica la comunicazione al momento del pagamento. Grazie mille!',

  // ---------- aspetto chiaro / scuro ----------
  'automatisch': 'automatico',
  'hell': 'chiaro',
  'dunkel': 'scuro',
  'Darstellung: {jetzt} (wechseln zu {neu})': 'Aspetto: {jetzt} (passa a {neu})',

  // ---------- zone sulla carta «Dove circola?» ----------
  'S-Bahn Zürich': 'S-Bahn di Zurigo',
  'Aargau': 'Argovia',
  'Solothurn': 'Soletta',
  'Luzern': 'Lucerna',
  'Basel': 'Basilea',
  'Neuenburg': 'Neuchâtel',
  'Freiburg': 'Friburgo',
  'Waadt': 'Vaud',

  // ---------- presentazione ----------
  'Regionalzug über einem Bergsee': 'Treno regionale sopra un lago di montagna',
  'FV-Dosto (RABe 502) in den Bergen': 'FV-Dosto (RABe 502) in montagna',
  'Re 460 in einer Bahnhofshalle': 'Re 460 sotto una tettoia di stazione',
  'RABe 503 «Astoro» am Perron': 'RABe 503 «Astoro» al marciapiede',
  'BLS-Triebzüge in Burgdorf': 'Elettrotreni BLS a Burgdorf',
  'Regionalzug im Schnee': 'Treno regionale nella neve',
  'Re 420 von SBB Cargo mit Güterzug': 'Re 420 di FFS Cargo con treno merci',
  'BLS Re 465 mit Autozug': 'Re 465 della BLS con treno navetta per auto',
  'Re 460 mit IC2000 bei der Einfahrt': 'Re 460 con IC2000 in entrata',
  'Rhätische Bahn in Tirano': 'Ferrovia retica a Tirano',
  'Bahnhofsuhr und SBB-Logo': 'Orologio di stazione e logo FFS',
  'Re 620 mit Kesselwagenzug': 'Re 620 con treno di carri cisterna',
  'Triebzug über die Weichen': 'Elettrotreno sugli scambi',
  'Postwagen in der Bahnhofshalle': 'Carro postale sotto la tettoia della stazione'
});

/* ---- 02-texte.js ---- */
/* Italiano – ABC della ferrovia, note legali, protezione dei dati, nomi dei dati tecnici */
uebDict({
  // ---------- ABC della ferrovia ----------
  'Bezeichnung entschlüsseln': 'Decifrare una designazione',
  'Tippe eine Bezeichnung ein oder wähle ein Beispiel.': 'Scrivi una designazione o scegli un esempio.',
  'So liest man eine Bezeichnung': 'Come si legge una designazione',
  'Beispiel Re 4/4 II': 'Esempio Re 4/4 II',
  'schnelle Lok': 'locomotiva veloce',
  'elektrisch': 'elettrica',
  '4 von 4 Achsen angetrieben': '4 assi motori su 4',
  '2. Serie': '2a serie',
  'Zuerst kommen Grossbuchstaben für die Art des Fahrzeugs, dann Kleinbuchstaben für den Antrieb. Danach folgen bei alten Bezeichnungen die Achsen und die Serie, bei neuen eine dreistellige Baureihennummer.': 'Prima vengono le maiuscole per il tipo di veicolo, poi le minuscole per la trazione. Seguono, nelle vecchie designazioni, gli assi e la serie; nelle nuove, un numero di serie a tre cifre.',
  'Grossbuchstaben bei Lokomotiven': 'Maiuscole delle locomotive',
  'Streckenlok mit höherer Kurvengeschwindigkeit, mindestens 110 km/h (z. B. Re 460)': 'locomotiva di linea con velocità in curva più alta, almeno 110 km/h (p. es. Re 460)',
  'Normalspur-Streckenlok, schneller als 80 km/h (z. B. Ae 6/6)': 'locomotiva di linea a scartamento normale, oltre 80 km/h (p. es. Ae 6/6)',
  'langsamere Streckenloks: B 70–80 km/h, C 60–65 km/h, D 45–55 km/h': 'locomotive di linea più lente: B 70–80 km/h, C 60–65 km/h, D 45–55 km/h',
  'Rangierlok (z. B. Ee 922)': 'locomotiva di manovra (p. es. Ee 922)',
  'Lok für Schmalspur, z. B. Meterspur (z. B. Ge 4/4 III der RhB)': 'locomotiva a scartamento ridotto, p. es. metrico (p. es. Ge 4/4 III della RhB)',
  'Lok für Zahnradbahnen': 'locomotiva per ferrovie a cremagliera',
  'Traktor, ein kleines Rangierfahrzeug (z. B. Tm 232)': 'trattore, un piccolo veicolo di manovra (p. es. Tm 232)',
  'Grossbuchstaben bei Triebzügen und Triebwagen': 'Maiuscole di elettrotreni e automotrici',
  'Bei Fahrzeugen mit Fahrgastraum zeigen die Buchstaben, was drin ist.': 'Nei veicoli con compartimento viaggiatori le lettere indicano che cosa c’è a bordo.',
  'ganz vorne: höhere Kurvengeschwindigkeit, mindestens 110 km/h': 'all’inizio: velocità in curva più alta, almeno 110 km/h',
  'Plätze in der 1. Klasse': 'posti in 1a classe',
  'Plätze in der 2. Klasse': 'posti in 2a classe',
  'Gepäckabteil': 'compartimento bagagli',
  'Postabteil': 'compartimento postale',
  'Dienstfahrzeug': 'veicolo di servizio',
  'Beispiel: <b>RABDe 500</b> (ICN) ist ein schneller elektrischer Zug mit 1. Klasse, 2. Klasse und Gepäckabteil.': 'Esempio: il <b>RABDe 500</b> (ICN) è un treno elettrico veloce con 1a classe, 2a classe e compartimento bagagli.',
  'Kleinbuchstaben: der Antrieb': 'Minuscole: la trazione',
  'elektrisch, Strom aus der Fahrleitung': 'elettrica, corrente dalla linea di contatto',
  'Verbrennungsmotor, meist Diesel': 'motore a combustione, per lo più diesel',
  'Batterie (Akku)': 'batteria (accumulatore)',
  'Zahnradantrieb': 'trazione a cremagliera',
  'ohne': 'nessuna',
  'Dampf (z. B. A 3/5)': 'vapore (p. es. A 3/5)',
  'Mehrere Kleinbuchstaben sind möglich: <b>Eem 923</b> fährt elektrisch und mit Diesel, <b>Aem 940</b> ebenso.': 'Sono possibili più minuscole: la <b>Eem 923</b> va a corrente e a diesel, e così la <b>Aem 940</b>.',
  'Die Zahlen': 'I numeri',
  '<b>Alte Bezeichnung, z. B. Re 4/4 II:</b> Die erste Zahl sind die angetriebenen Achsen, die zweite alle Achsen. «4/4» heisst also: vier Achsen, alle angetrieben. Die römische Zahl zählt die Serien mit gleicher Bezeichnung.': '<b>Vecchia designazione, p. es. Re 4/4 II:</b> il primo numero indica gli assi motori, il secondo tutti gli assi. «4/4» significa quindi: quattro assi, tutti motori. Il numero romano conta le serie con la stessa designazione.',
  '<b>Neue Bezeichnung seit 1989, z. B. Re 460:</b> Statt Achsen und Serie gibt es eine dreistellige Baureihe. Bei vielen Streckenloks steckt die Achszahl noch drin: aus der Re 4/4 II wurde die Re 420, aus der Re 6/6 die Re 620. Triebzüge haben Nummern ab 500, z. B. RABe 501 (Giruno) oder RABe 523 (FLIRT).': '<b>Nuova designazione dal 1989, p. es. Re 460:</b> invece di assi e serie c’è un numero di serie a tre cifre. In molte locomotive di linea il numero di assi è ancora presente: la Re 4/4 II è diventata Re 420, la Re 6/6 Re 620. Gli elettrotreni hanno numeri da 500, p. es. RABe 501 (Giruno) o RABe 523 (FLIRT).',
  'Die ganze Fahrzeugnummer': 'Il numero completo del veicolo',
  'Beispiel 91 85 4 460 058-0': 'Esempio 91 85 4 460 058-0',
  'Elektrolok': 'loco elettrica',
  'Schweiz': 'Svizzera',
  'Kennziffer': 'codice',
  'Baureihe': 'Serie',
  'Lok Nr. 58': 'loco n. 58',
  'Prüfziffer': 'cifra di controllo',
  'Diese zwölfstellige Nummer steht auf jedem Fahrzeug. Die Prüfziffer am Schluss wird aus den anderen Ziffern berechnet und zeigt Tippfehler an. Du kannst sie auch in der Suche oben eintippen.': 'Questo numero a dodici cifre si trova su ogni veicolo. La cifra di controllo finale è calcolata dalle altre cifre e segnala gli errori di battitura. Puoi anche digitarlo nella ricerca in alto.',
  'Achsfolge: Bo′Bo′ und Co′Co′': 'Rodiggio: Bo′Bo′ e Co′Co′',
  'zwei bzw. drei angetriebene Achsen hintereinander': 'due o tre assi motori uno dietro l’altro',
  'jede Achse hat einen eigenen Motor': 'ogni asse ha un proprio motore',
  'die Achsen sitzen in einem drehbaren Drehgestell': 'gli assi sono montati in un carrello girevole',
  '<b>Bo′Bo′</b> (Re 460, Re 420) heisst: zwei Drehgestelle mit je zwei einzeln angetriebenen Achsen. <b>Bo′Bo′Bo′</b> (Re 620) hat drei solche Drehgestelle.': '<b>Bo′Bo′</b> (Re 460, Re 420) significa: due carrelli con due assi ciascuno, azionati singolarmente. La <b>Bo′Bo′Bo′</b> (Re 620) ha tre carrelli di questo tipo.',
  'Zugarten auf der Abfahrtstafel': 'Categorie di treni sul tabellone delle partenze',
  'InterCity: schneller Fernverkehr zwischen grossen Städten': 'InterCity: lunga percorrenza veloce tra grandi città',
  'InterRegio: Fernverkehr mit etwas mehr Halten': 'InterRegio: lunga percorrenza con qualche fermata in più',
  'RegioExpress: schneller Regionalzug, hält nicht überall': 'RegioExpress: treno regionale veloce, non ferma ovunque',
  'Regio: Regionalzug mit Halt an allen Stationen': 'Regio: treno regionale che ferma in tutte le stazioni',
  'S-Bahn: dichter Takt in und um Städte, z. B. S30': 'S-Bahn: cadenza fitta in città e dintorni, p. es. S30',
  'internationale Fernzüge': 'treni internazionali a lunga percorrenza',
  'Nightjet: Nachtzug': 'Nightjet: treno notturno',
  'Spurweite und Strom': 'Scartamento e corrente',
  '<b>Normalspur</b> misst 1435 mm, <b>Meterspur</b> 1000 mm (z. B. Rhätische Bahn). Einige Zahnradbahnen wie die Pilatusbahn fahren auf 800 mm.': 'Lo <b>scartamento normale</b> misura 1435 mm, lo <b>scartamento metrico</b> 1000 mm (p. es. Ferrovia retica). Alcune ferrovie a cremagliera come quella del Pilatus circolano su 800 mm.',
  'Das SBB-Netz fährt mit <b>15 kV und 16,7 Hz</b> Wechselstrom, wie Deutschland und Österreich. Italien nutzt <b>3 kV Gleichstrom</b>, viele neue Strecken in Europa <b>25 kV, 50 Hz</b>. Loks für mehrere Länder heissen deshalb Mehrsystemloks.': 'La rete FFS funziona a corrente alternata <b>15 kV e 16,7 Hz</b>, come Germania e Austria. L’Italia usa <b>3 kV corrente continua</b>, molte nuove linee in Europa <b>25 kV, 50 Hz</b>. Le locomotive per più paesi si chiamano quindi locomotive multisistema.',
  'Quelle für das Bezeichnungsschema: Schweizer Typenbezeichnung für Triebfahrzeuge (Bundesamt für Verkehr, SBB), zusammengefasst in der Wikipedia. Teste dein Wissen im <a href="#quiz">Quiz</a>.': 'Fonte dello schema di designazione: designazione svizzera dei veicoli motori (Ufficio federale dei trasporti, FFS), riassunta in Wikipedia. Metti alla prova le tue conoscenze nel <a href="#quiz">quiz</a>.',
  // decodificatore
  'Streckenlok mit höherer Kurvengeschwindigkeit, mindestens 110 km/h': 'locomotiva di linea con velocità in curva più alta, almeno 110 km/h',
  'Normalspur-Streckenlok, schneller als 80 km/h': 'locomotiva di linea a scartamento normale, oltre 80 km/h',
  'Normalspur-Streckenlok, 70–80 km/h': 'locomotiva di linea a scartamento normale, 70–80 km/h',
  'Normalspur-Streckenlok, 60–65 km/h': 'locomotiva di linea a scartamento normale, 60–65 km/h',
  'Normalspur-Streckenlok, 45–55 km/h': 'locomotiva di linea a scartamento normale, 45–55 km/h',
  'Rangierlok': 'locomotiva di manovra',
  'Lok für Schmalspur (z. B. Meterspur)': 'locomotiva a scartamento ridotto (p. es. metrico)',
  'Traktor (kleines Rangierfahrzeug)': 'trattore (piccolo veicolo di manovra)',
  '1. Klasse': '1a classe',
  '2. Klasse': '2a classe',
  '3. Klasse (bis 1956)': '3a classe (fino al 1956)',
  'Spezialabteil': 'compartimento speciale',
  'Verbrennungsmotor (meist Diesel)': 'motore a combustione (per lo più diesel)',
  'funkferngesteuert': 'radiocomandato',
  'Triebzug oder Triebwagen mit höherer Kurvengeschwindigkeit, mindestens 110 km/h': 'elettrotreno o automotrice con velocità in curva più alta, almeno 110 km/h',
  'Triebwagen oder Triebzug mit Fahrgastraum': 'automotrice o elettrotreno con compartimento viaggiatori',
  'kein Kleinbuchstabe: Dampf': 'nessuna minuscola: vapore',
  '{n} Achsen, alle angetrieben': '{n} assi, tutti motori',
  '{a} von {n} Achsen angetrieben': '{a} assi motori su {n}',
  '{n}. Serie mit dieser Bezeichnung': '{n}a serie con questa designazione',
  'Serie': 'serie',
  'Baureihe im neuen System (seit 1989)': 'serie nel nuovo sistema (dal 1989)',
  '{name} ansehen': 'vedi {name}',
  'Das kann ich nicht lesen. Achte auf Gross- und Kleinschreibung, z. B. «Re 4/4 II» oder «RABe 523».': 'Non riesco a leggerlo. Fai attenzione a maiuscole e minuscole, p. es. «Re 4/4 II» o «RABe 523».',

  // ---------- note legali ----------
  'Verantwortlich für diese Website': 'Responsabile di questo sito',
  'Kontakt: über das Formular <button class="link-btn" type="button" data-report="allg" aria-haspopup="dialog">Fehler melden</button>. Nachrichten kommen direkt bei uns an.': 'Contatto: tramite il modulo <button class="link-btn" type="button" data-report="allg" aria-haspopup="dialog">Segnala un errore</button>. I messaggi arrivano direttamente a noi.',
  'Unabhängiges Projekt': 'Progetto indipendente',
  'RailBase by HCKD ist ein privates, nicht kommerzielles Projekt von Bahnfans. Es steht in keiner Verbindung zu den Schweizerischen Bundesbahnen SBB, zu SBB Cargo oder zu anderen Bahnunternehmen. Namen und Marken gehören ihren Inhaberinnen und Inhabern und werden nur zur Beschreibung der Fahrzeuge genannt.': 'RailBase by HCKD è un progetto privato e non commerciale di appassionati di ferrovia. Non ha alcun legame con le Ferrovie federali svizzere FFS, con FFS Cargo o con altre imprese ferroviarie. Nomi e marchi appartengono ai rispettivi titolari e sono citati solo per descrivere i veicoli.',
  'Haftung': 'Responsabilità',
  'Alle Angaben sind sorgfältig zusammengetragen, aber ohne Gewähr. Werte, die als vorläufig oder mit * markiert sind, können abweichen. Wenn dir ein Fehler auffällt, melde ihn bitte über «Fehler melden».': 'Tutte le indicazioni sono state raccolte con cura, ma senza garanzia. I valori indicati come provvisori o con * possono differire. Se noti un errore, segnalalo tramite «Segnala un errore».',
  'Für Inhalte externer Websites, auf die wir verlinken, sind deren Betreiber verantwortlich.': 'Dei contenuti dei siti esterni a cui rimandiamo sono responsabili i rispettivi gestori.',
  'Bildnachweis und Rechte': 'Crediti fotografici e diritti',
  'Eigene und zugeschickte Fotos auf den Fahrzeugseiten: mit Erlaubnis der Fotografinnen und Fotografen verwendet. Weiterverwendung nur mit deren Zustimmung.': 'Foto proprie e inviate sulle pagine dei veicoli: usate con il permesso dei fotografi. Ogni ulteriore utilizzo richiede il loro consenso.',
  'Fotos von Wikimedia Commons: unter freien Lizenzen (CC0, CC BY, CC BY-SA), für die Website verkleinert. Fotograf, Lizenz und Link stehen unter jedem Bild und in der Liste unten. Für diese Fotos gilt die jeweilige Lizenz, nicht das Urheberrecht von RailBase.': 'Foto di Wikimedia Commons: con licenze libere (CC0, CC BY, CC BY-SA), ridotte per il sito. Fotografo, licenza e link si trovano sotto ogni immagine e nell’elenco qui sotto. Per queste foto vale la rispettiva licenza, non il diritto d’autore di RailBase.',
  'Illustrationen, Streckenmodell und Gestaltung: HCKD.': 'Illustrazioni, modello di linea e grafica: HCKD.',
  'Kartendaten: Bundesamt für Verkehr (BAV), Datensatz Schienennetz. Landesgrenze: swisstopo.': 'Dati cartografici: Ufficio federale dei trasporti (UFT), set di dati della rete ferroviaria. Confine nazionale: swisstopo.',
  'Schrift: Source Sans 3 von Adobe, SIL Open Font License 1.1.': 'Carattere: Source Sans 3 di Adobe, SIL Open Font License 1.1.',
  'Fotos von Wikimedia Commons': 'Foto di Wikimedia Commons',
  'Bildnachweis der Fotos': 'Crediti delle foto',
  'Stand: Oktober 2026': 'Stato: ottobre 2026',

  // ---------- protezione dei dati ----------
  'Datenschutzerklärung': 'Informativa sulla protezione dei dati',
  'Kurz gesagt: Wir verwenden keine Cookies und keine Werbung und verfolgen dich nicht über andere Websites. Wir zählen nur anonym, welche Seiten wie oft aufgerufen werden.': 'In breve: non usiamo cookie né pubblicità e non ti seguiamo su altri siti. Contiamo solo, in forma anonima, quali pagine vengono visitate e quante volte.',
  'Verantwortlich': 'Responsabile',
  'Kevin D., 1700 Fribourg, Schweiz. Kontakt über das Formular <button class="link-btn" type="button" data-report="allg" aria-haspopup="dialog">Fehler melden</button>. Es gilt das Schweizer Datenschutzgesetz (DSG).': 'Kevin D., 1700 Fribourg, Svizzera. Contatto tramite il modulo <button class="link-btn" type="button" data-report="allg" aria-haspopup="dialog">Segnala un errore</button>. Si applica la legge svizzera sulla protezione dei dati (LPD).',
  'Hosting': 'Hosting',
  'Die Website liegt bei GitHub Pages (GitHub Inc., USA). Beim Aufruf verarbeitet GitHub technisch nötige Daten wie IP-Adresse, Zeitpunkt und aufgerufene Seite, um die Seite auszuliefern und gegen Missbrauch zu schützen. Wir selbst sehen diese Daten nicht. Details stehen in der Datenschutzerklärung von GitHub.': 'Il sito è ospitato da GitHub Pages (GitHub Inc., USA). Durante la visita GitHub tratta i dati tecnicamente necessari come indirizzo IP, ora e pagina visitata, per fornire la pagina e proteggerla dagli abusi. Noi stessi non vediamo questi dati. I dettagli si trovano nell’informativa sulla protezione dei dati di GitHub.',
  'Schrift und Inhalte': 'Carattere e contenuti',
  'Schrift, Bilder und Kartendaten liegen auf demselben Server wie die Website. Beim Aufruf werden keine Daten an Google Fonts geschickt; ausser an GoatCounter (siehe Besucherzählung) und an den Fahrplandienst der Abfahrtstafel gehen keine Daten an Dritte.': 'Carattere, immagini e dati cartografici si trovano sullo stesso server del sito. Nessun dato viene inviato a Google Fonts; a parte GoatCounter (vedi conteggio delle visite) e il servizio d’orario del tabellone delle partenze, nessun dato va a terzi.',
  'Besucherzählung': 'Conteggio delle visite',
  'Um zu sehen, welche Seiten gefragt sind, nutzen wir GoatCounter (goatcounter.com). GoatCounter setzt keine Cookies und speichert keine IP-Adressen. Erfasst werden die aufgerufene Seite, die Seite, von der du kommst, Browser und Betriebssystem, Bildschirmgrösse und das Land. Daraus lässt sich nicht ablesen, wer du bist. Die Zahlen sehen nur wir. Die Daten können ausserhalb der Schweiz verarbeitet werden.': 'Per vedere quali pagine interessano usiamo GoatCounter (goatcounter.com). GoatCounter non usa cookie e non salva indirizzi IP. Vengono registrati la pagina visitata, la pagina da cui arrivi, browser e sistema operativo, dimensioni dello schermo e paese. Da questi dati non si può risalire a chi sei. I numeri li vediamo solo noi. I dati possono essere trattati fuori dalla Svizzera.',
  'Ausserdem zählt GoatCounter einmal pro Browser, ob jemand ein Quiz beendet (und in welchem Level), die Sammlung begonnen oder eine Sichtung eingetragen hat. Dabei wird nur diese Tatsache übermittelt, nicht dein Ergebnis, nicht deine Fahrzeuge und nicht deine Sichtungen. So sehen wir, wie viele Menschen mitmachen.': 'Inoltre GoatCounter conta una volta per browser se qualcuno ha terminato un quiz (e a quale livello), iniziato la collezione o inserito un avvistamento. Viene trasmesso solo questo fatto, non il tuo risultato, né i tuoi veicoli, né i tuoi avvistamenti. Così vediamo quante persone partecipano.',
  'Speicher im Browser': 'Memoria nel browser',
  'Dein Browser merkt sich im lokalen Speicher (localStorage), welche Fahrzeuge du für den Vergleich ausgewählt und im Sammelalbum als gesehen markiert hast, sowie dein bestes Quiz-Ergebnis pro Level, deine Sprache und ob du die Seite hell oder dunkel möchtest. Zum Schutz vor Spam merkt er sich ausserdem für 10 Minuten, wann du eine Meldung geschickt hast. Diese Angaben verlassen dein Gerät nicht. Du kannst sie löschen, indem du die Websitedaten im Browser löschst.': 'Il tuo browser memorizza nella memoria locale (localStorage) quali veicoli hai scelto per il confronto e segnato come visti nell’album, il tuo miglior risultato al quiz per livello, la tua lingua e se preferisci il sito chiaro o scuro. Per proteggersi dallo spam ricorda inoltre per 10 minuti quando hai inviato una segnalazione. Queste informazioni non lasciano il tuo dispositivo. Puoi cancellarle eliminando i dati del sito nel browser.',
  'Abfahrtstafel': 'Tabellone delle partenze',
  'Für die Abfahrtstafel fragt dein Browser den Fahrplan direkt bei transport.opendata.ch (Opendata.ch) ab. Dabei werden der gesuchte Bahnhof und, wie bei jedem Seitenaufruf, deine IP-Adresse übermittelt. Die Tafel lädt nur, solange sie auf dem Bildschirm sichtbar ist. Den zuletzt gewählten Bahnhof merkt sich dein Browser im lokalen Speicher.': 'Per il tabellone delle partenze il tuo browser interroga l’orario direttamente presso transport.opendata.ch (Opendata.ch). Vengono trasmessi la stazione cercata e, come per ogni visita, il tuo indirizzo IP. Il tabellone si carica solo finché è visibile sullo schermo. Il tuo browser ricorda nella memoria locale l’ultima stazione scelta.',
  'Der Knopf «Teilen» öffnet das Teilen-Menü deines Geräts oder kopiert den Link. Was du danach damit machst, bestimmst du selbst; wir erfahren davon nichts.': 'Il pulsante «Condividi» apre il menu di condivisione del tuo dispositivo o copia il link. Che cosa ne fai dopo lo decidi tu; noi non ne sappiamo nulla.',
  'Sendest du eine Meldung, übermitteln wir deinen Text, die betroffene Seite und, falls du sie angibst, deinen Namen und deine E-Mail-Adresse über den Dienst Web3Forms (web3forms.com) an unser Postfach. Dabei können Daten auch ausserhalb der Schweiz, zum Beispiel in den USA, verarbeitet werden. Wir nutzen die Angaben nur, um die Meldung zu bearbeiten und dir allenfalls zu antworten, und löschen sie, wenn sie nicht mehr gebraucht werden.': 'Se invii una segnalazione, trasmettiamo il tuo testo, la pagina interessata e, se li indichi, il tuo nome e il tuo indirizzo e-mail alla nostra casella tramite il servizio Web3Forms (web3forms.com). I dati possono essere trattati anche fuori dalla Svizzera, per esempio negli USA. Usiamo queste informazioni solo per gestire la segnalazione ed eventualmente risponderti, e le cancelliamo quando non servono più.',
  'Wer uns Fotos anbietet, schickt über dasselbe Formular wie bei «Fehler melden» (Web3Forms) einen Link zu den Fotos, den Namen für die Bildunterschrift, eine E-Mail-Adresse für Rückfragen und auf Wunsch Ort und Datum. Die Fotos selbst liegen beim gewählten Dienst (z. B. SwissTransfer); dort gelten dessen Bedingungen. Wir nutzen die Angaben nur, um die Fotos zu prüfen, nachzufragen und den Namen beim Foto zu nennen.': 'Chi ci offre foto invia, tramite lo stesso modulo di «Segnala un errore» (Web3Forms), un link alle foto, il nome per la didascalia, un indirizzo e-mail per domande e, se desiderato, luogo e data. Le foto restano sul servizio scelto (p. es. SwissTransfer), le cui condizioni si applicano. Usiamo queste informazioni solo per verificare le foto, fare domande e citare il nome accanto alla foto.',
  'Spenden laufen per TWINT oder Banküberweisung direkt über deine App oder deine Bank. Die Website verarbeitet dabei keine Zahlungsdaten.': 'Le donazioni avvengono tramite TWINT o bonifico bancario, direttamente con la tua app o la tua banca. Il sito non tratta alcun dato di pagamento.',
  'Externe Links': 'Link esterni',
  'Links zu anderen Websites, etwa zur SBB-Netzkarte, öffnen sich in einem neuen Tab. Dort gilt die Datenschutzerklärung des jeweiligen Anbieters.': 'I link ad altri siti, come la carta della rete FFS, si aprono in una nuova scheda. Lì vale l’informativa sulla protezione dei dati del rispettivo fornitore.',
  'Deine Rechte': 'I tuoi diritti',
  'Du kannst Auskunft über deine Daten verlangen und sie berichtigen oder löschen lassen. Schreib uns dafür über das Formular.': 'Puoi chiedere informazioni sui tuoi dati e farli correggere o cancellare. Scrivici tramite il modulo.',

  // ---------- nomi dei dati tecnici ----------
  'Hersteller': 'Costruttore',
  'Zugbildung': 'Composizione',
  'Stromsystem': 'Sistema di corrente',
  'Höchstgeschwindigkeit': 'Velocità massima',
  'Länge': 'Lunghezza',
  'Gewicht': 'Peso',
  'Leistung': 'Potenza',
  'Anfahrzugkraft': 'Sforzo di trazione all’avviamento',
  'Sitzplätze': 'Posti a sedere',
  'Restaurant': 'Ristorante',
  'Niederflureinstieg': 'Accesso a pianale ribassato',
  'Anzahl': 'Numero',
  'In Betrieb seit': 'In servizio dal',
  'Fahrzeugnummern': 'Numeri dei veicoli',
  'Neigetechnik': 'Assetto variabile',
  'Antrieb': 'Trazione',
  'Bauart': 'Tipo costruttivo',
  'Einsatz': 'Impiego',
  'Beschaffungszeit': 'Periodo d’acquisto',
  'Fahrzeugfamilie': 'Famiglia di veicoli',
  'Grundtyp': 'Tipo di base',
  'Einstieg': 'Accesso',
  'Erste Region': 'Prima regione',
  'Fahrzeugart': 'Tipo di veicolo',
  'Niederflur': 'Pianale ribassato',
  'Status': 'Stato',
  'Achsanordnung': 'Disposizione degli assi',
  'Achsfolge': 'Rodiggio',
  'Plattform': 'Piattaforma',
  'Nummern': 'Numeri',
  'Fahrzeugtyp': 'Tipo di veicolo',
  'Breite': 'Larghezza',
  'Wagenübergang': 'Intercomunicante',
  'Steuerwagen': 'Carrozza pilota',
  'Baureihen': 'Serie',
  'Elektrische Bremse': 'Freno elettrico',
  'Zugsicherung': 'Sicurezza dei treni',
  'Eigentümer': 'Proprietario',
  'Tankinhalt': 'Capacità del serbatoio',
  'Mehrfachtraktion': 'Trazione multipla',
  'Rangiergang': 'Marcia di manovra',
  'Streckengang': 'Marcia di linea',
  'Zuladung': 'Carico utile',
  'Arbeitsmodus': 'Modalità lavoro',
  'Motor': 'Motore',
  'Umbau': 'Trasformazione',
  'Ursprungsbaureihe': 'Serie d’origine',
  'Steuerung': 'Comando',
  'Zugbeeinflussung': 'Controllo della marcia dei treni',
  'Ladeplattform': 'Piattaforma di carico',
  'Ladekran': 'Gru di carico',
  'Fahrtyp': 'Tipo di marcia',
  'Achsen': 'Assi',
  'Nutzlast': 'Carico utile',
  'Behältervolumen': 'Volume delle vasche',
  'Entladung': 'Scarico',
  'Arbeitsenergie': 'Energia di lavoro',
  'Eigener Fahrantrieb': 'Trazione propria',
  'UIC-Bezeichnung': 'Designazione UIC',
  'Volumen': 'Volume',
  'Förderband': 'Nastro trasportatore',
  'Abdeckung': 'Copertura',
  'Behälter': 'Cassoni',
  'Ausrüstung': 'Equipaggiamento',
  'Ausführung': 'Versione',
  'Arbeitsantrieb': 'Azionamento di lavoro',
  'Bedienung': 'Comando',
  'Bezeichnung': 'Designazione',
  'Datenstand': 'Stato dei dati',
  'Formation': 'Composizione',
  'Transportwagen': 'Carri di trasporto',
  'Schienenlänge': 'Lunghezza delle rotaie',
  'Kapazität': 'Capacità',
  'Transport': 'Trasporto',
  'Krane': 'Gru',
  'Energie': 'Energia',
  'Zugänge': 'Accessi',
  'Sicherheitsregel': 'Regola di sicurezza',
  'Fahrzeugrolle': 'Ruolo del veicolo',
  'Einzelfahrdaten': 'Dati del singolo veicolo',
  'Fahrtypen': 'Tipi di marcia',
  'Projekt': 'Progetto',
  'Langname': 'Nome completo',
  'Bestand': 'Effettivo',
  'Vorgänger': 'Predecessore',
  'Unterserie ex Tm III': 'Sottoserie ex Tm III',
  'Unterserie ex Tm IV': 'Sottoserie ex Tm IV',
  'Nachfolger bei SBB Infrastruktur': 'Successore presso FFS Infrastruttura',
  'Basisfahrzeug': 'Veicolo di base',
  'Ausführungen': 'Versioni',
  'Wasser': 'Acqua',
  'Pumpenleistung': 'Portata della pompa',
  'Rettungskapazität': 'Capacità di salvataggio',
  'Schleppleistung': 'Capacità di traino',
  'Autonomer Betrieb': 'Funzionamento autonomo',
  'Tanklöschwagen': 'Carro cisterna antincendio',
  'Gerätefahrzeug': 'Veicolo attrezzi',
  'Rettungsfahrzeuge': 'Veicoli di salvataggio',
  'Rettungsfahrzeug': 'Veicolo di salvataggio',
  'Schaumextrakt': 'Schiumogeno',
  'Atemluft': 'Aria respirabile',
  'Anhängelast': 'Carico rimorchiabile',
  'Rettungsplätze': 'Posti di salvataggio',
  'Schaum': 'Schiuma',
  'Maximale Tragfähigkeit': 'Portata massima',
  'Schwenkwinkel': 'Angolo di rotazione',
  'Eigenmasse': 'Massa propria',
  'Netz': 'Rete',
  'Ablösung': 'Sostituzione',
  'Nachfolger': 'Successore',
  'Tragfähigkeit': 'Portata',
  'Im SBB-Bestand': 'Nell’effettivo FFS',
  'Wagengattung': 'Categoria di carro',
  'Gegengewicht': 'Contrappeso',
  'Basistyp': 'Tipo di base',
  'Kranklasse': 'Classe di gru',
  'Katalogstatus 2026': 'Stato nel catalogo 2026',
  'Fahrzeuggruppe': 'Gruppo di veicoli',
  'Arbeitsmittel': 'Mezzi di lavoro',
  'Weitere Ausrüstung': 'Altro equipaggiamento',
  'Arbeitsort': 'Luogo di lavoro',
  'Öffentlich genannte Typen': 'Tipi citati pubblicamente',
  'Ausmusterung': 'Ritiro dal servizio',
  'Spätere Bezeichnung': 'Designazione successiva',
  'Kesseldruck': 'Pressione della caldaia',
  'Treibraddurchmesser': 'Diametro delle ruote motrici',
  'Vorräte': 'Scorte',
  'Modernisierung': 'Modernizzazione'
});

/* ---- 03-standort.js ---- */
/* Italiano – tabellone delle partenze: stazione più vicina */
uebDict({
  'In meiner Nähe': 'Vicino a me',
  'Bahnhof in meiner Nähe anzeigen': 'Mostra la stazione più vicina',
  'Suche den nächsten Bahnhof …': 'Ricerca della stazione più vicina …',
  'Kein Halt in der Nähe gefunden. Tippe einen Bahnhof ein.': 'Nessuna fermata trovata nelle vicinanze. Scrivi il nome di una stazione.',
  'Standort nicht erlaubt. Du kannst den Bahnhof auch eintippen.': 'Posizione non consentita. Puoi anche scrivere il nome della stazione.',
  'Standort nicht gefunden. Tippe einen Bahnhof ein.': 'Posizione non trovata. Scrivi il nome di una stazione.',
  'Nur wenn du auf «In meiner Nähe» tippst, fragt dein Browser dich, ob die Seite deinen Standort verwenden darf. Sagst du ja, wird der Standort auf etwa 100 Meter gerundet an transport.opendata.ch geschickt, um den nächsten Bahnhof zu finden. Wir speichern den Standort nicht.': 'Solo se tocchi «Vicino a me» il tuo browser ti chiede se il sito può usare la tua posizione. Se acconsenti, la posizione viene arrotondata a circa 100 metri e inviata a transport.opendata.ch per trovare la stazione più vicina. Non salviamo la tua posizione.'
});

/* ---- 04-app.js ---- */
/* Italiano – installare come app */
uebDict({
  'App installieren': 'Installa l’app',
  'Auf dem iPhone: In Safari unten auf «Teilen» tippen, dann «Zum Home-Bildschirm». Danach erscheint RailBase als App auf deinem Handy.': 'Su iPhone: in Safari tocca «Condividi» in basso, poi «Aggiungi alla schermata Home». RailBase appare poi come app sul tuo telefono.',
  'Damit die Website auch als App schnell startet und ohne Internet funktioniert, legt dein Browser besuchte Seiten, Bilder und Skripte in einem Zwischenspeicher auf deinem Gerät ab. Darin stehen nur Inhalte dieser Website, keine Angaben über dich.': 'Affinché il sito si avvii rapidamente come app e funzioni anche senza Internet, il tuo browser conserva pagine, immagini e script visitati in una memoria cache sul tuo dispositivo. Contiene solo contenuti di questo sito, nessuna informazione su di te.'
});

/* ---- 05-funktionen.js ---- */
/* Italiano – menu, schede, avvistamenti, novità, riconoscere i treni */
uebDict({
  // menu
  'Hauptmenü': 'Menu principale',
  'Menü': 'Menu',
  'Entdecken': 'Scoprire',
  'Neu und aktualisiert': 'Novità e aggiornamenti',
  'Züge unterscheiden': 'Distinguere i treni',
  'Über RailBase': 'Su RailBase',
  // schede
  'Seit': 'Dal',
  '1980er': 'anni 1980',
  'Datenstand: {d}': 'Stato dei dati: {d}',
  'Oktober 2026': 'ottobre 2026',
  '© 2026 HCKD · Fahrzeugdaten: Stand Oktober 2026 · Netzkarte: Stand Juli 2021 ·': '© 2026 HCKD · Dati dei veicoli: ottobre 2026 · Carta della rete: luglio 2021 ·',
  'Kartendaten: Stand Juli 2021': 'Dati cartografici: luglio 2021',
  'Steckbrief (PDF)': 'Scheda (PDF)',
  'Öffnet die Druckansicht. Dort «Als PDF speichern» wählen.': 'Apre l’anteprima di stampa. Lì scegli «Salva come PDF».',
  'Steckbrief': 'Scheda',
  'Kurz erklärt': 'In breve',
  // avvistamenti
  'Meine Sichtungen': 'I miei avvistamenti',
  'Meine Sichtungen ({n})': 'I miei avvistamenti ({n})',
  '+ Sichtung eintragen': '+ Aggiungi un avvistamento',
  'Datum': 'Data',
  'Ort': 'Luogo',
  'Fahrzeugnummer': 'Numero del veicolo',
  'Notiz': 'Nota',
  'z. B. Bern, Gleis 5': 'p. es. Berna, binario 5',
  'z. B. 460 058': 'p. es. 460 058',
  'Speichern': 'Salva',
  'Nr.': 'n.',
  'Sichtung vom {d} löschen': 'Elimina l’avvistamento del {d}',
  '1 Sichtung': '1 avvistamento',
  '{s} Sichtungen': '{s} avvistamenti',
  'Sammlung sichern (Datei)': 'Salva la collezione (file)',
  'Als Tabelle (CSV)': 'Come tabella (CSV)',
  'Sammlung laden': 'Carica una collezione',
  'Fahrzeug': 'Veicolo',
  'Gesichert: {n} Fahrzeuge, {s} Sichtungen.': 'Salvato: {n} veicoli, {s} avvistamenti.',
  'Geladen: {n} Fahrzeuge, {s} neue Sichtungen.': 'Caricato: {n} veicoli, {s} nuovi avvistamenti.',
  'Diese Datei kann nicht gelesen werden. Wähle eine Datei, die mit «Sammlung sichern» erstellt wurde.': 'Questo file non può essere letto. Scegli un file creato con «Salva la collezione».',
  'Auch deine Sichtungen (Datum, Ort, Fahrzeugnummer und Notiz) bleiben nur in deinem Browser. Mit «Sammlung sichern» lädst du sie als Datei auf dein Gerät herunter; diese Datei kannst du später mit «Sammlung laden» wieder einlesen. Dabei wird nichts an uns geschickt.': 'Anche i tuoi avvistamenti (data, luogo, numero del veicolo e nota) restano solo nel tuo browser. Con «Salva la collezione» li scarichi come file sul tuo dispositivo; potrai poi rileggerlo con «Carica una collezione». Non ci viene inviato nulla.',
  // novità
  'Was ist neu?': 'Che cosa c’è di nuovo?',
  'Die letzten Ergänzungen auf einen Blick: neue Fahrzeuge, neue Fotos und neue Funktionen.': 'Le ultime aggiunte in breve: nuovi veicoli, nuove foto e nuove funzioni.',
  'Alle anzeigen': 'Mostra tutto',
  'Neu': 'Nuovo',
  'Aktualisiert': 'Aggiornato',
  'Ansehen': 'Vedi',
  'Sichtungen mit Datum, Ort und Fahrzeugnummer eintragen und die Sammlung als Datei sichern.': 'Registrare avvistamenti con data, luogo e numero del veicolo e salvare la collezione come file.',
  'Steckbrief jedes Fahrzeugs als PDF und ein Vergleich der FLIRT-Baureihen 521 bis 524.': 'Scheda di ogni veicolo in PDF e confronto delle serie FLIRT da 521 a 524.',
  'Höchstgeschwindigkeit im Betrieb und gebaute Höchstgeschwindigkeit stehen jetzt direkt zusammen.': 'La velocità massima in esercizio e quella di progetto ora sono indicate insieme.',
  'Die Website lässt sich als App aufs Handy installieren.': 'Il sito si può installare come app sul telefono.',
  'Abfahrtstafel mit Knopf «In meiner Nähe»; Start-Bahnhof ist neu Bern.': 'Tabellone delle partenze con il pulsante «Vicino a me»; la stazione iniziale ora è Berna.',
  'Die ganze Website auf Französisch, Italienisch und Englisch; dazu das Bahn-ABC auf der Startseite.': 'Tutto il sito in francese, italiano e inglese; in più l’ABC della ferrovia sulla pagina iniziale.',
  '20 Bauzug- und Dienstwagen von SBB Infrastruktur neu im Katalog.': '20 carri per treni cantiere e di servizio di FFS Infrastruttura nuovi nel catalogo.',
  'Neue Fotos der Lösch- und Rettungszüge, Fahrleitungsfahrzeuge und weiterer Baureihen.': 'Nuove foto dei treni di spegnimento e salvataggio, dei veicoli per la linea di contatto e di altre serie.',
  'Technische Daten und Texte vieler Fahrzeuge ergänzt und geprüft.': 'Dati tecnici e testi di molti veicoli completati e verificati.',
  // riconoscere i treni
  'FLIRT 521, 522, 523 oder 524?': 'FLIRT 521, 522, 523 o 524?',
  'Die vierteiligen FLIRT der SBB sehen sich zum Verwechseln ähnlich. Am sichersten hilft die Nummer an der Front: Die ersten drei Ziffern sind die Baureihe. Dazu verraten Strom, Farben und Einsatzgebiet viel.': 'I FLIRT a quattro casse delle FFS si somigliano moltissimo. La cosa più sicura è il numero sul frontale: le prime tre cifre indicano la serie. Anche corrente, colori e zona d’impiego dicono molto.',
  'Wagen': 'Casse',
  'Unterwegs': 'Dove',
  'Nummer an der Front: 521 012': 'Numero sul frontale: 521 012',
  'Léman-Express-Farben: blau, weiss und rot': 'Colori del Léman Express: blu, bianco e rosso',
  'Nummer an der Front: 523 001': 'Numero sul frontale: 523 001',
  'Schriftzug der Stadtbahn Zug, wo der RABe 523 zuerst fuhr': 'Scritta della Stadtbahn Zug, dove il RABe 523 ha circolato per primo',
  'Nummer an der Front: 524 303': 'Numero sul frontale: 524 303',
  'TILO-Logo und Farben rot, blau und grün': 'Logo TILO e colori rosso, blu e verde',
  'Italienische Bezeichnung «ETR 524»': 'Designazione italiana «ETR 524»',
  'Nummer 521 001–030 oder 521 201–209': 'Numeri 521 001–030 o 521 201–209',
  'Strom 15 kV 16,7 Hz – derselbe wie in Deutschland, darum fährt er über die Grenze': 'Corrente 15 kV 16,7 Hz – la stessa della Germania, per questo passa il confine',
  'Unterwegs bei der S-Bahn Basel und im Seehas am Bodensee': 'In servizio sulla S-Bahn di Basilea e sul Seehas al lago di Costanza',
  'Nummer 522 201–232': 'Numeri 522 201–232',
  'Zweisystem: 15 kV und 25 kV für Frankreich': 'Bitensione: 15 kV e 25 kV per la Francia',
  'Etwas länger: 75,0 m statt 74,1 m': 'Un po’ più lungo: 75,0 m invece di 74,1 m',
  'Unterwegs beim Léman Express rund um Genève und im Raum Basel': 'In servizio sul Léman Express intorno a Ginevra e nella regione di Basilea',
  'Nummer 523 001–073, 101–114 oder 501–511': 'Numeri 523 001–073, 101–114 o 501–511',
  'Nur 15 kV: bleibt in der Schweiz': 'Solo 15 kV: resta in Svizzera',
  'Unterwegs bei vielen S-Bahnen, z. B. in Zug, Luzern, Aargau, Freiburg und Waadt': 'In servizio su molte S-Bahn, p. es. a Zugo, Lucerna, in Argovia, a Friburgo e nel Vaud',
  'Nummer 524 …; die neueren Züge (FLIRT TSI) tragen 524 3…': 'Numeri 524 …; i treni più recenti (FLIRT TSI) portano 524 3…',
  'Mehrsystem: 15 kV und 3 kV Gleichstrom für Italien': 'Multisistema: 15 kV e 3 kV corrente continua per l’Italia',
  'Mit 4 oder 6 Wagen': 'Con 4 o 6 casse',
  'Unterwegs bei TILO im Tessin und in der Lombardei bis Milano': 'In servizio con TILO in Ticino e in Lombardia fino a Milano',
  '15 kV + 3 kV DC': '15 kV + 3 kV CC',
  'Basel, Deutschland': 'Basilea, Germania',
  'Genève, Frankreich, Basel': 'Ginevra, Francia, Basilea',
  'ganze Schweiz': 'tutta la Svizzera',
  'Tessin, Lombardei': 'Ticino, Lombardia'
});

/* ---- 07-sammlung.js ---- */
/* Italiano – «La mia collezione» e distintivi da esploratore */
uebDict({
  'Meine Sammlung ansehen': 'Vedi la mia collezione',
  'Meine Sammlung': 'La mia collezione',
  'Alle Fahrzeuge, die du gesehen hast, deine Sichtungen und deine Entdecker-Abzeichen. Alles bleibt in deinem Browser.': 'Tutti i veicoli che hai visto, i tuoi avvistamenti e i tuoi distintivi da esploratore. Tutto resta nel tuo browser.',
  'Entdecker-Abzeichen': 'Distintivi da esploratore',
  'Gesehene Fahrzeuge': 'Veicoli visti',
  'Sammlung sichern': 'Salvare la collezione',
  'Die Sammlung ist nur in diesem Browser gespeichert. Sichere sie als Datei, damit sie nicht verloren geht oder um sie auf ein anderes Gerät zu holen.': 'La collezione è salvata solo in questo browser. Salvala come file per non perderla o per portarla su un altro dispositivo.',
  '1 Abzeichen': '1 distintivo',
  '{n} Abzeichen': '{n} distintivi',
  'Erreicht': 'Ottenuto',
  '{a} von {b}': '{a} su {b}',
  'zuletzt {d}': 'l’ultima volta il {d}',
  'Du hast noch kein Fahrzeug als gesehen markiert. Öffne eine Fahrzeugseite und tippe auf «Hab ich gesehen» oder trage eine Sichtung ein.': 'Non hai ancora segnato nessun veicolo come visto. Apri la pagina di un veicolo e tocca «L’ho visto» oppure aggiungi un avvistamento.',
  'Erste Entdeckung': 'Prima scoperta',
  '1 Fahrzeug gesehen': '1 veicolo visto',
  '{n} Fahrzeuge gesehen': '{n} veicoli visti',
  'Zehner-Sammler': 'Collezionista da dieci',
  'Bahnkenner': 'Conoscitore della ferrovia',
  'Bahnexperte': 'Esperto della ferrovia',
  'Ganzer Katalog': 'Catalogo completo',
  'Alle {n} Fahrzeuge gesehen': 'Tutti i {n} veicoli visti',
  'Reiseprofi': 'Professionista del viaggio',
  'Alle Fahrzeuge im Personenverkehr gesehen': 'Tutti i veicoli del traffico viaggiatori visti',
  'Güterverkehr-Kenner': 'Conoscitore del traffico merci',
  'Alle Lokomotiven von SBB Cargo gesehen': 'Tutte le locomotive di FFS Cargo viste',
  'Infrastruktur-Profi': 'Professionista dell’infrastruttura',
  'Alle Fahrzeuge von SBB Infrastruktur gesehen': 'Tutti i veicoli di FFS Infrastruttura visti',
  'Rangiermeister': 'Maestro della manovra',
  'Alle Rangierfahrzeuge gesehen': 'Tutti i veicoli di manovra visti',
  'Spezialisten-Blick': 'Occhio da specialista',
  'Alle Dienst- und Spezialfahrzeuge gesehen': 'Tutti i veicoli di servizio e speciali visti',
  'Zeitreisender': 'Viaggiatore nel tempo',
  'Alle historischen Fahrzeuge entdeckt': 'Tutti i veicoli storici scoperti',
  'FLIRT-Kenner': 'Conoscitore FLIRT',
  'Die FLIRT 521, 522, 523 und 524 gesehen': 'I FLIRT 521, 522, 523 e 524 visti',
  'Krokodil-Jäger': 'Cacciatore di Coccodrilli',
  'Beide Krokodile Ce 6/8 II und Ce 6/8 III gesehen': 'Entrambi i Coccodrilli Ce 6/8 II e Ce 6/8 III visti',
  'Notizbuch': 'Taccuino',
  'Erste Sichtung eingetragen': 'Primo avvistamento registrato',
  'Bahnbeobachter': 'Osservatore della ferrovia',
  '{n} Sichtungen eingetragen': '{n} avvistamenti registrati',
  'Entdecker-Abzeichen und die Seite «Meine Sammlung» mit allen gesehenen Fahrzeugen.': 'Distintivi da esploratore e la pagina «La mia collezione» con tutti i veicoli visti.'
});

/* ---- 08-pruefbericht.js ---- */
/* Italiano – complementi dopo il rapporto di controllo del 18.10.2026 */
uebDict({
  'Korrekturen nach einer Inhaltsprüfung, unter anderem bei RABe 521, Ae 6/6, Be 4/6, Ce 6/8 III, Rotem Pfeil und LRZ 14.': 'Correzioni dopo un controllo dei contenuti, tra l’altro per RABe 521, Ae 6/6, Be 4/6, Ce 6/8 III, Freccia rossa e TSS 14.',
  'ein Wagen': 'una carrozza',
  'Umbauauftrag': 'Ordine di trasformazione',
  'z. B. Re 4/4 II': 'ad es. Re 4/4 II',
  'ältere Bezeichnung einer Dampflok; die Buchstaben folgen einem früheren Schema und werden hier nicht einzeln erklärt': 'vecchia designazione di una locomotiva a vapore; le lettere seguono uno schema precedente e qui non sono spiegate singolarmente',
  'Diese Bezeichnung kann ich (noch) nicht entschlüsseln. Probiere zum Beispiel «Re 4/4 II» oder «RABe 523»; Gross- und Kleinbuchstaben haben dabei eine eigene Bedeutung.': 'Questa designazione non riesco (ancora) a decifrarla. Prova per esempio «Re 4/4 II» o «RABe 523»; maiuscole e minuscole hanno ciascuna un proprio significato.'
});

/* ---- 09-spenden.js ---- */
/* Italiano – donazioni con bonifico bancario */
uebDict({
  '{n} Besuche': '{n} visite',
  'Namen anzeigen': 'Mostra il nome',
  'Eigener Betrag': 'Importo libero',
  'z. B. 15': 'p. es. 15',
  '<b>Danke für deine Unterstützung!</b> Jeder Franken fliesst direkt in RailBase: in neue Fahrzeugporträts, mehr Fotos, genaue Recherche und den Betrieb der Website. So bleibt die Train Database für alle kostenlos und ohne Werbung. Ob gross oder klein, jede Spende bedeutet mir viel.': '<b>Grazie per il tuo sostegno!</b> Ogni franco va direttamente a RailBase: nuovi ritratti di veicoli, più foto, ricerche accurate e la gestione del sito. Così la Train Database resta gratuita e senza pubblicità per tutti. Piccola o grande, ogni donazione significa molto per me.',
  'Spenden laufen per Banküberweisung direkt über deine Bank. Die Website verarbeitet dabei keine Zahlungsdaten; IBAN und Name im Spenden-Fenster sind nur zum Kopieren da.': 'Le donazioni avvengono con bonifico bancario, direttamente tramite la tua banca. Il sito non tratta alcun dato di pagamento; IBAN e nome nella finestra delle donazioni servono solo da copiare.',
  'Eigene Adresse hckd-rail.ch und Spenden per Banküberweisung. Danke für jede Unterstützung!': 'Indirizzo proprio hckd-rail.ch e donazioni con bonifico bancario. Grazie per ogni sostegno!'
});

/* ---- 10-railbase.js ---- */
/* Italiano – nuovo nome RailBase */
uebDict({
  'Neue Adresse: railbase.ch. Am besten gleich als Lesezeichen speichern.': 'Nuovo indirizzo: railbase.ch. Meglio salvarlo subito tra i preferiti.',
  'Aus HCKD RAIL wird RailBase: neuer Name und neues Logo. Sammlung und Sichtungen bleiben, wie sie sind.': 'HCKD RAIL diventa RailBase: nuovo nome e nuovo logo. La tua collezione e i tuoi avvistamenti restano invariati.',
  'Das neue Logo ist jetzt auch das App-Symbol und das Symbol im Browser-Tab.': 'Il nuovo logo è ora anche l’icona dell’app e quella della scheda del browser.'
});

/* ---- 11-danke.js ---- */
/* Italiano – pagina «Grazie» */
uebDict({
  'Danke': 'Grazie',
  'Danke für eure Hilfe': 'Grazie per il vostro aiuto',
  'RailBase lebt von guten Bildern. Diese Bahnfotografen haben geholfen und Fotos von Zügen für die Website gemacht. Ohne sie wäre RailBase nur halb so schön. Vielen herzlichen Dank!': 'RailBase vive di belle immagini. Questi fotografi ferroviari hanno aiutato scattando foto di treni per il sito. Senza di loro RailBase sarebbe bello solo la metà. Grazie di cuore!',
  'RailBase lebt von guten Bildern und von Arbeit im Hintergrund. Diese Menschen haben geholfen: mit Fotos von Zügen und bei der Informatik. Ohne sie wäre RailBase nur halb so schön. Vielen herzlichen Dank!': 'RailBase vive di belle immagini e del lavoro dietro le quinte. Queste persone hanno aiutato: con foto di treni e con l’informatica. Senza di loro RailBase sarebbe bello solo la metà. Grazie di cuore!',
  'Zuständig für Informatik': 'Responsabile dell’informatica',
  'Bahnfotograf · Fotos von Zügen für RailBase': 'Fotografo ferroviario · foto di treni per RailBase',
  'Selbst mithelfen': 'Aiuta anche tu',
  'Du fotografierst auch Züge oder hast einen Fehler entdeckt? Jede Hilfe macht RailBase besser. Schick uns deine Fotos mit deinem Namen. Wir zeigen sie gerne auf der Website und nennen dich hier und unter dem Bild.': 'Anche tu fotografi treni o hai trovato un errore? Ogni aiuto rende RailBase migliore. Mandaci le tue foto con il tuo nome. Le mostreremo volentieri sul sito e ti citeremo qui e sotto l’immagine.',
  'Neue Seite «Danke»: ein Dankeschön an die Bahnfotografen, die Fotos für RailBase gemacht haben.': 'Nuova pagina «Grazie»: un ringraziamento ai fotografi ferroviari che hanno scattato foto per RailBase.',
  'Instagram von Alessandro Antonazzo (öffnet in neuem Fenster)': 'Instagram di Alessandro Antonazzo (si apre in una nuova finestra)',
  'Instagram von Quentin Rossier (öffnet in neuem Fenster)': 'Instagram di Quentin Rossier (si apre in una nuova finestra)'
});

/* ---- 12-international.js ---- */
/* Italiano – carta internazionale «Dove circola?» */
uebDict({
  'Karte wählen': 'Scegli la carta',
  'Schweiz': 'Svizzera',
  'International': 'Internazionale',
  'Karte der Schweiz mit den Einsatzstrecken': 'Carta della Svizzera con le linee servite',
  'Karte Europas mit den internationalen Strecken': 'Carta dell’Europa con le linee internazionali',
  'Vereinfachte Übersicht der internationalen Strecken laut SBB; die Linien verbinden die Halte direkt. Ländergrenzen: Natural Earth.': 'Panoramica semplificata delle linee internazionali secondo le FFS; le linee collegano direttamente le fermate. Confini: Natural Earth.',
  'International von Hamburg und Bremen über Hannover, Frankfurt und Basel durch die Schweiz bis Mailand und weiter nach Venedig, Florenz und Livorno.': 'A livello internazionale da Amburgo e Brema via Hannover, Francoforte e Basilea, attraverso la Svizzera fino a Milano e poi verso Venezia, Firenze e Livorno.',
  'Ländergrenzen der internationalen Karten: Natural Earth (gemeinfrei), über das Paket world-atlas (ISC-Lizenz).': 'Confini delle carte internazionali: Natural Earth (pubblico dominio), tramite il pacchetto world-atlas (licenza ISC).',
  'International von Genf, Basel und Bern über Brig und den Simplon nach Mailand sowie von Zürich nach München.': 'A livello internazionale da Ginevra, Basilea e Berna via Briga e il Sempione fino a Milano, e da Zurigo a Monaco di Baviera.',
  'Nach der SBB-Karte für Einheitswagen IV und EuroCity: Die EuroCity-Wagen der SBB fahren in Richtung Amsterdam, Hamburg, Berlin und Wien, dazu bis Graz und Jarosław in Polen. Die klassischen EW IV fahren überwiegend in der Schweiz.': 'Secondo la carta FFS per carrozze unificate IV ed EuroCity: le carrozze EuroCity delle FFS circolano in direzione di Amsterdam, Amburgo, Berlino e Vienna, e fino a Graz e Jarosław in Polonia. Le classiche EW IV circolano soprattutto in Svizzera.'
});

/* ---- 13-einsatz-neu.js ---- */
/* Italiano – «Dove circola?» per gli altri veicoli */
uebDict({
  'S-Bahn Basel': 'S-Bahn di Basilea',
  'Léman Express': 'Léman Express',
  'Raum Basel': 'Regione di Basilea',
  'Auf der trinationalen S-Bahn Basel und grenzüberschreitend nach Deutschland, dazu im Seehas-Verkehr ab Konstanz.': 'Sulla S-Bahn trinazionale di Basilea e in traffico transfrontaliero verso la Germania, oltre che sul Seehas da Costanza.',
  'Im Léman-Express-Netz rund um Genf und auf grenznahen Regionalverbindungen im Raum Basel.': 'Sulla rete Léman Express attorno a Ginevra e su collegamenti regionali di confine nella regione di Basilea.',
  'Im TILO-Netz im Tessin und grenzüberschreitend in die Lombardei.': 'Sulla rete TILO in Ticino e in traffico transfrontaliero verso la Lombardia.',
  'Vor allem für Güterzüge von der Schweiz nach Deutschland.': 'Soprattutto per treni merci dalla Svizzera verso la Germania.',
  'Im Rangierdienst des Personenverkehrs in grösseren Bahnhöfen; dank zwei Stromsystemen auch in Grenzbahnhöfen.': 'In servizio di manovra del traffico viaggiatori nelle stazioni maggiori; grazie a due sistemi di corrente anche nelle stazioni di confine.',
  'Bei SBB Cargo im Rangier- und Zustelldienst; ohne Fahrleitung fährt sie mit dem Hilfsdiesel.': 'Presso FFS Cargo in servizio di manovra e di consegna; senza linea di contatto viaggia con il diesel ausiliario.',
  'Früher im schweren Rangierdienst in grossen Bahnhöfen, unabhängig von der Fahrleitung.': 'Un tempo in servizio di manovra pesante nelle grandi stazioni, indipendente dalla linea di contatto.',
  'Im leichten Rangier- und Baudienst im ganzen SBB-Netz.': 'In servizio di manovra leggera e di cantiere su tutta la rete FFS.',
  'Über Jahrzehnte im Rangierdienst in Bahnhöfen und Depots im ganzen SBB-Netz.': 'Per decenni in servizio di manovra nelle stazioni e nei depositi di tutta la rete FFS.',
  'Im Bau-, Rangier- und Zustelldienst im ganzen SBB-Netz, je nach Baustelle.': 'In servizio di cantiere, manovra e consegna su tutta la rete FFS, a seconda dei cantieri.',
  'Geplant für Baustellen im ganzen SBB-Normalspurnetz.': 'Previsto per i cantieri di tutta la rete FFS a scartamento normale.',
  'Für die Gotthardachse mit dem Gotthard-Basistunnel und das Tunnelnetz beschafft.': 'Acquistato per l’asse del San Gottardo con la galleria di base e per la rete di gallerie.',
  'Für schnelle Einsätze auf dem offenen Netz und in Tunneln im ganzen SBB-Netz.': 'Per interventi rapidi in linea e nelle gallerie di tutta la rete FFS.',
  'Für Ereignisse auf dem Bahnnetz, besonders in längeren Tunneln und an schwer zugänglichen Strecken.': 'Per gli eventi sulla rete ferroviaria, soprattutto nelle gallerie lunghe e sulle tratte difficili da raggiungere.',
  'Bei starkem Schneefall auf Strecken und in Bahnhöfen, unter anderem auf der Gotthard-Panoramastrecke.': 'In caso di forti nevicate sulle linee e nelle stazioni, tra l’altro sulla linea panoramica del San Gottardo.',
  'Für Messfahrten auf den Hauptstrecken im ganzen SBB-Netz.': 'Per corse di misurazione sulle linee principali di tutta la rete FFS.',
  'Für Unterhalt, Montage und Ereignisse im ganzen SBB-Normalspurnetz.': 'Per manutenzione, montaggio ed eventi su tutta la rete FFS a scartamento normale.',
  'Früher vor allem vor Güterzügen am Gotthard.': 'Un tempo soprattutto in testa a treni merci sul San Gottardo.',
  'Früher vor schweren Güterzügen am Gotthard, auf den Zufahrtslinien und im Flachland.': 'Un tempo in testa a pesanti treni merci sul San Gottardo, sulle linee di accesso e in pianura.',
  'Früher das Kraftpaket am Gotthard, später vor allem im Güterverkehr und im Mittelland.': 'Un tempo la forza trainante del San Gottardo, più tardi soprattutto nel traffico merci e sull’Altopiano.',
  'Früher als eine der wichtigsten Streckenloks der SBB im ganzen Netz unterwegs.': 'Un tempo una delle principali locomotive di linea delle FFS, su tutta la rete.',
  'Früher vor Personen-, Schnell- und Güterzügen, vor allem im Mittelland.': 'Un tempo in testa a treni viaggiatori, diretti e merci, soprattutto sull’Altopiano.',
  'Früher vor schweren Gotthardzügen. Die Ae 8/14 11852 steht heute bei SBB Historic in Erstfeld.': 'Un tempo in testa ai pesanti treni del San Gottardo. L’Ae 8/14 11852 si trova oggi presso FFS Historic a Erstfeld.',
  'Früher vor Schnellzügen auf der Gotthard-Bergstrecke, später im Mittelland.': 'Un tempo in testa a treni diretti sulla linea di montagna del San Gottardo, più tardi sull’Altopiano.',
  'Früher vor schnellen, leichten Zügen im Mittelland, später im Regionalverkehr.': 'Un tempo in testa a treni veloci e leggeri sull’Altopiano, più tardi nel traffico regionale.',
  'Als TEE «Gottardo» durch den Gotthard; der Zug verband die Schweiz mit Deutschland, Frankreich, Italien und den Niederlanden.': 'Come TEE «Gottardo» attraverso il San Gottardo; il treno collegava la Svizzera con Germania, Francia, Italia e Paesi Bassi.',
  'Früher auf Ausflugs- und Gesellschaftsfahrten im ganzen Netz unterwegs.': 'Un tempo in gite e viaggi di gruppo su tutta la rete.',
  'Früher vor Schnellzügen; heute betreut die Dampfgruppe Zürich die erhaltene A 3/5 705.': 'Un tempo in testa a treni diretti; oggi la Dampfgruppe Zürich si occupa dell’A 3/5 705 conservata.',
  'Früher vor schweren Güterzügen am Gotthard, später im Mittelland, auf Bellinzona–Luino und im Rangierdienst.': 'Un tempo in testa a pesanti treni merci sul San Gottardo, più tardi sull’Altopiano, sulla Bellinzona–Luino e in manovra.',
  'Früher vor Regionalzügen, auf Nebenbahnen und im Stationsdienst.': 'Un tempo in testa a treni regionali, su linee secondarie e in servizio di stazione.',
  'Früher im Vorortsverkehr am rechten Zürichseeufer, bekannt als «Goldküstenexpress».': 'Un tempo nel traffico suburbano sulla riva destra del lago di Zurigo, noto come «Goldküstenexpress».',
  'Früher vor Schnellzügen, später vor Regional- und S-Bahn-Pendelzügen. Die RBe 540 074 fährt heute bei der Oensingen-Balsthal-Bahn.': 'Un tempo in testa a treni diretti, più tardi a navette regionali e S-Bahn. La RBe 540 074 circola oggi sulla Oensingen-Balsthal-Bahn.'
});

/* ---- 20-personenverkehr.js ---- */
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
  kennzahlen: [['2004', 'primo impiego'], ['98*', 'veicoli secondo le serie di numeri'], ['2656 kW', 'potenza'], ['73,5–74,1 m', 'lunghezza']],
  daten: { 'Bauart': 'elettrotreno', 'Grundtyp': '4 carrozze', 'Einstieg': 'a pianale ribassato', 'Höchstgeschwindigkeit': '160 km/h (famiglia FLIRT secondo le FFS)', 'Erste Region': 'Stadtbahn di Zugo', 'Einsatz': 'traffico regionale, S-Bahn', 'Anzahl': '98* (secondo le serie di numeri)' },
  specNote: '* Il numero 98 risulta dalle serie di numeri pubblicate 001–073, 101–114 e 501–511; non esiste un dato attuale sull’effettivo confermato separatamente dalle FFS. I 160 km/h sono indicati dalle FFS per l’intera famiglia FLIRT regionale.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Tutti i FLIRT sono di Stadler; il primo ha circolato alle FFS nel 2004. Nel traffico regionale le FFS impiegano complessivamente 209 FLIRT di diverse serie.'] },
      { titel: 'Impiego e tecnica', p: ['Secondo le FFS, i FLIRT circolano come S-Bahn tra l’altro nei cantoni Argovia, Soletta, Lucerna, Basilea, Neuchâtel, Friburgo e Vaud.', 'A seconda della versione, i treni sono lunghi da 75 a 105 m e offrono da 156 a 236 posti a sedere. Viaggiano fino a 160 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Accesso a pianale ribassato', 'Posti per sedie a rotelle e WC accessibile', 'Posti prioritari', 'Fasciatoio (solo in una parte dei treni)', 'Prese in 1a classe', 'Posti per biciclette, passeggini e bagagli'],
        p: ['Queste indicazioni valgono per la famiglia FLIRT delle FFS; i dettagli variano secondo la versione.'] },
      { titel: 'Le serie a confronto', tabelle: { kopf: ['Numeri', 'Quantità', 'Costruzione', 'Lunghezza', 'Peso', 'Primo impiego'], zeilen: [
        ['001–012', '12', '2004–2005', '74,1 m', '120 t', 'Stadtbahn di Zugo'],
        ['013–031', '19', '2009–2010', '74,1 m', '120 t', 'RER Vaud'],
        ['032–043', '12', '2009–2010', '74,1 m', '120 t', 'Svizzera centrale, trasformati da RABe 522'],
        ['044–056', '13', '2012–2013', '74,1 m', '120 t', 'RegiOlten'],
        ['057–066', '10', '2015–2016', '74,1 m', '127 t', 'RegiOlten'],
        ['067–073', '7', '2017', '74,1 m', '127 t', 'RegiOlten'],
        ['074–077', '4', '2017', '74,1 m', '127 t', 'transN, fuori dal conteggio FFS'],
        ['101–114', '14', '2020–2021', '73,5 m', '160 t', 'RER Vaud (FLIRT 3)'],
        ['501–511', '11', '2022–2024', '73,5 m (FFS: circa 75 m)', '160 t', '«Mouette», lunga percorrenza, 181 posti a sedere']] },
        hinweis: 'Lunghezze e pesi secondo passiontrain.ch, arrotondati; i pesi vi sono indicati come massa totale. Gli impieghi valgono per la messa in servizio e possono cambiare.' },
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
      { titel: 'Costruttore e composizione della flotta', p: ['SLM e ABB hanno costruito le 115 Re 450 per i treni navetta a due piani (DPZ) della S-Bahn di Zurigo. Le carrozze a due piani sono state fornite da SLM e Schindler Waggon; il primo DPZ ha circolato nel 1989, un anno prima dell’avvio della S-Bahn nel maggio 1990.', 'In tutto sono stati costruiti 115 treni navetta fino al 1998. 113 circolano oggi alle FFS; due sono stati ripresi nel 2008 dalla Sihltal Zürich Uetliberg Bahn (SZU). I treni sono stati rinnovati dal 2011 al 2018.'] },
      { titel: 'Impiego e tecnica', p: ['I DPZ sono la spina dorsale della S-Bahn di Zurigo e possono circolare su quasi tutta la rete dello ZVV. Un treno è lungo 98,8 m, offre 345 posti a sedere e viaggia fino a 130 km/h.', 'Un treno navetta comprende la Re 450, carrozze a due piani e una carrozza pilota, così al capolinea la locomotiva non deve essere spostata.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Climatizzazione', 'Sistema d’informazione alla clientela', 'Prese in 1a classe', 'Amplificatore del segnale mobile', 'Compartimento multifunzionale con posti per biciclette', 'Posti per passeggini', 'Accesso a livello nella carrozza a pianale ribassato (NDW)', 'Posti per sedie a rotelle e WC accessibile', 'Posti prioritari'],
        p: ['Le persone in sedia a rotelle salgono senza gradini nella carrozza a pianale ribassato NDW, inserita nei treni navetta.'] }
    ],
  typ: 'Locomotiva dei treni navetta a due piani',
  text: ['La Re 450 traina e spinge i treni navetta a due piani (DPZ) della S-Bahn di Zurigo.', 'I treni navetta sono composti dalla locomotiva, da carrozze a due piani e da una carrozza pilota.'],
  daten: { 'Einsatz': 'S-Bahn di Zurigo', 'Anzahl': '115 costruiti, di cui 113 alle FFS e 2 alla SZU' },
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
  kennzahlen: [['39', 'treni'], ['160 km/h', 'velocità massima'], ['2005', 'primo servizio passeggeri'], ['74,08 m', 'lunghezza']],
  daten: { 'Zugbildung': '4 carrozze', 'Gewicht': '120 t a vuoto, 152 t a pieno carico', 'Leistung': '2656 kW (valore del tipo di marcia FOS)', 'Nummern': '521 001–030 e 201–209', 'Einsatz': 'S-Bahn di Basilea, Seehas, Svizzera–Germania' },
  specNote: 'Il catalogo dei tipi di marcia delle FFS raggruppa sotto questo tipo anche varianti FLIRT a quattro casse tecnicamente simili; la potenza è quindi indicata come valore del tipo.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha sviluppato la piattaforma FLIRT originariamente per le FFS. La serie RABe 521 comprende 30 veicoli con i numeri 521 001–030 e altri nove 521 201–209, in tutto 39 treni. Le consegne sono iniziate a metà 2005; i primi sono entrati in servizio passeggeri lo stesso anno. Sono seguiti i nove veicoli 521 201–209 per il Seehas.'] },
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
      { titel: 'Impiego e tecnica', p: ['Le carrozze circolano in composizioni EC, IC e IR, per lo più con una Re 460 e una carrozza pilota. Assi tipici vanno da Ginevra a Briga, da Basilea a Lugano e da Zurigo via Olten a Berna. Le classiche carrozze unificate IV circolano oggi soprattutto in Svizzera; a livello internazionale viaggiano soprattutto le carrozze EuroCity delle FFS, anche in treni diurni e notturni.', 'Una carrozza è lunga 26,4 m ed è omologata per 200 km/h; offre 60 posti in 1a o fino a 86 in 2a classe.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Prese elettriche', 'Zona famiglia', 'Zona silenzio in 1a classe (InterCity)', 'Carrozza ristorante (EuroCity)', 'Posti per biciclette e carrozze dedicate alle biciclette', 'Posti per sedie a rotelle e WC accessibile', 'Posti prioritari'],
        p: ['Le carrozze non sono a pianale ribassato. Sono disponibili posti per sedie a rotelle e un WC accessibile.'] }
    ],
  bilder: ['Carrozza pilota EW IV a Bellinzona', 'InterRegio con EW IV a Zurigo HB', 'Gotthard-Weekender con EW IV a Brugg', 'Interno di 1a classe di una EW IV', 'Carrozza EW IV di 2a classe a Montreux']
});

/* ---- 21-cargo.js ---- */
/* Italiano – FFS Cargo */
uebZug('re-482', {
  typ: 'Locomotiva elettrica per treni merci',
  text: ['La Re 482 è una locomotiva elettrica per treni merci della famiglia Bombardier TRAXX.', 'È stata acquistata per il traffico in Svizzera e in Germania; una parte della seconda serie dispone di un equipaggiamento supplementare per l’Austria.'],
  kennzahlen: [['50', '35 Re 482.1 e 15 Re 482.2'], ['5600 kW', 'potenza massima'], ['140 km/h', 'velocità massima'], ['2002', 'inizio delle consegne']],
  daten: { 'Stromsystem': '15 kV 16,7 Hz e 25 kV 50 Hz', 'Gewicht': '84 t a vuoto', 'Baureihen': 'Re 482.1 e Re 482.2', 'Einsatz': 'traffico merci Svizzera, Germania, in parte Austria' },
  specNote: 'I 50 veicoli provengono dalla panoramica storica della flotta di FFS Cargo; non ne deriva un effettivo attuale per il 2026.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Bombardier Transportation ha fornito le Re 482 a FFS Cargo dal 2002. Fanno parte della famiglia TRAXX.', 'La panoramica della flotta distingue 35 Re 482.1 e 15 Re 482.2, in tutto 50 locomotive. Equipaggiamento e pacchetti nazionali variano secondo la serie.'] }, { titel: 'Impiego e tecnica', p: ['Le locomotive hanno assunto treni merci internazionali verso la Germania e in parte l’Austria, oltre a servizi nel traffico merci svizzero.', 'I sistemi di sicurezza per la Svizzera e la Germania permettono di attraversare il confine senza cambiare locomotiva.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Due sistemi di corrente: 15 kV 16,7 Hz e 25 kV 50 Hz', 'Sistemi di sicurezza per Svizzera e Germania, su una parte della seconda serie anche per l’Austria'], p: ['La Re 482 è una locomotiva merci e non ha compartimento passeggeri.'] }],
  bilder: ['Re 482 007 a Köln-Kalk Nord', 'Re 482 023 di FFS Cargo con treno merci presso Erbach (Rheingau)', 'Re 482 con treno merci davanti a un ponte ferroviario', 'Re 482 005 di FFS Cargo a Eschweiler', 'Re 482 005']
});

uebZug('re-484', {
  typ: 'Locomotiva elettrica bicorrente',
  text: ['La Re 484 è una locomotiva elettrica bicorrente per il traffico merci tra Svizzera e Italia.', 'Bombardier l’ha sviluppata sulla base della piattaforma TRAXX.'],
  kennzahlen: [['21', 'locomotive acquistate'], ['5600 kW', 'potenza massima'], ['140 km/h', 'velocità massima'], ['2004–2006', 'consegna']],
  daten: { 'Stromsystem': '15 kV CA e 3 kV CC', 'Gewicht': '86 t a vuoto', 'In Betrieb seit': '2004–2006 (consegna)', 'Einsatz': 'Svizzera e Italia' },
  specNote: 'Il catalogo dei tipi di marcia delle FFS usa 86 t; la letteratura più vecchia indica talvolta 85,4 t. Vale qui il valore ufficiale del 2026.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['FFS Cargo ha acquistato da Bombardier Transportation 21 Re 484 della famiglia TRAXX. Sono state consegnate dal 2004 al 2006.'] }, { titel: 'Impiego e tecnica', p: ['La Re 484 era destinata al traffico merci internazionale Svizzera–Italia; più tardi ha circolato anche nel traffico interno svizzero.', 'La locomotiva circola con la corrente alternata svizzera e la corrente continua italiana. Il controllo della marcia dei treni specifico per ogni paese permette di attraversare il confine senza cambiare locomotiva.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Due sistemi di corrente: 15 kV alternata e 3 kV continua', 'Sistemi di sicurezza per Svizzera e Italia'], p: ['La Re 484 è una locomotiva merci e non ha compartimento passeggeri.'] }],
  bilder: ['Re 484 006 di FFS Cargo a Steinen', 'Re 484 018 di FFS Cargo', 'Re 484 012 con pubblicità a Singen (Hohentwiel)', 'Re 484 003', 'Re 484 020 con EuroCity a Zurigo HB']
});

uebZug('re-420', {
  typ: 'Locomotiva universale a quattro assi',
  text: ['La Re 420, un tempo Re 4/4 II, è una delle locomotive elettriche svizzere più caratteristiche. Ha trainato treni viaggiatori veloci, treni merci e treni navetta.', 'La serie è stata costruita in più lotti nel corso di molti anni; per questo la forma del frontale e la lunghezza variano tra le singole serie.'],
  kennzahlen: [['276', 'costruite per le FFS'], ['4700 kW', 'potenza max.'], ['140 km/h', 'velocità massima'], ['1964–1985', 'messe in servizio']],
  daten: { 'Achsfolge': 'Bo′Bo′, 4 assi motori', 'Länge': 'circa 14,8–15,5 m fuori respingenti *', 'Gewicht': 'circa 80–85 t in servizio *', 'Leistung': '4650 kW, potenza oraria alla ruota **', 'Elektrische Bremse': 'a recupero', 'In Betrieb seit': '1964 (ultima serie 1985)', 'Anzahl': '276 Re 4/4 II (numero costruito per le FFS)', 'Hersteller': 'parte meccanica SLM Winterthur; parte elettrica BBC, MFO e SAAS' },
  specNote: '* A seconda del lotto e delle trasformazioni. ** Valore per la loc 11108 descritta da SBB Historic; FFS Infrastruttura indica 4700 kW come potenza massima per il tipo di marcia Re 420.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Nel 1964 le FFS hanno ricevuto sei prototipi, seguiti da diverse serie fino al 1985. La SLM di Winterthur ha costruito la parte meccanica, l’elettrica era di BBC, MFO e SAAS.', 'La variante Re 421 è nata da trasformazioni per la Germania; 30 locomotive sono state modernizzate nel 2011–2016 come «LION» per i treni di rinforzo della S-Bahn di Zurigo.'],
        hinweis: 'Effettivo: FFS Historic indica 276 Re 4/4 II acquistate per le FFS, una vecchia rivista Cargo 277 locomotive consegnate. Questa pagina segue FFS Historic; nessuna delle due cifre è un effettivo attuale.' }, { titel: 'Impiego e tecnica', p: ['La Re 4/4 II ha circolato nel traffico viaggiatori e merci, tra l’altro davanti a treni diretti in pianura e sulle rampe d’accesso al Gottardo e al Sempione. Una parte è passata a FFS Cargo, che cita ancora la Re 420 nella sua offerta di noleggio in Svizzera.', 'I quattro motori di trazione sono comandati da un graduatore. Il comando multiplo permette anche la marcia con una Re 6/6 come «Re 10/10».'] }, { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Comando multiplo, anche con una Re 6/6 come «Re 10/10»', 'Freno elettrico a recupero'], p: ['Come locomotiva la Re 420 non ha compartimento passeggeri. Con i treni viaggiatori l’accessibilità dipende dalle carrozze.'] }],
  bilder: ['«Re 10/10»: Re 620 e Re 420 in testa a un treno merci', 'Re 420 331-1 in autunno', 'Re 420 di WRS con treno di legname', 'Re 420 di FFS Cargo con treno merci', 'Re 420 con carri gialli tra i vigneti sul lago', 'Re 420 con treno merci tra vigneti e campi', 'Re 420 in livrea blu con carri cisterna nello scalo di smistamento']
});

uebZug('re-620', {
  typ: 'Locomotiva di linea a sei assi',
  text: ['La Re 620, un tempo Re 6/6, è stata sviluppata per treni viaggiatori e merci pesanti sulle linee del San Gottardo e del Sempione.', 'I suoi tre carrelli a due assi uniscono un elevato sforzo di trazione all’autorizzazione per le velocità in curva più elevate della categoria di treno R.'],
  kennzahlen: [['89', 'locomotive costruite'], ['7832 kW', 'potenza oraria alla ruota'], ['140 km/h', 'velocità massima'], ['1972–1980', 'periodo di costruzione']],
  daten: { 'Achsfolge': 'Bo′Bo′Bo′, 6 assi motori', 'Länge': '19,31 m fuori respingenti', 'Gewicht': '120 t in servizio', 'Leistung': '7244 kW continuativi alla ruota (7832 kW orari)', 'Elektrische Bremse': 'a recupero', 'In Betrieb seit': '1972; serie 1975–1980', 'Hersteller': 'parte meccanica SLM Winterthur; parte elettrica e montaggio BBC, in parte SAAS' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Quattro prototipi sono apparsi nel 1972; dal 1975 al 1980 sono seguite 85 locomotive di serie, in tutto 89 (11601–11689). La SLM ha costruito cassa e telaio, la BBC ha fornito l’equipaggiamento elettrico.', 'Il montaggio finale è avvenuto per lo più alla BBC di Oerlikon, per i numeri 11635–11654 alla SAAS di Ginevra. I primi due prototipi avevano una cassa in due parti.'],
        hinweis: 'Il numero 89 indica la serie costruita storicamente, non l’effettivo oggi in servizio.' }, { titel: 'Impiego e tecnica', p: ['Le locomotive hanno dapprima trainato pesanti treni viaggiatori e merci. In comando multiplo con una Re 4/4 II o III formavano la «Re 10/10» per i treni merci pesanti. Dopo la divisione delle FFS sono passate a FFS Cargo, che offre ancora la Re 620 a noleggio.', 'Dal 2007, 63 locomotive hanno ricevuto l’ETCS livello 2. FFS Historic colloca l’inizio dei ritiri per età nel febbraio 2021.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Comando multiplo con una Re 4/4 II o III come «Re 10/10»', 'Freno elettrico a recupero', 'ETCS Level 2 su 63 locomotive (dal 2007)'], p: ['Come locomotiva la Re 620 non ha compartimento passeggeri. Con i treni viaggiatori l’accessibilità dipendeva dalle carrozze.'] }],
  bilder: ['Re 620 nei colori Cargo con carri cisterna sul lago', '«Re 10/10»: Re 620 e Re 420 in testa a un treno merci', 'Re 620 nei colori Cargo con carri silo', 'Re 620 con treno di carri cisterna', 'Re 620 con treno cantiere, mucche in primo piano', 'Re 620 nei colori Cargo in stazione', 'Re 620 con treno di carri cisterna']
});

uebZug('re-474', {
  typ: 'Locomotiva elettrica bicorrente',
  text: ['La Re 474 è una locomotiva elettrica bicorrente della famiglia Siemens ES64F4 (Eurosprinter).', 'FFS Cargo l’ha acquistata per i treni merci transfrontalieri tra Svizzera e Italia.'],
  kennzahlen: [['12', 'rilevate da FFS Cargo'], ['6400 kW', 'potenza massima'], ['140 km/h', 'velocità massima'], ['2005', 'inizio del servizio presso FFS Cargo']],
  daten: { 'Stromsystem': '15 kV CA e 3 kV CC', 'Gewicht': '87 t a vuoto', 'Fahrzeugnummern': 'Re 474 001–018, di cui 12 rilevate', 'Einsatz': 'traffico merci Svizzera–Italia' },
  specNote: 'La serie di numeri presenta lacune perché FFS Cargo ha rilevato solo dodici locomotive della serie inizialmente prevista.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Siemens ha costruito la Re 474 come locomotiva bicorrente della famiglia ES 64 F4. FFS Cargo ha impiegato dal 2005 dodici locomotive; questo numero non è un effettivo confermato per ottobre 2026.'] }, { titel: 'Impiego e tecnica', p: ['Le locomotive hanno circolato nel traffico merci Svizzera–Italia, tra l’altro sul Sempione fino a Domodossola.', 'La Re 474 collega la rete svizzera a corrente alternata con la rete italiana a corrente continua a 3 kV. L’equipaggiamento policorrente e i sistemi nazionali di sicurezza permettevano l’impiego continuo oltre confine.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Due sistemi di corrente: 15 kV alternata e 3 kV continua', 'Sistemi di sicurezza nazionali per Svizzera e Italia'], p: ['La Re 474 è una locomotiva merci e non ha compartimento passeggeri.'] }],
  bilder: ['Re 474 013', 'Re 474 presso Jestetten sulla linea per Neuhausen', 'Re 474 014 a Domodossola', 'Re 474 con treno merci a Gravellona Toce']
});

uebZug('re-193', {
  bilder: ['Re 193 con un treno merci sul lago di Bienne presso Ligerz', 'Re 193 con carri gialli a pareti scorrevoli', 'Re 193 con un treno merci misto presso Ligerz', 'Re 193 e Re 420 in doppia trazione presso Ligerz'],
  typ: 'Siemens Vectron AC a noleggio per il traffico merci interno',
  text: ['Dalla fine del 2024 FFS Cargo impiega locomotive Siemens Vectron della serie 193.', 'I 35 veicoli sono noleggiati per otto anni e colmano il periodo fino alla consegna delle nuove locomotive di linea proprie.'],
  kennzahlen: [['35', 'locomotive a noleggio'], ['8 anni', 'contratto di noleggio e manutenzione'], ['120 km/h', 'omologazione in Svizzera'], ['2024', 'consegna e inizio servizio']],
  daten: { 'Leistung': 'fino a 6400 kW', 'Länge': 'circa 19,0 m', 'Gewicht': 'circa 90 t, secondo l’equipaggiamento', 'Höchstgeschwindigkeit': '120 km/h in Svizzera', 'Zugsicherung': 'ETCS BL3 e sistemi nazionali', 'Betreiber': 'FFS Cargo SA', 'Anzahl': '35 a noleggio' },
  specNote: 'Le locomotive non appartengono alle FFS. Numero e durata del noleggio si riferiscono al contratto di FFS Cargo Svizzera.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['FFS Cargo noleggia per otto anni 35 Vectron AC di Siemens Mobility; le locomotive appartengono a LokRoll 3 AG. Le prime cinque sono arrivate a Muttenz nel 2024.', 'Questa pagina tratta le 35 Vectron AC di FFS Cargo Svizzera. Le Vectron policorrente di FFS Cargo International rientrano in altri contratti di acquisto e leasing.'] }, { titel: 'Impiego e tecnica', p: ['Il compito principale è il traffico merci interno svizzero, fino alla consegna delle nuove locomotive di linea proprie. Esistono omologazioni anche per servizi transfrontalieri.', 'Le locomotive sviluppano fino a 6400 kW e in Svizzera viaggiano fino a 120 km/h. Circa 550 macchiniste e macchinisti sono stati formati.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Sistema di sicurezza ETCS Baseline 3 e sistemi nazionali', 'Omologazioni anche per servizi transfrontalieri'], p: ['La Re 193 è una locomotiva merci e non ha compartimento passeggeri.'] }]
});

uebZug('re-421', {
  beiname: 'Re 4/4 II per la Germania',
  typ: 'Locomotiva elettrica universale per il traffico transfrontaliero',
  text: ['La Re 421 è la variante della Re 4/4 II delle FFS trasformata per l’impiego in Germania.', 'Tra il 2002 e il 2004 sono state trasformate 26 locomotive dell’ultima serie; hanno ricevuto la nuova sigla Re 421 e la livrea Cargo rossa e blu.'],
  kennzahlen: [['26', 'locomotive trasformate'], ['4700 kW', 'potenza massima'], ['140 km/h', 'velocità massima'], ['255 kN', 'sforzo di trazione all’avviamento']],
  daten: { 'Bauart': 'locomotiva elettrica universale', 'Gewicht': '84 t (valore del catalogo dei tipi di marcia)', 'Nummern': '421 371–397 (senza 382)', 'In Betrieb seit': '2002 (trasformazione 2002–2004)', 'Einsatz': 'traffico merci Svizzera–Germania' },
  specNote: 'Il catalogo dei tipi di marcia 2026 delle FFS indica la Re 421 come alias del tipo di marcia attivo 1051 Re 420. Le 84 t sono un valore di dinamica di marcia per questo tipo raggruppato.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Le Re 421 sono Re 4/4 II trasformate, costruite da SLM, BBC, MFO e SAAS. Derivano dai numeri 11371–11397; la 11382, ritirata dopo un incendio, non faceva parte del programma, quindi sono 26 locomotive.', 'La trasformazione è avvenuta dal 2002 al 2004. Le locomotive hanno ricevuto i numeri 421 371–421 397.'] }, { titel: 'Impiego e tecnica', p: ['Per l’omologazione tedesca le locomotive hanno ricevuto gli adattamenti e gli equipaggiamenti necessari. Uniscono la tecnica robusta della Re 4/4 II all’idoneità transfrontaliera ed erano previste soprattutto per treni merci verso la Germania.', 'Nel catalogo dei tipi di marcia FFS 2026, la Re 421 resta registrata come alias del tipo attivo Re 420.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Equipaggiamento supplementare per l’omologazione in Germania', 'Livrea Cargo rossa e blu'], p: ['La Re 421 è una locomotiva merci e non ha compartimento passeggeri.'] }],
  bilder: ['Re 421 374 a Thun', 'Re 421 395 a Pirna', 'Re 421 377 con treno di auto a Donauwörth', 'Re 421 383 a Lindau Hbf', 'Re 421 a Dresda']
});

/* ---- 22-infrastruktur-loks.js ---- */
/* Italiano – FFS Infrastruttura: locomotive e trattori */
uebZug('aem-940', {
  bilder: ['Aem 940 sul lago di Bienne presso Ligerz', 'Aem 940 020', 'Aem 940 023', 'Aem 940 018 a Biasca', 'Aem 940 001', 'Aem 940 004'],
  typ: 'Locomotiva bimodale',
  text: ['L’Aem 940 è una locomotiva bimodale a quattro assi di Alstom per FFS Infrastruttura. Circola in elettrico sotto la linea di contatto e, sui binari non elettrificati, con due gruppi diesel-generatori.', 'È quindi adatta ai treni cantiere e alle manovre pesanti.'],
  kennzahlen: [['47', 'locomotive ordinate'], ['120 km/h', 'velocità massima'], ['2000 kW', 'potenza elettrica'], ['2018', 'inizio delle prove']],
  daten: { 'Länge': '18,75 m fuori respingenti', 'Gewicht': '84 t; 90 t con zavorra', 'Antrieb': 'elettrica, con due gruppi diesel-generatori', 'Leistung': '2000 kW in elettrico, 900 kW in diesel', 'Mehrfachtraktion': 'fino a 4 locomotive', 'Anzahl': '47 ordinate', 'In Betrieb seit': '2018 (prove), serie dal 2019' },
  specNote: 'Valori tecnici secondo la presentazione Alstom del 2016. Le potenze elettrica e diesel valgono per modalità d’esercizio diverse.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Le FFS hanno ordinato 47 locomotive per FFS Infrastruttura. Le prime cinque sono state provate dal 2018; l’inizio della consegna in serie era previsto per l’autunno 2019.', 'Le FFS indicano come campi d’impiego gli scali di smistamento di Limmattal e Lausanne Triage e i treni cantiere per manutenzione e ampliamento in tutta la Svizzera.'] }, { titel: 'Impiego e tecnica', p: ['Sotto la linea di contatto la locomotiva usa la trazione elettrica. Senza filo di contatto, due motori diesel più piccoli producono l’energia per i motori di trazione elettrici.', 'Le FFS descrivono l’uso dell’ETCS livello 2 e una speciale modalità di telecomando alla sella di lancio di Limmattal, in cui la macchinista o il macchinista resta in cabina.'] }, { titel: 'Dotazione e accessibilità', liste: ['Trazione elettrica sotto la linea di contatto, due generatori diesel senza linea di contatto', 'ETCS Level 2', 'Modalità di comando a distanza alla sella di lancio di Limmattal', 'Comando multiplo fino a quattro locomotive', 'Serbatoio diesel da 3000 l'], p: ['L’Aem 940 è una locomotiva da lavoro e da manovra senza compartimento passeggeri.'] }]
});

uebZug('am-843', {
  typ: 'Locomotiva diesel-idraulica per manovra e linea',
  text: ['L’Am 843 è una locomotiva diesel-idraulica a quattro assi di Vossloh. È stata acquistata per manovre pesanti e corse in linea.', 'FFS Cargo, FFS Infrastruttura e il traffico viaggiatori hanno usato la serie per compiti diversi.'],
  kennzahlen: [['59', 'ordinate in origine per FFS Cargo'], ['1500 kW', 'potenza del motore diesel'], ['100 km/h', 'velocità in linea'], ['2004', 'introdotta presso FFS Cargo']],
  daten: { 'Antrieb': 'diesel-idraulica', 'Gewicht': '80 t in servizio', 'Rangiergang': 'fino a 40 km/h', 'Streckengang': 'fino a 100 km/h', 'Anzahl': '59 ordinate per FFS Cargo', 'In Betrieb seit': '2004 (FFS Cargo)' },
  specNote: 'Le due marce del cambio sono pensate per un elevato sforzo di trazione a bassa velocità di manovra e per corse fino a 100 km/h in linea.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['FFS Cargo ha ordinato 59 Am 843 a Vossloh di Kiel e ha presentato le prime locomotive nel 2004. Il numero indica l’acquisto Cargo di allora, non l’intera serie FFS né un effettivo attuale.', 'Cargo impiega l’Am 843 soprattutto nel servizio di manovra e di distribuzione. Presso FFS Infrastruttura svolge compiti di manovra e treni cantiere.'] }, { titel: 'Impiego e tecnica', p: ['Le locomotive di FFS Cargo sono state dotate di filtri antiparticolato.', 'Nell’ottobre 2025 FFS Cargo ha annunciato l’acquisto di nuove locomotive di manovra ibride per sostituire in futuro le Am 843. Un effettivo attuale dell’intera serie non è indicato separatamente nelle pagine FFS utilizzate.'] }, { titel: 'Dotazione e accessibilità', liste: ['Trazione diesel-idraulica, indipendente dalla linea di contatto', 'Due marce: manovra fino a 40 km/h, linea fino a 100 km/h', 'Filtri antiparticolato sulle locomotive di FFS Cargo'], p: ['L’Am 843 è una locomotiva da manovra e da lavoro senza compartimento passeggeri.'] }],
  bilder: ['Am 843 001 di FFS Infrastruttura con un treno cantiere', 'Due Am 843 di FFS Infrastruttura con un treno di legname, in testa la 012', 'Am 843 011 ad Arth-Goldau', 'Am 843 con il treno di spegnimento e soccorso a Giornico', 'Am 843 a Basilea']
});

uebZug('tm-234', {
  typ: 'Trattore di servizio',
  text: ['Il Tm 234 «Ameise» è un trattore diesel a due assi per la costruzione e la manutenzione degli impianti ferroviari. A seconda della versione dispone di un pianale di carico con gru o di una piattaforma di lavoro.', 'Questa pagina tratta la vecchia «Ameise», non il più recente Tm 234-4 di Windhoff.'],
  kennzahlen: [['125', 'ordinati in tre serie'], ['550 kW', 'potenza del motore diesel'], ['80 km/h', 'velocità in linea'], ['124', 'effettivo FFS nel 2019']],
  daten: { 'Hersteller': 'Stadler Winterthur e partner', 'Bauart': 'trattore diesel a due assi', 'Gewicht': '30 t in servizio, al massimo 37 t', 'Antrieb': 'idrostatica, motore diesel MTU', 'Anfahrzugkraft': 'circa 81 kN', 'Zuladung': '7 t; versione con cestello 0,5 t', 'Arbeitsmodus': 'fino a 20 km/h, con la gru fino a 4 km/h', 'Anzahl': '125 ordinati (1997, 2000, 2005)', 'In Betrieb seit': '1999 (prima serie ordinata nel 1997)', 'Einsatz': 'manutenzione di binari, linea di contatto e segnali' },
  specNote: 'La scheda del costruttore e uno studio preliminare del DLR e delle FFS descrivono le diverse versioni.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Le FFS hanno ordinato 50 veicoli nel 1997, altri 50 nel 2000 e ulteriori 25 nel 2005. Consegna e messa in servizio della prima serie sono iniziate nel 1999. Stadler ha annunciato la consegna degli ultimi 25 nel 2007.', 'I trattori servono alla manutenzione di binari, linea di contatto e segnali, trasportano materiale e possono muovere o manovrare treni cantiere.'] }, { titel: 'Impiego e tecnica', p: ['Un motore diesel MTU aziona il trattore in modo idrostatico; ha 550 kW e viaggia fino a 80 km/h. In modalità lavoro viaggia fino a 20 km/h, con la gru fino a 4 km/h.'] }, { titel: 'Dotazione e accessibilità', liste: ['A seconda della versione, pianale di carico con gru o piattaforma di lavoro', 'Portata 7 t, 0,5 t nella versione con cestello', 'Nessun compartimento passeggeri'] }, { titel: 'Effettivo e delimitazione', p: ['Nel 2019 FFS Infrastruttura indicava un effettivo di 124 vecchi Tm 234 «Ameise». È un dato storico e non un’indicazione sulla flotta di ottobre 2026.', 'Il più recente trattore di servizio, anch’esso chiamato Tm 234-4, proviene da Windhoff e appartiene a un altro acquisto.'] }],
  bilder: ['Tm 234 109 «Ameise»', 'Tm 234 004 a Neuhausen SH', 'Tm 234 139 a Winterthur', 'Tm 234 «Ameise» con gru di carico', 'Tm 234 090']
});

uebZug('am-841', {
  typ: 'Locomotiva diesel-elettrica per treni cantiere e servizio leggero in linea',
  text: ['L’Am 841 è una locomotiva diesel-elettrica a quattro assi di GEC Alsthom.', 'È stata acquistata per treni cantiere pesanti, manovre e treni merci leggeri in linea.'],
  kennzahlen: [['40', 'acquistate in origine'], ['920 kW', 'potenza del motore diesel'], ['80 km/h', 'velocità massima'], ['1996–1997', 'anni di costruzione della serie FFS']],
  daten: { 'Antrieb': 'diesel-elettrica', 'Gewicht': '73 t in servizio', 'Anzahl': '40 acquistate (30 + 10)', 'In Betrieb seit': '1996–1997 (anni di costruzione)' },
  specNote: 'I valori di dinamica di marcia seguono il catalogo dei tipi di marcia 2026 delle FFS; fonti storiche indicano masse leggermente diverse secondo l’equipaggiamento.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Le FFS hanno ordinato dapprima 30 locomotive e hanno poi completato l’ordine con altri dieci veicoli.', 'La serie colmava una lacuna tra i piccoli trattori di manovra e le pesanti locomotive diesel ed era prevista soprattutto per treni cantiere e servizi di distribuzione.'] }, { titel: 'Impiego e tecnica', p: ['L’Am 841 traina treni cantiere, fa manovre e svolge leggeri treni merci in linea. La trazione diesel-elettrica ha 920 kW; viaggia fino a 80 km/h con 195 kN di sforzo all’avviamento.'] }, { titel: 'Dotazione e accessibilità', liste: ['Trazione diesel-elettrica, indipendente dalla linea di contatto', 'Cinque locomotive vengono trasformate in Aeam 841 con pantografo, batteria e motore diesel', 'Nessun compartimento passeggeri'] }, { titel: 'Ammodernamento e futuro', p: ['Un programma di sviluppo trasforma cinque Am 841 in Aeam 841 con pantografo, batteria e motore diesel. I documenti indicano il periodo dal 2024 al 2026.', 'Parallelamente FFS Infrastruttura gestisce un progetto di flotta per sostituire le vecchie Am 841 e Am 842.'] }],
  bilder: ['Am 841', 'Am 841 014', 'Tre Am 841 a Frauenfeld', 'Am 841 017', 'Am 841 002 a Küsnacht ZH']
});

uebZug('am-842', {
  typ: 'Locomotiva diesel-idraulica per manovre pesanti e servizio leggero in linea',
  text: ['Alle FFS la sigla Am 842 è stata usata per diverse locomotive diesel a quattro assi.', 'Questa pagina tratta il tipo MaK G 1204 BB, indicato come attivo nel catalogo dei tipi di marcia 2026 delle FFS.'],
  kennzahlen: [['2', 'rilevate da Sersa nel 1993'], ['1120 kW', 'potenza del motore diesel'], ['80 km/h', 'velocità massima'], ['12,5 m', 'lunghezza fuori respingenti']],
  daten: { 'Antrieb': 'diesel-idraulica', 'Gewicht': '80 t in servizio presso le FFS', 'Anzahl': '2 (Am 842 000 e 001)', 'In Betrieb seit': '1993 presso le FFS' },
  specNote: 'I valori di 80 t e 255 kN sono i parametri del tipo di marcia attivo registrati nel catalogo dei tipi di marcia delle FFS.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Due MaK G 1204 BB sono passate da Sersa alle FFS nel 1993 e sono state immatricolate come Am 842 000 e 001.', 'Queste potenti locomotive di manovra sono adatte a manovre pesanti e a brevi corse in linea.'] }, { titel: 'Impiego e tecnica', p: ['Le due locomotive sono adatte a manovre pesanti e a brevi percorsi in linea. Un motore MTU 12V 396 TC13 le aziona in modo diesel-idraulico; hanno 1120 kW e viaggiano fino a 80 km/h.'] }, { titel: 'Dotazione e accessibilità', liste: ['Trazione diesel-idraulica, indipendente dalla linea di contatto', 'Nessun compartimento passeggeri'] }, { titel: 'Delimitazione della serie', p: ['In seguito anche tre Vossloh G 1000 BB di FFS Cargo hanno portato i numeri Am 842 011–013. I loro dati tecnici differiscono dal tipo MaK; le indicazioni sull’Am 842 si riferiscono quindi sempre al rispettivo gruppo di numeri.'] }]
});

uebZug('tmf-232', {
  typ: 'Trattore di servizio ammodernato con radiocomando',
  text: ['Il Tmf 232 è nato dall’ammodernamento di trattori di servizio Tm IV. Nel 2013 FFS Infrastruttura ha commissionato la trasformazione di 15 veicoli.', 'La «f» nella sigla sta per radiocomando (Funkfernsteuerung).'],
  kennzahlen: [['15', 'veicoli nell’ordine di trasformazione'], ['2013', 'ordine di ammodernamento'], ['280 kW', 'potenza diesel'], ['60 km/h', 'velocità massima con mezzi propri']],
  daten: { 'Umbau': 'ORTICS, nell’officina industriale FFS di Bienne', 'Antrieb': 'diesel-idraulica, motore Caterpillar', 'Länge': '7,67 m fuori respingenti', 'Gewicht': 'circa 30 t', 'Höchstgeschwindigkeit': '60 km/h con mezzi propri, 90 km/h al traino', 'Steuerung': 'radiocomando e comando multiplo', 'Umbauauftrag': '2013 (prima messa in servizio dopo la trasformazione non documentata)', 'Einsatz': 'servizio di cantiere e di manovra' },
  specNote: 'Il 2013 è l’anno documentato dell’ordine di ammodernamento, non l’anno di costruzione originale dei Tm IV donatori.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Nel 2013 ORTICS ha ricevuto da FFS Infrastruttura l’incarico di ammodernare 15 Tm IV. Telaio, sovrastrutture, sale e trasmissione sono stati in gran parte mantenuti; motore, comando e tecnica di sicurezza sono stati rinnovati ed è stato installato un radiocomando.'] }, { titel: 'Impiego e tecnica', p: ['Il Tmf 232 muove treni cantiere, manovra veicoli e sostiene i lavori nei cantieri. Per un elevato sforzo di trazione dispone di una marcia di manovra fino a 30 km/h, per le corse in linea di una marcia fino a 60 km/h.', 'La velocità di traino più alta di 90 km/h vale senza trazione propria all’interno di un treno.'] }, { titel: 'Dotazione e accessibilità', liste: ['Radiocomando, da cui la «f» nella designazione', 'Comando multiplo', 'Sistema di sicurezza ETM-S', 'Marcia di manovra fino a 30 km/h, marcia di linea fino a 60 km/h'], p: ['Il Tmf 232 è un veicolo da lavoro senza compartimento passeggeri.'] }]
});

uebZug('tm-234-4', {
  typ: 'Trattore di servizio di Windhoff',
  text: ['Il Tm 234-4 è un trattore di servizio a due assi con pianale di carico e gru. DART sta per trattore diesel da lavoro e da manovra.', 'FFS Infrastruttura lo ha acquistato per manutenzione, trasporto di materiale, manovre e interventi su impianti di binari, segnali e cavi.'],
  kennzahlen: [['35', 'veicoli nel progetto FFS'], ['651 kW', 'potenza totale installata'], ['100 km/h', 'velocità massima'], ['14,24 m', 'lunghezza fuori respingenti']],
  daten: { 'Länge': '14,24 m fuori respingenti', 'Gewicht': 'circa 37,3 t in servizio', 'Leistung': '651 kW installati (522 kW motore principale + 129 kW motore di lavoro)', 'Motor': 'Caterpillar C18 e C4.4', 'Antrieb': 'idrodinamica e idrostatica', 'Anfahrzugkraft': 'circa 100–105 kN', 'Ladeplattform': 'fino a 3200 kg', 'Ladekran': 'Palfinger PR220 HPLS, sbraccio fino a 11 m', 'Anzahl': '35 previsti', 'In Betrieb seit': '2019 (preserie)' },
  specNote: 'La potenza installata comprende motore principale e motore di lavoro; il tipo di marcia FFS riporta per la dinamica di marcia una potenza massima inferiore.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Le FFS hanno assegnato l’ordine nel 2015. Dal 2019 sono stati provati dapprima cinque veicoli di preserie; in totale erano previsti 35 trattori per sostituire 51 vecchi Tm 232.'] }, { titel: 'Impiego e tecnica', p: ['Il motore principale aziona la rapida trasmissione idrodinamica, il motore di lavoro supplementare alimenta gli impianti idraulici ausiliari.', 'La combinazione di gru, pianale di carico e omologazione a 100 km/h permette trasporti di materiale e treni cantiere senza un veicolo di lavoro separato.'] }, { titel: 'Dotazione e accessibilità', liste: ['Pianale di carico fino a 3200 kg', 'Gru Palfinger PR220 HPLS con sbraccio fino a 11 m', 'Motore di lavoro separato per l’idraulica', 'Nessun compartimento passeggeri'] }],
  bilder: ['Trattore di servizio Windhoff con gru di carico', 'Trattore di servizio Windhoff, altro lato', 'Tm 234 413 con gru di carico a Weinfelden', 'Tm 234 413 a Weinfelden, lato gru', 'Tm 234 435 a Kreuzlingen']
});

uebDict({ 'Aem 940 018 in Biasca': 'Aem 940 018 a Biasca' });

/* ---- 23-infrastruktur-wagen.js ---- */
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

/* ---- 24-rangier.js ---- */
/* Italiano – locomotive di manovra */
uebZug('ee-922', {
  typ: 'Locomotiva elettrica di manovra per stazioni viaggiatori',
  text: ['L’Ee 922 è una compatta locomotiva elettrica di manovra di Stadler.', 'Le FFS l’hanno acquistata per preparare i treni viaggiatori e aggiungere carrozze supplementari nelle grandi stazioni.'],
  kennzahlen: [['21', 'locomotive ordinate'], ['750 kW', 'potenza massima'], ['45 t', 'massa a vuoto'], ['2009–2010', 'consegna']],
  daten: { 'Spurweite': 'scartamento normale, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz e 25 kV 50 Hz', 'Gewicht': '45 t a vuoto', 'Bedienung': 'radiocomando', 'Einsatz': 'manovra traffico viaggiatori' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Le FFS hanno ordinato le 21 locomotive nel dicembre 2007. Stadler ha consegnato il primo veicolo nel luglio 2009; entro la fine del 2010 dovevano essere equipaggiate sette grandi stazioni.'] }, { titel: 'Impiego e tecnica', p: ['L’Ee 922 ha sostituito le vecchie Ee 3/3 nel traffico viaggiatori. Il suo equipaggiamento bifrequenza ne permette l’impiego anche nelle stazioni di confine con linea di contatto a 25 kV.'] }, { titel: 'Dotazione e accessibilità', liste: ['Radiocomando', 'Due sistemi di corrente: 15 kV 16,7 Hz e 25 kV 50 Hz', 'Compatta: 8,8 m di lunghezza', 'Nessun compartimento passeggeri'] }],
  bilder: ['Ee 922 011', 'Ee 922 012', 'Ee 922 021 a Briga', 'Ee 922 006 a Basilea', 'Ee 922 002 a Romanshorn']
});

uebZug('eem-923', {
  typ: 'Locomotiva di manovra bimodale di FFS Cargo',
  text: ['L’Eem 923 è una locomotiva elettrica compatta con motore diesel ausiliario della piattaforma Butler di Stadler.', 'FFS Cargo la impiega in manovra, nella distribuzione e nel servizio leggero di linea; senza linea di contatto il diesel ausiliario fornisce l’energia.'],
  kennzahlen: [['30', 'locomotive ordinate'], ['1500 kW', 'potenza elettrica'], ['45 t', 'massa a vuoto'], ['2012–2013', 'introduzione della flotta']],
  daten: { 'Plattform': 'Butler', 'Spurweite': 'scartamento normale, 1435 mm', 'Gewicht': '45 t a vuoto', 'Antrieb': 'elettrica, con motore diesel ausiliario per l’ultimo miglio', 'Leistung': '1500 kW elettrica', 'Höchstgeschwindigkeit': '120 km/h (FOS 2026), 100 km/h all’introduzione', 'Einsatz': 'FFS Cargo, manovra e distribuzione' },
  specNote: 'La diversa velocità massima proviene da due stati delle fonti ufficiali: 100 km/h all’introduzione e 120 km/h nel catalogo dei tipi di marcia 2026.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['FFS Cargo ha presentato la prima locomotiva nel 2011. La consegna è iniziata all’inizio del 2012; dal 2013 tutti i 30 veicoli ordinati dovevano essere in servizio.'] }, { titel: 'Impiego e tecnica', p: ['Sotto la linea di contatto la locomotiva viaggia in elettrico. Il motore diesel permette consegne su binari di raccordo senza linea di contatto, senza impiegare una seconda locomotiva.'] }, { titel: 'Dotazione e accessibilità', liste: ['Trazione elettrica con diesel ausiliario per binari senza linea di contatto', 'Compatta: 9,1 m di lunghezza', 'Nessun compartimento passeggeri'] }],
  bilder: ['Eem 923 004 di FFS Cargo', 'Eem 923 016', 'Eem 923 030', 'Eem 923 «Le Jorat»', 'Eem 923 a Payerne']
});

uebZug('bm-44', {
  typ: 'Pesante locomotiva di manovra diesel-elettrica (storica)',
  text: ['La Bm 4/4 era una pesante locomotiva di manovra diesel-elettrica delle FFS.', 'Le 46 macchine sostituirono le locomotive a vapore nella manovra pesante e potevano lavorare indipendentemente dalla linea di contatto.'],
  kennzahlen: [['46', 'locomotive costruite'], ['620 kW', 'potenza nel catalogo dei tipi di marcia'], ['75 km/h', 'velocità massima'], ['1960–1970', 'anni di costruzione']],
  daten: { 'Hersteller': 'SLM e SAAS', 'Antrieb': 'diesel-elettrica', 'Spurweite': 'scartamento normale, 1435 mm', 'Gewicht': '72 t a vuoto', 'Einsatz': 'manovra pesante' },
  specNote: 'Questa pagina tratta la serie regolare 18401–18446, non la Bm 4/4 II, che ne è separata.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Tra il 1960 e il 1970 furono costruite 46 locomotive. Si assunsero i pesanti lavori di manovra e sostituirono le ultime locomotive a vapore usate per questi compiti.'] }, { titel: 'Impiego e tecnica', p: ['La Bm 4/4 manovrava treni pesanti, indipendentemente dalla linea di contatto. La trazione diesel-elettrica aveva 620 kW; viaggiava fino a 75 km/h con 216 kN di sforzo all’avviamento.'] }, { titel: 'Dotazione e accessibilità', liste: ['Trazione diesel-elettrica, indipendente dalla linea di contatto', 'Nessun compartimento passeggeri'] }, { titel: 'Stato storico', p: ['La serie appartiene alla vecchia generazione di locomotive diesel FFS. Una voce nel catalogo dei tipi di marcia descrive il tipo per scopi d’esercizio e non attesta una flotta FFS attuale.'] }],
  bilder: ['Bm 4/4 18427', 'Bm 4/4 18427 di fronte', 'Bm 4/4 con treno di soccorso a Göschenen', 'Bm 4/4 18442']
});

uebZug('tm-232', {
  beiname: 'Tm III e Tm IV',
  typ: 'Trattori diesel modernizzati',
  text: ['Alle FFS la designazione Tm 232 comprende due diverse serie di trattori modernizzati.', 'Dati tecnici, numeri e anni di costruzione appartengono quindi sempre alla sottoserie Tm III o Tm IV.'],
  kennzahlen: [['2', 'serie d’origine diverse'], ['52', 'Tm III diventati 232 001–052'], ['2003–2010', 'periodo delle modernizzazioni'], ['51', 'effettivo di FFS Infrastruttura prima della sostituzione del 2019']],
  daten: { 'Unterserie ex Tm IV': 'Tm 232 101–146 e 201–234', 'Antrieb': 'diesel-idraulica', 'Spurweite': 'scartamento normale, 1435 mm', 'Leistung': 'circa 260–280 kW secondo la sottoserie', 'Höchstgeschwindigkeit': '60–80 km/h secondo la serie', 'In Betrieb seit': '2003 (prime modernizzazioni)', 'Einsatz': 'manovra leggera e servizio lavori' },
  specNote: 'Il numero 51 indica l’effettivo di FFS Infrastruttura citato nel 2019 prima della sostituzione con il Tm 234-4, non tutti i Tm 232 mai costruiti.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['52 Tm III sono stati immatricolati come Tm 232 001–052. Altri veicoli derivano da Tm IV; la prima trasformazione di questo gruppo è avvenuta nel 2007.'] }, { titel: 'Impiego e tecnica', p: ['FFS Cargo ha usato i Tm 232 nella distribuzione leggera. Nel 2019 FFS Infrastruttura ha iniziato a sostituire i suoi 51 trattori del servizio lavori con 35 nuovi Tm 234-4.'] }, { titel: 'Dotazione e accessibilità', liste: ['Trazione diesel-idraulica, indipendente dalla linea di contatto', 'Potenza di circa 260–280 kW secondo la sottoserie', 'Nessun compartimento passeggeri'] }],
  bilder: ['Tm IV (Tm 232)', 'Tm 232 211 di FFS Cargo', 'Tm 232 115', 'Tm 232 129 di FFS Cargo', 'Tm IV 8792 in vecchia livrea']
});

/* ---- 25-dienst.js ---- */
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
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Dopo il primo ordine di tre treni per Ginevra, Melide e Briga, nel 2016 le FFS hanno esercitato un’opzione per altre tre composizioni destinate a Zurigo, Winterthur e Berna.', 'La generazione comprende così sei treni; la consegna si è conclusa alla fine del 2018.'] }, { titel: 'Impiego e tecnica', p: ['I sei treni sono stazionati a Ginevra, Melide, Briga, Zurigo, Winterthur e Berna. Un treno a quattro veicoli è lungo 83,22 m, pesa circa 326 t, ha sei motorizzazioni da 390 kW e viaggia fino a 100 km/h. Ha l’ETCS e può lavorare in modo autonomo per circa quattro-cinque ore.'] }, { titel: 'Dotazione e accessibilità', p: ['Un’alimentazione d’aria respirabile indipendente rifornisce le cabine di guida e i locali di salvataggio. Ogni veicolo di salvataggio accoglie nel suo locale protetto fino a circa 60 persone; in galleria il treno può trainare fino a 1600 tonnellate.', 'L’allestimento antincendio offre 45 000 litri d’acqua e pompe fino a 6000 litri al minuto.'] }],
  bilder: ['TSS 18 «Bern» presso Einigen', 'TSS 18 a Ginevra', 'Veicolo di salvataggio del TSS 18 a Ginevra', 'TSS 18 a Ginevra, vista laterale', 'Veicolo attrezzi di soccorso Xtmas 99 85 9177 015 all’Innotrans 2018']
});

uebZug('lrz-14', {
  beiname: 'Treno di spegnimento e salvataggio',
  typ: 'Treno di spegnimento e salvataggio a quattro elementi per lunghe gallerie',
  text: ['Il TSS 14 è un’evoluzione più potente a quattro elementi per lunghe gallerie ferroviarie. Dispone di un secondo veicolo di salvataggio.', 'Due composizioni sono state acquistate nell’ambito del potenziamento del concetto d’intervento per l’asse del San Gottardo.'],
  kennzahlen: [['2', 'composizioni'], ['2014–2016', 'costruzione e messa in servizio'], ['6 × 390 kW', 'potenza di trazione installata'], ['100 km/h', 'velocità massima']],
  daten: { 'Formation': 'carro cisterna antincendio + veicolo attrezzi + 2 veicoli di salvataggio', 'Rettungsfahrzeuge': 'ciascuno 22,06 m / 78 t', 'Gewicht': 'circa 326 t', 'Atemluft': 'circa 1,98 mio. l', 'Anhängelast': '940 t al 27 ‰', 'Anzahl': '2 composizioni', 'Einsatz': 'asse del San Gottardo e rete delle gallerie' },
  specNote: 'La designazione TSS 14 indica la generazione. La messa in servizio è avvenuta a tappe fino all’apertura della galleria di base del San Gottardo.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Le due composizioni sono state acquistate dal 2012 e rese operative prima della messa in servizio della galleria di base del San Gottardo.'] }, { titel: 'Impiego e tecnica', p: ['I due treni sono destinati all’asse del Gottardo e alla rete delle gallerie. Un treno pesa circa 326 t, ha sei motorizzazioni da 390 kW e viaggia fino a 100 km/h. Su una pendenza del 27 ‰ può trainare 940 t.'] }, { titel: 'Dotazione e accessibilità', p: ['Ogni veicolo di salvataggio offre posto a circa 60 persone, oppure a 40 persone e sei barelle. I locali pressurizzati, le chiuse e gli attacchi medici permettono evacuazioni da tratti di galleria invasi dal fumo.'] }, { titel: 'Profilo di prestazioni', p: ['Grazie al secondo veicolo di salvataggio, la composizione a quattro elementi offre più capacità di salvataggio e più aria respirabile delle generazioni precedenti. Più veicoli motorizzati assicurano elevato sforzo di trazione e ridondanza.'] }],
  bilder: ['Nuovo TSS 14 al centro di manutenzione e intervento di Erstfeld', 'TSS 14 «Uri» nella stazione di Erstfeld', 'TSS 14 «Uri» dei pompieri aziendali di Erstfeld', 'TSS 14 a Erstfeld']
});

uebZug('lrz-08', {
  beiname: 'Treno di spegnimento e salvataggio',
  typ: 'Treno di spegnimento e salvataggio della generazione 2008',
  text: ['Le FFS hanno acquistato otto treni di spegnimento e salvataggio della generazione TSS 08, composti da carro cisterna antincendio, veicolo attrezzi e veicolo di salvataggio.', 'Sono stati concepiti per interventi rapidi sulla rete all’aperto e in galleria.'],
  kennzahlen: [['8', 'composizioni'], ['2008–2010', 'consegna'], ['4 × 390 kW', 'potenza di trazione installata'], ['100 km/h', 'velocità massima']],
  daten: { 'Gewicht': 'circa 248 t', 'Atemluft': 'circa 1,44 mio. l', 'Rettungsplätze': 'circa 60, oppure 40 + 9 barelle', 'Anhängelast': '730 t al 27 ‰', 'Anzahl': '8 composizioni', 'In Betrieb seit': '2008–2010 (consegna)' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['La generazione è stata ordinata nel 2006 e consegnata dal 2008 al 2010. Otto composizioni hanno completato la rete d’intervento delle FFS.'] }, { titel: 'Impiego e tecnica', p: ['Carro cisterna, veicolo attrezzi e veicolo di salvataggio lavorano come un’unità. Due powerpack da 390 kW nel veicolo attrezzi e due nel veicolo di salvataggio azionano il treno.', 'Il locale di salvataggio pressurizzato funziona indipendentemente dall’aria esterna e permette di evacuare persone da zone invase dal fumo.'] }, { titel: 'Dotazione e accessibilità', liste: ['Circa 60 posti di salvataggio, oppure 40 posti e 9 barelle', 'Locale di salvataggio protetto in sovrapressione, indipendente dall’aria esterna', '48 000 l d’acqua e 1800 l di schiumogeno', 'Circa 1,44 milioni di litri d’aria respirabile'] }],
  bilder: ['TSS 08 (TES 08 Olten) a Renens', 'Veicolo di salvataggio XTmas 99 85 9174 004 «Lausanne» a Berna', 'XTmas 99 85 9174 008 «Olten» a Losanna', 'TSS 08 a Winterthur']
});

uebZug('lrz-04', {
  beiname: 'Treno di spegnimento e salvataggio',
  typ: 'Treno di spegnimento e salvataggio della generazione 2004',
  text: ['Il TSS 04 è stato la prima generazione recente del treno di spegnimento e salvataggio FFS e ha avviato il passaggio dal treno trainato da locomotiva al treno semovente.', 'L’unica composizione riunisce agenti estinguenti, locale di salvataggio e trazione propria per gli interventi sulle linee e in galleria.'],
  kennzahlen: [['1', 'composizione di questa generazione'], ['2004', 'messa in servizio'], ['4 × 315 kW', 'potenza di trazione installata'], ['100 km/h', 'velocità massima']],
  daten: { 'Gewicht': 'circa 210 t', 'Atemluft': 'circa 1,44 mio. l', 'Anzahl': '1 composizione', 'Einsatz': 'spegnere, salvare, recuperare' },
  specNote: 'Numero e anno si riferiscono alla generazione autonoma TSS 04. Le generazioni successive sono contate separatamente.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['I costruttori sono Windhoff e Dräger; la base è il Windhoff MPV. Le FFS hanno una composizione, entrata in servizio nel 2004. È formata da carro cisterna antincendio, veicolo attrezzi e veicolo di salvataggio.'] }, { titel: 'Impiego e tecnica', p: ['Il treno interviene in caso di eventi sulla rete ferroviaria, in particolare nelle gallerie lunghe e sui tratti difficilmente accessibili.'] }, { titel: 'Dotazione e accessibilità', p: ['I veicoli trasportano acqua, schiuma, materiale di salvataggio e di recupero. Veicolo attrezzi e veicolo di salvataggio hanno ciascuno due powerpack; il treno non ha quindi bisogno di una locomotiva ausiliaria.', 'Il veicolo di salvataggio dispone di un locale interno protetto, alimentato ad aria respirabile, per evacuazioni da gallerie invase dal fumo.'] }],
  bilder: ['TSS 04 a Briga, 2016', 'TSS 04 a Hohtenn', 'TSS 04 nella stazione di Hohtenn']
});

uebZug('xrotm', {
  name: 'Frese da neve',
  typ: 'Veicoli speciali per lo sgombero della neve',
  text: ['FFS Infrastruttura utilizza diversi tipi di frese da neve semoventi.', 'Il regolamento d’esercizio distingue quattro serie, che svolgono compiti diversi secondo la quantità di neve, la linea e il luogo d’impiego.'],
  kennzahlen: [['4', 'serie nel regolamento'], ['17', 'veicoli secondo i campi di numerazione'], ['60–80 km/h', 'Vmax dei tipi grandi'], ['95–115', 'numeri d’esercizio']],
  daten: { 'Xrotm 4/4': 'n. 95–96, 2 veicoli, 80 km/h', 'Xrotm 2/3': 'n. 97, 1 veicolo, 60 km/h', 'XTm': 'n. 102–109, 8 veicoli, 45 km/h (100 km/h al traino)', 'Xrotm ex Tm 232': 'n. 110–115, 6 veicoli, 80 km/h (90 km/h al traino)', 'Anzahl': '17 secondo i campi di numerazione', 'Einsatz': 'sgombero di neve e accumuli' },
  specNote: 'Il numero risulta dai campi di numerazione pubblicati nel regolamento d’esercizio FFS e non è un effettivo confermato separatamente.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Secondo le prescrizioni d’esercizio, FFS Infrastruttura distingue quattro serie con in tutto 17 spazzaneve rotanti.'], tabelle: { kopf: ['Serie', 'Numeri', 'Numero', 'Velocità massima'], zeilen: [['Xrotm 4/4', '95–96', '2', '80 km/h'], ['Xrotm 2/3', '97', '1', '60 km/h'], ['XTm', '102–109', '8', '45 km/h, rimorchiato 100 km/h'], ['Xrotm ex Tm 232', '110–115', '6', '80 km/h, rimorchiato 90 km/h']] } }, { titel: 'Impiego e tecnica', p: ['Le grandi Xrotm 95, 96 e 97 sono impiegate in caso di forti nevicate, tra l’altro sulla linea panoramica del San Gottardo.', 'Le più piccole Xrotm 110–115 sono adatte alle stazioni e alle linee meno trafficate.'] }, { titel: 'Dotazione e accessibilità', liste: ['Organi di sgombero rotanti', 'Trazione propria e capacità di sgombero secondo la serie', 'Nessun compartimento passeggeri'] }, { titel: 'Esercizio', p: ['Le frese da neve sono veicoli speciali con organi di sgombero rotanti. A seconda della serie variano trazione propria, capacità di sgombero, velocità in linea e velocità di traino ammessa.'] }],
  bilder: ['Fresa da neve Xrotm a Erstfeld', 'Fresa da neve Xrotm n. 95 a Erstfeld', 'Xrotm 95 nella stazione di Erstfeld', 'Numero di veicolo della Xrotm 95', 'Xrotm 4/4 95 a Erstfeld']
});

uebZug('diagnose', {
  name: 'Veicolo diagnostico',
  typ: 'Veicolo diagnostico semovente Mermec Xtmass',
  text: ['Il veicolo diagnostico semovente Xtmass ROGER 1000 controlla lo stato dell’infrastruttura ferroviaria ad alta velocità.', 'Sistemi di misura rilevano binario, linea di contatto e altri impianti senza interrompere inutilmente l’esercizio regolare.'],
  kennzahlen: [['160 km/h', 'velocità massima'], ['672 kW', 'potenza massima'], ['64 t', 'massa a vuoto'], ['23,9 m', 'lunghezza del veicolo']],
  daten: { 'Fahrzeugart': 'veicolo diagnostico semovente', 'Gewicht': '64 t a vuoto, al massimo 66 t', 'Einsatz': 'misura del binario e della linea di contatto' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Mermec ha costruito il veicolo diagnostico semovente Xtmass ROGER 1000 per FFS Infrastruttura. Le fonti utilizzate non indicano un numero di veicoli.'] }, { titel: 'Impiego e tecnica', p: ['ROGER 1000 riunisce diversi sistemi di misura e diagnosi in un unico veicolo. L’alta velocità permette controlli sulle linee principali con scarso impatto sull’orario.'] }, { titel: 'Dotazione e accessibilità', liste: ['Sistemi di misura e diagnosi per binario, linea di contatto e altri impianti', 'Trazione propria da 672 kW, fino a 160 km/h', 'Nessun compartimento passeggeri'] }, { titel: 'Impiego oltre la Svizzera', p: ['Mermec documenta una campagna di misura del veicolo FFS su una linea ad alta velocità tedesca. Ciò dimostra l’idoneità per corse di misura su reti ad alte prestazioni.'] }],
  bilder: ['Automotrice di misura XTmass 99 85 9160 001 di MerMec a Losanna', 'ROGER 1000 (XTmass 99 85 9160 001) a Losanna, 2009']
});

uebZug('kirow-krc-1100', {
  typ: 'Pesante gru ferroviaria girevole per intervento e costruzione',
  text: ['La gru FFS della classe Kirow 1100 appartiene alla nuova generazione di grandi gru.', 'Insieme alla Multi Tasker 1200 ha sostituito le due vecchie KRC 800.'],
  kennzahlen: [['1', 'gru FFS di questa classe'], ['2019', 'conclusione del programma di sostituzione'], ['125 t', 'portata massima'], ['16°', 'rotazione con binario vicino libero']],
  daten: { 'Bauart': 'gru ferroviaria girevole', 'Schwenkwinkel': 'fino a 16° con binario vicino libero', 'Eigenmasse': '112 t in assetto di trasporto (scheda tecnica del costruttore)', 'Transport': 'con carro di protezione, contrappeso appoggiato sopra', 'Netz': 'rete FFS a scartamento normale', 'Vorgänger': 'una delle due KRC 800', 'In Betrieb seit': '2019 (programma di sostituzione 2016–2019)', 'Einsatz': 'recupero, ponti provvisori, lavori pesanti' },
  specNote: '125 t è la portata massima e non la massa della gru. Le 112 t in assetto di trasporto provengono dalla scheda tecnica Kirow della KRC 1100, non da un documento FFS.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Nel dicembre 2017 le FFS hanno scelto la KRC 1100. Kirow descrive la sostituzione delle due KRC 800 con due nuove grandi gru tra il 2016 e il 2019; una di esse appartiene alla classe 1100.'] }, { titel: 'Impiego e tecnica', p: ['Secondo il costruttore il contrappeso smussato permette una rotazione fino a 16 gradi lasciando libera la sagoma del binario vicino. In posizione di trasporto il contrappeso poggia su un carro di protezione.'] }, { titel: 'Dotazione e accessibilità', liste: ['Portata fino a 125 t in condizioni definite', 'Contrappeso smussato, rotazione fino a 16° lasciando libero il binario vicino', 'Trasporto con un carro di protezione che porta il contrappeso', 'Nessun compartimento passeggeri'] }, { titel: 'Indicazione delle prestazioni', p: ['La portata massima vale solo in condizioni definite. Il carico ammesso diminuisce con lo sbraccio e dipende dagli stabilizzatori e dalla posizione del binario.'] }]
});

uebZug('kirow-800', {
  typ: 'Gru ferroviarie storiche degli anni 1990',
  text: ['Nel 1996 le FFS hanno ricevuto due gru Kirow della classe KRC 800.', 'Servivano ai lavori pesanti di recupero e costruzione e sono state sostituite tra il 2016 e il 2019 da nuove grandi gru.'],
  kennzahlen: [['2', 'gru consegnate'], ['1996', 'consegna'], ['203 t', 'massa del convoglio gru'], ['80 km/h', 'velocità massima']],
  daten: { 'Formation': 'gru con carro di protezione e carro squadra', 'Gewicht': 'circa 203 t (intero convoglio)', 'Länge': 'circa 48 m (intero convoglio)', 'Nachfolger': 'KRC 1100 e Multi Tasker 1200' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Kirow Leipzig ha consegnato alle FFS due gru KRC 800 nel 1996. Tra il 2016 e il 2019 le FFS le hanno sostituite con una Multi Tasker 1200 e una gru della classe 1100.'] }, { titel: 'Impiego e tecnica', p: ['Le due gru erano usate per sollevamenti pesanti nei cantieri e dopo eventi. La loro portata dipende da sbraccio, stabilizzatori e posizione del binario.', 'Per i trasferimenti venivano condotte come convoglio di treno merci con carro di protezione e carro squadra.'] }, { titel: 'Dotazione e accessibilità', liste: ['Composizione di gru, carro di protezione e carrozza squadra, circa 48 m e 203 t', 'Carrozza squadra per il team della gru', 'Nessuna trazione propria, fino a 80 km/h in un treno'] }, { titel: 'Sostituzione', p: ['Kirow documenta la sostituzione delle due gru consegnate nel 1996 con una Multi Tasker 1200 e una gru della classe 1100 tra il 2016 e il 2019.'] }]
});

uebZug('kirow-250', {
  typ: 'Gru ferroviaria girevole per sollevamenti medi',
  text: ['La Kirow KRC 250 è una gru ferroviaria girevole per lavori di costruzione e manutenzione.', 'Almeno una gru FFS di questo tipo è attestata al più tardi nel 2005; un numero totale esatto e un anno d’acquisto non sono documentati pubblicamente in modo affidabile.'],
  kennzahlen: [['169 t', 'massa del convoglio gru'], ['47 m', 'lunghezza del convoglio'], ['80 km/h', 'velocità massima'], ['2005', 'al più tardi nell’effettivo FFS']],
  daten: { 'Formation': 'gru con carro di protezione o di contrappeso e carro squadra', 'Gewicht': 'circa 169 t (intero convoglio)', 'Länge': 'circa 47 m (intero convoglio)', 'Antrieb': 'azionamento idraulico della gru, senza trazione propria', 'Tragfähigkeit': 'secondo lo sbraccio', 'Anzahl': 'almeno 1, numero totale non attestato', 'Im SBB-Bestand': 'al più tardi nel 2005 (prova fotografica)' },
  specNote: 'Numero e anno sono indicati di proposito solo come minimo: una KRC 250 FFS è documentata in foto nel 2005. Massa della gru e portata sono valori diversi.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Kirow Leipzig ha costruito la KRC 250. Almeno una gru FFS di questo tipo è documentata al più tardi nel 2005; numero totale e anno d’acquisto non sono documentati in modo affidabile.'] }, { titel: 'Impiego e tecnica', p: ['La KRC 250 solleva campate di binario, componenti di scambi e altri carichi pesanti. Carri di protezione e di contrappeso fanno parte del convoglio d’esercizio; il carro squadra offre locali di lavoro e di sosta.'] }, { titel: 'Dotazione e accessibilità', liste: ['Composizione con carro di protezione o contrappeso e carrozza squadra, circa 47 m e 169 t', 'Azionamento idraulico della gru, nessuna trazione propria', 'Carrozza squadra con locali di lavoro e soggiorno', 'Fino a 80 km/h in un treno'] }, { titel: 'Fonti', p: ['Il catalogo dei tipi di marcia FFS attesta tipo costruttivo, composizione e dati di marcia. Non vi figurano né un effettivo attuale né un anno d’acquisto.', 'Una foto attesta almeno una KRC 250 FFS nel 2005. Dalle fonti pubbliche non si può attualmente dire di più con certezza.'] }]
});

uebZug('kirow-krc-100', {
  typ: 'Gru ferroviaria girevole compatta per costruzione e intervento',
  text: ['La Kirow KRC 100 è una gru ferroviaria girevole compatta delle FFS. Dodici veicoli sono stati consegnati nel 2006 e nel 2007.', 'Il piccolo raggio posteriore e il contrappeso fisso permettono di lavorare influenzando poco i binari vicini.'],
  kennzahlen: [['12', 'gru consegnate'], ['2006–2007', 'consegna'], ['70 t', 'massa in servizio della gru'], ['120 km/h', 'ammessa al traino']],
  daten: { 'Länge': '11,0 m respingenti compresi', 'Gewicht': '70 t in servizio', 'Tragfähigkeit': 'secondo lo sbraccio, portata massima non documentata', 'Höchstgeschwindigkeit': '120 km/h al traino', 'Gegengewicht': 'fisso', 'In Betrieb seit': '2006–2007 (dic. 2006 – ott. 2007)', 'Einsatz': 'costruzione di binari, posa di pali, intervento' },
  specNote: 'La portata delle gru ferroviarie dipende fortemente da sbraccio, stabilizzatori e posizione del binario.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Kirow ha consegnato dodici KRC 100 tra dicembre 2006 e ottobre 2007. La serie è stata acquistata per interventi decentralizzati di costruzione e soccorso.'] }, { titel: 'Impiego e tecnica', p: ['La parte superiore girevole permette di lavorare lateralmente e lungo il binario, per esempio per posare pali o elementi di protezione in acciaio.', 'Per gli spostamenti la gru è impiegata come treno di lavoro con carri di protezione e di accompagnamento; non ha bisogno di una trazione propria.'] }, { titel: 'Dotazione e accessibilità', liste: ['Contrappeso fisso e piccolo raggio posteriore', 'Parte superiore girevole', 'Nessuna trazione propria, fino a 120 km/h rimorchiata', 'Nessun compartimento passeggeri'] }]
});

uebZug('bendini', {
  typ: 'Carro gru compatto della classe 30 tm',
  text: ['Il Bendini è un carro gru compatto per sollevamenti medi e leggeri nella manutenzione dell’infrastruttura ferroviaria.', 'Il catalogo dei tipi di marcia FFS lo elenca come carro gru XTms attivo e senza trazione.'],
  kennzahlen: [['30 tm', 'classe di gru'], ['100 km/h', 'velocità di trasporto'], ['38 t', 'massa del veicolo'], ['8,1 m', 'lunghezza del veicolo']],
  daten: { 'Basistyp': 'macchina da cantiere', 'Fahrzeugart': 'carro merci', 'Anzahl': 'diversi, numero totale non confermato', 'Fahrzeugnummern': 'esempi da XTm 91551 a 91596', 'In Betrieb seit': 'anni 1980 (telai del 1984, 1985 e 1989 attestati)', 'Einsatz': 'manutenzione e montaggio' },
  specNote: 'L’indicazione 30 tm designa la classe di gru usata nel catalogo FFS; non equivale alla massa del veicolo di 38 t. Numero e anno sono indicati di proposito solo come minimo o periodo.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['I carri gru sono di Bendini; sono documentati telai del 1984, 1985 e 1989. Le FFS ne hanno diversi, il numero totale non è confermato. Alcuni esempi portano numeri tra XTm 91551 e 91596.'] }, { titel: 'Impiego e tecnica', p: ['Con soli 8,1 metri di lunghezza il Bendini è nettamente più compatto dei pesanti convogli Kirow.', 'È adatto a lavori locali di montaggio e sollevamento per cui non serve una grande gru pesante.'] }, { titel: 'Dotazione e accessibilità', liste: ['Classe di gru 30 tm', 'Compatto: 8,1 m di lunghezza, 38 t', 'Nessuna trazione propria, fino a 100 km/h in un treno'] }, { titel: 'Sostituzione prevista', p: ['Nella pianificazione degli acquisti di FFS Infrastruttura un progetto di gru per carichi medi figura espressamente come sostituto del Bendini e di altre gru più vecchie.', 'Il catalogo dei tipi di marcia 2026 indica tuttavia il Bendini ancora come attivo.'] }]
});

uebZug('fahrleitung', {
  name: 'Veicoli per la linea di contatto',
  typ: 'Veicoli di servizio per la costruzione e la manutenzione della linea di contatto',
  text: ['I veicoli per la linea di contatto portano personale, attrezzi e materiale direttamente alla linea aerea.', 'FFS Infrastruttura usa a tale scopo diverse serie e versioni; esempi citati pubblicamente sono Hubi, Krani e Combi 4A.'],
  kennzahlen: [['diversi', 'serie e versioni'], ['Hubi', 'esempio di veicolo'], ['Krani', 'esempio di veicolo'], ['Combi 4A', 'esempio di veicolo']],
  daten: { 'Fahrzeuggruppe': 'veicoli di servizio linea di contatto', 'Arbeitsmittel': 'piattaforma di lavoro elevabile', 'Weitere Ausrüstung': 'gru e piattaforma per materiale', 'Antrieb': 'secondo la serie', 'Höchstgeschwindigkeit': 'secondo la serie', 'Arbeitsort': 'linea di contatto e strutture portanti', 'Anzahl': 'non pubblicato come numero totale', 'Einsatz': 'montaggio, controllo e riparazione' },
  specNote: 'Il veicolo per la linea di contatto non è una singola serie. Valori tecnici e anni di costruzione vanno attribuiti a un tipo concreto o a un numero di veicolo.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['FFS Infrastruttura impiega diverse serie e versioni. Esempi citati pubblicamente sono Hubi, Krani e Combi 4A; un numero totale non è pubblicato.'] }, { titel: 'Impiego e tecnica', p: ['I veicoli supportano ispezione, eliminazione dei guasti e rinnovo della linea di contatto. Le piattaforme di lavoro danno accesso al filo di contatto; le gru sollevano pali, mensole e materiale.'] }, { titel: 'Dotazione e accessibilità', liste: ['Piattaforma elevabile per accedere al filo di contatto', 'Gru e piattaforma per il materiale', 'Trazione e velocità secondo la serie'] }, { titel: 'Delimitazione', p: ['Questa pagina descrive il gruppo di veicoli. Per un ritratto tecnico individuale servono la designazione esatta della serie e il numero del veicolo, perché potenza, massa, lunghezza e anno di costruzione variano molto.'] }],
  bilder: ['Carro gru «Krani 3» con piattaforma elevabile per la costruzione della linea di contatto', 'Carro di montaggio del Combi XTmass 99 85 9236 051 presso Bad Ragaz', 'Treno di costruzione della linea di contatto Combi tra Bad Ragaz e Sargans, 2019']
});

/* ---- 26-historisch.js ---- */
/* Italiano – veicoli storici */
uebDict({
  'Krokodil': 'Coccodrillo',
  'elektrisch, Stangenantrieb': 'elettrica, trasmissione a bielle'
});

uebZug('ee-33', {
  typ: 'Locomotiva elettrica di manovra di costruzione classica FFS (storica)',
  text: ['L’Ee 3/3 è stata per decenni la classica locomotiva elettrica di manovra delle FFS.', 'Tra il 1928 e il 1966 nacquero diverse serie che, nonostante l’evoluzione tecnica, mantennero il concetto di base con tre assi accoppiati.'],
  kennzahlen: [['136', 'locomotive costruite'], ['500 kW', 'versione recente'], ['50 km/h', 'versione recente'], ['1928–1966', 'anni di costruzione della serie']],
  daten: { 'Hersteller': 'SLM con BBC, MFO o SAAS', 'Länge': '9,51 m (serie recente)', 'Gewicht': '45 t a vuoto (serie recente)', 'Leistung': '500 kW (serie recente)', 'Höchstgeschwindigkeit': 'secondo la serie, da ultimo 50 km/h', 'Einsatz': 'manovra leggera e media', 'Status': 'ultima locomotiva FFS ritirata nel 2020' },
  specNote: 'Potenza, massa e lunghezza valgono per la versione recente descritta nel catalogo dei tipi di marcia 2026; le serie più vecchie differiscono.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Le FFS fecero costruire in tutto 136 Ee 3/3. Le locomotive manovravano carrozze e carri nelle stazioni e nei depositi.', 'L’ultima macchina attiva delle FFS è stata ritirata nel 2020.'] }, { titel: 'Impiego e tecnica', p: ['L’Ee 3/3 manovrava carrozze e carri in stazioni e depositi. Tre assi accoppiati sono azionati da bielle; la versione più recente ha 500 kW e da ultimo viaggiava fino a 50 km/h.'] }, { titel: 'Dotazione e accessibilità', liste: ['Trazione elettrica dalla linea di contatto (15 kV 16,7 Hz)', 'Tre assi accoppiati con trasmissione a bielle', 'Nessun compartimento passeggeri'] }, { titel: 'Delimitazione', p: ['Le varianti bifrequenza e quadritensione portano le designazioni Ee 3/3 II ed Ee 3/3 IV e costituiscono tecnicamente sottoserie a sé.'] }],
  bilder: ['Ee 3/3 16408', 'Ee 3/3 16408 di lato', 'Ee 3/3 16451', 'Ee 3/3 16404 a Gossau SG', 'Ee 3/3 16383, costruita nel 1942']
});

uebZug('h-ce68ii', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['SLM ha costruito la parte meccanica, MFO l’equipaggiamento elettrico. Le FFS hanno ricevuto 33 locomotive; le prime sono entrate in servizio nel 1919.'] }, { titel: 'Impiego e tecnica', p: ['La Ce 6/8 II trainava soprattutto treni merci al Gottardo. Due carrelli motori a tre assi con trasmissione a bielle e lunghi avancorpi le danno la forma che le ha valso il nome di «Coccodrillo».'] }, { titel: 'Dotazione e accessibilità', liste: ['Trasmissione a bielle', 'Rodiggio (1′C)(C1′)', 'Nessun compartimento passeggeri'] }],
  beiname: 'Coccodrillo',
  typ: 'Locomotiva elettrica per treni merci (storica)',
  text: ['Il «Coccodrillo» è la locomotiva più famosa della Svizzera. Questa locomotiva merci con trasmissione a bielle circolava soprattutto sul San Gottardo.'],
  daten: { 'Hersteller': 'SLM (meccanica) e MFO (parte elettrica)', 'Einsatz': 'treni merci sul San Gottardo' },
  bilder: ['Coccodrillo Ce 6/8 II 14253 presso Rodi', 'Ce 6/8 II 14253 a Göschenen', 'Ce 6/8 II 14253 con un treno', 'Ce 6/8 II 14282 in livrea verde', 'Ce 6/8 II 14253 a Erstfeld']
});

uebZug('h-ce68iii', {
  beiname: 'Coccodrillo',
  typ: 'La generazione più giovane del Coccodrillo del San Gottardo (storica)',
  text: ['La Ce 6/8 III è la versione perfezionata della celebre locomotiva svizzera «Coccodrillo».', 'I suoi avancorpi articolati e la trasmissione a bielle ne hanno fatto un veicolo inconfondibile del traffico merci pesante.'],
  kennzahlen: [['18', 'locomotive'], ['1926', 'prima messa in servizio'], ['75 km/h', 'dopo la trasformazione'], ['131 t', 'massa in servizio']],
  daten: { 'Hersteller': 'SLM, MFO', 'Antrieb': 'bielle oblique', 'Gewicht': '131 t in servizio', 'Leistung': '1810 kW potenza oraria', 'Höchstgeschwindigkeit': '65 km/h, poi 75 km/h', 'Nummern': '14301–14318, dal 1956 Be 6/8 III 13301–13318', 'In Betrieb seit': '1926 (costruite 1926–1927)', 'Ausmusterung': 'servizio regolare fino al 1977', 'Einsatz': 'treni merci pesanti' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['SLM e MFO hanno costruito nel 1926 e 1927 18 locomotive numerate 14301–14318. Dal 1956 si chiamarono Be 6/8 III 13301–13318.'] }, { titel: 'Impiego e tecnica', p: ['La serie era prevista per i treni merci pesanti sul San Gottardo, sulle linee d’accesso e in pianura.', 'Nel 1956 la velocità massima ammessa fu aumentata a 75 km/h e la serie fu ridenominata Be 6/8 III. Il servizio regolare terminò nel 1977.'] }, { titel: 'Dotazione e accessibilità', liste: ['Trasmissione a bielle inclinate', 'Avancorpi articolati', 'Nessun compartimento passeggeri'] }, { titel: 'Conservazione', p: ['La Ce 6/8 III 14305 è conservata come veicolo storico. Rappresenta la forma a Coccodrillo delle FFS, nota in tutto il mondo.'] }],
  bilder: ['Ce 6/8 III 14305', 'Ce 6/8 III durante una corsa di FFS Historic', 'Ce 6/8 III 14305 di lato', 'Ce 6/8 III 14305 in visita a Malmö (2015)', 'Targa del costruttore della Ce 6/8 III 14305']
});

uebZug('h-ae66', {
  beiname: 'Locomotiva dei cantoni',
  typ: 'Locomotiva dei cantoni e icona del San Gottardo (storica)',
  text: ['L’Ae 6/6 è stata per decenni la locomotiva di potenza delle FFS sul San Gottardo.', 'Le prime 25 macchine portavano gli stemmi cantonali e modanature cromate; le successive ricevettero gli stemmi di città e comuni svizzeri.'],
  kennzahlen: [['120', 'locomotive'], ['125 km/h', 'velocità massima'], ['1952', 'prima messa in servizio'], ['4300 kW', 'potenza oraria']],
  daten: { 'Gewicht': '120 t (prototipi 124 t)', 'Leistung': 'circa 4300 kW potenza oraria alla ruota', 'In Betrieb seit': '1952 (serie 1955–1966)', 'Einsatz': 'San Gottardo, treni viaggiatori e merci pesanti' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['SLM, BBC e MFO hanno costruito 120 locomotive numerate 11401–11520. Dopo i prototipi del 1952, la serie seguì dal 1955 al 1966. Furono ritirate dal 2002 al 2013.'] }, { titel: 'Impiego e tecnica', p: ['Dapprima l’Ae 6/6 ha segnato il traffico diretto e merci sul San Gottardo. Con locomotive più moderne il suo impiego si è spostato sempre più verso il traffico merci e l’Altopiano.'] }, { titel: 'Dotazione e accessibilità', liste: ['Sei assi motori (Co′Co′)', 'Stemmi cantonali e modanature cromate sulle prime 25 locomotive, poi stemmi di città e comuni', 'Nessun compartimento passeggeri'] }, { titel: 'Conservazione', p: ['Diverse Ae 6/6 sono state conservate. L’Ae 6/6 11421 «Graubünden» fa parte della collezione di FFS Historic e mantiene viva l’epoca delle locomotive dei cantoni.'] }],
  bilder: ['Ae 6/6 11413 «Schaffhausen»', 'Ae 6/6 al Museo svizzero dei trasporti di Lucerna', 'Ae 6/6 in livrea rossa a Renens', 'Ae 6/6 di fronte', 'Ae 6/6 in verde con modanature cromate']
});

uebZug('h-ae47', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['La SLM ha costruito la parte meccanica; l’equipaggiamento elettrico veniva da BBC, MFO e SAAS. Le FFS hanno acquistato 127 locomotive; la prima è entrata in servizio nel 1927.'] }, { titel: 'Impiego e tecnica', p: ['Per decenni l’Ae 4/7 è stata una delle principali locomotive di linea delle FFS, in testa a treni viaggiatori e merci su tutta la rete. La trasmissione Buchli si trova su un solo lato della locomotiva, che per questo è facile da riconoscere.'] }, { titel: 'Dotazione e accessibilità', liste: ['Trasmissione Buchli', 'Rodiggio 2′Do1′', 'Nessun compartimento passeggeri'] }],
  typ: 'Locomotiva elettrica con trasmissione Buchli (storica)',
  text: ['L’Ae 4/7 è stata per decenni una delle principali locomotive di linea delle FFS, riconoscibile dalla trasmissione Buchli su un solo lato.'],
  daten: { 'Antrieb': 'elettrica, trasmissione Buchli' },
  bilder: ['Ae 4/7 11026 a Brugg', 'Ae 4/7 10997 a Mendrisio', 'Ae 4/7 11026 a Bauma', 'Ae 4/7 con treno merci', 'Ae 4/7 presso Salgesch']
});

uebZug('h-ae36i', {
  typ: 'Locomotiva Buchli per l’Altopiano elettrificato (storica)',
  text: ['L’Ae 3/6 I è stata una delle prime importanti locomotive elettriche delle FFS.', 'La caratteristica trasmissione individuale Buchli e la lunga carriera hanno fatto della serie un simbolo dell’elettrificazione dell’Altopiano.'],
  kennzahlen: [['114', 'locomotive'], ['110 km/h', 'velocità massima successiva'], ['1921', 'prima messa in servizio'], ['73 anni', 'in servizio fino al 1994']],
  daten: { 'Antrieb': 'trasmissione individuale Buchli', 'Gewicht': '92–96 t in servizio', 'Leistung': '1470–1635 kW potenza oraria', 'In Betrieb seit': '1921 (costruite 1920–1929)', 'Ausmusterung': 'fino al 1994', 'Einsatz': 'treni viaggiatori, diretti e merci' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['SLM, BBC, MFO e SAAS hanno costruito dal 1920 al 1929, in diversi lotti, 114 locomotive numerate 10601–10714.'] }, { titel: 'Impiego e tecnica', p: ['La grande serie fu acquistata in più lotti e impiegata nel traffico viaggiatori, diretto e merci. Le migliorie introdotte durante la costruzione crearono differenze di potenza e velocità all’interno della flotta.'] }, { titel: 'Dotazione e accessibilità', liste: ['Trasmissione individuale Buchli', 'Nessun compartimento passeggeri'] }, { titel: 'Importanza e conservazione', p: ['Con un servizio dal 1921 al 1994 l’Ae 3/6 I è tra le serie di locomotive FFS più longeve. Diverse locomotive sono state conservate da musei e associazioni, tra cui la 10700 nell’ambito di FFS Historic.'] }],
  bilder: ['Ae 3/6 I 10700', 'Ae 3/6 I con trasmissione Buchli', 'Ae 3/6 I 10650 a Brugg (2012)', 'Ae 3/6 I 10712 a Biel/Bienne (1988)', 'Ae 3/6 I 10638']
});

uebZug('h-ae814', {
  beiname: 'Landi-Lok',
  typ: 'Tre doppie locomotive uniche per il San Gottardo (storiche)',
  text: ['La designazione Ae 8/14 comprende tre doppie locomotive sviluppate singolarmente.', 'Dovevano trainare i pesanti treni del San Gottardo senza locomotive di rinforzo in testa o in spinta e alla loro nascita erano considerate straordinariamente potenti.'],
  kennzahlen: [['3', 'prototipi'], ['1931', 'prima messa in servizio'], ['fino a 110 km/h', 'velocità massima'], ['8162 kW', 'potenza oraria massima']],
  daten: { 'Hersteller': 'SLM, BBC o MFO', 'Achsfolge': 'diverso secondo la locomotiva', 'Länge': 'circa 34 m', 'Gewicht': '235,7–246 t in servizio', 'Leistung': '5514–8162 kW potenza oraria', 'In Betrieb seit': '1931 (costruite 1931, 1932, 1938/40)', 'Einsatz': 'treni pesanti del San Gottardo' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['La 11801, la 11851 e la 11852 differivano per trasmissione, potenza e costruzione.', 'La 11852 fu costruita per l’Esposizione nazionale del 1939 e divenne famosa come «Landi-Lok». Con oltre 8 MW è stata a lungo la locomotiva più potente del mondo.'] }, { titel: 'Impiego e tecnica', p: ['Le locomotive dovevano trainare pesanti treni del Gottardo senza locomotiva di rinforzo in testa o in spinta. Sono lunghe circa 34 m, pesano da 235,7 a 246 t e hanno da 5514 a 8162 kW. La velocità massima era di 100 o 110 km/h.'] }, { titel: 'Dotazione e accessibilità', liste: ['Doppia locomotiva composta da due metà', 'Trasmissione e costruzione diverse su ciascuna delle tre locomotive', 'Nessun compartimento passeggeri'] }, { titel: 'Conservazione', p: ['L’Ae 8/14 11852 è conservata da FFS Historic a Erstfeld. Attualmente non è in grado di circolare, ma può essere visitata come pezzo storico di primo piano.'] }],
  bilder: ['Ae 8/14 11801 a Biasca', 'Ae 8/14 11852 «Landi-Lok» al Museo svizzero dei trasporti', 'Ae 8/14 11851 nuova di fabbrica sul ponte del Kerstelenbach, 1932', 'Ae 8/14 11801 durante una corsa speciale', 'Ae 8/14 11801 a Bellinzona']
});

uebZug('h-be46', {
  typ: 'Locomotiva della prima generazione elettrica del San Gottardo (storica)',
  text: ['La Be 4/6 faceva parte della prima generazione di locomotive elettriche del San Gottardo.', 'Per la sua forma caratteristica ricevette il soprannome di «Rehbock» (capriolo) e trainò dapprima i pesanti treni diretti sulla linea di montagna.'],
  kennzahlen: [['40', 'locomotive'], ['75 km/h', 'velocità massima'], ['1920', 'prima messa in servizio'], ['107–110 t', 'massa in servizio']],
  daten: { 'Achsfolge': '6 assi, di cui 4 motori e 2 portanti; trasmissione a bielle', 'Gewicht': '107–110 t in servizio', 'Leistung': 'fino a 1500 kW potenza oraria', 'In Betrieb seit': '1920 (costruite 1920–1923)', 'Ausmusterung': 'fino al 1976', 'Einsatz': 'treni diretti e merci' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['SLM e BBC hanno costruito dal 1920 al 1923 40 locomotive numerate 12303–12342. Furono ritirate entro il 1976.'] }, { titel: 'Impiego e tecnica', p: ['Le FFS ordinarono la serie per l’esercizio elettrico sul San Gottardo. Con l’aumento della massa dei treni le macchine furono soppiantate da tipi più potenti e impiegate in seguito sull’Altopiano e in servizi secondari.'] }, { titel: 'Dotazione e accessibilità', liste: ['Trasmissione a bielle con quattro assi motori e due portanti', 'Nessun compartimento passeggeri'] }, { titel: 'Conservazione', p: ['La Be 4/6 12320 fa parte del parco veicoli storico. Ricorda l’epoca pionieristica della trazione elettrica sulla linea del San Gottardo.'] }],
  bilder: ['Be 4/6 12320 accanto al RAe TEE II 1053', 'Be 4/6 di FFS Historic tra Rämismühle-Zell e Rikon', 'Be 4/6 12320', 'Be 4/6 presso Rämismühle', 'Be 4/6 12339']
});

uebZug('h-re44i', {
  typ: 'Locomotiva leggera per treni diretti del dopoguerra (storica)',
  text: ['La Re 4/4 I è stata la prima locomotiva a carrelli delle FFS.', 'Concepita per treni veloci e leggeri, ha segnato insieme alle carrozze leggere in acciaio il traffico di qualità sull’Altopiano.'],
  kennzahlen: [['50', 'locomotive'], ['125 km/h', 'velocità massima'], ['1946', 'prima messa in servizio'], ['57 t', 'massa in servizio']],
  daten: { 'Länge': '14,7 / 14,9 m (secondo la serie)', 'Gewicht': '57 t in servizio', 'Leistung': '1850 / 1900 kW potenza oraria', 'Nummern': '10001–10050 (prima 401–450)', 'In Betrieb seit': '1946 (costruite 1946–1951)', 'Einsatz': 'treni diretti e navetta, poi treni regionali' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['SLM, BBC, MFO e SAAS hanno costruito dal 1946 al 1951, in due serie, 50 locomotive numerate prima 401–450, poi 10001–10050.'] }, { titel: 'Impiego e tecnica', p: ['Le locomotive furono costruite in due serie. Il peso ridotto, la marcia tranquilla e la velocità massima di 125 km/h le rendevano ideali per treni diretti e pendolari.', 'In seguito passarono ai servizi regionali e di rinforzo.'] }, { titel: 'Dotazione e accessibilità', liste: ['Costruzione leggera: 57 t in servizio', 'Prima locomotiva a carrelli delle FFS', 'Nessun compartimento passeggeri'] }, { titel: 'Conservazione', p: ['Il ritiro regolare avvenne dal 1996 al 1998. La Re 4/4 I 10001 è conservata come locomotiva storica da FFS Historic.'] }],
  bilder: ['Re 4/4 I 10029 a Stein am Rhein (1991)', 'Re 4/4 I 10019', 'Re 4/4 I (come Re 410 009) presso Zurigo, 2015', 'Re 4/4 I 10019 a Basilea Badischer Bahnhof', 'Re 4/4 I 10032 a České Velenice']
});

uebZug('h-tee', {
  typ: 'Elettrotreno quadritensione per il traffico internazionale di punta (storico)',
  text: ['Il RAe TEE II collegava la Svizzera senza cambio di locomotiva con Germania, Francia, Italia e Paesi Bassi.', 'La sua tecnica quadritensione ne fece uno degli elettrotreni europei tecnicamente più complessi della sua epoca.'],
  kennzahlen: [['5', 'elettrotreni'], ['140 km/h', 'in esercizio · tecnica 160 km/h'], ['1961', 'prima messa in servizio'], ['4', 'sistemi di corrente']],
  daten: { 'Zugbildung': 'a sei elementi (stato conservato; i primi quattro treni erano in origine a cinque elementi)', 'Stromsystem': '15 kV e 25 kV CA, 1,5 kV e 3 kV CC', 'Gewicht': 'circa 309 t in servizio', 'Leistung': 'circa 2310 kW', 'Höchstgeschwindigkeit': '140 km/h in esercizio, 160 km/h tecnica', 'In Betrieb seit': '1961 (quinto treno 1967)', 'Einsatz': 'Trans-Europ-Express, poi EuroCity' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['SIG e MFO hanno costruito cinque treni numerati 1051–1055. Quattro arrivarono nel 1961, il quinto nel 1967.'] }, { titel: 'Impiego e tecnica', p: ['Quattro unità furono consegnate nel 1961 a cinque elementi e poi allungate con una carrozza intermedia; il quinto treno seguì nel 1967. Gli eleganti elettrotreni circolarono tra l’altro come TEE Gottardo, Cisalpin, Edelweiss e Roland.', 'Dal 1988 viaggiarono in grigio come RABe EC nel traffico EuroCity.'] }, { titel: 'Dotazione e accessibilità', liste: ['Quadricorrente: 15 e 25 kV alternata, 1,5 e 3 kV continua', 'Solo 1a classe nel servizio TEE', 'Sei casse nello stato conservato, 149,76 m di lunghezza', 'Accessi rialzati con gradini'] }, { titel: 'Conservazione', p: ['Il treno RAe TEE II 1053 è stato conservato. FFS Historic lo ha riportato allo stato TEE rosso e beige; dal 2003 circola in corse speciali storiche.'] }],
  bilder: ['RAe TEE II al marciapiede', 'RAe TEE II a Zurigo HB, 1963', 'Testata del RAe TEE II', 'RAe TEE II in viaggio', 'RAe TEE II a Zurigo HB, 1963']
});

uebZug('h-roterpfeil', {
  beiname: 'Freccia rossa',
  typ: 'Automotrice elettrica leggera per gite e corse veloci (storica)',
  text: ['Le sette Frecce rosse elettriche furono consegnate tra il 1935 e il 1938 come CLe 2/4 e in seguito ridenominate più volte.', 'La loro forma aerodinamica rossa ne fece uno dei simboli più noti delle moderne FFS degli anni Trenta.'],
  kennzahlen: [['7', 'veicoli elettrici di base'], ['125 km/h', 'velocità massima'], ['1935', 'prima messa in servizio'], ['70', 'posti a sedere']],
  daten: { 'Gewicht': 'circa 38 t in servizio', 'Leistung': '404 kW potenza oraria, 315 kW potenza continuativa', 'Nummern': '201–207, poi 601–607', 'Einsatz': 'gite e viaggi di gruppo, prestazioni speciali veloci' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Le vetture 201 e 202 furono consegnate nel 1935, le 203–206 nel 1936 e la 207 nel 1938. In seguito portarono tra l’altro la designazione RCe 2/4. Le vetture 201 e 206 furono allungate nel 1952 e nel 1953 e trasformate per la 1a classe (RAe 2/4); altre portarono da ultimo la designazione RBe 2/4.', 'Per questo i dati sull’effettivo variano secondo la designazione e il periodo.'] }, { titel: 'Impiego e tecnica', p: ['Le Frecce rosse servivano per gite, viaggi di gruppo e prestazioni speciali veloci. Il peso ridotto e la forma aerodinamica incarnavano lo slancio tecnico del periodo tra le due guerre.'] }, { titel: 'Dotazione e accessibilità', liste: ['70 posti a sedere', 'Costruzione leggera di circa 38 t', 'Forma aerodinamica', 'Due veicoli poi allungati e trasformati per la 1a classe'] }],
  bilder: ['Freccia rossa RCe 2/4 203']
});

uebZug('h-a35', {
  typ: 'Locomotiva a vapore per treni diretti della serie 701–809 (storica)',
  text: ['Alle FFS la designazione A 3/5 è stata usata per diversi tipi costruttivi.', 'Questa pagina tratta la nota serie JS/FFS 701–809, a cui appartiene anche l’A 3/5 705 conservata.'],
  kennzahlen: [['109', 'locomotive della serie'], ['100 km/h', 'velocità massima'], ['1902', 'prima messa in servizio'], ['920 kW', 'potenza indicata']],
  daten: { 'Länge': '18,60 m con tender', 'Gewicht': '106–107 t in servizio con tender', 'Leistung': '920 kW (indicata)', 'Anfahrzugkraft': 'circa 75 kN', 'In Betrieb seit': '1902 (costruite 1902–1909)', 'Einsatz': 'treni diretti' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['La SLM Winterthur ha costruito dal 1902 al 1909 109 locomotive numerate 701–809. Erano state ancora ordinate dalla ferrovia Jura-Simplon.'] }, { titel: 'Impiego e tecnica', p: ['Le locomotive erano state ancora ordinate dalla Ferrovia Giura-Sempione e furono rilevate dalle FFS. 68 macchine ricevettero la tecnica del vapore surriscaldato.', 'Trainarono treni diretti di qualità finché locomotive più potenti e poi elettriche le soppiantarono.'] }, { titel: 'Dotazione e accessibilità', liste: ['Tender separato', '68 macchine a vapore surriscaldato', 'Nessun compartimento passeggeri'] }, { titel: 'Conservazione', p: ['L’A 3/5 705 è stata conservata in grado di circolare. È curata dalla Dampfgruppe Zürich e rappresenta il vapore dei treni diretti dei primi anni delle FFS.'] }],
  bilder: ['A 3/5 705 accanto all’Ae 3/6 I 10694 ad Arnex-sur-Orbe, 1967']
});

uebZug('h-c56', {
  typ: 'Locomotiva a vapore per i pesanti treni del San Gottardo (storica)',
  text: ['La C 5/6 era tra le locomotive a vapore più grandi e potenti delle FFS. Fu anche il loro ultimo acquisto di locomotive a vapore nuove a scartamento normale.', 'Il soprannome «Elefant» (elefante) rimanda all’aspetto imponente e al grande sforzo di trazione.'],
  kennzahlen: [['28', 'locomotive di serie'], ['65 km/h', 'velocità massima'], ['1913', 'prima messa in servizio'], ['128 t', 'con tender']],
  daten: { 'Länge': '19,195 m con tender', 'Gewicht': '128 t con tender', 'Leistung': 'circa 1190 kW (indicata)', 'In Betrieb seit': '1913 (costruite 1913–1917)', 'Ausmusterung': 'fino al 1968', 'Einsatz': 'treni merci pesanti' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['La SLM Winterthur ha costruito dal 1913 al 1917 28 locomotive numerate 2951–2978. Fu l’ultimo acquisto di nuove locomotive a vapore a scartamento normale delle FFS.'] }, { titel: 'Impiego e tecnica', p: ['La C 5/6 fu sviluppata per il traffico pesante sul San Gottardo. Dopo l’elettrificazione passò sull’Altopiano, sulla linea Bellinzona–Luino e in servizi di manovra.', 'Nel 1968 la 2969 trainò l’ultimo treno a vapore ufficiale delle FFS.'] }, { titel: 'Dotazione e accessibilità', liste: ['Tender separato', 'Pressione della caldaia 15 bar', 'Nessun compartimento passeggeri'] }, { titel: 'Conservazione', p: ['Diversi esemplari sono stati conservati. La C 5/6 2978, ultima locomotiva della serie, fa parte del parco veicoli storico delle FFS.'] }],
  bilder: ['C 5/6 2958 al Locorama', 'C 5/6 2965 del 1916', 'C 5/6 2965, costruita da SLM', 'C 5/6 «Elefant» in dettaglio', 'Targhe della C 5/6 2965 «Erstfeld»']
});

uebZug('h-eb35', {
  typ: 'Locomotiva-tender versatile (storica)',
  text: ['L’Eb 3/5 era una robusta locomotiva-tender per servizi viaggiatori, merci e di manovra.', 'La sua forma tozza le valse il soprannome popolare di «Habersack».'],
  kennzahlen: [['34', 'locomotive'], ['75 km/h', 'velocità massima'], ['1911', 'prima messa in servizio'], ['74–74,9 t', 'massa in servizio']],
  daten: { 'Bauart': 'locomotiva-tender 1′C1′', 'Länge': '12,74 m respingenti compresi (Eb 3/5 5819)', 'Gewicht': '57,6–58,8 t a vuoto, 74–74,9 t in servizio', 'Kesseldruck': 'circa 12 bar', 'Vorräte': '7,7 m³ d’acqua, 2,5 t di carbone', 'In Betrieb seit': '1911 (costruite 1911–1916)', 'Einsatz': 'treni regionali, linee secondarie, servizio di stazione' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['La SLM Winterthur ha costruito dal 1911 al 1916 34 locomotive numerate 5801–5834. Furono ritirate dal 1953 al 1965.'] }, { titel: 'Impiego e tecnica', p: ['La disposizione simmetrica degli assi consentiva buone qualità di marcia in entrambe le direzioni senza dover girare la locomotiva.', 'L’Eb 3/5 era quindi particolarmente adatta a linee secondarie, treni regionali e servizi di stazione variati.'] }, { titel: 'Dotazione e accessibilità', liste: ['Locomotiva-tender con scorte a bordo: 7,7 m³ d’acqua e 2,5 t di carbone', 'Rodiggio simmetrico 1′C1′ per entrambe le direzioni', 'Nessun compartimento passeggeri'] }, { titel: 'Conservazione', p: ['Singole locomotive della serie sono state conservate da musei e ferrovie storiche. Mostrano l’ultima generazione di locomotive-tender a vapore universali delle FFS.'] }],
  bilder: ['Eb 3/5 a Bremgarten West', 'Eb 3/5 5810 (2018)', 'Eb 3/5 5885', 'Eb 3/5 «Habersack»', 'Eb 3/5 in ritratto']
});

uebZug('h-mirage', {
  typ: 'Espresso della Costa d’oro della periferia zurighese (storico)',
  text: ['Nel RABDe 12/12 a tre elementi tutti i dodici assi erano motori.', 'L’enorme accelerazione si adattava al fitto traffico suburbano sulla riva destra del lago di Zurigo e gli valse il soprannome di «Mirage».'],
  kennzahlen: [['20', 'elettrotreni'], ['125 km/h', 'velocità massima'], ['1967', 'prima messa in servizio'], ['2444 kW', 'potenza oraria']],
  daten: { 'Zugbildung': 'a tre elementi', 'Achsfolge': 'tutti i 12 assi motori', 'Gewicht': 'circa 170 t a vuoto', 'Leistung': '2444 kW potenza oraria', 'In Betrieb seit': '1967 (costruiti 1965–1967)', 'Ausmusterung': 'fino al 2008, demoliti entro il 2010', 'Einsatz': 'traffico suburbano sulla riva destra del lago di Zurigo' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['SWP, FFA, BBC e SAAS hanno costruito dal 1965 al 1967 20 treni a tre casse numerati 1101–1120. Dopo le trasformazioni si chiamarono RABDe 510.'] }, { titel: 'Impiego e tecnica', p: ['I treni furono acquistati per il traffico suburbano semiorario sulla linea della riva destra del lago di Zurigo e divennero noti come «Goldküstenexpress» (espresso della Costa d’oro). In seguito circolarono anche su altre linee regionali e S-Bahn.'] }, { titel: 'Dotazione e accessibilità', liste: ['200 posti in 1a e 2a classe', 'Compartimento bagagli (lettera D)', 'Tutti i dodici assi motori, per un’accelerazione rapida'] }, { titel: 'Modernizzazione e fine', p: ['Dopo le trasformazioni i veicoli portarono la designazione RABDe 510. Il servizio regolare terminò nel 2008; entro il 2010 furono demolite le ultime unità. Nessun treno completo è stato conservato.'] }],
  bilder: ['RABDe 12/12 «Mirage» in rosso', 'RABDe 12/12 «Mirage» nel 1983', '«Mirage» nella successiva livrea NPZ', '«Mirage» come RABDe 510', 'Due «Mirage» sulla Costa d’oro del lago di Zurigo']
});

uebZug('h-rbe540', {
  typ: 'Automotrice potente modernizzata per treni navetta (storica)',
  text: ['La RBe 540 è nata dalla modernizzazione delle RBe 4/4.', 'Le potenti automotrici trainarono dapprima treni diretti e poi soprattutto treni navetta regionali e S-Bahn.'],
  kennzahlen: [['82', 'RBe 4/4 costruite'], ['125 km/h', 'velocità massima'], ['1959', 'primi prototipi'], ['1988 kW', 'potenza oraria']],
  daten: { 'Gewicht': '68 t, dopo la trasformazione R4 72 t', 'Leistung': '1988 kW potenza oraria', 'Sitzplätze': '64, dopo la trasformazione R4 60', 'Nummern': 'in origine 1401–1482, come RBe 540 006–079', 'In Betrieb seit': '1959 (costruite 1959–1966)', 'Modernisierung': '1993–1998 (programma R4)', 'Ausmusterung': 'ultimi servizi regolari nel 2014', 'Einsatz': 'treni diretti, poi treni navetta regionali e S-Bahn' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['SIG, BBC e MFO hanno costruito dal 1959 al 1966 82 RBe 4/4 numerate 1401–1482. Con il programma R4 furono modernizzate dal 1993 al 1998 e designate RBe 540 006–079.'] }, { titel: 'Impiego e tecnica', p: ['Le RBe 4/4 erano abbastanza potenti da trainare un treno diretto e offrivano al tempo stesso un compartimento viaggiatori.', 'Con il programma di trasformazione R4 ricevettero nuove cabine di guida, porte e interni, oltre alla designazione RBe 540.'] }, { titel: 'Dotazione e accessibilità', liste: ['Compartimento passeggeri con 64 posti, 60 dopo la trasformazione R4', 'Nuove cabine, porte e interni con la trasformazione R4'] }, { titel: 'Ritiro e conservazione', p: ['Gli ultimi servizi regolari terminarono nel 2014. Singoli veicoli sono stati conservati come storici, tra cui la RBe 540 074 impiegata sulla Oensingen-Balsthal-Bahn.'] }],
  bilder: ['RBe 540 007', 'RBe 540 060 a Coira', 'RBe 4/4 in livrea verde presso Tägerwilen', 'RBe 540 accanto a una Re 4/4 II a Winterthur', 'RBe 540 020 a Zurigo HB']
});

/* ---- 27-einsatz.js ---- */
/* Italiano – testi «Dove circola?» */
uebDict({
  'Mit Bauzügen auf Baustellen im ganzen SBB-Normalspurnetz, je nach Bauprogramm.': 'Con treni cantiere nei cantieri di tutta la rete FFS a scartamento normale, secondo il programma dei lavori.'
});

uebEinsatz({
  'rabe-501': 'In Svizzera soprattutto su Zurigo–Zugo–Lucerna e Zurigo–Coira, oltre che da Basilea e Zurigo attraverso il San Gottardo verso Lugano e Chiasso. A livello internazionale sull’asse nord-sud tra Germania, Svizzera e Italia.',
  'rabde-500': 'Soprattutto sulla linea ai piedi del Giura: Basilea–Bienne–Losanna e Rorschach–San Gallo–Zurigo–Bienne–Ginevra, oltre a Berna–Olten. Circola anche tra Zurigo e Chiasso.',
  'rabe-502': 'La linea principale è San Gallo–Zurigo–Berna–Losanna–Ginevra. Inoltre Basilea–Zurigo, San Gallo–Coira, Zurigo–Coira, Lucerna–Zurigo, Lucerna–Berna, Basilea–Berna–Interlaken/Briga e Basilea–Lugano.',
  'rabe-511': 'Come Regio-Dosto soprattutto sulla S-Bahn di Zurigo e nella regione di Losanna, come IR-Dosto nella regione Zurigo/Altopiano, nella Svizzera occidentale e settentrionale e tra Zurigo e Coira.',
  'rabe-514': 'Su tutta la rete della S-Bahn di Zurigo.',
  'rabe-523': 'Come S-Bahn nei cantoni Argovia, Soletta, Lucerna, Basilea, Neuchâtel, Friburgo e Vaud.',
  'rbde-560': 'Alle FFS su linee S-Bahn nei cantoni Argovia, Lucerna, Neuchâtel e Vaud. In Vallese RegionAlps circola con propri Domino tra St-Gingolph e Briga.',
  're-460': 'In tutta la rete a scartamento normale in testa ai treni InterCity e InterRegio, spesso con carrozze a due piani IC2000.',
  're-420': 'Un tempo in testa ai treni diretti e sulle linee d’accesso al San Gottardo e al Sempione, oggi soprattutto con FFS Cargo in tutta la rete.',
  're-620': 'Costruita per treni pesanti sulle linee del San Gottardo e del Sempione, qui rappresentate con le linee di montagna.',
  're-484': 'Nel transito nord–sud attraverso la Svizzera fino in Italia.',
  're-474': 'Nel traffico merci transfrontaliero verso l’Italia.',
  're-193': 'Soprattutto nel traffico merci interno svizzero di FFS Cargo; esistono omologazioni anche per servizi transfrontalieri.',
  're-482': 'Nel traffico merci in Svizzera e verso la Germania, in parte fino in Austria.',
  'aem-940': 'Negli scali di smistamento di Limmattal e Lausanne Triage e con treni cantiere in tutta la Svizzera.',
  'lrz-18': 'Sedi delle due serie: Ginevra, Melide e Briga, oltre a Zurigo, Winterthur e Berna. Da lì i treni partono verso gli eventi sulla rete.',
  'kirow-krc-1100': 'Liberamente in tutta la rete FFS a scartamento normale, soprattutto per la posa di ponti provvisori.',
  'am-843': 'In manovra e nella distribuzione, nonché per treni cantiere in tutta la Svizzera.',
  'tm-234': 'Nei cantieri di tutta la rete per la manutenzione di binari, linea di contatto e segnali.',
  'rabe-512': 'Nella regione Zurigo/Altopiano, nella Svizzera occidentale e settentrionale e tra Zurigo e Coira.',
  're-450': 'Sulla S-Bahn di Zurigo, tra l’altro fino a Sciaffusa, Zugo e Glarona.',
  'rabe-520': 'Nel Seetal tra Lenzburg e Lucerna e nella regione di Lucerna fino ad Arth-Goldau e Brunnen.',
  'rabe-503': 'Soprattutto su Zurigo–Rorschach, Basilea–Briga e Ginevra–Briga. A livello internazionale sull’asse nord-sud verso la Germania e l’Italia.',
  'ic2000': 'Soprattutto su Romanshorn–Zurigo–Berna–Briga/Interlaken, Basilea–Berna–Briga/Interlaken, Ginevra–Briga, Ginevra–Berna–Lucerna, Zurigo–Costanza e Zurigo–Coira.',
  'ew-iv': 'Con la Re 460 soprattutto su Ginevra–Briga, Basilea–Lugano, Zurigo–Costanza, Zurigo–Baden–Olten–Berna e Zurigo–Sciaffusa. A livello internazionale circolano soprattutto le carrozze EuroCity delle FFS.'
});

/* ---- 30-quiz.js ---- */
/* Italiano – domande del quiz (stesso ordine di js/daten/quiz.js, la PRIMA risposta è giusta) */
uebQuiz('einfach', [
  { f: 'Che treno è questo?', a: ['Re 460', 'Re 620', 'RBDe 560 «Domino»', 'RABe 501 «Giruno»'], info: 'Qui la Re 460 traina carrozze unificate.' },
  { f: 'Che treno è questo?', a: ['RBDe 560 «Domino»', 'RABDe 500 «ICN»', 'Re 460', 'RABe 502 «FV-Dosto»'] },
  { f: 'Che treno è questo?', a: ['RABe 502 «FV-Dosto»', 'RABDe 500 «ICN»', 'RBDe 560 «Domino»', 'Re 620'] },
  { f: 'Che treno è questo?', a: ['RABDe 500 «ICN»', 'RABe 502 «FV-Dosto»', 'Re 460', 'RBDe 560 «Domino»'] },
  { f: 'Che locomotiva è questa?', a: ['Re 620', 'Re 460', 'RABDe 500 «ICN»', 'RBDe 560 «Domino»'], info: 'La Re 620 ha sei assi e oggi circola con FFS Cargo.' },
  { f: 'Quali carrozze traina la Re 460 in questa foto?', a: ['Carrozze a due piani IC2000', 'Carri merci', 'Carri cisterna', 'Carri postali'] },
  { f: 'Che cosa significa la sigla FFS?', a: ['Ferrovie federali svizzere', 'Funicolari federali svizzere', 'Ferrovie di frontiera svizzere', 'Federazione ferroviaria di Sion'] },
  { f: 'Quanto è largo lo scartamento normale?', a: ['1435 mm', '1000 mm', '1520 mm', '1668 mm'], info: 'Si misura la distanza tra i bordi interni delle rotaie.' },
  { f: 'Quanto è largo lo scartamento metrico?', a: ['1000 mm', '1435 mm', '750 mm', '1200 mm'] },
  { f: 'Quale ferrovia circola principalmente a scartamento metrico?', a: ['Ferrovia retica (RhB)', 'FFS Cargo', 'BLS', 'FFS Traffico a lunga percorrenza'] },
  { f: 'Quale di questi treni è a due piani?', a: ['RABe 502 «FV-Dosto»', 'RABDe 500 «ICN»', 'RABe 501 «Giruno»', 'RBDe 560 «Domino»'], info: '«Dosto» è l’abbreviazione tedesca di «Doppelstock», due piani.' },
  { f: 'Come si chiama il treno ad alta velocità RABe 501?', a: ['Giruno', 'Astoro', 'Domino', 'FLIRT'] },
  { f: 'Quale locomotiva viene chiamata «Lok 2000»?', a: ['Re 460', 'Re 420', 'Re 620', 'Ee 922'], info: 'È stata sviluppata per il progetto «Ferrovia 2000».' },
  { f: 'Di che cosa si occupa FFS Cargo?', a: ['Del traffico merci', 'Del traffico viaggiatori', 'Della costruzione di nuove stazioni', 'Del traffico di autobus'] },
  { f: 'Qual è la velocità massima del Giruno?', a: ['250 km/h', '160 km/h', '200 km/h', '320 km/h'] },
  { f: 'Che cosa fa una locomotiva di manovra?', a: ['Compone i treni in stazione e sposta i carri', 'Traina treni a lunga percorrenza a 200 km/h', 'Sgombera la neve dai binari', 'Misura la linea di contatto'] },
  { f: 'Qual è la galleria ferroviaria più lunga del mondo?', a: ['Galleria di base del San Gottardo', 'Galleria di base del Lötschberg', 'Galleria del Sempione', 'Galleria di base della Furka'], info: 'La galleria di base del San Gottardo è lunga circa 57 km.' },
  { f: 'A che cosa serve il pantografo sul tetto di una locomotiva elettrica?', a: ['Capta la corrente dalla linea di contatto', 'Misura la velocità', 'Stabilizza il treno quando c’è vento', 'Pulisce la linea di contatto'] },
  { f: 'Che cosa significa una luce rossa al segnale principale?', a: ['Fermata', 'Via libera', 'Procedere lentamente', 'Attenzione cantiere'] },
  { f: 'Che cosa significa «IC» sul tabellone delle partenze?', a: ['InterCity', 'InterCargo', 'Treno urbano', 'Container internazionale'] },
  { f: 'Quale ditta svizzera costruisce Giruno, KISS e FLIRT?', a: ['Stadler', 'Siemens', 'Alstom', 'Bombardier'] },
  { f: 'Che cosa fa una fresa da neve?', a: ['Fresa la neve e la getta di lato', 'Sparge sale sulle rotaie', 'Riscalda gli scambi', 'Produce neve artificiale per le piste da sci'] },
  { f: 'Quando interviene il treno di spegnimento e salvataggio?', a: ['In caso di incendi e incidenti, soprattutto in galleria', 'In caso di forti nevicate', 'Quando un treno è in ritardo', 'Per corse speciali con turisti'] },
  { f: 'Quali colori ha il logo FFS?', a: ['Rosso e bianco', 'Blu e giallo', 'Verde e bianco', 'Nero e giallo'] },
  { f: 'Da dove prende l’energia la maggior parte dei treni svizzeri?', a: ['Dalla linea di contatto (elettricità)', 'Da motori diesel', 'Da batterie caricate in stazione', 'Da caldaie a vapore'] },
  { f: 'Qual è il soprannome del RABe 523?', a: ['FLIRT', 'KISS', 'DTZ', 'Domino'] },
  { f: 'Quale di questi treni ha un ristorante a bordo?', a: ['RABe 501 «Giruno»', 'RBDe 560 «Domino»', 'RABe 514 «DTZ»', 'Tm 232'] }
]);

uebQuiz('normal', [
  { f: 'Che locomotiva è questa?', a: ['Re 420', 'Re 620', 'Re 460', 'Re 474'], info: 'La Re 420 si chiamava un tempo Re 4/4 II.' },
  { f: 'Quale treno effettua la S30 tra Friburgo e Yverdon-les-Bains?', a: ['RBDe 560 «Domino»', 'RABe 501 «Giruno»', 'RABe 502 «FV-Dosto»', 'RABDe 500 «ICN»'], info: 'La S30 è una linea S-Bahn delle FFS. Il treno esatto può cambiare con l’orario.' },
  { f: 'Come si chiamano una Re 620 e una Re 420 insieme in testa a un treno?', a: ['«Re 10/10»', '«Doppia Lok 2000»', '«Re 12/12»', '«Tiro del San Gottardo»'], info: '6 + 4 = 10 assi motori.' },
  { f: 'Quanti Giruno hanno le FFS?', a: ['41', '29', '62', '119'], info: 'Inizialmente sono stati ordinati 29 treni; con le ordinazioni successive sono diventati 41.' },
  { f: 'Quante Re 460 hanno ricevuto le FFS?', a: ['119', '41', '89', '276'] },
  { f: 'Quale studio di design ha disegnato il frontale della Re 460?', a: ['Pininfarina', 'Porsche Design', 'Bertone', 'Giugiaro'] },
  { f: 'Che cosa significa la piccola «e» in «Re 460»?', a: ['elettrica', 'semplice (einfach)', 'Express', 'autonoma'], info: 'Una «m» indica invece un motore a combustione, p. es. Am 843.' },
  { f: 'Che cosa significano «A» e «B» in «RABe 501»?', a: ['Posti in 1a e 2a classe', 'Assi anteriori e posteriori', 'Inizio e fine del treno', 'Compartimenti per il personale'] },
  { f: 'Quale versione del FV-Dosto ha un ristorante?', a: ['IC200', 'IR200', 'IR100', 'tutte e tre'] },
  { f: 'In quale officina FFS sono state modernizzate tutte le Re 460?', a: ['Yverdon-les-Bains', 'Olten', 'Bellinzona', 'Bienne'], info: 'Il programma di refit è durato dal 2017 al 2022.' },
  { f: 'Che cosa ha di speciale l’ICN?', a: ['Si inclina in curva e può percorrerle più velocemente', 'Va a diesel', 'È un treno a due piani', 'Circola a scartamento metrico'] },
  { f: 'Da quale anno il Giruno circola alle FFS?', a: ['2019', '2004', '2012', '2025'] },
  { f: 'Con quale corrente funziona la rete a scartamento normale delle FFS?', a: ['15 kV, 16,7 Hz corrente alternata', '25 kV, 50 Hz corrente alternata', '3 kV corrente continua', '230 V come dalla presa'] },
  { f: 'Attraverso quale galleria passa il Giruno da Zurigo a Milano?', a: ['Galleria di base del San Gottardo', 'Galleria di base del Lötschberg', 'Galleria del Sempione', 'Galleria della Vereina'] },
  { f: 'Quale treno deve sostituire il Domino alle FFS dal 2028?', a: ['FLIRT Evo', 'Giruno', 'KISS', 'ICN'] },
  { f: 'Chi ha costruito il FV-Dosto?', a: ['Bombardier (oggi Alstom)', 'Stadler', 'Siemens', 'SLM Winterthur'] },
  { f: 'Quale locomotiva va a corrente e ha in più due gruppi diesel-generatori per i cantieri?', a: ['Aem 940', 'Re 460', 'Ee 922', 'Re 482'] },
  { f: 'Quanti posti a sedere ha un Giruno?', a: ['405', '172', '682', '1000'], info: 'A questi si aggiungono 17 posti nel ristorante.' },
  { f: 'Che treno è questo?', a: ['RABe 503 «Astoro»', 'RABe 501 «Giruno»', 'RABDe 500 «ICN»', 'RBDe 560 «Domino»'] },
  { f: 'Questa locomotiva è una Re 465. Quale ferrovia la impiega?', a: ['BLS', 'FFS Cargo', 'Ferrovia retica', 'Südostbahn'], info: 'La Re 465 è la sorella più potente della Re 460.' },
  { f: 'Qual è la velocità massima in esercizio della Re 460?', a: ['200 km/h', '140 km/h', '160 km/h', '250 km/h'], info: 'È costruita per 230 km/h.' },
  { f: 'Che cosa fa la lancetta rossa dei secondi dell’orologio di stazione FFS in alto sul 12?', a: ['Si ferma brevemente finché la lancetta dei minuti scatta', 'Gira all’indietro', 'Salta sul 6', 'Diventa verde'] },
  { f: 'Quale treno a due piani della S-Bahn di Zurigo è stato costruito da Siemens?', a: ['RABe 514 «DTZ»', 'RABe 511 «KISS»', 'RABe 523 «FLIRT»', 'RBDe 560 «Domino»'] },
  { f: 'Da quante carrozze è composto un Giruno?', a: ['11', '4', '7', '16'] },
  { f: 'A Tirano (Italia) termina una celebre linea della Ferrovia retica. Quale?', a: ['Linea del Bernina', 'Linea dell’Albula', 'Linea del San Gottardo', 'Linea Furka-Oberalp'] },
  { f: 'Che cosa significa «6/6» in «Re 6/6»?', a: ['6 assi, di cui 6 motori', '6 carrozze, di cui 6 motorizzate', '6a locomotiva della 6a serie', '6000 kW di potenza'] },
  { f: 'Qual è la velocità massima dei treni sulla nuova linea Mattstetten–Rothrist?', a: ['200 km/h', '160 km/h', '250 km/h', '300 km/h'] }
]);

uebQuiz('schwierig', [
  { f: 'Quante Re 4/4 II (Re 420) hanno acquistato le FFS?', a: ['276', '119', '89', '41'], info: 'Numero secondo FFS Historic.' },
  { f: 'Chi ha costruito la parte meccanica della Re 420?', a: ['SLM Winterthur', 'Stadler Bussnang', 'Siemens', 'Bombardier'], info: 'La parte elettrica proveniva da BBC, MFO e SAAS.' },
  { f: 'Quante Re 6/6 (Re 620) sono state costruite?', a: ['89', '276', '119', '63'], info: '4 prototipi e 85 locomotive di serie.' },
  { f: 'Che cosa distingueva i primi due prototipi di Re 6/6 da tutti gli altri?', a: ['Avevano una cassa in due parti', 'Non avevano il pantografo', 'Andavano a diesel', 'Erano verniciati di blu'] },
  { f: 'Qual è il rodiggio della Re 620?', a: ['Bo′Bo′Bo′', 'Bo′Bo′', 'Co′Co′', '1′Do1′'] },
  { f: 'Qual è la potenza continuativa della Re 460?', a: ['6100 kW', '1700 kW', '4650 kW', '7500 kW'] },
  { f: 'Quanto è lungo un Giruno agganci compresi?', a: ['202 m', '75 m', '101 m', '400 m'] },
  { f: 'Quanti posti a sedere ha il FV-Dosto nella versione IR200?', a: ['682', '606', '330', '405'] },
  { f: 'Quali motori azionano il FV-Dosto?', a: ['Motori sincroni a magneti permanenti', 'Motori diesel', 'Motori in serie a corrente continua', 'Motori lineari'] },
  { f: 'Come si chiama la variante della Lok 2000 in Finlandia?', a: ['Sr2', 'El 18', 'Re 465', 'Vectron'], info: 'La El 18 è la variante per la Norvegia.' },
  { f: 'Chi ha progettato l’orologio di stazione FFS?', a: ['Hans Hilfiker', 'Le Corbusier', 'Pininfarina', 'Adrian Frutiger'] },
  { f: 'Quante Re 420 sono state modernizzate come «LION» per la S-Bahn di Zurigo tra il 2011 e il 2016?', a: ['30', '6', '119', '85'] },
  { f: 'Su quale linea circola il Domino di RegionAlps?', a: ['St-Gingolph–Briga', 'Friburgo–Yverdon', 'Coira–St. Moritz', 'Basilea–Olten'] },
  { f: 'Quanti FLIRT Evo acquistano le FFS?', a: ['198', '41', '86', '62'] },
  { f: 'Quale tipo di locomotiva si nasconde dietro la Re 482?', a: ['Bombardier TRAXX F140 AC', 'Siemens Vectron', 'Alstom Prima H4', 'Vossloh G 1700'] },
  { f: 'Qual è lo sforzo di trazione all’avviamento della Re 620?', a: ['398 kN', '182 kN', '255 kN', '300 kN'] },
  { f: 'Quali numeri di veicolo portano gli ICN?', a: ['500 000–500 043', '11601–11689', '460 000–460 118', '501 001–501 041'] },
  { f: 'In quale di questi paesi molti treni circolano a 3 kV corrente continua?', a: ['Italia', 'Germania', 'Austria', 'Svizzera'], info: 'Per questo le locomotive per l’Italia, come la Re 484, hanno bisogno di più sistemi di corrente.' },
  { f: 'In che anno è stata inaugurata la galleria di base del San Gottardo?', a: ['2016', '2007', '1882', '2020'], info: 'Nel 2007 è entrata in servizio la galleria di base del Lötschberg, nel 1882 la vecchia galleria del San Gottardo.' },
  { f: 'In che anno è entrata in servizio la galleria di base del Lötschberg?', a: ['2007', '2016', '1913', '1999'] },
  { f: 'Da quale anno esistono le FFS?', a: ['1902', '1847', '1950', '1882'] },
  { f: 'Quando è entrata in vigore la prima tappa di «Ferrovia 2000» con il grande cambio d’orario?', a: ['Dicembre 2004', 'Dicembre 1992', 'Giugno 2016', 'Dicembre 2010'] },
  { f: 'Come si chiamava la prima ferrovia interamente svizzera, nel 1847?', a: ['Spanisch-Brötli-Bahn (Zurigo–Baden)', 'Ferrovia del Gottardo', 'Ferrovia del Rigi', 'Centralbahn'] },
  { f: 'Quale scartamento ha la variante finlandese della Lok 2000?', a: ['1524 mm', '1435 mm', '1000 mm', '1668 mm'] },
  { f: 'Quante Re 620 hanno ricevuto l’ETCS livello 2 dal 2007?', a: ['63', '89', '30', '119'] },
  { f: 'Dal 2008 le linee RhB dell’Albula e del Bernina fanno parte …', a: ['del patrimonio mondiale dell’UNESCO', 'delle nuove linee di Ferrovia 2000', 'di FFS Cargo', 'della rete della BLS'] }
]);

/* ---- 31-bls-tpf.js ---- */
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
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha fornito alla BLS 67 MIKA: 39 treni RegioExpress (101–139, in servizio 2021–2026) e 28 treni S-Bahn (201–228, 2022–2025). I treni 125–137 appartengono a BLS Fernverkehr SA, tutti gli altri a BLS SA.', 'I MIKA hanno sostituito treni più vecchi come le composizioni navetta EW III e gli NPZ.'] },
      { titel: 'Impiego e tecnica', p: ['I MIKA circolano sulle S-Bahn di Berna e Lucerna (tra l’altro S2, S4, S6 e S7), come RegioExpress Berna–Spiez–Zweisimmen e sulla linea di valico del Lötschberg fino a Briga e Domodossola, nonché come InterRegio 66 Berna–Neuchâtel–La Chaux-de-Fonds.', 'Il treno a sei casse è lungo 104,9 m, eroga 3500 kW e viaggia fino a 160 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Climatizzazione', 'Prese a ogni posto e nel compartimento multifunzionale', 'Finestrini con migliore ricezione mobile', 'Zona bistrò self-service con distributori di snack e caffè (RE)', '12 posti per biciclette (RE) o 6 (S-Bahn), con prese per e-bike', 'Accesso a pianale ribassato con colmatore di gap a tutte le porte', '3 posti per sedie a rotelle: 1 in 1a classe, 2 in 2a classe con accesso al WC', '2 WC, di cui 1 accessibile, con fasciatoio', 'Videosorveglianza e pulsanti SOS'],
        p: ['Grazie agli accessi ribassati con colmatore di gap, si sale senza gradini a tutte le porte.'] },
      { titel: 'Due versioni', tabelle: { kopf: ['Caratteristica', 'RegioExpress', 'S-Bahn'], zeilen: [
      ['Numeri', '101–139', '201–228'], ['Quantità', '39', '28'], ['Messa in servizio', '2021–2026', '2022–2025'],
      ['Posti 1a / 2a classe', '46 / 198', '35 / 188'], ['Posti in piedi', '149', '241'], ['Posti bici', '12', '6']] } }
    ],
  bilder: ['RABe 528 102 come RegioExpress a Berna', 'RABe 528 201 in versione S-Bahn', 'RABe 528 119 a Domodossola', 'RABe 528 104 nell’Entlebuch']
});
uebZug('bls-rabe-515', {
  typ: 'Elettrotreno a due piani Stadler (KISS)',
  text: ['Il MUTZ è il treno a due piani della BLS e fa parte della famiglia KISS di Stadler. Circola soprattutto sulle linee molto frequentate della S-Bahn di Berna.', 'Esiste una versione a quattro casse e una più lunga a sei casse.'],
  kennzahlen: [['39', 'treni (34 a quattro casse, 5 a sei casse)'], ['160 km/h', 'velocità massima'], ['335 / 546', 'posti a sedere 4 / 6 casse'], ['2012', 'prima messa in servizio']],
  daten: { 'Bauart': 'elettrotreno a due piani', 'Fahrzeugnummern': '001–034 (4 casse), 035–039 (6 casse)', 'Länge': '102,6 m (4 casse), 151,88 m (6 casse)', 'Gewicht': '216 t (4 casse), 301 t (6 casse)', 'Leistung': '4000 kW (6 casse: 6000 kW di punta)', 'Sitzplätze': '335 (4 casse), 546 (6 casse)', 'Anzahl': '39 treni' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Il MUTZ fa parte della famiglia KISS di Stadler. La BLS possiede 34 treni a quattro casse (001–034, in servizio 2012–2017, 032 e 033 nel 2019/2020) e 5 a sei casse (035–039, 2020).', 'I treni a sei casse e i 032–034 appartengono a BLS Fernverkehr SA, gli altri a BLS SA.'] },
      { titel: 'Impiego e tecnica', p: ['I MUTZ circolano sulla S-Bahn di Berna (S1 Friburgo–Berna–Thun, S11 Thun–Berna, S3/S31 Bienne–Münchenbuchsee–Berna–Belp) e come InterRegio 17 Berna–Burgdorf–Olten e InterRegio 65 Berna–Bienne.', 'Entrambe le versioni erogano 4000 kW e viaggiano fino a 160 km/h. Le porte larghe accelerano la salita e la discesa.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Climatizzazione, riscaldamento a pavimento e a parete', 'Informazione ai viaggiatori ottica e acustica', 'Prese in 1a classe (sei casse: anche in 2a classe)', '6 posti per biciclette (quattro casse) o 16 (sei casse)', 'Accessi a pianale ribassato con pedane scorrevoli a tutte le porte', '3 posti per sedie a rotelle (quattro casse) o 4 (sei casse), in entrambe le classi', '2 WC, di cui 1 accessibile e 1 con fasciatoio', 'Videosorveglianza'],
        p: ['Tutte le porte hanno accessi ribassati con pedane scorrevoli; posti per sedie a rotelle ci sono in entrambe le classi.'] },
      { titel: 'Quattro e sei casse', tabelle: { kopf: ['Caratteristica', 'quattro casse', 'sei casse'], zeilen: [
      ['Numeri', '001–034', '035–039'], ['Messa in servizio', '2012–2017, 032–033 nel 2019/2020', '2020'], ['Lunghezza', '102,6 m', '151,88 m'],
      ['Posti 1a / 2a classe', '61 / 274', '122 / 424'], ['Potenza', '4000 kW', '6000 kW di punta, 4000 kW continua']] } }
    ],
  bilder: ['RABe 515 003 a quattro casse a Berna', 'RABe 515 039 a sei casse', 'RABe 515 027 presso Allmendingen']
});
uebZug('bls-rabe-535', {
  typ: 'Elettrotreno a pianale ribassato a quattro casse',
  text: ['Il Lötschberger è un treno a pianale ribassato a quattro casse della BLS. Prende il nome dalla linea di valico del Lötschberg e dall’Oberland bernese, dove circola.', 'Fino a quattro treni possono viaggiare insieme.'],
  kennzahlen: [['25', 'treni'], ['160 km/h', 'velocità massima'], ['142', 'posti a sedere'], ['2008', 'prima messa in servizio']],
  daten: { 'Bauart': 'elettrotreno a pianale ribassato, 4 casse', 'Anzahl': '25 treni' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Bombardier ha fornito alla BLS 25 Lötschberger a quattro casse: 101–113 nel 2008–2010 e 114–125 nel 2012.', 'Da gennaio 2024 la BLS modernizza la flotta nell’officina di Bönigen, fino a metà 2027. Tra l’altro prese doppie sostituiscono quelle singole, luci LED i tubi al neon e sensori di CO₂ regolano l’aria fresca secondo il bisogno.'] },
      { titel: 'Impiego e tecnica', p: ['Il Lötschberger circola nell’Oberland bernese (RE Zweisimmen–Spiez, Spiez–Interlaken Ost e Spiez–Frutigen) e sulla S-Bahn di Berna tra Thun, Belp, Berna, Burgdorf, Konolfingen e Soletta.', 'Il treno è lungo 62,7 m, pesa 105 t e viaggia fino a 160 km/h. Fino a quattro treni possono essere accoppiati.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Climatizzazione e riscaldamento', 'Prese in 1a e 2a classe', 'Informazione ai viaggiatori ottica e acustica', '6 posti per biciclette (101–113) o 12 (114–125)', 'Accesso a pianale ribassato a tutte le porte, un accesso per lato con pedana scorrevole', '2 posti per sedie a rotelle in 2a classe', '1 WC accessibile', 'Videosorveglianza'],
        p: ['Tutte le porte sono a pianale ribassato. Secondo la BLS non c’è un fasciatoio.'] }
    ],
  bilder: ['RABe 535 112 «Lötschberger»', 'Lötschberger nella stazione di Kandersteg', 'RABe 535 122 a Iselle di Trasquera']
});
uebZug('bls-rabe-525', {
  typ: 'Elettrotreno regionale a pianale ribassato',
  text: ['NINA sta per Niederflur-Nahverkehrszug, treno regionale a pianale ribassato. La BLS lo impiega in versioni a tre e quattro casse nel traffico regionale e S-Bahn.', 'Fino a quattro treni possono essere accoppiati.'],
  kennzahlen: [['36', 'treni (23 a tre casse, 13 a quattro casse)'], ['140 km/h', 'velocità massima'], ['1000 kW', 'potenza'], ['1998', 'prima messa in servizio']],
  daten: { 'Bauart': 'elettrotreno a pianale ribassato, 3 o 4 casse', 'Länge': '47,7 m (3 casse), 61,9 m (4 casse)', 'Gewicht': '79 t (3 casse), 96 t (4 casse)', 'Sitzplätze': '134 (3 casse), 179 (4 casse)', 'Anzahl': '36 treni' },
  specNote: 'Messi in servizio dal 1998 al 2005. I numeri 015–027 hanno quattro casse, 001–014, 028–030 e 032–037 tre casse.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['I NINA sono di Vevey Technologies e Bombardier e sono entrati in servizio dal 1998 al 2005. La BLS possiede 36 treni: 23 a tre casse (001–014, 028–030, 032–037) e 13 a quattro casse (015–027).', 'Da giugno 2015 tutti i 36 treni hanno ricevuto un refit nell’officina di Bönigen per circa 31 milioni di franchi; così dovrebbero circolare circa sei anni in più. Nel 2016 una parte ha ricevuto vetri permeabili al segnale mobile e una nuova informazione ai viaggiatori.'] },
      { titel: 'Impiego e tecnica', p: ['I NINA circolano sulle S-Bahn di Berna e Lucerna, tra l’altro S5 Berna–Kerzers–Neuchâtel, S22 Berna–Konolfingen–Langnau, S35 Kerzers–Lyss, S36 Lyss–Büren an der Aare, S46 Soletta–Burgdorf–Ostermundigen e S77 Lucerna–Wolhusen–Willisau, oltre che come RE Domodossola–Briga–Visp.', 'Un treno eroga 1000 kW e viaggia fino a 140 km/h. Fino a quattro treni possono essere accoppiati.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Climatizzazione e riscaldamento', 'Prese in 1a classe', 'Informazione ai viaggiatori ottica e acustica', '3 posti per biciclette (tre casse) o 6 (quattro casse)', 'Accesso a pianale ribassato a tutte le porte, un accesso per lato con pedana scorrevole', '1 posto per sedia a rotelle in 2a classe', '1 WC accessibile', 'Videosorveglianza'],
        p: ['Tutte le porte sono a pianale ribassato. Secondo la BLS non c’è un fasciatoio.'] }
    ],
  bilder: ['NINA RABe 525 024 a Thun', 'RABe 525 015 a quattro casse a Berna']
});
uebZug('bls-re-465', {
  typ: 'Locomotiva elettrica universale della famiglia Lok 2000',
  text: ['La Re 465 è la sorella BLS della Re 460 delle FFS. Traina treni viaggiatori, treni navetta per auto e treni merci.', 'Tra il 2019 e il 2022 tutte le 18 locomotive sono state ammodernate e verniciate di verde. Da fine 2023 sostituiscono le Re 425 marroni sui treni navetta per auto.'],
  kennzahlen: [['18', 'locomotive'], ['6400 kW', 'potenza'], ['160 km/h', 'velocità massima omologata'], ['1994', 'prima messa in servizio']],
  daten: { 'Bauart': 'locomotiva elettrica Bo’Bo’', 'Höchstgeschwindigkeit': '160 km/h (omologata)' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['La Re 465 appartiene alla famiglia Lok 2000 di SLM e ABB. La BLS ordinò prima otto locomotive (001–008), poi altre dieci (009–018) per il corridoio di trasporto combinato; sono entrate in servizio dal 1994 al 1997.', 'Dal 2019 al 2022 tutte le 18 locomotive sono state modernizzate nell’officina di Bönigen per circa 20 milioni di franchi e verniciate di verde. Così possono circolare fino al 2040 circa.'] }, { titel: 'Impiego e tecnica', p: ['Le Re 465 trainano o spingono il GoldenPass Express tra Interlaken Ost e Zweisimmen. Dal 19 dicembre 2023 svolgono il trasporto auto al Lötschberg, dal 2026 anche al Sempione, dove sostituiscono le Re 425 marroni.', 'Nel traffico merci circolano spesso in comando multiplo con TRAXX e Vectron. La locomotiva eroga 6400 kW ed è omologata per 160 km/h.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Comando multiplo, nel traffico merci spesso con TRAXX e Vectron', 'Traina o spinge i treni, per esempio il GoldenPass Express'], p: ['Come locomotiva la Re 465 non ha compartimento passeggeri. Sul GoldenPass Express e sul trasporto auto l’accessibilità dipende dalle carrozze.'] }],
  bilder: ['Re 465 014 a Zweisimmen', 'Re 465 001 e 007 in doppia trazione']
});
uebZug('bls-re-475', {
  typ: 'Locomotiva elettrica policorrente Siemens per BLS Cargo',
  text: ['La Re 475 è la locomotiva Vectron di BLS Cargo. È omologata in diversi paesi e traina treni merci attraverso le Alpi fino in Germania, Italia e Paesi Bassi.', 'BLS Cargo ha ampliato la flotta in più serie.'],
  kennzahlen: [['50', 'locomotive in tre serie'], ['2016', 'prima messa in servizio'], ['6', 'paesi (serie recenti)'], ['Siemens', 'costruttore']],
  daten: { 'Bauart': 'locomotiva elettrica policorrente Bo’Bo’', 'Zulassung': 'CH, D, A, I, NL; dal n. 416 anche B', 'Anzahl': '50 (in tre serie)' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['La Re 475 è la locomotiva Vectron di Siemens Mobility per BLS Cargo. La flotta cresce in tre serie fino a 50 locomotive: 401–415 (2016–2018), 416–440 (2020 e 2024–2025) e 441–450 (dal 2026).'] }, { titel: 'Impiego e tecnica', p: ['BLS Cargo impiega la Re 475 soprattutto sugli assi Lötschberg-Sempione e Gottardo e circola così fino ai Paesi Bassi, in Belgio, Germania, Austria e Italia.', 'La locomotiva policorrente è omologata in fino a sei paesi; dal n. 416 anche in Belgio.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Locomotiva multisistema per corrente alternata e continua', 'Omologazione per Svizzera, Germania, Austria, Italia e Paesi Bassi, dal numero 416 anche per il Belgio'], p: ['La Re 475 è una locomotiva merci e non ha compartimento passeggeri.'] }, { titel: 'Tre serie', tabelle: { kopf: ['Numeri', 'Quantità', 'Consegna', 'Omologazione'], zeilen: [
    ['401–415', '15', '2016–2018', 'CH, D, A, I, NL'], ['416–440', '25', '2020, 2024–2025', 'CH, D, A, I, NL, B'], ['441–450', '10', 'dal 2026', 'CH, D, A, I, NL, B']] } }],
  bilder: ['Re 475 401 di BLS Cargo']
});
uebZug('bls-re-485', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Nel 2002 BLS Cargo ha ordinato a Bombardier 20 TRAXX del tipo F140 AC; sono state consegnate entro metà 2003 e portano i numeri 485 001–020.', 'La 485 004 è stata distrutta nel 2020 in un incidente ad Auggen (Germania). Il numero di Re 485 oggi in servizio non è confermato pubblicamente.'] }, { titel: 'Impiego e tecnica', p: ['Le Re 485 trainano treni merci in Svizzera e verso la Germania, sugli assi Lötschberg-Sempione e Gottardo.', 'Tecnicamente corrispondono alla serie tedesca 185 e alle Re 482 di FFS Cargo, con un pacchetto di equipaggiamento svizzero. Viaggiano fino a 140 km/h.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Omologazione per Svizzera e Germania', 'Equipaggiamento svizzero sulla base della serie tedesca 185'], p: ['La Re 485 è una locomotiva merci e non ha compartimento passeggeri.'] }],
  typ: 'Locomotiva elettrica per treni merci Bombardier',
  text: ['Le Re 485 sono locomotive TRAXX di BLS Cargo per il traffico merci in Svizzera e verso la Germania.', 'Sono state ordinate nel 2002 e consegnate entro metà 2003.'],
  kennzahlen: [['20', 'locomotive acquistate'], ['140 km/h', 'velocità massima'], ['CH, D', 'omologazione'], ['2002', 'prima messa in servizio']],
  daten: { 'Bauart': 'locomotiva elettrica Bo’Bo’', 'Zulassung': 'Svizzera, Germania', 'Anzahl': '20 acquistate; 485 004 ritirata dopo un incidente nel 2020' },
  specNote: 'I 140 km/h derivano dal tipo TRAXX F140.',
  bilder: ['Re 485 005 di BLS Cargo', 'Re 485 016 con un treno merci', 'Re 485 008 presso Allmendingen']
});
uebZug('bls-re-486', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Bombardier ha fornito a BLS Cargo dall’autunno 2008 dieci TRAXX policorrente del tipo F140 MS con i numeri 486 501–510; le ultime sono seguite nel 2009.'] }, { titel: 'Impiego e tecnica', p: ['Le Re 486 possono circolare in Svizzera, Germania, Italia e Austria. Sono quindi adatte al transito attraverso le Alpi, per esempio con l’autostrada viaggiante.', 'Come locomotiva policorrente circola con corrente alternata e continua; la velocità massima è di 140 km/h.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Locomotiva multisistema per corrente alternata e continua', 'Omologazione per Svizzera, Germania, Italia e Austria'], p: ['La Re 486 è una locomotiva merci e non ha compartimento passeggeri.'] }],
  typ: 'Locomotiva elettrica policorrente Bombardier',
  text: ['Le Re 486 sono TRAXX policorrente di BLS Cargo. Possono circolare in Svizzera, Germania, Italia e Austria.', 'Sono quindi adatte al transito attraverso le Alpi, per esempio con l’autostrada viaggiante.'],
  kennzahlen: [['10', 'locomotive'], ['140 km/h', 'velocità massima'], ['4', 'paesi'], ['2008', 'prima messa in servizio']],
  daten: { 'Bauart': 'locomotiva elettrica policorrente Bo’Bo’', 'Zulassung': 'Svizzera, Germania, Italia, Austria' },
  specNote: 'I 140 km/h derivano dal tipo TRAXX F140.',
  bilder: ['Re 486 503 con l’autostrada viaggiante a Friburgo in Brisgovia', 'Re 486 504 di BLS Cargo']
});
uebZug('bls-re-425', {
  typ: 'Locomotiva elettrica della BLS, nota come «le marroni»',
  text: ['Per decenni le Re 4/4 marroni della BLS, oggi Re 425, hanno trainato treni diretti tra Berna e Briga e treni merci da Basilea a Domodossola. Anche il trasporto auto del Lötschberg è stato a lungo compito loro.', 'Presso BLS Cargo l’impiego nel traffico merci è terminato nel 2021. Da fine 2023 le Re 465 hanno ripreso gradualmente il trasporto auto; l’ultima corsa regolare di una Re 425 si è svolta il 27 luglio 2026 tra Kandersteg e Goppenstein. La Re 425 165 «Moutier» è conservata dalla Fondazione BLS.'],
  kennzahlen: [['35', 'costruite 1964–1983'], ['4980 kW', 'potenza'], ['140 km/h', 'velocità massima'], ['1964', 'prima messa in servizio']],
  daten: { 'Bauart': 'locomotiva elettrica Bo’Bo’', 'Betreiber': 'BLS e BLS Cargo (storico); alcune locomotive oggi in servizio museale o speciale', 'Länge': '15,1 m (dal n. 174: 15,47 m)', 'Anzahl': '35 costruite' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Sono state costruite 35 locomotive; la prima è entrata in servizio nel 1964. Oggi portano i numeri Re 425 161–195. Dal numero 174 sono un po’ più lunghe (15,47 m) di quelle più vecchie (15,1 m).'] }, { titel: 'Impiego e tecnica', p: ['Le locomotive trainavano i treni rapidi Berna–Briga, i treni merci Basilea–Domodossola e il trasporto auto del Lötschberg. Presso BLS Cargo il traffico merci è terminato nel 2021. Da fine 2023 le Re 465 hanno ripreso il trasporto auto; l’ultima corsa regolare è stata il 27 luglio 2026 tra Kandersteg e Goppenstein.', 'La locomotiva ha 4980 kW e viaggia fino a 140 km/h.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Nessun compartimento passeggeri'], p: ['Con i treni viaggiatori e il trasporto auto l’accessibilità dipendeva dalle carrozze.'] }, { titel: 'La Re 4/4 165 «Moutier»', p: ['La 165 fu consegnata alla BLS come Ae 4/4 II 265 e porta lo stemma del comune di Moutier. Dal 2017 fa parte dei veicoli storici della Fondazione BLS e si trova, fuori servizio, nel deposito di Burgdorf.'] }],
  bilder: ['Re 425 192 a Spiez']
});
uebZug('bls-am-843', {
  typ: 'Locomotiva diesel-idraulica di BLS Infrastruttura',
  text: ['Anche BLS Infrastruttura impiega locomotive diesel della serie Am 843, per esempio la Am 843 503. Trainano treni cantiere e manovrano dove non c’è linea di contatto.', 'Tecnicamente la locomotiva corrisponde alla Am 843 delle FFS.'],
  kennzahlen: [['843 503', 'esempio fotografato'], ['diesel', 'trazione'], ['treni cantiere', 'impiego'], ['BLS', 'infrastruttura']],
  daten: { 'Bauart': 'locomotiva diesel', 'Antrieb': 'diesel-idraulica', 'Betreiber': 'BLS Infrastruttura', 'Einsatz': 'treni cantiere, manovra, intervento' },
  specNote: 'La BLS indica lunghezza, peso e anno per la Am 843 del suo servizio d’intervento. Il numero totale di Am 843 della BLS non è documentato pubblicamente.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['L’Am 843 è una locomotiva Vossloh, tecnicamente uguale all’Am 843 delle FFS. Per la locomotiva del servizio d’intervento la BLS indica l’anno 2008. Quante Am 843 possieda la BLS non è documentato pubblicamente.'] }, { titel: 'Impiego e tecnica', p: ['La BLS elenca una Am 843 tra i veicoli del suo servizio d’intervento, insieme al treno di spegnimento e soccorso LRZ 04 e al carro di soccorso. Il servizio d’intervento è il corpo pompieri aziendale della BLS.'] }, { titel: 'Dotazione e accessibilità', liste: ['Trazione diesel-idraulica, indipendente dalla linea di contatto', '15,2 m di lunghezza, 80 t', 'Nessun compartimento passeggeri'] }],
  bilder: ['Am 843 503 di BLS Infrastruttura']
});
uebZug('bls-rangier', {
  name: 'Veicoli di manovra',
  typ: 'Locomotive e trattori di manovra della BLS',
  text: ['Per le manovre nelle stazioni e nelle officine la BLS impiega diversi piccoli veicoli. Alcuni provengono da ferrovie oggi confluite nella BLS, come la ferrovia Emmental–Burgdorf–Thun.', 'Questa pagina mostra i tipi documentati da foto con la scritta BLS.'],
  kennzahlen: [['5', 'tipi documentati da foto'], ['Ee 936', 'locomotiva di manovra più grande'], ['Kandersteg', 'tra l’altro fotografati'], ['BLS', 'gestore']],
  daten: { 'Bauart': 'locomotive e trattori di manovra', 'Einsatz': 'manovra nelle stazioni e officine' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['La BLS impiega locomotive e trattori da manovra dei tipi Ee 936, Eea 935, Tem 225, Tm 235 e Tea 245. Alcuni provengono da ferrovie che oggi fanno parte della BLS, come la Emmental–Burgdorf–Thun. Quanti veicoli di ogni tipo possieda oggi la BLS non è documentato pubblicamente.'] }, { titel: 'Impiego e tecnica', p: ['I veicoli manovrano carri e treni in stazioni e officine. A seconda del tipo viaggiano elettricamente dalla linea di contatto, con motore diesel o con batteria.'] }, { titel: 'Dotazione e accessibilità', liste: ['Piccole locomotive e trattori per brevi manovre', 'Nessun compartimento passeggeri'] }, { titel: 'Documentati da foto', tabelle: { kopf: ['Tipo', 'Esempio', 'Trazione', 'Foto'], zeilen: [
    ['Ee 936', '936 132', 'elettrica', 'Kandersteg 2016'], ['Eea 935', '935 402', 'elettrica e a batteria', 'Kandersteg 2016'],
    ['Tem 225', '225 041', 'elettrica e diesel', 'Burgdorf 2018'], ['Tm 235', '235 091', 'diesel', 'Spiez 2012'], ['Tea 245', '245 021', 'elettrica e a batteria', 'senza luogo']] } }],
  bilder: ['Ee 936 132 a Kandersteg (2016)', 'Eea 935 402 a Kandersteg (2016)', 'Tem 225 041 a Burgdorf (2018)', 'Tm 235 091 a Spiez (2012)', 'Tea 245 021']
});
uebZug('bls-lrz', {
  typ: 'Treni di spegnimento e soccorso della BLS',
  text: ['La BLS ha anche propri treni di spegnimento e soccorso. Sono stazionati tra l’altro al centro d’intervento di Frutigen, al portale nord della galleria di base del Lötschberg.', 'Questi treni portano agenti estinguenti, soccorritori e protezione delle vie respiratorie nelle lunghe gallerie.'],
  kennzahlen: [['Frutigen', 'centro d’intervento'], ['Lötschberg', 'galleria di base'], ['gallerie', 'impiego principale'], ['BLS', 'gestore']],
  daten: { 'Bauart': 'treno di spegnimento e soccorso', 'Standort': 'tra l’altro centro d’intervento di Frutigen', 'Einsatz': 'soccorso in galleria, lotta antincendio' },
  specNote: 'I dati valgono per l’LRZ 04, che la BLS indica per il suo servizio d’intervento. Il numero totale di treni non è documentato pubblicamente.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Per il suo servizio d’intervento la BLS cita il LRZ 04 del 2004. Quanti treni ci siano in tutto non è documentato pubblicamente.'] }, { titel: 'Impiego e tecnica', p: ['I treni sono stazionati tra l’altro presso il centro d’intervento di Frutigen, al portale nord della galleria di base del Lötschberg. Portano agenti estinguenti, soccorritori e protezione respiratoria nelle lunghe gallerie. Il LRZ 04 è lungo 80 m e pesa 285 t.'] }, { titel: 'Dotazione e accessibilità', liste: ['Veicolo attrezzi', 'Veicolo di spegnimento con cisterna', 'Due veicoli di soccorso'] }],
  bilder: ['Treno di spegnimento e soccorso davanti al centro d’intervento di Frutigen']
});
uebZug('bls-ae-4-4', {
  typ: 'Locomotiva a quattro assi ad alta potenza della BLS (storica)',
  text: ['Le Ae 4/4 della BLS furono le prime locomotive moderne a carrelli con quattro assi e 1000 CV per asse. Sono considerate le antenate di tutte le moderne locomotive a quattro assi ad alta potenza.', 'La Ae 415 251 è in esercizio e può essere noleggiata presso la BLS.'],
  kennzahlen: [['1944', 'prima consegna'], ['2945 kW', 'potenza'], ['125 km/h', 'velocità massima'], ['80 t', 'peso']],
  daten: { 'Bauart': 'locomotiva elettrica Bo’Bo’', 'Hersteller': 'SLM e BBC', 'Betreiber': 'BLS, oggi BLS Historic', 'Erhalten': 'Ae 415 251, in esercizio' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['SLM e BBC hanno costruito le Ae 4/4 della BLS; la prima è entrata in servizio nel 1944. In seguito si chiamarono Ae 415. L’Ae 415 251 è conservata funzionante e può essere noleggiata presso la BLS.'] }, { titel: 'Impiego e tecnica', p: ['Le Ae 4/4 furono le prime moderne locomotive a carrelli a quattro assi con 1000 CV per asse e sono considerate le precorritrici di tutte le moderne locomotive ad alte prestazioni a quattro assi. Hanno 2945 kW e viaggiano fino a 125 km/h.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Nessun compartimento passeggeri'] }, { titel: 'Ammodernata', liste: ['Nuovi graduatori e interruttori ad aria compressa', 'Freno elettrico due volte più potente; per questo è stato rimosso un pantografo', 'Molle in gomma al posto delle molle a balestra', 'Un cavo che carica di più gli assi anteriori e migliora l’aderenza'] }],
  bilder: ['Ae 4/4 251 a Interlaken West (2004)']
});
uebZug('bls-ae-6-8', {
  typ: 'Pesante locomotiva di montagna del Lötschberg (storica)',
  text: ['Le Ae 6/8 del Lötschberg furono costruite dal 1926 al 1943 e all’epoca erano le locomotive più potenti del mondo.', 'La Ae 6/8 205 fu esposta all’Esposizione nazionale del 1939 a Zurigo e appartiene oggi alla Fondazione BLS.'],
  kennzahlen: [['8', 'costruite 1926–1943'], ['4415 kW', 'potenza'], ['100 km/h', 'velocità massima'], ['120 t', 'peso']],
  daten: { 'Bauart': 'locomotiva elettrica (1’Co)(Co1’)', 'Hersteller': 'parte elettrica SAAS; parte meccanica Breda (201–204), SLM (205–208)', 'Betreiber': 'BLS, oggi Fondazione BLS', 'Erhalten': 'Ae 6/8 205' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['La SAAS fornì l’equipaggiamento elettrico, Breda (201–204) e SLM (205–208) la parte meccanica. Le otto locomotive furono costruite dal 1926 al 1943. L’Ae 6/8 205 fu esposta all’Esposizione nazionale del 1939 a Zurigo e oggi appartiene alla Fondazione BLS.'] }, { titel: 'Impiego e tecnica', p: ['Le Ae 6/8 trainavano treni pesanti sulla ferrovia del Lötschberg e alla loro costruzione erano la locomotiva più potente del mondo. Hanno 4415 kW e viaggiano fino a 100 km/h.'] }, { titel: 'Dotazione e accessibilità', liste: ['Sei assi motori, rodiggio (1’Co)(Co1’)', 'Nessun compartimento passeggeri'] }, { titel: 'Due serie', p: ['I numeri 201–204 furono costruiti dal 1926 al 1931 ancora come Be 6/8, i 205–208 dal 1939 al 1943 direttamente come Ae 6/8 per 100 km/h. Nel 1939 anche le prime quattro ricevettero nuove trasmissioni per i treni diretti in pianura.'] }],
  bilder: ['Ae 6/8 205 presso Ausserberg, 100 anni del Lötschberg']
});
uebZug('bls-ae-8-8', {
  typ: 'Locomotiva doppia per i pesanti treni del Lötschberg (storica)',
  text: ['La Ae 8/8 è composta in pratica da due Ae 4/4 accoppiate in modo permanente. La BLS la acquistò dal 1956, perché sempre più treni pesanti avevano bisogno di una locomotiva di rinforzo sulla linea del Lötschberg.', 'Il suo soprannome è «Muni», il toro.'],
  kennzahlen: [['6475 kW', 'potenza'], ['160 t', 'peso'], ['125 km/h', 'velocità massima'], ['1959', 'prima messa in servizio']],
  daten: { 'Bauart': 'locomotiva doppia Bo’Bo’+Bo’Bo’', 'Betreiber': 'BLS, oggi Fondazione BLS', 'Erhalten': 'Ae 8/8 273 e 275' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['La BLS acquistò le doppie locomotive dal 1956; entrarono in servizio tra il 1959 e il 1966. La 273 e la 275 sono conservate dalla Fondazione BLS.'] }, { titel: 'Impiego e tecnica', p: ['Poiché sulla linea del Lötschberg sempre più treni pesanti avevano bisogno di una locomotiva di rinforzo, l’Ae 8/8 è composta in pratica da due Ae 4/4 accoppiate in modo fisso. È lunga 30,2 m, pesa 160 t, ha 6475 kW e viaggia fino a 125 km/h.'] }, { titel: 'Dotazione e accessibilità', liste: ['Doppia locomotiva di due metà accoppiate in modo fisso (Bo’Bo’+Bo’Bo’)', 'Nessun compartimento passeggeri'] }, { titel: 'Oggi', p: ['Le Ae 8/8 entrarono in servizio tra il 1959 e il 1966. Uno degli ultimi compiti della 273 fu trainare i treni di smarino della galleria di base del Lötschberg.', 'La Fondazione BLS raccoglie fondi per rimettere in esercizio la 273. Il futuro della 275 è incerto a causa del suo stato.'] }],
  bilder: ['Ae 8/8 274']
});
uebZug('bls-be-5-7', {
  typ: 'Prima locomotiva elettrica del Lötschberg (storica)',
  text: ['Nel 1913 la Be 5/7 fu la prima locomotiva di serie per il Lötschberg elettrificato. Era concepita come locomotiva universale per treni diretti e merci.', 'Dopo l’arrivo delle Ae 4/4 trainò soprattutto treni merci.'],
  kennzahlen: [['13', 'costruite'], ['1913', 'prima messa in servizio'], ['1840 kW', 'potenza oraria'], ['75 km/h', 'velocità massima']],
  daten: { 'Bauart': 'locomotiva elettrica 1’E1’', 'Hersteller': 'SLM, MFO e BBC', 'Leistung': '1840 kW (potenza oraria)', 'Höchstgeschwindigkeit': '75 km/h, locomotive successive 80 km/h', 'Erhalten': 'una locomotiva al Museo svizzero dei trasporti' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['SLM, MFO e BBC hanno costruito le locomotive numerate 151–163; la prima è entrata in servizio nel 1913. Le locomotive successive viaggiavano a 80 invece di 75 km/h.'] }, { titel: 'Impiego e tecnica', p: ['La Be 5/7 fu la prima locomotiva di serie della ferrovia elettrica del Lötschberg, pensata come locomotiva universale per treni rapidi e merci. Dopo l’arrivo delle Ae 4/4 trainò soprattutto treni merci. Ha 1840 kW.'] }, { titel: 'Dotazione e accessibilità', liste: ['Cinque assi motori, rodiggio 1’E1’', 'Nessun compartimento passeggeri'] }, { titel: 'Al Museo dei trasporti', p: ['Dal 1959 la locomotiva 161 (originariamente 155) si trova al Museo svizzero dei trasporti di Lucerna. Lì porta il numero 151.'] }],
  bilder: ['Be 5/7 con il numero 151']
});
uebZug('bls-ce-6-6', {
  typ: 'Locomotiva elettrica sperimentale e merci del 1910 (storica)',
  text: ['La Ce 6/6 121 era una locomotiva elettrica unica, costruita nel 1910 come F 2×3/3, poi chiamata Fc 2×3/3 e infine Ce 6/6.', 'Circolò fino al 1968, soprattutto con treni merci su linee più pianeggianti come Thun–Interlaken.'],
  kennzahlen: [['1', 'esemplare'], ['1910', 'costruita'], ['1968', 'demolita'], ['1,7 mio di km', 'percorsi']],
  daten: { 'Bauart': 'locomotiva elettrica con due carrelli motori a tre assi', 'Hersteller': 'MFO e SLM', 'Leistung': '2 × 1000 CV (potenza oraria)', 'Höchstgeschwindigkeit': '70 km/h, poi 60 km/h', 'Verbleib': 'demolita nel 1968, un carrello al Museo dei trasporti' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['MFO e SLM costruirono nel 1910 l’unica locomotiva 121. Si chiamò prima F 2×3/3, poi Fc 2×3/3 e infine Ce 6/6.'] }, { titel: 'Impiego e tecnica', p: ['La locomotiva trainava soprattutto treni merci su linee più pianeggianti come Thun–Interlaken, dal 1928 sulla Berna–Neuchâtel. Due carrelli motori avevano 1000 CV ciascuno; la velocità massima fu poi ridotta da 70 a 60 km/h.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due carrelli motori a tre assi', 'Nessun compartimento passeggeri'] }, { titel: 'A lungo in servizio', p: ['Dal 1928 la locomotiva trainò treni merci per la ferrovia Berna–Neuchâtel. Fu demolita il 10 luglio 1968 dopo 57 anni. Un carrello è esposto al Museo dei trasporti di Lucerna.'] }],
  bilder: ['Fc 2×3/3 121, la futura Ce 6/6 121']
});
uebZug('bls-ce-4-6', {
  typ: 'Locomotiva elettrica leggera per linee secondarie (storica)',
  text: ['La Ce 4/6 deve il soprannome «Dekretsmühle» al governo bernese, che nel 1918 ordinò per decreto l’elettrificazione delle linee secondarie a causa della penuria di carbone dopo la Prima guerra mondiale.', 'La Ce 4/6 307 dell’ex ferrovia Erlenbach–Zweisimmen si trova oggi nel deposito di Burgdorf.'],
  kennzahlen: [['17', 'locomotive 301–317'], ['1920', 'anno di costruzione della 307'], ['993 kW', 'potenza'], ['65 km/h', 'velocità massima']],
  daten: { 'Bauart': 'locomotiva elettrica a bielle', 'Betreiber': 'gruppo BLS, oggi Fondazione BLS', 'Erhalten': 'Ce 4/6 307, non in esercizio' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Dal 1920 il gruppo BLS ricevette le locomotive 301–317. Le 308–317 furono trasformate in Ce 4/4 nel 1954–1956. La Ce 4/6 307 dell’ex ferrovia Erlenbach–Zweisimmen appartiene dal 2023 alla Fondazione BLS.'] }, { titel: 'Impiego e tecnica', p: ['Le locomotive circolavano soprattutto su linee secondarie elettrificate dopo il decreto del governo bernese del 1918. Hanno 993 kW e viaggiano fino a 65 km/h.'] }, { titel: 'Dotazione e accessibilità', liste: ['Trasmissione a bielle', 'Carico massimo per asse di 12 t per le linee secondarie', 'Nessun compartimento passeggeri'] }, { titel: 'Costruzione leggera', p: ['Poiché le locomotive dovevano circolare soprattutto su linee secondarie, il loro carico per asse non poteva superare 12 tonnellate. Le 308–317 furono trasformate in Ce 4/4 nel 1954–1956.', 'La 307 è un veicolo storico della BLS dal 1999 e appartiene alla Fondazione BLS dal 2023.'] }],
  bilder: ['Ce 4/6 307 «Dekretsmühle»']
});
uebZug('bls-ce-4-4', {
  typ: 'Locomotiva elettrica trasformata da una Ce 4/6 (storica)',
  text: ['Le Ce 4/4 nacquero nel 1954–1956 dalle Ce 4/6 308–317 eliminando gli avancorpi e gli assi portanti. Così aumentarono il peso aderente e lo sforzo di trazione, anche se la locomotiva divenne più leggera.', 'La Ce 4/4 312 è oggi un pezzo da museo nel deposito di Burgdorf.'],
  kennzahlen: [['1920', 'costruita'], ['1957', 'trasformazione della 312'], ['993 kW', 'potenza'], ['65 km/h', 'velocità massima']],
  daten: { 'Bauart': 'locomotiva elettrica', 'Betreiber': 'gruppo BLS, oggi Fondazione BLS', 'Fahrzeugnummern': '312 (già GBS)', 'Erhalten': 'Ce 4/4 312, non in esercizio' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Le Ce 4/4 nacquero nel 1954–1956 dalle Ce 4/6 308–317 costruite dal 1920. La 312, un tempo alla GBS, è veicolo storico dal 2013 con cassa riverniciata e dal 2023 appartiene alla Fondazione BLS. Può essere visitata durante visite guidate al deposito di Burgdorf.'] }, { titel: 'Impiego e tecnica', p: ['Con la trasformazione furono rimossi gli avancorpi e gli assi portanti. Così aumentarono peso aderente e sforzo di trazione, benché la locomotiva diventasse più leggera. Ha 993 kW e viaggia fino a 65 km/h.'] }, { titel: 'Dotazione e accessibilità', liste: ['Quattro assi motori', '12,34 m di lunghezza, 64 t', 'Nessun compartimento passeggeri'] }]
});
uebZug('bls-bcfe-4-6', {
  beiname: 'Freccia blu',
  typ: 'Automotrice doppia leggera del 1938 (storica)',
  text: ['La «Freccia blu» del 1938 è, insieme alla Freccia rossa delle FFS, uno dei classici delle ferrovie svizzere. I grandi finestrini offrono una vista quasi panoramica.', 'La BCFe 4/6 736 è in esercizio e può essere noleggiata per gite.'],
  kennzahlen: [['1938', 'costruita'], ['136', 'posti'], ['110 km/h', 'velocità massima'], ['41,5 m', 'lunghezza']],
  daten: { 'Bauart': 'automotrice doppia elettrica', 'Hersteller': 'Sécheron (parte elettrica), SIG (parte meccanica)', 'Betreiber': 'gruppo BLS, oggi BLS Historic', 'Fahrzeugnummern': '736 (già BCFZe 4/6 della BN)' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Nel 1935 la BLS introdusse automotrici leggere a cassa singola. Dopo il successo della prova ordinò tre automotrici doppie BCFZe 4/6, consegnate nell’estate 1938. La 731 fu esposta all’Esposizione nazionale del 1939.', 'Per decenni i tre treni assicurarono il traffico viaggiatori del gruppo BLS, fino alla vendita nel 1983. È conservata la 736 della ferrovia Berna–Neuchâtel.'] }, { titel: 'Impiego e tecnica', p: ['Per decenni le automotrici doppie hanno svolto il traffico viaggiatori del gruppo BLS. Un treno è lungo 41,5 m, ha 710 kW e viaggia fino a 110 km/h. La parte elettrica è di Sécheron, quella meccanica di SIG.'] }, { titel: 'Dotazione e accessibilità', liste: ['136 posti a sedere', 'Grandi finestrini con vista quasi panoramica', 'Funzionante, noleggiabile per gite'] }],
  bilder: ['BCFe 4/6 736 «Freccia blu»']
});
uebZug('bls-be-4-4-761', {
  typ: 'Automotrice ad alta potenza del 1953 (storica)',
  text: ['La «Wellensittich» (pappagallino) del 1953, oggi Be 545 761, è considerata l’antenata delle automotrici ad alta potenza. Con 2000 CV poteva persino trainare treni internazionali Berna–Parigi tra Berna e Neuchâtel.', 'Dal 2001 porta di nuovo la livrea originale verde chiaro e verde scuro e circola per corse speciali.'],
  kennzahlen: [['1953', 'costruita'], ['1470 kW', 'potenza'], ['125 km/h', 'velocità massima'], ['56', 'posti a sedere']],
  daten: { 'Bauart': 'automotrice elettrica', 'Frühere Bezeichnung': 'Ce 4/4, poi Be 4/4 761', 'Betreiber': 'BN, oggi BLS Historic', 'Fahrzeugnummern': '761–763 (conservata: 761)' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['La 761 e la 762 arrivarono nel 1953 alla Berna–Neuchâtel, la 763 nel 1956 alla GBS. La 761 si chiama oggi Be 545 761 e dal 2003 fa parte dei veicoli storici della BLS.'] }, { titel: 'Impiego e tecnica', p: ['Con 2000 CV (1470 kW) l’automotrice poteva perfino trainare treni internazionali Berna–Parigi tra Berna e Neuchâtel. Viaggia fino a 125 km/h.'] }, { titel: 'Dotazione e accessibilità', liste: ['56 posti a sedere', 'Interni completamente rinnovati nel 2010', 'Dal 2001 di nuovo nella livrea originale verde chiaro e verde scuro'] }],
  bilder: ['Be 4/4 761 «Wellensittich» a Frutigen']
});
uebZug('bls-ce-2-4', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Nel 1935 il gruppo BLS introdusse automotrici leggere a una cassa, tra cui le Ce 2/4 727 e 787. I dati conservati su queste automotrici sono scarsi; le fonti utilizzate non indicano i costruttori.'] }, { titel: 'Impiego e tecnica', p: ['Le automotrici erano una prova con veicoli elettrici leggeri. Poiché riuscì, nel 1938 seguirono le automotrici doppie «Freccia blu».'] }, { titel: 'Dotazione e accessibilità', p: ['Non sono pubblicate indicazioni affidabili sulla dotazione. La lettera C indica posti dell’allora 3a classe.'] }],
  typ: 'Automotrice leggera del 1935 (storica)',
  text: ['Nel 1935 il gruppo BLS introdusse automotrici leggere a cassa singola, tra cui le Ce 2/4 727 e 787. Dopo il successo della prova seguirono nel 1938 le automotrici doppie «Freccia blu».', 'I dati conservati su queste automotrici sono scarsi.'],
  kennzahlen: [['1935', 'costruite'], ['727, 787', 'numeri'], ['1', 'cassa'], ['BLS', 'gruppo']],
  daten: { 'Bauart': 'automotrice elettrica leggera', 'Betreiber': 'gruppo BLS' },
  bilder: ['Ce 2/4 787']
});
uebZug('bls-abde-4-8', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['SIG e SAAS, poi anche BBC, costruirono le automotrici doppie 741–755 per BLS, SEZ, GBS e BN. La prima circolò nel 1945. È conservata solo l’ex 742, presso il gruppo museo ferroviario Kerzers-Kallnach.'] }, { titel: 'Impiego e tecnica', p: ['I treni svolgevano il traffico regionale del gruppo BLS, per esempio nel Simmental, tra Spiez e Interlaken e nel Gürbetal, spesso come treno navetta con carrozza pilota. Le prime (741–743) avevano 706 kW, le successive 1177 kW; la velocità massima salì da 110 a 125 km/h.'] }, { titel: 'Dotazione e accessibilità', liste: ['Automotrice doppia di circa 47 m', 'Compartimento bagagli (lettera D)', 'Accessi rialzati con gradini'] }],
  typ: 'Automotrice doppia elettrica per il traffico regionale (storica)',
  text: ['Dal 1945 le automotrici doppie ABDe 4/8 circolarono nel traffico regionale del gruppo BLS, per esempio nel Simmental, tra Spiez e Interlaken e nella Gürbetal. Molte viaggiavano come treni navetta con carrozza pilota.', 'È conservato un solo treno: l’ex 742, oggi presso il gruppo del museo ferroviario Kerzers-Kallnach.'],
  kennzahlen: [['13', 'treni 1945–1964'], ['125 km/h', 'velocità massima'], ['1177 kW', 'potenza dei treni successivi'], ['2003', 'ultimi ritirati']],
  daten: { 'Bauart': 'automotrice doppia elettrica', 'Hersteller': 'SIG e SAAS, poi anche BBC', 'Länge': 'circa 46,8–47,8 m', 'Leistung': '706 kW (741–743), 1177 kW (successive)', 'Höchstgeschwindigkeit': '110 km/h, poi 125 km/h', 'Erhalten': 'ex 742 a Kerzers-Kallnach' },
  bilder: ['ABDe 4/8 741']
});
uebZug('bls-rbde-565', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['SIG, SWS, SWP, BBC e ABB costruirono 22 automotrici numerate 721–742; la prima entrò in servizio nel 1982.'] }, { titel: 'Impiego e tecnica', p: ['Le automotrici circolavano con carrozze intermedie e carrozze pilota nel traffico regionale e S-Bahn della BLS. Hanno 1650 kW di potenza continua e viaggiano fino a 125 km/h. Dal 2022 al 2025 furono sostituite dai MIKA.'] }, { titel: 'Dotazione e accessibilità', liste: ['Treno navetta con carrozze intermedie e carrozza pilota', 'Compartimento bagagli nell’automotrice (lettera D)', 'Accessi rialzati nell’automotrice'] }],
  typ: 'Treno navetta regionale delle ferrovie private (storico)',
  text: ['Le RBDe 565 erano i treni navetta regionali della BLS. Circolavano con carrozze intermedie e carrozze pilota nel traffico regionale e S-Bahn.', 'Dal 2022 al 2025 sono state sostituite dai nuovi MIKA.'],
  kennzahlen: [['22', 'automotrici'], ['125 km/h', 'velocità massima'], ['1650 kW', 'potenza continua'], ['1982', 'prima messa in servizio']],
  daten: { 'Bauart': 'automotrice elettrica per treni navetta', 'Hersteller': 'SIG, SWS, SWP, BBC e ABB', 'Leistung': '1650 kW (potenza continua)' },
  bilder: ['RBDe 565 726 a Laupen (2019)']
});
uebZug('bls-rbde-566', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Le 13 automotrici 230–242 furono costruite nel 1984–1985 per il gruppo EBT e arrivarono alla BLS con la fusione del 2006. La 566 241 è conservata con carrozze dall’associazione Pendelzug Mirage.'] }, { titel: 'Impiego e tecnica', p: ['I treni circolavano tra l’altro su Spiez–Frutigen, Briga–Goppenstein, nella S-Bahn di Berna e tra Thun e Soletta. L’ultima corsa regolare fu il 6 dicembre 2024.'] }, { titel: 'Dotazione e accessibilità', liste: ['Automotrice per treni navetta con carrozze intermedie e carrozza pilota', 'Compartimento bagagli (lettera D)', 'Accessi rialzati nell’automotrice'] }],
  typ: 'Treno navetta regionale dell’ex parco RM (storico)',
  text: ['Le RBDe 566 II furono costruite nel 1984–1985 per il gruppo EBT e arrivarono alla BLS con la fusione del 2006. Circolavano tra Spiez e Frutigen, Briga e Goppenstein, sulla S-Bahn di Berna e tra Thun e Soletta.', 'L’ultima corsa regolare si è svolta il 6 dicembre 2024.'],
  kennzahlen: [['13', 'automotrici'], ['1984', 'prima messa in servizio'], ['2024', 'ultima corsa'], ['230–242', 'numeri']],
  daten: { 'Bauart': 'automotrice elettrica per treni navetta', 'Betreiber': 'gruppo EBT e RM, dal 2006 BLS', 'Verbleib': '566 241 con carrozze presso l’associazione Pendelzug Mirage' },
  bilder: ['RBDe 566 238 con AB e ABt (2020)']
});
uebZug('bls-rabe-526', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Stadler costruì le 13 automotrici articolate GTW per la Regionalverkehr Mittelland (RM). Con la fusione passarono alla BLS.'] }, { titel: 'Impiego e tecnica', p: ['Nel 2013 la BLS vendette i treni alle FFS, che li impiegarono nel Giura da Bienne; nel 2018 passarono a Thurbo. Oggi non circolano più per la BLS.'] }, { titel: 'Dotazione e accessibilità', liste: ['Automotrice articolata elettrica della famiglia Stadler GTW', 'In parte a pianale ribassato'] }],
  typ: 'Automotrice articolata Stadler dell’ex parco RM (già BLS)',
  text: ['I GTW rossi del Regionalverkehr Mittelland arrivarono alla BLS con la fusione. Nel 2013 la BLS li vendette alle FFS, che li impiegarono nel Giura da Bienne; nel 2018 passarono a Thurbo.', 'Non circolano più alla BLS.'],
  kennzahlen: [['13', 'treni'], ['2013', 'alle FFS'], ['2018', 'a Thurbo'], ['Stadler', 'costruttore']],
  daten: { 'Bauart': 'automotrice articolata elettrica', 'Betreiber': 'RM, poi BLS, FFS, Thurbo' },
  bilder: ['GTW RABe 526 265 della BLS']
});
uebZug('bls-ew-iii', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['La BLS impiegò i treni navetta con carrozze unificate III dal 1973 fino a fine 2021. Un treno era composto da locomotiva e sei carrozze: AD/ABS, A, B, B, B e carrozza pilota Bt. FFS Historic ha rilevato un treno e lo conserva.'] }, { titel: 'Impiego e tecnica', p: ['Da ultimo i treni circolavano soprattutto come RegioExpress Berna–Neuchâtel, trainati da una Re 465, il treno Kambly da una Re 420. Un treno è lungo 165 m, pesa 263 t e viaggia fino a 140 km/h. I MIKA li hanno sostituiti.'] }, { titel: 'Dotazione e accessibilità', liste: ['63 posti in 1a e 280 in 2a classe', 'Carrozza pilota Bt per il servizio navetta', 'Accessi rialzati con gradini'] }],
  name: 'EW III', beiname: 'Treno navetta',
  typ: 'Treno navetta con carrozze unificate III (storico)',
  text: ['I treni navetta EW III della BLS circolarono dal 1973 a fine 2021, per ultimo soprattutto come RegioExpress tra Berna e Neuchâtel. Hanno lasciato il posto ai nuovi MIKA.', 'FFS Historic ha ripreso una composizione EW III e la conserva.'],
  kennzahlen: [['1973', 'prima messa in servizio'], ['2021', 'ritirati'], ['165 m', 'lunghezza del treno'], ['140 km/h', 'velocità massima']],
  daten: { 'Bauart': 'treno navetta con locomotiva e 6 carrozze', 'Lokomotive': 'Re 465 (treno Kambly: Re 420)', 'Sitzplätze': '63 in 1a, 280 in 2a classe' },
  bilder: ['Treno navetta EW III della BLS a Malters']
});
uebZug('bls-re-420', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['La BLS ebbe per un periodo proprie Re 420 della famiglia Re 4/4 II. Oggi non possiede più locomotive di questo tipo.'] }, { titel: 'Impiego e tecnica', p: ['Le ultime tre trainavano le carrozze della GoldenPass Line tra Interlaken Ost e Zweisimmen. La locomotiva è lunga 14,8 m, pesa 80 t, ha 4700 kW e viaggia fino a 140 km/h.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Nessun compartimento passeggeri'], p: ['L’accessibilità dipendeva dalle carrozze trainate.'] }],
  typ: 'Re 4/4 II al servizio della BLS (storica)',
  text: ['Per un periodo la BLS possedette proprie Re 420 della collaudata famiglia Re 4/4 II. Le ultime tre trainavano le carrozze della GoldenPass Line tra Interlaken Ost e Zweisimmen.', 'Oggi la BLS non possiede più locomotive di questo tipo.'],
  kennzahlen: [['4700 kW', 'potenza'], ['140 km/h', 'velocità massima'], ['80 t', 'peso'], ['14,8 m', 'lunghezza']],
  daten: { 'Bauart': 'locomotiva elettrica Bo’Bo’', 'Betreiber': 'BLS (in passato)' },
  bilder: ['Re 420.5 con treno navetta sul ponte del Bietschtal']
});

// ---------- TPF ----------
uebZug('tpf-rabe-527', {
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler Bussnang ha fornito alle TPF otto FLIRT della serie 190 con i numeri 191–198. Sono entrati in servizio dal 2011 al 2014.'] },
      { titel: 'Impiego e tecnica', p: ['I FLIRT circolano sul RER Fribourg: come RegioExpress RE2/RE3 Berna–Friburgo–Romont–Bulle–Broc e sulle S20/S21 Friburgo–Morat–Ins–Neuchâtel.', 'Il treno a quattro casse è lungo 74,08 m, eroga 2600 kW e viaggia fino a 160 km/h. Fino a quattro treni possono essere accoppiati.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Completamente climatizzato', 'Informazione ai viaggiatori acustica e ottica', 'Compartimento multifunzionale', 'Pianale ribassato per oltre il 90 %', 'WC a circuito chiuso, adatto alle persone a mobilità ridotta'],
        p: ['Il treno è a pianale ribassato per oltre il 90 %. Le TPF non indicano il numero di posti per sedie a rotelle.'] }
    ],
  typ: 'Elettrotreno regionale Stadler',
  text: ['Gli otto FLIRT della serie 190 sono i treni a scartamento normale più moderni delle TPF. Circolano come RegioExpress e S-Bahn nel cantone di Friburgo e oltre.', 'Tecnicamente fanno parte della grande famiglia FLIRT di Stadler.'],
  kennzahlen: [['8', 'treni (191–198)'], ['160 km/h', 'velocità massima'], ['418', 'posti in totale'], ['2011', 'prima messa in servizio']],
  daten: { 'Bauart': 'elettrotreno, 4 casse', 'Gewicht': '122 t a vuoto', 'Sitzplätze': '24 in 1a, 143 in 2a classe', 'Anzahl': '8 treni' },
  specNote: 'Messi in servizio dal 2011 al 2014. Inoltre 42 strapontini e 209 posti in piedi, in totale 418 posti.',
  bilder: ['RABe 527 196 a Neuchâtel', 'RABe 527 198 sul viadotto di Grandfey', 'FLIRT delle TPF a Bulle', 'RABe 527 come RegioExpress a Berna']
});
uebZug('tpf-rbde-560', {
  typ: 'Treno navetta regionale ammodernato (Domino 3)',
  text: ['Dal 2009 al 2011 le TPF hanno trasformato i loro treni navetta NPZ in Domino a tre casse. Ogni treno ha ricevuto una nuova carrozza intermedia a pianale ribassato di Bombardier.', 'Due treni, il 235 e il 245, portano il design «Chocolat Express».'],
  kennzahlen: [['14', 'treni'], ['140 km/h', 'velocità massima'], ['1650 kW', 'potenza'], ['184', 'posti a sedere']],
  daten: { 'Bauart': 'treno navetta con automotrice, carrozza intermedia a pianale ribassato e carrozza pilota', 'Hersteller': 'SWG, SIG, ABB; carrozza intermedia Bombardier', 'Fahrzeugnummern': '235–247 e 269', 'Gewicht': '146 t a vuoto', 'Sitzplätze': '24 in 1a, 160 in 2a classe', 'Anzahl': '14 treni' },
  specNote: 'Automotrici costruite dal 1984 al 1996, ammodernate in Domino dal 2009 al 2011.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['I 14 Domino delle TPF (235–247 e 269) derivano da treni navetta NPZ costruiti da SWG, SIG e ABB tra il 1984 e il 1996. Dal 2009 al 2011 le TPF li hanno trasformati in Domino; ogni treno ha ricevuto una nuova carrozza intermedia a pianale ribassato di Bombardier.', 'Le TPF hanno ordinato a Stadler 13 FLIRT Evo a quattro casse. Il primo dovrebbe entrare in servizio nel dicembre 2028; negli anni seguenti sostituiranno gradualmente i Domino.'] },
      { titel: 'Impiego e tecnica', p: ['Come i FLIRT, i Domino circolano sul RER Fribourg, come RegioExpress Berna–Friburgo–Bulle–Broc e sulle S20/S21 Friburgo–Morat–Ins–Neuchâtel.', 'Un treno è lungo 75 m, eroga 1650 kW e viaggia fino a 140 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Climatizzazione in tutto il treno', 'Informazione ai viaggiatori acustica e ottica', 'Compartimento multifunzionale', 'Carrozza intermedia a pianale ribassato', 'WC con bioreattore, adatto alle persone a mobilità ridotta'],
        p: ['Si sale senza gradini nella carrozza intermedia a pianale ribassato; automotrice e carrozza pilota hanno gradini.'] },
      { titel: 'Chocolat Express', p: ['I treni 235 e 245 portano il design «Chocolat Express». Non si tratta di un tipo di veicolo a sé, ma di una livrea speciale su normali Domino.'] }
    ],
  bilder: ['Domino con design «Chocolat Express» sul viadotto di Grandfey']
});
uebZug('tpf-abe-4-12', {
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler Bussnang ha fornito alle TPF dieci elettrotreni a tre casse con i numeri 101–110. Sono entrati in servizio nel 2015 e nel 2016. Un treno è composto da ABe 2/4, carrozza intermedia B e Be 2/4.'] },
      { titel: 'Impiego e tecnica', p: ['I treni circolano sulla rete a scartamento metrico delle TPF: S50 Palézieux–Châtel-St-Denis–Bulle–Montbovon e S51 fino a Gruyères.', 'Un treno è lungo 55,21 m, eroga 1400 kW e viaggia fino a 100 km/h. È modulabile da due a quattro elementi e fino a quattro treni possono circolare insieme.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Completamente climatizzato', 'Informazione ai viaggiatori acustica e ottica', 'WC a circuito chiuso, adatto alle persone a mobilità ridotta', '350 posti: 15 in 1a e 133 in 2a classe, 14 strapontini, 188 posti in piedi'],
        p: ['Sulla pagina del veicolo le TPF non danno indicazioni su accessi a pianale ribassato e posti per sedie a rotelle.'] }
    ],
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
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La serie 120 comprende 13 veicoli: 4 automotrici Be 4/4 (121–124) e 6 carrozze pilota (A)Bt (221–226) di Vevey/BBC, costruite dal 1992 al 1995, oltre a 3 carrozze intermedie B (207, 209, 215) di SIG del 1973.', 'Le automotrici si chiamavano prima BDe 4/4 perché avevano un bagagliaio.'] },
      { titel: 'Impiego e tecnica', p: ['I treni navetta circolano sulla rete a scartamento metrico delle TPF tra Palézieux, Bulle, Gruyères e Montbovon. Sono modulari: carrozze intermedie e pilota vengono aggiunte secondo la domanda.', 'Un treno di tre veicoli è lungo 52,32 m, eroga 640 kW e viaggia fino a 90 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Informazione ai viaggiatori acustica e ottica', '253 posti: 134 in 2a classe, 8 strapontini, 102 posti in piedi', '1a classe con 9 posti solo nelle carrozze pilota 221–223'],
        p: ['Sulla pagina del veicolo le TPF non danno indicazioni su climatizzazione, accessi a pianale ribassato e posti per sedie a rotelle.'] },
      { titel: 'I veicoli', tabelle: { kopf: ['Veicolo', 'Numeri', 'Quantità', 'Anni di costruzione', 'Costruttore'], zeilen: [
    ['Automotrice Be 4/4', '121–124', '4', '1992–1995', 'Vevey/BBC'], ['Carrozza intermedia B', '207, 209, 215', '3', '1973', 'SIG'], ['Carrozza pilota (A)Bt', '221–226', '6', '1992–1995', 'Vevey/BBC']] } }
    ],
  bilder: ['Be 4/4 123', 'Automotrice 124, allora ancora BDe 4/4 (2010)', 'Carrozza pilota 221 a Bulle', 'Carrozza pilota 225']
});
uebZug('tpf-funiculaire', {
  typ: 'Funicolare Neuveville–St-Pierre con zavorra ad acqua',
  text: ['Dal 1899 la funicolare di Friburgo collega la città bassa, la Neuveville, con St-Pierre. Supera 58 metri di dislivello su 121 metri.', 'La sua particolarità è il funzionamento: le acque reflue della città di Friburgo fungono da contrappeso. Secondo le TPF è un caso unico in Europa.'],
  kennzahlen: [['1899', 'apertura'], ['121 m', 'lunghezza della linea'], ['550 ‰', 'pendenza massima'], ['2 min', 'tempo di percorrenza']],
  daten: { 'Bauart': 'funicolare con zavorra ad acqua', 'Kabinen': '2 da 20 posti ciascuna', 'Länge': '121 m di linea, vettura 5,4 m', 'Gewicht': '1600 kg per vettura', 'Kapazität': '240 persone all’ora' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La funicolare è stata costruita da Von Roll; circola dal 1899. È stata trasformata nel 1998, l’ultima grande revisione risale al 2020. È protetta come monumento storico.', 'Dispone di due vetture da 20 posti ciascuna.'] },
      { titel: 'Impiego e tecnica', p: ['La funicolare collega a Friburgo la città bassa, la Neuveville (552 m), con St-Pierre (608 m). Nel servizio regolare, sul binario unico con incrocio effettua circa 70 corse di andata e ritorno al giorno, dalle 7 alle 19, in estate fino alle 20.', 'Come contrappeso servono le acque reflue della città di Friburgo. La linea è lunga 121 m, ha uno scartamento di 1200 mm e una pendenza fino al 550 ‰; il viaggio dura 2 minuti a 1,2 m/s.', 'A causa di una revisione generale, la funicolare rimane chiusa dal 27 agosto al 4 dicembre 2026. La ripresa del servizio è prevista per il 5 dicembre 2026; fino ad allora la linea di bus 4 la sostituisce.'] },
      { titel: 'Dotazione e accessibilità', liste: ['2 vetture da 20 posti ciascuna', '240 persone all’ora'],
        p: ['Sulla pagina del veicolo le TPF non danno indicazioni sull’accesso con sedia a rotelle, passeggino o bicicletta.'] }
    ],
  bilder: ['Funicolare Neuveville–St-Pierre a Friburgo (2024)']
});
uebZug('tpf-tm-87', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Stadler Bussnang e ADtranz hanno costruito il trattore; è entrato in servizio nel 2000. Le TPF lo impiegano con il numero 87 sulla loro rete a scartamento normale.'] }, { titel: 'Impiego e tecnica', p: ['Il Tm 87 serve alla manutenzione dell’infrastruttura, traina treni pesanti e sgombera la neve. Un motore MTU 12V 183 TD13 lo aziona in modo diesel-idraulico; ha 550 kW e viaggia fino a 80 km/h.'] }, { titel: 'Dotazione e accessibilità', liste: ['Gru di carico Palfinger, 1200 kg a 7,2 m', 'Comando a distanza', 'Nessun compartimento passeggeri'] }],
  typ: 'Trattore di servizio diesel-idraulico con gru di carico',
  text: ['Il Tm 87 è un trattore di servizio del tipo Tm 234 per la rete a scartamento normale delle TPF. Serve alla manutenzione dell’infrastruttura, traina treni pesanti e sgombera la neve.', 'Ha una gru di carico e può essere telecomandato.'],
  kennzahlen: [['550 kW', 'potenza'], ['80 km/h', 'velocità massima'], ['30 t', 'peso'], ['2000', 'prima messa in servizio']],
  daten: { 'Bauart': 'trattore diesel-idraulico con gru di carico', 'Gewicht': '30 t a vuoto', 'Kran': 'Palfinger, 1200 kg a 7,2 m' }
});
uebZug('tpf-tmf-17', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Schöma ha costruito il trattore a due assi 17; è entrato in servizio nel 2011.'] }, { titel: 'Impiego e tecnica', p: ['Lavora per i cantieri sulla rete a scartamento metrico delle TPF, traina treni pesanti e sgombera la neve. Un motore Deutz a sei cilindri ha 330 kW; il trattore viaggia fino a 65 km/h e traina 200 t in piano o 90 t al 50 ‰.'] }, { titel: 'Dotazione e accessibilità', liste: ['Comando a distanza', 'Due assi, 8,50 m di lunghezza', 'Nessun compartimento passeggeri'] }],
  typ: 'Trattore diesel per la rete a scartamento metrico',
  text: ['Il Tmf 2/2 17 di Schöma è un trattore diesel a due assi per la rete a scartamento metrico delle TPF. Lavora nel servizio cantieri, traina treni pesanti e sgombera la neve.', 'Può anche essere telecomandato.'],
  kennzahlen: [['330 kW', 'potenza'], ['65 km/h', 'velocità massima'], ['28 t', 'peso'], ['2011', 'prima messa in servizio']],
  daten: { 'Bauart': 'trattore diesel a due assi', 'Gewicht': '28 t a vuoto', 'Motor': 'Deutz, 6 cilindri', 'Anhängelast': '200 t in piano, 90 t al 50 ‰' }
});
uebZug('tpf-gem-18', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Stadler Bussnang ha costruito la locomotiva 18; è entrata in servizio nel 2016.'] }, { titel: 'Impiego e tecnica', p: ['Sotto la linea di contatto viaggia elettricamente con 700 kW, altrimenti con un motore diesel Mercedes-Benz OM 502 LA da 400 kW. Le TPF la impiegano per i cantieri, i treni pesanti e lo sgombero neve. Viaggia fino a 80 km/h e traina 300 t in piano o 120 t al 50 ‰.'] }, { titel: 'Dotazione e accessibilità', liste: ['Cabina con posto per otto persone', 'Bimodale: elettrica e diesel', 'Nessun compartimento per viaggiatori'] }],
  typ: 'Locomotiva bimodale per la rete a scartamento metrico',
  text: ['La Gem 2/2 18 di Stadler viaggia elettricamente sotto la linea di contatto e a diesel altrove. Le TPF la impiegano nel servizio cantieri, per treni pesanti e per lo sgombero neve.', 'La cabina ospita otto persone.'],
  kennzahlen: [['700 kW', 'elettrica'], ['400 kW', 'diesel'], ['80 km/h', 'velocità massima'], ['2016', 'prima messa in servizio']],
  daten: { 'Bauart': 'locomotiva bimodale (elettrica e diesel)', 'Gewicht': '28 t a vuoto', 'Leistung': '700 kW elettrica, 400 kW diesel', 'Anhängelast': '300 t in piano, 120 t al 50 ‰' },
  bilder: ['Gem 2/2 18']
});
uebZug('tpf-x-925', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Al carro gru hanno partecipato Schindler Waggon Pratteln, MOB-TPF e Nencki. Il telaio è del 1972; la trasformazione in carro gru è entrata in servizio nel 2016.'] }, { titel: 'Impiego e tecnica', p: ['Il carro gru lavora sulla rete a scartamento metrico delle TPF. La piattaforma della gru può essere spostata sul carro portante a scartamento normale Sgjs X113; così la gru lavora anche sulla rete a scartamento normale. Il carro viaggia fino a 65 km/h.'] }, { titel: 'Dotazione e accessibilità', liste: ['Gru radiocomandata Palfinger PKR290, 1500 kg a 14 m', 'Quattro assi su due carrelli', 'Nessun compartimento passeggeri'] }],
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
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['L’automotrice Be 4/4 116 fu costruita da SWS nel 1922 e completamente ricostruita fedelmente all’originale dalle TPF nel 1999. Le tre carrozze B 243, Brs 245 e Br 247 furono costruite da SIG dal 1930 al 1932.'] }, { titel: 'Impiego e tecnica', p: ['Le TPF impiegano il treno per treni fondue e altre corse speciali sulla loro rete a scartamento metrico. L’automotrice ha 482 kW; il treno intero è lungo 61,58 m e viaggia fino a 65 km/h, 30 km/h in orario.'] }, { titel: 'Dotazione e accessibilità', liste: ['176 posti in 2a classe e 10 strapuntini', 'Due carrozze con parte ristorante (lettera R)', 'Accessi rialzati con gradini'] }, { titel: 'I veicoli', tabelle: { kopf: ['Veicolo', 'Anno di costruzione', 'Costruttore'], zeilen: [
    ['Automotrice Be 4/4 116', '1922 (ricostruita nel 1999)', 'SWS'], ['Carrozza B 243', '1930', 'SIG'], ['Carrozza Brs 245', '1931', 'SIG'], ['Carrozza Br 247', '1932', 'SIG']] } }],
  bilder: ['Treno rétro delle TPF', 'Be 4/4 116 a Bulle (2011)', 'Interno del treno rétro']
});
uebZug('gfm-be-111', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['L’automotrice 111 è del 1903; le fonti utilizzate non indicano un costruttore. Oggi fa parte della collezione di GFM Historique. Dal 2006 al 2011 era in prestito alla ferrovia museo Blonay–Chamby.'] }, { titel: 'Impiego e tecnica', p: ['Circolò agli inizi delle ferrovie elettriche nella Gruyère, sulla rete a scartamento metrico della CEG e poi delle GFM.'] }, { titel: 'Dotazione e accessibilità', p: ['Non sono pubblicati dettagli affidabili sulla dotazione. Come tutti i veicoli di quell’epoca ha accessi alti con gradini.'] }],
  typ: 'Automotrice elettrica del 1903 (storica)',
  text: ['L’automotrice 111 del 1903 risale agli inizi delle ferrovie elettriche in Gruyère. Oggi fa parte della collezione di GFM Historique.', 'Dal 2006 al 2011 è stata prestata alla ferrovia museo Blonay–Chamby.'],
  kennzahlen: [['1903', 'costruita'], ['111', 'numero'], ['scartamento metrico', 'scartamento'], ['GFM Historique', 'oggi']],
  daten: { 'Bauart': 'automotrice elettrica', 'Betreiber': 'CEG/GFM, oggi GFM Historique' },
  specNote: 'GFM Historique la chiama «Be 4/4 111», Wikipedia «BCe 4/4 111».',
  bilder: ['Automotrice 111 alla ferrovia museo Blonay–Chamby']
});
uebZug('gfm-be-115', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['L’automotrice 115 è del 1905; le fonti utilizzate non indicano un costruttore. Fu demolita nell’ottobre 2016.'] }, { titel: 'Impiego e tecnica', p: ['Circolò a lungo come automotrice nostalgica sulla rete a scartamento metrico delle GFM e poi delle TPF.'] }, { titel: 'Dotazione e accessibilità', p: ['Non sono pubblicati dettagli affidabili sulla dotazione. Come tutti i veicoli di quell’epoca aveva accessi alti con gradini.'] }],
  typ: 'Automotrice nostalgica del 1905 (storica)',
  text: ['La Be 4/4 115 del 1905 ha circolato a lungo come automotrice nostalgica sulla rete a scartamento metrico delle GFM, poi delle TPF.', 'È stata demolita nell’ottobre 2016.'],
  kennzahlen: [['1905', 'costruita'], ['2016', 'demolita'], ['115', 'numero'], ['scartamento metrico', 'scartamento']],
  daten: { 'Bauart': 'automotrice elettrica', 'Betreiber': 'GFM, poi TPF', 'Verbleib': 'demolita nell’ottobre 2016' },
  bilder: ['Be 4/4 115 a Bulle (1995)', 'Be 4/4 115 con Bt 254 a Broc-Fabrique (2011)']
});
uebZug('gfm-be-131', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Le tre automotrici 131–133 furono costruite nel 1943 per le GFM. La 132 fu demolita nel 1989, la 133 nel 2003; la 131 è conservata come Ce 4/4 131 da GFM Historique.'] }, { titel: 'Impiego e tecnica', p: ['Le automotrici circolavano sulla rete a scartamento metrico delle GFM.'] }, { titel: 'Dotazione e accessibilità', p: ['Non sono pubblicati dettagli affidabili sulla dotazione. Come tutti i veicoli di quell’epoca hanno accessi alti con gradini.'] }],
  typ: 'Automotrici elettriche del 1943 (storiche)',
  text: ['Le tre automotrici dalla 131 alla 133 furono costruite nel 1943 per la rete a scartamento metrico delle GFM.', 'La 132 è stata demolita nel 1989 e la 133 nel 2003. La 131 è conservata e fa parte della collezione di GFM Historique come Ce 4/4 131.'],
  kennzahlen: [['3', 'automotrici'], ['1943', 'costruite'], ['131', 'conservata'], ['scartamento metrico', 'scartamento']],
  daten: { 'Bauart': 'automotrice elettrica', 'Verbleib': '131 conservata, 132 demolita nel 1989, 133 demolita nel 2003' }
});
uebZug('gfm-bde-141', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['SWP costruì la parte meccanica, SAAS quella elettrica; le due automotrici 141 e 142 arrivarono nel 1972. La 141 è passata a GFM Historique nel 2017, la 142 è stata demolita nell’aprile 2017.'] }, { titel: 'Impiego e tecnica', p: ['All’inizio le automotrici trainavano treni di ghiaia. Dal 1981 avevano un compartimento con posti a sedere e circolavano anche con le carrozze pilota 251–256. Pesano 36,5 t e viaggiano fino a 70 km/h.'] }, { titel: 'Dotazione e accessibilità', liste: ['40 posti a sedere dal 1981', 'Compartimento bagagli (lettera D)', 'Accessi rialzati con gradini'] }],
  typ: 'Automotrici per treni di ghiaia del 1972 (storiche)',
  text: ['Le due potenti automotrici del 1972 furono costruite inizialmente per i treni di ghiaia. Dal 1981 ricevettero un compartimento con posti a sedere e circolarono anche con le carrozze pilota 251–256.', 'La 141 è passata a GFM Historique nel 2017, la 142 è stata demolita nell’aprile 2017.'],
  kennzahlen: [['2', 'automotrici'], ['1972', 'costruite'], ['70 km/h', 'velocità massima'], ['36,5 t', 'peso']],
  daten: { 'Bauart': 'automotrice elettrica con bagagliaio', 'Hersteller': 'SWP (parte meccanica), SAAS (parte elettrica)', 'Betreiber': 'GFM, poi TPF', 'Sitzplätze': '40 (dal 1981)', 'Verbleib': '141 presso GFM Historique, 142 demolita nel 2017' },
  bilder: ['BDe 4/4 141 con carrozza pilota', 'BDe 4/4 142 a Bulle (2014)', 'BDe 4/4 142 a Bulle']
});
uebZug('gfm-be-151', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Le automotrici 151 e 152 arrivarono nel 1977. Entrambe furono demolite nell’aprile 2017.'] }, { titel: 'Impiego e tecnica', p: ['Avevano una sola cabina di guida e circolavano quindi sempre come treno navetta con una delle carrozze pilota 251–256 sulla rete a scartamento metrico di GFM e TPF.'] }, { titel: 'Dotazione e accessibilità', liste: ['Una cabina di guida', 'Sempre con carrozza pilota', 'Accessi rialzati con gradini'] }],
  typ: 'Automotrici per treni navetta del 1977 (storiche)',
  text: ['Le automotrici 151 e 152 del 1977 avevano una sola cabina di guida. Circolavano quindi sempre con una delle carrozze pilota 251–256.', 'Entrambe sono state demolite nell’aprile 2017.'],
  kennzahlen: [['2', 'automotrici'], ['1977', 'costruite'], ['1', 'cabina di guida'], ['2017', 'demolite']],
  daten: { 'Bauart': 'automotrice elettrica con una cabina di guida', 'Betreiber': 'GFM, poi TPF', 'Einsatz': 'treno navetta con carrozze pilota 251–256', 'Verbleib': 'demolite nell’aprile 2017' },
  bilder: ['Be 4/4 151 con la carrozza pilota Bt 256', 'Be 4/4 152 a Montbovon (1995)']
});
uebZug('gfm-gde-101', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['SLM e BBC costruirono la locomotiva 101 «Ville de Bulle»; entrò in servizio nel 1983. In seguito fu venduta alla Montreux–Oberland bernese; l’anno è indicato in modo diverso (2007 o 2017).'] }, { titel: 'Impiego e tecnica', p: ['Era l’unica grande locomotiva elettrica delle GFM a scartamento metrico. Alla MOB circola oggi come GDe 4/4 6005.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Compartimento bagagli (lettera D)', 'Nessun compartimento passeggeri'] }],
  typ: 'Locomotiva elettrica a scartamento metrico delle GFM (oggi alla MOB)',
  text: ['La GDe 4/4 101 «Ville de Bulle» era l’unica grande locomotiva elettrica a scartamento metrico delle GFM.', 'È stata venduta alla Montreux–Oberland Bernese e vi circola come GDe 4/4 6005.'],
  kennzahlen: [['1983', 'costruita'], ['SLM / BBC', 'costruttore'], ['6005', 'numero attuale alla MOB'], ['scartamento metrico', 'scartamento']],
  daten: { 'Bauart': 'locomotiva elettrica', 'Hersteller': 'SLM e BBC', 'Betreiber': 'GFM, oggi MOB', 'Fahrzeugnummern': '101, alla MOB 6005', 'Verbleib': 'venduta alla MOB' },
  specNote: 'L’anno della vendita è indicato in modo diverso nelle fonti (2007 o 2017).',
  bilder: ['L’ex GDe 4/4 101 come MOB 6005 presso Saanenmöser (2014)']
});
uebZug('gfm-te-22', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['I due trattori 11 e 12 sono del 1913; l’equipaggiamento elettrico era di MFO (11) e di Alioth (12). Il 12 fu ritirato nel 2012.'] }, { titel: 'Impiego e tecnica', p: ['Manovravano sulla rete a scartamento metrico delle GFM: il Te 2/2 11 a Bulle, il Te 2/2 12 a Montbovon.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due assi', 'Trazione elettrica dalla linea di contatto', 'Nessun compartimento passeggeri'] }],
  typ: 'Trattori di manovra elettrici del 1913 (storici)',
  text: ['I due piccoli trattori di manovra del 1913 manovravano sulla rete a scartamento metrico delle GFM: il Te 2/2 11 a Bulle, il Te 2/2 12 a Montbovon.', 'Il 12 è stato ritirato nel 2012.'],
  kennzahlen: [['2', 'trattori'], ['1913', 'costruiti'], ['Bulle', 'Te 2/2 11'], ['Montbovon', 'Te 2/2 12']],
  daten: { 'Bauart': 'trattore di manovra elettrico', 'Hersteller': 'parte elettrica MFO (11), Alioth (12)', 'Betreiber': 'GFM, poi TPF' },
  specNote: 'Per il 12 Wikipedia indica la demolizione nel 2012; su Commons ci sono anche foto del 2026.',
  bilder: ['Te 2/2 12 a Montbovon', 'Te 2/2 12 di lato']
});
uebZug('gfm-te-44', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Il 13 e il 14 furono costruiti nel 1901 come automotrici con equipaggiamento elettrico Alioth e trasformati in trattori da manovra nel 1927 e 1933. Il 13 fu ritirato nel 2017.'] }, { titel: 'Impiego e tecnica', p: ['Il 13 manovrava a Broc-Fabrique, il 14 trainava treni cantiere.'] }, { titel: 'Dotazione e accessibilità', liste: ['Quattro assi motori', 'Trazione elettrica dalla linea di contatto', 'Nessun compartimento passeggeri'] }],
  typ: 'Trattori di manovra trasformati da automotrici (storici)',
  text: ['I Te 4/4 13 e 14 furono costruiti nel 1901 come automotrici e trasformati in trattori di manovra nel 1927 e nel 1933.', 'Il 13 manovrava a Broc-Fabrique, il 14 trainava treni cantiere. Il 13 è stato ritirato nel 2017.'],
  kennzahlen: [['2', 'trattori'], ['1901', 'costruiti'], ['1927 / 1933', 'trasformati'], ['scartamento metrico', 'scartamento']],
  daten: { 'Bauart': 'trattore di manovra elettrico', 'Hersteller': 'parte elettrica Alioth', 'Betreiber': 'GFM, poi TPF', 'Einsatz': 'manovra a Broc-Fabrique, treni cantiere' },
  bilder: ['Te 4/4 13', 'Te 4/4 14']
});
uebZug('gfm-tm-15', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Schöma e Deutz costruirono il trattore nel 1971; fu trasformato nel 1981.'] }, { titel: 'Impiego e tecnica', p: ['Trainava treni cantiere e manovrava a Bulle.'] }, { titel: 'Dotazione e accessibilità', liste: ['Trazione diesel, indipendente dalla linea di contatto', 'Due assi', 'Nessun compartimento passeggeri'] }],
  typ: 'Trattore diesel per treni cantiere e manovra (storico)',
  text: ['Il piccolo trattore diesel Tm 2/2 15 fu costruito da Schöma nel 1971 e trasformato nel 1981. Trainava treni cantiere e manovrava a Bulle.'],
  kennzahlen: [['1971', 'costruito'], ['1981', 'trasformato'], ['Schöma', 'costruttore'], ['Bulle', 'luogo d’impiego']],
  daten: { 'Bauart': 'trattore diesel a due assi', 'Betreiber': 'GFM, poi TPF', 'Einsatz': 'treni cantiere, manovra a Bulle' },
  bilder: ['Tm 2/2 15 a Bulle (2005)']
});
uebZug('gfm-abde-24', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Le automotrici arrivarono nel 1931 alla Friburgo–Morat–Anet (FMA) e in seguito appartennero alle GFM. L’ABDe 2/4 155 fu demolita nel 2025; le sue cabine sono andate a ÖV Historique.'] }, { titel: 'Impiego e tecnica', p: ['Circolavano sulla linea a scartamento normale Friburgo–Morat–Anet, dapprima in corrente continua. Nel 1946 furono trasformate per la corrente alternata a 15 kV e 16,7 Hz.'] }, { titel: 'Dotazione e accessibilità', liste: ['Posti in 1a e 2a classe (lettere A e B)', 'Compartimento bagagli (lettera D)', 'Accessi rialzati con gradini'] }],
  typ: 'Automotrice della ferrovia Friburgo–Morat–Anet (storica)',
  text: ['Le ABDe 2/4 arrivarono nel 1931 alla ferrovia Friburgo–Morat–Anet, ancora per la corrente continua. Nel 1946 furono convertite alla corrente alternata.', 'La ABDe 2/4 155 è stata demolita nel 2025; le sue cabine di guida sono andate a ÖV Historique.'],
  kennzahlen: [['1931', 'consegnata'], ['1946', 'convertita alla corrente alternata'], ['155', 'l’ultima conservata'], ['scartamento normale', 'scartamento']],
  daten: { 'Bauart': 'automotrice elettrica', 'Betreiber': 'FMA, poi GFM', 'Stromsystem': 'prima corrente continua, dal 1946 15 kV 16,7 Hz', 'Verbleib': '155 demolita nel 2025, cabine presso ÖV Historique' },
  bilder: ['ABDe 2/4 155']
});
uebZug('gfm-abde-44', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['SIG e BBC costruirono dal 1946 al 1948 le automotrici 161–167; la 166 era una ABe 4/4. La maggior parte fu trasformata nel 1965. Le 162, 163 e 167 sono state demolite.'] }, { titel: 'Impiego e tecnica', p: ['Le automotrici modernizzarono il traffico sulle linee a scartamento normale delle GFM.'] }, { titel: 'Dotazione e accessibilità', liste: ['16 posti in 1a e 32 in 2a classe', 'Compartimento bagagli (lettera D), tranne sulla 166', 'Accessi rialzati con gradini'] }],
  typ: 'Automotrici a scartamento normale delle GFM (storiche)',
  text: ['Le ABDe 4/4 dalla 161 alla 167 di SIG e BBC furono costruite dal 1946 al 1948 e modernizzarono le linee a scartamento normale delle GFM. La maggior parte fu trasformata nel 1965.', 'Diverse automotrici sono state nel frattempo demolite.'],
  kennzahlen: [['1946', 'prime costruite'], ['1965', 'trasformate'], ['SIG / BBC', 'costruttore'], ['48', 'posti (16 + 32)']],
  daten: { 'Bauart': 'automotrice elettrica', 'Hersteller': 'SIG e BBC', 'Fahrzeugnummern': '161–167 (166 come ABe 4/4)', 'Sitzplätze': '16 in 1a, 32 in 2a classe', 'Verbleib': '162, 163 e 167 demolite' },
  bilder: ['ABDe 4/4 162 a Ins', 'ABDe 4/4 167 a Bulle']
});
uebZug('gfm-rbde-567', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Le automotrici 171–173 di SIG, SWS e BBC sono del 1983, le 181–182 di SWP, SIG e ABB del 1991. La 173 arrivò dalla RVT nel 1992. Non figurano più nella panoramica attuale della flotta TPF; la 171 è stata fotografata ancora nel 2024.'] }, { titel: 'Impiego e tecnica', p: ['Le automotrici fanno parte della famiglia degli NPZ delle ferrovie private e circolavano come treni navetta sulla rete a scartamento normale di GFM e TPF.'] }, { titel: 'Dotazione e accessibilità', liste: ['Automotrice per treni navetta con carrozza pilota', 'Compartimento bagagli (lettera D)', 'Accessi rialzati nell’automotrice'] }],
  typ: 'Vecchi treni navetta regionali delle GFM e delle TPF',
  text: ['Le automotrici dalla 171 alla 173 del 1983 e dalla 181 alla 182 del 1991 fanno parte della famiglia NPZ delle ferrovie private. La 173 è arrivata dalla RVT nel 1992.', 'Non figurano più nella panoramica attuale della flotta TPF; la 171 è stata ancora fotografata nel 2024.'],
  kennzahlen: [['5', 'automotrici'], ['1983', 'prime costruite'], ['1991', 'seconda serie'], ['scartamento normale', 'scartamento']],
  daten: { 'Bauart': 'automotrice elettrica per treni navetta', 'Hersteller': 'SIG, SWS, BBC (171–173); SWP, SIG, ABB (181–182)', 'Betreiber': 'GFM, poi TPF' },
  bilder: ['Automotrice 182 a Ins (2000)', 'Automotrice 171 (2005)']
});
uebZug('gfm-ee-91', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['SIG e BBC costruirono la piccola locomotiva da manovra nel 1960. In seguito portò il numero 217 091.'] }, { titel: 'Impiego e tecnica', p: ['Manovrava sulla rete a scartamento normale delle GFM, per esempio a Bulle.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due assi motori', 'Trazione elettrica dalla linea di contatto', 'Nessun compartimento passeggeri'] }],
  typ: 'Locomotiva di manovra elettrica a scartamento normale (storica)',
  text: ['La piccola locomotiva di manovra Ee 2/2 91 fu costruita nel 1960 da SIG e BBC. Manovrava sulla rete a scartamento normale delle GFM, per esempio a Bulle, e in seguito portò il numero 217 091.'],
  kennzahlen: [['1960', 'costruita'], ['SIG / BBC', 'costruttore'], ['217 091', 'numero successivo'], ['scartamento normale', 'scartamento']],
  daten: { 'Bauart': 'locomotiva di manovra elettrica', 'Hersteller': 'SIG e BBC', 'Betreiber': 'GFM, poi TPF', 'Fahrzeugnummern': '91 (poi 217 091)' },
  bilder: ['Ee 2/2 91 (217 091) a Bulle (2005)']
});
uebZug('gfm-wagen', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Sono conservate la carrozza B 235 del 1903 e la carrozza pilota CFt4 273 presso GFM Historique, nonché i carri coperti K 671 e K 672 presso la ferrovia museo Blonay–Chamby. Le fonti utilizzate non indicano i costruttori.'] }, { titel: 'Impiego e tecnica', p: ['I veicoli circolavano sulla rete a scartamento metrico della CEG e delle GFM. Oggi sono affidati ad associazioni museali.'] }, { titel: 'Dotazione e accessibilità', liste: ['Carrozza B 235 del 1903', 'Carrozza pilota CFt4 273 con compartimento bagagli (lettera F)', 'Carri coperti K 671 e K 672'] }],
  name: 'Carri storici',
  typ: 'Carrozze e carri conservati delle GFM',
  text: ['Oltre ai veicoli motori sono conservati anche carri delle GFM. GFM Historique custodisce la carrozza B 235 del 1903 e la carrozza pilota CFt4 273.', 'I carri coperti K 671 e K 672 si trovano alla ferrovia museo Blonay–Chamby.'],
  kennzahlen: [['B 235', 'carrozza del 1903'], ['CFt4 273', 'carrozza pilota'], ['K 671, K 672', 'carri merci'], ['scartamento metrico', 'scartamento']],
  daten: { 'Bauart': 'carrozze, carrozze pilota e carri merci', 'Betreiber': 'CEG/GFM, oggi associazioni museali', 'Erhalten': 'GFM Historique; Blonay–Chamby' },
  bilder: ['Carro coperto K 671 a Vevey (2016)', 'Carro K 671 presso la fabbrica di cioccolato di Broc']
});

/* ---- 32-bls-neu.js ---- */
/* Italiano – BLS: locomotive noleggiate, carri di servizio, intervento */
uebDict({ 'Schotter- und Kippwagen': 'Carri per pietrisco e ribaltabili' });

uebZug('bls-br-185', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Le quattro locomotive sono TRAXX F140 AC di Bombardier Transportation. Appartengono al noleggiatore Alpha Trains e sono immatricolate in Germania; BLS Cargo le noleggia.'] }, { titel: 'Impiego e tecnica', p: ['Omologate per Germania, Austria e Svizzera, completano presso BLS Cargo le Re 485 proprie, con cui sono tecnicamente strettamente imparentate.', 'Erogano fino a 5600 kW e viaggiano fino a 140 km/h.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Omologazione per Germania, Austria e Svizzera', 'Immatricolata in Germania, proprietà di Alpha Trains'], p: ['La BR 185 è una locomotiva merci e non ha compartimento passeggeri.'] }],
  typ: 'Locomotiva elettrica noleggiata da Alpha Trains',
  text: ['Oltre alle proprie locomotive, BLS Cargo impiega locomotive noleggiate immatricolate in Germania. Tra queste ci sono quattro TRAXX della serie 185 di Alpha Trains.', 'Tecnicamente sono strette parenti delle Re 485 della BLS, che corrispondono alla serie tedesca 185 con un equipaggiamento svizzero aggiuntivo.'],
  kennzahlen: [['4', 'locomotive noleggiate'], ['140 km/h', 'velocità massima'], ['fino a 5600 kW', 'potenza'], ['D, A, CH', 'omologazione']],
  daten: { 'Bauart': 'locomotiva elettrica Bo’Bo’', 'Betreiber': 'BLS Cargo (noleggiata)', 'Leistung': 'fino a 5600 kW', 'Zulassung': 'Germania, Austria, Svizzera', 'Anzahl': '4 noleggiate' },
  specNote: 'I numeri delle quattro locomotive noleggiate non sono pubblicati. La foto mostra la 185 525 con i colori BLS nel 2009.',
  bilder: ['185 525 con i colori BLS a Friburgo (2009)']
});
uebZug('bls-br-186', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Le nove locomotive sono TRAXX policorrente F140 MS di Bombardier Transportation. Appartengono al noleggiatore Railpool; su foto si vedono tra l’altro le 186 101, 103–105, 108 e 109 con la scritta BLS.'] }, { titel: 'Impiego e tecnica', p: ['Le locomotive sono omologate per Germania, Austria, Svizzera, Italia e Paesi Bassi. Trainano treni merci sull’asse Rotterdam–Italia, per esempio il Melzo-Shuttle.', 'Con corrente alternata erogano 5600 kW, con 1,5 kV continua nei Paesi Bassi 4000 kW; viaggiano fino a 140 km/h.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Locomotiva multisistema: 5600 kW in corrente alternata, 4000 kW a 1,5 kV continua', 'Omologazione per Germania, Austria, Svizzera, Italia e Paesi Bassi'], p: ['La BR 186 è una locomotiva merci e non ha compartimento passeggeri.'] }],
  typ: 'Locomotiva policorrente noleggiata da Railpool',
  text: ['BLS Cargo noleggia da Railpool nove TRAXX policorrente della serie 186. Possono circolare in cinque paesi, fino ai Paesi Bassi.', 'Trainano così treni merci sull’asse Rotterdam–Italia, per esempio il Melzo-Shuttle.'],
  kennzahlen: [['9', 'locomotive noleggiate'], ['140 km/h', 'velocità massima'], ['5600 kW', 'potenza'], ['5', 'paesi']],
  daten: { 'Bauart': 'locomotiva elettrica policorrente Bo’Bo’', 'Betreiber': 'BLS Cargo (noleggiata)', 'Fahrzeugnummern': 'tra l’altro 186 101, 103–105, 108, 109 (documentate da foto)', 'Leistung': '5600 kW (4000 kW con 1,5 kV continua)', 'Zulassung': 'Germania, Austria, Svizzera, Italia, Paesi Bassi', 'Anzahl': '9 noleggiate' },
  specNote: 'Le TRAXX policorrente proprie di BLS Cargo si chiamano Re 486 e hanno una pagina propria.',
  bilder: ['186 101 di BLS Cargo', '186 109 con il Melzo-Shuttle presso Elten (NL)']
});
uebZug('bls-br-187', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Le tre locomotive appartengono alla terza generazione TRAXX (AC3) di Bombardier Transportation. BLS Cargo le noleggia a lungo termine dal noleggiatore Railpool; la 187 004 compare su foto con la scritta BLS.'] }, { titel: 'Impiego e tecnica', p: ['Omologate per Germania, Austria e Svizzera, trainano treni merci di BLS Cargo.', 'Erogano 5600 kW e pesano 84 t. La serie 187 esiste anche con un piccolo motore diesel per l’«ultimo miglio» senza linea di contatto; non è documentato pubblicamente se le tre locomotive della BLS ne siano dotate.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Omologazione per Germania, Austria e Svizzera', 'Non è documentato se sia montato un motore diesel per l’«ultimo miglio»'], p: ['La BR 187 è una locomotiva merci e non ha compartimento passeggeri.'] }],
  typ: 'Locomotiva elettrica noleggiata da Railpool',
  text: ['BLS Cargo ha noleggiato a lungo termine da Railpool tre locomotive della serie 187. Appartengono alla terza generazione TRAXX.', 'La serie 187 esiste anche con un piccolo motore diesel per l’«ultimo miglio» senza linea di contatto. Non è documentato pubblicamente se le tre locomotive della BLS ne siano dotate.'],
  kennzahlen: [['3', 'locomotive noleggiate'], ['5600 kW', 'potenza'], ['84 t', 'peso'], ['D, A, CH', 'omologazione']],
  daten: { 'Bauart': 'locomotiva elettrica Bo’Bo’', 'Betreiber': 'BLS Cargo (noleggiata)', 'Höchstgeschwindigkeit': '140 o 160 km/h secondo la versione', 'Zulassung': 'Germania, Austria, Svizzera', 'Anzahl': '3 noleggiate' },
  bilder: ['187 004 di BLS Cargo']
});
uebZug('bls-br-193', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Le locomotive sono Vectron di Siemens Mobility. Secondo l’elenco della flotta, BLS Cargo noleggia sei locomotive e altre quattro, che circolano in parte con i colori dell’operatore combinato Hupac (tra l’altro 193 494–496). Su foto si vedono inoltre le 193 711, 713 e 716.'] }, { titel: 'Impiego e tecnica', p: ['Omologate per Germania, Austria, Svizzera, Italia e Paesi Bassi, circolano soprattutto nel traffico di transito tra i porti del Mare del Nord e l’Italia.', 'Come locomotive policorrente erogano fino a 6400 kW.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Locomotiva multisistema', 'Omologazione per Germania, Austria, Svizzera, Italia e Paesi Bassi', 'In parte con i colori di Hupac'], p: ['La BR 193 è una locomotiva merci e non ha compartimento passeggeri.'] }],
  typ: 'Siemens Vectron noleggiate per BLS Cargo',
  text: ['Oltre alle proprie Re 475, BLS Cargo noleggia locomotive Vectron della serie 193. Secondo l’elenco della flotta si tratta di sei locomotive e di altre quattro, che circolano in parte con i colori dell’operatore combinato Hupac.', 'Omologate fino ai Paesi Bassi e in Italia, circolano soprattutto nel traffico di transito.'],
  kennzahlen: [['10', 'locomotive noleggiate'], ['fino a 6400 kW', 'potenza'], ['5', 'paesi'], ['Siemens', 'costruttore']],
  daten: { 'Bauart': 'locomotiva elettrica policorrente Bo’Bo’', 'Eigentümer': 'diversi noleggiatori, tra cui BRCE', 'Betreiber': 'BLS Cargo (noleggiata)', 'Fahrzeugnummern': 'tra l’altro 193 494–496 (Hupac), 193 711, 713, 716 (documentate da foto)', 'Leistung': 'fino a 6400 kW', 'Zulassung': 'Germania, Austria, Svizzera, Italia, Paesi Bassi', 'Anzahl': '6 + 4 noleggiate' },
  specNote: 'Le Vectron proprie di BLS Cargo si chiamano Re 475 e hanno una pagina propria.',
  bilder: ['193 716 di BLS Cargo', '193 496 con i colori Hupac e il Melzo-Shuttle presso Angeren (NL)']
});
uebZug('bls-fccnpps', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Nel 2012 BLS Netz AG ha ordinato al costruttore LEGIOS 20 carri per pietrisco a due assi numerati 21 85 64 39 720–739.'] }, { titel: 'Impiego e tecnica', p: ['I carri servono soprattutto ai trasporti propri della BLS verso i cantieri. Come carri della categoria F si scaricano verso il basso per gravità.'] }, { titel: 'Dotazione e accessibilità', liste: ['Due assi', 'Scarico verso il basso per gravità', 'Nessuna trazione propria, nessun compartimento passeggeri'] }],
  typ: 'Carri per pietrisco a due assi di BLS Netz SA',
  text: ['Nel 2012 BLS Netz SA ha ordinato al costruttore LEGIOS 20 carri per pietrisco a due assi. Servono soprattutto per i trasporti propri verso i cantieri.', 'Come carri della categoria F, si scaricano verso il basso per gravità.'],
  kennzahlen: [['20', 'carri'], ['2', 'assi'], ['2012', 'acquisto'], ['LEGIOS', 'costruttore']],
  daten: { 'Bauart': 'carro per pietrisco a due assi', 'Betreiber': 'BLS Netz SA' },
  bilder: ['Fccnpps 722 a Spiez (2012)']
});
uebZug('bls-faccnpps', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Nel 2023 BLS Netz AG ha completato i suoi carri per pietrisco con 20 carri a quattro assi di Waggonbau Niesky, numerati 31 85 6937 700–719.'] }, { titel: 'Impiego e tecnica', p: ['I carri portano il pietrisco ai cantieri della BLS. Sono costruiti in modo simile ai Fccnpps a due assi del 2012 e si scaricano verso il basso per gravità.'] }, { titel: 'Dotazione e accessibilità', liste: ['Quattro assi', 'Scarico verso il basso per gravità', 'Nessuna trazione propria, nessun compartimento passeggeri'] }],
  typ: 'Carri per pietrisco a quattro assi di BLS Netz SA',
  text: ['Nel 2023 BLS Netz SA ha completato i suoi carri per pietrisco con 20 carri a quattro assi. Sono costruiti in modo simile ai Fccnpps a due assi del 2012.', 'Sono stati prodotti nello stabilimento di Niesky, in Germania.'],
  kennzahlen: [['20', 'carri'], ['4', 'assi'], ['2023', 'acquisto'], ['Niesky', 'costruttore']],
  daten: { 'Bauart': 'carro per pietrisco a quattro assi', 'Betreiber': 'BLS Netz SA' }
});
uebZug('bls-xas', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Nel 1990 sono stati costruiti sette carri ribaltabili Xas. In seguito sono passati a BLS Netz AG e hanno ricevuto i numeri 99 85 93 53 770–776 al posto di 80 63 98 62 770–776.'] }, { titel: 'Impiego e tecnica', p: ['I carri trasportano materiale di scavo dai cantieri. A seconda del registro sono elencati come carri di servizio o come carri merci.'] }, { titel: 'Dotazione e accessibilità', liste: ['Cassa ribaltabile', 'Nessuna trazione propria, nessun compartimento passeggeri'] }],
  typ: 'Vecchi carri ribaltabili per materiale di scavo',
  text: ['I sette carri ribaltabili Xas sono stati costruiti nel 1990 e trasportano materiale di scavo dai cantieri. In seguito sono passati a BLS Netz SA e hanno ricevuto nuovi numeri.', 'A seconda del registro sono classificati come carri di servizio o come carri merci.'],
  kennzahlen: [['7', 'carri'], ['1990', 'costruiti'], ['770–776', 'numeri'], ['scavo', 'carico']],
  daten: { 'Bauart': 'carro ribaltabile', 'Betreiber': 'BLS Netz SA', 'Fahrzeugnummern': '80 63 98 62 770–776, poi 99 85 93 53 770–776' },
  bilder: ['Xas 776 a Heustrich-Emdthal (2007)']
});
uebZug('bls-fans-u', {
  typ: 'Vecchi carri ribaltabili per materiale di scavo',
  text: ['Nove carri ribaltabili Fans-u del 1990 trasportano materiale di scavo dai cantieri per BLS Netz SA.', 'In passato BLS Cargo possedeva altri Fans-u per il materiale di scavo dei cantieri AlpTransit (NFTA). Questi carri 510–530 sono stati venduti nel 2010.'],
  kennzahlen: [['9', 'carri'], ['1990', 'costruiti'], ['500–508', 'numeri'], ['scavo', 'carico']],
  daten: { 'Bauart': 'carro ribaltabile a quattro assi', 'Betreiber': 'BLS Netz SA', 'Fahrzeugnummern': '31 63 6770 500–508, poi 31 85 6770 500–508' },
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['I nove carri ribaltabili sono stati costruiti nel 1990. Presso BLS Netz AG portano oggi i numeri 31 85 6770 500–508, prima 31 63 6770 500–508.'] }, { titel: 'Impiego e tecnica', p: ['I carri trasportano materiale di scavo dai cantieri della BLS.'] }, { titel: 'Dotazione e accessibilità', liste: ['Quattro assi', 'Cassa ribaltabile', 'Nessuna trazione propria, nessun compartimento passeggeri'] }, { titel: 'I carri NFTA di BLS Cargo', p: ['I carri 510–529 (costruiti nel 2000) e 530 (1995) appartenevano a BLS Cargo e trasportavano il materiale di scavo dei cantieri NFTA. Nell’aprile 2010 sono stati venduti a RTS e nel 2014 ceduti a MBC.'] }],
  bilder: ['Fans-u 505 a Heustrich-Emdthal (2007)']
});
uebZug('bls-schleiffahrzeug', {
  name: 'Veicolo di molatura', beiname: 'strada-rotaia',
  typ: 'Veicolo strada-rotaia per molare rotaie e scambi',
  text: ['Il veicolo di molatura è il più recente veicolo di manutenzione della BLS. Circola su strada e su binario. Mole montate sotto il veicolo molano rotaie e scambi.', 'Così una squadra della BLS può reagire rapidamente ai difetti delle rotaie e molare preventivamente gli scambi importanti, oltre ai grandi treni di molatura.'],
  kennzahlen: [['strada + binario', 'strada-rotaia'], ['mole', 'utensile'], ['2025', 'primo impiego'], ['Spiez', 'primo luogo d’impiego']],
  daten: { 'Bauart': 'veicolo strada-rotaia per la molatura delle rotaie', 'Betreiber': 'BLS Netz SA', 'Einsatz': 'molatura di rotaie e scambi' },
  specNote: 'La BLS ha ricevuto il veicolo a fine 2024; il primo impiego effettivo era previsto a inizio 2025 a Spiez. La BLS non indica costruttore né dati tecnici.',
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['La BLS ha rilevato il veicolo a fine 2024; il primo impiego reale era previsto a inizio 2025 a Spiez. La BLS non indica costruttore né dati tecnici.'] }, { titel: 'Impiego e tecnica', p: ['Con esso una squadra propria della BLS può reagire rapidamente ai difetti delle rotaie e molare preventivamente gli scambi importanti, in aggiunta ai grandi treni di molatura.'] }, { titel: 'Dotazione e accessibilità', liste: ['Circola su strada e su binario', 'Mole sotto il veicolo per rotaie e scambi', 'Nessun compartimento passeggeri'] }, { titel: 'Perché molare?', p: ['Il carico delle ruote crea sulle rotaie sottili fessure e deformazioni. La molatura ripristina il profilo originale della rotaia. Così rotaie e scambi durano di più e i treni viaggiano più silenziosi.'] }]
});
uebZug('bls-hilfswagen', {
  abschnitte: [{ titel: 'Costruttore e composizione della flotta', p: ['Il carro di soccorso è entrato in servizio nel 2011 e appartiene al servizio d’intervento di BLS AG. È composto dal carro di soccorso vero e proprio e da un carro supplementare. La BLS non indica un costruttore.'] }, { titel: 'Impiego e tecnica', p: ['Interviene in caso di deragliamenti e altri guasti per recuperare veicoli e prestare aiuto tecnico. Insieme i due carri sono lunghi 46 m e pesano 101,5 t.'] }, { titel: 'Dotazione e accessibilità', liste: ['Attrezzatura per recupero e aiuto tecnico', 'Carro supplementare', 'Nessun compartimento passeggeri'] }],
  name: 'Carro di soccorso',
  typ: 'Carro di soccorso con carro supplementare per recupero e assistenza tecnica',
  text: ['Il carro di soccorso fa parte del servizio d’intervento, il corpo pompieri aziendale della BLS. Interviene in caso di deragliamenti e altri guasti per recuperare veicoli e prestare assistenza tecnica.', 'È composto dal carro di soccorso vero e proprio e da un carro supplementare.'],
  kennzahlen: [['2011', 'messa in servizio'], ['46 m', 'lunghezza'], ['101,5 t', 'peso'], ['2', 'carri']],
  daten: { 'Bauart': 'carro di soccorso con carro supplementare', 'Betreiber': 'BLS SA, servizio d’intervento', 'Einsatz': 'recupero, intervento tecnico' }
});

/* ---- 33-einsatz-bls-tpf.js ---- */
/* Italiano – carte «Dove circola?» per BLS e TPF */
uebDict({
  'S-Bahn Bern': 'S-Bahn di Berna',
  'Im Transitverkehr von den Nordseehäfen Rotterdam und Antwerpen über Deutschland und die Schweiz bis Norditalien, durch den Lötschberg-Simplon und den Gotthard.': 'In transito dai porti del Mare del Nord, Rotterdam e Anversa, attraverso la Germania e la Svizzera fino al Nord Italia, per il Lötschberg-Sempione e il Gottardo.'
});
uebEinsatz({
  'bls-rabe-528': 'Sulle S-Bahn di Berna e Lucerna, come RegioExpress Berna–Spiez–Zweisimmen e sulla linea di valico del Lötschberg fino a Briga e Domodossola, nonché come InterRegio Berna–Neuchâtel–La Chaux-de-Fonds.',
  'bls-rabe-515': 'Sulla S-Bahn di Berna (S1 Friburgo–Berna–Thun, S3/S31 Bienne–Berna–Belp) e come InterRegio Berna–Burgdorf–Olten e Berna–Bienne.',
  'bls-rabe-535': 'Nell’Oberland bernese (Zweisimmen–Spiez, Spiez–Interlaken Ost, Spiez–Frutigen) e sulla S-Bahn di Berna tra Thun, Berna, Burgdorf e Soletta.',
  'bls-rabe-525': 'Sulle S-Bahn di Berna e Lucerna, tra l’altro Berna–Neuchâtel, Berna–Langnau, Lyss–Büren an der Aare e Lucerna–Willisau, oltre che come RegioExpress Domodossola–Briga–Visp.',
  'bls-re-465': 'In testa al GoldenPass Express tra Interlaken Ost e Zweisimmen, ai treni navetta per auto del Lötschberg e del Sempione e a treni merci sull’asse Lötschberg-Sempione.',
  'bls-re-475': 'Nel traffico merci attraverso la Svizzera sugli assi Lötschberg-Sempione e Gottardo, a livello internazionale fino ai Paesi Bassi, in Belgio e in Italia.',
  'bls-re-485': 'Nel traffico merci in Svizzera e verso la Germania, sugli assi Lötschberg-Sempione e Gottardo.',
  'bls-re-486': 'Nel transito merci attraverso le Alpi, anche con l’autostrada viaggiante; omologazione per Svizzera, Germania, Italia e Austria.',
  'bls-br-185': 'Nel traffico merci di BLS Cargo in Svizzera, Germania e Austria.',
  'bls-br-186': 'Nel transito merci di BLS Cargo, anche sull’asse Rotterdam–Italia con il Melzo-Shuttle.',
  'bls-br-187': 'Nel traffico merci di BLS Cargo in Svizzera, Germania e Austria.',
  'bls-br-193': 'Nel transito merci di BLS Cargo, fino ai Paesi Bassi e in Italia.',
  'tpf-rabe-527': 'Come RegioExpress Berna–Friburgo–Romont–Bulle–Broc e sul RER Fribourg tra Friburgo, Morat e Neuchâtel.',
  'tpf-rbde-560': 'Sul RER Fribourg: RegioExpress Berna–Friburgo–Bulle–Broc e S20/S21 Friburgo–Morat–Ins–Neuchâtel.',
  'tpf-abe-4-12': 'Sulla rete a scartamento metrico delle TPF: S50 Palézieux–Châtel-St-Denis–Bulle–Montbovon e S51 fino a Gruyères. Lo scartamento metrico è tracciato a tratteggio e in modo semplificato.',
  'tpf-be-4-4-120': 'Sulla rete a scartamento metrico delle TPF tra Palézieux, Bulle, Gruyères e Montbovon. Lo scartamento metrico è tracciato a tratteggio e in modo semplificato.',
  'tpf-funiculaire': 'Nella città di Friburgo, tra la città bassa (Neuveville) e St-Pierre.'
});

/* ---- 34-sob.js ---- */
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

/* ---- 35-einsatz-bls-tpf-alt.js ---- */
/* Italiano – carte «Dove circola?» per i veicoli BLS e TPF più vecchi */
uebEinsatz({
  'bls-re-425': 'Un tempo in testa ai treni rapidi Berna–Briga, ai treni merci Basilea–Domodossola e al trasporto auto Kandersteg–Goppenstein.',
  'bls-am-843': 'Sulla rete BLS, per treni cantiere, manovre e nel servizio d’intervento.',
  'bls-fccnpps': 'Per cantieri e manutenzione sulla rete BLS, per esempio al Lötschberg, nel Simmental, nel Gürbetal e sulla Berna–Neuchâtel.',
  'bls-faccnpps': 'Per cantieri e manutenzione sulla rete BLS, per esempio al Lötschberg, nel Simmental, nel Gürbetal e sulla Berna–Neuchâtel.',
  'bls-xas': 'Per cantieri e manutenzione sulla rete BLS, per esempio al Lötschberg, nel Simmental, nel Gürbetal e sulla Berna–Neuchâtel.',
  'bls-fans-u': 'Per cantieri e manutenzione sulla rete BLS, per esempio al Lötschberg, nel Simmental, nel Gürbetal e sulla Berna–Neuchâtel.',
  'bls-schleiffahrzeug': 'Sulla rete BLS; il primo impiego reale era previsto a Spiez.',
  'bls-rangier': 'In stazioni e officine sulla rete BLS.',
  'bls-lrz': 'Dal centro d’intervento di Frutigen, tra l’altro per la galleria di base del Lötschberg e la linea di valico.',
  'bls-hilfswagen': 'Per recuperi e aiuto tecnico sulla rete BLS.',
  'bls-ae-4-4': 'Un tempo in testa a treni viaggiatori e merci sulla linea di valico del Lötschberg.',
  'bls-ae-6-8': 'Un tempo in testa a treni pesanti sul Lötschberg, dal 1939 anche a treni rapidi in pianura.',
  'bls-ae-8-8': 'Un tempo in testa a treni pesanti sul Lötschberg, da ultimo anche a treni di materiale di scavo dalla galleria di base del Lötschberg.',
  'bls-be-5-7': 'Un tempo prima locomotiva elettrica della ferrovia del Lötschberg, in testa a treni rapidi e merci.',
  'bls-ce-6-6': 'Un tempo in testa a treni merci, per esempio tra Thun e Interlaken, dal 1928 sulla Berna–Neuchâtel.',
  'bls-ce-4-6': 'Un tempo su linee secondarie del gruppo BLS, per esempio Spiez–Erlenbach–Zweisimmen.',
  'bls-ce-4-4': 'Un tempo sulle linee della GBS: Berna–Belp–Thun e Berna–Schwarzenburg.',
  'bls-bcfe-4-6': 'Un tempo nel traffico viaggiatori del gruppo BLS, per esempio sulla Berna–Neuchâtel, a cui apparteneva la 736.',
  'bls-be-4-4-761': 'Un tempo sulla Berna–Neuchâtel, anche in testa a treni internazionali Berna–Parigi; oggi per corse speciali.',
  'bls-ce-2-4': 'Un tempo presso il gruppo BLS; le linee esatte non sono documentate.',
  'bls-abde-4-8': 'Un tempo nel traffico regionale, per esempio nel Simmental, tra Spiez e Interlaken e nel Gürbetal. Il treno conservato si trova a Kerzers-Kallnach.',
  'bls-rbde-565': 'Un tempo nel traffico regionale e S-Bahn della BLS, tra l’altro nella S-Bahn di Berna.',
  'bls-rbde-566': 'Un tempo tra l’altro su Spiez–Frutigen, Briga–Goppenstein, nella S-Bahn di Berna e tra Thun e Soletta.',
  'bls-rabe-526': 'Presso la BLS nel traffico regionale; dal 2013 presso le FFS nel Giura da Bienne, dal 2018 presso Thurbo.',
  'bls-ew-iii': 'Da ultimo soprattutto come RegioExpress Berna–Neuchâtel.',
  'bls-re-420': 'Da ultimo in testa alle carrozze della GoldenPass Line tra Interlaken Ost e Zweisimmen.',
  'tpf-tm-87': 'Sulla rete a scartamento normale delle TPF, per esempio Romont–Bulle–Broc e Friburgo–Morat–Anet.',
  'tpf-tmf-17': 'Sulla rete a scartamento metrico delle TPF tra Palézieux, Bulle, Gruyères e Montbovon. Lo scartamento metrico è tratteggiato e semplificato.',
  'tpf-gem-18': 'Sulla rete a scartamento metrico delle TPF tra Palézieux, Bulle, Gruyères e Montbovon. Lo scartamento metrico è tratteggiato e semplificato.',
  'tpf-x-925': 'Sulla rete a scartamento metrico delle TPF; con il carro portante Sgjs X113 la gru lavora anche sulla rete a scartamento normale. Lo scartamento metrico è tratteggiato.',
  'tpf-retrozug': 'Per corse speciali sulla rete a scartamento metrico delle TPF. Lo scartamento metrico è tratteggiato e semplificato.',
  'gfm-be-111': 'Un tempo sulla rete a scartamento metrico della CEG e delle GFM nella Gruyère. Lo scartamento metrico è tratteggiato e semplificato.',
  'gfm-be-115': 'Un tempo sulla rete a scartamento metrico delle GFM e delle TPF. Lo scartamento metrico è tratteggiato e semplificato.',
  'gfm-be-131': 'Un tempo sulla rete a scartamento metrico delle GFM. Lo scartamento metrico è tratteggiato e semplificato.',
  'gfm-bde-141': 'Un tempo sulla rete a scartamento metrico delle GFM, dapprima in testa a treni di ghiaia. Lo scartamento metrico è tratteggiato e semplificato.',
  'gfm-be-151': 'Un tempo come treno navetta sulla rete a scartamento metrico di GFM e TPF. Lo scartamento metrico è tratteggiato e semplificato.',
  'gfm-gde-101': 'Un tempo sulla rete a scartamento metrico delle GFM; oggi alla MOB tra Montreux e Zweisimmen. Lo scartamento metrico è tratteggiato e semplificato.',
  'gfm-te-22': 'Un tempo in manovra sulla rete a scartamento metrico delle GFM: l’11 a Bulle, il 12 a Montbovon.',
  'gfm-te-44': 'Un tempo in manovra a Broc-Fabrique e in testa a treni cantiere sulla rete a scartamento metrico delle GFM.',
  'gfm-tm-15': 'Un tempo in testa a treni cantiere sulla rete a scartamento metrico delle GFM e in manovra a Bulle.',
  'gfm-abde-24': 'Un tempo sulla linea a scartamento normale Friburgo–Morat–Anet.',
  'gfm-abde-44': 'Un tempo sulle linee a scartamento normale delle GFM.',
  'gfm-rbde-567': 'Un tempo come treni navetta sulla rete a scartamento normale di GFM e TPF.',
  'gfm-ee-91': 'Un tempo in manovra sulla rete a scartamento normale delle GFM, per esempio a Bulle.',
  'gfm-wagen': 'Un tempo sulla rete a scartamento metrico della CEG e delle GFM. Lo scartamento metrico è tratteggiato e semplificato.'
});

/* ---- 36-transn.js ---- */
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
  daten: { 'Bauart': 'automotrice elettrica con compartimento bagagli', 'Fahrzeugnummern': '3 e 5', 'Länge': '16,6 m', 'Breite': '2,68 m', 'Gewicht': '24 t a vuoto', 'Sitzplätze': '42 posti a sedere, 146 posti in totale' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Reggiane, in Italia, costruì le automotrici nel 1950, con equipaggiamento di TIBB e SAAS. Ramseier & Jenzer a Bienne modernizzò la 3 nel 1985/86 e la 5 nel 1986/87. transN impiega oggi queste due automotrici.'] },
      { titel: 'Impiego e tecnica', p: ['Le automotrici circolano sulla R24, la linea di poco più di 4 km tra Le Locle e Les Brenets. Nel 2020 cantone e comuni prevedevano di sostituire la ferrovia con un bus dal 2025; a fine 2023 è stato deciso che i treni circoleranno almeno fino al 2031.', 'Un’automotrice è lunga 16,6 m, pesa 24 t, ha 480 kW e viaggia fino a 60 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['146 posti in totale, a sedere e in piedi', 'Compartimento bagagli (lettera D)', 'Accessi alti con gradini'] }
    ],
  bilder: ['BDe 4/4 5 esce dalla galleria dei Petits-Monts presso Le Locle (2020)', 'BDe 4/4 5 a Les Brenets (2018)', 'BDe 4/4 5 delle CMN a Les Brenets (1998)']
});
uebZug('trn-tm-44-normal', {
  beiname: '235 077 scartamento normale',
  typ: 'Trattore da cantiere diesel-elettrico Stadler',
  text: ['transN possiede due moderni trattori da cantiere Tm 4/4 di Stadler, uno per lo scartamento normale e uno per quello metrico. Questo, il Tm 235 077, lavora dal 2023 sulla rete a scartamento normale.', 'Ha una gru e una superficie di carico per il materiale.'],
  kennzahlen: [['1', 'veicolo (235 077)'], ['80 km/h', 'velocità massima (tipo)'], ['480 kW', 'potenza del motore (tipo)'], ['2023', 'primo impiego']],
  daten: { 'Bauart': 'trattore da cantiere diesel-elettrico con gru', 'Motor': 'Mercedes-Benz OM 473 (tipo)', 'Länge': '18,0 m (tipo)', 'Gewicht': '52 t (tipo)', 'Leistung': '480 kW (tipo)', 'Höchstgeschwindigkeit': '80 km/h (tipo)' },
  specNote: 'I valori con «tipo» descrivono la famiglia di veicoli secondo la Schweizer Eisenbahn-Revue 3/2023. Le prescrizioni d’esercizio indicano 60 t per questo trattore nella tabella dei treni; il motivo della differenza non è chiarito.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Nel maggio 2021 transN ordinò a Stadler quattro veicoli affini insieme a TRAVYS e NStCM; una macchina a scartamento normale e una a scartamento metrico erano destinate a transN. Entrambe arrivarono nel 2023.', 'Il trattore a scartamento normale porta il numero 98 85 5 235 077-5, in breve Tm 235 077. Non va confuso con il vecchio Tm 237 312.'] },
      { titel: 'Impiego e tecnica', p: ['Il trattore serve per costruzione, manutenzione e trasporto di materiale sulla rete a scartamento normale di transN, per esempio sulla linea Travers–Buttes.', 'Il tipo è diesel-elettrico: un motore Mercedes-Benz OM 473 da 480 kW alimenta quattro motori di trazione. Il trattore è lungo 18,0 m, pesa 52 t e viaggia fino a 80 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Gru Palfinger con sbraccio fino a 17 m (tipo)', 'Piattaforma di carico da 12 t, trasporto di rotaie fino a 15 m (tipo)', 'Radiocomando (tipo)', 'Nessun compartimento passeggeri'] }
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

/* ---- 37-re430-ama832.js ---- */
/* Italiano – Re 430 e Ama 832 */
uebDict({ 'Dieselgenerator': 'Generatore diesel', 'Eigentümer': 'Proprietario', 'Bestellt': 'Ordinata', 'Plattform': 'Piattaforma', 'SBB Cargo AG': 'FFS Cargo SA', 'LokRoll 2 AG': 'LokRoll 2 SA' });

uebZug('ama-832', {
  typ: 'Locomotiva da manovra ibrida con generatore diesel e batteria',
  text: ['L’Ama 832 è una locomotiva da manovra ibrida a tre assi di Alstom della famiglia Prima H3. A seconda dell’impiego viaggia da metà a tre quarti del tempo con la corrente della batteria.', 'FFS Cargo ha noleggiato dodici locomotive per dieci anni; appartengono a LokRoll 2 SA.'],
  kennzahlen: [['12', 'locomotive noleggiate'], ['100 km/h', 'velocità massima'], ['350 kW', 'generatore diesel'], ['2018', 'ordinazione']],
  daten: { 'Antrieb': 'ibrida: generatore diesel e batteria', 'Dieselgenerator': '350 kW, livello di emissioni IIIB', 'Länge': '12,8 m', 'Leistung': '790 kW (catalogo dei tipi di marcia)', 'Anzahl': '12 noleggiate' },
  specNote: 'La designazione e la potenza di 790 kW seguono il catalogo dei tipi di marcia FFS 2026; il solo generatore diesel ha 350 kW. Le locomotive non appartengono alle FFS.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['LokRoll 2 SA, fondata dal fondo Reichmuth Infrastruktur Schweiz, ordinò nell’ottobre 2018 ad Alstom dodici Prima H3 per circa 40 milioni di euro. Sono noleggiate a FFS Cargo per dieci anni. Sono state costruite da Alstom in Germania; le consegne erano previste da ottobre 2020.', 'Già dal 2017 FFS Cargo noleggiava tre Prima H3 da Alstom, per aree chiuse del porto di Basilea-Kleinhüningen e in Argovia.'] },
      { titel: 'Impiego e tecnica', p: ['FFS Cargo impiega le locomotive per le manovre, per comporre e spostare carri merci, per esempio a St. Margrethen. A seconda dell’impiego viaggiano dal 50 al 75 % del tempo con la batteria, il che permette un esercizio senza emissioni in città o nei capannoni.', 'Il generatore diesel ha 350 kW. La locomotiva è lunga 12,8 m, pesa 67 t, ha 240 kN di sforzo all’avviamento e viaggia fino a 100 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Cabina di guida al centro', 'Batteria per viaggiare senza emissioni', 'ETCS per la rete svizzera', 'Nessun pantografo, nessun compartimento passeggeri'] }
    ],
  bilder: ['Nuova Ama 832 della squadra di manovra di St. Margrethen (2021)', 'Ama 832 nuova di fabbrica a St. Margrethen (2021)']
});
uebZug('h-re430', {
  typ: 'Locomotiva elettrica per treni rapidi e merci del Gottardo (storico)',
  text: ['La Re 4/4 III, poi Re 430, è la versione a maggiore sforzo di trazione della Re 4/4 II. Un rapporto di trasmissione diverso le dà più trazione in salita; in cambio viaggia al massimo a 125 invece di 140 km/h.', 'Le ultime locomotive delle FFS furono ritirate nell’aprile 2023.'],
  kennzahlen: [['20', 'locomotive FFS (11351–11370)'], ['125 km/h', 'velocità massima'], ['4700 kW', 'potenza oraria'], ['1970', 'entrata in servizio']],
  daten: { 'Länge': '15,41 m tra i respingenti', 'Gewicht': '80 t, 84 t con climatizzazione', 'Leistung': '4700 kW oraria, 3700 kW continua', 'Höchstgeschwindigkeit': '125 km/h (all’inizio 120 km/h)', 'Nummern': '11351–11370, poi Re 430 351–370; più 11350 ex SOB 41', 'Ausmusterung': 'fino all’8 aprile 2023' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM, BBC, MFO e SAAS costruirono le locomotive. Le FFS ne ricevettero 20 nel 1970 e 1971, numerate 11351–11370. Le 11351–11353 passarono alla SOB dal 1983 al 1985 e tornarono dal 1994 al 1996; nello stesso scambio la SOB 41 arrivò alle FFS come 11350.', 'Locomotive affini circolavano su ferrovie private: EBT 111–113, VHB 141 e SMB 181, poi come Re 436 e Re 430 presso RM e Widmer Rail Services.'] },
      { titel: 'Impiego e tecnica', p: ['La Re 4/4 III fu costruita per treni rapidi e merci al Gottardo. In seguito circolò soprattutto nel traffico merci, per lo più presso FFS Cargo. La 11365 fu ritirata dopo una collisione a Basilea nel 2013; le ultime due, la 430 356 e la 11370, furono ritirate l’8 aprile 2023.', 'La locomotiva è lunga 15,41 m, ha 4700 kW di potenza oraria e 3700 kW continua, 280 kN di sforzo all’avviamento e viaggia fino a 125 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Comando multiplo, per esempio con la Re 6/6 come «Re 10/10»', 'Nessun compartimento passeggeri'],
        p: ['Con i treni viaggiatori l’accessibilità dipendeva dalle carrozze.'] }
    ],
  bilder: ['Re 430 364 (11364) a Soletta (2019)', 'Re 4/4 III 11360 e Re 421 a Frauenfeld (2012)', 'Re 4/4 III 11350, ex SOB 41, a Rotkreuz (2012)', 'Re 4/4 III 11364 con carrozze a due piani a Veytaux (2011)']
});
uebEinsatz({
  'ama-832': 'In manovra presso FFS Cargo in Svizzera, per esempio a St. Margrethen.',
  'h-re430': 'Un tempo in testa a treni rapidi e merci al Gottardo, poi soprattutto nel traffico merci di FFS Cargo su tutta la rete.'
});

/* ---- 38-transn-historisch.js ---- */
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

/* ---- 39-rhb.js ---- */
/* Italiano – Ferrovia retica (RhB) */
uebDict({
  'Rhätische Bahn': 'Ferrovia retica', 'RhB': 'RhB', 'Stadler': 'Stadler',
  '11 kV 16,7 Hz': '11 kV 16,7 Hz', '1000 V Gleichstrom': '1000 V corrente continua', '11 kV 16,7 Hz · 1000 V Gleichstrom': '11 kV 16,7 Hz · 1000 V corrente continua',
  'Kein eigener Antrieb': 'Nessuna trazione propria', 'Diesel': 'diesel'
});

/* ---------- traffico viaggiatori ---------- */
uebZug('rhb-capricorn', {
  typ: 'Elettrotreno regionale Stadler a quattro casse per la rete principale',
  text: ['Il Capricorn è il treno regionale più recente della RhB. Stadler costruisce questi treni a quattro casse dal 2019; trasportano viaggiatori dal 2020.', 'Più treni si possono accoppiare e separare automaticamente. Partono insieme e poi servono destinazioni diverse.'],
  kennzahlen: [['56', 'treni in servizio (3111–3166)'], ['164', 'posti a sedere'], ['120 km/h', 'velocità massima'], ['2020', 'in servizio viaggiatori']],
  daten: { 'Bauart': 'elettrotreno a pianale ribassato, 4 casse', 'Fahrzeugnummern': '3111–3166, ampliamento fino a 3172', 'Länge': '76,4 m tra gli accoppiatori', 'Gewicht': '119 t a vuoto, 146 t a pieno carico', 'Leistung': '1000 kW continui, 1600 kW massimi (alla ruota)', 'Sitzplätze': '35 in 1a, 129 in 2a classe, più 18 strapuntini', 'Anzahl': '56 treni, altri 6 da fine 2026' },
  specNote: 'Dati tecnici secondo Stadler (scheda TMRHB0922e) e la RhB. La RhB indica 1000 kW di potenza continua, Stadler 1600 kW di potenza massima. Una vecchia pagina pubblicitaria indica 114 t senza riferimento chiaro; qui valgono 119 t a vuoto secondo la pagina del progetto RhB.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler costruisce i Capricorn per la RhB. I primi veicoli sono stati costruiti nel 2019; il treno 3111 ha circolato in orario per la prima volta il 17 giugno 2020. La serie di base comprende 56 treni numerati 3111–3166.', 'La RhB annuncia sei altri treni consegnati nel secondo semestre 2026; i registri indicano numeri fino a 3172. Ogni carrozza ha anche un proprio numero, per esempio Be 4/4 31011 nel treno 3111.'] },
      { titel: 'Impiego e tecnica', p: ['Secondo la RhB, i Capricorn circolano su Landquart–Davos–Filisur, Landquart–Scuol, Landquart–St. Moritz e Coira–Disentis/Mustér. Da due a quattro treni possono viaggiare insieme e separarsi a Klosters Platz.', 'La motrice ha quattro assi motori e traina altre tre carrozze. Il treno è lungo 76,4 m, pesa 119 t a vuoto e viaggia fino a 120 km/h. Lo sforzo di trazione all’avviamento è di 142 kN, la potenza di frenatura elettrica fino a 2200 kW.'] },
      { titel: 'Dotazione e accessibilità', liste: ['164 posti a sedere: 35 in 1a e 129 in 2a classe, più 18 strapuntini', 'Tre ampi accessi a pianale ribassato, 2 posti per sedie a rotelle e una toilette accessibile', 'Fino a 12 posti per bici in compartimenti multifunzionali', 'Climatizzazione, due prese per compartimento e immagine della telecamera frontale sugli schermi', 'Fasciatoi in entrambe le toilette'] }
    ],
  bilder: ['Capricorn 3112 presso Bever (2021)', 'Capricorn tra Davos Wolfgang e Davos Laret (2020)', 'Capricorn 3122 e 3119 accoppiati a Davos Dorf (2024)']
});
uebZug('rhb-allegra', {
  typ: 'Elettrotreno bitensione a tre casse per la rete principale e la linea del Bernina',
  text: ['L’Allegra circola in corrente alternata sulla rete principale e in corrente continua sulla linea del Bernina. Collega così le due reti senza cambio di locomotiva.', 'I 15 treni Stadler possono trainare carrozze aggiuntive, come le carrozze panoramiche del Bernina Express.'],
  kennzahlen: [['15', 'treni (3501–3515)'], ['2600 kW', 'potenza (alternata)'], ['100 km/h', 'velocità massima'], ['2010', 'in orario']],
  daten: { 'Bauart': 'elettrotreno bitensione, 3 casse', 'Gewicht': '106 t a vuoto', 'Leistung': '2600 kW (alternata), 2400 kW (continua), alla ruota', 'Sitzplätze': '24 in 1a, 76 in 2a classe, più 14 strapuntini', 'Anzahl': '15 treni' },
  specNote: 'Valori secondo la scheda Stadler SRhBZS1009d. Panoramiche successive indicano valori più alti (2800 kW, 280 kN); senza una scheda più recente qui restano i dati originali.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha consegnato 15 treni. La prima consegna è avvenuta a Landquart il 14 ottobre 2009; il servizio in orario è iniziato nel 2010. L’acquisto è costato circa 150 milioni di franchi.', 'Ogni treno porta il nome di una personalità grigionese.'],
        tabelle: { kopf: ['Treno', 'Nome', 'Treno', 'Nome'], zeilen: [
          ['3501', 'Willem Jan Holsboer', '3509', 'Placidus Spescha'], ['3502', 'Friedrich Hennings', '3510', 'Alberto Giacometti'], ['3503', 'Carlo Janka', '3511', 'Otto Barblan'],
          ['3504', 'Dario Cologna', '3512', 'Jörg Jenatsch'], ['3505', 'Giovanni Segantini', '3513', 'Simeon Bavier'], ['3506', 'Anna von Planta', '3514', 'Steivan Brunies'],
          ['3507', 'Benedetg Fontana', '3515', 'Alois Carigiet'], ['3508', 'Richard Coray', '', '']] } },
      { titel: 'Impiego e tecnica', p: ['Due carrozze di testa motorizzate racchiudono una carrozza rimorchiata; 8 dei 12 assi sono motori. Quattro catene di trazione indipendenti con convertitori IGBT raffreddati ad acqua rendono il treno robusto.', 'Sulla linea del Bernina, l’Allegra traina carrozze aggiuntive su pendenze fino al 70 per mille. Il 20 dicembre 2010 il treno 3502 ha raggiunto 145 km/h nella galleria della Vereina, un record per lo scartamento metrico.'] },
      { titel: 'Dotazione e accessibilità', liste: ['100 posti a sedere: 24 in 1a e 76 in 2a classe, più 14 strapuntini', '2 posti per sedie a rotelle, toilette chiusa accessibile e predellino scorrevole', 'Accesso a pianale ribassato nella parte centrale (480 mm); il resto del pavimento è rialzato', 'Climatizzazione e informazione ai viaggiatori su schermi', 'Vista in avanti dalla 1a classe dietro la cabina'] }
    ],
  bilder: ['Allegra con un treno regionale tra Bernina Lagalb e Ospizio Bernina (2011)', 'Allegra 3504 a Coira (2022)', 'Allegra presso Alp Grüm (2024)']
});
uebZug('rhb-allegra-stz', {
  typ: 'Elettrotreno a quattro casse della rete principale per la S-Bahn di Coira',
  text: ['I cinque Allegra 3101–3105 a quattro casse derivano dall’Allegra bitensione. Circolano solo in corrente alternata e hanno una sola carrozza motorizzata.', 'La RhB li impiega soprattutto nel traffico pendolare attorno a Coira.'],
  kennzahlen: [['5', 'treni (3101–3105)'], ['180', 'posti a sedere'], ['100 km/h', 'velocità massima'], ['2013', 'in orario']],
  daten: { 'Bauart': 'elettrotreno a pianale ribassato, 4 casse', 'Länge': '74,75 m tra gli accoppiatori', 'Gewicht': '113 t a vuoto', 'Leistung': '1400 kW massimi alla ruota', 'Höchstgeschwindigkeit': '100 km/h (tecnicamente 120 km/h)', 'Sitzplätze': '24 in 1a, 156 in 2a classe, più 22 strapuntini', 'Anzahl': '5 treni' },
  specNote: 'Valori secondo la scheda Stadler SRhBSN0910d. La pagina pubblicitaria della RhB indica 140 t senza riferimento chiaro e 1160 kW di potenza continua.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Stadler ha costruito i cinque treni derivandoli dall’Allegra bitensione. Secondo il costruttore circolano in orario dal 2013; alcune carrozze sono state costruite prima.', 'I treni si chiamano 3101 «Meta von Salis», 3102 «Richard La Nicca», 3103 «Hortensia von Gugelberg», 3104 «Achilles Schucan» e 3105 «Angelika Kauffmann». Nonostante la stessa designazione ABe 4/16 non sono Capricorn.'] },
      { titel: 'Impiego e tecnica', p: ['Una motrice traina due carrozze intermedie a pianale ribassato e una carrozza pilota. Due catene di trazione ridondanti con convertitori IGBT raffreddati ad acqua erogano fino a 1400 kW.', 'La RhB li impiega nel traffico pendolare dell’agglomerato di Coira, per esempio sulla S-Bahn Coira–Thusis. Alcune foto li mostrano anche in Engadina.'] },
      { titel: 'Dotazione e accessibilità', liste: ['180 posti a sedere: 24 in 1a e 156 in 2a classe, più 22 strapuntini', 'Accesso a pianale ribassato di 480 mm, porte larghe 1,2 m', 'Zona per sedie a rotelle, spazio multifunzionale e toilette chiusa accessibile', 'Climatizzazione e informazione ai viaggiatori su schermi'] }
    ],
  bilder: ['Allegra 3104 come S-Bahn Coira–Thusis presso Felsberg (2015)', 'Allegra 3101 a Samedan (2021)', '1a classe dell’Allegra 3103 (2016)']
});
uebZug('rhb-alvra', {
  beiname: 'treni articolati 5701–5706',
  typ: 'Treni articolati trainati per la linea dell’Albula',
  text: ['I sei treni Alvra sono composti da carrozze articolate accoppiate in modo fisso. Non hanno trazione propria; li traina una locomotiva.', 'Dal 2016 circolano sulla linea dell’Albula tra Coira e St. Moritz. «Alvra» è il nome romancio dell’Albula.'],
  kennzahlen: [['6', 'treni (5701–5706)'], ['280', 'posti a sedere'], ['4', 'posti per sedie a rotelle'], ['2016', 'in servizio']],
  daten: { 'Bauart': 'treno articolato di 6 carrozze, più una carrozza pilota', 'Antrieb': 'nessuna trazione propria (locomotiva)', 'Fahrzeugnummern': '5701–5706; carrozze pilota At 57801–57806', 'Sitzplätze': '63 in 1a, 217 in 2a classe, più 13 strapuntini', 'Anzahl': '6 treni' },
  specNote: 'Posti secondo la pagina del progetto RhB; valgono per il treno descritto e cambiano con carrozze aggiuntive.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['I treni Alvra 5701–5706 sono composti dalle carrozze articolate A 570, AB 572, B 573, B 574, Bi 576 e B 577. Si aggiungono le carrozze pilota At 57801–57806, con cui il treno inverte la marcia senza che la locomotiva debba manovrare.', 'Le carrozze aggiuntive sono veicoli distinti. Dal 2024 circolano con loro le carrozze per bici BD 56401–56406, trasformate da vecchie carrozze pilota.'] },
      { titel: 'Impiego e tecnica', p: ['I treni circolano dal 2016 sulla linea dell’Albula Coira–St. Moritz e sono trainati da una locomotiva di linea della RhB.', 'In un treno articolato, carrozze corte sono unite in modo fisso. Alcune carrozze hanno una parte a pianale ribassato per l’accesso senza gradini.'] },
      { titel: 'Dotazione e accessibilità', liste: ['280 posti a sedere: 63 in 1a e 217 in 2a classe, più 13 strapuntini', 'Accessi a pianale ribassato con predellino scorrevole, 4 posti per sedie a rotelle e toilette accessibili', 'Climatizzazione e informazione ai viaggiatori', 'Compartimento famiglie con angolo giochi, compartimento tempo libero per attrezzature sportive e compartimento foto con grandi finestrini'],
        tabelle: { kopf: ['Carrozza', 'Funzione'], zeilen: [
          ['A 570', 'carrozza di testa 1a classe con toilette'], ['AB 572', 'carrozza 1a e 2a classe'], ['B 573, B 574', '2a classe con spazio per bici o passeggini'],
          ['Bi 576', 'carrozza di testa 2a classe, pianale ribassato, zona sedie a rotelle, toilette accessibile e compartimento foto'], ['B 577', '2a classe con compartimento famiglie e tempo libero e angolo giochi'],
          ['At 578', 'carrozza pilota 1a classe, pianale ribassato, zona sedie a rotelle e toilette accessibile']] } }
    ],
  bilder: ['Treno Alvra tra Filisur e Alvaneu (2023)', 'Interno di un treno articolato Alvra (2017)', 'Angolo giochi del compartimento tempo libero (2024)', 'Carrozza pilota At 578 di un treno Alvra (2018)']
});
uebZug('rhb-ge44ii', {
  typ: 'Locomotiva elettrica di linea per treni viaggiatori e merci',
  text: ['Per decenni le Ge 4/4 II hanno caratterizzato il traffico sulla rete principale della RhB. SLM e BBC costruirono le 23 locomotive nel 1973 e nel 1984/85.', 'Trainano treni viaggiatori e merci. Dal 2019 alcune sono state ritirate.'],
  kennzahlen: [['23', 'locomotive costruite (611–633)'], ['1700 kW', 'potenza oraria'], ['90 km/h', 'velocità massima'], ['1973', 'prima serie']],
  daten: { 'Bauart': 'locomotiva elettrica', 'Länge': '12,96 m respingenti compresi', 'Leistung': '1700 kW (potenza oraria)', 'Anzahl': '23 costruite' },
  specNote: 'La pagina pubblicitaria della RhB indica 1700 kW come potenza continua, Wikipedia come potenza oraria. Delle 23 locomotive, diverse sono già state demolite (628, 619, 616, 613).',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM costruì le parti meccaniche, BBC l’equipaggiamento elettrico. La prima serie 611–620 arrivò nel 1973, la seconda serie 621–633 nel 1984/85.', 'Le locomotive portano nomi di comuni grigionesi, per esempio 611 «Landquart» o 633 «Zuoz». Da aprile 2024 la 611 circola di nuovo nel verde originale.'] },
      { titel: 'Impiego e tecnica', p: ['Le Ge 4/4 II trainano treni regionali e veloci e treni merci sulla rete in corrente alternata della RhB, anche sulla linea di Arosa. Con le carrozze pilota BDt 1751 e 1752 circolano anche come treni navetta.', 'Quattro motori di trazione erogano 1700 kW. La locomotiva è lunga 12,96 m, pesa 50 t e viaggia fino a 90 km/h. Dal 2016 ricevono il sistema di sicurezza ZSI 127 e un freno doppio. Dal 2019 sono state demolite le 628, 619, 616 e 613.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Freno elettrico reostatico', 'Servizio navetta con le carrozze pilota BDt 1751 e 1752', 'Dal 2016: sistema ZSI 127 e freno doppio'] }
    ],
  bilder: ['Ge 4/4 II 617 a Filisur (2022)', 'Ge 4/4 II 611 «Landquart» in livrea verde a Disentis/Mustér (2024)', 'Ge 4/4 II 622 (2024)']
});
uebZug('rhb-ge44iii', {
  typ: 'Locomotiva elettrica di linea per l’Albula e la Vereina',
  text: ['Le Ge 4/4 III sono le locomotive di linea più potenti della RhB. Le dodici locomotive 641–652 arrivarono dal 1993 al 1999; la 653 è un’ex locomotiva della MOB.', 'Quasi tutte portano una pubblicità colorata. Trainano i treni veloci sull’Albula e i treni auto nella galleria della Vereina.'],
  kennzahlen: [['13', 'locomotive (641–653)'], ['2400 kW', 'potenza continua'], ['100 km/h', 'velocità massima'], ['1993', 'prima locomotiva']],
  daten: { 'Bauart': 'locomotiva elettrica a motori trifase', 'Fahrzeugnummern': '641–652, più 653 (ex MOB 8003)', 'Länge': '16,00 m respingenti compresi', 'Leistung': '2400 kW continui' },
  specNote: 'Valori secondo la pagina pubblicitaria della RhB e Wikipedia. La 653 è stata costruita come MOB 8003; costruzione, acquisto, trasformazione e messa in servizio alla RhB sono eventi distinti.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Dal 1989 la RhB sviluppò la locomotiva con SLM e ABB per assorbire il traffico aggiuntivo dopo l’apertura della galleria della Vereina. La 641 circolò dal 7 dicembre 1993, le 642–652 seguirono fino al 1999 in tre ordinazioni; le 650–652 furono fornite da Adtranz.', 'Nel 2019 la RhB acquistò la locomotiva 8003 della MOB. Servì da modello per l’ammodernamento e circola come 653 «St. Moritz».'] },
      { titel: 'Impiego e tecnica', p: ['Le locomotive trainano i treni veloci sull’Albula, il Glacier Express e i treni auto nella galleria della Vereina. Motori trifase con convertitori GTO erogano 2400 kW in continuo.', 'La locomotiva è lunga 16,00 m, pesa 62 t e viaggia fino a 100 km/h. Dal 2016 sono in corso di ammodernamento; la 644 è stata la prima, con freno doppio, nuovi carrelli e componenti per il sistema ZSI 127.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Trazione trifase con quattro motori', 'Ammodernamento dal 2016: freno doppio, nuovi carrelli, ZSI 127', 'La pubblicità è la decorazione di singole locomotive, non un tipo a sé'] }
    ],
  bilder: ['Ge 4/4 III 641 «Maienfeld» (2023)', 'Ge 4/4 III 644 con la pubblicità del record mondiale (2023)', 'Ge 4/4 III 647 «Grüsch» a St. Moritz (2018)']
});
uebZug('rhb-panorama', {
  name: 'Carrozze panoramiche e scoperte',
  typ: 'Carrozze panoramiche del Bernina Express e carrozze scoperte',
  text: ['Per il Bernina Express la RhB ha carrozze panoramiche proprie con grandi finestrini fino al tetto. A queste si aggiungono carrozze scoperte per l’estate.', 'Le carrozze non hanno trazione propria; le traina un Allegra o una locomotiva.'],
  kennzahlen: [['2000', 'prime carrozze panoramiche'], ['2006/07', 'carrozze Stadler'], ['1a e 2a', 'classe'], ['scoperte', 'carrozze estive']],
  daten: { 'Bauart': 'carrozze panoramiche e carrozze scoperte', 'Fahrzeugnummern': 'Ap 1291–1293, 1301–1306; Bp 2502–2507, 2521–2526; Bps 2511–2515; carrozze scoperte B 2091 segg. e 2111' },
  specNote: 'Numeri secondo il registro delle carrozze di Haribu (stato settembre 2026). Il numero di posti dipende dalla versione e non è indicato senza un piano attuale della carrozza.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le prime carrozze panoramiche sono state costruite nel 2000. Nel 2006/07 Stadler ha consegnato altre carrozze di 1a e 2a classe. Le carrozze di servizio Bps 2511–2515 derivano in parte da carrozze più vecchie.'],
        tabelle: { kopf: ['Gruppo', 'Numeri', 'Costruzione'], zeilen: [
          ['Carrozza panoramica 1a classe', 'Ap 1291–1293', '2000'], ['Carrozza panoramica 1a classe', 'Ap 1301–1306', '2006/07 (Stadler)'], ['Carrozza panoramica 2a classe', 'Bp 2502–2507', '2000'],
          ['Carrozza di servizio 2a classe', 'Bps 2511–2515', '2511 dalla carrozza 2501, le altre 2006/07'], ['Carrozza panoramica 2a classe', 'Bp 2521–2526', '2006/07 (Stadler)']] } },
      { titel: 'Impiego e tecnica', p: ['Il Bernina Express collega Coira con Tirano attraverso l’Albula e il passo del Bernina. Il nome indica il treno e non una serie di veicoli; sulla linea del Bernina le carrozze sono spesso trainate da un Allegra.', 'Le carrozze scoperte dei gruppi 2091 segg. e 2111 derivano dalla trasformazione di carrozze più vecchie. Circolano d’estate, per esempio sulla linea del Bernina e nella gola del Reno.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Grandi finestrini panoramici fino al tetto', 'Carrozze di servizio con disposizione propria', 'Carrozze scoperte senza finestrini per l’estate', 'Nessuna trazione propria'] }
    ],
  bilder: ['Bernina Express con carrozze panoramiche (2018)', 'Carrozza panoramica ad Alp Grüm', 'Carrozza scoperta a Pontresina']
});
uebZug('rhb-glacier', {
  name: 'Carrozze del Glacier Express',
  typ: 'Carrozze panoramiche e di servizio della RhB per il Glacier Express',
  text: ['Il Glacier Express collega St. Moritz e Davos con Zermatt. La RhB fornisce proprie carrozze panoramiche e di servizio, la MGB altre.', 'Dal 2018 esiste la carrozza Excellence Class Aps 1321.'],
  kennzahlen: [['6', 'carrozze panoramiche Ap 1310–1315'], ['7', 'carrozze panoramiche Bp 2531–2537'], ['3', 'carrozze di servizio WRp 3830–3832'], ['2018', 'Excellence Class']],
  daten: { 'Bauart': 'carrozze panoramiche e carrozze di servizio', 'Betreiber': 'RhB (Glacier Express insieme alla MGB)' },
  specNote: 'Numeri secondo i registri di Haribu. Le carrozze della MGB sono veicoli distinti e non sono contate qui.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La quota della RhB comprende le carrozze panoramiche Ap 1310–1315 e Bp 2531–2537 e le carrozze di servizio WRp 3830–3832.', 'La carrozza Excellence Class Aps 1321 deriva dalla Bp 2538 del 2009 ed è stata trasformata nel 2018. È quindi la stessa carrozza, non una in più.'] },
      { titel: 'Impiego e tecnica', p: ['Le carrozze circolano nel Glacier Express sulle reti della RhB e della MGB. Poiché la MGB ha tratte a cremagliera, le carrozze sono equipaggiate di conseguenza; secondo la descrizione di una foto, la carrozza di servizio WRp 3832 non ha ruota dentata di frenatura.', 'Un Glacier Express composto da due convogli viene separato a Disentis/Mustér, perché sulle tratte a cremagliera della MGB vale un peso del treno minore.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Finestrini panoramici fino al tetto', 'Carrozze di servizio WRp per la ristorazione a bordo', 'Excellence Class nell’Aps 1321', 'Nessuna trazione propria'] }
    ],
  bilder: ['Glacier Express nella gola del Reno prima di Ilanz (2009)', 'Carrozza di servizio WRp 3832 del Glacier Express a Disentis/Mustér (2022)']
});
uebZug('rhb-ew', {
  name: 'Carrozze unificate',
  typ: 'Carrozze viaggiatori della RhB per treni regionali e veloci',
  text: ['Le carrozze unificate EW I–EW IV sono le classiche carrozze viaggiatori della RhB. Sono state costruite dagli anni 1960 in più generazioni.', 'Ogni generazione comprende carrozze di lunghezza, classe e stato di trasformazione diversi.'],
  kennzahlen: [['4', 'generazioni (EW I–IV)'], ['1968', 'EW I (AB 1541–1546)'], ['1975', 'EW II (AB 1561–1565)'], ['1983', 'EW III']],
  daten: { 'Bauart': 'carrozze viaggiatori a carrelli', 'Fahrzeugnummern': 'Esempi: AB 1541–1546 (EW I), AB 1561–1565 (EW II), A 1271–1272 e B 2461–2468 (EW III), A 1273–1275 e B 2491–2497 (EW IV)' },
  specNote: 'I registri indicano soprattutto numeri, anni di costruzione, carrelli e freni. Posti e dotazione dipendono dalla singola carrozza e non sono quindi indicati.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le famiglie EW I–EW IV sono gruppi di sviluppo. Esempi dal registro:'],
        tabelle: { kopf: ['Generazione', 'Esempi', 'Costruzione', 'Carrello'], zeilen: [
          ['EW I', 'AB 1541–1546', '1968', 'SWP 68'], ['EW II', 'A 1265–1270, AB 1561–1565', '1975 (AB 1561–1565)', 'SWP 74'],
          ['EW III', 'A 1271–1272, B 2461–2468', '1983', '–'], ['EW IV', 'A 1273–1275, A 1282–1283, B 2391–2393, B 2491–2497', '–', 'SIG 90']] } },
      { titel: 'Impiego e tecnica', p: ['Le carrozze unificate circolano in treni regionali e veloci trainati su tutta la rete, sulla linea del Bernina anche dietro l’Allegra. Le AB 1541–1546 hanno un freno ad aria compressa comandato dal vuoto: un segnale di vuoto comanda il freno, la forza frenante è prodotta dall’aria compressa.', 'Alcune EW III hanno portato temporaneamente numeri a cinque cifre delle serie 531 e 541 prima di riprendere i vecchi numeri. Alcune EW IV portano la decorazione «Arosa Bärenland».'] },
      { titel: 'Dotazione e accessibilità', liste: ['Carrozze di 1a classe (A), di 2a classe (B) e miste (AB)', 'Dotazione diversa secondo generazione e trasformazione', 'Alcune EW I sono state trasformate nel 2002', 'Nessuna trazione propria'] }
    ],
  bilder: ['Treno 1621 con l’Allegra 3515 e carrozze viaggiatori sulla linea del Bernina (2017)']
});
uebZug('rhb-steuerwagen', {
  name: 'Carrozze pilota', beiname: 'BDt, Bt e At',
  typ: 'Carrozze pilota per treni navetta con locomotiva',
  text: ['Con una carrozza pilota un treno trainato può invertire la marcia senza che la locomotiva debba manovrare. Il macchinista comanda la locomotiva dalla cabina della carrozza pilota.', 'La RhB ha diverse famiglie: le carrozze pilota NEVA BDt, le Bt 52801–52808 di Stadler, quelle dei treni Alvra e quelle dei treni auto.'],
  kennzahlen: [['8', 'Bt 52801–52808 (Stadler 2018)'], ['6', 'At 57801–57806 (Alvra)'], ['2', 'BDt 1751–1752 (NEVA)'], ['4', 'BDt dei treni auto']],
  daten: { 'Bauart': 'carrozza pilota senza trazione propria', 'Fahrzeugnummern': 'BDt 1751–1752, Bt 52801–52808, At 57801–57806, BDt 1721–1723 e 1731' },
  specNote: 'Secondo il registro delle carrozze pilota di Haribu (stato 11 settembre 2026). Le carrozze pilota degli elettrotreni Allegra e Capricorn fanno parte di quei treni.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le carrozze pilota NEVA BDt 1753–1758 sono state trasformate nel 2024 nelle carrozze per bici BD 56401–56406.'],
        tabelle: { kopf: ['Famiglia', 'Numeri', 'Nota'], zeilen: [
          ['NEVA', 'BDt 1751–1752', 'per Ge 4/4 II ed elettrotreni'], ['Universale', 'Bt 52801–52808', 'Stadler 2018'], ['Alvra', 'At 57801–57806', 'per i treni articolati 5701–5706'],
          ['Treni auto Vereina', 'BDt 1721–1723, 1731', 'per il trasporto auto'], ['Treno navetta Be 4/4', 'ABDt 1716', 'accantonata']] } },
      { titel: 'Impiego e tecnica', p: ['La carrozza pilota ha una cabina ma nessun motore di trazione. La potenza viene dalla locomotiva all’altra estremità del treno.', 'Secondo il registro, le BDt 1751 e 1752 sono adatte alle Ge 4/4 II e agli elettrotreni. Una tale abilitazione vale solo per la combinazione indicata.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Cabina di guida a un’estremità', 'BDt: 2a classe con compartimento bagagli', 'At dei treni Alvra: 1a classe, pianale ribassato, zona sedie a rotelle e toilette accessibile', 'Nessuna trazione propria'] }
    ],
  bilder: ['Carrozza pilota Bt 528 di Stadler', 'Carrozza pilota NEVA BDt 1755 a Coira (2015)']
});
uebZug('rhb-gastro', {
  name: 'Carrozze ristorante e salone', beiname: 'WR e Pullman',
  typ: 'Carrozze ristorante, bar, Pullman e salone della RhB',
  text: ['La RhB possiede carrozze ristorante storiche, carrozze bar e le carrozze Pullman dell’«Alpine Classic Pullman Express». Circolano in treni charter e in corse speciali.', 'Alcune carrozze ristorante risalgono al 1929–1931.'],
  kennzahlen: [['1929', 'carrozze ristorante più antiche'], ['4', 'carrozze Pullman As 1141–1144'], ['3', 'carrozze ristorante WR 3810–3812'], ['2', 'carrozze bar WR-S 3820–3821']],
  daten: { 'Bauart': 'carrozze ristorante, bar e salone' },
  specNote: 'Secondo il registro delle carrozze ristorante di Haribu (stato 13 dicembre 2025). La dotazione vale per la singola carrozza; la disponibilità attuale per charter non è indicata.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Secondo il registro, l’As 1154 è in prestito al Deutsches Museum.'],
        tabelle: { kopf: ['Carrozza', 'Costruzione', 'Nota'], zeilen: [
          ['WR 3810–3812', '1929/30', 'carrozze ristorante storiche'], ['WR 3813', '1931', 'trasformata dall’A 1211'], ['WR 3815', '1984', 'carrozza ristorante'],
          ['WR-S 3820', '1928', 'piano bar, trasformata nel 2010 (prima WR-S 3814)'], ['WR-S 3821', '1929', '«Stiva Retica», trasformata nel 1993'],
          ['As 1141–1144', '1931', 'carrozze Pullman'], ['As 1161', '1929', 'carrozza salone']] } },
      { titel: 'Impiego e tecnica', p: ['Le carrozze Pullman As 1141–1144 circolano nell’«Alpine Classic Pullman Express», per esempio nel 2024 con la storica Ge 4/4 I 605. Le carrozze ristorante viaggiano in treni speciali e charter.', 'Le carrozze di servizio WRp 3830–3832 del Glacier Express sono veicoli più recenti e non carrozze ristorante storiche.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Cucina e sala da pranzo nelle WR', 'Piano bar nella WR-S 3820, bar «Stiva Retica» nella WR-S 3821', 'Compartimenti salone di 1a classe nelle carrozze Pullman', 'Nessuna trazione propria'] }
    ],
  bilder: ['Carrozza Pullman As 1141 a Pontresina (2011)', 'Carrozza ristorante WR 3810 (2009)', 'Nella carrozza ristorante WR 3810 (2014)']
});
uebZug('rhb-vereina', {
  name: 'Treni auto',
  typ: 'Trasporto auto attraverso la galleria della Vereina',
  text: ['Dal 1999 la RhB trasporta automobili attraverso la galleria della Vereina tra Klosters Selfranga e Sagliains in Bassa Engadina.', 'I treni auto sono composti da speciali carri di trasporto su cui le auto salgono da sole e da carrozze pilota.'],
  kennzahlen: [['1999', 'apertura'], ['19 km', 'lunghezza della galleria'], ['4', 'carrozze pilota BDt'], ['2', 'stazioni di carico']],
  daten: { 'Bauart': 'carri per il trasporto auto e carrozze pilota', 'Fahrzeugnummern': 'Skl-tv 8421–8499 (più vecchi), Slp-tvw 71201 segg. e 71301 segg., Slp-tv 71401 segg.; BDt 1721–1723, 1731' },
  specNote: 'Secondo i registri di Haribu. Le serie più recenti contengono anche voci senza anno di costruzione; qui non sono contate come completamente consegnate.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Per il trasporto auto nella galleria della Vereina, aperta nel 1999, la RhB ha acquistato carri speciali. I vecchi carri di carico e trasporto si chiamano Skl-tv (gruppi 8421–8499), gli elementi più recenti Slp-tvw 71201 segg. e 71301 segg. e Slp-tv 71401 segg.', 'Le carrozze pilota BDt 1721–1723 e 1731 fanno parte dei treni auto.'] },
      { titel: 'Impiego e tecnica', p: ['I treni auto fanno la spola tra Klosters Selfranga e Sagliains. Nelle stazioni di carico le auto salgono sui carri tramite rampe e scendono all’altra estremità.', 'Una locomotiva, di solito una Ge 4/4 III, traina o spinge il treno; all’altra estremità c’è una carrozza pilota.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Carri piatti su cui salgono le auto', 'Rampe nelle stazioni di carico di Klosters Selfranga e Sagliains', 'Carrozza pilota con cabina', 'I viaggiatori restano nelle loro auto durante il viaggio'] }
    ],
  bilder: ['Interno di un carro di trasporto del treno auto della Vereina', 'Treno auto a Sagliains (2014)']
});
uebZug('rhb-gepaeckwagen', {
  name: 'Bagagliai, carrozze per bici e di riscaldamento',
  typ: 'Carrozze per bagagli, bici e riscaldamento dei treni',
  text: ['La RhB ha carrozze proprie per i bagagli, le bici e il riscaldamento dei treni. La maggior parte deriva dalla trasformazione di vecchie carrozze viaggiatori.', 'Una carrozza di riscaldamento fornisce energia al treno, ma non si muove da sola.'],
  kennzahlen: [['6', 'carrozze per bici BD 56401–56406 (2024)'], ['8', 'carrozze per bici WS'], ['3', 'carrozze di riscaldamento DS'], ['2024', 'trasformazione più recente']],
  daten: { 'Bauart': 'bagagliai, carrozze per bici e di riscaldamento' },
  specNote: 'Secondo i registri di Haribu. L’anno di trasformazione non è l’anno di costruzione della carrozza originale.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le BD 2471–2474 sono EW II trasformate, la BD 2475 una EW IV trasformata, la BD 2481 deriva dal DZ 4233. Le sei BD 56401–56406 sono state trasformate nel 2024 dalle carrozze pilota NEVA BDt 1753–1758 e circolano come carrozze per bici nei treni Alvra.', 'Anche le carrozze per bici WS 3911–3914, 3921–3922 e 3931–3932 sono vecchie carrozze viaggiatori trasformate.'] },
      { titel: 'Impiego e tecnica', p: ['Una BD ha posti di 2a classe e un compartimento bagagli. Le WS sono attrezzate per le bici.', 'Le carrozze di riscaldamento DS 4220, 4222 e 4226 forniscono energia per riscaldare i treni. Non hanno trazione propria.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Compartimento bagagli (BD)', 'Posti per bici (WS)', 'Energia per il riscaldamento del treno (DS)', 'Nessuna trazione propria'] }
    ],
  bilder: ['Nella carrozza per bici WS 3913 (2014)']
});

/* ---------- merci ---------- */
uebZug('rhb-haik', {
  beiname: 'carri a pareti scorrevoli',
  typ: 'Carri a quattro assi a pareti scorrevoli per merci varie',
  text: ['I carri Haik hanno grandi pareti laterali scorrevoli. Si caricano e scaricano così rapidamente.', 'Alcuni gruppi sono isolati, riscaldati o refrigerati, per esempio per alimenti e bevande.'],
  kennzahlen: [['26 t', 'portata (5101–5135)'], ['30 t', 'portata (dal 5136)'], ['14,7 m', 'lunghezza'], ['1970', 'primi carri']],
  daten: { 'Bauart': 'carro a quattro assi a pareti scorrevoli', 'Fahrzeugnummern': '5101–5135 (Haik-v, Haik-vy), 5136–5140 e 5171–5172; carri isolati 5161 segg.', 'Länge': '14,70 m respingenti compresi', 'Gewicht': '13,2–17,3 t a vuoto', 'Nutzlast': '26 o 30 t' },
  specNote: 'Valori secondo la pagina dei carri merci della RhB. Solo alcuni carri hanno isolamento, riscaldamento a pavimento o gruppo frigorifero; fa fede il singolo carro.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La RhB descrive due gruppi principali e inoltre carri isolati e termoregolati.'],
        tabelle: { kopf: ['Gruppo', 'In servizio', 'Tara', 'Portata', 'Lunghezza'], zeilen: [
          ['5101–5135 (Haik-v, Haik-vy)', '1970/80', '13,2–15,5 t', '26 t', '14,70 m'], ['5136–5140, 5171–5172', '1992', '16,1–17,3 t', '30 t', '14,67 m'],
          ['5161 segg. (isolati, termoregolati)', '–', '–', '–', '–']] } },
      { titel: 'Impiego e tecnica', p: ['I carri portano merci varie, bevande e alimenti nelle valli grigionesi. Molti portano la pubblicità di un cliente; ciò non implica una particolare tecnica di refrigerazione.', 'Alcuni vecchi carri Haik sono stati trasformati in carri portacontainer.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Grandi pareti laterali scorrevoli', 'Carri isolati con riscaldamento a pavimento o gruppo frigorifero (5161 segg.)', 'Quattro assi su due carrelli'] }
    ],
  bilder: ['Carro a pareti scorrevoli Haik-v 5134 a Zernez (2015)', 'Haiqq-tyz 5172 a Ilanz (2013)']
});
uebZug('rhb-uac', {
  beiname: 'carri per cemento',
  typ: 'Carri a quattro assi per merci polverulente (cemento)',
  text: ['Gli Uac 7991–8000 trasportano cemento e altre merci polverulente in serbatoi chiusi. Si scaricano ad aria compressa.', 'Sono entrati in servizio nel 1991.'],
  kennzahlen: [['10', 'carri (7991–8000)'], ['34 t', 'portata'], ['34 m³', 'serbatoio'], ['1991', 'in servizio']],
  daten: { 'Bauart': 'carro a quattro assi per merci polverulente', 'Länge': '12,54 m respingenti compresi', 'Gewicht': '16,8 t a vuoto' },
  specNote: '34 t e 34 m³ sono due grandezze diverse; il peso di un carico dipende dalla sua densità.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['I dieci Uac 7991–8000 sono entrati in servizio nel 1991. Una generazione più vecchia a due assi figura ancora nel registro con l’Uce 8017 del 1959, dato in prestito al Museo Svizzero dei Trasporti nel 2023.'] },
      { titel: 'Impiego e tecnica', p: ['Il cemento viaggia in serbatoi chiusi e viene scaricato ad aria compressa, cioè soffiato fuori dal serbatoio.', 'Il carro è lungo 12,54 m, pesa 16,8 t a vuoto e porta fino a 34 t.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Serbatoi chiusi per merci polverulente', 'Scarico ad aria compressa', 'Quattro assi'] }
    ]
});
uebZug('rhb-za', {
  beiname: 'carri cisterna',
  typ: 'Carri cisterna a quattro assi per oli minerali',
  text: ['I carri cisterna Za portano olio combustibile e carburanti nei Grigioni. La RhB ne ha diversi gruppi con cisterna da 42 o 52 m³.', 'Su alcuni carri più vecchi la cisterna è stata sostituita.'],
  kennzahlen: [['52 m³', 'cisterna più grande'], ['42 m³', 'cisterna più piccola'], ['1973', 'serie di base più vecchia'], ['2005', 'gruppo più recente']],
  daten: { 'Bauart': 'carro cisterna a quattro assi', 'Fahrzeugnummern': '8105–8113, 8121–8130, 8131–8140, 8141–8150 (gruppi originali)', 'Volumen': '42 o 52 m³' },
  specNote: 'Confronto delle serie secondo la pagina dei carri merci della RhB, non un elenco dei carri oggi in servizio. Volume della cisterna, grado di riempimento e densità del prodotto sono grandezze diverse.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Il registro più recente indica solo una parte di queste serie.'],
        tabelle: { kopf: ['Gruppo', 'Costruzione / entrata in servizio', 'Cisterna', 'Lunghezza'], zeilen: [
          ['8105–8113', '2002/03', '42 m³', '13,88 m'], ['8121–8130', '1998', '52 m³', '12,54 m'],
          ['8131–8140', '1973, in parte nuova cisterna 1996/97', '42 m³', '11,04 m'], ['8141–8150', '2004/05', '52 m³', '12,54 m']] } },
      { titel: 'Impiego e tecnica', p: ['I carri riforniscono i Grigioni di oli minerali. Alcuni hanno una condotta di ritorno dei vapori che li recupera durante il riempimento.', 'Una nuova cisterna su un vecchio telaio non fa un carro nuovo; l’anno del telaio e quello della cisterna sono dati distinti.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Cisterna da 42 o 52 m³', 'Condotta di ritorno dei vapori su alcuni carri', 'Quattro assi'] }
    ],
  bilder: ['Carro cisterna della RhB a Samedan (2006)']
});
uebZug('rhb-fac', {
  beiname: 'carri per materiale sfuso',
  typ: 'Carri a quattro assi per materiale sfuso con scarico a gravità',
  text: ['I carri Fac trasportano ghiaia, pietrisco e altri materiali sfusi in tramogge. Si scaricano dal basso; la quantità si può dosare.', 'I vecchi carri ribaltabili Fau servono oggi per il pietrisco usato nei lavori al binario.'],
  kennzahlen: [['21–22 m³', 'tramoggia'], ['34 t', 'portata (fino a)'], ['1968', 'gruppo più vecchio'], ['1993', 'gruppo più recente']],
  daten: { 'Bauart': 'carro a quattro assi per materiale sfuso', 'Nutzlast': '33 o 34 t secondo il gruppo' },
  specNote: 'Valori secondo la pagina dei carri merci della RhB e il registro F di Haribu.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Il registro contiene i gruppi più vecchi 8701–8712 del 1968/71 e quelli più recenti 8726 segg. del 1988/93.', 'I vecchi Fau 8761–8770 con funzione ribaltabile figurano oggi nel registro dei carri di servizio come Xa-u per il pietrisco usato.'] },
      { titel: 'Impiego e tecnica', p: ['Le tramogge contengono da 21 a 22 m³. In basso si aprono delle botole e il carico scende per gravità in modo dosato.', 'Secondo il gruppo, i carri portano 33 o 34 t.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Tramoggia da 21–22 m³', 'Scarico a gravità dosabile', 'Quattro assi'] }
    ],
  bilder: ['Ex carro ribaltabile Fau 8769 a Thusis (2015)']
});
uebZug('rhb-flachwagen', {
  name: 'Carri pianale e a stanti',
  typ: 'Carri pianale per macchine, legname, acciaio e container',
  text: ['I carri pianale e a stanti della RhB trasportano macchine edili, acciaio, materiali da costruzione, legname e container. Gli stanti sostengono il carico lateralmente.', 'I più recenti sono i versatili Re-t 65401–65410 del 2010.'],
  kennzahlen: [['46 t', 'portata Re-t'], ['16,5 m', 'lunghezza'], ['10', 'Re-t 65401–65410'], ['2010', 'Re-t in servizio']],
  daten: { 'Bauart': 'carri pianale e a stanti a quattro assi' },
  specNote: 'Esempi secondo la pagina dei carri pianale della RhB, non un inventario completo. Per i Sgp le pagine della RhB indicano 19,5 e 20 t di tara; divergono anche sull’altezza delle sponde dei Re-t.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['I Re-t 65401–65410 sono entrati in servizio nel 2010, i Sgp 7601–7610 nel 2008.'],
        tabelle: { kopf: ['Gruppo', 'Lunghezza respingenti compresi', 'Portata'], zeilen: [
          ['R 8202–8218', '16,54 m', '33 t'], ['R 8241–8250', '16,14 m', '35 t'], ['R 8261–8270', '16,14 m', '35 t'], ['R 8371–8375', '16,54 m', '42 t'],
          ['R 8381–8385', '16,54 m', '43 t'], ['Re-t 65401–65410', '16,54 m', '46 t'], ['Sgp 7601–7610', '16,54 m', '44 t']] } },
      { titel: 'Impiego e tecnica', p: ['I Re-t pesano 18 t a vuoto e offrono 15,5 m di lunghezza di carico. Hanno un pavimento in larice, sponde girevoli e innestabili, stanti e perni per container.', 'I Sp-w sono attrezzati per il legname tondo, con stanti laterali fissi e cinghie. I Sgp portano legname o container.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Stanti e cinghie per il fissaggio del carico', 'Perni per container (Re-t, Sgp)', 'Pavimento in larice (Re-t)', 'Quattro assi'] }
    ]
});
uebZug('rhb-acts', {
  name: 'Carri ACTS', beiname: 'Sl e Rp',
  typ: 'Carri portanti per container a rulli (ACTS)',
  text: ['ACTS è un sistema con cui i camion possono far scorrere i container direttamente dal carro ferroviario. Il carico passa così dal treno alla strada senza gru.', 'Per questo la RhB ha gli Sl 7751–7771 e gli Rp 65301–65305.'],
  kennzahlen: [['21', 'Sl 7751–7771'], ['44 t', 'portata Sl'], ['46,5 t', 'portata Rp'], ['2000', 'Sl in servizio']],
  daten: { 'Bauart': 'carri portanti a quattro assi per container a rulli', 'Gewicht': 'Sl 16 t, Rp 17,5 t (a vuoto)' },
  specNote: 'Valori secondo la pagina della RhB sui container a rulli. Il registro attuale indica gli Rp 65301–65304; la serie originale arriva al 65305.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Gli Sl 7751–7771 sono entrati in servizio nel 2000/01, gli Rp 65301–65305 nel 2008. Anche carri pianale più vecchi come gli 8202–8218 e 8371–8375 portano container ACTS.'] },
      { titel: 'Impiego e tecnica', p: ['Un camion con gancio tira il container dal carro tramite un telaio girevole. Rotaie di scorrimento, arresti e chiusure tengono i container durante il viaggio.', 'Quali container un carro possa portare dipende dal singolo carro.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Rotaie di scorrimento, arresti e chiusure', 'Telai girevoli per lo scarico', 'Quattro assi'] }
    ],
  bilder: ['Carro portante ACTS Sl 7769 a Ilanz (2013)', 'Carro portante ACTS Sl 7753 (2024)']
});
uebZug('rhb-container', {
  name: 'Carri portacontainer', beiname: 'Sb e Lb',
  typ: 'Carri portanti per container e casse mobili',
  text: ['Per container e casse mobili la RhB ha carri a quattro assi con parte centrale ribassata e corti carri portanti a due assi. Il pianale basso sfrutta meglio la sagoma stretta dello scartamento metrico.', 'Molti carri derivano dalla trasformazione di vecchi carri merci.'],
  kennzahlen: [['15,9 m', 'lunghezza Sb'], ['36 t', 'portata (fino a)'], ['615 mm', 'altezza di carico Lb-v'], ['24 t', 'portata Lb-v']],
  daten: { 'Bauart': 'carri portacontainer', 'Fahrzeugnummern': 'Sb-v 7716–7730, Sb 65655–65689, Lb-v (trasformati 1997–2000); altre trasformazioni Sb-x 65601–65603, Sb-v 65691–65694' },
  specNote: 'Valori secondo la pagina della RhB sulle casse mobili. Una parte dei 65665 segg. è stata trasformata in Rlp 65701–65710; la vecchia serie non è quindi il parco attuale.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La RhB confronta tre gruppi di carri ribassati e i corti Lb-v.'],
        tabelle: { kopf: ['Gruppo', 'Lunghezza', 'Portata', 'Nota'], zeilen: [
          ['Sb-v 7716–7730, Sb 65655–65689', '15,91 m', '30 o 36 t', 'parte centrale ribassata'],
          ['Lb-v', '9,14 m', '24 t', 'due assi, telaio del 1963, trasformati 1997–2000']] } },
      { titel: 'Impiego e tecnica', p: ['Nella parte centrale ribassata i container stanno più in basso e passano così sotto la sagoma limitata dello scartamento metrico.', 'Gli Lb-v a due assi pesano 5,7 t a vuoto, sono lunghi 9,14 m e portano 24 t. Il loro pianale è solo 615 mm sopra la rotaia.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Perni per container', 'Pianale ribassato', 'Lb-v a due, Sb a quattro assi'] }
    ],
  bilder: ['Carro portacontainer Sb-v 7729 a Ilanz (2013)', 'Carro portante Lb 7858 a due assi con container (2026)', 'Carro portacontainer Sb 65675 a Ilanz (2013)']
});
uebZug('rhb-spezialtransport', {
  name: 'Carri per trasporti speciali', beiname: 'Uaa-z e Xak',
  typ: 'Carri per carichi pesanti e alti',
  text: ['Per carichi pesanti o alti, come grandi macchine, la RhB ha carri speciali. L’Uaa-z 8251 si compone di ponti di carico e carrelli combinabili.', 'Il carro a piattaforma Xak 93502 ha una rampa mobile.'],
  kennzahlen: [['97 t', 'configurazione massima Uaa-z'], ['417 mm', 'altezza di carico Uaa-z'], ['27 t', 'portata Xak'], ['3,0 m', 'larghezza di carico Uaa-z']],
  daten: { 'Bauart': 'carri per carichi pesanti e carro a piattaforma', 'Fahrzeugnummern': 'Uaa-z 8251; Xak 93502 (prima 91501, dall’Uaik 8301)' },
  specNote: 'Tara e portata dell’Uaa-z dipendono dalla configurazione e non vanno mescolate. Secondo il registro, la configurazione da 97 t non è in servizio.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['L’Uaa-z 8251 risale agli anni 1950; le fonti indicano il 1956 e il 1958. Con un ponte privato per trasporti pesanti e quattro carrelli a tre assi porta fino a 97 t.', 'Il carro a piattaforma si chiamava prima Uaik 8301, poi 91501 e oggi Xak 93502.'] },
      { titel: 'Impiego e tecnica', p: ['Il ponte di carico RhB dell’Uaa-z pesa 10,5 t con le traverse, offre 3,0 m di larghezza e si trova solo 417 mm sopra la rotaia. Nella versione usuale il carro è lungo 15,5 m e porta 42 t.', 'Il carro a piattaforma ha quattro assi, pesa 14,4 t a vuoto, è lungo 12,66 m e porta 27 t. Le macchine salgono dal davanti o di lato tramite una rampa mobile.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Ponti di carico e carrelli combinabili (Uaa-z)', 'Pianale molto basso', 'Rampa mobile (Xak)'] }
    ]
});

/* ---------- manovra ---------- */
uebZug('rhb-geaf22', {
  typ: 'Locomotiva da manovra con linea di contatto e batteria',
  text: ['Le sette Geaf 2/2 di Stadler manovrano elettricamente sotto la linea di contatto e con la batteria sui binari senza linea. La batteria si ricarica sotto la linea di contatto.', 'Sono entrate in servizio nel 2020.'],
  kennzahlen: [['7', 'locomotive (20601–20607)'], ['700 kW', 'potenza (linea di contatto)'], ['93 kWh', 'batteria'], ['2020', 'in servizio']],
  daten: { 'Bauart': 'locomotiva da manovra a due assi con linea di contatto e batteria', 'Stromsystem': '11 kV 16,7 Hz e batteria', 'Länge': '8,41 m tra i respingenti centrali (9,61 m con accoppiatore da manovra)', 'Leistung': '700 kW sotto la linea di contatto, 200 kW a batteria', 'Höchstgeschwindigkeit': '80 km/h (linea di contatto), 40 km/h (batteria)' },
  specNote: 'Valori secondo la scheda Stadler LRHB0720d, peso secondo Wikipedia. 93 kWh è l’energia accumulata nella batteria, 200 kW la potenza; un’autonomia fissa non si può calcolare.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La RhB ha ordinato le sette locomotive a Stadler nel settembre 2018; sono entrate in servizio nel 2020. Sono stazionate tra l’altro a Landquart, Coira, Ilanz, Thusis, Davos Platz e Zernez.'] },
      { titel: 'Impiego e tecnica', p: ['Sotto la linea di contatto la locomotiva eroga fino a 700 kW e viaggia fino a 80 km/h. Con la batteria agli ioni di litio (93 kWh) dispone di 200 kW e 40 km/h, abbastanza per manovrare su binari senza linea di contatto.', 'La locomotiva è corta e si adatta bene ai binari stretti delle stazioni. Può frenare carri con freno a vuoto e con freno ad aria.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Cabina centrale, guida seduti o in piedi', 'Radiocomando', 'Condotta di riscaldamento del treno 320 V', 'Sistema di sicurezza ZSI 127'] }
    ],
  bilder: ['Geaf 2/2 20601 a Coira (2020)', 'Geaf 2/2 20603 (2025)']
});
uebZug('rhb-ge33', {
  beiname: '214 e 215',
  typ: 'Locomotiva da manovra elettrica a tre assi',
  text: ['Le due Ge 3/3 del 1984 sono locomotive da manovra elettriche con tre assi motori. Lavorano a Samedan e a Coira.', 'Non hanno il sistema di sicurezza ZSI 127.'],
  kennzahlen: [['2', 'locomotive (214, 215)'], ['1984', 'costruzione'], ['3', 'assi motori'], ['11 kV', 'linea di contatto']],
  daten: { 'Bauart': 'locomotiva da manovra elettrica a tre assi', 'Hersteller': 'RACO (meccanica), BBC (elettrica)', 'Länge': '8,64 m respingenti compresi', 'Leistung': '425 kW (potenza oraria)', 'Höchstgeschwindigkeit': '40 km/h (65 km/h al traino)' },
  specNote: 'Valori tecnici secondo Wikipedia; luoghi d’impiego secondo il registro dei veicoli motori di Haribu (stato settembre 2026).',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le due locomotive 214 e 215 sono state costruite nel 1984 come tipo proprio a tre assi per la manovra.'] },
      { titel: 'Impiego e tecnica', p: ['Secondo il registro, la 214 lavora a Samedan, la 215 a Coira. Nessuna delle due ha il sistema ZSI 127, il che limita le corse in linea.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Tre assi motori', 'Pantografo per 11 kV', 'Nessun sistema ZSI 127'] }
    ],
  bilder: ['Ge 3/3 215 a Coira (2015)', 'Ge 3/3 214 (2022)']
});
uebZug('rhb-gmf44-242', {
  beiname: '242 e 243',
  typ: 'Locomotiva diesel da manovra del 1991',
  text: ['Le due Gmf 4/4 del 1991 sono locomotive diesel per la manovra sulla rete principale.', 'Sono un tipo proprio da non confondere con le più recenti Gmf 4/4 II di Schalke.'],
  kennzahlen: [['2', 'locomotive (242, 243)'], ['1991', 'costruzione'], ['4', 'assi motori'], ['diesel', 'trazione']],
  daten: { 'Bauart': 'locomotiva diesel a quattro assi', 'Antrieb': 'diesel-elettrica', 'Motor': 'motori diesel Caterpillar', 'Leistung': '350 kW (a 20 km/h)' },
  specNote: 'Valori tecnici secondo Wikipedia (articolo «Gmf 4/4»); le fonti verificate non indicano il costruttore. Impiego secondo il registro dei veicoli motori di Haribu.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le locomotive 242 e 243 sono state costruite nel 1991 come tipo proprio. Nonostante la designazione simile non hanno nulla in comune con le Gmf 4/4 II costruite nel 2013.'] },
      { titel: 'Impiego e tecnica', p: ['Secondo il registro svolgono la manovra sulla rete principale. Alcune foto le mostrano a Klosters Platz, Landquart e Davos.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Trazione diesel, indipendente dalla linea di contatto', 'Telecomando (lettera f)', 'Quattro assi motori'] }
    ],
  bilder: ['Gmf 4/4 242 a Klosters Platz (2019)', 'Gmf 4/4 243 a Davos (2024)']
});
uebZug('rhb-taf22', {
  typ: 'Piccoli veicoli strada-rotaia da manovra per officine',
  text: ['I sei Taf 2/2 sono piccoli veicoli strada-rotaia. Spostano veicoli nelle officine e nei depositi.', 'Lavorano tra l’altro a Poschiavo e a Landquart.'],
  kennzahlen: [['6', 'veicoli'], ['2010–2023', 'anni di costruzione'], ['2', 'assi'], ['Landquart', 'officina principale']],
  daten: { 'Bauart': 'veicolo strada-rotaia da manovra' },
  specNote: 'Secondo il registro dei veicoli motori di Haribu; costruttore e valori tecnici non vi sono indicati.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['I sei veicoli sono stati costruiti tra il 2010 e il 2023.'] },
      { titel: 'Impiego e tecnica', p: ['Secondo il registro lavorano tra l’altro a Poschiavo, al tornio in fossa di Landquart e nel deposito di Landquart. Spostano veicoli in officina e non circolano nel servizio viaggiatori.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Ruote per rotaia e strada', 'Trazione a batteria (lettera a)', 'Telecomando (lettera f)'] }
    ]
});

/* ---------- infrastruttura ---------- */
uebZug('rhb-gmf44ii', {
  typ: 'Locomotiva diesel-elettrica Schalke per treni cantiere e sgombero neve',
  text: ['Le quattro Gmf 4/4 II di Schalke trainano pesanti treni cantiere, rimorchiano treni in panne e spingono le frese da neve in inverno. Circolano anche quando la linea di contatto è disinserita.', 'Portano la livrea gialla dell’infrastruttura RhB.'],
  kennzahlen: [['4', 'locomotive'], ['1800 kW', 'potenza'], ['100 km/h', 'velocità massima'], ['2013', 'costruzione']],
  daten: { 'Bauart': 'locomotiva diesel-elettrica', 'Fahrzeugnummern': '23401–23404 (fino al 2015: 28701–28704)', 'Länge': '16,69 m' },
  specNote: 'Valori secondo Schalke e Wikipedia. Lo sforzo all’avviamento vale per un coefficiente di aderenza di 0,33.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La RhB ha ordinato le locomotive nel 2009; Schalke le ha costruite nel 2013 e sono entrate in servizio nel 2014. Fino al 2015 portavano i numeri 28701–28704.', 'Si chiamano 23401 «Surselva», 23402 «Engadin», 23403 «Albula» e 23404 «Bernina».'] },
      { titel: 'Impiego e tecnica', p: ['Le locomotive trainano pesanti treni cantiere, aiutano in caso di guasto e in inverno lavorano con le frese da neve su tutta la rete. Fino a tre locomotive si possono comandare insieme.', 'Sono costruite per curve di 40 m di raggio e temperature da −35 a +40 °C. Quattro diversi sistemi di frenatura le rendono adatte ai treni misti.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Trazione diesel-elettrica, indipendente dalla linea di contatto', 'Quattro sistemi di frenatura', 'Comando multiplo fino a tre locomotive', 'Livrea gialla dell’infrastruttura'] }
    ],
  bilder: ['Gmf 4/4 II 23403', 'Gmf 4/4 II 23402 con la fresa da neve 95403']
});
uebZug('rhb-gem44', {
  beiname: '801 e 802',
  typ: 'Locomotiva bimodale per la linea del Bernina',
  text: ['Le due Gem 4/4 circolano elettricamente sotto la linea di contatto in corrente continua della linea del Bernina e in diesel dove non c’è una linea adatta.', 'Si chiamano 801 «Steinbock» (stambecco) e 802 «Murmeltier» (marmotta).'],
  kennzahlen: [['2', 'locomotive'], ['1968', 'alla RhB'], ['2 × 709 kW', 'diesel dopo la trasformazione'], ['65 km/h', 'velocità massima']],
  daten: { 'Bauart': 'locomotiva bimodale (elettrica e diesel)', 'Länge': '13,89 m respingenti compresi', 'Leistung': '680 kW in elettrico; diesel 2 × 709 kW (dopo la trasformazione)' },
  specNote: 'Valori secondo Wikipedia; la lunghezza viene dall’infobox, il testo dell’articolo indica 13,54 m. Costruite nel 1966, consegnate alla RhB nel 1968. Potenza elettrica e diesel sono modalità distinte e non si sommano.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM, SWS, BBC e MFO costruirono le due locomotive; arrivarono alla RhB nel 1968. Dopo un incendio, la 801 è stata rinnovata a Landquart dal 2000, la 802 è seguita nel 2002/03.', 'Con la trasformazione hanno ricevuto cabine più lunghe, nuovi motori diesel Cummins da 709 kW ciascuno, un nuovo comando e la climatizzazione in cabina.'] },
      { titel: 'Impiego e tecnica', p: ['Le locomotive sono stazionate a Pontresina e a Poschiavo. Trainano treni cantiere e in inverno lavorano con le frese da neve; in passato trainavano anche treni viaggiatori sulla linea del Bernina.', 'In elettrico erogano 680 kW. Con i motori diesel circolano anche sulla rete principale, di cui non possono usare la corrente alternata.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Pantografo per 1000 V corrente continua', 'Due motori diesel', 'Cabine climatizzate (dopo la trasformazione)'] }
    ],
  bilder: ['Gem 4/4 in testa a un treno regionale per Tirano (2009)', 'Fiancata della Gem 4/4 801 con lo stambecco (2014)', 'Fiancata della Gem 4/4 802 con la marmotta (2014)']
});
uebZug('rhb-tm', {
  name: 'Tm 2/2 e Tmf 2/2', beiname: 'trattori',
  typ: 'Trattori diesel per la manovra e i treni cantiere',
  text: ['Per la manovra e i piccoli treni cantiere la RhB ha diverse famiglie di trattori diesel a due assi di RACO, Windhoff e SCHÖMA.', 'Per sostituirne una parte, nel novembre 2025 la RhB ha ordinato otto nuovi veicoli di servizio a Windhoff.'],
  kennzahlen: [['10', 'Tm 111–120 (SCHÖMA)'], ['6', 'Tmf 85–90 (RACO)'], ['4', 'Tm 81–84 (RACO)'], ['4', 'Tm 95–98 (Windhoff)']],
  daten: { 'Bauart': 'trattori diesel a due assi' },
  specNote: 'Numeri secondo la statistica delle locomotive Pospichal. I successori ordinati non provano che i vecchi trattori siano già ritirati; la RhB li citava nel novembre 2025 come parco esistente.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['I vecchi trattori RACO portavano i numeri 56–67 e poi in parte 15–26.'],
        tabelle: { kopf: ['Numeri', 'Costruttore', 'Costruzione'], zeilen: [
          ['Tm 81–84', 'RACO', '1985'], ['Tmf 85–90', 'RACO', '1991–1994'], ['Tm 91–93', 'diversi', '–'], ['Tm 95–98', 'Windhoff', '1998/99'], ['Tm 111–120', 'SCHÖMA', '2002–2006']] } },
      { titel: 'Impiego e tecnica', p: ['I trattori manovrano nelle stazioni e trainano piccoli treni di costruzione e manutenzione. I Tmf hanno inoltre un telecomando.', 'Per sostituire i Tm 81–84 e 95–98 la RhB ha ordinato otto veicoli Windhoff nel novembre 2025; devono entrare in servizio nel 2029.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Trazione diesel', 'Due assi', 'Telecomando sui Tmf'] }
    ],
  bilder: ['Tm 2/2 115 di SCHÖMA a Ilanz (2014)', 'Tm 2/2 84 a Langwies (2015)', 'Tmf 2/2 87 a Thusis (2013)']
});
uebZug('rhb-tieflade', {
  beiname: '23411–23415 ribassati',
  typ: 'Nuovi veicoli ribassati per la logistica dei cantieri',
  text: ['Dal novembre 2025 la RhB riceve cinque veicoli ribassati semoventi Xmf 4/4 23411–23415. Si aggiungono undici carri ribassati Xa 93511–93521.', 'Con pianali bassi e soluzioni container la logistica dei cantieri deve diventare più efficiente.'],
  kennzahlen: [['5', 'veicoli ribassati'], ['11', 'carri ribassati'], ['2025', 'primi veicoli'], ['2026', 'carri ribassati']],
  daten: { 'Bauart': 'veicoli ribassati semoventi e carri ribassati' },
  specNote: 'Secondo il rapporto sullo stato della rete 2025 della RhB e i registri. Costruttore e dati tecnici non sono accertati nelle fonti verificate; non ogni numero è già collaudato.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Secondo il rapporto sullo stato della rete 2025, cinque veicoli ribassati arrivano dal novembre 2025 e undici carri ribassati dal primo trimestre 2026. Il registro li indica come Xmf 4/4 23411–23415 e Xa 93511–93521.'] },
      { titel: 'Impiego e tecnica', p: ['I veicoli portano materiale nei cantieri. I pianali bassi e i container di sistema facilitano carico e scarico.', 'Questo acquisto è distinto dagli otto veicoli Windhoff attesi per il 2029.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Pianale di carico basso', 'Trazione propria (Xmf)', 'Telecomando (lettera f)'] }
    ]
});
uebZug('rhb-windhoff', {
  beiname: 'Windhoff (ordinati)',
  typ: 'Veicoli di servizio con gru ordinati, entrata in servizio prevista nel 2029',
  text: ['Nel novembre 2025 la RhB ha ordinato a Windhoff otto veicoli di servizio identici per 57 milioni di franchi. Devono entrare in servizio nel 2029.', 'I veicoli hanno una gru e si possono equipaggiare con verricello, benna, cestello, fresa da neve o escavatore a risucchio.'],
  kennzahlen: [['8', 'veicoli ordinati'], ['500 kW', 'potenza continua alla ruota'], ['80 km/h', 'velocità massima'], ['2029', 'entrata in servizio prevista']],
  daten: { 'Bauart': 'veicolo polivalente diesel-elettrico con gru', 'Gewicht': 'circa 58 t', 'Motor': 'diesel principale 520 kW, diesel ausiliario 170 kW', 'Leistung': '500 kW continui alla ruota', 'Anzahl': '8 ordinati', 'In Betrieb seit': '2029 previsto' },
  specNote: 'Valori di progetto secondo il comunicato della RhB del 18 novembre 2025 e Windhoff. I veicoli non sono ancora consegnati. Una batteria di trazione è solo studiata come possibile equipaggiamento successivo.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La RhB ha annunciato l’ordinazione il 18 novembre 2025. Windhoff la conferma come progetto «MPV VentuS». Gli otto veicoli devono sostituire vecchi trattori diesel.'] },
      { titel: 'Impiego e tecnica', p: ['Un motore diesel principale da 520 kW e un diesel ausiliario da 170 kW azionano ciascuno un generatore. Alla ruota sono disponibili in continuo 500 kW; la velocità massima è di 80 km/h.', 'La gru ha uno sbraccio di circa 16,9 m e il suo braccio si può piegare anche verso il basso.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Cabina climatizzata e insonorizzata per sette persone', 'Gru, verricello, benna o cestello', 'Possibile: fresa da neve o escavatore a risucchio'] }
    ]
});
uebZug('rhb-dienstwagen', {
  name: 'Carri di servizio', beiname: 'carri X',
  typ: 'Carri per la costruzione dei binari, le misurazioni e il materiale',
  text: ['Il parco dei carri di servizio della RhB comprende carri per pietrisco, ghiaia e pianale, carri di misura e con gru, piattaforme elevabili e carri di soccorso. Molti derivano da vecchie carrozze o carri merci.', 'Secondo il rapporto sullo stato della rete 2025, l’infrastruttura conta 60 veicoli motori e 136 veicoli rimorchiati.'],
  kennzahlen: [['136', 'veicoli rimorchiati dell’infrastruttura'], ['60', 'veicoli motori dell’infrastruttura'], ['X', 'categoria dei carri di servizio'], ['2025', 'rapporto sulla rete']],
  daten: { 'Bauart': 'carri di servizio di vario tipo', 'Fahrzeugnummern': 'Esempi: Xac 8733–8742, Xa-u 8761–8770, Xa-tu 93701–93704, Xac-t 93801–93805, Xak 96501, Xak 9394, Xk 94001' },
  specNote: 'Esempi di tipi secondo il registro X di Haribu (stato agosto 2026), non un elenco completo. Portate e sistemi di misura non sono indicati senza scheda dell’attrezzatura.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La categoria X indica l’uso in servizio, non un nuovo telaio. Esempi dal registro:'],
        tabelle: { kopf: ['Compito', 'Esempi'], zeilen: [
          ['Pietrisco', 'Xac 8733–8742, Xa-u 8761–8770, 9441–9446, 9461–9463, Xa-tu 93701–93704'], ['Ghiaia', 'Xac-t 93801–93805'],
          ['Carri pianale', 'Xae-w 9401–9404, Xae-t 93105–93111'], ['Trasporto rotaie', 'Xa-t 93101–93104, carro scarica-rotaie Xa-t 93501'],
          ['Misura del binario', 'Xak 96501 (dalla B 2307)'], ['Ispezione ponti', 'Xak 9394 (dall’Uahk-v 8123)'], ['Lavori con gru', 'Xak 9387, 9388'],
          ['Piattaforme elevabili', 'Xk 94001, Xak 94002–94003'], ['Acqua e spegnimento', 'Xak 9379–9380, Xah-y 9385–9386'], ['Carri di soccorso', 'Xak-v 9101, 9102']] } },
      { titel: 'Impiego e tecnica', p: ['Così i vecchi carri ribaltabili Fau 8761–8770 sono diventati carri per pietrisco usato Xa-u. In inverno alcuni carri per pietrisco ricevono pareti laterali e portano via la neve.', 'Carri di accoppiamento come i carri Vereina 9390–9393 collegano veicoli con accoppiatori diversi. Non hanno trazione propria.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Scarico ribaltabile o a gravità nei carri per pietrisco', 'Impianti di misura, gru o piattaforme secondo il carro', 'Nessuna trazione propria'] }
    ],
  bilder: ['Carro per ghiaia Xac-t 93801 a Coira (2012)', 'Carro per pietrisco Xa-tu 93701 a Poschiavo (2010)', 'Carro di servizio Xk 9362 a Landquart (2015)']
});

/* ---------- veicoli di servizio e speciali ---------- */
uebZug('rhb-loeref', {
  beiname: 'veicoli di spegnimento e salvataggio',
  typ: 'Treni di spegnimento e salvataggio per la galleria della Vereina',
  text: ['Per la galleria della Vereina la RhB dispone di quattro veicoli di spegnimento e salvataggio di Müller Technologie. Due sono veicoli di spegnimento, due di salvataggio.', 'Sono stati consegnati il 2 settembre 2022. Li servono i pompieri di Klosters-Serneus e Zernez.'],
  kennzahlen: [['4', 'veicoli (27401–27404)'], ['25 000 l', 'acqua di spegnimento'], ['100', 'persone per corsa di salvataggio'], ['2022', 'consegna']],
  daten: { 'Bauart': 'veicoli semoventi di spegnimento e salvataggio', 'Betreiber': 'RhB, serviti dai pompieri di Klosters-Serneus e Zernez', 'Länge': '18,80 m', 'Antrieb': 'diesel', 'Leistung': '280 kW (motore diesel)' },
  specNote: 'Valori secondo il comunicato della RhB e la scheda Müller. I veicoli circolano solo su rotaia; i veicoli strada-rotaia dei pompieri sono altri veicoli.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Müller Technologie di Frauenfeld ha costruito i quattro veicoli; sono stati consegnati il 2 settembre 2022 al portale nord a Klosters Selfranga. Ogni lato della galleria ha un veicolo di spegnimento e uno di salvataggio.', 'La RhB ha anche veicoli strada-rotaia dei pompieri Xm 2/2 27801–27806 del 2016/17 e altri più vecchi del 2007.'] },
      { titel: 'Impiego e tecnica', p: ['Ogni veicolo ha due cabine, un carrello motore e uno portante e un motore diesel da 280 kW. Telecamere a colori e termiche aiutano nel fumo. Secondo il costruttore sono pronti in meno di cinque minuti.', 'Il veicolo di spegnimento ha una cisterna con controllo della temperatura da 25 000 l d’acqua. Il veicolo di salvataggio ha un locale con alimentazione d’aria respirabile per fino a 100 persone; carburante e ossigeno bastano per due corse.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Veicolo di spegnimento: 12 posti per pompieri con autorespiratore, altri 4 nelle cabine', 'Locale di salvataggio con aria respirabile', 'Telecamere a colori e termiche', 'Trazione propria, indipendente da una locomotiva'] }
    ]
});
uebZug('rhb-fahrleitung', {
  name: 'Veicoli per linea di contatto e gru', beiname: 'Xm e Xmf',
  typ: 'Veicoli per lavori alla linea di contatto e con gru',
  text: ['Per i lavori alla linea di contatto e con gru la RhB ha diverse famiglie di veicoli di servizio semoventi. I più grandi sono gli Xmf 6/6 24401 e 24402.', 'Dal 2024 si aggiungono due piattaforme elevabili strada-rotaia.'],
  kennzahlen: [['2', 'Xmf 6/6 (2007, 2016)'], ['2', 'Xmf 4/4 (costruiti nel 1994)'], ['2', 'piattaforme (2024)'], ['1994', 'Xmf 2/2 9921']],
  daten: { 'Bauart': 'veicoli semoventi per linea di contatto e gru', 'Fahrzeugnummern': 'Xm 2/2 9916, 9917; Xmf 2/2 9921; Xmf 6/6 24401, 24402; Xmf 4/4 24403, 24404 (prima 9918, 9919); Xm 2/2 24801, 24802' },
  specNote: 'Secondo il registro dei veicoli motori di Haribu. Costruttore, altezza di lavoro e carico della gru non sono indicati senza scheda tecnica.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['I veicoli risalgono ad anni diversi.'],
        tabelle: { kopf: ['Veicolo', 'Numeri', 'Costruzione'], zeilen: [
          ['Xm 2/2', '9916, 9917', 'diversi'], ['Xmf 2/2', '9921', '1994'], ['Xmf 6/6', '24401, 24402', '2007, 2016'],
          ['Xmf 4/4', '24403, 24404 (prima 9918, 9919)', '1994, poi trasformati'], ['Xm 2/2 piattaforme', '24801, 24802', '2024']] } },
      { titel: 'Impiego e tecnica', p: ['I veicoli costruiscono e mantengono la linea di contatto e sollevano pezzi pesanti. Gli Xmf 6/6 e gli Xmf 4/4 sono tipi diversi nonostante lo stesso compito.', 'Gli Xm 2/2 24801 e 24802 sono piattaforme elevabili che circolano su rotaia e su strada.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Gru o piattaforma secondo il veicolo', 'Trazione diesel propria (lettera m)', 'Telecomando sugli Xmf'] }
    ],
  bilder: ['Xmf 2/2 9921 a Samedan (2015)', 'Xmf 2/2 9921 con gru']
});
uebZug('rhb-schneeschleuder', {
  name: 'Frese e spazzaneve', beiname: 'Xrot mt e Xk',
  typ: 'Mezzi per lo sgombero della neve',
  text: ['In inverno frese da neve e spazzaneve liberano le linee. Le frese più recenti sono le Xrot mt 95401–95404 di Zaugg.', 'Una locomotiva spinge la fresa, per esempio una Gmf 4/4 II.'],
  kennzahlen: [['4', 'Xrot mt 95401–95404'], ['2011/12', 'costruzione'], ['1981', 'Xrot mt 9217'], ['7', 'spazzaneve Xk 9141–9147']],
  daten: { 'Bauart': 'frese da neve e spazzaneve' },
  specNote: 'Le fonti verificate non indicano larghezza, capacità di sgombero né motore delle singole macchine RhB. I dati di altre ferrovie dalla brochure Zaugg non sono stati ripresi.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Zaugg ha consegnato nel 2011 le macchine del Bernina 95403 e 95404 e nel 2012 quelle della rete principale 95401 e 95402. La Xrot mt 9217 risale al 1981.', 'L’attuale Xrot m 9214 ha una sovrastruttura del 2001 su un telaio del 1913 (dal Gb 5606). Non è la vecchia fresa a vapore del Bernina con lo stesso numero.'] },
      { titel: 'Impiego e tecnica', p: ['Una fresa da neve raccoglie la neve con un organo rotante e la getta di lato. Uno spazzaneve spinge via la neve con una lama sagomata.', 'Fresa e locomotiva di spinta formano un treno di lavoro, per esempio con una Gmf 4/4 II; sulla linea del Bernina anche un’automotrice spinge uno spazzaneve.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Organo di sgombero rotante (Xrot)', 'Lama spazzaneve (Xk)', 'In inverno: carri per pietrisco con pareti laterali per portare via la neve'] }
    ],
  bilder: ['Fresa da neve Xrot mt 95403 con la Gmf 4/4 II 23402', 'Fresa da neve Xrot mt 9217 a Landquart (2012)', 'Spazzaneve Xk 9143 con l’ABe 4/4 II 46 in azione']
});

/* ---------- veicoli storici ---------- */
uebZug('rhb-ge66i', {
  beiname: 'Coccodrillo',
  typ: 'Locomotiva elettrica merci del 1921–1929 (storica)',
  text: ['Per decenni i 15 «Coccodrilli» della RhB hanno trainato treni pesanti sull’Albula. Tipici sono i due carrelli motori mobili con trasmissione a bielle.', 'Le 414 e 415 trainano oggi treni storici della RhB; diverse altre sono nei musei.'],
  kennzahlen: [['15', 'locomotive (401–415)'], ['1921', 'prima locomotiva'], ['55 km/h', 'velocità massima'], ['66 t', 'peso in servizio']],
  daten: { 'Bauart': 'locomotiva elettrica a bielle', 'Hersteller': 'SLM (meccanica), BBC (elettrica)', 'Länge': '13,30 m respingenti compresi', 'Leistung': 'circa 940 kW (opuscolo RhB)', 'Erhalten': '414 e 415 (RhB); 402 Museo Svizzero dei Trasporti, 406 Battenberg, 407 Bergün, 411 Deutsches Museum' },
  specNote: 'Potenza secondo l’opuscolo RhB «Veicoli storici» (arrotondata, senza riferimento preciso); Wikipedia indica da 794 a 840 kW. Lunghezza e peso secondo Wikipedia.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM e BBC costruirono le 15 locomotive tra il 1921 e il 1929. Tre assi accoppiati si trovano in ciascuno dei due carrelli motori mobili; motori, ingranaggi, contralberi e bielle trasmettono la forza.', 'Sono conservate le 414 e 415 alla RhB, la 402 al Museo Svizzero dei Trasporti di Lucerna, la 407 al museo ferroviario dell’Albula a Bergün, la 411 al Deutsches Museum di Monaco e la 406 presso Viessmann a Battenberg.'] },
      { titel: 'Impiego e tecnica', p: ['I Coccodrilli trainavano soprattutto treni merci e viaggiatori sulla linea dell’Albula. Le 414 e 415 sono oggi locomotive museali in esercizio con base a Landquart e Samedan; secondo il registro la 414 è in riparazione.', 'Le due locomotive della RhB sono state trasformate in misura diversa e non mostrano più ovunque lo stato originale.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Cabina centrale, avancorpi alle due estremità', 'Trasmissione a bielle e contralberi', 'Esposizione con simulatore di guida (407 a Bergün)'] }
    ],
  bilder: ['Coccodrillo Ge 6/6 I 415 a Bergün', 'Ge 6/6 I 414 con un treno storico a Filisur (2022)', 'Ge 6/6 I 412 con il treno 4532 in arrivo a Filisur (1987)', 'Ge 6/6 I 407 al museo ferroviario dell’Albula a Bergün (2014)']
});
uebZug('rhb-ge66ii', {
  typ: 'Locomotiva elettrica pesante a cassa articolata (storica)',
  text: ['Le sette Ge 6/6 II erano le pesanti locomotive di linea della rete principale della RhB. La loro cassa è in due parti articolate su tre carrelli.', 'Sono fuori servizio dal 2020; la 702 si trova al Museo Svizzero dei Trasporti di Lucerna.'],
  kennzahlen: [['7', 'locomotive (701–707)'], ['1958', 'prime locomotive'], ['1764 kW', 'potenza oraria'], ['80 km/h', 'velocità massima']],
  daten: { 'Bauart': 'locomotiva elettrica a cassa articolata', 'Länge': '14,50 m respingenti compresi', 'Leistung': '1764 kW (potenza oraria)', 'Erhalten': '702 «Curia» al Museo Svizzero dei Trasporti di Lucerna; 707 «Scuol» accantonata a Samedan' },
  specNote: 'Valori secondo Wikipedia; altrove l’articolo indica 1776 kW.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM, BBC e MFO costruirono le 701 e 702 nel 1958, seguite dalle 703–707 nel 1965. Le locomotive portano nomi di località, per esempio 701 «Raetia», 702 «Curia» e 707 «Scuol».'] },
      { titel: 'Impiego e tecnica', p: ['Le locomotive trainavano pesanti treni merci e viaggiatori sulla rete principale, soprattutto sull’Albula. Dal 2020 sono state ritirate; le 701, 703, 704 e 706 sono state demolite.', 'La 702 è arrivata al Museo Svizzero dei Trasporti di Lucerna il 30 marzo 2023; la fondazione GRÜN & CHROM vuole riportarla allo stato originale. La 707 è accantonata a Samedan senza autorizzazione d’esercizio.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due semicasse articolate', 'Tre carrelli a due assi', 'Due cabine di guida'] }
    ],
  bilder: ['Ge 6/6 II 701 presso Bonaduz (2016)', 'Ge 6/6 II 704 «Davos» presso Trin', 'Ge 6/6 II 707 «Scuol» a Samedan']
});
uebZug('rhb-ge44i', {
  typ: 'Locomotiva elettrica di linea del 1947 e 1953 (storica)',
  text: ['Le dieci Ge 4/4 I furono le prime locomotive a carrelli della RhB. Quattro arrivarono nel 1947, sei nel 1953.', 'La 605 «Silvretta» circola oggi come locomotiva storica, tra l’altro in testa all’Alpine Classic Pullman Express.'],
  kennzahlen: [['10', 'locomotive (601–610)'], ['1947', 'prime locomotive'], ['1184 kW', 'potenza'], ['80 km/h', 'velocità massima']],
  daten: { 'Bauart': 'locomotiva elettrica', 'Länge': '12,10 m respingenti compresi', 'Höchstgeschwindigkeit': '80 km/h (in origine 75 km/h)', 'Erhalten': '605 «Silvretta» (storica, in esercizio); 602 e 603 accantonate' },
  specNote: 'Valori secondo Wikipedia e l’opuscolo RhB «Veicoli storici». Le cabine sono state trasformate nel 1986–1991; le vecchie foto mostrano un’altra forma.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM costruì le locomotive con equipaggiamento elettrico BBC e MFO: le 601–604 nel 1947, le 605–610 nel 1953. I nomi ricordano montagne e valli grigionesi, per esempio 601 «Albula» o 605 «Silvretta».'] },
      { titel: 'Impiego e tecnica', p: ['Con due carrelli e motori singoli per asse sostituirono le vecchie locomotive a bielle. Dal 1986 al 1991 ricevettero cabine più grandi e il comando multiplo e a distanza; nel 1997 arrivarono pantografi monobraccio per la linea di Arosa.', 'Dal novembre 2010 sono state ritirate. La 605 ha ricevuto nel 2025 il sistema ZSI 127; la fondazione GRÜN & CHROM prevede la sua revisione in livrea rossa e vuole riverniciare la 602 in verde.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due cabine (trasformate nel 1986–1991)', 'Comando multiplo e a distanza', 'Freno elettrico a recupero'] }
    ],
  bilder: ['Ge 4/4 I 605 «Silvretta» a Coira (2022)', 'Ge 4/4 I 603 e 602 a Spinas', 'Ge 4/4 I tra Bever e Spinas']
});
uebZug('rhb-ge24', {
  typ: 'Prima locomotiva elettrica del 1913 (storica)',
  text: ['Le sette Ge 2/4 di SLM e BBC inaugurarono nel 1913 la trazione elettrica sulla linea Bever–Scuol. Più tardi diverse furono trasformate in locomotive da manovra.', 'La 222 circola oggi come locomotiva storica; le 205 e 207 sono conservate nello stato originale.'],
  kennzahlen: [['7', 'locomotive (201–207)'], ['1913', 'in servizio'], ['45 km/h', 'velocità massima (originale)'], ['222', 'conservata in esercizio']],
  daten: { 'Bauart': 'locomotiva elettrica a bielle', 'Fahrzeugnummern': '201–207; trasformazioni 211–213, 221–222', 'Länge': 'circa 8,7 m', 'Gewicht': '37 t (originale)', 'Leistung': '210 kW (originale), 428 kW (221 e 222 dopo la trasformazione)', 'Höchstgeschwindigkeit': '45 km/h (originale), 55 km/h (dopo la trasformazione)', 'Erhalten': '222 in esercizio (Landquart); 205 museo ferroviario dell’Albula; 207 Museo Svizzero dei Trasporti; 212' },
  specNote: 'Valori secondo Wikipedia; l’opuscolo RhB indica per la 222 circa 450 kW e 45 km/h. La 222 non ha il sistema ZSI 127.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM e BBC costruirono le locomotive nel 1912/13. Le trasformazioni hanno dato nuovi numeri a diverse locomotive, senza crearne di nuove.'],
        tabelle: { kopf: ['In origine', 'Più tardi'], zeilen: [
          ['201', 'Ge 2/4 213'], ['202', 'Gea 2/4 211, poi Gem 2/4 211'], ['203', 'Ge 2/4 221'], ['204', 'Ge 2/4 222'], ['206', 'Ge 2/4 212'], ['205, 207', 'conservate nello stato originale']] } },
      { titel: 'Impiego e tecnica', p: ['Nel 1943 tre locomotive furono trasformate in locomotive da manovra; nel 1945/46 le 221 e 222 ricevettero nuovi motori e un freno reostatico. Da allora erogavano 428 kW e viaggiavano a 55 km/h.', 'La 222 è oggi una locomotiva museale in esercizio a Landquart. La 205 appartiene dal 2023 alla fondazione del museo ferroviario dell’Albula, la 207 si trova al Museo Svizzero dei Trasporti di Lucerna.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due assi motori e due assi portanti', 'Freno reostatico (221 e 222 dopo la trasformazione)', 'Nessun sistema ZSI 127 (222)'] }
    ],
  bilder: ['Ge 2/4 222', 'Ge 2/4 201 nello stato originale (1912)']
});
uebZug('rhb-ge46', {
  typ: 'Prime locomotive elettriche della RhB del 1912–1918 (storiche)',
  text: ['La designazione Ge 4/6 comprende diverse locomotive sperimentali con equipaggiamento elettrico BBC, MFO e AEG. La 351 fu la prima locomotiva elettrica della RhB.', 'La 353 è conservata come locomotiva storica, la 391 si trova al Deutsches Technikmuseum di Berlino.'],
  kennzahlen: [['8', 'locomotive'], ['1913', 'in servizio'], ['588 kW', 'potenza (353, opuscolo)'], ['55 km/h', 'velocità massima (353)']],
  daten: { 'Bauart': 'locomotiva elettrica a bielle', 'Hersteller': 'SLM; parte elettrica BBC (301–302), MFO (351–355), AEG (391)', 'Länge': '10,80–11,50 m respingenti compresi', 'Leistung': '419–559 kW (potenza oraria, secondo la versione)', 'Erhalten': '353 (RhB), 391 (Deutsches Technikmuseum Berlino)' },
  specNote: 'Valori secondo Wikipedia, come intervallo su tutte le versioni. Le versioni differiscono per potenza e peso; nessuna scheda unica vale per tutte. L’opuscolo RhB indica per la 353 circa 588 kW e 55 km/h.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM fornì la parte meccanica; l’equipaggiamento elettrico veniva da tre ditte.'],
        tabelle: { kopf: ['Numeri', 'Parte elettrica', 'In servizio'], zeilen: [['301', 'BBC', '1913'], ['302', 'BBC', '1918'], ['351–352', 'MFO', '1912/13'], ['353–355', 'MFO', '1914'], ['391', 'AEG', '1913']] } },
      { titel: 'Impiego e tecnica', p: ['Le locomotive circolarono dapprima sulla linea dell’Engadina elettrificata nel 1913, poi su tutta la rete principale. La 351 è considerata la prima locomotiva elettrica della RhB.', 'La 353 traina ancora oggi treni museali. La 391 si può vedere al Deutsches Technikmuseum di Berlino.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Trasmissione a bielle', 'Quattro assi motori e due assi portanti', 'Equipaggiamento elettrico diverso secondo la locomotiva'] }
    ],
  bilder: ['Ge 4/6 353 a Ilanz', 'Ge 4/6 391 al Deutsches Technikmuseum di Berlino (2017)', 'Ge 4/6 355 (1915)']
});
uebZug('rhb-bernina-loks', {
  name: 'Locomotive del Bernina',
  typ: 'Piccole locomotive e automotrice bagagliaio della ferrovia del Bernina (storiche)',
  text: ['Alcuni veicoli motori particolari provengono dalla ferrovia del Bernina: le piccole Ge 2/2 161 e 162, i pezzi unici Ge 4/4 181 e 182 e l’automotrice bagagliaio De 2/2 151.', 'La 182 appartiene oggi al Club 1889, l’ex 181 alla ferrovia museo Blonay–Chamby.'],
  kennzahlen: [['1909', 'De 2/2 151 in servizio'], ['1911', 'Ge 2/2 161–162'], ['1916', 'Ge 4/4 81 costruita'], ['708 kW', 'Ge 4/4 81 (museo)']],
  daten: { 'Bauart': 'locomotive elettriche e automotrice bagagliaio', 'Betreiber': 'Ferrovia del Bernina, dal 1943 RhB', 'Erhalten': '161 storica, 162 accantonata; 81 Blonay–Chamby; 182 Club 1889; 151 Pontresina' },
  specNote: 'Per la 182 le fonti indicano il 1927 o il 1928 (costruzione o consegna). A Blonay–Chamby la 81 circola a 900 V.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La ferrovia del Bernina entrò nella RhB nel 1943. Con essa arrivarono questi pezzi unici:'],
        tabelle: { kopf: ['Veicolo', 'Costruzione', 'Nota'], zeilen: [
          ['De 2/2 151 (ex Fe 2/2 51)', '1909', 'automotrice bagagliaio, numero 151 dal 1965'], ['Ge 2/2 161, 162', '1911', 'piccole locomotive da manovra'],
          ['Ge 4/4 181 (ex Bernina Ge 6/6 81)', '1916, trasformata nel 1929', 'a Blonay–Chamby dal 1970'], ['Ge 4/4 182 (ex Bernina 82)', '1927/28', 'SLM e Sécheron; Club 1889']] } },
      { titel: 'Impiego e tecnica', p: ['La 81 fu costruita nel 1916 come Ge 6/6 e trasformata in Ge 4/4 nel 1929; nel 1961 ricevette il numero RhB 181. Blonay–Chamby indica 46 t, 708 kW e 45 km/h nonché freni a mano, a vuoto, reostatico ed elettromagnetico su rotaia.', 'La De 2/2 151 è stata trasformata più volte e nel 1980 ha ricevuto una cassa in lamiera e un pantografo monobraccio. È oggi un veicolo museale a Pontresina.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Per i 1000 V a corrente continua della linea del Bernina', 'Freno elettromagnetico su rotaia (81)', 'Vano bagagli nella De 2/2 151'] }
    ],
  bilder: ['Ge 4/4 182 a Pontresina (2025)', 'Ge 4/4 81 alla ferrovia museo Blonay–Chamby (2018)', 'Ge 2/2 162 e De 2/2 151 a Poschiavo (2014)']
});
uebZug('rhb-g34', {
  typ: 'Locomotiva a vapore delle origini del 1889–1908 (storica)',
  text: ['L’esercizio della ferrovia Landquart–Davos, da cui nacque la RhB, iniziò nel 1889 con le G 3/4. La 1 «Rhätia» trainò il treno inaugurale.', 'Sono conservate tra l’altro la 1 «Rhätia» e la 11 «Heidi».'],
  kennzahlen: [['16', 'locomotive'], ['1889', 'prime locomotive'], ['30,2 t', 'peso in servizio (n. 1)'], ['45 km/h', 'velocità massima']],
  daten: { 'Bauart': 'locomotiva-tender a vapore', 'Betreiber': 'Ferrovia Landquart–Davos, dal 1895 RhB', 'Länge': '7,95 m respingenti compresi (n. 1)', 'Gewicht': '23,5 t a vuoto, 30,2 t in servizio (n. 1)', 'Leistung': '184 kW a 20 km/h (n. 1)', 'Erhalten': '1 «Rhätia» (RhB), 11 «Heidi» (Club 1889), 14 (fuori dalla RhB)' },
  specNote: 'Dati tecnici della n. 1 secondo historic RhB. Le 16 locomotive non sono tutte uguali; sono state costruite tra il 1889 e il 1908.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM costruì la prima serie 1–5 nel 1889; altre forniture seguirono fino al 1908. La 11 del 1902 si chiama oggi «Heidi».'] },
      { titel: 'Impiego e tecnica', p: ['La locomotiva ha tre assi accoppiati e un asse portante anteriore. I cilindri hanno 340 mm di diametro e 500 mm di corsa, la caldaia lavora a 12 bar; la locomotiva porta con sé acqua (2600 l) e carbone (950 kg).', 'La «Rhätia» è tornata dopo molti anni fuori dai Grigioni ed è stata revisionata dopo il 2014. La «Heidi» appartiene al Club 1889; il registro indica una trasformazione nel 2016.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Ruote motrici di 1050 mm, ruote portanti di 700 mm', 'Scorte d’acqua e carbone sulla locomotiva (locomotiva-tender)', 'Motore a due cilindri a vapore saturo'] }
    ],
  bilder: ['G 3/4 1 «Rhätia» a Bonaduz (2009)', 'G 3/4 1 e Ge 2/4 222 a Coira']
});
uebZug('rhb-mallet', {
  name: 'Locomotive Mallet',
  typ: 'Locomotive a vapore articolate per il pesante servizio di montagna (storiche)',
  text: ['Le locomotive Mallet hanno due gruppi motori sotto un’unica caldaia. Così percorrono curve strette con molti assi motori.', 'La RhB ne aveva tre tipi numerati da 21 a 32.'],
  kennzahlen: [['12', 'locomotive (21–32)'], ['1891', 'prime Mallet (Maffei)'], ['1896', '«Maloja» e «Chiavenna»'], ['1902', 'serie SLM']],
  daten: { 'Bauart': 'locomotive-tender Mallet', 'Betreiber': 'Ferrovia Landquart–Davos e RhB' },
  specNote: 'Secondo la statistica delle locomotive Pospichal. Le trasformazioni delle 21 e 22 non hanno creato locomotive in più.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La notazione con due frazioni descrive i due gruppi motori.'],
        tabelle: { kopf: ['Tipo', 'Numeri', 'Origine'], zeilen: [
          ['G 2/2+2/2', '21–22 (ex LD 6–7)', 'Maffei 1891, poi trasformate in G 2/3+2/2'], ['G 2/2+2/3', '23–24', 'SLM 1896, «Maloja» e «Chiavenna»'], ['G 2/3+2/2', '25–32', 'SLM dal 1902']] } },
      { titel: 'Impiego e tecnica', p: ['Le locomotive articolate più potenti ripresero i treni pesanti di montagna dalle piccole G 3/4. Dopo l’elettrificazione la RhB vendette molte locomotive a vapore, anche all’estero.', 'La 23 «Maloja» passò nel 1926 alle Forze motrici dell’Oberhasli e fu demolita nel 1940.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due gruppi motori, quello anteriore mobile', 'Scorte d’acqua e carbone sulla locomotiva', 'Costruzione Mallet per curve strette'] }
    ],
  bilder: ['Locomotiva Mallet 23 «Maloja»']
});
uebZug('rhb-g45', {
  typ: 'Locomotiva a vapore pesante con tender dal 1904 (storica)',
  text: ['Le G 4/5 erano le locomotive a vapore più potenti della RhB. SLM costruì le 29 locomotive dal 1904; hanno quattro assi accoppiati, un asse portante e un tender.', 'La 107 «Albula» e la 108 del 1906 fanno oggi parte delle locomotive storiche della RhB.'],
  kennzahlen: [['29', 'locomotive (101–129)'], ['1904', 'prime locomotive'], ['2', 'locomotive storiche (107, 108)'], ['2', 'locomotive in Thailandia']],
  daten: { 'Bauart': 'locomotiva a vapore con tender', 'Länge': '13,22–13,97 m respingenti compresi', 'Gewicht': '58,9–69,7 t con tender', 'Leistung': '324–588 kW (440–800 CV indicati)', 'Erhalten': '107 e 108 (RhB); 118 Chiang Mai, 123 Bangkok' },
  specNote: 'Valori secondo Wikipedia. Le forniture differiscono; lunghezza, peso e potenza sono quindi indicati come intervallo dalle prime locomotive (101–104) alle successive. I valori in CV sono potenze indicate.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM costruì la serie dal 1904. Le due locomotive storiche 107 e 108 risalgono al 1906; la 107 porta il nome «Albula».'] },
      { titel: 'Impiego e tecnica', p: ['Le G 4/5 trainavano treni pesanti sull’Albula fino all’elettrificazione della linea. Poi la RhB vendette molte locomotive; la 104 passò nel 1950 al Ferrocarril de La Robla in Spagna.', 'Due ex locomotive della RhB si trovano oggi in Thailandia: la 118 a Chiang Mai e la 123 a Bangkok.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Tender per acqua e carbone', 'Quattro assi accoppiati e un asse portante', 'Traina oggi treni speciali a vapore della RhB'] }
    ],
  bilder: ['G 4/5 107 «Albula» con la Ge 6/6 II 702', 'G 4/5 104 in una foto di fabbrica SLM (1904)']
});
uebZug('rhb-bernina-tw', {
  name: 'Automotrici del Bernina', beiname: 'BCe 4/4 e ABe 4/4 I',
  typ: 'Prime automotrici della ferrovia del Bernina dal 1908 (storiche)',
  text: ['La ferrovia del Bernina iniziò l’esercizio con automotrici elettriche a due carrelli. Più tardi furono trasformate e designate ABe 4/4 I 30–38.', 'Le 30 e 34 sono conservate dalla RhB come automotrici storiche, la 35 alla ferrovia museo Blonay–Chamby.'],
  kennzahlen: [['1908', 'prime automotrici'], ['450 kW', 'potenza (35, museo)'], ['55 km/h', 'velocità massima (35)'], ['3', 'conservate (30, 34, 35)']],
  daten: { 'Bauart': 'automotrici elettriche', 'Betreiber': 'Ferrovia del Bernina, dal 1943 RhB', 'Fahrzeugnummern': 'BCe 4/4 1–14, BCFe 4/4 21–23, poi ABe 4/4 I 30–38', 'Leistung': '395–440 kW (dopo la trasformazione 1946–1953)', 'Höchstgeschwindigkeit': '55 km/h (dopo la trasformazione; prima 45 km/h)', 'Erhalten': '30 e 34 (RhB), 35 (Blonay–Chamby)' },
  specNote: 'Costruttori, potenza e velocità secondo Wikipedia. Gli anni di costruzione delle 30 e 34 differiscono tra i registri. I valori della 35 valgono per il suo stato museale a Blonay–Chamby (900 V).',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Nel 1908/09 la ferrovia del Bernina acquistò le automotrici viaggiatori BCe 4/4 1–14 e nel 1911 le BCFe 4/4 21–23 con compartimento bagagli. Trasformazioni e nuovi numeri ne fecero le ABe 4/4 I 30–38.'] },
      { titel: 'Impiego e tecnica', p: ['Blonay–Chamby indica per la 35 un peso in servizio di 30 t, quattro motori per complessivi 450 kW e 55 km/h. Ha freni a mano, ad aria, a vuoto, reostatico ed elettromagnetico su rotaia.', 'Storicamente la 35 offriva dodici posti di 2a e 31 di 3a classe.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Compartimenti di 2a e 3a classe (storici)', 'Freno elettromagnetico su rotaia', 'Per la linea di contatto a corrente continua della ferrovia del Bernina'] }
    ]
});
uebZug('rhb-abe44ii', {
  typ: 'Automotrice del Bernina del 1964–1972 (storica)',
  text: ['Dal 1964 le nove ABe 4/4 II sostituirono gran parte delle vecchie automotrici del Bernina. Trainavano anche carrozze aggiuntive sulla ripida linea del Bernina.', 'La 46 è conservata come automotrice storica; le 48 e 49 sono state trasformate in veicoli di servizio.'],
  kennzahlen: [['9', 'automotrici (41–49)'], ['680 kW', 'potenza continua'], ['65 km/h', 'velocità massima'], ['1964', 'prime automotrici']],
  daten: { 'Bauart': 'automotrice elettrica', 'Hersteller': 'SWS (meccanica), MFO, SAAS, BBC (elettrica)', 'Länge': '16,54 m (41–46), 16,89 m (47–49)', 'Leistung': '680 kW continui', 'Sitzplätze': '12 in 1a, 24 in 2a classe', 'Erhalten': '46 (storica); 47 ancora elencata' },
  specNote: 'Valori secondo Wikipedia. Franz Skvor, che partecipò all’acquisto, indica 677 kW come valore di progetto dell’epoca.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SWS costruì la parte meccanica, MFO, SAAS e BBC fornirono l’equipaggiamento elettrico. Le 41–46 arrivarono nel 1964/65, le 47–49 nel 1972.', 'La 48 è diventata nel 2012 l’automotrice di servizio Xe 23201, la 49 nel 2014 la Xe 23202 e nel 2015 il veicolo di soccorso Xe 27201 a Poschiavo.'] },
      { titel: 'Impiego e tecnica', p: ['Le automotrici svolgevano il servizio viaggiatori sulla linea del Bernina e trainavano carrozze aggiuntive su pendenze fino al 70 per mille. Avevano freni reostatico, a recupero ed elettromagnetico su rotaia, comando multiplo, e potevano essere telecomandate da una fresa da neve.', 'Dal 2010 le 41–45 sono state demolite. Nel 2021 la 46 ha ritrovato la sua livrea storica con la striscia dorata.'] },
      { titel: 'Dotazione e accessibilità', liste: ['12 posti in 1a e 24 in 2a classe', 'Freno elettromagnetico su rotaia', 'Telecomando da una fresa da neve'] }
    ],
  bilder: ['ABe 4/4 II 46 con lo spazzaneve Xk 9143', 'ABe 4/4 II 42 con un treno corto sulla linea del Bernina (verso il 1980)']
});
uebZug('rhb-abe44iii', {
  typ: 'Automotrice del Bernina del 1988 e 1990 (storica)',
  text: ['Fino al 2023 le sei ABe 4/4 III erano le automotrici più potenti della linea del Bernina. Spesso circolavano in coppia in testa al Bernina Express.', 'Il loro servizio regolare è terminato alla fine del 2023; la 53 «Tirano» si trova oggi al museo ferroviario dell’Albula a Bergün.'],
  kennzahlen: [['6', 'automotrici (51–56)'], ['1016 kW', 'potenza continua'], ['65 km/h', 'velocità massima'], ['2023', 'fine del servizio regolare']],
  daten: { 'Bauart': 'automotrice elettrica', 'Länge': '16,89 m respingenti compresi', 'Leistung': '1016 kW continui', 'Sitzplätze': '12 in 1a, 16 in 2a classe', 'Erhalten': '53 al museo ferroviario dell’Albula; 54 e 56 ancora elencate' },
  specNote: 'Valori secondo Wikipedia; l’opuscolo RhB indica circa 1000 kW e 175 kN. Il dossier indica SLM e ABB come costruttori, Wikipedia SWA e ABB.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le sei automotrici arrivarono in due serie: 51–53 nel 1988, 54–56 nel 1990. Portano nomi come 51 «Poschiavo», 53 «Tirano» e 54 «Hakone».'] },
      { titel: 'Impiego e tecnica', p: ['Le automotrici trainavano treni regionali e il Bernina Express, spesso in coppia. Hanno lasciato il servizio regolare alla fine del 2023, perché non soddisfacevano i requisiti per i viaggiatori a mobilità ridotta e non avevano il sistema ZSI 127; gli Allegra le hanno sostituite.', 'Le 51, 52 e 55 sono state demolite. La 53 si trova al museo ferroviario dell’Albula da luglio 2024.'] },
      { titel: 'Dotazione e accessibilità', liste: ['12 posti in 1a e 16 in 2a classe', 'Circolazione in coppia in comando multiplo', 'Nessun sistema ZSI 127'] }
    ],
  bilder: ['ABe 4/4 III 56 e 51 al Lago Bianco', 'ABe 4/4 III sul viadotto elicoidale di Brusio']
});
uebZug('rhb-abe501', {
  beiname: 'Retico volante',
  typ: 'Automotrice leggera in acciaio del 1939/40 (storica)',
  text: ['Le quattro ABe 4/4 501–504 erano automotrici leggere in acciaio per la rete a corrente alternata. Erano soprannominate «Fliegender Rätier» (il Retico volante).', 'La 501 è conservata come automotrice storica.'],
  kennzahlen: [['4', 'automotrici'], ['1939', 'costruzione'], ['490 kW', 'potenza (opuscolo)'], ['70 km/h', 'velocità massima (opuscolo)']],
  daten: { 'Bauart': 'automotrice elettrica leggera in acciaio', 'Hersteller': 'SWS (meccanica), BBC e MFO (elettrica)', 'Länge': '18,00 m respingenti compresi', 'Leistung': 'circa 490 kW', 'Sitzplätze': '12 in 1a, 28 in 2a classe', 'Erhalten': '501 (storica)' },
  specNote: 'Potenza e velocità secondo l’opuscolo RhB «Veicoli storici» (arrotondate); lunghezza, peso e posti secondo Wikipedia. Wikipedia indica 440 kW di potenza oraria.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SWS costruì le quattro automotrici nel 1939/40 con equipaggiamento elettrico BBC e MFO. La loro cassa autoportante leggera in acciaio era allora una novità.'] },
      { titel: 'Impiego e tecnica', p: ['Offrivano un proprio servizio veloce di automotrici sulla rete a corrente alternata. Una foto del 1995 mostra ancora le 502 e 503 con una Ge 4/4 I a Pontresina.', 'La 501 ricevette più tardi una cassa rinforzata, una cabina modificata e un nuovo arredamento interno. Non mostra quindi più lo stato del 1939.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Compartimenti di 1a e 2a classe (AB)', 'Cassa autoportante leggera in acciaio', 'Arredamento interno rinnovato (501)'] }
    ],
  bilder: ['ABe 4/4 501 nel deposito di Landquart (2008)', 'Ge 4/4 I 603 con le ABe 4/4 503 e 502 a Pontresina (1995)']
});
uebZug('rhb-be44-511', {
  beiname: '511–516 treni navetta',
  typ: 'Treni navetta regionali del 1971 e 1979 (storici)',
  text: ['Con carrozze intermedie e carrozze pilota, le Be 4/4 511–516 formavano treni navetta per il traffico regionale e suburbano. Quattro arrivarono nel 1971, due nel 1979.', 'Dal 2021 vengono ritirate.'],
  kennzahlen: [['6', 'automotrici'], ['784 kW', 'potenza'], ['90 km/h', 'velocità massima'], ['1971', 'primi treni']],
  daten: { 'Bauart': 'automotrice elettrica con carrozze intermedie e carrozze pilota', 'Hersteller': 'FFA (cassa), SIG (carrelli), SAAS (elettrica)', 'Fahrzeugnummern': '511–516; carrozze pilota ABDt 1711–1716', 'Länge': '18,70 m respingenti compresi (automotrice)', 'Gewicht': '44,6 t', 'Sitzplätze': '40 in 2a classe (automotrice)', 'Erhalten': '514 museale a Bergün (secondo il registro)' },
  specNote: 'Valori secondo Wikipedia. Wikipedia indica solo la cabina della 514 per il museo ferroviario dell’Albula; il registro elenca la 514 come veicolo museale a Bergün.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['FFA costruì le casse, SIG i carrelli e SAAS l’equipaggiamento elettrico. Le prime quattro automotrici arrivarono nel 1971, altre due nel 1979. L’automotrice e l’intero treno navetta sono veicoli diversi.'] },
      { titel: 'Impiego e tecnica', p: ['I treni navetta circolavano nel traffico regionale e suburbano, per esempio attorno a Coira, verso Thusis e Davos. Quattro motori di trazione erogano insieme 784 kW; la velocità massima è di 90 km/h.', 'Dal 2021 vengono ritirati; il primo treno è andato alla demolizione il 29 gennaio 2021. Secondo il registro la 515 è accantonata.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Carrozze pilota ABDt con 1a e 2a classe e compartimento bagagli', 'Servizio navetta senza manovre', 'Quattro motori di trazione da 196 kW ciascuno'] }
    ],
  bilder: ['Treno navetta con la Be 4/4 511', 'Treno navetta Be 4/4 a Tiefencastel (1984)', '2a classe nella carrozza pilota ABDt 1713 (2016)']
});
uebZug('rhb-misox', {
  name: 'Automotrici della Mesolcina',
  typ: 'Automotrici della ferrovia Bellinzona–Mesocco (storiche)',
  text: ['La ferrovia da Bellinzona a Mesocco, in Mesolcina, entrò nella RhB nel 1942. Portò con sé proprie automotrici a corrente continua.', 'La BDe 4/4 491 del 1958 è oggi un veicolo museale a Bergün.'],
  kennzahlen: [['1907', 'apertura Bellinzona–Mesocco'], ['5', 'automotrici 451–455'], ['1958', 'BDe 4/4 491'], ['1942', 'alla RhB']],
  daten: { 'Bauart': 'automotrici elettriche', 'Betreiber': 'Ferrovia Bellinzona–Mesocco (BM), dal 1942 RhB', 'Erhalten': '491 (Bergün)' },
  specNote: 'Secondo la statistica delle locomotive Pospichal. Una serie RhB 491–492 non è documentata nei registri.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La ferrovia della Mesolcina aveva tre tipi di automotrici:'],
        tabelle: { kopf: ['Veicolo', 'Origine', 'Costruzione'], zeilen: [
          ['BCe/ABDe 4/4 451–455', 'BM 1–5, Ringhoffer e MFO', '1907 e 1909'], ['Ke/Fe 4/4 471', 'BM Ke 4/4 501, Ringhoffer e MFO', '1907'], ['BDe 4/4 491', 'SWS e BBC', '1958']] } },
      { titel: 'Impiego e tecnica', p: ['Le 451–455 svolgevano il traffico viaggiatori e bagagli, la 471 merci e bagagli. La 491 arrivò nel 1958 come automotrice più recente.', 'Foto del 1966 mostrano la 452 e la 491 a Mesocco.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Compartimenti viaggiatori e vano bagagli (ABDe)', 'Per la linea di contatto a corrente continua della ferrovia della Mesolcina', 'La 471 come automotrice per merci e bagagli'] }
    ],
  bilder: ['ABDe 4/4 452 a Mesocco (1966)', 'BDe 4/4 491 a Mesocco (1966)']
});
uebZug('rhb-arosa', {
  name: 'Automotrici di Arosa',
  typ: 'Automotrici della ferrovia Coira–Arosa (storiche)',
  text: ['Dal 1914 la ferrovia Coira–Arosa circolò con proprie automotrici a corrente continua. Dopo la ripresa del 1942 ricevettero i numeri RhB 481–486.', 'Dal 1957 la RhB riassegnò questi numeri a moderne ABDe 4/4. Fino al 1997 la linea di Arosa funzionò in corrente continua.'],
  kennzahlen: [['1914', 'apertura Coira–Arosa'], ['6', 'automotrici ChA 1–6'], ['1957', 'nuove ABDe 4/4 481–486'], ['1997', 'passaggio alla corrente alternata']],
  daten: { 'Bauart': 'automotrici elettriche', 'Hersteller': 'SWS, BBC (ABDe 4/4 del 1957/58)', 'Betreiber': 'Ferrovia Coira–Arosa (ChA), dal 1942 RhB', 'Stromsystem': '2400 V corrente continua (fino al 1997)', 'Fahrzeugnummern': 'ChA 1–6 → RhB 481–486 (vecchia 486 → 487); nuove ABDe 4/4 481–486; ABe 4/4 487–488', 'Erhalten': '484 e 486 a La Mure (fuori servizio)' },
  specNote: 'I numeri 481–486 sono stati assegnati due volte. Gli anni di costruzione 1914 e 1957 non vanno quindi attribuiti allo stesso veicolo.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Ci sono state due generazioni con gli stessi numeri:'],
        tabelle: { kopf: ['Generazione', 'Numeri', 'Costruzione'], zeilen: [
          ['Automotrici ChA', 'ChA 1–6 → RhB 481–486, vecchia 486 → 487', '1914, poi 5 e 6'], ['ABDe 4/4', '481–486 (nuove)', '1957/58, SWS e BBC'], ['ABe 4/4', '487, 488 (nuove)', 'più tardi; poi alle CJ']] } },
      { titel: 'Impiego e tecnica', p: ['Nel 1997 la linea di Arosa è passata da 2400 V corrente continua a 11 kV corrente alternata. Ciò ha posto fine all’impiego delle automotrici a corrente continua.', 'Secondo il registro le ex 484 e 486 si trovano a La Mure in Francia, fuori servizio.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Compartimenti viaggiatori e vano bagagli (ABDe)', 'Per 2400 V corrente continua', 'Due carrelli'] }
    ],
  bilder: ['ABDe 4/4 482 della linea di Arosa (anni 1980)', 'Disegno tipo dell’automotrice BCF4 della ferrovia Coira–Arosa']
});
uebZug('rhb-dampfschneeschleuder', {
  name: 'Frese da neve storiche',
  typ: 'Frese da neve a vapore ed elettriche (storiche)',
  text: ['Già dal 1910 al 1913 la ferrovia del Bernina e la RhB avevano frese da neve a vapore. La Xrot d 9213 era ancora in azione al Lago Bianco nel 2010.', 'Altre frese storiche si trovano alla ferrovia a vapore della Furka e a Blonay–Chamby.'],
  kennzahlen: [['1913', 'frese della rete principale 9211, 9212'], ['1912', 'fresa del Bernina 1052'], ['64 t', 'peso in servizio 1052'], ['1958', 'fresa Beilhack 9216']],
  daten: { 'Bauart': 'frese da neve a vapore ed elettriche', 'Hersteller': 'SLM (frese a vapore), Beilhack (9216)', 'Betreiber': 'RhB e ferrovia del Bernina', 'Erhalten': '9212 (DFB, come R 12), 9213 (RhB), 1052 / vecchia 9214 (Blonay–Chamby), 9216 (DFB)' },
  specNote: 'Per la 9213 le fonti indicano il 1910 o il 1911. La scheda di Blonay–Chamby indica «1051» nell’intestazione, ma la storia rimanda alla 1052.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Il numero 9214 è stato assegnato due volte: prima a una fresa a vapore del Bernina, poi a una nuova macchina del 2001.'],
        tabelle: { kopf: ['Macchina', 'Costruzione', 'Oggi'], zeilen: [
          ['Xrot d 9211, 9212 (rete principale)', '1913, SLM', '9211 demolita, 9212 alla DFB'], ['Xrot d 9213 (ex Bernina R 1051)', '1910/11', 'RhB'],
          ['Xrot d 9214 (ex Bernina R 1052)', '1912, SLM 2299', 'Blonay–Chamby'], ['Xrot e 9215 «macinino da caffè»', 'trasformata nel 1941 dal carro K 208 del 1908', 'demolita nel 1983'],
          ['Xrot m 9216', '1958, Beilhack', 'alla DFB dal 2015'], ['Xrot et 9218, 9219', '–', '–']] } },
      { titel: 'Impiego e tecnica', p: ['Le frese della rete principale non avevano una trazione completa e venivano spinte. Le macchine del Bernina hanno propri rodiggi motori; ma durante lo sgombero la ruota della fresa ha bisogno del vapore, perciò di solito spinge anche una locomotiva.', 'La 9215 fu dapprima carro merci, poi carro cucina e dal 1941 fresa da neve elettrica. La fresa Beilhack 9216 sgombera oggi la stazione di Realp per la DFB.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Ruota della fresa azionata a vapore (Xrot d)', '1052: pressione in caldaia 14 bar, 7 m³ d’acqua e 4 t di carbone', 'Xrot et 9218: nel 1968 telecomandava l’automotrice di spinta'] }
    ],
  bilder: ['Fresa a vapore Xrot d 9213 al Lago Bianco (2010)', 'Ex fresa RhB R 12 alla DFB tra Realp e Tiefenbach', 'Fresa Beilhack 9216 alla DFB (2020)']
});
uebZug('rhb-hist-wagen', {
  name: 'Carrozze viaggiatori storiche',
  typ: 'Carrozze viaggiatori, postali e di società conservate',
  text: ['La RhB conserva una serie di carrozze storiche per treni speciali: carrozze viaggiatori delle origini, carrozze di società e postali.', 'Altre ex carrozze della RhB circolano alla ferrovia museo Blonay–Chamby.'],
  kennzahlen: [['6', 'carrozze WN 9801–9806'], ['1903', 'AB 121 (Blonay–Chamby)'], ['1939', 'carrozze ad accesso centrale'], ['1889', 'origini della LD']],
  daten: { 'Bauart': 'carrozze viaggiatori, postali e di società storiche', 'Betreiber': 'Ferrovia Landquart–Davos e RhB', 'Erhalten': 'RhB; AB 121 e As 2 a Blonay–Chamby' },
  specNote: 'I registri indicano anni di costruzione diversi per diverse carrozze; non sono quindi indicati.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['I numeri WN sono numeri amministrativi che si aggiungono alla vecchia iscrizione restaurata.'],
        tabelle: { kopf: ['Carrozza', 'Funzione'], zeilen: [
          ['LD C 32 / WN 9801', 'carrozza viaggiatori delle origini, «Il Samedrin»'], ['B 2138 / WN 9802', 'carrozza di società «Filisurer Stübli»'], ['Z° 26 / WN 9803', 'carrozza postale'],
          ['BC 110 / WN 9804', 'carrozza viaggiatori della Mesolcina «Ul Mesolcines»'], ['F 4 / WN 9805', 'bagagliaio e carrozza bar'], ['C 66 / WN 9806', 'carrozza viaggiatori'],
          ['A 1251, B 2302', 'carrozze ad accesso centrale del 1939'], ['B 2245–2247, D 4205', 'carrozze a carrelli e bagagliaio']] } },
      { titel: 'Impiego e tecnica', p: ['Le carrozze circolano in treni storici della RhB, spesso dietro locomotive storiche. Nelle carrozze restaurate sedili, colori e disposizione possono differire dallo stato di un tempo.', 'A Blonay–Chamby si trova l’AB 121, una carrozza SIG del 1903 con dodici posti di 1a e dodici di 2a classe. L’As 2 del 1903 era una carrozza salone, dal 1948 la carrozza panoramica 2191, e dal 1999 una carrozza salone-bar.'] },
      { titel: 'Dotazione e accessibilità', liste: ['AB 121: corridoio laterale, toilette e illuminazione elettrica', 'Freni a mano e a vuoto sulle vecchie carrozze', 'Bar nell’F 4 e nell’As 2'] }
    ],
  bilder: ['Carrozza storica BC 110 «Ul Mesolcines» a Samedan (2015)', 'Carrozze storiche B 2060 e A 1102 (2024)', 'AB 121 alla ferrovia museo Blonay–Chamby (2016)']
});
uebZug('rhb-hist-gueterwagen', {
  name: 'Carri merci storici',
  typ: 'Carri merci conservati della RhB',
  text: ['Alcuni carri merci storici mostrano come la RhB trasportava un tempo le merci: carri coperti, carri aperti a sponde alte e basse, carri per tronchi e un carro per l’acqua.', 'Oggi portano anche un numero WN.'],
  kennzahlen: [['7', 'carri e coppie conservati'], ['9851', 'primo numero WN'], ['N', 'coppia di carri per tronchi'], ['K', 'carri coperti']],
  daten: { 'Bauart': 'carri merci storici' },
  specNote: 'Secondo il registro WN di Haribu (stato marzo 2026). Le famiglie originali erano molto più grandi; i carri non conservati mancano qui.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Questi carri sono conservati:'],
        tabelle: { kopf: ['Carro', 'Numero WN', 'Tipo'], zeilen: [
          ['N 1520 / N 1513', 'WN 9851', 'coppia di carri per tronchi'], ['K1 5615', 'WN 9852', 'carro coperto'], ['M 7070', 'WN 9853', 'carro aperto a sponde basse, prima P 10059'],
          ['K 5563', 'WN 9854', 'carro coperto'], ['L3 6603', 'WN 9855', 'carro aperto a sponde alte'], ['K 5342', 'WN 9856', 'carro coperto, prima Xk 9069'], ['Uh 8101', 'WN 9862', 'carro per acqua e cisterna']] } },
      { titel: 'Impiego e tecnica', p: ['Il numero WN è un numero amministrativo; la vecchia iscrizione restaurata resta sul carro. Il registro storico dei numeri conosce molti altri gruppi, per esempio K, L, M, R, S e U.', 'I documenti pubblici non bastano per un elenco completo di tutti i carri merci dal 1889.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Carri coperti (K)', 'Carri aperti (L e M)', 'Coppia di carri per tronchi (N)', 'Carro per l’acqua (Uh)'] }
    ]
});
uebZug('rhb-ehem-diesel', {
  name: 'Ex veicoli diesel',
  typ: 'Ex locomotive diesel e un’automotrice diesel della RhB (storiche)',
  text: ['Le Gm 3/3 231–233 del 1975/76 hanno manovrato per decenni alla RhB. Oggi si trovano alla ferrovia a vapore della Furka.', 'La Gm 4/4 241 è passata nel 2023 alla Brohltalbahn in Germania.'],
  kennzahlen: [['3', 'Gm 3/3 231–233'], ['1975', 'Gm 3/3 costruite'], ['2023', '241 alla Brohltalbahn'], ['1947', 'BFm 150 dalla FO']],
  daten: { 'Bauart': 'locomotive diesel e automotrice diesel', 'Fahrzeugnummern': 'Gm 3/3 231–233; Gm 4/4 241; BFm 2/2 150 (ex FO 22)', 'Länge': '7,96 m respingenti compresi (Gm 3/3)', 'Gewicht': '34 t (Gm 3/3)', 'Leistung': '386 kW motore diesel, 220 kW alla ruota (Gm 3/3)', 'Höchstgeschwindigkeit': '55 km/h (Gm 3/3)', 'Erhalten': 'Gm 3/3 alla DFB; 241 alla Brohltalbahn (D4)' },
  specNote: 'Valori delle Gm 3/3 secondo Wikipedia; la DFB mantiene una Gm 3/3 in esercizio, le altre due servono come donatrici di pezzi. Per la Gm 4/4 241 i registri indicano il 1958 o il 1959 come anno di costruzione. Per la BFm 150, il 1947 è l’anno di ripresa, non di costruzione.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le Gm 3/3 231–233 sono state costruite nel 1975/76. La Gm 4/4 241 risale alla fine degli anni 1950. L’automotrice diesel BFm 2/2 150 arrivò nel 1947 dalla ferrovia Furka-Oberalp, dove portava il numero 22.'] },
      { titel: 'Impiego e tecnica', p: ['Le Gm 3/3 manovravano in stazioni come Landquart e Coira. Oggi si trovano alla ferrovia a vapore della Furka, in stati diversi.', 'Dal 2023 la Gm 4/4 241 fa parte del parco della Brohltalbahn come D4.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Trazione diesel', 'Tre (Gm 3/3) o quattro (Gm 4/4) assi motori', 'Vano bagagli nella BFm (lettera F)'] }
    ],
  bilder: ['Gm 3/3 233 a Landquart', 'Gm 4/4 241 a Untervaz (2019)']
});
uebZug('rhb-draisinen', {
  name: 'Draisine', beiname: 'Dh 1/2 e Dm 1/2',
  typ: 'Draisina a mano e draisina a motore della RhB (storiche)',
  text: ['Due piccole ex draisine della RhB si trovano alla ferrovia museo Blonay–Chamby: una draisina a mano di circa il 1900 e una draisina a motore svedese degli anni 1930.', 'Entrambe sono arrivate alla ferrovia museo il 22 marzo 1968.'],
  kennzahlen: [['2', 'draisine'], ['1900', 'draisina a mano (circa)'], ['anni 1930', 'draisina a motore'], ['1968', 'a Blonay–Chamby']],
  daten: { 'Bauart': 'draisina a mano e draisina a motore', 'Betreiber': 'RhB, oggi ferrovia museo Blonay–Chamby', 'Antrieb': 'forza muscolare (Dh), motore a benzina a due tempi (Dm)', 'Erhalten': 'Ferrovia museo Blonay–Chamby (dal 1968)' },
  specNote: 'Il museo non indica potenza né velocità.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La draisina a mano Dh 1/2 risale a circa il 1900, la draisina a motore Dm 1/2 viene dalla Svezia e risale agli anni 1930. Entrambe sono arrivate a Blonay–Chamby il 22 marzo 1968.'] },
      { titel: 'Impiego e tecnica', p: ['La draisina a mano si muove con la forza muscolare tramite leve e ingranaggi. Il museo suppone che circolasse soprattutto in discesa e sui tratti pianeggianti.', 'La draisina a motore ha un motore a benzina a due tempi e un freno a mano e a pedale; è stata revisionata nel 1995.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Azionamento a leva (Dh)', 'Motore a benzina a due tempi (Dm)', 'Freno a mano e a pedale (Dm)'] }
    ],
  bilder: ['Draisina a motore Dm 1/2 a Blonay–Chamby (2011)']
});

/* carte «Dove circola?» */
uebEinsatz({
  'rhb-capricorn': 'Secondo la RhB su Landquart–Davos–Filisur, Landquart–Scuol, Landquart–St. Moritz e Coira–Disentis/Mustér. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-allegra': 'Sulla rete principale e sulla linea del Bernina fino a Tirano, per esempio nel Bernina Express da Coira attraverso l’Albula. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-allegra-stz': 'Soprattutto nel traffico pendolare attorno a Coira, per esempio sulla S-Bahn Coira–Thusis. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-alvra': 'Sulla linea dell’Albula tra Coira e St. Moritz. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-ge44ii': 'Su tutta la rete a corrente alternata della RhB, anche sulla linea di Arosa. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-ge44iii': 'In testa ai treni veloci sull’Albula, al Glacier Express e ai treni auto nella galleria della Vereina. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-panorama': 'Nel Bernina Express da Coira a Tirano attraverso l’Albula e il passo del Bernina; carrozze scoperte anche nella gola del Reno. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-glacier': 'Nel Glacier Express da St. Moritz e Davos via Coira e Disentis/Mustér, poi sulla rete della MGB fino a Zermatt. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-ew': 'In treni trainati su tutta la rete della RhB. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-steuerwagen': 'In treni navetta con locomotiva sulla rete principale e nei treni auto. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-gastro': 'In treni speciali e charter, per esempio nell’Alpine Classic Pullman Express. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-vereina': 'Tra le stazioni di carico di Klosters Selfranga e Sagliains attraverso la galleria della Vereina. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-gepaeckwagen': 'Nei treni della rete principale; le carrozze per bici BD 56401–56406 circolano nei treni Alvra sull’Albula. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-haik': 'Nel traffico merci verso le valli grigionesi. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-uac': 'Nel traffico merci sulla rete della RhB. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-za': 'Per il rifornimento dei Grigioni di oli minerali, su tutta la rete. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-fac': 'Per ghiaia e altri materiali sfusi sulla rete della RhB. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-flachwagen': 'Nel traffico merci di macchine, legname, acciaio e container su tutta la rete. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-acts': 'Nel traffico container su tutta la rete della RhB. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-container': 'Nel traffico container su tutta la rete della RhB. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-spezialtransport': 'Per carichi pesanti e alti sulla rete della RhB. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-geaf22': 'In servizio di manovra, tra l’altro a Landquart, Coira, Ilanz, Thusis, Davos Platz e Zernez.',
  'rhb-ge33': 'In servizio di manovra a Samedan e a Coira.',
  'rhb-gmf44-242': 'In servizio di manovra sulla rete principale, per esempio a Klosters Platz, Landquart e Davos. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-taf22': 'In officine e depositi, tra l’altro a Landquart e Poschiavo.',
  'rhb-gmf44ii': 'In testa a treni cantiere e, in inverno, con frese da neve su tutta la rete della RhB. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-gem44': 'Sulla linea del Bernina, stazionate a Pontresina e Poschiavo; in diesel anche sulla rete principale. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-tm': 'In servizio di manovra e in testa a piccoli treni cantiere su tutta la rete. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-tieflade': 'Nella logistica dei cantieri sulla rete della RhB. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-windhoff': 'Previsti dal 2029 per costruzione e manutenzione su tutta la rete della RhB. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-dienstwagen': 'Per lavori al binario, misurazioni e materiale su tutta la rete. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-loeref': 'Per interventi nella galleria della Vereina, stazionati su entrambi i lati della galleria. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-fahrleitung': 'Per lavori alla linea di contatto su tutta la rete. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-schneeschleuder': 'In inverno sulla rete principale e sulla linea del Bernina. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-ge66i': 'In passato soprattutto sulla linea dell’Albula. Conservate a Landquart e Samedan nonché al Museo Svizzero dei Trasporti di Lucerna e a Bergün. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-ge66ii': 'In passato in testa a treni pesanti sulla rete principale; la 702 si trova al Museo Svizzero dei Trasporti di Lucerna. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-ge44i': 'In passato su tutta la rete a corrente alternata; la 605 traina oggi treni storici. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-ge24': 'Dapprima sulla linea dell’Engadina Bever–Scuol; conservate a Landquart, al Museo Svizzero dei Trasporti di Lucerna e al museo ferroviario dell’Albula. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-ge46': 'Dapprima sulla linea dell’Engadina, poi sulla rete principale; la 353 traina treni museali. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-bernina-loks': 'Sulla linea del Bernina; la 81 circola oggi alla ferrovia museo Blonay–Chamby. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-g34': 'Dal 1889 sulla ferrovia Landquart–Davos; oggi in testa a treni speciali a vapore. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-mallet': 'In passato nel pesante servizio di montagna sulla ferrovia Landquart–Davos e sull’Albula. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-g45': 'In passato in testa a treni pesanti sull’Albula; oggi in testa a treni speciali a vapore. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-bernina-tw': 'Sulla linea del Bernina; la 35 si trova alla ferrovia museo Blonay–Chamby. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-abe44ii': 'Sulla linea del Bernina tra St. Moritz e Tirano. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-abe44iii': 'Fino al 2023 sulla linea del Bernina; la 53 si trova al museo ferroviario dell’Albula a Bergün. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-abe501': 'In passato sulla rete a corrente alternata, per esempio in Engadina. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-be44-511': 'In passato nel traffico regionale e suburbano, per esempio attorno a Coira, verso Thusis e Davos. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-misox': 'In passato sulla ferrovia Bellinzona–Mesocco; la 491 si trova a Bergün. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-arosa': 'In passato sulla linea di Arosa Coira–Arosa, in corrente continua fino al 1997. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-dampfschneeschleuder': 'In passato sulla linea del Bernina e sulla rete principale; conservate alla RhB, alla DFB a Realp e a Blonay–Chamby. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-hist-wagen': 'Nei treni storici della RhB; alcune carrozze a Blonay–Chamby. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-hist-gueterwagen': 'In passato nel traffico merci della RhB; oggi in treni storici. Lo scartamento metrico è tratteggiato e semplificato.',
  'rhb-ehem-diesel': 'In passato in servizio di manovra, per esempio a Landquart e Coira; le Gm 3/3 si trovano oggi alla DFB a Realp.',
  'rhb-draisinen': 'Oggi alla ferrovia museo Blonay–Chamby.'
});

/* ---- 40-zb.js ---- */
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

/* ---- 41-mob.js ---- */
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
