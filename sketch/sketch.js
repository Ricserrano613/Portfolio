// Created on 10/11/22 for at least 1 hour of practice time

// Expanding on stars in space. Creating a spaceship!

//Background colors

let r = 0;
let g = 0;
let b = 10;
let t = 25;

//Head of Ricky's spaceship

let shipHead = {
    x1: 400,        //X-coordinate 1, Y-coordinate 1 so on and so forth
    x2: 300,
    x3: 350,
    x4: 300,
    x5: 376,
    x6: 250
};

//Body of Ricky's spaceship

let shipBody = {
    x: 350,
    y: 300,
    width: 50,
    length: 80
};

//Window of Ricky's spaceship

let shipWindow = {
    x: 376,
    y: 340,
    radius: 30,
    diameter: 30
}

//Left wing

let leftWing = {
    x: 320,
    y: 350,
    width: 30,
    length: 30
}

//Right wing

let rightWing = {
    x: 400,
    y: 350,
    width: 30,
    length: 30
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(r, g, b, t);
    //Drawing elements of Ricky's spaceship
    rect(shipBody.x, shipBody.y, shipBody.width, shipBody.length);
    triangle(shipHead.x1, shipHead.x2, shipHead.x3, shipHead.x4, shipHead.x5, shipHead.x6);
    ellipse(shipWindow.x, shipWindow.y, shipWindow.radius, shipWindow.diameter);
    rect(leftWing.x, leftWing.y, leftWing.width, leftWing.length);
    rect(rightWing.x, rightWing.y, rightWing.width, rightWing.length);
    //Set random stars in background
    let stars = {
        locationX: random(width),
        locationY: random(height),
        size: random(1, 6)
    }
    ellipse(stars.locationX, stars.locationY, stars.size);
}