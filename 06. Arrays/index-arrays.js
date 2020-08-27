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

// looping array
for (let i = 0; i < myNumberArray.length; i++) {
    console.log(`Element ${i} of 'myNumberArray' is ${myNumberArray[i]}`);
}

const myVariableArray = [2, 4, false, "Hello"];