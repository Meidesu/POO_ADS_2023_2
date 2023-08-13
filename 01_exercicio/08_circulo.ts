import { question } from "readline-sync";

class Circulo{
  raio: number = 0;
  pi: number = 3.14;

  calcularPerimetro(): number{
    return this.raio * this.pi * 2;
  }

  calcularArea(): number{
    return (this.raio ** 2) * this.pi
  }
  
}

let newcirculo: Circulo = new Circulo()

let raio: number = Number(question('Raio do circulo: '))

newcirculo.raio = raio

console.log(`Perimetro: ${newcirculo.calcularPerimetro()}`)
console.log(`Area: ${newcirculo.calcularArea()}`)