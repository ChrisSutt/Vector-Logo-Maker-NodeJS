const Circle = require('../lib/circle');

describe('Circle', () => {
   test('should render SVG-Circle with the provided colors and text', () => {
     const circle = new Circle('blue', 'SVG-Circle', 'white');
     const expectedSVG =`<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="blue" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG-Circle</text>
</svg>`;
      expect(circle.render()).toBe(expectedSVG.trim());
    });
  });
