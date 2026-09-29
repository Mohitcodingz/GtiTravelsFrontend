$distPath = (Resolve-Path "dist").Path
$zipPath = Join-Path (Get-Location) "atulyareplica-dist.zip"

Write-Host "Creating zip from: $distPath"
Write-Host "Output zip:        $zipPath"

if (Test-Path $zipPath) {
    Remove-Item $zipPath -Force
}

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$zipFile = [System.IO.Compression.ZipFile]::Open($zipPath, [System.IO.Compression.ZipArchiveMode]::Create)

$files = Get-ChildItem -Path $distPath -Recurse -Force | Where-Object { -not $_.PSIsContainer }
Write-Host "Total files to add: $($files.Count)"

foreach ($file in $files) {
    $relPath = $file.FullName.Substring($distPath.Length).TrimStart('\', '/').Replace('\', '/')
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zipFile, $file.FullName, $relPath, [System.IO.Compression.CompressionLevel]::Optimal) | Out-Null
}

$zipFile.Dispose()

$item = Get-Item $zipPath
Write-Host "`nZip successfully created!"
Write-Host "Name:   $($item.Name)"
Write-Host "Size:   $([math]::Round($item.Length / 1MB, 2)) MB ($($item.Length) bytes)"
Write-Host "Date:   $($item.LastWriteTime)"

# Verify entries
$readZip = [System.IO.Compression.ZipFile]::OpenRead($item.FullName)
Write-Host "`nRoot-level entries:"
$readZip.Entries | Where-Object { $_.FullName -notmatch '/' } | ForEach-Object {
    Write-Host "  -> $($_.FullName) ($($_.Length) bytes)"
}

$assetEntries = ($readZip.Entries | Where-Object { $_.FullName -like 'assets/*' }).Count
$imageEntries = ($readZip.Entries | Where-Object { $_.FullName -like 'images/*' }).Count
Write-Host "`nFolder entries count (using standard '/' forward slashes):"
Write-Host "  assets/ count: $assetEntries"
Write-Host "  images/ count: $imageEntries"

Write-Host "`nSample entry paths:"
$readZip.Entries | Select-Object -First 10 | ForEach-Object {
    Write-Host "  $($_.FullName)"
}
$readZip.Dispose()
