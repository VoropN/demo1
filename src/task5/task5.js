import { checker } from './checkerHappyTickets.js';
import { Context } from './context.js';

"use strict";
export class HappyTickets {
  constructor({min = '', max = ''} = {}) {
    this.context = new Context(min, max);
    this.error = checker(this.context, arguments.length);
  }
  get result () {
    if (this.error.status) return this.error;
    if ( !this.hasOwnProperty('ticketsArray') ) {
      this.ticketsArray = this.calcTicketsArray(this.context);
      this.equalSumStartEndArray = this.сompareSumStartEnd(this.ticketsArray);
      this.equalSumEvenOddArray = this.сompareSumEvenOdd(this.ticketsArray);
    };
    let ticketsCountBySimpleMethod = this.equalSumStartEndArray.length;
    let ticketsCountByDifficultMethod = this.equalSumEvenOddArray.length;
    let winner;
    if (ticketsCountBySimpleMethod === ticketsCountByDifficultMethod) {
      winner = 'draw';
    } else if ( ticketsCountBySimpleMethod > ticketsCountByDifficultMethod ) {
      winner = 'Simple method';
    } else {
      winner = 'Difficult method';
    };
    return JSON.stringify({ winner, ticketsCountByDifficultMethod, ticketsCountBySimpleMethod });
  }
  calcTicketsArray({ min, max }) {
    let result = [];
    let lengthMax = String(max).length;
    let lengthMin = String(min).length;
    if (lengthMax !== lengthMin) {
      let blank = '0'.repeat(lengthMax - 1);
      for (let i = +min; i <= +max; i++) {
        result.push((blank + i).slice(-lengthMax));
      }
    } else {
      for (let i = +min; i <= +max; i++) {
        result.push(String(i));
      }
    };
    return result;
  }
  сompareSumEvenOdd(ticketsArray) {
    let even, odd;
    return ticketsArray.filter(str => {
      even = [], odd = [];
      [...str].forEach((e, i) => i & 1 ? even.push(e) : odd.push(e));
      return this.isEqualSum(even, odd);
    });
  }
  сompareSumStartEnd(ticketsArray) {
    let length = ticketsArray.length && Math.floor(ticketsArray[0].length / 2);
    return ticketsArray.filter(
      str => this.isEqualSum([...str.slice(0, length)], [...str.slice(-length)]));
  }
  isEqualSum(firstArray, secondArray) {
    return this.calcSum(firstArray) === this.calcSum(secondArray);
  }
  calcSum(array) {
    return array.reduce((acc, cur) => Number(acc) + Number(cur), 0);
  }
}
