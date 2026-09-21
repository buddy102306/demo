const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter your grade: ", function(answer) {

    let grade = Number(answer);

    if (grade >= 75) {
        console.log("Grade:", grade);
        console.log("Result: PASSED");
    } else {
        console.log("Grade:", grade);
        console.log("Result: FAILED");
    }

    input.close();
});