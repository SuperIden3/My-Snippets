class Tuple {
  constructor(...items) {
    this.items = items
    this.length = {
        count: this.items.length,
        "index count": this.items.length - 1
    }
    Object.freeze(this.items)
  }
}
