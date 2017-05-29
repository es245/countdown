/*var h = window.screen.availHeight;
$('.main').css('height', h);
console.log(h);
*/

$('.message').click(function(){

});



//$('.day').html(d.getDay());
var daysBetween = function( date1, date2 , format) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  var time = Math.abs(date1_ms - date2_ms);

  return Math.floor(time / format);
}

var today = new Date();
var launchDate = new Date("November 18, 2020 00:00:00");
var formats = [86400000, 3600000, 60000,1000];

function getRemainingTime(){
  document.getElementById('day').innerHTML = daysBetween(launchDate, today, formats[0]);
  document.getElementById('hour').innerHTML = daysBetween(launchDate, today, formats[1]);
  document.getElementById('minute').innerHTML = daysBetween(launchDate, today, formats[2]);
  document.getElementById('second').innerHTML = daysBetween(launchDate, today, formats[3]);

  setTimeout(getRemainingTime(), 1000);
}


/* datepart: 'y', 'm', 'w', 'd', 'h', 'n', 's'
Date.dateDiff = function(datepart, fromdate, todate) {
 datepart = datepart.toLowerCase();
 var diff = fromdate - todate;
 var divideBy = { w:604800000,
                  d:86400000,
                  h:3600000,
                  n:60000,
                  s:1000 };

 return Math.floor( diff/divideBy[datepart]);
}
//Set the two dates
var y2k  = new Date(2020, 10, 18);
var today= new Date();
console.log('Weeks since the new millenium: ' + Date.dateDiff('w', y2k, today)); //displays 625
console.log('Weeks since the new millenium: ' + Date.dateDiff('d', y2k, today)); //displays 625
console.log('Weeks since the new millenium: ' + Date.dateDiff('n', y2k, today)); //displays 625
console.log('Weeks since the new millenium: ' + Date.dateDiff('s', y2k, today)); //displays 625
*/
