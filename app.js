function add(firstInput, secondInput) {
    return firstInput + secondInput;
}
function display(value) {
    console.log("The result of the values in the function passed is ".concat(value));
}
//Creating a function type
var createdFunction; // function which returns a number
createdFunction = add;
display(createdFunction(45, 78));
//Callback function
function adderWithCallback(firstInput, secondInput, cb) {
    var result = firstInput + secondInput;
    return cb(result);
}
console.log(adderWithCallback(45, 70, function (result) {
    return "The result of the values supplied is: ".concat(result);
}));
//Uknown type
var userDetails;
var userName;
userDetails = 'MAllamTY';
if (typeof userDetails === 'string') {
    userName = userDetails;
}
//Never type
function errorGenerator(code, message) {
    throw {
        message: message,
        errorCode: code
    };
}
var result = errorGenerator(500, 'An error occured, please try again later !!!!!!!!!!!!!');
console.log(result);
