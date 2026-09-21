const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter first number: ", function(num1) {
    input.question("Enter second number: ", function(num2) {

        let a = Number(num1);
        let b = Number(num2);

        console.log("Sum:", a + b);
        console.log("Difference:", a - b);
        console.log("Product:", a * b);
        console.log("Quotient:", a / b);

        input.close();
    });
});