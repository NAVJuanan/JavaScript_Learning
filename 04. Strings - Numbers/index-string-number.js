/**********************************
 * JavaScript strings and numbers *
 **********************************/


// NaN -> not a number
console.log("Convert 'hola' to a number", Number("hola"));


// convert to number
console.log("Convert '25' to a number", Number("25"));


// convert to integer
console.log("Convert '25.75' to an integer", parseInt("25.75"));


// convert to float
console.log("Convert '25.75' to a float", parseFloat("25.75"));


// convert to string
console.log("Convert '25' to a string", String(25));
const myNumber = 15.43;
console.log("Convert a number value to a string", myNumber, myNumber.toString());


// string methods & properties
const myString = "Hola qué tal";
console.log(`Length of '${myString}'`, myString.length);
console.log(`Lower case '${myString}'`, myString.toLowerCase());
console.log(`Upper case '${myString}'`, myString.toUpperCase());
console.log(`Slice 10 first characters '${myString}'`, myString.slice(0, 10));

const myName = prompt("What is your name?");
const nameLength = myName.length;

console.log(`The name entered includes 'e': '${myName.includes("e")}'`);
console.log(`The name entered starts with 'J': '${myName.startsWith("J")}'`);
console.log(`The name entered ends with 'a': '${myName.endsWith("a")}'`);
console.log(`The name entered contains an 'a' in the position: '${myName.indexOf("a")}'`);
console.log(`The name entered replaced 'a' for 'e': '${myName.replace("a", "e")}'`);
console.log(`The name entered splitted: '${myName.split(" ")}'`);

const modifiedName = myName.slice(0, 1).toUpperCase() + myName.slice(1, nameLength).toLowerCase();
console.log(`Capitalize first letter of name entered: '${modifiedName}'`);
