// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const  generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create a function to initialize app
function init() { 
    inquirer
    //  generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    .prompt([
        {
            type: 'input',
            message: 'What is the title of the project?',
            name:'title'

        }, 
        {
            type: 'list',
            message: 'Choose your license version?',
            name: 'license',
            choices: [
                "MIT",
                "mpl-2.0",
                "ODbl",
                "ISC",
                "none",
            ]
        },
        {
            type: 'input',
            message: 'Enter a Description of the project',
            name:'description'
        },
        {
            type: 'input',
            message: 'Enter installation tools and instructions of the project',
            name:'installation' 
        },
        {
            type: 'input',
            message: 'Enter usage instructions of the project',
            name:'usage'
        },
        {
            type: 'input',
            message: 'Enter contributers of the project',
            name:'contributing' 
        },
        {
            type: 'input',
            message: 'Enter test for your project',
            name:'test' 
        },
        {
            type: 'input',
            message: 'Enter your email link',
            name:'email' 
        },
        {
            type: 'input',
            message: 'Enter your github link',
            name:'github' 
        },

       
    ])
    .then((response) => {
        // writeData(response);
        console.log(response);
    
        fs.writeFile('./output/readme.md', generateMarkdown(response), (err) =>
        err ? console.error(err) : console.log('Success!')
    );
    
      })

}

// Function call to initialize app
init();