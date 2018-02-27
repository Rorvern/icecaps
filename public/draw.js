var drawStarted = false;

function setup(){
    var canvasWidth = windowWidth * 0.7 >= 640 ? 640 : windowWidth * .7;
    var canvasHeight = windowHeight * 0.7 >= 480 ? 480 : windowHeight * .7;
    var c = createCanvas(canvasWidth, canvasHeight);
    background("#181C49");
    document.querySelector("#share").addEventListener("click", share);
    textSize(20);
    fill("white");
    text("What do you think the ice caps will look like in 50 years? Draw it!", 10, 30);
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
  var c = createCanvas(canvasWidth, canvasHeight);
}