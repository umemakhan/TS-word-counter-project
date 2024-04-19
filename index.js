// importing chalk and inquirer packages
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.italic.green("\n \tWelcome to Word Counter\n"));
console.log("_".repeat(40));
// input 
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "import",
        message: "Type a sentence",
    }
]);
// trimimng the sentence and splitting it into a word based on "space"
let words = answer.sentence.trim().split(" ");
// analysing of user input
console.log("_".repeat(40));
console.log(chalk.italic("\n Sentence Words:"));
console.log(words);
console.log(chalk.italic(`\nWord Count: ${chalk.italic.greenBright(words.length)}`));
console.log("_".repeat(40));
