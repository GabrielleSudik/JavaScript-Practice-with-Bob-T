$(function() {

//at first, we set up the page how we want it to start

$('#success').hide();
$('#startover').addClass('hoverOut');
var score = 0;

$('#bobhead').click(function() {

  //do this for testing only:
  //alert('click works');

  //here's what happens when we click bobhead:

  score++;
  $('#score').text(score);  
  $('#success').show('slow').fadeOut(2000);
  //fast or slow (or others maybe) are parameters that jq already knows.
  //2000 = 2 seconds (you set by millisecond)
  //see how you chained instructions for what happens to the #success id?

  });

//here's stuff that happens when we hover over "start over" "button":

$('#startover').hover(function() {
    score=0;
    $('#score').text(score);
    $('#startover').addClass('hoverIn').remove('hoverOut');
  }, function() {
    $('#startover').removeClass('hoverIn').addClass('hoverOut');

  });

});