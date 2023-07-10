const { Square, Triangle, Circle } = require('./shapes');

describe('Square', () => {
    Test('should generate a SVG-Square with Text', () => {
        const square = new Square('blue', 'SVG-Square', 'white');
        const generatedSVG = 
        `<svg version="1.1" 
        width="300" height="200" 
        xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="100" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>
        `;
        expect(square.render()).toBe(generatedSVG.trim());
    });
});


