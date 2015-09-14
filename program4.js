var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data) {
	if(err) throw err;
	dealContent(data);
});

function dealContent(content) {
	var array_string = content.split('\n');
	console.log(array_string.length - 1);
}

