import { Error } from '../error.js';

export const checker = function checkerChessBoard(length, width, symbol, argsLength) {
  let error = new Error();
  if (Object.is('', length) && Object.is('', width) && Object.is('', symbol) || !argsLength) {
    error.add(`Arguments aren't value!`)
    return error;
  };
  // Length
  switch (true) {
    case Object.is(length, ''):
      error.add('Length isn\'t defined!');
      break;
    case length <= 0:
      error.add('Length need to be more than zero!');
      break;
    case isNaN(length):
      error.add('Length must be a number!');
      break;
    case +length !== Math.floor(length):
      error.add('Length must be an integer!');
      break;
  };
  // Width
  switch (true) {
    case Object.is(width, ''):
      error.add('Width isn\'t defined!');
      break;
    case width <= 0:
      error.add('Width need to be more than zero!');
      break;
    case isNaN(width):
      error.add('Width must be a number!');
      break;
    case +width !== Math.floor(width):
      error.add('Width must be an integer!');
      break;
  };
  // Symbol
  switch (true) {
    case symbol.length < 1:
      error.add('Symbol isn\'t defined!');
      break;
    case symbol.length > 1:
      error.add('Length symbol should not be more than one!');
      break;
  };
  return error;
};