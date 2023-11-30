import { Conta } from "../05_exercicio/conta";

// Testes questão 3

let c1: Conta = new Conta("1", "Mei");
c1.depositar(10);

c1.sacar(15); //Error: Saldo insuficiente!!

console.log(c1.saldo); // Codigo não executado