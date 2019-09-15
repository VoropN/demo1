import { Error } from '../error.js';

"use strict";
export const checker = function checkerPalidrome(str, number) {
  let error = new Error;
  switch (true) {
    case Object.is('', number):
      error.add('Value isn\'t entered!');
      break;
    case str.length < 2:
      error.add('Number must be greater than 10!');
      break;
    case Number.isNaN(+str):
      error.add('Invalid value format!');
      break;
  };
  if (typeof number === 'number' && number > 999999999999999) {
    error.add('Value is too big!');
  };
  return error;
}