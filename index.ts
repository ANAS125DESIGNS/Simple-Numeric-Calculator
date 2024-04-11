
import inquirer from "inquirer";
import prompt from "inquirer/lib/ui/prompt.js";
const answer = await inquirer.prompt([
  { message: "Enter 1st Number", type: "number", name: "FirstNumber" },
  { message: "Enter 2nd Number", type: "number", name: "SecondNumber" },
  {
    message: "Select one of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division","Modulus"],
  },
]);

if (answer.operator === "Addition"){
  console.log(answer.FirstNumber + answer.SecondNumber );
}
else if(answer.operator==="Subtraction"){
  console.log( answer.FirstNumber-answer.SecondNumber );}

  else if(answer.operator==="Multiply"){
    console.log( answer.FirstNumber*answer.SecondNumber );}
    else if(answer.operator==="Division"){
      console.log( answer.FirstNumber/answer.SecondNumber );}
      else if(answer.operator==="Modulus"){
        console.log( answer.FirstNumber % answer.SecondNumber );}
      else {
        console.log("Please select valid Operation");}