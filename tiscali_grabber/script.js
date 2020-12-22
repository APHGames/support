// article-list  > article
// no .tracked-event, no .disc-info

const { parse } = require('node-html-parser');
const fetch = require('node-fetch');
const fs = require('fs');

const executor = async () => {
  let output = [];
  
  for(let i = 1; i <= 2505; i++) {
    const data = await fetch('https://games.tiscali.cz/' + i);
    const resp = await data.text();
  
    const root = parse(resp);
  
    const imageWrappers = root.querySelectorAll('.image-wrapper');
    imageWrappers.map(iw => {
      const image = iw.querySelector('img');
      const src = image.getAttribute('data-src');
      if(src) {
        iw.set_content(`<img src="${src}">`);
      }
    });
  
    // remove infos
    const infos = root.querySelectorAll('.disc-info');
    infos.map(inf => inf.set_content(''));
 
    // download images
    const allImages = root.querySelectorAll('img');

    await Promise.all(
      allImages.map(async image => {
        const src = image.getAttribute('src');

        const newSrc = 'images/' + src.substring(src.lastIndexOf('/') + 1, src.lastIndexOf('jpg') + 3);

        if(fs.existsSync(newSrc)) {
          let imgBinary = await fetch(src);
          const dest = fs.createWriteStream(newSrc);
          imgBinary.body.pipe(dest);
        }
        image.setAttribute('src', newSrc);
      })
    );

    const list = root.querySelectorAll('.article-item');
    output.push(...list);

    if((i % 10) === 0 || i === 100) {
      console.log('Saving ' + i);
      fs.writeFileSync(`data_${i-10}_${i}.html`, output.join('\n'));
      output = [];
    }
  }
}

executor();