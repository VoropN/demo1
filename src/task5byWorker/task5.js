"use strict";

export function happyTickets(context) {
  try {
    error.innerHTML = '';
    checker(context);
  } catch (e) {
    result_TiketsArray.innerHTML = ``;
    error.innerHTML = `<strong>Error in Happy Tickets: </strong><span>${e}</span>`;
    return;
  };

  let createArray = new Worker('./src/task5byWorker/createTicketsArrayWorker.js');
  createArray.postMessage(context);
  createArray.onmessage = handler;
  result_TiketsArray.innerHTML = `<div id='message'><strong>getting tikets array...</strong></div>`;
}

function handler(msg) {
  let startEndLength, evenOddLength;
  let ticketsArray = msg.data;
  result_TiketsArray.innerHTML = `
    <div class="result" id='result_equalSumStartEnd'>
      <strong>Tickets count by simple method: </strong>
      <span>waiting...</span>
    </div>
    <div class="result" id='result_equalSumEvenOdd'>
      <strong>Tickets count by difficult method: </strong>
      <span>waiting...</span>
    </div>
    <div class="result" id='result_winner'></div>`;

  let equalSumStartEndArray = new Worker('./src/task5byWorker/equalSumStartEndWorker.js');
  equalSumStartEndArray.postMessage(ticketsArray);
  equalSumStartEndArray.onmessage = array => {
    startEndLength = array.data.length;
    result_equalSumStartEnd.innerHTML = `
      <div><strong>Tickets count by simple method: </strong>
        <span>${startEndLength}</span>
      </div>`;
    checkWinner(startEndLength, evenOddLength);
  }

  let equalSumEvenOddArray = new Worker('./src/task5byWorker/equalSumEvenOddWorker.js');
  equalSumEvenOddArray.postMessage(ticketsArray);
  equalSumEvenOddArray.onmessage = array => {
    evenOddLength = array.data.length;
    result_equalSumEvenOdd.innerHTML = `
    <div><strong>Tickets count by difficult method: </strong>
      <span>${evenOddLength}</span>
    </div>`;
    checkWinner(startEndLength, evenOddLength);
  }

}

function checkWinner(startEndLength, evenOddLength) {
  if (startEndLength !== undefined && evenOddLength !== undefined) {
    if (startEndLength > evenOddLength) {
      result_winner.innerHTML = `
      <strong>Metod winner: </strong>
        <span>simple!</span>
      </div>`;
    } else if (startEndLength < evenOddLength) {
      result_winner.innerHTML = `
      <strong>Metod winner: </strong>
        <span>difficult!</span>
      </div>`;
    } else {
      result_winner.innerHTML = `
      <strong>Metod winner: </strong>
        <span>no winner!</span>
      </div>`;
    }
  }
}

class Context {
  constructor(data) {
    this.min = data.min;
    this.max = data.max;
  }
}

getDataHappyTickets.addEventListener('click', function () {
  happyTickets(new Context({ min: min.value, max: max.value }))
});

function checker(context) {
  if (String(context.min).length < 1 || String(context.max).length < 6) {
    throw `incomplete data`;
  } else {
      switch (true) {
          case context.min === undefined ||  context.max === undefined: 
            throw ``;
          case isNaN(context.min) ||  isNaN(context.max):
              throw `context hasn't property min`;
          case !context.hasOwnProperty('max'):
              throw `context hasn't property max`;
          case context.min < 0 || context.max < 0:
              throw `filds min or max cannot be negative value`;
          case String(context.max).length > 8:
              throw `too big value!`;
          case context.max - context.min < 1:
              throw `value max need to be more that min`;
          default: break;
      };
  };
}