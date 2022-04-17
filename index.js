const EngineerData = require("./Assets/js/engineer");
const ManagerData = require("./Assets/js/manager");
const InternData = require("./Assets/js/intern")
const inquirer = require("inquirer")

const employees = [];

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
            message: 'Please enter your ID.',
        },
      
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.',
        },
        {
            type: 'input',
            name: 'number',
            message: 'Please enter your office number.',
        },

    ])

    .then(data => {
       var manager = new ManagerData (data.name, data.id, data.email, data.number)
        options()
        employees.push(manager)

    })

};

const options = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "list",
            message: "What would you like to do next?",
            choices: ["Add an Engineer", "Add an Intern", "Done."]
        }
    ])
    .then(function (userChoice) {
        if(userChoice.list === "Add an Engineer") {
            const EngineerQuestions = () => {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'Please enter the Engineer\'s first and last name.',
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: 'Please enter the Engineer\'s employee ID.',
                    },
                  
                    {
                        type: 'input',
                        name: 'email',
                        message: 'Please enter the Engineer\'s email address.',
                    },
                    {
                        type: 'input',
                        name: 'github',
                        message: 'Please enter the Engineer\'s GitHub username',
                    },
                ])
            
                .then(data => {
                    var engineer = new EngineerData (data.name, data.id, data.email, data.github)
                    options()
                    employees.push(engineer)
                })
            };
            EngineerQuestions()
            
        }
        else if(userChoice.list === "Add an Intern") {
            const InternQuestions = () => {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'Please enter the Intern\'s first and last name.',
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: 'Please enter the Intern\'s employee ID.',
                    },
                  
                    {
                        type: 'input',
                        name: 'email',
                        message: 'Please enter the Intern\'s email address.',
                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: 'Please enter the Intern\'s school',
                    },
                ])
            
                .then(data => {
                    var intern = new InternData (data.name, data.id, data.email, data.school)
                    options()
                    employees.push(intern)
                })
            };
            InternQuestions()
            
        }
        else{
            console.log("Profiles Generated")
            console.log(employees)
        }
    })
}
ManagerQuestions()

const populate = (data) => {
    console.log(data.EngineerData)
    console.log(data.ManagerData)
    console.log(data.InternData)
}