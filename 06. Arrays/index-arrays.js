/*********************
 * JavaScript arrays *
 *********************/


// declare array
const myNumberArray = [2, 4];
console.log("'myNumberArray' contains the next elements:", myNumberArray);


// push
myNumberArray.push(15, 7);
console.log("after push() method 'myNumberArray' contains the next elements:", myNumberArray);


// pop
myNumberArray.pop();
console.log("after pop() method 'myNumberArray' contains the next elements:", myNumberArray);


// unshift
myNumberArray.unshift(11, 2);
console.log("after unshift() method 'myNumberArray' contains the next elements:", myNumberArray);


// shift
myNumberArray.shift();
console.log("after shift() method 'myNumberArray' contains the next elements:", myNumberArray);


// splice
myNumberArray.splice(2, 1, 6, 0);
console.log("after splice() method 'myNumberArray' contains the next elements:", myNumberArray);


// indexOf
console.log("indexOf() method 'myNumberArray' contains the first number '2' in the position:", myNumberArray.indexOf(2));


// lastIndexOf
console.log("lastIndexOf() method 'myNumberArray' contains the last number '2' in the position:", myNumberArray.lastIndexOf(2));


// includes
console.log("includes() method 'myNumberArray' contains number '5':", myNumberArray.includes(5));


// sort
console.log("after sort() method 'myNumberArray' contains the next elements:", myNumberArray.sort());


// reverse
console.log("after reverse() method 'myNumberArray' contains the next elements:", myNumberArray.reverse());


// looping array
console.log("");
console.log("Looping the array with 'for'");
for (let i = 0; i < myNumberArray.length; i++) {
    console.log(`Element ${i} of 'myNumberArray' is ${myNumberArray[i]}`);
}


// iterating array
// for..of
console.log("");
console.log("Iterating the array with 'for..of'");
for (let element of myNumberArray) {
    console.log(`Element of 'myNumberArray' is ${element}`);
}

// for..in
console.log("");
console.log("Iterating the array with 'for..in'");
for (let element in myNumberArray) {
    console.log(`Element ${element} of 'myNumberArray' is ${myNumberArray[element]}`);
}

// foreach
console.log("");
console.log("Iterating the array with 'foreach'");
for (let element of myNumberArray) {
    console.log(`Element of 'myNumberArray' is ${element}`);
}


// multidimensional array
const myVariableArray1 = [2, 4, false, "Hello"];
const myVariableArray2 = ["Bye", true, 1];
const myVariableArray = [myVariableArray1, myVariableArray2];
console.log("");
console.log("Iterating the multidimensional array");
for (let element of myVariableArray) {
    console.log(`Elements of 'myVariableArray' are ${element}`);
}