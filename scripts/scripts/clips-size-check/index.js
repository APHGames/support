const Path = require("path");
const fs = require("fs");
const getMediaDimensions = require('get-media-dimensions');
const utils = require('../utils');

const main = async () => {
  const files = utils.searchFiles('.', ['.mkv', '.mp4', '.mov']);
  const metadata = [];

  for (let file of files) {
    const fd = fs.openSync(file, 'r');
    const buffer = Buffer.alloc(100);
    fs.readSync(fd, buffer, 0, 100, 0);
    const stats = fs.statSync(file);
    const sizeMB = Math.floor(stats.size / 1024 / 1024);
    const start = buffer.indexOf(Buffer.from('mvhd')) + 16;
    const timeScale = buffer.readUInt32BE(start, 4);
    const duration = buffer.readUInt32BE(start + 4, 8);
    const movieLength = Math.floor(duration / timeScale);
    if (movieLength > 0) {
      const dimensions = await getMediaDimensions(file, 'video');
      metadata.push({
        size: sizeMB,
        dim: dimensions,
        file: file.substring(file.indexOf('\\') + 1),
        length: Math.floor(movieLength / 60),
        kbps: Math.floor((sizeMB * 1024 * 8) / movieLength),
      });
    }
    fs.closeSync(fd);
  }
  const longestFile = metadata.reduce((acc, curr) => curr.file.length > acc ? curr.file.length : acc, 0);
  metadata.forEach(m => console.log(`${m.file.padEnd(longestFile + 1, ' ')}| SIZE: ${m.size.toString().padEnd(5, ' ')} \
  | LENGTH: ${m.length.toString().padEnd(5, ' ')} | KBPS: ${m.kbps.toString().padEnd(6, ' ')} | SIZE: ${m.dim.width}x${m.dim.height}`));
};

main();