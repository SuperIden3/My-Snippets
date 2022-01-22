function Add(num1, num2) {
    document.write(num1 + (' + ' + num2));
    document.write(num1 + num2);
}
function Subtract(num1, num2) {
    document.write(num1 + (' - ' + num2));
    document.write(num1 - num2);
}
function Multiply(num1, num2) {
    document.write(num1 + (' \xD7 ' + num2));
    document.write(num1 * num2);
}
function Divide(num1, num2) {
    document.write(num1 + (' \xF7 ' + num2));
    document.write(num1 / num2);
}
//If you want to find the remainder of something, you can use this function.
function FindRemainder(num1, num2) {
    document.write('Find the remainder of ' + (num1 + (' and ' + num2)));
    document.write(num1 % num2);
}
let RulesOfMath = [
    'Parenthesis',
    'Exponents',
    'Multiplication',
    'Division',
    'Addition',
    'Subtraction'
];
function Rules() {
    for (var rules of RulesOfMath) {
        document.write(rules);
    }
}
document.write(Rules());
