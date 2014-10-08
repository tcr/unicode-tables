var fs = require('fs');

function id (a) {
	return a;
}

function f_code (f) { return parseInt(f[0], 16); }
function f_upper (f) { return f[12] ? parseInt(f[12], 16) : 0; }
function f_lower (f) { return f[13] ? parseInt(f[13], 16) : 0; }

var unicode = fs.readFileSync('UnicodeData.txt', 'utf-8').split(/\n/).filter(id).map(function (line) {
	return line.split(';');
})

var bundle = {};

unicode.filter(function (f) {
	return f_lower(f)
}).forEach(function (f) {
	var delta = f_code(f) - f_lower(f);
	(bundle[delta] || (bundle[delta] = [])).push(f_code(f));
})

Object.keys(bundle).map(function (k) {
	console.log(bundle[k].map(function (c) {
		return 'case ' + c + ':'
	}).join(' '), 'return ' + k + ';');
})
