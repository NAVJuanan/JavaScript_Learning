/********************
 * JavaScript loops *
 ********************/


// if...else
const hour = parseInt(prompt("What time is it?"));

if (hour > 0 && hour <= 12) {
    document.write(`It is ${hour} o'clock. It is morning <br/>`);
}
else if (hour <= 18) {
    document.write(`It is ${hour} o'clock. It is afternoon <br/>`);
}
else {
    document.write(`It is ${hour} o'clock. It is evening <br/>`);
}


// switch
switch (hour) {
    case 1:
    case 2:
    case 11:
    case 12:
        document.writeln(`It is ${hour} o'clock. It is morning <br/>`);
        break;

    case 13:
    case 17:
    case 18:
        document.writeln(`It is ${hour} o'clock. It is afternoon <br/>`);
        break;

    case 19:
    case 23:
    case 24:
        document.writeln(`It is ${hour} o'clock. It is evening <br/>`);
        break;

    default:
        document.writeln(`It is ${hour} o'clock. It is and error <br/>`);
        break;
}


// for
for (let i = 1; i <= 10; i++) {
    document.writeln(`Loop FOR number ${i} <br/>`);
}


// while
let j = 1;
while (j <= 10) {
    document.writeln(`Loop WHILE number ${j} <br/>`);
    j++;
}


j = 0;
while (true) {
    j++;

    if (j == 3)
        continue;

    document.writeln(`Loop WHILE ${j} until BREAK, skipping the 3rd time <br/>`);

    if (j >= 5)
        break;
}


// do...while
j = 1;
do {
    document.writeln(`Loop DO...WHILE number ${j} <br/>`);
    j++;
} while (j <= 10);


// foreach
//const message = "Hello!";
//foreach(let c in message)
//{
//    Console.WriteLine($"Loop FOREACH character {c}");
//}