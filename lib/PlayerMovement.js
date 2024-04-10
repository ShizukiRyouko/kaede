const playerCollisionDetectorBottomRight = document.getElementById('collision_detector_bottom_right');
const playerCollisionDetectorBottomLeft = document.getElementById('collision_detector_bottom_left');

const playerCollisionDetectorTopLeft = document.getElementById('collision_detector_top_left');
const playerCollisionDetectorTopRight = document.getElementById('collision_detector_top_right');


const offsetX = document.getElementById('gameCanvas').getBoundingClientRect().left
const offsetY = document.getElementById('gameCanvas').getBoundingClientRect().top

const player = document.getElementById('player');

let playerX = player.offsetLeft;
let playerY = player.offsetTop;
let speed = 3;
let registerCollided = false;

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


    playerCollisionDetectorBottomRight.style.left = playerX + 40 + 'px'
    playerCollisionDetectorBottomRight.style.top = playerY + 40 + 'px'

    playerCollisionDetectorTopRight.style.left = playerX + 40 + 'px'
    playerCollisionDetectorTopRight.style.top = playerY + -10 + 'px'



    playerCollisionDetectorTopLeft.style.left = playerX + -10 + 'px'
    playerCollisionDetectorTopLeft.style.top = playerY + -10 + 'px'

    playerCollisionDetectorBottomLeft.style.left = playerX + -10 + 'px'
    playerCollisionDetectorBottomLeft.style.top = playerY + 40 + 'px'




    if (tilemap[Math.ceil((playerCollisionDetectorBottomRight.offsetTop - offsetY) / TILE_SIZE) - 1][Math.ceil((playerCollisionDetectorBottomRight.offsetLeft - offsetX) / TILE_SIZE) - 1] == 0) {

    } else if (tilemap[Math.ceil((playerCollisionDetectorTopRight.offsetTop - offsetY) / TILE_SIZE) - 1][Math.ceil((playerCollisionDetectorTopRight.offsetLeft - offsetX) / TILE_SIZE) - 1] == 0) {

    } else if (tilemap[Math.ceil((playerCollisionDetectorTopLeft.offsetTop - offsetY) / TILE_SIZE) - 1][Math.ceil((playerCollisionDetectorTopLeft.offsetLeft - offsetX) / TILE_SIZE) - 1] == 0) {
        player.style.left = playerX + 'px';
        player.style.top = playerY + 'px';
    } else if (tilemap[Math.ceil((playerCollisionDetectorBottomLeft.offsetTop - offsetY) / TILE_SIZE) - 1][Math.ceil((playerCollisionDetectorBottomLeft.offsetLeft - offsetX) / TILE_SIZE) - 1] == 0) {
        player.style.left = playerX + 'px';
        player.style.top = playerY + 'px';
        console.log(`COLLIDED at ${Math.ceil((playerY - offsetY) / TILE_SIZE) - 1}, ${Math.ceil((playerX - offsetX) / TILE_SIZE) - 1}`)
    } else {

        speed = 3

    }



    document.getElementById('te').innerText = JSON.stringify(dirCollide)
}

function handleKeyPress(e) {
    pressedMovement = {}

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


function handleKeyUp(e) {
    pressedMovement = {}
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