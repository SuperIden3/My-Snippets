class Tuple extends Array {
  constructor(...items) {
    super(items)
    this.items = items
    this.length = new Map([["count", this.items.length], ["index count", this.items.length - 1]])
    Object.freeze(this.items)
  }
}
