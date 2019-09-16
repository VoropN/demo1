import { checker } from './checkerNumericalSequence.js';

'use strict';
export const numericalSequence = function numericalSequenceFunc({ length = '', minSqrt = '' } = {}) {
  let error = checker(length, minSqrt, arguments.length);
  if (error.status) return error;
  let start = Math.ceil(Math.sqrt(minSqrt));
  return [...Array(+length)].map((e, i) => start + i).join(', ');
}