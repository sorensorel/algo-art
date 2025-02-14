// Collaboration avec Étienne : il m'a beaucoup aidé. M'a apporté de chouettes modifications.
// Éléments intéressants que j'ai appris :
// Les variables globales. Ça n'a pas marché pendant un moment à cause de la variable globale : PI. Je l'avais définie dans  setup. Au lieu que ce soit à l'extérieur
// de la fonction. Au tout début
// reset Matrix
// background
// la fonction button à incorporer
//Références :
// https://www.youtube.com/watch?v=z7LeTu94qEc&ab_channel=ProgrammingChaos
//
var string = "S";
var length = 10;
var angle;
var sentences;
var x;
var px;
var py;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = [1, 2, 3, 4, 5];
  angle = PI / x[1];
  px = 0;
  py = height;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  if (frameCount < 10) {
    string = grammar(string);
  }
  express();
  px = px + 9;
  py = py - 15;
}

function grammar(s) {
  sentences = ["FlFrFrFlFlll", "FlFrFrFlF", "FFFrrrFFFlll", "FFllr"];
  var init = "";
  for (let i of s) {
    switch (i) {
      case "S":
        init += "F";
        break;
      case "F":
        init += sentences[1];
        break;
      default:
        init += i;
        break;
    }
  }
  return init;
}
function express() {
  background(0);
  resetMatrix();
  translate(0, windowHeight); //mettre un translate global dans draw pour tout faire bouger
  stroke(255, 100);
  //translate(px, py);

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
