class Pessoa {
  private _nome: string;
  private _sobrenome: string;

  constructor(nome: string, sobrenome: string) {
    this._nome = nome.trim();
    this._sobrenome = sobrenome.trim();
  }

  public get nome(): string {
    return this._nome;
  }

  public get sobrenome(): string {
    return this._sobrenome;
  }

  public get nomeCompleto(): string {
    return `${this._nome} ${this._sobrenome}`;
  }

}

// const pessoa = new Pessoa('   Antonio  ', '  Meireles   ');
// console.log(pessoa.nome); // João
// console.log(pessoa.sobrenome); // da Silva

// const pessoa2 = new Pessoa('Maria', 'de Souza');
// console.log(pessoa2.nome); // Maria
// console.log(pessoa2.sobrenome); // de Souza

// console.log(pessoa.nomeCompleto); // João da Silva
// console.log(pessoa2.nomeCompleto); // Maria de Souza

class Funcionario extends Pessoa {
  private _matricula: string;
  private _salario: number;

  constructor(nome: string, sobrenome: string, matricula: string, salario: number) {
    super(nome, sobrenome);
    this._matricula = matricula.trim();
    this._salario = salario;
  }

  public get matricula(): string {
    return this._matricula;
  }

  public get salario(): number {
    return this._salario;
  }

  public calcularPrimeiraParcela(): number {
    return this._salario * 0.6;
  }

  public calcularSegundaParcela(): number {
    return this._salario * 0.4;
  }

}

class Professor extends Funcionario {
  private _titulacao: string;

  constructor(nome: string, sobrenome: string, matricula: string, salario: number, titulacao: string) {
    super(nome, sobrenome, matricula, salario);
    this._titulacao = titulacao.trim();
  }

  public calcularPrimeiraParcela(): number {
    return super.calcularPrimeiraParcela() + super.calcularSegundaParcela();    
  }

  public calcularSegundaParcela(): number {
    return 0;
  }
}

export { Pessoa, Funcionario, Professor };