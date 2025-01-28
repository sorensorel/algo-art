//Mix between Jan 1 (Vertical lines only), JAN 12 (subdivision) and JAN 14 (Pure black and white)
// Inspiré de l'esthétique de Ryoji Ikeda
// Inspiré de l'exemple du prof aussi (celui durant lequel une oeuvre de Ikeda a été reproduite en classe)

function setup() {
  var width = 1000;
  var height = 1000;
  createCanvas(width, height);
}

function draw() {
  noLoop();
  background("black");
  var subdivision;
  subdivision = random(1, 10);
  subdivision = round(subdivision);
  var incrementX = width / (10 * subdivision);
  var incrementY = height / (20 * subdivision);
  var positionX;
  var positionY;
  var linesWidth;
  var lentgh = incrementY;

  for (let x = 0; x <= width; x += incrementX) {
    for (let y = 0; y <= height; y += incrementY) {
      var linesWidth;
      linesWidth = random([1, 2, 3]);
      positionX = random(x, x + incrementX);
      positionY = y;
      stroke("white");
      strokeWeight(linesWidth);

      line(positionX, positionY, positionX, positionY + lentgh);
    }
  }
}
