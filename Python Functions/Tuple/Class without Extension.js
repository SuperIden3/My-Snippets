class Tuple {
  constructor(...items) {
    this.items = items
    Object.freeze(this.items)
  }
}
