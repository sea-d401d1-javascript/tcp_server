module.exports = exports = {};
const fs = require('fs');
const net = require('net');

const server = module.exports = exports = net.createServer((socket) => {
  var fileName = Date.now().toString() + 'req.log';
  var file = fs.createWriteStream(fileName);
  socket.pipe(file);
  socket.write(fileName);
  socket.end();
  socket.on('close', () => {
    file.close();
  });
});
/*eslint-disable no-console*/
server.listen(3000, function(){
  console.log('Server listening on port 3000.');
});
