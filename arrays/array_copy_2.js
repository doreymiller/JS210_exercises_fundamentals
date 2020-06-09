var myArray = [1, 2, 3, 4];
var myOtherArray = new Array();

for (var i = 0; i < myArray.length; i++) {
  myOtherArray[i] = myArray[i];
}

//OR

myOtherArray = myArray.slice();

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);