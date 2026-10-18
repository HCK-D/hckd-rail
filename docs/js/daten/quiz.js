/* HCKD RAIL – Quizfragen. Neue Fragen hier eintragen. */
'use strict';

/* =====================================================================
   QUIZ
   f     Frage
   a     Antworten: die ERSTE ist richtig (die Reihenfolge wird im Quiz gemischt)
   bild  Foto zur Frage (optional)
   zug   id des Fahrzeugs; in der Auswertung erscheint ein Link dazu (optional)
   info  kurze Erklärung, erscheint erst in der Auswertung (optional)
   ===================================================================== */
const QUIZ = {
  einfach: [
    { f: 'Was ist das für ein Zug?', bild: 'bilder/re460-1.jpg', zug: 're-460', a: ['Re 460', 'Re 620', 'RBDe 560 «Domino»', 'RABe 501 «Giruno»'], info: 'Die Re 460 zieht hier Einheitswagen.' },
    { f: 'Was ist das für ein Zug?', bild: 'bilder/domino-1.jpg', zug: 'rbde-560', a: ['RBDe 560 «Domino»', 'RABDe 500 «ICN»', 'Re 460', 'RABe 502 «FV-Dosto»'] },
    { f: 'Was ist das für ein Zug?', bild: 'bilder/fvdosto-1.jpg', zug: 'rabe-502', a: ['RABe 502 «FV-Dosto»', 'RABDe 500 «ICN»', 'RBDe 560 «Domino»', 'Re 620'] },
    { f: 'Was ist das für ein Zug?', bild: 'bilder/icn-2.jpg', zug: 'rabde-500', a: ['RABDe 500 «ICN»', 'RABe 502 «FV-Dosto»', 'Re 460', 'RBDe 560 «Domino»'] },
    { f: 'Was ist das für eine Lok?', bild: 'bilder/re620-2.jpg', zug: 're-620', a: ['Re 620', 'Re 460', 'RABDe 500 «ICN»', 'RBDe 560 «Domino»'], info: 'Die Re 620 hat sechs Achsen und fährt heute bei SBB Cargo.' },
    { f: 'Welche Wagen zieht die Re 460 auf diesem Bild?', bild: 'bilder/re460-2.jpg', zug: 're-460', a: ['IC2000-Doppelstockwagen', 'Güterwagen', 'Kesselwagen', 'Postwagen'] },
    { f: 'Wofür steht die Abkürzung SBB?', a: ['Schweizerische Bundesbahnen', 'Schweizer Bahnbetriebe', 'Schweizerische Bergbahnen', 'Staatliche Bahn Bern'] },
    { f: 'Wie breit ist die Normalspur?', a: ['1435 mm', '1000 mm', '1520 mm', '1668 mm'], info: 'Gemessen wird der Abstand zwischen den Innenkanten der Schienen.' },
    { f: 'Wie breit ist die Meterspur?', a: ['1000 mm', '1435 mm', '750 mm', '1200 mm'] },
    { f: 'Welche Bahn fährt hauptsächlich auf Meterspur?', a: ['Rhätische Bahn (RhB)', 'SBB Cargo', 'BLS', 'SBB Fernverkehr'] },
    { f: 'Welcher dieser Züge ist ein Doppelstockzug?', zug: 'rabe-502', a: ['RABe 502 «FV-Dosto»', 'RABDe 500 «ICN»', 'RABe 501 «Giruno»', 'RBDe 560 «Domino»'], info: '«Dosto» ist die Abkürzung für Doppelstock.' },
    { f: 'Wie heisst der Hochgeschwindigkeitszug RABe 501?', zug: 'rabe-501', a: ['Giruno', 'Astoro', 'Domino', 'FLIRT'] },
    { f: 'Welche Lok wird «Lok 2000» genannt?', zug: 're-460', a: ['Re 460', 'Re 420', 'Re 620', 'Ee 922'], info: 'Sie wurde für das Projekt «Bahn 2000» entwickelt.' },
    { f: 'Wofür ist SBB Cargo zuständig?', a: ['Güterverkehr', 'Personenverkehr', 'Bau neuer Bahnhöfe', 'Busverkehr'] },
    { f: 'Wie schnell darf der Giruno höchstens fahren?', zug: 'rabe-501', a: ['250 km/h', '160 km/h', '200 km/h', '320 km/h'] },
    { f: 'Was macht eine Rangierlok?', a: ['Sie stellt im Bahnhof Züge zusammen und verschiebt Wagen', 'Sie zieht Fernverkehrszüge mit 200 km/h', 'Sie räumt Schnee von den Gleisen', 'Sie misst die Fahrleitung'] },
    { f: 'Welcher Eisenbahntunnel ist der längste der Welt?', a: ['Gotthard-Basistunnel', 'Lötschberg-Basistunnel', 'Simplontunnel', 'Furka-Basistunnel'], info: 'Der Gotthard-Basistunnel ist rund 57 km lang.' },
    { f: 'Wozu dient der Stromabnehmer auf dem Dach einer Elektrolok?', a: ['Er nimmt den Strom aus der Fahrleitung ab', 'Er misst die Geschwindigkeit', 'Er hält den Zug bei Wind stabil', 'Er reinigt die Fahrleitung'] },
    { f: 'Was bedeutet ein rotes Licht am Hauptsignal?', a: ['Halt', 'Freie Fahrt', 'Langsam fahren', 'Achtung Baustelle'] },
    { f: 'Was bedeutet «IC» auf der Abfahrtstafel?', a: ['InterCity', 'InterCargo', 'Innerorts-Zug', 'Internationaler Container'] },
    { f: 'Welche Schweizer Firma baut Giruno, KISS und FLIRT?', a: ['Stadler', 'Siemens', 'Alstom', 'Bombardier'] },
    { f: 'Was macht eine Schneeschleuder?', zug: 'xrotm', a: ['Sie fräst den Schnee und wirft ihn seitlich weg', 'Sie streut Salz auf die Schienen', 'Sie heizt die Weichen', 'Sie macht Kunstschnee für Skigebiete'] },
    { f: 'Wann rückt der Lösch- und Rettungszug aus?', zug: 'lrz-18', a: ['Bei Bränden und Unfällen, vor allem in Tunneln', 'Bei starkem Schneefall', 'Wenn ein Zug Verspätung hat', 'Für Sonderfahrten mit Touristen'] },
    { f: 'Welche Farben hat das SBB-Logo?', a: ['Rot und Weiss', 'Blau und Gelb', 'Grün und Weiss', 'Schwarz und Gelb'] },
    { f: 'Woher bekommen die meisten Schweizer Züge ihre Energie?', a: ['Aus der Fahrleitung (Strom)', 'Aus Dieselmotoren', 'Aus Batterien, die im Bahnhof geladen werden', 'Aus Dampfkesseln'] },
    { f: 'Wie lautet der Spitzname des RABe 523?', zug: 'rabe-523', a: ['FLIRT', 'KISS', 'DTZ', 'Domino'] },
    { f: 'Welcher dieser Züge hat ein Restaurant an Bord?', zug: 'rabe-501', a: ['RABe 501 «Giruno»', 'RBDe 560 «Domino»', 'RABe 514 «DTZ»', 'Tm 232'] }
  ],

  normal: [
    { f: 'Was ist das für eine Lok?', bild: 'bilder/re420-2.jpg', zug: 're-420', a: ['Re 420', 'Re 620', 'Re 460', 'Re 474'], info: 'Die Re 420 hiess früher Re 4/4 II.' },
    { f: 'Welcher Zug fährt die S30 zwischen Freiburg und Yverdon-les-Bains?', zug: 'rbde-560', a: ['RBDe 560 «Domino»', 'RABe 501 «Giruno»', 'RABe 502 «FV-Dosto»', 'RABDe 500 «ICN»'], info: 'Die S30 ist eine S-Bahn-Linie der SBB. Welcher Zug genau fährt, kann sich mit dem Fahrplan ändern.' },
    { f: 'Wie nennt man eine Re 620 und eine Re 420 zusammen vor einem Zug?', bild: 'bilder/re420-1.jpg', zug: 're-620', a: ['«Re 10/10»', '«Doppel-Lok 2000»', '«Re 12/12»', '«Gotthard-Gespann»'], info: '6 + 4 = 10 angetriebene Achsen.' },
    { f: 'Wie viele Giruno hat die SBB?', zug: 'rabe-501', a: ['41', '29', '62', '119'], info: 'Bestellt wurden zuerst 29 Züge, nach Folgeaufträgen wurden es 41.' },
    { f: 'Wie viele Re 460 bekam die SBB?', zug: 're-460', a: ['119', '41', '89', '276'] },
    { f: 'Welches Designstudio gestaltete die Front der Re 460?', zug: 're-460', a: ['Pininfarina', 'Porsche Design', 'Bertone', 'Giugiaro'] },
    { f: 'Was bedeutet das kleine «e» in «Re 460»?', a: ['elektrisch', 'einfach', 'Express', 'eigenständig'], info: 'Ein «m» steht dagegen für einen Verbrennungsmotor, z. B. Am 843.' },
    { f: 'Was bedeuten «A» und «B» in «RABe 501»?', a: ['Plätze in der 1. und 2. Klasse', 'Achsen vorne und hinten', 'Anfang und Ende des Zuges', 'Abteile für das Bahnpersonal'] },
    { f: 'Welche Ausführung des FV-Dosto hat ein Restaurant?', zug: 'rabe-502', a: ['IC200', 'IR200', 'IR100', 'alle drei'] },
    { f: 'In welchem SBB-Werk wurden alle Re 460 modernisiert?', zug: 're-460', a: ['Yverdon-les-Bains', 'Olten', 'Bellinzona', 'Biel'], info: 'Das Refit-Programm lief von 2017 bis 2022.' },
    { f: 'Was ist das Besondere am ICN?', zug: 'rabde-500', a: ['Er neigt sich in Kurven und kann sie schneller durchfahren', 'Er fährt mit Diesel', 'Er ist ein Doppelstockzug', 'Er fährt auf Meterspur'] },
    { f: 'Seit welchem Jahr fährt der Giruno bei der SBB?', zug: 'rabe-501', a: ['2019', '2004', '2012', '2025'] },
    { f: 'Mit welchem Strom fährt das Normalspurnetz der SBB?', a: ['15 kV, 16,7 Hz Wechselstrom', '25 kV, 50 Hz Wechselstrom', '3 kV Gleichstrom', '230 V wie aus der Steckdose'] },
    { f: 'Durch welchen Tunnel fährt der Giruno von Zürich nach Mailand?', zug: 'rabe-501', a: ['Gotthard-Basistunnel', 'Lötschberg-Basistunnel', 'Simplontunnel', 'Vereinatunnel'] },
    { f: 'Welcher Zug soll bei der SBB ab 2028 den Domino ablösen?', zug: 'rbde-560', a: ['FLIRT Evo', 'Giruno', 'KISS', 'ICN'] },
    { f: 'Wer baute den FV-Dosto?', zug: 'rabe-502', a: ['Bombardier (heute Alstom)', 'Stadler', 'Siemens', 'SLM Winterthur'] },
    { f: 'Welche Lok fährt mit Strom und hat für Baustellen zusätzlich zwei Dieselgeneratoren?', zug: 'aem-940', a: ['Aem 940', 'Re 460', 'Ee 922', 'Re 482'] },
    { f: 'Wie viele Sitzplätze hat ein Giruno?', zug: 'rabe-501', a: ['405', '172', '682', '1000'], info: 'Dazu kommen 17 Plätze im Restaurant.' },
    { f: 'Welcher Zug ist das?', bild: 'bilder/slides/slide-04.jpg', a: ['RABe 503 «Astoro»', 'RABe 501 «Giruno»', 'RABDe 500 «ICN»', 'RBDe 560 «Domino»'] },
    { f: 'Diese Lok ist eine Re 465. Welche Bahn fährt sie?', bild: 'bilder/slides/slide-08.jpg', a: ['BLS', 'SBB Cargo', 'Rhätische Bahn', 'Südostbahn'], info: 'Die Re 465 ist die stärkere Schwester der Re 460.' },
    { f: 'Wie schnell fährt die Re 460 im Betrieb höchstens?', zug: 're-460', a: ['200 km/h', '140 km/h', '160 km/h', '250 km/h'], info: 'Gebaut ist sie für 230 km/h.' },
    { f: 'Was macht der rote Sekundenzeiger der SBB-Bahnhofsuhr oben bei der 12?', a: ['Er bleibt kurz stehen, bis der Minutenzeiger springt', 'Er läuft rückwärts', 'Er springt auf die 6', 'Er wird grün'] },
    { f: 'Welcher Doppelstockzug der S-Bahn Zürich wurde von Siemens gebaut?', zug: 'rabe-514', a: ['RABe 514 «DTZ»', 'RABe 511 «KISS»', 'RABe 523 «FLIRT»', 'RBDe 560 «Domino»'] },
    { f: 'Aus wie vielen Wagen besteht ein Giruno?', zug: 'rabe-501', a: ['11', '4', '7', '16'] },
    { f: 'In Tirano (Italien) endet eine bekannte Strecke der Rhätischen Bahn. Welche?', bild: 'bilder/slides/slide-10.jpg', a: ['Berninalinie', 'Albulalinie', 'Gotthardlinie', 'Furka-Oberalp-Linie'] },
    { f: 'Was bedeutet «6/6» in «Re 6/6»?', zug: 're-620', a: ['6 Achsen, davon 6 angetrieben', '6 Wagen, davon 6 mit Motor', '6. Lok der 6. Serie', '6000 kW Leistung'] },
    { f: 'Wie schnell fahren Züge auf der Neubaustrecke Mattstetten–Rothrist höchstens?', a: ['200 km/h', '160 km/h', '250 km/h', '300 km/h'] }
  ],

  schwierig: [
    { f: 'Wie viele Re 4/4 II (Re 420) beschaffte die SBB?', zug: 're-420', a: ['276', '119', '89', '41'], info: 'Zahl nach SBB Historic.' },
    { f: 'Wer baute den mechanischen Teil der Re 420?', zug: 're-420', a: ['SLM Winterthur', 'Stadler Bussnang', 'Siemens', 'Bombardier'], info: 'Die Elektrik kam von BBC, MFO und SAAS.' },
    { f: 'Wie viele Re 6/6 (Re 620) wurden gebaut?', zug: 're-620', a: ['89', '276', '119', '63'], info: '4 Prototypen und 85 Serienloks.' },
    { f: 'Was unterschied die ersten beiden Re 6/6-Prototypen von allen anderen?', zug: 're-620', a: ['Sie hatten einen zweiteiligen Lokkasten', 'Sie hatten keinen Stromabnehmer', 'Sie fuhren mit Diesel', 'Sie waren blau lackiert'] },
    { f: 'Welche Achsfolge hat die Re 620?', zug: 're-620', a: ['Bo′Bo′Bo′', 'Bo′Bo′', 'Co′Co′', '1′Do1′'] },
    { f: 'Wie gross ist die Dauerleistung der Re 460?', zug: 're-460', a: ['6100 kW', '1700 kW', '4650 kW', '7500 kW'] },
    { f: 'Wie lang ist ein Giruno über Kupplung?', zug: 'rabe-501', a: ['202 m', '75 m', '101 m', '400 m'] },
    { f: 'Wie viele Sitzplätze hat der FV-Dosto in der Ausführung IR200?', zug: 'rabe-502', a: ['682', '606', '330', '405'] },
    { f: 'Welche Motoren treiben den FV-Dosto an?', zug: 'rabe-502', a: ['Permanentmagnet-Synchronmotoren', 'Dieselmotoren', 'Gleichstrom-Reihenschlussmotoren', 'Linearmotoren'] },
    { f: 'Wie heisst die Variante der Lok 2000 in Finnland?', zug: 're-460', a: ['Sr2', 'El 18', 'Re 465', 'Vectron'], info: 'El 18 ist die Variante für Norwegen.' },
    { f: 'Wer gestaltete die SBB-Bahnhofsuhr?', a: ['Hans Hilfiker', 'Le Corbusier', 'Pininfarina', 'Adrian Frutiger'] },
    { f: 'Wie viele Re 420 wurden 2011–2016 als «LION» für die S-Bahn Zürich modernisiert?', zug: 're-420', a: ['30', '6', '119', '85'] },
    { f: 'Auf welcher Strecke fährt der Domino von RegionAlps?', zug: 'rbde-560', a: ['St-Gingolph–Brig', 'Fribourg–Yverdon', 'Chur–St. Moritz', 'Basel–Olten'] },
    { f: 'Wie viele FLIRT Evo beschafft die SBB?', a: ['198', '41', '86', '62'] },
    { f: 'Welcher Loktyp steckt hinter der Re 482?', zug: 're-482', a: ['Bombardier TRAXX F140 AC', 'Siemens Vectron', 'Alstom Prima H4', 'Vossloh G 1700'] },
    { f: 'Wie gross ist die Anfahrzugkraft der Re 620?', zug: 're-620', a: ['398 kN', '182 kN', '255 kN', '300 kN'] },
    { f: 'Welche Fahrzeugnummern tragen die ICN?', zug: 'rabde-500', a: ['500 000–500 043', '11601–11689', '460 000–460 118', '501 001–501 041'] },
    { f: 'In welchem dieser Länder fahren viele Züge mit 3 kV Gleichstrom?', a: ['Italien', 'Deutschland', 'Österreich', 'Schweiz'], info: 'Darum brauchen Loks für Italien wie die Re 484 mehrere Stromsysteme.' },
    { f: 'In welchem Jahr wurde der Gotthard-Basistunnel eröffnet?', a: ['2016', '2007', '1882', '2020'], info: '2007 ging der Lötschberg-Basistunnel in Betrieb, 1882 der alte Gotthardtunnel.' },
    { f: 'In welchem Jahr ging der Lötschberg-Basistunnel in Betrieb?', a: ['2007', '2016', '1913', '1999'] },
    { f: 'Seit welchem Jahr gibt es die SBB?', a: ['1902', '1847', '1950', '1882'] },
    { f: 'Wann trat die erste Etappe von «Bahn 2000» mit dem grossen Fahrplanwechsel in Kraft?', a: ['Dezember 2004', 'Dezember 1992', 'Juni 2016', 'Dezember 2010'] },
    { f: 'Wie hiess die erste Eisenbahn, die 1847 ganz in der Schweiz fuhr?', a: ['Spanisch-Brötli-Bahn (Zürich–Baden)', 'Gotthardbahn', 'Rigibahn', 'Centralbahn'] },
    { f: 'Welche Spurweite hat die finnische Variante der Lok 2000?', zug: 're-460', a: ['1524 mm', '1435 mm', '1000 mm', '1668 mm'] },
    { f: 'Wie viele Re 620 erhielten ab 2007 ETCS Level 2?', zug: 're-620', a: ['63', '89', '30', '119'] },
    { f: 'Die RhB-Strecken über Albula und Bernina gehören seit 2008 …', a: ['zum UNESCO-Welterbe', 'zu den Neubaustrecken von Bahn 2000', 'zu SBB Cargo', 'zum Netz der BLS'] }
  ]
};
