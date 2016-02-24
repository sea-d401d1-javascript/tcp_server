var net = require('net');
var fs = require('fs');

var server = module.exports = exports = net.createServer((socket) => {
  var requestTime = new Date();
  var filestream = fs.createWriteStream('uniqfile ' + requestTime.toString());
  socket.write('HTTP/1.1 200');
  socket.write('Content-Type: text/plain');
  socket.pipe(filestream);
  // socket.pipe(socket);
  socket.write(requestTime.toString());
  socket.end();
});

server.listen(3000, function() {
  console.log('Server bound');
});
