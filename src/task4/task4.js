import { checker } from './checkerPalidrome.js';

"use strict";
const center = function iteratingValuesFromCenter(left, right, str, length) {
  while (left >= 0 && length > right && str[left] === str[right]) {
    left--;
    right++;
  }
  return str.slice(left + 1, right);
};

export const palindrome = function getPalindrome({ number = '' }) {
  let valueForFalse = 0;
  let str = String(number);
  let error = checker(str);
  if (error.status) return error;
  let length = str.length;
  let arrayResult = [];
  let numberResult, temp1, temp2;
  for (var i = 0; i < length - 1; i++) {
    temp1 = center(i, i + 1, str, length);
    temp2 = center(i, i, str, length);
    temp1.length > 1 && arrayResult.push(temp1);
    temp2.length > 1 && arrayResult.push(temp2);
  }
  numberResult = arrayResult.sort((first, second) => second.length - first.length);
  return numberResult.length && numberResult[0] || valueForFalse;
};