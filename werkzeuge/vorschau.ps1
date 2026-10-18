# RailBase – lokale Vorschau
# Startet einen kleinen Webserver unter http://localhost:8765 und liefert index.html samt CSS, JS und Bildern aus.
# Aufruf im Projektordner:  powershell -ExecutionPolicy Bypass -File werkzeuge\vorschau.ps1
# Mit -Roh wird die Seite unverändert ausgeliefert (für den gebauten Ordner "website").
param([string]$File = 'index.html', [int]$Port = 8765, [switch]$Roh)
$File = (Resolve-Path $File).Path
$root = Split-Path $File -Parent
$l = New-Object System.Net.HttpListener
$l.Prefixes.Add("http://localhost:$Port/")
$l.Start()
Write-Host "Vorschau läuft: http://localhost:$Port  (beenden mit Ctrl+C)"
# Wie beim Veröffentlichen: das Grundgerüst (doctype, head, body) wird um die Seite gelegt
$wrapHead = '<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><style>[hidden]{display:none!important}body{margin:0}img{max-width:100%}</style></head><body>'
$types = @{ '.jpg' = 'image/jpeg'; '.jpeg' = 'image/jpeg'; '.png' = 'image/png'; '.webp' = 'image/webp'; '.svg' = 'image/svg+xml'; '.css' = 'text/css; charset=utf-8'; '.js' = 'text/javascript; charset=utf-8'; '.json' = 'application/json; charset=utf-8'; '.html' = 'text/html; charset=utf-8'; '.woff2' = 'font/woff2'; '.xml' = 'application/xml; charset=utf-8'; '.txt' = 'text/plain; charset=utf-8' }
while ($l.IsListening) {
  $c = $l.GetContext()
  $path = [Uri]::UnescapeDataString($c.Request.Url.AbsolutePath).TrimStart('/')
  try {
    if ($path -and $path -ne 'index.html' -and $path -notmatch '\.\.') {
      $fp = Join-Path $root $path
      if (Test-Path $fp -PathType Leaf) {
        $b = [IO.File]::ReadAllBytes($fp)
        $ext = [IO.Path]::GetExtension($fp).ToLower()
        $c.Response.ContentType = if ($types.ContainsKey($ext)) { $types[$ext] } else { 'application/octet-stream' }
      } else { $c.Response.StatusCode = 404; $b = [byte[]]@() }
    } else {
      $page = [IO.File]::ReadAllText($File, [Text.Encoding]::UTF8)
      $body = if ($Roh) { $page } else { $wrapHead + $page + '</body></html>' }
      $b = [Text.Encoding]::UTF8.GetBytes($body)
      $c.Response.ContentType = 'text/html; charset=utf-8'
    }
    $c.Response.Headers.Add('Cache-Control', 'no-store')
    $c.Response.OutputStream.Write($b, 0, $b.Length)
  } catch {}
  $c.Response.Close()
}
