import { Error } from '../error.js';

'use strict';
export const checker = function checkerHappyTickets({ min, max }, argsLength) {
  let error = new Error();
  if (!argsLength) {
    error.add('Arguments not passed!');
    return error;
  };
  // Min
  if (Object.is('', min)) {
    error.add('Min is not defined!');
  } else if (min < 0) {
    error.add('Min can not be less than zero!');
  } else if (isNaN(min)) {
    error.add('Min must be a number!');
  } else if (String(min).length > 7) {
    error.add('Min is too big!');
  };
  // Max
  if (Object.is('', max)) {
    error.add('Max is not defined!');
  } else if (max < 10) {
    error.add('Max can not be less than 10!');
  } else if (isNaN(max)) {
    error.add('Max must be a number!');
  } else if (String(max).length > 7) {
    error.add('Max is too big!');
  };
  // min >= max ?
  if (max && min && max - min < 1) {
    error.add('Value max need to be more that min!');
  };
  return error;
};