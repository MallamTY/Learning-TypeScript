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
function merger(objA, objB) {
    return Object.assign(objA, objB);
}
var merged = merger({ name: 'MallamTY' }, { age: 45 });
console.log(merged);
function countAndDescribe(element) {
    var description = "has no value in there";
    if (element.length === 0) {
        return "\"".concat(element, "\", ").concat(description);
    }
    else if (element.length === 1) {
        return description = "\"".concat(element, "\" has ").concat(element.length, " element");
    }
    else {
        return description = "\"".concat(element, "\" has ").concat(element.length, " elements");
    }
}
console.log(countAndDescribe(''));
