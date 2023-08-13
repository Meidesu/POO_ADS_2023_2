import { question } from "readline-sync";

class Retangulo {
  lado1: number = 0;
  lado2: number = 0;

  calcularArea(): number {
    return this.lado1 * this.lado2;
  }

  calcularPerimetro(): number {
    return (this.lado1 * 2) + (this.lado2 * 2);
  }

}

let lado1 = Number(question('Lado 1: '));
let lado2 = Number(question('Lado 2: '));

let newRect: Retangulo = new Retangulo();

newRect.lado1 = lado1;
newRect.lado2 = lado2;

console.log(newRect.calcularPerimetro());
