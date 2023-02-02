const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      {
        type: "input",
        message: "What is the description of your project?",
        name: "description",
      },
      {
        type: "input",
        message: "How do users install your project?",
        name: "installation",
      },
      {
        type: "input",
        message: "What is the intended use of your project?",
        name: "usage",
      },
      {
        type: "list",
        message: "What licenses does your project have?",
        choices: ["Apache 2.0", "MIT", "Mozilla"],
        name: "license",
      },
      {
        type: "input",
        message: "Who contributed to your project?",
        name: "contributions",
      },
      {
        type: "input",
        message: "Please include any tests for your project:",
        name: "tests",
      },
      {
        type: "input",
        message: "What is your contact email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your GitHub User Name?",
        name: "username",
      },
    ])
    .then((data) => {
      console.log(data);
      writeToFile("./Output/README.md", data);
    });

  //function to write README file
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log("Your README has been generated!")
    );
  }
}

// Function call to initialize app
init();
