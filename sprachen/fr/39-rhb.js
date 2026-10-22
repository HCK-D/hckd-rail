/* Français – Chemins de fer rhétiques (RhB) */
uebDict({
  'Rhätische Bahn': 'Chemins de fer rhétiques', 'RhB': 'RhB', 'Stadler': 'Stadler',
  '11 kV 16,7 Hz': '11 kV 16,7 Hz', '1000 V Gleichstrom': '1000 V continu', '11 kV 16,7 Hz · 1000 V Gleichstrom': '11 kV 16,7 Hz · 1000 V continu',
  'Kein eigener Antrieb': 'Pas de propulsion propre', 'Diesel': 'diesel'
});

/* ---------- trafic voyageurs ---------- */
uebZug('rhb-capricorn', {
  typ: 'Automotrice régionale Stadler à quatre caisses pour le réseau de base',
  text: ['Le Capricorn est le plus récent train régional des RhB. Stadler construit ces rames à quatre caisses depuis 2019 ; elles transportent des voyageurs depuis 2020.', 'Plusieurs rames peuvent être couplées et séparées automatiquement. Elles partent ensemble puis desservent des destinations différentes.'],
  kennzahlen: [['56', 'rames en service (3111–3166)'], ['164', 'places assises'], ['120 km/h', 'vitesse maximale'], ['2020', 'en service voyageurs']],
  daten: { 'Bauart': 'automotrice électrique à plancher bas, 4 caisses', 'Fahrzeugnummern': '3111–3166, extension jusqu’à 3172', 'Länge': '76,4 m hors attelages', 'Gewicht': '119 t à vide, 146 t en charge', 'Leistung': '1000 kW continus, 1600 kW au maximum (à la jante)', 'Sitzplätze': '35 en 1re, 129 en 2e classe, plus 18 strapontins', 'Anzahl': '56 rames, 6 autres dès fin 2026' },
  specNote: 'Données techniques selon Stadler (fiche TMRHB0922e) et les RhB. Les RhB indiquent 1000 kW de puissance continue, Stadler 1600 kW de puissance maximale. Une ancienne page publicitaire indique 114 t sans référence claire ; ici valent 119 t à vide selon la page de projet des RhB.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler construit les Capricorn pour les RhB. Les premiers véhicules ont été construits en 2019 ; la rame 3111 a circulé pour la première fois en service régulier le 17 juin 2020. La série de base compte 56 rames numérotées 3111–3166.', 'Les RhB annoncent six rames supplémentaires livrées au second semestre 2026 ; les registres leur attribuent des numéros jusqu’à 3172. Chaque voiture a aussi son propre numéro, par exemple Be 4/4 31011 dans la rame 3111.'] },
      { titel: 'Utilisation et technique', p: ['Selon les RhB, les Capricorn circulent sur Landquart–Davos–Filisur, Landquart–Scuol, Landquart–St-Moritz et Coire–Disentis/Mustér. Deux à quatre rames peuvent rouler ensemble et se séparer à Klosters Platz.', 'La motrice a quatre essieux moteurs et tire trois autres voitures. La rame mesure 76,4 m, pèse 119 t à vide et roule jusqu’à 120 km/h. L’effort au démarrage atteint 142 kN, la puissance de freinage électrique jusqu’à 2200 kW.'] },
      { titel: 'Équipement et accessibilité', liste: ['164 places assises : 35 en 1re et 129 en 2e classe, plus 18 strapontins', 'Trois larges accès à plancher bas, 2 places pour fauteuils roulants et des toilettes accessibles', 'Jusqu’à 12 places pour vélos dans des compartiments multifonctions', 'Climatisation, deux prises par compartiment et image de la caméra frontale sur les écrans', 'Tables à langer dans les deux toilettes'] }
    ],
  bilder: ['Capricorn 3112 près de Bever (2021)', 'Capricorn entre Davos Wolfgang et Davos Laret (2020)', 'Capricorn 3122 et 3119 couplés à Davos Dorf (2024)']
});
uebZug('rhb-allegra', {
  typ: 'Automotrice bicourant à trois caisses pour le réseau de base et la ligne de la Bernina',
  text: ['L’Allegra circule en courant alternatif sur le réseau de base et en courant continu sur la ligne de la Bernina. Il relie ainsi les deux réseaux sans changement de locomotive.', 'Les 15 rames Stadler peuvent tirer des voitures supplémentaires, par exemple les voitures panoramiques du Bernina Express.'],
  kennzahlen: [['15', 'rames (3501–3515)'], ['2600 kW', 'puissance (alternatif)'], ['100 km/h', 'vitesse maximale'], ['2010', 'en service régulier']],
  daten: { 'Bauart': 'automotrice électrique bicourant, 3 caisses', 'Gewicht': '106 t à vide', 'Leistung': '2600 kW (alternatif), 2400 kW (continu), à la jante', 'Sitzplätze': '24 en 1re, 76 en 2e classe, plus 14 strapontins', 'Anzahl': '15 rames' },
  specNote: 'Valeurs selon la fiche Stadler SRhBZS1009d. Des aperçus ultérieurs indiquent des valeurs plus élevées (2800 kW, 280 kN) ; sans fiche plus récente, les données d’origine restent ici.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler a livré 15 rames. La première remise a eu lieu à Landquart le 14 octobre 2009 ; le service régulier a commencé en 2010. L’achat a coûté environ 150 millions de francs.', 'Chaque rame porte le nom d’une personnalité grisonne.'],
        tabelle: { kopf: ['Rame', 'Nom', 'Rame', 'Nom'], zeilen: [
          ['3501', 'Willem Jan Holsboer', '3509', 'Placidus Spescha'], ['3502', 'Friedrich Hennings', '3510', 'Alberto Giacometti'], ['3503', 'Carlo Janka', '3511', 'Otto Barblan'],
          ['3504', 'Dario Cologna', '3512', 'Jörg Jenatsch'], ['3505', 'Giovanni Segantini', '3513', 'Simeon Bavier'], ['3506', 'Anna von Planta', '3514', 'Steivan Brunies'],
          ['3507', 'Benedetg Fontana', '3515', 'Alois Carigiet'], ['3508', 'Richard Coray', '', '']] } },
      { titel: 'Utilisation et technique', p: ['Deux voitures d’extrémité motorisées encadrent une voiture porteuse ; 8 des 12 essieux sont moteurs. Quatre chaînes de traction indépendantes avec convertisseurs IGBT refroidis à l’eau rendent la rame robuste.', 'Sur la ligne de la Bernina, l’Allegra tire des voitures supplémentaires sur des rampes jusqu’à 70 pour mille. Le 20 décembre 2010, la rame 3502 a atteint 145 km/h dans le tunnel de la Vereina, un record pour la voie métrique.'] },
      { titel: 'Équipement et accessibilité', liste: ['100 places assises : 24 en 1re et 76 en 2e classe, plus 14 strapontins', '2 places pour fauteuils roulants, toilettes fermées accessibles et marchepied coulissant', 'Accès à plancher bas dans la partie centrale (480 mm) ; le reste du plancher est haut', 'Climatisation et information voyageurs sur écrans', 'Vue vers l’avant depuis la 1re classe derrière la cabine'] }
    ],
  bilder: ['Allegra avec un train régional entre Bernina Lagalb et Ospizio Bernina (2011)', 'Allegra 3504 à Coire (2022)', 'Allegra près d’Alp Grüm (2024)']
});
uebZug('rhb-allegra-stz', {
  typ: 'Automotrice à quatre caisses du réseau de base pour le RER de Coire',
  text: ['Les cinq Allegra 3101–3105 à quatre caisses sont dérivés de l’Allegra bicourant. Ils circulent uniquement en courant alternatif et n’ont qu’une seule voiture motorisée.', 'Les RhB les utilisent surtout pour le trafic pendulaire autour de Coire.'],
  kennzahlen: [['5', 'rames (3101–3105)'], ['180', 'places assises'], ['100 km/h', 'vitesse maximale'], ['2013', 'en service régulier']],
  daten: { 'Bauart': 'automotrice électrique à plancher bas, 4 caisses', 'Länge': '74,75 m hors attelages', 'Gewicht': '113 t à vide', 'Leistung': '1400 kW au maximum à la jante', 'Höchstgeschwindigkeit': '100 km/h (techniquement 120 km/h)', 'Sitzplätze': '24 en 1re, 156 en 2e classe, plus 22 strapontins', 'Anzahl': '5 rames' },
  specNote: 'Valeurs selon la fiche Stadler SRhBSN0910d. La page publicitaire des RhB indique 140 t sans référence claire et 1160 kW de puissance continue.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler a construit les cinq rames en dérivant l’Allegra bicourant. Selon le constructeur, elles circulent en service régulier depuis 2013 ; certaines voitures ont été construites plus tôt.', 'Les rames s’appellent 3101 « Meta von Salis », 3102 « Richard La Nicca », 3103 « Hortensia von Gugelberg », 3104 « Achilles Schucan » et 3105 « Angelika Kauffmann ». Malgré la même désignation ABe 4/16, ce ne sont pas des Capricorn.'] },
      { titel: 'Utilisation et technique', p: ['Une motrice tire deux voitures intermédiaires à plancher bas et une voiture-pilote. Deux chaînes de traction redondantes avec convertisseurs IGBT refroidis à l’eau fournissent jusqu’à 1400 kW.', 'Les RhB les engagent dans le trafic pendulaire de l’agglomération de Coire, par exemple sur le RER Coire–Thusis. Des photos les montrent aussi en Engadine.'] },
      { titel: 'Équipement et accessibilité', liste: ['180 places assises : 24 en 1re et 156 en 2e classe, plus 22 strapontins', 'Accès à plancher bas de 480 mm, portes larges de 1,2 m', 'Zone pour fauteuils roulants, espace multifonction et toilettes fermées accessibles', 'Climatisation et information voyageurs sur écrans'] }
    ],
  bilder: ['Allegra 3104 en RER Coire–Thusis près de Felsberg (2015)', 'Allegra 3101 à Samedan (2021)', '1re classe de l’Allegra 3103 (2016)']
});
uebZug('rhb-alvra', {
  beiname: 'rames articulées 5701–5706',
  typ: 'Rames articulées tractées pour la ligne de l’Albula',
  text: ['Les six rames Alvra sont formées de voitures articulées attelées en permanence. Elles n’ont pas de propulsion propre ; une locomotive les tire.', 'Depuis 2016, elles circulent sur la ligne de l’Albula entre Coire et St-Moritz. « Alvra » est le nom romanche de l’Albula.'],
  kennzahlen: [['6', 'rames (5701–5706)'], ['280', 'places assises'], ['4', 'places pour fauteuils roulants'], ['2016', 'en service']],
  daten: { 'Bauart': 'rame articulée de 6 voitures, plus une voiture-pilote', 'Antrieb': 'pas de propulsion propre (locomotive)', 'Fahrzeugnummern': '5701–5706 ; voitures-pilotes At 57801–57806', 'Sitzplätze': '63 en 1re, 217 en 2e classe, plus 13 strapontins', 'Anzahl': '6 rames' },
  specNote: 'Nombre de places selon la page de projet des RhB ; il vaut pour la rame décrite et change avec des voitures supplémentaires.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les rames Alvra 5701–5706 se composent des voitures articulées A 570, AB 572, B 573, B 574, Bi 576 et B 577. S’y ajoutent les voitures-pilotes At 57801–57806, grâce auxquelles la rame change de sens sans que la locomotive doive manœuvrer.', 'Les voitures supplémentaires sont des véhicules distincts. Depuis 2024, les voitures à vélos BD 56401–56406, transformées à partir d’anciennes voitures-pilotes, circulent avec elles.'] },
      { titel: 'Utilisation et technique', p: ['Les rames circulent depuis 2016 sur la ligne de l’Albula Coire–St-Moritz et sont tirées par une locomotive de ligne des RhB.', 'Dans une rame articulée, des voitures courtes sont reliées en permanence. Certaines voitures ont une partie à plancher bas pour un accès de plain-pied.'] },
      { titel: 'Équipement et accessibilité', liste: ['280 places assises : 63 en 1re et 217 en 2e classe, plus 13 strapontins', 'Accès à plancher bas avec marchepied coulissant, 4 places pour fauteuils roulants et toilettes accessibles', 'Climatisation et information voyageurs', 'Compartiment famille avec coin jeux, compartiment loisirs pour le matériel de sport et compartiment photo à grandes fenêtres'],
        tabelle: { kopf: ['Voiture', 'Fonction'], zeilen: [
          ['A 570', 'voiture d’extrémité 1re classe avec toilettes'], ['AB 572', 'voiture 1re et 2e classe'], ['B 573, B 574', '2e classe avec place pour vélos ou poussettes'],
          ['Bi 576', 'voiture d’extrémité 2e classe, plancher bas, zone fauteuils roulants, toilettes accessibles et compartiment photo'], ['B 577', '2e classe avec compartiment famille et loisirs et coin jeux'],
          ['At 578', 'voiture-pilote 1re classe, plancher bas, zone fauteuils roulants et toilettes accessibles']] } }
    ],
  bilder: ['Rame Alvra entre Filisur et Alvaneu (2023)', 'Dans une rame articulée Alvra (2017)', 'Coin jeux du compartiment loisirs (2024)', 'Voiture-pilote At 578 d’une rame Alvra (2018)']
});
uebZug('rhb-ge44ii', {
  typ: 'Locomotive électrique de ligne pour trains voyageurs et marchandises',
  text: ['Pendant des décennies, les Ge 4/4 II ont marqué le trafic sur le réseau de base des RhB. SLM et BBC ont construit les 23 locomotives en 1973 et 1984/85.', 'Elles tirent des trains voyageurs et marchandises. Certaines sont retirées depuis 2019.'],
  kennzahlen: [['23', 'locomotives construites (611–633)'], ['1700 kW', 'puissance unihoraire'], ['90 km/h', 'vitesse maximale'], ['1973', 'première série']],
  daten: { 'Bauart': 'locomotive électrique', 'Länge': '12,96 m hors tampons', 'Leistung': '1700 kW (puissance unihoraire)', 'Anzahl': '23 construites' },
  specNote: 'La page publicitaire des RhB indique 1700 kW comme puissance continue, Wikipédia comme puissance unihoraire. Sur les 23 locomotives, plusieurs ont déjà été démolies (628, 619, 616, 613).',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SLM a construit les parties mécaniques, BBC l’équipement électrique. La première série 611–620 est arrivée en 1973, la deuxième série 621–633 en 1984/85.', 'Les locomotives portent des noms de communes grisonnes, par exemple 611 « Landquart » ou 633 « Zuoz ». Depuis avril 2024, la 611 circule de nouveau dans son vert d’origine.'] },
      { titel: 'Utilisation et technique', p: ['Les Ge 4/4 II tirent des trains régionaux et rapides ainsi que des trains de marchandises sur le réseau à courant alternatif des RhB, y compris la ligne d’Arosa. Avec les voitures-pilotes BDt 1751 et 1752, elles circulent aussi en navette.', 'Quatre moteurs de traction développent 1700 kW. La locomotive mesure 12,96 m, pèse 50 t et roule jusqu’à 90 km/h. Depuis 2016, elles reçoivent le système de sécurité ZSI 127 et un double frein. Dès 2019, les 628, 619, 616 et 613 ont été démolies.'] },
      { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Frein électrique rhéostatique', 'Service en navette avec les voitures-pilotes BDt 1751 et 1752', 'Depuis 2016 : système ZSI 127 et double frein'] }
    ],
  bilder: ['Ge 4/4 II 617 à Filisur (2022)', 'Ge 4/4 II 611 « Landquart » en livrée verte à Disentis/Mustér (2024)', 'Ge 4/4 II 622 (2024)']
});
uebZug('rhb-ge44iii', {
  typ: 'Locomotive électrique de ligne pour l’Albula et la Vereina',
  text: ['Les Ge 4/4 III sont les locomotives de ligne les plus puissantes des RhB. Les douze locomotives 641–652 sont arrivées de 1993 à 1999 ; la 653 est une ancienne locomotive du MOB.', 'Presque toutes portent une publicité colorée. Elles tirent les trains rapides sur l’Albula et les trains autos dans le tunnel de la Vereina.'],
  kennzahlen: [['13', 'locomotives (641–653)'], ['2400 kW', 'puissance continue'], ['100 km/h', 'vitesse maximale'], ['1993', 'première locomotive']],
  daten: { 'Bauart': 'locomotive électrique à moteurs triphasés', 'Fahrzeugnummern': '641–652, plus 653 (ex MOB 8003)', 'Länge': '16,00 m hors tampons', 'Leistung': '2400 kW continus' },
  specNote: 'Valeurs selon la page publicitaire des RhB et Wikipédia. La 653 a été construite comme MOB 8003 ; construction, achat, transformation et mise en service aux RhB sont des événements distincts.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Dès 1989, les RhB ont développé la locomotive avec SLM et ABB pour absorber le trafic supplémentaire après l’ouverture du tunnel de la Vereina. La 641 a circulé dès le 7 décembre 1993, les 642–652 ont suivi jusqu’en 1999 en trois commandes ; les 650–652 ont été livrées par Adtranz.', 'En 2019, les RhB ont acheté la locomotive 8003 du MOB. Elle a servi de modèle pour la modernisation et circule comme 653 « St. Moritz ».'] },
      { titel: 'Utilisation et technique', p: ['Les locomotives tirent les trains rapides sur l’Albula, le Glacier Express et les trains autos dans le tunnel de la Vereina. Des moteurs triphasés avec convertisseurs GTO développent 2400 kW en continu.', 'La locomotive mesure 16,00 m, pèse 62 t et roule jusqu’à 100 km/h. Depuis 2016, elles sont modernisées ; la 644 a été la première, avec double frein, nouveaux bogies et équipements pour le système ZSI 127.'] },
      { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Entraînement triphasé à quatre moteurs', 'Modernisation depuis 2016 : double frein, nouveaux bogies, ZSI 127', 'La publicité est la décoration de locomotives isolées, pas un type à part'] }
    ],
  bilder: ['Ge 4/4 III 641 « Maienfeld » (2023)', 'Ge 4/4 III 644 avec la publicité du record du monde (2023)', 'Ge 4/4 III 647 « Grüsch » à St-Moritz (2018)']
});
uebZug('rhb-panorama', {
  name: 'Voitures panoramiques et d’observation',
  typ: 'Voitures panoramiques du Bernina Express et voitures d’observation ouvertes',
  text: ['Pour le Bernina Express, les RhB ont leurs propres voitures panoramiques avec de grandes fenêtres jusque dans le toit. S’y ajoutent des voitures d’observation ouvertes pour l’été.', 'Les voitures n’ont pas de propulsion propre ; un Allegra ou une locomotive les tire.'],
  kennzahlen: [['2000', 'premières voitures panoramiques'], ['2006/07', 'voitures Stadler'], ['1re et 2e', 'classe'], ['ouvertes', 'voitures d’observation en été']],
  daten: { 'Bauart': 'voitures panoramiques et voitures d’observation ouvertes', 'Fahrzeugnummern': 'Ap 1291–1293, 1301–1306 ; Bp 2502–2507, 2521–2526 ; Bps 2511–2515 ; voitures ouvertes B 2091 ss. et 2111' },
  specNote: 'Numéros selon le registre des voitures de Haribu (état septembre 2026). Le nombre de places dépend de la version et n’est pas indiqué sans plan de voiture actuel.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les premières voitures panoramiques ont été construites en 2000. En 2006/07, Stadler a livré d’autres voitures de 1re et 2e classe. Les voitures de service Bps 2511–2515 proviennent en partie de voitures plus anciennes.'],
        tabelle: { kopf: ['Groupe', 'Numéros', 'Construction'], zeilen: [
          ['Voiture panoramique 1re classe', 'Ap 1291–1293', '2000'], ['Voiture panoramique 1re classe', 'Ap 1301–1306', '2006/07 (Stadler)'], ['Voiture panoramique 2e classe', 'Bp 2502–2507', '2000'],
          ['Voiture de service 2e classe', 'Bps 2511–2515', '2511 issue de la voiture 2501, les autres 2006/07'], ['Voiture panoramique 2e classe', 'Bp 2521–2526', '2006/07 (Stadler)']] } },
      { titel: 'Utilisation et technique', p: ['Le Bernina Express relie Coire à Tirano par l’Albula et le col de la Bernina. Le nom désigne le train et non une série de véhicules ; sur la ligne de la Bernina, c’est souvent un Allegra qui tire les voitures.', 'Les voitures d’observation ouvertes des groupes 2091 ss. et 2111 ont été transformées à partir de voitures plus anciennes. Elles circulent en été, par exemple sur la ligne de la Bernina et dans les gorges du Rhin.'] },
      { titel: 'Équipement et accessibilité', liste: ['Grandes fenêtres panoramiques jusque dans le toit', 'Voitures de service avec leur propre aménagement', 'Voitures d’observation ouvertes sans vitres pour l’été', 'Pas de propulsion propre'] }
    ],
  bilder: ['Bernina Express avec voitures panoramiques (2018)', 'Voiture panoramique à Alp Grüm', 'Voiture d’observation ouverte à Pontresina']
});
uebZug('rhb-glacier', {
  name: 'Voitures du Glacier Express',
  typ: 'Voitures panoramiques et de service des RhB pour le Glacier Express',
  text: ['Le Glacier Express relie St-Moritz et Davos à Zermatt. Les RhB fournissent leurs propres voitures panoramiques et de service, le MGB d’autres.', 'Depuis 2018, il existe la voiture Excellence Class Aps 1321.'],
  kennzahlen: [['6', 'voitures panoramiques Ap 1310–1315'], ['7', 'voitures panoramiques Bp 2531–2537'], ['3', 'voitures de service WRp 3830–3832'], ['2018', 'Excellence Class']],
  daten: { 'Bauart': 'voitures panoramiques et voitures de service', 'Betreiber': 'RhB (Glacier Express avec le MGB)' },
  specNote: 'Numéros selon les registres de Haribu. Les voitures du MGB sont des véhicules distincts et ne sont pas comptées ici.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['La part des RhB comprend les voitures panoramiques Ap 1310–1315 et Bp 2531–2537 ainsi que les voitures de service WRp 3830–3832.', 'La voiture Excellence Class Aps 1321 est issue de la Bp 2538 de 2009 et a été transformée en 2018. Il s’agit donc de la même voiture, pas d’une voiture supplémentaire.'] },
      { titel: 'Utilisation et technique', p: ['Les voitures circulent dans le Glacier Express sur les réseaux des RhB et du MGB. Comme le MGB a des tronçons à crémaillère, les voitures sont équipées en conséquence ; selon une description de photo, la voiture de service WRp 3832 n’a pas de roue dentée de frein.', 'Un Glacier Express formé de deux rames est séparé à Disentis/Mustér, car un poids de train plus faible s’applique sur les tronçons à crémaillère du MGB.'] },
      { titel: 'Équipement et accessibilité', liste: ['Fenêtres panoramiques jusque dans le toit', 'Voitures de service WRp pour la restauration à bord', 'Excellence Class dans l’Aps 1321', 'Pas de propulsion propre'] }
    ],
  bilder: ['Glacier Express dans les gorges du Rhin avant Ilanz (2009)', 'Voiture de service WRp 3832 du Glacier Express à Disentis/Mustér (2022)']
});
uebZug('rhb-ew', {
  name: 'Voitures unifiées',
  typ: 'Voitures voyageurs des RhB pour trains régionaux et rapides',
  text: ['Les voitures unifiées EW I à EW IV sont les voitures voyageurs classiques des RhB. Elles ont été construites dès les années 1960 en plusieurs générations.', 'Chaque génération compte des voitures de longueurs, classes et états de transformation différents.'],
  kennzahlen: [['4', 'générations (EW I–IV)'], ['1968', 'EW I (AB 1541–1546)'], ['1975', 'EW II (AB 1561–1565)'], ['1983', 'EW III']],
  daten: { 'Bauart': 'voitures voyageurs à bogies', 'Fahrzeugnummern': 'Exemples : AB 1541–1546 (EW I), AB 1561–1565 (EW II), A 1271–1272 et B 2461–2468 (EW III), A 1273–1275 et B 2491–2497 (EW IV)' },
  specNote: 'Les registres indiquent surtout les numéros, années de construction, bogies et freins. Les places et l’équipement dépendent de chaque voiture et ne sont donc pas indiqués.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les familles EW I à EW IV sont des groupes de développement. Exemples tirés du registre :'],
        tabelle: { kopf: ['Génération', 'Exemples', 'Construction', 'Bogie'], zeilen: [
          ['EW I', 'AB 1541–1546', '1968', 'SWP 68'], ['EW II', 'A 1265–1270, AB 1561–1565', '1975 (AB 1561–1565)', 'SWP 74'],
          ['EW III', 'A 1271–1272, B 2461–2468', '1983', '–'], ['EW IV', 'A 1273–1275, A 1282–1283, B 2391–2393, B 2491–2497', '–', 'SIG 90']] } },
      { titel: 'Utilisation et technique', p: ['Les voitures unifiées circulent dans des trains régionaux et rapides tractés sur tout le réseau, et sur la ligne de la Bernina aussi derrière l’Allegra. Les AB 1541–1546 ont un frein à air comprimé commandé par le vide : un signal de vide commande le frein, la force de freinage est produite par l’air comprimé.', 'Certaines EW III ont porté temporairement des numéros à cinq chiffres des séries 531 et 541 avant de retrouver leurs anciens numéros. Quelques EW IV portent la décoration « Arosa Bärenland ».'] },
      { titel: 'Équipement et accessibilité', liste: ['Voitures de 1re classe (A), de 2e classe (B) et mixtes (AB)', 'Équipement différent selon la génération et la transformation', 'Certaines EW I ont été transformées en 2002', 'Pas de propulsion propre'] }
    ],
  bilder: ['Train 1621 avec l’Allegra 3515 et des voitures voyageurs sur la ligne de la Bernina (2017)']
});
uebZug('rhb-steuerwagen', {
  name: 'Voitures-pilotes', beiname: 'BDt, Bt et At',
  typ: 'Voitures-pilotes pour trains navettes avec locomotive',
  text: ['Avec une voiture-pilote, un train tracté peut changer de sens sans que la locomotive doive manœuvrer. Le mécanicien commande alors la locomotive depuis la cabine de la voiture-pilote.', 'Les RhB ont plusieurs familles : les voitures-pilotes NEVA BDt, les Bt 52801–52808 de Stadler, celles des rames Alvra et celles des trains autos.'],
  kennzahlen: [['8', 'Bt 52801–52808 (Stadler 2018)'], ['6', 'At 57801–57806 (Alvra)'], ['2', 'BDt 1751–1752 (NEVA)'], ['4', 'BDt des trains autos']],
  daten: { 'Bauart': 'voiture-pilote sans propulsion propre', 'Fahrzeugnummern': 'BDt 1751–1752, Bt 52801–52808, At 57801–57806, BDt 1721–1723 et 1731' },
  specNote: 'Selon le registre des voitures-pilotes de Haribu (état 11 septembre 2026). Les voitures-pilotes des automotrices Allegra et Capricorn font partie de ces rames.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les voitures-pilotes NEVA BDt 1753–1758 ont été transformées en 2024 en voitures à vélos BD 56401–56406.'],
        tabelle: { kopf: ['Famille', 'Numéros', 'Remarque'], zeilen: [
          ['NEVA', 'BDt 1751–1752', 'pour Ge 4/4 II et automotrices'], ['Universelle', 'Bt 52801–52808', 'Stadler 2018'], ['Alvra', 'At 57801–57806', 'pour les rames articulées 5701–5706'],
          ['Trains autos Vereina', 'BDt 1721–1723, 1731', 'pour le transport des autos'], ['Navette Be 4/4', 'ABDt 1716', 'garée']] } },
      { titel: 'Utilisation et technique', p: ['La voiture-pilote a une cabine mais pas de moteur de traction. La puissance vient de la locomotive à l’autre extrémité du train.', 'Selon le registre, les BDt 1751 et 1752 conviennent aux Ge 4/4 II et aux automotrices. Une telle autorisation ne vaut que pour la combinaison nommée.'] },
      { titel: 'Équipement et accessibilité', liste: ['Cabine de conduite à une extrémité', 'BDt : 2e classe avec compartiment à bagages', 'At des rames Alvra : 1re classe, plancher bas, zone fauteuils roulants et toilettes accessibles', 'Pas de propulsion propre'] }
    ],
  bilder: ['Voiture-pilote Bt 528 de Stadler', 'Voiture-pilote NEVA BDt 1755 à Coire (2015)']
});
uebZug('rhb-gastro', {
  name: 'Voitures-restaurants et salons', beiname: 'WR et Pullman',
  typ: 'Voitures-restaurants, bars, Pullman et salons des RhB',
  text: ['Les RhB possèdent des voitures-restaurants historiques, des voitures-bars et les voitures Pullman de l’« Alpine Classic Pullman Express ». Elles circulent dans des trains charters et lors de courses spéciales.', 'Certaines voitures-restaurants datent de 1929 à 1931.'],
  kennzahlen: [['1929', 'plus anciennes voitures-restaurants'], ['4', 'voitures Pullman As 1141–1144'], ['3', 'voitures-restaurants WR 3810–3812'], ['2', 'voitures-bars WR-S 3820–3821']],
  daten: { 'Bauart': 'voitures-restaurants, bars et salons' },
  specNote: 'Selon le registre des voitures-restaurants de Haribu (état 13 décembre 2025). L’équipement vaut pour chaque voiture ; la disponibilité actuelle pour des charters n’est pas indiquée.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Selon le registre, l’As 1154 est prêtée au Deutsches Museum.'],
        tabelle: { kopf: ['Voiture', 'Construction', 'Remarque'], zeilen: [
          ['WR 3810–3812', '1929/30', 'voitures-restaurants historiques'], ['WR 3813', '1931', 'transformée à partir de l’A 1211'], ['WR 3815', '1984', 'voiture-restaurant'],
          ['WR-S 3820', '1928', 'piano-bar, transformée en 2010 (auparavant WR-S 3814)'], ['WR-S 3821', '1929', '« Stiva Retica », transformée en 1993'],
          ['As 1141–1144', '1931', 'voitures Pullman'], ['As 1161', '1929', 'voiture-salon']] } },
      { titel: 'Utilisation et technique', p: ['Les voitures Pullman As 1141–1144 circulent dans l’« Alpine Classic Pullman Express », par exemple en 2024 avec la Ge 4/4 I 605 historique. Les voitures-restaurants roulent dans des trains spéciaux et charters.', 'Les voitures de service WRp 3830–3832 du Glacier Express sont des véhicules plus récents et non des voitures-restaurants historiques.'] },
      { titel: 'Équipement et accessibilité', liste: ['Cuisine et salle à manger dans les WR', 'Piano-bar dans la WR-S 3820, bar « Stiva Retica » dans la WR-S 3821', 'Compartiments salons de 1re classe dans les voitures Pullman', 'Pas de propulsion propre'] }
    ],
  bilder: ['Voiture Pullman As 1141 à Pontresina (2011)', 'Voiture-restaurant WR 3810 (2009)', 'Dans la voiture-restaurant WR 3810 (2014)']
});
uebZug('rhb-vereina', {
  name: 'Trains autos',
  typ: 'Transport des autos par le tunnel de la Vereina',
  text: ['Depuis 1999, les RhB transportent des voitures par le tunnel de la Vereina entre Klosters Selfranga et Sagliains en Basse-Engadine.', 'Les trains autos se composent de wagons de transport spéciaux sur lesquels les voitures montent elles-mêmes, et de voitures-pilotes.'],
  kennzahlen: [['1999', 'ouverture'], ['19 km', 'longueur du tunnel'], ['4', 'voitures-pilotes BDt'], ['2', 'gares de chargement']],
  daten: { 'Bauart': 'wagons porte-autos et voitures-pilotes', 'Fahrzeugnummern': 'Skl-tv 8421–8499 (anciens), Slp-tvw 71201 ss. et 71301 ss., Slp-tv 71401 ss. ; BDt 1721–1723, 1731' },
  specNote: 'Selon les registres de Haribu. Les séries plus récentes contiennent aussi des entrées sans année de construction ; elles ne sont pas comptées ici comme entièrement livrées.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Pour le transport des autos dans le tunnel de la Vereina, ouvert en 1999, les RhB ont acheté des wagons spéciaux. Les anciens wagons de chargement et de transport s’appellent Skl-tv (groupes 8421 à 8499), les éléments plus récents Slp-tvw 71201 ss. et 71301 ss. ainsi que Slp-tv 71401 ss.', 'Les voitures-pilotes BDt 1721–1723 et 1731 font partie des trains autos.'] },
      { titel: 'Utilisation et technique', p: ['Les trains autos font la navette entre Klosters Selfranga et Sagliains. Aux gares de chargement, les voitures montent sur les wagons par des rampes et en redescendent à l’autre extrémité.', 'Une locomotive, généralement une Ge 4/4 III, tire ou pousse le train ; à l’autre extrémité se trouve une voiture-pilote.'] },
      { titel: 'Équipement et accessibilité', liste: ['Wagons plats sur lesquels les voitures montent', 'Rampes aux gares de chargement de Klosters Selfranga et Sagliains', 'Voiture-pilote avec cabine', 'Les voyageurs restent dans leur voiture pendant le trajet'] }
    ],
  bilder: ['Vue dans un wagon de transport du train autos de la Vereina', 'Train autos à Sagliains (2014)']
});
uebZug('rhb-gepaeckwagen', {
  name: 'Fourgons, voitures à vélos et de chauffage',
  typ: 'Voitures pour bagages, vélos et chauffage des trains',
  text: ['Les RhB ont leurs propres voitures pour les bagages, les vélos et le chauffage des trains. La plupart proviennent de la transformation d’anciennes voitures voyageurs.', 'Une voiture de chauffage fournit de l’énergie au train, mais ne se déplace pas seule.'],
  kennzahlen: [['6', 'voitures à vélos BD 56401–56406 (2024)'], ['8', 'voitures à vélos WS'], ['3', 'voitures de chauffage DS'], ['2024', 'transformation la plus récente']],
  daten: { 'Bauart': 'fourgons, voitures à vélos et de chauffage' },
  specNote: 'Selon les registres de Haribu. L’année de transformation n’est pas l’année de construction de la voiture d’origine.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les BD 2471–2474 sont des EW II transformées, la BD 2475 une EW IV transformée, la BD 2481 provient du DZ 4233. Les six BD 56401–56406 ont été transformées en 2024 à partir des voitures-pilotes NEVA BDt 1753–1758 et circulent comme voitures à vélos dans les rames Alvra.', 'Les voitures à vélos WS 3911–3914, 3921–3922 et 3931–3932 sont aussi d’anciennes voitures voyageurs transformées.'] },
      { titel: 'Utilisation et technique', p: ['Une BD a des places de 2e classe et un compartiment à bagages. Les WS sont aménagées pour les vélos.', 'Les voitures de chauffage DS 4220, 4222 et 4226 fournissent l’énergie pour chauffer les trains. Elles n’ont pas de propulsion propre.'] },
      { titel: 'Équipement et accessibilité', liste: ['Compartiment à bagages (BD)', 'Places pour vélos (WS)', 'Énergie pour le chauffage du train (DS)', 'Pas de propulsion propre'] }
    ],
  bilder: ['Dans la voiture à vélos WS 3913 (2014)']
});

/* ---------- marchandises ---------- */
uebZug('rhb-haik', {
  beiname: 'wagons à parois coulissantes',
  typ: 'Wagons à quatre essieux à parois coulissantes pour marchandises diverses',
  text: ['Les wagons Haik ont de grandes parois latérales coulissantes. Ils se chargent et se déchargent ainsi rapidement.', 'Certains groupes sont isolés, chauffés ou réfrigérés, par exemple pour les denrées alimentaires et les boissons.'],
  kennzahlen: [['26 t', 'charge utile (5101–5135)'], ['30 t', 'charge utile (dès 5136)'], ['14,7 m', 'longueur'], ['1970', 'premiers wagons']],
  daten: { 'Bauart': 'wagon à quatre essieux à parois coulissantes', 'Fahrzeugnummern': '5101–5135 (Haik-v, Haik-vy), 5136–5140 et 5171–5172 ; wagons isolés 5161 ss.', 'Länge': '14,70 m hors tampons', 'Gewicht': '13,2–17,3 t à vide', 'Nutzlast': '26 ou 30 t' },
  specNote: 'Valeurs selon la page des wagons marchandises des RhB. Seuls certains wagons ont isolation, chauffage au sol ou groupe frigorifique ; c’est chaque wagon qui fait foi.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les RhB décrivent deux groupes principaux ainsi que des wagons isolés et thermorégulés.'],
        tabelle: { kopf: ['Groupe', 'En service', 'Tare', 'Charge utile', 'Longueur'], zeilen: [
          ['5101–5135 (Haik-v, Haik-vy)', '1970/80', '13,2–15,5 t', '26 t', '14,70 m'], ['5136–5140, 5171–5172', '1992', '16,1–17,3 t', '30 t', '14,67 m'],
          ['5161 ss. (isolés, thermorégulés)', '–', '–', '–', '–']] } },
      { titel: 'Utilisation et technique', p: ['Les wagons acheminent marchandises diverses, boissons et denrées dans les vallées grisonnes. Beaucoup portent la publicité d’un client ; cela n’implique pas une technique de réfrigération particulière.', 'Certains anciens wagons Haik ont été transformés en wagons porte-conteneurs.'] },
      { titel: 'Équipement et accessibilité', liste: ['Grandes parois latérales coulissantes', 'Wagons isolés avec chauffage au sol ou groupe frigorifique (5161 ss.)', 'Quatre essieux sur deux bogies'] }
    ],
  bilder: ['Wagon à parois coulissantes Haik-v 5134 à Zernez (2015)', 'Haiqq-tyz 5172 à Ilanz (2013)']
});
uebZug('rhb-uac', {
  beiname: 'wagons à ciment',
  typ: 'Wagons à quatre essieux pour pulvérulents (ciment)',
  text: ['Les Uac 7991–8000 transportent du ciment et d’autres marchandises pulvérulentes dans des réservoirs fermés. Ils sont déchargés à l’air comprimé.', 'Ils ont été mis en service en 1991.'],
  kennzahlen: [['10', 'wagons (7991–8000)'], ['34 t', 'charge utile'], ['34 m³', 'réservoir'], ['1991', 'mise en service']],
  daten: { 'Bauart': 'wagon à quatre essieux pour pulvérulents', 'Länge': '12,54 m hors tampons', 'Gewicht': '16,8 t à vide' },
  specNote: '34 t et 34 m³ sont deux grandeurs différentes ; le poids d’un chargement dépend de sa densité.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les dix Uac 7991–8000 ont été mis en service en 1991. Une génération plus ancienne à deux essieux figure encore au registre avec l’Uce 8017 de 1959, prêté au Musée Suisse des Transports en 2023.'] },
      { titel: 'Utilisation et technique', p: ['Le ciment voyage dans des réservoirs fermés et est déchargé à l’air comprimé, c’est-à-dire soufflé hors du réservoir.', 'Le wagon mesure 12,54 m, pèse 16,8 t à vide et transporte jusqu’à 34 t.'] },
      { titel: 'Équipement et accessibilité', liste: ['Réservoirs fermés pour pulvérulents', 'Déchargement à l’air comprimé', 'Quatre essieux'] }
    ]
});
uebZug('rhb-za', {
  beiname: 'wagons-citernes',
  typ: 'Wagons-citernes à quatre essieux pour huiles minérales',
  text: ['Les wagons-citernes Za acheminent mazout et carburants dans les Grisons. Les RhB en ont plusieurs groupes avec citerne de 42 ou 52 m³.', 'Sur certains wagons plus anciens, la citerne a été remplacée.'],
  kennzahlen: [['52 m³', 'plus grande citerne'], ['42 m³', 'citerne plus petite'], ['1973', 'plus ancienne série de base'], ['2005', 'groupe le plus récent']],
  daten: { 'Bauart': 'wagon-citerne à quatre essieux', 'Fahrzeugnummern': '8105–8113, 8121–8130, 8131–8140, 8141–8150 (groupes d’origine)', 'Volumen': '42 ou 52 m³' },
  specNote: 'Comparaison des séries selon la page des wagons marchandises des RhB, pas une liste des wagons en service aujourd’hui. Volume de la citerne, taux de remplissage et densité du produit sont des grandeurs différentes.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Le registre plus récent ne mentionne plus qu’une partie de ces séries.'],
        tabelle: { kopf: ['Groupe', 'Construction / mise en service', 'Citerne', 'Longueur'], zeilen: [
          ['8105–8113', '2002/03', '42 m³', '13,88 m'], ['8121–8130', '1998', '52 m³', '12,54 m'],
          ['8131–8140', '1973, en partie nouvelle citerne 1996/97', '42 m³', '11,04 m'], ['8141–8150', '2004/05', '52 m³', '12,54 m']] } },
      { titel: 'Utilisation et technique', p: ['Les wagons approvisionnent les Grisons en huiles minérales. Certains ont une conduite de retour des gaz qui récupère les vapeurs lors du remplissage.', 'Une nouvelle citerne sur un ancien châssis ne fait pas un nouveau wagon ; l’année du châssis et celle de la citerne sont des données distinctes.'] },
      { titel: 'Équipement et accessibilité', liste: ['Citerne de 42 ou 52 m³', 'Conduite de retour des gaz sur certains wagons', 'Quatre essieux'] }
    ],
  bilder: ['Wagon-citerne des RhB à Samedan (2006)']
});
uebZug('rhb-fac', {
  beiname: 'wagons pour vrac',
  typ: 'Wagons à quatre essieux pour vrac à déchargement par gravité',
  text: ['Les wagons Fac transportent gravier, gravillons et autres matériaux en vrac dans des trémies. Ils se déchargent par le bas ; la quantité peut être dosée.', 'Les anciens wagons basculants Fau servent aujourd’hui au ballast usagé lors des travaux de voie.'],
  kennzahlen: [['21–22 m³', 'trémie'], ['34 t', 'charge utile (jusqu’à)'], ['1968', 'groupe le plus ancien'], ['1993', 'groupe le plus récent']],
  daten: { 'Bauart': 'wagon à quatre essieux pour vrac', 'Nutzlast': '33 ou 34 t selon le groupe' },
  specNote: 'Valeurs selon la page des wagons marchandises des RhB et le registre F de Haribu.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Le registre contient les anciens groupes 8701–8712 de 1968/71 et les plus récents 8726 ss. de 1988/93.', 'Les anciens Fau 8761–8770 à fonction basculante figurent aujourd’hui au registre des wagons de service comme Xa-u pour le ballast usagé.'] },
      { titel: 'Utilisation et technique', p: ['Les trémies contiennent 21 à 22 m³. Des trappes s’ouvrent en bas et le chargement s’écoule par gravité de manière dosée.', 'Selon le groupe, les wagons portent 33 ou 34 t.'] },
      { titel: 'Équipement et accessibilité', liste: ['Trémie de 21–22 m³', 'Déchargement par gravité dosable', 'Quatre essieux'] }
    ],
  bilder: ['Ancien wagon basculant Fau 8769 à Thusis (2015)']
});
uebZug('rhb-flachwagen', {
  name: 'Wagons plats et à ranchers',
  typ: 'Wagons plats pour machines, bois, acier et conteneurs',
  text: ['Les wagons plats et à ranchers des RhB transportent engins de chantier, acier, matériaux de construction, bois et conteneurs. Des ranchers soutiennent le chargement sur les côtés.', 'Les plus récents sont les Re-t 65401–65410 polyvalents de 2010.'],
  kennzahlen: [['46 t', 'charge utile Re-t'], ['16,5 m', 'longueur'], ['10', 'Re-t 65401–65410'], ['2010', 'Re-t en service']],
  daten: { 'Bauart': 'wagons plats et à ranchers à quatre essieux' },
  specNote: 'Exemples selon la page des wagons plats des RhB, pas un inventaire complet. Pour les Sgp, les pages des RhB indiquent 19,5 et 20 t de tare ; elles divergent aussi sur la hauteur des ridelles des Re-t.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les Re-t 65401–65410 ont été mis en service en 2010, les Sgp 7601–7610 en 2008.'],
        tabelle: { kopf: ['Groupe', 'Longueur hors tampons', 'Charge utile'], zeilen: [
          ['R 8202–8218', '16,54 m', '33 t'], ['R 8241–8250', '16,14 m', '35 t'], ['R 8261–8270', '16,14 m', '35 t'], ['R 8371–8375', '16,54 m', '42 t'],
          ['R 8381–8385', '16,54 m', '43 t'], ['Re-t 65401–65410', '16,54 m', '46 t'], ['Sgp 7601–7610', '16,54 m', '44 t']] } },
      { titel: 'Utilisation et technique', p: ['Les Re-t pèsent 18 t à vide et offrent 15,5 m de longueur de chargement. Ils ont un plancher en mélèze, des ridelles pivotantes et amovibles, des ranchers et des tenons pour conteneurs.', 'Les Sp-w sont aménagés pour le bois rond, avec ranchers latéraux fixes et sangles. Les Sgp portent du bois ou des conteneurs.'] },
      { titel: 'Équipement et accessibilité', liste: ['Ranchers et sangles pour l’arrimage', 'Tenons pour conteneurs (Re-t, Sgp)', 'Plancher en mélèze (Re-t)', 'Quatre essieux'] }
    ]
});
uebZug('rhb-acts', {
  name: 'Wagons ACTS', beiname: 'Sl et Rp',
  typ: 'Wagons porteurs pour conteneurs à roulement (ACTS)',
  text: ['L’ACTS est un système qui permet aux camions de faire rouler les conteneurs directement depuis le wagon. Le chargement passe ainsi du train à la route sans grue.', 'Pour cela, les RhB ont les Sl 7751–7771 et les Rp 65301–65305.'],
  kennzahlen: [['21', 'Sl 7751–7771'], ['44 t', 'charge utile Sl'], ['46,5 t', 'charge utile Rp'], ['2000', 'Sl en service']],
  daten: { 'Bauart': 'wagons porteurs à quatre essieux pour conteneurs à roulement', 'Gewicht': 'Sl 16 t, Rp 17,5 t (à vide)' },
  specNote: 'Valeurs selon la page des RhB sur les conteneurs à roulement. Le registre actuel mentionne les Rp 65301–65304 ; la série d’origine va jusqu’à 65305.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les Sl 7751–7771 ont été mis en service en 2000/01, les Rp 65301–65305 en 2008. Des wagons plats plus anciens comme les 8202–8218 et 8371–8375 portent aussi des conteneurs ACTS.'] },
      { titel: 'Utilisation et technique', p: ['Un camion à crochet tire le conteneur hors du wagon par un cadre pivotant. Rails de roulement, butées et verrous maintiennent les conteneurs pendant le trajet.', 'Les conteneurs qu’un wagon peut porter dépendent de chaque wagon.'] },
      { titel: 'Équipement et accessibilité', liste: ['Rails de roulement, butées et verrous', 'Cadres pivotants pour le déchargement', 'Quatre essieux'] }
    ],
  bilder: ['Wagon porteur ACTS Sl 7769 à Ilanz (2013)', 'Wagon porteur ACTS Sl 7753 (2024)']
});
uebZug('rhb-container', {
  name: 'Wagons porte-conteneurs', beiname: 'Sb et Lb',
  typ: 'Wagons porteurs pour conteneurs et caisses mobiles',
  text: ['Pour les conteneurs et caisses mobiles, les RhB ont des wagons à quatre essieux à milieu surbaissé et de courts wagons porteurs à deux essieux. Le plancher bas exploite mieux le gabarit étroit de la voie métrique.', 'Beaucoup de wagons proviennent de la transformation d’anciens wagons marchandises.'],
  kennzahlen: [['15,9 m', 'longueur Sb'], ['36 t', 'charge utile (jusqu’à)'], ['615 mm', 'hauteur de chargement Lb-v'], ['24 t', 'charge utile Lb-v']],
  daten: { 'Bauart': 'wagons porte-conteneurs', 'Fahrzeugnummern': 'Sb-v 7716–7730, Sb 65655–65689, Lb-v (transformés 1997–2000) ; autres transformations Sb-x 65601–65603, Sb-v 65691–65694' },
  specNote: 'Valeurs selon la page des RhB sur les caisses mobiles. Une partie des 65665 ss. a été transformée en Rlp 65701–65710 ; l’ancienne série n’est donc pas le parc actuel.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les RhB comparent trois groupes de wagons surbaissés et les courts Lb-v.'],
        tabelle: { kopf: ['Groupe', 'Longueur', 'Charge utile', 'Remarque'], zeilen: [
          ['Sb-v 7716–7730, Sb 65655–65689', '15,91 m', '30 ou 36 t', 'milieu surbaissé'],
          ['Lb-v', '9,14 m', '24 t', 'deux essieux, châssis de 1963, transformés 1997–2000']] } },
      { titel: 'Utilisation et technique', p: ['Dans le milieu surbaissé, les conteneurs sont plus bas et passent ainsi sous le gabarit limité de la voie métrique.', 'Les Lb-v à deux essieux pèsent 5,7 t à vide, mesurent 9,14 m et portent 24 t. Leur plancher n’est qu’à 615 mm au-dessus du rail.'] },
      { titel: 'Équipement et accessibilité', liste: ['Tenons pour conteneurs', 'Plancher surbaissé', 'Lb-v à deux, Sb à quatre essieux'] }
    ],
  bilder: ['Wagon porte-conteneurs Sb-v 7729 à Ilanz (2013)', 'Wagon porteur Lb 7858 à deux essieux avec conteneur (2026)', 'Wagon porte-conteneurs Sb 65675 à Ilanz (2013)']
});
uebZug('rhb-spezialtransport', {
  name: 'Wagons pour transports spéciaux', beiname: 'Uaa-z et Xak',
  typ: 'Wagons pour charges lourdes et hautes',
  text: ['Pour les charges lourdes ou hautes comme de grandes machines, les RhB ont des wagons spéciaux. L’Uaa-z 8251 se compose de ponts de chargement et de bogies combinables.', 'Le wagon-plateforme Xak 93502 a une rampe mobile.'],
  kennzahlen: [['97 t', 'plus grande configuration Uaa-z'], ['417 mm', 'hauteur de chargement Uaa-z'], ['27 t', 'charge utile Xak'], ['3,0 m', 'largeur de chargement Uaa-z']],
  daten: { 'Bauart': 'wagons pour charges lourdes et wagon-plateforme', 'Fahrzeugnummern': 'Uaa-z 8251 ; Xak 93502 (auparavant 91501, issu de l’Uaik 8301)' },
  specNote: 'La tare et la capacité de l’Uaa-z dépendent de la configuration et ne doivent pas être mélangées. Selon le registre, la configuration de 97 t n’est pas en service.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['L’Uaa-z 8251 date des années 1950 ; les sources indiquent 1956 et 1958. Avec un pont privé pour transports lourds et quatre bogies à trois essieux, il porte jusqu’à 97 t.', 'Le wagon-plateforme s’appelait d’abord Uaik 8301, puis 91501 et aujourd’hui Xak 93502.'] },
      { titel: 'Utilisation et technique', p: ['Le pont de chargement RhB de l’Uaa-z pèse 10,5 t avec ses traverses, offre 3,0 m de largeur et ne se trouve qu’à 417 mm au-dessus du rail. Dans la version habituelle, le wagon mesure 15,5 m et porte 42 t.', 'Le wagon-plateforme a quatre essieux, pèse 14,4 t à vide, mesure 12,66 m et porte 27 t. Les machines montent par l’avant ou par le côté grâce à une rampe mobile.'] },
      { titel: 'Équipement et accessibilité', liste: ['Ponts de chargement et bogies combinables (Uaa-z)', 'Plancher très bas', 'Rampe mobile (Xak)'] }
    ]
});

/* ---------- manœuvre ---------- */
uebZug('rhb-geaf22', {
  typ: 'Locomotive de manœuvre avec caténaire et batterie',
  text: ['Les sept Geaf 2/2 de Stadler manœuvrent électriquement sous la caténaire et avec la batterie sur les voies sans caténaire. La batterie se recharge sous la caténaire.', 'Elles ont été mises en service en 2020.'],
  kennzahlen: [['7', 'locomotives (20601–20607)'], ['700 kW', 'puissance (caténaire)'], ['93 kWh', 'batterie'], ['2020', 'mise en service']],
  daten: { 'Bauart': 'locomotive de manœuvre à deux essieux avec caténaire et batterie', 'Stromsystem': '11 kV 16,7 Hz et batterie', 'Länge': '8,41 m hors tampon central (9,61 m avec attelage de manœuvre)', 'Leistung': '700 kW sous caténaire, 200 kW sur batterie', 'Höchstgeschwindigkeit': '80 km/h (caténaire), 40 km/h (batterie)' },
  specNote: 'Valeurs selon la fiche Stadler LRHB0720d, poids selon Wikipédia. 93 kWh est l’énergie stockée dans la batterie, 200 kW la puissance ; on ne peut pas en déduire une autonomie fixe.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les RhB ont commandé les sept locomotives chez Stadler en septembre 2018 ; elles ont été mises en service en 2020. Elles sont stationnées entre autres à Landquart, Coire, Ilanz, Thusis, Davos Platz et Zernez.'] },
      { titel: 'Utilisation et technique', p: ['Sous la caténaire, la locomotive développe jusqu’à 700 kW et roule jusqu’à 80 km/h. Avec la batterie lithium-ion (93 kWh), elle dispose de 200 kW et 40 km/h, assez pour manœuvrer sur des voies sans caténaire.', 'Courte, la locomotive se glisse facilement dans les voies de gare étroites. Elle peut freiner des wagons à frein à vide et à frein à air.'] },
      { titel: 'Équipement et accessibilité', liste: ['Cabine centrale, conduite assise ou debout', 'Radiocommande', 'Ligne de chauffage du train 320 V', 'Système de sécurité ZSI 127'] }
    ],
  bilder: ['Geaf 2/2 20601 à Coire (2020)', 'Geaf 2/2 20603 (2025)']
});
uebZug('rhb-ge33', {
  beiname: '214 et 215',
  typ: 'Locomotive de manœuvre électrique à trois essieux',
  text: ['Les deux Ge 3/3 de 1984 sont des locomotives de manœuvre électriques à trois essieux moteurs. Elles travaillent à Samedan et à Coire.', 'Elles n’ont pas le système de sécurité ZSI 127.'],
  kennzahlen: [['2', 'locomotives (214, 215)'], ['1984', 'construction'], ['3', 'essieux moteurs'], ['11 kV', 'caténaire']],
  daten: { 'Bauart': 'locomotive de manœuvre électrique à trois essieux' },
  specNote: 'Selon le registre des véhicules moteurs de Haribu (état septembre 2026). Les sources vérifiées n’indiquent ni puissance ni poids.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les deux locomotives 214 et 215 ont été construites en 1984 comme type propre à trois essieux pour la manœuvre.'] },
      { titel: 'Utilisation et technique', p: ['Selon le registre, la 214 travaille à Samedan, la 215 à Coire. Aucune n’a le système ZSI 127, ce qui limite les courses en ligne.'] },
      { titel: 'Équipement et accessibilité', liste: ['Trois essieux moteurs', 'Pantographe pour 11 kV', 'Pas de système ZSI 127'] }
    ],
  bilder: ['Ge 3/3 215 à Coire (2015)', 'Ge 3/3 214 (2022)']
});
uebZug('rhb-gmf44-242', {
  beiname: '242 et 243',
  typ: 'Locomotive diesel de manœuvre de 1991',
  text: ['Les deux Gmf 4/4 de 1991 sont des locomotives diesel pour la manœuvre sur le réseau de base.', 'Elles forment un type propre à ne pas confondre avec les Gmf 4/4 II plus récentes de Schalke.'],
  kennzahlen: [['2', 'locomotives (242, 243)'], ['1991', 'construction'], ['4', 'essieux moteurs'], ['diesel', 'propulsion']],
  daten: { 'Bauart': 'locomotive diesel à quatre essieux' },
  specNote: 'Selon le registre des véhicules moteurs de Haribu ; les sources vérifiées n’indiquent pas de valeurs techniques.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les locomotives 242 et 243 ont été construites en 1991 comme type propre. Malgré une désignation proche, elles n’ont rien de commun avec les Gmf 4/4 II construites en 2013.'] },
      { titel: 'Utilisation et technique', p: ['Selon le registre, elles assurent la manœuvre sur le réseau de base. Des photos les montrent à Klosters Platz, Landquart et Davos.'] },
      { titel: 'Équipement et accessibilité', liste: ['Propulsion diesel, indépendante de la caténaire', 'Télécommande (lettre f)', 'Quatre essieux moteurs'] }
    ],
  bilder: ['Gmf 4/4 242 à Klosters Platz (2019)', 'Gmf 4/4 243 à Davos (2024)']
});
uebZug('rhb-taf22', {
  typ: 'Petits engins rail-route de manœuvre pour ateliers',
  text: ['Les six Taf 2/2 sont de petits véhicules rail-route. Ils déplacent des véhicules dans les ateliers et les dépôts.', 'Ils travaillent entre autres à Poschiavo et à Landquart.'],
  kennzahlen: [['6', 'engins'], ['2010–2023', 'années de construction'], ['2', 'essieux'], ['Landquart', 'atelier principal']],
  daten: { 'Bauart': 'engin de manœuvre rail-route' },
  specNote: 'Selon le registre des véhicules moteurs de Haribu ; constructeur et valeurs techniques n’y sont pas indiqués.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les six engins ont été construits entre 2010 et 2023.'] },
      { titel: 'Utilisation et technique', p: ['Selon le registre, ils travaillent entre autres à Poschiavo, au tour en fosse de Landquart et au dépôt de Landquart. Ils déplacent des véhicules à l’atelier et ne circulent pas en service voyageurs.'] },
      { titel: 'Équipement et accessibilité', liste: ['Roues pour le rail et la route', 'Propulsion par batterie (lettre a)', 'Télécommande (lettre f)'] }
    ]
});

/* ---------- infrastructure ---------- */
uebZug('rhb-gmf44ii', {
  typ: 'Locomotive diesel-électrique Schalke pour trains de travaux et déneigement',
  text: ['Les quatre Gmf 4/4 II de Schalke tirent de lourds trains de travaux, remorquent des trains en panne et poussent les fraises à neige en hiver. Elles circulent aussi quand la caténaire est coupée.', 'Elles portent la livrée jaune de l’infrastructure des RhB.'],
  kennzahlen: [['4', 'locomotives'], ['1800 kW', 'puissance'], ['100 km/h', 'vitesse maximale'], ['2013', 'construction']],
  daten: { 'Bauart': 'locomotive diesel-électrique', 'Fahrzeugnummern': '23401–23404 (jusqu’en 2015 : 28701–28704)', 'Länge': '16,69 m' },
  specNote: 'Valeurs selon Schalke et Wikipédia. L’effort au démarrage vaut pour un coefficient d’adhérence de 0,33.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les RhB ont commandé les locomotives en 2009 ; Schalke les a construites en 2013 et elles ont été mises en service en 2014. Jusqu’en 2015, elles portaient les numéros 28701–28704.', 'Elles s’appellent 23401 « Surselva », 23402 « Engadin », 23403 « Albula » et 23404 « Bernina ».'] },
      { titel: 'Utilisation et technique', p: ['Les locomotives tirent de lourds trains de travaux, aident en cas de panne et travaillent en hiver avec les fraises à neige sur tout le réseau. Jusqu’à trois locomotives peuvent être commandées ensemble.', 'Elles sont conçues pour des courbes de 40 m de rayon et des températures de −35 à +40 °C. Quatre systèmes de freinage différents les rendent aptes aux trains mixtes.'] },
      { titel: 'Équipement et accessibilité', liste: ['Propulsion diesel-électrique, indépendante de la caténaire', 'Quatre systèmes de freinage', 'Unités multiples jusqu’à trois locomotives', 'Livrée jaune de l’infrastructure'] }
    ],
  bilder: ['Gmf 4/4 II 23403', 'Gmf 4/4 II 23402 avec la fraise à neige 95403']
});
uebZug('rhb-gem44', {
  beiname: '801 et 802',
  typ: 'Locomotive bimode pour la ligne de la Bernina',
  text: ['Les deux Gem 4/4 circulent en électrique sous la caténaire à courant continu de la ligne de la Bernina et au diesel là où il n’y a pas de caténaire adaptée.', 'Elles s’appellent 801 « Steinbock » (bouquetin) et 802 « Murmeltier » (marmotte).'],
  kennzahlen: [['2', 'locomotives'], ['1968', 'aux RhB'], ['2 × 709 kW', 'diesel après transformation'], ['65 km/h', 'vitesse maximale']],
  daten: { 'Bauart': 'locomotive bimode (électrique et diesel)', 'Leistung': '680 kW en électrique ; diesel 2 × 709 kW (après transformation)' },
  specNote: 'Valeurs selon Wikipédia. Construites en 1966, livrées aux RhB en 1968. Puissance électrique et puissance diesel sont des modes distincts et ne s’additionnent pas.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SLM, SWS, BBC et MFO ont construit les deux locomotives ; elles sont arrivées aux RhB en 1968. Après un incendie, la 801 a été renouvelée à Landquart dès 2000, la 802 a suivi en 2002/03.', 'Lors de la transformation, elles ont reçu des cabines plus longues, de nouveaux moteurs diesel Cummins de 709 kW chacun, une nouvelle commande et la climatisation en cabine.'] },
      { titel: 'Utilisation et technique', p: ['Les locomotives sont stationnées à Pontresina et à Poschiavo. Elles tirent des trains de travaux et travaillent en hiver avec des fraises à neige ; autrefois, elles tiraient aussi des trains voyageurs sur la ligne de la Bernina.', 'En électrique, elles développent 680 kW. Avec leurs moteurs diesel, elles circulent aussi sur le réseau de base, dont elles ne peuvent pas utiliser le courant alternatif.'] },
      { titel: 'Équipement et accessibilité', liste: ['Pantographe pour 1000 V continu', 'Deux moteurs diesel', 'Cabines climatisées (après transformation)'] }
    ],
  bilder: ['Gem 4/4 en tête d’un train régional pour Tirano (2009)', 'Flanc de la Gem 4/4 801 avec le bouquetin (2014)', 'Flanc de la Gem 4/4 802 avec la marmotte (2014)']
});
uebZug('rhb-tm', {
  name: 'Tm 2/2 et Tmf 2/2', beiname: 'tracteurs',
  typ: 'Tracteurs diesel pour la manœuvre et les trains de travaux',
  text: ['Pour la manœuvre et les petits trains de travaux, les RhB ont plusieurs familles de tracteurs diesel à deux essieux de RACO, Windhoff et SCHÖMA.', 'Pour en remplacer une partie, les RhB ont commandé en novembre 2025 huit nouveaux véhicules de service chez Windhoff.'],
  kennzahlen: [['10', 'Tm 111–120 (SCHÖMA)'], ['6', 'Tmf 85–90 (RACO)'], ['4', 'Tm 81–84 (RACO)'], ['4', 'Tm 95–98 (Windhoff)']],
  daten: { 'Bauart': 'tracteurs diesel à deux essieux' },
  specNote: 'Numéros selon la statistique des locomotives Pospichal. Les successeurs commandés ne prouvent pas que les anciens tracteurs sont déjà retirés ; les RhB les citaient en novembre 2025 comme parc existant.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les anciens tracteurs RACO portaient les numéros 56–67, puis en partie 15–26.'],
        tabelle: { kopf: ['Numéros', 'Constructeur', 'Construction'], zeilen: [
          ['Tm 81–84', 'RACO', '1985'], ['Tmf 85–90', 'RACO', '1991–1994'], ['Tm 91–93', 'divers', '–'], ['Tm 95–98', 'Windhoff', '1998/99'], ['Tm 111–120', 'SCHÖMA', '2002–2006']] } },
      { titel: 'Utilisation et technique', p: ['Les tracteurs manœuvrent dans les gares et tirent de petits trains de construction et d’entretien. Les Tmf ont en plus une télécommande.', 'Pour remplacer les Tm 81–84 et 95–98, les RhB ont commandé huit véhicules Windhoff en novembre 2025 ; ils doivent entrer en service en 2029.'] },
      { titel: 'Équipement et accessibilité', liste: ['Propulsion diesel', 'Deux essieux', 'Télécommande sur les Tmf'] }
    ],
  bilder: ['Tm 2/2 115 de SCHÖMA à Ilanz (2014)', 'Tm 2/2 84 à Langwies (2015)', 'Tmf 2/2 87 à Thusis (2013)']
});
uebZug('rhb-tieflade', {
  beiname: '23411–23415 surbaissés',
  typ: 'Nouveaux véhicules surbaissés pour la logistique de chantier',
  text: ['Depuis novembre 2025, les RhB reçoivent cinq véhicules surbaissés automoteurs Xmf 4/4 23411–23415. S’y ajoutent onze wagons surbaissés Xa 93511–93521.', 'Avec des planchers bas et des solutions de conteneurs, la logistique des chantiers doit devenir plus efficace.'],
  kennzahlen: [['5', 'véhicules surbaissés'], ['11', 'wagons surbaissés'], ['2025', 'premiers véhicules'], ['2026', 'wagons surbaissés']],
  daten: { 'Bauart': 'véhicules surbaissés automoteurs et wagons surbaissés' },
  specNote: 'Selon le rapport sur l’état du réseau 2025 des RhB et les registres. Constructeur et données techniques ne sont pas établis dans les sources vérifiées ; chaque numéro n’est pas encore réceptionné.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Selon le rapport sur l’état du réseau 2025, cinq véhicules surbaissés arrivent dès novembre 2025 et onze wagons surbaissés dès le premier trimestre 2026. Le registre les mentionne comme Xmf 4/4 23411–23415 et Xa 93511–93521.'] },
      { titel: 'Utilisation et technique', p: ['Les véhicules apportent du matériel sur les chantiers. Les planchers bas et les conteneurs système facilitent le chargement et le déchargement.', 'Cet achat est distinct des huit véhicules Windhoff attendus en 2029.'] },
      { titel: 'Équipement et accessibilité', liste: ['Plancher de chargement bas', 'Propulsion propre (Xmf)', 'Télécommande (lettre f)'] }
    ]
});
uebZug('rhb-windhoff', {
  beiname: 'Windhoff (commandés)',
  typ: 'Véhicules de service avec grue commandés, mise en service prévue en 2029',
  text: ['En novembre 2025, les RhB ont commandé chez Windhoff huit véhicules de service identiques pour 57 millions de francs. Ils doivent entrer en service en 2029.', 'Les véhicules ont une grue et peuvent être équipés d’un treuil, d’un grappin, d’une nacelle, d’une fraise à neige ou d’une aspiratrice.'],
  kennzahlen: [['8', 'véhicules commandés'], ['500 kW', 'puissance continue à la jante'], ['80 km/h', 'vitesse maximale'], ['2029', 'mise en service prévue']],
  daten: { 'Bauart': 'véhicule polyvalent diesel-électrique avec grue', 'Gewicht': 'environ 58 t', 'Motor': 'diesel principal 520 kW, diesel auxiliaire 170 kW', 'Leistung': '500 kW continus à la jante', 'Anzahl': '8 commandés', 'In Betrieb seit': '2029 prévu' },
  specNote: 'Valeurs de projet selon le communiqué des RhB du 18 novembre 2025 et Windhoff. Les véhicules ne sont pas encore livrés. Une batterie de traction n’est étudiée que comme équipement ultérieur possible.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les RhB ont annoncé la commande le 18 novembre 2025. Windhoff la confirme comme projet « MPV VentuS ». Les huit véhicules doivent remplacer d’anciens tracteurs diesel.'] },
      { titel: 'Utilisation et technique', p: ['Un moteur diesel principal de 520 kW et un diesel auxiliaire de 170 kW entraînent chacun une génératrice. 500 kW sont disponibles en continu à la jante ; la vitesse maximale est de 80 km/h.', 'La grue a une portée d’environ 16,9 m et son bras peut aussi se plier vers le bas.'] },
      { titel: 'Équipement et accessibilité', liste: ['Cabine climatisée et insonorisée pour sept personnes', 'Grue, treuil, grappin ou nacelle', 'Possible : fraise à neige ou aspiratrice'] }
    ]
});
uebZug('rhb-dienstwagen', {
  name: 'Wagons de service', beiname: 'wagons X',
  typ: 'Wagons pour la construction des voies, les mesures et le matériel',
  text: ['Le parc de wagons de service des RhB comprend des wagons à ballast, à gravier et plats, des wagons de mesure et à grue, des nacelles élévatrices et des wagons de secours. Beaucoup proviennent d’anciens wagons voyageurs ou marchandises.', 'Selon le rapport sur l’état du réseau 2025, l’infrastructure compte 60 véhicules moteurs et 136 véhicules remorqués.'],
  kennzahlen: [['136', 'véhicules remorqués de l’infrastructure'], ['60', 'véhicules moteurs de l’infrastructure'], ['X', 'catégorie des wagons de service'], ['2025', 'rapport sur le réseau']],
  daten: { 'Bauart': 'wagons de service de divers types', 'Fahrzeugnummern': 'Exemples : Xac 8733–8742, Xa-u 8761–8770, Xa-tu 93701–93704, Xac-t 93801–93805, Xak 96501, Xak 9394, Xk 94001' },
  specNote: 'Exemples de types selon le registre X de Haribu (état août 2026), pas une liste complète. Charges et systèmes de mesure ne sont pas indiqués sans fiche d’équipement.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['La catégorie X désigne l’usage en service, pas un nouveau châssis. Exemples tirés du registre :'],
        tabelle: { kopf: ['Tâche', 'Exemples'], zeilen: [
          ['Ballast', 'Xac 8733–8742, Xa-u 8761–8770, 9441–9446, 9461–9463, Xa-tu 93701–93704'], ['Gravier', 'Xac-t 93801–93805'],
          ['Wagons plats', 'Xae-w 9401–9404, Xae-t 93105–93111'], ['Transport de rails', 'Xa-t 93101–93104, wagon de déchargement de rails Xa-t 93501'],
          ['Mesure de la voie', 'Xak 96501 (issu de la B 2307)'], ['Inspection des ponts', 'Xak 9394 (issu de l’Uahk-v 8123)'], ['Travaux de grue', 'Xak 9387, 9388'],
          ['Nacelles élévatrices', 'Xk 94001, Xak 94002–94003'], ['Eau et lutte contre le feu', 'Xak 9379–9380, Xah-y 9385–9386'], ['Wagons de secours', 'Xak-v 9101, 9102']] } },
      { titel: 'Utilisation et technique', p: ['Ainsi, les anciens wagons basculants Fau 8761–8770 sont devenus des wagons à ballast usagé Xa-u. En hiver, certains wagons à ballast reçoivent des parois latérales et évacuent la neige.', 'Des wagons d’accouplement comme les wagons Vereina 9390–9393 relient des véhicules aux attelages différents. Ils n’ont pas de propulsion propre.'] },
      { titel: 'Équipement et accessibilité', liste: ['Déchargement basculant ou par gravité pour les wagons à ballast', 'Installations de mesure, grues ou nacelles selon le wagon', 'Pas de propulsion propre'] }
    ],
  bilder: ['Wagon à gravier Xac-t 93801 à Coire (2012)', 'Wagon à ballast Xa-tu 93701 à Poschiavo (2010)', 'Wagon de service Xk 9362 à Landquart (2015)']
});

/* ---------- véhicules de service et spéciaux ---------- */
uebZug('rhb-loeref', {
  beiname: 'véhicules d’extinction et de sauvetage',
  typ: 'Trains d’extinction et de sauvetage pour le tunnel de la Vereina',
  text: ['Pour le tunnel de la Vereina, les RhB disposent de quatre véhicules d’extinction et de sauvetage de Müller Technologie. Deux sont des véhicules d’extinction, deux des véhicules de sauvetage.', 'Ils ont été remis le 2 septembre 2022. Les sapeurs-pompiers de Klosters-Serneus et de Zernez les servent.'],
  kennzahlen: [['4', 'véhicules (27401–27404)'], ['25 000 l', 'eau d’extinction'], ['100', 'personnes par course de sauvetage'], ['2022', 'remise']],
  daten: { 'Bauart': 'véhicules automoteurs d’extinction et de sauvetage', 'Betreiber': 'RhB, servis par les sapeurs-pompiers de Klosters-Serneus et de Zernez', 'Länge': '18,80 m', 'Motor': 'diesel, 280 kW' },
  specNote: 'Valeurs selon le communiqué des RhB et la fiche Müller. Les véhicules circulent uniquement sur rails ; les véhicules rail-route des pompiers sont d’autres véhicules.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Müller Technologie à Frauenfeld a construit les quatre véhicules ; ils ont été remis le 2 septembre 2022 au portail nord à Klosters Selfranga. Chaque côté du tunnel a un véhicule d’extinction et un véhicule de sauvetage.', 'Les RhB ont aussi des véhicules rail-route des pompiers Xm 2/2 27801–27806 de 2016/17 et d’autres plus anciens de 2007.'] },
      { titel: 'Utilisation et technique', p: ['Chaque véhicule a deux cabines, un bogie moteur et un bogie porteur et un moteur diesel de 280 kW. Des caméras couleur et thermiques aident dans la fumée. Selon le constructeur, ils sont prêts en moins de cinq minutes.', 'Le véhicule d’extinction a une citerne surveillée en température de 25 000 l d’eau. Le véhicule de sauvetage a un local avec alimentation en air respirable pour jusqu’à 100 personnes ; carburant et oxygène suffisent pour deux courses.'] },
      { titel: 'Équipement et accessibilité', liste: ['Véhicule d’extinction : 12 places pour pompiers avec appareil respiratoire, 4 autres dans les cabines', 'Local de sauvetage avec air respirable', 'Caméras couleur et thermiques', 'Propulsion propre, indépendante d’une locomotive'] }
    ]
});
uebZug('rhb-fahrleitung', {
  name: 'Véhicules caténaire et grue', beiname: 'Xm et Xmf',
  typ: 'Véhicules pour travaux de caténaire et de grue',
  text: ['Pour les travaux sur la caténaire et les travaux de grue, les RhB ont plusieurs familles de véhicules de service automoteurs. Les plus grands sont les Xmf 6/6 24401 et 24402.', 'Depuis 2024, deux nacelles élévatrices rail-route s’y ajoutent.'],
  kennzahlen: [['2', 'Xmf 6/6 (2007, 2016)'], ['2', 'Xmf 4/4 (construits en 1994)'], ['2', 'nacelles (2024)'], ['1994', 'Xmf 2/2 9921']],
  daten: { 'Bauart': 'véhicules automoteurs caténaire et grue', 'Fahrzeugnummern': 'Xm 2/2 9916, 9917 ; Xmf 2/2 9921 ; Xmf 6/6 24401, 24402 ; Xmf 4/4 24403, 24404 (auparavant 9918, 9919) ; Xm 2/2 24801, 24802' },
  specNote: 'Selon le registre des véhicules moteurs de Haribu. Constructeur, hauteur de travail et charge de grue ne sont pas indiqués sans fiche technique.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les véhicules datent d’années différentes.'],
        tabelle: { kopf: ['Véhicule', 'Numéros', 'Construction'], zeilen: [
          ['Xm 2/2', '9916, 9917', 'diverses'], ['Xmf 2/2', '9921', '1994'], ['Xmf 6/6', '24401, 24402', '2007, 2016'],
          ['Xmf 4/4', '24403, 24404 (auparavant 9918, 9919)', '1994, transformés plus tard'], ['Xm 2/2 nacelles', '24801, 24802', '2024']] } },
      { titel: 'Utilisation et technique', p: ['Les véhicules construisent et entretiennent la caténaire et soulèvent des pièces lourdes. Les Xmf 6/6 et Xmf 4/4 sont des types différents malgré la même tâche.', 'Les Xm 2/2 24801 et 24802 sont des nacelles élévatrices qui circulent sur rail et sur route.'] },
      { titel: 'Équipement et accessibilité', liste: ['Grue ou nacelle selon le véhicule', 'Propulsion diesel propre (lettre m)', 'Télécommande sur les Xmf'] }
    ],
  bilder: ['Xmf 2/2 9921 à Samedan (2015)', 'Xmf 2/2 9921 avec grue']
});
uebZug('rhb-schneeschleuder', {
  name: 'Fraises et chasse-neige', beiname: 'Xrot mt et Xk',
  typ: 'Engins de déneigement',
  text: ['En hiver, fraises à neige et chasse-neige dégagent les lignes. Les fraises les plus récentes sont les Xrot mt 95401–95404 de Zaugg.', 'Une locomotive pousse la fraise, par exemple une Gmf 4/4 II.'],
  kennzahlen: [['4', 'Xrot mt 95401–95404'], ['2011/12', 'construction'], ['1981', 'Xrot mt 9217'], ['7', 'chasse-neige Xk 9141–9147']],
  daten: { 'Bauart': 'fraises à neige et chasse-neige' },
  specNote: 'Les sources vérifiées n’indiquent ni largeur ni rendement de déneigement ni moteur des différentes machines RhB. Les données d’autres chemins de fer tirées de la brochure Zaugg n’ont pas été reprises.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Zaugg a livré en 2011 les machines de la Bernina 95403 et 95404 et en 2012 celles du réseau de base 95401 et 95402. La Xrot mt 9217 date de 1981.', 'L’actuelle Xrot m 9214 a une superstructure de 2001 sur un châssis de 1913 (issu du Gb 5606). Ce n’est pas l’ancienne fraise à vapeur de la Bernina portant le même numéro.'] },
      { titel: 'Utilisation et technique', p: ['Une fraise à neige prend la neige avec un organe rotatif et la projette sur le côté. Un chasse-neige repousse la neige avec une lame profilée.', 'La fraise et la locomotive qui la pousse forment un train de travaux, par exemple avec une Gmf 4/4 II ; sur la ligne de la Bernina, une automotrice pousse aussi un chasse-neige.'] },
      { titel: 'Équipement et accessibilité', liste: ['Organe de déneigement rotatif (Xrot)', 'Lame de chasse-neige (Xk)', 'En hiver : wagons à ballast avec parois latérales pour évacuer la neige'] }
    ],
  bilder: ['Fraise à neige Xrot mt 95403 avec la Gmf 4/4 II 23402', 'Fraise à neige Xrot mt 9217 à Landquart (2012)', 'Chasse-neige Xk 9143 avec l’ABe 4/4 II 46 en action']
});

/* ---------- véhicules historiques ---------- */
uebZug('rhb-ge66i', {
  beiname: 'Crocodile',
  typ: 'Locomotive électrique marchandises de 1921–1929 (historique)',
  text: ['Pendant des décennies, les 15 « Crocodiles » des RhB ont tiré de lourds trains sur l’Albula. Typiques : les deux trucs moteurs mobiles avec transmission par bielles.', 'Les 414 et 415 tirent aujourd’hui des trains historiques des RhB ; plusieurs autres sont dans des musées.'],
  kennzahlen: [['15', 'locomotives (401–415)'], ['1921', 'première locomotive'], ['55 km/h', 'vitesse maximale'], ['66 t', 'poids en service']],
  daten: { 'Bauart': 'locomotive électrique à bielles', 'Hersteller': 'SLM (mécanique), BBC (électrique)', 'Länge': '13,30 m hors tampons', 'Leistung': 'environ 940 kW (brochure des RhB)', 'Erhalten': '414 et 415 (RhB) ; 402 Musée Suisse des Transports, 406 Battenberg, 407 Bergün, 411 Deutsches Museum' },
  specNote: 'Puissance selon la brochure des RhB « Véhicules historiques » (arrondie, sans référence précise) ; Wikipédia indique 794 à 840 kW. Longueur et poids selon Wikipédia.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SLM et BBC ont construit les 15 locomotives entre 1921 et 1929. Trois essieux couplés se trouvent dans chacun des deux trucs moteurs mobiles ; moteurs, engrenages, faux-essieux et bielles transmettent la force.', 'Sont conservées les 414 et 415 aux RhB, la 402 au Musée Suisse des Transports à Lucerne, la 407 au musée ferroviaire de l’Albula à Bergün, la 411 au Deutsches Museum de Munich et la 406 chez Viessmann à Battenberg.'] },
      { titel: 'Utilisation et technique', p: ['Les Crocodiles tiraient surtout des trains de marchandises et de voyageurs sur la ligne de l’Albula. Les 414 et 415 sont aujourd’hui des locomotives de musée en état de marche, basées à Landquart et Samedan ; selon le registre, la 414 est en réparation.', 'Les deux locomotives des RhB ont été transformées à des degrés divers et ne montrent plus partout l’état d’origine.'] },
      { titel: 'Équipement et accessibilité', liste: ['Cabine centrale, capots aux deux extrémités', 'Transmission par bielles et faux-essieux', 'Exposition avec simulateur de conduite (407 à Bergün)'] }
    ],
  bilder: ['Crocodile Ge 6/6 I 415 à Bergün', 'Ge 6/6 I 414 avec un train historique à Filisur (2022)', 'Ge 6/6 I 412 avec le train 4532 entrant à Filisur (1987)', 'Ge 6/6 I 407 au musée ferroviaire de l’Albula à Bergün (2014)']
});
uebZug('rhb-ge66ii', {
  typ: 'Locomotive électrique lourde à caisse articulée (historique)',
  text: ['Les sept Ge 6/6 II étaient les lourdes locomotives de ligne du réseau de base des RhB. Leur caisse est en deux parties articulées reposant sur trois bogies.', 'Elles sont hors service depuis 2020 ; la 702 est au Musée Suisse des Transports à Lucerne.'],
  kennzahlen: [['7', 'locomotives (701–707)'], ['1958', 'premières locomotives'], ['1764 kW', 'puissance unihoraire'], ['80 km/h', 'vitesse maximale']],
  daten: { 'Bauart': 'locomotive électrique à caisse articulée', 'Länge': '14,50 m hors tampons', 'Leistung': '1764 kW (puissance unihoraire)', 'Erhalten': '702 « Curia » au Musée Suisse des Transports à Lucerne ; 707 « Scuol » garée à Samedan' },
  specNote: 'Valeurs selon Wikipédia ; l’article indique ailleurs 1776 kW.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SLM, BBC et MFO ont construit les 701 et 702 en 1958, puis les 703–707 en 1965. Les locomotives portent des noms de lieux, par exemple 701 « Raetia », 702 « Curia » et 707 « Scuol ».'] },
      { titel: 'Utilisation et technique', p: ['Les locomotives tiraient de lourds trains de marchandises et de voyageurs sur le réseau de base, surtout sur l’Albula. Dès 2020, elles ont été retirées ; les 701, 703, 704 et 706 ont été démolies.', 'La 702 est arrivée au Musée Suisse des Transports à Lucerne le 30 mars 2023 ; la fondation GRÜN & CHROM veut lui rendre son état d’origine. La 707 est garée à Samedan sans autorisation d’exploitation.'] },
      { titel: 'Équipement et accessibilité', liste: ['Deux demi-caisses articulées', 'Trois bogies à deux essieux', 'Deux cabines de conduite'] }
    ],
  bilder: ['Ge 6/6 II 701 près de Bonaduz (2016)', 'Ge 6/6 II 704 « Davos » près de Trin', 'Ge 6/6 II 707 « Scuol » à Samedan']
});
uebZug('rhb-ge44i', {
  typ: 'Locomotive électrique de ligne de 1947 et 1953 (historique)',
  text: ['Les dix Ge 4/4 I ont été les premières locomotives à bogies des RhB. Quatre sont arrivées en 1947, six en 1953.', 'La 605 « Silvretta » circule aujourd’hui comme locomotive historique, notamment en tête de l’Alpine Classic Pullman Express.'],
  kennzahlen: [['10', 'locomotives (601–610)'], ['1947', 'premières locomotives'], ['1184 kW', 'puissance'], ['80 km/h', 'vitesse maximale']],
  daten: { 'Bauart': 'locomotive électrique', 'Länge': '12,10 m hors tampons', 'Höchstgeschwindigkeit': '80 km/h (à l’origine 75 km/h)', 'Erhalten': '605 « Silvretta » (historique, en état de marche) ; 602 et 603 garées' },
  specNote: 'Valeurs selon Wikipédia et la brochure des RhB « Véhicules historiques ». Les cabines ont été transformées en 1986–1991 ; les anciennes photos montrent une autre forme.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SLM a construit les locomotives avec l’équipement électrique de BBC et MFO : les 601–604 en 1947, les 605–610 en 1953. Les noms rappellent des montagnes et vallées grisonnes, par exemple 601 « Albula » ou 605 « Silvretta ».'] },
      { titel: 'Utilisation et technique', p: ['Avec deux bogies et des moteurs individuels par essieu, elles ont remplacé les anciennes locomotives à bielles. De 1986 à 1991, elles ont reçu des cabines plus grandes ainsi que la commande multiple et la télécommande ; en 1997 sont venus des pantographes unijambistes pour la ligne d’Arosa.', 'Elles ont été retirées dès novembre 2010. La 605 a reçu le système ZSI 127 en 2025 ; la fondation GRÜN & CHROM prévoit sa révision en livrée rouge et veut repeindre la 602 en vert.'] },
      { titel: 'Équipement et accessibilité', liste: ['Deux cabines (transformées en 1986–1991)', 'Commande multiple et télécommande', 'Frein électrique à récupération'] }
    ],
  bilder: ['Ge 4/4 I 605 « Silvretta » à Coire (2022)', 'Ge 4/4 I 603 et 602 à Spinas', 'Ge 4/4 I entre Bever et Spinas']
});
uebZug('rhb-ge24', {
  typ: 'Première locomotive électrique de 1913 (historique)',
  text: ['Les sept Ge 2/4 de SLM et BBC ont inauguré la traction électrique sur la ligne Bever–Scuol en 1913. Plus tard, plusieurs ont été transformées en locomotives de manœuvre.', 'La 222 circule aujourd’hui comme locomotive historique ; les 205 et 207 sont conservées dans leur état d’origine.'],
  kennzahlen: [['7', 'locomotives (201–207)'], ['1913', 'mise en service'], ['45 km/h', 'vitesse maximale (d’origine)'], ['222', 'conservée en état de marche']],
  daten: { 'Bauart': 'locomotive électrique à bielles', 'Fahrzeugnummern': '201–207 ; transformations 211–213, 221–222', 'Länge': 'environ 8,7 m', 'Gewicht': '37 t (d’origine)', 'Leistung': '210 kW (d’origine), 428 kW (221 et 222 après transformation)', 'Höchstgeschwindigkeit': '45 km/h (d’origine), 55 km/h (après transformation)', 'Erhalten': '222 en état de marche (Landquart) ; 205 musée ferroviaire de l’Albula ; 207 Musée Suisse des Transports ; 212' },
  specNote: 'Valeurs selon Wikipédia ; la brochure des RhB indique pour la 222 environ 450 kW et 45 km/h. La 222 n’a pas le système ZSI 127.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SLM et BBC ont construit les locomotives en 1912/13. Les transformations ont donné de nouveaux numéros à plusieurs d’entre elles, sans créer de locomotives supplémentaires.'],
        tabelle: { kopf: ['À l’origine', 'Plus tard'], zeilen: [
          ['201', 'Ge 2/4 213'], ['202', 'Gea 2/4 211, plus tard Gem 2/4 211'], ['203', 'Ge 2/4 221'], ['204', 'Ge 2/4 222'], ['206', 'Ge 2/4 212'], ['205, 207', 'conservées dans l’état d’origine']] } },
      { titel: 'Utilisation et technique', p: ['En 1943, trois locomotives ont été transformées en locomotives de manœuvre ; en 1945/46, les 221 et 222 ont reçu de nouveaux moteurs et un frein rhéostatique. Elles développaient ensuite 428 kW et roulaient à 55 km/h.', 'La 222 est aujourd’hui une locomotive de musée en état de marche à Landquart. La 205 appartient depuis 2023 à la fondation du musée ferroviaire de l’Albula, la 207 se trouve au Musée Suisse des Transports à Lucerne.'] },
      { titel: 'Équipement et accessibilité', liste: ['Deux essieux moteurs et deux essieux porteurs', 'Frein rhéostatique (221 et 222 après transformation)', 'Pas de système ZSI 127 (222)'] }
    ],
  bilder: ['Ge 2/4 222', 'Ge 2/4 201 dans son état d’origine (1912)']
});
uebZug('rhb-ge46', {
  typ: 'Premières locomotives électriques des RhB de 1912–1918 (historique)',
  text: ['La désignation Ge 4/6 regroupe plusieurs locomotives d’essai avec équipement électrique de BBC, MFO et AEG. La 351 a été la première locomotive électrique des RhB.', 'La 353 est conservée comme locomotive historique, la 391 se trouve au Deutsches Technikmuseum de Berlin.'],
  kennzahlen: [['8', 'locomotives'], ['1913', 'mise en service'], ['588 kW', 'puissance (353, brochure)'], ['55 km/h', 'vitesse maximale (353)']],
  daten: { 'Bauart': 'locomotive électrique à bielles', 'Hersteller': 'SLM ; partie électrique BBC (301–302), MFO (351–355), AEG (391)', 'Leistung': '419–559 kW (puissance unihoraire, selon la version)', 'Erhalten': '353 (RhB), 391 (Deutsches Technikmuseum Berlin)' },
  specNote: 'Les versions diffèrent en puissance et en poids ; aucune fiche unique ne vaut pour toutes. La brochure des RhB indique pour la 353 environ 588 kW et 55 km/h.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SLM a fourni la partie mécanique ; l’équipement électrique venait de trois entreprises.'],
        tabelle: { kopf: ['Numéros', 'Électrique', 'Mise en service'], zeilen: [['301', 'BBC', '1913'], ['302', 'BBC', '1918'], ['351–352', 'MFO', '1912/13'], ['353–355', 'MFO', '1914'], ['391', 'AEG', '1913']] } },
      { titel: 'Utilisation et technique', p: ['Les locomotives ont d’abord circulé sur la ligne de l’Engadine électrifiée en 1913, puis sur tout le réseau de base. La 351 est considérée comme la première locomotive électrique des RhB.', 'La 353 tire encore aujourd’hui des trains de musée. La 391 peut être vue au Deutsches Technikmuseum de Berlin.'] },
      { titel: 'Équipement et accessibilité', liste: ['Transmission par bielles', 'Quatre essieux moteurs et deux essieux porteurs', 'Équipement électrique différent selon la locomotive'] }
    ],
  bilder: ['Ge 4/6 353 à Ilanz', 'Ge 4/6 391 au Deutsches Technikmuseum de Berlin (2017)', 'Ge 4/6 355 (1915)']
});
uebZug('rhb-bernina-loks', {
  name: 'Locomotives de la Bernina',
  typ: 'Petites locomotives et automotrice fourgon du chemin de fer de la Bernina (historiques)',
  text: ['Quelques véhicules moteurs particuliers proviennent du chemin de fer de la Bernina : les petites Ge 2/2 161 et 162, les pièces uniques Ge 4/4 181 et 182 et l’automotrice fourgon De 2/2 151.', 'La 182 appartient aujourd’hui au Club 1889, l’ancienne 181 au chemin de fer-musée Blonay–Chamby.'],
  kennzahlen: [['1909', 'De 2/2 151 en service'], ['1911', 'Ge 2/2 161–162'], ['1916', 'Ge 4/4 81 construite'], ['708 kW', 'Ge 4/4 81 (musée)']],
  daten: { 'Bauart': 'locomotives électriques et automotrice fourgon', 'Betreiber': 'Chemin de fer de la Bernina, dès 1943 RhB', 'Erhalten': '161 historique, 162 garée ; 81 Blonay–Chamby ; 182 Club 1889 ; 151 Pontresina' },
  specNote: 'Pour la 182, les sources indiquent 1927 ou 1928 (construction ou livraison). À Blonay–Chamby, la 81 circule sous 900 V.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Le chemin de fer de la Bernina a rejoint les RhB en 1943. Ces pièces uniques sont arrivées avec lui :'],
        tabelle: { kopf: ['Véhicule', 'Construction', 'Remarque'], zeilen: [
          ['De 2/2 151 (ex Fe 2/2 51)', '1909', 'automotrice fourgon, numéro 151 dès 1965'], ['Ge 2/2 161, 162', '1911', 'petites locomotives de manœuvre'],
          ['Ge 4/4 181 (ex Bernina Ge 6/6 81)', '1916, transformée en 1929', 'à Blonay–Chamby depuis 1970'], ['Ge 4/4 182 (ex Bernina 82)', '1927/28', 'SLM et Sécheron ; Club 1889']] } },
      { titel: 'Utilisation et technique', p: ['La 81 a été construite en 1916 comme Ge 6/6 et transformée en Ge 4/4 en 1929 ; en 1961, elle a reçu le numéro RhB 181. Blonay–Chamby indique 46 t, 708 kW et 45 km/h ainsi que des freins à main, à vide, rhéostatique et électromagnétique sur rail.', 'La De 2/2 151 a été transformée plusieurs fois et a reçu en 1980 une caisse en tôle et un pantographe unijambiste. C’est aujourd’hui un véhicule de musée à Pontresina.'] },
      { titel: 'Équipement et accessibilité', liste: ['Pour le 1000 V continu de la ligne de la Bernina', 'Frein électromagnétique sur rail (81)', 'Compartiment à bagages dans la De 2/2 151'] }
    ],
  bilder: ['Ge 4/4 182 à Pontresina (2025)', 'Ge 4/4 81 au chemin de fer-musée Blonay–Chamby (2018)', 'Ge 2/2 162 et De 2/2 151 à Poschiavo (2014)']
});
uebZug('rhb-g34', {
  typ: 'Locomotive à vapeur des origines de 1889–1908 (historique)',
  text: ['L’exploitation du chemin de fer Landquart–Davos, dont sont issus les RhB, a commencé en 1889 avec les G 3/4. La 1 « Rhätia » a tiré le train d’inauguration.', 'Sont notamment conservées la 1 « Rhätia » et la 11 « Heidi ».'],
  kennzahlen: [['16', 'locomotives'], ['1889', 'premières locomotives'], ['30,2 t', 'poids en service (no 1)'], ['45 km/h', 'vitesse maximale']],
  daten: { 'Bauart': 'locomotive-tender à vapeur', 'Betreiber': 'Chemin de fer Landquart–Davos, dès 1895 RhB', 'Länge': '7,95 m hors tampons (no 1)', 'Gewicht': '23,5 t à vide, 30,2 t en service (no 1)', 'Leistung': '184 kW à 20 km/h (no 1)', 'Erhalten': '1 « Rhätia » (RhB), 11 « Heidi » (Club 1889), 14 (hors des RhB)' },
  specNote: 'Données techniques de la no 1 selon historic RhB. Les 16 locomotives ne sont pas toutes identiques ; elles ont été construites entre 1889 et 1908.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SLM a construit la première série 1–5 en 1889 ; d’autres livraisons ont suivi jusqu’en 1908. La 11 de 1902 s’appelle aujourd’hui « Heidi ».'] },
      { titel: 'Utilisation et technique', p: ['La locomotive a trois essieux couplés et un essieu porteur à l’avant. Les cylindres ont 340 mm de diamètre et 500 mm de course, la chaudière travaille à 12 bar ; la locomotive porte elle-même l’eau (2600 l) et le charbon (950 kg).', 'La « Rhätia » est revenue après de longues années hors des Grisons et a été révisée après 2014. La « Heidi » appartient au Club 1889 ; le registre mentionne une transformation en 2016.'] },
      { titel: 'Équipement et accessibilité', liste: ['Roues motrices de 1050 mm, roues porteuses de 700 mm', 'Réserves d’eau et de charbon sur la locomotive (locomotive-tender)', 'Moteur à deux cylindres à vapeur saturée'] }
    ],
  bilder: ['G 3/4 1 « Rhätia » à Bonaduz (2009)', 'G 3/4 1 et Ge 2/4 222 à Coire']
});
uebZug('rhb-mallet', {
  name: 'Locomotives Mallet',
  typ: 'Locomotives à vapeur articulées pour le service de montagne lourd (historiques)',
  text: ['Les locomotives Mallet ont deux groupes moteurs sous une seule chaudière. Elles passent ainsi des courbes serrées avec de nombreux essieux moteurs.', 'Les RhB en avaient trois types numérotés de 21 à 32.'],
  kennzahlen: [['12', 'locomotives (21–32)'], ['1891', 'premières Mallet (Maffei)'], ['1896', '« Maloja » et « Chiavenna »'], ['1902', 'série SLM']],
  daten: { 'Bauart': 'locomotives-tenders Mallet', 'Betreiber': 'Chemin de fer Landquart–Davos et RhB' },
  specNote: 'Selon la statistique des locomotives Pospichal. Les transformations des 21 et 22 n’ont pas créé de locomotives supplémentaires.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['La notation à deux fractions décrit les deux groupes moteurs.'],
        tabelle: { kopf: ['Type', 'Numéros', 'Origine'], zeilen: [
          ['G 2/2+2/2', '21–22 (ex LD 6–7)', 'Maffei 1891, transformées plus tard en G 2/3+2/2'], ['G 2/2+2/3', '23–24', 'SLM 1896, « Maloja » et « Chiavenna »'], ['G 2/3+2/2', '25–32', 'SLM dès 1902']] } },
      { titel: 'Utilisation et technique', p: ['Les locomotives articulées plus puissantes ont repris les trains lourds de montagne des petites G 3/4. Après l’électrification, les RhB ont vendu de nombreuses locomotives à vapeur, aussi à l’étranger.', 'La 23 « Maloja » est partie en 1926 aux forces motrices de l’Oberhasli et a été démolie en 1940.'] },
      { titel: 'Équipement et accessibilité', liste: ['Deux groupes moteurs, celui de l’avant mobile', 'Réserves d’eau et de charbon sur la locomotive', 'Conception Mallet pour les courbes serrées'] }
    ],
  bilder: ['Locomotive Mallet 23 « Maloja »']
});
uebZug('rhb-g45', {
  typ: 'Locomotive à vapeur lourde à tender séparé dès 1904 (historique)',
  text: ['Les G 4/5 étaient les locomotives à vapeur les plus puissantes des RhB. SLM a construit les 29 locomotives dès 1904 ; elles ont quatre essieux couplés, un essieu porteur et un tender.', 'La 107 « Albula » et la 108 de 1906 font aujourd’hui partie des locomotives historiques des RhB.'],
  kennzahlen: [['29', 'locomotives (101–129)'], ['1904', 'premières locomotives'], ['2', 'locomotives historiques (107, 108)'], ['2', 'locomotives en Thaïlande']],
  daten: { 'Bauart': 'locomotive à vapeur à tender séparé', 'Erhalten': '107 et 108 (RhB) ; 118 Chiang Mai, 123 Bangkok' },
  specNote: 'Les livraisons diffèrent ; une fiche commune pour les 29 locomotives n’est donc pas indiquée.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SLM a construit la série dès 1904. Les deux locomotives historiques 107 et 108 datent de 1906 ; la 107 porte le nom « Albula ».'] },
      { titel: 'Utilisation et technique', p: ['Les G 4/5 tiraient des trains lourds sur l’Albula jusqu’à l’électrification de la ligne. Ensuite, les RhB ont vendu de nombreuses locomotives ; la 104 est partie en 1950 au Ferrocarril de La Robla en Espagne.', 'Deux anciennes locomotives des RhB se trouvent aujourd’hui en Thaïlande : la 118 à Chiang Mai et la 123 à Bangkok.'] },
      { titel: 'Équipement et accessibilité', liste: ['Tender pour l’eau et le charbon', 'Quatre essieux couplés et un essieu porteur', 'Tire aujourd’hui des trains spéciaux à vapeur des RhB'] }
    ],
  bilder: ['G 4/5 107 « Albula » avec la Ge 6/6 II 702', 'G 4/5 104 sur une photo d’usine SLM (1904)']
});
uebZug('rhb-bernina-tw', {
  name: 'Automotrices de la Bernina', beiname: 'BCe 4/4 et ABe 4/4 I',
  typ: 'Premières automotrices du chemin de fer de la Bernina dès 1908 (historiques)',
  text: ['Le chemin de fer de la Bernina a commencé son exploitation avec des automotrices électriques à deux bogies. Plus tard, elles ont été transformées et désignées ABe 4/4 I 30–38.', 'Les 30 et 34 sont conservées par les RhB comme automotrices historiques, la 35 au chemin de fer-musée Blonay–Chamby.'],
  kennzahlen: [['1908', 'premières automotrices'], ['450 kW', 'puissance (35, musée)'], ['55 km/h', 'vitesse maximale (35)'], ['3', 'conservées (30, 34, 35)']],
  daten: { 'Bauart': 'automotrices électriques', 'Betreiber': 'Chemin de fer de la Bernina, dès 1943 RhB', 'Fahrzeugnummern': 'BCe 4/4 1–14, BCFe 4/4 21–23, plus tard ABe 4/4 I 30–38', 'Erhalten': '30 et 34 (RhB), 35 (Blonay–Chamby)' },
  specNote: 'Les années de construction des 30 et 34 diffèrent selon les registres. Les valeurs de la 35 valent pour son état de musée à Blonay–Chamby (900 V).',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['En 1908/09, le chemin de fer de la Bernina a acheté les automotrices voyageurs BCe 4/4 1–14 et en 1911 les BCFe 4/4 21–23 avec compartiment à bagages. Transformations et nouveaux numéros en ont fait les ABe 4/4 I 30–38.'] },
      { titel: 'Utilisation et technique', p: ['Blonay–Chamby indique pour la 35 un poids en service de 30 t, quatre moteurs d’un total de 450 kW et 55 km/h. Elle a des freins à main, à air, à vide, rhéostatique et électromagnétique sur rail.', 'Historiquement, la 35 offrait douze places de 2e et 31 de 3e classe.'] },
      { titel: 'Équipement et accessibilité', liste: ['Compartiments de 2e et 3e classe (historique)', 'Frein électromagnétique sur rail', 'Pour la caténaire à courant continu du chemin de fer de la Bernina'] }
    ]
});
uebZug('rhb-abe44ii', {
  typ: 'Automotrice de la Bernina de 1964–1972 (historique)',
  text: ['Dès 1964, les neuf ABe 4/4 II ont remplacé une grande partie des anciennes automotrices de la Bernina. Elles tiraient aussi des voitures supplémentaires sur la ligne raide de la Bernina.', 'La 46 est conservée comme automotrice historique ; les 48 et 49 ont été transformées en véhicules de service.'],
  kennzahlen: [['9', 'automotrices (41–49)'], ['680 kW', 'puissance continue'], ['65 km/h', 'vitesse maximale'], ['1964', 'premières automotrices']],
  daten: { 'Bauart': 'automotrice électrique', 'Hersteller': 'SWS (mécanique), MFO, SAAS, BBC (électrique)', 'Länge': '16,54 m (41–46), 16,89 m (47–49)', 'Leistung': '680 kW continus', 'Sitzplätze': '12 en 1re, 24 en 2e classe', 'Erhalten': '46 (historique) ; 47 encore mentionnée' },
  specNote: 'Valeurs selon Wikipédia. Franz Skvor, qui a participé à l’achat, indique 677 kW comme valeur de planification de l’époque.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SWS a construit la partie mécanique, MFO, SAAS et BBC ont livré l’équipement électrique. Les 41–46 sont arrivées en 1964/65, les 47–49 en 1972.', 'La 48 est devenue en 2012 l’automotrice de service Xe 23201, la 49 en 2014 la Xe 23202 et en 2015 le véhicule de secours Xe 27201 à Poschiavo.'] },
      { titel: 'Utilisation et technique', p: ['Les automotrices assuraient les trains voyageurs sur la ligne de la Bernina et tiraient des voitures supplémentaires sur des rampes jusqu’à 70 pour mille. Elles avaient des freins rhéostatique, à récupération et électromagnétique sur rail, la commande multiple, et pouvaient être télécommandées depuis une fraise à neige.', 'Dès 2010, les 41–45 ont été démolies. En 2021, la 46 a retrouvé sa livrée historique avec bande dorée.'] },
      { titel: 'Équipement et accessibilité', liste: ['12 places en 1re et 24 en 2e classe', 'Frein électromagnétique sur rail', 'Télécommande depuis une fraise à neige'] }
    ],
  bilder: ['ABe 4/4 II 46 avec le chasse-neige Xk 9143', 'ABe 4/4 II 42 avec un court train sur la ligne de la Bernina (vers 1980)']
});
uebZug('rhb-abe44iii', {
  typ: 'Automotrice de la Bernina de 1988 et 1990 (historique)',
  text: ['Jusqu’en 2023, les six ABe 4/4 III étaient les automotrices les plus puissantes de la ligne de la Bernina. Elles circulaient souvent par deux en tête du Bernina Express.', 'Leur service régulier a pris fin fin 2023 ; la 53 « Tirano » se trouve aujourd’hui au musée ferroviaire de l’Albula à Bergün.'],
  kennzahlen: [['6', 'automotrices (51–56)'], ['1016 kW', 'puissance continue'], ['65 km/h', 'vitesse maximale'], ['2023', 'fin du service régulier']],
  daten: { 'Bauart': 'automotrice électrique', 'Länge': '16,89 m hors tampons', 'Leistung': '1016 kW continus', 'Sitzplätze': '12 en 1re, 16 en 2e classe', 'Erhalten': '53 au musée ferroviaire de l’Albula ; 54 et 56 encore mentionnées' },
  specNote: 'Valeurs selon Wikipédia ; la brochure des RhB indique environ 1000 kW et 175 kN. Le dossier nomme SLM et ABB comme constructeurs, Wikipédia SWA et ABB.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les six automotrices sont arrivées en deux séries : 51–53 en 1988, 54–56 en 1990. Elles portent des noms comme 51 « Poschiavo », 53 « Tirano » et 54 « Hakone ».'] },
      { titel: 'Utilisation et technique', p: ['Les automotrices tiraient des trains régionaux et le Bernina Express, souvent par deux. Elles ont quitté le service régulier fin 2023, car elles ne répondaient pas aux exigences pour les voyageurs à mobilité réduite et n’avaient pas le système ZSI 127 ; les Allegra ont pris le relais.', 'Les 51, 52 et 55 ont été démolies. La 53 se trouve au musée ferroviaire de l’Albula depuis juillet 2024.'] },
      { titel: 'Équipement et accessibilité', liste: ['12 places en 1re et 16 en 2e classe', 'Circulation par deux en commande multiple', 'Pas de système ZSI 127'] }
    ],
  bilder: ['ABe 4/4 III 56 et 51 au Lago Bianco', 'ABe 4/4 III sur le viaduc hélicoïdal de Brusio']
});
uebZug('rhb-abe501', {
  beiname: 'Rhétique volant',
  typ: 'Automotrice légère en acier de 1939/40 (historique)',
  text: ['Les quatre ABe 4/4 501–504 étaient des automotrices légères en acier pour le réseau à courant alternatif. On les surnommait « Fliegender Rätier » (le Rhétique volant).', 'La 501 est conservée comme automotrice historique.'],
  kennzahlen: [['4', 'automotrices'], ['1939', 'construction'], ['490 kW', 'puissance (brochure)'], ['70 km/h', 'vitesse maximale (brochure)']],
  daten: { 'Bauart': 'automotrice électrique légère en acier', 'Hersteller': 'SWS (mécanique), BBC et MFO (électrique)', 'Länge': 'environ 18 m', 'Leistung': 'environ 490 kW', 'Erhalten': '501 (historique)' },
  specNote: 'Puissance, vitesse et longueur selon la brochure des RhB « Véhicules historiques » (arrondies).',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SWS a construit les quatre automotrices en 1939/40 avec l’équipement électrique de BBC et MFO. Leur caisse autoporteuse légère en acier était alors une nouveauté.'] },
      { titel: 'Utilisation et technique', p: ['Elles offraient un service propre et rapide d’automotrices sur le réseau à courant alternatif. Une photo de 1995 montre encore les 502 et 503 avec une Ge 4/4 I à Pontresina.', 'La 501 a plus tard reçu une caisse renforcée, une cabine modifiée et un nouvel aménagement intérieur. Elle ne montre donc plus l’état de 1939.'] },
      { titel: 'Équipement et accessibilité', liste: ['Compartiments de 1re et 2e classe (AB)', 'Caisse autoporteuse légère en acier', 'Aménagement intérieur renouvelé (501)'] }
    ],
  bilder: ['ABe 4/4 501 au dépôt de Landquart (2008)', 'Ge 4/4 I 603 avec les ABe 4/4 503 et 502 à Pontresina (1995)']
});
uebZug('rhb-be44-511', {
  beiname: '511–516 navettes',
  typ: 'Navettes régionales de 1971 et 1979 (historiques)',
  text: ['Avec des voitures intermédiaires et des voitures-pilotes, les Be 4/4 511–516 formaient des navettes pour le trafic régional et suburbain. Quatre sont arrivées en 1971, deux en 1979.', 'Elles sont retirées depuis 2021.'],
  kennzahlen: [['6', 'automotrices'], ['784 kW', 'puissance'], ['90 km/h', 'vitesse maximale'], ['1971', 'premiers trains']],
  daten: { 'Bauart': 'automotrice électrique avec voitures intermédiaires et voitures-pilotes', 'Hersteller': 'FFA (caisse), SIG (bogies), SAAS (électrique)', 'Fahrzeugnummern': '511–516 ; voitures-pilotes ABDt 1711–1716', 'Gewicht': '44,6 t', 'Erhalten': '514 au musée à Bergün (selon le registre)' },
  specNote: 'Valeurs selon Wikipédia. Wikipédia ne mentionne que la cabine de la 514 pour le musée ferroviaire de l’Albula ; le registre mentionne la 514 comme véhicule de musée à Bergün.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['FFA a construit les caisses, SIG les bogies et SAAS l’équipement électrique. Les quatre premières automotrices sont arrivées en 1971, deux autres en 1979. L’automotrice et la navette complète sont des véhicules différents.'] },
      { titel: 'Utilisation et technique', p: ['Les navettes circulaient dans le trafic régional et suburbain, par exemple autour de Coire, vers Thusis et Davos. Quatre moteurs de traction développent ensemble 784 kW ; la vitesse maximale est de 90 km/h.', 'Elles sont retirées depuis 2021 ; le premier train est parti à la démolition le 29 janvier 2021. Selon le registre, la 515 est garée.'] },
      { titel: 'Équipement et accessibilité', liste: ['Voitures-pilotes ABDt avec 1re et 2e classe et compartiment à bagages', 'Service en navette sans manœuvre', 'Quatre moteurs de traction de 196 kW chacun'] }
    ],
  bilder: ['Navette avec la Be 4/4 511', 'Navette Be 4/4 à Tiefencastel (1984)', '2e classe de la voiture-pilote ABDt 1713 (2016)']
});
uebZug('rhb-misox', {
  name: 'Automotrices du Misox',
  typ: 'Automotrices du chemin de fer Bellinzone–Mesocco (historiques)',
  text: ['Le chemin de fer de Bellinzone à Mesocco, dans le Misox, a rejoint les RhB en 1942. Il a apporté ses propres automotrices à courant continu.', 'La BDe 4/4 491 de 1958 est aujourd’hui un véhicule de musée à Bergün.'],
  kennzahlen: [['1907', 'ouverture Bellinzone–Mesocco'], ['5', 'automotrices 451–455'], ['1958', 'BDe 4/4 491'], ['1942', 'aux RhB']],
  daten: { 'Bauart': 'automotrices électriques', 'Betreiber': 'Chemin de fer Bellinzone–Mesocco (BM), dès 1942 RhB', 'Erhalten': '491 (Bergün)' },
  specNote: 'Selon la statistique des locomotives Pospichal. Une série RhB 491–492 n’est pas attestée dans les registres.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Le chemin de fer du Misox avait trois sortes d’automotrices :'],
        tabelle: { kopf: ['Véhicule', 'Origine', 'Construction'], zeilen: [
          ['BCe/ABDe 4/4 451–455', 'BM 1–5, Ringhoffer et MFO', '1907 et 1909'], ['Ke/Fe 4/4 471', 'BM Ke 4/4 501, Ringhoffer et MFO', '1907'], ['BDe 4/4 491', 'SWS et BBC', '1958']] } },
      { titel: 'Utilisation et technique', p: ['Les 451–455 assuraient le trafic voyageurs et bagages, la 471 les marchandises et les bagages. La 491 est arrivée en 1958 comme automotrice plus récente.', 'Des photos de 1966 montrent la 452 et la 491 à Mesocco.'] },
      { titel: 'Équipement et accessibilité', liste: ['Compartiments voyageurs et compartiment à bagages (ABDe)', 'Pour la caténaire à courant continu du chemin de fer du Misox', 'La 471 comme automotrice marchandises et bagages'] }
    ],
  bilder: ['ABDe 4/4 452 à Mesocco (1966)', 'BDe 4/4 491 à Mesocco (1966)']
});
uebZug('rhb-arosa', {
  name: 'Automotrices d’Arosa',
  typ: 'Automotrices du chemin de fer Coire–Arosa (historiques)',
  text: ['Dès 1914, le chemin de fer Coire–Arosa a circulé avec ses propres automotrices à courant continu. Après la reprise de 1942, elles ont reçu les numéros RhB 481–486.', 'Dès 1957, les RhB ont réattribué ces numéros à des ABDe 4/4 modernes. Jusqu’en 1997, la ligne d’Arosa a fonctionné en courant continu.'],
  kennzahlen: [['1914', 'ouverture Coire–Arosa'], ['6', 'automotrices ChA 1–6'], ['1957', 'nouvelles ABDe 4/4 481–486'], ['1997', 'passage au courant alternatif']],
  daten: { 'Bauart': 'automotrices électriques', 'Hersteller': 'SWS, BBC (ABDe 4/4 de 1957/58)', 'Betreiber': 'Chemin de fer Coire–Arosa (ChA), dès 1942 RhB', 'Stromsystem': '2400 V continu (jusqu’en 1997)', 'Fahrzeugnummern': 'ChA 1–6 → RhB 481–486 (ancienne 486 → 487) ; nouvelles ABDe 4/4 481–486 ; ABe 4/4 487–488', 'Erhalten': '484 et 486 à La Mure (hors service)' },
  specNote: 'Les numéros 481–486 ont été attribués deux fois. Les années de construction 1914 et 1957 ne doivent donc pas être attribuées au même véhicule.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Il y a eu deux générations portant les mêmes numéros :'],
        tabelle: { kopf: ['Génération', 'Numéros', 'Construction'], zeilen: [
          ['Automotrices ChA', 'ChA 1–6 → RhB 481–486, ancienne 486 → 487', '1914, plus tard 5 et 6'], ['ABDe 4/4', '481–486 (nouvelles)', '1957/58, SWS et BBC'], ['ABe 4/4', '487, 488 (nouvelles)', 'plus tard ; ensuite aux CJ']] } },
      { titel: 'Utilisation et technique', p: ['En 1997, la ligne d’Arosa est passée de 2400 V continu à 11 kV alternatif. Cela a mis fin à l’engagement des automotrices à courant continu.', 'Selon le registre, les anciennes 484 et 486 se trouvent à La Mure en France, hors service.'] },
      { titel: 'Équipement et accessibilité', liste: ['Compartiments voyageurs et compartiment à bagages (ABDe)', 'Pour 2400 V continu', 'Deux bogies'] }
    ],
  bilder: ['ABDe 4/4 482 de la ligne d’Arosa (années 1980)', 'Dessin type de l’automotrice BCF4 du chemin de fer Coire–Arosa']
});
uebZug('rhb-dampfschneeschleuder', {
  name: 'Fraises à neige historiques',
  typ: 'Fraises à neige à vapeur et électriques (historiques)',
  text: ['Dès 1910 à 1913, le chemin de fer de la Bernina et les RhB avaient des fraises à neige à vapeur. La Xrot d 9213 était encore en action au Lago Bianco en 2010.', 'D’autres fraises historiques se trouvent au chemin de fer à vapeur de la Furka et à Blonay–Chamby.'],
  kennzahlen: [['1913', 'fraises du réseau de base 9211, 9212'], ['1912', 'fraise de la Bernina 1052'], ['64 t', 'poids en service 1052'], ['1958', 'fraise Beilhack 9216']],
  daten: { 'Bauart': 'fraises à neige à vapeur et électriques', 'Hersteller': 'SLM (fraises à vapeur), Beilhack (9216)', 'Betreiber': 'RhB et chemin de fer de la Bernina', 'Erhalten': '9212 (DFB, comme R 12), 9213 (RhB), 1052 / ancienne 9214 (Blonay–Chamby), 9216 (DFB)' },
  specNote: 'Pour la 9213, les sources indiquent 1910 ou 1911. La fiche de Blonay–Chamby indique « 1051 » dans l’en-tête, mais l’historique renvoie à la 1052.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Le numéro 9214 a été attribué deux fois : d’abord à une fraise à vapeur de la Bernina, plus tard à une nouvelle machine de 2001.'],
        tabelle: { kopf: ['Machine', 'Construction', 'Aujourd’hui'], zeilen: [
          ['Xrot d 9211, 9212 (réseau de base)', '1913, SLM', '9211 démolie, 9212 à la DFB'], ['Xrot d 9213 (ex Bernina R 1051)', '1910/11', 'RhB'],
          ['Xrot d 9214 (ex Bernina R 1052)', '1912, SLM 2299', 'Blonay–Chamby'], ['Xrot e 9215 « moulin à café »', 'transformée en 1941 à partir du wagon K 208 de 1908', 'démolie en 1983'],
          ['Xrot m 9216', '1958, Beilhack', 'à la DFB depuis 2015'], ['Xrot et 9218, 9219', '–', '–']] } },
      { titel: 'Utilisation et technique', p: ['Les fraises du réseau de base n’avaient pas de propulsion complète et étaient poussées. Les machines de la Bernina ont leurs propres mécanismes de roulement ; mais en déneigeant, la roue de la fraise a besoin de la vapeur, si bien qu’une locomotive pousse généralement aussi.', 'La 9215 a d’abord été un wagon marchandises, puis une voiture-cuisine et dès 1941 une fraise à neige électrique. La fraise Beilhack 9216 dégage aujourd’hui la gare de Realp pour la DFB.'] },
      { titel: 'Équipement et accessibilité', liste: ['Roue de fraise entraînée à la vapeur (Xrot d)', '1052 : 14 bar de pression de chaudière, 7 m³ d’eau et 4 t de charbon', 'Xrot et 9218 : télécommandait en 1968 l’automotrice qui la poussait'] }
    ],
  bilder: ['Fraise à vapeur Xrot d 9213 au Lago Bianco (2010)', 'Ancienne fraise RhB R 12 à la DFB entre Realp et Tiefenbach', 'Fraise Beilhack 9216 à la DFB (2020)']
});
uebZug('rhb-hist-wagen', {
  name: 'Voitures voyageurs historiques',
  typ: 'Voitures voyageurs, postales et de société conservées',
  text: ['Les RhB conservent une série de voitures historiques pour les trains spéciaux : voitures voyageurs des origines, voitures de société et voitures postales.', 'D’autres anciennes voitures des RhB circulent au chemin de fer-musée Blonay–Chamby.'],
  kennzahlen: [['6', 'voitures WN 9801–9806'], ['1903', 'AB 121 (Blonay–Chamby)'], ['1939', 'voitures à accès central'], ['1889', 'origines de la LD']],
  daten: { 'Bauart': 'voitures voyageurs, postales et de société historiques', 'Betreiber': 'Chemin de fer Landquart–Davos et RhB', 'Erhalten': 'RhB ; AB 121 et As 2 à Blonay–Chamby' },
  specNote: 'Les registres indiquent des années de construction différentes pour plusieurs voitures ; elles ne sont donc pas indiquées.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les numéros WN sont des numéros administratifs qui s’ajoutent à l’ancienne inscription restaurée.'],
        tabelle: { kopf: ['Voiture', 'Fonction'], zeilen: [
          ['LD C 32 / WN 9801', 'voiture voyageurs des origines, « Il Samedrin »'], ['B 2138 / WN 9802', 'voiture de société « Filisurer Stübli »'], ['Z° 26 / WN 9803', 'voiture postale'],
          ['BC 110 / WN 9804', 'voiture voyageurs du Misox « Ul Mesolcines »'], ['F 4 / WN 9805', 'fourgon et voiture-bar'], ['C 66 / WN 9806', 'voiture voyageurs'],
          ['A 1251, B 2302', 'voitures à accès central de 1939'], ['B 2245–2247, D 4205', 'voitures à bogies et fourgon']] } },
      { titel: 'Utilisation et technique', p: ['Les voitures circulent dans des trains historiques des RhB, souvent derrière des locomotives historiques. Dans les voitures restaurées, sièges, couleurs et aménagement peuvent différer de l’état ancien.', 'À Blonay–Chamby se trouve l’AB 121, une voiture SIG de 1903 avec douze places de 1re et douze de 2e classe. L’As 2 de 1903 était une voiture-salon, dès 1948 la voiture d’observation 2191, et depuis 1999 une voiture salon-bar.'] },
      { titel: 'Équipement et accessibilité', liste: ['AB 121 : couloir latéral, toilettes et éclairage électrique', 'Freins à main et à vide sur les anciennes voitures', 'Bar dans le F 4 et dans l’As 2'] }
    ],
  bilder: ['Voiture historique BC 110 « Ul Mesolcines » à Samedan (2015)', 'Voitures historiques B 2060 et A 1102 (2024)', 'AB 121 au chemin de fer-musée Blonay–Chamby (2016)']
});
uebZug('rhb-hist-gueterwagen', {
  name: 'Wagons marchandises historiques',
  typ: 'Wagons marchandises conservés des RhB',
  text: ['Quelques wagons marchandises historiques montrent comment les RhB transportaient autrefois les marchandises : wagons couverts, wagons ouverts à bords hauts et bas, wagons à grumes et un wagon à eau.', 'Ils portent aujourd’hui aussi un numéro WN.'],
  kennzahlen: [['7', 'wagons et paires conservés'], ['9851', 'premier numéro WN'], ['N', 'paire de wagons à grumes'], ['K', 'wagons couverts']],
  daten: { 'Bauart': 'wagons marchandises historiques' },
  specNote: 'Selon le registre WN de Haribu (état mars 2026). Les familles d’origine étaient beaucoup plus grandes ; les wagons non conservés manquent ici.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Ces wagons sont conservés :'],
        tabelle: { kopf: ['Wagon', 'Numéro WN', 'Type'], zeilen: [
          ['N 1520 / N 1513', 'WN 9851', 'paire de wagons à grumes'], ['K1 5615', 'WN 9852', 'wagon couvert'], ['M 7070', 'WN 9853', 'wagon ouvert à bords bas, auparavant P 10059'],
          ['K 5563', 'WN 9854', 'wagon couvert'], ['L3 6603', 'WN 9855', 'wagon ouvert à bords hauts'], ['K 5342', 'WN 9856', 'wagon couvert, auparavant Xk 9069'], ['Uh 8101', 'WN 9862', 'wagon à eau et citerne']] } },
      { titel: 'Utilisation et technique', p: ['Le numéro WN est un numéro administratif ; l’ancienne inscription restaurée reste sur le wagon. Le registre historique des numéros connaît bien d’autres groupes, par exemple K, L, M, R, S et U.', 'Les documents publics ne suffisent pas pour une liste complète de tous les wagons marchandises depuis 1889.'] },
      { titel: 'Équipement et accessibilité', liste: ['Wagons couverts (K)', 'Wagons ouverts (L et M)', 'Paire de wagons à grumes (N)', 'Wagon à eau (Uh)'] }
    ]
});
uebZug('rhb-ehem-diesel', {
  name: 'Anciens véhicules diesel',
  typ: 'Anciennes locomotives diesel et une automotrice diesel des RhB (historiques)',
  text: ['Les Gm 3/3 231–233 de 1975/76 ont manœuvré pendant des décennies aux RhB. Elles se trouvent aujourd’hui au chemin de fer à vapeur de la Furka.', 'La Gm 4/4 241 est partie en 2023 au Brohltalbahn en Allemagne.'],
  kennzahlen: [['3', 'Gm 3/3 231–233'], ['1975', 'Gm 3/3 construites'], ['2023', '241 au Brohltalbahn'], ['1947', 'BFm 150 venant de la FO']],
  daten: { 'Bauart': 'locomotives diesel et automotrice diesel', 'Fahrzeugnummern': 'Gm 3/3 231–233 ; Gm 4/4 241 ; BFm 2/2 150 (ex FO 22)', 'Erhalten': 'Gm 3/3 à la DFB ; 241 au Brohltalbahn (D4)' },
  specNote: 'Pour la Gm 4/4 241, les registres indiquent 1958 ou 1959 comme année de construction. Pour la BFm 150, 1947 est l’année de reprise, pas de construction.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les Gm 3/3 231–233 ont été construites en 1975/76. La Gm 4/4 241 date de la fin des années 1950. L’automotrice diesel BFm 2/2 150 est venue en 1947 du chemin de fer de la Furka-Oberalp, où elle portait le numéro 22.'] },
      { titel: 'Utilisation et technique', p: ['Les Gm 3/3 manœuvraient dans des gares comme Landquart et Coire. Elles se trouvent aujourd’hui au chemin de fer à vapeur de la Furka, dans des états variables.', 'Depuis 2023, la Gm 4/4 241 fait partie du parc du Brohltalbahn sous le numéro D4.'] },
      { titel: 'Équipement et accessibilité', liste: ['Propulsion diesel', 'Trois (Gm 3/3) ou quatre (Gm 4/4) essieux moteurs', 'Compartiment à bagages dans la BFm (lettre F)'] }
    ],
  bilder: ['Gm 3/3 233 à Landquart', 'Gm 4/4 241 à Untervaz (2019)']
});
uebZug('rhb-draisinen', {
  name: 'Draisines', beiname: 'Dh 1/2 et Dm 1/2',
  typ: 'Draisine à bras et draisine à moteur des RhB (historiques)',
  text: ['Deux petites anciennes draisines des RhB se trouvent au chemin de fer-musée Blonay–Chamby : une draisine à bras des environs de 1900 et une draisine à moteur suédoise des années 1930.', 'Toutes deux sont arrivées au chemin de fer-musée le 22 mars 1968.'],
  kennzahlen: [['2', 'draisines'], ['1900', 'draisine à bras (vers)'], ['années 1930', 'draisine à moteur'], ['1968', 'à Blonay–Chamby']],
  daten: { 'Bauart': 'draisine à bras et draisine à moteur', 'Betreiber': 'RhB, aujourd’hui chemin de fer-musée Blonay–Chamby', 'Antrieb': 'force musculaire (Dh), moteur à essence deux temps (Dm)', 'Erhalten': 'Chemin de fer-musée Blonay–Chamby (depuis 1968)' },
  specNote: 'Le musée n’indique ni puissance ni vitesse.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['La draisine à bras Dh 1/2 date des environs de 1900, la draisine à moteur Dm 1/2 vient de Suède et date des années 1930. Toutes deux sont arrivées à Blonay–Chamby le 22 mars 1968.'] },
      { titel: 'Utilisation et technique', p: ['La draisine à bras est mue par la force musculaire au moyen de leviers et d’engrenages. Le musée suppose qu’elle circulait surtout en descente et sur les tronçons plats.', 'La draisine à moteur a un moteur à essence deux temps ainsi qu’un frein à main et à pied ; elle a été révisée en 1995.'] },
      { titel: 'Équipement et accessibilité', liste: ['Entraînement par levier (Dh)', 'Moteur à essence deux temps (Dm)', 'Frein à main et à pied (Dm)'] }
    ],
  bilder: ['Draisine à moteur Dm 1/2 à Blonay–Chamby (2011)']
});

/* cartes « Où circule-t-il ? » */
uebEinsatz({
  'rhb-capricorn': 'Selon les RhB sur Landquart–Davos–Filisur, Landquart–Scuol, Landquart–St-Moritz et Coire–Disentis/Mustér. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-allegra': 'Sur le réseau de base et sur la ligne de la Bernina jusqu’à Tirano, par exemple dans le Bernina Express depuis Coire par l’Albula. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-allegra-stz': 'Surtout dans le trafic pendulaire autour de Coire, par exemple sur le RER Coire–Thusis. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-alvra': 'Sur la ligne de l’Albula entre Coire et St-Moritz. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-ge44ii': 'Sur tout le réseau à courant alternatif des RhB, y compris la ligne d’Arosa. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-ge44iii': 'En tête des trains rapides sur l’Albula, du Glacier Express et des trains autos dans le tunnel de la Vereina. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-panorama': 'Dans le Bernina Express de Coire à Tirano par l’Albula et le col de la Bernina ; voitures d’observation ouvertes aussi dans les gorges du Rhin. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-glacier': 'Dans le Glacier Express depuis St-Moritz et Davos par Coire et Disentis/Mustér, puis sur le réseau du MGB jusqu’à Zermatt. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-ew': 'Dans des trains tractés sur tout le réseau des RhB. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-steuerwagen': 'Dans des navettes avec locomotive sur le réseau de base et dans les trains autos. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-gastro': 'Dans des trains spéciaux et charters, par exemple l’Alpine Classic Pullman Express. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-vereina': 'Entre les gares de chargement de Klosters Selfranga et Sagliains par le tunnel de la Vereina. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-gepaeckwagen': 'Dans les trains du réseau de base ; les voitures à vélos BD 56401–56406 circulent dans les rames Alvra sur l’Albula. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-haik': 'Dans le trafic marchandises vers les vallées grisonnes. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-uac': 'Dans le trafic marchandises sur le réseau des RhB. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-za': 'Pour l’approvisionnement des Grisons en huiles minérales, sur tout le réseau. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-fac': 'Pour le gravier et d’autres vracs sur le réseau des RhB. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-flachwagen': 'Dans le trafic marchandises de machines, bois, acier et conteneurs sur tout le réseau. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-acts': 'Dans le trafic de conteneurs sur tout le réseau des RhB. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-container': 'Dans le trafic de conteneurs sur tout le réseau des RhB. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-spezialtransport': 'Pour les charges lourdes et hautes sur le réseau des RhB. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-geaf22': 'En service de manœuvre, entre autres à Landquart, Coire, Ilanz, Thusis, Davos Platz et Zernez.',
  'rhb-ge33': 'En service de manœuvre à Samedan et à Coire.',
  'rhb-gmf44-242': 'En service de manœuvre sur le réseau de base, par exemple à Klosters Platz, Landquart et Davos. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-taf22': 'Dans les ateliers et dépôts, entre autres à Landquart et à Poschiavo.',
  'rhb-gmf44ii': 'En tête de trains de travaux et, en hiver, avec des fraises à neige sur tout le réseau des RhB. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-gem44': 'Sur la ligne de la Bernina, stationnées à Pontresina et Poschiavo ; au diesel aussi sur le réseau de base. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-tm': 'En service de manœuvre et en tête de petits trains de travaux sur tout le réseau. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-tieflade': 'Dans la logistique de chantier sur le réseau des RhB. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-windhoff': 'Prévus dès 2029 pour la construction et l’entretien sur tout le réseau des RhB. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-dienstwagen': 'Pour les travaux de voie, les mesures et le matériel sur tout le réseau. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-loeref': 'Pour les interventions dans le tunnel de la Vereina, stationnés des deux côtés du tunnel. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-fahrleitung': 'Pour les travaux de caténaire sur tout le réseau. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-schneeschleuder': 'En hiver sur le réseau de base et sur la ligne de la Bernina. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-ge66i': 'Autrefois surtout sur la ligne de l’Albula. Conservées à Landquart et Samedan ainsi qu’au Musée Suisse des Transports à Lucerne et à Bergün. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-ge66ii': 'Autrefois en tête de trains lourds sur le réseau de base ; la 702 est au Musée Suisse des Transports à Lucerne. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-ge44i': 'Autrefois sur tout le réseau à courant alternatif ; la 605 tire aujourd’hui des trains historiques. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-ge24': 'D’abord sur la ligne de l’Engadine Bever–Scuol ; conservées à Landquart, au Musée Suisse des Transports à Lucerne et au musée ferroviaire de l’Albula. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-ge46': 'D’abord sur la ligne de l’Engadine, puis sur le réseau de base ; la 353 tire des trains de musée. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-bernina-loks': 'Sur la ligne de la Bernina ; la 81 circule aujourd’hui au chemin de fer-musée Blonay–Chamby. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-g34': 'Dès 1889 sur le chemin de fer Landquart–Davos ; aujourd’hui en tête de trains spéciaux à vapeur. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-mallet': 'Autrefois en service de montagne lourd sur le chemin de fer Landquart–Davos et l’Albula. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-g45': 'Autrefois en tête de trains lourds sur l’Albula ; aujourd’hui en tête de trains spéciaux à vapeur. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-bernina-tw': 'Sur la ligne de la Bernina ; la 35 se trouve au chemin de fer-musée Blonay–Chamby. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-abe44ii': 'Sur la ligne de la Bernina entre St-Moritz et Tirano. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-abe44iii': 'Jusqu’en 2023 sur la ligne de la Bernina ; la 53 se trouve au musée ferroviaire de l’Albula à Bergün. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-abe501': 'Autrefois sur le réseau à courant alternatif, par exemple en Engadine. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-be44-511': 'Autrefois dans le trafic régional et suburbain, par exemple autour de Coire, vers Thusis et Davos. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-misox': 'Autrefois sur le chemin de fer Bellinzone–Mesocco ; la 491 se trouve à Bergün. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-arosa': 'Autrefois sur la ligne d’Arosa Coire–Arosa, en courant continu jusqu’en 1997. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-dampfschneeschleuder': 'Autrefois sur la ligne de la Bernina et le réseau de base ; conservées aux RhB, à la DFB à Realp et à Blonay–Chamby. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-hist-wagen': 'Dans les trains historiques des RhB ; certaines voitures à Blonay–Chamby. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-hist-gueterwagen': 'Autrefois dans le trafic marchandises des RhB ; aujourd’hui dans des trains historiques. La voie métrique est tracée en pointillé et simplifiée.',
  'rhb-ehem-diesel': 'Autrefois en service de manœuvre, par exemple à Landquart et Coire ; les Gm 3/3 sont aujourd’hui à la DFB à Realp.',
  'rhb-draisinen': 'Aujourd’hui au chemin de fer-musée Blonay–Chamby.'
});
