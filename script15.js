$(function() {
  alert('just testing!');

//now we're gonna practice adding css to different selectors
//(highlight is on the css page)

//by ID
$('#first').addClass('highlight');

//by element
$('p').addClass('highlight');

//by class
$('.chosen').addClass('highlight');

//we can combine stuff too (it won't show because of what's above):
$('#first, .chosen').addClass('highlight');

//contains:
$('li:contains("Three")').addClass('highlight');

//next and previous, to navigate through the DOM:
$('li:contains("Three")').next().addClass('highlight');
$('li:contains("Three")').prev().addClass('highlight');

//siblings, parent
//this will select all siblings EXCEPT three
$('li:contains("Three")').siblings().addClass('highlight');
//and this will actually select the whole list, 
//because it's selecting the <ul> which is the whole list:
$('li:contains("Three")').siblings().addClass('highlight');

//indiv children:
$('li:nth-child(1)').addClass('highlight');

//attributes:
$('p[name="mySecondPara"]').addClass('hightlight');

//you can test for NOT things. this will highlight everything BUT the named item
$('p[name!="mySecondPara"]').addClass('hightlight');

//another NOT example. targets everything with a name (regardless of name cuz not itemized)
$('p').not('[name]').addClass('highlight');

//some specific jquery selectors. This will pick all headers:
$(':header').addClass('highlight');

//this will pick all empty paragraphs (or whatever element you name):
//$('p:empty').text('You seem lonely. Here's some text.');
//hmm, this one's not working.

//even and odds:
//$('li:even).addClass('highlight');
//nor this


});









