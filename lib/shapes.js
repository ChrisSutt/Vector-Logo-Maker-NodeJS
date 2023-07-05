
// Circle
class Circle {
    constructor(radius) {
        this.radius = radius; // Radius with provided value
    }

    // Calculate and return the area of the circle
    getArea() {
        return Math.PI * Math.pow(this.radius); // Calculate the area using Math.PI * Math.pow and radius
    }
}

class Square {}


class Triangle {}


module.exports = { Circle, Triangle, Square };