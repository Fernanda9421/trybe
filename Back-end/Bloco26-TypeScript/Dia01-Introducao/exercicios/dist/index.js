"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const seasons_1 = __importDefault(require("./seasons"));
const Months = __importStar(require("./monthsOfYear"));
const readlineSync = require('readline-sync');
// Exercise 1
// console.log(Character.showCharacters());
// Exercise 4
let seasons = [];
const chosenMonth = readlineSync, month = Object.keys(Months.default), indexMonth = chosenMonth.keyInSelect(month, 'De qual mês você deseja saber? ');
const chosenHemisfere = readlineSync, hemisphere = ['Norte', 'Sul'], index = chosenHemisfere.keyInSelect(hemisphere, 'De qual hemisfério você deseja saber? ');
const south = () => {
    const autumn = month.slice(2, 6);
    const winter = month.slice(5, 9);
    const spring = month.slice(8);
    const summer = month.slice(0, 3);
    summer.push('December');
    if (hemisphere[index] === 'Sul') {
        if (autumn.includes(month[indexMonth]))
            return seasons_1.default.Autumn;
        if (winter.includes(month[indexMonth]))
            return seasons_1.default.Winter;
        if (spring.includes(month[indexMonth]))
            return seasons_1.default.Spring;
        if (summer.includes(month[indexMonth]))
            return seasons_1.default.Summer;
    }
    return '';
};
const north = () => {
    const autumn = month.splice(9);
    const winter = month.splice(0, 4);
    winter.push('December');
    const spring = month.splice(3, 7);
    const summer = month.splice(6, 10);
    if (hemisphere[index] === 'Norte') {
        if (autumn.includes(month[indexMonth]))
            return seasons_1.default.Autumn;
        if (winter.includes(month[indexMonth]))
            return seasons_1.default.Winter;
        if (spring.includes(month[indexMonth]))
            return seasons_1.default.Spring;
        if (summer.includes(month[indexMonth]))
            return seasons_1.default.Summer;
    }
    return '';
};
console.log(`Mês escolhido: ${month[indexMonth]}
Hemisfério escolhido: ${hemisphere[index]}
Estação do ano: ${south()}${north()}`);
