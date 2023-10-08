"use strict";
var Hora = /** @class */ (function () {
    function Hora(hora, min, sec) {
        this._hora = hora;
        this._min = min;
        this._sec = sec;
    }
    Object.defineProperty(Hora.prototype, "hora", {
        get: function () {
            return this._hora;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hora.prototype, "min", {
        get: function () {
            return this._min;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hora.prototype, "sec", {
        get: function () {
            return this._sec;
        },
        enumerable: false,
        configurable: true
    });
    Hora.prototype.Horario = function () {
        return "".concat(this._hora, ":").concat(this._min, ":").concat(this._sec);
    };
    return Hora;
}());
var horario = new Hora(1, 50, 2);
console.log(horario.hora);
console.log(horario.min);
console.log(horario.sec);
console.log(horario.Horario());
