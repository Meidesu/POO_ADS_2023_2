"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var banco_1 = require("../05_exercicio/banco");
var conta_1 = require("../05_exercicio/conta");
var banco = new banco_1.Banco();
banco.inserir(new conta_1.Poupanca("1", "Mei", 0.5));
banco.depositar("1", 100);
banco.renderJuros("1");
console.log(banco.consultar("1").saldo);
banco.inserir(new conta_1.Conta("2", "Her"));
banco.depositar("2", 100);
banco.renderJuros("2"); //Error: Conta não é poupança!!
console.log(banco.consultar("2").saldo); //Código não executado
