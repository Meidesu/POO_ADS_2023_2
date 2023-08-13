import { question } from "readline-sync"

class SituacaoFinanceira{
  valorCreditos: number = 0;
  valorDebitos: number = 0;

  saldo(): number{
    return this.valorCreditos - this.valorDebitos;
  }
}

let newSituacao: SituacaoFinanceira = new SituacaoFinanceira();

let creditos: number = Number(question('Creditos: '));
let debitos: number = Number(question('debitos: '));

newSituacao.valorCreditos = creditos;
newSituacao.valorDebitos = debitos;

console.log(`Situação: ${newSituacao.saldo()}`);


/*
Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e
valorDebitos. Crie um método chamado saldo() que retorna/calcula a diferença
entre crédito e débito. Instancie uma classe SituacaoFinanceira, inicialize os dois
atributos e exiba o resultado do método saldo().
*/