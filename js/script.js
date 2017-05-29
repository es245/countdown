/*var h = window.screen.availHeight;
$('.main').css('height', h);
console.log(h);
*/

$('.message').click(function(){

});

//$('.day').html(d.getDay());
Date.daysBetween = function( date1, date2 ) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;

  return difference_ms;
}

var today = new Date();
var launchDate = new Date();

daysBetween()
