/* RailBase – Fahrzeuge der SOB und ihrer Vorgängerbahnen BT, alte SOB und WE. Gleiche Form wie fahrzeuge.js, mit bahn: 'sob'. */
'use strict';

/* =====================================================================
   SOB (Schweizerische Südostbahn)
   Grundlage: Dossiers von HCKD (Oktober 2026), geprüft mit der
   Flottenseite der SOB, den SOB-Beiträgen «Die SOB-Flotte ist komplettiert»
   (2025) und «Abschied vom NPZ» (2025), dem Netzzustandsbericht 2024 und
   den Wikipedia-Artikeln zur SOB (1890) und SOB (2001).
   Nicht übernommen: Re 420 / Re 421, weil sie nicht als Eigentum der SOB
   belegt sind. Korrigiert: Revvivo-Wagennummern, Herkunft der Re 4/4 III.
   ===================================================================== */
const SOB_KUPFER = '#9A5B3A', SOB_SILBER = '#B9BEC3', SOB_GRAU = '#3A4047', BT_GRUEN = '#2F5D3A', BT_CREME = '#E8DCC8', SOB_ROT = '#B3262C';
ZUEGE.push(
  // ---------- Personenverkehr ----------
  { id: 'sob-traverso', kat: 'personenverkehr', name: 'RABe 526', beiname: 'Traverso', typ: 'Achtteiliger Stadler FLIRT 3 für Voralpen-Express, Treno Gottardo und Aare Linth', bahn: 'sob', vorlaeufig: false,
    text: ['Der kupferfarbene Traverso ist das bekannteste Fahrzeug der Südostbahn. Der achtteilige Niederflurzug fährt auf den langen SOB-Linien wie dem Voralpen-Express St. Gallen–Luzern und dem Treno Gottardo über die Gotthard-Bergstrecke.', 'Eine Einheit mit der Nummer 101/201 ist ein einziger achtteiliger Zug, nicht zwei Züge.'],
    kennzahlen: [['30', 'Züge in vier Serien'], ['160 km/h', 'Höchstgeschwindigkeit'], ['380', 'Sitzplätze inkl. Klappsitze'], ['2019', 'erster Einsatz']],
    daten: { 'Bauart': 'Elektrischer Niederflurtriebzug, 8 Wagen', 'Fahrzeugfamilie': 'FLIRT 3', 'Hersteller': 'Stadler Bussnang', 'Betreiber': 'SOB', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '526 101/201 bis 526 130/230', 'Länge': '150,2 m', 'Gewicht': '265 t leer', 'Leistung': '5200 kW', 'Höchstgeschwindigkeit': '160 km/h', 'Sitzplätze': '68 in der 1., 291 in der 2. Klasse, 21 Klappsitze', 'Anzahl': '30 Züge', 'In Betrieb seit': '2019' },
    specOrder: ['Bauart', 'Fahrzeugfamilie', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Vier Serien: 6 Züge (2019), 11 (2020), 7 (2021) und 6 (ab 2024). Mit dem letzten Zug war die Flotte im Mai 2025 komplett.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler Bussnang baute für die SOB 30 achtteilige Traverso. Sie kamen in vier Serien: 6 Züge 2019 (101–106), 11 im Jahr 2020 (107–117), 7 im Jahr 2021 (118–124) und 6 ab 2024 (125–130).', 'Der Traverso gehört zur Plattform FLIRT 3, wie die vierteiligen FLIRT 3 der SOB. Im Mai 2025 war die ganze Neubauflotte von 43 Zügen ausgeliefert.'] },
      { titel: 'Einsatz und Technik', p: ['Die ersten Traverso ersetzten ab 2019 die lokbespannten Revvivo-Züge des Voralpen-Express St. Gallen–Rapperswil–Arth-Goldau–Luzern. Seit Dezember 2020 fahren sie als Treno Gottardo von Basel und Zürich über die Gotthard-Bergstrecke nach Locarno, seit Dezember 2021 als Aare Linth Bern–Zürich–Chur und seit Dezember 2024 als Alpenrhein-Express St. Gallen–Chur.', 'Ein Zug ist 150,2 m lang, wiegt 265 t, leistet 5200 kW und fährt bis 160 km/h. Unterhalten wird die Flotte vor allem in Herisau.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Niederflureinstiege mit Schiebetritten', 'Rollstuhlgängiges WC', 'Klimaanlage', 'Akustische und optische Fahrgastinformation', 'Steckdosen', 'Veloabstellplätze', '380 Plätze: 68 in der 1., 291 in der 2. Klasse und 21 Klappsitze'],
        p: ['Dank Niederflur und Schiebetritten kommt man an den meisten Bahnsteigen ohne Stufe in den Zug.'] }
    ],
    quellen: ['SOB – Fahrzeugflotte: Traverso, technische Daten und Ausstattung', 'SOB – «Die SOB-Flotte ist komplettiert», 23. Mai 2025', 'Wikipedia – Schweizerische Südostbahn (2001), Linien und Fahrzeuge', 'Dossier HCKD «RABe 526 Traverso», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'mittel', farbe: SOB_KUPFER, akzent: SOB_GRAU, tuer: SOB_GRAU, panto: true },
    bilder: [
      { src: 'bilder/sob-traverso-c1.jpg', titel: 'Traverso als IR 46 Locarno–Zürich bei Wassen (2025)', foto: 'Kabelleger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_RABe_526_Wassen.jpg' },
      { src: 'bilder/sob-traverso-c2.jpg', titel: 'Traverso 105 in Kreuzlingen (2019)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_RABe_526_105_Traverso_in_Kreuzlingen.jpg' },
      { src: 'bilder/sob-traverso-c3.jpg', titel: 'Traverso 121 in Göschenen (2023)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_RABe_526_121_Goeschenen_021223.jpg' }
    ] },
  { id: 'sob-flirt3', kat: 'personenverkehr', name: 'RABe 526', beiname: 'FLIRT 3', typ: 'Vierteiliger Stadler FLIRT 3 in Silber', bahn: 'sob', vorlaeufig: false,
    text: ['Der silberne FLIRT 3 ist der kleine Bruder des Traverso. Er fährt allein auf S-Bahn- und Regionallinien oder verstärkt einen Traverso.', 'Alle 13 Züge tragen Bergnamen, vom «Bachtel» bis zum «Vilan».'],
    kennzahlen: [['13', 'Züge (001–013)'], ['160 km/h', 'Höchstgeschwindigkeit'], ['205', 'Sitzplätze inkl. Klappsitze'], ['2019', 'erster Einsatz']],
    daten: { 'Bauart': 'Elektrischer Niederflurtriebzug, 4 Wagen', 'Fahrzeugfamilie': 'FLIRT 3', 'Hersteller': 'Stadler', 'Betreiber': 'SOB', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '526 001–013', 'Länge': '77,10 m', 'Gewicht': '135 t leer', 'Leistung': '2600 kW', 'Höchstgeschwindigkeit': '160 km/h', 'Sitzplätze': '22 in der 1., 175 in der 2. Klasse, 8 Klappsitze', 'Anzahl': '13 Züge', 'In Betrieb seit': '2019' },
    specOrder: ['Bauart', 'Fahrzeugfamilie', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'In Betrieb gesetzt: 5 Züge 2019, 5 im Jahr 2021 und 3 im Jahr 2025.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler lieferte der SOB 13 vierteilige FLIRT 3 mit den Nummern 001–013: 5 Züge 2019, 5 im Jahr 2021 und 3 im Jahr 2025. Mit dem 13. Zug war im Mai 2025 die ganze Neubauflotte ausgeliefert.'] },
      { titel: 'Einsatz und Technik', p: ['Die FLIRT 3 fahren im S-Bahn- und Regionalverkehr der SOB und verstärken auf geeigneten Umläufen die Traverso. Welche Linie ein Zug fährt, wechselt mit Fahrplan und Umlauf.', 'Ein Zug ist 77,10 m lang, wiegt 135 t, leistet 2600 kW und fährt bis 160 km/h. Unterhalten werden die Züge in Herisau und Samstagern.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Niederflureinstiege mit Schiebetritten', 'Rollstuhlgängiges WC', 'Klimaanlage', 'Akustische und optische Fahrgastinformation', 'Steckdosen', 'Veloabstellplätze', '205 Plätze: 22 in der 1., 175 in der 2. Klasse und 8 Klappsitze'] },
      { titel: 'Die Namen', tabelle: { kopf: ['Nummer', 'Name', 'Nummer', 'Name'], zeilen: [
        ['001', 'Bachtel', '008', 'Vrenelisgärtli'], ['002', 'Calanda', '009', 'Sissacherflue'], ['003', 'Bristen', '010', 'Tödi'], ['004', 'Gurten', '011', 'Hirzli'],
        ['005', 'Pilatus', '012', 'Kuegrat'], ['006', 'Gitschen', '013', 'Vilan'], ['007', 'Pizzo di Claro', '', '']] } }
    ],
    quellen: ['SOB – Fahrzeugflotte: FLIRT 3, technische Daten, Ausstattung und Namen', 'SOB – «Die SOB-Flotte ist komplettiert», 23. Mai 2025', 'Dossier HCKD «RABe 526 FLIRT 3», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'mittel', farbe: SOB_SILBER, akzent: SOB_KUPFER, tuer: SOB_GRAU, panto: true },
    bilder: [
      { src: 'bilder/sob-flirt3-c1.jpg', titel: 'FLIRT 3 001 «Bachtel» in Biberbrugg (2020)', foto: 'SOB RABe 526', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_RABe_526_001_Biberbrugg.jpg' },
      { src: 'bilder/sob-flirt3-c2.jpg', titel: 'FLIRT 3 002 «Calanda» (2021)', foto: 'Nelso Silva from Porto, Portugal', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_RABe_526_002_(53617341999).jpg' }
    ] },
  { id: 'sob-flirt-1', kat: 'personenverkehr', name: 'RABe 526', beiname: 'FLIRT Serie 1', typ: 'Vierteiliger Stadler FLIRT der ersten Generation', bahn: 'sob', vorlaeufig: false,
    text: ['Mit den elf FLIRT von 2007 begann bei der SOB die Zeit der modernen Niederflurzüge. Sie lösten ältere Pendelzüge ab.', 'Jeder Zug trägt den Namen eines Bergs aus der Region, zum Beispiel «Mythen» oder «Churfirsten».'],
    kennzahlen: [['11', 'Züge (041–051)'], ['160 km/h', 'Höchstgeschwindigkeit'], ['214', 'Sitzplätze inkl. Klappsitze'], ['2007', 'erster Einsatz']],
    daten: { 'Bauart': 'Elektrischer Niederflurtriebzug, 4 Wagen', 'Fahrzeugfamilie': 'FLIRT', 'Hersteller': 'Stadler', 'Betreiber': 'SOB', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '526 041–051', 'Länge': '74,08 m', 'Gewicht': '120 t leer', 'Leistung': '2600 kW', 'Höchstgeschwindigkeit': '160 km/h', 'Sitzplätze': '24 in der 1., 152 in der 2. Klasse, 38 Klappsitze', 'Anzahl': '11 Züge', 'In Betrieb seit': '2007' },
    specOrder: ['Bauart', 'Fahrzeugfamilie', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Die SOB nennt die technischen Werte für die Serien 1 und 2 gemeinsam.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler lieferte die elf Züge der ersten Serie 2007. Zusammen mit den zwölf Zügen der Serie 2 von 2013 hat die SOB 23 FLIRT der ersten Generation. Beide Gruppen heissen RABe 526, wie die neueren FLIRT 3, unterscheiden sich aber in Baujahr und Ausführung.', 'In den 2020er-Jahren werden die Züge revidiert; dabei erneuert die SOB unter anderem die Fahrgastinformation.'] },
      { titel: 'Einsatz und Technik', p: ['Die FLIRT fahren im Regional- und S-Bahn-Verkehr der SOB in der Ost- und Zentralschweiz. Die genaue Linie wechselt mit Fahrplan, Bauarbeiten und Umläufen.', 'Ein Zug ist 74,08 m lang, wiegt 120 t, leistet 2600 kW und fährt bis 160 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Niederflureinstiege', 'Rollstuhlgängiges WC', 'Klimaanlage', 'Fahrgastinformation', 'Veloabstellplätze', 'Steckdosen nur in der 1. Klasse', '214 Plätze: 24 in der 1., 152 in der 2. Klasse und 38 Klappsitze'] },
      { titel: 'Die Namen', tabelle: { kopf: ['Nummer', 'Name', 'Nummer', 'Name'], zeilen: [
        ['041', 'Mythen', '047', 'Rossberg'], ['042', 'Chrüzberg', '048', 'Kronberg'], ['043', 'Churfirsten', '049', 'Hochstuckli'], ['044', 'Morgartenberg', '050', 'Alvier'],
        ['045', 'Federispitz', '051', 'Zimmerberg'], ['046', 'Ringelspitz', '', '']] } }
    ],
    quellen: ['SOB – Fahrzeugflotte: FLIRT, technische Daten, Ausstattung und Namen', 'SOB – «Die erste FLIRT-Generation der SOB wird fit gemacht»', 'Dossier HCKD «RABe 526 FLIRT Serie 1», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'mittel', farbe: SOB_SILBER, akzent: SOB_GRAU, tuer: SOB_GRAU, panto: true },
    bilder: [
      { src: 'bilder/sob-flirt-1-c1.jpg', titel: 'RABe 526 050 «Alvier» in Buchs SG (2023)', foto: 'Moliva', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_RABe_526_050-0_Alvier_Buchs_SG_20230712.jpg' },
      { src: 'bilder/sob-flirt-1-c2.jpg', titel: 'RABe 526 049 «Hochstuckli» als S4 (2021)', foto: 'Nelso Silva from Porto, Portugal', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_RABe_526_049_(51703101549).jpg' },
      { src: 'bilder/sob-flirt-1-c3.jpg', titel: 'RABe 526 041 «Mythen» in Wattwil (2010)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Wattwil_20100918Y316_526041.jpg' }
    ] },
  { id: 'sob-flirt-2', kat: 'personenverkehr', name: 'RABe 526', beiname: 'FLIRT Serie 2', typ: 'Vierteiliger Stadler FLIRT, zweite Serie von 2013', bahn: 'sob', vorlaeufig: false,
    text: ['Mit zwölf weiteren FLIRT wuchs die moderne Regionalflotte der SOB 2013 auf 23 Züge. Technisch entsprechen sie der ersten Serie.', 'Auch sie tragen Bergnamen, vom «Schnabelsberg» bis zum «Alpstein».'],
    kennzahlen: [['12', 'Züge (052–063)'], ['160 km/h', 'Höchstgeschwindigkeit'], ['214', 'Sitzplätze inkl. Klappsitze'], ['2013', 'erster Einsatz']],
    daten: { 'Bauart': 'Elektrischer Niederflurtriebzug, 4 Wagen', 'Fahrzeugfamilie': 'FLIRT', 'Hersteller': 'Stadler', 'Betreiber': 'SOB', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '526 052–063', 'Länge': '74,08 m', 'Gewicht': '120 t leer', 'Leistung': '2600 kW', 'Höchstgeschwindigkeit': '160 km/h', 'Sitzplätze': '24 in der 1., 152 in der 2. Klasse, 38 Klappsitze', 'Anzahl': '12 Züge', 'In Betrieb seit': '2013' },
    specOrder: ['Bauart', 'Fahrzeugfamilie', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Die SOB nennt die technischen Werte für die Serien 1 und 2 gemeinsam.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler lieferte die zwölf Züge der zweiten Serie 2013. Sie beruhen auf dem gleichen vierteiligen Konzept wie die Serie 1 von 2007; die SOB beschreibt beide Serien gemeinsam.'] },
      { titel: 'Einsatz und Technik', p: ['Die FLIRT fahren im Regional- und S-Bahn-Verkehr der SOB in der Ost- und Zentralschweiz. Die genaue Linie wechselt mit Fahrplan, Bauarbeiten und Umläufen.', 'Ein Zug ist 74,08 m lang, wiegt 120 t, leistet 2600 kW und fährt bis 160 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Niederflureinstiege', 'Rollstuhlgängiges WC', 'Klimaanlage', 'Fahrgastinformation', 'Veloabstellplätze', 'Steckdosen nur in der 1. Klasse', '214 Plätze: 24 in der 1., 152 in der 2. Klasse und 38 Klappsitze'] },
      { titel: 'Die Namen', tabelle: { kopf: ['Nummer', 'Name', 'Nummer', 'Name'], zeilen: [
        ['052', 'Schnabelsberg', '058', 'Speer'], ['053', 'Etzel', '059', 'St. Anton'], ['054', 'Hoher Kasten', '060', 'Hundwiler Höhi'], ['055', 'Mürtschenstock', '061', 'Rigi Kulm'],
        ['056', 'Pizol', '062', 'Chapfenberg'], ['057', 'Gonzen', '063', 'Alpstein']] } }
    ],
    quellen: ['SOB – Fahrzeugflotte: FLIRT, technische Daten, Ausstattung und Namen', 'Dossier HCKD «RABe 526 FLIRT Serie 2», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'mittel', farbe: SOB_SILBER, akzent: SOB_GRAU, tuer: SOB_GRAU, panto: true },
    bilder: [
      { src: 'bilder/sob-flirt-2-c1.jpg', titel: 'RABe 526 056 «Pizol» in Uznach (2023)', foto: 'Kecko from Eastern Switzerland', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:RABe_526_056_in_Uznach.jpg' },
      { src: 'bilder/sob-flirt-2-c2.jpg', titel: 'RABe 526 063 «Alpstein» in Unterterzen (2014)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_RABe_526_063-3_Unterterzen_290314.jpg' }
    ] },
  // ---------- Infrastruktur ----------
  { id: 'sob-tm-234', kat: 'infrastruktur', name: 'Tm 234', beiname: 'Robel', typ: 'Arbeits- und Interventionsfahrzeug der SOB-Infrastruktur', bahn: 'sob', vorlaeufig: false,
    text: ['Die vier Robel sind selbstfahrende Arbeitsfahrzeuge. Sie bringen Material auf Baustellen, helfen bei Arbeiten an Gleis, Fahrleitung und Signalen und räumen im Winter Schnee.', 'Alle vier sind nach Brücken und Viadukten der SOB benannt, zum Beispiel «Sitterviadukt».'],
    kennzahlen: [['4', 'Fahrzeuge (501–504)'], ['100 km/h', 'Höchstgeschwindigkeit'], ['720 kW', 'Leistung'], ['2015', 'erster Einsatz']],
    daten: { 'Bauart': 'Selbstfahrendes Arbeits- und Interventionsfahrzeug', 'Hersteller': 'Robel', 'Betreiber': 'SOB Infrastruktur', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '98 85 5234 501–504', 'Länge': '15,140 m (Serie 1), 15,138 m (Serie 2)', 'Gewicht': '38,1 t (Serie 1), 39,1 t (Serie 2)', 'Leistung': '720 kW', 'Höchstgeschwindigkeit': '100 km/h', 'Anzahl': '4', 'In Betrieb seit': '2015' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die SOB hat vier Fahrzeuge von Robel: Die Serie 1 mit den Nummern 501–503 kam 2015, die Serie 2 mit der 504 im Jahr 2019.'],
        tabelle: { kopf: ['Nummer', 'Name', 'Serie', 'Jahr'], zeilen: [['501', 'Sitterviadukt', '1', '2015'], ['502', 'Kapftobelbrücke II', '1', '2015'], ['503', 'Thurviadukt I', '1', '2015'], ['504', 'Kirchtobelviadukt II', '2', '2019']] } },
      { titel: 'Einsatz und Technik', p: ['Die Robel arbeiten vor allem auf dem SOB-Netz. Die SOB setzt sie auch für andere Bahnen ein, etwa bei Signalarbeiten der SBB am Flughafen Zürich und bei Fahrleitungsarbeiten am Uetliberg. Im Winter räumen sie mit Pflug und Bürste Schnee.', 'Ein Fahrzeug leistet bis 720 kW und fährt bis 100 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Ladefläche für Material', 'Ausrüstung je nach Auftrag, zum Beispiel Kran', 'Im Winter mit Schneepflug und Bürste'],
        p: ['Die Robel sind Dienstfahrzeuge. Fahrgäste fahren nicht mit.'] }
    ],
    quellen: ['SOB – Fahrzeugflotte: Robel, technische Daten und Namen', 'SOB – «SOB-Robel im Einsatz für die SBB» (2025)', 'SOB – «Wettlauf mit Frau Holle», Winterdienst', 'Dossier HCKD «Tm 234 Robel», Oktober 2026'],
    art: { typ: 'rangier', farbe: YEL, panto: false, kran: true },
    bilder: [
      { src: 'bilder/sob-tm-234-c1.jpg', titel: 'Robel 501 «Sitterviadukt» in Schachen (2016)', foto: 'SOB Suedostbahn from Schweiz', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_Tm_234_501_2016-06_Schachen.jpg' }
    ] },
  { id: 'sob-dienstwagen', kat: 'infrastruktur', gruppe: 'Schienentransport', name: 'Dienstwagen', beiname: 'SOB', typ: 'Wagen für den Unterhalt des SOB-Netzes', bahn: 'sob', vorlaeufig: false,
    text: ['Die SOB besitzt 26 Dienstwagen für den Unterhalt ihres Netzes. Mit ihnen werden Schienen, Bauteile und Material zu Baustellen gebracht.', 'Sie sind keine Güterwagen für Kunden: Die SOB betreibt keinen eigenen Güterverkehr.'],
    kennzahlen: [['26', 'Dienstwagen (2024)'], ['3,2 Mio. CHF', 'Wiederbeschaffungswert'], ['Unterhalt', 'Einsatz'], ['SOB', 'Infrastruktur']],
    daten: { 'Bauart': 'Dienstwagen verschiedener Bauarten', 'Betreiber': 'SOB Infrastruktur', 'Spurweite': 'Normalspur, 1435 mm', 'Anzahl': '26 (Netzzustandsbericht 2024)', 'Wiederbeschaffungswert': '3,2 Mio. CHF (2024)', 'Einsatz': 'Unterhalt und Baustellen' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Anzahl', 'Wiederbeschaffungswert', 'Einsatz'],
    specNote: 'Die SOB veröffentlicht keine Liste der einzelnen Wagen mit Bauart und Nummer. Darum stehen hier keine Wagennummern.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Der Netzzustandsbericht 2024 der SOB zählt 26 Dienstwagen mit einem Wiederbeschaffungswert von 3,2 Millionen Franken. Dazu kommen die vier Robel als Triebfahrzeuge.', 'Welche Wagenbauarten und Nummern dazugehören, schlüsselt der Bericht nicht auf.'] },
      { titel: 'Einsatz und Technik', p: ['Die Wagen dienen dem Unterhalt der Bahnanlagen und der Versorgung von Baustellen, zum Beispiel für den Transport von Schienen, Bauteilen und Material. Sie fahren meist zusammen mit den Robel.'] },
      { titel: 'Ausstattung und Zugänglichkeit', p: ['Je nach Wagen gibt es Ladeflächen oder andere Aufbauten für Material. Es sind reine Arbeitswagen ohne Fahrgastraum.'] }
    ],
    quellen: ['SOB – Netzzustandsbericht 2024, Abschnitt 10.2 Schienenfahrzeuge', 'Dossier HCKD «Infrastruktur-Dienstwagen», Oktober 2026'],
    art: { typ: 'wagen', var: 'flach', farbe: YEL, akzent: '#2E3338' },
    bilder: [] },
  // ---------- Historische Personenzüge ----------
  { id: 'sob-rbde-561', kat: 'historisch', name: 'RBDe 561', beiname: 'NPZ Süd', typ: 'Zweiteiliger Neuer Pendelzug der alten SOB (historisch)', bahn: 'sob', vorlaeufig: false,
    text: ['Die vier NPZ Süd fuhren 30 Jahre für die SOB, zuletzt als «March-Shuttle» S27 zwischen Siebnen-Wangen und Ziegelbrücke. Im Oktober 2025 nahm die SOB sie aus dem Verkehr.', 'Jeder Zug legte rund drei Millionen Kilometer zurück.'],
    kennzahlen: [['4', 'Züge (081–084)'], ['140 km/h', 'Höchstgeschwindigkeit'], ['120', 'Sitzplätze'], ['1995–2025', 'im Einsatz']],
    daten: { 'Bauart': 'Pendelzug aus Triebwagen RBDe und Steuerwagen ABt', 'Frühere Bezeichnung': 'RBDe 566', 'Hersteller': 'SWA, SIG, ABB', 'Betreiber': 'SOB (historisch)', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': 'RBDe 561 081–084 mit ABt 181–184; Reserve RBDe 561 174', 'Länge': 'rund 50 m', 'Gewicht': 'rund 116 t (Triebwagen 70 t)', 'Leistung': '1650 kW', 'Höchstgeschwindigkeit': '140 km/h', 'Sitzplätze': '24 in der 1., 96 in der 2. Klasse', 'Anzahl': '4 Züge', 'In Betrieb seit': '1995', 'Ausmusterung': 'Oktober 2025' },
    specOrder: ['Bauart', 'Frühere Bezeichnung', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit', 'Ausmusterung'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die alte Südostbahn bestellte 1993 vier NPZ nach SBB-Bauart; sie gingen 1995 in Betrieb. Ein Zug besteht aus einem Triebwagen RBDe und einem Steuerwagen ABt. Später wurden die Triebwagen von RBDe 566 in RBDe 561 umgezeichnet.', '2014 kaufte die SOB von der SBB den RBDe 561 174 als Reserve dazu. Er ging im Herbst 2024 an den Verein MThB-NPZ. Den RBDe 561 082 mit dem ABt 182 übernahm Ende 2025 ein Erhaltungsverein.'] },
      { titel: 'Einsatz und Technik', p: ['Zuerst fuhren die NPZ Süd auf Regionalstrecken wie Wädenswil–Einsiedeln, Rapperswil–Samstagern und Biberbrugg–Arth-Goldau, später auch im Voralpen-Express. Danach übernahmen sie die S27 Siebnen-Wangen–Ziegelbrücke, bis die SOB sie im Oktober 2025 ausser Dienst stellte.', 'Ein Zug ist rund 50 m lang, wiegt rund 116 t, leistet 1650 kW und fährt bis 140 km/h. Der Triebwagen allein wiegt 70 t.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['120 Sitzplätze: 24 in der 1. und 96 in der 2. Klasse', 'Pneumatische Türen', 'Keine Klimaanlage', 'Keine Niederflureinstiege'],
        p: ['Weil die Züge Stufen haben und das Behindertengleichstellungsgesetz stufenloses Einsteigen verlangt, wäre ein Umbau zu teuer geworden. Das war ein wichtiger Grund für das Ende.'] }
    ],
    quellen: ['SOB – «Abschied vom NPZ – ein Zug, der Generationen bewegte», 3. Oktober 2025', 'Erhaltungsverein SOB-NPZ – Fahrzeugdaten', 'Dossier HCKD «RBDe 561 NPZ Süd», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: W1, akzent: SOB_ROT, tuer: SOB_GRAU, panto: true },
    bilder: [
      { src: 'bilder/sob-rbde-561-c1.jpg', titel: 'RBDe 561 083 mit dem Voralpen-Express in Rapperswil (2013)', foto: 'NAC', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_RBDe_561083_Rapperswil_261213_VAE2422.jpg' },
      { src: 'bilder/sob-rbde-561-c2.jpg', titel: 'NPZ Süd in Ziegelbrücke (2022)', foto: 'Kecko from Eastern Switzerland', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:Ziegelbr%C3%BCcke_-_SOB_RBDe_561_ABt_561_(51810156785).jpg' },
      { src: 'bilder/sob-rbde-561-c3.jpg', titel: 'Innenraum des RBDe 561 082 (2013)', foto: 'NAC', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_RBDe561082-9_VAE2422_261213.jpg' }
    ] },
  { id: 'sob-abt-npz-sued', kat: 'historisch', name: 'ABt', beiname: 'NPZ Süd', typ: 'Steuerwagen der NPZ Süd (historisch)', bahn: 'sob', vorlaeufig: false,
    text: ['Die Steuerwagen ABt 181–184 bildeten mit den Triebwagen RBDe 561 die NPZ Süd. Vom Führerstand im Steuerwagen aus fährt man den Zug, ohne den Triebwagen umzusetzen.', 'Sie fuhren von 1995 bis Oktober 2025.'],
    kennzahlen: [['4', 'Steuerwagen (181–184)'], ['140 km/h', 'im NPZ-Zug'], ['1995', 'Baujahr'], ['2025', 'Ende im Verkehr']],
    daten: { 'Bauart': 'Steuerwagen mit Führerstand und Fahrgastraum', 'Frühere Nummern': 'ABt 901–904', 'Betreiber': 'SOB (historisch)', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': 'ABt 181–184', 'Höchstgeschwindigkeit': '140 km/h im NPZ-Zug', 'Antrieb': 'kein eigener Antrieb', 'Anzahl': '4', 'In Betrieb seit': '1995', 'Ausmusterung': 'Oktober 2025' },
    specOrder: ['Bauart', 'Frühere Nummern', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Höchstgeschwindigkeit', 'Antrieb', 'Anzahl', 'In Betrieb seit', 'Ausmusterung'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die SOB erhielt die vier Steuerwagen 1995 zusammen mit den vier Triebwagen der NPZ Süd. Früher trugen sie die Nummern 901–904.', 'Der ABt 182 wurde Ende 2025 zusammen mit dem RBDe 561 082 von einem Erhaltungsverein übernommen.'] },
      { titel: 'Einsatz und Technik', p: ['Der Steuerwagen bildet das eine Ende des Pendelzugs. Über eine Steuerleitung bedient das Lokpersonal von hier aus den Triebwagen am anderen Zugende. Einen eigenen Antrieb hat der Wagen nicht.', 'Die Wagen fuhren auf den gleichen Linien wie die NPZ Süd, zuletzt auf der S27 Siebnen-Wangen–Ziegelbrücke.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Plätze in der 1. und 2. Klasse', 'Führerstand an einem Wagenende', 'Pneumatische Türen', 'Keine Niederflureinstiege, keine Klimaanlage'] }
    ],
    quellen: ['SOB – «Abschied vom NPZ», 3. Oktober 2025', 'Erhaltungsverein SOB-NPZ – Fahrzeugdaten', 'Dossier HCKD «ABt-Steuerwagen NPZ Süd», Oktober 2026'],
    art: { typ: 'wagen', farbe: W1, akzent: SOB_ROT },
    bilder: [
      { src: 'bilder/sob-abt-npz-sued-c1.jpg', titel: 'NPZ Süd aus Triebwagen und Steuerwagen ABt in Ziegelbrücke (2022)', foto: 'Kecko from Eastern Switzerland', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:Ziegelbr%C3%BCcke_-_SOB_RBDe_561_ABt_561_(51810156785).jpg' }
    ] },
  { id: 'sob-rbde-566', kat: 'historisch', name: 'RBDe 566', beiname: 'NPZ Ost', typ: 'Privatbahn-NPZ der Bodensee-Toggenburg-Bahn (historisch)', bahn: 'sob', vorlaeufig: false,
    text: ['Die sechs NPZ Ost kamen von der Bodensee-Toggenburg-Bahn (BT). Mit der Fusion von BT und alter SOB im Jahr 2001 gehörten sie zur neuen Südostbahn.', 'Sie fuhren bis 2019/2020 im Regionalverkehr der Ostschweiz.'],
    kennzahlen: [['6', 'Triebwagen (071–076)'], ['1981–1983', 'gebaut'], ['2001', 'zur neuen SOB'], ['2019/20', 'Ende im Verkehr']],
    daten: { 'Bauart': 'Pendelzug aus Triebwagen, Zwischenwagen und Steuerwagen', 'Frühere Bezeichnung': 'BT RBDe 4/4 71–76', 'Hersteller': 'FFA, SIG, BBC', 'Betreiber': 'BT, ab 2001 SOB (historisch)', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': 'RBDe 566 071–076', 'Anzahl': '6 Triebwagen', 'In Betrieb seit': '1981–1983', 'Ausmusterung': '2019/2020' },
    specOrder: ['Bauart', 'Frühere Bezeichnung', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Anzahl', 'In Betrieb seit', 'Ausmusterung'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die BT beschaffte Anfang der 1980er-Jahre sechs Privatbahn-NPZ mit den Triebwagen RBDe 4/4 71–76, dazu Zwischenwagen B und Steuerwagen ABt 171–176. Gebaut wurden sie von FFA, SIG und BBC.', 'Zuerst trugen die Züge die grün-cremen Farben der BT, später Rot und Grau. Mit der Fusion 2001 kamen sie als RBDe 566 071–076 zur SOB.'] },
      { titel: 'Einsatz und Technik', p: ['Die Züge fuhren im Regionalverkehr auf dem früheren BT-Netz zwischen Romanshorn, St. Gallen, Herisau, Wattwil und Nesslau. Später liefen Wagen dieser Züge auch im Voralpen-Express mit.', 'Mit den neuen FLIRT wurden sie überflüssig; der planmässige Einsatz endete 2019/2020. Einzelne Fahrzeuge kamen zu Erhaltungsprojekten oder dienten als Ersatzteilspender.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Zuglänge je nach Bedarf mit Zwischenwagen', 'Plätze in der 1. und 2. Klasse', 'Gepäckabteil im Triebwagen (Buchstabe D)', 'Hochflurige Einstiege mit Stufen'] }
    ],
    quellen: ['SOB – «Abschied vom NPZ», 3. Oktober 2025', 'Wikipedia – Schweizerische Südostbahn (2001), Rollmaterial', 'Wikimedia Commons – Fotos RBDe 566 072 und ABt 172 in Herisau (2003)', 'Dossier HCKD «RBDe 566 NPZ Ost», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: SOB_ROT, akzent: '#8A939B', tuer: SOB_GRAU, panto: true },
    bilder: [
      { src: 'bilder/sob-rbde-566-c1.jpg', titel: 'RBDe 566 072 mit BT-Signet in Herisau (2003)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20030509P67Herisau.JPG' },
      { src: 'bilder/sob-rbde-566-c2.jpg', titel: 'RBDe 566 072, B 374 und ABt 172 in Herisau (2003)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20030509P64Herisau.JPG' }
    ] },
  { id: 'sob-abt-npz-ost', kat: 'historisch', name: 'ABt', beiname: 'NPZ Ost', typ: 'Steuerwagen der BT-Pendelzüge (historisch)', bahn: 'sob', vorlaeufig: false,
    text: ['Die Steuerwagen ABt 171–176 gehörten zu den sechs NPZ Ost der Bodensee-Toggenburg-Bahn. Sie bildeten das eine Ende des Pendelzugs.', 'Ihr Einsatz endete mit den NPZ Ost 2019/2020.'],
    kennzahlen: [['6', 'Steuerwagen (171–176)'], ['1982', 'Baujahr'], ['ohne', 'eigenen Antrieb'], ['2019/20', 'Ende im Verkehr']],
    daten: { 'Bauart': 'Steuerwagen mit Führerstand und Fahrgastraum', 'Betreiber': 'BT, ab 2001 SOB (historisch)', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': 'ABt 171–176', 'Antrieb': 'kein eigener Antrieb', 'Anzahl': '6', 'In Betrieb seit': '1982', 'Ausmusterung': '2019/2020' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Antrieb', 'Anzahl', 'In Betrieb seit', 'Ausmusterung'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die BT beschaffte die sechs Steuerwagen 1982 zusammen mit ihren NPZ. 2001 kamen sie mit der Fusion zur SOB. Einzelne Wagen gingen später als Ersatzteilspender oder zur Erhaltung an andere.'] },
      { titel: 'Einsatz und Technik', p: ['Über die Steuerleitung bedient das Lokpersonal vom Steuerwagen aus den Triebwagen am anderen Zugende. So kann der Zug die Richtung wechseln, ohne umzusetzen.', 'Die Wagen fuhren im Regionalverkehr auf dem früheren BT-Netz in der Ostschweiz.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Plätze in der 1. und 2. Klasse', 'Führerstand an einem Wagenende', 'Hochflurige Einstiege mit Stufen'] }
    ],
    quellen: ['SOB – «Abschied vom NPZ», 3. Oktober 2025', 'Wikipedia – Schweizerische Südostbahn (2001), Rollmaterial', 'Dossier HCKD «ABt-Steuerwagen NPZ Ost», Oktober 2026'],
    art: { typ: 'wagen', farbe: SOB_ROT, akzent: '#8A939B' },
    bilder: [
      { src: 'bilder/sob-abt-npz-ost-c1.jpg', titel: 'ABt 172 mit SOB-Signet und B 374 in Herisau (2003)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20030509P66Herisau.JPG' }
    ] },
  { id: 'sob-revvivo', kat: 'historisch', name: 'Revvivo', beiname: 'Wagen', typ: 'Modernisierte Reisezugwagen des Voralpen-Express (historisch)', bahn: 'sob', vorlaeufig: false,
    text: ['Revvivo hiessen die aufgefrischten Reisezugwagen des alten Voralpen-Express. Eine Lok zog sie zwischen St. Gallen und Luzern über die SOB-Strecke.', 'Ab 2019 ersetzte der Traverso diese lokbespannten Züge.'],
    kennzahlen: [['3', 'Wagenarten: A, B, BR'], ['1997–2000', 'umgebaut'], ['ohne', 'eigenen Antrieb'], ['2019/20', 'ersetzt']],
    daten: { 'Bauart': 'Modernisierte Reisezugwagen', 'Wagenarten': 'A (1. Klasse), B (2. Klasse), BR (Bistro)', 'Betreiber': 'SOB (historisch)', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': 'unter anderem A 520–522, B 800–805 und 808–809, BR 771', 'Antrieb': 'kein eigener Antrieb', 'Umbau': '1997–2000', 'Ausmusterung': '2019–2020' },
    specOrder: ['Bauart', 'Wagenarten', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Antrieb', 'Umbau', 'Ausmusterung'],
    specNote: 'Die im Dossier genannten Nummern A 711–718, B 721–734 und BR 741–747 liessen sich nicht belegen. Die Nummern hier folgen Wikipedia.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Revvivo war kein neuer Wagen, sondern ein Umbauprogramm: Von 1997 bis 2000 frischte die SOB ältere Wagen verschiedener Herkunft auf. Dazu gehörten Wagen der 1. Klasse (A), der 2. Klasse (B) und Bistrowagen (BR).', 'Nach dem Ende im Voralpen-Express gingen Wagen unter anderem an den Train des mouettes in Frankreich und an MÁV Nosztalgia in Ungarn.'] },
      { titel: 'Einsatz und Technik', p: ['Die Wagen fuhren im Voralpen-Express St. Gallen–Rapperswil–Arth-Goldau–Luzern. Gezogen wurden sie von Re 446 und Re 456, später auch zwischen zwei NPZ-Triebwagen.', 'Mit dem Traverso endeten diese Züge 2019 und 2020.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Überarbeitete Innenräume', 'Teilweise klimatisiert', 'Bistrowagen BR', 'Hochflurige Einstiege mit Stufen'] }
    ],
    quellen: ['Wikipedia – Voralpen-Express, Fahrzeuge', 'Wikipedia – Schweizerische Südostbahn (2001), Rollmaterial', 'Wikimedia Commons – Fotos des Voralpen-Express mit Revvivo-Wagen (2013–2014)', 'Dossier HCKD «Revvivo-Reisezugwagen», Oktober 2026'],
    art: { typ: 'wagen', farbe: '#7A1F1F', akzent: BT_CREME },
    bilder: [
      { src: 'bilder/sob-revvivo-c1.jpg', titel: 'Voralpen-Express mit Revvivo-Wagen zwischen Biberbrugg und Altmatt (2014)', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_Re_456_Voralpenexpress_Biberbrugg_-_Altmatt.jpg' },
      { src: 'bilder/sob-revvivo-c2.jpg', titel: 'Revvivo-Wagen zwischen zwei NPZ-Triebwagen in Biberbrugg (2013)', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_RBDe_561_Biberbrugg.jpg' }
    ] },
  { id: 'sob-ew-iv', kat: 'historisch', name: 'EW IV', beiname: 'SOB', typ: 'Klimatisierte Einheitswagen IV des Voralpen-Express (historisch)', bahn: 'sob', vorlaeufig: false,
    text: ['Anfang der 1990er-Jahre erhielt der Voralpen-Express ein neues Gesicht, auch mit eigenen klimatisierten Einheitswagen IV der SOB.', 'Im Jahr 2000 verkaufte die SOB die vier Wagen an die SBB.'],
    kennzahlen: [['4', 'Wagen'], ['1991', 'geliefert'], ['ohne', 'eigenen Antrieb'], ['2000', 'an die SBB']],
    daten: { 'Bauart': 'Einheitswagen IV, Sitzwagen', 'Betreiber': 'SOB (historisch)', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': 'A 120, B 250–252', 'Antrieb': 'kein eigener Antrieb', 'Anzahl': '4 Wagen', 'In Betrieb seit': '1991', 'Verbleib': '2000 an die SBB verkauft' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Antrieb', 'Anzahl', 'In Betrieb seit', 'Verbleib'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die SOB besass einen Wagen der 1. Klasse (A 120) und drei der 2. Klasse (B 250–252). Sie wurden 1991 geliefert und 2000 an die SBB verkauft.', 'Nicht jeder EW IV im Voralpen-Express gehörte der SOB; als SOB-Bestand gelten nur diese vier Wagen.'] },
      { titel: 'Einsatz und Technik', p: ['Die Wagen fuhren im Voralpen-Express zwischen Luzern und dem Bodensee, gezogen von einer Lok. Später folgten die Revvivo-Wagen und schliesslich der Traverso.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Klimaanlage', 'Wagen der 1. und 2. Klasse', 'Hochflurige Einstiege mit Stufen'] }
    ],
    quellen: ['Wikipedia – Schweizerische Südostbahn (1890), Wagen', 'Wikipedia – Voralpen-Express, Fahrzeuge', 'Dossier HCKD «Einheitswagen IV», Oktober 2026'],
    art: { typ: 'wagen', farbe: BT_GRUEN, akzent: BT_CREME },
    bilder: [] },
  { id: 'sob-ew-i-ii', kat: 'historisch', name: 'EW I / EW II', beiname: 'SOB und BT', typ: 'Ältere Einheitswagen im Verkehr von SOB und BT (historisch)', bahn: 'sob', vorlaeufig: false,
    text: ['Bevor moderne Triebzüge kamen, fuhren SOB und BT lange mit Einheitswagen I und II. Diese Wagen waren in der ganzen Schweiz verbreitet.', 'Heute gibt es bei der SOB keinen regulären Verkehr mehr mit diesen Wagen.'],
    kennzahlen: [['EW I + II', 'Wagenfamilien'], ['ohne', 'eigenen Antrieb'], ['1435 mm', 'Normalspur'], ['SOB + BT', 'Bahnen']],
    daten: { 'Bauart': 'Reisezugwagen der Familien EW I und EW II', 'Betreiber': 'SOB und BT (historisch)', 'Spurweite': 'Normalspur, 1435 mm', 'Antrieb': 'kein eigener Antrieb', 'Einsatz': 'Lokbespannte Personenzüge' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Antrieb', 'Einsatz'],
    specNote: 'Die einzelnen Wagen und Nummern sind nicht vollständig dokumentiert. EW I und EW II sind zwei verschiedene Bauarten; die Werte unterscheiden sich je Wagen.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['EW I und EW II sind zwei Familien von Schweizer Einheitswagen. SOB und BT besassen solche Wagen, teils umgebaut oder mit besonderen Aufgaben, etwa als Steuerwagen.', 'Eine vollständige Liste der SOB- und BT-Wagen ist nicht veröffentlicht.'] },
      { titel: 'Einsatz und Technik', p: ['Die Wagen fuhren im Regional- und Direktverkehr und im frühen Voralpen-Express, gezogen von Lokomotiven oder Triebwagen. Oft liefen verschiedene Wagenbauarten im gleichen Zug.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Wagen der 1. und 2. Klasse, je nach Bauart', 'Hochflurige Einstiege mit Stufen'], p: ['Ausstattung und Masse unterscheiden sich je nach Bauart und Umbau.'] }
    ],
    quellen: ['Wikipedia – Schweizerische Südostbahn (2001), Rollmaterial', 'Wikipedia – Voralpen-Express, Fahrzeuge', 'Dossier HCKD «Einheitswagen I / II», Oktober 2026'],
    art: { typ: 'wagen', farbe: BT_GRUEN, akzent: BT_CREME },
    bilder: [
      { src: 'bilder/sob-ew-i-ii-c1.jpg', titel: 'SOB-Wagen B 50 85 20-35 753-6 in Rapperswil (2014)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_B_50_85_20-35_753-6_CH-SOB_Rapperswil_260114.jpg' }
    ] },
  { id: 'sob-bde-576', kat: 'historisch', name: 'BDe 4/4', beiname: 'BDe 576', typ: 'Hochleistungstriebwagen von SOB und BT (historisch)', bahn: 'sob', vorlaeufig: false,
    text: ['Die kräftigen BDe 4/4 zogen ab 1959 die Pendel- und Direktzüge von SOB und BT über die steilen Voralpenstrecken. Neben dem Fahrgastraum hatten sie ein Gepäckabteil.', 'Ab 2007 verdrängten die FLIRT sie nach und nach.'],
    kennzahlen: [['1959', 'erster Triebwagen'], ['SOB 80–87', 'Nummern alte SOB'], ['BT 50–53', 'Nummern BT'], ['ab 2007', 'abgelöst']],
    daten: { 'Bauart': 'Elektrischer Triebwagen mit 2. Klasse und Gepäckabteil', 'Betreiber': 'SOB und BT (historisch)', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': 'SOB 80–87, BT 50–53; später BDe 576 048–059', 'In Betrieb seit': '1959', 'Baujahre': '1959–1979, mehrere Serien' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'In Betrieb seit', 'Baujahre'],
    specNote: 'Die Serien unterscheiden sich in Front und Technik. Eine gemeinsame Leistungsangabe gibt es darum nicht.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Der erste Triebwagen war der ABe 4/4 71 der SOB von 1959; 1979 wurde er zum BDe 4/4 80 umgebaut. Dazu kamen bei der SOB die BDe 4/4 81–87 und bei der BT die BDe 4/4 50–53. Später erhielten sie die Nummern BDe 576 048–059.', 'Einzelne Triebwagen blieben erhalten oder gingen an andere Besitzer. Den BDe 576 058 behielt die SOB als technische Reserve in Samstagern.'] },
      { titel: 'Einsatz und Technik', p: ['Die BDe 4/4 waren für schwere Züge auf den steilen Strecken der «Direkten Linie» gebaut. Sie fuhren im Regionalverkehr, im Vorgänger des Voralpen-Express und als Verstärkung auf steilen Abschnitten.', 'Ab 2007 lösten die FLIRT und später die Traverso sie im Alltag ab.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Fahrgastraum 2. Klasse', 'Gepäckabteil', 'Hochflurige Einstiege mit Stufen'] }
    ],
    quellen: ['Wikipedia – Schweizerische Südostbahn (1890) und (2001), Rollmaterial', 'Wikipedia – Voralpen-Express', 'Wikimedia Commons – Foto ABe 4/4 71 im Ablieferungszustand 1959', 'Dossier HCKD «BDe 4/4 / BDe 576», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: SOB_ROT, akzent: BT_CREME, tuer: SOB_GRAU, panto: true },
    bilder: [
      { src: 'bilder/sob-bde-576-c1.jpg', titel: 'BDe 576 049 in Biberbrugg (2007)', foto: 'Kabelleger / David Gubler', lizenz: 'Gemeinfrei', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:Bde_4-4_biberbrugg.jpg' },
      { src: 'bilder/sob-bde-576-c2.jpg', titel: 'BT BDe 4/4 53 bei Sattel (1983)', foto: 'J.J.Smit', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:BT_BDe_4-4_Sattel.png' },
      { src: 'bilder/sob-bde-576-c3.jpg', titel: 'BT BDe 576 052 «Krummenau» in Nesslau (1998)', foto: 'Phil Richards from London, UK', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:14.11.98_Nesslau-Neu_St_Johann_BT_576.052_(6912337013).jpg' },
      { src: 'bilder/sob-bde-576-c4.jpg', titel: 'ABe 4/4 71 im Ablieferungszustand 1959, später BDe 4/4 80', foto: 'Unbekannt', lizenz: 'Gemeinfrei', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:Schweizerische_S%C3%BCdostbahn_ABe_4_4_80_im_Ablieferungszustand_1959.jpg' }
    ] },
  { id: 'sob-abe-4-4', kat: 'historisch', name: 'ABe 4/4', beiname: 'CFZe / BCFZe', typ: 'Elektrische Triebwagen der alten SOB von 1939/40 (historisch)', bahn: 'sob', vorlaeufig: false,
    text: ['Mit der Elektrifizierung kaufte die alte SOB 1939 und 1940 acht elektrische Triebwagen: die BCFZe 4/4 1–4 und die CFZe 4/4 11–14. Nach Umbauten hiessen viele von ihnen ABe 4/4.', 'Der Triebwagen 5 ist bis heute erhalten.'],
    kennzahlen: [['8', 'Triebwagen'], ['1939/40', 'geliefert'], ['80 km/h', 'Höchstgeschwindigkeit'], ['735 kW', 'Stundenleistung']],
    daten: { 'Bauart': 'Elektrischer Triebwagen Bo’Bo’', 'Frühere Bezeichnung': 'BCFZe 4/4 1–4 und CFZe 4/4 11–14', 'Hersteller': 'SLM mit SIG oder SWS; MFO, BBC, SAAS', 'Betreiber': 'SOB (historisch)', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '19,6 m', 'Gewicht': '44 t, nach Modernisierung 47 t', 'Leistung': '735 kW (Stundenleistung)', 'Höchstgeschwindigkeit': '80 km/h', 'Sitzplätze': '9 (später 6) in der 1., 44 in der 2. Klasse', 'Anzahl': '8', 'In Betrieb seit': '1939' },
    specOrder: ['Bauart', 'Frühere Bezeichnung', 'Hersteller', 'Betreiber', 'Spurweite', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Zur Elektrifizierung lieferten SLM, SIG oder SWS und MFO, BBC und SAAS 1939 und 1940 acht Triebwagen in zwei Ausführungen: BCFZe 4/4 1–4 und CFZe 4/4 11–14. Die Buchstaben stammen aus dem alten Klassen-, Gepäck- und Postsystem.', 'Am 26. Juli 1946 stiessen die 3 und die 12 bei Bennau zusammen. Die 12 wurde danach zum BCe 4/4 5 umgebaut; als Triebwagen 5 erhält ihn seit 2008 der Verein Historischer Triebwagen 5. Die 11 und die 13 gingen an die Sensetalbahn. Die 1, 2, 4 und 6 (ex 14) wurden 1978 bis 1982 modernisiert und fuhren danach als ABe 4/4 14, 13, 11 und 12. Die ABe 4/4 11 dient seit 2001 als Tunnelkino.'] },
      { titel: 'Einsatz und Technik', p: ['Die Triebwagen fuhren Personenzüge und gemischte Züge auf den elektrifizierten Strecken der alten SOB.', 'Sie sind 19,6 m lang, leisten 735 kW und fahren bis 80 km/h. Ursprünglich wogen sie 44 t, nach der Modernisierung 47 t.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Ursprünglich 9 Plätze in der 1. und 44 in der 2. Klasse, nach der Modernisierung 6 in der 1. Klasse', 'Ursprünglich mit Gepäck- und Postabteil', 'Hochflurige Einstiege mit Stufen'] }
    ],
    quellen: ['Wikipedia – SOB CFZe 4/4', 'Verein Historischer Triebwagen 5 – Geschichte', 'Wikipedia – Schweizerische Südostbahn (1890)', 'Dossier HCKD «ABe 4/4 / CFZe / BCFZe», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: SOB_ROT, akzent: BT_CREME, tuer: SOB_GRAU, panto: true },
    bilder: [
      { src: 'bilder/sob-abe-4-4-c1.jpg', titel: 'ABe 4/4 5 mit einem Personenzug in Biberbrugg (1988)', foto: 'J.J.Smit', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_ABe_4-4_5.JPG' },
      { src: 'bilder/sob-abe-4-4-c2.jpg', titel: 'ABe 4/4 12 in Biberbrugg (1992)', foto: 'J.J.Smit', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_ABe_4-4_12.JPG' },
      { src: 'bilder/sob-abe-4-4-c3.jpg', titel: 'Ehemalige ABe 4/4 11 als Tunnelkino in Gänsbrunnen (2017)', foto: 'Anidaat', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_CFZe_4-4_Cine_Tunnel.jpg' }
    ] },
  { id: 'sob-de-4-4', kat: 'historisch', name: 'De 4/4', beiname: '21 und 22', typ: 'Gepäcktriebwagen mit SBB-Vergangenheit (historisch)', bahn: 'sob', vorlaeufig: false,
    text: ['Die alte SOB setzte zwei elektrische Gepäcktriebwagen ein, die De 4/4 21 und 22. Sie stammten von der SBB und waren dort RFe 4/4.', 'Die 21 ging 1994 an Classic Rail, die 22 wurde 1997 abgebrochen.'],
    kennzahlen: [['2', 'Triebwagen'], ['1940', 'ursprünglich gebaut'], ['90 km/h', 'Höchstgeschwindigkeit'], ['ex SBB', 'RFe 4/4']],
    daten: { 'Bauart': 'Elektrischer Gepäcktriebwagen', 'Herkunft': 'SBB RFe 4/4 603 und 602', 'Hersteller': 'SIG, SLM, BBC, MFO, SAAS', 'Betreiber': 'SOB (historisch)', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': 'De 4/4 21 und 22', 'Höchstgeschwindigkeit': '90 km/h', 'Anzahl': '2', 'In Betrieb seit': '1940 (bei der SBB)' },
    specOrder: ['Bauart', 'Herkunft', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Triebwagen entstanden 1940 als RFe 4/4 der SBB. Die SOB übernahm zwei davon: die frühere 603 als De 4/4 21 und die 602 als De 4/4 22.', 'Die 21 ging 1994 an Classic Rail, die 22 wurde 1997 abgebrochen.'] },
      { titel: 'Einsatz und Technik', p: ['Die De 4/4 transportierten Gepäck und zogen weitere Wagen im Betrieb der SOB. Sie hatten vier angetriebene Achsen und fuhren bis 90 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Grosses Gepäckabteil', 'Kein Fahrgastraum'], p: ['Als Gepäcktriebwagen nahmen sie keine Fahrgäste mit.'] }
    ],
    quellen: ['Wikipedia – Schweizerische Südostbahn (1890), Triebwagen', 'Wikimedia Commons – Fotos De 4/4 22 in Samstagern (1983) und Einsiedeln (1985)', 'Dossier HCKD «De 4/4», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: SOB_ROT, akzent: '#8A939B', tuer: SOB_GRAU, panto: true },
    bilder: [
      { src: 'bilder/sob-de-4-4-c1.jpg', titel: 'De 4/4 22 in Einsiedeln (1985)', foto: 'J.J.Smit', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_De_4-4_22.JPG' },
      { src: 'bilder/sob-de-4-4-c2.jpg', titel: 'De 4/4 22 in roter Farbe in Samstagern (1983)', foto: 'J.J.Smit', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_De_4-4_22_rot.JPG' }
    ] },
  { id: 'bt-be-4-4', kat: 'historisch', name: 'Be 4/4', beiname: 'BT 11–16', typ: 'Elektrolokomotive der Bodensee-Toggenburg-Bahn (historisch)', bahn: 'sob', vorlaeufig: false,
    text: ['Die sechs Be 4/4 der Bodensee-Toggenburg-Bahn zogen ab 1931 Personen- und Güterzüge, auch auf der «Direkten Linie» über Wattwil und Rapperswil.', 'Die Be 4/4 11 ist als historische Lok erhalten.'],
    kennzahlen: [['6', 'Lokomotiven (11–16)'], ['80 km/h', 'Höchstgeschwindigkeit'], ['66 t', 'Gewicht'], ['1931', 'erster Einsatz']],
    daten: { 'Bauart': 'Elektrolokomotive Bo’Bo’', 'Hersteller': 'SLM (Mechanik), SAAS (Elektrik)', 'Betreiber': 'BT, später SOB (historisch)', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': 'BT 11–16', 'Länge': '12,00 m', 'Gewicht': '66 t', 'Leistung': 'rund 1200 kW (Stundenleistung)', 'Höchstgeschwindigkeit': '80 km/h', 'Anzahl': '6', 'In Betrieb seit': '1931' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die BT kaufte 1931 und 1932 sechs Lokomotiven. Den mechanischen Teil baute die SLM, die elektrische Ausrüstung die SAAS.', 'Einzelne Loks erlebten noch die Fusion zur neuen SOB 2001. Die ehemalige Be 416 011 wurde 2015 verkauft.'] },
      { titel: 'Einsatz und Technik', p: ['Die Be 4/4 führten lange Personenzüge auf der «Direkten Linie» und Güterzüge. Mit den neuen Triebwagen und den Re 456 verloren sie ihre Hauptaufgaben und blieben für Reserve- und Sonderfahrten.', 'Die Lok ist 12,00 m lang, wiegt 66 t und fährt bis 80 km/h. Für Steigungen ausgelegt, war sie später für schnelle Züge zu langsam.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Vier Achsen mit Einzelachsantrieb', 'Zwei Führerstände', 'Kein Fahrgastraum'] }
    ],
    quellen: ['Wikipedia – SAAS Be 4/4', 'Wikipedia – Schweizerische Südostbahn (2001), Rollmaterial', 'Dossier HCKD «Be 4/4 (BT / SOB)», Oktober 2026'],
    art: { typ: 'lok', form: 'kantig', kurz: true, farbe: BT_GRUEN, panto: true },
    bilder: [
      { src: 'bilder/bt-be-4-4-c1.jpg', titel: 'Be 4/4 11 mit dem Ausstellungszug «75 Jahre BT» in St. Gallen St. Fiden (1985)', foto: 'J.J.Smit', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Be_4-4_11_mit_Ausstellungszug_75_Jahre_BT.JPG' },
      { src: 'bilder/bt-be-4-4-c2.jpg', titel: 'Historische Be 4/4 11 und Te 216 035 in Herisau (2012)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Historische_E-Lok_Be_4-4_BT-11_und_Rangierlok_SOB_Te_216_035_in_Herisau_AR_(2012).jpg' }
    ] },
  { id: 'bt-be-3-4', kat: 'historisch', name: 'Be 3/4', beiname: 'Tino', typ: 'Historischer Triebwagen BT 43 der Bodensee-Toggenburg-Bahn', bahn: 'sob', vorlaeufig: false,
    text: ['Der «Tino» ist der Triebwagen 43 der Bodensee-Toggenburg-Bahn. Er wurde mehrmals umgebaut und trug darum mehrere Bezeichnungen.', '2001 gab die SOB ihn an Eurovapor ab.'],
    kennzahlen: [['1', 'Triebwagen (BT 43)'], ['1938', 'gebaut'], ['1982', 'umgebaut'], ['2001', 'an Eurovapor']],
    daten: { 'Bauart': 'Elektrischer Triebwagen', 'Frühere Bezeichnungen': 'BCFe 2/4, BCFe 3/4', 'Betreiber': 'BT (historisch)', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': 'BT 43', 'Anzahl': '1', 'In Betrieb seit': '1938', 'Umbau': '1982', 'Verbleib': '2001 an Eurovapor' },
    specOrder: ['Bauart', 'Frühere Bezeichnungen', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Anzahl', 'In Betrieb seit', 'Umbau', 'Verbleib'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Der Triebwagen entstand 1938 als BCFe 2/4. Umbauten änderten die Zahl der angetriebenen Achsen; daraus wurden zuerst der BCFe 3/4 und später der Be 3/4. 1982 wurde er umgebaut.', '2001 gab die SOB den «Tino» an Eurovapor ab.'] },
      { titel: 'Einsatz und Technik', p: ['Der Triebwagen fuhr Regionalzüge auf dem BT-Netz und später historische Fahrten, etwa als «Amor-Express» bei Wattwil. Er gehört zu den wenigen vierachsigen Normalspur-Triebwagen mit nur drei angetriebenen Achsen.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Fahrgastraum', 'Hochflurige Einstiege mit Stufen'], p: ['Weitere technische Werte sind ohne Datenblatt des Umbaus nicht sicher belegt.'] }
    ],
    quellen: ['Wikipedia – Schweizerische Südostbahn (2001), Rollmaterial', 'Wikimedia Commons – Fotos BT 43 bei Wattwil (2010) und in St. Gallen (2013)', 'Dossier HCKD «Be 3/4 Tino», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: BT_GRUEN, akzent: BT_CREME, tuer: SOB_GRAU, panto: true },
    bilder: [
      { src: 'bilder/bt-be-3-4-c1.jpg', titel: 'BT 43 als «Amor-Express» bei Wattwil (2010)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:BT_3-4_Nr._43.jpg' },
      { src: 'bilder/bt-be-3-4-c2.jpg', titel: 'BT 43 in St. Gallen (2013)', foto: 'Urs Nötzli', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:BT_BDe_3-4_43.jpg' }
    ] },
  // ---------- Historische Lokomotiven ----------
  { id: 'sob-re-446', kat: 'historisch', name: 'Re 446', beiname: 'ex Re 4/4 IV', typ: 'Elektrolokomotive des Voralpen-Express (historisch)', bahn: 'sob', vorlaeufig: false,
    text: ['Die vier Re 446 waren ursprünglich Prototypen der SBB, die Re 4/4 IV 10101–10104. Bei der SOB wurden sie zu den bekannten Zugloks des Voralpen-Express.', '2019 verkaufte die SOB alle vier an die Eisenbahndienstleister GmbH (EDG).'],
    kennzahlen: [['4', 'Lokomotiven'], ['160 km/h', 'Höchstgeschwindigkeit'], ['4960 kW', 'Leistung'], ['1982', 'gebaut']],
    daten: { 'Bauart': 'Elektrolokomotive Bo’Bo’', 'Frühere Bezeichnung': 'SBB Re 4/4 IV 10101–10104', 'Hersteller': 'SLM, BBC', 'Betreiber': 'SOB (historisch)', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '445–448, ab 2001 Re 446 015–018', 'Länge': '15,8 m', 'Gewicht': '80 t', 'Leistung': 'rund 4960 kW', 'Höchstgeschwindigkeit': '160 km/h', 'Anzahl': '4', 'In Betrieb seit': '1982 (bei der SBB)', 'Verbleib': '2019 an EDG verkauft' },
    specOrder: ['Bauart', 'Frühere Bezeichnung', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit', 'Verbleib'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SLM und BBC bauten 1982 vier Prototypen Re 4/4 IV für die SBB. Von 1994 bis 1996 kamen sie zur alten SOB, im Tausch gegen deren vier Re 4/4 III.', 'Bei der SOB trugen sie zuerst die Nummern 445–448, nach der Fusion 2001 die Nummern Re 446 015–018. Mit den Traverso wurden sie überflüssig und gingen 2019 an die EDG.'] },
      { titel: 'Einsatz und Technik', p: ['Die Re 446 zogen den Voralpen-Express zwischen Luzern und St. Gallen, mit verschiedenen Wagen und Steuerwagen.', 'Die Lok ist 15,8 m lang, wiegt 80 t, leistet rund 4960 kW und fährt bis 160 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Zwei Führerstände', 'Kein Fahrgastraum'], p: ['Als Lok hatte die Re 446 keinen Fahrgastraum; die Zugänglichkeit hing von den gezogenen Wagen ab.'] }
    ],
    quellen: ['SOB – Medienmitteilung «SOB verkauft vier Lokomotiven», Februar 2019', 'Wikipedia – Schweizerische Südostbahn (2001), Rollmaterial', 'Wikipedia – Voralpen-Express', 'Dossier HCKD «Re 446», Oktober 2026'],
    art: { typ: 'lok', form: 'kantig', farbe: SOB_ROT, akzent: '#8A939B', panto: true },
    bilder: [
      { src: 'bilder/sob-re-446-c1.jpg', titel: 'Re 446 017 und 015 mit dem Voralpen-Express bei Küssnacht (2015)', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_Re_446_017_mit_VAE_in_K%C3%BCssnacht.jpg' },
      { src: 'bilder/sob-re-446-c2.jpg', titel: 'Re 446 017 mit dem Voralpen-Express in St. Gallen (2017)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_446_017_mit_Voralpenexpress_in_St._Gallen.jpg' },
      { src: 'bilder/sob-re-446-c3.jpg', titel: 'Re 446 mit dem Voralpen-Express beim Rickentunnel (2016)', foto: 'Plutowiki', lizenz: 'CC0', lizenzUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_Re_446_Rickentunnel.JPG' }
    ] },
  { id: 'sob-re-456', kat: 'historisch', name: 'Re 456', beiname: 'BT Re 4/4 91–96', typ: 'Elektrolokomotive der BT und der SOB (historisch)', bahn: 'sob', vorlaeufig: false,
    text: ['Die sechs Re 456 kamen 1987 als moderne Lokomotiven zur Bodensee-Toggenburg-Bahn. Später prägten sie bei der SOB das Bild des Voralpen-Express.', '2021 verkaufte die SOB ihre letzten sechs Re 456.'],
    kennzahlen: [['6', 'eigene Loks'], ['130 km/h', 'Höchstgeschwindigkeit'], ['3200 kW', 'Dauerleistung'], ['1987', 'erster Einsatz']],
    daten: { 'Bauart': 'Elektrolokomotive Bo’Bo’ mit Umrichtertechnik', 'Frühere Bezeichnung': 'BT Re 4/4 91–96', 'Hersteller': 'SLM, BBC', 'Betreiber': 'BT, ab 2001 SOB (historisch)', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': 'Re 456 091–096', 'Länge': '16,6 m', 'Gewicht': 'rund 68 t', 'Leistung': '3200 kW (Dauerleistung)', 'Höchstgeschwindigkeit': '130 km/h', 'Anzahl': '6', 'In Betrieb seit': '1987', 'Verbleib': '2021 verkauft' },
    specOrder: ['Bauart', 'Frühere Bezeichnung', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit', 'Verbleib'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SLM und BBC bauten die sechs Loks 1987 für die BT als Re 4/4 91–96. 2001 kamen alle sechs zur neuen SOB, als Re 456 091–096. Von 2002 bis 2011 mietete die SOB zusätzlich die Re 456 142 und 143; diese gehörten ihr nicht.', '2021 verkaufte die SOB die sechs eigenen Loks: 091 und 092 an die SZU, 094 und 095 an Erhalter historischer Fahrzeuge, 093 und 096 an einen Investor.'],
        tabelle: { kopf: ['Nummer', 'Name', 'Verbleib 2021'], zeilen: [['091', 'Voralpen-Express', 'SZU'], ['092', 'Siemens', 'SZU'], ['093', 'Sersa', 'Investor'], ['094', 'Vögele Shoes', 'historisch'], ['095', '100 Jahre Romanshorn-Uznach', 'historisch'], ['096', 'Voralpen-Express', 'Investor']] } },
      { titel: 'Einsatz und Technik', p: ['Die Re 456 zogen Personenzüge und den Voralpen-Express, zuerst mit verschiedenen Wagen, später mit den Revvivo-Wagen. Für die steilen Strecken von BT und SOB halfen die hohe Zugkraft und die moderne Umrichtertechnik.', 'Die Lok ist 16,6 m lang, wiegt rund 68 t, leistet 3200 kW dauernd und fährt bis 130 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Zwei Führerstände', 'Kein Fahrgastraum'], p: ['Als Lok hatte die Re 456 keinen Fahrgastraum; die Zugänglichkeit hing von den gezogenen Wagen ab.'] }
    ],
    quellen: ['Bahnonline.ch – «SOB verkauft je zwei Re 456 an SZU und DSF» (2021)', 'Wikipedia – SLM Re 456', 'Wikipedia – Schweizerische Südostbahn (2001), Rollmaterial', 'Dossier HCKD «Re 456», Oktober 2026'],
    art: { typ: 'lok', form: 'kantig', farbe: SOB_ROT, akzent: '#8A939B', panto: true },
    bilder: [
      { src: 'bilder/sob-re-456-c1.jpg', titel: 'Zwei Re 456 mit dem Voralpen-Express auf dem Weissenbachviadukt bei Degersheim (2014)', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_Re_456_Weissenbachviadukt_Degersheim.jpg' },
      { src: 'bilder/sob-re-456-c2.jpg', titel: 'Re 456 096 mit dem Voralpen-Express in Herisau (2019)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_Re_456_096_in_Herisau_(2019).jpg' },
      { src: 'bilder/sob-re-456-c3.jpg', titel: 'Re 456 im Jubiläumskleid «100 Jahre Rickenbahn» zwischen Immensee und Arth-Goldau (2010)', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_Voralpenexpress_zwischen_Immensee_und_Arth-Goldau.jpg' },
      { src: 'bilder/sob-re-456-c4.jpg', titel: 'Re 456 mit dem Voralpen-Express zwischen Blumenau und Schmerikon (2007)', foto: 'Kabelleger / David Gubler', lizenz: 'Gemeinfrei', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_Re_456_mit_Voralpenexpress.jpg' }
    ] },
  { id: 'sob-re-4-4-iii', kat: 'historisch', name: 'Re 4/4 III', beiname: 'SOB 41–44', typ: 'Elektrolokomotive für die steilen Rampen der alten SOB (historisch)', bahn: 'sob', vorlaeufig: false,
    text: ['Für ihre steilen Strecken brauchte die alte SOB viel Zugkraft. 1966 wurde für sie die Re 4/4 III 41 gebaut, später kamen drei weitere von der SBB dazu.', 'Von 1994 bis 1996 tauschte die SOB die vier Loks gegen die vier Re 4/4 IV der SBB.'],
    kennzahlen: [['4', 'Lokomotiven (41–44)'], ['125 km/h', 'Höchstgeschwindigkeit'], ['rund 80 t', 'Gewicht'], ['1994–96', 'an die SBB']],
    daten: { 'Bauart': 'Elektrolokomotive Bo’Bo’', 'Hersteller': 'SLM, BBC, MFO, SAAS', 'Betreiber': 'SOB (historisch)', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '41–44 (42–44 ex SBB 11351–11353)', 'Gewicht': 'rund 80 t', 'Höchstgeschwindigkeit': '125 km/h', 'Anzahl': '4', 'In Betrieb seit': '1966 (Nr. 41)', 'Verbleib': '1994–1996 an die SBB getauscht' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Gewicht', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit', 'Verbleib'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Re 4/4 III 41 wurde 1966 eigens für die SOB gebaut und ist etwas anders als die SBB-Serie. Die 42–44 wurden 1970 als SBB 11351–11353 gebaut und kamen von 1983 bis 1985 gebraucht zur SOB.', 'Von 1994 bis 1996 tauschte die SOB die vier Loks gegen die vier Prototypen Re 4/4 IV der SBB, die spätere Re 446. Zurück bei der SBB gehörten die Loks zur Reihe Re 430.'] },
      { titel: 'Einsatz und Technik', p: ['Die Loks zogen Personen- und Güterzüge auf den steilen Abschnitten der alten SOB. Die Re 4/4 III ist im Vergleich zur Re 4/4 II auf Zugkraft ausgelegt und dafür langsamer: Sie fährt bis 125 km/h und wiegt rund 80 t.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Zwei Führerstände', 'Kein Fahrgastraum'], p: ['Als Lok hatte die Re 4/4 III keinen Fahrgastraum; die Zugänglichkeit hing von den gezogenen Wagen ab.'] }
    ],
    quellen: ['Wikipedia – Schweizerische Südostbahn (1890), Lokomotiven', 'Wikipedia – SBB Re 4/4 III', 'Dossier HCKD «Re 4/4 III (später Re 430)», Oktober 2026'],
    art: { typ: 'lok', form: 'kantig', farbe: SOB_ROT, akzent: '#8A939B', panto: true },
    bilder: [] },
  { id: 'sob-ae-476', kat: 'historisch', name: 'Ae 476', beiname: 'ex DB 142', typ: 'Elektrolokomotive deutscher Herkunft (historisch)', bahn: 'sob', vorlaeufig: false,
    text: ['In den 1990er-Jahren kaufte die alte SOB fünf gebrauchte Elektroloks der deutschen Baureihe 142, früher E 42 der Reichsbahn. Bei der SOB hiessen sie Ae 476.', 'Bis auf eine gab die SOB sie schon 1996 weiter.'],
    kennzahlen: [['5', 'Lokomotiven (465–469)'], ['1965–1976', 'gebaut'], ['1996', 'vier verkauft'], ['2008', 'letzte verkauft']],
    daten: { 'Bauart': 'Elektrolokomotive Bo’Bo’', 'Herkunft': 'DR E 42 / DB 142', 'Hersteller': 'LEW Hennigsdorf', 'Betreiber': 'SOB (historisch)', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '465–469; die 468 später 476 012', 'Anzahl': '5', 'In Betrieb seit': '1965–1976 gebaut', 'Verbleib': '1996 an die LAG, die 468 2008 an die WAB' },
    specOrder: ['Bauart', 'Herkunft', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Anzahl', 'In Betrieb seit', 'Verbleib'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Loks wurden von 1965 bis 1976 für die Deutsche Reichsbahn gebaut und hiessen später DB 142. Die alte SOB übernahm fünf davon und führte sie als Ae 476 465–469.', '1996 gingen alle ausser der 468 an die LAG. Die 468 blieb und fuhr nach der Fusion als Ae 476 012; 2008 kam sie zur WAB.'] },
      { titel: 'Einsatz und Technik', p: ['Die Ae 476 brachten der SOB zusätzliche Zugkraft. Sie waren für das deutsche und schweizerische Stromsystem mit 15 kV und 16,7 Hz gebaut und wurden für den Betrieb in der Schweiz angepasst.', 'Weil die Loks aus verschiedenen Baujahren und Umbauten stammen, gibt es keine einheitliche Datentabelle.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Zwei Führerstände', 'Kein Fahrgastraum'], p: ['Als Lok hatte die Ae 476 keinen Fahrgastraum; die Zugänglichkeit hing von den gezogenen Wagen ab.'] }
    ],
    quellen: ['Wikipedia – Schweizerische Südostbahn (1890) und (2001), Lokomotiven', 'Dossier HCKD «Ae 476», Oktober 2026'],
    art: { typ: 'lok', form: 'kantig', farbe: SOB_ROT, akzent: '#8A939B', panto: true },
    bilder: [
      { src: 'bilder/sob-ae-476-c1.jpg', titel: 'Ae 476 468 in Biberbrugg (1999)', foto: 'Phil Richards from London, UK', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:10.12.99_Biberbrugg_SOB_476.468_(6164121498).jpg' }
    ] },
  { id: 'sob-e-3-3', kat: 'historisch', name: 'E 3/3', beiname: '1–11', typ: 'Dampflokomotiven der Wädenswil–Einsiedeln-Bahn und der alten SOB (historisch)', bahn: 'sob', vorlaeufig: false,
    text: ['Die E 3/3 waren die Dampfloks der Wädenswil–Einsiedeln-Bahn und der alten SOB. Sie stehen für die Zeit vor der Elektrifizierung.', 'Die letzten wurden bis 1954 ausgemustert.'],
    kennzahlen: [['11', 'Lokomotiven'], ['1878', 'erste Lok'], ['C', 'drei gekuppelte Achsen'], ['1940–1954', 'ausgemustert']],
    daten: { 'Bauart': 'Dampf-Tenderlokomotive', 'Achsfolge': 'C', 'Hersteller': 'Maschinenfabrik Esslingen (1–4), SLM (5–11)', 'Betreiber': 'Wädenswil–Einsiedeln-Bahn und SOB (historisch)', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '1–11', 'Anzahl': '11', 'In Betrieb seit': '1878', 'Ausmusterung': '1940–1954' },
    specOrder: ['Bauart', 'Achsfolge', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Anzahl', 'In Betrieb seit', 'Ausmusterung'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Lokomotiven 1–4 baute die Maschinenfabrik Esslingen von 1878 bis 1887 für die Wädenswil–Einsiedeln-Bahn. Die Nummern 5–11 lieferte die SLM 1891.', 'Die Maschinen 1–4 und 5–11 unterscheiden sich in Details.'] },
      { titel: 'Einsatz und Technik', p: ['Als kurze Tenderloks zogen sie Personen- und Güterzüge auf dem frühen Netz und rangierten. Wasser und Kohle führten sie auf der Lok selbst mit.', 'Die Elektrifizierung machte sie überflüssig; ausgemustert wurden sie zwischen 1940 und 1954.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Drei gekuppelte Achsen', 'Wasser- und Kohlevorrat auf der Lok', 'Kein Fahrgastraum'] }
    ],
    quellen: ['Wikipedia – SOB E 3/3', 'Wikipedia – Schweizerische Südostbahn (1890)', 'Dossier HCKD «E 3/3», Oktober 2026'],
    art: { typ: 'lok', form: 'kantig', kurz: true, farbe: '#1C1F22', panto: false },
    bilder: [
      { src: 'bilder/sob-e-3-3-c1.jpg', titel: 'E 3/3 Nr. 1 «Wädensweil» der Wädenswil–Einsiedeln-Bahn (1878–1890)', foto: 'Autor unbekannt', lizenz: 'Gemeinfrei', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:WE-E3-3Nr1.jpg' }
    ] },
  { id: 'sob-ed-4-5', kat: 'historisch', name: 'Ed 4/5', beiname: '21 und 22', typ: 'Dampflokomotiven der alten SOB von 1910 (historisch)', bahn: 'sob', vorlaeufig: false,
    text: ['1910 kaufte die alte SOB bei der SLM zwei stärkere Dampflokomotiven, die Ed 4/5 21 und 22.', 'Sie ergänzten die kleineren E 3/3.'],
    kennzahlen: [['2', 'Lokomotiven (21, 22)'], ['1910', 'gebaut'], ['4 von 5', 'Achsen angetrieben'], ['SLM', 'Hersteller']],
    daten: { 'Bauart': 'Dampflokomotive', 'Hersteller': 'SLM Winterthur', 'Betreiber': 'SOB (historisch)', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '21 und 22', 'Anzahl': '2', 'In Betrieb seit': '1910' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Anzahl', 'In Betrieb seit'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die SLM baute die beiden Loks 1910 für die SOB. Sie hatten die Nummern 21 und 22.'] },
      { titel: 'Einsatz und Technik', p: ['Mit mehr Verkehr reichten die kleinen E 3/3 nicht mehr für alle Züge. Die Ed 4/5 zogen schwerere Personen- und Güterzüge auf den Linien der alten SOB. Die Bezeichnung 4/5 heisst: vier angetriebene Achsen von fünf.', 'Mit der Elektrifizierung verloren sie ihre Aufgabe.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Fünf Achsen, davon vier angetrieben', 'Kein Fahrgastraum'], p: ['Genaue Masse, Gewichte und Ausmusterungsjahre sind ohne Datenblatt der einzelnen Maschine nicht sicher belegt.'] }
    ],
    quellen: ['Wikipedia – Schweizerische Südostbahn (1890), Dampflokomotiven', 'Dossier HCKD «Ed 4/5», Oktober 2026'],
    art: { typ: 'lok', form: 'kantig', farbe: '#1C1F22', panto: false },
    bilder: [
      { src: 'bilder/sob-ed-4-5-c1.jpg', titel: 'Ed 4/5 Nr. 21 der SOB', foto: 'Unbekannt', lizenz: 'Gemeinfrei', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:21Ed45SOBi.jpg' }
    ] },
  // ---------- Historische Infrastruktur- und Rangierfahrzeuge ----------
  { id: 'sob-am-846', kat: 'historisch', name: 'Am 846', beiname: '461 / 033', typ: 'Diesellokomotive für Bau- und Rangierdienst (historisch)', bahn: 'sob', vorlaeufig: false,
    text: ['Für grosse Gleiserneuerungen kaufte die alte SOB 1990 eine gebrauchte, kräftige Diesellok. Sie fuhr zuerst als Am 846 461, später als 033.', 'Um 2010 wurde sie ausrangiert und 2012 an JÜST verkauft.'],
    kennzahlen: [['1', 'Lokomotive'], ['1963', 'gebaut'], ['1990', 'zur SOB'], ['2012', 'verkauft']],
    daten: { 'Bauart': 'Diesellokomotive', 'Hersteller': 'Krupp, AEG', 'Betreiber': 'SOB (historisch)', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': 'Am 846 461, später 033', 'Anzahl': '1', 'In Betrieb seit': '1963 gebaut, ab 1990 bei der SOB', 'Verbleib': '2010 ausrangiert, 2012 an JÜST' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Anzahl', 'In Betrieb seit', 'Verbleib'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Krupp und AEG bauten die Lok 1963. Die SOB kaufte sie 1990, liess sie aufarbeiten und setzte sie als Am 846 461 ein; nach der Fusion hiess sie Am 846 033.', 'Um 2010 wurde sie ausrangiert und 2012 an JÜST verkauft. Die Quellen nennen leicht verschiedene Jahre.'] },
      { titel: 'Einsatz und Technik', p: ['Die Am 846 zog Bauzüge, half bei Gleiserneuerungen und rangierte. Als Diesellok brauchte sie keine Fahrleitung, was bei Bauarbeiten mit ausgeschalteter Fahrleitung wichtig ist. Sie war viel stärker als kleine Rangiertraktoren.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Dieselantrieb, unabhängig von der Fahrleitung', 'Kein Fahrgastraum'] }
    ],
    quellen: ['Wikipedia – Schweizerische Südostbahn (1890) und (2001), Diesellokomotiven', 'Wikimedia Commons – Fotos Am 846 461 (1996) und 033 (2005) in Samstagern', 'Dossier HCKD «Am 846», Oktober 2026'],
    art: { typ: 'lok', form: 'kantig', farbe: SOB_ROT, akzent: '#2E3338', panto: false },
    bilder: [
      { src: 'bilder/sob-am-846-c1.jpg', titel: 'Am 846 033 in Samstagern (2005)', foto: 'Bobo11', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB-Am846033-9.JPG' },
      { src: 'bilder/sob-am-846-c2.jpg', titel: 'Am 846 461 in Samstagern (1996)', foto: 'Bobo11', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB-Am846461-2.jpg' }
    ] },
  { id: 'sob-eea-936', kat: 'historisch', name: 'Eea 936', beiname: '031 und 032', typ: 'Dreiachsige elektrische Rangierlokomotiven (historisch)', bahn: 'sob', vorlaeufig: false,
    text: ['Die zwei dreiachsigen Rangierloks von Henschel kamen 1995 zur BT und mit der Fusion zur SOB. Sie rangierten Wagen in Bahnhöfen und Werkstätten.', 'Die 032 wurde 2012 ausgemustert, die 031 im Jahr 2015.'],
    kennzahlen: [['2', 'Lokomotiven'], ['1966', 'gebaut'], ['3', 'Achsen'], ['2012/2015', 'ausgemustert']],
    daten: { 'Bauart': 'Elektrische Rangierlokomotive', 'Frühere Bezeichnung': 'Eea 3/3 31 und 32', 'Hersteller': 'Henschel, AEG', 'Betreiber': 'BT, ab 2001 SOB (historisch)', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': 'Eea 936 031 und 032', 'Anzahl': '2', 'In Betrieb seit': '1966 gebaut, ab 1995 bei der BT', 'Ausmusterung': '032 im Jahr 2012, 031 im Jahr 2015' },
    specOrder: ['Bauart', 'Frühere Bezeichnung', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Anzahl', 'In Betrieb seit', 'Ausmusterung'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Henschel und AEG bauten die beiden Loks 1966. Die BT übernahm sie 1995 als Eea 3/3 31 und 32; nach der Fusion hiessen sie Eea 936 031 und 032.', 'Die 032 wurde 2012 ausgemustert, die 031 im Jahr 2015.'] },
      { titel: 'Einsatz und Technik', p: ['Die Loks rangierten Wagen in Bahnhöfen, Werkstätten und Serviceanlagen. Mit drei Achsen und elektrischem Antrieb eigneten sie sich für den Verschub dort, wo eine Fahrleitung vorhanden ist.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Drei Achsen', 'Elektrischer Antrieb über die Fahrleitung', 'Kein Fahrgastraum'] }
    ],
    quellen: ['Wikipedia – Schweizerische Südostbahn (2001), Rangierlokomotiven', 'Wikimedia Commons – Foto Eea 936 031 (2008)', 'Dossier HCKD «Eea 3/3 / Eea 936», Oktober 2026'],
    art: { typ: 'rangier', farbe: SOB_ROT, panto: true, achsen: 3 },
    bilder: [
      { src: 'bilder/sob-eea-936-c1.jpg', titel: 'Eea 936 031 (2008)', foto: 'JoachimKohlerBremen', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_Eea_936_931_Henschel_Lokomotive_20080309.jpg' }
    ] },
  { id: 'sob-te-216', kat: 'historisch', name: 'Te 212 / Te 216', beiname: 'Rangiertraktoren', typ: 'Elektrische Rangiertraktoren von BT und SOB (historisch)', bahn: 'sob', vorlaeufig: false,
    text: ['Kleine elektrische Rangiertraktoren schoben bei BT und SOB Wagen in Bahnhöfen, Werkstätten und Abstellanlagen hin und her.', 'Zum Bestand gehörten der Te 212 080 und die Te 216 035–039.'],
    kennzahlen: [['6', 'Traktoren'], ['1941–1966', 'gebaut'], ['2', 'Achsen'], ['250 kW', 'Te 212 080']],
    daten: { 'Bauart': 'Elektrischer Rangiertraktor, zweiachsig', 'Betreiber': 'BT und SOB', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': 'Te 212 080 (ex BT Te 35), Te 216 035–039', 'Leistung': '250 kW (Te 212 080)', 'Anzahl': '6', 'In Betrieb seit': '1941–1966 gebaut' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Leistung', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Ob einzelne Traktoren heute noch fahren, ist in den aktuellen Unterlagen der SOB nicht belegt.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Traktoren Te 216 035–039 wurden zwischen 1941 und 1966 gebaut. Der Te 212 080 ging 1966 als BT Te 35 in Betrieb.', 'Laut Wikipedia gehört der Te 212 080 noch zum Bestand; 2019 stand er in Herisau. Ob die anderen noch erhalten, betriebsfähig oder verkauft sind, ist nicht sicher belegt.'] },
      { titel: 'Einsatz und Technik', p: ['Die Traktoren rangierten kleinere Wagengruppen in Bahnhöfen, Werkstätten und Serviceanlagen, zum Beispiel in Herisau. Für Streckenfahrten sind sie nicht gebaut.', 'Der Te 212 080 leistet höchstens 250 kW. Leistung, Gewicht und Geschwindigkeit der Te 216 unterscheiden sich davon.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Zwei Achsen', 'Elektrischer Antrieb über die Fahrleitung', 'Kein Fahrgastraum'] }
    ],
    quellen: ['Wikipedia – Schweizerische Südostbahn (2001), Rangierfahrzeuge', 'Wikimedia Commons – Fotos Te 216 035 (2012) und Te 212 080 (2019) in Herisau', 'Dossier HCKD «Te 212 / Te 216», Oktober 2026'],
    art: { typ: 'rangier', farbe: SOB_ROT, panto: true, klein: true },
    bilder: [
      { src: 'bilder/sob-te-216-c1.jpg', titel: 'Te 212 080 in Herisau (2019)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_Rangiertraktor_Te_(212_080-6)_in_Herisau.jpg' },
      { src: 'bilder/sob-te-216-c2.jpg', titel: 'Te 216 035 neben der Be 4/4 11 in Herisau (2012)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Historische_E-Lok_Be_4-4_BT-11_und_Rangierlok_SOB_Te_216_035_in_Herisau_AR_(2012).jpg' }
    ] },
  { id: 'sob-tm-236', kat: 'historisch', name: 'Tm 236', beiname: 'Tm III', typ: 'Diesel-Rangier- und Baudiensttraktoren (historisch)', bahn: 'sob', vorlaeufig: false,
    text: ['Unter den Namen Tm III und später Tm 236 hatten SOB und BT verschiedene kleine Dieseltraktoren. Es war keine einheitliche Serie: Sie stammten von mehreren Herstellern.', 'Heute übernehmen die vier Robel die meisten Unterhaltsarbeiten.'],
    kennzahlen: [['1958–1992', 'gebaut'], ['Diesel', 'Antrieb'], ['2', 'Achsen (meist)'], ['ab 2013', 'verkauft']],
    daten: { 'Bauart': 'Dieseltraktor, meist zweiachsig', 'Hersteller': 'je nach Fahrzeug RACO, Jung, Stadler, SLM und andere', 'Betreiber': 'BT und SOB (historisch)', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': 'u. a. Tm 236 001–002, 004–011 und 432', 'In Betrieb seit': '1958–1992 gebaut', 'Einsatz': 'Rangieren, Baudienst, Schneeräumung' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'In Betrieb seit', 'Einsatz'],
    specNote: 'Weil mehrere Hersteller und Bauarten dazugehören, gibt es keine gemeinsame Angabe zu Leistung oder Gewicht.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Traktoren kamen aus verschiedenen Käufen und Übernahmen, gebaut zwischen 1958 und 1992. Dazu gehörten die BT-Traktoren 1 und 2, die späteren Tm 236 004–007 und ein Jung-Traktor der Deutschen Bundesbahn, der bei der SOB die Nummer 34 und später Tm 236 008 trug.', 'Viele wurden verkauft: die 011 im Jahr 2013, die 006 im Jahr 2014, die 002 im Jahr 2015 an die Sursee-Triengen-Bahn, die 004 und 005 im Jahr 2016.'] },
      { titel: 'Einsatz und Technik', p: ['Die Traktoren rangierten, zogen und schoben Dienstwagen im Baudienst und räumten mit Zusatzgeräten Schnee. Auf Anschluss- und Abstellgleisen und bei ausgeschalteter Fahrleitung waren sie besonders nützlich.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Dieselantrieb, unabhängig von der Fahrleitung', 'Teilweise mit Schneeräumschild', 'Kein Fahrgastraum'] }
    ],
    quellen: ['Wikipedia – Schweizerische Südostbahn (2001), Rangierfahrzeuge', 'Wikimedia Commons – Fotos Tm 236 001, 002 und 005 sowie BT Tm 4 in Herisau', 'Dossier HCKD «Tm III / Tm 236», Oktober 2026'],
    art: { typ: 'rangier', farbe: YEL, panto: false, klein: true },
    bilder: [
      { src: 'bilder/sob-tm-236-c1.jpg', titel: 'Tm 236 002 mit Schneeräumschild in Herisau (2012)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SOB_Diesel-Kleinlokomotive_TM_236_002_mit_Schneer%C3%A4umschilden.jpg' },
      { src: 'bilder/sob-tm-236-c2.jpg', titel: 'Tm 236 005 in Herisau (2009)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Herisau_2009_SOB_Tm_236005.jpg' },
      { src: 'bilder/sob-tm-236-c3.jpg', titel: 'BT Tm 4, später Tm 236 004, in Herisau (2002)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Herisau_2002_BT_Tm_4.jpg' },
      { src: 'bilder/sob-tm-236-c4.jpg', titel: 'Tm 236 001 in Herisau (2012)', foto: 'Joachim Lutz', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Tm_II_(SOB_Tm_236_001_A).jpg' }
    ] },
  { id: 'sob-xtmas', kat: 'historisch', name: 'XTmas', beiname: 'Windhoff MPV', typ: 'Mehrzweck-Dienstfahrzeuge von Windhoff (historisch)', bahn: 'sob', vorlaeufig: false,
    text: ['2010 beschaffte die SOB zwei Mehrzweckfahrzeuge von Windhoff für Arbeiten an der Infrastruktur.', 'Bereits 2014 verkaufte sie die beiden Fahrzeuge an KUMA.'],
    kennzahlen: [['2', 'Fahrzeuge (005, 006)'], ['2010', 'beschafft'], ['2014', 'verkauft'], ['Windhoff', 'Hersteller']],
    daten: { 'Bauart': 'Mehrzweck-Dienstfahrzeug (MPV)', 'Hersteller': 'Windhoff', 'Betreiber': 'SOB (historisch)', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '005 und 006', 'Anzahl': '2', 'In Betrieb seit': '2010', 'Verbleib': '2014 an KUMA verkauft' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Anzahl', 'In Betrieb seit', 'Verbleib'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die SOB kaufte 2010 zwei Mehrzweckfahrzeuge von Windhoff mit den Nummern 005 und 006. 2014 gingen beide an KUMA. Im heutigen Inventar der SOB stehen sie nicht mehr.'] },
      { titel: 'Einsatz und Technik', p: ['Ein Mehrzweckfahrzeug (MPV) fährt selbst und trägt je nach Auftrag verschiedene Aufbauten für Arbeiten an Gleis und Fahrleitung. Heute erledigen bei der SOB die vier Robel solche Aufgaben.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Eigener Antrieb', 'Aufbauten je nach Auftrag', 'Kein Fahrgastraum'] }
    ],
    quellen: ['Wikipedia – Schweizerische Südostbahn (2001), Dienstfahrzeuge', 'Dossier HCKD «XTmas / Windhoff MPV», Oktober 2026'],
    art: { typ: 'spezial', var: 'montage', farbe: YEL, akzent: '#2E3338' },
    bilder: [] }
);
