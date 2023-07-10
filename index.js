const inquirer = require('inquirer');
const fs = require('fs');
const question = require('./lib/question.js');
const file = './samples/logo.svg';
const genShape = require('./lib/genShape.js');

function genLogo(response) {
    const vector = genShape(response);
    fs.writeFile(file, vector, (err) => {
        if (err) {
            console.error('Error generating logo:', err);
        } else {
            console.log('Generated logo.svg');
        }
    });
}
function init() {
    inquirer.prompt(question).then((response) => {
            genLogo(response);
        })
        .catch(err => {
            console.log(err);
        });
}

init();



