// Define your tilemap properties
const TILE_SIZE = 80; // Size of each tile in pixels
const MAP_WIDTH = 11; // Width of the map in tiles
const MAP_HEIGHT = 11; // Height of the map in tiles

// Define your tilemap data
const tilemap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],


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
});
