
class Department {

    private employees: string[] = [];
    kpi: string

    constructor (private name: string, public head_of_department: string, kpi: string){
        this.name = name;
        this.head_of_department =head_of_department;
        this.kpi = kpi;

    }

    description(this: Department) {
        console.log(`You are currently working with the ${this.name} department and ${this.head_of_department} is the HOD of your department`);
        
    }
    addEmployee(employee: string) {
        this.employees.push(employee)
    }
    displayEmployee() {
        this.employees.map(employee => {
            console.log(employee);
            
        });
        
    }
}

class ICT extends Department {
    constructor(public admins: string [], head_of_department: string, kpi: string) {
        super('ICT', head_of_department, kpi)
        this.admins = admins;
    }
}

const dept = new Department('HQ', 'John Oyegunle', 'To be the best brewery in the Opco')
const ict = new ICT(['MallamTY', 'Temitayo'], 'Temitayo Sosanya', 'To get our packets to reach their destination .....');
ict.description()



