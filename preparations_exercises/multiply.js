function multiply(num1, num2) {
  return num1 * num2;
}

let rlSync = require('readline-sync');
let firstNum = rlSync.question('Enter the first number:\n');
let secondNum = rlSync.question('Enter the second number:\n');

console.log(multiply(Number(firstNum), Number(secondNum)));