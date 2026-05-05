let Phi = (1 + Math.sqrt(5)) / 2;
let x = 5.2843816 * Math.pow(2, -(s - 3)); // Experimental Scaling Factor

let correct = Phi;
correct = correct ** (1 / Math.PI);
correct = correct ** (1 / Phi);
correct = correct ** (x / Math.E);

console.log("Approximated Zeta:", correct);
