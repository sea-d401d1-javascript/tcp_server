var net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {
  socket.on('data', function(chunk) {
    var fileName = __dirname + '/../outputs/' + Date.now() + '.txt';
    fs.writeFile(fileName, chunk.toString(), function() {console.log('wrote file')});
  });
  socket.on('end', function() {
    console.log('server down');
  });
});

server.listen(3000, function() {
  exports.isUp = true;
  console.log('server up');
});
