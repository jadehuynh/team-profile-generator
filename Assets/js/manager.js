const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const generateHtml = require('./functions')
const employeeData = require('./employee');
const promptQuestions = require('./employee');

class managerQuestion extends promptQuestions {

    getManagerData() {
        const managerQuestion =
    inquirer.prompt([
    {
        type: 'input',
        name: 'office',
        message: 'Please enter your office number.',
    },
])
    return
    }
}



