//function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    return "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
  } else if (license === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (license === "Mozilla") {
    return "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
  } else if (license === "None") {
    return "No license";
  }
}

//function that returns the license link
function renderLicenseLink(license) {
  if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Mozilla") {
    return "https://opensource.org/licenses/MPL-2.0";
  } else if (license === "None") {
    return "";
  }
}

//function that returns the license section of README
function renderLicenseSection(license) {
  if (license === "Apache 2.0") {
    return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(
      license
    )})`;
  } else if (license === "MIT") {
    return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(
      license
    )})`;
  } else if (license === "Mozilla") {
    return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(
      license
    )})`;
  } else return "";
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

## Description
${data.description}

## Table of Contents
[Installation](#installation)

[Usage](#usage)

[Contributions](#contributions)

[License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contributions}

## Tests
${data.tests}

${renderLicenseSection(data.license)}

## Questions?

Email me at ${data.email}

## My Other GitHub Projects
http://www.github.com/${data.username}




`;
}

module.exports = generateMarkdown;
