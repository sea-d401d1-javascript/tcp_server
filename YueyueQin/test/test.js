const expect = require('chai').expect;
const net = require('net');
var client = new net.Socket();

describe('Test tcp server', function() {

  it('Should reply with some err message if any', function(done) {

    // Set up a client and connect to port 2000(or whatever port you use)
    client = net.connect(2000,function() {
      console.log('connected to server');
    }
  );

    // When data is returned from server
    client.on('data', function(data) {
      // Let's make sure data equals the correct message
      expect(data.toString()).equal('Done');
      client.end();
      done();
    });

  });

});
