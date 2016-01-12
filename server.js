const net = require('net'),
      fs = require('fs');

var server = net.createServer(function(socket) {
  socket.on('data', function(req, res) {
    var filename = __dirname + '/tmp/' + Date.now() + '.txt';
    console.log('Yo, I\'m writing some awesome stuff into ' + filename);
    fs.writeFile(filename, req, function(err) {
      if(err) return console.log(err);
    });
  });

  socket.on('end', function() {
    console.log('Yo, I closed the socket');
  });
});

server.listen(3000, function() {
  console.log('Yo, I started the server on port 3000');
});
