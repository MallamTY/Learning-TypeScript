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
var merged = merger({ name: 'MallamTY', hobbies: ['Playing Football', 'Writing Codes', 'Politics'] }, { age: 45 });
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
// keyof contstraint
function getKeyValue(obj, key) {
    return obj[key];
}
console.log(getKeyValue({ name: 'MallamTY', age: 23 }, 'name'));
//console.log(countAndDescribe(''))
// Generic type with class
var dataStorage = /** @class */ (function () {
    function dataStorage() {
        this.data = [];
    }
    Object.defineProperty(dataStorage.prototype, "obtainValue", {
        get: function () {
            return this.getItems();
        },
        enumerable: false,
        configurable: true
    });
    dataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    dataStorage.prototype.removeItem = function (item) {
        var index = this.data.indexOf(item);
        console.log(index);
        return this.data.splice(index, 1);
    };
    dataStorage.prototype.getItems = function () {
        return this.data;
    };
    return dataStorage;
}());
var textStorage = new dataStorage();
textStorage.addItem('MallamTY');
textStorage.addItem('Temitayo');
textStorage.addItem('Sosanya');
textStorage.addItem('Idris');
console.log(textStorage.removeItem('Temitayo'));
console.log(textStorage.getItems());
var numberStorage = new dataStorage();
numberStorage.addItem(34);
numberStorage.addItem(67);
numberStorage.addItem(89);
numberStorage.addItem(23);
numberStorage.addItem(900);
var number_String_Storage = new dataStorage();
number_String_Storage.addItem('Welcome');
number_String_Storage.addItem('to');
number_String_Storage.addItem('the');
number_String_Storage.addItem('number');
number_String_Storage.addItem(50);
number_String_Storage.addItem('class');
console.log(number_String_Storage.obtainValue);
var objectStorage = new dataStorage();
objectStorage.addItem({ name: 'Temitayo' });
objectStorage.addItem({ name: 'Sosanya' });
objectStorage.addItem({ name: 'Idris Sosanya' });
console.log(objectStorage.removeItem({ name: 'Temitayo' }));
