var Integer = class extends Number {
  constructor(num) {
    num = parseInt(super(num));
    this.num = num;
  }
}
var Float = class extends Number {
  constructor(num) {
    num = parseFloat(super(num));
    this.num = num;
  }
}
