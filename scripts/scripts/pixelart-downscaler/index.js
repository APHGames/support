const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');
const utils = require('../utils');

// pictures must be trimmed!!!
const MAX_SCALING = 7;

async function process() {
    const files = utils.searchFiles('.', 'png');
    for(let file of files) {
        let image = await Jimp.read(file);
        const columnScale = [];
        const rowScale = [];

        // scan columns
        let previousSum = null;
        let sumCount = -1;
        for(let i = 0; i < image.getWidth(); i++) {
            let sum = 0;
            for(let j = 0; j < image.getHeight(); j++) {
                const color = image.getPixelColor(i, j);
                sum+= color;
            }

            if(!previousSum) {
                previousSum = sum;
                sumCount++;
            } else if(sum !== previousSum || (sumCount >= (MAX_SCALING - 1))) {
                columnScale.push(sumCount + 1);
                sumCount = 0;
                previousSum = null;
            } else {
                sumCount++;
            }
        }
        columnScale.push(sumCount + 1);
        previousSum = null;
        sumCount = -1;

        for(let i = 0; i < image.getHeight(); i++) {
            let sum = 0;
            for(let j = 0; j < image.getWidth(); j++) {
                const color = image.getPixelColor(j, i);
                sum+= color;
            }

            if(!previousSum) {
                previousSum = sum;
                sumCount++;
            } else if(sum !== previousSum || (sumCount >= (MAX_SCALING - 1))) {
                rowScale.push(sumCount + 1);
                sumCount = 0;
                previousSum = null;
            } else {
                sumCount++;
            }
        }
        rowScale.push(sumCount + 1);

        const newImage = await Jimp.create(columnScale.length, rowScale.length);
        console.log(columnScale.length, rowScale.length);

        let pointerX = 0;
        for(let i = 0; i< columnScale.length; i++) {
            let pointerY = 0;
            for(let j = 0; j < rowScale.length; j++) {
                newImage.setPixelColor(image.getPixelColor(pointerX, pointerY), i, j);
                pointerY += rowScale[j];
            }
            pointerX += columnScale[i];
        }

        await newImage.writeAsync(`output_${file}`);
    }
}

process();