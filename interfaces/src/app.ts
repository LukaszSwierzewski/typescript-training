type Sex = string | number
type Role = [string, number]

type addFn = (a: number, b: number) => number
// raczej nie uzywaj lepszy type xd
interface AddFn {
    (a: number, b: number): number
}

let add: AddFn = (n1: number, n2: number) => {
    return n1 + n2
}

interface PersonOne {
    readonly name: string,
    age: number
    sex: Sex
    role: Role

    greet(phrase: string): void;
}

interface Named {
    readonly name: string;
     outputName?: string;
}

interface Greet extends Named {
    age: number
    greet(phrase: string): void
}

class Person implements Greet {
    age = 30
    outputName = 'asd'
    constructor(public name: string) {
    }

    greet(phrase: string) {
        console.log(phrase)
    }
}

const tom = new Person('tom')
console.log(tom)

