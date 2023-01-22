"use strict";
function concatinator(firstInput, secondInput, converter) {
    if (typeof firstInput === 'number' && typeof secondInput === 'number' && converter !== 'as-a-string' || converter === 'as-a-number') {
        return +firstInput + +secondInput;
    }
    else {
        return firstInput.toString() + secondInput.toString();
    }
}
console.log(concatinator(56, '240', 'as-a-number'));
