const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');
const utils = require('../utils');


async function process(img, scale, iterations) {
    const files = utils.searchFiles('.');
    for(let file of files.filter(f => f.endsWith('png'))) {
        const newFile = file.substring(0, file.length - 4) + '.jpg';
        console.log('reading ' + file);
        let image = await Jimp.read(file);
        console.log('writing ' + newFile);
        await image.writeAsync(newFile);
        utils.deleteFile(file);
    }
}

process();