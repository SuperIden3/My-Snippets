class Tuple extends Array {
  constructor(...items) {
    super(items)
    this.items = this[0]
    this.length = this[0].length
    Object.freeze(this.items)
    Object.freeze(this.length)
  }
}
