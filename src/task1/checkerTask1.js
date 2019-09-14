import { Error } from '../error.js';

export const checker = function checkerChessBoard(length, width, symbol) {
  let error = new Error();
  // Length
  switch (true) {
    case !length:
      error.add('Length isn\'t defined!');
      break;
    case length < 0:
      error.add('Length can\'t be less than zero!');
      break;
    case isNaN(length):
      error.add('Length must be a number!');
      break;
  };
  // Width
  switch (true) {
    case !width:
      error.add('Width isn\'t defined!');
      break;
    case width < 0:
      error.add('Width can\'t be less than zero!');
      break;
    case isNaN(width):
      error.add('Width must be a number!');
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