var bg;
var drawStarted = false;

function setup(){
    createCanvas(640, 480);
    background("#181C49");
    document.querySelector("#share").addEventListener("click", share);
}

function draw() {
  stroke("white");
  fill("white");
  if(mouseIsPressed) {
    if (!drawStarted) {
      drawStarted = true;
      beginShape();
    } 
    vertex(mouseX,mouseY);
    //ellipse(mouseX,mouseY,10,10);
    point(mouseX,mouseY);
  }
}

function mouseReleased() {
  endShape();
  //drawStarted = false;
}

function share() {
  saveCanvas("prediction", "jpg");
}