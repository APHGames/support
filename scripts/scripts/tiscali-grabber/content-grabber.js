// article-list  > article
// no .tracked-event, no .disc-info

const { parse } = require('node-html-parser');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const executor = async (dataPath) => {
    let output = [];

    const allData = fs.readFileSync(dataPath, { encoding: 'utf-8' });
    const lines = allData.split('\n');
    
    // todo.... the content is loaded by script or something...
    for (let line of lines) {
        const httpIdx = line.indexOf('http');

        if(httpIdx !== -1) {
            const url = line.substr(httpIdx).trim();
            const data = await fetch('url');
            const resp = await data.text();
            const root = parse(resp);

            const detail = root.querySelector('#article-detail');
            if(detail) {
                const h2 = root.querySelector('h2');
                output.push('## ' + h2.text);
                const allparagraphs = detail.querySelectorAll('p');
                allparagraphs.forEach(p => output.push('- ' + p.text + '\n'));
            } else {
                console.log('Can\'t parse ' + url);
            }
            output.push('\n');
        }
    }
    fs.writeFileSync(path.resolve(__dirname, `data_content.md`), output.join('\n'));

}

executor(path.resolve(__dirname, 'data_processed.json'));