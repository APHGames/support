// article-list  > article
// no .tracked-event, no .disc-info

const { parse } = require('node-html-parser');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');



const strPad = (str, length) => {
    if (str.strLength < length) {
        for (let i = 0; i < (length - str.strLength); i++) {
            str += ' ';
        }
    }
    return str;
}

const executor = async () => {

    // first read the original document..we need to know the name of the last article
    const articles = fs.readFileSync('data_complete.txt', 'utf-8');
    const lastArticle = articles.split('\n')[0].split(' ');
    let lastArticleLink = lastArticle[lastArticle.length - 1];
    // make it domain agnostic
    lastArticleLink = lastArticleLink.substring(lastArticleLink.lastIndexOf('/'));
    console.log('Searching until last article... ' + lastArticleLink);
    let output = [];
    let i = 1;

    while(true) {
        const data = await fetch('https://games.tiscali.cz/' + i);
        const resp = await data.text();

        const root = parse(resp);
        let exit = false;
        let lastDate = null;

        const articles = root.querySelectorAll('.article-item');
        for (let article of articles) {
            const titleNode = article.querySelector('.article-title').querySelector('a');
            const dateNode = article.querySelector('.article-info').querySelector('.text-white');
            const title = titleNode.rawText.trim();
            const titleHref = titleNode.getAttribute('href').trim();
            const date = dateNode.rawText.trim();
            const titleSuffix = titleHref.substring(titleHref.lastIndexOf('/'));

            if(titleSuffix.trim() === lastArticleLink.trim()) {
                exit = true;
                break;
            }

            output.push(`${strPad(date, 10)} ${title} | ${titleHref}`);
            lastDate = date;
        }

        if(exit) {
            break;
        }
        console.log(`Processing ${lastDate}`)
        i++;
    }

    // add an empty line
    output.push('\n');
    // add the mined data + the original content
    fs.writeFileSync(path.resolve(__dirname, 'data_complete.txt'), output.join('\n') + articles);
}

executor();