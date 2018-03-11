var drawStarted = false;
var canvasWidth = window.innerWidth * 0.7 >= 640 ? 640 : window.innerWidth * .7;
var canvasHeight = window.innerHeight * 0.7 >= 480 ? 480 : window.innerHeight * .7;
var c;

function setup(){
    initializeCanvas();
    document.querySelector("#share").addEventListener("click", share);
    c.touchStarted(function() {
      stroke("white");
      fill("white");
      beginShape();
      console.log("Shape begun");
   });

   c.touchMoved(function(){
    vertex(mouseX,mouseY);
    point(mouseX,mouseY);
   }); 

   c.touchEnded(function(){
     console.log("Mouse released");
     vertex(mouseX,mouseY);
      point(mouseX,mouseY);
     endShape();
     drawStarted = false;
   });

   console.log(c);
}

function share() {
  saveCanvas("prediction", "jpg");
}

function reset() {
  clear(c);
}

function initializeCanvas() {
  clear();
  c = createCanvas(canvasWidth, canvasHeight);
  background("#181C49");
  textSize(20);
  fill("white");
  text("What do you think the ice caps will look like in 50 years? Draw it!", 10, 30);
}