const expect = require('chai').expect;
const fs = require('fs');
const net = require('net'); 															//Used to create a test client
const server = require( __dirname + '/../tcp_server');		//Server created here

var port = 3000;
var ip = '127.0.0.1';

var numFiles = 0;

describe('The TCP server' , () => {

	var client = new net.Socket();

	it('should send data' , (done) => {

		client.connect(port , ip , () => {});
		client.on('data' , (data) => {
			expect(data.toString()).to.equal('HTTP/1.1 200');		//This throws the error
			console.log("Test Data: " + data.toString());
			client.end();
			done();
		});
		

	});
});