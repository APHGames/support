const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');
const utils = require('../utils');


async function process(img, scale, iterations) {
    const files = utils.searchFiles('.');
    for(let file of files) {
        let image = await Jimp.read(file);
        const width = image.getWidth();
        if(width >= 900 && width <= 1600) {
            image.scale(1/2, Jimp.RESIZE_NEAREST_NEIGHBOR);
            
        } else if(width > 1600) {
            image.scale(1/3, Jimp.RESIZE_NEAREST_NEIGHBOR);
        }
        await image.writeAsync(file);
    }
}

process();