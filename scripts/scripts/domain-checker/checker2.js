const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

let processedWords = 0;

const batchProcessor = async (words, output, errors) => {
  let previousWord = '';

  for (let word of words) {
    processedWords++;
    let stage = 0;
    try {		
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
      } else if(err.errno != 'ECONNRESET' && err.errno != 'ERR_TLS_CERT_ALTNAME_INVALID' &&err.errno != 'ECONNREFUSED' && err.errno != 'DEPTH_ZERO_SELF_SIGNED_CERT') {
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
  
  const samohlasky = ['a', 'e', 'i', 'o', 'u'];
  const souhlasky = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
  
  const allWords = [];
  
  for(let sh1 of souhlasky) {
	  for(let sa1 of samohlasky) {
		  for(let sh2 of souhlasky) {
			  for(let sa2 of samohlasky) {
				  for(let sh3 of souhlasky) {
					allWords.push(sh1 + sa1 + sh2 + sa2 + sh3);  
				  }
			  }
		  }
	  }
  }
  
  const lgt = allWords.length;
  const n = Math.ceil(allWords.length / 10);

  setInterval(() => {
    console.log('PROC ' + processedWords + '/' + lgt);
  }, 1000000);

  const divided = new Array(Math.ceil(allWords.length / n)).fill().map(_ => allWords.splice(0, n));
  const promises = divided.map(wordList => batchProcessor(wordList, output, errors));

  await Promise.all(promises);
}


executor();