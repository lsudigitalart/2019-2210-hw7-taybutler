var song;
var playTime, loadTime;
var amp, level;
var fft;

var palms;
var sky;

var x = 0;

function preload() {
    song = loadSound("piratejet.mp3");
    palms = loadImage('palms.png');
    sky = loadImage('orange.jpg');
  }

function setup() {
    createCanvas(1300,700);

    amp = new p5.Amplitude();
    fft = new p5.FFT();
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
    if (playTime > 20000 && playTime < 22000) {
        tint(random(0,255), random(0,255), random(0,255));
    }
    if (playTime > 25600 && playTime < 27000) {
        tint(random(0,255), random(0,255), random(0,255));
    }
    if (playTime > 30000 && playTime < 33000) {
        tint(random(0,255), random(0,255), random(0,255));
    }
    if (playTime > 35000 && playTime < 38000) {
        tint(random(0,255), random(0,255), random(0,255));
    }
    if (playTime > 42000 && playTime < 52000) {
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

    var spectrum = fft.analyze();
    var trebleVol = fft.getEnergy("treble");
    var midVol = fft.getEnergy("mid");
    var bassVol = fft.getEnergy("bass");

    //stars
    noStroke();
    fill('white');

    let size = map (trebleVol, 1, 0.1, 0, 0.1);

    ellipse(100,100, size, size);
    ellipse(250,320, size, size);
    ellipse(400, 200, size, size);
    ellipse(800,230, size, size);
    ellipse(680, 124, size, size);
    ellipse(959, 245, size, size);
    ellipse(1100, 332, size, size);
    ellipse(990, 323, size, size);
    ellipse(203, 349, size, size);
    ellipse(1100, 122, size, size);
    ellipse(90, 12, size, size);
    ellipse(450, 300, size, size);
    ellipse(500, 390, size, size);
}
