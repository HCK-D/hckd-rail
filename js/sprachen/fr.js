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
  'Wagen ohne eigenen Antrieb': 'Voitures et wagons sans traction propre',
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
  'Ausserdem zählt GoatCounter einmal pro Browser, ob jemand ein Quiz beendet (und in welchem Level), die Sammlung begonnen oder eine Sichtung eingetragen hat. Dabei wird nur diese Tatsache übermittelt, nicht dein Ergebnis, nicht deine Fahrzeuge und nicht deine Sichtungen. So sehen wir, wie viele Menschen mitmachen.': 'En outre, GoatCounter compte une fois par navigateur si quelqu’un a terminé un quiz (et à quel niveau), commencé la collection ou saisi une observation. Seul ce fait est transmis, pas ton résultat, ni tes véhicules, ni tes observations. Nous voyons ainsi combien de personnes participent.',
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
  'Klassiker von SBB, BLS, RhB, SOB, zb, TPF, MOB und transN, die heute nicht mehr im Alltag fahren. Viele sind bei SBB Historic, der BLS-Stiftung, GFM Historique, RVT-Historique, historic RhB, in Vereinen oder in Museen erhalten.': 'Classiques des CFF, du BLS, des Chemins de fer rhétiques, du SOB, de la zb, des TPF, du MOB et de transN qui ne circulent plus au quotidien. Beaucoup sont conservés par CFF Historic, la Fondation BLS, GFM Historique, RVT-Historique, historic RhB, des associations ou dans des musées.',
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

/* ---- 39-rhb.js ---- */
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
  daten: { 'Bauart': 'locomotive de manœuvre électrique à trois essieux', 'Hersteller': 'RACO (mécanique), BBC (électrique)', 'Länge': '8,64 m hors tampons', 'Leistung': '425 kW (puissance unihoraire)', 'Höchstgeschwindigkeit': '40 km/h (65 km/h en remorque)' },
  specNote: 'Valeurs techniques selon Wikipédia ; lieux d’engagement selon le registre des véhicules moteurs de Haribu (état septembre 2026).',
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
  daten: { 'Bauart': 'locomotive diesel à quatre essieux', 'Antrieb': 'diesel-électrique', 'Motor': 'moteurs diesel Caterpillar', 'Leistung': '350 kW (à 20 km/h)' },
  specNote: 'Valeurs techniques selon Wikipédia (article « Gmf 4/4 ») ; les sources vérifiées ne nomment pas le constructeur. Engagement selon le registre des véhicules moteurs de Haribu.',
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
  daten: { 'Bauart': 'locomotive bimode (électrique et diesel)', 'Länge': '13,89 m hors tampons', 'Leistung': '680 kW en électrique ; diesel 2 × 709 kW (après transformation)' },
  specNote: 'Valeurs selon Wikipédia ; la longueur provient de l’infobox, le texte de l’article indique 13,54 m. Construites en 1966, livrées aux RhB en 1968. Puissance électrique et puissance diesel sont des modes distincts et ne s’additionnent pas.',
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
  daten: { 'Bauart': 'véhicules automoteurs d’extinction et de sauvetage', 'Betreiber': 'RhB, servis par les sapeurs-pompiers de Klosters-Serneus et de Zernez', 'Länge': '18,80 m', 'Antrieb': 'diesel', 'Leistung': '280 kW (moteur diesel)' },
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
  daten: { 'Bauart': 'locomotive électrique à bielles', 'Hersteller': 'SLM ; partie électrique BBC (301–302), MFO (351–355), AEG (391)', 'Länge': '10,80–11,50 m hors tampons', 'Leistung': '419–559 kW (puissance unihoraire, selon la version)', 'Erhalten': '353 (RhB), 391 (Deutsches Technikmuseum Berlin)' },
  specNote: 'Valeurs selon Wikipédia, en fourchette sur toutes les versions. Les versions diffèrent en puissance et en poids ; aucune fiche unique ne vaut pour toutes. La brochure des RhB indique pour la 353 environ 588 kW et 55 km/h.',
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
  daten: { 'Bauart': 'locomotive à vapeur à tender séparé', 'Länge': '13,22–13,97 m hors tampons', 'Gewicht': '58,9–69,7 t avec tender', 'Leistung': '324–588 kW (440–800 ch indiqués)', 'Erhalten': '107 et 108 (RhB) ; 118 Chiang Mai, 123 Bangkok' },
  specNote: 'Valeurs selon Wikipédia. Les livraisons diffèrent ; longueur, poids et puissance sont donc donnés en fourchette, des premières locomotives (101–104) aux suivantes. Les valeurs en ch sont des puissances indiquées.',
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
  daten: { 'Bauart': 'automotrices électriques', 'Betreiber': 'Chemin de fer de la Bernina, dès 1943 RhB', 'Fahrzeugnummern': 'BCe 4/4 1–14, BCFe 4/4 21–23, plus tard ABe 4/4 I 30–38', 'Leistung': '395–440 kW (après transformation 1946–1953)', 'Höchstgeschwindigkeit': '55 km/h (après transformation ; avant 45 km/h)', 'Erhalten': '30 et 34 (RhB), 35 (Blonay–Chamby)' },
  specNote: 'Constructeurs, puissance et vitesse selon Wikipédia. Les années de construction des 30 et 34 diffèrent selon les registres. Les valeurs de la 35 valent pour son état de musée à Blonay–Chamby (900 V).',
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
  daten: { 'Bauart': 'automotrice électrique légère en acier', 'Hersteller': 'SWS (mécanique), BBC et MFO (électrique)', 'Länge': '18,00 m hors tampons', 'Leistung': 'environ 490 kW', 'Sitzplätze': '12 en 1re, 28 en 2e classe', 'Erhalten': '501 (historique)' },
  specNote: 'Puissance et vitesse selon la brochure des RhB « Véhicules historiques » (arrondies) ; longueur, poids et places selon Wikipédia. Wikipédia indique 440 kW de puissance unihoraire.',
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
  daten: { 'Bauart': 'automotrice électrique avec voitures intermédiaires et voitures-pilotes', 'Hersteller': 'FFA (caisse), SIG (bogies), SAAS (électrique)', 'Fahrzeugnummern': '511–516 ; voitures-pilotes ABDt 1711–1716', 'Länge': '18,70 m hors tampons (automotrice)', 'Gewicht': '44,6 t', 'Sitzplätze': '40 en 2e classe (automotrice)', 'Erhalten': '514 au musée à Bergün (selon le registre)' },
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
  daten: { 'Bauart': 'locomotives diesel et automotrice diesel', 'Fahrzeugnummern': 'Gm 3/3 231–233 ; Gm 4/4 241 ; BFm 2/2 150 (ex FO 22)', 'Länge': '7,96 m hors tampons (Gm 3/3)', 'Gewicht': '34 t (Gm 3/3)', 'Leistung': '386 kW moteur diesel, 220 kW à la jante (Gm 3/3)', 'Höchstgeschwindigkeit': '55 km/h (Gm 3/3)', 'Erhalten': 'Gm 3/3 à la DFB ; 241 au Brohltalbahn (D4)' },
  specNote: 'Valeurs des Gm 3/3 selon Wikipédia ; la DFB maintient une Gm 3/3 en état de marche, les deux autres servent de donneuses de pièces. Pour la Gm 4/4 241, les registres indiquent 1958 ou 1959 comme année de construction. Pour la BFm 150, 1947 est l’année de reprise, pas de construction.',
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

/* ---- 40-zb.js ---- */
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

/* ---- 41-mob.js ---- */
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

/* ---- 42-kontakt.js ---- */
/* Français – page «Contact» */
uebDict({
  'Kontakt': 'Contact',
  'Schreib uns': 'Écris-nous',
  'Du hast eine Frage, eine Idee oder möchtest mit uns zusammenarbeiten? Schreib uns hier. Wir antworten an deine E-Mail-Adresse.': 'Tu as une question, une idée ou tu aimerais collaborer avec nous ? Écris-nous ici. Nous te répondons à ton adresse e-mail.',
  'freiwillig': 'facultatif',
  'E-Mail': 'E-mail',
  'Pflicht': 'obligatoire',
  'Thema': 'Sujet',
  'Allgemeine Frage': 'Question générale',
  'Idee oder Vorschlag': 'Idée ou suggestion',
  'Zusammenarbeit': 'Collaboration',
  'Medien und Presse': 'Médias et presse',
  'Nachricht': 'Message',
  'Wie wir mit deinen Angaben umgehen, steht im <a href="#datenschutz">Datenschutz</a>.': 'La manière dont nous traitons tes données est décrite dans la <a href="#datenschutz">protection des données</a>.',
  'Nachricht senden': 'Envoyer le message',
  'Bitte gib deine E-Mail-Adresse an, damit wir dir antworten können.': 'Indique ton adresse e-mail pour que nous puissions te répondre.',
  'Bitte schreib uns eine kurze Nachricht.': 'Écris-nous un court message.',
  'Danke! Deine Nachricht ist angekommen. Wir melden uns per E-Mail.': 'Merci ! Ton message est bien arrivé. Nous te répondrons par e-mail.',
  'Kontakt: über das <a href="#kontakt">Kontaktformular</a>. Nachrichten kommen direkt bei uns an.': 'Contact : via le <a href="#kontakt">formulaire de contact</a>. Les messages nous parviennent directement.',
  'Kontaktformular': 'Formulaire de contact',
  'Vorname': 'Prénom',
  'Bitte gib deinen Vornamen an.': 'Indique ton prénom.',
  'Nachname': 'Nom',
  'Bitte gib deinen Nachnamen an.': 'Indique ton nom de famille.',
  'Schreibst du uns über das Kontaktformular, übermitteln wir deinen Vornamen und Namen, deine E-Mail-Adresse, deine Nachricht und das gewählte Thema ebenfalls über Web3Forms an unser Postfach. Name und E-Mail-Adresse brauchen wir, um dir persönlich zu antworten. Wir nutzen die Angaben nur dafür und löschen sie, wenn sie nicht mehr gebraucht werden.': 'Si tu nous écris via le formulaire de contact, nous transmettons ton prénom et ton nom, ton adresse e-mail, ton message et le sujet choisi, également via Web3Forms, à notre boîte de réception. Nous avons besoin du nom et de l’adresse e-mail pour te répondre personnellement. Nous utilisons ces données uniquement dans ce but et les supprimons lorsqu’elles ne sont plus nécessaires.'
});
