const Phi = (1 + Math.sqrt(5)) / 2;
let s = 10;
let x = 0.00087830124524 * Math.pow(2, 15 - s);
let sum = 0;
let correct = 0;

for (let i = 1; i <= 10 ** 6; i++) {
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
division.innerText += x * Math.pow(2, s);
AsDisplay.innerText += x;
