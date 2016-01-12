const expect = require('chai').expect;
const net = require('net');
const fs = require('fs');
const identifier = require(__dirname + '/../lib/identifier');
const server = require(__dirname + '/../lib/server');

describe('Identifier generate function', function() {
  it('should return a filename with .txt extension', function() {
    var filename = identifier.generate();
    expect(typeof filename).to.eql('string');
    expect(filename.startsWith('/log_')).to.eql(true);
    expect(filename.endsWith('.txt')).to.eql(true);
  });

  it('should return a unique filename', function(done) {
    var filename1 = identifier.generate();
    setTimeout(function() {
      var filename2 = identifier.generate();
      expect(filename1).to.not.eql(filename2);
      done();
    }, 1500);
  });
});

describe('TCP server', function() {
  var requestString = 'Hello World\r\n';

  before(function() {
    server.start('/log_test.txt');
    var client = net.createConnection(3000, function() {
      console.log('Connected to server');
      client.write(requestString);
    });
  });

  after(function() {
    fs.unlink(__dirname + '/../log_test.txt', function(err) {
      if (err) console.log(err);
    });
  });

  it('should write request to newly created text file', function(done) {
    // no file before
    fs.access(__dirname + '/../log_test.txt', fs.F_OK, function(err) {
      expect(err).to.exist;
    });

    var readFile = function() {
      fs.readFile(__dirname + '/../log_test.txt', function(err, data) {
        if (err) {
          expect(true).to.eql(false);
          console.log(err);
          return done();
        }
        expect(data.toString()).to.eql(requestString);
        done();
      });
    };
    setTimeout(readFile, 500);
  });
});
