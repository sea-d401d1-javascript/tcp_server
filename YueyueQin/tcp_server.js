const net = require('net');
const fs = require('fs');
const time = require('./lib/timeStamp.js').timeStamp;

var server = net.createServer(function(socket){
  console.log('client connected');

  socket.on('end',function() {
    console.log('client disconnected');
  });
  socket.on('data',function(data){
    console.log('passed data \r\n' + data);
  });

  socket.write('Done');
  socket.pipe(socket);


  var timeStamp = time();
  var ws = fs.createWriteStream(__dirname + '/req_resp/' + timeStamp);
  socket.pipe(ws);
  socket.end();

});


server.listen(2000,function(){
  console.log('server up');
});
