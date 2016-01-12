const net = require('net');
const fs = require('fs');

var server = net.createServer(function(socket){
  console.log('client connected');
  socket.on('end',function() {
    console.log('client disconnected');
    socket.end();
  });
  socket.pipe(socket);
  socket.write('hello\r\n');

  var ws = fs.createWriteStream('test.txt');
  socket.pipe(ws);

});

server.listen(2000,function(){
  console.log('server up');
})
