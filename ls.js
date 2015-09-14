var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function(err, list) {
		if(err) return callback(err);
		var content = new Array();
		for(i = 0; i < list.length; i++) {
			if(path.extname(list[i]).slice(1) == ext) 
				content.push(list[i]);
		}
		callback(null ,content);
	});
};
