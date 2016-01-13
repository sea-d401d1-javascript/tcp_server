const fs = require('fs');
const net = require('net');

var count = 0;

var tcpServer = net.createServer( (socket) => {
	var time = new Date();
	var file = fs.createWriteStream(__dirname + '/log/' + time);
	count++;
	socket.pipe(file);
	socket.write(time.toString());
	socket.end();
	socket.on('close', () =>{
		file.close();
	})
});

tcpServer.listen(3000, function(){
	console.log("TCP Server live");
});

tcpServer.on('data', function(data) {
	console.log(data);
})
