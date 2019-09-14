"use strict";

export const bine = function bineFormula(n) {
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  return Math.round((goldenRatio ** n) / Math.sqrt(5));
}