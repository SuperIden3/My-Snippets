/*
  visit https://www.delftstack.com/howto/javascript/javascript-pick-random-from-array for more info.
  Credit to that person entirely.
  Website not mine btw.
*/
var pickRandom = function(array) {
  let random = Math.random() * array.length | 0;
  return array[random];
}
