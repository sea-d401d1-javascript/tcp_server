const fs = require('fs');
const net = require('net');
const path = require('path');
const chai = require('chai');

const expect = require('chai').expect;
const server = require(__dirname + '/../tcp-server.js');

describe('logging tcp server', function() {
  after(function() {
    server.close();
  });

  it('should should return current time', function(done) {
    var client = net.connect({port: 3000}, () => {
      client.write('hello test\n');
    });
    client.on('data', (data) => {
        expect(data.toString().includes('HTTP')).to.eql(true);
        done();
    });
  });
});
