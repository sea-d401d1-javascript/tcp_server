const net = require('net');

const client = new net.Socket();

client.connect(3000, () => {
	console.log('Connected');
	client.write('Hello server!');
});

client.on('data', (data) =>{
	console.log(data.toString());
	
});