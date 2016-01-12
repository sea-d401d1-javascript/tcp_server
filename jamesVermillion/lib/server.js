module.exports = function(){
  const net = require('net');
  const fs = require('fs');
  var unique;
  
  var list = fs.readdirSync( __dirname +'/../requests/');
  originalCount = list.length;

  var server = net.createServer((socket) => {
    socket.pipe(process.stdout);
    socket.write('HTTP/1.1 200');
    socket.write('Content-Type: text/plain');
    socket.end();

    socket.on('data', function(data){
      unique = Date.now();
      fs.writeFile(`${__dirname}/../requests/${unique}.txt`, data);
    });
  });
  server.listen({port: 3000}, function() {
    console.log('server\'s up dude! running on port 3000'); //eslint-disable-line
  });
}();