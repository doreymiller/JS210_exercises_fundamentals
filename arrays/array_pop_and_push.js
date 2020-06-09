function pop(arr) {
  var elem;

  if (arr.length === 0) {
    return undefined;
  }

  elem = arr[arr.length - 1];
  arr.length -= 1;

  return elem;
}

function push(arr) {
  var i;

  for (i = 1; i < arguments.length; i++) {
    arr[arr.length] = arguments[i];
  }

  return arr.length;
}


// pop
var array = [1, 2, 3];
pop(array);                        // 3
console.log(array);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// push
var array = [1, 2, 3];
push(array, 4, 5, 6);              // 6
console.log(array);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
push([], 1);                       // 1
push([]);                          // 0