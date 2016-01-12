const net = require('net');
const fs = require('fs');

var server = net.createServer(function(socket) {
  var fileStream = fs.createWriteStream(__dirname + '/test.txt');
  socket.pipe(fileStream);
  socket.end();
});

server.listen(3000, function() {
  console.log('server running on port 3000...');
});
