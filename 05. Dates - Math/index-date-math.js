/*************************************
 * JavaScript dates and Math library *
 *************************************/


// Date
const date1 = new Date(2020, 7, 27, 17, 53);
console.log("27/08/2020 17:53 is:", date1);

const date2 = new Date();
console.log("Today is:", date2.toDateString(), date2.toTimeString());
console.log("Today is in ISO Format:", date2.toISOString());
console.log("Day is:", date2.getDate());
console.log("Month is:", date2.getMonth() + 1);
console.log("Year is:", date2.getFullYear());


// Math library
console.log("Math functions:");
console.log(`With floor() function: I buy '${Math.floor(8 / 1.5)}' bottles of 1.5 € each one with 8 €`);
console.log(`Without floor() function: I buy '${8 / 1.5}' bottles of 1.5 € each one with 8 €`);
console.log(`round() function: I buy '${Math.round(8 / 1.5)}' bottles of 1.5 € each one with 8 €`);
console.log(`pow() function: Number 2 to the 3rd power is ${Math.pow(2, 3)}`);
console.log(`random() function: Random number between 0 and almost 1 returned is ${Math.random()}`);
console.log(`max() function: the max number of '3, 6, 9, 1' is ${Math.max(3, 6, 9, 1)}`);
console.log(`min() function: the min number of '3, 6, 9, 1' is ${Math.min(3, 6, 9, 1)}`);