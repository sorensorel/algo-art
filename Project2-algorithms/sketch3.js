var point_x;
var point_y;

function setup() {
  createCanvas(400, 400);
  colorMode(HSL, 1, 1, 1);
  point_x = width / 3;
  point_y = height / 2;
}

function draw() {
  if (frameCount == 1) {
    background(0, 0, 0, 255);
  }
  //background(0, 0, 0, 0.4);
  //counter = framecount%6

  if (frameCount % 6 == 0) {
    background(0, 0, 0, 0.4);
    stroke(0, 0, 1);
    fill(0, 0, 1);
    x = cos(frameCount) * 10 + width / 2;
    y = sin(frameCount) * 10 + height / 2;
    circle(x, y, 5);
  }

  dx = cos(frameCount / 10) + 1;
  dy = sin(frameCount / 10) * 2 - 1;
  point_x = point_x + dx;
  point_y = point_y + dy;

  if (point_x < 0) {
    point_x = width;
  } else if (point_x > width) {
    point_x = 0;
  }

  if (point_y < 0) {
    point_y = height;
  } else if (point_y > height) {
    point_y = 0;
  }

  n = noise(frameCount / 100);
  // n = noise(point_x / width, point_y / height);
  fill(n, 1, 0.5);
  stroke(n, 1, 0.5);
  circle(point_x, point_y, 10);
}
