var func;
var funcPrime;
var roots = [];
var res = 0.1;

function setup () {
  var width = 500;
  var height = 500;
  noStroke();
  createCanvas(500, 500);
  translate(width / 2, height /2)
  background(200);
  func = new Polynomial ([1, 0, 0, -1]);
  funcPrime = func.derivative();
  roots.push(new Cnum (1, 0));
  roots.push(new Cnum (-0.5, (Math.sqrt(3)/2)));
  roots.push(new Cnum (-0.5, (-Math.sqrt(3)/2)));
  main();
}

function main () {
  for (let i = width * -0.5; i < width * 0.5; i++) {
    for (let j = height * -0.5; j < height * 0.5; j++) {

      let pos = new Cnum (i / 200, j / 200);
      var guess = findZero(pos, func);

      for (let tries = 0; tries < 100; tries++) {
        guess = findZero(guess, func);
        if (guess.distance(roots[0]) < res) {
          fill(255, 0, 0);
          rect(i, j, 1, 1);
          break;
        } else if (guess.distance(roots[1]) < res) {
          fill (0, 255, 0);
          rect(i, j, 1, 1);
          break;
        } else if (guess.distance(roots[2]) < res) {
          fill (0, 0, 255);
          rect(i, j, 1, 1);
          break;
        } else if (tries == 99) {
          fill (0, 100, 100);
          rect(i, j, 1, 1);
        }
      }
    }
  }
}

function findZero (point, F) {
  let deriv = F.derivative();

  return point.subtract((F.evaluate(point).divide(deriv.evaluate(point))));
}
