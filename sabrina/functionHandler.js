const fs = require('fs');

exports.writeFile = function(filename, request) {
  fs.writeFile(filename, request, 'utf8', (err) => {
    if (err) throw err;
    console.log('File name: ' + filename);
    console.log('Data sent: ' + request);
    return console.log('File written!');
  });
};
