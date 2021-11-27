"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }
    describe() {
        console.log(`department ${this.id} :  ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    consoleEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
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
    addEmployee(name) {
        if (name === 'max') {
            return;
        }
        else {
            this.employees.push(name);
        }
    }
}
const it = new ITDepartment('Accounting', ['max']);
console.log(it.mostRecentEmployee);
it.addEmployee('max');
it.addEmployee('manu');
it.addEmployee('tom');
it.consoleEmployees();
it.describe();
it.recentEmployee = 'Janusz';
console.log(it);
