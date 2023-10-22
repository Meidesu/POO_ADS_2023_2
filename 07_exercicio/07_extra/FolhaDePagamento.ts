import { Funcionario, Pessoa, Professor } from "./Pessoa";

class FolhaDePagamento {
  private _pessoas: Pessoa[] = [];

  constructor(pessoas: Pessoa[]) {
    this._pessoas = pessoas;
  }

  public calcularPagamentos(): number {
    let _total: number = 0;

    console.log(this._pessoas);
    

    for ( let pessoa of this._pessoas){
      if ( pessoa instanceof Funcionario ) {
        let funcionario: Funcionario = <Funcionario> pessoa;
        _total += funcionario.salario;
        console.log(funcionario.nomeCompleto);
        console.log(funcionario.salario);
      }
    }

    return _total;
  }
}


const pessoas: Pessoa[] = [
  new Funcionario('João', 'da Silva', '123', 1000),
  new Professor('Maria', 'de Souza', '456', 2000, 'Mestre')
];

const folhaDePagamento: FolhaDePagamento = new FolhaDePagamento(pessoas);

console.log(folhaDePagamento.calcularPagamentos()); // 3000
