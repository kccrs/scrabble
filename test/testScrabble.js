const assert = require('chai').assert;
const scoreWords = require('../lib/scoreWords');

describe('The test bundle', function() {
  it('should be connected', function() {
    assert(true);
  });
});

describe('scoreWords()', function() {

  it('should be a function', function() {
    assert.isFunction(scoreWords);
  });

  xit('should take a word and return the total score of that word', function() {

  });

  xit('should return 8 as the score for the word "hello"', function() {

  });

  xit('should return 0 for an empty string, non-string, or null value', function() {

  });

  xit('should remove any whitespace before or after the word', function() {
    // scoreWorld(' hello ') should be the same as scoreWord('hello').
  });

  xit('should take an optional second argument for the word multiplier', function() {

  });

  xit('should return 16 if passed ("hello", 2) as both arguments', function() {

  });

});
