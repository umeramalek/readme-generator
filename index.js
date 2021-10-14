// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const  generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create a function to initialize app
function init() { 
    inquirer
    .prompt([
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
       


    ])
    .then((response) => {
        // writeData(response);
        console.log(response);
    
        fs.writeFile('readme.md', generateMarkdown(response), (err) =>
        err ? console.error(err) : console.log('Success!')
    );
    
      })


   


   
}

// Function call to initialize app
init();