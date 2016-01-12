const net = require('net');
var server = require(__dirname + '/../tcp_server');
var expect = require('chai').expect;
var client = new net.Socket();

describe('test tcp server', function() {//eslint-disable-line
  it('GET request for new file', function(done) {//eslint-disable-line
    client = net.connect(3000, function() {
      console.log('connected');//eslint-disable-line
      done();
    });
    client.on('data', function(data) {
      expect(data.toString()).equal(server);
      client.end();
      done();
    });
  });
});
