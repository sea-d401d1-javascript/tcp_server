/*eslint-disable no-unused-vars */
const mocha = require('mocha');
const server = require(__dirname + '/../lib/tcp-serv.js');
/*eslint-enable no-unused-vars */
const net = require('net');

const expect = require('chai').expect;
const fs = require('fs');

describe('tcp logging server', function(){
  var file;
  it('should log the request', (done) => {
    var client = net.connect({port: 3000}, () => {
      client.write('hello test \n');
    });
    client.on('data', (data) => {
      var fileNameInTest = __dirname + '/../' + data.toString();
      file = fs.readFile(fileNameInTest, () => {
        expect(file.toString()).to.eql('hello test \n');
      });
    });
    client.on('close', () => {
      done();
    });
  });
});
