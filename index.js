const inquirer = require('inquirer');
console.log("readme working");
const fs = require('fs');
const path = require('path');
var profileDataArgs = process.argv.slice(10, process.argv.length);
var commandLineArgs = process.argv;
function startProgram() {
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter title name.',
            name: 'title',
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('You need to enter a title');
                  return false;
                }
              }
        
        },
        {
          type: 'input',
          message: 'Github',
          name: 'github',
          validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('Please enter your github link');
                return false;
              }
          }
      },
      {
        type: 'input',
        message: 'Email',
        name: 'email',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter your email');
              return false;
            }
          }
    
    },
        {
            type: 'input',
            message: 'Description of Project',
            name: 'description',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('You need to enter a project description');
                  return false;
                }
              }
        
        },
        {
            type: 'input',
            message: 'Table of contents',
            name: 'table',
            validate: tableInput => {
                if (tableInput) {
                  return true;
                } else {
                  console.log('You need to enter a table of contents!');
                  return false;
                }
              }
        
        },
        {
            type: 'input',
            message: 'installation required',
            name: 'installation',

            validate: installInput => {
                if (installInput) {
                  return true;
                } else {
                  console.log('You need to enter install info');
                  return false;
                }
              }
        
        },
        {
            type: 'input',
            message: 'Used for',
            name: 'usage',
            validate: usageInput => {
                if (usageInput) {
                  return true;
                } else {
                  console.log('You need to enter usage of project');
                  return false;
                }
              }
        
        },
        {
            type: 'rawlist',
            message: 'Please pick a license:',
            name: 'License',
            choices: ['MIT', 'Creative Commons', 'General Public License', 'Open Source' ],
            validateResponse() {
            if ('MIT') {
          }
          else if ('Creative Commons') {
              console.log("You are probably well informed");
          }
          else if ('General Public License') {
              console.log('General Public License');
          }
          else {
              console.log('Open Source');
          }
          
        }
        
        
        },
        {
            type: 'input',
            message: 'Contributors',
            name: 'contributing',
            validate: contributorInput => {
                if (contributorInput) {
                  return true;
                } else {
                  console.log('You need to enter contributors names');
                  return false;
                }
              }
        
        },
        {
            type: 'input',
            message: 'Tests',
            name: 'tests',
            validate: testInput => {
                if (testInput) {
                  return true;
                } else {
                  console.log('You need to enter test!');
                  return false;
                }
              }
        
        },
        {
            type: 'input',
            message: 'Questions',
            name: 'questions',
            validate: questionInput => {
                if (questionInput) {
                  return true;
                } else {
                  console.log('You need to enter questions!');
                  return false;
                }
              }
        
        },
    ]).then((data) => {
      fs.writeFile('README.MD', `
      #${data.title}
      ## https://img.shields.io/static/v1?label=License&message=${data.questions}&color=blue
      ### Github: ${data.github}
      ### Email: ${data.email}
      ### Description:${data.description}
      ### Installation: ${data.installation}
      ### Usage: ${data.installation}
      ### License: ${data.License}
      ### Contributors ${data.contributing}
      ### Questions: ${data.questions}
      
      
      ` , err => {
        if (err) throw err;
      
        console.log('Portfolio complete! Check out index.html to see the output!');
      });
       
    })
    
  };

  
  

  startProgram();


  