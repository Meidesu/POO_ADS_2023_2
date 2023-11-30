import { copySync } from "fs-extra";
import { Banco } from "../05_exercicio/banco";
import { Conta } from "../05_exercicio/conta";
import { Input } from "../05_exercicio/Input";

let banco: Banco = new Banco();

let c1: Conta = new Conta("1", "Mei");
let c2: Conta = new Conta("1", "Liv");

let numpos: number = Input.inputNumberPositive("Digite um número positivo: ");

banco.inserir(c1);
banco.depositar("1", 100);

banco.inserir(c2); //Error: Conta com número duplicado. A conta não foi adicionada.
banco.depositar("1", 100);

console.log(banco.consultar("1").toString());

console.log(banco.qtdContas()) // Apenas uma conta foi adicionada ao banco
