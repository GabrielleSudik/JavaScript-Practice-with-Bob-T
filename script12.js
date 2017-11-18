var batwing = {
  status: "Ready",
  rescueBatman: function() {
    document.write("Locating the transponder... initiating launch... ");
  }
}


//this object batwing has one property: status. and one method: rescueBatman, which is an anoymous function.

if (batwing.status === "Ready") {
  batwing.rescueBatman();
}

//that part means: if the batwing is ready, rescue batman. easy!


//this next example shows an object with only a property. but the property is a function.

var utilities = {
  printAllMembers: function(targetObject) {
    for (i in targetObject){
      document.write("<br/>" + targetObject[i]);
    }
  }
}

utilities.printAllMembers(batwing);

//what it does: prints all characters in the object "batwing"
//ie, it prints all of the code inside batwing's {}


var i_am_empty = {};

utilities.printAllMembers(i_am_empty);

//that one didn't print anything because it's empty. BUT empty variables can be filled in later!


var planet = {
  id: 34,
  name: "Imtempesta Nox",
  faction: {
    factionId: 2,
    name: "Nex",
    notification: function() {
      document.write("Nex alliance... Unite!");
    }
  },
  cities: [
    {locationId: 15, name: "Gladius" },
    {locationId: 16, name: "Chalybs" },
    {locationId: 17, name: "Ensis"   }
  ]
}

//that has a lot. the faction property of planet has itself 2 properties, and 1 method.
//the cities property is an array, and each element has 2 properties.

//here is how to call the function (document.write is already in the function):
planet.faction.notification();

//here's how to write a specific city name (it doesn't already have document.write as part of it)
document.write(planet.cities[1].name);


//how to set or change values:
document.write("<br/>" + planet.name);
planet.name = "Vultus";
document.write("<br/>" + planet.name);

var z = planet
document.write(z.name);

//how to change the definition of an object after we've defined it:
if (typeof planet.defense === "undefined"){
  planet.defense = "Ion Cannon";
}

document.write(planet.defense);

//ie, you don't need to do a lot fancy, just start referencing the new property.
//BUT check that it hasn't been defined first, to be safe.

//how to print out all of the object's properties:
for (member in planet) {
  document.write("<br/>" + member + "---> " + planet[member]);
}

//and you can use constructors -- it looks kind of like a class, doesn't it?
//how you can create multiple variables based on the constructor.
//Bob says this isn't too common, and a little advanced, so don't worry about it much.

function car(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
}

var myCar = new car("Eagle", "Talon", 1993);
var myOtherCar = new car("Dodge", "Dart", 1971);

alert(myCar.model);
alert(myOtherCar.make);




