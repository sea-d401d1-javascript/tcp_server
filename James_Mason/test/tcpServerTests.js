var net = require('net'), fs = require('fs'), path = require('path'), expect = require('chai').expect;
describe('TCP Logging Server', function() {
  describe('tcpServer.js', function() {
    before(function(done) {
      this.server = require(__dirname + '/../lib/tcpServer');
      done();
    });
    after(function(done) {
      this.server.close(done);
    });
    it('Should make a log file when a client connects, which contains their request.', function(done) {
      fs.access((path.dirname(__dirname) + '/logs'), fs.F_OK, function(err) {
        if (err) fs.mkdirSync((path.dirname(__dirname) + '/logs/'));
        var currentNumberOfFiles = fs.readdirSync(__dirname + '/../logs').length;
        var client = new net.Socket();
        var messageToServer = 'Test message @ ' + Date.now().toString();
        client = net.connect(3000, function() {
          client.write(messageToServer);
        });
        client.on('data', function(data) {
          client.end();
          expect(currentNumberOfFiles + 1).to.equal(fs.readdirSync(__dirname + '/../logs').length);
          expect(fs.readFileSync((__dirname + '/../logs/') + fs.readdirSync(__dirname + '/../logs')[currentNumberOfFiles]).toString('utf8')).to.equal(messageToServer);
          done();
        });
    	});
    });
  });
});
