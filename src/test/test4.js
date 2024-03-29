import { assert, palindrome } from './test.js';
mocha.setup('bdd');

describe('palindrome', function () {
    it('Success => palindrome(2135225312465234215)', function () {
        assert.equal(palindrome(2135225312465234215), '2135225312');
    });
    it('Success => palindrome( 122100000098 )', function () {
        assert.equal(palindrome( 122100000098 ), '000000');
    });
    it(`Error => palindrome('21355310987652345679')`, function () {
        assert.deepEqual(palindrome('21355310987652345679'), {status: "failed", reason: ["Incorrect format! Input value should be Number"]});
    });
    it('Error => palindrome(22333333223222222222222)', function () {
        assert.deepEqual(palindrome(22333333223222222222222), {status: "failed", reason: ["Too big number!"]});
    });
    it('Error => palindrome(0)', function () {
        assert.deepEqual(palindrome(0), {status: "failed", reason: ["Number is less 10!"]});
    });
    it('Error => palindrome()', function () {
        assert.deepEqual(palindrome(), {status: "failed", reason: ["Not enough arguments!"]});
    });
});