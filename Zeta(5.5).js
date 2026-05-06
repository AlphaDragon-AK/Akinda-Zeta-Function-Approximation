const Phi = (1 + Math.sqrt(5)) / 2;
let s = 5.5;
let x = 0.714757443577792;
let sum = 0;
let correct = 0;

for (let i = 1; i <= 10 ** 6; i++) {
  sum += 1 / i ** s;
}
correct = Phi;
correct = correct ** (1 / Math.PI);
correct = correct ** (1 / Phi);
correct = correct ** (x / Math.E);

name.innerText += `(${s})`;
sumDisplay.innerText += sum.toFixed(16);
myValue.innerText += correct.toFixed(16);
diff.innerText += (correct - sum).toFixed(16);
division.innerText += x / s;
AsDisplay.innerText += x;
