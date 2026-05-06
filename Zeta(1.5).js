let s = 1.5;
let x = 27.57303032459745;
let correct = 0;
const Phi = (1 + Math.sqrt(5)) / 2;
let sum = 2.612375348685488;

correct = Phi;
correct = correct ** (1 / Math.PI);
correct = correct ** (1 / Phi);
correct = correct ** (x / Math.E);

name.innerText += `(${s})`;
sumDisplay.innerText += sum.toFixed(15);
myValue.innerText += correct.toFixed(15);
diff.innerText += (correct - sum).toFixed(15);
division.innerText += x * Math.pow(2, s);
AsDisplay.innerText += x;
