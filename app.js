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
var dept = new Department('HQ', 'John Oyegunle', 'To be the best brewery in the Opco');
var ict = new ICT(['MallamTY', 'Temitayo'], 'Temitayo Sosanya', 'To get our packets to reach their destination .....');
ict.description();
