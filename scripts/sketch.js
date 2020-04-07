let textCode = "tZvpXW";
let textColor = "#c40424";
let cubeColor = "#17181c";

let cubes = [];
let w = 10;
let cols;
let rows;

function setup() {

    let canvas = createCanvas(160, 60);
    canvas.id("canvas");
    canvas.parent("#code");
    textAlign(CENTER, CENTER);
    textSize(32);
    cols = floor(width / w);
    rows = floor(height / w);
    for (let i = 0; i <= cols; i++) {
        cubes[i] = [];
        for (let j = 0; j <= rows; j++) {
            cubes[i][j] = true;
        }
    }

}

function mouseDragged() {

    if (mouseX > width || mouseX < 0 || mouseY > height || mouseY < 0) {
        return;
    }
    let i = floor(mouseX / w);
    let j = floor(mouseY / w);
    cubes[i][j] = false;

}

function draw() {

    background(255);
    fill(textColor);
    text(textCode, width / 2, height / 2 + 2);
    noStroke();
    fill(cubeColor);
    
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (cubes[i][j]) {
                rect(i * w, j * w, w, w);
            }
        }
    }

}