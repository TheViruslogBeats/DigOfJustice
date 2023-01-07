let kek = 2149583361;
let kek1 = 32;

console.log();

const kek2 = (a) => {
  let result = a.toString(2).split("");
  while (result.length < 32) {
    result.unshift("0");
  }
  let temp = "";
  let kek = [];
  for (let i = 0; i < result.length; i++) {
    temp += result[i];
    if (temp.length == 8) {
      kek.push(temp);
      temp = "";
    }
  }
  return kek.map((a) => parseInt(a, 2)).join(".");
};

console.log(kek2(kek));
console.log(kek2(kek1));
