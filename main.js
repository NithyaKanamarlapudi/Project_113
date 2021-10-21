function preload(){}

function setup(){
canvas=createCanvas(640,480);
canvas.center()
video=createCapture(VIDEO);
video.hide();
}

function draw(){
    image(video, 110,90, 400, 300);
    fill("red");
    circle(30, 30, 50);
    circle(30, 450, 50);
    circle(610, 30, 50);
    circle(610, 450, 50);
}