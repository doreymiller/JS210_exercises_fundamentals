function penultimate(string) {
  var myArr = string.split(' ');
  return myArr[myArr.length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"