# Fix encoding for ALL 127KB files and find the one with correct content
$files = @(
    "lib\servicesData.ts",
    "lib\servicesData_broken_backup.ts",
    "lib\servicesData_decoded.ts",
    "lib\servicesData_fixed.ts",
    "lib\servicesData_original_broken.ts"
)

foreach ($file in $files) {
    Write-Host "Processing $file..."
    
    # Try different encodings
    $encodings = @(
        [System.Text.Encoding]::UTF8,
        [System.Text.Encoding]::Default,
        [System.Text.Encoding]::GetEncoding("windows-1251"),
        [System.Text.Encoding]::GetEncoding(1252)
    )
    
    foreach ($encoding in $encodings) {
        try {
            $bytes = [System.IO.File]::ReadAllBytes($file)
            $text = $encoding.GetString($bytes)
            
            # Check if contains batumi_office
            if ($text -match 'batumi_office') {
                $outFile = "lib\servicesData_FULL_RECOVERED_$($encoding.EncodingName).ts"
                [System.IO.File]::WriteAllText($outFile, $text, [System.Text.Encoding]::UTF8)
                Write-Host "✅ FOUND batumi_office in $file with $($encoding.EncodingName)!" -ForegroundColor Green
                Write-Host "   Saved to: $outFile" -ForegroundColor Green
            }
        }
        catch {
            # Skip encoding errors
        }
    }
}

Write-Host "`nDone! Check files starting with servicesData_FULL_RECOVERED_"
