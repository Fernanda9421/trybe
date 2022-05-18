class SuperClass {
  public isSuper:boolean;

  constructor() {
    this.isSuper = true;
  }

  sayHello():void {
    console.log('Olá mundo!');
  }
}

class SubClass extends SuperClass {
  constructor() {
    super();
    this.isSuper = false;
  }
};

const myFunc = (object: SuperClass):void => {
  if (object.isSuper) console.log('Super!');
  console.log('Sub!'); 
}

const sup = new SuperClass();
const sub = new SubClass();

myFunc(sub);
myFunc(sup);