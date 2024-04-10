const playerCollisionDetectorBottomRight = document.getElementById('collision_detector_bottom_right');
const playerCollisionDetectorBottomLeft = document.getElementById('collision_detector_bottom_left');

const playerCollisionDetectorTopLeft = document.getElementById('collision_detector_top_left');
const playerCollisionDetectorTopRight = document.getElementById('collision_detector_top_right');


const offsetX = document.getElementById('gameCanvas').getBoundingClientRect().left
const offsetY = document.getElementById('gameCanvas').getBoundingClientRect().top
const player = document.getElementById('player');

let playerX = offsetX;
let playerY = offsetY;
let speed = 3;
let registerCollided = false;

player.style.left = offsetX
player.style.top = offsetY

let pressedMovement = {
    "up": 0,
    "left": 0,
    "right": 0,
    "down": 0
}

function movePlayer() {
    speed = 3
    player.style.left = playerX + 'px';
    player.style.top = playerY + 'px';
}

let originPos = [0, 0]

function handleKeyDown(e) {
    pressedMovement = {}
    lerping = false
    originPos = [playerX, playerY]
    // Arrow key codes: left = 37, up = 38, right = 39, down = 40
    switch (e.keyCode) {
        case 37:
            pressedMovement['left'] = 1
            break;
        case 38:
            pressedMovement['up'] = 1
            break;
        case 39:
            pressedMovement['right'] = 1
            break;
        case 40:
            pressedMovement['down'] = 1
            break;
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


let lerping = false
let destination = [0, 0]
const alpha = Math.sin(performance.now())

function lerp(a, b, t) {
    return b + (a - b) * t;
}
let telport = true
async function snapToGrid() {
    while (lerping) {
        playerX = lerp(destination[0], playerX, 0.2)
        playerY = lerp(destination[1], playerY, 0.2)


        movePlayer()
        await sleep(10);
        if (playerX.toFixed(5) == destination[0].toFixed(5) && playerY.toFixed(5) == destination[1].toFixed(5)) lerping = false
    }
    console.log(tilemap[tileDest[1]][tileDest[0]])
    console.log("sukadik " + originPos[0] + " ," + originPos[1])
    // TEELPORT
    if (tilemap[tileDest[1]][tileDest[0]] == 3 && telport) {
        let canvas = document.getElementById("gameCanvas");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        generateMap()
        telport = false
    }
}
let collided = false

function handleKeyUp(e) {
    console.log(collided)
    pressedMovement = {}
    if (collided) {
      operationX = "round"
      operationY = "round"
      collided = false
    } else {
      if (originPos[0] - playerX != 0) {
          operationX = (originPos[0] - playerX) < 0 ? "ceil" : "floor"
      } else {
          operationX = "round"
      }
      if (originPos[1] - playerY != 0) {
          operationY = (originPos[1] - playerY) < 0 ? "ceil" : "floor"
      } else {
          operationY = "round"
      }
    }

    tileDest[0] = (Math[operationX]((Math.abs(playerX - offsetX)) / TILE_SIZE))
    tileDest[1] = (Math[operationY]((Math.abs(playerY - offsetY)) / TILE_SIZE))

    destination = [(tileDest[0] * TILE_SIZE) + offsetX, (tileDest[1] * TILE_SIZE) + offsetY]
    
    if (playerX != destination) lerping = true


    snapToGrid()
    // Arrow key codes: left = 37, up = 38, right = 39, down = 40
    switch (e.keyCode) {
        case 37:
            pressedMovement['left'] = 0
            break;
        case 38:
            pressedMovement['up'] = 0
            break;
        case 39:
            pressedMovement['right'] = 0
            break;
        case 40:
            pressedMovement['down'] = 0
            break;
    }
}
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

let indexY = 0
let indexX = 0

function derive(){
  if (originPos[0] - playerX != 0) {
    return originPos[0] < playerX
  } 
  if (originPos[1] - playerY != 0) {
    return (originPos[1] - playerY) < 0
  } 
}

function collider(derivation, axis){
  if (derivation == undefined) return false
  if (!lerping){
    if (axis == 'x') {
      let operation = derivation ? "ceil" : "floor"
      let x = Math[operation]((Math.abs(playerX - offsetX)) / TILE_SIZE)
      let y = Math.round((Math.abs(playerY - offsetY)) / TILE_SIZE)
    
      if(!isNaN(tilemap[y][x])) {
        console.log(`At ${x} ${y}: `+ tilemap[y][x])
        if (walkable.includes(tilemap[y][x])) {
          return false
        }
        else  {
          collided = true
          return true
        }
      } 
    }
    else if (axis == 'y') {
      let operation = derivation ? "ceil" : "floor"
      let y = Math[operation]((Math.abs(playerY - offsetY)) / TILE_SIZE)
      let x = Math.round((Math.abs(playerX - offsetX)) / TILE_SIZE)
    
      if(!isNaN(tilemap[y][x])) {
        console.log(`At ${x} ${y}: `+ tilemap[y][x])
        if (walkable.includes(tilemap[y][x])) {
          return false
        }
        else  {
          collided = true
          return true
        }      
      } 
    }
  }
}

setInterval(() => {

    if (pressedMovement['up']) {
      if(collider(derive(), 'y')) return
      playerY -= speed;
      movePlayer()
    }

    if (pressedMovement['left']) {
      if(collider(derive(), 'x')) return
      playerX -= speed;
      movePlayer()
    }

    if (pressedMovement['right']) {
      if(collider(derive(), 'x')) return
      playerX += speed;
      movePlayer()
    }

    if (pressedMovement['down']) {
      if(collider(derive(), 'y')) return
      playerY += speed;
      movePlayer()
    }
}, 5);