import { fibonacci } from './task7.js';

export const test7 = () => describe('Fibonacci', function () {
  describe('Should return array of numbers', function () {
    it(`if length is indicated! => fibonacci({ length: 5 })`, function () {
      chai.assert.deepEqual(fibonacci({ length: 5 }), '[0,1,1,2,3]');
    });
    it(`if length is number casts to string! => fibonacci({ length: "5" })`, function () {
      chai.assert.deepEqual(fibonacci({ length: '5' }), '[0,1,1,2,3]');
    });
    it(`if length is zero! => fibonacci({ length: 0 })`, function () {
      chai.assert.deepEqual(fibonacci({ length: 0 }), '[]');
    });
    it(`if length, min and max are indicated then length will only be taken => fibonacci({ length: 10, min: 11, max: 13 })`, function () {
      chai.assert.deepEqual(fibonacci({ length: 10, min: 11, max: 13 }), '[0,1,1,2,3,5,8,13,21,34]');
    });
    it(`if min and max are indicated! => fibonacci({ min: 0, max: 13 })`, function () {
      chai.assert.deepEqual(fibonacci({ min: 0, max: 13 }), '[0,1,1,2,3,5,8,13,21,34,55,89,144]');
    });
    it(`if min and max are arbitrary values! => fibonacci({ min: 12, max: 13 })`, function () {
      chai.assert.deepEqual(fibonacci({ min: 12, max: 13 }), '[144]');
    });
    it(`if min: 0, max: 0! => fibonacci({ min: 0, max: 0 })`, function () {
      chai.assert.deepEqual(fibonacci({ min: 0, max: 0 }), '[]');
    });
    it(`if min: 0, max: 1! => fibonacci({ min: 0, max: 1 })`, function () {
      chai.assert.deepEqual(fibonacci({ min: 0, max: 1 }), '[0]');
    });
  });
  describe('Should return error', function () {
    it(`if length isn't number! => fibonacci({ length: "10e" }))`, function () {
      chai.assert.deepEqual(fibonacci({ length: '10e' }), { reason: ['Length must be a number!'] });
    });
    it(`if length is negative value! => fibonacci({ length: -10 })`, function () {
      chai.assert.deepEqual(fibonacci({ length: -10 }), { reason: ['Length can\'t be less than zero!'] });
    });
    it(`if length isn't integer! => fibonacci({ length: 10.2 })`, function () {
      chai.assert.deepEqual(fibonacci({ length: 10.2 }), { reason: ['Length should be integer!'] });
    });
    it(`if length empty string! => fibonacci({ length: "" })`, function () {
      chai.assert.deepEqual(fibonacci({ length: '' }), { reason: ['Arguments aren\'t value!'] });
    });
    it(`if length more 100! => fibonacci({ length: 101 })`, function () {
      chai.assert.deepEqual(fibonacci({ length: 101 }), { reason: ['Length is too big!'] });
    });
    it(`if min and max are empty strings! => fibonacci({ min: "", max: "" })`, function () {
      chai.assert.deepEqual(fibonacci({ min: '', max: '' }), { reason: ['Arguments aren\'t value!'] });
    });
    it(`if min or max isn't defined! => fibonacci({ min: '', max: 10 })`, function () {
      chai.assert.deepEqual(fibonacci({ min: '', max: 10 }), { reason: ['Min isn\'t defined!'] });
    });
    it(`if min or max isn't number! => fibonacci({ min: 'b', max: 10 })`, function () {
      chai.assert.deepEqual(fibonacci({ min: 'b', max: 10 }), { reason: ['Min must be a number!'] });
    });
    it(`if min or max is negative value! => fibonacci({ min: -10, max: 10 })`, function () {
      chai.assert.deepEqual(fibonacci({ min: -10, max: 10 }), { reason: ['Min can\'t be less than zero!'] });
    });
    it(`if min or max isn't integer! => fibonacci({ min: 5.4, max: 10 })`, function () {
      chai.assert.deepEqual(fibonacci({ min: 5.4, max: 10 }), { reason: ['Min should be integer!'] });
    });
    it(`if min is equal or more max! => fibonacci({ min: 10, max: 10 })`, function () {
      chai.assert.deepEqual(fibonacci({ min: 10, max: 10 }), { reason: ['Value max need to be more that min!'] });
    });
    it('if an empty object is passed! => fibonacci({})', function () {
      chai.assert.deepEqual(fibonacci({}), { reason: ['Arguments aren\'t value!'] });
    });
    it('if function called without arguments! => fibonacci()', function () {
      chai.assert.deepEqual(fibonacci(), { reason: ['Arguments aren\'t value!'] });
    });
  });
});