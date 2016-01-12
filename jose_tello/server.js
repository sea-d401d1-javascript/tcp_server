const net    = require('net');
const fs     = require('fs');
const moment = require('moment');

var port = 3000,
    host = '127.0.0.1',
    now  = moment();

var server = net.createServer((socket) => {
  console.log('Connected: ' + socket.remoteAddress + ': ' + socket.remotePort);
  socket.on('data', function(data) {
    console.log('Data: ' + socket.remoteAddress + ': ' + data);
    var timeStamp = now.format('YYYY-MM-DD HH:mm:ss Z');
    fs.writeFile(timeStamp, data, (err) => {
      if (err) return 'Error.'
      console.log('File saved.');
    })
  });
  socket.end();
}).listen(port, host);

console.log('Server listening on ' + host + ': ' + port);
