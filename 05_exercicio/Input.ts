import { question } from "readline-sync";
import { EntradaVaziaError, NaoEhNumeroError, ValorNegativoError } from "./Exceptions/IOError";

class Input {
  public static input(msg: string): string {
    let out: string = question(msg).trim();

    if (out == "") {
      throw new EntradaVaziaError("Entrada inválida!!\nA entrada não pode ser vazia.\n");
    }

    return out;
  }

  public static inputNumber(msg: string): number {
    let out: number = Number(this.input(msg));

    if (isNaN(out)) {
      throw new NaoEhNumeroError("Entrada inválida!!\nA entrada deve ser um número.\n")
    }

    return out;
  }

  public static inputNumberPositive(msg: string): number {
    let out: number = this.inputNumber(msg);

    if (out < 0) {
      throw new ValorNegativoError("Entrada inválida!!\nA entrada deve ser um número positivo.\n")
    }

    return out;
  }

}

export { Input };