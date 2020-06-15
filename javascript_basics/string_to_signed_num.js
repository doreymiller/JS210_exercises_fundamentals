function stringToSignedInteger(str) {
  var returnInt = 0;
  var digit;
  var power = 0;
  var multiplier = 1;

  if (str[0] === "-") {
    multiplier = -1;
  }

  str = ["+", "-"].includes(str[0]) ? str.slice(1) : str;

  for (digit = str.length - 1; digit >= 0; digit -= 1) {
    returnInt += Number(str[digit]) * Math.pow(10, power);
    power += 1;
  }

  return returnInt * multiplier;
}


console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100