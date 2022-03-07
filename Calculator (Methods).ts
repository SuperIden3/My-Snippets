var calculate = {
    add: function (num1, num2) {
        console.log("> " + num1 + ' + ' + num2 + ' = ' + (num1 + num2));
    },
    subtract: function (num1, num2) {
        console.log("> " + num1 + ' - ' + num2 + ' = ' + (num1 - num2));
    },
    multiply: function (num1, num2) {
        console.log("> " + num1 + ' × ' + num2 + ' = ' + (num1 * num2));
    },
    divide: function (num1, num2) {
        console.log("> " + num1 + ' ÷ ' + num2 + ' = ' + (num1 / num2));
    },
    power: function (base, exponent) {
        console.log("> " + base + ' ^ ' + exponent + ' = ' + (base ** exponent));
    },
    remainder: function (num1, num2) {
        console.log("> " + num1 + '%' + num2 + ' = ' + (num1 % num2));
    }
}
