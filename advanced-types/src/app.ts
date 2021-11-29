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

//index type
interface ErrorContainer {
    id: string;
    [key: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'not valid',
    id: '1',
    'asd_asd': 'asdasd'
}
type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric

let num: Universal = 1

// function overloads
function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: string, b: string): string;

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b;
}


const result = add(1, 50);
console.log(result)
const stringResult = add('lukasz ', 1)
console.log(stringResult.split(' '))


// optional chaining

const fetched = {
    id: 'u1',
    name: 'lukasz',
    job: {
        title: 'ceo',
        description: 'my company'
    }
}
console.log(fetched?.job?.title)

let userInputThird = undefined;

const storedData = userInputThird ?? "DEFAULT"

console.log(storedData)