const net = require('net');
const fs = require('fs');

var server = net.createServer((socket) => { //'connection' listener
  var file = fs.createWriteStream('./files/' + new Date() + '.txt');
  console.log('client connected');
  socket.on('data', (data) => {
    file.write(data);
  })
  socket.on('end', () => {
    console.log('client disconnected');
  });

  socket.write('hello');
  socket.end();
});

server.listen(3000, function() { // under than 1000, you have to be in root
  console.log('server up');
});
