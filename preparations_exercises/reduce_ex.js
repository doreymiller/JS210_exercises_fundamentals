let numbers = [3, 5, 7];

function sumOfSquares(arr) {
  let sum = arr.reduce((accumulator, element) => {
    return accumulator += element * element;
  }, 0);
  return sum;
}

console.log(sumOfSquares(numbers)); // => 83