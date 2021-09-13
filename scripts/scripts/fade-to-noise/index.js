const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

async function main(sourceImgPath, targetImgPath) {
    // Read the image.
    const iterations = 10;
    const blockSize = 3;

    const sourceImg = await (await Jimp.read(sourceImgPath)).clone();
    const targetImg = await Jimp.read(targetImgPath);

    if(sourceImg.getWidth() !== targetImg.getWidth() || sourceImg.getHeight() !== targetImg.getHeight()) {
        throw new Error('Images must have the same size!');
    }

    const width = Math.floor(sourceImg.getWidth() / blockSize);
    const height = Math.floor(sourceImg.getHeight() / blockSize);

	const processedPixels = new Set();
	const totalPixels = Math.floor(width * height);
	const steps = Math.floor(totalPixels / iterations);

    await sourceImg.writeAsync(path.resolve(__dirname, 0 + '.png'));

	for(let i = 0; i < iterations; i++) {
		for(let j = 0; j < steps; j++) {
			// get random pixel
			let pointer = Math.floor(Math.random() * totalPixels);
			
			// locate unprocessed random pixel
			while(pointer < totalPixels) {
				if(!processedPixels.has(pointer)) {
					break;
				}
				pointer++;
			}
			processedPixels.add(pointer);
			
			const xCoord = (pointer % width);
			const yCoord = Math.floor(pointer / width);
			
            for(let k = 0; k < blockSize; k++) {
                for(let l = 0; l < blockSize; l++) {
                    const color = targetImg.getPixelColor(xCoord * blockSize + k, yCoord * blockSize + l);
                    await sourceImg.setPixelColor(color, xCoord * blockSize + k, yCoord * blockSize + l);
                }
            }
		}
        await sourceImg.writeAsync(path.resolve(__dirname, (i + 1) + '.png'));
	}
    await targetImg.writeAsync(path.resolve(__dirname, iterations + '.png'));

}

main(path.resolve(__dirname, `input.png`), path.resolve(__dirname, `output.png`))