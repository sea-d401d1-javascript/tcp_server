const expect = require('chai').expect;
const identifier = require(__dirname + '/../lib/identifier');

describe('Identifier generate function', function() {
  it('should return a .txt filename based on current time', function() {
    var filename = identifier.generate();
    expect(typeof filename).to.eql('string');
    expect(filename.startsWith('/log_')).to.eql(true);
    expect(filename.endsWith('.txt')).to.eql(true);
  });
});
