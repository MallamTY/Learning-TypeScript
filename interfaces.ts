// interface Person {
//     firstName: string;
//     lastName: string;
//     age: number;

//     sayGreeting(message: string): void;
// }


// let user: Person;

// user = {
//     firstName: 'Temitayo',
//     lastName: 'Sosanya',
//     age: 21,

//     sayGreeting(message: string){
//         console.log(message + ' ' + 'from ' + this.firstName + ' ' + this.lastName);
        
//     }
// }

//user.sayGreeting('Welcome to my object interface learning section using Typescript')

interface Greetings {

    sayGreeting(message: string): void
}

interface User extends Greetings{
    readonly firstName: string;
    lastName: string;
}

class Person implements User {
    firstName: string;
    lastName: string;
    age: number
    constructor (age: number, lastName: string, firstName: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }

    sayGreeting(message: string): void {
        console.log('The message ' + `"${message}"` + ' ' + 'is from ' + this.firstName + ' ' + this.lastName);
        
    }
    
}


type data = User & Greetings;
let user: data;

user = new Person(23, 'Sosanya', 'Temitayo')
user.lastName = 'Nurudeen'

console.log(user.firstName + ' ' + user.lastName);

user.sayGreeting('Welcome to my class implementation of interface class .......')