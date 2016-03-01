var expect = require('chai').expect;
var server = require('../tcpserver');
var request = require('superagent');

describe('use GET request to create a new file', function() {
  it('put create new file with date name in file folder ', function(done) {
    request.get('http://localhost:3000/');
    expect(server.bytesWrittenToDisk).to.not.equal(0);
    done();
  });
});
