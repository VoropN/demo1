import { checker } from './checkerTask1.js';

"use strict";
export const board = function makeChessBoard({length = 0, width = 0, symbol = ''}) {
  let error = checker(length, width, symbol);
  if (error.status) return error;
  let separateSymbol = ' ';
  let separateLine = '\n';
  let first = `${symbol}${separateSymbol}`.repeat(width) + separateLine;
  let second = `${separateSymbol}${symbol}`.repeat(width) + separateLine;
  return [...Array(Number(length))].map((e, i) => i & 1 ? second : first).join('');
};
