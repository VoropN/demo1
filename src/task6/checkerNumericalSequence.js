import { Error } from '../error.js';

'use strict';
export const checker = function checkerNumericalSequence(length, minSqrt, argsLength) {
  let error = new Error;
  if (!argsLength) {
    error.add('Arguments not passed!');
    return error;
  };
  // length
  if (Object.is('', length)) {
    error.add('Length is not defined!');
  } else if (length < 0) {
    error.add('Length can not be less than zero!');
  } else if (isNaN(length)) {
    error.add('Length must be a number!');
  } else if (length > 100) {
    error.add('Length is too big!');
  } else if (Number(length) !== Math.floor(length)) {
    error.add(`Length should be integer!`);
  };
  // minSqrt
  if (Object.is('', minSqrt)) {
    error.add('MinSqrt is not defined!');
  } else if (minSqrt < 0) {
    error.add('MinSqrt can not be less than zero!');
  } else if (isNaN(minSqrt)) {
    error.add('MinSqrt should be a number!');
  } else if (minSqrt > 100000) {
    error.add('MinSqrt is too big!');
  } else if (Number(minSqrt) !== Math.floor(minSqrt)) {
    error.add(`MinSqrt should be integer!`);
  };
  return error;
}