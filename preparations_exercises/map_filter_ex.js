let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  let returnArr = arr.map(function (str) {
    return str.length;
  }).filter(function (strLength) {
    return strLength % 2 === 1;
  });

  return returnArr;
}
console.log(oddLengths(arr)); // => [1, 5, 3]

arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengthsFilt(arr) {
  return arr.reduce((accumulator, str) => {
    if (str.length % 2 === 1) {
      accumulator.push(str.length);
    }
    return accumulator;
  }, []);
}

console.log(oddLengthsFilt(arr)); // => [1, 5, 3]

