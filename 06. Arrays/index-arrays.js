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
for (let num of myNumberArray) {
    console.log(`Element of 'myNumberArray' is ${num}`);
}

// for..in
console.log("");
console.log("Iterating the array with 'for..in'");
for (let i in myNumberArray) {
    console.log(`Element ${i} of 'myNumberArray' is ${myNumberArray[i]}`);
}

// foreach
console.log("");
console.log("Iterating the array with 'foreach'");
for (let i of myNumberArray) {
    console.log(`Element of 'myNumberArray' is ${i}`);
}


// multidimensional array
const myVariableArray1 = [2, 4, false, "Hello"];
let myVariableArray2 = ["Bye", true, 1];
const myVariableArray = [myVariableArray1, myVariableArray2];
console.log("");
console.log("Iterating the multidimensional array");
for (let element of myVariableArray) {
    console.log(`Elements of 'myVariableArray' are ${element}`);
}


// join
const myStringVar = myVariableArray.join();
console.log("");
console.log("after join() method the multidimensional array:", myStringVar);


// split
const myNewVariableArray = myStringVar.split(",");
console.log("after split() method the new array of strings:", myNewVariableArray);


// concat
myVariableArray1.concat(myVariableArray2);
console.log("after concat() method the elements of 'myVariableArray1' are:", myVariableArray1);


// slice
myVariableArray2 = myVariableArray1.slice(2,4);
console.log("after slice() method the elements of 'myVariableArray2' are:", myVariableArray2);


// spread operator
console.log("");
const newFruits = ["Tomato", "Watermelon"];
console.log(newFruits);
const recieveFruits = ["Orange", "Lemon", ...newFruits];
console.log("Array after spread operator", recieveFruits);