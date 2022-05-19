"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const IDbCharacter_1 = require("../interfaces/IDbCharacter");
class LocalDbModel {
    constructor() {
        this.findIndexById = (id) => {
            const index = IDbCharacter_1.db.findIndex((character) => character.id === id);
            if (index < 0)
                throw new Error('Character not found');
            return index;
        };
        this.getAll = () => __awaiter(this, void 0, void 0, function* () { return IDbCharacter_1.db; });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            const index = this.findIndexById(id);
            return IDbCharacter_1.db[index];
        });
        this.create = (character) => __awaiter(this, void 0, void 0, function* () {
            const lastId = IDbCharacter_1.db.length > 0 ? IDbCharacter_1.db[IDbCharacter_1.db.length - 1].id : 0;
            const newCharacter = Object.assign({ id: lastId + 1 }, character);
            IDbCharacter_1.db.push(newCharacter);
            return newCharacter;
        });
        this.update = (id, character) => __awaiter(this, void 0, void 0, function* () {
            const indexToUpdate = this.findIndexById(id);
            IDbCharacter_1.db[indexToUpdate] = Object.assign(Object.assign({}, IDbCharacter_1.db[indexToUpdate]), character);
            return IDbCharacter_1.db[indexToUpdate];
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const indexToDestroy = this.findIndexById(id);
            const deletedItem = IDbCharacter_1.db.splice(indexToDestroy, 1);
            if (deletedItem.length > 0)
                return true;
            return false;
        });
    }
}
exports.default = LocalDbModel;
