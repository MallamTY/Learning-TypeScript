type outputType = 'as-a-number' | 'as-a-string';
type inputType = string | number;

function concatinator(
    firstInput:inputType,
    secondInput:inputType,
    converter: outputType
    ) {
    if (typeof firstInput === 'number' && typeof secondInput === 'number' && converter !== 'as-a-string' || converter === 'as-a-number') {
        return +firstInput + +secondInput;
    }
    else {
        return firstInput.toString() + secondInput.toString();
    }
}

console.log(concatinator(56, '240', 'as-a-number'))