var mocha = require('mocha'),
    chai = require('chai');
chai.use(require('chai-http'));

describe('server', function() {
  it('should recieve a request and then save to a file', function(doneCallback) {
    chai.request('http://localhost:3000')
    .get('/')
    .end(function(error, socket) {
      expect(error).to.eql(null);
      expect(socket.text).to.eql('Something unique just for you!');
    });
      doneCallback();
  });

  it('should make an html response', function() {
    chai.request('http://localhost:3000')
    .get('/')
      .then(function(response) {
        expect(response).to.be.html();
      });
  });

});

