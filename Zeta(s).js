let s = 15;
let Phi = (1 + Math.sqrt(5)) / 2;
let x = 5.2843817430975 * Math.pow(2, -(s - 3));
let sum = 0;

let correct = Phi;
correct = correct ** (1 / Math.PI);
correct = correct ** (1 / Phi);
correct = correct ** (x / Math.E);

for (let i = 1; i <= 10000; i++) {
  sum += 1 / i ** s;
}

console.log("Approximated Zeta:", correct);

name.innerText += `(${s})`;
sumDisplay.innerText += sum.toFixed(15);
myValue.innerText += correct.toFixed(15);
diff.innerText += Math.abs(correct - sum).toFixed(15);
