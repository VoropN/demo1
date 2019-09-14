export class Triangle {
  constructor({vertices = '', side1 = 0, side2 = 0, side3 = 0}) {
    this.vertices = vertices.toUpperCase();
    let valueArray = [side1, side2, side3];
    [...this.vertices].forEach((prop, i) => this[prop.toLowerCase()] = Number(valueArray[i]));
  }
  
  get square () {
    let arrayValue = [...this.vertices].map(prop => this[prop.toLowerCase()]);
    let halfPerimeter = arrayValue.reduce((acc, side) => acc + side) / 2;
    return Math.sqrt(arrayValue.reduce((acc, side) => acc * (halfPerimeter - side), halfPerimeter));
  }
}