"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
/*
let conta1: Conta = new Conta("1", 0);
let banco: Conta[] = [];
banco[0] = conta1;

banco.push(new Conta("2", 100));
console.log(banco[1].consultarSaldo());

console.log(banco[10].saldo);
*/
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
    }
    Banco.prototype.inserir = function (conta) {
        if (this.consultar(conta.numero) == null) {
            this.contas.push(conta);
        }
    };
    Banco.prototype.consultar = function (numero) {
        var contaProcurada = null;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                contaProcurada = this.contas[i];
                break;
            }
        }
        return contaProcurada;
    };
    Banco.prototype.consultarPorIndice = function (numero) {
        var indiceProcurado = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    };
    Banco.prototype.alterar = function (conta) {
        var indiceProcurado = this.consultarPorIndice(conta.numero);
        if (indiceProcurado != -1) {
            this.contas[indiceProcurado] = conta;
        }
    };
    Banco.prototype.excluir = function (numero) {
        var indiceProcurado = this.consultarPorIndice(numero);
        if (indiceProcurado != -1) {
            for (var i = indiceProcurado; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    };
    Banco.prototype.sacar = function (numero, valor) {
        var indiceProcurado = this.consultarPorIndice(numero);
        if (indiceProcurado != -1) { //Achou uma conta
            var conta = this.contas[indiceProcurado];
            conta.sacar(valor);
        }
    };
    Banco.prototype.transferir = function (numeroCredito, numeroDebito, valor) {
        var indiceOrigem = this.consultarPorIndice(numeroDebito);
        var indiceDestino = this.consultarPorIndice(numeroCredito);
        if (indiceDestino != -1 && indiceOrigem != -1) {
            var contaDestino = this.contas[indiceDestino];
            var contaOrigem = this.contas[indiceOrigem];
            contaOrigem.transferir(contaDestino, valor);
        }
    };
    Banco.prototype.qtdContas = function () {
        var qtd = this.contas.length;
        return qtd;
    };
    Banco.prototype.saldoBanco = function () {
        var total = 0;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            total += conta.consultarSaldo();
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



console.log(b.contas); */ 
