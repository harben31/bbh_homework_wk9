const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project called?",
        default: "myProjectTitle"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to the project?",
        default: "me, myself and I"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project.",
        default: "..."
    },
    {
        type: "input",
        name: "installation",
        message: "How does a user install your project?",
        default: "..."
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage instructions",
        default: "..."
    },
    {
        type: "input",
        name: "contribution",
        message: "How does one contribute to your project?",
        default: "...",
    },
    {
        type: "input",
        name: "test",
        message: "How does one test your program",
        default: "...",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project",
        
        choices: [
            "MIT License", "Mozilla Public License 2.0", "The Unilicense", "BSD 2-clause 'simlpified license'", "Eclipse Public License 1.0", "GNU Generic Public License v2.0", "None"
        ],
        default: "MIT License"
    },
    {
        type: "input",
        name: "ghUsername",
        Message: "Enter your GitHub user name.",
        default: "..."
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address",
        default: "..."
    },
]

inquirer.prompt(questions).then((answers) => {
    let licenseBadge;

    answers.license==="MIT License" ? licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    : answers.license==="Mozilla Public License 2.0" ? licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    : answers.license==="The Unilicense" ? licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unilicense-blue.svg)](http://unilicense.org/)"
    : answers.license==="BSD 2-clause 'simlpified license'" ? licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
    : answers.license==="Eclipse Public License 1.0" ? licenseBadge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
    : answers.license==="GNU Generic Public License v2.0" ? licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)" : "dunno"
    
    // console.log(answers.license);
    // if(answers.license!=="none" && answers.license!=="Unlicense" && answers.license!=="GNU"){
    //     licenseBadge = `[![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)](https://opensource.org/licenses/${answers.license})`
    // } else if(answers.license==="Unlicense"){
    //     licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    // } else {
    //     licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-red.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    // }

    fs.writeFile('README.md', 
    `${licenseBadge}
# ${answers.title}
Table of Contents:
* [Contributors:](#Contributtors)
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [License-Info](#License-Info)
* [Questions](#Questions)
    
## Contributors: 
${answers.contributors}

## Description:
${answers.description}

## Installation:
${answers.installation}

## Usage:
${answers.usage}

## Contributing:
${answers.contribution}

## Tests:
${answers.test}

## License-Info:
${answers.license}

## Questions:
Email: ${answers.email}
GitHub: ${answers.ghUsername}`, 
    (err) => err? console.log(error) : console.log("README created"));
    console.log(answers.email);
})

// console.log(inquirer);