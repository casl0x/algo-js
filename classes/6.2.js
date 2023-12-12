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

const rect1 = new Rectangle(0, 0, 4, 4);
const rect2 = new Rectangle(2, 2, 4, 4);
const rect3 = new Rectangle(6, 6, 4, 4);

console.log(rect1.collides(rect2));
console.log(rect1.collides(rect3))