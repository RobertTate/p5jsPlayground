let directionHandler = ['+', '-']

class MovingCircle {
    constructor() {
        this.x = Math.floor(Math.random() * 200);
        this.y = Math.floor(Math.random() * 200);
        this.d = Math.floor(Math.random() * 200);
        this.xDirection = directionHandler[Math.floor(Math.random() * 2)]
        this.yDirection = directionHandler[Math.floor(Math.random() * 2)]
        this.speed = Math.floor((Math.random() * 5) + 1);
    }

    paintTheCircle() {
        circle(this.x, this.y, this.d);
    }

    moveTheCircle() {
        if (this.x >= (600 - (this.d / 2))) {
            this.xDirection = '-';
        }
        if (this.x <= (0 + (this.d / 2))) {
            this.xDirection = '+';
        }
        if (this.y >= (600 - (this.d / 2))) {
            this.yDirection = '-';
        }
        if (this.y <= (0 + (this.d / 2))) {
            this.yDirection = '+';
        }
        if (this.xDirection === '+') {
            this.x+=this.speed;
        } else if (this.xDirection === '-') {
            this.x-=this.speed;
        }
        if (this.yDirection === '+') {
            this.y+=this.speed;
        } else if (this.yDirection === '-') {
            this.y-=this.speed;
        }
    }
}

let c1 = new MovingCircle();
let c2 = new MovingCircle();
let c3 = new MovingCircle();
let c4 = new MovingCircle();

// class CircleManager {
//     constructor(circles) {
//         this.circles = [...circles];
//     }

//     handleIntersections() {
//         this.circles.forEach((circle, index) => {
//             console.log(circle);
//             console.log(index);
//         })
//     }
// }

// const cm = new CircleManager([c1, c2, c3, c4])

// cm.handleIntersections()


function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(220, 100, 50);
    c1.paintTheCircle();
    c1.moveTheCircle();

    c2.paintTheCircle();
    c2.moveTheCircle();

    c3.paintTheCircle();
    c3.moveTheCircle();

    c4.paintTheCircle();
    c4.moveTheCircle();
}