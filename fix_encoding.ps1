# Fix UTF-8 encoding corruption
$content = Get-Content "lib\servicesData.ts" -Raw -Encoding Default
$utf8 = [System.Text.Encoding]::UTF8
$bytes = [System.Text.Encoding]::Default.GetBytes($content)
$fixedContent = $utf8.GetString($bytes)
[System.IO.File]::WriteAllText("lib\servicesData_RECOVERED.ts", $fixedContent, $utf8)
Write-Host "✅ File recovered to servicesData_RECOVERED.ts"
