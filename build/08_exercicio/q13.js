"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var banco_1 = require("../05_exercicio/banco");
var conta_1 = require("../05_exercicio/conta");
// Testes questão 13
var banco = new banco_1.Banco();
var c1 = new conta_1.Conta("1", "Mei");
var c2 = new conta_1.Conta("1", "Liv");
banco.inserir(c1);
banco.depositar("1", 100);
banco.inserir(c2); //Error: Conta com número duplicado. A conta não foi adicionada.
banco.depositar("1", 100);
console.log(banco.consultar("1").toString());
console.log(banco.qtdContas()); // Apenas uma conta foi adicionada ao banco
