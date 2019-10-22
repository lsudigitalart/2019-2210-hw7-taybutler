var song;
var playTime, loadTime;
var amp, level;


var time1 = 2000;
var time2 = 4000;
var x = 60;

var shipX;

function preload() {
    song = loadSound("piratejet.mp3");
  }

function setup() {
    createCanvas(1300,700);
    background(237, 106, 24);
    amp = new p5.Amplitude;
}

function mousePressed() {
    if (song.isLoaded()) {
        loadTime= millis();
        song.play;
        
    }
}

function draw() {
    //var currentTime = millis();
    
    playTime = millis() - loadTime;
    print(playTime);
    level = amp.getLevel();

    noStroke();
    fill(44, 113, 209);
    square(0, 500, 1300);

    arc(X, 465, 90, 90, 0, PI, OPEN);

    if(playTime > 100 && playTime < 10000) {
        x += 100
    }

    //if (currentTime > time2) {
        //x -= 10;
    //} else if (currentTime > time1) {
        //x += 10;
    //}
    //arc(x, 465, 90, 90, 0, PI, OPEN);
}