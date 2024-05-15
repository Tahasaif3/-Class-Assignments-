import inquirer from "inquirer";
async function evaluateNumberGame() {
    const userInput = await inquirer.prompt({
        type: "number",
        name: "number",
        message: "Enter a number"
    });
    const userNumber = userInput.number;
    // Dynamic value (we can change this value to any number we want)
    const dynamicNumber = 10;
    // comparing the entered number with the dynamic number value;
    if (userNumber > dynamicNumber) {
        console.log("The entered number is greater than the dynamic number value");
    }
    else if (userNumber === dynamicNumber) {
        console.log("The entered number is equal to the dynamic number value");
    }
    else {
        console.log("The entered number is less than the dynamic number value");
    }
}
evaluateNumberGame();
