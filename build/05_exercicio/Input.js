"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var readline_sync_1 = require("readline-sync");
var IOError_1 = require("./Exceptions/IOError");
var Input = /** @class */ (function () {
    function Input() {
    }
    Input.input = function (msg) {
        var out = (0, readline_sync_1.question)(msg).trim();
        if (out == "") {
            throw new IOError_1.EntradaVaziaError("Entrada inválida!!\nA entrada não pode ser vazia.\n");
        }
        return out;
    };
    Input.inputNumber = function (msg) {
        var out = Number(this.input(msg));
        if (isNaN(out)) {
            throw new IOError_1.NaoEhNumeroError("Entrada inválida!!\nA entrada deve ser um número.\n");
        }
        return out;
    };
    Input.inputNumberPositive = function (msg) {
        var out = this.inputNumber(msg);
        if (out < 0) {
            throw new IOError_1.ValorNegativoError("Entrada inválida!!\nA entrada deve ser um número positivo.\n");
        }
        return out;
    };
    return Input;
}());
exports.Input = Input;
