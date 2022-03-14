function myFunc1(str, num) {
  str = new String(str);
  num = new Number(num);
  console.log([
    num,
    str
  ]);
}

function myFunc2(str, num) {
	str = new String(str);
  num = new Number(num);
  console.log({
    number: num,
    string: str
	});
}

function myFunc3(str, num) {
	str = new String(str);
  num = new Number(num);
  console.log(str);
	console.log(num);
}
