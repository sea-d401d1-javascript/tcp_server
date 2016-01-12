const net = require('net');
const functionHandler = require(__dirname + '/functionHandler.js');

var response;
var filename = (new Date().toISOString()) + '.txt';

var server = net.createServer((socket) => {
  socket.on('data', function(data) {
    response = data.toString();
    functionHandler.writeFile(filename, response);
  });

  socket.pipe(process.stdout);
  socket.write('HTTP/1.1 200');
  socket.write('Content-Type: text/plain');
  socket.end('Socket closed');
});

server.listen(3000, function() {
  console.log('Server started!');
});
