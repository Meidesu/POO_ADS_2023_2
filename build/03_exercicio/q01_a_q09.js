"use strict";
//01.
function parImpar(numero) {
    return numero % 2 == 0;
}
console.log(parImpar(2), '\n');
//02.
function primo(numero) {
    for (var i = 2; i < numero; i++) {
        if (numero % i == 0) {
            return false;
        }
    }
    return numero !== 1;
}
console.log(primo(24), '\n');
//03.
function saudacao(nome, pronome) {
    if (pronome === void 0) { pronome = "Sr"; }
    return "".concat(pronome, ". ").concat(nome);
}
console.log(saudacao("Sávia", "Sra"), '\n');
//04.
function arrayParaString(array) {
    var string = "";
    for (var i = 0; i < array.length; i++) {
        string += String(array[i]);
        if (i < array.length - 1)
            string += "-";
    }
    return string;
}
console.log(arrayParaString([1, 2, 3, 4, 5]), '\n');
//05.
function soma(x, y) {
    return x + y;
}
console.log(soma(1, 2)); // soma os numeros
console.log(soma(1, "2")); // concatena 
console.log(soma(1), '\n'); // Não houve checagem do parâmetro opcional
//6.
function exibir() {
    var parametros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parametros[_i] = arguments[_i];
    }
    var out = "";
    for (var _a = 0, parametros_1 = parametros; _a < parametros_1.length; _a++) {
        var item = parametros_1[_a];
        out += "".concat(item, " ");
    }
    console.log(out.trim());
}
exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");
//7.
var ola = function () { return "Olá"; };
console.log(ola(), '\n');
//8.
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var pares = array.filter(function (item) { return item % 2 == 0; });
console.log(pares, '\n');
//09.
var arrayDobrado = array.map(function (x) { return x * 2; });
console.log(arrayDobrado, '\n');
var somaArray = array.reduce(function (sum, x) { return sum + x; });
console.log(somaArray, '\n');
