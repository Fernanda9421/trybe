"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("./car");
const appCar = new car_1.Car('Volkswagen', car_1.Color.Silver, 4);
appCar.openTheDoor(car_1.Door.FrontLeft);
appCar.closeTheDoor(car_1.Door.FrontLeft);
appCar.turnOn();
appCar.speedUp();
appCar.speedDown();
appCar.turn(car_1.Direction.Left);
appCar.speedUp();
appCar.speedDown();
appCar.turn(car_1.Direction.Right);
appCar.speedUp();
appCar.speedDown();
appCar.stop();
appCar.openTheDoor(car_1.Door.BackRight);
appCar.closeTheDoor(car_1.Door.BackRight);
appCar.speedUp();
appCar.speedDown();
appCar.turn(car_1.Direction.Right);
appCar.speedUp();
appCar.speedDown();
appCar.turn(car_1.Direction.Left);
appCar.speedUp();
appCar.speedDown();
appCar.turn(car_1.Direction.Right);
appCar.speedUp();
appCar.speedDown();
appCar.stop();
appCar.openTheDoor(car_1.Door.BackRight);
appCar.closeTheDoor(car_1.Door.BackRight);
appCar.speedUp();
