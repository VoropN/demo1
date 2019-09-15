import { numericalSequence } from './task6.js';

export const test6 = () => describe('Numerical Sequence', function () {
  describe('Should return a string with number\'s range', function () {
    it('if length and minSqrt are passed! => numericalSequence({ length: 5, minSqrt: 25 })', function () {
      chai.assert.equal(numericalSequence({ length: 5, minSqrt: 25 }), '5, 6, 7, 8, 9');
    });
    it('if length is zero, result empty! => numericalSequence({ length: 0, minSqrt: 25 })', function () {
      chai.assert.empty(numericalSequence({ length: 0, minSqrt: 25 }));
    });
    it('if length or minSqrt is number casts to string! => numericalSequence({ length: 0, minSqrt: 25 })', function () {
      chai.assert.equal(numericalSequence({ length: '10', minSqrt: '100' }), '10, 11, 12, 13, 14, 15, 16, 17, 18, 19');
    });
  });
  describe('Should return error', function () {
    it('if length or minSqrt isn\'t defined! => numericalSequence({ length: "", minSqrt: 100 })', function () {
      chai.assert.deepEqual(numericalSequence({ length: "", minSqrt: 100 }), { reason: ['Length isn\'t defined!'] });
    });
    it('if length or minSqrt is missing! => numericalSequence({ minSqrt: 100 })', function () {
      chai.assert.deepEqual(numericalSequence({ minSqrt: 100 }), { reason: ['Length isn\'t defined!'] });
    });
    it('if an empty object is passed! => numericalSequence({})', function () {
      chai.assert.deepEqual(numericalSequence({}), { reason: ['Length isn\'t defined!', 'MinSqrt isn\'t defined!'] });
    });
    it('if arguments not passed! => numericalSequence()', function () {
      chai.assert.deepEqual(numericalSequence(), { reason: ['Arguments not passed!'] });
    });
    it('if one of arguments isn\'t correct! => numericalSequence({ length: 10, minSqrt: "d" })', function () {
      chai.assert.deepEqual(numericalSequence({ length: 10, minSqrt: 'd' }), { reason: ['MinSqrt should be a number!'] });
    });
    it('if one of arguments is negative value! => numericalSequence({ length: -10, minSqrt: 100 })', function () {
      chai.assert.deepEqual(numericalSequence({ length: -10, minSqrt: 100 }), { reason: ['Length can\'t be less than zero!'] });
    });
    it('if one of arguments is too big value! => numericalSequence({ length: 10, minSqrt: 10000000 })', function () {
      chai.assert.deepEqual(numericalSequence({ length: 10, minSqrt: 10000000 }), { reason: ['MinSqrt is too big!'] });
    });
    it('if one of arguments isn\'t integer! => numericalSequence({ length: 1.1, minSqrt: 1000 })', function () {
      chai.assert.deepEqual(numericalSequence({ length: 1.1, minSqrt: 1000 }), { reason: ['Length should be integer!'] });
    });
  });
});