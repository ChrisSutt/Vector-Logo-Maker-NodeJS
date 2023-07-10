const inquirer = require('inquirer');
const fs = require('fs');
const question = require('./lib/question');
const file = './samples/logo.svg';
const genShape = require('./lib/genShape');

function genLogo(response) {
    const vector = genShape(response);
    fs.writeFile(file, vector);
}

function init() {
    inquirer
    .prompt(question)
    .then((response) => {
        genLogo(response);
    })
    .catch(err => {
        console.log(err)
    });
}

init()
