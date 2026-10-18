# RailBase – neue Fotos für die Website verkleinern
# Speichert jedes JPG/PNG eines Ordners zweimal, die Originale bleiben unverändert:
#   bilder\<name>-1.jpg        höchstens 1280 Pixel (längste Seite), Qualität 72  -> Galerie und Vollbild
#   bilder\klein\<name>-1.jpg  höchstens 480 Pixel, Qualität 68                  -> Karten und Vorschaubilder
# Mit -UntenAbschneiden 0.07 werden unten 7 % abgeschnitten (z. B. für einen eingeblendeten Namen).
# Beispiel:  powershell -ExecutionPolicy Bypass -File werkzeuge\bilder-komprimieren.ps1 -Quelle "C:\Users\Hckdi\Desktop\Re450" -Name re450
#            ergibt bilder\re450-1.jpg, bilder\re450-2.jpg, ... und dieselben Namen in bilder\klein
param([Parameter(Mandatory)][string]$Quelle, [Parameter(Mandatory)][string]$Name, [int]$Max = 1280, [long]$Qualitaet = 72, [int]$MaxKlein = 480, [long]$QualitaetKlein = 68, [double]$UntenAbschneiden = 0)
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$ziel = Join-Path (Split-Path $PSScriptRoot -Parent) 'bilder'
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
New-Item -ItemType Directory -Force (Join-Path $ziel 'klein') | Out-Null

function Save-Jpg($img, [string]$out, [int]$max, [long]$q) {
  $ep = New-Object System.Drawing.Imaging.EncoderParameters 1
  $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, $q)
  $sw = $img.Width; $sh = [int][Math]::Round($img.Height * (1 - $UntenAbschneiden))
  $s = [Math]::Min(1.0, $max / [Math]::Max($sw, $sh))
  $w = [int][Math]::Round($sw * $s); $h = [int][Math]::Round($sh * $s)
  $bmp = New-Object System.Drawing.Bitmap $w, $h
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = 'HighQualityBicubic'; $g.SmoothingMode = 'HighQuality'; $g.PixelOffsetMode = 'HighQuality'; $g.CompositingQuality = 'HighQuality'
  $g.DrawImage($img, (New-Object System.Drawing.Rectangle 0, 0, $w, $h), (New-Object System.Drawing.Rectangle 0, 0, $sw, $sh), [System.Drawing.GraphicsUnit]::Pixel)
  $bmp.Save($out, $codec, $ep)
  $g.Dispose(); $bmp.Dispose()
  "{0}x{1}, {2} KB" -f $w, $h, [int]((Get-Item $out).Length / 1KB)
}

$i = 0
foreach ($f in Get-ChildItem $Quelle -File | Where-Object { $_.Extension -match '^\.(jpe?g|png)$' } | Sort-Object Name) {
  $i++
  $img = [System.Drawing.Image]::FromFile($f.FullName)
  # Handyfotos: Drehung aus den Kameradaten übernehmen
  if ($img.PropertyIdList -contains 274) {
    switch ($img.GetPropertyItem(274).Value[0]) { 3 { $img.RotateFlip('Rotate180FlipNone') } 6 { $img.RotateFlip('Rotate90FlipNone') } 8 { $img.RotateFlip('Rotate270FlipNone') } }
  }
  $datei = "{0}-{1}.jpg" -f $Name, $i
  $gross = Save-Jpg $img (Join-Path $ziel $datei) $Max $Qualitaet
  $klein = Save-Jpg $img (Join-Path (Join-Path $ziel 'klein') $datei) $MaxKlein $QualitaetKlein
  $img.Dispose()
  "{0} -> {1}  (gross {2} · klein {3})" -f $f.Name, $datei, $gross, $klein
}
if ($i -eq 0) { "Keine JPG- oder PNG-Bilder in $Quelle gefunden." }
