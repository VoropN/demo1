import { Error } from '../error.js';

"use strict";
export const checker = function checkerNumericalSequence(length, minSqrt, argsLength) {
  let error = new Error;
  if (!argsLength) {
    error.add('Arguments not passed!');
    return error;
  };
  // length
  switch (true) {
    case Object.is('', length):
      error.add('Length isn\'t defined!');
      break;
    case length < 0:
      error.add('Length can\'t be less than zero!');
      break;
    case isNaN(length):
      error.add('Length must be a number!');
      break;
    case length > 100:
      error.add('Length is too big!');
      break;
    case +length !== Math.floor(+length):
        error.add(`Length should be integer!`);
      break;
  };
  // minSqrt
  switch (true) {
    case Object.is('', minSqrt):
      error.add('MinSqrt isn\'t defined!');
      break;
    case minSqrt < 0:
      error.add('MinSqrt can\'t be less than zero!');
      break;
    case isNaN(minSqrt):
      error.add('MinSqrt should be a number!');
      break;
    case minSqrt > 100000:
      error.add('MinSqrt is too big!');
      break;
    case +minSqrt !== Math.floor(+minSqrt):
        error.add(`MinSqrt should be integer!`);
      break;
  }
  return error;
}