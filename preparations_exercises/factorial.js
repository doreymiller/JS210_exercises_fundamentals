function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

let oneFactorial = times(1, 1);
let twoFactorial = times(2, oneFactorial);
let threeFactorial = times(3, twoFactorial);