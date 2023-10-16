"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var calculadora_1 = require("../06_exercicio/calculadora");
var CalculadoraCientifica = /** @class */ (function (_super) {
    __extends(CalculadoraCientifica, _super);
    function CalculadoraCientifica(op1, op2) {
        return _super.call(this, op1, op2) || this;
    }
    CalculadoraCientifica.prototype.exponecial = function () {
        return Math.pow(this.operando1, this.operando2);
    };
    return CalculadoraCientifica;
}(calculadora_1.Calculadora));
var calcCient = new CalculadoraCientifica(2, 3);
console.log(calcCient.somar());
console.log(calcCient.subtrair());
console.log(calcCient.multiplicar());
console.log(calcCient.dividir());
console.log(calcCient.exponecial());
