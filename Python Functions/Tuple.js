class Tuple {
  constructor(...items) {
    this.items = items
    this.length = this.items.length
    Object.freeze(this.items)
  }
}
