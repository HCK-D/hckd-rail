/* RailBase – Fahrzeuge der TPF und der früheren GFM. Gleiche Form wie fahrzeuge.js, mit bahn: 'tpf'. */
'use strict';

/* =====================================================================
   TPF (Transports publics fribourgeois)
   Grundlage: Datenblätter von HCKD (Oktober 2026), geprüft mit der
   Flottenseite der TPF, GFM Historique und Wikipedia.
   Nicht übernommen, weil nicht belegt: Tef 2/2 16, B 230; der Tragwagen
   Sgjs X113 steht beim Kranwagen X 925.
   ===================================================================== */
const TPF_BLAU = '#1E4F91', GFM_CREME = '#E8DCC8', GFM_BLAU = '#2F4F8F';
ZUEGE.push(
  // ---------- Personenverkehr ----------
  { id: 'tpf-rabe-527', kat: 'personenverkehr', name: 'RABe 527', beiname: 'FLIRT', typ: 'Elektrischer Regionaltriebzug von Stadler', bahn: 'tpf', vorlaeufig: false,
    text: ['Die acht FLIRT der Serie 190 sind die modernsten Normalspur-Triebzüge der TPF. Sie fahren als RegioExpress und als S-Bahn im Kanton Freiburg und darüber hinaus.', 'Technisch gehören sie zur grossen FLIRT-Familie von Stadler.'],
    kennzahlen: [['8', 'Züge (191–198)'], ['160 km/h', 'Höchstgeschwindigkeit'], ['418', 'Plätze insgesamt'], ['2011', 'erster Einsatz']],
    daten: { 'Bauart': 'Elektrotriebzug, 4 Wagen', 'Achsfolge': 'Bo’2’2’2’Bo’', 'Fahrzeugfamilie': 'FLIRT', 'Hersteller': 'Stadler Bussnang', 'Betreiber': 'TPF', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '191–198', 'Länge': '74,078 m', 'Gewicht': '122 t leer', 'Leistung': '2600 kW', 'Höchstgeschwindigkeit': '160 km/h', 'Sitzplätze': '24 in der 1., 143 in der 2. Klasse', 'Anzahl': '8 Züge', 'In Betrieb seit': '2011' },
    specOrder: ['Bauart', 'Achsfolge', 'Fahrzeugfamilie', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'In Betrieb gesetzt 2011–2014. Dazu kommen 42 Klappsitze und 209 Stehplätze, zusammen 418 Plätze.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler Bussnang lieferte den TPF acht FLIRT der Serie 190 mit den Nummern 191–198. Sie gingen 2011 bis 2014 in Betrieb.'] },
      { titel: 'Einsatz und Technik', p: ['Die FLIRT fahren beim RER Fribourg: als RegioExpress RE2/RE3 Bern–Fribourg–Romont–Bulle–Broc und auf den S20/S21 Fribourg–Murten–Ins–Neuchâtel.', 'Der vierteilige Zug ist 74,08 m lang, leistet 2600 kW und fährt bis 160 km/h. Bis zu vier Züge lassen sich kuppeln.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Vollständig klimatisiert', 'Akustische und optische Fahrgastinformation', 'Mehrzweckabteil', 'Zu über 90 Prozent niederflurig', 'WC mit geschlossenem System, für Personen mit eingeschränkter Mobilität'],
        p: ['Der Zug ist zu über 90 Prozent niederflurig. Zur Zahl der Rollstuhlplätze macht die TPF keine Angabe.'] }
    ],
    quellen: ['TPF – Flotte: Flirt 190, technische Daten', 'RER Fribourg – Liniennetz RE2, RE3, S20 und S21','Datenblatt HCKD «RABe 527 – FLIRT, Serie 190», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'mittel', farbe: W1, akzent: TPF_BLAU, tuer: TPF_BLAU, panto: true },
    bilder: [
      { src: 'bilder/tpf-rabe-527-c4.jpg', titel: 'RABe 527 196 in Neuchâtel', foto: 'flybyeigenheer', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:TPF_Flirt_RABe_527_196_-_Neuch%C3%A2tel_(28541258102).jpg' },
      { src: 'bilder/tpf-rabe-527-c1.jpg', titel: 'RABe 527 198 auf dem Grandfey-Viadukt', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:TPF_RABe_527_198_Viaduc_de_Grandfey.jpg' },
      { src: 'bilder/tpf-rabe-527-c2.jpg', titel: 'FLIRT der TPF in Bulle', foto: 'Plutowiki', lizenz: 'CC0', lizenzUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', quelle: 'https://commons.wikimedia.org/wiki/File:TPF_Flirt_Bulle.jpg' },
      { src: 'bilder/tpf-rabe-527-c3.jpg', titel: 'RABe 527 als RegioExpress in Bern', foto: 'Remontees', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Tpf-rabe-527-RE-Bern.jpg' }
    ] },
  { id: 'tpf-rbde-560', kat: 'personenverkehr', name: 'RBDe 560', beiname: 'Domino', typ: 'Modernisierter Regional-Pendelzug (Domino 3)', bahn: 'tpf', vorlaeufig: false,
    text: ['Die TPF hat ihre NPZ-Pendelzüge von 2009 bis 2011 zu dreiteiligen Domino umgebaut. Jeder Zug erhielt einen neuen Niederflur-Zwischenwagen von Bombardier.', 'Zwei Züge, die 235 und die 245, sind als «Chocolat Express» gestaltet.'],
    kennzahlen: [['14', 'Züge'], ['140 km/h', 'Höchstgeschwindigkeit'], ['1650 kW', 'Leistung'], ['184', 'Sitzplätze']],
    daten: { 'Bauart': 'Pendelzug mit Triebwagen, Niederflur-Zwischenwagen und Steuerwagen', 'Hersteller': 'SWG, SIG, ABB; Zwischenwagen Bombardier', 'Betreiber': 'TPF', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '235–247 und 269', 'Länge': '75 m', 'Gewicht': '146 t leer', 'Leistung': '1650 kW', 'Höchstgeschwindigkeit': '140 km/h', 'Sitzplätze': '24 in der 1., 160 in der 2. Klasse', 'Anzahl': '14 Züge', 'In Betrieb seit': '1984' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Triebwagen gebaut 1984–1996, als Domino modernisiert 2009–2011.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die 14 Domino der TPF (235–247 und 269) entstanden aus NPZ-Pendelzügen von SWG, SIG und ABB aus den Jahren 1984 bis 1996. Von 2009 bis 2011 baute die TPF sie zu Domino um; jeder Zug erhielt einen neuen Niederflur-Zwischenwagen von Bombardier.', 'Die TPF hat bei Stadler 13 vierteilige FLIRT Evo bestellt. Der erste soll im Dezember 2028 in Betrieb gehen; sie sollen die Domino in den folgenden Jahren schrittweise ersetzen.'] },
      { titel: 'Einsatz und Technik', p: ['Die Domino fahren wie die FLIRT beim RER Fribourg, als RegioExpress Bern–Fribourg–Bulle–Broc und auf den S20/S21 Fribourg–Murten–Ins–Neuchâtel.', 'Ein Zug ist 75 m lang, leistet 1650 kW und fährt bis 140 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Klimaanlage im ganzen Zug', 'Akustische und optische Fahrgastinformation', 'Mehrzweckabteil', 'Niederflur-Zwischenwagen', 'WC mit Bioreaktor, für Personen mit eingeschränkter Mobilität'],
        p: ['Stufenlos einsteigen kann man im Niederflur-Zwischenwagen; Trieb- und Steuerwagen haben Stufen.'] },
      { titel: 'Chocolat Express', p: ['Die Züge 235 und 245 tragen das Design «Chocolat Express». Es ist kein eigener Fahrzeugtyp, sondern eine besondere Gestaltung normaler Domino.'] }
    ],
    quellen: ['TPF – Flotte: Compositions Domino, technische Daten', 'Rail Technology Magazine – TPF bestellt 13 FLIRT Evo bei Stadler','Datenblätter HCKD «RBDe 560 – DOMINO 3» und «Chocolat Express», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: W1, akzent: TPF_BLAU, tuer: TPF_BLAU, panto: true },
    bilder: [
      { src: 'bilder/tpf-rbde-560-c1.jpg', titel: 'Domino im Design «Chocolat Express» auf dem Grandfey-Viadukt', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:TPF_RBDe_560_Chocolat_Express_Viaduc_de_Grandfey.jpg' }
    ] },
  { id: 'tpf-abe-4-12', kat: 'personenverkehr', name: 'ABe 4/12', beiname: 'Serie 100', typ: 'Niederflur-Triebzug für das Meterspurnetz', bahn: 'tpf', vorlaeufig: false,
    text: ['Die zehn dreiteiligen Triebzüge von Stadler fahren auf dem Meterspurnetz der TPF in der Gruyère und im Vivisbach. Ein Zug besteht aus ABe 2/4, Zwischenwagen B und Be 2/4.', 'Bis zu vier Züge können gemeinsam fahren.'],
    kennzahlen: [['10', 'Züge (101–110)'], ['100 km/h', 'Höchstgeschwindigkeit'], ['350', 'Plätze insgesamt'], ['2015', 'erster Einsatz']],
    daten: { 'Bauart': 'Niederflur-Elektrotriebzug, 3 Wagen', 'Achsfolge': 'Bo’2’+2’2’+2’Bo’', 'Hersteller': 'Stadler Bussnang', 'Betreiber': 'TPF', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '101–110', 'Länge': '55,21 m', 'Gewicht': '88 t leer', 'Leistung': '1400 kW', 'Höchstgeschwindigkeit': '100 km/h', 'Sitzplätze': '15 in der 1., 133 in der 2. Klasse', 'Anzahl': '10 Züge', 'In Betrieb seit': '2015' },
    specOrder: ['Bauart', 'Achsfolge', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'In Betrieb gesetzt 2015–2016. Dazu 14 Klappsitze und 188 Stehplätze, zusammen 350 Plätze.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler Bussnang lieferte den TPF zehn dreiteilige Triebzüge mit den Nummern 101–110. Sie gingen 2015 und 2016 in Betrieb. Ein Zug besteht aus ABe 2/4, Zwischenwagen B und Be 2/4.'] },
      { titel: 'Einsatz und Technik', p: ['Die Züge fahren auf dem Meterspurnetz der TPF: S50 Palézieux–Châtel-St-Denis–Bulle–Montbovon und S51 bis Gruyères.', 'Ein Zug ist 55,21 m lang, leistet 1400 kW und fährt bis 100 km/h. Die Züge lassen sich modular aus zwei bis vier Elementen bilden, und bis zu vier Züge können gemeinsam fahren.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Vollständig klimatisiert', 'Akustische und optische Fahrgastinformation', 'WC mit geschlossenem System, für Personen mit eingeschränkter Mobilität', '350 Plätze: 15 in der 1. und 133 in der 2. Klasse, 14 Klappsitze, 188 Stehplätze'],
        p: ['Zu Niederflureinstiegen und Rollstuhlplätzen macht die TPF auf ihrer Fahrzeugseite keine Angaben.'] }
    ],
    quellen: ['TPF – Flotte: ABe 100, technische Daten', 'RER Fribourg – Liniennetz S50 und S51','Datenblatt HCKD «ABe 4/12 – Serie 100», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'mittel', farbe: W1, akzent: TPF_BLAU, tuer: TPF_BLAU, panto: true },
    bilder: [
      { src: 'bilder/tpf-abe-4-12-c1.jpg', titel: 'ABe 4/12 vor der Dent du Chamois', foto: 'Plutowiki', lizenz: 'CC0', lizenzUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', quelle: 'https://commons.wikimedia.org/wiki/File:TPF_ABe_4-12_Dent_du_Chamois.jpg' },
      { src: 'bilder/tpf-abe-4-12-c2.jpg', titel: 'ABe 4/12 bei Albeuve', foto: 'Plutowiki', lizenz: 'CC0', lizenzUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', quelle: 'https://commons.wikimedia.org/wiki/File:TPF_ABe_4-12_Albeuve.jpg' },
      { src: 'bilder/tpf-abe-4-12-c3.jpg', titel: 'ABe 2/4 101 in Montbovon', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:L03_660_Bf_Montbovon,_ABe_2-4_101.jpg' },
      { src: 'bilder/tpf-abe-4-12-c4.jpg', titel: 'ABe 2/4 103', foto: 'Plutowiki', lizenz: 'CC0', lizenzUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', quelle: 'https://commons.wikimedia.org/wiki/File:TPF_ABe_2-4_103.jpg' }
    ] },
  { id: 'tpf-be-4-4-120', kat: 'personenverkehr', name: 'Be 4/4', beiname: 'Serie 120', typ: 'Meterspur-Pendelzug mit Zwischen- und Steuerwagen', bahn: 'tpf', vorlaeufig: false,
    text: ['Die Pendelzüge der Serie 120 bestehen aus einem Triebwagen Be 4/4, je nach Bedarf einem Zwischenwagen B und einem Steuerwagen (A)Bt. Sie fahren auf dem Meterspurnetz der TPF.', 'Die Triebwagen hiessen früher BDe 4/4, weil sie ein Gepäckabteil hatten.'],
    kennzahlen: [['4', 'Triebwagen (121–124)'], ['90 km/h', 'Höchstgeschwindigkeit'], ['640 kW', 'Leistung'], ['1992', 'erster Einsatz']],
    daten: { 'Bauart': 'Pendelzug: Triebwagen, Zwischenwagen, Steuerwagen', 'Hersteller': 'Vevey/BBC; Zwischenwagen SIG', 'Betreiber': 'TPF', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'Be 4/4 121–124, B 207, 209, 215, (A)Bt 221–226', 'Länge': '52,32 m (Zug mit 3 Wagen)', 'Leistung': '640 kW', 'Höchstgeschwindigkeit': '90 km/h', 'Sitzplätze': '134 in der 2. Klasse; 9 in der 1. Klasse nur in 221–223', 'In Betrieb seit': '1992' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'In Betrieb seit'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Zur Serie 120 gehören 13 Fahrzeuge: 4 Triebwagen Be 4/4 (121–124) und 6 Steuerwagen (A)Bt (221–226) von Vevey/BBC aus den Jahren 1992 bis 1995 sowie 3 Zwischenwagen B (207, 209, 215) von SIG aus dem Jahr 1973.', 'Die Triebwagen hiessen früher BDe 4/4, weil sie ein Gepäckabteil hatten.'] },
      { titel: 'Einsatz und Technik', p: ['Die Pendelzüge fahren auf dem Meterspurnetz der TPF zwischen Palézieux, Bulle, Gruyères und Montbovon. Sie sind modular: Zwischen- und Steuerwagen werden je nach Nachfrage angehängt.', 'Ein Zug aus drei Fahrzeugen ist 52,32 m lang, leistet 640 kW und fährt bis 90 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Akustische und optische Fahrgastinformation', '253 Plätze: 134 in der 2. Klasse, 8 Klappsitze, 102 Stehplätze', '1. Klasse mit 9 Plätzen nur in den Steuerwagen 221–223'],
        p: ['Zu Klimaanlage, Niederflureinstiegen und Rollstuhlplätzen macht die TPF auf ihrer Fahrzeugseite keine Angaben.'] },
      { titel: 'Die Fahrzeuge', tabelle: { kopf: ['Fahrzeug', 'Nummern', 'Anzahl', 'Baujahre', 'Hersteller'], zeilen: [
      ['Triebwagen Be 4/4', '121–124', '4', '1992–1995', 'Vevey/BBC'], ['Zwischenwagen B', '207, 209, 215', '3', '1973', 'SIG'], ['Steuerwagen (A)Bt', '221–226', '6', '1992–1995', 'Vevey/BBC']] } }
    ],
    quellen: ['TPF – Flotte: Compositions 120, technische Daten', 'Datenblätter HCKD zu Be 4/4 121–124, B 207/209/215 und (A)Bt 221–226, Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: W1, akzent: TPF_BLAU, tuer: TPF_BLAU, panto: true },
    bilder: [
      { src: 'bilder/tpf-be-4-4-120-c1.jpg', titel: 'Be 4/4 123', foto: 'Heitersberg', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:TPF_Be_4_4_123.jpg' },
      { src: 'bilder/tpf-be-4-4-120-c2.jpg', titel: 'Triebwagen 124, damals noch BDe 4/4 (2010)', foto: 'Heitersberg', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:TPF_BDe_4_4_124.jpg' },
      { src: 'bilder/tpf-be-4-4-120-c3.jpg', titel: 'Steuerwagen 221 in Bulle', foto: 'Hoff1980', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:TPF_Steuerwagen_221_Bulle.JPG' },
      { src: 'bilder/tpf-be-4-4-120-c4.jpg', titel: 'Steuerwagen 225', foto: 'Hoff1980', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:Steuerwagen_225_TPF.JPG' }
    ] },
  { id: 'tpf-funiculaire', kat: 'personenverkehr', name: 'Funiculaire', beiname: 'Fribourg', typ: 'Standseilbahn Neuveville–St-Pierre mit Wasserballast', bahn: 'tpf', vorlaeufig: false,
    text: ['Die Standseilbahn in Freiburg verbindet seit 1899 die Unterstadt Neuveville mit St-Pierre. Sie überwindet auf 121 Metern 58 Höhenmeter.', 'Besonders ist der Antrieb: Als Gegengewicht dient Abwasser der Stadt Freiburg. Laut TPF ist das in Europa einmalig.'],
    kennzahlen: [['1899', 'eröffnet'], ['121 m', 'Streckenlänge'], ['550 ‰', 'grösste Steigung'], ['2 Min.', 'Fahrzeit']],
    daten: { 'Bauart': 'Standseilbahn mit Wasserballast', 'Hersteller': 'Von Roll', 'Betreiber': 'TPF', 'Spurweite': '1200 mm', 'Kabinen': '2 mit je 20 Plätzen', 'Länge': '121 m Strecke, Kabine 5,4 m', 'Gewicht': '1600 kg je Kabine', 'Höchstgeschwindigkeit': '4,3 km/h (1,2 m/s)', 'Höhenunterschied': '58 m', 'Kapazität': '240 Personen pro Stunde', 'In Betrieb seit': '1899' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Kabinen', 'Länge', 'Gewicht', 'Höchstgeschwindigkeit', 'Höhenunterschied', 'Kapazität', 'In Betrieb seit'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Standseilbahn baute Von Roll; sie fährt seit 1899. 1998 wurde sie umgebaut, die letzte grosse Revision war 2020. Die Bahn ist als Kulturdenkmal geschützt.', 'Zur Bahn gehören zwei Kabinen mit je 20 Plätzen.'] },
      { titel: 'Einsatz und Technik', p: ['Die Bahn verbindet in Freiburg die Unterstadt Neuveville (552 m) mit St-Pierre (608 m). Im regulären Betrieb fährt sie auf der eingleisigen Strecke mit Ausweiche etwa 70 Mal hin und zurück pro Tag, von 7 bis 19 Uhr, im Sommer bis 20 Uhr.', 'Als Gegengewicht dient Abwasser der Stadt Freiburg. Die Strecke ist 121 m lang, hat eine Spurweite von 1200 mm und ist bis 550 ‰ steil; die Fahrt dauert 2 Minuten bei 1,2 m/s.', 'Wegen einer umfassenden Revision ist die Bahn vom 27. August bis 4. Dezember 2026 ausser Betrieb. Die Wiederaufnahme ist für den 5. Dezember 2026 angekündigt; bis dahin fährt die Buslinie 4 als Ersatz.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['2 Kabinen mit je 20 Plätzen', '240 Personen pro Stunde'],
        p: ['Zur Zugänglichkeit für Rollstühle, Kinderwagen und Velos macht die TPF auf der Fahrzeugseite keine Angaben.'] }
    ],
    quellen: ['TPF – Flotte: Funiculaire Neuveville – St-Pierre, technische Daten', 'TPF – Fahrplan Standseilbahn und Unterbruch 2026', 'Wikipedia – Standseilbahn Neuveville–Saint-Pierre (Spurweite 1200 mm)','Datenblatt HCKD «Funiculaire Fribourg», Oktober 2026'],
    art: { typ: 'wagen', geschlossen: true, zweiachs: true, farbe: '#C8102E', akzent: GFM_CREME },
    bilder: [
      { src: 'bilder/tpf-funiculaire-c1.jpg', titel: 'Standseilbahn Neuveville–St-Pierre in Freiburg (2024)', foto: 'hrs51', lizenz: 'CC BY 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Fribourg_funicular_2024-11-09.jpg' }
    ] },
  // ---------- Infrastruktur und Dienst ----------
  { id: 'tpf-tm-87', kat: 'infrastruktur', name: 'Tm 234', beiname: '87', typ: 'Dieselhydraulischer Baudiensttraktor mit Ladekran', bahn: 'tpf', vorlaeufig: false,
    text: ['Der Tm 87 ist ein Baudiensttraktor der Baureihe Tm 234 für das Normalspurnetz der TPF. Er dient dem Unterhalt der Infrastruktur, zieht schwere Züge und räumt Schnee.', 'Er hat einen Ladekran und lässt sich fernsteuern.'],
    kennzahlen: [['550 kW', 'Leistung'], ['80 km/h', 'Höchstgeschwindigkeit'], ['30 t', 'Gewicht'], ['2000', 'erster Einsatz']],
    daten: { 'Bauart': 'Dieselhydraulischer Traktor mit Ladekran', 'Hersteller': 'Stadler Bussnang / ADtranz', 'Betreiber': 'TPF', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '87', 'Länge': '11,364 m', 'Gewicht': '30 t leer', 'Leistung': '550 kW', 'Höchstgeschwindigkeit': '80 km/h', 'Motor': 'MTU 12V 183 TD13', 'Kran': 'Palfinger, 1200 kg bei 7,2 m', 'In Betrieb seit': '2000' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Motor', 'Kran', 'In Betrieb seit'],
    abschnitte: [],
    quellen: ['TPF – Flotte: Tm 87, technische Daten', 'Datenblatt HCKD «Tm 234 87», Oktober 2026'],
    art: { typ: 'rangier', farbe: YEL, panto: false, kran: true },
    bilder: [] },
  { id: 'tpf-tmf-17', kat: 'infrastruktur', name: 'Tmf 2/2', beiname: '17', typ: 'Dieseltraktor für das Meterspurnetz', bahn: 'tpf', vorlaeufig: false,
    text: ['Der Tmf 2/2 17 von Schöma ist ein zweiachsiger Dieseltraktor für das Meterspurnetz der TPF. Er arbeitet im Baudienst, zieht schwere Züge und räumt Schnee.', 'Er lässt sich auch fernsteuern.'],
    kennzahlen: [['330 kW', 'Leistung'], ['65 km/h', 'Höchstgeschwindigkeit'], ['28 t', 'Gewicht'], ['2011', 'erster Einsatz']],
    daten: { 'Bauart': 'Zweiachsiger Dieseltraktor', 'Hersteller': 'Schöma', 'Betreiber': 'TPF', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '17', 'Länge': '8,50 m', 'Gewicht': '28 t leer', 'Leistung': '330 kW', 'Höchstgeschwindigkeit': '65 km/h', 'Motor': 'Deutz, 6 Zylinder', 'Anhängelast': '200 t in der Ebene, 90 t bei 50 ‰', 'In Betrieb seit': '2011' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Motor', 'Anhängelast', 'In Betrieb seit'],
    abschnitte: [],
    quellen: ['TPF – Flotte: Tmf 17, technische Daten', 'Datenblatt HCKD «Tmf 2/2 17», Oktober 2026'],
    art: { typ: 'rangier', farbe: YEL, panto: false, klein: true },
    bilder: [] },
  { id: 'tpf-gem-18', kat: 'infrastruktur', name: 'Gem 2/2', beiname: '18', typ: 'Zweikraftlok für das Meterspurnetz', bahn: 'tpf', vorlaeufig: false,
    text: ['Die Gem 2/2 18 von Stadler fährt unter der Fahrleitung elektrisch und sonst mit Diesel. Die TPF setzt sie im Baudienst, für schwere Züge und zum Schneeräumen ein.', 'In der Kabine finden acht Personen Platz.'],
    kennzahlen: [['700 kW', 'elektrisch'], ['400 kW', 'Diesel'], ['80 km/h', 'Höchstgeschwindigkeit'], ['2016', 'erster Einsatz']],
    daten: { 'Bauart': 'Zweikraftlokomotive (elektrisch und Diesel)', 'Hersteller': 'Stadler Bussnang', 'Betreiber': 'TPF', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '18', 'Länge': '8,37 m', 'Gewicht': '28 t leer', 'Leistung': '700 kW elektrisch, 400 kW Diesel', 'Höchstgeschwindigkeit': '80 km/h', 'Motor': 'Mercedes-Benz OM 502 LA', 'Anhängelast': '300 t in der Ebene, 120 t bei 50 ‰', 'In Betrieb seit': '2016' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Motor', 'Anhängelast', 'In Betrieb seit'],
    abschnitte: [],
    quellen: ['TPF – Flotte: Gem 18, technische Daten', 'Datenblatt HCKD «Gem 2/2 18», Oktober 2026'],
    art: { typ: 'rangier', farbe: YEL, akzent: '#2E3338', panto: true },
    bilder: [
      { src: 'bilder/tpf-gem-18-c1.jpg', titel: 'Gem 2/2 18', foto: 'Le.teletravail', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Tpf_maschine_18.jpg' }
    ] },
  { id: 'tpf-x-925', kat: 'dienst', name: 'X 925', beiname: 'Kranwagen', typ: 'Kranwagen für Meter- und Normalspur', bahn: 'tpf', vorlaeufig: false,
    text: ['Der Kranwagen X 925 trägt einen funkferngesteuerten Kran von Palfinger. Das Fahrgestell stammt von 1972, der Umbau zum Kranwagen ging 2016 in Betrieb.', 'Die Kranplattform lässt sich auf den Normalspur-Tragwagen Sgjs X113 umsetzen. So kann der Kran auch auf dem Normalspurnetz der TPF arbeiten.'],
    kennzahlen: [['1500 kg', 'bei 14 m Ausladung'], ['65 km/h', 'Höchstgeschwindigkeit'], ['52 t', 'Gesamtgewicht'], ['2016', 'erster Einsatz']],
    daten: { 'Bauart': 'Vierachsiger Kranwagen 2’2’', 'Hersteller': 'Schindler Waggon Pratteln, MOB-TPF, Nencki', 'Betreiber': 'TPF', 'Spurweite': 'Meterspur, 1000 mm; Kran auch auf Normalspur-Tragwagen Sgjs X113', 'Fahrzeugnummern': 'X 925', 'Länge': '13,776 m', 'Gewicht': '37,825 t leer, 52 t beladen', 'Höchstgeschwindigkeit': '65 km/h', 'Kran': 'Palfinger PKR290, 1500 kg bei 14 m', 'In Betrieb seit': '2016' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Höchstgeschwindigkeit', 'Kran', 'In Betrieb seit'],
    abschnitte: [],
    quellen: ['TPF – Flotte: Wagon-grue X925, technische Daten', 'Datenblätter HCKD «X 925 – Kranwagen» und «Sgjs X113», Oktober 2026'],
    art: { typ: 'spezial', var: 'kran', farbe: YEL, akzent: '#2E3338' },
    bilder: [] },
  // ---------- Historische Fahrzeuge ----------
  { id: 'tpf-retrozug', kat: 'historisch', name: 'Retrozug', beiname: 'Be 4/4 116', typ: 'Historischer Meterspur-Zug der TPF für Sonderfahrten', bahn: 'tpf', vorlaeufig: false,
    text: ['Der Retrozug der TPF besteht aus dem Triebwagen Be 4/4 116 und drei Wagen aus den Jahren 1930 bis 1932. Die TPF setzt ihn für Fondue-Züge und andere Sonderfahrten ein.', 'Der Triebwagen von 1922 wurde 1999 von der TPF vollständig originalgetreu neu aufgebaut.'],
    kennzahlen: [['1922', 'Triebwagen gebaut'], ['482 kW', 'Leistung'], ['65 km/h', 'Höchstgeschwindigkeit'], ['186', 'Plätze']],
    daten: { 'Bauart': 'Triebwagen mit drei Wagen', 'Hersteller': 'SWS (Triebwagen), SIG (Wagen)', 'Betreiber': 'TPF', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'Be 4/4 116, B 243, Brs 245, Br 247', 'Länge': '61,58 m (ganzer Zug)', 'Leistung': '482 kW', 'Höchstgeschwindigkeit': '65 km/h (fahrplanmässig 30 km/h)', 'Sitzplätze': '176 in der 2. Klasse, dazu 10 Klappsitze', 'In Betrieb seit': '1922' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'In Betrieb seit'],
    abschnitte: [{ titel: 'Die Fahrzeuge', tabelle: { kopf: ['Fahrzeug', 'Baujahr', 'Hersteller'], zeilen: [
      ['Triebwagen Be 4/4 116', '1922 (Neuaufbau 1999)', 'SWS'], ['Wagen B 243', '1930', 'SIG'], ['Wagen Brs 245', '1931', 'SIG'], ['Wagen Br 247', '1932', 'SIG']] } }],
    quellen: ['TPF – Flotte: Compositions train rétro, technische Daten', 'Datenblätter HCKD zu Be 4/4 116, B 243, Brs 245 und Br 247, Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: GFM_CREME, akzent: GFM_BLAU, tuer: GFM_BLAU, panto: true },
    bilder: [
      { src: 'bilder/tpf-retrozug-c1.jpg', titel: 'Retrozug der TPF', foto: 'Martin Thurnherr', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Retro-Zug_Mol%C3%A9jon_der_TPF_01.jpg' },
      { src: 'bilder/tpf-retrozug-c2.jpg', titel: 'Be 4/4 116 in Bulle (2011)', foto: 'NAC', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:TPF_Be_4-4_116_Bulle_080211.jpg' },
      { src: 'bilder/tpf-retrozug-c3.jpg', titel: 'Innenraum des Retrozugs', foto: 'Martin Thurnherr', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Interieur_im_Retro-Zug_der_TPF_02.jpg' }
    ] },
  { id: 'gfm-be-111', kat: 'historisch', name: 'Be 4/4', beiname: '111', typ: 'Elektrischer Triebwagen von 1903 (historisch)', bahn: 'tpf', vorlaeufig: false,
    text: ['Der Triebwagen 111 von 1903 stammt aus der Anfangszeit der elektrischen Bahnen in der Gruyère. Heute gehört er zur Sammlung von GFM Historique.', 'Von 2006 bis 2011 war er an die Museumsbahn Blonay–Chamby ausgeliehen.'],
    kennzahlen: [['1903', 'gebaut'], ['111', 'Nummer'], ['Meterspur', 'Spurweite'], ['GFM Historique', 'heute']],
    daten: { 'Bauart': 'Elektrischer Triebwagen', 'Betreiber': 'CEG/GFM, heute GFM Historique', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '111', 'Erhalten': 'GFM Historique', 'In Betrieb seit': '1903' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Erhalten', 'In Betrieb seit'],
    specNote: 'GFM Historique nennt ihn «Be 4/4 111», Wikipedia «BCe 4/4 111».',
    abschnitte: [],
    quellen: ['GFM Historique – Sammlung', 'Wikipedia – Chemins de fer fribourgeois Gruyère–Fribourg–Morat', 'Datenblatt HCKD «ABe 4/4 111», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: GFM_CREME, akzent: '#3E5A3B', tuer: '#3E5A3B', panto: true },
    bilder: [
      { src: 'bilder/gfm-be-111-c1.jpg', titel: 'Triebwagen 111 bei der Museumsbahn Blonay–Chamby', foto: 'BCFeh', lizenz: 'Gemeinfrei', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:Blonay-Chamby_Chemins_de_fer_Fribourgeois_Gruy%C3%A8re-Fribourg-Morat_-_111_-_01.jpg' }
    ] },
  { id: 'gfm-be-115', kat: 'historisch', name: 'Be 4/4', beiname: '115', typ: 'Nostalgie-Triebwagen von 1905 (historisch)', bahn: 'tpf', vorlaeufig: false,
    text: ['Der Be 4/4 115 von 1905 fuhr noch lange als Nostalgie-Triebwagen auf dem Meterspurnetz der GFM und später der TPF.', 'Im Oktober 2016 wurde er abgebrochen.'],
    kennzahlen: [['1905', 'gebaut'], ['2016', 'abgebrochen'], ['115', 'Nummer'], ['Meterspur', 'Spurweite']],
    daten: { 'Bauart': 'Elektrischer Triebwagen', 'Betreiber': 'GFM, später TPF', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '115', 'Verbleib': 'Oktober 2016 abgebrochen', 'In Betrieb seit': '1905' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Verbleib', 'In Betrieb seit'],
    abschnitte: [],
    quellen: ['Wikipedia – Chemins de fer fribourgeois Gruyère–Fribourg–Morat', 'Datenblatt HCKD «Be 4/4 115», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: GFM_CREME, akzent: GFM_BLAU, tuer: GFM_BLAU, panto: true },
    bilder: [
      { src: 'bilder/gfm-be-115-c1.jpg', titel: 'Be 4/4 115 in Bulle (1995)', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:07_279a_Bf_Bulle,_Be_4-4_115_GFM.jpg' },
      { src: 'bilder/gfm-be-115-c2.jpg', titel: 'Be 4/4 115 mit Bt 254 in Broc-Fabrique (2011)', foto: 'NAC', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:TPF_Bt_254_Be_4-4_115_Broc-Fabrique_080211.jpg' }
    ] },
  { id: 'gfm-be-131', kat: 'historisch', name: 'Be 4/4', beiname: '131–133', typ: 'Elektrische Triebwagen von 1943 (historisch)', bahn: 'tpf', vorlaeufig: false,
    text: ['Die drei Triebwagen 131 bis 133 entstanden 1943 für das Meterspurnetz der GFM.', 'Die 132 wurde 1989 und die 133 2003 abgebrochen. Die 131 ist erhalten und gehört als Ce 4/4 131 zur Sammlung von GFM Historique.'],
    kennzahlen: [['3', 'Triebwagen'], ['1943', 'gebaut'], ['131', 'erhalten'], ['Meterspur', 'Spurweite']],
    daten: { 'Bauart': 'Elektrischer Triebwagen', 'Betreiber': 'GFM', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '131–133', 'Verbleib': '131 erhalten, 132 abgebrochen 1989, 133 abgebrochen 2003', 'In Betrieb seit': '1943' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Verbleib', 'In Betrieb seit'],
    abschnitte: [],
    quellen: ['Wikipedia – Chemins de fer fribourgeois Gruyère–Fribourg–Morat', 'GFM Historique – Sammlung (Ce 4/4 131)', 'Datenblatt HCKD «Be 4/4 131–133», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: GFM_CREME, akzent: GFM_BLAU, tuer: GFM_BLAU, panto: true },
    bilder: [] },
  { id: 'gfm-bde-141', kat: 'historisch', name: 'BDe 4/4', beiname: '141–142', typ: 'Kiestriebwagen von 1972 (historisch)', bahn: 'tpf', vorlaeufig: false,
    text: ['Die zwei kräftigen Triebwagen von 1972 wurden zuerst für Kieszüge gebaut. Ab 1981 erhielten sie ein Abteil mit Sitzplätzen und fuhren auch mit den Steuerwagen 251–256.', 'Die 141 ging 2017 an GFM Historique, die 142 wurde im April 2017 abgebrochen.'],
    kennzahlen: [['2', 'Triebwagen'], ['1972', 'gebaut'], ['70 km/h', 'Höchstgeschwindigkeit'], ['36,5 t', 'Gewicht']],
    daten: { 'Bauart': 'Elektrischer Triebwagen mit Gepäckabteil', 'Hersteller': 'SWP (Mechanik), SAAS (Elektrik)', 'Betreiber': 'GFM, später TPF', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '141, 142', 'Gewicht': '36,5 t', 'Höchstgeschwindigkeit': '70 km/h', 'Sitzplätze': '40 (ab 1981)', 'Verbleib': '141 bei GFM Historique, 142 abgebrochen 2017', 'In Betrieb seit': '1972' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Gewicht', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Verbleib', 'In Betrieb seit'],
    abschnitte: [],
    quellen: ['GFM Historique – Sammlung (BDe 4/4 141)', 'Wikipedia – Chemins de fer fribourgeois Gruyère–Fribourg–Morat', 'Datenblatt HCKD «BDe 4/4 141–142», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: W1, akzent: TPF_BLAU, tuer: TPF_BLAU, panto: true },
    bilder: [
      { src: 'bilder/gfm-bde-141-c1.jpg', titel: 'BDe 4/4 141 mit Steuerwagen', foto: 'Spoorjan', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:TPF_141.JPG' },
      { src: 'bilder/gfm-bde-141-c2.jpg', titel: 'BDe 4/4 142 in Bulle (2014)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Transports_publics_Fribourgeois_(TPF)_BDe_4-4_142_in_Bulle_FR_(2014).jpg' },
      { src: 'bilder/gfm-bde-141-c3.jpg', titel: 'BDe 4/4 142 in Bulle', foto: 'Hoff1980', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:TPF_BDe_4_4_142_Bulle.JPG' }
    ] },
  { id: 'gfm-be-151', kat: 'historisch', name: 'Be 4/4', beiname: '151–152', typ: 'Pendelzug-Triebwagen von 1977 (historisch)', bahn: 'tpf', vorlaeufig: false,
    text: ['Die Triebwagen 151 und 152 von 1977 hatten nur einen Führerstand. Sie fuhren deshalb immer mit einem der Steuerwagen 251–256.', 'Beide wurden im April 2017 abgebrochen.'],
    kennzahlen: [['2', 'Triebwagen'], ['1977', 'gebaut'], ['1', 'Führerstand'], ['2017', 'abgebrochen']],
    daten: { 'Bauart': 'Elektrischer Triebwagen mit einem Führerstand', 'Betreiber': 'GFM, später TPF', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '151, 152', 'Einsatz': 'Pendelzug mit Steuerwagen 251–256', 'Verbleib': 'April 2017 abgebrochen', 'In Betrieb seit': '1977' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Einsatz', 'Verbleib', 'In Betrieb seit'],
    abschnitte: [],
    quellen: ['Wikipedia – Chemins de fer fribourgeois Gruyère–Fribourg–Morat', 'Datenblatt HCKD «Be 4/4 151–152», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: GFM_CREME, akzent: GFM_BLAU, tuer: GFM_BLAU, panto: true },
    bilder: [
      { src: 'bilder/gfm-be-151-c1.jpg', titel: 'Be 4/4 151 mit Steuerwagen Bt 256', foto: 'Markus Eigenheer from Genève', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:TPF_Be_4-4_151_et_Bt_256_(13661874155).jpg' },
      { src: 'bilder/gfm-be-151-c2.jpg', titel: 'Be 4/4 152 in Montbovon (1995)', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:07_276_Bf_Montbovon,_Be_4-4_152_GFM.jpg' }
    ] },
  { id: 'gfm-gde-101', kat: 'historisch', name: 'GDe 4/4', beiname: '101', typ: 'Meterspur-Elektrolok der GFM (heute bei der MOB)', bahn: 'tpf', vorlaeufig: false,
    text: ['Die GDe 4/4 101 «Ville de Bulle» war die einzige grosse Elektrolok der GFM auf der Meterspur.', 'Sie wurde an die Montreux–Berner Oberland-Bahn verkauft und fährt dort als GDe 4/4 6005.'],
    kennzahlen: [['1983', 'gebaut'], ['SLM / BBC', 'Hersteller'], ['6005', 'heutige MOB-Nummer'], ['Meterspur', 'Spurweite']],
    daten: { 'Bauart': 'Elektrolokomotive', 'Hersteller': 'SLM und BBC', 'Betreiber': 'GFM, heute MOB', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '101, bei der MOB 6005', 'Verbleib': 'an die MOB verkauft', 'In Betrieb seit': '1983' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Verbleib', 'In Betrieb seit'],
    specNote: 'Das Verkaufsjahr wird unterschiedlich angegeben (2007 oder 2017).',
    abschnitte: [],
    quellen: ['Wikipedia (Englisch) – Transports publics Fribourgeois, Rollmaterial', 'Wikipedia – Chemins de fer fribourgeois Gruyère–Fribourg–Morat', 'Datenblatt HCKD «GDe 4/4 101», Oktober 2026'],
    art: { typ: 'lok', form: 'kantig', farbe: GFM_BLAU, akzent: GFM_CREME, panto: true },
    bilder: [
      { src: 'bilder/gfm-gde-101-c1.jpg', titel: 'Die ehemalige GDe 4/4 101 als MOB 6005 bei Saanenmöser (2014)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:MOB-Penedel-6005-205-233-116-Saanenm%C3%B6ser-2014.jpg' }
    ] },
  { id: 'gfm-te-22', kat: 'historisch', name: 'Te 2/2', beiname: '11–12', typ: 'Elektrische Rangiertraktoren von 1913 (historisch)', bahn: 'tpf', vorlaeufig: false,
    text: ['Die zwei kleinen Rangiertraktoren von 1913 rangierten auf dem Meterspurnetz der GFM: der Te 2/2 11 in Bulle, der Te 2/2 12 in Montbovon.', 'Die 12 wurde 2012 ausrangiert.'],
    kennzahlen: [['2', 'Traktoren'], ['1913', 'gebaut'], ['Bulle', 'Te 2/2 11'], ['Montbovon', 'Te 2/2 12']],
    daten: { 'Bauart': 'Elektrischer Rangiertraktor', 'Hersteller': 'Elektrik MFO (11), Alioth (12)', 'Betreiber': 'GFM, später TPF', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '11, 12', 'In Betrieb seit': '1913' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'In Betrieb seit'],
    specNote: 'Für die 12 nennt Wikipedia den Abbruch 2012; auf Commons gibt es auch Fotos von 2026.',
    abschnitte: [],
    quellen: ['Wikipedia – Chemins de fer fribourgeois Gruyère–Fribourg–Morat', 'Datenblätter HCKD «Te 2/2 11» und «Te 2/2 12», Oktober 2026'],
    art: { typ: 'rangier', farbe: '#3E5A3B', panto: true, klein: true },
    bilder: [
      { src: 'bilder/gfm-te-22-c1.jpg', titel: 'Te 2/2 12 in Montbovon', foto: 'Gyrobus', lizenz: 'Gemeinfrei', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:Montbovon_GFM_Te_22_12_CEG_Alioth_1913.JPG' },
      { src: 'bilder/gfm-te-22-c2.jpg', titel: 'Te 2/2 12 von der Seite', foto: 'Mathoche Speurif', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:GFM_Te_2-2_12_profil.jpg' }
    ] },
  { id: 'gfm-te-44', kat: 'historisch', name: 'Te 4/4', beiname: '13–14', typ: 'Aus Triebwagen umgebaute Rangiertraktoren (historisch)', bahn: 'tpf', vorlaeufig: false,
    text: ['Die Te 4/4 13 und 14 entstanden 1901 als Triebwagen und wurden 1927 und 1933 zu Rangiertraktoren umgebaut.', 'Die 13 rangierte in Broc-Fabrique, die 14 fuhr Bauzüge. Die 13 wurde 2017 ausrangiert.'],
    kennzahlen: [['2', 'Traktoren'], ['1901', 'gebaut'], ['1927 / 1933', 'umgebaut'], ['Meterspur', 'Spurweite']],
    daten: { 'Bauart': 'Elektrischer Rangiertraktor', 'Hersteller': 'Elektrik Alioth', 'Betreiber': 'GFM, später TPF', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '13, 14', 'Einsatz': 'Rangieren in Broc-Fabrique, Bauzüge', 'In Betrieb seit': '1901' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Einsatz', 'In Betrieb seit'],
    abschnitte: [],
    quellen: ['Wikipedia – Chemins de fer fribourgeois Gruyère–Fribourg–Morat', 'Datenblätter HCKD «Te 4/4 13» und «Te 4/4 14», Oktober 2026'],
    art: { typ: 'rangier', farbe: '#3E5A3B', panto: true },
    bilder: [
      { src: 'bilder/gfm-te-44-c1.jpg', titel: 'Te 4/4 13', foto: 'Markus Eigenheer from Genève', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:TPF_Te_4-4_13_(13662222754).jpg' },
      { src: 'bilder/gfm-te-44-c2.jpg', titel: 'Te 4/4 14', foto: 'Markus Eigenheer from Genève', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:TPF_Te_4-4_14_(13661877345).jpg' }
    ] },
  { id: 'gfm-tm-15', kat: 'historisch', name: 'Tm 2/2', beiname: '15', typ: 'Dieseltraktor für Bauzüge und Rangierdienst (historisch)', bahn: 'tpf', vorlaeufig: false,
    text: ['Der kleine Dieseltraktor Tm 2/2 15 wurde 1971 von Schöma gebaut und 1981 umgebaut. Er fuhr Bauzüge und rangierte in Bulle.'],
    kennzahlen: [['1971', 'gebaut'], ['1981', 'umgebaut'], ['Schöma', 'Hersteller'], ['Bulle', 'Einsatzort']],
    daten: { 'Bauart': 'Zweiachsiger Dieseltraktor', 'Hersteller': 'Schöma / Deutz', 'Betreiber': 'GFM, später TPF', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '15', 'Einsatz': 'Bauzüge, Rangieren in Bulle', 'In Betrieb seit': '1971' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Einsatz', 'In Betrieb seit'],
    abschnitte: [],
    quellen: ['Wikipedia (Englisch) – Transports publics Fribourgeois, Rollmaterial', 'Wikipedia – Chemins de fer fribourgeois Gruyère–Fribourg–Morat', 'Datenblatt HCKD «Tm 2/2 15», Oktober 2026'],
    art: { typ: 'rangier', farbe: YEL, panto: false, klein: true },
    bilder: [
      { src: 'bilder/gfm-tm-15-c1.jpg', titel: 'Tm 2/2 15 in Bulle (2005)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:TPF-Tm15_Nov2005_Bulle.jpg' }
    ] },
  { id: 'gfm-abde-24', kat: 'historisch', name: 'ABDe 2/4', beiname: 'FMA', typ: 'Triebwagen der Freiburg–Murten–Ins-Bahn (historisch)', bahn: 'tpf', vorlaeufig: false,
    text: ['Die ABDe 2/4 kamen 1931 zur Freiburg–Murten–Ins-Bahn, damals noch für Gleichstrom. 1946 wurden sie auf Wechselstrom umgebaut.', 'Der ABDe 2/4 155 wurde 2025 abgebrochen; seine Führerstände gingen an ÖV Historique.'],
    kennzahlen: [['1931', 'geliefert'], ['1946', 'auf Wechselstrom umgebaut'], ['155', 'zuletzt erhalten'], ['Normalspur', 'Spurweite']],
    daten: { 'Bauart': 'Elektrischer Triebwagen', 'Betreiber': 'FMA, später GFM', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': 'zuerst Gleichstrom, ab 1946 15 kV 16,7 Hz', 'Verbleib': '155 abgebrochen 2025, Führerstände bei ÖV Historique', 'In Betrieb seit': '1931' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Stromsystem', 'Verbleib', 'In Betrieb seit'],
    abschnitte: [],
    quellen: ['Wikipedia – Chemins de fer fribourgeois Gruyère–Fribourg–Morat', 'Datenblatt HCKD «ABDe 2/4 151», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: GFM_CREME, akzent: '#3E5A3B', tuer: '#3E5A3B', panto: true },
    bilder: [
      { src: 'bilder/gfm-abde-24-c1.jpg', titel: 'ABDe 2/4 155', foto: 'Unbekannt', lizenz: 'Gemeinfrei', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:GFM_ABDe_2-4_155.jpg' }
    ] },
  { id: 'gfm-abde-44', kat: 'historisch', name: 'ABDe 4/4', beiname: '161–167', typ: 'Normalspur-Triebwagen der GFM (historisch)', bahn: 'tpf', vorlaeufig: false,
    text: ['Die ABDe 4/4 161 bis 167 von SIG und BBC entstanden 1946 bis 1948 und modernisierten die Normalspurstrecken der GFM. Die meisten wurden 1965 umgebaut.', 'Mehrere Triebwagen sind inzwischen abgebrochen.'],
    kennzahlen: [['1946', 'erste gebaut'], ['1965', 'umgebaut'], ['SIG / BBC', 'Hersteller'], ['48', 'Plätze (16 + 32)']],
    daten: { 'Bauart': 'Elektrischer Triebwagen', 'Hersteller': 'SIG und BBC', 'Betreiber': 'GFM', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '161–167 (166 als ABe 4/4)', 'Sitzplätze': '16 in der 1., 32 in der 2. Klasse', 'Verbleib': '162, 163 und 167 abgebrochen', 'In Betrieb seit': '1946' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Sitzplätze', 'Verbleib', 'In Betrieb seit'],
    abschnitte: [],
    quellen: ['Wikipedia (Englisch) – Transports publics Fribourgeois, Rollmaterial', 'Datenblatt HCKD «ABDe 4/4 161–167», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: GFM_CREME, akzent: '#3E5A3B', tuer: '#3E5A3B', panto: true },
    bilder: [
      { src: 'bilder/gfm-abde-44-c1.jpg', titel: 'ABDe 4/4 162 in Ins', foto: 'J.J.Smit', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:GFM0010_Automotrice_ABDe_44_162_%C3%A0_Anet.png' },
      { src: 'bilder/gfm-abde-44-c2.jpg', titel: 'ABDe 4/4 167 in Bulle', foto: 'J.J.Smit', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:GFM0016_Automotrice_ABDe_44_167_%C3%A0_Bulle.png' }
    ] },
  { id: 'gfm-rbde-567', kat: 'historisch', name: 'RBDe 567', beiname: '171–182', typ: 'Ältere Regional-Pendelzüge der GFM und TPF', bahn: 'tpf', vorlaeufig: false,
    text: ['Die Pendelzug-Triebwagen 171 bis 173 von 1983 und 181 bis 182 von 1991 gehören zur Familie der Privatbahn-NPZ. Die 173 kam 1992 von der RVT.', 'In der aktuellen Flottenübersicht der TPF stehen sie nicht mehr; fotografiert wurde die 171 noch 2024.'],
    kennzahlen: [['5', 'Triebwagen'], ['1983', 'erste gebaut'], ['1991', 'zweite Serie'], ['Normalspur', 'Spurweite']],
    daten: { 'Bauart': 'Elektrischer Triebwagen für Pendelzüge', 'Hersteller': 'SIG, SWS, BBC (171–173); SWP, SIG, ABB (181–182)', 'Betreiber': 'GFM, später TPF', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '171–173, 181–182', 'Anzahl': '5', 'In Betrieb seit': '1983' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Anzahl', 'In Betrieb seit'],
    abschnitte: [],
    quellen: ['Wikipedia (Englisch) – Transports publics Fribourgeois, Rollmaterial', 'Wikimedia Commons – Fotos der Triebwagen 171 und 182', 'Datenblätter HCKD zu RBDe 567 171–173 und 181–182, Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: W1, akzent: TPF_BLAU, tuer: TPF_BLAU, panto: true },
    bilder: [
      { src: 'bilder/gfm-rbde-567-c1.jpg', titel: 'Triebwagen 182 in Ins (2000)', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:18_003_Bf_Ins,_RABDe_4-4_182_GFM.jpg' },
      { src: 'bilder/gfm-rbde-567-c2.jpg', titel: 'Triebwagen 171 (2005)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20051013S29a_171.jpg' }
    ] },
  { id: 'gfm-ee-91', kat: 'historisch', name: 'Ee 2/2', beiname: '91', typ: 'Elektrische Normalspur-Rangierlok (historisch)', bahn: 'tpf', vorlaeufig: false,
    text: ['Die kleine Rangierlok Ee 2/2 91 wurde 1960 von SIG und BBC gebaut. Sie rangierte auf dem Normalspurnetz der GFM, etwa in Bulle, und trug später die Nummer 217 091.'],
    kennzahlen: [['1960', 'gebaut'], ['SIG / BBC', 'Hersteller'], ['217 091', 'spätere Nummer'], ['Normalspur', 'Spurweite']],
    daten: { 'Bauart': 'Elektrische Rangierlok', 'Hersteller': 'SIG und BBC', 'Betreiber': 'GFM, später TPF', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '91 (später 217 091)', 'In Betrieb seit': '1960' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'In Betrieb seit'],
    abschnitte: [],
    quellen: ['Wikipedia (Englisch) – Transports publics Fribourgeois, Rollmaterial', 'Datenblatt HCKD «Ee 2/2 91», Oktober 2026'],
    art: { typ: 'rangier', farbe: GFM_BLAU, panto: true, klein: true },
    bilder: [
      { src: 'bilder/gfm-ee-91-c1.jpg', titel: 'Ee 2/2 91 (217 091) in Bulle (2005)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:TPF-Ee217091vorne_Bulle-2005.jpg' }
    ] },
  { id: 'gfm-wagen', kat: 'historisch', name: 'Historische Wagen', beiname: 'GFM', typ: 'Erhaltene Personen- und Güterwagen der GFM', bahn: 'tpf', vorlaeufig: false,
    text: ['Neben Triebfahrzeugen sind auch Wagen der GFM erhalten. GFM Historique bewahrt den Personenwagen B 235 von 1903 und den Steuerwagen CFt4 273.', 'Die gedeckten Güterwagen K 671 und K 672 stehen bei der Museumsbahn Blonay–Chamby.'],
    kennzahlen: [['B 235', 'Personenwagen 1903'], ['CFt4 273', 'Steuerwagen'], ['K 671, K 672', 'Güterwagen'], ['Meterspur', 'Spurweite']],
    daten: { 'Bauart': 'Personen-, Steuer- und Güterwagen', 'Betreiber': 'CEG/GFM, heute Museumsvereine', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'B 235, CFt4 273, K 671, K 672', 'Erhalten': 'GFM Historique; Blonay–Chamby' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Erhalten'],
    abschnitte: [],
    quellen: ['GFM Historique – Sammlung', 'Wikimedia Commons – Fotos der K 671 und K 672', 'Datenblätter HCKD zu B 235, CFt 273 und K 671–674, Oktober 2026'],
    art: { typ: 'wagen', geschlossen: true, zweiachs: true, farbe: '#7A4B2A', akzent: '#3A2A1E' },
    bilder: [
      { src: 'bilder/gfm-wagen-c1.jpg', titel: 'Gedeckter Güterwagen K 671 in Vevey (2016)', foto: 'Allmendstrasse', lizenz: 'CC BY 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Blonay%E2%80%93Chamby_Gruy%C3%A8re%E2%80%93Fribourg%E2%80%93Morat_K_671_discoveries_space_nest_Vevey.jpg' },
      { src: 'bilder/gfm-wagen-c2.jpg', titel: 'Güterwagen K 671 an der Chocolaterie Broc', foto: 'Mathoche Speurif', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:GFM_671_K3_Chocolaterie_Broc.jpg' }
    ] }
);
