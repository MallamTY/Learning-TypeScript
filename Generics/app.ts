// const names: Array<string> = [] // This code line is same thing as const name: string[] = []


// const promise: Promise<string>  = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const a = 5
//         if (a<3) {
//             resolve(`The outer promise has been resolved`)
//         }
//         else{
//             reject('The outer promise was rejected')
//         }

//     }, 1000)
// })

// promise.then((data) => {
//     const obtainedD = data.split(' ')
//     console.log(obtainedD); 
// })

// promise.catch((data) => {
//     const obtainedD = data.split(' ')
//     console.log(obtainedD);
    
// }) 


// Building my own generic

function merger<T extends object, U extends object> (objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const merged = merger({name: 'MallamTY'}, {age: 45})
console.log(merged);


//Another generic function

interface length {
    length: number;
}

function countAndDescribe<Ttype extends length>(element: Ttype){
    let description = `has no value in there`
    if (element.length === 0) {
        return `"${element}", ${description}`
    }
    else if (element.length === 1) {
         return description = `"${element}" has ${element.length} element`
    }
    else {
        return description = `"${element}" has ${element.length} elements`
    }

}


console.log(countAndDescribe(''))