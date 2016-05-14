var fs = require('fs'), net = require('net'), path = require('path');
module.exports = exports = net.createServer(function(socket) {
	fs.access((path.dirname(__dirname) + '/logs'), fs.F_OK, function(err) {
    if (err) fs.mkdirSync((path.dirname(__dirname) + '/logs'));
		socket.pipe(fs.createWriteStream((path.dirname(__dirname) + '/logs/' + Date.now().toString() + '_log.txt')));
		socket.write('Data sent to client.');
		socket.pipe(socket);
	});
}).listen(3000);
