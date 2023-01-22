"use strict";
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: "Temitayo",
//     age: 26,
//     hobbies: ["Dancing", "Swimming"],
//     role: [1, "Admin"]
// }
// console.log(`The developer's namae is ${person.name}`);
// let values: (string|number)[]     //TypeScript way of declaring an array
// values = ['Stirng', 5]
// person.role.push(2, "Student")
// console.log(person);
// person.role[1] = "Secretary"
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY_USER"] = 1] = "READ_ONLY_USER";
    Role[Role["SECRETARY"] = 2] = "SECRETARY";
})(Role || (Role = {}));
const person = {
    name: "Temitayo",
    age: 26,
    hobbies: ["Dancing", "Swimming"],
    role: Role[0]
};
console.log(`The developer's namae is ${person.name}`);
let values; //TypeScript way of declaring an array
values = ['Stirng', 5];
console.log(person);
if (person.role === 'ADMIN') {
    console.log(`The currently logged in user is ${person.role}`);
}
else {
    console.log(`The currently logged in user is ${person.role} which is executed from the else block of the condition code`);
}
