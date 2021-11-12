function pull() {
    write-host "Pulling..."
    git pull
    return $?
}

function build() {
    write-host "Building..."
    ng build --prod
    return $?
}

function copy-webconfig() {
    write-host "Copying web.config..."
    Copy-Item .\web.config .\dist\wallet-ui\
    return $?
}


if (pull) {
    if (build) {
        if (copy-webconfig) {
            Write-Host "Finished successfully."
        }
    }
}