
const chai = require('chai'),
  expect = chai.expect,
  net = require('net'),
  fs = require('fs');
var server = require(__dirname + '/../lib/server.js'); //eslint-disable-line

describe('Test tcp server', function () {
  var oldCount;
  var newCount;
  before(function(done) {
    var list = fs.readdirSync(__dirname + '/../requests');
    oldCount = list.length;
    var client = net.connect({ port: 3000 },
      function() {
        client.write('Let\'s send this data!');  
      }
    );
    client.on('data', function(data) { //eslint-disable-line
      client.end();
      done();
    }); 
  });

  after('clean up', function(){
    var list = fs.readdirSync(__dirname + '/../requests/');
    list.map(function(f){
      fs.unlink(__dirname + '/../requests/' + f);
    });
  });

  it('Should show we have a new file made', function () {
    var newList = fs.readdirSync(__dirname + '/../requests');
    newCount = newList.length;
    expect(newCount).to.eql(oldCount + 1); 
  });
});
