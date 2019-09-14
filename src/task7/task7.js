import { bine } from './bine.js';
import { Context } from './context.js';
import { checker } from './checkerFibonacci.js';

"use strict";
export const fibonacci = function fibonacciFucn({ length = '', min = '', max = '' }) {
  let context = new Context(length, min, max);
  let error = checker(context);
  if (error.status) return error;
  let arrayNumbers = [];
  if (length) {
    arrayNumbers = [0, 1, 1].slice(0, length);
    for (let i = 3; i < length; i++) {
      arrayNumbers[i] = arrayNumbers[i - 1] + arrayNumbers[i - 2];
    };
  } else {
    arrayNumbers = [...Array(Number(context.max) - Number(context.min))].map((e, i) => bine(+context.min + i));
  };
  return JSON.stringify(arrayNumbers);
}