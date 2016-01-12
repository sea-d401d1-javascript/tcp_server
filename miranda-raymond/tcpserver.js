var net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {
  var newFile = fs.createWriteStream('./file/' + new Date());
  socket.pipe(newFile);
  socket.end();
  socket.on('end', function() {
    console.log('end');
  });
});

server.listen('3000', function() {
  console.log('server up');
});
