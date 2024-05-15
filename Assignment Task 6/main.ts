// 6.Anonymous functions:
// • Assign a function expression to a variable, with one parameter that outputs the provided
// argument to the console.
// • Pass an argument into the function.
// • Create the same function as a normal function declaration.

// assigning a function expression to a varible
const addNumber = function(num1:number, num2:number) {
    return num1 + num2;
}
// print the arguments;
console.log(addNumber(20,15));

// Create the same function as a normal function declaration
function addNumbers(num1:number,num2:number) {
    return num1 + num2
}
// print the arguments
console.log(addNumbers(100,100));;



