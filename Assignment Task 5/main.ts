/*
Set up two variables containing number values.
• Set up a variable to hold an operator (+ or -).
• Create a function that takes two numbers and an operator as parameters, performs the 
corresponding operation, and returns the result.
• Call the function with the variables and operator, and output the result using console.log.
• Update the operator value and call the function again with the updated arguments.*/

let firstNumber:number = 10;
let secondNumber:number = 22;
let operator:string = "+";

let sixthNumber:number = 45;
let seventhNumber:number = 56;

function calculate(firstNumber:number,secondNumber:number,operator:string) {
    switch (operator) {
        case "+":
        return firstNumber + secondNumber;
        case "-":
        return firstNumber - secondNumber;
        default :
        console.log("Unknown operator");
    };
}
console.log(calculate(firstNumber,secondNumber,operator)); // output 32

operator = "-"; // updated operator
console.log(calculate(sixthNumber,seventhNumber,operator)); // output -11



