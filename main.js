import { Error } from './src/error.js';
import { board } from './src/task1/task1.js';
import { Packager } from './src/task2/task2.js';
import { sortTriangle } from './src/task3/task3.js';
import { palindrome } from './src/task4/task4.js';
import { HappyTickets } from './src/task5/task5.js';
import { numericalSequence } from './src/task6/task6.js';
import { fibonacci } from './src/task7/task7.js';

"use strict";
// menu and contents
let tasks = content.querySelectorAll('.task');
let navLink = nav.querySelectorAll('.nav-link');
nav.addEventListener('click', function (event) {
  event.preventDefault();
  let elem = event.target.closest('.nav-link');
  if (elem) {
    let numberElem;
    navLink.forEach((e, i) => (e === elem) ? numberElem = i : e.classList.remove('active'));
    elem.classList.add('active');
    tasks.forEach(e => e.setAttribute('hidden', true));
    if (tasks[numberElem].hasAttribute('hidden')) tasks[numberElem].removeAttribute('hidden');
  };
});

// label and input binding on initialization
let inputs = document.querySelectorAll('.form-control');
let label = document.querySelectorAll('label');
inputs.forEach((input, i) => {
  input.setAttribute('id', `taskInput${i}`);
  label[i].setAttribute('for', `taskInput${i}`);
})

// incoming control for number
document.querySelectorAll('.incoming-control').forEach((input) => {
  input.addEventListener('input', function (event) {
    if (event.target.classList.contains('string')) {
      event.target.value = event.target.value.replace(/[^\d]/g, '');
    } else {
      let value = Number(event.target.value.replace(/[^\d]/g, ''));
      event.target.value = Object.is(event.target.value, '') ? '' : value;
    }
  });
});

// function handler for input value
const funcHandlers = [
  board,
  (...args) => new Packager(...args).strategy,
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
  button.addEventListener('click', function (event) {
    let formGroups = [...task.querySelectorAll('.form-group')].map((formGroup) => {
      return [...formGroup.querySelectorAll('.form-control')].reduce((acc, input) => {
        Object.defineProperty(acc, [input.dataset.value], { get() { return input.value } });
        return acc;
      }, {});
    });
    let data = funcHandlers[i](...formGroups);
    if (data instanceof Error || data[0] instanceof Error) {
      console.log(data);
      result instanceof HTMLTextAreaElement ? result.value = '' : result.innerHTML = '';
    } else {
      result instanceof HTMLTextAreaElement ? result.value = data : result.innerHTML = data;
    };
  });
});

// add new Triangle
let numberTriangle = 1;
const endTriangle = 10;
let triangleHTML = task3.querySelector('.form-group');
const triangleClone = triangleHTML.cloneNode(true);
addTriangle.addEventListener('click', function (event) {
  numberTriangle += 1;
  let newTriangle = triangleClone.cloneNode(true);
  let inputs = newTriangle.querySelectorAll('.form-control');
  let label = newTriangle.querySelectorAll('label');
  let title = newTriangle.querySelector('.title');
  title.textContent = `Triangle ${numberTriangle}. Vertices:`;
  //binding inputs with labels for id
  inputs.forEach((input, i) => {
    input.setAttribute('id', `taskInputAdd${numberTriangle}${i}`);
    label[i].setAttribute('for', `taskInputAdd${numberTriangle}${i}`);
  });
  triangleGrid.appendChild(newTriangle);
  if (numberTriangle >= endTriangle) this.setAttribute('disabled', true);
});

// reset Triangle
let triangleGridClon = triangleGrid.cloneNode(true);
resetTriangle.addEventListener('click', function (event) {
  numberTriangle = 1;
  triangleGrid.innerHTML = triangleGridClon.innerHTML;
  addTriangle.removeAttribute('disabled')
});