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
class MockedDbModel {
    constructor() {
        this.findIndexById = () => {
            return 1;
        };
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            return [
                { id: 1, name: 'name1', specialMove: 'move1' },
                { id: 2, name: 'name2', specialMove: 'move2' }
            ];
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            return { id: 1, name: 'name3', specialMove: 'move3' };
        });
        this.create = (character) => __awaiter(this, void 0, void 0, function* () {
            return { id: 1, name: 'name4', specialMove: 'move4' };
        });
        this.update = (id, character) => __awaiter(this, void 0, void 0, function* () {
            return { id: 1, name: 'name5', specialMove: 'move5' };
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
}
exports.default = MockedDbModel;
