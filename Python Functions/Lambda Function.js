var lambda = (equation,...vars) => {
    return eval(equation)
}
lambda.manual = {
    "how it works": "As long as you declare the variables, in sloppy mode/nom-strict mode, the function will work",
    "warning!": "This might not work in strict mode!"
}
