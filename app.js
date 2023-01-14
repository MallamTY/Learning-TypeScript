function concationator(firstInput, secondInput) {
    if (typeof firstInput === 'number' && typeof secondInput === 'number') {
        return firstInput + secondInput;
    }
    else {
        return firstInput.toString() + secondInput.toString();
    }
}
console.log(concationator(56, 24));
