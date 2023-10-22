"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var FolhaDePagamento = /** @class */ (function () {
    function FolhaDePagamento(pessoas) {
        this._pessoas = [];
        this._pessoas = pessoas;
    }
    FolhaDePagamento.prototype.calcularPagamentos = function () {
        var _total = 0;
        console.log(this._pessoas);
        for (var _i = 0, _a = this._pessoas; _i < _a.length; _i++) {
            var pessoa = _a[_i];
            if (pessoa instanceof Pessoa_1.Funcionario) {
                var funcionario = pessoa;
                _total += funcionario.salario;
                console.log(funcionario.nomeCompleto);
                console.log(funcionario.salario);
            }
        }
        return _total;
    };
    return FolhaDePagamento;
}());
var pessoas = [
    new Pessoa_1.Funcionario('João', 'da Silva', '123', 1000),
    new Pessoa_1.Professor('Maria', 'de Souza', '456', 2000, 'Mestre')
];
var folhaDePagamento = new FolhaDePagamento(pessoas);
console.log(folhaDePagamento.calcularPagamentos()); // 3000
