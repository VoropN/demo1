import { Error } from '../error.js';

export const checker = function checkerTriangle(triangle) {
  let error = new Error();
  Object.entries(triangle).forEach((side) => {
    if (side[0] === 'vertices') {
      // vertices
      switch (true) {
        case !side[1]:
          error.add(`Vertices aren\'t defined!`);
          break;
        case side[1].length < 3:
          error.add(`Vertices "${side[1]}" must be 3 letters!`);
          break;
        case isNaN(triangle.square) || triangle.square <= 0:
          error.add(`Triangle "${side[1]}" can\'t be built!`)
          break;
      };
    } else {
      // side
      switch (true) {
        case !side[1]:
          error.add(`Vertex "${side[0]}" isn\'t defined!`);
          break;
        case side[1] < 0:
          error.add(`Vertex "${side[0]}" can\'t be less than zero!`);
          break;
        case isNaN(side[1]):
          error.add(`Vertex "${side[0]}" must be a number!`);
          break;
      };
    };
  });
  return error;
};