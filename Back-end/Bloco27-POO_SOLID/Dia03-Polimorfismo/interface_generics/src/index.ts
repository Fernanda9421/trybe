import CharacterService from "./classes/CharacterService";
import LocalDbModel from "./classes/LocalDbModel";
import MockedDbModel from "./classes/MockedDbModel";

const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);

const B = new CharacterService(new MockedDbModel());
B.getAll().then(console.log);
