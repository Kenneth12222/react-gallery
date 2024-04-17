# Rename files
```
# Set the starting index
$i = 1

# Get all PNG files in the current directory
$files = Get-ChildItem -Filter *.png

# Loop through each file and rename it
foreach ($file in $files) {
    # Construct the new filename
    $newFilename = "p${i}.png"
    # Rename the file
    Rename-Item -Path $file.FullName -NewName $newFilename
    Write-Output "Renamed $($file.Name) to $newFilename"
    # Increment the index
    $i++
}

```