enum Breed {
  Bulldog = 'Bulldog',
  PastorAlemao = "Pastor Alemão",
  Labrador = 'Labrador'
}

class Dog {
  _name: string;
  _age: number;
  _breed: string;

  constructor(name: string, age: number, breed: Breed) {
    this._name = name;
    this._age = age;
    this._breed = breed;
  }
}

export const Dog1 = new Dog('Gordon', 1, Breed.Bulldog);
export const Dog2 = new Dog('Mel', 12, Breed.Labrador);
