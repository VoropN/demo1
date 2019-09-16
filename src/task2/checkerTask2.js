import { Error } from '../error.js';

'use strict';
export const checker = function checkerEnvelope({ width = '', height = '', name = 'none' }) {
  let error = new Error();
  if (name === 'none') {
    error.add('Not enough envelopes!');
    return error;
  };
  // Width
  if (Object.is(width, '')) {
    error.add(`Width ${name} is not defined!`);
  } else if (width <= 0) {
    error.add(`Width ${name} need to be more than zero!`);
  } else if (isNaN(width)) {
    error.add(`Width ${name} must be a number!`);
  };
  // Height
  if (Object.is(height, '')) {
    error.add(`Height ${name} is not defined!`);
  } else if (height <= 0) {
    error.add(`Height ${name} need to be more than zero!`);
  } else if (isNaN(height)) {
    error.add(`Height ${name} must be a number!`);
  };
  return error;
};

