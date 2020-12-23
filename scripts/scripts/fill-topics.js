const utils = require('./utils');

const topics = utils.fileToStr('topics.txt');

let lines = topics.split('\r\n');
const svg = utils.fileToStr('topics.svg');

const placeholders = svg.split('E86056');
console.log(placeholders.length);

let outputLines = [];

if (placeholders.length > lines.length) {
	const mult = Math.ceil(placeholders.length / lines.length);
	for (let i = 0; i < mult; i++) {
		outputLines = [...outputLines, ...lines];
	}
} else {
	outputLines = lines;
}

console.log(outputLines.length, placeholders.length);
console.log(outputLines);

let output = '';
let counter = 0;

for(let placeholder of placeholders) {
	if(counter !== 0 && counter <= (placeholders.length - 1)) {
		output += outputLines[counter].toUpperCase();
	}
	counter++;
	output += placeholder;
}

utils.strToFile('mojo.svg', output);