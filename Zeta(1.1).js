let s = 1.1;
let x = 67.747717016565837;
let correct = 0;
const Phi = (1 + Math.sqrt(5)) / 2;
let sum = 10.58444846495081;

correct = Phi;
correct = correct ** (1 / Math.PI);
correct = correct ** (1 / Phi);
correct = correct ** (x / Math.E);

name.innerText += `(${s})`;
sumDisplay.innerText += sum.toFixed(15);
myValue.innerText += correct.toFixed(15);
diff.innerText += (correct - sum).toFixed(15);
division.innerText += x / s;
