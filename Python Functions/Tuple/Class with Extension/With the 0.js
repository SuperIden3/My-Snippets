class Tuple extends Array {
  constructor(...items) {
    super(items)
    this.items = this[0]
    Object.freeze(this.items)
    Object.freeze(this[0])
  }
}
