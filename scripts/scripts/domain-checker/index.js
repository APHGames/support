const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

let processedWords = 0;

const batchProcessor = async (words, output, errors) => {

  for (let word of words) {
    processedWords++;
    let stage = 0;
    try {
    if (word.length <= 3 || word.length >= 9 ||
	['ě', 'š', 'č', 'ř', 'ž', 'ý', 'á', 'í', 'ň', 'ď', 'ó', 'ů', 'ú'].some(s => word.includes(s)))
	{
      continue;
    }
    let counter = 0;
    const data = await fetch('https://github.com/' + word);
    stage++;
    if (data.status == '404') {
      counter++;
    }
    try {
      let data2 = await fetch(`https://${word}.io`);
    } catch (err) {
      if (err.errno == 'ENOTFOUND') {
        counter++;
      } else {
        throw err;
      }
    }
    stage++;
    const data3 = await fetch('https://www.npmjs.com/~' + word);
    if (data3.status == '404') {
      counter++;
    }
    stage++;
    const data4 = await fetch('https://www.npmjs.com/package/' + word);
    if (data4.status == '404') {
      counter++;
    }
    // console log only if the word isn't take in all 4 cases above
    if (counter === 4) {
      output.push(word);
      console.log(word);
      fs.appendFileSync(path.resolve(__dirname, `output.txt`), word + '\n');

    }
    previousWord = word;
    } catch(err) {
      console.log('ERR: ' + stage + ' ' + word);
      errors.push(word);
      fs.appendFileSync(path.resolve(__dirname, `output_errors.txt`), word + '\n');
    }
  }
}

const executor = async () => {
  let output = [];
  let errors = [];
  const allWords = fs.readFileSync(path.resolve(__dirname, 'words.txt'), 'utf8').split('\n');
  const lgt = allWords.length;
  const n = Math.ceil(allWords.length / 10);

  setInterval(() => {
    // just notify the user from time to time that it didn't freeze, you know...
    console.log('PROC ' + processedWords + '/' + lgt);
  }, 1000000);

  const divided = new Array(Math.ceil(allWords.length / n)).fill().map(_ => allWords.splice(0, n));
  const promises = divided.map(wordList => batchProcessor(wordList, output, errors));

  await Promise.all(promises);
}


executor();