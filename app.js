import inquirer from "inquirer";
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

inquirer
  .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
    /* Pass your questions in here */
  ])
  .then((answers) => {
    console.log(answers);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

