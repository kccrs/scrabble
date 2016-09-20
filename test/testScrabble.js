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

  it('should return 0 for an empty string, non-string, or null value', function() {
    var nullWord = null;
    var emptyWord = '';
    var nonStringWord = 1234;
    assert.equal(scoreWords(nullWord), 0);
    assert.equal(scoreWords(emptyWord), 0);
    assert.equal(scoreWords(nonStringWord), 0);
  });

  it('should remove any whitespace before or after the word', function() {
    var hello = 'hello';
    var spaceHello = ' hello ';
    assert.equal(scoreWords(hello), scoreWords(spaceHello));
  });

  it('should take an optional second argument for the word multiplier and return 16 if passed ("hello", 2) as both arguments', function() {
    var hello = 'hello';
    assert.equal(scoreWords(hello, 2), 16);
  });
});
