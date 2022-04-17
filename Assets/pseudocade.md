1. Create file structure based on readme file

2. Build out classes for each of the following:
    -Employee
        -name
        -id
        -email
        -getName()
        -getId()
        -getEmail()
        -getRole() -- return "Eemployee"
    -Manager
        -officeNumber
        -getRole() -- return "Manager"
    -Engineer
        -github (github username)
        -getGithub()
        -getRole() -- return Engineer
    -Intern
        -school
        -getSchool()
        -getRole() -- return Intern

        index.js

3. import classes/dependencies into index 
4. create array to store employees

5. create function to initialize app- divide based on employee roles

all teams need at least one manager
        -nest functioned within this app that will generator a manager with inquirer prompt
        -create a new manager object using the manager class and the data from the inquirer prompts
        -push that object to the array of employees

        -Do the same for Intern and Engineers 

        -use a prompt to ask if you'd like to create another employee or finish generating your team -- use conditionals for logic

        -create a function that stops the inquirer prompts and generates the html page
            -Use fs to dist folder

6. Create a helper function in your src folder to generate HTML file (similar to generateMarkdown in your README generator)

    -Generate employee cards for each type of employee, pass in the data from inquirer prompts
    -Create an array to store HTML, and then push html for each employee into the array and return as a string at the end
    -Make sure you're exporting this function and importing it to your index file

Tests
-a suite of tests for each class in your app
-test folder specific to roles/classes
    -test: constructor function, request methods