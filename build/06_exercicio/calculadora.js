"use strict";
var Calculadora = /** @class */ (function () {
    function Calculadora(op1, op2) {
        this.operando1 = op1;
        this.operando2 = op2;
    }
    Calculadora.prototype.somar = function () {
        return this.operando1 + this.operando2;
    };
    Calculadora.prototype.subtrair = function () {
        return this.operando1 - this.operando2;
    };
    Calculadora.prototype.multiplicar = function () {
        return this.operando1 * this.operando2;
    };
    Calculadora.prototype.dividir = function () {
        var result = null;
        if (this.operando2 != 0) {
            result = this.operando1 / this.operando2;
            return result;
        }
        return result;
    };
    return Calculadora;
}());
var calc1 = new Calculadora(4, 2);
//console.log(calc1.operando1); -> Property 'operando1' is private and only accessible within class 'Calculadora'.
console.log(calc1.somar()); //6
console.log(calc1.subtrair()); //2
console.log(calc1.multiplicar()); //8
console.log(calc1.dividir()); //2
