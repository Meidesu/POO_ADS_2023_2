"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
var Circulo = /** @class */ (function () {
    function Circulo() {
        this.raio = 0;
        this.pi = 3.14;
    }
    Circulo.prototype.calcularPerimetro = function () {
        return this.raio * this.pi * 2;
    };
    Circulo.prototype.calcularArea = function () {
        return (Math.pow(this.raio, 2)) * this.pi;
    };
    return Circulo;
}());
var newcirculo = new Circulo();
var raio = Number((0, readline_sync_1.question)('Raio do circulo: '));
newcirculo.raio = raio;
console.log("Perimetro: ".concat(newcirculo.calcularPerimetro()));
console.log("Area: ".concat(newcirculo.calcularArea()));
