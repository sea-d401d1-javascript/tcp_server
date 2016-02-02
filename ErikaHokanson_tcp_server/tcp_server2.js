var net = require('net');
var fs = require('fs');

var server = module.exports = net.createServer(function(socket) {

/*Will make a new file each time*/
var createWriteStream = fs.createWriteStream(__dirname + '/folder/thing' + Date.now() + '.log');

socket.pipe(createWriteStream);

socket.on('data', function() {
  console.log('Data working');
});

socket.on('err', function() {
  if(err)console.log(err);
  });
});

server.listen('3000', function() {
  console.log('Server happening');
});
