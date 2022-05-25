class Tuple extends Array {
  constructor(...items) {
    super(items)
    Object.freeze(super(items))
  }
}
