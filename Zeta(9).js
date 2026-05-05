let sum = 0;
let correct = 0;
const Phi = (1 + Math.sqrt(5)) / 2;

for (let i = 1; i <= 10000; i++) {
  sum += 1 / i ** 9;
  correct = Phi;
  correct = correct ** (1 / Math.PI);
  correct = correct ** (1 / Phi);
  correct = correct ** (0.0575 / Math.E);
  console.log(`${i} -> ${sum} -> ${correct}`);
}
