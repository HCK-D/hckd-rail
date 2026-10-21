/* Français – CFF Infrastructure : wagons */
uebDict({
  'aktiv (Fahrtypenkatalog 2026)': 'actif (catalogue des types de marche 2026)',
  'nein': 'non',
  'Güterwagen': 'wagon de marchandises',
  '4, auf 2 Drehgestellen': '4, sur 2 bogies',
  'Schwerkraft': 'par gravité',
  'Ballastieren': 'ballastage',
  'Schottertransport': 'transport de ballast',
  'Bestandsangabe 2022, kein eigener Fahrtyp 2026': 'état 2022, pas de type de marche propre en 2026',
  'Bestandstyp, kein eigener Fahrtyp 2026': 'type existant, pas de type de marche propre en 2026',
  'Generator an Bord': 'générateur à bord',
  'im Arbeitsverband': 'dans un convoi de travaux',
  'gedeckter Bauzugwagen': 'wagon couvert de train de travaux',
  'seitliche Türen': 'portes latérales',
  'Schottertransport, Ballastieren': 'transport de ballast, ballastage',
  'Werkzeug und Werkstatt, Unterstützung der Mannschaft': 'outillage et atelier, soutien de l’équipe',
  'Güterzug, Basistyp Baumaschine': 'train de marchandises, type de base engin de chantier',
  'Güterwagen, Basistyp Baumaschine': 'wagon de marchandises, type de base engin de chantier',
  'SBB Infrastruktur': 'CFF Infrastructure'
});

uebZug('fans-u', {
  typ: 'Wagon à ballast à quatre essieux à déchargement latéral',
  text: ['Le Fans-u est un wagon spécial à quatre essieux pour le ballast, les déblais et d’autres matériaux de voie.', 'Ses deux bennes peuvent être vidées latéralement ; l’équipement hydraulique de travail est alimenté en énergie de l’extérieur.'],
  kennzahlen: [['100 km/h', 'vitesse maximale'], ['12,74 m', 'longueur'], ['29,0 t', 'poids à vide'], ['80 t', 'poids total max.']],
  daten: { 'Gewicht': '29,0 t à vide, 80 t en charge', 'Nutzlast': 'jusqu’à env. 51,0 t (calculée)', 'Behältervolumen': 'env. 40 m³', 'Entladung': 'latérale, hydraulique', 'Arbeitsenergie': 'alimentation externe', 'Einsatz': 'ballast et déblais' },
  specNote: 'La charge utile découle du poids total et du poids à vide actuels des CFF ; d’anciens documents de formation indiquent d’autres valeurs.',
  abschnitte: [
    { titel: 'Rôle dans la construction de voies', p: ['Le wagon évacue les déblais et les matériaux usagés et approvisionne les chantiers en matériaux en vrac. Le déchargement latéral permet un transbordement ciblé à côté de la voie.'] },
    { titel: 'Exploitation et sécurité', p: ['Lors du déchargement, le wagon doit être assuré contre le renversement et la zone de travail dégagée. L’hydraulique, l’alimentation en énergie et les verrouillages doivent être contrôlés avant chaque course de travail selon les prescriptions locales.'] }
  ]
});

uebZug('xans-37', {
  typ: 'Wagon à ballast à quatre essieux à déchargement par gravité',
  text: ['Le Xans 37 est un wagon à ballast à quatre essieux pour le transport et le ballastage dosé.', 'Le déchargement se fait par gravité au moyen de trappes proches du sol.'],
  kennzahlen: [['100 km/h', 'vitesse maximale'], ['14,0 m', 'longueur'], ['23,9 t', 'poids à vide'], ['88 t', 'poids total max.']],
  daten: { 'Gewicht': '23,9 t à vide, 88 t en charge', 'Nutzlast': 'jusqu’à env. 64,1 t (calculée)', 'Volumen': 'env. 45 m³', 'Entladung': 'par gravité, ballastage dosé' },
  specNote: 'Le catalogue des types de marche indique 87,5 t pour la dynamique de marche et arrondit le poids total admissible à 88 t.',
  abschnitte: [
    { titel: 'Utilisation', p: ['Le Xans 37 transporte du ballast neuf et le répartit sur le chantier par ses goulottes. Il convient ainsi aux constructions neuves, aux renouvellements et au rechargement en ballast.'] },
    { titel: 'Chargement et manœuvre', p: ['Avant tout trajet en train ou en manœuvre, toutes les trappes doivent être entièrement fermées et verrouillées. Le document de formation exige des trajets à vide ou entièrement chargé et met en garde contre les chargements partiels.'] }
  ]
});

uebZug('xans-74', {
  typ: 'Wagon à ballast à quatre essieux pour ballast et matériau de couche de forme',
  text: ['Le Xans 74 est un wagon pour matériaux en vrac à quatre essieux pour le ballast et le matériau de la couche de protection (PSS).', 'Selon l’équipement, un tapis convoyeur aide à déposer le matériau de manière décalée sur le côté.'],
  kennzahlen: [['100 km/h', 'vitesse maximale'], ['15,0 m', 'longueur'], ['26,0 t', 'poids à vide'], ['80 t', 'poids total max.']],
  daten: { 'Gewicht': '26,0 t à vide, 80 t en charge', 'Nutzlast': 'jusqu’à env. 54,0 t (calculée)', 'Volumen': 'env. 40 m³', 'Entladung': 'par gravité', 'Förderband': 'dépose latérale jusqu’à env. 4,5 m de l’axe de la voie', 'Abdeckung': 'possible en deux parties', 'Einsatz': 'ballast et PSS' },
  specNote: 'La présentation de formation indique d’autres masses pour d’anciennes versions ; ce sont les valeurs du catalogue des types de marche 2026 des CFF qui s’appliquent ici.',
  abschnitte: [
    { titel: 'PSS et ballast', p: ['Outre le ballast normal, le wagon peut transporter du matériau PSS sensible à l’humidité. Des bâches aident à conserver la teneur en humidité requise pendant le transport.'] },
    { titel: 'Fonctionnement du tapis convoyeur', p: ['Le tapis nécessite une alimentation externe ou un groupe générateur. Avant la mise en marche, il faut contrôler la zone de pivotement, la voie voisine et le dégagement de poussière.'] }
  ],
  bilder: ['Xans 74 de CFF Infrastructure, 2021', 'Trémie centrale du Xans 74 au-dessus du tapis convoyeur', 'Tapis convoyeur pivotant sous le Xans 74']
});

uebZug('xas-53', {
  typ: 'Wagon porte-bennes avec rails de roulement latéraux',
  text: ['Le Xas 53 transporte des bennes interchangeables pour le ballast, les résidus de criblage et le matériau PSS.', 'Des rails de roulement latéraux permettent de déplacer les bennes en liaison avec les machines de voie.'],
  kennzahlen: [['100 km/h', 'vitesse maximale'], ['19,9 m', 'longueur'], ['31,0 t', 'poids à vide'], ['7', 'bennes par wagon']],
  daten: { 'Fahrzeugart': 'wagon porte-bennes', 'Gewicht': '31,0 t à vide, 78 t en charge', 'Nutzlast': 'pas de valeur officielle (78 t − 31 t donnent env. 47 t)', 'Behälter': '7 bennes d’env. 4 m³ chacune', 'Ausrüstung': 'rails de roulement latéraux, bâches possibles', 'Einsatz': 'trains de criblage et de travaux' },
  specNote: 'Le catalogue des types de marche indique 77,6 t pour la dynamique de marche. La planification de la flotte prévoit le remplacement de la famille Xans/Xas 52/53.',
  abschnitte: [
    { titel: 'Logistique des bennes', p: ['Les bennes peuvent être déplacées, remplies et vidées à un endroit approprié au sein d’une chaîne de travail. Cela accélère l’évacuation continue des matériaux lors du dégarnissage et du renouvellement de voie.'] },
    { titel: 'Arrimage du chargement', p: ['Il faut tenir les mains et les pieds à l’écart des rails de roulement. Pour le PSS sensible à l’humidité, les bennes peuvent être bâchées ; avant chaque trajet, bennes et bâches doivent être correctement fixées.'] }
  ],
  bilder: ['Xas 80 85 98 53 420-0 de CFF Infrastructure à Effretikon']
});

uebZug('xas-62', {
  typ: 'Wagon basculant à quatre essieux pour ballast usagé, sans tapis',
  text: ['Le Xas 62 reçoit du ballast usagé, des déblais, du gravier et du sable.', 'La caisse est basculée par un système électro-hydraulique, si bien que le matériau s’écoule par gravité.'],
  kennzahlen: [['100 km/h', 'vitesse maximale'], ['15,04 m', 'longueur'], ['30,0 t', 'poids à vide'], ['80 t', 'poids total max.']],
  daten: { 'Ausführung': 'sans tapis convoyeur', 'Gewicht': '30,0 t à vide, 80 t en charge', 'Nutzlast': 'jusqu’à env. 50,0 t (calculée)', 'Volumen': 'env. 51 m³', 'Entladung': 'caisse basculante, électro-hydraulique', 'Einsatz': 'ballast usagé et déblais' },
  specNote: 'Le type de marche actuel distingue clairement cette version du Xas 62 avec tapis convoyeur.',
  abschnitte: [
    { titel: 'Évacuation des matériaux', p: ['Le Xas 62 sert surtout à évacuer les matériaux issus du renouvellement de voie et de l’assainissement de l’infrastructure. Le basculement accélère le déchargement aux lieux de dépôt adaptés.'] },
    { titel: 'Travail', p: ['Pendant le basculement, il faut surveiller la stabilité, la ligne de contact, la voie voisine et l’espace latéral. Il est interdit de monter ou de rester sur le wagon pendant les mouvements.'] }
  ]
});

uebZug('xas-62-fb', {
  beiname: 'avec tapis convoyeur',
  typ: 'Wagon basculant pour ballast usagé avec tapis convoyeur supplémentaire',
  text: ['La version à tapis convoyeur du Xas 62 associe la caisse basculante à un tapis pour un enlèvement contrôlé des matériaux.', 'Elle est inscrite comme type de marche actif à part entière.'],
  kennzahlen: [['100 km/h', 'vitesse maximale'], ['15,04 m', 'longueur'], ['30,5 t', 'poids à vide'], ['80 t', 'poids total max.']],
  daten: { 'Ausführung': 'avec tapis convoyeur (FB)', 'Gewicht': '30,5 t à vide, 80 t en charge', 'Nutzlast': 'jusqu’à env. 49,5 t (calculée)', 'Entladung': 'caisse basculante et tapis', 'Arbeitsantrieb': 'électro-hydraulique', 'Einsatz': 'évacuation des matériaux' },
  specNote: '« FB » désigne ici la version avec tapis convoyeur ; par rapport au wagon sans tapis, le poids à vide augmente d’environ 0,5 t.',
  abschnitte: [
    { titel: 'Flux de matériaux ciblé', p: ['Le tapis convoyeur complète le simple déchargement par basculement. Le matériau peut être transmis de manière plus contrôlée aux unités suivantes ou déposé latéralement à un endroit défini.'] },
    { titel: 'Zone de sécurité', p: ['Le tapis, la caisse basculante et l’hydraulique ne doivent fonctionner que dans la zone de travail autorisée. Les points d’écrasement, le risque de chute et la proximité de la ligne de contact demandent une attention particulière.'] }
  ]
});

uebZug('xas-73', {
  typ: 'Wagon à ballast pour le premier et le deuxième bourrage',
  text: ['Le Xas 73 est un wagon à ballast Talbot à quatre essieux à déchargement par gravité.', 'Il est surtout utilisé lors du premier et du deuxième bourrage pour répartir le ballast de façon ciblée.'],
  kennzahlen: [['100 km/h', 'vitesse maximale'], ['15,04 m', 'longueur'], ['22,5 t', 'poids à vide'], ['200', 'wagons prévus pour une prolongation de durée de vie']],
  daten: { 'Bauart': 'wagon à ballast Talbot', 'Gewicht': '22,5 t à vide, 80 t en charge', 'Nutzlast': 'jusqu’à env. 57,5 t (calculée)', 'Volumen': 'env. 31 m³', 'Behälter': '4 demi-compartiments', 'Bedienung': '4 volants' },
  specNote: 'Selon la présentation de la flotte de 2025, les CFF prévoient de prolonger la durée de vie de 200 wagons Talbot Xas 73 à quatre essieux.',
  abschnitte: [
    { titel: 'Déchargement dosé', p: ['Quatre volants commandent les différentes goulottes. Le ballast peut ainsi être réparti par sections et selon la position dans la voie.'] },
    { titel: 'Perspectives de la flotte', p: ['Le type reste actif dans le catalogue des types de marche 2026. Une remise à neuf est prévue pour la grande flotte existante, afin que les wagons restent disponibles pour d’autres périodes de travaux.'] }
  ]
});

uebZug('xns-39', {
  bilder: ['Xns 39 (Fccnpps) 21 85 6439 038-1 dans un train de travaux', 'Plusieurs Xns 39 dans un train de travaux, de nuit'],
  typ: 'Wagon à ballast à deux essieux à commande manuelle',
  text: ['Le Xns 39 est un wagon à ballast compact à deux essieux.', 'Ses trappes de vidange sont actionnées à la main par des leviers et permettent de ballaster directement dans la voie.'],
  kennzahlen: [['100 km/h', 'vitesse maximale'], ['10,0 m', 'longueur'], ['13,1 t', 'poids à vide'], ['45 t', 'poids total max.']],
  daten: { 'Gewicht': '13,1 t à vide, 45 t en charge', 'Nutzlast': 'jusqu’à env. 31,9 t (calculée)', 'Volumen': 'env. 22 m³', 'Bedienung': 'trappes manuelles, par leviers', 'Einsatz': 'ballastage' },
  specNote: 'La présentation en français écrit une fois « Xas 39 » ; la table des matières et le catalogue des types de marche des CFF confirment la désignation Xns 39.',
  abschnitte: [
    { titel: 'Wagon à ballast compact', p: ['Avec deux essieux et dix mètres de long, le Xns 39 convient aux petites quantités de ballast et aux courts tronçons de chantier. Sa construction mécanique simple ne nécessite aucune source d’énergie supplémentaire.'] },
    { titel: 'Transport sûr', p: ['Avant chaque trajet, les trappes manuelles doivent être fermées et assurées. Pendant le déchargement, personne ne doit se trouver dans la zone de vidange ou de danger.'] }
  ]
});

uebZug('xns-60', {
  typ: 'Wagon basculant à deux essieux pour ballast et résidus de criblage',
  text: ['Le Xns 60 est un wagon basculant à deux essieux pour le ballast, les résidus de criblage et des matériaux en vrac comparables.', 'Le déchargement se fait par basculement et par gravité.'],
  kennzahlen: [['100 km/h', 'vitesse maximale'], ['10,94 m', 'longueur'], ['17,0 t', 'poids à vide'], ['42 t', 'poids total max.']],
  daten: { 'Fahrzeugart': 'wagon de marchandises à benne basculante', 'Gewicht': '17,0 t à vide, 42 t en charge', 'Nutzlast': 'jusqu’à env. 25,0 t (calculée)', 'Volumen': 'env. 17,5 m³', 'Entladung': 'basculement, par gravité', 'Einsatz': 'ballast et résidus de criblage' },
  specNote: 'La présentation indique une charge utile de 17 t ; les masses actuelles des CFF donnent par calcul jusqu’à environ 25 t.',
  abschnitte: [
    { titel: 'Wagon basculant simple', p: ['Ce wagon compact peut être chargé à la pelle mécanique et convient aux petites quantités de matériaux. Le déchargement par gravité réduit le besoin de techniques de convoyage supplémentaires.'] },
    { titel: 'Basculement', p: ['Avant de basculer, il faut contrôler le sol, l’espace latéral et la position du chargement. Pendant les mouvements du wagon, personne ne doit se trouver sur la superstructure.'] }
  ]
});

uebZug('xs-72', {
  typ: 'Ancien wagon à ballast à deux essieux avec volants',
  text: ['Le Xs 72 est un wagon à ballast à deux essieux avec trappes de vidange actionnées par volants.', 'Il figure dans le document de formation des CFF de 2022, mais plus comme type actif à part entière dans le catalogue des types de marche 2026.'],
  kennzahlen: [['10,24 m', 'longueur'], ['13,0 t', 'poids à vide'], ['25,0 t', 'charge utile selon la présentation'], ['15 m³', 'volume']],
  daten: { 'Gewicht': '13,0 t à vide, env. 38 t en charge (calculé)', 'Nutzlast': '25,0 t selon la présentation', 'Bedienung': 'volants' },
  specNote: 'Faute de type de marche propre en 2026, les valeurs proviennent volontairement de la présentation de formation de 2022.',
  abschnitte: [
    { titel: 'Principe de fonctionnement', p: ['Les trappes de vidange s’ouvrent et se ferment par des volants. Le ballast peut ainsi être réparti sans source d’énergie externe.'] },
    { titel: 'Classement', p: ['L’absence dans le catalogue actuel ne signifie pas forcément qu’il n’existe plus aucun wagon de ce type. Le type n’est toutefois plus mentionné comme type de marche actif pour la commande de sillons.'] }
  ]
});

uebZug('silad-1-3', {
  typ: 'Unité de chargement de rails avec wagon de matériel',
  text: ['Les SILAD 1–3 sont des unités de chargement de rails actives des CFF pour le transport et le transbordement de longs rails.', 'Le type de marche officiel comprend l’unité de chargement et le wagon de matériel ; dans le train de travaux s’ajoutent d’autres wagons de transport.'],
  kennzahlen: [['90 km/h', 'vitesse maximale'], ['44,0 m', 'longueur du type de marche'], ['80 t', 'poids à vide et de dynamique de marche'], ['120 m', 'longueur max. des rails']],
  daten: { 'Formation': 'unité de chargement et wagon de matériel, en plusieurs parties', 'Transportwagen': 'notamment Xas 60', 'Länge': '44,0 m (type de marche)', 'Gewicht': '80 t (type de marche)', 'Schienenlänge': 'jusqu’à 120 m', 'Kapazität': 'jusqu’à 30 rails selon la présentation' },
  specNote: 'Les 44 m et 80 t se rapportent au type de marche défini dans le catalogue, et non à l’ensemble du long train de transport de rails.',
  abschnitte: [
    { titel: 'Transport de longs rails', p: ['Le document de formation décrit une unité de transport de six wagons pour des rails jusqu’à 120 mètres. L’unité de chargement SILAD aide à charger et décharger les rails en toute sécurité sur le chantier.'] },
    { titel: 'Évolution de la flotte', p: ['Les CFF maintiennent les SILAD 1–3 en service actif. La planification de la flotte prévoit en outre un vaste programme de 90 unités de transport SILAD et de quatre chargeurs.'] }
  ]
});

uebZug('silad-4', {
  typ: 'Unité de chargement de rails pour travaux de construction et de renouvellement',
  text: ['La SILAD 4 est une unité de chargement de rails des CFF enregistrée séparément.', 'Elle travaille avec les wagons de transport associés pour charger et décharger de longs rails.'],
  kennzahlen: [['100 km/h', 'vitesse maximale'], ['29,0 m', 'longueur'], ['58 t', 'poids à vide'], ['actif', 'statut 2026']],
  daten: { 'Beschreibung': 'unité de chargement de rails', 'Gewicht': '58 t (poids total et de dynamique de marche)', 'Einsatz': 'chargement et déchargement de rails' },
  specNote: 'Le catalogue des types de marche ne publie pour la SILAD 4 que les valeurs clés pour le sillon ; les données de travail figurent dans des documents d’exploitation séparés.',
  abschnitte: [
    { titel: 'Convoi de travaux', p: ['La SILAD 4 n’est pas un véhicule moteur autopropulsé. Pour les transferts et les mouvements sur le chantier, l’unité est intégrée dans un convoi remorqué.'] },
    { titel: 'Logistique des rails', p: ['Les systèmes SILAD réduisent les levages manuels pénibles et assurent un flux ordonné de matériel entre le dépôt, le train de transport et le lieu de pose.'] }
  ]
});

uebZug('silad-reserve', {
  name: 'SILAD de réserve',
  beiname: '',
  typ: 'Unité compacte de chargement de rails de réserve',
  text: ['L’unité de réserve SILAD est disponible pour remplacer ou compléter les unités lors des chargements de rails.', 'Elle est nettement plus courte et plus légère que la SILAD 4 et est inscrite comme type de marche actif à part entière.'],
  kennzahlen: [['90 km/h', 'vitesse maximale'], ['14,0 m', 'longueur'], ['18 t', 'poids à vide'], ['actif', 'statut 2026']],
  daten: { 'Beschreibung': 'unité de chargement de réserve', 'Gewicht': '18 t (poids total et de dynamique de marche)', 'Einsatz': 'réserve et complément' },
  specNote: '« Réserve » désigne le rôle d’exploitation ; le catalogue des types de marche mentionne pourtant l’unité comme type actif à part entière.',
  abschnitte: [
    { titel: 'Disponibilité', p: ['L’unité de réserve intervient en cas d’entretien, de dérangement ou de forte demande et augmente ainsi la disponibilité de la logistique des rails.'] },
    { titel: 'Exploitation', p: ['Comme les autres unités SILAD, elle n’a pas de propulsion propre. Les transferts, manœuvres et mouvements de travail se font dans le convoi autorisé à cet effet.'] }
  ]
});

uebZug('ste-kurz', {
  name: 'STE courte',
  beiname: 'Xans 51',
  typ: 'Unité de transport de rails avec deux grues pour rails de 12 à 36 m',
  text: ['Selon le document de formation, l’unité courte de transport de rails (STE) est basée sur un wagon plat Xans 51 à quatre essieux.', 'Deux petites grues déchargent les rails courts directement sur le chantier.'],
  kennzahlen: [['12–36 m', 'longueur des rails'], ['29,5 t', 'poids à vide'], ['50 t', 'charge utile selon la présentation'], ['2 × 1,5 t', 'grues']],
  daten: { 'Bauart': 'wagon plat', 'Gewicht': '29,5 t à vide', 'Nutzlast': '50 t selon la présentation', 'Krane': '2, capacité 1500 kg chacune', 'Schienenlänge': '12 à 36 m', 'Einsatz': 'déchargement de rails' },
  specNote: 'Le nom Xans 51 n’apparaît pas comme entrée propre dans le catalogue des types de marche 2026 ; les valeurs sont donc indiquées comme état de formation 2022.',
  abschnitte: [
    { titel: 'Rails courts', p: ['L’unité couvre les longueurs de rails transportables sans train de longs rails de 120 mètres. Les deux grues se partagent la charge lors du déchargement.'] },
    { titel: 'Sécurité au poste de travail', p: ['Pendant les manœuvres, personne ne doit se tenir debout sur le wagon. La zone de la grue, les accessoires de levage, la ligne de contact et la voie voisine doivent être sécurisés avant chaque levage.'] }
  ]
});

uebZug('ste-lang', {
  name: 'STE longue',
  beiname: 'Xans 51',
  typ: 'Unité de transport de rails en plusieurs parties pour rails jusqu’à 120 m',
  text: ['La STE longue utilise des wagons Xans 51 équipés de grues pour transporter et décharger de longs rails.', 'Selon la présentation, une unité d’exploitation se compose de six wagons et atteint 120 mètres de long.'],
  kennzahlen: [['120 m', 'longueur max. des rails'], ['6', 'wagons par unité'], ['29,5 t', 'poids à vide par wagon-grue'], ['2 × 1,5 t', 'grues par wagon-grue']],
  daten: { 'Bauart': 'convoi de wagons plats', 'Formation': '6 wagons', 'Achsen': '4 par wagon', 'Gewicht': '29,5 t à vide par wagon-grue', 'Nutzlast': '50 t par wagon-grue selon la présentation', 'Krane': '2 par wagon-grue, 1500 kg chacune', 'Schienenlänge': 'jusqu’à 120 m', 'Einsatz': 'déchargement de longs rails' },
  specNote: 'Les types de marche SILAD sont actifs séparément en 2026 ; la désignation STE longue / Xans 51 n’est pas inscrite comme type de marche propre au catalogue.',
  abschnitte: [
    { titel: 'Convoi de longs rails', p: ['Plusieurs wagons portent ensemble les longs rails flexibles. Les grues aident au passage contrôlé du convoi de transport à la voie.'] },
    { titel: 'Limites d’exploitation', p: ['Les six wagons sont traités comme un convoi coordonné. Lors des mouvements, la présence sur les wagons, l’inscription en courbe, les porte-à-faux et la position des rails doivent être surveillés de près.'] }
  ]
});

uebZug('xs-45', {
  typ: 'Wagon à deux essieux pour outillage, atelier et équipe',
  text: ['Le Xs 45 est un wagon couvert de train de travaux pour l’outillage, les pièces de rechange et l’équipement d’atelier.', 'Il sert en même temps d’espace de travail et de soutien abrité pour les équipes de chantier.'],
  kennzahlen: [['2', 'essieux'], ['15,0 m', 'longueur'], ['16,5 t', 'poids à vide'], ['22 t', 'charge utile selon la présentation']],
  daten: { 'Gewicht': '16,5 t à vide, env. 38,5 t en charge (calculé)', 'Nutzlast': '22 t selon la présentation' },
  specNote: 'Le catalogue des types de marche 2026 ne mentionne pas le Xs 45 séparément ; les valeurs proviennent du document de formation des CFF de 2022.',
  abschnitte: [
    { titel: 'Soutien du chantier', p: ['Les outils et les petites machines sont transportés à l’abri des intempéries et mis à disposition directement sur le lieu d’intervention. Le wagon complète les véhicules moteurs et les wagons de matériel du train de travaux.'] },
    { titel: 'Position de marche', p: ['Avant tout mouvement, les portes latérales, l’équipement mobile et les postes de travail doivent être assurés. Les personnes ne peuvent se trouver dans le wagon que dans les conditions d’exploitation autorisées.'] }
  ]
});

uebZug('xs-48', {
  typ: 'Wagon-atelier et d’équipe avec nacelles élévatrices',
  text: ['Le Xs 48 combine un wagon couvert d’outillage et d’atelier avec des nacelles élévatrices.', 'Il soutient en particulier les travaux sur les installations de la ligne de contact.'],
  kennzahlen: [['2', 'essieux'], ['15,0 m', 'longueur'], ['16,5 t', 'poids à vide'], ['23 t', 'charge utile selon la présentation']],
  daten: { 'Bauart': 'wagon de travail couvert', 'Gewicht': '16,5 t à vide, env. 39,5 t en charge (calculé)', 'Nutzlast': '23 t selon la présentation', 'Ausrüstung': 'nacelles élévatrices', 'Sicherheitsregel': 'couper la ligne de contact avant de lever les nacelles', 'Einsatz': 'outillage et atelier, travaux sur la ligne de contact' },
  specNote: 'La présentation de formation exige expressément de couper la ligne de contact avant de lever les nacelles.',
  abschnitte: [
    { titel: 'Nacelles de travail', p: ['Les nacelles permettent de travailler au-dessus du plancher du wagon. Le wagon réunit ainsi matériel, atelier et poste de travail en hauteur.'] },
    { titel: 'Sécurité électrique', p: ['Avant le levage, la ligne de contact doit être coupée, mise à la terre et assurée contre toute remise sous tension. Pour la marche, les nacelles sont rentrées, et les portes et le chargement verrouillés.'] }
  ],
  bilder: ['Wagon de travail pour la ligne de contact Xs 40 85 95 48 453-1 près de Bad Ragaz']
});

uebZug('xs-mannschaftswagen', {
  beiname: 'Wagon d’équipe',
  typ: 'Wagon d’atelier et de soutien à deux essieux',
  text: ['Ce wagon, simplement désigné Xs dans le document de formation, transporte de l’outillage et de l’équipement d’atelier.', 'Comme wagon de soutien du train de travaux, il offre à l’équipe un espace de travail abrité.'],
  kennzahlen: [['2', 'essieux'], ['14,0 m', 'longueur'], ['16,5 t', 'poids à vide'], ['24 t', 'charge utile selon la présentation']],
  daten: { 'Gewicht': '16,5 t à vide, env. 40,5 t en charge (calculé)', 'Nutzlast': '24 t selon la présentation', 'Status': 'désignation générique, pas de type de marche distinct en 2026' },
  specNote: '« Xs » est une désignation de construction large. Sans numéro de véhicule, le wagon ne peut être attribué à aucun type de marche actuel précis.',
  abschnitte: [
    { titel: 'Soutien de l’équipe', p: ['Le wagon sert surtout à la logistique et au travail de l’équipe du train de travaux. Ce n’est pas une voiture voyageurs ordinaire et il ne peut être utilisé que selon son autorisation d’exploitation.'] },
    { titel: 'Arrimage', p: ['Outils, pièces de rechange et objets mobiles doivent être fixés avant chaque mouvement du train. Les portes latérales restent fermées et verrouillées pendant la marche.'] }
  ]
});

uebZug('kirow-mannschaftswagen', {
  name: 'Wagon d’équipe Kirow',
  beiname: '',
  typ: 'Wagon d’accompagnement des convois de grues Kirow 250, 800 et 1200',
  text: ['Le catalogue des types de marche 2026 recense des convois de grues Kirow 250, 800 et 1200, chacun avec un wagon d’équipe.', 'Ce wagon d’accompagnement soutient le personnel, l’outillage et la logistique d’intervention de la grue ferroviaire. Les deux KRC 800 des CFF ont été remplacées en 2016–2019 ; une entrée au catalogue ne prouve donc pas un effectif actuel.'],
  kennzahlen: [['3', 'types de grues avec wagon d’équipe'], ['1', 'wagon d’équipe par convoi'], ['80 km/h', 'vitesse du convoi'], ['3', 'types de marche au catalogue 2026']],
  daten: { 'Fahrzeugrolle': 'wagon d’accompagnement dans le convoi de grue', 'Höchstgeschwindigkeit': '80 km/h (convoi entier)', 'Einzelfahrdaten': 'non publiées séparément', 'Fahrtypen': '5089–5091 (convois de grues entiers)', 'Status': 'types de marche actifs au catalogue 2026 ; KRC 800 remplacées aux CFF en 2016–2019' },
  specNote: 'Dans le catalogue des types de marche, les CFF ne publient que les valeurs globales des convois de grues indissociables, et non les dimensions du wagon d’équipe seul.',
  abschnitte: [
    { titel: 'Attribution aux convois de grues', tabelle: { kopf: ['Grue', 'Formation', 'Convoi longueur / poids'], zeilen: [
      ['Kirow 250', '1 wagon de protection et 1 wagon d’équipe', '47 m / 169 t'],
      ['Kirow 800', '1 wagon de protection et 1 wagon d’équipe', '48 m / 203 t'],
      ['Kirow 1200', 'wagon de protection, de contrepoids et d’équipe', '63 m / 279 t']] } },
    { titel: 'Fonction', p: ['Le wagon d’équipe met à disposition de l’équipe de la grue du matériel, des moyens de travail et un local de séjour. Son équipement est adapté au convoi de grue concerné.'] },
    { titel: 'Convoi fixe', p: ['Pour la commande de sillons et les transferts, c’est l’unité complète qui est prise en compte. Les modifications de formation, de chargement ou de freinage ne sont autorisées que selon les documents d’exploitation validés.'] }
  ]
});

uebZug('pwfz', {
  beiname: 'Véhicule de personnel et d’atelier',
  typ: 'Véhicule de personnel et d’atelier prévu',
  text: ['Le véhicule de personnel et d’atelier PWFZ est un projet de flotte prévu par CFF Infrastructure.', 'Il doit remplacer d’anciens wagons-ateliers et wagons d’équipe Xs par une série moderne et uniforme.'],
  kennzahlen: [['30', 'véhicules prévus'], ['2', 'premiers véhicules du projet'], ['28', 'autres véhicules de série'], ['juin 2025', 'état de la planification']],
  daten: { 'Langname': 'Personal Werkstatt Fahrzeug (véhicule de personnel et d’atelier)', 'Bestand': 'pas encore de flotte de série', 'Anzahl': '30 prévus (2 + 14 + 14)', 'Einsatz': 'personnel et atelier', 'Vorgänger': 'wagons de train de travaux Xs', 'Technische Daten': 'pas encore publiées', 'Status': 'acquisition prévue' },
  specNote: 'Les documents CFF accessibles au public indiquent le nombre et l’échelonnement, mais pas encore de dimensions ni de performances définitives.',
  abschnitte: [
    { titel: 'Objectif du projet', p: ['Une série PWFZ uniforme doit réunir atelier, transport de matériel et soutien du personnel dans un concept de wagon moderne.'] },
    { titel: 'Délimitation', p: ['Le PWFZ n’est pas encore un type de marche de série inscrit au catalogue 2026. Cette entrée décrit l’état du projet et non une série de véhicules déjà homologuée.'] }
  ]
});
