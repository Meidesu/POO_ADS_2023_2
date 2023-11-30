"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
var banco_1 = require("./banco");
var conta_1 = require("./conta");
var utils_1 = require("./utils");
var b = new banco_1.Banco();
var opcao = 0;
do {
    try {
        var menu = "\n  Bem vindo!!\n  \n  Digite uma op\u00E7\u00E3o:\n  1 - Cadastrar\n  2 - Cadastrar Poupan\u00E7a\n  3 - Consultar \n  4 - Sacar\n  5 - Depositar \n  6 - Excluir\n  7 - Transferir\n  8 - Totaliza\u00E7\u00F5es\n  9 - Render Juros\n  0 - Sair\n  ";
        opcao = (0, utils_1.obterOpcao)(menu);
        (0, utils_1.limparTela)();
        switch (opcao) {
            case 1:
                inserirConta();
                break;
            case 2:
                inserirPoupanca();
                break;
            case 3:
                consultar();
                break;
            case 4:
                sacar();
                break;
            case 5:
                depositar();
                break;
            case 6:
                excluir();
                break;
            case 7:
                transferir();
                break;
            case 8:
                totalizar();
                break;
            case 9:
                renderJuros();
                break;
            default:
                console.log("Opção inválida!!");
                break;
        }
    }
    catch (error) {
        console.log("\n".concat(error.message));
    }
    finally {
        (0, readline_sync_1.question)("\n Operacao finalizada.\n Press <enter>", { hideEchoBack: true, mask: '' });
    }
} while (opcao != 0);
function inserirConta() {
    console.log("\n Cadastrar conta\n");
    var numero = (0, utils_1.input)(' Digite o número da conta(xxxxx-x): ');
    var nome = (0, utils_1.input)(' Nome do titular: ');
    var conta;
    conta = new conta_1.Conta(numero, nome);
    b.inserir(conta);
}
function inserirPoupanca() {
    console.log("\n Cadastrar conta poupança\n");
    var numero = (0, utils_1.input)(' Digite o número da conta(xxxxx-x): ');
    var nome = (0, utils_1.input)(' Nome do titular: ');
    var taxa = (0, utils_1.inputNumberPositive)(' Taxa de juros: ');
    var conta = new conta_1.Poupanca(numero, nome, taxa);
    b.inserir(conta);
}
function consultar() {
    // console.clear();
    console.log(' Consultar conta\n');
    var numConta = (0, utils_1.input)(' Informe o numero da conta(xxxxx-x): ');
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
    var numConta = (0, utils_1.input)(' Informe o numero da conta(xxxxx-x): ');
    var conta = b.consultar(numConta);
    var valorSaque = (0, utils_1.inputNumberPositive)(' Valor a sacar: ');
    b.sacar(numConta, valorSaque);
    // conta.sacar(valorSaque);
    console.log(" Saque feito com sucesso!!\n Saldo atual: ".concat(conta.saldo));
}
function depositar() {
    console.log(' Depositar valor');
    var numConta = (0, utils_1.input)(' Informe o numero da conta: ');
    var conta = b.consultar(numConta);
    var valorDeposito = (0, utils_1.inputNumberPositive)(' Valor do deposito: ');
    b.depositar(numConta, valorDeposito);
    console.log("Deposito feito com sucesso!!\nSaldo atual: ".concat(conta.saldo));
}
function carregarContas() {
    var lines = (0, utils_1.importFiles)("./contas.txt");
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
function excluir() {
    console.log(' Excluir conta');
    var numConta = (0, utils_1.input)(' Informe o numero da conta: ');
    b.consultar(numConta);
    b.excluir(numConta);
    console.log("Conta excluida com sucesso!!");
}
function transferir() {
    console.log(' Transferir valor');
    var numContaOrigem = (0, utils_1.input)(' Informe o numero da conta de origem: ');
    b.consultar(numContaOrigem);
    var numContaDestino = (0, utils_1.input)(' Informe o numero da conta de destino: ');
    b.consultar(numContaDestino);
    var valorTransferencia = (0, utils_1.inputNumberPositive)(' Valor a transferir: ');
    b.transferir(numContaDestino, numContaOrigem, valorTransferencia);
    console.log("Transferencia feita com sucesso!!");
}
function totalizar() {
    console.log(' Totalizações');
    console.log("\nTotal de contas: ".concat(b.qtdContas()));
    console.log("Total de saldo: ".concat(b.saldoBanco()));
    console.log("M\u00E9dia de saldo: ".concat(b.mediaSaldo().toFixed(2)));
}
function renderJuros() {
    console.log(' Render juros');
    var numConta = (0, utils_1.input)(' Informe o numero da conta: ');
    b.consultar(numConta);
    b.renderJuros(numConta);
    console.log("Juros aplicados com sucesso!!");
}
