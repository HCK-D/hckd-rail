/* Français – Montreux Oberland bernois (MOB) */
uebDict({
  'Montreux Berner Oberland-Bahn': 'Montreux Oberland bernois', 'MOB': 'MOB', '900 V Gleichstrom': '900 V continu',
  '900 V Gleichstrom und Diesel': '900 V continu et diesel', '850 V Gleichstrom (historisch)': '850 V continu (historique)'
});

/* ---------- trafic voyageurs ---------- */
uebZug('mob-alpina', {
  name: 'Be 4/4 et ABe 4/4',
  typ: 'Automotrices Stadler modernes, le plus souvent en paire',
  text: ['Les ALPINA sont les automotrices modernes du MOB. En 2016, Stadler a livré quatre Be 4/4 et quatre ABe 4/4, qui circulent le plus souvent en paire et peuvent remorquer d’autres voitures.', 'Elles appartiennent à la même famille de véhicules que des automotrices des CJ, des TPC et de transN.'],
  kennzahlen: [['8', 'automotrices (4 paires)'], ['1020 kW', 'puissance par automotrice'], ['100 km/h', 'vitesse maximale'], ['2016', 'en service']],
  daten: { 'Bauart': 'automotrices électriques à plancher bas à 4 essieux', 'Länge': '20,46 m par automotrice', 'Leistung': '1020 kW en continu à la jante par automotrice', 'Sitzplätze': '18 en 1re, 63 en 2e classe (par paire, selon Wikipédia)', 'Anzahl': '8 automotrices' },
  specNote: 'Longueur et puissance selon un portrait de véhicule (Passiontrain), places selon Wikipédia. Une paire compte deux automotrices ; les huit véhicules ne sont pas huit trains. Les documents du MOB indiquent historiquement 900 V, les plus récents 960 V.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['Stadler a développé ces automotrices en commun pour plusieurs chemins de fer à voie métrique de Suisse romande. En 2016, le MOB a reçu les Be 4/4 9201–9204 (2e classe) et les ABe 4/4 9301–9304 (1re et 2e classe). Certaines portent un nom, comme 9301 « Montbovon », 9302 « Château-d’Œx » et 9303 « Lenk ».'] },
      { titel: 'Service et technique', p: ['Les ALPINA circulent sur la ligne principale Montreux–Zweisimmen en trains régionaux et remorquent aussi des voitures panoramiques, jusqu’à neuf voitures. Elles peuvent être commandées en unité multiple avec d’autres véhicules du MOB.', 'Elles étaient prévues à l’origine pour le GoldenPass Express ; ce sont toutefois des locomotives Ge 4/4 qui y remorquent les voitures. Les automotrices sont légères, ce qui rend la transmission de l’effort aux rails plus difficile par temps glissant.'] },
      { titel: 'Équipement et accessibilité', liste: ['Accès à plancher bas (480 mm) avec marchepieds rabattables pour l’hiver', '1re et 2e classe dans l’ABe, 2e classe dans la Be', 'Information voyageurs et espace multifonction', 'L’équipement du train entier dépend des voitures attelées'] }
    ],
  bilder: ['ABe 4/4 9303 à Zweisimmen (2023)', 'Dans l’ABe 4/4 9303 (2023)', 'Armoiries de Château-d’Œx sur l’ALPINA 9302 (2022)']
});
uebZug('mob-be44-5000', {
  typ: 'Navettes régionales, surtout dans le Simmental',
  text: ['Les quatre Be 4/4 de la série 5000 forment de courtes navettes avec des voitures de commande. Elles circulent surtout entre Zweisimmen et Lenk et jusqu’à Gstaad.', 'Elles arrivent en fin de vie ; des automotrices d’occasion des CJ doivent les remplacer.'],
  kennzahlen: [['4', 'automotrices'], ['1976', 'deux premières'], ['1979', 'deux autres'], ['2026', 'successeurs prévus']],
  daten: { 'Bauart': 'automotrice électrique avec voitures de commande', 'Fahrzeugnummern': 'Be 4/4 5001–5004 ; voitures de commande ABt 341–344 et Bt 241–244', 'Anzahl': '4 navettes' },
  specNote: 'Selon Wikipédia (liste des véhicules du MOB) et le rapport de gestion 2025 du MOB. Le nombre d’automotrices CJ achetées n’est pas encore un nombre de véhicules MOB homologués.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['SIG et SAAS ont livré deux automotrices en 1976 et deux en 1979. Elles avaient d’abord une cabine de conduite. De 2004 à 2009, elles ont été transformées sans cabine et ont reçu des voitures de commande à plancher bas : ABt 341–344 et Bt 241–244. Les anciennes voitures de commande étaient les ABt 5301–5304.'] },
      { titel: 'Service et technique', p: ['Les navettes circulent dans l’ordre ABt – Be – Bt, surtout entre Zweisimmen et Lenk im Simmental et jusqu’à Gstaad.', 'Selon le rapport de gestion 2025, elles arrivent en fin de vie. En novembre 2025, le MOB a acheté des automotrices d’occasion à quatre essieux des Chemins de fer du Jura (CJ) ; quatre d’entre elles (652–655) ont été transférées en décembre 2025. Elles sont adaptées en tension, attelages et information voyageurs ; la première mise en service était prévue fin 2026.'] },
      { titel: 'Équipement et accessibilité', liste: ['Voitures de commande ABt et Bt à plancher bas', '1re et 2e classe dans l’ABt', 'Espace bagages et multifonction', 'L’équipement vaut pour toute la navette'] }
    ],
  bilder: ['Bt 242, Be 4/4 5002 et ABt 342 à Schönried (2022)', 'Voiture de commande ABt 343 à St. Stephan (2023)', 'Dans la Be 4/4 5003 (2023)']
});
uebZug('mob-ge44-8000', {
  typ: 'Locomotive électrique pour le GoldenPass Express',
  text: ['Les Ge 4/4 de la série 8000 remorquent aujourd’hui le GoldenPass Express sur la voie métrique entre Montreux et Zweisimmen. À Zweisimmen, la locomotive reste sur son réseau ; ce sont les voitures qui changent d’écartement.', 'La 8003 a été vendue aux Chemins de fer rhétiques en 2019.'],
  kennzahlen: [['4', 'locomotives construites'], ['3', 'au MOB'], ['2000 kW', 'puissance'], ['1995', 'en service']],
  daten: { 'Bauart': 'locomotive électrique à 4 essieux', 'Fahrzeugnummern': '8001–8004 (8003 aux RhB depuis 2019)', 'Höchstgeschwindigkeit': '120 km/h (technique)', 'Anzahl': '3 (sur 4)' },
  specNote: 'Selon Wikipédia ; l’article indique 1994 comme année de construction, la liste des véhicules 1995. Les locomotives sont étroitement apparentées aux Ge 4/4 III des RhB, mais équipées pour le courant continu. Les RhB ont transformé l’ancienne 8003 en Ge 4/4 III 653.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['SLM et ABB ont construit les quatre locomotives en 1994/95. Elles ressemblent aux Ge 4/4 III des RhB et à la Ge 4/4 du BAM. La 8003 est partie aux RhB en 2019 et y circule comme 653 « St. Moritz ».'] },
      { titel: 'Service et technique', p: ['Les locomotives remorquent des trains voyageurs et, depuis décembre 2022, le GoldenPass Express entre Montreux et Zweisimmen. De 2017 à 2019, elles ont reçu des attelages automatiques Schwab ; depuis 2020, elles peuvent être commandées en unité multiple avec des voitures et automotrices adaptées.', 'En 2024, le MOB a commandé quatre nouvelles locomotives de la série 8500 pour les remplacer.'] },
      { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite, pas d’espace voyageurs', 'Attelage automatique Schwab', 'Commande depuis la voiture de commande du GoldenPass Express'] }
    ],
  bilder: ['Ge 4/4 8002 à Zweisimmen (2023)', 'Ge 4/4 8001 à Montreux (2024)', 'Ge 4/4 8004 à Zweisimmen (1995)']
});
uebZug('mob-gde44', {
  typ: 'Locomotive électrique avec compartiment à bagages pour les trains panoramiques',
  text: ['Les GDe 4/4 de 1983 sont des locomotives avec leur propre compartiment à bagages. Elles remorquent les trains panoramiques sur les rampes raides au-dessus de Montreux.', 'Le 3 novembre 1983, la 6003 a atteint 110 km/h entre Zweisimmen et Lenk – un record pour la voie métrique en Europe.'],
  kennzahlen: [['6', 'locomotives (4 + 2 ex GFM)'], ['100 km/h', 'vitesse maximale'], ['50 t', 'poids'], ['1983', 'construction']],
  daten: { 'Bauart': 'locomotive électrique avec compartiment à bagages', 'Länge': 'environ 16,4 m', 'Anzahl': '6 construites ; 6001 et 6004 démolies en décembre 2024' },
  specNote: 'Selon Wikipédia et le dossier. Pour la puissance et la charge utile, les sources publiques indiquent des états de référence différents ; elles ne sont donc pas indiquées. Wikipédia date l’achat des deux locomotives GFM de 2007 ou 2008.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['SLM et BBC ont construit six locomotives en 1983 : quatre pour le MOB et deux pour les GFM à Fribourg. Le MOB a repris les deux locomotives GFM en 2007/08 comme 6005 et 6006.', 'Le cahier des charges demandait de remorquer un train de 110 t à 40 km/h sur une rampe de 70 pour mille.'] },
      { titel: 'Service et technique', p: ['Les GDe 4/4 ont remorqué le Panoramic Express et des trains directs, en partie avec voitures de commande, et ont aussi servi aux trains de marchandises et de service. Une locomotive remorque en saison le Train du Chocolat.', 'Chaque essieu a son propre moteur ; la locomotive freine électriquement en réinjectant du courant. Les 6001 et 6004 ont été démolies en décembre 2024.'] },
      { titel: 'Équipement et accessibilité', liste: ['Compartiment à bagages dans la caisse', 'Deux cabines de conduite', 'Commande à hacheur et frein à récupération'] }
    ],
  bilder: ['GDe 4/4 6005 à Montreux (2014)', 'GDe 4/4 6003 à Schönried (2022)', 'GDe 4/4 près de Rougemont (1984)']
});
uebZug('mob-ge44-8500', {
  typ: 'Nouvelles locomotives électriques pour le GoldenPass Express (commandées)',
  text: ['En octobre 2024, le MOB a commandé à Stadler quatre nouvelles locomotives électriques pour le GoldenPass Express. Elles doivent remplacer les Ge 4/4 de la série 8000.', 'La même commande comprend deux locomotives hybrides pour le service des travaux.'],
  kennzahlen: [['4', 'locomotives commandées'], ['3 MW', 'puissance'], ['100 km/h', 'vitesse maximale'], ['2024', 'commandées']],
  daten: { 'Bauart': 'locomotive électrique à 4 essieux', 'Fahrzeugnummern': '8501–8504 (selon Wikipédia)', 'Länge': 'environ 17 m', 'Anzahl': '4 commandées' },
  specNote: 'Selon le communiqué de Stadler du 14 octobre 2024 et le rapport de gestion 2025 du MOB. Dates de livraison et numéros d’exploitation relèvent encore de la planification.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['Le 15 octobre 2024, Stadler et le MOB ont signé le contrat portant sur quatre locomotives électriques et deux locomotives hybrides de service. Les documents financiers du MOB désignent les locomotives électriques comme série 8500.'] },
      { titel: 'Service et technique', p: ['Les nouvelles locomotives doivent remorquer et pousser le GoldenPass Express et remplacer des locomotives plus anciennes. La commande ne signifie pas encore une livraison ou une homologation achevée.'] },
      { titel: 'Équipement et accessibilité', liste: ['Quatre essieux moteurs', 'Environ 17 m de long', 'Pas d’espace voyageurs'] }
    ]
});
uebZug('mob-gpx', {
  beiname: 'voitures à écartement variable',
  typ: 'Voitures à écartement réglable pour Montreux–Interlaken',
  text: ['Depuis décembre 2022, le GoldenPass Express relie Montreux à Interlaken sans changement. À Zweisimmen, ses voitures passent de la voie métrique à la voie normale.', 'Sur le MOB, une Ge 4/4 le remorque, sur le BLS une locomotive à voie normale.'],
  kennzahlen: [['23', 'voitures'], ['1000/1435', 'mm d’écartement'], ['2022', 'en service'], ['Prestige', 'classe']],
  daten: { 'Bauart': 'voitures voyageurs à bogies à écartement variable', 'Hersteller': 'Stadler (voitures), Alstom (système de bogies)', 'Betreiber': 'MOB, avec le BLS', 'Spurweite': 'voie métrique et voie normale (écartement variable)', 'Länge': '18,8–19,4 m par voiture', 'Gewicht': '25,3–26,5 t par voiture', 'Anzahl': '23 voitures' },
  specNote: 'Selon l’article de Stephan Frei (Eisenbahn Amateur 10/2022) et le MOB. Les places correspondent à l’état de 2022 et peuvent différer aujourd’hui.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['Stadler a construit les 23 voitures ; les bogies à écartement variable proviennent du système développé avec Alstom. Le design des têtes de train est de Pininfarina, l’intérieur d’Innova Design. Les voitures appartiennent au MOB.'],
        tabelle: { kopf: ['Voiture', 'Numéros', 'Fonction', 'Places (2022)'], zeilen: [
          ['Ast', '181–184', 'voiture de commande, Prestige et 1re classe', '9 + 20'], ['ABst', '381–384', 'voiture de commande, Prestige et 2e classe', '9 + 25'],
          ['As', '191–194', '1re classe avec restauration', '28'], ['Bs', '281–284', '2e classe', '54'], ['Bs NF', '271–274', 'voiture à plancher bas 2e classe', '39'],
          ['Bsi', '291–293', 'voiture d’interface vers la locomotive à voie normale', '54']] } },
      { titel: 'Service et technique', p: ['À Zweisimmen, le train passe par l’installation de changement d’écartement : les roues sont déplacées sur l’autre écartement et le plancher est adapté à la hauteur du quai. Une locomotive du BLS assure ensuite la suite du trajet par Spiez jusqu’à Interlaken.', 'La voiture d’interface Bsi relie les voitures à la locomotive à voie normale, dont l’attelage et la commande sont différents.'] },
      { titel: 'Équipement et accessibilité', liste: ['Classe Prestige avec sièges pivotants et réglables', 'Climatisation, prises USB et 230 V à la place', 'Voiture à plancher bas ; selon le MOB, 2 places pour fauteuils roulants par train', 'Pas de motorisation propre'] }
    ],
  bilder: ['GoldenPass Express avec la Ge 4/4 8004 (2024)', 'Voiture de commande Ast 183 à Zweisimmen (2023)', 'Voiture à plancher bas Bs NF 272 (2024)']
});
uebZug('mob-panoramic', {
  name: 'Voitures panoramiques',
  typ: 'Voitures panoramiques et de commande à grandes baies',
  text: ['Le MOB s’est fait connaître dès 1976 par ses voitures panoramiques. De grandes baies jusque dans le toit ouvrent la vue sur le Léman, le Pays-d’Enhaut et le Saanenland.', 'Dans certaines voitures de commande, les voyageurs sont assis à l’avant et le mécanicien au-dessus d’eux – on voyage ainsi au premier rang.'],
  kennzahlen: [['1976', 'premières voitures panoramiques'], ['1993', 'voitures de commande Crystal'], ['1re et 2e', 'classe'], ['Chernex', 'atelier propre']],
  daten: { 'Bauart': 'voitures panoramiques et de commande', 'Hersteller': 'R+J, atelier MOB de Chernex, Breda', 'Fahrzeugnummern': 'notamment As 110–119, Ast 116–117, Ast 151–152, Bs 220–238' },
  specNote: 'Selon Wikipédia (liste des véhicules du MOB) et x-rail. Certaines voitures ont été renumérotées plusieurs fois ou vendues.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['Les premières voitures panoramiques ont été construites dès 1976 par R+J et à l’atelier MOB de Chernex. En 1993, Breda a livré les voitures de commande Crystal Ast 151 et 152.', 'En 2023, le MOB a vendu quelques voitures anciennes (As 110, Bs 220 et 222–225) à Arterail en France ; la Bs 227 a été démolie en 2015.'] },
      { titel: 'Service et technique', p: ['Les voitures circulent dans le GoldenPass Panoramic entre Montreux et Zweisimmen, le plus souvent derrière une GDe 4/4 ou une ALPINA. Des offres comme le Train du Chocolat utilisent aussi ces voitures.', 'Dans les voitures de commande Ast 116 et 117 (Superpanoramic) ainsi qu’Ast 151 et 152 (Crystal), les voyageurs sont assis devant la cabine de conduite surélevée.'] },
      { titel: 'Équipement et accessibilité', liste: ['Grandes baies jusque dans le toit', 'Places panoramiques devant la cabine dans les voitures de commande', 'Voitures à plancher bas Bs 231–238', 'Pas de motorisation propre'] }
    ],
  bilder: ['Voiture de commande Ast 151 à Montreux (2014)', 'Voiture panoramique As 118 à Gstaad (2016)', 'Voiture panoramique Bs 236 (2014)']
});
uebZug('mob-belle-epoque', {
  name: 'Voitures Belle Époque',
  typ: 'Voitures dans le style des années 1900 pour trains d’excursion',
  text: ['Les voitures Belle Époque ressemblent à des voitures des années 1900. Elles ont été construites en 2004 et 2005 à l’atelier du MOB sur des véhicules plus anciens.', 'Les véritables anciennes voitures-salons sont les Ars 101 et As 102.'],
  kennzahlen: [['4', 'voitures transformées'], ['2004', 'transformation'], ['1re et 2e', 'classe'], ['Bar', 'dans la Brs 201']],
  daten: { 'Bauart': 'voitures voyageurs de style historique', 'Hersteller': 'atelier MOB de Chernex (transformation)', 'Fahrzeugnummern': 'As 103, As 107, Brs 201, Bs 202 ; voitures-salons Ars 101 et As 102' },
  specNote: 'Selon le MOB et x-rail. Selon le MOB, les voitures Belle Époque ne sont pas accessibles en fauteuil roulant ni avec un déambulateur.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['En 2004 et 2005, l’atelier MOB de Chernex a construit quatre voitures sur des châssis plus anciens, avec de nouvelles caisses et des intérieurs de style historique : les As 103 et As 107 (1re classe), la Brs 201 avec bar et la Bs 202 (2e classe).', 'À distinguer de ces voitures, les anciennes voitures-salons Ars 101 et As 102 ont leur propre histoire.'] },
      { titel: 'Service et technique', p: ['Les voitures circulent dans le GoldenPass Belle Époque entre Montreux et Zweisimmen et dans des offres réservables. Menu et service valent pour l’offre réservée.'] },
      { titel: 'Équipement et accessibilité', liste: ['Bois et laiton dans le style des années 1900', 'Bar dans la Brs 201', 'Non accessible en fauteuil roulant ni avec un déambulateur', 'Pas de motorisation propre'] }
    ],
  bilder: ['Voiture Belle Époque Brs 201 (2012)', 'Voiture Belle Époque Bs 202 (2012)']
});

/* ---------- infrastructure ---------- */
uebZug('mob-gem22', {
  typ: 'Locomotive de service bimode Stadler',
  text: ['Les trois Gem 2/2 roulent avec le courant de la caténaire ou au diesel. Elles remorquent des trains de travaux et de matériel sur le MOB.', 'Une quatrième, la HGem 2/2 2501, a une roue dentée et travaille au MVR sur la ligne des Pléiades.'],
  kennzahlen: [['3', 'locomotives au MOB'], ['600 kW', 'électrique'], ['400 kW', 'diesel'], ['2016', 'livrées']],
  daten: { 'Bauart': 'locomotive bimode (électrique et diesel), 2 essieux', 'Fahrzeugnummern': '2502–2504 ; HGem 2/2 2501 au MVR', 'Leistung': '600 kW en électrique, 400 kW au diesel', 'Anzahl': '3 (plus la 2501)' },
  specNote: 'Puissance selon le rapport de gestion 2016 du MOB. La charge remorquable dépend fortement de la déclivité et n’est donc pas indiquée de façon globale.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['Stadler a livré les locomotives en 2016 dans le cadre d’une commande commune de plusieurs chemins de fer. Trois sont destinées au MOB, la 2501 à crémaillère à la ligne MVR des Pléiades.'] },
      { titel: 'Service et technique', p: ['Les locomotives remorquent des trains de travaux et des transports de matériel et aident à l’entretien. Au diesel, elles circulent aussi quand la caténaire est coupée. Elles peuvent être radiocommandées et utilisées en couplage.'] },
      { titel: 'Équipement et accessibilité', liste: ['Pantographe et moteur diesel', 'Radiocommande', 'Pas de roue dentée (sauf la 2501)'] }
    ],
  bilder: ['Gem 2/2 2504 à Montbovon (2022)', 'Gem 2/2 2503 à Saanen (2022)']
});
uebZug('mob-gm44', {
  beiname: '2003 et 2004',
  typ: 'Locomotive diesel pour trains de travaux lourds',
  text: ['Les deux Gm 4/4 sont des locomotives diesel venues de France. Elles remorquent des trains de travaux lourds et ont parfois aussi circulé en service voyageurs.', 'Malgré leur numéro semblable, elles n’ont rien à voir avec les anciennes locomotives-fourgons 2001 et 2002.'],
  kennzahlen: [['2', 'locomotives'], ['1976', '2003 construite'], ['1982', '2004 construite'], ['80 km/h', 'vitesse maximale']],
  daten: { 'Bauart': 'locomotive diesel à 4 essieux' },
  specNote: 'Selon Wikipédia (liste des véhicules du MOB) et le dossier. Les sources vérifiées n’indiquent ni puissance ni poids.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['Moyse a construit la 2003 en 1976, CFD la 2004 en 1982, toutes deux en France.'] },
      { titel: 'Service et technique', p: ['Les locomotives remorquent des trains de construction et de travaux lourds, aussi quand la caténaire est coupée. Le MOB prévoit de nouveaux tracteurs d’infrastructure ; le rapport de gestion 2025 vise pour cela mi-2028.'] },
      { titel: 'Équipement et accessibilité', liste: ['Motorisation diesel, indépendante de la caténaire', 'Deux bogies', 'Conçue pour les trains de travaux'] }
    ]
});
uebZug('mob-gem44', {
  typ: 'Nouvelles locomotives de service bimodes (commandées)',
  text: ['Avec les nouvelles locomotives du GoldenPass, le MOB a commandé en 2024 deux locomotives hybrides pour le service des travaux. Elles doivent remorquer des trains de travaux et de service aussi sans caténaire.', 'Elles mesurent environ 17 m et ont quatre essieux moteurs.'],
  kennzahlen: [['2', 'locomotives commandées'], ['17 m', 'longueur'], ['100 km/h', 'vitesse maximale'], ['2024', 'commandées']],
  daten: { 'Bauart': 'locomotive bimode à 4 essieux', 'Fahrzeugnummern': '8601–8602 (selon Wikipédia)', 'Länge': 'environ 17 m', 'Anzahl': '2 commandées' },
  specNote: 'Selon Stadler (octobre 2024) et Wikipédia. Puissance par mode, moteur diesel et batterie ne sont pas encore publiés ; les 3 MW des locomotives électriques ne valent pas pour ces locomotives.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['En octobre 2024, Stadler et le MOB ont convenu de deux locomotives de service hybrides à quatre essieux, apparentées aux quatre nouvelles locomotives électriques de la série 8500.'] },
      { titel: 'Service et technique', p: ['Les locomotives doivent remorquer des trains de travaux et de service sur tout le MOB, aussi sur des tronçons sans courant. Une date de livraison n’est pas encore publiée.'] },
      { titel: 'Équipement et accessibilité', liste: ['Fonctionnement avec le courant de la caténaire', 'Seconde source d’énergie pour les tronçons sans caténaire', 'Quatre essieux moteurs'] }
    ]
});

/* ---------- véhicules de service et spéciaux ---------- */
uebZug('mob-schnee', {
  name: 'Chasse-neige et wagon-grue', beiname: 'Zaugg et Nencki',
  typ: 'Véhicules pour le service hivernal et l’entretien',
  text: ['Pour l’hiver, le MOB a reçu en 2016 deux nouveaux chasse-neige Zaugg, ainsi qu’un wagon-grue équipé par Nencki.', 'Un chasse-neige repousse la neige sur le côté ; il est déplacé par une locomotive ou une automotrice.'],
  kennzahlen: [['2', 'chasse-neige (2016)'], ['1', 'wagon-grue'], ['Zaugg', 'constructeur des chasse-neige'], ['2016', 'acquisition']],
  daten: { 'Bauart': 'chasse-neige et wagon-grue', 'Hersteller': 'Zaugg (chasse-neige), Nencki (grue)', 'Anzahl': '2 chasse-neige, 1 wagon-grue' },
  specNote: 'Selon le rapport de gestion 2016 du MOB. Numéros, poids et diagrammes de charge ne sont pas publiés ; une charge maximale de la grue n’est donc pas indiquée.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['Selon le rapport de gestion 2016, deux chasse-neige à adhérence de Zaugg et un wagon-grue équipé par Nencki sont arrivés au MOB.'] },
      { titel: 'Service et technique', p: ['En hiver, les chasse-neige maintiennent ouverte la ligne entre Montreux, Zweisimmen et Lenk. Le wagon-grue soulève du matériel lors de la construction et de l’entretien. D’ici mi-2028 environ, des plateformes avec grue et nacelle pour les travaux de voie et de caténaire doivent aussi arriver.'] },
      { titel: 'Équipement et accessibilité', liste: ['Soc pour dégager sur le côté', 'Grue avec stabilisateurs', 'Largeur de travail et charge de grue selon l’engin'] }
    ],
  bilder: ['Chasse-neige rapide du MOB devant une automotrice près d’Oeschseite (2017)']
});

/* ---------- véhicules historiques ---------- */
uebZug('mob-bcfe44', {
  typ: 'Automotrice électrique de la première génération de 1905 (historique)',
  text: ['La BCFe 4/4 11 fait partie des premières automotrices électriques du MOB. Elle date de 1905 et circule aujourd’hui au chemin de fer-musée Blonay–Chamby.', 'Elle avait des compartiments de 2e et 3e classe et un compartiment à bagages.'],
  kennzahlen: [['1905', 'construction'], ['192 kW', 'puissance'], ['50 km/h', 'vitesse maximale'], ['29 t', 'poids']],
  daten: { 'Bauart': 'automotrice électrique voyageurs et bagages', 'Betreiber': 'MOB, aujourd’hui chemin de fer-musée Blonay–Chamby', 'Fahrzeugnummern': '11 (série 7–20)', 'Sitzplätze': '12 en 2e, 16 en 3e classe (historique)', 'Erhalten': 'Blonay–Chamby, en état de marche' },
  specNote: 'Selon la fiche du chemin de fer-musée Blonay–Chamby. Pour la remise au musée, les sources indiquent 1999 et 2000.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['SIG et Alioth ont construit l’automotrice en 1905 pour le jeune MOB. Elle fait partie de la série BCFe 4/4 7–20 avec laquelle le MOB a développé son exploitation électrique.'] },
      { titel: 'Service et technique', p: ['La voiture transportait voyageurs et bagages sur la ligne de montagne depuis Montreux. Vers 2000, elle est arrivée au chemin de fer-musée Blonay–Chamby et a été restaurée pour le centenaire du MOB en 2001. Aujourd’hui, elle y circule dans des trains-musée.'] },
      { titel: 'Équipement et accessibilité', liste: ['Compartiments de 2e et 3e classe (historique)', 'Compartiment à bagages de 6 m² pour 2 t', 'Quatre moteurs de 48 kW chacun'] }
    ],
  bilder: ['BCFe 4/4 11 à Chamby (2018)', 'BCFe 4/4 11 (2013)']
});
uebZug('mob-fze66', {
  beiname: '2001 et 2002',
  typ: 'Locomotive-fourgon bagages et poste de 1932 (historique)',
  text: ['Jusqu’en 1968, les FZe 6/6 étaient les véhicules les plus puissants du MOB. Elles ont été construites en 1932 pour un train de luxe bientôt supprimé en raison de la crise économique.', 'La 2002 circule aujourd’hui au chemin de fer-musée Blonay–Chamby.'],
  kennzahlen: [['2', 'locomotives'], ['738 kW', 'puissance'], ['55 km/h', 'vitesse maximale'], ['1932', 'construction']],
  daten: { 'Bauart': 'locomotive-fourgon électrique bagages et poste sur 3 bogies', 'Betreiber': 'MOB, aujourd’hui chemin de fer-musée Blonay–Chamby', 'Fahrzeugnummern': '2001, 2002 (DZe 6/6 dès 1962)', 'Erhalten': '2002 (Blonay–Chamby, depuis 2008)' },
  specNote: 'Selon la fiche du chemin de fer-musée Blonay–Chamby et Wikipédia. FZe et DZe sont deux désignations des mêmes véhicules, pas deux locomotives différentes.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['SIG et BBC ont construit les deux véhicules en 1932 pour le Golden Mountain Pullman Express de 1931. Ce train de luxe a échoué en raison de la crise économique mondiale ; ensuite, les locomotives ont circulé avec des trains voyageurs et marchandises ordinaires.'] },
      { titel: 'Service et technique', p: ['Elles remorquaient souvent de lourds trains de marchandises, par exemple de matériaux de construction. En 1962, elles ont été renommées DZe 6/6, et en 1977/79 adaptées aux trains de wagons sur trucks transbordeurs.', 'La 2001 a été garée en 1988 et démolie en 2007. La 2002 a été retirée en 2002, est arrivée au chemin de fer-musée Blonay–Chamby le 19 juillet 2008 et y est en état de marche.'] },
      { titel: 'Équipement et accessibilité', liste: ['Compartiment bagages et poste de 10,2 m² pour 4 t', 'Six moteurs de 123 kW chacun', 'Caisse articulée sur trois bogies'] }
    ],
  bilder: ['FZe 6/6 2002 à Chamby-Musée (2026)']
});
uebZug('mob-bde44-3000', {
  typ: 'Automotrices légères de 1944 et 1946 (historique)',
  text: ['Les six BDe 4/4 de la série 3000 ont marqué l’exploitation du MOB après la Seconde Guerre mondiale. Elles remorquaient aussi des voitures plus anciennes et des voitures de commande.', 'La plupart ont été démolies ; la 3002 existe encore.'],
  kennzahlen: [['6', 'automotrices'], ['1944', 'quatre premières'], ['1946', 'deux autres'], ['3002', 'existe encore']],
  daten: { 'Bauart': 'automotrice électrique voyageurs et bagages' },
  specNote: 'Selon Wikipédia (liste des véhicules du MOB) et le dossier. Démolitions : 3003 (1996), 3004 (2010), 3001 (2019), 3005 et 3006 (2024). Un état de marche actuel de la 3002 n’est pas confirmé.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['SIG et BBC ont livré les 3001–3004 en 1944 et les 3005 et 3006 en 1946.'] },
      { titel: 'Service et technique', p: ['Les automotrices légères assuraient des trains voyageurs et bagages sur tout le MOB, souvent avec des voitures plus anciennes et des voitures de commande. Dès 1968, les ABDe 8/8 ont repris une partie de leurs tâches ; plus tard, elles ont servi en service interne et en réserve.', 'Pour la 3002, le rapport de gestion 2012 mentionne une révision partielle et des adaptations de la cabine de conduite.'] },
      { titel: 'Équipement et accessibilité', liste: ['Compartiments voyageurs et bagages', 'Deux cabines de conduite', 'Conservée : 3002'] }
    ],
  bilder: ['BDe 4/4 3002 à Zweisimmen (2014)', 'BDe 4/4 avec un train de marchandises (1984)']
});
uebZug('mob-abde88', {
  typ: 'Automotrice double de 1968 (historique)',
  text: ['Les quatre ABDe 8/8 de 1968 ont longtemps été l’épine dorsale du MOB. Chaque unité se compose de deux moitiés reliées en permanence, avec en tout huit essieux moteurs.', 'Elles sont hors service depuis 2017 ; deux sont garées à Lenk.'],
  kennzahlen: [['4', 'automotrices doubles'], ['70 km/h', 'vitesse maximale'], ['86', 'places assises'], ['1968', 'en service']],
  daten: { 'Bauart': 'automotrice double électrique', 'Sitzplätze': '18 en 1re, 68 en 2e classe', 'Erhalten': '4001 et 4004 garées à Lenk' },
  specNote: 'Selon Wikipédia. Wikipédia indique 840 V continu, des documents de réseau plus anciens 900 V. Garée ne veut pas dire conservée par un musée.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['SIG, BBC et SAAS ont construit les quatre unités en 1968. Chacune porte des armoiries : 4001 celles de la Suisse, 4002 Vaud, 4003 Berne et 4004 Fribourg.'] },
      { titel: 'Service et technique', p: ['Dès 1968, elles ont assuré la plus grande partie du trafic Montreux–Zweisimmen et remplacé les BDe 4/4 de la série 3000. Sur une rampe de 73 pour mille, elles remorquaient jusqu’à cinq voitures pesant 80 t.', 'Après l’arrivée des GDe 4/4 dès 1983, elles ont repris des tâches plus modestes. Elles ont été officiellement retirées les 2 et 3 septembre 2017. La 4003 a été démolie en 2018, la 4002 en 2021 ; les 4001 et 4004 sont garées à Lenk depuis 2020.'] },
      { titel: 'Équipement et accessibilité', liste: ['18 places en 1re et 68 en 2e classe', 'Compartiment à bagages', 'Deux moitiés formant une unité fixe'] }
    ],
  bilder: ['ABDe 8/8 4003 à Zweisimmen (2014)', 'ABDe 8/8 4001 garée à Lenk (2023)']
});
uebZug('mob-hist-wagen', {
  name: 'Voitures voyageurs historiques', beiname: 'BC4 22 et B4 61',
  typ: 'Premières voitures voyageurs du MOB à Blonay–Chamby (historique)',
  text: ['Deux premières voitures voyageurs du MOB sont conservées au chemin de fer-musée Blonay–Chamby : la BC4 22 de 1902 et la B4 61 de 1906.', 'Elles montrent comment on voyageait dans les premières années du MOB.'],
  kennzahlen: [['1902', 'BC4 22'], ['1906', 'B4 61'], ['48', 'places dans la BC4 22'], ['SIG', 'constructeur']],
  daten: { 'Bauart': 'voitures voyageurs historiques à bogies', 'Betreiber': 'MOB, aujourd’hui chemin de fer-musée Blonay–Chamby', 'Sitzplätze': '48 de 3e classe (BC4 22), 30 de 2e classe (B4 61)', 'Erhalten': 'chemin de fer-musée Blonay–Chamby' },
  specNote: 'Selon les fiches du chemin de fer-musée Blonay–Chamby. Malgré sa désignation de classe mixte, la BC4 22 a aujourd’hui un aménagement uniquement de 3e classe ; selon sa fiche, la B4 61 était en révision.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['SIG à Neuhausen a construit la BC4 22 en 1902 et la B4 61 en 1906.'] },
      { titel: 'Service et technique', p: ['Les voitures ont circulé sur le MOB pendant les premières décennies, derrière les premières automotrices comme la BCFe 4/4 11. Aujourd’hui, elles font partie de la collection du chemin de fer-musée Blonay–Chamby.', 'La 3e classe est une caractéristique historique, pas une offre actuelle.'] },
      { titel: 'Équipement et accessibilité', liste: ['BC4 22 : 48 places de 3e classe', 'B4 61 : 30 places de 2e classe', 'Pas de motorisation propre'] }
    ],
  bilder: ['BC4 22 à Blonay–Chamby (2023)', 'B4 61 à Blonay (2018)', 'Dans la B4 61 (2019)']
});
uebZug('mob-hist-gueterwagen', {
  name: 'Wagons marchandises historiques', beiname: 'K, L, M et O',
  typ: 'Premiers wagons marchandises du MOB à Blonay–Chamby (historique)',
  text: ['Le MOB transportait autrefois des marchandises diverses, du bétail, du bois et des matériaux de construction. Quatre premiers wagons marchandises de 1901 à 1905 sont conservés au chemin de fer-musée Blonay–Chamby.', 'Le L 153 a même été un chasse-neige pendant un temps.'],
  kennzahlen: [['4', 'wagons'], ['1901', 'le plus ancien (K 101)'], ['10–12 t', 'charge utile'], ['1905', 'le plus récent (O 810)']],
  daten: { 'Bauart': 'wagons marchandises historiques', 'Betreiber': 'MOB, aujourd’hui chemin de fer-musée Blonay–Chamby', 'Gewicht': '5,0–7,8 t à vide', 'Nutzlast': '10 ou 12 t', 'Erhalten': 'chemin de fer-musée Blonay–Chamby' },
  specNote: 'Selon les fiches du chemin de fer-musée Blonay–Chamby. La charge utile est la charge autorisée, pas le poids total. Aujourd’hui, le MOB n’a plus de trafic marchandises propre notable.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['Les quatre wagons conservés datent des premières années d’exploitation du MOB.'],
        tabelle: { kopf: ['Wagon', 'Construction', 'Constructeur', 'À vide', 'Charge utile'], zeilen: [
          ['K 101', '1901', 'SIG', '7,7 t', '10 t'], ['L 153', '1903', 'SIG Neuhausen', '6,7 t', '10 t'], ['M 706', '1904', 'Busch Bautzen', '5,0 t', '10 t'], ['O 810', '1905', 'Busch Bautzen', '7,8 t', '12 t']] } },
      { titel: 'Service et technique', p: ['Les wagons ont des freins à main et à vide automatiques. Le L 153 a été transformé en 1971 en chasse-neige X 153, puis appelé Xa 9. Après sa remise à Blonay–Chamby en 2006, il a été restauré comme L 153 et circule de nouveau depuis 2009.', 'Plus tard, le MOB a aussi transporté des wagons marchandises à voie normale sur trucks transbordeurs, surtout entre Zweisimmen et Lenk.'] },
      { titel: 'Équipement et accessibilité', liste: ['Wagons couverts et ouverts', 'Frein à main et frein à vide', 'Pas de motorisation propre'] }
    ],
  bilder: ['Wagon marchandises M 706 à Blonay–Chamby (2021)', 'Wagon à hauts bords O 801 à Blonay–Chamby (2012)']
});

/* cartes « Où circule-t-il ? » */
uebEinsatz({
  'mob-alpina': 'Sur la ligne principale Montreux–Zweisimmen et jusqu’à Lenk, en trains régionaux et avec des voitures panoramiques. La voie métrique est en pointillé et simplifiée.',
  'mob-be44-5000': 'Surtout entre Zweisimmen et Lenk im Simmental et jusqu’à Gstaad. La voie métrique est en pointillé et simplifiée.',
  'mob-ge44-8000': 'En tête du GoldenPass Express entre Montreux et Zweisimmen. La voie métrique est en pointillé et simplifiée.',
  'mob-gde44': 'En tête des trains panoramiques sur tout le MOB, en saison aussi du Train du Chocolat. La voie métrique est en pointillé et simplifiée.',
  'mob-ge44-8500': 'Prévue en tête du GoldenPass Express entre Montreux et Zweisimmen. La voie métrique est en pointillé et simplifiée.',
  'mob-gpx': 'Montreux–Zweisimmen sur voie métrique (en pointillé), puis après le changement d’écartement sur voie normale par Spiez jusqu’à Interlaken Ost.',
  'mob-panoramic': 'Dans le GoldenPass Panoramic entre Montreux et Zweisimmen. La voie métrique est en pointillé et simplifiée.',
  'mob-belle-epoque': 'Dans le GoldenPass Belle Époque entre Montreux et Zweisimmen. La voie métrique est en pointillé et simplifiée.',
  'mob-gem22': 'Avec des trains de travaux et de matériel sur tout le MOB. La voie métrique est en pointillé et simplifiée.',
  'mob-gm44': 'En tête de trains de travaux lourds sur tout le MOB. La voie métrique est en pointillé et simplifiée.',
  'mob-gem44': 'Prévues pour des trains de travaux et de service sur tout le MOB. La voie métrique est en pointillé et simplifiée.',
  'mob-schnee': 'En hiver entre Montreux, Zweisimmen et Lenk. La voie métrique est en pointillé et simplifiée.',
  'mob-bcfe44': 'Autrefois sur la ligne de montagne depuis Montreux ; aujourd’hui au chemin de fer-musée Blonay–Chamby. La voie métrique est en pointillé et simplifiée.',
  'mob-fze66': 'Autrefois en tête de trains lourds sur tout le MOB ; la 2002 circule aujourd’hui à Blonay–Chamby. La voie métrique est en pointillé et simplifiée.',
  'mob-bde44-3000': 'Autrefois sur tout le MOB. La voie métrique est en pointillé et simplifiée.',
  'mob-abde88': 'Autrefois surtout entre Montreux et Zweisimmen ; deux unités sont garées à Lenk. La voie métrique est en pointillé et simplifiée.',
  'mob-hist-wagen': 'Autrefois sur le MOB ; aujourd’hui au chemin de fer-musée Blonay–Chamby. La voie métrique est en pointillé et simplifiée.',
  'mob-hist-gueterwagen': 'Autrefois dans le trafic marchandises du MOB ; aujourd’hui au chemin de fer-musée Blonay–Chamby. La voie métrique est en pointillé et simplifiée.'
});
