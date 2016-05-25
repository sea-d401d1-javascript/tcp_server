var generator = function() {
  fs.writeFile('uniqfile ' + new Date().toString() + function(err) {
    if(err) return console.log(err);
  });
}();

module.exports.generator = generator;
