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
  strokeWeight(40 + px);
  line(100, windowHeight / 2, 150, windowHeight / 2 + 200);
  px += 1;
}
