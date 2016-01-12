const net = require('net');
const fs = require('fs');

var response;
var pathname = (new Date().toISOString()) + '.txt';

const client = net.createServer((socket) => {
  socket.on('data', function(data) {
    response = data.toString();

    fs.writeFile(pathname, response, 'utf8', (err) => {
      if (err) throw err;
      console.log(pathname);
      console.log(response);
      console.log('File written!');
    });
  });

  socket.end('Data collected! Socket closed!');
});

client.listen(3000, function() {
  console.log('Server started!');
});
