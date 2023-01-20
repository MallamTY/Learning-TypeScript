// Implementing function using the custom type
var adder;
adder = function (firstParam, secondParam) {
    return firstParam + secondParam;
};
console.log("The result of the adder function from function implementation using custom type is: ".concat(adder(50, 545)));
var adderr;
adderr = function (firstParams, secondParams) {
    return firstParams + secondParams;
};
console.log("The result of the adder function from function implementation using interface is: ".concat(adderr(50, 50)));
var subFunc;
subFunc = function (firstParam, secondParam) {
    if (firstParam === void 0) { firstParam = 5; }
    if (secondParam === void 0) { secondParam = 2; }
    return firstParam - secondParam;
};
console.log(subFunc());
var Person = /** @class */ (function () {
    //middlename: string;
    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Person.prototype.greet = function () {
        console.log("Welcome to ".concat(this.firstname, " ").concat(this.lastname, " class implementation using optional parameters learning section"));
    };
    return Person;
}());
var user = new Person('Temitayo', 'Sosanya');
user.greet();
