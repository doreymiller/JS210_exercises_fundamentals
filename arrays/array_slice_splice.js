
//input: array, start index, end index
//output: new array with extracted elements
//algorithm: 
  //create new return array
  //iterate through input array from begin to less than end
  //set new array element to input array element value
  //return new array
function slice(array, begin, end) {
  var i;
  var returnArr = new Array();

  if (begin > array.length) {
    begin = array.length;
  }

  if (end > array.length) {
    end = array.length;
  }

  for (i = begin; i < end; i++) {
    returnArr.push(array[i]);
  }

  return returnArr;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

var arr = [1, 2, 3];
console.log(slice(arr, 1, 3));                     // [2, 3]
console.log(arr);                                  // [1, 2, 3]

//input: array, start index, deleteCount, elements to add (optional)
//output: returns a new array containing the deleted elements (mutates original) or empty array
//algorithm:
  //if start > array.length, set start to array.length
  //if deleteCount > array.length - start, deleteCount = array.length - start
  //put input elements to add into array numElemToAdd
  //slice input array from start to start + deleteCount and store in resultArr
  //reverse iterate through input array from array.length + numElemToAdd to start
  //array[i] = array[i - numElemToAdd]
  //then iterate through numElemToAdd and set array[start + i] to numElemToAdd[i];
  //return resultArr 
function splice(array, start, deleteCount, element1, elementN) {
  var resultArr;
  var beginningArr; 
  var endingArray;
  var tempArr;
  var elemToAdd = slice(arguments, 3, arguments.length);
  var i;

  if (start > array.length) {
    start = array.length;
  }

  if (deleteCount > array.length - start) {
    deleteCount = array.length - start;
  }

  resultArr = slice(array, start, start + deleteCount);
  beginningArr = slice(array, 0, start);
  endingArr = slice(array, start + deleteCount, array.length);
  tempArr = (beginningArr.concat(elemToAdd)).concat(endingArr);

  for (i = 0; i < tempArr.length; i++) {
    array[i] = tempArr[i];
  }

  array.length = tempArr.length;

  return resultArr;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

var arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));              // [2]
console.log(arr);                                    // [1, "two", 3]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr);                                  // [1, "two", "three"]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 0));                    // []
console.log(splice(arr, 1, 0, 'a'));               // []
console.log(arr);                                  // [1, "a", 2, 3]

var arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a'));               // []
console.log(arr);           