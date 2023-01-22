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
    description() {
        console.log(`You are currently working with the ${this.name} department and ${this.head_of_department} is the HOD of your department`);
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
    constructor(admins, head_of_department, kpi) {
        super('ICT', head_of_department, kpi);
        this.admins = admins;
        this.admins = admins;
    }
}
class Accouting extends Department {
    get mostRecentReport() {
        if (this.latestReport) {
            return this.latestReport;
        }
        throw Error('No report found !!!!!!!!!!');
    }
    set mostRecentReport(content) {
        if (this.report.length < 3) {
            this.addReport(content);
        }
        else {
            throw Error('You already have more than 3 reports in your database');
        }
    }
    constructor(kpi) {
        super('Accounting', 'Temitayo Sosanya', kpi);
        this.report = [];
        this.kpi = kpi;
    }
    addReport(content) {
        this.report.push(content);
        this.latestReport = this.report[0];
    }
    genReport() {
        console.log(this.report);
    }
    genLastReport() {
        console.log(this.latestReport);
    }
    deletLastReport() {
        if (this.report.length !== 0) {
            this.report.pop();
            console.log('Last report successfully removed from the report list');
        }
        else {
            console.log('Your report list is currently empty !!!!!!!!!!!!');
        }
    }
}
Accouting.yearOfEstablishment = 2007;
// const dept = new Department('HQ', 'John Oyegunle', 'To be the best brewery in the Opco')
// const ict = new ICT(['MallamTY', 'Temitayo'], 'Temitayo Sosanya', 'To get our packets to reach their destination .....');
// ict.description()
const accounting = new Accouting('To deliver a world class accouting servie');
accounting.addReport('We delivered the best 3 accouting service in the last 3 months');
accounting.addReport('We won the best accouting firm for the year 2015');
accounting.mostRecentReport = ('We won the best accouting firm for the year 2016');
console.log(Accouting.yearOfEstablishment);
console.log(accounting);
accounting.deletLastReport();
// console.log(accounting);
