let sum = 0;
let correct = 0;
const Phi = (1 + Math.sqrt(5)) / 2;
let s = 45;
let x = 28.18 * Math.pow(2, -s) * ((s - 1) / s);

for (let i = 1; i <= 10 ** 6; i++) {
  sum += 1 / i ** s;
  correct = Phi;
  correct = correct ** (1 / Math.PI);
  correct = correct ** (1 / Phi);
  correct = correct ** (x / Math.E);
}

console.log(`Zeta(${s})`);
console.log(`Actual : ${sum}`);
console.log(`Akinda's Approximation: ${correct}`);
