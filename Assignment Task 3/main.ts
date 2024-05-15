import inquirer from "inquirer";

async function checkFriend() {
    let friendName = await inquirer.prompt([
        {
            name: "Name",
            type: "input",
            message: "Enter your name:",
        },
    ]);

    switch (friendName.Name) {
        case "Taha":
            console.log("Hello Taha! You are my friend.");
            break;
        case "Ashad":
            console.log("Hello Ashad! You are my friend.");
            break;
        case "Ahmed":
            console.log("Hello Ahmed! You are my friend.");
            break;
        case "Zakir":
            console.log("Hello Zakir! You are my friend.");
            break;
        default:
            console.log("You are not my friend.");
            break;
    }
}

 checkFriend().catch(error => {
    console.error('Error occured:', error);
})