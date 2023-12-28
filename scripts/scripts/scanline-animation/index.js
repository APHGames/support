const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');
const utils = require('../utils');


async function process() {
    const files = utils.searchFiles('.', 'png');
    for (let file of files) {
        let image = await Jimp.read(file);

        const pixels = [];
        const scanlineDiffs = [];

        // generate random scanline shift
        for (let i = 0; i < image.getHeight(); i++) {
            scanlineDiffs.push((image.getWidth() + Math.floor(Math.random() * image.getWidth())) * (Math.random() > 0.5 ? 1 : -1));
        }

        // store colors in a separate array
        for (let i = 0; i < image.getWidth(); i++) {
            pixels[i] = [];
            for (let j = 0; j < image.getHeight(); j++) {
                const color = image.getPixelColor(i, j);
                pixels[i][j] = color;
            }
        }

        // animate
        for (let iteration = 0; iteration < 2 * image.getWidth(); iteration++) {
            const newImage = await Jimp.create(image.getWidth(), image.getHeight());

            for (let j = 0; j < image.getHeight(); j++) {
                let scanline = scanlineDiffs[j];
                if (scanline < 0) {
                    scanline = Math.min(0, scanline + iteration);
                } else {
                    scanline = Math.max(0, scanline - iteration);
                }

                for (let i = 0; i < image.getWidth(); i++) {
                    if ((i + scanline) < image.getWidth() && (i + scanline) > 0) {
                        newImage.setPixelColor(pixels[i + scanline][j], i, j);
                    } else {
                        newImage.setPixelColor(255, i, j);
                    }
                }
            }

            await newImage.writeAsync(`output_${path.parse(file).name}_` + utils.pad(iteration, 4) + path.extname(file));
        }
    }
}

process();