console.log("Guess  a number between 1 to 8 ");
// variable creation  create 
let a = Math.floor(Math.random() * 7);
import inquirer from "inquirer";
while (true) {
    let input = await inquirer.prompt({ name: "guess", type: "number", message: "enter your guess number you want between 1 to 8 :" });
    // provide code 
    let ans = input.guess;
    if (a == ans) {
        console.log("congratulations yuor guess number absolutely correct");
        break;
    }
    else {
        console.log("sorry you guess a wrong number try again ");
    }
}
