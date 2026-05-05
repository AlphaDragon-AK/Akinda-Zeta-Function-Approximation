let sum = 0;
let correct = 0;
const Phi = (1 + Math.sqrt(5)) / 2;

for (let i = 1; i <= 10000; i++) {
  sum += 1 / i ** 100;
  correct = Phi;
  correct = correct ** (1 / Math.PI);
  correct = correct ** (1 / Phi);
  correct = correct ** (5.2843816 / Math.pow(2, 97) / Math.E);
  console.log(`${i} -> ${sum} -> ${correct}`);
}
