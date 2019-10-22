var song;
var playTime, loadTime;
var amp, level;

var palms;
var sky;

var x = 0;

function preload() {
    song = loadSound("piratejet.mp3");
    palms = loadImage('palms.png');
    sky = loadImage('sky.jpg');
  }

function setup() {
    createCanvas(1300,700);

    amp = new p5.Amplitude();
}

function mousePressed() {
if (song.isLoaded()) {
    loadTime = millis();
    print(loadTime);
    song.play();
  }
  
}
function draw() {
    background(237, 106, 24);

    playTime = millis() - loadTime;
    print(playTime);
    level = amp.getLevel();

    var currentTime = millis();

    noStroke();
    //fill(100,100,100);
    frameRate(3);
    //sky
    if (playTime > 20000 && playTime < 23000) {
        tint(random(0,255), random(0,255), random(0,255));
    }
    if (playTime > 26000 && playTime < 28000) {
        tint(random(0,255), random(0,255), random(0,255));
    }
    if (playTime > 30000 && playTime < 33000) {
        tint(random(0,255), random(0,255), random(0,255));
    }
    if (playTime > 35000 && playTime < 39000) {
        tint(random(0,255), random(0,255), random(0,255));
    }
    if (playTime > 42000 && playTime < 51000) {
        tint(random(0,255), random(0,255), random(0,255));
    }
    if (playTime > 52000 && playTime < 54000) {
        tint(random(0,255), random(0,255), random(0,255));
    }
    if (playTime > 58000 && playTime < 59000) {
        tint(random(0,255), random(0,255), random(0,255));
    }
    if (playTime > 62000 && playTime < 65000) {
        tint(random(0,255), random(0,255), random(0,255));
    }
    if (playTime > 68000 && playTime < 70000) {
        tint(random(0,255), random(0,255), random(0,255));
    }
    if (playTime > 73000 && playTime < 83000) {
        tint(random(0,255), random(0,255), random(0,255));
    }
    if (playTime > 84000 && playTime < 87000) {
        tint(random(0,255), random(0,255), random(0,255));
    }
    if (playTime > 90000 && playTime < 92000) {
        tint(random(0,255), random(0,255), random(0,255));
    }
    if (playTime > 95000 && playTime < 97000) {
        tint(random(0,255), random(0,255), random(0,255));
    }
    //square(1300,700);
    image(sky, 0, 0, 1300, 700);
    noTint();

    frameRate(30);
    //ocean
    noStroke();
    fill(44, 113, 209);
    square(0, 500, 1300);
    
    image(palms, 1000, 354, 150, 150);

    //boat
    if (currentTime > 0) {
        x += 0.2;
    }
    arc(x, 480, 90, 90, 0, PI, OPEN);
    triangle(x - 10, 420, x - 10, 480, x + 30, 460);

    //stars
    stroke(225);
    strokeWeight(5);
    point(100,100);
    point(250,320);
    point(400, 200);
    point(800,230);
    point(680, 124);
    point(959, 245);
    point(1100, 332);
    point(990, 323);
    point(203, 349);
    point(1100, 122);
    point(90, 12);
    point(450, 300);
    point(500, 390);
}
