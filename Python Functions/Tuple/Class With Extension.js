class Tuple extends Array {
  constructor(...items) {
    super(items)
    Object.freeze(this[0])
  }
}
