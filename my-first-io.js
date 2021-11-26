const fs = require('fs');

const n = fs.readFileSync(process.argv[2], 'utf8').toString().split('\n').length - 1;
console.log(n);
