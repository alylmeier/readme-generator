// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    return "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
  } else if (license === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (license === "Mozilla") {
    return "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
  }
}
//[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Mozille") {
    return "https://opensource.org/licenses/MPL-2.0";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(
      license
    )})`;
  } else if (!license) {
    return;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

${renderLicenseSection(data.license)}

## Description
${data.description}

## Table of Contents
${data.tableOC}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contributions}

## Tests
${data.tests}

## Questions?

Email me at ${data.email}

## My Other GitHub Projects
http://www.github.com/${data.username}




`;
}

module.exports = generateMarkdown;
