var eventModule = document.createElement('script');
eventModule.src = "./lib/event/index.js";
document.head.appendChild(eventModule);



const tileMap = document.createElement('script');
tileMap.src = "./lib/TileMap.js";
document.head.appendChild(tileMap);

const playerScript = document.createElement('script');
playerScript.src = "./lib/PlayerMovement.js";
document.head.appendChild(playerScript);

const teleportToLevel = document.createElement('script');
teleportToLevel.src = "./lib/teleportToLevel.js";
document.head.appendChild(teleportToLevel);