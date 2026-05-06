let s = 2;
let x = 14.29101510036302;
let sum = 0;
let correct = 0;
const Phi = (1 + Math.sqrt(5)) / 2;

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
