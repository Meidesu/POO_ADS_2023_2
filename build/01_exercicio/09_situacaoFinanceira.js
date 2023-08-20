"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
var SituacaoFinanceira = /** @class */ (function () {
    function SituacaoFinanceira() {
        this.valorCreditos = 0;
        this.valorDebitos = 0;
    }
    SituacaoFinanceira.prototype.saldo = function () {
        return this.valorCreditos - this.valorDebitos;
    };
    return SituacaoFinanceira;
}());
var newSituacao = new SituacaoFinanceira();
var creditos = Number((0, readline_sync_1.question)('Creditos: '));
var debitos = Number((0, readline_sync_1.question)('debitos: '));
newSituacao.valorCreditos = creditos;
newSituacao.valorDebitos = debitos;
console.log("Situa\u00E7\u00E3o: ".concat(newSituacao.saldo()));
/*
Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e
valorDebitos. Crie um método chamado saldo() que retorna/calcula a diferença
entre crédito e débito. Instancie uma classe SituacaoFinanceira, inicialize os dois
atributos e exiba o resultado do método saldo().
*/ 
