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
exports.Poupanca = exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(numero, nome, saldo) {
        if (saldo === void 0) { saldo = 0; }
        this.numero = numero;
        this.nome = nome;
        this._saldo = saldo;
    }
    Conta.prototype.depositar = function (valor) {
        this._saldo = this._saldo + valor;
    };
    Conta.prototype.sacar = function (valor) {
        if (this._saldo - valor < 0) {
            return false;
        }
        this._saldo = this._saldo - valor;
        return true;
    };
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        enumerable: false,
        configurable: true
    });
    Conta.prototype.transferir = function (contaDestino, valor) {
        if (!this.sacar(valor)) {
            return false;
        }
        contaDestino.depositar(valor);
        return true;
    };
    Conta.prototype.toString = function () {
        return "\n    Numero da conta: ".concat(this.numero, "\n    Nome do titular: ").concat(this.nome, "\n    Saldo em conta: ").concat(this._saldo, "\n    ");
    };
    return Conta;
}());
exports.Conta = Conta;
var Poupanca = /** @class */ (function (_super) {
    __extends(Poupanca, _super);
    function Poupanca(numero, nome, taxa, saldo) {
        if (saldo === void 0) { saldo = 0; }
        var _this = _super.call(this, numero, nome, saldo) || this;
        _this._taxaJuros = taxa;
        return _this;
    }
    Object.defineProperty(Poupanca.prototype, "taxaJuros", {
        get: function () {
            return this._taxaJuros;
        },
        enumerable: false,
        configurable: true
    });
    Poupanca.prototype.renderJuros = function () {
        this.depositar(this.saldo * this._taxaJuros / 100);
    };
    return Poupanca;
}(Conta));
exports.Poupanca = Poupanca;
/* let c1: Conta = new Conta("1", "ely", 100);
let c2: Conta = new Conta("2", "joao", 200);
let c3: Conta;
c1 = c2;
c3 = c1;
c1.sacar(10); //saldo de 190
c1.transferir(c2, 50);
console.log(c1.consultarSaldo()); //190
console.log(c2.consultarSaldo()); //190
console.log(c3.consultarSaldo()); //190

export {Conta} */ 
