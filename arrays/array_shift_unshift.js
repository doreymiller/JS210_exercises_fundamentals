function shift(arr) {
  var returnElement;
  var i;

  if (arr.length === 0) {
    return undefined;
  } else {
    returnElement = arr[0];
  }

  for (i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length -= 1;

  return returnElement;
}

function unshift(arr) {
  var i;
  var numElemToAdd = arguments.length - 1;
  var newLength = arr.length + numElemToAdd;

  if (newLength === arr.length) {
    return arr.length;
  }
  
  for (i = newLength - 1; i >= 0; i--) {
    arr[i] = arr[i - numElemToAdd];
    if (i < numElemToAdd) {
      arr[i] = arguments[i + 1];;
    }
  }
  
  return arr.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

var testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
