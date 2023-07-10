const Triangle = require('./Triangle');

describe('Triangle', () => {
  test('should render SVG-Triangle with the provided colors and text', () => {
    const triangle = new Triangle('blue', 'SVG-Triangle', 'white');
    const expectedSVG = `
      <svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
          <polygon points="150,20 280,180 20,180" fill="blue" />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG-Triangle</text>
      </svg>
    `;
    expect(triangle.render()).toBe(expectedSVG.trim());
  });
});