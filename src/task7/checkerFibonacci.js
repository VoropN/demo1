import { Error } from '../error.js';

'use strict';
export const checker = function checkerFibonacci({ length, min, max }, argsLength) {
  let error = new Error;
  if (Object.is('', length) && Object.is('', min) && Object.is('', max) || !argsLength) {
    error.add('Arguments are not value!')
  } else if (length) {
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
      error.add('Length should be integer!');
    };
  } else if (min || max) {
    // Min
    if (Object.is('', min)) {
      error.add('Min is not defined!');
    } else if (min < 0) {
      error.add('Min can not be less than zero!');
    } else if (isNaN(min)) {
      error.add('Min must be a number!');
    } else if (min > 69) {
      error.add('Min is too big! Min value should be less than 70!');
    } else if (Number(min) !== Math.floor(min)) {
      error.add('Min should be integer!');
    };
    // Max
    if (Object.is('', max)) {
      error.add('Max is not defined!');
    } else if (max < 1) {
      error.add('Max can not be less than 1!');
    } else if (isNaN(max)) {
      error.add('Max must be a number!');
    } else if (max > 70) {
      error.add('Max is too big! Max value should be less than 71!');
    } else if (Number(max) !== Math.floor(max)) {
      error.add('Max should be integer!');
    };
    // max need to be more than min
    if (max && min && max - min < 1) error.add('Value max need to be more that min!');
  };
  return error;
}
