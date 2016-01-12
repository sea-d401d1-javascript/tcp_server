const net = require('net');

const client = net.connect(3000, () => {
  console.log('Connected');
  client.write('GET / HTTP/1.1 Host: localhost:3000 User-Agent: curl/7.46.0 Accept: */*\r\n');
});

client.on('data', (data) => {
  console.log('Data received: ' + data.toString());
});

client.on('end', () => {
  console.log('Done');
});
