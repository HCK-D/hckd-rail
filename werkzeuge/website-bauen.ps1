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
          danke = 'Danke'; dankeText = 'Danke an die Bahnfotografen und an alle, die bei RailBase mithelfen, auch bei der Informatik. Und wie du selbst mithelfen kannst.' }
  fr = @{ start = 'RailBase – Train Database des CFF : voyageurs, Cargo, infrastructure, véhicules de manœuvre, de service et spéciaux.'; zug = 'Caractéristiques techniques, histoire et images.'
          impressum = 'Mentions légales'; impressumText = 'Mentions légales, responsabilité et crédits photo de RailBase.'
          datenschutz = 'Protection des données'; datenschutzText = 'Protection des données chez RailBase : pas de cookies, pas de publicité, seulement un comptage anonyme des visites.'
          vergleich = 'Comparer des véhicules'; vergleichText = "Comparer jusqu’à trois véhicules ferroviaires suisses côte à côte."
          neu = 'Nouveautés et mises à jour'; neuText = 'Les derniers ajouts sur RailBase : nouveaux véhicules, nouvelles photos et nouvelles fonctions.'
          sammlung = 'Ma collection'; sammlungText = "Véhicules vus, observations et badges d’explorateur sur RailBase."
          erkennen = 'FLIRT 521, 522, 523 ou 524 ?';erkennenText = "Comment distinguer les séries FLIRT 521, 522, 523 et 524 des CFF : numéro, courant, couleurs et région d’engagement."
          danke = 'Merci'; dankeText = 'Merci aux photographes ferroviaires et à toutes les personnes qui aident RailBase, y compris en informatique. Et comment tu peux aider toi aussi.' }
  it = @{ start = 'RailBase – Train Database delle FFS: viaggiatori, Cargo, infrastruttura, veicoli di manovra, di servizio e speciali.'; zug = 'Dati tecnici, storia e immagini.'
          impressum = 'Note legali'; impressumText = 'Note legali, responsabilità e crediti fotografici di RailBase.'
          datenschutz = 'Protezione dei dati'; datenschutzText = 'Protezione dei dati su RailBase: nessun cookie, nessuna pubblicità, solo un conteggio anonimo delle visite.'
          vergleich = 'Confronta veicoli'; vergleichText = "Confronta fino a tre veicoli ferroviari svizzeri uno accanto all’altro."
          neu = 'Novità e aggiornamenti'; neuText = 'Le ultime aggiunte su RailBase: nuovi veicoli, nuove foto e nuove funzioni.'
          sammlung = 'La mia collezione'; sammlungText = 'Veicoli visti, avvistamenti e distintivi da esploratore su RailBase.'
          erkennen = 'FLIRT 521, 522, 523 o 524?';erkennenText = "Come distinguere le serie FLIRT 521, 522, 523 e 524 delle FFS: numero, corrente, colori e zona d’impiego."
          danke = 'Grazie'; dankeText = 'Grazie ai fotografi ferroviari e a tutte le persone che aiutano RailBase, anche per la parte informatica. E come puoi aiutare anche tu.' }
  en = @{ start = 'RailBase – Train Database for SBB passenger, Cargo, infrastructure, shunting, service and special vehicles.'; zug = 'Technical data, history and pictures.'
          impressum = 'Legal notice'; impressumText = 'Legal notice, liability and picture credits of RailBase.'
          datenschutz = 'Privacy'; datenschutzText = 'RailBase privacy policy: no cookies, no advertising, only anonymous visitor counting.'
          vergleich = 'Compare vehicles'; vergleichText = 'Compare up to three Swiss railway vehicles side by side.'
          neu = 'New and updated'; neuText = 'The latest additions to RailBase: new vehicles, new photos and new features.'
          sammlung = 'My collection'; sammlungText = 'Vehicles seen, sightings and explorer badges on RailBase.'
          erkennen = 'FLIRT 521, 522, 523 or 524?';erkennenText = 'How to tell the SBB FLIRT classes 521, 522, 523 and 524 apart: number, power system, colours and area of service.'
          danke = 'Thank you'; dankeText = 'Thank you to the railway photographers and everyone who helps RailBase, including with IT. And how you can help too.' }
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
# SBB-Fahrzeuge plus BLS, RhB, SOB, TPF und transN (eigene Dateien, gleiche Form)
$daten = (('fahrzeuge.js', 'bls.js', 'tpf.js', 'sob.js', 'transn.js', 'rhb.js') | ForEach-Object { $p = Join-Path $root "js\daten\$_"; if (Test-Path $p) { [IO.File]::ReadAllText($p, [Text.Encoding]::UTF8) } }) -join "`n"
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
    $meta += "<meta property=`"og:image`" content=`"$base$img`">`n<meta name=`"twitter:card`" content=`"summary_large_image`">`n"
  }
  if ($start -eq 'vergleich' -or $start -eq 'sammlung') { $meta +="<meta name=`"robots`" content=`"noindex`">`n" }
  $meta += "<link rel=`"icon`" href=`"favicon.svg`" type=`"image/svg+xml`">`n"
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
  foreach ($s in $seiten) { $k = Kopf $l $s; Build-Page $l $s.id "$($k[0]) · RailBase" $k[1] $s.bild }
}

# ---------- Dateien kopieren ----------
foreach ($d in 'css', 'js', 'bilder', 'schrift') { Copy-Item -Recurse (Join-Path $root $d) (Join-Path $out $d) }
# Browser-Symbol aus dem Logo: quadratisch, weisse Fläche, Gleis dunkel
$logo = [regex]::Match($body, '<symbol id="logo" viewBox="([^"]+)">([\s\S]*?)</symbol>')
if ($logo.Success) {
  $pfade = $logo.Groups[2].Value.Trim().Replace('currentColor', '#202326')
  Write-Utf8 (Join-Path $out 'favicon.svg') "<svg xmlns=`"http://www.w3.org/2000/svg`" viewBox=`"-16 -166 600 600`"><rect x=`"-16`" y=`"-166`" width=`"600`" height=`"600`" rx=`"120`" fill=`"#fff`"/>$pfade</svg>`n"
}
# GitHub Pages: Dateien unverändert ausliefern
Write-Utf8 (Join-Path $out '.nojekyll') ''

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

# ---------- 404, sitemap, robots ----------
$startUrl = if ($base) { $base } else { './' }
$p404 = @"
<!doctype html>
<html lang="de-CH">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>Seite nicht gefunden · RailBase</title>
<style>
:root{color-scheme:light dark;--bg:#F5F6F7;--fg:#202326;--fg2:#626971;--accent:#D71920}
@media (prefers-color-scheme:dark){:root{--bg:#141618;--fg:#EEF0F2;--fg2:#A3A9B0}}
body{margin:0;min-height:100vh;display:grid;place-items:center;padding:24px;box-sizing:border-box;background:var(--bg);color:var(--fg);font:18px/1.5 "Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,Arial,sans-serif;text-align:center}
h1{margin:0 0 8px;font-size:clamp(32px,6vw,52px);line-height:1.05}
p{margin:0 0 24px;color:var(--fg2)}
a{display:inline-block;padding:12px 20px;border-radius:12px;background:var(--accent);color:#fff;font-weight:700;text-decoration:none}
</style>
</head>
<body>
<main>
<h1 id="t">Gleis nicht gefunden</h1>
<p id="p">Diese Seite gibt es bei RailBase nicht (mehr).</p>
<a id="a" href="$startUrl">Zur Startseite</a>
</main>
<script>
(function () {
  var T = {
    fr: ['Voie introuvable', 'Cette page n’existe pas (ou plus) sur RailBase.', 'Vers l’accueil', 'fr-CH'],
    it: ['Binario non trovato', 'Questa pagina non esiste (più) su RailBase.', 'Alla pagina iniziale', 'it-CH'],
    en: ['Track not found', 'This page does not exist (any more) on RailBase.', 'Go to the home page', 'en']
  };
  var l = '';
  try { l = localStorage.getItem('hckd-lang') || ''; } catch (e) {}
  if (!T[l]) { var n = (navigator.language || '').slice(0, 2); if (T[n]) l = n; }
  if (!T[l]) return;
  document.documentElement.lang = T[l][3];
  document.title = T[l][0] + ' · RailBase';
  document.getElementById('t').textContent = T[l][0];
  document.getElementById('p').textContent = T[l][1];
  var a = document.getElementById('a');
  a.textContent = T[l][2];
  a.href = a.getAttribute('href').replace(/\/?$/, '/') + 'index.' + l + '.html';
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
