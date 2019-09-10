"use strict";
export function chessBoard(length, width, symbol) {
    let error = checker(length, width, symbol);
    if (error.status === 'failed') return error;
    let separateSymbol = ' ';
    let separateLine = '\n';
    let first = `${symbol}${separateSymbol}`.repeat(width) + separateLine;
    let second = `${separateSymbol}${symbol}`.repeat(width) + separateLine;
    return [...Array(length)].map((e, i) => i & 1 ? second : first).join('');
}

function checker(length, width, symbol) {
    let error = {
        status: '',
        reason: []
    };
    switch (true) { // length
        case length === undefined || length === null:
            error.reason.push('length not defined!');
            break;
        case length < 0:
            error.reason.push('length cannot be less than zero!');
        case isNaN(length) || Object.is(length, ''):
            error.reason.push('length must be a number!');
            break;
    };
    switch (true) { // width
        case width === undefined || width === null:
            error.reason.push('width not defined!');
            break;
        case width < 0:
            error.reason.push('width cannot be less than zero!');
            break;
        case isNaN(width) || Object.is(width, ''):
            error.reason.push('width must be a number!');
            break;
    };
    switch (true) { // symbol
        case symbol === undefined || symbol === null || symbol.length < 1:
            error.reason.push('symbol not defined!');
            break;
    };
    if (error.reason.length > 0) {
        error.status = 'failed';
    };
    return error;
}
