import { checker } from './checkerTriangle.js';
import { Triangle } from './triangle.js';

"use strict";
export const sortTriangle = function sortTriangleFunc(...dataArray) {
  let triangles = [...dataArray].map((data) => new Triangle(data));
  let errorArray = [];
  triangles.forEach((triagnle) => {
    let error = checker(triagnle);
    if (error.status) return errorArray.push(error);
  });
  if (errorArray.length > 0) return errorArray;
  return JSON.stringify(triangles.sort((first, second) => second.square - first.square).map(e => e.vertices));
}