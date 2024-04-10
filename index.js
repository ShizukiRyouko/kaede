function importModule (path) {
  let root = "./lib/"
  let eventModule = document.createElement('script');
  eventModule.src = root + path ;
  document.head.appendChild(eventModule);
}

importModule("PlayerMovement.js")
