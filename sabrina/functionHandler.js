const fs = require('fs');

exports.writeFile = function(filename, response) {
  fs.writeFile(filename, response, 'utf8', (err) => {
    if (err) throw err;
    console.log('File name: ' + filename);
    console.log(response);
    return console.log('File written!');
  });
};
