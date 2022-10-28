const Jimp = require('jimp');
const utils = require('../utils');


async function process() {
    const files = utils.searchFiles('.', 'png');
    for(let file of files) {
        let image = await Jimp.read(file);
        const newImage = await Jimp.create(image.getWidth(), image.getHeight());

        for(let i = 0; i < image.getWidth(); i++) {
            for(let j = 0; j < image.getHeight(); j++) {
                const color = image.getPixelColor(i, j);
                var r = (color >> 24) & 255;
                var g = (color >> 16) & 255;
                var b = (color >> 8) & 255;
                var a = color & 255;

                if(r > 0) {
                    const newColor = ((255 << 23) * 2 + (255 << 16) + (255 << 8) + r);
                    newImage.setPixelColor(newColor, i, j);
                } else {
                    const newColor = ((0 << 23) * 2 + (0 << 16) + (0 << 8) + 0);
                    newImage.setPixelColor(newColor, i, j);
                }

            }
        }

        await newImage.writeAsync(`output_${file}`);
    }
}

process();