"use strict";

export class Envelope {
    constructor(data) {
        this.width = Number(data.width);
        this.height = Number(data.height);
        this.name = Envelope.newName;
    }
    get diagonal() {
        return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
    }
    get comparison() {
        if (this.width > this.height) {
            return { width: this.width, height: this.height };
        } else {
            return { width: this.height, height: this.width };
        }
    }
    static count = 1;
    static get newName() {
        return `Envelope${this.count++}`;
    }
}

export class Packager {
    constructor(arrayEnvelopes) {
        this.envelopes = arrayEnvelopes.sort((first, second) => second.diagonal - first.diagonal);
        this.strategy = this.tryToPut(this.envelopes[0], this.envelopes[1]);
    }
    calcСathetus(hypotenuse, cathetus) {
        return Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(cathetus, 2));
    }
    calcHypotenuse(width, height) {
        return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
    }
    doCalcForParallel(first, second) {
        return {
            bigSideMargin: first.comparison.width - second.comparison.width,
            littleSideMargin: first.comparison.height - second.comparison.height,
        }
    }
    doCalcForDiagonal(first, second) {
        let cathetusWidth = this.calcСathetus(second.diagonal / 2, first.comparison.height / 2);
        let cathetusHeight = this.calcСathetus(second.diagonal / 2, first.comparison.width / 2);
        let littleCathetusWidth = first.comparison.width / 2 - cathetusWidth;
        let littleCathetusHeight = first.comparison.height / 2 - cathetusHeight;
        let littleHypotenuse = this.calcHypotenuse(littleCathetusWidth, littleCathetusHeight);
        let margin = littleHypotenuse - second.comparison.height;
        return { cathetusWidth, cathetusHeight, littleCathetusWidth, littleCathetusHeight, littleHypotenuse, margin }
    }
    tryToPut(first, second) {
        let inboxingResult;
        this.calcForParallel = this.doCalcForParallel(first, second);
        if (this.calcForParallel.bigSideMargin > 0 && this.calcForParallel.littleSideMargin > 0) {
            inboxingResult = { canPut: true, message: 'put big side in parallel!', inside: second, outside: first, result: second.name };
        } else {
            this.calcForDiagonal = this.doCalcForDiagonal(first, second);
            if (this.calcForDiagonal.margin > 0) {
                inboxingResult = { canPut: true, message: 'put big side in diagonal!', inside: second, outside: first, result: second.name };
            } else {
                inboxingResult = { canPut: false, message: 'impossible to put', result: 0 };
            }
        }
        return inboxingResult;
    }
}

const checkerEnvelope = {
    construct(target, args) {
        let error = {
            status: '',
            reason: []
        };
        let width, height;
        switch (true) { // args
            case !args.length:
                error.reason.push('argsuments not defined!');
                break;
            default:
                ({ width, height } = args[0]);
        };

        switch (true) { // width
            case width === undefined || width === null:
                error.reason.push('width not defined!');
                break;
            case width <= 0:
                error.reason.push('width cannot be zero or less!');
                break;
            case isNaN(width) || Object.is(width, ''):
                error.reason.push('width must be a number!');
                break;
        };

        switch (true) { // height
            case height === undefined || height === null:
                error.reason.push('height not defined!');
                break;
            case height <= 0:
                error.reason.push('width cannot be zero or less!');
                break;
            case isNaN(height) || Object.is(height, ''):
                error.reason.push('height must be a number!');
                break;
        };

        if (error.reason.length > 0) {
            error.status = 'failed';
            return error;
        } else {
            return new target(...args);
        }
    }
};
const checkerPackager = {
    construct(target, args) {
        let error = {
            status: '',
            reason: []
        };
        if (!args.length || args[0].length < 2) {
            error.status = 'failed';
            error.reason.push('Not enough arguments for Packager!');
            return error;
        } else if (args[0].some(e => e.hasOwnProperty("status"))) {
            return args[0];
        } else {
            return new target(...args);
        }
    }
};
Envelope = new Proxy(Envelope, checkerEnvelope);
Packager = new Proxy(Packager, checkerPackager);
