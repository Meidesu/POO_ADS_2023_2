class Calculadora {
  private operando1: number;
  private operando2: number;

  constructor(op1: number, op2:number){
    this.operando1 = op1;
    this.operando2 = op2;
  }

  public somar(): number {
    return this.operando1 + this.operando2;
  }

  public subtrair(): number {
    return this.operando1 - this.operando2;
  }

  public multiplicar(): number {
    return this.operando1 * this.operando2;
  }

  public dividir(): number|null {
    let result: number|null = null;

    if ( this.operando2 != 0 ){
      result = this.operando1 / this.operando2
      return result;
    }

    return result
  }
}

let calc1: Calculadora = new Calculadora(4, 2);
//console.log(calc1.operando1); -> Property 'operando1' is private and only accessible within class 'Calculadora'.
console.log(calc1.somar()); //6
console.log(calc1.subtrair()); //2
console.log(calc1.multiplicar()); //8
console.log(calc1.dividir()); //2
