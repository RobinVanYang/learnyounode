//console.log("HELLO WORLD");
var output = 0;
var argv_array = process.argv;
for(i = 2; i < argv_array.length; i++) {
	output += Number(argv_array[i]);
}

console.log(output);

