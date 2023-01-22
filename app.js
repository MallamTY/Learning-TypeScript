"use strict";
// Implementing function using the custom type
let adder;
adder = (firstParam, secondParam) => {
    return firstParam + secondParam;
};
console.log(`The result of the adder function from function implementation using custom type is: ${adder(50, 545)}`);
let adderr;
adderr = (firstParams, secondParams) => {
    return firstParams + secondParams;
};
console.log(`The result of the adder function from function implementation using interface is: ${adderr(50, 50)}`);
let subFunc;
subFunc = (firstParam = 5, secondParam = 2) => {
    return firstParam - secondParam;
};
console.log(subFunc());
class Person {
    //middlename: string;
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        console.log(`Welcome to ${this.firstname} ${this.lastname} class implementation using optional parameters learning section`);
    }
}
const user = new Person('Temitayo', 'Sosanya');
user.greet();
