class EmployeeData {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "employee"
    }
}

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

module.exports = EmployeeData