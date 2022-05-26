class Tuple extends Array {
  constructor(...items) {
    super()
    this.items = items
    Object.freeze(this.items)
  }
}
