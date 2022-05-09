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
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise = __importStar(require("./exercises"));
console.log(Exercise.greeter('Fernanda'));
console.log(Exercise.personAge('Fernanda', 27));
console.log(`A soma do array é ${Exercise.sumArray([1, 7, 9])}`);
console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)} cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)} cm²`);
console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}`);
console.log(`Quadrado de lado 25cm: ${Exercise.square(25)}`);
console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`A área do losango é: ${Exercise.diamond(32, 18)} cm²`);
console.log(`A área do losango é: ${Exercise.diamond(200, 50)} cm²`);
console.log(`A área do losango é: ${Exercise.diamond(75, 25)} cm²`);
console.log(`A área do trapézio é: ${Exercise.trapeze(100, 70, 50)} cm³`);
console.log(`A área do trapézio é: ${Exercise.trapeze(75, 50, 35)} cm³`);
console.log(`A área do trapézio é: ${Exercise.trapeze(150, 120, 80)} cm³`);
console.log(`A área do círculo é: ${Exercise.circle(25)} cm²`);
console.log(`A área do círculo é: ${Exercise.circle(100)} cm²`);
console.log(`A área do círculo é: ${Exercise.circle(12.5)} cm²`);
