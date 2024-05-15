var firstNumber = 10;
var secondNumber = 22;
var operator = "+";
var sixthNumber = 45;
var seventhNumber = 56;
function calculate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case "+":
            return firstNumber + secondNumber;
        case "-":
            return firstNumber - secondNumber;
        default:
            console.log("Unknown operator");
    }
    ;
}
console.log(calculate(firstNumber, secondNumber, operator)); // output 32
operator = "-";
console.log(calculate(sixthNumber, seventhNumber, operator));
