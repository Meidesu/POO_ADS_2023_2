class Conta {
  numero: String;
  saldo: number;

  constructor(numero: String, saldo: number) {
    this.numero = numero;
    this.saldo = saldo;
  }

  sacar(valor: number): boolean{
    if ( this.saldo < valor ) return false;

    this.saldo = this.saldo - valor;
    return true;
  }

  depositar(valor: number): void {
    this.saldo = this.saldo + valor;
  }

  consultarSaldo(): number {
    return this.saldo;
  }

  transferir(contaDestino: Conta, valor: number): boolean {
    if (this.sacar){
      contaDestino.depositar(valor);
      return true;
    }
      return false;
  }
}


let c1: Conta = new Conta("1",100);
let c2: Conta = new Conta("2",100);
let c3: Conta;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferir(c2,50);
console.log(c1.consultarSaldo()); //90
console.log(c2.consultarSaldo()); //90
console.log(c3.consultarSaldo()); //90