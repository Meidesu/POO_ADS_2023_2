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
exports.Professor = exports.Funcionario = exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome) {
        this._nome = nome.trim();
        this._sobrenome = sobrenome.trim();
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "sobrenome", {
        get: function () {
            return this._sobrenome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "nomeCompleto", {
        get: function () {
            return "".concat(this._nome, " ").concat(this._sobrenome);
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
exports.Pessoa = Pessoa;
// const pessoa = new Pessoa('   Antonio  ', '  Meireles   ');
// console.log(pessoa.nome); // João
// console.log(pessoa.sobrenome); // da Silva
// const pessoa2 = new Pessoa('Maria', 'de Souza');
// console.log(pessoa2.nome); // Maria
// console.log(pessoa2.sobrenome); // de Souza
// console.log(pessoa.nomeCompleto); // João da Silva
// console.log(pessoa2.nomeCompleto); // Maria de Souza
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(nome, sobrenome, matricula, salario) {
        var _this = _super.call(this, nome, sobrenome) || this;
        _this._matricula = matricula.trim();
        _this._salario = salario;
        return _this;
    }
    Object.defineProperty(Funcionario.prototype, "matricula", {
        get: function () {
            return this._matricula;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        enumerable: false,
        configurable: true
    });
    Funcionario.prototype.calcularPrimeiraParcela = function () {
        return this._salario * 0.6;
    };
    Funcionario.prototype.calcularSegundaParcela = function () {
        return this._salario * 0.4;
    };
    return Funcionario;
}(Pessoa));
exports.Funcionario = Funcionario;
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(nome, sobrenome, matricula, salario, titulacao) {
        var _this = _super.call(this, nome, sobrenome, matricula, salario) || this;
        _this._titulacao = titulacao.trim();
        return _this;
    }
    Professor.prototype.calcularPrimeiraParcela = function () {
        return _super.prototype.calcularPrimeiraParcela.call(this) + _super.prototype.calcularSegundaParcela.call(this);
    };
    Professor.prototype.calcularSegundaParcela = function () {
        return 0;
    };
    return Professor;
}(Funcionario));
exports.Professor = Professor;
