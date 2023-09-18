import {Conta} from './conta';
/*
let conta1: Conta = new Conta("1", 0);
let banco: Conta[] = [];
banco[0] = conta1;

banco.push(new Conta("2", 100));
console.log(banco[1].consultarSaldo());

console.log(banco[10].saldo);
*/

export class Banco {
    contas: Conta[] = []

    inserir(conta: Conta): void {      
      if ( this.consultar(conta.numero) == null){
        this.contas.push(conta);
      }
    }

    consultar(numero: string): Conta {
        let contaProcurada: Conta = null;

        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                contaProcurada = this.contas[i];
                break;
            }
        }

        return contaProcurada;
    }

    consultarPorIndice(numero: string): number {
        let indiceProcurado: number = -1;

        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    alterar(conta: Conta): void {
        let indiceProcurado: number =
                this.consultarPorIndice(conta.numero);
        
        if (indiceProcurado != -1) {
            this.contas[indiceProcurado] = conta;
        }
    }

    excluir(numero: string): void {
        let indiceProcurado = this.consultarPorIndice(numero);

        if (indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i+1];
            }
            this.contas.pop();
            
        }
    }

    sacar(numero: string, valor: number): void {
        let indiceProcurado: number = this.consultarPorIndice(numero);

        if (indiceProcurado != -1) { //Achou uma conta
            let conta: Conta = this.contas[indiceProcurado];    
            conta.sacar(valor);
        }
    }

    transferir (numeroCredito: string, numeroDebito: string, valor: number): void{
      let indiceOrigem: number = this.consultarPorIndice(numeroDebito)
      let indiceDestino: number = this.consultarPorIndice(numeroCredito)

      if ( indiceDestino != -1 && indiceOrigem != -1){
        let contaDestino: Conta = this.contas[indiceDestino] 
        let contaOrigem: Conta = this.contas[indiceOrigem]

        contaOrigem.transferir(contaDestino, valor)
      }

    }

    qtdContas (): number{
      let qtd = this.contas.length

      return qtd;
    }

    saldoBanco (): number{
      let total: number = 0;

      for (let conta of this.contas){
        total += conta.consultarSaldo();
      }

      return total;
    }

    mediaSaldo (): number {
      return this.saldoBanco() / this.qtdContas()
    }
}


/* let b: Banco = new Banco();
b.inserir(new Conta("11111-2", "ely", 100));
//console.log(b.consultar("11111-2"));
//console.log(b.consultar("22222-2"));

let contaAlterada:  Conta | null= b.consultar("11111-2");

contaAlterada.nome = "ely da silva miranda";

b.alterar(contaAlterada)
//console.log(b.consultar("11111-2"));

b.inserir(new Conta("22222-2", "joao", 200));
b.inserir(new Conta("33333-3", "maria", 300));

//b.excluir("11111-2");
// b.sacar("33333-3", 50)
console.log(b.consultar("33333-3"));

b.transferir('22222-2', '33333-3', 150)

console.log("Saldo total do banco:" ,b.saldoBanco());
console.log("Contas no banco:" ,b.qtdContas());
console.log("Média:", b.mediaSaldo());



console.log(b.contas); */