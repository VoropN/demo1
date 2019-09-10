"use strict";
export function palindrome(number) {
    let valueForFalse = 0;
    let str = String(number);
    let error = checker(number, str);
    if (error.status === 'failed') return error;
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

function center(left, right, str, length) {
    while (left >= 0 && length > right && str[left] === str[right]) {
        left--;
        right++;
    }
    return str.slice(left + 1, right);
};

function checker (number, str) {
    let error = {
        status: '',
        reason: []
    };
    switch (true) {
        case number === undefined || number === null :
            error.reason.push('Not enough arguments!');
            break;
        case number < 10:
            error.reason.push('Number is less 10!');
            break;
        case(str.indexOf('e') != -1):
            error.reason.push('Too big number!');
            break;
        case(typeof number !== 'number'):
            error.reason.push('Incorrect format! Input value should be Number');
            break;
    }
    if (error.reason.length > 0) {
        error.status = 'failed';
    };
    return error;
}