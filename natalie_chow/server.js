const net = require('net');
const fs = require('fs');
const identifier = require(__dirname + '/lib/identifier');

var server = net.createServer(function(socket) {
  var filename = identifier.generate();
  var fileStream = fs.createWriteStream(__dirname + filename);
  socket.pipe(fileStream);
  socket.end();
  console.log('TCP request logged in ' + filename);
});

server.listen(3000, function() {
  console.log('server running on port 3000...');
});
