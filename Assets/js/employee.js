const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const generateHtml = require('./functions')
const { first } = require('rxjs');


const promptQuestions = (answers) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your first and last name.',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your employee ID.',
        },
      
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.',
        },
        {
            type: 'input',
            name: 'manager',
            message: 'Are you a Manager?',
        },
        {
            type: 'input',
            name: 'engineer',
            message: 'Are you an Engineer',
        },
        {
            type: 'input',
            name: 'manager',
            message: 'Are you an Intern?',
        },
    ])

    .then(data => {
       const results = generateHtml(data)
       fs.writeFileSync("./dest/team.html", results)
    })
};


promptQuestions();
module.exports = promptQuestions