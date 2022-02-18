/*
  visit https://www.delftstack.com/howto/javascript/javascript-pick-random-from-array for more info.
  Website not mine btw.
*/
var pickRandom = function(arrayOrObject) {
  var random = Math.random() * arrayOrObject.length | 0;
  return arrayOrObject[random]
}
