const fs = require('fs');

const fileContent = fs.readFileSync('tiscali.txt', 'utf-8');

const allLines = fileContent.split('\n');
const yearMap = new Map();

for(let line of allLines) {
    if(line.length !== 0) {
        const split = line.split(' ');
        const day = split[0];
        const dayNum = parseInt(day.substring(0, day.length - 1));
        const month = split[1];
        const monthNum = parseInt(month.substring(0, month.length - 1));
        const yearNum = parseInt(split[2]);

        if(isNaN(dayNum) || isNaN(monthNum) || isNaN(yearNum)) {
            throw Error('Wrong date at: ', line);
        }

        const text = split.filter((val, index) => index >= 3 && index <= split.length - 3).join(' ');
        const link = split[split.length - 1];
        
        if(!yearMap.has(yearNum)) {
            yearMap.set(yearNum, new Map());
        }

        const monthMap = yearMap.get(yearNum);
        if(!monthMap.has(monthNum)) {
            monthMap.set(monthNum, new Map());
        }

        const dayMap = monthMap.get(monthNum);
        if(!dayMap.has(dayNum)) {
            dayMap.set(dayNum, []);
        }

        dayMap.get(dayNum).push({
            text,
            link
        });
    }
}

const output = {};

const allYears = [...yearMap.keys()].sort((a, b) => b - a);

for(let year of allYears) {
    const monthMap = yearMap.get(year);
    const allMonths = [...monthMap.keys()].sort((a, b) => b - a);

    const currentYear = {};
    output[year] = currentYear;

    for(let month of allMonths) {
        const currentMonth = {};
        currentYear[month] = currentMonth;

        const dayMap = monthMap.get(month);
        const allDays = [...dayMap.keys()].sort((a, b) => b - a);

        for(let day of allDays) {
            currentMonth[day] = dayMap.get(day);
        }
    }
}

fs.writeFileSync('tiscali_output.json', JSON.stringify(output));