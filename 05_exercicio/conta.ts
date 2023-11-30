import { AplicacaoError, SaldoInvalidoError, SaldoIsuficienteError } from "./Exceptions/AplicacaoError";

export class Conta {
    numero: string;
    nome: string
    private _saldo!: number;

    constructor(numero: string, nome: string, saldo: number = 0) {
        this.numero = numero;
        this.nome = nome;
        this.depositar(saldo);
    }

    public depositar(valor: number): void {

        this.validarValor(valor);
        
        if ( !this._saldo ) {
            this._saldo = 0;
        }
        
        this._saldo = this._saldo + valor;
    }

    public sacar(valor: number): void {

        this.validarValor(valor);

        if (this._saldo < valor) {
            throw new SaldoIsuficienteError(" \nSaldo insuficiente!!\nO valor a ser sacado é maior que o saldo disponível.\n")
        }

        this._saldo = this._saldo - valor;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor)
        contaDestino.depositar(valor);
    }

    public toString() {
        return `
    Numero da conta: ${this.numero}
    Nome do titular: ${this.nome}
    Saldo em conta: ${this._saldo}
    `
    }

    public validarValor(valor: number): void {
        if (valor < 0) {
            throw new AplicacaoError(" \nValor inválido!!\nO valor não pode ser negativo.\n");
        }
    }
}

export class Poupanca extends Conta {
    private _taxaJuros: number;

    constructor(numero: string, nome: string, taxa: number, saldo: number = 0) {
        super(numero, nome, saldo);
        this._taxaJuros = taxa;
    }


    public get taxaJuros(): number {
        return this._taxaJuros;
    }

    public renderJuros(): void {
        this.depositar(this.saldo * this._taxaJuros / 100);
    }

}


/* let c1: Conta = new Conta("1", "ely", 100);
let c2: Conta = new Conta("2", "joao", 200);
let c3: Conta;
c1 = c2;
c3 = c1;
c1.sacar(10); //saldo de 190
c1.transferir(c2, 50);
console.log(c1.consultarSaldo()); //190
console.log(c2.consultarSaldo()); //190
console.log(c3.consultarSaldo()); //190

export {Conta} */