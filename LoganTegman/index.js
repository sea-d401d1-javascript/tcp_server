const net = require('net');
const fs = require('fs');
const uuid = require('node-uuid');
const path = require('path');

const logDir = path.join(__dirname, 'logs/');

const server = net.createServer(socket => {
  if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);
  const ws = fs.createWriteStream(path.join(logDir, uuid.v4() + '.txt'));
  socket.pipe(ws);
  socket.write('HTTP/1.1 200 OK');
  socket.pipe(socket);
});

server.listen(3000);

module.exports = server;
