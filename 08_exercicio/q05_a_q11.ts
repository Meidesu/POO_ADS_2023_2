import { Banco } from "../05_exercicio/banco";
import { Conta } from "../05_exercicio/conta";

// Testes questão 5 a 11

let banco: Banco = new Banco();

let c1: Conta = new Conta("12345-0", "Mei");
// c1.depositar(20);
let c2: Conta = new Conta("12345-1", "Her");
// c2.depositar(20); 

// c1.sacar(15);

// c2.depositar(-20); //Error: Valor inválido!!

banco.inserir(c1);
banco.depositar("12345-0", 5);

banco.inserir(c2);
banco.depositar("12345-1", 20);

banco.transferir("12345-1", "12345-0", 10); //Error: Saldo insuficiente!!

console.log(c1.saldo); // Codigo não executado
console.log(c2.saldo); // Codigo não executado

// A exceção foi propagada porem não é confiável pois não trata a exceção de forma adequada, apenas lança uma mensagem de erro e para a execução do código.