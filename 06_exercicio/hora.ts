class Hora{
  private _hora: number;
  private _min: number;
  private _sec: number;

  constructor( hora: number, min: number, sec: number){
    this._hora = hora;
    this._min = min;
    this._sec = sec;
  }

  get hora(): number {
  return this._hora;
  }

  get min(): number {
    return this._min;
  }

  get sec(): number {
    return this._sec;
  }

  Horario(): string {
    return `${this._hora}:${this._min}:${this._sec}`
  }

}

let horario: Hora = new Hora(1, 50, 2);

console.log(horario.hora);
console.log(horario.min);
console.log(horario.sec);

console.log(horario.Horario());



