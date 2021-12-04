function Logger (logString: string) {
    console.log("LOGGER FACTORY")
    return function(constructor: Function) {
        console.log(logString)
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string) {
    console.log("TEMPLATE FACTORY")
    return function<T extends {new(...args: any[]): {name: string, person: string}}>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                const hookElement = document.getElementById(hookId)
                if (hookElement) {
                    hookElement.innerHTML = template
                    hookElement.querySelector('h1')!.textContent = this.name
                }
            }
            someMethod() {
                console.log('asdddddddd')
            }
        }
    }
}
/// pierwsze te od gory sie wykonuja
@Logger('LOGGING')
@WithTemplate('<h1>my person object</h1>', 'app')
class Person {
    readonly name = "max";
    constructor(public person: string) {
        console.log('creating person')
    }
    someMethod() {
        console.log('asd')
    }
}


const pers = new Person('test');
pers.someMethod()

// ----------



function Log(target: any, propertyName: string) {
    console.log('Property decorator!')
    console.log(target, propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('accessor decorator')
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('METHOD decorator')
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('position decorator')
    console.log(target)
    console.log(name)
    console.log(position)
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('invalid price')
        }
    }

    constructor(t: string, p: number) {
        this.title = t
        this._price = p
    }
    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}
