var hr,mn,sc;

var HrAngle,MnAngle,ScAngle;

function preload(){

}

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background("black");  

  translate(200,200);
  rotate(-90);
  hr = hour();
  mn = minute();
  sc = second();

  ScAngle = map(sc,0,60,0,360);
  MnAngle = map(mn,0,60,0,360);
  HrAngle = map(hr%12,0,12,0,360);

  push();
  rotate(ScAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(MnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(HrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke(255,0,0);
  point(0,0);
  strokeWeight(10);
  noFill();

  stroke(255,0,0);
  arc(0,0,300,300,0,ScAngle);

  stroke(0,255,0);
  arc(0,0,280,280,0,MnAngle);

  stroke(0,0,255);
  arc(0,0,260,260,0,HrAngle);

  stroke("white");
  arc(0,0,350,350,0,360);
  
  drawSprites();
}