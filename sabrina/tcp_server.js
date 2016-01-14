const net = require('net');
const functionHandler = require(__dirname + '/functionHandler.js');

var request;
var filename = (new Date().toISOString()) + '.txt';

const server = net.createServer((socket) => {
  socket.on('data', function(data) {
    request = data.toString();
    functionHandler.writeFile(filename, request);
  });

  socket.end('Data collected at ' + filename + '\nSocket closed!');

  server.close('Server finished!');
});

server.listen(3000, function() {
  console.log('Server started!');
});
