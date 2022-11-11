const utils = require('../utils');
const piexif = require('piexifjs');
const fs = require('fs');

// Handy utility functions
const getBase64DataFromJpegFile = (filename) => fs.readFileSync(filename).toString('binary');
const getExifFromJpegFile = (filename) => piexif.load(getBase64DataFromJpegFile(filename));

var ExifImage = require('exif').ExifImage;

const files = utils.searchFiles('.', '.JPG');


for (let file of files) {
	const exif = getExifFromJpegFile(file);

	const dateTime = exif['0th'][piexif.ImageIFD.DateTime];
	const dateTimeOriginal = exif['Exif'][piexif.ExifIFD.DateTimeOriginal];

	const dateSplit = dateTime.split(' ');
	const date1Split = dateSplit[0].split(':');
	const date2Split = dateSplit[1].split(':');

	let year = date1Split[0];
	let month = date1Split[1];
	let day = date1Split[2];

	let hour = date2Split[0];
	let minute = date2Split[1];
	let sec = date2Split[2];

	// todo: edit the variables above

    const pd = (v) => parseInt(v) <= 9 ? '0' + v : v + '';

	console.log(`Date/time taken - Image ${file}`);
	console.log("-------------------------");
	console.log(`DateTime: ${dateTime}`);
	console.log(`DateTimeOriginal: ${dateTimeOriginal}\n`);
	console.log(year, ':', month, ':', day, ' ', hour, ':', minute, ':', sec);

	exif['0th'][piexif.ImageIFD.DateTime] = pd(year) + ':' + pd(month) + ':' + pd(day) + ' ' + pd(hour) + ':' + pd(minute) + ':' + pd(sec);

	exif['Exif'][piexif.ExifIFD.DateTimeOriginal] = pd(year) + ':' + pd(month) + ':' + pd(day) + ' ' + pd(hour) + ':' + pd(minute) + ':' + pd(sec);

	// Convert the new Exif object into binary form
	const newExifBinary = piexif.dump(exif);

	const newImageData = getBase64DataFromJpegFile(file);
	// Embed the Exif data into the image data
	const newPhotoData = piexif.insert(newExifBinary, newImageData);

	// Save the new photo to a file
	let fileBuffer = Buffer.from(newPhotoData, 'binary');
	fs.writeFileSync(file + '_ED.jpg', fileBuffer);
}