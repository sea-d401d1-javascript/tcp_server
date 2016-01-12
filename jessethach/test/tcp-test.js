var fs = require('fs');
var net = require('net');
var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
var expect = require('chai').expect;
var server = require(__dirname + "/../tcp-server.js");
var testText = 'generating test text';


describe('tcp server', function() {
  it('should connect to the tcp server', function(done) {
    chai.request('localhost:3000')
      .get('/')
      .end(function(err, socket) {
        expect(err).to.be.null;
        expect(socket.text).to.have('Written for test yyy');
      });
    done();
  });
});

// describe('tcp server', function(done) {
//   it()
// });
