/************************
 * JavaScript functions *
 ************************/


// function declaration
console.log(`The type of the function declaration 'printName()' is: ${typeof printName}`);
printName("Peter");

function printName(name) {
  console.log(name + " printed by a function declaration");
}


// function expression
const firstName = function printFirstName(name) {
    console.log(name + " printed by a function expression");
}

console.log("");
console.log(`The type of the function expression 'firstName' is: ${typeof firstName}`);
firstName("John");


// anonymous function
const name = function(name) {
    console.log(name + " printed by an anonymous function");
}

console.log("");
console.log(`The type of the anonymous function 'name' is: ${typeof name}`);
name("Helen");


// arguments object
printNumbers("Peter", 1, true);
function printNumbers() {
    console.log("Arguments of function 'printNumbers(Peter, 1, true)'", arguments.length, arguments);
}