"use strict";
export function sortTriangle  (arrayTriangle) {
    if (!arrayTriangle) return '';
    let error = arrayTriangle.filter(e => e.hasOwnProperty("status") || isNaN(e.square) ? true : false);
        error = error.map(e => e.hasOwnProperty("status") ? e : ({ status: 'failed', reason: ['This figure is not a Triangle!', e] }));
    return error.length ? error : arrayTriangle.sort((first, second) => second.square - first.square).map(e => e.vertices);
}

export class Triangle {
    constructor(data) {
        this.vertices = data.vertices;
        [...this.vertices].forEach(prop => this[prop.toLowerCase()] = Number(data[prop.toLowerCase()]));
    }
    get square () {
        let arrayValue = [...this.vertices].map(prop => this[prop.toLowerCase()]);
        let halfPerimeter = arrayValue.reduce((acc, side) => acc + side) / 2;
        return Math.sqrt(arrayValue.reduce((acc, side) => acc * (halfPerimeter - side), halfPerimeter));
    }
}

const checkerTriangle = {
    construct(target, args) {
        let error = {
            status: '',
            reason: []
        };
        let vertices = args[0] && args[0].vertices;
        let side = vertices && [...vertices].map(prop => args[0][prop.toLowerCase()]);
        switch (true) {
            case (!args.length || args[0].length < 1):
                error.reason.push('Not enough property in Triangle!', args[0]);
                break;
            case vertices === null || vertices === undefined:
                error.reason.push('Vertices not set', args[0]);
                break;
            case vertices.length != 3 :
                error.reason.push('Inncorect vertices of Triangle', args[0].vertices);
                break;
            case !side:
                error.reason.push('Sides not set!', args[0]);
                break;
            case side.length != 3:
                error.reason.push('Inncorect side of Triangle!', args[0]);
                break;
            case side.some(e => isNaN(e) ||  Object.is(e, '') || typeof e === "object" ):
                error.reason.push('Incorrect one or more side of Triangle!', args[0]);
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
Triangle = new Proxy(Triangle, checkerTriangle);