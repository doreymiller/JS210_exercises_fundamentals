 function concat(array1, secondArgument) {
  var newArr = array1.slice();
  var i;
  
  if (Array.isArray(secondArgument)) {
    for (i = 0; i < secondArgument.length; i++) {
      newArr.push(secondArgument[i]);
    }
  } else {
    newArr.push(secondArgument);
  }

  return newArr;

 }

console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3));                     // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four'));                // [2, 3, "four"]