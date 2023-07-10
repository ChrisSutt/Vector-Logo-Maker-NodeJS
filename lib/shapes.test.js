const { Square, Triangle, Circle } = require('./shapes');

describe('Square', () => {
  test('should generate an SVG Square with Text', () => {
    const square = new Square('blue', 'SVG-Square', 'white');
    const generatedSVG = `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
    `;
   
  });
});

describe('Triangle', () => {
  test('should generate an SVG Triangle with Text', () => {
    const triangle = new Triangle('blue', 'SVG-Triangle', 'white');
    const generatedSVG = `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,20 280,180 20,180" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
    `;
    
  });
});

describe('Circle', () => {
  test('should generate an SVG Circle with Text', () => {
    const circle = new Circle('blue', 'SVG-Circle', 'white');
    const generatedSVG = `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
    `;
    
  });
});
