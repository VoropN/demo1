import { Error } from '../error.js';

"use strict";
export const checker = function checkerHappyTickets({ min, max }) {
  let error = new Error();
  // Min
  switch (true) {
    case Object.is('', min):
      error.add('Min isn\'t defined!');
      break;
    case min < 0:
      error.add('Min can\'t be less than zero!');
      break;
    case isNaN(min):
      error.add('Min must be a number!');
      break;
    case String(min).length > 7:
      error.add('Min is too big!');
      break;
  };
  // Max
  switch (true) {
    case Object.is('', max):
      error.add('Max isn\'t defined!');
      break;
    case max < 10:
      error.add('Max can\'t be less than 10!');
      break;
    case isNaN(max):
      error.add('Max must be a number!');
      break;
    case String(max).length > 7:
      error.add('Max is too big!');
      break;
  };
  if (max && min && max - min < 1) error.add('Value max need to be more that min!');
  return error;
};