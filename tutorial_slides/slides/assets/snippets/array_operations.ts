[0, 0, 0].fill(7, 1) // [0,7,7]
[1, 2, 3].find(x => x == 3) // 3
[1, 2, 3].findIndex(x => x == 2) // 1

[1, 2, 3].filter(x => x != 1) // [2, 3]
[1, 2, 3].map(x => x + 5) // [6, 7, 8]


const merge = [...arr1, ...arr2]; // merged arrays