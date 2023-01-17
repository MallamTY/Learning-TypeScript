var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(name, head_of_department, kpi) {
        this.name = name;
        this.head_of_department = head_of_department;
        this.employees = [];
        this.name = name;
        this.head_of_department = head_of_department;
        this.kpi = kpi;
    }
    Department.prototype.description = function () {
        console.log("You are currently working with the ".concat(this.name, " department and ").concat(this.head_of_department, " is the HOD of your department"));
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.displayEmployee = function () {
        this.employees.map(function (employee) {
            console.log(employee);
        });
    };
    return Department;
}());
var ICT = /** @class */ (function (_super) {
    __extends(ICT, _super);
    function ICT(admins, head_of_department, kpi) {
        var _this = _super.call(this, 'ICT', head_of_department, kpi) || this;
        _this.admins = admins;
        _this.admins = admins;
        return _this;
    }
    return ICT;
}(Department));
var Accouting = /** @class */ (function (_super) {
    __extends(Accouting, _super);
    function Accouting(kpi) {
        var _this = _super.call(this, 'Accounting', 'Temitayo Sosanya', kpi) || this;
        _this.report = [];
        _this.kpi = kpi;
        return _this;
    }
    Object.defineProperty(Accouting.prototype, "mostRecentReport", {
        get: function () {
            if (this.latestReport) {
                return this.latestReport;
            }
            throw Error('No report found !!!!!!!!!!');
        },
        set: function (content) {
            if (this.report.length < 3) {
                this.addReport(content);
            }
            else {
                throw Error('You already have more than 3 reports in your database');
            }
        },
        enumerable: false,
        configurable: true
    });
    Accouting.prototype.addReport = function (content) {
        this.report.push(content);
        this.latestReport = this.report[0];
    };
    Accouting.prototype.genReport = function () {
        console.log(this.report);
    };
    Accouting.prototype.genLastReport = function () {
        console.log(this.latestReport);
    };
    Accouting.prototype.deletLastReport = function () {
        if (this.report.length !== 0) {
            this.report.pop();
            console.log('Last report successfully removed from the report list');
        }
        else {
            console.log('Your report list is currently empty !!!!!!!!!!!!');
        }
    };
    Accouting.yearOfEstablishment = 2007;
    return Accouting;
}(Department));
// const dept = new Department('HQ', 'John Oyegunle', 'To be the best brewery in the Opco')
// const ict = new ICT(['MallamTY', 'Temitayo'], 'Temitayo Sosanya', 'To get our packets to reach their destination .....');
// ict.description()
var accounting = new Accouting('To deliver a world class accouting servie');
accounting.addReport('We delivered the best 3 accouting service in the last 3 months');
accounting.addReport('We won the best accouting firm for the year 2015');
accounting.mostRecentReport = ('We won the best accouting firm for the year 2016');
console.log(Accouting.yearOfEstablishment);
console.log(accounting);
accounting.deletLastReport();
// console.log(accounting);
