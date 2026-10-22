/* RailBase – Fahrzeuge der Rhätischen Bahn (RhB). Gleiche Form wie fahrzeuge.js, mit bahn: 'rhb'. */
'use strict';

/* =====================================================================
   Rhätische Bahn (RhB)
   Grundlage: Fahrzeugkompendium von HCKD (22. Oktober 2026), geprüft mit
   den Projektseiten der RhB (Capricorn, Allegra, Alvra, Lösch- und
   Rettungsfahrzeuge), Stadler-Datenblättern und Wikipedia.
   Korrigiert und ergänzt: Ge 4/4 II mit 1700 kW Stundenleistung und 90 km/h,
   Abbrüche 613, 616, 619, 628; Ge 4/4 III 650–652 von Adtranz, 653 «St. Moritz»;
   Gem 4/4 802 heisst «Murmeltier»; ABe 4/4 III seit Ende 2023 ausser Regelbetrieb;
   Ge 6/6 II seit 2020 ausgemustert, 702 im Verkehrshaus.
   Nicht aufgenommen: Bau- und Privatfahrzeuge fremder Firmen (Kapitel 12).
   ===================================================================== */
const RHB_ROT = '#C4122F', RHB_GRAU = '#3A4047', RHB_BRAUN = '#6B4A2E', RHB_GRUEN = '#3E6B4A', RHB_DUNKEL = '#22272B';
const RHB_Q = 'Dossier HCKD «Rhätische Bahn – Fahrzeugkompendium», Oktober 2026';
ZUEGE.push(
  // ---------- Personenverkehr ----------
  { id: 'rhb-capricorn', kat: 'personenverkehr', name: 'ABe 4/16', beiname: 'Capricorn', typ: 'Vierteiliger Regionaltriebzug von Stadler für das Stammnetz', bahn: 'rhb', vorlaeufig: false,
    text: ['Der Capricorn ist der neueste Regionaltriebzug der RhB. Stadler baut die vierteiligen Züge seit 2019; im Fahrgastbetrieb sind sie seit 2020.', 'Mehrere Züge lassen sich automatisch kuppeln und unterwegs wieder trennen. So fahren sie gemeinsam los und bedienen danach verschiedene Ziele.'],
    kennzahlen: [['56', 'Züge im Einsatz (3111–3166)'], ['164', 'Sitzplätze'], ['120 km/h', 'Höchstgeschwindigkeit'], ['2020', 'im Fahrgastbetrieb']],
    daten: { 'Bauart': 'Elektrischer Niederflur-Triebzug, 4 Wagen', 'Hersteller': 'Stadler', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '11 kV 16,7 Hz', 'Achsfolge': "Bo'Bo' + 2'2' + 2'2' + 2'2'", 'Fahrzeugnummern': '3111–3166, Erweiterung bis 3172', 'Länge': '76,4 m über Kupplung', 'Breite': '2,67 m', 'Gewicht': '119 t leer, 146 t beladen', 'Leistung': '1000 kW dauernd, 1600 kW maximal (am Rad)', 'Anfahrzugkraft': '142 kN', 'Höchstgeschwindigkeit': '120 km/h', 'Sitzplätze': '35 in der 1., 129 in der 2. Klasse, dazu 18 Klappsitze', 'Anzahl': '56 Züge, 6 weitere ab Ende 2026', 'In Betrieb seit': '2020' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Achsfolge', 'Fahrzeugnummern', 'Länge', 'Breite', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Technik nach Stadler (Datenblatt TMRHB0922e) und der RhB. Die RhB nennt 1000 kW als Dauerleistung, Stadler 1600 kW als maximale Leistung. Eine ältere Werbeseite nennt 114 t ohne klaren Bezug; hier gelten 119 t leer laut RhB-Projektseite.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler baut die Capricorn für die RhB. Die ersten Fahrzeuge entstanden 2019; der Zug 3111 fuhr am 17. Juni 2020 erstmals im Fahrplan. Die Grundserie umfasst 56 Züge mit den Nummern 3111–3166.', 'Die RhB nennt sechs weitere Züge, die im zweiten Halbjahr 2026 geliefert werden; die Register führen dafür Nummern bis 3172. Jeder Wagen hat zudem eine eigene Nummer, etwa Be 4/4 31011 im Zug 3111.'] },
      { titel: 'Einsatz und Technik', p: ['Die Capricorn fahren laut RhB auf Landquart–Davos–Filisur, Landquart–Scuol, Landquart–St. Moritz und Chur–Disentis/Mustér. Zwei bis vier Züge können als ein Zug fahren und sich in Klosters Platz trennen («Flügeln»).', 'Der Triebwagen hat vier angetriebene Achsen und zieht drei weitere Wagen. Der Zug ist 76,4 m lang, wiegt leer 119 t und fährt bis 120 km/h. Die Anfahrzugkraft beträgt 142 kN, die elektrische Bremsleistung bis 2200 kW.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['164 Sitzplätze: 35 in der 1. und 129 in der 2. Klasse, dazu 18 Klappsitze', 'Drei breite Niederflureinstiege, 2 Rollstuhlplätze und ein rollstuhlgängiges WC', 'Bis zu 12 Veloplätze in Mehrzweckabteilen', 'Klimaanlage, zwei Steckdosen pro Abteil und das Bild der Frontkamera auf den Fahrgastbildschirmen', 'Wickeltische in beiden WCs'] }
    ],
    quellen: ['RhB – Projektseite Capricorn-Triebzüge', 'Stadler – Datenblatt Regional Train Capricorn (TMRHB0922e, 2022)', 'Wikipedia – RhB ABe 4/16 3111–3166', RHB_Q],
    art: { typ: 'triebzug', nase: 'mittel', farbe: RHB_ROT, akzent: RHB_GRAU, tuer: '#9AA1A8', panto: true },
    bilder: [
      { src: 'bilder/rhb-capricorn-c1.jpg', titel: 'Capricorn 3112 bei Bever (2021)', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_ABe_4-16_Capricorn_3112_Bever.jpg' },
      { src: 'bilder/rhb-capricorn-c2.jpg', titel: 'Capricorn zwischen Davos Wolfgang und Davos Laret (2020)', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_ABe_4-16_Capricorn_Davos_Wolfgang_-_Davos_Laret.jpg' },
      { src: 'bilder/rhb-capricorn-c3.jpg', titel: 'Gekuppelte Capricorn 3122 und 3119 in Davos Dorf (2024)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Davos_Dorf_RhB_3122-3119_20241002E067.jpg' }
    ] },
  { id: 'rhb-allegra', kat: 'personenverkehr', name: 'ABe 8/12', beiname: 'Allegra', typ: 'Dreiteiliger Zweisystem-Triebzug für Stammnetz und Berninalinie', bahn: 'rhb', vorlaeufig: false,
    text: ['Der Allegra fährt mit Wechselstrom auf dem Stammnetz und mit Gleichstrom auf der Berninalinie. So verbindet er beide Netze ohne Lokwechsel.', 'Die 15 Züge von Stadler können zusätzliche Wagen ziehen, etwa die Panoramawagen des Bernina Express.'],
    kennzahlen: [['15', 'Züge (3501–3515)'], ['2600 kW', 'Leistung (Wechselstrom)'], ['100 km/h', 'Höchstgeschwindigkeit'], ['2010', 'im Fahrplan']],
    daten: { 'Bauart': 'Elektrischer Zweisystem-Triebzug, 3 Wagen', 'Hersteller': 'Stadler', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '11 kV 16,7 Hz · 1000 V Gleichstrom', 'Achsfolge': "Bo'Bo' + 2'2' + Bo'Bo'", 'Fahrzeugnummern': '3501–3515', 'Länge': '49,5 m', 'Breite': '2,65 m', 'Gewicht': '106 t leer', 'Leistung': '2600 kW (Wechselstrom), 2400 kW (Gleichstrom), am Rad', 'Anfahrzugkraft': '260 kN', 'Höchstgeschwindigkeit': '100 km/h', 'Sitzplätze': '24 in der 1., 76 in der 2. Klasse, dazu 14 Klappsitze', 'Anzahl': '15 Züge', 'In Betrieb seit': '2010' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Achsfolge', 'Fahrzeugnummern', 'Länge', 'Breite', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Werte nach dem Stadler-Datenblatt SRhBZS1009d. Spätere Übersichten nennen höhere Werte (2800 kW, 280 kN); ohne ein neueres Datenblatt bleiben hier die ursprünglichen Angaben.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler lieferte 15 Züge. Die erste Übergabe fand am 14. Oktober 2009 in Landquart statt, der Fahrplanbetrieb begann 2010. Die Beschaffung kostete rund 150 Millionen Franken.', 'Jeder Zug trägt den Namen einer Persönlichkeit aus Graubünden.'],
        tabelle: { kopf: ['Zug', 'Name', 'Zug', 'Name'], zeilen: [
          ['3501', 'Willem Jan Holsboer', '3509', 'Placidus Spescha'], ['3502', 'Friedrich Hennings', '3510', 'Alberto Giacometti'], ['3503', 'Carlo Janka', '3511', 'Otto Barblan'],
          ['3504', 'Dario Cologna', '3512', 'Jörg Jenatsch'], ['3505', 'Giovanni Segantini', '3513', 'Simeon Bavier'], ['3506', 'Anna von Planta', '3514', 'Steivan Brunies'],
          ['3507', 'Benedetg Fontana', '3515', 'Alois Carigiet'], ['3508', 'Richard Coray', '', '']] } },
      { titel: 'Einsatz und Technik', p: ['Zwei angetriebene Endwagen rahmen einen Laufwagen ein; 8 der 12 Achsen sind angetrieben. Vier unabhängige Antriebsstränge mit wassergekühlten IGBT-Stromrichtern machen den Zug robust.', 'Der Allegra zieht auf der Berninalinie zusätzliche Wagen über Steigungen bis 70 Promille. Am 20. Dezember 2010 erreichte der Zug 3502 im Vereinatunnel 145 km/h, einen Rekord für die Meterspur.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['100 Sitzplätze: 24 in der 1. und 76 in der 2. Klasse, dazu 14 Klappsitze', '2 Rollstuhlplätze, geschlossenes rollstuhlgängiges WC und Schiebetritt', 'Niederflureinstieg im Mittelteil (480 mm); der übrige Boden ist hochflurig', 'Klimaanlage und Fahrgastinformation auf Bildschirmen', 'Aussicht nach vorn aus der 1. Klasse hinter dem Führerstand'] }
    ],
    quellen: ['Stadler – Datenblatt Zweispannungstriebzug (SRhBZS1009d)', 'RhB/Stadler – Medienmitteilung Roll-out Allegra, 14. Oktober 2009', 'RhB – Projektseite Allegra-Triebzüge', 'Wikipedia – RhB ABe 8/12', RHB_Q],
    art: { typ: 'triebzug', nase: 'mittel', farbe: RHB_ROT, akzent: RHB_GRAU, tuer: '#9AA1A8', panto: true },
    bilder: [
      { src: 'bilder/rhb-allegra-c1.jpg', titel: 'Allegra mit Regionalzug zwischen Bernina Lagalb und Ospizio Bernina (2011)', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_ABe_8-12_Allegra_between_Lagalb_and_Ospizio_Bernina.jpg' },
      { src: 'bilder/rhb-allegra-c2.jpg', titel: 'Allegra 3504 in Chur (2022)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:10_FR_ABe_8-12_3504_Chur_020722_R_1445.jpg' },
      { src: 'bilder/rhb-allegra-c3.jpg', titel: 'Allegra bei Alp Grüm (2024)', foto: 'Hansueli Krapf', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:2024-08-04_14-20-32_Alp_Gr%C3%BCm_Alp_Gr%C3%BCm_2136.0.jpg' }
    ] },
  { id: 'rhb-allegra-stz', kat: 'personenverkehr', name: 'ABe 4/16', beiname: 'Allegra 3101–3105', typ: 'Vierteiliger Stammnetz-Triebzug für die S-Bahn Chur', bahn: 'rhb', vorlaeufig: false,
    text: ['Die fünf vierteiligen Allegra 3101–3105 sind vom Zweisystem-Allegra abgeleitet. Sie fahren nur mit Wechselstrom und haben einen einzigen angetriebenen Wagen.', 'Die RhB setzt sie vor allem im Pendlerverkehr rund um Chur ein.'],
    kennzahlen: [['5', 'Züge (3101–3105)'], ['180', 'Sitzplätze'], ['100 km/h', 'Höchstgeschwindigkeit'], ['2013', 'im Fahrplan']],
    daten: { 'Bauart': 'Elektrischer Niederflur-Triebzug, 4 Wagen', 'Hersteller': 'Stadler', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '11 kV 16,7 Hz', 'Achsfolge': "Bo'Bo' + 2'2' + 2'2' + 2'2'", 'Fahrzeugnummern': '3101–3105', 'Länge': '74,75 m über Kupplung', 'Breite': '2,65 m', 'Gewicht': '113 t leer', 'Leistung': '1400 kW maximal am Rad', 'Anfahrzugkraft': '140 kN', 'Höchstgeschwindigkeit': '100 km/h (technisch 120 km/h)', 'Sitzplätze': '24 in der 1., 156 in der 2. Klasse, dazu 22 Klappsitze', 'Anzahl': '5 Züge', 'In Betrieb seit': '2013' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Achsfolge', 'Fahrzeugnummern', 'Länge', 'Breite', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Werte nach dem Stadler-Datenblatt SRhBSN0910d. Die RhB-Werbeseite nennt 140 t ohne klaren Bezug und 1160 kW Dauerleistung.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler baute die fünf Züge als Ableitung des Zweisystem-Allegra. Laut Hersteller fahren sie seit 2013 im Fahrplan; einzelne Wagen wurden schon früher gebaut.', 'Die Züge heissen 3101 «Meta von Salis», 3102 «Richard La Nicca», 3103 «Hortensia von Gugelberg», 3104 «Achilles Schucan» und 3105 «Angelika Kauffmann». Trotz der gleichen Bezeichnung ABe 4/16 sind sie keine Capricorn.'] },
      { titel: 'Einsatz und Technik', p: ['Ein Triebwagen zieht zwei Niederflur-Zwischenwagen und einen Steuerwagen. Zwei redundante Antriebsstränge mit wassergekühlten IGBT-Stromrichtern liefern bis 1400 kW.', 'Die RhB setzt die Züge im Pendlerverkehr der Agglomeration Chur ein, etwa auf der S-Bahn Chur–Thusis. Fotos zeigen sie auch im Engadin.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['180 Sitzplätze: 24 in der 1. und 156 in der 2. Klasse, dazu 22 Klappsitze', 'Niederflureinstieg 480 mm, Türen 1,2 m breit', 'Rollstuhlbereich, Mehrzweckraum und geschlossenes rollstuhlgängiges WC', 'Klimaanlage und Fahrgastinformation auf Bildschirmen'] }
    ],
    quellen: ['Stadler – Datenblatt Stammnetztriebzug (SRhBSN0910d)', 'RhB – Projektseite Allegra-Triebzüge', RHB_Q],
    art: { typ: 'triebzug', nase: 'mittel', farbe: RHB_ROT, akzent: RHB_GRAU, tuer: '#9AA1A8', panto: true },
    bilder: [
      { src: 'bilder/rhb-allegra-stz-c1.jpg', titel: 'Allegra 3104 als S-Bahn Chur–Thusis bei Felsberg (2015)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_ABe_4-16_3104_Felsberg_240115_S2_1561_Chur-Thusis.jpg' },
      { src: 'bilder/rhb-allegra-stz-c2.jpg', titel: 'Allegra 3101 in Samedan (2021)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Samedan_RhB-3101_20210207E037.jpg' },
      { src: 'bilder/rhb-allegra-stz-c3.jpg', titel: '1. Klasse im Allegra 3103 (2016)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_ABe_4-16_3103_interno_1a_cl_150716.jpg' }
    ] },
  { id: 'rhb-alvra', kat: 'personenverkehr', name: 'Alvra', beiname: 'Gliederzüge 5701–5706', typ: 'Lokbespannte Gliederzüge für die Albulalinie', bahn: 'rhb', vorlaeufig: false,
    text: ['Die sechs Alvra-Züge bestehen aus fest gekuppelten Gliederwagen. Sie haben keinen eigenen Antrieb; eine Lok zieht sie.', 'Seit 2016 fahren sie auf der Albulalinie zwischen Chur und St. Moritz. «Alvra» ist das rätoromanische Wort für Albula.'],
    kennzahlen: [['6', 'Züge (5701–5706)'], ['280', 'Sitzplätze'], ['4', 'Rollstuhlplätze'], ['2016', 'im Einsatz']],
    daten: { 'Bauart': 'Gliederzug aus 6 Wagen, dazu ein Steuerwagen', 'Hersteller': 'Stadler', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Kein eigener Antrieb (Lok)', 'Fahrzeugnummern': '5701–5706; Steuerwagen At 57801–57806', 'Sitzplätze': '63 in der 1., 217 in der 2. Klasse, dazu 13 Klappsitze', 'Anzahl': '6 Züge', 'In Betrieb seit': '2016' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Antrieb', 'Fahrzeugnummern', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Platzangaben nach der RhB-Projektseite; sie gelten für den beschriebenen Zug und ändern sich mit zusätzlichen Wagen.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Alvra-Züge 5701–5706 bestehen aus den Gliederwagen A 570, AB 572, B 573, B 574, Bi 576 und B 577. Dazu gehören die Steuerwagen At 57801–57806; mit ihnen wendet der Zug, ohne dass die Lok umfahren muss.', 'Zusätzliche Wagen sind eigene Fahrzeuge. So fahren seit 2024 die Velowagen BD 56401–56406 mit, die aus älteren Steuerwagen umgebaut wurden.'] },
      { titel: 'Einsatz und Technik', p: ['Die Züge verkehren seit 2016 auf der Albulalinie Chur–St. Moritz und werden von einer Streckenlok der RhB gezogen.', 'In einem Gliederzug sind kurze Wagen fest miteinander verbunden. Einige Wagen haben einen Niederflurteil für den stufenlosen Einstieg.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['280 Sitzplätze: 63 in der 1. und 217 in der 2. Klasse, dazu 13 Klappsitze', 'Niederflureinstiege mit Schiebetritt, 4 Rollstuhlplätze und zugängliche WCs', 'Klimaanlage und Fahrgastinformation', 'Familienabteil mit Spielecke, Freizeitabteil für Sportgeräte und Fotoabteil mit grossen Fenstern'],
        tabelle: { kopf: ['Wagen', 'Funktion'], zeilen: [
          ['A 570', 'Endwagen 1. Klasse mit WCs'], ['AB 572', 'Wagen 1. und 2. Klasse'], ['B 573, B 574', '2. Klasse mit Stellplatz für Velos oder Kinderwagen'],
          ['Bi 576', 'Endwagen 2. Klasse, Niederflur, Rollstuhlbereich, zugängliches WC und Fotoabteil'], ['B 577', '2. Klasse mit Familien- und Freizeitabteil und Spielecke'],
          ['At 578', 'Steuerwagen 1. Klasse, Niederflur, Rollstuhlbereich und zugängliches WC']] } }
    ],
    quellen: ['RhB – Projektseite Alvra-Gliederzüge', 'RhB – Visualisierung Alvra-Gliederzug', 'Haribu – Register Triebzüge und Gliederzüge (Stand 11.09.2026)', RHB_Q],
    art: { typ: 'wagen', farbe: RHB_ROT, akzent: RHB_GRAU },
    bilder: [
      { src: 'bilder/rhb-alvra-c1.jpg', titel: 'Alvra-Zug zwischen Filisur und Alvaneu (2023)', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Alvra_Filisur_-_Alvaneu.jpg' },
      { src: 'bilder/rhb-alvra-c2.jpg', titel: 'Im Alvra-Gliederzug (2017)', foto: 'Kecko', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_-_Articulated_Train_Alvra_(36806241801).jpg' },
      { src: 'bilder/rhb-alvra-c3.jpg', titel: 'Spielecke im Freizeitabteil (2024)', foto: 'Geogast', lizenz: 'CC BY 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Alvra_%E2%80%A2_Spielecke_im_Freizeitabteil_%E2%80%A2_2.jpg' },
      { src: 'bilder/rhb-alvra-c4.jpg', titel: 'Steuerwagen At 578 eines Alvra-Zugs (2018)', foto: 'Heitersberg', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Steuerwagen_At_578.jpg' }
    ] },
  { id: 'rhb-ge44ii', kat: 'personenverkehr', name: 'Ge 4/4 II', beiname: '611–633', typ: 'Elektrische Streckenlok für Reise- und Güterzüge', bahn: 'rhb', vorlaeufig: false,
    text: ['Die Ge 4/4 II prägten jahrzehntelang den Verkehr auf dem Stammnetz der RhB. SLM und BBC bauten die 23 Loks 1973 und 1984/85.', 'Sie ziehen Reise- und Güterzüge. Seit 2019 werden einzelne Loks ausgemustert.'],
    kennzahlen: [['23', 'Loks gebaut (611–633)'], ['1700 kW', 'Stundenleistung'], ['90 km/h', 'Höchstgeschwindigkeit'], ['1973', 'erste Serie']],
    daten: { 'Bauart': 'Elektrische Lokomotive', 'Hersteller': 'SLM, BBC', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '11 kV 16,7 Hz', 'Achsfolge': "Bo'Bo'", 'Fahrzeugnummern': '611–620 (1973), 621–633 (1984/85)', 'Länge': '12,96 m über Puffer', 'Gewicht': '50 t', 'Leistung': '1700 kW (Stundenleistung)', 'Anfahrzugkraft': '179 kN', 'Höchstgeschwindigkeit': '90 km/h', 'Anzahl': '23 gebaut', 'In Betrieb seit': '1973' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Achsfolge', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Die RhB-Werbeseite nennt 1700 kW als Dauerleistung, Wikipedia als Stundenleistung. Von den 23 Loks sind mehrere schon abgebrochen (628, 619, 616, 613).',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SLM baute die mechanischen Teile, BBC die elektrische Ausrüstung. Die erste Serie 611–620 kam 1973, die zweite Serie 621–633 in den Jahren 1984/85.', 'Die Loks tragen Namen von Bündner Gemeinden, etwa 611 «Landquart» oder 633 «Zuoz». Die 611 fährt seit April 2024 wieder im ursprünglichen Grün.'] },
      { titel: 'Einsatz und Technik', p: ['Die Ge 4/4 II ziehen Regional- und Schnellzüge sowie Güterzüge auf dem Wechselstromnetz der RhB, auch auf der Arosalinie. Mit den Steuerwagen BDt 1751 und 1752 fahren sie auch im Pendelbetrieb.', 'Vier Fahrmotoren leisten 1700 kW. Die Lok ist 12,96 m lang, wiegt 50 t und fährt bis 90 km/h. Seit 2016 erhalten die Loks die Zugsicherung ZSI 127 und eine duale Bremse. Ab 2019 wurden die 628, 619, 616 und 613 abgebrochen.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Zwei Führerstände', 'Elektrische Widerstandsbremse', 'Pendelbetrieb mit den Steuerwagen BDt 1751 und 1752', 'Seit 2016: Zugsicherung ZSI 127 und duale Bremse'] }
    ],
    quellen: ['Wikipedia – RhB Ge 4/4 II', 'RhB – Werbelokomotiven, technische Eckdaten', 'Stiftung GRÜN & CHROM – Ge 4/4 II grün', RHB_Q],
    art: { typ: 'lok', kurz: true, farbe: RHB_ROT, akzent: '#E6E8EA', panto: true },
    bilder: [
      { src: 'bilder/rhb-ge44ii-c1.jpg', titel: 'Ge 4/4 II 617 in Filisur (2022)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:1_FR_Ge_4-4_II_617_Filisur_020722_PE_905.jpg' },
      { src: 'bilder/rhb-ge44ii-c2.jpg', titel: 'Ge 4/4 II 611 «Landquart» im grünen Anstrich in Disentis/Mustér (2024)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_Ge_4-4_II_611_Disentis-Muster_290624.jpg' },
      { src: 'bilder/rhb-ge44ii-c3.jpg', titel: 'Ge 4/4 II 622 (2024)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20241004E078_RhB_622.jpg' }
    ] },
  { id: 'rhb-ge44iii', kat: 'personenverkehr', name: 'Ge 4/4 III', beiname: '641–653', typ: 'Elektrische Streckenlok für Albula und Vereina', bahn: 'rhb', vorlaeufig: false,
    text: ['Die Ge 4/4 III sind die stärksten Streckenloks der RhB. Die zwölf Loks 641–652 kamen von 1993 bis 1999; die 653 ist eine ehemalige Lok der MOB.', 'Fast alle tragen farbige Werbung. Sie ziehen Schnellzüge über die Albula und die Autozüge durch den Vereinatunnel.'],
    kennzahlen: [['13', 'Loks (641–653)'], ['2400 kW', 'Dauerleistung'], ['100 km/h', 'Höchstgeschwindigkeit'], ['1993', 'erste Lok']],
    daten: { 'Bauart': 'Elektrische Lokomotive mit Drehstromantrieb', 'Hersteller': 'SLM, ABB; 650–652 Adtranz', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '11 kV 16,7 Hz', 'Achsfolge': "Bo'Bo'", 'Fahrzeugnummern': '641–652, dazu 653 (ex MOB 8003)', 'Länge': '16,00 m über Puffer', 'Gewicht': '62 t', 'Leistung': '2400 kW dauernd', 'Höchstgeschwindigkeit': '100 km/h', 'Anzahl': '13', 'In Betrieb seit': '1993' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Achsfolge', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Werte nach der RhB-Werbeseite und Wikipedia. Die 653 wurde als MOB 8003 gebaut; Bau, Kauf, Umbau und Inbetriebnahme bei der RhB sind getrennte Ereignisse.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die RhB entwickelte die Lok ab 1989 mit SLM und ABB, um den Mehrverkehr nach der Eröffnung des Vereinatunnels zu bewältigen. Die 641 fuhr ab dem 7. Dezember 1993, die 642–652 folgten bis 1999 in drei Bestellungen; die 650–652 lieferte Adtranz.', 'Die RhB kaufte 2019 die MOB-Lok 8003. Sie diente als Muster für die Modernisierung und fährt als 653 «St. Moritz».'] },
      { titel: 'Einsatz und Technik', p: ['Die Loks ziehen Schnellzüge über die Albula, den Glacier Express und die Autozüge durch den Vereinatunnel. Drehstrom-Fahrmotoren mit GTO-Stromrichtern leisten 2400 kW dauernd.', 'Die Lok ist 16,00 m lang, wiegt 62 t und fährt bis 100 km/h. Seit 2016 werden die Loks modernisiert; die 644 war die erste, mit dualer Bremse, neuen Drehgestellen und Teilen für die Zugsicherung ZSI 127.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Zwei Führerstände', 'Drehstromantrieb mit vier Fahrmotoren', 'Modernisierung seit 2016: duale Bremse, neue Drehgestelle, ZSI 127', 'Werbung ist die Gestaltung einzelner Loks, keine eigene Bauart'] }
    ],
    quellen: ['Wikipedia – RhB Ge 4/4 III', 'RhB – Werbelokomotiven, technische Eckdaten', 'Lokstatistik Pospichal – RhB-Lokomotiven über 600', RHB_Q],
    art: { typ: 'lok', farbe: RHB_ROT, akzent: '#E6E8EA', panto: true },
    bilder: [
      { src: 'bilder/rhb-ge44iii-c1.jpg', titel: 'Ge 4/4 III 641 «Maienfeld» (2023)', foto: 'Fiver, der Hellseher', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:E-Lok_Ge_4_4_III_641_Maienfeld_der_Rh%C3%A4tischen_Bahn.jpg' },
      { src: 'bilder/rhb-ge44iii-c2.jpg', titel: 'Ge 4/4 III 644 mit Werbung für die Weltrekordfahrt (2023)', foto: 'Heitersberg', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Ge_4_4_III_644_Weltrekord.jpg' },
      { src: 'bilder/rhb-ge44iii-c3.jpg', titel: 'Ge 4/4 III 647 «Grüsch» in St. Moritz (2018)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Ge_4-4_Nr._647_%22Gr%C3%BCsch%22_in_St._Moritz.jpg' }
    ] },
  { id: 'rhb-panorama', kat: 'personenverkehr', name: 'Panorama- und Aussichtswagen', beiname: 'Bernina Express', typ: 'Panoramawagen des Bernina Express und offene Aussichtswagen', bahn: 'rhb', vorlaeufig: false,
    text: ['Für den Bernina Express hat die RhB eigene Panoramawagen mit grossen Fenstern bis ins Dach. Dazu kommen offene Aussichtswagen für den Sommer.', 'Die Wagen haben keinen eigenen Antrieb; ein Allegra oder eine Lok zieht sie.'],
    kennzahlen: [['2000', 'erste Panoramawagen'], ['2006/07', 'Wagen von Stadler'], ['1. und 2.', 'Klasse'], ['offen', 'Aussichtswagen im Sommer']],
    daten: { 'Bauart': 'Panoramawagen und offene Aussichtswagen', 'Hersteller': 'Stadler (Ap 1301–1306, Bp 2521–2526)', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Kein eigener Antrieb', 'Fahrzeugnummern': 'Ap 1291–1293, 1301–1306; Bp 2502–2507, 2521–2526; Bps 2511–2515; offene Wagen B 2091 ff. und 2111', 'In Betrieb seit': '2000' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Antrieb', 'Fahrzeugnummern', 'In Betrieb seit'],
    specNote: 'Nummern nach dem Wagenregister von Haribu (Stand September 2026). Die Platzzahlen hängen von der Ausführung ab und sind ohne aktuellen Wagenplan nicht angegeben.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die ersten Panoramawagen entstanden 2000. Stadler lieferte 2006/07 weitere Wagen der 1. und 2. Klasse. Die Servicewagen Bps 2511–2515 entstanden zum Teil aus älteren Wagen.'],
        tabelle: { kopf: ['Gruppe', 'Nummern', 'Baujahr'], zeilen: [
          ['Panoramawagen 1. Klasse', 'Ap 1291–1293', '2000'], ['Panoramawagen 1. Klasse', 'Ap 1301–1306', '2006/07 (Stadler)'], ['Panoramawagen 2. Klasse', 'Bp 2502–2507', '2000'],
          ['Servicewagen 2. Klasse', 'Bps 2511–2515', '2511 aus Wagen 2501, übrige 2006/07'], ['Panoramawagen 2. Klasse', 'Bp 2521–2526', '2006/07 (Stadler)']] } },
      { titel: 'Einsatz und Technik', p: ['Der Bernina Express fährt von Chur über die Albula und den Berninapass nach Tirano. Der Name bezeichnet den Zug, keine Fahrzeugbaureihe; auf der Berninalinie zieht oft ein Allegra die Wagen.', 'Die offenen Aussichtswagen der Gruppen 2091 ff. und 2111 entstanden durch Umbau älterer Wagen. Sie fahren im Sommer, etwa auf der Berninalinie und in der Rheinschlucht.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Grosse Panoramafenster bis ins Dach', 'Servicewagen mit eigener Raumaufteilung', 'Offene Aussichtswagen ohne Fenster für den Sommer', 'Kein eigener Antrieb'] }
    ],
    quellen: ['Haribu – Register A- und B-Wagen (Stand 11.09.2026)', RHB_Q],
    art: { typ: 'wagen', farbe: RHB_ROT, akzent: RHB_GRAU },
    bilder: [
      { src: 'bilder/rhb-panorama-c1.jpg', titel: 'Bernina Express mit Panoramawagen (2018)', foto: 'Hansueli Krapf', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:2018-08-29_14-53-00_Bernina_Express_train.jpg' },
      { src: 'bilder/rhb-panorama-c2.jpg', titel: 'Panoramawagen in Alp Grüm', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Carrozza_panoramica_an_der_Station_Alp_Gr%C3%BCm.jpg' },
      { src: 'bilder/rhb-panorama-c3.jpg', titel: 'Offener Aussichtswagen in Pontresina', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_offener_Personenwagen_in_Pontresina.jpg' }
    ] },
  { id: 'rhb-glacier', kat: 'personenverkehr', name: 'Glacier-Express-Wagen', beiname: 'RhB', typ: 'Panorama- und Servicewagen der RhB für den Glacier Express', bahn: 'rhb', vorlaeufig: false,
    text: ['Der Glacier Express fährt von St. Moritz und Davos nach Zermatt. Die RhB stellt dafür eigene Panorama- und Servicewagen, die MGB weitere.', 'Seit 2018 gibt es den Excellence-Class-Wagen Aps 1321.'],
    kennzahlen: [['6', 'Panoramawagen Ap 1310–1315'], ['7', 'Panoramawagen Bp 2531–2537'], ['3', 'Servicewagen WRp 3830–3832'], ['2018', 'Excellence Class']],
    daten: { 'Bauart': 'Panoramawagen und Servicewagen', 'Betreiber': 'RhB (Glacier Express gemeinsam mit der MGB)', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Kein eigener Antrieb', 'Fahrzeugnummern': 'Ap 1310–1315, Bp 2531–2537, WRp 3830–3832, Aps 1321' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Antrieb', 'Fahrzeugnummern'],
    specNote: 'Nummern nach den Registern von Haribu. Die Wagen der MGB sind eigene Fahrzeuge und hier nicht gezählt.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Der RhB-Anteil umfasst die Panoramawagen Ap 1310–1315 und Bp 2531–2537 sowie die Servicewagen WRp 3830–3832.', 'Der Excellence-Class-Wagen Aps 1321 entstand aus dem Bp 2538 von 2009 und wurde 2018 umgebaut. Es ist also derselbe Wagen, kein zusätzlicher.'] },
      { titel: 'Einsatz und Technik', p: ['Die Wagen fahren im Glacier Express auf den Netzen der RhB und der MGB. Weil die MGB Zahnstangenabschnitte hat, sind die Wagen dafür ausgerüstet; der Servicewagen WRp 3832 hat laut Fotobeschreibung kein Bremszahnrad.', 'Ein Glacier Express aus zwei Zugteilen wird in Disentis/Mustér getrennt, weil auf den Zahnstangenstrecken der MGB ein geringeres Zuggewicht gilt.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Panoramafenster bis ins Dach', 'Servicewagen WRp für die Verpflegung im Zug', 'Excellence Class im Aps 1321', 'Kein eigener Antrieb'] }
    ],
    quellen: ['Haribu – Register A-, B- und Speisewagen', 'Wikimedia Commons – Fotobeschreibungen zum Glacier Express', RHB_Q],
    art: { typ: 'wagen', farbe: RHB_ROT, akzent: W1 },
    bilder: [
      { src: 'bilder/rhb-glacier-c1.jpg', titel: 'Glacier Express in der Rheinschlucht vor Ilanz (2009)', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Ge_4-4_III_mit_Glacier_Express_bei_Ilanz.jpg' },
      { src: 'bilder/rhb-glacier-c2.jpg', titel: 'Servicewagen WRp 3832 des Glacier Express in Disentis/Mustér (2022)', foto: 'Kecko', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:Must%C3%A9r_-_RhB_Glacier_Express.jpg' }
    ] },
  { id: 'rhb-ew', kat: 'personenverkehr', name: 'Einheitswagen', beiname: 'EW I–IV', typ: 'Reisezugwagen der RhB für Regional- und Schnellzüge', bahn: 'rhb', vorlaeufig: false,
    text: ['Die Einheitswagen EW I bis EW IV sind die klassischen Reisezugwagen der RhB. Sie entstanden ab den 1960er-Jahren in mehreren Generationen.', 'In jeder Generation gibt es Wagen verschiedener Länge, Klasse und Umbaustände.'],
    kennzahlen: [['4', 'Generationen (EW I–IV)'], ['1968', 'EW I (AB 1541–1546)'], ['1975', 'EW II (AB 1561–1565)'], ['1983', 'EW III']],
    daten: { 'Bauart': 'Reisezugwagen mit Drehgestellen', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Kein eigener Antrieb', 'Fahrzeugnummern': 'Beispiele: AB 1541–1546 (EW I), AB 1561–1565 (EW II), A 1271–1272 und B 2461–2468 (EW III), A 1273–1275 und B 2491–2497 (EW IV)' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Antrieb', 'Fahrzeugnummern'],
    specNote: 'Die Register nennen vor allem Nummern, Baujahre, Drehgestelle und Bremsen. Sitzplätze und Ausstattung hängen vom einzelnen Wagen ab und sind darum nicht angegeben.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Familien EW I bis EW IV sind Entwicklungsgruppen. Beispiele aus dem Register:'],
        tabelle: { kopf: ['Generation', 'Beispiele', 'Baujahr', 'Drehgestell'], zeilen: [
          ['EW I', 'AB 1541–1546', '1968', 'SWP 68'], ['EW II', 'A 1265–1270, AB 1561–1565', '1975 (AB 1561–1565)', 'SWP 74'],
          ['EW III', 'A 1271–1272, B 2461–2468', '1983', '–'], ['EW IV', 'A 1273–1275, A 1282–1283, B 2391–2393, B 2491–2497', '–', 'SIG 90']] } },
      { titel: 'Einsatz und Technik', p: ['Die Einheitswagen fahren in lokbespannten Regional- und Schnellzügen auf dem ganzen Netz, auf der Berninalinie auch hinter dem Allegra. Die AB 1541–1546 haben eine vakuumgesteuerte Druckluftbremse: Ein Vakuumsignal steuert die Bremse, die Bremskraft entsteht mit Druckluft.', 'Einige EW III trugen zeitweise fünfstellige Nummern der Reihen 531 und 541 und erhielten später wieder ihre alten Nummern. Einzelne EW IV tragen die Gestaltung «Arosa Bärenland».'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Wagen der 1. Klasse (A), der 2. Klasse (B) und beider Klassen (AB)', 'Ausstattung je nach Generation und Umbau verschieden', 'Einige EW I wurden 2002 umgebaut', 'Kein eigener Antrieb'] }
    ],
    quellen: ['Haribu – Register A-, AB- und B-Wagen (Stand 11.09.2026)', RHB_Q],
    art: { typ: 'wagen', farbe: RHB_ROT, akzent: RHB_GRAU },
    bilder: [
      { src: 'bilder/rhb-ew-c1.jpg', titel: 'Zug 1621 mit Allegra 3515 und Reisezugwagen auf der Berninalinie (2017)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Bernina_2017-07-14_3515-2451-2308-2465-1542-2473-3921.JPG' }
    ] },
  { id: 'rhb-steuerwagen', kat: 'personenverkehr', name: 'Steuerwagen', beiname: 'BDt, Bt und At', typ: 'Steuerwagen für Pendelzüge mit Lok', bahn: 'rhb', vorlaeufig: false,
    text: ['Mit einem Steuerwagen kann ein Lokzug die Richtung wechseln, ohne dass die Lok umfährt. Der Lokführer steuert die Lok dann vom Führerstand des Steuerwagens aus.', 'Die RhB hat mehrere Familien: die NEVA-Steuerwagen BDt, die Bt 52801–52808 von Stadler, die Steuerwagen der Alvra-Züge und jene der Autozüge.'],
    kennzahlen: [['8', 'Bt 52801–52808 (Stadler 2018)'], ['6', 'At 57801–57806 (Alvra)'], ['2', 'BDt 1751–1752 (NEVA)'], ['4', 'BDt der Autozüge']],
    daten: { 'Bauart': 'Steuerwagen ohne eigenen Antrieb', 'Hersteller': 'Stadler (Bt 52801–52808)', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Kein eigener Antrieb', 'Fahrzeugnummern': 'BDt 1751–1752, Bt 52801–52808, At 57801–57806, BDt 1721–1723 und 1731' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Antrieb', 'Fahrzeugnummern'],
    specNote: 'Nach dem Steuerwagenregister von Haribu (Stand 11. September 2026). Die Steuerwagen der Triebzüge Allegra und Capricorn gehören zu den jeweiligen Zügen.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die NEVA-Steuerwagen BDt 1753–1758 wurden 2024 zu den Velowagen BD 56401–56406 umgebaut.'],
        tabelle: { kopf: ['Familie', 'Nummern', 'Hinweis'], zeilen: [
          ['NEVA', 'BDt 1751–1752', 'für Ge 4/4 II und Triebzüge'], ['Universal', 'Bt 52801–52808', 'Stadler 2018'], ['Alvra', 'At 57801–57806', 'zu den Gliederzügen 5701–5706'],
          ['Autozüge Vereina', 'BDt 1721–1723, 1731', 'für den Autoverlad'], ['Pendelzug Be 4/4', 'ABDt 1716', 'abgestellt']] } },
      { titel: 'Einsatz und Technik', p: ['Der Steuerwagen hat einen Führerstand, aber keinen Fahrmotor. Die Leistung kommt von der Lok am anderen Zugende.', 'Die BDt 1751 und 1752 sind laut Register für die Ge 4/4 II und Triebzüge geeignet. Eine solche Freigabe gilt nur für die genannte Kombination.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Führerstand an einem Ende', 'BDt: 2. Klasse mit Gepäckabteil', 'At der Alvra-Züge: 1. Klasse, Niederflur, Rollstuhlbereich und zugängliches WC', 'Kein eigener Antrieb'] }
    ],
    quellen: ['Haribu – Steuerwagenregister (Stand 11.09.2026)', RHB_Q],
    art: { typ: 'wagen', farbe: RHB_ROT, akzent: RHB_GRAU },
    bilder: [
      { src: 'bilder/rhb-steuerwagen-c1.jpg', titel: 'Steuerwagen Bt 528 von Stadler', foto: 'Heitersberg', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Steuerwagen_Bt_528.jpg' },
      { src: 'bilder/rhb-steuerwagen-c2.jpg', titel: 'NEVA-Steuerwagen BDt 1755 in Chur (2015)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_BDt_1755_Chur_130615_R1452.jpg' }
    ] },
  { id: 'rhb-gastro', kat: 'personenverkehr', name: 'Speise- und Salonwagen', beiname: 'WR und Pullman', typ: 'Speise-, Bar-, Pullman- und Salonwagen der RhB', bahn: 'rhb', vorlaeufig: false,
    text: ['Die RhB hat historische Speisewagen, Barwagen und die Pullmanwagen des «Alpine Classic Pullman Express». Sie fahren in Charterzügen und auf Sonderfahrten.', 'Einige Speisewagen stammen aus den Jahren 1929 bis 1931.'],
    kennzahlen: [['1929', 'älteste Speisewagen'], ['4', 'Pullmanwagen As 1141–1144'], ['3', 'Speisewagen WR 3810–3812'], ['2', 'Barwagen WR-S 3820–3821']],
    daten: { 'Bauart': 'Speise-, Bar- und Salonwagen', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Kein eigener Antrieb', 'Fahrzeugnummern': 'WR 3810–3813, 3815; WR-S 3820–3821; As 1141–1144, As 1161' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Antrieb', 'Fahrzeugnummern'],
    specNote: 'Nach dem Speisewagenregister von Haribu (Stand 13. Dezember 2025). Die Ausstattung gilt für den einzelnen Wagen; ob ein Wagen heute für Charterfahrten verfügbar ist, ist nicht angegeben.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Der As 1154 steht laut Register als Leihgabe im Deutschen Museum.'],
        tabelle: { kopf: ['Wagen', 'Baujahr', 'Hinweis'], zeilen: [
          ['WR 3810–3812', '1929/30', 'historische Speisewagen'], ['WR 3813', '1931', 'aus dem A 1211 umgebaut'], ['WR 3815', '1984', 'Speisewagen'],
          ['WR-S 3820', '1928', 'Pianobar, Umbau 2010 (vorher WR-S 3814)'], ['WR-S 3821', '1929', '«Stiva Retica», Umbau 1993'],
          ['As 1141–1144', '1931', 'Pullmanwagen'], ['As 1161', '1929', 'Salonwagen']] } },
      { titel: 'Einsatz und Technik', p: ['Die Pullmanwagen As 1141–1144 fahren im «Alpine Classic Pullman Express», zum Beispiel 2024 mit der historischen Ge 4/4 I 605. Die Speisewagen laufen in Sonder- und Charterzügen.', 'Die Servicewagen WRp 3830–3832 des Glacier Express sind jüngere Fahrzeuge und keine historischen Speisewagen.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Küche und Speiseraum in den WR', 'Pianobar im WR-S 3820, Bar «Stiva Retica» im WR-S 3821', 'Salonabteile der 1. Klasse in den Pullmanwagen', 'Kein eigener Antrieb'] }
    ],
    quellen: ['Haribu – Register Speisewagen (Stand 13.12.2025) und A-Wagen', RHB_Q],
    art: { typ: 'wagen', farbe: '#5A1E1E', akzent: '#D8B66A' },
    bilder: [
      { src: 'bilder/rhb-gastro-c1.jpg', titel: 'Pullmanwagen As 1141 in Pontresina (2011)', foto: 'Bortz60', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Pullmanwagen_As_1141_in_Pontresina.JPG' },
      { src: 'bilder/rhb-gastro-c2.jpg', titel: 'Speisewagen WR 3810 (2009)', foto: 'NAC', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_WR_3810_070109.jpg' },
      { src: 'bilder/rhb-gastro-c3.jpg', titel: 'Im Speisewagen WR 3810 (2014)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_WR_3810_interno_231014.jpg' }
    ] },
  { id: 'rhb-vereina', kat: 'personenverkehr', name: 'Autozüge', beiname: 'Vereina', typ: 'Autoverlad durch den Vereinatunnel', bahn: 'rhb', vorlaeufig: false,
    text: ['Seit 1999 bringt die RhB Autos durch den Vereinatunnel zwischen Klosters Selfranga und Sagliains im Unterengadin.', 'Die Autozüge bestehen aus besonderen Transportwagen, auf die Autos selber auffahren, und aus Steuerwagen.'],
    kennzahlen: [['1999', 'Eröffnung'], ['19 km', 'Tunnellänge'], ['4', 'Steuerwagen BDt'], ['2', 'Verladestationen']],
    daten: { 'Bauart': 'Autotransportwagen und Steuerwagen', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'Skl-tv 8421–8499 (ältere), Slp-tvw 71201 ff. und 71301 ff., Slp-tv 71401 ff.; BDt 1721–1723, 1731', 'In Betrieb seit': '1999' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'In Betrieb seit'],
    specNote: 'Nach den Registern von Haribu. Die neueren Wagenreihen enthalten auch Einträge ohne Baujahr; sie sind hier nicht als vollständig geliefert gezählt.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Für den Autoverlad durch den 1999 eröffneten Vereinatunnel beschaffte die RhB besondere Wagen. Die älteren Auffahr- und Transportwagen heissen Skl-tv (Gruppen 8421 bis 8499), neuere Auffahrglieder Slp-tvw 71201 ff. und 71301 ff. sowie Slp-tv 71401 ff.', 'Zu den Autozügen gehören die Steuerwagen BDt 1721–1723 und 1731.'] },
      { titel: 'Einsatz und Technik', p: ['Die Autozüge pendeln zwischen Klosters Selfranga und Sagliains. Die Autos fahren an den Verladestationen über Rampen auf die Wagen und am anderen Ende wieder hinunter.', 'Eine Lok, meist eine Ge 4/4 III, zieht oder schiebt den Zug; am anderen Ende ist ein Steuerwagen.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Flache Wagen, auf die Autos selbst auffahren', 'Rampen an den Verladestationen Klosters Selfranga und Sagliains', 'Steuerwagen mit Führerstand', 'Die Reisenden bleiben während der Fahrt im Auto'] }
    ],
    quellen: ['Haribu – Register S-Wagen und Steuerwagen', 'RhB – Geschichte der Rhätischen Bahn', RHB_Q],
    art: { typ: 'wagen', var: 'flach', farbe: RHB_ROT },
    bilder: [
      { src: 'bilder/rhb-vereina-c1.jpg', titel: 'Blick in einen Transportwagen des Vereina-Autozugs', foto: 'Daniel Schwen', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:CH_Vereina_car_train.jpg' },
      { src: 'bilder/rhb-vereina-c2.jpg', titel: 'Autozug in Sagliains (2014)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Vereina_Sagliains_010214.jpg' }
    ] },
  { id: 'rhb-gepaeckwagen', kat: 'personenverkehr', name: 'Gepäck-, Velo- und Heizwagen', beiname: 'BD, WS, DS', typ: 'Wagen für Gepäck, Velos und Zugheizung', bahn: 'rhb', vorlaeufig: false,
    text: ['Für Gepäck, Velos und die Heizung der Züge hat die RhB eigene Wagen. Die meisten entstanden durch Umbau älterer Reisezugwagen.', 'Ein Heizwagen liefert Energie für den Zug, fährt aber nicht selbst.'],
    kennzahlen: [['6', 'Velowagen BD 56401–56406 (2024)'], ['8', 'Velowagen WS'], ['3', 'Heizwagen DS'], ['2024', 'neuester Umbau']],
    daten: { 'Bauart': 'Gepäck-, Velo- und Heizwagen', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Kein eigener Antrieb', 'Fahrzeugnummern': 'BD 2471–2475, 2481, 56401–56406; WS 3911–3914, 3921–3922, 3931–3932; DS 4220, 4222, 4226' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Antrieb', 'Fahrzeugnummern'],
    specNote: 'Nach den Registern von Haribu. Das Umbaujahr ist nicht das Baujahr des ursprünglichen Wagens.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die BD 2471–2474 sind umgebaute EW II, der BD 2475 ist ein umgebauter EW IV, der BD 2481 entstand aus dem DZ 4233. Die sechs BD 56401–56406 entstanden 2024 aus den NEVA-Steuerwagen BDt 1753–1758 und fahren als Velowagen in den Alvra-Zügen.', 'Auch die Velowagen WS 3911–3914, 3921–3922 und 3931–3932 sind umgebaute Reisezugwagen.'] },
      { titel: 'Einsatz und Technik', p: ['Ein BD hat Sitzplätze der 2. Klasse und ein Gepäckabteil. Die WS sind für Velos eingerichtet.', 'Die Heizwagen DS 4220, 4222 und 4226 liefern Energie für die Heizung der Züge. Sie haben keinen eigenen Fahrantrieb.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Gepäckabteil (BD)', 'Stellplätze für Velos (WS)', 'Energie für die Zugheizung (DS)', 'Kein eigener Antrieb'] }
    ],
    quellen: ['Haribu – Register BD-, WS- und D-Wagen', RHB_Q],
    art: { typ: 'wagen', geschlossen: true, farbe: RHB_ROT, akzent: RHB_GRAU },
    bilder: [
      { src: 'bilder/rhb-gepaeckwagen-c1.jpg', titel: 'Im Velowagen WS 3913 (2014)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_WS_3913_interno_010214.jpg' }
    ] },
  // ---------- Güterverkehr ----------
  { id: 'rhb-haik', kat: 'cargo', name: 'Haik', beiname: 'Schiebewandwagen', typ: 'Vierachsige Schiebewandwagen für Stückgut', bahn: 'rhb', vorlaeufig: false,
    text: ['Die Haik-Wagen haben grosse seitliche Schiebewände. So lassen sie sich schnell be- und entladen.', 'Einzelne Gruppen sind isoliert, beheizt oder gekühlt, etwa für Lebensmittel und Getränke.'],
    kennzahlen: [['26 t', 'Nutzlast (5101–5135)'], ['30 t', 'Nutzlast (ab 5136)'], ['14,7 m', 'Länge'], ['1970', 'erste Wagen']],
    daten: { 'Bauart': 'Vierachsiger Schiebewandwagen', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '5101–5135 (Haik-v, Haik-vy), 5136–5140 und 5171–5172; isolierte Wagen 5161 ff.', 'Länge': '14,70 m über Puffer', 'Gewicht': '13,2–17,3 t leer', 'Nutzlast': '26 oder 30 t' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Nutzlast'],
    specNote: 'Werte nach der Güterwagenseite der RhB. Isolation, Bodenheizung und Kühlaggregat haben nur bestimmte Wagen; massgebend ist der einzelne Wagen.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die RhB beschreibt zwei Hauptgruppen und dazu isolierte und temperierte Wagen.'],
        tabelle: { kopf: ['Gruppe', 'In Betrieb', 'Leergewicht', 'Nutzlast', 'Länge'], zeilen: [
          ['5101–5135 (Haik-v, Haik-vy)', '1970/80', '13,2–15,5 t', '26 t', '14,70 m'], ['5136–5140, 5171–5172', '1992', '16,1–17,3 t', '30 t', '14,67 m'],
          ['5161 ff. (isoliert, temperiert)', '–', '–', '–', '–']] } },
      { titel: 'Einsatz und Technik', p: ['Die Wagen bringen Stückgut, Getränke und Lebensmittel in die Täler Graubündens. Viele tragen die Werbung eines Kunden; daraus folgt aber keine bestimmte Kühltechnik.', 'Einige frühere Haik-Wagen wurden zu Containertragwagen umgebaut.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Grosse seitliche Schiebewände', 'Isolierte Wagen mit Bodenheizung oder Kühlaggregat (5161 ff.)', 'Vier Achsen in zwei Drehgestellen'] }
    ],
    quellen: ['RhB – Güterwagen, konventionelle Wagen', 'Haribu – Register H- und S-Wagen', RHB_Q],
    art: { typ: 'wagen', geschlossen: true, farbe: RHB_ROT, akzent: RHB_GRAU },
    bilder: [
      { src: 'bilder/rhb-haik-c1.jpg', titel: 'Schiebewandwagen Haik-v 5134 in Zernez (2015)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_Haik-v_5134_Zernez_030915.jpg' },
      { src: 'bilder/rhb-haik-c2.jpg', titel: 'Haiqq-tyz 5172 in Ilanz (2013)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_Haiqq-tyz_5172_Ilanz_190213.jpg' }
    ] },
  { id: 'rhb-uac', kat: 'cargo', name: 'Uac', beiname: 'Zementwagen', typ: 'Vierachsige Staubgutwagen für Zement', bahn: 'rhb', vorlaeufig: false,
    text: ['Die Uac 7991–8000 bringen Zement und andere staubförmige Güter in geschlossenen Behältern. Entladen werden sie mit Druckluft.', 'Sie kamen 1991 in Betrieb.'],
    kennzahlen: [['10', 'Wagen (7991–8000)'], ['34 t', 'Nutzlast'], ['34 m³', 'Behälter'], ['1991', 'in Betrieb']],
    daten: { 'Bauart': 'Vierachsiger Staubgutwagen', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '7991–8000', 'Länge': '12,54 m über Puffer', 'Gewicht': '16,8 t leer', 'Nutzlast': '34 t', 'Volumen': '34 m³', 'Anzahl': '10', 'In Betrieb seit': '1991' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Nutzlast', 'Volumen', 'Anzahl', 'In Betrieb seit'],
    specNote: '34 t und 34 m³ sind zwei verschiedene Grössen; wie viel eine Ladung wiegt, hängt von ihrer Dichte ab.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die zehn Uac 7991–8000 kamen 1991 in Betrieb. Eine ältere zweiachsige Generation ist im Register noch mit dem Uce 8017 von 1959 vertreten; er ging 2023 als Leihgabe an das Verkehrshaus.'] },
      { titel: 'Einsatz und Technik', p: ['Der Zement fährt in geschlossenen Behältern und wird mit Druckluft entladen, also aus dem Behälter geblasen.', 'Der Wagen ist 12,54 m lang, wiegt leer 16,8 t und trägt bis 34 t.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Geschlossene Behälter für Staubgut', 'Entladung mit Druckluft', 'Vier Achsen'] }
    ],
    quellen: ['RhB – Güterwagen, konventionelle Wagen', 'Haribu – Register U-Wagen', RHB_Q],
    art: { typ: 'wagen', var: 'kipp', farbe: '#9AA1A8' },
    bilder: [] },
  { id: 'rhb-za', kat: 'cargo', name: 'Za', beiname: 'Kesselwagen', typ: 'Vierachsige Kesselwagen für Mineralöl', bahn: 'rhb', vorlaeufig: false,
    text: ['Die Za-Kesselwagen bringen Heizöl und Treibstoff nach Graubünden. Die RhB hat mehrere Gruppen mit 42 oder 52 m³ Kessel.', 'Bei einigen älteren Wagen wurde der Kessel erneuert.'],
    kennzahlen: [['52 m³', 'grösster Kessel'], ['42 m³', 'kleinerer Kessel'], ['1973', 'älteste Grundserie'], ['2005', 'jüngste Gruppe']],
    daten: { 'Bauart': 'Vierachsiger Kesselwagen', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '8105–8113, 8121–8130, 8131–8140, 8141–8150 (ursprüngliche Gruppen)', 'Volumen': '42 oder 52 m³' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Volumen'],
    specNote: 'Serienvergleich nach der Güterwagenseite der RhB, keine Liste der heute eingesetzten Wagen. Kesselvolumen, Füllgrad und Dichte des Produkts sind verschiedene Grössen.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Das jüngere Register führt nur noch Teile dieser Reihen.'],
        tabelle: { kopf: ['Gruppe', 'Bau / Inbetriebnahme', 'Kessel', 'Länge'], zeilen: [
          ['8105–8113', '2002/03', '42 m³', '13,88 m'], ['8121–8130', '1998', '52 m³', '12,54 m'],
          ['8131–8140', '1973, teils neuer Kessel 1996/97', '42 m³', '11,04 m'], ['8141–8150', '2004/05', '52 m³', '12,54 m']] } },
      { titel: 'Einsatz und Technik', p: ['Die Wagen versorgen Graubünden mit Mineralöl. Einige haben eine Gaspendelleitung, die beim Füllen die Dämpfe zurückführt.', 'Ein neuer Kessel auf einem älteren Fahrgestell macht noch keinen neuen Wagen; das Baujahr von Fahrgestell und Kessel sind getrennte Angaben.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Kessel mit 42 oder 52 m³', 'Gaspendelleitung bei einzelnen Wagen', 'Vier Achsen'] }
    ],
    quellen: ['RhB – Güterwagen, konventionelle Wagen', 'Haribu – Register Z-Wagen', RHB_Q],
    art: { typ: 'wagen', var: 'kipp', farbe: '#2B3036' },
    bilder: [
      { src: 'bilder/rhb-za-c1.jpg', titel: 'Kesselwagen der RhB in Samedan (2006)', foto: 'PetrS.', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'http://creativecommons.org/licenses/by-sa/3.0/', quelle: 'https://commons.wikimedia.org/wiki/File:Samedan_cisterna.jpg' }
    ] },
  { id: 'rhb-fac', kat: 'cargo', name: 'Fac', beiname: 'Schüttgutwagen', typ: 'Vierachsige Schüttgutwagen mit Schwerkraftentladung', bahn: 'rhb', vorlaeufig: false,
    text: ['Die Fac-Wagen tragen Kies, Splitt und andere Schüttgüter in Behältern. Sie werden nach unten entladen; die Menge lässt sich dosieren.', 'Die früheren Fau-Kippwagen dienen heute als Altschotterwagen im Bahnbau.'],
    kennzahlen: [['21–22 m³', 'Behälter'], ['34 t', 'Nutzlast (bis)'], ['1968', 'älteste Gruppe'], ['1993', 'jüngste Gruppe']],
    daten: { 'Bauart': 'Vierachsiger Schüttgutwagen', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '8701–8712 (1968/71), 8726 ff. (1988/93)', 'Volumen': '21–22 m³', 'Nutzlast': '33 oder 34 t je nach Gruppe' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Volumen', 'Nutzlast'],
    specNote: 'Werte nach der Güterwagenseite der RhB und dem F-Register von Haribu.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Im Register sind die älteren Gruppen 8701–8712 von 1968/71 und die jüngeren 8726 ff. von 1988/93 vertreten.', 'Die früheren Fau 8761–8770 mit Kippfunktion stehen heute im Dienstwagenregister als Xa-u für Altschotter.'] },
      { titel: 'Einsatz und Technik', p: ['Die Behälter fassen 21 bis 22 m³. Am Boden öffnen sich Klappen, und die Ladung fliesst durch die Schwerkraft dosiert heraus.', 'Je nach Gruppe tragen die Wagen 33 oder 34 t.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Behälter mit 21–22 m³', 'Dosierbare Schwerkraftentladung', 'Vier Achsen'] }
    ],
    quellen: ['RhB – Güterwagen, konventionelle Wagen', 'Haribu – Register F- und X-Wagen', RHB_Q],
    art: { typ: 'wagen', var: 'schotter', farbe: '#7A5A3C' },
    bilder: [
      { src: 'bilder/rhb-fac-c1.jpg', titel: 'Früherer Fau-Kippwagen 8769 in Thusis (2015)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_Fa-u_8769_Thusis_250515.jpg' }
    ] },
  { id: 'rhb-flachwagen', kat: 'cargo', name: 'Flach- und Rungenwagen', beiname: 'R, Re-t, Sp-w, Sgp', typ: 'Flachwagen für Maschinen, Holz, Stahl und Container', bahn: 'rhb', vorlaeufig: false,
    text: ['Auf den Flach- und Rungenwagen der RhB fahren Baumaschinen, Stahl, Baustoffe, Holz und Container. Rungen stützen die Ladung seitlich.', 'Die jüngsten sind die vielseitigen Re-t 65401–65410 von 2010.'],
    kennzahlen: [['46 t', 'Nutzlast Re-t'], ['16,5 m', 'Länge'], ['10', 'Re-t 65401–65410'], ['2010', 'Re-t in Betrieb']],
    daten: { 'Bauart': 'Vierachsige Flach- und Rungenwagen', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'R 8202–8270, 8371–8387; Re-t 65401–65410; Sp-w 8271–8300, 8351–8360; Sgp 7601–7610' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern'],
    specNote: 'Beispiele nach der Flachwagenseite der RhB, keine Vollzählung. Beim Sgp nennen die RhB-Seiten 19,5 und 20 t Leergewicht; auch bei der Bordwandhöhe der Re-t weichen sie ab.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Re-t 65401–65410 kamen 2010 in Betrieb, die Sgp 7601–7610 im Jahr 2008.'],
        tabelle: { kopf: ['Gruppe', 'Länge über Puffer', 'Nutzlast'], zeilen: [
          ['R 8202–8218', '16,54 m', '33 t'], ['R 8241–8250', '16,14 m', '35 t'], ['R 8261–8270', '16,14 m', '35 t'], ['R 8371–8375', '16,54 m', '42 t'],
          ['R 8381–8385', '16,54 m', '43 t'], ['Re-t 65401–65410', '16,54 m', '46 t'], ['Sgp 7601–7610', '16,54 m', '44 t']] } },
      { titel: 'Einsatz und Technik', p: ['Die Re-t wiegen leer 18 t und bieten 15,5 m Ladelänge. Sie haben einen Boden aus Lärchenholz, schwenk- und steckbare Bordwände, Rungen und Zapfen für Container.', 'Die Sp-w sind für Rundholz eingerichtet, mit festen Seitenrungen und Gurten. Die Sgp tragen Holz oder Container.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Rungen und Gurte zur Ladungssicherung', 'Containerzapfen (Re-t, Sgp)', 'Boden aus Lärchenholz (Re-t)', 'Vier Achsen'] }
    ],
    quellen: ['RhB – Güterwagen, Flachwagen', 'Haribu – Register R- und S-Wagen', RHB_Q],
    art: { typ: 'wagen', var: 'flach', farbe: RHB_ROT },
    bilder: [] },
  { id: 'rhb-acts', kat: 'cargo', name: 'ACTS-Wagen', beiname: 'Sl und Rp', typ: 'Tragwagen für Abrollcontainer (ACTS)', bahn: 'rhb', vorlaeufig: false,
    text: ['ACTS ist ein System, mit dem Lastwagen Container direkt vom Bahnwagen abrollen können. So kommt die Ladung ohne Kran vom Zug auf die Strasse.', 'Die RhB hat dafür die Sl 7751–7771 und die Rp 65301–65305.'],
    kennzahlen: [['21', 'Sl 7751–7771'], ['44 t', 'Nutzlast Sl'], ['46,5 t', 'Nutzlast Rp'], ['2000', 'Sl in Betrieb']],
    daten: { 'Bauart': 'Vierachsige Tragwagen für Abrollcontainer', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'Sl 7751–7771, Rp 65301–65305', 'Länge': 'Sl 16,04 m, Rp 16,54 m', 'Gewicht': 'Sl 16 t, Rp 17,5 t (leer)', 'Nutzlast': 'Sl 44 t, Rp 46,5 t', 'In Betrieb seit': '2000' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Nutzlast', 'In Betrieb seit'],
    specNote: 'Werte nach der RhB-Seite zu den Abrollcontainern. Das aktuelle Register führt die Rp 65301–65304; die ursprüngliche Reihe reicht bis 65305.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Sl 7751–7771 kamen 2000/01 in Betrieb, die Rp 65301–65305 im Jahr 2008. Auch ältere Flachwagen wie die 8202–8218 und 8371–8375 tragen ACTS-Behälter.'] },
      { titel: 'Einsatz und Technik', p: ['Ein Lastwagen mit Abrollkipper zieht den Container über einen drehbaren Rahmen vom Wagen. Abrollschienen, Anschläge und Sicherungen halten die Behälter während der Fahrt.', 'Welche Behälter ein Wagen tragen darf, hängt vom einzelnen Wagen ab.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Abrollschienen, Anschläge und Sicherungen', 'Drehbare Rahmen für das Abrollen', 'Vier Achsen'] }
    ],
    quellen: ['RhB – Güterwagen, Abrollcontainer', 'Haribu – Register R-Wagen', RHB_Q],
    art: { typ: 'wagen', var: 'mulde', farbe: '#2F6B4F' },
    bilder: [
      { src: 'bilder/rhb-acts-c1.jpg', titel: 'ACTS-Tragwagen Sl 7769 in Ilanz (2013)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_Sl_7769_Ilanz_190213.jpg' },
      { src: 'bilder/rhb-acts-c2.jpg', titel: 'ACTS-Tragwagen Sl 7753 (2024)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20241004E080_RhB_7753.jpg' }
    ] },
  { id: 'rhb-container', kat: 'cargo', name: 'Containertragwagen', beiname: 'Sb und Lb', typ: 'Tragwagen für Container und Wechselbehälter', bahn: 'rhb', vorlaeufig: false,
    text: ['Für Container und Wechselbehälter hat die RhB vierachsige Wagen mit abgesenkter Mitte und kurze zweiachsige Tragwagen. Die tiefe Ladefläche nutzt das enge Profil der Meterspur besser aus.', 'Viele Wagen entstanden durch Umbau älterer Güterwagen.'],
    kennzahlen: [['15,9 m', 'Länge Sb'], ['36 t', 'Nutzlast (bis)'], ['615 mm', 'Ladehöhe Lb-v'], ['24 t', 'Nutzlast Lb-v']],
    daten: { 'Bauart': 'Tragwagen für Container', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'Sb-v 7716–7730, Sb 65655–65689, Lb-v (Umbau 1997–2000); weitere Umbauten Sb-x 65601–65603, Sb-v 65691–65694' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern'],
    specNote: 'Werte nach der RhB-Seite zu Wechselbehältern. Ein Teil der 65665 ff. wurde zu Rlp 65701–65710 umgebaut; die ältere Reihe ist darum kein heutiger Bestand.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die RhB stellt drei Gruppen tiefer Tragwagen und die kurzen Lb-v gegenüber.'],
        tabelle: { kopf: ['Gruppe', 'Länge', 'Nutzlast', 'Hinweis'], zeilen: [
          ['Sb-v 7716–7730, Sb 65655–65689', '15,91 m', '30 oder 36 t', 'abgesenkte Wagenmitte'],
          ['Lb-v', '9,14 m', '24 t', 'zwei Achsen, Grundbaujahr 1963, Umbau 1997–2000']] } },
      { titel: 'Einsatz und Technik', p: ['In der abgesenkten Wagenmitte stehen die Container tiefer und passen so unter das begrenzte Lichtraumprofil der Meterspur.', 'Die zweiachsigen Lb-v wiegen leer 5,7 t, sind 9,14 m lang und tragen 24 t. Ihre Ladefläche liegt nur 615 mm über der Schiene.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Containerzapfen', 'Abgesenkte Ladefläche', 'Lb-v mit zwei, Sb mit vier Achsen'] }
    ],
    quellen: ['RhB – Güterwagen, Wechselbehälter', 'Haribu – Register S- und L-Wagen', RHB_Q],
    art: { typ: 'wagen', var: 'mulde', farbe: '#2B3036' },
    bilder: [
      { src: 'bilder/rhb-container-c1.jpg', titel: 'Containertragwagen Sb-v 7729 in Ilanz (2013)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_Sb-v_7729_Ilanz-Glion_100413.jpg' },
      { src: 'bilder/rhb-container-c2.jpg', titel: 'Zweiachsiger Tragwagen Lb 7858 mit Container (2026)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Flachwagen_Lb_7858_mit_COOP-Container_(2026).jpg' },
      { src: 'bilder/rhb-container-c3.jpg', titel: 'Containertragwagen Sb 65675 in Ilanz (2013)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_Sb_65675_Ilanz_190213.jpg' }
    ] },
  { id: 'rhb-spezialtransport', kat: 'cargo', name: 'Spezialtransportwagen', beiname: 'Uaa-z und Xak', typ: 'Wagen für schwere und hohe Ladungen', bahn: 'rhb', vorlaeufig: false,
    text: ['Für schwere oder hohe Ladungen wie grosse Maschinen hat die RhB besondere Wagen. Der Uaa-z 8251 lässt sich aus Ladebrücken und Drehgestellen zusammenstellen.', 'Der Podestwagen Xak 93502 hat eine verschiebbare Rampe.'],
    kennzahlen: [['97 t', 'grösste Zusammenstellung Uaa-z'], ['417 mm', 'Ladehöhe Uaa-z'], ['27 t', 'Nutzlast Xak'], ['3,0 m', 'Ladebreite Uaa-z']],
    daten: { 'Bauart': 'Schwerlastwagen und Podestwagen', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'Uaa-z 8251; Xak 93502 (früher 91501, aus Uaik 8301)' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern'],
    specNote: 'Leergewicht und Tragfähigkeit des Uaa-z hängen von der Zusammenstellung ab und dürfen nicht vermischt werden. Die 97-t-Zusammenstellung ist laut Register nicht in Betrieb.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Der Uaa-z 8251 stammt aus den 1950er-Jahren; die Quellen nennen 1956 und 1958. Mit einer privaten Schwertransportbrücke und vier dreiachsigen Drehgestellen trägt er bis 97 t.', 'Der Podestwagen hiess zuerst Uaik 8301, später 91501 und heute Xak 93502.'] },
      { titel: 'Einsatz und Technik', p: ['Die RhB-Ladebrücke des Uaa-z wiegt mit Querträgern 10,5 t, bietet 3,0 m Ladebreite und liegt nur 417 mm über der Schiene. In der üblichen Ausführung ist der Wagen 15,5 m lang und trägt 42 t.', 'Der Podestwagen hat vier Achsen, wiegt leer 14,4 t, ist 12,66 m lang und trägt 27 t. Über eine verschiebbare Rampe fahren Maschinen von vorn oder von der Seite auf.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Kombinierbare Ladebrücken und Drehgestelle (Uaa-z)', 'Sehr tiefe Ladefläche', 'Verschiebbare Rampe (Xak)'] }
    ],
    quellen: ['RhB – Güterwagen, Spezialtransporte', 'Haribu – Register U- und X-Wagen', RHB_Q],
    art: { typ: 'wagen', var: 'flach', farbe: '#2B3036' },
    bilder: [] },
  // ---------- Rangierfahrzeuge ----------
  { id: 'rhb-geaf22', kat: 'rangier', name: 'Geaf 2/2', beiname: '20601–20607', typ: 'Rangierlok mit Fahrleitung und Akku', bahn: 'rhb', vorlaeufig: false,
    text: ['Die sieben Geaf 2/2 von Stadler rangieren unter der Fahrleitung elektrisch und auf Gleisen ohne Fahrleitung mit dem Akku. Der Akku lädt sich unter der Fahrleitung wieder auf.', 'Sie kamen 2020 in Betrieb.'],
    kennzahlen: [['7', 'Loks (20601–20607)'], ['700 kW', 'Leistung (Fahrleitung)'], ['93 kWh', 'Akku'], ['2020', 'in Betrieb']],
    daten: { 'Bauart': 'Zweiachsige Rangierlok mit Fahrleitung und Akku', 'Hersteller': 'Stadler', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '11 kV 16,7 Hz und Akku', 'Fahrzeugnummern': '20601–20607', 'Länge': '8,41 m über Mittelpuffer (9,61 m mit Rangierkupplung)', 'Gewicht': '30 t', 'Leistung': '700 kW unter Fahrleitung, 200 kW mit Akku', 'Anfahrzugkraft': '75 kN', 'Höchstgeschwindigkeit': '80 km/h (Fahrleitung), 40 km/h (Akku)', 'Anzahl': '7', 'In Betrieb seit': '2020' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Werte nach dem Stadler-Datenblatt LRHB0720d, Gewicht nach Wikipedia. 93 kWh ist der Energievorrat des Akkus, 200 kW die Leistung; eine feste Reichweite lässt sich daraus nicht berechnen.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die RhB bestellte die sieben Loks im September 2018 bei Stadler; sie kamen 2020 in Betrieb. Stationiert sind sie unter anderem in Landquart, Chur, Ilanz, Thusis, Davos Platz und Zernez.'] },
      { titel: 'Einsatz und Technik', p: ['Unter der Fahrleitung leistet die Lok bis 700 kW und fährt bis 80 km/h. Mit dem Lithium-Ionen-Akku (93 kWh) sind es 200 kW und 40 km/h, genug für Rangierfahrten auf Gleisen ohne Fahrleitung.', 'Die Lok ist kurz und passt gut in enge Bahnhofsgleise. Sie kann Wagen mit Vakuum- und mit Druckluftbremse bremsen.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Führerstand in der Mitte, Bedienung im Sitzen oder Stehen', 'Funkfernsteuerung', 'Zugheizleitung 320 V', 'Zugsicherung ZSI 127'] }
    ],
    quellen: ['Stadler – Datenblatt Zweikraft-Rangierlokomotive für die RhB (LRHB0720d, 2020)', 'Wikipedia – RhB Geaf 2/2', RHB_Q],
    art: { typ: 'rangier', klein: true, farbe: ORA, panto: true },
    bilder: [
      { src: 'bilder/rhb-geaf22-c1.jpg', titel: 'Geaf 2/2 20601 in Chur (2020)', foto: 'Kecko', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Geaf_2-2_20601_Chur.jpg' },
      { src: 'bilder/rhb-geaf22-c2.jpg', titel: 'Geaf 2/2 20603 (2025)', foto: 'Ion Tichy', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Geaf_2_2_No._20603.jpg' }
    ] },
  { id: 'rhb-ge33', kat: 'rangier', name: 'Ge 3/3', beiname: '214 und 215', typ: 'Elektrische Rangierlok mit drei Achsen', bahn: 'rhb', vorlaeufig: false,
    text: ['Die beiden Ge 3/3 von 1984 sind elektrische Rangierloks mit drei angetriebenen Achsen. Sie arbeiten in Samedan und Chur.', 'Sie haben keine Zugsicherung ZSI 127.'],
    kennzahlen: [['2', 'Loks (214, 215)'], ['1984', 'gebaut'], ['3', 'Triebachsen'], ['11 kV', 'Fahrleitung']],
    daten: { 'Bauart': 'Dreiachsige elektrische Rangierlok', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '11 kV 16,7 Hz', 'Fahrzeugnummern': '214, 215', 'Anzahl': '2', 'In Betrieb seit': '1984' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Nach dem Triebfahrzeugregister von Haribu (Stand September 2026). Leistung und Gewicht nennen die geprüften Quellen nicht.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die beiden Loks 214 und 215 entstanden 1984 als eigene dreiachsige Bauart für den Rangierdienst.'] },
      { titel: 'Einsatz und Technik', p: ['Laut Register arbeitet die 214 in Samedan, die 215 in Chur. Beide haben keine Zugsicherung ZSI 127; das schränkt Fahrten auf die Strecke ein.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Drei angetriebene Achsen', 'Stromabnehmer für 11 kV', 'Keine Zugsicherung ZSI 127'] }
    ],
    quellen: ['Haribu – Register Triebfahrzeuge (Stand 11.09.2026)', RHB_Q],
    art: { typ: 'rangier', achsen: 3, farbe: ORA, panto: true },
    bilder: [
      { src: 'bilder/rhb-ge33-c1.jpg', titel: 'Ge 3/3 215 in Chur (2015)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_Ge_3-3_215_Chur_060615.jpg' },
      { src: 'bilder/rhb-ge33-c2.jpg', titel: 'Ge 3/3 214 (2022)', foto: 'Valo139', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_-_Ge_3-3_214_(valo139).jpg' }
    ] },
  { id: 'rhb-gmf44-242', kat: 'rangier', name: 'Gmf 4/4', beiname: '242 und 243', typ: 'Diesel-Rangierlok von 1991', bahn: 'rhb', vorlaeufig: false,
    text: ['Die beiden Gmf 4/4 von 1991 sind Dieselloks für den Rangierdienst auf dem Stammnetz.', 'Sie sind eine eigene Bauart und nicht mit den jüngeren Gmf 4/4 II von Schalke zu verwechseln.'],
    kennzahlen: [['2', 'Loks (242, 243)'], ['1991', 'gebaut'], ['4', 'Triebachsen'], ['Diesel', 'Antrieb']],
    daten: { 'Bauart': 'Vierachsige Diesellok', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Diesel', 'Fahrzeugnummern': '242, 243', 'Anzahl': '2', 'In Betrieb seit': '1991' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Antrieb', 'Fahrzeugnummern', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Nach dem Triebfahrzeugregister von Haribu; technische Werte nennen die geprüften Quellen nicht.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Loks 242 und 243 entstanden 1991 als eigene Bauart. Mit den 2013 gebauten Gmf 4/4 II haben sie trotz ähnlicher Bezeichnung nichts gemeinsam.'] },
      { titel: 'Einsatz und Technik', p: ['Laut Register arbeiten sie im Rangierdienst auf dem Stammnetz. Fotos zeigen sie in Klosters Platz, Landquart und Davos.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Dieselantrieb, unabhängig von der Fahrleitung', 'Fernsteuerung (Buchstabe f)', 'Vier angetriebene Achsen'] }
    ],
    quellen: ['Haribu – Register Triebfahrzeuge (Stand 11.09.2026)', RHB_Q],
    art: { typ: 'haube', farbe: YEL, akzent: RHB_GRAU },
    bilder: [
      { src: 'bilder/rhb-gmf44-242-c1.jpg', titel: 'Gmf 4/4 242 in Klosters Platz (2019)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Diesellok_RhB_Gmf_4-4_Nr._242_in_Klosters-Platz.jpg' },
      { src: 'bilder/rhb-gmf44-242-c2.jpg', titel: 'Gmf 4/4 243 in Davos (2024)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_243_Davos_20241002E010.jpg' }
    ] },
  { id: 'rhb-taf22', kat: 'rangier', name: 'Taf 2/2', beiname: '29591–29596', typ: 'Kleine Zweiwege-Rangiergeräte für Werkstätten', bahn: 'rhb', vorlaeufig: false,
    text: ['Die sechs Taf 2/2 sind kleine Zweiwegefahrzeuge. Sie bewegen Fahrzeuge in Werkstätten und Depots.', 'Sie arbeiten unter anderem in Poschiavo und Landquart.'],
    kennzahlen: [['6', 'Geräte'], ['2010–2023', 'Baujahre'], ['2', 'Achsen'], ['Landquart', 'Hauptwerkstätte']],
    daten: { 'Bauart': 'Zweiwege-Rangiergerät', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '29591–29596', 'Anzahl': '6', 'In Betrieb seit': '2010–2023' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Nach dem Triebfahrzeugregister von Haribu; Hersteller und technische Werte sind dort nicht genannt.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die sechs Geräte entstanden zwischen 2010 und 2023.'] },
      { titel: 'Einsatz und Technik', p: ['Laut Register arbeiten sie unter anderem in Poschiavo, an der Unterflurdrehbank in Landquart und im Depot Landquart. Sie bewegen Fahrzeuge in der Werkstatt und fahren nicht im Reisezugdienst.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Räder für Schiene und Strasse', 'Antrieb mit Akku (Buchstabe a)', 'Fernsteuerung (Buchstabe f)'] }
    ],
    quellen: ['Haribu – Register Triebfahrzeuge (Stand 11.09.2026)', RHB_Q],
    art: { typ: 'rangier', klein: true, farbe: YEL, panto: false },
    bilder: [] },
  // ---------- Infrastruktur ----------
  { id: 'rhb-gmf44ii', kat: 'infrastruktur', name: 'Gmf 4/4 II', beiname: '23401–23404', typ: 'Dieselelektrische Lok von Schalke für Bauzüge und Schneeräumung', bahn: 'rhb', vorlaeufig: false,
    text: ['Die vier Gmf 4/4 II von Schalke ziehen schwere Bauzüge, schleppen liegengebliebene Züge ab und schieben im Winter die Schneeschleudern. Sie fahren auch, wenn die Fahrleitung abgeschaltet ist.', 'Sie tragen die gelbe Farbe der RhB-Infrastruktur.'],
    kennzahlen: [['4', 'Loks'], ['1800 kW', 'Leistung'], ['100 km/h', 'Höchstgeschwindigkeit'], ['2013', 'gebaut']],
    daten: { 'Bauart': 'Dieselelektrische Lokomotive', 'Hersteller': 'Schalke (Schalker Eisenhütte)', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Achsfolge': "Bo'Bo'", 'Fahrzeugnummern': '23401–23404 (bis 2015: 28701–28704)', 'Länge': '16,69 m', 'Gewicht': '64 t', 'Leistung': '1800 kW', 'Anfahrzugkraft': '210 kN', 'Höchstgeschwindigkeit': '100 km/h', 'Anzahl': '4', 'In Betrieb seit': '2014' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Achsfolge', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Werte nach Schalke und Wikipedia. Die Anfahrzugkraft gilt bei einem Reibwert von 0,33.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die RhB bestellte die Loks 2009; Schalke baute sie 2013, und 2014 kamen sie in Betrieb. Bis 2015 trugen sie die Nummern 28701–28704.', 'Sie heissen 23401 «Surselva», 23402 «Engadin», 23403 «Albula» und 23404 «Bernina».'] },
      { titel: 'Einsatz und Technik', p: ['Die Loks ziehen schwere Bauzüge, helfen bei Pannen und arbeiten im Winter mit den Schneeschleudern im ganzen Netz. Bis zu drei Loks lassen sich zusammen steuern.', 'Sie sind für Bögen mit 40 m Radius und für Temperaturen von −35 bis +40 °C gebaut. Vier verschiedene Bremssysteme machen sie für gemischte Züge geeignet.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Dieselelektrischer Antrieb, unabhängig von der Fahrleitung', 'Vier Bremssysteme', 'Vielfachsteuerung mit bis zu drei Loks', 'Gelbe Farbe der Infrastruktur'] }
    ],
    quellen: ['Schalke Locomotives – GMF 4/4 287 für die RhB', 'Wikipedia – RhB Gmf 4/4 II', RHB_Q],
    art: { typ: 'haube', farbe: YEL, akzent: RHB_GRAU },
    bilder: [
      { src: 'bilder/rhb-gmf44ii-c1.jpg', titel: 'Gmf 4/4 II 23403', foto: 'Peter elektro', lizenz: 'CC BY 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Gmf_4_4_II_23403.jpg' },
      { src: 'bilder/rhb-gmf44ii-c2.jpg', titel: 'Gmf 4/4 II 23402 mit der Schneeschleuder 95403', foto: 'Ion Tichy', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Xm_rot_95403_with_Gmf_4_4_II_no_23402.jpg' }
    ] },
  { id: 'rhb-gem44', kat: 'infrastruktur', name: 'Gem 4/4', beiname: '801 und 802', typ: 'Zweikraftlok für die Berninalinie', bahn: 'rhb', vorlaeufig: false,
    text: ['Die beiden Gem 4/4 fahren elektrisch unter der Gleichstrom-Fahrleitung der Berninalinie und mit Diesel, wo keine passende Fahrleitung ist.', 'Sie heissen 801 «Steinbock» und 802 «Murmeltier».'],
    kennzahlen: [['2', 'Loks'], ['1968', 'zur RhB'], ['2 × 709 kW', 'Diesel nach Umbau'], ['65 km/h', 'Höchstgeschwindigkeit']],
    daten: { 'Bauart': 'Zweikraftlokomotive (elektrisch und Diesel)', 'Hersteller': 'SLM, SWS, BBC, MFO', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '1000 V Gleichstrom', 'Achsfolge': "Bo'Bo'", 'Fahrzeugnummern': '801, 802', 'Gewicht': '50 t', 'Leistung': '680 kW elektrisch; Diesel 2 × 709 kW (nach Umbau)', 'Höchstgeschwindigkeit': '65 km/h', 'Anzahl': '2', 'In Betrieb seit': '1968' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Achsfolge', 'Fahrzeugnummern', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Werte nach Wikipedia. Gebaut 1966, an die RhB 1968. Elektrische und Dieselleistung sind getrennte Betriebsarten und dürfen nicht addiert werden.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SLM, SWS, BBC und MFO bauten die beiden Loks; 1968 kamen sie zur RhB. Nach einem Brand wurde die 801 ab 2000 in Landquart erneuert, die 802 folgte 2002/03.', 'Beim Umbau erhielten sie längere Führerstände, neue Cummins-Dieselmotoren mit je 709 kW, eine neue Steuerung und eine Klimaanlage im Führerstand.'] },
      { titel: 'Einsatz und Technik', p: ['Die Loks sind in Pontresina und Poschiavo stationiert. Sie ziehen Bauzüge und arbeiten im Winter mit Schneeschleudern; früher führten sie auch Reisezüge auf der Berninalinie.', 'Elektrisch leisten sie 680 kW. Mit den Dieselmotoren fahren sie auch auf dem Stammnetz, dessen Wechselstrom sie nicht nutzen können.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Stromabnehmer für 1000 V Gleichstrom', 'Zwei Dieselmotoren', 'Klimatisierte Führerstände (nach dem Umbau)'] }
    ],
    quellen: ['Wikipedia – RhB Gem 4/4', 'Haribu – Register Triebfahrzeuge', RHB_Q],
    art: { typ: 'lok', kurz: true, farbe: RHB_ROT, akzent: '#E6E8EA', panto: true },
    bilder: [
      { src: 'bilder/rhb-gem44-c3.jpg', titel: 'Gem 4/4 vor einem Regionalzug nach Tirano (2009)', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Regio_nach_Tirano_mit_Gem_4-4.jpg' },
      { src: 'bilder/rhb-gem44-c1.jpg', titel: 'Seitenwand der Gem 4/4 801 mit dem Steinbock (2014)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB-Gem801Steinbock.JPG' },
      { src: 'bilder/rhb-gem44-c2.jpg', titel: 'Seitenwand der Gem 4/4 802 mit dem Murmeltier (2014)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB-Gem802Murmeltier.JPG' }
    ] },
  { id: 'rhb-tm', kat: 'infrastruktur', name: 'Tm 2/2 und Tmf 2/2', beiname: 'Traktoren', typ: 'Diesel-Traktoren für Rangierdienst und Bauzüge', bahn: 'rhb', vorlaeufig: false,
    text: ['Für Rangierarbeiten und kleine Bauzüge hat die RhB mehrere Familien zweiachsiger Diesel-Traktoren von RACO, Windhoff und SCHÖMA.', 'Als Ersatz für einen Teil davon bestellte die RhB im November 2025 acht neue Bahndienstfahrzeuge bei Windhoff.'],
    kennzahlen: [['10', 'Tm 111–120 (SCHÖMA)'], ['6', 'Tmf 85–90 (RACO)'], ['4', 'Tm 81–84 (RACO)'], ['4', 'Tm 95–98 (Windhoff)']],
    daten: { 'Bauart': 'Zweiachsige Diesel-Traktoren', 'Hersteller': 'RACO, Windhoff, SCHÖMA', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Diesel', 'Fahrzeugnummern': 'Tm 81–84, Tmf 85–90, Tm 91–93, Tm 95–98, Tm 111–120' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Antrieb', 'Fahrzeugnummern'],
    specNote: 'Nummern nach der Lokstatistik Pospichal. Die bestellten Nachfolger sind kein Beleg, dass die alten Traktoren schon ausgemustert sind; die RhB nannte sie im November 2025 als bestehende Flotte.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Ältere RACO-Traktoren trugen die Nummern 56–67 und später teilweise 15–26.'],
        tabelle: { kopf: ['Nummern', 'Hersteller', 'Baujahre'], zeilen: [
          ['Tm 81–84', 'RACO', '1985'], ['Tmf 85–90', 'RACO', '1991–1994'], ['Tm 91–93', 'verschieden', '–'], ['Tm 95–98', 'Windhoff', '1998/99'], ['Tm 111–120', 'SCHÖMA', '2002–2006']] } },
      { titel: 'Einsatz und Technik', p: ['Die Traktoren rangieren in Bahnhöfen und ziehen kleine Bau- und Unterhaltszüge. Die Tmf haben zusätzlich eine Fernsteuerung.', 'Als Ersatz für die Tm 81–84 und 95–98 bestellte die RhB im November 2025 acht Windhoff-Fahrzeuge; sie sollen 2029 in Betrieb gehen.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Dieselantrieb', 'Zwei Achsen', 'Fernsteuerung bei den Tmf'] }
    ],
    quellen: ['Lokstatistik Pospichal – RhB-Traktoren', 'SCHÖMA – Unternehmensprofil', 'RhB – Medienmitteilung vom 18. November 2025', RHB_Q],
    art: { typ: 'rangier', klein: true, farbe: ORA, panto: false },
    bilder: [
      { src: 'bilder/rhb-tm-c1.jpg', titel: 'Tm 2/2 115 von SCHÖMA in Ilanz (2014)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Diesel-Rangierlok_RhB_Tm_2-2_115_(Sch%C3%B6ma)_in_Ilanz_(2014).jpg' },
      { src: 'bilder/rhb-tm-c2.jpg', titel: 'Tm 2/2 84 in Langwies (2015)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_Tm_2-2_84_Langwies_230715.jpg' },
      { src: 'bilder/rhb-tm-c3.jpg', titel: 'Tmf 2/2 87 in Thusis (2013)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_Tmf_2-2_87_Thusis_190113.jpg' }
    ] },
  { id: 'rhb-tieflade', kat: 'infrastruktur', name: 'Xmf 4/4', beiname: '23411–23415 Tieflader', typ: 'Neue Tiefladefahrzeuge für die Baustellenlogistik', bahn: 'rhb', vorlaeufig: false,
    text: ['Seit November 2025 erhält die RhB fünf selbstfahrende Tiefladefahrzeuge Xmf 4/4 23411–23415. Dazu kommen elf Tiefladewagen Xa 93511–93521.', 'Mit niedrigen Ladeflächen und Containerlösungen soll die Logistik auf Baustellen effizienter werden.'],
    kennzahlen: [['5', 'Tiefladefahrzeuge'], ['11', 'Tiefladewagen'], ['2025', 'erste Fahrzeuge'], ['2026', 'Tiefladewagen']],
    daten: { 'Bauart': 'Selbstfahrende Tiefladefahrzeuge und Tiefladewagen', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'Xmf 4/4 23411–23415; Xa 93511–93521', 'In Betrieb seit': '2025' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'In Betrieb seit'],
    specNote: 'Nach dem Netzzustandsbericht 2025 der RhB und den Registern. Hersteller und technische Daten sind in den geprüften Quellen nicht gesichert; nicht jede Nummer ist schon abgenommen.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Laut Netzzustandsbericht 2025 kommen fünf Tiefladefahrzeuge ab November 2025 und elf Tiefladewagen ab dem ersten Quartal 2026. Das Register führt sie als Xmf 4/4 23411–23415 und Xa 93511–93521.'] },
      { titel: 'Einsatz und Technik', p: ['Die Fahrzeuge bringen Material auf Baustellen. Die niedrigen Ladeflächen und Systembehälter erleichtern das Be- und Entladen.', 'Diese Beschaffung ist getrennt von den acht Windhoff-Fahrzeugen, die 2029 kommen sollen.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Niedrige Ladefläche', 'Eigener Antrieb (Xmf)', 'Fernsteuerung (Buchstabe f)'] }
    ],
    quellen: ['RhB – Netzzustandsbericht 2025, Seiten 111–117', 'Haribu – Register Triebfahrzeuge und X-Wagen', RHB_Q],
    art: { typ: 'spezial', farbe: YEL, akzent: RHB_GRAU },
    bilder: [] },
  { id: 'rhb-windhoff', kat: 'infrastruktur', name: 'MPV VentuS', beiname: 'Windhoff (bestellt)', typ: 'Bestellte Bahndienstfahrzeuge mit Kran, Inbetriebnahme 2029 geplant', bahn: 'rhb', vorlaeufig: false,
    text: ['Im November 2025 bestellte die RhB bei Windhoff acht gleiche Bahndienstfahrzeuge für 57 Millionen Franken. Sie sollen 2029 in Betrieb gehen.', 'Die Fahrzeuge haben einen Kran und lassen sich mit Winde, Greifer, Arbeitskorb, Schneefräse oder Saugbagger ausrüsten.'],
    kennzahlen: [['8', 'Fahrzeuge bestellt'], ['500 kW', 'Dauerleistung am Rad'], ['80 km/h', 'Höchstgeschwindigkeit'], ['2029', 'geplante Inbetriebnahme']],
    daten: { 'Bauart': 'Dieselelektrisches Mehrzweckfahrzeug mit Kran', 'Hersteller': 'Windhoff', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Gewicht': 'rund 58 t', 'Motor': 'Hauptdiesel 520 kW, Hilfsdiesel 170 kW', 'Leistung': '500 kW dauernd am Rad', 'Anfahrzugkraft': '150 kN', 'Höchstgeschwindigkeit': '80 km/h', 'Anzahl': '8 bestellt', 'In Betrieb seit': '2029 geplant' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Gewicht', 'Motor', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Projektwerte nach der RhB-Medienmitteilung vom 18. November 2025 und nach Windhoff. Die Fahrzeuge sind noch nicht geliefert. Ein Traktionsakku wird nur als mögliche Nachrüstung untersucht.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die RhB gab den Auftrag am 18. November 2025 bekannt. Windhoff bestätigt ihn als Projekt «MPV VentuS». Die acht Fahrzeuge sollen ältere Diesel-Traktoren ersetzen.'] },
      { titel: 'Einsatz und Technik', p: ['Ein Hauptdieselmotor mit 520 kW und ein Hilfsdiesel mit 170 kW treiben je einen Generator an. Am Rad stehen dauernd 500 kW zur Verfügung; die Höchstgeschwindigkeit beträgt 80 km/h.', 'Der Kran reicht rund 16,9 m weit, sein Arm lässt sich auch nach unten knicken.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Klimatisierte, gedämmte Kabine für sieben Personen', 'Kran, Winde, Greifer oder Arbeitskorb', 'Möglich: Schneefräse oder Saugbagger'] }
    ],
    quellen: ['RhB – Medienmitteilung «RhB investiert in leistungsfähige Bahndienstfahrzeuge», 18. November 2025', 'Windhoff – Rhätische Bahn wählt MPV VentuS', RHB_Q],
    art: { typ: 'spezial', var: 'kran', farbe: YEL, akzent: RHB_GRAU },
    bilder: [] },
  { id: 'rhb-dienstwagen', kat: 'infrastruktur', gruppe: 'Werkstatt- und Mannschaftswagen', name: 'Dienstwagen', beiname: 'X-Wagen', typ: 'Wagen für Bahnbau, Messung und Material', bahn: 'rhb', vorlaeufig: false,
    text: ['Im Dienstwagenpark der RhB gibt es Schotter-, Kies- und Flachwagen, Mess- und Kranwagen, Hubarbeitsbühnen und Hilfswagen. Viele entstanden aus älteren Personen- oder Güterwagen.', 'Laut Netzzustandsbericht 2025 hat die Infrastruktur 60 Triebfahrzeuge und 136 Anhängefahrzeuge.'],
    kennzahlen: [['136', 'Anhängefahrzeuge der Infrastruktur'], ['60', 'Triebfahrzeuge der Infrastruktur'], ['X', 'Gattung für Dienstwagen'], ['2025', 'Stand Netzzustandsbericht']],
    daten: { 'Bauart': 'Dienstwagen verschiedener Bauart', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Kein eigener Antrieb', 'Fahrzeugnummern': 'Beispiele: Xac 8733–8742, Xa-u 8761–8770, Xa-tu 93701–93704, Xac-t 93801–93805, Xak 96501, Xak 9394, Xk 94001' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Antrieb', 'Fahrzeugnummern'],
    specNote: 'Typenbeispiele nach dem X-Register von Haribu (Stand August 2026), keine vollständige Liste. Traglasten und Messsysteme sind ohne Geräteblatt nicht angegeben.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Gattung X bezeichnet die Verwendung im Dienst, nicht ein neues Fahrgestell. Beispiele aus dem Register:'],
        tabelle: { kopf: ['Aufgabe', 'Beispiele'], zeilen: [
          ['Schotter', 'Xac 8733–8742, Xa-u 8761–8770, 9441–9446, 9461–9463, Xa-tu 93701–93704'], ['Kies', 'Xac-t 93801–93805'],
          ['Flachwagen', 'Xae-w 9401–9404, Xae-t 93105–93111'], ['Schienentransport', 'Xa-t 93101–93104, Schienenabladewagen Xa-t 93501'],
          ['Gleismessung', 'Xak 96501 (aus B 2307)'], ['Brückenuntersuchung', 'Xak 9394 (aus Uahk-v 8123)'], ['Kranarbeiten', 'Xak 9387, 9388'],
          ['Hubarbeitsbühnen', 'Xk 94001, Xak 94002–94003'], ['Wasser und Löschen', 'Xak 9379–9380, Xah-y 9385–9386'], ['Hilfswagen', 'Xak-v 9101, 9102']] } },
      { titel: 'Einsatz und Technik', p: ['So wurden die früheren Fau-Kippwagen 8761–8770 zu Altschotterwagen Xa-u. Im Winter erhalten einige Schotterwagen Seitenwände und fahren Schnee ab.', 'Kupplungswagen wie die Vereina-Wagen 9390–9393 verbinden Fahrzeuge mit unterschiedlichen Kupplungen. Sie haben selbst keinen Antrieb.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Kipp- oder Schwerkraftentladung bei Schotterwagen', 'Messanlagen, Krane oder Hubarbeitsbühnen je nach Wagen', 'Kein eigener Antrieb'] }
    ],
    quellen: ['Haribu – Register X-Wagen (Stand 19.08.2026)', 'RhB – Netzzustandsbericht 2025', RHB_Q],
    art: { typ: 'wagen', var: 'schotter', farbe: YEL },
    bilder: [
      { src: 'bilder/rhb-dienstwagen-c1.jpg', titel: 'Kieswagen Xac-t 93801 in Chur (2012)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_Xac-t_93801_Chur_120912_R1473.jpg' },
      { src: 'bilder/rhb-dienstwagen-c2.jpg', titel: 'Schotterwagen Xa-tu 93701 in Poschiavo (2010)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_Xa-tu_93701_Poschiavo_170710.jpg' },
      { src: 'bilder/rhb-dienstwagen-c3.jpg', titel: 'Dienstwagen Xk 9362 in Landquart (2015)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_Xk_9362_Landquart_010215.jpg' }
    ] },
  // ---------- Dienst- und Spezialfahrzeuge ----------
  { id: 'rhb-loeref', kat: 'dienst', name: 'Xm 2/4', beiname: 'Lösch- und Rettungsfahrzeuge', typ: 'Lösch- und Rettungszüge für den Vereinatunnel', bahn: 'rhb', vorlaeufig: false,
    text: ['Für den Vereinatunnel hat die RhB vier Lösch- und Rettungsfahrzeuge von Müller Technologie. Zwei sind Löschfahrzeuge, zwei Rettungsfahrzeuge.', 'Sie wurden am 2. September 2022 übergeben. Die Feuerwehren Klosters-Serneus und Zernez bedienen sie.'],
    kennzahlen: [['4', 'Fahrzeuge (27401–27404)'], ['25 000 l', 'Löschwasser'], ['100', 'Personen pro Rettungsfahrt'], ['2022', 'übergeben']],
    daten: { 'Bauart': 'Selbstfahrende Lösch- und Rettungsfahrzeuge', 'Hersteller': 'Müller Technologie, Frauenfeld', 'Betreiber': 'RhB, bedient von den Feuerwehren Klosters-Serneus und Zernez', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '27401–27404', 'Länge': '18,80 m', 'Motor': 'Diesel, 280 kW', 'Anzahl': '4', 'In Betrieb seit': '2022' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Motor', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Werte nach der RhB-Medienmitteilung und dem Müller-Datenblatt. Die Fahrzeuge fahren nur auf Schienen; die Feuerwehr-Zweiwegfahrzeuge sind andere Fahrzeuge.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Müller Technologie in Frauenfeld baute die vier Fahrzeuge; übergeben wurden sie am 2. September 2022 beim Nordportal in Klosters Selfranga. Für jede Tunnelseite gibt es ein Lösch- und ein Rettungsfahrzeug.', 'Daneben hat die RhB Feuerwehr-Zweiwegfahrzeuge Xm 2/2 27801–27806 von 2016/17 und ältere von 2007.'] },
      { titel: 'Einsatz und Technik', p: ['Jedes Fahrzeug hat zwei Führerstände, ein Trieb- und ein Laufdrehgestell und einen Dieselmotor mit 280 kW. Farb- und Wärmebildkameras helfen im Rauch. Laut Hersteller sind sie in weniger als fünf Minuten einsatzbereit.', 'Das Löschfahrzeug hat einen temperaturüberwachten Tank mit 25 000 l Löschwasser. Das Rettungsfahrzeug hat einen Raum mit Atemluftversorgung für bis zu 100 Personen; Treibstoff und Sauerstoff reichen für zwei Fahrten.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Löschfahrzeug: 12 Plätze für Feuerwehrleute mit Atemschutz, 4 weitere in den Führerständen', 'Rettungsraum mit Atemluftversorgung', 'Farb- und Wärmebildkameras', 'Eigener Antrieb, unabhängig von einer Lok'] }
    ],
    quellen: ['RhB – Medienmitteilung «Neue Lösch- und Rettungsfahrzeuge an Feuerwehr übergeben», September 2022', 'Müller Technologie – Factsheet Lösch- und Rettungsfahrzeuge Xm 2/4', RHB_Q],
    art: { typ: 'spezial', farbe: '#C8102E', akzent: YEL },
    bilder: [] },
  { id: 'rhb-fahrleitung', kat: 'dienst', name: 'Fahrleitungs- und Kranfahrzeuge', beiname: 'Xm und Xmf', typ: 'Fahrzeuge für Fahrleitungsbau und Kranarbeiten', bahn: 'rhb', vorlaeufig: false,
    text: ['Für Arbeiten an der Fahrleitung und für Kranarbeiten hat die RhB mehrere Familien selbstfahrender Dienstfahrzeuge. Die grössten sind die Xmf 6/6 24401 und 24402.', 'Seit 2024 kommen zwei Hubarbeitsbühnen für Schiene und Strasse dazu.'],
    kennzahlen: [['2', 'Xmf 6/6 (2007, 2016)'], ['2', 'Xmf 4/4 (Grundbau 1994)'], ['2', 'Hubarbeitsbühnen (2024)'], ['1994', 'Xmf 2/2 9921']],
    daten: { 'Bauart': 'Selbstfahrende Fahrleitungs- und Kranfahrzeuge', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'Xm 2/2 9916, 9917; Xmf 2/2 9921; Xmf 6/6 24401, 24402; Xmf 4/4 24403, 24404 (früher 9918, 9919); Xm 2/2 24801, 24802' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern'],
    specNote: 'Nach dem Triebfahrzeugregister von Haribu. Hersteller, Hubhöhe und Kranlast sind ohne Datenblatt nicht angegeben.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Fahrzeuge stammen aus verschiedenen Jahren.'],
        tabelle: { kopf: ['Fahrzeug', 'Nummern', 'Baujahr'], zeilen: [
          ['Xm 2/2', '9916, 9917', 'verschieden'], ['Xmf 2/2', '9921', '1994'], ['Xmf 6/6', '24401, 24402', '2007, 2016'],
          ['Xmf 4/4', '24403, 24404 (früher 9918, 9919)', '1994, später umgebaut'], ['Xm 2/2 Hubarbeitsbühnen', '24801, 24802', '2024']] } },
      { titel: 'Einsatz und Technik', p: ['Die Fahrzeuge bauen und unterhalten die Fahrleitung und heben schwere Teile. Die Xmf 6/6 und die Xmf 4/4 sind trotz gleicher Aufgabe verschiedene Bauarten.', 'Die Xm 2/2 24801 und 24802 sind Hubarbeitsbühnen, die auf Schiene und Strasse fahren.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Kran oder Arbeitsbühne je nach Fahrzeug', 'Eigener Dieselantrieb (Buchstabe m)', 'Fernsteuerung bei den Xmf'] }
    ],
    quellen: ['Haribu – Register Triebfahrzeuge (Stand 11.09.2026)', RHB_Q],
    art: { typ: 'spezial', var: 'montage', farbe: YEL, akzent: RHB_GRAU },
    bilder: [
      { src: 'bilder/rhb-fahrleitung-c1.jpg', titel: 'Xmf 2/2 9921 in Samedan (2015)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_Xmf_2-2_9921_Samedan_030915.jpg' },
      { src: 'bilder/rhb-fahrleitung-c2.jpg', titel: 'Xmf 2/2 9921 mit Kran', foto: 'Fiver, der Hellseher', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Schienenkran_2-2_9921_der_Rh%C3%A4tischen_Bahn.jpg' }
    ] },
  { id: 'rhb-schneeschleuder', kat: 'dienst', name: 'Schneeschleudern und Schneepflüge', beiname: 'Xrot mt und Xk', typ: 'Geräte für die Schneeräumung', bahn: 'rhb', vorlaeufig: false,
    text: ['Im Winter räumen Schneeschleudern und Schneepflüge die Strecken. Die jüngsten Schleudern sind die Xrot mt 95401–95404 von Zaugg.', 'Eine Lok schiebt die Schleuder, zum Beispiel eine Gmf 4/4 II.'],
    kennzahlen: [['4', 'Xrot mt 95401–95404'], ['2011/12', 'gebaut'], ['1981', 'Xrot mt 9217'], ['7', 'Schneepflüge Xk 9141–9147']],
    daten: { 'Bauart': 'Schneeschleudern und Schneepflüge', 'Hersteller': 'Zaugg (95401–95404)', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'Xrot mt 95401–95404, Xrot mt 9217, Xrot m 9214; Xk 9141–9147, X 9132' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern'],
    specNote: 'Räumbreite, Räumleistung und Motor der einzelnen RhB-Maschinen nennen die geprüften Quellen nicht. Daten anderer Bahnen aus der Zaugg-Broschüre sind nicht übernommen.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Zaugg lieferte 2011 die Bernina-Maschinen 95403 und 95404 und 2012 die Stammnetz-Maschinen 95401 und 95402. Die Xrot mt 9217 stammt von 1981.', 'Die heutige Xrot m 9214 hat einen Aufbau von 2001 auf einem Untergestell von 1913 (aus dem Gb 5606). Sie ist nicht die frühere Bernina-Dampfschleuder mit gleicher Nummer.'] },
      { titel: 'Einsatz und Technik', p: ['Eine Schneeschleuder nimmt den Schnee mit einem drehenden Räumorgan auf und wirft ihn zur Seite. Ein Schneepflug schiebt den Schnee mit einer geformten Fläche weg.', 'Schleuder und schiebende Lok bilden einen Arbeitszug, etwa mit einer Gmf 4/4 II; auf der Berninalinie schiebt auch ein Triebwagen einen Schneepflug.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Drehendes Räumorgan (Xrot)', 'Pflugschar (Xk)', 'Im Winter: Schotterwagen mit Seitenwänden für Schneetransporte'] }
    ],
    quellen: ['Haribu – Register X-Wagen (Stand 19.08.2026)', 'Zaugg AG Eggiwil – Railway projects', RHB_Q],
    art: { typ: 'spezial', var: 'schnee', farbe: YEL, akzent: RHB_ROT },
    bilder: [
      { src: 'bilder/rhb-schneeschleuder-c1.jpg', titel: 'Schneeschleuder Xrot mt 95403 mit Gmf 4/4 II 23402', foto: 'Ion Tichy', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Xm_rot_95403_with_Gmf_4_4_II_no_23402.jpg' },
      { src: 'bilder/rhb-schneeschleuder-c2.jpg', titel: 'Schneeschleuder Xrot mt 9217 in Landquart (2012)', foto: 'NAC', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_Xrotmt_9217_Landquart_031212.jpg' },
      { src: 'bilder/rhb-schneeschleuder-c3.jpg', titel: 'Schneepflug Xk 9143 mit ABe 4/4 II 46 im Einsatz', foto: 'Ion Tichy', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_ABe_4_4_no._46_and_snow_plough_Xk_9143_in_action.jpg' }
    ] },
  // ---------- Historische Fahrzeuge ----------
  { id: 'rhb-ge66i', kat: 'historisch', name: 'Ge 6/6 I', beiname: 'Krokodil', typ: 'Elektrische Güterzuglok von 1921–1929 (historisch)', bahn: 'rhb', vorlaeufig: false,
    text: ['Die 15 «Krokodile» der RhB zogen jahrzehntelang schwere Züge über die Albula. Typisch sind die zwei beweglichen Triebgestelle mit Stangenantrieb.', 'Die 414 und 415 fahren heute vor historischen Zügen der RhB; mehrere weitere stehen in Museen.'],
    kennzahlen: [['15', 'Loks (401–415)'], ['1921', 'erste Lok'], ['55 km/h', 'Höchstgeschwindigkeit'], ['66 t', 'Dienstgewicht']],
    daten: { 'Bauart': 'Elektrische Lokomotive mit Stangenantrieb', 'Hersteller': 'SLM (mechanisch), BBC (elektrisch)', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '11 kV 16,7 Hz', 'Achsfolge': "C'C'", 'Fahrzeugnummern': '401–415', 'Länge': '13,30 m über Puffer', 'Gewicht': '66 t', 'Leistung': 'rund 940 kW (RhB-Broschüre)', 'Höchstgeschwindigkeit': '55 km/h', 'Anzahl': '15', 'Erhalten': '414 und 415 (RhB); 402 Verkehrshaus Luzern, 406 Battenberg, 407 Bergün, 411 Deutsches Museum', 'In Betrieb seit': '1921' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Achsfolge', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Leistung nach der RhB-Broschüre «Historische Fahrzeuge» (gerundet, ohne genauen Bezug); Wikipedia nennt 794 bis 840 kW. Länge und Gewicht nach Wikipedia.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SLM und BBC bauten die 15 Loks zwischen 1921 und 1929. Je drei gekuppelte Achsen sitzen in zwei beweglichen Triebgestellen; Motoren, Getriebe, Blindwellen und Stangen übertragen die Kraft.', 'Erhalten sind die 414 und 415 bei der RhB, die 402 im Verkehrshaus Luzern, die 407 beim Bahnmuseum Albula in Bergün, die 411 im Deutschen Museum München und die 406 bei Viessmann in Battenberg.'] },
      { titel: 'Einsatz und Technik', p: ['Die Krokodile zogen vor allem Güter- und Reisezüge auf der Albulalinie. Die 414 und 415 sind heute betriebsfähige Museumsloks mit Standort Landquart und Samedan; die 414 ist laut Register in Reparatur.', 'Die beiden RhB-Loks wurden unterschiedlich stark umgebaut und zeigen nicht mehr in allen Teilen den Originalzustand.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Führerstand in der Mitte, Vorbauten an beiden Enden', 'Stangenantrieb mit Blindwellen', 'Ausstellung mit Fahrsimulator (407 in Bergün)'] }
    ],
    quellen: ['Wikipedia – RhB Ge 6/6 I', 'RhB – Historische Fahrzeuge (Archivfassung 2022)', 'Albula-Bahn-Club – Krokodil 407', 'Haribu – Register ausrangierte Triebfahrzeuge', RHB_Q],
    art: { typ: 'lok', farbe: RHB_BRAUN, akzent: RHB_DUNKEL, panto: true, achsen: 6 },
    bilder: [
      { src: 'bilder/rhb-ge66i-c1.jpg', titel: 'Krokodil Ge 6/6 I 415 in Bergün', foto: 'Asurnipal', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Krokodil_RhB_Ge_6-6_I_415_Berguen-Bravuogn-01.jpg' },
      { src: 'bilder/rhb-ge66i-c2.jpg', titel: 'Ge 6/6 I 414 mit historischem Zug in Filisur (2022)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:2_FR_Ge_6-6_I_414_Filisur_020722_R_7815.jpg' },
      { src: 'bilder/rhb-ge66i-c3.jpg', titel: 'Ge 6/6 I 412 mit Zug 4532 bei der Einfahrt in Filisur (1987)', foto: 'Joachim Seyferth', lizenz: 'CC BY 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Ge_6-6_I_412_mit_Zug_4532_bei_der_Einfahrt_im_Bahnhof_Filisur.jpg' },
      { src: 'bilder/rhb-ge66i-c4.jpg', titel: 'Ge 6/6 I 407 beim Bahnmuseum Albula in Bergün (2014)', foto: 'Bahnfrend', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:407,_Berg%C3%BCn-Bravuogn,_2014_(01).JPG' }
    ] },
  { id: 'rhb-ge66ii', kat: 'historisch', name: 'Ge 6/6 II', beiname: '701–707', typ: 'Schwere Elektrolok mit geteiltem Kasten (historisch)', bahn: 'rhb', vorlaeufig: false,
    text: ['Die sieben Ge 6/6 II waren die schweren Streckenloks auf dem Stammnetz der RhB. Ihr Kasten ist zweiteilig und gelenkig verbunden, darunter laufen drei Drehgestelle.', 'Seit 2020 sind sie ausser Dienst; die 702 steht im Verkehrshaus Luzern.'],
    kennzahlen: [['7', 'Loks (701–707)'], ['1958', 'erste Loks'], ['1764 kW', 'Stundenleistung'], ['80 km/h', 'Höchstgeschwindigkeit']],
    daten: { 'Bauart': 'Elektrische Lokomotive mit geteiltem Kasten', 'Hersteller': 'SLM, BBC, MFO', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '11 kV 16,7 Hz', 'Achsfolge': "Bo'Bo'Bo'", 'Fahrzeugnummern': '701–702 (1958), 703–707 (1965)', 'Länge': '14,50 m über Puffer', 'Gewicht': '65 t', 'Leistung': '1764 kW (Stundenleistung)', 'Anfahrzugkraft': '218 kN', 'Höchstgeschwindigkeit': '80 km/h', 'Anzahl': '7', 'Erhalten': '702 «Curia» im Verkehrshaus Luzern; 707 «Scuol» in Samedan abgestellt', 'In Betrieb seit': '1958' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Achsfolge', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Werte nach Wikipedia; der Artikel nennt an anderer Stelle 1776 kW.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SLM, BBC und MFO bauten 1958 die 701 und 702, 1965 folgten die 703–707. Die Loks tragen Ortsnamen, etwa 701 «Raetia», 702 «Curia» und 707 «Scuol».'] },
      { titel: 'Einsatz und Technik', p: ['Die Loks zogen schwere Güter- und Reisezüge auf dem Stammnetz, besonders über die Albula. Ab 2020 wurden sie ausgemustert; die 701, 703, 704 und 706 sind abgebrochen.', 'Die 702 kam am 30. März 2023 ins Verkehrshaus Luzern; die Stiftung GRÜN & CHROM will sie in den Ursprungszustand bringen. Die 707 steht ohne Betriebsbewilligung in Samedan.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Zwei gelenkig verbundene Kastenhälften', 'Drei zweiachsige Drehgestelle', 'Zwei Führerstände'] }
    ],
    quellen: ['Wikipedia – RhB Ge 6/6 II', 'Stiftung GRÜN & CHROM – Ge 6/6 II grün und rot', 'Haribu – Register Triebfahrzeuge', RHB_Q],
    art: { typ: 'lok', farbe: RHB_ROT, akzent: '#E6E8EA', panto: true, achsen: 6 },
    bilder: [
      { src: 'bilder/rhb-ge66ii-c1.jpg', titel: 'Ge 6/6 II 701 bei Bonaduz (2016)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_Ge_6-6_II_701_Bonaduz_150716.jpg' },
      { src: 'bilder/rhb-ge66ii-c2.jpg', titel: 'Ge 6/6 II 704 «Davos» bei Trin', foto: 'Caumasee', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Ge_6-6_II_704_Davos_bei_Trin.jpg' },
      { src: 'bilder/rhb-ge66ii-c3.jpg', titel: 'Ge 6/6 II 707 «Scuol» in Samedan', foto: 'SchmalspurDVZO', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Ge_6-6_707_Scuol_at_Samedan.jpg' }
    ] },
  { id: 'rhb-ge44i', kat: 'historisch', name: 'Ge 4/4 I', beiname: '601–610', typ: 'Elektrische Streckenlok von 1947 und 1953 (historisch)', bahn: 'rhb', vorlaeufig: false,
    text: ['Die zehn Ge 4/4 I waren die ersten Drehgestell-Loks der RhB. Vier kamen 1947, sechs 1953.', 'Die 605 «Silvretta» fährt heute als historische Lok, unter anderem vor dem Alpine Classic Pullman Express.'],
    kennzahlen: [['10', 'Loks (601–610)'], ['1947', 'erste Loks'], ['1184 kW', 'Leistung'], ['80 km/h', 'Höchstgeschwindigkeit']],
    daten: { 'Bauart': 'Elektrische Lokomotive', 'Hersteller': 'SLM, BBC, MFO', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '11 kV 16,7 Hz', 'Achsfolge': "Bo'Bo'", 'Fahrzeugnummern': '601–604 (1947), 605–610 (1953)', 'Länge': '12,10 m über Puffer', 'Gewicht': '48 t', 'Leistung': '1184 kW', 'Höchstgeschwindigkeit': '80 km/h (ursprünglich 75 km/h)', 'Anzahl': '10', 'Erhalten': '605 «Silvretta» (historisch, betriebsfähig); 602 und 603 abgestellt', 'In Betrieb seit': '1947' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Achsfolge', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Werte nach Wikipedia und der RhB-Broschüre «Historische Fahrzeuge». Die Führerstände wurden 1986–1991 umgebaut; alte Fotos zeigen eine andere Form.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SLM baute die Loks mit elektrischer Ausrüstung von BBC und MFO: 601–604 im Jahr 1947, 605–610 im Jahr 1953. Die Namen erinnern an Bündner Berge und Täler, etwa 601 «Albula» oder 605 «Silvretta».'] },
      { titel: 'Einsatz und Technik', p: ['Mit zwei Drehgestellen und Einzelachsantrieb lösten sie die älteren Stangenloks ab. Von 1986 bis 1991 erhielten sie grössere Führerstände sowie Vielfach- und Fernsteuerung; 1997 kamen Einholmstromabnehmer für die Arosalinie dazu.', 'Ab November 2010 wurden sie ausgemustert. Die 605 erhielt 2025 die Zugsicherung ZSI 127; die Stiftung GRÜN & CHROM plant ihre Aufarbeitung im roten Anstrich und will die 602 wieder grün machen.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Zwei Führerstände (umgebaut 1986–1991)', 'Vielfach- und Fernsteuerung', 'Elektrische Rekuperationsbremse'] }
    ],
    quellen: ['Wikipedia – RhB Ge 4/4 I', 'Stiftung GRÜN & CHROM – Ge 4/4 I rot', 'RhB – Historische Fahrzeuge (Archivfassung 2022)', RHB_Q],
    art: { typ: 'lok', kurz: true, farbe: RHB_ROT, akzent: '#E6E8EA', panto: true },
    bilder: [
      { src: 'bilder/rhb-ge44i-c1.jpg', titel: 'Ge 4/4 I 605 «Silvretta» in Chur (2022)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:1_FR_Ge_4-4_I_605_Chur_250622_RE1734.jpg' },
      { src: 'bilder/rhb-ge44i-c2.jpg', titel: 'Ge 4/4 I 603 und 602 in Spinas', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Ge_4-4_I_603_and_602_in_Spinas.jpg' },
      { src: 'bilder/rhb-ge44i-c3.jpg', titel: 'Ge 4/4 I zwischen Bever und Spinas', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Ge_4-4_I_Bever_-_Spinas.jpg' }
    ] },
  { id: 'rhb-ge24', kat: 'historisch', name: 'Ge 2/4', beiname: '201–207', typ: 'Frühe Elektrolok von 1913 (historisch)', bahn: 'rhb', vorlaeufig: false,
    text: ['Die sieben Ge 2/4 von SLM und BBC eröffneten 1913 den elektrischen Betrieb auf der Strecke Bever–Scuol. Später wurden mehrere zu Rangierloks umgebaut.', 'Die 222 fährt heute als historische Lok; die 205 und 207 sind im Ursprungszustand erhalten.'],
    kennzahlen: [['7', 'Loks (201–207)'], ['1913', 'in Betrieb'], ['45 km/h', 'Höchstgeschwindigkeit (ursprünglich)'], ['222', 'betriebsfähig erhalten']],
    daten: { 'Bauart': 'Elektrische Lokomotive mit Stangenantrieb', 'Hersteller': 'SLM, BBC', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '11 kV 16,7 Hz', 'Achsfolge': '1B1', 'Fahrzeugnummern': '201–207; Umbauten 211–213, 221–222', 'Länge': 'rund 8,7 m', 'Gewicht': '37 t (ursprünglich)', 'Leistung': '210 kW (ursprünglich), 428 kW (221 und 222 nach Umbau)', 'Höchstgeschwindigkeit': '45 km/h (ursprünglich), 55 km/h (nach Umbau)', 'Anzahl': '7', 'Erhalten': '222 betriebsfähig (Landquart); 205 Bahnmuseum Albula; 207 Verkehrshaus Luzern; 212', 'In Betrieb seit': '1913' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Achsfolge', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Werte nach Wikipedia; die RhB-Broschüre nennt für die 222 rund 450 kW und 45 km/h. Die 222 hat keine Zugsicherung ZSI 127.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SLM und BBC bauten die Loks 1912/13. Durch Umbauten erhielten mehrere neue Nummern; es entstanden aber keine zusätzlichen Loks.'],
        tabelle: { kopf: ['Ursprünglich', 'Später'], zeilen: [
          ['201', 'Ge 2/4 213'], ['202', 'Gea 2/4 211, später Gem 2/4 211'], ['203', 'Ge 2/4 221'], ['204', 'Ge 2/4 222'], ['206', 'Ge 2/4 212'], ['205, 207', 'im Ursprungszustand erhalten']] } },
      { titel: 'Einsatz und Technik', p: ['1943 wurden drei Loks zu Rangierloks umgebaut; 1945/46 erhielten die 221 und 222 neue Motoren und eine Widerstandsbremse. Danach leisteten sie 428 kW und fuhren 55 km/h.', 'Die 222 ist heute eine betriebsfähige Museumslok in Landquart. Die 205 gehört seit 2023 der Stiftung Bahnmuseum Albula, die 207 steht im Verkehrshaus Luzern.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Zwei Triebachsen und zwei Laufachsen', 'Widerstandsbremse (221 und 222 nach dem Umbau)', 'Keine Zugsicherung ZSI 127 (222)'] }
    ],
    quellen: ['Wikipedia – RhB Ge 2/4', 'Lokstatistik Pospichal – RhB-Lokomotiven über 200', 'RhB – Historische Fahrzeuge (Archivfassung 2022)', RHB_Q],
    art: { typ: 'lok', kurz: true, farbe: RHB_BRAUN, akzent: RHB_DUNKEL, panto: true },
    bilder: [
      { src: 'bilder/rhb-ge24-c1.jpg', titel: 'Ge 2/4 222', foto: 'Manfred Kopka', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_222_(Ge_24).jpg' },
      { src: 'bilder/rhb-ge24-c2.jpg', titel: 'Ge 2/4 201 im Ursprungszustand (1912)', foto: 'ETH-Bibliothek Zürich, Bildarchiv (Fotograf unbekannt)', lizenz: 'CC0', lizenzUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', quelle: 'https://commons.wikimedia.org/wiki/File:Switzerland,_Rhaetian_Railway_locomotive_2-4_No._201,_single_shaft_(Ans_05405-004).jpg' }
    ] },
  { id: 'rhb-ge46', kat: 'historisch', name: 'Ge 4/6', beiname: '301–391', typ: 'Erste Elektroloks der RhB von 1912–1918 (historisch)', bahn: 'rhb', vorlaeufig: false,
    text: ['Unter der Bezeichnung Ge 4/6 laufen mehrere Versuchsloks mit elektrischer Ausrüstung von BBC, MFO und AEG. Die 351 war die erste Elektrolok der RhB.', 'Die 353 ist als historische Lok erhalten, die 391 steht im Deutschen Technikmuseum Berlin.'],
    kennzahlen: [['8', 'Loks'], ['1913', 'in Betrieb'], ['588 kW', 'Leistung (353, Prospekt)'], ['55 km/h', 'Höchstgeschwindigkeit (353)']],
    daten: { 'Bauart': 'Elektrische Lokomotive mit Stangenantrieb', 'Hersteller': 'SLM; elektrisch BBC (301–302), MFO (351–355), AEG (391)', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '11 kV 16,7 Hz', 'Achsfolge': '1D1', 'Fahrzeugnummern': '301–302, 351–355, 391', 'Leistung': '419–559 kW (Stundenleistung, je nach Ausführung)', 'Anzahl': '8', 'Erhalten': '353 (RhB), 391 (Deutsches Technikmuseum Berlin)', 'In Betrieb seit': '1913' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Achsfolge', 'Fahrzeugnummern', 'Leistung', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Die Ausführungen unterscheiden sich in Leistung und Gewicht; ein einziger Datensatz gilt nicht für alle. Die RhB-Broschüre nennt für die 353 rund 588 kW und 55 km/h.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Den mechanischen Teil lieferte SLM, die elektrische Ausrüstung kam von drei Firmen.'],
        tabelle: { kopf: ['Nummern', 'Elektrik', 'In Betrieb'], zeilen: [['301', 'BBC', '1913'], ['302', 'BBC', '1918'], ['351–352', 'MFO', '1912/13'], ['353–355', 'MFO', '1914'], ['391', 'AEG', '1913']] } },
      { titel: 'Einsatz und Technik', p: ['Die Loks fuhren zuerst auf der 1913 elektrifizierten Engadinerlinie und später auf dem ganzen Stammnetz. Die 351 gilt als erste Elektrolok der RhB.', 'Die 353 fährt bis heute vor Museumszügen. Die 391 kann im Deutschen Technikmuseum Berlin besichtigt werden.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Stangenantrieb', 'Vier Triebachsen und zwei Laufachsen', 'Unterschiedliche elektrische Ausrüstung je Lok'] }
    ],
    quellen: ['Wikipedia – RhB Ge 4/6', 'Lokstatistik Pospichal – RhB-Lokomotiven über 300', 'RhB – Historische Fahrzeuge (Archivfassung 2022)', RHB_Q],
    art: { typ: 'lok', kurz: true, farbe: RHB_BRAUN, akzent: RHB_DUNKEL, panto: true },
    bilder: [
      { src: 'bilder/rhb-ge46-c1.jpg', titel: 'Ge 4/6 353 in Ilanz', foto: 'Adrian Michael', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Ge_4-6-353_Ilanz1.JPG' },
      { src: 'bilder/rhb-ge46-c2.jpg', titel: 'Ge 4/6 391 im Deutschen Technikmuseum Berlin (2017)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Ge_4-6_Nr._391_im_Deutschen_Technikmusuem_Berlin_(2017).jpg' },
      { src: 'bilder/rhb-ge46-c3.jpg', titel: 'Ge 4/6 355 (1915)', foto: 'ETH-Bibliothek Zürich, Bildarchiv (Fotograf unbekannt)', lizenz: 'CC0', lizenzUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', quelle: 'https://commons.wikimedia.org/wiki/File:Rhaetian_Railway_electric_locomotive_No._355_(Ge_4-6)_(Ans_05405-028).jpg' }
    ] },
  { id: 'rhb-bernina-loks', kat: 'historisch', name: 'Bernina-Loks', beiname: 'Ge 2/2, Ge 4/4 181–182, De 2/2 151', typ: 'Kleine Loks und Gepäcktriebwagen der Berninabahn (historisch)', bahn: 'rhb', vorlaeufig: false,
    text: ['Von der Berninabahn stammen einige besondere Triebfahrzeuge: die kleinen Ge 2/2 161 und 162, die Einzelstücke Ge 4/4 181 und 182 und der Gepäcktriebwagen De 2/2 151.', 'Die 182 gehört heute dem Club 1889, die frühere 181 der Museumsbahn Blonay–Chamby.'],
    kennzahlen: [['1909', 'De 2/2 151 in Betrieb'], ['1911', 'Ge 2/2 161–162'], ['1916', 'Ge 4/4 81 gebaut'], ['708 kW', 'Ge 4/4 81 (Museum)']],
    daten: { 'Bauart': 'Elektrische Loks und Gepäcktriebwagen', 'Betreiber': 'Berninabahn, ab 1943 RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '1000 V Gleichstrom', 'Fahrzeugnummern': 'Ge 2/2 161, 162; Ge 4/4 181 (ex Bernina 81), 182 (ex Bernina 82); De 2/2 151 (ex Fe 2/2 51)', 'Erhalten': '161 historisch, 162 abgestellt; 81 Blonay–Chamby; 182 Club 1889; 151 Pontresina', 'In Betrieb seit': '1909' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Für die 182 nennen die Quellen 1927 oder 1928 (Bau oder Ablieferung). Bei Blonay–Chamby fährt die 81 mit 900 V.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Berninabahn kam 1943 zur RhB. Mit ihr kamen diese Einzelstücke:'],
        tabelle: { kopf: ['Fahrzeug', 'Baujahr', 'Hinweis'], zeilen: [
          ['De 2/2 151 (ex Fe 2/2 51)', '1909', 'Gepäcktriebwagen, ab 1965 Nummer 151'], ['Ge 2/2 161, 162', '1911', 'kleine Rangierloks'],
          ['Ge 4/4 181 (ex Bernina Ge 6/6 81)', '1916, Umbau 1929', 'seit 1970 bei Blonay–Chamby'], ['Ge 4/4 182 (ex Bernina 82)', '1927/28', 'SLM und Sécheron; Club 1889']] } },
      { titel: 'Einsatz und Technik', p: ['Die 81 wurde 1916 als Ge 6/6 gebaut und 1929 zur Ge 4/4 umgebaut; 1961 erhielt sie die RhB-Nummer 181. Blonay–Chamby nennt 46 t, 708 kW und 45 km/h sowie Hand-, Vakuum-, Widerstands- und Magnetschienenbremse.', 'Der De 2/2 151 wurde mehrmals umgebaut und erhielt 1980 einen Blechkasten und einen Einholmstromabnehmer. Er ist heute ein Museumsfahrzeug in Pontresina.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Für 1000 V Gleichstrom der Berninalinie', 'Magnetschienenbremse (81)', 'Gepäckraum im De 2/2 151'] }
    ],
    quellen: ['Lokstatistik Pospichal – Bernina-Triebwagen und -Lokomotiven', 'Museumsbahn Blonay–Chamby – Ge 4/4 81', 'Historische Berninabahn – Fe 2/2 51 / De 2/2 151', RHB_Q],
    art: { typ: 'lok', kurz: true, farbe: RHB_BRAUN, akzent: RHB_DUNKEL, panto: true },
    bilder: [
      { src: 'bilder/rhb-bernina-loks-c1.jpg', titel: 'Ge 4/4 182 in Pontresina (2025)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Pontresina_20250206E331_RhB_182.jpg' },
      { src: 'bilder/rhb-bernina-loks-c2.jpg', titel: 'Ge 4/4 81 bei der Museumsbahn Blonay–Chamby (2018)', foto: 'hrs51', lizenz: 'CC BY 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Die_Lok_Ge_4-4_81.jpg' },
      { src: 'bilder/rhb-bernina-loks-c3.jpg', titel: 'Ge 2/2 162 und De 2/2 151 in Poschiavo (2014)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB-Ge162%2BDe151_Poschiavo2014.jpg' }
    ] },
  { id: 'rhb-g34', kat: 'historisch', name: 'G 3/4', beiname: '1–16', typ: 'Dampflok der Gründerzeit von 1889–1908 (historisch)', bahn: 'rhb', vorlaeufig: false,
    text: ['Mit den G 3/4 begann 1889 der Betrieb der Landquart–Davos-Bahn, aus der die RhB entstand. Die 1 «Rhätia» führte den Eröffnungszug.', 'Erhalten sind unter anderem die 1 «Rhätia» und die 11 «Heidi».'],
    kennzahlen: [['16', 'Loks'], ['1889', 'erste Loks'], ['30,2 t', 'Dienstgewicht (Nr. 1)'], ['45 km/h', 'Höchstgeschwindigkeit']],
    daten: { 'Bauart': 'Dampf-Tenderlokomotive', 'Hersteller': 'SLM Winterthur', 'Betreiber': 'Landquart–Davos-Bahn, ab 1895 RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Achsfolge': "1'C", 'Fahrzeugnummern': '1–16', 'Länge': '7,95 m über Puffer (Nr. 1)', 'Gewicht': '23,5 t leer, 30,2 t im Dienst (Nr. 1)', 'Leistung': '184 kW bei 20 km/h (Nr. 1)', 'Höchstgeschwindigkeit': '45 km/h', 'Anzahl': '16', 'Erhalten': '1 «Rhätia» (RhB), 11 «Heidi» (Club 1889), 14 (ausserhalb der RhB)', 'In Betrieb seit': '1889' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Achsfolge', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Technische Daten der Nr. 1 nach historic RhB. Nicht alle 16 Loks sind gleich; sie entstanden zwischen 1889 und 1908.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SLM baute die erste Serie 1–5 im Jahr 1889; weitere Lieferungen folgten bis 1908. Die 11 von 1902 heisst heute «Heidi».'] },
      { titel: 'Einsatz und Technik', p: ['Die Lok hat drei gekuppelte Achsen und vorn eine Laufachse. Die Zylinder haben 340 mm Durchmesser und 500 mm Hub, der Kessel arbeitet mit 12 bar; Wasser (2600 l) und Kohle (950 kg) trägt die Lok selbst.', 'Die «Rhätia» kam nach langen Jahren ausserhalb Graubündens zurück und wurde nach 2014 aufgearbeitet. Die «Heidi» gehört dem Club 1889; das Register nennt einen Umbau 2016.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Treibräder 1050 mm, Laufräder 700 mm', 'Wasser- und Kohlevorrat auf der Lok (Tenderlok)', 'Nassdampf-Zwillingstriebwerk'] }
    ],
    quellen: ['historic RhB – G 3/4 Nr. 1 «Rhätia»', 'Wikipedia – LD G 3/4', 'Lokstatistik Pospichal – RhB-Dampflokomotiven', RHB_Q],
    art: { typ: 'rangier', achsen: 3, farbe: RHB_DUNKEL, akzent: RHB_ROT, panto: false },
    bilder: [
      { src: 'bilder/rhb-g34-c1.jpg', titel: 'G 3/4 1 «Rhätia» in Bonaduz (2009)', foto: 'KPhilipp', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_G_3_4_Bahnhoffest_Bonaduz_2009.JPG' },
      { src: 'bilder/rhb-g34-c2.jpg', titel: 'G 3/4 1 und Ge 2/4 222 in Chur', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_G_3-4_Nr._1_und_Ge_2-4_Nr._222_in_Chur.jpg' }
    ] },
  { id: 'rhb-mallet', kat: 'historisch', name: 'Mallet-Loks', beiname: '21–32', typ: 'Gelenk-Dampfloks für den schweren Bergdienst (historisch)', bahn: 'rhb', vorlaeufig: false,
    text: ['Die Mallet-Loks haben zwei Triebwerksgruppen unter einem Kessel. So kommen sie mit vielen Triebachsen durch enge Kurven.', 'Die RhB hatte drei Bauarten mit den Nummern 21 bis 32.'],
    kennzahlen: [['12', 'Loks (21–32)'], ['1891', 'erste Mallets (Maffei)'], ['1896', '«Maloja» und «Chiavenna»'], ['1902', 'SLM-Serie']],
    daten: { 'Bauart': 'Mallet-Tenderlokomotiven', 'Hersteller': 'Maffei (21–22), SLM (23–32)', 'Betreiber': 'Landquart–Davos-Bahn und RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '21–22 (ex LD 6–7), 23–24, 25–32', 'In Betrieb seit': '1891' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'In Betrieb seit'],
    specNote: 'Nach der Lokstatistik Pospichal. Die Umbauten der 21 und 22 ergaben keine zusätzlichen Loks.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Schreibweise mit zwei Bruchzahlen beschreibt die beiden Triebwerksgruppen.'],
        tabelle: { kopf: ['Bauart', 'Nummern', 'Herkunft'], zeilen: [
          ['G 2/2+2/2', '21–22 (ex LD 6–7)', 'Maffei 1891, später zu G 2/3+2/2 umgebaut'], ['G 2/2+2/3', '23–24', 'SLM 1896, «Maloja» und «Chiavenna»'], ['G 2/3+2/2', '25–32', 'SLM ab 1902']] } },
      { titel: 'Einsatz und Technik', p: ['Die stärkeren Gelenkloks übernahmen schwere Züge in den Bergen von den kleinen G 3/4. Nach der Elektrifizierung verkaufte die RhB viele Dampfloks, auch ins Ausland.', 'Die 23 «Maloja» ging 1926 an die Kraftwerke Oberhasli und wurde 1940 abgebrochen.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Zwei Triebwerksgruppen, die vordere beweglich', 'Wasser- und Kohlevorrat auf der Lok', 'Bauart Mallet für enge Kurven'] }
    ],
    quellen: ['Lokstatistik Pospichal – RhB-Dampflokomotiven', 'Wikimedia Commons – historisches Foto der 23 «Maloja»', RHB_Q],
    art: { typ: 'rangier', achsen: 3, farbe: RHB_DUNKEL, akzent: RHB_ROT, panto: false },
    bilder: [
      { src: 'bilder/rhb-mallet-c1.jpg', titel: 'Mallet-Lok 23 «Maloja»', foto: 'Unbekannt', lizenz: 'Gemeinfrei', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:Maloja23G22%2B23RhBi.jpg' }
    ] },
  { id: 'rhb-g45', kat: 'historisch', name: 'G 4/5', beiname: '101–129', typ: 'Schwere Dampflok mit Schlepptender ab 1904 (historisch)', bahn: 'rhb', vorlaeufig: false,
    text: ['Die G 4/5 waren die stärksten Dampfloks der RhB. SLM baute die 29 Loks ab 1904; sie haben vier gekuppelte Achsen, eine Laufachse und einen Schlepptender.', 'Die 107 «Albula» und die 108 von 1906 gehören heute zu den historischen Loks der RhB.'],
    kennzahlen: [['29', 'Loks (101–129)'], ['1904', 'erste Loks'], ['2', 'historische Loks (107, 108)'], ['2', 'Loks in Thailand']],
    daten: { 'Bauart': 'Dampflokomotive mit Schlepptender', 'Hersteller': 'SLM Winterthur', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Achsfolge': "1'D", 'Fahrzeugnummern': '101–129', 'Anzahl': '29', 'Erhalten': '107 und 108 (RhB); 118 Chiang Mai, 123 Bangkok', 'In Betrieb seit': '1904' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Achsfolge', 'Fahrzeugnummern', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Die Lieferungen unterscheiden sich; ein gemeinsamer Datensatz für alle 29 Loks ist darum nicht angegeben.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SLM baute die Serie ab 1904. Die beiden historischen Loks 107 und 108 stammen von 1906; die 107 trägt den Namen «Albula».'] },
      { titel: 'Einsatz und Technik', p: ['Die G 4/5 zogen schwere Züge auf der Albula, bis die Strecke elektrifiziert war. Danach verkaufte die RhB viele Loks; die 104 ging 1950 an die Ferrocarril de La Robla in Spanien.', 'Zwei ehemalige RhB-Loks stehen heute in Thailand: die 118 in Chiang Mai und die 123 in Bangkok.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Schlepptender für Wasser und Kohle', 'Vier gekuppelte Achsen und eine Laufachse', 'Heute vor Dampf-Sonderzügen der RhB'] }
    ],
    quellen: ['Lokstatistik Pospichal – RhB-Dampflokomotiven', 'Haribu – Register Triebfahrzeuge und ausrangierte Triebfahrzeuge', RHB_Q],
    art: { typ: 'rangier', achsen: 3, farbe: RHB_DUNKEL, akzent: RHB_ROT, panto: false },
    bilder: [
      { src: 'bilder/rhb-g45-c1.jpg', titel: 'G 4/5 107 «Albula» mit Ge 6/6 II 702', foto: 'SchmalspurDVZO', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:G_4-5_107_Albula_and_Ge_6-6_II_702_Curia_normal.jpg' },
      { src: 'bilder/rhb-g45-c2.jpg', titel: 'G 4/5 104 auf einem Werkfoto von SLM (1904)', foto: 'Schweizerische Lokomotiv- und Maschinenfabrik Winterthur (SLM)', lizenz: 'Gemeinfrei', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_G_45_104_SLM_1904.jpg' }
    ] },
  { id: 'rhb-bernina-tw', kat: 'historisch', name: 'Bernina-Triebwagen', beiname: 'BCe 4/4 und ABe 4/4 I', typ: 'Erste Triebwagen der Berninabahn ab 1908 (historisch)', bahn: 'rhb', vorlaeufig: false,
    text: ['Die Berninabahn eröffnete ihren Betrieb mit elektrischen Triebwagen mit zwei Drehgestellen. Später wurden sie umgebaut und als ABe 4/4 I 30–38 bezeichnet.', 'Die 30 und 34 sind bei der RhB als historische Triebwagen erhalten, die 35 bei der Museumsbahn Blonay–Chamby.'],
    kennzahlen: [['1908', 'erste Triebwagen'], ['450 kW', 'Leistung (35, Museum)'], ['55 km/h', 'Höchstgeschwindigkeit (35)'], ['3', 'erhalten (30, 34, 35)']],
    daten: { 'Bauart': 'Elektrische Triebwagen', 'Betreiber': 'Berninabahn, ab 1943 RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '1000 V Gleichstrom', 'Fahrzeugnummern': 'BCe 4/4 1–14, BCFe 4/4 21–23, später ABe 4/4 I 30–38', 'Erhalten': '30 und 34 (RhB), 35 (Blonay–Chamby)', 'In Betrieb seit': '1908' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Die Baujahre der 30 und 34 weichen zwischen den Registern ab. Die Werte der 35 gelten für den Museumszustand bei Blonay–Chamby (900 V).',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Berninabahn beschaffte 1908/09 die Personentriebwagen BCe 4/4 1–14 und 1911 die BCFe 4/4 21–23 mit Gepäckabteil. Durch Umbauten und neue Nummern entstanden daraus die ABe 4/4 I 30–38.'] },
      { titel: 'Einsatz und Technik', p: ['Blonay–Chamby nennt für die 35 ein Dienstgewicht von 30 t, vier Motoren mit zusammen 450 kW und 55 km/h. Sie hat Hand-, Druckluft-, Vakuum-, Widerstands- und Magnetschienenbremse.', 'Historisch bot die 35 zwölf Plätze der 2. und 31 der 3. Klasse.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Abteile der 2. und 3. Klasse (historisch)', 'Magnetschienenbremse', 'Für die Gleichstrom-Fahrleitung der Berninabahn'] }
    ],
    quellen: ['Lokstatistik Pospichal – Bernina-Triebwagen', 'Museumsbahn Blonay–Chamby – BCe 4/4 35', 'RhB/historic RhB – Verzeichnis historisches Rollmaterial (Stand 1. April 2022)', RHB_Q],
    art: { typ: 'triebzug', nase: 'kurz', farbe: RHB_GRUEN, akzent: '#E8DCC8', tuer: '#2A4A33', panto: true },
    bilder: [] },
  { id: 'rhb-abe44ii', kat: 'historisch', name: 'ABe 4/4 II', beiname: '41–49', typ: 'Bernina-Triebwagen von 1964–1972 (historisch)', bahn: 'rhb', vorlaeufig: false,
    text: ['Die neun ABe 4/4 II ersetzten ab 1964 einen grossen Teil der alten Bernina-Triebwagen. Sie zogen auch zusätzliche Wagen über die steile Berninalinie.', 'Die 46 ist als historischer Triebwagen erhalten; die 48 und 49 wurden zu Dienstfahrzeugen umgebaut.'],
    kennzahlen: [['9', 'Triebwagen (41–49)'], ['680 kW', 'Dauerleistung'], ['65 km/h', 'Höchstgeschwindigkeit'], ['1964', 'erste Triebwagen']],
    daten: { 'Bauart': 'Elektrischer Triebwagen', 'Hersteller': 'SWS (mechanisch), MFO, SAAS, BBC (elektrisch)', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '1000 V Gleichstrom', 'Fahrzeugnummern': '41–46 (1964/65), 47–49 (1972)', 'Länge': '16,54 m (41–46), 16,89 m (47–49)', 'Gewicht': '41 t (41–46), 43 t (47–49)', 'Leistung': '680 kW dauernd', 'Höchstgeschwindigkeit': '65 km/h', 'Sitzplätze': '12 in der 1., 24 in der 2. Klasse', 'Anzahl': '9', 'Erhalten': '46 (historisch); 47 noch aufgeführt', 'In Betrieb seit': '1964' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Werte nach Wikipedia. Franz Skvor, der an der Beschaffung beteiligt war, nennt 677 kW als damaligen Planungswert.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SWS baute den mechanischen Teil, MFO, SAAS und BBC lieferten die elektrische Ausrüstung. Die 41–46 kamen 1964/65, die 47–49 im Jahr 1972.', 'Die 48 wurde 2012 zum Diensttriebwagen Xe 23201, die 49 2014 zum Xe 23202 und 2015 zum Hilfswagen Xe 27201 in Poschiavo.'] },
      { titel: 'Einsatz und Technik', p: ['Die Triebwagen fuhren Personenzüge auf der Berninalinie und zogen weitere Wagen über Steigungen bis 70 Promille. Sie hatten Widerstands-, Rekuperations- und Magnetschienenbremse, Vielfachsteuerung und liessen sich von einer Schneeschleuder aus fernsteuern.', 'Ab 2010 wurden die 41–45 abgebrochen. Die 46 erhielt 2021 wieder ihren historischen Anstrich mit goldenem Streifen.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['12 Plätze in der 1. und 24 in der 2. Klasse', 'Magnetschienenbremse', 'Fernsteuerung ab Schneeschleuder'] }
    ],
    quellen: ['Wikipedia – RhB ABe 4/4 II', 'Franz Skvor – «Nachruf» Bernina-Triebwagen, InfoRetica 4/2010', 'Haribu – Register Triebfahrzeuge', RHB_Q],
    art: { typ: 'triebzug', nase: 'kurz', farbe: RHB_ROT, akzent: RHB_GRAU, tuer: '#8E1A1F', panto: true },
    bilder: [
      { src: 'bilder/rhb-abe44ii-c1.jpg', titel: 'ABe 4/4 II 46 mit dem Schneepflug Xk 9143', foto: 'Ion Tichy', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_ABe_4_4_no._46_and_snow_plough_Xk_9143_in_action.jpg' },
      { src: 'bilder/rhb-abe44ii-c2.jpg', titel: 'ABe 4/4 II 42 mit kurzem Zug auf der Berninalinie (um 1980)', foto: 'trams aux fils', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_ligne_de_la_Bernina_ABe_42.jpg' }
    ] },
  { id: 'rhb-abe44iii', kat: 'historisch', name: 'ABe 4/4 III', beiname: '51–56', typ: 'Bernina-Triebwagen von 1988 und 1990 (historisch)', bahn: 'rhb', vorlaeufig: false,
    text: ['Die sechs ABe 4/4 III waren bis 2023 die stärksten Triebwagen der Berninalinie. Oft fuhren sie zu zweit vor dem Bernina Express.', 'Ende 2023 endete ihr Regelbetrieb; die 53 «Tirano» steht heute im Bahnmuseum Albula in Bergün.'],
    kennzahlen: [['6', 'Triebwagen (51–56)'], ['1016 kW', 'Dauerleistung'], ['65 km/h', 'Höchstgeschwindigkeit'], ['2023', 'Ende Regelbetrieb']],
    daten: { 'Bauart': 'Elektrischer Triebwagen', 'Hersteller': 'SWA (Schindler Altenrhein), ABB', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '1000 V Gleichstrom', 'Fahrzeugnummern': '51–53 (1988), 54–56 (1990)', 'Länge': '16,89 m über Puffer', 'Gewicht': '47 t', 'Leistung': '1016 kW dauernd', 'Höchstgeschwindigkeit': '65 km/h', 'Sitzplätze': '12 in der 1., 16 in der 2. Klasse', 'Anzahl': '6', 'Erhalten': '53 im Bahnmuseum Albula; 54 und 56 noch aufgeführt', 'In Betrieb seit': '1988' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Werte nach Wikipedia; die RhB-Broschüre nennt rund 1000 kW und 175 kN. Das Dossier nennt SLM und ABB als Hersteller, Wikipedia SWA und ABB.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die sechs Triebwagen kamen in zwei Serien: 51–53 im Jahr 1988, 54–56 im Jahr 1990. Sie tragen Namen wie 51 «Poschiavo», 53 «Tirano» und 54 «Hakone».'] },
      { titel: 'Einsatz und Technik', p: ['Die Triebwagen zogen Regionalzüge und den Bernina Express, oft zu zweit. Ende 2023 schieden sie aus dem Regelbetrieb aus, weil sie die Vorgaben für Reisende mit eingeschränkter Mobilität und die Zugsicherung ZSI 127 nicht erfüllten; die Allegra übernahmen.', 'Die 51, 52 und 55 sind abgebrochen. Die 53 steht seit Juli 2024 im Bahnmuseum Albula.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['12 Plätze in der 1. und 16 in der 2. Klasse', 'Fahrten zu zweit in Vielfachsteuerung', 'Keine Zugsicherung ZSI 127'] }
    ],
    quellen: ['Wikipedia – RhB ABe 4/4 III', 'Haribu – Register ausrangierte Triebfahrzeuge', RHB_Q],
    art: { typ: 'triebzug', nase: 'kurz', farbe: RHB_ROT, akzent: RHB_GRAU, tuer: '#8E1A1F', panto: true },
    bilder: [
      { src: 'bilder/rhb-abe44iii-c1.jpg', titel: 'ABe 4/4 III 56 und 51 am Lago Bianco', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_ABe_4-4_III_56_and_51_Lago_Bianco.jpg' },
      { src: 'bilder/rhb-abe44iii-c2.jpg', titel: 'ABe 4/4 III auf dem Kreisviadukt von Brusio', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_ABe_4-4_III_Kreisviadukt_Brusio.jpg' }
    ] },
  { id: 'rhb-abe501', kat: 'historisch', name: 'ABe 4/4 501–504', beiname: 'Fliegender Rätier', typ: 'Leichtstahl-Triebwagen von 1939/40 (historisch)', bahn: 'rhb', vorlaeufig: false,
    text: ['Die vier ABe 4/4 501–504 waren leichte Stahltriebwagen für das Wechselstromnetz. Sie erhielten den Übernamen «Fliegender Rätier».', 'Der 501 ist als historischer Triebwagen erhalten.'],
    kennzahlen: [['4', 'Triebwagen'], ['1939', 'gebaut'], ['490 kW', 'Leistung (Prospekt)'], ['70 km/h', 'Höchstgeschwindigkeit (Prospekt)']],
    daten: { 'Bauart': 'Elektrischer Leichtstahl-Triebwagen', 'Hersteller': 'SWS (mechanisch), BBC und MFO (elektrisch)', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '11 kV 16,7 Hz', 'Fahrzeugnummern': '501–504', 'Länge': 'rund 18 m', 'Leistung': 'rund 490 kW', 'Höchstgeschwindigkeit': '70 km/h', 'Anzahl': '4', 'Erhalten': '501 (historisch)', 'In Betrieb seit': '1939' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Länge', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Leistung, Geschwindigkeit und Länge nach der RhB-Broschüre «Historische Fahrzeuge» (gerundet).',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SWS baute die vier Triebwagen 1939/40 mit elektrischer Ausrüstung von BBC und MFO. Ihr selbsttragender Leichtstahlkasten war damals neu.'] },
      { titel: 'Einsatz und Technik', p: ['Sie boten auf dem Wechselstromnetz ein eigenes, schnelles Triebwagenangebot. Ein Foto von 1995 zeigt die 502 und 503 noch zusammen mit einer Ge 4/4 I in Pontresina.', 'Der 501 erhielt später einen verstärkten Wagenkasten, einen veränderten Führerstand und eine neue Inneneinrichtung. Er zeigt also nicht mehr den Zustand von 1939.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Abteile der 1. und 2. Klasse (AB)', 'Selbsttragender Leichtstahlkasten', 'Erneuerte Inneneinrichtung (501)'] }
    ],
    quellen: ['Lokstatistik Pospichal – Misox, Arosa und Stammnetz-Triebwagen', 'Hans-Peter Bärtschi – Denkmalpflegerische Würdigung der historischen RhB-Fahrzeuge (2013)', 'RhB – Historische Fahrzeuge (Archivfassung 2022)', RHB_Q],
    art: { typ: 'triebzug', nase: 'kurz', farbe: RHB_ROT, akzent: RHB_GRAU, tuer: '#8E1A1F', panto: true },
    bilder: [
      { src: 'bilder/rhb-abe501-c1.jpg', titel: 'ABe 4/4 501 im Depot Landquart (2008)', foto: 'Rainerhaufe', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:ABe_4_4.jpg' },
      { src: 'bilder/rhb-abe501-c2.jpg', titel: 'Ge 4/4 I 603 mit ABe 4/4 503 und 502 in Pontresina (1995)', foto: 'Hans-Peter Bärtschi', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:ETH-BIB_SIK_01-045709_RhB_Ge_4-4_I_603_ABe_4-4_503_502_Pontresina_1995.jpg' }
    ] },
  { id: 'rhb-be44-511', kat: 'historisch', name: 'Be 4/4', beiname: '511–516 Pendelzüge', typ: 'Pendelzüge für den Regionalverkehr von 1971 und 1979 (historisch)', bahn: 'rhb', vorlaeufig: false,
    text: ['Die Be 4/4 511–516 bildeten mit Zwischen- und Steuerwagen Pendelzüge für den Regional- und Vorortsverkehr. Vier kamen 1971, zwei 1979.', 'Seit 2021 werden sie ausgemustert.'],
    kennzahlen: [['6', 'Triebwagen'], ['784 kW', 'Leistung'], ['90 km/h', 'Höchstgeschwindigkeit'], ['1971', 'erste Züge']],
    daten: { 'Bauart': 'Elektrischer Triebwagen mit Zwischen- und Steuerwagen', 'Hersteller': 'FFA (Kasten), SIG (Drehgestelle), SAAS (elektrisch)', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '11 kV 16,7 Hz', 'Fahrzeugnummern': '511–516; Steuerwagen ABDt 1711–1716', 'Gewicht': '44,6 t', 'Leistung': '784 kW (4 × 196 kW)', 'Höchstgeschwindigkeit': '90 km/h', 'Anzahl': '6', 'Erhalten': '514 museal in Bergün (laut Register)', 'In Betrieb seit': '1971' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Werte nach Wikipedia. Wikipedia nennt für die 514 nur den Führerstand für das Bahnmuseum Albula; das Register führt die 514 als museal in Bergün.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['FFA baute die Kästen, SIG die Drehgestelle und SAAS die elektrische Ausrüstung. 1971 kamen die ersten vier Triebwagen, 1979 zwei weitere. Triebwagen und ganzer Pendelzug sind verschiedene Fahrzeuge.'] },
      { titel: 'Einsatz und Technik', p: ['Die Pendelzüge fuhren im Regional- und Vorortsverkehr, etwa rund um Chur, nach Thusis und Davos. Vier Fahrmotoren leisten zusammen 784 kW; die Höchstgeschwindigkeit beträgt 90 km/h.', 'Ab 2021 wurden sie ausgemustert; der erste Zug ging am 29. Januar 2021 zum Abbruch. Die 515 ist laut Register abgestellt.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Steuerwagen ABDt mit 1. und 2. Klasse und Gepäckabteil', 'Pendelbetrieb ohne Umfahren', 'Vier Fahrmotoren mit je 196 kW'] }
    ],
    quellen: ['Wikipedia – RhB Be 4/4', 'Lokstatistik Pospichal – Stammnetz-Triebwagen', 'Haribu – Register ausrangierte Triebfahrzeuge und Steuerwagen', RHB_Q],
    art: { typ: 'triebzug', nase: 'kurz', farbe: RHB_ROT, akzent: RHB_GRAU, tuer: '#8E1A1F', panto: true },
    bilder: [
      { src: 'bilder/rhb-be44-511-c1.jpg', titel: 'Pendelzug mit Be 4/4 511', foto: 'SchmalspurDVZO', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Vorortpendel_Be_4-4_Nr._511.jpg' },
      { src: 'bilder/rhb-be44-511-c2.jpg', titel: 'Be 4/4-Pendelzug in Tiefencastel (1984)', foto: 'Joachim Seyferth', lizenz: 'CC BY 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Regionalzug_der_Rh%C3%A4tischen_Bahn_(Baureihe_Be_4-4)_in_Tiefencastel.jpg' },
      { src: 'bilder/rhb-be44-511-c3.jpg', titel: '2. Klasse im Steuerwagen ABDt 1713 (2016)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_ABDt_1713_2nd_class_interior_180716.jpg' }
    ] },
  { id: 'rhb-misox', kat: 'historisch', name: 'Misoxer Triebwagen', beiname: '451–455, 471, 491', typ: 'Triebwagen der Bellinzona–Mesocco-Bahn (historisch)', bahn: 'rhb', vorlaeufig: false,
    text: ['Die Bahn von Bellinzona nach Mesocco im Misox kam 1942 zur RhB. Sie brachte eigene Gleichstrom-Triebwagen mit.', 'Der BDe 4/4 491 von 1958 steht heute als Museumsfahrzeug in Bergün.'],
    kennzahlen: [['1907', 'Eröffnung Bellinzona–Mesocco'], ['5', 'Triebwagen 451–455'], ['1958', 'BDe 4/4 491'], ['1942', 'zur RhB']],
    daten: { 'Bauart': 'Elektrische Triebwagen', 'Hersteller': 'Ringhoffer, MFO (451–455, 471); SWS, BBC (491)', 'Betreiber': 'Bellinzona–Mesocco-Bahn (BM), ab 1942 RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'ABDe 4/4 451–455 (ex BM 1–5), Fe 4/4 471 (ex BM Ke 4/4 501), BDe 4/4 491', 'Erhalten': '491 (Bergün)', 'In Betrieb seit': '1907' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Nach der Lokstatistik Pospichal. Eine RhB-Serie 491–492 ist in den Registern nicht belegt.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Misoxer Bahn hatte drei Arten von Triebwagen:'],
        tabelle: { kopf: ['Fahrzeug', 'Herkunft', 'Baujahr'], zeilen: [
          ['BCe/ABDe 4/4 451–455', 'BM 1–5, Ringhoffer und MFO', '1907 und 1909'], ['Ke/Fe 4/4 471', 'BM Ke 4/4 501, Ringhoffer und MFO', '1907'], ['BDe 4/4 491', 'SWS und BBC', '1958']] } },
      { titel: 'Einsatz und Technik', p: ['Die 451–455 führten Personen- und Gepäckverkehr, die 471 Güter und Gepäck. Der 491 kam 1958 als jüngerer Triebwagen dazu.', 'Fotos von 1966 zeigen die 452 und den 491 in Mesocco.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Personenabteile und Gepäckraum (ABDe)', 'Für die Gleichstrom-Fahrleitung der Misoxer Bahn', 'Die 471 als Güter- und Gepäcktriebwagen'] }
    ],
    quellen: ['Lokstatistik Pospichal – Misox, Arosa und Stammnetz-Triebwagen', 'Haribu – Register ausrangierte Triebfahrzeuge', RHB_Q],
    art: { typ: 'triebzug', nase: 'kurz', farbe: RHB_GRUEN, akzent: '#E8DCC8', tuer: '#2A4A33', panto: true },
    bilder: [
      { src: 'bilder/rhb-misox-c1.jpg', titel: 'ABDe 4/4 452 in Mesocco (1966)', foto: 'Hans-Peter Bärtschi', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:ETH-BIB_SIK_01-000825_ABDe_4-4_452_Mesocco_1966.jpg' },
      { src: 'bilder/rhb-misox-c2.jpg', titel: 'BDe 4/4 491 in Mesocco (1966)', foto: 'Hans-Peter Bärtschi', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:ETH-BIB_SIK_01-000829_FR_BDe_4-4_491_Mesocco_1966.jpg' }
    ] },
  { id: 'rhb-arosa', kat: 'historisch', name: 'Arosa-Triebwagen', beiname: '481–488', typ: 'Triebwagen der Chur–Arosa-Bahn (historisch)', bahn: 'rhb', vorlaeufig: false,
    text: ['Die Chur–Arosa-Bahn fuhr ab 1914 mit eigenen Gleichstrom-Triebwagen. Nach der Übernahme 1942 hiessen sie RhB 481–486.', 'Ab 1957 vergab die RhB diese Nummern neu an moderne ABDe 4/4. Bis 1997 fuhr die Arosalinie mit Gleichstrom.'],
    kennzahlen: [['1914', 'Eröffnung Chur–Arosa'], ['6', 'ChA-Triebwagen 1–6'], ['1957', 'neue ABDe 4/4 481–486'], ['1997', 'Wechsel auf Wechselstrom']],
    daten: { 'Bauart': 'Elektrische Triebwagen', 'Hersteller': 'SWS, BBC (ABDe 4/4 von 1957/58)', 'Betreiber': 'Chur–Arosa-Bahn (ChA), ab 1942 RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '2400 V Gleichstrom (bis 1997)', 'Fahrzeugnummern': 'ChA 1–6 → RhB 481–486 (alte 486 → 487); neue ABDe 4/4 481–486; ABe 4/4 487–488', 'Erhalten': '484 und 486 bei La Mure (ausser Betrieb)', 'In Betrieb seit': '1914' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Die Nummern 481–486 wurden zweimal vergeben. Baujahre von 1914 und 1957 dürfen darum nicht demselben Fahrzeug zugeordnet werden.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Es gab zwei Generationen mit denselben Nummern:'],
        tabelle: { kopf: ['Generation', 'Nummern', 'Baujahr'], zeilen: [
          ['ChA-Triebwagen', 'ChA 1–6 → RhB 481–486, alte 486 → 487', '1914, später 5 und 6'], ['ABDe 4/4', '481–486 (neu)', '1957/58, SWS und BBC'], ['ABe 4/4', '487, 488 (neu)', 'später; danach an die CJ']] } },
      { titel: 'Einsatz und Technik', p: ['Die Arosalinie wurde 1997 von 2400 V Gleichstrom auf 11 kV Wechselstrom umgestellt. Damit endete der Einsatz der Gleichstrom-Triebwagen.', 'Die ehemaligen 484 und 486 stehen laut Register bei La Mure in Frankreich, ausser Betrieb.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Personenabteile und Gepäckraum (ABDe)', 'Für 2400 V Gleichstrom', 'Zwei Drehgestelle'] }
    ],
    quellen: ['Lokstatistik Pospichal – Misox, Arosa und Stammnetz-Triebwagen', 'RhB – Geschichte der Rhätischen Bahn', 'Haribu – Register ausrangierte Triebfahrzeuge', RHB_Q],
    art: { typ: 'triebzug', nase: 'kurz', farbe: RHB_ROT, akzent: '#E8DCC8', tuer: '#8E1A1F', panto: true },
    bilder: [
      { src: 'bilder/rhb-arosa-c1.jpg', titel: 'ABDe 4/4 482 der Arosalinie (1980er-Jahre)', foto: 'trams aux fils', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_482_Arosa.jpg' },
      { src: 'bilder/rhb-arosa-c2.jpg', titel: 'Typenzeichnung des Triebwagens BCF4 der Chur–Arosa-Bahn', foto: 'Chur-Arosa-Bahn', lizenz: 'CC0', lizenzUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Historic_-_PL_166_00003_BCF4-ChA.tif' }
    ] },
  { id: 'rhb-dampfschneeschleuder', kat: 'historisch', name: 'Historische Schneeschleudern', beiname: 'Xrot d, Xrot e, Xrot m', typ: 'Dampf- und Elektro-Schneeschleudern (historisch)', bahn: 'rhb', vorlaeufig: false,
    text: ['Schon von 1910 bis 1913 hatten die Berninabahn und die RhB Dampfschneeschleudern. Die Xrot d 9213 war 2010 noch am Lago Bianco im Einsatz.', 'Weitere historische Schleudern stehen bei der Dampfbahn Furka-Bergstrecke und bei Blonay–Chamby.'],
    kennzahlen: [['1913', 'Stammnetz-Schleudern 9211, 9212'], ['1912', 'Bernina-Schleuder 1052'], ['64 t', 'Dienstgewicht 1052'], ['1958', 'Beilhack-Schleuder 9216']],
    daten: { 'Bauart': 'Dampf- und Elektro-Schneeschleudern', 'Hersteller': 'SLM (Dampfschleudern), Beilhack (9216)', 'Betreiber': 'RhB und Berninabahn', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'Xrot d 9211–9214, Xrot e 9215, Xrot m 9216, Xrot et 9218–9219', 'Erhalten': '9212 (DFB, als R 12), 9213 (RhB), 1052 / alte 9214 (Blonay–Chamby), 9216 (DFB)', 'In Betrieb seit': '1910' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Für die 9213 nennen die Quellen 1910 oder 1911. Das Datenblatt von Blonay–Chamby nennt im Kopf «1051», die Herkunft weist aber auf die 1052.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Nummer 9214 wurde zweimal vergeben: zuerst für eine Bernina-Dampfschleuder, später für eine neue Maschine von 2001.'],
        tabelle: { kopf: ['Maschine', 'Baujahr', 'Heute'], zeilen: [
          ['Xrot d 9211, 9212 (Stammnetz)', '1913, SLM', '9211 abgebrochen, 9212 bei der DFB'], ['Xrot d 9213 (ex Bernina R 1051)', '1910/11', 'RhB'],
          ['Xrot d 9214 (ex Bernina R 1052)', '1912, SLM 2299', 'Blonay–Chamby'], ['Xrot e 9215 «Kaffeemühle»', 'Umbau 1941 aus dem Güterwagen K 208 von 1908', '1983 abgebrochen'],
          ['Xrot m 9216', '1958, Beilhack', 'seit 2015 bei der DFB'], ['Xrot et 9218, 9219', '–', '–']] } },
      { titel: 'Einsatz und Technik', p: ['Die Stammnetz-Schleudern hatten keinen vollen Fahrantrieb und wurden geschoben. Die Bernina-Maschinen haben eigene Triebwerke; beim Räumen braucht aber das Schleuderrad den Dampf, darum schiebt meist eine Lok mit.', 'Die 9215 war zuerst Güterwagen, dann Küchenwagen und ab 1941 elektrische Schneeschleuder. Die Beilhack-Schleuder 9216 räumt heute bei der DFB den Bahnhof Realp.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Schleuderrad mit Dampfantrieb (Xrot d)', '1052: 14 bar Kesseldruck, 7 m³ Wasser und 4 t Kohle', 'Xrot et 9218: fernsteuert 1968 den schiebenden Triebwagen'] }
    ],
    quellen: ['Historische Berninabahn – R 1051/1052 und Xrot e 9215', 'Museumsbahn Blonay–Chamby – G 2×3/3 1052', 'Dampfbahn Furka-Bergstrecke – Xrotm 9216 und R 12', RHB_Q],
    art: { typ: 'spezial', var: 'schnee', farbe: RHB_DUNKEL, akzent: RHB_ROT },
    bilder: [
      { src: 'bilder/rhb-dampfschneeschleuder-c1.jpg', titel: 'Dampfschneeschleuder Xrot d 9213 am Lago Bianco (2010)', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Xrotd_9213_am_Lago_Bianco_3.jpg' },
      { src: 'bilder/rhb-dampfschneeschleuder-c2.jpg', titel: 'Frühere RhB-Schneeschleuder R 12 bei der DFB zwischen Realp und Tiefenbach', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:DFB_-_RhB_R_12_Realp_-_Tiefenbach.jpg' },
      { src: 'bilder/rhb-dampfschneeschleuder-c3.jpg', titel: 'Beilhack-Schneeschleuder 9216 bei der DFB (2020)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20200719E628_9216.JPG' }
    ] },
  { id: 'rhb-hist-wagen', kat: 'historisch', name: 'Historische Personenwagen', beiname: 'RhB', typ: 'Erhaltene Personen-, Post- und Gesellschaftswagen', bahn: 'rhb', vorlaeufig: false,
    text: ['Die RhB erhält eine Reihe historischer Wagen für Sonderzüge: Personenwagen aus der Gründerzeit, Gesellschafts- und Postwagen.', 'Weitere ehemalige RhB-Wagen fahren bei der Museumsbahn Blonay–Chamby.'],
    kennzahlen: [['6', 'Wagen WN 9801–9806'], ['1903', 'AB 121 (Blonay–Chamby)'], ['1939', 'Mitteleinstiegswagen'], ['1889', 'Gründerzeit der LD']],
    daten: { 'Bauart': 'Historische Personen-, Post- und Gesellschaftswagen', 'Betreiber': 'Landquart–Davos-Bahn und RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'WN 9801–9806; A 1102, B 2060; A 1251, B 2302; B 2245–2247, D 4205', 'Erhalten': 'RhB; AB 121 und As 2 bei Blonay–Chamby' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Erhalten'],
    specNote: 'Die Register nennen für mehrere Wagen unterschiedliche Baujahre; diese sind darum nicht angegeben.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die WN-Nummern sind Verwaltungsnummern zusätzlich zur restaurierten alten Anschrift.'],
        tabelle: { kopf: ['Wagen', 'Funktion'], zeilen: [
          ['LD C 32 / WN 9801', 'Personenwagen der Gründerzeit, «Il Samedrin»'], ['B 2138 / WN 9802', 'Gesellschaftswagen «Filisurer Stübli»'], ['Z° 26 / WN 9803', 'Postwagen'],
          ['BC 110 / WN 9804', 'Misoxer Personenwagen «Ul Mesolcines»'], ['F 4 / WN 9805', 'Gepäck- und Barwagen'], ['C 66 / WN 9806', 'Personenwagen'],
          ['A 1251, B 2302', 'Mitteleinstiegswagen von 1939'], ['B 2245–2247, D 4205', 'Drehgestellwagen und Gepäckwagen']] } },
      { titel: 'Einsatz und Technik', p: ['Die Wagen fahren in historischen Zügen der RhB, oft hinter historischen Loks. Bei restaurierten Wagen können Polster, Farben und Einteilung vom früheren Zustand abweichen.', 'Bei Blonay–Chamby steht der AB 121, ein SIG-Wagen von 1903 mit zwölf Plätzen der 1. und zwölf der 2. Klasse. Der As 2 von 1903 war Salonwagen, ab 1948 Aussichtswagen 2191 und ist seit 1999 ein Salon-Barwagen.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['AB 121: Seitengang, WC und elektrische Beleuchtung', 'Hand- und Vakuumbremse bei den alten Wagen', 'Bar im F 4 und im As 2'] }
    ],
    quellen: ['RhB/historic RhB – Verzeichnis historisches Rollmaterial (Stand 1. April 2022)', 'Haribu – Register historische Wagen (Stand 20.03.2026)', 'Museumsbahn Blonay–Chamby – AB 121 und As 2', RHB_Q],
    art: { typ: 'wagen', zweiachs: true, farbe: RHB_GRUEN, akzent: '#E8DCC8' },
    bilder: [
      { src: 'bilder/rhb-hist-wagen-c1.jpg', titel: 'Historischer Wagen BC 110 «Ul Mesolcines» in Samedan (2015)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FR_BC_110_Samedan_030915.jpg' },
      { src: 'bilder/rhb-hist-wagen-c2.jpg', titel: 'Historische Wagen B 2060 und A 1102 (2024)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20241002E058_RhB_2060-1102.jpg' },
      { src: 'bilder/rhb-hist-wagen-c3.jpg', titel: 'AB 121 bei der Museumsbahn Blonay–Chamby (2016)', foto: 'Transfer 2015', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:Blonay%E2%80%93Chamby_Rh%C3%A4tische_Bahn_AB2_121_2016.jpg' }
    ] },
  { id: 'rhb-hist-gueterwagen', kat: 'historisch', name: 'Historische Güterwagen', beiname: 'RhB', typ: 'Erhaltene Güterwagen der RhB', bahn: 'rhb', vorlaeufig: false,
    text: ['Einige historische Güterwagen zeigen, wie die RhB früher Waren transportierte: gedeckte Wagen, offene Hoch- und Niederbordwagen, Langholzwagen und ein Wasserwagen.', 'Sie tragen heute zusätzlich eine WN-Nummer.'],
    kennzahlen: [['7', 'erhaltene Wagen und Wagenpaare'], ['9851', 'erste WN-Nummer'], ['N', 'Langholz-Wagenpaar'], ['K', 'gedeckte Wagen']],
    daten: { 'Bauart': 'Historische Güterwagen', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'N 1520 / N 1513, K1 5615, M 7070, K 5563, L3 6603, K 5342, Uh 8101 (WN 9851–9862)' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern'],
    specNote: 'Nach dem WN-Register von Haribu (Stand März 2026). Die ursprünglichen Güterwagenfamilien waren viel grösser; nicht erhaltene Wagen fehlen hier.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Diese Wagen sind erhalten:'],
        tabelle: { kopf: ['Wagen', 'WN-Nummer', 'Art'], zeilen: [
          ['N 1520 / N 1513', 'WN 9851', 'Langholz-Wagenpaar'], ['K1 5615', 'WN 9852', 'gedeckter Güterwagen'], ['M 7070', 'WN 9853', 'offener Niederbordwagen, früher P 10059'],
          ['K 5563', 'WN 9854', 'gedeckter Güterwagen'], ['L3 6603', 'WN 9855', 'offener Hochbordwagen'], ['K 5342', 'WN 9856', 'gedeckter Güterwagen, früher Xk 9069'], ['Uh 8101', 'WN 9862', 'Wasser- und Kesselwagen']] } },
      { titel: 'Einsatz und Technik', p: ['Die WN-Nummer ist eine Verwaltungsnummer; die restaurierte alte Anschrift bleibt am Wagen. Das historische Nummernregister kennt viel mehr Gruppen, etwa K, L, M, R, S und U.', 'Für eine vollständige Liste aller Güterwagen seit 1889 fehlen öffentliche Unterlagen.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Gedeckte Wagen (K)', 'Offene Wagen (L und M)', 'Langholz-Wagenpaar (N)', 'Wasserwagen (Uh)'] }
    ],
    quellen: ['Haribu – Register historische Wagen (Stand 20.03.2026)', 'Lokstatistik Pospichal – Übersicht der historischen Wagenfamilien', RHB_Q],
    art: { typ: 'wagen', geschlossen: true, zweiachs: true, farbe: RHB_BRAUN, akzent: RHB_DUNKEL },
    bilder: [] },
  { id: 'rhb-ehem-diesel', kat: 'historisch', name: 'Ehemalige Diesel-Triebfahrzeuge', beiname: 'Gm 3/3, Gm 4/4, BFm', typ: 'Frühere Dieselloks und ein Dieseltriebwagen der RhB (historisch)', bahn: 'rhb', vorlaeufig: false,
    text: ['Die Gm 3/3 231–233 von 1975/76 rangierten jahrzehntelang bei der RhB. Heute stehen sie bei der Dampfbahn Furka-Bergstrecke.', 'Die Gm 4/4 241 ging 2023 an die Brohltalbahn in Deutschland.'],
    kennzahlen: [['3', 'Gm 3/3 231–233'], ['1975', 'Gm 3/3 gebaut'], ['2023', '241 an die Brohltalbahn'], ['1947', 'BFm 150 von der FO']],
    daten: { 'Bauart': 'Diesellokomotiven und Dieseltriebwagen', 'Betreiber': 'RhB', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Diesel', 'Fahrzeugnummern': 'Gm 3/3 231–233; Gm 4/4 241; BFm 2/2 150 (ex FO 22)', 'Erhalten': 'Gm 3/3 bei der DFB; 241 bei der Brohltalbahn (D4)' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Antrieb', 'Fahrzeugnummern', 'Erhalten'],
    specNote: 'Für die Gm 4/4 241 nennen die Register 1958 oder 1959 als Baujahr. 1947 ist beim BFm 150 das Übernahmejahr, nicht das Baujahr.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Gm 3/3 231–233 entstanden 1975/76. Die Gm 4/4 241 stammt aus den späten 1950er-Jahren. Der Dieseltriebwagen BFm 2/2 150 kam 1947 von der Furka-Oberalp-Bahn, wo er die Nummer 22 trug.'] },
      { titel: 'Einsatz und Technik', p: ['Die Gm 3/3 rangierten in Bahnhöfen wie Landquart und Chur. Heute stehen sie bei der Dampfbahn Furka-Bergstrecke, in unterschiedlichem Zustand.', 'Die Gm 4/4 241 ist seit 2023 bei der Brohltalbahn als D4 eingereiht.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Dieselantrieb', 'Drei (Gm 3/3) oder vier (Gm 4/4) angetriebene Achsen', 'Gepäckraum im BFm (Buchstabe F)'] }
    ],
    quellen: ['Haribu – Register ausrangierte Triebfahrzeuge (Stand 22.06.2026)', 'Lokstatistik Pospichal – RhB-Lokomotiven und Bernina-Triebwagen', RHB_Q],
    art: { typ: 'haube', farbe: ORA, akzent: RHB_GRAU },
    bilder: [
      { src: 'bilder/rhb-ehem-diesel-c1.jpg', titel: 'Gm 3/3 233 in Landquart', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Gm_3-3_Nr._233_in_Landquart.jpg' },
      { src: 'bilder/rhb-ehem-diesel-c2.jpg', titel: 'Gm 4/4 241 in Untervaz (2019)', foto: 'Maxim Philipp', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RhB_Gm_4-4_241_(ex._Brohltalbahn_D4).jpg' }
    ] },
  { id: 'rhb-draisinen', kat: 'historisch', name: 'Draisinen', beiname: 'Dh 1/2 und Dm 1/2', typ: 'Hand- und Motordraisine der RhB (historisch)', bahn: 'rhb', vorlaeufig: false,
    text: ['Bei der Museumsbahn Blonay–Chamby stehen zwei kleine ehemalige Draisinen der RhB: eine Handdraisine aus der Zeit um 1900 und eine schwedische Motordraisine aus den 1930er-Jahren.', 'Beide kamen am 22. März 1968 zur Museumsbahn.'],
    kennzahlen: [['2', 'Draisinen'], ['1900', 'Handdraisine (um)'], ['1930er', 'Motordraisine'], ['1968', 'zu Blonay–Chamby']],
    daten: { 'Bauart': 'Hand- und Motordraisine', 'Betreiber': 'RhB, heute Museumsbahn Blonay–Chamby', 'Spurweite': 'Meterspur, 1000 mm', 'Antrieb': 'Muskelkraft (Dh), Zweitakt-Benzinmotor (Dm)', 'Fahrzeugnummern': 'Dh 1/2, Dm 1/2', 'Erhalten': 'Museumsbahn Blonay–Chamby (seit 1968)' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Antrieb', 'Fahrzeugnummern', 'Erhalten'],
    specNote: 'Leistung und Geschwindigkeit nennt das Museum nicht.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Handdraisine Dh 1/2 stammt etwa aus der Zeit um 1900, die Motordraisine Dm 1/2 aus Schweden aus den 1930er-Jahren. Beide kamen am 22. März 1968 zu Blonay–Chamby.'] },
      { titel: 'Einsatz und Technik', p: ['Die Handdraisine wird über Hebel und Getriebe mit Muskelkraft bewegt. Das Museum vermutet, dass sie vor allem bergab und auf flachen Abschnitten fuhr.', 'Die Motordraisine hat einen Zweitakt-Benzinmotor sowie Hand- und Fussbremse; 1995 wurde sie aufgearbeitet.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Hebelantrieb (Dh)', 'Zweitakt-Benzinmotor (Dm)', 'Hand- und Fussbremse (Dm)'] }
    ],
    quellen: ['Museumsbahn Blonay–Chamby – Dh 1/2 und Dm 1/2', RHB_Q],
    art: { typ: 'rangier', klein: true, farbe: '#9AA1A8', panto: false },
    bilder: [
      { src: 'bilder/rhb-draisinen-c1.jpg', titel: 'Motordraisine Dm 1/2 bei Blonay–Chamby (2011)', foto: 'MCBBC', lizenz: 'Gemeinfrei', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:Blonay-Chamby_Rh%C3%A4tische_Bahn_-_Dm_12_-_01.jpg' }
    ] }
);
