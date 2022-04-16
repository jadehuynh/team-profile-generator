const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const generateHtml = require('./functions')
const employeeData = require('./employee')

const engineerQuestion = inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.',
    },
]);