/**
 * Variaveis
 */

/*Tipos primitivos:
* boolean
* number
* string
*/
let ligado: boolean = false;
// por inferencia
let desligado = false; // desta maneira ele irá herdar o tipo
let nome: string = "Gustavo";
let idade: number = 30;
let altura: number = 1.9;

/* Tipos especiais
* null
* undefined
*/
let nulo : null = null;
let indefinido: undefined = undefined;



/**Tipos abrangentes
 * any
 * void
 */
let retorno: void;
function executaQuery(): void{}
let retornoView: any = "Qualquer coisa";

// Objeto sem previsibilidade
let produto: Object = {
    name: "Gustavo",
    cidade: "DF",
    idade: 30
};

// Objeto com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "caneta",
    preco: 45.80,
    unidades: 50
}

/**
 * Arrays
 */
let dados: string[] = ["Gustavo","Felipe","Ana","Adriana"];
let dados2: Array<string> = ["Gustavo","Felipe","Ana","Adriana"];

let infos: (string | number)[] = ["Gustavo", 28];

/**
 * Tuplas
 */
let boleto:[string, number, number] = ["Conta de Agua", 199.90, 258846];

/**
 * Arrays métodos
 */
dados.pop();

/**
 * Datas
 */
let aniversario: Date = new Date("2023-7-28 16:56");
console.log(aniversario.toString());