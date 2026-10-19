# RailBase - Vorschau fuers Handy im eigenen WLAN
# Liefert den gebauten Ordner docs\ aus, erreichbar von anderen Geraeten im gleichen Netz:
#   http://<Adresse des Computers>:8767   (die Adresse zeigt das Skript beim Start an)
# Aufruf im Projektordner:  powershell -ExecutionPolicy Bypass -File werkzeuge\vorschau-handy.ps1
# Beim ersten Start fragt Windows eventuell, ob der Zugriff erlaubt ist: nur "Private Netzwerke" waehlen.
param([string]$Ordner = 'docs', [int]$Port = 8767)
$root = (Resolve-Path $Ordner).Path
$types = @{ '.jpg' = 'image/jpeg'; '.jpeg' = 'image/jpeg'; '.png' = 'image/png'; '.webp' = 'image/webp'; '.svg' = 'image/svg+xml'; '.ico' = 'image/x-icon'; '.css' = 'text/css; charset=utf-8'; '.js' = 'text/javascript; charset=utf-8'; '.json' = 'application/json; charset=utf-8'; '.webmanifest' = 'application/manifest+json; charset=utf-8'; '.html' = 'text/html; charset=utf-8'; '.woff2' = 'font/woff2'; '.xml' = 'application/xml; charset=utf-8'; '.txt' = 'text/plain; charset=utf-8'; '.pdf' = 'application/pdf' }
$ascii = [Text.Encoding]::ASCII

$l = New-Object System.Net.Sockets.TcpListener ([Net.IPAddress]::Any, $Port)
$l.Start()
$ips = Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue | Where-Object { $_.IPAddress -notlike '127.*' -and $_.IPAddress -notlike '169.254.*' } | ForEach-Object { $_.IPAddress }
Write-Host "Handy-Vorschau laeuft (beenden mit Ctrl+C). Auf dem Handy im gleichen WLAN oeffnen:"
foreach ($ip in $ips) { Write-Host "  http://${ip}:$Port" }

function Antwort($s, [int]$code, [string]$text, [string]$typ, [byte[]]$b, [bool]$kopf) {
  $h = "HTTP/1.1 $code $text`r`nContent-Type: $typ`r`nContent-Length: $($b.Length)`r`nCache-Control: no-store`r`nConnection: close`r`n`r`n"
  $hb = $ascii.GetBytes($h)
  $s.Write($hb, 0, $hb.Length)
  if (-not $kopf -and $b.Length) { $s.Write($b, 0, $b.Length) }
}

while ($true) {
  $c = $l.AcceptTcpClient()
  try {
    $c.ReceiveTimeout = 3000; $c.SendTimeout = 10000
    $s = $c.GetStream()
    $r = New-Object IO.StreamReader($s, $ascii, $false, 4096, $true)
    $zeile = $r.ReadLine()
    if (-not $zeile) { continue }
    while ($r.ReadLine()) { }   # skip headers
    $teile = $zeile.Split(' ')
    $methode = $teile[0]
    $pfad = [Uri]::UnescapeDataString(($teile[1] -split '\?')[0]).TrimStart('/')
    if ($methode -ne 'GET' -and $methode -ne 'HEAD') { Antwort $s 405 'Method Not Allowed' 'text/plain' ([byte[]]@()) $false; continue }
    if (-not $pfad) { $pfad = 'index.html' }
    $fp = [IO.Path]::GetFullPath((Join-Path $root $pfad))
    if (Test-Path $fp -PathType Container) { $fp = Join-Path $fp 'index.html' }
    # only files inside the docs folder
    if ($fp.StartsWith($root + '\', [StringComparison]::OrdinalIgnoreCase) -and (Test-Path $fp -PathType Leaf)) {
      $ext = [IO.Path]::GetExtension($fp).ToLower()
      $typ = if ($types.ContainsKey($ext)) { $types[$ext] } else { 'application/octet-stream' }
      Antwort $s 200 'OK' $typ ([IO.File]::ReadAllBytes($fp)) ($methode -eq 'HEAD')
    } else {
      $nf = Join-Path $root '404.html'
      $b = if (Test-Path $nf) { [IO.File]::ReadAllBytes($nf) } else { $ascii.GetBytes('Nicht gefunden') }
      Antwort $s 404 'Not Found' 'text/html; charset=utf-8' $b ($methode -eq 'HEAD')
    }
  } catch {
  } finally {
    $c.Close()
  }
}
