# Generates W favicon PNGs using System.Drawing (no npm/sharp). Run from repo root:
#   powershell -ExecutionPolicy Bypass -File scripts/gen-w-favicon.ps1
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$public = (Resolve-Path (Join-Path (Join-Path $PSScriptRoot '..') 'public')).Path
$bg = [System.Drawing.Color]::FromArgb(255, 17, 18, 21)
$accent1 = [System.Drawing.Color]::FromArgb(255, 167, 139, 250)
$accent2 = [System.Drawing.Color]::FromArgb(255, 124, 58, 237)
$border = [System.Drawing.Color]::FromArgb(255, 42, 51, 61)

function New-FaviconPng {
  param([int]$Size, [string]$OutPath)

  $bmp = New-Object System.Drawing.Bitmap $Size, $Size
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

  $g.Clear($bg)

  $radius = [Math]::Max(2, [int]($Size * 0.22))
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $r = [System.Drawing.Rectangle]::new(0, 0, $Size - 1, $Size - 1)
  [void]$path.AddArc($r.X, $r.Y, $radius, $radius, 180, 90)
  [void]$path.AddArc($r.Right - $radius, $r.Y, $radius, $radius, 270, 90)
  [void]$path.AddArc($r.Right - $radius, $r.Bottom - $radius, $radius, $radius, 0, 90)
  [void]$path.AddArc($r.X, $r.Bottom - $radius, $radius, $radius, 90, 90)
  $path.CloseFigure()

  $g.SetClip($path)

  $lgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush `
    ([System.Drawing.Point]::new([int]($Size * 0.22), [int]($Size * 0.1)), `
     [System.Drawing.Point]::new([int]($Size * 0.78), [int]($Size * 0.9)), $accent1, $accent2)

  $pad = [Math]::Max(1, [int]($Size * 0.1))
  $shield = [System.Drawing.PointF[]]@(
    [System.Drawing.PointF]::new($Size / 2, $pad),
    [System.Drawing.PointF]::new($pad, [int]($Size * 0.26)),
    [System.Drawing.PointF]::new($pad, [int]($Size * 0.52)),
    [System.Drawing.PointF]::new($Size / 2, $Size - $pad),
    [System.Drawing.PointF]::new($Size - $pad, [int]($Size * 0.52)),
    [System.Drawing.PointF]::new($Size - $pad, [int]($Size * 0.26))
  )
  $g.FillClosedCurve($lgBrush, $shield)

  $innerAlpha = [int]([Math]::Max(0, [Math]::Min(90, 110 - $Size)))
  $inner = [System.Drawing.Color]::FromArgb($innerAlpha, 10, 13, 16)
  $innerBrush = New-Object System.Drawing.SolidBrush $inner
  $pad2 = [int]($Size * 0.16)
  $shieldInner = [System.Drawing.PointF[]]@(
    [System.Drawing.PointF]::new($Size / 2, $pad2),
    [System.Drawing.PointF]::new($pad2, [int]($Size * 0.30)),
    [System.Drawing.PointF]::new($pad2, [int]($Size * 0.50)),
    [System.Drawing.PointF]::new($Size / 2, $Size - $pad2 - 1),
    [System.Drawing.PointF]::new($Size - $pad2, [int]($Size * 0.50)),
    [System.Drawing.PointF]::new($Size - $pad2, [int]($Size * 0.30))
  )
  $g.FillClosedCurve($innerBrush, $shieldInner)

  $g.ResetClip()
  $pen = New-Object System.Drawing.Pen $border, ([Math]::Max(1, $Size / 32))
  $g.DrawPath($pen, $path)

  $em = [single][Math]::Max(6.0, $Size * 0.42)
  $font = [System.Drawing.Font]::new('Segoe UI', $em, [System.Drawing.FontStyle]::Bold)
  $sf = New-Object System.Drawing.StringFormat
  $sf.Alignment = [System.Drawing.StringAlignment]::Center
  $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
  $rect = [System.Drawing.RectangleF]::new(0, [int]($Size * 0.02), $Size, $Size)
  $g.DrawString('W', $font, [System.Drawing.Brushes]::White, $rect, $sf)

  $bmp.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose() | Out-Null
  $bmp.Dispose() | Out-Null
  $font.Dispose() | Out-Null
  $lgBrush.Dispose() | Out-Null
  $innerBrush.Dispose() | Out-Null
  $pen.Dispose() | Out-Null
}

$sizes = @{
  'favicon-16.png' = 16
  'favicon-32.png' = 32
  'favicon-48.png' = 48
  'apple-touch-icon.png' = 180
  'favicon-192.png' = 192
  'favicon-512.png' = 512
}

foreach ($pair in $sizes.GetEnumerator()) {
  $out = Join-Path $public $pair.Key
  New-FaviconPng -Size $pair.Value -OutPath $out
  Write-Host "wrote $($pair.Key)"
}
