# HCKD RAIL - App-Symbole (PNG) aus dem Logo zeichnen
# Erzeugt bilder\app\icon-192.png, icon-512.png und apple-touch-icon.png (180 px).
# Das Logo (index.html, symbol id="logo") ist 100 x 92 gross; hier wird es auf eine
# quadratische rote Flaeche gesetzt, damit Android das Symbol rund oder eckig zuschneiden kann.
# Aufruf im Projektordner:  powershell -ExecutionPolicy Bypass -File werkzeuge\app-symbole.ps1
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$root = Split-Path $PSScriptRoot -Parent
$ziel = Join-Path $root 'bilder\app'
New-Item -ItemType Directory -Force $ziel | Out-Null
$rot = [Drawing.Color]::FromArgb(0xD7, 0x19, 0x20)

function Zeichne([int]$px, [string]$datei) {
  $bmp = New-Object Drawing.Bitmap $px, $px
  $g = [Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = 'AntiAlias'
  $g.Clear($rot)
  # 100 x 92 Logo in der Mitte eines 100 x 100 Quadrats
  $s = $px / 100.0; $dy = 4.0
  $P = { param($x, $y) New-Object Drawing.PointF ([single]($x * $s)), ([single](($y + $dy) * $s)) }
  $stift = New-Object Drawing.Pen ([Drawing.Color]::White), ([single](8.2 * $s))
  $stift.LineJoin = 'Miter'
  foreach ($linie in @(
      @(@(0, 32.4), @(30.5, 32.4), @(44, 42)), @(@(56, 42), @(69.5, 32.4), @(100, 32.4)),
      @(@(0, 63), @(30.5, 63), @(44, 53)), @(@(56, 53), @(69.5, 63), @(100, 63)))) {
    $pts = [Drawing.PointF[]]($linie | ForEach-Object { & $P $_[0] $_[1] })
    $g.DrawLines($stift, $pts)
  }
  $box = New-Object Drawing.RectangleF ([single](43.6 * $s)), ([single]((41.4 + $dy) * $s)), ([single](12.8 * $s)), ([single](12.2 * $s))
  $g.FillRectangle((New-Object Drawing.SolidBrush $rot), $box)
  $g.DrawRectangle((New-Object Drawing.Pen ([Drawing.Color]::White), ([single](3 * $s))), $box.X, $box.Y, $box.Width, $box.Height)
  $g.Dispose()
  $bmp.Save((Join-Path $ziel $datei), [Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  "$datei ($px px)"
}
Zeichne 192 'icon-192.png'
Zeichne 512 'icon-512.png'
Zeichne 180 'apple-touch-icon.png'
