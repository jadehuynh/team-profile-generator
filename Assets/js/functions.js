const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');


function generateHtml(answers) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./Assets/css/style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <script src="./Assets/js/index.js"></script>
    </body>
    </html>
    `
  }