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
var Empregado = /** @class */ (function () {
    function Empregado(salario) {
        this._salario = 50;
        this._salario = salario;
    }
    Empregado.prototype.calcularSalario = function () {
        return this._salario;
    };
    return Empregado;
}());
var Diarista = /** @class */ (function (_super) {
    __extends(Diarista, _super);
    function Diarista(salario) {
        return _super.call(this, salario) || this;
    }
    Diarista.prototype.calcularSalario = function () {
        return _super.prototype.calcularSalario.call(this) / 30;
    };
    return Diarista;
}(Empregado));
var Horista = /** @class */ (function (_super) {
    __extends(Horista, _super);
    function Horista(salario) {
        return _super.call(this, salario) || this;
    }
    Horista.prototype.calcularSalario = function () {
        return _super.prototype.calcularSalario.call(this) / 24;
    };
    return Horista;
}(Diarista));
var empregado = new Empregado(1000);
console.log(empregado.calcularSalario());
var diarista = new Diarista(1000);
console.log(diarista.calcularSalario());
var horista = new Horista(1000);
console.log(horista.calcularSalario());
