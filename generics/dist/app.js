"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const names = [];
let data;
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('resolved');
    }, 2000);
});
promise.then(data => {
    data.split(' ');
});
const fetched = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return data;
});
const fetchedData = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetched('data');
    return response;
});
function fetch() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            data = yield fetchedData();
        }
        catch (_a) {
            console.log('err');
        }
    });
}
fetch().then(() => {
    const btn = document.querySelector("#btn");
    btn.innerText = data;
});
//zwraca zmergowany intersection object
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'asd' }, { age: '20', name: 'asdd' });
const mergedError = merge({ name: 'asd' }, { age: 20 });
function countAndPrint(element) {
    let description = "got no value.";
    if (element.length > 0) {
        description = "Got " + element.length + ' element';
    }
    else if (element.length > 1) {
        description = "got " + element.length + " elements";
    }
    return [element, description];
}
function extractAndConvert(obj, key) {
    return "Value " + obj[key];
}
console.log(extractAndConvert({ name: 'asd', sub: 'aaaa' }, 'name'));
// generic class
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItem() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('maks');
textStorage.addItem('tom');
textStorage.removeItem('maks');
console.log(textStorage.getItem());
const numberStorage = new DataStorage();
// Jezeli chcemy zeby cos bylo opcjonalne i nie wiemy co
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    return courseGoal;
}
const nameArray = ['max', 'sports'];
// nameArray.push('anna')
