// En collaboration avec Etienne Colin
// Inspiration : pissenlit lorsqu'on souffle dessus

var iris;
var irisLength;
var maxSl = 0;
var minSl = Number.POSITIVE_INFINITY;
var maxSw = 0;
var minSw = Number.POSITIVE_INFINITY;
var maxPl = 0;
var minPl = Number.POSITIVE_INFINITY;
var maxPw = 0;
var minPw = Number.POSITIVE_INFINITY;

function preload() {
  iris = loadJSON("iris.json");
}

let points = [];

class Point {
  constructor(x, y, angle, speed, flower) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.speed = speed;
    this.flower = flower;
  }

  update() {
    //this.angle = (this.angle + 0.001) % TWO_PI;
    this.x += cos(this.angle) * this.speed;
    this.y += sin(this.angle) * this.speed;
    /*
    // Bounce off the edges
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
    */
  }

  display() {
    stroke(255);
    strokeWeight(4);
    //point(this.x, this.y);
    var species;
    if (this.flower["species"] == "setosa") {
      species = "se";
    } else if (this.flower["species"] == "versicolor") {
      species = "vs";
    } else {
      species = "vg";
    }

    let r = map(this.flower["sepalLength"], minSl, maxSl, 0.0, 120);
    let g = map(this.flower["sepalWidth"], minSw, maxSw, 0.0, 120);
    let b = map(this.flower["petalWidth"], minPw, maxPw, 0.0, 120);
    let h = r + g + b;
    console.log(h);
    fill(h, 100, 50);

    //fill(r, g, b);
    stroke(255, 0);
    text(species, this.x, this.y);

    // this.flower["species"]
    // TODO: display letter letter
  }
}

function setup() {
  colorMode(HSL);
  createCanvas(windowWidth, windowHeight);
  irisLength = Object.keys(iris).length;

  const centerX = width / 2;
  const centerY = height / 2;
  const speed = 2;
  for (let i = 0; i < irisLength; i++) {
    let flower = iris[i];

    maxSl = Math.max(maxSl, flower["sepalLength"]);
    minSl = Math.min(minSl, flower["sepalLength"]);
    maxSw = Math.max(maxSw, flower["sepalWidth"]);
    minSw = Math.min(minSw, flower["sepalWidth"]);
    maxPl = Math.max(maxPl, flower["petalLength"]);
    minPl = Math.min(minPl, flower["petalLength"]);
    maxPw = Math.max(maxPw, flower["petalWidth"]);
    minPw = Math.min(minPw, flower["petalWidth"]);
  }

  for (let i = 0; i < irisLength; i++) {
    let flower = iris[i];

    const angle = random(TWO_PI);
    let speed = map(flower["petalLength"], minPl, maxPl, 0.1, 0.5);
    points.push(new Point(centerX, centerY, angle, speed, flower));
  }
}

function draw() {
  background(0);
  /*
  if (frameCount < 400) {
    background(0);
  }
  **/
  //background(0, 8);

  for (let p of points) {
    if (frameCount % 360 == 0) {
      p.angle = (p.angle + 180) % 360;
      //p.angle = (p.angle + PI) % TWO_PI;
    }
    //species = p.flower()["species"];
    //text()
    p.update();
    p.display();
  }
}
