import { assert, chessBoard } from './test.js';
mocha.setup('bdd');

describe('chessBoard', function () {
    it('chessBoard(10, 10, "#")', function () {
        assert.equal(chessBoard(10, 10, '#'), '# # # # # # # # # # \n # # # # # # # # # #\n# # # # # # # # # # \n # # # # # # # # # #\n# # # # # # # # # # \n # # # # # # # # # #\n# # # # # # # # # # \n # # # # # # # # # #\n# # # # # # # # # # \n # # # # # # # # # #\n');
    });
    it("Second value is string! => chessBoard(3, '6', '\rt')", function () {
        assert.equal(chessBoard(3, '6', '\rt'), "\rt \rt \rt \rt \rt \rt \n \rt \rt \rt \rt \rt \rt\n\rt \rt \rt \rt \rt \rt \n");
    });
    it('Error. Not enough arguments! => chessBoard(10, -10)', function () {
        assert.deepEqual(chessBoard(10, -10),  { status: "failed", reason: ["width cannot be less than zero!", "symbol not defined!"]});
    });
    it('Error. Not valid arguments! => chessBoard(10, "", "%")', function () {
        assert.deepEqual(chessBoard(10, '',"%"),  { status: "failed", reason: ["width must be a number!"]});
    });
    it('Empty! => chessBoard(0, 0, "#")', function () {
        assert.empty(chessBoard(0, 0, '#'));
    });
});