"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
var Calculadora = /** @class */ (function () {
    function Calculadora(op1, op2) {
        this._operando1 = op1;
        this._operando2 = op2;
    }
    Calculadora.prototype.somar = function () {
        return this._operando1 + this._operando2;
    };
    Calculadora.prototype.subtrair = function () {
        return this._operando1 - this._operando2;
    };
    Calculadora.prototype.multiplicar = function () {
        return this._operando1 * this._operando2;
    };
    Calculadora.prototype.dividir = function () {
        var result = null;
        if (this._operando2 != 0) {
            result = this._operando1 / this._operando2;
            return result;
        }
        return result;
    };
    Object.defineProperty(Calculadora.prototype, "operando1", {
        get: function () {
            return this._operando1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calculadora.prototype, "operando2", {
        get: function () {
            return this._operando2;
        },
        enumerable: false,
        configurable: true
    });
    return Calculadora;
}());
exports.Calculadora = Calculadora;
// let calc1: Calculadora = new Calculadora(4, 2);
// //console.log(calc1._operando1); -> Property '_operando1' is private and only accessible within class 'Calculadora'.
// console.log(calc1.somar()); //6
// console.log(calc1.subtrair()); //2
// console.log(calc1.multiplicar()); //8
// console.log(calc1.dividir()); //2
