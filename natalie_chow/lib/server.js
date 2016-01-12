const net = require('net');
const fs = require('fs');
const identifier = require(__dirname + '/identifier');

var start = exports.start = function(filename) {
  var server = net.createServer(function(socket) {
    filename = filename || identifier.generate();
    var fileStream = fs.createWriteStream(__dirname + '/..' + filename);
    socket.pipe(fileStream);
    socket.end();
    console.log('TCP request logged in ' + filename);
  });

  server.listen(3000, function() {
    console.log('server running on port 3000...');
  });
};

// module.exports = server;
