"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
var conta_1 = require("./conta");
var AplicacaoError_1 = require("./Exceptions/AplicacaoError");
var NumeroContaInvalidoError_1 = require("./Exceptions/NumeroContaInvalidoError");
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
        var numConta = conta.numero;
        this._validarNumero(numConta);
        try {
            this.consultar(numConta);
            console.log("Conta com número duplicado. A conta não foi adicionada.");
        }
        catch (e) {
            this._contas.push(conta);
        }
    };
    Banco.prototype._validarNumero = function (numero) {
        // Modelo: 00000-0
        var numConta = numero;
        var partes = numConta.split('-');
        // Verifica se o número da conta tem o tamanho correto
        if (numConta.length != 7 || partes.length != 2 || partes[0].length != 5 || partes[1].length != 1) {
            throw new NumeroContaInvalidoError_1.NumeroContaInvalidoError("\n Número de conta inválido!!\n O número da conta deve seguir o modelo: 00000-0\n");
        }
        // Verifica se as partes são números
        if (isNaN(Number(partes[0])) || isNaN(Number(partes[1]))) {
            throw new NumeroContaInvalidoError_1.NumeroContaInvalidoError("\n Número de conta inválido!!\n O numero da conta deve conter apenas números inteiros.\n");
        }
    };
    Banco.prototype.consultar = function (numero) {
        this._validarNumero(numero);
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
        this._validarNumero(numero);
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
/* let b: Banco = new Banco();

b.inserir(new Poupanca("123", "meireles", 50, 100));
b.inserir(new Conta("456", "meireles", 100));

console.log(b.consultar("123"));
console.log(b.consultar("456"));

console.log(b.renderJuros("123"));
console.log(b.consultar("123"));
 */
/* let b: Banco = new Banco();
b.inserir(new Conta("11111-2", "ely", 100));
//console.log(b.consultar("11111-2"));
//console.log(b.consultar("22222-2"));

let contaAlterada:  Conta | null= b.consultar("11111-2");

contaAlterada.nome = "ely da silva miranda";

b.alterar(contaAlterada)
//console.log(b.consultar("11111-2"));

b.inserir(new Conta("22222-2", "joao", 200));
b.inserir(new Conta("33333-3", "maria", 300));

//b.excluir("11111-2");
// b.sacar("33333-3", 50)
console.log(b.consultar("33333-3"));

b.transferir('22222-2', '33333-3', 150)

console.log("Saldo total do banco:" ,b.saldoBanco());
console.log("Contas no banco:" ,b.qtdContas());
console.log("Média:", b.mediaSaldo());


*/
// let b: Banco = new Banco();
// console.log(b.contas); 
