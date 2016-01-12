var net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {

  /*Will make a new file each time*/
  var createWriteStream = fs.createWriteStream(__dirname + '/folder/thing' + Date.now() + '.log');

socket.pipe(createWriteStream);

socket.on('err', function() {
  if(err)console.log(err);
  });
});

server.listen('3000', function() {
  console.log('Server happening');
});
