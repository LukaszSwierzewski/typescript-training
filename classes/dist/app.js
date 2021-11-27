"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    static createEmployee(name) {
        return { name };
    }
    consoleEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.year = 2000;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
        this.budget = ["Overall", 100]; // TUPLES 
        this.admins = admins;
        this.budget;
        this.lastEmployee = admins[0];
    }
    get mostRecentEmployee() {
        if (this.lastEmployee) {
            return this.lastEmployee;
        }
        throw new Error('no report found');
    }
    set recentEmployee(value) {
        if (!value) {
            throw new Error('please pass valid value');
        }
        this.addEmployee(value);
    }
    static getInstance() {
        if (ITDepartment.instance) {
            return this.instance;
        }
        this.instance = new ITDepartment('d2', ['ola']);
        return this.instance;
    }
    describe() {
        console.log(`described IT: ${this.id}`);
    }
    addEmployee(name) {
        if (name === 'max') {
            return;
        }
        else {
            this.employees.push(name);
        }
    }
}
console.log(Department.year);
const empoloyee1 = Department.createEmployee('lukasz');
console.log(empoloyee1);
const it = ITDepartment.getInstance();
console.log(it.mostRecentEmployee);
it.addEmployee('max');
it.describe();
it.addEmployee('manu');
it.addEmployee('tom');
it.consoleEmployees();
it.describe();
it.recentEmployee = 'Janusz';
console.log(it);
