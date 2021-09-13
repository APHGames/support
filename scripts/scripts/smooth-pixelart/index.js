const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

function hsl2rgb (h, s, l) {

    var r, g, b, m, c, x

    if (!isFinite(h)) h = 0
    if (!isFinite(s)) s = 0
    if (!isFinite(l)) l = 0

    h /= 60
    if (h < 0) h = 6 - (-h % 6)
    h %= 6

    s = Math.max(0, Math.min(1, s / 100))
    l = Math.max(0, Math.min(1, l / 100))

    c = (1 - Math.abs((2 * l) - 1)) * s
    x = c * (1 - Math.abs((h % 2) - 1))

    if (h < 1) {
        r = c
        g = x
        b = 0
    } else if (h < 2) {
        r = x
        g = c
        b = 0
    } else if (h < 3) {
        r = 0
        g = c
        b = x
    } else if (h < 4) {
        r = 0
        g = x
        b = c
    } else if (h < 5) {
        r = x
        g = 0
        b = c
    } else {
        r = c
        g = 0
        b = x
    }

    m = l - c / 2
    r = Math.round((r + m) * 255)
    g = Math.round((g + m) * 255)
    b = Math.round((b + m) * 255)

    return { r: r, g: g, b: b }

}
function hexToHSL(r, g, b) {
      r /= 255, g /= 255, b /= 255;
      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;
      if(max == min){
        h = s = 0; // achromatic
      }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }
    return {h, s, l};
 }

async function processInternal(image) {
    const width = image.bitmap.width; // the width of the image
    const height = image.bitmap.height; // the height of the image

	const SCALE = 4;
    const image2 = await new Jimp(width * SCALE, height * SCALE, 0xff0000ff);


    for(let i = 0; i < width; i++) {
        for (let j = 0; j< height ; j++) {
            const idx = (j * width + i) * 4;
            const red = image.bitmap.data[idx + 0];
            const green = image.bitmap.data[idx + 1];
            const blue = image.bitmap.data[idx + 2];
            const alpha = image.bitmap.data[idx + 3];

            let orig = Jimp.rgbaToInt(red, green, blue, alpha);
            const hsl = hexToHSL(red, green, blue);
            const rgb = hsl2rgb(hsl.h * 360, hsl.s * 100, hsl.l * 100 * 0.8); 

            const bright  = Jimp.rgbaToInt(rgb.r, rgb.g, rgb.b, alpha);

            for(let u = 0; u < SCALE; u++) {
                for(let v = 0; v < SCALE; v++) {
                    if((u == 1 || u == 2) && (v == 1 || v == 2)) {
                        image2.setPixelColor(orig, i * SCALE + u, j * SCALE + v);
                    } else {
                        image2.setPixelColor(bright, i * SCALE + u, j * SCALE + v);
                    }
                }
            }
        }
    }
	return image2;
}

async function process(img, scale, iterations) {
    // Read the image.
    let image = await Jimp.read(img);

	if(scale) {
		image.scale(scale, Jimp.RESIZE_NEAREST_NEIGHBOR);
	}
	
	let image2;
	
	for(let i = 0; i< iterations; i++) {
		image2 = await processInternal(image);
		image = image2;
	}
	
	const ext = img.substr(img.lastIndexOf('.') + 1);
	const filename = img.substr(0, img.lastIndexOf('.'));
    await image2.writeAsync(filename + '_otp.' + ext);	
}

process(path.resolve(__dirname, 'input_cheat.png'), 0.25, 2)
process(path.resolve(__dirname, 'input_joypad.png'), 0.25, 1)
process(path.resolve(__dirname, 'input_pinch.png'), 0.25, 1)