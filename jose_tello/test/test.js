const expect = require('chai').expect;
const fs     = require('fs');
const net    = require('net');
const moment = require('moment');
const server = require(__dirname + '/../server.js');

var now = moment();

describe('test tcp server is writing file', () => {
  before(() => {
    var filesBefore;
    fs.readdir('./', (err, files) => {
      filesBefore = files.length;
      debugger;
      console.log(files);
      console.log('first');
    });
  });
  it('should run the program', (done) => {
    var client = net.connect({ port: 3000 }, () => {
      console.log('second');
      client.write('test');
      client.end();
      done();
      debugger;
    });
  });
  it('see if file exists', (done) => {
    console.log('third');
    fs.readdir('./', (err, files) => {
      debugger;
      expect(files === filesBefore + 1).to.eql(true);
    });
  done();
  });
});
