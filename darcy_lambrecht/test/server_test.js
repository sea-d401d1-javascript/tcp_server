// const server = require(__dirname + '/../lib/tcp_server');
const expect = require('chai');
const net = require('net');
var client = new net.Socket();

describe('test tcp server', function() {//eslint-disable-line

  it('to see if the request is being written to a file', function(done) {//eslint-disable-line

    client = net.connect(3000, function() {
      console.log('connected');//eslint-disable-line
      done();
    });
    client.on('data', function(data) {
      expect(data.toString()).equal('HTTP/1.1 200');
      client.end();
      done();
    });
  });
});
