import { palindrome } from './task4.js';

export const test4 = () => describe('palindrome', function () {
  it('Success => palindrome(2135225312465234215)', function () {
    chai.assert.equal(palindrome(2135225312465234215), '2135225312');
  });
  it('Success => palindrome( 122100000098 )', function () {
    chai.assert.equal(palindrome( 122100000098 ), '000000');
  });
  it(`Error => palindrome('21355310987652345679')`, function () {
    chai.assert.deepEqual(palindrome('21355310987652345679'), {status: "failed", reason: ["Incorrect format! Input value should be Number"]});
  });
  it('Error => palindrome(22333333223222222222222)', function () {
    chai.assert.deepEqual(palindrome(22333333223222222222222), {status: "failed", reason: ["Too big number!"]});
  });
  it('Error => palindrome(0)', function () {
    chai.assert.deepEqual(palindrome(0), {status: "failed", reason: ["Number is less 10!"]});
  });
  it('Error => palindrome()', function () {
    chai.assert.deepEqual(palindrome(), {status: "failed", reason: ["Not enough arguments!"]});
  });
});