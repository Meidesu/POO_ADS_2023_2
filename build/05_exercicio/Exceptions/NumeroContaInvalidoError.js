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
exports.NumeroContaInvalidoError = void 0;
var AplicacaoError_1 = require("./AplicacaoError");
var NumeroContaInvalidoError = /** @class */ (function (_super) {
    __extends(NumeroContaInvalidoError, _super);
    function NumeroContaInvalidoError(mensagem) {
        var _this = _super.call(this, mensagem) || this;
        _this.name = "NumeroContaInvalidoError";
        return _this;
    }
    return NumeroContaInvalidoError;
}(AplicacaoError_1.AplicacaoError));
exports.NumeroContaInvalidoError = NumeroContaInvalidoError;
