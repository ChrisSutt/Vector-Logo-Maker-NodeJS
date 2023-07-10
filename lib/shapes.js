// FOR README
// https://www.codecademy.com/forum_questions/4f8f138b85aff00003015792
// https://www.w3resource.com/javascript-exercises/javascript-object-exercise-9.php
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
// Circle
class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
}

class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }

    render() {
        return
        `<svg version="1.1" 
        width="300" height="200" 
        xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="100" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>
        `;
    }
}

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    
    }
    render() {
        return
        `<svg version="1.1" 
        width="300" height="200" 
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,20 280,180 20,180" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>
        `;

    }
}

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    
    }
    render() {
        return
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>
        `;
    }
}

module.exports = { Square, Triangle, Circle };