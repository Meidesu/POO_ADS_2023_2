import { readFileSync } from "fs";
import { Input } from "./Input";

export function input(msg: string): string {
  try {
    return Input.input(msg);
  } catch (e: any) {

    console.log("aqui");
    

    console.log(e.message);
    return input(msg);
  }
}

export function limparTela() {
  console.clear();
}

export function importFiles(path: string): string[] {
  const dados = readFileSync(path, 'utf-8')
 
  return dados.split('\n') 
}

export function mostrarMenu(menu: string) {
  limparTela();

  console.log(menu);
}
export function obterOpcao(menu: string): number {
  
  mostrarMenu(menu);

  return inputNumberPositive(" >> ");
}

export function inputNumberPositive(label: string = ''): number {
  try {

    return Input.inputNumberPositive(label);
  } catch (e: any) {
    console.log(e.message);

    return inputNumberPositive(label);
  }
}