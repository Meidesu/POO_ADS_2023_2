import { question } from "readline-sync";
import { Banco } from './banco';
import { Conta, Poupanca } from "./conta";
import { importFiles, input, inputNumberPositive, limparTela, obterOpcao } from "./utils";

let b: Banco = new Banco();
let opcao: number = 0;

do {

  try {
    let menu = `
  Bem vindo!!
  
  Digite uma opção:
  1 - Cadastrar
  2 - Cadastrar Poupança
  3 - Consultar 
  4 - Sacar
  5 - Depositar 
  6 - Excluir
  7 - Transferir
  8 - Totalizações
  9 - Render Juros
  0 - Sair
  `
  
    opcao = obterOpcao(menu);

    limparTela();
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
  } catch (error: any) {
    console.log(`\n${error.message}`);    

  } finally {
    question("\n Operacao finalizada.\n Press <enter>", {hideEchoBack: true, mask: ''});
  }

} while (opcao != 0);

function inserirConta(): void {
  console.log("\n Cadastrar conta\n");

  let numero: string = input(' Digite o número da conta(xxxxx-x): ');
  let nome: string = input(' Nome do titular: ');
  let conta: Conta;

  conta = new Conta(numero, nome);
  b.inserir(conta);
}

function inserirPoupanca(): void {
  console.log("\n Cadastrar conta poupança\n");

  let numero: string = input(' Digite o número da conta(xxxxx-x): ');
  let nome: string = input(' Nome do titular: ');
  let taxa: number = inputNumberPositive(' Taxa de juros: ');
  let conta: Poupanca = new Poupanca(numero, nome, taxa);

  b.inserir(conta);
}

function consultar() {
  // console.clear();

  console.log(' Consultar conta\n');

  let numConta: string = input(' Informe o numero da conta(xxxxx-x): ');
  let conta: Conta|null = b.consultar(numConta);
  
  let texto = `Conta não encontrada!!`

  if ( conta != null ){
    texto = conta.toString()
  } 

  console.clear();
  console.log('\n' ,texto);
}

function sacar() {
  // console.clear();
  console.log(' Sacar valor');
  
  let numConta: string = input(' Informe o numero da conta(xxxxx-x): ');
  let conta: Conta|null = b.consultar(numConta);

  let valorSaque: number = inputNumberPositive(' Valor a sacar: ');
  
  b.sacar(numConta, valorSaque);
  // conta.sacar(valorSaque);

  console.log(` Saque feito com sucesso!!\n Saldo atual: ${conta.saldo}`);

}

function depositar() {
  console.log(' Depositar valor');
  
  let numConta: string = input(' Informe o numero da conta: ');
  let conta: Conta|null = b.consultar(numConta);

  let valorDeposito: number = inputNumberPositive(' Valor do deposito: ');

  b.depositar(numConta, valorDeposito);

  console.log(`Deposito feito com sucesso!!\nSaldo atual: ${conta.saldo}`);
}

function carregarContas() {
  let lines: string[] = importFiles("./contas.txt");
  
  for (let line of lines) {
    if (!line) continue;

    let dados = line.split(";");

    let tipo: string = dados[0];
    let numero: string = dados[1];
    let nome: string = dados[2];
    let saldo: number = Number(dados[3]);

    if (tipo == "C"){
      b.inserir(new Conta(numero, nome, saldo))
    }

    if (tipo == "CP"){
      let taxa: number = Number(dados[4]);

      b.inserir(new Poupanca(numero, nome, taxa, saldo))
    }
  }
}

function excluir() {
  console.log(' Excluir conta');
  
  let numConta: string = input(' Informe o numero da conta: ');

  b.consultar(numConta);
  b.excluir(numConta);

  console.log(`Conta excluida com sucesso!!`);
}

function transferir() {
  console.log(' Transferir valor');
  
  let numContaOrigem: string = input(' Informe o numero da conta de origem: ');
  b.consultar(numContaOrigem);

  let numContaDestino: string = input(' Informe o numero da conta de destino: ');
  b.consultar(numContaDestino);

  let valorTransferencia: number = inputNumberPositive(' Valor a transferir: ');

  b.transferir(numContaDestino, numContaOrigem, valorTransferencia);

  console.log(`Transferencia feita com sucesso!!`);

}

function totalizar() {
  console.log(' Totalizações');
  
  console.log(`\nTotal de contas: ${b.qtdContas()}`);
  console.log(`Total de saldo: ${b.saldoBanco()}`);
  console.log(`Média de saldo: ${b.mediaSaldo().toFixed(2)}`);
}

function renderJuros() {
  console.log(' Render juros');
  
  let numConta: string = input(' Informe o numero da conta: ');
  b.consultar(numConta);

  b.renderJuros(numConta);

  console.log(`Juros aplicados com sucesso!!`);

}

