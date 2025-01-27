function setup() {
  createCanvas(windowWidth, windowHeight);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  noLoop();
  background("white");
  var couleurs = ["red", "black", "white"];
  var coureurs2 = ["white", "black"];
  var linesWidth;
  var choiceGenuary;
  choiceGenuary = random(["horizontal lines", 2]);

  var numLines = 1000;
  //on va diviser l'écran en sous-parties
  for (let i = 1; i < 5; i++) {
    var width = windowWidth;
    var height = windowHeight;

    for (let i = 0; i < numLines; i++) {
      linesWidth = random([0.5, 1, 2, 3]);
      strokeWeight(linesWidth);
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
}
