import { HappyTickets } from './task5.js';

export const test5 = () => describe('Happy Tickets', function () {
  describe('Should return winner', function () {
    it('if min and max is transferred, "winner":"Difficult method" => new HappyTickets({ min: 1515, max: 122359 }).result', function () {
      chai.assert.equal(new HappyTickets({ min: 1515, max: 122359 }).result, '{"winner":"Difficult method","ticketsCountByDifficultMethod":6204,"ticketsCountBySimpleMethod":5509}');
    });
    it('if min or max is number casts to string, "winner":"Difficult method" => new HappyTickets({ min: "1515", max: "122359" }).result', function () {
      chai.assert.equal(new HappyTickets({ min: '1515', max: '122359' }).result, '{"winner":"Difficult method","ticketsCountByDifficultMethod":6204,"ticketsCountBySimpleMethod":5509}');
    });
    it('if max is five-digit number, "winner":"Simple method" => new HappyTickets({ min: 0, max: 40000 }).result', function () {
      chai.assert.equal(new HappyTickets({ min: 0, max: 40000 }).result, '{"winner":"Simple method","ticketsCountByDifficultMethod":2555,"ticketsCountBySimpleMethod":2600}');
    });
    it('if max is three-digit number, "winner":"Difficult method" => new HappyTickets({ min: 0, max: 101 }).result', function () {
      chai.assert.equal(new HappyTickets({ min: 0, max: 101 }).result, '{"winner":"Simple method","ticketsCountByDifficultMethod":10,"ticketsCountBySimpleMethod":11}');
    });
  });
  describe('Should return draw', function () {
    it('if simple metod value equals to difficult method value, "winner":"draw" => new HappyTickets({ min: 0, max: 400000 }).result', function () {
      chai.assert.equal(new HappyTickets({ min: 0, max: 400000 }).result, '{"winner":"draw","ticketsCountByDifficultMethod":21626,"ticketsCountBySimpleMethod":21626}');
    });
  });
  describe('Should return error', function () {
    it('if empty object is passed! => new HappyTickets({}).result', function () {
      chai.assert.deepEqual(new HappyTickets({}).result, { reason: ['Min isn\'t defined!', 'Max isn\'t defined!'] });
    });
    it('if arguments not passed!! => new HappyTickets().result', function () {
      chai.assert.deepEqual(new HappyTickets().result, { reason: ['Arguments not passed!'] });
    });
    it('if max is less than 10! => new HappyTickets({ min: 1, max: 9 }).result', function () {
      chai.assert.deepEqual(new HappyTickets({ min: 1, max: 9 }).result, { reason: ['Max can\'t be less than 10!'] });
    });
    it('if max or min is less than min or equal! => new HappyTickets({ min: 9999, max: 9998 }).result', function () {
      chai.assert.deepEqual(new HappyTickets({ min: 9999, max: 9998 }).result, { reason: ['Value max need to be more that min!'] });
    });
    it('if max or min value isn\'t valid format! => new HappyTickets({ min: "f", max: 9998 }).result', function () {
      chai.assert.deepEqual(new HappyTickets({ min: 'f', max: 9998 }).result, { reason: ['Min must be a number!'] });
    });
    it('if max or min value is negative value! => new HappyTickets({ min: -25, max: 9998 }).result', function () {
      chai.assert.deepEqual(new HappyTickets({ min: -25, max: 9998 }).result, { reason: ['Min can\'t be less than zero!'] });
    });
    it('if length max or min is more 7! => new HappyTickets(new Context({ min: 1515, max: 12235159 })).result', function () {
      chai.assert.deepEqual(new HappyTickets({ min: 1515, max: 12231359 }).result, { reason: ['Max is too big!'] });
    });
  });
});