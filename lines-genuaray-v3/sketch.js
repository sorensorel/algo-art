//Oeuvre radicale

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  noLoop();
  background("black");
  stroke("white");
  strokeWeight(500);

  line(windowWidth / 2, windowHeight, windowWidth / 2, 0);
}
