// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if user chooses MIT, then return the MIT badge 
  // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  // button shows up if you preview it
  console.log(license)
  if (license.license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } 
  if (license.license === "mpl-2.0"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  if (license.license === "ODbl"){
    return "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)"
  }
  if (license.license === "ISC"){
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }
  if (license.license === "none"){
    return " "
  }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   // [a license](#license)
//   return "[renderLicenseBadge](#license)"
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}
 

${renderLicenseBadge(data)} 
---

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}


## Installation
${data.installation}


## Usage
${data.usage}


## License
This application is covered under the ${data.license} license.


## Contributing
${data.contributing}


## Tests
${data.tests}


## Questions
If any additional questions reach me at:

${data.email}
${data.github}


`;
}


module.exports = generateMarkdown;
