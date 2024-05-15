import { log } from "console";
import inquirer from "inquirer";
import { CLIENT_RENEG_LIMIT } from "tls";

async  function evaluateNumberGame() {
    const userInput = await inquirer.prompt(
        {
            type:"number",
            name:"number",
            message:"Enter a number"
        });

        const userNumber:number= userInput.number

        // Dynamic value (we can change this value to any number we want)
        const dynamicNumber:number = 10;

        // comparing the entered number with the dynamic number value;

        if (userNumber > dynamicNumber) {
            console.log("The entered number is greater than the dynamic number value")
        } else if (userNumber === dynamicNumber) {
            console.log("The entered number is equal to the dynamic number value")
        } else {
            console.log("The entered number is less than the dynamic number value")
        }
}
evaluateNumberGame();