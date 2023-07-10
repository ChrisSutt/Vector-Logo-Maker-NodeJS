const Square = require('./square');
const Triangle = require('./triangle.js');
const Circle = require('./circle.js');

function genShape(response) {
  if (!response.shape) {
    throw new Error('Shape is required');
  }

  if (response.shape === 'Square') {
    const userShape = new Square(response.shapeColor, response.text, response.textColor);
    return userShape.render();
  }

  if (response.shape === 'Triangle') {
    const userShape = new Triangle(response.shapeColor, response.text, response.textColor);
    return userShape.render();
  }

  if (response.shape === 'Circle') {
    const userShape = new Circle(response.shapeColor, response.text, response.textColor);
    return userShape.render();
  }

  throw new Error('Invalid shape: ' + response.shape);
}

module.exports = genShape;