param([string]$Projekt = (Split-Path $PSScriptRoot -Parent))
# Setzt die Uebersetzungen zusammen: sprachen\fr\*.js -> js\sprachen\fr.js (ebenso it, en).
# Die Teile werden nach Dateinamen sortiert aneinandergehaengt.
# Aufruf im Projektordner:  powershell -ExecutionPolicy Bypass -File werkzeuge\sprachen-bauen.ps1
$ErrorActionPreference = 'Stop'
$quelle = Join-Path $Projekt 'sprachen'
$ziel = Join-Path $Projekt 'js\sprachen'
New-Item -ItemType Directory -Force $ziel | Out-Null
$utf8 = New-Object Text.UTF8Encoding $false
foreach ($dir in Get-ChildItem $quelle -Directory) {
  $teile = @(Get-ChildItem $dir.FullName -Filter *.js | Sort-Object Name)
  $kopf = "/* RailBase - Uebersetzung '$($dir.Name)'. Automatisch zusammengesetzt aus sprachen\$($dir.Name)\ (werkzeuge\sprachen-bauen.ps1). Hier nicht bearbeiten. */`n'use strict';`n"
  $text = $kopf + (($teile | ForEach-Object { "`n/* ---- $($_.Name) ---- */`n" + [IO.File]::ReadAllText($_.FullName, [Text.Encoding]::UTF8).Trim() }) -join "`n") + "`n"
  [IO.File]::WriteAllText((Join-Path $ziel ($dir.Name + '.js')), $text, $utf8)
  "{0}: {1} Teile, {2} KB" -f $dir.Name, $teile.Count, [int]($text.Length / 1KB)
}
