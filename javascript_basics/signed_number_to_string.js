var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(int) {
  var returnStr = "";
  var power = 0;

  if (int === 0) {
    returnStr = "0";
  }

  while (int > 0) {
    var digitVal = int % 10;
    returnStr = DIGITS[digitVal] + returnStr;
    int = Math.floor(int / 10);
  }

  return returnStr;

}

function signedIntegerToString(int) {
  var prefix = "";

  if (int > 0) {
    prefix = "+";
  } else if (int < 0) {
    prefix = "-";
  }

  return prefix + integerToString(Math.abs(int));
}


console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"