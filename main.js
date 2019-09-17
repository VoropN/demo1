import { Error } from './src/error.js';
import { getFormGroups, setOnlyNumbersRestriction } from './src/formHelpers.js';
import { board } from './src/task1/task1.js';
import { Packager } from './src/task2/task2.js';
import { sortTriangle } from './src/task3/task3.js';
import { palindrome } from './src/task4/task4.js';
import { HappyTickets } from './src/task5/task5.js';
import { numericalSequence } from './src/task6/task6.js';
import { fibonacci } from './src/task7/task7.js';

'use strict';
// binding menu and contents
let tasks = content.querySelectorAll('.task');
let navLink = nav.querySelectorAll('.nav-link');
nav.addEventListener('click', function (event) {
  event.preventDefault();
  error.innerHTML = '';
  let elem = event.target.closest('.nav-link');
  if (elem) {
    let numberElem;
    navLink.forEach((e, i) => (e === elem) ? numberElem = i : e.classList.remove('active'));
    elem.classList.add('active');
    tasks.forEach(e => e.setAttribute('hidden', true));
    if (tasks[numberElem].hasAttribute('hidden')) tasks[numberElem].removeAttribute('hidden');
  };
});

// control for number
document.querySelectorAll('.input-number').forEach((input) => input.addEventListener('input', setOnlyNumbersRestriction));

// function handler for input value
const funcHandlers = [
  board,
  (args) => new Packager(args).strategy,
  sortTriangle,
  palindrome,
  (args) => new HappyTickets(args).result,
  numericalSequence,
  fibonacci
];

// buttons, inputs, funcHandlers binding
tasks.forEach((task, i) => {
  let result = task.querySelector('.result');
  let button = task.querySelector('.button-getData');
  let formGroups = getFormGroups(task);
  let isDynamic = task.classList.contains('dynamic-collection');
  button.addEventListener('click', function (event) {
    if (isDynamic) {
      formGroups = getFormGroups(task);
    };
    let data = funcHandlers[i](formGroups);
    if (data instanceof Error || data[0] instanceof Error) {
      error.innerHTML = 'Error: ' + data.toString();
      result instanceof HTMLTextAreaElement ? result.value = '' : result.innerHTML = '';
    } else {
      error.innerHTML = '';
      result instanceof HTMLTextAreaElement ? result.value = data : result.innerHTML = data;
    };
  });
});

// add new Triangle
let numberTriangle = 1;
const endTriangle = 10;
const triangleClone = task3.querySelector('.form-group').cloneNode(true);
addTriangle.addEventListener('click', function (event) {
  if (++numberTriangle >= endTriangle) {
    this.setAttribute('disabled', true);
  };
  let newTriagle = triangleClone.cloneNode(true);
  newTriagle.querySelector('.title').setAttribute('placeholder', `Vertices${numberTriangle}`);
  triangleGrid.appendChild(newTriagle);
});

// reset Triangle
let triangleGridClon = triangleGrid.cloneNode(true);
resetTriangle.addEventListener('click', function (event) {
  numberTriangle = 1;
  triangleGrid.innerHTML = triangleGridClon.innerHTML;
  addTriangle.removeAttribute('disabled');
});