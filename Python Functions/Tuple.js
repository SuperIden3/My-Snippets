class Tuple {
  constructor(...items) {
    this.items = items
    this.length = items.length
    Object.freeze(this.items)
  }
}
