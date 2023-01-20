// interface Person {
//     firstName: string;
//     lastName: string;
//     age: number;
var Person = /** @class */ (function () {
    function Person(age, lastName, firstName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.sayGreeting = function (message) {
        console.log('The message ' + "\"".concat(message, "\"") + ' ' + 'is from ' + this.firstName + ' ' + this.lastName);
    };
    return Person;
}());
var user;
user = new Person(23, 'Sosanya', 'Temitayo');
user.lastName = 'Nurudeen';
console.log(user.firstName + ' ' + user.lastName);
user.sayGreeting('Welcome to my class implementation of interface class .......');
