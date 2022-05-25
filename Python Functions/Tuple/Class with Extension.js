class Tuple extends Array {
  constructor(...items) {
    super(items)
    this.items = this[0]
    this[0] = undefined
    this.length = this[0].length
    Object.freeze(this.items)
    Object.freeze(this.length)
  }
}
