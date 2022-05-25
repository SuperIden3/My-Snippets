class Tuple extends Array {
  constructor(...items) {
    super()
    this.items = items
    this.length = this["items"].length
    Object.freeze(this.items)
    Object.freeze(this.length)
  }
}
