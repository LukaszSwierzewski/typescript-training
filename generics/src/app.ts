const names: Array<string> = []
let data: string;
const promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
        resolve('resolved')
    }, 2000)
});

promise.then(data => {
    data.split(' ')
})


const fetched = async (data: string) => {
    return data
}

const fetchedData = async () => {
    const response = await fetched('data')
    return response
}
async function fetch () {
  try {
    data = await fetchedData()
  } catch {
      console.log('err')
  }
}

fetch().then(() => {
    const btn = document.querySelector("#btn") as HTMLButtonElement
    btn.innerText = data
})


//zwraca zmergowany intersection object
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}
const mergedObj = merge({name: 'asd'}, {age: '20', name: 'asdd'})

const mergedError = merge({name: 'asd'}, {age: 20})

interface Lengthy {
    length: number;
}

function countAndPrint <T extends Lengthy>(element: T): [T, string] {
    let description = "got no value."
    if (element.length > 0) {
        description = "Got " + element.length + ' element'
    } else if (element.length > 1) {
        description = "got " + element.length + " elements"
    }
    return [element, description]
}

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return "Value " + obj[key]
}

console.log(extractAndConvert({name: 'asd', sub: 'aaaa'}, 'name'))



// generic class

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item)
    }
    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }
    getItem() {
        return [...this.data]
    }
}

console.log('asd')
const textStorage = new DataStorage<string>();
textStorage.addItem('maks')
textStorage.addItem('tom')
textStorage.removeItem('maks')
console.log(textStorage.getItem())

const numberStorage = new DataStorage<number>();

const objStorage = new DataStorage<object>();

objStorage.addItem({name: 'maks'})
objStorage.addItem({name: 'tom'})
objStorage.removeItem({name: 'tom'})

console.log(objStorage)


const orginal = {
    name: 'lukasz',
    hobbies: ['a', 'b', 'c'],
    others: {
        names: 'Fiesta'
    }
}
const copied = JSON.parse(JSON.stringify(orginal))
copied.name = 'tomek'
console.log(copied)
orginal.others.names = 'skoda'
orginal.hobbies.push('d')
console.log(orginal)
console.log(copied)