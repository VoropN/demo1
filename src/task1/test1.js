import { board } from './task1.js';

export const test1 = () => describe('boad', function () {
  describe('Error', function () {
    it('Error. Not enough arguments! => boad(10, -10)', function () {
      chai.assert.deepEqual(boad(10, -10), { status: "failed", reason: ["width cannot be less than zero!", "symbol not defined!"] });
    });
    it('Error. Not valid arguments! => boad(10, "", "%")', function () {
      chai.assert.deepEqual(boad(10, '', "%"), { status: "failed", reason: ["width must be a number!"] });
    });
    it('Empty! => boad(0, 0, "#")', function () {
      chai.assert.empty(boad(0, 0, '#'));
    });
  });
  describe('Success', function () {
    it('boad(10, 10, "#")', function () {
      chai.assert.equal(boad(10, 10, '#'), '# # # # # # # # # # \n # # # # # # # # # #\n# # # # # # # # # # \n # # # # # # # # # #\n# # # # # # # # # # \n # # # # # # # # # #\n# # # # # # # # # # \n # # # # # # # # # #\n# # # # # # # # # # \n # # # # # # # # # #\n');
    });
    it("Second value is string! => boad(3, '6', '\rt')", function () {
      chai.assert.equal(boad(3, '6', '\rt'), "\rt \rt \rt \rt \rt \rt \n \rt \rt \rt \rt \rt \rt\n\rt \rt \rt \rt \rt \rt \n");
    });
  });
});  