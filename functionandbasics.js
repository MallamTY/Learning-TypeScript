"use strict";
function adder(num1, num2, showResult, resultPhrase) {
    const result = num1 + num2;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 45.6;
const pritnResult = true;
const resultString = `The result of ${number1} and ${number2} is: `;
console.log(adder(number1, number2, pritnResult, resultString));
