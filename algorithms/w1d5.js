// Week 1 Day 5 - Work hard to get Arrays
// How to swap variables

var fruit1 = "apples";
var fruit2 = "oranges";

fruit2 = fruit1;

console.log(fruit2 + " and " + fruit1);
// apples and apples

// What do we expect to get back?
var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + " and " + fruit1);

// What do we get back this time?
// apples and oranges

// While loops
// We have previously worked with for loops, how are while loops different?
var start = 0;
var end = 12;

while (start < end) {
  console.log("start: " + start + ", end: " + end);
  start += 2;
  end -= 2;
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// When you don't know how many times a loop will run, use a while loop.

// Reversing an array in-place
// Write a function reverse(arr) to reverse an array, if we were given...

["a", "b", "c", "d", "e"];

// we expect to get back...
["e", "d", "c", "b", "a"];

function whileReverse(arr) {
  var start = 0;
  var end = arr.length - 1;

  while (start < end) {
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
  return arr;
}

// Console logging a function call logs the value
// of the function call. What is the value of a function
// call? WHATEVER THAT FUNCTION RETURNS.
console.log(whileReverse(["a", "b", "c", "d", "e"]));

function forReverse(arr) {
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

console.log(forReverse(["a", "b", "c", "d", "e"]));
