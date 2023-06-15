// Code Flow - Functions
var x = 5;

// function declaration
function setX(newValue) {
  x = newValue;
}

/* console.log(x); // 5
setX(15); // invoking the function
console.log(x); // 15 */

// The Return of return
var x = 5; // variable initialization

function addToX(amount) {
  // console.log(x + amount);
  return x + amount;
  // console.log("hello there");
}

console.log(x); // 5
var result = addToX(-10); // function invoked
console.log(result); // -5
console.log(x); // 5

/* 
Code Flow - Is the Array a Palindrome
A palindrome is a word that is spelled the same if read forwards or backwards. Some excellent palindrome examples are:

racecar
tacocat
But in our case we'll be looking at some arrays, can the values in the array be read the same forwards as backwards

*/

function isPal(arr) {
  for (var left = 0; left < arr.length / 2; left++) {
    var right = arr.length - 1 - left;
    if (arr[left] != arr[right]) {
      return "Not a pal-indrome!";
    }
  }
  return "Pal-indrome!";
}

var result1 = isPal([1, 1, 2, 2, 1]);
console.log(result1);

var result2 = isPal([3, 2, 1, 1, 2, 3]);
console.log(result2);

// driver types
// navigatar leads
// presenter presents
