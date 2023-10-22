class Moradia {
  private _area: number;
  private _endereco: string;

  constructor(area: number, endereco: string){
      this._area = area;
      this._endereco = endereco;
  }

  public get Area(): number {
      return this._area;
  }

  public get Endereco() : string {
      return this._endereco;
  }
  
}

class Casa extends Moradia {
    private _espelhoCorredor: Espelho;
    private _telhados: Telhado[] = [];
    private _paredes: Parede[] = [];

    constructor(area: number, endereco: string, espelhoCorredor: Espelho, telhados: Telhado[], paredes: Parede[]) {
        super(area, endereco);
        this._espelhoCorredor = espelhoCorredor;
        this._telhados = telhados;
        this._paredes = paredes;
    }

    public get EspelhoCorredor(): Espelho {
        return this._espelhoCorredor;
    }

    public get Telhados(): Telhado[] {
        return this._telhados;
    }

    public get Paredes(): Parede[] {
        return this._paredes;
    }
}

class Espelho {
    private _largura: number;
    private _altura: number;
    private _tipoVidro: String;
    
    constructor(largura: number, altura: number, tipoVidro: String) {
        this._largura = largura;
        this._altura = altura;
        this._tipoVidro = tipoVidro;
    }
    
    public get Largura(): number {
        return this._largura;
    }
    
    public get Altura(): number {
        return this._altura;
    }

    public get TipoVidro(): String {
        return this._tipoVidro;
    }
}

class Parede {
  public _altura: number;
  public _largura: number;
  public _acabamento: String;

  constructor(altura: number, largura: number, acabamento: String) {
      this._altura = altura;
      this._largura = largura;
      this._acabamento = acabamento;
  }

  public get Altura(): number {
      return this._altura;
  }

  public get Largura(): number {
      return this._largura;
  }

  public get Acabamento(): String {
      return this._acabamento;
  }
}

class Telhado {
    private _tipoTelha: String;
    private _area: number;

    constructor(tipoTelha: String, area: number) {
        this._tipoTelha = tipoTelha;
        this._area = area;
    }

    public get TipoTelha(): String {
        return this._tipoTelha;
    }

    public get Area(): number {
        return this._area;
    }
}

