// Define your tilemap properties
const TILE_SIZE = 80; // Size of each tile in pixels
const MAP_WIDTH = 13; // Width of the map in tiles
const MAP_HEIGHT = 10; // Height of the map in tiles

// Define your tilemap data
const tilemap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
];

// Get the canvas element
var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');

// Load images from folder
const imageSources = {
    1: './assets/tiles/images0.jpeg',
    0: './assets/tiles/images0.jpeg'
};

const images = {};

// Load images asynchronously
const loadImage = (src) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = reject;
        image.src = src;
    });
};

const loadImages = async () => {
    for (let key in imageSources) {
        images[key] = await loadImage(imageSources[key]);
    }
};


loadImages().then(() => {
    // Loop through the tilemap data and draw each tile
    for (let y = 0; y < MAP_HEIGHT; y++) {
        for (let x = 0; x < MAP_WIDTH; x++) {
            // Determine the tile value
            const tile = tilemap[y][x];

            // Calculate the position to draw the tile
            const posX = x * TILE_SIZE;
            const posY = y * TILE_SIZE;
            if (tilemap[y][x] == 1) {
                ctx.drawImage(images[tile], posX, posY, TILE_SIZE, TILE_SIZE);
            } else {
                ctx.fillStyle = 'green';
                ctx.fillRect(posX, posY, TILE_SIZE, TILE_SIZE);
            }

        }
    }


    // setInterval(() => {
    //     const posX = 0 * TILE_SIZE;
    //     const posY = 0 * TILE_SIZE;

    //     if (tilemap[0][1] == 1) {
    //         tilemap[0][1] = 0
    //         ctx.fillStyle = 'green';
    //         ctx.fillRect(posX, posY, TILE_SIZE, TILE_SIZE);
    //     } else {
    //         tilemap[0][1] = 1
    //         ctx.fillStyle = 'red';
    //         ctx.fillRect(posX, posY, TILE_SIZE, TILE_SIZE);
    //     }
    //     console.log('aa ' + tilemap[0][1])
    // }, 1000);
});

function aaaa(event) {
    const offsetX = document.getElementById('gameCanvas').getBoundingClientRect().left
    const offsetY = document.getElementById('gameCanvas').getBoundingClientRect().top

    // console.log(Math.ceil((event.clientX - offsetX) / TILE_SIZE))
    // console.log(Math.ceil((event.clientY - offsetY) / TILE_SIZE))

    try {
        if (tilemap[Math.ceil((event.clientY - offsetY) / TILE_SIZE) - 1][Math.ceil((event.clientX - offsetX) / TILE_SIZE) - 1] == 0) {
            console.log(`COLLIDED at ${Math.ceil((event.clientY - offsetY) / TILE_SIZE) - 1}, ${Math.ceil((event.clientX - offsetX) / TILE_SIZE) - 1}`)
        }
    } catch (e) {
        console.log(e)
    }
}

function lol() {
    console.log("DOM fully loaded and parsed");
}

function displayHud() {
    const canvas = document.createElement('canvas');
    canvas.id = 'hud-canvas';

    // Style the container using CSS (optional)
    const containerStyle = document.createElement('style');
    containerStyle.textContent = `
    #hud-container {
        text-align: center; 
        z-index:10;
    }
    `;


    document.head.appendChild(containerStyle);


    // Define your tilemap data
    const tilemap2 = [
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    ];


    // Loop through the tilemap data and draw each tile
    for (let y = 0; y < MAP_HEIGHT; y++) {
        for (let x = 0; x < MAP_WIDTH; x++) {
            // Determine the tile value
            const tile = tilemap2[y][x];

            // Calculate the position to draw the tile
            const posX = x * TILE_SIZE;
            const posY = y * TILE_SIZE;

            if (tilemap[y][x] == 1) {
                // ctx.drawImage(images[tile], posX, posY, TILE_SIZE, TILE_SIZE);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.0)';
                ctx.fillRect(posX, posY, TILE_SIZE, TILE_SIZE);
            } else {
                ctx.fillStyle = "yellow";
                // ctx.fillRect(posX, posY, TILE_SIZE, TILE_SIZE);
                ctx.fillRect(0, 0, TILE_SIZE, TILE_SIZE)
            }

        }
    }
}

