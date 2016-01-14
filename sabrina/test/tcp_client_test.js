const net = require('net');
const expect = require('chai').expect;
const chai = require('chai');
const fs = require('fs');
const functionHandler = require(__dirname + '/../functionHandler.js');

describe('the functionHandler.writeFile function', function() {
  var filenameTest = Math.random().toString() + '.txt';
  var dataTest = 'Data test.';

  before(function(done) {
    functionHandler.writeFile(filenameTest, dataTest);
    done();
  });

  it('should create a new file with a unique name', function() {
    console.log('./' + filenameTest);
    var createdNewFile = fs.statSync('./' + filenameTest).isFile();
    expect(createdNewFile).to.eql(true);
  });

  it('should write the data received', function(done) {
    var finalData;
    fs.readFile(('./' + filenameTest), (err, data) => {
      if (err) throw err;
      finalData = data.toString();
      expect(finalData).to.eql(dataTest);
      done();
    });
  });
});
