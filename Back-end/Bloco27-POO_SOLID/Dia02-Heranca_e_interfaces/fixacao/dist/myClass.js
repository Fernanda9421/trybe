"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyClass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    ;
    myFunc(myParam) {
        const sum = this.myNumber + myParam;
        console.log(`A soma é ${sum}`);
        return `A soma é ${sum}`;
    }
}
const myClass = new MyClass(22);
myClass.myFunc(2);
