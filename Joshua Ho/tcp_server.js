const net = require('net');
const fs = require('fs');

var port = 3000;
var ip = '127.0.0.1';

//Simple server
//module.exports used for ease of testing
var server = module.exports = exports = net.createServer( (socket) => {

	//Function used to create a log when 
	var file = fs.createWriteStream(__dirname + '/log/' + (new Date()).toString());
	
	socket.write('HTTP/1.1 200');			//Writes to clients connecting server																	
	socket.pipe(file);								//Pipes information into file write stream
	socket.end();											//Close the socket

	socket.on('close' , () => {
		file.close();										//End the file stream
	});
	
});

server.listen(port, () => {
	console.log('server running...');
});

//Used code from https://gist.github.com/tedmiston/5935757 to set up server.