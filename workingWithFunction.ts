function add(firstInput:number, secondInput:number): number  { //function returns a number (Integer) value
    return firstInput + secondInput
}

function display(value:number):void { //Example of a function that return void since it doesn't have a return statement
    console.log(`The result of the values in the function passed is ${value}`);
}


//Creating a function type

let createdFunction: (first: number, second: number) => number; // function which returns a number
createdFunction = add;

display(createdFunction(45,78))


//Callback function

function adderWithCallback(firstInput:number, secondInput:number, cb:(number:number) => string) {
    const result = firstInput + secondInput;
    return cb(result)
}

console.log(adderWithCallback(45,70, (result) => {
    return `The result of the values supplied is: ${result}`
}))



//Uknown type

let userDetails: unknown;
let userName: string;

userDetails = 'MAllamTY';

if (typeof userDetails === 'string') {
    userName = userDetails;
}



//Never type

function errorGenerator(code: number, message: string): never {
    throw {
        message: message,
        errorCode: code
    }
}

const result = errorGenerator(500 ,'An error occured, please try again later !!!!!!!!!!!!!')
console.log(result);
