let rlSync = require('readline-sync');

function readFirstName() {
  return rlSync.question('What is your first name?\n');
}

function readLastName() {
  return rlSync.question('What is your last name?\n');
}

let personName = `${readFirstName()} ${readLastName()}`;

console.log(`Good Morning, ${personName}!`);
console.log(`Good evening, ${personName}!`);