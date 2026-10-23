/* RailBase – Fahrzeuge der Montreux Berner Oberland-Bahn (MOB). Gleiche Form wie fahrzeuge.js, mit bahn: 'mob'. */
'use strict';

/* =====================================================================
   MOB – Montreux–Zweisimmen–Lenk und GoldenPass Express
   Grundlage: Fahrzeugdossier von HCKD (22. Oktober 2026), geprüft mit der
   Fahrzeugliste und den Baureihen-Artikeln der Wikipedia, der MOB,
   Stadler und der Museumsbahn Blonay–Chamby.
   Korrigiert und ergänzt: Ge 4/4 8001–8004 von 1994/95 mit 2000 kW;
   GDe 4/4 6001 und 6004 im Dezember 2024 abgebrochen; ABDe 8/8 4002 und
   4003 abgebrochen, 4001 und 4004 in Lenk abgestellt; von den gekauften
   CJ-Triebwagen wurden vier (652–655) im Dezember 2025 überführt;
   neue Loks heissen Ge 4/4 8501–8504 und Gem 4/4 8601–8602.
   Nicht aufgenommen: Fahrzeuge der MVR (eigene Bahn), Rangiertraktoren
   ohne belegten heutigen Bestand.
   ===================================================================== */
const MOB_BLAU = '#1D3E7A', MOB_GOLD = '#C49A3C', MOB_CREME = '#EDE3CC', MOB_WEISS = '#EEEEEE', MOB_BRAUN = '#6B4A2E', MOB_DUNKEL = '#1E2F5C';
const MOB_Q = 'Dossier HCKD «Fahrzeuge und Strecken der MOB», Oktober 2026';
ZUEGE.push(
  // ---------- Personenverkehr ----------
  { id: 'mob-alpina', kat: 'personenverkehr', name: 'Be 4/4 und ABe 4/4', beiname: 'ALPINA', typ: 'Moderne Stadler-Triebwagen, meist als Paar unterwegs', bahn: 'mob', vorlaeufig: false,
    text: ['Die ALPINA sind die modernen Triebwagen der MOB. Stadler lieferte 2016 je vier Be 4/4 und ABe 4/4, die meist als Paar fahren und weitere Wagen ziehen können.', 'Sie gehören zur selben Fahrzeugfamilie wie Triebwagen der CJ, der TPC und von transN.'],
    kennzahlen: [['8', 'Triebwagen (4 Paare)'], ['1020 kW', 'Leistung je Triebwagen'], ['100 km/h', 'Höchstgeschwindigkeit'], ['2016', 'im Einsatz']],
    daten: { 'Bauart': 'Elektrische Niederflur-Triebwagen mit 4 Achsen', 'Hersteller': 'Stadler', 'Betreiber': 'MOB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '900 V Gleichstrom', 'Achsfolge': "Bo'Bo'", 'Fahrzeugnummern': 'Be 4/4 9201–9204, ABe 4/4 9301–9304', 'Länge': '20,46 m je Triebwagen', 'Leistung': '1020 kW dauernd am Rad je Triebwagen', 'Höchstgeschwindigkeit': '100 km/h', 'Sitzplätze': '18 in der 1., 63 in der 2. Klasse (je Paar, laut Wikipedia)', 'Anzahl': '8 Triebwagen', 'In Betrieb seit': '2016' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Achsfolge', 'Fahrzeugnummern', 'Länge', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Länge und Leistung nach einem Fahrzeugporträt (Passiontrain), Sitzplätze nach Wikipedia. Ein Paar sind zwei Triebwagen; die acht Fahrzeuge sind nicht acht Züge. Die MOB-Unterlagen nennen historisch 900 V, neuere 960 V.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler entwickelte die Triebwagen gemeinsam für mehrere Westschweizer Meterspurbahnen. Die MOB erhielt 2016 die Be 4/4 9201–9204 (2. Klasse) und die ABe 4/4 9301–9304 (1. und 2. Klasse). Einige tragen Namen, etwa 9301 «Montbovon», 9302 «Château-d’Œx» und 9303 «Lenk».'] },
      { titel: 'Einsatz und Technik', p: ['Die ALPINA fahren auf der Hauptstrecke Montreux–Zweisimmen in Regionalzügen und ziehen auch Panoramawagen, bis zu neun Wagen. Sie lassen sich mit anderen MOB-Fahrzeugen vielfach steuern.', 'Für den GoldenPass Express waren sie ursprünglich vorgesehen; dort ziehen aber Ge 4/4-Loks die Wagen. Die Triebwagen sind leicht, was bei Glätte die Kraftübertragung auf die Schienen erschwert.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Niederflureinstieg (480 mm) mit Klapptritten für den Winter', '1. und 2. Klasse im ABe, 2. Klasse im Be', 'Fahrgastinformation und Mehrzweckbereich', 'Die Ausstattung des ganzen Zugs hängt von den angehängten Wagen ab'] }
    ],
    quellen: ['Wikipedia – Stadler Westschweizer Meterspurzüge', 'Wikipedia – Liste der Fahrzeuge der Montreux-Berner Oberland-Bahn', 'Passiontrain – MOB Be 4/4 9200', 'MOB – Geschäftsbericht 2016', MOB_Q],
    art: { typ: 'triebzug', nase: 'mittel', farbe: MOB_DUNKEL, akzent: MOB_GOLD, tuer: MOB_BLAU, panto: true },
    bilder: [
      { src: 'bilder/mob-alpina-c2.jpg', titel: 'ABe 4/4 9303 in Zweisimmen (2023)', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:L02_566_Bf_Zweisimmen,_ABe_4-4_9303.jpg' },
      { src: 'bilder/mob-alpina-c3.jpg', titel: 'Im ABe 4/4 9303 (2023)', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:L02_569e_Bf_Zweisimmen,_ABe_4-4_9303,_Innenraum.jpg' },
      { src: 'bilder/mob-alpina-c1.jpg', titel: 'Wappen von Château-d’Œx am ALPINA 9302 (2022)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Alpina_20220802E212_9302W.jpg' }
    ] },
  { id: 'mob-be44-5000', kat: 'personenverkehr', name: 'Be 4/4', beiname: '5001–5004', typ: 'Regional-Pendelzüge vor allem im Simmental', bahn: 'mob', vorlaeufig: false,
    text: ['Die vier Be 4/4 der Serie 5000 bilden mit Steuerwagen kurze Pendelzüge. Sie fahren vor allem zwischen Zweisimmen und Lenk sowie bis Gstaad.', 'Sie sind am Ende ihrer Nutzungszeit; gebrauchte Triebwagen der CJ sollen sie ablösen.'],
    kennzahlen: [['4', 'Triebwagen'], ['1976', 'erste zwei'], ['1979', 'zwei weitere'], ['2026', 'Nachfolger geplant']],
    daten: { 'Bauart': 'Elektrischer Triebwagen mit Steuerwagen', 'Hersteller': 'SIG, SAAS', 'Betreiber': 'MOB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '900 V Gleichstrom', 'Fahrzeugnummern': 'Be 4/4 5001–5004; Steuerwagen ABt 341–344 und Bt 241–244', 'Anzahl': '4 Pendelzüge', 'In Betrieb seit': '1976' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Nach Wikipedia (Fahrzeugliste der MOB) und dem MOB-Geschäftsbericht 2025. Die Kaufmenge der CJ-Triebwagen ist noch keine Zahl zugelassener MOB-Fahrzeuge.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SIG und SAAS lieferten 1976 und 1979 je zwei Triebwagen. Sie hatten zuerst einen Führerstand. Von 2004 bis 2009 wurden sie ohne Führerstand umgebaut und erhielten niederflurige Steuerwagen: ABt 341–344 und Bt 241–244. Ältere Steuerwagen waren die ABt 5301–5304.'] },
      { titel: 'Einsatz und Technik', p: ['Die Pendel fahren in der Reihe ABt – Be – Bt vor allem zwischen Zweisimmen und Lenk im Simmental und bis Gstaad.', 'Laut Geschäftsbericht 2025 sind sie am Ende ihrer Nutzungszeit. Die MOB kaufte im November 2025 gebrauchte vierachsige Triebwagen der Chemins de fer du Jura (CJ); vier davon (652–655) wurden im Dezember 2025 überführt. Sie werden an Spannung, Kupplungen und Fahrgastinformation angepasst; die erste Inbetriebnahme war für Ende 2026 geplant.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Niederflurige Steuerwagen ABt und Bt', '1. und 2. Klasse im ABt', 'Gepäck- und Mehrzweckbereich', 'Die Ausstattung gilt für den ganzen Pendelzug'] }
    ],
    quellen: ['Wikipedia – Liste der Fahrzeuge der Montreux-Berner Oberland-Bahn', 'Wikipedia – Stadler Westschweizer Meterspurzüge', 'MOB – Geschäftsbericht 2025', MOB_Q],
    art: { typ: 'triebzug', nase: 'kurz', farbe: MOB_BLAU, akzent: MOB_CREME, tuer: MOB_DUNKEL, panto: true },
    bilder: [
      { src: 'bilder/mob-be44-5000-c1.jpg', titel: 'Bt 242, Be 4/4 5002 und ABt 342 in Schönried (2022)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Sch%C3%B6nried_20220731E512_242-5002-342.jpg' },
      { src: 'bilder/mob-be44-5000-c2.jpg', titel: 'Steuerwagen ABt 343 in St. Stephan (2023)', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:L02_469_Bf_St._Stephan,_ABt_343.jpg' },
      { src: 'bilder/mob-be44-5000-c3.jpg', titel: 'Im Be 4/4 5003 (2023)', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:L02_683_Be_5003,_Fahrgastraum.jpg' }
    ] },
  { id: 'mob-ge44-8000', kat: 'personenverkehr', name: 'Ge 4/4', beiname: '8001–8004', typ: 'Elektrolok für den GoldenPass Express', bahn: 'mob', vorlaeufig: false,
    text: ['Die Ge 4/4 der Serie 8000 ziehen heute den GoldenPass Express auf der Meterspur zwischen Montreux und Zweisimmen. In Zweisimmen bleibt die Lok auf ihrem Netz; die Wagen wechseln die Spurweite.', 'Die 8003 wurde 2019 an die RhB verkauft.'],
    kennzahlen: [['4', 'Loks gebaut'], ['3', 'bei der MOB'], ['2000 kW', 'Leistung'], ['1995', 'in Betrieb']],
    daten: { 'Bauart': 'Elektrische Lok mit 4 Achsen', 'Hersteller': 'SLM, ABB', 'Betreiber': 'MOB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '900 V Gleichstrom', 'Achsfolge': "Bo'Bo'", 'Fahrzeugnummern': '8001–8004 (8003 seit 2019 bei der RhB)', 'Leistung': '2000 kW', 'Höchstgeschwindigkeit': '120 km/h (technisch)', 'Anzahl': '3 (von 4)', 'In Betrieb seit': '1995' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Achsfolge', 'Fahrzeugnummern', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Nach Wikipedia; als Baujahr nennt der Artikel 1994, die Fahrzeugliste 1995. Die Loks sind eng verwandt mit den RhB Ge 4/4 III, haben aber eine Ausrüstung für Gleichstrom. Die RhB baute die ehemalige 8003 zur Ge 4/4 III 653 um.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SLM und ABB bauten die vier Loks 1994/95. Sie ähneln den Ge 4/4 III der RhB und der Ge 4/4 der BAM. Die 8003 ging 2019 an die RhB und fährt dort als 653 «St. Moritz».'] },
      { titel: 'Einsatz und Technik', p: ['Die Loks ziehen Personenzüge und seit Dezember 2022 den GoldenPass Express zwischen Montreux und Zweisimmen. Von 2017 bis 2019 erhielten sie automatische Schwab-Kupplungen; seit 2020 können sie mit passenden Wagen und Triebwagen vielfach gesteuert werden.', 'Die MOB hat 2024 vier neue Loks der Serie 8500 bestellt, die sie ersetzen sollen.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Zwei Führerstände, kein Fahrgastraum', 'Automatische Schwab-Kupplung', 'Steuerung vom Steuerwagen des GoldenPass Express aus'] }
    ],
    quellen: ['Wikipedia – MOB Ge 4/4 8001–8004', 'RhB – Geschäftsbericht 2019', 'Eisenbahn Amateur 10/2022 – GoldenPass Express (Stephan Frei)', MOB_Q],
    art: { typ: 'lok', farbe: MOB_DUNKEL, akzent: MOB_GOLD, panto: true },
    bilder: [
      { src: 'bilder/mob-ge44-8000-c1.jpg', titel: 'Ge 4/4 8002 in Zweisimmen (2023)', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:L02_506_Bf_Zweisimmen,_Ge_4-4_8002.jpg' },
      { src: 'bilder/mob-ge44-8000-c2.jpg', titel: 'Ge 4/4 8001 in Montreux (2024)', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:L03_646_Bf_Montreux_MOB,_Ge_4-4_8001.jpg' },
      { src: 'bilder/mob-ge44-8000-c3.jpg', titel: 'Ge 4/4 8004 in Zweisimmen (1995)', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:07_290_Bf_Zweisimmen,_Ge_4-4_8004.jpg' }
    ] },
  { id: 'mob-gde44', kat: 'personenverkehr', name: 'GDe 4/4', beiname: '6001–6006', typ: 'Elektrolok mit Gepäckraum für die Panoramazüge', bahn: 'mob', vorlaeufig: false,
    text: ['Die GDe 4/4 von 1983 sind Loks mit eigenem Gepäckraum. Sie ziehen die Panoramazüge über die steilen Rampen oberhalb von Montreux.', 'Am 3. November 1983 erreichte die 6003 zwischen Zweisimmen und Lenk 110 km/h – ein Rekord für Meterspur in Europa.'],
    kennzahlen: [['6', 'Loks (4 + 2 ex GFM)'], ['100 km/h', 'Höchstgeschwindigkeit'], ['50 t', 'Gewicht'], ['1983', 'gebaut']],
    daten: { 'Bauart': 'Elektrische Lok mit Gepäckraum', 'Hersteller': 'SLM, BBC', 'Betreiber': 'MOB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '900 V Gleichstrom', 'Achsfolge': "Bo'Bo'", 'Fahrzeugnummern': '6001–6006 (6005, 6006 ex GFM)', 'Länge': 'rund 16,4 m', 'Gewicht': '50 t', 'Höchstgeschwindigkeit': '100 km/h', 'Anzahl': '6 gebaut; 6001 und 6004 im Dezember 2024 abgebrochen', 'In Betrieb seit': '1983' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Achsfolge', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Nach Wikipedia und dem Dossier. Für Leistung und Nutzlast nennen die öffentlichen Quellen verschiedene Bezugszustände; sie sind darum nicht angegeben. Den Kauf der zwei GFM-Loks datiert Wikipedia auf 2007 oder 2008.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SLM und BBC bauten 1983 sechs Loks: vier für die MOB und zwei für die GFM in Freiburg. Die MOB übernahm die beiden GFM-Loks 2007/08 als 6005 und 6006.', 'Gefordert war, einen 110 t schweren Zug mit 40 km/h über 70 Promille Steigung zu ziehen.'] },
      { titel: 'Einsatz und Technik', p: ['Die GDe 4/4 zogen den Panoramic Express und durchgehende Züge, teils mit Steuerwagen, und wurden auch für Güter- und Dienstzüge eingesetzt. Eine Lok zieht saisonal den Schokoladenzug.', 'Jede Achse hat einen eigenen Motor; die Lok bremst elektrisch und speist dabei Strom zurück. Die 6001 und 6004 wurden im Dezember 2024 abgebrochen.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Gepäckabteil im Lokkasten', 'Zwei Führerstände', 'Chopper-Steuerung und Nutzbremse'] }
    ],
    quellen: ['Wikipedia – MOB GDe 4/4', 'Wikipedia – Liste der Fahrzeuge der Montreux-Berner Oberland-Bahn', 'Rail-info – GDe 4/4', MOB_Q],
    art: { typ: 'lok', farbe: MOB_GOLD, akzent: MOB_WEISS, panto: true },
    bilder: [
      { src: 'bilder/mob-gde44-c1.jpg', titel: 'GDe 4/4 6005 in Montreux (2014)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Gepacktriebwagen_SLM_GDe_4-4_Nr._6005_in_Montreux.jpg' },
      { src: 'bilder/mob-gde44-c2.jpg', titel: 'GDe 4/4 6003 in Schönried (2022)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Sch%C3%B6nried_20220802E239_6003.jpg' },
      { src: 'bilder/mob-gde44-c3.jpg', titel: 'GDe 4/4 bei Rougemont (1984)', foto: 'Peter Alder', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:Swiss_Rail_MOB_GDe_4_4_Golden_mountain.jpg' }
    ] },
  { id: 'mob-ge44-8500', kat: 'personenverkehr', name: 'Ge 4/4', beiname: '8501–8504', typ: 'Neue Elektroloks für den GoldenPass Express (bestellt)', bahn: 'mob', vorlaeufig: false,
    text: ['Für den GoldenPass Express hat die MOB im Oktober 2024 bei Stadler vier neue Elektroloks bestellt. Sie sollen die Ge 4/4 der Serie 8000 ersetzen.', 'Zur gleichen Bestellung gehören zwei Hybridloks für den Baudienst.'],
    kennzahlen: [['4', 'Loks bestellt'], ['3 MW', 'Leistung'], ['100 km/h', 'Höchstgeschwindigkeit'], ['2024', 'bestellt']],
    daten: { 'Bauart': 'Elektrische Lok mit 4 Achsen', 'Hersteller': 'Stadler', 'Betreiber': 'MOB', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '8501–8504 (laut Wikipedia)', 'Länge': 'rund 17 m', 'Leistung': '3000 kW', 'Höchstgeschwindigkeit': '100 km/h', 'Anzahl': '4 bestellt' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl'],
    specNote: 'Nach der Stadler-Medienmitteilung vom 14. Oktober 2024 und dem MOB-Geschäftsbericht 2025. Liefertermine und Betriebsnummern sind noch Planung.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler und die MOB unterzeichneten am 15. Oktober 2024 den Vertrag über vier Elektroloks und zwei hybride Baudienstloks. Die Finanzunterlagen der MOB führen die Elektroloks als Serie 8500.'] },
      { titel: 'Einsatz und Technik', p: ['Die neuen Loks sollen den GoldenPass Express ziehen und schieben und ältere Loks ersetzen. Aus der Bestellung folgt noch kein abgeschlossener Liefer- oder Zulassungsstand.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Vier angetriebene Achsen', 'Rund 17 m lang', 'Kein Fahrgastraum'] }
    ],
    quellen: ['Stadler – Medienmitteilung «MOB bestellt sechs Lokomotiven», Oktober 2024', 'MOB – Geschäftsbericht 2025', 'Wikipedia – Liste der Fahrzeuge der Montreux-Berner Oberland-Bahn', MOB_Q],
    art: { typ: 'lok', farbe: MOB_DUNKEL, akzent: MOB_GOLD, panto: true },
    bilder: [] },
  { id: 'mob-gpx', kat: 'personenverkehr', name: 'GoldenPass Express', beiname: 'Spurwechselwagen', typ: 'Wagen mit verstellbarer Spurweite für Montreux–Interlaken', bahn: 'mob', vorlaeufig: false,
    text: ['Der GoldenPass Express fährt seit Dezember 2022 ohne Umsteigen von Montreux nach Interlaken. In Zweisimmen wechseln seine Wagen von Meterspur auf Normalspur.', 'Auf der MOB zieht eine Ge 4/4, auf der BLS eine Normalspurlok.'],
    kennzahlen: [['23', 'Wagen'], ['1000/1435', 'mm Spurweite'], ['2022', 'in Betrieb'], ['Prestige', 'Klasse']],
    daten: { 'Bauart': 'Personenwagen mit umspurbaren Drehgestellen', 'Hersteller': 'Stadler (Wagen), Alstom (Drehgestellsystem)', 'Betreiber': 'MOB, mit der BLS', 'Spurweite': 'Meterspur und Normalspur (umspurbar)', 'Antrieb': 'Kein eigener Antrieb', 'Fahrzeugnummern': 'Ast 181–184, ABst 381–384, As 191–194, Bs 281–284, Bs NF 271–274, Bsi 291–293', 'Länge': '18,8–19,4 m je Wagen', 'Gewicht': '25,3–26,5 t je Wagen', 'Anzahl': '23 Wagen', 'In Betrieb seit': '2022' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Antrieb', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Nach dem Bericht von Stephan Frei (Eisenbahn Amateur 10/2022) und der MOB. Die Sitzplätze sind ein Stand von 2022 und können heute anders sein.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler baute die 23 Wagen; die Drehgestelle mit veränderlicher Spurweite entstanden im mit Alstom entwickelten System. Das Design der Zugköpfe stammt von Pininfarina, der Innenraum von Innova Design. Die Wagen gehören der MOB.'],
        tabelle: { kopf: ['Wagen', 'Nummern', 'Funktion', 'Plätze (2022)'], zeilen: [
          ['Ast', '181–184', 'Steuerwagen, Prestige und 1. Klasse', '9 + 20'], ['ABst', '381–384', 'Steuerwagen, Prestige und 2. Klasse', '9 + 25'],
          ['As', '191–194', '1. Klasse mit Catering', '28'], ['Bs', '281–284', '2. Klasse', '54'], ['Bs NF', '271–274', 'Niederflurwagen 2. Klasse', '39'],
          ['Bsi', '291–293', 'Übergangswagen zur Normalspurlok', '54']] } },
      { titel: 'Einsatz und Technik', p: ['In Zweisimmen fährt der Zug durch die Umspuranlage: Die Räder werden auf die andere Spurweite verschoben und der Wagenboden an die Perronhöhe angepasst. Danach übernimmt eine BLS-Lok die Weiterfahrt über Spiez nach Interlaken.', 'Der Übergangswagen Bsi verbindet die Wagen mit der Normalspurlok, deren Kupplung und Steuerung anders ist.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Prestige-Klasse mit drehbaren, verstellbaren Sitzen', 'Klimaanlage, USB- und 230-V-Steckdosen am Platz', 'Niederflurwagen; laut MOB 2 Rollstuhlplätze pro Zug', 'Kein eigener Antrieb'] }
    ],
    quellen: ['Eisenbahn Amateur 10/2022 – GoldenPass Express (Stephan Frei)', 'GoldenPass Express – Gestaltung und Umspuranlage', 'MOB – GoldenPass Express und Behindertengleichstellung', 'Wikipedia – Liste der Fahrzeuge der Montreux-Berner Oberland-Bahn', MOB_Q],
    art: { typ: 'wagen', farbe: MOB_DUNKEL, akzent: MOB_GOLD },
    bilder: [
      { src: 'bilder/mob-gpx-c1.jpg', titel: 'GoldenPass Express mit Ge 4/4 8004 (2024)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20240731E580_183-194-273-283-383-8004.jpg' },
      { src: 'bilder/mob-gpx-c2.jpg', titel: 'Steuerwagen Ast 183 in Zweisimmen (2023)', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:L02_516_Bf_Zweisimmen,_At_96_85_8300_183.jpg' },
      { src: 'bilder/mob-gpx-c3.jpg', titel: 'Niederflurwagen Bs NF 272 (2024)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20240731E479_272.jpg' }
    ] },
  { id: 'mob-panoramic', kat: 'personenverkehr', name: 'Panoramawagen', beiname: 'GoldenPass Panoramic', typ: 'Panorama- und Steuerwagen mit grossen Fenstern', bahn: 'mob', vorlaeufig: false,
    text: ['Mit den Panoramawagen wurde die MOB ab 1976 bekannt. Grosse Fenster bis ins Dach öffnen den Blick auf Genfersee, Pays-d’Enhaut und Saanenland.', 'In einigen Steuerwagen sitzen die Fahrgäste vorne und der Lokführer darüber – so fährt man in der ersten Reihe.'],
    kennzahlen: [['1976', 'erste Panoramawagen'], ['1993', 'Crystal-Steuerwagen'], ['1. und 2.', 'Klasse'], ['Chernex', 'eigene Werkstatt']],
    daten: { 'Bauart': 'Panorama- und Steuerwagen', 'Hersteller': 'R+J, MOB-Werkstatt Chernex, Breda', 'Betreiber': 'MOB', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Kein eigener Antrieb', 'Fahrzeugnummern': 'u. a. As 110–119, Ast 116–117, Ast 151–152, Bs 220–238', 'In Betrieb seit': '1976' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Antrieb', 'Fahrzeugnummern', 'In Betrieb seit'],
    specNote: 'Nach Wikipedia (Fahrzeugliste der MOB) und x-rail. Einzelne Wagen wurden mehrfach umgezeichnet oder verkauft.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die ersten Panoramawagen entstanden ab 1976 bei R+J und in der MOB-Werkstatt Chernex. Breda lieferte 1993 die Crystal-Steuerwagen Ast 151 und 152.', '2023 verkaufte die MOB einige ältere Wagen (As 110, Bs 220 und 222–225) an Arterail in Frankreich; der Bs 227 wurde 2015 abgebrochen.'] },
      { titel: 'Einsatz und Technik', p: ['Die Wagen fahren im GoldenPass Panoramic zwischen Montreux und Zweisimmen, meist hinter einer GDe 4/4 oder einem ALPINA. Auch Angebote wie der Schokoladenzug nutzen diese Wagen.', 'Bei den Steuerwagen Ast 116 und 117 (Superpanoramic) sowie Ast 151 und 152 (Crystal) sitzen die Fahrgäste vor dem erhöhten Führerstand.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Grosse Fenster bis ins Dach', 'Aussichtsplätze vor dem Führerstand in den Steuerwagen', 'Niederflurwagen Bs 231–238', 'Kein eigener Antrieb'] }
    ],
    quellen: ['Wikipedia – Liste der Fahrzeuge der Montreux-Berner Oberland-Bahn', 'x-rail – MOB-Personenwagen', 'MOB – GoldenPass Panoramic', MOB_Q],
    art: { typ: 'wagen', farbe: MOB_WEISS, akzent: MOB_GOLD },
    bilder: [
      { src: 'bilder/mob-panoramic-c1.jpg', titel: 'Steuerwagen Ast 151 in Montreux (2014)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Ast_151_Steuerwagen_des_Golden_Pass_Panoramic_Express_(Montreux,_2014).jpg' },
      { src: 'bilder/mob-panoramic-c2.jpg', titel: 'Panoramawagen As 118 in Gstaad (2016)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:MOB_As118_Gstaad_2016-01-30.jpeg' },
      { src: 'bilder/mob-panoramic-c3.jpg', titel: 'Panoramawagen Bs 236 (2014)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:MOB-Bs236-GoldenPass-2014.jpg' }
    ] },
  { id: 'mob-belle-epoque', kat: 'personenverkehr', name: 'Belle-Époque-Wagen', beiname: 'GoldenPass Belle Époque', typ: 'Wagen im Stil um 1900 für Ausflugszüge', bahn: 'mob', vorlaeufig: false,
    text: ['Die Belle-Époque-Wagen sehen aus wie Wagen um 1900. Gebaut wurden sie 2004 und 2005 in der MOB-Werkstatt auf älteren Fahrzeugen.', 'Echte alte Salonwagen sind die Ars 101 und As 102.'],
    kennzahlen: [['4', 'Umbauwagen'], ['2004', 'Umbau'], ['1. und 2.', 'Klasse'], ['Bar', 'im Brs 201']],
    daten: { 'Bauart': 'Personenwagen im historischen Stil', 'Hersteller': 'MOB-Werkstatt Chernex (Umbau)', 'Betreiber': 'MOB', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Kein eigener Antrieb', 'Fahrzeugnummern': 'As 103, As 107, Brs 201, Bs 202; Salonwagen Ars 101 und As 102', 'In Betrieb seit': '2004' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Antrieb', 'Fahrzeugnummern', 'In Betrieb seit'],
    specNote: 'Nach der MOB und x-rail. Die Belle-Époque-Wagen sind laut MOB nicht für Rollstuhl oder Rollator zugänglich.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die MOB-Werkstatt Chernex baute 2004 und 2005 vier Wagen auf älteren Fahrgestellen mit neuen Aufbauten und Innenräumen im historischen Stil: die As 103 und As 107 (1. Klasse), den Brs 201 mit Bar und den Bs 202 (2. Klasse).', 'Davon zu trennen sind die älteren Salonwagen Ars 101 und As 102 mit eigener Geschichte.'] },
      { titel: 'Einsatz und Technik', p: ['Die Wagen fahren im GoldenPass Belle Époque zwischen Montreux und Zweisimmen und in buchbaren Angeboten. Menü und Bewirtung gelten für das gebuchte Angebot.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Holz und Messing im Stil um 1900', 'Bar im Brs 201', 'Nicht zugänglich für Rollstuhl oder Rollator', 'Kein eigener Antrieb'] }
    ],
    quellen: ['MOB – Zugangsinformationen nach Linien und Zügen', 'x-rail – MOB-Personenwagen', 'MOB – Unternehmensgeschichte', MOB_Q],
    art: { typ: 'wagen', farbe: MOB_DUNKEL, akzent: '#D8B66A' },
    bilder: [
      { src: 'bilder/mob-belle-epoque-c1.jpg', titel: 'Belle-Époque-Wagen Brs 201 (2012)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:MOB_GP-Classic_Brs201.jpg' },
      { src: 'bilder/mob-belle-epoque-c2.jpg', titel: 'Belle-Époque-Wagen Bs 202 (2012)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:MOB_GP-Classic_Bs202.jpg' }
    ] },

  // ---------- Infrastruktur ----------
  { id: 'mob-gem22', kat: 'infrastruktur', name: 'Gem 2/2', beiname: '2502–2504', typ: 'Zweikraft-Baudienstlok von Stadler', bahn: 'mob', vorlaeufig: false,
    text: ['Die drei Gem 2/2 fahren mit Strom aus der Fahrleitung oder mit Diesel. Sie ziehen Bau- und Materialzüge auf der MOB.', 'Eine vierte, die HGem 2/2 2501, hat ein Zahnrad und arbeitet bei der MVR auf der Strecke nach Les Pléiades.'],
    kennzahlen: [['3', 'Loks bei der MOB'], ['600 kW', 'elektrisch'], ['400 kW', 'Diesel'], ['2016', 'geliefert']],
    daten: { 'Bauart': 'Zweikraftlok (elektrisch und Diesel), 2 Achsen', 'Hersteller': 'Stadler', 'Betreiber': 'MOB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '900 V Gleichstrom und Diesel', 'Fahrzeugnummern': '2502–2504; HGem 2/2 2501 bei der MVR', 'Leistung': '600 kW elektrisch, 400 kW mit Diesel', 'Anzahl': '3 (dazu 2501)', 'In Betrieb seit': '2016' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Leistung', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Leistung nach dem MOB-Geschäftsbericht 2016. Die Anhängelast hängt stark von der Steigung ab und wird darum nicht pauschal angegeben.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler lieferte die Loks 2016 als Teil einer gemeinsamen Bestellung mehrerer Bahnen. Drei sind für die MOB, die 2501 mit Zahnrad für die MVR-Strecke nach Les Pléiades.'] },
      { titel: 'Einsatz und Technik', p: ['Die Loks ziehen Bauzüge und Materialtransporte und helfen beim Unterhalt. Mit Diesel fahren sie auch, wenn die Fahrleitung abgeschaltet ist. Sie lassen sich fernsteuern und gekuppelt einsetzen.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Stromabnehmer und Dieselmotor', 'Fernsteuerung', 'Kein Zahnrad (ausser 2501)'] }
    ],
    quellen: ['MOB – Geschäftsbericht 2016', 'Wikipedia – Liste der Fahrzeuge der Montreux-Berner Oberland-Bahn', MOB_Q],
    art: { typ: 'rangier', klein: true, farbe: MOB_BLAU, panto: true },
    bilder: [
      { src: 'bilder/mob-gem22-c1.jpg', titel: 'Gem 2/2 2504 in Montbovon (2022)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Montbovon_20220803E346_2504.jpg' },
      { src: 'bilder/mob-gem22-c2.jpg', titel: 'Gem 2/2 2503 in Saanen (2022)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Saanen_20220801E039_2503.jpg' }
    ] },
  { id: 'mob-gm44', kat: 'infrastruktur', name: 'Gm 4/4', beiname: '2003 und 2004', typ: 'Diesellok für schwere Bauzüge', bahn: 'mob', vorlaeufig: false,
    text: ['Die beiden Gm 4/4 sind Dieselloks aus Frankreich. Sie ziehen schwere Bauzüge und fuhren gelegentlich auch im Personenverkehr.', 'Trotz ähnlicher Nummer haben sie nichts mit den alten Gepäckloks 2001 und 2002 zu tun.'],
    kennzahlen: [['2', 'Loks'], ['1976', '2003 gebaut'], ['1982', '2004 gebaut'], ['80 km/h', 'Höchstgeschwindigkeit']],
    daten: { 'Bauart': 'Diesellok mit 4 Achsen', 'Hersteller': 'Moyse (2003), CFD (2004)', 'Betreiber': 'MOB', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Diesel', 'Achsfolge': "B'B'", 'Fahrzeugnummern': '2003, 2004', 'Höchstgeschwindigkeit': '80 km/h', 'Anzahl': '2', 'In Betrieb seit': '1976' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Antrieb', 'Achsfolge', 'Fahrzeugnummern', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Nach Wikipedia (Fahrzeugliste der MOB) und dem Dossier. Leistung und Gewicht nennen die geprüften Quellen nicht.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die 2003 baute Moyse 1976, die 2004 CFD 1982, beide in Frankreich.'] },
      { titel: 'Einsatz und Technik', p: ['Die Loks ziehen schwere Bau- und Arbeitszüge, auch wenn die Fahrleitung abgeschaltet ist. Die MOB plant neue Infrastrukturtraktoren; der Geschäftsbericht 2025 nennt dafür Mitte 2028 als Ziel.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Dieselantrieb, unabhängig von der Fahrleitung', 'Zwei Drehgestelle', 'Für Bauzüge ausgelegt'] }
    ],
    quellen: ['Wikipedia – Liste der Fahrzeuge der Montreux-Berner Oberland-Bahn', 'Swiss Express – MOB-Fahrzeugbestand 1997', MOB_Q],
    art: { typ: 'haube', farbe: ORA, akzent: '#3A4047' },
    bilder: [] },
  { id: 'mob-gem44', kat: 'infrastruktur', name: 'Gem 4/4', beiname: '8601–8602', typ: 'Neue Zweikraft-Baudienstloks (bestellt)', bahn: 'mob', vorlaeufig: false,
    text: ['Zusammen mit den neuen GoldenPass-Loks bestellte die MOB 2024 zwei hybride Loks für den Baudienst. Sie sollen Bau- und Dienstzüge auch ohne Fahrleitung ziehen.', 'Sie sind rund 17 m lang und haben vier angetriebene Achsen.'],
    kennzahlen: [['2', 'Loks bestellt'], ['17 m', 'Länge'], ['100 km/h', 'Höchstgeschwindigkeit'], ['2024', 'bestellt']],
    daten: { 'Bauart': 'Zweikraftlok mit 4 Achsen', 'Hersteller': 'Stadler', 'Betreiber': 'MOB', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '8601–8602 (laut Wikipedia)', 'Länge': 'rund 17 m', 'Höchstgeschwindigkeit': '100 km/h', 'Anzahl': '2 bestellt' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Höchstgeschwindigkeit', 'Anzahl'],
    specNote: 'Nach Stadler (Oktober 2024) und Wikipedia. Leistung je Betriebsart, Dieselmotor und Batterie sind noch nicht veröffentlicht; die 3 MW der Elektroloks gelten nicht für diese Loks.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler und die MOB vereinbarten im Oktober 2024 zwei hybride vierachsige Baudienstloks, verwandt mit den vier neuen Elektroloks der Serie 8500.'] },
      { titel: 'Einsatz und Technik', p: ['Die Loks sollen Bau- und Dienstzüge auf der ganzen MOB ziehen, auch auf Abschnitten ohne Strom. Ein Liefertermin ist noch nicht veröffentlicht.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Betrieb mit Fahrleitungsstrom', 'Zweite Energiequelle für Abschnitte ohne Fahrleitung', 'Vier angetriebene Achsen'] }
    ],
    quellen: ['Stadler – Medienmitteilung «MOB bestellt sechs Lokomotiven», Oktober 2024', 'Wikipedia – Liste der Fahrzeuge der Montreux-Berner Oberland-Bahn', MOB_Q],
    art: { typ: 'haube', farbe: YEL, akzent: MOB_BLAU },
    bilder: [] },

  // ---------- Dienst- und Spezialfahrzeuge ----------
  { id: 'mob-schnee', kat: 'dienst', name: 'Schneepflüge und Kranwagen', beiname: 'Zaugg und Nencki', typ: 'Fahrzeuge für Winterdienst und Bauunterhalt', bahn: 'mob', vorlaeufig: false,
    text: ['Für den Winter hat die MOB 2016 zwei neue Schneepflüge von Zaugg erhalten, dazu einen Kranwagen mit Ausrüstung von Nencki.', 'Ein Schneepflug schiebt den Schnee zur Seite; bewegt wird er von einer Lok oder einem Triebwagen.'],
    kennzahlen: [['2', 'Schneepflüge (2016)'], ['1', 'Kranwagen'], ['Zaugg', 'Hersteller Pflüge'], ['2016', 'beschafft']],
    daten: { 'Bauart': 'Schneepflüge und Kranwagen', 'Hersteller': 'Zaugg (Pflüge), Nencki (Kran)', 'Betreiber': 'MOB', 'Spurweite': 'Meterspur, 1000 mm', 'Anzahl': '2 Schneepflüge, 1 Kranwagen', 'In Betrieb seit': '2016' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Nach dem MOB-Geschäftsbericht 2016. Nummern, Gewichte und Lastdiagramme sind nicht veröffentlicht; eine grösste Kranlast wird darum nicht angegeben.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Laut Geschäftsbericht 2016 kamen zwei Adhäsions-Schneepflüge von Zaugg und ein Kranwagen mit Nencki-Ausrüstung zur MOB.'] },
      { titel: 'Einsatz und Technik', p: ['Die Schneepflüge halten im Winter die Strecke zwischen Montreux, Zweisimmen und Lenk offen. Der Kranwagen hebt Material bei Bau und Unterhalt. Bis etwa Mitte 2028 sollen zudem Plattformen mit Kran und Arbeitsbühne für Gleis- und Fahrleitungsarbeiten kommen.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Pflugschar zum seitlichen Räumen', 'Kran mit Abstützung', 'Arbeitsbreite und Kranlast je nach Gerät'] }
    ],
    quellen: ['MOB – Geschäftsbericht 2016', 'MOB – Geschäftsbericht 2025', MOB_Q],
    art: { typ: 'spezial', var: 'schnee', farbe: YEL, akzent: MOB_BLAU },
    bilder: [
      { src: 'bilder/mob-schnee-c1.jpg', titel: 'Schnellpflug der MOB vor einem Triebwagen bei Oeschseite (2017)', foto: 'Lantus', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:Schnellpflug_der_GoldenPass-Linie,_Oeschseite.jpg' }
    ] },

  // ---------- Historische Fahrzeuge ----------
  { id: 'mob-bcfe44', kat: 'historisch', name: 'BCFe 4/4', beiname: '11', typ: 'Elektrischer Triebwagen der ersten Generation von 1905 (historisch)', bahn: 'mob', vorlaeufig: false,
    text: ['Der BCFe 4/4 11 gehört zu den ersten elektrischen Triebwagen der MOB. Er stammt von 1905 und fährt heute bei der Museumsbahn Blonay–Chamby.', 'Er hatte Abteile der 2. und 3. Klasse und einen Gepäckraum.'],
    kennzahlen: [['1905', 'gebaut'], ['192 kW', 'Leistung'], ['50 km/h', 'Höchstgeschwindigkeit'], ['29 t', 'Gewicht']],
    daten: { 'Bauart': 'Elektrischer Personen- und Gepäcktriebwagen', 'Hersteller': 'SIG, Alioth', 'Betreiber': 'MOB, heute Museumsbahn Blonay–Chamby', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '850 V Gleichstrom (historisch)', 'Fahrzeugnummern': '11 (Serie 7–20)', 'Gewicht': '29,0 t', 'Leistung': '192 kW (4 × 48 kW)', 'Höchstgeschwindigkeit': '50 km/h', 'Sitzplätze': '12 in der 2., 16 in der 3. Klasse (historisch)', 'Erhalten': 'Blonay–Chamby, betriebsfähig', 'In Betrieb seit': '1905' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Nach dem Blatt der Museumsbahn Blonay–Chamby. Für die Übergabe an das Museum nennen die Quellen 1999 und 2000.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SIG und Alioth bauten den Triebwagen 1905 für die junge MOB. Er gehört zur Serie BCFe 4/4 7–20, mit der die MOB ihren elektrischen Betrieb aufbaute.'] },
      { titel: 'Einsatz und Technik', p: ['Der Wagen beförderte Fahrgäste und Gepäck auf der Bergstrecke ab Montreux. Um das Jahr 2000 kam er zur Museumsbahn Blonay–Chamby und wurde zum 100-Jahr-Jubiläum der MOB 2001 aufgearbeitet. Heute fährt er dort in Museumszügen.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Abteile der 2. und 3. Klasse (historisch)', 'Gepäckraum von 6 m² für 2 t', 'Vier Motoren zu je 48 kW'] }
    ],
    quellen: ['Museumsbahn Blonay–Chamby – BCFe 4/4 11', 'Wikipedia – Liste der Fahrzeuge der Montreux-Berner Oberland-Bahn', MOB_Q],
    art: { typ: 'triebzug', nase: 'kurz', farbe: '#A9B4BF', akzent: '#E8DCC8', tuer: MOB_DUNKEL, panto: true },
    bilder: [
      { src: 'bilder/mob-bcfe44-c1.jpg', titel: 'BCFe 4/4 11 in Chamby (2018)', foto: 'hrs51', lizenz: 'CC BY 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:4_11_erbaut_1905_in_Chamby.jpg' },
      { src: 'bilder/mob-bcfe44-c2.jpg', titel: 'BCFe 4/4 11 (2013)', foto: 'Lhasarabat', lizenz: 'Gemeinfrei', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:MOB_BCFe_44_11_Ansicht.jpg' }
    ] },
  { id: 'mob-fze66', kat: 'historisch', name: 'FZe 6/6', beiname: '2001 und 2002', typ: 'Gepäck- und Postlok von 1932 (historisch)', bahn: 'mob', vorlaeufig: false,
    text: ['Die FZe 6/6 waren bis 1968 die stärksten Fahrzeuge der MOB. Gebaut wurden sie 1932 für einen Luxuszug, der wegen der Wirtschaftskrise bald eingestellt wurde.', 'Die 2002 fährt heute bei der Museumsbahn Blonay–Chamby.'],
    kennzahlen: [['2', 'Loks'], ['738 kW', 'Leistung'], ['55 km/h', 'Höchstgeschwindigkeit'], ['1932', 'gebaut']],
    daten: { 'Bauart': 'Elektrischer Gepäck- und Posttriebwagen mit 3 Drehgestellen', 'Hersteller': 'SIG, BBC', 'Betreiber': 'MOB, heute Museumsbahn Blonay–Chamby', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '900 V Gleichstrom', 'Achsfolge': "Bo'Bo'Bo'", 'Fahrzeugnummern': '2001, 2002 (ab 1962 DZe 6/6)', 'Gewicht': '62,8 t', 'Leistung': '738 kW (6 × 123 kW)', 'Höchstgeschwindigkeit': '55 km/h', 'Anzahl': '2', 'Erhalten': '2002 (Blonay–Chamby, seit 2008)', 'In Betrieb seit': '1932' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Achsfolge', 'Fahrzeugnummern', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Nach dem Blatt der Museumsbahn Blonay–Chamby und Wikipedia. FZe und DZe sind zwei Bezeichnungen derselben Fahrzeuge, nicht zwei verschiedene Loks.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SIG und BBC bauten die beiden Fahrzeuge 1932 für den Golden Mountain Pullman Express von 1931. Der Luxuszug scheiterte an der Weltwirtschaftskrise; danach fuhren die Loks mit gewöhnlichen Personen- und Güterzügen.'] },
      { titel: 'Einsatz und Technik', p: ['Sie zogen oft schwere Güterzüge, etwa mit Baustoffen. 1962 wurden sie in DZe 6/6 umbenannt, 1977/79 für Rollbockzüge angepasst.', 'Die 2001 wurde 1988 abgestellt und 2007 abgebrochen. Die 2002 wurde 2002 ausgemustert, kam am 19. Juli 2008 zur Museumsbahn Blonay–Chamby und ist dort betriebsfähig.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Gepäck- und Postraum von 10,2 m² für 4 t', 'Sechs Motoren zu je 123 kW', 'Gelenkiger Aufbau auf drei Drehgestellen'] }
    ],
    quellen: ['Museumsbahn Blonay–Chamby – FZe 6/6 2002', 'Wikipedia – MOB FZe 6/6 2001–2002', MOB_Q],
    art: { typ: 'lok', farbe: MOB_DUNKEL, akzent: MOB_CREME, panto: true, achsen: 6 },
    bilder: [
      { src: 'bilder/mob-fze66-c1.jpg', titel: 'FZe 6/6 2002 in Chamby-Musée (2026)', foto: 'Vom Benutzer Christoph 2021 des Bimmelbahn-Forums für die Wikimedia zur Verfügung gestellt', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Blonay%E2%80%93Chamby_Museum_Railway_MOB_FZe_66_2002_in_Chamby-Mus%C3%A9e_2026.jpg' }
    ] },
  { id: 'mob-bde44-3000', kat: 'historisch', name: 'BDe 4/4', beiname: '3001–3006', typ: 'Leichttriebwagen von 1944 und 1946 (historisch)', bahn: 'mob', vorlaeufig: false,
    text: ['Die sechs BDe 4/4 der Serie 3000 prägten nach dem Zweiten Weltkrieg den Betrieb der MOB. Sie zogen auch ältere Wagen und Steuerwagen.', 'Die meisten sind abgebrochen; die 3002 ist noch vorhanden.'],
    kennzahlen: [['6', 'Triebwagen'], ['1944', 'erste vier'], ['1946', 'zwei weitere'], ['3002', 'vorhanden']],
    daten: { 'Bauart': 'Elektrischer Personen- und Gepäcktriebwagen', 'Hersteller': 'SIG, BBC', 'Betreiber': 'MOB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '900 V Gleichstrom', 'Fahrzeugnummern': '3001–3004 (1944), 3005–3006 (1946)', 'Anzahl': '6', 'Erhalten': '3002', 'In Betrieb seit': '1944' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Nach Wikipedia (Fahrzeugliste der MOB) und dem Dossier. Abbrüche: 3003 (1996), 3004 (2010), 3001 (2019), 3005 und 3006 (2024). Eine heutige Betriebsfähigkeit der 3002 ist nicht bestätigt.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SIG und BBC lieferten 1944 die 3001–3004 und 1946 die 3005 und 3006.'] },
      { titel: 'Einsatz und Technik', p: ['Die Leichttriebwagen fuhren Personen- und Gepäckzüge auf der ganzen MOB, oft mit älteren Wagen und Steuerwagen. Ab 1968 übernahmen die ABDe 8/8 einen Teil ihrer Aufgaben; später dienten sie im Dienst und als Reserve.', 'Für die 3002 nennt der Geschäftsbericht 2012 eine Teilrevision und Anpassungen am Führerstand.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Abteile für Fahrgäste und Gepäck', 'Zwei Führerstände', 'Erhalten: 3002'] }
    ],
    quellen: ['Wikipedia – Liste der Fahrzeuge der Montreux-Berner Oberland-Bahn', 'MOB – Geschäftsbericht 2012', 'Swiss Express – MOB-Fahrzeugbestand 1997', MOB_Q],
    art: { typ: 'triebzug', nase: 'kurz', farbe: MOB_BLAU, akzent: MOB_CREME, tuer: MOB_DUNKEL, panto: true },
    bilder: [
      { src: 'bilder/mob-bde44-3000-c1.jpg', titel: 'BDe 4/4 3002 in Zweisimmen (2014)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:BDe_4-4_Nr._3002_der_MOB_in_Zweisimmen_(2014).jpg' },
      { src: 'bilder/mob-bde44-3000-c2.jpg', titel: 'BDe 4/4 mit einem Güterzug (1984)', foto: 'Peter Alder', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:Swiss_Rail_MOB_BDe_4_4_Freight.jpg' }
    ] },
  { id: 'mob-abde88', kat: 'historisch', name: 'ABDe 8/8', beiname: '4001–4004', typ: 'Doppeltriebwagen von 1968 (historisch)', bahn: 'mob', vorlaeufig: false,
    text: ['Die vier ABDe 8/8 von 1968 waren lange das Rückgrat der MOB. Jede Einheit besteht aus zwei fest verbundenen Hälften mit zusammen acht angetriebenen Achsen.', 'Seit 2017 sind sie ausser Dienst; zwei stehen abgestellt in Lenk.'],
    kennzahlen: [['4', 'Doppeltriebwagen'], ['70 km/h', 'Höchstgeschwindigkeit'], ['86', 'Sitzplätze'], ['1968', 'in Betrieb']],
    daten: { 'Bauart': 'Elektrischer Doppeltriebwagen', 'Hersteller': 'SIG, BBC, SAAS', 'Betreiber': 'MOB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '900 V Gleichstrom', 'Fahrzeugnummern': '4001 «Suisse», 4002 «Vaud», 4003 «Bern», 4004 «Fribourg»', 'Höchstgeschwindigkeit': '70 km/h', 'Sitzplätze': '18 in der 1., 68 in der 2. Klasse', 'Anzahl': '4', 'Erhalten': '4001 und 4004 abgestellt in Lenk', 'In Betrieb seit': '1968' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Nach Wikipedia. Wikipedia nennt 840 V Gleichstrom, ältere Netzunterlagen 900 V. Abgestellt heisst nicht museal gesichert.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SIG, BBC und SAAS bauten die vier Einheiten 1968. Jede trägt ein Wappen: 4001 das Schweizer Wappen, 4002 Waadt, 4003 Bern und 4004 Freiburg.'] },
      { titel: 'Einsatz und Technik', p: ['Ab 1968 fuhren sie den grössten Teil des Verkehrs Montreux–Zweisimmen und ersetzten die BDe 4/4 der Serie 3000. Auf 73 Promille Steigung zogen sie bis zu fünf Wagen mit 80 t.', 'Nach dem Einzug der GDe 4/4 ab 1983 übernahmen sie kleinere Aufgaben. Am 2. und 3. September 2017 wurden sie offiziell verabschiedet. Die 4003 wurde 2018, die 4002 2021 abgebrochen; 4001 und 4004 stehen seit 2020 in Lenk.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['18 Plätze in der 1. und 68 in der 2. Klasse', 'Gepäckabteil', 'Zwei Hälften als feste Einheit'] }
    ],
    quellen: ['Wikipedia – MOB ABDe 8/8 4001–4004', 'Wikipedia – Liste der Fahrzeuge der Montreux-Berner Oberland-Bahn', MOB_Q],
    art: { typ: 'triebzug', nase: 'kurz', farbe: MOB_BLAU, akzent: MOB_CREME, tuer: MOB_DUNKEL, panto: true },
    bilder: [
      { src: 'bilder/mob-abde88-c1.jpg', titel: 'ABDe 8/8 4003 in Zweisimmen (2014)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:ABDe_8-8_4003_der_MOB_in_Zweisimmen_BE_(2014).jpg' },
      { src: 'bilder/mob-abde88-c2.jpg', titel: 'ABDe 8/8 4001 abgestellt in Lenk (2023)', foto: 'Lucsaretto', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Automotrice_MOB_4001_garee_a_Lenk.jpg' }
    ] },
  { id: 'mob-hist-wagen', kat: 'historisch', name: 'Historische Personenwagen', beiname: 'BC4 22 und B4 61', typ: 'Frühe Personenwagen der MOB bei Blonay–Chamby (historisch)', bahn: 'mob', vorlaeufig: false,
    text: ['Bei der Museumsbahn Blonay–Chamby sind zwei frühe Personenwagen der MOB erhalten: der BC4 22 von 1902 und der B4 61 von 1906.', 'Sie zeigen, wie man in den ersten Jahren der MOB reiste.'],
    kennzahlen: [['1902', 'BC4 22'], ['1906', 'B4 61'], ['48', 'Plätze im BC4 22'], ['SIG', 'Hersteller']],
    daten: { 'Bauart': 'Historische Personenwagen mit Drehgestellen', 'Hersteller': 'SIG Neuhausen', 'Betreiber': 'MOB, heute Museumsbahn Blonay–Chamby', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Kein eigener Antrieb', 'Fahrzeugnummern': 'BC4 22 (C 22), B4 61', 'Gewicht': '9,6 t (BC4 22), 11,7 t (B4 61)', 'Sitzplätze': '48 der 3. Klasse (BC4 22), 30 der 2. Klasse (B4 61)', 'Erhalten': 'Museumsbahn Blonay–Chamby', 'In Betrieb seit': '1902' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Antrieb', 'Fahrzeugnummern', 'Gewicht', 'Sitzplätze', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Nach den Blättern der Museumsbahn Blonay–Chamby. Der BC4 22 hat trotz seiner Mischklassen-Bezeichnung heute eine Einrichtung nur mit 3. Klasse; der B4 61 war laut Blatt in Revision.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SIG in Neuhausen baute 1902 den BC4 22 und 1906 den B4 61.'] },
      { titel: 'Einsatz und Technik', p: ['Die Wagen fuhren in den ersten Jahrzehnten auf der MOB, hinter frühen Triebwagen wie dem BCFe 4/4 11. Heute gehören sie zur Sammlung der Museumsbahn Blonay–Chamby.', 'Die 3. Klasse ist ein historisches Merkmal, kein heutiges Angebot.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['BC4 22: 48 Plätze der 3. Klasse', 'B4 61: 30 Plätze der 2. Klasse', 'Kein eigener Antrieb'] }
    ],
    quellen: ['Museumsbahn Blonay–Chamby – BC4 22 und B4 61', MOB_Q],
    art: { typ: 'wagen', farbe: '#E8E4D8', akzent: MOB_BRAUN },
    bilder: [
      { src: 'bilder/mob-hist-wagen-c1.jpg', titel: 'BC4 22 bei Blonay–Chamby (2023)', foto: 'Transfer 2015', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Blonay%E2%80%93Chamby_Montreux%E2%80%93Berner_Oberland-Bahn_BC4_22_2023.jpg' },
      { src: 'bilder/mob-hist-wagen-c2.jpg', titel: 'B4 61 in Blonay (2018)', foto: 'Transfer 2015', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Blonay%E2%80%93Chamby_Montreux%E2%80%93Berner_Oberland-Bahn_B4_61_in_Blonay_2018.jpg' },
      { src: 'bilder/mob-hist-wagen-c3.jpg', titel: 'Im B4 61 (2019)', foto: 'Transfer 2015', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Blonay%E2%80%93Chamby_Montreux%E2%80%93Berner_Oberland-Bahn_B4_61_Innenansicht_2019.jpg' }
    ] },
  { id: 'mob-hist-gueterwagen', kat: 'historisch', name: 'Historische Güterwagen', beiname: 'K, L, M und O', typ: 'Frühe Güterwagen der MOB bei Blonay–Chamby (historisch)', bahn: 'mob', vorlaeufig: false,
    text: ['Die MOB beförderte früher Stückgut, Vieh, Holz und Baustoffe. Vier frühe Güterwagen aus den Jahren 1901 bis 1905 sind bei der Museumsbahn Blonay–Chamby erhalten.', 'Der L 153 war zwischendurch sogar ein Schneepflug.'],
    kennzahlen: [['4', 'Wagen'], ['1901', 'ältester (K 101)'], ['10–12 t', 'Tragfähigkeit'], ['1905', 'jüngster (O 810)']],
    daten: { 'Bauart': 'Historische Güterwagen', 'Hersteller': 'SIG, Busch Bautzen', 'Betreiber': 'MOB, heute Museumsbahn Blonay–Chamby', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Kein eigener Antrieb', 'Fahrzeugnummern': 'K 101, L 153, M 706, O 810', 'Gewicht': '5,0–7,8 t leer', 'Nutzlast': '10 oder 12 t', 'Erhalten': 'Museumsbahn Blonay–Chamby', 'In Betrieb seit': '1901' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Antrieb', 'Fahrzeugnummern', 'Gewicht', 'Nutzlast', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Nach den Blättern der Museumsbahn Blonay–Chamby. Die Tragfähigkeit ist die erlaubte Ladung, nicht das Gesamtgewicht. Die MOB hat heute keinen nennenswerten eigenen Güterverkehr mehr.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die vier erhaltenen Wagen stammen aus den ersten Betriebsjahren der MOB.'],
        tabelle: { kopf: ['Wagen', 'Baujahr', 'Hersteller', 'Leer', 'Tragfähigkeit'], zeilen: [
          ['K 101', '1901', 'SIG', '7,7 t', '10 t'], ['L 153', '1903', 'SIG Neuhausen', '6,7 t', '10 t'], ['M 706', '1904', 'Busch Bautzen', '5,0 t', '10 t'], ['O 810', '1905', 'Busch Bautzen', '7,8 t', '12 t']] } },
      { titel: 'Einsatz und Technik', p: ['Die Wagen haben Hand- und automatische Vakuumbremsen. Der L 153 wurde 1971 zum Schneepflug X 153 umgebaut und später Xa 9 genannt. Nach der Abgabe an Blonay–Chamby 2006 wurde er wieder als L 153 hergerichtet und fährt seit 2009.', 'Später beförderte die MOB auch Normalspur-Güterwagen auf Rollböcken, vor allem zwischen Zweisimmen und Lenk.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Gedeckte und offene Wagen', 'Hand- und Vakuumbremse', 'Kein eigener Antrieb'] }
    ],
    quellen: ['Museumsbahn Blonay–Chamby – K 101, L 153, M 706 und O 810', 'MOB – Geschäftsbericht 2012', MOB_Q],
    art: { typ: 'wagen', geschlossen: true, zweiachs: true, farbe: MOB_BRAUN, akzent: '#2B3036' },
    bilder: [
      { src: 'bilder/mob-hist-gueterwagen-c1.jpg', titel: 'Güterwagen M 706 bei Blonay–Chamby (2021)', foto: 'Oldboltonian', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Wagon_MOB_M706_Blonay-Chamby_Museum_railway.jpg' },
      { src: 'bilder/mob-hist-gueterwagen-c2.jpg', titel: 'Hochbordwagen O 801 bei Blonay–Chamby (2012)', foto: 'MCBBC', lizenz: 'Gemeinfrei', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:Blonay%E2%80%93Chamby_Montreux%E2%80%93Berner_Oberland-Bahn_-_801_-_01.jpg' }
    ] }
);
