import { Door, Direction, Color, Car } from "./car";

const appCar = new Car('Volkswagen', Color.Silver, 4);

appCar.openTheDoor(Door.FrontLeft);
appCar.closeTheDoor(Door.FrontLeft);
appCar.turnOn();
appCar.speedUp();
appCar.speedDown();
appCar.turn(Direction.Left);
appCar.speedUp();
appCar.speedDown();
appCar.turn(Direction.Right);
appCar.speedUp();
appCar.speedDown();
appCar.stop();
appCar.openTheDoor(Door.BackRight);
appCar.closeTheDoor(Door.BackRight);
appCar.speedUp();
appCar.speedDown();
appCar.turn(Direction.Right);
appCar.speedUp();
appCar.speedDown();
appCar.turn(Direction.Left);
appCar.speedUp();
appCar.speedDown();
appCar.turn(Direction.Right);
appCar.speedUp();
appCar.speedDown();
appCar.stop();
appCar.openTheDoor(Door.BackRight);
appCar.closeTheDoor(Door.BackRight);
appCar.speedUp();
