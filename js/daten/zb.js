/* RailBase – Fahrzeuge der Zentralbahn (zb). Gleiche Form wie fahrzeuge.js, mit bahn: 'zb'. */
'use strict';

/* =====================================================================
   zb Zentralbahn (mit Brünigbahn, Luzern–Stans–Engelberg-Bahn und
   Meiringen–Innertkirchen-Bahn)
   Grundlage: Fahrzeugdossier von HCKD (22. Oktober 2026), geprüft mit der
   Rollmaterial-Seite der Zentralbahn, Stadler-Datenblättern und Wikipedia.
   Korrigiert und ergänzt: neue FINK heissen ABeh 162 021–030; die zweite
   ADLER-Nachbestellung (151 011–012) stammt laut Wikipedia von Dezember 2019;
   HGe 4/4 II sind die acht Loks 101 961–968; HGm 104 003 kam 2022.
   Nicht aufgenommen: Schneeschleudern und Zweiwegefahrzeuge ohne belegte
   Nummern und Daten, Draisinen in Privatbesitz.
   ===================================================================== */
const ZB_ROT = '#C8102E', ZB_GRAU = '#4A4F55', ZB_SILBER = '#C9CDD2', ZB_GRUEN = '#3E5A3A', ZB_BRAUN = '#6B4A2E', ZB_DUNKEL = '#22272B';
const ZB_Q = 'Dossier HCKD «Fahrzeuge und Strecken der Zentralbahn», Oktober 2026';
ZUEGE.push(
  // ---------- Personenverkehr ----------
  { id: 'zb-adler', kat: 'personenverkehr', name: 'ABeh 150', beiname: 'ADLER', typ: 'Siebenteiliger Zahnrad-Triebzug von Stadler für Luzern–Interlaken', bahn: 'zb', vorlaeufig: false,
    text: ['Der ADLER ist der lange Express-Triebzug der Zentralbahn. Die vier siebenteiligen Züge von Stadler fahren seit 2012 vor allem als Luzern–Interlaken Express über den Brünig.', 'Im Tal fährt er nur mit Rädern, an den steilen Rampen hilft ein Zahnrad. Weitere ADLER sind bestellt.'],
    kennzahlen: [['4', 'Züge (150 001–004)'], ['313', 'Sitzplätze'], ['120 km/h', 'Höchstgeschwindigkeit'], ['2012', 'im Einsatz']],
    daten: { 'Bauart': 'Elektrischer Zahnrad- und Adhäsionstriebzug, 7 Wagen', 'Hersteller': 'Stadler', 'Betreiber': 'zb Zentralbahn', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '15 kV 16,7 Hz', 'Fahrzeugnummern': '150 001–004; bestellt 151 011–012 und fünf weitere', 'Länge': '126 m über Kupplung', 'Breite': '2,65 m', 'Gewicht': 'rund 200 t', 'Leistung': '2800 kW (Adhäsion), 3200 kW (Zahnrad)', 'Anfahrzugkraft': '240 kN (Adhäsion)', 'Höchstgeschwindigkeit': '120 km/h (Adhäsion), 40 km/h auf Zahnstange', 'Sitzplätze': '313, davon 63 in der 1. Klasse', 'Anzahl': '4 Züge, 7 weitere bestellt', 'In Betrieb seit': '2012' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Länge', 'Breite', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Sitzplätze nach der aktuellen Seite der Zentralbahn; das ursprüngliche Stadler-Datenblatt und die Wikipedia nennen andere Aufteilungen (307 bzw. 317 Plätze). Leistung nach Stadler. Für die Anfahrzugkraft auf Zahnstange weichen die Quellen stark ab (200 bzw. 440 kN); sie ist darum nicht angegeben.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler lieferte die vier ADLER 2012 und 2013. Der Name steht für «alpiner dynamischer leiser edler Reisezug». Zwei dreiteilige Antriebsteile schliessen einen Bistrowagen ein. Getauft sind 150 001 «Bern» und 150 003 «Luzern».', 'Die Zentralbahn hat weitere ADLER bestellt: zuerst zwei Züge (laut Wikipedia im Dezember 2019, Nummern 151 011–012, mit Multifunktionswagen statt Bistro), im September 2025 fünf weitere. Sie sollen ab Ende 2027 kommen; drei davon erhalten ein Premiumabteil.'] },
      { titel: 'Einsatz und Technik', p: ['Die ADLER fahren vor allem als Luzern–Interlaken Express über den Brünig. Auf den Zahnradabschnitten zwischen Giswil und Meiringen greifen Zahnräder in die Zahnstange (System Riggenbach); dort fährt der Zug bergwärts bis 40 km/h, im Tal bis 120 km/h.', 'Der Zug ist 126 m lang und wiegt rund 200 t. Er kann mit einem FINK gekuppelt werden; so entsteht ein längerer Zug mit mehr Plätzen.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['313 Sitzplätze, davon 63 in der 1. Klasse (Stand Zentralbahn)', 'Bistrowagen in der Zugmitte', 'Niederflureinstiege (rund 420 mm) an vier von sieben Türen pro Seite, rollstuhlgängiges WC', 'Klimaanlage, grosse Panoramafenster, Fahrgastinformation und Steckdosen', 'Velo- und Skihalter'] }
    ],
    quellen: ['Zentralbahn – Rollmaterial', 'Stadler – Datenblatt ADLER (ZZb1009d)', 'Stadler – Medienmitteilung zur Bestellung von acht Zügen, September 2025', 'Wikipedia – ZB ABeh 150', ZB_Q],
    art: { typ: 'triebzug', nase: 'lang', farbe: ZB_ROT, akzent: ZB_SILBER, tuer: ZB_GRAU, panto: true },
    bilder: [
      { src: 'bilder/zb-adler-c1.jpg', titel: 'ADLER am Lungerersee (2014)', foto: 'Zb Zentralbahn AG', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:ADLER_Lungerersee_komprimiert.jpg' },
      { src: 'bilder/zb-adler-c2.jpg', titel: 'ABeh 150 002 (2014)', foto: 'Heitersberg', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:ZB_ABeh_150_002.jpg' },
      { src: 'bilder/zb-adler-c3.jpg', titel: '1. Klasse im ADLER (2017)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Zb_Adler_1st_class_140117_1.jpg' }
    ] },
  { id: 'zb-fink', kat: 'personenverkehr', name: 'ABeh 160/161', beiname: 'FINK', typ: 'Dreiteiliger Zahnrad-Triebzug von Stadler für S-Bahn und Brünig', bahn: 'zb', vorlaeufig: false,
    text: ['Der FINK ist der kurze Bruder des ADLER. Die elf dreiteiligen Züge von Stadler fahren seit 2012 in der S-Bahn Luzern, auf dem Brünig und nach Engelberg.', 'Wie der ADLER hat er ein Zahnrad für die steilen Abschnitte. Er fährt allein oder verstärkt einen ADLER.'],
    kennzahlen: [['11', 'Züge (6 + 5)'], ['139', 'feste Sitzplätze'], ['120 km/h', 'Höchstgeschwindigkeit'], ['2012', 'im Einsatz']],
    daten: { 'Bauart': 'Elektrischer Zahnrad- und Adhäsionstriebzug, 3 Wagen', 'Hersteller': 'Stadler', 'Betreiber': 'zb Zentralbahn', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '15 kV 16,7 Hz', 'Achsfolge': "Bo'2z'2z'Bo'", 'Fahrzeugnummern': '160 001–006 (2012), 161 011–015 (2016)', 'Länge': '54 m über Kupplung', 'Breite': '2,65 m', 'Gewicht': 'rund 90 t', 'Leistung': '1400 kW (Adhäsion), 1600 kW (Zahnrad)', 'Anfahrzugkraft': '120 kN (Adhäsion)', 'Höchstgeschwindigkeit': '120 km/h (Adhäsion), 40 km/h auf Zahnstange', 'Sitzplätze': '139, davon 18 in der 1. Klasse, dazu 8 Klappsitze', 'Anzahl': '11 Züge', 'In Betrieb seit': '2012' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Achsfolge', 'Fahrzeugnummern', 'Länge', 'Breite', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Werte nach Stadler und der Zentralbahn; die Wikipedia nennt 93 t. Auch beim FINK weichen die Angaben zur Zugkraft auf Zahnstange ab (100 bzw. 220 kN). Die neuen FINK ab 2026 sind ein eigener Eintrag.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler lieferte 2012 sechs FINK (160 001–006) und 2016 fünf weitere (161 011–015). Der Name steht für «flinke innovative Niederflurkomposition». Bei der zweiten Serie wurden die Zahnrad-Drehgestelle verbessert, damit sie weniger verschleissen.', 'Einige Züge tragen Namen, etwa 160 004 «Oberried» und 161 015 «Interlaken».'] },
      { titel: 'Einsatz und Technik', p: ['Die FINK fahren in der S-Bahn Luzern (S4, S5), im Regionalverkehr Meiringen–Interlaken Ost, als Verstärkung der ADLER und auf dem Ast nach Engelberg. Linien und Umläufe wechseln mit dem Fahrplan.', 'Der Zug ist 54 m lang. Auf den Zahnradabschnitten am Brünig und vor Engelberg fährt er bergwärts bis 40 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['139 feste Plätze, davon 18 in der 1. Klasse, dazu 8 Klappsitze', 'Niederflurbereiche mit breiten Türen und zugänglichen Bereichen', 'Klimaanlage, Panoramafenster und Fahrgastinformation', 'Kein Bistro'] }
    ],
    quellen: ['Zentralbahn – Rollmaterial', 'Stadler – Datenblatt FINK (ZZb1009e)', 'Wikipedia – ZB ABeh 160/161', ZB_Q],
    art: { typ: 'triebzug', nase: 'mittel', farbe: ZB_ROT, akzent: ZB_SILBER, tuer: ZB_GRAU, panto: true },
    bilder: [
      { src: 'bilder/zb-fink-c1.jpg', titel: 'ABeh 161 013 als IR nach Engelberg in Luzern (2019)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Zentralbahn_ABeh_161_013_als_IR_nach_Engelberg_(2019).jpg' },
      { src: 'bilder/zb-fink-c2.jpg', titel: 'ABeh 160 004 in Stans (2025)', foto: 'Moliva', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:ZB_ABeh_160_004_Stans_20250717.jpg' },
      { src: 'bilder/zb-fink-c3.jpg', titel: 'FINK am Brünig (2012)', foto: 'Christian Perret', lizenz: 'CC BY-SA 3.0 ch', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0/ch/deed.en', quelle: 'https://commons.wikimedia.org/wiki/File:Fink_am_Br%C3%BCnig_Br%C3%BCnig_Safari_komprimiert.jpg' }
    ] },
  { id: 'zb-fink-neu', kat: 'personenverkehr', name: 'ABeh 162', beiname: 'neuer FINK', typ: 'Neue Generation des FINK, Einsatz ab Dezember 2026 geplant', bahn: 'zb', vorlaeufig: false,
    text: ['Zehn neue FINK verstärken ab Ende 2026 die Flotte der Zentralbahn. Das erste Fahrzeug kam in der Nacht auf den 13. August 2026 an und wird seither in Meiringen erprobt.', 'Ab dem Fahrplanwechsel am 13. Dezember 2026 sollen sie auf dem RE44 Luzern–Engelberg fahren.'],
    kennzahlen: [['10', 'Züge bestellt'], ['128', 'Sitzplätze'], ['2026', 'erstes Fahrzeug'], ['RE44', 'Luzern–Engelberg']],
    daten: { 'Bauart': 'Elektrischer Zahnrad- und Adhäsionstriebzug, 3 Wagen', 'Hersteller': 'Stadler', 'Betreiber': 'zb Zentralbahn', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '15 kV 16,7 Hz', 'Fahrzeugnummern': '162 021–030 (laut Wikipedia)', 'Sitzplätze': '17 in der 1., 111 in der 2. Klasse', 'Anzahl': '10 bestellt (7 + 3)', 'In Betrieb seit': '2026 geplant' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Nach der Mitteilung der Zentralbahn vom August 2026. Die neuen FINK haben 128 Plätze, die bisherigen 139; die Werte gelten nicht gegenseitig. Technische Daten der neuen Ausführung sind noch nicht veröffentlicht.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Zentralbahn bestellte bei Stadler zuerst sieben neue FINK und im September 2025 drei weitere. In der Nacht vom 12. auf den 13. August 2026 kam der erste Zug in Interlaken an und wurde nach Meiringen überführt.'] },
      { titel: 'Einsatz und Technik', p: ['Nach Erprobung und Zulassung sollen die Züge ab dem 13. Dezember 2026 auf dem RE44 Luzern–Engelberg fahren. Später verstärken sie auch Interregio und S-Bahn und fahren gekuppelt auf der Regio Meiringen–Interlaken Ost.', 'Wie die bisherigen FINK haben sie ein Zahnrad. Ein angekommener Zug ist noch kein Zug im Fahrplan: Bis zur Zulassung fährt er nur für Tests.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['128 Plätze: 17 in der 1. und 111 in der 2. Klasse', 'Neue Inneneinrichtung und neues Design', 'Weitere Ausstattung je nach Zulassungsstand'] }
    ],
    quellen: ['Zentralbahn – Erster FINK der neuen Generation angekommen, August 2026', 'Stadler – Medienmitteilung zur Bestellung von acht Zügen, September 2025', 'Wikipedia – ZB ABeh 160/161', ZB_Q],
    art: { typ: 'triebzug', nase: 'mittel', farbe: ZB_ROT, akzent: ZB_SILBER, tuer: ZB_GRAU, panto: true },
    bilder: [] },
  { id: 'zb-spatz', kat: 'personenverkehr', name: 'ABe 130', beiname: 'SPATZ', typ: 'Dreiteiliger Panorama-Triebzug ohne Zahnrad für die S-Bahn', bahn: 'zb', vorlaeufig: false,
    text: ['Der SPATZ ist der älteste moderne Triebzug der Zentralbahn. Stadler lieferte die zehn Züge 2004 und 2005; sie fahren vor allem in der S-Bahn Luzern.', 'Er hat kein Zahnrad und fährt darum nur auf den flacheren Strecken, etwa bis Giswil oder zwischen Meiringen und Interlaken.'],
    kennzahlen: [['10', 'Züge (130 001–010)'], ['134', 'Sitzplätze'], ['100 km/h', 'Höchstgeschwindigkeit'], ['2004', 'geliefert']],
    daten: { 'Bauart': 'Elektrischer Niederflur-Triebzug, 3 Wagen (ohne Zahnrad)', 'Hersteller': 'Stadler', 'Betreiber': 'zb Zentralbahn', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '15 kV 16,7 Hz', 'Achsfolge': "2'Bo'Bo'2'", 'Fahrzeugnummern': '130 001–010', 'Länge': '51,93 m über Kupplung', 'Breite': '2,65 m', 'Gewicht': '68,5 t leer', 'Leistung': '1150 kW am Rad (kurzzeitig), 660 kW dauernd', 'Anfahrzugkraft': '100 kN', 'Höchstgeschwindigkeit': '100 km/h', 'Sitzplätze': '19 in der 1., 115 in der 2. Klasse, dazu 14 Klappsitze', 'Anzahl': '10', 'In Betrieb seit': '2004' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Achsfolge', 'Fahrzeugnummern', 'Länge', 'Breite', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Werte nach dem Stadler-Datenblatt (Lieferzustand); Dauerleistung nach Wikipedia. Spätere Erneuerungen können Innenraum und Plätze verändert haben.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler baute die zehn SPATZ 2004 und 2005. Der Name steht für «Schmalspur-Panorama-Triebzug». Die Stirnfronten stammen von den GTW der Seetalbahn. Mehrere Züge tragen Namen, etwa 130 001 «Haslital» und 130 002 «Pilatus».', 'Seit 2017 haben alle SPATZ automatische Kupplungen, mit denen sie auch mit einem FINK gekuppelt fahren können. Türen, Böden, Toiletten und Fahrgastinformation wurden später in Stansstad erneuert.'] },
      { titel: 'Einsatz und Technik', p: ['Die SPATZ fahren in der S-Bahn Luzern, etwa auf der S4 und S5 Richtung Giswil und Stans, sowie zwischen Meiringen und Interlaken Ost. Über den Brünig oder bis Engelberg können sie allein nicht fahren, weil ihnen das Zahnrad fehlt.', 'Der Antrieb sitzt in den Drehgestellen unter dem Mittelteil. Der Zug ist knapp 52 m lang und fährt bis 100 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['134 Sitzplätze: 19 in der 1. und 115 in der 2. Klasse, dazu 14 Klappsitze', 'Niederflureinstiege (rund 400 mm) und Rollstuhlbereich', 'Geschlossenes, rollstuhlgängiges WC', 'Klimaanlage und grosse Panoramafenster im Mittelteil'] }
    ],
    quellen: ['Stadler – Datenblatt SPATZ (FSZB0705d)', 'Zentralbahn – Rollmaterial', 'Wikipedia – Stadler Spatz', ZB_Q],
    art: { typ: 'triebzug', nase: 'kurz', farbe: ZB_ROT, akzent: ZB_SILBER, tuer: ZB_GRAU, panto: true },
    bilder: [
      { src: 'bilder/zb-spatz-c1.jpg', titel: 'SPATZ ABe 130 002 in Sarnen (2017)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:ZB_ABe_130_002_im_Bahnhof_Sarnen_OW.jpg' },
      { src: 'bilder/zb-spatz-c2.jpg', titel: 'SPATZ am Brienzersee (2014)', foto: 'Zb Zentralbahn AG', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SPATZ_Brienzersee_komprimiert.jpg' },
      { src: 'bilder/zb-spatz-c3.jpg', titel: 'Im SPATZ (2006)', foto: 'Cooper', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'http://creativecommons.org/licenses/by-sa/3.0/', quelle: 'https://commons.wikimedia.org/wiki/File:ZB_Stadler_SPATZ_interior1.jpg' }
    ] },
  { id: 'zb-hge44ii', kat: 'personenverkehr', name: 'HGe 4/4 II', beiname: '101 961–968', typ: 'Elektrische Zahnrad- und Adhäsionslok für Brünig und Engelberg', bahn: 'zb', vorlaeufig: false,
    text: ['Die acht HGe 4/4 II zogen bis 2012 alle Schnellzüge über den Brünig. Heute fahren sie vor allem den Luzern–Engelberg Express und Zusatzzüge.', 'Sie haben Räder für die Talstrecken und Zahnräder für die steilen Rampen.'],
    kennzahlen: [['8', 'Loks (101 961–968)'], ['1932 kW', 'Stundenleistung'], ['100 km/h', 'Höchstgeschwindigkeit'], ['1989', 'erste Loks']],
    daten: { 'Bauart': 'Elektrische Zahnrad- und Adhäsionslok', 'Hersteller': 'SLM (mechanisch), BBC/ABB (elektrisch)', 'Betreiber': 'zb Zentralbahn (bis 2004 SBB-Brünigbahn)', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '15 kV 16,7 Hz', 'Achsfolge': "Bo'Bo'", 'Fahrzeugnummern': '101 961–968', 'Länge': '14,80 m über Puffer', 'Gewicht': '63 t', 'Leistung': '1932 kW (Stundenleistung)', 'Anfahrzugkraft': '230 kN (Adhäsion), 280 kN (Zahnrad)', 'Höchstgeschwindigkeit': '100 km/h (Adhäsion), 40 km/h auf Zahnstange', 'Anzahl': '8', 'In Betrieb seit': '1989' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Achsfolge', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Werte nach Wikipedia. Wie viele der acht Loks heute noch im Einsatz sind, nennen die geprüften Quellen nicht eindeutig.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SLM und BBC (später ABB) bauten die Loks; die Brünigbahn der SBB nahm sie 1989 und 1990 in Betrieb. Sie tragen Ortsnamen von «Horw» bis «Ringgenberg». Gleiche Loks fahren bei der Matterhorn Gotthard Bahn.'] },
      { titel: 'Einsatz und Technik', p: ['Bis 2012 zogen die HGe 4/4 II alle Schnellzüge zwischen Luzern und Interlaken. Heute ziehen zwei besonders ausgestattete Pendel den Luzern–Engelberg Express; weitere Pendel fahren Saisonzüge, die S41 und als Reserve. Neue Triebzüge sollen einen Teil davon ablösen.', 'Auf Zahnstange (System Riggenbach) erreicht die Lok bergwärts 40 km/h und zieht auf 120 Promille Steigung bis 170 t.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Zwei Führerstände, kein Fahrgastraum', 'Zahnrad- und Adhäsionsantrieb', 'Fährt mit Panoramawagen und Gelenksteuerwagen im Pendelzug'] }
    ],
    quellen: ['Wikipedia – HGe 4/4 II', 'Zentralbahn – Rollmaterial', ZB_Q],
    art: { typ: 'lok', farbe: ZB_ROT, akzent: '#E6E8EA', panto: true },
    bilder: [
      { src: 'bilder/zb-hge44ii-c1.jpg', titel: 'HGe 101 966 mit dem Luzern–Engelberg-Express in Engelberg (2014)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:ZB_HGe_101_966_mit_dem_Luzern-Engelberg-Express_im_Bahnhof_Engelberg_(2014).jpg' },
      { src: 'bilder/zb-hge44ii-c2.jpg', titel: 'HGe 101 mit einem Interregio bei Niederried (2009)', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:ZB_Interregio_mit_HGe_101_bei_Niederried.jpg' },
      { src: 'bilder/zb-hge44ii-c3.jpg', titel: 'HGe 101 968 in Interlaken Ost (2009)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:ZB_HGe_101_968_Interlaken_Ost_2009.jpg' }
    ] },
  { id: 'zb-bdeh140', kat: 'personenverkehr', name: 'BDeh 4/4', beiname: '140 001–008', typ: 'Zahnrad-Triebwagen der Luzern–Stans–Engelberg-Bahn (Reserve und historisch)', bahn: 'zb', vorlaeufig: false,
    text: ['Die acht BDeh 4/4 der LSE fuhren von 1964 bis 2010 die Züge über die steile Rampe nach Engelberg. Heute dient der 140 006 als Reserve, der 140 005 fährt historisch.', 'Sie hatten zwei Getriebestufen: eine für die steile Zahnstange und eine für 75 km/h im Tal.'],
    kennzahlen: [['8', 'Triebwagen (1–8)'], ['736 kW', 'Stundenleistung'], ['75 km/h', 'Höchstgeschwindigkeit'], ['1964', 'erste Triebwagen']],
    daten: { 'Bauart': 'Elektrischer Zahnrad- und Adhäsionstriebwagen', 'Hersteller': 'SWP, SLM, BBC', 'Betreiber': 'LSE, ab 2005 zb Zentralbahn', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '15 kV 16,7 Hz', 'Fahrzeugnummern': '1–5 (1964), 6–7 (1970), 8 (1980); heute 140 005 und 140 006', 'Länge': '17,84 m', 'Gewicht': '47,9 t leer', 'Leistung': '736 kW (Stundenleistung)', 'Höchstgeschwindigkeit': '75 km/h (Adhäsion), 20 km/h auf Zahnstange', 'Sitzplätze': '40 bis 42 in der 2. Klasse', 'Anzahl': '8 gebaut', 'In Betrieb seit': '1964' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Werte nach dem Blatt des Vereins Engelbergbahn für den 005 und nach Wikipedia; Wikipedia nennt 40, das Vereinsblatt 42 Sitzplätze. Wikipedia nennt den 007 als verkauft; laut Zentralbahn steht er im Verkehrshaus und dient als Fahrsimulator.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die LSE beschaffte die Triebwagen in drei Losen: 1–5 im Jahr 1964, 6–7 im Jahr 1970 und den 8 im Jahr 1980. SWP baute den Wagenkasten, SLM das Zahnradlaufwerk und BBC die elektrische Ausrüstung.', 'Die 2 und 8 wurden 2012 abgebrochen, die 1 und 3 im Jahr 2014.'] },
      { titel: 'Einsatz und Technik', p: ['Bis zur Eröffnung des neuen Tunnels Grafenort–Engelberg im Dezember 2010 bewältigten sie den ganzen Verkehr nach Engelberg über die alte, sehr steile Zahnradrampe. Danach fuhren sie Zusatzzüge und Ersatz in der S-Bahn.', 'Heute fährt der 140 006 laut Zentralbahn auf der S41 und in saisonalen Zusatzzügen. Der 140 005 ist in den LSE-Farben für Sonderfahrten erhalten, der 140 007 steht im Verkehrshaus Luzern.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Personen- und Gepäckabteil', 'Zwei Getriebestufen für Zahnstange und Talstrecke', 'Hochfluriger Einstieg, nicht stufenfrei', 'Der 005 fährt mit dem Steuerwagen ABt 923'] }
    ],
    quellen: ['Wikipedia – LSE BDeh 4/4', 'Verein Engelbergbahn – BDeh 4/4 5', 'Zentralbahn – Rollmaterial', ZB_Q],
    art: { typ: 'triebzug', nase: 'kurz', farbe: ZB_ROT, akzent: '#E8DCC8', tuer: ZB_GRAU, panto: true },
    bilder: [
      { src: 'bilder/zb-bdeh140-c1.jpg', titel: 'BDeh 140 006 (2007)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20071122S93_140006.jpg' },
      { src: 'bilder/zb-bdeh140-c2.jpg', titel: 'LSE BDeh 4/4 4 in Engelberg (1998)', foto: 'Phil Richards', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:14.11.98_Engelberg_LSE_BDeh44_4.jpg' },
      { src: 'bilder/zb-bdeh140-c3.jpg', titel: 'BDeh 4/4 8 bei der Einfahrt in Stansstad (2006)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:ZB-BDeh8_Einfahrt-Stansstad-2006-Sept.jpg' }
    ] },
  { id: 'zb-mib', kat: 'personenverkehr', name: 'Be 125', beiname: '013 und 008', typ: 'Gleichstrom-Triebwagen der Meiringen–Innertkirchen-Bahn', bahn: 'zb', vorlaeufig: false,
    text: ['Auf der knapp 5 km langen Strecke Meiringen–Innertkirchen fahren eigene Triebwagen mit 1200 V Gleichstrom. Der Gelenktriebwagen 125 013 fährt im Alltag, der 125 008 ist Reserve.', 'Seit 2021 gehört die Bahn zur Zentralbahn.'],
    kennzahlen: [['2', 'Triebwagen'], ['1200 V', 'Gleichstrom'], ['5 km', 'Strecke'], ['2021', 'zur Zentralbahn']],
    daten: { 'Bauart': 'Elektrische Triebwagen (Gelenktriebwagen und Einzelwagen)', 'Hersteller': 'Stadler', 'Betreiber': 'zb Zentralbahn (bis 2020 MIB)', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '1200 V Gleichstrom', 'Fahrzeugnummern': '125 013 (ex MIB Be 2/6 13), 125 008 (ex MIB Be 4/4 8)', 'Anzahl': '2', 'In Betrieb seit': '1996' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Nach der Rollmaterial-Seite der Zentralbahn und Wikipedia. Sitzplätze und Masse sind dort nicht angegeben und werden nicht von anderen GTW übernommen.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Der Be 4/4 8 wurde 1996 von Stadler gebaut und ist ein Einzelstück; heute heisst er Be 125 008 und steht als Reserve bereit.', 'Der Gelenktriebwagen Be 2/6 entstand 1997 für das Umfeld der MVR an der Waadtländer Riviera und kam 2018 zur MIB. Heute heisst er Be 125 013.'] },
      { titel: 'Einsatz und Technik', p: ['Die Strecke führt von Meiringen an der Aareschlucht vorbei und durch den 1502 m langen Kirchettunnel nach Innertkirchen. Die Züge fahren tagsüber etwa alle 30 Minuten.', 'Weil die Strecke mit 1200 V Gleichstrom fährt, können die übrigen Züge der Zentralbahn (15 kV Wechselstrom) nicht hierher fahren. Die Zentralbahn hat eine Umstellung auf Wechselstrom für durchgehende Züge ab Interlaken untersucht.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Kein Zahnrad nötig (reine Adhäsionsstrecke)', 'Niederfluriger Mittelteil beim Gelenktriebwagen 125 013', 'Einzelstück 125 008 als Reserve'] }
    ],
    quellen: ['Zentralbahn – Rollmaterial', 'Wikipedia – Meiringen-Innertkirchen-Bahn', ZB_Q],
    art: { typ: 'triebzug', nase: 'kurz', farbe: ZB_ROT, akzent: '#E6E8EA', tuer: ZB_GRAU, panto: true },
    bilder: [
      { src: 'bilder/zb-mib-c1.jpg', titel: 'Be 125 013 bei Aareschlucht West (2021)', foto: 'Herbert Ortner', lizenz: 'CC BY 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:ZB_125-013_Aareschlucht_West_2021-08-18.jpg' },
      { src: 'bilder/zb-mib-c2.jpg', titel: 'Be 4/4 8, heute Be 125 008, in Meiringen (2013)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Triebzug_MIB_Be_4-4_8_in_Meiringen_(2013).jpg' }
    ] },
  { id: 'zb-wagen', kat: 'personenverkehr', name: 'Panorama- und Steuerwagen', beiname: 'Expresszüge', typ: 'Lokbespannte Wagen für Luzern–Engelberg und Saisonzüge', bahn: 'zb', vorlaeufig: false,
    text: ['Zu den HGe 4/4 II gehören Pendelzüge aus Panoramawagen, überarbeiteten Wagen der 2. Klasse und einem Gelenksteuerwagen. Bekannt ist der Luzern–Engelberg Express mit dem Globi-Wagen.', 'Die Wagen haben keinen eigenen Antrieb; vom Steuerwagen aus steuert der Lokführer die Lok am anderen Zugende.'],
    kennzahlen: [['3', 'Gelenksteuerwagen'], ['2', 'Express-Pendel'], ['1.', 'Klasse im Panoramawagen'], ['Globi', 'Wagen in der Zugmitte']],
    daten: { 'Bauart': 'Panoramawagen, Personenwagen und Gelenksteuerwagen', 'Betreiber': 'zb Zentralbahn', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Kein eigener Antrieb', 'Anzahl': '3 Gelenksteuerwagen' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Antrieb', 'Anzahl'],
    specNote: 'Nach der Rollmaterial-Seite der Zentralbahn. Nummern und Sitzplätze der einzelnen Wagen sind dort nicht vollständig angegeben.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Der Luzern–Engelberg Express besteht aus einer HGe 4/4 II, einem früher im GoldenPass-Verkehr eingesetzten Panoramawagen der 1. Klasse, drei überarbeiteten Wagen der 2. Klasse und einem Gelenksteuerwagen. Ein Globi-Wagen in der Zugmitte gibt dem Zug den Namen Globi-Express.', 'Die Zentralbahn hat drei Gelenksteuerwagen mit Führerstand und Niederflurteil.'] },
      { titel: 'Einsatz und Technik', p: ['Zwei solche Pendel fahren den Luzern–Engelberg Express. Drei, zeitweise vier weitere Pendel fahren Saisonzüge, die S41 und als Reserve. Die neuen FINK sollen ab Ende 2026 einen Teil dieser Züge ablösen.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Niederflurbereich im Gelenksteuerwagen', 'Klimaanlage, grosse Fenster, Luftfederung und Scheibenbremsen im Gelenksteuerwagen', 'Panoramawagen der 1. Klasse', 'Die älteren Wagen sind nicht stufenfrei'] }
    ],
    quellen: ['Zentralbahn – Rollmaterial', ZB_Q],
    art: { typ: 'wagen', farbe: ZB_ROT, akzent: ZB_GRAU },
    bilder: [
      { src: 'bilder/zb-wagen-c1.jpg', titel: 'Gelenksteuerwagen ABt in Hergiswil (2009)', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:N1.25g_Bf_Hergiswil,_Gelenksteuerwagen_ABt_8.jpg' },
      { src: 'bilder/zb-wagen-c2.jpg', titel: 'Blick aus einem lokbespannten Zug zwischen Meiringen und Brünig (2010)', foto: 'Kecko', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:GoldenPass_Line_Meiringen_-_Br%C3%BCnig.jpg' }
    ] },

  // ---------- Infrastruktur ----------
  { id: 'zb-hgm104', kat: 'infrastruktur', name: 'HGm 2/2', beiname: '104 001–003', typ: 'Diesel-Zahnradlok von Stadler für Bauzüge und Winterdienst', bahn: 'zb', vorlaeufig: false,
    text: ['Die HGm sind kleine Dieselloks mit Zahnrad. Sie ziehen Bauzüge, helfen bei abgeschalteter Fahrleitung und arbeiten im Winter beim Schneeräumen – auch auf den Zahnstangen am Brünig und vor Engelberg.', 'Stadler lieferte 2005, 2010 und 2022 je eine Lok.'],
    kennzahlen: [['3', 'Loks (104 001–003)'], ['450 kW', 'Leistung'], ['60 km/h', 'Höchstgeschwindigkeit'], ['2005', 'erste Lok']],
    daten: { 'Bauart': 'Dieselelektrische Zahnrad- und Adhäsionslok', 'Hersteller': 'Stadler', 'Betreiber': 'zb Zentralbahn', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Dieselelektrisch', 'Fahrzeugnummern': '104 001 (2005), 104 002 (2010), 104 003 (2022)', 'Gewicht': '24 t', 'Leistung': '450 kW', 'Höchstgeschwindigkeit': '60 km/h', 'Anzahl': '3', 'In Betrieb seit': '2005' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Antrieb', 'Fahrzeugnummern', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Werte für 104 001 und 002 nach Wikipedia (Stadler HGm 2/2); für die 2022 gelieferte 104 003 sind keine Daten veröffentlicht. Die Werte der Gm 105 werden nicht übertragen.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler lieferte die 104 001 im Jahr 2005 und die 104 002 im Jahr 2010; eine davon hatten ursprünglich die SBB für die Brünigbahn bestellt. 2022 kam eine weitere Zahnrad-Diesellok hinzu, die 104 003.', 'Gleiche Loks fahren auch bei der Matterhorn Gotthard Bahn und bei Zahnradbahnen in Spanien und Österreich.'] },
      { titel: 'Einsatz und Technik', p: ['Die Loks ziehen Bau- und Materialzüge und arbeiten, wenn die Fahrleitung abgeschaltet ist. Im Winter helfen sie beim Schneeräumen. Wo eine reine Adhäsionslok die Rampe nicht schafft, braucht es das Zahnrad.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Dieselelektrischer Antrieb, unabhängig von der Fahrleitung', 'Zahnrad für die Zahnstangenabschnitte', 'Für den Arbeitsdienst ausgelegter Führerstand'] }
    ],
    quellen: ['Wikipedia – Stadler HGm 2/2', 'Stadler – Datenblatt Gm 2/2 Serie 105 (mit Verweis auf HGm 104)', 'Zentralbahn – Geschäftsbericht 2022', ZB_Q],
    art: { typ: 'rangier', klein: true, farbe: YEL, panto: false },
    bilder: [
      { src: 'bilder/zb-hgm104-c1.jpg', titel: 'HGm 104 001 in Meiringen (2015)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Zentralbahn-HGm_104001_Meiringen2015.JPG' },
      { src: 'bilder/zb-hgm104-c2.jpg', titel: 'HGm 104 002 (2011)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Zentralbahn-HGm_104002_2011.jpg' }
    ] },
  { id: 'zb-gm105', kat: 'infrastruktur', name: 'Gm 2/2', beiname: '105 001', typ: 'Diesel-Rangierlok ohne Zahnrad für Bauzüge', bahn: 'zb', vorlaeufig: false,
    text: ['Die Gm 105 001 ist eine zweiachsige Diesellok ohne Zahnrad. Stadler lieferte sie 2011 für Bauzüge auf den flachen Strecken der Zentralbahn, der BOB und der MIB.', 'Im Winter schiebt sie auch eine Schneeschleuder.'],
    kennzahlen: [['1', 'Lok'], ['450 kW', 'Leistung am Rad'], ['80 km/h', 'Höchstgeschwindigkeit'], ['2011', 'geliefert']],
    daten: { 'Bauart': 'Dieselelektrische Lok ohne Zahnrad, 2 Achsen', 'Hersteller': 'Stadler', 'Betreiber': 'zb Zentralbahn', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Dieselelektrisch', 'Motor': 'MTU 12V183TB32, rund 550 kW', 'Fahrzeugnummern': '105 001', 'Länge': '8,09 m über Puffer', 'Breite': '2,70 m', 'Gewicht': '24 t', 'Leistung': '450 kW am Rad', 'Anfahrzugkraft': '80 kN', 'Höchstgeschwindigkeit': '80 km/h', 'Anzahl': '1', 'In Betrieb seit': '2011' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Antrieb', 'Motor', 'Fahrzeugnummern', 'Länge', 'Breite', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Werte nach dem Stadler-Datenblatt (L4232ZBGm22_0812d). Das Lastbeispiel von 400 t auf 6 Promille bei 30 km/h ist ein Berechnungspunkt, keine allgemeine Zuglast.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler lieferte die Lok 2011. Sie ist eng mit den Zahnradloks HGm verwandt, hat aber kein Zahnrad.'] },
      { titel: 'Einsatz und Technik', p: ['Sie zieht Bauzüge auf den Adhäsionsstrecken der Zentralbahn, der Berner Oberland-Bahn und der MIB und schiebt im Winter Schneeschleudern. Die elektrische Bremse leistet 360 kW.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Zwei diagonal angeordnete Bedienplätze und Sitze für vier Personen', 'Funkfernsteuerung und Kamera an der Kupplungsseite', 'Hilfsbetriebenetz 400 V mit 25 kVA'] }
    ],
    quellen: ['Stadler – Datenblatt Gm 2/2 Serie 105', 'Wikipedia – Stadler HGm 2/2', ZB_Q],
    art: { typ: 'rangier', klein: true, farbe: YEL, panto: false },
    bilder: [
      { src: 'bilder/zb-gm105-c1.jpg', titel: 'Gm 105 001 (2014)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Schmalspur-Rangierlok_Gm_105_001-2_der_Zentralbahn.jpg' },
      { src: 'bilder/zb-gm105-c2.jpg', titel: 'Gm 105 001 in Stansstad (2014)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Zentralbahn-Gm_105001_Stansstad2014.JPG' }
    ] },

  // ---------- Historische Fahrzeuge ----------
  { id: 'zb-deh46', kat: 'historisch', name: 'Deh 4/6', beiname: 'Fhe 4/6 901–916', typ: 'Gepäcktriebwagen der elektrifizierten Brünigbahn von 1941 (historisch)', bahn: 'zb', vorlaeufig: false,
    text: ['Mit den 16 Gepäcktriebwagen Fhe 4/6 begann 1941 der elektrische Betrieb auf dem Brünig. Sie hatten Räder für das Tal und ein Zahnrad-Drehgestell für die Rampen.', 'Später wurden viele zu reinen Adhäsionsloks De 110 umgebaut. Erhalten sind die 909, 912 und 914.'],
    kennzahlen: [['16', 'Triebwagen (901–916)'], ['894 kW', 'Leistung'], ['75 km/h', 'Höchstgeschwindigkeit'], ['1941', 'in Betrieb']],
    daten: { 'Bauart': 'Elektrischer Zahnrad- und Adhäsions-Gepäcktriebwagen', 'Hersteller': 'SLM; elektrisch BBC, MFO und SAAS', 'Betreiber': 'SBB-Brünigbahn, ab 2005 zb Zentralbahn', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '15 kV 16,7 Hz', 'Fahrzeugnummern': 'Fhe 4/6 901–916, später Deh 4/6 und Deh 120 006–012; Umbauten De 110 000–005, LSE De 121 und 122', 'Länge': '14,6 m', 'Gewicht': '54 t', 'Leistung': '894 kW', 'Höchstgeschwindigkeit': '75 km/h (Adhäsion)', 'Anzahl': '16', 'Erhalten': '909 (zb Historic), 912 und 914 (SBB Historic); derzeit nicht betriebsfähig', 'In Betrieb seit': '1941' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Länge, Gewicht und Leistung nach dem Vereinsblatt der 909; Geschichte nach Wikipedia (SBB Fhe 4/6). Die 75 km/h gelten nicht auf Zahnstange.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Im Zweiten Weltkrieg elektrifizierten die SBB die Brünigbahn mit 15 kV. SLM baute 1941 und 1942 die 16 Triebwagen, die elektrische Ausrüstung kam von BBC, MFO und SAAS. Zum Adhäsionsantrieb kam ein mittleres Zahnrad-Drehgestell.', 'Aus Fhe wurde später Deh 4/6. Die 915 wurde 1990 nach einem Unfall abgebrochen.'] },
      { titel: 'Einsatz und Technik', p: ['Die Triebwagen zogen Personen- und Gepäckzüge über den Brünig. Ab 1954 halfen die HGe 4/4 I am Berg, ab 1990 übernahmen die HGe 4/4 II die Züge Luzern–Interlaken.', 'Ab 1987 wurden sechs Triebwagen zu reinen Adhäsionsloks umgebaut (De 110 000–005); die übrigen hiessen Deh 120 006–012. Die LSE übernahm 1991 die 905 und 907 und baute sie zu den De 121 und 122 um.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Gepäckraum für rund 3 t', 'Mittleres Zahnrad-Drehgestell', 'Erhalten: 909, 912 und 914, derzeit nicht betriebsfähig'] }
    ],
    quellen: ['Wikipedia – SBB Fhe 4/6', 'Verein Engelbergbahn – Deh 4/6 909, 912 und 914', 'Verein Engelbergbahn – LSE-Elektrolokomotiven (De 121, 122)', ZB_Q],
    art: { typ: 'triebzug', nase: 'kurz', farbe: ZB_GRUEN, akzent: '#E8DCC8', tuer: '#2A4A33', panto: true },
    bilder: [
      { src: 'bilder/zb-deh46-c1.jpg', titel: 'Deh 4/6 914 mit historischen Wagen in Giswil (2013)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Br%C3%BCnigbahn_914-865-426-473_Giswil.jpg' },
      { src: 'bilder/zb-deh46-c2.jpg', titel: 'Fhe 4/6 915 im ursprünglichen Zustand', foto: 'unbekannt', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Historic_-_F_125_00001-039-01_-_Fhe_4_6_915_(Bruenig).tif' },
      { src: 'bilder/zb-deh46-c3.jpg', titel: 'Umgebauter De 110 021 in Interlaken Ost (2013)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Zb_De_110_021-3_Interlaken_Ost_040313.jpg' }
    ] },
  { id: 'zb-hge44i', kat: 'historisch', name: 'HGe 4/4 I', beiname: 'Muni', typ: 'Zahnradlok der Brünigbahn von 1954 (historisch)', bahn: 'zb', vorlaeufig: false,
    text: ['Die beiden HGe 4/4 I 1991 und 1992 waren ab 1954 die starken Zahnradloks am Brünig. Wegen ihrer Zugkraft nannte das Personal sie «Muni».', 'Die 1991 wurde abgebrochen, die 1992 ist erhalten.'],
    kennzahlen: [['2', 'Loks (1991, 1992)'], ['1954', 'in Betrieb'], ['50 km/h', 'Höchstgeschwindigkeit'], ['1992', 'erhalten']],
    daten: { 'Bauart': 'Elektrische Zahnrad- und Adhäsionslok', 'Hersteller': 'SLM, BBC, MFO', 'Betreiber': 'SBB-Brünigbahn', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '15 kV 16,7 Hz', 'Fahrzeugnummern': '1991, 1992', 'Höchstgeschwindigkeit': '50 km/h', 'Anzahl': '2', 'Erhalten': '1992', 'In Betrieb seit': '1954' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Höchstgeschwindigkeit', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Nach Wikipedia und der Zentralbahn. Ob die 1992 heute betriebsfähig ist, wird widersprüchlich angegeben: Die Flottenseite nennt sie betriebsfähig, die Nostalgieseite nicht.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SLM, BBC und MFO bauten die beiden Loks 1954 für die Brünigbahn der SBB.'] },
      { titel: 'Einsatz und Technik', p: ['Die Loks arbeiteten vor allem auf der Bergstrecke zwischen Giswil und Meiringen. Für die Talstrecken waren sie mit 50 km/h zu langsam. Der starke Antrieb fiel oft aus, die Loks standen deshalb lange in der Werkstatt.', 'Die 1991 wurde 1994 nach einem Motorschaden ausgemustert und später abgebrochen. Die 1992 wurde erhalten und 2014 von der Brünig-Nostalgie-Bahn wieder betriebsfähig gemacht.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Zwei Führerstände', 'Zahnrad- und Adhäsionsantrieb', 'Erhalten: 1992'] }
    ],
    quellen: ['Wikipedia – SBB HGe 4/4 I', 'Zentralbahn – Nostalgiefahrten', 'Verein Engelbergbahn – HGe 4/4 I 1992', ZB_Q],
    art: { typ: 'lok', kurz: true, farbe: ZB_GRUEN, akzent: ZB_DUNKEL, panto: true },
    bilder: [
      { src: 'bilder/zb-hge44i-c1.jpg', titel: 'HGe 4/4 I 1992 (vor 1968)', foto: 'unbekannt', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Historic_-_F_125_00001-023-02_-_HGe_4_4_1992_(Bruenig).tif' },
      { src: 'bilder/zb-hge44i-c2.jpg', titel: 'HGe 4/4 I am Brünig', foto: 'J.J.Smit', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Br%C3%BCnig0055.jpg' }
    ] },
  { id: 'zb-lse-diesel', kat: 'historisch', name: 'Gm 4/4 111', beiname: 'Jumbo', typ: 'Diesellok und Rangiertraktoren der LSE (historisch)', bahn: 'zb', vorlaeufig: false,
    text: ['Die Gm 4/4 111 «Jumbo» war eine dieselhydraulische Lok aus Finnland, die ab 1974 bei der LSE arbeitete. Dazu kamen kleine Rangiertraktoren von RACO.', 'Wo diese Fahrzeuge heute sind, ist nicht für alle belegt.'],
    kennzahlen: [['368 kW', 'Leistung Jumbo'], ['36 t', 'Gewicht Jumbo'], ['1955', 'gebaut (Jumbo)'], ['1974', 'zur LSE']],
    daten: { 'Bauart': 'Dieselhydraulische Lok und Diesel-Traktoren', 'Hersteller': 'Jung (Jumbo), RACO (Traktoren)', 'Betreiber': 'LSE', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Diesel', 'Fahrzeugnummern': 'Gm 4/4 111; Tm 101, 102, 103', 'Länge': '11,23 m (Jumbo)', 'Gewicht': '36 t (Jumbo)', 'Leistung': '368 kW (Jumbo)', 'Höchstgeschwindigkeit': '40 km/h (Jumbo)', 'In Betrieb seit': '1974' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Antrieb', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'In Betrieb seit'],
    specNote: 'Historische Werte nach dem Archiv des Vereins Engelbergbahn. Der heutige Verbleib der Gruppe wird nicht behauptet.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Jung baute den Jumbo 1955 für einen Industriebetrieb in Finnland; die LSE setzte ihn ab 1974 ein. Die Traktoren kamen von RACO: der Tm 102 von 1961 (früher StEB 51), der Tm 103 von 1967 und ein Tm 101, der als normalspuriger SBB-Traktor gebaut und für die LSE umgebaut wurde.'] },
      { titel: 'Einsatz und Technik', p: ['Der Jumbo zog Bau- und Dienstzüge, die Traktoren rangierten in Stansstad und auf den Bahnhöfen. Der Jumbo ist eine reine Diesellok, auch wenn eine Überschrift im Archiv anderes vermuten lässt.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Jumbo: dieselhydraulisch, 11,23 m, 36 t, 368 kW, 40 km/h', 'Tm 102: 5,07 m, 10 t, 81 kW, 45 km/h', 'Tm 103: 5,90 m, 16 t, 110 kW, 50 km/h'] }
    ],
    quellen: ['Verein Engelbergbahn – thermische LSE-Lokomotiven', ZB_Q],
    art: { typ: 'haube', farbe: ORA, akzent: ZB_GRAU },
    bilder: [] },
  { id: 'zb-traktoren', kat: 'historisch', name: 'Te I und Tm', beiname: 'kleine Traktoren', typ: 'Kleine Rangiertraktoren von Brünigbahn und LSE (historisch)', bahn: 'zb', vorlaeufig: false,
    text: ['Zu den historischen Fahrzeugen gehören kleine Traktoren: der elektrische Te I 198 der Brünigbahn von 1941 und die Diesel-Traktoren Tm 100 und Tm II OKK 5.', 'Sie rangierten Wagen in Bahnhöfen und Werkstätten.'],
    kennzahlen: [['1941', 'Te I 198'], ['1931', 'Tm 100'], ['13 t', 'Gewicht Te I'], ['33 kW', 'Leistung Tm 100']],
    daten: { 'Bauart': 'Elektrischer Rangiertraktor und Diesel-Traktoren', 'Hersteller': 'SLM und MFO (Te I), RACO (Tm)', 'Betreiber': 'SBB-Brünigbahn, LSE', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'Te I 198; Tm 100 (früher 491, 591, LSE 59 und 101); Tm II OKK 5', 'Erhalten': 'Te I 198, Tm 100 (abgestellt), Tm II OKK 5', 'In Betrieb seit': '1931' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Nach den Blättern des Vereins Engelbergbahn. Die Schwesterlok Te I 199 wurde laut Archiv 2018 abgebrochen. Die heutige Einsatzbereitschaft ist nicht neu bestätigt.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SLM und MFO bauten 1941 die elektrischen Rangiertraktoren Te I 198 und 199 für die Brünigbahn. Der Tm 100 entstand 1931 bei RACO und hat seit einem Umbau 1968 einen Dieselmotor. Den Tm II OKK 5 baute RACO 1953; er stammt aus einem militärischen Bestand.'] },
      { titel: 'Einsatz und Technik', p: ['Der Te I rangierte unter der Fahrleitung, die Tm auch auf Gleisen ohne Strom. Der Tm 100 trug nacheinander die Nummern 491, 591, LSE 59 und 101; ein späterer Tm 101 ist ein anderes Fahrzeug.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Te I 198: rund 5,8 m, 13 t', 'Tm 100: rund 4,4 m, 6 t, 33 kW, 28 km/h', 'Tm II OKK 5: Hilfsfahrzeug des Museumsbetriebs'] }
    ],
    quellen: ['Verein Engelbergbahn – Te I 198, Te I 199, Tm 100 und Tm II OKK 5', ZB_Q],
    art: { typ: 'rangier', klein: true, farbe: ZB_GRUEN, panto: true },
    bilder: [
      { src: 'bilder/zb-traktoren-c1.jpg', titel: 'Te I 199, Schwesterfahrzeug der erhaltenen 198', foto: 'unbekannt', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Historic_-_F_125_00001-081_-_Te_2_2_I_199_Br%C3%BCnig_(Zuschnitt).jpeg' }
    ] },
  { id: 'zb-g34', kat: 'historisch', name: 'G 3/4', beiname: '208', typ: 'Dampflok der Brünigbahn von 1913 (historisch)', bahn: 'zb', vorlaeufig: false,
    text: ['Die G 3/4 208 ist eine Dampflok der Brünigbahn ohne Zahnrad. SLM baute sie 1913 für die Talstrecken.', 'Heute gehört sie der Brünig-Dampfbahn (BDB) und fährt in historischen Zügen.'],
    kennzahlen: [['1913', 'gebaut'], ['SLM', 'Hersteller'], ['3', 'Triebachsen'], ['BDB', 'Eigentümerin']],
    daten: { 'Bauart': 'Dampflokomotive ohne Zahnrad', 'Hersteller': 'SLM', 'Betreiber': 'SBB-Brünigbahn; heute Brünig-Dampfbahn', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '208', 'Erhalten': 'Brünig-Dampfbahn (BDB)', 'In Betrieb seit': '1913' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Nach der Brünig-Dampfbahn und der Zentralbahn. Die G 3/4 hat kein Zahnrad; über die Brünig-Rampen fährt sie darum nicht aus eigener Kraft.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SLM baute die Lok 1913 für die Brünigbahn der SBB. Sie hat drei gekuppelte Achsen und eine Laufachse.'] },
      { titel: 'Einsatz und Technik', p: ['Die G 3/4 zog Züge auf den flachen Abschnitten, etwa zwischen Luzern und Giswil oder zwischen Meiringen und Interlaken. Heute gehört sie der Brünig-Dampfbahn, die früher Ballenberg Dampfbahn hiess, und fährt nach Freigabe in historischen Zügen.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Kein Zahnrad, nur für Talstrecken', 'Eigentum der Brünig-Dampfbahn, nicht der Zentralbahn', 'Fährt mit historischen Wagen'] }
    ],
    quellen: ['Brünig-Dampfbahn – Lok 208', 'Zentralbahn – Rollmaterial', ZB_Q],
    art: { typ: 'rangier', achsen: 3, farbe: ZB_DUNKEL, akzent: ZB_ROT, panto: false },
    bilder: [
      { src: 'bilder/zb-g34-c1.jpg', titel: 'G 3/4 208 in Brienz (2007)', foto: 'Andrew Bossi', lizenz: 'CC BY-SA 2.5', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.5', quelle: 'https://commons.wikimedia.org/wiki/File:5915_-_Brienz_-_Ballenberg_Dampfbahn_Brienz_(BDB)_208.JPG' },
      { src: 'bilder/zb-g34-c2.jpg', titel: 'G 3/4 208 der Brünigbahn', foto: 'unbekannt', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Historic_-_F_125_00001-055_-_G_3_4_208_(Bruenig).tif' }
    ] },
  { id: 'zb-hg33', kat: 'historisch', name: 'HG 3/3', beiname: '1067 und 1068', typ: 'Zahnrad-Dampflok der Brünigbahn (historisch)', bahn: 'zb', vorlaeufig: false,
    text: ['Die HG 3/3 zogen ab 1905 die Züge über den Brünig – mit Rädern im Tal und Zahnrad am Berg. Erhalten sind unter anderem die 1067 und 1068 der Brünig-Dampfbahn.', 'Die 1068 wurde nach einem Depotbrand wieder aufgebaut und fährt seit 2022 wieder.'],
    kennzahlen: [['18', 'Loks (1051–1068)'], ['1905', 'erste Loks'], ['40 km/h', 'Höchstgeschwindigkeit (Tal)'], ['13 km/h', 'auf Zahnstange']],
    daten: { 'Bauart': 'Dampflokomotive für Zahnrad und Adhäsion', 'Hersteller': 'SLM', 'Betreiber': 'SBB-Brünigbahn; heute Brünig-Dampfbahn', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '1051–1068', 'Höchstgeschwindigkeit': '40 km/h (Adhäsion), 13 km/h auf Zahnstange', 'Anzahl': '18', 'Erhalten': '1067 und 1068 (Brünig-Dampfbahn), 1063 (Verkehrshaus Luzern)', 'In Betrieb seit': '1905' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Höchstgeschwindigkeit', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Nach Wikipedia (SBB HG 3/3) und der Brünig-Dampfbahn. Die 1051–1067 entstanden 1905–1910, die 1068 im Jahr 1926 als Nachbau.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SLM baute ab 1905 die Loks 1051–1067; die 1068 folgte 1926 als Nachbau. Vier Zylinder treiben getrennt die Räder und das Zahnrad an.', 'Sie ersetzten die schwächeren HG 2/2. Mit der Elektrifizierung 1941 wurden sie überflüssig; die letzten (1065, 1067, 1068) wurden 1965 ausgemustert.'] },
      { titel: 'Einsatz und Technik', p: ['Die 1067 fährt seit 1972 bei der Ballenberg Dampfbahn, heute Brünig-Dampfbahn. Die 1068 stand zuerst als Denkmal in Meiringen, kam 2000 zur Dampfbahn und wurde 2013 bei einem Depotbrand schwer beschädigt. Nach dem Wiederaufbau fährt sie seit 2022 wieder; 2026 wurde sie 100 Jahre alt.', 'Die 1063 ist seit 1957 im Verkehrshaus Luzern, aufgeschnitten als Schauobjekt.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Vierzylinder-Antrieb für Räder und Zahnrad', 'Kann bergab mit dem Kessel voran fahren', 'Fahrten nach Programm und Freigabe der Brünig-Dampfbahn'] }
    ],
    quellen: ['Wikipedia – SBB HG 3/3', 'Brünig-Dampfbahn – Lok 1067 und Lok 1068', 'Brünig-Dampfbahn – Newsletter zur Wiederinbetriebnahme 2022 und zum Jubiläum 2026', ZB_Q],
    art: { typ: 'rangier', achsen: 3, farbe: ZB_DUNKEL, akzent: ZB_ROT, panto: false },
    bilder: [
      { src: 'bilder/zb-hg33-c1.jpg', titel: 'HG 3/3 1067 (2013)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Br%C3%BCnig_HG_1067_ready_to_couple_20130608Y535.jpg' },
      { src: 'bilder/zb-hg33-c2.jpg', titel: 'HG 3/3 1068 in Meiringen (1991)', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:00_714_Bf_Meiringen,_HG_3-3_1068.jpg' },
      { src: 'bilder/zb-hg33-c3.jpg', titel: 'Aufgeschnittene HG 3/3 1063 im Verkehrshaus Luzern (2007)', foto: 'Andrew Bossi', lizenz: 'CC BY-SA 2.5', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.5', quelle: 'https://commons.wikimedia.org/wiki/File:6263_-_Luzern_-_Verkehrshaus_-_SBB-CFF-FFS_HG_3-3_Cutaway.JPG' }
    ] },
  { id: 'zb-mib-akku', kat: 'historisch', name: 'CFa 2/2', beiname: 'Akkutriebwagen', typ: 'Akkutriebwagen der Meiringen–Innertkirchen-Bahn (historisch)', bahn: 'zb', vorlaeufig: false,
    text: ['Vor der Elektrifizierung 1977 fuhren auf der Strecke Meiringen–Innertkirchen Akkutriebwagen. Sie holten ihre Energie aus Batterien statt aus einer Fahrleitung.', 'Der Wagen 5 ist erhalten, die Nummer 4 steht im Verkehrshaus Luzern.'],
    kennzahlen: [['1926', 'Werkbahn eröffnet'], ['1946', 'Personenverkehr'], ['1939', 'Nr. 4 gebaut'], ['1977', 'Fahrleitung']],
    daten: { 'Bauart': 'Akkutriebwagen', 'Betreiber': 'Kraftwerke Oberhasli (KWO), MIB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': 'Akku (Batterie)', 'Fahrzeugnummern': 'CFa 2/2 4 und 5; der 5 heute auch BDa 125 005', 'Erhalten': '5 (historisches MIB-Fahrzeug), 4 (Verkehrshaus Luzern)', 'In Betrieb seit': '1939' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Nach der Zentralbahn und dem Katalog des Verkehrshauses. Für die beiden Akkutriebwagen nennen die Quellen kein gemeinsames gesichertes Baujahr; nur die Nummer 4 ist auf 1939 datiert.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Kraftwerke Oberhasli bauten die Strecke in den 1920er-Jahren als Werkbahn für den Kraftwerksbau; ab 1946 durfte sie auch Fahrgäste befördern. Gefahren wurde zuerst mit Dampf, dann mit Akkutriebwagen.'] },
      { titel: 'Einsatz und Technik', p: ['Die Akkutriebwagen beförderten Material und später auch Fahrgäste zwischen Meiringen und Innertkirchen. 1977 wurde die Strecke mit 1200 V Gleichstrom elektrifiziert; danach fuhren Triebwagen mit Stromabnehmer.', 'Der Wagen 5 wird heute als historisches MIB-Fahrzeug geführt (BDa 125 005).'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Batterieantrieb ohne Fahrleitung', 'Abteil für Fahrgäste', 'Erhalten: Nr. 5 und Nr. 4 (Verkehrshaus)'] }
    ],
    quellen: ['Zentralbahn – Rollmaterial', 'Verkehrshaus der Schweiz – Sammlung, Akkutriebwagen Nr. 4', 'Wikipedia – Meiringen-Innertkirchen-Bahn', ZB_Q],
    art: { typ: 'triebzug', nase: 'kurz', farbe: ZB_BRAUN, akzent: '#E8DCC8', tuer: ZB_DUNKEL, panto: false },
    bilder: [
      { src: 'bilder/zb-mib-akku-c1.jpg', titel: 'Akkutriebwagen CFa 2/2 5 in Innertkirchen (2021)', foto: 'Herbert Ortner', lizenz: 'CC BY 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:MIB_CFa_2-2_5_Innertkirchen_2021-08-18.jpg' },
      { src: 'bilder/zb-mib-akku-c2.jpg', titel: 'Akkutriebwagen 5 (um 1976)', foto: 'trams aux fils', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:Meiringen-Innertkirchen_KWO5.jpg' }
    ] },
  { id: 'zb-hist-wagen', kat: 'historisch', name: 'Historische Wagen', beiname: 'Brünig und LSE', typ: 'Historische Personen- und Restaurantwagen (historisch)', bahn: 'zb', vorlaeufig: false,
    text: ['Für Sonderfahrten sind zahlreiche alte Wagen der Brünigbahn erhalten: Holzwagen aus den 1920er-Jahren, Leichtstahlwagen wie der Landi-Wagen von 1939 und Restaurantwagen.', 'Sie gehören teils SBB Historic, teils Vereinen und sind nicht Teil der normalen Wagenflotte der Zentralbahn.'],
    kennzahlen: [['1925', 'ältester Wagen (A 260)'], ['1939', 'Landi-Wagen A 101'], ['80 km/h', 'Höchstgeschwindigkeit'], ['WR 426', 'Restaurantwagen']],
    daten: { 'Bauart': 'Historische Personen- und Restaurantwagen', 'Hersteller': 'SIG und andere', 'Betreiber': 'SBB Historic, zb Historic und Vereine', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Kein eigener Antrieb', 'Fahrzeugnummern': 'A 260, B 761, B 762, BC 451, BC 452, A 101, AB 473, A 111, A 181, B 865, WR 426, WR 825', 'Höchstgeschwindigkeit': 'meist 80 km/h' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Antrieb', 'Fahrzeugnummern', 'Höchstgeschwindigkeit'],
    specNote: 'Nach den Blättern des Vereins Engelbergbahn. Ein Museumsblatt bestätigt weder den heutigen Standort noch eine gültige Revision.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Vor der Klassenreform war C die 3. Klasse; die heutigen Buchstaben sagen darum nicht immer, wie ein Wagen früher eingerichtet war.'],
        tabelle: { kopf: ['Wagen', 'Baujahr', 'Länge', 'Plätze', 'Besonderheit'], zeilen: [
          ['A 260', '1925 (SIG)', '13,61 m', '36', '1. Klasse, Aufarbeitung vorgesehen'], ['B 761, B 762', '1927, 1928 (SIG)', '14,48 m', '60', 'Holzsitze, früher C 4805 und C 4808'],
          ['BC 451, BC 452', '1927 (SIG)', '14,48 m', '56', 'später Dienstwagen X 9985 und X 9988'], ['A 101', '1939', '16,47 m', '28', 'Landi-Wagen für die Landesausstellung'],
          ['AB 473', '1946', '16,47 m', '64', 'SBB Historic, Leichtstahlwagen'], ['A 111, A 181', '1947, 1949', '16,74 m', '34', '1. Klasse'],
          ['B 865', '1954', '16,74 m', '64', '2. Klasse'], ['WR 426', '1945, Umbau 1997', '16,74 m', '28', 'Restaurantwagen'], ['WR 825', '1931/32', '–', '–', 'später Rottenküche, beschädigt']] } },
      { titel: 'Einsatz und Technik', p: ['Die Wagen fahren in historischen Zügen, oft hinter dem Deh 4/6 oder Dampfloks der Brünig-Dampfbahn. Ob ein Wagen eine Zahnradbremse hat, hängt vom einzelnen Wagen ab und entscheidet, wo er fahren darf.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Holzsitze in den alten B-Wagen', 'Küche und Speiseraum im WR 426', 'Hochflurig, nicht stufenfrei', 'Kein eigener Antrieb'] }
    ],
    quellen: ['Verein Engelbergbahn – Blätter A 260, B 761, B 762, BC 451, BC 452, A 101, AB 473, A 111, A 181, B 865, WR 426 und WR 825', ZB_Q],
    art: { typ: 'wagen', farbe: ZB_GRUEN, akzent: '#E8DCC8' },
    bilder: [
      { src: 'bilder/zb-hist-wagen-c1.jpg', titel: 'Deh 4/6 914 mit den Wagen B 865, WR 426 und AB 473 in Meiringen (2013)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Br%C3%BCnigbahn_473-426-865-914_Meiringen.jpg' },
      { src: 'bilder/zb-hist-wagen-c2.jpg', titel: 'Restaurantwagen WR 426 (2013)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Br%C3%BCnigbahn_Speisewagen_426.jpg' }
    ] },
  { id: 'zb-lse-gueterwagen', kat: 'historisch', name: 'Güter- und Dienstwagen', beiname: 'LSE und Brünig', typ: 'Historische Güter-, Ski- und Dienstwagen (historisch)', bahn: 'zb', vorlaeufig: false,
    text: ['Die Bahnen am Brünig und nach Engelberg transportierten früher auch Güter. Erhalten sind unter anderem gedeckte Güterwagen der LSE, die später als Ski- und Velowagen dienten.', 'Dazu kommen Dienstwagen wie ein Werkzeugwagen und ein Kranwagen.'],
    kennzahlen: [['4', 'Hb-v 261–264'], ['1969', 'gebaut (Hb-v)'], ['16 t', 'Nutzlast'], ['8,5 t', 'Eigengewicht']],
    daten: { 'Bauart': 'Güter-, Ski- und Dienstwagen', 'Hersteller': 'SWS (Hb-v)', 'Betreiber': 'LSE, Brünigbahn', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Kein eigener Antrieb', 'Fahrzeugnummern': 'Hb-v 261–264; Haik-v 271, 272; Ua 9857; X 9742; Kranwagen', 'Länge': '9,49 m (Hb-v)', 'Gewicht': '8,5 t leer (Hb-v)', 'Nutzlast': '16 t (Hb-v)' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Antrieb', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Nutzlast'],
    specNote: 'Nach dem Archiv des Vereins Engelbergbahn. Es ist ein belegtes Bauartenregister, kein vollständiges Wagenverzeichnis; einen heutigen Güterverkehr der Zentralbahn belegt es nicht.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die vier gedeckten Güterwagen Hb-v 261–264 baute SWS 1969 für die Brünigbahn; die LSE übernahm sie. Die Schiebewandwagen Haik-v 271 und 272 entstanden aus Postwagen. Dazu kommt ein älterer Rollschemel Ua 9857.'] },
      { titel: 'Einsatz und Technik', p: ['Die Hb-v 261 und 262 wurden als Ski- und Velowagen eingerichtet, die anderen dienten als Lager. Der Werkzeugwagen X 9742 betreut heute historische Fahrzeuge. Für den alten Kranwagen nennt das Archiv zwei Nummern (X 9762 und X 9962).', 'Der C 827 von 1933 diente später als Material- und Kabelwagen und wurde abgebrochen.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Gedeckte Wagen mit Schiebetüren', 'Ski- und Velowagen (261, 262)', 'Werkzeug- und Kranwagen für den Dienst', 'Kein eigener Antrieb'] }
    ],
    quellen: ['Verein Engelbergbahn – LSE-Güterwagen', 'Verein Engelbergbahn – X 9742, Kranwagen und C 827', ZB_Q],
    art: { typ: 'wagen', geschlossen: true, farbe: ZB_BRAUN, akzent: ZB_DUNKEL },
    bilder: [] }
);
