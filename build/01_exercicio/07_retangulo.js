"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
var Retangulo = /** @class */ (function () {
    function Retangulo() {
        this.lado1 = 0;
        this.lado2 = 0;
    }
    Retangulo.prototype.calcularArea = function () {
        return this.lado1 * this.lado2;
    };
    Retangulo.prototype.calcularPerimetro = function () {
        return (this.lado1 * 2) + (this.lado2 * 2);
    };
    return Retangulo;
}());
var lado1 = Number((0, readline_sync_1.question)('Lado 1: '));
var lado2 = Number((0, readline_sync_1.question)('Lado 2: '));
var newRect = new Retangulo();
newRect.lado1 = lado1;
newRect.lado2 = lado2;
console.log(newRect.calcularPerimetro());
