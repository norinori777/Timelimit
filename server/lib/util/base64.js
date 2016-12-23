'use strict';

var fs 			= require('fs');

var base64_encode = function(file){
	var bitmap = fs.readFileSync(file);
	return new Buffer(bitmap).toString('base64');
},
base64_decode = function(base64str, file){
	var bitmap = new Buffer(base64str, 'base64');
	fs.writeFileSync(file, bitmap)
};

module.exports = {
    base64_decode,
    base64_encode
};