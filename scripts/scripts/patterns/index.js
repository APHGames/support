const Jimp = require('jimp');

const w = 800;
const h = 600;

const cellSize = 40;

const colors = [
    0x3f3f3fff,
    0x262626ff,
    0x2c2c2cff,
    0x101010ff
];

async function generate() {
	const img =  await Jimp.create(w, h, '#111');

    for(let i = 0; i < Math.ceil(w / cellSize); i++) {
        for(let j = 0; j < Math.ceil(h / cellSize); j++) {

            const color = colors[Math.floor(Math.random() * colors.length)];            
            for(let x = 0; x < cellSize; x++) {
                for(let y = 0; y < cellSize; y++) {
                    const offsetX = i * cellSize + x;
                    const offsetY = j * cellSize + y;
                    img.setPixelColor(color, offsetX, offsetY);
                }
            }

        }
    }

    await img.writeAsync('result.png');
}

generate();