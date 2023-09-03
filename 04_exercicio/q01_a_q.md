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