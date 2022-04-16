const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const generateHtml = require('./functions')
const employeeData = require('./employee')

class internQuestion extends promptQuestions {

    getInternData() {
        const internQuestion = 
        inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'Please enter your school name.',
        },
    ])
        return     //`${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
    }
  
  }
  
//   console.log(new DateFormatter('August 19, 1975 23:15:30').getFormattedDate());