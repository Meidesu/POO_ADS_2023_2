"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
var banco_1 = require("./banco");
var conta_1 = require("./conta");
// let input = question();
var b = new banco_1.Banco();
var opcao = '';
do {
    console.clear();
    var menu = "\n  Bem vindo!!\n  \n  Digite uma op\u00E7\u00E3o:\n  1 - Cadastrar\n  2 - Consultar\n  3 - Sacar\n  4 - Depositar \n  5 - Excluir\n  6 - Transferir\n  7 - Totaliza\u00E7\u00F5es\n  0 - Sair\n  ";
    console.log(menu);
    opcao = (0, readline_sync_1.question)(" >> ");
    console.clear();
    switch (opcao) {
        case "1":
            inserir();
            break;
        case "2":
            consultar();
            break;
        case "3":
            sacar();
            break;
        case "4":
            depositar();
            break;
    }
    (0, readline_sync_1.question)("\n Operacao finalizada.\n Press <enter>");
} while (opcao != "0");
function inserir() {
    console.log("\n Cadastrar conta\n");
    var numero = (0, readline_sync_1.question)(' Digite o número da conta:');
    var nome = (0, readline_sync_1.question)(' Nome do titular: ');
    var conta;
    conta = new conta_1.Conta(numero, nome);
    b.inserir(conta);
}
function consultar() {
    // console.clear();
    console.log(' Consultar conta\n');
    var numConta = (0, readline_sync_1.question)(' Informe o numero da conta: ');
    var conta = b.consultar(numConta);
    var texto = "Conta n\u00E3o encontrada!!";
    if (conta != null) {
        texto = conta.toString();
    }
    console.clear();
    console.log('\n', texto);
}
function sacar() {
    // console.clear();
    console.log(' Sacar valor');
    var numConta = (0, readline_sync_1.question)(' Informe o numero da conta: ');
    var valorSaque = Number((0, readline_sync_1.question)(' Valor a sacar: '));
    var conta = b.consultar(numConta);
    var texto = "Conta n\u00E3o encontrada!!";
    if (conta != null) {
        conta.sacar(valorSaque);
        texto = "\n  Saque feito com sucesso!!\n  Saldo atual: ".concat(conta.consultarSaldo(), "  \n  ");
    }
    console.log('\n', texto);
}
function depositar() {
    console.log(' Depositar valor');
    var numConta = (0, readline_sync_1.question)(' Informe o numero da conta: ');
    var valorDeposito = Number((0, readline_sync_1.question)(' Valor do deposito: '));
    var conta = b.consultar(numConta);
    var texto = "Conta n\u00E3o encontrada!!";
    if (conta != null) {
        conta.depositar(valorDeposito);
        texto = "\n  Deposito feito com sucesso!!\n  Saldo atual: ".concat(conta.consultarSaldo(), "  \n  ");
    }
    console.log('\n', texto);
}
