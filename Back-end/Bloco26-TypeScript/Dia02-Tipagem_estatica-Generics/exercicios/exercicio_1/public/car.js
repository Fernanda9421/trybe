"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.Direction = exports.Door = exports.Color = void 0;
var Color;
(function (Color) {
    Color["Black"] = "Preta";
    Color["White"] = "Branca";
    Color["Red"] = "Vermelha";
    Color["Silver"] = "Prata";
})(Color = exports.Color || (exports.Color = {}));
var Door;
(function (Door) {
    Door["FrontLeft"] = "Frente-Esquerda";
    Door["FrontRigth"] = "Frente-Direita";
    Door["BackLeft"] = "Tr\u00E1s-Esquerda";
    Door["BackRight"] = "Tr\u00E1s-Direita";
})(Door = exports.Door || (exports.Door = {}));
var Direction;
(function (Direction) {
    Direction["Left"] = "Esquerda";
    Direction["Right"] = "Direita";
})(Direction = exports.Direction || (exports.Direction = {}));
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        console.log('Buzinar');
    }
    openTheDoor(door) {
        console.log(`Abrir a porta ${door}`);
    }
    closeTheDoor(door) {
        console.log(`Fechar a porta ${door}`);
    }
    turnOn() {
        console.log('Ligar carro');
    }
    turnOff() {
        console.log('Deligar carro');
    }
    speedUp() {
        console.log('Acelerar carro');
    }
    speedDown() {
        console.log('Reduzir velocidade');
    }
    stop() {
        console.log('Parar carro');
    }
    turn(direction) {
        console.log(`Virar para ${direction}`);
    }
}
exports.Car = Car;
