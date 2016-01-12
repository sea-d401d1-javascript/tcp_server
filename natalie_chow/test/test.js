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
    // no file before
    // fs.access(filepath, fs.F_OK, function(err) {
    //   expect(err).to.exist;
    // });
    // read file after
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
