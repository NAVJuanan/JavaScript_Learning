/**********************
 * JavaScript objects *
 **********************/


// declare object
const myObject = {
    name: "Circle",
    pi: 3.14,
    description: "extended",
    active: true,
    size: ["S", "M", "L"],
    radius: {
        x: 5,
        y: 2
    },
    drawRadius: function () {
        console.log(`drawRadius() function of myObject where 'radius' is 'x' = ${this.radius.x} and 'y' = ${this.radius.y}`);
        this.totalRadius = this.radius.x * this.radius.y;
    }
}

console.log("'myObject' contains the next properties and methods:", myObject);


// looping object
console.log(`for..in`);
for (element in myObject) {
    console.log(element + " = " + myObject[element]);
}

console.log(`for..of Object.keys()`);
for (key of Object.keys(myObject)) {
    console.log(key + " = " + myObject[key]);
}

console.log(`for..of Object.entries()`);
for (entry of Object.entries(myObject)) {
    console.log(entry);
}

// clone object (assign)
console.log(`clone object (assign)`);
const myOtherObject = Object.assign({
    color: "yellow",
}, myObject);

for (element in myOtherObject) {
    console.log(element + " = " + myOtherObject[element]);
}

// clone object (... spread operator)
console.log(`clone object (... spread operator)`);
const myAnotherObject = { color: "red", ...myObject }

for (element in myAnotherObject) {
    console.log(element + " = " + myAnotherObject[element]);
}

console.table(myObject);
myObject.drawRadius();
console.log("The calculation of the radius is:", myObject.totalRadius);


// delete property
delete myObject.description;
console.log("");
console.log("'myObject' contains the next properties and methods after deleting 'description':", myObject);

for (element in myObject) {
    console.log(element + " = " + myObject[element]);
}


// add property
myObject.extended = "new extended description";
myObject.active = false;
console.log("");
console.log("'myObject' contains the next properties and methods after adding 'extended':", myObject);

for (element in myObject) {
    console.log(element + " = " + myObject[element]);
}