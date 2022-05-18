"use strict";
class SuperClass {
    constructor() {
        this.isSuper = true;
    }
    sayHello() {
        console.log('Olá mundo!');
    }
}
class SubClass extends SuperClass {
    constructor() {
        super();
        this.isSuper = false;
    }
}
;
const myFunc = (object) => {
    if (object.isSuper)
        console.log('Super!');
    console.log('Sub!');
};
const sup = new SuperClass();
const sub = new SubClass();
myFunc(sub);
myFunc(sup);
