class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset) {
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
    get surface() {
        return Math.PI * Math.pow(this.radius, 2);
    } 
}
let rond = new Circle(0, 0, 5)

// position initial du cercle 
console.log('Initial Circle:');
console.log('Position:', rond.xPos, rond.yPos);
console.log('Radius:', rond.radius);
console.log('Surface Area:', rond.surface);

// cercle déplacer
rond.move(5, 6);
console.log('\nCircle after movement:');
console.log('Position:', rond.xPos, rond.yPos);
console.log('Radius:', rond.radius);
console.log('Surface Area:', rond.surface);