function add(num1, num2) {
    document.write(num1 + (' + ' + num2));
    document.write(' = ' + num1 + num2);
}
function subtract(num1, num2) {
    document.write(num1 + (' - ' + num2));
    document.write(' = ' + num1 - num2);
}
function multiply(num1, num2) {
    document.write(num1 + (' \xD7 ' + num2));
    document.write(' = ' + num1 * num2);
}
function divide(num1, num2) {
    document.write(num1 + (' \xF7 ' + num2));
    document.write(' = ' + num1 / num2);
}
//If you want to find the remainder of something, you can use this function.
function findRemainder(num1, num2) {
    document.write(num1 + '% of ' + num2);
    document.write(' = ' + num1 % num2);
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
/*End of code*/
