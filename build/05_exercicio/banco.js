"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
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
        if (this.consultar(conta.numero) == null) {
            this._contas.push(conta);
        }
    };
    Banco.prototype.consultar = function (numero) {
        var contaProcurada = null;
        for (var i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                contaProcurada = this._contas[i];
                break;
            }
        }
        return contaProcurada;
    };
    Banco.prototype._consultarPorIndice = function (numero) {
        var indiceProcurado = -1;
        for (var i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    };
    Banco.prototype.alterar = function (conta) {
        var indiceProcurado = this._consultarPorIndice(conta.numero);
        if (indiceProcurado != -1) {
            this._contas[indiceProcurado] = conta;
        }
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
    Banco.prototype.sacar = function (numero, valor) {
        var indiceProcurado = this._consultarPorIndice(numero);
        if (indiceProcurado != -1) { //Achou uma conta
            var conta = this._contas[indiceProcurado];
            conta.sacar(valor);
        }
    };
    Banco.prototype.transferir = function (numeroCredito, numeroDebito, valor) {
        var indiceOrigem = this._consultarPorIndice(numeroDebito);
        var indiceDestino = this._consultarPorIndice(numeroCredito);
        if (indiceDestino != -1 && indiceOrigem != -1) {
            var contaDestino = this._contas[indiceDestino];
            var contaOrigem = this._contas[indiceOrigem];
            contaOrigem.transferir(contaDestino, valor);
        }
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
    return Banco;
}());
exports.Banco = Banco;
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
