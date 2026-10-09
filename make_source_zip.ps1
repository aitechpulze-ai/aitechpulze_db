$src = "c:\Users\NIRANJAN\aitechpulze_hostinger"
$out = "c:\Users\NIRANJAN\aitechpulze_hostinger\hostinger_source.zip"

if (Test-Path $out) { Remove-Item $out -Force }

$files = @(
    "$src\src",
    "$src\public",
    "$src\scripts",
    "$src\package.json",
    "$src\package-lock.json",
    "$src\next.config.js",
    "$src\postcss.config.mjs",
    "$src\jsconfig.json",
    "$src\server.js",
    "$src\fix-permissions.sh",
    "$src\.env.example"
)

Compress-Archive -Path $files -DestinationPath $out -Force

$size = [math]::Round((Get-Item $out).Length / 1MB, 2)
Write-Host ("hostinger_source.zip created - " + $size + " MB")
