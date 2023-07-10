const Square = require('./Square');

describe('Square', () => {
  test('should render SVG-Square with the provided colors and text', () => {
    const square = new Square('blue', 'SVG-Square', 'white');
    const expectedSVG = `
      <svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="50" width="200" height="100" fill="blue" />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG-Square</text>
      </svg>
    `;
    expect(square.render()).toBe(expectedSVG.trim());
  });
});