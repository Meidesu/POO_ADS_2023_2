import { question } from "readline-sync";
import { Banco } from "./banco";
import { Conta, Poupanca } from "./conta";
import { readFileSync } from "fs-extra";

// let input = question();
let b: Banco = new Banco();
let opcao: String = '';

do {
  console.clear()

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
  10 - Carregar contas
  0 - Sair
  `

  console.log(menu);
  
  opcao = question(" >> ");

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
  
  question("\n Operacao finalizada.\n Press <enter>");
} while (opcao != "0");

function inserirConta(): void {
  console.log("\n Cadastrar conta\n");

  let numero: string = question(' Digite o número da conta:');
  let nome: string = question(' Nome do titular: ');
  let conta: Conta;

  conta = new Conta(numero, nome);
  b.inserir(conta);
}

function inserirPoupanca(): void {
  console.log("\n Cadastrar conta poupança\n");

  let numero: string = question(' Digite o número da conta:');
  let nome: string = question(' Nome do titular: ');
  let taxa: number = Number(question(' Taxa de juros: '));
  let conta: Poupanca = new Poupanca(numero, nome, taxa);

  b.inserir(conta);
}

function consultar() {
  // console.clear();

  console.log(' Consultar conta\n');

  let numConta: string = question(' Informe o numero da conta: ');
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
  
  let numConta: string = question(' Informe o numero da conta: ');
  let valorSaque: number = Number(question(' Valor a sacar: '))

  let conta: Conta|null = b.consultar(numConta);
  let texto = `Conta não encontrada!!`

  if ( conta != null ){
    conta.sacar(valorSaque)

    texto = `
  Saque feito com sucesso!!
  Saldo atual: ${conta.saldo}  
  `
  } 

  console.log('\n', texto);
  
}

function depositar() {
  console.log(' Depositar valor');
  
  let numConta: string = question(' Informe o numero da conta: ');
  let valorDeposito: number = Number(question(' Valor do deposito: '));

  let conta: Conta|null = b.consultar(numConta);
  let texto = `Conta não encontrada!!`;

  if ( conta != null ){
    conta.depositar(valorDeposito);

    texto = `
  Deposito feito com sucesso!!
  Saldo atual: ${conta.saldo}  
  `;
  } 

  console.log('\n', texto);
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

export function importFiles(path: string): string[] {
  const dados = readFileSync(path, 'utf-8')
 
  return dados.split('\n') 
}
