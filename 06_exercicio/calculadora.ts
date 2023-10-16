export class Calculadora {
  private _operando1: number;
  private _operando2: number;

  constructor(op1: number, op2:number){
    this._operando1 = op1;
    this._operando2 = op2;
  }

  public somar(): number {
    return this._operando1 + this._operando2;
  }

  public subtrair(): number {
    return this._operando1 - this._operando2;
  }

  public multiplicar(): number {
    return this._operando1 * this._operando2;
  }

  public dividir(): number|null {
    let result: number|null = null;

    if ( this._operando2 != 0 ){
      result = this._operando1 / this._operando2
      return result;
    }

    return result
  }

  protected get operando1(){
    return this._operando1;
  }
  
  protected get operando2(){
    return this._operando2;
  }
}

// let calc1: Calculadora = new Calculadora(4, 2);
// //console.log(calc1._operando1); -> Property '_operando1' is private and only accessible within class 'Calculadora'.
// console.log(calc1.somar()); //6
// console.log(calc1.subtrair()); //2
// console.log(calc1.multiplicar()); //8
// console.log(calc1.dividir()); //2
