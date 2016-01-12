const chai = require('chai');
const fs = require('fs');
const path = require('path');
const expect = chai.expect;
chai.use(require('chai-http'));
require('../index.js');

const logDir = path.join(__dirname, '../logs/');

describe('tcp-server', () => {
  before(done => {
    fs.readdir(logDir, (err, files) => {
      this.origFiles = files ? files : [];
      this.hadFiles = !err;
      done();
    });
  });

  it('should create a file on request', done => {
    chai.request('http://localhost:3000').get('/').then(() => {
      fs.readdir(logDir, (err, files) => {
        if (err) console.log(err);
        this.newFiles = files ? files : [];
        expect(files.length).to.be.above(this.origFiles.length);
        done();
      });
    }).catch(err => console.log(err));
  });
  it('should send a valid HTTP response', done => {
    chai.request('http://localhost:3000').get('/').then(res => {
      expect(res.status).to.eql(200);
      done();
    }).catch(err => console.log(err));
  });
  // cleanup any files created during testing
  after(done => {
    fs.readdir(logDir, (err, files) => {
      if (err) console.log(err);
      files.filter(file => this.origFiles.indexOf(file) === -1)
        .map(file => fs.unlinkSync(path.resolve(logDir + file)));
      if (!this.hadFiles) fs.rmdirSync(logDir);
      done();
    });
  });
});
