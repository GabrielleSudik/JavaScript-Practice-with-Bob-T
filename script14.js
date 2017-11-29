jQuery(document).ready(function(){
  //startup code goes here
  alert("this works1!");
});

//above, the stuff in the first () is what is passed to jQuery.
//in this case, it's the whole document
//when it's passed, we then call the ready method
//when it's ready, the function executes

//SHORCUT!  $=jQuery  ie:  $(document)....
//another shortcut: that whole first line could just be $(function() { ...
//the (document).ready is understood.

//here are some selectors-- they return jQuery objects
//note how they match css syntax (tags, classes and IDs)
//$('.importantText') -- will find all classes labelled this 
//$('#myFirstParagraph') -- will find all IDs labeled this
//$('p') -- will find all p tags
//$(document) -- finds the whole thing

//examples:

//$('p').fadeOut(); -- makes all paragraphs fade out.

//sometimes it's ambiguous whether $ is calling a function or identifying a category

//here's how to dynamically add to the page: you make a whole new line of code
//jQuery('<div id="badge"><img src="badge.gif" alt="badge earned" /></div>')

//here's some stuff. Not sure what Bob's teaching us here.
//$.myCustomMethod = function() { alert('Hi!');};

/* $.listBox = {
  show: function() {  },
  hide: function() {  },
  position: function() {  },
  initiate: function() {  }
}
*/

jQuery(document).ready(function(){
  //startup code goes here
  alert("this works2!");
});

//see how it alerted twice? good.

//jQuery('p').fadeOut(500).fadeIn(500);
//well that didn't work. :-\

//but this does:
//immediately updates text on page when it is ready:

$(function() {
  $("#title").text("I can now get to h1 immediately.");
});

//this will immediately replace #first paragraph.
//Bob says "with html" but just looks like heading text to me.

/*
$(function() {
  $("#first").html("<h2>Great quotes!</h2>");
});
*/

//here you add something to the front.
//note how the <>s go inside the quotes. 
//because that WHOLE THING is being inserted into the html.

$(function() {
  $("#first").prepend("<h2>This will pop in right before #first</h2>");
  $("#first").append("<h3>...and this pops in after.</h3>");
});

//OTHER SIMILARS: before, after, insertBefre, insertAfter
//these work outside the identified selection.

//let's try changing an attribute
//first identify the selection (myAnchor) then when you want to change
//then what you want to change it to.

$(function() {
  $("#myAnchor").attr("href", "http://www.bing.com");
});

//activate some css code (make sure the stylesheet in referenced in the html):

$(function() {
  $("#second").addClass("standout");
});
