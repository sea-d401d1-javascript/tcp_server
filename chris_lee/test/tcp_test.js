const net = require('net');
var server = require('../tcp_server');
var fs = require('fs');
var expect = require('chai').expect;

describe('the tcp server', function() {
  it('Should reply with some err message if any', function (done) {
    // Set up a client and connect to port 3000 (or whatever port you use)
    var client = net.connect({ port: 3000 }, function() {
      // Send some data
      client.write('Let\'s send this data!');
    });

    // When data is returned from server
    client.on('data', function(data) {
      console.log('the data is: ' + data.toString());
      expect(data.toString()).to.eql('hello');
      // expect(Buffer.isBuffer(data)).to.eql(true);
      // console.log(data);
      client.end();
      done();
    });
  });
});
