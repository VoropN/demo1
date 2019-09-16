import { board } from './task1.js';

export const test1 = () => describe('Chess Board', function () {
  describe('Should build the chess board: ', function () {
    it('if the following parameters are passed => board({ length: 10, width: 10, symbol: "#" })', function () {
      chai.assert.equal(board({length: 10, width: 10, symbol: '#'}), '# # # # # # # # # # \n # # # # # # # # # #\n# # # # # # # # # # \n # # # # # # # # # #\n# # # # # # # # # # \n # # # # # # # # # #\n# # # # # # # # # # \n # # # # # # # # # #\n# # # # # # # # # # \n # # # # # # # # # #\n');
    });
    it('if the first or the second argument is a number cast to a string => board({ length: "3", width: "6", symbol: "t" })', function () {
      chai.assert.equal(board({ length: '3', width: '6', symbol: 't' }), "t t t t t t \n t t t t t t\nt t t t t t \n");
    });
  });
  describe('Should return error: ', function () {
    it('if it doesn’t have enough number of arguments (fewer than three)! => board({ length: "3", width: "6" })', function () {
      chai.assert.deepEqual(board({ length: '3', width: '6' }), { reason: ['Symbol isn\'t defined!'] });
    });
    it('if one of the arguments isn’t defined! => board({ length: 10, width: "", symbol: "%" }', function () {
      chai.assert.deepEqual(board({ length: 10, width: '', symbol: '%' }), { reason: ['Width isn\'t defined!'] });
    });
    it('if one of the arguments isn’t defined! => board({ width: 10, symbol: "%" }', function () {
      chai.assert.deepEqual(board({ width: 10, symbol: '%' }), { reason: ['Length isn\'t defined!'] });
    });
    it('if one of the arguments isn’t valid! => board({ length: 10, width: "t", symbol: "%" }', function () {
      chai.assert.deepEqual(board({ length: 10, width: 't', symbol: '%' }), { reason: ['Width must be a number!'] });
    });
    it('if one or two of the arguments is zero! => board({ length: 0, width: 0, symbol: "$" })', function () {
      chai.assert.deepEqual(board({ length: 0, width: 0, symbol: '$' }), { reason: ["Length need to be more than zero!", "Width need to be more than zero!"] });
    });
    it('if symbol have more than one element! => board({ length: 5, width: 5, symbol: "$$" })', function () {
      chai.assert.deepEqual(board({ length: 5, width: 5, symbol: '$$' }), { reason: ['Length symbol should not be more than one!'] });
    });
    it('if the function is called without arguments! => board()', function () {
      chai.assert.deepEqual(board(), { reason: ['Arguments aren\'t value!'] });
    });
  });
});