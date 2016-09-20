var _ = require('lodash');

module.exports = function(word) {

  const letterScores = {
    A: 1, B: 3, C: 3, D: 2,
    E: 1, F: 4, G: 2, H: 4,
    I: 1, J: 8, K: 5, L: 1,
    M: 3, N: 1, O: 1, P: 3,
    Q: 10, R: 1, S: 1, T: 1,
    U: 1, V: 4, W: 4, X: 8,
    Y: 4, Z: 10
  };

  var countWord = word.trim().toUpperCase().split('');

  // var scoreValues = _.pick(letterScores, countWord);
  //
  // var scoresMap = _.values(scoreValues);
  return countWord.reduce((totalScore, letter) => {
    return totalScore + (letterScores[letter] || 0);
    }, 0);

 };

  // scoreWord('hello') should return 8.

  // An empty string or any non-string (e.g. scoreWord('') or scoreWord(null)) should return 0.

  // Score word should take an optional second argument for the word multiplier. scoreWord('hello', 2) should return 16.
