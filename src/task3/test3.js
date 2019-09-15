import { sortTriangle } from './task3.js';

export const test3 = () => describe('Sort Triangle', function () {
  describe('Should return sorted Triangle:', function () {
    it(`if all sides are numbers, result: ["ABC","AGC","DVS"] => sortTriangle(
      { vertices: "AGC", side1: 12, side2: 31, side3: 31 },
      { vertices: ABC, side1: 22, side2: 30, side3: 21 },
      { vertices: "DVS", side1: 9, side2: 3, side3: 7 })`, function () {
      chai.assert.equal(
        sortTriangle(
          { vertices: "AGC", side1: 12, side2: 31, side3: 31 },
          { vertices: "ABC", side1: 22, side2: 30, side3: 21 },
          { vertices: "DVS", side1: 9, side2: 3, side3: 7 }
        ), '["ABC","AGC","DVS"]');
    });
    it(`if have single triangle, result: ["ABC"] => sortTriangle(
      { vertices: "ABC", side1: 9, side2: 3, side3: 7 })`, function () {
      chai.assert.equal(
        sortTriangle(
          { vertices: "ABC", side1: 9, side2: 3, side3: 7 }
        ), '["ABC"]');
    });
    it(`if value of sides are numbers cast to strings, result: ["ABC","AGC","DVS"] => sortTriangle(
      { vertices: "AGC", side1: "12", side2: "31", side3: "31" },
      { vertices: "ABC", side1: "22", side2: "30", side3: "21" },
      { vertices: "dvs", side1: "9", side2: "3", side3: "7" })`, function () {
      chai.assert.equal(
        sortTriangle(
          { vertices: "AGC", side1: "12", side2: "31", side3: "31" },
          { vertices: "ABC", side1: "22", side2: "30", side3: "21" },
          { vertices: "dvs", side1: "9", side2: "3", side3: "7" }
        ), '["ABC","AGC","DVS"]');
    });
    it(`if one ore more vertices are lowercase, result: ["ABC","AGC","DVS"] => sortTriangle(
      { vertices: "agc", side1: 12, side2: 31, side3: 31 },
      { vertices: abc, side1: 22, side2: 30, side3: 21 },
      { vertices: "dvs", side1: 9, side2: 3, side3: 7 })`, function () {
      chai.assert.equal(
        sortTriangle(
          { vertices: "agc", side1: 12, side2: 31, side3: 31 },
          { vertices: "abc", side1: 22, side2: 30, side3: 21 },
          { vertices: "dvs", side1: 9, side2: 3, side3: 7 }
        ), '["ABC","AGC","DVS"]');
    });
    it('if the function is called without arguments, result: [] => sortTriangle()', function () {
      chai.assert.equal(sortTriangle(), '[]');
    });
  });
  describe('Should return error:', function () {
    it(`if one or more vertices have length less 3 letters => sortTriangle(
      { vertices: "AG", side1: "12", side2: "31", side3: "31" },
      { vertices: "ABC", side1: "22", side2: "30", side3: "21" },
      { vertices: "dvs", side1: "9", side2: "3", side3: "7" })`, function () {
      chai.assert.deepEqual(
        sortTriangle(
          { vertices: "AG", side1: "12", side2: "31", side3: "31" },
          { vertices: "ABC", side1: "22", side2: "30", side3: "21" },
          { vertices: "dvs", side1: "9", side2: "3", side3: "7" }
        ), [{ reason: ['Vertices "AG" must be 3 letters!'] }]);
    });
    it(`if one or more triangles can\'t be built => sortTriangle(
      { vertices: "AGf", side1: "100", side2: "31", side3: "31" },
      { vertices: "ABC", side1: "22", side2: "30", side3: "21" },
      { vertices: "dvs", side1: "9", side2: "3", side3: "7" })`, function () {
      chai.assert.deepEqual(
        sortTriangle(
          { vertices: "AGf", side1: "100", side2: "31", side3: "31" },
          { vertices: "ABC", side1: "22", side2: "30", side3: "21" },
          { vertices: "dvs", side1: "9", side2: "3", side3: "7" }
        ), [{ reason: ['Triangle "AGF" can\'t be built!'] }]);
    });
    it(`if one or more sides of the triangle don't have value => sortTriangle(
      { vertices: "AGf", side1: "", side2: "31", side3: "31" },
      { vertices: "ABC", side1: "22", side2: "30", side3: "21" })`, function () {
      chai.assert.deepEqual(
        sortTriangle(
          { vertices: "AGf", side1: "", side2: "31", side3: "31" },
          { vertices: "ABC", side1: "22", side2: "30", side3: "21" }
        ), [{ reason: ['Triangle "AGF" can\'t be built!', 'Vertex "a" isn\'t defined!'] }]);
    });
    it(`if one or more sides of the triangle are missing => sortTriangle(
      { vertices: "AGf", side2: "31", side3: "31" },
      { vertices: "ABC", side1: "22", side2: "30", side3: "21" })`, function () {
      chai.assert.deepEqual(
        sortTriangle(
          { vertices: "AGf", side2: "31", side3: "31" },
          { vertices: "ABC", side1: "22", side2: "30", side3: "21" }
        ), [{ reason: ['Triangle "AGF" can\'t be built!', 'Vertex "a" isn\'t defined!'] }]);
    });
    it(`if one or more triangles have no parameters => sortTriangle(
      { }, { vertices: "ABC", side1: "22", side2: "30", side3: "21" })`, function () {
      chai.assert.deepEqual(
        sortTriangle(
          { }, { vertices: "ABC", side1: "22", side2: "30", side3: "21" }
        ), [{ reason: ['Vertices aren\'t defined!'] }]);
    });
    it(`if triangle have no parameters => sortTriangle({ })`, function () {
      chai.assert.deepEqual(
        sortTriangle({ }), [{ reason: ['Vertices aren\'t defined!'] }]);
    });
  });
});