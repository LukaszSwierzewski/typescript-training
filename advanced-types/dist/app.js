"use strict";
var _a;
const e1 = {
    name: "joh",
    privileges: ['asd'],
    startDate: new Date()
};
function printEmployee(emp) {
    console.log('name:' + emp.name);
    if ('privileges' in emp) {
        console.log('privilges ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('startdate ' + emp.startDate);
    }
}
class Car {
    drive() {
        console.log('driving');
    }
}
class Truck {
    drive() {
        console.log('driving');
    }
    loadCargo(amount) {
        console.log('laaoding cargo' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(123);
    }
}
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('animal speed:' + speed);
}
const golomp = {
    flyingSpeed: 100,
    type: "bird"
};
const userInput = document.getElementById('user-input');
const userInputSecond = document.getElementById('user-input');
userInput.value = "hi there";
userInputSecond.value = 'second value';
const errorBag = {
    email: 'not valid',
    id: '1',
    'asd_asd': 'asdasd'
};
let num = 1;
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add(1, 50);
console.log(result);
const stringResult = add('lukasz ', 1);
console.log(stringResult.split(' '));
// optional chaining
const fetched = {
    id: 'u1',
    name: 'lukasz',
    job: {
        title: 'ceo',
        description: 'my company'
    }
};
console.log((_a = fetched === null || fetched === void 0 ? void 0 : fetched.job) === null || _a === void 0 ? void 0 : _a.title);
let userInputThird = undefined;
const storedData = userInputThird !== null && userInputThird !== void 0 ? userInputThird : "DEFAULT";
console.log(storedData);
