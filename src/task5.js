"use strict";
export class HappyTickets {
    constructor(context) {
        this.context = context;
        this.ticketsArray = this.calcTicketsArray(this.context);
        this.equalSumStartEndArray = this.сompareSumStartEnd(this.ticketsArray);
        this.equalSumEvenOddArray = this.сompareSumEvenOdd(this.ticketsArray);
        this.result = {
            winner: this.countEqualSumStartEnd > this.countEqualSumEvenOdd ? 'Simple method' : 'Difficult method',
            ticketsCountBySimpleMethod: this.equalSumStartEndArray.length,
            ticketsCountByDifficultMethod: this.equalSumEvenOddArray.length,
        }
    }
    calcTicketsArray(context) {
        let result = [];
        let { min, max } = context;
        let lengthMax = String(max).length;
        let lengthMin = String(min).length;
        if (lengthMax !== lengthMin) {
            let blank = '0'.repeat(lengthMax - 1);
            for (let i = min; i <= max; i++) {
                result.push((blank + i).slice(-lengthMax));
            }
        } else {
            for (let i = min; i <= max; i++) {
                result.push(String(i));
            }
        };
        return result;
    }
    сompareSumEvenOdd(ticketsArray) {
        let even, odd;
        return ticketsArray.filter(str => {
            even = [], odd = [];
            [...str].forEach(e => e & 1 ? even.push(e) : odd.push(e));
            return this.isEqualSum(even, odd);
        });
    }
    сompareSumStartEnd(ticketsArray) {
        return ticketsArray.filter(
            str => this.isEqualSum([...str.slice(0, 3)], [...str.slice(-3)]));
    }
    isEqualSum(firstArray, secondArray) {
        return this.calcSum(firstArray) === this.calcSum(secondArray);
    }
    calcSum(array) {
        return array.reduce((acc, cur) => Number(acc) + Number(cur), 0);
    }
}

export class Context {
    constructor(data) {
        this.min = data.min;
        this.max = data.max;
    }
}

const checkerContext = {
    construct(target, args) {
        let error = {
            status: '',
            reason: []
        };
        if (!args.length) {
            error.reason.push('Arguments is Empty!');
        } else {
            let { min, max } = args[0];
            switch (true) {
                case !args.length:
                    error.reason.push('Arguments is Empty!');
                    break;
                case min === undefined || max === undefined:
                    error.reason.push('Not enough arguments!');
                    break;
                case String(min).length < 1 || String(max).length < 6:
                    error.reason.push('Incomplete data!');
                    break;
                case isNaN(min) || isNaN(max):
                    error.reason.push(`Context hasn't right property min or max`);
                    break;
                case !args[0].hasOwnProperty('max'):
                    error.reason.push(`Context hasn't property max`);
                    break;
                case !args[0].hasOwnProperty('min'):
                    error.reason.push(`Context hasn't property min`);
                    break;
                case min < 0 || max < 0:
                    error.reason.push(`Filds min or max cannot be negative value`);
                    break;
                case String(max).length > 8:
                    error.reason.push(`Too big value for max!`);
                    break;
                case max - min < 1:
                    error.reason.push(`Value max need to be more that min`);
                    break;
            };
        };

        if (error.reason.length > 0) {
            error.status = 'failed';
            return error;
        } else {
            return new target(...args);
        }
    }
};
const checkerHappyTickets = {
    construct(target, args) {
        if ( !args.length ) {
          return  { status: 'failed', reason: ['Arguments for tickets is Empty!'] };
        } else if (args[0].hasOwnProperty('status')) {
             return args[0];
        } else if (args[0].__proto__.constructor !== Context.prototype.constructor ) {
            return  { status: 'failed', reason: ["Argument for HappyTickets should to be Context"] };
        } else {
            return new target(...args);
        }
    }
}

Context = new Proxy(Context, checkerContext);
HappyTickets = new Proxy(HappyTickets, checkerHappyTickets);
