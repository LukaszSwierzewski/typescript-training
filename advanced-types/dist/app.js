"use strict";
const e1 = {
    name: "joh",
    privileges: ['asd'],
    startDate: new Date()
};
let num = 1;
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
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
