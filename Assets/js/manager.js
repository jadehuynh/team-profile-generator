const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const generateHtml = require('./functions')
const employeeData = require('./employee')

const managerQuestion = inquirer.prompt([
    {
        type: 'input',
        name: 'office',
        message: 'Please enter your office number.',
    },
]);

