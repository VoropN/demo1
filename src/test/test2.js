import { assert, Packager, Envelope } from './test.js';
mocha.setup('bdd');

describe('Envelope', function () {
    it(`new Packager([ new Envelope({width: 9, height: 5}),
        new Envelope({width: 9.499, height: 1}) ]).strategy.result`, function () {
        assert.equal(new Packager([
            new Envelope({ width: 9, height: 5 }),
            new Envelope({ width: 9.499, height: 1 }),
        ]).strategy.result, 0);
    });
    it(`new Packager([ new Envelope({width: 5, height: 9}),
        new Envelope({width: 9.498, height: 1}) ]).strategy.result`, function () {
        assert.equal(new Packager([
            new Envelope({ width: 5, height: 9 }),
            new Envelope({ width: 9.498, height: 1 }),
        ]).strategy.result, 'Envelope4');
    });
    it(`Error. Width is string! => new Packager([ new Envelope({width: 'f', height: 5}),
        new Envelope({width: 8.99, height: 4}) ])`, function () {
        assert.deepEqual(new Packager([
            new Envelope({ width: 'f', height: 5 }),
            new Envelope({ width: 8.99, height: 4 }),
        ]),  [{status: "failed", reason: ["width must be a number!"]}, {width: 8.99, height: 4, name: "Envelope5"}]);
    });
    it(`Error. Width is 0 => new Packager([ new Envelope({ width: 0, height: 5 }),
        new Envelope({width: 8.99, height: 4}) ])`, function () {
        assert.deepEqual(new Packager([
            new Envelope({ width: 0, height: 5 }),
            new Envelope({ width: 8.99, height: 4 }),
        ]),  [{reason: ["width cannot be zero or less!"], status: "failed"}, {width: 8.99, height: 4, name: "Envelope6"}]);
    });
    it(`Error. Not all arguments passed => new Packager([ new Envelope(), new Envelope({width: 8.99, height: 4}) ])`, function () {
        assert.deepEqual(new Packager([
            new Envelope(),
            new Envelope({ width: 8.99, height: 4 }),
        ]),  [{reason: ["argsuments not defined!", "width not defined!", "height not defined!"],
                status: "failed"}, {width: 8.99, height: 4, name: "Envelope7"}]);
    });
    it(`Error. One argument passed => new Packager([ new Envelope({width: 8.99, height: 4}) ])`, function () {
        assert.deepEqual(new Packager([new Envelope({ width: 8.99, height: 4 }),
        ]),  {reason: ["Not enough arguments for Packager!"], status: "failed"});
    });
    it(`Error. No arguments filed! => new Packager()`, function () {
        assert.deepEqual(new Packager(),  {reason: ["Not enough arguments for Packager!"], status: "failed"});
    });
});