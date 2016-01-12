const expect = require('chai').expect;
const identifier = require(__dirname + '/../lib/identifier');

describe('Identifier generate function', function() {
  it('should return a filename with .txt extension', function() {
    var filename = identifier.generate();
    expect(typeof filename).to.eql('string');
    expect(filename.startsWith('/log_')).to.eql(true);
    expect(filename.endsWith('.txt')).to.eql(true);
  });

  it('should return a unique filename', function(done) {
    var filename1 = identifier.generate();
    setTimeout(function() {
      var filename2 = identifier.generate();
      expect(filename1).to.not.eql(filename2);
      done();
    }, 1500);
  });
});
