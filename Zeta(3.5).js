let s = 3.5;
let x = 3.42625831630397;
let sum = 0;
let correct = 0;
const Phi = (1 + Math.sqrt(5)) / 2;

for (let i = 1; i <= 10 ** 4; i++) {
  sum += 1 / i ** s;
  correct = Phi;
  correct = correct ** (1 / Math.PI);
  correct = correct ** (1 / Phi);
  correct = correct ** (x / Math.E);
}

name.innerText += `(${s})`;
sumDisplay.innerText += sum.toFixed(15);
myValue.innerText += correct.toFixed(15);
diff.innerText += (correct - sum).toFixed(15);
division.innerText += x / s;
