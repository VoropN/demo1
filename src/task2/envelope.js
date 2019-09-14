export class Envelope {
  constructor({ width = 0, height = 0, name }) {
    this.width = Number(width);
    this.height = Number(height);
    this.name = name;
  }

  get diagonal() {
    return Math.sqrt((this.width ** 2) + (this.height ** 2));
  }
  
  get comparison() {
    if (this.width > this.height) {
      return { width: this.width, height: this.height };
    } else {
      return { width: this.height, height: this.width };
    }
  }
}