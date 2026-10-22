/* RailBase - Uebersetzung 'fr'. Automatisch zusammengesetzt aus sprachen\fr\ (werkzeuge\sprachen-bauen.ps1). Hier nicht bearbeiten. */
'use strict';

/* ---- 01-oberflaeche.js ---- */
/* Français – menus, boutons, page d’accueil, dialogues */
uebDict({
  // ---------- en-tête et accueil ----------
  'RailBase – Startseite': 'RailBase – Accueil',
  'Schweizer Zeit': 'Heure suisse',
  'Darstellung: automatisch': 'Affichage : automatique',
  'Spenden': 'Faire un don',
  'Bahntechnik · Schweiz': 'Technique ferroviaire · Suisse',
  'Schweizer Bahnfahrzeuge entdecken.': 'Découvrir les véhicules ferroviaires suisses.',
  'Technik, Geschichte und Einsatzgebiete.<br>Entdecke die Fahrzeuge hinter dem Bahnalltag.': 'Technique, histoire et domaines d’utilisation.<br>Découvre les véhicules qui font le quotidien du rail.',
  'Fahrzeug suchen': 'Rechercher un véhicule',
  'Suchen': 'Rechercher',
  'Bereiche': 'Domaines',
  'Bilder aus der Schweizer Bahnwelt': 'Images du monde ferroviaire suisse',
  'Diashow': 'Diaporama',
  'Bild wählen': 'Choisir une image',
  'Vorheriges Bild': 'Image précédente',
  'Nächstes Bild': 'Image suivante',
  'Diashow anhalten': 'Mettre le diaporama en pause',
  'Diashow abspielen': 'Lancer le diaporama',
  'Bild {n}: {t}': 'Image {n} : {t}',
  'Zum Fahrzeug': 'Voir le véhicule',
  'Foto:': 'Photo :',
  'Kategorien': 'Catégories',
  'Fahrzeuge nach Bereich': 'Véhicules par domaine',
  'Sammelalbum': 'Album de collection',
  'Tippe auf einer Fahrzeugseite auf «Hab ich gesehen». Die Liste bleibt in deinem Browser.': 'Sur la page d’un véhicule, touche « Je l’ai vu ». La liste reste dans ton navigateur.',
  'Zeitstrahl': 'Frise chronologique',
  'Seit wann sie fahren': 'Depuis quand ils circulent',
  'Alle Fahrzeuge mit bekanntem Jahr der ersten Inbetriebnahme, vom ältesten zum neusten. Wische oder scrolle zur Seite.': 'Tous les véhicules dont l’année de première mise en service est connue, du plus ancien au plus récent. Fais glisser ou défile vers le côté.',
  'Fahrzeuge nach Jahr der Inbetriebnahme': 'Véhicules par année de mise en service',
  'Spurweite': 'Écartement',
  'Normalspur oder Meterspur': 'Voie normale ou voie métrique',
  'Zwei Führerstandsfahrten. Auf Normalspur geht es mit 200 km/h durch einen Tunnel und durch zwei Bahnhöfe mit vielen Weichen, auf Meterspur über eine Weichenverbindung nach Lindmatt.': 'Deux trajets en cabine de conduite. Sur voie normale, on traverse à 200 km/h un tunnel et deux gares pleines d’aiguillages ; sur voie métrique, on passe par une communication jusqu’à Lindmatt.',
  'Spurweite wählen': 'Choisir l’écartement',
  'Normalspur': 'Voie normale',
  'Meterspur': 'Voie métrique',
  'Spurweite = Abstand der Schieneninnenkanten, gemessen 14 mm unter Schienenoberkante.': 'Écartement = distance entre les bords intérieurs des rails, mesurée 14 mm sous le dessus du rail.',
  'Fahrdaten in Echtzeit': 'Données de marche en temps réel',
  'Live-Fahrdaten': 'Données de marche en direct',
  'Gefahren': 'Parcouru',
  'Tempo': 'Vitesse',
  'Fahrzeit': 'Temps de trajet',
  'Bei <b id="lc-kmh">0 km/h</b> legt der Zug zurück:': 'À <b id="lc-kmh">0 km/h</b>, le train parcourt :',
  'pro Sekunde': 'par seconde',
  'in 10 Sekunden': 'en 10 secondes',
  'pro Minute': 'par minute',
  'pro Stunde': 'par heure',
  'Rechnung: km/h ÷ 3,6 = Meter pro Sekunde': 'Calcul : km/h ÷ 3,6 = mètres par seconde',
  'Rechnung: {kmh} km/h ÷ 3,6 = {ms} m pro Sekunde': 'Calcul : {kmh} km/h ÷ 3,6 = {ms} m par seconde',
  'Der Zug steht: 0 m pro Sekunde.': 'Le train est à l’arrêt : 0 m par seconde.',
  'Führerstandsfahrt auf Normalspur, 1435 mm': 'Trajet en cabine sur voie normale, 1435 mm',
  'Führerstandsfahrt auf Normalspur, 1435 mm: Tunnel, Durchfahrt Erlenried, Halt in Sonnwil': 'Trajet en cabine sur voie normale, 1435 mm : tunnel, passage à Erlenried, arrêt à Sonnwil',
  'Führerstandsfahrt auf Meterspur, 1000 mm: Weichenverbindung und Bahnhof Lindmatt': 'Trajet en cabine sur voie métrique, 1000 mm : communication et gare de Lindmatt',
  'Geschwindigkeit': 'Vitesse',
  'Animation pausieren': 'Mettre l’animation en pause',
  'Animation abspielen': 'Lancer l’animation',
  'Nächster Punkt: <b>{p}</b> in {m}': 'Prochain point : <b>{p}</b> dans {m}',
  'Gleich ist die Runde komplett: noch {m}': 'Le tour est presque terminé : encore {m}',
  '<b>Meterspur, 1000 mm.</b> Halt am Signal, die Weiche wird umgestellt, dann über die Weichenverbindung und durch den Bahnhof Lindmatt. Typisch für Bahnen wie RhB, MGB oder zb.': '<b>Voie métrique, 1000 mm.</b> Arrêt au signal, l’aiguillage est manœuvré, puis passage par la communication et à travers la gare de Lindmatt. Typique de chemins de fer comme le RhB, le MGB ou la zb.',
  '<b>Normalspur, 1435 mm.</b> Mit 200 km/h durch den Tunnel, Durchfahrt in Erlenried, dann Halt in Sonnwil auf Gleis 1. Unterwegs liegen {n} Weichen, dazu Abstellgleise mit Prellbock und eine Passerelle.': '<b>Voie normale, 1435 mm.</b> À 200 km/h dans le tunnel, passage à Erlenried, puis arrêt à Sonnwil sur la voie 1. Le parcours compte {n} aiguillages, ainsi que des voies de garage avec heurtoir et une passerelle.',
  'Halt am Signal': 'Arrêt au signal',
  'Weichenverbindung auf Gleis 2': 'Communication vers la voie 2',
  'Bahnhof Lindmatt': 'Gare de Lindmatt',
  'Zurück auf Gleis 1': 'Retour sur la voie 1',
  'Weiche wird umgestellt': 'L’aiguillage est manœuvré',
  'Fahrt frei': 'Voie libre',
  'Über die Weichenverbindung auf Gleis 2': 'Par la communication vers la voie 2',
  'Durchfahrt Bahnhof Lindmatt': 'Passage en gare de Lindmatt',
  'Tunnel, 320 m': 'Tunnel, 320 m',
  'Erlenried, Durchfahrt': 'Erlenried, passage',
  'Weichen Sonnwil': 'Aiguillages de Sonnwil',
  'Halt Sonnwil, Gleis 1': 'Arrêt à Sonnwil, voie 1',
  'Ausfahrt aufs Streckengleis': 'Sortie vers la voie principale',
  'Halt in Sonnwil, Gleis 1': 'Arrêt à Sonnwil, voie 1',
  'Ausfahrsignal zeigt Fahrt': 'Le signal de sortie est ouvert',
  'Gleich im Tunnel': 'Bientôt dans le tunnel',
  'Im Tunnel mit 200 km/h': 'Dans le tunnel à 200 km/h',
  'Durchfahrt Erlenried': 'Passage à Erlenried',
  'Einfahrt Sonnwil über die Weichen auf Gleis 1': 'Entrée à Sonnwil par les aiguillages sur la voie 1',
  'Bremsen für den Halt in Sonnwil': 'Freinage pour l’arrêt à Sonnwil',
  'Ausfahrt über die Weichen aufs Streckengleis': 'Sortie par les aiguillages vers la voie principale',
  'Beschleunigen auf 200 km/h': 'Accélération jusqu’à 200 km/h',
  'Bauteile beschriftet · Fahrt pausiert': 'Éléments légendés · trajet en pause',

  // ---------- départs ----------
  'Abfahrten': 'Départs',
  'Was fährt gerade ab?': 'Qu’est-ce qui part maintenant ?',
  'Die nächsten Abfahrten eines Schweizer Bahnhofs mit Gleis und Verspätung, live aus dem offiziellen Fahrplan.': 'Les prochains départs d’une gare suisse avec voie et retard, en direct depuis l’horaire officiel.',
  'Bahnhof': 'Gare',
  'Bahnhof, z. B. Fribourg/Freiburg': 'Gare, p. ex. Fribourg/Freiburg',
  'Anzeigen': 'Afficher',
  'Abfahrt': 'Départ',
  'Zeit': 'Heure',
  'Linie': 'Ligne',
  'Nach': 'Vers',
  'Gleis': 'Voie',
  'Verspätung': 'Retard',
  'Tippe auf ein Ziel, um alle Halte zu sehen. Daten: transport.opendata.ch (Fahrplan der Schweizer Bahnen), alle 60 Sekunden neu geladen.': 'Touche une destination pour voir tous les arrêts. Données : transport.opendata.ch (horaire des chemins de fer suisses), actualisées toutes les 60 secondes.',
  'Lade Abfahrten …': 'Chargement des départs …',
  'Diesen Bahnhof gibt es nicht. Versuche einen anderen Namen, z. B. «Bern».': 'Cette gare n’existe pas. Essaie un autre nom, p. ex. « Bern ».',
  'Halte von {linie} nach {ziel} anzeigen': 'Afficher les arrêts du {linie} pour {ziel}',
  'Stand': 'État à',
  'Im Moment keine Abfahrten.': 'Aucun départ pour le moment.',
  'Die Abfahrten können gerade nicht geladen werden. Auf der fertigen Website funktioniert die Tafel; in der Vorschau sind Verbindungen nach aussen gesperrt.': 'Impossible de charger les départs pour le moment. Sur le site publié, le tableau fonctionne ; dans l’aperçu, les connexions vers l’extérieur sont bloquées.',
  'Gl.': 'Voie',

  // ---------- ABC du rail (bouton) ----------
  'Bahn-ABC': 'ABC du rail',
  'Was bedeuten die Bezeichnungen?': 'Que signifient les désignations ?',
  'Was bedeutet «RABDe 500» oder «Re 4/4 II»? Schweizer Bahnfahrzeuge tragen Bezeichnungen, die wie ein Code funktionieren. Hier lernst du, sie zu lesen.': 'Que signifient « RABDe 500 » ou « Re 4/4 II » ? Les véhicules ferroviaires suisses portent des désignations qui fonctionnent comme un code. Ici, tu apprends à les lire.',
  'Ganzes Bahn-ABC anzeigen': 'Afficher tout l’ABC du rail',
  'Weniger anzeigen': 'Afficher moins',

  // ---------- carte du réseau ----------
  'Bahnnetz Schweiz': 'Réseau ferroviaire suisse',
  'Alle Bahnstrecken der Schweiz': 'Toutes les lignes ferroviaires de Suisse',
  'SBB, Privatbahnen, Meterspur und Bergbahnen auf einer Karte. Tippe auf eine Strecke für Betreiber, Spurweite, Gleise und Stromsystem.': 'CFF, chemins de fer privés, voie métrique et chemins de fer de montagne sur une seule carte. Touche une ligne pour voir l’exploitant, l’écartement, le nombre de voies et le courant.',
  'Kategorien ein- und ausblenden': 'Afficher ou masquer les catégories',
  'Karte der Schweiz mit allen Bahnstrecken': 'Carte de la Suisse avec toutes les lignes ferroviaires',
  'Ctrl + Mausrad oder + / − zum Zoomen': 'Ctrl + molette ou + / − pour zoomer',
  'Hineinzoomen': 'Zoom avant',
  'Herauszoomen': 'Zoom arrière',
  'Ganze Schweiz zeigen': 'Afficher toute la Suisse',
  'SBB Netzkarte (Trafimage)': 'Carte du réseau CFF (Trafimage)',
  'Live-Karte der SBB mit Luftbild, Pünktlichkeit, Bahnhofplänen, Frequenzen und Buslinien.': 'Carte en direct des CFF avec vue aérienne, ponctualité, plans de gare, fréquentation et lignes de bus.',
  'Öffnen': 'Ouvrir',
  'Rund {km} Bahnstrecke ohne Tram, {n} Abschnitte. Daten: Bundesamt für Verkehr (BAV), Schienennetz, Stand 6. Juli 2021. Landesgrenze: swisstopo.': 'Environ {km} de lignes ferroviaires sans les trams, {n} tronçons. Données : Office fédéral des transports (OFT), réseau ferré, état au 6 juillet 2021. Frontière nationale : swisstopo.',
  'Streckenabschnitt': 'Tronçon de ligne',
  'Betreiber': 'Exploitant',
  'Gleise': 'Voies',
  'Doppelspur': 'Double voie',
  '{n} Gleise': '{n} voies',
  'Einspur': 'Voie unique',
  'Strom': 'Courant',
  'Abschnitt': 'Tronçon',
  'Normalspur, weitere Bahnen': 'Voie normale, autres chemins de fer',
  'Andere Spurweiten': 'Autres écartements',
  'Tram und Metro': 'Tram et métro',
  'Normalspur, 1435 mm': 'Voie normale, 1435 mm',
  'Meterspur, 1000 mm': 'Voie métrique, 1000 mm',
  'Dreischienengleis 1000/1435 mm': 'Voie à trois rails 1000/1435 mm',
  'Wechselstrom 16,7 Hz': 'Courant alternatif 16,7 Hz',
  'Gleichstrom': 'Courant continu',
  'Wechselstrom 50 Hz': 'Courant alternatif 50 Hz',
  'Drehstrom': 'Courant triphasé',
  'nicht elektrifiziert': 'non électrifiée',
  'Wechselstrom 16,7 und 50 Hz': 'Courant alternatif 16,7 et 50 Hz',
  'Wechselstrom 16,7 Hz und Gleichstrom': 'Courant alternatif 16,7 Hz et courant continu',
  'Rhätische Bahn (RhB)': 'Chemin de fer rhétique (RhB)',
  'Schweizerische Südostbahn (SOB)': 'Chemin de fer du Sud-Est suisse (SOB)',
  'Freiburgische Verkehrsbetriebe (TPF)': 'Transports publics fribourgeois (TPF)',
  'Regionalverkehr Bern-Solothurn': 'Transports régionaux Berne-Soleure',
  'Appenzeller Bahnen': 'Chemins de fer appenzellois',
  'Dampfbahn Furka-Bergstrecke': 'Chemin de fer à vapeur de la ligne sommitale de la Furka',

  // ---------- quiz ----------
  'Quiz': 'Quiz',
  'Wie gut kennst du die Schweizer Bahn?': 'Connais-tu bien le rail suisse ?',
  'Drei Levels mit je rund 25 Fragen. Ob du richtig liegst, siehst du erst am Schluss, mit Prozentzahl und allen Antworten.': 'Trois niveaux d’environ 25 questions chacun. Tu ne vois qu’à la fin si tu as juste, avec un pourcentage et toutes les réponses.',
  'Einfach': 'Facile',
  'Normal': 'Normal',
  'Schwierig': 'Difficile',
  'Bekannte Züge erkennen und Grundwissen zur Bahn.': 'Reconnaître des trains connus et les bases du rail.',
  'Fahrzeuge, Zahlen und Strecken für Bahnfans.': 'Véhicules, chiffres et lignes pour les passionnés.',
  'Technik, Geschichte und Details für Profis.': 'Technique, histoire et détails pour les experts.',
  '{n} Fragen': '{n} questions',
  'Bestes Ergebnis {p} %': 'Meilleur résultat {p} %',
  'Starten': 'Commencer',
  'Frage {i} von {n}': 'Question {i} sur {n}',
  'Abbrechen': 'Arrêter',
  'Foto zur Frage': 'Photo de la question',
  'Zurück': 'Retour',
  'Weiter': 'Suivant',
  'Auswerten': 'Voir le résultat',
  'Verkleinern': 'Réduire',
  'Vergrössern': 'Agrandir',
  'Auswertung': 'Résultat',
  '{r} von {n} richtig': '{r} sur {n} justes',
  'Neues bestes Ergebnis in diesem Level.': 'Nouveau meilleur résultat dans ce niveau.',
  'Nochmals spielen': 'Rejouer',
  'Anderes Level': 'Autre niveau',
  'Ergebnis teilen': 'Partager le résultat',
  'Richtig': 'Juste',
  'Falsch': 'Faux',
  'Deine Antwort:': 'Ta réponse :',
  'Richtig wäre:': 'La bonne réponse :',
  'Mehr zu {name}': 'En savoir plus : {name}',
  'Perfekt! Alles richtig.': 'Parfait ! Tout est juste.',
  'Sehr stark, du kennst dich aus.': 'Très fort, tu t’y connais.',
  'Gut gemacht!': 'Bien joué !',
  'Nicht schlecht, da geht noch mehr.': 'Pas mal, tu peux faire encore mieux.',
  'Noch etwas üben, dann klappt es.': 'Encore un peu d’entraînement et ça ira.',
  'Ich habe im RailBase Bahn-Quiz (Level {lv}) {r} von {n} Fragen richtig, das sind {p} %. Schaffst du mehr?': 'J’ai répondu juste à {r} questions sur {n} au quiz ferroviaire RailBase (niveau {lv}), soit {p} %. Feras-tu mieux ?',
  'RailBase Bahn-Quiz': 'Quiz ferroviaire RailBase',

  // ---------- catégories et liste ----------
  'SBB Personenverkehr': 'CFF Voyageurs',
  'SBB Cargo': 'CFF Cargo',
  'SBB Infrastruktur': 'CFF Infrastructure',
  'Rangierfahrzeuge': 'Véhicules de manœuvre',
  'Dienst- und Spezialfahrzeuge': 'Véhicules de service et spéciaux',
  'Historische Fahrzeuge': 'Véhicules historiques',
  'Fernverkehr, Regionalverkehr und S-Bahn: Hochgeschwindigkeits- und Doppelstockzüge, Triebzüge und Lokomotiven.': 'Grandes lignes, trafic régional et RER : trains à grande vitesse et à deux niveaux, rames automotrices et locomotives.',
  'Lokomotiven für den Güterverkehr im Inland und über die Alpen, inklusive Mehrsystemloks für den Verkehr ins Ausland.': 'Locomotives pour le trafic marchandises en Suisse et à travers les Alpes, y compris des locomotives multisystèmes pour le trafic vers l’étranger.',
  'Fahrzeuge für Bau, Unterhalt und Logistik am Netz: Bauzuglokomotiven und Baudienstfahrzeuge.': 'Véhicules pour la construction, l’entretien et la logistique du réseau : locomotives de trains de travaux et véhicules de service.',
  'Lokomotiven und Traktoren für das Rangieren in Bahnhöfen, Abstellanlagen und Anschlussgleisen.': 'Locomotives et tracteurs pour les manœuvres dans les gares, les faisceaux de garage et les voies de raccordement.',
  'Lösch- und Rettungszüge, Schneeräumung, Messfahrzeuge, Krane und Fahrleitungsfahrzeuge.': 'Trains d’extinction et de sauvetage, déneigement, véhicules de mesure, grues et véhicules de ligne de contact.',
  'Klassiker der SBB, die heute nicht mehr im Alltag fahren. Viele sind bei SBB Historic oder in Museen erhalten.': 'Classiques des CFF qui ne circulent plus au quotidien. Beaucoup sont conservés par SBB Historic ou dans des musées.',
  'Lokomotiven und Traktoren': 'Locomotives et tracteurs',
  'Schotter- und Kippwagen': 'Wagons à ballast et basculants',
  'Schienentransport': 'Transport de rails',
  'Werkstatt- und Mannschaftswagen': 'Wagons-ateliers et wagons d’équipe',
  'Personenverkehr': 'Voyageurs',
  'Cargo': 'Cargo',
  'Infrastruktur': 'Infrastructure',
  'Spezialfahrzeuge': 'Véhicules spéciaux',
  'Historisch': 'Historiques',
  'Karte': 'Carte',
  'Zufälliges Fahrzeug': 'Véhicule au hasard',
  'Normalspur / Meterspur': 'Voie normale / voie métrique',
  'Impressum': 'Mentions légales',
  'Datenschutz': 'Protection des données',
  'Vergleich': 'Comparaison',
  'Illustration': 'Illustration',
  'Kategorie': 'Catégorie',
  'Fahrzeuge': 'Véhicules',
  '+{n} weitere': '+{n} autres',
  '{n} Fahrzeuge': '{n} véhicules',
  'Loknummer': 'Numéro de locomotive',
  'Kein Fahrzeug gefunden. Versuche eine Baureihe wie «Re 420».': 'Aucun véhicule trouvé. Essaie une série comme « Re 420 ».',
  'seit': 'depuis',
  'Gesehen': 'Vu',
  'Kein Fahrzeug passt zu «{q}».': 'Aucun véhicule ne correspond à « {q} ».',
  'In dieser Kategorie filtern': 'Filtrer dans cette catégorie',
  'Sortieren': 'Trier',
  'Reihenfolge im Katalog': 'Ordre du catalogue',
  'Name A–Z': 'Nom A–Z',
  'Inbetriebnahme': 'Mise en service',
  'Fehler melden': 'Signaler une erreur',
  'Start': 'Accueil',

  // ---------- page véhicule ----------
  'Vorläufige Daten · Katalog folgt': 'Données provisoires · fiche à venir',
  'Hab ich gesehen': 'Je l’ai vu',
  'Zum Vergleich': 'Comparer',
  'Im Vergleich': 'Dans la comparaison',
  'Vergleich ist voll (3)': 'Comparaison pleine (3)',
  'Teilen': 'Partager',
  'Bilder': 'Images',
  'Bildergalerie': 'Galerie d’images',
  'Technische Daten': 'Caractéristiques techniques',
  'Foto einsenden': 'Envoyer une photo',
  'Wo fährt er?': 'Où circule-t-il ?',
  'Karte der Schweiz mit den Einsatzstrecken': 'Carte de la Suisse avec les lignes d’utilisation',
  'Rot: Strecken und Gebiete laut den Angaben auf dieser Seite. Die Strecken folgen dem Bahnnetz; einzelne Züge können auch anders fahren. Kartendaten: BAV, swisstopo.': 'En rouge : lignes et régions selon les indications de cette page. Les lignes suivent le réseau ferroviaire ; certains trains peuvent aussi circuler ailleurs. Données cartographiques : OFT, swisstopo.',
  'Weitere Fahrzeuge': 'Autres véhicules',
  'Seitenansicht (Illustration)': 'Vue latérale (illustration)',
  'Foto Front': 'Photo de face',
  'Frontansicht': 'Vue de face',
  'Foto im Einsatz': 'Photo en service',
  'Im Einsatz': 'En service',
  'Foto Detail': 'Photo de détail',
  'Detail / Innenraum': 'Détail / intérieur',
  '{t} folgt': '{t} à venir',
  'folgt': 'à venir',
  'Noch kein Foto von {name}. Hast du eines?': 'Pas encore de photo pour {name}. En as-tu une ?',
  'Bild {i} von {n}': 'Image {i} sur {n}',
  '{t}, gross anzeigen': '{t}, afficher en grand',
  'Bild gross': 'Image en grand',
  'Quellen': 'Sources',
  'Vorheriges': 'Précédent',
  'Nächstes': 'Suivant',
  'Zurück zu': 'Retour à',
  'Text kopiert': 'Texte copié',
  'Link kopiert': 'Lien copié',
  'Kopieren nicht möglich': 'Copie impossible',
  'Fahrzeug des Tages': 'Véhicule du jour',
  '{n} von {total} gesehen': '{n} sur {total} vus',
  '{n} gesehen': '{n} vus',

  // ---------- comparaison ----------
  'Fahrzeuge vergleichen': 'Comparer des véhicules',
  'Bis zu drei Fahrzeuge nebeneinander. Füge sie hier oder auf der Fahrzeugseite mit «Zum Vergleich» hinzu. Die Auswahl bleibt in deinem Browser gespeichert.': 'Jusqu’à trois véhicules côte à côte. Ajoute-les ici ou sur la page du véhicule avec « Comparer ». La sélection reste enregistrée dans ton navigateur.',
  'Fahrzeug hinzufügen': 'Ajouter un véhicule',
  'Fahrzeug wählen …': 'Choisir un véhicule …',
  '{name} aus dem Vergleich entfernen': 'Retirer {name} de la comparaison',
  'Noch nichts ausgewählt. Wähle oben ein Fahrzeug oder tippe auf einer Fahrzeugseite auf «Zum Vergleich».': 'Rien de sélectionné pour l’instant. Choisis un véhicule ci-dessus ou touche « Comparer » sur la page d’un véhicule.',
  'Entfernen': 'Retirer',
  'Grün markiert: der höchste Wert in der Zeile. Angaben mit * sind ungefähr.': 'En vert : la valeur la plus élevée de la ligne. Les valeurs avec * sont approximatives.',
  'Vergleich leeren': 'Vider la comparaison',
  'Vergleichen': 'Comparer',
  'Länge im Massstab': 'Longueur à l’échelle',
  'Länge folgt': 'Longueur à venir',
  'Ein Strich = 10 m.': 'Un trait = 10 m.',
  'Ein Strich = 10 m, ungefähre Werte.': 'Un trait = 10 m, valeurs approximatives.',
  'Typ': 'Type',

  // ---------- pied de page ----------
  'Die Train Database für die Schweizer Bahn: Fahrzeuge sortiert nach Bereich, mit Daten und Bildern.': 'La Train Database du rail suisse : les véhicules classés par domaine, avec données et images.',
  '© 2026 HCKD · Stand der Daten: Oktober 2026 ·': '© 2026 HCKD · État des données : octobre 2026 ·',
  'Fotos einsenden': 'Envoyer des photos',

  // ---------- dialogues ----------
  'Schliessen': 'Fermer',
  'Fehler melden oder Anfrage': 'Signaler une erreur ou poser une question',
  'Was stimmt nicht, oder was möchtest du wissen?': 'Qu’est-ce qui ne va pas, ou que veux-tu savoir ?',
  'Betrifft:': 'Concerne :',
  'Art': 'Type',
  'Falsche Angabe': 'Indication erronée',
  'Fehlende Angabe': 'Indication manquante',
  'Bild falsch oder fehlt': 'Image erronée ou manquante',
  'Tippfehler': 'Faute de frappe',
  'Fahrzeug fehlt': 'Véhicule manquant',
  'Frage oder Anfrage': 'Question ou demande',
  'Anderes': 'Autre',
  'Beschreibung': 'Description',
  'z. B. Die Höchstgeschwindigkeit ist 160 km/h, nicht 140 km/h.': 'p. ex. La vitesse maximale est de 160 km/h, pas de 140 km/h.',
  'Kontakt für Rückfragen': 'Contact pour les questions',
  'freiwillig': 'facultatif',
  'Name oder E-Mail': 'Nom ou e-mail',
  'Nicht ausfüllen': 'Ne pas remplir',
  'Meldung senden': 'Envoyer le signalement',
  'RailBase allgemein': 'RailBase en général',
  'Bitte beschreibe kurz, was nicht stimmt.': 'Décris brièvement ce qui ne va pas.',
  'Bitte höchstens einen Link angeben.': 'Indique au maximum un lien.',
  'Du hast in kurzer Zeit schon mehrere Meldungen geschickt. Bitte warte ein paar Minuten. Danke!': 'Tu as déjà envoyé plusieurs signalements en peu de temps. Attends quelques minutes, s’il te plaît. Merci !',
  'Wird gesendet …': 'Envoi en cours …',
  'Gesendet': 'Envoyé',
  'Danke! Deine Meldung ist angekommen und wird geprüft.': 'Merci ! Ton signalement est bien arrivé et sera vérifié.',
  'Senden hat nicht geklappt. Bitte versuche es in einem Moment nochmals. Dein Text bleibt erhalten.': 'L’envoi n’a pas fonctionné. Réessaie dans un instant. Ton texte est conservé.',
  'Hast du ein Foto von diesem Zug?': 'As-tu une photo de ce train ?',
  'Lade deine Fotos zuerst bei einem Dienst wie SwissTransfer, WeTransfer, Google Drive oder Dropbox hoch und füge hier den Link ein. Wir prüfen die Fotos und stellen sie mit deinem Namen auf die Seite.': 'Télécharge d’abord tes photos sur un service comme SwissTransfer, WeTransfer, Google Drive ou Dropbox, puis colle le lien ici. Nous vérifions les photos et les publions avec ton nom.',
  'Link zu den Fotos': 'Lien vers les photos',
  'Name für die Bildunterschrift': 'Nom pour la légende',
  'E-Mail für Rückfragen': 'E-mail pour les questions',
  'Wo und wann aufgenommen?': 'Où et quand la photo a-t-elle été prise ?',
  'Ich habe die Fotos selbst gemacht und erlaube RailBase, sie mit meinem Namen auf der Website zu zeigen.': 'J’ai pris ces photos moi-même et j’autorise RailBase à les montrer sur le site avec mon nom.',
  'Fotos senden': 'Envoyer les photos',
  'beliebiges Fahrzeug (bitte unten angeben)': 'n’importe quel véhicule (à préciser ci-dessous)',
  'Bitte füge den Link zu deinen Fotos ein (beginnt mit https://).': 'Colle le lien vers tes photos (il commence par https://).',
  'Bitte gib den Namen an, der unter dem Foto stehen soll.': 'Indique le nom qui doit figurer sous la photo.',
  'Bitte gib eine E-Mail-Adresse für Rückfragen an.': 'Indique une adresse e-mail pour les questions.',
  'Bitte bestätige, dass du die Fotos selbst gemacht hast und sie gezeigt werden dürfen.': 'Confirme que tu as pris les photos toi-même et qu’elles peuvent être montrées.',
  'Bitte im Textfeld höchstens einen Link angeben.': 'Indique au maximum un lien dans le champ de texte.',
  'Du hast in kurzer Zeit schon mehrere Nachrichten geschickt. Bitte warte ein paar Minuten. Danke!': 'Tu as déjà envoyé plusieurs messages en peu de temps. Attends quelques minutes, s’il te plaît. Merci !',
  'Danke! Wir schauen uns deine Fotos an und melden uns bei Fragen.': 'Merci ! Nous regardons tes photos et te contactons en cas de question.',
  'Senden hat nicht geklappt. Bitte versuche es in einem Moment nochmals.': 'L’envoi n’a pas fonctionné. Réessaie dans un instant.',
  'Unterstützen': 'Soutenir',
  'RailBase unterstützen': 'Soutenir RailBase',
  'Die Datenbank ist kostenlos und ohne Werbung. Eine kleine Spende hilft beim Ausbau: mehr Fahrzeuge, mehr Bilder, mehr Strecken.': 'La base de données est gratuite et sans publicité. Un petit don aide à la développer : plus de véhicules, plus d’images, plus de lignes.',
  'Betrag in CHF': 'Montant en CHF',
  'Empfänger': 'Bénéficiaire',
  'Mitteilung': 'Communication',
  'wird ergänzt': 'sera complété',
  'Kopieren': 'Copier',
  'Kopiert': 'Copié',
  'Bitte gib die Mitteilung bei der Zahlung an. Vielen Dank!': 'Indique la communication lors du paiement. Merci beaucoup !',

  // ---------- affichage clair / sombre ----------
  'automatisch': 'automatique',
  'hell': 'clair',
  'dunkel': 'sombre',
  'Darstellung: {jetzt} (wechseln zu {neu})': 'Affichage : {jetzt} (passer en {neu})',

  // ---------- régions sur la carte « Où circule-t-il ? » ----------
  'S-Bahn Zürich': 'RER zurichois',
  'Aargau': 'Argovie',
  'Solothurn': 'Soleure',
  'Luzern': 'Lucerne',
  'Basel': 'Bâle',
  'Neuenburg': 'Neuchâtel',
  'Freiburg': 'Fribourg',
  'Waadt': 'Vaud',

  // ---------- diaporama ----------
  'Regionalzug über einem Bergsee': 'Train régional au-dessus d’un lac de montagne',
  'FV-Dosto (RABe 502) in den Bergen': 'FV-Dosto (RABe 502) dans les montagnes',
  'Re 460 in einer Bahnhofshalle': 'Re 460 sous une halle de gare',
  'RABe 503 «Astoro» am Perron': 'RABe 503 « Astoro » à quai',
  'BLS-Triebzüge in Burgdorf': 'Rames automotrices BLS à Berthoud',
  'Regionalzug im Schnee': 'Train régional dans la neige',
  'Re 420 von SBB Cargo mit Güterzug': 'Re 420 de CFF Cargo avec un train de marchandises',
  'BLS Re 465 mit Autozug': 'Re 465 du BLS avec un train de transport d’autos',
  'Re 460 mit IC2000 bei der Einfahrt': 'Re 460 avec IC2000 à l’entrée en gare',
  'Rhätische Bahn in Tirano': 'Chemin de fer rhétique à Tirano',
  'Bahnhofsuhr und SBB-Logo': 'Horloge de gare et logo CFF',
  'Re 620 mit Kesselwagenzug': 'Re 620 avec un train de wagons-citernes',
  'Triebzug über die Weichen': 'Rame automotrice sur les aiguillages',
  'Postwagen in der Bahnhofshalle': 'Wagon postal sous la halle de gare'
});

/* ---- 02-texte.js ---- */
/* Français – ABC du rail, mentions légales, protection des données, noms des caractéristiques */
uebDict({
  // ---------- ABC du rail ----------
  'Bezeichnung entschlüsseln': 'Déchiffrer une désignation',
  'Tippe eine Bezeichnung ein oder wähle ein Beispiel.': 'Tape une désignation ou choisis un exemple.',
  'So liest man eine Bezeichnung': 'Comment lire une désignation',
  'Beispiel Re 4/4 II': 'Exemple Re 4/4 II',
  'schnelle Lok': 'locomotive rapide',
  'elektrisch': 'électrique',
  '4 von 4 Achsen angetrieben': '4 essieux moteurs sur 4',
  '2. Serie': '2e série',
  'Zuerst kommen Grossbuchstaben für die Art des Fahrzeugs, dann Kleinbuchstaben für den Antrieb. Danach folgen bei alten Bezeichnungen die Achsen und die Serie, bei neuen eine dreistellige Baureihennummer.': 'D’abord viennent des majuscules pour le type de véhicule, puis des minuscules pour l’entraînement. Ensuite suivent, dans les anciennes désignations, les essieux et la série ; dans les nouvelles, un numéro de série à trois chiffres.',
  'Grossbuchstaben bei Lokomotiven': 'Majuscules des locomotives',
  'Streckenlok mit höherer Kurvengeschwindigkeit, mindestens 110 km/h (z. B. Re 460)': 'locomotive de ligne à vitesse en courbe élevée, au moins 110 km/h (p. ex. Re 460)',
  'Normalspur-Streckenlok, schneller als 80 km/h (z. B. Ae 6/6)': 'locomotive de ligne à voie normale, plus de 80 km/h (p. ex. Ae 6/6)',
  'langsamere Streckenloks: B 70–80 km/h, C 60–65 km/h, D 45–55 km/h': 'locomotives de ligne plus lentes : B 70–80 km/h, C 60–65 km/h, D 45–55 km/h',
  'Rangierlok (z. B. Ee 922)': 'locomotive de manœuvre (p. ex. Ee 922)',
  'Lok für Schmalspur, z. B. Meterspur (z. B. Ge 4/4 III der RhB)': 'locomotive à voie étroite, p. ex. voie métrique (p. ex. Ge 4/4 III du RhB)',
  'Lok für Zahnradbahnen': 'locomotive pour chemins de fer à crémaillère',
  'Traktor, ein kleines Rangierfahrzeug (z. B. Tm 232)': 'tracteur, un petit véhicule de manœuvre (p. ex. Tm 232)',
  'Grossbuchstaben bei Triebzügen und Triebwagen': 'Majuscules des rames et automotrices',
  'Bei Fahrzeugen mit Fahrgastraum zeigen die Buchstaben, was drin ist.': 'Pour les véhicules avec compartiment voyageurs, les lettres indiquent ce qu’il y a à bord.',
  'ganz vorne: höhere Kurvengeschwindigkeit, mindestens 110 km/h': 'tout devant : vitesse en courbe élevée, au moins 110 km/h',
  'Plätze in der 1. Klasse': 'places en 1re classe',
  'Plätze in der 2. Klasse': 'places en 2e classe',
  'Gepäckabteil': 'compartiment à bagages',
  'Postabteil': 'compartiment postal',
  'Dienstfahrzeug': 'véhicule de service',
  'Beispiel: <b>RABDe 500</b> (ICN) ist ein schneller elektrischer Zug mit 1. Klasse, 2. Klasse und Gepäckabteil.': 'Exemple : le <b>RABDe 500</b> (ICN) est un train électrique rapide avec 1re classe, 2e classe et compartiment à bagages.',
  'Kleinbuchstaben: der Antrieb': 'Minuscules : l’entraînement',
  'elektrisch, Strom aus der Fahrleitung': 'électrique, courant pris à la ligne de contact',
  'Verbrennungsmotor, meist Diesel': 'moteur à combustion, le plus souvent diesel',
  'Batterie (Akku)': 'batterie (accumulateur)',
  'Zahnradantrieb': 'entraînement à crémaillère',
  'ohne': 'aucune',
  'Dampf (z. B. A 3/5)': 'vapeur (p. ex. A 3/5)',
  'Mehrere Kleinbuchstaben sind möglich: <b>Eem 923</b> fährt elektrisch und mit Diesel, <b>Aem 940</b> ebenso.': 'Plusieurs minuscules sont possibles : l’<b>Eem 923</b> roule à l’électricité et au diesel, l’<b>Aem 940</b> aussi.',
  'Die Zahlen': 'Les chiffres',
  '<b>Alte Bezeichnung, z. B. Re 4/4 II:</b> Die erste Zahl sind die angetriebenen Achsen, die zweite alle Achsen. «4/4» heisst also: vier Achsen, alle angetrieben. Die römische Zahl zählt die Serien mit gleicher Bezeichnung.': '<b>Ancienne désignation, p. ex. Re 4/4 II :</b> le premier chiffre indique les essieux moteurs, le second tous les essieux. « 4/4 » signifie donc : quatre essieux, tous moteurs. Le chiffre romain compte les séries portant la même désignation.',
  '<b>Neue Bezeichnung seit 1989, z. B. Re 460:</b> Statt Achsen und Serie gibt es eine dreistellige Baureihe. Bei vielen Streckenloks steckt die Achszahl noch drin: aus der Re 4/4 II wurde die Re 420, aus der Re 6/6 die Re 620. Triebzüge haben Nummern ab 500, z. B. RABe 501 (Giruno) oder RABe 523 (FLIRT).': '<b>Nouvelle désignation depuis 1989, p. ex. Re 460 :</b> au lieu des essieux et de la série, il y a une série à trois chiffres. Pour beaucoup de locomotives de ligne, le nombre d’essieux y figure encore : la Re 4/4 II est devenue la Re 420, la Re 6/6 la Re 620. Les rames automotrices ont des numéros à partir de 500, p. ex. RABe 501 (Giruno) ou RABe 523 (FLIRT).',
  'Die ganze Fahrzeugnummer': 'Le numéro complet du véhicule',
  'Beispiel 91 85 4 460 058-0': 'Exemple 91 85 4 460 058-0',
  'Elektrolok': 'loco électrique',
  'Schweiz': 'Suisse',
  'Kennziffer': 'code',
  'Baureihe': 'Série',
  'Lok Nr. 58': 'loco n° 58',
  'Prüfziffer': 'chiffre de contrôle',
  'Diese zwölfstellige Nummer steht auf jedem Fahrzeug. Die Prüfziffer am Schluss wird aus den anderen Ziffern berechnet und zeigt Tippfehler an. Du kannst sie auch in der Suche oben eintippen.': 'Ce numéro à douze chiffres figure sur chaque véhicule. Le chiffre de contrôle à la fin est calculé à partir des autres chiffres et révèle les fautes de frappe. Tu peux aussi le taper dans la recherche en haut.',
  'Achsfolge: Bo′Bo′ und Co′Co′': 'Disposition des essieux : Bo′Bo′ et Co′Co′',
  'zwei bzw. drei angetriebene Achsen hintereinander': 'deux ou trois essieux moteurs l’un derrière l’autre',
  'jede Achse hat einen eigenen Motor': 'chaque essieu a son propre moteur',
  'die Achsen sitzen in einem drehbaren Drehgestell': 'les essieux sont montés dans un bogie pivotant',
  '<b>Bo′Bo′</b> (Re 460, Re 420) heisst: zwei Drehgestelle mit je zwei einzeln angetriebenen Achsen. <b>Bo′Bo′Bo′</b> (Re 620) hat drei solche Drehgestelle.': '<b>Bo′Bo′</b> (Re 460, Re 420) signifie : deux bogies avec chacun deux essieux entraînés séparément. La <b>Bo′Bo′Bo′</b> (Re 620) a trois bogies de ce type.',
  'Zugarten auf der Abfahrtstafel': 'Catégories de trains sur le tableau des départs',
  'InterCity: schneller Fernverkehr zwischen grossen Städten': 'InterCity : grandes lignes rapides entre les grandes villes',
  'InterRegio: Fernverkehr mit etwas mehr Halten': 'InterRegio : grandes lignes avec un peu plus d’arrêts',
  'RegioExpress: schneller Regionalzug, hält nicht überall': 'RegioExpress : train régional rapide, ne s’arrête pas partout',
  'Regio: Regionalzug mit Halt an allen Stationen': 'Regio : train régional s’arrêtant dans toutes les gares',
  'S-Bahn: dichter Takt in und um Städte, z. B. S30': 'RER (S-Bahn) : cadence serrée dans et autour des villes, p. ex. S30',
  'internationale Fernzüge': 'trains internationaux grandes lignes',
  'Nightjet: Nachtzug': 'Nightjet : train de nuit',
  'Spurweite und Strom': 'Écartement et courant',
  '<b>Normalspur</b> misst 1435 mm, <b>Meterspur</b> 1000 mm (z. B. Rhätische Bahn). Einige Zahnradbahnen wie die Pilatusbahn fahren auf 800 mm.': 'La <b>voie normale</b> mesure 1435 mm, la <b>voie métrique</b> 1000 mm (p. ex. Chemin de fer rhétique). Certains chemins de fer à crémaillère comme le Pilatus roulent sur 800 mm.',
  'Das SBB-Netz fährt mit <b>15 kV und 16,7 Hz</b> Wechselstrom, wie Deutschland und Österreich. Italien nutzt <b>3 kV Gleichstrom</b>, viele neue Strecken in Europa <b>25 kV, 50 Hz</b>. Loks für mehrere Länder heissen deshalb Mehrsystemloks.': 'Le réseau CFF est alimenté en courant alternatif <b>15 kV et 16,7 Hz</b>, comme l’Allemagne et l’Autriche. L’Italie utilise du <b>courant continu 3 kV</b>, beaucoup de nouvelles lignes en Europe du <b>25 kV, 50 Hz</b>. Les locomotives pour plusieurs pays s’appellent donc locomotives multisystèmes.',
  'Quelle für das Bezeichnungsschema: Schweizer Typenbezeichnung für Triebfahrzeuge (Bundesamt für Verkehr, SBB), zusammengefasst in der Wikipedia. Teste dein Wissen im <a href="#quiz">Quiz</a>.': 'Source du schéma de désignation : désignation suisse des véhicules moteurs (Office fédéral des transports, CFF), résumée dans Wikipédia. Teste tes connaissances dans le <a href="#quiz">quiz</a>.',
  // décodeur
  'Streckenlok mit höherer Kurvengeschwindigkeit, mindestens 110 km/h': 'locomotive de ligne à vitesse en courbe élevée, au moins 110 km/h',
  'Normalspur-Streckenlok, schneller als 80 km/h': 'locomotive de ligne à voie normale, plus de 80 km/h',
  'Normalspur-Streckenlok, 70–80 km/h': 'locomotive de ligne à voie normale, 70–80 km/h',
  'Normalspur-Streckenlok, 60–65 km/h': 'locomotive de ligne à voie normale, 60–65 km/h',
  'Normalspur-Streckenlok, 45–55 km/h': 'locomotive de ligne à voie normale, 45–55 km/h',
  'Rangierlok': 'locomotive de manœuvre',
  'Lok für Schmalspur (z. B. Meterspur)': 'locomotive à voie étroite (p. ex. voie métrique)',
  'Traktor (kleines Rangierfahrzeug)': 'tracteur (petit véhicule de manœuvre)',
  '1. Klasse': '1re classe',
  '2. Klasse': '2e classe',
  '3. Klasse (bis 1956)': '3e classe (jusqu’en 1956)',
  'Spezialabteil': 'compartiment spécial',
  'Verbrennungsmotor (meist Diesel)': 'moteur à combustion (le plus souvent diesel)',
  'funkferngesteuert': 'radiocommandé',
  'Triebzug oder Triebwagen mit höherer Kurvengeschwindigkeit, mindestens 110 km/h': 'rame ou automotrice à vitesse en courbe élevée, au moins 110 km/h',
  'Triebwagen oder Triebzug mit Fahrgastraum': 'automotrice ou rame avec compartiment voyageurs',
  'kein Kleinbuchstabe: Dampf': 'pas de minuscule : vapeur',
  '{n} Achsen, alle angetrieben': '{n} essieux, tous moteurs',
  '{a} von {n} Achsen angetrieben': '{a} essieux moteurs sur {n}',
  '{n}. Serie mit dieser Bezeichnung': '{n}e série avec cette désignation',
  'Serie': 'série',
  'Baureihe im neuen System (seit 1989)': 'série dans le nouveau système (depuis 1989)',
  '{name} ansehen': 'voir {name}',
  'Das kann ich nicht lesen. Achte auf Gross- und Kleinschreibung, z. B. «Re 4/4 II» oder «RABe 523».': 'Je ne peux pas lire cela. Fais attention aux majuscules et minuscules, p. ex. « Re 4/4 II » ou « RABe 523 ».',

  // ---------- mentions légales ----------
  'Verantwortlich für diese Website': 'Responsable de ce site',
  'Kontakt: über das Formular <button class="link-btn" type="button" data-report="allg" aria-haspopup="dialog">Fehler melden</button>. Nachrichten kommen direkt bei uns an.': 'Contact : via le formulaire <button class="link-btn" type="button" data-report="allg" aria-haspopup="dialog">Signaler une erreur</button>. Les messages nous parviennent directement.',
  'Unabhängiges Projekt': 'Projet indépendant',
  'RailBase by HCKD ist ein privates, nicht kommerzielles Projekt von Bahnfans. Es steht in keiner Verbindung zu den Schweizerischen Bundesbahnen SBB, zu SBB Cargo oder zu anderen Bahnunternehmen. Namen und Marken gehören ihren Inhaberinnen und Inhabern und werden nur zur Beschreibung der Fahrzeuge genannt.': 'RailBase by HCKD est un projet privé et non commercial de passionnés du rail. Il n’a aucun lien avec les Chemins de fer fédéraux suisses CFF, avec CFF Cargo ou avec d’autres entreprises ferroviaires. Les noms et marques appartiennent à leurs titulaires et ne sont cités que pour décrire les véhicules.',
  'Haftung': 'Responsabilité',
  'Alle Angaben sind sorgfältig zusammengetragen, aber ohne Gewähr. Werte, die als vorläufig oder mit * markiert sind, können abweichen. Wenn dir ein Fehler auffällt, melde ihn bitte über «Fehler melden».': 'Toutes les indications ont été rassemblées avec soin, mais sans garantie. Les valeurs marquées comme provisoires ou avec * peuvent différer. Si tu remarques une erreur, signale-la via « Signaler une erreur ».',
  'Für Inhalte externer Websites, auf die wir verlinken, sind deren Betreiber verantwortlich.': 'Les exploitants des sites externes vers lesquels nous renvoyons sont responsables de leur contenu.',
  'Bildnachweis und Rechte': 'Crédits photo et droits',
  'Eigene und zugeschickte Fotos auf den Fahrzeugseiten: mit Erlaubnis der Fotografinnen und Fotografen verwendet. Weiterverwendung nur mit deren Zustimmung.': 'Photos propres et envoyées sur les pages des véhicules : utilisées avec l’autorisation des photographes. Toute réutilisation nécessite leur accord.',
  'Fotos von Wikimedia Commons: unter freien Lizenzen (CC0, CC BY, CC BY-SA), für die Website verkleinert. Fotograf, Lizenz und Link stehen unter jedem Bild und in der Liste unten. Für diese Fotos gilt die jeweilige Lizenz, nicht das Urheberrecht von RailBase.': 'Photos de Wikimedia Commons : sous licences libres (CC0, CC BY, CC BY-SA), réduites pour le site. Le photographe, la licence et le lien figurent sous chaque image et dans la liste ci-dessous. Ces photos sont soumises à leur licence respective, et non au droit d’auteur de RailBase.',
  'Illustrationen, Streckenmodell und Gestaltung: HCKD.': 'Illustrations, modèle de ligne et conception : HCKD.',
  'Kartendaten: Bundesamt für Verkehr (BAV), Datensatz Schienennetz. Landesgrenze: swisstopo.': 'Données cartographiques : Office fédéral des transports (OFT), jeu de données du réseau ferré. Frontière nationale : swisstopo.',
  'Schrift: Source Sans 3 von Adobe, SIL Open Font License 1.1.': 'Police : Source Sans 3 d’Adobe, SIL Open Font License 1.1.',
  'Fotos von Wikimedia Commons': 'Photos de Wikimedia Commons',
  'Bildnachweis der Fotos': 'Crédits des photos',
  'Stand: Oktober 2026': 'État : octobre 2026',

  // ---------- protection des données ----------
  'Datenschutzerklärung': 'Déclaration de protection des données',
  'Kurz gesagt: Wir verwenden keine Cookies und keine Werbung und verfolgen dich nicht über andere Websites. Wir zählen nur anonym, welche Seiten wie oft aufgerufen werden.': 'En bref : nous n’utilisons ni cookies ni publicité et ne te suivons pas sur d’autres sites. Nous comptons seulement, de manière anonyme, quelles pages sont consultées et combien de fois.',
  'Verantwortlich': 'Responsable',
  'Kevin D., 1700 Fribourg, Schweiz. Kontakt über das Formular <button class="link-btn" type="button" data-report="allg" aria-haspopup="dialog">Fehler melden</button>. Es gilt das Schweizer Datenschutzgesetz (DSG).': 'Kevin D., 1700 Fribourg, Suisse. Contact via le formulaire <button class="link-btn" type="button" data-report="allg" aria-haspopup="dialog">Signaler une erreur</button>. La loi suisse sur la protection des données (LPD) s’applique.',
  'Hosting': 'Hébergement',
  'Die Website liegt bei GitHub Pages (GitHub Inc., USA). Beim Aufruf verarbeitet GitHub technisch nötige Daten wie IP-Adresse, Zeitpunkt und aufgerufene Seite, um die Seite auszuliefern und gegen Missbrauch zu schützen. Wir selbst sehen diese Daten nicht. Details stehen in der Datenschutzerklärung von GitHub.': 'Le site est hébergé par GitHub Pages (GitHub Inc., États-Unis). Lors de la consultation, GitHub traite les données techniquement nécessaires comme l’adresse IP, l’heure et la page consultée, afin de fournir la page et de la protéger contre les abus. Nous ne voyons pas ces données nous-mêmes. Les détails figurent dans la déclaration de protection des données de GitHub.',
  'Schrift und Inhalte': 'Police et contenus',
  'Schrift, Bilder und Kartendaten liegen auf demselben Server wie die Website. Beim Aufruf werden keine Daten an Google Fonts geschickt; ausser an GoatCounter (siehe Besucherzählung) und an den Fahrplandienst der Abfahrtstafel gehen keine Daten an Dritte.': 'La police, les images et les données cartographiques se trouvent sur le même serveur que le site. Aucune donnée n’est envoyée à Google Fonts ; hormis GoatCounter (voir comptage des visites) et le service d’horaire du tableau des départs, aucune donnée n’est transmise à des tiers.',
  'Besucherzählung': 'Comptage des visites',
  'Um zu sehen, welche Seiten gefragt sind, nutzen wir GoatCounter (goatcounter.com). GoatCounter setzt keine Cookies und speichert keine IP-Adressen. Erfasst werden die aufgerufene Seite, die Seite, von der du kommst, Browser und Betriebssystem, Bildschirmgrösse und das Land. Daraus lässt sich nicht ablesen, wer du bist. Die Zahlen sehen nur wir. Die Daten können ausserhalb der Schweiz verarbeitet werden.': 'Pour savoir quelles pages intéressent, nous utilisons GoatCounter (goatcounter.com). GoatCounter ne dépose pas de cookies et n’enregistre pas d’adresses IP. Sont enregistrés la page consultée, la page d’où tu viens, le navigateur et le système d’exploitation, la taille de l’écran et le pays. Il est impossible d’en déduire qui tu es. Nous sommes les seuls à voir les chiffres. Les données peuvent être traitées hors de Suisse.',
  'Speicher im Browser': 'Stockage dans le navigateur',
  'Dein Browser merkt sich im lokalen Speicher (localStorage), welche Fahrzeuge du für den Vergleich ausgewählt und im Sammelalbum als gesehen markiert hast, sowie dein bestes Quiz-Ergebnis pro Level, deine Sprache und ob du die Seite hell oder dunkel möchtest. Zum Schutz vor Spam merkt er sich ausserdem für 10 Minuten, wann du eine Meldung geschickt hast. Diese Angaben verlassen dein Gerät nicht. Du kannst sie löschen, indem du die Websitedaten im Browser löschst.': 'Ton navigateur enregistre dans son stockage local (localStorage) les véhicules que tu as choisis pour la comparaison et marqués comme vus dans l’album, ton meilleur résultat au quiz par niveau, ta langue et si tu préfères le site clair ou sombre. Pour se protéger du spam, il retient aussi pendant 10 minutes quand tu as envoyé un signalement. Ces informations ne quittent pas ton appareil. Tu peux les supprimer en effaçant les données du site dans ton navigateur.',
  'Abfahrtstafel': 'Tableau des départs',
  'Für die Abfahrtstafel fragt dein Browser den Fahrplan direkt bei transport.opendata.ch (Opendata.ch) ab. Dabei werden der gesuchte Bahnhof und, wie bei jedem Seitenaufruf, deine IP-Adresse übermittelt. Die Tafel lädt nur, solange sie auf dem Bildschirm sichtbar ist. Den zuletzt gewählten Bahnhof merkt sich dein Browser im lokalen Speicher.': 'Pour le tableau des départs, ton navigateur interroge directement l’horaire chez transport.opendata.ch (Opendata.ch). La gare recherchée et, comme pour toute consultation, ton adresse IP sont alors transmises. Le tableau ne se charge que tant qu’il est visible à l’écran. Ton navigateur retient dans son stockage local la dernière gare choisie.',
  'Der Knopf «Teilen» öffnet das Teilen-Menü deines Geräts oder kopiert den Link. Was du danach damit machst, bestimmst du selbst; wir erfahren davon nichts.': 'Le bouton « Partager » ouvre le menu de partage de ton appareil ou copie le lien. Ce que tu en fais ensuite, c’est toi qui décides ; nous n’en savons rien.',
  'Sendest du eine Meldung, übermitteln wir deinen Text, die betroffene Seite und, falls du sie angibst, deinen Namen und deine E-Mail-Adresse über den Dienst Web3Forms (web3forms.com) an unser Postfach. Dabei können Daten auch ausserhalb der Schweiz, zum Beispiel in den USA, verarbeitet werden. Wir nutzen die Angaben nur, um die Meldung zu bearbeiten und dir allenfalls zu antworten, und löschen sie, wenn sie nicht mehr gebraucht werden.': 'Si tu envoies un signalement, nous transmettons ton texte, la page concernée et, si tu les indiques, ton nom et ton adresse e-mail à notre boîte via le service Web3Forms (web3forms.com). Des données peuvent alors aussi être traitées hors de Suisse, par exemple aux États-Unis. Nous utilisons ces informations uniquement pour traiter le signalement et te répondre le cas échéant, et les supprimons dès qu’elles ne sont plus nécessaires.',
  'Wer uns Fotos anbietet, schickt über dasselbe Formular wie bei «Fehler melden» (Web3Forms) einen Link zu den Fotos, den Namen für die Bildunterschrift, eine E-Mail-Adresse für Rückfragen und auf Wunsch Ort und Datum. Die Fotos selbst liegen beim gewählten Dienst (z. B. SwissTransfer); dort gelten dessen Bedingungen. Wir nutzen die Angaben nur, um die Fotos zu prüfen, nachzufragen und den Namen beim Foto zu nennen.': 'Qui nous propose des photos envoie, via le même formulaire que pour « Signaler une erreur » (Web3Forms), un lien vers les photos, le nom pour la légende, une adresse e-mail pour les questions et, si souhaité, le lieu et la date. Les photos elles-mêmes restent sur le service choisi (p. ex. SwissTransfer), dont les conditions s’appliquent. Nous utilisons ces informations uniquement pour vérifier les photos, poser des questions et citer le nom sous la photo.',
  'Spenden laufen per TWINT oder Banküberweisung direkt über deine App oder deine Bank. Die Website verarbeitet dabei keine Zahlungsdaten.': 'Les dons passent par TWINT ou par virement bancaire, directement via ton application ou ta banque. Le site ne traite aucune donnée de paiement.',
  'Externe Links': 'Liens externes',
  'Links zu anderen Websites, etwa zur SBB-Netzkarte, öffnen sich in einem neuen Tab. Dort gilt die Datenschutzerklärung des jeweiligen Anbieters.': 'Les liens vers d’autres sites, comme la carte du réseau CFF, s’ouvrent dans un nouvel onglet. La déclaration de protection des données du fournisseur concerné s’y applique.',
  'Deine Rechte': 'Tes droits',
  'Du kannst Auskunft über deine Daten verlangen und sie berichtigen oder löschen lassen. Schreib uns dafür über das Formular.': 'Tu peux demander des renseignements sur tes données et les faire rectifier ou supprimer. Écris-nous pour cela via le formulaire.',

  // ---------- noms des caractéristiques techniques ----------
  'Hersteller': 'Constructeur',
  'Zugbildung': 'Composition',
  'Stromsystem': 'Système électrique',
  'Höchstgeschwindigkeit': 'Vitesse maximale',
  'Länge': 'Longueur',
  'Gewicht': 'Poids',
  'Leistung': 'Puissance',
  'Anfahrzugkraft': 'Effort de traction au démarrage',
  'Sitzplätze': 'Places assises',
  'Restaurant': 'Restaurant',
  'Niederflureinstieg': 'Accès à plancher bas',
  'Anzahl': 'Nombre',
  'In Betrieb seit': 'En service depuis',
  'Fahrzeugnummern': 'Numéros des véhicules',
  'Neigetechnik': 'Pendulation',
  'Antrieb': 'Entraînement',
  'Bauart': 'Type de construction',
  'Einsatz': 'Utilisation',
  'Beschaffungszeit': 'Période d’acquisition',
  'Fahrzeugfamilie': 'Famille de véhicules',
  'Grundtyp': 'Type de base',
  'Einstieg': 'Accès',
  'Erste Region': 'Première région',
  'Fahrzeugart': 'Type de véhicule',
  'Niederflur': 'Plancher bas',
  'Status': 'Statut',
  'Achsanordnung': 'Disposition des essieux',
  'Achsfolge': 'Disposition des essieux',
  'Plattform': 'Plateforme',
  'Nummern': 'Numéros',
  'Fahrzeugtyp': 'Type de véhicule',
  'Breite': 'Largeur',
  'Wagenübergang': 'Intercirculation',
  'Steuerwagen': 'Voiture-pilote',
  'Baureihen': 'Séries',
  'Elektrische Bremse': 'Frein électrique',
  'Zugsicherung': 'Sécurité des trains',
  'Eigentümer': 'Propriétaire',
  'Tankinhalt': 'Capacité du réservoir',
  'Mehrfachtraktion': 'Traction multiple',
  'Rangiergang': 'Rapport de manœuvre',
  'Streckengang': 'Rapport de ligne',
  'Zuladung': 'Charge utile',
  'Arbeitsmodus': 'Mode travail',
  'Motor': 'Moteur',
  'Umbau': 'Transformation',
  'Ursprungsbaureihe': 'Série d’origine',
  'Steuerung': 'Commande',
  'Zugbeeinflussung': 'Contrôle de la marche des trains',
  'Ladeplattform': 'Plateau de chargement',
  'Ladekran': 'Grue de chargement',
  'Fahrtyp': 'Type de marche',
  'Achsen': 'Essieux',
  'Nutzlast': 'Charge utile',
  'Behältervolumen': 'Volume des bennes',
  'Entladung': 'Déchargement',
  'Arbeitsenergie': 'Énergie de travail',
  'Eigener Fahrantrieb': 'Propulsion propre',
  'UIC-Bezeichnung': 'Désignation UIC',
  'Volumen': 'Volume',
  'Förderband': 'Tapis convoyeur',
  'Abdeckung': 'Couverture',
  'Behälter': 'Bennes',
  'Ausrüstung': 'Équipement',
  'Ausführung': 'Version',
  'Arbeitsantrieb': 'Entraînement de travail',
  'Bedienung': 'Commande',
  'Bezeichnung': 'Désignation',
  'Datenstand': 'État des données',
  'Formation': 'Formation',
  'Transportwagen': 'Wagons de transport',
  'Schienenlänge': 'Longueur des rails',
  'Kapazität': 'Capacité',
  'Transport': 'Transport',
  'Krane': 'Grues',
  'Energie': 'Énergie',
  'Zugänge': 'Accès',
  'Sicherheitsregel': 'Règle de sécurité',
  'Fahrzeugrolle': 'Rôle du véhicule',
  'Einzelfahrdaten': 'Données du véhicule seul',
  'Fahrtypen': 'Types de marche',
  'Projekt': 'Projet',
  'Langname': 'Nom complet',
  'Bestand': 'Effectif',
  'Vorgänger': 'Prédécesseur',
  'Unterserie ex Tm III': 'Sous-série ex-Tm III',
  'Unterserie ex Tm IV': 'Sous-série ex-Tm IV',
  'Nachfolger bei SBB Infrastruktur': 'Successeur chez CFF Infrastructure',
  'Basisfahrzeug': 'Véhicule de base',
  'Ausführungen': 'Versions',
  'Wasser': 'Eau',
  'Pumpenleistung': 'Débit de la pompe',
  'Rettungskapazität': 'Capacité de sauvetage',
  'Schleppleistung': 'Capacité de remorquage',
  'Autonomer Betrieb': 'Fonctionnement autonome',
  'Tanklöschwagen': 'Wagon-citerne d’extinction',
  'Gerätefahrzeug': 'Véhicule d’équipement',
  'Rettungsfahrzeuge': 'Véhicules de sauvetage',
  'Rettungsfahrzeug': 'Véhicule de sauvetage',
  'Schaumextrakt': 'Émulseur',
  'Atemluft': 'Air respirable',
  'Anhängelast': 'Charge remorquable',
  'Rettungsplätze': 'Places de sauvetage',
  'Schaum': 'Mousse',
  'Maximale Tragfähigkeit': 'Capacité de levage maximale',
  'Schwenkwinkel': 'Angle de pivotement',
  'Eigenmasse': 'Masse propre',
  'Netz': 'Réseau',
  'Ablösung': 'Remplacement',
  'Nachfolger': 'Successeur',
  'Tragfähigkeit': 'Capacité de levage',
  'Im SBB-Bestand': 'Dans l’effectif CFF',
  'Wagengattung': 'Catégorie de wagon',
  'Gegengewicht': 'Contrepoids',
  'Basistyp': 'Type de base',
  'Kranklasse': 'Classe de grue',
  'Katalogstatus 2026': 'Statut au catalogue 2026',
  'Fahrzeuggruppe': 'Groupe de véhicules',
  'Arbeitsmittel': 'Moyens de travail',
  'Weitere Ausrüstung': 'Autres équipements',
  'Arbeitsort': 'Lieu de travail',
  'Öffentlich genannte Typen': 'Types cités publiquement',
  'Ausmusterung': 'Retrait du service',
  'Spätere Bezeichnung': 'Désignation ultérieure',
  'Kesseldruck': 'Pression de chaudière',
  'Treibraddurchmesser': 'Diamètre des roues motrices',
  'Vorräte': 'Réserves',
  'Modernisierung': 'Modernisation'
});

/* ---- 03-standort.js ---- */
/* Français – tableau des départs : gare la plus proche */
uebDict({
  'In meiner Nähe': 'Près de moi',
  'Bahnhof in meiner Nähe anzeigen': 'Afficher la gare la plus proche',
  'Suche den nächsten Bahnhof …': 'Recherche de la gare la plus proche …',
  'Kein Halt in der Nähe gefunden. Tippe einen Bahnhof ein.': 'Aucun arrêt trouvé à proximité. Tape le nom d’une gare.',
  'Standort nicht erlaubt. Du kannst den Bahnhof auch eintippen.': 'Localisation refusée. Tu peux aussi taper le nom de la gare.',
  'Standort nicht gefunden. Tippe einen Bahnhof ein.': 'Position introuvable. Tape le nom d’une gare.',
  'Nur wenn du auf «In meiner Nähe» tippst, fragt dein Browser dich, ob die Seite deinen Standort verwenden darf. Sagst du ja, wird der Standort auf etwa 100 Meter gerundet an transport.opendata.ch geschickt, um den nächsten Bahnhof zu finden. Wir speichern den Standort nicht.': 'Ce n’est que si tu touches « Près de moi » que ton navigateur te demande si le site peut utiliser ta position. Si tu acceptes, la position est arrondie à environ 100 mètres et envoyée à transport.opendata.ch pour trouver la gare la plus proche. Nous n’enregistrons pas ta position.'
});

/* ---- 04-app.js ---- */
/* Français – installer comme application */
uebDict({
  'App installieren': 'Installer l’application',
  'Auf dem iPhone: In Safari unten auf «Teilen» tippen, dann «Zum Home-Bildschirm». Danach erscheint RailBase als App auf deinem Handy.': 'Sur iPhone : dans Safari, touche « Partager » en bas, puis « Sur l’écran d’accueil ». RailBase apparaît ensuite comme une application sur ton téléphone.',
  'Damit die Website auch als App schnell startet und ohne Internet funktioniert, legt dein Browser besuchte Seiten, Bilder und Skripte in einem Zwischenspeicher auf deinem Gerät ab. Darin stehen nur Inhalte dieser Website, keine Angaben über dich.': 'Pour que le site démarre rapidement comme application et fonctionne sans Internet, ton navigateur garde les pages, images et scripts consultés dans une mémoire cache sur ton appareil. Elle ne contient que des contenus de ce site, aucune information sur toi.'
});

/* ---- 05-funktionen.js ---- */
/* Français – menu, fiches, observations, nouveautés, reconnaître les trains */
uebDict({
  // menu
  'Hauptmenü': 'Menu principal',
  'Menü': 'Menu',
  'Entdecken': 'Découvrir',
  'Neu und aktualisiert': 'Nouveautés et mises à jour',
  'Züge unterscheiden': 'Distinguer les trains',
  'Über RailBase': 'À propos de RailBase',
  // cartes et fiche
  'Seit': 'Depuis',
  '1980er': 'années 1980',
  'Datenstand: {d}': 'État des données : {d}',
  'Oktober 2026': 'octobre 2026',
  '© 2026 HCKD · Fahrzeugdaten: Stand Oktober 2026 · Netzkarte: Stand Juli 2021 ·': '© 2026 HCKD · Données des véhicules : octobre 2026 · Carte du réseau : juillet 2021 ·',
  'Kartendaten: Stand Juli 2021': 'Données cartographiques : juillet 2021',
  'Steckbrief (PDF)': 'Fiche (PDF)',
  'Öffnet die Druckansicht. Dort «Als PDF speichern» wählen.': 'Ouvre l’aperçu avant impression. Choisis-y « Enregistrer au format PDF ».',
  'Steckbrief': 'Fiche',
  'Kurz erklärt': 'En bref',
  // observations
  'Meine Sichtungen': 'Mes observations',
  'Meine Sichtungen ({n})': 'Mes observations ({n})',
  '+ Sichtung eintragen': '+ Ajouter une observation',
  'Datum': 'Date',
  'Ort': 'Lieu',
  'Fahrzeugnummer': 'Numéro du véhicule',
  'Notiz': 'Note',
  'z. B. Bern, Gleis 5': 'p. ex. Berne, voie 5',
  'z. B. 460 058': 'p. ex. 460 058',
  'Speichern': 'Enregistrer',
  'Nr.': 'n°',
  'Sichtung vom {d} löschen': 'Supprimer l’observation du {d}',
  '1 Sichtung': '1 observation',
  '{s} Sichtungen': '{s} observations',
  'Sammlung sichern (Datei)': 'Sauvegarder la collection (fichier)',
  'Als Tabelle (CSV)': 'Comme tableau (CSV)',
  'Sammlung laden': 'Charger une collection',
  'Fahrzeug': 'Véhicule',
  'Gesichert: {n} Fahrzeuge, {s} Sichtungen.': 'Sauvegardé : {n} véhicules, {s} observations.',
  'Geladen: {n} Fahrzeuge, {s} neue Sichtungen.': 'Chargé : {n} véhicules, {s} nouvelles observations.',
  'Diese Datei kann nicht gelesen werden. Wähle eine Datei, die mit «Sammlung sichern» erstellt wurde.': 'Ce fichier ne peut pas être lu. Choisis un fichier créé avec « Sauvegarder la collection ».',
  'Auch deine Sichtungen (Datum, Ort, Fahrzeugnummer und Notiz) bleiben nur in deinem Browser. Mit «Sammlung sichern» lädst du sie als Datei auf dein Gerät herunter; diese Datei kannst du später mit «Sammlung laden» wieder einlesen. Dabei wird nichts an uns geschickt.': 'Tes observations (date, lieu, numéro du véhicule et note) restent elles aussi uniquement dans ton navigateur. Avec « Sauvegarder la collection », tu les télécharges comme fichier sur ton appareil ; tu peux ensuite le relire avec « Charger une collection ». Rien ne nous est envoyé.',
  // nouveautés
  'Was ist neu?': 'Quoi de neuf ?',
  'Die letzten Ergänzungen auf einen Blick: neue Fahrzeuge, neue Fotos und neue Funktionen.': 'Les derniers ajouts en un coup d’œil : nouveaux véhicules, nouvelles photos et nouvelles fonctions.',
  'Alle anzeigen': 'Tout afficher',
  'Neu': 'Nouveau',
  'Aktualisiert': 'Mis à jour',
  'Ansehen': 'Voir',
  'Sichtungen mit Datum, Ort und Fahrzeugnummer eintragen und die Sammlung als Datei sichern.': 'Enregistrer des observations avec date, lieu et numéro du véhicule, et sauvegarder la collection comme fichier.',
  'Steckbrief jedes Fahrzeugs als PDF und ein Vergleich der FLIRT-Baureihen 521 bis 524.': 'Fiche de chaque véhicule en PDF et comparaison des séries FLIRT 521 à 524.',
  'Höchstgeschwindigkeit im Betrieb und gebaute Höchstgeschwindigkeit stehen jetzt direkt zusammen.': 'La vitesse maximale en exploitation et la vitesse de construction figurent désormais côte à côte.',
  'Die Website lässt sich als App aufs Handy installieren.': 'Le site peut être installé comme application sur le téléphone.',
  'Abfahrtstafel mit Knopf «In meiner Nähe»; Start-Bahnhof ist neu Bern.': 'Tableau des départs avec le bouton « Près de moi » ; la gare de départ est désormais Berne.',
  'Die ganze Website auf Französisch, Italienisch und Englisch; dazu das Bahn-ABC auf der Startseite.': 'Tout le site en français, en italien et en anglais ; avec l’ABC du rail sur la page d’accueil.',
  '20 Bauzug- und Dienstwagen von SBB Infrastruktur neu im Katalog.': '20 wagons de trains de travaux et de service de CFF Infrastructure nouveaux dans le catalogue.',
  'Neue Fotos der Lösch- und Rettungszüge, Fahrleitungsfahrzeuge und weiterer Baureihen.': 'Nouvelles photos des trains d’extinction et de sauvetage, des véhicules caténaire et d’autres séries.',
  'Technische Daten und Texte vieler Fahrzeuge ergänzt und geprüft.': 'Caractéristiques techniques et textes de nombreux véhicules complétés et vérifiés.',
  // reconnaître les trains
  'FLIRT 521, 522, 523 oder 524?': 'FLIRT 521, 522, 523 ou 524 ?',
  'Die vierteiligen FLIRT der SBB sehen sich zum Verwechseln ähnlich. Am sichersten hilft die Nummer an der Front: Die ersten drei Ziffern sind die Baureihe. Dazu verraten Strom, Farben und Einsatzgebiet viel.': 'Les FLIRT à quatre caisses des CFF se ressemblent à s’y méprendre. Le plus sûr est le numéro à l’avant : les trois premiers chiffres indiquent la série. Le courant, les couleurs et la région d’engagement en disent aussi beaucoup.',
  'Wagen': 'Caisses',
  'Unterwegs': 'Où',
  'Nummer an der Front: 521 012': 'Numéro à l’avant : 521 012',
  'Léman-Express-Farben: blau, weiss und rot': 'Couleurs du Léman Express : bleu, blanc et rouge',
  'Nummer an der Front: 523 001': 'Numéro à l’avant : 523 001',
  'Schriftzug der Stadtbahn Zug, wo der RABe 523 zuerst fuhr': 'Inscription de la Stadtbahn Zug, où le RABe 523 a circulé en premier',
  'Nummer an der Front: 524 303': 'Numéro à l’avant : 524 303',
  'TILO-Logo und Farben rot, blau und grün': 'Logo TILO et couleurs rouge, bleu et vert',
  'Italienische Bezeichnung «ETR 524»': 'Désignation italienne « ETR 524 »',
  'Nummer 521 001–030 oder 521 201–209': 'Numéros 521 001–030 ou 521 201–209',
  'Strom 15 kV 16,7 Hz – derselbe wie in Deutschland, darum fährt er über die Grenze': 'Courant 15 kV 16,7 Hz – le même qu’en Allemagne, c’est pourquoi il passe la frontière',
  'Unterwegs bei der S-Bahn Basel und im Seehas am Bodensee': 'En service sur le RER de Bâle et sur le Seehas au bord du lac de Constance',
  'Nummer 522 201–232': 'Numéros 522 201–232',
  'Zweisystem: 15 kV und 25 kV für Frankreich': 'Bicourant : 15 kV et 25 kV pour la France',
  'Etwas länger: 75,0 m statt 74,1 m': 'Un peu plus long : 75,0 m au lieu de 74,1 m',
  'Unterwegs beim Léman Express rund um Genève und im Raum Basel': 'En service sur le Léman Express autour de Genève et dans la région de Bâle',
  'Nummer 523 001–073, 101–114 oder 501–511': 'Numéros 523 001–073, 101–114 ou 501–511',
  'Nur 15 kV: bleibt in der Schweiz': 'Seulement 15 kV : reste en Suisse',
  'Unterwegs bei vielen S-Bahnen, z. B. in Zug, Luzern, Aargau, Freiburg und Waadt': 'En service sur de nombreux RER, p. ex. à Zoug, Lucerne, en Argovie, à Fribourg et dans le canton de Vaud',
  'Nummer 524 …; die neueren Züge (FLIRT TSI) tragen 524 3…': 'Numéros 524 … ; les rames plus récentes (FLIRT TSI) portent 524 3…',
  'Mehrsystem: 15 kV und 3 kV Gleichstrom für Italien': 'Multisystème : 15 kV et 3 kV courant continu pour l’Italie',
  'Mit 4 oder 6 Wagen': 'Avec 4 ou 6 caisses',
  'Unterwegs bei TILO im Tessin und in der Lombardei bis Milano': 'En service chez TILO au Tessin et en Lombardie jusqu’à Milan',
  '15 kV + 3 kV DC': '15 kV + 3 kV CC',
  'Basel, Deutschland': 'Bâle, Allemagne',
  'Genève, Frankreich, Basel': 'Genève, France, Bâle',
  'ganze Schweiz': 'toute la Suisse',
  'Tessin, Lombardei': 'Tessin, Lombardie'
});

/* ---- 07-sammlung.js ---- */
/* Français – « Ma collection » et badges d’explorateur */
uebDict({
  'Meine Sammlung ansehen': 'Voir ma collection',
  'Meine Sammlung': 'Ma collection',
  'Alle Fahrzeuge, die du gesehen hast, deine Sichtungen und deine Entdecker-Abzeichen. Alles bleibt in deinem Browser.': 'Tous les véhicules que tu as vus, tes observations et tes badges d’explorateur. Tout reste dans ton navigateur.',
  'Entdecker-Abzeichen': 'Badges d’explorateur',
  'Gesehene Fahrzeuge': 'Véhicules vus',
  'Sammlung sichern': 'Sauvegarder la collection',
  'Die Sammlung ist nur in diesem Browser gespeichert. Sichere sie als Datei, damit sie nicht verloren geht oder um sie auf ein anderes Gerät zu holen.': 'La collection n’est enregistrée que dans ce navigateur. Sauvegarde-la comme fichier pour ne pas la perdre ou pour la reprendre sur un autre appareil.',
  '1 Abzeichen': '1 badge',
  '{n} Abzeichen': '{n} badges',
  'Erreicht': 'Obtenu',
  '{a} von {b}': '{a} sur {b}',
  'zuletzt {d}': 'dernière fois le {d}',
  'Du hast noch kein Fahrzeug als gesehen markiert. Öffne eine Fahrzeugseite und tippe auf «Hab ich gesehen» oder trage eine Sichtung ein.': 'Tu n’as encore marqué aucun véhicule comme vu. Ouvre la page d’un véhicule et touche « Je l’ai vu » ou ajoute une observation.',
  'Erste Entdeckung': 'Première découverte',
  '1 Fahrzeug gesehen': '1 véhicule vu',
  '{n} Fahrzeuge gesehen': '{n} véhicules vus',
  'Zehner-Sammler': 'Collectionneur de dix',
  'Bahnkenner': 'Connaisseur du rail',
  'Bahnexperte': 'Expert du rail',
  'Ganzer Katalog': 'Catalogue complet',
  'Alle {n} Fahrzeuge gesehen': 'Les {n} véhicules vus',
  'Reiseprofi': 'Pro du voyage',
  'Alle Fahrzeuge im Personenverkehr gesehen': 'Tous les véhicules du trafic voyageurs vus',
  'Güterverkehr-Kenner': 'Connaisseur du fret',
  'Alle Lokomotiven von SBB Cargo gesehen': 'Toutes les locomotives de CFF Cargo vues',
  'Infrastruktur-Profi': 'Pro de l’infrastructure',
  'Alle Fahrzeuge von SBB Infrastruktur gesehen': 'Tous les véhicules de CFF Infrastructure vus',
  'Rangiermeister': 'Maître de la manœuvre',
  'Alle Rangierfahrzeuge gesehen': 'Tous les véhicules de manœuvre vus',
  'Spezialisten-Blick': 'Œil de spécialiste',
  'Alle Dienst- und Spezialfahrzeuge gesehen': 'Tous les véhicules de service et spéciaux vus',
  'Zeitreisender': 'Voyageur dans le temps',
  'Alle historischen Fahrzeuge entdeckt': 'Tous les véhicules historiques découverts',
  'FLIRT-Kenner': 'Connaisseur FLIRT',
  'Die FLIRT 521, 522, 523 und 524 gesehen': 'Les FLIRT 521, 522, 523 et 524 vus',
  'Krokodil-Jäger': 'Chasseur de Crocodiles',
  'Beide Krokodile Ce 6/8 II und Ce 6/8 III gesehen': 'Les deux Crocodiles Ce 6/8 II et Ce 6/8 III vus',
  'Notizbuch': 'Carnet de notes',
  'Erste Sichtung eingetragen': 'Première observation enregistrée',
  'Bahnbeobachter': 'Observateur du rail',
  '{n} Sichtungen eingetragen': '{n} observations enregistrées',
  'Entdecker-Abzeichen und die Seite «Meine Sammlung» mit allen gesehenen Fahrzeugen.': 'Badges d’explorateur et la page « Ma collection » avec tous les véhicules vus.'
});

/* ---- 08-pruefbericht.js ---- */
/* Français – compléments après le rapport de contrôle du 18.10.2026 */
uebDict({
  'Korrekturen nach einer Inhaltsprüfung, unter anderem bei RABe 521, Ae 6/6, Be 4/6, Ce 6/8 III, Rotem Pfeil und LRZ 14.': 'Corrections après un contrôle du contenu, notamment pour le RABe 521, l’Ae 6/6, la Be 4/6, la Ce 6/8 III, la Flèche rouge et le TES 14.',
  'ein Wagen': 'une voiture',
  'Umbauauftrag': 'Commande de transformation',
  'z. B. Re 4/4 II': 'p. ex. Re 4/4 II',
  'ältere Bezeichnung einer Dampflok; die Buchstaben folgen einem früheren Schema und werden hier nicht einzeln erklärt': 'ancienne désignation d’une locomotive à vapeur ; les lettres suivent un schéma plus ancien et ne sont pas expliquées ici une par une',
  'Diese Bezeichnung kann ich (noch) nicht entschlüsseln. Probiere zum Beispiel «Re 4/4 II» oder «RABe 523»; Gross- und Kleinbuchstaben haben dabei eine eigene Bedeutung.': 'Je ne sais pas (encore) déchiffrer cette désignation. Essaie par exemple « Re 4/4 II » ou « RABe 523 » ; les majuscules et les minuscules ont chacune leur signification.'
});

/* ---- 09-spenden.js ---- */
/* Français – dons par virement bancaire */
uebDict({
  '{n} Besuche': '{n} visites',
  'Namen anzeigen': 'Afficher le nom',
  'Eigener Betrag': 'Montant libre',
  'z. B. 15': 'p. ex. 15',
  '<b>Danke für deine Unterstützung!</b> Jeder Franken fliesst direkt in RailBase: in neue Fahrzeugporträts, mehr Fotos, genaue Recherche und den Betrieb der Website. So bleibt die Train Database für alle kostenlos und ohne Werbung. Ob gross oder klein, jede Spende bedeutet mir viel.': '<b>Merci pour ton soutien !</b> Chaque franc va directement à RailBase : de nouveaux portraits de véhicules, plus de photos, des recherches précises et l’exploitation du site. Ainsi, la Train Database reste gratuite et sans publicité pour tous. Petit ou grand, chaque don compte beaucoup pour moi.',
  'Spenden laufen per Banküberweisung direkt über deine Bank. Die Website verarbeitet dabei keine Zahlungsdaten; IBAN und Name im Spenden-Fenster sind nur zum Kopieren da.': 'Les dons se font par virement bancaire, directement via ta banque. Le site ne traite aucune donnée de paiement ; l’IBAN et le nom dans la fenêtre de don servent uniquement à être copiés.',
  'Eigene Adresse hckd-rail.ch und Spenden per Banküberweisung. Danke für jede Unterstützung!': 'Propre adresse hckd-rail.ch et dons par virement bancaire. Merci pour chaque soutien !'
});

/* ---- 10-railbase.js ---- */
/* Français – nouveau nom RailBase */
uebDict({
  'Neue Adresse: railbase.ch. Am besten gleich als Lesezeichen speichern.': 'Nouvelle adresse : railbase.ch. Le mieux est de l’ajouter tout de suite à tes favoris.',
  'Aus HCKD RAIL wird RailBase: neuer Name und neues Logo. Sammlung und Sichtungen bleiben, wie sie sind.': 'HCKD RAIL devient RailBase : nouveau nom et nouveau logo. Ta collection et tes observations restent inchangées.',
  'Das neue Logo ist jetzt auch das App-Symbol und das Symbol im Browser-Tab.': 'Le nouveau logo est désormais aussi l’icône de l’app et celle de l’onglet du navigateur.'
});

/* ---- 11-danke.js ---- */
/* Français – page «Merci» */
uebDict({
  'Danke': 'Merci',
  'Danke für eure Hilfe': 'Merci pour votre aide',
  'RailBase lebt von guten Bildern. Diese Bahnfotografen haben geholfen und Fotos von Zügen für die Website gemacht. Ohne sie wäre RailBase nur halb so schön. Vielen herzlichen Dank!': 'RailBase vit de belles images. Ces photographes ferroviaires ont aidé en prenant des photos de trains pour le site. Sans eux, RailBase ne serait qu’à moitié aussi beau. Un grand merci !',
  'RailBase lebt von guten Bildern und von Arbeit im Hintergrund. Diese Menschen haben geholfen: mit Fotos von Zügen und bei der Informatik. Ohne sie wäre RailBase nur halb so schön. Vielen herzlichen Dank!': 'RailBase vit de belles images et du travail en coulisses. Ces personnes ont aidé : avec des photos de trains et pour l’informatique. Sans elles, RailBase ne serait qu’à moitié aussi beau. Un grand merci !',
  'Zuständig für Informatik': 'Responsable de l’informatique',
  'Bahnfotograf · Fotos von Zügen für RailBase': 'Photographe ferroviaire · photos de trains pour RailBase',
  'Selbst mithelfen': 'Aider toi aussi',
  'Du fotografierst auch Züge oder hast einen Fehler entdeckt? Jede Hilfe macht RailBase besser. Schick uns deine Fotos mit deinem Namen. Wir zeigen sie gerne auf der Website und nennen dich hier und unter dem Bild.': 'Tu photographies aussi des trains ou tu as trouvé une erreur ? Chaque aide rend RailBase meilleur. Envoie-nous tes photos avec ton nom. Nous les montrerons volontiers sur le site et te citerons ici et sous l’image.',
  'Neue Seite «Danke»: ein Dankeschön an die Bahnfotografen, die Fotos für RailBase gemacht haben.': 'Nouvelle page «Merci» : un grand merci aux photographes ferroviaires qui ont pris des photos pour RailBase.',
  'Instagram von Alessandro Antonazzo (öffnet in neuem Fenster)': 'Instagram d’Alessandro Antonazzo (s’ouvre dans une nouvelle fenêtre)',
  'Instagram von Quentin Rossier (öffnet in neuem Fenster)': 'Instagram de Quentin Rossier (s’ouvre dans une nouvelle fenêtre)'
});

/* ---- 12-international.js ---- */
/* Français – carte internationale «Où circule-t-il ?» */
uebDict({
  'Karte wählen': 'Choisir la carte',
  'Schweiz': 'Suisse',
  'International': 'International',
  'Karte der Schweiz mit den Einsatzstrecken': 'Carte de la Suisse avec les lignes desservies',
  'Karte Europas mit den internationalen Strecken': 'Carte de l’Europe avec les lignes internationales',
  'Vereinfachte Übersicht der internationalen Strecken laut SBB; die Linien verbinden die Halte direkt. Ländergrenzen: Natural Earth.': 'Aperçu simplifié des lignes internationales selon les CFF ; les traits relient directement les arrêts. Frontières : Natural Earth.',
  'International von Hamburg und Bremen über Hannover, Frankfurt und Basel durch die Schweiz bis Mailand und weiter nach Venedig, Florenz und Livorno.': 'À l’international de Hambourg et Brême via Hanovre, Francfort et Bâle, à travers la Suisse jusqu’à Milan, puis vers Venise, Florence et Livourne.',
  'Ländergrenzen der internationalen Karten: Natural Earth (gemeinfrei), über das Paket world-atlas (ISC-Lizenz).': 'Frontières des cartes internationales : Natural Earth (domaine public), via le paquet world-atlas (licence ISC).',
  'International von Genf, Basel und Bern über Brig und den Simplon nach Mailand sowie von Zürich nach München.': 'À l’international de Genève, Bâle et Berne via Brigue et le Simplon jusqu’à Milan, ainsi que de Zurich à Munich.',
  'Nach der SBB-Karte für Einheitswagen IV und EuroCity: Die EuroCity-Wagen der SBB fahren in Richtung Amsterdam, Hamburg, Berlin und Wien, dazu bis Graz und Jarosław in Polen. Die klassischen EW IV fahren überwiegend in der Schweiz.': 'Selon la carte des CFF pour les voitures unifiées IV et EuroCity : les voitures EuroCity des CFF circulent en direction d’Amsterdam, Hambourg, Berlin et Vienne, ainsi que jusqu’à Graz et Jarosław en Pologne. Les EW IV classiques circulent surtout en Suisse.'
});

/* ---- 13-einsatz-neu.js ---- */
/* Français – «Où circule-t-il ?» pour les autres véhicules */
uebDict({
  'S-Bahn Basel': 'RER Bâle',
  'Léman Express': 'Léman Express',
  'Raum Basel': 'Région bâloise',
  'Auf der trinationalen S-Bahn Basel und grenzüberschreitend nach Deutschland, dazu im Seehas-Verkehr ab Konstanz.': 'Sur le RER trinational de Bâle et en trafic transfrontalier vers l’Allemagne, ainsi que sur le Seehas au départ de Constance.',
  'Im Léman-Express-Netz rund um Genf und auf grenznahen Regionalverbindungen im Raum Basel.': 'Sur le réseau Léman Express autour de Genève et sur des liaisons régionales frontalières dans la région bâloise.',
  'Im TILO-Netz im Tessin und grenzüberschreitend in die Lombardei.': 'Sur le réseau TILO au Tessin et en trafic transfrontalier vers la Lombardie.',
  'Vor allem für Güterzüge von der Schweiz nach Deutschland.': 'Surtout pour des trains de marchandises de la Suisse vers l’Allemagne.',
  'Im Rangierdienst des Personenverkehrs in grösseren Bahnhöfen; dank zwei Stromsystemen auch in Grenzbahnhöfen.': 'En service de manœuvre du trafic voyageurs dans les grandes gares ; grâce à deux systèmes de courant aussi dans les gares frontières.',
  'Bei SBB Cargo im Rangier- und Zustelldienst; ohne Fahrleitung fährt sie mit dem Hilfsdiesel.': 'Chez CFF Cargo en service de manœuvre et de desserte ; sans caténaire, elle roule avec son diesel auxiliaire.',
  'Früher im schweren Rangierdienst in grossen Bahnhöfen, unabhängig von der Fahrleitung.': 'Autrefois en manœuvre lourde dans les grandes gares, indépendamment de la caténaire.',
  'Im leichten Rangier- und Baudienst im ganzen SBB-Netz.': 'En manœuvre légère et en service de travaux sur tout le réseau CFF.',
  'Über Jahrzehnte im Rangierdienst in Bahnhöfen und Depots im ganzen SBB-Netz.': 'Pendant des décennies en manœuvre dans les gares et les dépôts de tout le réseau CFF.',
  'Im Bau-, Rangier- und Zustelldienst im ganzen SBB-Netz, je nach Baustelle.': 'En service de travaux, de manœuvre et de desserte sur tout le réseau CFF, selon les chantiers.',
  'Geplant für Baustellen im ganzen SBB-Normalspurnetz.': 'Prévu pour les chantiers de tout le réseau CFF à voie normale.',
  'Für die Gotthardachse mit dem Gotthard-Basistunnel und das Tunnelnetz beschafft.': 'Acquis pour l’axe du Gothard avec le tunnel de base et pour le réseau de tunnels.',
  'Für schnelle Einsätze auf dem offenen Netz und in Tunneln im ganzen SBB-Netz.': 'Pour des interventions rapides en pleine voie et dans les tunnels de tout le réseau CFF.',
  'Für Ereignisse auf dem Bahnnetz, besonders in längeren Tunneln und an schwer zugänglichen Strecken.': 'Pour les événements sur le réseau ferroviaire, surtout dans les longs tunnels et sur les tronçons difficiles d’accès.',
  'Bei starkem Schneefall auf Strecken und in Bahnhöfen, unter anderem auf der Gotthard-Panoramastrecke.': 'En cas de fortes chutes de neige sur les lignes et dans les gares, entre autres sur la ligne panoramique du Gothard.',
  'Für Messfahrten auf den Hauptstrecken im ganzen SBB-Netz.': 'Pour des courses de mesure sur les grandes lignes de tout le réseau CFF.',
  'Für Unterhalt, Montage und Ereignisse im ganzen SBB-Normalspurnetz.': 'Pour l’entretien, le montage et les événements sur tout le réseau CFF à voie normale.',
  'Früher vor allem vor Güterzügen am Gotthard.': 'Autrefois surtout en tête de trains de marchandises au Gothard.',
  'Früher vor schweren Güterzügen am Gotthard, auf den Zufahrtslinien und im Flachland.': 'Autrefois en tête de lourds trains de marchandises au Gothard, sur les lignes d’accès et en plaine.',
  'Früher das Kraftpaket am Gotthard, später vor allem im Güterverkehr und im Mittelland.': 'Autrefois la force de traction du Gothard, plus tard surtout en trafic marchandises et sur le Plateau.',
  'Früher als eine der wichtigsten Streckenloks der SBB im ganzen Netz unterwegs.': 'Autrefois l’une des principales locomotives de ligne des CFF, sur tout le réseau.',
  'Früher vor Personen-, Schnell- und Güterzügen, vor allem im Mittelland.': 'Autrefois en tête de trains de voyageurs, rapides et de marchandises, surtout sur le Plateau.',
  'Früher vor schweren Gotthardzügen. Die Ae 8/14 11852 steht heute bei SBB Historic in Erstfeld.': 'Autrefois en tête des lourds trains du Gothard. L’Ae 8/14 11852 se trouve aujourd’hui chez CFF Historic à Erstfeld.',
  'Früher vor Schnellzügen auf der Gotthard-Bergstrecke, später im Mittelland.': 'Autrefois en tête de trains rapides sur la ligne de montagne du Gothard, plus tard sur le Plateau.',
  'Früher vor schnellen, leichten Zügen im Mittelland, später im Regionalverkehr.': 'Autrefois en tête de trains rapides et légers sur le Plateau, plus tard en trafic régional.',
  'Als TEE «Gottardo» durch den Gotthard; der Zug verband die Schweiz mit Deutschland, Frankreich, Italien und den Niederlanden.': 'Comme TEE «Gottardo» à travers le Gothard ; le train reliait la Suisse à l’Allemagne, la France, l’Italie et les Pays-Bas.',
  'Früher auf Ausflugs- und Gesellschaftsfahrten im ganzen Netz unterwegs.': 'Autrefois en excursions et courses de groupe sur tout le réseau.',
  'Früher vor Schnellzügen; heute betreut die Dampfgruppe Zürich die erhaltene A 3/5 705.': 'Autrefois en tête de trains rapides ; aujourd’hui, la Dampfgruppe Zürich entretient l’A 3/5 705 conservée.',
  'Früher vor schweren Güterzügen am Gotthard, später im Mittelland, auf Bellinzona–Luino und im Rangierdienst.': 'Autrefois en tête de lourds trains de marchandises au Gothard, plus tard sur le Plateau, sur Bellinzone–Luino et en manœuvre.',
  'Früher vor Regionalzügen, auf Nebenbahnen und im Stationsdienst.': 'Autrefois en tête de trains régionaux, sur des lignes secondaires et en service de gare.',
  'Früher im Vorortsverkehr am rechten Zürichseeufer, bekannt als «Goldküstenexpress».': 'Autrefois en trafic de banlieue sur la rive droite du lac de Zurich, connu comme «Goldküstenexpress».',
  'Früher vor Schnellzügen, später vor Regional- und S-Bahn-Pendelzügen. Die RBe 540 074 fährt heute bei der Oensingen-Balsthal-Bahn.': 'Autrefois en tête de trains rapides, plus tard de navettes régionales et de RER. La RBe 540 074 circule aujourd’hui à l’Oensingen-Balsthal-Bahn.'
});

/* ---- 20-personenverkehr.js ---- */
/* Français – véhicules CFF Voyageurs */
uebDict({ 'ja': 'oui', 'nein': 'non', 'SBB': 'CFF' });

uebZug('rabe-501', {
  typ: 'Train électrique à grande vitesse',
  text: ['Le Giruno est une rame multisystème de onze caisses construite par Stadler pour le trafic grandes lignes national et international.', 'Il relie la Suisse à l’Italie et à l’Allemagne et est conçu pour une vitesse maximale de 250 km/h.'],
  kennzahlen: [['41', 'rames dans la flotte CFF'], ['405', 'places assises'], ['250 km/h', 'vitesse maximale'], ['2019', 'première mise en service aux CFF']],
  daten: { 'Betreiber': 'CFF Voyageurs', 'Zugbildung': '11 voitures', 'Länge': '202,0 m hors attelages', 'Gewicht': '381 t à vide', 'Leistung': '6000 kW max. à la jante', 'Sitzplätze': '405 (117 en 1re classe, 288 en 2e classe)', 'Restaurant': '17 places en plus', 'Anzahl': '41 rames' },
  specNote: 'Technique et répartition des places selon Stadler, poids à vide selon CFF Infrastructure.',
  abschnitte: [
    { titel: 'Constructeur et constitution de la flotte', p: ['En 2014, les CFF ont d’abord commandé 29 rames à Stadler. La première série a été mise en service de 2019 à 2021. Après des commandes complémentaires, la flotte est passée à 41 rames.', 'Les CFF ont annoncé la livraison du dernier véhicule commandé pour décembre 2025 ; leur aperçu actuel de la flotte compte les 41 rames.'] },
    { titel: 'Utilisation et technique', p: ['Parmi les axes d’utilisation figure Zurich–Milan par le tunnel de base du Saint-Gothard. Dans l’horaire 2026, des Giruno circulent aussi entre Bâle et Hambourg. Le constructeur mentionne des homologations pour la Suisse, l’Allemagne, l’Italie et l’Autriche.', 'Quatre convertisseurs de traction alimentent quatre bogies moteurs ; deux rames peuvent circuler en unités multiples.'] },
    { titel: 'Équipement et accessibilité', liste: ['Wi-Fi', 'Prises électriques', 'Zone famille', 'Zone silence', 'Zone business', 'Places pour vélos', 'Toilettes accessibles en fauteuil roulant dans les deux classes', 'Restaurant à bord'],
      p: ['Les accès sont conçus pour des quais de 55 et 76 cm de haut. Aux quais adaptés, les personnes en fauteuil roulant peuvent monter seules et rejoindre le restaurant.'] }
  ],
  bilder: ['RABe 501 « Giruno » en passage', 'Giruno de Stadler en gare', 'Giruno à Bâle', 'Deux Giruno côte à côte', 'Giruno avec voiture-restaurant dans la halle']
});

uebZug('rabde-500', {
  typ: 'Train pendulaire InterCity',
  text: ['L’ICN est un train pendulaire électrique de sept caisses pour les grandes lignes suisses. Sa pendulation permet des vitesses plus élevées en courbe sur les lignes sinueuses adaptées.', 'Il circule surtout sur la ligne du pied du Jura.'],
  kennzahlen: [['44', 'rames dans la flotte CFF'], ['471', 'places assises selon les CFF'], ['200 km/h', 'vitesse maximale'], ['1999', 'première mise en service selon les CFF']],
  daten: { 'Betreiber': 'CFF Voyageurs', 'Zugbildung': '7 voitures', 'Gewicht': '368 t à vide', 'Neigetechnik': 'pendulation active de la caisse', 'Anzahl': '44 rames (1re série 24, 2e série 20)', 'Hersteller': 'Série 1 : Adtranz et FIAT-SIG ; série 2 : Bombardier/Alstom' },
  specNote: 'Valeurs techniques selon CFF Infrastructure. La page des CFF arrondit la longueur à 190 m et indique 471 places assises ainsi que 1999 comme première mise en service.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les CFF possèdent 44 ICN. La première série, numéros 000 à 023, a été construite par Adtranz et FIAT-SIG, la seconde, numéros 024 à 043, par le consortium Bombardier/Alstom ; sa livraison a commencé en 2003.', 'Alstom a notamment livré depuis Neuhausen les bogies et la technique pendulaire. Le premier ICN a circulé en 1999.'] },
      { titel: 'Utilisation et technique', p: ['Ses axes principaux sont Bâle–Bienne–Lausanne et Romanshorn–Saint-Gall–Zurich–Bienne–Genève sur la ligne du pied du Jura. D’autres services vont au Tessin.', 'Grâce à l’inclinaison active des caisses, le train de sept voitures passe plus vite dans les courbes des lignes sinueuses. Il atteint 200 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Restaurant', 'Zone famille', 'Zone de silence et zone business en 1re classe', 'Prises électriques, aussi aux tablettes latérales', 'Fenêtres améliorant la réception mobile', 'Places pour vélos', 'Places pour poussettes et table à langer', 'Places pour fauteuils roulants et WC accessible', 'Sièges prioritaires'],
        p: ['L’accès n’est pas à plancher bas. Des places pour fauteuils roulants et un WC accessible sont disponibles.'] },
      { titel: 'Modernisation', p: ['Depuis 2021, les CFF rénovent les ICN dans leur atelier d’Yverdon. La première rame entièrement modernisée a été présentée le 24 octobre 2024. Outre les sièges, l’éclairage, les tables et l’information voyageurs, des composants techniques sont aussi révisés.', 'La page actuelle des CFF indique 2034 comme année d’achèvement ; l’objectif est d’environ 20 années de service supplémentaires.'] }
    ],
  bilder: ['ICN en été devant les montagnes', 'ICN au soleil d’hiver', 'RABDe 500 021 à Rotkreuz', 'ICN en route', 'ICN sur le pont de l’Aar à Soleure']
});

uebZug('rabe-502', {
  typ: 'Twindexx Swiss Express, train grandes lignes à deux niveaux',
  text: ['Le Twindexx Swiss Express est la rame automotrice à deux niveaux des CFF pour les grandes lignes. Les CFF l’appellent FV-Dosto.', 'Trois versions offrent plus ou moins de places et peuvent être couplées selon la demande : l’IC200 (RABDe 502) ainsi que l’IR200 et l’IR100 (RABe 502).'],
  kennzahlen: [['62', 'rames dans la flotte CFF'], ['200 km/h', 'vitesse maximale'], ['2018', 'première mise en service aux CFF'], ['3', 'versions']],
  daten: { 'Hersteller': 'Bombardier Transportation, aujourd’hui Alstom', 'Antrieb': 'moteurs synchrones à aimants permanents', 'Gewicht': '237,1–467,4 t à vide selon la version', 'Anzahl': '62 rames (23 InterCity, 39 InterRegio)', 'In Betrieb seit': '2018, flotte entièrement livrée en 2022' },
  specNote: 'Poids à vide selon les CFF : IR100 237,1 t, IR200 463,2 t, IC200 467,4 t.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Le constructeur est Bombardier Transportation, aujourd’hui intégré à Alstom. La commande initiale de 59 trains a été portée à 62 par un accord de 2014 : 23 trains InterCity et 39 InterRegio.', 'Le premier FV-Dosto a circulé en 2018 et la flotte était entièrement livrée en 2022. Il existe trois versions : IC200 (RABDe 502) ainsi qu’IR200 et IR100 (RABe 502).'] },
      { titel: 'Utilisation et technique', p: ['Un corridor important est Saint-Gall–Zurich–Berne–Lausanne–Genève. D’autres services empruntent notamment Bâle–Zurich, Zurich–Coire et Lucerne–Zurich.', 'Les trains atteignent 200 km/h et sont entraînés par des moteurs synchrones à aimants permanents. Aux heures de pointe, des compositions jusqu’à 400 m offrent jusqu’à 1300 places assises.'] },
      { titel: 'Équipement et accessibilité', liste: ['Restaurant, voiture famille, zone de silence et zone business (version IC seulement)', 'Prises électriques', 'Fenêtres améliorant la réception mobile', 'Affichage électronique des réservations', 'Places pour vélos, poussettes et bagages', 'Accès à plancher bas', 'Places pour fauteuils roulants et WC accessible', 'Sièges prioritaires et table à langer'],
        p: ['Grâce aux accès à plancher bas, les personnes en fauteuil roulant montent de plain-pied aux quais adaptés.'] },
      { titel: 'Caractéristiques des trois versions', tabelle: { kopf: ['Caractéristique', 'IC200', 'IR200', 'IR100'], zeilen: [
      ['Série', 'RABDe 502', 'RABe 502', 'RABe 502'],
      ['Voitures par rame', '8', '8', '4'],
      ['Longueur', '200,6 m', '200,6 m', '101,0 m'],
      ['Places assises', '606', '682', '330'],
      ['Puissance maximale', '7500 kW', '7500 kW', '3750 kW'],
      ['Poids à vide', '467,4 t', '463,2 t', '237,1 t'],
      ['Effort de traction au démarrage', '482,24 kN', '482,24 kN', '241,12 kN'],
      ['Restaurant', 'oui', 'non', 'non']] },
      hinweis: 'Places et équipement selon les CFF, valeurs techniques selon CFF Infrastructure. Les poids s’entendent à vide.' },
      { titel: 'Évolution', p: ['Les CFF ont décidé de transformer les bogies de toute la flotte. La compensation de roulis est supprimée et la suspension adaptée.', 'Selon un communiqué de décembre 2025, la transformation en série doit commencer après l’autorisation d’exploitation fin 2026 et durer jusqu’au début des années 2030.'] }
    ],
  bilder: ['FV-Dosto en grandes lignes devant les montagnes', 'RABDe 502 006 « Olten » à Zurich HB', 'RABe 502 402 « Biel/Bienne » devant les montagnes', 'RABe 502 214 près de Tecknau', 'RABe 502 404 au bord du lac']
});

uebZug('rabe-511', {
  typ: 'Rame automotrice à deux niveaux, Regio-Dosto et IR-Dosto',
  text: ['La série RABe 511 de Stadler (type KISS) comprend deux versions à deux niveaux : 69 Regio-Dosto de six caisses et 24 IR-Dosto de quatre caisses.', 'Les CFF distinguent les deux versions, car leur longueur, leur capacité et leur utilisation diffèrent.'],
  kennzahlen: [['93', 'rames des deux versions'], ['160 km/h', 'vitesse maximale'], ['2012', 'première mise en service'], ['Stadler', 'constructeur']],
  daten: { 'Betreiber': 'CFF Voyageurs', 'Bauart': 'rame automotrice à deux niveaux', 'Zugbildung': '6 voitures (Regio-Dosto), 4 voitures (IR-Dosto)', 'Länge': '150,0 m (Regio-Dosto), 100,0 m (IR-Dosto)', 'Leistung': '6000 kW (les deux versions)', 'Gewicht': '210–292 t selon la version', 'Anzahl': '93 rames (69 Regio-Dosto, 24 IR-Dosto)', 'Einsatz': 'RER zurichois, RegioExpress, InterRegio' },
  specNote: 'Poids selon les CFF : 210 t pour l’IR-Dosto à quatre caisses, 292 t pour le Regio-Dosto à six caisses.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler a livré ces trains à deux niveaux de type KISS dès 2012. Les CFF exploitent 69 Regio-Dosto à six voitures et 24 IR-Dosto à quatre voitures.', 'Les 24 IR-Dosto sont issus de 2020 à 2024 de la transformation de Regio-Dosto pour les grandes lignes. Les CFF rénovent les autres Regio-Dosto jusqu’en 2035 ; ils porteront ensuite tous la livrée bleue du ZVV.'] },
      { titel: 'Utilisation et technique', p: ['Les Regio-Dosto circulent surtout sur les lignes du RER zurichois et en RE Wettingen–Olten–Lucerne.', 'Les IR-Dosto assurent du trafic interrégional en Suisse alémanique et romande, notamment dans la région de Zurich, sur le Plateau, au nord-ouest et vers Coire. Les deux versions roulent jusqu’à 160 km/h ; les IR-Dosto peuvent être couplés au RABe 512 plus récent.'] },
      { titel: 'Équipement et accessibilité', liste: ['Accès à plancher bas', 'Places pour fauteuils roulants et WC accessible', 'Places pour vélos et poussettes', 'Amplificateur de signal mobile', 'Prises en 1re classe (IR-Dosto : presque à chaque place, aussi en 2e classe)', 'Sièges 2+1 en 1re classe (IR-Dosto)'],
        p: ['Les larges accès bas permettent de monter de plain-pied aux quais adaptés.'] },
      { titel: 'Les versions en comparaison', tabelle: { kopf: ['Caractéristique', 'Regio-Dosto', 'IR-Dosto'], zeilen: [
      ['Véhicules', '69', '24'],
      ['Voitures par rame', '6', '4'],
      ['Longueur', '150,0 m', '100,0 m'],
      ['Places assises', '535 (120 / 415)', '317'],
      ['Vitesse', '160 km/h', '160 km/h'],
      ['Puissance', '6000 kW', '6000 kW'],
      ['Poids', '292 t', '210 t'],
      ['Accès à plancher bas', 'oui', 'oui'],
      ['Trafic', 'RER / RE', 'IR / RE']] },
      hinweis: 'La répartition 120 / 415 désigne les places de 1re et de 2e classe du Regio-Dosto. Pour la version IR, les CFF indiquent 317 places au total.' }
    ],
  bilder: ['Regio-Dosto en S15 du RER zurichois à Jona', 'RABe 511 112 à Genève-Cornavin', 'RABe 511 026 à Genève', 'RABe 511 à Sevelen', 'RABe 511 018 à Zurich HB']
});

uebZug('rabe-514', {
  typ: 'Rame à deux niveaux du RER zurichois',
  text: ['Le RABe 514 est la rame automotrice à deux niveaux (DTZ) de deuxième génération du RER zurichois. Siemens a livré 61 rames de quatre caisses.', 'Des accès surbaissés avec comble-lacune facilitent la montée.'],
  kennzahlen: [['61', 'rames'], ['360', 'places assises par rame'], ['140 km/h', 'vitesse maximale'], ['2006', 'première mise en service aux CFF']],
  daten: { 'Betreiber': 'CFF Voyageurs', 'Bauart': 'rame automotrice à deux niveaux', 'Zugbildung': '4 voitures', 'Gewicht': '223 t à vide', 'Anzahl': '61 rames', 'Einsatz': 'RER zurichois' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Siemens a livré les 61 automotrices à deux niveaux (DTZ) de 2006 à 2009. Elles forment la deuxième génération de trains à deux niveaux du RER zurichois.'] },
      { titel: 'Utilisation et technique', p: ['Les DTZ peuvent circuler sur tout le réseau du RER zurichois. Un train mesure 100 m, offre 360 places assises et roule jusqu’à 140 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Accès bas continu avec comble-lacune', 'Compartiment multifonction avec places pour vélos et poussettes', 'Sièges prioritaires', 'Places pour fauteuils roulants', 'WC accessible'],
        p: ['Grâce aux accès bas avec comble-lacune, les personnes en fauteuil roulant montent sans marche aux quais adaptés.'] },
      { titel: 'Modernisation', p: ['Les CFF rénovent la flotte depuis 2025, probablement jusque vers 2030. Au programme : une nouvelle livrée, une meilleure réception mobile grâce à des vitres adaptées ainsi que des travaux sur l’éclairage, l’intérieur et les composants techniques.', 'La rénovation doit porter la durée d’utilisation à 32 ans.'] }
    ],
  bilder: ['RABe 514 « DTZ » en route', 'Escalier vers l’étage intermédiaire du DTZ rénové', 'RABe 514 054 en S8 à Zurich Enge', 'RABe 514 015 dans la nouvelle livrée ZVV 2023', 'DTZ en S15 sur la digue de Rapperswil']
});

uebZug('rabe-523', {
  typ: 'Rame automotrice régionale électrique de Stadler',
  text: ['Le RABe 523 à quatre caisses a été le premier FLIRT des CFF. Il a été développé pour le Stadtbahn de Zoug et est entré en service commercial en 2004.', 'La série fait partie de la grande famille FLIRT, qui circule en plusieurs versions.'],
  kennzahlen: [['2004', 'première mise en service'], ['98*', 'véhicules selon les séries de numéros'], ['2656 kW', 'puissance'], ['73,5–74,1 m', 'longueur']],
  daten: { 'Bauart': 'rame automotrice électrique', 'Grundtyp': '4 voitures', 'Einstieg': 'à plancher bas', 'Höchstgeschwindigkeit': '160 km/h (famille FLIRT selon les CFF)', 'Erste Region': 'Stadtbahn de Zoug', 'Einsatz': 'trafic régional, RER', 'Anzahl': '98* (selon les séries de numéros)' },
  specNote: '* Le chiffre de 98 découle des séries de numéros publiées 001–073, 101–114 et 501–511 ; il n’existe pas d’indication d’effectif actuelle confirmée séparément par les CFF. Les 160 km/h sont indiqués par les CFF pour l’ensemble de la famille FLIRT régionale.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Tous les FLIRT viennent de Stadler ; le premier a circulé aux CFF en 2004. En trafic régional, les CFF exploitent au total 209 FLIRT de différentes séries.'] },
      { titel: 'Utilisation et technique', p: ['Selon les CFF, les FLIRT circulent en RER notamment dans les cantons d’Argovie, de Soleure, de Lucerne, de Bâle, de Neuchâtel, de Fribourg et de Vaud.', 'Selon la version, les trains mesurent 75 à 105 m et offrent 156 à 236 places assises. Ils roulent jusqu’à 160 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Accès à plancher bas', 'Places pour fauteuils roulants et WC accessible', 'Sièges prioritaires', 'Table à langer (seulement dans une partie des trains)', 'Prises en 1re classe', 'Places pour vélos, poussettes et bagages'],
        p: ['Ces indications valent pour la famille FLIRT des CFF ; les détails varient selon la version.'] },
      { titel: 'Les séries en comparaison', tabelle: { kopf: ['Numéros', 'Nombre', 'Construction', 'Longueur', 'Poids', 'Première affectation'], zeilen: [
        ['001–012', '12', '2004–2005', '74,1 m', '120 t', 'Stadtbahn de Zoug'],
        ['013–031', '19', '2009–2010', '74,1 m', '120 t', 'RER Vaud'],
        ['032–043', '12', '2009–2010', '74,1 m', '120 t', 'Suisse centrale, transformés à partir de RABe 522'],
        ['044–056', '13', '2012–2013', '74,1 m', '120 t', 'RegiOlten'],
        ['057–066', '10', '2015–2016', '74,1 m', '127 t', 'RegiOlten'],
        ['067–073', '7', '2017', '74,1 m', '127 t', 'RegiOlten'],
        ['074–077', '4', '2017', '74,1 m', '127 t', 'transN, hors effectif CFF'],
        ['101–114', '14', '2020–2021', '73,5 m', '160 t', 'RER Vaud (FLIRT 3)'],
        ['501–511', '11', '2022–2024', '73,5 m (CFF : env. 75 m)', '160 t', '«Mouette», grandes lignes, 181 places assises']] },
        hinweis: 'Longueurs et poids selon passiontrain.ch, arrondis ; les poids y sont indiqués comme masse totale. Les affectations valent pour la mise en service et peuvent changer.' },
      { titel: 'Bien interpréter le nombre', p: ['Le chiffre publié de 209 englobe tous les FLIRT des CFF utilisés en trafic régional, y compris d’autres séries et versions.', 'Pour le seul RABe 523, les séries de numéros publiées 001–073, 101–114 et 501–511 donnent ensemble 98 véhicules. Il s’agit d’une déduction à partir des numéros, et non d’une indication officielle d’effectif des CFF.'] }
    ],
  bilder: ['RABe 523 001 à Muttenz', 'RABe 523 019', 'RABe 523 024 à Montreux', 'RABe 523 018 à Yverdon-les-Bains', 'RABe 523 038']
});

uebZug('rbde-560', {
  typ: 'Train navette régional',
  text: ['Le Domino est un train navette électrique pour le trafic régional et RER. Il associe des motrices et voitures-pilotes NPZ modernisées à une nouvelle voiture intermédiaire à plancher bas INOVA.', 'La désignation RBDe 560 concerne la motrice d’extrémité et non le train entier.'],
  kennzahlen: [['86', 'rames CFF'], ['140 km/h', 'vitesse maximale'], ['75 m', 'longueur'], ['172', 'places assises'], ['2009', 'première mise en service aux CFF']],
  daten: { 'Fahrzeugart': 'train navette électrique', 'Leistung': '1700 kW sur la RBDe 560', 'Gewicht': 'env. 146 t à vide', 'Niederflur': 'dans la voiture intermédiaire', 'Anzahl': '86 rames', 'In Betrieb seit': '2009 (première mise en service aux CFF)', 'Hersteller': 'Schindler Waggon, SWA, SIG, ABB et Bombardier (selon la voiture)', 'Status': 'en service' },
  specNote: 'Données de flotte, de capacité et d’utilisation selon les CFF. Valeurs techniques selon CFF Infrastructure. Le poids à vide est la somme des trois voitures.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les CFF possèdent 86 Domino. Les automotrices et les voitures-pilotes proviennent de la famille NPZ de Schindler Waggon, SWA, SIG et ABB ; Bombardier a livré les nouvelles voitures intermédiaires à plancher bas de type INOVA.', 'Il n’existe donc pas d’année de construction unique pour tout le train. Le premier Domino a circulé aux CFF en 2009.'] },
      { titel: 'Utilisation et technique', p: ['Les CFF utilisent le Domino surtout sur des lignes RER des cantons d’Argovie, de Lucerne, de Neuchâtel et de Vaud. L’attribution exacte aux lignes peut changer avec l’horaire.', 'Un train de trois voitures mesure 75 m, offre 172 places assises et roule jusqu’à 140 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Accès de plain-pied dans la voiture intermédiaire', 'Places pour fauteuils roulants et WC accessible', 'Sièges prioritaires', 'Prises en 1re classe', 'Places pour vélos, poussettes et bagages', 'Meilleure réception mobile'],
        p: ['Seule la voiture intermédiaire INOVA est à plancher bas ; l’automotrice et la voiture-pilote ont des marches.'] },
      { titel: 'Composants du train', tabelle: { kopf: ['Véhicule', 'Fonction', 'Longueur', 'Poids à vide', 'Traction'], zeilen: [
      ['RBDe 560', 'motrice d’extrémité', '25,0 m', '72,0 t', '1700 kW / 182 kN'],
      ['B INOVA', 'voiture intermédiaire à plancher bas', '24,4 m', '36,0 t', 'sans traction propre'],
      ['ABt', 'voiture-pilote 1re et 2e classe', '25,0 m', '38,0 t', 'sans traction propre']] } },
      { titel: 'Autres exploitants', tabelle: { kopf: ['Exploitant', 'Effectif', 'Longueur', 'Places assises', 'Particularités'], zeilen: [
      ['TPF', '14', '75 m', '184 (24 en 1re + 160 en 2e cl.)', '1650 kW ; 140 km/h ; RBDe 235–247 et 269'],
      ['RegionAlps', '16', '74,5 m', '188 (12 en 1re + 176 en 2e cl.)', '100 places debout ; 140 km/h ; St-Gingolph–Brigue']] },
      hinweis: 'Effectifs et capacités selon les TPF et RegionAlps. Les valeurs d’autres exploitants ne peuvent pas être transposées telles quelles aux rames CFF ; la puissance et la capacité diffèrent notamment.' },
      { titel: 'Remplacement', p: ['Les CFF acquièrent 198 FLIRT Evo pour remplacer progressivement les Domino et les FLIRT de première génération. La mise en service aux CFF commence en 2028 ; l’introduction régionale est prévue jusqu’en 2033.', 'RegionAlps a annoncé 27 FLIRT Evo, qui doivent remplacer les Domino et les NINA d’ici 2031.'] }
    ],
  bilder: ['Domino entre vignes et village au bord du lac', 'Domino dans la lumière d’automne', 'Deux Domino en unités multiples au-dessus du lac', 'Domino dans les terrasses de vignes', 'Domino au bord du lac', 'Domino en unités multiples dans le vignoble']
});

uebZug('re-460', {
  typ: 'Locomotive électrique universelle',
  text: ['La Re 460, souvent appelée « Loc 2000 », est une locomotive universelle à quatre essieux et haute puissance des CFF pour le trafic voyageurs rapide.', 'Elle est l’épine dorsale des grandes lignes en Suisse et tire notamment les trains à deux niveaux IC2000 ainsi que des compositions InterCity avec voitures unifiées.'],
  kennzahlen: [['119', 'locomotives CFF'], ['200 km/h', 'en exploitation · construite pour 230 km/h'], ['18,5 m', 'longueur'], ['6100 kW', 'puissance continue'], ['1992', 'première mise en service aux CFF']],
  daten: { 'Fahrzeugart': 'locomotive électrique universelle', 'Höchstgeschwindigkeit': '200 km/h en exploitation, construite pour 230 km/h', 'Leistung': '6100 kW en continu', 'Gewicht': '84 t en service', 'In Betrieb seit': '1992 (première mise en service aux CFF)', 'Anzahl': '119 locomotives', 'Status': 'en service (modernisée par le Refit)' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SLM et ABB ont développé la Re 460 au début des années 1990 pour le projet «Rail 2000». De 1992 à 1996, 119 locomotives ont été livrées aux CFF ; leur design marquant est signé Pininfarina.', 'Entre 2017 et 2022, les 119 locomotives ont toutes reçu un refit à l’atelier d’Yverdon-les-Bains : nouveaux convertisseurs, installation d’air comprimé, câblage et sièges de conduite renouvelés. Elles peuvent ainsi rouler jusque dans les années 2040.'] },
      { titel: 'Utilisation et technique', liste: ['Technique de traction triphasée, avec de nouveaux convertisseurs lors du refit', 'Caisse en acier avec faces avant en plastique renforcé de fibres de verre', 'Cabine de conduite étanche à la pression pour les tunnels à grande vitesse', 'Commande multiple pour les rames réversibles avec voiture-pilote', 'Frein à récupération qui renvoie du courant au réseau'],
        p: ['La Re 460 tire et pousse surtout des trains InterCity et InterRegio sur tout le réseau suisse à voie normale, le plus souvent avec des voitures à deux niveaux IC2000 ou des voitures unifiées IV. Elle roule jusqu’à 200 km/h.'] },
      { titel: 'Équipement et accessibilité', p: ['Ce que les voyageurs trouvent à bord dépend des voitures. Les voitures à deux niveaux IC2000 ont des accès à plancher bas, des places pour fauteuils roulants et un WC accessible ; les voitures unifiées IV ne sont pas à plancher bas. Les détails figurent sur les pages IC2000 et EW IV.'] },
      { titel: 'Composants du véhicule', tabelle: { kopf: ['Véhicule', 'Fonction', 'Longueur', 'Poids en service', 'Traction'], zeilen: [
      ['Re 460', 'locomotive électrique universelle', '18,5 m', '84,0 t', '6100 kW / 300 kN']] } },
      { titel: 'Autres exploitants et types apparentés', tabelle: { kopf: ['Exploitant / type', 'Effectif', 'Puissance', 'Vitesse maximale', 'Particularités'], zeilen: [
        ['BLS (Re 465)', '18', '6400 kW', '160 km/h (autorisée)', 'Locomotive sœur pour trains de voyageurs, de chargement des autos et de marchandises'],
        ['VR (Sr2)', '46', '6000 kW', '210 km/h', 'Variante à voie large (1524 mm) pour la Finlande'],
        ['NSB (El 18)', '22', '5400 kW', '200 km/h', 'Variante pour la Norvège']] } },
      { titel: 'Avenir et perspectives', p: ['Grâce au programme Refit, les locomotives sont techniquement aptes à environ 20 années de service supplémentaires. Elles devraient rester jusque dans les années 2040 l’épine dorsale des grandes lignes CFF tractées par locomotive.'] }
    ],
  bilder: ['Re 460 avec voitures unifiées au printemps', 'Re 460 avec voitures à deux niveaux IC2000 au-dessus du lac', 'Re 460 avec IC2000 entre champ et forêt', 'Re 460 avec IC2000 en été', 'Re 460 avec voitures unifiées tôt le matin', 'Re 460 « Swisstainable » avec IC2000', 'Re 460 « Swisstainable » avec voitures de train de nuit']
});

uebZug('rabe-503', {
  typ: 'Train pendulaire multisystème pour le trafic international',
  text: ['L’Astoro est un train pendulaire électrique multisystème de sept caisses de la famille Pendolino d’Alstom (ETR 610).', 'Les CFF l’engagent en trafic EuroCity entre l’Allemagne, la Suisse et l’Italie.'],
  kennzahlen: [['19', 'rames dans la flotte CFF'], ['200 km/h', 'en Suisse · construite pour 250 km/h'], ['2009', 'première mise en service aux CFF'], ['187,4 m', 'longueur']],
  daten: { 'Hersteller': 'Alstom (famille Pendolino, ETR 610)', 'Zugbildung': '7 voitures', 'Stromsystem': '15 kV et 25 kV CA, 3 kV CC', 'Gewicht': '418 t à vide (FOS), 466 t en charge', 'Höchstgeschwindigkeit': '250 km/h (véhicule), 200 km/h dans le type de marche suisse', 'Neigetechnik': 'active', 'Einsatz': 'EuroCity Allemagne–Suisse–Italie' },
  specNote: 'Les CFF indiquent 250 km/h comme vitesse maximale du véhicule ; le catalogue des types de marche retient 200 km/h pour le type suisse.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['L’Astoro appartient à la famille Pendolino d’Alstom (ETR 610). La flotte des CFF compte 19 trains : sept de la première acquisition et douze livrés plus tard. Le premier a circulé en 2009.'] },
      { titel: 'Utilisation et technique', p: ['L’Astoro circule sur l’axe nord-sud entre l’Allemagne, l’Autriche, la Suisse et l’Italie, surtout Genève–Brigue–Milan, Bâle–Berne–Brigue–Milan et Zurich–Munich.', 'Grâce à la technique pendulaire, il raccourcit les temps de parcours par le Simplon et vers Munich. Le train mesure 187 m, offre 402 places assises et atteint 250 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Restaurant', 'Zone famille', 'Wi-Fi', 'Prises pour fiches suisses et internationales', 'Amplificateur de signal mobile', 'Affichage électronique des réservations', 'Places pour vélos et bagages', 'Places pour fauteuils roulants et WC accessible', 'Sièges prioritaires et table à langer'],
        p: ['L’accès n’est pas à plancher bas. Des places pour fauteuils roulants et un WC accessible sont disponibles.'] },
      { titel: 'Rénovation', p: ['Depuis 2024, les CFF rénovent toute la flotte dans leur atelier de Bellinzone. L’intérieur, l’information voyageurs et les composants techniques sont révisés ; le programme doit durer jusqu’à fin 2027.'] }
    ],
  bilder: ['RABe 503 « Astoro » à Brigue', 'RABe 503 « Astoro » à quai', 'ETR 610 013 près de St-Saphorin au bord du Léman', 'ETR 610 « Astoro » en route', 'ETR 610 006 en EC 50 à Domodossola']
});

uebZug('re-450', {
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SLM et ABB ont construit les 115 Re 450 pour les trains navettes à deux niveaux (DPZ) du RER zurichois. Les voitures à deux niveaux ont été livrées par SLM et Schindler Waggon ; le premier DPZ a circulé en 1989, un an avant le lancement du RER en mai 1990.', 'Au total, 115 rames ont été construites jusqu’en 1998. 113 circulent aujourd’hui aux CFF ; deux ont été reprises en 2008 par le Sihltal Zürich Uetliberg Bahn (SZU). Les rames ont été rénovées de 2011 à 2018.'] },
      { titel: 'Utilisation et technique', p: ['Les DPZ forment l’épine dorsale du RER zurichois et peuvent circuler sur presque tout le réseau du ZVV. Un train mesure 98,8 m, offre 345 places assises et roule jusqu’à 130 km/h.', 'Une rame comprend la Re 450, des voitures à deux niveaux et une voiture-pilote, si bien qu’il ne faut pas déplacer la locomotive au terminus.'] },
      { titel: 'Équipement et accessibilité', liste: ['Climatisation', 'Système d’information à la clientèle', 'Prises en 1re classe', 'Amplificateur de signal mobile', 'Compartiment multifonction avec places pour vélos', 'Places pour poussettes', 'Accès de plain-pied dans la voiture à plancher bas (NDW)', 'Places pour fauteuils roulants et WC accessible', 'Sièges prioritaires'],
        p: ['Les personnes en fauteuil roulant montent sans marche dans la voiture à plancher bas NDW, intégrée aux rames.'] }
    ],
  typ: 'Locomotive des trains navettes à deux niveaux',
  text: ['La Re 450 tire et pousse les trains navettes à deux niveaux (DPZ) du RER zurichois.', 'Les trains navettes se composent de la locomotive, de voitures à deux niveaux et d’une voiture-pilote.'],
  daten: { 'Einsatz': 'RER zurichois', 'Anzahl': '115 construites, dont 113 aux CFF et 2 au SZU' },
  bilder: ['Re 450 021 avec la S24 à Zurich HB', 'Re 450 059 à Zurich HB', 'Re 450 033 à Turgi, 1993', 'Re 450 022 à Niederweningen, 1991', 'Re 450 avec la S5 sur la digue de Rapperswil']
});

uebZug('rabe-512', {
  typ: 'Rame InterRegio à deux niveaux de six caisses (Stadler KISS)',
  text: ['Le RABe 512 est une rame automotrice à deux niveaux de six caisses de la famille Stadler KISS.', 'Il associe la plateforme éprouvée du RABe 511 à un aménagement intérieur conçu pour le trafic InterRegio.'],
  kennzahlen: [['60', 'rames commandées'], ['466', 'places assises'], ['160 km/h', 'vitesse maximale'], ['2023', 'première mise en service']],
  daten: { 'Zugbildung': '6 voitures', 'Gewicht': '299 t à vide, 382 t en charge', 'Anzahl': '60 commandées', 'In Betrieb seit': 'juillet 2023' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['En 2021, les CFF ont commandé 60 nouveaux IR-Dosto à Stadler. Le premier service commercial a eu lieu en juillet 2023 ; la livraison complète doit être achevée fin 2026.'] },
      { titel: 'Utilisation et technique', p: ['Les trains assurent des services InterRegio et RegioExpress dans la région de Zurich, sur le Plateau et en Suisse romande.', 'Un train mesure 150 m, offre 466 places assises et roule jusqu’à 160 km/h. Il peut circuler en unité multiple avec les IR-Dosto RABe 511 revalorisés.'] },
      { titel: 'Équipement et accessibilité', liste: ['Accès à plancher bas de plain-pied', 'Places pour fauteuils roulants et WC accessible', 'Sièges prioritaires', 'Prises électriques', 'Fenêtres améliorant la réception mobile', 'Information voyageurs moderne', 'Sièges 2+1 en 1re classe', 'Huit places pour vélos à deux endroits, avec recharge pour vélos électriques', 'Places pour poussettes et bagages, table à langer'],
        p: ['Grâce aux accès de plain-pied, la montée est sans obstacle aux quais adaptés. Une zone famille et une zone business sont en cours de réalisation.'] }
    ],
  bilder: ['IR-Dosto RABe 512 à Zurich HB', 'RABe 512 IR-Dosto en route', 'RABe 512 IR-Dosto', 'Étage supérieur de 2e classe du RABe 512', 'Avant du RABe 512']
});

uebZug('rabe-520', {
  typ: 'GTW Stadler étroit pour la ligne du Seetal',
  text: ['Le RABe 520 est une automotrice articulée électrique développée spécialement pour le gabarit étroit de la ligne du Seetal.', 'Son module de traction central et sa caisse de seulement 2,65 m de large environ le distinguent nettement des autres trains régionaux des CFF.'],
  kennzahlen: [['17', 'rames acquises à l’origine'], ['115 km/h', 'vitesse maximale'], ['2002/03', 'années de construction'], ['53,5 m', 'longueur']],
  daten: { 'Breite': 'env. 2,65 m (gabarit du Seetal)', 'Gewicht': '78 t à vide (FOS), 105 t en charge', 'Anzahl': '17 acquises', 'Einsatz': 'ligne du Seetal Lucerne–Lenzbourg' },
  specNote: 'Deux unités sont ensuite passées à Thurbo ; le chiffre de 17 désigne l’acquisition d’origine et pas forcément l’effectif CFF actuel.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler a livré ces automotrices articulées GTW dès 2002 ; 17 véhicules numérotés 520 000–016 ont été acquis. Les CFF en indiquent aujourd’hui 15 dans leur aperçu.', 'De 2018 à 2021, les véhicules ont été modernisés.'] },
      { titel: 'Utilisation et technique', p: ['Leur principal domaine est la ligne du Seetal Lucerne–Lenzbourg ; aux heures de pointe, deux trains circulent couplés.', 'Le train de trois éléments avec module central motorisé mesure 53,5 m, offre 124 places assises et roule jusqu’à 115 km/h. Sa caisse étroite augmente la distance avec la route parallèle.'] },
      { titel: 'Équipement et accessibilité', liste: ['Cinq portes par côté pour les quais bas du Seetal (35 cm au-dessus du rail)', 'Une porte pour les quais standard (55 cm)', 'Une place pour fauteuil roulant par train', 'Sièges prioritaires', 'Places pour vélos, poussettes et bagages', 'Fenêtres améliorant la réception mobile'],
        p: ['Les personnes en fauteuil roulant peuvent monter de manière autonome dans toutes les gares de la ligne du Seetal.'] }
    ],
  bilder: ['RABe 520 « GTW » à Beinwil am See', 'RABe 520 dans le Seetal près de Seengen', 'RABe 520 de la ligne du Seetal à Lenzbourg, 2003', 'RABe 520 au passage à niveau de Beinwil am See', 'RABe 520 en S28 près de Hunzenschwil']
});

uebZug('rabe-521', {
  typ: 'FLIRT monocourant homologué en Suisse et en Allemagne',
  text: ['Le RABe 521 est un FLIRT de quatre caisses pour les liaisons régionales transfrontalières entre le nord-ouest de la Suisse et l’Allemagne.', 'Il constitue une part importante du RER trinational de Bâle et circule aussi sur le Seehas.'],
  kennzahlen: [['39', 'rames'], ['160 km/h', 'vitesse maximale'], ['2005', 'première mise en service voyageurs'], ['74,08 m', 'longueur']],
  daten: { 'Zugbildung': '4 voitures', 'Gewicht': '120 t à vide, 152 t en charge', 'Leistung': '2656 kW (valeur du type de marche FOS)', 'Nummern': '521 001–030 et 201–209', 'Einsatz': 'RER de Bâle, Seehas, Suisse–Allemagne' },
  specNote: 'Le catalogue des types de marche des CFF regroupe sous ce type d’autres variantes FLIRT à quatre caisses techniquement proches ; la puissance est donc indiquée comme valeur du type.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler a développé la plateforme FLIRT à l’origine pour les CFF. La série RABe 521 compte 30 véhicules numérotés 521 001–030 et neuf autres 521 201–209, soit 39 trains. Les livraisons ont commencé mi-2005 ; les premiers sont entrés en service voyageurs la même année. Les neuf véhicules 521 201–209 pour le Seehas ont suivi.'] },
      { titel: 'Utilisation et technique', p: ['Les RABe 521 circulent surtout sur le RER trinational de Bâle et sur des liaisons transfrontalières vers l’Allemagne.', 'Des attelages automatiques permettent l’unité multiple avec des FLIRT compatibles. Les FLIRT des CFF roulent jusqu’à 160 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Accès à plancher bas', 'Places pour fauteuils roulants et WC accessible', 'Sièges prioritaires', 'Prises en 1re classe', 'Espaces multifonctions pour vélos et poussettes', 'Porte-bagages'],
        p: ['Les accès bas et les espaces multifonctions accélèrent l’échange des voyageurs. Ces indications valent pour la famille FLIRT des CFF.'] }
    ],
  bilder: ['RABe 521 « FLIRT »', 'RABe 521 en S3 pour Olten à Porrentruy', 'FLIRT sur le pont de la Gäubahn à Olten', 'FLIRT sur le pont de l’Aar près d’Olten', 'Intérieur du RABe 521 « Express-Hase »']
});

uebZug('rabe-522', {
  typ: 'FLIRT bicourant pour la France',
  text: ['Le RABe 522 est un FLIRT bicourant de quatre caisses pour les liaisons entre la Suisse et la France.', 'Les véhicules sont adaptés au réseau français en 25 kV et circulent surtout dans les régions de Genève et de Bâle.'],
  kennzahlen: [['32', 'rames de la série 201–232'], ['160 km/h', 'vitesse maximale'], ['2011', 'mise en service de la série actuelle'], ['75,0 m', 'longueur']],
  daten: { 'Zugbildung': '4 voitures', 'Stromsystem': '15 kV 16,7 Hz et 25 kV 50 Hz CA', 'Gewicht': '135 t à vide, 167 t en charge', 'Einsatz': 'Léman Express, trafic régional de Bâle' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['La série vient de Stadler et compte 32 véhicules numérotés 522 201–232 ; le premier RABe 522 a circulé en 2011.', 'Une première série de douze véhicules portait les numéros 522 001–012. Comme ces trains n’avaient d’abord pas reçu d’homologation française, ils ont ensuite été transformés en RABe 523.'] },
      { titel: 'Utilisation et technique', p: ['Les RABe 522 circulent notamment sur le réseau Léman Express et sur des liaisons régionales frontalières autour de Bâle et dans le Jura.', 'Comme les autres FLIRT, ils ont une traction électrique répartie et des attelages automatiques pour l’unité multiple.'] },
      { titel: 'Équipement et accessibilité', liste: ['Larges accès à plancher bas', 'Places pour fauteuils roulants et WC accessible', 'Sièges prioritaires', 'Prises en 1re classe', 'Espaces multifonctions pour vélos et poussettes'],
        p: ['Ces indications valent pour la famille FLIRT des CFF ; les détails varient selon la version.'] }
    ],
  bilder: ['RABe 522 209 à Delle', 'RABe 522 à Noiraigue', 'RABe 522 221 dans la livrée Léman Express à Annemasse', 'RABe 522 231 à Genève', 'RABe 522 213 à Genève-Cornavin']
});

uebZug('rabe-524', {
  typ: 'FLIRT multisystème pour TILO',
  text: ['Les RABe 524 sont des rames FLIRT de quatre et six caisses pour le trafic régional transfrontalier entre le Tessin et la Lombardie.', 'Elles peuvent circuler sous le courant alternatif suisse et sous le courant continu italien.'],
  kennzahlen: [['53', 'rames chez TILO'], ['160 km/h', 'vitesse maximale'], ['2007', 'première mise en service'], ['4 / 6', 'voitures par rame']],
  daten: { 'Zugbildung': '4 ou 6 voitures', 'Stromsystem': '15 kV 16,7 Hz CA et 3 kV CC', 'Länge': '74,1 m (4 caisses), 106,3 m (6 caisses), 104,9 m (FLIRT TSI)', 'Gewicht': '133 t (4 caisses), 174 t (6 caisses), 179 t (FLIRT TSI)', 'Anzahl': '53 (23 à quatre caisses, 17 à six caisses, 13 FLIRT TSI)', 'In Betrieb seit': '2007 (construits de 2006 à 2021)', 'Einsatz': 'TILO, Tessin–Lombardie' },
  specNote: 'Longueur et poids à vide de chaque variante selon le catalogue des types de marche des CFF. FLIRT TSI désigne la version plus récente à six caisses, conforme aux STI (RABe 524.3).',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler a construit les 53 véhicules en service entre 2006 et 2021 : 23 à quatre caisses, 17 à six caisses et 13 FLIRT TSI (RABe 524.3). Les premiers ont circulé en 2007.', 'Les FLIRT TSI plus récents ont été acquis pour développer l’offre transfrontalière.'] },
      { titel: 'Utilisation et technique', p: ['La série marque le réseau TILO au Tessin et en Lombardie, jusqu’à Milan. Selon la ligne circulent des trains à quatre ou six caisses.', 'La technique polycourant permet des liaisons directes à travers la frontière sans changer de véhicule.'] },
      { titel: 'Équipement et accessibilité', liste: ['Accès à plancher bas', 'Places pour fauteuils roulants et WC accessible', 'Sièges prioritaires', 'Prises en 1re classe', 'Places pour vélos, poussettes et bagages'],
        p: ['Ces indications valent pour la famille FLIRT des CFF ; les détails varient selon la version.'] },
      { titel: 'Variantes', tabelle: { kopf: ['Variante', 'Nombre', 'Longueur', 'Poids à vide'], zeilen: [
      ['RABe 524, quatre caisses', '23', '74,1 m', '133 t'],
      ['RABe 524, six caisses', '17', '106,3 m', '174 t'],
      ['RABe 524.3, FLIRT TSI', '13', '104,9 m', '179 t']] } }
    ],
  bilder: ['RABe 524 008 à Milano Centrale', 'RABe 524 303 dans la nouvelle livrée TILO à Milano Centrale', 'RABe 524 à Capolago-Riva San Vitale', 'RABe 524 à Milano Cadorna', 'RABe 524 012 en S20 à Locarno', 'RABe 524 014 avec publicité pour « Rete Tre » à Maccagno']
});

uebZug('ic2000', {
  beiname: 'Voitures à deux niveaux',
  typ: 'Train navette grandes lignes à deux niveaux',
  text: ['L’IC2000 est une famille de voitures voyageurs et de voitures-pilotes à deux niveaux.', 'Avec la Re 460, les voitures forment des trains navettes performants pour le trafic InterCity et InterRegio ; après leur rénovation complète, on les appelle aussi IC2020.'],
  kennzahlen: [['341', 'voitures'], ['200 km/h', 'vitesse maximale'], ['1997', 'première mise en service'], ['26,8 m', 'longueur par voiture']],
  daten: { 'Fahrzeugart': 'voiture voyageurs à deux niveaux', 'Hersteller': 'consortium Schindler (Schindler Waggon, FIAT-SIG, ABB/Adtranz)', 'Länge': '26,8 m par voiture', 'Gewicht': '47 t à vide (type FOS), 60 t en charge', 'Sitzplätze': 'jusqu’à 86 par voiture (1re classe), jusqu’à 126 par voiture (2e classe)', 'Wagenübergang': 'à l’étage supérieur', 'Antrieb': 'aucun, avec Re 460', 'Anzahl': '341 voitures' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les 341 voitures à deux niveaux ont été livrées dès 1997 en plusieurs séries. Les caisses ont été construites par Schindler Waggon, les bogies par FIAT-SIG et l’équipement électrique par ABB/Adtranz.', 'La famille comprend des voitures de 1re et de 2e classe ainsi que des voitures de service, voitures-restaurants et voitures-pilotes. De fin 2019 à l’été 2025, les CFF ont modernisé toutes les voitures.'] },
      { titel: 'Utilisation et technique', p: ['Les compositions circulent en InterCity et InterRegio sur d’importants axes est-ouest et nord-sud, le plus souvent avec une Re 460. Un train offre plus de 900 places assises et roule jusqu’à 200 km/h.', 'Une voiture mesure 26,8 m et offre jusqu’à 86 places en 1re ou 126 en 2e classe.'] },
      { titel: 'Équipement et accessibilité', liste: ['Climatisation complète', 'Prises en 1re et 2e classe', 'Sièges 2+1 en 1re classe', 'Fenêtres améliorant la réception mobile', 'Compartiments famille, zone de silence et zone business (InterCity seulement)', 'Restaurant ou bistro (InterCity)', 'Places pour vélos, poussettes et bagages', 'Accès à plancher bas', 'Places pour fauteuils roulants et WC accessible', 'Sièges prioritaires'],
        p: ['Grâce aux accès à plancher bas, les personnes en fauteuil roulant montent de plain-pied aux quais adaptés.'] }
    ],
  bilder: ['Train navette IC2000 dans le paysage', 'Re 460 avec voitures à deux niveaux IC2000', 'Re 460 en tête de voitures à deux niveaux IC2000', 'Passage entre une voiture à un niveau et une voiture IC2000', 'Voiture-pilote IC2000 à Romanshorn']
});

uebZug('ew-iv', {
  beiname: 'Voiture unifiée IV',
  typ: 'Voiture grandes lignes climatisée',
  text: ['La voiture unifiée IV, ou EW IV, est la dernière génération de voitures unifiées suisses.', 'Ces voitures tractées ont été développées pour le trafic InterCity et circulent aujourd’hui en trains navettes ainsi qu’avec des voitures EuroCity assorties.'],
  kennzahlen: [['496', 'à l’origine pour les CFF'], ['200 km/h', 'vitesse maximale'], ['1981', 'première mise en service'], ['26,4 m', 'longueur par voiture']],
  daten: { 'Fahrzeugart': 'voiture voyageurs', 'Betreiber': 'CFF Voyageurs', 'Länge': '26,4 m par voiture', 'Gewicht': '45 t à vide (type FOS), 50 t en charge', 'Steuerwagen': 'IC Bt EW IV, 48 t à vide', 'Antrieb': 'aucun, avec locomotive séparée', 'Anzahl': '540 construites, dont 496 pour les CFF' },
  specNote: 'Le chiffre de 496 est une valeur historique et non l’effectif actuel : ventes, transformations et retraits ont réduit la flotte.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les voitures unifiées IV ont été construites par SIG, SWS, SWP et SWA. Les 40 premières voitures climatisées de 1re classe sont arrivées en 1981 ; 540 ont été construites au total, dont 496 pour les CFF. Les voitures EuroCity ont suivi en 1989, les voitures-pilotes en 1997.', 'Entre 2019 et 2025, les CFF ont remis en état plus de 250 voitures EW IV et EuroCity : protection anticorrosion, nouvelle peinture et fenêtres laissant passer le signal mobile. Les voitures-pilotes sont modernisées jusqu’à fin 2027.'] },
      { titel: 'Utilisation et technique', p: ['Les voitures circulent en compositions EC, IC et IR, le plus souvent avec une Re 460 et une voiture-pilote. Les axes typiques vont de Genève à Brigue, de Bâle à Lugano et de Zurich par Olten à Berne. Les voitures unifiées IV classiques circulent aujourd’hui surtout en Suisse ; à l’international, ce sont surtout les voitures EuroCity des CFF qui circulent, aussi dans des trains de jour et de nuit.', 'Une voiture mesure 26,4 m et est autorisée à 200 km/h ; elle offre 60 places en 1re ou jusqu’à 86 en 2e classe.'] },
      { titel: 'Équipement et accessibilité', liste: ['Prises électriques', 'Zone famille', 'Zone de silence en 1re classe (InterCity)', 'Voiture-restaurant (EuroCity)', 'Places pour vélos et voitures à vélos dédiées', 'Places pour fauteuils roulants et WC accessible', 'Sièges prioritaires'],
        p: ['Les voitures ne sont pas à plancher bas. Des places pour fauteuils roulants et un WC accessible sont disponibles.'] }
    ],
  bilder: ['Voiture-pilote EW IV à Bellinzone', 'InterRegio avec EW IV à Zurich HB', 'Gotthard-Weekender avec EW IV à Brugg', 'Intérieur de 1re classe d’une EW IV', 'Voiture EW IV de 2e classe à Montreux']
});

/* ---- 21-cargo.js ---- */
/* Français – CFF Cargo */
uebZug('re-482', {
  typ: 'Locomotive électrique pour trains de marchandises',
  text: ['La Re 482 est une locomotive électrique pour trains de marchandises de la famille Bombardier TRAXX.', 'Elle a été acquise pour le trafic en Suisse et en Allemagne ; une partie de la seconde série dispose d’un équipement supplémentaire pour l’Autriche.'],
  kennzahlen: [['50', '35 Re 482.1 et 15 Re 482.2'], ['5600 kW', 'puissance maximale'], ['140 km/h', 'vitesse maximale'], ['2002', 'début des livraisons']],
  daten: { 'Stromsystem': '15 kV 16,7 Hz et 25 kV 50 Hz', 'Gewicht': '84 t à vide', 'Baureihen': 'Re 482.1 et Re 482.2', 'Einsatz': 'trafic marchandises Suisse, Allemagne, en partie Autriche' },
  specNote: 'Les 50 véhicules proviennent de l’aperçu historique de la flotte de CFF Cargo ; il n’en découle pas d’effectif actuel pour 2026.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Bombardier Transportation a livré les Re 482 à CFF Cargo dès 2002. Elles font partie de la famille TRAXX.', 'L’aperçu de la flotte distingue 35 Re 482.1 et 15 Re 482.2, soit 50 locomotives. L’équipement et les paquets nationaux diffèrent selon la série.'] }, { titel: 'Utilisation et technique', p: ['Les locomotives ont repris des trains de marchandises internationaux vers l’Allemagne et en partie l’Autriche, ainsi que des services en trafic marchandises suisse.', 'Des systèmes de sécurité pour la Suisse et l’Allemagne permettent de franchir la frontière sans changer de locomotive.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Deux systèmes de courant : 15 kV 16,7 Hz et 25 kV 50 Hz', 'Contrôle de la marche des trains pour la Suisse et l’Allemagne, sur une partie de la deuxième série aussi pour l’Autriche'], p: ['La Re 482 est une locomotive marchandises et n’a pas de compartiment voyageurs.'] }],
  bilder: ['Re 482 007 à Köln-Kalk Nord', 'Re 482 023 de CFF Cargo avec un train de marchandises près d’Erbach (Rheingau)', 'Re 482 avec un train de marchandises devant un pont ferroviaire', 'Re 482 005 de CFF Cargo à Eschweiler', 'Re 482 005']
});

uebZug('re-484', {
  typ: 'Locomotive électrique bicourant',
  text: ['La Re 484 est une locomotive électrique bicourant pour le trafic marchandises entre la Suisse et l’Italie.', 'Bombardier l’a développée sur la base de la plateforme TRAXX.'],
  kennzahlen: [['21', 'locomotives acquises'], ['5600 kW', 'puissance maximale'], ['140 km/h', 'vitesse maximale'], ['2004–2006', 'livraison']],
  daten: { 'Stromsystem': '15 kV CA et 3 kV CC', 'Gewicht': '86 t à vide', 'In Betrieb seit': '2004–2006 (livraison)', 'Einsatz': 'Suisse et Italie' },
  specNote: 'Le catalogue des types de marche des CFF utilise 86 t ; une littérature plus ancienne indique parfois 85,4 t. La valeur officielle de 2026 est retenue ici.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['CFF Cargo a acquis 21 Re 484 de la famille TRAXX auprès de Bombardier Transportation. Elles ont été livrées de 2004 à 2006.'] }, { titel: 'Utilisation et technique', p: ['La Re 484 était destinée au trafic marchandises international Suisse–Italie ; plus tard, elle a aussi circulé en trafic intérieur suisse.', 'La locomotive circule sous le courant alternatif suisse et le courant continu italien. Le contrôle de la marche des trains propre à chaque pays permet de franchir la frontière sans changer de locomotive.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Deux systèmes de courant : 15 kV alternatif et 3 kV continu', 'Contrôle de la marche des trains pour la Suisse et l’Italie'], p: ['La Re 484 est une locomotive marchandises et n’a pas de compartiment voyageurs.'] }],
  bilder: ['Re 484 006 de CFF Cargo à Steinen', 'Re 484 018 de CFF Cargo', 'Re 484 012 avec publicité à Singen (Hohentwiel)', 'Re 484 003', 'Re 484 020 avec un EuroCity à Zurich HB']
});

uebZug('re-420', {
  typ: 'Locomotive universelle à quatre essieux',
  text: ['La Re 420, autrefois Re 4/4 II, compte parmi les locomotives électriques suisses les plus marquantes. Elle a tracté des trains voyageurs rapides, des trains de marchandises et des trains navettes.', 'La série a été construite en plusieurs lots sur de nombreuses années ; c’est pourquoi la forme de la face avant et la longueur varient selon les séries.'],
  kennzahlen: [['276', 'construites pour les CFF'], ['4700 kW', 'puissance max.'], ['140 km/h', 'vitesse maximale'], ['1964–1985', 'mises en service']],
  daten: { 'Achsfolge': 'Bo′Bo′, 4 essieux moteurs', 'Länge': 'env. 14,8–15,5 m hors tampons *', 'Gewicht': 'env. 80–85 t en service *', 'Leistung': '4650 kW, puissance unihoraire à la jante **', 'Elektrische Bremse': 'récupération', 'In Betrieb seit': '1964 (dernière série 1985)', 'Anzahl': '276 Re 4/4 II (nombre construit pour les CFF)', 'Hersteller': 'partie mécanique SLM Winterthour ; partie électrique BBC, MFO et SAAS' },
  specNote: '* Selon le lot de construction et les transformations. ** Valeur pour la loc 11108 décrite par SBB Historic ; CFF Infrastructure indique 4700 kW comme puissance maximale pour le type de marche Re 420.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['En 1964, les CFF ont reçu six prototypes, suivis de plusieurs séries jusqu’en 1985. SLM à Winterthour a construit la partie mécanique, l’électricité venait de BBC, MFO et SAAS.', 'La variante Re 421 est issue de transformations pour l’Allemagne ; 30 locomotives ont été modernisées en 2011–2016 sous le nom «LION» pour les trains de renfort du RER zurichois.'],
        hinweis: 'Effectif : CFF Historic indique 276 Re 4/4 II acquises pour les CFF, un ancien magazine Cargo 277 locomotives livrées. Cette page suit CFF Historic ; aucun des deux chiffres n’est un effectif actuel.' }, { titel: 'Utilisation et technique', p: ['La Re 4/4 II a circulé en trafic voyageurs et marchandises, notamment en tête de trains rapides en plaine et sur les accès au Gothard et au Simplon. Une partie est passée à CFF Cargo, qui cite toujours la Re 420 dans son offre de location en Suisse.', 'Les quatre moteurs de traction sont commandés par un graduateur. La commande multiple permet aussi la marche avec une Re 6/6 en «Re 10/10».'] }, { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Commande multiple, aussi avec une Re 6/6 en « Re 10/10 »', 'Frein électrique à récupération'], p: ['Comme locomotive, la Re 420 n’a pas de compartiment voyageurs. En tête de trains voyageurs, l’accessibilité dépend des voitures.'] }],
  bilder: ['« Re 10/10 » : Re 620 et Re 420 en tête d’un train de marchandises', 'Re 420 331-1 en automne', 'Re 420 de WRS avec un train de bois', 'Re 420 de CFF Cargo avec un train de marchandises', 'Re 420 avec des wagons jaunes dans les vignes au bord du lac', 'Re 420 avec un train de marchandises entre vignes et champs', 'Re 420 en livrée bleue avec des wagons-citernes en gare de triage']
});

uebZug('re-620', {
  typ: 'Locomotive de ligne à six essieux',
  text: ['La Re 620, autrefois Re 6/6, a été développée pour les trains voyageurs et marchandises lourds sur les lignes du Saint-Gothard et du Simplon.', 'Ses trois bogies à deux essieux allient un effort de traction élevé à l’autorisation pour les vitesses en courbe plus élevées de la catégorie de train R.'],
  kennzahlen: [['89', 'locomotives construites'], ['7832 kW', 'puissance unihoraire à la jante'], ['140 km/h', 'vitesse maximale'], ['1972–1980', 'période de construction']],
  daten: { 'Achsfolge': 'Bo′Bo′Bo′, 6 essieux moteurs', 'Länge': '19,31 m hors tampons', 'Gewicht': '120 t en service', 'Leistung': '7244 kW en continu à la jante (7832 kW unihoraire)', 'Elektrische Bremse': 'récupération', 'In Betrieb seit': '1972 ; série 1975–1980', 'Hersteller': 'partie mécanique SLM Winterthour ; électrique et montage BBC, en partie SAAS' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Quatre prototypes sont apparus en 1972 ; de 1975 à 1980 ont suivi 85 locomotives de série, soit 89 au total (11601–11689). SLM a construit la caisse et le châssis, BBC a fourni l’équipement électrique.', 'Le montage final a eu lieu surtout chez BBC à Oerlikon, pour les numéros 11635–11654 chez SAAS à Genève. Les deux premiers prototypes avaient une caisse en deux parties.'],
        hinweis: 'Le nombre 89 désigne la série construite historiquement, pas l’effectif actuellement en service.' }, { titel: 'Utilisation et technique', p: ['Les locomotives ont d’abord tiré de lourds trains de voyageurs et de marchandises. En commande multiple avec une Re 4/4 II ou III, elles formaient la «Re 10/10» pour les trains de marchandises lourds. Après la division des CFF, elles sont passées à CFF Cargo, qui propose toujours la Re 620 à la location.', 'Dès 2007, 63 locomotives ont reçu l’ETCS niveau 2. CFF Historic situe le début des retraits liés à l’âge en février 2021.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Commande multiple avec une Re 4/4 II ou III en « Re 10/10 »', 'Frein électrique à récupération', 'ETCS Level 2 sur 63 locomotives (dès 2007)'], p: ['Comme locomotive, la Re 620 n’a pas de compartiment voyageurs. En tête de trains voyageurs, l’accessibilité dépendait des voitures.'] }],
  bilder: ['Re 620 aux couleurs Cargo avec des wagons-citernes au bord du lac', '« Re 10/10 » : Re 620 et Re 420 en tête d’un train de marchandises', 'Re 620 aux couleurs Cargo avec des wagons-silos', 'Re 620 avec un train de wagons-citernes', 'Re 620 avec un train de travaux, des vaches au premier plan', 'Re 620 aux couleurs Cargo en gare', 'Re 620 avec un train de wagons-citernes']
});

uebZug('re-474', {
  typ: 'Locomotive électrique bicourant',
  text: ['La Re 474 est une locomotive électrique bicourant de la famille Siemens ES64F4 (Eurosprinter).', 'CFF Cargo l’a acquise pour les trains de marchandises transfrontaliers entre la Suisse et l’Italie.'],
  kennzahlen: [['12', 'reprises par CFF Cargo'], ['6400 kW', 'puissance maximale'], ['140 km/h', 'vitesse maximale'], ['2005', 'début du service chez CFF Cargo']],
  daten: { 'Stromsystem': '15 kV CA et 3 kV CC', 'Gewicht': '87 t à vide', 'Fahrzeugnummern': 'Re 474 001–018, dont 12 reprises', 'Einsatz': 'trafic marchandises Suisse–Italie' },
  specNote: 'La série de numéros comporte des lacunes, car CFF Cargo n’a repris que douze locomotives de la série initialement prévue.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Siemens a construit la Re 474 comme locomotive bicourant de la famille ES 64 F4. CFF Cargo a utilisé dès 2005 douze locomotives ; ce nombre n’est pas un effectif confirmé pour octobre 2026.'] }, { titel: 'Utilisation et technique', p: ['Les locomotives ont circulé en trafic marchandises Suisse–Italie, notamment par le Simplon jusqu’à Domodossola.', 'La Re 474 relie le réseau suisse à courant alternatif au réseau italien à courant continu 3 kV. L’équipement polycourant et les systèmes nationaux de sécurité permettaient de franchir la frontière sans arrêt.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Deux systèmes de courant : 15 kV alternatif et 3 kV continu', 'Contrôles nationaux de la marche des trains pour la Suisse et l’Italie'], p: ['La Re 474 est une locomotive marchandises et n’a pas de compartiment voyageurs.'] }],
  bilder: ['Re 474 013', 'Re 474 près de Jestetten sur la ligne de Neuhausen', 'Re 474 014 à Domodossola', 'Re 474 avec un train de marchandises à Gravellona Toce']
});

uebZug('re-193', {
  bilder: ['Re 193 avec un train de marchandises au bord du lac de Bienne près de Gléresse', 'Re 193 avec des wagons jaunes à parois coulissantes', 'Re 193 avec un train de marchandises mixte près de Gléresse', 'Re 193 et Re 420 en double traction près de Gléresse'],
  typ: 'Siemens Vectron AC en location pour le trafic marchandises intérieur',
  text: ['Depuis fin 2024, CFF Cargo utilise des locomotives Siemens Vectron de la série 193.', 'Les 35 véhicules sont loués pour huit ans et font la transition jusqu’à la livraison des nouvelles locomotives de ligne propres.'],
  kennzahlen: [['35', 'locomotives louées'], ['8 ans', 'contrat de location et d’entretien'], ['120 km/h', 'autorisation en Suisse'], ['2024', 'livraison et mise en service']],
  daten: { 'Leistung': 'jusqu’à 6400 kW', 'Länge': 'environ 19,0 m', 'Gewicht': 'environ 90 t, selon l’équipement', 'Höchstgeschwindigkeit': '120 km/h en Suisse', 'Zugsicherung': 'ETCS BL3 et systèmes nationaux', 'Betreiber': 'CFF Cargo SA', 'Anzahl': '35 louées' },
  specNote: 'Les locomotives n’appartiennent pas aux CFF. Le nombre et la durée de location se rapportent au contrat de CFF Cargo Suisse.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['CFF Cargo loue pour huit ans 35 Vectron AC de Siemens Mobility ; les locomotives appartiennent à LokRoll 3 AG. Les cinq premières sont arrivées à Muttenz en 2024.', 'Cette page traite des 35 Vectron AC de CFF Cargo Suisse. Les Vectron polycourant de CFF Cargo International relèvent d’autres contrats d’acquisition et de leasing.'] }, { titel: 'Utilisation et technique', p: ['Leur tâche principale est le trafic marchandises intérieur suisse, jusqu’à la livraison des nouvelles locomotives de ligne propres. Des homologations existent aussi pour des services transfrontaliers.', 'Les locomotives développent jusqu’à 6400 kW et roulent en Suisse jusqu’à 120 km/h. Environ 550 mécaniciennes et mécaniciens ont été formés.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Contrôle de la marche des trains ETCS Baseline 3 et systèmes nationaux', 'Homologations aussi pour le trafic transfrontalier'], p: ['La Re 193 est une locomotive marchandises et n’a pas de compartiment voyageurs.'] }]
});

uebZug('re-421', {
  beiname: 'Re 4/4 II pour l’Allemagne',
  typ: 'Locomotive électrique universelle pour le trafic transfrontalier',
  text: ['La Re 421 est la variante de la Re 4/4 II des CFF transformée pour circuler en Allemagne.', 'Entre 2002 et 2004, 26 locomotives de la dernière série ont été transformées ; elles ont reçu la nouvelle désignation Re 421 et la livrée Cargo rouge et bleue.'],
  kennzahlen: [['26', 'locomotives transformées'], ['4700 kW', 'puissance maximale'], ['140 km/h', 'vitesse maximale'], ['255 kN', 'effort de traction au démarrage']],
  daten: { 'Bauart': 'locomotive électrique universelle', 'Gewicht': '84 t (valeur du catalogue des types de marche)', 'Nummern': '421 371–397 (sans 382)', 'In Betrieb seit': '2002 (transformation 2002–2004)', 'Einsatz': 'trafic marchandises Suisse–Allemagne' },
  specNote: 'Le catalogue des types de marche 2026 des CFF mentionne la Re 421 comme alias du type de marche actif 1051 Re 420. Les 84 t sont une valeur de dynamique de marche pour ce type regroupé.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les Re 421 sont des Re 4/4 II transformées, construites par SLM, BBC, MFO et SAAS. Elles proviennent des numéros 11371 à 11397 ; la 11382, retirée après un incendie, ne faisait pas partie du programme, d’où 26 locomotives.', 'La transformation a eu lieu de 2002 à 2004. Les locomotives ont reçu les numéros 421 371 à 421 397.'] }, { titel: 'Utilisation et technique', p: ['Pour l’homologation allemande, les locomotives ont reçu les adaptations et équipements nécessaires. Elles allient la technique robuste de la Re 4/4 II à l’aptitude transfrontalière et étaient surtout prévues pour des trains de marchandises vers l’Allemagne.', 'Dans le catalogue des types de marche CFF 2026, la Re 421 reste enregistrée comme alias du type actif Re 420.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Équipement supplémentaire pour l’homologation en Allemagne', 'Livrée Cargo rouge et bleue'], p: ['La Re 421 est une locomotive marchandises et n’a pas de compartiment voyageurs.'] }],
  bilder: ['Re 421 374 à Thoune', 'Re 421 395 à Pirna', 'Re 421 377 avec un train d’autos à Donauwörth', 'Re 421 383 à Lindau Hbf', 'Re 421 à Dresde']
});

/* ---- 22-infrastruktur-loks.js ---- */
/* Français – CFF Infrastructure : locomotives et tracteurs */
uebZug('aem-940', {
  bilder: ['Aem 940 au bord du lac de Bienne près de Gléresse', 'Aem 940 020', 'Aem 940 023', 'Aem 940 018 à Biasca', 'Aem 940 001', 'Aem 940 004'],
  typ: 'Locomotive bimode',
  text: ['L’Aem 940 est une locomotive bimode à quatre essieux d’Alstom pour CFF Infrastructure. Elle roule à l’électricité sous la ligne de contact et, sur les voies non électrifiées, avec deux groupes diesel-générateurs.', 'Elle convient ainsi aux trains de travaux et aux manœuvres lourdes.'],
  kennzahlen: [['47', 'locomotives commandées'], ['120 km/h', 'vitesse maximale'], ['2000 kW', 'puissance électrique'], ['2018', 'début des essais']],
  daten: { 'Länge': '18,75 m hors tampons', 'Gewicht': '84 t ; 90 t avec lest', 'Antrieb': 'électrique, avec deux groupes diesel-générateurs', 'Leistung': '2000 kW en électrique, 900 kW en diesel', 'Mehrfachtraktion': 'jusqu’à 4 locomotives', 'Anzahl': '47 commandées', 'In Betrieb seit': '2018 (essais), série dès 2019' },
  specNote: 'Valeurs techniques selon la présentation d’Alstom de 2016. Les puissances électrique et diesel s’appliquent à des modes d’exploitation différents.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les CFF ont commandé 47 locomotives pour CFF Infrastructure. Les cinq premières ont été testées à partir de 2018 ; le début des livraisons en série était prévu pour l’automne 2019.', 'Les CFF citent comme domaines d’utilisation les gares de triage de Limmattal et de Lausanne Triage ainsi que les trains de travaux pour l’entretien et l’extension dans toute la Suisse.'] }, { titel: 'Utilisation et technique', p: ['Sous la ligne de contact, la locomotive utilise la traction électrique. Sans fil de contact, deux moteurs diesel plus petits produisent l’énergie pour les moteurs de traction électriques.', 'Les CFF décrivent l’utilisation de l’ETCS niveau 2 et un mode de télécommande particulier à la butte de débranchement de Limmattal, où la mécanicienne ou le mécanicien reste dans la cabine.'] }, { titel: 'Équipement et accessibilité', liste: ['Propulsion électrique sous la ligne de contact, deux génératrices diesel sans ligne de contact', 'ETCS Level 2', 'Mode de commande à distance à la butte de Limmattal', 'Commande multiple jusqu’à quatre locomotives', 'Réservoir diesel de 3000 l'], p: ['L’Aem 940 est une locomotive de travaux et de manœuvre sans compartiment voyageurs.'] }]
});

uebZug('am-843', {
  typ: 'Locomotive diesel-hydraulique pour la manœuvre et la ligne',
  text: ['L’Am 843 est une locomotive diesel-hydraulique à quatre essieux de Vossloh. Elle a été acquise pour les manœuvres lourdes et les trajets en ligne.', 'CFF Cargo, CFF Infrastructure et le trafic voyageurs ont utilisé la série pour diverses tâches.'],
  kennzahlen: [['59', 'commandées à l’origine pour CFF Cargo'], ['1500 kW', 'puissance du moteur diesel'], ['100 km/h', 'vitesse en ligne'], ['2004', 'introduite chez CFF Cargo']],
  daten: { 'Antrieb': 'diesel-hydraulique', 'Gewicht': '80 t en service', 'Rangiergang': 'jusqu’à 40 km/h', 'Streckengang': 'jusqu’à 100 km/h', 'Anzahl': '59 commandées pour CFF Cargo', 'In Betrieb seit': '2004 (CFF Cargo)' },
  specNote: 'Les deux rapports de la transmission sont conçus pour un effort de traction élevé à faible vitesse de manœuvre et pour des trajets jusqu’à 100 km/h en ligne.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['CFF Cargo a commandé 59 Am 843 chez Vossloh à Kiel et a présenté les premières locomotives en 2004. Ce chiffre désigne l’acquisition de Cargo de l’époque, et non toute la série CFF ni un effectif actuel.', 'Cargo engage l’Am 843 surtout pour la manœuvre et la desserte. Chez CFF Infrastructure, les manœuvres et les trains de travaux font partie de ses tâches.'] }, { titel: 'Utilisation et technique', p: ['Les locomotives de CFF Cargo ont été équipées de filtres à particules diesel.', 'En octobre 2025, CFF Cargo a annoncé l’acquisition de nouvelles locomotives de manœuvre hybrides pour remplacer à terme les Am 843. Un effectif actuel de toute la série n’est pas indiqué séparément sur les pages CFF utilisées.'] }, { titel: 'Équipement et accessibilité', liste: ['Propulsion diesel-hydraulique, indépendante de la ligne de contact', 'Deux rapports : manœuvre jusqu’à 40 km/h, ligne jusqu’à 100 km/h', 'Filtres à particules sur les locomotives de CFF Cargo'], p: ['L’Am 843 est une locomotive de manœuvre et de travaux sans compartiment voyageurs.'] }],
  bilder: ['Am 843 001 de CFF Infrastructure avec un train de travaux', 'Deux Am 843 de CFF Infrastructure avec un train de bois, en tête la 012', 'Am 843 011 à Arth-Goldau', 'Am 843 avec le train d’extinction et de sauvetage à Giornico', 'Am 843 à Bâle']
});

uebZug('tm-234', {
  typ: 'Tracteur de service',
  text: ['Le Tm 234 « Ameise » est un tracteur diesel à deux essieux pour la construction et l’entretien des installations ferroviaires. Selon la version, il possède un pont de chargement avec grue ou une nacelle de travail.', 'Cette page traite de l’ancienne « Ameise », et non du Tm 234-4 de Windhoff, plus récent.'],
  kennzahlen: [['125', 'commandés en trois séries'], ['550 kW', 'puissance du moteur diesel'], ['80 km/h', 'vitesse en ligne'], ['124', 'effectif CFF en 2019']],
  daten: { 'Hersteller': 'Stadler Winterthour et partenaires', 'Bauart': 'tracteur diesel à deux essieux', 'Gewicht': '30 t en service, au maximum 37 t', 'Antrieb': 'hydrostatique, moteur diesel MTU', 'Anfahrzugkraft': 'env. 81 kN', 'Zuladung': '7 t ; version à nacelle 0,5 t', 'Arbeitsmodus': 'jusqu’à 20 km/h, avec la grue jusqu’à 4 km/h', 'Anzahl': '125 commandés (1997, 2000, 2005)', 'In Betrieb seit': '1999 (première série commandée en 1997)', 'Einsatz': 'entretien de la voie, de la ligne de contact et des signaux' },
  specNote: 'La fiche du constructeur et une étude préliminaire du DLR et des CFF décrivent les différentes versions.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les CFF ont commandé 50 véhicules en 1997, 50 autres en 2000 et 25 supplémentaires en 2005. La livraison et la mise en service de la première série ont commencé en 1999. Stadler a annoncé la livraison des 25 derniers en 2007.', 'Les tracteurs servent à l’entretien de la voie, de la ligne de contact et des signaux, transportent du matériel et peuvent déplacer ou manœuvrer des trains de travaux.'] }, { titel: 'Utilisation et technique', p: ['Un moteur diesel MTU entraîne le tracteur de façon hydrostatique ; il développe 550 kW et roule jusqu’à 80 km/h. En mode travail, il roule jusqu’à 20 km/h, avec la grue jusqu’à 4 km/h.'] }, { titel: 'Équipement et accessibilité', liste: ['Selon la version, pont de chargement avec grue ou plate-forme de travail', 'Charge utile 7 t, 0,5 t pour la version à nacelle', 'Pas de compartiment voyageurs'] }, { titel: 'Effectif et délimitation', p: ['En 2019, CFF Infrastructure indiquait un effectif de 124 anciens Tm 234 « Ameise ». Il s’agit d’un état historique et non d’une indication sur la flotte en octobre 2026.', 'Le tracteur de service plus récent, également appelé Tm 234-4, provient de Windhoff et relève d’une autre acquisition.'] }],
  bilder: ['Tm 234 109 « Ameise »', 'Tm 234 004 à Neuhausen SH', 'Tm 234 139 à Winterthour', 'Tm 234 « Ameise » avec grue de chargement', 'Tm 234 090']
});

uebZug('am-841', {
  typ: 'Locomotive diesel-électrique pour trains de travaux et service léger en ligne',
  text: ['L’Am 841 est une locomotive diesel-électrique à quatre essieux de GEC Alsthom.', 'Elle a été acquise pour les trains de travaux lourds, les manœuvres et les trains de marchandises légers en ligne.'],
  kennzahlen: [['40', 'acquises à l’origine'], ['920 kW', 'puissance du moteur diesel'], ['80 km/h', 'vitesse maximale'], ['1996–1997', 'années de construction de la série CFF']],
  daten: { 'Antrieb': 'diesel-électrique', 'Gewicht': '73 t en service', 'Anzahl': '40 acquises (30 + 10)', 'In Betrieb seit': '1996–1997 (années de construction)' },
  specNote: 'Les valeurs de dynamique de marche suivent le catalogue des types de marche 2026 des CFF ; des sources historiques indiquent des masses légèrement différentes selon l’équipement.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les CFF ont d’abord commandé 30 locomotives, puis ont complété la commande de dix véhicules.', 'La série comblait un vide entre les petits tracteurs de manœuvre et les lourdes locomotives diesel et était surtout prévue pour les trains de travaux et la desserte.'] }, { titel: 'Utilisation et technique', p: ['L’Am 841 tire des trains de travaux, fait des manœuvres et assure de légers trains marchandises en ligne. Sa propulsion diesel-électrique développe 920 kW ; elle roule jusqu’à 80 km/h avec un effort au démarrage de 195 kN.'] }, { titel: 'Équipement et accessibilité', liste: ['Propulsion diesel-électrique, indépendante de la ligne de contact', 'Cinq locomotives sont transformées en Aeam 841 avec pantographe, batterie et moteur diesel', 'Pas de compartiment voyageurs'] }, { titel: 'Modernisation et avenir', p: ['Un programme de développement transforme cinq Am 841 en Aeam 841 avec pantographe, batterie et moteur diesel. Les documents indiquent la période de 2024 à 2026.', 'En parallèle, CFF Infrastructure mène un projet de flotte pour remplacer les anciennes Am 841 et Am 842.'] }],
  bilder: ['Am 841', 'Am 841 014', 'Trois Am 841 à Frauenfeld', 'Am 841 017', 'Am 841 002 à Küsnacht ZH']
});

uebZug('am-842', {
  typ: 'Locomotive diesel-hydraulique pour manœuvres lourdes et service léger en ligne',
  text: ['Aux CFF, la désignation Am 842 a été utilisée pour différentes locomotives diesel à quatre essieux.', 'Cette page traite du type MaK G 1204 BB, mentionné comme actif dans le catalogue des types de marche 2026 des CFF.'],
  kennzahlen: [['2', 'reprises de Sersa en 1993'], ['1120 kW', 'puissance du moteur diesel'], ['80 km/h', 'vitesse maximale'], ['12,5 m', 'longueur hors tampons']],
  daten: { 'Antrieb': 'diesel-hydraulique', 'Gewicht': '80 t en service aux CFF', 'Anzahl': '2 (Am 842 000 et 001)', 'In Betrieb seit': '1993 aux CFF' },
  specNote: 'Les valeurs de 80 t et de 255 kN sont les paramètres du type de marche actif enregistrés dans le catalogue des types de marche des CFF.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Deux MaK G 1204 BB sont passées de Sersa aux CFF en 1993 et ont été immatriculées Am 842 000 et 001.', 'Ces puissantes locomotives de manœuvre conviennent aux manœuvres lourdes et aux trajets plus courts en ligne.'] }, { titel: 'Utilisation et technique', p: ['Les deux locomotives conviennent aux manœuvres lourdes et aux courts trajets en ligne. Un moteur MTU 12V 396 TC13 les entraîne en diesel-hydraulique ; elles développent 1120 kW et roulent jusqu’à 80 km/h.'] }, { titel: 'Équipement et accessibilité', liste: ['Propulsion diesel-hydraulique, indépendante de la ligne de contact', 'Pas de compartiment voyageurs'] }, { titel: 'Délimitation de la série', p: ['Plus tard, trois Vossloh G 1000 BB de CFF Cargo ont aussi porté les numéros Am 842 011 à 013. Leurs caractéristiques diffèrent du type MaK ; les indications sur l’Am 842 se rapportent donc toujours au groupe de numéros concerné.'] }]
});

uebZug('tmf-232', {
  typ: 'Tracteur de service modernisé avec radiocommande',
  text: ['Le Tmf 232 est issu de la modernisation de tracteurs de service Tm IV. En 2013, CFF Infrastructure a commandé la transformation de 15 véhicules.', 'Le « f » de la désignation signifie radiocommande (Funkfernsteuerung).'],
  kennzahlen: [['15', 'véhicules dans la commande de transformation'], ['2013', 'commande de modernisation'], ['280 kW', 'puissance diesel'], ['60 km/h', 'vitesse maximale par ses propres moyens']],
  daten: { 'Umbau': 'ORTICS, dans l’atelier industriel CFF de Bienne', 'Antrieb': 'diesel-hydraulique, moteur Caterpillar', 'Länge': '7,67 m hors tampons', 'Gewicht': 'environ 30 t', 'Höchstgeschwindigkeit': '60 km/h par ses propres moyens, 90 km/h remorqué', 'Steuerung': 'radiocommande et commande multiple', 'Umbauauftrag': '2013 (première mise en service après transformation non attestée)', 'Einsatz': 'service de construction et de manœuvre' },
  specNote: '2013 est l’année attestée de la commande de modernisation, et non l’année de construction d’origine des Tm IV donneurs.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['En 2013, ORTICS a reçu de CFF Infrastructure le mandat de moderniser 15 Tm IV. Le châssis, les superstructures, les essieux et la transmission ont été en grande partie conservés ; le moteur, la commande et la technique de sécurité ont été renouvelés et une radiocommande installée.'] }, { titel: 'Utilisation et technique', p: ['Le Tmf 232 déplace des trains de travaux, manœuvre des véhicules et soutient les travaux sur les chantiers. Pour un effort de traction élevé, il dispose d’un rapport de manœuvre jusqu’à 30 km/h, pour les trajets en ligne d’un rapport jusqu’à 60 km/h.', 'La vitesse de remorquage plus élevée de 90 km/h s’applique sans traction propre dans un train.'] }, { titel: 'Équipement et accessibilité', liste: ['Radiocommande, d’où le « f » de la désignation', 'Commande multiple', 'Contrôle de la marche des trains ETM-S', 'Rapport de manœuvre jusqu’à 30 km/h, rapport de ligne jusqu’à 60 km/h'], p: ['Le Tmf 232 est un véhicule de travaux sans compartiment voyageurs.'] }]
});

uebZug('tm-234-4', {
  typ: 'Tracteur de service de Windhoff',
  text: ['Le Tm 234-4 est un tracteur de service à deux essieux avec plateau de chargement et grue. DART signifie tracteur diesel de travail et de manœuvre.', 'CFF Infrastructure l’a acquis pour l’entretien, le transport de matériel, les manœuvres et les interventions sur les installations de voie, de signalisation et de câbles.'],
  kennzahlen: [['35', 'véhicules dans le projet CFF'], ['651 kW', 'puissance totale installée'], ['100 km/h', 'vitesse maximale'], ['14,24 m', 'longueur hors tampons']],
  daten: { 'Länge': '14,24 m hors tampons', 'Gewicht': 'env. 37,3 t en service', 'Leistung': '651 kW installés (522 kW moteur principal + 129 kW moteur de travail)', 'Motor': 'Caterpillar C18 et C4.4', 'Antrieb': 'hydrodynamique et hydrostatique', 'Anfahrzugkraft': 'env. 100–105 kN', 'Ladeplattform': 'jusqu’à 3200 kg', 'Ladekran': 'Palfinger PR220 HPLS, portée jusqu’à 11 m', 'Anzahl': '35 prévus', 'In Betrieb seit': '2019 (présérie)' },
  specNote: 'La puissance installée comprend le moteur principal et le moteur de travail ; le type de marche CFF retient une puissance maximale plus faible pour la dynamique de marche.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les CFF ont attribué la commande en 2015. À partir de 2019, cinq véhicules de présérie ont d’abord été testés ; au total, 35 tracteurs étaient prévus pour remplacer 51 anciens Tm 232.'] }, { titel: 'Utilisation et technique', p: ['Le moteur principal entraîne la transmission hydrodynamique rapide, le moteur de travail supplémentaire alimente les équipements hydrauliques.', 'La combinaison de la grue, du plateau de chargement et de l’autorisation à 100 km/h permet des transports de matériel et des trains de travaux sans véhicule de travail séparé.'] }, { titel: 'Équipement et accessibilité', liste: ['Plate-forme de chargement jusqu’à 3200 kg', 'Grue Palfinger PR220 HPLS avec une portée jusqu’à 11 m', 'Moteur de travail séparé pour l’hydraulique', 'Pas de compartiment voyageurs'] }],
  bilder: ['Tracteur de service Windhoff avec grue de chargement', 'Tracteur de service Windhoff, autre côté', 'Tm 234 413 avec grue de chargement à Weinfelden', 'Tm 234 413 à Weinfelden, côté grue', 'Tm 234 435 à Kreuzlingen']
});

uebDict({ 'Aem 940 018 in Biasca': 'Aem 940 018 à Biasca' });

/* ---- 23-infrastruktur-wagen.js ---- */
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
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les documents CFF utilisés n’indiquent ni le constructeur ni le nombre de wagons. Le catalogue des types de marche 2026 répertorie le wagon comme type actif 5106.'] }, { titel: 'Utilisation et technique', p: ['Le wagon évacue les déblais et les matériaux usagés et approvisionne les chantiers en matériaux en vrac. Le déchargement latéral permet un transbordement ciblé à côté de la voie.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux bennes d’env. 40 m³ au total, vidées latéralement par hydraulique', 'Énergie pour l’hydraulique fournie de l’extérieur', 'Pas de propulsion propre, jusqu’à 100 km/h dans un train'], p: ['Le Fans-u est un wagon de travaux sans compartiment voyageurs.'] }, { titel: 'Exploitation et sécurité', p: ['Lors du déchargement, le wagon doit être assuré contre le renversement et la zone de travail dégagée. L’hydraulique, l’alimentation en énergie et les verrouillages doivent être contrôlés avant chaque course de travail selon les prescriptions locales.'] }]
});

uebZug('xans-37', {
  typ: 'Wagon à ballast à quatre essieux à déchargement par gravité',
  text: ['Le Xans 37 est un wagon à ballast à quatre essieux pour le transport et le ballastage dosé.', 'Le déchargement se fait par gravité au moyen de trappes proches du sol.'],
  kennzahlen: [['100 km/h', 'vitesse maximale'], ['14,0 m', 'longueur'], ['23,9 t', 'poids à vide'], ['88 t', 'poids total max.']],
  daten: { 'Gewicht': '23,9 t à vide, 88 t en charge', 'Nutzlast': 'jusqu’à env. 64,1 t (calculée)', 'Volumen': 'env. 45 m³', 'Entladung': 'par gravité, ballastage dosé' },
  specNote: 'Le catalogue des types de marche indique 87,5 t pour la dynamique de marche et arrondit le poids total admissible à 88 t.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les documents CFF utilisés n’indiquent ni le constructeur ni le nombre de wagons. Le catalogue des types de marche 2026 répertorie le wagon comme type actif 5107.'] }, { titel: 'Utilisation et technique', p: ['Le Xans 37 transporte du ballast neuf et le répartit sur le chantier par ses goulottes. Il convient ainsi aux constructions neuves, aux renouvellements et au rechargement en ballast.'] }, { titel: 'Équipement et accessibilité', liste: ['Volume d’env. 45 m³', 'Trappes basses pour un ballastage dosé par gravité', 'Pas de propulsion propre, jusqu’à 100 km/h dans un train'], p: ['Le Xans 37 est un wagon de travaux sans compartiment voyageurs.'] }, { titel: 'Chargement et manœuvre', p: ['Avant tout trajet en train ou en manœuvre, toutes les trappes doivent être entièrement fermées et verrouillées. Le document de formation exige des trajets à vide ou entièrement chargé et met en garde contre les chargements partiels.'] }]
});

uebZug('xans-74', {
  typ: 'Wagon à ballast à quatre essieux pour ballast et matériau de couche de forme',
  text: ['Le Xans 74 est un wagon pour matériaux en vrac à quatre essieux pour le ballast et le matériau de la couche de protection (PSS).', 'Selon l’équipement, un tapis convoyeur aide à déposer le matériau de manière décalée sur le côté.'],
  kennzahlen: [['100 km/h', 'vitesse maximale'], ['15,0 m', 'longueur'], ['26,0 t', 'poids à vide'], ['80 t', 'poids total max.']],
  daten: { 'Gewicht': '26,0 t à vide, 80 t en charge', 'Nutzlast': 'jusqu’à env. 54,0 t (calculée)', 'Volumen': 'env. 40 m³', 'Entladung': 'par gravité', 'Förderband': 'dépose latérale jusqu’à env. 4,5 m de l’axe de la voie', 'Abdeckung': 'possible en deux parties', 'Einsatz': 'ballast et PSS' },
  specNote: 'La présentation de formation indique d’autres masses pour d’anciennes versions ; ce sont les valeurs du catalogue des types de marche 2026 des CFF qui s’appliquent ici.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les documents CFF utilisés n’indiquent ni le constructeur ni le nombre de wagons. Le catalogue des types de marche 2026 répertorie le wagon comme type actif 5109.'] }, { titel: 'Utilisation et technique', p: ['Outre le ballast normal, le wagon peut transporter du matériau PSS sensible à l’humidité. Des bâches aident à conserver la teneur en humidité requise pendant le transport.'] }, { titel: 'Équipement et accessibilité', liste: ['Volume d’env. 40 m³, déchargement par gravité', 'Selon l’équipement, bande transporteuse pour un dépôt latéral jusqu’à env. 4,5 m de l’axe de la voie', 'Couverture en deux parties possible', 'Pas de propulsion propre, jusqu’à 100 km/h dans un train'], p: ['Le Xans 74 est un wagon de travaux sans compartiment voyageurs.'] }, { titel: 'Fonctionnement du tapis convoyeur', p: ['Le tapis nécessite une alimentation externe ou un groupe générateur. Avant la mise en marche, il faut contrôler la zone de pivotement, la voie voisine et le dégagement de poussière.'] }],
  bilder: ['Xans 74 de CFF Infrastructure, 2021', 'Trémie centrale du Xans 74 au-dessus du tapis convoyeur', 'Tapis convoyeur pivotant sous le Xans 74']
});

uebZug('xas-53', {
  typ: 'Wagon porte-bennes avec rails de roulement latéraux',
  text: ['Le Xas 53 transporte des bennes interchangeables pour le ballast, les résidus de criblage et le matériau PSS.', 'Des rails de roulement latéraux permettent de déplacer les bennes en liaison avec les machines de voie.'],
  kennzahlen: [['100 km/h', 'vitesse maximale'], ['19,9 m', 'longueur'], ['31,0 t', 'poids à vide'], ['7', 'bennes par wagon']],
  daten: { 'Fahrzeugart': 'wagon porte-bennes', 'Gewicht': '31,0 t à vide, 78 t en charge', 'Nutzlast': 'pas de valeur officielle (78 t − 31 t donnent env. 47 t)', 'Behälter': '7 bennes d’env. 4 m³ chacune', 'Ausrüstung': 'rails de roulement latéraux, bâches possibles', 'Einsatz': 'trains de criblage et de travaux' },
  specNote: 'Le catalogue des types de marche indique 77,6 t pour la dynamique de marche. La planification de la flotte prévoit le remplacement de la famille Xans/Xas 52/53.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les documents CFF utilisés n’indiquent ni le constructeur ni le nombre de wagons. Le catalogue des types de marche 2026 répertorie le wagon comme type actif 5113.'] }, { titel: 'Utilisation et technique', p: ['Les bennes peuvent être déplacées, remplies et vidées à un endroit approprié au sein d’une chaîne de travail. Cela accélère l’évacuation continue des matériaux lors du dégarnissage et du renouvellement de voie.'] }, { titel: 'Équipement et accessibilité', liste: ['Sept bennes d’env. 4 m³ chacune', 'Rails latéraux pour déplacer les bennes', 'Bâches possibles pour les matériaux sensibles à l’humidité', 'Pas de propulsion propre, jusqu’à 100 km/h dans un train'], p: ['Le Xas 53 est un wagon de travaux sans compartiment voyageurs.'] }, { titel: 'Arrimage du chargement', p: ['Il faut tenir les mains et les pieds à l’écart des rails de roulement. Pour le PSS sensible à l’humidité, les bennes peuvent être bâchées ; avant chaque trajet, bennes et bâches doivent être correctement fixées.'] }],
  bilder: ['Xas 80 85 98 53 420-0 de CFF Infrastructure à Effretikon']
});

uebZug('xas-62', {
  typ: 'Wagon basculant à quatre essieux pour ballast usagé, sans tapis',
  text: ['Le Xas 62 reçoit du ballast usagé, des déblais, du gravier et du sable.', 'La caisse est basculée par un système électro-hydraulique, si bien que le matériau s’écoule par gravité.'],
  kennzahlen: [['100 km/h', 'vitesse maximale'], ['15,04 m', 'longueur'], ['30,0 t', 'poids à vide'], ['80 t', 'poids total max.']],
  daten: { 'Ausführung': 'sans tapis convoyeur', 'Gewicht': '30,0 t à vide, 80 t en charge', 'Nutzlast': 'jusqu’à env. 50,0 t (calculée)', 'Volumen': 'env. 51 m³', 'Entladung': 'caisse basculante, électro-hydraulique', 'Einsatz': 'ballast usagé et déblais' },
  specNote: 'Le type de marche actuel distingue clairement cette version du Xas 62 avec tapis convoyeur.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les documents CFF utilisés n’indiquent ni le constructeur ni le nombre de wagons. Le catalogue des types de marche 2026 répertorie le wagon comme type actif 5111.'] }, { titel: 'Utilisation et technique', p: ['Le Xas 62 sert surtout à évacuer les matériaux issus du renouvellement de voie et de l’assainissement de l’infrastructure. Le basculement accélère le déchargement aux lieux de dépôt adaptés.'] }, { titel: 'Équipement et accessibilité', liste: ['Caisse basculante électrohydraulique d’env. 51 m³', 'Version sans bande transporteuse', 'Pas de propulsion propre, jusqu’à 100 km/h dans un train'], p: ['Le Xas 62 est un wagon de travaux sans compartiment voyageurs.'] }, { titel: 'Travail', p: ['Pendant le basculement, il faut surveiller la stabilité, la ligne de contact, la voie voisine et l’espace latéral. Il est interdit de monter ou de rester sur le wagon pendant les mouvements.'] }]
});

uebZug('xas-62-fb', {
  beiname: 'avec tapis convoyeur',
  typ: 'Wagon basculant pour ballast usagé avec tapis convoyeur supplémentaire',
  text: ['La version à tapis convoyeur du Xas 62 associe la caisse basculante à un tapis pour un enlèvement contrôlé des matériaux.', 'Elle est inscrite comme type de marche actif à part entière.'],
  kennzahlen: [['100 km/h', 'vitesse maximale'], ['15,04 m', 'longueur'], ['30,5 t', 'poids à vide'], ['80 t', 'poids total max.']],
  daten: { 'Ausführung': 'avec tapis convoyeur (FB)', 'Gewicht': '30,5 t à vide, 80 t en charge', 'Nutzlast': 'jusqu’à env. 49,5 t (calculée)', 'Entladung': 'caisse basculante et tapis', 'Arbeitsantrieb': 'électro-hydraulique', 'Einsatz': 'évacuation des matériaux' },
  specNote: '« FB » désigne ici la version avec tapis convoyeur ; par rapport au wagon sans tapis, le poids à vide augmente d’environ 0,5 t.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les documents CFF utilisés n’indiquent ni le constructeur ni le nombre de wagons. Le catalogue des types de marche 2026 répertorie la version à bande transporteuse comme type actif propre 5075.'] }, { titel: 'Utilisation et technique', p: ['Le tapis convoyeur complète le simple déchargement par basculement. Le matériau peut être transmis de manière plus contrôlée aux unités suivantes ou déposé latéralement à un endroit défini.'] }, { titel: 'Équipement et accessibilité', liste: ['Caisse basculante et bande transporteuse', 'Entraînement de travail électrohydraulique', 'Pas de propulsion propre, jusqu’à 100 km/h dans un train'], p: ['Le Xas 62 à bande transporteuse est un wagon de travaux sans compartiment voyageurs.'] }, { titel: 'Zone de sécurité', p: ['Le tapis, la caisse basculante et l’hydraulique ne doivent fonctionner que dans la zone de travail autorisée. Les points d’écrasement, le risque de chute et la proximité de la ligne de contact demandent une attention particulière.'] }]
});

uebZug('xas-73', {
  typ: 'Wagon à ballast pour le premier et le deuxième bourrage',
  text: ['Le Xas 73 est un wagon à ballast Talbot à quatre essieux à déchargement par gravité.', 'Il est surtout utilisé lors du premier et du deuxième bourrage pour répartir le ballast de façon ciblée.'],
  kennzahlen: [['100 km/h', 'vitesse maximale'], ['15,04 m', 'longueur'], ['22,5 t', 'poids à vide'], ['200', 'wagons prévus pour une prolongation de durée de vie']],
  daten: { 'Bauart': 'wagon à ballast Talbot', 'Gewicht': '22,5 t à vide, 80 t en charge', 'Nutzlast': 'jusqu’à env. 57,5 t (calculée)', 'Volumen': 'env. 31 m³', 'Behälter': '4 demi-compartiments', 'Bedienung': '4 volants' },
  specNote: 'Selon la présentation de la flotte de 2025, les CFF prévoient de prolonger la durée de vie de 200 wagons Talbot Xas 73 à quatre essieux.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Le wagon est un wagon à ballast de type Talbot. Les documents CFF utilisés n’indiquent pas le nombre de wagons. Le catalogue des types de marche 2026 le répertorie comme type actif 5110.'] }, { titel: 'Utilisation et technique', p: ['Quatre volants commandent les différentes goulottes. Le ballast peut ainsi être réparti par sections et selon la position dans la voie.'] }, { titel: 'Équipement et accessibilité', liste: ['Quatre demi-trémies d’env. 31 m³ au total', 'Quatre volants pour les différentes sorties', 'Pas de propulsion propre, jusqu’à 100 km/h dans un train'], p: ['Le Xas 73 est un wagon de travaux sans compartiment voyageurs.'] }, { titel: 'Perspectives de la flotte', p: ['Le type reste actif dans le catalogue des types de marche 2026. Une remise à neuf est prévue pour la grande flotte existante, afin que les wagons restent disponibles pour d’autres périodes de travaux.'] }]
});

uebZug('xns-39', {
  bilder: ['Xns 39 (Fccnpps) 21 85 6439 038-1 dans un train de travaux', 'Plusieurs Xns 39 dans un train de travaux, de nuit'],
  typ: 'Wagon à ballast à deux essieux à commande manuelle',
  text: ['Le Xns 39 est un wagon à ballast compact à deux essieux.', 'Ses trappes de vidange sont actionnées à la main par des leviers et permettent de ballaster directement dans la voie.'],
  kennzahlen: [['100 km/h', 'vitesse maximale'], ['10,0 m', 'longueur'], ['13,1 t', 'poids à vide'], ['45 t', 'poids total max.']],
  daten: { 'Gewicht': '13,1 t à vide, 45 t en charge', 'Nutzlast': 'jusqu’à env. 31,9 t (calculée)', 'Volumen': 'env. 22 m³', 'Bedienung': 'trappes manuelles, par leviers', 'Einsatz': 'ballastage' },
  specNote: 'La présentation en français écrit une fois « Xas 39 » ; la table des matières et le catalogue des types de marche des CFF confirment la désignation Xns 39.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les documents CFF utilisés n’indiquent ni le constructeur ni le nombre de wagons. Le catalogue des types de marche 2026 répertorie le wagon comme type actif 5108.'] }, { titel: 'Utilisation et technique', p: ['Avec deux essieux et dix mètres de long, le Xns 39 convient aux petites quantités de ballast et aux courts tronçons de chantier. Sa construction mécanique simple ne nécessite aucune source d’énergie supplémentaire.'] }, { titel: 'Équipement et accessibilité', liste: ['Volume d’env. 22 m³', 'Trappes manœuvrées à la main par leviers', 'Aucune source d’énergie supplémentaire nécessaire', 'Pas de propulsion propre, jusqu’à 100 km/h dans un train'], p: ['Le Xns 39 est un wagon de travaux sans compartiment voyageurs.'] }, { titel: 'Transport sûr', p: ['Avant chaque trajet, les trappes manuelles doivent être fermées et assurées. Pendant le déchargement, personne ne doit se trouver dans la zone de vidange ou de danger.'] }]
});

uebZug('xns-60', {
  typ: 'Wagon basculant à deux essieux pour ballast et résidus de criblage',
  text: ['Le Xns 60 est un wagon basculant à deux essieux pour le ballast, les résidus de criblage et des matériaux en vrac comparables.', 'Le déchargement se fait par basculement et par gravité.'],
  kennzahlen: [['100 km/h', 'vitesse maximale'], ['10,94 m', 'longueur'], ['17,0 t', 'poids à vide'], ['42 t', 'poids total max.']],
  daten: { 'Fahrzeugart': 'wagon de marchandises à benne basculante', 'Gewicht': '17,0 t à vide, 42 t en charge', 'Nutzlast': 'jusqu’à env. 25,0 t (calculée)', 'Volumen': 'env. 17,5 m³', 'Entladung': 'basculement, par gravité', 'Einsatz': 'ballast et résidus de criblage' },
  specNote: 'La présentation indique une charge utile de 17 t ; les masses actuelles des CFF donnent par calcul jusqu’à environ 25 t.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les documents CFF utilisés n’indiquent ni le constructeur ni le nombre de wagons. Le catalogue des types de marche 2026 répertorie le wagon comme type actif 5112.'] }, { titel: 'Utilisation et technique', p: ['Ce wagon compact peut être chargé à la pelle mécanique et convient aux petites quantités de matériaux. Le déchargement par gravité réduit le besoin de techniques de convoyage supplémentaires.'] }, { titel: 'Équipement et accessibilité', liste: ['Benne basculante d’env. 17,5 m³', 'Déchargement par basculement et gravité', 'Pas de propulsion propre, jusqu’à 100 km/h dans un train'], p: ['Le Xns 60 est un wagon de travaux sans compartiment voyageurs.'] }, { titel: 'Basculement', p: ['Avant de basculer, il faut contrôler le sol, l’espace latéral et la position du chargement. Pendant les mouvements du wagon, personne ne doit se trouver sur la superstructure.'] }]
});

uebZug('xs-72', {
  typ: 'Ancien wagon à ballast à deux essieux avec volants',
  text: ['Le Xs 72 est un wagon à ballast à deux essieux avec trappes de vidange actionnées par volants.', 'Il figure dans le document de formation des CFF de 2022, mais plus comme type actif à part entière dans le catalogue des types de marche 2026.'],
  kennzahlen: [['10,24 m', 'longueur'], ['13,0 t', 'poids à vide'], ['25,0 t', 'charge utile selon la présentation'], ['15 m³', 'volume']],
  daten: { 'Gewicht': '13,0 t à vide, env. 38 t en charge (calculé)', 'Nutzlast': '25,0 t selon la présentation', 'Bedienung': 'volants' },
  specNote: 'Faute de type de marche propre en 2026, les valeurs proviennent volontairement de la présentation de formation de 2022.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les documents CFF utilisés n’indiquent ni le constructeur ni le nombre de wagons. Le wagon figure dans le support de formation CFF de 2022, mais plus comme type propre dans le catalogue 2026.'] }, { titel: 'Utilisation et technique', p: ['Les trappes de vidange s’ouvrent et se ferment par des volants. Le ballast peut ainsi être réparti sans source d’énergie externe.'] }, { titel: 'Équipement et accessibilité', liste: ['Volume de 15 m³', 'Trappes avec volants', 'Pas de propulsion propre'], p: ['Le Xs 72 est un wagon de travaux sans compartiment voyageurs.'] }, { titel: 'Classement', p: ['L’absence dans le catalogue actuel ne signifie pas forcément qu’il n’existe plus aucun wagon de ce type. Le type n’est toutefois plus mentionné comme type de marche actif pour la commande de sillons.'] }]
});

uebZug('silad-1-3', {
  typ: 'Unité de chargement de rails avec wagon de matériel',
  text: ['Les SILAD 1–3 sont des unités de chargement de rails actives des CFF pour le transport et le transbordement de longs rails.', 'Le type de marche officiel comprend l’unité de chargement et le wagon de matériel ; dans le train de travaux s’ajoutent d’autres wagons de transport.'],
  kennzahlen: [['90 km/h', 'vitesse maximale'], ['44,0 m', 'longueur du type de marche'], ['80 t', 'poids à vide et de dynamique de marche'], ['120 m', 'longueur max. des rails']],
  daten: { 'Formation': 'unité de chargement et wagon de matériel, en plusieurs parties', 'Transportwagen': 'notamment Xas 60', 'Länge': '44,0 m (type de marche)', 'Gewicht': '80 t (type de marche)', 'Schienenlänge': 'jusqu’à 120 m', 'Kapazität': 'jusqu’à 30 rails selon la présentation' },
  specNote: 'Les 44 m et 80 t se rapportent au type de marche défini dans le catalogue, et non à l’ensemble du long train de transport de rails.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les unités de chargement de rails SILAD 1–3 viennent de Robel. Le catalogue des types de marche 2026 les répertorie comme type actif 5031, composé de l’unité de chargement et d’un wagon de matériel ; dans le train de travaux s’ajoutent des wagons de transport comme le Xas 60.'] }, { titel: 'Utilisation et technique', p: ['Le document de formation décrit une unité de transport de six wagons pour des rails jusqu’à 120 mètres. L’unité de chargement SILAD aide à charger et décharger les rails en toute sécurité sur le chantier.'] }, { titel: 'Équipement et accessibilité', liste: ['Unité de chargement pour rails jusqu’à 120 m', 'Capacité jusqu’à 30 rails', 'Pas de propulsion propre, jusqu’à 90 km/h dans un train'], p: ['SILAD est une unité de travail sans compartiment voyageurs.'] }, { titel: 'Évolution de la flotte', p: ['Les CFF maintiennent les SILAD 1–3 en service actif. La planification de la flotte prévoit en outre un vaste programme de 90 unités de transport SILAD et de quatre chargeurs.'] }]
});

uebZug('silad-4', {
  typ: 'Unité de chargement de rails pour travaux de construction et de renouvellement',
  text: ['La SILAD 4 est une unité de chargement de rails des CFF enregistrée séparément.', 'Elle travaille avec les wagons de transport associés pour charger et décharger de longs rails.'],
  kennzahlen: [['100 km/h', 'vitesse maximale'], ['29,0 m', 'longueur'], ['58 t', 'poids à vide'], ['actif', 'statut 2026']],
  daten: { 'Beschreibung': 'unité de chargement de rails', 'Gewicht': '58 t (poids total et de dynamique de marche)', 'Einsatz': 'chargement et déchargement de rails' },
  specNote: 'Le catalogue des types de marche ne publie pour la SILAD 4 que les valeurs clés pour le sillon ; les données de travail figurent dans des documents d’exploitation séparés.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les documents CFF utilisés n’indiquent pas de constructeur. Le catalogue des types de marche 2026 répertorie SILAD 4 comme type actif propre 5071.'] }, { titel: 'Utilisation et technique', p: ['La SILAD 4 n’est pas un véhicule moteur autopropulsé. Pour les transferts et les mouvements sur le chantier, l’unité est intégrée dans un convoi remorqué.'] }, { titel: 'Équipement et accessibilité', liste: ['Unité pour charger et décharger de longs rails', '29,0 m de long, 58 t', 'Pas de propulsion propre, jusqu’à 100 km/h dans un train'], p: ['SILAD 4 est une unité de travail sans compartiment voyageurs.'] }, { titel: 'Logistique des rails', p: ['Les systèmes SILAD réduisent les levages manuels pénibles et assurent un flux ordonné de matériel entre le dépôt, le train de transport et le lieu de pose.'] }]
});

uebZug('silad-reserve', {
  name: 'SILAD de réserve',
  beiname: '',
  typ: 'Unité compacte de chargement de rails de réserve',
  text: ['L’unité de réserve SILAD est disponible pour remplacer ou compléter les unités lors des chargements de rails.', 'Elle est nettement plus courte et plus légère que la SILAD 4 et est inscrite comme type de marche actif à part entière.'],
  kennzahlen: [['90 km/h', 'vitesse maximale'], ['14,0 m', 'longueur'], ['18 t', 'poids à vide'], ['actif', 'statut 2026']],
  daten: { 'Beschreibung': 'unité de chargement de réserve', 'Gewicht': '18 t (poids total et de dynamique de marche)', 'Einsatz': 'réserve et complément' },
  specNote: '« Réserve » désigne le rôle d’exploitation ; le catalogue des types de marche mentionne pourtant l’unité comme type actif à part entière.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les documents CFF utilisés n’indiquent pas de constructeur. Le catalogue des types de marche 2026 répertorie l’unité de réserve comme type actif propre 5072.'] }, { titel: 'Utilisation et technique', p: ['L’unité de réserve intervient en cas d’entretien, de dérangement ou de forte demande et augmente ainsi la disponibilité de la logistique des rails.'] }, { titel: 'Équipement et accessibilité', liste: ['Unité de chargement compacte : 14,0 m de long, 18 t', 'Pas de propulsion propre, jusqu’à 90 km/h dans un train'], p: ['L’unité de réserve est une unité de travail sans compartiment voyageurs.'] }, { titel: 'Exploitation', p: ['Comme les autres unités SILAD, elle n’a pas de propulsion propre. Les transferts, manœuvres et mouvements de travail se font dans le convoi autorisé à cet effet.'] }]
});

uebZug('ste-kurz', {
  name: 'STE courte',
  beiname: 'Xans 51',
  typ: 'Unité de transport de rails avec deux grues pour rails de 12 à 36 m',
  text: ['Selon le document de formation, l’unité courte de transport de rails (STE) est basée sur un wagon plat Xans 51 à quatre essieux.', 'Deux petites grues déchargent les rails courts directement sur le chantier.'],
  kennzahlen: [['12–36 m', 'longueur des rails'], ['29,5 t', 'poids à vide'], ['50 t', 'charge utile selon la présentation'], ['2 × 1,5 t', 'grues']],
  daten: { 'Bauart': 'wagon plat', 'Gewicht': '29,5 t à vide', 'Nutzlast': '50 t selon la présentation', 'Krane': '2, capacité 1500 kg chacune', 'Schienenlänge': '12 à 36 m', 'Einsatz': 'déchargement de rails' },
  specNote: 'Le nom Xans 51 n’apparaît pas comme entrée propre dans le catalogue des types de marche 2026 ; les valeurs sont donc indiquées comme état de formation 2022.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Selon le support de formation CFF de 2022, l’unité repose sur un wagon plat Xans 51 à quatre essieux. Le document n’indique ni constructeur ni nombre ; ce n’est pas un type propre dans le catalogue 2026.'] }, { titel: 'Utilisation et technique', p: ['L’unité couvre les longueurs de rails transportables sans train de longs rails de 120 mètres. Les deux grues se partagent la charge lors du déchargement.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux grues de 1500 kg chacune', 'Génératrice à bord', 'Pour rails de 12 à 36 m', 'Pas de propulsion propre'], p: ['La STE est un wagon de travaux sans compartiment voyageurs.'] }, { titel: 'Sécurité au poste de travail', p: ['Pendant les manœuvres, personne ne doit se tenir debout sur le wagon. La zone de la grue, les accessoires de levage, la ligne de contact et la voie voisine doivent être sécurisés avant chaque levage.'] }]
});

uebZug('ste-lang', {
  name: 'STE longue',
  beiname: 'Xans 51',
  typ: 'Unité de transport de rails en plusieurs parties pour rails jusqu’à 120 m',
  text: ['La STE longue utilise des wagons Xans 51 équipés de grues pour transporter et décharger de longs rails.', 'Selon la présentation, une unité d’exploitation se compose de six wagons et atteint 120 mètres de long.'],
  kennzahlen: [['120 m', 'longueur max. des rails'], ['6', 'wagons par unité'], ['29,5 t', 'poids à vide par wagon-grue'], ['2 × 1,5 t', 'grues par wagon-grue']],
  daten: { 'Bauart': 'convoi de wagons plats', 'Formation': '6 wagons', 'Achsen': '4 par wagon', 'Gewicht': '29,5 t à vide par wagon-grue', 'Nutzlast': '50 t par wagon-grue selon la présentation', 'Krane': '2 par wagon-grue, 1500 kg chacune', 'Schienenlänge': 'jusqu’à 120 m', 'Einsatz': 'déchargement de longs rails' },
  specNote: 'Les types de marche SILAD sont actifs séparément en 2026 ; la désignation STE longue / Xans 51 n’est pas inscrite comme type de marche propre au catalogue.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Selon la présentation CFF, la STE longue se compose de six wagons Xans 51. Le document n’indique ni constructeur ni nombre d’unités ; ce n’est pas un type propre dans le catalogue 2026.'] }, { titel: 'Utilisation et technique', p: ['Plusieurs wagons portent ensemble les longs rails flexibles. Les grues aident au passage contrôlé du convoi de transport à la voie.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux grues de 1500 kg par wagon-grue', 'Génératrice à bord', 'Pour rails jusqu’à 120 m', 'Pas de propulsion propre'], p: ['La STE est une composition de travaux sans compartiment voyageurs.'] }, { titel: 'Limites d’exploitation', p: ['Les six wagons sont traités comme un convoi coordonné. Lors des mouvements, la présence sur les wagons, l’inscription en courbe, les porte-à-faux et la position des rails doivent être surveillés de près.'] }]
});

uebZug('xs-45', {
  typ: 'Wagon à deux essieux pour outillage, atelier et équipe',
  text: ['Le Xs 45 est un wagon couvert de train de travaux pour l’outillage, les pièces de rechange et l’équipement d’atelier.', 'Il sert en même temps d’espace de travail et de soutien abrité pour les équipes de chantier.'],
  kennzahlen: [['2', 'essieux'], ['15,0 m', 'longueur'], ['16,5 t', 'poids à vide'], ['22 t', 'charge utile selon la présentation']],
  daten: { 'Gewicht': '16,5 t à vide, env. 38,5 t en charge (calculé)', 'Nutzlast': '22 t selon la présentation' },
  specNote: 'Le catalogue des types de marche 2026 ne mentionne pas le Xs 45 séparément ; les valeurs proviennent du document de formation des CFF de 2022.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les documents CFF utilisés n’indiquent ni le constructeur ni le nombre de wagons. Le wagon figure dans le support de formation CFF de 2022, mais pas comme type propre dans le catalogue 2026.'] }, { titel: 'Utilisation et technique', p: ['Les outils et les petites machines sont transportés à l’abri des intempéries et mis à disposition directement sur le lieu d’intervention. Le wagon complète les véhicules moteurs et les wagons de matériel du train de travaux.'] }, { titel: 'Équipement et accessibilité', liste: ['Wagon couvert avec portes latérales', 'Place pour outils, pièces de rechange et équipement d’atelier', 'Local de travail abrité pour l’équipe de chantier', 'Pas de propulsion propre'], p: ['Le Xs 45 n’est pas une voiture voyageurs. Des personnes ne peuvent y voyager que selon les prescriptions d’exploitation.'] }, { titel: 'Position de marche', p: ['Avant tout mouvement, les portes latérales, l’équipement mobile et les postes de travail doivent être assurés. Les personnes ne peuvent se trouver dans le wagon que dans les conditions d’exploitation autorisées.'] }]
});

uebZug('xs-48', {
  typ: 'Wagon-atelier et d’équipe avec nacelles élévatrices',
  text: ['Le Xs 48 combine un wagon couvert d’outillage et d’atelier avec des nacelles élévatrices.', 'Il soutient en particulier les travaux sur les installations de la ligne de contact.'],
  kennzahlen: [['2', 'essieux'], ['15,0 m', 'longueur'], ['16,5 t', 'poids à vide'], ['23 t', 'charge utile selon la présentation']],
  daten: { 'Bauart': 'wagon de travail couvert', 'Gewicht': '16,5 t à vide, env. 39,5 t en charge (calculé)', 'Nutzlast': '23 t selon la présentation', 'Ausrüstung': 'nacelles élévatrices', 'Sicherheitsregel': 'couper la ligne de contact avant de lever les nacelles', 'Einsatz': 'outillage et atelier, travaux sur la ligne de contact' },
  specNote: 'La présentation de formation exige expressément de couper la ligne de contact avant de lever les nacelles.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les documents CFF utilisés n’indiquent ni le constructeur ni le nombre de wagons. Le wagon figure dans le support de formation CFF de 2022, mais pas comme type propre dans le catalogue 2026.'] }, { titel: 'Utilisation et technique', p: ['Les nacelles permettent de travailler au-dessus du plancher du wagon. Le wagon réunit ainsi matériel, atelier et poste de travail en hauteur.'] }, { titel: 'Équipement et accessibilité', liste: ['Wagon couvert pour outils et atelier', 'Plates-formes élévatrices pour les travaux sur la ligne de contact', 'Pas de propulsion propre'], p: ['Le Xs 48 n’est pas une voiture voyageurs. Avant de lever les plates-formes, la ligne de contact doit être déclenchée et mise à la terre.'] }, { titel: 'Sécurité électrique', p: ['Avant le levage, la ligne de contact doit être coupée, mise à la terre et assurée contre toute remise sous tension. Pour la marche, les nacelles sont rentrées, et les portes et le chargement verrouillés.'] }],
  bilder: ['Wagon de travail pour la ligne de contact Xs 40 85 95 48 453-1 près de Bad Ragaz']
});

uebZug('xs-mannschaftswagen', {
  beiname: 'Wagon d’équipe',
  typ: 'Wagon d’atelier et de soutien à deux essieux',
  text: ['Ce wagon, simplement désigné Xs dans le document de formation, transporte de l’outillage et de l’équipement d’atelier.', 'Comme wagon de soutien du train de travaux, il offre à l’équipe un espace de travail abrité.'],
  kennzahlen: [['2', 'essieux'], ['14,0 m', 'longueur'], ['16,5 t', 'poids à vide'], ['24 t', 'charge utile selon la présentation']],
  daten: { 'Gewicht': '16,5 t à vide, env. 40,5 t en charge (calculé)', 'Nutzlast': '24 t selon la présentation', 'Status': 'désignation générique, pas de type de marche distinct en 2026' },
  specNote: '« Xs » est une désignation de construction large. Sans numéro de véhicule, le wagon ne peut être attribué à aucun type de marche actuel précis.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['« Xs » est une désignation collective. Les documents CFF utilisés n’indiquent ni le constructeur ni le nombre de wagons ; le catalogue 2026 n’a pas de type propre clairement défini.'] }, { titel: 'Utilisation et technique', p: ['Le wagon sert surtout à la logistique et au travail de l’équipe du train de travaux. Ce n’est pas une voiture voyageurs ordinaire et il ne peut être utilisé que selon son autorisation d’exploitation.'] }, { titel: 'Équipement et accessibilité', liste: ['Wagon couvert avec portes latérales', 'Outils et équipement d’atelier', 'Zone de travail abritée pour l’équipe', 'Pas de propulsion propre'], p: ['Le wagon n’est pas une voiture voyageurs et ne peut être utilisé que selon son autorisation d’exploitation.'] }, { titel: 'Arrimage', p: ['Outils, pièces de rechange et objets mobiles doivent être fixés avant chaque mouvement du train. Les portes latérales restent fermées et verrouillées pendant la marche.'] }]
});

uebZug('kirow-mannschaftswagen', {
  name: 'Wagon d’équipe Kirow',
  beiname: '',
  typ: 'Wagon d’accompagnement des convois de grues Kirow 250, 800 et 1200',
  text: ['Le catalogue des types de marche 2026 recense des convois de grues Kirow 250, 800 et 1200, chacun avec un wagon d’équipe.', 'Ce wagon d’accompagnement soutient le personnel, l’outillage et la logistique d’intervention de la grue ferroviaire. Les deux KRC 800 des CFF ont été remplacées en 2016–2019 ; une entrée au catalogue ne prouve donc pas un effectif actuel.'],
  kennzahlen: [['3', 'types de grues avec wagon d’équipe'], ['1', 'wagon d’équipe par convoi'], ['80 km/h', 'vitesse du convoi'], ['3', 'types de marche au catalogue 2026']],
  daten: { 'Fahrzeugrolle': 'wagon d’accompagnement dans le convoi de grue', 'Höchstgeschwindigkeit': '80 km/h (convoi entier)', 'Einzelfahrdaten': 'non publiées séparément', 'Fahrtypen': '5089–5091 (convois de grues entiers)', 'Status': 'types de marche actifs au catalogue 2026 ; KRC 800 remplacées aux CFF en 2016–2019' },
  specNote: 'Dans le catalogue des types de marche, les CFF ne publient que les valeurs globales des convois de grues indissociables, et non les dimensions du wagon d’équipe seul.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['La voiture d’équipe appartient toujours à une composition de grue Kirow 250, 800 ou 1200 ; le catalogue répertorie les compositions complètes comme types 5089–5091. Les données individuelles et le constructeur de la voiture d’accompagnement ne sont pas publiés séparément. Les deux KRC 800 des CFF ont été remplacées en 2016–2019.'] }, { titel: 'Utilisation et technique', p: ['Le wagon d’équipe met à disposition de l’équipe de la grue du matériel, des moyens de travail et un local de séjour. Son équipement est adapté au convoi de grue concerné.'] }, { titel: 'Équipement et accessibilité', liste: ['Matériel et outils pour l’équipe de la grue', 'Local de séjour pour le personnel', 'Pas de propulsion propre, jusqu’à 80 km/h dans la composition'], p: ['La voiture accompagne le personnel de la grue ; ce n’est pas une voiture voyageurs.'] }, { titel: 'Attribution aux convois de grues', tabelle: { kopf: ['Grue', 'Formation', 'Convoi longueur / poids'], zeilen: [
      ['Kirow 250', '1 wagon de protection et 1 wagon d’équipe', '47 m / 169 t'],
      ['Kirow 800', '1 wagon de protection et 1 wagon d’équipe', '48 m / 203 t'],
      ['Kirow 1200', 'wagon de protection, de contrepoids et d’équipe', '63 m / 279 t']] } }, { titel: 'Convoi fixe', p: ['Pour la commande de sillons et les transferts, c’est l’unité complète qui est prise en compte. Les modifications de formation, de chargement ou de freinage ne sont autorisées que selon les documents d’exploitation validés.'] }]
});

uebZug('pwfz', {
  beiname: 'Véhicule de personnel et d’atelier',
  typ: 'Véhicule de personnel et d’atelier prévu',
  text: ['Le véhicule de personnel et d’atelier PWFZ est un projet de flotte prévu par CFF Infrastructure.', 'Il doit remplacer d’anciens wagons-ateliers et wagons d’équipe Xs par une série moderne et uniforme.'],
  kennzahlen: [['30', 'véhicules prévus'], ['2', 'premiers véhicules du projet'], ['28', 'autres véhicules de série'], ['juin 2025', 'état de la planification']],
  daten: { 'Langname': 'Personal Werkstatt Fahrzeug (véhicule de personnel et d’atelier)', 'Bestand': 'pas encore de flotte de série', 'Anzahl': '30 prévus (2 + 14 + 14)', 'Einsatz': 'personnel et atelier', 'Vorgänger': 'wagons de train de travaux Xs', 'Technische Daten': 'pas encore publiées', 'Status': 'acquisition prévue' },
  specNote: 'Les documents CFF accessibles au public indiquent le nombre et l’échelonnement, mais pas encore de dimensions ni de performances définitives.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['CFF Infrastructure prévoit 30 véhicules en trois étapes : 2, 14 et 14. Le constructeur et les données techniques ne sont pas encore publiés (état au 4 juin 2025).'] }, { titel: 'Utilisation et technique', p: ['Une série PWFZ uniforme doit réunir atelier, transport de matériel et soutien du personnel dans un concept de wagon moderne.'] }, { titel: 'Équipement et accessibilité', p: ['Le PWFZ doit réunir atelier, transport de matériel et soutien au personnel dans un seul véhicule. Des informations plus précises sur l’équipement ne sont pas encore publiées.'] }, { titel: 'Délimitation', p: ['Le PWFZ n’est pas encore un type de marche de série inscrit au catalogue 2026. Cette entrée décrit l’état du projet et non une série de véhicules déjà homologuée.'] }]
});

/* ---- 24-rangier.js ---- */
/* Français – locomotives de manœuvre */
uebZug('ee-922', {
  typ: 'Locomotive électrique de manœuvre pour gares voyageurs',
  text: ['L’Ee 922 est une locomotive électrique de manœuvre compacte de Stadler.', 'Les CFF l’ont achetée pour préparer les trains voyageurs et ajouter des voitures supplémentaires dans les grandes gares.'],
  kennzahlen: [['21', 'locomotives commandées'], ['750 kW', 'puissance maximale'], ['45 t', 'masse à vide'], ['2009–2010', 'livraison']],
  daten: { 'Spurweite': 'voie normale, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz et 25 kV 50 Hz', 'Gewicht': '45 t à vide', 'Bedienung': 'radiocommande', 'Einsatz': 'manœuvre trafic voyageurs' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les CFF ont commandé les 21 locomotives en décembre 2007. Stadler a remis le premier véhicule en juillet 2009 ; sept grandes gares devaient être équipées d’ici fin 2010.'] }, { titel: 'Utilisation et technique', p: ['L’Ee 922 a remplacé d’anciennes Ee 3/3 dans le trafic voyageurs. Son équipement bifréquence permet aussi de l’utiliser dans les gares frontières avec caténaire 25 kV.'] }, { titel: 'Équipement et accessibilité', liste: ['Radiocommande', 'Deux systèmes de courant : 15 kV 16,7 Hz et 25 kV 50 Hz', 'Compacte : 8,8 m de long', 'Pas de compartiment voyageurs'] }],
  bilder: ['Ee 922 011', 'Ee 922 012', 'Ee 922 021 à Brigue', 'Ee 922 006 à Bâle', 'Ee 922 002 à Romanshorn']
});

uebZug('eem-923', {
  typ: 'Locomotive de manœuvre bimode de CFF Cargo',
  text: ['L’Eem 923 est une locomotive électrique compacte avec moteur diesel auxiliaire, issue de la plateforme Butler de Stadler.', 'CFF Cargo l’utilise pour la manœuvre, la desserte et le service léger en ligne ; sans caténaire, le diesel auxiliaire fournit l’énergie.'],
  kennzahlen: [['30', 'locomotives commandées'], ['1500 kW', 'puissance électrique'], ['45 t', 'masse à vide'], ['2012–2013', 'mise en service de la flotte']],
  daten: { 'Plattform': 'Butler', 'Spurweite': 'voie normale, 1435 mm', 'Gewicht': '45 t à vide', 'Antrieb': 'électrique, avec moteur diesel auxiliaire pour le dernier kilomètre', 'Leistung': '1500 kW électrique', 'Höchstgeschwindigkeit': '120 km/h (FOS 2026), 100 km/h à la mise en service', 'Einsatz': 'CFF Cargo, manœuvre et desserte' },
  specNote: 'La différence de vitesse maximale provient de deux états de sources officielles : 100 km/h à la mise en service et 120 km/h dans le catalogue des types de marche 2026.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['CFF Cargo a présenté la première locomotive en 2011. La livraison a commencé début 2012 ; dès 2013, les 30 véhicules commandés devaient tous être en service.'] }, { titel: 'Utilisation et technique', p: ['Sous caténaire, la locomotive roule à l’électricité. Le moteur diesel permet la desserte de voies de raccordement sans caténaire, sans engager une deuxième locomotive.'] }, { titel: 'Équipement et accessibilité', liste: ['Propulsion électrique avec diesel auxiliaire pour les voies sans ligne de contact', 'Compacte : 9,1 m de long', 'Pas de compartiment voyageurs'] }],
  bilder: ['Eem 923 004 de CFF Cargo', 'Eem 923 016', 'Eem 923 030', 'Eem 923 «Le Jorat»', 'Eem 923 à Payerne']
});

uebZug('bm-44', {
  typ: 'Lourde locomotive de manœuvre diesel-électrique (historique)',
  text: ['La Bm 4/4 était une lourde locomotive de manœuvre diesel-électrique des CFF.', 'Les 46 machines ont remplacé des locomotives à vapeur dans la manœuvre lourde et pouvaient travailler indépendamment de la caténaire.'],
  kennzahlen: [['46', 'locomotives construites'], ['620 kW', 'puissance au catalogue des types de marche'], ['75 km/h', 'vitesse maximale'], ['1960–1970', 'années de construction']],
  daten: { 'Hersteller': 'SLM et SAAS', 'Antrieb': 'diesel-électrique', 'Spurweite': 'voie normale, 1435 mm', 'Gewicht': '72 t à vide', 'Einsatz': 'manœuvre lourde' },
  specNote: 'Cette page traite la série régulière 18401–18446, et non la Bm 4/4 II, qui en est distincte.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['46 locomotives ont été construites entre 1960 et 1970. Elles ont repris les lourds travaux de manœuvre et remplacé les dernières locomotives à vapeur utilisées pour ces tâches.'] }, { titel: 'Utilisation et technique', p: ['La Bm 4/4 manœuvrait des trains lourds, indépendamment de la ligne de contact. Sa propulsion diesel-électrique développait 620 kW ; elle roulait jusqu’à 75 km/h avec un effort au démarrage de 216 kN.'] }, { titel: 'Équipement et accessibilité', liste: ['Propulsion diesel-électrique, indépendante de la ligne de contact', 'Pas de compartiment voyageurs'] }, { titel: 'Statut historique', p: ['La série appartient à l’ancienne génération de locomotives diesel des CFF. Une entrée au catalogue des types de marche décrit le type de marche à des fins d’exploitation et ne prouve pas l’existence d’une flotte CFF actuelle.'] }],
  bilder: ['Bm 4/4 18427', 'Bm 4/4 18427 de face', 'Bm 4/4 avec train de sauvetage à Göschenen', 'Bm 4/4 18442']
});

uebZug('tm-232', {
  beiname: 'Tm III et Tm IV',
  typ: 'Tracteurs diesel modernisés',
  text: ['Aux CFF, la désignation Tm 232 regroupe deux séries de tracteurs modernisés différentes.', 'Les données techniques, numéros et années de construction se rapportent donc toujours à la sous-série Tm III ou Tm IV.'],
  kennzahlen: [['2', 'séries d’origine différentes'], ['52', 'Tm III devenus 232 001–052'], ['2003–2010', 'période des modernisations'], ['51', 'effectif de CFF Infrastructure avant le remplacement de 2019']],
  daten: { 'Unterserie ex Tm III': 'Tm 232 001–052', 'Unterserie ex Tm IV': 'Tm 232 101–146 et 201–234', 'Antrieb': 'diesel-hydraulique', 'Spurweite': 'voie normale, 1435 mm', 'Leistung': 'env. 260–280 kW selon la sous-série', 'Höchstgeschwindigkeit': '60–80 km/h selon la série', 'In Betrieb seit': '2003 (premières modernisations)', 'Einsatz': 'manœuvre légère et service des travaux' },
  specNote: 'Le chiffre 51 désigne l’effectif de CFF Infrastructure indiqué en 2019 avant le remplacement par le Tm 234-4, et non tous les Tm 232 jamais construits.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['52 Tm III ont été immatriculés Tm 232 001–052. D’autres véhicules sont issus de Tm IV ; la première transformation de ce groupe a eu lieu en 2007.'] }, { titel: 'Utilisation et technique', p: ['CFF Cargo a utilisé des Tm 232 pour la desserte légère. En 2019, CFF Infrastructure a commencé à remplacer ses 51 tracteurs de service des travaux par 35 nouveaux Tm 234-4.'] }, { titel: 'Équipement et accessibilité', liste: ['Propulsion diesel-hydraulique, indépendante de la ligne de contact', 'Puissance d’env. 260–280 kW selon la sous-série', 'Pas de compartiment voyageurs'] }],
  bilder: ['Tm IV (Tm 232)', 'Tm 232 211 de CFF Cargo', 'Tm 232 115', 'Tm 232 129 de CFF Cargo', 'Tm IV 8792 en ancienne livrée']
});

/* ---- 25-dienst.js ---- */
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
  text: ['La génération TES 18 comprend six trains d’extinction et de sauvetage modernes et automoteurs. Les CFF les ont commandés en deux lots de trois rames ; tous étaient livrés fin 2018.', 'Selon le site, la composition comprend un wagon-citerne d’extinction, un véhicule de matériel et un ou deux véhicules de sauvetage.'],
  kennzahlen: [['6', 'rames'], ['2018', 'livraison complète'], ['6 × 390 kW', 'traction de la version à quatre éléments'], ['100 km/h', 'vitesse maximale']],
  daten: { 'Hersteller': 'Windhoff / Dräger (installation d’extinction Vogt)', 'Ausführungen': 'à 3 ou 4 éléments', 'Länge': '83,22 m (quatre éléments)', 'Gewicht': 'env. 326 t (quatre éléments)', 'Leistung': '6 × 390 kW (quatre éléments)', 'Pumpenleistung': 'jusqu’à 6000 l/min à 10 bar', 'Rettungskapazität': 'jusqu’à 60 personnes par véhicule de sauvetage', 'Schleppleistung': 'jusqu’à 1600 t en tunnel', 'Autonomer Betrieb': 'env. 4–5 heures', 'Anzahl': '6 rames (2 lots de 3)' },
  specNote: 'Longueur, masse et puissance valent pour le TES 18 à quatre éléments ; les trains à trois éléments sont plus courts et plus légers.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Après une première commande de trois trains pour Genève, Melide et Brigue, les CFF ont levé en 2016 une option pour trois rames supplémentaires destinées à Zurich, Winterthour et Berne.', 'La génération compte ainsi six trains ; la livraison s’est achevée fin 2018.'] }, { titel: 'Utilisation et technique', p: ['Les six trains sont stationnés à Genève, Melide, Brigue, Zurich, Winterthour et Berne. Un train à quatre véhicules mesure 83,22 m, pèse env. 326 t, a six entraînements de 390 kW et roule jusqu’à 100 km/h. Il est équipé de l’ETCS et peut travailler de façon autonome pendant quatre à cinq heures environ.'] }, { titel: 'Équipement et accessibilité', p: ['Un air respirable autonome alimente les cabines de conduite et les espaces de sauvetage. Chaque véhicule de sauvetage accueille jusqu’à environ 60 personnes dans son espace protégé ; le train peut remorquer jusqu’à 1600 tonnes en tunnel.', 'L’équipement d’extinction offre 45 000 litres d’eau et des pompes jusqu’à 6000 litres par minute.'] }],
  bilder: ['TES 18 «Bern» près d’Einigen', 'TES 18 à Genève', 'Véhicule de sauvetage du TES 18 à Genève', 'TES 18 à Genève, vue latérale', 'Véhicule de matériel de secours Xtmas 99 85 9177 015 à l’Innotrans 2018']
});

uebZug('lrz-14', {
  beiname: 'Train d’extinction et de sauvetage',
  typ: 'Train d’extinction et de sauvetage à quatre éléments pour longs tunnels',
  text: ['Le TES 14 est un développement à quatre éléments plus performant, conçu pour les longs tunnels ferroviaires. Il dispose d’un deuxième véhicule de sauvetage.', 'Deux rames ont été acquises dans le cadre du renforcement du concept d’intervention pour l’axe du Gothard.'],
  kennzahlen: [['2', 'rames'], ['2014–2016', 'construction et mise en service'], ['6 × 390 kW', 'puissance de traction installée'], ['100 km/h', 'vitesse maximale']],
  daten: { 'Formation': 'wagon-citerne d’extinction + véhicule de matériel + 2 véhicules de sauvetage', 'Rettungsfahrzeuge': 'chacun 22,06 m / 78 t', 'Gewicht': 'env. 326 t', 'Atemluft': 'env. 1,98 mio de l', 'Anhängelast': '940 t sur 27 ‰', 'Anzahl': '2 rames', 'Einsatz': 'axe du Gothard et réseau de tunnels' },
  specNote: 'La désignation TES 14 nomme la génération. La mise en service s’est faite par étapes jusqu’à l’ouverture du tunnel de base du Gothard.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les deux rames ont été acquises à partir de 2012 et rendues opérationnelles avant la mise en service du tunnel de base du Gothard.'] }, { titel: 'Utilisation et technique', p: ['Les deux trains sont destinés à l’axe du Gothard et au réseau de tunnels. Un train pèse env. 326 t, a six entraînements de 390 kW et roule jusqu’à 100 km/h. Sur une rampe de 27 ‰, il peut tirer 940 t.'] }, { titel: 'Équipement et accessibilité', p: ['Chaque véhicule de sauvetage offre de la place à environ 60 personnes, ou à 40 personnes et six civières. Les espaces pressurisés, les sas et les raccordements médicaux permettent des évacuations depuis des tronçons de tunnel enfumés.'] }, { titel: 'Profil de performance', p: ['Grâce au deuxième véhicule de sauvetage, la composition à quatre éléments offre plus de capacité de sauvetage et plus d’air respirable que les générations précédentes. Plusieurs véhicules motorisés assurent un effort de traction élevé et la redondance.'] }],
  bilder: ['Nouveau TES 14 au centre d’entretien et d’intervention d’Erstfeld', 'TES 14 «Uri» en gare d’Erstfeld', 'TES 14 «Uri» des sapeurs-pompiers d’entreprise d’Erstfeld', 'TES 14 à Erstfeld']
});

uebZug('lrz-08', {
  beiname: 'Train d’extinction et de sauvetage',
  typ: 'Train d’extinction et de sauvetage de la génération 2008',
  text: ['Les CFF ont acquis huit trains d’extinction et de sauvetage de la génération TES 08, composés d’un wagon-citerne d’extinction, d’un véhicule de matériel et d’un véhicule de sauvetage.', 'Ils ont été conçus pour des interventions rapides sur le réseau à ciel ouvert et en tunnel.'],
  kennzahlen: [['8', 'rames'], ['2008–2010', 'livraison'], ['4 × 390 kW', 'puissance de traction installée'], ['100 km/h', 'vitesse maximale']],
  daten: { 'Gewicht': 'env. 248 t', 'Atemluft': 'env. 1,44 mio de l', 'Rettungsplätze': 'env. 60, ou 40 + 9 civières', 'Anhängelast': '730 t sur 27 ‰', 'Anzahl': '8 rames', 'In Betrieb seit': '2008–2010 (livraison)' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['La génération a été commandée en 2006 et livrée de 2008 à 2010. Huit rames ont complété le réseau d’intervention des CFF.'] }, { titel: 'Utilisation et technique', p: ['Le wagon-citerne, le véhicule de matériel et le véhicule de sauvetage fonctionnent comme une unité. Deux groupes motopropulseurs de 390 kW dans le véhicule de matériel et deux dans le véhicule de sauvetage entraînent le train.', 'L’espace de sauvetage pressurisé fonctionne indépendamment de l’air extérieur et permet d’évacuer des personnes depuis des zones enfumées.'] }, { titel: 'Équipement et accessibilité', liste: ['Env. 60 places de sauvetage, ou 40 places et 9 civières', 'Local de sauvetage protégé en surpression, indépendant de l’air extérieur', '48 000 l d’eau et 1800 l d’émulseur', 'Env. 1,44 million de litres d’air respirable'] }],
  bilder: ['TES 08 (TES 08 Olten) à Renens', 'Véhicule de sauvetage XTmas 99 85 9174 004 «Lausanne» à Berne', 'XTmas 99 85 9174 008 «Olten» à Lausanne', 'TES 08 à Winterthour']
});

uebZug('lrz-04', {
  beiname: 'Train d’extinction et de sauvetage',
  typ: 'Train d’extinction et de sauvetage de la génération 2004',
  text: ['Le TES 04 était la première génération récente du train d’extinction et de sauvetage des CFF et a marqué le passage du train remorqué par une locomotive au train automoteur.', 'L’unique rame réunit agents d’extinction, espace de sauvetage et traction propre pour les interventions sur les lignes et en tunnel.'],
  kennzahlen: [['1', 'rame de cette génération'], ['2004', 'mise en service'], ['4 × 315 kW', 'puissance de traction installée'], ['100 km/h', 'vitesse maximale']],
  daten: { 'Gewicht': 'env. 210 t', 'Atemluft': 'env. 1,44 mio de l', 'Anzahl': '1 rame', 'Einsatz': 'éteindre, sauver, dégager' },
  specNote: 'Le nombre et l’année se rapportent à la génération distincte TES 04. Les générations suivantes sont comptées séparément.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les constructeurs sont Windhoff et Dräger ; la base est le Windhoff MPV. Les CFF ont une rame, mise en service en 2004. Elle se compose d’un wagon-citerne d’extinction, d’un véhicule de matériel et d’un véhicule de sauvetage.'] }, { titel: 'Utilisation et technique', p: ['Le train intervient lors d’événements sur le réseau ferroviaire, en particulier dans les longs tunnels et sur les tronçons difficiles d’accès.'] }, { titel: 'Équipement et accessibilité', p: ['Les véhicules transportent eau, mousse, matériel de sauvetage et de relevage. Le véhicule de matériel et le véhicule de sauvetage ont chacun deux groupes motopropulseurs ; le train n’a donc pas besoin d’une locomotive auxiliaire.', 'Le véhicule de sauvetage possède un espace intérieur protégé, alimenté en air respirable, pour les évacuations depuis des tunnels enfumés.'] }],
  bilder: ['TES 04 à Brigue, 2016', 'TES 04 à Hohtenn', 'TES 04 en gare de Hohtenn']
});

uebZug('xrotm', {
  name: 'Fraises à neige',
  typ: 'Véhicules spéciaux de déneigement',
  text: ['CFF Infrastructure utilise plusieurs types de fraises à neige automotrices.', 'Le règlement d’exploitation distingue quatre séries, qui remplissent des tâches différentes selon la quantité de neige, la ligne et le lieu d’intervention.'],
  kennzahlen: [['4', 'séries dans le règlement'], ['17', 'véhicules selon les plages de numéros'], ['60–80 km/h', 'Vmax des grands types'], ['95–115', 'numéros d’exploitation']],
  daten: { 'Xrotm 4/4': 'n° 95–96, 2 véhicules, 80 km/h', 'Xrotm 2/3': 'n° 97, 1 véhicule, 60 km/h', 'XTm': 'n° 102–109, 8 véhicules, 45 km/h (100 km/h remorqué)', 'Xrotm ex Tm 232': 'n° 110–115, 6 véhicules, 80 km/h (90 km/h remorqué)', 'Anzahl': '17 selon les plages de numéros', 'Einsatz': 'déblaiement de la neige et des congères' },
  specNote: 'Le nombre résulte des plages de numéros publiées dans le règlement d’exploitation des CFF et n’est pas un effectif confirmé séparément.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Selon les prescriptions d’exploitation, CFF Infrastructure distingue quatre séries avec 17 chasse-neige rotatifs au total.'], tabelle: { kopf: ['Série', 'Numéros', 'Nombre', 'Vitesse maximale'], zeilen: [['Xrotm 4/4', '95–96', '2', '80 km/h'], ['Xrotm 2/3', '97', '1', '60 km/h'], ['XTm', '102–109', '8', '45 km/h, remorqué 100 km/h'], ['Xrotm ex Tm 232', '110–115', '6', '80 km/h, remorqué 90 km/h']] } }, { titel: 'Utilisation et technique', p: ['Les grandes Xrotm 95, 96 et 97 sont engagées lors de fortes chutes de neige, notamment sur la ligne panoramique du Gothard.', 'Les petites Xrotm 110–115 conviennent aux gares et aux lignes moins fréquentées.'] }, { titel: 'Équipement et accessibilité', liste: ['Organes de déneigement rotatifs', 'Propulsion propre et capacité de déneigement selon la série', 'Pas de compartiment voyageurs'] }, { titel: 'Exploitation', p: ['Les fraises à neige sont des véhicules spéciaux dotés d’organes de déblaiement rotatifs. Selon la série, la traction propre, la capacité de déblaiement, la vitesse en ligne et la vitesse de remorquage admise diffèrent.'] }],
  bilder: ['Fraise à neige Xrotm à Erstfeld', 'Fraise à neige Xrotm n° 95 à Erstfeld', 'Xrotm 95 en gare d’Erstfeld', 'Numéro de véhicule de la Xrotm 95', 'Xrotm 4/4 95 à Erstfeld']
});

uebZug('diagnose', {
  name: 'Véhicule de diagnostic',
  typ: 'Véhicule de diagnostic automoteur Mermec Xtmass',
  text: ['Le véhicule de diagnostic automoteur Xtmass ROGER 1000 contrôle l’état de l’infrastructure ferroviaire à grande vitesse.', 'Des systèmes de mesure relèvent la voie, la caténaire et d’autres installations sans interrompre inutilement l’exploitation régulière.'],
  kennzahlen: [['160 km/h', 'vitesse maximale'], ['672 kW', 'puissance maximale'], ['64 t', 'masse à vide'], ['23,9 m', 'longueur du véhicule']],
  daten: { 'Fahrzeugart': 'véhicule de diagnostic automoteur', 'Gewicht': '64 t à vide, au maximum 66 t', 'Einsatz': 'mesure de la voie et de la caténaire' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Mermec a construit le véhicule de diagnostic automoteur Xtmass ROGER 1000 pour CFF Infrastructure. Les sources utilisées n’indiquent pas de nombre de véhicules.'] }, { titel: 'Utilisation et technique', p: ['ROGER 1000 réunit plusieurs systèmes de mesure et de diagnostic dans un seul véhicule. Sa vitesse élevée permet des contrôles sur les lignes principales en perturbant peu l’horaire.'] }, { titel: 'Équipement et accessibilité', liste: ['Systèmes de mesure et de diagnostic pour la voie, la ligne de contact et d’autres installations', 'Propulsion propre de 672 kW, jusqu’à 160 km/h', 'Pas de compartiment voyageurs'] }, { titel: 'Engagement au-delà de la Suisse', p: ['Mermec documente une campagne de mesure du véhicule CFF sur une ligne à grande vitesse allemande. Cela montre son aptitude aux courses de mesure sur des réseaux performants.'] }],
  bilder: ['Automotrice de mesure XTmass 99 85 9160 001 de MerMec à Lausanne', 'ROGER 1000 (XTmass 99 85 9160 001) à Lausanne, 2009']
});

uebZug('kirow-krc-1100', {
  typ: 'Lourde grue ferroviaire pivotante pour intervention et construction',
  text: ['La grue CFF de la classe Kirow 1100 appartient à la nouvelle génération de grandes grues.', 'Avec la Multi Tasker 1200, elle a remplacé les deux anciennes KRC 800.'],
  kennzahlen: [['1', 'grue CFF de cette classe'], ['2019', 'fin du programme de remplacement'], ['125 t', 'capacité de levage maximale'], ['16°', 'rotation avec voie voisine libre']],
  daten: { 'Bauart': 'grue ferroviaire pivotante', 'Schwenkwinkel': 'jusqu’à 16° avec voie voisine libre', 'Eigenmasse': '112 t en ordre de transport (fiche technique du constructeur)', 'Transport': 'avec wagon de protection, contrepoids posé dessus', 'Netz': 'réseau CFF à voie normale', 'Vorgänger': 'l’une des deux KRC 800', 'In Betrieb seit': '2019 (programme de remplacement 2016–2019)', 'Einsatz': 'relevage, ponts provisoires, gros travaux' },
  specNote: '125 t est la capacité de levage maximale et non la masse de la grue. Les 112 t en ordre de transport proviennent de la fiche technique Kirow de la KRC 1100, et non d’un document CFF.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['En décembre 2017, les CFF ont choisi la KRC 1100. Kirow décrit le remplacement des deux KRC 800 par deux nouvelles grandes grues entre 2016 et 2019 ; l’une d’elles appartient à la classe 1100.'] }, { titel: 'Utilisation et technique', p: ['Selon le constructeur, le contrepoids biseauté permet une rotation jusqu’à 16 degrés tout en laissant libre le gabarit de la voie voisine. En position de transport, le contrepoids repose sur un wagon de protection.'] }, { titel: 'Équipement et accessibilité', liste: ['Capacité de levage jusqu’à 125 t dans des conditions définies', 'Contrepoids biseauté, rotation jusqu’à 16° en laissant la voie voisine libre', 'Transport avec un wagon de protection qui porte le contrepoids', 'Pas de compartiment voyageurs'] }, { titel: 'Indication de capacité', p: ['La capacité de levage maximale ne vaut que dans des conditions définies. La charge admise diminue avec la portée et dépend du calage et de la position de la voie.'] }]
});

uebZug('kirow-800', {
  typ: 'Grues ferroviaires historiques des années 1990',
  text: ['En 1996, les CFF ont reçu deux grues Kirow de la classe KRC 800.', 'Elles servaient aux gros travaux de relevage et de construction et ont été remplacées entre 2016 et 2019 par de nouvelles grandes grues.'],
  kennzahlen: [['2', 'grues livrées'], ['1996', 'livraison'], ['203 t', 'masse du convoi de grue'], ['80 km/h', 'vitesse maximale']],
  daten: { 'Formation': 'grue avec wagon de protection et wagon pour l’équipe', 'Gewicht': 'env. 203 t (convoi entier)', 'Länge': 'env. 48 m (convoi entier)', 'Nachfolger': 'KRC 1100 et Multi Tasker 1200' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Kirow Leipzig a livré deux grues KRC 800 aux CFF en 1996. Entre 2016 et 2019, les CFF les ont remplacées par une Multi Tasker 1200 et une grue de la classe 1100.'] }, { titel: 'Utilisation et technique', p: ['Les deux grues étaient utilisées pour les gros levages sur les chantiers et après des événements. Leur capacité de levage dépend de la portée, du calage et de la position de la voie.', 'Pour les trajets, elles étaient acheminées comme convoi de train marchandises avec wagon de protection et wagon pour l’équipe.'] }, { titel: 'Équipement et accessibilité', liste: ['Composition de la grue, d’un wagon de protection et d’une voiture d’équipe, env. 48 m et 203 t', 'Voiture d’équipe pour l’équipe de la grue', 'Pas de propulsion propre, jusqu’à 80 km/h dans un train'] }, { titel: 'Remplacement', p: ['Kirow documente le remplacement des deux grues livrées en 1996 par une Multi Tasker 1200 et une grue de la classe 1100 entre 2016 et 2019.'] }]
});

uebZug('kirow-250', {
  typ: 'Grue ferroviaire pivotante pour levages moyens',
  text: ['La Kirow KRC 250 est une grue ferroviaire pivotante pour les travaux de construction et d’entretien.', 'Au moins une grue CFF de ce type est attestée au plus tard en 2005 ; un nombre total exact et une année d’acquisition ne sont pas documentés de manière fiable publiquement.'],
  kennzahlen: [['169 t', 'masse du convoi de grue'], ['47 m', 'longueur du convoi'], ['80 km/h', 'vitesse maximale'], ['2005', 'au plus tard dans l’effectif CFF']],
  daten: { 'Formation': 'grue avec wagon de protection ou de contrepoids et wagon pour l’équipe', 'Gewicht': 'env. 169 t (convoi entier)', 'Länge': 'env. 47 m (convoi entier)', 'Antrieb': 'entraînement hydraulique de la grue, sans traction propre', 'Tragfähigkeit': 'selon la portée', 'Anzahl': 'au moins 1, nombre total non attesté', 'Im SBB-Bestand': 'au plus tard en 2005 (preuve photographique)' },
  specNote: 'Le nombre et l’année sont volontairement indiqués comme minimum : une KRC 250 des CFF est documentée en image en 2005. La masse de la grue et la charge sont des valeurs différentes.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Kirow Leipzig a construit la KRC 250. Au moins une grue CFF de ce type est attestée au plus tard en 2005 ; le nombre total et l’année d’achat ne sont pas documentés de façon fiable.'] }, { titel: 'Utilisation et technique', p: ['La KRC 250 lève des travées de voie, des éléments d’aiguillage et d’autres charges lourdes. Les wagons de protection et de contrepoids font partie du convoi d’exploitation ; le wagon pour l’équipe offre des locaux de travail et de séjour.'] }, { titel: 'Équipement et accessibilité', liste: ['Composition avec wagon de protection ou de contrepoids et voiture d’équipe, env. 47 m et 169 t', 'Entraînement hydraulique de la grue, pas de propulsion propre', 'Voiture d’équipe avec locaux de travail et de séjour', 'Jusqu’à 80 km/h dans un train'] }, { titel: 'Sources', p: ['Le catalogue des types de marche des CFF atteste le type de construction, la composition et les données de marche. Il n’indique ni effectif actuel ni année d’acquisition.', 'Une photo atteste au moins une KRC 250 des CFF en 2005. Les sources publiques ne permettent actuellement pas d’en dire davantage avec certitude.'] }]
});

uebZug('kirow-krc-100', {
  typ: 'Grue ferroviaire pivotante compacte pour construction et intervention',
  text: ['La Kirow KRC 100 est une grue ferroviaire pivotante compacte des CFF. Douze véhicules ont été livrés en 2006 et 2007.', 'Son faible rayon arrière et son contrepoids fixe permettent de travailler en influençant peu les voies voisines.'],
  kennzahlen: [['12', 'grues livrées'], ['2006–2007', 'livraison'], ['70 t', 'masse en service de la grue'], ['120 km/h', 'admis en remorque']],
  daten: { 'Länge': '11,0 m hors tampons', 'Gewicht': '70 t en service', 'Tragfähigkeit': 'selon la portée, charge maximale non attestée', 'Höchstgeschwindigkeit': '120 km/h remorquée', 'Gegengewicht': 'fixe', 'In Betrieb seit': '2006–2007 (déc. 2006 à oct. 2007)', 'Einsatz': 'construction de voies, pose de mâts, intervention' },
  specNote: 'La capacité de levage des grues ferroviaires dépend fortement de la portée, du calage et de la position de la voie.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Kirow a livré douze KRC 100 entre décembre 2006 et octobre 2007. La série a été acquise pour des interventions décentralisées de construction et de secours.'] }, { titel: 'Utilisation et technique', p: ['La partie supérieure pivotante permet de travailler latéralement et dans l’axe de la voie, par exemple pour poser des mâts ou des éléments de protection en acier.', 'Pour les trajets, la grue est engagée comme train de travaux avec wagons de protection et d’accompagnement ; elle n’a pas besoin de traction propre.'] }, { titel: 'Équipement et accessibilité', liste: ['Contrepoids fixe et petit rayon arrière', 'Partie supérieure pivotante', 'Pas de propulsion propre, jusqu’à 120 km/h remorquée', 'Pas de compartiment voyageurs'] }]
});

uebZug('bendini', {
  typ: 'Wagon-grue compact de la classe 30 tm',
  text: ['Le Bendini est un wagon-grue compact pour les levages moyens et légers dans l’entretien de l’infrastructure ferroviaire.', 'Le catalogue des types de marche des CFF le recense comme wagon-grue XTms actif et sans traction.'],
  kennzahlen: [['30 tm', 'classe de grue'], ['100 km/h', 'vitesse de transport'], ['38 t', 'masse du véhicule'], ['8,1 m', 'longueur du véhicule']],
  daten: { 'Basistyp': 'machine de chantier', 'Fahrzeugart': 'wagon marchandises', 'Anzahl': 'plusieurs, nombre total non confirmé', 'Fahrzeugnummern': 'exemples de XTm 91551 à 91596', 'In Betrieb seit': 'années 1980 (châssis de 1984, 1985 et 1989 attestés)', 'Einsatz': 'entretien et montage' },
  specNote: 'L’indication 30 tm désigne la classe de grue utilisée dans le catalogue CFF ; elle n’équivaut pas à la masse du véhicule de 38 t. Le nombre et l’année sont volontairement indiqués comme minimum ou période.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les wagons-grues viennent de Bendini ; des châssis de 1984, 1985 et 1989 sont attestés. Les CFF en ont plusieurs, le nombre total n’est pas confirmé. Des exemples portent des numéros entre XTm 91551 et 91596.'] }, { titel: 'Utilisation et technique', p: ['Avec seulement 8,1 mètres de long, le Bendini est nettement plus compact que les lourds convois Kirow.', 'Il convient aux travaux locaux de montage et de levage qui ne nécessitent pas de grande grue lourde.'] }, { titel: 'Équipement et accessibilité', liste: ['Classe de grue 30 tm', 'Compact : 8,1 m de long, 38 t', 'Pas de propulsion propre, jusqu’à 100 km/h dans un train'] }, { titel: 'Remplacement prévu', p: ['Dans la planification des acquisitions de CFF Infrastructure, un projet de grues pour charges moyennes figure expressément comme remplaçant du Bendini et d’autres grues plus anciennes.', 'Le catalogue des types de marche 2026 indique néanmoins toujours le Bendini comme actif.'] }]
});

uebZug('fahrleitung', {
  name: 'Véhicules pour la ligne de contact',
  typ: 'Véhicules de service pour la construction et l’entretien de la caténaire',
  text: ['Les véhicules caténaire amènent le personnel, les outils et le matériel directement à la caténaire.', 'CFF Infrastructure utilise pour cela plusieurs séries et versions ; Hubi, Krani et Combi 4A en sont des exemples cités publiquement.'],
  kennzahlen: [['plusieurs', 'séries et versions'], ['Hubi', 'exemple de véhicule'], ['Krani', 'exemple de véhicule'], ['Combi 4A', 'exemple de véhicule']],
  daten: { 'Fahrzeuggruppe': 'véhicules de service caténaire', 'Arbeitsmittel': 'plateforme de travail élévatrice', 'Weitere Ausrüstung': 'grue et plateforme à matériel', 'Antrieb': 'selon la série', 'Höchstgeschwindigkeit': 'selon la série', 'Arbeitsort': 'caténaire et supports', 'Anzahl': 'pas publié comme nombre total', 'Einsatz': 'montage, contrôle et réparation' },
  specNote: 'Le véhicule caténaire n’est pas une série unique. Les valeurs techniques et années de construction doivent être attribuées à un type précis ou à un numéro de véhicule.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['CFF Infrastructure utilise plusieurs séries et versions. Les exemples cités publiquement sont Hubi, Krani et Combi 4A ; aucun nombre total n’est publié.'] }, { titel: 'Utilisation et technique', p: ['Les véhicules soutiennent l’inspection, le dépannage et le renouvellement de la caténaire. Les plateformes de travail donnent accès au fil de contact ; les grues lèvent mâts, consoles et matériel.'] }, { titel: 'Équipement et accessibilité', liste: ['Plate-forme élévatrice pour accéder au fil de contact', 'Grue et plate-forme de matériel', 'Propulsion et vitesse selon la série'] }, { titel: 'Délimitation', p: ['Cette page décrit le groupe de véhicules. Un portrait technique individuel nécessite la désignation exacte de la série et le numéro du véhicule, car puissance, masse, longueur et année de construction varient fortement.'] }],
  bilder: ['Wagon-grue «Krani 3» avec nacelle pour la construction de caténaires', 'Wagon de montage du Combi XTmass 99 85 9236 051 près de Bad Ragaz', 'Train de construction caténaire Combi entre Bad Ragaz et Sargans, 2019']
});

/* ---- 26-historisch.js ---- */
/* Français – véhicules historiques */
uebDict({
  'Krokodil': 'Crocodile',
  '15 kV 16,7 Hz AC': '15 kV 16,7 Hz CA',
  'elektrisch, Stangenantrieb': 'électrique, transmission par bielles'
});

uebZug('ee-33', {
  typ: 'Locomotive électrique de manœuvre de construction classique CFF (historique)',
  text: ['L’Ee 3/3 a été pendant des décennies la locomotive électrique de manœuvre classique des CFF.', 'Entre 1928 et 1966, plusieurs séries ont vu le jour ; malgré les évolutions techniques, elles ont conservé le concept de base à trois essieux accouplés.'],
  kennzahlen: [['136', 'locomotives construites'], ['500 kW', 'version récente'], ['50 km/h', 'version récente'], ['1928–1966', 'années de construction de la série']],
  daten: { 'Hersteller': 'SLM avec BBC, MFO ou SAAS', 'Länge': '9,51 m (série récente)', 'Gewicht': '45 t à vide (série récente)', 'Leistung': '500 kW (série récente)', 'Höchstgeschwindigkeit': 'selon la série, en dernier 50 km/h', 'Einsatz': 'manœuvre légère et moyenne', 'Status': 'dernière locomotive CFF retirée en 2020' },
  specNote: 'Puissance, masse et longueur valent pour la version récente décrite au catalogue des types de marche 2026 ; les séries plus anciennes diffèrent.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les CFF ont fait construire au total 136 Ee 3/3. Les locomotives manœuvraient voitures et wagons dans les gares et les dépôts.', 'La dernière machine active des CFF a été retirée en 2020.'] }, { titel: 'Utilisation et technique', p: ['L’Ee 3/3 manœuvrait des voitures et wagons dans les gares et dépôts. Trois essieux couplés sont entraînés par bielles ; la version plus récente développe 500 kW et roulait en dernier jusqu’à 50 km/h.'] }, { titel: 'Équipement et accessibilité', liste: ['Propulsion électrique par la ligne de contact (15 kV 16,7 Hz)', 'Trois essieux couplés à entraînement par bielles', 'Pas de compartiment voyageurs'] }, { titel: 'Délimitation', p: ['Les variantes bifréquence et quadricourant portent les désignations Ee 3/3 II et Ee 3/3 IV et forment techniquement des sous-séries distinctes.'] }],
  bilder: ['Ee 3/3 16408', 'Ee 3/3 16408 de côté', 'Ee 3/3 16451', 'Ee 3/3 16404 à Gossau SG', 'Ee 3/3 16383, construite en 1942']
});

uebZug('h-ce68ii', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['SLM a construit la partie mécanique, MFO l’équipement électrique. Les CFF ont reçu 33 locomotives ; les premières sont entrées en service en 1919.'] }, { titel: 'Utilisation et technique', p: ['La Ce 6/8 II tirait surtout des trains marchandises au Gothard. Deux châssis moteurs à trois essieux avec entraînement par bielles et de longs capots lui donnent la forme qui lui a valu le nom de « Crocodile ».'] }, { titel: 'Équipement et accessibilité', liste: ['Entraînement par bielles', 'Disposition des essieux (1′C)(C1′)', 'Pas de compartiment voyageurs'] }],
  beiname: 'Crocodile',
  typ: 'Locomotive électrique pour trains marchandises (historique)',
  text: ['Le «Crocodile» est la locomotive la plus célèbre de Suisse. Cette locomotive marchandises à transmission par bielles circulait surtout au Gothard.'],
  daten: { 'Hersteller': 'SLM (mécanique) et MFO (électrique)', 'Einsatz': 'trains marchandises au Gothard' },
  bilder: ['Crocodile Ce 6/8 II 14253 près de Rodi', 'Ce 6/8 II 14253 à Göschenen', 'Ce 6/8 II 14253 avec un train', 'Ce 6/8 II 14282 en livrée verte', 'Ce 6/8 II 14253 à Erstfeld']
});

uebZug('h-ce68iii', {
  beiname: 'Crocodile',
  typ: 'La jeune génération du Crocodile du Gothard (historique)',
  text: ['La Ce 6/8 III est la version perfectionnée de la célèbre locomotive suisse «Crocodile».', 'Ses capots articulés et sa transmission par bielles en ont fait un véhicule inimitable du trafic marchandises lourd.'],
  kennzahlen: [['18', 'locomotives'], ['1926', 'première mise en service'], ['75 km/h', 'après transformation'], ['131 t', 'masse en service']],
  daten: { 'Hersteller': 'SLM, MFO', 'Antrieb': 'bielles obliques', 'Gewicht': '131 t en service', 'Leistung': '1810 kW puissance unihoraire', 'Höchstgeschwindigkeit': '65 km/h, plus tard 75 km/h', 'Nummern': '14301–14318, dès 1956 Be 6/8 III 13301–13318', 'In Betrieb seit': '1926 (construites 1926–1927)', 'Ausmusterung': 'service régulier jusqu’en 1977', 'Einsatz': 'trains marchandises lourds' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['SLM et MFO ont construit en 1926 et 1927 18 locomotives numérotées 14301–14318. Dès 1956, elles se sont appelées Be 6/8 III 13301–13318.'] }, { titel: 'Utilisation et technique', p: ['La série était prévue pour les trains marchandises lourds au Gothard, sur les lignes d’accès et en plaine.', 'En 1956, la vitesse maximale autorisée a été portée à 75 km/h et la série a été redésignée Be 6/8 III. Le service régulier a pris fin en 1977.'] }, { titel: 'Équipement et accessibilité', liste: ['Entraînement par bielles inclinées', 'Capots articulés', 'Pas de compartiment voyageurs'] }, { titel: 'Conservation', p: ['La Ce 6/8 III 14305 est conservée comme véhicule historique. Elle illustre la forme Crocodile des CFF, connue dans le monde entier.'] }],
  bilder: ['Ce 6/8 III 14305', 'Ce 6/8 III lors d’une course de CFF Historic', 'Ce 6/8 III 14305 de côté', 'Ce 6/8 III 14305 en visite à Malmö (2015)', 'Plaque de constructeur de la Ce 6/8 III 14305']
});

uebZug('h-ae66', {
  beiname: 'Locomotive des cantons',
  typ: 'Locomotive des cantons et icône du Gothard (historique)',
  text: ['L’Ae 6/6 a été pendant des décennies la locomotive de puissance des CFF au Gothard.', 'Les 25 premières machines portaient les armoiries des cantons et des baguettes chromées ; les suivantes ont reçu les armoiries de villes et communes suisses.'],
  kennzahlen: [['120', 'locomotives'], ['125 km/h', 'vitesse maximale'], ['1952', 'première mise en service'], ['4300 kW', 'puissance unihoraire']],
  daten: { 'Gewicht': '120 t (prototypes 124 t)', 'Leistung': 'env. 4300 kW puissance unihoraire à la jante', 'In Betrieb seit': '1952 (série 1955–1966)', 'Einsatz': 'Gothard, trains voyageurs et marchandises lourds' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['SLM, BBC et MFO ont construit 120 locomotives numérotées 11401–11520. Après les prototypes de 1952, la série a suivi de 1955 à 1966. Elles ont été retirées de 2002 à 2013.'] }, { titel: 'Utilisation et technique', p: ['L’Ae 6/6 a d’abord marqué le trafic rapide et marchandises au Gothard. Avec l’arrivée de locomotives plus modernes, son service s’est déplacé de plus en plus vers le trafic marchandises et le Plateau.'] }, { titel: 'Équipement et accessibilité', liste: ['Six essieux moteurs (Co′Co′)', 'Armoiries cantonales et baguettes chromées sur les 25 premières locomotives, puis armoiries de villes et de communes', 'Pas de compartiment voyageurs'] }, { titel: 'Conservation', p: ['Plusieurs Ae 6/6 ont été conservées. L’Ae 6/6 11421 «Graubünden» fait partie de la collection de CFF Historic et maintient vivante l’époque des locomotives des cantons.'] }],
  bilder: ['Ae 6/6 11413 «Schaffhausen»', 'Ae 6/6 au Musée suisse des transports à Lucerne', 'Ae 6/6 en livrée rouge à Renens', 'Ae 6/6 de face', 'Ae 6/6 en vert avec baguettes chromées']
});

uebZug('h-ae47', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['SLM a construit la partie mécanique ; l’équipement électrique venait de BBC, MFO et SAAS. Les CFF ont acquis 127 locomotives ; la première est entrée en service en 1927.'] }, { titel: 'Utilisation et technique', p: ['Pendant des décennies, l’Ae 4/7 a été l’une des principales locomotives de ligne des CFF, en tête de trains voyageurs et marchandises sur tout le réseau. L’entraînement Buchli se trouve d’un seul côté de la locomotive, ce qui la rend facile à reconnaître.'] }, { titel: 'Équipement et accessibilité', liste: ['Entraînement Buchli', 'Disposition des essieux 2′Do1′', 'Pas de compartiment voyageurs'] }],
  typ: 'Locomotive électrique à transmission Buchli (historique)',
  text: ['L’Ae 4/7 a été pendant des décennies l’une des principales locomotives de ligne des CFF, reconnaissable à sa transmission Buchli d’un seul côté.'],
  daten: { 'Antrieb': 'électrique, transmission Buchli' },
  bilder: ['Ae 4/7 11026 à Brugg', 'Ae 4/7 10997 à Mendrisio', 'Ae 4/7 11026 à Bauma', 'Ae 4/7 avec train marchandises', 'Ae 4/7 près de Salgesch']
});

uebZug('h-ae36i', {
  typ: 'Locomotive Buchli pour le Plateau électrifié (historique)',
  text: ['L’Ae 3/6 I a été l’une des premières locomotives électriques importantes des CFF.', 'Sa transmission individuelle Buchli caractéristique et sa longue carrière ont fait de la série un symbole de l’électrification du Plateau.'],
  kennzahlen: [['114', 'locomotives'], ['110 km/h', 'vitesse maximale ultérieure'], ['1921', 'première mise en service'], ['73 ans', 'en service jusqu’en 1994']],
  daten: { 'Antrieb': 'transmission individuelle Buchli', 'Gewicht': '92–96 t en service', 'Leistung': '1470–1635 kW puissance unihoraire', 'In Betrieb seit': '1921 (construites 1920–1929)', 'Ausmusterung': 'jusqu’en 1994', 'Einsatz': 'trains voyageurs, rapides et marchandises' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['SLM, BBC, MFO et SAAS ont construit de 1920 à 1929, en plusieurs lots, 114 locomotives numérotées 10601–10714.'] }, { titel: 'Utilisation et technique', p: ['La grande série a été acquise en plusieurs lots et engagée en trafic voyageurs, rapide et marchandises. Les améliorations apportées pendant la construction ont créé des différences de puissance et de vitesse au sein de la flotte.'] }, { titel: 'Équipement et accessibilité', liste: ['Entraînement individuel Buchli', 'Pas de compartiment voyageurs'] }, { titel: 'Importance et conservation', p: ['Avec un service de 1921 à 1994, l’Ae 3/6 I compte parmi les séries de locomotives CFF les plus durables. Plusieurs locomotives ont été conservées par des musées et des associations, dont la 10700 dans l’entourage de CFF Historic.'] }],
  bilder: ['Ae 3/6 I 10700', 'Ae 3/6 I avec transmission Buchli', 'Ae 3/6 I 10650 à Brugg (2012)', 'Ae 3/6 I 10712 à Biel/Bienne (1988)', 'Ae 3/6 I 10638']
});

uebZug('h-ae814', {
  beiname: 'Landi-Lok',
  typ: 'Trois doubles locomotives uniques pour le Gothard (historique)',
  text: ['La désignation Ae 8/14 regroupe trois doubles locomotives développées individuellement.', 'Elles devaient tirer les lourds trains du Gothard sans locomotive de renfort en tête ou en pousse et étaient considérées à leur naissance comme extraordinairement puissantes.'],
  kennzahlen: [['3', 'prototypes'], ['1931', 'première mise en service'], ['jusqu’à 110 km/h', 'vitesse maximale'], ['8162 kW', 'puissance unihoraire maximale']],
  daten: { 'Hersteller': 'SLM, BBC ou MFO', 'Achsfolge': 'différente selon la locomotive', 'Länge': 'env. 34 m', 'Gewicht': '235,7–246 t en service', 'Leistung': '5514–8162 kW puissance unihoraire', 'In Betrieb seit': '1931 (construites 1931, 1932, 1938/40)', 'Einsatz': 'trains lourds du Gothard' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les 11801, 11851 et 11852 différaient par leur transmission, leur puissance et leur construction.', 'La 11852 a été construite pour l’Exposition nationale de 1939 et est devenue célèbre sous le nom de «Landi-Lok». Avec plus de 8 MW, elle a longtemps été la locomotive la plus puissante du monde.'] }, { titel: 'Utilisation et technique', p: ['Les locomotives devaient tirer de lourds trains du Gothard sans locomotive de renfort en tête ou en pousse. Elles mesurent env. 34 m, pèsent 235,7 à 246 t et développent 5514 à 8162 kW. La vitesse maximale était de 100 ou 110 km/h.'] }, { titel: 'Équipement et accessibilité', liste: ['Double locomotive en deux moitiés', 'Entraînement et construction différents sur chacune des trois locomotives', 'Pas de compartiment voyageurs'] }, { titel: 'Conservation', p: ['L’Ae 8/14 11852 est conservée chez CFF Historic à Erstfeld. Elle n’est actuellement pas en état de marche, mais peut être visitée comme pièce historique majeure.'] }],
  bilder: ['Ae 8/14 11801 à Biasca', 'Ae 8/14 11852 «Landi-Lok» au Musée suisse des transports', 'Ae 8/14 11851 neuve sur le pont du Kerstelenbach, 1932', 'Ae 8/14 11801 lors d’une course spéciale', 'Ae 8/14 11801 à Bellinzone']
});

uebZug('h-be46', {
  typ: 'Locomotive de la première génération électrique du Gothard (historique)',
  text: ['La Be 4/6 faisait partie de la première génération de locomotives électriques du Gothard.', 'Sa forme caractéristique lui a valu le surnom de «Rehbock» (chevreuil) ; elle a d’abord tiré les lourds trains rapides sur la ligne de montagne.'],
  kennzahlen: [['40', 'locomotives'], ['75 km/h', 'vitesse maximale'], ['1920', 'première mise en service'], ['107–110 t', 'masse en service']],
  daten: { 'Achsfolge': '6 essieux, dont 4 moteurs et 2 porteurs ; transmission par bielles', 'Gewicht': '107–110 t en service', 'Leistung': 'jusqu’à 1500 kW puissance unihoraire', 'In Betrieb seit': '1920 (construites 1920–1923)', 'Ausmusterung': 'jusqu’en 1976', 'Einsatz': 'trains rapides et marchandises' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['SLM et BBC ont construit de 1920 à 1923 40 locomotives numérotées 12303–12342. Elles ont été retirées jusqu’en 1976.'] }, { titel: 'Utilisation et technique', p: ['Les CFF ont commandé la série pour l’exploitation électrique du Gothard. Avec l’augmentation de la masse des trains, les machines ont été évincées par des types plus puissants et engagées plus tard sur le Plateau et dans des services secondaires.'] }, { titel: 'Équipement et accessibilité', liste: ['Entraînement par bielles avec quatre essieux moteurs et deux porteurs', 'Pas de compartiment voyageurs'] }, { titel: 'Conservation', p: ['La Be 4/6 12320 fait partie du parc de véhicules historiques. Elle rappelle l’époque pionnière de la traction électrique sur la ligne du Gothard.'] }],
  bilder: ['Be 4/6 12320 à côté du RAe TEE II 1053', 'Be 4/6 de CFF Historic entre Rämismühle-Zell et Rikon', 'Be 4/6 12320', 'Be 4/6 près de Rämismühle', 'Be 4/6 12339']
});

uebZug('h-re44i', {
  typ: 'Locomotive légère pour trains rapides de l’après-guerre (historique)',
  text: ['La Re 4/4 I a été la première locomotive à bogies des CFF.', 'Conçue pour des trains rapides et légers, elle a marqué avec les voitures légères en acier le trafic de qualité sur le Plateau.'],
  kennzahlen: [['50', 'locomotives'], ['125 km/h', 'vitesse maximale'], ['1946', 'première mise en service'], ['57 t', 'masse en service']],
  daten: { 'Länge': '14,7 / 14,9 m (selon la série)', 'Gewicht': '57 t en service', 'Leistung': '1850 / 1900 kW puissance unihoraire', 'Nummern': '10001–10050 (auparavant 401–450)', 'In Betrieb seit': '1946 (construites 1946–1951)', 'Einsatz': 'trains rapides et navettes, plus tard trains régionaux' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['SLM, BBC, MFO et SAAS ont construit de 1946 à 1951, en deux séries, 50 locomotives numérotées d’abord 401–450, puis 10001–10050.'] }, { titel: 'Utilisation et technique', p: ['Les locomotives ont été construites en deux séries. Leur faible poids, leur marche tranquille et leur vitesse maximale de 125 km/h les rendaient idéales pour les trains rapides et les navettes.', 'Plus tard, elles sont passées aux services régionaux et de renfort.'] }, { titel: 'Équipement et accessibilité', liste: ['Construction légère : 57 t en service', 'Première locomotive à bogies des CFF', 'Pas de compartiment voyageurs'] }, { titel: 'Conservation', p: ['Le retrait régulier a eu lieu de 1996 à 1998. La Re 4/4 I 10001 est conservée comme locomotive historique chez CFF Historic.'] }],
  bilder: ['Re 4/4 I 10029 à Stein am Rhein (1991)', 'Re 4/4 I 10019', 'Re 4/4 I (comme Re 410 009) près de Zurich, 2015', 'Re 4/4 I 10019 à Bâle Badischer Bahnhof', 'Re 4/4 I 10032 à České Velenice']
});

uebZug('h-tee', {
  typ: 'Rame automotrice quadricourant pour le trafic international haut de gamme (historique)',
  text: ['Le RAe TEE II reliait la Suisse sans changement de locomotive à l’Allemagne, la France, l’Italie et les Pays-Bas.', 'Sa technique quadricourant en a fait l’une des rames automotrices européennes les plus exigeantes techniquement de son époque.'],
  kennzahlen: [['5', 'rames'], ['140 km/h', 'en exploitation · technique 160 km/h'], ['1961', 'première mise en service'], ['4', 'systèmes de courant']],
  daten: { 'Zugbildung': 'à six éléments (état conservé ; les quatre premières rames étaient d’abord à cinq éléments)', 'Stromsystem': '15 kV et 25 kV CA, 1,5 kV et 3 kV CC', 'Gewicht': 'env. 309 t en service', 'Leistung': 'env. 2310 kW', 'Höchstgeschwindigkeit': '140 km/h en exploitation, 160 km/h technique', 'In Betrieb seit': '1961 (cinquième rame 1967)', 'Einsatz': 'Trans-Europ-Express, plus tard EuroCity' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['SIG et MFO ont construit cinq rames numérotées 1051–1055. Quatre sont arrivées en 1961, la cinquième en 1967.'] }, { titel: 'Utilisation et technique', p: ['Quatre unités ont été livrées en 1961 à cinq éléments, puis allongées d’une voiture intermédiaire ; la cinquième a suivi en 1967. Ces élégantes rames ont circulé notamment comme TEE Gottardo, Cisalpin, Edelweiss et Roland.', 'Dès 1988, elles ont roulé en gris comme RABe EC dans le trafic EuroCity.'] }, { titel: 'Équipement et accessibilité', liste: ['Quadricourant : 15 et 25 kV alternatif, 1,5 et 3 kV continu', 'Uniquement 1re classe en service TEE', 'Six caisses dans l’état conservé, 149,76 m de long', 'Accès surélevés avec marches'] }, { titel: 'Conservation', p: ['La rame RAe TEE II 1053 a été conservée. CFF Historic l’a remise dans son état TEE rouge et crème ; depuis 2003, elle circule lors de courses spéciales historiques.'] }],
  bilder: ['RAe TEE II à quai', 'RAe TEE II à Zurich HB, 1963', 'Avant du RAe TEE II', 'RAe TEE II en route', 'RAe TEE II à Zurich HB, 1963']
});

uebZug('h-roterpfeil', {
  beiname: 'Flèche rouge',
  typ: 'Automotrice électrique légère pour excursions et courses rapides (historique)',
  text: ['Les sept Flèches rouges électriques ont été livrées entre 1935 et 1938 sous la désignation CLe 2/4, puis redésignées plusieurs fois.', 'Leur forme aérodynamique rouge en a fait l’un des symboles les plus connus des CFF modernes des années 1930.'],
  kennzahlen: [['7', 'véhicules électriques de base'], ['125 km/h', 'vitesse maximale'], ['1935', 'première mise en service'], ['70', 'places assises']],
  daten: { 'Gewicht': 'env. 38 t en service', 'Leistung': '404 kW puissance unihoraire, 315 kW puissance continue', 'Nummern': '201–207, plus tard 601–607', 'Einsatz': 'excursions et voyages de groupe, prestations spéciales rapides' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les voitures 201 et 202 ont été livrées en 1935, les 203 à 206 en 1936 et la 207 en 1938. Elles ont ensuite porté entre autres la désignation RCe 2/4. Les voitures 201 et 206 ont été allongées en 1952 et 1953 et transformées pour la 1re classe (RAe 2/4) ; d’autres ont porté en dernier la désignation RBe 2/4.', 'C’est pourquoi les indications d’effectif varient selon la désignation et la période.'] }, { titel: 'Utilisation et technique', p: ['Les Flèches rouges servaient aux excursions, aux voyages de groupe et aux prestations spéciales rapides. Leur faible poids et leur forme aérodynamique incarnaient l’élan technique de l’entre-deux-guerres.'] }, { titel: 'Équipement et accessibilité', liste: ['70 places assises', 'Construction légère d’env. 38 t', 'Forme aérodynamique', 'Deux véhicules plus tard allongés et transformés pour la 1re classe'] }],
  bilder: ['Flèche rouge RCe 2/4 203']
});

uebZug('h-a35', {
  typ: 'Locomotive à vapeur pour trains rapides de la série 701–809 (historique)',
  text: ['Aux CFF, la désignation A 3/5 a été utilisée pour plusieurs types de construction.', 'Cette page traite la célèbre série JS/CFF 701–809, à laquelle appartient aussi l’A 3/5 705 conservée.'],
  kennzahlen: [['109', 'locomotives de la série'], ['100 km/h', 'vitesse maximale'], ['1902', 'première mise en service'], ['920 kW', 'puissance indiquée']],
  daten: { 'Länge': '18,60 m avec tender', 'Gewicht': '106–107 t en service avec tender', 'Leistung': '920 kW (indiquée)', 'Anfahrzugkraft': 'env. 75 kN', 'In Betrieb seit': '1902 (construites 1902–1909)', 'Einsatz': 'trains rapides' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['La SLM Winterthur a construit de 1902 à 1909 109 locomotives numérotées 701–809. Elles avaient encore été commandées par la Compagnie du Jura-Simplon.'] }, { titel: 'Utilisation et technique', p: ['Les locomotives avaient encore été commandées par la Compagnie Jura-Simplon et ont été reprises par les CFF. 68 machines ont reçu la technique de la vapeur surchauffée.', 'Elles ont tiré des trains rapides de qualité jusqu’à ce que des locomotives plus puissantes, puis électriques, les supplantent.'] }, { titel: 'Équipement et accessibilité', liste: ['Tender séparé', '68 machines à vapeur surchauffée', 'Pas de compartiment voyageurs'] }, { titel: 'Conservation', p: ['L’A 3/5 705 a été conservée en état de marche. Elle est entretenue par la Dampfgruppe Zürich et représente la vapeur des trains rapides des débuts des CFF.'] }],
  bilder: ['A 3/5 705 à côté de l’Ae 3/6 I 10694 à Arnex-sur-Orbe, 1967']
});

uebZug('h-c56', {
  typ: 'Locomotive à vapeur pour les lourds trains du Gothard (historique)',
  text: ['La C 5/6 comptait parmi les plus grandes et les plus puissantes locomotives à vapeur des CFF. Elle a aussi été leur dernière acquisition de locomotives à vapeur neuves à voie normale.', 'Le surnom «Elefant» (éléphant) renvoie à son allure imposante et à son grand effort de traction.'],
  kennzahlen: [['28', 'locomotives de série'], ['65 km/h', 'vitesse maximale'], ['1913', 'première mise en service'], ['128 t', 'avec tender']],
  daten: { 'Länge': '19,195 m avec tender', 'Gewicht': '128 t avec tender', 'Leistung': 'env. 1190 kW (indiquée)', 'In Betrieb seit': '1913 (construites 1913–1917)', 'Ausmusterung': 'jusqu’en 1968', 'Einsatz': 'trains marchandises lourds' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['La SLM Winterthur a construit de 1913 à 1917 28 locomotives numérotées 2951–2978. Ce fut le dernier achat de locomotives à vapeur neuves à voie normale des CFF.'] }, { titel: 'Utilisation et technique', p: ['La C 5/6 a été développée pour le trafic lourd au Gothard. Après l’électrification, elle est passée sur le Plateau, sur la ligne Bellinzone–Luino et dans des services de manœuvre.', 'En 1968, la 2969 a tiré le dernier train à vapeur officiel des CFF.'] }, { titel: 'Équipement et accessibilité', liste: ['Tender séparé', 'Pression de chaudière 15 bar', 'Pas de compartiment voyageurs'] }, { titel: 'Conservation', p: ['Plusieurs exemplaires ont été conservés. La C 5/6 2978, dernière locomotive de la série, fait partie du parc historique des CFF.'] }],
  bilder: ['C 5/6 2958 au Locorama', 'C 5/6 2965 de 1916', 'C 5/6 2965, construite par SLM', 'C 5/6 «Elefant» en détail', 'Plaques de la C 5/6 2965 «Erstfeld»']
});

uebZug('h-eb35', {
  typ: 'Locomotive-tender polyvalente (historique)',
  text: ['L’Eb 3/5 était une puissante locomotive-tender pour les services voyageurs, marchandises et de manœuvre.', 'Sa forme trapue lui a valu le surnom populaire de «Habersack».'],
  kennzahlen: [['34', 'locomotives'], ['75 km/h', 'vitesse maximale'], ['1911', 'première mise en service'], ['74–74,9 t', 'masse en service']],
  daten: { 'Bauart': 'locomotive-tender 1′C1′', 'Länge': '12,74 m hors tampons (Eb 3/5 5819)', 'Gewicht': '57,6–58,8 t à vide, 74–74,9 t en service', 'Kesseldruck': 'env. 12 bar', 'Vorräte': '7,7 m³ d’eau, 2,5 t de charbon', 'In Betrieb seit': '1911 (construites 1911–1916)', 'Einsatz': 'trains régionaux, lignes secondaires, service de gare' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['La SLM Winterthur a construit de 1911 à 1916 34 locomotives numérotées 5801–5834. Elles ont été retirées de 1953 à 1965.'] }, { titel: 'Utilisation et technique', p: ['La disposition d’essieux symétrique offrait de bonnes qualités de roulement dans les deux sens, sans devoir tourner la locomotive.', 'L’Eb 3/5 convenait ainsi particulièrement aux lignes secondaires, aux trains régionaux et aux services de gare variés.'] }, { titel: 'Équipement et accessibilité', liste: ['Locomotive-tender avec réserves à bord : 7,7 m³ d’eau et 2,5 t de charbon', 'Disposition symétrique des essieux 1′C1′ pour les deux sens', 'Pas de compartiment voyageurs'] }, { titel: 'Conservation', p: ['Quelques locomotives de la série ont été conservées par des musées et des chemins de fer historiques. Elles montrent la dernière génération de locomotives-tender à vapeur universelles des CFF.'] }],
  bilder: ['Eb 3/5 à Bremgarten West', 'Eb 3/5 5810 (2018)', 'Eb 3/5 5885', 'Eb 3/5 «Habersack»', 'Eb 3/5 en portrait']
});

uebZug('h-mirage', {
  typ: 'Express de la Côte dorée de la banlieue zurichoise (historique)',
  text: ['Sur la rame RABDe 12/12 à trois éléments, les douze essieux étaient moteurs.', 'Son énorme accélération convenait au trafic de banlieue dense sur la rive droite du lac de Zurich et lui a valu le surnom de «Mirage».'],
  kennzahlen: [['20', 'rames'], ['125 km/h', 'vitesse maximale'], ['1967', 'première mise en service'], ['2444 kW', 'puissance unihoraire']],
  daten: { 'Zugbildung': 'à trois éléments', 'Achsfolge': 'les 12 essieux moteurs', 'Gewicht': 'env. 170 t à vide', 'Leistung': '2444 kW puissance unihoraire', 'In Betrieb seit': '1967 (construites 1965–1967)', 'Ausmusterung': 'jusqu’en 2008, démolies jusqu’en 2010', 'Einsatz': 'trafic de banlieue sur la rive droite du lac de Zurich' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['SWP, FFA, BBC et SAAS ont construit de 1965 à 1967 20 rames à trois caisses numérotées 1101–1120. Après transformations, elles se sont appelées RABDe 510.'] }, { titel: 'Utilisation et technique', p: ['Les rames ont été acquises pour le trafic de banlieue à la demi-heure sur la ligne de la rive droite du lac de Zurich et sont devenues célèbres sous le nom de «Goldküstenexpress» (express de la Côte dorée). Plus tard, elles ont aussi circulé sur d’autres lignes régionales et de RER.'] }, { titel: 'Équipement et accessibilité', liste: ['200 places en 1re et 2e classe', 'Compartiment à bagages (lettre D)', 'Les douze essieux sont moteurs, pour une accélération rapide'] }, { titel: 'Modernisation et fin', p: ['Après transformation, les véhicules ont porté la désignation RABDe 510. Le service régulier a pris fin en 2008 ; les dernières unités ont été démolies jusqu’en 2010. Aucune rame complète n’a été conservée.'] }],
  bilder: ['RABDe 12/12 «Mirage» en rouge', 'RABDe 12/12 «Mirage» en 1983', '«Mirage» dans la livrée NPZ ultérieure', '«Mirage» comme RABDe 510', 'Deux «Mirage» sur la Côte dorée du lac de Zurich']
});

uebZug('h-rbe540', {
  typ: 'Automotrice puissante modernisée pour trains navettes (historique)',
  text: ['La RBe 540 est issue de la modernisation des RBe 4/4.', 'Ces puissantes automotrices ont d’abord tiré des trains rapides, puis surtout des trains navettes régionaux et RER.'],
  kennzahlen: [['82', 'RBe 4/4 construites'], ['125 km/h', 'vitesse maximale'], ['1959', 'premiers prototypes'], ['1988 kW', 'puissance unihoraire']],
  daten: { 'Gewicht': '68 t, après transformation R4 72 t', 'Leistung': '1988 kW puissance unihoraire', 'Sitzplätze': '64, après transformation R4 60', 'Nummern': 'à l’origine 1401–1482, comme RBe 540 006–079', 'In Betrieb seit': '1959 (construites 1959–1966)', 'Modernisierung': '1993–1998 (programme R4)', 'Ausmusterung': 'derniers services réguliers en 2014', 'Einsatz': 'trains rapides, plus tard trains navettes régionaux et RER' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['SIG, BBC et MFO ont construit de 1959 à 1966 82 RBe 4/4 numérotées 1401–1482. Avec le programme R4, elles ont été modernisées de 1993 à 1998 et désignées RBe 540 006–079.'] }, { titel: 'Utilisation et technique', p: ['Les RBe 4/4 étaient assez puissantes pour tirer un train rapide tout en offrant un compartiment voyageurs.', 'Avec le programme de transformation R4, elles ont reçu de nouvelles cabines de conduite, portes et aménagements intérieurs ainsi que la désignation RBe 540.'] }, { titel: 'Équipement et accessibilité', liste: ['Compartiment voyageurs de 64 places, 60 après la transformation R4', 'Nouvelles cabines, portes et intérieurs lors de la transformation R4'] }, { titel: 'Retrait et conservation', p: ['Les derniers services réguliers ont pris fin en 2014. Quelques véhicules ont été conservés comme véhicules historiques, dont la RBe 540 074 engagée à l’Oensingen-Balsthal-Bahn.'] }],
  bilder: ['RBe 540 007', 'RBe 540 060 à Coire', 'RBe 4/4 en livrée verte près de Tägerwilen', 'RBe 540 à côté d’une Re 4/4 II à Winterthour', 'RBe 540 020 à Zurich HB']
});

/* ---- 27-einsatz.js ---- */
/* Français – textes «Où circule-t-il ?» */
uebDict({
  'Mit Bauzügen auf Baustellen im ganzen SBB-Normalspurnetz, je nach Bauprogramm.': 'Avec des trains de travaux sur des chantiers dans tout le réseau CFF à voie normale, selon le programme des travaux.'
});

uebEinsatz({
  'rabe-501': 'En Suisse surtout sur Zurich–Zoug–Lucerne et Zurich–Coire, ainsi que de Bâle et de Zurich par le Gothard vers Lugano et Chiasso. À l’international sur l’axe nord-sud entre l’Allemagne, la Suisse et l’Italie.',
  'rabde-500': 'Surtout sur la ligne du pied du Jura : Bâle–Bienne–Lausanne et Rorschach–Saint-Gall–Zurich–Bienne–Genève, ainsi que Berne–Olten. Il circule aussi entre Zurich et Chiasso.',
  'rabe-502': 'La ligne principale est Saint-Gall–Zurich–Berne–Lausanne–Genève. S’y ajoutent Bâle–Zurich, Saint-Gall–Coire, Zurich–Coire, Lucerne–Zurich, Lucerne–Berne, Bâle–Berne–Interlaken/Brigue et Bâle–Lugano.',
  'rabe-511': 'Comme Regio-Dosto surtout sur le RER zurichois et dans la région de Lausanne, comme IR-Dosto dans la région Zurich/Plateau, en Suisse occidentale et du Nord et entre Zurich et Coire.',
  'rabe-514': 'Sur tout le réseau du RER zurichois.',
  'rabe-523': 'Comme RER dans les cantons d’Argovie, de Soleure, de Lucerne, de Bâle, de Neuchâtel, de Fribourg et de Vaud.',
  'rbde-560': 'Aux CFF sur des lignes RER dans les cantons d’Argovie, de Lucerne, de Neuchâtel et de Vaud. En Valais, RegionAlps circule avec ses propres Domino entre St-Gingolph et Brigue.',
  're-460': 'Dans tout le réseau à voie normale en tête de trains InterCity et InterRegio, souvent avec des voitures à deux niveaux IC2000.',
  're-420': 'Autrefois en tête des trains rapides et sur les accès au Gothard et au Simplon, aujourd’hui surtout chez CFF Cargo dans tout le réseau.',
  're-620': 'Construite pour les trains lourds sur les lignes du Gothard et du Simplon, représentées ici avec les lignes de montagne.',
  're-484': 'En transit nord–sud à travers la Suisse jusqu’en Italie.',
  're-474': 'Dans le trafic marchandises transfrontalier vers l’Italie.',
  're-193': 'Surtout dans le trafic marchandises intérieur suisse de CFF Cargo ; des homologations existent aussi pour les services transfrontaliers.',
  're-482': 'Dans le trafic marchandises en Suisse et vers l’Allemagne, en partie jusqu’en Autriche.',
  'aem-940': 'Dans les gares de triage de Limmattal et de Lausanne Triage ainsi qu’avec des trains de travaux dans toute la Suisse.',
  'lrz-18': 'Sites des deux séries : Genève, Melide et Brigue, ainsi que Zurich, Winterthour et Berne. Les trains partent de là vers les événements sur le réseau.',
  'kirow-krc-1100': 'Librement dans tout le réseau CFF à voie normale, surtout pour la pose de ponts provisoires.',
  'am-843': 'En manœuvre et en desserte ainsi que pour les trains de travaux dans toute la Suisse.',
  'tm-234': 'Sur les chantiers de tout le réseau pour l’entretien de la voie, de la caténaire et de la signalisation.',
  'rabe-512': 'Dans la région Zurich/Plateau, en Suisse occidentale et du Nord et entre Zurich et Coire.',
  're-450': 'Sur le RER zurichois, entre autres jusqu’à Schaffhouse, Zoug et Glaris.',
  'rabe-520': 'Dans le Seetal entre Lenzbourg et Lucerne ainsi que dans la région de Lucerne jusqu’à Arth-Goldau et Brunnen.',
  'rabe-503': 'Surtout sur Zurich–Rorschach, Bâle–Brigue et Genève–Brigue. À l’international sur l’axe nord-sud vers l’Allemagne et l’Italie.',
  'ic2000': 'Surtout sur Romanshorn–Zurich–Berne–Brigue/Interlaken, Bâle–Berne–Brigue/Interlaken, Genève–Brigue, Genève–Berne–Lucerne, Zurich–Constance et Zurich–Coire.',
  'ew-iv': 'Avec la Re 460 surtout sur Genève–Brigue, Bâle–Lugano, Zurich–Constance, Zurich–Baden–Olten–Berne et Zurich–Schaffhouse. À l’international circulent surtout les voitures EuroCity des CFF.'
});

/* ---- 30-quiz.js ---- */
/* Français – questions du quiz (même ordre que js/daten/quiz.js, la PREMIÈRE réponse est juste) */
uebQuiz('einfach', [
  { f: 'Quel est ce train ?', a: ['Re 460', 'Re 620', 'RBDe 560 «Domino»', 'RABe 501 «Giruno»'], info: 'La Re 460 tire ici des voitures unifiées.' },
  { f: 'Quel est ce train ?', a: ['RBDe 560 «Domino»', 'RABDe 500 «ICN»', 'Re 460', 'RABe 502 «FV-Dosto»'] },
  { f: 'Quel est ce train ?', a: ['RABe 502 «FV-Dosto»', 'RABDe 500 «ICN»', 'RBDe 560 «Domino»', 'Re 620'] },
  { f: 'Quel est ce train ?', a: ['RABDe 500 «ICN»', 'RABe 502 «FV-Dosto»', 'Re 460', 'RBDe 560 «Domino»'] },
  { f: 'Quelle est cette locomotive ?', a: ['Re 620', 'Re 460', 'RABDe 500 «ICN»', 'RBDe 560 «Domino»'], info: 'La Re 620 a six essieux et circule aujourd’hui chez CFF Cargo.' },
  { f: 'Quelles voitures la Re 460 tire-t-elle sur cette photo ?', a: ['Voitures à deux niveaux IC2000', 'Wagons marchandises', 'Wagons-citernes', 'Wagons postaux'] },
  { f: 'Que signifie l’abréviation CFF ?', a: ['Chemins de fer fédéraux suisses', 'Compagnie ferroviaire fribourgeoise', 'Chemins de fer frontaliers suisses', 'Centrale des funiculaires fédéraux'] },
  { f: 'Quelle est la largeur de la voie normale ?', a: ['1435 mm', '1000 mm', '1520 mm', '1668 mm'], info: 'On mesure la distance entre les bords intérieurs des rails.' },
  { f: 'Quelle est la largeur de la voie métrique ?', a: ['1000 mm', '1435 mm', '750 mm', '1200 mm'] },
  { f: 'Quel chemin de fer circule principalement sur voie métrique ?', a: ['Chemins de fer rhétiques (RhB)', 'CFF Cargo', 'BLS', 'CFF Grandes lignes'] },
  { f: 'Lequel de ces trains est un train à deux niveaux ?', a: ['RABe 502 «FV-Dosto»', 'RABDe 500 «ICN»', 'RABe 501 «Giruno»', 'RBDe 560 «Domino»'], info: '«Dosto» est l’abréviation allemande de «Doppelstock», deux niveaux.' },
  { f: 'Comment s’appelle le train à grande vitesse RABe 501 ?', a: ['Giruno', 'Astoro', 'Domino', 'FLIRT'] },
  { f: 'Quelle locomotive est appelée «Lok 2000» ?', a: ['Re 460', 'Re 420', 'Re 620', 'Ee 922'], info: 'Elle a été développée pour le projet «Rail 2000».' },
  { f: 'De quoi CFF Cargo est-il responsable ?', a: ['Du trafic marchandises', 'Du trafic voyageurs', 'De la construction de nouvelles gares', 'Du trafic de bus'] },
  { f: 'Quelle est la vitesse maximale du Giruno ?', a: ['250 km/h', '160 km/h', '200 km/h', '320 km/h'] },
  { f: 'Que fait une locomotive de manœuvre ?', a: ['Elle forme les trains en gare et déplace des wagons', 'Elle tire des trains grandes lignes à 200 km/h', 'Elle déblaie la neige des voies', 'Elle mesure la caténaire'] },
  { f: 'Quel tunnel ferroviaire est le plus long du monde ?', a: ['Tunnel de base du Gothard', 'Tunnel de base du Lötschberg', 'Tunnel du Simplon', 'Tunnel de base de la Furka'], info: 'Le tunnel de base du Gothard mesure environ 57 km.' },
  { f: 'À quoi sert le pantographe sur le toit d’une locomotive électrique ?', a: ['Il capte le courant de la caténaire', 'Il mesure la vitesse', 'Il stabilise le train par vent fort', 'Il nettoie la caténaire'] },
  { f: 'Que signifie un feu rouge au signal principal ?', a: ['Arrêt', 'Voie libre', 'Rouler lentement', 'Attention chantier'] },
  { f: 'Que signifie «IC» sur le tableau des départs ?', a: ['InterCity', 'InterCargo', 'Train intra-muros', 'Conteneur international'] },
  { f: 'Quelle entreprise suisse construit le Giruno, le KISS et le FLIRT ?', a: ['Stadler', 'Siemens', 'Alstom', 'Bombardier'] },
  { f: 'Que fait une fraise à neige ?', a: ['Elle fraise la neige et la projette sur le côté', 'Elle répand du sel sur les rails', 'Elle chauffe les aiguillages', 'Elle fabrique de la neige artificielle pour les stations de ski'] },
  { f: 'Quand le train d’extinction et de sauvetage intervient-il ?', a: ['Lors d’incendies et d’accidents, surtout en tunnel', 'Lors de fortes chutes de neige', 'Quand un train a du retard', 'Pour des courses spéciales avec des touristes'] },
  { f: 'Quelles sont les couleurs du logo CFF ?', a: ['Rouge et blanc', 'Bleu et jaune', 'Vert et blanc', 'Noir et jaune'] },
  { f: 'D’où la plupart des trains suisses tirent-ils leur énergie ?', a: ['De la caténaire (électricité)', 'De moteurs diesel', 'De batteries rechargées en gare', 'De chaudières à vapeur'] },
  { f: 'Quel est le surnom du RABe 523 ?', a: ['FLIRT', 'KISS', 'DTZ', 'Domino'] },
  { f: 'Lequel de ces trains a un restaurant à bord ?', a: ['RABe 501 «Giruno»', 'RBDe 560 «Domino»', 'RABe 514 «DTZ»', 'Tm 232'] }
]);

uebQuiz('normal', [
  { f: 'Quelle est cette locomotive ?', a: ['Re 420', 'Re 620', 'Re 460', 'Re 474'], info: 'La Re 420 s’appelait autrefois Re 4/4 II.' },
  { f: 'Quel train assure la ligne S30 entre Fribourg et Yverdon-les-Bains ?', a: ['RBDe 560 «Domino»', 'RABe 501 «Giruno»', 'RABe 502 «FV-Dosto»', 'RABDe 500 «ICN»'], info: 'La S30 est une ligne RER des CFF. Le train exact peut changer avec l’horaire.' },
  { f: 'Comment appelle-t-on une Re 620 et une Re 420 ensemble en tête d’un train ?', a: ['«Re 10/10»', '«Double Lok 2000»', '«Re 12/12»', '«Attelage du Gothard»'], info: '6 + 4 = 10 essieux moteurs.' },
  { f: 'Combien de Giruno les CFF possèdent-ils ?', a: ['41', '29', '62', '119'], info: '29 trains ont d’abord été commandés ; avec les commandes suivantes, ils sont devenus 41.' },
  { f: 'Combien de Re 460 les CFF ont-ils reçues ?', a: ['119', '41', '89', '276'] },
  { f: 'Quel studio de design a dessiné l’avant de la Re 460 ?', a: ['Pininfarina', 'Porsche Design', 'Bertone', 'Giugiaro'] },
  { f: 'Que signifie le petit «e» dans «Re 460» ?', a: ['électrique', 'simple (einfach)', 'Express', 'autonome'], info: 'Un «m» désigne en revanche un moteur à combustion, p. ex. Am 843.' },
  { f: 'Que signifient «A» et «B» dans «RABe 501» ?', a: ['Des places en 1re et en 2e classe', 'Les essieux avant et arrière', 'Le début et la fin du train', 'Des compartiments pour le personnel'] },
  { f: 'Quelle version du FV-Dosto a un restaurant ?', a: ['IC200', 'IR200', 'IR100', 'les trois'] },
  { f: 'Dans quel atelier CFF toutes les Re 460 ont-elles été modernisées ?', a: ['Yverdon-les-Bains', 'Olten', 'Bellinzone', 'Bienne'], info: 'Le programme de refit a duré de 2017 à 2022.' },
  { f: 'Qu’a de particulier l’ICN ?', a: ['Il s’incline dans les courbes et peut les parcourir plus vite', 'Il roule au diesel', 'C’est un train à deux niveaux', 'Il circule sur voie métrique'] },
  { f: 'Depuis quelle année le Giruno circule-t-il aux CFF ?', a: ['2019', '2004', '2012', '2025'] },
  { f: 'Avec quel courant le réseau à voie normale des CFF fonctionne-t-il ?', a: ['15 kV, 16,7 Hz courant alternatif', '25 kV, 50 Hz courant alternatif', '3 kV courant continu', '230 V comme la prise de courant'] },
  { f: 'Par quel tunnel le Giruno passe-t-il de Zurich à Milan ?', a: ['Tunnel de base du Gothard', 'Tunnel de base du Lötschberg', 'Tunnel du Simplon', 'Tunnel de la Vereina'] },
  { f: 'Quel train doit remplacer le Domino aux CFF à partir de 2028 ?', a: ['FLIRT Evo', 'Giruno', 'KISS', 'ICN'] },
  { f: 'Qui a construit le FV-Dosto ?', a: ['Bombardier (aujourd’hui Alstom)', 'Stadler', 'Siemens', 'SLM Winterthur'] },
  { f: 'Quelle locomotive roule à l’électricité et possède en plus deux groupes diesel-générateurs pour les chantiers ?', a: ['Aem 940', 'Re 460', 'Ee 922', 'Re 482'] },
  { f: 'Combien de places assises compte un Giruno ?', a: ['405', '172', '682', '1000'], info: 'S’y ajoutent 17 places au restaurant.' },
  { f: 'Quel est ce train ?', a: ['RABe 503 «Astoro»', 'RABe 501 «Giruno»', 'RABDe 500 «ICN»', 'RBDe 560 «Domino»'] },
  { f: 'Cette locomotive est une Re 465. Quel chemin de fer l’exploite ?', a: ['BLS', 'CFF Cargo', 'Chemins de fer rhétiques', 'Südostbahn'], info: 'La Re 465 est la sœur plus puissante de la Re 460.' },
  { f: 'Quelle est la vitesse maximale de la Re 460 en exploitation ?', a: ['200 km/h', '140 km/h', '160 km/h', '250 km/h'], info: 'Elle est construite pour 230 km/h.' },
  { f: 'Que fait la trotteuse rouge de l’horloge de gare CFF en haut, sur le 12 ?', a: ['Elle s’arrête brièvement jusqu’à ce que l’aiguille des minutes saute', 'Elle tourne à l’envers', 'Elle saute sur le 6', 'Elle devient verte'] },
  { f: 'Quel train à deux niveaux du RER zurichois a été construit par Siemens ?', a: ['RABe 514 «DTZ»', 'RABe 511 «KISS»', 'RABe 523 «FLIRT»', 'RBDe 560 «Domino»'] },
  { f: 'De combien de voitures un Giruno est-il composé ?', a: ['11', '4', '7', '16'] },
  { f: 'Une célèbre ligne des Chemins de fer rhétiques se termine à Tirano (Italie). Laquelle ?', a: ['Ligne de la Bernina', 'Ligne de l’Albula', 'Ligne du Gothard', 'Ligne Furka-Oberalp'] },
  { f: 'Que signifie «6/6» dans «Re 6/6» ?', a: ['6 essieux, dont 6 moteurs', '6 voitures, dont 6 motorisées', '6e locomotive de la 6e série', '6000 kW de puissance'] },
  { f: 'Quelle est la vitesse maximale des trains sur la ligne nouvelle Mattstetten–Rothrist ?', a: ['200 km/h', '160 km/h', '250 km/h', '300 km/h'] }
]);

uebQuiz('schwierig', [
  { f: 'Combien de Re 4/4 II (Re 420) les CFF ont-ils acquises ?', a: ['276', '119', '89', '41'], info: 'Chiffre selon CFF Historic.' },
  { f: 'Qui a construit la partie mécanique de la Re 420 ?', a: ['SLM Winterthur', 'Stadler Bussnang', 'Siemens', 'Bombardier'], info: 'La partie électrique venait de BBC, MFO et SAAS.' },
  { f: 'Combien de Re 6/6 (Re 620) ont été construites ?', a: ['89', '276', '119', '63'], info: '4 prototypes et 85 locomotives de série.' },
  { f: 'Qu’est-ce qui distinguait les deux premiers prototypes de Re 6/6 de toutes les autres ?', a: ['Ils avaient une caisse en deux parties', 'Ils n’avaient pas de pantographe', 'Ils roulaient au diesel', 'Ils étaient peints en bleu'] },
  { f: 'Quelle est la disposition des essieux de la Re 620 ?', a: ['Bo′Bo′Bo′', 'Bo′Bo′', 'Co′Co′', '1′Do1′'] },
  { f: 'Quelle est la puissance continue de la Re 460 ?', a: ['6100 kW', '1700 kW', '4650 kW', '7500 kW'] },
  { f: 'Quelle est la longueur d’un Giruno attelages compris ?', a: ['202 m', '75 m', '101 m', '400 m'] },
  { f: 'Combien de places assises compte le FV-Dosto dans la version IR200 ?', a: ['682', '606', '330', '405'] },
  { f: 'Quels moteurs entraînent le FV-Dosto ?', a: ['Moteurs synchrones à aimants permanents', 'Moteurs diesel', 'Moteurs série à courant continu', 'Moteurs linéaires'] },
  { f: 'Comment s’appelle la variante de la Lok 2000 en Finlande ?', a: ['Sr2', 'El 18', 'Re 465', 'Vectron'], info: 'L’El 18 est la variante pour la Norvège.' },
  { f: 'Qui a conçu l’horloge de gare CFF ?', a: ['Hans Hilfiker', 'Le Corbusier', 'Pininfarina', 'Adrian Frutiger'] },
  { f: 'Combien de Re 420 ont été modernisées en «LION» pour le RER zurichois entre 2011 et 2016 ?', a: ['30', '6', '119', '85'] },
  { f: 'Sur quelle ligne circule le Domino de RegionAlps ?', a: ['St-Gingolph–Brigue', 'Fribourg–Yverdon', 'Coire–St-Moritz', 'Bâle–Olten'] },
  { f: 'Combien de FLIRT Evo les CFF acquièrent-ils ?', a: ['198', '41', '86', '62'] },
  { f: 'Quel type de locomotive se cache derrière la Re 482 ?', a: ['Bombardier TRAXX F140 AC', 'Siemens Vectron', 'Alstom Prima H4', 'Vossloh G 1700'] },
  { f: 'Quel est l’effort de traction au démarrage de la Re 620 ?', a: ['398 kN', '182 kN', '255 kN', '300 kN'] },
  { f: 'Quels numéros de véhicule portent les ICN ?', a: ['500 000–500 043', '11601–11689', '460 000–460 118', '501 001–501 041'] },
  { f: 'Dans lequel de ces pays beaucoup de trains roulent-ils en 3 kV courant continu ?', a: ['Italie', 'Allemagne', 'Autriche', 'Suisse'], info: 'C’est pourquoi les locomotives pour l’Italie, comme la Re 484, ont besoin de plusieurs systèmes de courant.' },
  { f: 'En quelle année le tunnel de base du Gothard a-t-il été inauguré ?', a: ['2016', '2007', '1882', '2020'], info: 'Le tunnel de base du Lötschberg a été mis en service en 2007, l’ancien tunnel du Gothard en 1882.' },
  { f: 'En quelle année le tunnel de base du Lötschberg a-t-il été mis en service ?', a: ['2007', '2016', '1913', '1999'] },
  { f: 'Depuis quelle année les CFF existent-ils ?', a: ['1902', '1847', '1950', '1882'] },
  { f: 'Quand la première étape de «Rail 2000» est-elle entrée en vigueur avec le grand changement d’horaire ?', a: ['Décembre 2004', 'Décembre 1992', 'Juin 2016', 'Décembre 2010'] },
  { f: 'Comment s’appelait le premier chemin de fer entièrement suisse, en 1847 ?', a: ['Spanisch-Brötli-Bahn (Zurich–Baden)', 'Chemin de fer du Gothard', 'Chemin de fer du Rigi', 'Centralbahn'] },
  { f: 'Quel écartement a la variante finlandaise de la Lok 2000 ?', a: ['1524 mm', '1435 mm', '1000 mm', '1668 mm'] },
  { f: 'Combien de Re 620 ont reçu l’ETCS niveau 2 à partir de 2007 ?', a: ['63', '89', '30', '119'] },
  { f: 'Depuis 2008, les lignes RhB de l’Albula et de la Bernina font partie …', a: ['du patrimoine mondial de l’UNESCO', 'des lignes nouvelles de Rail 2000', 'de CFF Cargo', 'du réseau du BLS'] }
]);

/* ---- 31-bls-tpf.js ---- */
/* Français – BLS et TPF */
uebDict({
  'SBB': 'CFF', 'Bahn wählen': 'Choisir la compagnie', '{n} Fahrzeug': '{n} véhicule',
  'Schweizerische Bundesbahnen': 'Chemins de fer fédéraux suisses',
  'BLS AG': 'BLS SA',
  'Transports publics fribourgeois': 'Transports publics fribourgeois',
  'Klassiker von SBB, BLS und TPF, die heute nicht mehr im Alltag fahren. Viele sind bei SBB Historic, der BLS-Stiftung, GFM Historique oder in Museen erhalten.': 'Classiques des CFF, du BLS et des TPF qui ne circulent plus au quotidien. Beaucoup sont conservés par CFF Historic, la Fondation BLS, GFM Historique ou dans des musées.',
  'BLS und TPF neu im Katalog: In jeder Kategorie lässt sich jetzt zwischen SBB, BLS und TPF wählen.': 'Le BLS et les TPF font leur entrée dans le catalogue : dans chaque catégorie, on peut maintenant choisir entre CFF, BLS et TPF.',
  'Zulassung': 'Homologation', 'Frühere Bezeichnung': 'Ancienne désignation', 'Beispiel': 'Exemple', 'Typen': 'Types', 'Standort': 'Lieu de stationnement',
  'Erhalten': 'Conservé', 'Verbleib': 'Sort', 'Lokomotive': 'Locomotive', 'Kabinen': 'Cabines', 'Höhenunterschied': 'Dénivelé', 'Kran': 'Grue',
  'Normalspur, 1435 mm': 'voie normale, 1435 mm', 'Meterspur, 1000 mm': 'voie métrique, 1000 mm'
});

uebZug('bls-rabe-528', {
  typ: 'Rame automotrice électrique de Stadler pour RegioExpress et RER',
  text: ['La MIKA à six caisses est la rame la plus récente du BLS. Elle existe en version RegioExpress, plus confortable pour les longs trajets, et en version RER avec plus de places debout.', 'Dès 2021, les MIKA ont remplacé des trains plus anciens comme les rames réversibles EW III et les NPZ.'],
  kennzahlen: [['67', 'rames (39 RE, 28 RER)'], ['160 km/h', 'vitesse maximale'], ['104,9 m', 'longueur'], ['2021', 'première mise en service']],
  daten: { 'Bauart': 'rame automotrice électrique, 6 caisses', 'Fahrzeugnummern': 'RE 101–139, RER 201–228', 'Gewicht': '182 t (RE), 183 t (RER)', 'Sitzplätze': '244 (RE), 223 (RER)', 'Anzahl': '67 rames' },
  specNote: 'Places assises sans strapontins : RE 46 en 1re et 198 en 2e classe, RER 35 et 188. Les rames 125–137 appartiennent à BLS Fernverkehr SA.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler a livré au BLS 67 MIKA : 39 trains RegioExpress (101–139, mis en service 2021–2026) et 28 trains RER (201–228, 2022–2025). Les trains 125–137 appartiennent à BLS Fernverkehr SA, tous les autres à BLS SA.', 'Les MIKA ont remplacé des trains plus anciens comme les rames réversibles EW III et les NPZ.'] },
      { titel: 'Utilisation et technique', p: ['Les MIKA circulent sur les RER de Berne et de Lucerne (notamment S2, S4, S6 et S7), en RegioExpress Berne–Spiez–Zweisimmen et par la ligne de faîte du Lötschberg jusqu’à Brigue et Domodossola, ainsi qu’en InterRegio 66 Berne–Neuchâtel–La Chaux-de-Fonds.', 'Le train de six caisses mesure 104,9 m, développe 3500 kW et roule jusqu’à 160 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Climatisation', 'Prises à chaque place et dans le compartiment multifonction', 'Fenêtres améliorant la réception mobile', 'Zone bistro en libre-service avec distributeurs de snacks et de café (RE)', '12 places pour vélos (RE) ou 6 (RER), avec prises pour vélos électriques', 'Accès à plancher bas avec comble-lacune à toutes les portes', '3 places pour fauteuils roulants : 1 en 1re classe, 2 en 2e classe avec accès au WC', '2 WC, dont 1 accessible, avec table à langer', 'Vidéosurveillance et boutons SOS'],
        p: ['Grâce aux accès bas avec comble-lacune, la montée se fait sans marche à toutes les portes.'] },
      { titel: 'Deux versions', tabelle: { kopf: ['Caractéristique', 'RegioExpress', 'RER'], zeilen: [
      ['Numéros', '101–139', '201–228'], ['Nombre', '39', '28'], ['Mise en service', '2021–2026', '2022–2025'],
      ['Places 1re / 2e classe', '46 / 198', '35 / 188'], ['Places debout', '149', '241'], ['Places vélo', '12', '6']] } }
    ],
  bilder: ['RABe 528 102 en RegioExpress à Berne', 'RABe 528 201 en version RER', 'RABe 528 119 à Domodossola', 'RABe 528 104 dans l’Entlebuch']
});
uebZug('bls-rabe-515', {
  typ: 'Rame automotrice à deux niveaux de Stadler (KISS)',
  text: ['La MUTZ est la rame à deux niveaux du BLS et fait partie de la famille KISS de Stadler. Elle circule surtout sur les lignes très fréquentées du RER bernois.', 'Il en existe une version à quatre caisses et une version plus longue à six caisses.'],
  kennzahlen: [['39', 'rames (34 à quatre caisses, 5 à six caisses)'], ['160 km/h', 'vitesse maximale'], ['335 / 546', 'places assises 4 / 6 caisses'], ['2012', 'première mise en service']],
  daten: { 'Bauart': 'rame automotrice électrique à deux niveaux', 'Fahrzeugnummern': '001–034 (4 caisses), 035–039 (6 caisses)', 'Länge': '102,6 m (4 caisses), 151,88 m (6 caisses)', 'Gewicht': '216 t (4 caisses), 301 t (6 caisses)', 'Leistung': '4000 kW (6 caisses : 6000 kW en pointe)', 'Sitzplätze': '335 (4 caisses), 546 (6 caisses)', 'Anzahl': '39 rames' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Le MUTZ fait partie de la famille KISS de Stadler. Le BLS possède 34 trains à quatre caisses (001–034, mis en service 2012–2017, 032 et 033 en 2019/2020) et 5 à six caisses (035–039, 2020).', 'Les trains à six caisses et les 032–034 appartiennent à BLS Fernverkehr SA, les autres à BLS SA.'] },
      { titel: 'Utilisation et technique', p: ['Les MUTZ circulent sur le RER bernois (S1 Fribourg–Berne–Thoune, S11 Thoune–Berne, S3/S31 Bienne–Münchenbuchsee–Berne–Belp) et en InterRegio 17 Berne–Berthoud–Olten et InterRegio 65 Berne–Bienne.', 'Les deux versions développent 4000 kW et roulent jusqu’à 160 km/h. Les larges portes accélèrent la montée et la descente.'] },
      { titel: 'Équipement et accessibilité', liste: ['Climatisation, chauffage au sol et mural', 'Information voyageurs visuelle et sonore', 'Prises en 1re classe (six caisses : aussi en 2e classe)', '6 places pour vélos (quatre caisses) ou 16 (six caisses)', 'Accès à plancher bas avec marchepieds coulissants à toutes les portes', '3 places pour fauteuils roulants (quatre caisses) ou 4 (six caisses), dans les deux classes', '2 WC, dont 1 accessible et 1 avec table à langer', 'Vidéosurveillance'],
        p: ['Toutes les portes ont des accès bas avec marchepieds coulissants ; des places pour fauteuils roulants existent dans les deux classes.'] },
      { titel: 'Quatre et six caisses', tabelle: { kopf: ['Caractéristique', 'quatre caisses', 'six caisses'], zeilen: [
      ['Numéros', '001–034', '035–039'], ['Mise en service', '2012–2017, 032–033 en 2019/2020', '2020'], ['Longueur', '102,6 m', '151,88 m'],
      ['Places 1re / 2e classe', '61 / 274', '122 / 424'], ['Puissance', '4000 kW', '6000 kW en pointe, 4000 kW en continu']] } }
    ],
  bilder: ['RABe 515 003 à quatre caisses à Berne', 'RABe 515 039 à six caisses', 'RABe 515 027 près d’Allmendingen']
});
uebZug('bls-rabe-535', {
  typ: 'Rame automotrice à plancher bas à quatre caisses',
  text: ['Le Lötschberger est une rame à plancher bas à quatre caisses du BLS. Il doit son nom à la ligne de faîte du Lötschberg et à l’Oberland bernois, où il circule.', 'Jusqu’à quatre rames peuvent circuler ensemble.'],
  kennzahlen: [['25', 'rames'], ['160 km/h', 'vitesse maximale'], ['142', 'places assises'], ['2008', 'première mise en service']],
  daten: { 'Bauart': 'rame automotrice électrique à plancher bas, 4 caisses', 'Anzahl': '25 rames' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Bombardier a livré au BLS 25 Lötschberger à quatre caisses : 101–113 en 2008–2010 et 114–125 en 2012.', 'Depuis janvier 2024, le BLS modernise la flotte dans son atelier de Bönigen, jusqu’à mi-2027. Des prises doubles remplacent notamment les prises simples, des LED les tubes néon, et des capteurs de CO₂ règlent l’air frais selon les besoins.'] },
      { titel: 'Utilisation et technique', p: ['Le Lötschberger circule dans l’Oberland bernois (RE Zweisimmen–Spiez, Spiez–Interlaken Ost et Spiez–Frutigen) et sur le RER bernois entre Thoune, Belp, Berne, Berthoud, Konolfingen et Soleure.', 'Le train mesure 62,7 m, pèse 105 t et roule jusqu’à 160 km/h. Jusqu’à quatre trains peuvent être couplés.'] },
      { titel: 'Équipement et accessibilité', liste: ['Climatisation et chauffage', 'Prises en 1re et 2e classe', 'Information voyageurs visuelle et sonore', '6 places pour vélos (101–113) ou 12 (114–125)', 'Accès à plancher bas à toutes les portes, une entrée par côté avec marchepied coulissant', '2 places pour fauteuils roulants en 2e classe', '1 WC accessible', 'Vidéosurveillance'],
        p: ['Toutes les portes sont à plancher bas. Selon le BLS, il n’y a pas de table à langer.'] }
    ],
  bilder: ['RABe 535 112 «Lötschberger»', 'Lötschberger en gare de Kandersteg', 'RABe 535 122 à Iselle di Trasquera']
});
uebZug('bls-rabe-525', {
  typ: 'Rame automotrice régionale à plancher bas',
  text: ['NINA signifie Niederflur-Nahverkehrszug, train régional à plancher bas. Le BLS l’utilise en versions à trois et quatre caisses en trafic régional et RER.', 'Jusqu’à quatre rames peuvent être accouplées.'],
  kennzahlen: [['36', 'rames (23 à trois caisses, 13 à quatre caisses)'], ['140 km/h', 'vitesse maximale'], ['1000 kW', 'puissance'], ['1998', 'première mise en service']],
  daten: { 'Bauart': 'rame automotrice électrique à plancher bas, 3 ou 4 caisses', 'Länge': '47,7 m (3 caisses), 61,9 m (4 caisses)', 'Gewicht': '79 t (3 caisses), 96 t (4 caisses)', 'Sitzplätze': '134 (3 caisses), 179 (4 caisses)', 'Anzahl': '36 rames' },
  specNote: 'Mises en service de 1998 à 2005. Les numéros 015–027 ont quatre caisses, les 001–014, 028–030 et 032–037 trois caisses.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les NINA viennent de Vevey Technologies et de Bombardier et ont été mis en service de 1998 à 2005. Le BLS possède 36 trains : 23 à trois caisses (001–014, 028–030, 032–037) et 13 à quatre caisses (015–027).', 'Dès juin 2015, les 36 trains ont reçu un refit à l’atelier de Bönigen pour environ 31 millions de francs ; ils doivent ainsi rouler environ six ans de plus. En 2016, une partie a reçu des vitres laissant passer le signal mobile et une nouvelle information voyageurs.'] },
      { titel: 'Utilisation et technique', p: ['Les NINA circulent sur les RER de Berne et de Lucerne, notamment S5 Berne–Chiètres–Neuchâtel, S22 Berne–Konolfingen–Langnau, S35 Chiètres–Lyss, S36 Lyss–Büren an der Aare, S46 Soleure–Berthoud–Ostermundigen et S77 Lucerne–Wolhusen–Willisau, ainsi qu’en RE Domodossola–Brigue–Viège.', 'Un train développe 1000 kW et roule jusqu’à 140 km/h. Jusqu’à quatre trains peuvent être couplés.'] },
      { titel: 'Équipement et accessibilité', liste: ['Climatisation et chauffage', 'Prises en 1re classe', 'Information voyageurs visuelle et sonore', '3 places pour vélos (trois caisses) ou 6 (quatre caisses)', 'Accès à plancher bas à toutes les portes, une entrée par côté avec marchepied coulissant', '1 place pour fauteuil roulant en 2e classe', '1 WC accessible', 'Vidéosurveillance'],
        p: ['Toutes les portes sont à plancher bas. Selon le BLS, il n’y a pas de table à langer.'] }
    ],
  bilder: ['NINA RABe 525 024 à Thoune', 'RABe 525 015 à quatre caisses à Berne']
});
uebZug('bls-re-465', {
  typ: 'Locomotive électrique universelle de la famille Lok 2000',
  text: ['La Re 465 est la sœur BLS de la Re 460 des CFF. Elle remorque des trains de voyageurs, des trains de chargement des autos et des trains de marchandises.', 'Entre 2019 et 2022, les 18 locomotives ont été modernisées et peintes en vert. Depuis fin 2023, elles remplacent les Re 425 brunes au chargement des autos.'],
  kennzahlen: [['18', 'locomotives'], ['6400 kW', 'puissance'], ['160 km/h', 'vitesse maximale autorisée'], ['1994', 'première mise en service']],
  daten: { 'Bauart': 'locomotive électrique Bo’Bo’', 'Höchstgeschwindigkeit': '160 km/h (autorisée)' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['La Re 465 appartient à la famille Lok 2000 de SLM et ABB. Le BLS a d’abord commandé huit locomotives (001–008), puis dix autres (009–018) pour le corridor ferroutier ; elles ont été mises en service de 1994 à 1997.', 'De 2019 à 2022, les 18 locomotives ont été modernisées à l’atelier de Bönigen pour environ 20 millions de francs et peintes en vert. Elles peuvent ainsi rouler jusqu’en 2040 environ.'] }, { titel: 'Utilisation et technique', p: ['Les Re 465 tirent ou poussent le GoldenPass Express entre Interlaken Ost et Zweisimmen. Depuis le 19 décembre 2023, elles assurent le chargement des autos au Lötschberg, dès 2026 aussi au Simplon, où elles remplacent les Re 425 brunes.', 'En trafic marchandises, elles circulent souvent en unité multiple avec des TRAXX et des Vectron. La locomotive développe 6400 kW et est autorisée à 160 km/h.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Commande multiple, en trafic marchandises souvent avec des TRAXX et Vectron', 'Tire ou pousse les trains, par exemple le GoldenPass Express'], p: ['Comme locomotive, la Re 465 n’a pas de compartiment voyageurs. Pour le GoldenPass Express et le transport des autos, l’accessibilité dépend des voitures.'] }],
  bilder: ['Re 465 014 à Zweisimmen', 'Re 465 001 et 007 en double traction']
});
uebZug('bls-re-475', {
  typ: 'Locomotive électrique polycourant de Siemens pour BLS Cargo',
  text: ['La Re 475 est la locomotive Vectron de BLS Cargo. Homologuée dans plusieurs pays, elle remorque des trains de marchandises à travers les Alpes jusqu’en Allemagne, en Italie et aux Pays-Bas.', 'BLS Cargo a agrandi la flotte en plusieurs séries.'],
  kennzahlen: [['50', 'locomotives en trois séries'], ['2016', 'première mise en service'], ['6', 'pays (séries récentes)'], ['Siemens', 'constructeur']],
  daten: { 'Bauart': 'locomotive électrique polycourant Bo’Bo’', 'Zulassung': 'CH, D, A, I, NL ; dès le n° 416 aussi B', 'Anzahl': '50 (en trois séries)' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['La Re 475 est la locomotive Vectron de Siemens Mobility pour BLS Cargo. La flotte passe en trois séries à 50 locomotives : 401–415 (2016–2018), 416–440 (2020 et 2024–2025) et 441–450 (dès 2026).'] }, { titel: 'Utilisation et technique', p: ['BLS Cargo utilise la Re 475 surtout sur les axes Lötschberg-Simplon et Gothard et circule ainsi jusqu’aux Pays-Bas, en Belgique, en Allemagne, en Autriche et en Italie.', 'Cette locomotive polycourant est homologuée dans jusqu’à six pays ; dès le n° 416 aussi en Belgique.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Locomotive polycourant pour courant alternatif et continu', 'Homologation pour la Suisse, l’Allemagne, l’Autriche, l’Italie et les Pays-Bas, dès le numéro 416 aussi pour la Belgique'], p: ['La Re 475 est une locomotive marchandises et n’a pas de compartiment voyageurs.'] }, { titel: 'Trois séries', tabelle: { kopf: ['Numéros', 'Nombre', 'Livraison', 'Homologation'], zeilen: [
    ['401–415', '15', '2016–2018', 'CH, D, A, I, NL'], ['416–440', '25', '2020, 2024–2025', 'CH, D, A, I, NL, B'], ['441–450', '10', 'dès 2026', 'CH, D, A, I, NL, B']] } }],
  bilder: ['Re 475 401 de BLS Cargo']
});
uebZug('bls-re-485', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['En 2002, BLS Cargo a commandé à Bombardier 20 TRAXX du type F140 AC ; elles ont été livrées jusqu’à mi-2003 et portent les numéros 485 001–020.', 'La 485 004 a été détruite en 2020 lors d’un accident à Auggen (Allemagne). Le nombre de Re 485 aujourd’hui en état de service n’est pas confirmé publiquement.'] }, { titel: 'Utilisation et technique', p: ['Les Re 485 remorquent des trains de marchandises en Suisse et vers l’Allemagne, sur les axes Lötschberg-Simplon et Gothard.', 'Techniquement, elles correspondent à la série allemande 185 et aux Re 482 de CFF Cargo, avec un paquet d’équipements suisse. Elles roulent jusqu’à 140 km/h.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Homologation pour la Suisse et l’Allemagne', 'Équipement suisse sur la base de la série allemande 185'], p: ['La Re 485 est une locomotive marchandises et n’a pas de compartiment voyageurs.'] }],
  typ: 'Locomotive électrique pour trains de marchandises de Bombardier',
  text: ['Les Re 485 sont des locomotives TRAXX de BLS Cargo pour le trafic marchandises en Suisse et vers l’Allemagne.', 'Elles ont été commandées en 2002 et livrées jusqu’à mi-2003.'],
  kennzahlen: [['20', 'locomotives acquises'], ['140 km/h', 'vitesse maximale'], ['CH, D', 'homologation'], ['2002', 'première mise en service']],
  daten: { 'Bauart': 'locomotive électrique Bo’Bo’', 'Zulassung': 'Suisse, Allemagne', 'Anzahl': '20 acquises ; 485 004 retirée après un accident en 2020' },
  specNote: 'Les 140 km/h correspondent au type TRAXX F140.',
  bilder: ['Re 485 005 de BLS Cargo', 'Re 485 016 avec un train de marchandises', 'Re 485 008 près d’Allmendingen']
});
uebZug('bls-re-486', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Bombardier a livré à BLS Cargo dès l’automne 2008 dix TRAXX polycourant du type F140 MS numérotées 486 501–510 ; les dernières ont suivi en 2009.'] }, { titel: 'Utilisation et technique', p: ['Les Re 486 peuvent circuler en Suisse, en Allemagne, en Italie et en Autriche. Elles conviennent donc au transit à travers les Alpes, par exemple avec la route roulante.', 'Locomotive polycourant, elle circule sous courant alternatif et continu ; la vitesse maximale est de 140 km/h.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Locomotive polycourant pour courant alternatif et continu', 'Homologation pour la Suisse, l’Allemagne, l’Italie et l’Autriche'], p: ['La Re 486 est une locomotive marchandises et n’a pas de compartiment voyageurs.'] }],
  typ: 'Locomotive électrique polycourant de Bombardier',
  text: ['Les Re 486 sont des TRAXX polycourant de BLS Cargo. Elles peuvent circuler en Suisse, en Allemagne, en Italie et en Autriche.', 'Elles conviennent donc au transit à travers les Alpes, par exemple avec la route roulante.'],
  kennzahlen: [['10', 'locomotives'], ['140 km/h', 'vitesse maximale'], ['4', 'pays'], ['2008', 'première mise en service']],
  daten: { 'Bauart': 'locomotive électrique polycourant Bo’Bo’', 'Zulassung': 'Suisse, Allemagne, Italie, Autriche' },
  specNote: 'Les 140 km/h correspondent au type TRAXX F140.',
  bilder: ['Re 486 503 avec la route roulante à Fribourg-en-Brisgau', 'Re 486 504 de BLS Cargo']
});
uebZug('bls-re-425', {
  typ: 'Locomotive électrique du BLS, connue comme «les brunes»',
  text: ['Pendant des décennies, les Re 4/4 brunes du BLS, aujourd’hui Re 425, ont remorqué des trains rapides entre Berne et Brigue et des trains de marchandises de Bâle à Domodossola. Le chargement des autos au Lötschberg a aussi longtemps été leur tâche.', 'Chez BLS Cargo, l’utilisation en trafic marchandises a pris fin en 2021. Dès fin 2023, les Re 465 ont repris progressivement le chargement des autos ; la dernière course régulière d’une Re 425 a eu lieu le 27 juillet 2026 entre Kandersteg et Goppenstein. La Re 425 165 «Moutier» est conservée par la Fondation BLS.'],
  kennzahlen: [['35', 'construites 1964–1983'], ['4980 kW', 'puissance'], ['140 km/h', 'vitesse maximale'], ['1964', 'première mise en service']],
  daten: { 'Bauart': 'locomotive électrique Bo’Bo’', 'Betreiber': 'BLS et BLS Cargo (historique) ; quelques locomotives aujourd’hui en service muséal ou spécial', 'Länge': '15,1 m (dès le n° 174 : 15,47 m)', 'Anzahl': '35 construites' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['35 locomotives ont été construites ; la première est entrée en service en 1964. Aujourd’hui, elles portent les numéros Re 425 161–195. Dès le numéro 174, elles sont un peu plus longues (15,47 m) que les anciennes (15,1 m).'] }, { titel: 'Utilisation et technique', p: ['Les locomotives tiraient les trains rapides Berne–Brigue, les trains marchandises Bâle–Domodossola et le transport des autos au Lötschberg. Chez BLS Cargo, le trafic marchandises a pris fin en 2021. Dès fin 2023, les Re 465 ont repris le transport des autos ; la dernière course régulière a eu lieu le 27 juillet 2026 entre Kandersteg et Goppenstein.', 'La locomotive développe 4980 kW et roule jusqu’à 140 km/h.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Pas de compartiment voyageurs'], p: ['En tête de trains voyageurs et pour le transport des autos, l’accessibilité dépendait des voitures.'] }, { titel: 'La Re 4/4 165 «Moutier»', p: ['La 165 a été livrée au BLS comme Ae 4/4 II 265 et porte les armoiries de la commune de Moutier. Depuis 2017, elle fait partie des véhicules historiques de la Fondation BLS et se trouve, hors service, au dépôt de Berthoud.'] }],
  bilder: ['Re 425 192 à Spiez']
});
uebZug('bls-am-843', {
  typ: 'Locomotive diesel-hydraulique de BLS Infrastructure',
  text: ['BLS Infrastructure utilise aussi des locomotives diesel de la série Am 843, par exemple l’Am 843 503. Elles remorquent des trains de travaux et manœuvrent sans caténaire.', 'Techniquement, la locomotive correspond à l’Am 843 des CFF.'],
  kennzahlen: [['843 503', 'exemple photographié'], ['diesel', 'motorisation'], ['trains de travaux', 'utilisation'], ['BLS', 'infrastructure']],
  daten: { 'Bauart': 'locomotive diesel', 'Antrieb': 'diesel-hydraulique', 'Betreiber': 'BLS Infrastructure', 'Einsatz': 'trains de travaux, manœuvres, intervention' },
  specNote: 'Le BLS indique la longueur, le poids et l’année pour l’Am 843 de son service d’intervention. Le nombre total d’Am 843 du BLS n’est pas documenté publiquement.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['L’Am 843 est une locomotive Vossloh, techniquement identique à l’Am 843 des CFF. Pour la locomotive du service d’intervention, le BLS indique l’année 2008. Le nombre d’Am 843 du BLS n’est pas documenté publiquement.'] }, { titel: 'Utilisation et technique', p: ['Le BLS mentionne une Am 843 parmi les véhicules de son service d’intervention, avec le train d’extinction et de sauvetage LRZ 04 et le wagon de secours. Le service d’intervention est le corps de sapeurs-pompiers d’entreprise du BLS.'] }, { titel: 'Équipement et accessibilité', liste: ['Propulsion diesel-hydraulique, indépendante de la ligne de contact', '15,2 m de long, 80 t', 'Pas de compartiment voyageurs'] }],
  bilder: ['Am 843 503 de BLS Infrastructure']
});
uebZug('bls-rangier', {
  name: 'Véhicules de manœuvre',
  typ: 'Locomotives et tracteurs de manœuvre du BLS',
  text: ['Pour manœuvrer dans les gares et les ateliers, le BLS utilise différents petits engins. Certains proviennent de compagnies qui font aujourd’hui partie du BLS, comme le chemin de fer Emmental–Berthoud–Thoune.', 'Cette page montre les types documentés sur des photos avec l’inscription BLS.'],
  kennzahlen: [['5', 'types documentés sur photo'], ['Ee 936', 'plus grande loco de manœuvre'], ['Kandersteg', 'entre autres photographiés'], ['BLS', 'exploitant']],
  daten: { 'Bauart': 'locomotives et tracteurs de manœuvre', 'Einsatz': 'manœuvres dans les gares et ateliers' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Le BLS utilise des locomotives et tracteurs de manœuvre des types Ee 936, Eea 935, Tem 225, Tm 235 et Tea 245. Certains viennent de chemins de fer qui font aujourd’hui partie du BLS, comme l’Emmental–Burgdorf–Thun. Le nombre de véhicules de chaque type n’est pas documenté publiquement.'] }, { titel: 'Utilisation et technique', p: ['Les véhicules manœuvrent wagons et trains dans les gares et les ateliers. Selon le type, ils roulent à l’électricité par la ligne de contact, avec un moteur diesel ou avec une batterie.'] }, { titel: 'Équipement et accessibilité', liste: ['Petites locomotives et tracteurs pour de courtes manœuvres', 'Pas de compartiment voyageurs'] }, { titel: 'Documentés sur photo', tabelle: { kopf: ['Type', 'Exemple', 'Motorisation', 'Photo'], zeilen: [
    ['Ee 936', '936 132', 'électrique', 'Kandersteg 2016'], ['Eea 935', '935 402', 'électrique et batterie', 'Kandersteg 2016'],
    ['Tem 225', '225 041', 'électrique et diesel', 'Berthoud 2018'], ['Tm 235', '235 091', 'diesel', 'Spiez 2012'], ['Tea 245', '245 021', 'électrique et batterie', 'sans lieu']] } }],
  bilder: ['Ee 936 132 à Kandersteg (2016)', 'Eea 935 402 à Kandersteg (2016)', 'Tem 225 041 à Berthoud (2018)', 'Tm 235 091 à Spiez (2012)', 'Tea 245 021']
});
uebZug('bls-lrz', {
  typ: 'Trains d’extinction et de sauvetage du BLS',
  text: ['Le BLS possède aussi ses propres trains d’extinction et de sauvetage. Ils sont notamment stationnés au centre d’intervention de Frutigen, au portail nord du tunnel de base du Lötschberg.', 'Ces trains amènent agents extincteurs, secouristes et protection respiratoire dans les longs tunnels.'],
  kennzahlen: [['Frutigen', 'centre d’intervention'], ['Lötschberg', 'tunnel de base'], ['tunnels', 'utilisation principale'], ['BLS', 'exploitant']],
  daten: { 'Bauart': 'train d’extinction et de sauvetage', 'Standort': 'notamment centre d’intervention de Frutigen', 'Einsatz': 'sauvetage en tunnel, lutte contre le feu' },
  specNote: 'Les données valent pour le LRZ 04 que le BLS cite pour son service d’intervention. Le nombre total de trains n’est pas documenté publiquement.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Pour son service d’intervention, le BLS cite le LRZ 04 de 2004. Le nombre total de trains n’est pas documenté publiquement.'] }, { titel: 'Utilisation et technique', p: ['Les trains sont stationnés notamment au centre d’intervention de Frutigen, au portail nord du tunnel de base du Lötschberg. Ils apportent agents extincteurs, sauveteurs et protection respiratoire dans les longs tunnels. Le LRZ 04 mesure 80 m et pèse 285 t.'] }, { titel: 'Équipement et accessibilité', liste: ['Véhicule de matériel', 'Véhicule d’extinction avec citerne', 'Deux véhicules de sauvetage'] }],
  bilder: ['Train d’extinction et de sauvetage devant le centre d’intervention de Frutigen']
});
uebZug('bls-ae-4-4', {
  typ: 'Locomotive à grande puissance à quatre essieux du BLS (historique)',
  text: ['Les Ae 4/4 du BLS ont été les premières locomotives modernes à bogies à quatre essieux avec 1000 ch par essieu. Elles sont considérées comme les précurseurs de toutes les locomotives modernes à quatre essieux de grande puissance.', 'L’Ae 415 251 est en état de marche et peut être louée auprès du BLS.'],
  kennzahlen: [['1944', 'première livraison'], ['2945 kW', 'puissance'], ['125 km/h', 'vitesse maximale'], ['80 t', 'poids']],
  daten: { 'Bauart': 'locomotive électrique Bo’Bo’', 'Hersteller': 'SLM et BBC', 'Betreiber': 'BLS, aujourd’hui BLS Historic', 'Erhalten': 'Ae 415 251, en état de marche' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['SLM et BBC ont construit les Ae 4/4 du BLS ; la première est entrée en service en 1944. Elles se sont ensuite appelées Ae 415. L’Ae 415 251 est conservée en état de marche et peut être louée auprès du BLS.'] }, { titel: 'Utilisation et technique', p: ['Les Ae 4/4 ont été les premières locomotives modernes à bogies à quatre essieux avec 1000 ch par essieu ; elles sont considérées comme les précurseurs de toutes les locomotives modernes à grande puissance à quatre essieux. Elles développent 2945 kW et roulent jusqu’à 125 km/h.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Pas de compartiment voyageurs'] }, { titel: 'Modernisée', liste: ['Nouveaux graduateurs et disjoncteurs à air comprimé', 'Frein électrique deux fois plus puissant ; un pantographe a été retiré pour cela', 'Ressorts en caoutchouc au lieu de ressorts à lames', 'Câble qui charge davantage les essieux avant et améliore l’adhérence'] }],
  bilder: ['Ae 4/4 251 à Interlaken West (2004)']
});
uebZug('bls-ae-6-8', {
  typ: 'Lourde locomotive de montagne du Lötschberg (historique)',
  text: ['Les Ae 6/8 du Lötschberg ont été construites de 1926 à 1943 et étaient alors les locomotives les plus puissantes du monde.', 'L’Ae 6/8 205 a été exposée à l’Exposition nationale de 1939 à Zurich et appartient aujourd’hui à la Fondation BLS.'],
  kennzahlen: [['8', 'construites 1926–1943'], ['4415 kW', 'puissance'], ['100 km/h', 'vitesse maximale'], ['120 t', 'poids']],
  daten: { 'Bauart': 'locomotive électrique (1’Co)(Co1’)', 'Hersteller': 'électricité SAAS ; mécanique Breda (201–204), SLM (205–208)', 'Betreiber': 'BLS, aujourd’hui Fondation BLS', 'Erhalten': 'Ae 6/8 205' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['La SAAS a fourni l’équipement électrique, Breda (201–204) et SLM (205–208) la partie mécanique. Les huit locomotives ont été construites de 1926 à 1943. L’Ae 6/8 205 a été exposée à l’Exposition nationale de 1939 à Zurich et appartient aujourd’hui à la Fondation BLS.'] }, { titel: 'Utilisation et technique', p: ['Les Ae 6/8 tiraient de lourds trains sur la ligne du Lötschberg et étaient à leur construction la locomotive la plus puissante du monde. Elles développent 4415 kW et roulent jusqu’à 100 km/h.'] }, { titel: 'Équipement et accessibilité', liste: ['Six essieux moteurs, disposition (1’Co)(Co1’)', 'Pas de compartiment voyageurs'] }, { titel: 'Deux séries', p: ['Les numéros 201–204 ont été construits de 1926 à 1931 encore comme Be 6/8, les 205–208 de 1939 à 1943 directement comme Ae 6/8 pour 100 km/h. En 1939, les quatre premières ont aussi reçu de nouvelles transmissions pour les trains rapides en plaine.'] }],
  bilder: ['Ae 6/8 205 près d’Ausserberg, 100 ans du Lötschberg']
});
uebZug('bls-ae-8-8', {
  typ: 'Double locomotive pour les lourds trains du Lötschberg (historique)',
  text: ['L’Ae 8/8 se compose en principe de deux Ae 4/4 accouplées en permanence. Le BLS l’a acquise dès 1956, car de plus en plus de lourds trains avaient besoin d’une locomotive de renfort sur la ligne du Lötschberg.', 'On la surnomme «Muni», le taureau.'],
  kennzahlen: [['6475 kW', 'puissance'], ['160 t', 'poids'], ['125 km/h', 'vitesse maximale'], ['1959', 'première mise en service']],
  daten: { 'Bauart': 'double locomotive Bo’Bo’+Bo’Bo’', 'Betreiber': 'BLS, aujourd’hui Fondation BLS', 'Erhalten': 'Ae 8/8 273 et 275' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Le BLS a acquis les doubles locomotives dès 1956 ; elles ont été mises en service entre 1959 et 1966. Les 273 et 275 sont conservées par la Fondation BLS.'] }, { titel: 'Utilisation et technique', p: ['Comme de plus en plus de trains lourds avaient besoin d’une locomotive de renfort sur la ligne du Lötschberg, l’Ae 8/8 se compose en principe de deux Ae 4/4 accouplées de façon permanente. Elle mesure 30,2 m, pèse 160 t, développe 6475 kW et roule jusqu’à 125 km/h.'] }, { titel: 'Équipement et accessibilité', liste: ['Double locomotive de deux moitiés accouplées en permanence (Bo’Bo’+Bo’Bo’)', 'Pas de compartiment voyageurs'] }, { titel: 'Aujourd’hui', p: ['Les Ae 8/8 ont été mises en service entre 1959 et 1966. L’une des dernières tâches de la 273 a été de remorquer les trains de déblais du tunnel de base du Lötschberg.', 'La Fondation BLS récolte des fonds pour remettre la 273 en état de marche. L’avenir de la 275 est incertain en raison de son état.'] }],
  bilder: ['Ae 8/8 274']
});
uebZug('bls-be-5-7', {
  typ: 'Première locomotive électrique du Lötschberg (historique)',
  text: ['En 1913, la Be 5/7 a été la première locomotive de série pour le Lötschberg électrique. Elle était conçue comme locomotive universelle pour trains rapides et marchandises.', 'Après l’arrivée des Ae 4/4, elle a surtout remorqué des trains de marchandises.'],
  kennzahlen: [['13', 'construites'], ['1913', 'première mise en service'], ['1840 kW', 'puissance unihoraire'], ['75 km/h', 'vitesse maximale']],
  daten: { 'Bauart': 'locomotive électrique 1’E1’', 'Hersteller': 'SLM, MFO et BBC', 'Leistung': '1840 kW (puissance unihoraire)', 'Höchstgeschwindigkeit': '75 km/h, locomotives ultérieures 80 km/h', 'Erhalten': 'une locomotive au Musée suisse des transports' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['SLM, MFO et BBC ont construit les locomotives numérotées 151–163 ; la première est entrée en service en 1913. Les locomotives plus récentes roulaient à 80 au lieu de 75 km/h.'] }, { titel: 'Utilisation et technique', p: ['La Be 5/7 a été la première locomotive de série du Lötschberg électrique, prévue comme locomotive universelle pour trains rapides et marchandises. Après l’arrivée des Ae 4/4, elle a surtout tiré des trains marchandises. Elle développe 1840 kW.'] }, { titel: 'Équipement et accessibilité', liste: ['Cinq essieux moteurs, disposition 1’E1’', 'Pas de compartiment voyageurs'] }, { titel: 'Au Musée des transports', p: ['Depuis 1959, la locomotive 161 (à l’origine 155) se trouve au Musée suisse des transports à Lucerne. Elle y porte le numéro 151.'] }],
  bilder: ['Be 5/7 portant le numéro 151']
});
uebZug('bls-ce-6-6', {
  typ: 'Locomotive électrique d’essai et de marchandises de 1910 (historique)',
  text: ['La Ce 6/6 121 était une locomotive électrique unique, construite en 1910 comme F 2×3/3, puis appelée Fc 2×3/3 et enfin Ce 6/6.', 'Elle a circulé jusqu’en 1968, surtout avec des trains de marchandises sur des lignes plus plates comme Thoune–Interlaken.'],
  kennzahlen: [['1', 'exemplaire'], ['1910', 'construite'], ['1968', 'démolie'], ['1,7 mio de km', 'parcourus']],
  daten: { 'Bauart': 'locomotive électrique à deux bogies moteurs à trois essieux', 'Hersteller': 'MFO et SLM', 'Leistung': '2 × 1000 ch (puissance unihoraire)', 'Höchstgeschwindigkeit': '70 km/h, plus tard 60 km/h', 'Verbleib': 'démolie en 1968, un bogie au Musée des transports' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['MFO et SLM ont construit en 1910 l’unique locomotive 121. Elle s’est d’abord appelée F 2×3/3, puis Fc 2×3/3 et enfin Ce 6/6.'] }, { titel: 'Utilisation et technique', p: ['La locomotive tirait surtout des trains marchandises sur des lignes plus plates comme Thoune–Interlaken, dès 1928 sur le Berne–Neuchâtel. Deux châssis moteurs développaient chacun 1000 ch ; la vitesse maximale a ensuite été réduite de 70 à 60 km/h.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux châssis moteurs à trois essieux', 'Pas de compartiment voyageurs'] }, { titel: 'Longtemps en service', p: ['Dès 1928, la locomotive a remorqué des trains de marchandises pour le chemin de fer Berne–Neuchâtel. Elle a été démolie le 10 juillet 1968 après 57 ans. Un bogie est exposé au Musée des transports de Lucerne.'] }],
  bilder: ['Fc 2×3/3 121, la future Ce 6/6 121']
});
uebZug('bls-ce-4-6', {
  typ: 'Locomotive électrique légère pour lignes secondaires (historique)',
  text: ['La Ce 4/6 doit son surnom de «Dekretsmühle» au gouvernement bernois, qui a ordonné par décret en 1918 l’électrification des lignes secondaires pour faire face à la pénurie de charbon après la Première Guerre mondiale.', 'La Ce 4/6 307 de l’ancien chemin de fer Erlenbach–Zweisimmen se trouve aujourd’hui au dépôt de Berthoud.'],
  kennzahlen: [['17', 'locomotives 301–317'], ['1920', 'année de construction de la 307'], ['993 kW', 'puissance'], ['65 km/h', 'vitesse maximale']],
  daten: { 'Bauart': 'locomotive électrique à bielles', 'Betreiber': 'groupe BLS, aujourd’hui Fondation BLS', 'Erhalten': 'Ce 4/6 307, hors service' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Dès 1920, le groupe BLS a reçu les locomotives 301–317. Les 308–317 ont été transformées en Ce 4/4 en 1954–1956. La Ce 4/6 307 de l’ancien Erlenbach–Zweisimmen appartient à la Fondation BLS depuis 2023.'] }, { titel: 'Utilisation et technique', p: ['Les locomotives circulaient surtout sur des lignes secondaires électrifiées après le décret du gouvernement bernois de 1918. Elles développent 993 kW et roulent jusqu’à 65 km/h.'] }, { titel: 'Équipement et accessibilité', liste: ['Entraînement par bielles', 'Charge par essieu maximale de 12 t pour les lignes secondaires', 'Pas de compartiment voyageurs'] }, { titel: 'Construction légère', p: ['Comme les locomotives devaient surtout circuler sur des lignes secondaires, leur charge par essieu ne devait pas dépasser 12 tonnes. Les 308–317 ont été transformées en Ce 4/4 en 1954–1956.', 'La 307 est un véhicule historique du BLS depuis 1999 et appartient à la Fondation BLS depuis 2023.'] }],
  bilder: ['Ce 4/6 307 «Dekretsmühle»']
});
uebZug('bls-ce-4-4', {
  typ: 'Locomotive électrique transformée à partir d’une Ce 4/6 (historique)',
  text: ['Les Ce 4/4 sont nées en 1954–1956 des Ce 4/6 308–317 : les avant-corps et les essieux porteurs ont été supprimés. Le poids adhérent et l’effort de traction ont ainsi augmenté, bien que la locomotive soit devenue plus légère.', 'La Ce 4/4 312 est aujourd’hui une pièce de musée au dépôt de Berthoud.'],
  kennzahlen: [['1920', 'construite'], ['1957', 'transformation de la 312'], ['993 kW', 'puissance'], ['65 km/h', 'vitesse maximale']],
  daten: { 'Bauart': 'locomotive électrique', 'Betreiber': 'groupe BLS, aujourd’hui Fondation BLS', 'Fahrzeugnummern': '312 (anciennement GBS)', 'Erhalten': 'Ce 4/4 312, hors service' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les Ce 4/4 sont nées en 1954–1956 des Ce 4/6 308–317 construites dès 1920. La 312, autrefois au GBS, est un véhicule historique depuis 2013 avec une caisse repeinte et appartient à la Fondation BLS depuis 2023. Elle peut être visitée lors de visites guidées au dépôt de Burgdorf.'] }, { titel: 'Utilisation et technique', p: ['Lors de la transformation, les capots et les essieux porteurs ont été enlevés. Le poids adhérent et l’effort de traction ont ainsi augmenté, bien que la locomotive soit devenue plus légère. Elle développe 993 kW et roule jusqu’à 65 km/h.'] }, { titel: 'Équipement et accessibilité', liste: ['Quatre essieux moteurs', '12,34 m de long, 64 t', 'Pas de compartiment voyageurs'] }]
});
uebZug('bls-bcfe-4-6', {
  beiname: 'Flèche bleue',
  typ: 'Automotrice double légère de 1938 (historique)',
  text: ['La «Flèche bleue» de 1938 est, avec la Flèche rouge des CFF, l’un des classiques du rail suisse. Ses grandes fenêtres offrent une vue presque panoramique.', 'La BCFe 4/6 736 est en état de marche et peut être louée pour des excursions.'],
  kennzahlen: [['1938', 'construite'], ['136', 'places'], ['110 km/h', 'vitesse maximale'], ['41,5 m', 'longueur']],
  daten: { 'Bauart': 'automotrice double électrique', 'Hersteller': 'Sécheron (électricité), SIG (mécanique)', 'Betreiber': 'groupe BLS, aujourd’hui BLS Historic', 'Fahrzeugnummern': '736 (anciennement BCFZe 4/6 du BN)' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['En 1935, le BLS a introduit des automotrices légères à une caisse. L’essai ayant réussi, il a commandé trois automotrices doubles BCFZe 4/6, livrées à l’été 1938. La 731 était exposée à l’Exposition nationale de 1939.', 'Pendant des décennies, ces trois trains ont assuré le trafic voyageurs du groupe BLS, jusqu’à leur vente en 1983. La 736 du chemin de fer Berne–Neuchâtel est conservée.'] }, { titel: 'Utilisation et technique', p: ['Pendant des décennies, les automotrices doubles ont assuré le trafic voyageurs du groupe BLS. Une rame mesure 41,5 m, développe 710 kW et roule jusqu’à 110 km/h. La partie électrique vient de Sécheron, la partie mécanique de SIG.'] }, { titel: 'Équipement et accessibilité', liste: ['136 places assises', 'Grandes fenêtres avec une vue presque panoramique', 'En état de marche, peut être louée pour des excursions'] }],
  bilder: ['BCFe 4/6 736 «Flèche bleue»']
});
uebZug('bls-be-4-4-761', {
  typ: 'Automotrice à grande puissance de 1953 (historique)',
  text: ['La «Wellensittich» (perruche) de 1953, aujourd’hui Be 545 761, est considérée comme l’ancêtre des automotrices à grande puissance. Avec 2000 ch, elle pouvait même remorquer des trains internationaux Berne–Paris entre Berne et Neuchâtel.', 'Depuis 2001, elle porte à nouveau sa livrée d’origine vert clair et vert foncé et circule pour des courses spéciales.'],
  kennzahlen: [['1953', 'construite'], ['1470 kW', 'puissance'], ['125 km/h', 'vitesse maximale'], ['56', 'places assises']],
  daten: { 'Bauart': 'automotrice électrique', 'Frühere Bezeichnung': 'Ce 4/4, puis Be 4/4 761', 'Betreiber': 'BN, aujourd’hui BLS Historic', 'Fahrzeugnummern': '761–763 (conservée : 761)' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les 761 et 762 sont arrivées en 1953 au Berne–Neuchâtel, la 763 en 1956 au GBS. La 761 s’appelle aujourd’hui Be 545 761 et fait partie des véhicules historiques du BLS depuis 2003.'] }, { titel: 'Utilisation et technique', p: ['Avec 2000 ch (1470 kW), l’automotrice pouvait même tirer des trains internationaux Berne–Paris entre Berne et Neuchâtel. Elle roule jusqu’à 125 km/h.'] }, { titel: 'Équipement et accessibilité', liste: ['56 places assises', 'Intérieur entièrement rénové en 2010', 'De nouveau dans sa livrée d’origine vert clair et vert foncé depuis 2001'] }],
  bilder: ['Be 4/4 761 «Wellensittich» à Frutigen']
});
uebZug('bls-ce-2-4', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['En 1935, le groupe BLS a introduit des automotrices légères à une caisse, dont les Ce 2/4 727 et 787. Les données conservées sur ces automotrices sont rares ; les sources utilisées n’indiquent pas les constructeurs.'] }, { titel: 'Utilisation et technique', p: ['Les automotrices étaient un essai de véhicules électriques légers. Comme il a réussi, les automotrices doubles « Flèche bleue » ont suivi en 1938.'] }, { titel: 'Équipement et accessibilité', p: ['Aucune information fiable sur l’équipement n’est publiée. La lettre C désigne les places de l’ancienne 3e classe.'] }],
  typ: 'Automotrice légère de 1935 (historique)',
  text: ['En 1935, le groupe BLS a introduit des automotrices légères à une caisse, dont les Ce 2/4 727 et 787. L’essai ayant réussi, les automotrices doubles «Flèche bleue» ont suivi en 1938.', 'Les données conservées sur ces automotrices sont rares.'],
  kennzahlen: [['1935', 'construites'], ['727, 787', 'numéros'], ['1', 'caisse'], ['BLS', 'groupe']],
  daten: { 'Bauart': 'automotrice électrique légère', 'Betreiber': 'groupe BLS' },
  bilder: ['Ce 2/4 787']
});
uebZug('bls-abde-4-8', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['SIG et SAAS, puis aussi BBC, ont construit les automotrices doubles 741–755 pour le BLS, le SEZ, le GBS et le BN. La première a circulé en 1945. Seule l’ancienne 742 est conservée, par le groupe du musée ferroviaire Kerzers-Kallnach.'] }, { titel: 'Utilisation et technique', p: ['Les rames assuraient le trafic régional du groupe BLS, par exemple dans le Simmental, entre Spiez et Interlaken et dans le Gürbetal, souvent en navette avec voiture-pilote. Les premières (741–743) développaient 706 kW, les suivantes 1177 kW ; la vitesse maximale est passée de 110 à 125 km/h.'] }, { titel: 'Équipement et accessibilité', liste: ['Automotrice double d’env. 47 m', 'Compartiment à bagages (lettre D)', 'Accès surélevés avec marches'] }],
  typ: 'Automotrice double électrique pour le trafic régional (historique)',
  text: ['Dès 1945, les automotrices doubles ABDe 4/8 ont circulé en trafic régional dans le groupe BLS, par exemple dans le Simmental, entre Spiez et Interlaken et dans le Gürbetal. Beaucoup roulaient en rame réversible avec voiture-pilote.', 'Un seul train est conservé : l’ancienne 742, aujourd’hui chez le groupe du musée ferroviaire de Kerzers-Kallnach.'],
  kennzahlen: [['13', 'trains 1945–1964'], ['125 km/h', 'vitesse maximale'], ['1177 kW', 'puissance des trains ultérieurs'], ['2003', 'derniers retirés']],
  daten: { 'Bauart': 'automotrice double électrique', 'Hersteller': 'SIG et SAAS, plus tard aussi BBC', 'Länge': 'environ 46,8–47,8 m', 'Leistung': '706 kW (741–743), 1177 kW (ultérieures)', 'Höchstgeschwindigkeit': '110 km/h, plus tard 125 km/h', 'Erhalten': 'ex 742 à Kerzers-Kallnach' },
  bilder: ['ABDe 4/8 741']
});
uebZug('bls-rbde-565', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['SIG, SWS, SWP, BBC et ABB ont construit 22 automotrices numérotées 721–742 ; la première est entrée en service en 1982.'] }, { titel: 'Utilisation et technique', p: ['Les automotrices circulaient avec voitures intermédiaires et voitures-pilotes dans le trafic régional et S-Bahn du BLS. Elles développent 1650 kW en continu et roulent jusqu’à 125 km/h. De 2022 à 2025, elles ont été remplacées par les MIKA.'] }, { titel: 'Équipement et accessibilité', liste: ['Rame réversible avec voitures intermédiaires et voiture-pilote', 'Compartiment à bagages dans l’automotrice (lettre D)', 'Accès surélevés dans l’automotrice'] }],
  typ: 'Rame réversible régionale des chemins de fer privés (historique)',
  text: ['Les RBDe 565 étaient les rames réversibles régionales du BLS. Elles circulaient avec voitures intermédiaires et voitures-pilotes en trafic régional et RER.', 'De 2022 à 2025, elles ont été remplacées par les nouvelles MIKA.'],
  kennzahlen: [['22', 'automotrices'], ['125 km/h', 'vitesse maximale'], ['1650 kW', 'puissance continue'], ['1982', 'première mise en service']],
  daten: { 'Bauart': 'automotrice électrique pour rames réversibles', 'Hersteller': 'SIG, SWS, SWP, BBC et ABB', 'Leistung': '1650 kW (puissance continue)' },
  bilder: ['RBDe 565 726 à Laupen (2019)']
});
uebZug('bls-rbde-566', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les 13 automotrices 230–242 ont été construites en 1984–1985 pour le groupe EBT et sont arrivées au BLS avec la fusion de 2006. La 566 241 est conservée avec des voitures par l’association Pendelzug Mirage.'] }, { titel: 'Utilisation et technique', p: ['Les rames circulaient notamment sur Spiez–Frutigen, Brigue–Goppenstein, dans le S-Bahn de Berne et entre Thoune et Soleure. La dernière course régulière a eu lieu le 6 décembre 2024.'] }, { titel: 'Équipement et accessibilité', liste: ['Automotrice pour rames réversibles avec voitures intermédiaires et voiture-pilote', 'Compartiment à bagages (lettre D)', 'Accès surélevés dans l’automotrice'] }],
  typ: 'Rame réversible régionale de l’ancien parc RM (historique)',
  text: ['Les RBDe 566 II ont été construites en 1984–1985 pour le groupe EBT et sont arrivées au BLS avec la fusion de 2006. Elles circulaient notamment entre Spiez et Frutigen, Brigue et Goppenstein, sur le RER bernois et entre Thoune et Soleure.', 'La dernière course régulière a eu lieu le 6 décembre 2024.'],
  kennzahlen: [['13', 'automotrices'], ['1984', 'première mise en service'], ['2024', 'dernière course'], ['230–242', 'numéros']],
  daten: { 'Bauart': 'automotrice électrique pour rames réversibles', 'Betreiber': 'groupe EBT et RM, dès 2006 BLS', 'Verbleib': '566 241 avec voitures chez l’association Pendelzug Mirage' },
  bilder: ['RBDe 566 238 avec AB et ABt (2020)']
});
uebZug('bls-rabe-526', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Stadler a construit les 13 automotrices articulées GTW pour le Regionalverkehr Mittelland (RM). Avec la fusion, elles sont passées au BLS.'] }, { titel: 'Utilisation et technique', p: ['En 2013, le BLS a vendu les rames aux CFF, qui les ont utilisées dans le Jura au départ de Bienne ; en 2018, elles sont allées à Thurbo. Aujourd’hui, elles ne circulent plus au BLS.'] }, { titel: 'Équipement et accessibilité', liste: ['Automotrice articulée électrique de la famille Stadler GTW', 'Partiellement à plancher surbaissé'] }],
  typ: 'Automotrice articulée Stadler de l’ancien parc RM (anciennement BLS)',
  text: ['Les GTW rouges du Regionalverkehr Mittelland sont arrivés au BLS avec la fusion. En 2013, le BLS les a vendus aux CFF, qui les ont utilisés dans le Jura depuis Bienne ; en 2018, ils sont partis chez Thurbo.', 'Ils ne circulent plus au BLS.'],
  kennzahlen: [['13', 'rames'], ['2013', 'aux CFF'], ['2018', 'à Thurbo'], ['Stadler', 'constructeur']],
  daten: { 'Bauart': 'automotrice articulée électrique', 'Betreiber': 'RM, puis BLS, CFF, Thurbo' },
  bilder: ['GTW RABe 526 265 du BLS']
});
uebZug('bls-ew-iii', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Le BLS a exploité les rames réversibles de voitures unifiées III de 1973 à fin 2021. Une rame se composait d’une locomotive et de six voitures : AD/ABS, A, B, B, B et voiture-pilote Bt. CFF Historic a repris une rame et la conserve.'] }, { titel: 'Utilisation et technique', p: ['En dernier, les rames circulaient surtout comme RegioExpress Berne–Neuchâtel, tirées par une Re 465, le train Kambly par une Re 420. Une rame mesure 165 m, pèse 263 t et roule jusqu’à 140 km/h. Les MIKA les ont remplacées.'] }, { titel: 'Équipement et accessibilité', liste: ['63 places en 1re et 280 en 2e classe', 'Voiture-pilote Bt pour la navette', 'Accès surélevés avec marches'] }],
  name: 'EW III', beiname: 'Rame réversible',
  typ: 'Rame réversible avec voitures unifiées III (historique)',
  text: ['Les rames réversibles EW III du BLS ont circulé de 1973 à fin 2021, en dernier lieu surtout comme RegioExpress entre Berne et Neuchâtel. Elles ont cédé la place aux nouvelles MIKA.', 'CFF Historic a repris une rame EW III et la conserve.'],
  kennzahlen: [['1973', 'première mise en service'], ['2021', 'retirées'], ['165 m', 'longueur du train'], ['140 km/h', 'vitesse maximale']],
  daten: { 'Bauart': 'rame réversible avec locomotive et 6 voitures', 'Lokomotive': 'Re 465 (train Kambly : Re 420)', 'Sitzplätze': '63 en 1re, 280 en 2e classe' },
  bilder: ['Rame réversible EW III du BLS à Malters']
});
uebZug('bls-re-420', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Le BLS a possédé un temps ses propres Re 420 de la famille Re 4/4 II. Aujourd’hui, il n’a plus de locomotives de ce type.'] }, { titel: 'Utilisation et technique', p: ['Les trois dernières tiraient les voitures de la GoldenPass Line entre Interlaken Ost et Zweisimmen. La locomotive mesure 14,8 m, pèse 80 t, développe 4700 kW et roule jusqu’à 140 km/h.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Pas de compartiment voyageurs'], p: ['L’accessibilité dépendait des voitures tirées.'] }],
  typ: 'Re 4/4 II au service du BLS (historique)',
  text: ['Le BLS a possédé pendant un temps ses propres Re 420 de la famille éprouvée des Re 4/4 II. Les trois dernières remorquaient les voitures de la GoldenPass Line entre Interlaken Ost et Zweisimmen.', 'Aujourd’hui, le BLS ne possède plus de locomotives de ce type.'],
  kennzahlen: [['4700 kW', 'puissance'], ['140 km/h', 'vitesse maximale'], ['80 t', 'poids'], ['14,8 m', 'longueur']],
  daten: { 'Bauart': 'locomotive électrique Bo’Bo’', 'Betreiber': 'BLS (autrefois)' },
  bilder: ['Re 420.5 avec rame réversible sur le pont du Bietschtal']
});

// ---------- TPF ----------
uebZug('tpf-rabe-527', {
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler Bussnang a livré aux TPF huit FLIRT de la série 190, numérotés 191–198. Ils ont été mis en service de 2011 à 2014.'] },
      { titel: 'Utilisation et technique', p: ['Les FLIRT circulent sur le RER Fribourg : en RegioExpress RE2/RE3 Berne–Fribourg–Romont–Bulle–Broc et sur les S20/S21 Fribourg–Morat–Anet–Neuchâtel.', 'Le train de quatre caisses mesure 74,08 m, développe 2600 kW et roule jusqu’à 160 km/h. Jusqu’à quatre trains peuvent être couplés.'] },
      { titel: 'Équipement et accessibilité', liste: ['Entièrement climatisé', 'Information voyageurs acoustique et visuelle', 'Compartiment multifonction', 'Plancher bas sur plus de 90 %', 'WC à circuit fermé, adapté aux personnes à mobilité réduite'],
        p: ['Le train est à plancher bas sur plus de 90 %. Les TPF n’indiquent pas le nombre de places pour fauteuils roulants.'] }
    ],
  typ: 'Rame automotrice régionale électrique de Stadler',
  text: ['Les huit FLIRT de la série 190 sont les rames à voie normale les plus modernes des TPF. Elles circulent en RegioExpress et en RER dans le canton de Fribourg et au-delà.', 'Techniquement, elles font partie de la grande famille FLIRT de Stadler.'],
  kennzahlen: [['8', 'rames (191–198)'], ['160 km/h', 'vitesse maximale'], ['418', 'places au total'], ['2011', 'première mise en service']],
  daten: { 'Bauart': 'rame automotrice électrique, 4 caisses', 'Gewicht': '122 t à vide', 'Sitzplätze': '24 en 1re, 143 en 2e classe', 'Anzahl': '8 rames' },
  specNote: 'Mises en service de 2011 à 2014. S’y ajoutent 42 strapontins et 209 places debout, soit 418 places au total.',
  bilder: ['RABe 527 196 à Neuchâtel', 'RABe 527 198 sur le viaduc de Grandfey', 'FLIRT des TPF à Bulle', 'RABe 527 en RegioExpress à Berne']
});
uebZug('tpf-rbde-560', {
  typ: 'Rame réversible régionale modernisée (Domino 3)',
  text: ['De 2009 à 2011, les TPF ont transformé leurs rames réversibles NPZ en Domino à trois caisses. Chaque rame a reçu une nouvelle voiture intermédiaire à plancher bas de Bombardier.', 'Deux rames, la 235 et la 245, portent le design «Chocolat Express».'],
  kennzahlen: [['14', 'rames'], ['140 km/h', 'vitesse maximale'], ['1650 kW', 'puissance'], ['184', 'places assises']],
  daten: { 'Bauart': 'rame réversible avec automotrice, voiture intermédiaire à plancher bas et voiture-pilote', 'Hersteller': 'SWG, SIG, ABB ; voiture intermédiaire Bombardier', 'Fahrzeugnummern': '235–247 et 269', 'Gewicht': '146 t à vide', 'Sitzplätze': '24 en 1re, 160 en 2e classe', 'Anzahl': '14 rames' },
  specNote: 'Automotrices construites de 1984 à 1996, modernisées en Domino de 2009 à 2011.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les 14 Domino des TPF (235–247 et 269) sont issus de rames réversibles NPZ construites par SWG, SIG et ABB entre 1984 et 1996. De 2009 à 2011, les TPF les ont transformées en Domino ; chaque train a reçu une nouvelle voiture intermédiaire à plancher bas de Bombardier.', 'Les TPF ont commandé 13 FLIRT Evo à quatre caisses chez Stadler. Le premier doit entrer en service en décembre 2028 ; ils remplaceront progressivement les Domino les années suivantes.'] },
      { titel: 'Utilisation et technique', p: ['Comme les FLIRT, les Domino circulent sur le RER Fribourg, en RegioExpress Berne–Fribourg–Bulle–Broc et sur les S20/S21 Fribourg–Morat–Anet–Neuchâtel.', 'Un train mesure 75 m, développe 1650 kW et roule jusqu’à 140 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Climatisation dans tout le train', 'Information voyageurs acoustique et visuelle', 'Compartiment multifonction', 'Voiture intermédiaire à plancher bas', 'WC à bioréacteur, adapté aux personnes à mobilité réduite'],
        p: ['On monte de plain-pied dans la voiture intermédiaire à plancher bas ; l’automotrice et la voiture-pilote ont des marches.'] },
      { titel: 'Chocolat Express', p: ['Les rames 235 et 245 portent le design «Chocolat Express». Il ne s’agit pas d’un type de véhicule à part, mais d’une décoration particulière de Domino ordinaires.'] }
    ],
  bilder: ['Domino au design «Chocolat Express» sur le viaduc de Grandfey']
});
uebZug('tpf-abe-4-12', {
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler Bussnang a livré aux TPF dix rames de trois caisses numérotées 101–110. Elles ont été mises en service en 2015 et 2016. Une rame se compose d’une ABe 2/4, d’une voiture intermédiaire B et d’une Be 2/4.'] },
      { titel: 'Utilisation et technique', p: ['Les rames circulent sur le réseau à voie métrique des TPF : S50 Palézieux–Châtel-St-Denis–Bulle–Montbovon et S51 jusqu’à Gruyères.', 'Une rame mesure 55,21 m, développe 1400 kW et roule jusqu’à 100 km/h. Elle est modulable de deux à quatre éléments, et jusqu’à quatre rames peuvent circuler ensemble.'] },
      { titel: 'Équipement et accessibilité', liste: ['Entièrement climatisée', 'Information voyageurs acoustique et visuelle', 'WC à circuit fermé, adapté aux personnes à mobilité réduite', '350 places : 15 en 1re et 133 en 2e classe, 14 strapontins, 188 places debout'],
        p: ['Sur sa page du véhicule, les TPF ne donnent pas d’indications sur les accès à plancher bas et les places pour fauteuils roulants.'] }
    ],
  beiname: 'Série 100',
  typ: 'Rame automotrice à plancher bas pour le réseau à voie métrique',
  text: ['Les dix rames à trois caisses de Stadler circulent sur le réseau à voie métrique des TPF en Gruyère et en Veveyse. Une rame se compose d’une ABe 2/4, d’une voiture intermédiaire B et d’une Be 2/4.', 'Jusqu’à quatre rames peuvent circuler ensemble.'],
  kennzahlen: [['10', 'rames (101–110)'], ['100 km/h', 'vitesse maximale'], ['350', 'places au total'], ['2015', 'première mise en service']],
  daten: { 'Bauart': 'rame automotrice électrique à plancher bas, 3 caisses', 'Gewicht': '88 t à vide', 'Sitzplätze': '15 en 1re, 133 en 2e classe', 'Anzahl': '10 rames' },
  specNote: 'Mises en service en 2015–2016. S’y ajoutent 14 strapontins et 188 places debout, soit 350 places au total.',
  bilder: ['ABe 4/12 devant la Dent du Chamois', 'ABe 4/12 près d’Albeuve', 'ABe 2/4 101 à Montbovon', 'ABe 2/4 103']
});
uebZug('tpf-be-4-4-120', {
  beiname: 'Série 120',
  typ: 'Rame réversible à voie métrique avec voiture intermédiaire et voiture-pilote',
  text: ['Les rames réversibles de la série 120 se composent d’une automotrice Be 4/4, selon les besoins d’une voiture intermédiaire B, et d’une voiture-pilote (A)Bt. Elles circulent sur le réseau à voie métrique des TPF.', 'Les automotrices s’appelaient autrefois BDe 4/4, car elles avaient un compartiment à bagages.'],
  kennzahlen: [['4', 'automotrices (121–124)'], ['90 km/h', 'vitesse maximale'], ['640 kW', 'puissance'], ['1992', 'première mise en service']],
  daten: { 'Bauart': 'rame réversible : automotrice, voiture intermédiaire, voiture-pilote', 'Hersteller': 'Vevey/BBC ; voitures intermédiaires SIG', 'Länge': '52,32 m (rame de 3 véhicules)', 'Sitzplätze': '134 en 2e classe ; 9 en 1re classe seulement dans les 221–223' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['La série 120 compte 13 véhicules : 4 automotrices Be 4/4 (121–124) et 6 voitures-pilotes (A)Bt (221–226) de Vevey/BBC, construites de 1992 à 1995, ainsi que 3 voitures intermédiaires B (207, 209, 215) de SIG datant de 1973.', 'Les automotrices s’appelaient autrefois BDe 4/4, car elles avaient un compartiment à bagages.'] },
      { titel: 'Utilisation et technique', p: ['Les rames réversibles circulent sur le réseau à voie métrique des TPF entre Palézieux, Bulle, Gruyères et Montbovon. Elles sont modulables : voitures intermédiaires et voitures-pilotes sont ajoutées selon la demande.', 'Une rame de trois véhicules mesure 52,32 m, développe 640 kW et roule jusqu’à 90 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Information voyageurs acoustique et visuelle', '253 places : 134 en 2e classe, 8 strapontins, 102 places debout', '1re classe de 9 places seulement dans les voitures-pilotes 221–223'],
        p: ['Sur sa page du véhicule, les TPF ne donnent pas d’indications sur la climatisation, les accès à plancher bas et les places pour fauteuils roulants.'] },
      { titel: 'Les véhicules', tabelle: { kopf: ['Véhicule', 'Numéros', 'Nombre', 'Années de construction', 'Constructeur'], zeilen: [
    ['Automotrice Be 4/4', '121–124', '4', '1992–1995', 'Vevey/BBC'], ['Voiture intermédiaire B', '207, 209, 215', '3', '1973', 'SIG'], ['Voiture-pilote (A)Bt', '221–226', '6', '1992–1995', 'Vevey/BBC']] } }
    ],
  bilder: ['Be 4/4 123', 'Automotrice 124, encore BDe 4/4 à l’époque (2010)', 'Voiture-pilote 221 à Bulle', 'Voiture-pilote 225']
});
uebZug('tpf-funiculaire', {
  typ: 'Funiculaire Neuveville–St-Pierre à contrepoids d’eau',
  text: ['Depuis 1899, le funiculaire de Fribourg relie la basse ville, la Neuveville, à St-Pierre. Il franchit 58 mètres de dénivelé sur 121 mètres.', 'Sa particularité est son fonctionnement : les eaux usées de la ville de Fribourg servent de contrepoids. Selon les TPF, c’est unique en Europe.'],
  kennzahlen: [['1899', 'ouverture'], ['121 m', 'longueur de la ligne'], ['550 ‰', 'pente maximale'], ['2 min', 'temps de parcours']],
  daten: { 'Bauart': 'funiculaire à contrepoids d’eau', 'Kabinen': '2 de 20 places chacune', 'Länge': '121 m de ligne, cabine 5,4 m', 'Gewicht': '1600 kg par cabine', 'Kapazität': '240 personnes par heure' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Le funiculaire a été construit par Von Roll ; il circule depuis 1899. Il a été transformé en 1998, la dernière grande révision date de 2020. Il est classé monument historique.', 'Il compte deux cabines de 20 places chacune.'] },
      { titel: 'Utilisation et technique', p: ['Le funiculaire relie à Fribourg la basse ville, la Neuveville (552 m), à St-Pierre (608 m). En exploitation régulière, sur la voie unique avec évitement, il effectue environ 70 allers-retours par jour, de 7 h à 19 h, en été jusqu’à 20 h.', 'Les eaux usées de la ville de Fribourg servent de contrepoids. La ligne mesure 121 m, a un écartement de 1200 mm et une pente jusqu’à 550 ‰ ; le trajet dure 2 minutes à 1,2 m/s.', 'En raison d’une révision générale, le funiculaire est fermé du 27 août au 4 décembre 2026. La reprise est annoncée pour le 5 décembre 2026 ; d’ici là, la ligne de bus 4 assure le remplacement.'] },
      { titel: 'Équipement et accessibilité', liste: ['2 cabines de 20 places chacune', '240 personnes par heure'],
        p: ['Sur la page du véhicule, les TPF ne donnent pas d’indications sur l’accès en fauteuil roulant, avec une poussette ou un vélo.'] }
    ],
  bilder: ['Funiculaire Neuveville–St-Pierre à Fribourg (2024)']
});
uebZug('tpf-tm-87', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Stadler Bussnang et ADtranz ont construit le tracteur ; il est entré en service en 2000. Les TPF l’exploitent sous le numéro 87 sur leur réseau à voie normale.'] }, { titel: 'Utilisation et technique', p: ['Le Tm 87 sert à l’entretien de l’infrastructure, tire des trains lourds et déneige. Un moteur MTU 12V 183 TD13 l’entraîne en diesel-hydraulique ; il développe 550 kW et roule jusqu’à 80 km/h.'] }, { titel: 'Équipement et accessibilité', liste: ['Grue de chargement Palfinger, 1200 kg à 7,2 m', 'Commande à distance', 'Pas de compartiment voyageurs'] }],
  typ: 'Tracteur de service diesel-hydraulique avec grue de chargement',
  text: ['Le Tm 87 est un tracteur de service de la série Tm 234 pour le réseau à voie normale des TPF. Il sert à l’entretien de l’infrastructure, remorque des trains lourds et déblaie la neige.', 'Il possède une grue de chargement et peut être télécommandé.'],
  kennzahlen: [['550 kW', 'puissance'], ['80 km/h', 'vitesse maximale'], ['30 t', 'poids'], ['2000', 'première mise en service']],
  daten: { 'Bauart': 'tracteur diesel-hydraulique avec grue de chargement', 'Gewicht': '30 t à vide', 'Kran': 'Palfinger, 1200 kg à 7,2 m' }
});
uebZug('tpf-tmf-17', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Schöma a construit le tracteur à deux essieux 17 ; il est entré en service en 2011.'] }, { titel: 'Utilisation et technique', p: ['Il travaille pour les chantiers sur le réseau à voie métrique des TPF, tire des trains lourds et déneige. Un moteur Deutz à six cylindres développe 330 kW ; le tracteur roule jusqu’à 65 km/h et tire 200 t en palier ou 90 t sur 50 ‰.'] }, { titel: 'Équipement et accessibilité', liste: ['Commande à distance', 'Deux essieux, 8,50 m de long', 'Pas de compartiment voyageurs'] }],
  typ: 'Tracteur diesel pour le réseau à voie métrique',
  text: ['Le Tmf 2/2 17 de Schöma est un tracteur diesel à deux essieux pour le réseau à voie métrique des TPF. Il travaille au service des travaux, remorque des trains lourds et déblaie la neige.', 'Il peut aussi être télécommandé.'],
  kennzahlen: [['330 kW', 'puissance'], ['65 km/h', 'vitesse maximale'], ['28 t', 'poids'], ['2011', 'première mise en service']],
  daten: { 'Bauart': 'tracteur diesel à deux essieux', 'Gewicht': '28 t à vide', 'Motor': 'Deutz, 6 cylindres', 'Anhängelast': '200 t en palier, 90 t à 50 ‰' }
});
uebZug('tpf-gem-18', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Stadler Bussnang a construit la locomotive 18 ; elle est entrée en service en 2016.'] }, { titel: 'Utilisation et technique', p: ['Sous la ligne de contact, elle roule à l’électricité avec 700 kW, sinon avec un moteur diesel Mercedes-Benz OM 502 LA de 400 kW. Les TPF l’utilisent pour les chantiers, les trains lourds et le déneigement. Elle roule jusqu’à 80 km/h et tire 300 t en palier ou 120 t sur 50 ‰.'] }, { titel: 'Équipement et accessibilité', liste: ['Cabine pour huit personnes', 'Bimode : électrique et diesel', 'Pas de compartiment pour voyageurs'] }],
  typ: 'Locomotive bimode pour le réseau à voie métrique',
  text: ['La Gem 2/2 18 de Stadler roule à l’électricité sous la caténaire et au diesel ailleurs. Les TPF l’utilisent au service des travaux, pour les trains lourds et le déneigement.', 'La cabine accueille huit personnes.'],
  kennzahlen: [['700 kW', 'électrique'], ['400 kW', 'diesel'], ['80 km/h', 'vitesse maximale'], ['2016', 'première mise en service']],
  daten: { 'Bauart': 'locomotive bimode (électrique et diesel)', 'Gewicht': '28 t à vide', 'Leistung': '700 kW électrique, 400 kW diesel', 'Anhängelast': '300 t en palier, 120 t à 50 ‰' },
  bilder: ['Gem 2/2 18']
});
uebZug('tpf-x-925', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Schindler Waggon Pratteln, MOB-TPF et Nencki ont participé au wagon-grue. Le châssis date de 1972 ; la transformation en wagon-grue est entrée en service en 2016.'] }, { titel: 'Utilisation et technique', p: ['Le wagon-grue travaille sur le réseau à voie métrique des TPF. La plate-forme de la grue peut être déplacée sur le wagon porteur à voie normale Sgjs X113 ; la grue travaille ainsi aussi sur le réseau à voie normale. Le wagon roule jusqu’à 65 km/h.'] }, { titel: 'Équipement et accessibilité', liste: ['Grue radiocommandée Palfinger PKR290, 1500 kg à 14 m', 'Quatre essieux sur deux bogies', 'Pas de compartiment voyageurs'] }],
  name: 'X 925', beiname: 'Wagon-grue',
  typ: 'Wagon-grue pour voie métrique et voie normale',
  text: ['Le wagon-grue X 925 porte une grue Palfinger radiocommandée. Le châssis date de 1972, la transformation en wagon-grue est entrée en service en 2016.', 'La plateforme de la grue peut être transférée sur le wagon porteur à voie normale Sgjs X113. La grue peut ainsi travailler aussi sur le réseau à voie normale des TPF.'],
  kennzahlen: [['1500 kg', 'à 14 m de portée'], ['65 km/h', 'vitesse maximale'], ['52 t', 'poids total'], ['2016', 'première mise en service']],
  daten: { 'Bauart': 'wagon-grue à quatre essieux 2’2’', 'Spurweite': 'voie métrique, 1000 mm ; grue aussi sur le wagon porteur à voie normale Sgjs X113', 'Gewicht': '37,825 t à vide, 52 t chargé', 'Kran': 'Palfinger PKR290, 1500 kg à 14 m' }
});
uebZug('tpf-retrozug', {
  name: 'Train rétro',
  typ: 'Train historique à voie métrique des TPF pour courses spéciales',
  text: ['Le train rétro des TPF se compose de l’automotrice Be 4/4 116 et de trois voitures de 1930 à 1932. Les TPF l’utilisent pour les trains fondue et d’autres courses spéciales.', 'L’automotrice de 1922 a été entièrement reconstruite à l’identique par les TPF en 1999.'],
  kennzahlen: [['1922', 'automotrice construite'], ['482 kW', 'puissance'], ['65 km/h', 'vitesse maximale'], ['186', 'places']],
  daten: { 'Bauart': 'automotrice avec trois voitures', 'Hersteller': 'SWS (automotrice), SIG (voitures)', 'Länge': '61,58 m (train complet)', 'Höchstgeschwindigkeit': '65 km/h (30 km/h en service)', 'Sitzplätze': '176 en 2e classe, plus 10 strapontins' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['L’automotrice Be 4/4 116 a été construite par SWS en 1922 et entièrement reconstruite à l’identique par les TPF en 1999. Les trois voitures B 243, Brs 245 et Br 247 ont été construites par SIG de 1930 à 1932.'] }, { titel: 'Utilisation et technique', p: ['Les TPF utilisent le train pour des trains fondue et d’autres courses spéciales sur leur réseau à voie métrique. L’automotrice développe 482 kW ; le train entier mesure 61,58 m et roule jusqu’à 65 km/h, 30 km/h selon l’horaire.'] }, { titel: 'Équipement et accessibilité', liste: ['176 places en 2e classe et 10 strapontins', 'Deux voitures avec partie restaurant (lettre R)', 'Accès surélevés avec marches'] }, { titel: 'Les véhicules', tabelle: { kopf: ['Véhicule', 'Année de construction', 'Constructeur'], zeilen: [
    ['Automotrice Be 4/4 116', '1922 (reconstruite en 1999)', 'SWS'], ['Voiture B 243', '1930', 'SIG'], ['Voiture Brs 245', '1931', 'SIG'], ['Voiture Br 247', '1932', 'SIG']] } }],
  bilder: ['Train rétro des TPF', 'Be 4/4 116 à Bulle (2011)', 'Intérieur du train rétro']
});
uebZug('gfm-be-111', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['L’automotrice 111 date de 1903 ; les sources utilisées n’indiquent pas de constructeur. Elle fait aujourd’hui partie de la collection de GFM Historique. De 2006 à 2011, elle était prêtée au chemin de fer-musée Blonay–Chamby.'] }, { titel: 'Utilisation et technique', p: ['Elle a circulé aux débuts des chemins de fer électriques en Gruyère, sur le réseau à voie métrique de la CEG puis des GFM.'] }, { titel: 'Équipement et accessibilité', p: ['Aucun détail fiable sur l’équipement n’est publié. Comme tous les véhicules de cette époque, elle a des accès hauts avec marches.'] }],
  typ: 'Automotrice électrique de 1903 (historique)',
  text: ['L’automotrice 111 de 1903 date des débuts des chemins de fer électriques en Gruyère. Elle fait aujourd’hui partie de la collection de GFM Historique.', 'De 2006 à 2011, elle a été prêtée au chemin de fer-musée Blonay–Chamby.'],
  kennzahlen: [['1903', 'construite'], ['111', 'numéro'], ['voie métrique', 'écartement'], ['GFM Historique', 'aujourd’hui']],
  daten: { 'Bauart': 'automotrice électrique', 'Betreiber': 'CEG/GFM, aujourd’hui GFM Historique' },
  specNote: 'GFM Historique la nomme «Be 4/4 111», Wikipédia «BCe 4/4 111».',
  bilder: ['Automotrice 111 au chemin de fer-musée Blonay–Chamby']
});
uebZug('gfm-be-115', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['L’automotrice 115 date de 1905 ; les sources utilisées n’indiquent pas de constructeur. Elle a été démolie en octobre 2016.'] }, { titel: 'Utilisation et technique', p: ['Elle a longtemps circulé comme automotrice nostalgique sur le réseau à voie métrique des GFM puis des TPF.'] }, { titel: 'Équipement et accessibilité', p: ['Aucun détail fiable sur l’équipement n’est publié. Comme tous les véhicules de cette époque, elle avait des accès hauts avec marches.'] }],
  typ: 'Automotrice nostalgique de 1905 (historique)',
  text: ['La Be 4/4 115 de 1905 a longtemps circulé comme automotrice nostalgique sur le réseau à voie métrique des GFM, puis des TPF.', 'Elle a été démolie en octobre 2016.'],
  kennzahlen: [['1905', 'construite'], ['2016', 'démolie'], ['115', 'numéro'], ['voie métrique', 'écartement']],
  daten: { 'Bauart': 'automotrice électrique', 'Betreiber': 'GFM, puis TPF', 'Verbleib': 'démolie en octobre 2016' },
  bilder: ['Be 4/4 115 à Bulle (1995)', 'Be 4/4 115 avec Bt 254 à Broc-Fabrique (2011)']
});
uebZug('gfm-be-131', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les trois automotrices 131–133 ont été construites en 1943 pour les GFM. La 132 a été démolie en 1989, la 133 en 2003 ; la 131 est conservée comme Ce 4/4 131 par GFM Historique.'] }, { titel: 'Utilisation et technique', p: ['Les automotrices circulaient sur le réseau à voie métrique des GFM.'] }, { titel: 'Équipement et accessibilité', p: ['Aucun détail fiable sur l’équipement n’est publié. Comme tous les véhicules de cette époque, elles ont des accès hauts avec marches.'] }],
  typ: 'Automotrices électriques de 1943 (historique)',
  text: ['Les trois automotrices 131 à 133 ont été construites en 1943 pour le réseau à voie métrique des GFM.', 'La 132 a été démolie en 1989 et la 133 en 2003. La 131 est conservée et fait partie de la collection de GFM Historique sous le nom de Ce 4/4 131.'],
  kennzahlen: [['3', 'automotrices'], ['1943', 'construites'], ['131', 'conservée'], ['voie métrique', 'écartement']],
  daten: { 'Bauart': 'automotrice électrique', 'Verbleib': '131 conservée, 132 démolie en 1989, 133 démolie en 2003' }
});
uebZug('gfm-bde-141', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['SWP a construit la partie mécanique, SAAS la partie électrique ; les deux automotrices 141 et 142 sont arrivées en 1972. La 141 est allée à GFM Historique en 2017, la 142 a été démolie en avril 2017.'] }, { titel: 'Utilisation et technique', p: ['D’abord, les automotrices tiraient des trains de gravier. Dès 1981, elles avaient un compartiment avec des places assises et circulaient aussi avec les voitures-pilotes 251–256. Elles pèsent 36,5 t et roulent jusqu’à 70 km/h.'] }, { titel: 'Équipement et accessibilité', liste: ['40 places assises dès 1981', 'Compartiment à bagages (lettre D)', 'Accès surélevés avec marches'] }],
  typ: 'Automotrices pour trains de gravier de 1972 (historique)',
  text: ['Les deux puissantes automotrices de 1972 ont d’abord été construites pour les trains de gravier. Dès 1981, elles ont reçu un compartiment avec places assises et ont aussi circulé avec les voitures-pilotes 251–256.', 'La 141 est allée à GFM Historique en 2017, la 142 a été démolie en avril 2017.'],
  kennzahlen: [['2', 'automotrices'], ['1972', 'construites'], ['70 km/h', 'vitesse maximale'], ['36,5 t', 'poids']],
  daten: { 'Bauart': 'automotrice électrique avec compartiment à bagages', 'Hersteller': 'SWP (mécanique), SAAS (électricité)', 'Betreiber': 'GFM, puis TPF', 'Sitzplätze': '40 (dès 1981)', 'Verbleib': '141 chez GFM Historique, 142 démolie en 2017' },
  bilder: ['BDe 4/4 141 avec voiture-pilote', 'BDe 4/4 142 à Bulle (2014)', 'BDe 4/4 142 à Bulle']
});
uebZug('gfm-be-151', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les automotrices 151 et 152 sont arrivées en 1977. Les deux ont été démolies en avril 2017.'] }, { titel: 'Utilisation et technique', p: ['Elles n’avaient qu’une cabine de conduite et circulaient donc toujours en navette avec l’une des voitures-pilotes 251–256 sur le réseau à voie métrique des GFM et des TPF.'] }, { titel: 'Équipement et accessibilité', liste: ['Une cabine de conduite', 'Toujours avec voiture-pilote', 'Accès surélevés avec marches'] }],
  typ: 'Automotrices pour rames réversibles de 1977 (historique)',
  text: ['Les automotrices 151 et 152 de 1977 n’avaient qu’une seule cabine de conduite. Elles circulaient donc toujours avec l’une des voitures-pilotes 251–256.', 'Les deux ont été démolies en avril 2017.'],
  kennzahlen: [['2', 'automotrices'], ['1977', 'construites'], ['1', 'cabine de conduite'], ['2017', 'démolies']],
  daten: { 'Bauart': 'automotrice électrique à une cabine de conduite', 'Betreiber': 'GFM, puis TPF', 'Einsatz': 'rame réversible avec voitures-pilotes 251–256', 'Verbleib': 'démolies en avril 2017' },
  bilder: ['Be 4/4 151 avec la voiture-pilote Bt 256', 'Be 4/4 152 à Montbovon (1995)']
});
uebZug('gfm-gde-101', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['SLM et BBC ont construit la locomotive 101 « Ville de Bulle » ; elle est entrée en service en 1983. Elle a ensuite été vendue au Montreux–Oberland bernois ; l’année est indiquée différemment (2007 ou 2017).'] }, { titel: 'Utilisation et technique', p: ['C’était la seule grande locomotive électrique des GFM à voie métrique. Au MOB, elle circule aujourd’hui comme GDe 4/4 6005.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Compartiment à bagages (lettre D)', 'Pas de compartiment voyageurs'] }],
  typ: 'Locomotive électrique à voie métrique des GFM (aujourd’hui au MOB)',
  text: ['La GDe 4/4 101 «Ville de Bulle» était la seule grande locomotive électrique à voie métrique des GFM.', 'Elle a été vendue au Montreux–Oberland bernois et y circule comme GDe 4/4 6005.'],
  kennzahlen: [['1983', 'construite'], ['SLM / BBC', 'constructeur'], ['6005', 'numéro actuel au MOB'], ['voie métrique', 'écartement']],
  daten: { 'Bauart': 'locomotive électrique', 'Hersteller': 'SLM et BBC', 'Betreiber': 'GFM, aujourd’hui MOB', 'Fahrzeugnummern': '101, au MOB 6005', 'Verbleib': 'vendue au MOB' },
  specNote: 'L’année de la vente est indiquée différemment selon les sources (2007 ou 2017).',
  bilder: ['L’ancienne GDe 4/4 101 comme MOB 6005 près de Saanenmöser (2014)']
});
uebZug('gfm-te-22', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les deux tracteurs 11 et 12 datent de 1913 ; l’équipement électrique venait de MFO (11) et d’Alioth (12). Le 12 a été retiré en 2012.'] }, { titel: 'Utilisation et technique', p: ['Ils manœuvraient sur le réseau à voie métrique des GFM : le Te 2/2 11 à Bulle, le Te 2/2 12 à Montbovon.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux essieux', 'Propulsion électrique par la ligne de contact', 'Pas de compartiment voyageurs'] }],
  typ: 'Tracteurs de manœuvre électriques de 1913 (historique)',
  text: ['Les deux petits tracteurs de manœuvre de 1913 manœuvraient sur le réseau à voie métrique des GFM : le Te 2/2 11 à Bulle, le Te 2/2 12 à Montbovon.', 'Le 12 a été retiré en 2012.'],
  kennzahlen: [['2', 'tracteurs'], ['1913', 'construits'], ['Bulle', 'Te 2/2 11'], ['Montbovon', 'Te 2/2 12']],
  daten: { 'Bauart': 'tracteur de manœuvre électrique', 'Hersteller': 'électricité MFO (11), Alioth (12)', 'Betreiber': 'GFM, puis TPF' },
  specNote: 'Pour le 12, Wikipédia indique une démolition en 2012 ; Commons contient aussi des photos de 2026.',
  bilder: ['Te 2/2 12 à Montbovon', 'Te 2/2 12 vu de côté']
});
uebZug('gfm-te-44', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les 13 et 14 ont été construits en 1901 comme automotrices avec équipement électrique Alioth et transformés en tracteurs de manœuvre en 1927 et 1933. Le 13 a été retiré en 2017.'] }, { titel: 'Utilisation et technique', p: ['Le 13 manœuvrait à Broc-Fabrique, le 14 tirait des trains de travaux.'] }, { titel: 'Équipement et accessibilité', liste: ['Quatre essieux moteurs', 'Propulsion électrique par la ligne de contact', 'Pas de compartiment voyageurs'] }],
  typ: 'Tracteurs de manœuvre transformés à partir d’automotrices (historique)',
  text: ['Les Te 4/4 13 et 14 ont été construits en 1901 comme automotrices et transformés en tracteurs de manœuvre en 1927 et 1933.', 'Le 13 manœuvrait à Broc-Fabrique, le 14 remorquait des trains de travaux. Le 13 a été retiré en 2017.'],
  kennzahlen: [['2', 'tracteurs'], ['1901', 'construits'], ['1927 / 1933', 'transformés'], ['voie métrique', 'écartement']],
  daten: { 'Bauart': 'tracteur de manœuvre électrique', 'Hersteller': 'électricité Alioth', 'Betreiber': 'GFM, puis TPF', 'Einsatz': 'manœuvres à Broc-Fabrique, trains de travaux' },
  bilder: ['Te 4/4 13', 'Te 4/4 14']
});
uebZug('gfm-tm-15', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Schöma et Deutz ont construit le tracteur en 1971 ; il a été transformé en 1981.'] }, { titel: 'Utilisation et technique', p: ['Il tirait des trains de travaux et manœuvrait à Bulle.'] }, { titel: 'Équipement et accessibilité', liste: ['Propulsion diesel, indépendante de la ligne de contact', 'Deux essieux', 'Pas de compartiment voyageurs'] }],
  typ: 'Tracteur diesel pour trains de travaux et manœuvres (historique)',
  text: ['Le petit tracteur diesel Tm 2/2 15 a été construit par Schöma en 1971 et transformé en 1981. Il remorquait des trains de travaux et manœuvrait à Bulle.'],
  kennzahlen: [['1971', 'construit'], ['1981', 'transformé'], ['Schöma', 'constructeur'], ['Bulle', 'lieu d’utilisation']],
  daten: { 'Bauart': 'tracteur diesel à deux essieux', 'Betreiber': 'GFM, puis TPF', 'Einsatz': 'trains de travaux, manœuvres à Bulle' },
  bilder: ['Tm 2/2 15 à Bulle (2005)']
});
uebZug('gfm-abde-24', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les automotrices sont arrivées en 1931 au Fribourg–Morat–Anet (FMA) et ont ensuite appartenu aux GFM. L’ABDe 2/4 155 a été démolie en 2025 ; ses cabines sont allées à ÖV Historique.'] }, { titel: 'Utilisation et technique', p: ['Elles circulaient sur la ligne à voie normale Fribourg–Morat–Anet, d’abord en courant continu. En 1946, elles ont été transformées pour le courant alternatif 15 kV 16,7 Hz.'] }, { titel: 'Équipement et accessibilité', liste: ['Places en 1re et 2e classe (lettres A et B)', 'Compartiment à bagages (lettre D)', 'Accès surélevés avec marches'] }],
  typ: 'Automotrice du chemin de fer Fribourg–Morat–Anet (historique)',
  text: ['Les ABDe 2/4 sont arrivées en 1931 au chemin de fer Fribourg–Morat–Anet, encore pour le courant continu. En 1946, elles ont été converties au courant alternatif.', 'L’ABDe 2/4 155 a été démolie en 2025 ; ses cabines de conduite sont allées à ÖV Historique.'],
  kennzahlen: [['1931', 'livrée'], ['1946', 'convertie au courant alternatif'], ['155', 'conservée en dernier'], ['voie normale', 'écartement']],
  daten: { 'Bauart': 'automotrice électrique', 'Betreiber': 'FMA, puis GFM', 'Stromsystem': 'd’abord courant continu, dès 1946 15 kV 16,7 Hz', 'Verbleib': '155 démolie en 2025, cabines chez ÖV Historique' },
  bilder: ['ABDe 2/4 155']
});
uebZug('gfm-abde-44', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['SIG et BBC ont construit de 1946 à 1948 les automotrices 161–167 ; la 166 était une ABe 4/4. La plupart ont été transformées en 1965. Les 162, 163 et 167 ont été démolies.'] }, { titel: 'Utilisation et technique', p: ['Les automotrices ont modernisé le trafic sur les lignes à voie normale des GFM.'] }, { titel: 'Équipement et accessibilité', liste: ['16 places en 1re et 32 en 2e classe', 'Compartiment à bagages (lettre D), sauf sur la 166', 'Accès surélevés avec marches'] }],
  typ: 'Automotrices à voie normale des GFM (historique)',
  text: ['Les ABDe 4/4 161 à 167 de SIG et BBC ont été construites de 1946 à 1948 et ont modernisé les lignes à voie normale des GFM. La plupart ont été transformées en 1965.', 'Plusieurs automotrices ont depuis été démolies.'],
  kennzahlen: [['1946', 'premières construites'], ['1965', 'transformées'], ['SIG / BBC', 'constructeur'], ['48', 'places (16 + 32)']],
  daten: { 'Bauart': 'automotrice électrique', 'Hersteller': 'SIG et BBC', 'Fahrzeugnummern': '161–167 (166 comme ABe 4/4)', 'Sitzplätze': '16 en 1re, 32 en 2e classe', 'Verbleib': '162, 163 et 167 démolies' },
  bilder: ['ABDe 4/4 162 à Anet', 'ABDe 4/4 167 à Bulle']
});
uebZug('gfm-rbde-567', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les automotrices 171–173 de SIG, SWS et BBC datent de 1983, les 181–182 de SWP, SIG et ABB de 1991. La 173 est venue du RVT en 1992. Elles ne figurent plus dans l’aperçu actuel de la flotte des TPF ; la 171 a encore été photographiée en 2024.'] }, { titel: 'Utilisation et technique', p: ['Les automotrices font partie de la famille des NPZ des chemins de fer privés et circulaient en navettes sur le réseau à voie normale des GFM et des TPF.'] }, { titel: 'Équipement et accessibilité', liste: ['Automotrice pour rames réversibles avec voiture-pilote', 'Compartiment à bagages (lettre D)', 'Accès surélevés dans l’automotrice'] }],
  typ: 'Anciennes rames réversibles régionales des GFM et des TPF',
  text: ['Les automotrices 171 à 173 de 1983 et 181 à 182 de 1991 font partie de la famille des NPZ des chemins de fer privés. La 173 est venue du RVT en 1992.', 'Elles ne figurent plus dans l’aperçu actuel de la flotte des TPF ; la 171 a encore été photographiée en 2024.'],
  kennzahlen: [['5', 'automotrices'], ['1983', 'premières construites'], ['1991', 'deuxième série'], ['voie normale', 'écartement']],
  daten: { 'Bauart': 'automotrice électrique pour rames réversibles', 'Hersteller': 'SIG, SWS, BBC (171–173) ; SWP, SIG, ABB (181–182)', 'Betreiber': 'GFM, puis TPF' },
  bilder: ['Automotrice 182 à Anet (2000)', 'Automotrice 171 (2005)']
});
uebZug('gfm-ee-91', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['SIG et BBC ont construit la petite locomotive de manœuvre en 1960. Elle a ensuite porté le numéro 217 091.'] }, { titel: 'Utilisation et technique', p: ['Elle manœuvrait sur le réseau à voie normale des GFM, par exemple à Bulle.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux essieux moteurs', 'Propulsion électrique par la ligne de contact', 'Pas de compartiment voyageurs'] }],
  typ: 'Locomotive de manœuvre électrique à voie normale (historique)',
  text: ['La petite locomotive de manœuvre Ee 2/2 91 a été construite en 1960 par SIG et BBC. Elle manœuvrait sur le réseau à voie normale des GFM, par exemple à Bulle, et a plus tard porté le numéro 217 091.'],
  kennzahlen: [['1960', 'construite'], ['SIG / BBC', 'constructeur'], ['217 091', 'numéro ultérieur'], ['voie normale', 'écartement']],
  daten: { 'Bauart': 'locomotive de manœuvre électrique', 'Hersteller': 'SIG et BBC', 'Betreiber': 'GFM, puis TPF', 'Fahrzeugnummern': '91 (plus tard 217 091)' },
  bilder: ['Ee 2/2 91 (217 091) à Bulle (2005)']
});
uebZug('gfm-wagen', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Sont conservés la voiture B 235 de 1903 et la voiture-pilote CFt4 273 chez GFM Historique, ainsi que les wagons couverts K 671 et K 672 au chemin de fer-musée Blonay–Chamby. Les sources utilisées n’indiquent pas les constructeurs.'] }, { titel: 'Utilisation et technique', p: ['Les véhicules circulaient sur le réseau à voie métrique de la CEG et des GFM. Aujourd’hui, ils sont confiés à des associations muséales.'] }, { titel: 'Équipement et accessibilité', liste: ['Voiture B 235 de 1903', 'Voiture-pilote CFt4 273 avec compartiment à bagages (lettre F)', 'Wagons couverts K 671 et K 672'] }],
  name: 'Wagons historiques',
  typ: 'Voitures et wagons conservés des GFM',
  text: ['Outre les engins moteurs, des wagons des GFM sont aussi conservés. GFM Historique garde la voiture B 235 de 1903 et la voiture-pilote CFt4 273.', 'Les wagons couverts K 671 et K 672 se trouvent au chemin de fer-musée Blonay–Chamby.'],
  kennzahlen: [['B 235', 'voiture de 1903'], ['CFt4 273', 'voiture-pilote'], ['K 671, K 672', 'wagons marchandises'], ['voie métrique', 'écartement']],
  daten: { 'Bauart': 'voitures, voitures-pilotes et wagons marchandises', 'Betreiber': 'CEG/GFM, aujourd’hui associations de musée', 'Erhalten': 'GFM Historique ; Blonay–Chamby' },
  bilder: ['Wagon couvert K 671 à Vevey (2016)', 'Wagon K 671 à la chocolaterie de Broc']
});

/* ---- 32-bls-neu.js ---- */
/* Français – BLS : locomotives louées, wagons de service, intervention */
uebDict({ 'Schotter- und Kippwagen': 'Wagons à ballast et basculants' });

uebZug('bls-br-185', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les quatre locomotives sont des TRAXX F140 AC de Bombardier Transportation. Elles appartiennent au loueur Alpha Trains et sont immatriculées en Allemagne ; BLS Cargo les loue.'] }, { titel: 'Utilisation et technique', p: ['Homologuées pour l’Allemagne, l’Autriche et la Suisse, elles complètent chez BLS Cargo les Re 485 propres, dont elles sont techniquement très proches.', 'Elles développent jusqu’à 5600 kW et roulent jusqu’à 140 km/h.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Homologation pour l’Allemagne, l’Autriche et la Suisse', 'Immatriculée en Allemagne, propriété d’Alpha Trains'], p: ['La BR 185 est une locomotive marchandises et n’a pas de compartiment voyageurs.'] }],
  typ: 'Locomotive électrique louée à Alpha Trains',
  text: ['En plus de ses propres locomotives, BLS Cargo utilise des locomotives louées immatriculées en Allemagne. Parmi elles figurent quatre TRAXX de la série 185 d’Alpha Trains.', 'Techniquement, elles sont proches parentes des Re 485 du BLS, qui correspondent à la série allemande 185 avec un équipement suisse supplémentaire.'],
  kennzahlen: [['4', 'locomotives louées'], ['140 km/h', 'vitesse maximale'], ['jusqu’à 5600 kW', 'puissance'], ['D, A, CH', 'homologation']],
  daten: { 'Bauart': 'locomotive électrique Bo’Bo’', 'Betreiber': 'BLS Cargo (louée)', 'Leistung': 'jusqu’à 5600 kW', 'Zulassung': 'Allemagne, Autriche, Suisse', 'Anzahl': '4 louées' },
  specNote: 'Les numéros des quatre locomotives louées ne sont pas publiés. La photo montre la 185 525 aux couleurs du BLS en 2009.',
  bilder: ['185 525 aux couleurs du BLS à Fribourg (2009)']
});
uebZug('bls-br-186', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les neuf locomotives sont des TRAXX polycourant F140 MS de Bombardier Transportation. Elles appartiennent au loueur Railpool ; on voit notamment sur des photos les 186 101, 103–105, 108 et 109 avec l’inscription BLS.'] }, { titel: 'Utilisation et technique', p: ['Les locomotives sont homologuées pour l’Allemagne, l’Autriche, la Suisse, l’Italie et les Pays-Bas. Elles remorquent des trains de marchandises sur l’axe Rotterdam–Italie, par exemple le Melzo-Shuttle.', 'Sous courant alternatif, elles développent 5600 kW, sous 1,5 kV continu aux Pays-Bas 4000 kW ; elles roulent jusqu’à 140 km/h.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Locomotive polycourant : 5600 kW sous courant alternatif, 4000 kW sous 1,5 kV continu', 'Homologation pour l’Allemagne, l’Autriche, la Suisse, l’Italie et les Pays-Bas'], p: ['La BR 186 est une locomotive marchandises et n’a pas de compartiment voyageurs.'] }],
  typ: 'Locomotive polycourant louée à Railpool',
  text: ['BLS Cargo loue à Railpool neuf TRAXX polycourant de la série 186. Elles peuvent circuler dans cinq pays, jusqu’aux Pays-Bas.', 'Elles remorquent ainsi des trains de marchandises sur l’axe Rotterdam–Italie, par exemple le Melzo-Shuttle.'],
  kennzahlen: [['9', 'locomotives louées'], ['140 km/h', 'vitesse maximale'], ['5600 kW', 'puissance'], ['5', 'pays']],
  daten: { 'Bauart': 'locomotive électrique polycourant Bo’Bo’', 'Betreiber': 'BLS Cargo (louée)', 'Fahrzeugnummern': 'entre autres 186 101, 103–105, 108, 109 (attestées par photo)', 'Leistung': '5600 kW (4000 kW sous 1,5 kV continu)', 'Zulassung': 'Allemagne, Autriche, Suisse, Italie, Pays-Bas', 'Anzahl': '9 louées' },
  specNote: 'Les TRAXX polycourant propres à BLS Cargo s’appellent Re 486 et ont leur propre page.',
  bilder: ['186 101 de BLS Cargo', '186 109 avec le Melzo-Shuttle près d’Elten (NL)']
});
uebZug('bls-br-187', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les trois locomotives appartiennent à la troisième génération TRAXX (AC3) de Bombardier Transportation. BLS Cargo les loue à long terme au loueur Railpool ; la 187 004 apparaît sur des photos avec l’inscription BLS.'] }, { titel: 'Utilisation et technique', p: ['Homologuées pour l’Allemagne, l’Autriche et la Suisse, elles remorquent des trains de marchandises de BLS Cargo.', 'Elles développent 5600 kW et pèsent 84 t. La série 187 existe aussi avec un petit moteur diesel pour le «dernier kilomètre» sans caténaire ; on ne sait pas publiquement si les trois locomotives du BLS en sont équipées.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Homologation pour l’Allemagne, l’Autriche et la Suisse', 'La présence d’un moteur diesel pour le « dernier kilomètre » n’est pas établie'], p: ['La BR 187 est une locomotive marchandises et n’a pas de compartiment voyageurs.'] }],
  typ: 'Locomotive électrique louée à Railpool',
  text: ['BLS Cargo loue à long terme trois locomotives de la série 187 à Railpool. Elles appartiennent à la troisième génération TRAXX.', 'La série 187 existe aussi avec un petit moteur diesel pour le «dernier kilomètre» sans caténaire. On ne sait pas publiquement si les trois locomotives du BLS en sont équipées.'],
  kennzahlen: [['3', 'locomotives louées'], ['5600 kW', 'puissance'], ['84 t', 'poids'], ['D, A, CH', 'homologation']],
  daten: { 'Bauart': 'locomotive électrique Bo’Bo’', 'Betreiber': 'BLS Cargo (louée)', 'Höchstgeschwindigkeit': '140 ou 160 km/h selon la version', 'Zulassung': 'Allemagne, Autriche, Suisse', 'Anzahl': '3 louées' },
  bilder: ['187 004 de BLS Cargo']
});
uebZug('bls-br-193', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les locomotives sont des Vectron de Siemens Mobility. Selon la liste de la flotte, BLS Cargo loue six locomotives et quatre autres, qui circulent en partie aux couleurs de l’opérateur combiné Hupac (notamment 193 494–496). Des photos montrent en outre les 193 711, 713 et 716.'] }, { titel: 'Utilisation et technique', p: ['Homologuées pour l’Allemagne, l’Autriche, la Suisse, l’Italie et les Pays-Bas, elles circulent surtout en transit entre les ports de la mer du Nord et l’Italie.', 'Locomotives polycourant, elles développent jusqu’à 6400 kW.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Locomotive polycourant', 'Homologation pour l’Allemagne, l’Autriche, la Suisse, l’Italie et les Pays-Bas', 'En partie aux couleurs de Hupac'], p: ['La BR 193 est une locomotive marchandises et n’a pas de compartiment voyageurs.'] }],
  typ: 'Siemens Vectron louées pour BLS Cargo',
  text: ['En plus de ses propres Re 475, BLS Cargo loue des locomotives Vectron de la série 193. Selon la liste de la flotte, il s’agit de six locomotives et de quatre autres, qui circulent en partie aux couleurs de l’opérateur combiné Hupac.', 'Homologuées jusqu’aux Pays-Bas et en Italie, elles circulent surtout en transit.'],
  kennzahlen: [['10', 'locomotives louées'], ['jusqu’à 6400 kW', 'puissance'], ['5', 'pays'], ['Siemens', 'constructeur']],
  daten: { 'Bauart': 'locomotive électrique polycourant Bo’Bo’', 'Eigentümer': 'divers loueurs, dont BRCE', 'Betreiber': 'BLS Cargo (louée)', 'Fahrzeugnummern': 'entre autres 193 494–496 (Hupac), 193 711, 713, 716 (attestées par photo)', 'Leistung': 'jusqu’à 6400 kW', 'Zulassung': 'Allemagne, Autriche, Suisse, Italie, Pays-Bas', 'Anzahl': '6 + 4 louées' },
  specNote: 'Les Vectron propres à BLS Cargo s’appellent Re 475 et ont leur propre page.',
  bilder: ['193 716 de BLS Cargo', '193 496 aux couleurs de Hupac avec le Melzo-Shuttle près d’Angeren (NL)']
});
uebZug('bls-fccnpps', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['En 2012, BLS Netz AG a commandé au constructeur LEGIOS 20 wagons à ballast à deux essieux numérotés 21 85 64 39 720–739.'] }, { titel: 'Utilisation et technique', p: ['Les wagons servent surtout aux transports propres du BLS vers les chantiers. Comme wagons de la catégorie F, ils se vident vers le bas par gravité.'] }, { titel: 'Équipement et accessibilité', liste: ['Deux essieux', 'Déchargement vers le bas par gravité', 'Pas de propulsion propre, pas de compartiment voyageurs'] }],
  typ: 'Wagons à ballast à deux essieux de BLS Netz SA',
  text: ['En 2012, BLS Netz SA a commandé 20 wagons à ballast à deux essieux au constructeur LEGIOS. Ils servent surtout aux transports propres vers les chantiers.', 'Comme wagons de la catégorie F, ils se déchargent par gravité vers le bas.'],
  kennzahlen: [['20', 'wagons'], ['2', 'essieux'], ['2012', 'acquisition'], ['LEGIOS', 'constructeur']],
  daten: { 'Bauart': 'wagon à ballast à deux essieux', 'Betreiber': 'BLS Netz SA' },
  bilder: ['Fccnpps 722 à Spiez (2012)']
});
uebZug('bls-faccnpps', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['En 2023, BLS Netz AG a complété ses wagons à ballast par 20 wagons à quatre essieux de Waggonbau Niesky, numérotés 31 85 6937 700–719.'] }, { titel: 'Utilisation et technique', p: ['Les wagons apportent le ballast aux chantiers du BLS. Ils sont construits comme les Fccnpps à deux essieux de 2012 et se vident vers le bas par gravité.'] }, { titel: 'Équipement et accessibilité', liste: ['Quatre essieux', 'Déchargement vers le bas par gravité', 'Pas de propulsion propre, pas de compartiment voyageurs'] }],
  typ: 'Wagons à ballast à quatre essieux de BLS Netz SA',
  text: ['En 2023, BLS Netz SA a complété ses wagons à ballast par 20 wagons à quatre essieux. Ils sont construits de manière semblable aux Fccnpps à deux essieux de 2012.', 'Ils ont été fabriqués à l’usine de Niesky, en Allemagne.'],
  kennzahlen: [['20', 'wagons'], ['4', 'essieux'], ['2023', 'acquisition'], ['Niesky', 'constructeur']],
  daten: { 'Bauart': 'wagon à ballast à quatre essieux', 'Betreiber': 'BLS Netz SA' }
});
uebZug('bls-xas', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Sept wagons basculants Xas ont été construits en 1990. Ils sont ensuite passés à BLS Netz AG et ont reçu les numéros 99 85 93 53 770–776 au lieu de 80 63 98 62 770–776.'] }, { titel: 'Utilisation et technique', p: ['Les wagons transportent les déblais des chantiers. Selon le registre, ils figurent comme wagons de service ou comme wagons marchandises.'] }, { titel: 'Équipement et accessibilité', liste: ['Caisse basculante', 'Pas de propulsion propre, pas de compartiment voyageurs'] }],
  typ: 'Anciens wagons basculants pour déblais',
  text: ['Les sept wagons basculants Xas ont été construits en 1990 et transportent les déblais des chantiers. Ils sont ensuite passés à BLS Netz SA et ont reçu de nouveaux numéros.', 'Selon les registres, ils sont classés comme wagons de service ou comme wagons de marchandises.'],
  kennzahlen: [['7', 'wagons'], ['1990', 'construits'], ['770–776', 'numéros'], ['déblais', 'chargement']],
  daten: { 'Bauart': 'wagon basculant', 'Betreiber': 'BLS Netz SA', 'Fahrzeugnummern': '80 63 98 62 770–776, plus tard 99 85 93 53 770–776' },
  bilder: ['Xas 776 à Heustrich-Emdthal (2007)']
});
uebZug('bls-fans-u', {
  typ: 'Anciens wagons basculants pour déblais',
  text: ['Neuf wagons basculants Fans-u de 1990 transportent les déblais des chantiers pour BLS Netz SA.', 'BLS Cargo possédait autrefois d’autres Fans-u pour les déblais des chantiers NLFA. Ces wagons 510–530 ont été vendus en 2010.'],
  kennzahlen: [['9', 'wagons'], ['1990', 'construits'], ['500–508', 'numéros'], ['déblais', 'chargement']],
  daten: { 'Bauart': 'wagon basculant à quatre essieux', 'Betreiber': 'BLS Netz SA', 'Fahrzeugnummern': '31 63 6770 500–508, plus tard 31 85 6770 500–508' },
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Les neuf wagons basculants ont été construits en 1990. Chez BLS Netz AG, ils portent aujourd’hui les numéros 31 85 6770 500–508, auparavant 31 63 6770 500–508.'] }, { titel: 'Utilisation et technique', p: ['Les wagons transportent les déblais des chantiers du BLS.'] }, { titel: 'Équipement et accessibilité', liste: ['Quatre essieux', 'Caisse basculante', 'Pas de propulsion propre, pas de compartiment voyageurs'] }, { titel: 'Les wagons NLFA de BLS Cargo', p: ['Les wagons 510–529 (construits en 2000) et 530 (1995) appartenaient à BLS Cargo et évacuaient les déblais des chantiers NLFA. En avril 2010, ils ont été vendus à RTS, puis transmis à MBC en 2014.'] }],
  bilder: ['Fans-u 505 à Heustrich-Emdthal (2007)']
});
uebZug('bls-schleiffahrzeug', {
  name: 'Véhicule de meulage', beiname: 'rail-route',
  typ: 'Véhicule rail-route pour meuler les rails et les aiguillages',
  text: ['Le véhicule de meulage est le plus récent véhicule d’entretien du BLS. Il circule sur la route et sur la voie. Des meules placées en dessous meulent les rails et les aiguillages.', 'Une équipe du BLS peut ainsi réagir rapidement aux défauts de rail et meuler préventivement les aiguillages importants, en plus des grands trains de meulage.'],
  kennzahlen: [['route + voie', 'rail-route'], ['meules', 'outil'], ['2025', 'première intervention'], ['Spiez', 'premier lieu d’intervention']],
  daten: { 'Bauart': 'véhicule rail-route de meulage des rails', 'Betreiber': 'BLS Netz SA', 'Einsatz': 'meulage des rails et des aiguillages' },
  specNote: 'Le BLS a reçu le véhicule fin 2024 ; la première intervention réelle était prévue début 2025 à Spiez. Le BLS ne cite ni constructeur ni données techniques.',
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Le BLS a repris le véhicule fin 2024 ; la première intervention réelle était prévue début 2025 à Spiez. Le BLS n’indique ni le constructeur ni les données techniques.'] }, { titel: 'Utilisation et technique', p: ['Une équipe propre du BLS peut ainsi réagir rapidement aux défauts des rails et meuler préventivement les aiguillages importants, en plus des grands trains de meulage.'] }, { titel: 'Équipement et accessibilité', liste: ['Circule sur la route et sur la voie', 'Meules sous le véhicule pour les rails et les aiguillages', 'Pas de compartiment voyageurs'] }, { titel: 'Pourquoi meuler ?', p: ['La charge des roues crée sur les rails de fines fissures et des déformations. Le meulage rétablit le profil d’origine du rail. Les rails et les aiguillages durent ainsi plus longtemps, et les trains roulent plus calmement.'] }]
});
uebZug('bls-hilfswagen', {
  abschnitte: [{ titel: 'Constructeur et constitution de la flotte', p: ['Le wagon de secours est entré en service en 2011 et appartient au service d’intervention de BLS AG. Il se compose du wagon de secours proprement dit et d’un wagon complémentaire. Le BLS n’indique pas de constructeur.'] }, { titel: 'Utilisation et technique', p: ['Il intervient lors de déraillements et d’autres dérangements pour relever des véhicules et apporter une aide technique. Ensemble, les deux wagons mesurent 46 m et pèsent 101,5 t.'] }, { titel: 'Équipement et accessibilité', liste: ['Équipement de relevage et d’aide technique', 'Wagon complémentaire', 'Pas de compartiment voyageurs'] }],
  name: 'Wagon de secours',
  typ: 'Wagon de secours avec wagon complémentaire pour le relevage et l’aide technique',
  text: ['Le wagon de secours fait partie du service d’intervention, le corps de sapeurs-pompiers d’entreprise du BLS. Il intervient lors de déraillements et d’autres perturbations pour relever des véhicules et apporter une aide technique.', 'Il se compose du wagon de secours proprement dit et d’un wagon complémentaire.'],
  kennzahlen: [['2011', 'mise en service'], ['46 m', 'longueur'], ['101,5 t', 'poids'], ['2', 'wagons']],
  daten: { 'Bauart': 'wagon de secours avec wagon complémentaire', 'Betreiber': 'BLS SA, service d’intervention', 'Einsatz': 'relevage, intervention technique' }
});

/* ---- 33-einsatz-bls-tpf.js ---- */
/* Français – cartes «Où circule-t-il ?» pour le BLS et les TPF */
uebDict({
  'S-Bahn Bern': 'RER Berne',
  'Im Transitverkehr von den Nordseehäfen Rotterdam und Antwerpen über Deutschland und die Schweiz bis Norditalien, durch den Lötschberg-Simplon und den Gotthard.': 'En transit depuis les ports de la mer du Nord, Rotterdam et Anvers, à travers l’Allemagne et la Suisse jusqu’en Italie du Nord, par le Lötschberg-Simplon et le Gothard.'
});
uebEinsatz({
  'bls-rabe-528': 'Sur les RER de Berne et de Lucerne, en RegioExpress Berne–Spiez–Zweisimmen et par la ligne de faîte du Lötschberg jusqu’à Brigue et Domodossola, ainsi qu’en InterRegio Berne–Neuchâtel–La Chaux-de-Fonds.',
  'bls-rabe-515': 'Sur le RER bernois (S1 Fribourg–Berne–Thoune, S3/S31 Bienne–Berne–Belp) et en InterRegio Berne–Berthoud–Olten et Berne–Bienne.',
  'bls-rabe-535': 'Dans l’Oberland bernois (Zweisimmen–Spiez, Spiez–Interlaken Ost, Spiez–Frutigen) et sur le RER bernois entre Thoune, Berne, Berthoud et Soleure.',
  'bls-rabe-525': 'Sur les RER de Berne et de Lucerne, notamment Berne–Neuchâtel, Berne–Langnau, Lyss–Büren an der Aare et Lucerne–Willisau, ainsi qu’en RegioExpress Domodossola–Brigue–Viège.',
  'bls-re-465': 'En tête du GoldenPass Express entre Interlaken Ost et Zweisimmen, des trains de chargement des autos au Lötschberg et au Simplon ainsi que de trains de marchandises sur l’axe Lötschberg-Simplon.',
  'bls-re-475': 'En trafic marchandises à travers la Suisse sur les axes Lötschberg-Simplon et Gothard, à l’international jusqu’aux Pays-Bas, en Belgique et en Italie.',
  'bls-re-485': 'En trafic marchandises en Suisse et vers l’Allemagne, sur les axes Lötschberg-Simplon et Gothard.',
  'bls-re-486': 'En transit marchandises à travers les Alpes, aussi avec la route roulante ; homologation pour la Suisse, l’Allemagne, l’Italie et l’Autriche.',
  'bls-br-185': 'En trafic marchandises de BLS Cargo en Suisse, en Allemagne et en Autriche.',
  'bls-br-186': 'En transit marchandises de BLS Cargo, aussi sur l’axe Rotterdam–Italie avec le Melzo-Shuttle.',
  'bls-br-187': 'En trafic marchandises de BLS Cargo en Suisse, en Allemagne et en Autriche.',
  'bls-br-193': 'En transit marchandises de BLS Cargo, jusqu’aux Pays-Bas et en Italie.',
  'tpf-rabe-527': 'En RegioExpress Berne–Fribourg–Romont–Bulle–Broc et sur le RER Fribourg entre Fribourg, Morat et Neuchâtel.',
  'tpf-rbde-560': 'Sur le RER Fribourg : RegioExpress Berne–Fribourg–Bulle–Broc et S20/S21 Fribourg–Morat–Anet–Neuchâtel.',
  'tpf-abe-4-12': 'Sur le réseau à voie métrique des TPF : S50 Palézieux–Châtel-St-Denis–Bulle–Montbovon et S51 jusqu’à Gruyères. La voie métrique est tracée en pointillé et de manière simplifiée.',
  'tpf-be-4-4-120': 'Sur le réseau à voie métrique des TPF entre Palézieux, Bulle, Gruyères et Montbovon. La voie métrique est tracée en pointillé et de manière simplifiée.',
  'tpf-funiculaire': 'Dans la ville de Fribourg, entre la basse ville (Neuveville) et St-Pierre.'
});

/* ---- 34-sob.js ---- */
/* Français – SOB (Südostbahn) */
uebDict({
  'Schweizerische Südostbahn': 'Chemin de fer du Sud-Est suisse',
  'Klassiker von SBB, BLS, TPF, SOB und transN, die heute nicht mehr im Alltag fahren. Viele sind bei SBB Historic, der BLS-Stiftung, GFM Historique, RVT-Historique, in Vereinen oder in Museen erhalten.': 'Classiques des CFF, du BLS, des TPF, du SOB et de transN qui ne circulent plus au quotidien. Beaucoup sont conservés par CFF Historic, la Fondation BLS, GFM Historique, RVT-Historique, des associations ou dans des musées.',
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

/* ---- 35-einsatz-bls-tpf-alt.js ---- */
/* Français – cartes « Où circule-t-il ? » pour les anciens véhicules BLS et TPF */
uebEinsatz({
  'bls-re-425': 'Autrefois en tête des trains rapides Berne–Brigue, des trains marchandises Bâle–Domodossola et du transport des autos Kandersteg–Goppenstein.',
  'bls-am-843': 'Sur le réseau du BLS, pour les trains de travaux, les manœuvres et le service d’intervention.',
  'bls-fccnpps': 'Pour les chantiers et l’entretien sur le réseau du BLS, par exemple au Lötschberg, dans le Simmental, dans le Gürbetal et sur Berne–Neuchâtel.',
  'bls-faccnpps': 'Pour les chantiers et l’entretien sur le réseau du BLS, par exemple au Lötschberg, dans le Simmental, dans le Gürbetal et sur Berne–Neuchâtel.',
  'bls-xas': 'Pour les chantiers et l’entretien sur le réseau du BLS, par exemple au Lötschberg, dans le Simmental, dans le Gürbetal et sur Berne–Neuchâtel.',
  'bls-fans-u': 'Pour les chantiers et l’entretien sur le réseau du BLS, par exemple au Lötschberg, dans le Simmental, dans le Gürbetal et sur Berne–Neuchâtel.',
  'bls-schleiffahrzeug': 'Sur le réseau du BLS ; la première intervention réelle était prévue à Spiez.',
  'bls-rangier': 'Dans les gares et ateliers du réseau du BLS.',
  'bls-lrz': 'Depuis le centre d’intervention de Frutigen, notamment pour le tunnel de base du Lötschberg et la ligne de faîte.',
  'bls-hilfswagen': 'Pour le relevage et l’aide technique sur le réseau du BLS.',
  'bls-ae-4-4': 'Autrefois en tête de trains voyageurs et marchandises sur la ligne de faîte du Lötschberg.',
  'bls-ae-6-8': 'Autrefois en tête de trains lourds au Lötschberg, dès 1939 aussi de trains rapides en plaine.',
  'bls-ae-8-8': 'Autrefois en tête de trains lourds au Lötschberg, en dernier aussi de trains de déblais du tunnel de base du Lötschberg.',
  'bls-be-5-7': 'Autrefois première locomotive électrique du Lötschberg, en tête de trains rapides et marchandises.',
  'bls-ce-6-6': 'Autrefois en tête de trains marchandises, par exemple entre Thoune et Interlaken, dès 1928 sur le Berne–Neuchâtel.',
  'bls-ce-4-6': 'Autrefois sur des lignes secondaires du groupe BLS, par exemple Spiez–Erlenbach–Zweisimmen.',
  'bls-ce-4-4': 'Autrefois sur les lignes du GBS : Berne–Belp–Thoune et Berne–Schwarzenburg.',
  'bls-bcfe-4-6': 'Autrefois dans le trafic voyageurs du groupe BLS, par exemple sur le Berne–Neuchâtel, auquel appartenait la 736.',
  'bls-be-4-4-761': 'Autrefois sur le Berne–Neuchâtel, aussi en tête de trains internationaux Berne–Paris ; aujourd’hui pour des courses spéciales.',
  'bls-ce-2-4': 'Autrefois au groupe BLS ; les lignes exactes ne sont pas documentées.',
  'bls-abde-4-8': 'Autrefois en trafic régional, par exemple dans le Simmental, entre Spiez et Interlaken et dans le Gürbetal. La rame conservée se trouve à Kerzers-Kallnach.',
  'bls-rbde-565': 'Autrefois dans le trafic régional et S-Bahn du BLS, notamment dans le S-Bahn de Berne.',
  'bls-rbde-566': 'Autrefois notamment sur Spiez–Frutigen, Brigue–Goppenstein, dans le S-Bahn de Berne et entre Thoune et Soleure.',
  'bls-rabe-526': 'Au BLS en trafic régional ; dès 2013 aux CFF dans le Jura au départ de Bienne, dès 2018 chez Thurbo.',
  'bls-ew-iii': 'En dernier surtout comme RegioExpress Berne–Neuchâtel.',
  'bls-re-420': 'En dernier en tête des voitures de la GoldenPass Line entre Interlaken Ost et Zweisimmen.',
  'tpf-tm-87': 'Sur le réseau à voie normale des TPF, par exemple Romont–Bulle–Broc et Fribourg–Morat–Anet.',
  'tpf-tmf-17': 'Sur le réseau à voie métrique des TPF entre Palézieux, Bulle, Gruyères et Montbovon. La voie métrique est tracée en pointillé et simplifiée.',
  'tpf-gem-18': 'Sur le réseau à voie métrique des TPF entre Palézieux, Bulle, Gruyères et Montbovon. La voie métrique est tracée en pointillé et simplifiée.',
  'tpf-x-925': 'Sur le réseau à voie métrique des TPF ; avec le wagon porteur Sgjs X113, la grue travaille aussi sur le réseau à voie normale. La voie métrique est tracée en pointillé.',
  'tpf-retrozug': 'Pour des courses spéciales sur le réseau à voie métrique des TPF. La voie métrique est tracée en pointillé et simplifiée.',
  'gfm-be-111': 'Autrefois sur le réseau à voie métrique de la CEG et des GFM en Gruyère. La voie métrique est tracée en pointillé et simplifiée.',
  'gfm-be-115': 'Autrefois sur le réseau à voie métrique des GFM et des TPF. La voie métrique est tracée en pointillé et simplifiée.',
  'gfm-be-131': 'Autrefois sur le réseau à voie métrique des GFM. La voie métrique est tracée en pointillé et simplifiée.',
  'gfm-bde-141': 'Autrefois sur le réseau à voie métrique des GFM, d’abord en tête de trains de gravier. La voie métrique est tracée en pointillé et simplifiée.',
  'gfm-be-151': 'Autrefois en navette sur le réseau à voie métrique des GFM et des TPF. La voie métrique est tracée en pointillé et simplifiée.',
  'gfm-gde-101': 'Autrefois sur le réseau à voie métrique des GFM ; aujourd’hui au MOB entre Montreux et Zweisimmen. La voie métrique est tracée en pointillé et simplifiée.',
  'gfm-te-22': 'Autrefois en manœuvre sur le réseau à voie métrique des GFM : le 11 à Bulle, le 12 à Montbovon.',
  'gfm-te-44': 'Autrefois en manœuvre à Broc-Fabrique et en tête de trains de travaux sur le réseau à voie métrique des GFM.',
  'gfm-tm-15': 'Autrefois en tête de trains de travaux sur le réseau à voie métrique des GFM et en manœuvre à Bulle.',
  'gfm-abde-24': 'Autrefois sur la ligne à voie normale Fribourg–Morat–Anet.',
  'gfm-abde-44': 'Autrefois sur les lignes à voie normale des GFM.',
  'gfm-rbde-567': 'Autrefois en navettes sur le réseau à voie normale des GFM et des TPF.',
  'gfm-ee-91': 'Autrefois en manœuvre sur le réseau à voie normale des GFM, par exemple à Bulle.',
  'gfm-wagen': 'Autrefois sur le réseau à voie métrique de la CEG et des GFM. La voie métrique est tracée en pointillé et simplifiée.'
});

/* ---- 36-transn.js ---- */
/* Français – transN (Transports Publics Neuchâtelois) */
uebDict({
  'Transports Publics Neuchâtelois': 'Transports Publics Neuchâtelois',
  'Breite': 'Largeur', 'Bezeichnung bei transN': 'Désignation chez transN', 'transN': 'transN', 'transN, früher TRN': 'transN, autrefois TRN',
  'transN, früher Trogenerbahn und Appenzeller Bahnen': 'transN, autrefois Trogenerbahn et Appenzeller Bahnen', 'transN, früher RdB und CMN': 'transN, autrefois RdB et CMN',
  '600 V Gleichstrom': '600 V continu', '1500 V Gleichstrom': '1500 V continu', '15 kV 16,7 Hz': '15 kV 16,7 Hz'
});

uebZug('trn-rabe-523', {
  typ: 'Stadler FLIRT à quatre caisses pour Neuchâtel et l’Arc jurassien',
  text: ['Les quatre FLIRT RABe 523 sont les trains à voie normale les plus récents de transN. Ils circulent sur les lignes Neuchâtel–Buttes et Neuchâtel–La Chaux-de-Fonds–Le Locle.', 'Avec les trois RABe 527 plus anciens, transN possède sept FLIRT.'],
  kennzahlen: [['4', 'rames (074–077)'], ['160 km/h', 'vitesse maximale'], ['149', 'places assises'], ['2017', 'mise en service']],
  daten: { 'Bauart': 'automotrice électrique à plancher surbaissé, 4 caisses', 'Länge': '74 m', 'Breite': '2,88 m', 'Gewicht': '127 t à vide', 'Sitzplätze': '24 en 1re, 125 en 2e classe', 'Anzahl': '4 rames' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler a livré à transN quatre FLIRT à quatre caisses de la série RABe 523, numérotés 523 074–077 ; transN indique l’année 2017. Avec les trois RABe 527, transN compte sept FLIRT dans le trafic voyageurs.'] },
      { titel: 'Utilisation et technique', p: ['Les rames circulent sur les lignes transN R21 Neuchâtel–Buttes et R23 Neuchâtel–La Chaux-de-Fonds–Le Locle. Elles sont entretenues notamment au dépôt de Fleurier.', 'Une rame mesure 74 m de long et 2,88 m de large, pèse 127 t, développe 2600 kW et roule jusqu’à 160 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['149 places assises : 24 en 1re et 125 en 2e classe', 'Accès à plancher surbaissé, comme sur tous les FLIRT'],
        p: ['transN ne publie pas d’autres détails sur sa page de flotte, par exemple sur les places pour fauteuils roulants ou les WC.'] }
    ],
  bilder: ['RABe 523 074 en RegioExpress pour Le Locle à La Chaux-de-Fonds (2018)', 'RABe 523 entre Le Crêt-du-Locle et Le Locle (2018)', 'RABe 523 076 (2019)']
});
uebZug('trn-rabe-527', {
  typ: 'Stadler FLIRT à quatre caisses de la première série transN',
  text: ['Les trois RABe 527 forment la série FLIRT la plus ancienne de transN. Ils sont arrivés de 2007 à 2009 aux Transports Régionaux Neuchâtelois (TRN), qui font aujourd’hui partie de transN.', 'Ils circulent avec les RABe 523 plus récents.'],
  kennzahlen: [['3', 'rames (331–333)'], ['160 km/h', 'vitesse maximale'], ['184', 'places assises'], ['2007', 'mise en service']],
  daten: { 'Bauart': 'automotrice électrique à plancher surbaissé, 4 caisses', 'Länge': '74 m', 'Breite': '2,88 m', 'Gewicht': '120 t à vide', 'Sitzplätze': '24 en 1re, 160 en 2e classe', 'Anzahl': '3 rames' },
  specNote: 'transN indique les années 2007–2009. À ne pas confondre avec les RABe 527 des TPF ou des CFF.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler a livré les trois rames de 2007 à 2009, alors pour les TRN. Depuis la fusion de 2012, elles appartiennent à transN. Des photos attestent les numéros 527 331–333.'] },
      { titel: 'Utilisation et technique', p: ['Comme les RABe 523, les rames circulent sur les lignes R21 Neuchâtel–Buttes et R23 Neuchâtel–La Chaux-de-Fonds–Le Locle.', 'Une rame mesure 74 m de long et 2,88 m de large, pèse 120 t, développe 2600 kW et roule jusqu’à 160 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['184 places assises : 24 en 1re et 160 en 2e classe', 'Accès à plancher surbaissé'],
        p: ['transN ne publie pas d’autres détails sur l’équipement sur sa page de flotte.'] }
    ],
  bilder: ['RABe 527 331 au Locle (2016)', 'RABe 527 331 à La Chaux-de-Fonds (2024)', 'RABe 527 331 à La Chaux-de-Fonds (2016)']
});
uebZug('trn-be-4-8', {
  typ: 'Automotrice articulée Stadler à trois caisses du Littorail (ex Trogenerbahn)',
  text: ['Sur la ligne du Littorail de Neuchâtel à Boudry circulent cinq automotrices articulées Stadler à trois caisses. Elles viennent de la Trogenerbahn près de Saint-Gall.', 'transN les appelle « GTW 4/8 » ; historiquement, ce sont des Be 4/8.'],
  kennzahlen: [['5', 'rames (031–035)'], ['80 km/h', 'vitesse maximale'], ['259', 'places au total'], ['2019', 'chez transN']],
  daten: { 'Bauart': 'automotrice articulée à trois caisses avec parties à plancher surbaissé', 'Länge': '36,3 m', 'Breite': '2,40 m', 'Gewicht': '47,3 t à vide', 'Sitzplätze': '259 places au total', 'Anzahl': '5 rames', 'In Betrieb seit': '2004 (chez transN depuis 2019)' },
  specNote: 'Les valeurs techniques sont les données actuelles de transN ; les anciennes fiches de la Trogenerbahn diffèrent en partie. Les 259 places comprennent les places assises et debout.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler a construit les cinq rames pour la ligne Saint-Gall–Trogen : 31 et 32 en 2004, 33 à 35 en 2008. Elles ont ensuite circulé aux Appenzeller Bahnen.', 'transN a acheté les cinq rames en 2018 pour environ 8 millions de francs. La première, la 032, est arrivée à Neuchâtel le 9 avril 2019.'] },
      { titel: 'Utilisation et technique', p: ['Les rames circulent sur la ligne du Littorail R15 de Neuchâtel Place Pury à Boudry. Elles y ont remplacé les automotrices Be 4/4 501–506 de 1981 et 1988.', 'Une rame mesure 36,3 m, pèse 47,3 t, développe 432 kW et roule jusqu’à 80 km/h. La ligne de contact est alimentée en 600 V continu.'] },
      { titel: 'Équipement et accessibilité', liste: ['Automotrice articulée à trois caisses avec parties à plancher surbaissé', '259 places au total, assises et debout'],
        p: ['transN ne donne pas d’indication sur les places pour fauteuils roulants ou d’autres équipements sur sa page de flotte.'] }
    ],
  bilder: ['Be 4/8 033 à l’arrivée à Boudry (2021)', 'Be 4/8 034 à Boudry Littorail (2025)', 'Be 4/8 035, ex Trogenerbahn (2021)', 'Be 4/8 035 à Neuchâtel Place Pury (2025)']
});
uebZug('trn-abe-4-8', {
  typ: 'Automotrice Stadler à deux caisses pour La Chaux-de-Fonds–Les Ponts-de-Martel',
  text: ['Depuis 2024, deux nouvelles automotrices Stadler circulent entre La Chaux-de-Fonds et Les Ponts-de-Martel. Elles portent les numéros 9 et 10.', 'Elles ont remplacé les anciennes automotrices à plancher haut et offrent un accès à plancher surbaissé.'],
  kennzahlen: [['2', 'rames (9, 10)'], ['80 km/h', 'vitesse maximale'], ['237', 'places au total'], ['2024', 'mise en service']],
  daten: { 'Bauart': 'automotrice électrique à deux caisses', 'Fahrzeugnummern': '9 et 10', 'Länge': '39 m', 'Breite': '2,65 m', 'Gewicht': '67,1 t à vide', 'Sitzplätze': '237 places au total', 'Anzahl': '2 rames' },
  specNote: 'Une première fiche de projet indiquait 39,30 m et 55 t. Ce sont les valeurs actuelles de transN qui s’appliquent ici.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler a construit les deux rames 9 et 10 ; elles sont entrées en service en 2024. Elles ont remplacé les automotrices BDe 4/4 6 et 7 de 1991 et 8 de 1996, qui avaient des accès hauts.'] },
      { titel: 'Utilisation et technique', p: ['Les rames circulent sur la R22 La Chaux-de-Fonds–Les Ponts-de-Martel. La ligne de contact est alimentée en 1500 V continu.', 'Une rame mesure 39 m de long et 2,65 m de large, pèse 67,1 t, développe 1600 kW et roule jusqu’à 80 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Accès à plancher surbaissé', '237 places au total, assises et debout', 'Deux caisses'],
        p: ['Grâce à l’accès à plancher surbaissé, la ligne est bien plus accessible qu’avec les anciennes automotrices à plancher haut.'] }
    ],
  bilder: ['ABe 4/8 9 (2024)', 'ABe 4/8 10 à La Chaux-de-Fonds (2024)']
});
uebZug('trn-bde-4-4', {
  beiname: '3 et 5',
  typ: 'Automotrices de 1950 pour Le Locle–Les Brenets',
  text: ['Les deux automotrices de 1950 circulent sur la courte ligne du Locle aux Brenets. Elles ont été modernisées dans les années 1980.', 'Selon une décision de fin 2023, le chemin de fer continuera au moins jusqu’en 2031.'],
  kennzahlen: [['2', 'automotrices (3, 5)'], ['60 km/h', 'vitesse maximale'], ['146', 'places au total'], ['1950', 'construction']],
  daten: { 'Bauart': 'automotrice électrique avec compartiment à bagages', 'Fahrzeugnummern': '3 et 5', 'Länge': '16,6 m', 'Breite': '2,68 m', 'Gewicht': '24 t à vide', 'Sitzplätze': '42 places assises, 146 places au total' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Reggiane, en Italie, a construit les automotrices en 1950, avec un équipement de TIBB et SAAS. Ramseier & Jenzer, à Bienne, a modernisé la 3 en 1985/86 et la 5 en 1986/87. transN exploite aujourd’hui ces deux automotrices.'] },
      { titel: 'Utilisation et technique', p: ['Les automotrices circulent sur la R24, la ligne d’un peu plus de 4 km entre Le Locle et Les Brenets. En 2020, le canton et les communes prévoyaient de remplacer le train par un bus dès 2025 ; fin 2023, il a été décidé que les trains circuleraient au moins jusqu’en 2031.', 'Une automotrice mesure 16,6 m, pèse 24 t, développe 480 kW et roule jusqu’à 60 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['146 places au total, assises et debout', 'Compartiment à bagages (lettre D)', 'Accès hauts avec marches'] }
    ],
  bilder: ['BDe 4/4 5 sortant du tunnel des Petits-Monts près du Locle (2020)', 'BDe 4/4 5 aux Brenets (2018)', 'BDe 4/4 5 des CMN aux Brenets (1998)']
});
uebZug('trn-tm-44-normal', {
  beiname: '235 077 voie normale',
  typ: 'Tracteur de travaux diesel-électrique Stadler',
  text: ['transN possède deux tracteurs de travaux modernes Tm 4/4 de Stadler, l’un pour la voie normale et l’autre pour la voie métrique. Celui-ci, le Tm 235 077, travaille depuis 2023 sur le réseau à voie normale.', 'Il dispose d’une grue et d’une surface de chargement pour le matériel.'],
  kennzahlen: [['1', 'véhicule (235 077)'], ['80 km/h', 'vitesse maximale (type)'], ['480 kW', 'puissance du moteur (type)'], ['2023', 'première mise en service']],
  daten: { 'Bauart': 'tracteur de travaux diesel-électrique avec grue', 'Motor': 'Mercedes-Benz OM 473 (type)', 'Länge': '18,0 m (type)', 'Gewicht': '52 t (type)', 'Leistung': '480 kW (type)', 'Höchstgeschwindigkeit': '80 km/h (type)' },
  specNote: 'Les valeurs marquées « type » décrivent la famille de véhicules selon la Schweizer Eisenbahn-Revue 3/2023. Les prescriptions d’exploitation indiquent 60 t pour ce tracteur dans le tableau des trains ; la raison de cet écart n’est pas éclaircie.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['En mai 2021, transN a commandé chez Stadler quatre véhicules apparentés, avec TRAVYS et la NStCM ; une machine à voie normale et une à voie métrique étaient destinées à transN. Les deux sont arrivées en 2023.', 'Le tracteur à voie normale porte le numéro 98 85 5 235 077-5, en bref Tm 235 077. Il ne faut pas le confondre avec l’ancien Tm 237 312.'] },
      { titel: 'Utilisation et technique', p: ['Le tracteur sert à la construction, à l’entretien et au transport de matériel sur le réseau à voie normale de transN, par exemple sur la ligne Travers–Buttes.', 'Le type est diesel-électrique : un moteur Mercedes-Benz OM 473 de 480 kW alimente quatre moteurs de traction. Le tracteur mesure 18,0 m, pèse 52 t et roule jusqu’à 80 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Grue Palfinger d’une portée jusqu’à 17 m (type)', 'Plate-forme de chargement de 12 t, transport de rails jusqu’à 15 m (type)', 'Radiocommande (type)', 'Pas de compartiment voyageurs'] }
    ]
});
uebZug('trn-tm-44-meter', {
  beiname: '012 voie métrique',
  typ: 'Tracteur de travaux diesel-électrique Stadler pour la voie métrique',
  text: ['Le Tm 4/4 012 à voie métrique est entré en service chez transN en 2023. Il travaille pour les chantiers sur les lignes à voie métrique.', 'Il est le frère du tracteur à voie normale du même type.'],
  kennzahlen: [['1', 'véhicule (012)'], ['80 km/h', 'vitesse maximale (type)'], ['480 kW', 'puissance du moteur (type)'], ['2023', 'mise en service']],
  daten: { 'Bauart': 'tracteur de travaux diesel-électrique avec grue', 'Motor': 'Mercedes-Benz OM 473 (type)', 'Länge': '18,0 m (type)', 'Gewicht': '52 t (type)', 'Leistung': '480 kW (type)', 'Höchstgeschwindigkeit': '80 km/h (type)' },
  specNote: 'Les valeurs marquées « type » décrivent la famille de véhicules selon la Schweizer Eisenbahn-Revue 3/2023.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler a livré le tracteur ; transN l’a mis en service en 2023. Il porte le numéro 90 85 8570 012-7, en bref Tm 4/4 012.'] },
      { titel: 'Utilisation et technique', p: ['Il travaille pour les chantiers sur le réseau à voie métrique de transN, notamment sur la R22 La Chaux-de-Fonds–Les Ponts-de-Martel. Il déplace des rails, du matériel de construction et des wagons à ballast.', 'Le type est diesel-électrique : un moteur Mercedes-Benz OM 473 de 480 kW alimente les moteurs de traction. Le tracteur mesure 18,0 m, pèse 52 t et roule jusqu’à 80 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Grue Palfinger d’une portée d’env. 17 m (type)', 'Plate-forme de chargement de 12 t (type)', 'Pas de compartiment voyageurs'] }
    ]
});

/* cartes « Où circule-t-il ? » */
uebEinsatz({
  'trn-rabe-523': 'Sur les lignes transN R21 Neuchâtel–Val-de-Travers–Buttes et R23 Neuchâtel–La Chaux-de-Fonds–Le Locle.',
  'trn-rabe-527': 'Sur les lignes transN R21 Neuchâtel–Val-de-Travers–Buttes et R23 Neuchâtel–La Chaux-de-Fonds–Le Locle.',
  'trn-be-4-8': 'Sur la ligne du Littorail R15 de Neuchâtel Place Pury à Boudry. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-abe-4-8': 'Sur la R22 La Chaux-de-Fonds–Les Ponts-de-Martel. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-bde-4-4': 'Sur la R24 Le Locle–Les Brenets, une ligne à voie métrique d’un peu plus de 4 km. Elle est tracée en pointillé.',
  'trn-tm-44-normal': 'Pour la construction et l’entretien sur le réseau à voie normale de transN, par exemple sur la ligne Travers–Buttes.',
  'trn-tm-44-meter': 'Pour les chantiers sur les lignes à voie métrique de transN, notamment La Chaux-de-Fonds–Les Ponts-de-Martel. La voie métrique est tracée en pointillé et simplifiée.'
});

/* ---- 37-re430-ama832.js ---- */
/* Français – Re 430 et Ama 832 */
uebDict({ 'Dieselgenerator': 'Génératrice diesel', 'Eigentümer': 'Propriétaire', 'Bestellt': 'Commande', 'Plattform': 'Plateforme', 'SBB Cargo AG': 'CFF Cargo SA', 'LokRoll 2 AG': 'LokRoll 2 SA' });

uebZug('ama-832', {
  typ: 'Locomotive de manœuvre hybride avec génératrice diesel et batterie',
  text: ['L’Ama 832 est une locomotive de manœuvre hybride à trois essieux d’Alstom, de la famille Prima H3. Selon l’utilisation, elle roule la moitié à trois quarts du temps avec le courant de sa batterie.', 'CFF Cargo a loué douze locomotives pour dix ans ; elles appartiennent à LokRoll 2 SA.'],
  kennzahlen: [['12', 'locomotives louées'], ['100 km/h', 'vitesse maximale'], ['350 kW', 'génératrice diesel'], ['2018', 'commande']],
  daten: { 'Antrieb': 'hybride : génératrice diesel et batterie', 'Dieselgenerator': '350 kW, norme d’émission IIIB', 'Länge': '12,8 m', 'Leistung': '790 kW (catalogue des types de marche)', 'Anzahl': '12 louées' },
  specNote: 'La désignation et la puissance de 790 kW suivent le catalogue des types de marche CFF 2026 ; la génératrice diesel seule développe 350 kW. Les locomotives n’appartiennent pas aux CFF.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['LokRoll 2 SA, fondée par le fonds Reichmuth Infrastruktur Schweiz, a commandé en octobre 2018 douze Prima H3 à Alstom pour environ 40 millions d’euros. Elles sont louées à CFF Cargo pour dix ans. Elles ont été construites par Alstom en Allemagne ; les livraisons étaient prévues dès octobre 2020.', 'Dès 2017, CFF Cargo louait déjà trois Prima H3 à Alstom, pour des zones fermées du port de Bâle-Kleinhüningen et en Argovie.'] },
      { titel: 'Utilisation et technique', p: ['CFF Cargo utilise les locomotives pour la manœuvre, la formation et le déplacement de wagons, par exemple à St. Margrethen. Selon l’utilisation, elles roulent 50 à 75 % du temps sur batterie, ce qui permet une exploitation sans émissions en ville ou dans des halles.', 'La génératrice diesel développe 350 kW. La locomotive mesure 12,8 m, pèse 67 t, a un effort au démarrage de 240 kN et roule jusqu’à 100 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Cabine de conduite au milieu', 'Batterie pour rouler sans émissions', 'ETCS pour le réseau suisse', 'Pas de pantographe, pas de compartiment voyageurs'] }
    ],
  bilder: ['Nouvelle Ama 832 de l’équipe de manœuvre de St. Margrethen (2021)', 'Ama 832 neuve à St. Margrethen (2021)']
});
uebZug('h-re430', {
  typ: 'Locomotive électrique pour trains rapides et marchandises du Gothard (historique)',
  text: ['La Re 4/4 III, plus tard Re 430, est la version à effort de traction élevé de la Re 4/4 II. Un rapport de transmission différent lui donne plus de traction en rampe ; en contrepartie, elle roule au plus à 125 au lieu de 140 km/h.', 'Les dernières locomotives des CFF ont été retirées en avril 2023.'],
  kennzahlen: [['20', 'locomotives CFF (11351–11370)'], ['125 km/h', 'vitesse maximale'], ['4700 kW', 'puissance unihoraire'], ['1970', 'mise en service']],
  daten: { 'Länge': '15,41 m hors tampons', 'Gewicht': '80 t, 84 t avec climatisation', 'Leistung': '4700 kW unihoraire, 3700 kW continue', 'Höchstgeschwindigkeit': '125 km/h (d’abord 120 km/h)', 'Nummern': '11351–11370, puis Re 430 351–370 ; plus 11350 ex SOB 41', 'Ausmusterung': 'jusqu’au 8 avril 2023' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SLM, BBC, MFO et SAAS ont construit les locomotives. Les CFF en ont reçu 20 en 1970 et 1971, numérotées 11351–11370. Les 11351–11353 sont allées au SOB de 1983 à 1985 et sont revenues de 1994 à 1996 ; dans le même échange, la SOB 41 est arrivée aux CFF comme 11350.', 'Des locomotives apparentées circulaient sur des chemins de fer privés : EBT 111–113, VHB 141 et SMB 181, plus tard comme Re 436 et Re 430 chez RM et Widmer Rail Services.'] },
      { titel: 'Utilisation et technique', p: ['La Re 4/4 III a été construite pour les trains rapides et marchandises du Gothard. Plus tard, elle a surtout circulé en trafic marchandises, le plus souvent chez CFF Cargo. La 11365 a été retirée après une collision à Bâle en 2013 ; les deux dernières, la 430 356 et la 11370, ont été retirées le 8 avril 2023.', 'La locomotive mesure 15,41 m, développe 4700 kW en puissance unihoraire et 3700 kW en continu, a un effort au démarrage de 280 kN et roule jusqu’à 125 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Commande multiple, par exemple avec la Re 6/6 en « Re 10/10 »', 'Pas de compartiment voyageurs'],
        p: ['En tête de trains voyageurs, l’accessibilité dépendait des voitures.'] }
    ],
  bilder: ['Re 430 364 (11364) à Soleure (2019)', 'Re 4/4 III 11360 et Re 421 à Frauenfeld (2012)', 'Re 4/4 III 11350, ex SOB 41, à Rotkreuz (2012)', 'Re 4/4 III 11364 avec voitures à deux niveaux à Veytaux (2011)']
});
uebEinsatz({
  'ama-832': 'En manœuvre chez CFF Cargo en Suisse, par exemple à St. Margrethen.',
  'h-re430': 'Autrefois en tête de trains rapides et marchandises au Gothard, plus tard surtout en trafic marchandises de CFF Cargo sur tout le réseau.'
});

/* ---- 38-transn-historisch.js ---- */
/* Français – transN : véhicules historiques et spéciaux */
uebDict({
  'transN, früher CMN und TRN': 'transN, auparavant CMN et TRN', 'transN, früher RVT und TRN': 'transN, auparavant RVT et TRN',
  'RVT, später TRN und transN': 'RVT, puis TRN et transN', 'RVT, später TRN': 'RVT, puis TRN', 'TN, später TRN und transN': 'TN, puis TRN et transN',
  'NCB und TN': 'NCB et TN', 'TN': 'TN', 'TRN': 'TRN', 'Régional des Brenets (RdB)': 'Régional des Brenets (RdB)'
});

uebZug('trn-tm-2-2-11', {
  typ: 'Tracteur de travaux diesel à deux essieux pour la voie métrique',
  text: ['Le Tm 2/2 11 est un petit tracteur diesel de 1983 provenant du parc des anciens CMN. Il sert à la construction et à l’entretien sur la voie métrique.', 'Le tableau des véhicules de transN de 2024 le mentionne pour la ligne La Chaux-de-Fonds–Les Ponts-de-Martel.'],
  kennzahlen: [['1983', 'construction'], ['175 kW', 'puissance du moteur'], ['70 km/h', 'vitesse maximale'], ['19 t', 'poids']],
  daten: { 'Bauart': 'tracteur diesel à deux essieux', 'Hersteller': 'RACO (type 240 DT 4H)' },
  specNote: '70 km/h est la vitesse maximale du véhicule, pas la vitesse autorisée lors des travaux. Il n’est pas confirmé séparément que le tracteur soit encore en état de service en octobre 2026.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['RACO a construit le tracteur en 1983, type 240 DT 4H, pour les Chemins de fer des Montagnes Neuchâteloises (CMN). Il est arrivé chez transN par les TRN. Une photo de 1986 le montre aux Ponts-de-Martel.', 'Il appartient à la génération précédant les tracteurs Stadler à quatre essieux ; en 2023 s’y est ajouté le Tm 4/4 012, bien plus grand.'] },
      { titel: 'Utilisation et technique', p: ['Les prescriptions d’exploitation voie métrique de transN (valables dès le 15 décembre 2024) le mentionnent pour la ligne La Chaux-de-Fonds–Les Ponts-de-Martel.', 'Les deux essieux sont moteurs. Le moteur diesel développe 175 kW ; le tracteur pèse 19 t et roule jusqu’à 70 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Deux essieux moteurs', 'Poids-frein de 17 t', 'Pas de compartiment voyageurs'] }
    ],
  bilder: ['Tm 2/2 11 des CMN aux Ponts-de-Martel (1986)']
});
uebZug('trn-tm-237-312', {
  typ: 'Tracteur de travaux diesel à deux essieux pour la voie normale',
  text: ['Le Tm 237 312 est un petit tracteur diesel de 1983 provenant du parc du RVT, au Val-de-Travers. Il s’appelait auparavant Tm 2/2 12.', 'Il ne faut pas le confondre avec le nouveau Tm 4/4 012 à voie métrique.'],
  kennzahlen: [['1983', 'construction'], ['175 kW', 'puissance du moteur'], ['19 t', 'poids'], ['10 m', 'longueur']],
  daten: { 'Bauart': 'tracteur diesel à deux essieux', 'Hersteller': 'RACO (type 240 DT 4H)', 'Fahrzeugnummern': 'Tm 237 312, auparavant Tm 2/2 12', 'Länge': '10 m (selon le tableau des trains)' },
  specNote: 'La longueur et le poids proviennent du tableau des trains des prescriptions d’exploitation voie normale de transN d’avril 2025. On ignore s’il est encore utilisé après août 2025.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['RACO a construit le tracteur en 1983, type 240 DT 4H, pour le Régional du Val-de-Travers (RVT), où il s’appelait Tm 2/2 12. Il est arrivé chez transN par les TRN et porte aujourd’hui le numéro Tm 237 312.', 'Depuis 2023, transN dispose avec le Tm 4/4 235 077 d’un successeur à quatre essieux bien plus grand.'] },
      { titel: 'Utilisation et technique', p: ['Le tracteur a servi à l’entretien et aux manœuvres au Val-de-Travers. Une photo le montre en 2016 à Fleurier, une autre en août 2025 près du dépôt de Fleurier. Les prescriptions d’exploitation voie normale d’avril 2025 le mentionnent encore.', 'Le moteur diesel développe 175 kW. Selon le tableau des trains, le tracteur mesure 10 m et pèse 19 t.'] },
      { titel: 'Équipement et accessibilité', liste: ['Deux essieux', 'Poids-frein de 17 t, pourcentage de freinage de 89 %', 'Pas de compartiment voyageurs'] }
    ],
  bilder: ['Tm 237 312 à Fleurier (2016)']
});
uebZug('trn-zweiwege', {
  name: 'Véhicules rail-route', beiname: 'dumper 102 et pelle',
  typ: 'Véhicules rail-route pour les travaux sur la voie métrique',
  text: ['Sur ses lignes à voie métrique, transN utilise deux véhicules rail-route : un dumper numéroté 102 et une pelle rétro. Tous deux circulent sur la route et sur les rails.', 'Selon les prescriptions d’exploitation, tous deux ont été mis en service en 2021.'],
  kennzahlen: [['2', 'véhicules'], ['2021', 'mise en service'], ['20 km/h', 'dumper sur rails'], ['16 km/h', 'pelle sur rails']],
  daten: { 'Bauart': 'dumper rail-route et pelle rétro rail-route', 'Fahrzeugnummern': 'dumper 102 ; la pelle n’a pas de numéro dans le tableau', 'Gewicht': 'dumper 14,5 t, pelle 12 t (à vide)', 'Höchstgeschwindigkeit': 'dumper 20 km/h, pelle 16 km/h (sur rails)' },
  specNote: 'Les prescriptions d’exploitation n’indiquent ni le constructeur ni le type. 14,5 t et 12 t sont des tares ; on ne peut pas en déduire une charge utile.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Le tableau des véhicules des prescriptions d’exploitation voie métrique (valables dès le 15 décembre 2024) mentionne un « Dumper rail-route » numéroté 102 et une « Pelle rétro rail-route ». Tous deux ont été mis en service en 2021.', 'Le constructeur et le modèle des deux véhicules n’y sont pas indiqués.'],
        tabelle: { kopf: ['Véhicule', 'Tare', 'Sur rails', 'Places'], zeilen: [['Dumper 102', '14,5 t', '20 km/h', '2'], ['Pelle rétro', '12 t', '16 km/h', '1']] } },
      { titel: 'Utilisation et technique', p: ['Les deux véhicules figurent pour les lignes à voie métrique La Chaux-de-Fonds–Les Ponts-de-Martel et Le Locle–Les Brenets. Le dumper transporte du matériel, la pelle travaille sur la voie et à côté.', 'Sur les rails, des prescriptions d’exploitation particulières s’appliquent. Le dumper a un poids-frein de 10 t et une force de retenue de 12 kN, la pelle 9 t et 10 kN.'] },
      { titel: 'Équipement et accessibilité', liste: ['Roues pour la route et le rail', 'Dumper avec 2 places, pelle avec 1 place', 'Pas de compartiment voyageurs'] }
    ]
});
uebZug('trn-ast-21', {
  typ: 'Voiture-pilote panoramique et salon pour courses spéciales',
  text: ['L’ASt 21 est une voiture-pilote panoramique et salon à voie métrique. Elle a été créée à partir de l’automotrice BDe 4/4 1 des CMN de 1950 et mise en service en 1999.', 'Elle n’a pas de propulsion propre et circule avec une automotrice BDe 4/4.'],
  kennzahlen: [['1999', 'transformation'], ['46', 'places assises'], ['80 km/h', 'vitesse maximale'], ['18 t', 'tare']],
  daten: { 'Bauart': 'voiture-pilote avec salon, sans propulsion propre', 'Fahrzeugnummern': 'ASt 21, auparavant BDe 4/4 1', 'Gewicht': '18 t à vide', 'In Betrieb seit': '1999 (transformation ; véhicule d’origine de 1950)' },
  specNote: 'Certaines descriptions plus anciennes indiquent 1998 comme année de transformation ; ici vaut 1999 selon les prescriptions d’exploitation de transN. Il n’est pas confirmé séparément que la voiture soit en état de service en 2026.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['La voiture a été créée à partir de l’automotrice BDe 4/4 1 des CMN de 1950. Des parties de l’ancienne automotrice ont été conservées lors de la transformation ; selon les prescriptions d’exploitation de transN, l’ASt 21 a été mise en service en 1999.', 'Le tableau des véhicules de transN la mentionne encore en 2024.'] },
      { titel: 'Utilisation et technique', p: ['La voiture est prévue pour des offres de voyage particulières, pas pour le trafic pendulaire ordinaire. En tant que voiture-pilote, elle n’a pas de propulsion propre ; elle circule avec une automotrice BDe 4/4.', 'Elle pèse 18 t à vide, a un poids-frein de 20 t et roule jusqu’à 80 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['46 places assises', 'Grandes fenêtres panoramiques', 'Aménagement de salon au lieu de sièges pour pendulaires'] }
    ],
  bilder: ['Voiture-pilote panoramique ASt 21']
});
uebZug('trn-be-4-4-1', {
  typ: 'Locomotive électrique marchandises du RVT de 1951 (historique)',
  text: ['La Be 4/4 1 est une locomotive unique du RVT au Val-de-Travers. Elle a surtout tiré des trains de marchandises et des trains scolaires.', 'Depuis le 1er mars 2019, elle appartient à l’association RVT-Historique.'],
  kennzahlen: [['1951', 'construction'], ['703 kW', 'puissance unihoraire'], ['75 km/h', 'vitesse maximale'], ['45 t', 'poids en service']],
  daten: { 'Bauart': 'locomotive électrique à quatre moteurs de traction', 'Länge': '11,15 m hors tampons', 'Leistung': '703 kW unihoraire, 611 kW continue (à la jante)', 'Erhalten': 'RVT-Historique (depuis 2019)' },
  specNote: 'Données techniques selon la fiche de RVT-Historique. La locomotive ne fait pas partie de la flotte marchandises actuelle de transN.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les Ateliers de Vevey ont construit la locomotive en 1951, avec un équipement électrique de Sécheron, pour le Régional du Val-de-Travers (RVT). Elle est restée unique et porte le surnom de « Bobo ».', 'Son numéro européen de véhicule est 91 85 4417 301-9.'] },
      { titel: 'Utilisation et technique', p: ['Le RVT l’a surtout utilisée en tête de trains de marchandises et de trains scolaires sur la ligne à voie normale du Val-de-Travers. Lorsque son service régulier a diminué, RVT-Historique l’a d’abord louée. Le 1er mars 2019, transN l’a officiellement remise à l’association.', 'Quatre moteurs de traction développent à la jante 703 kW en régime unihoraire et 611 kW en régime continu. La locomotive mesure 11,15 m, pèse 45 t et roule jusqu’à 75 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Quatre moteurs de traction', 'Pour courant alternatif 15 kV 16,7 Hz', 'Aujourd’hui dans le parc de RVT-Historique'] }
    ],
  bilder: ['Be 4/4 1 du RVT à Fleurier (1984)']
});
uebZug('trn-abde-2-4-102', {
  typ: 'Automotrice électrique du RVT de 1944 (historique)',
  text: ['L’ABDe 2/4 102 a été construite pour l’électrification du RVT au Val-de-Travers. Elle a circulé en service régulier jusqu’en décembre 2004.', 'Aujourd’hui, elle appartient à RVT-Historique sous le nom de « L’Étincelante » et possède un bar pour les courses de groupes.'],
  kennzahlen: [['1944', 'construction'], ['412 kW', 'puissance'], ['70 km/h', 'vitesse maximale'], ['59', 'places assises']],
  daten: { 'Bauart': 'automotrice électrique avec compartiment à bagages', 'Fahrzeugnummern': 'BCFe 2/4 102, puis ABFe 2/4 et ABDe 2/4 (EVN 94 85 7537 312-1)', 'Sitzplätze': '59, dont 8 en 1re classe', 'In Betrieb seit': 'janvier 1945' },
  specNote: 'Construite en 1944, en service depuis janvier 1945. Données techniques selon RVT-Historique. Une photo sous licence libre n’existe que de l’automotrice sœur 101, c’est pourquoi aucune n’est montrée ici.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SWS et BBC ont construit l’automotrice en 1944 pour l’électrification du RVT ; elle a été mise en service en janvier 1945. Elle s’appelait d’abord BCFe 2/4 102, puis ABFe 2/4 et enfin ABDe 2/4. Son numéro européen de véhicule reprend le numéro ultérieur 312.', 'Sa sœur était l’automotrice 101.'] },
      { titel: 'Utilisation et technique', p: ['Son dernier service régulier est daté de décembre 2004. RVT-Historique l’a rénovée en 2006, a installé un bar dans le compartiment à bagages et lui a rendu ses couleurs d’origine. Aujourd’hui, elle circule pour des courses touristiques et des groupes.', 'Elle mesure 21 m, pèse 40 t, développe 412 kW et roule jusqu’à 70 km/h. Les roues ont un diamètre de 940 mm.'] },
      { titel: 'Équipement et accessibilité', liste: ['59 places assises, dont 8 en 1re classe', 'Bar dans l’ancien compartiment à bagages (depuis 2006)', 'Sonorisation et tables amovibles'] }
    ]
});
uebZug('trn-rbde-106', {
  beiname: '106 et ABt 204',
  typ: 'Train navette à voie normale du RVT de 1985 (historique)',
  text: ['L’automotrice RBDe 106 et la voiture-pilote ABt 204 forment une navette du RVT. Chez les TRN et transN, l’automotrice portait le numéro 316.', 'En juin 2024, RVT-Historique a repris les deux véhicules ; depuis le 1er mai 2025, ils circulent de nouveau aux couleurs du RVT.'],
  kennzahlen: [['1985', 'mise en service de l’automotrice'], ['2', 'véhicules'], ['87', 'places assises dans le train'], ['2025', 'de nouveau aux couleurs du RVT']],
  daten: { 'Bauart': 'automotrice électrique avec voiture-pilote (navette)', 'Fahrzeugnummern': 'RBDe 106 (plus tard 316), ABt 204', 'Sitzplätze': '87 dans le train : 24 en 1re, 63 en 2e classe', 'Anzahl': '2 véhicules', 'Erhalten': 'RVT-Historique (depuis juin 2024)', 'In Betrieb seit': '1985 (automotrice)' },
  specNote: 'Les 87 places assises valent pour tout le train formé de l’automotrice et de la voiture-pilote. Les sources vérifiées n’indiquent ni la longueur, le poids et la puissance de l’automotrice, ni l’année de construction de la voiture-pilote. Les photos de 2006 montrent le train dans la livrée TPF de l’époque.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['L’automotrice est arrivée au RVT en 1985 sous le numéro RBDe 106. Elle fait partie des trains navettes que de nombreux chemins de fer privés suisses ont acquis à cette époque. Chez les TRN et transN, elle portait le numéro 316.', 'La voiture-pilote ABt 204 a la première et la deuxième classe. Grâce à elle, le train peut changer de sens sans que l’automotrice doive faire le tour.'] },
      { titel: 'Utilisation et technique', p: ['De 2004 à 2013, l’automotrice 316 et la voiture-pilote 204 étaient louées aux TPF et y circulaient dans la livrée TPF, avec des voitures intermédiaires TPF. Ensuite, transN n’a plus utilisé le train pendant plusieurs années dans le trafic voyageurs commercial.', 'En juin 2024, RVT-Historique a repris les deux véhicules. La peinture extérieure a été refaite entre septembre 2024 et mars 2025 ; la première course aux couleurs restaurées du RVT a eu lieu le 1er mai 2025.'] },
      { titel: 'Équipement et accessibilité', liste: ['87 places assises dans le train : 24 en 1re et 63 en 2e classe', 'Bar et tables aux places (après la restauration)', 'Voiture-pilote pour changer de sens sans manœuvre'] }
    ],
  bilder: ['RBDe 316 et ABt 204 en livrée TPF à Fribourg (2006)', 'ABt 204 et RBDe 316 avec des voitures intermédiaires TPF à Fribourg (2006)']
});
uebZug('trn-abm-2-5-9', {
  typ: 'Automotrice diesel-électrique de 1914 (historique)',
  text: ['L’ABm 2/5 9 est l’une des premières automotrices diesel d’Europe. Elle a été construite en 1914 pour les chemins de fer de l’État de Saxe et a circulé sur le RVT de 1924 à 1965.', 'Aujourd’hui, elle fait partie de la collection du Musée Suisse des Transports.'],
  kennzahlen: [['1914', 'construction'], ['1924–1965', 'au RVT'], ['diesel', 'avec transmission électrique'], ['Musée des Transports', 'collection']],
  daten: { 'Bauart': 'automotrice diesel-électrique', 'Betreiber': 'Chemins de fer de l’État de Saxe, puis RVT (1924–1965)', 'Antrieb': 'moteur diesel avec génératrice, moteur de traction électrique', 'Fahrzeugnummern': 'BCm 2/5, puis ABm 2/5 9', 'Erhalten': 'Musée Suisse des Transports' },
  specNote: 'L’année 1914 suit la classification historique du Musée Suisse des Transports. L’emplacement actuel de l’automotrice n’est pas confirmé ; un article de 2018 traite de son transfert dans un dépôt externe.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['La Waggonfabrik Rastatt a construit la voiture avec un équipement électrique de BBC et un moteur diesel Sulzer. Elle est issue d’un mandat de développement commun des chemins de fer de l’État de Saxe et de Prusse.', 'Après la Première Guerre mondiale, deux automotrices de ce type sont arrivées en Suisse. La future ABm 2/5 9 du RVT a été conservée.'] },
      { titel: 'Utilisation et technique', p: ['Selon le Musée des Transports, le RVT l’a utilisée de 1924 à 1965. De telles automotrices remplaçaient la coûteuse traction à vapeur sur les lignes peu fréquentées.', 'Un moteur diesel entraîne une génératrice qui alimente le moteur de traction électrique. Un bogie est moteur, l’autre est porteur.'] },
      { titel: 'Équipement et accessibilité', liste: ['Compartiments de 1re et 2e classe (type AB)', 'À partir de 1982 dans l’exposition permanente du Musée des Transports', 'Aux archives : description Sulzer de 1915'] }
    ],
  bilder: ['ABm 2/5 9 au Musée des Transports, côté bogie moteur (2009)', 'ABm 2/5 9 au Musée des Transports, côté bogie porteur (2009)']
});
uebZug('trn-be-2-4', {
  typ: 'Tram interurbain des TN de 1902 (historique)',
  text: ['Les Be 2/4 41 à 47 étaient les grands trams interurbains des Tramways de Neuchâtel (TN) sur la ligne de Boudry et Cortaillod.', 'Les numéros 44 et 45 sont conservés au Musée du tram de Neuchâtel (ANAT).'],
  kennzahlen: [['1902', 'mise en service'], ['7', 'motrices (41–47)'], ['50 km/h', 'vitesse maximale'], ['1981', 'retrait']],
  daten: { 'Bauart': 'motrice de tram à quatre essieux et deux moteurs', 'Sitzplätze': '30, plus 43 places debout', 'Erhalten': '44 et 45 au Musée du tram de Neuchâtel (ANAT)' },
  specNote: 'Valeurs techniques selon le Musée du tram de Neuchâtel. D’anciennes descriptions de photos indiquent 74 kW au lieu de 72 kW. Il n’est pas confirmé que les voitures soient aujourd’hui en état de marche.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['La fabrique de wagons de Schlieren (SWS) a construit les sept motrices, avec un équipement électrique de MFO. Elles ont été mises en service en 1902.', 'La 44 est revenue à Neuchâtel en 2013 depuis la collection de l’AMTUIR près de Paris ; la 45 est restée conservée à l’ANAT.'] },
      { titel: 'Utilisation et technique', p: ['Les voitures circulaient sur la ligne interurbaine Neuchâtel–Boudry et sur l’ancien embranchement de Cortaillod, aussi en unités multiples avec des remorques. En 1981, elles ont été officiellement retirées lors du passage au nouveau matériel Littorail.', 'Deux moteurs développent ensemble 72 kW. Une voiture mesure 12,5 m, pèse 15,3 t et roule jusqu’à 50 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['30 places assises et 43 places debout', 'Remorques à quatre essieux assorties B4 111–114', 'Aujourd’hui véhicules de musée de l’ANAT'] }
    ],
  bilder: ['Be 2/4 45 au dépôt de l’ANAT à Boudry (2011)', 'Be 2/4 44 sur la ligne 5 en direction d’Auvernier (1979)']
});
uebZug('trn-be-2-2', {
  beiname: '73 et 76',
  typ: 'Trams urbains à deux essieux des TN de 1922 (historiques)',
  text: ['Les motrices de tram à deux essieux 71 à 79 circulaient sur le réseau urbain des TN. Deux sont conservées : la 73 au Musée du tram de Neuchâtel et la 76 au chemin de fer-musée Blonay–Chamby.', 'La 73 circule avec des remorques historiques sous le nom de « Le Britchon ».'],
  kennzahlen: [['1922', 'construction (73 et 76)'], ['102 kW', 'puissance (73)'], ['35 km/h', 'vitesse maximale'], ['2', 'voitures conservées']],
  daten: { 'Bauart': 'motrice de tram à deux essieux', 'Hersteller': '73 : ateliers des TN avec BBC et MFO ; 76 : SIG, MFO, BBC (selon Blonay–Chamby)', 'Stromsystem': '600 V continu (76 à Blonay–Chamby : 1000 V)', 'Fahrzeugnummern': '71–78, plus tard 79 ; conservées 73 et 76', 'Länge': '9,2 m (73)', 'Leistung': '102 kW (73), 104 kW (76)', 'Sitzplätze': '20, plus 35 places debout (73)', 'Erhalten': '73 au Musée du tram de Neuchâtel, 76 à Blonay–Chamby' },
  specNote: 'La série a été construite de 1921 à 1928 ; pour la 73 et la 76, les musées indiquent 1922. Valeurs de la 73 selon le Musée du tram de Neuchâtel, valeurs de la 76 selon Blonay–Chamby, qui la désigne Ce 2/2 76.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['La série 71 à 78 a été construite entre 1921 et 1928 ; la 79 s’y est ajoutée plus tard. Selon le musée, les TN ont construit la 73 dans leurs propres ateliers, avec un équipement électrique de BBC et MFO. Pour la 76, Blonay–Chamby cite SIG, MFO et BBC.'] },
      { titel: 'Utilisation et technique', p: ['Jusqu’à la conversion de la ligne 3 vers Corcelles au trolleybus en juillet 1976, les deux voitures circulaient en service régulier. La 76 est arrivée au chemin de fer-musée Blonay–Chamby le 18 août 1976 ; elle y attend une révision.', 'Depuis 1994, la 73 circule comme motrice historique sur la ligne de Boudry. Elle mesure 9,2 m, pèse 10,9 t et possède deux moteurs de 51 kW chacun.'] },
      { titel: 'Équipement et accessibilité', liste: ['73 : 20 places assises et 35 places debout', '76 : à l’origine pour 600 V, à Blonay–Chamby pour 1000 V continu', 'Train « Le Britchon » : motrice 73 avec les remorques B2i 1 et B2 143'] }
    ],
  bilder: ['Tram 76 avec la remorque 143 sur la ligne 3 (1976)']
});
uebZug('trn-be-4-4-583', {
  typ: 'Motrice de tram à quatre essieux des TN de 1947 (historique)',
  text: ['Les Be 4/4 81 à 83 formaient une petite série de trams à quatre essieux des TN. La 83, devenue plus tard 583, est conservée.', 'Elle fait partie de la collection du Musée du tram de Neuchâtel.'],
  kennzahlen: [['1947', 'construction'], ['144 kW', 'puissance'], ['60 km/h', 'vitesse maximale'], ['3', 'voitures (81–83)']],
  daten: { 'Bauart': 'motrice de tram bidirectionnelle à quatre essieux', 'Fahrzeugnummern': '81–83, plus tard 581–583', 'Sitzplätze': '26, plus 39 places debout', 'Erhalten': '583 au Musée du tram de Neuchâtel (ANAT)' },
  specNote: 'Valeurs selon le Musée du tram de Neuchâtel ; une description de photo indique 148 kW au lieu de 144 kW.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SIG a construit les trois voitures en 1947, avec un équipement électrique de Sécheron (SAAS). Elles ont plus tard reçu les numéros 581 à 583.', 'La 583 est restée conservée à l’ANAT. La 582 est partie à Wiehe, en Allemagne, la 581 a été démolie en 1986.'] },
      { titel: 'Utilisation et technique', p: ['Les voitures bidirectionnelles avaient des portes des deux côtés. Après la fin de la ligne urbaine 3 en 1976, elles ont été adaptées à la ligne interurbaine de Boudry. Le service régulier des deux dernières voitures s’est terminé en 1988, à l’arrivée de nouvelles motrices Littorail.', 'Quatre moteurs développent ensemble 144 kW. Une voiture mesure 12,2 m, pèse 13,2 t et roule jusqu’à 60 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['26 places assises et 39 places debout', 'Portes des deux côtés, poste de conduite aux deux extrémités', 'Aujourd’hui dans la collection du Musée du tram de Neuchâtel'] }
    ],
  bilder: ['Be 4/4 583 (ex 83) au dépôt de l’ANAT à Boudry (2011)']
});
uebZug('trn-be-4-4-littorail', {
  typ: 'Motrices Littorail de 1981 (historiques)',
  text: ['Avec les Be 4/4 501 à 506, la ligne Neuchâtel–Boudry est devenue en 1981 la ligne moderne du Littorail. Dès 2019, des automotrices Stadler d’occasion venues de Trogen les ont remplacées.', 'La 504 « Cortaillod » est conservée au Musée du tram de Neuchâtel.'],
  kennzahlen: [['1981', 'mise en service'], ['6', 'motrices (501–506)'], ['75 km/h', 'vitesse maximale'], ['276 kW', 'puissance']],
  daten: { 'Bauart': 'motrice à quatre essieux pour la circulation avec voitures-pilotes', 'Sitzplätze': '42, plus 65 places debout', 'Erhalten': '504 « Cortaillod » au Musée du tram de Neuchâtel (ANAT)' },
  specNote: 'Valeurs selon le Musée du tram de Neuchâtel. La photo montre un train Littorail de ce type ; le numéro de la voiture visible n’est pas confirmé.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SWS à Schlieren a construit en 1981 les quatre motrices 501 à 504, avec un équipement électrique de BBC. En 1988 ont suivi la 505 et la 506. La flotte comprenait aussi les voitures-pilotes 551 à 554.', 'Le 26 octobre 2019, l’ANAT a décidé de conserver la 504 « Cortaillod ».'] },
      { titel: 'Utilisation et technique', p: ['Les voitures Littorail ont apporté à Neuchâtel–Boudry une exploitation ferroviaire régionale plus rapide et protégée par signaux, à la place de l’ancien tram interurbain. Dès 2019, des automotrices Stadler Be 4/8 d’occasion venues de Trogen ont repris leur rôle.', 'Deux moteurs développent ensemble 276 kW. Une voiture mesure 18,4 m, pèse 25,5 t et roule jusqu’à 75 km/h. La ligne de contact est alimentée en 600 V continu.'] },
      { titel: 'Équipement et accessibilité', liste: ['42 places assises et 65 places debout', 'Circulation avec les voitures-pilotes 551–554', 'La 504 portait le nom de « Cortaillod »'] }
    ],
  bilder: ['Train Littorail à la gare de Colombier (2010)']
});
uebZug('trn-xe-2-2-601', {
  typ: 'Arroseuse électrique des TN de 1911 (historique)',
  text: ['La Xe 2/2 601 a été construite en 1911 comme arroseuse : elle arrosait d’eau les routes poussiéreuses le long des lignes de tram.', 'Plus tard, elle a servi au désherbage et au service hivernal. Aujourd’hui, elle appartient au Musée du tram de Neuchâtel.'],
  kennzahlen: [['1911', 'construction'], ['66 kW', 'puissance'], ['30 km/h', 'vitesse maximale'], ['10,5 t', 'poids']],
  daten: { 'Bauart': 'motrice de service électrique à deux essieux (arroseuse)', 'Fahrzeugnummern': 'Xe 2/2 301, dès 1980 601', 'Erhalten': 'Musée du tram de Neuchâtel (ANAT)' },
  specNote: 'Valeurs selon le Musée du tram de Neuchâtel. Il n’en découle aucune autorisation d’exploitation actuelle.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SWS a construit la voiture en 1911, avec un équipement électrique de MFO. Elle a d’abord porté le numéro 301, puis a été renumérotée 601 en 1980.'] },
      { titel: 'Utilisation et technique', p: ['À l’origine, elle arrosait d’eau les routes non revêtues pour limiter la poussière. Une fois les routes goudronnées, elle a servi au désherbage et, en hiver, au déneigement.', 'Deux moteurs développent ensemble 66 kW. Elle mesure 6,76 m, pèse 10,5 t, a un empattement de 2,2 m et roule jusqu’à 30 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Réservoir d’eau pour l’arrosage', 'Selon le musée, encore apte en principe au service de chasse-neige', 'Pas de compartiment voyageurs'] }
    ]
});
uebZug('trn-tn-wagen', {
  name: 'Wagons historiques',
  typ: 'Remorques de tram et wagons de service conservés de Neuchâtel',
  text: ['Outre les motrices, cinq wagons des trams de Neuchâtel sont conservés. Quatre sont entretenus par le Musée du tram de Neuchâtel (ANAT), un se trouve au chemin de fer-musée Blonay–Chamby.', 'Le plus ancien est le wagon marchandises X2 631 de 1892.'],
  kennzahlen: [['5', 'wagons'], ['1892', 'wagon le plus ancien'], ['4', 'au Musée du tram'], ['1', 'à Blonay–Chamby']],
  daten: { 'Bauart': 'remorques de tram et wagon marchandises', 'Erhalten': 'Musée du tram de Neuchâtel (ANAT) ; C4 121 à Blonay–Chamby' },
  specNote: 'Valeurs selon le Musée du tram de Neuchâtel et Blonay–Chamby. Des descriptions de photos indiquent parfois d’autres poids et nombres de places.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Quatre wagons sont entretenus par le Musée du tram de Neuchâtel (ANAT). La C4 121 fait partie de la collection de Blonay–Chamby depuis 1967 et y attend une révision.'],
        tabelle: { kopf: ['Wagon', 'Construction', 'Constructeur', 'Places ou charge utile'], zeilen: [
          ['B2i 1', '1894–1895 (série)', 'SIG', '12 places assises et 12 debout'], ['B4 112', '1902 (type)', 'SWS', '30 places assises et 47 debout'],
          ['B2 143', 'transformée 1914–1928 à partir de motrices de 1897/98', '–', '18 places assises et 39 debout'], ['C4 121', '1892', 'de Bâle (selon le musée)', '15 places assises et 53 debout'],
          ['X2 631 (auparavant 231)', '1892', 'NCB', '7,5 t de charge utile']] } },
      { titel: 'Utilisation et technique', p: ['La petite B2i 1 provient du tram hippomobile Neuchâtel–Saint-Blaise. Dès 1897, elle circulait derrière des trams électriques, en dernier jusqu’en 1964 vers La Coudre. Selon le musée, elle était à l’origine le numéro 5, puis le 101.', 'Les B4 111 à 114 à quatre essieux circulaient avec les trams interurbains 41 à 47 vers Boudry et Cortaillod jusqu’en 1981. Les B2 141 à 149 ont été créées par transformation d’anciennes motrices et ont circulé jusqu’en 1976 vers Saint-Blaise, Corcelles et Valangin.', 'Le X2 631 de 1892 transportait à l’origine des légumes et du lait ; depuis l’électrification du NCB en 1902, il servait de wagon de service. Il est considéré comme le dernier témoin conservé de l’époque du NCB.'] },
      { titel: 'Équipement et accessibilité', liste: ['Depuis 1994, la B2i 1 et la B2 143 forment avec la motrice 73 le train « Le Britchon »', 'B4 112 : jusqu’à 60 km/h, longueur 12,5 m', 'X2 631 : surface de chargement de 9 m²', 'C4 121 : frein à main et frein automatique à air comprimé'] }
    ],
  bilder: ['Remorque B2 143 derrière le tram 76 sur la ligne 3 (1976)']
});
uebZug('trn-g-3-3-1', {
  typ: 'Locomotive à vapeur du Régional des Brenets de 1890 (historique)',
  text: ['La petite locomotive-tender « Le Doubs » a circulé dès 1890 sur la ligne à voie métrique Le Locle–Les Brenets. Elle date de l’année d’ouverture du chemin de fer.', 'Depuis 1973, elle se trouve avec deux voitures historiques au chemin de fer-musée Blonay–Chamby, où elle attend une révision.'],
  kennzahlen: [['1890', 'construction'], ['16 t', 'poids en service'], ['25 km/h', 'vitesse maximale'], ['1973', 'à Blonay–Chamby']],
  daten: { 'Bauart': 'locomotive-tender à vapeur à trois essieux couplés', 'Hersteller': 'SLM Winterthour (numéro de fabrication 618)', 'Erhalten': 'Chemin de fer-musée Blonay–Chamby (prêt, depuis 1973)' },
  specNote: 'Valeurs selon Blonay–Chamby. La locomotive sœur G 3/3 2 n’a pas de fiche propre ; ses valeurs ne sont donc pas indiquées.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['La SLM à Winterthour a construit la locomotive en 1890 avec le numéro de fabrication 618. Avec deux autres petites locomotives à vapeur, elle assurait le trafic entre Le Locle et Les Brenets.', 'L’une d’elles, la G 3/3 2 « Le Père Frédéric », est exposée comme monument aux Brenets. Son nom rappelle l’industriel Frédéric Perret, qui a financé l’achat.'] },
      { titel: 'Utilisation et technique', p: ['Après l’électrification de 1950, la locomotive a été remise pour être conservée avec deux voitures historiques. Après un entreposage à Vallorbe, le groupe est arrivé en prêt en 1973 au chemin de fer-musée Blonay–Chamby.', 'La chaudière travaille à 12 bar. Les cylindres ont un diamètre de 240 mm et une course de 350 mm, les roues 750 mm. La locomotive emporte 1,8 m³ d’eau et 0,5 t de charbon.'] },
      { titel: 'Équipement et accessibilité', p: ['Le groupe conservé du Régional des Brenets comprend deux voitures de 1890. Elles ont un frein à main et un frein automatique à vide.'],
        tabelle: { kopf: ['Véhicule', 'Construction', 'Constructeur', 'Aujourd’hui'], zeilen: [
          ['Locomotive à vapeur G 3/3 1 « Le Doubs »', '1890', 'SLM (618)', 'Blonay–Chamby'], ['Voiture BC 2 (auparavant AB 2), 6 places en 2e et 28 places en 3e classe', '1890', 'SIG Neuhausen', 'Blonay–Chamby'],
          ['Voiture avec compartiment à bagages CF 21 (auparavant BD 21), 16 places en 3e classe', '1890', 'SIG Neuhausen', 'Blonay–Chamby'], ['Locomotive à vapeur G 3/3 2 « Le Père Frédéric »', '1890', 'SLM', 'monument aux Brenets']] } }
    ],
  bilder: ['G 3/3 1 « Le Doubs » au chemin de fer-musée Blonay–Chamby', 'G 3/3 1 « Le Doubs » à Blonay–Chamby (printemps 2010)']
});
uebZug('trn-kkl-41', {
  typ: 'Wagon plat à voie métrique avec citerne posée (historique)',
  text: ['Le Kkl 41 est un wagon plat à voie métrique des TRN. En 2014, il se trouvait en gare des Brenets avec une citerne posée sur sa plate-forme.', 'Selon la description de la photo, il est parti en 2017 au musée français MTVS.'],
  kennzahlen: [['41', 'numéro'], ['voie métrique', 'écartement'], ['2014', 'photo aux Brenets'], ['2017', 'au MTVS']],
  daten: { 'Bauart': 'wagon plat avec citerne posée', 'Verbleib': '2017 au Musée des tramways à vapeur et des chemins de fer secondaires français (MTVS), selon la description de la photo' },
  specNote: 'L’année de construction, le poids, la charge utile et la contenance de la citerne ne sont pas établis. La remise au MTVS provient de la description de la photo et n’est confirmée par aucun registre de musée.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Une photo du 1er juin 2014 montre le wagon aux Brenets ; il est désigné TRN Kkl 41. Le constructeur et l’année de construction ne sont pas connus.'] },
      { titel: 'Utilisation et technique', p: ['Une citerne était posée sur la plate-forme. Son usage n’est pas documenté. Le wagon n’est donc pas un wagon-citerne à part entière, mais un wagon plat avec un réservoir posé dessus.', 'Selon la description de la photo, le chemin de fer l’a remis en 2017 au musée français MTVS.'] },
      { titel: 'Équipement et accessibilité', liste: ['Plate-forme de chargement plate', 'Citerne posée dessus (2014)', 'Pas de compartiment voyageurs'] }
    ],
  bilder: ['Kkl 41 avec citerne posée aux Brenets (2014)']
});

/* cartes « Où circule-t-il ? » */
uebEinsatz({
  'trn-tm-2-2-11': 'En service de travaux sur la ligne à voie métrique La Chaux-de-Fonds–Les Ponts-de-Martel. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-tm-237-312': 'En service d’entretien et de manœuvre au Val-de-Travers ; photographié en dernier près du dépôt de Fleurier.',
  'trn-zweiwege': 'En service de travaux sur les lignes à voie métrique La Chaux-de-Fonds–Les Ponts-de-Martel et Le Locle–Les Brenets. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-ast-21': 'Pour des courses spéciales sur les lignes à voie métrique de transN dans les Montagnes neuchâteloises. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-be-4-4-1': 'Autrefois en tête de trains de marchandises et de trains scolaires sur la ligne du RVT au Val-de-Travers. Aujourd’hui, la locomotive appartient à RVT-Historique.',
  'trn-abde-2-4-102': 'Autrefois en service régulier sur la ligne du RVT au Val-de-Travers, aujourd’hui en courses spéciales et de groupes de RVT-Historique.',
  'trn-rbde-106': 'Autrefois sur la ligne du RVT au Val-de-Travers ; louée aux TPF de 2004 à 2013, par exemple à Fribourg. Aujourd’hui en courses de RVT-Historique.',
  'trn-abm-2-5-9': 'De 1924 à 1965 sur le RVT au Val-de-Travers. Aujourd’hui, elle fait partie de la collection du Musée Suisse des Transports à Lucerne.',
  'trn-be-2-4': 'Autrefois sur la ligne interurbaine Neuchâtel–Boudry et vers Cortaillod. Aujourd’hui au Musée du tram de Neuchâtel à Boudry. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-be-2-2': 'Autrefois sur le tram urbain de Neuchâtel, par exemple sur la ligne 3 vers Corcelles. Aujourd’hui, la 73 circule en tram historique vers Boudry, la 76 se trouve à Blonay–Chamby. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-be-4-4-583': 'D’abord sur la ligne urbaine 3 vers Corcelles, dès 1976 sur la ligne interurbaine de Boudry. Aujourd’hui au Musée du tram de Neuchâtel. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-be-4-4-littorail': 'De 1981 à 2019 sur la ligne du Littorail Neuchâtel–Boudry. La 504 se trouve aujourd’hui au Musée du tram de Neuchâtel. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-xe-2-2-601': 'Autrefois en service sur le réseau de tram de Neuchâtel. Aujourd’hui au Musée du tram de Neuchâtel à Boudry. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-tn-wagen': 'Autrefois sur le réseau de tram de Neuchâtel et vers Boudry. Quatre wagons sont au Musée du tram de Neuchâtel, la C4 121 à Blonay–Chamby. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-g-3-3-1': 'De 1890 à 1950 sur la ligne Le Locle–Les Brenets. Aujourd’hui au chemin de fer-musée Blonay–Chamby. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-kkl-41': 'Photographié en 2014 en gare des Brenets, sur la ligne à voie métrique Le Locle–Les Brenets. La voie métrique est tracée en pointillé et simplifiée.'
});
