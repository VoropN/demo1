import { Packager } from './task2.js';

export const test2 = () => describe('Envelopes', function () {
  describe('Should be completed successfully:', function () {
    it('with the result: 0 => new Packager({ width: 9, height: 5}, { width: 9.499, height: 1 }).strategy', function () {
      chai.assert.equal(new Packager({ width: 9, height: 5}, { width: 9.499, height: 1 }).strategy, '{"canPut":false,"message":"impossible to put","result":0}');
    });
    it('with the result: Envelope2 => new Packager({ width: 9, height: 5 }, { width: 9.498, height: 1 }).strategy', function () {
      chai.assert.equal(new Packager({ width: 9, height: 5 }, { width: 9.498, height: 1 }).strategy, '{"canPut":true,"message":"put big side in diagonal!","inside":{"width":9.498,"height":1,"name":"Envelope2"},"outside":{"width":9,"height":5,"name":"Envelope1"},"result":"Envelope2"}');
    });
    it('with the result: Envelope2 => new Packager({ width: 5, height: 9 }, { width: 9.498, height: 1}).strategy', function () {
      chai.assert.equal(new Packager({ width: 9, height: 5 }, { width: 9.498, height: 1 }).strategy, '{"canPut":true,"message":"put big side in diagonal!","inside":{"width":9.498,"height":1,"name":"Envelope2"},"outside":{"width":9,"height":5,"name":"Envelope1"},"result":"Envelope2"}');
    });
    it('if the some arguments are numbers cast to strings. With the result: Envelope1 => new Packager({width: "4", height: "9"}, {width: "5", height: "9.498"}).strategy', function () {
      chai.assert.equal(new Packager({ width: "4", height: "9" }, { width: "5", height: "9.498" }).strategy, '{"canPut":true,"message":"put big side in parallel!","inside":{"width":4,"height":9,"name":"Envelope1"},"outside":{"width":5,"height":9.498,"name":"Envelope2"},"result":"Envelope1"}');
    });
  });
  describe('Should return error: ', function () {
    it('if the some arguments are not numbers => new Packager({ width: "t", height: 9 }, { width: 5, height: 9.498 }).strategy', function () {
      chai.assert.deepEqual(new Packager({ width: 't', height: 9 }, { width: 5, height: 9.498 }).strategy, [{ reason: ['Width Envelope1 must be a number!'] }]);
    });
    it('if the some arguments are not defined => new Packager({ width: "", height: 9}, { width: 5, height: 9.498 }).strategy', function () {
      chai.assert.deepEqual(new Packager({ width: '', height: 9 }, { width: 5, height: 9.498 }).strategy, [{ reason: ['Width Envelope1 is not defined!'] }]);
    });
    it('if some arguments are missing => new Packager({ width: 10, height: 9}, { height: 9.498 }).strategy', function () {
      chai.assert.deepEqual(new Packager({ width: 10, height: 9 }, { height: 9.498 }).strategy, [{ reason: ['Width Envelope2 is not defined!'] }]);
    });
    it('if no arguments passed => new Packager({}).strategy', function () {
      chai.assert.deepEqual(new Packager({}).strategy, [{ reason: ['Not enough envelopes!'] }]);
    });
    it('if no arguments passed => new Packager().strategy', function () {
      chai.assert.deepEqual(new Packager().strategy, [{ reason: ['Not enough envelopes!'] }]);
    });
    it('if one ore more filds equal zero => new Packager({ width: 0, height: 9 }, { width: 9.498, height: 1}).strategy', function () {
      chai.assert.deepEqual(new Packager({ width: 0, height: 9 }, { width: 9.498, height: 1 }).strategy, [{ reason: ['Width Envelope1 need to be more than zero!'] }]);
    });
  });
});