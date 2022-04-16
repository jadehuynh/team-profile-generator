const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const generateHtml = require('./functions')
const employeeData = require('./employee');
const promptQuestions = require('./employee');

class engineerQuestion extends promptQuestions{
    
    getEngineerData () {
        const engineerQuestion =
    inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.',
    },
])
    return
    }
}

