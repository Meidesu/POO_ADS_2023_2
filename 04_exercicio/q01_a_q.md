# Exercicio 04

1. F - V - F - F - V - V - V
2. Sim, os atributos de uma classe precisam ser inicializados na definição da classe ou no construtor.
3. 
```ts
class Hotel {
  quantReservas : number = 0;

  constructor(valor: number){
    this.quantReservas = valor;
  }

  adicionarReserva() : void {
    this.quantReservas++;
  }
}

let hotel : Hotel = new Hotel(2);
console.log(hotel.quantReservas);

```

4. O contrutor da classe Radio recebe  um parâmetro do tipo number, sendo assim o construtor deve ser chamado passando um argumento do tipo number.
```ts
class Radio {
  volume : number;

  constructor(volume : number) {
    this.volume = volume;
  
  }
}
  let r : Radio = new Radio(2);
  r.volume = 10;
```
5.
```ts
class Conta {
  numero: String;
  saldo: number;

  constructor(numero: String, saldo: number) {
    this.numero = numero;
    this.saldo = saldo;
  }

  sacar(valor: number): void {
    this.saldo = this.saldo - valor;
  }

  depositar(valor: number): void {
    this.saldo = this.saldo + valor;
  }

  consultarSaldo(): number {
    return this.saldo;
  }

  transferir(contaDestino: Conta, valor: number): void {
    this.sacar(valor);
    contaDestino.depositar(valor);
  }
}


let c1: Conta = new Conta("1",100);
let c2: Conta = new Conta("2",100);
let c3: Conta;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferir(c2,50);
console.log(c1.consultarSaldo()); //90
console.log(c2.consultarSaldo()); //90
console.log(c3.consultarSaldo()); //90
```
  a. As três variáveis apontam para o mesmo objeto.
  b. Ele continua existindo na memoria, mas sem nenhuma referencia apontando para ele.

6.
```ts
class Saudacao {
  texto: string;
  destinatario: string;

  constructor(texto: string, destinatario: string) {
    this.texto = texto;
    this.destinatario = destinatario;
  }

  obterSaudacao() {
    return `${this.texto}, ${this.destinatario}.`
  }
}

let saudacao1: Saudacao = new Saudacao('Olá', 'Lívia');
console.log(saudacao1.obterSaudacao());

```

7·
```ts 
class Triangulo {
  private ladoA: number;
  private ladoB: number;
  private ladoC: number;

  constructor(ladoA: number, ladoB: number, ladoC: number) {
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
  }

  formaTriangulo(): boolean {
    return Math.abs(this.ladoB - this.ladoC) < this.ladoA && this.ladoA < this.ladoB + this.ladoC;
  }

  ehIsoceles(): boolean {
    if (!this.formaTriangulo()) return false;

    return this.ladoA === this.ladoB || this.ladoA === this.ladoC || this.ladoB === this.ladoC;
  }

  ehEquilatero(): boolean {
    if (!this.formaTriangulo()) return false;

    return this.ladoA === this.ladoB && this.ladoA === this.ladoC;
  }

  ehEscaleno(): boolean {
    if (!this.formaTriangulo()) return false;

    return this.ladoA !== this.ladoB && this.ladoA !== this.ladoC && this.ladoB !== this.ladoC;
  }
}

const triangulo1 = new Triangulo(3, 4, 5);
console.log("Triângulo 1");
console.log("Forma um triângulo:", triangulo1.ehIsoceles());
console.log("É isósceles:", triangulo1.ehIsoceles());
console.log("É equilátero:", triangulo1.ehEquilatero());
console.log("É escaleno:", triangulo1.ehEscaleno());
console.log("");

const triangulo2 = new Triangulo(7, 7, 7);
console.log("Triângulo 2");
console.log("Forma um triângulo:", triangulo2.ehIsoceles());
console.log("É isósceles:", triangulo2.ehIsoceles());
console.log("É equilátero:", triangulo2.ehEquilatero());
console.log("É escaleno:", triangulo2.ehEscaleno());
console.log("");

const triangulo3 = new Triangulo(2, 3, 4);
console.log("Triângulo 3");
console.log("Forma um triângulo:", triangulo3.ehIsoceles());
console.log("É isósceles:", triangulo3.ehIsoceles());
console.log("É equilátero:", triangulo3.ehEquilatero());
console.log("É escaleno:", triangulo3.ehEscaleno());
```

8.
```ts
class Equipamento {
  ligado: boolean = false;

  liga(){
    if ( this.ligado == false) {
      this.ligado = true;
    } 
    
  }

  desliga(){
    if ( this.ligado == true) {
      this.ligado = false;
    } 
    
  }

  inverte(){
    this.ligado = !this.ligado;
  }

  estaLigado(){
    return this.ligado;

  }

  
}
  let equipamento: Equipamento = new Equipamento();

  console.log("Equipamento está ligado:", equipamento.estaLigado());
  equipamento.liga();

  console.log("Equipamento está ligado:", equipamento.estaLigado());
  equipamento.liga();

  console.log("Equipamento está ligado:", equipamento.estaLigado());
  equipamento.desliga();

  console.log("Equipamento está ligado:", equipamento.estaLigado());
  equipamento.desliga();

  console.log("Equipamento está ligado:", equipamento.estaLigado());
  equipamento.inverte();

  console.log("Equipamento está ligado:", equipamento.estaLigado());
  equipamento.inverte();
  
  console.log("Equipamento está ligado:", equipamento.estaLigado());
```

9.
```ts

  sacar(valor: number): boolean{
    if ( this.saldo < valor ) return false;

    this.saldo = this.saldo - valor;
    return true;
  }

  transferir(contaDestino: Conta, valor: number): boolean {
    if (this.sacar){
      contaDestino.depositar(valor);
      return true;
    }
      return false;
  }
```
