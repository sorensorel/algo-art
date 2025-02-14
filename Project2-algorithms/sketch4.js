var angle;
var sentences;
var string = "S";

function setup() {
  createCanvas(windowWidth, windowHeight);
  angle = PI / 2;
  sentences = ["FlFrFrFlFlll", "FlFrFrFlF", "FFFrrrFFFlll", "FrFl"];
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  //translate(0, windowHeight); //mettre un translate global dans draw pour tout faire bouger
  string = "S";
  stroke(255, 100);

  if (frameCount < 10) {
    string = grammar(string);
  } else {
    express("S");
  }

  /*for (let _ = 0; _ < 5; _++) {
    string = grammar(string, sentences[1]);
  }
  express(string);
}
  */
  function express(string) {
    angle = PI / 2;
    background(0);
    resetMatrix();
    translate(0, windowHeight); //mettre un translate global dans draw pour tout faire bouger
    stroke(255, 100);
    for (let i of string) {
      switch (i) {
        case "F":
          line(0, 0, length, 0);
          translate(length, 0);
          break;
        case "l":
          rotate(-angle);
          break;
        case "r":
          rotate(angle);

          break;
      }
    }
  }

  function grammar(s) {
    var init = "";
    for (let i of s) {
      switch (i) {
        case "S":
          init += "F";
          break;
        case "F":
          init += "FlFrFrFlF";
          break;
        default:
          init += i;
          break;
      }
    }
    return init;
  }
}
