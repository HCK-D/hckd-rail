/* Français – véhicules de service */
uebDict({
  'Lösch- und Rettungszug': 'Train d’extinction et de sauvetage',
  'Normalspur, 1435 mm': 'voie normale, 1435 mm',
  'Windhoff / Dräger': 'Windhoff / Dräger',
  'Tanklöschwagen + Gerätefahrzeug + Rettungsfahrzeug': 'wagon-citerne d’extinction + véhicule de matériel + véhicule de sauvetage',
  'Kirow Leipzig': 'Kirow Leipzig',
  'Eisenbahndrehkran': 'grue ferroviaire pivotante',
  'nein': 'non',
  'aktiv': 'actif'
});

uebZug('lrz-18', {
  beiname: 'Train d’extinction et de sauvetage',
  typ: 'Train d’extinction et de sauvetage de la génération 2018',
  text: ['La génération TES 18 comprend six trains d’extinction et de sauvetage modernes et autonomes. Les CFF les ont commandés en deux lots de trois rames ; tous étaient livrés fin 2018.', 'Selon le site, la composition comprend un wagon-citerne d’extinction, un véhicule de matériel et un ou deux véhicules de sauvetage.'],
  kennzahlen: [['6', 'rames'], ['2018', 'livraison complète'], ['6 × 390 kW', 'traction de la version à quatre éléments'], ['100 km/h', 'vitesse maximale']],
  daten: { 'Hersteller': 'Windhoff / Dräger (installation d’extinction Vogt)', 'Ausführungen': 'à 3 ou 4 éléments', 'Länge': '83,22 m (quatre éléments)', 'Gewicht': 'env. 326 t (quatre éléments)', 'Leistung': '6 × 390 kW (quatre éléments)', 'Pumpenleistung': 'jusqu’à 6000 l/min à 10 bar', 'Rettungskapazität': 'jusqu’à 60 personnes par véhicule de sauvetage', 'Schleppleistung': 'jusqu’à 1600 t en tunnel', 'Autonomer Betrieb': 'env. 4–5 heures', 'Anzahl': '6 rames (2 lots de 3)' },
  specNote: 'Longueur, masse et puissance valent pour le TES 18 à quatre éléments ; les trains à trois éléments sont plus courts et plus légers.',
  abschnitte: [
    { titel: 'Acquisition en deux lots', p: ['Après une première commande de trois trains pour Genève, Melide et Brigue, les CFF ont levé en 2016 une option pour trois rames supplémentaires destinées à Zurich, Winterthour et Berne.', 'La génération compte ainsi six trains ; la livraison s’est achevée fin 2018.'] },
    { titel: 'Sauvetage en tunnel et lutte contre le feu', p: ['Un air respirable autonome alimente les cabines de conduite et les espaces de sauvetage. Chaque véhicule de sauvetage accueille jusqu’à environ 60 personnes dans son espace protégé ; le train peut remorquer jusqu’à 1600 tonnes en tunnel.', 'L’équipement d’extinction offre 45 000 litres d’eau et des pompes jusqu’à 6000 litres par minute.'] }
  ],
  bilder: ['TES 18 «Bern» près d’Einigen', 'TES 18 à Genève', 'Véhicule de sauvetage du TES 18 à Genève', 'TES 18 à Genève, vue latérale', 'Véhicule de matériel de secours Xtmas 99 85 9177 015 à l’Innotrans 2018']
});

uebZug('lrz-14', {
  beiname: 'Train d’extinction et de sauvetage',
  typ: 'Train d’extinction et de sauvetage à quatre éléments pour longs tunnels',
  text: ['Le TES 14 est un développement à quatre éléments plus performant, conçu pour les longs tunnels ferroviaires. Il dispose d’un deuxième véhicule de sauvetage.', 'Deux rames ont été acquises dans le cadre du renforcement du concept d’intervention pour l’axe du Gothard.'],
  kennzahlen: [['2', 'rames'], ['2014–2016', 'construction et mise en service'], ['6 × 390 kW', 'puissance de traction installée'], ['100 km/h', 'vitesse maximale']],
  daten: { 'Formation': 'wagon-citerne d’extinction + véhicule de matériel + 2 véhicules de sauvetage', 'Rettungsfahrzeuge': 'chacun 22,06 m / 78 t', 'Gewicht': 'env. 326 t', 'Atemluft': 'env. 1,98 mio de l', 'Anhängelast': '940 t sur 27 ‰', 'Anzahl': '2 rames', 'Einsatz': 'axe du Gothard et réseau de tunnels' },
  specNote: 'La désignation TES 14 nomme la génération. La mise en service s’est faite par étapes jusqu’à l’ouverture du tunnel de base du Gothard.',
  abschnitte: [
    { titel: 'Acquisition', p: ['Les deux rames ont été acquises à partir de 2012 et rendues opérationnelles avant la mise en service du tunnel de base du Gothard.'] },
    { titel: 'Deux unités de sauvetage', p: ['Chaque véhicule de sauvetage offre de la place à environ 60 personnes, ou à 40 personnes et six civières. Les espaces pressurisés, les sas et les raccordements médicaux permettent des évacuations depuis des tronçons de tunnel enfumés.'] },
    { titel: 'Profil de performance', p: ['La composition à quatre éléments offre plus d’agent d’extinction, d’air respirable et de capacité de sauvetage que les générations précédentes. Plusieurs véhicules motorisés assurent un effort de traction élevé et la redondance.'] }
  ],
  bilder: ['Nouveau TES 14 au centre d’entretien et d’intervention d’Erstfeld', 'TES 14 «Uri» en gare d’Erstfeld', 'TES 14 «Uri» des sapeurs-pompiers d’entreprise d’Erstfeld', 'TES 14 à Erstfeld']
});

uebZug('lrz-08', {
  beiname: 'Train d’extinction et de sauvetage',
  typ: 'Train d’extinction et de sauvetage de la génération 2008',
  text: ['Les CFF ont acquis huit trains d’extinction et de sauvetage de la génération TES 08, composés d’un wagon-citerne d’extinction, d’un véhicule de matériel et d’un véhicule de sauvetage.', 'Ils ont été conçus pour des interventions rapides sur le réseau à ciel ouvert et en tunnel.'],
  kennzahlen: [['8', 'rames'], ['2008–2010', 'livraison'], ['4 × 390 kW', 'puissance de traction installée'], ['100 km/h', 'vitesse maximale']],
  daten: { 'Gewicht': 'env. 248 t', 'Atemluft': 'env. 1,44 mio de l', 'Rettungsplätze': 'env. 60, ou 40 + 9 civières', 'Anhängelast': '730 t sur 27 ‰', 'Anzahl': '8 rames', 'In Betrieb seit': '2008–2010 (livraison)' },
  abschnitte: [
    { titel: 'Acquisition', p: ['La génération a été commandée en 2006 et livrée de 2008 à 2010. Huit rames ont complété le réseau d’intervention des CFF.'] },
    { titel: 'Fonction', p: ['Le wagon-citerne, le véhicule de matériel et le véhicule de sauvetage fonctionnent comme une unité. Deux groupes motopropulseurs de 390 kW dans le véhicule de matériel et deux dans le véhicule de sauvetage entraînent le train.', 'L’espace de sauvetage pressurisé fonctionne indépendamment de l’air extérieur et permet d’évacuer des personnes depuis des zones enfumées.'] }
  ],
  bilder: ['TES 08 (TES 08 Olten) à Renens', 'Véhicule de sauvetage XTmas 99 85 9174 004 «Lausanne» à Berne', 'XTmas 99 85 9174 008 «Olten» à Lausanne', 'TES 08 à Winterthour']
});

uebZug('lrz-04', {
  beiname: 'Train d’extinction et de sauvetage',
  typ: 'Train d’extinction et de sauvetage de la génération 2004',
  text: ['Le TES 04 était la première génération récente du train d’extinction et de sauvetage des CFF et a marqué le passage du train remorqué par une locomotive au train autonome.', 'L’unique rame réunit agents d’extinction, espace de sauvetage et traction propre pour les interventions sur les lignes et en tunnel.'],
  kennzahlen: [['1', 'rame de cette génération'], ['2004', 'mise en service'], ['4 × 315 kW', 'puissance de traction installée'], ['100 km/h', 'vitesse maximale']],
  daten: { 'Gewicht': 'env. 210 t', 'Atemluft': 'env. 1,44 mio de l', 'Anzahl': '1 rame', 'Einsatz': 'éteindre, sauver, dégager' },
  specNote: 'Le nombre et l’année se rapportent à la génération autonome TES 04. Les générations suivantes sont comptées séparément.',
  abschnitte: [
    { titel: 'Construction', p: ['Les véhicules transportent eau, mousse, matériel de sauvetage et de relevage. Le véhicule de matériel et le véhicule de sauvetage ont chacun deux groupes motopropulseurs ; le train n’a donc pas besoin d’une locomotive auxiliaire.', 'Le véhicule de sauvetage possède un espace intérieur protégé, alimenté en air respirable, pour les évacuations depuis des tunnels enfumés.'] },
    { titel: 'Engagement', p: ['Le train intervient lors d’événements sur le réseau ferroviaire, en particulier dans les longs tunnels et sur les tronçons difficiles d’accès.'] }
  ],
  bilder: ['TES 04 à Brigue, 2016', 'TES 04 à Hohtenn', 'TES 04 en gare de Hohtenn']
});

uebZug('xrotm', {
  typ: 'Véhicules spéciaux de déneigement',
  text: ['CFF Infrastructure utilise plusieurs types de fraises à neige autonomes.', 'Le règlement d’exploitation distingue quatre séries, qui remplissent des tâches différentes selon la quantité de neige, la ligne et le lieu d’intervention.'],
  kennzahlen: [['4', 'séries dans le règlement'], ['17', 'véhicules selon les plages de numéros'], ['60–80 km/h', 'Vmax des grands types'], ['95–115', 'numéros d’exploitation']],
  daten: { 'Xrotm 4/4': 'n° 95–96, 2 véhicules, 80 km/h', 'Xrotm 2/3': 'n° 97, 1 véhicule, 60 km/h', 'XTm': 'n° 102–109, 8 véhicules, 45 km/h (100 km/h remorqué)', 'Xrotm ex Tm 232': 'n° 110–115, 6 véhicules, 80 km/h (90 km/h remorqué)', 'Anzahl': '17 selon les plages de numéros', 'Einsatz': 'déblaiement de la neige et des congères' },
  specNote: 'Le nombre résulte des plages de numéros publiées dans le règlement d’exploitation des CFF et n’est pas un effectif confirmé séparément.',
  abschnitte: [
    { titel: 'Engagement', p: ['Les grandes Xrotm 95, 96 et 97 sont engagées lors de fortes chutes de neige, notamment sur la ligne panoramique du Gothard.', 'Les petites Xrotm 110–115 conviennent aux gares et aux lignes moins fréquentées.'] },
    { titel: 'Exploitation', p: ['Les fraises à neige sont des véhicules spéciaux dotés d’organes de déblaiement rotatifs. Selon la série, la traction propre, la capacité de déblaiement, la vitesse en ligne et la vitesse de remorquage admise diffèrent.'] }
  ],
  bilder: ['Fraise à neige Xrotm à Erstfeld', 'Fraise à neige Xrotm n° 95 à Erstfeld', 'Xrotm 95 en gare d’Erstfeld', 'Numéro de véhicule de la Xrotm 95', 'Xrotm 4/4 95 à Erstfeld']
});

uebZug('diagnose', {
  typ: 'Véhicule de diagnostic autonome Mermec Xtmass',
  text: ['Le véhicule de diagnostic autonome Xtmass ROGER 1000 contrôle l’état de l’infrastructure ferroviaire à grande vitesse.', 'Des systèmes de mesure relèvent la voie, la caténaire et d’autres installations sans interrompre inutilement l’exploitation régulière.'],
  kennzahlen: [['160 km/h', 'vitesse maximale'], ['672 kW', 'puissance maximale'], ['64 t', 'masse à vide'], ['23,9 m', 'longueur du véhicule']],
  daten: { 'Fahrzeugart': 'véhicule de diagnostic autonome', 'Gewicht': '64 t à vide, au maximum 66 t', 'Einsatz': 'mesure de la voie et de la caténaire' },
  abschnitte: [
    { titel: 'Tâches de mesure', p: ['ROGER 1000 réunit plusieurs systèmes de mesure et de diagnostic dans un seul véhicule. Sa vitesse élevée permet des contrôles sur les lignes principales en perturbant peu l’horaire.'] },
    { titel: 'Engagement au-delà de la Suisse', p: ['Mermec documente une campagne de mesure du véhicule CFF sur une ligne à grande vitesse allemande. Cela montre son aptitude aux courses de mesure sur des réseaux performants.'] }
  ],
  bilder: ['Automotrice de mesure XTmass 99 85 9160 001 de MerMec à Lausanne', 'ROGER 1000 (XTmass 99 85 9160 001) à Lausanne, 2009']
});

uebZug('kirow-krc-1100', {
  typ: 'Lourde grue ferroviaire pivotante pour intervention et construction',
  text: ['La grue CFF de la classe Kirow 1100 appartient à la nouvelle génération de grandes grues.', 'Avec la Multi Tasker 1200, elle a remplacé les deux anciennes KRC 800.'],
  kennzahlen: [['1', 'grue CFF de cette classe'], ['2019', 'fin du programme de remplacement'], ['125 t', 'capacité de levage maximale'], ['16°', 'rotation avec voie voisine libre']],
  daten: { 'Bauart': 'grue ferroviaire pivotante', 'Schwenkwinkel': 'jusqu’à 16° avec voie voisine libre', 'Eigenmasse': '112 t en ordre de transport (fiche technique du constructeur)', 'Transport': 'avec wagon de protection, contrepoids posé dessus', 'Netz': 'réseau CFF à voie normale', 'Vorgänger': 'l’une des deux KRC 800', 'In Betrieb seit': '2019 (programme de remplacement 2016–2019)', 'Einsatz': 'relevage, ponts provisoires, gros travaux' },
  specNote: '125 t est la capacité de levage maximale et non la masse de la grue. Les 112 t en ordre de transport proviennent de la fiche technique Kirow de la KRC 1100, et non d’un document CFF.',
  abschnitte: [
    { titel: 'Acquisition', p: ['En décembre 2017, les CFF ont choisi la KRC 1100. Kirow décrit le remplacement des deux KRC 800 par deux nouvelles grandes grues entre 2016 et 2019 ; l’une d’elles appartient à la classe 1100.'] },
    { titel: 'Travaux à côté de voies exploitées', p: ['Selon le constructeur, le contrepoids biseauté permet une rotation jusqu’à 16 degrés tout en laissant libre le gabarit de la voie voisine. En position de transport, le contrepoids repose sur un wagon de protection.'] },
    { titel: 'Indication de capacité', p: ['La capacité de levage maximale ne vaut que dans des conditions définies. La charge admise diminue avec la portée et dépend du calage et de la position de la voie.'] }
  ]
});

uebZug('kirow-800', {
  typ: 'Grues ferroviaires historiques des années 1990',
  text: ['En 1996, les CFF ont reçu deux grues Kirow de la classe KRC 800.', 'Elles servaient aux gros travaux de relevage et de construction et ont été remplacées entre 2016 et 2019 par de nouvelles grandes grues.'],
  kennzahlen: [['2', 'grues livrées'], ['1996', 'livraison'], ['203 t', 'masse du convoi de grue'], ['80 km/h', 'vitesse maximale']],
  daten: { 'Formation': 'grue avec wagon de protection et wagon pour l’équipe', 'Gewicht': 'env. 203 t (convoi entier)', 'Länge': 'env. 48 m (convoi entier)', 'Nachfolger': 'KRC 1100 et Multi Tasker 1200' },
  abschnitte: [
    { titel: 'Engagement', p: ['Les deux grues étaient utilisées pour les gros levages sur les chantiers et après des événements. Leur capacité de levage dépend de la portée, du calage et de la position de la voie.', 'Pour les trajets, elles étaient acheminées comme convoi de train marchandises avec wagon de protection et wagon pour l’équipe.'] },
    { titel: 'Remplacement', p: ['Kirow documente le remplacement des deux grues livrées en 1996 par une Multi Tasker 1200 et une grue de la classe 1100 entre 2016 et 2019.'] }
  ]
});

uebZug('kirow-250', {
  typ: 'Grue ferroviaire pivotante pour levages moyens',
  text: ['La Kirow KRC 250 est une grue ferroviaire pivotante pour les travaux de construction et d’entretien.', 'Au moins une grue CFF de ce type est attestée au plus tard en 2005 ; un nombre total exact et une année d’acquisition ne sont pas documentés de manière fiable publiquement.'],
  kennzahlen: [['169 t', 'masse du convoi de grue'], ['47 m', 'longueur du convoi'], ['80 km/h', 'vitesse maximale'], ['2005', 'au plus tard dans l’effectif CFF']],
  daten: { 'Formation': 'grue avec wagon de protection ou de contrepoids et wagon pour l’équipe', 'Gewicht': 'env. 169 t (convoi entier)', 'Länge': 'env. 47 m (convoi entier)', 'Antrieb': 'entraînement hydraulique de la grue, sans traction propre', 'Tragfähigkeit': 'selon la portée', 'Anzahl': 'au moins 1, nombre total non attesté', 'Im SBB-Bestand': 'au plus tard en 2005 (preuve photographique)' },
  specNote: 'Le nombre et l’année sont volontairement indiqués comme minimum : une KRC 250 des CFF est documentée en image en 2005. La masse de la grue et la charge sont des valeurs différentes.',
  abschnitte: [
    { titel: 'Mission', p: ['La KRC 250 lève des travées de voie, des éléments d’aiguillage et d’autres charges lourdes. Les wagons de protection et de contrepoids font partie du convoi d’exploitation ; le wagon pour l’équipe offre des locaux de travail et de séjour.'] },
    { titel: 'Sources', p: ['Le catalogue des types de marche des CFF atteste le type de construction, la composition et les données de marche. Il n’indique ni effectif actuel ni année d’acquisition.', 'Une photo atteste au moins une KRC 250 des CFF en 2005. Les sources publiques ne permettent actuellement pas d’en dire davantage avec certitude.'] }
  ]
});

uebZug('kirow-krc-100', {
  typ: 'Grue ferroviaire pivotante compacte pour construction et intervention',
  text: ['La Kirow KRC 100 est une grue ferroviaire pivotante compacte des CFF. Douze véhicules ont été livrés en 2006 et 2007.', 'Son faible rayon arrière et son contrepoids fixe permettent de travailler en influençant peu les voies voisines.'],
  kennzahlen: [['12', 'grues livrées'], ['2006–2007', 'livraison'], ['70 t', 'masse en service de la grue'], ['120 km/h', 'admis en remorque']],
  daten: { 'Länge': '11,0 m hors tampons', 'Gewicht': '70 t en service', 'Tragfähigkeit': 'jusqu’à env. 20 t, selon la portée', 'Höchstgeschwindigkeit': '120 km/h remorquée', 'Gegengewicht': 'fixe', 'In Betrieb seit': '2006–2007 (déc. 2006 à oct. 2007)', 'Einsatz': 'construction de voies, pose de mâts, intervention' },
  specNote: 'La capacité de levage des grues ferroviaires dépend fortement de la portée, du calage et de la position de la voie.',
  abschnitte: [
    { titel: 'Acquisition', p: ['Kirow a livré douze KRC 100 entre décembre 2006 et octobre 2007. La série a été acquise pour des interventions décentralisées de construction et de secours.'] },
    { titel: 'Engagement', p: ['La partie supérieure pivotante permet de travailler latéralement et dans l’axe de la voie, par exemple pour poser des mâts ou des éléments de protection en acier.', 'Pour les trajets, la grue est engagée comme train de travaux avec wagons de protection et d’accompagnement ; elle n’a pas besoin de traction propre.'] }
  ]
});

uebZug('bendini', {
  typ: 'Wagon-grue compact de la classe 30 tm',
  text: ['Le Bendini est un wagon-grue compact pour les levages moyens et légers dans l’entretien de l’infrastructure ferroviaire.', 'Le catalogue des types de marche des CFF le recense comme wagon-grue XTms actif et sans traction.'],
  kennzahlen: [['30 tm', 'classe de grue'], ['100 km/h', 'vitesse de transport'], ['38 t', 'masse du véhicule'], ['8,1 m', 'longueur du véhicule']],
  daten: { 'Basistyp': 'machine de chantier', 'Fahrzeugart': 'wagon marchandises', 'Anzahl': 'plusieurs, nombre total non confirmé', 'Fahrzeugnummern': 'exemples de XTm 91551 à 91596', 'In Betrieb seit': 'années 1980 (châssis de 1984, 1985 et 1989 attestés)', 'Einsatz': 'entretien et montage' },
  specNote: 'L’indication 30 tm désigne la classe de grue utilisée dans le catalogue CFF ; elle n’équivaut pas à la masse du véhicule de 38 t. Le nombre et l’année sont volontairement indiqués comme minimum ou période.',
  abschnitte: [
    { titel: 'Rôle dans la flotte de grues', p: ['Avec seulement 8,1 mètres de long, le Bendini est nettement plus compact que les lourds convois Kirow.', 'Il convient aux travaux locaux de montage et de levage qui ne nécessitent pas de grande grue lourde.'] },
    { titel: 'Remplacement prévu', p: ['Dans la planification des acquisitions de CFF Infrastructure, un projet de grues pour charges moyennes figure expressément comme remplaçant du Bendini et d’autres grues plus anciennes.', 'Le catalogue des types de marche 2026 indique néanmoins toujours le Bendini comme actif.'] }
  ]
});

uebZug('fahrleitung', {
  typ: 'Véhicules de service pour la construction et l’entretien de la caténaire',
  text: ['Les véhicules caténaire amènent le personnel, les outils et le matériel directement à la caténaire.', 'CFF Infrastructure utilise pour cela plusieurs séries et versions ; Hubi, Krani et Combi 4A en sont des exemples cités publiquement.'],
  kennzahlen: [['plusieurs', 'séries et versions'], ['Hubi', 'exemple de véhicule'], ['Krani', 'exemple de véhicule'], ['Combi 4A', 'exemple de véhicule']],
  daten: { 'Fahrzeuggruppe': 'véhicules de service caténaire', 'Arbeitsmittel': 'plateforme de travail élévatrice', 'Weitere Ausrüstung': 'grue et plateforme à matériel', 'Antrieb': 'selon la série', 'Höchstgeschwindigkeit': 'selon la série', 'Arbeitsort': 'caténaire et supports', 'Anzahl': 'pas publié comme nombre total', 'Einsatz': 'montage, contrôle et réparation' },
  specNote: 'Le véhicule caténaire n’est pas une série unique. Les valeurs techniques et années de construction doivent être attribuées à un type précis ou à un numéro de véhicule.',
  abschnitte: [
    { titel: 'Tâches', p: ['Les véhicules soutiennent l’inspection, le dépannage et le renouvellement de la caténaire. Les plateformes de travail donnent accès au fil de contact ; les grues lèvent mâts, consoles et matériel.'] },
    { titel: 'Délimitation', p: ['Cette page décrit le groupe de véhicules. Un portrait technique individuel nécessite la désignation exacte de la série et le numéro du véhicule, car puissance, masse, longueur et année de construction varient fortement.'] }
  ],
  bilder: ['Wagon de montage du Combi XTmass 99 85 9236 051 près de Bad Ragaz', 'Train de construction caténaire Combi entre Bad Ragaz et Sargans, 2019', 'Wagon-grue «Krani 3» avec nacelle pour la construction de caténaires']
});
