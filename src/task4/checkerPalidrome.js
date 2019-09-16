import { Error } from '../error.js';

'use strict';
export const checker = function checkerPalidrome(str, number) {
  let error = new Error;
  if (Object.is('', number)) {
    error.add('Value is not entered!');
  } else if (str.length < 2) {
    error.add('Number must be greater than 10!');
  } else if (isNaN(str)) {
    error.add('Invalid value format!');
  };
  if (typeof number === 'number' && number > 999999999999999) {
    error.add('Value is too big!');
  };
  return error;
}