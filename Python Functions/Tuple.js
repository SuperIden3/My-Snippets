class Tuple {
  constructor(...items) {
    this.items = items
    this.length = {
        "items": this.items.length,
        "this": this.length
    }
    Object.freeze(this.items)
  }
}
