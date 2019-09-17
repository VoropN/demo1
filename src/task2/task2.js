import { Envelope } from './envelope.js';
import { checker } from './checkerTask2.js';

'use strict';
export class Packager {
  constructor(envelopeArray) {
    this.envelopeArray = envelopeArray.map(
      (envelope, i) => new Envelope({ width: envelope.width, height: envelope.height, name: `Envelope${i + 1}` }));
  }

  get strategy() {
    let errorArray = [];
    if(this.envelopeArray.length < 2) return [checker({})];
    this.envelopeArray.forEach((envelope) => {
      let error = checker(envelope);
      if (error.status) return errorArray.push(error);
    });
    if (errorArray.length > 0) return errorArray;
    return JSON.stringify(this.tryToPut(...this.envelopeArray.sort((f, s) => s.diagonal - f.diagonal)));
  }

  getСathetus(hypotenuse, cathetus) {
    return Math.sqrt((hypotenuse ** 2) - (cathetus ** 2));
  }

  getHypotenuse(width, height) {
    return Math.sqrt((width ** 2) + (height ** 2));
  }

  getCalcForParallel(first, second) {
    return {
      bigSideMargin: first.comparison.width - second.comparison.width,
      littleSideMargin: first.comparison.height - second.comparison.height,
    }
  }

  getCalcForDiagonal(first, second) {
    let cathetusWidth = this.getСathetus(second.diagonal / 2, first.comparison.height / 2);
    let cathetusHeight = this.getСathetus(second.diagonal / 2, first.comparison.width / 2);
    let littleCathetusWidth = first.comparison.width / 2 - cathetusWidth;
    let littleCathetusHeight = first.comparison.height / 2 - cathetusHeight;
    let littleHypotenuse = this.getHypotenuse(littleCathetusWidth, littleCathetusHeight);
    let margin = littleHypotenuse - second.comparison.height;
    return { cathetusWidth, cathetusHeight, littleCathetusWidth, littleCathetusHeight, littleHypotenuse, margin }
  }

  tryToPut(first, second) {
    let inboxingResult;
    this.calcForParallel = this.getCalcForParallel(first, second);
    if (this.calcForParallel.bigSideMargin > 0 && this.calcForParallel.littleSideMargin > 0) {
      inboxingResult = { canPut: true, message: 'put big side in parallel!', inside: second, outside: first, result: second.name };
    } else {
      this.calcForDiagonal = this.getCalcForDiagonal(first, second);
      if (this.calcForDiagonal.margin > 0) {
        inboxingResult = { canPut: true, message: 'put big side in diagonal!', inside: second, outside: first, result: second.name };
      } else {
        inboxingResult = { canPut: false, message: 'impossible to put', result: 0 };
      }
    }
    return inboxingResult;
  }
}