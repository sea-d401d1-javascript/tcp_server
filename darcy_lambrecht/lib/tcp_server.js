const net = require('net');
const fs = require('fs');

var server = net.createServer((socket) => {
  var time = new Date().getTime();
  var stream = fs.createWriteStream('log/tcp-request-' + time + '.txt');

  socket.pipe(stream);
  socket.end('HTTP/1.1 200');
});
server.listen(3000, function() {
    console.log('server up');//eslint-disable-line
});
