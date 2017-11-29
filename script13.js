window.onload = function() {

var clickMeButton = document.getElementById('clickMe');
clickMeButton.onclick = runTheExample;
}

/* you ran this first to learn, coded out to learn other stuff
function runTheExample() {
  alert('running the example');
}
*/

/* this next one will provide what kind of element "second" is (it's a paragraph) */
/* so it prints p on the alert. if it were a heading it would print h, etc. */
/* the if stuff (1) checks if there is actually content and if so, */
/* will print in the alert what actual stuff is inside the element */

/* The stuff starting at document... will print the string into the document itself, */
/* in place of whatever is already at "second." Looks like a useful way to quickly add */
/* info or whatever in a website, like if someone didn't fill out a box or something */



function runTheExample(){
  var myElement = document.getElementById('second');

  var myNodeName = myElement.nodeName;
  alert(myNodeName);

  if (myElement != null)
  {
    alert(myElement.innerHTML);
  }

  document.getElementById('second').innerHTML = "See how I set the text here?";

  var listOfParagraphs = document.getElementsByTagName('p');

  alert(listOfParagraphs.length);

  var secondParagraph = listOfParagraphs[1];
  alert(secondParagraph.innerHTML);

  myElement2 = document.getElementById('second');
  alert(myElement2.parentNode.nodeName);

  /* other properties: childNodes[0]; firstChild; lastChild; nextSibling; previousSibling  */
  /* Bob says you'll probably never use these after you learn jquery */

  var anchor = document.getElementById('myAnchor');
  var anchorDestination = anchor.href;
  alert(anchorDestination);

  anchor.href = "http://www.devu.com";

  
}

/* Bob cautions us that (in 2012 at least) innerHTML wasn't standard in all browsers */
/* he thought that using jquery would be a better way of doing what you just did there */
/* dunno if he's still right in late 2017 */

/* heh, note that step 3 above -- changes to the document -- comes before step 4 -- an alert -- */
/* but step 4 happens first */
/* AND BUT step 5 shows the next text from step 3 before it appears in the doc! */

/* something you can do: create multiple css styles, then use javascript to change from one to another */
/* Bob didn't get into details */

// you goof -- you forgot the easier commenting syntax lol
