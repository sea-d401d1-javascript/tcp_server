var mocha = require('mocha');
var expect = require('chai').expect;
var net = require('net');
var fs = require('fs');
var server = require(__dirname + '/../tcp_server2.js');

// Done tells it to stop the async process
describe('tcpServer', function() {
  it('should output data', function(done) {
    // var socket = net.connect(3000);

// Callback below gives you an array of all the files
    server.on('finished', function() {
        fs.readdir(__dirname + '/../folder', function (err, files) {
        var logFiles = [];
// -4 collects .log: 4 characters. Negative number starts 4 back from the end.
          files.forEach(function(currentValue) {
            if (currentValue.slice(-4) === '.log') logFiles.push(currentValue);
          });

          var filename = logFiles[logFiles.length - 1];

          fs.readFile(__dirname + '/../' + filename, function(err, data) {
            if (err) throw err;
            var output = data.toString().split('\n');
            expect(output[0]).to.equal('GET /test');
            done();
          });
        });
      });

      socket.write('GET /test');

  });
});


// Server takes request
// Server makes connection to client
// Server makes file and connects it to writeStream
// Server pipes client request info to file
// When server completes data piping, it saves file to system (folderFolder)
