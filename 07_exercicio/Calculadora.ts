import { Calculadora } from "../06_exercicio/calculadora";

class CalculadoraCientifica extends Calculadora{
  constructor(op1: number, op2:number) {
    super(op1, op2)
  }

  public exponecial(){
    return this.operando1 ** this.operando2
  }
}

let calcCient: CalculadoraCientifica = new CalculadoraCientifica(2, 3);

console.log(calcCient.somar());
console.log(calcCient.subtrair());
console.log(calcCient.multiplicar());
console.log(calcCient.dividir());
console.log(calcCient.exponecial());
