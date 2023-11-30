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
exports.ValorNegativoError = exports.NaoEhNumeroError = exports.EntradaVaziaError = exports.IOError = void 0;
var IOError = /** @class */ (function (_super) {
    __extends(IOError, _super);
    function IOError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "IOError";
        return _this;
    }
    return IOError;
}(Error));
exports.IOError = IOError;
var EntradaVaziaError = /** @class */ (function (_super) {
    __extends(EntradaVaziaError, _super);
    function EntradaVaziaError(message) {
        return _super.call(this, message) || this;
    }
    return EntradaVaziaError;
}(IOError));
exports.EntradaVaziaError = EntradaVaziaError;
var NaoEhNumeroError = /** @class */ (function (_super) {
    __extends(NaoEhNumeroError, _super);
    function NaoEhNumeroError(message) {
        return _super.call(this, message) || this;
    }
    return NaoEhNumeroError;
}(IOError));
exports.NaoEhNumeroError = NaoEhNumeroError;
var ValorNegativoError = /** @class */ (function (_super) {
    __extends(ValorNegativoError, _super);
    function ValorNegativoError(message) {
        return _super.call(this, message) || this;
    }
    return ValorNegativoError;
}(IOError));
exports.ValorNegativoError = ValorNegativoError;
