import { Error } from '../error.js';

export const checker = function checkerEnvelope({ width, height, name }) {
  let error = new Error();
  // Width
  switch (true) {
    case !width:
      error.add(`Width ${name} isn\'t defined!`);
      break;
    case width < 0:
      error.add(`Width ${name} can\'t be less than zero!`);
      break;
    case isNaN(width):
      error.add(`Width ${name} must be a number!`);
      break;
  };
  // Height
  switch (true) {
    case !height:
      error.add(`Height ${name} isn\'t defined!`);
      break;
    case height < 0:
      error.add(`Height ${name} can\'t be less than zero!`);
      break;
    case isNaN(height):
      error.add(`Height ${name} must be a number!`);
      break;
  };
  return error;
};

