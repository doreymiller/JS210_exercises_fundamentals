let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let newArray = removeNonInteger(array);

function removeNonInteger(arr) {
  return arr.filter(element => Number.isInteger(element));
}

console.log(newArray); // => [1, 3, -4]