const net = require('net');
const server = require(__dirname + '/../index');
const expect = require('chai').expect;
const fs = require('fs');

describe('TCP Server', () => {
	it('Should return the current time', (done) =>{
		var client = net.connect({port: 3000}, () => {
			client.write('Hello test\n');
		});
		client.on('data', (data) => {
			var file = fs.readFileSync(__dirname + '/../log/' + 0);
			console.log();
			expect(file.toString()).to.eql('Hello test\n');
			done();
		});
	});
});