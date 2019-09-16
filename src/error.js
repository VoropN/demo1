'use strict';
export class Error {
  constructor() {
    this.reason = [];
  }

  get status() {
    if (this.reason.length > 0) {
      return 'failed';
    };
    return '';
  }
  
  add(reason) {
    this.reason.push(reason);
  }

  toString() {
    return JSON.stringify(this);
  }
}