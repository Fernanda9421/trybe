import IMyInterface from "./interfaces/myInterface";

class MyClass implements IMyInterface {
  constructor (public myNumber:number) {};

  myFunc(myParam: number): string {
    const sum = this.myNumber + myParam;
    console.log(`A soma é ${sum}`);
    return `A soma é ${sum}`;
  }
}

const myClass = new MyClass(22);
myClass.myFunc(2);