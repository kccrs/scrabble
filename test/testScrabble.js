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

  it('should take a word and return the total score of that word', function() {
    var word = "a";
    assert.equal(scoreWords(word), 1);
  });

  it('should return 8 as the score for the word "hello"', function() {
    var newWord = 'hello';
    assert.equal(scoreWords(newWord), 8);
  });

  xit('should return 0 for an empty string, non-string, or null value', function() {

  });

  it('should remove any whitespace before or after the word', function() {
    var hello = 'hello';
    var spaceHello = ' hello ';
    assert.equal(scoreWords(hello), scoreWords(spaceHello));
  });

  xit('should take an optional second argument for the word multiplier', function() {

  });

  xit('should return 16 if passed ("hello", 2) as both arguments', function() {

  });
});
