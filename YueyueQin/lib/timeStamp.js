exports.timeStamp = function() {
  var date = new Date();
  var timeStamp = date.getSeconds()+'_'+date.getMinutes()+'_'+date.getHours()+'_'+date.getDate();
  //Secs_Mins_Hours_Days
  return timeStamp;
};
