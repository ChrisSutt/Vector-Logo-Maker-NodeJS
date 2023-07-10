
const colorList = require('./colorList')
const questions = [

    // Choosing the shape
    {
        name: 'shape',
        message: 'What shape do you want your logo?',
        input:'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },

    // Choosing what type of color code to enter
    {
        name: 'shapeColorC',
        message: 'What is the color of the shape? Choose a color format:',
        type: 'list',
        choices: ['color name', 'hexadecimal']
      },
    
      // Choose your color code by Color Name
      {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color",
        when: (answers) => answers.shapeColorC === 'color name',
        validate: (answer) => colorList.includes(answer.toLowerCase()) || "Please enter a valid color name"
      },

      // Choose your color by hex code
      {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape hexadecimal number (#CCCCCC)",
        when: (answers) => answers.shapeColorCh === 'hexadecimal',
        validate: (answer) => /^#[A-Fa-f0-9]{6}$/.test(answer) || "Please enter a valid hexadecimal"
      },


      // Only allow 3 characters in the logo

    {
        name: 'text',
        message: 'Your logo name ( 3 Characters )',
        type: 'input',
        validate: (answer) => (answer.length <= 3) || 'Must be 3 characters or less'
    },

    // Text Color - choose your color format
    {
        name: 'textColorC',
        message: 'What is the color of the text? Choose a color format:',
        type: 'list',
        choices: ['color name', 'hexadecimal']
      },
    
    // Color based on color name
      {
        type: "input",
        name: "textColor",
        message: "Enter the text color",
        when: (answers) => answers.textColorC === 'color name',
        validate: (answer) => colorList.includes(answer.toLowerCase()) || 'Please enter a valid color name'
      },

      // Color based on
      {
        type: "input",
        name: "textColor",
        message: "Enter the text hexadecimal number (#CCCCCC)",
        when: (answers) => answers.textColorC === 'hexadecimal',
        validate: (answer) => /^#[A-Fa-f0-9]{6}$/.test(answer) || 'Please enter a valid hexadecimal'
      },
];

    module.exports = questions;