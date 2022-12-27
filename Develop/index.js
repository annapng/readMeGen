// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

const questions = [
        {type: 'input',
        message: 'What is the Title of your project?',
        name: 'title',
        validate: (value)=>{ if(value){return true} else {return 'Please provide a title.'}}},
    
        {type: 'input',
        message: 'What is the Description of your project?',
        name: 'description',
        validate: (value)=>{ if(value){return true} else {return 'Please provide a description.'}}},
    
        {type: 'input',
        message: 'What is the installation process of your project?',
        name: 'installation',
        validate: (value)=>{ if(value){return true} else {return 'Please provide an installation process.'}}},

        {type: 'input',
        message: 'What is the usage of your project?',
        name: 'usage',
        validate: (value)=>{ if(value){return true} else {return 'Please provide what the usage is of your project.'}}},
    
        {type: 'input',
        message: 'Do you have any contributors of your project?',
        name: 'contributions'},
    
        {type: 'input',
        message: 'What tests have you run on your project?',
        name: 'tests'},

        {type: 'list',
        message: 'Which license are you using for your project?',
        choices: ['Apache 2.0 License', 'Creative Commons Attribution 4.0 International License', 'GNU GPL v3 License', 'IBM Public License Version 1.0', 'The MIT License', 'Mozilla Public License 2.0', 'No License'],
        name: 'license'}, 
    
        {type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'},

        {type: 'input',
        message: 'What is your email?',
        name: 'email'},

        {type: 'input',
        message: 'How can people best reach you with questions?',
        name: 'questions'}

    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => { if (err) {
        return console.log(err);
    }
    
    console.log("Congratulations! Your file is created!")   });
}

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {

await inquirer.prompt(questions).then((answers) => {
    JSON.stringify(answers);
    const userResponse = answers;

    const markdown = generateMarkdown(userResponse);
    console.log(markdown);

    writeFileAsync('Example.md', markdown);
    console.log("Complete!");
});
}

// Function call to initialize app
init();
