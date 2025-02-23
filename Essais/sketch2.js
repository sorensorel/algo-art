var angle;
var sentence;
var len;
var lenFactor;
var width;
var height;
var px;
var py;
var noiseOffset = 0; // Noise offset for color variation
var noiseOffsetDelta = 0.0001; // Noise offset increment

function generate() {
  len *= lenFactor;

  var nextString = "";
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    switch (current) {
      case "S":
        nextString += "F";
        break;
      case "F":
        nextString += "FlFrFrFlF";
        break;
      default:
        nextString += current;
        break;
    }
  }
  sentence = nextString;
  console.log(sentence);
}

function render() {
  background(0);

  resetMatrix();
  translate(px, py);
  for (var i = 0; i < sentence.length; i++) {
    var r = map(noise(noiseOffset), 0, 1, 0, 255); // Red component
    var g = map(noise(noiseOffset + 1000), 0, 1, 0, 255); // Green component
    var b = map(noise(noiseOffset + 2000), 0, 1, 0, 255); // Blue component

    stroke(r, g, b, 100); // Set the stroke color with transparency

    var current = sentence.charAt(i);
    if (current == "F") {
      line(0, 0, len, 0);
      translate(len, 0);
    } else if (current == "l") {
      rotate(-angle);
    } else if (current == "r") {
      rotate(angle);
    }

    noiseOffset += noiseOffsetDelta;
  }
}

function setup() {
  angle = (PI * 2) / 3;
  lenFactor = 3 / 4;
  width = windowWidth;
  height = windowHeight;
  console.log(sentence);
  px = 0;
  py = height;

  createCanvas(width, height - 80);

  var button = createButton("Generate");
  button.mousePressed(generate);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  sentence = "S";
  len = 256;

  for (let _ = 0; _ < 5; _++) {
    generate();
  }
  render();

  px = px + 1;
  py = py - 2;

  if (px < 0) {
    px = width;
  } else if (px > width) {
    px = 0;
  }

  if (py < 0) {
    py = height;
  } else if (py > height) {
    py = 0;
  }
  angle = (angle + 0.0008) % (PI * 2);
}
