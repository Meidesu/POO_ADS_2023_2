class Empregado {
  private _salario: number = 50;

  constructor(salario: number) {
    this._salario = salario;
  }

  public calcularSalario(): number {
    return this._salario;
  }

}

class Diarista extends Empregado {

  constructor(salario: number) {
    super(salario);
  }

  public calcularSalario(): number {
    return super.calcularSalario() / 30;
  }
}

class Horista extends Diarista {

  constructor(salario: number) {
    super(salario);
  }

  public calcularSalario(): number {
    return super.calcularSalario() / 24;
  }

}

let empregado = new Empregado(1000);
console.log(empregado.calcularSalario());

let diarista = new Diarista(1000);
console.log(diarista.calcularSalario());

let horista = new Horista(1000);
console.log(horista.calcularSalario());

