const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter your age: ", function(answer) {
    let age = Number(answer);

    if (age >= 18) {
        console.log("You are an ADULT.");
    } else {
        console.log("You are a MINOR.");
    }

    input.close();
});