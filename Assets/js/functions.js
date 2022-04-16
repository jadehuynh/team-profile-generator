const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const generateHtml = require('.');

const promptQuestions = () => {
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

class managerQuestion extends promptQuestions {

    getManagerData(answers) {
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

class internQuestion extends promptQuestions{
    
    getInternData () {
        const internQuestion =
    inquirer.prompt([
    {
        type: 'input',
        name: 'school',
        message: 'Please enter your school name.',
    },
])
    return
    }
}

const init = () => {
    console.log(data)
    
     fs.writeFileSync("./dest/team.html", generateHtml)
 }

promptQuestions();
getManagerData();
getEngineerData();
getInternData();
init();

module.exports = promptQuestions
