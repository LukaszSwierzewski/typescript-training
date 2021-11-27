class Department {
    protected employees: string[] = [];

    constructor(public name: string, private readonly id: string) {
    }

    describe (this: Department) {
        console.log(`department ${this.id} :  ${this.name}`)
    }
    addEmployee (employee: string) {
        this.employees.push(employee)
    }
    consoleEmployees () {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    private lastEmployee: string;

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
    constructor(id: string, public admins: string[]) {
        super(id, "IT")
        this.admins = admins
        this.budget
        this.lastEmployee = admins[0]

    }
    addEmployee(name: string) {
        if (name === 'max') {
            return
        } else {
            this.employees.push(name)
        }
    }
}


const it = new ITDepartment('Accounting', ['max'])

console.log(it.mostRecentEmployee)
it.addEmployee('max')
it.addEmployee('manu')
it.addEmployee('tom')
it.consoleEmployees()
it.describe()
it.recentEmployee = 'Janusz'


console.log(it)
