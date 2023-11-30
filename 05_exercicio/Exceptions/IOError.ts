class IOError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "IOError";
    }
}

class EntradaVaziaError extends IOError {
    constructor(message: string) {
        super(message);
    }
}

class NaoEhNumeroError extends IOError {
    constructor(message: string) {
        super(message);
    }
}

class ValorNegativoError extends IOError {
    constructor(message: string) {
        super(message);
    }
}

export { IOError, EntradaVaziaError, NaoEhNumeroError, ValorNegativoError };