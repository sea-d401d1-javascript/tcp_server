const net = require('net'),
      fs = require('fs');

var server = net.createServer(function(socket) {
  console.log('connection to server started');
  socket.on('data', function(reqData, resData) {
    var date = new Date();
    var newFile = __dirname + "/tmp/" + date.toString() + ".txt";

    fs.writeFile(newFile, reqData, function(err) {
      if(err) return console.log(err);
    });
    console.log('write to file');
  });

  socket.on('end', function() {
    console.log('socket closed');
  });

  socket.write('Something unique just for you!');

}).listen(3000, function() {
  console.log('server started on port 3000');

});
