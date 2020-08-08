/*********************
 * JavaScript basics *
 *********************/


// show message in console
console.log("Hello JavaScript World from .js file");


// boolean
var isActive = true;
console.log(`The value of the variable 'isActive' of type ${typeof isActive} is: ${isActive}`);


// number
let qty = 12;
let exp = 2.43e-5;
let hex = 0xf00d;
let binary = 0b00000101;
let octal = 0o744;
console.log(`The value of the variable 'qty' of type ${typeof qty} is: ${qty}`);
console.log(`The value of the variable 'exp' of type ${typeof exp} is: ${exp}`);
console.log(`The value of the variable 'hex' of type ${typeof hex} is: ${hex}`);
console.log(`The value of the variable 'binary' of type ${typeof binary} is: ${binary}`);
console.log(`The value of the variable 'octal' of type ${typeof octal} is: ${octal}`);

const numberPi = 3.14;
console.log(`The value of the variable 'numberPi' of type ${typeof numberPi} is: ${numberPi}`);


// string
let message;
message = "Hi, this is a message";
console.log(`The value of the variable 'message' of type ${typeof message} is: '${message}'`);

// popup message
alert("Hello JavaScript World from JS file");

// dialog window and read input
let myVar = prompt("What is your name?");
console.log("log: My name is " + myVar);
console.info("info: My name is " + myVar);
console.warn("warning: My name is " + myVar);
console.error("error: My name is " + myVar);

// data type of a variable or value
let myUndefinedVar;
let myObjectVar = null;

console.log(typeof myUndefinedVar);
console.log(typeof myObjectVar);
console.log(typeof true);
console.log(typeof printName);

function printName(name) {
  console.log(name);
}
