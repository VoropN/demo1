"use strict";
export function fibonacci(context) {
    let error = checker(context);
    if (error.status === 'failed') return error;
    let arrayNumbers = [];
    if (context.hasOwnProperty('length')) {
        let { length } = context;
        arrayNumbers = [0, 1, 1].slice(0, length);
        for (let i = 3; i < length; i++) {
            arrayNumbers[i] = arrayNumbers[i - 1] + arrayNumbers[i - 2];
        };
    } else {
        arrayNumbers = [...Array(context.max - context.min)].map((e, i) => bine(context.min + i));
    };
    return arrayNumbers;
}

function bine(n) {
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    return Math.round(Math.pow(goldenRatio, n) / Math.sqrt(5));
}

export class ContextFib {
    constructor(data) {
        if (!data) {
            this.min;
            this.max;
            this.length;
        } else if (data.hasOwnProperty('length')) {
            this.length = data.length;
        } else {
            this.min = data.min;
            this.max = data.max;
        };
    }
}

function checker(context) {
    let error = {
        status: '',
        reason: []
    };
    if (context === undefined || context === null) {
        error.reason.push(`Argument shouldn't to be empty!`)
    } else if (context.hasOwnProperty('length')) {
        switch (true) {
            case typeof context.length !== 'number':
                error.reason.push('incorrect format length');
                break;
            case context.length < 0:
                error.reason.push(`length cannot be negative value`);
                break;
            case context.length > 100:
                error.reason.push(`Max length cannot be more 100`);
                break;
            default: break;
        };
    } else {
        switch (true) {
            case !context.hasOwnProperty('min'):
                error.reason.push(`context hasn't property min`);
                break;
            case !context.hasOwnProperty('max'):
                error.reason.push(`context hasn't property max`);
                break;
            case typeof context.min !== 'number' || typeof context.max !== 'number':
                error.reason.push(`incorrect format for fields: min or max`);
                break;
            case context.min < 0 || context.max < 0:
                error.reason.push(`filds min or max cannot be negative value`);
                break;
            case context.max - context.min < 1:
                error.reason.push(`value max need to be more that min`);
                break;
            case context.max > 70:
                error.reason.push(`Max value for range should be less 70`);
                break;
            default: break;
        };
    };
    if (error.reason.length > 0) {
        error.status = 'failed';
    };
    return error;
}

