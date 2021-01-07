/************************
 * JavaScript selectors *
 ************************/


// query id selector
let nodeDiv = document.querySelector("#box");
console.log(nodeDiv);

// query class selector
let nodeItem1 = document.querySelector(".item");
console.log(nodeItem1);

// write html code
nodeDiv.innerHTML = "<h2>Write div with 'innerHTML'</h2>";