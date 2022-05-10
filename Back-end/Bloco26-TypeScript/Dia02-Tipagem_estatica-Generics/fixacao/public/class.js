"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog2 = exports.Dog1 = void 0;
var Breed;
(function (Breed) {
    Breed["Bulldog"] = "Bulldog";
    Breed["PastorAlemao"] = "Pastor Alem\u00E3o";
    Breed["Labrador"] = "Labrador";
})(Breed || (Breed = {}));
class Dog {
    constructor(name, age, breed) {
        this._name = name;
        this._age = age;
        this._breed = breed;
    }
}
exports.Dog1 = new Dog('Gordon', 1, Breed.Bulldog);
exports.Dog2 = new Dog('Mel', 12, Breed.Labrador);
