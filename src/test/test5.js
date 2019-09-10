import { assert, HappyTickets, Context } from './test.js';
mocha.setup('bdd');

describe('Happy Tickets', function () {
    it('Error. Not arguments! => new HappyTickets()', function () {
        assert.deepEqual(new HappyTickets(),  {status: "failed", reason: ["Arguments for tickets is Empty!"]});
    });
    it('Error. Not enough arguments! => new HappyTickets(new Context({}))', function () {
        assert.deepEqual(new HappyTickets(new Context({})),  {status: "failed", reason: ["Not enough arguments!"]});
    });
    it('Error. Incorrect arguments! => new HappyTickets(new Context({ min: "b", max: 123459 }))', function () {
        assert.deepEqual(new HappyTickets(new Context({ min: 'b', max: 123459 })),  {status: "failed", reason: ["Context hasn't right property min or max"]});
    });
    it('Error. Negative value in arguments! => new HappyTickets(new Context({ min: -1, max: 123459 }))', function () {
        assert.deepEqual(new HappyTickets(new Context({ min: -1, max: 123459 })),  {status: "failed", reason: ["Filds min or max cannot be negative value"]});
    });
    it('Error. Min > Max! => new HappyTickets(new Context({ min: 1515151, max: 123459 }))', function () {
        assert.deepEqual(new HappyTickets(new Context({ min: 1515151, max: 123459 })),  {status: "failed", reason: ["Value max need to be more that min"]});
    });
    it('Error. Max.lenght < 6! => new HappyTickets(new Context({ min: 1515, max: 12359 }))', function () {
        assert.deepEqual(new HappyTickets(new Context({ min: 1515, max: 12359 })),  {status: "failed", reason: ["Incomplete data!"]});
    });
    it('Error. Arguments is not Context => new HappyTickets("Sting")', function () {
        assert.deepEqual(new HappyTickets("Sting"),  {status: "failed", reason: ["Argument for HappyTickets should to be Context"]});
    });
    it('Success => new HappyTickets(new Context({ min: 1515, max: 122359 })).result', function () {
        assert.deepEqual(new HappyTickets(new Context({ min: 1515, max: 122359 })).result,  {winner: "Difficult method", ticketsCountBySimpleMethod: 5509, ticketsCountByDifficultMethod: 4415});
    });
});