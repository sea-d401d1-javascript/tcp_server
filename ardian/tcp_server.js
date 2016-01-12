const net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {
  var newFile = fs.createWriteStream('./logs/' + new Date() + '.txt');
  socket.pipe(newFile);
  console.log('received request');//eslint-disable-line



  socket.on('end', function() {
    console.log('socket closed');//eslint-disable-line
  });
  socket.end();
});

server.listen('3000', function() {
  console.log('server up');//eslint-disable-line
});
