
$(function() {

  //alert('this works.');

//let's do one
//in this example, when you click the "clickme"
//it will first look for the data (data19) and start a function
//this particular bit of data is a list of key/value pairs.
//that function creates a variable and for each element of the variable
//will push (add to), organized by key, but showing the value

/*
  $('#clickme').click(function(){

    $.getJSON('data19.json', function(data){

      var items = [];

      $.each(data, function(key, val) {

        items.push('<li id="' + key + '">' + val '</li>');
        //that last line looks complicated, but it's just pushing each value to screen

      });
*/

  //we can use JS to create stuff that's not already on the html page.
  //here's an example, creating a new unordered list
  //this will print the list of values as a UL, appended to the body.

/*
      $('<ul/>', {
        'class': 'interest-list',
        html: items.join('')
      }).appendTo('body');

    });

  });
*/
//le sigh... not working, despite double checking.
//I wonder if the src to ajax isn't working?
//nope, it's still on the web, presumably working
//but... Bob's gonna show us a better way anyway:

  $.ajax({
    url: 'data19.json',
    dataType: 'json',
    success: function(data) {
      
      var items = [];

      $.each(data, function(key, val) {

        items.push('<li id="' + key + '">' + val '</li>');

      });

      $('<ul/>', {
        'class': 'interest-list',
        html: items.join('')
      }).appendTo('body');



     },
    statuscode: {
      404: function() {
         alert('Problem. Try again.');
     }
   }
  }); 

});
});

//again... not working :(
//not sure if I have a typo or what.
//oh well, you get the idea, more or less.
//OH! bob just said we can't get 404 from our harddrive
//only when it's really on a web server
//so this one wouldn't work anyway.

