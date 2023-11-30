"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputNumberPositive = exports.obterOpcao = exports.mostrarMenu = exports.importFiles = exports.limparTela = exports.input = void 0;
var fs_1 = require("fs");
var Input_1 = require("./Input");
function input(msg) {
    try {
        return Input_1.Input.input(msg);
    }
    catch (e) {
        console.log("aqui");
        console.log(e.message);
        return input(msg);
    }
}
exports.input = input;
function limparTela() {
    console.clear();
}
exports.limparTela = limparTela;
function importFiles(path) {
    var dados = (0, fs_1.readFileSync)(path, 'utf-8');
    return dados.split('\n');
}
exports.importFiles = importFiles;
function mostrarMenu(menu) {
    limparTela();
    console.log(menu);
}
exports.mostrarMenu = mostrarMenu;
function obterOpcao(menu) {
    mostrarMenu(menu);
    return inputNumberPositive(" >> ");
}
exports.obterOpcao = obterOpcao;
function inputNumberPositive(label) {
    if (label === void 0) { label = ''; }
    try {
        return Input_1.Input.inputNumberPositive(label);
    }
    catch (e) {
        console.log(e.message);
        return inputNumberPositive(label);
    }
}
exports.inputNumberPositive = inputNumberPositive;
