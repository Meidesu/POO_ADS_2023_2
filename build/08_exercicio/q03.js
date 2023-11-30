"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var conta_1 = require("../05_exercicio/conta");
// Testes questão 3
var c1 = new conta_1.Conta("1", "Mei");
c1.depositar(10);
c1.sacar(15); //Error: Saldo insuficiente!!
console.log(c1.saldo); // Codigo não executado
