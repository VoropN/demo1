import { palindrome } from './task4.js';

export const test4 = () => describe('Palindrome', function () {
  describe('Should return the longest palindrome', function () {
    it('if argument type is string, result: "9875115789" => palindrome({ number: "213522531312141419875115789" })', function () {
      chai.assert.equal(palindrome({ number: '213522531312141419875115789' }), '9875115789');
    });
    it('if argument type is number, result: 000000 => palindrome({ number: 122100000098 })', function () {
      chai.assert.equal(palindrome({ number: 122100000098 }), '000000');
    });
  });
  describe('Should return 0', function () {
    it(`if palindrome is not found => palindrome({ number: '213457310987652345679' })`, function () {
      chai.assert.deepEqual(palindrome({ number: '213457310987652345679' }), 0);
    });
  });
  describe('Should return error', function () {
    it(`if the argument passed is of type "number" and it may be rounding => palindrome({ number: 2134573209876523 })`, function () {
      chai.assert.deepEqual(palindrome({ number: 2134573209876523 }), { reason: ['Value is too big!'] });
    });
    it(`if the value ​​can not be cast to a number => palindrome({ number: {} })`, function () {
      chai.assert.deepEqual(palindrome({ number: {} }), { reason: ['Invalid value format!'] });
    });
    it(`if the argument is missing => palindrome({})`, function () {
      chai.assert.deepEqual(palindrome({}), { reason: ['Value is not entered!'] });
    });
    it(`if there are no parameters => palindrome()`, function () {
      chai.assert.deepEqual(palindrome(), { reason: ['Value is not entered!'] });
    });
  });
});