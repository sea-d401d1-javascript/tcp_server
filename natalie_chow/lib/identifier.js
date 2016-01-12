exports.generate = function() {
  var timestamp = (new Date()).toString();
  var dateString = timestamp.substring(4, 15).replace(/\s/g, '-');
  var timeString = timestamp.substring(16, 24).replace(/:/g, '');
  return '/log_' + dateString + '_' + timeString + '.txt';
};
