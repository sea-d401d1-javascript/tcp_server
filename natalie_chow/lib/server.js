const net = require('net');
const fs = require('fs');
const identifier = require(__dirname + '/identifier');

var start = exports.start = function(filepath) {
  var server = net.createServer(function(socket) {
    filepath = filepath || __dirname + '/..' + identifier.generate();
    var fileStream = fs.createWriteStream(filepath);
    socket.pipe(fileStream);
    socket.write('Request received');
    socket.end();
    console.log('TCP request logged in ' + filepath);
  });

  server.listen(3000, function() {
    console.log('server running on port 3000...');
  });
};
