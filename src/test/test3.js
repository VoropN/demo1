import { assert, Triangle, sortTriangle } from './test.js';
mocha.setup('bdd');

describe('sortTriangle', function () {
    it(`Error => sortTriangle([
        new Triangle({vertices: 'VDK', v: 5.5, d: 4, k: 7.3}),
        new Triangle({vertices: 'HGB', h: 5, g: 4.3, b: 8}),
        new Triangle({ e: 5, m: 6, d: 7}),
        new Triangle({vertices: 'CS', c: 9.2, e: 5, s: 7}),
        new Triangle({vertices: 'ABC', a: 3.1, b: '', c: 2}),
        new Triangle({vertices: 'DCK', d: 6.5, c: 4.4, k: 7.5})
    ]`, function () {
        assert.deepEqual(sortTriangle([
            new Triangle(),
            new Triangle({vertices: 'HGB', h: 5, g: 4.3, b: 8}),
            new Triangle({ e: 5, m: 6, d: 7}),
            new Triangle({vertices: 'CS', c: 9.2, e: 5, s: 7}),
            new Triangle({vertices: 'ABC', a: 3.1, b: '', c: 2}),
            new Triangle({vertices: 'DCK', d: 6.5, c: 4.4, k: 7.5})
        ]), [{reason: ["Not enough property in Triangle!", undefined], status: "failed"},
            {reason: ["Vertices not set", {e: 5, m: 6, d: 7}], status: "failed"},
            {reason: ["Inncorect vertices of Triangle", "CS"], status: "failed"},
            {reason: ["Incorrect one or more side of Triangle!",  {vertices: "ABC", a: 3.1, b: "", c: 2}], status: "failed"}]);
    });
    it(`Success => sortTriangle([
        new Triangle({vertices: 'VDK', v: 5.5, d: 4, k: 7.3}),
        new Triangle({vertices: 'HGB', h: 5, g: 4.3, b: 8}),
        new Triangle({vertices: 'HGB', h: 5, g: 6, b: 7}),
        new Triangle({vertices: 'CES', c: 9.2, e: 5, s: 7}),
        new Triangle({vertices: 'ABC', a: 3.1, b: 3, c: 2}),
        new Triangle({vertices: 'DCK', d: 6.5, c: 4.4, k: 7.5})
    ])`, function () {
        assert.deepEqual(sortTriangle([
            new Triangle({vertices: 'VDK', v: 5.5, d: 4, k: 7.3}),
            new Triangle({vertices: 'HGB', h: 5, g: 4.3, b: 8}),
            new Triangle({vertices: 'HGB', h: 5, g: 6, b: 7}),
            new Triangle({vertices: 'CES', c: 9.2, e: 5, s: 7}),
            new Triangle({vertices: 'ABC', a: 3.1, b: 3, c: 2}),
            new Triangle({vertices: 'DCK', d: 6.5, c: 4.4, k: 7.5})
        ]),  ["CES", "HGB", "DCK", "VDK", "HGB", "ABC"]);
    });
    it(`Error => It is not Triangle: sortTriangle([
        new Triangle({vertices: 'VDK', v: 15.5, d: 4, k: 7.3}),
    ])`, function () {
        assert.deepEqual(sortTriangle([
            new Triangle({vertices: 'VDK', v: 15.5, d: 4, k: 7.3}),
        ]), [{status: "failed", reason: ["This figure is not a Triangle!", {vertices: "VDK", v: 15.5, d: 4, k: 7.3}]}]);
    });
    it('Empty! => sortTriangle([])', function () {
        assert.empty(sortTriangle([]));
    });
    it('Empty! => sortTriangle()', function () {
        assert.empty(sortTriangle());
    });
});
