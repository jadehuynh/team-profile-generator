const EmployeeData = require('./employee')

class InternData extends EmployeeData {

    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    getSchool() {
        this.school = school
    }
    getRole() {
        return InternData
    }
    
}

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

module.exports = InternData