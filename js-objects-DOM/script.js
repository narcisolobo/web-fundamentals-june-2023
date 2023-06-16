// Separate primitives
var make = "Fender";
var model = "Stratocaster";
var pickupType = "Single Coil";
var color = "red";
var year = 1977;

// Object Literal Notation
// objects consist of key-value pairs
var myGuitar = {
  make: "Fender",
  model: "Stratocaster",
  pickupType: "Single Coil",
  color: "red",
  year: 1977,
  strum: function () {
    console.log("strumming the guitar...");
    console.log(this);
  },
};

// console.log(myGuitar);

// Get and set values in an object
// 2 ways: dot notation or bracket notation

console.log(myGuitar.pickupType);
console.log(myGuitar["pickupType"]);

myGuitar.color = "blue";
console.log(myGuitar.color);
myGuitar["color"] = "green";
console.log(myGuitar.color);

var prop = "color";
console.log(myGuitar[prop]);

myGuitar.strum();

console.log(this);

// querySelector is a method belonging to the document object
// it accepts normal CSS selectors
var heading = document.querySelector("h1");
console.log(heading);

heading.innerText = "WOW WE MANIPULATED THE DOM";
