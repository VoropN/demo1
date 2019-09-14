import { sortTriangle } from './task3.js';

export const test3 = () => describe('sortTriangle', function () {
  it(`Error => 
  sortTriangle({vertices: 'VDK', v: 5.5, d: 4, k: 7.3}),
    new Triangle({vertices: 'HGB', h: 5, g: 4.3, b: 8}),
    new Triangle({ e: 5, m: 6, d: 7}),
    new Triangle({vertices: 'CS', c: 9.2, e: 5, s: 7}),
    new Triangle({vertices: 'ABC', a: 3.1, b: '', c: 2}),
    new Triangle({vertices: 'DCK', d: 6.5, c: 4.4, k: 7.5})
  ]`, function () {
    chai.assert.deepEqual(
      sortTriangle([
      {vertices: 'HGB', h: 5, g: 4.3, b: 8},
      { e: 5, m: 6, d: 7},
      {vertices: 'CS', c: 9.2, e: 5, s: 7},
      {vertices: 'ABC', a: 3.1, b: '', c: 2},
      {vertices: 'DCK', d: 6.5, c: 4.4, k: 7.5}
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
    chai.assert.deepEqual(sortTriangle([
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
    chai.assert.deepEqual(sortTriangle([
      new Triangle({vertices: 'VDK', v: 15.5, d: 4, k: 7.3}),
    ]), [{status: "failed", reason: ["This figure is not a Triangle!", {vertices: "VDK", v: 15.5, d: 4, k: 7.3}]}]);
  });
  it('Empty! => sortTriangle([])', function () {
    chai.assert.empty(sortTriangle([]));
  });
  it('Empty! => sortTriangle()', function () {
    chai.assert.empty(sortTriangle());
  });
});
