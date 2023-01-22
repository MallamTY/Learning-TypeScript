"use strict";
// interface Person {
//     firstName: string;
//     lastName: string;
//     age: number;
class Person {
    constructor(age, lastName, firstName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    sayGreeting(message) {
        console.log('The message ' + `"${message}"` + ' ' + 'is from ' + this.firstName + ' ' + this.lastName);
    }
}
let user;
user = new Person(23, 'Sosanya', 'Temitayo');
user.lastName = 'Nurudeen';
console.log(user.firstName + ' ' + user.lastName);
user.sayGreeting('Welcome to my class implementation of interface class .......');
