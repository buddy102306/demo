const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter a number: ", function(answer) {
    let number = Number(answer);

    if (number % 2 === 0) {
        console.log("The number is EVEN");
    } else {
        console.log("The number is ODD");
    }

    input.close();
});