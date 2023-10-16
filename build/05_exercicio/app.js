"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importFiles = void 0;
var readline_sync_1 = require("readline-sync");
var banco_1 = require("./banco");
var conta_1 = require("./conta");
var fs_extra_1 = require("fs-extra");
// let input = question();
var b = new banco_1.Banco();
var opcao = '';
do {
    console.clear();
    var menu = "\n  Bem vindo!!\n  \n  Digite uma op\u00E7\u00E3o:\n  1 - Cadastrar\n  2 - Cadastrar Poupan\u00E7a\n  3 - Consultar \n  4 - Sacar\n  5 - Depositar \n  6 - Excluir\n  7 - Transferir\n  8 - Totaliza\u00E7\u00F5es\n  9 - Render Juros\n  10 - Carregar contas\n  0 - Sair\n  ";
    console.log(menu);
    opcao = (0, readline_sync_1.question)(" >> ");
    console.clear();
    switch (opcao) {
        case "1":
            inserirConta();
            break;
        case "2":
            inserirPoupanca();
            break;
        case "3":
            consultar();
            break;
        case "4":
            sacar();
            break;
        case "5":
            depositar();
            break;
        case "9":
            console.log(b._contas);
            break;
        case "10":
            carregarContas();
            break;
    }
    (0, readline_sync_1.question)("\n Operacao finalizada.\n Press <enter>");
} while (opcao != "0");
function inserirConta() {
    console.log("\n Cadastrar conta\n");
    var numero = (0, readline_sync_1.question)(' Digite o número da conta:');
    var nome = (0, readline_sync_1.question)(' Nome do titular: ');
    var conta;
    conta = new conta_1.Conta(numero, nome);
    b.inserir(conta);
}
function inserirPoupanca() {
    console.log("\n Cadastrar conta poupança\n");
    var numero = (0, readline_sync_1.question)(' Digite o número da conta:');
    var nome = (0, readline_sync_1.question)(' Nome do titular: ');
    var taxa = Number((0, readline_sync_1.question)(' Taxa de juros: '));
    var conta = new conta_1.Poupanca(numero, nome, taxa);
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
        texto = "\n  Saque feito com sucesso!!\n  Saldo atual: ".concat(conta.saldo, "  \n  ");
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
        texto = "\n  Deposito feito com sucesso!!\n  Saldo atual: ".concat(conta.saldo, "  \n  ");
    }
    console.log('\n', texto);
}
function carregarContas() {
    var lines = importFiles("./contas.txt");
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        if (!line)
            continue;
        var dados = line.split(";");
        var tipo = dados[0];
        var numero = dados[1];
        var nome_1 = dados[2];
        var saldo = Number(dados[3]);
        if (tipo == "C") {
            b.inserir(new conta_1.Conta(numero, nome_1, saldo));
        }
        if (tipo == "CP") {
            var taxa = Number(dados[4]);
            b.inserir(new conta_1.Poupanca(numero, nome_1, taxa, saldo));
        }
    }
}
function importFiles(path) {
    var dados = (0, fs_extra_1.readFileSync)(path, 'utf-8');
    return dados.split('\n');
}
exports.importFiles = importFiles;
