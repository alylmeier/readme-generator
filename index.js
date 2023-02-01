let title = process.argv[2];
let description = process.argv[3];
let tableOC = process.argv[4];
let installation = process.argv[5];
let usage = process.argv[6];
let license = process.argv[7];
let contribution = process.argv[8];
let test = process.argv[9];
let questions = process.argv[10];
let questions2 = process.argv[11];

const fs = require("fs");

const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "descriptor",
      message: "What is the description of your project?",
      name: "description",
    },
    {
      type: "table",
      message: "Enter your Table of Contents :",
      name: "tableOC",
    },
    {
      type: "descriptor",
      message: "What is the description of your project?",
      name: "description",
    },
    {
      type: "descriptor",
      message: "What is the description of your project?",
      name: "description",
    },
    {
      type: "descriptor",
      message: "What is the description of your project?",
      name: "description",
    },
    {
      type: "descriptor",
      message: "What is the description of your project?",
      name: "description",
    },
    {
      type: "tests",
      message: "What is the description of your project?",
      name: "description",
    },
    {
      type: "contact",
      message: "What is your contact email?",
      name: "email",
    },
    {
      type: "ghuser",
      message: "What is your GitHub User Name?",
      name: "username",
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log("Success!")
      : console.log("You forgot your password already?!")
  );
