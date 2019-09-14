import { numericalSequence } from './task6.js';

export const test6 = () => describe('numericalSequence', function () {
  it('Success => numericalSequence(10, 5)', function () {
    chai.assert.equal(numericalSequence(10, 5), '3,4,5,6,7,8,9,10,11,12');
  });
  it('Success => numericalSequence(5, 0)', function () {
    chai.assert.equal(numericalSequence(5, 0), '0,1,2,3,4');
  });
  it('Success => numericalSequence(5, 1)', function () {
    chai.assert.equal(numericalSequence(5, 1), '1,2,3,4,5');
  });
  it('Success => numericalSequence(5, 0)', function () {
    chai.assert.equal(numericalSequence(5, 0), '0,1,2,3,4');
  });
  it('Error. Negative value minSqrt => numericalSequence(5, -5)', function () {
    chai.assert.deepEqual(numericalSequence(5, -5), {status: "failed", reason: ["minSqrt should be more than zero"]});
  });
  it('Error. Negative value length => numericalSequence(-1, 2)', function () {
    chai.assert.deepEqual(numericalSequence(-1, 2), {status: "failed", reason: ["length should be more than zero"]});
  });
  it('Error. Length too big! => numericalSequence(101, 2)', function () {
    chai.assert.deepEqual(numericalSequence(101, 2), {status: "failed", reason: ["length should be less than 100"]});
  });
  it('Error. Incorrect value length => numericalSequence("b", 2)', function () {
    chai.assert.deepEqual(numericalSequence('b', 2), {status: "failed", reason: ["length should be number"]});
  });
  it(`Error. Incorrect value length isn't integer! => numericalSequence(1.1, 2)`, function () {
    chai.assert.deepEqual(numericalSequence(1.1, 2), {status: "failed", reason: ["length should be integer"]});
  });
  it(`Error. Incorrect value minSqrt => numericalSequence(2, '')`, function () {
    chai.assert.deepEqual(numericalSequence(2, ''), {status: "failed", reason: ["minSqrt should be number"]});
  });
  it(`Error. Missing arguments! => numericalSequence()`, function () {
    chai.assert.deepEqual(numericalSequence(), {status: "failed", reason: ["length can't be undefined or null", "minSqrt can't be undefined or null"]});
  });
  it('Empty! => numericalSequence(0, 2)', function () {
    chai.assert.empty(numericalSequence(0, 2));
  });
});