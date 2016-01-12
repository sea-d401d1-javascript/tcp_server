var chai = require('chai');
chai.use(require('chai-http'));
var expect = chai.expect;

describe('server.js', function() {
  it('might could make a request to the server \(*southern accent*\)', function() {
    chai.request('http://localhost:3000').get('/')
    .then(function(res) {
      expect(res).to.have.status(200);
    }).catch(function(err) {throw err;});
  });

  it('might could make an html response \(*southern accent*\)', function() {
    chai.request('http://localhost:3000').get('/')
    .then(function(res) {
      expect(res).to.be.html();
    });
  });
});
