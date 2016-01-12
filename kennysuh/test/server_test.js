var server = require(__dirname + '/../lib/tcp_server');
var expect = require('chai').expect;

describe('server connection', function() {
  it('should be started', function() {
    expect(server.isUp).to.eql(true);
  });
});
