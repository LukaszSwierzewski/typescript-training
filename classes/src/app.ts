abstract class Department {
    static year = 2000
    protected employees: string[] = [];
    constructor(public name: string, protected readonly id: string) {
    }

    abstract describe (this: Department): void;
    addEmployee (employee: string) {
        this.employees.push(employee)
    }
    static createEmployee(name: string) {
        return { name }
    }
    consoleEmployees () {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    private lastEmployee: string;
    private static instance: ITDepartment
    get mostRecentEmployee() {
        if (this.lastEmployee) {
            return this.lastEmployee
        }
        throw new Error('no report found')
    }
    set recentEmployee(value: string) {
        if (!value) {
            throw new Error('please pass valid value')
        } 
        this.addEmployee(value)
    }
    private budget: [string, number] = ["Overall", 100] // TUPLES 
    private constructor(id: string, public admins: string[]) {
        super(id, "IT")
        this.admins = admins
        this.budget
        this.lastEmployee = admins[0]
    }
    static getInstance () {
        if (ITDepartment.instance) {
            return this.instance
        }
        this.instance = new ITDepartment('d2', ['ola'])
        return this.instance
    }
    describe () {
        console.log(`described IT: ${this.id}`)
    }
    addEmployee(name: string) {
        if (name === 'max') {
            return
        } else {
            this.employees.push(name)
        }
    }
}
console.log(Department.year)
const empoloyee1 = Department.createEmployee('lukasz')
console.log(empoloyee1)
const it = ITDepartment.getInstance()

console.log(it.mostRecentEmployee)
it.addEmployee('max')
it.describe()
it.addEmployee('manu')
it.addEmployee('tom')
it.consoleEmployees()
it.describe()
it.recentEmployee = 'Janusz'


console.log(it)
