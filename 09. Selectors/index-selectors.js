/************************
 * JavaScript selectors *
 ************************/


// query id selector
let nodeDiv = document.querySelector("#box");
console.log(nodeDiv);

// query class selector
let nodeItem1 = document.querySelector(".item");
console.log(nodeItem1);

// query selector all
let nodeItemAll = document.querySelectorAll(".item");
console.log(nodeItemAll);

// write html code
nodeDiv.innerHTML = "<h2>Write div with 'innerHTML'</h2>";

// change style on click
function changeColor() {
    let nodeHi = document.querySelector("#hi");

    if (nodeHi.style.color === "black") {
        nodeHi.style.color = "red";
    } else {
        nodeHi.style.color = "black";
    }

    // id selector = variable
    bye.style.color = "blue";
}

// add event
let nodeEvent = document.querySelector("#buttonEvent");
let nodeHi = document.querySelector("#hi");

nodeEvent.addEventListener("click", function () {
    if (nodeHi.style.color === "black") {
        nodeHi.style.color = "cyan";
    } else {
        nodeHi.style.color = "black";
    }

    // id selector = variable
    bye.style.color = "yellow";
});

// use attribute
let nodeAttribute = document.querySelector("#buttonAttribute");
let nodeHi2 = document.querySelector("#hi");

nodeAttribute.onclick = function () {
    if (nodeHi2.style.color === "black") {
        nodeHi2.style.color = "orange";
    } else {
        nodeHi2.style.color = "black";
    }

    // id selector = variable
    bye.style.color = "green";
};