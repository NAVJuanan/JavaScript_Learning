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


// arguments object & default parameters
console.log("");
printNumbers("Peter", 1, true);

function printNumbers(name, num, show, optional = "optional parameter") {
    console.log("Arguments of function 'printNumbers(Peter, 1, true)'", arguments.length, arguments);
    console.log("parameter 'name':", name);
    console.log("parameter 'num':", num);
    console.log("parameter 'show':", show);
    console.log("parameter 'optional':", optional);
}

// rest parameters
console.log("");
recieveFruits("Orange", "Lemon", "Tomato", "Watermelon");

function recieveFruits(fruit1, fruit2, ...fruits) {

    console.log("Function with rest parameters");
    console.log("Fruit 1 is", fruit1);
    console.log("Fruit 2 is", fruit2);
    console.log("Other fruits are", fruits);
}


// callback function
const lastName = function(name) {
    return "Mr. " + name;
}

console.log("");
nameAndAge(lastName("Fred"), 25);

function nameAndAge(callback, age) {
    console.log(`Print callback function with values name: ${callback} and age: ${age}`);
}