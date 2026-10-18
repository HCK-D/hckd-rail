# RailBase - App-Symbole (PNG) aus dem Logo zeichnen
# Erzeugt bilder\app\icon-192.png, icon-512.png und apple-touch-icon.png (180 px).
# Das Logo (index.html, symbol id="logo") ist 570 x 270 gross: rotes R ueber einem Gleis.
# Es steht mit 70 % der Breite mittig auf einer weissen Flaeche, damit Android das Symbol
# rund oder eckig zuschneiden kann, ohne etwas abzuschneiden.
# Aufruf im Projektordner:  powershell -ExecutionPolicy Bypass -File werkzeuge\app-symbole.ps1
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$root = Split-Path $PSScriptRoot -Parent
$ziel = Join-Path $root 'bilder\app'
New-Item -ItemType Directory -Force $ziel | Out-Null
$rot = [Drawing.Color]::FromArgb(0xD7, 0x19, 0x20)
$gleis = [Drawing.Color]::FromArgb(0x20, 0x23, 0x26)

function Zeichne([int]$px, [string]$datei) {
  $bmp = New-Object Drawing.Bitmap $px, $px
  $g = [Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = 'AntiAlias'
  $g.Clear([Drawing.Color]::White)
  # Logo-Inhalt reicht von x 8 bis 560 und y 5 bis 263
  $k = $px * 0.70 / 552.0
  $ox = $px / 2.0 - 284 * $k; $oy = $px / 2.0 - 134 * $k
  $P = { param($x, $y) New-Object Drawing.PointF ([single]($ox + $x * $k)), ([single]($oy + $y * $k)) }

  # rotes R (wie der erste Pfad im Logo)
  $r = New-Object Drawing.Drawing2D.GraphicsPath
  $r.AddLine((& $P 233 5), (& $P 460 5))
  $r.AddBezier((& $P 460 5), (& $P 512 5), (& $P 547 40), (& $P 547 82))
  $r.AddBezier((& $P 547 82), (& $P 547 120), (& $P 525 148), (& $P 488 160))
  $r.AddLines([Drawing.PointF[]]@((& $P 488 160), (& $P 560 263), (& $P 460 263), (& $P 377 150), (& $P 138 150), (& $P 172 105), (& $P 435 105)))
  $r.AddBezier((& $P 435 105), (& $P 452 105), (& $P 463 95), (& $P 463 82))
  $r.AddBezier((& $P 463 82), (& $P 463 69), (& $P 452 60), (& $P 435 60))
  $r.AddLine((& $P 435 60), (& $P 200 60))
  $r.CloseFigure()
  $g.FillPath((New-Object Drawing.SolidBrush $rot), $r)

  # Gleis: linke Schiene und drei Schwellen
  $pinsel = New-Object Drawing.SolidBrush $gleis
  foreach ($form in @(
      @(@(105, 263), @(8, 263), @(140, 170), @(187, 170)),
      @(@(220, 170), @(338, 170), @(345, 178), @(213, 178)),
      @(@(202, 194), @(358, 194), @(370, 212), @(190, 212)),
      @(@(176, 225), @(382, 225), @(410, 263), @(145, 263)))) {
    $g.FillPolygon($pinsel, [Drawing.PointF[]]($form | ForEach-Object { & $P $_[0] $_[1] }))
  }
  $g.Dispose()
  $bmp.Save((Join-Path $ziel $datei), [Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  "$datei ($px px)"
}
Zeichne 192 'icon-192.png'
Zeichne 512 'icon-512.png'
Zeichne 180 'apple-touch-icon.png'
