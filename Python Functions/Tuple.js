class Tuple {
  constructor(...items) {
    this.items = items
    this.length = items.length
    items = undefined
  }
}
