const EngineerData = require("./Assets/js/engineer");
const ManagerData = require("./Assets/js/manager");
const InternData = require("./Assets/js/intern")
const inquirer = require("inquirer")

const employees = [];

const fs = require('fs')

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
            name: 'role',
            message: 'Please enter your role. (Manager, Engineer, Intern)',
        },
        {
            type: 'input',
            name: 'number',
            message: 'Please enter your office number.',
        },

    ])

    .then(data => {
       var manager = new ManagerData (data.name, data.id, data.email, data.role, data.number)
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
                        name: 'role',
                        message: 'Please enter your role. (Manager, Engineer, Intern)',
                    },
                    {
                        type: 'input',
                        name: 'github',
                        message: 'Please enter the Engineer\'s GitHub username',
                    },
                ])
            
                .then(data => {
                    var engineer = new EngineerData (data.name, data.id, data.email, data.role, data.github)
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
                        name: 'role',
                        message: 'Please enter your role. (Manager, Engineer, Intern)',
                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: 'Please enter the Intern\'s school',
                    },
                ])
            
                .then(data => {
                    var intern = new InternData (data.name, data.id, data.email, data.role, data.school)
                    options()
                    employees.push(intern)
                })
            };
            InternQuestions()
            
        }
        else{
            console.log("Profiles Generated")
            fs.writeFileSync("./dist/generated.html", generateHtml(employees))
        }
    })
}
ManagerQuestions()

const populate = (data) => {
    var cardContainer = [];
    
    for (var i = 0; i < data.length; i++) {
        console.log(data[i])
        if(data[i].role === "Manager") {
            var card = `
            <div class="card1 border border-4 border-primary m-3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title text-success">Name: ${data[i].name}</h5>
              <h5 class="text-warning">Role: ${data[i].role}</h5>
            </div>
            <ul class="list-group list-group-flush  mx-auto">
              <li class="list-group-item">Employee ID: ${data[i].id}</li>
              <li class="list-group-item">Email: ${data[i].email}</li>
              <li class="list-group-item">Office Number: ${data[i].number}</li>
            </ul>
            </div>
            `
            cardContainer.push(card)
        }else if(data[i].role === "Engineer") {
            var card = `
            <div class="card1 border border-4 border-primary m-3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title text-success">Name: ${data[i].name}</h5>
              <h5 class="text-warning">Role: ${data[i].role}</h5>
            </div>
            <ul class="list-group list-group-flush  mx-auto">
              <li class="list-group-item">Employee ID: ${data[i].id}</li>
              <li class="list-group-item">Email: ${data[i].email}</li>
              <li class="list-group-item">GitHub Link: <a href="https://github.com/${data[i].github}">https://github.com/${data[i].github}</a></li>
            </ul>
            </div>
            `
            cardContainer.push(card)
        }else{
            var card = `
            <div class="card1 border border-4 border-primary m-3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title text-success">Name: ${data[i].name}</h5>
              <h5 class="text-warning">Role: ${data[i].role}</h5>
            </div>
            <ul class="list-group list-group-flush  mx-auto">
              <li class="list-group-item">Employee ID: ${data[i].id}</li>
              <li class="list-group-item">Email: ${data[i].email}</li>
              <li class="list-group-item">School: ${data[i].school}</li>
            </ul>
            </div>
            `
            cardContainer.push(card)
        }
        
        
}
return cardContainer;
}

const generateHtml = (data) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./Assets/css/style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
    <nav class="navbar navbar-light bg-primary">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 mx-auto fs-1">My Team</span>
    </div>
    </nav>

    <div class="row container d-flex justify-content-center mx-auto">
        ${populate(data)}
    </div>
    </body>
    </html>
    `
}