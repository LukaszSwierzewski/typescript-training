type Admin = {
    name: string;
    privileges: string[]
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
    name: "joh",
    privileges: ['asd'],
    startDate: new Date()
}

// intersection -> czyli czesc wspolna 
type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric

let num: Universal = 1

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b;
}

type UnkownEmployee = Employee | Admin;

function printEmployee (emp: UnkownEmployee) {
    console.log('name:' + emp.name)
    if ('privileges' in emp) {
        console.log('privilges ' + emp.privileges)
    }
    if ('startDate' in emp) {
        console.log('startdate ' + emp.startDate)
    }   
}


class Car {
    drive() {
        console.log('driving')
    }
}

class Truck {
    drive () {
        console.log('driving')
    }
    loadCargo(amount: number) {
        console.log('laaoding cargo' + amount)
    }
}
// Klasa tez jest w jakims sensie interfacem.
type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
    vehicle.drive()
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(123)
    }
}

interface Bird {
    type: 'bird'
    flyingSpeed: number;
}

interface Horse {
    type: 'horse'
    runningSpeed: number
}


type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird': 
            speed = animal.flyingSpeed
            break;
        case 'horse':
            speed = animal.runningSpeed
            break;
    }
    console.log('animal speed:' + speed)
}

const golomp: Animal = {
    flyingSpeed: 100,
    type: "bird"
}


const userInput = <HTMLInputElement>document.getElementById('user-input')

const userInputSecond = document.getElementById('user-input') as HTMLInputElement

userInput.value = "hi there"

userInputSecond.value = 'second value'


interface ErrorContainer {
    [key: string]: string;
}