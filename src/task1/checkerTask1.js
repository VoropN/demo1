import { Error } from '../error.js';

'use strict'
export const checker = function checkerChessBoard(length, width, symbol, argsLength) {
  let error = new Error();
  if (!argsLength) {
    error.add(`Arguments are not value!`)
    return error;
  };
  // Length
  if (Object.is(length, '')) {
    error.add('Length is not defined!');
  } else if (length <= 0) {
    error.add('Length need to be more than zero!');
  } else if (isNaN(length)) {
    error.add('Length must be a number!');
  } else if (Number(length) !== Math.floor(length)) {
    error.add('Length must be an integer!');
  };
  // Width
  if (Object.is(width, '')) {
    error.add('Width is not defined!');
  } else if (width <= 0) {
    error.add('Width need to be more than zero!');
  } else if (isNaN(width)) {
    error.add('Width must be a number!');
  } else if (Number(width) !== Math.floor(width)) {
    error.add('Width must be an integer!');
  };
  // Symbol
  if (symbol.length < 1) {
    error.add('Symbol is not defined!');
  } else if (symbol.length > 1) {
    error.add('Length symbol should not be more than one!');
  };
  return error;
};