function setup() {
  createCanvas(windowWidth, windowHeight);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  noLoop();
  background("white");
  var couleurs = ["red", "black", "green"];

  strokeWeight(5);
  var numLines = 1000;

  for (let i = 0; i < numLines; i++) {
    var couleur = random(couleurs);
    stroke(couleur);

    var positionX = random(windowWidth);
    var positionY = random(windowHeight);
    var lentgh = random(windowHeight - positionY);
    // if (couleur == 'white') {
    //   background("black")
    // }

    line(positionX, positionY, positionX, positionY + lentgh);
  }
}
