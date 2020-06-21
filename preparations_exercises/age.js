let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you?\n'));
let ageIncrement = 10;

for (let i = 1; i < 5; i += 1) {
  console.log(`In ${ageIncrement * i} years you will be ${age + (ageIncrement * i)} years old.`);
}