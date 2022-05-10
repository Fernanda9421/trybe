"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docId = exports.showAddress = exports.sum = void 0;
function sum(n) {
    return `A soma dos números é ${n.num1 + n.num2}`;
}
exports.sum = sum;
function showAddress(a) {
    return `Street: ${a.street}
  Number: ${a.number}
  City: ${a.city}`;
}
exports.showAddress = showAddress;
function docId(id) {
    return `Identidade: ${id}`;
}
exports.docId = docId;
