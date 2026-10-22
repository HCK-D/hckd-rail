/* Français – SOB (Südostbahn) */
uebDict({
  'Schweizerische Südostbahn': 'Chemin de fer du Sud-Est suisse',
  'Klassiker von SBB, BLS, TPF und SOB, die heute nicht mehr im Alltag fahren. Viele sind bei SBB Historic, der BLS-Stiftung, GFM Historique, in Vereinen oder in Museen erhalten.': 'Classiques des CFF, du BLS, des TPF et du SOB qui ne circulent plus au quotidien. Beaucoup sont conservés par CFF Historic, la Fondation BLS, GFM Historique, des associations ou dans des musées.',
  'Fahrzeugfamilie': 'Famille de véhicules', 'Wagenarten': 'Types de voitures', 'Herkunft': 'Origine', 'Frühere Nummern': 'Anciens numéros', 'Frühere Bezeichnungen': 'Anciennes désignations',
  'Umbau': 'Transformation', 'Antrieb': 'Propulsion', 'Wiederbeschaffungswert': 'Valeur de remplacement', 'Einsatz': 'Utilisation', 'Ausmusterung': 'Retrait', 'Baujahre': 'Années de construction',
  'Achsfolge': 'Disposition des essieux', 'SOB': 'SOB', 'SOB Infrastruktur': 'SOB Infrastructure', 'SOB (historisch)': 'SOB (historique)',
  'BT, ab 2001 SOB (historisch)': 'BT, dès 2001 SOB (historique)', 'SOB und BT (historisch)': 'SOB et BT (historique)', 'BT (historisch)': 'BT (historique)',
  'BT, später SOB (historisch)': 'BT, puis SOB (historique)', 'BT und SOB': 'BT et SOB', 'BT und SOB (historisch)': 'BT et SOB (historique)',
  'Wädenswil–Einsiedeln-Bahn und SOB (historisch)': 'Chemin de fer Wädenswil–Einsiedeln et SOB (historique)',
  'kein eigener Antrieb': 'sans propulsion propre', 'Elektrolokomotive Bo’Bo’': 'locomotive électrique Bo’Bo’', 'Diesellokomotive': 'locomotive diesel'
});

uebZug('sob-traverso', {
  typ: 'Stadler FLIRT 3 à huit caisses pour le Voralpen-Express, le Treno Gottardo et l’Aare Linth',
  text: ['Le Traverso couleur cuivre est le train le plus connu de la Südostbahn. Cette rame surbaissée à huit caisses circule sur les longues lignes du SOB, comme le Voralpen-Express Saint-Gall–Lucerne et le Treno Gottardo par la ligne de faîte du Gothard.', 'Une unité numérotée 101/201 est un seul train à huit caisses, et non deux trains.'],
  kennzahlen: [['30', 'rames en quatre séries'], ['160 km/h', 'vitesse maximale'], ['380', 'places assises, strapontins compris'], ['2019', 'mise en service']],
  daten: { 'Bauart': 'automotrice électrique à plancher surbaissé, 8 caisses', 'Länge': '150,2 m', 'Gewicht': '265 t à vide', 'Sitzplätze': '68 en 1re, 291 en 2e classe, 21 strapontins', 'Anzahl': '30 rames' },
  specNote: 'Quatre séries : 6 rames (2019), 11 (2020), 7 (2021) et 6 (dès 2024). Avec la dernière rame, la flotte était complète en mai 2025.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler Bussnang a construit 30 Traverso à huit caisses pour le SOB. Ils sont arrivés en quatre séries : 6 rames en 2019 (101–106), 11 en 2020 (107–117), 7 en 2021 (118–124) et 6 dès 2024 (125–130).', 'Le Traverso appartient à la plateforme FLIRT 3, comme les FLIRT 3 à quatre caisses du SOB. En mai 2025, toute la nouvelle flotte de 43 rames était livrée.'] },
      { titel: 'Utilisation et technique', p: ['Dès 2019, les premiers Traverso ont remplacé les trains Revvivo remorqués du Voralpen-Express Saint-Gall–Rapperswil–Arth-Goldau–Lucerne. Depuis décembre 2020, ils circulent comme Treno Gottardo de Bâle et Zurich par la ligne de faîte du Gothard jusqu’à Locarno, depuis décembre 2021 comme Aare Linth Berne–Zurich–Coire et depuis décembre 2024 comme Alpenrhein-Express Saint-Gall–Coire.', 'Une rame mesure 150,2 m, pèse 265 t, développe 5200 kW et roule jusqu’à 160 km/h. La flotte est entretenue surtout à Herisau.'] },
      { titel: 'Équipement et accessibilité', liste: ['Accès à plancher surbaissé avec marchepieds coulissants', 'WC accessible en fauteuil roulant', 'Climatisation', 'Information voyageurs sonore et visuelle', 'Prises électriques', 'Emplacements pour vélos', '380 places : 68 en 1re, 291 en 2e classe et 21 strapontins'],
        p: ['Grâce au plancher surbaissé et aux marchepieds coulissants, on monte sans marche à la plupart des quais.'] }
    ],
  bilder: ['Traverso 105 à Kreuzlingen (2019)', 'Traverso 121 à Göschenen (2023)', 'Traverso en IR 46 Locarno–Zurich près de Wassen (2025)']
});
uebZug('sob-flirt3', {
  typ: 'Stadler FLIRT 3 à quatre caisses, argenté',
  text: ['Le FLIRT 3 argenté est le petit frère du Traverso. Il circule seul sur des lignes S-Bahn et régionales ou renforce un Traverso.', 'Les 13 rames portent des noms de montagnes, du « Bachtel » au « Vilan ».'],
  kennzahlen: [['13', 'rames (001–013)'], ['160 km/h', 'vitesse maximale'], ['205', 'places assises, strapontins compris'], ['2019', 'mise en service']],
  daten: { 'Bauart': 'automotrice électrique à plancher surbaissé, 4 caisses', 'Länge': '77,10 m', 'Gewicht': '135 t à vide', 'Sitzplätze': '22 en 1re, 175 en 2e classe, 8 strapontins', 'Anzahl': '13 rames' },
  specNote: 'Mises en service : 5 rames en 2019, 5 en 2021 et 3 en 2025.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler a livré au SOB 13 FLIRT 3 à quatre caisses numérotés 001–013 : 5 rames en 2019, 5 en 2021 et 3 en 2025. Avec la 13e rame, toute la nouvelle flotte était livrée en mai 2025.'] },
      { titel: 'Utilisation et technique', p: ['Les FLIRT 3 circulent en trafic S-Bahn et régional du SOB et renforcent les Traverso sur les roulements adaptés. La ligne d’une rame change avec l’horaire et le roulement.', 'Une rame mesure 77,10 m, pèse 135 t, développe 2600 kW et roule jusqu’à 160 km/h. Les rames sont entretenues à Herisau et à Samstagern.'] },
      { titel: 'Équipement et accessibilité', liste: ['Accès à plancher surbaissé avec marchepieds coulissants', 'WC accessible en fauteuil roulant', 'Climatisation', 'Information voyageurs sonore et visuelle', 'Prises électriques', 'Emplacements pour vélos', '205 places : 22 en 1re, 175 en 2e classe et 8 strapontins'] },
      { titel: 'Les noms', tabelle: { kopf: ['Numéro', 'Nom', 'Numéro', 'Nom'], zeilen: [
        ['001', 'Bachtel', '008', 'Vrenelisgärtli'], ['002', 'Calanda', '009', 'Sissacherflue'], ['003', 'Bristen', '010', 'Tödi'], ['004', 'Gurten', '011', 'Hirzli'],
        ['005', 'Pilatus', '012', 'Kuegrat'], ['006', 'Gitschen', '013', 'Vilan'], ['007', 'Pizzo di Claro', '', '']] } }
    ],
  bilder: ['FLIRT 3 001 « Bachtel » à Biberbrugg (2020)', 'FLIRT 3 002 « Calanda » (2021)']
});
uebZug('sob-flirt-1', {
  typ: 'Stadler FLIRT à quatre caisses de première génération',
  text: ['Avec les onze FLIRT de 2007, l’ère des trains modernes à plancher surbaissé a commencé au SOB. Ils ont remplacé d’anciennes rames réversibles.', 'Chaque rame porte le nom d’une montagne de la région, par exemple « Mythen » ou « Churfirsten ».'],
  kennzahlen: [['11', 'rames (041–051)'], ['160 km/h', 'vitesse maximale'], ['214', 'places assises, strapontins compris'], ['2007', 'mise en service']],
  daten: { 'Bauart': 'automotrice électrique à plancher surbaissé, 4 caisses', 'Länge': '74,08 m', 'Gewicht': '120 t à vide', 'Sitzplätze': '24 en 1re, 152 en 2e classe, 38 strapontins', 'Anzahl': '11 rames' },
  specNote: 'Le SOB indique les données techniques des séries 1 et 2 ensemble.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler a livré les onze rames de la première série en 2007. Avec les douze rames de la série 2 de 2013, le SOB possède 23 FLIRT de première génération. Les deux groupes s’appellent RABe 526, comme les FLIRT 3 plus récents, mais diffèrent par l’année de construction et l’exécution.', 'Dans les années 2020, les rames sont révisées ; le SOB renouvelle notamment l’information voyageurs.'] },
      { titel: 'Utilisation et technique', p: ['Les FLIRT circulent en trafic régional et S-Bahn du SOB en Suisse orientale et centrale. La ligne exacte change avec l’horaire, les travaux et les roulements.', 'Une rame mesure 74,08 m, pèse 120 t, développe 2600 kW et roule jusqu’à 160 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Accès à plancher surbaissé', 'WC accessible en fauteuil roulant', 'Climatisation', 'Information voyageurs', 'Emplacements pour vélos', 'Prises électriques en 1re classe seulement', '214 places : 24 en 1re, 152 en 2e classe et 38 strapontins'] },
      { titel: 'Les noms', tabelle: { kopf: ['Numéro', 'Nom', 'Numéro', 'Nom'], zeilen: [
        ['041', 'Mythen', '047', 'Rossberg'], ['042', 'Chrüzberg', '048', 'Kronberg'], ['043', 'Churfirsten', '049', 'Hochstuckli'], ['044', 'Morgartenberg', '050', 'Alvier'],
        ['045', 'Federispitz', '051', 'Zimmerberg'], ['046', 'Ringelspitz', '', '']] } }
    ],
  bilder: ['RABe 526 050 « Alvier » à Buchs SG (2023)', 'RABe 526 049 « Hochstuckli » en S4 (2021)', 'RABe 526 041 « Mythen » à Wattwil (2010)']
});
uebZug('sob-flirt-2', {
  typ: 'Stadler FLIRT à quatre caisses, deuxième série de 2013',
  text: ['Avec douze FLIRT supplémentaires, la flotte régionale moderne du SOB est passée à 23 rames en 2013. Techniquement, elles correspondent à la première série.', 'Elles aussi portent des noms de montagnes, du « Schnabelsberg » à l’« Alpstein ».'],
  kennzahlen: [['12', 'rames (052–063)'], ['160 km/h', 'vitesse maximale'], ['214', 'places assises, strapontins compris'], ['2013', 'mise en service']],
  daten: { 'Bauart': 'automotrice électrique à plancher surbaissé, 4 caisses', 'Länge': '74,08 m', 'Gewicht': '120 t à vide', 'Sitzplätze': '24 en 1re, 152 en 2e classe, 38 strapontins', 'Anzahl': '12 rames' },
  specNote: 'Le SOB indique les données techniques des séries 1 et 2 ensemble.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler a livré les douze rames de la deuxième série en 2013. Elles reposent sur le même concept à quatre caisses que la série 1 de 2007 ; le SOB décrit les deux séries ensemble.'] },
      { titel: 'Utilisation et technique', p: ['Les FLIRT circulent en trafic régional et S-Bahn du SOB en Suisse orientale et centrale. La ligne exacte change avec l’horaire, les travaux et les roulements.', 'Une rame mesure 74,08 m, pèse 120 t, développe 2600 kW et roule jusqu’à 160 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Accès à plancher surbaissé', 'WC accessible en fauteuil roulant', 'Climatisation', 'Information voyageurs', 'Emplacements pour vélos', 'Prises électriques en 1re classe seulement', '214 places : 24 en 1re, 152 en 2e classe et 38 strapontins'] },
      { titel: 'Les noms', tabelle: { kopf: ['Numéro', 'Nom', 'Numéro', 'Nom'], zeilen: [
        ['052', 'Schnabelsberg', '058', 'Speer'], ['053', 'Etzel', '059', 'St. Anton'], ['054', 'Hoher Kasten', '060', 'Hundwiler Höhi'], ['055', 'Mürtschenstock', '061', 'Rigi Kulm'],
        ['056', 'Pizol', '062', 'Chapfenberg'], ['057', 'Gonzen', '063', 'Alpstein']] } }
    ],
  bilder: ['RABe 526 056 « Pizol » à Uznach (2023)', 'RABe 526 063 « Alpstein » à Unterterzen (2014)']
});
uebZug('sob-tm-234', {
  typ: 'Véhicule de travaux et d’intervention de SOB Infrastructure',
  text: ['Les quatre Robel sont des véhicules de travaux automoteurs. Ils apportent du matériel sur les chantiers, aident aux travaux sur la voie, la ligne de contact et la signalisation, et déneigent en hiver.', 'Les quatre portent le nom de ponts et viaducs du SOB, par exemple « Sitterviadukt ».'],
  kennzahlen: [['4', 'véhicules (501–504)'], ['100 km/h', 'vitesse maximale'], ['720 kW', 'puissance'], ['2015', 'mise en service']],
  daten: { 'Bauart': 'véhicule de travaux et d’intervention automoteur', 'Länge': '15,140 m (série 1), 15,138 m (série 2)', 'Gewicht': '38,1 t (série 1), 39,1 t (série 2)' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Le SOB possède quatre véhicules Robel : la série 1, numéros 501–503, est arrivée en 2015, la série 2 avec le 504 en 2019.'],
        tabelle: { kopf: ['Numéro', 'Nom', 'Série', 'Année'], zeilen: [['501', 'Sitterviadukt', '1', '2015'], ['502', 'Kapftobelbrücke II', '1', '2015'], ['503', 'Thurviadukt I', '1', '2015'], ['504', 'Kirchtobelviadukt II', '2', '2019']] } },
      { titel: 'Utilisation et technique', p: ['Les Robel travaillent surtout sur le réseau du SOB. Le SOB les engage aussi pour d’autres chemins de fer, par exemple pour des travaux de signalisation des CFF à l’aéroport de Zurich et pour des travaux de ligne de contact à l’Uetliberg. En hiver, ils déneigent avec chasse-neige et brosse.', 'Un véhicule développe jusqu’à 720 kW et roule jusqu’à 100 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Surface de chargement pour le matériel', 'Équipement selon la mission, par exemple une grue', 'Chasse-neige et brosse en hiver'],
        p: ['Les Robel sont des véhicules de service. Ils ne transportent pas de voyageurs.'] }
    ],
  bilder: ['Robel 501 « Sitterviadukt » à Schachen (2016)']
});
uebZug('sob-dienstwagen', {
  name: 'Wagons de service',
  typ: 'Wagons pour l’entretien du réseau SOB',
  text: ['Le SOB possède 26 wagons de service pour l’entretien de son réseau. Ils transportent rails, composants et matériel vers les chantiers.', 'Ce ne sont pas des wagons marchandises pour des clients : le SOB n’exploite pas de trafic marchandises propre.'],
  kennzahlen: [['26', 'wagons de service (2024)'], ['3,2 mio CHF', 'valeur de remplacement'], ['entretien', 'utilisation'], ['SOB', 'infrastructure']],
  daten: { 'Bauart': 'wagons de service de types divers', 'Anzahl': '26 (rapport sur l’état du réseau 2024)', 'Wiederbeschaffungswert': '3,2 millions de francs (2024)', 'Einsatz': 'entretien et chantiers' },
  specNote: 'Le SOB ne publie pas de liste des différents wagons avec type et numéro. C’est pourquoi aucun numéro n’est indiqué ici.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Le rapport 2024 du SOB sur l’état du réseau compte 26 wagons de service d’une valeur de remplacement de 3,2 millions de francs. S’y ajoutent les quatre Robel comme véhicules moteurs.', 'Le rapport ne détaille pas les types de wagons ni les numéros.'] },
      { titel: 'Utilisation et technique', p: ['Les wagons servent à l’entretien des installations et à l’approvisionnement des chantiers, par exemple pour transporter rails, composants et matériel. Ils circulent le plus souvent avec les Robel.'] },
      { titel: 'Équipement et accessibilité', p: ['Selon le wagon, il y a des surfaces de chargement ou d’autres superstructures pour le matériel. Ce sont des wagons de travail sans compartiment voyageurs.'] }
    ]
});
uebZug('sob-rbde-561', {
  typ: 'Nouvelle rame réversible (NPZ) à deux caisses de l’ancien SOB (historique)',
  text: ['Les quatre NPZ Süd ont circulé 30 ans pour le SOB, en dernier lieu comme « March-Shuttle » S27 entre Siebnen-Wangen et Ziegelbrücke. Le SOB les a retirées du service en octobre 2025.', 'Chaque rame a parcouru environ trois millions de kilomètres.'],
  kennzahlen: [['4', 'rames (081–084)'], ['140 km/h', 'vitesse maximale'], ['120', 'places assises'], ['1995–2025', 'en service']],
  daten: { 'Bauart': 'rame réversible avec automotrice RBDe et voiture-pilote ABt', 'Fahrzeugnummern': 'RBDe 561 081–084 avec ABt 181–184 ; réserve RBDe 561 174', 'Länge': 'env. 50 m', 'Gewicht': 'env. 116 t (automotrice 70 t)', 'Sitzplätze': '24 en 1re, 96 en 2e classe', 'Anzahl': '4 rames', 'Ausmusterung': 'octobre 2025' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['L’ancienne Südostbahn a commandé en 1993 quatre NPZ de type CFF ; elles sont entrées en service en 1995. Une rame se compose d’une automotrice RBDe et d’une voiture-pilote ABt. Plus tard, les automotrices ont été renumérotées de RBDe 566 en RBDe 561.', 'En 2014, le SOB a acheté aux CFF la RBDe 561 174 comme réserve. Elle est allée à l’association MThB-NPZ en automne 2024. La RBDe 561 082 avec l’ABt 182 a été reprise fin 2025 par une association de conservation.'] },
      { titel: 'Utilisation et technique', p: ['Les NPZ Süd ont d’abord circulé sur des lignes régionales comme Wädenswil–Einsiedeln, Rapperswil–Samstagern et Biberbrugg–Arth-Goldau, puis aussi dans le Voralpen-Express. Elles ont ensuite repris la S27 Siebnen-Wangen–Ziegelbrücke jusqu’à leur retrait en octobre 2025.', 'Une rame mesure env. 50 m, pèse env. 116 t, développe 1650 kW et roule jusqu’à 140 km/h. L’automotrice seule pèse 70 t.'] },
      { titel: 'Équipement et accessibilité', liste: ['120 places : 24 en 1re et 96 en 2e classe', 'Portes pneumatiques', 'Pas de climatisation', 'Pas d’accès à plancher surbaissé'],
        p: ['Comme les rames ont des marches et que la loi sur l’égalité pour les handicapés exige un accès sans marche, une transformation aurait coûté trop cher. C’était une raison importante de la fin.'] }
    ],
  bilder: ['RBDe 561 083 avec le Voralpen-Express à Rapperswil (2013)', 'NPZ Süd à Ziegelbrücke (2022)', 'Intérieur de la RBDe 561 082 (2013)']
});
uebZug('sob-abt-npz-sued', {
  typ: 'Voiture-pilote des NPZ Süd (historique)',
  text: ['Les voitures-pilotes ABt 181–184 formaient les NPZ Süd avec les automotrices RBDe 561. Depuis la cabine de la voiture-pilote, on conduit le train sans déplacer l’automotrice.', 'Elles ont circulé de 1995 à octobre 2025.'],
  kennzahlen: [['4', 'voitures-pilotes (181–184)'], ['140 km/h', 'dans la rame NPZ'], ['1995', 'construction'], ['2025', 'fin du service']],
  daten: { 'Bauart': 'voiture-pilote avec cabine et compartiment voyageurs', 'Höchstgeschwindigkeit': '140 km/h dans la rame NPZ', 'Ausmusterung': 'octobre 2025' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Le SOB a reçu les quatre voitures-pilotes en 1995 avec les quatre automotrices des NPZ Süd. Auparavant, elles portaient les numéros 901–904.', 'L’ABt 182 a été reprise fin 2025 par une association de conservation, avec la RBDe 561 082.'] },
      { titel: 'Utilisation et technique', p: ['La voiture-pilote forme une extrémité de la rame réversible. Par une ligne de commande, le mécanicien conduit depuis là l’automotrice à l’autre bout du train. La voiture n’a pas de propulsion propre.', 'Les voitures ont circulé sur les mêmes lignes que les NPZ Süd, en dernier sur la S27 Siebnen-Wangen–Ziegelbrücke.'] },
      { titel: 'Équipement et accessibilité', liste: ['Places en 1re et 2e classe', 'Cabine de conduite à une extrémité', 'Portes pneumatiques', 'Pas d’accès à plancher surbaissé, pas de climatisation'] }
    ],
  bilder: ['NPZ Süd avec automotrice et voiture-pilote ABt à Ziegelbrücke (2022)']
});
uebZug('sob-rbde-566', {
  typ: 'NPZ de chemin de fer privé du Bodensee-Toggenburg (historique)',
  text: ['Les six NPZ Ost provenaient du chemin de fer Bodensee-Toggenburg (BT). Avec la fusion du BT et de l’ancien SOB en 2001, elles ont rejoint la nouvelle Südostbahn.', 'Elles ont circulé en trafic régional en Suisse orientale jusqu’en 2019/2020.'],
  kennzahlen: [['6', 'automotrices (071–076)'], ['1981–1983', 'construction'], ['2001', 'au nouveau SOB'], ['2019/20', 'fin du service']],
  daten: { 'Bauart': 'rame réversible avec automotrice, voiture intermédiaire et voiture-pilote', 'Anzahl': '6 automotrices' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Au début des années 1980, le BT a acheté six NPZ de chemin de fer privé avec les automotrices RBDe 4/4 71–76, des voitures intermédiaires B et des voitures-pilotes ABt 171–176. Elles ont été construites par FFA, SIG et BBC.', 'Les rames portaient d’abord les couleurs vert et crème du BT, plus tard rouge et gris. Avec la fusion de 2001, elles sont passées au SOB comme RBDe 566 071–076.'] },
      { titel: 'Utilisation et technique', p: ['Les rames assuraient le trafic régional sur l’ancien réseau BT entre Romanshorn, Saint-Gall, Herisau, Wattwil et Nesslau. Plus tard, des voitures de ces rames ont aussi circulé dans le Voralpen-Express.', 'Avec les nouveaux FLIRT, elles sont devenues superflues ; le service régulier a pris fin en 2019/2020. Certains véhicules sont allés à des projets de conservation ou ont servi de donneurs de pièces.'] },
      { titel: 'Équipement et accessibilité', liste: ['Longueur du train adaptable avec voitures intermédiaires', 'Places en 1re et 2e classe', 'Compartiment à bagages dans l’automotrice (lettre D)', 'Accès surélevés avec marches'] }
    ],
  bilder: ['RBDe 566 072 avec logo BT à Herisau (2003)', 'RBDe 566 072, B 374 et ABt 172 à Herisau (2003)']
});
uebZug('sob-abt-npz-ost', {
  typ: 'Voiture-pilote des rames réversibles du BT (historique)',
  text: ['Les voitures-pilotes ABt 171–176 faisaient partie des six NPZ Ost du chemin de fer Bodensee-Toggenburg. Elles formaient une extrémité de la rame réversible.', 'Leur service a pris fin avec les NPZ Ost en 2019/2020.'],
  kennzahlen: [['6', 'voitures-pilotes (171–176)'], ['1982', 'construction'], ['sans', 'propulsion propre'], ['2019/20', 'fin du service']],
  daten: { 'Bauart': 'voiture-pilote avec cabine et compartiment voyageurs' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Le BT a acheté les six voitures-pilotes en 1982 avec ses NPZ. En 2001, elles sont passées au SOB avec la fusion. Certaines voitures sont allées plus tard à d’autres comme donneurs de pièces ou pour la conservation.'] },
      { titel: 'Utilisation et technique', p: ['Par la ligne de commande, le mécanicien conduit depuis la voiture-pilote l’automotrice à l’autre bout du train. Ainsi, le train peut changer de sens sans manœuvre.', 'Les voitures circulaient en trafic régional sur l’ancien réseau BT en Suisse orientale.'] },
      { titel: 'Équipement et accessibilité', liste: ['Places en 1re et 2e classe', 'Cabine de conduite à une extrémité', 'Accès surélevés avec marches'] }
    ],
  bilder: ['ABt 172 avec logo SOB et B 374 à Herisau (2003)']
});
uebZug('sob-revvivo', {
  name: 'Revvivo', beiname: 'voitures',
  typ: 'Voitures modernisées du Voralpen-Express (historique)',
  text: ['Revvivo était le nom des voitures rénovées de l’ancien Voralpen-Express. Une locomotive les tirait entre Saint-Gall et Lucerne sur la ligne du SOB.', 'Dès 2019, le Traverso a remplacé ces trains remorqués.'],
  kennzahlen: [['3', 'types : A, B, BR'], ['1997–2000', 'transformation'], ['sans', 'propulsion propre'], ['2019/20', 'remplacées']],
  daten: { 'Bauart': 'voitures voyageurs modernisées', 'Wagenarten': 'A (1re classe), B (2e classe), BR (bistro)', 'Fahrzeugnummern': 'notamment A 520–522, B 800–805 et 808–809, BR 771' },
  specNote: 'Les numéros A 711–718, B 721–734 et BR 741–747 du dossier n’ont pas pu être confirmés. Les numéros ici suivent Wikipédia.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Revvivo n’était pas une nouvelle voiture mais un programme de transformation : de 1997 à 2000, le SOB a rénové des voitures plus anciennes de diverses origines. Il y avait des voitures de 1re classe (A), de 2e classe (B) et des voitures-bistro (BR).', 'Après la fin dans le Voralpen-Express, des voitures sont allées notamment au Train des mouettes en France et à MÁV Nosztalgia en Hongrie.'] },
      { titel: 'Utilisation et technique', p: ['Les voitures circulaient dans le Voralpen-Express Saint-Gall–Rapperswil–Arth-Goldau–Lucerne. Elles étaient tirées par des Re 446 et Re 456, plus tard aussi entre deux automotrices NPZ.', 'Avec le Traverso, ces trains ont pris fin en 2019 et 2020.'] },
      { titel: 'Équipement et accessibilité', liste: ['Intérieurs rénovés', 'Partiellement climatisées', 'Voiture-bistro BR', 'Accès surélevés avec marches'] }
    ],
  bilder: ['Voralpen-Express avec voitures Revvivo entre Biberbrugg et Altmatt (2014)', 'Voitures Revvivo entre deux automotrices NPZ à Biberbrugg (2013)']
});
uebZug('sob-ew-iv', {
  typ: 'Voitures unifiées IV climatisées du Voralpen-Express (historique)',
  text: ['Au début des années 1990, le Voralpen-Express a reçu une nouvelle image, avec notamment des voitures unifiées IV (VU IV) climatisées appartenant au SOB.', 'En 2000, le SOB a vendu les quatre voitures aux CFF.'],
  kennzahlen: [['4', 'voitures'], ['1991', 'livraison'], ['sans', 'propulsion propre'], ['2000', 'aux CFF']],
  daten: { 'Bauart': 'voiture unifiée IV, voiture voyageurs', 'Anzahl': '4 voitures', 'Verbleib': 'vendues aux CFF en 2000' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Le SOB possédait une voiture de 1re classe (A 120) et trois de 2e classe (B 250–252). Elles ont été livrées en 1991 et vendues aux CFF en 2000.', 'Toutes les VU IV du Voralpen-Express n’appartenaient pas au SOB ; seules ces quatre voitures comptent comme matériel SOB.'] },
      { titel: 'Utilisation et technique', p: ['Les voitures circulaient dans le Voralpen-Express entre Lucerne et le lac de Constance, tirées par une locomotive. Plus tard sont venues les voitures Revvivo, puis le Traverso.'] },
      { titel: 'Équipement et accessibilité', liste: ['Climatisation', 'Voitures de 1re et 2e classe', 'Accès surélevés avec marches'] }
    ]
});
uebZug('sob-ew-i-ii', {
  beiname: 'SOB et BT',
  typ: 'Anciennes voitures unifiées au SOB et au BT (historique)',
  text: ['Avant l’arrivée des automotrices modernes, le SOB et le BT ont longtemps circulé avec des voitures unifiées I et II. Ces voitures étaient répandues dans toute la Suisse.', 'Aujourd’hui, le SOB n’exploite plus de service régulier avec ces voitures.'],
  kennzahlen: [['VU I + II', 'familles de voitures'], ['sans', 'propulsion propre'], ['1435 mm', 'voie normale'], ['SOB + BT', 'chemins de fer']],
  daten: { 'Bauart': 'voitures des familles VU I et VU II', 'Einsatz': 'trains voyageurs remorqués' },
  specNote: 'Les voitures et numéros ne sont pas entièrement documentés. VU I et VU II sont deux types différents ; les valeurs varient selon la voiture.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['VU I et VU II sont deux familles de voitures unifiées suisses. Le SOB et le BT en possédaient, certaines transformées ou avec des tâches particulières, par exemple comme voitures-pilotes.', 'Aucune liste complète des voitures du SOB et du BT n’a été publiée.'] },
      { titel: 'Utilisation et technique', p: ['Les voitures circulaient en trafic régional et direct et dans les débuts du Voralpen-Express, tirées par des locomotives ou des automotrices. Souvent, différents types de voitures roulaient dans le même train.'] },
      { titel: 'Équipement et accessibilité', liste: ['Voitures de 1re et 2e classe selon le type', 'Accès surélevés avec marches'], p: ['L’équipement et les dimensions varient selon le type et la transformation.'] }
    ],
  bilder: ['Voiture SOB B 50 85 20-35 753-6 à Rapperswil (2014)']
});
uebZug('sob-bde-576', {
  typ: 'Automotrices puissantes du SOB et du BT (historique)',
  text: ['Dès 1959, les puissantes BDe 4/4 ont tiré les rames réversibles et les trains directs du SOB et du BT sur les lignes raides des Préalpes. En plus du compartiment voyageurs, elles avaient un compartiment à bagages.', 'Dès 2007, les FLIRT les ont remplacées peu à peu.'],
  kennzahlen: [['1959', 'première automotrice'], ['SOB 80–87', 'numéros ancien SOB'], ['BT 50–53', 'numéros BT'], ['dès 2007', 'remplacées']],
  daten: { 'Bauart': 'automotrice électrique avec 2e classe et compartiment à bagages', 'Fahrzeugnummern': 'SOB 80–87, BT 50–53 ; plus tard BDe 576 048–059', 'Baujahre': '1959–1979, plusieurs séries' },
  specNote: 'Les séries diffèrent par la face avant et la technique. Il n’y a donc pas de puissance commune.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['La première automotrice était l’ABe 4/4 71 du SOB de 1959 ; en 1979, elle a été transformée en BDe 4/4 80. Le SOB y a ajouté les BDe 4/4 81–87 et le BT les BDe 4/4 50–53. Plus tard, elles ont reçu les numéros BDe 576 048–059.', 'Certaines automotrices ont été conservées ou ont changé de propriétaire. Le SOB a gardé la BDe 576 058 comme réserve technique à Samstagern.'] },
      { titel: 'Utilisation et technique', p: ['Les BDe 4/4 étaient construites pour des trains lourds sur les lignes raides de la « Direkte Linie ». Elles circulaient en trafic régional, dans le prédécesseur du Voralpen-Express et en renfort sur les tronçons raides.', 'Dès 2007, les FLIRT puis les Traverso les ont remplacées au quotidien.'] },
      { titel: 'Équipement et accessibilité', liste: ['Compartiment voyageurs de 2e classe', 'Compartiment à bagages', 'Accès surélevés avec marches'] }
    ],
  bilder: ['BDe 576 049 à Biberbrugg (2007)', 'BDe 4/4 53 du BT près de Sattel (1983)', 'BDe 576 052 « Krummenau » du BT à Nesslau (1998)', 'ABe 4/4 71 à l’état de livraison en 1959, plus tard BDe 4/4 80']
});
uebZug('sob-abe-4-4', {
  typ: 'Automotrices électriques de l’ancien SOB de 1939/40 (historique)',
  text: ['Avec l’électrification, l’ancien SOB a acheté en 1939 et 1940 huit automotrices électriques : les BCFZe 4/4 1–4 et les CFZe 4/4 11–14. Après transformation, beaucoup se sont appelées ABe 4/4.', 'L’automotrice 5 est conservée jusqu’à aujourd’hui.'],
  kennzahlen: [['8', 'automotrices'], ['1939/40', 'livraison'], ['80 km/h', 'vitesse maximale'], ['735 kW', 'puissance unihoraire']],
  daten: { 'Bauart': 'automotrice électrique Bo’Bo’', 'Frühere Bezeichnung': 'BCFZe 4/4 1–4 et CFZe 4/4 11–14', 'Hersteller': 'SLM avec SIG ou SWS ; MFO, BBC, SAAS', 'Länge': '19,6 m', 'Gewicht': '44 t, 47 t après modernisation', 'Leistung': '735 kW (puissance unihoraire)', 'Sitzplätze': '9 (plus tard 6) en 1re, 44 en 2e classe' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Pour l’électrification, SLM, SIG ou SWS ainsi que MFO, BBC et SAAS ont livré en 1939 et 1940 huit automotrices en deux versions : BCFZe 4/4 1–4 et CFZe 4/4 11–14. Les lettres viennent de l’ancien système de classes, bagages et poste.', 'Le 26 juillet 1946, les 3 et 12 se sont heurtées près de Bennau. La 12 a ensuite été transformée en BCe 4/4 5 ; comme automotrice 5, elle est conservée depuis 2008 par l’association Historischer Triebwagen 5. Les 11 et 13 sont allées au Sensetalbahn. Les 1, 2, 4 et 6 (ex 14) ont été modernisées de 1978 à 1982 et ont ensuite circulé comme ABe 4/4 14, 13, 11 et 12. L’ABe 4/4 11 sert de cinéma de tunnel depuis 2001.'] },
      { titel: 'Utilisation et technique', p: ['Les automotrices assuraient des trains voyageurs et mixtes sur les lignes électrifiées de l’ancien SOB.', 'Elles mesurent 19,6 m, développent 735 kW et roulent jusqu’à 80 km/h. À l’origine elles pesaient 44 t, après la modernisation 47 t.'] },
      { titel: 'Équipement et accessibilité', liste: ['À l’origine 9 places en 1re et 44 en 2e classe, après modernisation 6 en 1re classe', 'À l’origine avec compartiment bagages et poste', 'Accès surélevés avec marches'] }
    ],
  bilder: ['ABe 4/4 5 avec un train voyageurs à Biberbrugg (1988)', 'ABe 4/4 12 à Biberbrugg (1992)', 'Ancienne ABe 4/4 11 comme cinéma de tunnel à Gänsbrunnen (2017)']
});
uebZug('sob-de-4-4', {
  beiname: '21 et 22',
  typ: 'Automotrices fourgons au passé CFF (historique)',
  text: ['L’ancien SOB a utilisé deux automotrices fourgons électriques, les De 4/4 21 et 22. Elles venaient des CFF, où elles étaient des RFe 4/4.', 'La 21 est allée à Classic Rail en 1994, la 22 a été démolie en 1997.'],
  kennzahlen: [['2', 'automotrices'], ['1940', 'construction d’origine'], ['90 km/h', 'vitesse maximale'], ['ex CFF', 'RFe 4/4']],
  daten: { 'Bauart': 'automotrice fourgon électrique', 'Herkunft': 'CFF RFe 4/4 603 et 602', 'Fahrzeugnummern': 'De 4/4 21 et 22', 'In Betrieb seit': '1940 (aux CFF)' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les automotrices ont été construites en 1940 comme RFe 4/4 des CFF. Le SOB en a repris deux : l’ancienne 603 comme De 4/4 21 et la 602 comme De 4/4 22.', 'La 21 est allée à Classic Rail en 1994, la 22 a été démolie en 1997.'] },
      { titel: 'Utilisation et technique', p: ['Les De 4/4 transportaient des bagages et tiraient d’autres voitures au SOB. Elles avaient quatre essieux moteurs et roulaient jusqu’à 90 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Grand compartiment à bagages', 'Pas de compartiment voyageurs'], p: ['Comme automotrices fourgons, elles ne transportaient pas de voyageurs.'] }
    ],
  bilder: ['De 4/4 22 à Einsiedeln (1985)', 'De 4/4 22 en livrée rouge à Samstagern (1983)']
});
uebZug('bt-be-4-4', {
  typ: 'Locomotive électrique du chemin de fer Bodensee-Toggenburg (historique)',
  text: ['Dès 1931, les six Be 4/4 du chemin de fer Bodensee-Toggenburg ont tiré des trains voyageurs et marchandises, aussi sur la « Direkte Linie » par Wattwil et Rapperswil.', 'La Be 4/4 11 est conservée comme locomotive historique.'],
  kennzahlen: [['6', 'locomotives (11–16)'], ['80 km/h', 'vitesse maximale'], ['66 t', 'poids'], ['1931', 'mise en service']],
  daten: { 'Hersteller': 'SLM (partie mécanique), SAAS (partie électrique)', 'Länge': '12,00 m', 'Leistung': 'env. 1200 kW (puissance unihoraire)' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Le BT a acheté six locomotives en 1931 et 1932. SLM a construit la partie mécanique, SAAS l’équipement électrique.', 'Quelques locomotives ont encore connu la fusion dans le nouveau SOB en 2001. L’ancienne Be 416 011 a été vendue en 2015.'] },
      { titel: 'Utilisation et technique', p: ['Les Be 4/4 ont longtemps tiré des trains voyageurs sur la « Direkte Linie » ainsi que des trains marchandises. Avec les nouvelles automotrices et les Re 456, elles ont perdu leurs tâches principales et sont restées pour la réserve et les courses spéciales.', 'La locomotive mesure 12,00 m, pèse 66 t et roule jusqu’à 80 km/h. Conçue pour les rampes, elle était plus tard trop lente pour les trains rapides.'] },
      { titel: 'Équipement et accessibilité', liste: ['Quatre essieux à entraînement individuel', 'Deux cabines de conduite', 'Pas de compartiment voyageurs'] }
    ],
  bilder: ['Be 4/4 11 avec le train d’exposition « 75 ans du BT » à Saint-Gall St. Fiden (1985)', 'Be 4/4 11 historique et Te 216 035 à Herisau (2012)']
});
uebZug('bt-be-3-4', {
  typ: 'Automotrice historique BT 43 du chemin de fer Bodensee-Toggenburg',
  text: ['Le « Tino » est l’automotrice 43 du chemin de fer Bodensee-Toggenburg. Elle a été transformée plusieurs fois et a donc porté plusieurs désignations.', 'En 2001, le SOB l’a cédée à Eurovapor.'],
  kennzahlen: [['1', 'automotrice (BT 43)'], ['1938', 'construction'], ['1982', 'transformation'], ['2001', 'à Eurovapor']],
  daten: { 'Bauart': 'automotrice électrique', 'Verbleib': 'à Eurovapor en 2001' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['L’automotrice a été construite en 1938 comme BCFe 2/4. Des transformations ont changé le nombre d’essieux moteurs ; elle est devenue BCFe 3/4, puis Be 3/4. En 1982, elle a été transformée.', 'En 2001, le SOB a cédé le « Tino » à Eurovapor.'] },
      { titel: 'Utilisation et technique', p: ['L’automotrice assurait des trains régionaux sur le réseau BT, puis des courses historiques, par exemple comme « Amor-Express » près de Wattwil. Elle fait partie des rares automotrices à voie normale à quatre essieux dont trois seulement sont moteurs.'] },
      { titel: 'Équipement et accessibilité', liste: ['Compartiment voyageurs', 'Accès surélevés avec marches'], p: ['D’autres valeurs techniques ne sont pas établies avec certitude sans fiche de la transformation.'] }
    ],
  bilder: ['BT 43 comme « Amor-Express » près de Wattwil (2010)', 'BT 43 à Saint-Gall (2013)']
});
uebZug('sob-re-446', {
  typ: 'Locomotive électrique du Voralpen-Express (historique)',
  text: ['Les quatre Re 446 étaient à l’origine des prototypes des CFF, les Re 4/4 IV 10101–10104. Au SOB, elles sont devenues les locomotives bien connues du Voralpen-Express.', 'En 2019, le SOB les a vendues toutes les quatre à Eisenbahndienstleister GmbH (EDG).'],
  kennzahlen: [['4', 'locomotives'], ['160 km/h', 'vitesse maximale'], ['4960 kW', 'puissance'], ['1982', 'construction']],
  daten: { 'Fahrzeugnummern': '445–448, dès 2001 Re 446 015–018', 'Länge': '15,8 m', 'Leistung': 'env. 4960 kW', 'In Betrieb seit': '1982 (aux CFF)', 'Verbleib': 'vendues à EDG en 2019' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['En 1982, SLM et BBC ont construit quatre prototypes Re 4/4 IV pour les CFF. De 1994 à 1996, ils sont passés à l’ancien SOB, en échange de ses quatre Re 4/4 III.', 'Au SOB, elles portaient d’abord les numéros 445–448, après la fusion de 2001 Re 446 015–018. Avec les Traverso, elles sont devenues superflues et sont allées à EDG en 2019.'] },
      { titel: 'Utilisation et technique', p: ['Les Re 446 tiraient le Voralpen-Express entre Lucerne et Saint-Gall, avec diverses voitures et voitures-pilotes.', 'La locomotive mesure 15,8 m, pèse 80 t, développe env. 4960 kW et roule jusqu’à 160 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Pas de compartiment voyageurs'], p: ['Comme locomotive, la Re 446 n’avait pas de compartiment voyageurs ; l’accessibilité dépendait des voitures tirées.'] }
    ],
  bilder: ['Re 446 017 et 015 avec le Voralpen-Express près de Küssnacht (2015)', 'Re 446 017 avec le Voralpen-Express à Saint-Gall (2017)', 'Re 446 avec le Voralpen-Express au tunnel du Ricken (2016)']
});
uebZug('sob-re-456', {
  typ: 'Locomotive électrique du BT et du SOB (historique)',
  text: ['Les six Re 456 sont arrivées en 1987 au chemin de fer Bodensee-Toggenburg comme locomotives modernes. Plus tard, au SOB, elles ont marqué l’image du Voralpen-Express.', 'En 2021, le SOB a vendu ses six dernières Re 456.'],
  kennzahlen: [['6', 'locomotives propres'], ['130 km/h', 'vitesse maximale'], ['3200 kW', 'puissance continue'], ['1987', 'mise en service']],
  daten: { 'Bauart': 'locomotive électrique Bo’Bo’ à convertisseurs', 'Länge': '16,6 m', 'Gewicht': 'env. 68 t', 'Leistung': '3200 kW (puissance continue)', 'Verbleib': 'vendues en 2021' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SLM et BBC ont construit les six locomotives en 1987 pour le BT comme Re 4/4 91–96. En 2001, les six sont passées au nouveau SOB comme Re 456 091–096. De 2002 à 2011, le SOB a en plus loué les Re 456 142 et 143, qui ne lui appartenaient pas.', 'En 2021, le SOB a vendu ses six locomotives : 091 et 092 au SZU, 094 et 095 à des conservateurs de véhicules historiques, 093 et 096 à un investisseur.'],
        tabelle: { kopf: ['Numéro', 'Nom', 'Destination 2021'], zeilen: [['091', 'Voralpen-Express', 'SZU'], ['092', 'Siemens', 'SZU'], ['093', 'Sersa', 'investisseur'], ['094', 'Vögele Shoes', 'historique'], ['095', '100 Jahre Romanshorn-Uznach', 'historique'], ['096', 'Voralpen-Express', 'investisseur']] } },
      { titel: 'Utilisation et technique', p: ['Les Re 456 tiraient des trains voyageurs et le Voralpen-Express, d’abord avec diverses voitures, plus tard avec les voitures Revvivo. Leur grand effort de traction et la technique moderne à convertisseurs aidaient sur les lignes raides du BT et du SOB.', 'La locomotive mesure 16,6 m, pèse env. 68 t, développe 3200 kW en continu et roule jusqu’à 130 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Pas de compartiment voyageurs'], p: ['Comme locomotive, la Re 456 n’avait pas de compartiment voyageurs ; l’accessibilité dépendait des voitures tirées.'] }
    ],
  bilder: ['Deux Re 456 avec le Voralpen-Express sur le viaduc du Weissenbach près de Degersheim (2014)', 'Re 456 096 avec le Voralpen-Express à Herisau (2019)', 'Re 456 en livrée « 100 ans du Rickenbahn » entre Immensee et Arth-Goldau (2010)', 'Re 456 avec le Voralpen-Express entre Blumenau et Schmerikon (2007)']
});
uebZug('sob-re-4-4-iii', {
  typ: 'Locomotive électrique pour les rampes raides de l’ancien SOB (historique)',
  text: ['L’ancien SOB avait besoin de beaucoup d’effort de traction pour ses lignes raides. En 1966, la Re 4/4 III 41 a été construite pour lui ; plus tard, trois autres sont venues des CFF.', 'De 1994 à 1996, le SOB a échangé les quatre locomotives contre les quatre Re 4/4 IV des CFF.'],
  kennzahlen: [['4', 'locomotives (41–44)'], ['125 km/h', 'vitesse maximale'], ['env. 80 t', 'poids'], ['1994–96', 'aux CFF']],
  daten: { 'Fahrzeugnummern': '41–44 (42–44 ex CFF 11351–11353)', 'Gewicht': 'env. 80 t', 'In Betrieb seit': '1966 (no 41)', 'Verbleib': 'échangées aux CFF 1994–1996' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['La Re 4/4 III 41 a été construite spécialement pour le SOB en 1966 et diffère un peu de la série CFF. Les 42–44 ont été construites en 1970 comme CFF 11351–11353 et sont arrivées d’occasion au SOB de 1983 à 1985.', 'De 1994 à 1996, le SOB a échangé les quatre locomotives contre les quatre prototypes Re 4/4 IV des CFF, les futures Re 446. De retour aux CFF, les locomotives ont rejoint la série Re 430.'] },
      { titel: 'Utilisation et technique', p: ['Les locomotives tiraient des trains voyageurs et marchandises sur les tronçons raides de l’ancien SOB. Par rapport à la Re 4/4 II, la Re 4/4 III est conçue pour l’effort de traction et donc plus lente : elle roule jusqu’à 125 km/h et pèse env. 80 t.'] },
      { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Pas de compartiment voyageurs'], p: ['Comme locomotive, la Re 4/4 III n’avait pas de compartiment voyageurs ; l’accessibilité dépendait des voitures tirées.'] }
    ]
});
uebZug('sob-ae-476', {
  typ: 'Locomotive électrique d’origine allemande (historique)',
  text: ['Dans les années 1990, l’ancien SOB a acheté cinq locomotives électriques d’occasion de la série allemande 142, anciennement E 42 de la Reichsbahn. Au SOB, elles s’appelaient Ae 476.', 'Toutes sauf une ont été cédées dès 1996.'],
  kennzahlen: [['5', 'locomotives (465–469)'], ['1965–1976', 'construction'], ['1996', 'quatre vendues'], ['2008', 'dernière vendue']],
  daten: { 'Fahrzeugnummern': '465–469 ; la 468 devenue 476 012', 'In Betrieb seit': 'construites 1965–1976', 'Verbleib': '1996 à la LAG, la 468 en 2008 au WAB' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les locomotives ont été construites de 1965 à 1976 pour la Deutsche Reichsbahn et se sont appelées plus tard DB 142. L’ancien SOB en a repris cinq et les a exploitées comme Ae 476 465–469.', 'En 1996, toutes sauf la 468 sont allées à la LAG. La 468 est restée et a circulé après la fusion comme Ae 476 012 ; en 2008, elle est allée au WAB.'] },
      { titel: 'Utilisation et technique', p: ['Les Ae 476 apportaient au SOB un effort de traction supplémentaire. Elles étaient construites pour le système électrique allemand et suisse de 15 kV et 16,7 Hz et ont été adaptées à l’exploitation en Suisse.', 'Comme les locomotives proviennent d’années et de transformations différentes, il n’existe pas de tableau de données uniforme.'] },
      { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Pas de compartiment voyageurs'], p: ['Comme locomotive, l’Ae 476 n’avait pas de compartiment voyageurs ; l’accessibilité dépendait des voitures tirées.'] }
    ],
  bilder: ['Ae 476 468 à Biberbrugg (1999)']
});
uebZug('sob-e-3-3', {
  typ: 'Locomotives à vapeur du chemin de fer Wädenswil–Einsiedeln et de l’ancien SOB (historique)',
  text: ['Les E 3/3 étaient les locomotives à vapeur du chemin de fer Wädenswil–Einsiedeln et de l’ancien SOB. Elles représentent l’époque d’avant l’électrification.', 'Les dernières ont été retirées jusqu’en 1954.'],
  kennzahlen: [['11', 'locomotives'], ['1878', 'première locomotive'], ['C', 'trois essieux couplés'], ['1940–1954', 'retrait']],
  daten: { 'Bauart': 'locomotive-tender à vapeur', 'Hersteller': 'Maschinenfabrik Esslingen (1–4), SLM (5–11)' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['La Maschinenfabrik Esslingen a construit les locomotives 1–4 de 1878 à 1887 pour le chemin de fer Wädenswil–Einsiedeln. Les numéros 5–11 ont été livrés par SLM en 1891.', 'Les machines 1–4 et 5–11 diffèrent dans les détails.'] },
      { titel: 'Utilisation et technique', p: ['Comme courtes locomotives-tender, elles tiraient des trains voyageurs et marchandises sur le premier réseau et faisaient des manœuvres. Elles emportaient l’eau et le charbon sur la locomotive même.', 'L’électrification les a rendues superflues ; elles ont été retirées entre 1940 et 1954.'] },
      { titel: 'Équipement et accessibilité', liste: ['Trois essieux couplés', 'Réserves d’eau et de charbon sur la locomotive', 'Pas de compartiment voyageurs'] }
    ],
  bilder: ['E 3/3 no 1 « Wädensweil » du chemin de fer Wädenswil–Einsiedeln (1878–1890)']
});
uebZug('sob-ed-4-5', {
  beiname: '21 et 22',
  typ: 'Locomotives à vapeur de l’ancien SOB de 1910 (historique)',
  text: ['En 1910, l’ancien SOB a acheté à SLM deux locomotives à vapeur plus puissantes, les Ed 4/5 21 et 22.', 'Elles complétaient les petites E 3/3.'],
  kennzahlen: [['2', 'locomotives (21, 22)'], ['1910', 'construction'], ['4 sur 5', 'essieux moteurs'], ['SLM', 'constructeur']],
  daten: { 'Bauart': 'locomotive à vapeur', 'Fahrzeugnummern': '21 et 22' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SLM a construit les deux locomotives pour le SOB en 1910. Elles portaient les numéros 21 et 22.'] },
      { titel: 'Utilisation et technique', p: ['Avec plus de trafic, les petites E 3/3 ne suffisaient plus pour tous les trains. Les Ed 4/5 tiraient des trains voyageurs et marchandises plus lourds sur les lignes de l’ancien SOB. La désignation 4/5 signifie quatre essieux moteurs sur cinq.', 'Avec l’électrification, elles ont perdu leur rôle.'] },
      { titel: 'Équipement et accessibilité', liste: ['Cinq essieux, dont quatre moteurs', 'Pas de compartiment voyageurs'], p: ['Les dimensions, poids et années de retrait exacts ne sont pas établis avec certitude sans fiche de chaque machine.'] }
    ],
  bilder: ['Ed 4/5 no 21 du SOB']
});
uebZug('sob-am-846', {
  typ: 'Locomotive diesel pour travaux et manœuvres (historique)',
  text: ['Pour de grands renouvellements de voie, l’ancien SOB a acheté en 1990 une puissante locomotive diesel d’occasion. Elle a d’abord circulé comme Am 846 461, puis comme 033.', 'Vers 2010, elle a été retirée et vendue en 2012 à JÜST.'],
  kennzahlen: [['1', 'locomotive'], ['1963', 'construction'], ['1990', 'au SOB'], ['2012', 'vendue']],
  daten: { 'Fahrzeugnummern': 'Am 846 461, plus tard 033', 'In Betrieb seit': 'construite en 1963, au SOB dès 1990', 'Verbleib': 'retirée en 2010, à JÜST en 2012' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Krupp et AEG ont construit la locomotive en 1963. Le SOB l’a achetée en 1990, l’a fait remettre en état et l’a utilisée comme Am 846 461 ; après la fusion, elle s’appelait Am 846 033.', 'Vers 2010, elle a été retirée et vendue en 2012 à JÜST. Les sources donnent des années légèrement différentes.'] },
      { titel: 'Utilisation et technique', p: ['L’Am 846 tirait des trains de travaux, aidait aux renouvellements de voie et faisait des manœuvres. Comme locomotive diesel, elle n’avait pas besoin de ligne de contact, ce qui compte lors de travaux avec la ligne coupée. Elle était bien plus puissante que les petits tracteurs de manœuvre.'] },
      { titel: 'Équipement et accessibilité', liste: ['Propulsion diesel, indépendante de la ligne de contact', 'Pas de compartiment voyageurs'] }
    ],
  bilder: ['Am 846 033 à Samstagern (2005)', 'Am 846 461 à Samstagern (1996)']
});
uebZug('sob-eea-936', {
  beiname: '031 et 032',
  typ: 'Locomotives de manœuvre électriques à trois essieux (historique)',
  text: ['Les deux locomotives de manœuvre Henschel à trois essieux sont arrivées au BT en 1995, puis au SOB avec la fusion. Elles manœuvraient des voitures dans les gares et les ateliers.', 'La 032 a été retirée en 2012, la 031 en 2015.'],
  kennzahlen: [['2', 'locomotives'], ['1966', 'construction'], ['3', 'essieux'], ['2012/2015', 'retrait']],
  daten: { 'Bauart': 'locomotive de manœuvre électrique', 'Frühere Bezeichnung': 'Eea 3/3 31 et 32', 'Fahrzeugnummern': 'Eea 936 031 et 032', 'In Betrieb seit': 'construites en 1966, au BT dès 1995', 'Ausmusterung': '032 en 2012, 031 en 2015' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Henschel et AEG ont construit les deux locomotives en 1966. Le BT les a reprises en 1995 comme Eea 3/3 31 et 32 ; après la fusion, elles s’appelaient Eea 936 031 et 032.', 'La 032 a été retirée en 2012, la 031 en 2015.'] },
      { titel: 'Utilisation et technique', p: ['Les locomotives manœuvraient des voitures dans les gares, ateliers et installations de service. Avec trois essieux et une propulsion électrique, elles convenaient aux manœuvres là où il y a une ligne de contact.'] },
      { titel: 'Équipement et accessibilité', liste: ['Trois essieux', 'Propulsion électrique par la ligne de contact', 'Pas de compartiment voyageurs'] }
    ],
  bilder: ['Eea 936 031 (2008)']
});
uebZug('sob-te-216', {
  beiname: 'tracteurs de manœuvre',
  typ: 'Tracteurs de manœuvre électriques du BT et du SOB',
  text: ['De petits tracteurs de manœuvre électriques déplaçaient des wagons dans les gares, ateliers et voies de garage du BT et du SOB.', 'L’effectif comprenait le Te 212 080 et les Te 216 035–039.'],
  kennzahlen: [['6', 'tracteurs'], ['1941–1966', 'construction'], ['2', 'essieux'], ['250 kW', 'Te 212 080']],
  daten: { 'Bauart': 'tracteur de manœuvre électrique à deux essieux', 'Fahrzeugnummern': 'Te 212 080 (ex BT Te 35), Te 216 035–039', 'In Betrieb seit': 'construits 1941–1966' },
  specNote: 'Les documents actuels du SOB n’indiquent pas si certains tracteurs circulent encore.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les tracteurs Te 216 035–039 ont été construits entre 1941 et 1966. Le Te 212 080 a été mis en service en 1966 comme Te 35 du BT.', 'Selon Wikipédia, le Te 212 080 fait encore partie de l’effectif ; en 2019, il se trouvait à Herisau. Il n’est pas établi avec certitude si les autres sont encore conservés, en état de marche ou vendus.'] },
      { titel: 'Utilisation et technique', p: ['Les tracteurs manœuvraient de petits groupes de wagons dans les gares, ateliers et installations de service, par exemple à Herisau. Ils ne sont pas conçus pour circuler en ligne.', 'Le Te 212 080 développe au maximum 250 kW. Puissance, poids et vitesse des Te 216 diffèrent.'] },
      { titel: 'Équipement et accessibilité', liste: ['Deux essieux', 'Propulsion électrique par la ligne de contact', 'Pas de compartiment voyageurs'] }
    ],
  bilder: ['Te 212 080 à Herisau (2019)', 'Te 216 035 à côté de la Be 4/4 11 à Herisau (2012)']
});
uebZug('sob-tm-236', {
  typ: 'Tracteurs diesel de manœuvre et de travaux (historique)',
  text: ['Sous les noms Tm III puis Tm 236, le SOB et le BT avaient divers petits tracteurs diesel. Ce n’était pas une série uniforme : ils venaient de plusieurs constructeurs.', 'Aujourd’hui, les quatre Robel assurent la plupart des travaux d’entretien.'],
  kennzahlen: [['1958–1992', 'construction'], ['diesel', 'propulsion'], ['2', 'essieux (le plus souvent)'], ['dès 2013', 'vendus']],
  daten: { 'Bauart': 'tracteur diesel, le plus souvent à deux essieux', 'Hersteller': 'selon le véhicule RACO, Jung, Stadler, SLM et autres', 'Fahrzeugnummern': 'notamment Tm 236 001–002, 004–011 et 432', 'In Betrieb seit': 'construits 1958–1992', 'Einsatz': 'manœuvres, travaux, déneigement' },
  specNote: 'Comme plusieurs constructeurs et types en font partie, il n’existe pas de valeur commune de puissance ou de poids.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les tracteurs provenaient de divers achats et reprises, construits entre 1958 et 1992. On y trouvait les tracteurs 1 et 2 du BT, les futurs Tm 236 004–007 et un tracteur Jung de la Deutsche Bundesbahn qui portait au SOB le numéro 34, puis Tm 236 008.', 'Beaucoup ont été vendus : le 011 en 2013, le 006 en 2014, le 002 en 2015 au Sursee-Triengen-Bahn, les 004 et 005 en 2016.'] },
      { titel: 'Utilisation et technique', p: ['Les tracteurs manœuvraient, tiraient et poussaient des wagons de service lors des travaux et déneigeaient avec des équipements supplémentaires. Ils étaient particulièrement utiles sur les voies de raccordement et de garage et quand la ligne de contact était coupée.'] },
      { titel: 'Équipement et accessibilité', liste: ['Propulsion diesel, indépendante de la ligne de contact', 'En partie avec lame chasse-neige', 'Pas de compartiment voyageurs'] }
    ],
  bilder: ['Tm 236 002 avec lame chasse-neige à Herisau (2012)', 'Tm 236 005 à Herisau (2009)', 'Tm 4 du BT, plus tard Tm 236 004, à Herisau (2002)', 'Tm 236 001 à Herisau (2012)']
});
uebZug('sob-xtmas', {
  typ: 'Véhicules de service polyvalents Windhoff (historique)',
  text: ['En 2010, le SOB a acquis deux véhicules polyvalents Windhoff pour des travaux d’infrastructure.', 'Dès 2014, il a vendu les deux véhicules à KUMA.'],
  kennzahlen: [['2', 'véhicules (005, 006)'], ['2010', 'acquisition'], ['2014', 'vente'], ['Windhoff', 'constructeur']],
  daten: { 'Bauart': 'véhicule de service polyvalent (MPV)', 'Fahrzeugnummern': '005 et 006', 'Verbleib': 'vendus à KUMA en 2014' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['En 2010, le SOB a acheté deux véhicules polyvalents Windhoff numérotés 005 et 006. En 2014, les deux sont allés à KUMA. Ils ne figurent plus dans l’inventaire actuel du SOB.'] },
      { titel: 'Utilisation et technique', p: ['Un véhicule polyvalent (MPV) est automoteur et porte selon la mission différentes superstructures pour des travaux sur la voie et la ligne de contact. Aujourd’hui, ce sont les quatre Robel qui assurent ces tâches au SOB.'] },
      { titel: 'Équipement et accessibilité', liste: ['Propulsion propre', 'Superstructures selon la mission', 'Pas de compartiment voyageurs'] }
    ]
});

/* cartes « Où circule-t-il ? » */
uebEinsatz({
  'sob-traverso': 'Comme Voralpen-Express Saint-Gall–Rapperswil–Arth-Goldau–Lucerne, comme Treno Gottardo de Bâle et Zurich par la ligne de faîte du Gothard jusqu’à Locarno, comme Aare Linth Berne–Zurich–Coire et comme Alpenrhein-Express Saint-Gall–Coire.',
  'sob-flirt3': 'Sur les lignes S-Bahn et régionales du SOB, par exemple S4 Uznach–Wattwil–Saint-Gall–Sargans, S6 Rapperswil–Glaris–Schwanden, S13 Wädenswil–Einsiedeln et S40 Einsiedeln–Rapperswil. L’attribution des rames change avec l’horaire et les roulements.',
  'sob-flirt-1': 'Sur les lignes S-Bahn et régionales du SOB, par exemple S4 Uznach–Wattwil–Saint-Gall–Sargans, S6 Rapperswil–Glaris–Schwanden, S13 Wädenswil–Einsiedeln et S40 Einsiedeln–Rapperswil. L’attribution des rames change avec l’horaire et les roulements.',
  'sob-flirt-2': 'Sur les lignes S-Bahn et régionales du SOB, par exemple S4 Uznach–Wattwil–Saint-Gall–Sargans, S6 Rapperswil–Glaris–Schwanden, S13 Wädenswil–Einsiedeln et S40 Einsiedeln–Rapperswil. L’attribution des rames change avec l’horaire et les roulements.',
  'sob-tm-234': 'Surtout sur le réseau du SOB. Aussi ailleurs pour d’autres chemins de fer, par exemple à l’aéroport de Zurich et à l’Uetliberg.',
  'sob-dienstwagen': 'Pour les chantiers et l’entretien sur le réseau du SOB.',
  'sob-rbde-561': 'Autrefois sur Wädenswil–Einsiedeln, Rapperswil–Samstagern et Biberbrugg–Arth-Goldau, puis dans le Voralpen-Express. En dernier, jusqu’en octobre 2025, sur la S27 Siebnen-Wangen–Ziegelbrücke.',
  'sob-abt-npz-sued': 'Avec les NPZ Süd sur les lignes de l’ancien SOB, en dernier jusqu’en octobre 2025 sur la S27 Siebnen-Wangen–Ziegelbrücke.',
  'sob-rbde-566': 'Autrefois en trafic régional sur le réseau BT entre Romanshorn, Saint-Gall, Herisau, Wattwil et Nesslau.',
  'sob-abt-npz-ost': 'Autrefois avec les NPZ Ost en trafic régional sur le réseau BT en Suisse orientale.',
  'sob-revvivo': 'Autrefois dans le Voralpen-Express Saint-Gall–Rapperswil–Arth-Goldau–Lucerne.',
  'sob-ew-iv': 'Autrefois dans le Voralpen-Express entre Lucerne, Saint-Gall et Romanshorn.',
  'sob-ew-i-ii': 'Autrefois dans des trains remorqués sur les lignes du SOB et du BT.',
  'sob-bde-576': 'Autrefois en trafic régional et direct du SOB et du BT, aussi sur la « Direkte Linie » Romanshorn–Saint-Gall–Rapperswil–Arth-Goldau.',
  'sob-abe-4-4': 'Autrefois sur les lignes électrifiées de l’ancien SOB entre Rapperswil, Arth-Goldau, Wädenswil et Einsiedeln.',
  'sob-de-4-4': 'Autrefois pour le trafic des bagages sur les lignes de l’ancien SOB.',
  'bt-be-4-4': 'Autrefois en tête de trains voyageurs et marchandises sur le réseau BT et sur la « Direkte Linie » par Wattwil jusqu’à Rapperswil.',
  'bt-be-3-4': 'Autrefois en trafic régional sur le réseau BT, plus tard pour des courses historiques, par exemple près de Wattwil.',
  'sob-re-446': 'Autrefois en tête du Voralpen-Express entre Lucerne et Saint-Gall.',
  'sob-re-456': 'Autrefois en tête de trains voyageurs du BT et du Voralpen-Express entre Lucerne, Saint-Gall et Romanshorn.',
  'sob-re-4-4-iii': 'Autrefois en tête de trains voyageurs et marchandises sur les lignes raides de l’ancien SOB.',
  'sob-ae-476': 'Autrefois comme traction supplémentaire sur les lignes de l’ancien SOB.',
  'sob-e-3-3': 'Autrefois sur le chemin de fer Wädenswil–Einsiedeln et le réseau de l’ancien SOB.',
  'sob-ed-4-5': 'Autrefois en tête de trains plus lourds sur les lignes de l’ancien SOB.',
  'sob-am-846': 'Autrefois en tête de trains de travaux et en manœuvre sur le réseau du SOB, par exemple à Samstagern.',
  'sob-eea-936': 'Autrefois en manœuvre dans les gares et ateliers du BT et du SOB.',
  'sob-te-216': 'En manœuvre dans les gares et ateliers, par exemple à Herisau.',
  'sob-tm-236': 'Autrefois en manœuvre et pour les travaux sur le réseau du SOB, souvent à Herisau.',
  'sob-xtmas': 'De 2010 à 2014 pour des travaux d’infrastructure sur le réseau du SOB.'
});
