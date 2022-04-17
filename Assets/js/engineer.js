const EmployeeData = require('./employee')

class EngineerData extends EmployeeData {
    
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return EngineerData
    }
}


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

module.exports = EngineerData