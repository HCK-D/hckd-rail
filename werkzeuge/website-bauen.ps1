# RailBase – fertige Website für GitHub Pages bauen
# Erzeugt den Ordner "docs" mit:
#   - index.html und einer eigenen HTML-Datei pro Fahrzeug, Kategorie, Impressum, Datenschutz und Vergleich
#     (z. B. re-460.html), jede mit eigenem Titel, Beschreibung und Vorschaubild für Google und Messenger
#   - dieselben Seiten auf Französisch, Italienisch und Englisch (re-460.fr.html, index.it.html, ...)
#   - css, js, bilder und der selbst gehosteten Schrift (keine Verbindung zu Google Fonts)
#   - sitemap.xml, robots.txt, 404.html, .nojekyll und bei eigener Domain die Datei CNAME
# Die Adresse der Website steht in werkzeuge\website-adresse.txt (z. B. https://name.github.io/hckd-rail/ oder https://www.meine-domain.ch/).
# Aufruf im Projektordner:  powershell -ExecutionPolicy Bypass -File werkzeuge\website-bauen.ps1
$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent
$out = Join-Path $root 'docs'
$utf8 = New-Object Text.UTF8Encoding($false)
function Write-Utf8([string]$path, [string]$text) { [IO.File]::WriteAllText($path, $text, $utf8) }
function Esc([string]$s) { $s.Replace('&', '&amp;').Replace('<', '&lt;').Replace('>', '&gt;').Replace('"', '&quot;') }

# ---------- Adresse der Website ----------
$adrFile = Join-Path $PSScriptRoot 'website-adresse.txt'
$base = ''
if (Test-Path $adrFile) { $base = ((Get-Content $adrFile -Encoding UTF8) | Where-Object { $_ -match '^\s*https?://' } | Select-Object -First 1) }
if ($base) { $base = $base.Trim(); if (-not $base.EndsWith('/')) { $base += '/' } }
if ($base -match 'BENUTZERNAME') { $base = '' }

# ---------- Sprachen ----------
# Zuerst die Übersetzungen zusammensetzen (sprachen\xx\*.js -> js\sprachen\xx.js)
& (Join-Path $PSScriptRoot 'sprachen-bauen.ps1') -Projekt $root | Out-Null
$sprachen = 'de', 'fr', 'it', 'en'
$hreflang = @{ de = 'de-CH'; fr = 'fr-CH'; it = 'it-CH'; en = 'en' }
$ogLocale = @{ de = 'de_CH'; fr = 'fr_CH'; it = 'it_CH'; en = 'en_GB' }
# Texte, die nur in den Seitenköpfen stehen (Titel und Beschreibung für Google und Messenger)
$fix = @{
  de = @{ start = 'RailBase – Train Database für SBB Personenverkehr, Cargo, Infrastruktur, Rangier- sowie Dienst- und Spezialfahrzeuge.'; zug = 'Technische Daten, Geschichte und Bilder.'
          impressum = 'Impressum'; impressumText = 'Impressum, Haftung und Bildnachweis von RailBase.'
          datenschutz = 'Datenschutz'; datenschutzText = 'Datenschutzerklärung von RailBase: keine Cookies, keine Werbung, nur anonyme Besucherzählung.'
          vergleich = 'Fahrzeuge vergleichen'; vergleichText = 'Bis zu drei Schweizer Bahnfahrzeuge nebeneinander vergleichen.'
          neu = 'Neu und aktualisiert'; neuText = 'Die letzten Ergänzungen bei RailBase: neue Fahrzeuge, neue Fotos und neue Funktionen.'
          sammlung = 'Meine Sammlung'; sammlungText = 'Gesehene Fahrzeuge, Sichtungen und Entdecker-Abzeichen bei RailBase.'
          erkennen = 'FLIRT 521, 522, 523 oder 524?';erkennenText = 'So unterscheidest du die FLIRT-Baureihen 521, 522, 523 und 524 der SBB: Nummer, Strom, Farben und Einsatzgebiet.'
          danke = 'Danke'; dankeText = 'Danke an die Bahnfotografen und an alle, die bei RailBase mithelfen, auch bei der Informatik. Und wie du selbst mithelfen kannst.'
          kontakt = 'Kontakt'; kontaktText = 'Schreib RailBase: Fragen, Ideen und Zusammenarbeit über das Kontaktformular.'
          spurweite = 'Normalspur oder Meterspur'; spurweiteText = 'Zwei Führerstandsfahrten auf Normalspur (1435 mm) und Meterspur (1000 mm), mit Live-Fahrdaten.'
          'neu-fahrzeuge' = 'Neue Fahrzeuge'; 'neu-fahrzeugeText' = 'Alle Fahrzeuge, die neu bei RailBase dazugekommen sind, die neuesten zuoberst.'
          'neu-fotos' = 'Neue Fahrzeugfotos'; 'neu-fotosText' = 'Fahrzeuge mit neuen Fotos bei RailBase.'
          'neu-daten' = 'Aktualisierte Daten'; 'neu-datenText' = 'Was bei RailBase korrigiert oder ergänzt wurde, Fahrzeug für Fahrzeug erklärt.'
          'fotos-gesucht' = 'Fotos gesucht'; 'fotos-gesuchtText' = 'Für diese Schweizer Bahnfahrzeuge sucht RailBase noch Fotos. Schick uns deine Bilder.' }
  fr = @{ start = 'RailBase – Train Database des CFF : voyageurs, Cargo, infrastructure, véhicules de manœuvre, de service et spéciaux.'; zug = 'Caractéristiques techniques, histoire et images.'
          impressum = 'Mentions légales'; impressumText = 'Mentions légales, responsabilité et crédits photo de RailBase.'
          datenschutz = 'Protection des données'; datenschutzText = 'Protection des données chez RailBase : pas de cookies, pas de publicité, seulement un comptage anonyme des visites.'
          vergleich = 'Comparer des véhicules'; vergleichText = "Comparer jusqu’à trois véhicules ferroviaires suisses côte à côte."
          neu = 'Nouveautés et mises à jour'; neuText = 'Les derniers ajouts sur RailBase : nouveaux véhicules, nouvelles photos et nouvelles fonctions.'
          sammlung = 'Ma collection'; sammlungText = "Véhicules vus, observations et badges d’explorateur sur RailBase."
          erkennen = 'FLIRT 521, 522, 523 ou 524 ?';erkennenText = "Comment distinguer les séries FLIRT 521, 522, 523 et 524 des CFF : numéro, courant, couleurs et région d’engagement."
          danke = 'Merci'; dankeText = 'Merci aux photographes ferroviaires et à toutes les personnes qui aident RailBase, y compris en informatique. Et comment tu peux aider toi aussi.'
          kontakt = 'Contact'; kontaktText = 'Écris à RailBase : questions, idées et collaboration via le formulaire de contact.'
          spurweite = 'Voie normale ou voie métrique'; spurweiteText = 'Deux trajets en cabine de conduite sur voie normale (1435 mm) et voie métrique (1000 mm), avec données de marche en direct.'
          'neu-fahrzeuge' = 'Nouveaux véhicules'; 'neu-fahrzeugeText' = 'Tous les véhicules ajoutés sur RailBase, les plus récents en haut.'
          'neu-fotos' = 'Nouvelles photos de véhicules'; 'neu-fotosText' = 'Véhicules avec de nouvelles photos sur RailBase.'
          'neu-daten' = 'Données mises à jour'; 'neu-datenText' = 'Ce qui a été corrigé ou complété sur RailBase, véhicule par véhicule.'
          'fotos-gesucht' = 'Photos recherchées'; 'fotos-gesuchtText' = 'RailBase cherche encore des photos de ces véhicules ferroviaires suisses. Envoie-nous tes images.' }
  it = @{ start = 'RailBase – Train Database delle FFS: viaggiatori, Cargo, infrastruttura, veicoli di manovra, di servizio e speciali.'; zug = 'Dati tecnici, storia e immagini.'
          impressum = 'Note legali'; impressumText = 'Note legali, responsabilità e crediti fotografici di RailBase.'
          datenschutz = 'Protezione dei dati'; datenschutzText = 'Protezione dei dati su RailBase: nessun cookie, nessuna pubblicità, solo un conteggio anonimo delle visite.'
          vergleich = 'Confronta veicoli'; vergleichText = "Confronta fino a tre veicoli ferroviari svizzeri uno accanto all’altro."
          neu = 'Novità e aggiornamenti'; neuText = 'Le ultime aggiunte su RailBase: nuovi veicoli, nuove foto e nuove funzioni.'
          sammlung = 'La mia collezione'; sammlungText = 'Veicoli visti, avvistamenti e distintivi da esploratore su RailBase.'
          erkennen = 'FLIRT 521, 522, 523 o 524?';erkennenText = "Come distinguere le serie FLIRT 521, 522, 523 e 524 delle FFS: numero, corrente, colori e zona d’impiego."
          danke = 'Grazie'; dankeText = 'Grazie ai fotografi ferroviari e a tutte le persone che aiutano RailBase, anche per la parte informatica. E come puoi aiutare anche tu.'
          kontakt = 'Contatto'; kontaktText = 'Scrivi a RailBase: domande, idee e collaborazioni tramite il modulo di contatto.'
          spurweite = 'Scartamento normale o metrico'; spurweiteText = 'Due viaggi in cabina di guida su scartamento normale (1435 mm) e metrico (1000 mm), con dati di marcia in tempo reale.'
          'neu-fahrzeuge' = 'Nuovi veicoli'; 'neu-fahrzeugeText' = 'Tutti i veicoli aggiunti su RailBase, i più recenti in alto.'
          'neu-fotos' = 'Nuove foto di veicoli'; 'neu-fotosText' = 'Veicoli con nuove foto su RailBase.'
          'neu-daten' = 'Dati aggiornati'; 'neu-datenText' = 'Cosa è stato corretto o completato su RailBase, veicolo per veicolo.'
          'fotos-gesucht' = 'Foto cercate'; 'fotos-gesuchtText' = 'RailBase cerca ancora foto di questi veicoli ferroviari svizzeri. Inviaci le tue immagini.' }
  en = @{ start = 'RailBase – Train Database for SBB passenger, Cargo, infrastructure, shunting, service and special vehicles.'; zug = 'Technical data, history and pictures.'
          impressum = 'Legal notice'; impressumText = 'Legal notice, liability and picture credits of RailBase.'
          datenschutz = 'Privacy'; datenschutzText = 'RailBase privacy policy: no cookies, no advertising, only anonymous visitor counting.'
          vergleich = 'Compare vehicles'; vergleichText = 'Compare up to three Swiss railway vehicles side by side.'
          neu = 'New and updated'; neuText = 'The latest additions to RailBase: new vehicles, new photos and new features.'
          sammlung = 'My collection'; sammlungText = 'Vehicles seen, sightings and explorer badges on RailBase.'
          erkennen = 'FLIRT 521, 522, 523 or 524?';erkennenText = 'How to tell the SBB FLIRT classes 521, 522, 523 and 524 apart: number, power system, colours and area of service.'
          danke = 'Thank you'; dankeText = 'Thank you to the railway photographers and everyone who helps RailBase, including with IT. And how you can help too.'
          kontakt = 'Contact'; kontaktText = 'Write to RailBase: questions, ideas and collaboration through the contact form.'
          spurweite = 'Standard gauge or metre gauge'; spurweiteText = 'Two cab rides on standard gauge (1435 mm) and metre gauge (1000 mm), with live running data.'
          'neu-fahrzeuge' = 'New vehicles'; 'neu-fahrzeugeText' = 'All vehicles added to RailBase, the newest first.'
          'neu-fotos' = 'New vehicle photos'; 'neu-fotosText' = 'Vehicles with new photos on RailBase.'
          'neu-daten' = 'Updated data'; 'neu-datenText' = 'What was corrected or added on RailBase, vehicle by vehicle.'
          'fotos-gesucht' = 'Photos wanted'; 'fotos-gesuchtText' = 'RailBase is still looking for photos of these Swiss railway vehicles. Send us your pictures.' }
}
# Übersetzte Kategorienamen und Fahrzeugtypen aus js\sprachen\xx.js lesen
$jsStr = '''((?:[^''\\]|\\.)*)'''
function Unjs([string]$s) { $s.Replace("\'", "'").Replace('\\', '\') }
$uebDict = @{}; $uebZug = @{}
foreach ($l in $sprachen) {
  $d = New-Object Collections.Hashtable ([StringComparer]::Ordinal); $z = @{}
  if ($l -ne 'de') {
    $js = [IO.File]::ReadAllText((Join-Path $root "js\sprachen\$l.js"), [Text.Encoding]::UTF8)
    foreach ($m in [regex]::Matches($js, "$jsStr\s*:\s*$jsStr")) { $k = Unjs $m.Groups[1].Value; if (-not $d.ContainsKey($k)) { $d[$k] = Unjs $m.Groups[2].Value } }
    foreach ($m in [regex]::Matches($js, "uebZug\('([^']+)', \{\s*(?:name: $jsStr,\s*)?(?:beiname: $jsStr,\s*)?typ: $jsStr")) {
      $z[$m.Groups[1].Value] = [pscustomobject]@{
        name = if ($m.Groups[2].Success) { Unjs $m.Groups[2].Value } else { $null }
        bei = if ($m.Groups[3].Success) { Unjs $m.Groups[3].Value } else { $null }
        typ = Unjs $m.Groups[4].Value }
    }
  }
  $uebDict[$l] = $d; $uebZug[$l] = $z
}
function Tr([string]$l, [string]$s) { if ($uebDict[$l].ContainsKey($s)) { $uebDict[$l][$s] } else { $s } }
# Dateiname einer Seite: re-460.html (Deutsch), re-460.fr.html, index.it.html ...
function Datei([string]$l, [string]$id) { $suf = if ($l -eq 'de') { '' } else { ".$l" }; if ($id) { "$id$suf.html" } else { "index$suf.html" } }
function Adresse([string]$l, [string]$id) { if (-not $id -and $l -eq 'de') { $base } else { $base + (Datei $l $id) } }

if (Test-Path $out) { Remove-Item -Recurse -Force $out }
New-Item -ItemType Directory $out | Out-Null

# ---------- Seite zerlegen ----------
$page = [IO.File]::ReadAllText((Join-Path $root 'index.html'), [Text.Encoding]::UTF8)
# Alles vor den SVG-Symbolen (title, meta, Stylesheets) gehört in den <head>
$cut = $page.IndexOf('<svg width="0"')
$head = $page.Substring(0, $cut).Trim()
$body = $page.Substring($cut).Trim()
# Google Fonts durch die selbst gehostete Schrift ersetzen
$head = [regex]::Replace($head, '<link rel="preconnect" href="https://fonts\.(googleapis|gstatic)\.com"[^>]*>\s*', '')
$head = [regex]::Replace($head, '<link rel="stylesheet" href="https://fonts\.googleapis\.com[^"]*">',
  '<link rel="preload" href="schrift/source-sans-3-latin.woff2" as="font" type="font/woff2" crossorigin>' + "`n" + '<link rel="stylesheet" href="css/schrift.css">')
# title und description kommen pro Seite neu dazu
$head = [regex]::Replace($head, '<title>[^<]*</title>\s*', '')
$head = [regex]::Replace($head, '<meta name="description"[^>]*>\s*', '')
$head = [regex]::Replace($head, '<meta name="claude:[^>]*>\s*', '')
# entspricht dem Grundgerüst, das claude.ai beim Veröffentlichen ergänzt
$reset = ':root{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}html{scroll-padding-top:env(safe-area-inset-top,0px)}body{margin:0;padding:0;font:14px -apple-system,BlinkMacSystemFont,sans-serif}img{max-width:100%}[hidden]:not([hidden=until-found i]){display:none!important}'

# ---------- Seitenliste aus den Fahrzeugdaten ----------
# SBB-Fahrzeuge plus BLS, RhB, SOB, TPF, transN, MOB und zb (eigene Dateien, gleiche Form)
$daten = (('fahrzeuge.js', 'bls.js', 'tpf.js', 'sob.js', 'transn.js', 'rhb.js', 'mob.js', 'zb.js') | ForEach-Object { $p = Join-Path $root "js\daten\$_"; if (Test-Path $p) { [IO.File]::ReadAllText($p, [Text.Encoding]::UTF8) } }) -join "`n"
$seiten = New-Object System.Collections.ArrayList
$katName = @{}
foreach ($m in [regex]::Matches($daten, "\{ id: '([^']+)', code: '[^']*', name: '([^']+)', text: '([^']*)'")) {
  $katName[$m.Groups[1].Value] = $m.Groups[2].Value
  [void]$seiten.Add([pscustomobject]@{ art = 'kat'; id = $m.Groups[1].Value; name = $m.Groups[2].Value; text = $m.Groups[3].Value; bild = ''; prio = '0.8' })
}
$zm = [regex]::Matches($daten, "\{ id: '([^']+)', kat: '([^']+)',(?: gruppe: '[^']*',)? name: '([^']+)', beiname: '([^']*)', typ: '([^']*)'")
for ($i = 0; $i -lt $zm.Count; $i++) {
  $m = $zm[$i]
  $ende = if ($i + 1 -lt $zm.Count) { $zm[$i + 1].Index } else { $daten.Length }
  $chunk = $daten.Substring($m.Index, $ende - $m.Index)
  $bild = [regex]::Match($chunk, "src: '(bilder/[^']+)'").Groups[1].Value
  [void]$seiten.Add([pscustomobject]@{ art = 'zug'; id = $m.Groups[1].Value; kat = $m.Groups[2].Value; name = $m.Groups[3].Value; bei = $m.Groups[4].Value; typ = $m.Groups[5].Value; bild = $bild; prio = '0.7' })
}
[void]$seiten.Add([pscustomobject]@{ art = 'fix'; id = 'impressum'; bild = ''; prio = '0.2' })
[void]$seiten.Add([pscustomobject]@{ art = 'fix'; id = 'datenschutz'; bild = ''; prio = '0.2' })
[void]$seiten.Add([pscustomobject]@{ art = 'fix'; id = 'vergleich'; bild = ''; prio = '' })
[void]$seiten.Add([pscustomobject]@{ art = 'fix'; id = 'neu'; bild = ''; prio = '0.5' })
[void]$seiten.Add([pscustomobject]@{ art = 'fix'; id = 'sammlung'; bild = ''; prio = '' })
[void]$seiten.Add([pscustomobject]@{ art = 'fix'; id = 'erkennen'; bild = 'bilder/rabe-523-c1.jpg'; prio = '0.6' })
[void]$seiten.Add([pscustomobject]@{ art = 'fix'; id = 'danke'; bild = ''; prio = '0.3' })
[void]$seiten.Add([pscustomobject]@{ art = 'fix'; id = 'kontakt'; bild = ''; prio = '0.3' })
[void]$seiten.Add([pscustomobject]@{ art = 'fix'; id = 'spurweite'; bild = ''; prio = '0.5' })
foreach ($nd in 'neu-fahrzeuge', 'neu-fotos', 'neu-daten', 'fotos-gesucht') { [void]$seiten.Add([pscustomobject]@{ art = 'fix'; id = $nd; bild = ''; prio = '0.4' }) }

# Titel und Beschreibung einer Seite in einer Sprache
function Kopf([string]$l, $s) {
  switch ($s.art) {
    'kat' { return @((Tr $l $s.name), (Tr $l $s.text)) }
    'zug' {
      $u = $uebZug[$l][$s.id]
      $bei = if ($u -and $null -ne $u.bei) { $u.bei } else { Tr $l $s.bei }
      $typ = if ($u) { $u.typ } else { $s.typ }
      $name = if ($u -and $u.name) { $u.name } else { $s.name }
      $titel = if ($bei) { "$name «$bei»" } else { $name }
      return @($titel, "$titel`: $typ ($(Tr $l $katName[$s.kat])). $($fix[$l].zug)")
    }
    default { return @($fix[$l][$s.id], $fix[$l][$s.id + 'Text']) }
  }
}

# ---------- HTML-Dateien schreiben ----------
function Build-Page([string]$l, [string]$start, [string]$titel, [string]$text, [string]$bild) {
  $datei = Datei $l $start
  $meta = "<title>$(Esc $titel)</title>`n<meta name=`"description`" content=`"$(Esc $text)`">`n"
  $meta += "<meta property=`"og:site_name`" content=`"RailBase`">`n<meta property=`"og:type`" content=`"website`">`n<meta property=`"og:locale`" content=`"$($ogLocale[$l])`">`n"
  $meta += "<meta property=`"og:title`" content=`"$(Esc $titel)`">`n<meta property=`"og:description`" content=`"$(Esc $text)`">`n"
  if ($base) {
    $url = Adresse $l $start
    $meta += "<link rel=`"canonical`" href=`"$url`">`n<meta property=`"og:url`" content=`"$url`">`n"
    # dieselbe Seite in den anderen Sprachen (für Google)
    foreach ($a in $sprachen) { $meta += "<link rel=`"alternate`" hreflang=`"$($hreflang[$a])`" href=`"$(Adresse $a $start)`">`n" }
    $meta += "<link rel=`"alternate`" hreflang=`"x-default`" href=`"$(Adresse 'de' $start)`">`n"
    $img = if ($bild) { $bild } else { 'bilder/slides/slide-01.jpg' }
    $meta += "<meta property=`"og:image`" content=`"$base$img`">`n<meta property=`"og:image:alt`" content=`"$(Esc $titel)`">`n<meta name=`"twitter:card`" content=`"summary_large_image`">`n"
    # Vorschaukarte eines Fahrzeugs (siehe unten): Grösse angeben, dann zeigen Messenger sie sofort gross an
    if ($img -like 'bilder/teilen/*') { $meta += "<meta property=`"og:image:width`" content=`"1200`">`n<meta property=`"og:image:height`" content=`"630`">`n<meta property=`"og:image:type`" content=`"image/jpeg`">`n" }
    # Startseite: Name der Website für Google (erscheint dann als «RailBase» über dem Suchtreffer)
    if (-not $start) { $meta += "<script type=`"application/ld+json`">{`"@context`":`"https://schema.org`",`"@type`":`"WebSite`",`"name`":`"RailBase`",`"alternateName`":[`"RailBase Train Database`",`"railbase.ch`"],`"url`":`"$base`"}</script>`n<script type=`"application/ld+json`">{`"@context`":`"https://schema.org`",`"@type`":`"Organization`",`"name`":`"RailBase`",`"url`":`"$base`",`"logo`":`"${base}bilder/app/icon-512.png`"}</script>`n" }
  }
  if ($start -eq 'vergleich' -or $start -eq 'sammlung') { $meta +="<meta name=`"robots`" content=`"noindex`">`n" }
  # Favicon: SVG für Browser, dazu PNG (192 px, ein Vielfaches von 48 px wie von Google verlangt) und favicon.ico
  $meta += "<link rel=`"icon`" href=`"favicon.svg`" type=`"image/svg+xml`">`n<link rel=`"icon`" href=`"bilder/app/icon-192.png`" sizes=`"192x192`" type=`"image/png`">`n<link rel=`"icon`" href=`"favicon.ico`" sizes=`"48x48`">`n"
  # als App installierbar (manifest.webmanifest, sw.js und js/app.js)
  $meta += "<link rel=`"manifest`" href=`"manifest.webmanifest`">`n<meta name=`"theme-color`" content=`"#D71920`">`n"
  $meta += "<link rel=`"apple-touch-icon`" href=`"bilder/app/apple-touch-icon.png`">`n<meta name=`"apple-mobile-web-app-capable`" content=`"yes`">`n<meta name=`"apple-mobile-web-app-title`" content=`"RailBase`">`n"
  # HCKD_SEITEN: Links zeigen auf die einzelnen Dateien (re-460.html statt #re-460)
  # HCKD_START: welche Ansicht ohne # gezeigt wird; HCKD_LANG: Sprache dieser Datei
  $js = "window.HCKD_SEITEN=true;window.HCKD_LANG='$l';"
  if ($start) { $js += "window.HCKD_START='$start';" }
  $meta += "<script>$js</script>`n"
  $html = "<!doctype html>`n<html lang=`"$($hreflang[$l])`">`n<head>`n<meta charset=`"utf-8`">`n<meta name=`"viewport`" content=`"width=device-width,initial-scale=1,viewport-fit=cover`">`n<style>$reset</style>`n$meta$head`n</head>`n<body>`n$body`n</body>`n</html>`n"
  Write-Utf8 (Join-Path $out $datei) $html
}
foreach ($l in $sprachen) {
  Build-Page $l '' 'RailBase – Train Database' $fix[$l].start ''
  # Fahrzeuge mit Foto teilen sich mit ihrer eigenen Vorschaukarte (bilder/teilen/<id>.jpg)
  foreach ($s in $seiten) { $k = Kopf $l $s; Build-Page $l $s.id "$($k[0]) · RailBase" $k[1] $(if ($s.art -eq 'zug' -and $s.bild) { "bilder/teilen/$($s.id).jpg" } else { $s.bild }) }
}

# ---------- Dateien kopieren ----------
foreach ($d in 'css', 'js', 'bilder', 'schrift') { Copy-Item -Recurse (Join-Path $root $d) (Join-Path $out $d) }
# Google und ältere Browser fragen direkt nach /favicon.ico (48 × 48 px, aus bilder/app/icon-192.png)
Copy-Item (Join-Path $root 'bilder\app\favicon.ico') (Join-Path $out 'favicon.ico')
# Browser-Symbol aus dem Logo: quadratisch, weisse Fläche, Gleis dunkel
$logo = [regex]::Match($body, '<symbol id="logo" viewBox="([^"]+)">([\s\S]*?)</symbol>')
if ($logo.Success) {
  $pfade = $logo.Groups[2].Value.Trim().Replace('currentColor', '#202326')
  Write-Utf8 (Join-Path $out 'favicon.svg') "<svg xmlns=`"http://www.w3.org/2000/svg`" viewBox=`"-16 -166 600 600`"><rect x=`"-16`" y=`"-166`" width=`"600`" height=`"600`" rx=`"120`" fill=`"#fff`"/>$pfade</svg>`n"
}
# GitHub Pages: Dateien unverändert ausliefern
Write-Utf8 (Join-Path $out '.nojekyll') ''

# ---------- Vorschaukarten zum Teilen (1200 × 630 Pixel) ----------
# Teilt jemand einen Fahrzeug-Link in WhatsApp, Instagram usw., erscheint dieses Bild: das erste Foto,
# darauf der Name des Fahrzeugs und «RailBase». Fertige Karten liegen im Zwischenspeicher
# werkzeuge\cache-teilen (nicht auf GitHub) und werden nur neu gezeichnet, wenn sich Foto oder Name ändern.
Add-Type -AssemblyName System.Drawing
$cache = Join-Path $PSScriptRoot 'cache-teilen'
New-Item -ItemType Directory -Force $cache | Out-Null
$teilenOut = Join-Path $out 'bilder\teilen'
New-Item -ItemType Directory -Force $teilenOut | Out-Null
$jpgCodec = [Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$jpgParam = New-Object Drawing.Imaging.EncoderParameters 1
$jpgParam.Param[0] = New-Object Drawing.Imaging.EncoderParameter ([Drawing.Imaging.Encoder]::Quality), ([long]78)
$typo = [Drawing.StringFormat]::GenericTypographic
$schatten = New-Object Drawing.SolidBrush ([Drawing.Color]::FromArgb(150, 0, 0, 0))
# Text mit weichem Schatten, damit er auch auf hellen Fotos lesbar bleibt
function Text([Drawing.Graphics]$g, [string]$t, $f, $farbe, [float]$x, [float]$y) { $g.DrawString($t, $f, $schatten, $x + 2, $y + 3, $typo); $g.DrawString($t, $f, $farbe, $x, $y, $typo) }
$md5 = [Security.Cryptography.MD5]::Create()
function Schrift([Drawing.Graphics]$g, [string]$text, [float]$start, [float]$max, [Drawing.FontStyle]$stil) {
  $gr = $start
  while ($gr -gt 20) { $f = New-Object Drawing.Font('Segoe UI', $gr, $stil, [Drawing.GraphicsUnit]::Pixel); if ($g.MeasureString($text, $f, 5000, $typo).Width -le $max) { return $f }; $f.Dispose(); $gr -= 2 }
  return New-Object Drawing.Font('Segoe UI', $gr, $stil, [Drawing.GraphicsUnit]::Pixel)
}
$neuGezeichnet = 0
foreach ($s in ($seiten | Where-Object { $_.art -eq 'zug' -and $_.bild })) {
  $quelle = Join-Path $root ($s.bild -replace '/', '\')
  if (-not (Test-Path $quelle)) { continue }
  $schluessel = "$($s.bild)|$([IO.File]::GetLastWriteTimeUtc($quelle).Ticks)|$($s.name)|$($s.bei)|v3"
  $hash = (($md5.ComputeHash([Text.Encoding]::UTF8.GetBytes($schluessel)) | Select-Object -First 5 | ForEach-Object { $_.ToString('x2') }) -join '')
  $karte = Join-Path $cache "$($s.id)-$hash.jpg"
  if (-not (Test-Path $karte)) {
    Get-ChildItem $cache -Filter "$($s.id)-*.jpg" | Remove-Item -Force
    $foto = [Drawing.Image]::FromFile($quelle)
    $bmp = New-Object Drawing.Bitmap 1200, 630
    $g = [Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = 'AntiAlias'; $g.InterpolationMode = 'HighQualityBicubic'; $g.TextRenderingHint = 'AntiAliasGridFit'
    # Foto füllt die Karte (überstehende Ränder werden abgeschnitten)
    $f = [Math]::Max(1200 / $foto.Width, 630 / $foto.Height)
    $g.DrawImage($foto, [float]((1200 - $foto.Width * $f) / 2), [float]((630 - $foto.Height * $f) / 2), [float]($foto.Width * $f), [float]($foto.Height * $f))
    # dunkler Verlauf unten, damit die Schrift gut lesbar ist
    $verlauf = [Drawing.Drawing2D.LinearGradientBrush]::new([Drawing.Point]::new(0, 280), [Drawing.Point]::new(0, 631), [Drawing.Color]::FromArgb(0, 10, 12, 16), [Drawing.Color]::FromArgb(225, 10, 12, 16))
    $g.FillRectangle($verlauf, 0, 281, 1200, 349)
    # «RailBase» oben links auf weisser Fläche mit rotem Rand
    $fMarke = New-Object Drawing.Font('Segoe UI', 30, [Drawing.FontStyle]::Bold, [Drawing.GraphicsUnit]::Pixel)
    $wRail = $g.MeasureString('Rail', $fMarke, 500, $typo).Width; $wBase = $g.MeasureString('Base', $fMarke, 500, $typo).Width
    $g.FillRectangle([Drawing.Brushes]::White, 40, 36, [int]($wRail + $wBase + 34), 54)
    $g.FillRectangle((New-Object Drawing.SolidBrush ([Drawing.Color]::FromArgb(215, 25, 32))), 40, 36, 6, 54)
    $g.DrawString('Rail', $fMarke, (New-Object Drawing.SolidBrush ([Drawing.Color]::FromArgb(32, 35, 38))), 60, 46, $typo)
    $g.DrawString('Base', $fMarke, (New-Object Drawing.SolidBrush ([Drawing.Color]::FromArgb(215, 25, 32))), [float](60 + $wRail), 46, $typo)
    # Name (und Beiname) unten links, zu lange Namen werden kleiner
    $weiss = [Drawing.Brushes]::White
    $hell = New-Object Drawing.SolidBrush ([Drawing.Color]::FromArgb(230, 234, 238))
    $fName = Schrift $g $s.name 80 1110 ([Drawing.FontStyle]::Bold)
    if ($s.bei) {
      $fBei = Schrift $g "«$($s.bei)»" 44 1110 ([Drawing.FontStyle]::Regular)
      Text $g $s.name $fName $weiss 40 ([float](548 - $fName.Size * 1.2 - $fBei.Size * 1.25))
      Text $g "«$($s.bei)»" $fBei $hell 42 ([float](548 - $fBei.Size * 1.25))
    } else {
      Text $g $s.name $fName $weiss 40 ([float](548 - $fName.Size * 1.2))
    }
    $fAdr = New-Object Drawing.Font('Segoe UI', 24, [Drawing.FontStyle]::Bold, [Drawing.GraphicsUnit]::Pixel)
    Text $g 'railbase.ch' $fAdr $hell 42 568
    $bmp.Save($karte, $jpgCodec, $jpgParam)
    $g.Dispose(); $bmp.Dispose(); $foto.Dispose()
    $neuGezeichnet++
  }
  Copy-Item $karte (Join-Path $teilenOut "$($s.id).jpg")
}
Write-Host "Vorschaukarten: $neuGezeichnet neu gezeichnet"

# ---------- App (PWA) ----------
# Symbole: bilder\app\*.png (neu zeichnen mit werkzeuge\app-symbole.ps1)
$manifest = @'
{
  "id": "./",
  "name": "RailBase – Train Database",
  "short_name": "RailBase",
  "description": "Schweizer Bahnfahrzeuge: Technik, Geschichte, Bilder, Abfahrten und Quiz.",
  "lang": "de-CH",
  "start_url": "./",
  "scope": "./",
  "display": "standalone",
  "background_color": "#F5F6F7",
  "theme_color": "#D71920",
  "icons": [
    { "src": "bilder/app/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any" },
    { "src": "bilder/app/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any" },
    { "src": "bilder/app/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
'@
Write-Utf8 (Join-Path $out 'manifest.webmanifest') $manifest
# Service Worker: Seiten zuerst aus dem Netz (sonst aus dem Speicher), alles andere aus dem Speicher.
# Die Version ändert sich bei jedem Bauen; dann wird der alte Speicher gelöscht und alles neu geladen.
$sw = @'
/* RailBase – Service Worker (automatisch erzeugt von werkzeuge\website-bauen.ps1) */
'use strict';
const V = 'hckd-__VERSION__';
self.addEventListener('install', e => {
  // cache: 'reload' = directly from the server, never an older copy from the browser cache
  e.waitUntil(caches.open(V).then(c => c.addAll(['./', 'index.html', 'manifest.webmanifest'].map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
const merke = (req, res) => { if (res.ok && res.type === 'basic') { const c = res.clone(); caches.open(V).then(k => k.put(req, c)); } return res; };
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(res => merke(req, res))
      .catch(() => caches.match(req, { ignoreSearch: true }).then(m => m || caches.match('index.html'))));
    return;
  }
  // first use after an update: ask the server whether the file is new (no-cache), so no outdated copy is kept
  e.respondWith(caches.match(req).then(m => m || fetch(new Request(req, { cache: 'no-cache' })).then(res => merke(req, res))));
});
'@
Write-Utf8 (Join-Path $out 'sw.js') $sw.Replace('__VERSION__', (Get-Date -Format 'yyyyMMddHHmmss'))
# Eigene Domain: GitHub Pages braucht die Datei CNAME im docs-Ordner (bei *.github.io nicht)
if ($base -match '^https?://([^/]+)/' -and $Matches[1] -notmatch '\.github\.io$') { Write-Utf8 (Join-Path $out 'CNAME') ($Matches[1] + "`n") }
# Bestätigung der Google Search Console (Datei muss genau so bleiben, sonst verliert railbase.ch die Bestätigung)
Write-Utf8 (Join-Path $out 'googleef863c8922f18742.html') 'google-site-verification: googleef863c8922f18742.html'

# ---------- 404, sitemap, robots ----------
$startUrl = if ($base) { $base } else { './' }
# Fehlerseite mit Vorschlägen: Aus der falschen Adresse wird das ähnlichste Fahrzeug erraten,
# dazu ein Suchfeld über alle Fahrzeuge und die Kategorien. Listen: [id, Name, Beiname] und [id, Kategorie]
$liste404 = ($seiten | Where-Object { $_.art -eq 'zug' } | ForEach-Object { '["' + $_.id + '","' + ($_.name -replace '["\\]', '') + '","' + ($_.bei -replace '["\\]', '') + '"]' }) -join ','
$kats404 = ($sprachen | ForEach-Object { $sp = $_; $sp + ':[' + (($seiten | Where-Object { $_.art -eq 'kat' } | ForEach-Object { '["' + $_.id + '","' + ((Tr $sp $_.name) -replace '["\\]', '') + '"]' }) -join ',') + ']' }) -join ','
$p404 = @"
<!doctype html>
<html lang="de-CH">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>Seite nicht gefunden · RailBase</title>
<style>
:root{color-scheme:light dark;--bg:#F5F6F7;--fg:#202326;--fg2:#626971;--box:#FFFFFF;--line:#E3E6E9;--accent:#D71920;--soft:#FBE8E9}
@media (prefers-color-scheme:dark){:root{--bg:#141618;--fg:#EEF0F2;--fg2:#A3A9B0;--box:#1E2124;--line:#2E3236;--soft:#3A1E20}}
body{margin:0;min-height:100vh;display:grid;place-items:center;padding:24px 16px;box-sizing:border-box;background:var(--bg);color:var(--fg);font:17px/1.5 "Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,Arial,sans-serif}
main{width:min(640px,100%);text-align:center}
.kick{margin:0;font:800 14px/1 ui-monospace,Consolas,monospace;letter-spacing:.2em;color:var(--accent)}
h1{margin:8px 0;font-size:clamp(32px,6vw,52px);line-height:1.05}
h2{margin:26px 0 10px;font-size:17px}
p{margin:0 0 18px;color:var(--fg2)}
form{margin:18px 0 6px;text-align:left}
label{display:block;margin-bottom:6px;font-weight:700;font-size:15px}
input{box-sizing:border-box;width:100%;height:50px;padding:0 16px;border:2px solid var(--line);border-radius:14px;background:var(--box);color:var(--fg);font:inherit}
input:focus{border-color:var(--accent);outline:none}
ul{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin:0;padding:0;list-style:none}
ul a{display:inline-block;padding:8px 14px;border:1px solid var(--line);border-radius:999px;background:var(--box);color:var(--fg);font-weight:600;font-size:15px;text-decoration:none}
ul a:hover{border-color:var(--accent);color:var(--accent)}
#vl a{background:var(--soft);border-color:transparent;color:var(--accent)}
#sl{margin-top:10px}
.leer{color:var(--fg2);font-size:15px}
.btn{display:inline-block;margin-top:28px;padding:12px 20px;border-radius:12px;background:var(--accent);color:#fff;font-weight:700;text-decoration:none}
</style>
</head>
<body>
<main>
<p class="kick">404</p>
<h1 id="t">Gleis nicht gefunden</h1>
<p id="p">Diese Seite gibt es bei RailBase nicht (mehr).</p>
<div id="vor" hidden><h2 id="vh">Meintest du vielleicht …</h2><ul id="vl"></ul></div>
<form id="f" role="search"><label for="q" id="ql">Fahrzeug suchen</label><input id="q" type="search" autocomplete="off" placeholder="z. B. Re 460, Giruno, Krokodil"></form>
<ul id="sl"></ul>
<h2 id="kh">Oder stöbere in einer Kategorie</h2>
<ul id="kl"></ul>
<a class="btn" id="a" href="$startUrl">Zur Startseite</a>
</main>
<script>
(function () {
  var Z = [$liste404];
  var K = {$kats404};
  var T = {
    de: ['Gleis nicht gefunden', 'Diese Seite gibt es bei RailBase nicht (mehr).', 'Zur Startseite', 'de-CH', 'Meintest du vielleicht …', 'Fahrzeug suchen', 'z. B. Re 460, Giruno, Krokodil', 'Oder stöbere in einer Kategorie', 'Kein Fahrzeug gefunden.'],
    fr: ['Voie introuvable', 'Cette page n’existe pas (ou plus) sur RailBase.', 'Vers l’accueil', 'fr-CH', 'Cherchais-tu peut-être …', 'Chercher un véhicule', 'p. ex. Re 460, Giruno, Crocodile', 'Ou parcours une catégorie', 'Aucun véhicule trouvé.'],
    it: ['Binario non trovato', 'Questa pagina non esiste (più) su RailBase.', 'Alla pagina iniziale', 'it-CH', 'Cercavi forse …', 'Cerca un veicolo', 'p. es. Re 460, Giruno, Coccodrillo', 'Oppure sfoglia una categoria', 'Nessun veicolo trovato.'],
    en: ['Track not found', 'This page does not exist (any more) on RailBase.', 'Go to the home page', 'en', 'Did you mean …', 'Search for a vehicle', 'e.g. Re 460, Giruno, Crocodile', 'Or browse a category', 'No vehicle found.']
  };
  var l = '', gespeichert = '';
  try { gespeichert = localStorage.getItem('hckd-lang') || ''; } catch (e) {}
  l = T[gespeichert] ? gespeichert : (T[(navigator.language || '').slice(0, 2)] ? (navigator.language || '').slice(0, 2) : 'de');
  var t = T[l], basis = document.getElementById('a').getAttribute('href').replace(/\/?$/, '/');
  var seite = function (id) { return basis + id + (l === 'de' ? '' : '.' + l) + '.html'; };
  var el = function (id) { return document.getElementById(id); };
  document.documentElement.lang = t[3];
  document.title = t[0] + ' · RailBase';
  el('t').textContent = t[0]; el('p').textContent = t[1]; el('vh').textContent = t[4];
  el('ql').textContent = t[5]; el('q').placeholder = t[6]; el('kh').textContent = t[7];
  el('a').textContent = t[2];
  if (l !== 'de') el('a').href = basis + 'index.' + l + '.html';
  var norm = function (s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]/g, ''); };
  var link = function (z) { return '<li><a href="' + seite(z[0]) + '">' + z[1].replace(/</g, '&lt;') + (z[2] ? ' «' + z[2].replace(/</g, '&lt;') + '»' : '') + '</a></li>'; };
  el('kl').innerHTML = (K[l] || K.de).map(function (k) { return '<li><a href="' + seite(k[0]) + '">' + k[1] + '</a></li>'; }).join('');
  // guess from the wrong address, e.g. /re460.html -> Re 460
  var abstand = function (a, b) {
    var d = [], i, j;
    for (i = 0; i <= a.length; i++) { d[i] = [i]; }
    for (j = 1; j <= b.length; j++) { d[0][j] = j; }
    for (i = 1; i <= a.length; i++) { for (j = 1; j <= b.length; j++) { d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); } }
    return d[a.length][b.length];
  };
  var pfad = decodeURIComponent(location.pathname.split('/').pop() || '').replace(/\.html?$/, '').replace(/\.(fr|it|en)$/, '');
  var slug = norm(pfad);
  if (slug.length >= 2) {
    var treffer = Z.map(function (z) {
      var k = norm(z[0]), n = norm(z[1] + z[2]);
      var p = k === slug || n === slug ? 0 : (k.indexOf(slug) >= 0 || slug.indexOf(k) >= 0 || n.indexOf(slug) >= 0) ? 1 : abstand(slug, k);
      return [p, z];
    }).filter(function (x) { return x[0] <= Math.max(2, Math.floor(slug.length / 3)); })
      .sort(function (a, b) { return a[0] - b[0]; }).slice(0, 5);
    if (treffer.length) { el('vl').innerHTML = treffer.map(function (x) { return link(x[1]); }).join(''); el('vor').hidden = false; }
  }
  // search over all vehicles while typing
  el('f').addEventListener('submit', function (e) { e.preventDefault(); var a = el('sl').querySelector('a'); if (a) location.href = a.href; });
  el('q').addEventListener('input', function () {
    var v = norm(this.value);
    if (!v) { el('sl').innerHTML = ''; return; }
    var r = Z.filter(function (z) { return norm(z[0] + z[1] + z[2]).indexOf(v) >= 0; }).slice(0, 8);
    el('sl').innerHTML = r.length ? r.map(link).join('') : '<li class="leer">' + t[8] + '</li>';
  });
})();
</script>
</body>
</html>
"@
Write-Utf8 (Join-Path $out '404.html') $p404

if ($base) {
  $heute = Get-Date -Format 'yyyy-MM-dd'
  $urls = @()
  foreach ($l in $sprachen) {
    $urls += "  <url><loc>$(Adresse $l '')</loc><lastmod>$heute</lastmod><priority>1.0</priority></url>"
    foreach ($s in $seiten) { if ($s.prio) { $urls += "  <url><loc>$(Adresse $l $s.id)</loc><lastmod>$heute</lastmod><priority>$($s.prio)</priority></url>" } }
  }
  Write-Utf8 (Join-Path $out 'sitemap.xml') ("<?xml version=`"1.0`" encoding=`"UTF-8`"?>`n<urlset xmlns=`"http://www.sitemaps.org/schemas/sitemap/0.9`">`n" + ($urls -join "`n") + "`n</urlset>`n")
  Write-Utf8 (Join-Path $out 'robots.txt') "User-agent: *`nAllow: /`n`nSitemap: ${base}sitemap.xml`n"
} else {
  Write-Utf8 (Join-Path $out 'robots.txt') "User-agent: *`nAllow: /`n"
}

# ---------- Zusammenfassung ----------
$n = (Get-ChildItem $out -Recurse -File -Force | Measure-Object).Count
$mb = [Math]::Round(((Get-ChildItem $out -Recurse -File -Force | Measure-Object Length -Sum).Sum / 1MB), 1)
Write-Host "Fertig: $out  ($n Dateien, $mb MB, $(($seiten.Count + 1) * $sprachen.Count) HTML-Seiten in $($sprachen.Count) Sprachen)"
if (-not $base) { Write-Host "Hinweis: Keine Adresse in werkzeuge\website-adresse.txt. Ohne sie fehlen sitemap.xml, Vorschaubilder und Canonical-Links." }
$key = Select-String -Path (Join-Path $root 'js\melden.js') -Pattern "web3formsKey: ''" -Quiet
if ($key) { Write-Host "Hinweis: In js\melden.js ist noch kein Web3Forms-Schlüssel eingetragen. Ohne ihn kommen keine Mails an." }
if (Select-String -Path (Join-Path $root 'index.html') -Pattern 'class="platzhalter"' -Quiet) { Write-Host "Hinweis: Im Impressum und in der Datenschutzerklärung stehen noch Platzhalter wie [Vorname Nachname] (index.html)." }
