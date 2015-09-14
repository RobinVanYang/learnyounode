var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var array_string = buffer.toString().split('\n');
console.log(array_string.length - 1);
