var net = require('net');
var port = 3000;
var ip = '127.0.0.1';

var client = new net.Socket();

//Client method to connect to server
client.connect(port , ip , () => {
	console.log('Connected!');
	client.write('Hello, server! Love, client-baby.');
});

//Data is received via socket.write
client.on('data' , (data) => {
	console.log('Received: ' + data);
	client.end();
});

client.on('close' , () => {
	console.log('Connection Closed.');
});
