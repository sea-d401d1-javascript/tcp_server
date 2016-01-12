const expect = require('chai').expect;
const chai = require('chai');
const chaiHttp = require('chai-http');
const request = require('superagent');
const fs = require('fs');
const tcpClient = require(__dirname + '/../tcp_client.js');
const functionHandler = require(__dirname + '/../functionHandler.js');

chai.use(chaiHttp);

describe('the tcp server', function() {
  it('should create a socket and receive a response', function(done) {
    chai.request('http://localhost:3000')
      .get('/')
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
      });
    done();
  });
});

describe('the functionHandler.writeFile function', function() {
  before(function(done) {
    var filenameTest = Math.random().toString() + '.txt';
    var dataTest = 'Data test.';
    functionHandler.writeFile(filenameTest, dataTest);
    done();
  });

  it('should create a new file with a unique name', function() {
    console.log('./' + filenameTest);
    var createdNewFile = fs.statSync('./' + filenameTest).isFile();
    expect(createdNewFile).to.eql(true);
  });

  it('should write the data received', function(done) {
    console.log('yes');
  });
});
