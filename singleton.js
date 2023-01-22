"use strict";
class Department {
    constructor(name, head_of_department, kpi) {
        this.name = name;
        this.head_of_department = head_of_department;
        this.employees = [];
        this.name = name;
        this.head_of_department = head_of_department;
        this.kpi = kpi;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    displayEmployee() {
        this.employees.map(employee => {
            console.log(employee);
        });
    }
}
class ICT extends Department {
    constructor(name, head_of_deparmtent, kpi) {
        super(name, head_of_deparmtent, kpi);
        this.report = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ICT('ICT', 'Temitayo Sosanya', 'To be the best department posible');
        return this.instance;
    }
    description() {
        console.log('This department is responsible for delivering accounting services to firms around the world .....');
    }
}
// const ict = new ICT('ICT', 'Temitayo Sosanya', 'To deliver quality accounting services world wide')
// ict.description();
const ict = ICT.getInstance();
const ict2 = ICT.getInstance();
console.log(ict);
console.log(ict2);
