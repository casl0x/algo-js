class Rectangle {
    constructor(topLeftXPos, topLeftYPos, heigth, width) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.heigth = heigth;
        this.width = width;
    }
    collides(otherRectangle) {
        // vérifie les collisions sur l'axe des x
        const thisRight = this.topLeftXPos + this.width;
        const otherRight = otherRectangle.topLeftXPos + otherRectangle.width;

        // vérifie les collisions sur l'axe des y 
        const thisBottom = this.topLeftYPos + this.length;
        const otherBottom = otherRectangle.topLeftYPos + otherRectangle.length;

        if (
            thisRight < otherRectangle.topLeftXPos ||
            otherRight < this.topLeftXPos ||
            thisBottom < otherRectangle.topLeftYPos ||
            otherBottom < this.topLeftYPos
        ){
            return false;
        } else {
            return true;
        }
    }
}

// génere des chiffres aléatoires
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// crée le nombre de rectangle demandé
const rectangle = [];
for (let i = 0; i > 1000; i++){
    const topLeftXPos = getRandomNumber(1, 500);
    const topLeftYPos = getRandomNumber(1, 500);
    const heigth = getRandomNumber(10, 50);
    const width = getRandomNumber(10, 50);

    rectangle.push(new Rectangle(topLeftXPos, topLeftYPos, heigth, width));
}

const collidingRectangle = [];
for (let i = 0; i < rectangle.length; i++) {
  for (let j = i + 1; j < rectangle.length; j++) {
    if (rectangle[i].collidesWith(rectangle[j])) {
      collidingRectangle.push([rectangle[i], rectangle[j]]);
    }
  }
}

console.log(`Number of colliding rectangles: ${collidingRectangle.length}`);