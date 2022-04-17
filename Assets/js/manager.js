const EmployeeData = require('./employee')

class ManagerData extends EmployeeData {

    constructor(name, id, email, number) {
        super(name, id, email)
        this.number = officeNumber
        }
        getNumber() {
            this.number = officeNumber
        }
        getRole() {
            return ManagerData
        }
}

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

module.exports = ManagerData