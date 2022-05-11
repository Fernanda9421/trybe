export enum Color {
  Black = 'Preta',
  White = 'Branca',
  Red = 'Vermelha',
  Silver = 'Prata'
}

export enum Door {
  FrontLeft = 'Frente-Esquerda',
  FrontRigth = 'Frente-Direita',
  BackLeft = 'Trás-Esquerda',
  BackRight = 'Trás-Direita'
}

export enum Direction {
  Left = 'Esquerda',
  Right = 'Direita'
}

export class Car {
  brand: string;
  color: Color;
  doors: number;

  constructor(brand: string, color: Color, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk():void {
    console.log('Buzinar');
  }

  openTheDoor(door: Door):void {
    console.log(`Abrir a porta ${door}`);
  }

  closeTheDoor(door: Door):void {
    console.log(`Fechar a porta ${door}`);
  }

  turnOn():void {
    console.log('Ligar carro');
  }

  turnOff():void {
    console.log('Deligar carro'); 
  }

  speedUp():void {
    console.log('Acelerar carro');
  }

  speedDown():void {
    console.log('Reduzir velocidade');
  }

  stop():void {
    console.log('Parar carro');
  }

  turn(direction: Direction):void {
    console.log(`Virar para ${direction}`);
  }
}