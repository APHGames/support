var Jimp = require('jimp');
var fs = require('fs');

async function main() {
    // Read the image.
    const iterations = 10;

	const width = 375;
	const height = 248;	

	const finalColor = 0x6f8ce9ff;

    const buffer = await new Jimp(width * 2, height * 2, 0x000000ff);

	const processedPixels = new Set();
	const totalPixels = width * height;
	const steps = Math.floor(totalPixels / iterations);

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
			
			const xCoord = pointer % width;
			const yCoord = Math.floor(pointer / width);
			
			buffer.setPixelColor(finalColor, xCoord * 2, yCoord * 2);
			buffer.setPixelColor(finalColor, xCoord * 2 + 1, yCoord * 2);
			buffer.setPixelColor(finalColor, xCoord * 2, yCoord * 2 + 1);
			buffer.setPixelColor(finalColor, xCoord * 2 + 1, yCoord * 2 + 1);
			
		}
		
		await buffer.writeAsync(i + '.png');
	}
}

main()