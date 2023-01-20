
// Implementing function using the custom type

type addFunc = (firstParam: number, secondParam: number) => number;

let adder: addFunc;

adder = (firstParam, secondParam) => {
    return firstParam + secondParam;
}


console.log(`The result of the adder function from function implementation using custom type is: ${adder(50, 545)}`);

// Implmenting fucntion using an interface

interface addFucnt {
    (firstParam: number, secondParam: number): number;
}

let adderr: addFucnt;

adderr = (firstParams, secondParams) => {
    return firstParams + secondParams
}

console.log(`The result of the adder function from function implementation using interface is: ${adderr(50, 50)}`);


//Working with optional parameters

interface subFunc {

    (firstParam?: number, secondParam?: number): number
}

let subFunc: subFunc;

subFunc = (firstParam = 5, secondParam = 2) => {
    return firstParam - secondParam;
}

console.log(subFunc());


interface User {
    firstname: string;
    middlename?: string;
    lastname: string;
}

interface Greeter extends User {
    greet(message: string): void
}

class Person implements Greeter {
    firstname: string;
    lastname: string;
    //middlename: string;

    constructor (firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet(): void {
        console.log(`Welcome to ${this.firstname} ${this.lastname} class implementation using optional parameters learning section`);
        
    }
}

const user = new Person('Temitayo', 'Sosanya')
user.greet()