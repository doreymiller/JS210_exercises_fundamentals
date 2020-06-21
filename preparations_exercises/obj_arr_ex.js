let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let resultArr = Object.keys(obj).map(function (key) {
  return key.toUpperCase();
});

console.log(resultArr);

