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


    // playerCollisionDetectorBottomRight.style.left = playerX + 80 + 'px'
    // playerCollisionDetectorBottomRight.style.top = playerY + 70 + 'px'

    // playerCollisionDetectorTopRight.style.left = playerX + 40 + 'px'
    // playerCollisionDetectorTopRight.style.top = playerY + -10 + 'px'



    // playerCollisionDetectorTopLeft.style.left = playerX + -10 + 'px'
    // playerCollisionDetectorTopLeft.style.top = playerY + -10 + 'px'

    // playerCollisionDetectorBottomLeft.style.left = playerX + -10 + 'px'
    // playerCollisionDetectorBottomLeft.style.top = playerY + 40 + 'px'


}

let originPos = [0, 0]

function handleKeyPress(e) {
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

//   // Usage
//   async function example() {
//     console.log('Start');
//     await sleep(2000); // Sleep for 2 seconds
//     console.log('End');
//   }

let lerping = false
let destination = [0, 0]
const alpha = Math.sin(performance.now())

// function lerp(a, b, alpha) {
//     return a + alpha * (b - a)
// }
function lerp(a, b, t) {
    return b + (a - b) * t;
}
async function snapToGrid() {
    // console.log(Math.round(playerX / TILE_SIZE))
    while (lerping) {
        playerX = lerp(destination[0], playerX, 0.2)
        playerY = lerp(destination[1], playerY, 0.2)

        // playerX = ((Math.round((Math.abs(playerX - offsetX)) / TILE_SIZE)) * TILE_SIZE) + offsetX;
        // console.log(offsetX)
        // console.log(playerX)
        // console.log((Math.round((Math.abs(playerX - offsetX)) / TILE_SIZE)))
        // console.log((Math.round((Math.abs(playerX - offsetX)) / TILE_SIZE)) * TILE_SIZE)
        movePlayer()
        await sleep(10);
        if (playerX.toFixed(5) == destination[0].toFixed(5) && playerY.toFixed(5) == destination[1].toFixed(5)) lerping = false
    }
}

function handleKeyUp(e) {
    pressedMovement = {}
    console.log(originPos[0] - playerX)
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

    destination = [((Math[operationX]((Math.abs(playerX - offsetX)) / TILE_SIZE)) * TILE_SIZE) + offsetX, ((Math[operationY]((Math.abs(playerY - offsetY)) / TILE_SIZE)) * TILE_SIZE) + offsetY]
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
document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup', handleKeyUp);

setInterval(() => {

    if (pressedMovement['up']) {
        playerY -= speed;
        movePlayer()
    }

    if (pressedMovement['left']) {

        playerX -= speed;

        movePlayer()
    }

    if (pressedMovement['right']) {


        playerX += speed;

        movePlayer()
    }

    if (pressedMovement['down']) {


        playerY += speed;

        movePlayer()
    }
}, 5);