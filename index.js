const fs = require('fs'); 
const inquirer = require('inquirer'); 
const generateMarkdown = require('./utils/generateMarkdown');


const questions = () => {
        // using inquirer to prompt questions to user 
        return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false; 
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false; 
                }
            }
    
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false; 
                }
            }
        }, 
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'GNU', 'Public Domain', 'No License'],
            default: ["No License"],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please choose a license!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter installation steps!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this app?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of how to use the app!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'test', 
            message: 'What command should be run to run tests?',
            default: 'npm test'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'What does the user need to know about contributing to the repo?'
        }
    ]);

    };

    
const writeToFile = data => {
    fs.writeFile('README.md', data, err => {
        //error exists
        if(err) {
            console.log(err);
            return;
            //if no error
        } else {
            console.log("Your README has been created.")
        }
    })
};


questions()
.then(answers => {
    return generateMarkdown(answers);
})
.then(data => {
    return writeToFile(data);
})
.catch(err => {
    console.log(err);
})

