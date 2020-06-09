 function concat() {
  var newArr = new Array();
  var arg;
  var i;
  var currentArg;
  
  for (arg = 0; arg < arguments.length; arg++) {
    currentArg = arguments[arg];
    if (Array.isArray(currentArg)) {
      for (i = 0; i < currentArg.length; i++) {
        newArr.push(currentArg[i]);
      } 
    } else {
      newArr.push(currentArg);
    }
  }

  return newArr;
 }

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]