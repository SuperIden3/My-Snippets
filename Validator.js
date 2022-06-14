const Validator = class {
  constructor(argument) {
    this.argument = argument;
  }
  isString() {
    if (this.argument === this.argument.toString()) {
      return true;
    } else {
      return false;
    }
  }
  isNumber() {
    if (typeof this.argument === "number") {
      return true;
    } else {
      return false;
    }
  }
  isBoolean() {
    if (typeof this.argument === "boolean") {
      return true;
    } else {
      return false;
    }
  }
  isBigInt() {
    if(typeof this.argument === "bigint") {
      return true
    } else {
      return false
    }
  }
  isArray() {
    if(Array.isArray(this.argument)) {
      return true
    } else {
      return false
    }
  }
  isObject() {
    if(typeof this.argument === "object") {
      return true
    } else {
      return false
    }
  }
  isUndefined() {
    if(this.argument === undefined) {
       return true
    } else {
      return false
    }
  }
  isNull() {
    if(this.argument === null) {
      return true
    } else {
      return false
    }
  }
  isSymbol() {
    if(typeof this.argument === "symbol") {
      return true
    } else {
      return false
    }
  }
};
