var Integer = class extends Number {
	constructor(num) {
		var number = Math.floor(super(num));
		this["original number"] = num
		this.num = number;
	}
  number() {
    return this.num
  }
}
var Float = class extends Number {
	constructor(num) {
		num = parseFloat(super(num));
		this.num = num;
	}
  number() {
    return this.num
  }
}
