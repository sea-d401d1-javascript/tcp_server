//Write a simple tcp logging server. This server should receive tcp requests
//and save the request into a file. Each request should be saved into it's own
//file and you'll have to find something unique to name them. You can use a
//UUID library or the current time or any other means of having unique strings
//that you can think of.

module.exports = function(){
  const net = require('net');//required for tcp
  const fs = require('fs');
  var unique;

  var server = net.createServer((socket) => {
    socket.pipe(process.stdout);
    socket.write('HTTP/1.1 200');
    socket.write('Content-Type: text/plain');
    socket.end();

    socket.on('data', function(data){
      unique = Date.now();
      fs.writeFile(__dirname + '/../requests/' + unique + '.txt', data, (err) => {
        if (err) throw err;
      });
    });
  });
  server.listen(3000, function() {
    console.log ('server up');
  });
}();
