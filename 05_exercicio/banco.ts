import {Conta, Poupanca} from './conta';
/*
let conta1: Conta = new Conta("1", 0);
let banco: Conta[] = [];
banco[0] = conta1;

banco.push(new Conta("2", 100));
console.log(banco[1].saldo);

console.log(banco[10].saldo);
*/

export class Banco {
    _contas: Conta[] = []

    public inserir(conta: Conta): void {      
      if ( this.consultar(conta.numero) == null){
        this._contas.push(conta);
      }
    }

    public consultar(numero: string): Conta|null {
        let contaProcurada: Conta|null = null;

        for (let i: number = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                contaProcurada = this._contas[i];
                break;
            }
        }

        return contaProcurada;
    }

    private _consultarPorIndice(numero: string): number {
        let indiceProcurado: number = -1;

        for (let i: number = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    public alterar(conta: Conta): void {
        let indiceProcurado: number =
                this._consultarPorIndice(conta.numero);
        
        if (indiceProcurado != -1) {
            this._contas[indiceProcurado] = conta;
        }
    }

    public excluir(numero: string): void {
        let indiceProcurado = this._consultarPorIndice(numero);

        if (indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i+1];
            }
            this._contas.pop();
            
        }
    }

    public sacar(numero: string, valor: number): void {
        let indiceProcurado: number = this._consultarPorIndice(numero);

        if (indiceProcurado != -1) { //Achou uma conta
            let conta: Conta = this._contas[indiceProcurado];    
            conta.sacar(valor);
        }
    }

    public transferir (numeroCredito: string, numeroDebito: string, valor: number): void{
      let indiceOrigem: number = this._consultarPorIndice(numeroDebito)
      let indiceDestino: number = this._consultarPorIndice(numeroCredito)

      if ( indiceDestino != -1 && indiceOrigem != -1){
        let contaDestino: Conta = this._contas[indiceDestino] 
        let contaOrigem: Conta = this._contas[indiceOrigem]

        contaOrigem.transferir(contaDestino, valor)
      }

    }

    public qtdContas (): number{
      let qtd = this._contas.length

      return qtd;
    }

    public saldoBanco (): number{
      let total: number = 0;

      for (let conta of this._contas){
        total += conta.saldo;
      }

      return total;
    }

    public mediaSaldo (): number {
      return this.saldoBanco() / this.qtdContas()
    }

    public renderJuros(numero: string): void {
      let _contaProcurada: Conta|null = this.consultar(numero);

      if ( _contaProcurada instanceof Poupanca ){
        (<Poupanca> _contaProcurada).renderJuros();
      }
    }
}


/* let b: Banco = new Banco();

b.inserir(new Poupanca("123", "meireles", 50, 100));
b.inserir(new Conta("456", "meireles", 100));

console.log(b.consultar("123"));
console.log(b.consultar("456"));

console.log(b.renderJuros("123"));
console.log(b.consultar("123"));
 */

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


*/
// let b: Banco = new Banco();
// console.log(b.contas); 