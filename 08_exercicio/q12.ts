import { Banco } from "../05_exercicio/banco";
import { Conta, Poupanca } from "../05_exercicio/conta";

let banco: Banco = new Banco();

banco.inserir(new Poupanca("1", "Mei", 0.5));

banco.depositar("1", 100);
banco.renderJuros("1");
console.log(banco.consultar("1").saldo);

banco.inserir(new Conta("2", "Her"));

banco.depositar("2", 100);
banco.renderJuros("2"); //Error: Conta não é poupança!!
console.log(banco.consultar("2").saldo); //Código não executado