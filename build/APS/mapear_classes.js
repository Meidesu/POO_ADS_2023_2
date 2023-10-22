"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Moradia = /** @class */ (function () {
    function Moradia(area, endereco) {
        this._area = area;
        this._endereco = endereco;
    }
    Object.defineProperty(Moradia.prototype, "Area", {
        get: function () {
            return this._area;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Moradia.prototype, "Endereco", {
        get: function () {
            return this._endereco;
        },
        enumerable: false,
        configurable: true
    });
    return Moradia;
}());
var Casa = /** @class */ (function (_super) {
    __extends(Casa, _super);
    function Casa(area, endereco, espelhoCorredor, telhados, paredes) {
        var _this = _super.call(this, area, endereco) || this;
        _this._telhados = [];
        _this._paredes = [];
        _this._espelhoCorredor = espelhoCorredor;
        _this._telhados = telhados;
        _this._paredes = paredes;
        return _this;
    }
    Object.defineProperty(Casa.prototype, "EspelhoCorredor", {
        get: function () {
            return this._espelhoCorredor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Casa.prototype, "Telhados", {
        get: function () {
            return this._telhados;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Casa.prototype, "Paredes", {
        get: function () {
            return this._paredes;
        },
        enumerable: false,
        configurable: true
    });
    return Casa;
}(Moradia));
var Espelho = /** @class */ (function () {
    function Espelho(largura, altura, tipoVidro) {
        this._largura = largura;
        this._altura = altura;
        this._tipoVidro = tipoVidro;
    }
    Object.defineProperty(Espelho.prototype, "Largura", {
        get: function () {
            return this._largura;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Espelho.prototype, "Altura", {
        get: function () {
            return this._altura;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Espelho.prototype, "TipoVidro", {
        get: function () {
            return this._tipoVidro;
        },
        enumerable: false,
        configurable: true
    });
    return Espelho;
}());
var Parede = /** @class */ (function () {
    function Parede(altura, largura, acabamento) {
        this._altura = altura;
        this._largura = largura;
        this._acabamento = acabamento;
    }
    Object.defineProperty(Parede.prototype, "Altura", {
        get: function () {
            return this._altura;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Parede.prototype, "Largura", {
        get: function () {
            return this._largura;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Parede.prototype, "Acabamento", {
        get: function () {
            return this._acabamento;
        },
        enumerable: false,
        configurable: true
    });
    return Parede;
}());
var Telhado = /** @class */ (function () {
    function Telhado(tipoTelha, area) {
        this._tipoTelha = tipoTelha;
        this._area = area;
    }
    Object.defineProperty(Telhado.prototype, "TipoTelha", {
        get: function () {
            return this._tipoTelha;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telhado.prototype, "Area", {
        get: function () {
            return this._area;
        },
        enumerable: false,
        configurable: true
    });
    return Telhado;
}());
