function stringToInteger(str) {
  var returnInt = 0;
  var digit;
  var power = 0;

  for (digit = str.length - 1; digit >= 0; digit -= 1) {
    returnInt += Number(str[digit]) * Math.pow(10, power);
    power += 1;
  }

  return returnInt;
}


console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570