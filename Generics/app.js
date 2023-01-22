"use strict";
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
const merged = merger({ name: 'MallamTY', hobbies: ['Playing Football', 'Writing Codes', 'Politics'] }, { age: 45 });
console.log(merged);
function countAndDescribe(element) {
    let description = `has no value in there`;
    if (element.length === 0) {
        return `"${element}", ${description}`;
    }
    else if (element.length === 1) {
        return description = `"${element}" has ${element.length} element`;
    }
    else {
        return description = `"${element}" has ${element.length} elements`;
    }
}
// keyof contstraint
function getKeyValue(obj, key) {
    return obj[key];
}
console.log(getKeyValue({ name: 'MallamTY', age: 23 }, 'name'));
//console.log(countAndDescribe(''))
// Generic type with class
class dataStorage {
    constructor() {
        this.data = [];
    }
    get obtainValue() {
        return this.getItems();
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        let index = this.data.indexOf(item);
        console.log(index);
        return this.data.splice(index, 1);
    }
    getItems() {
        return this.data;
    }
}
const textStorage = new dataStorage();
textStorage.addItem('MallamTY');
textStorage.addItem('Temitayo');
textStorage.addItem('Sosanya');
textStorage.addItem('Idris');
console.log(textStorage.removeItem('Temitayo'));
console.log(textStorage.getItems());
const numberStorage = new dataStorage();
numberStorage.addItem(34);
numberStorage.addItem(67);
numberStorage.addItem(89);
numberStorage.addItem(23);
numberStorage.addItem(900);
const number_String_Storage = new dataStorage();
number_String_Storage.addItem('Welcome');
number_String_Storage.addItem('to');
number_String_Storage.addItem('the');
number_String_Storage.addItem('number');
number_String_Storage.addItem(50);
number_String_Storage.addItem('class');
console.log(number_String_Storage.obtainValue);
function createCourse(title, description, completionDate) {
    let course = {};
    course.title = title;
    course.completionDate = completionDate;
    course.description = description;
    return course;
}
// Readonly
const products = ['Books', 'Pen', 'Groceries', 'Soft drinks'];
console.log(products[3]);
