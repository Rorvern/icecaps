var bg;
var drawStarted = false;

function setup(){
    var canvasWidth = windowWidth * 0.7 >= 640 ? 640 : windowWidth * .7;
    var canvasHeight = windowHeight * 0.7 >= 480 ? 480 : windowWidth * .7;

    var c = createCanvas(canvasWidth, canvasHeight);
    background("#181C49");
    document.querySelector("#share").addEventListener("click", share);
}
c.mousePressed = function draw() {
  stroke("white");
  fill("white");
  if(mouseIsPressed) {
    if (!drawStarted) {
      drawStarted = true;
      beginShape();
      vertex(mouseX,mouseY);
      //ellipse(mouseX,mouseY,10,10);
      point(mouseX,mouseY);
    }
  }
}

function mouseReleased() {
  endShape();
  //drawStarted = false;
}

function share() {
  saveCanvas("prediction", "jpg");
}

function reset() {
  var c = createCanvas(canvasWidth, canvasHeight);
}