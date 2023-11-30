import { Conta } from "../05_exercicio/conta";

// Testes questão 4

//Crie duas contas e teste o método transferir de modo que a conta a ser debitada não possua saldo suficiente. Explique o que ocorreu.

let c1: Conta = new Conta("1", "Mei");
c1.depositar(10);

let c2: Conta = new Conta("2", "Ryo");
c2.depositar(20);

c1.transferir(c2, 15); //Error: Saldo insuficiente!!

console.log(c1.saldo); // Codigo não executado
console.log(c2.saldo); // Codigo não executado

//Ocorreu um erro, pois o saldo da conta 1 é insuficiente para realizar a transferência, o que resulta em um saldo negativo, lançando uma exceção de saldo insuficiente.