function reverse(inputForReversal) {
  var returnVal;
  var i;

  if (Array.isArray(inputForReversal)) {
    returnVal = new Array();
  } else if (typeof(inputForReversal) === "string") {
    returnVal = '';
  } 

  for (i = inputForReversal.length - 1; i >= 0; i--) {
    returnVal = returnVal.concat(inputForReversal[i]);
  }

  return returnVal;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

var array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]