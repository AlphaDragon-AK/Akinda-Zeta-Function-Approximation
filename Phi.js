let answer = 0;
let answer2 = 0;
let answer3 = 0;
let f = 1;
let s = 1;
const Phi = (1 + Math.sqrt(5)) / 2;

for (let n = 1; n <= 1475; n = n + 1) {
  answer = f + s;
  f = answer;
  s = f - s;
  answer2 = f / s;

  console.log(`${n} -> ${answer} -> ${answer2}`);
}
