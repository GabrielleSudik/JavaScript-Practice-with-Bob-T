$(function() {
  
  //alert('it works');
  alert(AETRIS.version);
  alert(AETRIS.planet.name);

  //one important thing using JS is making sure the page doesn't depend on it
  //it should enhance the page, but be ignorable if need be (this is graceful degradation)
  //here's an example of what not to do:

  //document.write("Don't do this.");
  //any info in document.write will not print to screen if JS is off.


});

//var version = "1.2";
//just popping that var in there will collectively make things messy.
//so do this instead:
//the next var's name is made up by Bob, it's just the name of a project.

var AETRIS = {};

AETRIS.version = "1.2";

//what he's done is create a single object at the global level.
//then everything else gets created inside that object. something like that.

AETRIS.planet = {
  id: 34,
  name: "Intempstesta Nox"

}

//like that.
//there are other ways to keep the global namespace tidy, but we're not covering them here.
//one way is to do everything inside the ready method. but that will get crowded.
//and if the code is complex enough, you'll use multiple namespaces (outside the ready)



