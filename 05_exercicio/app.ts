import { question } from "readline-sync";
import { Banco } from "./banco";
import { Conta } from "./conta";

// let input = question();
let b: Banco = new Banco();
let opcao: String = '';

do {
  console.clear()

  let menu = `
  Bem vindo!!
  
  Digite uma opção:
  1 - Cadastrar
  2 - Consultar
  3 - Sacar
  4 - Depositar 
  5 - Excluir
  6 - Transferir
  7 - Totalizações
  0 - Sair
  `

  console.log(menu);
  
  opcao = question(" >> ");

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
  
  question("\n Operacao finalizada.\n Press <enter>");
} while (opcao != "0");

function inserir(): void {
  console.log("\n Cadastrar conta\n");

  let numero: string = question(' Digite o número da conta:');
  let nome: string = question(' Nome do titular: ');
  let conta: Conta;

  conta = new Conta(numero, nome);
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