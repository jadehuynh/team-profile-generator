const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const generateHtml = require('.');


// function employeeData (answers) {
//     let name = name;
//     let id = id;
//     let email = email

// }

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
