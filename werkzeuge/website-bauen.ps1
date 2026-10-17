# HCKD RAIL – fertige Website für GitHub Pages bauen
# Erzeugt den Ordner "docs" mit:
#   - index.html und einer eigenen HTML-Datei pro Fahrzeug, Kategorie, Impressum, Datenschutz und Vergleich
#     (z. B. re-460.html), jede mit eigenem Titel, Beschreibung und Vorschaubild für Google und Messenger
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
$daten = [IO.File]::ReadAllText((Join-Path $root 'js\daten\fahrzeuge.js'), [Text.Encoding]::UTF8)
$seiten = New-Object System.Collections.ArrayList
$katName = @{}
foreach ($m in [regex]::Matches($daten, "\{ id: '([^']+)', code: '[^']*', name: '([^']+)', text: '([^']*)'")) {
  $katName[$m.Groups[1].Value] = $m.Groups[2].Value
  [void]$seiten.Add([pscustomobject]@{ id = $m.Groups[1].Value; titel = $m.Groups[2].Value; text = $m.Groups[3].Value; bild = ''; prio = '0.8' })
}
$zm = [regex]::Matches($daten, "\{ id: '([^']+)', kat: '([^']+)',(?: gruppe: '[^']*',)? name: '([^']+)', beiname: '([^']*)', typ: '([^']*)'")
for ($i = 0; $i -lt $zm.Count; $i++) {
  $m = $zm[$i]
  $ende = if ($i + 1 -lt $zm.Count) { $zm[$i + 1].Index } else { $daten.Length }
  $chunk = $daten.Substring($m.Index, $ende - $m.Index)
  $bild = [regex]::Match($chunk, "src: '(bilder/[^']+)'").Groups[1].Value
  $name = $m.Groups[3].Value; $bei = $m.Groups[4].Value; $typ = $m.Groups[5].Value
  $titel = if ($bei) { "$name «$bei»" } else { $name }
  $text = "$titel`: $typ ($($katName[$m.Groups[2].Value])). Technische Daten, Geschichte und Bilder."
  [void]$seiten.Add([pscustomobject]@{ id = $m.Groups[1].Value; titel = $titel; text = $text; bild = $bild; prio = '0.7' })
}
[void]$seiten.Add([pscustomobject]@{ id = 'bahn-abc'; titel = 'Bahn-ABC'; text = 'Was bedeuten RABDe, Re 4/4 II oder Bo''Bo''? Schweizer Fahrzeugbezeichnungen einfach erklärt, mit Entschlüssler.'; bild = ''; prio = '0.6' })
[void]$seiten.Add([pscustomobject]@{ id = 'impressum'; titel = 'Impressum'; text = 'Impressum, Haftung und Bildnachweis von HCKD RAIL.'; bild = ''; prio = '0.2' })
[void]$seiten.Add([pscustomobject]@{ id = 'datenschutz'; titel = 'Datenschutz'; text = 'Datenschutzerklärung von HCKD RAIL: keine Cookies, keine Werbung, nur anonyme Besucherzählung.'; bild = ''; prio = '0.2' })
[void]$seiten.Add([pscustomobject]@{ id = 'vergleich'; titel = 'Fahrzeuge vergleichen'; text = 'Bis zu drei Schweizer Bahnfahrzeuge nebeneinander vergleichen.'; bild = ''; prio = '' })

# ---------- HTML-Dateien schreiben ----------
$startText = 'HCKD RAIL – Train Database für SBB Personenverkehr, Cargo, Infrastruktur, Rangier- sowie Dienst- und Spezialfahrzeuge.'
function Build-Page([string]$datei, [string]$start, [string]$titel, [string]$text, [string]$bild) {
  $meta = "<title>$(Esc $titel)</title>`n<meta name=`"description`" content=`"$(Esc $text)`">`n"
  $meta += "<meta property=`"og:site_name`" content=`"HCKD RAIL`">`n<meta property=`"og:type`" content=`"website`">`n<meta property=`"og:locale`" content=`"de_CH`">`n"
  $meta += "<meta property=`"og:title`" content=`"$(Esc $titel)`">`n<meta property=`"og:description`" content=`"$(Esc $text)`">`n"
  if ($base) {
    $url = if ($datei -eq 'index.html') { $base } else { $base + $datei }
    $meta += "<link rel=`"canonical`" href=`"$url`">`n<meta property=`"og:url`" content=`"$url`">`n"
    $img = if ($bild) { $bild } else { 'bilder/slides/slide-01.jpg' }
    $meta += "<meta property=`"og:image`" content=`"$base$img`">`n<meta name=`"twitter:card`" content=`"summary_large_image`">`n"
  }
  if ($start -eq 'vergleich') { $meta += "<meta name=`"robots`" content=`"noindex`">`n" }
  $meta += "<link rel=`"icon`" href=`"favicon.svg`" type=`"image/svg+xml`">`n"
  # sagt dem Router, welche Ansicht ohne # gezeigt wird
  # HCKD_SEITEN: Links zeigen auf die einzelnen Dateien (re-460.html statt #re-460)
  $meta += if ($start) { "<script>window.HCKD_SEITEN=true;window.HCKD_START='$start';</script>`n" } else { "<script>window.HCKD_SEITEN=true;</script>`n" }
  $html = "<!doctype html>`n<html lang=`"de-CH`">`n<head>`n<meta charset=`"utf-8`">`n<meta name=`"viewport`" content=`"width=device-width,initial-scale=1,viewport-fit=cover`">`n<style>$reset</style>`n$meta$head`n</head>`n<body>`n$body`n</body>`n</html>`n"
  Write-Utf8 (Join-Path $out $datei) $html
}
Build-Page 'index.html' '' 'HCKD RAIL – Train Database' $startText ''
foreach ($s in $seiten) { Build-Page "$($s.id).html" $s.id "$($s.titel) · HCKD RAIL" $s.text $s.bild }

# ---------- Dateien kopieren ----------
foreach ($d in 'css', 'js', 'bilder', 'schrift') { Copy-Item -Recurse (Join-Path $root $d) (Join-Path $out $d) }
# Browser-Symbol aus dem Logo
$logo = [regex]::Match($body, '<symbol id="logo" viewBox="([^"]+)">([\s\S]*?)</symbol>')
if ($logo.Success) { Write-Utf8 (Join-Path $out 'favicon.svg') "<svg xmlns=`"http://www.w3.org/2000/svg`" viewBox=`"$($logo.Groups[1].Value)`">$($logo.Groups[2].Value.Trim())</svg>`n" }
# GitHub Pages: Dateien unverändert ausliefern
Write-Utf8 (Join-Path $out '.nojekyll') ''
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
<title>Seite nicht gefunden · HCKD RAIL</title>
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
<h1>Gleis nicht gefunden</h1>
<p>Diese Seite gibt es bei HCKD RAIL nicht (mehr).</p>
<a href="$startUrl">Zur Startseite</a>
</main>
</body>
</html>
"@
Write-Utf8 (Join-Path $out '404.html') $p404

if ($base) {
  $heute = Get-Date -Format 'yyyy-MM-dd'
  $urls = @("  <url><loc>$base</loc><lastmod>$heute</lastmod><priority>1.0</priority></url>")
  foreach ($s in $seiten) { if ($s.prio) { $urls += "  <url><loc>$base$($s.id).html</loc><lastmod>$heute</lastmod><priority>$($s.prio)</priority></url>" } }
  Write-Utf8 (Join-Path $out 'sitemap.xml') ("<?xml version=`"1.0`" encoding=`"UTF-8`"?>`n<urlset xmlns=`"http://www.sitemaps.org/schemas/sitemap/0.9`">`n" + ($urls -join "`n") + "`n</urlset>`n")
  Write-Utf8 (Join-Path $out 'robots.txt') "User-agent: *`nAllow: /`n`nSitemap: ${base}sitemap.xml`n"
} else {
  Write-Utf8 (Join-Path $out 'robots.txt') "User-agent: *`nAllow: /`n"
}

# ---------- Zusammenfassung ----------
$n = (Get-ChildItem $out -Recurse -File -Force | Measure-Object).Count
$mb = [Math]::Round(((Get-ChildItem $out -Recurse -File -Force | Measure-Object Length -Sum).Sum / 1MB), 1)
Write-Host "Fertig: $out  ($n Dateien, $mb MB, $($seiten.Count + 1) HTML-Seiten)"
if (-not $base) { Write-Host "Hinweis: Keine Adresse in werkzeuge\website-adresse.txt. Ohne sie fehlen sitemap.xml, Vorschaubilder und Canonical-Links." }
$key = Select-String -Path (Join-Path $root 'js\melden.js') -Pattern "web3formsKey: ''" -Quiet
if ($key) { Write-Host "Hinweis: In js\melden.js ist noch kein Web3Forms-Schlüssel eingetragen. Ohne ihn kommen keine Mails an." }
if (Select-String -Path (Join-Path $root 'index.html') -Pattern 'class="platzhalter"' -Quiet) { Write-Host "Hinweis: Im Impressum und in der Datenschutzerklärung stehen noch Platzhalter wie [Vorname Nachname] (index.html)." }
