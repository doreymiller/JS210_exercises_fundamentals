let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(wordsArr, pattern) {
  return wordsArr.filter(word => pattern.test(word));
}

console.log(allMatches(words, /lab/)); // ['laboratory', 'flab', 'elaborate']