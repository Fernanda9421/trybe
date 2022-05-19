"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterService_1 = __importDefault(require("./classes/CharacterService"));
const LocalDbModel_1 = __importDefault(require("./classes/LocalDbModel"));
const MockedDbModel_1 = __importDefault(require("./classes/MockedDbModel"));
const A = new CharacterService_1.default(new LocalDbModel_1.default());
A.getAll().then(console.log);
const B = new CharacterService_1.default(new MockedDbModel_1.default());
B.getAll().then(console.log);
