"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
var conta_1 = require("./conta");
var AplicacaoError_1 = require("./Exceptions/AplicacaoError");
/*
let conta1: Conta = new Conta("1", 0);
let banco: Conta[] = [];
banco[0] = conta1;

banco.push(new Conta("2", 100));
console.log(banco[1].saldo);

console.log(banco[10].saldo);
*/
var Banco = /** @class */ (function () {
    function Banco() {
        this._contas = [];
    }
    Banco.prototype.inserir = function (conta) {
        this._validarNumero();
        try {
            this.consultar(conta.numero);
            console.log("Conta com número duplicado. A conta não foi adicionada.");
        }
        catch (e) {
            this._contas.push(conta);
        }
    };
    Banco.prototype._validarNumero = function () {
        throw new Error('Method not implemented.');
    };
    Banco.prototype.consultar = function (numero) {
        for (var i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                return this._contas[i];
            }
        }
        throw new AplicacaoError_1.ContaInexistenteError("Conta não encontrada!!\n O número da conta informado não existe.");
    };
    Banco.prototype._consultarPorIndice = function (numero) {
        for (var i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                return i;
            }
        }
        throw new AplicacaoError_1.ContaInexistenteError("Conta não encontrada!!\n O número da conta informado não existe.");
    };
    Banco.prototype.alterar = function (conta) {
        var indiceProcurado = this._consultarPorIndice(conta.numero);
        this._contas[indiceProcurado] = conta;
    };
    Banco.prototype.excluir = function (numero) {
        var indiceProcurado = this._consultarPorIndice(numero);
        if (indiceProcurado != -1) {
            for (var i = indiceProcurado; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    };
    Banco.prototype.depositar = function (numero, valor) {
        var indiceProcurado = this._consultarPorIndice(numero);
        var conta = this._contas[indiceProcurado];
        conta.depositar(valor);
    };
    Banco.prototype.sacar = function (numero, valor) {
        var indiceProcurado = this._consultarPorIndice(numero);
        var conta = this._contas[indiceProcurado];
        conta.sacar(valor);
    };
    Banco.prototype.transferir = function (numeroCredito, numeroDebito, valor) {
        var indiceOrigem = this._consultarPorIndice(numeroDebito);
        var indiceDestino = this._consultarPorIndice(numeroCredito);
        var contaDestino = this._contas[indiceDestino];
        var contaOrigem = this._contas[indiceOrigem];
        contaOrigem.transferir(contaDestino, valor);
    };
    Banco.prototype.qtdContas = function () {
        var qtd = this._contas.length;
        return qtd;
    };
    Banco.prototype.saldoBanco = function () {
        var total = 0;
        for (var _i = 0, _a = this._contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            total += conta.saldo;
        }
        return total;
    };
    Banco.prototype.mediaSaldo = function () {
        return this.saldoBanco() / this.qtdContas();
    };
    Banco.prototype.renderJuros = function (numero) {
        var _contaProcurada = this.consultar(numero);
        if (!(_contaProcurada instanceof conta_1.Poupanca)) {
            throw new AplicacaoError_1.PoupancaInvalidaError("Conta poupança não encontrada!!\n O número da conta informado não é uma conta poupança.\n");
        }
        _contaProcurada.renderJuros();
    };
    return Banco;
}());
exports.Banco = Banco;
