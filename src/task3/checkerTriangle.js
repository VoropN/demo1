import { Error } from '../error.js';

'use strict';
export const checker = function checkerTriangle(triangle) {
  let error = new Error();
  Object.entries(triangle).forEach((side) => {
    if (side[0] === 'vertices') {
      // vertices
      if (!side[1]) {
        error.add(`Vertices are not defined!`);
      } else if (side[1].length < 3) {
        error.add(`Vertices '${side[1]}' must be 3 letters!`);
      } else if (isNaN(triangle.square) || triangle.square <= 0) {
        error.add(`Triangle '${side[1]}' can not be built!`)
      };
    } else {
      // sides
      if (!side[1]) {
        error.add(`Vertex '${side[0]}' is not defined!`);
      } else if (side[1] < 0) {
        error.add(`Vertex '${side[0]}' can not be less than zero!`);
      } else if (isNaN(side[1])) {
        error.add(`Vertex '${side[0]}' must be a number!`);
      };
    };
  });
  return error;
};