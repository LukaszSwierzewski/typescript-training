"use strict";
let add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(name) {
        this.name = name;
        this.age = 30;
        this.outputName = 'asd';
    }
    greet(phrase) {
        console.log(phrase);
    }
}
const tom = new Person('tom');
console.log(tom);
