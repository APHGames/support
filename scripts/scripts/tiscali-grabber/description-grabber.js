// article-list  > article
// no .tracked-event, no .disc-info

const { parse } = require('node-html-parser');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const lastPage = 30;

const strPad = (str, length) => {
  if(str.strLength < length) {
    for(let i = 0; i < (length - str.strLength); i++) {
      str += ' ';
    }
  }
  return str;
}

const executor = async () => {
  let output = [];
  
  for(let i = 1; i <= lastPage; i++) {
    const data = await fetch('https://games.tiscali.cz/' + i);
    const resp = await data.text();
  
    const root = parse(resp);
  
    const articles = root.querySelectorAll('.article-item');
    for(let article of articles) {
      const titleNode = article.querySelector('.article-title').querySelector('a');
      const dateNode = article.querySelector('.article-info').querySelector('.text-white');
      const title = titleNode.rawText.trim();
      const titleHref = titleNode.getAttribute('href').trim();
      const date = dateNode.rawText.trim();

      output.push(`${strPad(date, 10)} ${title} | ${titleHref}`);
    }
    console.log(`${i}/${lastPage}`)
  }

  fs.writeFileSync(path.resolve(__dirname, 'data.json'), output.join('\n'));
}

executor();