function Pull-Version() {
    write-host "Pulling..."
    git pull
    return $?
}

function Build-App() {
    write-host "Building..."
    ng build --prod
    return $?
}

function CopyTo-IIS() {
    Write-Host "Copying to IIS..."
    Remove-Item -Force -Recurse -Path C:\sites\wallet-ui\wallet-ui\
    Copy-Item -Force -Recurse -Path .\dist\wallet-ui\ -Destination C:\sites\wallet-ui\
    Copy-Item .\web.config C:\sites\wallet-ui\wallet-ui\
    return $?
}


if (Pull-Version) {
    if (Build-App) {
        if (CopyTo-IIS) {
            Write-Host "Finished successfully."
        }
    }
}