let s = 50;
let plant_img;
let plant_imgSize = 340;
let heart;
const plant = document.getElementById('plant_image');
let heartIsRed = false;

const manager = new Hammer.Manager(plant);

const doubleTap = new Hammer.Tap({
    event: 'doubletap',
    taps: 2
});

manager.add(doubleTap);


let ranText = ["i'm horny!!", "i'm just feeling a bit... thirsty", "water me bitch"];


function setup() {
    let ig = createCanvas(340, s / 2 + 20);
    ig.parent('ig_image');
    // ig.background(200);
    // plant = image(plant_img, 0, 0, plant_imgSize, plant_imgSize);

    heart = new Heart(s / 2, s / 4, s / 2);
    //click on the desktop 
    plant.ondblclick = function () {
        // console.log("finally");
        heart.doubleClick();
    }
    // doubletap on mobile phone
    manager.on('doubletap', function(e){
        heart.doubleClick();
    })
    // console.log(plant);
    document.getElementById("replacable").innerHTML = ranText[int(random(ranText.length))];

}

function draw() {
    heart.display();
    // console.log(heartIsRed);
}


function mousePressed() {
    heart.clicked();
}

class Heart {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.col = color(255, 255, 255);
    }

    clicked() {
        let d = dist(mouseX, mouseY, this.x, this.y);
        if (d < this.size) {
            if (heartIsRed == false) {
                noStroke();
                this.col = color(255, 0, 0);
                heartIsRed = true;
            } else {
                // noFill();
                this.col = color(255, 255, 255);
                // stroke(this.col);
                heartIsRed = false;
            }
        }
    }

    doubleClick() {
        if (heartIsRed == false) {
            this.col = color(255, 0, 0);
            noStroke();
            heartIsRed = true;
        }
    }

    display() {
        fill(this.col);
        beginShape();
        vertex(this.x, this.y);
        bezierVertex(this.x - this.size / 2, this.y - this.size / 2, this.x - this.size, this.y + this.size / 3, this.x, this.y + this.size);
        bezierVertex(this.x + this.size, this.y + this.size / 3, this.x + this.size / 2, this.y - this.size / 2, this.x, this.y);
        endShape(CLOSE);
    }
}