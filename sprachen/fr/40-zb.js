/* Français – Zentralbahn (zb) */
uebDict({
  'Zentralbahn': 'Zentralbahn', 'zb Zentralbahn': 'zb Zentralbahn', '1200 V Gleichstrom': '1200 V continu', 'Dieselelektrisch': 'diesel-électrique'
});

/* ---------- trafic voyageurs ---------- */
uebZug('zb-adler', {
  typ: 'Rame Stadler à crémaillère de sept voitures pour Lucerne–Interlaken',
  text: ['L’ADLER est la longue rame express de la Zentralbahn. Les quatre rames Stadler de sept voitures circulent depuis 2012, surtout comme Luzern–Interlaken Express par le Brünig.', 'En vallée, elle roule seulement sur ses roues ; sur les rampes raides, une roue dentée l’aide. D’autres ADLER sont commandées.'],
  kennzahlen: [['4', 'rames (150 001–004)'], ['313', 'places assises'], ['120 km/h', 'vitesse maximale'], ['2012', 'en service']],
  daten: { 'Bauart': 'automotrice électrique à crémaillère et adhérence, 7 voitures', 'Fahrzeugnummern': '150 001–004 ; commandées 151 011–012 et cinq autres', 'Länge': '126 m entre attelages', 'Gewicht': 'environ 200 t', 'Leistung': '2800 kW (adhérence), 3200 kW (crémaillère)', 'Anfahrzugkraft': '240 kN (adhérence)', 'Höchstgeschwindigkeit': '120 km/h (adhérence), 40 km/h sur crémaillère', 'Sitzplätze': '313, dont 63 en 1re classe', 'Anzahl': '4 rames, 7 autres commandées' },
  specNote: 'Places selon la page actuelle de la Zentralbahn ; la fiche Stadler d’origine et Wikipédia indiquent d’autres répartitions (307 et 317 places). Puissance selon Stadler. Pour l’effort au démarrage sur crémaillère, les sources divergent fortement (200 et 440 kN) ; il n’est donc pas indiqué.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['Stadler a livré les quatre ADLER en 2012 et 2013. Le nom signifie « alpiner dynamischer leiser edler Reisezug » (train alpin dynamique, silencieux et noble). Deux éléments moteurs de trois caisses encadrent une voiture bistro. Sont baptisées 150 001 « Bern » et 150 003 « Luzern ».', 'La Zentralbahn a commandé d’autres ADLER : d’abord deux rames (selon Wikipédia en décembre 2019, numéros 151 011–012, avec une voiture multifonction au lieu du bistro), puis cinq autres en septembre 2025. Elles doivent arriver dès fin 2027 ; trois d’entre elles recevront un compartiment premium.'] },
      { titel: 'Service et technique', p: ['Les ADLER circulent surtout comme Luzern–Interlaken Express par le Brünig. Sur les tronçons à crémaillère entre Giswil et Meiringen, des roues dentées engrènent la crémaillère (système Riggenbach) ; là, la rame monte jusqu’à 40 km/h, en vallée elle roule jusqu’à 120 km/h.', 'La rame mesure 126 m et pèse environ 200 t. Elle peut être couplée à un FINK ; on obtient ainsi un train plus long avec davantage de places.'] },
      { titel: 'Équipement et accessibilité', liste: ['313 places, dont 63 en 1re classe (selon la Zentralbahn)', 'Voiture bistro au milieu de la rame', 'Accès à plancher bas (environ 420 mm) à quatre portes sur sept par côté, WC accessible aux fauteuils roulants', 'Climatisation, grandes baies panoramiques, information voyageurs et prises', 'Supports pour vélos et skis'] }
    ],
  bilder: ['ADLER au bord du lac de Lungern (2014)', 'ABeh 150 002 (2014)', '1re classe dans l’ADLER (2017)']
});
uebZug('zb-fink', {
  typ: 'Rame Stadler à crémaillère de trois voitures pour le RER et le Brünig',
  text: ['Le FINK est le petit frère de l’ADLER. Les onze rames Stadler de trois voitures circulent depuis 2012 sur le RER de Lucerne, par le Brünig et vers Engelberg.', 'Comme l’ADLER, il possède une roue dentée pour les tronçons raides. Il circule seul ou renforce un ADLER.'],
  kennzahlen: [['11', 'rames (6 + 5)'], ['139', 'places fixes'], ['120 km/h', 'vitesse maximale'], ['2012', 'en service']],
  daten: { 'Bauart': 'automotrice électrique à crémaillère et adhérence, 3 voitures', 'Länge': '54 m entre attelages', 'Gewicht': 'environ 90 t', 'Leistung': '1400 kW (adhérence), 1600 kW (crémaillère)', 'Anfahrzugkraft': '120 kN (adhérence)', 'Höchstgeschwindigkeit': '120 km/h (adhérence), 40 km/h sur crémaillère', 'Sitzplätze': '139, dont 18 en 1re classe, plus 8 strapontins', 'Anzahl': '11 rames' },
  specNote: 'Valeurs selon Stadler et la Zentralbahn ; Wikipédia indique 93 t. Pour le FINK aussi, les indications d’effort sur crémaillère divergent (100 et 220 kN). Les nouveaux FINK dès 2026 ont leur propre fiche.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['Stadler a livré six FINK en 2012 (160 001–006) et cinq autres en 2016 (161 011–015). Le nom signifie « flinke innovative Niederflurkomposition » (composition agile et innovante à plancher bas). Sur la deuxième série, les bogies à crémaillère ont été améliorés pour s’user moins.', 'Certaines rames portent un nom, comme 160 004 « Oberried » et 161 015 « Interlaken ».'] },
      { titel: 'Service et technique', p: ['Les FINK circulent sur le RER de Lucerne (S4, S5), en trafic régional Meiringen–Interlaken Ost, en renfort des ADLER et sur la branche d’Engelberg. Lignes et roulements changent avec l’horaire.', 'La rame mesure 54 m. Sur les tronçons à crémaillère du Brünig et avant Engelberg, elle monte jusqu’à 40 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['139 places fixes, dont 18 en 1re classe, plus 8 strapontins', 'Zones à plancher bas avec portes larges et espaces accessibles', 'Climatisation, baies panoramiques et information voyageurs', 'Pas de bistro'] }
    ],
  bilder: ['ABeh 161 013 en IR pour Engelberg à Lucerne (2019)', 'ABeh 160 004 à Stans (2025)', 'FINK au Brünig (2012)']
});
uebZug('zb-fink-neu', {
  beiname: 'nouveau FINK',
  typ: 'Nouvelle génération du FINK, mise en service prévue dès décembre 2026',
  text: ['Dix nouveaux FINK renforceront la flotte de la Zentralbahn dès fin 2026. Le premier véhicule est arrivé dans la nuit du 13 août 2026 et il est depuis en essais à Meiringen.', 'Dès le changement d’horaire du 13 décembre 2026, ils doivent circuler sur le RE44 Lucerne–Engelberg.'],
  kennzahlen: [['10', 'rames commandées'], ['128', 'places assises'], ['2026', 'premier véhicule'], ['RE44', 'Lucerne–Engelberg']],
  daten: { 'Bauart': 'automotrice électrique à crémaillère et adhérence, 3 voitures', 'Fahrzeugnummern': '162 021–030 (selon Wikipédia)', 'Sitzplätze': '17 en 1re, 111 en 2e classe', 'Anzahl': '10 commandées (7 + 3)', 'In Betrieb seit': '2026 prévu' },
  specNote: 'Selon le communiqué de la Zentralbahn d’août 2026. Les nouveaux FINK ont 128 places, les anciens 139 ; les valeurs ne s’appliquent pas les unes aux autres. Les données techniques de la nouvelle version ne sont pas encore publiées.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['La Zentralbahn a d’abord commandé sept nouveaux FINK à Stadler, puis trois de plus en septembre 2025. Dans la nuit du 12 au 13 août 2026, la première rame est arrivée à Interlaken et a été acheminée à Meiringen.'] },
      { titel: 'Service et technique', p: ['Après essais et homologation, les rames doivent circuler dès le 13 décembre 2026 sur le RE44 Lucerne–Engelberg. Plus tard, elles renforceront aussi l’Interregio et le RER et circuleront en unité multiple sur le Regio Meiringen–Interlaken Ost.', 'Comme les anciens FINK, elles ont une roue dentée. Une rame arrivée n’est pas encore un train à l’horaire : jusqu’à l’homologation, elle ne roule que pour des essais.'] },
      { titel: 'Équipement et accessibilité', liste: ['128 places : 17 en 1re et 111 en 2e classe', 'Nouvel aménagement intérieur et nouveau design', 'Autres équipements selon l’état de l’homologation'] }
    ]
});
uebZug('zb-spatz', {
  typ: 'Rame panoramique de trois voitures sans crémaillère pour le RER',
  text: ['Le SPATZ est la plus ancienne rame moderne de la Zentralbahn. Stadler a livré les dix rames en 2004 et 2005 ; elles circulent surtout sur le RER de Lucerne.', 'Il n’a pas de roue dentée et ne circule donc que sur les lignes plus plates, par exemple jusqu’à Giswil ou entre Meiringen et Interlaken.'],
  kennzahlen: [['10', 'rames (130 001–010)'], ['134', 'places assises'], ['100 km/h', 'vitesse maximale'], ['2004', 'livrées']],
  daten: { 'Bauart': 'automotrice électrique à plancher bas, 3 voitures (sans crémaillère)', 'Länge': '51,93 m entre attelages', 'Gewicht': '68,5 t à vide', 'Leistung': '1150 kW à la jante (brièvement), 660 kW en continu', 'Sitzplätze': '19 en 1re, 115 en 2e classe, plus 14 strapontins' },
  specNote: 'Valeurs selon la fiche Stadler (état de livraison) ; puissance continue selon Wikipédia. Des rénovations ultérieures peuvent avoir modifié l’intérieur et les places.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['Stadler a construit les dix SPATZ en 2004 et 2005. Le nom signifie « Schmalspur-Panorama-Triebzug » (automotrice panoramique à voie étroite). Les faces avant proviennent des GTW de la ligne du Seetal. Plusieurs rames portent un nom, comme 130 001 « Haslital » et 130 002 « Pilatus ».', 'Depuis 2017, tous les SPATZ ont des attelages automatiques qui leur permettent aussi de circuler couplés à un FINK. Portes, planchers, toilettes et information voyageurs ont été renouvelés plus tard à Stansstad.'] },
      { titel: 'Service et technique', p: ['Les SPATZ circulent sur le RER de Lucerne, par exemple sur la S4 et la S5 vers Giswil et Stans, ainsi qu’entre Meiringen et Interlaken Ost. Ils ne peuvent pas franchir seuls le Brünig ni monter à Engelberg, faute de roue dentée.', 'La motorisation se trouve dans les bogies sous la partie centrale. La rame mesure près de 52 m et roule jusqu’à 100 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['134 places : 19 en 1re et 115 en 2e classe, plus 14 strapontins', 'Accès à plancher bas (environ 400 mm) et espace pour fauteuils roulants', 'WC fermé accessible aux fauteuils roulants', 'Climatisation et grandes baies panoramiques dans la partie centrale'] }
    ],
  bilder: ['SPATZ ABe 130 002 à Sarnen (2017)', 'SPATZ au bord du lac de Brienz (2014)', 'Dans le SPATZ (2006)']
});
uebZug('zb-hge44ii', {
  typ: 'Locomotive électrique à crémaillère et adhérence pour le Brünig et Engelberg',
  text: ['Jusqu’en 2012, les huit HGe 4/4 II ont tracté tous les trains express par le Brünig. Aujourd’hui, elles assurent surtout le Luzern–Engelberg Express et des trains supplémentaires.', 'Elles ont des roues pour les lignes de vallée et des roues dentées pour les rampes raides.'],
  kennzahlen: [['8', 'locomotives (101 961–968)'], ['1932 kW', 'puissance unihoraire'], ['100 km/h', 'vitesse maximale'], ['1989', 'premières locomotives']],
  daten: { 'Bauart': 'locomotive électrique à crémaillère et adhérence', 'Hersteller': 'SLM (mécanique), BBC/ABB (électrique)', 'Betreiber': 'zb Zentralbahn (jusqu’en 2004 ligne du Brünig des CFF)', 'Länge': '14,80 m hors tampons', 'Leistung': '1932 kW (puissance unihoraire)', 'Anfahrzugkraft': '230 kN (adhérence), 280 kN (crémaillère)', 'Höchstgeschwindigkeit': '100 km/h (adhérence), 40 km/h sur crémaillère' },
  specNote: 'Valeurs selon Wikipédia. Les sources vérifiées n’indiquent pas clairement combien des huit locomotives sont encore en service aujourd’hui.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['SLM et BBC (plus tard ABB) ont construit les locomotives ; la ligne du Brünig des CFF les a mises en service en 1989 et 1990. Elles portent des noms de localités, de « Horw » à « Ringgenberg ». Des locomotives identiques circulent au Matterhorn Gotthard Bahn.'] },
      { titel: 'Service et technique', p: ['Jusqu’en 2012, les HGe 4/4 II ont tracté tous les trains express entre Lucerne et Interlaken. Aujourd’hui, deux navettes spécialement équipées assurent le Luzern–Engelberg Express ; d’autres navettes assurent des trains saisonniers, la S41 et la réserve. De nouvelles rames doivent en reprendre une partie.', 'Sur crémaillère (système Riggenbach), la locomotive monte à 40 km/h et remorque jusqu’à 170 t sur une rampe de 120 pour mille.'] },
      { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite, pas d’espace voyageurs', 'Entraînement à crémaillère et à adhérence', 'Circule avec des voitures panoramiques et des voitures de commande articulées en navette'] }
    ],
  bilder: ['HGe 101 966 avec le Luzern–Engelberg Express à Engelberg (2014)', 'HGe 101 avec un Interregio près de Niederried (2009)', 'HGe 101 968 à Interlaken Ost (2009)']
});
uebZug('zb-bdeh140', {
  typ: 'Automotrice à crémaillère du chemin de fer Lucerne–Stans–Engelberg (réserve et historique)',
  text: ['De 1964 à 2010, les huit BDeh 4/4 de la LSE ont tracté les trains sur la rampe raide vers Engelberg. Aujourd’hui, la 140 006 sert de réserve et la 140 005 circule comme véhicule historique.', 'Elles avaient deux rapports de transmission : l’un pour la crémaillère raide, l’autre pour 75 km/h en vallée.'],
  kennzahlen: [['8', 'automotrices (1–8)'], ['736 kW', 'puissance unihoraire'], ['75 km/h', 'vitesse maximale'], ['1964', 'premières automotrices']],
  daten: { 'Bauart': 'automotrice électrique à crémaillère et adhérence', 'Betreiber': 'LSE, dès 2005 zb Zentralbahn', 'Fahrzeugnummern': '1–5 (1964), 6–7 (1970), 8 (1980) ; aujourd’hui 140 005 et 140 006', 'Gewicht': '47,9 t à vide', 'Leistung': '736 kW (puissance unihoraire)', 'Höchstgeschwindigkeit': '75 km/h (adhérence), 20 km/h sur crémaillère', 'Sitzplätze': '40 à 42 en 2e classe', 'Anzahl': '8 construites' },
  specNote: 'Valeurs selon la fiche du Verein Engelbergbahn pour la 005 et selon Wikipédia ; Wikipédia indique 40, la fiche de l’association 42 places. Wikipédia indique la 007 comme vendue ; selon la Zentralbahn, elle se trouve au Musée suisse des transports et sert de simulateur de conduite.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['La LSE a acquis les automotrices en trois lots : 1–5 en 1964, 6–7 en 1970 et la 8 en 1980. SWP a construit la caisse, SLM le roulement à crémaillère et BBC l’équipement électrique.', 'Les 2 et 8 ont été démolies en 2012, les 1 et 3 en 2014.'] },
      { titel: 'Service et technique', p: ['Jusqu’à l’ouverture du nouveau tunnel Grafenort–Engelberg en décembre 2010, elles ont assuré tout le trafic vers Engelberg par l’ancienne rampe à crémaillère très raide. Ensuite, elles ont assuré des trains supplémentaires et des remplacements sur le RER.', 'Aujourd’hui, la 140 006 circule selon la Zentralbahn sur la S41 et dans des trains saisonniers. La 140 005 est conservée aux couleurs de la LSE pour des courses spéciales, la 140 007 se trouve au Musée suisse des transports à Lucerne.'] },
      { titel: 'Équipement et accessibilité', liste: ['Compartiment voyageurs et compartiment à bagages', 'Deux rapports de transmission pour crémaillère et vallée', 'Accès à plancher haut, pas de plain-pied', 'La 005 circule avec la voiture de commande ABt 923'] }
    ],
  bilder: ['BDeh 140 006 (2007)', 'BDeh 4/4 4 de la LSE à Engelberg (1998)', 'BDeh 4/4 8 à l’entrée de Stansstad (2006)']
});
uebZug('zb-mib', {
  beiname: '013 et 008',
  typ: 'Automotrices à courant continu du chemin de fer Meiringen–Innertkirchen',
  text: ['Sur la ligne Meiringen–Innertkirchen, longue d’un peu moins de 5 km, circulent des automotrices propres en 1200 V continu. L’automotrice articulée 125 013 assure le service quotidien, la 125 008 est la réserve.', 'Depuis 2021, la ligne appartient à la Zentralbahn.'],
  kennzahlen: [['2', 'automotrices'], ['1200 V', 'courant continu'], ['5 km', 'ligne'], ['2021', 'à la Zentralbahn']],
  daten: { 'Bauart': 'automotrices électriques (automotrice articulée et voiture unique)', 'Betreiber': 'zb Zentralbahn (jusqu’en 2020 MIB)', 'Fahrzeugnummern': '125 013 (ex MIB Be 2/6 13), 125 008 (ex MIB Be 4/4 8)' },
  specNote: 'Selon la page du matériel roulant de la Zentralbahn et Wikipédia. Places et masses n’y sont pas indiquées et ne sont pas reprises d’autres GTW.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['La Be 4/4 8 a été construite en 1996 par Stadler ; c’est une pièce unique. Aujourd’hui, elle s’appelle Be 125 008 et sert de réserve.', 'L’automotrice articulée Be 2/6 a été construite en 1997 pour le MVR sur la Riviera vaudoise et est arrivée à la MIB en 2018. Aujourd’hui, elle s’appelle Be 125 013.'] },
      { titel: 'Service et technique', p: ['La ligne part de Meiringen, longe les gorges de l’Aar et traverse le tunnel du Kirchet (1502 m) jusqu’à Innertkirchen. Les trains circulent environ toutes les 30 minutes en journée.', 'Comme la ligne est alimentée en 1200 V continu, les autres trains de la Zentralbahn (15 kV alternatif) ne peuvent pas y circuler. La Zentralbahn a étudié une conversion au courant alternatif pour des trains directs depuis Interlaken.'] },
      { titel: 'Équipement et accessibilité', liste: ['Pas de crémaillère nécessaire (ligne à adhérence)', 'Partie centrale à plancher bas sur l’automotrice articulée 125 013', 'Pièce unique 125 008 en réserve'] }
    ],
  bilder: ['Be 125 013 près d’Aareschlucht West (2021)', 'Be 4/4 8, aujourd’hui Be 125 008, à Meiringen (2013)']
});
uebZug('zb-wagen', {
  name: 'Voitures panoramiques et de commande', beiname: 'trains express',
  typ: 'Voitures remorquées pour Lucerne–Engelberg et les trains saisonniers',
  text: ['Les HGe 4/4 II forment des navettes avec des voitures panoramiques, des voitures de 2e classe rénovées et une voiture de commande articulée. La plus connue est le Luzern–Engelberg Express avec la voiture Globi.', 'Les voitures n’ont pas de motorisation propre ; depuis la voiture de commande, le mécanicien commande la locomotive à l’autre extrémité du train.'],
  kennzahlen: [['3', 'voitures de commande articulées'], ['2', 'navettes express'], ['1re', 'classe en voiture panoramique'], ['Globi', 'voiture au milieu']],
  daten: { 'Bauart': 'voitures panoramiques, voitures voyageurs et voitures de commande articulées', 'Anzahl': '3 voitures de commande articulées' },
  specNote: 'Selon la page du matériel roulant de la Zentralbahn. Les numéros et places de chaque voiture n’y sont pas indiqués en entier.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['Le Luzern–Engelberg Express se compose d’une HGe 4/4 II, d’une voiture panoramique de 1re classe autrefois utilisée sur le GoldenPass, de trois voitures de 2e classe rénovées et d’une voiture de commande articulée. Une voiture Globi au milieu donne au train son nom de Globi-Express.', 'La Zentralbahn possède trois voitures de commande articulées avec cabine de conduite et partie à plancher bas.'] },
      { titel: 'Service et technique', p: ['Deux navettes de ce type assurent le Luzern–Engelberg Express. Trois, parfois quatre autres navettes assurent des trains saisonniers, la S41 et la réserve. Les nouveaux FINK doivent reprendre une partie de ces trains dès fin 2026.'] },
      { titel: 'Équipement et accessibilité', liste: ['Zone à plancher bas dans la voiture de commande articulée', 'Climatisation, grandes fenêtres, suspension pneumatique et freins à disques dans la voiture de commande articulée', 'Voiture panoramique de 1re classe', 'Les voitures plus anciennes ne sont pas de plain-pied'] }
    ],
  bilder: ['Voiture de commande articulée ABt à Hergiswil (2009)', 'Vue depuis un train remorqué entre Meiringen et le Brünig (2010)']
});

/* ---------- infrastructure ---------- */
uebZug('zb-hgm104', {
  typ: 'Locomotive diesel à crémaillère Stadler pour trains de travaux et service hivernal',
  text: ['Les HGm sont de petites locomotives diesel à roue dentée. Elles tractent des trains de travaux, aident quand la caténaire est coupée et travaillent au déneigement en hiver – aussi sur les crémaillères du Brünig et avant Engelberg.', 'Stadler en a livré une en 2005, une en 2010 et une en 2022.'],
  kennzahlen: [['3', 'locomotives (104 001–003)'], ['450 kW', 'puissance'], ['60 km/h', 'vitesse maximale'], ['2005', 'première locomotive']],
  daten: { 'Bauart': 'locomotive diesel-électrique à crémaillère et adhérence' },
  specNote: 'Valeurs pour les 104 001 et 002 selon Wikipédia (Stadler HGm 2/2) ; aucune donnée n’est publiée pour la 104 003 livrée en 2022. Les valeurs de la Gm 105 ne sont pas reprises.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['Stadler a livré la 104 001 en 2005 et la 104 002 en 2010 ; l’une d’elles avait été commandée à l’origine par les CFF pour la ligne du Brünig. En 2022 est arrivée une autre locomotive diesel à crémaillère, la 104 003.', 'Des locomotives identiques circulent aussi au Matterhorn Gotthard Bahn et sur des chemins de fer à crémaillère en Espagne et en Autriche.'] },
      { titel: 'Service et technique', p: ['Les locomotives tractent des trains de construction et de matériel et travaillent quand la caténaire est coupée. En hiver, elles aident au déneigement. Là où une locomotive à adhérence ne peut pas gravir la rampe, la roue dentée est nécessaire.'] },
      { titel: 'Équipement et accessibilité', liste: ['Motorisation diesel-électrique, indépendante de la caténaire', 'Roue dentée pour les tronçons à crémaillère', 'Cabine conçue pour le service de travaux'] }
    ],
  bilder: ['HGm 104 001 à Meiringen (2015)', 'HGm 104 002 (2011)']
});
uebZug('zb-gm105', {
  typ: 'Locomotive diesel de manœuvre sans crémaillère pour trains de travaux',
  text: ['La Gm 105 001 est une locomotive diesel à deux essieux sans roue dentée. Stadler l’a livrée en 2011 pour les trains de travaux sur les lignes plates de la Zentralbahn, du BOB et de la MIB.', 'En hiver, elle pousse aussi une fraiseuse à neige.'],
  kennzahlen: [['1', 'locomotive'], ['450 kW', 'puissance à la jante'], ['80 km/h', 'vitesse maximale'], ['2011', 'livrée']],
  daten: { 'Bauart': 'locomotive diesel-électrique sans crémaillère, 2 essieux', 'Motor': 'MTU 12V183TB32, environ 550 kW', 'Länge': '8,09 m hors tampons', 'Leistung': '450 kW à la jante' },
  specNote: 'Valeurs selon la fiche Stadler (L4232ZBGm22_0812d). L’exemple de charge de 400 t sur 6 pour mille à 30 km/h est un point de calcul, pas une charge générale.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['Stadler a livré la locomotive en 2011. Elle est étroitement apparentée aux locomotives à crémaillère HGm, mais n’a pas de roue dentée.'] },
      { titel: 'Service et technique', p: ['Elle tracte des trains de travaux sur les lignes à adhérence de la Zentralbahn, du Berner Oberland-Bahn et de la MIB et pousse des fraiseuses à neige en hiver. Le frein électrique développe 360 kW.'] },
      { titel: 'Équipement et accessibilité', liste: ['Deux postes de conduite en diagonale et des sièges pour quatre personnes', 'Radiocommande et caméra côté attelage', 'Réseau auxiliaire 400 V de 25 kVA'] }
    ],
  bilder: ['Gm 105 001 (2014)', 'Gm 105 001 à Stansstad (2014)']
});

/* ---------- véhicules historiques ---------- */
uebZug('zb-deh46', {
  typ: 'Automotrice-fourgon de la ligne du Brünig électrifiée en 1941 (historique)',
  text: ['Avec les 16 automotrices-fourgons Fhe 4/6, l’exploitation électrique a commencé sur le Brünig en 1941. Elles avaient des roues pour la vallée et un bogie à crémaillère pour les rampes.', 'Beaucoup ont été transformées plus tard en locomotives à adhérence De 110. Les 909, 912 et 914 sont conservées.'],
  kennzahlen: [['16', 'automotrices (901–916)'], ['894 kW', 'puissance'], ['75 km/h', 'vitesse maximale'], ['1941', 'en service']],
  daten: { 'Bauart': 'automotrice-fourgon électrique à crémaillère et adhérence', 'Hersteller': 'SLM ; partie électrique BBC, MFO et SAAS', 'Betreiber': 'ligne du Brünig des CFF, dès 2005 zb Zentralbahn', 'Fahrzeugnummern': 'Fhe 4/6 901–916, plus tard Deh 4/6 et Deh 120 006–012 ; transformations De 110 000–005, De 121 et 122 de la LSE', 'Höchstgeschwindigkeit': '75 km/h (adhérence)', 'Erhalten': '909 (zb Historic), 912 et 914 (CFF Historic) ; actuellement hors service' },
  specNote: 'Longueur, poids et puissance selon la fiche de la 909 ; histoire selon Wikipédia (SBB Fhe 4/6). Les 75 km/h ne valent pas sur crémaillère.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['Pendant la Seconde Guerre mondiale, les CFF ont électrifié la ligne du Brünig en 15 kV. SLM a construit les 16 automotrices en 1941 et 1942, l’équipement électrique venait de BBC, MFO et SAAS. Un bogie central à crémaillère s’ajoutait à l’entraînement par adhérence.', 'Les Fhe sont devenues plus tard des Deh 4/6. La 915 a été démolie en 1990 après un accident.'] },
      { titel: 'Service et technique', p: ['Les automotrices tractaient les trains de voyageurs et de bagages par le Brünig. Dès 1954, les HGe 4/4 I les ont aidées en montagne, dès 1990 les HGe 4/4 II ont repris les trains Lucerne–Interlaken.', 'Dès 1987, six automotrices ont été transformées en locomotives à adhérence (De 110 000–005) ; les autres s’appelaient Deh 120 006–012. En 1991, la LSE a repris les 905 et 907 et les a transformées en De 121 et 122.'] },
      { titel: 'Équipement et accessibilité', liste: ['Compartiment à bagages pour environ 3 t', 'Bogie central à crémaillère', 'Conservées : 909, 912 et 914, actuellement hors service'] }
    ],
  bilder: ['Deh 4/6 914 avec des voitures historiques à Giswil (2013)', 'Fhe 4/6 915 dans son état d’origine', 'De 110 021 transformée à Interlaken Ost (2013)']
});
uebZug('zb-hge44i', {
  typ: 'Locomotive à crémaillère de la ligne du Brünig de 1954 (historique)',
  text: ['Dès 1954, les deux HGe 4/4 I 1991 et 1992 ont été les puissantes locomotives à crémaillère du Brünig. En raison de leur effort de traction, le personnel les appelait « Muni » (taureau).', 'La 1991 a été démolie, la 1992 est conservée.'],
  kennzahlen: [['2', 'locomotives (1991, 1992)'], ['1954', 'en service'], ['50 km/h', 'vitesse maximale'], ['1992', 'conservée']],
  daten: { 'Bauart': 'locomotive électrique à crémaillère et adhérence', 'Betreiber': 'ligne du Brünig des CFF' },
  specNote: 'Selon Wikipédia et la Zentralbahn. L’état de service actuel de la 1992 est indiqué de façon contradictoire : la page de la flotte la dit en état de marche, la page nostalgie non.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['SLM, BBC et MFO ont construit les deux locomotives en 1954 pour la ligne du Brünig des CFF.'] },
      { titel: 'Service et technique', p: ['Les locomotives travaillaient surtout sur la section de montagne entre Giswil et Meiringen. Avec 50 km/h, elles étaient trop lentes pour les lignes de vallée. La puissante motorisation tombait souvent en panne ; les locomotives passaient donc de longues périodes à l’atelier.', 'La 1991 a été retirée en 1994 après une panne de moteur et démolie plus tard. La 1992 a été conservée et remise en état de marche en 2014 par la Brünig-Nostalgie-Bahn.'] },
      { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Entraînement à crémaillère et à adhérence', 'Conservée : 1992'] }
    ],
  bilder: ['HGe 4/4 I 1992 (avant 1968)', 'HGe 4/4 I au Brünig']
});
uebZug('zb-lse-diesel', {
  typ: 'Locomotive diesel et tracteurs de manœuvre de la LSE (historique)',
  text: ['La Gm 4/4 111 « Jumbo » était une locomotive diesel-hydraulique venue de Finlande, en service à la LSE dès 1974. De petits tracteurs de manœuvre RACO complétaient le parc.', 'L’emplacement actuel de ces véhicules n’est pas documenté pour tous.'],
  kennzahlen: [['368 kW', 'puissance du Jumbo'], ['36 t', 'poids du Jumbo'], ['1955', 'construction (Jumbo)'], ['1974', 'à la LSE']],
  daten: { 'Bauart': 'locomotive diesel-hydraulique et tracteurs diesel', 'Hersteller': 'Jung (Jumbo), RACO (tracteurs)', 'Länge': '11,23 m (Jumbo)', 'Gewicht': '36 t (Jumbo)', 'Leistung': '368 kW (Jumbo)', 'Höchstgeschwindigkeit': '40 km/h (Jumbo)' },
  specNote: 'Valeurs historiques selon les archives du Verein Engelbergbahn. L’emplacement actuel du groupe n’est pas affirmé.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['Jung a construit le Jumbo en 1955 pour une entreprise industrielle en Finlande ; la LSE l’a utilisé dès 1974. Les tracteurs venaient de RACO : le Tm 102 de 1961 (ex StEB 51), le Tm 103 de 1967 et un Tm 101 construit comme tracteur CFF à voie normale et transformé pour la LSE.'] },
      { titel: 'Service et technique', p: ['Le Jumbo tractait des trains de travaux et de service, les tracteurs manœuvraient à Stansstad et dans les gares. Le Jumbo est une pure locomotive diesel, même si un titre des archives laisse supposer autre chose.'] },
      { titel: 'Équipement et accessibilité', liste: ['Jumbo : diesel-hydraulique, 11,23 m, 36 t, 368 kW, 40 km/h', 'Tm 102 : 5,07 m, 10 t, 81 kW, 45 km/h', 'Tm 103 : 5,90 m, 16 t, 110 kW, 50 km/h'] }
    ]
});
uebZug('zb-traktoren', {
  name: 'Te I et Tm', beiname: 'petits tracteurs',
  typ: 'Petits tracteurs de manœuvre de la ligne du Brünig et de la LSE (historique)',
  text: ['Parmi les véhicules historiques figurent de petits tracteurs : le Te I 198 électrique de la ligne du Brünig de 1941 et les tracteurs diesel Tm 100 et Tm II OKK 5.', 'Ils manœuvraient les wagons dans les gares et les ateliers.'],
  kennzahlen: [['1941', 'Te I 198'], ['1931', 'Tm 100'], ['13 t', 'poids du Te I'], ['33 kW', 'puissance du Tm 100']],
  daten: { 'Bauart': 'tracteur de manœuvre électrique et tracteurs diesel', 'Hersteller': 'SLM et MFO (Te I), RACO (Tm)', 'Betreiber': 'ligne du Brünig des CFF, LSE', 'Fahrzeugnummern': 'Te I 198 ; Tm 100 (anciennement 491, 591, LSE 59 et 101) ; Tm II OKK 5', 'Erhalten': 'Te I 198, Tm 100 (garé), Tm II OKK 5' },
  specNote: 'Selon les fiches du Verein Engelbergbahn. Selon les archives, le Te I 199, véhicule jumeau, a été démoli en 2018. L’état de service actuel n’est pas reconfirmé.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['SLM et MFO ont construit en 1941 les tracteurs de manœuvre électriques Te I 198 et 199 pour la ligne du Brünig. Le Tm 100 a été construit en 1931 par RACO et possède un moteur diesel depuis une transformation en 1968. RACO a construit le Tm II OKK 5 en 1953 ; il provient d’un parc militaire.'] },
      { titel: 'Service et technique', p: ['Le Te I manœuvrait sous la caténaire, les Tm aussi sur les voies sans courant. Le Tm 100 a porté successivement les numéros 491, 591, LSE 59 et 101 ; un Tm 101 plus récent est un autre véhicule.'] },
      { titel: 'Équipement et accessibilité', liste: ['Te I 198 : environ 5,8 m, 13 t', 'Tm 100 : environ 4,4 m, 6 t, 33 kW, 28 km/h', 'Tm II OKK 5 : véhicule d’appui du service musée'] }
    ],
  bilder: ['Te I 199, véhicule jumeau du 198 conservé']
});
uebZug('zb-g34', {
  typ: 'Locomotive à vapeur de la ligne du Brünig de 1913 (historique)',
  text: ['La G 3/4 208 est une locomotive à vapeur de la ligne du Brünig sans roue dentée. SLM l’a construite en 1913 pour les lignes de vallée.', 'Aujourd’hui, elle appartient à la Brünig-Dampfbahn (BDB) et circule dans des trains historiques.'],
  kennzahlen: [['1913', 'construction'], ['SLM', 'constructeur'], ['3', 'essieux moteurs'], ['BDB', 'propriétaire']],
  daten: { 'Bauart': 'locomotive à vapeur sans crémaillère', 'Betreiber': 'ligne du Brünig des CFF ; aujourd’hui Brünig-Dampfbahn', 'Erhalten': 'Brünig-Dampfbahn (BDB)' },
  specNote: 'Selon la Brünig-Dampfbahn et la Zentralbahn. La G 3/4 n’a pas de roue dentée ; elle ne gravit donc pas les rampes du Brünig par ses propres moyens.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['SLM a construit la locomotive en 1913 pour la ligne du Brünig des CFF. Elle a trois essieux couplés et un essieu porteur.'] },
      { titel: 'Service et technique', p: ['La G 3/4 tractait des trains sur les sections plates, par exemple entre Lucerne et Giswil ou entre Meiringen et Interlaken. Aujourd’hui, elle appartient à la Brünig-Dampfbahn, autrefois Ballenberg Dampfbahn, et circule dans des trains historiques après autorisation.'] },
      { titel: 'Équipement et accessibilité', liste: ['Pas de roue dentée, seulement pour les lignes de vallée', 'Propriété de la Brünig-Dampfbahn, pas de la Zentralbahn', 'Circule avec des voitures historiques'] }
    ],
  bilder: ['G 3/4 208 à Brienz (2007)', 'G 3/4 208 de la ligne du Brünig']
});
uebZug('zb-hg33', {
  beiname: '1067 et 1068',
  typ: 'Locomotive à vapeur à crémaillère de la ligne du Brünig (historique)',
  text: ['Dès 1905, les HG 3/3 ont tracté les trains par le Brünig – avec des roues en vallée et une roue dentée en montagne. Parmi les locomotives conservées figurent les 1067 et 1068 de la Brünig-Dampfbahn.', 'La 1068 a été reconstruite après un incendie de dépôt et circule de nouveau depuis 2022.'],
  kennzahlen: [['18', 'locomotives (1051–1068)'], ['1905', 'premières locomotives'], ['40 km/h', 'vitesse maximale (vallée)'], ['13 km/h', 'sur crémaillère']],
  daten: { 'Bauart': 'locomotive à vapeur à crémaillère et adhérence', 'Betreiber': 'ligne du Brünig des CFF ; aujourd’hui Brünig-Dampfbahn', 'Höchstgeschwindigkeit': '40 km/h (adhérence), 13 km/h sur crémaillère', 'Erhalten': '1067 et 1068 (Brünig-Dampfbahn), 1063 (Musée suisse des transports, Lucerne)' },
  specNote: 'Selon Wikipédia (SBB HG 3/3) et la Brünig-Dampfbahn. Les 1051–1067 ont été construites de 1905 à 1910, la 1068 en 1926 comme réplique.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['Dès 1905, SLM a construit les locomotives 1051–1067 ; la 1068 a suivi en 1926 comme réplique. Quatre cylindres entraînent séparément les roues et la roue dentée.', 'Elles ont remplacé les HG 2/2 plus faibles. Avec l’électrification de 1941, elles sont devenues superflues ; les dernières (1065, 1067, 1068) ont été retirées en 1965.'] },
      { titel: 'Service et technique', p: ['La 1067 circule depuis 1972 à la Ballenberg Dampfbahn, aujourd’hui Brünig-Dampfbahn. La 1068 était d’abord un monument à Meiringen, est arrivée au chemin de fer à vapeur en 2000 et a été gravement endommagée par un incendie de dépôt en 2013. Après sa reconstruction, elle circule de nouveau depuis 2022 ; en 2026, elle a eu 100 ans.', 'La 1063 se trouve depuis 1957 au Musée suisse des transports à Lucerne, coupée en deux comme objet d’exposition.'] },
      { titel: 'Équipement et accessibilité', liste: ['Entraînement à quatre cylindres pour roues et roue dentée', 'Peut descendre chaudière en avant', 'Courses selon le programme et l’autorisation de la Brünig-Dampfbahn'] }
    ],
  bilder: ['HG 3/3 1067 (2013)', 'HG 3/3 1068 à Meiringen (1991)', 'HG 3/3 1063 coupée au Musée suisse des transports à Lucerne (2007)']
});
uebZug('zb-mib-akku', {
  beiname: 'automotrices à accumulateurs',
  typ: 'Automotrices à accumulateurs du chemin de fer Meiringen–Innertkirchen (historique)',
  text: ['Avant l’électrification de 1977, des automotrices à accumulateurs circulaient sur la ligne Meiringen–Innertkirchen. Elles tiraient leur énergie de batteries au lieu d’une caténaire.', 'La voiture 5 est conservée, la numéro 4 se trouve au Musée suisse des transports à Lucerne.'],
  kennzahlen: [['1926', 'chemin de fer industriel ouvert'], ['1946', 'service voyageurs'], ['1939', 'no 4 construite'], ['1977', 'caténaire']],
  daten: { 'Bauart': 'automotrice à accumulateurs', 'Betreiber': 'Kraftwerke Oberhasli (KWO), MIB', 'Stromsystem': 'accumulateurs (batterie)', 'Fahrzeugnummern': 'CFa 2/2 4 et 5 ; la 5 aujourd’hui aussi BDa 125 005', 'Erhalten': '5 (véhicule historique de la MIB), 4 (Musée suisse des transports, Lucerne)' },
  specNote: 'Selon la Zentralbahn et le catalogue du Musée suisse des transports. Les sources n’indiquent pas d’année de construction commune et sûre pour les deux automotrices ; seule la numéro 4 est datée de 1939.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['Les Kraftwerke Oberhasli ont construit la ligne dans les années 1920 comme chemin de fer industriel pour la construction des centrales ; dès 1946, elle a aussi pu transporter des voyageurs. On y roulait d’abord à vapeur, puis avec des automotrices à accumulateurs.'] },
      { titel: 'Service et technique', p: ['Les automotrices à accumulateurs transportaient du matériel puis aussi des voyageurs entre Meiringen et Innertkirchen. En 1977, la ligne a été électrifiée en 1200 V continu ; ensuite ont circulé des automotrices à pantographe.', 'La voiture 5 figure aujourd’hui comme véhicule historique de la MIB (BDa 125 005).'] },
      { titel: 'Équipement et accessibilité', liste: ['Entraînement par batterie, sans caténaire', 'Compartiment voyageurs', 'Conservées : no 5 et no 4 (musée)'] }
    ],
  bilder: ['Automotrice à accumulateurs CFa 2/2 5 à Innertkirchen (2021)', 'Automotrice à accumulateurs 5 (vers 1976)']
});
uebZug('zb-hist-wagen', {
  name: 'Voitures historiques', beiname: 'Brünig et LSE',
  typ: 'Voitures voyageurs et voitures-restaurants historiques (historique)',
  text: ['De nombreuses anciennes voitures de la ligne du Brünig sont conservées pour des courses spéciales : voitures en bois des années 1920, voitures en acier léger comme la voiture Landi de 1939, et voitures-restaurants.', 'Elles appartiennent en partie à CFF Historic, en partie à des associations, et ne font pas partie du parc ordinaire de la Zentralbahn.'],
  kennzahlen: [['1925', 'plus ancienne voiture (A 260)'], ['1939', 'voiture Landi A 101'], ['80 km/h', 'vitesse maximale'], ['WR 426', 'voiture-restaurant']],
  daten: { 'Bauart': 'voitures voyageurs et voitures-restaurants historiques', 'Hersteller': 'SIG et autres', 'Betreiber': 'CFF Historic, zb Historic et associations', 'Höchstgeschwindigkeit': 'généralement 80 km/h' },
  specNote: 'Selon les fiches du Verein Engelbergbahn. Une fiche de musée ne confirme ni l’emplacement actuel ni une révision valable.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['Avant la réforme des classes, C désignait la 3e classe ; les lettres actuelles ne disent donc pas toujours comment une voiture était aménagée autrefois.'],
        tabelle: { kopf: ['Voiture', 'Construction', 'Longueur', 'Places', 'Particularité'], zeilen: [
          ['A 260', '1925 (SIG)', '13,61 m', '36', '1re classe, rénovation prévue'], ['B 761, B 762', '1927, 1928 (SIG)', '14,48 m', '60', 'sièges en bois, anciennement C 4805 et C 4808'],
          ['BC 451, BC 452', '1927 (SIG)', '14,48 m', '56', 'plus tard voitures de service X 9985 et X 9988'], ['A 101', '1939', '16,47 m', '28', 'voiture Landi pour l’Exposition nationale'],
          ['AB 473', '1946', '16,47 m', '64', 'CFF Historic, voiture en acier léger'], ['A 111, A 181', '1947, 1949', '16,74 m', '34', '1re classe'],
          ['B 865', '1954', '16,74 m', '64', '2e classe'], ['WR 426', '1945, transformée en 1997', '16,74 m', '28', 'voiture-restaurant'], ['WR 825', '1931/32', '–', '–', 'plus tard cuisine d’équipe, endommagée']] } },
      { titel: 'Service et technique', p: ['Les voitures circulent dans des trains historiques, souvent derrière la Deh 4/6 ou des locomotives à vapeur de la Brünig-Dampfbahn. La présence d’un frein à crémaillère dépend de chaque voiture et décide où elle peut circuler.'] },
      { titel: 'Équipement et accessibilité', liste: ['Sièges en bois dans les anciennes voitures B', 'Cuisine et salle à manger dans la WR 426', 'Plancher haut, pas de plain-pied', 'Pas de motorisation propre'] }
    ],
  bilder: ['Deh 4/6 914 avec les voitures B 865, WR 426 et AB 473 à Meiringen (2013)', 'Voiture-restaurant WR 426 (2013)']
});
uebZug('zb-lse-gueterwagen', {
  name: 'Wagons marchandises et de service', beiname: 'LSE et Brünig',
  typ: 'Wagons marchandises, à skis et de service historiques (historique)',
  text: ['Les chemins de fer du Brünig et d’Engelberg transportaient autrefois aussi des marchandises. Sont conservés entre autres des wagons couverts de la LSE qui ont servi plus tard de wagons à skis et à vélos.', 'S’y ajoutent des wagons de service comme un wagon-atelier et un wagon-grue.'],
  kennzahlen: [['4', 'Hb-v 261–264'], ['1969', 'construction (Hb-v)'], ['16 t', 'charge utile'], ['8,5 t', 'tare']],
  daten: { 'Bauart': 'wagons marchandises, à skis et de service', 'Betreiber': 'LSE, ligne du Brünig', 'Fahrzeugnummern': 'Hb-v 261–264 ; Haik-v 271, 272 ; Ua 9857 ; X 9742 ; wagon-grue', 'Gewicht': '8,5 t à vide (Hb-v)' },
  specNote: 'Selon les archives du Verein Engelbergbahn. Il s’agit d’un registre de types documenté, pas d’une liste complète des wagons ; il ne prouve aucun trafic marchandises actuel de la Zentralbahn.',
  abschnitte: [
      { titel: 'Constructeur et composition de la flotte', p: ['SWS a construit en 1969 les quatre wagons couverts Hb-v 261–264 pour la ligne du Brünig ; la LSE les a repris. Les wagons à parois coulissantes Haik-v 271 et 272 proviennent de fourgons postaux. S’y ajoute un ancien truck transbordeur Ua 9857.'] },
      { titel: 'Service et technique', p: ['Les Hb-v 261 et 262 ont été aménagés en wagons à skis et à vélos, les autres servaient de dépôt. Le wagon-atelier X 9742 s’occupe aujourd’hui des véhicules historiques. Pour l’ancien wagon-grue, les archives donnent deux numéros (X 9762 et X 9962).', 'La C 827 de 1933 a servi plus tard de wagon à matériel et à câbles et a été démolie.'] },
      { titel: 'Équipement et accessibilité', liste: ['Wagons couverts à portes coulissantes', 'Wagons à skis et à vélos (261, 262)', 'Wagon-atelier et wagon-grue pour le service', 'Pas de motorisation propre'] }
    ]
});

/* cartes « Où circule-t-il ? » */
uebEinsatz({
  'zb-adler': 'Surtout comme Luzern–Interlaken Express par le Brünig. La voie métrique est en pointillé et simplifiée.',
  'zb-fink': 'Sur le RER de Lucerne, entre Meiringen et Interlaken Ost, en renfort des ADLER et sur la branche d’Engelberg. La voie métrique est en pointillé et simplifiée.',
  'zb-fink-neu': 'Prévu dès décembre 2026 sur le RE44 Lucerne–Engelberg ; plus tard aussi sur d’autres lignes. La voie métrique est en pointillé et simplifiée.',
  'zb-spatz': 'Sur le RER de Lucerne, par exemple vers Giswil et Stans, et entre Meiringen et Interlaken Ost. Sans roue dentée, pas par le Brünig. La voie métrique est en pointillé et simplifiée.',
  'zb-hge44ii': 'Aujourd’hui surtout dans le Luzern–Engelberg Express et des trains supplémentaires ; jusqu’en 2012 en tête de tous les trains express par le Brünig. La voie métrique est en pointillé et simplifiée.',
  'zb-bdeh140': 'Autrefois sur toute la ligne Lucerne–Engelberg ; la 140 007 se trouve au Musée suisse des transports à Lucerne. La voie métrique est en pointillé et simplifiée.',
  'zb-mib': 'Sur la ligne Meiringen–Innertkirchen, longue d’un peu moins de 5 km, en 1200 V continu. La voie métrique est en pointillé et simplifiée.',
  'zb-wagen': 'Dans le Luzern–Engelberg Express et les trains saisonniers derrière une HGe 4/4 II. La voie métrique est en pointillé et simplifiée.',
  'zb-hgm104': 'Avec des trains de travaux et en service hivernal sur tout le réseau, aussi sur les crémaillères. La voie métrique est en pointillé et simplifiée.',
  'zb-gm105': 'Avec des trains de travaux sur les lignes sans crémaillère, aussi à la MIB. La voie métrique est en pointillé et simplifiée.',
  'zb-deh46': 'Dès 1941 sur toute la ligne du Brünig ; aujourd’hui conservées comme véhicules historiques. La voie métrique est en pointillé et simplifiée.',
  'zb-hge44i': 'Surtout sur la section de montagne entre Giswil et Meiringen. La voie métrique est en pointillé et simplifiée.',
  'zb-lse-diesel': 'Autrefois à la LSE, par exemple à Stansstad et dans les gares vers Engelberg. La voie métrique est en pointillé et simplifiée.',
  'zb-traktoren': 'Autrefois en manœuvre dans les gares et ateliers de la ligne du Brünig et de la LSE.',
  'zb-g34': 'Autrefois sur les sections plates de la ligne du Brünig ; aujourd’hui à la Brünig-Dampfbahn. La voie métrique est en pointillé et simplifiée.',
  'zb-hg33': 'Autrefois par le Brünig ; aujourd’hui à la Brünig-Dampfbahn, la 1063 au Musée suisse des transports à Lucerne. La voie métrique est en pointillé et simplifiée.',
  'zb-mib-akku': 'Autrefois entre Meiringen et Innertkirchen ; la numéro 4 se trouve au Musée suisse des transports à Lucerne. La voie métrique est en pointillé et simplifiée.',
  'zb-hist-wagen': 'Dans des trains historiques sur la ligne du Brünig. La voie métrique est en pointillé et simplifiée.',
  'zb-lse-gueterwagen': 'Autrefois en trafic marchandises et de service au Brünig et vers Engelberg. La voie métrique est en pointillé et simplifiée.'
});
