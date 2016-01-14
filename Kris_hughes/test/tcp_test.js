const mocha = require('mocha');
const net = require('net');
const fs = require('fs');
const server = require(__dirname + '/../lib/tcpserver.js');
const expect = require('chai').expect;

describe('the server', function() {
  
  var numFiles;
  before(function(done) {
    var client = new net.Socket();
    client.connect(3000);
    client.write('Hello');
    var theFiles = fs.readdirSync(__dirname + '/../textfiles');
    numFiles = theFiles.length;
    done();
  });  

  it('will create a file plus our dummy file', function() {
    expect(numFiles).to.eql(2);
  });
});