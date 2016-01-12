var net = require('net');
var fs = require('fs');
// const generator = require('f-generator');

var server = net.createServer((socket) => {
  console.log('Server request');
  socket.on('data', function(data) {
    fs.writeFile('uniqfile ' + new Date().toString(), data.toString());
    socket.write('Written for test');
  });

  // console.log(socket.destroyed);
  socket.pipe(socket);

  socket.on('end', function() {
    console.log('server disconnected');
    socket.end();
  });
});

server.listen(3000, function() {
  console.log('Server bound');
});
