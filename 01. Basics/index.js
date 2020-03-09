/*********************
 * JavaScript basics *
 *********************/

// popup message
alert("Hello JavaScript World");

// dialog window and read input
let myVar = prompt("What is your name?");
console.log("My name is " + myVar);

// data type of a variable or value
const myPiNumber = 3.14;
let myUndefinedVar;
let myObjectVar = null;

console.log(typeof myPiNumber, typeof 25);
console.log(typeof myVar, typeof "Hello");
console.log(typeof myUndefinedVar);
console.log(typeof myObjectVar);
console.log(typeof true);
console.log(typeof printName);

function printName(name) {
  console.log(name);
}
