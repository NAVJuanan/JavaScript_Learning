/**********************
 * JavaScript objects *
 **********************/


// declare object
const myObject = {
    name: "Circle",
    x: 5,
    y: 2,
    draw: function() {
        console.log("draw() function of myObject");
    }
}

console.log("'myObject' contains the next properties and method:", myObject);


// looping object
for (element in myObject) {
    console.log(element + " = " + myObject[element]);
}
myObject.draw();

