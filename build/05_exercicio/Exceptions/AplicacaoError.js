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
exports.PoupancaInvalidaError = exports.ContaInexistenteError = exports.SaldoInvalidoError = exports.SaldoIsuficienteError = exports.AplicacaoError = void 0;
var AplicacaoError = /** @class */ (function (_super) {
    __extends(AplicacaoError, _super);
    function AplicacaoError(mensagem) {
        var _this = _super.call(this, mensagem) || this;
        _this.name = "AplicacaoError";
        return _this;
    }
    return AplicacaoError;
}(Error));
exports.AplicacaoError = AplicacaoError;
var SaldoIsuficienteError = /** @class */ (function (_super) {
    __extends(SaldoIsuficienteError, _super);
    function SaldoIsuficienteError(mensagem) {
        var _this = _super.call(this, mensagem) || this;
        _this.name = "SaldoIsuficienteError";
        return _this;
    }
    return SaldoIsuficienteError;
}(AplicacaoError));
exports.SaldoIsuficienteError = SaldoIsuficienteError;
var SaldoInvalidoError = /** @class */ (function (_super) {
    __extends(SaldoInvalidoError, _super);
    function SaldoInvalidoError(mensagem) {
        var _this = _super.call(this, mensagem) || this;
        _this.name = "SaldoInvalidoError";
        return _this;
    }
    return SaldoInvalidoError;
}(AplicacaoError));
exports.SaldoInvalidoError = SaldoInvalidoError;
var ContaInexistenteError = /** @class */ (function (_super) {
    __extends(ContaInexistenteError, _super);
    function ContaInexistenteError(mensagem) {
        var _this = _super.call(this, mensagem) || this;
        _this.name = "ContaInexistenteError";
        return _this;
    }
    return ContaInexistenteError;
}(AplicacaoError));
exports.ContaInexistenteError = ContaInexistenteError;
var PoupancaInvalidaError = /** @class */ (function (_super) {
    __extends(PoupancaInvalidaError, _super);
    function PoupancaInvalidaError(mensagem) {
        var _this = _super.call(this, mensagem) || this;
        _this.name = "PoupancaInvalidaError";
        return _this;
    }
    return PoupancaInvalidaError;
}(AplicacaoError));
exports.PoupancaInvalidaError = PoupancaInvalidaError;
