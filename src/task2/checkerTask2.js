import { Error } from '../error.js';

export const checker = function checkerEnvelope({ width = '', height = '', name = 'none' }) {
  let error = new Error();
  // Width
  if (name === 'none') {
    error.add('Not enough envelopes!');
    return error;
  };
  switch (true) {
    case Object.is(width, ''):
      error.add(`Width ${name} isn\'t defined!`);
      break;
    case width <= 0:
      error.add(`Width ${name} need to be more than zero!`);
      break;
    case isNaN(width):
      error.add(`Width ${name} must be a number!`);
      break;
  };
  // Height
  switch (true) {
    case Object.is(height, ''):
      error.add(`Height ${name} isn\'t defined!`);
      break;
    case height <= 0:
      error.add(`Height ${name} need to be more than zero!`);
      break;
    case isNaN(height):
      error.add(`Height ${name} must be a number!`);
      break;
  };
  return error;
};

