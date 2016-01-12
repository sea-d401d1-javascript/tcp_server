const net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {
  var newFile = fs.createWriteStream('./logs/' + new Date() + '.txt');
  socket.pipe(newFile);
  socket.end();

  console.log("received request");

  socket.on('end', function() {
  console.log('socket closed');
  });
});

server.listen('3000', function() {
  console.log('server up');
});
