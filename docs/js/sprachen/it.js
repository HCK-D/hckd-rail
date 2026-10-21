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
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Bombardier Transportation ha fornito le Re 482 a FFS Cargo dal 2002. Fanno parte della famiglia TRAXX.', 'La panoramica della flotta distingue 35 Re 482.1 e 15 Re 482.2, in tutto 50 locomotive. Equipaggiamento e pacchetti nazionali variano secondo la serie.'] },
      { titel: 'Impiego e tecnica', p: ['Le locomotive hanno assunto treni merci internazionali verso la Germania e in parte l’Austria, oltre a servizi nel traffico merci svizzero.', 'I sistemi di sicurezza per la Svizzera e la Germania permettono di attraversare il confine senza cambiare locomotiva.'] }
    ],
  bilder: ['Re 482 007 a Köln-Kalk Nord', 'Re 482 023 di FFS Cargo con treno merci presso Erbach (Rheingau)', 'Re 482 con treno merci davanti a un ponte ferroviario', 'Re 482 005 di FFS Cargo a Eschweiler', 'Re 482 005']
});

uebZug('re-484', {
  typ: 'Locomotiva elettrica bicorrente',
  text: ['La Re 484 è una locomotiva elettrica bicorrente per il traffico merci tra Svizzera e Italia.', 'Bombardier l’ha sviluppata sulla base della piattaforma TRAXX.'],
  kennzahlen: [['21', 'locomotive acquistate'], ['5600 kW', 'potenza massima'], ['140 km/h', 'velocità massima'], ['2004–2006', 'consegna']],
  daten: { 'Stromsystem': '15 kV CA e 3 kV CC', 'Gewicht': '86 t a vuoto', 'In Betrieb seit': '2004–2006 (consegna)', 'Einsatz': 'Svizzera e Italia' },
  specNote: 'Il catalogo dei tipi di marcia delle FFS usa 86 t; la letteratura più vecchia indica talvolta 85,4 t. Vale qui il valore ufficiale del 2026.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['FFS Cargo ha acquistato da Bombardier Transportation 21 Re 484 della famiglia TRAXX. Sono state consegnate dal 2004 al 2006.'] },
      { titel: 'Impiego e tecnica', p: ['La Re 484 era destinata al traffico merci internazionale Svizzera–Italia; più tardi ha circolato anche nel traffico interno svizzero.', 'La locomotiva circola con la corrente alternata svizzera e la corrente continua italiana. Il controllo della marcia dei treni specifico per ogni paese permette di attraversare il confine senza cambiare locomotiva.'] }
    ],
  bilder: ['Re 484 006 di FFS Cargo a Steinen', 'Re 484 018 di FFS Cargo', 'Re 484 012 con pubblicità a Singen (Hohentwiel)', 'Re 484 003', 'Re 484 020 con EuroCity a Zurigo HB']
});

uebZug('re-420', {
  typ: 'Locomotiva universale a quattro assi',
  text: ['La Re 420, un tempo Re 4/4 II, è una delle locomotive elettriche svizzere più caratteristiche. Ha trainato treni viaggiatori veloci, treni merci e treni navetta.', 'La serie è stata costruita in più lotti nel corso di molti anni; per questo la forma del frontale e la lunghezza variano tra le singole serie.'],
  kennzahlen: [['276', 'costruite per le FFS'], ['4700 kW', 'potenza max.'], ['140 km/h', 'velocità massima'], ['1964–1985', 'messe in servizio']],
  daten: { 'Achsfolge': 'Bo′Bo′, 4 assi motori', 'Länge': 'circa 14,8–15,5 m fuori respingenti *', 'Gewicht': 'circa 80–85 t in servizio *', 'Leistung': '4650 kW, potenza oraria alla ruota **', 'Elektrische Bremse': 'a recupero', 'In Betrieb seit': '1964 (ultima serie 1985)', 'Anzahl': '276 Re 4/4 II (numero costruito per le FFS)', 'Hersteller': 'parte meccanica SLM Winterthur; parte elettrica BBC, MFO e SAAS' },
  specNote: '* A seconda del lotto e delle trasformazioni. ** Valore per la loc 11108 descritta da SBB Historic; FFS Infrastruttura indica 4700 kW come potenza massima per il tipo di marcia Re 420.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Nel 1964 le FFS hanno ricevuto sei prototipi, seguiti da diverse serie fino al 1985. La SLM di Winterthur ha costruito la parte meccanica, l’elettrica era di BBC, MFO e SAAS.', 'La variante Re 421 è nata da trasformazioni per la Germania; 30 locomotive sono state modernizzate nel 2011–2016 come «LION» per i treni di rinforzo della S-Bahn di Zurigo.'],
        hinweis: 'Effettivo: FFS Historic indica 276 Re 4/4 II acquistate per le FFS, una vecchia rivista Cargo 277 locomotive consegnate. Questa pagina segue FFS Historic; nessuna delle due cifre è un effettivo attuale.' },
      { titel: 'Impiego e tecnica', p: ['La Re 4/4 II ha circolato nel traffico viaggiatori e merci, tra l’altro davanti a treni diretti in pianura e sulle rampe d’accesso al Gottardo e al Sempione. Una parte è passata a FFS Cargo, che cita ancora la Re 420 nella sua offerta di noleggio in Svizzera.', 'I quattro motori di trazione sono comandati da un graduatore. Il comando multiplo permette anche la marcia con una Re 6/6 come «Re 10/10».'] }
    ],
  bilder: ['«Re 10/10»: Re 620 e Re 420 in testa a un treno merci', 'Re 420 331-1 in autunno', 'Re 420 di WRS con treno di legname', 'Re 420 di FFS Cargo con treno merci', 'Re 420 con carri gialli tra i vigneti sul lago', 'Re 420 con treno merci tra vigneti e campi', 'Re 420 in livrea blu con carri cisterna nello scalo di smistamento']
});

uebZug('re-620', {
  typ: 'Locomotiva di linea a sei assi',
  text: ['La Re 620, un tempo Re 6/6, è stata sviluppata per treni viaggiatori e merci pesanti sulle linee del San Gottardo e del Sempione.', 'I suoi tre carrelli a due assi uniscono un elevato sforzo di trazione all’autorizzazione per le velocità in curva più elevate della categoria di treno R.'],
  kennzahlen: [['89', 'locomotive costruite'], ['7832 kW', 'potenza oraria alla ruota'], ['140 km/h', 'velocità massima'], ['1972–1980', 'periodo di costruzione']],
  daten: { 'Achsfolge': 'Bo′Bo′Bo′, 6 assi motori', 'Länge': '19,31 m fuori respingenti', 'Gewicht': '120 t in servizio', 'Leistung': '7244 kW continuativi alla ruota (7832 kW orari)', 'Elektrische Bremse': 'a recupero', 'In Betrieb seit': '1972; serie 1975–1980', 'Hersteller': 'parte meccanica SLM Winterthur; parte elettrica e montaggio BBC, in parte SAAS' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Quattro prototipi sono apparsi nel 1972; dal 1975 al 1980 sono seguite 85 locomotive di serie, in tutto 89 (11601–11689). La SLM ha costruito cassa e telaio, la BBC ha fornito l’equipaggiamento elettrico.', 'Il montaggio finale è avvenuto per lo più alla BBC di Oerlikon, per i numeri 11635–11654 alla SAAS di Ginevra. I primi due prototipi avevano una cassa in due parti.'],
        hinweis: 'Il numero 89 indica la serie costruita storicamente, non l’effettivo oggi in servizio.' },
      { titel: 'Impiego e tecnica', p: ['Le locomotive hanno dapprima trainato pesanti treni viaggiatori e merci. In comando multiplo con una Re 4/4 II o III formavano la «Re 10/10» per i treni merci pesanti. Dopo la divisione delle FFS sono passate a FFS Cargo, che offre ancora la Re 620 a noleggio.', 'Dal 2007, 63 locomotive hanno ricevuto l’ETCS livello 2. FFS Historic colloca l’inizio dei ritiri per età nel febbraio 2021.'] }
    ],
  bilder: ['Re 620 nei colori Cargo con carri cisterna sul lago', '«Re 10/10»: Re 620 e Re 420 in testa a un treno merci', 'Re 620 nei colori Cargo con carri silo', 'Re 620 con treno di carri cisterna', 'Re 620 con treno cantiere, mucche in primo piano', 'Re 620 nei colori Cargo in stazione', 'Re 620 con treno di carri cisterna']
});

uebZug('re-474', {
  typ: 'Locomotiva elettrica bicorrente',
  text: ['La Re 474 è una locomotiva elettrica bicorrente della famiglia Siemens ES64F4 (Eurosprinter).', 'FFS Cargo l’ha acquistata per i treni merci transfrontalieri tra Svizzera e Italia.'],
  kennzahlen: [['12', 'rilevate da FFS Cargo'], ['6400 kW', 'potenza massima'], ['140 km/h', 'velocità massima'], ['2005', 'inizio del servizio presso FFS Cargo']],
  daten: { 'Stromsystem': '15 kV CA e 3 kV CC', 'Gewicht': '87 t a vuoto', 'Fahrzeugnummern': 'Re 474 001–018, di cui 12 rilevate', 'Einsatz': 'traffico merci Svizzera–Italia' },
  specNote: 'La serie di numeri presenta lacune perché FFS Cargo ha rilevato solo dodici locomotive della serie inizialmente prevista.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Siemens ha costruito la Re 474 come locomotiva bicorrente della famiglia ES 64 F4. FFS Cargo ha impiegato dal 2005 dodici locomotive; questo numero non è un effettivo confermato per ottobre 2026.'] },
      { titel: 'Impiego e tecnica', p: ['Le locomotive hanno circolato nel traffico merci Svizzera–Italia, tra l’altro sul Sempione fino a Domodossola.', 'La Re 474 collega la rete svizzera a corrente alternata con la rete italiana a corrente continua a 3 kV. L’equipaggiamento policorrente e i sistemi nazionali di sicurezza permettevano l’impiego continuo oltre confine.'] }
    ],
  bilder: ['Re 474 013', 'Re 474 presso Jestetten sulla linea per Neuhausen', 'Re 474 014 a Domodossola', 'Re 474 con treno merci a Gravellona Toce']
});

uebZug('re-193', {
  bilder: ['Re 193 con un treno merci sul lago di Bienne presso Ligerz', 'Re 193 con carri gialli a pareti scorrevoli', 'Re 193 con un treno merci misto presso Ligerz', 'Re 193 e Re 420 in doppia trazione presso Ligerz'],
  typ: 'Siemens Vectron AC a noleggio per il traffico merci interno',
  text: ['Dalla fine del 2024 FFS Cargo impiega locomotive Siemens Vectron della serie 193.', 'I 35 veicoli sono noleggiati per otto anni e colmano il periodo fino alla consegna delle nuove locomotive di linea proprie.'],
  kennzahlen: [['35', 'locomotive a noleggio'], ['8 anni', 'contratto di noleggio e manutenzione'], ['120 km/h', 'omologazione in Svizzera'], ['2024', 'consegna e inizio servizio']],
  daten: { 'Leistung': 'fino a 6400 kW', 'Länge': 'circa 19,0 m', 'Gewicht': 'circa 90 t, secondo l’equipaggiamento', 'Höchstgeschwindigkeit': '120 km/h in Svizzera', 'Zugsicherung': 'ETCS BL3 e sistemi nazionali', 'Betreiber': 'FFS Cargo SA', 'Anzahl': '35 a noleggio' },
  specNote: 'Le locomotive non appartengono alle FFS. Numero e durata del noleggio si riferiscono al contratto di FFS Cargo Svizzera.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['FFS Cargo noleggia per otto anni 35 Vectron AC di Siemens Mobility; le locomotive appartengono a LokRoll 3 AG. Le prime cinque sono arrivate a Muttenz nel 2024.', 'Questa pagina tratta le 35 Vectron AC di FFS Cargo Svizzera. Le Vectron policorrente di FFS Cargo International rientrano in altri contratti di acquisto e leasing.'] },
      { titel: 'Impiego e tecnica', p: ['Il compito principale è il traffico merci interno svizzero, fino alla consegna delle nuove locomotive di linea proprie. Esistono omologazioni anche per servizi transfrontalieri.', 'Le locomotive sviluppano fino a 6400 kW e in Svizzera viaggiano fino a 120 km/h. Circa 550 macchiniste e macchinisti sono stati formati.'] }
    ]
});

uebZug('re-421', {
  beiname: 'Re 4/4 II per la Germania',
  typ: 'Locomotiva elettrica universale per il traffico transfrontaliero',
  text: ['La Re 421 è la variante della Re 4/4 II delle FFS trasformata per l’impiego in Germania.', 'Tra il 2002 e il 2004 sono state trasformate 26 locomotive dell’ultima serie; hanno ricevuto la nuova sigla Re 421 e la livrea Cargo rossa e blu.'],
  kennzahlen: [['26', 'locomotive trasformate'], ['4700 kW', 'potenza massima'], ['140 km/h', 'velocità massima'], ['255 kN', 'sforzo di trazione all’avviamento']],
  daten: { 'Bauart': 'locomotiva elettrica universale', 'Gewicht': '84 t (valore del catalogo dei tipi di marcia)', 'Nummern': '421 371–397 (senza 382)', 'In Betrieb seit': '2002 (trasformazione 2002–2004)', 'Einsatz': 'traffico merci Svizzera–Germania' },
  specNote: 'Il catalogo dei tipi di marcia 2026 delle FFS indica la Re 421 come alias del tipo di marcia attivo 1051 Re 420. Le 84 t sono un valore di dinamica di marcia per questo tipo raggruppato.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le Re 421 sono Re 4/4 II trasformate, costruite da SLM, BBC, MFO e SAAS. Derivano dai numeri 11371–11397; la 11382, ritirata dopo un incendio, non faceva parte del programma, quindi sono 26 locomotive.', 'La trasformazione è avvenuta dal 2002 al 2004. Le locomotive hanno ricevuto i numeri 421 371–421 397.'] },
      { titel: 'Impiego e tecnica', p: ['Per l’omologazione tedesca le locomotive hanno ricevuto gli adattamenti e gli equipaggiamenti necessari. Uniscono la tecnica robusta della Re 4/4 II all’idoneità transfrontaliera ed erano previste soprattutto per treni merci verso la Germania.', 'Nel catalogo dei tipi di marcia FFS 2026, la Re 421 resta registrata come alias del tipo attivo Re 420.'] }
    ],
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
  abschnitte: [
    { titel: 'Acquisto e impiego', p: ['Le FFS hanno ordinato 47 locomotive per FFS Infrastruttura. Le prime cinque sono state provate dal 2018; l’inizio della consegna in serie era previsto per l’autunno 2019.', 'Le FFS indicano come campi d’impiego gli scali di smistamento di Limmattal e Lausanne Triage e i treni cantiere per manutenzione e ampliamento in tutta la Svizzera.'] },
    { titel: 'Trazione bimodale e comando', p: ['Sotto la linea di contatto la locomotiva usa la trazione elettrica. Senza filo di contatto, due motori diesel più piccoli producono l’energia per i motori di trazione elettrici.', 'Le FFS descrivono l’uso dell’ETCS livello 2 e una speciale modalità di telecomando alla sella di lancio di Limmattal, in cui la macchinista o il macchinista resta in cabina.'] }
  ]
});

uebZug('am-843', {
  typ: 'Locomotiva diesel-idraulica per manovra e linea',
  text: ['L’Am 843 è una locomotiva diesel-idraulica a quattro assi di Vossloh. È stata acquistata per manovre pesanti e corse in linea.', 'FFS Cargo, FFS Infrastruttura e il traffico viaggiatori hanno usato la serie per compiti diversi.'],
  kennzahlen: [['59', 'ordinate in origine per FFS Cargo'], ['1500 kW', 'potenza del motore diesel'], ['100 km/h', 'velocità in linea'], ['2004', 'introdotta presso FFS Cargo']],
  daten: { 'Antrieb': 'diesel-idraulica', 'Gewicht': '80 t in servizio', 'Rangiergang': 'fino a 40 km/h', 'Streckengang': 'fino a 100 km/h', 'Anzahl': '59 ordinate per FFS Cargo', 'In Betrieb seit': '2004 (FFS Cargo)' },
  specNote: 'Le due marce del cambio sono pensate per un elevato sforzo di trazione a bassa velocità di manovra e per corse fino a 100 km/h in linea.',
  abschnitte: [
    { titel: 'Acquisto e impiego', p: ['FFS Cargo ha ordinato 59 Am 843 a Vossloh di Kiel e ha presentato le prime locomotive nel 2004. Il numero indica l’acquisto Cargo di allora, non l’intera serie FFS né un effettivo attuale.', 'Cargo impiega l’Am 843 soprattutto nel servizio di manovra e di distribuzione. Presso FFS Infrastruttura svolge compiti di manovra e treni cantiere.'] },
    { titel: 'Tecnica e sviluppo', p: ['Le locomotive di FFS Cargo sono state dotate di filtri antiparticolato.', 'Nell’ottobre 2025 FFS Cargo ha annunciato l’acquisto di nuove locomotive di manovra ibride per sostituire in futuro le Am 843. Un effettivo attuale dell’intera serie non è indicato separatamente nelle pagine FFS utilizzate.'] }
  ],
  bilder: ['Am 843 001 di FFS Infrastruttura con un treno cantiere', 'Due Am 843 di FFS Infrastruttura con un treno di legname, in testa la 012', 'Am 843 011 ad Arth-Goldau', 'Am 843 con il treno di spegnimento e soccorso a Giornico', 'Am 843 a Basilea']
});

uebZug('tm-234', {
  typ: 'Trattore di servizio',
  text: ['Il Tm 234 «Ameise» è un trattore diesel a due assi per la costruzione e la manutenzione degli impianti ferroviari. A seconda della versione dispone di un pianale di carico con gru o di una piattaforma di lavoro.', 'Questa pagina tratta la vecchia «Ameise», non il più recente Tm 234-4 di Windhoff.'],
  kennzahlen: [['125', 'ordinati in tre serie'], ['550 kW', 'potenza del motore diesel'], ['80 km/h', 'velocità in linea'], ['124', 'effettivo FFS nel 2019']],
  daten: { 'Hersteller': 'Stadler Winterthur e partner', 'Bauart': 'trattore diesel a due assi', 'Gewicht': '30 t in servizio, al massimo 37 t', 'Antrieb': 'idrostatica, motore diesel MTU', 'Anfahrzugkraft': 'circa 81 kN', 'Zuladung': '7 t; versione con cestello 0,5 t', 'Arbeitsmodus': 'fino a 20 km/h, con la gru fino a 4 km/h', 'Anzahl': '125 ordinati (1997, 2000, 2005)', 'In Betrieb seit': '1999 (prima serie ordinata nel 1997)', 'Einsatz': 'manutenzione di binari, linea di contatto e segnali' },
  specNote: 'La scheda del costruttore e uno studio preliminare del DLR e delle FFS descrivono le diverse versioni.',
  abschnitte: [
    { titel: 'Serie e impiego', p: ['Le FFS hanno ordinato 50 veicoli nel 1997, altri 50 nel 2000 e ulteriori 25 nel 2005. Consegna e messa in servizio della prima serie sono iniziate nel 1999. Stadler ha annunciato la consegna degli ultimi 25 nel 2007.', 'I trattori servono alla manutenzione di binari, linea di contatto e segnali, trasportano materiale e possono muovere o manovrare treni cantiere.'] },
    { titel: 'Effettivo e delimitazione', p: ['Nel 2019 FFS Infrastruttura indicava un effettivo di 124 vecchi Tm 234 «Ameise». È un dato storico e non un’indicazione sulla flotta di ottobre 2026.', 'Il più recente trattore di servizio, anch’esso chiamato Tm 234-4, proviene da Windhoff e appartiene a un altro acquisto.'] }
  ],
  bilder: ['Tm 234 109 «Ameise»', 'Tm 234 004 a Neuhausen SH', 'Tm 234 139 a Winterthur', 'Tm 234 «Ameise» con gru di carico', 'Tm 234 090']
});

uebZug('am-841', {
  typ: 'Locomotiva diesel-elettrica per treni cantiere e servizio leggero in linea',
  text: ['L’Am 841 è una locomotiva diesel-elettrica a quattro assi di GEC Alsthom.', 'È stata acquistata per treni cantiere pesanti, manovre e treni merci leggeri in linea.'],
  kennzahlen: [['40', 'acquistate in origine'], ['920 kW', 'potenza del motore diesel'], ['80 km/h', 'velocità massima'], ['1996–1997', 'anni di costruzione della serie FFS']],
  daten: { 'Antrieb': 'diesel-elettrica', 'Gewicht': '73 t in servizio', 'Anzahl': '40 acquistate (30 + 10)', 'In Betrieb seit': '1996–1997 (anni di costruzione)' },
  specNote: 'I valori di dinamica di marcia seguono il catalogo dei tipi di marcia 2026 delle FFS; fonti storiche indicano masse leggermente diverse secondo l’equipaggiamento.',
  abschnitte: [
    { titel: 'Acquisto e impiego', p: ['Le FFS hanno ordinato dapprima 30 locomotive e hanno poi completato l’ordine con altri dieci veicoli.', 'La serie colmava una lacuna tra i piccoli trattori di manovra e le pesanti locomotive diesel ed era prevista soprattutto per treni cantiere e servizi di distribuzione.'] },
    { titel: 'Ammodernamento e futuro', p: ['Un programma di sviluppo trasforma cinque Am 841 in Aeam 841 con pantografo, batteria e motore diesel. I documenti indicano il periodo dal 2024 al 2026.', 'Parallelamente FFS Infrastruttura gestisce un progetto di flotta per sostituire le vecchie Am 841 e Am 842.'] }
  ],
  bilder: ['Am 841', 'Am 841 014', 'Tre Am 841 a Frauenfeld', 'Am 841 017', 'Am 841 002 a Küsnacht ZH']
});

uebZug('am-842', {
  typ: 'Locomotiva diesel-idraulica per manovre pesanti e servizio leggero in linea',
  text: ['Alle FFS la sigla Am 842 è stata usata per diverse locomotive diesel a quattro assi.', 'Questa pagina tratta il tipo MaK G 1204 BB, indicato come attivo nel catalogo dei tipi di marcia 2026 delle FFS.'],
  kennzahlen: [['2', 'rilevate da Sersa nel 1993'], ['1120 kW', 'potenza del motore diesel'], ['80 km/h', 'velocità massima'], ['12,5 m', 'lunghezza fuori respingenti']],
  daten: { 'Antrieb': 'diesel-idraulica', 'Gewicht': '80 t in servizio presso le FFS', 'Anzahl': '2 (Am 842 000 e 001)', 'In Betrieb seit': '1993 presso le FFS' },
  specNote: 'I valori di 80 t e 255 kN sono i parametri del tipo di marcia attivo registrati nel catalogo dei tipi di marcia delle FFS.',
  abschnitte: [
    { titel: 'Rilevamento e impiego', p: ['Due MaK G 1204 BB sono passate da Sersa alle FFS nel 1993 e sono state immatricolate come Am 842 000 e 001.', 'Queste potenti locomotive di manovra sono adatte a manovre pesanti e a brevi corse in linea.'] },
    { titel: 'Delimitazione della serie', p: ['In seguito anche tre Vossloh G 1000 BB di FFS Cargo hanno portato i numeri Am 842 011–013. I loro dati tecnici differiscono dal tipo MaK; le indicazioni sull’Am 842 si riferiscono quindi sempre al rispettivo gruppo di numeri.'] }
  ]
});

uebZug('tmf-232', {
  typ: 'Trattore di servizio ammodernato con radiocomando',
  text: ['Il Tmf 232 è nato dall’ammodernamento di trattori di servizio Tm IV. Nel 2013 FFS Infrastruttura ha commissionato la trasformazione di 15 veicoli.', 'La «f» nella sigla sta per radiocomando (Funkfernsteuerung).'],
  kennzahlen: [['15', 'veicoli nell’ordine di trasformazione'], ['2013', 'ordine di ammodernamento'], ['280 kW', 'potenza diesel'], ['60 km/h', 'velocità massima con mezzi propri']],
  daten: { 'Umbau': 'ORTICS, nell’officina industriale FFS di Bienne', 'Antrieb': 'diesel-idraulica, motore Caterpillar', 'Länge': '7,67 m fuori respingenti', 'Gewicht': 'circa 30 t', 'Höchstgeschwindigkeit': '60 km/h con mezzi propri, 90 km/h al traino', 'Steuerung': 'radiocomando e comando multiplo', 'Umbauauftrag': '2013 (prima messa in servizio dopo la trasformazione non documentata)', 'Einsatz': 'servizio di cantiere e di manovra' },
  specNote: 'Il 2013 è l’anno documentato dell’ordine di ammodernamento, non l’anno di costruzione originale dei Tm IV donatori.',
  abschnitte: [
    { titel: 'Ammodernamento', p: ['Nel 2013 ORTICS ha ricevuto da FFS Infrastruttura l’incarico di ammodernare 15 Tm IV. Telaio, sovrastrutture, sale e trasmissione sono stati in gran parte mantenuti; motore, comando e tecnica di sicurezza sono stati rinnovati ed è stato installato un radiocomando.'] },
    { titel: 'Impiego', p: ['Il Tmf 232 muove treni cantiere, manovra veicoli e sostiene i lavori nei cantieri. Per un elevato sforzo di trazione dispone di una marcia di manovra fino a 30 km/h, per le corse in linea di una marcia fino a 60 km/h.', 'La velocità di traino più alta di 90 km/h vale senza trazione propria all’interno di un treno.'] }
  ]
});

uebZug('tm-234-4', {
  typ: 'Trattore di servizio di Windhoff',
  text: ['Il Tm 234-4 è un trattore di servizio a due assi con pianale di carico e gru. DART sta per trattore diesel da lavoro e da manovra.', 'FFS Infrastruttura lo ha acquistato per manutenzione, trasporto di materiale, manovre e interventi su impianti di binari, segnali e cavi.'],
  kennzahlen: [['35', 'veicoli nel progetto FFS'], ['651 kW', 'potenza totale installata'], ['100 km/h', 'velocità massima'], ['14,24 m', 'lunghezza fuori respingenti']],
  daten: { 'Länge': '14,24 m fuori respingenti', 'Gewicht': 'circa 37,3 t in servizio', 'Leistung': '651 kW installati (522 kW motore principale + 129 kW motore di lavoro)', 'Motor': 'Caterpillar C18 e C4.4', 'Antrieb': 'idrodinamica e idrostatica', 'Anfahrzugkraft': 'circa 100–105 kN', 'Ladeplattform': 'fino a 3200 kg', 'Ladekran': 'Palfinger PR220 HPLS, sbraccio fino a 11 m', 'Anzahl': '35 previsti', 'In Betrieb seit': '2019 (preserie)' },
  specNote: 'La potenza installata comprende motore principale e motore di lavoro; il tipo di marcia FFS riporta per la dinamica di marcia una potenza massima inferiore.',
  abschnitte: [
    { titel: 'Acquisto e sostituzione', p: ['Le FFS hanno assegnato l’ordine nel 2015. Dal 2019 sono stati provati dapprima cinque veicoli di preserie; in totale erano previsti 35 trattori per sostituire 51 vecchi Tm 232.'] },
    { titel: 'Lavoro e marcia', p: ['Il motore principale aziona la rapida trasmissione idrodinamica, il motore di lavoro supplementare alimenta gli impianti idraulici ausiliari.', 'La combinazione di gru, pianale di carico e omologazione a 100 km/h permette trasporti di materiale e treni cantiere senza un veicolo di lavoro separato.'] }
  ],
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
  abschnitte: [
    { titel: 'Compito nella costruzione dei binari', p: ['Il carro asporta materiale di scavo e materiale usato e rifornisce i cantieri di materiale sfuso. Lo scarico laterale permette un trasbordo mirato accanto al binario.'] },
    { titel: 'Esercizio e sicurezza', p: ['Durante lo scarico il carro deve essere assicurato contro il ribaltamento e la zona di lavoro mantenuta libera. Idraulica, alimentazione e bloccaggi vanno controllati prima di ogni corsa di lavoro secondo le prescrizioni locali.'] }
  ]
});

uebZug('xans-37', {
  typ: 'Carro per pietrisco a quattro assi con scarico per gravità',
  text: ['Lo Xans 37 è un carro per pietrisco a quattro assi per il trasporto e la posa dosata della massicciata.', 'Lo scarico avviene per gravità attraverso saracinesche vicine al suolo.'],
  kennzahlen: [['100 km/h', 'velocità massima'], ['14,0 m', 'lunghezza'], ['23,9 t', 'peso a vuoto'], ['88 t', 'peso totale max.']],
  daten: { 'Gewicht': '23,9 t a vuoto, 88 t a pieno carico', 'Nutzlast': 'fino a circa 64,1 t (calcolato)', 'Volumen': 'circa 45 m³', 'Entladung': 'per gravità, posa dosata' },
  specNote: 'Il catalogo dei tipi di marcia indica 87,5 t per la dinamica di marcia e arrotonda il peso totale ammesso a 88 t.',
  abschnitte: [
    { titel: 'Impiego', p: ['Lo Xans 37 trasporta pietrisco nuovo e lo distribuisce in cantiere attraverso le sue bocche di scarico. È quindi adatto a nuove costruzioni, rinnovi e ricariche di massicciata.'] },
    { titel: 'Carico e manovra', p: ['Prima di corse in treno o in manovra tutte le saracinesche devono essere completamente chiuse e bloccate. Il documento di formazione richiede corse a vuoto o a pieno carico e mette in guardia dai carichi parziali.'] }
  ]
});

uebZug('xans-74', {
  typ: 'Carro per pietrisco a quattro assi per massicciata e materiale PSS',
  text: ['Lo Xans 74 è un carro per materiale sfuso a quattro assi per pietrisco e materiale dello strato di protezione (PSS).', 'A seconda dell’equipaggiamento un nastro trasportatore aiuta a depositare il materiale lateralmente.'],
  kennzahlen: [['100 km/h', 'velocità massima'], ['15,0 m', 'lunghezza'], ['26,0 t', 'peso a vuoto'], ['80 t', 'peso totale max.']],
  daten: { 'Gewicht': '26,0 t a vuoto, 80 t a pieno carico', 'Nutzlast': 'fino a circa 54,0 t (calcolato)', 'Volumen': 'circa 40 m³', 'Entladung': 'per gravità', 'Förderband': 'deposito laterale fino a circa 4,5 m dall’asse del binario', 'Abdeckung': 'possibile in due parti', 'Einsatz': 'pietrisco e PSS' },
  specNote: 'La presentazione di formazione indica masse diverse per versioni più vecchie; qui valgono i valori del catalogo dei tipi di marcia 2026 delle FFS.',
  abschnitte: [
    { titel: 'PSS e pietrisco', p: ['Oltre al pietrisco normale il carro può trasportare materiale PSS sensibile all’umidità. I teloni aiutano a mantenere il tenore d’umidità richiesto durante il trasporto.'] },
    { titel: 'Funzionamento del nastro', p: ['Per il nastro serve un’alimentazione esterna o un gruppo generatore. Prima dell’accensione occorre controllare la zona di rotazione, il binario vicino e la formazione di polvere.'] }
  ],
  bilder: ['Xans 74 di FFS Infrastruttura, 2021', 'Tramoggia centrale dello Xans 74 sopra il nastro trasportatore', 'Nastro trasportatore orientabile sotto lo Xans 74']
});

uebZug('xas-53', {
  typ: 'Carro porta-cassoni con guide di scorrimento laterali',
  text: ['Lo Xas 53 trasporta cassoni intercambiabili per pietrisco, residui di vagliatura e materiale PSS.', 'Guide di scorrimento laterali permettono di spostare i cassoni insieme alle macchine per binari.'],
  kennzahlen: [['100 km/h', 'velocità massima'], ['19,9 m', 'lunghezza'], ['31,0 t', 'peso a vuoto'], ['7', 'cassoni per carro']],
  daten: { 'Fahrzeugart': 'carro porta-cassoni', 'Gewicht': '31,0 t a vuoto, 78 t a pieno carico', 'Nutzlast': 'nessun valore ufficiale (78 t − 31 t danno circa 47 t)', 'Behälter': '7 cassoni da circa 4 m³ ciascuno', 'Ausrüstung': 'guide di scorrimento laterali, teloni possibili', 'Einsatz': 'treni di vagliatura e cantiere' },
  specNote: 'Il catalogo dei tipi di marcia indica 77,6 t per la dinamica di marcia. La pianificazione della flotta prevede la sostituzione della famiglia Xans/Xas 52/53.',
  abschnitte: [
    { titel: 'Logistica dei cassoni', p: ['I cassoni possono essere spostati, riempiti e svuotati nel punto adatto all’interno di una catena di lavoro. Questo accelera l’asportazione continua del materiale durante la pulizia della massicciata e il rinnovo dei binari.'] },
    { titel: 'Fissaggio del carico', p: ['Mani e piedi vanno tenuti lontani dalle guide di scorrimento. Per il PSS sensibile all’umidità i cassoni possono essere coperti; prima di ogni corsa cassoni e teloni devono essere fissati correttamente.'] }
  ],
  bilder: ['Xas 80 85 98 53 420-0 di FFS Infrastruttura a Effretikon']
});

uebZug('xas-62', {
  typ: 'Carro ribaltabile a quattro assi per pietrisco usato, senza nastro',
  text: ['Lo Xas 62 accoglie pietrisco usato, materiale di scavo, ghiaia e sabbia.', 'La cassa viene ribaltata elettroidraulicamente, così il materiale scende per gravità.'],
  kennzahlen: [['100 km/h', 'velocità massima'], ['15,04 m', 'lunghezza'], ['30,0 t', 'peso a vuoto'], ['80 t', 'peso totale max.']],
  daten: { 'Ausführung': 'senza nastro trasportatore', 'Gewicht': '30,0 t a vuoto, 80 t a pieno carico', 'Nutzlast': 'fino a circa 50,0 t (calcolato)', 'Volumen': 'circa 51 m³', 'Entladung': 'cassa ribaltabile, elettroidraulica', 'Einsatz': 'pietrisco usato e materiale di scavo' },
  specNote: 'Il tipo di marcia attuale distingue chiaramente questa versione dallo Xas 62 con nastro trasportatore.',
  abschnitte: [
    { titel: 'Asportazione del materiale', p: ['Lo Xas 62 serve soprattutto a smaltire il materiale proveniente dal rinnovo dei binari e dal risanamento della sottostruttura. Il ribaltamento accelera lo scarico nei luoghi di deposito adatti.'] },
    { titel: 'Lavoro', p: ['Durante il ribaltamento vanno sorvegliati stabilità, linea di contatto, binario vicino e spazio laterale. È vietato salire o restare sul carro durante i movimenti.'] }
  ]
});

uebZug('xas-62-fb', {
  beiname: 'con nastro trasportatore',
  typ: 'Carro ribaltabile per pietrisco usato con nastro trasportatore supplementare',
  text: ['La versione con nastro dello Xas 62 unisce la cassa ribaltabile a un nastro per un’asportazione controllata del materiale.', 'È registrata come tipo di marcia attivo a sé stante.'],
  kennzahlen: [['100 km/h', 'velocità massima'], ['15,04 m', 'lunghezza'], ['30,5 t', 'peso a vuoto'], ['80 t', 'peso totale max.']],
  daten: { 'Ausführung': 'con nastro trasportatore (FB)', 'Gewicht': '30,5 t a vuoto, 80 t a pieno carico', 'Nutzlast': 'fino a circa 49,5 t (calcolato)', 'Entladung': 'cassa ribaltabile e nastro', 'Arbeitsantrieb': 'elettroidraulico', 'Einsatz': 'asportazione del materiale' },
  specNote: '«FB» indica qui la versione con nastro trasportatore; rispetto al carro senza nastro il peso a vuoto aumenta di circa 0,5 t.',
  abschnitte: [
    { titel: 'Flusso di materiale mirato', p: ['Il nastro trasportatore completa il semplice scarico per ribaltamento. Il materiale può essere passato in modo più controllato alle unità successive o depositato lateralmente in un punto definito.'] },
    { titel: 'Zona di sicurezza', p: ['Nastro, cassa ribaltabile e idraulica possono funzionare solo nella zona di lavoro autorizzata. Punti di schiacciamento, rischio di caduta e vicinanza alla linea di contatto richiedono particolare attenzione.'] }
  ]
});

uebZug('xas-73', {
  typ: 'Carro per pietrisco per la prima e la seconda rincalzatura',
  text: ['Lo Xas 73 è un carro per pietrisco Talbot a quattro assi con scarico per gravità.', 'Viene impiegato soprattutto durante la prima e la seconda rincalzatura per distribuire il pietrisco in modo mirato.'],
  kennzahlen: [['100 km/h', 'velocità massima'], ['15,04 m', 'lunghezza'], ['22,5 t', 'peso a vuoto'], ['200', 'carri previsti per il prolungamento della vita']],
  daten: { 'Bauart': 'carro per pietrisco Talbot', 'Gewicht': '22,5 t a vuoto, 80 t a pieno carico', 'Nutzlast': 'fino a circa 57,5 t (calcolato)', 'Volumen': 'circa 31 m³', 'Behälter': '4 semicamere', 'Bedienung': '4 volantini' },
  specNote: 'Secondo la presentazione della flotta 2025 le FFS prevedono di prolungare la vita di 200 carri Talbot Xas 73 a quattro assi.',
  abschnitte: [
    { titel: 'Scarico dosato', p: ['Quattro volantini comandano le singole bocche di scarico. Così il pietrisco può essere distribuito a tratti e secondo la posizione nel binario.'] },
    { titel: 'Prospettive della flotta', p: ['Il tipo resta attivo nel catalogo dei tipi di marcia 2026. Per la grande flotta esistente è previsto un refit, affinché i carri restino disponibili per altri periodi di lavori.'] }
  ]
});

uebZug('xns-39', {
  bilder: ['Xns 39 (Fccnpps) 21 85 6439 038-1 in un treno cantiere', 'Diversi Xns 39 in un treno cantiere, di notte'],
  typ: 'Carro per pietrisco a due assi con comando manuale',
  text: ['Lo Xns 39 è un carro per pietrisco compatto a due assi.', 'Le saracinesche di scarico sono azionate a mano con leve e permettono di posare la massicciata direttamente nel binario.'],
  kennzahlen: [['100 km/h', 'velocità massima'], ['10,0 m', 'lunghezza'], ['13,1 t', 'peso a vuoto'], ['45 t', 'peso totale max.']],
  daten: { 'Gewicht': '13,1 t a vuoto, 45 t a pieno carico', 'Nutzlast': 'fino a circa 31,9 t (calcolato)', 'Volumen': 'circa 22 m³', 'Bedienung': 'saracinesche manuali, con leve', 'Einsatz': 'posa della massicciata' },
  specNote: 'La presentazione in francese scrive una volta «Xas 39»; indice e catalogo dei tipi di marcia delle FFS confermano la sigla Xns 39.',
  abschnitte: [
    { titel: 'Carro per pietrisco compatto', p: ['Con due assi e dieci metri di lunghezza lo Xns 39 è adatto a piccole quantità di pietrisco e a brevi tratti di cantiere. La semplice costruzione meccanica non richiede fonti di energia supplementari.'] },
    { titel: 'Trasporto sicuro', p: ['Prima di ogni corsa le saracinesche manuali vanno chiuse e assicurate. Durante lo scarico nessuno deve trovarsi nella zona di scarico o di pericolo.'] }
  ]
});

uebZug('xns-60', {
  typ: 'Carro ribaltabile a due assi per pietrisco e residui di vagliatura',
  text: ['Lo Xns 60 è un carro ribaltabile a due assi per pietrisco, residui di vagliatura e materiale sfuso simile.', 'Lo scarico avviene per ribaltamento e per gravità.'],
  kennzahlen: [['100 km/h', 'velocità massima'], ['10,94 m', 'lunghezza'], ['17,0 t', 'peso a vuoto'], ['42 t', 'peso totale max.']],
  daten: { 'Fahrzeugart': 'carro merci con cassone ribaltabile', 'Gewicht': '17,0 t a vuoto, 42 t a pieno carico', 'Nutzlast': 'fino a circa 25,0 t (calcolato)', 'Volumen': 'circa 17,5 m³', 'Entladung': 'ribaltamento, per gravità', 'Einsatz': 'pietrisco e residui di vagliatura' },
  specNote: 'La presentazione indica 17 t di carico utile; dalle masse attuali delle FFS risultano per calcolo fino a circa 25 t.',
  abschnitte: [
    { titel: 'Carro ribaltabile semplice', p: ['Il carro compatto può essere caricato con escavatori ed è adatto a piccole quantità di materiale. Lo scarico per gravità riduce il bisogno di altri sistemi di trasporto.'] },
    { titel: 'Ribaltamento', p: ['Prima del ribaltamento vanno controllati il terreno, lo spazio laterale e la posizione del carico. Mentre il carro si muove nessuno deve trovarsi sulla sovrastruttura.'] }
  ]
});

uebZug('xs-72', {
  typ: 'Vecchio carro per pietrisco a due assi con volantini',
  text: ['Lo Xs 72 è un carro per pietrisco a due assi con saracinesche di scarico azionate da volantini.', 'Figura nel documento di formazione FFS del 2022, ma non più come tipo attivo a sé nel catalogo dei tipi di marcia 2026.'],
  kennzahlen: [['10,24 m', 'lunghezza'], ['13,0 t', 'peso a vuoto'], ['25,0 t', 'carico utile secondo la presentazione'], ['15 m³', 'volume']],
  daten: { 'Gewicht': '13,0 t a vuoto, circa 38 t a pieno carico (calcolato)', 'Nutzlast': '25,0 t secondo la presentazione', 'Bedienung': 'volantini' },
  specNote: 'In mancanza di un tipo di marcia proprio nel 2026 i dati tecnici provengono di proposito dalla presentazione di formazione del 2022.',
  abschnitte: [
    { titel: 'Principio di funzionamento', p: ['Le saracinesche si aprono e chiudono con volantini. Così il pietrisco può essere distribuito senza fonte di energia esterna.'] },
    { titel: 'Collocazione', p: ['L’assenza dal catalogo attuale non significa necessariamente che non esista più alcun carro. Il tipo però non è più registrato come tipo di marcia attivo per l’ordinazione delle tracce.'] }
  ]
});

uebZug('silad-1-3', {
  typ: 'Unità di carico rotaie con carro materiale',
  text: ['Le SILAD 1–3 sono unità di carico rotaie attive delle FFS per il trasporto e il trasbordo di rotaie lunghe.', 'Il tipo di marcia ufficiale comprende unità di carico e carro materiale; nel treno di lavoro si aggiungono altri carri di trasporto.'],
  kennzahlen: [['90 km/h', 'velocità massima'], ['44,0 m', 'lunghezza del tipo di marcia'], ['80 t', 'peso a vuoto e di dinamica di marcia'], ['120 m', 'lunghezza max. delle rotaie']],
  daten: { 'Formation': 'unità di carico e carro materiale, in più parti', 'Transportwagen': 'tra cui Xas 60', 'Länge': '44,0 m (tipo di marcia)', 'Gewicht': '80 t (tipo di marcia)', 'Schienenlänge': 'fino a 120 m', 'Kapazität': 'fino a 30 rotaie secondo la presentazione' },
  specNote: 'I 44 m e le 80 t si riferiscono al tipo di marcia definito nel catalogo e non all’intero lungo treno per il trasporto di rotaie.',
  abschnitte: [
    { titel: 'Trasporto di rotaie lunghe', p: ['Il documento di formazione descrive un’unità di trasporto di sei carri per rotaie fino a 120 metri. L’unità di carico SILAD aiuta a caricare e scaricare le rotaie in sicurezza in cantiere.'] },
    { titel: 'Sviluppo della flotta', p: ['Le FFS mantengono attive le SILAD 1–3. La pianificazione della flotta prevede inoltre un ampio programma di 90 unità di trasporto SILAD e quattro caricatori.'] }
  ]
});

uebZug('silad-4', {
  typ: 'Unità di carico rotaie per lavori di costruzione e rinnovo',
  text: ['La SILAD 4 è un’unità di carico rotaie delle FFS registrata separatamente.', 'Lavora con i relativi carri di trasporto per caricare e scaricare rotaie lunghe.'],
  kennzahlen: [['100 km/h', 'velocità massima'], ['29,0 m', 'lunghezza'], ['58 t', 'peso a vuoto'], ['attivo', 'stato 2026']],
  daten: { 'Beschreibung': 'unità di carico rotaie', 'Gewicht': '58 t (peso totale e di dinamica di marcia)', 'Einsatz': 'carico e scarico di rotaie' },
  specNote: 'Il catalogo dei tipi di marcia pubblica per la SILAD 4 solo i valori rilevanti per la traccia; i dati di lavoro sono regolati in documenti d’esercizio separati.',
  abschnitte: [
    { titel: 'Convoglio di lavoro', p: ['La SILAD 4 non è un veicolo motore autonomo. Per trasferimenti e movimenti in cantiere l’unità viene inserita in un convoglio trainato.'] },
    { titel: 'Logistica delle rotaie', p: ['I sistemi SILAD riducono i sollevamenti manuali faticosi e assicurano un flusso ordinato di materiale tra deposito, treno di trasporto e luogo di posa.'] }
  ]
});

uebZug('silad-reserve', {
  name: 'SILAD di riserva',
  typ: 'Unità compatta di carico rotaie di riserva',
  text: ['L’unità di riserva SILAD è disponibile come sostituzione o complemento per i carichi di rotaie.', 'È nettamente più corta e leggera della SILAD 4 ed è registrata come tipo di marcia attivo a sé stante.'],
  kennzahlen: [['90 km/h', 'velocità massima'], ['14,0 m', 'lunghezza'], ['18 t', 'peso a vuoto'], ['attivo', 'stato 2026']],
  daten: { 'Beschreibung': 'unità di carico di riserva', 'Gewicht': '18 t (peso totale e di dinamica di marcia)', 'Einsatz': 'riserva e complemento' },
  specNote: '«Riserva» indica il ruolo d’esercizio; il catalogo dei tipi di marcia registra comunque l’unità come tipo attivo a sé.',
  abschnitte: [
    { titel: 'Disponibilità', p: ['L’unità di riserva interviene in caso di manutenzione, guasto o forte domanda e aumenta così la disponibilità della logistica delle rotaie.'] },
    { titel: 'Esercizio', p: ['Come le altre unità SILAD non ha una trazione propria. Trasferimenti, manovre e movimenti di lavoro avvengono nel convoglio autorizzato a tale scopo.'] }
  ]
});

uebZug('ste-kurz', {
  name: 'STE corta',
  typ: 'Unità di trasporto rotaie con due gru per rotaie da 12 a 36 m',
  text: ['Secondo il documento di formazione l’unità corta di trasporto rotaie (STE) si basa su un carro pianale Xans 51 a quattro assi.', 'Due piccole gru scaricano le rotaie corte direttamente in cantiere.'],
  kennzahlen: [['12–36 m', 'lunghezza delle rotaie'], ['29,5 t', 'peso a vuoto'], ['50 t', 'carico utile secondo la presentazione'], ['2 × 1,5 t', 'gru']],
  daten: { 'Bauart': 'carro pianale', 'Gewicht': '29,5 t a vuoto', 'Nutzlast': '50 t secondo la presentazione', 'Krane': '2, portata 1500 kg ciascuna', 'Schienenlänge': 'da 12 a 36 m', 'Einsatz': 'scarico di rotaie' },
  specNote: 'Il nome Xans 51 non compare come voce propria nel catalogo dei tipi di marcia 2026; i valori sono quindi indicati come stato di formazione 2022.',
  abschnitte: [
    { titel: 'Rotaie corte', p: ['L’unità copre le lunghezze di rotaia trasportabili senza un treno per rotaie lunghe da 120 metri. Le due gru si ripartiscono il carico durante lo scarico.'] },
    { titel: 'Sicurezza sul lavoro', p: ['Durante le manovre nessuno deve stare in piedi sul carro. Zona della gru, accessori di sollevamento, linea di contatto e binario vicino vanno messi in sicurezza prima di ogni sollevamento.'] }
  ]
});

uebZug('ste-lang', {
  name: 'STE lunga',
  typ: 'Unità di trasporto rotaie in più parti per rotaie fino a 120 m',
  text: ['La STE lunga usa carri Xans 51 dotati di gru per trasportare e scaricare rotaie lunghe.', 'Secondo la presentazione un’unità d’esercizio è composta da sei carri e raggiunge 120 metri di lunghezza.'],
  kennzahlen: [['120 m', 'lunghezza max. delle rotaie'], ['6', 'carri per unità'], ['29,5 t', 'peso a vuoto per carro gru'], ['2 × 1,5 t', 'gru per carro gru']],
  daten: { 'Bauart': 'convoglio di carri pianali', 'Formation': '6 carri', 'Achsen': '4 per carro', 'Gewicht': '29,5 t a vuoto per carro gru', 'Nutzlast': '50 t per carro gru secondo la presentazione', 'Krane': '2 per carro gru, 1500 kg ciascuna', 'Schienenlänge': 'fino a 120 m', 'Einsatz': 'scarico di rotaie lunghe' },
  specNote: 'I tipi di marcia SILAD sono attivi separatamente nel 2026; la sigla STE lunga / Xans 51 non è registrata come tipo di marcia proprio.',
  abschnitte: [
    { titel: 'Convoglio per rotaie lunghe', p: ['Più carri portano insieme le rotaie lunghe e flessibili. Le gru aiutano nel passaggio controllato dal convoglio di trasporto al binario.'] },
    { titel: 'Limiti d’esercizio', p: ['I sei carri sono trattati come un convoglio coordinato. Durante i movimenti vanno sorvegliati con particolare attenzione la presenza sui carri, l’iscrizione in curva, gli sbalzi e la posizione delle rotaie.'] }
  ]
});

uebZug('xs-45', {
  typ: 'Carro a due assi per attrezzi, officina e squadra',
  text: ['Lo Xs 45 è un carro coperto per treni cantiere destinato ad attrezzi, pezzi di ricambio e attrezzatura d’officina.', 'Serve allo stesso tempo come spazio di lavoro e di supporto riparato per le squadre di cantiere.'],
  kennzahlen: [['2', 'assi'], ['15,0 m', 'lunghezza'], ['16,5 t', 'peso a vuoto'], ['22 t', 'carico utile secondo la presentazione']],
  daten: { 'Gewicht': '16,5 t a vuoto, circa 38,5 t a pieno carico (calcolato)', 'Nutzlast': '22 t secondo la presentazione' },
  specNote: 'Il catalogo dei tipi di marcia 2026 non elenca separatamente lo Xs 45; i valori provengono dal documento di formazione FFS del 2022.',
  abschnitte: [
    { titel: 'Supporto al cantiere', p: ['Attrezzi e piccole macchine vengono trasportati al riparo dalle intemperie e messi a disposizione direttamente sul luogo d’intervento. Il carro completa veicoli motore e carri materiale nel treno cantiere.'] },
    { titel: 'Posizione di marcia', p: ['Prima di ogni movimento porte laterali, attrezzatura mobile e posti di lavoro devono essere assicurati. Le persone possono restare nel carro solo alle condizioni d’esercizio autorizzate.'] }
  ]
});

uebZug('xs-48', {
  typ: 'Carro officina e squadra con piattaforme elevabili',
  text: ['Lo Xs 48 combina un carro coperto per attrezzi e officina con piattaforme di lavoro elevabili.', 'Supporta in particolare i lavori sugli impianti della linea di contatto.'],
  kennzahlen: [['2', 'assi'], ['15,0 m', 'lunghezza'], ['16,5 t', 'peso a vuoto'], ['23 t', 'carico utile secondo la presentazione']],
  daten: { 'Bauart': 'carro da lavoro coperto', 'Gewicht': '16,5 t a vuoto, circa 39,5 t a pieno carico (calcolato)', 'Nutzlast': '23 t secondo la presentazione', 'Ausrüstung': 'piattaforme di lavoro elevabili', 'Sicherheitsregel': 'disinserire la linea di contatto prima di sollevare le piattaforme', 'Einsatz': 'attrezzi e officina, lavori sulla linea di contatto' },
  specNote: 'La presentazione di formazione richiede espressamente di disinserire la linea di contatto prima di sollevare le piattaforme.',
  abschnitte: [
    { titel: 'Piattaforme di lavoro', p: ['Le piattaforme permettono di lavorare sopra il pavimento del carro. Così il carro riunisce materiale, officina e posto di lavoro in altezza in un’unica unità.'] },
    { titel: 'Sicurezza elettrica', p: ['Prima del sollevamento la linea di contatto deve essere disinserita, messa a terra e assicurata contro la reinserzione. Per la marcia le piattaforme sono rientrate e porte e carico bloccati.'] }
  ],
  bilder: ['Carro da lavoro per la linea di contatto Xs 40 85 95 48 453-1 presso Bad Ragaz']
});

uebZug('xs-mannschaftswagen', {
  beiname: 'Carro squadra',
  typ: 'Carro officina e di supporto a due assi',
  text: ['Questo carro, chiamato semplicemente Xs nel documento di formazione, trasporta attrezzi e attrezzatura d’officina.', 'Come carro di supporto del treno cantiere offre alla squadra uno spazio di lavoro riparato.'],
  kennzahlen: [['2', 'assi'], ['14,0 m', 'lunghezza'], ['16,5 t', 'peso a vuoto'], ['24 t', 'carico utile secondo la presentazione']],
  daten: { 'Gewicht': '16,5 t a vuoto, circa 40,5 t a pieno carico (calcolato)', 'Nutzlast': '24 t secondo la presentazione', 'Status': 'designazione generica, nessun tipo di marcia univoco nel 2026' },
  specNote: '«Xs» è una designazione di costruzione ampia. Senza numero di veicolo il carro non può essere assegnato a un tipo di marcia attuale univoco.',
  abschnitte: [
    { titel: 'Supporto alla squadra', p: ['Il carro serve soprattutto alla logistica e al lavoro della squadra del treno cantiere. Non è una normale carrozza viaggiatori e può essere usato solo secondo la sua autorizzazione d’esercizio.'] },
    { titel: 'Fissaggio', p: ['Attrezzi, pezzi di ricambio e oggetti mobili vanno fissati prima di ogni movimento del treno. Le porte laterali restano chiuse e bloccate durante la marcia.'] }
  ]
});

uebZug('kirow-mannschaftswagen', {
  name: 'Carro squadra Kirow',
  typ: 'Carro di accompagnamento dei convogli gru Kirow 250, 800 e 1200',
  text: ['Il catalogo dei tipi di marcia 2026 elenca convogli gru Kirow 250, 800 e 1200, ciascuno con un carro squadra.', 'Il carro di accompagnamento supporta personale, attrezzi e logistica d’intervento della gru ferroviaria. Le due KRC 800 delle FFS sono state sostituite nel 2016–2019; una voce nel catalogo non attesta quindi un effettivo attuale.'],
  kennzahlen: [['3', 'tipi di gru con carro squadra'], ['1', 'carro squadra per convoglio'], ['80 km/h', 'velocità del convoglio'], ['3', 'tipi di marcia nel catalogo 2026']],
  daten: { 'Fahrzeugrolle': 'carro di accompagnamento nel convoglio gru', 'Höchstgeschwindigkeit': '80 km/h (intero convoglio)', 'Einzelfahrdaten': 'non pubblicati separatamente', 'Fahrtypen': '5089–5091 (convogli gru completi)', 'Status': 'tipi di marcia attivi nel catalogo 2026; KRC 800 sostituite alle FFS nel 2016–2019' },
  specNote: 'Nel catalogo dei tipi di marcia le FFS pubblicano solo i valori complessivi dei convogli gru inseparabili, non le dimensioni del solo carro squadra.',
  abschnitte: [
    { titel: 'Assegnazione ai convogli gru', tabelle: { kopf: ['Gru', 'Formazione', 'Convoglio lunghezza / peso'], zeilen: [
      ['Kirow 250', '1 carro di protezione e 1 carro squadra', '47 m / 169 t'],
      ['Kirow 800', '1 carro di protezione e 1 carro squadra', '48 m / 203 t'],
      ['Kirow 1200', 'carro di protezione, di contrappeso e carro squadra', '63 m / 279 t']] } },
    { titel: 'Funzione', p: ['Il carro squadra mette a disposizione della squadra della gru materiale, mezzi di lavoro e un locale di sosta. La sua dotazione è adattata al rispettivo convoglio gru.'] },
    { titel: 'Convoglio fisso', p: ['Per l’ordinazione delle tracce e i trasferimenti si considera l’unità completa. Modifiche a formazione, carico o freno sono ammesse solo secondo i documenti d’esercizio approvati.'] }
  ]
});

uebZug('pwfz', {
  beiname: 'Veicolo per personale e officina',
  typ: 'Veicolo per personale e officina previsto',
  text: ['Il veicolo per personale e officina PWFZ è un progetto di flotta previsto da FFS Infrastruttura.', 'Deve sostituire vecchi carri officina e carri squadra Xs con una serie moderna e uniforme.'],
  kennzahlen: [['30', 'veicoli previsti'], ['2', 'primi veicoli del progetto'], ['28', 'altri veicoli di serie'], ['giugno 2025', 'stato della pianificazione']],
  daten: { 'Langname': 'Personal Werkstatt Fahrzeug (veicolo per personale e officina)', 'Bestand': 'ancora nessuna flotta di serie', 'Anzahl': '30 previsti (2 + 14 + 14)', 'Einsatz': 'personale e officina', 'Vorgänger': 'carri Xs per treni cantiere', 'Technische Daten': 'non ancora pubblicati', 'Status': 'acquisto previsto' },
  specNote: 'I documenti FFS accessibili al pubblico indicano numero e scaglionamento, ma non ancora dimensioni o prestazioni vincolanti.',
  abschnitte: [
    { titel: 'Obiettivo del progetto', p: ['Una serie PWFZ uniforme deve riunire officina, trasporto di materiale e supporto al personale in un concetto di carro moderno.'] },
    { titel: 'Delimitazione', p: ['Il PWFZ non è ancora un tipo di marcia di serie registrato nel catalogo 2026. Questa voce descrive lo stato del progetto e non una serie di veicoli già omologata.'] }
  ]
});

/* ---- 24-rangier.js ---- */
/* Italiano – locomotive di manovra */
uebZug('ee-922', {
  typ: 'Locomotiva elettrica di manovra per stazioni viaggiatori',
  text: ['L’Ee 922 è una compatta locomotiva elettrica di manovra di Stadler.', 'Le FFS l’hanno acquistata per preparare i treni viaggiatori e aggiungere carrozze supplementari nelle grandi stazioni.'],
  kennzahlen: [['21', 'locomotive ordinate'], ['750 kW', 'potenza massima'], ['45 t', 'massa a vuoto'], ['2009–2010', 'consegna']],
  daten: { 'Spurweite': 'scartamento normale, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz e 25 kV 50 Hz', 'Gewicht': '45 t a vuoto', 'Bedienung': 'radiocomando', 'Einsatz': 'manovra traffico viaggiatori' },
  abschnitte: [
    { titel: 'Acquisto', p: ['Le FFS hanno ordinato le 21 locomotive nel dicembre 2007. Stadler ha consegnato il primo veicolo nel luglio 2009; entro la fine del 2010 dovevano essere equipaggiate sette grandi stazioni.'] },
    { titel: 'Concetto d’impiego', p: ['L’Ee 922 ha sostituito le vecchie Ee 3/3 nel traffico viaggiatori. Il suo equipaggiamento bifrequenza ne permette l’impiego anche nelle stazioni di confine con linea di contatto a 25 kV.'] }
  ],
  bilder: ['Ee 922 011', 'Ee 922 012', 'Ee 922 021 a Briga', 'Ee 922 006 a Basilea', 'Ee 922 002 a Romanshorn']
});

uebZug('eem-923', {
  typ: 'Locomotiva di manovra bimodale di FFS Cargo',
  text: ['L’Eem 923 è una locomotiva elettrica compatta con motore diesel ausiliario della piattaforma Butler di Stadler.', 'FFS Cargo la impiega in manovra, nella distribuzione e nel servizio leggero di linea; senza linea di contatto il diesel ausiliario fornisce l’energia.'],
  kennzahlen: [['30', 'locomotive ordinate'], ['1500 kW', 'potenza elettrica'], ['45 t', 'massa a vuoto'], ['2012–2013', 'introduzione della flotta']],
  daten: { 'Plattform': 'Butler', 'Spurweite': 'scartamento normale, 1435 mm', 'Gewicht': '45 t a vuoto', 'Antrieb': 'elettrica, con motore diesel ausiliario per l’ultimo miglio', 'Leistung': '1500 kW elettrica', 'Höchstgeschwindigkeit': '120 km/h (FOS 2026), 100 km/h all’introduzione', 'Einsatz': 'FFS Cargo, manovra e distribuzione' },
  specNote: 'La diversa velocità massima proviene da due stati delle fonti ufficiali: 100 km/h all’introduzione e 120 km/h nel catalogo dei tipi di marcia 2026.',
  abschnitte: [
    { titel: 'Acquisto', p: ['FFS Cargo ha presentato la prima locomotiva nel 2011. La consegna è iniziata all’inizio del 2012; dal 2013 tutti i 30 veicoli ordinati dovevano essere in servizio.'] },
    { titel: 'Modi di esercizio', p: ['Sotto la linea di contatto la locomotiva viaggia in elettrico. Il motore diesel permette consegne su binari di raccordo senza linea di contatto, senza impiegare una seconda locomotiva.'] }
  ],
  bilder: ['Eem 923 004 di FFS Cargo', 'Eem 923 016', 'Eem 923 030', 'Eem 923 «Le Jorat»', 'Eem 923 a Payerne']
});

uebZug('bm-44', {
  typ: 'Pesante locomotiva di manovra diesel-elettrica (storica)',
  text: ['La Bm 4/4 era una pesante locomotiva di manovra diesel-elettrica delle FFS.', 'Le 46 macchine sostituirono le locomotive a vapore nella manovra pesante e potevano lavorare indipendentemente dalla linea di contatto.'],
  kennzahlen: [['46', 'locomotive costruite'], ['620 kW', 'potenza nel catalogo dei tipi di marcia'], ['75 km/h', 'velocità massima'], ['1960–1970', 'anni di costruzione']],
  daten: { 'Hersteller': 'SLM e SAAS', 'Antrieb': 'diesel-elettrica', 'Spurweite': 'scartamento normale, 1435 mm', 'Gewicht': '72 t a vuoto', 'Einsatz': 'manovra pesante' },
  specNote: 'Questa pagina tratta la serie regolare 18401–18446, non la Bm 4/4 II, che ne è separata.',
  abschnitte: [
    { titel: 'Acquisto e compito', p: ['Tra il 1960 e il 1970 furono costruite 46 locomotive. Si assunsero i pesanti lavori di manovra e sostituirono le ultime locomotive a vapore usate per questi compiti.'] },
    { titel: 'Stato storico', p: ['La serie appartiene alla vecchia generazione di locomotive diesel FFS. Una voce nel catalogo dei tipi di marcia descrive il tipo per scopi d’esercizio e non attesta una flotta FFS attuale.'] }
  ],
  bilder: ['Bm 4/4 18427', 'Bm 4/4 18427 di fronte', 'Bm 4/4 con treno di soccorso a Göschenen', 'Bm 4/4 18442']
});

uebZug('tm-232', {
  beiname: 'Tm III e Tm IV',
  typ: 'Trattori diesel modernizzati',
  text: ['Alle FFS la designazione Tm 232 comprende due diverse serie di trattori modernizzati.', 'Dati tecnici, numeri e anni di costruzione appartengono quindi sempre alla sottoserie Tm III o Tm IV.'],
  kennzahlen: [['2', 'serie d’origine diverse'], ['52', 'Tm III diventati 232 001–052'], ['2003–2010', 'periodo delle modernizzazioni'], ['51', 'effettivo di FFS Infrastruttura prima della sostituzione del 2019']],
  daten: { 'Unterserie ex Tm IV': 'Tm 232 101–146 e 201–234', 'Antrieb': 'diesel-idraulica', 'Spurweite': 'scartamento normale, 1435 mm', 'Leistung': 'circa 260–280 kW secondo la sottoserie', 'Höchstgeschwindigkeit': '60–80 km/h secondo la serie', 'In Betrieb seit': '2003 (prime modernizzazioni)', 'Einsatz': 'manovra leggera e servizio lavori' },
  specNote: 'Il numero 51 indica l’effettivo di FFS Infrastruttura citato nel 2019 prima della sostituzione con il Tm 234-4, non tutti i Tm 232 mai costruiti.',
  abschnitte: [
    { titel: 'Modernizzazione', p: ['52 Tm III sono stati immatricolati come Tm 232 001–052. Altri veicoli derivano da Tm IV; la prima trasformazione di questo gruppo è avvenuta nel 2007.'] },
    { titel: 'Impiego e sostituzione', p: ['FFS Cargo ha usato i Tm 232 nella distribuzione leggera. Nel 2019 FFS Infrastruttura ha iniziato a sostituire i suoi 51 trattori del servizio lavori con 35 nuovi Tm 234-4.'] }
  ],
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
  abschnitte: [
    { titel: 'Serie e impiego', p: ['Le FFS fecero costruire in tutto 136 Ee 3/3. Le locomotive manovravano carrozze e carri nelle stazioni e nei depositi.', 'L’ultima macchina attiva delle FFS è stata ritirata nel 2020.'] },
    { titel: 'Delimitazione', p: ['Le varianti bifrequenza e quadritensione portano le designazioni Ee 3/3 II ed Ee 3/3 IV e costituiscono tecnicamente sottoserie a sé.'] }
  ],
  bilder: ['Ee 3/3 16408', 'Ee 3/3 16408 di lato', 'Ee 3/3 16451', 'Ee 3/3 16404 a Gossau SG', 'Ee 3/3 16383, costruita nel 1942']
});

uebZug('h-ce68ii', {
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
  abschnitte: [
    { titel: 'Storia e impiego', p: ['La serie era prevista per i treni merci pesanti sul San Gottardo, sulle linee d’accesso e in pianura.', 'Nel 1956 la velocità massima ammessa fu aumentata a 75 km/h e la serie fu ridenominata Be 6/8 III. Il servizio regolare terminò nel 1977.'] },
    { titel: 'Conservazione', p: ['La Ce 6/8 III 14305 è conservata come veicolo storico. Rappresenta la forma a Coccodrillo delle FFS, nota in tutto il mondo.'] }
  ],
  bilder: ['Ce 6/8 III 14305', 'Ce 6/8 III durante una corsa di FFS Historic', 'Ce 6/8 III 14305 di lato', 'Ce 6/8 III 14305 in visita a Malmö (2015)', 'Targa del costruttore della Ce 6/8 III 14305']
});

uebZug('h-ae66', {
  beiname: 'Locomotiva dei cantoni',
  typ: 'Locomotiva dei cantoni e icona del San Gottardo (storica)',
  text: ['L’Ae 6/6 è stata per decenni la locomotiva di potenza delle FFS sul San Gottardo.', 'Le prime 25 macchine portavano gli stemmi cantonali e modanature cromate; le successive ricevettero gli stemmi di città e comuni svizzeri.'],
  kennzahlen: [['120', 'locomotive'], ['125 km/h', 'velocità massima'], ['1952', 'prima messa in servizio'], ['4300 kW', 'potenza oraria']],
  daten: { 'Gewicht': '120 t (prototipi 124 t)', 'Leistung': 'circa 4300 kW potenza oraria alla ruota', 'In Betrieb seit': '1952 (serie 1955–1966)', 'Einsatz': 'San Gottardo, treni viaggiatori e merci pesanti' },
  abschnitte: [
    { titel: 'Storia e impiego', p: ['Dapprima l’Ae 6/6 ha segnato il traffico diretto e merci sul San Gottardo. Con locomotive più moderne il suo impiego si è spostato sempre più verso il traffico merci e l’Altopiano.'] },
    { titel: 'Conservazione', p: ['Diverse Ae 6/6 sono state conservate. L’Ae 6/6 11421 «Graubünden» fa parte della collezione di FFS Historic e mantiene viva l’epoca delle locomotive dei cantoni.'] }
  ],
  bilder: ['Ae 6/6 11413 «Schaffhausen»', 'Ae 6/6 al Museo svizzero dei trasporti di Lucerna', 'Ae 6/6 in livrea rossa a Renens', 'Ae 6/6 di fronte', 'Ae 6/6 in verde con modanature cromate']
});

uebZug('h-ae47', {
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
  abschnitte: [
    { titel: 'Storia e impiego', p: ['La grande serie fu acquistata in più lotti e impiegata nel traffico viaggiatori, diretto e merci. Le migliorie introdotte durante la costruzione crearono differenze di potenza e velocità all’interno della flotta.'] },
    { titel: 'Importanza e conservazione', p: ['Con un servizio dal 1921 al 1994 l’Ae 3/6 I è tra le serie di locomotive FFS più longeve. Diverse locomotive sono state conservate da musei e associazioni, tra cui la 10700 nell’ambito di FFS Historic.'] }
  ],
  bilder: ['Ae 3/6 I 10700', 'Ae 3/6 I con trasmissione Buchli', 'Ae 3/6 I 10650 a Brugg (2012)', 'Ae 3/6 I 10712 a Biel/Bienne (1988)', 'Ae 3/6 I 10638']
});

uebZug('h-ae814', {
  beiname: 'Landi-Lok',
  typ: 'Tre doppie locomotive uniche per il San Gottardo (storiche)',
  text: ['La designazione Ae 8/14 comprende tre doppie locomotive sviluppate singolarmente.', 'Dovevano trainare i pesanti treni del San Gottardo senza locomotive di rinforzo in testa o in spinta e alla loro nascita erano considerate straordinariamente potenti.'],
  kennzahlen: [['3', 'prototipi'], ['1931', 'prima messa in servizio'], ['fino a 110 km/h', 'velocità massima'], ['8162 kW', 'potenza oraria massima']],
  daten: { 'Hersteller': 'SLM, BBC o MFO', 'Achsfolge': 'diverso secondo la locomotiva', 'Länge': 'circa 34 m', 'Gewicht': '235,7–246 t in servizio', 'Leistung': '5514–8162 kW potenza oraria', 'In Betrieb seit': '1931 (costruite 1931, 1932, 1938/40)', 'Einsatz': 'treni pesanti del San Gottardo' },
  abschnitte: [
    { titel: 'Tre pezzi unici diversi', p: ['La 11801, la 11851 e la 11852 differivano per trasmissione, potenza e costruzione.', 'La 11852 fu costruita per l’Esposizione nazionale del 1939 e divenne famosa come «Landi-Lok». Con oltre 8 MW è stata a lungo la locomotiva più potente del mondo.'] },
    { titel: 'Conservazione', p: ['L’Ae 8/14 11852 è conservata da FFS Historic a Erstfeld. Attualmente non è in grado di circolare, ma può essere visitata come pezzo storico di primo piano.'] }
  ],
  bilder: ['Ae 8/14 11801 a Biasca', 'Ae 8/14 11852 «Landi-Lok» al Museo svizzero dei trasporti', 'Ae 8/14 11851 nuova di fabbrica sul ponte del Kerstelenbach, 1932', 'Ae 8/14 11801 durante una corsa speciale', 'Ae 8/14 11801 a Bellinzona']
});

uebZug('h-be46', {
  typ: 'Locomotiva della prima generazione elettrica del San Gottardo (storica)',
  text: ['La Be 4/6 faceva parte della prima generazione di locomotive elettriche del San Gottardo.', 'Per la sua forma caratteristica ricevette il soprannome di «Rehbock» (capriolo) e trainò dapprima i pesanti treni diretti sulla linea di montagna.'],
  kennzahlen: [['40', 'locomotive'], ['75 km/h', 'velocità massima'], ['1920', 'prima messa in servizio'], ['107–110 t', 'massa in servizio']],
  daten: { 'Achsfolge': '6 assi, di cui 4 motori e 2 portanti; trasmissione a bielle', 'Gewicht': '107–110 t in servizio', 'Leistung': 'fino a 1500 kW potenza oraria', 'In Betrieb seit': '1920 (costruite 1920–1923)', 'Ausmusterung': 'fino al 1976', 'Einsatz': 'treni diretti e merci' },
  abschnitte: [
    { titel: 'Storia e impiego', p: ['Le FFS ordinarono la serie per l’esercizio elettrico sul San Gottardo. Con l’aumento della massa dei treni le macchine furono soppiantate da tipi più potenti e impiegate in seguito sull’Altopiano e in servizi secondari.'] },
    { titel: 'Conservazione', p: ['La Be 4/6 12320 fa parte del parco veicoli storico. Ricorda l’epoca pionieristica della trazione elettrica sulla linea del San Gottardo.'] }
  ],
  bilder: ['Be 4/6 12320 accanto al RAe TEE II 1053', 'Be 4/6 di FFS Historic tra Rämismühle-Zell e Rikon', 'Be 4/6 12320', 'Be 4/6 presso Rämismühle', 'Be 4/6 12339']
});

uebZug('h-re44i', {
  typ: 'Locomotiva leggera per treni diretti del dopoguerra (storica)',
  text: ['La Re 4/4 I è stata la prima locomotiva a carrelli delle FFS.', 'Concepita per treni veloci e leggeri, ha segnato insieme alle carrozze leggere in acciaio il traffico di qualità sull’Altopiano.'],
  kennzahlen: [['50', 'locomotive'], ['125 km/h', 'velocità massima'], ['1946', 'prima messa in servizio'], ['57 t', 'massa in servizio']],
  daten: { 'Länge': '14,7 / 14,9 m (secondo la serie)', 'Gewicht': '57 t in servizio', 'Leistung': '1850 / 1900 kW potenza oraria', 'Nummern': '10001–10050 (prima 401–450)', 'In Betrieb seit': '1946 (costruite 1946–1951)', 'Einsatz': 'treni diretti e navetta, poi treni regionali' },
  abschnitte: [
    { titel: 'Storia e impiego', p: ['Le locomotive furono costruite in due serie. Il peso ridotto, la marcia tranquilla e la velocità massima di 125 km/h le rendevano ideali per treni diretti e pendolari.', 'In seguito passarono ai servizi regionali e di rinforzo.'] },
    { titel: 'Conservazione', p: ['Il ritiro regolare avvenne dal 1996 al 1998. La Re 4/4 I 10001 è conservata come locomotiva storica da FFS Historic.'] }
  ],
  bilder: ['Re 4/4 I 10029 a Stein am Rhein (1991)', 'Re 4/4 I 10019', 'Re 4/4 I (come Re 410 009) presso Zurigo, 2015', 'Re 4/4 I 10019 a Basilea Badischer Bahnhof', 'Re 4/4 I 10032 a České Velenice']
});

uebZug('h-tee', {
  typ: 'Elettrotreno quadritensione per il traffico internazionale di punta (storico)',
  text: ['Il RAe TEE II collegava la Svizzera senza cambio di locomotiva con Germania, Francia, Italia e Paesi Bassi.', 'La sua tecnica quadritensione ne fece uno degli elettrotreni europei tecnicamente più complessi della sua epoca.'],
  kennzahlen: [['5', 'elettrotreni'], ['140 km/h', 'in esercizio · tecnica 160 km/h'], ['1961', 'prima messa in servizio'], ['4', 'sistemi di corrente']],
  daten: { 'Zugbildung': 'a sei elementi (stato conservato; i primi quattro treni erano in origine a cinque elementi)', 'Stromsystem': '15 kV e 25 kV CA, 1,5 kV e 3 kV CC', 'Gewicht': 'circa 309 t in servizio', 'Leistung': 'circa 2310 kW', 'Höchstgeschwindigkeit': '140 km/h in esercizio, 160 km/h tecnica', 'In Betrieb seit': '1961 (quinto treno 1967)', 'Einsatz': 'Trans-Europ-Express, poi EuroCity' },
  abschnitte: [
    { titel: 'Storia e impiego', p: ['Quattro unità furono consegnate nel 1961 a cinque elementi e poi allungate con una carrozza intermedia; il quinto treno seguì nel 1967. Gli eleganti elettrotreni circolarono tra l’altro come TEE Gottardo, Cisalpin, Edelweiss e Roland.', 'Dal 1988 viaggiarono in grigio come RABe EC nel traffico EuroCity.'] },
    { titel: 'Conservazione', p: ['Il treno RAe TEE II 1053 è stato conservato. FFS Historic lo ha riportato allo stato TEE rosso e beige; dal 2003 circola in corse speciali storiche.'] }
  ],
  bilder: ['RAe TEE II al marciapiede', 'RAe TEE II a Zurigo HB, 1963', 'Testata del RAe TEE II', 'RAe TEE II in viaggio', 'RAe TEE II a Zurigo HB, 1963']
});

uebZug('h-roterpfeil', {
  beiname: 'Freccia rossa',
  typ: 'Automotrice elettrica leggera per gite e corse veloci (storica)',
  text: ['Le sette Frecce rosse elettriche furono consegnate tra il 1935 e il 1938 come CLe 2/4 e in seguito ridenominate più volte.', 'La loro forma aerodinamica rossa ne fece uno dei simboli più noti delle moderne FFS degli anni Trenta.'],
  kennzahlen: [['7', 'veicoli elettrici di base'], ['125 km/h', 'velocità massima'], ['1935', 'prima messa in servizio'], ['70', 'posti a sedere']],
  daten: { 'Gewicht': 'circa 38 t in servizio', 'Leistung': '404 kW potenza oraria, 315 kW potenza continuativa', 'Nummern': '201–207, poi 601–607', 'Einsatz': 'gite e viaggi di gruppo, prestazioni speciali veloci' },
  abschnitte: [
    { titel: 'Designazioni e trasformazioni', p: ['Le vetture 201 e 202 furono consegnate nel 1935, le 203–206 nel 1936 e la 207 nel 1938. In seguito portarono tra l’altro la designazione RCe 2/4. Le vetture 201 e 206 furono allungate nel 1952 e nel 1953 e trasformate per la 1a classe (RAe 2/4); altre portarono da ultimo la designazione RBe 2/4.', 'Per questo i dati sull’effettivo variano secondo la designazione e il periodo.'] },
    { titel: 'Impiego e importanza', p: ['Le Frecce rosse servivano per gite, viaggi di gruppo e prestazioni speciali veloci. Il peso ridotto e la forma aerodinamica incarnavano lo slancio tecnico del periodo tra le due guerre.'] }
  ],
  bilder: ['Freccia rossa RCe 2/4 203']
});

uebZug('h-a35', {
  typ: 'Locomotiva a vapore per treni diretti della serie 701–809 (storica)',
  text: ['Alle FFS la designazione A 3/5 è stata usata per diversi tipi costruttivi.', 'Questa pagina tratta la nota serie JS/FFS 701–809, a cui appartiene anche l’A 3/5 705 conservata.'],
  kennzahlen: [['109', 'locomotive della serie'], ['100 km/h', 'velocità massima'], ['1902', 'prima messa in servizio'], ['920 kW', 'potenza indicata']],
  daten: { 'Länge': '18,60 m con tender', 'Gewicht': '106–107 t in servizio con tender', 'Leistung': '920 kW (indicata)', 'Anfahrzugkraft': 'circa 75 kN', 'In Betrieb seit': '1902 (costruite 1902–1909)', 'Einsatz': 'treni diretti' },
  abschnitte: [
    { titel: 'Storia e impiego', p: ['Le locomotive erano state ancora ordinate dalla Ferrovia Giura-Sempione e furono rilevate dalle FFS. 68 macchine ricevettero la tecnica del vapore surriscaldato.', 'Trainarono treni diretti di qualità finché locomotive più potenti e poi elettriche le soppiantarono.'] },
    { titel: 'Conservazione', p: ['L’A 3/5 705 è stata conservata in grado di circolare. È curata dalla Dampfgruppe Zürich e rappresenta il vapore dei treni diretti dei primi anni delle FFS.'] }
  ],
  bilder: ['A 3/5 705 accanto all’Ae 3/6 I 10694 ad Arnex-sur-Orbe, 1967']
});

uebZug('h-c56', {
  typ: 'Locomotiva a vapore per i pesanti treni del San Gottardo (storica)',
  text: ['La C 5/6 era tra le locomotive a vapore più grandi e potenti delle FFS. Fu anche il loro ultimo acquisto di locomotive a vapore nuove a scartamento normale.', 'Il soprannome «Elefant» (elefante) rimanda all’aspetto imponente e al grande sforzo di trazione.'],
  kennzahlen: [['28', 'locomotive di serie'], ['65 km/h', 'velocità massima'], ['1913', 'prima messa in servizio'], ['128 t', 'con tender']],
  daten: { 'Länge': '19,195 m con tender', 'Gewicht': '128 t con tender', 'Leistung': 'circa 1190 kW (indicata)', 'In Betrieb seit': '1913 (costruite 1913–1917)', 'Ausmusterung': 'fino al 1968', 'Einsatz': 'treni merci pesanti' },
  abschnitte: [
    { titel: 'Storia e impiego', p: ['La C 5/6 fu sviluppata per il traffico pesante sul San Gottardo. Dopo l’elettrificazione passò sull’Altopiano, sulla linea Bellinzona–Luino e in servizi di manovra.', 'Nel 1968 la 2969 trainò l’ultimo treno a vapore ufficiale delle FFS.'] },
    { titel: 'Conservazione', p: ['Diversi esemplari sono stati conservati. La C 5/6 2978, ultima locomotiva della serie, fa parte del parco veicoli storico delle FFS.'] }
  ],
  bilder: ['C 5/6 2958 al Locorama', 'C 5/6 2965 del 1916', 'C 5/6 2965, costruita da SLM', 'C 5/6 «Elefant» in dettaglio', 'Targhe della C 5/6 2965 «Erstfeld»']
});

uebZug('h-eb35', {
  typ: 'Locomotiva-tender versatile (storica)',
  text: ['L’Eb 3/5 era una robusta locomotiva-tender per servizi viaggiatori, merci e di manovra.', 'La sua forma tozza le valse il soprannome popolare di «Habersack».'],
  kennzahlen: [['34', 'locomotive'], ['75 km/h', 'velocità massima'], ['1911', 'prima messa in servizio'], ['74–74,9 t', 'massa in servizio']],
  daten: { 'Bauart': 'locomotiva-tender 1′C1′', 'Länge': '12,74 m respingenti compresi (Eb 3/5 5819)', 'Gewicht': '57,6–58,8 t a vuoto, 74–74,9 t in servizio', 'Kesseldruck': 'circa 12 bar', 'Vorräte': '7,7 m³ d’acqua, 2,5 t di carbone', 'In Betrieb seit': '1911 (costruite 1911–1916)', 'Einsatz': 'treni regionali, linee secondarie, servizio di stazione' },
  abschnitte: [
    { titel: 'Storia e impiego', p: ['La disposizione simmetrica degli assi consentiva buone qualità di marcia in entrambe le direzioni senza dover girare la locomotiva.', 'L’Eb 3/5 era quindi particolarmente adatta a linee secondarie, treni regionali e servizi di stazione variati.'] },
    { titel: 'Conservazione', p: ['Singole locomotive della serie sono state conservate da musei e ferrovie storiche. Mostrano l’ultima generazione di locomotive-tender a vapore universali delle FFS.'] }
  ],
  bilder: ['Eb 3/5 a Bremgarten West', 'Eb 3/5 5810 (2018)', 'Eb 3/5 5885', 'Eb 3/5 «Habersack»', 'Eb 3/5 in ritratto']
});

uebZug('h-mirage', {
  typ: 'Espresso della Costa d’oro della periferia zurighese (storico)',
  text: ['Nel RABDe 12/12 a tre elementi tutti i dodici assi erano motori.', 'L’enorme accelerazione si adattava al fitto traffico suburbano sulla riva destra del lago di Zurigo e gli valse il soprannome di «Mirage».'],
  kennzahlen: [['20', 'elettrotreni'], ['125 km/h', 'velocità massima'], ['1967', 'prima messa in servizio'], ['2444 kW', 'potenza oraria']],
  daten: { 'Zugbildung': 'a tre elementi', 'Achsfolge': 'tutti i 12 assi motori', 'Gewicht': 'circa 170 t a vuoto', 'Leistung': '2444 kW potenza oraria', 'In Betrieb seit': '1967 (costruiti 1965–1967)', 'Ausmusterung': 'fino al 2008, demoliti entro il 2010', 'Einsatz': 'traffico suburbano sulla riva destra del lago di Zurigo' },
  abschnitte: [
    { titel: 'Storia e impiego', p: ['I treni furono acquistati per il traffico suburbano semiorario sulla linea della riva destra del lago di Zurigo e divennero noti come «Goldküstenexpress» (espresso della Costa d’oro). In seguito circolarono anche su altre linee regionali e S-Bahn.'] },
    { titel: 'Modernizzazione e fine', p: ['Dopo le trasformazioni i veicoli portarono la designazione RABDe 510. Il servizio regolare terminò nel 2008; entro il 2010 furono demolite le ultime unità. Nessun treno completo è stato conservato.'] }
  ],
  bilder: ['RABDe 12/12 «Mirage» in rosso', 'RABDe 12/12 «Mirage» nel 1983', '«Mirage» nella successiva livrea NPZ', '«Mirage» come RABDe 510', 'Due «Mirage» sulla Costa d’oro del lago di Zurigo']
});

uebZug('h-rbe540', {
  typ: 'Automotrice potente modernizzata per treni navetta (storica)',
  text: ['La RBe 540 è nata dalla modernizzazione delle RBe 4/4.', 'Le potenti automotrici trainarono dapprima treni diretti e poi soprattutto treni navetta regionali e S-Bahn.'],
  kennzahlen: [['82', 'RBe 4/4 costruite'], ['125 km/h', 'velocità massima'], ['1959', 'primi prototipi'], ['1988 kW', 'potenza oraria']],
  daten: { 'Gewicht': '68 t, dopo la trasformazione R4 72 t', 'Leistung': '1988 kW potenza oraria', 'Sitzplätze': '64, dopo la trasformazione R4 60', 'Nummern': 'in origine 1401–1482, come RBe 540 006–079', 'In Betrieb seit': '1959 (costruite 1959–1966)', 'Modernisierung': '1993–1998 (programma R4)', 'Ausmusterung': 'ultimi servizi regolari nel 2014', 'Einsatz': 'treni diretti, poi treni navetta regionali e S-Bahn' },
  abschnitte: [
    { titel: 'Storia e impiego', p: ['Le RBe 4/4 erano abbastanza potenti da trainare un treno diretto e offrivano al tempo stesso un compartimento viaggiatori.', 'Con il programma di trasformazione R4 ricevettero nuove cabine di guida, porte e interni, oltre alla designazione RBe 540.'] },
    { titel: 'Ritiro e conservazione', p: ['Gli ultimi servizi regolari terminarono nel 2014. Singoli veicoli sono stati conservati come storici, tra cui la RBe 540 074 impiegata sulla Oensingen-Balsthal-Bahn.'] }
  ],
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
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La Re 465 appartiene alla famiglia Lok 2000 di SLM e ABB. La BLS ordinò prima otto locomotive (001–008), poi altre dieci (009–018) per il corridoio di trasporto combinato; sono entrate in servizio dal 1994 al 1997.', 'Dal 2019 al 2022 tutte le 18 locomotive sono state modernizzate nell’officina di Bönigen per circa 20 milioni di franchi e verniciate di verde. Così possono circolare fino al 2040 circa.'] },
      { titel: 'Impiego e tecnica', p: ['Le Re 465 trainano o spingono il GoldenPass Express tra Interlaken Ost e Zweisimmen. Dal 19 dicembre 2023 svolgono il trasporto auto al Lötschberg, dal 2026 anche al Sempione, dove sostituiscono le Re 425 marroni.', 'Nel traffico merci circolano spesso in comando multiplo con TRAXX e Vectron. La locomotiva eroga 6400 kW ed è omologata per 160 km/h.'] }
    ],
  bilder: ['Re 465 014 a Zweisimmen', 'Re 465 001 e 007 in doppia trazione']
});
uebZug('bls-re-475', {
  typ: 'Locomotiva elettrica policorrente Siemens per BLS Cargo',
  text: ['La Re 475 è la locomotiva Vectron di BLS Cargo. È omologata in diversi paesi e traina treni merci attraverso le Alpi fino in Germania, Italia e Paesi Bassi.', 'BLS Cargo ha ampliato la flotta in più serie.'],
  kennzahlen: [['50', 'locomotive in tre serie'], ['2016', 'prima messa in servizio'], ['6', 'paesi (serie recenti)'], ['Siemens', 'costruttore']],
  daten: { 'Bauart': 'locomotiva elettrica policorrente Bo’Bo’', 'Zulassung': 'CH, D, A, I, NL; dal n. 416 anche B', 'Anzahl': '50 (in tre serie)' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['La Re 475 è la locomotiva Vectron di Siemens Mobility per BLS Cargo. La flotta cresce in tre serie fino a 50 locomotive: 401–415 (2016–2018), 416–440 (2020 e 2024–2025) e 441–450 (dal 2026).'] },
      { titel: 'Impiego e tecnica', p: ['BLS Cargo impiega la Re 475 soprattutto sugli assi Lötschberg-Sempione e Gottardo e circola così fino ai Paesi Bassi, in Belgio, Germania, Austria e Italia.', 'La locomotiva policorrente è omologata in fino a sei paesi; dal n. 416 anche in Belgio.'] },
      { titel: 'Tre serie', tabelle: { kopf: ['Numeri', 'Quantità', 'Consegna', 'Omologazione'], zeilen: [
    ['401–415', '15', '2016–2018', 'CH, D, A, I, NL'], ['416–440', '25', '2020, 2024–2025', 'CH, D, A, I, NL, B'], ['441–450', '10', 'dal 2026', 'CH, D, A, I, NL, B']] } }
    ],
  bilder: ['Re 475 401 di BLS Cargo']
});
uebZug('bls-re-485', {
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Nel 2002 BLS Cargo ha ordinato a Bombardier 20 TRAXX del tipo F140 AC; sono state consegnate entro metà 2003 e portano i numeri 485 001–020.', 'La 485 004 è stata distrutta nel 2020 in un incidente ad Auggen (Germania). Il numero di Re 485 oggi in servizio non è confermato pubblicamente.'] },
      { titel: 'Impiego e tecnica', p: ['Le Re 485 trainano treni merci in Svizzera e verso la Germania, sugli assi Lötschberg-Sempione e Gottardo.', 'Tecnicamente corrispondono alla serie tedesca 185 e alle Re 482 di FFS Cargo, con un pacchetto di equipaggiamento svizzero. Viaggiano fino a 140 km/h.'] }
    ],
  typ: 'Locomotiva elettrica per treni merci Bombardier',
  text: ['Le Re 485 sono locomotive TRAXX di BLS Cargo per il traffico merci in Svizzera e verso la Germania.', 'Sono state ordinate nel 2002 e consegnate entro metà 2003.'],
  kennzahlen: [['20', 'locomotive acquistate'], ['140 km/h', 'velocità massima'], ['CH, D', 'omologazione'], ['2002', 'prima messa in servizio']],
  daten: { 'Bauart': 'locomotiva elettrica Bo’Bo’', 'Zulassung': 'Svizzera, Germania', 'Anzahl': '20 acquistate; 485 004 ritirata dopo un incidente nel 2020' },
  specNote: 'I 140 km/h derivano dal tipo TRAXX F140.',
  bilder: ['Re 485 005 di BLS Cargo', 'Re 485 016 con un treno merci', 'Re 485 008 presso Allmendingen']
});
uebZug('bls-re-486', {
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Bombardier ha fornito a BLS Cargo dall’autunno 2008 dieci TRAXX policorrente del tipo F140 MS con i numeri 486 501–510; le ultime sono seguite nel 2009.'] },
      { titel: 'Impiego e tecnica', p: ['Le Re 486 possono circolare in Svizzera, Germania, Italia e Austria. Sono quindi adatte al transito attraverso le Alpi, per esempio con l’autostrada viaggiante.', 'Come locomotiva policorrente circola con corrente alternata e continua; la velocità massima è di 140 km/h.'] }
    ],
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
  abschnitte: [{ titel: 'La Re 4/4 165 «Moutier»', p: ['La 165 fu consegnata alla BLS come Ae 4/4 II 265 e porta lo stemma del comune di Moutier. Dal 2017 fa parte dei veicoli storici della Fondazione BLS e si trova, fuori servizio, nel deposito di Burgdorf.'] }],
  bilder: ['Re 425 192 a Spiez']
});
uebZug('bls-am-843', {
  typ: 'Locomotiva diesel-idraulica di BLS Infrastruttura',
  text: ['Anche BLS Infrastruttura impiega locomotive diesel della serie Am 843, per esempio la Am 843 503. Trainano treni cantiere e manovrano dove non c’è linea di contatto.', 'Tecnicamente la locomotiva corrisponde alla Am 843 delle FFS.'],
  kennzahlen: [['843 503', 'esempio fotografato'], ['diesel', 'trazione'], ['treni cantiere', 'impiego'], ['BLS', 'infrastruttura']],
  daten: { 'Bauart': 'locomotiva diesel', 'Antrieb': 'diesel-idraulica', 'Betreiber': 'BLS Infrastruttura', 'Einsatz': 'treni cantiere, manovra, intervento' },
  specNote: 'La BLS indica lunghezza, peso e anno per la Am 843 del suo servizio d’intervento. Il numero totale di Am 843 della BLS non è documentato pubblicamente.',
  abschnitte: [{ titel: 'Nel servizio d’intervento', p: ['La BLS elenca una Am 843 tra i veicoli del suo servizio d’intervento, insieme al treno di spegnimento e soccorso LRZ 04 e al carro di soccorso. Il servizio d’intervento è il corpo pompieri aziendale della BLS.'] }],
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
  specNote: 'I dati valgono per l’LRZ 04, che la BLS indica per il suo servizio d’intervento. Il numero totale di treni non è documentato pubblicamente.',
  abschnitte: [{ titel: 'L’LRZ 04', liste: ['Veicolo attrezzi', 'Veicolo di spegnimento con cisterna', 'Due veicoli di soccorso'] }],
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

/* ---- 32-bls-neu.js ---- */
/* Italiano – BLS: locomotive noleggiate, carri di servizio, intervento */
uebDict({ 'Schotter- und Kippwagen': 'Carri per pietrisco e ribaltabili' });

uebZug('bls-br-185', {
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le quattro locomotive sono TRAXX F140 AC di Bombardier Transportation. Appartengono al noleggiatore Alpha Trains e sono immatricolate in Germania; BLS Cargo le noleggia.'] },
      { titel: 'Impiego e tecnica', p: ['Omologate per Germania, Austria e Svizzera, completano presso BLS Cargo le Re 485 proprie, con cui sono tecnicamente strettamente imparentate.', 'Erogano fino a 5600 kW e viaggiano fino a 140 km/h.'] }
    ],
  typ: 'Locomotiva elettrica noleggiata da Alpha Trains',
  text: ['Oltre alle proprie locomotive, BLS Cargo impiega locomotive noleggiate immatricolate in Germania. Tra queste ci sono quattro TRAXX della serie 185 di Alpha Trains.', 'Tecnicamente sono strette parenti delle Re 485 della BLS, che corrispondono alla serie tedesca 185 con un equipaggiamento svizzero aggiuntivo.'],
  kennzahlen: [['4', 'locomotive noleggiate'], ['140 km/h', 'velocità massima'], ['fino a 5600 kW', 'potenza'], ['D, A, CH', 'omologazione']],
  daten: { 'Bauart': 'locomotiva elettrica Bo’Bo’', 'Betreiber': 'BLS Cargo (noleggiata)', 'Leistung': 'fino a 5600 kW', 'Zulassung': 'Germania, Austria, Svizzera', 'Anzahl': '4 noleggiate' },
  specNote: 'I numeri delle quattro locomotive noleggiate non sono pubblicati. La foto mostra la 185 525 con i colori BLS nel 2009.',
  bilder: ['185 525 con i colori BLS a Friburgo (2009)']
});
uebZug('bls-br-186', {
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le nove locomotive sono TRAXX policorrente F140 MS di Bombardier Transportation. Appartengono al noleggiatore Railpool; su foto si vedono tra l’altro le 186 101, 103–105, 108 e 109 con la scritta BLS.'] },
      { titel: 'Impiego e tecnica', p: ['Le locomotive sono omologate per Germania, Austria, Svizzera, Italia e Paesi Bassi. Trainano treni merci sull’asse Rotterdam–Italia, per esempio il Melzo-Shuttle.', 'Con corrente alternata erogano 5600 kW, con 1,5 kV continua nei Paesi Bassi 4000 kW; viaggiano fino a 140 km/h.'] }
    ],
  typ: 'Locomotiva policorrente noleggiata da Railpool',
  text: ['BLS Cargo noleggia da Railpool nove TRAXX policorrente della serie 186. Possono circolare in cinque paesi, fino ai Paesi Bassi.', 'Trainano così treni merci sull’asse Rotterdam–Italia, per esempio il Melzo-Shuttle.'],
  kennzahlen: [['9', 'locomotive noleggiate'], ['140 km/h', 'velocità massima'], ['5600 kW', 'potenza'], ['5', 'paesi']],
  daten: { 'Bauart': 'locomotiva elettrica policorrente Bo’Bo’', 'Betreiber': 'BLS Cargo (noleggiata)', 'Fahrzeugnummern': 'tra l’altro 186 101, 103–105, 108, 109 (documentate da foto)', 'Leistung': '5600 kW (4000 kW con 1,5 kV continua)', 'Zulassung': 'Germania, Austria, Svizzera, Italia, Paesi Bassi', 'Anzahl': '9 noleggiate' },
  specNote: 'Le TRAXX policorrente proprie di BLS Cargo si chiamano Re 486 e hanno una pagina propria.',
  bilder: ['186 101 di BLS Cargo', '186 109 con il Melzo-Shuttle presso Elten (NL)']
});
uebZug('bls-br-187', {
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le tre locomotive appartengono alla terza generazione TRAXX (AC3) di Bombardier Transportation. BLS Cargo le noleggia a lungo termine dal noleggiatore Railpool; la 187 004 compare su foto con la scritta BLS.'] },
      { titel: 'Impiego e tecnica', p: ['Omologate per Germania, Austria e Svizzera, trainano treni merci di BLS Cargo.', 'Erogano 5600 kW e pesano 84 t. La serie 187 esiste anche con un piccolo motore diesel per l’«ultimo miglio» senza linea di contatto; non è documentato pubblicamente se le tre locomotive della BLS ne siano dotate.'] }
    ],
  typ: 'Locomotiva elettrica noleggiata da Railpool',
  text: ['BLS Cargo ha noleggiato a lungo termine da Railpool tre locomotive della serie 187. Appartengono alla terza generazione TRAXX.', 'La serie 187 esiste anche con un piccolo motore diesel per l’«ultimo miglio» senza linea di contatto. Non è documentato pubblicamente se le tre locomotive della BLS ne siano dotate.'],
  kennzahlen: [['3', 'locomotive noleggiate'], ['5600 kW', 'potenza'], ['84 t', 'peso'], ['D, A, CH', 'omologazione']],
  daten: { 'Bauart': 'locomotiva elettrica Bo’Bo’', 'Betreiber': 'BLS Cargo (noleggiata)', 'Höchstgeschwindigkeit': '140 o 160 km/h secondo la versione', 'Zulassung': 'Germania, Austria, Svizzera', 'Anzahl': '3 noleggiate' },
  bilder: ['187 004 di BLS Cargo']
});
uebZug('bls-br-193', {
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['Le locomotive sono Vectron di Siemens Mobility. Secondo l’elenco della flotta, BLS Cargo noleggia sei locomotive e altre quattro, che circolano in parte con i colori dell’operatore combinato Hupac (tra l’altro 193 494–496). Su foto si vedono inoltre le 193 711, 713 e 716.'] },
      { titel: 'Impiego e tecnica', p: ['Omologate per Germania, Austria, Svizzera, Italia e Paesi Bassi, circolano soprattutto nel traffico di transito tra i porti del Mare del Nord e l’Italia.', 'Come locomotive policorrente erogano fino a 6400 kW.'] }
    ],
  typ: 'Siemens Vectron noleggiate per BLS Cargo',
  text: ['Oltre alle proprie Re 475, BLS Cargo noleggia locomotive Vectron della serie 193. Secondo l’elenco della flotta si tratta di sei locomotive e di altre quattro, che circolano in parte con i colori dell’operatore combinato Hupac.', 'Omologate fino ai Paesi Bassi e in Italia, circolano soprattutto nel traffico di transito.'],
  kennzahlen: [['10', 'locomotive noleggiate'], ['fino a 6400 kW', 'potenza'], ['5', 'paesi'], ['Siemens', 'costruttore']],
  daten: { 'Bauart': 'locomotiva elettrica policorrente Bo’Bo’', 'Eigentümer': 'diversi noleggiatori, tra cui BRCE', 'Betreiber': 'BLS Cargo (noleggiata)', 'Fahrzeugnummern': 'tra l’altro 193 494–496 (Hupac), 193 711, 713, 716 (documentate da foto)', 'Leistung': 'fino a 6400 kW', 'Zulassung': 'Germania, Austria, Svizzera, Italia, Paesi Bassi', 'Anzahl': '6 + 4 noleggiate' },
  specNote: 'Le Vectron proprie di BLS Cargo si chiamano Re 475 e hanno una pagina propria.',
  bilder: ['193 716 di BLS Cargo', '193 496 con i colori Hupac e il Melzo-Shuttle presso Angeren (NL)']
});
uebZug('bls-fccnpps', {
  typ: 'Carri per pietrisco a due assi di BLS Netz SA',
  text: ['Nel 2012 BLS Netz SA ha ordinato al costruttore LEGIOS 20 carri per pietrisco a due assi. Servono soprattutto per i trasporti propri verso i cantieri.', 'Come carri della categoria F, si scaricano verso il basso per gravità.'],
  kennzahlen: [['20', 'carri'], ['2', 'assi'], ['2012', 'acquisto'], ['LEGIOS', 'costruttore']],
  daten: { 'Bauart': 'carro per pietrisco a due assi', 'Betreiber': 'BLS Netz SA' },
  bilder: ['Fccnpps 722 a Spiez (2012)']
});
uebZug('bls-faccnpps', {
  typ: 'Carri per pietrisco a quattro assi di BLS Netz SA',
  text: ['Nel 2023 BLS Netz SA ha completato i suoi carri per pietrisco con 20 carri a quattro assi. Sono costruiti in modo simile ai Fccnpps a due assi del 2012.', 'Sono stati prodotti nello stabilimento di Niesky, in Germania.'],
  kennzahlen: [['20', 'carri'], ['4', 'assi'], ['2023', 'acquisto'], ['Niesky', 'costruttore']],
  daten: { 'Bauart': 'carro per pietrisco a quattro assi', 'Betreiber': 'BLS Netz SA' }
});
uebZug('bls-xas', {
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
  abschnitte: [{ titel: 'I carri NFTA di BLS Cargo', p: ['I carri 510–529 (costruiti nel 2000) e 530 (1995) appartenevano a BLS Cargo e trasportavano il materiale di scavo dei cantieri NFTA. Nell’aprile 2010 sono stati venduti a RTS e nel 2014 ceduti a MBC.'] }],
  bilder: ['Fans-u 505 a Heustrich-Emdthal (2007)']
});
uebZug('bls-schleiffahrzeug', {
  name: 'Veicolo di molatura', beiname: 'strada-rotaia',
  typ: 'Veicolo strada-rotaia per molare rotaie e scambi',
  text: ['Il veicolo di molatura è il più recente veicolo di manutenzione della BLS. Circola su strada e su binario. Mole montate sotto il veicolo molano rotaie e scambi.', 'Così una squadra della BLS può reagire rapidamente ai difetti delle rotaie e molare preventivamente gli scambi importanti, oltre ai grandi treni di molatura.'],
  kennzahlen: [['strada + binario', 'strada-rotaia'], ['mole', 'utensile'], ['2025', 'primo impiego'], ['Spiez', 'primo luogo d’impiego']],
  daten: { 'Bauart': 'veicolo strada-rotaia per la molatura delle rotaie', 'Betreiber': 'BLS Netz SA', 'Einsatz': 'molatura di rotaie e scambi' },
  specNote: 'La BLS ha ricevuto il veicolo a fine 2024; il primo impiego effettivo era previsto a inizio 2025 a Spiez. La BLS non indica costruttore né dati tecnici.',
  abschnitte: [{ titel: 'Perché molare?', p: ['Il carico delle ruote crea sulle rotaie sottili fessure e deformazioni. La molatura ripristina il profilo originale della rotaia. Così rotaie e scambi durano di più e i treni viaggiano più silenziosi.'] }]
});
uebZug('bls-hilfswagen', {
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
  'Klassiker von SBB, BLS, TPF und SOB, die heute nicht mehr im Alltag fahren. Viele sind bei SBB Historic, der BLS-Stiftung, GFM Historique, in Vereinen oder in Museen erhalten.': 'Classici di FFS, BLS, TPF e SOB che oggi non circolano più nel servizio quotidiano. Molti sono conservati da FFS Historic, dalla Fondazione BLS, da GFM Historique, da associazioni o nei musei.',
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
  bilder: ['Traverso come IR 46 Locarno–Zurigo presso Wassen (2025)', 'Traverso 105 a Kreuzlingen (2019)', 'Traverso 121 a Göschenen (2023)']
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
