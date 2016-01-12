const net = require('net');
const fs = require('fs');
const time = require('./lib/timeStamp.js').timeStamp;

var server = net.createServer(function(socket){
  console.log('client connected');
  socket.on('end',function() {
    console.log('client disconnected');
  });
  socket.pipe(socket);
  socket.write('Done\r\n');

  var timeStamp = time();
  var ws = fs.createWriteStream(__dirname + '/req_resp/' + timeStamp);
  socket.pipe(ws);
  socket.end();

});

server.listen(2000,function(){
  console.log('server up');
});
