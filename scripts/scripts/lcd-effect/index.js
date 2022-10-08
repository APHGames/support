const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const SCALE = 3;

async function processInternal(image) {
    const width = image.bitmap.width; // the width of the image
    const height = image.bitmap.height; // the height of the image

    const image2 = await new Jimp(width * SCALE, height * SCALE, 0xff0000ff);

    for(let i = 0; i < width; i++) {
        for (let j = 0; j< height ; j++) {
            const idx = (j * width + i) * 4;
            const red = image.bitmap.data[idx + 0];
            const green = image.bitmap.data[idx + 1];
            const blue = image.bitmap.data[idx + 2];
            const alpha = image.bitmap.data[idx + 3];

            for(let u = 0; u < SCALE; u++) {
                image2.setPixelColor(Jimp.rgbaToInt(red, 0, 0, alpha), i * SCALE + 0, j * SCALE + u);
                image2.setPixelColor(Jimp.rgbaToInt(0, green, 0, alpha), i * SCALE + 1, j * SCALE + u);
                image2.setPixelColor(Jimp.rgbaToInt(0, 0, blue, alpha), i * SCALE + 2, j * SCALE + u);
            }
        }
    }
	return image2;
}

async function process(img) {
    // Read the image.
    let image = await Jimp.read(img);
	let image2 = await processInternal(image);

	const ext = img.substr(img.lastIndexOf('.') + 1);
	const filename = img.substr(0, img.lastIndexOf('.'));
    await image2.writeAsync('output.' + ext);
}

process(path.resolve(__dirname, 'input.png'), 0.25, 2);