//so what's different about these two functions? They both make an alert with a catName.
//the latter is done with a closure.
//that means, basically: Instead of just printing one value like the first one does,
//the variable catName remains in memory, even outside the scope of the function.
//iow, a closure is both a function and the environment in which it was created.

//why is this important/useful? I'm kinda fuzzy on this.
//one way: you can mimic C# stuff, and create "private fields" and "public properties"
//closures are instances of functions, like classes have instances, so that makes sense.


$(function() {

  function buildACat() {  
    var catName = "Mr. Tibbles";  
    function catFactory() { 
      // functional scoping: in JavaScript, the scope 
      // of a variable is defined by its location within 
      // the source code, and nested functions have 
      // access to variables declared in their outer scope 

      alert(catName);  
    }  
    catFactory();  // () means it executes the inner method immediately
  }

  $('#buildcat').click(function() {
    buildACat();
  });
   
});



$(function() {
  function buildACat() {
    var catName = "Tuffy";
    function catFactory() {
      alert(catName);
    }
    // Notice: instead of executing it, it just 
    // returns a REFERENCE!
    return catFactory;
  }
  
  $('#buildcat').click(function() {
    var myNewCat = buildACat();
    // buildACat() has executed.  It has gone out of scope now,
    // and all its private function variables with it, right?  Right?
    
    myNewCat(); // <-- Not so fast ... the catName variable value LIVES!
  });


});


a = (function() {
      var privateFunction = function() {
        alert('hello');
      }

      return {
        publicFunction: function() {
          privateFunction();
        }
      }
    })();

a.publicFunction();






















