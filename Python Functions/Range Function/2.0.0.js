var range = (start, end) => {
  switch (start !== end && (typeof start && typeof end) === "number") {
    case true:
      let array = []
      switch (start < end) {
        case true:
          for (let i = start; i <= end; i++) {
            array.push(i)
          }
          break
        case false:
          for (let j = start; j >= end; j--) {
            array.push(j)
          }
      }
      return array
      break
    case false:
      throw new Error("Arguments can't be same and cannot be same number.")
  }
}
