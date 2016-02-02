const expect = require('chai').expect;
const net = require('net');
const fs = require('fs');
const server = require(__dirname + '/../lib/server');

describe('TCP server', function() {
  var requestString = 'Hello World\r\n';
  var filepath = __dirname + '/../log_test.txt';

  before(function(done) {
    server.start(filepath);
    var client = net.createConnection(3000, function() {
      console.log('Connected to server');
      client.write(requestString);
    });
    client.on('data', function(data) {
      client.end();
      done();
    });
  });

  it('should write request to newly created text file', function(done) {
    fs.readFile(filepath, function(err, data) {
      if (err) {
        expect(true).to.eql(false);
        console.log(err);
        return done();
      }
      expect(data.toString()).to.eql(requestString);
      done();
    });
  });

  after(function() {
    fs.unlink(filepath, function(err) {
      if (err) console.log(err);
    });
  });
});
