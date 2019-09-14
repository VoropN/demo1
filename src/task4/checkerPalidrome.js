import { Error } from '../error.js';

"use strict";
export const checker = function checkerPalidrome(str) {
  let error = new Error;
  switch (true) {
    case !str.length:
      error.add('No number entered!');
      break;
    case str.length < 2:
      error.add('Number must be greater than 10!');
      break;
    case Number.isNaN(+str):
      error.add('No number entered!');
      break;
  };
  return error;
}