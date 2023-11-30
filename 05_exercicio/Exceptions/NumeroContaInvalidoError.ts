import { AplicacaoError } from "./AplicacaoError";

export class NumeroContaInvalidoError extends AplicacaoError {
  constructor(mensagem: string) {
      super(mensagem);
      this.name = "NumeroContaInvalidoError";
  }
}