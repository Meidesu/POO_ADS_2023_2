class AplicacaoError extends Error {
    constructor(mensagem: string) {
        super(mensagem);
        this.name = "AplicacaoError";
    }
}

class SaldoIsuficienteError extends AplicacaoError {
    constructor(mensagem: string) {
        super(mensagem);
        this.name = "SaldoIsuficienteError";
    }
}

class SaldoInvalidoError extends AplicacaoError {
    constructor(mensagem: string) {
        super(mensagem);
        this.name = "SaldoInvalidoError";
    }
}

class ContaInexistenteError extends AplicacaoError {
    constructor(mensagem: string) {
        super(mensagem);
        this.name = "ContaInexistenteError";
    }
}

class PoupancaInvalidaError extends AplicacaoError {
    constructor(mensagem: string) {
        super(mensagem);
        this.name = "PoupancaInvalidaError";
    }
}

// export class NumeroContaInvalidoError extends AplicacaoError {
//     constructor(mensagem: string) {
//         super(mensagem);
//     }
// }



export { AplicacaoError, SaldoIsuficienteError, SaldoInvalidoError, ContaInexistenteError, PoupancaInvalidaError};