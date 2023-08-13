"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
var Retangulo = /** @class */ (function () {
    function Retangulo() {
        this.l1 = 0;
        this.l2 = 0;
    }
    Retangulo.prototype.calcularArea = function () {
        return this.l1 * this.l2;
    };
    Retangulo.prototype.calcularPerimetro = function () {
        return (this.l1 * 2) + (this.l2 * 2);
    };
    return Retangulo;
}());
var lado1 = Number((0, readline_sync_1.question)('Lado 1: '));
var lado2 = Number((0, readline_sync_1.question)('Lado 2: '));
var newRect = new Retangulo();
newRect.l1 = lado1;
newRect.l2 = lado2;
console.log(newRect.calcularPerimetro());
