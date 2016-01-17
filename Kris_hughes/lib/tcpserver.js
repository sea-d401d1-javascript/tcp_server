const net = require('net');
const fs = require('fs');

var server = net.createServer((client) => {
 //socket.pipe(process.stdout);
 // socket.write('HTTP/1.1 200');
 // socket.write('Content-Type': 'text/plain');
 //socket.write('wow, super awesome request, here is a response');
 // socket.end();

  client.on('data', (data) => {
    var clientMessage = data.toString();
    var dateFile = __dirname + '/../textfiles/' + Date.now() + '.txt';
    var wstream = fs.createWriteStream(dateFile);
    fs.writeFile(dateFile, clientMessage, (err) =>{
      if (err) throw err;
      console.log("File " + dateFile + "created and you wrote " + clientMessage);
      client.end(); 
    });
  });
});

server.listen(3000, function() {
	console.log('server up');
});

module.exports = server;
