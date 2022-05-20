var average = (array: number[]): any => {
  var sum = 0, count = 0
  for(var i of array) {
    sum += i
  }
  for(var j = 0; j < array.length; j++) {
    count++
  }
  return `Average (${sum} / ${count}): ${sum / count}`
}
