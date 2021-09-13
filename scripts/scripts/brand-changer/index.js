const utils = require('../utils');
const xml = require('xml2js');
//var sel = require('xml-selector');
// script for replacing colors in diagrams

const colorsToReplace = {
    'FF867F' : '7D0600',
    'FFF2E6' : 'A56B36',
    'FFD179' : 'FF867F',
    'FFFDC8' : 'FF867F',
    'A0F1C6' : '009244',
    '86ECEC' : '00A0A0',
    '7893EA' : '0A2C9D',
    'C9D4FB' : '4D6FDC',
    '03060C' : 'FFFFFF',
    '121824' : '7B8694',
    '1D232D' : 'F3F4F5',
    '2F3744' : 'E8EAEC',
    '535E70' : 'D2D6DC',
    '7B8694' : 'A6AEB8',
    '7D0600' : 'FF867F',
    'A56B36' : 'FFF2E6',
    'A96F00' : '7D0600',
    'A19D22' : '7D0600',
    '009244' : 'A0F1C6',
    '00A0A0' : '86ECEC',
    '0A2C9D' : '7893EA',
    '4D6FDC' : 'C9D4FB',
    'FFFFFF' : '03060C',
    '7B8694' : '121824',
    'F3F4F5' : '1D232D',
    'E8EAEC' : '2F3744',
    'D2D6DC' : '535E70',
    'A6AEB8' : '7B8694',
    'E9E56F' : 'CF2F25'
};


const files = utils.searchFiles(__dirname, '.svg');

files.forEach(async (file) => {
    if(file.includes('chapter_')) {
        return;
    }
    let content = utils.fileToStr(file);

    //const parsedXml = await xml.parseStringPromise(content);
    //console.log(parsedXml.svg.g);
    
    //let parsed = sel(content);
    //parsed.find('Status').attr('Code');
    //return;

    // at first use placeholders to avoid partial replacements
    const placeholder = 'COLOR_PLACEHOLDER_';
    Object.keys(colorsToReplace).forEach((color1) => {
        const reg = new RegExp('('+color1+')', 'gi');
        content = content.replace(reg, `${placeholder}${color1}`);
    });

    Object.keys(colorsToReplace).forEach((color1) => {
        const color2 = colorsToReplace[color1];
        const reg = new RegExp('('+placeholder+color1+')', 'gi');
        content = content.replace(reg, color2);
    });

    console.log(`Replacing ${file}`);
    utils.strToFile(file, content);
});