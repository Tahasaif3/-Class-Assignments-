//Set up two different variables with different values.
// Call a function with these variables as arguments and output the result using console.log.
// Create a second call to the function with two more numbers as arguments.

function addNumbers(num1:number,num2:number):number {
        return num1+num2
}

let firstNumber:number = 10;
let secondNumber:number = 25;

console.log(`The sum of First number and Second Number is:`,addNumbers(firstNumber , secondNumber));

let thirdNumber:number = 12;
let fourthNumber:number = 23

console.log(`The sum of Third number and Fourth Number is:`, addNumbers(thirdNumber,fourthNumber));
