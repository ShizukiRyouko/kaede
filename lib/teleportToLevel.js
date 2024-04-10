const lvlTest = {
    "canvas": [1920, 1080],
    "charPos": [0, 0],
    "map": [
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    ]
}


const positions = [];


console.log(positions);
function generateMap() {
    const cnv = document.getElementById('gameCanvas')
    cnv.width = lvlTest.canvas[0]
    cnv.height = lvlTest.canvas[1]

    // Loop through the tilemap data and draw each tile
    for (let y = 0; y < MAP_HEIGHT; y++) {
        for (let x = 0; x < MAP_WIDTH; x++) {
            // Determine the tile value
            const tile = lvlTest["map"][y][x];

            // Calculate the position to draw the tile
            const posX = x * TILE_SIZE;
            const posY = y * TILE_SIZE;

            if (tile == 1) {
                // ctx.drawImage(images[tile], posX, posY, TILE_SIZE, TILE_SIZE);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.0)';
                ctx.fillRect(posX, posY, TILE_SIZE, TILE_SIZE);
            } else {
                ctx.fillStyle = "blue";
                // ctx.fillRect(posX, posY, TILE_SIZE, TILE_SIZE);
                ctx.fillRect(posX, posY, TILE_SIZE, TILE_SIZE);
            }

        }
    }

    const startX = 435;
    const startY = 82;

    for (let row = 0; row < MAP_WIDTH; row++) {
        for (let col = 0; col < MAP_HEIGHT; col++) {
            const x = startX + col * TILE_SIZE;
            const y = startY + row * TILE_SIZE;
            if (col == lvlTest.charPos[0] && row == lvlTest.charPos[1]) {
                player.style.left = x + 'px';
                player.style.top = y + 'px';

                originPos = [x, y]
                playerX = x
                playerY = y
            }
            positions.push({ x, y });
        }
    }


    console.log(positions)
}