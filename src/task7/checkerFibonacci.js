import { Error } from '../error.js';

"use strict";
export const checker = function checkerFibonacci({ length, min, max }, argsLength) {
  let error = new Error;
  if (Object.is('', length) && Object.is('', min) && Object.is('', max) || !argsLength) {
    error.add(`Arguments aren't value!`)
  } else if (length) {
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
  } else if (min || max) {
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
      case min > 69:
        error.add('Min is too big! Min value should be less than 70!');
        break;
      case +min !== Math.floor(+min):
        error.add(`Min should be integer!`);
        break;
    };
    // Max
    switch (true) {
      case Object.is('', max):
        error.add('Max isn\'t defined!');
        break;
      case max < 1:
        error.add('Max can\'t be less than 1!');
        break;
      case isNaN(max):
        error.add('Max must be a number!');
        break;
      case max > 70:
        error.add('Max is too big! Max value should be less than 71!');
        break;
      case +max !== Math.floor(+max):
        error.add(`Max should be integer!`);
        break;
    };
    // max need to be more than min
    if (max && min && max - min < 1) error.add('Value max need to be more that min!');
  };
  return error;
}
