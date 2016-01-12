const net = require('net');
const functionHandler = require(__dirname + '/functionHandler.js');

var response;
var filename = (new Date().toISOString()) + '.txt';

const client = net.createServer((socket) => {
  socket.on('data', function(data) {
    response = data.toString();
    functionHandler.writeFile(filename, response);
  });

  socket.end('Data collected at ' + filename + '\nSocket closed!');

  client.close('Server finished!');
});

client.listen(3000, function() {
  console.log('Server started!');
});
