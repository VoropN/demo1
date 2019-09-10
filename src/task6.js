"use strict";
export function numericalSequence (length, minSqrt) {
    let error = checker(length, minSqrt);
    if (error.status === 'failed') return error;
    let start = Math.ceil(Math.sqrt(minSqrt));
    return [...Array(length)].map((e, i) => start + i).toString();
}

function checker(length, minSqrt) {
    let error = {
        status: '',
        reason: []
    };
    switch (true) { // length
        case length === undefined || length === null:
            error.reason.push(`length can't be undefined or null`);
            break;
        case length < 0:
            error.reason.push(`length should be more than zero`);
            break;
        case length > 100:
            error.reason.push(`length should be less than 100`);
            break;
        case isNaN(length) || Object.is('', length):
            error.reason.push(`length should be number`);
            break;
        case length !== Math.floor(length) :
            error.reason.push(`length should be integer`);
            break;
    }
    switch (true) { // minSqrt
        case minSqrt === undefined || minSqrt === null:
            error.reason.push(`minSqrt can't be undefined or null`);
            break;
        case minSqrt < 0:
            error.reason.push(`minSqrt should be more than zero`);
            break;
        case isNaN(minSqrt) || Object.is('', minSqrt):
            error.reason.push(`minSqrt should be number`);
            break;
    }
    if (error.reason.length > 0) {
        error.status = 'failed';
    }
    return error;
}
