function importModule(path) {
    let completePath = "./lib/" + path

    // duplicate correction
    let checker = document.head.getElementsByTagName('script')
    for (item of checker) {
        if (item.src.includes(completePath)) {
            return
        }
    }

    let eventModule = document.createElement('script');
    eventModule.src = completePath;
    document.head.appendChild(eventModule);
}

importModule("PlayerMovement.js")
