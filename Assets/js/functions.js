const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const generateHtml = require('.');


// function employeeData (answers) {
//     let name = name;
//     let id = id;
//     let email = email

// }

const EmployeeQuestions = () => {
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
       fs.writeFileSync("./dist/team.html", results)
    })
};

const ManagerQuestions = () => {
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
            name: 'number',
            message: 'Please enter your office number',
        },
    ])

    .then(data => {
       const results = generateHtml(data)
       fs.writeFileSync("./dist/team.html", results)
    })
};
const EngineerQuestions = () => {
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
            name: 'engineer',
            message: 'Please enter your GitHub username',
        },
    ])

    .then(data => {
       const results = generateHtml(data)
       fs.writeFileSync("./dist/team.html", results)
    })
};
const InternQuestions = () => {
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
            name: 'school',
            message: 'Please enter your school',
        },
    ])

    .then(data => {
       const results = generateHtml(data)
       fs.writeFileSync("./dist/team.html", results)
    })
};
class ManagerQuestion extends EmployeeQuestions {

    getManagerData(answers) {
        const ManagerQuestion = 
    inquirer.prompt([
    {
        type: 'input',
        name: 'number',
        message: 'Please enter your office number.',
    },
])
    return 

    }
}

class EngineerQuestion extends EmployeeQuestions{
    
    getEngineerData () {
        const EngineerQuestion =
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

class InternQuestion extends EmployeeQuestions{
    
    getInternData () {
        const InternQuestion =
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
    
     fs.writeFileSync("./dist/team.html", generateHtml)
 }

EmployeeQuestions();
getManagerData();
getEngineerData();
getInternData();
init();

module.exports = EmployeeQuestions
