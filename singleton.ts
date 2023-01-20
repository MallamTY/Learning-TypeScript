abstract class Department {

    private employees: string[] = [];
    kpi: string

    constructor (protected name: string, public head_of_department: string, kpi: string){
        this.name = name;
        this.head_of_department = head_of_department;
        this.kpi = kpi;

    }

    abstract description(): void;
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
    report: string [] = [];
    private static instance: ICT
    constructor (name: string, head_of_deparmtent: string, kpi: string){
        super(name, head_of_deparmtent, kpi)
    }

    static getInstance(){
        if(this.instance){
            return this.instance
        }
        this.instance = new ICT('ICT', 'Temitayo Sosanya', 'To be the best department posible')
        return this.instance;
    }

    description(): void {
        console.log('This department is responsible for delivering accounting services to firms around the world .....');
        
    }
}


// const ict = new ICT('ICT', 'Temitayo Sosanya', 'To deliver quality accounting services world wide')
// ict.description();
const ict = ICT.getInstance();
const ict2 = ICT.getInstance();
console.log(ict);
console.log(ict2);



