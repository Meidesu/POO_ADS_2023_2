"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(numero, nome, saldo) {
        if (saldo === void 0) { saldo = 0; }
        this.numero = numero;
        this.nome = nome;
        this.saldo = saldo;
    }
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.sacar = function (valor) {
        if (this.saldo - valor < 0) {
            return false;
        }
        this.saldo = this.saldo - valor;
        return true;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        if (!this.sacar(valor)) {
            return false;
        }
        contaDestino.depositar(valor);
        return true;
    };
    Conta.prototype.toString = function () {
        return "\n    Numero da conta: ".concat(this.numero, "\n    Nome do titular: ").concat(this.nome, "\n    Saldo em conta: ").concat(this.saldo, "\n    ");
    };
    return Conta;
}());
exports.Conta = Conta;
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
