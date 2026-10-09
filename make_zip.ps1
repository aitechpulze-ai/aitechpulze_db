$src = "c:\Users\NIRANJAN\aitechpulze_hostinger"
$out = "c:\Users\NIRANJAN\aitechpulze_hostinger\hostinger_final.zip"
$tmp = "c:\Users\NIRANJAN\aitechpulze_hostinger\_deploy_tmp"

if (Test-Path $tmp) { Remove-Item $tmp -Recurse -Force }
New-Item -ItemType Directory -Path $tmp | Out-Null

# standalone contents -> root
Copy-Item "$src\.next\standalone\*" $tmp -Recurse -Force

# .next/static -> .next/static
New-Item -ItemType Directory -Path "$tmp\.next\static" -Force | Out-Null
Copy-Item "$src\.next\static\*" "$tmp\.next\static" -Recurse -Force

# public, scripts, extras
Copy-Item "$src\public" $tmp -Recurse -Force
Copy-Item "$src\scripts" $tmp -Recurse -Force
Copy-Item "$src\.env.example" "$tmp\.env.example" -Force
Copy-Item "$src\fix-permissions.sh" "$tmp\fix-permissions.sh" -Force

# zip
if (Test-Path $out) { Remove-Item $out -Force }
Compress-Archive -Path "$tmp\*" -DestinationPath $out -Force

# cleanup
Remove-Item $tmp -Recurse -Force

$size = [math]::Round((Get-Item $out).Length / 1MB, 2)
Write-Host ("hostinger_final.zip created - " + $size + " MB")
